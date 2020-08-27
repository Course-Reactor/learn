import { LitElement, html, customElement } from 'lit-element';
import '../components/cr-layout.js';

@customElement('page-home')
export class PageHome extends LitElement {
  /**
   * Template
   */
  render() {
    return html`<h1>Classroom</h1>`;
  }
}
