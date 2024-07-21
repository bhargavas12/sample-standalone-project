import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Login/Service/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  totalUsers: number = 0;
constructor(private service: LoginService) {}
  ngOnInit() {
    this.service.GetToken().subscribe((res: any) => {
        console.log(res);
        const headers = new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${res}`
        });

        this.service.GetUsers(headers).subscribe({
          next: (data) => {
            console.log(data);
            this.totalUsers = data.length;
          },
          error: (error) => { 
            console.log(error);
           }
        });
      });
  }
}
