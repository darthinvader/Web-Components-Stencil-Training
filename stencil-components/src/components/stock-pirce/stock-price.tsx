import { Component, h, State } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';

@Component({ tag: 'ycp-stock-price', styleUrl: './stock-price.scss', shadow: true })
export class StockPrice {
  @State() fetchedPrice: number;

  onFetchStockPrice(event: Event) {
    event.preventDefault();
    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`)
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
