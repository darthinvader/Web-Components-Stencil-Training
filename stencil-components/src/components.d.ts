/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface YcpSideDrawer {
        "open": () => Promise<void>;
        "opened": boolean;
        "title": string;
    }
    interface YcpStockFinder {
    }
    interface YcpStockPrice {
        "stockSymbol": string;
    }
}
declare global {
    interface HTMLYcpSideDrawerElement extends Components.YcpSideDrawer, HTMLStencilElement {
    }
    var HTMLYcpSideDrawerElement: {
        prototype: HTMLYcpSideDrawerElement;
        new (): HTMLYcpSideDrawerElement;
    };
    interface HTMLYcpStockFinderElement extends Components.YcpStockFinder, HTMLStencilElement {
    }
    var HTMLYcpStockFinderElement: {
        prototype: HTMLYcpStockFinderElement;
        new (): HTMLYcpStockFinderElement;
    };
    interface HTMLYcpStockPriceElement extends Components.YcpStockPrice, HTMLStencilElement {
    }
    var HTMLYcpStockPriceElement: {
        prototype: HTMLYcpStockPriceElement;
        new (): HTMLYcpStockPriceElement;
    };
    interface HTMLElementTagNameMap {
        "ycp-side-drawer": HTMLYcpSideDrawerElement;
        "ycp-stock-finder": HTMLYcpStockFinderElement;
        "ycp-stock-price": HTMLYcpStockPriceElement;
    }
}
declare namespace LocalJSX {
    interface YcpSideDrawer {
        "opened"?: boolean;
        "title"?: string;
    }
    interface YcpStockFinder {
        "onYcpSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface YcpStockPrice {
        "stockSymbol"?: string;
    }
    interface IntrinsicElements {
        "ycp-side-drawer": YcpSideDrawer;
        "ycp-stock-finder": YcpStockFinder;
        "ycp-stock-price": YcpStockPrice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ycp-side-drawer": LocalJSX.YcpSideDrawer & JSXBase.HTMLAttributes<HTMLYcpSideDrawerElement>;
            "ycp-stock-finder": LocalJSX.YcpStockFinder & JSXBase.HTMLAttributes<HTMLYcpStockFinderElement>;
            "ycp-stock-price": LocalJSX.YcpStockPrice & JSXBase.HTMLAttributes<HTMLYcpStockPriceElement>;
        }
    }
}
