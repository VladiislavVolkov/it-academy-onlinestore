import { Component } from '../../../core/Component';
import { databaseService } from '../../../services/DatabaseService';

class AdminPage extends Component {
  render() {
    return `
        <div class="container mt-5">
            <div class="mb-3">
                <h1>ADMIN PAGE - ITEM</h1>
            </div>

            <div class="mb-3 ">
                <label for="title" class="form-label">Title.item</label>
                <input type="text" class="form-control form-control-lg" id="Title.item">
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Description.item</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
            </div>

            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="price" class="col-form-label">Price</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="price" class="form-control" aria-labelledby="price">
                </div>
                <div class="col-auto">
                    <span id="price" class="form-text">777 BYN</span>
                </div>
            </div>                

        </div>    
        `;
  }
}

customElements.define('admin-page', AdminPage);
