export class ContactModel{
  fullName:string;
  phoneNumber:String;
  address:string;
  city:String;
  state:String;
  zip:string;

  constructor(fullName:string,phoneNumber:string,address:string,city:string,state:string,zip:string){
  this.fullName=fullName;
  this.phoneNumber=phoneNumber;
  this.address=address;
  this.city=city;
  this.state=state;
  this.zip=zip;
  }
}
