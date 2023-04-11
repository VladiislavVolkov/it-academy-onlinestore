import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { getFormData } from '../../../utils/form';

class RegisterForm extends Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = getFormData(evt.target);
    eventEmmiter.emit(APP_EVENTS.signUp, {
      data: {
        email,
        password,
      },
    });
  };

  componentDidMount() {
    this.addEventListener('submit', this.onSubmit);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.onSubmit);
  }

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
            <input name="password" type="password" class="form-control" required>
          </label>

        </div>
        <div class="mb-3">

          <label class="form-label w-100">
            <p>Confirm Password<p>
            <input name="confirm-password" type="password" class="form-control" required>
          </label>

        </div>

        <button type="submit" class="btn btn-primary">Save</button>

      </form>
    `;
  }
}

customElements.define('register-form', RegisterForm);
