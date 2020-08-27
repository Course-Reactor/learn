import { LitElement, html, customElement } from 'lit-element';
import '../components/cr-layout.js';

@customElement('page-admin')
export class PageAdmin extends LitElement {
  /**
   * Template
   */
  render() {
    return html`<cr-layout><h1>Admin</h1></cr-layout>`;
  }
}
