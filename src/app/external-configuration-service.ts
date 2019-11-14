import { Injectable } from '@angular/core';
import { ExternalConfigurationHandlerInterface, ExternalConfiguration } from '@lagoshny/ngx-hal-client';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExternalConfigurationService implements ExternalConfigurationHandlerInterface {

  constructor(private httpClient: HttpClient) {
  }

  getHttp(): HttpClient {
    return this.httpClient;
  }

  getRootUri(): string {
    return environment.API;
  }

  getProxyUri(): string {
    return null;
  }

  getExternalConfiguration(): ExternalConfiguration {
    return null;
  }

  setExternalConfiguration(externalConfiguration: ExternalConfiguration) {}

  deserialize() {}

  serialize() {}
}
