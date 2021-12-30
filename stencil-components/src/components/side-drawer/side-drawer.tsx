import { Component, h } from '@stencil/core';

@Component({
  tag: 'ycp-side-drawer',
  styleUrl: './side-drawer.scss',
  shadow: true,
})
export class SideDrawer {
  render() {
    return (
      <aside>
        <h1>The Side Drawer</h1>
      </aside>
    );
  }
}
