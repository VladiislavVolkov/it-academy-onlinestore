import { Component } from '../../../core/Component';

class Footer extends Component {
  render() {
    return `
    <div class="container">
        <footer>
          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2022 Company, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
        `;
  }
}

customElements.define('it-footer', Footer);
