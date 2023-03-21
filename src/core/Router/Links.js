import { APP_EVENTS } from '../../constants/appEvents';
import { Component } from '../Component';
import { eventEmmiter } from '../EventEmmiter';

export class Link extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['to', 'children'];
  }

  onClick = (evt) => {
    evt.preventDefault();
    eventEmmiter.emit(APP_EVENTS.changeRoute, { target: this.props.to });
  };

  componentDidMount() {
    this.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    console.log(this.props.children);
    return `
      <a href="${this.props.to}">
        <slot></slot>
      </a>
      `;
  }
}

customElements.define('route-link', Link);
