import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  provideRemoteConfig,
  getRemoteConfig,
} from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireRemoteConfigModule,
  DEFAULTS,
  SETTINGS,
  AngularFireRemoteConfig,
} from '@angular/fire/compat/remote-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireRemoteConfigModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    // provideRemoteConfig(() => getRemoteConfig()),
    // provideStorage(() => getStorage()),
  ],
  providers: [
    // { provide: DEFAULTS, useValue: { enableAwesome: true } },
    // {
    //   provide: SETTINGS,
    //   useFactory: () =>
    //     isDevMode() ? { minimumFetchIntervalMillis: 10_000 } : {},
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(private remoteConfig: AngularFireRemoteConfig) {
  //   this.remoteConfig.fetchAndActivate();
  // }
}
