import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})


export class NavbarComponent {

      constructor(public authService: AuthService) { }
    
      ngOnInit() {
      }
      

}
