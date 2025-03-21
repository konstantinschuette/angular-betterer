// .betterer.ts
import { angular } from "@betterer/angular";
var betterer_default = {
  "stricter template compilation": () => angular("./tsconfig.json", {
    strictTemplates: true
  }).include("./src/*.ts", "./src/*.html")
};
export {
  betterer_default as default
};
