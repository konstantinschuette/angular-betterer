import { angular } from '@betterer/angular';

export default {
  'stricter template compilation': () =>
    angular('./tsconfig.json', {
      strictTemplates: true
    }).include('./src/*.ts', './src/*.html')
};
