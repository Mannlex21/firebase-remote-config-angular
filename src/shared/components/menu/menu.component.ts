import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  RemoteConfig,
  fetchAndActivate,
  getValue,
} from '@angular/fire/remote-config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items!: any[];
  isMenuShowed: Boolean = true;
  @Output() toggleMenu = new EventEmitter<Boolean>();

  constructor(private remoteConfig: RemoteConfig) {}

  ngOnInit() {
    this.items = [];
  }

  showMenu() {
    this.isMenuShowed = !this.isMenuShowed;
    this.toggleMenu.emit(this.isMenuShowed);
  }
}
