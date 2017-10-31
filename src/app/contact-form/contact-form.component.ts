import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ContactService } from '../shared/contact.service';

@Component({
    moduleId: module.id,
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
  })

export class ContactFormComponent {

    firstName?: string = '';
    secondName?: string = '';
    phone?: number;
    birthday?: string = '';
    website?: string = '';
    email?: string = '';
    company?: string = '';

    constructor(
        private contactService: ContactService,
        public dialogRef: MatDialogRef<ContactFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

    onSubmit() {
        this.contactService.createContact(
            this.firstName,
            this.secondName,
            this.phone,
            this.birthday,
            this.website,
            this.email,
            this.company);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
