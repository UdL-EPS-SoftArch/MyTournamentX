import {Authority} from './authority';
import {Resource} from '@lagoshny/ngx-hal-client';

export class User extends Resource {
  id: string;
  uri: string;
  username = '';
  email: string;
  authorities: Authority[] = [];
  authorization = '';
  password = '';
  passwordReset = false;
  enabled: boolean;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

  getAuthorities(): string[] {
    const au: string[] = [];
    for (const auth of this.authorities) {
      au.push(auth.authority);
    }
    return au;
  }
}
