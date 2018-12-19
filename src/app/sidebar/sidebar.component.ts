import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { InboxType } from '../inbox-type.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

public inboxTypes:string[];

@Output()
  public inboxTypeSelected:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.inboxTypes = [
      'inbox',
      'drafts',
      'sent',
      'all mail'
    ];
  }

  //Wubór skrzynki
  selectInboxType(index:number){
    //Rzutowanie InboxType na index czyli zamieniamy number na typ enum InboxType
    const inboxType = <InboxType>index;

    console.log("Wybór skrzynki: ",index,InboxType[inboxType]);
    this.inboxTypeSelected.emit(index);
  }



}
