class Tooltip extends HTMLElement {
  constructor() {
    super();
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    this.appendChild(tooltipIcon);
    console.log("It is working");
  }
}

customElements.define("ycp-tooltip", Tooltip);
