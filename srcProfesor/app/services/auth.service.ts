import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;  
  private readonly mockUserEmail = 'user@profesor.com';
  private readonly mockPassword = 'profesor123'; 

  constructor() { }

 
  login(email: string, password: string): Observable<{ success: boolean }> {

    if (email === this.mockUserEmail && password === this.mockPassword) {
      this.isAuthenticated = true;
      return of({ success: true });
    } else {
      return of({ success: false });
    }
  }

  
  logout(): void {
    this.isAuthenticated = false;
  }


  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
