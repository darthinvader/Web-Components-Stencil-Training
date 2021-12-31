import { Component } from '@stencil/core';
// Q19JRWNE8HZ6OHDK
@Component({ tag: 'ycp-stock-price', styleUrl: './stock-price.scss', shadow: true })
export class StockPrice {
  render() {
    return (
      <div>
        <form>
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
