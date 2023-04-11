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
import { firebaseStorageService } from '../../../services/FirebaseStorageService';

import '../../molecules/Preloader';

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: menuItems[0],
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

  setActiveItem = (activeTab) => {
    this.setState((state) => {
      return {
        ...state,
        activeTab,
      };
    });
  };

  onChangeTab = ({ detail }) => {
    this.setActiveItem(detail.activeItem);
  };

  createCategory = ({ detail }) => {
    databaseService.createDocument(FIRESTORE_KEYS.categories, detail.data);
  };

  createProduct = ({ detail }) => {
    this.setIsLoading(true);
    const { data } = detail;

    console.log(data);
    firebaseStorageService
      .uploadFile(data.preview, 'products')
      .then((snapshot) => {
        firebaseStorageService.downloadURL(snapshot.ref).then((url) => {
          databaseService.createDocument('products', {
            ...data,
            preview: url,
          });
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        this.setIsLoading(false);
      });
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.on(APP_EVENTS.createCategory, this.createCategory);
    eventEmmiter.on(APP_EVENTS.createProduct, this.createProduct);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.off(APP_EVENTS.createCategory, this.createCategory);
    eventEmmiter.off(APP_EVENTS.createProduct, this.createProduct);
  }

  render() {
    return `
      <it-preloader is-loading="${this.state.isLoading}">
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
      </it-preloader>            
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
