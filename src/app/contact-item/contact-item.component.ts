import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Contact } from '../shared/contact';

@Component({
    moduleId: module.id,
    selector: 'contact-item',
    templateUrl: './contact-item.component.html',
    styleUrls: ['./contact-item.component.css']
  })

export class ContactItemComponent {
    @Input() contact: Contact;
    @Output() delete = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.contact);
    }

    onDelete() {
        this.delete.emit(this.contact);
    }
}
