import type Shell17 from '@girs/shell-17';

declare global {
    export interface GjsGiImports {
        Shell: typeof Shell17;
    }
}

export default GjsGiImports;
