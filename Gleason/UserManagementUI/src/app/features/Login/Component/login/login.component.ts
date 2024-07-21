import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserCreationObject, UserLogin } from '../../../../model/user';
import { LoginService } from '../../Service/login.service';
import { Router } from '@angular/router';
import { NavbarService } from '../../../../shared/Service/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  loginModel: UserLogin;
  constructor (private loginService: LoginService,
                private router: Router,
                private navBarService: NavbarService
  ){
    this.loginModel = {
      UserName: '',
      Password: ''
    };
  }
  Login()
  {
      console.log(this.loginModel.UserName, this.loginModel.Password);
      this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this.navBarService.hide();
  }

  ngOnDestroy(): void {
    this.navBarService.Display();
  }
}
