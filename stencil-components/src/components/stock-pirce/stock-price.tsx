import { Component, h } from '@stencil/core';

@Component({ tag: 'ycp-stock-price', styleUrl: './stock-price.scss', shadow: true })
export class StockPrice {
  onFetchStockPrice(event: Event) {
    event.preventDefault();
    console.log('Submitted');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
          <input id="stock-symbol" />
          <button type="submit">Fetch</button>
        </form>
        <div>
          <p>Price:{0}</p>
        </div>
      </div>
    );
  }
}
