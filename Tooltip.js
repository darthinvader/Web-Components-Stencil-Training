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
      </style>
      <slot>Some default</slot>
      <span> (?)</span>
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
