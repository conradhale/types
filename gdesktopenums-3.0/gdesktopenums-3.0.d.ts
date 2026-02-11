/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import GObject from '@girs/gobject-2.0';
import '@girs/gjs';
export namespace GDesktopEnums {
    /**
     * GDesktopEnums-3.0
     */
    export namespace AccentColor {
        export const $gtype: GObject.GType<AccentColor>;
    }
    enum AccentColor {
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
    export namespace BackgroundShading {
        export const $gtype: GObject.GType<BackgroundShading>;
    }
    enum BackgroundShading {
        SOLID,
        VERTICAL = 1,
        HORIZONTAL = 2,
    }
    export namespace BackgroundStyle {
        export const $gtype: GObject.GType<BackgroundStyle>;
    }
    enum BackgroundStyle {
        NONE,
        WALLPAPER = 1,
        CENTERED = 2,
        SCALED = 3,
        STRETCHED = 4,
        ZOOM = 5,
        SPANNED = 6,
    }
    export namespace ClockFormat {
        export const $gtype: GObject.GType<ClockFormat>;
    }
    enum ClockFormat {
        '24H',
        '12H' = 1,
    }
    export namespace ColorScheme {
        export const $gtype: GObject.GType<ColorScheme>;
    }
    enum ColorScheme {
        DEFAULT,
        PREFER_DARK = 1,
        PREFER_LIGHT = 2,
    }
    export namespace DeviceSendEvents {
        export const $gtype: GObject.GType<DeviceSendEvents>;
    }
    enum DeviceSendEvents {
        ENABLED,
        DISABLED = 1,
        DISABLED_ON_EXTERNAL_MOUSE = 2,
    }
    export namespace FocusMode {
        export const $gtype: GObject.GType<FocusMode>;
    }
    enum FocusMode {
        CLICK,
        SLOPPY = 1,
        MOUSE = 2,
    }
    export namespace FocusNewWindows {
        export const $gtype: GObject.GType<FocusNewWindows>;
    }
    enum FocusNewWindows {
        SMART,
        STRICT = 1,
    }
    export namespace FontAntialiasingMode {
        export const $gtype: GObject.GType<FontAntialiasingMode>;
    }
    enum FontAntialiasingMode {
        NONE,
        GRAYSCALE = 1,
        RGBA = 2,
    }
    export namespace FontHinting {
        export const $gtype: GObject.GType<FontHinting>;
    }
    enum FontHinting {
        NONE,
        SLIGHT = 1,
        MEDIUM = 2,
        FULL = 3,
    }
    export namespace FontRendering {
        export const $gtype: GObject.GType<FontRendering>;
    }
    enum FontRendering {
        AUTOMATIC,
        MANUAL = 1,
    }
    export namespace FontRgbaOrder {
        export const $gtype: GObject.GType<FontRgbaOrder>;
    }
    enum FontRgbaOrder {
        RGBA,
        RGB = 1,
        BGR = 2,
        VRGB = 3,
        VBGR = 4,
    }
    export namespace LocationAccuracyLevel {
        export const $gtype: GObject.GType<LocationAccuracyLevel>;
    }
    enum LocationAccuracyLevel {
        COUNTRY,
        CITY = 1,
        NEIGHBORHOOD = 2,
        STREET = 3,
        EXACT = 4,
    }
    export namespace MagnifierCaretTrackingMode {
        export const $gtype: GObject.GType<MagnifierCaretTrackingMode>;
    }
    enum MagnifierCaretTrackingMode {
        NONE,
        CENTERED = 1,
        PROPORTIONAL = 2,
        PUSH = 3,
    }
    export namespace MagnifierFocusTrackingMode {
        export const $gtype: GObject.GType<MagnifierFocusTrackingMode>;
    }
    enum MagnifierFocusTrackingMode {
        NONE,
        CENTERED = 1,
        PROPORTIONAL = 2,
        PUSH = 3,
    }
    export namespace MagnifierMouseTrackingMode {
        export const $gtype: GObject.GType<MagnifierMouseTrackingMode>;
    }
    enum MagnifierMouseTrackingMode {
        NONE,
        CENTERED = 1,
        PROPORTIONAL = 2,
        PUSH = 3,
    }
    export namespace MagnifierScreenPosition {
        export const $gtype: GObject.GType<MagnifierScreenPosition>;
    }
    enum MagnifierScreenPosition {
        NONE,
        FULL_SCREEN = 1,
        TOP_HALF = 2,
        BOTTOM_HALF = 3,
        LEFT_HALF = 4,
        RIGHT_HALF = 5,
    }
    export namespace MouseDwellDirection {
        export const $gtype: GObject.GType<MouseDwellDirection>;
    }
    enum MouseDwellDirection {
        LEFT,
        RIGHT = 1,
        UP = 2,
        DOWN = 3,
    }
    export namespace MouseDwellMode {
        export const $gtype: GObject.GType<MouseDwellMode>;
    }
    enum MouseDwellMode {
        WINDOW,
        GESTURE = 1,
    }
    export namespace PadButtonAction {
        export const $gtype: GObject.GType<PadButtonAction>;
    }
    enum PadButtonAction {
        NONE,
        HELP = 1,
        SWITCH_MONITOR = 2,
        KEYBINDING = 3,
    }
    export namespace PointerAccelProfile {
        export const $gtype: GObject.GType<PointerAccelProfile>;
    }
    enum PointerAccelProfile {
        DEFAULT,
        FLAT = 1,
        ADAPTIVE = 2,
    }
    export namespace PointingStickScrollMethod {
        export const $gtype: GObject.GType<PointingStickScrollMethod>;
    }
    enum PointingStickScrollMethod {
        DEFAULT,
        NONE = 1,
        ON_BUTTON_DOWN = 2,
    }
    export namespace ProxyMode {
        export const $gtype: GObject.GType<ProxyMode>;
    }
    enum ProxyMode {
        NONE,
        MANUAL = 1,
        AUTO = 2,
    }
    export namespace ScreensaverMode {
        export const $gtype: GObject.GType<ScreensaverMode>;
    }
    enum ScreensaverMode {
        BLANK_ONLY,
        RANDOM = 1,
        SINGLE = 2,
    }
    export namespace StylusButtonAction {
        export const $gtype: GObject.GType<StylusButtonAction>;
    }
    enum StylusButtonAction {
        DEFAULT,
        MIDDLE = 1,
        RIGHT = 2,
        BACK = 3,
        FORWARD = 4,
        SWITCH_MONITOR = 5,
        KEYBINDING = 6,
    }
    export namespace TabletMapping {
        export const $gtype: GObject.GType<TabletMapping>;
    }
    enum TabletMapping {
        ABSOLUTE,
        RELATIVE = 1,
    }
    export namespace TitlebarAction {
        export const $gtype: GObject.GType<TitlebarAction>;
    }
    enum TitlebarAction {
        TOGGLE_SHADE,
        TOGGLE_MAXIMIZE = 1,
        TOGGLE_MAXIMIZE_HORIZONTALLY = 2,
        TOGGLE_MAXIMIZE_VERTICALLY = 3,
        MINIMIZE = 4,
        NONE = 5,
        LOWER = 6,
        MENU = 7,
    }
    export namespace ToolbarIconSize {
        export const $gtype: GObject.GType<ToolbarIconSize>;
    }
    enum ToolbarIconSize {
        SMALL,
        LARGE = 1,
    }
    export namespace ToolbarStyle {
        export const $gtype: GObject.GType<ToolbarStyle>;
    }
    enum ToolbarStyle {
        BOTH,
        BOTH_HORIZ = 1,
        ICONS = 2,
        TEXT = 3,
    }
    export namespace TouchpadClickMethod {
        export const $gtype: GObject.GType<TouchpadClickMethod>;
    }
    enum TouchpadClickMethod {
        DEFAULT,
        NONE = 1,
        AREAS = 2,
        FINGERS = 3,
    }
    export namespace TouchpadHandedness {
        export const $gtype: GObject.GType<TouchpadHandedness>;
    }
    enum TouchpadHandedness {
        RIGHT,
        LEFT = 1,
        MOUSE = 2,
    }
    export namespace TouchpadTapButtonMap {
        export const $gtype: GObject.GType<TouchpadTapButtonMap>;
    }
    enum TouchpadTapButtonMap {
        DEFAULT,
        LRM = 1,
        LMR = 2,
    }
    export namespace UsbProtection {
        export const $gtype: GObject.GType<UsbProtection>;
    }
    enum UsbProtection {
        LOCKSCREEN,
        ALWAYS = 1,
    }
    export namespace VisualBellType {
        export const $gtype: GObject.GType<VisualBellType>;
    }
    enum VisualBellType {
        FULLSCREEN_FLASH,
        FRAME_FLASH = 1,
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
export default GDesktopEnums;
