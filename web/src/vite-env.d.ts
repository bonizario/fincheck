/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_RESPONSE_SLEEP_MS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
