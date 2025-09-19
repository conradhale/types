import type MetaTest17 from '@girs/metatest-17';

declare global {
    export interface GjsGiImports {
        MetaTest: typeof MetaTest17;
    }
}

export default GjsGiImports;
