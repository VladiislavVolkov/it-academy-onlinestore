import { Component } from '../../../core/Component';

class ContactsPage extends Component {
  render() {
    return `
        <h1>Contacts</h1>
        `;
  }
}

customElements.define('contacts-page', ContactsPage);
