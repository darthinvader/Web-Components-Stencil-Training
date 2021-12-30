class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipIcon;
    this._tooltipVisible = false;
    this._tooltipText = "Some Dummy Tooltip text";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        div {
          font-weight: normal;
          background-color: black;
          color: white;
          top:1.5rem;
          left: 0.25rem;
          position: absolute;
          z-index:10;
          padding: 0.15rem;
          border-radius: 3px;
          box-shadow: 1px 1px 6px rgba(0,0,0,0.26) 
        }

        :host(.important) {
          background-color: var(--color-primary, #ccc);
          padding: 0.15rem;
        }

        :host-context(p) {
          font-weight:bold;
        }

        .highlight{
          background-color: red;
        }

        ::slotted(.highlight) {
          border-bottom: 1px dotted yellow;
        }

        .icon {
          background-color: black;
          color: white;
          padding: 0.15rem 0.5rem;
          text-align: center;
          border-radius: 50%;
        }
      </style>
      <slot>Some default</slot>
      <span class="icon">?</span>
    `;
  }
  connectedCallback() {
    this._tooltipText = this.getAttribute("text") || this._tooltipText;
    this._tooltipIcon = this.shadowRoot.querySelector("span");
    this._tooltipIcon.addEventListener("mouseenter", () => {
      this._tooltipVisible = true;
      this._render();
    });
    this._tooltipIcon.addEventListener("mouseleave", () => {
      this._tooltipVisible = false;
      this._render();
    });
    this._render();
  }

  _render() {
    let tooltipContainer = this.shadowRoot.querySelector("div");
    if (this._tooltipVisible) {
      this.tooltipContainer = document.createElement("div");
      this.tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(this.tooltipContainer);
    } else {
      if (tooltipContainer) this.shadowRoot.removeChild(this.tooltipContainer);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    if (oldValue === newValue) {
      return;
    }

    if (name === "text") {
      this._tooltipText = newValue;
    }
  }

  disconnectedCallback() {
    console.log("disconnected");
  }

  static get observedAttributes() {
    return ["text"];
  }
}

customElements.define("ycp-tooltip", Tooltip);
