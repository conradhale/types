/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type Clutter from '@girs/clutter-17';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Mtk from '@girs/mtk-17';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Cogl from '@girs/cogl-17';
import type Atk from '@girs/atk-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Meta from '@girs/meta-17';
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
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
    export namespace Corner {
        export const $gtype: GObject.GType<Corner>;
    }
    enum Corner {
        TOPLEFT,
        TOPRIGHT = 1,
        BOTTOMRIGHT = 2,
        BOTTOMLEFT = 3,
    }
    export namespace DirectionType {
        export const $gtype: GObject.GType<DirectionType>;
    }
    enum DirectionType {
        TAB_FORWARD,
        TAB_BACKWARD = 1,
        UP = 2,
        DOWN = 3,
        LEFT = 4,
        RIGHT = 5,
    }
    export namespace GradientType {
        export const $gtype: GObject.GType<GradientType>;
    }
    enum GradientType {
        NONE,
        VERTICAL = 1,
        HORIZONTAL = 2,
        RADIAL = 3,
    }
    export namespace IconStyle {
        export const $gtype: GObject.GType<IconStyle>;
    }
    enum IconStyle {
        REQUESTED,
        REGULAR = 1,
        SYMBOLIC = 2,
    }
    class IconThemeError extends GLib.Error {
        static '$gtype': GObject.GType<IconThemeError>;
        // Static Fields
        static NOT_FOUND: number;
        static FAILED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
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
    export namespace Side {
        export const $gtype: GObject.GType<Side>;
    }
    enum Side {
        TOP,
        RIGHT = 1,
        BOTTOM = 2,
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
    export namespace TextAlign {
        export const $gtype: GObject.GType<TextAlign>;
    }
    enum TextAlign {
        LEFT,
        CENTER = 1,
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
    function describe_actor(actor: Clutter.Actor): string;
    function icon_theme_error_quark(): number;
    interface ClipboardCallbackFunc {
        (clipboard: Clipboard, text: string): void;
    }
    interface ClipboardContentCallbackFunc {
        (clipboard: Clipboard, bytes: GLib.Bytes | Uint8Array): void;
    }
    interface EntryCursorFunc {
        (entry: Entry, use_ibeam: boolean, data: any): void;
    }
    export namespace ButtonMask {
        export const $gtype: GObject.GType<ButtonMask>;
    }
    enum ButtonMask {
        ONE = 1,
        TWO = 2,
        THREE = 4,
    }
    export namespace IconLookupFlags {
        export const $gtype: GObject.GType<IconLookupFlags>;
    }
    enum IconLookupFlags {
        NO_SVG = 1,
        FORCE_SVG = 2,
        GENERIC_FALLBACK = 4,
        FORCE_SIZE = 8,
        FORCE_REGULAR = 16,
        FORCE_SYMBOLIC = 32,
        DIR_LTR = 64,
        DIR_RTL = 128,
    }
    export namespace TextDecoration {
        export const $gtype: GObject.GType<TextDecoration>;
    }
    enum TextDecoration {
        UNDERLINE = 1,
        OVERLINE = 2,
        LINE_THROUGH = 4,
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
            actor: Clutter.Actor;
            lower: number;
            page_increment: number;
            pageIncrement: number;
            page_size: number;
            pageSize: number;
            step_increment: number;
            stepIncrement: number;
            upper: number;
            value: number;
        }
    }
    type Adjustment = (typeof classes.Adjustment)['prototype'];
    const Adjustment: typeof classes.Adjustment &
        (new <Opts extends GObject.MetaInfo>(
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
            child: A;
        }
    }
    type Bin<A extends Clutter.Actor = Clutter.Actor> = (typeof classes.Bin<A>)['prototype'];
    const Bin: typeof classes.Bin &
        (new <A extends Clutter.Actor, Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
            orientation: Clutter.Orientation;
            vertical: boolean;
        }
    }
    type BoxLayout = (typeof classes.BoxLayout)['prototype'];
    const BoxLayout: typeof classes.BoxLayout &
        (new <Opts extends GObject.MetaInfo>(
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
            button_mask: ButtonMask;
            buttonMask: ButtonMask;
            checked: boolean;
            icon_name: string;
            iconName: string;
            label: string;
            pressed: boolean;
            toggle_mode: boolean;
            toggleMode: boolean;
        }
    }
    type Button<A extends Clutter.Actor = Clutter.Actor> = (typeof classes.Button<A>)['prototype'];
    const Button: typeof classes.Button &
        (new <A extends Clutter.Actor, Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
            clutter_text: Clutter.Text;
            clutterText: Clutter.Text;
            hint_actor: Clutter.Actor;
            hintActor: Clutter.Actor;
            hint_text: string;
            hintText: string;
            input_hints: Clutter.InputContentHintFlags;
            inputHints: Clutter.InputContentHintFlags;
            input_purpose: Clutter.InputContentPurpose;
            inputPurpose: Clutter.InputContentPurpose;
            primary_icon: Clutter.Actor;
            primaryIcon: Clutter.Actor;
            secondary_icon: Clutter.Actor;
            secondaryIcon: Clutter.Actor;
            text: string;
        }
    }
    type Entry = (typeof classes.Entry)['prototype'];
    const Entry: typeof classes.Entry &
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
            fallback_gicon: Gio.Icon;
            fallbackGicon: Gio.Icon;
            fallback_icon_name: string;
            fallbackIconName: string;
            gicon: Gio.Icon;
            icon_name: string;
            iconName: string;
            icon_size: number;
            iconSize: number;
            is_symbolic: boolean;
            isSymbolic: boolean;
        }
    }
    type Icon = (typeof classes.Icon)['prototype'];
    const Icon: typeof classes.Icon &
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
            clutter_text: Clutter.Text;
            clutterText: Clutter.Text;
            text: string;
        }
    }
    type Label = (typeof classes.Label)['prototype'];
    const Label: typeof classes.Label &
        (new <Opts extends GObject.MetaInfo>(
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
            password_visible: boolean;
            passwordVisible: boolean;
            show_peek_icon: boolean;
            showPeekIcon: boolean;
        }
    }
    type PasswordEntry = (typeof classes.PasswordEntry)['prototype'];
    const PasswordEntry: typeof classes.PasswordEntry &
        (new <Opts extends GObject.MetaInfo>(
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
            adjustment: Adjustment;
            orientation: Clutter.Orientation;
        }
    }
    type ScrollBar = (typeof classes.ScrollBar)['prototype'];
    const ScrollBar: typeof classes.ScrollBar &
        (new <Opts extends GObject.MetaInfo>(
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
            child: Scrollable;
            enable_mouse_scrolling: boolean;
            enableMouseScrolling: boolean;
            hadjustment: Adjustment;
            hscrollbar_policy: PolicyType;
            hscrollbarPolicy: PolicyType;
            hscrollbar_visible: boolean;
            hscrollbarVisible: boolean;
            overlay_scrollbars: boolean;
            overlayScrollbars: boolean;
            vadjustment: Adjustment;
            vscrollbar_policy: PolicyType;
            vscrollbarPolicy: PolicyType;
            vscrollbar_visible: boolean;
            vscrollbarVisible: boolean;
        }
    }
    type ScrollView<A extends Clutter.Actor = Clutter.Actor> = (typeof classes.ScrollView<A>)['prototype'];
    const ScrollView: typeof classes.ScrollView &
        (new <A extends Clutter.Actor, Opts extends GObject.MetaInfo>(
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
            extend_fade_area: boolean;
            extendFadeArea: boolean;
            fade_edges: boolean;
            fadeEdges: boolean;
            fade_margins: Clutter.Margin;
            fadeMargins: Clutter.Margin;
        }
    }
    type ScrollViewFade = (typeof classes.ScrollViewFade)['prototype'];
    const ScrollViewFade: typeof classes.ScrollViewFade &
        (new <Opts extends GObject.MetaInfo>(
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
            accent_color: SystemAccentColor;
            accentColor: SystemAccentColor;
            color_scheme: SystemColorScheme;
            colorScheme: SystemColorScheme;
            disable_show_password: boolean;
            disableShowPassword: boolean;
            drag_threshold: number;
            dragThreshold: number;
            enable_animations: boolean;
            enableAnimations: boolean;
            font_name: string;
            fontName: string;
            gtk_icon_theme: string;
            gtkIconTheme: string;
            high_contrast: boolean;
            highContrast: boolean;
            magnifier_active: boolean;
            magnifierActive: boolean;
            primary_paste: boolean;
            primaryPaste: boolean;
            slow_down_factor: number;
            slowDownFactor: number;
        }
    }
    type Settings = (typeof classes.Settings)['prototype'];
    const Settings: typeof classes.Settings &
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
            application_stylesheet: Gio.File;
            applicationStylesheet: Gio.File;
            default_stylesheet: Gio.File;
            defaultStylesheet: Gio.File;
            theme_stylesheet: Gio.File;
            themeStylesheet: Gio.File;
        }
    }
    type Theme = (typeof classes.Theme)['prototype'];
    const Theme: typeof classes.Theme &
        (new <Opts extends GObject.MetaInfo>(
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
            scale_factor: number;
            scaleFactor: number;
        }
    }
    type ThemeContext = (typeof classes.ThemeContext)['prototype'];
    const ThemeContext: typeof classes.ThemeContext &
        (new <Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
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
        (new <A extends Clutter.LayoutManager, B extends Clutter.Content, Opts extends GObject.MetaInfo>(
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
            can_focus: boolean;
            canFocus: boolean;
            hover: boolean;
            label_actor: Clutter.Actor;
            labelActor: Clutter.Actor;
            pseudo_class: string;
            pseudoClass: string;
            style: string;
            style_class: string;
            styleClass: string;
            track_hover: boolean;
            trackHover: boolean;
        }
    }
    type Widget<
        A extends Clutter.LayoutManager = Clutter.LayoutManager,
        B extends Clutter.Content = Clutter.Content,
    > = (typeof classes.Widget<A, B>)['prototype'];
    const Widget: typeof classes.Widget &
        (new <A extends Clutter.LayoutManager, B extends Clutter.Content, Opts extends GObject.MetaInfo>(
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
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<St.WidgetAccessible.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WidgetAccessible.SignalSignatures> & classes.WidgetAccessible);
    class AdjustmentClass {
        static '$gtype': GObject.GType<AdjustmentClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class BinClass {
        static '$gtype': GObject.GType<BinClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class BorderImageClass {
        static '$gtype': GObject.GType<BorderImageClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class BoxLayoutClass {
        static '$gtype': GObject.GType<BoxLayoutClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class BoxLayoutPrivate {
        static '$gtype': GObject.GType<BoxLayoutPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ButtonClass {
        static '$gtype': GObject.GType<ButtonClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ClipboardClass {
        static '$gtype': GObject.GType<ClipboardClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class DndStartGestureClass {
        static '$gtype': GObject.GType<DndStartGestureClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class DrawingAreaClass {
        static '$gtype': GObject.GType<DrawingAreaClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class EntryClass {
        static '$gtype': GObject.GType<EntryClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class FocusManagerClass {
        static '$gtype': GObject.GType<FocusManagerClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class GenericAccessibleClass {
        static '$gtype': GObject.GType<GenericAccessibleClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class IconClass {
        static '$gtype': GObject.GType<IconClass>;
        // Constructors
        _init(...args: any[]): void;
    }
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
        copy(): IconColors;
        equal(other: IconColors): boolean;
        ref(): IconColors;
        unref(): void;
    }
    class IconInfoClass {
        static '$gtype': GObject.GType<IconInfoClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class IconPrivate {
        static '$gtype': GObject.GType<IconPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    class IconThemeClass {
        static '$gtype': GObject.GType<IconThemeClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ImageContentClass {
        static '$gtype': GObject.GType<ImageContentClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class LabelClass {
        static '$gtype': GObject.GType<LabelClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class LabelPrivate {
        static '$gtype': GObject.GType<LabelPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    class PasswordEntryClass {
        static '$gtype': GObject.GType<PasswordEntryClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ScrollBarClass {
        static '$gtype': GObject.GType<ScrollBarClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ScrollViewClass {
        static '$gtype': GObject.GType<ScrollViewClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ScrollViewFadeClass {
        static '$gtype': GObject.GType<ScrollViewFadeClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ScrollableInterface {
        static '$gtype': GObject.GType<ScrollableInterface>;
        // Constructors
        _init(...args: any[]): void;
    }
    class SettingsClass {
        static '$gtype': GObject.GType<SettingsClass>;
        // Constructors
        _init(...args: any[]): void;
    }
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
        equal(other: Shadow): boolean;
        get_box(actor_box: Clutter.ActorBox, shadow_box: Clutter.ActorBox): void;
        ref(): Shadow;
        unref(): void;
    }
    class ShadowHelper {
        static '$gtype': GObject.GType<ShadowHelper>;
        // Constructors
        constructor(shadow: Shadow);
        _init(...args: any[]): void;
        static new(shadow: Shadow): ShadowHelper;
        // Methods
        copy(): ShadowHelper;
        free(): void;
        paint(node: Clutter.PaintNode, actor_box: Clutter.ActorBox, paint_opacity: number): void;
        update(source: Clutter.Actor, paint_context: Clutter.PaintContext): void;
    }
    class SpinnerContentClass {
        static '$gtype': GObject.GType<SpinnerContentClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class TextureCacheClass {
        static '$gtype': GObject.GType<TextureCacheClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ThemeClass {
        static '$gtype': GObject.GType<ThemeClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ThemeContextClass {
        static '$gtype': GObject.GType<ThemeContextClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ThemeNodeClass {
        static '$gtype': GObject.GType<ThemeNodeClass>;
        // Constructors
        _init(...args: any[]): void;
    }
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
    class ViewportClass {
        static '$gtype': GObject.GType<ViewportClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class WidgetAccessibleClass {
        static '$gtype': GObject.GType<WidgetAccessibleClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class WidgetClass {
        static '$gtype': GObject.GType<WidgetClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    namespace Scrollable {
        /**
         * Interface for implementing Scrollable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            vfunc_get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
            vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            hadjustment: Adjustment;
            vadjustment: Adjustment;
        }
    }
    export interface ScrollableNamespace {
        $gtype: GObject.GType<Scrollable>;
        prototype: Scrollable;
    }
    interface Scrollable extends GObject.Object, Scrollable.Interface {
        // Properties
        hadjustment: Adjustment;
        vadjustment: Adjustment;
        // Methods
        get_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
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
