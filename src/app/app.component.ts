import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Voitures';
  constructor(public authService: AuthService,
    private router:Router
  ){}
  onLogout()
  {
    this.authService.logout();
  }
  ngOnInit () {
    let isloggedin: string | null=localStorage.getItem('isloggedIn');;
    let loggedUser:string | null=localStorage.getItem('loggedUser');
   
    
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
}
