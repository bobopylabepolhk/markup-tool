import { APICore } from '#/api/core/base';
import { Backend } from '#/api/utilities';

class AuthAPI extends APICore<never> {
  logout() {
    return this.custom('/logout', 'post');
  }
}

export const authAPI = new AuthAPI({ resource: 'auth', backend: Backend.BAU });
