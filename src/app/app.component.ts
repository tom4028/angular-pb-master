import { Component } from '@angular/core';

export enum InboxType{
  Inbox = 1,
  Drafts = 2,
  Sent =3,
  AllMail = 4
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public parentInboxType: InboxType = InboxType.Sent;


  public selectedType(index:number){
    this.parentInboxType = index;
  }
}
