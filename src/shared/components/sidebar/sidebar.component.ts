import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Output } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';
import { RemoteConfigService } from 'src/core/services/remote-config.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('widthGrow', [
      state(
        'closed',
        style({
          'margin-left': -270,
        })
      ),
      state(
        'open',
        style({
          'margin-left': 0,
        })
      ),
      transition('* => *', animate(100)),
    ]),
  ],
})
export class SidebarComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() items: any[] = [];
  @Input() showMenu: Boolean = true;
  @Output() showMenuChange = new EventEmitter<Boolean>();
  state = 'closed';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'sidebar.ticket-register',
        styleClass: this.activeCurrentPage('/ticket-register'),
        command: (event: any) => {
          this.activeItem(event);
          // this.router.navigate(['/ticket-register']);
        },
      },

      {
        label: 'sidebar.candidate-register',
        styleClass: this.activeCurrentPage('/candidate-register'),
        command: (event: any) => {
          this.activeItem(event);
        },
      },
      {
        label: 'sidebar.management-ticket',
        styleClass: this.activeCurrentPage('/candidates-management'),
        command: (event: any) => {
          this.activeItem(event);
        },
      },
      {
        label: 'sidebar.candidates-portfolio',
        styleClass: this.activeCurrentPage('/candidates-portfolio'),
        command: (event: any) => {
          this.activeItem(event);
        },
      },
    ];
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setWidthBasedOnScreen();
    }, 0);
  }
  setWidthBasedOnScreen() {
    if (window.innerWidth < 1000) {
      this.state = 'closed';
      this.showMenu = false;
      this.showMenuChange.emit(this.showMenu);
    }
    if (window.innerWidth >= 1000) {
      this.state = 'open';
      this.showMenu = true;
      this.showMenuChange.emit(this.showMenu);
    }
  }

  activeItem(event: any) {
    let item;
    if (event.target.tagName === 'A') {
      item = event.target;
    } else {
      item = event.target.parentNode;
    }
    let menuitem = document.getElementsByClassName('menuitem-link');
    for (let i = 0; i < menuitem.length; i++) {
      menuitem[i].classList.remove('active');
    }
    item.classList.add('active');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setStateToggle(changes['showMenu'].currentValue);
  }

  setStateToggle(value: Boolean) {
    this.showMenu = value;
    this.showMenu ? (this.state = 'open') : (this.state = 'closed');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth < 1000) {
      this.state = 'closed';
      this.showMenu = false;
      this.showMenuChange.emit(this.showMenu);
    }
    if (window.innerWidth >= 1000) {
      this.state = 'open';
      this.showMenu = true;
      this.showMenuChange.emit(this.showMenu);
    }
  }

  activeCurrentPage(url: string) {
    return this.router.url.includes(url)
      ? 'menuitem-link active'
      : 'menuitem-link';
  }
}
