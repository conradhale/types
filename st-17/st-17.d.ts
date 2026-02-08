/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type Meta from '@girs/meta-17';
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type Mtk from '@girs/mtk-17';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type Cogl from '@girs/cogl-17';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-17';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Atk from '@girs/atk-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import '@girs/gjs';
import type classes from './st-17-classes.d.ts';
export { classes as StClasses };
export namespace St {
    /**
     * St-17
     */
    export namespace BackgroundSize {
        export const $gtype: GObject.GType<BackgroundSize>;
    }
    enum BackgroundSize {
        AUTO,
        CONTAIN = 1,
        COVER = 2,
        FIXED = 3,
    }
    export namespace ClipboardType {
        export const $gtype: GObject.GType<ClipboardType>;
    }
    enum ClipboardType {
        PRIMARY,
        CLIPBOARD = 1,
    }
    /**
     * Used to target a particular corner of a #StThemeNode element.
     */
    export namespace Corner {
        export const $gtype: GObject.GType<Corner>;
    }
    enum Corner {
        /**
         * The top-right corner.
         */
        TOPLEFT,
        /**
         * The top-right corner.
         */
        TOPRIGHT = 1,
        /**
         * The bottom-right corner.
         */
        BOTTOMRIGHT = 2,
        /**
         * The bottom-left corner.
         */
        BOTTOMLEFT = 3,
    }
    /**
     * Enumeration for focus direction.
     */
    export namespace DirectionType {
        export const $gtype: GObject.GType<DirectionType>;
    }
    enum DirectionType {
        /**
         * Move forward.
         */
        TAB_FORWARD,
        /**
         * Move backward.
         */
        TAB_BACKWARD = 1,
        /**
         * Move up.
         */
        UP = 2,
        /**
         * Move down.
         */
        DOWN = 3,
        /**
         * Move left.
         */
        LEFT = 4,
        /**
         * Move right.
         */
        RIGHT = 5,
    }
    /**
     * Used to specify options when rendering gradients.
     */
    export namespace GradientType {
        export const $gtype: GObject.GType<GradientType>;
    }
    enum GradientType {
        /**
         * No gradient.
         */
        NONE,
        /**
         * A vertical gradient.
         */
        VERTICAL = 1,
        /**
         * A horizontal gradient.
         */
        HORIZONTAL = 2,
        /**
         * Lookup the style requested in the icon name.
         */
        RADIAL = 3,
    }
    /**
     * Used to specify options when looking up icons.
     */
    export namespace IconStyle {
        export const $gtype: GObject.GType<IconStyle>;
    }
    enum IconStyle {
        /**
         * Lookup the style requested in the icon name.
         */
        REQUESTED,
        /**
         * Try to always load regular icons, even when symbolic
         *   icon names are given.
         */
        REGULAR = 1,
        /**
         * Try to always load symbolic icons, even when regular
         *   icon names are given.
         */
        SYMBOLIC = 2,
    }
    /**
     * Error codes for StIconTheme operations.
     */
    class IconThemeError extends GLib.Error {
        static '$gtype': GObject.GType<IconThemeError>;
        // Static Fields
        /**
         * The icon specified does not exist in the theme
         */
        static NOT_FOUND: number;
        /**
         * An unspecified error occurred.
         */
        static FAILED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    export namespace PolicyType {
        export const $gtype: GObject.GType<PolicyType>;
    }
    enum PolicyType {
        ALWAYS,
        AUTOMATIC = 1,
        NEVER = 2,
        EXTERNAL = 3,
    }
    /**
     * Used to target a particular side of a #StThemeNode element.
     */
    export namespace Side {
        export const $gtype: GObject.GType<Side>;
    }
    enum Side {
        /**
         * The top side.
         */
        TOP,
        /**
         * The right side.
         */
        RIGHT = 1,
        /**
         * The bottom side.
         */
        BOTTOM = 2,
        /**
         * The left side.
         */
        LEFT = 3,
    }
    export namespace SystemAccentColor {
        export const $gtype: GObject.GType<SystemAccentColor>;
    }
    enum SystemAccentColor {
        BLUE,
        TEAL = 1,
        GREEN = 2,
        YELLOW = 3,
        ORANGE = 4,
        RED = 5,
        PINK = 6,
        PURPLE = 7,
        SLATE = 8,
    }
    export namespace SystemColorScheme {
        export const $gtype: GObject.GType<SystemColorScheme>;
    }
    enum SystemColorScheme {
        DEFAULT,
        PREFER_DARK = 1,
        PREFER_LIGHT = 2,
    }
    /**
     * Used to align text in a label.
     */
    export namespace TextAlign {
        export const $gtype: GObject.GType<TextAlign>;
    }
    enum TextAlign {
        /**
         * Text is aligned at the beginning of the label.
         */
        LEFT,
        /**
         * Text is aligned in the middle of the label.
         */
        CENTER = 1,
        /**
         * Text is aligned at the end of the label.
         */
        RIGHT = 2,
        JUSTIFY = 3,
    }
    export namespace TextureCachePolicy {
        export const $gtype: GObject.GType<TextureCachePolicy>;
    }
    enum TextureCachePolicy {
        NONE,
        FOREVER = 1,
    }
    /**
     * Creates a string describing `actor,` for use in debugging. This
     * includes the class name and actor name (if any), plus if `actor`
     * is an #StWidget, its style class and pseudo class names.
     *
     * @returns the debug name.
     * @param actor a #ClutterActor
     */
    function describe_actor(actor: Clutter.Actor): string;
    function icon_theme_error_quark(): GLib.Quark;
    interface ClipboardCallbackFunc {
        (clipboard: Clipboard, text: string): void;
    }
    interface ClipboardContentCallbackFunc {
        (clipboard: Clipboard, bytes: GLib.Bytes | Uint8Array): void;
    }
    interface EntryCursorFunc {
        (entry: Entry, use_ibeam: boolean, data?: any | null): void;
    }
    /**
     * A mask representing which mouse buttons an #StButton responds to.
     */
    export namespace ButtonMask {
        export const $gtype: GObject.GType<ButtonMask>;
    }
    enum ButtonMask {
        /**
         * button 1 (left)
         */
        ONE = 1,
        /**
         * button 2 (middle)
         */
        TWO = 2,
        /**
         * button 3 (right)
         */
        THREE = 4,
    }
    /**
     * Used to specify options for [method`St`.IconTheme.lookup_icon]
     */
    export namespace IconLookupFlags {
        export const $gtype: GObject.GType<IconLookupFlags>;
    }
    enum IconLookupFlags {
        /**
         * Never get SVG icons, even if gdk-pixbuf
         *   supports them. Cannot be used together with %ST_ICON_LOOKUP_FORCE_SVG.
         */
        NO_SVG = 1,
        /**
         * Get SVG icons, even if gdk-pixbuf
         *   doesn’t support them.
         *   Cannot be used together with %ST_ICON_LOOKUP_NO_SVG.
         */
        FORCE_SVG = 2,
        /**
         * Try to shorten icon name at '-'
         *   characters before looking at inherited themes. This flag is only
         *   supported in functions that take a single icon name. For more general
         *   fallback, see st_icon_theme_choose_icon().
         */
        GENERIC_FALLBACK = 4,
        /**
         * Always get the icon scaled to the
         *   requested size.
         */
        FORCE_SIZE = 8,
        /**
         * Try to always load regular icons, even
         *   when symbolic icon names are given.
         */
        FORCE_REGULAR = 16,
        /**
         * Try to always load symbolic icons, even
         *   when regular icon names are given.
         */
        FORCE_SYMBOLIC = 32,
        /**
         * Try to load a variant of the icon for left-to-right
         *   text direction.
         */
        DIR_LTR = 64,
        /**
         * Try to load a variant of the icon for right-to-left
         *   text direction.
         */
        DIR_RTL = 128,
    }
    /**
     * Flags used to determine the decoration of text.
     *
     * Not that neither %ST_TEXT_DECORATION_OVERLINE or %ST_TEXT_DECORATION_BLINK
     * are implemented, currently.
     */
    export namespace TextDecoration {
        export const $gtype: GObject.GType<TextDecoration>;
    }
    enum TextDecoration {
        UNDERLINE = 1,
        /**
         * Text is overlined
         */
        OVERLINE = 2,
        /**
         * Text is striked out
         */
        LINE_THROUGH = 4,
        /**
         * Text blinks
         */
        BLINK = 8,
    }
    namespace Adjustment {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed(): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::lower'(pspec: GObject.ParamSpec): void;
            'notify::page-increment'(pspec: GObject.ParamSpec): void;
            'notify::page-size'(pspec: GObject.ParamSpec): void;
            'notify::step-increment'(pspec: GObject.ParamSpec): void;
            'notify::upper'(pspec: GObject.ParamSpec): void;
            'notify::value'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Clutter.Animatable.ConstructorProps {
            /**
             * If the adjustment is used as #ClutterAnimatable for a
             * #ClutterPropertyTransition, this property is used to determine which
             * monitor should drive the animation.
             */
            actor: Clutter.Actor;
            /**
             * The minimum value of the adjustment.
             */
            lower: number;
            /**
             * The page increment of the adjustment.
             */
            page_increment: number;
            /**
             * The page increment of the adjustment.
             */
            pageIncrement: number;
            /**
             * The page size of the adjustment.
             *
             * Note that the page-size is irrelevant and should be set to zero if the
             * adjustment is used for a simple scalar value.
             */
            page_size: number;
            /**
             * The page size of the adjustment.
             *
             * Note that the page-size is irrelevant and should be set to zero if the
             * adjustment is used for a simple scalar value.
             */
            pageSize: number;
            /**
             * The step increment of the adjustment.
             */
            step_increment: number;
            /**
             * The step increment of the adjustment.
             */
            stepIncrement: number;
            /**
             * The maximum value of the adjustment.
             *
             * Note that values will be restricted by `upper - page-size` if
             * #StAdjustment:page-size is non-zero.
             */
            upper: number;
            /**
             * The value of the adjustment.
             */
            value: number;
        }
    }
    type Adjustment = (typeof classes.Adjustment)['prototype'];
    const Adjustment: typeof classes.Adjustment &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.Adjustment.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Adjustment.SignalSignatures> & classes.Adjustment);
    namespace Bin {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::child'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            /**
             * The child #ClutterActor of the #StBin container.
             */
            child: A;
        }
    }
    type Bin<A extends Clutter.Actor = Clutter.Actor> = (typeof classes.Bin<A>)['prototype'];
    const Bin: typeof classes.Bin &
        (new <A extends Clutter.Actor = Clutter.Actor, Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.Bin.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Bin.SignalSignatures> & classes.Bin<A>);
    namespace BorderImage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type BorderImage = (typeof classes.BorderImage)['prototype'];
    const BorderImage: typeof classes.BorderImage &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.BorderImage.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BorderImage.SignalSignatures> & classes.BorderImage);
    namespace BoxLayout {
        // Signal signatures
        interface SignalSignatures extends Viewport.SignalSignatures {
            'notify::orientation'(pspec: GObject.ParamSpec): void;
            'notify::vertical'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-view'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
            'notify::hadjustment'(pspec: GObject.ParamSpec): void;
            'notify::vadjustment'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Viewport.ConstructorProps<Clutter.BoxLayout>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Scrollable.ConstructorProps {
            /**
             * The orientation of the #StBoxLayout, either horizontal or
             * vertical
             */
            orientation: Clutter.Orientation;
            /**
             * A convenience property for the #ClutterBoxLayout:vertical property of the
             * internal layout for #StBoxLayout.
             */
            vertical: boolean;
        }
    }
    type BoxLayout = (typeof classes.BoxLayout)['prototype'];
    const BoxLayout: typeof classes.BoxLayout &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.BoxLayout.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BoxLayout.SignalSignatures> & classes.BoxLayout);
    namespace Button {
        // Signal signatures
        interface SignalSignatures extends Bin.SignalSignatures {
            clicked(arg0: number): void;
            'notify::button-mask'(pspec: GObject.ParamSpec): void;
            'notify::checked'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::label'(pspec: GObject.ParamSpec): void;
            'notify::pressed'(pspec: GObject.ParamSpec): void;
            'notify::toggle-mode'(pspec: GObject.ParamSpec): void;
            'notify::child'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends Bin.ConstructorProps<A>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            /**
             * Which buttons will trigger the #StButton::clicked signal.
             */
            button_mask: ButtonMask;
            /**
             * Which buttons will trigger the #StButton::clicked signal.
             */
            buttonMask: ButtonMask;
            /**
             * If #StButton:toggle-mode is %TRUE, indicates if the #StButton is toggled
             * "on" or "off".
             *
             * When the value is %TRUE, the #StButton will have the `checked` CSS
             * pseudo-class set.
             */
            checked: boolean;
            /**
             * The icon name of the #StButton.
             */
            icon_name: string;
            /**
             * The icon name of the #StButton.
             */
            iconName: string;
            /**
             * The label of the #StButton.
             */
            label: string;
            /**
             * In contrast to #StButton:checked, this property indicates whether the
             * #StButton is being actively pressed, rather than just in the "on" state.
             */
            pressed: boolean;
            /**
             * Whether the #StButton is operating in toggle mode (on/off).
             */
            toggle_mode: boolean;
            /**
             * Whether the #StButton is operating in toggle mode (on/off).
             */
            toggleMode: boolean;
        }
    }
    type Button<A extends Clutter.Actor = Clutter.Actor> = (typeof classes.Button<A>)['prototype'];
    const Button: typeof classes.Button &
        (new <A extends Clutter.Actor = Clutter.Actor, Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.Button.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Button.SignalSignatures> & classes.Button<A>);
    namespace Clipboard {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Clipboard = (typeof classes.Clipboard)['prototype'];
    const Clipboard: typeof classes.Clipboard &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.Clipboard.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Clipboard.SignalSignatures> & classes.Clipboard);
    namespace DndStartGesture {
        // Signal signatures
        interface SignalSignatures extends Clutter.Gesture.SignalSignatures {
            'notify::manual-mode'(pspec: GObject.ParamSpec): void;
            'notify::timeout-threshold'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Clutter.Gesture.ConstructorProps {
            manual_mode: boolean;
            manualMode: boolean;
            timeout_threshold: number;
            timeoutThreshold: number;
        }
    }
    type DndStartGesture = (typeof classes.DndStartGesture)['prototype'];
    const DndStartGesture: typeof classes.DndStartGesture &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.DndStartGesture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DndStartGesture.SignalSignatures> & classes.DndStartGesture);
    namespace DrawingArea {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            repaint(): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }
    type DrawingArea = (typeof classes.DrawingArea)['prototype'];
    const DrawingArea: typeof classes.DrawingArea &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.DrawingArea.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DrawingArea.SignalSignatures> & classes.DrawingArea);
    namespace Entry {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'primary-icon-clicked'(): void;
            'secondary-icon-clicked'(): void;
            'notify::clutter-text'(pspec: GObject.ParamSpec): void;
            'notify::hint-actor'(pspec: GObject.ParamSpec): void;
            'notify::hint-text'(pspec: GObject.ParamSpec): void;
            'notify::input-hints'(pspec: GObject.ParamSpec): void;
            'notify::input-purpose'(pspec: GObject.ParamSpec): void;
            'notify::primary-icon'(pspec: GObject.ParamSpec): void;
            'notify::secondary-icon'(pspec: GObject.ParamSpec): void;
            'notify::text'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            /**
             * The internal #ClutterText actor supporting the #StEntry.
             */
            clutter_text: Clutter.Text;
            /**
             * The internal #ClutterText actor supporting the #StEntry.
             */
            clutterText: Clutter.Text;
            /**
             * A #ClutterActor to display when the entry is empty and unfocused. Setting
             * this will replace the actor displaying #StEntry:hint-text.
             */
            hint_actor: Clutter.Actor;
            /**
             * A #ClutterActor to display when the entry is empty and unfocused. Setting
             * this will replace the actor displaying #StEntry:hint-text.
             */
            hintActor: Clutter.Actor;
            /**
             * The text to display when the entry is empty and unfocused. Setting this
             * will replace the actor of #StEntry::hint-actor.
             */
            hint_text: string;
            /**
             * The text to display when the entry is empty and unfocused. Setting this
             * will replace the actor of #StEntry::hint-actor.
             */
            hintText: string;
            /**
             * The #ClutterInputContentHintFlags providing additional hints (beyond
             * #StEntry:input-purpose) that allow input methods to fine-tune their
             * behaviour.
             */
            input_hints: Clutter.InputContentHintFlags;
            /**
             * The #ClutterInputContentHintFlags providing additional hints (beyond
             * #StEntry:input-purpose) that allow input methods to fine-tune their
             * behaviour.
             */
            inputHints: Clutter.InputContentHintFlags;
            /**
             * The #ClutterInputContentPurpose that helps on-screen keyboards and similar
             * input methods to decide which keys should be presented to the user.
             */
            input_purpose: Clutter.InputContentPurpose;
            /**
             * The #ClutterInputContentPurpose that helps on-screen keyboards and similar
             * input methods to decide which keys should be presented to the user.
             */
            inputPurpose: Clutter.InputContentPurpose;
            /**
             * The #ClutterActor acting as the primary icon at the start of the #StEntry.
             */
            primary_icon: Clutter.Actor;
            /**
             * The #ClutterActor acting as the primary icon at the start of the #StEntry.
             */
            primaryIcon: Clutter.Actor;
            /**
             * The #ClutterActor acting as the secondary icon at the end of the #StEntry.
             */
            secondary_icon: Clutter.Actor;
            /**
             * The #ClutterActor acting as the secondary icon at the end of the #StEntry.
             */
            secondaryIcon: Clutter.Actor;
            /**
             * The current text value of the #StEntry.
             */
            text: string;
        }
    }
    type Entry = (typeof classes.Entry)['prototype'];
    const Entry: typeof classes.Entry &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.Entry.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Entry.SignalSignatures> & classes.Entry);
    namespace FocusManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type FocusManager = (typeof classes.FocusManager)['prototype'];
    const FocusManager: typeof classes.FocusManager &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.FocusManager.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FocusManager.SignalSignatures> & classes.FocusManager);
    namespace GenericAccessible {
        // Signal signatures
        interface SignalSignatures extends WidgetAccessible.SignalSignatures {
            'get-current-value'(): number;
            'get-maximum-value'(): number;
            'get-minimum-increment'(): number;
            'get-minimum-value'(): number;
            'set-current-value'(arg0: number): void;
            'notify::accessible-component-layer'(pspec: GObject.ParamSpec): void;
            'notify::accessible-component-mdi-zorder'(pspec: GObject.ParamSpec): void;
            'notify::accessible-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-help-text'(pspec: GObject.ParamSpec): void;
            'notify::accessible-hypertext-nlinks'(pspec: GObject.ParamSpec): void;
            'notify::accessible-id'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-parent'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption-object'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-summary'(pspec: GObject.ParamSpec): void;
            'notify::accessible-value'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends WidgetAccessible.ConstructorProps,
                Atk.Component.ConstructorProps,
                Atk.Value.ConstructorProps {}
    }
    type GenericAccessible = (typeof classes.GenericAccessible)['prototype'];
    const GenericAccessible: typeof classes.GenericAccessible &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.GenericAccessible.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, GenericAccessible.SignalSignatures> & classes.GenericAccessible);
    namespace Icon {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::fallback-gicon'(pspec: GObject.ParamSpec): void;
            'notify::fallback-icon-name'(pspec: GObject.ParamSpec): void;
            'notify::gicon'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::icon-size'(pspec: GObject.ParamSpec): void;
            'notify::is-symbolic'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            /**
             * The fallback #GIcon to display if #StIcon:gicon fails to load.
             */
            fallback_gicon: Gio.Icon;
            /**
             * The fallback #GIcon to display if #StIcon:gicon fails to load.
             */
            fallbackGicon: Gio.Icon;
            /**
             * The fallback icon name of the #StIcon. See st_icon_set_fallback_icon_name()
             * for details.
             */
            fallback_icon_name: string;
            /**
             * The fallback icon name of the #StIcon. See st_icon_set_fallback_icon_name()
             * for details.
             */
            fallbackIconName: string;
            /**
             * The #GIcon being displayed by this #StIcon.
             */
            gicon: Gio.Icon;
            /**
             * The name of the icon if the icon being displayed is a #GThemedIcon.
             */
            icon_name: string;
            /**
             * The name of the icon if the icon being displayed is a #GThemedIcon.
             */
            iconName: string;
            /**
             * The size of the icon, if greater than `0`. Otherwise the icon size is derived
             * from the current style.
             */
            icon_size: number;
            /**
             * The size of the icon, if greater than `0`. Otherwise the icon size is derived
             * from the current style.
             */
            iconSize: number;
            is_symbolic: boolean;
            isSymbolic: boolean;
        }
    }
    type Icon = (typeof classes.Icon)['prototype'];
    const Icon: typeof classes.Icon &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.Icon.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Icon.SignalSignatures> & classes.Icon);
    namespace IconInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type IconInfo = (typeof classes.IconInfo)['prototype'];
    const IconInfo: typeof classes.IconInfo &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.IconInfo.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, IconInfo.SignalSignatures> & classes.IconInfo);
    namespace IconTheme {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type IconTheme = (typeof classes.IconTheme)['prototype'];
    const IconTheme: typeof classes.IconTheme &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.IconTheme.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, IconTheme.SignalSignatures> & classes.IconTheme);
    namespace ImageContent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::preferred-height'(pspec: GObject.ParamSpec): void;
            'notify::preferred-width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Clutter.Content.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {
            preferred_height: number;
            preferredHeight: number;
            preferred_width: number;
            preferredWidth: number;
        }
    }
    type ImageContent = (typeof classes.ImageContent)['prototype'];
    const ImageContent: typeof classes.ImageContent &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.ImageContent.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ImageContent.SignalSignatures> & classes.ImageContent);
    namespace Label {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::clutter-text'(pspec: GObject.ParamSpec): void;
            'notify::text'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            /**
             * The internal #ClutterText actor supporting the label
             */
            clutter_text: Clutter.Text;
            /**
             * The internal #ClutterText actor supporting the label
             */
            clutterText: Clutter.Text;
            /**
             * The current text being display in the #StLabel.
             */
            text: string;
        }
    }
    type Label = (typeof classes.Label)['prototype'];
    const Label: typeof classes.Label &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.Label.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Label.SignalSignatures> & classes.Label);
    namespace PasswordEntry {
        // Signal signatures
        interface SignalSignatures extends Entry.SignalSignatures {
            'notify::password-visible'(pspec: GObject.ParamSpec): void;
            'notify::show-peek-icon'(pspec: GObject.ParamSpec): void;
            'notify::clutter-text'(pspec: GObject.ParamSpec): void;
            'notify::hint-actor'(pspec: GObject.ParamSpec): void;
            'notify::hint-text'(pspec: GObject.ParamSpec): void;
            'notify::input-hints'(pspec: GObject.ParamSpec): void;
            'notify::input-purpose'(pspec: GObject.ParamSpec): void;
            'notify::primary-icon'(pspec: GObject.ParamSpec): void;
            'notify::secondary-icon'(pspec: GObject.ParamSpec): void;
            'notify::text'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Entry.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            /**
             * Whether the text in the entry is masked for privacy.
             */
            password_visible: boolean;
            /**
             * Whether the text in the entry is masked for privacy.
             */
            passwordVisible: boolean;
            /**
             * Whether to display an icon button to toggle the masking enabled by the
             * #StPasswordEntry:password-visible property.
             */
            show_peek_icon: boolean;
            /**
             * Whether to display an icon button to toggle the masking enabled by the
             * #StPasswordEntry:password-visible property.
             */
            showPeekIcon: boolean;
        }
    }
    type PasswordEntry = (typeof classes.PasswordEntry)['prototype'];
    const PasswordEntry: typeof classes.PasswordEntry &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.PasswordEntry.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PasswordEntry.SignalSignatures> & classes.PasswordEntry);
    namespace ScrollBar {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'scroll-start'(): void;
            'scroll-stop'(): void;
            'notify::adjustment'(pspec: GObject.ParamSpec): void;
            'notify::orientation'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            /**
             * The #StAdjustment controlling the #StScrollBar.
             */
            adjustment: Adjustment;
            /**
             * The orientation of the #StScrollBar, horizontal or vertical.
             */
            orientation: Clutter.Orientation;
        }
    }
    type ScrollBar = (typeof classes.ScrollBar)['prototype'];
    const ScrollBar: typeof classes.ScrollBar &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.ScrollBar.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ScrollBar.SignalSignatures> & classes.ScrollBar);
    namespace ScrollView {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::child'(pspec: GObject.ParamSpec): void;
            'notify::enable-mouse-scrolling'(pspec: GObject.ParamSpec): void;
            'notify::hadjustment'(pspec: GObject.ParamSpec): void;
            'notify::hscrollbar-policy'(pspec: GObject.ParamSpec): void;
            'notify::hscrollbar-visible'(pspec: GObject.ParamSpec): void;
            'notify::overlay-scrollbars'(pspec: GObject.ParamSpec): void;
            'notify::vadjustment'(pspec: GObject.ParamSpec): void;
            'notify::vscrollbar-policy'(pspec: GObject.ParamSpec): void;
            'notify::vscrollbar-visible'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            /**
             * The child #StScrollable of the #StScrollView container.
             */
            child: Scrollable;
            /**
             * Whether to enable automatic mouse wheel scrolling.
             */
            enable_mouse_scrolling: boolean;
            /**
             * Whether to enable automatic mouse wheel scrolling.
             */
            enableMouseScrolling: boolean;
            /**
             * The horizontal #StAdjustment for the #StScrollView.
             */
            hadjustment: Adjustment;
            /**
             * The #StPolicyType for when to show the horizontal #StScrollBar.
             */
            hscrollbar_policy: PolicyType;
            /**
             * The #StPolicyType for when to show the horizontal #StScrollBar.
             */
            hscrollbarPolicy: PolicyType;
            /**
             * Whether the horizontal #StScrollBar is visible.
             */
            hscrollbar_visible: boolean;
            /**
             * Whether the horizontal #StScrollBar is visible.
             */
            hscrollbarVisible: boolean;
            /**
             * Whether scrollbars are painted on top of the content.
             */
            overlay_scrollbars: boolean;
            /**
             * Whether scrollbars are painted on top of the content.
             */
            overlayScrollbars: boolean;
            /**
             * The vertical #StAdjustment for the #StScrollView.
             */
            vadjustment: Adjustment;
            /**
             * The #StPolicyType for when to show the vertical #StScrollBar.
             */
            vscrollbar_policy: PolicyType;
            /**
             * The #StPolicyType for when to show the vertical #StScrollBar.
             */
            vscrollbarPolicy: PolicyType;
            /**
             * Whether the vertical #StScrollBar is visible.
             */
            vscrollbar_visible: boolean;
            /**
             * Whether the vertical #StScrollBar is visible.
             */
            vscrollbarVisible: boolean;
        }
    }
    type ScrollView<A extends Clutter.Actor = Clutter.Actor> = (typeof classes.ScrollView<A>)['prototype'];
    const ScrollView: typeof classes.ScrollView &
        (new <A extends Clutter.Actor = Clutter.Actor, Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.ScrollView.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ScrollView.SignalSignatures> & classes.ScrollView<A>);
    namespace ScrollViewFade {
        // Signal signatures
        interface SignalSignatures extends Clutter.ShaderEffect.SignalSignatures {
            'notify::extend-fade-area'(pspec: GObject.ParamSpec): void;
            'notify::fade-edges'(pspec: GObject.ParamSpec): void;
            'notify::fade-margins'(pspec: GObject.ParamSpec): void;
            'notify::shader-type'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Clutter.ShaderEffect.ConstructorProps {
            /**
             * Whether faded edges should extend beyond the faded area of the #StScrollViewFade.
             */
            extend_fade_area: boolean;
            /**
             * Whether faded edges should extend beyond the faded area of the #StScrollViewFade.
             */
            extendFadeArea: boolean;
            /**
             * Whether the faded area should extend to the edges of the #StScrollViewFade.
             */
            fade_edges: boolean;
            /**
             * Whether the faded area should extend to the edges of the #StScrollViewFade.
             */
            fadeEdges: boolean;
            /**
             * The margins widths that are faded.
             */
            fade_margins: Clutter.Margin;
            /**
             * The margins widths that are faded.
             */
            fadeMargins: Clutter.Margin;
        }
    }
    type ScrollViewFade = (typeof classes.ScrollViewFade)['prototype'];
    const ScrollViewFade: typeof classes.ScrollViewFade &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.ScrollViewFade.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ScrollViewFade.SignalSignatures> & classes.ScrollViewFade);
    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::accent-color'(pspec: GObject.ParamSpec): void;
            'notify::color-scheme'(pspec: GObject.ParamSpec): void;
            'notify::disable-show-password'(pspec: GObject.ParamSpec): void;
            'notify::drag-threshold'(pspec: GObject.ParamSpec): void;
            'notify::enable-animations'(pspec: GObject.ParamSpec): void;
            'notify::font-name'(pspec: GObject.ParamSpec): void;
            'notify::gtk-icon-theme'(pspec: GObject.ParamSpec): void;
            'notify::high-contrast'(pspec: GObject.ParamSpec): void;
            'notify::magnifier-active'(pspec: GObject.ParamSpec): void;
            'notify::primary-paste'(pspec: GObject.ParamSpec): void;
            'notify::slow-down-factor'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The current accent color.
             */
            accent_color: SystemAccentColor;
            /**
             * The current accent color.
             */
            accentColor: SystemAccentColor;
            /**
             * The preferred color-scheme
             */
            color_scheme: SystemColorScheme;
            /**
             * The preferred color-scheme
             */
            colorScheme: SystemColorScheme;
            /**
             * Whether password showing can be locked down
             */
            disable_show_password: boolean;
            /**
             * Whether password showing can be locked down
             */
            disableShowPassword: boolean;
            /**
             * The threshold before a drag operation begins.
             */
            drag_threshold: number;
            /**
             * The threshold before a drag operation begins.
             */
            dragThreshold: number;
            /**
             * Whether animations are enabled.
             */
            enable_animations: boolean;
            /**
             * Whether animations are enabled.
             */
            enableAnimations: boolean;
            /**
             * The current font name.
             */
            font_name: string;
            /**
             * The current font name.
             */
            fontName: string;
            /**
             * The current GTK icon theme
             */
            gtk_icon_theme: string;
            /**
             * The current GTK icon theme
             */
            gtkIconTheme: string;
            /**
             * Whether the accessibility high contrast mode is enabled.
             */
            high_contrast: boolean;
            /**
             * Whether the accessibility high contrast mode is enabled.
             */
            highContrast: boolean;
            /**
             * Whether the accessibility magnifier is active.
             */
            magnifier_active: boolean;
            /**
             * Whether the accessibility magnifier is active.
             */
            magnifierActive: boolean;
            /**
             * Whether pasting from the `PRIMARY` selection is supported (eg. middle-click
             * paste).
             */
            primary_paste: boolean;
            /**
             * Whether pasting from the `PRIMARY` selection is supported (eg. middle-click
             * paste).
             */
            primaryPaste: boolean;
            /**
             * The slow-down factor applied to all animation durations.
             */
            slow_down_factor: number;
            /**
             * The slow-down factor applied to all animation durations.
             */
            slowDownFactor: number;
        }
    }
    type Settings = (typeof classes.Settings)['prototype'];
    const Settings: typeof classes.Settings &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.Settings.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Settings.SignalSignatures> & classes.Settings);
    namespace SpinnerContent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Clutter.Content.ConstructorProps {}
    }
    type SpinnerContent = (typeof classes.SpinnerContent)['prototype'];
    const SpinnerContent: typeof classes.SpinnerContent &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.SpinnerContent.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SpinnerContent.SignalSignatures> & classes.SpinnerContent);
    namespace TextureCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'icon-theme-changed'(): void;
            'texture-file-changed'(arg0: Gio.File): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type TextureCache = (typeof classes.TextureCache)['prototype'];
    const TextureCache: typeof classes.TextureCache &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.TextureCache.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, TextureCache.SignalSignatures> & classes.TextureCache);
    namespace Theme {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'custom-stylesheets-changed'(): void;
            'notify::application-stylesheet'(pspec: GObject.ParamSpec): void;
            'notify::default-stylesheet'(pspec: GObject.ParamSpec): void;
            'notify::theme-stylesheet'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The highest priority stylesheet, representing application-specific
             * styling; this is associated with the CSS "author" stylesheet.
             */
            application_stylesheet: Gio.File;
            /**
             * The highest priority stylesheet, representing application-specific
             * styling; this is associated with the CSS "author" stylesheet.
             */
            applicationStylesheet: Gio.File;
            /**
             * The lowest priority stylesheet, representing global default
             * styling; this is associated with the CSS "user agent" stylesheet.
             */
            default_stylesheet: Gio.File;
            /**
             * The lowest priority stylesheet, representing global default
             * styling; this is associated with the CSS "user agent" stylesheet.
             */
            defaultStylesheet: Gio.File;
            /**
             * The second priority stylesheet, representing theme-specific styling;
             * this is associated with the CSS "user" stylesheet.
             */
            theme_stylesheet: Gio.File;
            /**
             * The second priority stylesheet, representing theme-specific styling;
             * this is associated with the CSS "user" stylesheet.
             */
            themeStylesheet: Gio.File;
        }
    }
    type Theme = (typeof classes.Theme)['prototype'];
    const Theme: typeof classes.Theme &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.Theme.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Theme.SignalSignatures> & classes.Theme);
    namespace ThemeContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed(): void;
            'notify::scale-factor'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The scaling factor used for HiDPI scaling.
             */
            scale_factor: number;
            /**
             * The scaling factor used for HiDPI scaling.
             */
            scaleFactor: number;
        }
    }
    type ThemeContext = (typeof classes.ThemeContext)['prototype'];
    const ThemeContext: typeof classes.ThemeContext &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.ThemeContext.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ThemeContext.SignalSignatures> & classes.ThemeContext);
    namespace ThemeNode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type ThemeNode = (typeof classes.ThemeNode)['prototype'];
    const ThemeNode: typeof classes.ThemeNode &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.ThemeNode.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ThemeNode.SignalSignatures> & classes.ThemeNode);
    namespace Viewport {
        // Signal signatures
        interface SignalSignatures extends Widget.SignalSignatures {
            'notify::clip-to-view'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
            'notify::hadjustment'(pspec: GObject.ParamSpec): void;
            'notify::vadjustment'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps<
            A extends Clutter.LayoutManager = Clutter.LayoutManager,
            B extends Clutter.Content = Clutter.Content,
        > extends Widget.ConstructorProps<A, B>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Scrollable.ConstructorProps {
            clip_to_view: boolean;
            clipToView: boolean;
        }
    }
    type Viewport<
        A extends Clutter.LayoutManager = Clutter.LayoutManager,
        B extends Clutter.Content = Clutter.Content,
    > = (typeof classes.Viewport<A, B>)['prototype'];
    const Viewport: typeof classes.Viewport &
        (new <
            A extends Clutter.LayoutManager = Clutter.LayoutManager,
            B extends Clutter.Content = Clutter.Content,
            Opts extends GObject.MetaInfo = {},
        >(
            properties?: Partial<St.Viewport.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Viewport.SignalSignatures> & classes.Viewport<A, B>);
    namespace Widget {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'popup-menu'(): void;
            'style-changed'(): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps<
            A extends Clutter.LayoutManager = Clutter.LayoutManager,
            B extends Clutter.Content = Clutter.Content,
        > extends Clutter.Actor.ConstructorProps<A, B>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            /**
             * Whether or not the widget can be focused via keyboard navigation.
             */
            can_focus: boolean;
            /**
             * Whether or not the widget can be focused via keyboard navigation.
             */
            canFocus: boolean;
            /**
             * Whether or not the pointer is currently hovering over the widget. This is
             * only tracked automatically if #StWidget:track-hover is %TRUE, but you can
             * adjust it manually in any case.
             */
            hover: boolean;
            /**
             * An actor that labels this widget.
             */
            label_actor: Clutter.Actor;
            /**
             * An actor that labels this widget.
             */
            labelActor: Clutter.Actor;
            /**
             * The pseudo-class of the actor. Typical values include "hover", "active",
             * "focus".
             */
            pseudo_class: string;
            /**
             * The pseudo-class of the actor. Typical values include "hover", "active",
             * "focus".
             */
            pseudoClass: string;
            /**
             * Inline style information for the actor as a ';'-separated list of
             * CSS properties.
             */
            style: string;
            /**
             * The style-class of the actor for use in styling.
             */
            style_class: string;
            /**
             * The style-class of the actor for use in styling.
             */
            styleClass: string;
            /**
             * Determines whether the widget tracks pointer hover state. If
             * %TRUE (and the widget is visible and reactive), the
             * #StWidget:hover property and "hover" style pseudo class will be
             * adjusted automatically as the pointer moves in and out of the
             * widget.
             */
            track_hover: boolean;
            /**
             * Determines whether the widget tracks pointer hover state. If
             * %TRUE (and the widget is visible and reactive), the
             * #StWidget:hover property and "hover" style pseudo class will be
             * adjusted automatically as the pointer moves in and out of the
             * widget.
             */
            trackHover: boolean;
        }
    }
    type Widget<
        A extends Clutter.LayoutManager = Clutter.LayoutManager,
        B extends Clutter.Content = Clutter.Content,
    > = (typeof classes.Widget<A, B>)['prototype'];
    const Widget: typeof classes.Widget &
        (new <
            A extends Clutter.LayoutManager = Clutter.LayoutManager,
            B extends Clutter.Content = Clutter.Content,
            Opts extends GObject.MetaInfo = {},
        >(
            properties?: Partial<St.Widget.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Widget.SignalSignatures> & classes.Widget<A, B>);
    namespace WidgetAccessible {
        // Signal signatures
        interface SignalSignatures extends Clutter.ActorAccessible.SignalSignatures {
            'notify::accessible-component-layer'(pspec: GObject.ParamSpec): void;
            'notify::accessible-component-mdi-zorder'(pspec: GObject.ParamSpec): void;
            'notify::accessible-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-help-text'(pspec: GObject.ParamSpec): void;
            'notify::accessible-hypertext-nlinks'(pspec: GObject.ParamSpec): void;
            'notify::accessible-id'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-parent'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-caption-object'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-column-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-description'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-row-header'(pspec: GObject.ParamSpec): void;
            'notify::accessible-table-summary'(pspec: GObject.ParamSpec): void;
            'notify::accessible-value'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Clutter.ActorAccessible.ConstructorProps, Atk.Component.ConstructorProps {}
    }
    type WidgetAccessible = (typeof classes.WidgetAccessible)['prototype'];
    const WidgetAccessible: typeof classes.WidgetAccessible &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<St.WidgetAccessible.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WidgetAccessible.SignalSignatures> & classes.WidgetAccessible);
    export type AdjustmentClass = typeof Adjustment;
    export type BinClass = typeof Bin;
    export type BorderImageClass = typeof BorderImage;
    export type BoxLayoutClass = typeof BoxLayout;
    abstract class BoxLayoutPrivate {
        static '$gtype': GObject.GType<BoxLayoutPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type ButtonClass = typeof Button;
    export type ClipboardClass = typeof Clipboard;
    export type DndStartGestureClass = typeof DndStartGesture;
    export type DrawingAreaClass = typeof DrawingArea;
    export type EntryClass = typeof Entry;
    export type FocusManagerClass = typeof FocusManager;
    export type GenericAccessibleClass = typeof GenericAccessible;
    export type IconClass = typeof Icon;
    /**
     * The #StIconColors structure encapsulates colors for colorizing a symbolic
     * icon.
     */
    class IconColors {
        static '$gtype': GObject.GType<IconColors>;
        // Fields
        foreground: Cogl.Color;
        warning: Cogl.Color;
        error: Cogl.Color;
        success: Cogl.Color;
        // Constructors
        constructor(
            properties?: Partial<{
                foreground: Cogl.Color;
                warning: Cogl.Color;
                error: Cogl.Color;
                success: Cogl.Color;
            }>,
        );
        _init(...args: any[]): void;
        static new(): IconColors;
        // Methods
        /**
         * Creates a new StIconColors structure that is a copy of the passed
         * in `colors`. You would use this function instead of st_icon_colors_ref()
         * if you were planning to change colors in the result.
         *
         * @returns a newly created #StIconColors.
         */
        copy(): IconColors;
        /**
         * Check if two #StIconColors objects are identical.
         *
         * @returns %TRUE if the #StIconColors are equal
         * @param other another #StIconColors
         */
        equal(other: IconColors): boolean;
        /**
         * Atomically increments the reference count of `colors` by one.
         *
         * @returns the passed in #StIconColors.
         */
        ref(): IconColors;
        /**
         * Atomically decrements the reference count of `colors` by one.
         * If the reference count drops to 0, all memory allocated by the
         * #StIconColors is released.
         */
        unref(): void;
    }
    export type IconInfoClass = typeof IconInfo;
    abstract class IconPrivate {
        static '$gtype': GObject.GType<IconPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type IconThemeClass = typeof IconTheme;
    export type ImageContentClass = typeof ImageContent;
    export type LabelClass = typeof Label;
    abstract class LabelPrivate {
        static '$gtype': GObject.GType<LabelPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type PasswordEntryClass = typeof PasswordEntry;
    export type ScrollBarClass = typeof ScrollBar;
    export type ScrollViewClass = typeof ScrollView;
    export type ScrollViewFadeClass = typeof ScrollViewFade;
    export type ScrollableInterface = typeof Scrollable;
    export type SettingsClass = typeof Settings;
    /**
     * A type representing -st-shadow attributes
     *
     * #StShadow is a boxed type for storing attributes of the -st-shadow
     * property, modelled liberally after the CSS3 box-shadow property.
     * See http://www.css3.info/preview/box-shadow/
     */
    class Shadow {
        static '$gtype': GObject.GType<Shadow>;
        // Fields
        color: Cogl.Color;
        xoffset: number;
        yoffset: number;
        blur: number;
        spread: number;
        inset: boolean;
        // Constructors
        constructor(
            properties?: Partial<{
                color: Cogl.Color;
                xoffset: number;
                yoffset: number;
                blur: number;
                spread: number;
                inset: boolean;
            }>,
        );
        _init(...args: any[]): void;
        static new(
            color: Cogl.Color,
            xoffset: number,
            yoffset: number,
            blur: number,
            spread: number,
            inset: boolean,
        ): Shadow;
        // Methods
        /**
         * Check if two shadow objects are identical. Note that two shadows may
         * compare non-identically if they differ only by floating point rounding
         * errors.
         *
         * @returns %TRUE if the two shadows are identical
         * @param other a different #StShadow
         */
        equal(other: Shadow): boolean;
        /**
         * Gets the box used to paint `shadow,` which will be partly
         * outside of `actor_box`
         *
         * @param actor_box the box allocated to a #ClutterAlctor
         * @param shadow_box computed box occupied by `shadow`
         */
        get_box(actor_box: Clutter.ActorBox, shadow_box: Clutter.ActorBox): void;
        /**
         * Atomically increments the reference count of `shadow` by one.
         *
         * @returns the passed in #StShadow.
         */
        ref(): Shadow;
        /**
         * Atomically decrements the reference count of `shadow` by one.
         * If the reference count drops to 0, all memory allocated by the
         * #StShadow is released.
         */
        unref(): void;
    }
    /**
     * A helper for implementing a drop shadow on a actor.
     * The actor is expected to recreate the helper whenever its contents
     * or size change. Then, it would call st_shadow_helper_paint() inside
     * its paint() virtual function.
     */
    class ShadowHelper {
        static '$gtype': GObject.GType<ShadowHelper>;
        // Constructors
        constructor(shadow: Shadow);
        _init(...args: any[]): void;
        static new(shadow: Shadow): ShadowHelper;
        // Methods
        copy(): ShadowHelper;
        /**
         * Free resources associated with `helper`.
         */
        free(): void;
        /**
         * Paints the shadow associated with `helper` This must only
         * be called from the implementation of ClutterActor::paint().
         *
         * @param node a #ClutterPaintNode
         * @param actor_box the bounding box of the shadow
         * @param paint_opacity the opacity at which the shadow is painted
         */
        paint(node: Clutter.PaintNode, actor_box: Clutter.ActorBox, paint_opacity: number): void;
        /**
         * Update `helper` from `source`.
         *
         * @param source a #ClutterActor
         * @param paint_context a #ClutterPaintContext
         */
        update(source: Clutter.Actor, paint_context: Clutter.PaintContext): void;
    }
    export type SpinnerContentClass = typeof SpinnerContent;
    export type TextureCacheClass = typeof TextureCache;
    export type ThemeClass = typeof Theme;
    export type ThemeContextClass = typeof ThemeContext;
    export type ThemeNodeClass = typeof ThemeNode;
    class ThemeNodePaintState {
        static '$gtype': GObject.GType<ThemeNodePaintState>;
        // Fields
        node: ThemeNode;
        alloc_width: number;
        alloc_height: number;
        box_shadow_width: number;
        box_shadow_height: number;
        resource_scale: number;
        box_shadow_pipeline: Cogl.Pipeline;
        prerendered_texture: Cogl.Texture;
        prerendered_pipeline: Cogl.Pipeline;
        corner_pipeline: Cogl.Pipeline[];
        // Constructors
        _init(...args: any[]): void;
        // Methods
        copy(other: ThemeNodePaintState): void;
        free(): void;
        init(): void;
        invalidate(): void;
        invalidate_for_file(file: Gio.File): boolean;
        set_node(node: ThemeNode): void;
    }
    export type ViewportClass = typeof Viewport;
    export type WidgetAccessibleClass = typeof WidgetAccessible;
    export type WidgetClass = typeof Widget;
    namespace Scrollable {
        /**
         * Interface for implementing Scrollable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
            /**
             * This method should be implemented by classes implementing the #StScrollable
             * interface.
             *
             * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
             * method.
             *
             * @param hadjustment the horizontal #StAdjustment
             * @param vadjustment the vertical #StAdjustment
             */
            vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The horizontal #StAdjustment used by the #StScrollable.
             *
             * Implementations should override this property to provide read-write
             * access to the #StAdjustment.
             *
             * JavaScript code may override this as demonstrated below:
             *
             * ```js
             * export const MyScrollable = GObject.registerClass({
             *     Properties: {
             *         'hadjustment': GObject.ParamSpec.override(
             *             'hadjustment',
             *             St.Scrollable
             *         )
             *     }
             * }, class MyScrollable extends St.Scrollable {
             *
             *     get hadjustment() {
             *         return this._hadjustment || null;
             *     }
             *
             *     set hadjustment(adjustment) {
             *         if (this.hadjustment === adjustment)
             *             return;
             *
             *         this._hadjustment = adjustment;
             *         this.notify('hadjustment');
             *     }
             * });
             * ```
             */
            hadjustment: Adjustment;
            /**
             * The vertical #StAdjustment used by the #StScrollable.
             *
             * Implementations should override this property to provide read-write
             * access to the #StAdjustment.
             *
             * See #StScrollable:hadjustment for an example of how to override this
             * property in JavaScript code.
             */
            vadjustment: Adjustment;
        }
    }
    export interface ScrollableNamespace {
        $gtype: GObject.GType<Scrollable>;
        prototype: Scrollable;
    }
    interface Scrollable extends GObject.Object, Scrollable.Interface {
        // Properties
        /**
         * The horizontal #StAdjustment used by the #StScrollable.
         *
         * Implementations should override this property to provide read-write
         * access to the #StAdjustment.
         *
         * JavaScript code may override this as demonstrated below:
         *
         * ```js
         * export const MyScrollable = GObject.registerClass({
         *     Properties: {
         *         'hadjustment': GObject.ParamSpec.override(
         *             'hadjustment',
         *             St.Scrollable
         *         )
         *     }
         * }, class MyScrollable extends St.Scrollable {
         *
         *     get hadjustment() {
         *         return this._hadjustment || null;
         *     }
         *
         *     set hadjustment(adjustment) {
         *         if (this.hadjustment === adjustment)
         *             return;
         *
         *         this._hadjustment = adjustment;
         *         this.notify('hadjustment');
         *     }
         * });
         * ```
         */
        hadjustment: Adjustment;
        /**
         * The vertical #StAdjustment used by the #StScrollable.
         *
         * Implementations should override this property to provide read-write
         * access to the #StAdjustment.
         *
         * See #StScrollable:hadjustment for an example of how to override this
         * property in JavaScript code.
         */
        vadjustment: Adjustment;
        // Methods
        get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        /**
         * This method should be implemented by classes implementing the #StScrollable
         * interface.
         *
         * JavaScript code should do this by overriding the `vfunc_set_adjustments()`
         * method.
         *
         * @param hadjustment the horizontal #StAdjustment
         * @param vadjustment the vertical #StAdjustment
         */
        set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    }
    export const Scrollable: ScrollableNamespace & (new () => Scrollable);
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
export default St;
