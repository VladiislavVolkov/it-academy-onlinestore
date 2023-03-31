import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { databaseService } from '../../../services/DatabaseService';

import '../../molecules/Tabs';
import { menuItems } from '../../molecules/Tabs/constants';

import '../../organisms/BlogForm';
import '../../organisms/ProductForm';
import '../../organisms/CategoryForm';

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: menuItems[0],
    };
  }

  setActiveItem = (activeTab) => {
    this.setState((state) => {
      return {
        ...state,
        activeTab,
      };
    });
  };

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

  onChangeTab = ({ detail }) => {
    this.setActiveItem(detail.activeItem);
  };

  componentDidMount() {
    this.addEventListener('submit', this.createCategory);
    eventEmmiter.on(APP_EVENTS.changeTab, this.onChangeTab);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.createCategory);
    eventEmmiter.off(APP_EVENTS.changeTab, this.onChangeTab);
  }

  render() {
    return `
        <div class="container mt-5">
            <div class="mb-5">
                <it-tabs menu-items='${JSON.stringify(menuItems)}' 
                    active-item='${JSON.stringify(this.state.activeTab)}'>
                </it-tabs>
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
