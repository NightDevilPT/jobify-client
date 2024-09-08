export const configs = {
  prod: {
    apiUrl: 'https://api.prod.com',
  },
  staging: {
    apiUrl: 'https://api.staging.com',
  },
  dev: {
    apiUrl: 'https://api.dev.com',
  },
  local: {
    apiUrl: 'http://localhost:3000',
  },
};
export const envType: 'prod' | 'dev' | 'staging' | 'local' = 'local';
export const apiUrl = configs[envType].apiUrl;
