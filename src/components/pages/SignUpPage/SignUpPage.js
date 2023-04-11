import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { authService } from '../../../services/Auth';
import '../../molecules/Preloader';
import '../../organisms/RegisterForm';

class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  register = async ({ detail }) => {
    const { data } = detail;
    this.setIsLoading(true);
    try {
      await authService.signUp(data.email, data.password);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.signUp, this.register);
  }
  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.signUp, this.register);
  }

  render() {
    return `
    <it-preloader is-loading="${this.state.isLoading}">
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
    </it-preloader>    
    `;
  }
}

customElements.define('sign-up-page', SignUpPage);
