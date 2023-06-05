import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  {
  title = 'product-community-site';
  
  user!: string | null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
    this.user = localStorage.getItem("cur-user");
    throw new Error('Method not implemented.');
  }

}
