import { Injectable } from '@angular/core';
interface Scripts {
  name: string;
  src: string;
}
export const LinkStore: any[] = [
  //   {
  //     name: 'themeCSS',
  //     href: 'https://mannlex21.github.io/firebase-remote-config-angular/src/assets/css/theme.css',
  //   },
  {
    name: 'themeCSS-googleapis',
    href: 'https://storage.googleapis.com/cdndemoqtp/primary-colors.css',
  },
];
@Injectable({
  providedIn: 'root',
})
export class ScriptService {
  private links: any = {};
  constructor() {
    LinkStore.forEach((link: any) => {
      this.links[link.name] = {
        loaded: false,
        href: link.href,
      };
    });
  }
  load(...links: string[]) {
    const promises: any[] = [];
    links.forEach((link) => promises.push(this.loadScript(link)));
    return Promise.all(promises);
  }
  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.links[name].loaded) {
        resolve({ link: name, loaded: true, status: 'Already Loaded' });
      } else {
        // load script
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `${this.links[name].href}?v=${Math.floor(
          Math.random() * 40000
        )}`;
        link.onload = () => {
          this.links[name].loaded = true;
          console.log(`${name} Loaded.`);
          resolve({ link: name, loaded: true, status: 'Loaded' });
        };
        link.onerror = (error: any) =>
          resolve({ link: name, loaded: false, status: 'Loaded' });
        document.getElementsByTagName('head')[0].appendChild(link);
      }
    });
  }
}
