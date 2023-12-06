import { html, css, LitElement } from 'lit';

class IPPMButton extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --background-color: #5c1542;

          cursor: pointer;
          color: white;
          font-size: 0.8rem;
          font-weight: bold;
          text-transform: uppercase;
          display: inline-block;
          position: relative;
          overflow: hidden;
          border: 1px dashed var(--background-color);
        }

        a {
          color: inherit;
          display: inline-flex;
          gap: 1rem;
          align-items: center;
          margin: 0.25rem;
          text-decoration: none;
          padding: 1.5rem 2.5rem 1.5rem 1.5rem;
          background-color: var(--background-color);
        }

        .glass {
          width: 30%;
          height: 200%;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          background: rgba(255,255,255,0.1);
          transform-origin: 0 0;
          transform: rotate(-20deg) translateY(1rem);
          transition: all 300ms ease;
        }

        :host([hover]) .glass {
          transform: rotate(-20deg) scaleX(1.5) translateX(-1rem) translateY(1rem);
        }

        .chevron {
          transition: transform 300ms ease;
        }

        :host([hover]) .chevron {
          transform: translateX(1rem);
        }
      `
    ]
  }

  static get properties() {
    return {
      link: {
        type: String,
      },
      hover: {
        type: Boolean,
        reflect: true,
      },
    }
  }

  constructor() {
    super();

    this.addEventListener('mouseenter', () => { this.hover = true; });
    this.addEventListener('mouseleave', () => { this.hover = false; });
  }

  render() {
    return html`
      <a href=${this.link}>
        <slot></slot>
        <span class="glass"></span>
        <span class="chevron">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="1" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
        </span>
      </a>
    `;
  }
}

window.customElements.get('ippm-button') || window.customElements.define('ippm-button', IPPMButton);
