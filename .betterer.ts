import { bettererAngular } from './betterer-angular';

export default {
  'stricter template compilation': () =>
    bettererAngular('./tsconfig.json', {
      strictTemplates: true
    }).include('./src/**/*.ts', './src/**/*.html')
};
