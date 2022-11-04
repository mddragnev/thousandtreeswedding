import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword,Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  public login(username: string, password: string) {
    return signInWithEmailAndPassword(this.auth, username, password)
    .then((result: any) => {
      return true;
    })
    .catch((error: any) =>  {
      window.alert("User not found");
      return false;
    });
  }
}
