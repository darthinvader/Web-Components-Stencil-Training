import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ycp-side-drawer',
  styleUrl: './side-drawer.scss',
  shadow: true,
})
export class SideDrawer {
  @State() showContactInfo = false;

  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable: true }) open: boolean;

  onCloseDrawer = () => {
    this.open = false;
  };

  onContentChange = (content: string) => {
    this.showContactInfo = content === 'contact';
  };

  render() {
    let mainContent = <slot />;
    if (this.showContactInfo)
      mainContent = (
        <div id="contact-information">
          <h2>Contact Information</h2>
          <p>You can reach us via phone or email.</p>
          <ul>
            <li>Phone: 000666000666</li>
            <li>
              E-mail:<a href="mailto:something@nothing.com">something@nothing.com</a>
            </li>
          </ul>
        </div>
      );
    return (
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer}>X</button>
        </header>
        <section id="tabs">
          <button class={!this.showContactInfo ? 'active' : ''}>Navigation</button>
          <button onClick={() => this.onContentChange('contact')} class={this.showContactInfo ? 'active' : ''}>
            Contact
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>
    );
  }
}
