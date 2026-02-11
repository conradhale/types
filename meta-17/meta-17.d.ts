/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import xlib from '@girs/xlib-2.0';
import xfixes from '@girs/xfixes-4.0';
import Mtk from '@girs/mtk-17';
import Graphene from '@girs/graphene-1.0';
import GObject from '@girs/gobject-2.0';
import GLib from '@girs/glib-2.0';
import Gio from '@girs/gio-2.0';
import GModule from '@girs/gmodule-2.0';
import GDesktopEnums from '@girs/gdesktopenums-3.0';
import Cogl from '@girs/cogl-17';
import GL from '@girs/gl-1.0';
import Clutter from '@girs/clutter-17';
import Pango from '@girs/pango-1.0';
import cairo from '@girs/cairo-1.0';
import HarfBuzz from '@girs/harfbuzz-0.0';
import freetype2 from '@girs/freetype2-2.0';
import Atk from '@girs/atk-1.0';
import '@girs/gjs';
import type classes from './meta-17-classes.d.ts';
export { classes as MetaClasses };
export namespace Meta {
    /**
     * Meta-17
     */
    /**
     * Function a window button can have.
     *
     * Note, you can't add stuff here without extending the theme format
     * to draw a new function and breaking all existing themes.
     */
    export namespace ButtonFunction {
        export const $gtype: GObject.GType<ButtonFunction>;
    }
    enum ButtonFunction {
        /**
         * Menu
         */
        MENU,
        /**
         * Minimize
         */
        MINIMIZE = 1,
        /**
         * Maximize
         */
        MAXIMIZE = 2,
        /**
         * Close
         */
        CLOSE = 3,
        /**
         * Marks the end of the #MetaButtonFunction enumeration
         */
        LAST = 4,
    }
    export namespace CloseDialogResponse {
        export const $gtype: GObject.GType<CloseDialogResponse>;
    }
    enum CloseDialogResponse {
        WAIT,
        FORCE_CLOSE = 1,
    }
    /**
     * Indicates the appropriate effect to show the user for
     * meta_compositor_show_window() and meta_compositor_hide_window()
     */
    export namespace CompEffect {
        export const $gtype: GObject.GType<CompEffect>;
    }
    enum CompEffect {
        /**
         * The window is newly created
         *   (also used for a window that was previously on a different
         *   workspace and is changed to become visible on the active
         *   workspace.)
         */
        CREATE,
        /**
         * The window should be shown
         *   as unminimizing from its icon geometry.
         */
        UNMINIMIZE = 1,
        /**
         * The window is being destroyed
         */
        DESTROY = 2,
        /**
         * The window should be shown
         *   as minimizing to its icon geometry.
         */
        MINIMIZE = 3,
        /**
         * No effect, the window should be
         *   shown or hidden immediately.
         */
        NONE = 4,
    }
    export namespace CompositorType {
        export const $gtype: GObject.GType<CompositorType>;
    }
    enum CompositorType {
        WAYLAND,
        'X11' = 1,
    }
    export namespace Cursor {
        export const $gtype: GObject.GType<Cursor>;
    }
    enum Cursor {
        /**
         * No cursor
         */
        INVALID,
        /**
         * No cursor
         */
        NONE = 1,
        /**
         * Default cursor
         */
        DEFAULT = 2,
        /**
         * Context menu cursor
         */
        CONTEXT_MENU = 3,
        /**
         * Help cursor
         */
        HELP = 4,
        /**
         * Pointer cursor
         */
        POINTER = 5,
        /**
         * Progress cursor
         */
        PROGRESS = 6,
        /**
         * Wait cursor
         */
        WAIT = 7,
        /**
         * Cell cursor
         */
        CELL = 8,
        /**
         * Crosshair cursor
         */
        CROSSHAIR = 9,
        /**
         * Text cursor
         */
        TEXT = 10,
        /**
         * Vertical text cursor
         */
        VERTICAL_TEXT = 11,
        /**
         * DnD alias cursor
         */
        ALIAS = 12,
        /**
         * DnD copy cursor
         */
        COPY = 13,
        /**
         * DnD move cursor
         */
        MOVE = 14,
        /**
         * DnD no drop cursor
         */
        NO_DROP = 15,
        /**
         * DnD not allowed cursor
         */
        NOT_ALLOWED = 16,
        /**
         * DnD grab cursor
         */
        GRAB = 17,
        /**
         * DnD grabbing cursor
         */
        GRABBING = 18,
        /**
         * Resize eastern edge cursor
         */
        E_RESIZE = 19,
        /**
         * Resize northern edge cursor
         */
        N_RESIZE = 20,
        /**
         * Resize north-eastern corner cursor
         */
        NE_RESIZE = 21,
        /**
         * Resize north-western corner cursor
         */
        NW_RESIZE = 22,
        /**
         * Resize southern edge cursor
         */
        S_RESIZE = 23,
        /**
         * Resize south-eastern corner cursor
         */
        SE_RESIZE = 24,
        /**
         * Resize south-western corner cursor
         */
        SW_RESIZE = 25,
        /**
         * Resize western edge cursor
         */
        W_RESIZE = 26,
        /**
         * Resize eastern and western edges cursor
         */
        EW_RESIZE = 27,
        /**
         * Resize northern and eastern edges cursor
         */
        NS_RESIZE = 28,
        /**
         * Resize north-east and south-west corners cursor
         */
        NESW_RESIZE = 29,
        /**
         * Resize north-west and south-east corners cursor
         */
        NWSE_RESIZE = 30,
        /**
         * Resize column cursor
         */
        COL_RESIZE = 31,
        /**
         * Resize row cursor
         */
        ROW_RESIZE = 32,
        /**
         * Scroll all directions cursor
         */
        ALL_SCROLL = 33,
        /**
         * Zoom in cursor
         */
        ZOOM_IN = 34,
        /**
         * Zoom out cursor
         */
        ZOOM_OUT = 35,
        /**
         * DnD ask cursor
         */
        DND_ASK = 36,
        /**
         * Resize all directions
         */
        ALL_RESIZE = 37,
    }
    export namespace DisplayCorner {
        export const $gtype: GObject.GType<DisplayCorner>;
    }
    enum DisplayCorner {
        /**
         * top-left corner
         */
        TOPLEFT,
        /**
         * top-right corner
         */
        TOPRIGHT = 1,
        /**
         * bottom-left corner
         */
        BOTTOMLEFT = 2,
        /**
         * bottom-right corner
         */
        BOTTOMRIGHT = 3,
    }
    export namespace DisplayDirection {
        export const $gtype: GObject.GType<DisplayDirection>;
    }
    enum DisplayDirection {
        /**
         * up
         */
        UP,
        /**
         * down
         */
        DOWN = 1,
        /**
         * left
         */
        LEFT = 2,
        /**
         * right
         */
        RIGHT = 3,
    }
    export namespace EdgeType {
        export const $gtype: GObject.GType<EdgeType>;
    }
    enum EdgeType {
        /**
         * Whether the edge belongs to a window
         */
        WINDOW,
        /**
         * Whether the edge belongs to a monitor
         */
        MONITOR = 1,
        /**
         * Whether the edge belongs to a screen
         */
        SCREEN = 2,
    }
    export namespace ExitCode {
        export const $gtype: GObject.GType<ExitCode>;
    }
    enum ExitCode {
        /**
         * Success
         */
        SUCCESS,
        /**
         * Error
         */
        ERROR = 1,
    }
    export namespace FrameType {
        export const $gtype: GObject.GType<FrameType>;
    }
    enum FrameType {
        /**
         * Normal frame
         */
        NORMAL,
        /**
         * Dialog frame
         */
        DIALOG = 1,
        /**
         * Modal dialog frame
         */
        MODAL_DIALOG = 2,
        /**
         * Utility frame
         */
        UTILITY = 3,
        /**
         * Menu frame
         */
        MENU = 4,
        /**
         * Border frame
         */
        BORDER = 5,
        /**
         * Attached frame
         */
        ATTACHED = 6,
        /**
         * Marks the end of the #MetaFrameType enumeration
         */
        LAST = 7,
    }
    export namespace GrabOp {
        export const $gtype: GObject.GType<GrabOp>;
    }
    enum GrabOp {
        /**
         * None
         */
        NONE,
        WINDOW_BASE = 1,
        /**
         * Moving with pointer
         */
        MOVING = 1,
        MOVING_UNCONSTRAINED = 1025,
        /**
         * Resizing NW with pointer
         */
        RESIZING_NW = 36865,
        /**
         * Resizing N with pointer
         */
        RESIZING_N = 32769,
        /**
         * Resizing NE with pointer
         */
        RESIZING_NE = 40961,
        /**
         * Resizing E with pointer
         */
        RESIZING_E = 8193,
        /**
         * Resizing SW with pointer
         */
        RESIZING_SW = 20481,
        /**
         * Resizing S with pointer
         */
        RESIZING_S = 16385,
        /**
         * Resizing SE with pointer
         */
        RESIZING_SE = 24577,
        /**
         * Resizing W with pointer
         */
        RESIZING_W = 4097,
        /**
         * Moving with keyboard
         */
        KEYBOARD_MOVING = 257,
        /**
         * Resizing with keyboard
         */
        KEYBOARD_RESIZING_UNKNOWN = 769,
        /**
         * Resizing NS with keyboard
         */
        KEYBOARD_RESIZING_NW = 37121,
        /**
         * Resizing N with keyboard
         */
        KEYBOARD_RESIZING_N = 33025,
        /**
         * Resizing NE with keyboard
         */
        KEYBOARD_RESIZING_NE = 41217,
        /**
         * Resizing E with keyboard
         */
        KEYBOARD_RESIZING_E = 8449,
        /**
         * Resizing SW with keyboard
         */
        KEYBOARD_RESIZING_SW = 20737,
        /**
         * Resizing S with keyboard
         */
        KEYBOARD_RESIZING_S = 16641,
        /**
         * Resizing SE with keyboard
         */
        KEYBOARD_RESIZING_SE = 24833,
        /**
         * Resizing W with keyboard
         */
        KEYBOARD_RESIZING_W = 4353,
    }
    export namespace Gravity {
        export const $gtype: GObject.GType<Gravity>;
    }
    enum Gravity {
        NONE,
        NORTH_WEST = 1,
        NORTH = 2,
        NORTH_EAST = 3,
        WEST = 4,
        CENTER = 5,
        EAST = 6,
        SOUTH_WEST = 7,
        SOUTH = 8,
        SOUTH_EAST = 9,
        STATIC = 10,
    }
    export namespace InhibitShortcutsDialogResponse {
        export const $gtype: GObject.GType<InhibitShortcutsDialogResponse>;
    }
    enum InhibitShortcutsDialogResponse {
        ALLOW,
        DENY = 1,
    }
    export namespace KeyBindingAction {
        export const $gtype: GObject.GType<KeyBindingAction>;
    }
    enum KeyBindingAction {
        /**
         * FILLME
         */
        NONE,
        /**
         * FILLME
         */
        'WORKSPACE_1' = 1,
        /**
         * FILLME
         */
        'WORKSPACE_2' = 2,
        /**
         * FILLME
         */
        'WORKSPACE_3' = 3,
        /**
         * FILLME
         */
        'WORKSPACE_4' = 4,
        /**
         * FILLME
         */
        'WORKSPACE_5' = 5,
        /**
         * FILLME
         */
        'WORKSPACE_6' = 6,
        /**
         * FILLME
         */
        'WORKSPACE_7' = 7,
        /**
         * FILLME
         */
        'WORKSPACE_8' = 8,
        /**
         * FILLME
         */
        'WORKSPACE_9' = 9,
        /**
         * FILLME
         */
        'WORKSPACE_10' = 10,
        /**
         * FILLME
         */
        'WORKSPACE_11' = 11,
        /**
         * FILLME
         */
        'WORKSPACE_12' = 12,
        /**
         * FILLME
         */
        WORKSPACE_LEFT = 13,
        /**
         * FILLME
         */
        WORKSPACE_RIGHT = 14,
        /**
         * FILLME
         */
        WORKSPACE_UP = 15,
        /**
         * FILLME
         */
        WORKSPACE_DOWN = 16,
        /**
         * FILLME
         */
        WORKSPACE_LAST = 17,
        /**
         * FILLME
         */
        SWITCH_APPLICATIONS = 18,
        /**
         * FILLME
         */
        SWITCH_APPLICATIONS_BACKWARD = 19,
        /**
         * FILLME
         */
        SWITCH_GROUP = 20,
        /**
         * FILLME
         */
        SWITCH_GROUP_BACKWARD = 21,
        /**
         * FILLME
         */
        SWITCH_WINDOWS = 22,
        /**
         * FILLME
         */
        SWITCH_WINDOWS_BACKWARD = 23,
        /**
         * FILLME
         */
        SWITCH_PANELS = 24,
        /**
         * FILLME
         */
        SWITCH_PANELS_BACKWARD = 25,
        /**
         * FILLME
         */
        CYCLE_GROUP = 26,
        /**
         * FILLME
         */
        CYCLE_GROUP_BACKWARD = 27,
        /**
         * FILLME
         */
        CYCLE_WINDOWS = 28,
        /**
         * FILLME
         */
        CYCLE_WINDOWS_BACKWARD = 29,
        /**
         * FILLME
         */
        CYCLE_PANELS = 30,
        /**
         * FILLME
         */
        CYCLE_PANELS_BACKWARD = 31,
        /**
         * FILLME
         */
        SHOW_DESKTOP = 32,
        /**
         * FILLME
         */
        PANEL_RUN_DIALOG = 33,
        /**
         * FILLME
         */
        TOGGLE_RECORDING = 34,
        /**
         * FILLME
         */
        SET_SPEW_MARK = 35,
        /**
         * FILLME
         */
        ACTIVATE_WINDOW_MENU = 36,
        /**
         * FILLME
         */
        TOGGLE_FULLSCREEN = 37,
        /**
         * FILLME
         */
        TOGGLE_MAXIMIZED = 38,
        /**
         * FILLME
         */
        TOGGLE_TILED_LEFT = 39,
        /**
         * FILLME
         */
        TOGGLE_TILED_RIGHT = 40,
        /**
         * FILLME
         */
        TOGGLE_ABOVE = 41,
        /**
         * FILLME
         */
        MAXIMIZE = 42,
        /**
         * FILLME
         */
        UNMAXIMIZE = 43,
        /**
         * FILLME
         */
        TOGGLE_SHADED = 44,
        /**
         * FILLME
         */
        MINIMIZE = 45,
        /**
         * FILLME
         */
        CLOSE = 46,
        /**
         * FILLME
         */
        BEGIN_MOVE = 47,
        /**
         * FILLME
         */
        BEGIN_RESIZE = 48,
        /**
         * FILLME
         */
        TOGGLE_ON_ALL_WORKSPACES = 49,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_1' = 50,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_2' = 51,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_3' = 52,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_4' = 53,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_5' = 54,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_6' = 55,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_7' = 56,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_8' = 57,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_9' = 58,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_10' = 59,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_11' = 60,
        /**
         * FILLME
         */
        'MOVE_TO_WORKSPACE_12' = 61,
        /**
         * FILLME
         */
        MOVE_TO_WORKSPACE_LEFT = 62,
        /**
         * FILLME
         */
        MOVE_TO_WORKSPACE_RIGHT = 63,
        /**
         * FILLME
         */
        MOVE_TO_WORKSPACE_UP = 64,
        /**
         * FILLME
         */
        MOVE_TO_WORKSPACE_DOWN = 65,
        /**
         * FILLME
         */
        MOVE_TO_WORKSPACE_LAST = 66,
        /**
         * FILLME
         */
        MOVE_TO_MONITOR_LEFT = 67,
        /**
         * FILLME
         */
        MOVE_TO_MONITOR_RIGHT = 68,
        /**
         * FILLME
         */
        MOVE_TO_MONITOR_UP = 69,
        /**
         * FILLME
         */
        MOVE_TO_MONITOR_DOWN = 70,
        /**
         * FILLME
         */
        RAISE_OR_LOWER = 71,
        /**
         * FILLME
         */
        RAISE = 72,
        /**
         * FILLME
         */
        LOWER = 73,
        /**
         * FILLME
         */
        MAXIMIZE_VERTICALLY = 74,
        /**
         * FILLME
         */
        MAXIMIZE_HORIZONTALLY = 75,
        /**
         * FILLME
         */
        MOVE_TO_CORNER_NW = 76,
        /**
         * FILLME
         */
        MOVE_TO_CORNER_NE = 77,
        /**
         * FILLME
         */
        MOVE_TO_CORNER_SW = 78,
        /**
         * FILLME
         */
        MOVE_TO_CORNER_SE = 79,
        /**
         * FILLME
         */
        MOVE_TO_SIDE_N = 80,
        /**
         * FILLME
         */
        MOVE_TO_SIDE_S = 81,
        /**
         * FILLME
         */
        MOVE_TO_SIDE_E = 82,
        /**
         * FILLME
         */
        MOVE_TO_SIDE_W = 83,
        /**
         * FILLME
         */
        MOVE_TO_CENTER = 84,
        /**
         * FILLME
         */
        OVERLAY_KEY = 85,
        /**
         * FILLME
         */
        LOCATE_POINTER_KEY = 86,
        ISO_NEXT_GROUP = 87,
        /**
         * FILLME
         */
        ALWAYS_ON_TOP = 88,
        SWITCH_MONITOR = 89,
        ROTATE_MONITOR = 90,
        /**
         * FILLME
         */
        LAST = 91,
    }
    export namespace LaterType {
        export const $gtype: GObject.GType<LaterType>;
    }
    enum LaterType {
        /**
         * call in a resize processing phase that is done
         *   before GTK+ repainting (including window borders) is done.
         */
        RESIZE,
        /**
         * used by Mutter to compute which windows should be mapped
         */
        CALC_SHOWING = 1,
        /**
         * used by Mutter to see if there's a fullscreen window
         */
        CHECK_FULLSCREEN = 2,
        /**
         * used by Mutter to send it's idea of the stacking order to the server
         */
        SYNC_STACK = 3,
        /**
         * call before the stage is redrawn
         */
        BEFORE_REDRAW = 4,
        /**
         * call at a very low priority (can be blocked
         *    by running animations or redrawing applications)
         */
        IDLE = 5,
    }
    export namespace MonitorSwitchConfigType {
        export const $gtype: GObject.GType<MonitorSwitchConfigType>;
    }
    enum MonitorSwitchConfigType {
        ALL_MIRROR,
        ALL_LINEAR = 1,
        EXTERNAL = 2,
        BUILTIN = 3,
        UNKNOWN = 4,
    }
    export namespace MotionDirection {
        export const $gtype: GObject.GType<MotionDirection>;
    }
    enum MotionDirection {
        /**
         * Upwards motion
         */
        UP = -1,
        /**
         * Downwards motion
         */
        DOWN = -2,
        /**
         * Motion to the left
         */
        LEFT = -3,
        /**
         * Motion to the right
         */
        RIGHT = -4,
        /**
         * Motion up and to the left
         */
        UP_LEFT = -5,
        /**
         * Motion up and to the right
         */
        UP_RIGHT = -6,
        /**
         * Motion down and to the left
         */
        DOWN_LEFT = -7,
        /**
         * Motion down and to the right
         */
        DOWN_RIGHT = -8,
    }
    export namespace MultiTextureAlphaMode {
        export const $gtype: GObject.GType<MultiTextureAlphaMode>;
    }
    enum MultiTextureAlphaMode {
        META_MULTI_TEXTURE_ALPHA_MODE_NONE,
        META_MULTI_TEXTURE_ALPHA_MODE_PREMULT_ELECTRICAL = 1,
        META_MULTI_TEXTURE_ALPHA_MODE_STRAIGHT = 2,
        N_META_MULTI_TEXTURE_ALPHA_MODES = 3,
    }
    export namespace MultiTextureChromaLoc {
        export const $gtype: GObject.GType<MultiTextureChromaLoc>;
    }
    enum MultiTextureChromaLoc {
        NONE,
        DEFINED = 1,
    }
    export namespace MultiTextureCoefficients {
        export const $gtype: GObject.GType<MultiTextureCoefficients>;
    }
    enum MultiTextureCoefficients {
        META_MULTI_TEXTURE_COEFFICIENTS_NONE,
        META_MULTI_TEXTURE_COEFFICIENTS_IDENTITY_FULL = 1,
        META_MULTI_TEXTURE_COEFFICIENTS_IDENTITY_LIMITED = 2,
        'META_MULTI_TEXTURE_COEFFICIENTS_BT709_FULL' = 3,
        'META_MULTI_TEXTURE_COEFFICIENTS_BT709_LIMITED' = 4,
        'META_MULTI_TEXTURE_COEFFICIENTS_BT601_FULL' = 5,
        'META_MULTI_TEXTURE_COEFFICIENTS_BT601_LIMITED' = 6,
        'META_MULTI_TEXTURE_COEFFICIENTS_BT2020_FULL' = 7,
        'META_MULTI_TEXTURE_COEFFICIENTS_BT2020_LIMITED' = 8,
        N_META_MULTI_TEXTURE_COEFFICIENTS = 9,
    }
    /**
     * A representation for complex pixel formats
     *
     * Some pixel formats that are used in the wild are a bit more complex than
     * just ARGB and all its variants. For example: a component might be put in a
     * different plane (i.e. at a different place in memory). Another example are
     * formats that use Y, U, and V components rather than RGB; if we composite them
     * onto an RGBA framebuffer, we have to make sure for example that these get
     * converted to the right color format first (using e.g. a shader).
     */
    export namespace MultiTextureFormat {
        export const $gtype: GObject.GType<MultiTextureFormat>;
    }
    enum MultiTextureFormat {
        /**
         * Invalid value
         */
        META_MULTI_TEXTURE_FORMAT_INVALID,
        /**
         * Any format supported by Cogl (see #CoglPixelFormat)
         */
        META_MULTI_TEXTURE_FORMAT_SIMPLE = 1,
        /**
         * YUYV, 32 bits, 16 bpc (Y), 8 bpc (U & V)
         */
        META_MULTI_TEXTURE_FORMAT_YUYV = 2,
        META_MULTI_TEXTURE_FORMAT_YVYU = 3,
        META_MULTI_TEXTURE_FORMAT_UYVY = 4,
        META_MULTI_TEXTURE_FORMAT_VYUY = 5,
        /**
         * 2 planes: 1 Y-plane, 1 UV-plane (2x2 subsampled)
         */
        'META_MULTI_TEXTURE_FORMAT_NV12' = 6,
        'META_MULTI_TEXTURE_FORMAT_NV21' = 7,
        'META_MULTI_TEXTURE_FORMAT_NV16' = 8,
        'META_MULTI_TEXTURE_FORMAT_NV61' = 9,
        'META_MULTI_TEXTURE_FORMAT_NV24' = 10,
        'META_MULTI_TEXTURE_FORMAT_NV42' = 11,
        'META_MULTI_TEXTURE_FORMAT_P010' = 12,
        'META_MULTI_TEXTURE_FORMAT_P012' = 13,
        'META_MULTI_TEXTURE_FORMAT_P016' = 14,
        /**
         * 3 planes: 1 Y-plane, 1 U-plane (2x2 subsampled), 1 V-plane (2x2 subsampled)
         */
        'META_MULTI_TEXTURE_FORMAT_YUV420' = 15,
        'META_MULTI_TEXTURE_FORMAT_YVU420' = 16,
        'META_MULTI_TEXTURE_FORMAT_YUV422' = 17,
        'META_MULTI_TEXTURE_FORMAT_YVU422' = 18,
        'META_MULTI_TEXTURE_FORMAT_YUV444' = 19,
        'META_MULTI_TEXTURE_FORMAT_YVU444' = 20,
        'META_MULTI_TEXTURE_FORMAT_S010' = 21,
        'META_MULTI_TEXTURE_FORMAT_S210' = 22,
        'META_MULTI_TEXTURE_FORMAT_S410' = 23,
        'META_MULTI_TEXTURE_FORMAT_S012' = 24,
        'META_MULTI_TEXTURE_FORMAT_S212' = 25,
        'META_MULTI_TEXTURE_FORMAT_S412' = 26,
        'META_MULTI_TEXTURE_FORMAT_S016' = 27,
        'META_MULTI_TEXTURE_FORMAT_S216' = 28,
        'META_MULTI_TEXTURE_FORMAT_S416' = 29,
        N_META_MULTI_TEXTURE_FORMATS = 30,
    }
    export namespace Orientation {
        export const $gtype: GObject.GType<Orientation>;
    }
    enum Orientation {
        UNDEFINED,
        NORMAL = 1,
        BOTTOM_UP = 2,
        LEFT_UP = 3,
        RIGHT_UP = 4,
    }
    export namespace PadDirection {
        export const $gtype: GObject.GType<PadDirection>;
    }
    enum PadDirection {
        UP = 1,
        DOWN = 2,
        CW = 3,
        CCW = 4,
    }
    export namespace PadFeatureType {
        export const $gtype: GObject.GType<PadFeatureType>;
    }
    enum PadFeatureType {
        RING,
        STRIP = 1,
        DIAL = 2,
    }
    export namespace PowerSaveChangeReason {
        export const $gtype: GObject.GType<PowerSaveChangeReason>;
    }
    enum PowerSaveChangeReason {
        MODE_CHANGE,
        HOTPLUG = 1,
    }
    export namespace Preference {
        export const $gtype: GObject.GType<Preference>;
    }
    enum Preference {
        /**
         * mouse button modifiers
         */
        MOUSE_BUTTON_MODS,
        /**
         * focus mode
         */
        FOCUS_MODE = 1,
        /**
         * focus new windows
         */
        FOCUS_NEW_WINDOWS = 2,
        /**
         * attach modal dialogs
         */
        ATTACH_MODAL_DIALOGS = 3,
        /**
         * raise on click
         */
        RAISE_ON_CLICK = 4,
        /**
         * action double click titlebar
         */
        ACTION_DOUBLE_CLICK_TITLEBAR = 5,
        /**
         * action middle click titlebar
         */
        ACTION_MIDDLE_CLICK_TITLEBAR = 6,
        /**
         * action right click titlebar
         */
        ACTION_RIGHT_CLICK_TITLEBAR = 7,
        /**
         * auto-raise
         */
        AUTO_RAISE = 8,
        /**
         * auto-raise delay
         */
        AUTO_RAISE_DELAY = 9,
        /**
         * focus change on pointer rest
         */
        FOCUS_CHANGE_ON_POINTER_REST = 10,
        /**
         * number of workspaces
         */
        NUM_WORKSPACES = 11,
        /**
         * dynamic workspaces
         */
        DYNAMIC_WORKSPACES = 12,
        /**
         * keybindings
         */
        KEYBINDINGS = 13,
        /**
         * disable workarounds
         */
        DISABLE_WORKAROUNDS = 14,
        /**
         * button layout
         */
        BUTTON_LAYOUT = 15,
        /**
         * workspace names
         */
        WORKSPACE_NAMES = 16,
        /**
         * visual bell
         */
        VISUAL_BELL = 17,
        /**
         * audible bell
         */
        AUDIBLE_BELL = 18,
        /**
         * visual bell type
         */
        VISUAL_BELL_TYPE = 19,
        /**
         * GNOME accessibility
         */
        GNOME_ACCESSIBILITY = 20,
        /**
         * GNOME animations
         */
        GNOME_ANIMATIONS = 21,
        /**
         * cursor theme
         */
        CURSOR_THEME = 22,
        /**
         * cursor size
         */
        CURSOR_SIZE = 23,
        /**
         * resize with right button
         */
        RESIZE_WITH_RIGHT_BUTTON = 24,
        /**
         * edge tiling
         */
        EDGE_TILING = 25,
        /**
         * force fullscreen
         */
        FORCE_FULLSCREEN = 26,
        /**
         * workspaces only on primary
         */
        WORKSPACES_ONLY_ON_PRIMARY = 27,
        /**
         * draggable border width
         */
        DRAGGABLE_BORDER_WIDTH = 28,
        /**
         * auto-maximize
         */
        AUTO_MAXIMIZE = 29,
        /**
         * center new windows
         */
        CENTER_NEW_WINDOWS = 30,
        /**
         * drag threshold
         */
        DRAG_THRESHOLD = 31,
        /**
         * show pointer location
         */
        LOCATE_POINTER = 32,
        CHECK_ALIVE_TIMEOUT = 33,
    }
    export namespace SelectionType {
        export const $gtype: GObject.GType<SelectionType>;
    }
    enum SelectionType {
        SELECTION_PRIMARY,
        SELECTION_CLIPBOARD = 1,
        SELECTION_DND = 2,
        N_SELECTION_TYPES = 3,
    }
    export namespace Side {
        export const $gtype: GObject.GType<Side>;
    }
    enum Side {
        /**
         * Left side
         */
        LEFT = 1,
        /**
         * Right side
         */
        RIGHT = 2,
        /**
         * Top side
         */
        TOP = 4,
        /**
         * Bottom side
         */
        BOTTOM = 8,
    }
    export namespace SizeChange {
        export const $gtype: GObject.GType<SizeChange>;
    }
    enum SizeChange {
        MAXIMIZE,
        UNMAXIMIZE = 1,
        FULLSCREEN = 2,
        UNFULLSCREEN = 3,
        MONITOR_MOVE = 4,
    }
    /**
     * Layers a window can be in.
     * These MUST be in the order of stacking.
     */
    export namespace StackLayer {
        export const $gtype: GObject.GType<StackLayer>;
    }
    enum StackLayer {
        /**
         * Desktop layer
         */
        DESKTOP,
        /**
         * Bottom layer
         */
        BOTTOM = 1,
        /**
         * Normal layer
         */
        NORMAL = 2,
        /**
         * Top layer
         */
        TOP = 4,
        /**
         * Dock layer
         */
        DOCK = 4,
        /**
         * Override-redirect layer
         */
        OVERRIDE_REDIRECT = 7,
        /**
         * Marks the end of the #MetaStackLayer enumeration
         */
        LAST = 8,
    }
    export namespace TabList {
        export const $gtype: GObject.GType<TabList>;
    }
    enum TabList {
        /**
         * Normal windows
         */
        NORMAL,
        /**
         * Dock windows
         */
        DOCKS = 1,
        /**
         * Groups
         */
        GROUP = 2,
        /**
         * All windows
         */
        NORMAL_ALL = 3,
        /**
         * All windows in pure MRU order
         */
        NORMAL_ALL_MRU = 4,
    }
    export namespace TabShowType {
        export const $gtype: GObject.GType<TabShowType>;
    }
    enum TabShowType {
        /**
         * Show icon (Alt-Tab mode)
         */
        ICON,
        /**
         * Show instantly (Alt-Esc mode)
         */
        INSTANTLY = 1,
    }
    export namespace WindowClientType {
        export const $gtype: GObject.GType<WindowClientType>;
    }
    enum WindowClientType {
        /**
         * A Wayland based window
         */
        WAYLAND,
        /**
         * An X11 based window
         */
        'X11' = 1,
    }
    /**
     * Menu the compositor should display for a given window
     */
    export namespace WindowMenuType {
        export const $gtype: GObject.GType<WindowMenuType>;
    }
    enum WindowMenuType {
        /**
         * the window manager menu
         */
        WM,
        /**
         * the (fallback) app menu
         */
        APP = 1,
    }
    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }
    enum WindowType {
        /**
         * Normal
         */
        NORMAL,
        /**
         * Desktop
         */
        DESKTOP = 1,
        /**
         * Dock
         */
        DOCK = 2,
        /**
         * Dialog
         */
        DIALOG = 3,
        /**
         * Modal dialog
         */
        MODAL_DIALOG = 4,
        /**
         * Toolbar
         */
        TOOLBAR = 5,
        /**
         * Menu
         */
        MENU = 6,
        /**
         * Utility
         */
        UTILITY = 7,
        /**
         * Splashcreen
         */
        SPLASHSCREEN = 8,
        /**
         * Dropdown menu
         */
        DROPDOWN_MENU = 9,
        /**
         * Popup menu
         */
        POPUP_MENU = 10,
        /**
         * Tooltip
         */
        TOOLTIP = 11,
        /**
         * Notification
         */
        NOTIFICATION = 12,
        /**
         * Combobox
         */
        COMBO = 13,
        /**
         * Drag and drop
         */
        DND = 14,
        /**
         * Other override-redirect window type
         */
        OVERRIDE_OTHER = 15,
    }
    const CURRENT_TIME: number;
    const N_ORIENTATIONS: number;
    const PRIORITY_BEFORE_REDRAW: number;
    const PRIORITY_PREFS_NOTIFY: number;
    const PRIORITY_REDRAW: number;
    const PRIORITY_RESIZE: number;
    const VIRTUAL_CORE_KEYBOARD_ID: number;
    const VIRTUAL_CORE_POINTER_ID: number;
    /**
     * Convert an accelerator keyval and modifier mask into a string parsable by `meta_parse_accelerator`.
     *
     * @returns The accelerator name.
     * @param accelerator_mods Accelerator modifier mask.
     * @param accelerator_key Accelerator keyval.
     */
    function accelerator_name(accelerator_mods: Clutter.ModifierType | null, accelerator_key: number): string;
    function add_debug_paint_flag(flag: DebugPaintFlag | null): void;
    /**
     * Ensure log messages for the given topic `topic`
     * will be printed.
     *
     * @param topic Topic for which logging will be started
     */
    function add_verbose_topic(topic: DebugTopic | null): void;
    /**
     * Create a context.
     *
     * @returns A new context instance.
     * @param name Human readable name of display server or window manager
     */
    function create_context(name: string): Context;
    function exit(code: ExitCode | null): void;
    function external_binding_name_for_action(keybinding_action: number): string;
    /**
     * Converts a frame type enum value to the name string that would
     * appear in the theme definition file.
     *
     * @returns the string value
     * @param type a #MetaFrameType
     */
    function frame_type_to_string(type: FrameType | null): string;
    function g_utf8_strndup(src: string, n: number): string;
    function get_debug_paint_flags(): DebugPaintFlag;
    function gravity_to_string(gravity: Gravity | null): string;
    /**
     * Returns %TRUE if this instance of Mutter comes from Mutter
     * restarting itself (for example to enable/disable stereo.)
     *
     * See [func`Meta`.restart]. If this is the case, any startup visuals
     * or animations should be suppressed.
     */
    function is_restart(): boolean;
    function is_topic_enabled(topic: DebugTopic | null): boolean;
    function is_verbose(): boolean;
    function is_wayland_compositor(): boolean;
    /**
     * Allows users to register a custom handler for a
     * builtin key binding.
     *
     * @returns %TRUE if the binding known as `name` was found,
     * %FALSE otherwise.
     * @param name The name of the keybinding to set
     * @param handler The new handler function
     */
    function keybindings_set_custom_handler(name: string, handler?: KeyHandlerFunc | null): boolean;
    function orientation_to_transform(orientation: Orientation | null): Mtk.MonitorTransform;
    function pop_no_msg_prefix(): void;
    function preference_to_string(pref: Preference | null): string;
    function prefs_bell_is_audible(): boolean;
    function prefs_change_workspace_name(i: number, name: string): void;
    function prefs_get_action_double_click_titlebar(): GDesktopEnums.TitlebarAction;
    function prefs_get_action_middle_click_titlebar(): GDesktopEnums.TitlebarAction;
    function prefs_get_action_right_click_titlebar(): GDesktopEnums.TitlebarAction;
    function prefs_get_attach_modal_dialogs(): boolean;
    function prefs_get_auto_maximize(): boolean;
    function prefs_get_auto_raise(): boolean;
    function prefs_get_auto_raise_delay(): number;
    function prefs_get_button_layout(): [ButtonLayout];
    function prefs_get_center_new_windows(): boolean;
    function prefs_get_check_alive_timeout(): number;
    function prefs_get_compositing_manager(): boolean;
    function prefs_get_cursor_size(): number;
    function prefs_get_cursor_theme(): string;
    function prefs_get_disable_workarounds(): boolean;
    function prefs_get_drag_threshold(): number;
    function prefs_get_draggable_border_width(): number;
    function prefs_get_dynamic_workspaces(): boolean;
    function prefs_get_edge_tiling(): boolean;
    function prefs_get_focus_change_on_pointer_rest(): boolean;
    function prefs_get_focus_mode(): GDesktopEnums.FocusMode;
    function prefs_get_focus_new_windows(): GDesktopEnums.FocusNewWindows;
    function prefs_get_force_fullscreen(): boolean;
    function prefs_get_gnome_accessibility(): boolean;
    function prefs_get_gnome_animations(): boolean;
    function prefs_get_keybinding_action(name: string): KeyBindingAction;
    function prefs_get_keybinding_label(name: string): string | null;
    function prefs_get_mouse_button_menu(): number;
    function prefs_get_mouse_button_mods(): Clutter.ModifierType;
    function prefs_get_mouse_button_resize(): number;
    function prefs_get_num_workspaces(): number;
    function prefs_get_raise_on_click(): boolean;
    function prefs_get_show_fallback_app_menu(): boolean;
    function prefs_get_visual_bell(): boolean;
    function prefs_get_visual_bell_type(): GDesktopEnums.VisualBellType;
    function prefs_get_workspace_name(i: number): string;
    function prefs_get_workspaces_only_on_primary(): boolean;
    function prefs_set_force_fullscreen(whether: boolean): void;
    function prefs_set_num_workspaces(n_workspaces: number): void;
    function prefs_set_show_fallback_app_menu(whether: boolean): void;
    function push_no_msg_prefix(): void;
    function read_bytes(fd: number, offset: number, length: number): globalThis.Promise<boolean>;
    function read_bytes(
        fd: number,
        offset: number,
        length: number,
        callback: Gio.AsyncReadyCallback<number> | null,
    ): void;
    function read_bytes(
        fd: number,
        offset: number,
        length: number,
        callback?: Gio.AsyncReadyCallback<number> | null,
    ): globalThis.Promise<boolean> | void;
    function read_bytes_finish(result: Gio.AsyncResult, bytes: number, length: number): boolean;
    function remove_debug_paint_flag(flag: DebugPaintFlag | null): void;
    /**
     * Stop printing log messages for the given topic `topic`.
     *
     * Note that this method does not stack with [func`Meta`.add_verbose_topic];
     * i.e. if two calls to [func`Meta`.add_verbose_topic] for the same
     * topic are made, one call to [func`Meta`.remove_verbose_topic]  will
     * remove it.
     *
     * @param topic Topic for which logging will be stopped
     */
    function remove_verbose_topic(topic: DebugTopic | null): void;
    /**
     * Starts the process of restarting the compositor.
     *
     * Note that Mutter's involvement here is to make the restart
     * visually smooth for the user - it cannot itself safely
     * reexec a program that embeds libmuttter.
     *
     * So in order for this to work, the compositor must handle two
     * signals
     *
     * - [signal`Meta`.Display::show-restart-message], to display the
     * message passed here on the Clutter stage
     * - [signal`Meta`.Display::restart] to actually reexec the compositor.
     *
     * @param message message to display to the user, or %NULL
     * @param context a #MetaContext
     */
    function restart(message: string | null, context: Context): void;
    function topic_to_string(topic: DebugTopic | null): string;
    function unsigned_long_equal(_v1?: any | null, _v2?: any | null): number;
    function unsigned_long_hash(v?: any | null): number;
    interface IdleMonitorWatchFunc {
        (monitor: IdleMonitor, watch_id: number): void;
    }
    interface KeyHandlerFunc {
        (display: Display, window: Window, event: Clutter.Event, binding: KeyBinding): void;
    }
    interface PrefsChangedFunc {
        (pref: Preference): void;
    }
    interface WindowForeachFunc {
        (window: Window): boolean;
    }
    export namespace BackendCapabilities {
        export const $gtype: GObject.GType<BackendCapabilities>;
    }
    enum BackendCapabilities {
        NONE,
        BARRIERS = 1,
    }
    export namespace BarrierDirection {
        export const $gtype: GObject.GType<BarrierDirection>;
    }
    enum BarrierDirection {
        /**
         * Positive direction in the X axis
         */
        POSITIVE_X = 1,
        /**
         * Positive direction in the Y axis
         */
        POSITIVE_Y = 2,
        /**
         * Negative direction in the X axis
         */
        NEGATIVE_X = 4,
        /**
         * Negative direction in the Y axis
         */
        NEGATIVE_Y = 8,
    }
    export namespace BarrierFlags {
        export const $gtype: GObject.GType<BarrierFlags>;
    }
    enum BarrierFlags {
        NONE = 1,
        STICKY = 2,
    }
    export namespace DebugPaintFlag {
        export const $gtype: GObject.GType<DebugPaintFlag>;
    }
    enum DebugPaintFlag {
        /**
         * default
         */
        NONE,
        /**
         * paint opaque regions
         */
        OPAQUE_REGION = 1,
        /**
         * make cursor updates await compositing
         *   frames
         */
        SYNC_CURSOR_PRIMARY = 2,
        /**
         * always composite frames
         */
        DISABLE_DIRECT_SCANOUT = 4,
        IGNORE_COLOR_STATE_FOR_DIRECT_SCANOUT = 8,
    }
    export namespace DebugTopic {
        export const $gtype: GObject.GType<DebugTopic>;
    }
    enum DebugTopic {
        /**
         * verbose logging
         */
        VERBOSE = -1,
        /**
         * focus
         */
        FOCUS = 1,
        /**
         * workarea
         */
        WORKAREA = 2,
        /**
         * stack
         */
        STACK = 4,
        /**
         * session management
         */
        SM = 8,
        /**
         * events
         */
        EVENTS = 16,
        /**
         * window state
         */
        WINDOW_STATE = 32,
        /**
         * window operations
         */
        WINDOW_OPS = 64,
        /**
         * geometry
         */
        GEOMETRY = 128,
        /**
         * window placement
         */
        PLACEMENT = 256,
        /**
         * display
         */
        DISPLAY = 512,
        /**
         * keybindings
         */
        KEYBINDINGS = 1024,
        /**
         * sync
         */
        SYNC = 2048,
        /**
         * startup
         */
        STARTUP = 4096,
        /**
         * preferences
         */
        PREFS = 8192,
        /**
         * edge resistance
         */
        EDGE_RESISTANCE = 16384,
        DBUS = 32768,
        INPUT = 65536,
        /**
         * Wayland
         */
        WAYLAND = 131072,
        /**
         * kernel mode setting
         */
        KMS = 262144,
        /**
         * screencasting
         */
        SCREEN_CAST = 524288,
        /**
         * remote desktop
         */
        REMOTE_DESKTOP = 1048576,
        /**
         * backend
         */
        BACKEND = 2097152,
        /**
         * native backend rendering
         */
        RENDER = 4194304,
        /**
         * color management
         */
        COLOR = 8388608,
        /**
         * input events
         */
        INPUT_EVENTS = 16777216,
        /**
         * eis state
         */
        EIS = 33554432,
        /**
         * KMS deadline timers
         */
        KMS_DEADLINE = 67108864,
        /**
         * session management
         */
        SESSION_MANAGEMENT = 134217728,
        /**
         * X11 window management
         */
        'X11' = 268435456,
        WORKSPACES = 536870912,
    }
    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }
    enum Direction {
        /**
         * Left
         */
        LEFT = 1,
        /**
         * Right
         */
        RIGHT = 2,
        /**
         * Top
         */
        TOP = 4,
        /**
         * Bottom
         */
        BOTTOM = 8,
        /**
         * Up
         */
        UP = 4,
        /**
         * Down
         */
        DOWN = 8,
        /**
         * Horizontal
         */
        HORIZONTAL = 3,
        /**
         * Vertical
         */
        VERTICAL = 12,
    }
    export namespace KeyBindingFlags {
        export const $gtype: GObject.GType<KeyBindingFlags>;
    }
    enum KeyBindingFlags {
        /**
         * none
         */
        NONE,
        /**
         * per-window
         */
        PER_WINDOW = 1,
        /**
         * built-in
         */
        BUILTIN = 2,
        /**
         * is reversed
         */
        IS_REVERSED = 4,
        /**
         * always active
         */
        NON_MASKABLE = 8,
        /**
         * ignore autorepeat
         */
        IGNORE_AUTOREPEAT = 16,
        /**
         * not grabbed automatically
         */
        NO_AUTO_GRAB = 32,
        /**
         * uses a custom keybinding action
         */
        CUSTOM_TRIGGER = 64,
        /**
         * notifies on release in addition to press
         */
        TRIGGER_RELEASE = 128,
    }
    /**
     * Keyboard accessibility features.
     */
    export namespace KeyboardA11yFlags {
        export const $gtype: GObject.GType<KeyboardA11yFlags>;
    }
    enum KeyboardA11yFlags {
        KEYBOARD_ENABLED = 1,
        TIMEOUT_ENABLED = 2,
        MOUSE_KEYS_ENABLED = 4,
        SLOW_KEYS_ENABLED = 8,
        SLOW_KEYS_BEEP_PRESS = 16,
        SLOW_KEYS_BEEP_ACCEPT = 32,
        SLOW_KEYS_BEEP_REJECT = 64,
        BOUNCE_KEYS_ENABLED = 128,
        BOUNCE_KEYS_BEEP_REJECT = 256,
        TOGGLE_KEYS_ENABLED = 512,
        STICKY_KEYS_ENABLED = 1024,
        STICKY_KEYS_TWO_KEY_OFF = 2048,
        STICKY_KEYS_BEEP = 4096,
        FEATURE_STATE_CHANGE_BEEP = 8192,
    }
    export namespace MaximizeFlags {
        export const $gtype: GObject.GType<MaximizeFlags>;
    }
    enum MaximizeFlags {
        /**
         * Horizontal
         */
        HORIZONTAL = 1,
        /**
         * Vertical
         */
        VERTICAL = 2,
        /**
         * Both
         */
        BOTH = 3,
    }
    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'gpu-added'(arg0: any | null): void;
            'keymap-changed'(): void;
            'keymap-layout-group-changed'(arg0: number): void;
            'last-device-changed'(arg0: Clutter.InputDevice): void;
            'lid-is-closed-changed'(arg0: boolean): void;
            'prepare-shutdown'(): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            capabilities: BackendCapabilities;
            context: Context;
        }
    }
    type Backend = (typeof classes.Backend)['prototype'];
    const Backend: typeof classes.Backend &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Backend.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Backend.SignalSignatures> & classes.Backend);
    namespace Background {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed(): void;
            'notify::meta-display'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            meta_display: Display;
            metaDisplay: Display;
        }
    }
    type Background = (typeof classes.Background)['prototype'];
    const Background: typeof classes.Background &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Background.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Background.SignalSignatures> & classes.Background);
    namespace BackgroundActor {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'notify::meta-display'(pspec: GObject.ParamSpec): void;
            'notify::monitor'(pspec: GObject.ParamSpec): void;
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
            extends Clutter.Actor.ConstructorProps<Clutter.LayoutManager, BackgroundContent>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            meta_display: Display;
            metaDisplay: Display;
            monitor: number;
        }
    }
    type BackgroundActor = (typeof classes.BackgroundActor)['prototype'];
    const BackgroundActor: typeof classes.BackgroundActor &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.BackgroundActor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BackgroundActor.SignalSignatures> & classes.BackgroundActor);
    namespace BackgroundContent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::background'(pspec: GObject.ParamSpec): void;
            'notify::brightness'(pspec: GObject.ParamSpec): void;
            'notify::gradient'(pspec: GObject.ParamSpec): void;
            'notify::gradient-height'(pspec: GObject.ParamSpec): void;
            'notify::gradient-max-darkness'(pspec: GObject.ParamSpec): void;
            'notify::meta-display'(pspec: GObject.ParamSpec): void;
            'notify::monitor'(pspec: GObject.ParamSpec): void;
            'notify::rounded-clip-radius'(pspec: GObject.ParamSpec): void;
            'notify::vignette'(pspec: GObject.ParamSpec): void;
            'notify::vignette-sharpness'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Clutter.Content.ConstructorProps {
            background: Background;
            brightness: number;
            gradient: boolean;
            gradient_height: number;
            gradientHeight: number;
            gradient_max_darkness: number;
            gradientMaxDarkness: number;
            meta_display: Display;
            metaDisplay: Display;
            monitor: number;
            rounded_clip_radius: number;
            roundedClipRadius: number;
            vignette: boolean;
            vignette_sharpness: number;
            vignetteSharpness: number;
        }
    }
    type BackgroundContent = (typeof classes.BackgroundContent)['prototype'];
    const BackgroundContent: typeof classes.BackgroundContent &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.BackgroundContent.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BackgroundContent.SignalSignatures> & classes.BackgroundContent);
    namespace BackgroundGroup {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
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
            extends Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }
    type BackgroundGroup = (typeof classes.BackgroundGroup)['prototype'];
    const BackgroundGroup: typeof classes.BackgroundGroup &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.BackgroundGroup.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BackgroundGroup.SignalSignatures> & classes.BackgroundGroup);
    namespace BackgroundImage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            loaded(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type BackgroundImage = (typeof classes.BackgroundImage)['prototype'];
    const BackgroundImage: typeof classes.BackgroundImage &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.BackgroundImage.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BackgroundImage.SignalSignatures> & classes.BackgroundImage);
    namespace BackgroundImageCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type BackgroundImageCache = (typeof classes.BackgroundImageCache)['prototype'];
    const BackgroundImageCache: typeof classes.BackgroundImageCache &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.BackgroundImageCache.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BackgroundImageCache.SignalSignatures> & classes.BackgroundImageCache);
    namespace Backlight {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::backend'(pspec: GObject.ParamSpec): void;
            'notify::brightness'(pspec: GObject.ParamSpec): void;
            'notify::brightness-max'(pspec: GObject.ParamSpec): void;
            'notify::brightness-min'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Backend;
            brightness: number;
            brightness_max: number;
            brightnessMax: number;
            brightness_min: number;
            brightnessMin: number;
            name: string;
        }
    }
    type Backlight = (typeof classes.Backlight)['prototype'];
    const Backlight: typeof classes.Backlight &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Backlight.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Backlight.SignalSignatures> & classes.Backlight);
    namespace Barrier {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            hit(arg0: BarrierEvent): void;
            left(arg0: BarrierEvent): void;
            'notify::backend'(pspec: GObject.ParamSpec): void;
            'notify::directions'(pspec: GObject.ParamSpec): void;
            'notify::flags'(pspec: GObject.ParamSpec): void;
            'notify::x1'(pspec: GObject.ParamSpec): void;
            'notify::x2'(pspec: GObject.ParamSpec): void;
            'notify::y1'(pspec: GObject.ParamSpec): void;
            'notify::y2'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            backend: Backend;
            directions: BarrierDirection;
            flags: BarrierFlags;
            x1: number;
            x2: number;
            y1: number;
            y2: number;
        }
    }
    type Barrier = (typeof classes.Barrier)['prototype'];
    const Barrier: typeof classes.Barrier &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Barrier.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Barrier.SignalSignatures> & classes.Barrier);
    namespace Compositor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::backend'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Backend;
            display: Display;
        }
    }
    type Compositor = (typeof classes.Compositor)['prototype'];
    const Compositor: typeof classes.Compositor &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Compositor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Compositor.SignalSignatures> & classes.Compositor);
    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'prepare-shutdown'(): void;
            started(): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::nick'(pspec: GObject.ParamSpec): void;
            'notify::unsafe-mode'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            nick: string;
            unsafe_mode: boolean;
            unsafeMode: boolean;
        }
    }
    type Context = (typeof classes.Context)['prototype'];
    const Context: typeof classes.Context &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Context.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Context.SignalSignatures> & classes.Context);
    namespace CursorTracker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'cursor-changed'(): void;
            'cursor-prefs-changed'(): void;
            'position-invalidated'(): void;
            'visibility-changed'(): void;
            'notify::backend'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Backend;
        }
    }
    type CursorTracker = (typeof classes.CursorTracker)['prototype'];
    const CursorTracker: typeof classes.CursorTracker &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.CursorTracker.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, CursorTracker.SignalSignatures> & classes.CursorTracker);
    namespace DebugControl {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::exported'(pspec: GObject.ParamSpec): void;
            'notify::g-flags'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps {
            context: Context;
            exported: boolean;
        }
    }
    type DebugControl = (typeof classes.DebugControl)['prototype'];
    const DebugControl: typeof classes.DebugControl &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.DebugControl.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DebugControl.SignalSignatures> & classes.DebugControl);
    namespace Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'accelerator-activated'(arg0: number, arg1: Clutter.InputDevice, arg2: number): void;
            'accelerator-deactivated'(arg0: number, arg1: Clutter.InputDevice, arg2: number): void;
            closing(): void;
            'cursor-updated'(): void;
            'focus-window'(arg0: Window, arg1: number): void;
            'gl-video-memory-purged'(): void;
            'grab-op-begin'(arg0: Window, arg1: GrabOp): void;
            'grab-op-end'(arg0: Window, arg1: GrabOp): void;
            'in-fullscreen-changed'(): void;
            'init-xserver'(arg0: Gio.Task): boolean | void;
            'modifiers-accelerator-activated'(): boolean | void;
            'overlay-key'(): void;
            'pad-mode-switch'(arg0: Clutter.InputDevice, arg1: number, arg2: number): void;
            restacked(): void;
            restart(): boolean | void;
            'show-osd'(arg0: number, arg1: string, arg2: string): void;
            'show-pad-osd'(
                arg0: Clutter.InputDevice,
                arg1: Gio.Settings,
                arg2: string,
                arg3: boolean,
                arg4: number,
            ): Clutter.Actor | null;
            'show-resize-popup'(arg0: boolean, arg1: Mtk.Rectangle, arg2: number, arg3: number): boolean | void;
            'show-restart-message'(arg0: string | null): boolean | void;
            'showing-desktop-changed'(): void;
            'window-created'(arg0: Window): void;
            'window-demands-attention'(arg0: Window): void;
            'window-entered-monitor'(arg0: number, arg1: Window): void;
            'window-left-monitor'(arg0: number, arg1: Window): void;
            'window-marked-urgent'(arg0: Window): void;
            'window-visibility-updated'(arg0: any | null, arg1: any | null, arg2: any | null): void;
            'workareas-changed'(): void;
            'x11-display-closing'(): void;
            'x11-display-opened'(): void;
            'x11-display-setup'(): void;
            'notify::compositor-modifiers'(pspec: GObject.ParamSpec): void;
            'notify::focus-window'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compositor_modifiers: Clutter.ModifierType;
            compositorModifiers: Clutter.ModifierType;
            focus_window: Window;
            focusWindow: Window;
        }
    }
    type Display = (typeof classes.Display)['prototype'];
    const Display: typeof classes.Display &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Display.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Display.SignalSignatures> & classes.Display);
    namespace Dnd {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'dnd-enter'(): void;
            'dnd-leave'(): void;
            'dnd-position-change'(arg0: number, arg1: number): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Dnd = (typeof classes.Dnd)['prototype'];
    const Dnd: typeof classes.Dnd &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Dnd.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Dnd.SignalSignatures> & classes.Dnd);
    namespace IdleMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type IdleMonitor = (typeof classes.IdleMonitor)['prototype'];
    const IdleMonitor: typeof classes.IdleMonitor &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.IdleMonitor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, IdleMonitor.SignalSignatures> & classes.IdleMonitor);
    namespace Laters {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Laters = (typeof classes.Laters)['prototype'];
    const Laters: typeof classes.Laters &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Laters.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Laters.SignalSignatures> & classes.Laters);
    namespace LaunchContext {
        // Signal signatures
        interface SignalSignatures extends Gio.AppLaunchContext.SignalSignatures {
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::timestamp'(pspec: GObject.ParamSpec): void;
            'notify::workspace'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Gio.AppLaunchContext.ConstructorProps {
            display: Display;
            timestamp: number;
            workspace: Workspace;
        }
    }
    type LaunchContext = (typeof classes.LaunchContext)['prototype'];
    const LaunchContext: typeof classes.LaunchContext &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.LaunchContext.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, LaunchContext.SignalSignatures> & classes.LaunchContext);
    namespace LogicalMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type LogicalMonitor = (typeof classes.LogicalMonitor)['prototype'];
    const LogicalMonitor: typeof classes.LogicalMonitor &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.LogicalMonitor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, LogicalMonitor.SignalSignatures> & classes.LogicalMonitor);
    namespace Monitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Monitor = (typeof classes.Monitor)['prototype'];
    const Monitor: typeof classes.Monitor &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Monitor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Monitor.SignalSignatures> & classes.Monitor);
    namespace MonitorManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'confirm-display-change'(): void;
            'monitor-privacy-screen-changed'(arg0: LogicalMonitor, arg1: boolean): void;
            'monitors-changed'(): void;
            'monitors-changed-internal'(): void;
            'monitors-changing'(): void;
            'power-save-mode-changed'(arg0: PowerSaveChangeReason): void;
            'notify::backend'(pspec: GObject.ParamSpec): void;
            'notify::has-builtin-panel'(pspec: GObject.ParamSpec): void;
            'notify::night-light-supported'(pspec: GObject.ParamSpec): void;
            'notify::panel-orientation-managed'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Backend;
            has_builtin_panel: boolean;
            hasBuiltinPanel: boolean;
            night_light_supported: boolean;
            nightLightSupported: boolean;
            panel_orientation_managed: boolean;
            panelOrientationManaged: boolean;
        }
    }
    type MonitorManager = (typeof classes.MonitorManager)['prototype'];
    const MonitorManager: typeof classes.MonitorManager &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.MonitorManager.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MonitorManager.SignalSignatures> & classes.MonitorManager);
    namespace MultiTexture {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type MultiTexture = (typeof classes.MultiTexture)['prototype'];
    const MultiTexture: typeof classes.MultiTexture &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.MultiTexture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MultiTexture.SignalSignatures> & classes.MultiTexture);
    namespace OrientationManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'orientation-changed'(): void;
            'sensor-active'(): void;
            'notify::has-accelerometer'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            has_accelerometer: boolean;
            hasAccelerometer: boolean;
        }
    }
    type OrientationManager = (typeof classes.OrientationManager)['prototype'];
    const OrientationManager: typeof classes.OrientationManager &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.OrientationManager.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, OrientationManager.SignalSignatures> & classes.OrientationManager);
    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Plugin = (typeof classes.Plugin)['prototype'];
    const Plugin: typeof classes.Plugin &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Plugin.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Plugin.SignalSignatures> & classes.Plugin);
    namespace RemoteAccessController {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'new-handle'(arg0: RemoteAccessHandle): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type RemoteAccessController = (typeof classes.RemoteAccessController)['prototype'];
    const RemoteAccessController: typeof classes.RemoteAccessController &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.RemoteAccessController.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, RemoteAccessController.SignalSignatures> & classes.RemoteAccessController);
    namespace RemoteAccessHandle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            stopped(): void;
            'notify::is-recording'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_recording: boolean;
            isRecording: boolean;
        }
    }
    type RemoteAccessHandle = (typeof classes.RemoteAccessHandle)['prototype'];
    const RemoteAccessHandle: typeof classes.RemoteAccessHandle &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.RemoteAccessHandle.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, RemoteAccessHandle.SignalSignatures> & classes.RemoteAccessHandle);
    namespace Selection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'owner-changed'(arg0: number, arg1: SelectionSource): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Selection = (typeof classes.Selection)['prototype'];
    const Selection: typeof classes.Selection &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Selection.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Selection.SignalSignatures> & classes.Selection);
    namespace SelectionSource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            activated(): void;
            deactivated(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type SelectionSource = (typeof classes.SelectionSource)['prototype'];
    const SelectionSource: typeof classes.SelectionSource &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.SelectionSource.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SelectionSource.SignalSignatures> & classes.SelectionSource);
    namespace SelectionSourceMemory {
        // Signal signatures
        interface SignalSignatures extends SelectionSource.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends SelectionSource.ConstructorProps {}
    }
    type SelectionSourceMemory = (typeof classes.SelectionSourceMemory)['prototype'];
    const SelectionSourceMemory: typeof classes.SelectionSourceMemory &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.SelectionSourceMemory.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SelectionSourceMemory.SignalSignatures> & classes.SelectionSourceMemory);
    namespace ShapedTexture {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'size-changed'(): void;
            'notify::clutter-context'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Clutter.Content.ConstructorProps {
            clutter_context: Clutter.Context;
            clutterContext: Clutter.Context;
            color_state: Clutter.ColorState;
            colorState: Clutter.ColorState;
        }
    }
    type ShapedTexture = (typeof classes.ShapedTexture)['prototype'];
    const ShapedTexture: typeof classes.ShapedTexture &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.ShapedTexture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ShapedTexture.SignalSignatures> & classes.ShapedTexture);
    namespace SoundPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type SoundPlayer = (typeof classes.SoundPlayer)['prototype'];
    const SoundPlayer: typeof classes.SoundPlayer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.SoundPlayer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SoundPlayer.SignalSignatures> & classes.SoundPlayer);
    namespace Stage {
        // Signal signatures
        interface SignalSignatures extends Clutter.Stage.SignalSignatures {
            'notify::is-grabbed'(pspec: GObject.ParamSpec): void;
            'notify::key-focus'(pspec: GObject.ParamSpec): void;
            'notify::perspective'(pspec: GObject.ParamSpec): void;
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
            extends Clutter.Stage.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }
    type Stage = (typeof classes.Stage)['prototype'];
    const Stage: typeof classes.Stage &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Stage.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Stage.SignalSignatures> & classes.Stage);
    namespace StartupNotification {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed(arg0: StartupSequence): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Display;
        }
    }
    type StartupNotification = (typeof classes.StartupNotification)['prototype'];
    const StartupNotification: typeof classes.StartupNotification &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.StartupNotification.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, StartupNotification.SignalSignatures> & classes.StartupNotification);
    namespace StartupSequence {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            complete(): void;
            timeout(): void;
            'notify::application-id'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::timestamp'(pspec: GObject.ParamSpec): void;
            'notify::wmclass'(pspec: GObject.ParamSpec): void;
            'notify::workspace'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_id: string;
            applicationId: string;
            display: Display;
            icon_name: string;
            iconName: string;
            id: string;
            name: string;
            timestamp: number;
            wmclass: string;
            workspace: number;
        }
    }
    type StartupSequence = (typeof classes.StartupSequence)['prototype'];
    const StartupSequence: typeof classes.StartupSequence &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.StartupSequence.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, StartupSequence.SignalSignatures> & classes.StartupSequence);
    namespace WaylandClient {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'client-destroyed'(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type WaylandClient = (typeof classes.WaylandClient)['prototype'];
    const WaylandClient: typeof classes.WaylandClient &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.WaylandClient.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WaylandClient.SignalSignatures> & classes.WaylandClient);
    namespace WaylandCompositor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'prepare-shutdown'(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type WaylandCompositor = (typeof classes.WaylandCompositor)['prototype'];
    const WaylandCompositor: typeof classes.WaylandCompositor &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.WaylandCompositor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WaylandCompositor.SignalSignatures> & classes.WaylandCompositor);
    namespace WaylandSurface {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'actor-changed'(): void;
            configure(): void;
            destroy(): void;
            'geometry-changed'(): void;
            'pre-state-applied'(): void;
            'shortcuts-inhibited'(): void;
            'shortcuts-restored'(): void;
            unmapped(): void;
            'notify::main-monitor'(pspec: GObject.ParamSpec): void;
            'notify::window'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            main_monitor: LogicalMonitor;
            mainMonitor: LogicalMonitor;
            window: Window;
        }
    }
    type WaylandSurface = (typeof classes.WaylandSurface)['prototype'];
    const WaylandSurface: typeof classes.WaylandSurface &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.WaylandSurface.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WaylandSurface.SignalSignatures> & classes.WaylandSurface);
    namespace Window {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            configure(arg0: WindowConfig): void;
            focus(): void;
            'highest-scale-monitor-changed'(): void;
            'position-changed'(): void;
            raised(): void;
            shown(): void;
            'size-changed'(): void;
            unmanaged(): void;
            unmanaging(): void;
            'workspace-changed'(): void;
            'notify::above'(pspec: GObject.ParamSpec): void;
            'notify::appears-focused'(pspec: GObject.ParamSpec): void;
            'notify::decorated'(pspec: GObject.ParamSpec): void;
            'notify::demands-attention'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::fullscreen'(pspec: GObject.ParamSpec): void;
            'notify::gtk-app-menu-object-path'(pspec: GObject.ParamSpec): void;
            'notify::gtk-application-id'(pspec: GObject.ParamSpec): void;
            'notify::gtk-application-object-path'(pspec: GObject.ParamSpec): void;
            'notify::gtk-menubar-object-path'(pspec: GObject.ParamSpec): void;
            'notify::gtk-unique-bus-name'(pspec: GObject.ParamSpec): void;
            'notify::gtk-window-object-path'(pspec: GObject.ParamSpec): void;
            'notify::is-alive'(pspec: GObject.ParamSpec): void;
            'notify::main-monitor'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::maximized-horizontally'(pspec: GObject.ParamSpec): void;
            'notify::maximized-vertically'(pspec: GObject.ParamSpec): void;
            'notify::minimized'(pspec: GObject.ParamSpec): void;
            'notify::mutter-hints'(pspec: GObject.ParamSpec): void;
            'notify::on-all-workspaces'(pspec: GObject.ParamSpec): void;
            'notify::resizeable'(pspec: GObject.ParamSpec): void;
            'notify::skip-taskbar'(pspec: GObject.ParamSpec): void;
            'notify::tag'(pspec: GObject.ParamSpec): void;
            'notify::title'(pspec: GObject.ParamSpec): void;
            'notify::urgent'(pspec: GObject.ParamSpec): void;
            'notify::user-time'(pspec: GObject.ParamSpec): void;
            'notify::window-type'(pspec: GObject.ParamSpec): void;
            'notify::wm-class'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            above: boolean;
            appears_focused: boolean;
            appearsFocused: boolean;
            decorated: boolean;
            demands_attention: boolean;
            demandsAttention: boolean;
            display: Display;
            effect: number;
            fullscreen: boolean;
            gtk_app_menu_object_path: string;
            gtkAppMenuObjectPath: string;
            gtk_application_id: string;
            gtkApplicationId: string;
            gtk_application_object_path: string;
            gtkApplicationObjectPath: string;
            gtk_menubar_object_path: string;
            gtkMenubarObjectPath: string;
            gtk_unique_bus_name: string;
            gtkUniqueBusName: string;
            gtk_window_object_path: string;
            gtkWindowObjectPath: string;
            is_alive: boolean;
            isAlive: boolean;
            main_monitor: LogicalMonitor;
            mainMonitor: LogicalMonitor;
            mapped: boolean;
            maximized_horizontally: boolean;
            maximizedHorizontally: boolean;
            maximized_vertically: boolean;
            maximizedVertically: boolean;
            minimized: boolean;
            mutter_hints: string;
            mutterHints: string;
            on_all_workspaces: boolean;
            onAllWorkspaces: boolean;
            resizeable: boolean;
            skip_taskbar: boolean;
            skipTaskbar: boolean;
            tag: string;
            title: string;
            urgent: boolean;
            user_time: number;
            userTime: number;
            window_type: WindowType;
            windowType: WindowType;
            wm_class: string;
            wmClass: string;
        }
    }
    type Window = (typeof classes.Window)['prototype'];
    const Window: typeof classes.Window &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Window.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Window.SignalSignatures> & classes.Window);
    namespace WindowActor {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            damaged(): void;
            'effects-completed'(): void;
            'first-frame'(): void;
            thawed(): void;
            'notify::meta-window'(pspec: GObject.ParamSpec): void;
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
            extends Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            meta_window: Window;
            metaWindow: Window;
        }
    }
    type WindowActor = (typeof classes.WindowActor)['prototype'];
    const WindowActor: typeof classes.WindowActor &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.WindowActor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WindowActor.SignalSignatures> & classes.WindowActor);
    namespace WindowConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::is-fullscreen'(pspec: GObject.ParamSpec): void;
            'notify::rect'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_fullscreen: boolean;
            isFullscreen: boolean;
            rect: Mtk.Rectangle;
        }
    }
    type WindowConfig = (typeof classes.WindowConfig)['prototype'];
    const WindowConfig: typeof classes.WindowConfig &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.WindowConfig.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WindowConfig.SignalSignatures> & classes.WindowConfig);
    namespace WindowGroup {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
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
            extends Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }
    type WindowGroup = (typeof classes.WindowGroup)['prototype'];
    const WindowGroup: typeof classes.WindowGroup &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.WindowGroup.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WindowGroup.SignalSignatures> & classes.WindowGroup);
    namespace Workspace {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'window-added'(arg0: Window): void;
            'window-removed'(arg0: Window): void;
            'notify::active'(pspec: GObject.ParamSpec): void;
            'notify::n-windows'(pspec: GObject.ParamSpec): void;
            'notify::workspace-index'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            n_windows: number;
            nWindows: number;
            workspace_index: number;
            workspaceIndex: number;
        }
    }
    type Workspace = (typeof classes.Workspace)['prototype'];
    const Workspace: typeof classes.Workspace &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.Workspace.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Workspace.SignalSignatures> & classes.Workspace);
    namespace WorkspaceManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'active-workspace-changed'(): void;
            'showing-desktop-changed'(): void;
            'workspace-added'(arg0: number): void;
            'workspace-removed'(arg0: number): void;
            'workspace-switched'(arg0: number, arg1: number, arg2: MotionDirection): void;
            'workspaces-reordered'(): void;
            'notify::layout-columns'(pspec: GObject.ParamSpec): void;
            'notify::layout-rows'(pspec: GObject.ParamSpec): void;
            'notify::n-workspaces'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            layout_columns: number;
            layoutColumns: number;
            layout_rows: number;
            layoutRows: number;
            n_workspaces: number;
            nWorkspaces: number;
        }
    }
    type WorkspaceManager = (typeof classes.WorkspaceManager)['prototype'];
    const WorkspaceManager: typeof classes.WorkspaceManager &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.WorkspaceManager.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WorkspaceManager.SignalSignatures> & classes.WorkspaceManager);
    namespace X11Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type X11Display = (typeof classes.X11Display)['prototype'];
    const X11Display: typeof classes.X11Display &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Meta.X11Display.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, X11Display.SignalSignatures> & classes.X11Display);
    export type BackendClass = typeof Backend;
    export type BackgroundActorClass = typeof BackgroundActor;
    export type BackgroundClass = typeof Background;
    export type BackgroundContentClass = typeof BackgroundContent;
    export type BackgroundGroupClass = typeof BackgroundGroup;
    export type BackgroundImageCacheClass = typeof BackgroundImageCache;
    export type BackgroundImageClass = typeof BackgroundImage;
    export type BacklightClass = typeof Backlight;
    export type BarrierClass = typeof Barrier;
    class BarrierEvent {
        static '$gtype': GObject.GType<BarrierEvent>;
        // Fields
        event_id: number;
        dt: number;
        time: number;
        x: number;
        y: number;
        dx: number;
        dy: number;
        released: boolean;
        grabbed: boolean;
        // Constructors
        constructor(
            properties?: Partial<{
                event_id: number;
                dt: number;
                time: number;
                x: number;
                y: number;
                dx: number;
                dy: number;
                released: boolean;
                grabbed: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }
    class ButtonLayout {
        static '$gtype': GObject.GType<ButtonLayout>;
        // Fields
        left_buttons: ButtonFunction[];
        left_buttons_has_spacer: boolean[];
        right_buttons: ButtonFunction[];
        right_buttons_has_spacer: boolean[];
        // Constructors
        _init(...args: any[]): void;
    }
    export type CloseDialogInterface = typeof CloseDialog;
    export type CompositorClass = typeof Compositor;
    export type ContextClass = typeof Context;
    export type CursorTrackerClass = typeof CursorTracker;
    export type DebugControlClass = typeof DebugControl;
    export type DisplayClass = typeof Display;
    export type DndClass = typeof Dnd;
    class Edge {
        static '$gtype': GObject.GType<Edge>;
        // Fields
        rect: Mtk.Rectangle;
        side_type: Side;
        edge_type: EdgeType;
        // Constructors
        _init(...args: any[]): void;
    }
    class FrameBorder {
        static '$gtype': GObject.GType<FrameBorder>;
        // Fields
        left: number;
        right: number;
        top: number;
        bottom: number;
        // Constructors
        constructor(
            properties?: Partial<{
                left: number;
                right: number;
                top: number;
                bottom: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    class FrameBorders {
        static '$gtype': GObject.GType<FrameBorders>;
        // Fields
        visible: FrameBorder;
        invisible: FrameBorder;
        total: FrameBorder;
        // Constructors
        constructor(
            properties?: Partial<{
                visible: FrameBorder;
                invisible: FrameBorder;
                total: FrameBorder;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        clear(): void;
    }
    export type IdleMonitorClass = typeof IdleMonitor;
    export type InhibitShortcutsDialogInterface = typeof InhibitShortcutsDialog;
    abstract class KeyBinding {
        static '$gtype': GObject.GType<KeyBinding>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        get_mask(): number;
        get_modifiers(): Clutter.ModifierType;
        get_name(): string;
        is_builtin(): boolean;
        is_reversed(): boolean;
    }
    export type LatersClass = typeof Laters;
    export type LaunchContextClass = typeof LaunchContext;
    export type LogicalMonitorClass = typeof LogicalMonitor;
    export type MonitorClass = typeof Monitor;
    export type MonitorManagerClass = typeof MonitorManager;
    export type MultiTextureClass = typeof MultiTexture;
    export type OrientationManagerClass = typeof OrientationManager;
    export type PluginClass = typeof Plugin;
    export type RemoteAccessControllerClass = typeof RemoteAccessController;
    export type RemoteAccessHandleClass = typeof RemoteAccessHandle;
    export type SelectionClass = typeof Selection;
    export type SelectionSourceClass = typeof SelectionSource;
    export type SelectionSourceMemoryClass = typeof SelectionSourceMemory;
    abstract class Settings {
        static '$gtype': GObject.GType<Settings>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        get_font_dpi(): number;
        get_ui_scaling_factor(): number;
    }
    export type ShapedTextureClass = typeof ShapedTexture;
    export type SoundPlayerClass = typeof SoundPlayer;
    export type StageClass = typeof Stage;
    export type StartupNotificationClass = typeof StartupNotification;
    export type StartupSequenceClass = typeof StartupSequence;
    class Strut {
        static '$gtype': GObject.GType<Strut>;
        // Fields
        rect: Mtk.Rectangle;
        side: Side;
        // Constructors
        _init(...args: any[]): void;
    }
    export type WaylandClientClass = typeof WaylandClient;
    export type WaylandCompositorClass = typeof WaylandCompositor;
    export type WaylandSurfaceClass = typeof WaylandSurface;
    export type WindowActorClass = typeof WindowActor;
    export type WindowClass = typeof Window;
    export type WindowConfigClass = typeof WindowConfig;
    export type WindowGroupClass = typeof WindowGroup;
    export type WorkspaceClass = typeof Workspace;
    export type WorkspaceManagerClass = typeof WorkspaceManager;
    export type X11DisplayClass = typeof X11Display;
    abstract class _Monitor {
        static '$gtype': GObject.GType<_Monitor>;
        // Constructors
        _init(...args: any[]): void;
    }
    class XEvent {
        static '$gtype': GObject.GType<XEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    namespace CloseDialog {
        /**
         * Interface for implementing CloseDialog.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Call whenever `dialog` should receive keyboard focus,
             * usually when the window would.
             */
            vfunc_focus(): void;
            /**
             * Hides the close dialog.
             */
            vfunc_hide(): void;
            /**
             * Shows the close dialog.
             */
            vfunc_show(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            window: Window;
        }
    }
    export interface CloseDialogNamespace {
        $gtype: GObject.GType<CloseDialog>;
        prototype: CloseDialog;
    }
    interface CloseDialog extends GObject.Object, CloseDialog.Interface {
        // Properties
        window: Window;
        // Methods
        /**
         * Call whenever `dialog` should receive keyboard focus,
         * usually when the window would.
         */
        focus(): void;
        /**
         * Hides the close dialog.
         */
        hide(): void;
        /**
         * Returns whether `dialog` is currently visible.
         *
         * @returns #TRUE if `dialog` is visible.
         */
        is_visible(): boolean;
        /**
         * Responds and closes the dialog. To be called by #MetaCloseDialog
         * implementations.
         *
         * @param response a #MetaCloseDialogResponse
         */
        response(response: CloseDialogResponse | null): void;
        /**
         * Shows the close dialog.
         */
        show(): void;
    }
    export const CloseDialog: CloseDialogNamespace & (new () => CloseDialog);
    namespace InhibitShortcutsDialog {
        /**
         * Interface for implementing InhibitShortcutsDialog.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Hides the inhibit shortcuts dialog.
             */
            vfunc_hide(): void;
            /**
             * Shows the inhibit shortcuts dialog.
             */
            vfunc_show(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            window: Window;
        }
    }
    export interface InhibitShortcutsDialogNamespace {
        $gtype: GObject.GType<InhibitShortcutsDialog>;
        prototype: InhibitShortcutsDialog;
    }
    interface InhibitShortcutsDialog extends GObject.Object, InhibitShortcutsDialog.Interface {
        // Properties
        window: Window;
        // Methods
        /**
         * Hides the inhibit shortcuts dialog.
         */
        hide(): void;
        /**
         * Responds and closes the dialog. To be called by #MetaInhibitShortcutsDialog
         * implementations.
         *
         * @param response a #MetaInhibitShortcutsDialogResponse
         */
        response(response: InhibitShortcutsDialogResponse | null): void;
        /**
         * Shows the inhibit shortcuts dialog.
         */
        show(): void;
    }
    export const InhibitShortcutsDialog: InhibitShortcutsDialogNamespace & (new () => InhibitShortcutsDialog);
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
export default Meta;
