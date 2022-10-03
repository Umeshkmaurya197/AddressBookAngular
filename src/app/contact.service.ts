import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 constructor(private http:HttpClient) { }

  addContact(contact:any){
    return this.http.post("http://localhost:8080/address-book/add-contact",contact);
  }

  getAllContacts(){
    return this.http.get("http://localhost:8080/address-book/get-all-contacts");
  }


  getContactById(Id:number){
    return this.http.get("http://localhost:8080/address-book/get-contact/"+Id);
  }

  updateContactById(Id:number,contact:any){
    return this.http.put("http://localhost:8080/address-book/update-contact/"+Id,contact);
  }

  deleteContactById(Id:number){
    return this.http.delete("http://localhost:8080/address-book/delete-contact/"+Id)
  }

}
