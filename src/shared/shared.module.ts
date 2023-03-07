import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideRemoteConfig(() => getRemoteConfig()),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireRemoteConfigModule,
  ],
  declarations: [MenuComponent, SidebarComponent],
  exports: [MenuComponent, SidebarComponent, MenubarModule, ButtonModule],
  providers: [],
})
export class SharedModule {
  constructor() {
    // remoteConfig.settings.minimumFetchIntervalMillis = 0;
    // remoteConfig.settings.fetchTimeoutMillis = 1000;
  }
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
