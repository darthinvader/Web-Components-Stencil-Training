import { Component, Element, h, State } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({ tag: 'ycp-stock-price', styleUrl: './stock-price.scss', shadow: true })
export class StockPrice {
  @State() fetchedPrice: number;
  @Element() el: HTMLElement;

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
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
          <input id="stock-symbol" />
          <button type="submit">Fetch</button>
        </form>
        <div>
          <p>Price:{this.fetchedPrice}</p>
        </div>
      </div>
    );
  }
}
