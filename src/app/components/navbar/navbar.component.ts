import { Component, OnInit } from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
  public app_name: string;
  public isLogged: boolean;
  constructor() {
    this.app_name = "HouseShop";
    this.isLogged = false;
  }
  ngOnInit() {}
}
