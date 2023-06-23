import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowContactsService {

  constructor(private http: HttpClient) { }


  //Get All Contacts 
  allContacts() {
    return this.http.get("https://average-fish-sundress.cyclic.app/allContacts");
  }

  //Post Add Contact
  addContact(data: any) {
    return this.http.post("https://average-fish-sundress.cyclic.app/addContact", data)
  }

  //Delete Contact
  deleteContact(id: number) {
    return this.http.delete(`https://average-fish-sundress.cyclic.app/removeContact/${id}`)
  }

  //Put Update Contact
  updateData(updatedData: any) {
    return this.http.put("https://average-fish-sundress.cyclic.app/updateContact", updatedData)
  }
}
