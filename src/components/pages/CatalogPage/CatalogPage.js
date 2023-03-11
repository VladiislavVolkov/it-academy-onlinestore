import { Component } from '../../../core/Component';
import { PRODUCTS } from '../../../constants/products';

import '../../molecules/Sidebar';
import '../../organisms/CardList';
import '../../molecules/Pagination';

class CatalogPage extends Component {
  constructor() {
    super();
    this.state = {
      products: PRODUCTS,
      limit: 10,
      currentPage: 1,
    };
  }

  getPieceOfData() {
    const { currentPage, limit } = this.state;

    const start = currentPage;
    const end = currentPage * limit;

    this.setState(() => {

    })
  }

  componentDidMount() {}

  render() {
    return `
      <div class="container mt-5 pt-5 border-top">
        <div class="row">
          <div class="col-sm-3 border-end">
            <it-sidebar></it-sidebar>
          </div>
          <div class="col-sm-9">
            <card-list products='${JSON.stringify(PRODUCTS)}'></card-list>
            <div class='mt-5'>
              <it-pagination></it-pagination>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('catalog-page', CatalogPage);
