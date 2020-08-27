import { html, fixture, expect } from '@open-wc/testing';

import { CourseReactorClassroom } from '../src/course-reactor-classroom.js';
import '../src/course-reactor-classroom.js';

describe('CourseReactorClassroom', () => {
  let element: CourseReactorClassroom;
  beforeEach(async () => {
    element = await fixture(html`
      <course-reactor-classroom></course-reactor-classroom>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
