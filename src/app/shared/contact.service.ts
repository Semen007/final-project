import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';

@Injectable()
export class ContactService {
    private serverUrl = 'http://localhost:3000/contacts';
    contacts: Contact[] = [];

    constructor(private http: Http) {}

    getContacts(): Promise<Contact[]> {
        return this.http.get(this.serverUrl)
                        .toPromise()
                        .then(res => res.json())
                        .then(contacts => this.contacts = contacts)
                        .catch(this.handleError);
    }

    createContact(firstName: string, secondName: string, phone: number, birthday: string, website: string, email: string, company: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        let contact = new Contact(firstName, secondName, phone, birthday, website, email, company);

        this.http.post(this.serverUrl, contact, options)
                 .toPromise()
                 .then(res => res.json())
                 .then(contacts => this.contacts.push(contact))
                 .catch(this.handleError);
    }

    deleteContact(contact: Contact) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        let url = `${this.serverUrl}/${contact.id}`;

        this.http.delete(url, options)
                 .toPromise()
                 .then(res => {
                     let index = this.contacts.indexOf(contact);
                     if (index > -1) {
                         this.contacts.splice(index, 1);
                     }
                 })
                 .catch(this.handleError);
        let index = this.contacts.indexOf(contact);

        if (index > -1) {
        this.contacts.splice(index, 1);
        }
    }

    // toggleContact(contact: Contact) {
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers });
    //     let url = `${this.serverUrl}/${contact.id}`;

    //     this.http.put(url, contact, options)
    //              .toPromise()
    //              .then(res => {
    //                 contact.chosen = !contact.chosen;
    //              })
    //              .catch(this.handleError);
    // }

    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}
