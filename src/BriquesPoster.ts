import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("briques-poster")
export class BriquesPoster extends LitElement {

  @property() title = 'Brique du Web';

  static styles = css`
    :host {
      display: inline-block;
      width: 1920px;
      height: 1080px;
      background-image: url("assets/brick5.jpeg");
      background-repeat: repeat;
      background-size: auto;

    }

    main {
      flex-grow: 1;
    }


    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }
  `;

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        <p>Edit <code>src/BriquesPosters.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
