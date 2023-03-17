import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { storageService } from '../../../services/StorageService';
import './card.scss';

class Card extends Component {
  static get observedAttributes() {
    return ['image', 'title', 'description', 'price', 'id'];
  }

  addToCart = (evt) => {
    if (evt.target.closest('.btn')) {
      storageService.setItem(APP_STORAGE_KEYS.cartData, this.props);
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.addToCart);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addToCart);
  }

  render() {
    const { image, title, description, price } = this.props;

    return `
      <div class="card">
        <img class="image-fit" src="${image}"
          class="card-img-top" alt="image">
        <div class="card-body">
          <h5 class="card-title fix-line-of-title">${title}</h5>
          <p class="card-text fix-line-of-description">${description}</p>
          <div class='d-flex justify-content-between align-items-center border-top pt-2'>
            <strong class="card-title pricing-card-title mb-0">
              ${price} BYN
            </strong>
            <button class="btn btn-primary">Купить</button>
          </div>
        </div>
      </div>
        `;
  }
}

customElements.define('it-card', Card);
