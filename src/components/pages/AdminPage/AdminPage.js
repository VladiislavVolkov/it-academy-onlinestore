import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { databaseService } from '../../../services/DatabaseService';

import '../../molecules/Tabs';
import { forms } from '../../molecules/Tabs/constants';
import { menuItems } from '../../molecules/Tabs/constants';

import '../../organisms/BlogForm';
import '../../organisms/ProductForm';
import '../../organisms/CategoryForm';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';

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

  createCategory = ({ detail }) => {
    databaseService.createDocument(FIRESTORE_KEYS.categories, detail.data);
  };

  onChangeTab = ({ detail }) => {
    this.setActiveItem(detail.activeItem);
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.on(APP_EVENTS.createCategory, this.createCategory);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.off(APP_EVENTS.createCategory, this.createCategory);
  }

  render() {
    return `
        <div class="container mt-5">
            <div class="mb-5">
                <it-tabs menu-items='${JSON.stringify(menuItems)}' 
                    active-item='${JSON.stringify(this.state.activeTab)}'>
                </it-tabs>
                <div class='mb-5 border p-3'>
                    ${forms[this.state.activeTab.id]}
                </div>
            </div>
        </div>      
    `;
  }
}
customElements.define('admin-page', AdminPage);

{
  /* <form class="mb-3 border p-3">
<label class="form-label">Create category</label>
<input name="name" type="text" class="form-control" placeholder="Type a category name">
</form> */
}
