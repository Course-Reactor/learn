import { LitElement, html, css, customElement } from 'lit-element';

/**
 * Styles
 */
const style = css`
  :host {
    display: grid;
  }
`;

@customElement('cr-layout')
export class CrLayout extends LitElement {
  static styles = [style];

  /**
   * Template
   */
  render() {
    return html`<slot></slot>`;
  }
}
