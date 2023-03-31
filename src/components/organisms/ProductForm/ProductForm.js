import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { readerFile } from '../../../utils/readFile';

class ProductForm extends Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const isValid = Object.keys(data).every((key) => data[key] !== '');

    if (isValid) {
      eventEmmiter.emit(APP_EVENTS.createProduct, { data });
      evt.target.reset();
    }
  };

  onChange = (evt) => {
    if (evt.target.closest('.preview-input')) {
      const file = evt.target.files[0];
      readerFile(file)
        .then((result) => {
          const image = new Image();
          image.src = result;
          image.width = 200;
          image.height = 200;
          const previewBlock = this.querySelector('.preview-image');
          previewBlock.append(image);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
    this.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
    this.removeEventListener('change', this.onChange);
  }

  render() {
    return `
        <form action="../" enctype="multipart/form-data">

          <div class="mb-3">
            <label class="form-label">
              <p>Title</p>
              <input name="title" type="text" class="form-control" >
            </label>
          </div>

          <div class="mb-3">
            <label class="form-label">
              <p>Download a file</p>
              <input 
                name="preview" 
                type="file" 
                class="form-control preview-input" 
                accept="image/png, image/jpeg"
              >
              <div class="preview-image"></div>
            </label>
          </div>

          <div class="mb-3">
            <label class="form-label">
              <p>Price</p>
              <input name="price" type="number" class="form-control">
            </label>
          </div>

          <div class="mb-3">
            <label class="form-label w-100">
              <p>Product Description</p>
              <textarea class="form-control" rows="3"></textarea>
            </label>
          </div>

          <button type="submint" class="btn btn-primary">Save</button>

        </form>
        `;
  }
}

customElements.define('product-form', ProductForm);
