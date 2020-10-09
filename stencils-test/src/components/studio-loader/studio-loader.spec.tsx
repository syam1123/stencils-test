import { newSpecPage } from '@stencil/core/testing';
import { StudioLoader } from './studio-loader';

describe('studio-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StudioLoader],
      html: `<studio-loader></studio-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <studio-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </studio-loader>
    `);
  });
});
