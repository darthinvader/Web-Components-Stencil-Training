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
      this._tooltipContainer.style.backgroundColor = "black";
      this._tooltipContainer.style.color = "white";
      this._tooltipContainer.style.position = "absolute";
      this._tooltipContainer.style.zIndex = "100";

      this.appendChild(this._tooltipContainer);
      this.style.position = "relative";
    });
    tooltipIcon.addEventListener("mouseleave", () => {
      this.removeChild(this._tooltipContainer);
    });
    this.appendChild(tooltipIcon);
  }
}

customElements.define("ycp-tooltip", Tooltip);
