import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Contact } from '../shared/contact';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

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

    constructor(public dialog: MatDialog) {}

    onToggle() {
        this.toggle.emit(this.contact);
    }

    onDelete() {
        this.delete.emit(this.contact);
    }

    openDialog(): void {
        let dialogRef = this.dialog.open(ContactDetailsComponent, {
          width: '250px',
        });

        dialogRef.afterClosed().subscribe();
    }
}
