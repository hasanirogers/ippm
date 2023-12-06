import { html, css, LitElement } from 'lit';

class IPPMScreenshot extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          color: #5c0029;
          display: block;
          padding: 1rem;
          background-color: white;
        }

        img {
          cursor: pointer;
          width: auto;
          margin: auto;
          max-width: 100%;
          max-height: 40vh;
          outline: 1px dashed;
          outline-offset: 4px;
        }

        figure {
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        ::slotted(p) {
          font-size: 0.8rem;
          line-height: 1.5;
          margin: 1rem 0;
        }
      `
    ]
  }

  static get properties() {
    return {
      full: {
        type: Boolean,
        reflect: true
      },
      image: {
        type: String,
      },
      heading: {
        type: String,
      }
    }
  }

  constructor() {
    super();
    this.full = false;
  }

  firstUpdated() {
    this.modal = document.querySelector('ippm-modal');
  }

  render() {
    return html`
      <figure>
        <img src=${this.image} alt=${this.heading} @click=${() => this.handleClick()} />
        <figcaption>
          <slot></slot>
        </figcaption>
      </figure>
    `;
  }

  handleClick() {
    const figure = this.shadowRoot.querySelector('figure').cloneNode(true);
    this.modal.appendChild(figure);
    this.modal.addEventListener('click', () => this.clearModal());
  }

  clearModal() {
    const figure = this.modal.querySelector('figure');
    if (figure) figure.remove();
  }
}

window.customElements.get('ippm-screenshot') || window.customElements.define('ippm-screenshot', IPPMScreenshot);
