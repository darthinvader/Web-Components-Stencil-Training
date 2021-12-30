import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ycp-side-drawer',
  styleUrl: './side-drawer.scss',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true }) open: boolean;
  render() {
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
