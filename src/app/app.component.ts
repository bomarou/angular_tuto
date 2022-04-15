import { Component } from '@angular/core';

@Component({
  selector: 'app-roots',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.scss']
  styles :[`
    p{
    color:red;
  }`]
})
export class AppComponent {
  name = 'test_app';
}
