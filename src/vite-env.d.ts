/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DATOCMS_ROR_TOKEN: string
    readonly VITE_DATOCMS_JAVA_TOKEN: string
    readonly VITE_DATOCMS_FRONTEND_TOKEN: string
    readonly VITE_DATOCMS_NODE_TOKEN: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
