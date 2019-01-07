import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus ="No server was created";
serverCreated=true;
serverName='Test';
servers = ['Testserver', 'Testserver1']
  constructor() 
  {
    setInterval( () => {this.allowNewServer=true;} , 2000 );
   }

  ngOnInit() {
  }

  onCreateServer()
  {
      this.serverCreated=true;
      this.servers.push(this.serverName);
      this.serverCreationStatus="Server was created";
      
   
  }
  onUpdateServername($event:Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
