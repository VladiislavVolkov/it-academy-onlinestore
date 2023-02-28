import { Component } from '../../../core/Component';

class Header extends Component {
  render() {
    return `
        <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <div class="collapse navbar-collapse d-flex justify-content-between">
            <ul class="navbar-nav">

                <li class="nav-item">
                <a class="nav-link active" href="#">Главная</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="#">Блог</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" href="#">Контакты</a>
                </li>
            </ul>

            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link position-relative" href="#">
                    <img src="./images/icons/cart.svg" alt="cart" width="24" height="24">
                    <span class="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                    <span class="visually-hidden">unread messages</span>
                    </span>
                </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <nav class="navbar navbar-expand-lg mt-3">
        <div class="container">
            <div class="collapse navbar-collapse d-flex justify-content-between">
            <ul class="navbar-nav">

                <li class="nav-item">
                <a class="nav-link active" href="#">Одежда</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Обувь</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Аксессуары</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Спорт</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" style="color: #f93c00" href="#">Sale%</a>
                </li>
            </ul>

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
