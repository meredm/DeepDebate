import { Component, OnInit } from 'angular2/core';
import { InputboxComponent} from '../inputbox/inputbox.component';

@Component({
  selector: 'app-totownhall',
  templateUrl: 'app/totownhall/totownhall.component.html',
  styleUrls: ['app/totownhall/totownhall.component.css'],
  directives: [InputboxComponent]
})
export class TotownhallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
