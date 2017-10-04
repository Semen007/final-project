import { Component } from '@angular/core';

import { Contact } from './shared/contact';
import { contacts } from './shared/data';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gooqle Contacts';
}
