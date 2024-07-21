import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Login/Service/login.service';


@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.css'
})
export class UsermanagementComponent implements OnInit {
  Users: any;
  constructor(private userService: LoginService) { }

  ngOnInit(): void {
    this.userService.GetToken().subscribe({
      next: (data) => {

        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data}`
        });
        this.userService.GetUsers(headers).subscribe({
          next: (data) => {
            console.log(data);
            this.Users = data;
          },
          error: (error) => { 
            console.log(error);
           }
        });

  }});
  }

}
