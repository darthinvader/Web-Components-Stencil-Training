/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface YcpSideDrawer {
    }
}
declare global {
    interface HTMLYcpSideDrawerElement extends Components.YcpSideDrawer, HTMLStencilElement {
    }
    var HTMLYcpSideDrawerElement: {
        prototype: HTMLYcpSideDrawerElement;
        new (): HTMLYcpSideDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "ycp-side-drawer": HTMLYcpSideDrawerElement;
    }
}
declare namespace LocalJSX {
    interface YcpSideDrawer {
    }
    interface IntrinsicElements {
        "ycp-side-drawer": YcpSideDrawer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ycp-side-drawer": LocalJSX.YcpSideDrawer & JSXBase.HTMLAttributes<HTMLYcpSideDrawerElement>;
        }
    }
}
