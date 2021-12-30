class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
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
