import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { Router } from '@angular/router';
import { LoginService } from '../../providers/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private login:LoginService) { }

  ngOnInit() {
  }
 

user = new User();

submitted = false;

onSubmit() {
  this.login.login(this.user)
  this.router.navigate(['/main']);
  console.log(this.user)
  this.submitted = true;
 }

}
