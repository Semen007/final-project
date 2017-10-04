import { contacts } from './data';
import { Contact } from './contact';

export class ContactService {
    contacts: Contact[] = contacts;

    getContacts(): Contact[] {
        return this.contacts;
    }

    createContact(name: string) {
        let contact = new Contact(name);

        this.contacts.push(contact);
    }

    deleteContact(contact: Contact) {
        let index = this.contacts.indexOf(contact);

        if (index > -1) {
        this.contacts.splice(index, 1);
        }
    }

    toggleContact(contact: Contact) {
        contact.chosen = !contact.chosen;
    }
}
