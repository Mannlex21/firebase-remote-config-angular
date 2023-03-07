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
    this.remoteConfig.settings.minimumFetchIntervalMillis = 1000; // configuración opcional
    fetchAndActivate(this.remoteConfig).then((data) => {
      // realizar acciones después de recuperar y activar la configuración remota
      const v = getValue(this.remoteConfig, 'theme').asString();
      const json = JSON.parse(v);
      var style = document.createElement('style');
      let string = '';
      for (const key in json['theme']) {
        string += `${key}: ${json['theme'][key].value};`;
      }

      style.textContent = `body { ${string} }`;
      console.log(style.textContent);
      document.head.appendChild(style);
    });
  }

  showMenu() {
    this.isMenuShowed = !this.isMenuShowed;
    this.toggleMenu.emit(this.isMenuShowed);
  }
}
