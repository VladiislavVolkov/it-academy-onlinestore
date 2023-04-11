import { Component } from '../../../core/Component';

import '../../organisms/RegisterForm';

class SignUpPage extends Component {
  render() {
    return `
        <div class="container mt-5">
            <h1 class="text-center mt-5">SignUp</h1>
            <div class="row justify-content-center mt-5">
                <div class="col-4">
                    <div class="border p-4">
                        <register-form></register-form>
                    </div>
                </div>
            </div>    
        </div>
    `;
  }
}

customElements.define('sign-up-page', SignUpPage);
