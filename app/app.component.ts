import { Component } from 'angular2/core';
import { TotownhallComponent} from './totownhall/totownhall.component'

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  directives: [TotownhallComponent]
})
export class AppComponent {
  title = 'Town Hall';
}
