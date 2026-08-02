/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUZON_WEBHOOK_URL?: string;
  readonly URL_de_web_de_VITE_BUZON?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
