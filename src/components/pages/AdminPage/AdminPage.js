import { Component } from '../../../core/Component';

class AdminPage extends Component {
  createCategory = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

  
  };

  componentDidMount() {
    this.addEventListener('submit', this.createCategory);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.createCategory);
  }

  render() {
    return `
        <div class="container mt-5">
            <div class="mb-3">
                <h2>ADMIN PAGE - ITEM</h2>
            </div>

            <div class="mb-3 ">
                <label class="form-label">Create category</label>
                <input type="text" class="form-control form-control-lg" placeholder="Please, enter your category">
            </div>              

        </div>    
        `;
  }
}

customElements.define('admin-page', AdminPage);
