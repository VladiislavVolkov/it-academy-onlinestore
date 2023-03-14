import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmitter } from '../../../core/EventEmitter';

class CategoryItems extends Component {
  static get observedAttributes() {
    return ['items'];
  }

  setCategory = (evt) => {
    evt.preventDefault();
    if (evt.target.closest('.nav-link')) {
      const id = evt.target.dataset.id;
      const items = JSON.parse(this.props.items);
      const selectedCategory = items.find((item) => item.id === Number(id));
      eventEmitter.emit(APP_EVENTS.setCategory, { selectedCategory });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.setCategory);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.setCategory);
  }

  render() {
    const items = JSON.parse(this.props.items);

    return `
        <ul class="navbar-nav">
            ${items
              .slice(0, 5)
              .map((item) => {
                return `
                    <li class="nav-item">
                        <a class="nav-link active" href="#" data-id="${item.id}">${item.name}</a>
                    </li>
                `;
              })
              .join(' ')}
        </ul>
    `;
  }
}

customElements.define('category-items', CategoryItems);
