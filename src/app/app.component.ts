import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  showMenu: Boolean = true;
  title = 'demo-remote-config';
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
