import { Component, OnDestroy } from '@angular/core';
import { NavbarService } from '../Service/navbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {
  showNavBar: boolean = true;
  subscription: Subscription;
  constructor(private navBarService: NavbarService) {
    this.subscription = this.navBarService.showNavBar.subscribe((value) => {
      this.showNavBar = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
