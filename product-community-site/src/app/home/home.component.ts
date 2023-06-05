import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{
  user!: string | null;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user);
    this.user = localStorage.getItem("cur-user");
    throw new Error('Method not implemented.');
  }

}
