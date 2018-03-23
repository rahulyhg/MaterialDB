import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dbms = [
    { name: 'MySQL/MariaDB', id: '1' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
