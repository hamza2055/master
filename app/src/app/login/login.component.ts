import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: String = "hamza";
  Password: string = "Riaz";

  constructor() { }

  ngOnInit() {

    
  }

}
