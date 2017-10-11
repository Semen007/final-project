import { Component, OnInit } from '@angular/core';

import { Contact } from '../shared/contact';
import { ContactService } from '../shared/contact.service';

@Component({
    moduleId: module.id,
    selector: 'contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
  })

export class ContactListComponent implements OnInit {
    contacts: Contact[];

    constructor(private contactService: ContactService) {
        this.contacts = [];
    }

    ngOnInit() {
        this.contactService.getContacts().then(contacts => this.contacts = contacts);
    }

    delete(contact: Contact) {
        this.contactService.deleteContact(contact);
    }

    // toggle(contact: Contact) {
    //     this.contactService.toggleContact(contact);
    // }
}
