import { Component } from '../../../core/Component';

class Searchform extends Component {
  render() {
    return `
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    `;
  }
}

customElements.define('search-form', Searchform);
