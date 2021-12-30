class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = "Some Dummy Tooltip text";
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: black;
          color: white;
          position: absolute;
          z-index:10;
        }

        :host(.important) {
          background-color: lightgray;
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
    const tooltipIcon = this.shadowRoot.querySelector("span");
    tooltipIcon.addEventListener("mouseenter", () => {
      this._tooltipContainer = document.createElement("div");
      this._tooltipContainer.textContent = this._tooltipText;

      this.shadowRoot.appendChild(this._tooltipContainer);
      this.style.position = "relative";
    });
    tooltipIcon.addEventListener("mouseleave", () => {
      this.shadowRoot.removeChild(this._tooltipContainer);
    });
  }
}

customElements.define("ycp-tooltip", Tooltip);
