import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Contact } from '../shared/contact';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['../contact-form/contact-form.component.css']
})
export class ContactDetailsComponent {

  constructor(private contactService: ContactService,
              public dialogRef: MatDialogRef<ContactDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

}
