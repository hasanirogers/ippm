import { html, css, LitElement } from 'lit';

class IPPMDemoCard extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          color: #5c1542;
          line-height: 1.5;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          padding: 1rem;
          background-color: white;
        }

        p {
          flex: 1;
        }

        img {
          max-width: 100%;
        }

        h3 {
          font-size: 2rem;
          margin: 0 0 1rem 0;
          font-weight: 400;
          text-transform: uppercase;
        }

        ippm-button {
          align-self: start;
        }
      `
    ]
  }

  static get properties() {
    return {
      heading: {
        type: String,
      },
      image: {
        type: String,
      },
      excerpt: {
        type: String,
      },
      url: {
        type: String
      }
    }
  }

  render() {
    return html `
      <h3>${this.heading}</h3>
      <img src=${this.image}  alt=${this.heading} />
      <p>${this.excerpt}</p>
      <ippm-button link=${this.url}>See Interactive Post</ippm-button>
    `;
  }
}

window.customElements.get('ippm-demo-card') || window.customElements.define('ippm-demo-card', IPPMDemoCard);
