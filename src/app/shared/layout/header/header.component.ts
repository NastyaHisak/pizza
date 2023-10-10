import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  public loggedState: boolean = false;
  constructor(public cartService: CartService, private authServise: AuthService) {

  }

  ngOnInit() {
    this.authServise.isLogged$.subscribe((isLoggedIn: boolean) => {
      this.loggedState = isLoggedIn;
      console.log('State has been changed: ' + isLoggedIn)
    })
  }

  login(){
    this.authServise.logIn();
  }
  logout(){
    this.authServise.logOut();
  }
}
