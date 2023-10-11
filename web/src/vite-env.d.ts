/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_RESPONSE_SLEEP_MS: string;
  readonly VITE_SHOW_REACT_QUERY_DEVTOOLS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
