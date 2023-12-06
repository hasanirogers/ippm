import { html, css, LitElement } from 'lit';

class IPPMNav extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: none;
          justify-self: flex-end;
          margin-right: 2rem;
          position: relative;
        }

        @media screen and (min-width: 960px) {
          :host(:not([hidden])) {
            display: flex;
          }
        }

        a {
          color: white;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.9rem;
          font-weight: bold;
          opacity: 0.75;
          text-decoration: none;
          transition: opacity 300ms ease;
        }

        a:hover {
          opacity: 1;
        }

        nav {
          display: flex;
          gap: 1rem;
        }

        div {
          position: absolute;
          bottom: -1rem;
          height: 2px;
          background: white;
          transition: all 500ms ease-in-out;
        }

        :host([hide-bar]) div {
          display: none;
        }
      `
    ]
  }

  static get properties() {
    return {
      active: {
        type: String,
        reflect: true,
      },
      width: {
        type: Number,
      },
      translateX: {
        type: Number
      },
      hideBar: {
        type: Boolean,
        reflect: true,
        attribute: 'hide-bar',
      }
    }
  }

  constructor() {
    super();
    this.active = 'intro';
  }

  updated() {
    this.slideToActive();
  }

  render() {
    return html`
      <nav>
        <a href="#intro" @click=${(event) => this.handleClick(event)}>Intro</a>
        <a href="#demo" @click=${(event) => this.handleClick(event)}>Demo</a>
        <a href="#spd" @click=${(event) => this.handleClick(event)}>Single Page Demos</a>
        <a href="#screenshots" @click=${(event) => this.handleClick(event)}>Screenshots</a>
        <a href="#faqs" @click=${(event) => this.handleClick(event)}>FAQs</a>
      </nav>
      <div style="width:${this.width}px; transform:translateX(${this.translateX}px);"></div>
    `;
  }

  handleClick(event) {
    this.active = event.target.getAttribute('href').replace('#', '');
    this.slideToActive();
  }

  slideToActive() {
    const activeElement = this.shadowRoot.querySelector(`[href="#${this.active}"]`);
    this.width = activeElement.offsetWidth;
    this.translateX = activeElement.offsetLeft;
  }
}

window.customElements.get('ippm-nav') || window.customElements.define('ippm-nav', IPPMNav);
