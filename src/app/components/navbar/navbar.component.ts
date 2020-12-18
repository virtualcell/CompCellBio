import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: {title:string, children: object[]}[] = [
    {
      title: 'Home',
      children: []
    },
    {
      title: 'Bills',
      children: [{
        icon: 'home',
        title: 'Bill Management'
      }]
    },
    {
      title: 'Claims',
      children: [{
        icon: 'home',
        title: 'Claim Management'
      }]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
