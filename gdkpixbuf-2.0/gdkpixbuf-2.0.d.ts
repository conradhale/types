/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import '@girs/gjs';
import type classes from './gdkpixbuf-2.0-classes.d.ts';
export { classes as GdkPixbufClasses };
export namespace GdkPixbuf {
    /**
     * GdkPixbuf-2.0
     */
    /**
     * This enumeration defines the color spaces that are supported by
     * the gdk-pixbuf library.
     *
     * Currently only RGB is supported.
     */
    export namespace Colorspace {
        export const $gtype: GObject.GType<Colorspace>;
    }
    enum Colorspace {
        /**
         * Indicates a red/green/blue additive color space.
         */
        RGB,
    }
    /**
     * Interpolation modes for scaling functions.
     *
     * The `GDK_INTERP_NEAREST` mode is the fastest scaling method, but has
     * horrible quality when scaling down; `GDK_INTERP_BILINEAR` is the best
     * choice if you aren't sure what to choose, it has a good speed/quality
     * balance.
     *
     * **Note**: Cubic filtering is missing from the list; hyperbolic
     * interpolation is just as fast and results in higher quality.
     */
    export namespace InterpType {
        export const $gtype: GObject.GType<InterpType>;
    }
    enum InterpType {
        /**
         * Nearest neighbor sampling; this is the fastest
         *  and lowest quality mode. Quality is normally unacceptable when scaling
         *  down, but may be OK when scaling up.
         */
        NEAREST,
        /**
         * This is an accurate simulation of the PostScript
         *  image operator without any interpolation enabled.  Each pixel is
         *  rendered as a tiny parallelogram of solid color, the edges of which
         *  are implemented with antialiasing.  It resembles nearest neighbor for
         *  enlargement, and bilinear for reduction.
         */
        TILES = 1,
        /**
         * Best quality/speed balance; use this mode by
         *  default. Bilinear interpolation.  For enlargement, it is
         *  equivalent to point-sampling the ideal bilinear-interpolated image.
         *  For reduction, it is equivalent to laying down small tiles and
         *  integrating over the coverage area.
         */
        BILINEAR = 2,
        /**
         * This is the slowest and highest quality
         *  reconstruction function. It is derived from the hyperbolic filters in
         *  Wolberg's "Digital Image Warping", and is formally defined as the
         *  hyperbolic-filter sampling the ideal hyperbolic-filter interpolated
         *  image (the filter is designed to be idempotent for 1:1 pixel mapping).
         *  **Deprecated**: this interpolation filter is deprecated, as in reality
         *  it has a lower quality than the `GDK_INTERP_BILINEAR` filter
         *  (Since: 2.38)
         */
        HYPER = 3,
    }
    /**
     * Control the alpha channel for drawables.
     *
     * These values can be passed to gdk_pixbuf_xlib_render_to_drawable_alpha()
     * in gdk-pixbuf-xlib to control how the alpha channel of an image should
     * be handled.
     *
     * This function can create a bilevel clipping mask (black and white) and use
     * it while painting the image.
     *
     * In the future, when the X Window System gets an alpha channel extension,
     * it will be possible to do full alpha compositing onto arbitrary drawables.
     * For now both cases fall back to a bilevel clipping mask.
     */
    export namespace PixbufAlphaMode {
        export const $gtype: GObject.GType<PixbufAlphaMode>;
    }
    enum PixbufAlphaMode {
        /**
         * A bilevel clipping mask (black and white)
         *  will be created and used to draw the image.  Pixels below 0.5 opacity
         *  will be considered fully transparent, and all others will be
         *  considered fully opaque.
         */
        BILEVEL,
        /**
         * For now falls back to #GDK_PIXBUF_ALPHA_BILEVEL.
         *  In the future it will do full alpha compositing.
         */
        FULL = 1,
    }
    /**
     * An error code in the `GDK_PIXBUF_ERROR` domain.
     *
     * Many gdk-pixbuf operations can cause errors in this domain, or in
     * the `G_FILE_ERROR` domain.
     */
    class PixbufError extends GLib.Error {
        static '$gtype': GObject.GType<PixbufError>;
        // Static Fields
        /**
         * An image file was broken somehow.
         */
        static CORRUPT_IMAGE: number;
        /**
         * Not enough memory.
         */
        static INSUFFICIENT_MEMORY: number;
        /**
         * A bad option was passed to a pixbuf save module.
         */
        static BAD_OPTION: number;
        /**
         * Unknown image type.
         */
        static UNKNOWN_TYPE: number;
        /**
         * Don't know how to perform the
         *  given operation on the type of image at hand.
         */
        static UNSUPPORTED_OPERATION: number;
        /**
         * Generic failure code, something went wrong.
         */
        static FAILED: number;
        /**
         * Only part of the animation was loaded.
         */
        static INCOMPLETE_ANIMATION: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * The possible rotations which can be passed to gdk_pixbuf_rotate_simple().
     *
     * To make them easier to use, their numerical values are the actual degrees.
     */
    export namespace PixbufRotation {
        export const $gtype: GObject.GType<PixbufRotation>;
    }
    enum PixbufRotation {
        /**
         * No rotation.
         */
        NONE,
        /**
         * Rotate by 90 degrees.
         */
        COUNTERCLOCKWISE = 90,
        /**
         * Rotate by 180 degrees.
         */
        UPSIDEDOWN = 180,
        /**
         * Rotate by 270 degrees.
         */
        CLOCKWISE = 270,
    }
    /**
     * Major version of gdk-pixbuf library, that is the "0" in
     * "0.8.2" for example.
     */
    const PIXBUF_MAJOR: number;
    /**
     * Micro version of gdk-pixbuf library, that is the "2" in
     * "0.8.2" for example.
     */
    const PIXBUF_MICRO: number;
    /**
     * Minor version of gdk-pixbuf library, that is the "8" in
     * "0.8.2" for example.
     */
    const PIXBUF_MINOR: number;
    /**
     * Contains the full version of GdkPixbuf as a string.
     *
     * This is the version being compiled against; contrast with
     * `gdk_pixbuf_version`.
     */
    const PIXBUF_VERSION: string;
    function pixbuf_error_quark(): GLib.Quark;
    interface PixbufDestroyNotify {
        (pixels: Uint8Array[] | string): void;
    }
    interface PixbufModuleFillInfoFunc {
        (info: PixbufFormat): void;
    }
    interface PixbufModuleFillVtableFunc {
        (module: PixbufModule): void;
    }
    interface PixbufModuleIncrementLoadFunc {
        (context: any | null, buf: Uint8Array[] | string): boolean;
    }
    interface PixbufModuleLoadAnimationFunc {
        (f?: any | null): PixbufAnimation;
    }
    interface PixbufModuleLoadFunc {
        (f?: any | null): Pixbuf;
    }
    interface PixbufModuleLoadXpmDataFunc {
        (data: string[]): Pixbuf;
    }
    interface PixbufModulePreparedFunc {
        (pixbuf: Pixbuf, anim: PixbufAnimation): void;
    }
    interface PixbufModuleSaveFunc {
        (f: any | null, pixbuf: Pixbuf, param_keys?: string[] | null, param_values?: string[] | null): boolean;
    }
    interface PixbufModuleSaveOptionSupportedFunc {
        (option_key: string): boolean;
    }
    interface PixbufModuleSizeFunc {
        (width: number, height: number): void;
    }
    interface PixbufModuleStopLoadFunc {
        (context?: any | null): boolean;
    }
    interface PixbufModuleUpdatedFunc {
        (pixbuf: Pixbuf, x: number, y: number, width: number, height: number): void;
    }
    interface PixbufSaveFunc {
        (buf: Uint8Array[] | string): boolean;
    }
    /**
     * Flags which allow a module to specify further details about the supported
     * operations.
     */
    export namespace PixbufFormatFlags {
        export const $gtype: GObject.GType<PixbufFormatFlags>;
    }
    enum PixbufFormatFlags {
        /**
         * the module can write out images in the format.
         */
        WRITABLE = 1,
        /**
         * the image format is scalable
         */
        SCALABLE = 2,
        /**
         * the module is threadsafe. gdk-pixbuf
         *     ignores modules that are not marked as threadsafe. (Since 2.28).
         */
        THREADSAFE = 4,
    }
    namespace Pixbuf {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::bits-per-sample'(pspec: GObject.ParamSpec): void;
            'notify::colorspace'(pspec: GObject.ParamSpec): void;
            'notify::has-alpha'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::n-channels'(pspec: GObject.ParamSpec): void;
            'notify::pixel-bytes'(pspec: GObject.ParamSpec): void;
            'notify::pixels'(pspec: GObject.ParamSpec): void;
            'notify::rowstride'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {
            /**
             * The number of bits per sample.
             *
             * Currently only 8 bit per sample are supported.
             */
            bits_per_sample: number;
            /**
             * The number of bits per sample.
             *
             * Currently only 8 bit per sample are supported.
             */
            bitsPerSample: number;
            /**
             * The color space of the pixbuf.
             *
             * Currently, only `GDK_COLORSPACE_RGB` is supported.
             */
            colorspace: Colorspace;
            /**
             * Whether the pixbuf has an alpha channel.
             */
            has_alpha: boolean;
            /**
             * Whether the pixbuf has an alpha channel.
             */
            hasAlpha: boolean;
            /**
             * The number of rows of the pixbuf.
             */
            height: number;
            /**
             * The number of samples per pixel.
             *
             * Currently, only 3 or 4 samples per pixel are supported.
             */
            n_channels: number;
            /**
             * The number of samples per pixel.
             *
             * Currently, only 3 or 4 samples per pixel are supported.
             */
            nChannels: number;
            pixel_bytes: GLib.Bytes;
            pixelBytes: GLib.Bytes;
            /**
             * A pointer to the pixel data of the pixbuf.
             */
            pixels: any;
            /**
             * The number of bytes between the start of a row and
             * the start of the next row.
             *
             * This number must (obviously) be at least as large as the
             * width of the pixbuf.
             */
            rowstride: number;
            /**
             * The number of columns of the pixbuf.
             */
            width: number;
        }
    }
    type Pixbuf = (typeof classes.Pixbuf)['prototype'];
    const Pixbuf: typeof classes.Pixbuf &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GdkPixbuf.Pixbuf.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Pixbuf.SignalSignatures> & classes.Pixbuf);
    namespace PixbufAnimation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type PixbufAnimation = (typeof classes.PixbufAnimation)['prototype'];
    const PixbufAnimation: typeof classes.PixbufAnimation &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GdkPixbuf.PixbufAnimation.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PixbufAnimation.SignalSignatures> & classes.PixbufAnimation);
    namespace PixbufAnimationIter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type PixbufAnimationIter = (typeof classes.PixbufAnimationIter)['prototype'];
    const PixbufAnimationIter: typeof classes.PixbufAnimationIter &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GdkPixbuf.PixbufAnimationIter.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PixbufAnimationIter.SignalSignatures> & classes.PixbufAnimationIter);
    namespace PixbufLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'area-prepared'(): void;
            'area-updated'(arg0: number, arg1: number, arg2: number, arg3: number): void;
            closed(): void;
            'size-prepared'(arg0: number, arg1: number): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type PixbufLoader = (typeof classes.PixbufLoader)['prototype'];
    const PixbufLoader: typeof classes.PixbufLoader &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GdkPixbuf.PixbufLoader.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PixbufLoader.SignalSignatures> & classes.PixbufLoader);
    namespace PixbufNonAnim {
        // Signal signatures
        interface SignalSignatures extends PixbufAnimation.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends PixbufAnimation.ConstructorProps {}
    }
    type PixbufNonAnim = (typeof classes.PixbufNonAnim)['prototype'];
    const PixbufNonAnim: typeof classes.PixbufNonAnim &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GdkPixbuf.PixbufNonAnim.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PixbufNonAnim.SignalSignatures> & classes.PixbufNonAnim);
    namespace PixbufSimpleAnim {
        // Signal signatures
        interface SignalSignatures extends PixbufAnimation.SignalSignatures {
            'notify::loop'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends PixbufAnimation.ConstructorProps {
            /**
             * Whether the animation should loop when it reaches the end.
             */
            loop: boolean;
        }
    }
    type PixbufSimpleAnim = (typeof classes.PixbufSimpleAnim)['prototype'];
    const PixbufSimpleAnim: typeof classes.PixbufSimpleAnim &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GdkPixbuf.PixbufSimpleAnim.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PixbufSimpleAnim.SignalSignatures> & classes.PixbufSimpleAnim);
    namespace PixbufSimpleAnimIter {
        // Signal signatures
        interface SignalSignatures extends PixbufAnimationIter.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends PixbufAnimationIter.ConstructorProps {}
    }
    type PixbufSimpleAnimIter = (typeof classes.PixbufSimpleAnimIter)['prototype'];
    const PixbufSimpleAnimIter: typeof classes.PixbufSimpleAnimIter &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GdkPixbuf.PixbufSimpleAnimIter.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PixbufSimpleAnimIter.SignalSignatures> & classes.PixbufSimpleAnimIter);
    export type PixbufAnimationClass = typeof PixbufAnimation;
    export type PixbufAnimationIterClass = typeof PixbufAnimationIter;
    /**
     * A `GdkPixbufFormat` contains information about the image format accepted
     * by a module.
     *
     * Only modules should access the fields directly, applications should
     * use the `gdk_pixbuf_format_*` family of functions.
     */
    class PixbufFormat {
        static '$gtype': GObject.GType<PixbufFormat>;
        // Fields
        name: string;
        signature: PixbufModulePattern;
        domain: string;
        description: string;
        mime_types: string[];
        extensions: string[];
        flags: number;
        disabled: boolean;
        license: string;
        // Constructors
        constructor(
            properties?: Partial<{
                name: string;
                domain: string;
                description: string;
                mime_types: string[];
                extensions: string[];
                flags: number;
                disabled: boolean;
                license: string;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Creates a copy of `format`.
         *
         * @returns the newly allocated copy of a `GdkPixbufFormat`. Use
         *   gdk_pixbuf_format_free() to free the resources when done
         */
        copy(): PixbufFormat | null;
        /**
         * Frees the resources allocated when copying a `GdkPixbufFormat`
         * using gdk_pixbuf_format_copy()
         */
        free(): void;
        /**
         * Returns a description of the format.
         *
         * @returns a description of the format.
         */
        get_description(): string | null;
        /**
         * Returns the filename extensions typically used for files in the
         * given format.
         *
         * @returns an array of
         *   filename extensions
         */
        get_extensions(): string[] | null;
        /**
         * Returns information about the license of the image loader for the format.
         *
         * The returned string should be a shorthand for a well known license, e.g.
         * "LGPL", "GPL", "QPL", "GPL/QPL", or "other" to indicate some other license.
         *
         * @returns a string describing the license of the pixbuf format
         */
        get_license(): string | null;
        /**
         * Returns the mime types supported by the format.
         *
         * @returns an array of mime types
         */
        get_mime_types(): string[] | null;
        /**
         * Returns the name of the format.
         *
         * @returns the name of the format.
         */
        get_name(): string | null;
        /**
         * Returns whether this image format is disabled.
         *
         * See gdk_pixbuf_format_set_disabled().
         *
         * @returns whether this image format is disabled.
         */
        is_disabled(): boolean;
        /**
         * Returns `TRUE` if the save option specified by `option_key` is supported when
         * saving a pixbuf using the module implementing `format`.
         *
         * See gdk_pixbuf_save() for more information about option keys.
         *
         * @returns `TRUE` if the specified option is supported
         * @param option_key the name of an option
         */
        is_save_option_supported(option_key: string): boolean;
        /**
         * Returns whether this image format is scalable.
         *
         * If a file is in a scalable format, it is preferable to load it at
         * the desired size, rather than loading it at the default size and
         * scaling the resulting pixbuf to the desired size.
         *
         * @returns whether this image format is scalable.
         */
        is_scalable(): boolean;
        /**
         * Returns whether pixbufs can be saved in the given format.
         *
         * @returns whether pixbufs can be saved in the given format.
         */
        is_writable(): boolean;
        /**
         * Disables or enables an image format.
         *
         * If a format is disabled, GdkPixbuf won't use the image loader for
         * this format to load images.
         *
         * Applications can use this to avoid using image loaders with an
         * inappropriate license, see gdk_pixbuf_format_get_license().
         *
         * @param disabled `TRUE` to disable the format `format`
         */
        set_disabled(disabled: boolean): void;
    }
    export type PixbufLoaderClass = typeof PixbufLoader;
    /**
     * A `GdkPixbufModule` contains the necessary functions to load and save
     * images in a certain file format.
     *
     * If `GdkPixbuf` has been compiled with `GModule` support, it can be extended
     * by modules which can load (and perhaps also save) new image and animation
     * formats.
     *
     * ## Implementing modules
     *
     * The `GdkPixbuf` interfaces needed for implementing modules are contained in
     * `gdk-pixbuf-io.h` (and `gdk-pixbuf-animation.h` if the module supports
     * animations). They are not covered by the same stability guarantees as the
     * regular GdkPixbuf API. To underline this fact, they are protected by the
     * `GDK_PIXBUF_ENABLE_BACKEND` pre-processor symbol.
     *
     * Each loadable module must contain a `GdkPixbufModuleFillVtableFunc` function
     * named `fill_vtable`, which will get called when the module
     * is loaded and must set the function pointers of the `GdkPixbufModule`.
     *
     * In order to make format-checking work before actually loading the modules
     * (which may require calling `dlopen` to load image libraries), modules export
     * their signatures (and other information) via the `fill_info` function. An
     * external utility, `gdk-pixbuf-query-loaders`, uses this to create a text
     * file containing a list of all available loaders and  their signatures.
     * This file is then read at runtime by `GdkPixbuf` to obtain the list of
     * available loaders and their signatures.
     *
     * Modules may only implement a subset of the functionality available via
     * `GdkPixbufModule`. If a particular functionality is not implemented, the
     * `fill_vtable` function will simply not set the corresponding
     * function pointers of the `GdkPixbufModule` structure. If a module supports
     * incremental loading (i.e. provides `begin_load`, `stop_load` and
     * `load_increment`), it doesn't have to implement `load`, since `GdkPixbuf`
     * can supply a generic `load` implementation wrapping the incremental loading.
     *
     * ## Installing modules
     *
     * Installing a module is a two-step process:
     *
     *  - copy the module file(s) to the loader directory (normally
     *    `$libdir/gdk-pixbuf-2.0/$version/loaders`, unless overridden by the
     *    environment variable `GDK_PIXBUF_MODULEDIR`)
     *  - call `gdk-pixbuf-query-loaders` to update the module file (normally
     *    `$libdir/gdk-pixbuf-2.0/$version/loaders.cache`, unless overridden
     *    by the environment variable `GDK_PIXBUF_MODULE_FILE`)
     */
    class PixbufModule {
        static '$gtype': GObject.GType<PixbufModule>;
        // Fields
        module_name: string;
        module_path: string;
        info: PixbufFormat;
        load: PixbufModuleLoadFunc;
        load_xpm_data: PixbufModuleLoadXpmDataFunc;
        stop_load: PixbufModuleStopLoadFunc;
        load_increment: PixbufModuleIncrementLoadFunc;
        load_animation: PixbufModuleLoadAnimationFunc;
        save: PixbufModuleSaveFunc;
        is_save_option_supported: PixbufModuleSaveOptionSupportedFunc;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * The signature prefix for a module.
     *
     * The signature of a module is a set of prefixes. Prefixes are encoded as
     * pairs of ordinary strings, where the second string, called the mask, if
     * not `NULL`, must be of the same length as the first one and may contain
     * ' ', '!', 'x', 'z', and 'n' to indicate bytes that must be matched,
     * not matched, "don't-care"-bytes, zeros and non-zeros, respectively.
     *
     * Each prefix has an associated integer that describes the relevance of
     * the prefix, with 0 meaning a mismatch and 100 a "perfect match".
     *
     * Starting with gdk-pixbuf 2.8, the first byte of the mask may be '*',
     * indicating an unanchored pattern that matches not only at the beginning,
     * but also in the middle. Versions prior to 2.8 will interpret the '*'
     * like an 'x'.
     *
     * The signature of a module is stored as an array of
     * `GdkPixbufModulePatterns`. The array is terminated by a pattern
     * where the `prefix` is `NULL`.
     *
     * ```c
     * GdkPixbufModulePattern *signature[] = {
     *   { "abcdx", " !x z", 100 },
     *   { "bla", NULL,  90 },
     *   { NULL, NULL, 0 }
     * };
     * ```
     *
     * In the example above, the signature matches e.g. "auud\0" with
     * relevance 100, and "blau" with relevance 90.
     */
    class PixbufModulePattern {
        static '$gtype': GObject.GType<PixbufModulePattern>;
        // Fields
        prefix: string;
        mask: string;
        relevance: number;
        // Constructors
        constructor(
            properties?: Partial<{
                prefix: string;
                mask: string;
                relevance: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    export type PixbufSimpleAnimClass = typeof PixbufSimpleAnim;
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
export default GdkPixbuf;
