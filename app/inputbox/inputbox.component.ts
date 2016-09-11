import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: 'app/inputbox/inputbox.component.html',
  styleUrls: ['app/inputbox/inputbox.component.css']
})
export class InputboxComponent implements OnInit {

  constructor() { }

  text: string;

  politician: string;

  output: string = "In aliquet luctus lorem. Mauris id eros pellentesque, scelerisque sem id, mollis risus. Suspendisse eget neque vel metus tristique venenatis suscipit vitae dui. In pretium eleifend metus non ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum malesuada aliquet pharetra. Nunc non dui eu orci commodo lobortis. Mauris tempus elit erat, sit amet convallis lorem bibendum et. Cras venenatis metus ac lectus sollicitudin commodo. Aliquam sit amet euismod lorem, eget viverra metus. Nullam pharetra fermentum dui, in vestibulum nisl accumsan blandit. Praesent efficitur nunc vel quam ultrices, ut ornare massa cursus. Cras consectetur elementum risus et molestie. In ac tortor a justo eleifend tempor et at nunc. Cras volutpat arcu in nulla commodo mollis."

  check() {
  	if (this.politician === "Hillary Clinton") {
  		return true;
  	} else {
  		return false;
  	}
  }

  ngOnInit() {
  }


}
