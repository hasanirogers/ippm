import { html, css, LitElement } from 'lit';

class IPPMHex extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: none;
        }

        @media screen and (min-width: 960px) {
          :host {
            display: flex;
            margin: auto;
            width: 320px;
            height: 500px;
            position: relative;
            left: -4rem;
          }
        }

        #Polygon-1,
        #Polygon-2,
        #Polygon-3,
        #Polygon-4,
        #Polygon-5 {
          animation: float 1s infinite ease-in-out alternate;
        }
        #Polygon-2 {
          animation-delay: .2s;
        }
        #Polygon-3 {
          animation-delay: .4s;
        }
        #Polygon-4 {
          animation-delay: .6s;
        }
        #Polygon-5 {
          animation-delay: .8s;
        }

        @keyframes float {
          100% {
            transform: translateY(20px) translateX(20px)
          }
        }
      `
    ]
  }

  render() {
    return html`
      <svg viewBox="0 0 850 1075" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#ffffff" stroke-width="6" sketch:type="MSShapeGroup"></path>
            <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#ffffff" stroke-width="6" sketch:type="MSShapeGroup"></path>
            <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#ffffff" stroke-width="6" sketch:type="MSShapeGroup"></path>
            <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#ffffff" stroke-width="6" sketch:type="MSShapeGroup"></path>
            <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#ffffff" stroke-width="6" sketch:type="MSShapeGroup"></path>
        </g>
      </svg>
    `;
  }
}

window.customElements.get('ippm-hex') || window.customElements.define('ippm-hex', IPPMHex);
