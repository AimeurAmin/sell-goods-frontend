import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() isExpanded = false;
  @Output() logOut = new EventEmitter();
  @Output() toggle = new EventEmitter();
  @Output() lock = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
