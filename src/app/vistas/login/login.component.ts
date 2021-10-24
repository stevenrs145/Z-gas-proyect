import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.router.navigate(['dashboard']);
  }
}
