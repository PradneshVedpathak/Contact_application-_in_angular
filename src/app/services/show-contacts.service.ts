import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowContactsService {

  constructor(private http:HttpClient) { }

  allContacts(){
    return this.http.get("https://average-fish-sundress.cyclic.app/allContacts"); 
  }

  addContact(data : any){
    return this.http.post("https://average-fish-sundress.cyclic.app/addContact", data)
  }

  deleteContact(id : number){
    return this.http.delete(`https://average-fish-sundress.cyclic.app/removeContact/${id}`)
  }
}
