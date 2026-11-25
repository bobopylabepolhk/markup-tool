const deployedURL = import.meta.env.PROD ? import.meta.env.VITE_DEPLOYED_URL : '';

const rootPaths = {
  bau: import.meta.env.VITE_BAU_SERVICE_ROOT_PATH ?? '/api/bau',
  file: import.meta.env.VITE_FILE_SERVICE_ROOT_PATH ?? '/api/file',
};

export const apiURL = {
  bau: `${deployedURL}${rootPaths.bau}`,
  file: `${deployedURL}${rootPaths.file}`,
};

export const LOGIN_PAGE_URL = '/auth/login';
