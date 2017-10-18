import { Component } from '@angular/core';

import { Contact } from './shared/contact';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MatDialog } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gooqle Contacts';
  
  constructor(public dialog: MatDialog) { }
  
    openDialog(key) {
      let dialogRef = this.dialog.open(ContactFormComponent);
    }
}
