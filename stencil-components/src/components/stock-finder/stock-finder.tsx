import { Component, h } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';
@Component({
  tag: 'ycp-stock-finder',
  styleUrl: './stock-finder.scss',
  shadow: true,
})
export class StockFinder {
  stockNameInput: HTMLInputElement;

  onFindStocks(event: Event) {
    event.preventDefault();
    const stockName = this.stockNameInput.value;
    fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFindStocks.bind(this)}>
          <input id="stock-symbol" ref={el => (this.stockNameInput = el)} />
          <button type="submit">Find!</button>
        </form>
      </div>
    );
  }
}
