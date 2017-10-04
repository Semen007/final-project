import { Component } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
  })

export class ContactFormComponent {
    name: string = '';

    constructor(private contactService: ContactService) {}

    onSubmit() {
        this.contactService.createContact(this.name);
    }
}