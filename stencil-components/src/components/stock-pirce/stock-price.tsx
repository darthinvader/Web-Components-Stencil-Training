import { Component, Element, h, Listen, Prop, State, Watch } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({ tag: 'ycp-stock-price', styleUrl: './stock-price.scss', shadow: true })
export class StockPrice {
  stockInput: HTMLInputElement;
  initialStockSymbol: string;

  @State() fetchedPrice: number;
  @Element() el: HTMLElement;
  @State() stockUserInput: string;
  @State() stockInputValid = false;
  @State() error: string;

  @Prop() stockSymbol: string;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.stockUserInput = newValue;
      this.stockInputValid = true;
      this.fetchStockPrice(newValue);
    }
  }
  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    this.stockInputValid = this.stockUserInput.trim() !== '';
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    const stockSymbol = this.stockInput.value;
    this.fetchStockPrice(stockSymbol);
  }

  componentDidLoad() {
    console.log('ComponentDidLoad');
    if (this.stockSymbol) {
      this.initialStockSymbol = this.stockSymbol;
      this.stockUserInput = this.stockSymbol;
      this.stockInputValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  componentWillLoad() {
    console.log('componentWillLoad');
    console.log(this.stockSymbol);
  }

  componentWillUpdate() {
    console.log('Component Will Update');
  }

  componentDidUpdate() {
    console.log('Component Did Update');
    if (this.stockSymbol !== this.initialStockSymbol) {
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  fetchStockPrice(stockSymbol) {
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=demo${AV_API_KEY}`)
      .then(res => {
        if (res.status !== 200) throw new Error('Invalid');
        return res.json();
      })
      .then(parsedRes => {
        if (!parsedRes['Global Quote']['05. price']) throw new Error('Invalid Symbol');
        this.error = null;
        this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        console.log(parsedRes);
      })
      .catch(err => {
        this.error = err.message;
      });
  }

  @Listen('body:ycpSymbolSelected')
  onStockSymbolSelected(event: CustomEvent) {
    console.log('RUN');
    console.log('stock symbol selected: ' + event.detail);
    if (event.detail && event.detail !== this.stockSymbol) {
      this.fetchStockPrice(event.detail);
      this.stockSymbol = event.detail;
    }
  }

  hostData() {
    return { class: this.error ? 'error' : '' };
  }

  render() {
    let dataContent = <p>Please enter a symbol</p>;
    if (this.error) {
      dataContent = <p>{this.error}</p>;
    }
    if (this.fetchedPrice) {
      dataContent = <p>Price:{this.fetchedPrice}</p>;
    }
    return (
      <div>
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
          <input id="stock-symbol" ref={el => (this.stockInput = el)} value={this.stockUserInput} onInput={this.onUserInput.bind(this)} />
          <button type="submit" disabled={!this.stockInputValid}>
            Fetch
          </button>
        </form>
        <div>{dataContent}</div>
      </div>
    );
  }
}
