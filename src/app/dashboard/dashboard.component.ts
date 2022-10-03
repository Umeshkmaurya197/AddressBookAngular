import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  contactList:any=[];
  contactCount!: number;


  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    console.log("init start");

    this.getAllContact();

    console.log("init end");

  }
  getAllContact() {
    this.contactService.getAllContacts().subscribe((response: any) => {      //will work on 200=Ok success code
      this.contactList = response.data;
      this.contactCount=this.contactList.length;
    }
      // ,(error)=>{                              if invalid type of response code like 302=found
      //   console.log("error log",error);
      //   this.contactList=error.error.data;
      //}
    );

  }

  getContactByIdOnly(Id:number){
    this.contactService.getContactById(Id).subscribe((response:any)=>{
    this.contactList=response.data;
    })
  }

  onEdit(Id:number){
    this.router.navigate(['update',Id]);
  }


  deleteContactByIdOnly(Id:number){
    this.contactService.deleteContactById(Id).subscribe((response:any)=>{
      this.ngOnInit();
      this.router.navigate(['dashboard']);
    });
  }

}
