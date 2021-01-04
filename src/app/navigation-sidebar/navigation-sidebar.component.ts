import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.scss']
})
export class NavigationSidebarComponent implements OnInit {

  navList: Array<any> = [
    { name: "First", link: "#" },
    { name: "Second", link: "#" },
    {
      name: "Third", children: [
        { name: "One", link: "#" },
        { name: "Two", link: "#" },
        { name: "Three", link: "#" }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
