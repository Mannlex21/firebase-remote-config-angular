import { Injectable } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';
import { RemoteConfig, getValue } from '@angular/fire/remote-config';
@Injectable({ providedIn: 'root' })
export class RemoteConfigService {
  constructor(private remoteConfig: RemoteConfig) {}
  /**
   * Get remote config value by key
   */
  public async getValueByKey(key: string): Promise<any> {
    return getValue(this.remoteConfig, 'theme').asString;
  }
}
