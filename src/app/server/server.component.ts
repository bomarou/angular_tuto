import { Component } from "@angular/core";

@Component({
    selector:'app-11',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    serverId=10; 
    serverStatus='off';

    getServerStatus(){
        return this.serverStatus;
    }

}