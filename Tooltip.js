class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = "Some Dummy Tooltip text";
  }
  connectedCallback() {
    this._tooltipText = this.getAttribute("text") || this._tooltipText;
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    tooltipIcon.addEventListener("mouseenter", () => {
      this._tooltipContainer = document.createElement("div");
      this._tooltipContainer.textContent = this._tooltipText;
      this.appendChild(this._tooltipContainer);
    });
    tooltipIcon.addEventListener("mouseleave", () => {
      this.removeChild(this._tooltipContainer);
    });
    this.appendChild(tooltipIcon);
  }
}

customElements.define("ycp-tooltip", Tooltip);
