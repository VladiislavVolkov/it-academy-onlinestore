import { Component } from '../../../core/Component';
import { databaseService } from '../../../services/DatabaseService';

class AdminPage extends Component {
  createCategory = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    databaseService.createDocument('categories', data).then(() => {
      evt.target.reset();
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
            <div class="mb-5">
                <form class="mb-3 border p-3">
                    <label class="form-label">Create category</label>
                    <input name="name" type="text" class="form-control" placeholder="Type a category name">
                </form>
            </div>
        </div>      
    `;
  }
}
customElements.define('admin-page', AdminPage);
