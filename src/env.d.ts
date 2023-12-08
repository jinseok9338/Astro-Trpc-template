/// <reference types="astro/client" />


interface ImportMetaEnv {
    readonly SUPABASE_KEY: string;
    readonly SUPABASE_URL: string;
    // 더 많은 환경변수 ...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }