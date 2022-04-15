import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-1',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer =false;


  constructor() {
    setTimeout(()=>{
    this.allowNewServer=true;}
    ,3000);
   }

  ngOnInit(): void {
  }

}
