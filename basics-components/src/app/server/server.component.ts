import { Component } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  constructor()
  {
    server
    this.ServerName=servers.component.ServerName;
  }
  serverId:number = 10;
  ServerName:string ="test";
  ServerStatus:string="Online";

}
