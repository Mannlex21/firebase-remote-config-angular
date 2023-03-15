import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { fetchAndActivate, getValue } from 'firebase/remote-config';
import { RemoteConfig } from '@angular/fire/remote-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  showMenu: Boolean = true;
  title = 'demo-remote-config';
  loading = false;
  theme = {
    theme: {
      '--text-color': { value: 'rgba(255, 255, 255, 0.87)' },
      '--primary-color-text': { value: '#121212' },
      '--surface-overlay': {
        value: '#262626',
      },
      '--surface-ground': { value: '#121212' },
      '--surface-900': { value: '#ffffff' },
      '--primary-color': { value: '#9FA8DA;' },
      '--surface-card': { value: '#1e1e1e' },
    },
  };
  constructor(private remoteConfig: RemoteConfig) {}
  ngOnInit(): void {
    // this.loading = true;
    // this.remoteConfig.settings.minimumFetchIntervalMillis = 1000; // configuración opcional
    // fetchAndActivate(this.remoteConfig).then((data) => {
    //   // realizar acciones después de recuperar y activar la configuración remota
    //   const v = getValue(this.remoteConfig, 'theme').asString();
    //   const json = JSON.parse(v);
    //   var style = document.createElement('style');
    //   let string = '';
    //   for (const key in json['theme']) {
    //     string += `${key}: ${json['theme'][key].value};`;
    //   }
    //   style.textContent = `body { ${string} }`;
    //   console.log(style.textContent);
    //   document.head.appendChild(style);
    //   this.loading = false;
    // });
  }
  toggleMenu($event: Boolean) {
    this.showMenu = !this.showMenu;
  }
  ngAfterViewInit(): void {
    this.setPaddingTop();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setPaddingTop();
  }

  setPaddingTop() {
    const container = document.getElementById('container') as HTMLElement;
    const height = container.offsetHeight;
    const generalContainer = document.querySelector(
      '#generalContainer'
    ) as HTMLElement;
    generalContainer.setAttribute('style', `padding-top: ${height}px`);
  }
}
