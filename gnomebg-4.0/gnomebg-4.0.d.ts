/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import GnomeDesktop from '@girs/gnomedesktop-4.0';
import Gio from '@girs/gio-2.0';
import GObject from '@girs/gobject-2.0';
import GLib from '@girs/glib-2.0';
import GModule from '@girs/gmodule-2.0';
import GdkPixbuf from '@girs/gdkpixbuf-2.0';
import GDesktopEnums from '@girs/gdesktopenums-3.0';
import Gdk from '@girs/gdk-4.0';
import cairo from '@girs/cairo-1.0';
import PangoCairo from '@girs/pangocairo-1.0';
import Pango from '@girs/pango-1.0';
import HarfBuzz from '@girs/harfbuzz-0.0';
import freetype2 from '@girs/freetype2-2.0';
import '@girs/gjs';
import { type classes } from './gnomebg-4.0-classes.d.ts';
export { GnomeBGClasses as classes };
export namespace GnomeBG {
    /**
     * GnomeBG-4.0
     */
    namespace BG {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed(): void;
            transitioned(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type BG = (typeof classes.BG)['prototype'];
    const BG: typeof classes.BG &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GnomeBG.BG.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BG.SignalSignatures> & classes.BG);
    namespace BGSlideShow {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::file'(pspec: GObject.ParamSpec): void;
            'notify::has-multiple-sizes'(pspec: GObject.ParamSpec): void;
            'notify::start-time'(pspec: GObject.ParamSpec): void;
            'notify::total-duration'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file: Gio.File;
            has_multiple_sizes: boolean;
            hasMultipleSizes: boolean;
            start_time: number;
            startTime: number;
            total_duration: number;
            totalDuration: number;
        }
    }
    type BGSlideShow = (typeof classes.BGSlideShow)['prototype'];
    const BGSlideShow: typeof classes.BGSlideShow &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GnomeBG.BGSlideShow.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BGSlideShow.SignalSignatures> & classes.BGSlideShow);
    export type BGClass = typeof BG;
    export type BGSlideShowClass = typeof BGSlideShow;
    abstract class BGSlideShowPrivate {
        static '$gtype': GObject.GType<BGSlideShowPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * Name of the imported GIR library
     *
     * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     *
     * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}
export default GnomeBG;
