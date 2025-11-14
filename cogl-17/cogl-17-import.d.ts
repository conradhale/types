import type Cogl17 from '@girs/cogl-17';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl17;
    }
}

export default GjsGiImports;
