import { Component, Element, h, State } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({ tag: 'ycp-stock-price', styleUrl: './stock-price.scss', shadow: true })
export class StockPrice {
  stockInput: HTMLInputElement;

  @State() fetchedPrice: number;
  @Element() el: HTMLElement;
  @State() stockUserInput: string;
  @State() stockInputValid = false;

  onUserInput(event: Event) {
    this.stockUserInput = (event.target as HTMLInputElement).value;
    this.stockInputValid = this.stockUserInput.trim() !== '';
  }

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    const stockSymbol = this.stockInput.value;
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=demo${AV_API_KEY}`)
      .then(res => {
        return res.json();
      })
      .then(parsedRes => {
        this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        console.log(parsedRes);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
          <input id="stock-symbol" ref={el => (this.stockInput = el)} value={this.stockUserInput} onInput={this.onUserInput.bind(this)} />
          <button type="submit" disabled={!this.stockInputValid}>
            Fetch
          </button>
        </form>
        <div>
          <p>Price:{this.fetchedPrice}</p>
        </div>
      </div>
    );
  }
}
