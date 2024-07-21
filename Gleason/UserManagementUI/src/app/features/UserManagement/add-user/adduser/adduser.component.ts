import { Component } from '@angular/core';
import { UserCreationObject } from '../../../../model/user';
import { LoginService } from '../../../Login/Service/login.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  userModel: UserCreationObject;
  Customers: any;
  customerTypes:any = ['Customer1', 'Customer2', 'Customer3', 'Customer4'];
  constructor(private userService: LoginService) {
    this.userModel = {
      FirstName: '',
      UserName: '',
      LastName: '',
      Email: '',
      CustomerType: [],
      IsTrailUser: false,
      roles: []
    };
  }
  CreateUser() {

    this.userService.GetToken().subscribe({
      next: (data) => {

        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data}`
        });

        this.userService.CreateUser(this.userModel, headers).subscribe({
          next: (response) => { console.log(response); alert('user added successfully!'); this.reset();},
          error: (error) => { console.log(error); }
        });
      }});
  }
  CustomerTypeChanged(event: any) {
    this.userModel.CustomerType = event.target.value;
  }

  reset() {
    this.userModel.IsTrailUser = false;
  }
}
