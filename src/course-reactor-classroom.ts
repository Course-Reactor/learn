import { LitElement, html, customElement } from 'lit-element';
import { Router } from '@vaadin/router';
import routes from './routes';

@customElement('course-reactor-classroom')
export class CourseReactorClassroom extends LitElement {
  /**
   * Lifecycle Methods
   */
  firstUpdated() {
    const outlet = this.shadowRoot!.querySelector('#router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }

  /**
   * Template
   */
  render() {
    return html`<div id="router-outlet"></div>`;
  }
}
