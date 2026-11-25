import { APICore } from '#/api/core/base';
import { Backend } from '#/api/utilities';

import { FileRetrieveSchema } from './models';

class FileAPI extends APICore<FileRetrieveSchema> {
  download(fileUuid: string) {
    return this.file(`/${fileUuid}`);
  }

  downloadBuf(fileUuid: string) {
    return this.buf(`/${fileUuid}`);
  }

  downloadPublic(fileUuid: string) {
    return this.file(`/public/${fileUuid}`);
  }
}

export const fileAPI = new FileAPI({
  resource: 'files',
  backend: Backend.FILE,
});
