import { APICore } from '#/api/core/base';
import { Backend } from '#/api/utilities';
import { User, UserCreate, UserMe, UserUpdate } from '#/features/Navigation/api/models';

class UserAPI extends APICore<User, UserCreate, UserUpdate> {
  me = () => this.custom<null, UserMe>('/me', 'get');
}

export const userAPI = new UserAPI({ resource: 'users', backend: Backend.BAU });
