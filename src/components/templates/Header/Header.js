import { Component } from '../../../core/Component';
import '../../organisms/Navigation';
import '../../molecules/Menuitems';
import { appCategories } from '../../../constants/appCategories';

class Header extends Component {
  render() {
    return `
        <header>

        <it-navigation></it-navigation>
        
        <nav class="navbar navbar-expand-lg mt-3">
            <div class="container">
            <div class="collapse navbar-collapse d-flex justify-content-between">
                
                <menu-items items='${JSON.stringify(appCategories)}'></menu-items>

                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

            </div>
            </div>
        </nav>
        </header>
    `;
  }
}

customElements.define('it-header', Header);
