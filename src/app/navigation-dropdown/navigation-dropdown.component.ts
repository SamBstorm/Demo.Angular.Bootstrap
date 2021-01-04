import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-dropdown',
  templateUrl: './navigation-dropdown.component.html',
  styleUrls: ['./navigation-dropdown.component.scss']
})
export class NavigationDropdownComponent implements OnInit {

  @Input()
  listItem: any;

  constructor() { }

  ngOnInit(): void {
  }

}
