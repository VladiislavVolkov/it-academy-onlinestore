import { Component } from '../../../core/Component';

class RegisterForm extends Component {
  render() {
    return `
    <form>
    <div class="mb-3">
      <label class="form-label w-100">
        <p>Email<p>
        <input name="email" type="emails" class="form-control">
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label w-100">
        <p>Password<p>
        <input name="password" type="number" class="form-control" required>
      </label>
    </div>
    <div class="mb-3">
      <label class="form-label w-100">
        <p>Confirm Password<p>
        <input name="confirm-password" type="number" class="form-control" required>
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </form>
    `;
  }
}

customElements.define('register-form', RegisterForm);
