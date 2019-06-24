import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 //pour stocker le token
 token: string;
 //pour stocker un role de user connecté
 role: string;
 //stocker l'id de user connecté
 id: string;
 //Initialiser une API
 //api_url = environment.baseUrl;
 //payload de type json
 headers = new HttpHeaders({
   'Content-Type': 'application/json'
 });

 //Injecter les dépendances
 constructor(
   private http: HttpClient,
   private router: Router,
   private route: ActivatedRoute,
   private cookieService: CookieService
 ) { }

 //Methode login qui prend email et password en param
 login(payload:FormGroup) {
   //const url = this.api_url + 'auth/login';
   //method post renvoie un observable de type any 
   return this.http.post<any>("url", payload, { headers: this.headers })
     .pipe(
       map(
         result => {
           //recuperer token de result
           this.token = result.token;
           //on renvoie le result
           return result;
         })
     );
 }

 

 //Methode resetpassword avec un email en param
 resetPassword(password: string, confirmPassword: string) {
   //Définir un objet js content avec un password et un confirm password et on le converti en objet json
   var content = JSON.stringify({
     password1: password,
     password2: confirmPassword,
     token: this.token
   });
   //const url = this.api_url + 'auth/password/reset';
   //method post renvoie un observable de type any
   return this.http.post<any>("url", content, { headers: this.headers });
 }

 //récuperer le user
 getUser() {
   let user =this.cookieService.get('user');
   if (user) {
     return JSON.parse(this.cookieService.get('user'));
   } else {
     this.router.navigateByUrl('login');
   }
   
 }
 
 isAuth(){
   let auth = localStorage.getItem('tokenf');
   if((auth)){
     return true
   }
 }

 //deconnecter on vide le cookie et localstorage
 logout() {
   localStorage.clear();
   this.cookieService.deleteAll();
   this.router.navigateByUrl('login');
 }
}
