/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import '@girs/gjs';
import type classes from './gdk-4.0-classes.d.ts';
export { classes as GdkClasses };
export namespace Gdk {
    /**
     * Gdk-4.0
     */
    /**
     * Defines how device axes are interpreted by GTK.
     *
     * Note that the X and Y axes are not really needed; pointer devices
     * report their location via the x/y members of events regardless. Whether
     * X and Y are present as axes depends on the GDK backend.
     */
    export namespace AxisUse {
        export const $gtype: GObject.GType<AxisUse>;
    }
    enum AxisUse {
        /**
         * the axis is ignored.
         */
        IGNORE,
        /**
         * the axis is used as the x axis.
         */
        X = 1,
        /**
         * the axis is used as the y axis.
         */
        Y = 2,
        /**
         * the axis is used as the scroll x delta
         */
        DELTA_X = 3,
        /**
         * the axis is used as the scroll y delta
         */
        DELTA_Y = 4,
        /**
         * the axis is used for pressure information.
         */
        PRESSURE = 5,
        /**
         * the axis is used for x tilt information.
         */
        XTILT = 6,
        /**
         * the axis is used for y tilt information.
         */
        YTILT = 7,
        /**
         * the axis is used for wheel information.
         */
        WHEEL = 8,
        /**
         * the axis is used for pen/tablet distance information
         */
        DISTANCE = 9,
        /**
         * the axis is used for pen rotation information
         */
        ROTATION = 10,
        /**
         * the axis is used for pen slider information
         */
        SLIDER = 11,
        /**
         * a constant equal to the numerically highest axis value.
         */
        LAST = 12,
    }
    /**
     * The values of this enumeration describe whether image data uses
     * the full range of 8-bit values.
     *
     * In digital broadcasting, it is common to reserve the lowest and
     * highest values. Typically the allowed values for the narrow range
     * are 16-235 for Y and 16-240 for u,v (when dealing with YUV data).
     */
    export namespace CicpRange {
        export const $gtype: GObject.GType<CicpRange>;
    }
    enum CicpRange {
        /**
         * The values use the range of 16-235 (for Y) and 16-240 for u and v.
         */
        NARROW,
        /**
         * The values use the full range.
         */
        FULL = 1,
    }
    /**
     * Specifies the crossing mode for enter and leave events.
     */
    export namespace CrossingMode {
        export const $gtype: GObject.GType<CrossingMode>;
    }
    enum CrossingMode {
        /**
         * crossing because of pointer motion.
         */
        NORMAL,
        /**
         * crossing because a grab is activated.
         */
        GRAB = 1,
        /**
         * crossing because a grab is deactivated.
         */
        UNGRAB = 2,
        /**
         * crossing because a GTK grab is activated.
         */
        GTK_GRAB = 3,
        /**
         * crossing because a GTK grab is deactivated.
         */
        GTK_UNGRAB = 4,
        /**
         * crossing because a GTK widget changed
         *   state (e.g. sensitivity).
         */
        STATE_CHANGED = 5,
        /**
         * crossing because a touch sequence has begun,
         *   this event is synthetic as the pointer might have not left the surface.
         */
        TOUCH_BEGIN = 6,
        /**
         * crossing because a touch sequence has ended,
         *   this event is synthetic as the pointer might have not left the surface.
         */
        TOUCH_END = 7,
        /**
         * crossing because of a device switch (i.e.
         *   a mouse taking control of the pointer after a touch device), this event
         *   is synthetic as the pointer didn’t leave the surface.
         */
        DEVICE_SWITCH = 8,
    }
    /**
     * A pad feature.
     */
    export namespace DevicePadFeature {
        export const $gtype: GObject.GType<DevicePadFeature>;
    }
    enum DevicePadFeature {
        /**
         * a button
         */
        BUTTON,
        /**
         * a ring-shaped interactive area
         */
        RING = 1,
        /**
         * a straight interactive area
         */
        STRIP = 2,
    }
    /**
     * Indicates the specific type of tool being used being a tablet. Such as an
     * airbrush, pencil, etc.
     */
    export namespace DeviceToolType {
        export const $gtype: GObject.GType<DeviceToolType>;
    }
    enum DeviceToolType {
        /**
         * Tool is of an unknown type.
         */
        UNKNOWN,
        /**
         * Tool is a standard tablet stylus.
         */
        PEN = 1,
        /**
         * Tool is standard tablet eraser.
         */
        ERASER = 2,
        /**
         * Tool is a brush stylus.
         */
        BRUSH = 3,
        /**
         * Tool is a pencil stylus.
         */
        PENCIL = 4,
        /**
         * Tool is an airbrush stylus.
         */
        AIRBRUSH = 5,
        /**
         * Tool is a mouse.
         */
        MOUSE = 6,
        /**
         * Tool is a lens cursor.
         */
        LENS = 7,
    }
    /**
     * Error enumeration for `GdkDmabufTexture`.
     */
    class DmabufError extends GLib.Error {
        static '$gtype': GObject.GType<DmabufError>;
        // Static Fields
        /**
         * Dmabuf support is not available, because the OS
         *   is not Linux, or it was explicitly disabled at compile- or runtime
         */
        static NOT_AVAILABLE: number;
        /**
         * The requested format is not supported
         */
        static UNSUPPORTED_FORMAT: number;
        /**
         * GTK failed to create the resource for other
         *   reasons
         */
        static CREATION_FAILED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        /**
         * Registers an error quark for [class`Gdk`.DmabufTexture] errors.
         */
        static quark(): GLib.Quark;
    }
    /**
     * Used in `GdkDrag` to the reason of a cancelled DND operation.
     */
    export namespace DragCancelReason {
        export const $gtype: GObject.GType<DragCancelReason>;
    }
    enum DragCancelReason {
        /**
         * There is no suitable drop target.
         */
        NO_TARGET,
        /**
         * Drag cancelled by the user
         */
        USER_CANCELLED = 1,
        /**
         * Unspecified error.
         */
        ERROR = 2,
    }
    /**
     * Specifies the type of the event.
     */
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }
    enum EventType {
        /**
         * the window manager has requested that the toplevel surface be
         *   hidden or destroyed, usually when the user clicks on a special icon in the
         *   title bar.
         */
        DELETE,
        /**
         * the pointer (usually a mouse) has moved.
         */
        MOTION_NOTIFY = 1,
        /**
         * a mouse button has been pressed.
         */
        BUTTON_PRESS = 2,
        /**
         * a mouse button has been released.
         */
        BUTTON_RELEASE = 3,
        /**
         * a key has been pressed.
         */
        KEY_PRESS = 4,
        /**
         * a key has been released.
         */
        KEY_RELEASE = 5,
        /**
         * the pointer has entered the surface.
         */
        ENTER_NOTIFY = 6,
        /**
         * the pointer has left the surface.
         */
        LEAVE_NOTIFY = 7,
        /**
         * the keyboard focus has entered or left the surface.
         */
        FOCUS_CHANGE = 8,
        /**
         * an input device has moved into contact with a sensing
         *   surface (e.g. a touchscreen or graphics tablet).
         */
        PROXIMITY_IN = 9,
        /**
         * an input device has moved out of contact with a sensing
         *   surface.
         */
        PROXIMITY_OUT = 10,
        /**
         * the mouse has entered the surface while a drag is in progress.
         */
        DRAG_ENTER = 11,
        /**
         * the mouse has left the surface while a drag is in progress.
         */
        DRAG_LEAVE = 12,
        /**
         * the mouse has moved in the surface while a drag is in
         *   progress.
         */
        DRAG_MOTION = 13,
        /**
         * a drop operation onto the surface has started.
         */
        DROP_START = 14,
        /**
         * the scroll wheel was turned
         */
        SCROLL = 15,
        /**
         * a pointer or keyboard grab was broken.
         */
        GRAB_BROKEN = 16,
        /**
         * A new touch event sequence has just started.
         */
        TOUCH_BEGIN = 17,
        /**
         * A touch event sequence has been updated.
         */
        TOUCH_UPDATE = 18,
        /**
         * A touch event sequence has finished.
         */
        TOUCH_END = 19,
        /**
         * A touch event sequence has been canceled.
         */
        TOUCH_CANCEL = 20,
        /**
         * A touchpad swipe gesture event, the current state
         *   is determined by its phase field.
         */
        TOUCHPAD_SWIPE = 21,
        /**
         * A touchpad pinch gesture event, the current state
         *   is determined by its phase field.
         */
        TOUCHPAD_PINCH = 22,
        /**
         * A tablet pad button press event.
         */
        PAD_BUTTON_PRESS = 23,
        /**
         * A tablet pad button release event.
         */
        PAD_BUTTON_RELEASE = 24,
        /**
         * A tablet pad axis event from a "ring".
         */
        PAD_RING = 25,
        /**
         * A tablet pad axis event from a "strip".
         */
        PAD_STRIP = 26,
        /**
         * A tablet pad group mode change.
         */
        PAD_GROUP_MODE = 27,
        /**
         * A touchpad hold gesture event, the current state is determined by its phase
         * field.
         */
        TOUCHPAD_HOLD = 28,
        /**
         * marks the end of the GdkEventType enumeration.
         */
        EVENT_LAST = 29,
    }
    /**
     * Indicates which monitor a surface should span over when in fullscreen mode.
     */
    export namespace FullscreenMode {
        export const $gtype: GObject.GType<FullscreenMode>;
    }
    enum FullscreenMode {
        /**
         * Fullscreen on current monitor only.
         */
        CURRENT_MONITOR,
        /**
         * Span across all monitors when fullscreen.
         */
        ALL_MONITORS = 1,
    }
    /**
     * Error enumeration for `GdkGLContext`.
     */
    class GLError extends GLib.Error {
        static '$gtype': GObject.GType<GLError>;
        // Static Fields
        /**
         * OpenGL support is not available
         */
        static NOT_AVAILABLE: number;
        /**
         * The requested visual format is not supported
         */
        static UNSUPPORTED_FORMAT: number;
        /**
         * The requested profile is not supported
         */
        static UNSUPPORTED_PROFILE: number;
        /**
         * The shader compilation failed
         */
        static COMPILATION_FAILED: number;
        /**
         * The shader linking failed
         */
        static LINK_FAILED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        /**
         * Registers an error quark for [class`Gdk`.GLContext] errors.
         */
        static quark(): GLib.Quark;
    }
    /**
     * Defines the reference point of a surface and is used in `GdkPopupLayout`.
     */
    export namespace Gravity {
        export const $gtype: GObject.GType<Gravity>;
    }
    enum Gravity {
        /**
         * the reference point is at the top left corner.
         */
        NORTH_WEST = 1,
        /**
         * the reference point is in the middle of the top edge.
         */
        NORTH = 2,
        /**
         * the reference point is at the top right corner.
         */
        NORTH_EAST = 3,
        /**
         * the reference point is at the middle of the left edge.
         */
        WEST = 4,
        /**
         * the reference point is at the center of the surface.
         */
        CENTER = 5,
        /**
         * the reference point is at the middle of the right edge.
         */
        EAST = 6,
        /**
         * the reference point is at the lower left corner.
         */
        SOUTH_WEST = 7,
        /**
         * the reference point is at the middle of the lower edge.
         */
        SOUTH = 8,
        /**
         * the reference point is at the lower right corner.
         */
        SOUTH_EAST = 9,
        /**
         * the reference point is at the top left corner of the
         *  surface itself, ignoring window manager decorations.
         */
        STATIC = 10,
    }
    /**
     * An enumeration describing the type of an input device in general terms.
     */
    export namespace InputSource {
        export const $gtype: GObject.GType<InputSource>;
    }
    enum InputSource {
        /**
         * the device is a mouse. (This will be reported for the core
         *   pointer, even if it is something else, such as a trackball.)
         */
        MOUSE,
        /**
         * the device is a stylus of a graphics tablet or similar device.
         */
        PEN = 1,
        /**
         * the device is a keyboard.
         */
        KEYBOARD = 2,
        /**
         * the device is a direct-input touch device, such
         *   as a touchscreen or tablet
         */
        TOUCHSCREEN = 3,
        /**
         * the device is an indirect touch device, such
         *   as a touchpad
         */
        TOUCHPAD = 4,
        /**
         * the device is a trackpoint
         */
        TRACKPOINT = 5,
        /**
         * the device is a "pad", a collection of buttons,
         *   rings and strips found in drawing tablets
         */
        TABLET_PAD = 6,
    }
    /**
     * Describes how well an event matches a given keyval and modifiers.
     *
     * `GdkKeyMatch` values are returned by [method`Gdk`.KeyEvent.matches].
     */
    export namespace KeyMatch {
        export const $gtype: GObject.GType<KeyMatch>;
    }
    enum KeyMatch {
        /**
         * The key event does not match
         */
        NONE,
        /**
         * The key event matches if keyboard state
         *   (specifically, the currently active group) is ignored
         */
        PARTIAL = 1,
        /**
         * The key event matches
         */
        EXACT = 2,
    }
    /**
     * Describes formats that image data can have in memory.
     *
     * It describes formats by listing the contents of the memory passed to it.
     * So `GDK_MEMORY_A8R8G8B8` will be 1 byte (8 bits) of alpha, followed by a
     * byte each of red, green and blue. It is not endian-dependent, so
     * `CAIRO_FORMAT_ARGB32` is represented by different `GdkMemoryFormats`
     * on architectures with different endiannesses.
     *
     * Its naming is modelled after
     * [VkFormat](https://www.khronos.org/registry/vulkan/specs/1.0/html/vkspec.html#VkFormat)
     * for details).
     */
    export namespace MemoryFormat {
        export const $gtype: GObject.GType<MemoryFormat>;
    }
    enum MemoryFormat {
        /**
         * 4 bytes; for blue, green, red, alpha.
         *   The color values are premultiplied with the alpha value.
         */
        'B8G8R8A8_PREMULTIPLIED',
        /**
         * 4 bytes; for alpha, red, green, blue.
         *   The color values are premultiplied with the alpha value.
         */
        'A8R8G8B8_PREMULTIPLIED' = 1,
        /**
         * 4 bytes; for red, green, blue, alpha
         *   The color values are premultiplied with the alpha value.
         */
        'R8G8B8A8_PREMULTIPLIED' = 2,
        /**
         * 4 bytes; for blue, green, red, alpha.
         */
        'B8G8R8A8' = 3,
        /**
         * 4 bytes; for alpha, red, green, blue.
         */
        'A8R8G8B8' = 4,
        /**
         * 4 bytes; for red, green, blue, alpha.
         */
        'R8G8B8A8' = 5,
        /**
         * 4 bytes; for alpha, blue, green, red.
         */
        'A8B8G8R8' = 6,
        /**
         * 3 bytes; for red, green, blue. The data is opaque.
         */
        'R8G8B8' = 7,
        /**
         * 3 bytes; for blue, green, red. The data is opaque.
         */
        'B8G8R8' = 8,
        /**
         * 3 guint16 values; for red, green, blue.
         */
        'R16G16B16' = 9,
        /**
         * 4 guint16 values; for red, green, blue, alpha. The color values are
         * premultiplied with the alpha value.
         */
        'R16G16B16A16_PREMULTIPLIED' = 10,
        /**
         * 4 guint16 values; for red, green, blue, alpha.
         */
        'R16G16B16A16' = 11,
        /**
         * 3 half-float values; for red, green, blue. The data is opaque.
         */
        'R16G16B16_FLOAT' = 12,
        /**
         * 4 half-float values; for red, green, blue and alpha. The color values are
         * premultiplied with the alpha value.
         */
        'R16G16B16A16_FLOAT_PREMULTIPLIED' = 13,
        /**
         * 4 half-float values; for red, green, blue and alpha.
         */
        'R16G16B16A16_FLOAT' = 14,
        /**
         * 3 float values; for red, green, blue.
         */
        'R32G32B32_FLOAT' = 15,
        /**
         * 4 float values; for red, green, blue and alpha. The color values are
         * premultiplied with the alpha value.
         */
        'R32G32B32A32_FLOAT_PREMULTIPLIED' = 16,
        /**
         * 4 float values; for red, green, blue and alpha.
         */
        'R32G32B32A32_FLOAT' = 17,
        /**
         * 2 bytes; for grayscale, alpha. The color values are premultiplied with the
         * alpha value.
         */
        'G8A8_PREMULTIPLIED' = 18,
        /**
         * 2 bytes; for grayscale, alpha.
         */
        'G8A8' = 19,
        /**
         * One byte; for grayscale. The data is opaque.
         */
        'G8' = 20,
        /**
         * 2 guint16 values; for grayscale, alpha. The color values are premultiplied
         * with the alpha value.
         */
        'G16A16_PREMULTIPLIED' = 21,
        /**
         * 2 guint16 values; for grayscale, alpha.
         */
        'G16A16' = 22,
        /**
         * One guint16 value; for grayscale. The data is opaque.
         */
        'G16' = 23,
        /**
         * One byte; for alpha.
         */
        'A8' = 24,
        /**
         * One guint16 value; for alpha.
         */
        'A16' = 25,
        /**
         * One half-float value; for alpha.
         */
        'A16_FLOAT' = 26,
        /**
         * One float value; for alpha.
         */
        'A32_FLOAT' = 27,
        /**
         * 4 bytes; for alpha, blue, green, red, The color values are premultiplied with
         * the alpha value.
         */
        'A8B8G8R8_PREMULTIPLIED' = 28,
        /**
         * 4 bytes; for blue, green, red, unused.
         */
        'B8G8R8X8' = 29,
        /**
         * 4 bytes; for unused, red, green, blue.
         */
        'X8R8G8B8' = 30,
        /**
         * 4 bytes; for red, green, blue, unused.
         */
        'R8G8B8X8' = 31,
        /**
         * 4 bytes; for unused, blue, green, red.
         */
        'X8B8G8R8' = 32,
        /**
         * The number of formats. This value will change as
         *   more formats get added, so do not rely on its concrete integer.
         */
        N_FORMATS = 33,
    }
    /**
     * Specifies the kind of crossing for enter and leave events.
     *
     * See the X11 protocol specification of LeaveNotify for
     * full details of crossing event generation.
     */
    export namespace NotifyType {
        export const $gtype: GObject.GType<NotifyType>;
    }
    enum NotifyType {
        /**
         * the surface is entered from an ancestor or
         *   left towards an ancestor.
         */
        ANCESTOR,
        /**
         * the pointer moves between an ancestor and an
         *   inferior of the surface.
         */
        VIRTUAL = 1,
        /**
         * the surface is entered from an inferior or
         *   left towards an inferior.
         */
        INFERIOR = 2,
        /**
         * the surface is entered from or left towards
         *   a surface which is neither an ancestor nor an inferior.
         */
        NONLINEAR = 3,
        /**
         * the pointer moves between two surfaces
         *   which are not ancestors of each other and the surface is part of
         *   the ancestor chain between one of these surfaces and their least
         *   common ancestor.
         */
        NONLINEAR_VIRTUAL = 4,
        /**
         * an unknown type of enter/leave event occurred.
         */
        UNKNOWN = 5,
    }
    /**
     * Specifies the direction for scroll events.
     */
    export namespace ScrollDirection {
        export const $gtype: GObject.GType<ScrollDirection>;
    }
    enum ScrollDirection {
        /**
         * the surface is scrolled up.
         */
        UP,
        /**
         * the surface is scrolled down.
         */
        DOWN = 1,
        /**
         * the surface is scrolled to the left.
         */
        LEFT = 2,
        /**
         * the surface is scrolled to the right.
         */
        RIGHT = 3,
        /**
         * the scrolling is determined by the delta values
         *   in scroll events. See gdk_scroll_event_get_deltas()
         */
        SMOOTH = 4,
    }
    /**
     * Specifies the unit of scroll deltas.
     *
     * When you get %GDK_SCROLL_UNIT_WHEEL, a delta of 1.0 means 1 wheel detent
     * click in the south direction, 2.0 means 2 wheel detent clicks in the south
     * direction... This is the same logic for negative values but in the north
     * direction.
     *
     * If you get %GDK_SCROLL_UNIT_SURFACE, are managing a scrollable view and get a
     * value of 123, you have to scroll 123 surface logical pixels right if it's
     * `delta_x` or down if it's `delta_y`. This is the same logic for negative values
     * but you have to scroll left instead of right if it's `delta_x` and up instead
     * of down if it's `delta_y`.
     *
     * 1 surface logical pixel is equal to 1 real screen pixel multiplied by the
     * final scale factor of your graphical interface (the product of the desktop
     * scale factor and eventually a custom scale factor in your app).
     */
    export namespace ScrollUnit {
        export const $gtype: GObject.GType<ScrollUnit>;
    }
    enum ScrollUnit {
        /**
         * The delta is in number of wheel clicks.
         */
        WHEEL,
        /**
         * The delta is in surface pixels to scroll directly
         *   on screen.
         */
        SURFACE = 1,
    }
    /**
     * This enumeration describes how the red, green and blue components
     * of physical pixels on an output device are laid out.
     */
    export namespace SubpixelLayout {
        export const $gtype: GObject.GType<SubpixelLayout>;
    }
    enum SubpixelLayout {
        /**
         * The layout is not known
         */
        UNKNOWN,
        /**
         * Not organized in this way
         */
        NONE = 1,
        /**
         * The layout is horizontal, the order is RGB
         */
        HORIZONTAL_RGB = 2,
        /**
         * The layout is horizontal, the order is BGR
         */
        HORIZONTAL_BGR = 3,
        /**
         * The layout is vertical, the order is RGB
         */
        VERTICAL_RGB = 4,
        /**
         * The layout is vertical, the order is BGR
         */
        VERTICAL_BGR = 5,
    }
    /**
     * Determines a surface edge or corner.
     */
    export namespace SurfaceEdge {
        export const $gtype: GObject.GType<SurfaceEdge>;
    }
    enum SurfaceEdge {
        /**
         * the top left corner.
         */
        NORTH_WEST,
        /**
         * the top edge.
         */
        NORTH = 1,
        /**
         * the top right corner.
         */
        NORTH_EAST = 2,
        /**
         * the left edge.
         */
        WEST = 3,
        /**
         * the right edge.
         */
        EAST = 4,
        /**
         * the lower left corner.
         */
        SOUTH_WEST = 5,
        /**
         * the lower edge.
         */
        SOUTH = 6,
        /**
         * the lower right corner.
         */
        SOUTH_EAST = 7,
    }
    /**
     * Possible errors that can be returned by `GdkTexture` constructors.
     */
    class TextureError extends GLib.Error {
        static '$gtype': GObject.GType<TextureError>;
        // Static Fields
        /**
         * Not enough memory to handle this image
         */
        static TOO_LARGE: number;
        /**
         * The image data appears corrupted
         */
        static CORRUPT_IMAGE: number;
        /**
         * The image contains features
         *   that cannot be loaded
         */
        static UNSUPPORTED_CONTENT: number;
        /**
         * The image format is not supported
         */
        static UNSUPPORTED_FORMAT: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        /**
         * Registers an error quark for [class`Gdk`.Texture] errors.
         */
        static quark(): GLib.Quark;
    }
    /**
     * The kind of title bar gesture to emit with
     * [method`Gdk`.Toplevel.titlebar_gesture].
     */
    export namespace TitlebarGesture {
        export const $gtype: GObject.GType<TitlebarGesture>;
    }
    enum TitlebarGesture {
        /**
         * double click gesture
         */
        DOUBLE_CLICK = 1,
        /**
         * right click gesture
         */
        RIGHT_CLICK = 2,
        /**
         * middle click gesture
         */
        MIDDLE_CLICK = 3,
    }
    /**
     * Specifies the current state of a touchpad gesture.
     *
     * All gestures are guaranteed to begin with an event with phase
     * %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN, followed by 0 or several events
     * with phase %GDK_TOUCHPAD_GESTURE_PHASE_UPDATE.
     *
     * A finished gesture may have 2 possible outcomes, an event with phase
     * %GDK_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
     * considered successful, this should be used as the hint to perform any
     * permanent changes.
     *
     * Cancelled gestures may be so for a variety of reasons, due to hardware
     * or the compositor, or due to the gesture recognition layers hinting the
     * gesture did not finish resolutely (eg. a 3rd finger being added during
     * a pinch gesture). In these cases, the last event will report the phase
     * %GDK_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
     * to undo any visible/permanent changes that were done throughout the
     * progress of the gesture.
     */
    export namespace TouchpadGesturePhase {
        export const $gtype: GObject.GType<TouchpadGesturePhase>;
    }
    enum TouchpadGesturePhase {
        /**
         * The gesture has begun.
         */
        BEGIN,
        /**
         * The gesture has been updated.
         */
        UPDATE = 1,
        /**
         * The gesture was finished, changes
         *   should be permanently applied.
         */
        END = 2,
        /**
         * The gesture was cancelled, all
         *   changes should be undone.
         */
        CANCEL = 3,
    }
    /**
     * Error enumeration for `GdkVulkanContext`.
     */
    class VulkanError extends GLib.Error {
        static '$gtype': GObject.GType<VulkanError>;
        // Static Fields
        /**
         * Vulkan is not supported on this backend or has not been
         *   compiled in.
         */
        static UNSUPPORTED: number;
        /**
         * Vulkan support is not available on this Surface
         */
        static NOT_AVAILABLE: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        /**
         * Registers an error quark for [class`Gdk`.VulkanContext] errors.
         */
        static quark(): GLib.Quark;
    }
    /**
     * Defines all possible DND actions.
     *
     * This can be used in [method`Gdk`.Drop.status] messages when any drop
     * can be accepted or a more specific drop method is not yet known.
     */
    const ACTION_ALL: number;
    /**
     * The middle button.
     */
    const BUTTON_MIDDLE: number;
    /**
     * The primary button. This is typically the left mouse button, or the
     * right button in a left-handed setup.
     */
    const BUTTON_PRIMARY: number;
    /**
     * The secondary button. This is typically the right mouse button, or the
     * left button in a left-handed setup.
     */
    const BUTTON_SECONDARY: number;
    /**
     * Represents the current time, and can be used anywhere a time is expected.
     */
    const CURRENT_TIME: number;
    /**
     * Use this macro as the return value for continuing the propagation of
     * an event handler.
     */
    const EVENT_PROPAGATE: boolean;
    /**
     * Use this macro as the return value for stopping the propagation of
     * an event handler.
     */
    const EVENT_STOP: boolean;
    const KEY_0: number;
    const KEY_1: number;
    const KEY_10ChannelsDown: number;
    const KEY_10ChannelsUp: number;
    const KEY_2: number;
    const KEY_3: number;
    const KEY_3270_AltCursor: number;
    const KEY_3270_Attn: number;
    const KEY_3270_BackTab: number;
    const KEY_3270_ChangeScreen: number;
    const KEY_3270_Copy: number;
    const KEY_3270_CursorBlink: number;
    const KEY_3270_CursorSelect: number;
    const KEY_3270_DeleteWord: number;
    const KEY_3270_Duplicate: number;
    const KEY_3270_Enter: number;
    const KEY_3270_EraseEOF: number;
    const KEY_3270_EraseInput: number;
    const KEY_3270_ExSelect: number;
    const KEY_3270_FieldMark: number;
    const KEY_3270_Ident: number;
    const KEY_3270_Jump: number;
    const KEY_3270_KeyClick: number;
    const KEY_3270_Left2: number;
    const KEY_3270_PA1: number;
    const KEY_3270_PA2: number;
    const KEY_3270_PA3: number;
    const KEY_3270_Play: number;
    const KEY_3270_PrintScreen: number;
    const KEY_3270_Quit: number;
    const KEY_3270_Record: number;
    const KEY_3270_Reset: number;
    const KEY_3270_Right2: number;
    const KEY_3270_Rule: number;
    const KEY_3270_Setup: number;
    const KEY_3270_Test: number;
    const KEY_3DMode: number;
    const KEY_4: number;
    const KEY_5: number;
    const KEY_6: number;
    const KEY_7: number;
    const KEY_8: number;
    const KEY_9: number;
    const KEY_A: number;
    const KEY_AE: number;
    const KEY_ALSToggle: number;
    const KEY_Aacute: number;
    const KEY_Abelowdot: number;
    const KEY_Abreve: number;
    const KEY_Abreveacute: number;
    const KEY_Abrevebelowdot: number;
    const KEY_Abrevegrave: number;
    const KEY_Abrevehook: number;
    const KEY_Abrevetilde: number;
    const KEY_AccessX_Enable: number;
    const KEY_AccessX_Feedback_Enable: number;
    const KEY_Accessibility: number;
    const KEY_Acircumflex: number;
    const KEY_Acircumflexacute: number;
    const KEY_Acircumflexbelowdot: number;
    const KEY_Acircumflexgrave: number;
    const KEY_Acircumflexhook: number;
    const KEY_Acircumflextilde: number;
    const KEY_AddFavorite: number;
    const KEY_Addressbook: number;
    const KEY_Adiaeresis: number;
    const KEY_Agrave: number;
    const KEY_Ahook: number;
    const KEY_Alt_L: number;
    const KEY_Alt_R: number;
    const KEY_Amacron: number;
    const KEY_Aogonek: number;
    const KEY_AppSelect: number;
    const KEY_ApplicationLeft: number;
    const KEY_ApplicationRight: number;
    const KEY_Arabic_0: number;
    const KEY_Arabic_1: number;
    const KEY_Arabic_2: number;
    const KEY_Arabic_3: number;
    const KEY_Arabic_4: number;
    const KEY_Arabic_5: number;
    const KEY_Arabic_6: number;
    const KEY_Arabic_7: number;
    const KEY_Arabic_8: number;
    const KEY_Arabic_9: number;
    const KEY_Arabic_ain: number;
    const KEY_Arabic_alef: number;
    const KEY_Arabic_alefmaksura: number;
    const KEY_Arabic_beh: number;
    const KEY_Arabic_comma: number;
    const KEY_Arabic_dad: number;
    const KEY_Arabic_dal: number;
    const KEY_Arabic_damma: number;
    const KEY_Arabic_dammatan: number;
    const KEY_Arabic_ddal: number;
    const KEY_Arabic_farsi_yeh: number;
    const KEY_Arabic_fatha: number;
    const KEY_Arabic_fathatan: number;
    const KEY_Arabic_feh: number;
    const KEY_Arabic_fullstop: number;
    const KEY_Arabic_gaf: number;
    const KEY_Arabic_ghain: number;
    const KEY_Arabic_ha: number;
    const KEY_Arabic_hah: number;
    const KEY_Arabic_hamza: number;
    const KEY_Arabic_hamza_above: number;
    const KEY_Arabic_hamza_below: number;
    const KEY_Arabic_hamzaonalef: number;
    const KEY_Arabic_hamzaonwaw: number;
    const KEY_Arabic_hamzaonyeh: number;
    const KEY_Arabic_hamzaunderalef: number;
    const KEY_Arabic_heh: number;
    const KEY_Arabic_heh_doachashmee: number;
    const KEY_Arabic_heh_goal: number;
    const KEY_Arabic_jeem: number;
    const KEY_Arabic_jeh: number;
    const KEY_Arabic_kaf: number;
    const KEY_Arabic_kasra: number;
    const KEY_Arabic_kasratan: number;
    const KEY_Arabic_keheh: number;
    const KEY_Arabic_khah: number;
    const KEY_Arabic_lam: number;
    const KEY_Arabic_madda_above: number;
    const KEY_Arabic_maddaonalef: number;
    const KEY_Arabic_meem: number;
    const KEY_Arabic_noon: number;
    const KEY_Arabic_noon_ghunna: number;
    const KEY_Arabic_peh: number;
    const KEY_Arabic_percent: number;
    const KEY_Arabic_qaf: number;
    const KEY_Arabic_question_mark: number;
    const KEY_Arabic_ra: number;
    const KEY_Arabic_rreh: number;
    const KEY_Arabic_sad: number;
    const KEY_Arabic_seen: number;
    const KEY_Arabic_semicolon: number;
    const KEY_Arabic_shadda: number;
    const KEY_Arabic_sheen: number;
    const KEY_Arabic_sukun: number;
    const KEY_Arabic_superscript_alef: number;
    const KEY_Arabic_switch: number;
    const KEY_Arabic_tah: number;
    const KEY_Arabic_tatweel: number;
    const KEY_Arabic_tcheh: number;
    const KEY_Arabic_teh: number;
    const KEY_Arabic_tehmarbuta: number;
    const KEY_Arabic_thal: number;
    const KEY_Arabic_theh: number;
    const KEY_Arabic_tteh: number;
    const KEY_Arabic_veh: number;
    const KEY_Arabic_waw: number;
    const KEY_Arabic_yeh: number;
    const KEY_Arabic_yeh_baree: number;
    const KEY_Arabic_zah: number;
    const KEY_Arabic_zain: number;
    const KEY_Aring: number;
    const KEY_Armenian_AT: number;
    const KEY_Armenian_AYB: number;
    const KEY_Armenian_BEN: number;
    const KEY_Armenian_CHA: number;
    const KEY_Armenian_DA: number;
    const KEY_Armenian_DZA: number;
    const KEY_Armenian_E: number;
    const KEY_Armenian_FE: number;
    const KEY_Armenian_GHAT: number;
    const KEY_Armenian_GIM: number;
    const KEY_Armenian_HI: number;
    const KEY_Armenian_HO: number;
    const KEY_Armenian_INI: number;
    const KEY_Armenian_JE: number;
    const KEY_Armenian_KE: number;
    const KEY_Armenian_KEN: number;
    const KEY_Armenian_KHE: number;
    const KEY_Armenian_LYUN: number;
    const KEY_Armenian_MEN: number;
    const KEY_Armenian_NU: number;
    const KEY_Armenian_O: number;
    const KEY_Armenian_PE: number;
    const KEY_Armenian_PYUR: number;
    const KEY_Armenian_RA: number;
    const KEY_Armenian_RE: number;
    const KEY_Armenian_SE: number;
    const KEY_Armenian_SHA: number;
    const KEY_Armenian_TCHE: number;
    const KEY_Armenian_TO: number;
    const KEY_Armenian_TSA: number;
    const KEY_Armenian_TSO: number;
    const KEY_Armenian_TYUN: number;
    const KEY_Armenian_VEV: number;
    const KEY_Armenian_VO: number;
    const KEY_Armenian_VYUN: number;
    const KEY_Armenian_YECH: number;
    const KEY_Armenian_ZA: number;
    const KEY_Armenian_ZHE: number;
    const KEY_Armenian_accent: number;
    const KEY_Armenian_amanak: number;
    const KEY_Armenian_apostrophe: number;
    const KEY_Armenian_at: number;
    const KEY_Armenian_ayb: number;
    const KEY_Armenian_ben: number;
    const KEY_Armenian_but: number;
    const KEY_Armenian_cha: number;
    const KEY_Armenian_da: number;
    const KEY_Armenian_dza: number;
    const KEY_Armenian_e: number;
    const KEY_Armenian_exclam: number;
    const KEY_Armenian_fe: number;
    const KEY_Armenian_full_stop: number;
    const KEY_Armenian_ghat: number;
    const KEY_Armenian_gim: number;
    const KEY_Armenian_hi: number;
    const KEY_Armenian_ho: number;
    const KEY_Armenian_hyphen: number;
    const KEY_Armenian_ini: number;
    const KEY_Armenian_je: number;
    const KEY_Armenian_ke: number;
    const KEY_Armenian_ken: number;
    const KEY_Armenian_khe: number;
    const KEY_Armenian_ligature_ew: number;
    const KEY_Armenian_lyun: number;
    const KEY_Armenian_men: number;
    const KEY_Armenian_nu: number;
    const KEY_Armenian_o: number;
    const KEY_Armenian_paruyk: number;
    const KEY_Armenian_pe: number;
    const KEY_Armenian_pyur: number;
    const KEY_Armenian_question: number;
    const KEY_Armenian_ra: number;
    const KEY_Armenian_re: number;
    const KEY_Armenian_se: number;
    const KEY_Armenian_separation_mark: number;
    const KEY_Armenian_sha: number;
    const KEY_Armenian_shesht: number;
    const KEY_Armenian_tche: number;
    const KEY_Armenian_to: number;
    const KEY_Armenian_tsa: number;
    const KEY_Armenian_tso: number;
    const KEY_Armenian_tyun: number;
    const KEY_Armenian_verjaket: number;
    const KEY_Armenian_vev: number;
    const KEY_Armenian_vo: number;
    const KEY_Armenian_vyun: number;
    const KEY_Armenian_yech: number;
    const KEY_Armenian_yentamna: number;
    const KEY_Armenian_za: number;
    const KEY_Armenian_zhe: number;
    const KEY_AspectRatio: number;
    const KEY_Assistant: number;
    const KEY_Atilde: number;
    const KEY_AttendantOff: number;
    const KEY_AttendantOn: number;
    const KEY_AttendantToggle: number;
    const KEY_AudibleBell_Enable: number;
    const KEY_Audio: number;
    const KEY_AudioCycleTrack: number;
    const KEY_AudioDesc: number;
    const KEY_AudioForward: number;
    const KEY_AudioLowerVolume: number;
    const KEY_AudioMedia: number;
    const KEY_AudioMicMute: number;
    const KEY_AudioMute: number;
    const KEY_AudioNext: number;
    const KEY_AudioPause: number;
    const KEY_AudioPlay: number;
    const KEY_AudioPreset: number;
    const KEY_AudioPrev: number;
    const KEY_AudioRaiseVolume: number;
    const KEY_AudioRandomPlay: number;
    const KEY_AudioRecord: number;
    const KEY_AudioRepeat: number;
    const KEY_AudioRewind: number;
    const KEY_AudioStop: number;
    const KEY_AutopilotEngageToggle: number;
    const KEY_Away: number;
    const KEY_B: number;
    const KEY_Babovedot: number;
    const KEY_Back: number;
    const KEY_BackForward: number;
    const KEY_BackSpace: number;
    const KEY_Battery: number;
    const KEY_Begin: number;
    const KEY_Blue: number;
    const KEY_Bluetooth: number;
    const KEY_Book: number;
    const KEY_BounceKeys_Enable: number;
    const KEY_Break: number;
    const KEY_BrightnessAdjust: number;
    const KEY_BrightnessAuto: number;
    const KEY_BrightnessMax: number;
    const KEY_BrightnessMin: number;
    const KEY_Buttonconfig: number;
    const KEY_Byelorussian_SHORTU: number;
    const KEY_Byelorussian_shortu: number;
    const KEY_C: number;
    const KEY_CD: number;
    const KEY_CH: number;
    const KEY_C_H: number;
    const KEY_C_h: number;
    const KEY_Cabovedot: number;
    const KEY_Cacute: number;
    const KEY_Calculator: number;
    const KEY_Calendar: number;
    const KEY_CameraAccessDisable: number;
    const KEY_CameraAccessEnable: number;
    const KEY_CameraAccessToggle: number;
    const KEY_CameraDown: number;
    const KEY_CameraFocus: number;
    const KEY_CameraLeft: number;
    const KEY_CameraRight: number;
    const KEY_CameraUp: number;
    const KEY_CameraZoomIn: number;
    const KEY_CameraZoomOut: number;
    const KEY_Cancel: number;
    const KEY_Caps_Lock: number;
    const KEY_Ccaron: number;
    const KEY_Ccedilla: number;
    const KEY_Ccircumflex: number;
    const KEY_Ch: number;
    const KEY_ChannelDown: number;
    const KEY_ChannelUp: number;
    const KEY_Clear: number;
    const KEY_ClearGrab: number;
    const KEY_ClearvuSonar: number;
    const KEY_Close: number;
    const KEY_Codeinput: number;
    const KEY_ColonSign: number;
    const KEY_Community: number;
    const KEY_ContextMenu: number;
    const KEY_ContrastAdjust: number;
    const KEY_ControlPanel: number;
    const KEY_Control_L: number;
    const KEY_Control_R: number;
    const KEY_Copy: number;
    const KEY_CruzeiroSign: number;
    const KEY_Cut: number;
    const KEY_CycleAngle: number;
    const KEY_Cyrillic_A: number;
    const KEY_Cyrillic_BE: number;
    const KEY_Cyrillic_CHE: number;
    const KEY_Cyrillic_CHE_descender: number;
    const KEY_Cyrillic_CHE_vertstroke: number;
    const KEY_Cyrillic_DE: number;
    const KEY_Cyrillic_DZHE: number;
    const KEY_Cyrillic_E: number;
    const KEY_Cyrillic_EF: number;
    const KEY_Cyrillic_EL: number;
    const KEY_Cyrillic_EM: number;
    const KEY_Cyrillic_EN: number;
    const KEY_Cyrillic_EN_descender: number;
    const KEY_Cyrillic_ER: number;
    const KEY_Cyrillic_ES: number;
    const KEY_Cyrillic_GHE: number;
    const KEY_Cyrillic_GHE_bar: number;
    const KEY_Cyrillic_HA: number;
    const KEY_Cyrillic_HARDSIGN: number;
    const KEY_Cyrillic_HA_descender: number;
    const KEY_Cyrillic_I: number;
    const KEY_Cyrillic_IE: number;
    const KEY_Cyrillic_IO: number;
    const KEY_Cyrillic_I_macron: number;
    const KEY_Cyrillic_JE: number;
    const KEY_Cyrillic_KA: number;
    const KEY_Cyrillic_KA_descender: number;
    const KEY_Cyrillic_KA_vertstroke: number;
    const KEY_Cyrillic_LJE: number;
    const KEY_Cyrillic_NJE: number;
    const KEY_Cyrillic_O: number;
    const KEY_Cyrillic_O_bar: number;
    const KEY_Cyrillic_PE: number;
    const KEY_Cyrillic_SCHWA: number;
    const KEY_Cyrillic_SHA: number;
    const KEY_Cyrillic_SHCHA: number;
    const KEY_Cyrillic_SHHA: number;
    const KEY_Cyrillic_SHORTI: number;
    const KEY_Cyrillic_SOFTSIGN: number;
    const KEY_Cyrillic_TE: number;
    const KEY_Cyrillic_TSE: number;
    const KEY_Cyrillic_U: number;
    const KEY_Cyrillic_U_macron: number;
    const KEY_Cyrillic_U_straight: number;
    const KEY_Cyrillic_U_straight_bar: number;
    const KEY_Cyrillic_VE: number;
    const KEY_Cyrillic_YA: number;
    const KEY_Cyrillic_YERU: number;
    const KEY_Cyrillic_YU: number;
    const KEY_Cyrillic_ZE: number;
    const KEY_Cyrillic_ZHE: number;
    const KEY_Cyrillic_ZHE_descender: number;
    const KEY_Cyrillic_a: number;
    const KEY_Cyrillic_be: number;
    const KEY_Cyrillic_che: number;
    const KEY_Cyrillic_che_descender: number;
    const KEY_Cyrillic_che_vertstroke: number;
    const KEY_Cyrillic_de: number;
    const KEY_Cyrillic_dzhe: number;
    const KEY_Cyrillic_e: number;
    const KEY_Cyrillic_ef: number;
    const KEY_Cyrillic_el: number;
    const KEY_Cyrillic_em: number;
    const KEY_Cyrillic_en: number;
    const KEY_Cyrillic_en_descender: number;
    const KEY_Cyrillic_er: number;
    const KEY_Cyrillic_es: number;
    const KEY_Cyrillic_ghe: number;
    const KEY_Cyrillic_ghe_bar: number;
    const KEY_Cyrillic_ha: number;
    const KEY_Cyrillic_ha_descender: number;
    const KEY_Cyrillic_hardsign: number;
    const KEY_Cyrillic_i: number;
    const KEY_Cyrillic_i_macron: number;
    const KEY_Cyrillic_ie: number;
    const KEY_Cyrillic_io: number;
    const KEY_Cyrillic_je: number;
    const KEY_Cyrillic_ka: number;
    const KEY_Cyrillic_ka_descender: number;
    const KEY_Cyrillic_ka_vertstroke: number;
    const KEY_Cyrillic_lje: number;
    const KEY_Cyrillic_nje: number;
    const KEY_Cyrillic_o: number;
    const KEY_Cyrillic_o_bar: number;
    const KEY_Cyrillic_pe: number;
    const KEY_Cyrillic_schwa: number;
    const KEY_Cyrillic_sha: number;
    const KEY_Cyrillic_shcha: number;
    const KEY_Cyrillic_shha: number;
    const KEY_Cyrillic_shorti: number;
    const KEY_Cyrillic_softsign: number;
    const KEY_Cyrillic_te: number;
    const KEY_Cyrillic_tse: number;
    const KEY_Cyrillic_u: number;
    const KEY_Cyrillic_u_macron: number;
    const KEY_Cyrillic_u_straight: number;
    const KEY_Cyrillic_u_straight_bar: number;
    const KEY_Cyrillic_ve: number;
    const KEY_Cyrillic_ya: number;
    const KEY_Cyrillic_yeru: number;
    const KEY_Cyrillic_yu: number;
    const KEY_Cyrillic_ze: number;
    const KEY_Cyrillic_zhe: number;
    const KEY_Cyrillic_zhe_descender: number;
    const KEY_D: number;
    const KEY_DOS: number;
    const KEY_DVD: number;
    const KEY_Dabovedot: number;
    const KEY_Data: number;
    const KEY_Database: number;
    const KEY_Dcaron: number;
    const KEY_Delete: number;
    const KEY_Dictate: number;
    const KEY_Display: number;
    const KEY_DisplayOff: number;
    const KEY_DisplayToggle: number;
    const KEY_DoNotDisturb: number;
    const KEY_Documents: number;
    const KEY_DongSign: number;
    const KEY_Down: number;
    const KEY_Dstroke: number;
    const KEY_DualRangeRadar: number;
    const KEY_E: number;
    const KEY_ENG: number;
    const KEY_ETH: number;
    const KEY_EZH: number;
    const KEY_Eabovedot: number;
    const KEY_Eacute: number;
    const KEY_Ebelowdot: number;
    const KEY_Ecaron: number;
    const KEY_Ecircumflex: number;
    const KEY_Ecircumflexacute: number;
    const KEY_Ecircumflexbelowdot: number;
    const KEY_Ecircumflexgrave: number;
    const KEY_Ecircumflexhook: number;
    const KEY_Ecircumflextilde: number;
    const KEY_EcuSign: number;
    const KEY_Ediaeresis: number;
    const KEY_Editor: number;
    const KEY_Egrave: number;
    const KEY_Ehook: number;
    const KEY_Eisu_Shift: number;
    const KEY_Eisu_toggle: number;
    const KEY_Eject: number;
    const KEY_Emacron: number;
    const KEY_EmojiPicker: number;
    const KEY_End: number;
    const KEY_Eogonek: number;
    const KEY_Escape: number;
    const KEY_Eth: number;
    const KEY_Etilde: number;
    const KEY_EuroSign: number;
    const KEY_Excel: number;
    const KEY_Execute: number;
    const KEY_Explorer: number;
    const KEY_F: number;
    const KEY_F1: number;
    const KEY_F10: number;
    const KEY_F11: number;
    const KEY_F12: number;
    const KEY_F13: number;
    const KEY_F14: number;
    const KEY_F15: number;
    const KEY_F16: number;
    const KEY_F17: number;
    const KEY_F18: number;
    const KEY_F19: number;
    const KEY_F2: number;
    const KEY_F20: number;
    const KEY_F21: number;
    const KEY_F22: number;
    const KEY_F23: number;
    const KEY_F24: number;
    const KEY_F25: number;
    const KEY_F26: number;
    const KEY_F27: number;
    const KEY_F28: number;
    const KEY_F29: number;
    const KEY_F3: number;
    const KEY_F30: number;
    const KEY_F31: number;
    const KEY_F32: number;
    const KEY_F33: number;
    const KEY_F34: number;
    const KEY_F35: number;
    const KEY_F4: number;
    const KEY_F5: number;
    const KEY_F6: number;
    const KEY_F7: number;
    const KEY_F8: number;
    const KEY_F9: number;
    const KEY_FFrancSign: number;
    const KEY_Fabovedot: number;
    const KEY_Farsi_0: number;
    const KEY_Farsi_1: number;
    const KEY_Farsi_2: number;
    const KEY_Farsi_3: number;
    const KEY_Farsi_4: number;
    const KEY_Farsi_5: number;
    const KEY_Farsi_6: number;
    const KEY_Farsi_7: number;
    const KEY_Farsi_8: number;
    const KEY_Farsi_9: number;
    const KEY_Farsi_yeh: number;
    const KEY_FastReverse: number;
    const KEY_Favorites: number;
    const KEY_Finance: number;
    const KEY_Find: number;
    const KEY_First_Virtual_Screen: number;
    const KEY_FishingChart: number;
    const KEY_Fn: number;
    const KEY_FnRightShift: number;
    const KEY_Fn_Esc: number;
    const KEY_Forward: number;
    const KEY_FrameBack: number;
    const KEY_FrameForward: number;
    const KEY_FullScreen: number;
    const KEY_G: number;
    const KEY_Gabovedot: number;
    const KEY_Game: number;
    const KEY_Gbreve: number;
    const KEY_Gcaron: number;
    const KEY_Gcedilla: number;
    const KEY_Gcircumflex: number;
    const KEY_Georgian_an: number;
    const KEY_Georgian_ban: number;
    const KEY_Georgian_can: number;
    const KEY_Georgian_char: number;
    const KEY_Georgian_chin: number;
    const KEY_Georgian_cil: number;
    const KEY_Georgian_don: number;
    const KEY_Georgian_en: number;
    const KEY_Georgian_fi: number;
    const KEY_Georgian_gan: number;
    const KEY_Georgian_ghan: number;
    const KEY_Georgian_hae: number;
    const KEY_Georgian_har: number;
    const KEY_Georgian_he: number;
    const KEY_Georgian_hie: number;
    const KEY_Georgian_hoe: number;
    const KEY_Georgian_in: number;
    const KEY_Georgian_jhan: number;
    const KEY_Georgian_jil: number;
    const KEY_Georgian_kan: number;
    const KEY_Georgian_khar: number;
    const KEY_Georgian_las: number;
    const KEY_Georgian_man: number;
    const KEY_Georgian_nar: number;
    const KEY_Georgian_on: number;
    const KEY_Georgian_par: number;
    const KEY_Georgian_phar: number;
    const KEY_Georgian_qar: number;
    const KEY_Georgian_rae: number;
    const KEY_Georgian_san: number;
    const KEY_Georgian_shin: number;
    const KEY_Georgian_tan: number;
    const KEY_Georgian_tar: number;
    const KEY_Georgian_un: number;
    const KEY_Georgian_vin: number;
    const KEY_Georgian_we: number;
    const KEY_Georgian_xan: number;
    const KEY_Georgian_zen: number;
    const KEY_Georgian_zhar: number;
    const KEY_Go: number;
    const KEY_GraphicsEditor: number;
    const KEY_Greek_ALPHA: number;
    const KEY_Greek_ALPHAaccent: number;
    const KEY_Greek_BETA: number;
    const KEY_Greek_CHI: number;
    const KEY_Greek_DELTA: number;
    const KEY_Greek_EPSILON: number;
    const KEY_Greek_EPSILONaccent: number;
    const KEY_Greek_ETA: number;
    const KEY_Greek_ETAaccent: number;
    const KEY_Greek_GAMMA: number;
    const KEY_Greek_IOTA: number;
    const KEY_Greek_IOTAaccent: number;
    const KEY_Greek_IOTAdiaeresis: number;
    const KEY_Greek_IOTAdieresis: number;
    const KEY_Greek_KAPPA: number;
    const KEY_Greek_LAMBDA: number;
    const KEY_Greek_LAMDA: number;
    const KEY_Greek_MU: number;
    const KEY_Greek_NU: number;
    const KEY_Greek_OMEGA: number;
    const KEY_Greek_OMEGAaccent: number;
    const KEY_Greek_OMICRON: number;
    const KEY_Greek_OMICRONaccent: number;
    const KEY_Greek_PHI: number;
    const KEY_Greek_PI: number;
    const KEY_Greek_PSI: number;
    const KEY_Greek_RHO: number;
    const KEY_Greek_SIGMA: number;
    const KEY_Greek_TAU: number;
    const KEY_Greek_THETA: number;
    const KEY_Greek_UPSILON: number;
    const KEY_Greek_UPSILONaccent: number;
    const KEY_Greek_UPSILONdieresis: number;
    const KEY_Greek_XI: number;
    const KEY_Greek_ZETA: number;
    const KEY_Greek_accentdieresis: number;
    const KEY_Greek_alpha: number;
    const KEY_Greek_alphaaccent: number;
    const KEY_Greek_beta: number;
    const KEY_Greek_chi: number;
    const KEY_Greek_delta: number;
    const KEY_Greek_epsilon: number;
    const KEY_Greek_epsilonaccent: number;
    const KEY_Greek_eta: number;
    const KEY_Greek_etaaccent: number;
    const KEY_Greek_finalsmallsigma: number;
    const KEY_Greek_gamma: number;
    const KEY_Greek_horizbar: number;
    const KEY_Greek_iota: number;
    const KEY_Greek_iotaaccent: number;
    const KEY_Greek_iotaaccentdieresis: number;
    const KEY_Greek_iotadieresis: number;
    const KEY_Greek_kappa: number;
    const KEY_Greek_lambda: number;
    const KEY_Greek_lamda: number;
    const KEY_Greek_mu: number;
    const KEY_Greek_nu: number;
    const KEY_Greek_omega: number;
    const KEY_Greek_omegaaccent: number;
    const KEY_Greek_omicron: number;
    const KEY_Greek_omicronaccent: number;
    const KEY_Greek_phi: number;
    const KEY_Greek_pi: number;
    const KEY_Greek_psi: number;
    const KEY_Greek_rho: number;
    const KEY_Greek_sigma: number;
    const KEY_Greek_switch: number;
    const KEY_Greek_tau: number;
    const KEY_Greek_theta: number;
    const KEY_Greek_upsilon: number;
    const KEY_Greek_upsilonaccent: number;
    const KEY_Greek_upsilonaccentdieresis: number;
    const KEY_Greek_upsilondieresis: number;
    const KEY_Greek_xi: number;
    const KEY_Greek_zeta: number;
    const KEY_Green: number;
    const KEY_H: number;
    const KEY_Hangul: number;
    const KEY_Hangul_A: number;
    const KEY_Hangul_AE: number;
    const KEY_Hangul_AraeA: number;
    const KEY_Hangul_AraeAE: number;
    const KEY_Hangul_Banja: number;
    const KEY_Hangul_Cieuc: number;
    const KEY_Hangul_Codeinput: number;
    const KEY_Hangul_Dikeud: number;
    const KEY_Hangul_E: number;
    const KEY_Hangul_EO: number;
    const KEY_Hangul_EU: number;
    const KEY_Hangul_End: number;
    const KEY_Hangul_Hanja: number;
    const KEY_Hangul_Hieuh: number;
    const KEY_Hangul_I: number;
    const KEY_Hangul_Ieung: number;
    const KEY_Hangul_J_Cieuc: number;
    const KEY_Hangul_J_Dikeud: number;
    const KEY_Hangul_J_Hieuh: number;
    const KEY_Hangul_J_Ieung: number;
    const KEY_Hangul_J_Jieuj: number;
    const KEY_Hangul_J_Khieuq: number;
    const KEY_Hangul_J_Kiyeog: number;
    const KEY_Hangul_J_KiyeogSios: number;
    const KEY_Hangul_J_KkogjiDalrinIeung: number;
    const KEY_Hangul_J_Mieum: number;
    const KEY_Hangul_J_Nieun: number;
    const KEY_Hangul_J_NieunHieuh: number;
    const KEY_Hangul_J_NieunJieuj: number;
    const KEY_Hangul_J_PanSios: number;
    const KEY_Hangul_J_Phieuf: number;
    const KEY_Hangul_J_Pieub: number;
    const KEY_Hangul_J_PieubSios: number;
    const KEY_Hangul_J_Rieul: number;
    const KEY_Hangul_J_RieulHieuh: number;
    const KEY_Hangul_J_RieulKiyeog: number;
    const KEY_Hangul_J_RieulMieum: number;
    const KEY_Hangul_J_RieulPhieuf: number;
    const KEY_Hangul_J_RieulPieub: number;
    const KEY_Hangul_J_RieulSios: number;
    const KEY_Hangul_J_RieulTieut: number;
    const KEY_Hangul_J_Sios: number;
    const KEY_Hangul_J_SsangKiyeog: number;
    const KEY_Hangul_J_SsangSios: number;
    const KEY_Hangul_J_Tieut: number;
    const KEY_Hangul_J_YeorinHieuh: number;
    const KEY_Hangul_Jamo: number;
    const KEY_Hangul_Jeonja: number;
    const KEY_Hangul_Jieuj: number;
    const KEY_Hangul_Khieuq: number;
    const KEY_Hangul_Kiyeog: number;
    const KEY_Hangul_KiyeogSios: number;
    const KEY_Hangul_KkogjiDalrinIeung: number;
    const KEY_Hangul_Mieum: number;
    const KEY_Hangul_MultipleCandidate: number;
    const KEY_Hangul_Nieun: number;
    const KEY_Hangul_NieunHieuh: number;
    const KEY_Hangul_NieunJieuj: number;
    const KEY_Hangul_O: number;
    const KEY_Hangul_OE: number;
    const KEY_Hangul_PanSios: number;
    const KEY_Hangul_Phieuf: number;
    const KEY_Hangul_Pieub: number;
    const KEY_Hangul_PieubSios: number;
    const KEY_Hangul_PostHanja: number;
    const KEY_Hangul_PreHanja: number;
    const KEY_Hangul_PreviousCandidate: number;
    const KEY_Hangul_Rieul: number;
    const KEY_Hangul_RieulHieuh: number;
    const KEY_Hangul_RieulKiyeog: number;
    const KEY_Hangul_RieulMieum: number;
    const KEY_Hangul_RieulPhieuf: number;
    const KEY_Hangul_RieulPieub: number;
    const KEY_Hangul_RieulSios: number;
    const KEY_Hangul_RieulTieut: number;
    const KEY_Hangul_RieulYeorinHieuh: number;
    const KEY_Hangul_Romaja: number;
    const KEY_Hangul_SingleCandidate: number;
    const KEY_Hangul_Sios: number;
    const KEY_Hangul_Special: number;
    const KEY_Hangul_SsangDikeud: number;
    const KEY_Hangul_SsangJieuj: number;
    const KEY_Hangul_SsangKiyeog: number;
    const KEY_Hangul_SsangPieub: number;
    const KEY_Hangul_SsangSios: number;
    const KEY_Hangul_Start: number;
    const KEY_Hangul_SunkyeongeumMieum: number;
    const KEY_Hangul_SunkyeongeumPhieuf: number;
    const KEY_Hangul_SunkyeongeumPieub: number;
    const KEY_Hangul_Tieut: number;
    const KEY_Hangul_U: number;
    const KEY_Hangul_WA: number;
    const KEY_Hangul_WAE: number;
    const KEY_Hangul_WE: number;
    const KEY_Hangul_WEO: number;
    const KEY_Hangul_WI: number;
    const KEY_Hangul_YA: number;
    const KEY_Hangul_YAE: number;
    const KEY_Hangul_YE: number;
    const KEY_Hangul_YEO: number;
    const KEY_Hangul_YI: number;
    const KEY_Hangul_YO: number;
    const KEY_Hangul_YU: number;
    const KEY_Hangul_YeorinHieuh: number;
    const KEY_Hangul_switch: number;
    const KEY_HangupPhone: number;
    const KEY_Hankaku: number;
    const KEY_Hcircumflex: number;
    const KEY_Hebrew_switch: number;
    const KEY_Help: number;
    const KEY_Henkan: number;
    const KEY_Henkan_Mode: number;
    const KEY_Hibernate: number;
    const KEY_Hiragana: number;
    const KEY_Hiragana_Katakana: number;
    const KEY_History: number;
    const KEY_Home: number;
    const KEY_HomePage: number;
    const KEY_HotLinks: number;
    const KEY_Hstroke: number;
    const KEY_Hyper_L: number;
    const KEY_Hyper_R: number;
    const KEY_I: number;
    const KEY_ISO_Center_Object: number;
    const KEY_ISO_Continuous_Underline: number;
    const KEY_ISO_Discontinuous_Underline: number;
    const KEY_ISO_Emphasize: number;
    const KEY_ISO_Enter: number;
    const KEY_ISO_Fast_Cursor_Down: number;
    const KEY_ISO_Fast_Cursor_Left: number;
    const KEY_ISO_Fast_Cursor_Right: number;
    const KEY_ISO_Fast_Cursor_Up: number;
    const KEY_ISO_First_Group: number;
    const KEY_ISO_First_Group_Lock: number;
    const KEY_ISO_Group_Latch: number;
    const KEY_ISO_Group_Lock: number;
    const KEY_ISO_Group_Shift: number;
    const KEY_ISO_Last_Group: number;
    const KEY_ISO_Last_Group_Lock: number;
    const KEY_ISO_Left_Tab: number;
    const KEY_ISO_Level2_Latch: number;
    const KEY_ISO_Level3_Latch: number;
    const KEY_ISO_Level3_Lock: number;
    const KEY_ISO_Level3_Shift: number;
    const KEY_ISO_Level5_Latch: number;
    const KEY_ISO_Level5_Lock: number;
    const KEY_ISO_Level5_Shift: number;
    const KEY_ISO_Lock: number;
    const KEY_ISO_Move_Line_Down: number;
    const KEY_ISO_Move_Line_Up: number;
    const KEY_ISO_Next_Group: number;
    const KEY_ISO_Next_Group_Lock: number;
    const KEY_ISO_Partial_Line_Down: number;
    const KEY_ISO_Partial_Line_Up: number;
    const KEY_ISO_Partial_Space_Left: number;
    const KEY_ISO_Partial_Space_Right: number;
    const KEY_ISO_Prev_Group: number;
    const KEY_ISO_Prev_Group_Lock: number;
    const KEY_ISO_Release_Both_Margins: number;
    const KEY_ISO_Release_Margin_Left: number;
    const KEY_ISO_Release_Margin_Right: number;
    const KEY_ISO_Set_Margin_Left: number;
    const KEY_ISO_Set_Margin_Right: number;
    const KEY_Iabovedot: number;
    const KEY_Iacute: number;
    const KEY_Ibelowdot: number;
    const KEY_Ibreve: number;
    const KEY_Icircumflex: number;
    const KEY_Idiaeresis: number;
    const KEY_Igrave: number;
    const KEY_Ihook: number;
    const KEY_Imacron: number;
    const KEY_Images: number;
    const KEY_Info: number;
    const KEY_Insert: number;
    const KEY_Iogonek: number;
    const KEY_Itilde: number;
    const KEY_J: number;
    const KEY_Jcircumflex: number;
    const KEY_Journal: number;
    const KEY_K: number;
    const KEY_KP_0: number;
    const KEY_KP_1: number;
    const KEY_KP_2: number;
    const KEY_KP_3: number;
    const KEY_KP_4: number;
    const KEY_KP_5: number;
    const KEY_KP_6: number;
    const KEY_KP_7: number;
    const KEY_KP_8: number;
    const KEY_KP_9: number;
    const KEY_KP_Add: number;
    const KEY_KP_Begin: number;
    const KEY_KP_Decimal: number;
    const KEY_KP_Delete: number;
    const KEY_KP_Divide: number;
    const KEY_KP_Down: number;
    const KEY_KP_End: number;
    const KEY_KP_Enter: number;
    const KEY_KP_Equal: number;
    const KEY_KP_F1: number;
    const KEY_KP_F2: number;
    const KEY_KP_F3: number;
    const KEY_KP_F4: number;
    const KEY_KP_Home: number;
    const KEY_KP_Insert: number;
    const KEY_KP_Left: number;
    const KEY_KP_Multiply: number;
    const KEY_KP_Next: number;
    const KEY_KP_Page_Down: number;
    const KEY_KP_Page_Up: number;
    const KEY_KP_Prior: number;
    const KEY_KP_Right: number;
    const KEY_KP_Separator: number;
    const KEY_KP_Space: number;
    const KEY_KP_Subtract: number;
    const KEY_KP_Tab: number;
    const KEY_KP_Up: number;
    const KEY_Kana_Lock: number;
    const KEY_Kana_Shift: number;
    const KEY_Kanji: number;
    const KEY_Kanji_Bangou: number;
    const KEY_Katakana: number;
    const KEY_KbdBrightnessDown: number;
    const KEY_KbdBrightnessUp: number;
    const KEY_KbdInputAssistAccept: number;
    const KEY_KbdInputAssistCancel: number;
    const KEY_KbdInputAssistNext: number;
    const KEY_KbdInputAssistNextgroup: number;
    const KEY_KbdInputAssistPrev: number;
    const KEY_KbdInputAssistPrevgroup: number;
    const KEY_KbdLcdMenu1: number;
    const KEY_KbdLcdMenu2: number;
    const KEY_KbdLcdMenu3: number;
    const KEY_KbdLcdMenu4: number;
    const KEY_KbdLcdMenu5: number;
    const KEY_KbdLightOnOff: number;
    const KEY_Kcedilla: number;
    const KEY_Keyboard: number;
    const KEY_Korean_Won: number;
    const KEY_L: number;
    const KEY_L1: number;
    const KEY_L10: number;
    const KEY_L2: number;
    const KEY_L3: number;
    const KEY_L4: number;
    const KEY_L5: number;
    const KEY_L6: number;
    const KEY_L7: number;
    const KEY_L8: number;
    const KEY_L9: number;
    const KEY_Lacute: number;
    const KEY_Last_Virtual_Screen: number;
    const KEY_Launch0: number;
    const KEY_Launch1: number;
    const KEY_Launch2: number;
    const KEY_Launch3: number;
    const KEY_Launch4: number;
    const KEY_Launch5: number;
    const KEY_Launch6: number;
    const KEY_Launch7: number;
    const KEY_Launch8: number;
    const KEY_Launch9: number;
    const KEY_LaunchA: number;
    const KEY_LaunchB: number;
    const KEY_LaunchC: number;
    const KEY_LaunchD: number;
    const KEY_LaunchE: number;
    const KEY_LaunchF: number;
    const KEY_Lbelowdot: number;
    const KEY_Lcaron: number;
    const KEY_Lcedilla: number;
    const KEY_Left: number;
    const KEY_LeftDown: number;
    const KEY_LeftUp: number;
    const KEY_LightBulb: number;
    const KEY_LightsToggle: number;
    const KEY_Linefeed: number;
    const KEY_LiraSign: number;
    const KEY_LogGrabInfo: number;
    const KEY_LogOff: number;
    const KEY_LogWindowTree: number;
    const KEY_Lstroke: number;
    const KEY_M: number;
    const KEY_Mabovedot: number;
    const KEY_Macedonia_DSE: number;
    const KEY_Macedonia_GJE: number;
    const KEY_Macedonia_KJE: number;
    const KEY_Macedonia_dse: number;
    const KEY_Macedonia_gje: number;
    const KEY_Macedonia_kje: number;
    const KEY_Macro1: number;
    const KEY_Macro10: number;
    const KEY_Macro11: number;
    const KEY_Macro12: number;
    const KEY_Macro13: number;
    const KEY_Macro14: number;
    const KEY_Macro15: number;
    const KEY_Macro16: number;
    const KEY_Macro17: number;
    const KEY_Macro18: number;
    const KEY_Macro19: number;
    const KEY_Macro2: number;
    const KEY_Macro20: number;
    const KEY_Macro21: number;
    const KEY_Macro22: number;
    const KEY_Macro23: number;
    const KEY_Macro24: number;
    const KEY_Macro25: number;
    const KEY_Macro26: number;
    const KEY_Macro27: number;
    const KEY_Macro28: number;
    const KEY_Macro29: number;
    const KEY_Macro3: number;
    const KEY_Macro30: number;
    const KEY_Macro4: number;
    const KEY_Macro5: number;
    const KEY_Macro6: number;
    const KEY_Macro7: number;
    const KEY_Macro8: number;
    const KEY_Macro9: number;
    const KEY_MacroPreset1: number;
    const KEY_MacroPreset2: number;
    const KEY_MacroPreset3: number;
    const KEY_MacroPresetCycle: number;
    const KEY_MacroRecordStart: number;
    const KEY_MacroRecordStop: number;
    const KEY_Mae_Koho: number;
    const KEY_Mail: number;
    const KEY_MailForward: number;
    const KEY_MarkWaypoint: number;
    const KEY_Market: number;
    const KEY_Massyo: number;
    const KEY_MediaRepeat: number;
    const KEY_MediaTopMenu: number;
    const KEY_Meeting: number;
    const KEY_Memo: number;
    const KEY_Menu: number;
    const KEY_MenuKB: number;
    const KEY_MenuPB: number;
    const KEY_Messenger: number;
    const KEY_Meta_L: number;
    const KEY_Meta_R: number;
    const KEY_MillSign: number;
    const KEY_ModeLock: number;
    const KEY_Mode_switch: number;
    const KEY_MonBrightnessCycle: number;
    const KEY_MonBrightnessDown: number;
    const KEY_MonBrightnessUp: number;
    const KEY_MouseKeys_Accel_Enable: number;
    const KEY_MouseKeys_Enable: number;
    const KEY_Muhenkan: number;
    const KEY_Multi_key: number;
    const KEY_MultipleCandidate: number;
    const KEY_Music: number;
    const KEY_MyComputer: number;
    const KEY_MySites: number;
    const KEY_N: number;
    const KEY_Nacute: number;
    const KEY_NairaSign: number;
    const KEY_NavChart: number;
    const KEY_NavInfo: number;
    const KEY_Ncaron: number;
    const KEY_Ncedilla: number;
    const KEY_New: number;
    const KEY_NewSheqelSign: number;
    const KEY_News: number;
    const KEY_Next: number;
    const KEY_NextElement: number;
    const KEY_NextFavorite: number;
    const KEY_Next_VMode: number;
    const KEY_Next_Virtual_Screen: number;
    const KEY_NotificationCenter: number;
    const KEY_Ntilde: number;
    const KEY_Num_Lock: number;
    const KEY_Numeric0: number;
    const KEY_Numeric1: number;
    const KEY_Numeric11: number;
    const KEY_Numeric12: number;
    const KEY_Numeric2: number;
    const KEY_Numeric3: number;
    const KEY_Numeric4: number;
    const KEY_Numeric5: number;
    const KEY_Numeric6: number;
    const KEY_Numeric7: number;
    const KEY_Numeric8: number;
    const KEY_Numeric9: number;
    const KEY_NumericA: number;
    const KEY_NumericB: number;
    const KEY_NumericC: number;
    const KEY_NumericD: number;
    const KEY_NumericPound: number;
    const KEY_NumericStar: number;
    const KEY_O: number;
    const KEY_OE: number;
    const KEY_Oacute: number;
    const KEY_Obarred: number;
    const KEY_Obelowdot: number;
    const KEY_Ocaron: number;
    const KEY_Ocircumflex: number;
    const KEY_Ocircumflexacute: number;
    const KEY_Ocircumflexbelowdot: number;
    const KEY_Ocircumflexgrave: number;
    const KEY_Ocircumflexhook: number;
    const KEY_Ocircumflextilde: number;
    const KEY_Odiaeresis: number;
    const KEY_Odoubleacute: number;
    const KEY_OfficeHome: number;
    const KEY_Ograve: number;
    const KEY_Ohook: number;
    const KEY_Ohorn: number;
    const KEY_Ohornacute: number;
    const KEY_Ohornbelowdot: number;
    const KEY_Ohorngrave: number;
    const KEY_Ohornhook: number;
    const KEY_Ohorntilde: number;
    const KEY_Omacron: number;
    const KEY_OnScreenKeyboard: number;
    const KEY_Ooblique: number;
    const KEY_Open: number;
    const KEY_OpenURL: number;
    const KEY_Option: number;
    const KEY_Oslash: number;
    const KEY_Otilde: number;
    const KEY_Overlay1_Enable: number;
    const KEY_Overlay2_Enable: number;
    const KEY_P: number;
    const KEY_Pabovedot: number;
    const KEY_Page_Down: number;
    const KEY_Page_Up: number;
    const KEY_Paste: number;
    const KEY_Pause: number;
    const KEY_PauseRecord: number;
    const KEY_PesetaSign: number;
    const KEY_Phone: number;
    const KEY_PickupPhone: number;
    const KEY_Pictures: number;
    const KEY_Pointer_Accelerate: number;
    const KEY_Pointer_Button1: number;
    const KEY_Pointer_Button2: number;
    const KEY_Pointer_Button3: number;
    const KEY_Pointer_Button4: number;
    const KEY_Pointer_Button5: number;
    const KEY_Pointer_Button_Dflt: number;
    const KEY_Pointer_DblClick1: number;
    const KEY_Pointer_DblClick2: number;
    const KEY_Pointer_DblClick3: number;
    const KEY_Pointer_DblClick4: number;
    const KEY_Pointer_DblClick5: number;
    const KEY_Pointer_DblClick_Dflt: number;
    const KEY_Pointer_DfltBtnNext: number;
    const KEY_Pointer_DfltBtnPrev: number;
    const KEY_Pointer_Down: number;
    const KEY_Pointer_DownLeft: number;
    const KEY_Pointer_DownRight: number;
    const KEY_Pointer_Drag1: number;
    const KEY_Pointer_Drag2: number;
    const KEY_Pointer_Drag3: number;
    const KEY_Pointer_Drag4: number;
    const KEY_Pointer_Drag5: number;
    const KEY_Pointer_Drag_Dflt: number;
    const KEY_Pointer_EnableKeys: number;
    const KEY_Pointer_Left: number;
    const KEY_Pointer_Right: number;
    const KEY_Pointer_Up: number;
    const KEY_Pointer_UpLeft: number;
    const KEY_Pointer_UpRight: number;
    const KEY_PowerDown: number;
    const KEY_PowerOff: number;
    const KEY_Presentation: number;
    const KEY_Prev_VMode: number;
    const KEY_Prev_Virtual_Screen: number;
    const KEY_PreviousCandidate: number;
    const KEY_PreviousElement: number;
    const KEY_Print: number;
    const KEY_Prior: number;
    const KEY_PrivacyScreenToggle: number;
    const KEY_Q: number;
    const KEY_R: number;
    const KEY_R1: number;
    const KEY_R10: number;
    const KEY_R11: number;
    const KEY_R12: number;
    const KEY_R13: number;
    const KEY_R14: number;
    const KEY_R15: number;
    const KEY_R2: number;
    const KEY_R3: number;
    const KEY_R4: number;
    const KEY_R5: number;
    const KEY_R6: number;
    const KEY_R7: number;
    const KEY_R8: number;
    const KEY_R9: number;
    const KEY_RFKill: number;
    const KEY_Racute: number;
    const KEY_RadarOverlay: number;
    const KEY_Rcaron: number;
    const KEY_Rcedilla: number;
    const KEY_Red: number;
    const KEY_Redo: number;
    const KEY_Refresh: number;
    const KEY_RefreshRateToggle: number;
    const KEY_Reload: number;
    const KEY_RepeatKeys_Enable: number;
    const KEY_Reply: number;
    const KEY_Return: number;
    const KEY_Right: number;
    const KEY_RightDown: number;
    const KEY_RightUp: number;
    const KEY_RockerDown: number;
    const KEY_RockerEnter: number;
    const KEY_RockerUp: number;
    const KEY_Romaji: number;
    const KEY_RootMenu: number;
    const KEY_RotateWindows: number;
    const KEY_RotationKB: number;
    const KEY_RotationLockToggle: number;
    const KEY_RotationPB: number;
    const KEY_RupeeSign: number;
    const KEY_S: number;
    const KEY_SCHWA: number;
    const KEY_Sabovedot: number;
    const KEY_Sacute: number;
    const KEY_Save: number;
    const KEY_Scaron: number;
    const KEY_Scedilla: number;
    const KEY_Scircumflex: number;
    const KEY_ScreenSaver: number;
    const KEY_Screensaver: number;
    const KEY_ScrollClick: number;
    const KEY_ScrollDown: number;
    const KEY_ScrollUp: number;
    const KEY_Scroll_Lock: number;
    const KEY_Search: number;
    const KEY_Select: number;
    const KEY_SelectButton: number;
    const KEY_SelectiveScreenshot: number;
    const KEY_Send: number;
    const KEY_Serbian_DJE: number;
    const KEY_Serbian_DZE: number;
    const KEY_Serbian_JE: number;
    const KEY_Serbian_LJE: number;
    const KEY_Serbian_NJE: number;
    const KEY_Serbian_TSHE: number;
    const KEY_Serbian_dje: number;
    const KEY_Serbian_dze: number;
    const KEY_Serbian_je: number;
    const KEY_Serbian_lje: number;
    const KEY_Serbian_nje: number;
    const KEY_Serbian_tshe: number;
    const KEY_Shift_L: number;
    const KEY_Shift_Lock: number;
    const KEY_Shift_R: number;
    const KEY_Shop: number;
    const KEY_SidevuSonar: number;
    const KEY_SingleCandidate: number;
    const KEY_SingleRangeRadar: number;
    const KEY_Sinh_a: number;
    const KEY_Sinh_aa: number;
    const KEY_Sinh_aa2: number;
    const KEY_Sinh_ae: number;
    const KEY_Sinh_ae2: number;
    const KEY_Sinh_aee: number;
    const KEY_Sinh_aee2: number;
    const KEY_Sinh_ai: number;
    const KEY_Sinh_ai2: number;
    const KEY_Sinh_al: number;
    const KEY_Sinh_au: number;
    const KEY_Sinh_au2: number;
    const KEY_Sinh_ba: number;
    const KEY_Sinh_bha: number;
    const KEY_Sinh_ca: number;
    const KEY_Sinh_cha: number;
    const KEY_Sinh_dda: number;
    const KEY_Sinh_ddha: number;
    const KEY_Sinh_dha: number;
    const KEY_Sinh_dhha: number;
    const KEY_Sinh_e: number;
    const KEY_Sinh_e2: number;
    const KEY_Sinh_ee: number;
    const KEY_Sinh_ee2: number;
    const KEY_Sinh_fa: number;
    const KEY_Sinh_ga: number;
    const KEY_Sinh_gha: number;
    const KEY_Sinh_h2: number;
    const KEY_Sinh_ha: number;
    const KEY_Sinh_i: number;
    const KEY_Sinh_i2: number;
    const KEY_Sinh_ii: number;
    const KEY_Sinh_ii2: number;
    const KEY_Sinh_ja: number;
    const KEY_Sinh_jha: number;
    const KEY_Sinh_jnya: number;
    const KEY_Sinh_ka: number;
    const KEY_Sinh_kha: number;
    const KEY_Sinh_kunddaliya: number;
    const KEY_Sinh_la: number;
    const KEY_Sinh_lla: number;
    const KEY_Sinh_lu: number;
    const KEY_Sinh_lu2: number;
    const KEY_Sinh_luu: number;
    const KEY_Sinh_luu2: number;
    const KEY_Sinh_ma: number;
    const KEY_Sinh_mba: number;
    const KEY_Sinh_na: number;
    const KEY_Sinh_ndda: number;
    const KEY_Sinh_ndha: number;
    const KEY_Sinh_ng: number;
    const KEY_Sinh_ng2: number;
    const KEY_Sinh_nga: number;
    const KEY_Sinh_nja: number;
    const KEY_Sinh_nna: number;
    const KEY_Sinh_nya: number;
    const KEY_Sinh_o: number;
    const KEY_Sinh_o2: number;
    const KEY_Sinh_oo: number;
    const KEY_Sinh_oo2: number;
    const KEY_Sinh_pa: number;
    const KEY_Sinh_pha: number;
    const KEY_Sinh_ra: number;
    const KEY_Sinh_ri: number;
    const KEY_Sinh_rii: number;
    const KEY_Sinh_ru2: number;
    const KEY_Sinh_ruu2: number;
    const KEY_Sinh_sa: number;
    const KEY_Sinh_sha: number;
    const KEY_Sinh_ssha: number;
    const KEY_Sinh_tha: number;
    const KEY_Sinh_thha: number;
    const KEY_Sinh_tta: number;
    const KEY_Sinh_ttha: number;
    const KEY_Sinh_u: number;
    const KEY_Sinh_u2: number;
    const KEY_Sinh_uu: number;
    const KEY_Sinh_uu2: number;
    const KEY_Sinh_va: number;
    const KEY_Sinh_ya: number;
    const KEY_Sleep: number;
    const KEY_SlowKeys_Enable: number;
    const KEY_SlowReverse: number;
    const KEY_Sos: number;
    const KEY_Spell: number;
    const KEY_SpellCheck: number;
    const KEY_SplitScreen: number;
    const KEY_Standby: number;
    const KEY_Start: number;
    const KEY_StickyKeys_Enable: number;
    const KEY_Stop: number;
    const KEY_StopRecord: number;
    const KEY_Subtitle: number;
    const KEY_Super_L: number;
    const KEY_Super_R: number;
    const KEY_Support: number;
    const KEY_Suspend: number;
    const KEY_Switch_VT_1: number;
    const KEY_Switch_VT_10: number;
    const KEY_Switch_VT_11: number;
    const KEY_Switch_VT_12: number;
    const KEY_Switch_VT_2: number;
    const KEY_Switch_VT_3: number;
    const KEY_Switch_VT_4: number;
    const KEY_Switch_VT_5: number;
    const KEY_Switch_VT_6: number;
    const KEY_Switch_VT_7: number;
    const KEY_Switch_VT_8: number;
    const KEY_Switch_VT_9: number;
    const KEY_Sys_Req: number;
    const KEY_T: number;
    const KEY_THORN: number;
    const KEY_Tab: number;
    const KEY_Tabovedot: number;
    const KEY_TaskPane: number;
    const KEY_Taskmanager: number;
    const KEY_Tcaron: number;
    const KEY_Tcedilla: number;
    const KEY_Terminal: number;
    const KEY_Terminate_Server: number;
    const KEY_Thai_baht: number;
    const KEY_Thai_bobaimai: number;
    const KEY_Thai_chochan: number;
    const KEY_Thai_chochang: number;
    const KEY_Thai_choching: number;
    const KEY_Thai_chochoe: number;
    const KEY_Thai_dochada: number;
    const KEY_Thai_dodek: number;
    const KEY_Thai_fofa: number;
    const KEY_Thai_fofan: number;
    const KEY_Thai_hohip: number;
    const KEY_Thai_honokhuk: number;
    const KEY_Thai_khokhai: number;
    const KEY_Thai_khokhon: number;
    const KEY_Thai_khokhuat: number;
    const KEY_Thai_khokhwai: number;
    const KEY_Thai_khorakhang: number;
    const KEY_Thai_kokai: number;
    const KEY_Thai_lakkhangyao: number;
    const KEY_Thai_lekchet: number;
    const KEY_Thai_lekha: number;
    const KEY_Thai_lekhok: number;
    const KEY_Thai_lekkao: number;
    const KEY_Thai_leknung: number;
    const KEY_Thai_lekpaet: number;
    const KEY_Thai_leksam: number;
    const KEY_Thai_leksi: number;
    const KEY_Thai_leksong: number;
    const KEY_Thai_leksun: number;
    const KEY_Thai_lochula: number;
    const KEY_Thai_loling: number;
    const KEY_Thai_lu: number;
    const KEY_Thai_maichattawa: number;
    const KEY_Thai_maiek: number;
    const KEY_Thai_maihanakat: number;
    const KEY_Thai_maihanakat_maitho: number;
    const KEY_Thai_maitaikhu: number;
    const KEY_Thai_maitho: number;
    const KEY_Thai_maitri: number;
    const KEY_Thai_maiyamok: number;
    const KEY_Thai_moma: number;
    const KEY_Thai_ngongu: number;
    const KEY_Thai_nikhahit: number;
    const KEY_Thai_nonen: number;
    const KEY_Thai_nonu: number;
    const KEY_Thai_oang: number;
    const KEY_Thai_paiyannoi: number;
    const KEY_Thai_phinthu: number;
    const KEY_Thai_phophan: number;
    const KEY_Thai_phophung: number;
    const KEY_Thai_phosamphao: number;
    const KEY_Thai_popla: number;
    const KEY_Thai_rorua: number;
    const KEY_Thai_ru: number;
    const KEY_Thai_saraa: number;
    const KEY_Thai_saraaa: number;
    const KEY_Thai_saraae: number;
    const KEY_Thai_saraaimaimalai: number;
    const KEY_Thai_saraaimaimuan: number;
    const KEY_Thai_saraam: number;
    const KEY_Thai_sarae: number;
    const KEY_Thai_sarai: number;
    const KEY_Thai_saraii: number;
    const KEY_Thai_sarao: number;
    const KEY_Thai_sarau: number;
    const KEY_Thai_saraue: number;
    const KEY_Thai_sarauee: number;
    const KEY_Thai_sarauu: number;
    const KEY_Thai_sorusi: number;
    const KEY_Thai_sosala: number;
    const KEY_Thai_soso: number;
    const KEY_Thai_sosua: number;
    const KEY_Thai_thanthakhat: number;
    const KEY_Thai_thonangmontho: number;
    const KEY_Thai_thophuthao: number;
    const KEY_Thai_thothahan: number;
    const KEY_Thai_thothan: number;
    const KEY_Thai_thothong: number;
    const KEY_Thai_thothung: number;
    const KEY_Thai_topatak: number;
    const KEY_Thai_totao: number;
    const KEY_Thai_wowaen: number;
    const KEY_Thai_yoyak: number;
    const KEY_Thai_yoying: number;
    const KEY_Thorn: number;
    const KEY_Time: number;
    const KEY_ToDoList: number;
    const KEY_Tools: number;
    const KEY_TopMenu: number;
    const KEY_TouchpadOff: number;
    const KEY_TouchpadOn: number;
    const KEY_TouchpadToggle: number;
    const KEY_Touroku: number;
    const KEY_TraditionalSonar: number;
    const KEY_Travel: number;
    const KEY_Tslash: number;
    const KEY_U: number;
    const KEY_UWB: number;
    const KEY_Uacute: number;
    const KEY_Ubelowdot: number;
    const KEY_Ubreve: number;
    const KEY_Ucircumflex: number;
    const KEY_Udiaeresis: number;
    const KEY_Udoubleacute: number;
    const KEY_Ugrave: number;
    const KEY_Uhook: number;
    const KEY_Uhorn: number;
    const KEY_Uhornacute: number;
    const KEY_Uhornbelowdot: number;
    const KEY_Uhorngrave: number;
    const KEY_Uhornhook: number;
    const KEY_Uhorntilde: number;
    const KEY_Ukrainian_GHE_WITH_UPTURN: number;
    const KEY_Ukrainian_I: number;
    const KEY_Ukrainian_IE: number;
    const KEY_Ukrainian_YI: number;
    const KEY_Ukrainian_ghe_with_upturn: number;
    const KEY_Ukrainian_i: number;
    const KEY_Ukrainian_ie: number;
    const KEY_Ukrainian_yi: number;
    const KEY_Ukranian_I: number;
    const KEY_Ukranian_JE: number;
    const KEY_Ukranian_YI: number;
    const KEY_Ukranian_i: number;
    const KEY_Ukranian_je: number;
    const KEY_Ukranian_yi: number;
    const KEY_Umacron: number;
    const KEY_Undo: number;
    const KEY_Ungrab: number;
    const KEY_Unmute: number;
    const KEY_Uogonek: number;
    const KEY_Up: number;
    const KEY_Uring: number;
    const KEY_User1KB: number;
    const KEY_User2KB: number;
    const KEY_UserPB: number;
    const KEY_Utilde: number;
    const KEY_V: number;
    const KEY_VOD: number;
    const KEY_VendorHome: number;
    const KEY_Video: number;
    const KEY_VideoPhone: number;
    const KEY_View: number;
    const KEY_VoiceCommand: number;
    const KEY_Voicemail: number;
    const KEY_VoidSymbol: number;
    const KEY_W: number;
    const KEY_WLAN: number;
    const KEY_WPSButton: number;
    const KEY_WWAN: number;
    const KEY_WWW: number;
    const KEY_Wacute: number;
    const KEY_WakeUp: number;
    const KEY_Wcircumflex: number;
    const KEY_Wdiaeresis: number;
    const KEY_WebCam: number;
    const KEY_Wgrave: number;
    const KEY_WheelButton: number;
    const KEY_WindowClear: number;
    const KEY_WonSign: number;
    const KEY_Word: number;
    const KEY_X: number;
    const KEY_Xabovedot: number;
    const KEY_Xfer: number;
    const KEY_Y: number;
    const KEY_Yacute: number;
    const KEY_Ybelowdot: number;
    const KEY_Ycircumflex: number;
    const KEY_Ydiaeresis: number;
    const KEY_Yellow: number;
    const KEY_Ygrave: number;
    const KEY_Yhook: number;
    const KEY_Ytilde: number;
    const KEY_Z: number;
    const KEY_Zabovedot: number;
    const KEY_Zacute: number;
    const KEY_Zcaron: number;
    const KEY_Zen_Koho: number;
    const KEY_Zenkaku: number;
    const KEY_Zenkaku_Hankaku: number;
    const KEY_ZoomIn: number;
    const KEY_ZoomOut: number;
    const KEY_ZoomReset: number;
    const KEY_Zstroke: number;
    const KEY_a: number;
    const KEY_aacute: number;
    const KEY_abelowdot: number;
    const KEY_abovedot: number;
    const KEY_abreve: number;
    const KEY_abreveacute: number;
    const KEY_abrevebelowdot: number;
    const KEY_abrevegrave: number;
    const KEY_abrevehook: number;
    const KEY_abrevetilde: number;
    const KEY_acircumflex: number;
    const KEY_acircumflexacute: number;
    const KEY_acircumflexbelowdot: number;
    const KEY_acircumflexgrave: number;
    const KEY_acircumflexhook: number;
    const KEY_acircumflextilde: number;
    const KEY_acute: number;
    const KEY_adiaeresis: number;
    const KEY_ae: number;
    const KEY_agrave: number;
    const KEY_ahook: number;
    const KEY_amacron: number;
    const KEY_ampersand: number;
    const KEY_aogonek: number;
    const KEY_apostrophe: number;
    const KEY_approxeq: number;
    const KEY_approximate: number;
    const KEY_aring: number;
    const KEY_asciicircum: number;
    const KEY_asciitilde: number;
    const KEY_asterisk: number;
    const KEY_at: number;
    const KEY_atilde: number;
    const KEY_b: number;
    const KEY_babovedot: number;
    const KEY_backslash: number;
    const KEY_ballotcross: number;
    const KEY_bar: number;
    const KEY_because: number;
    const KEY_blank: number;
    const KEY_botintegral: number;
    const KEY_botleftparens: number;
    const KEY_botleftsqbracket: number;
    const KEY_botleftsummation: number;
    const KEY_botrightparens: number;
    const KEY_botrightsqbracket: number;
    const KEY_botrightsummation: number;
    const KEY_bott: number;
    const KEY_botvertsummationconnector: number;
    const KEY_braceleft: number;
    const KEY_braceright: number;
    const KEY_bracketleft: number;
    const KEY_bracketright: number;
    const KEY_braille_blank: number;
    const KEY_braille_dot_1: number;
    const KEY_braille_dot_10: number;
    const KEY_braille_dot_2: number;
    const KEY_braille_dot_3: number;
    const KEY_braille_dot_4: number;
    const KEY_braille_dot_5: number;
    const KEY_braille_dot_6: number;
    const KEY_braille_dot_7: number;
    const KEY_braille_dot_8: number;
    const KEY_braille_dot_9: number;
    const KEY_braille_dots_1: number;
    const KEY_braille_dots_12: number;
    const KEY_braille_dots_123: number;
    const KEY_braille_dots_1234: number;
    const KEY_braille_dots_12345: number;
    const KEY_braille_dots_123456: number;
    const KEY_braille_dots_1234567: number;
    const KEY_braille_dots_12345678: number;
    const KEY_braille_dots_1234568: number;
    const KEY_braille_dots_123457: number;
    const KEY_braille_dots_1234578: number;
    const KEY_braille_dots_123458: number;
    const KEY_braille_dots_12346: number;
    const KEY_braille_dots_123467: number;
    const KEY_braille_dots_1234678: number;
    const KEY_braille_dots_123468: number;
    const KEY_braille_dots_12347: number;
    const KEY_braille_dots_123478: number;
    const KEY_braille_dots_12348: number;
    const KEY_braille_dots_1235: number;
    const KEY_braille_dots_12356: number;
    const KEY_braille_dots_123567: number;
    const KEY_braille_dots_1235678: number;
    const KEY_braille_dots_123568: number;
    const KEY_braille_dots_12357: number;
    const KEY_braille_dots_123578: number;
    const KEY_braille_dots_12358: number;
    const KEY_braille_dots_1236: number;
    const KEY_braille_dots_12367: number;
    const KEY_braille_dots_123678: number;
    const KEY_braille_dots_12368: number;
    const KEY_braille_dots_1237: number;
    const KEY_braille_dots_12378: number;
    const KEY_braille_dots_1238: number;
    const KEY_braille_dots_124: number;
    const KEY_braille_dots_1245: number;
    const KEY_braille_dots_12456: number;
    const KEY_braille_dots_124567: number;
    const KEY_braille_dots_1245678: number;
    const KEY_braille_dots_124568: number;
    const KEY_braille_dots_12457: number;
    const KEY_braille_dots_124578: number;
    const KEY_braille_dots_12458: number;
    const KEY_braille_dots_1246: number;
    const KEY_braille_dots_12467: number;
    const KEY_braille_dots_124678: number;
    const KEY_braille_dots_12468: number;
    const KEY_braille_dots_1247: number;
    const KEY_braille_dots_12478: number;
    const KEY_braille_dots_1248: number;
    const KEY_braille_dots_125: number;
    const KEY_braille_dots_1256: number;
    const KEY_braille_dots_12567: number;
    const KEY_braille_dots_125678: number;
    const KEY_braille_dots_12568: number;
    const KEY_braille_dots_1257: number;
    const KEY_braille_dots_12578: number;
    const KEY_braille_dots_1258: number;
    const KEY_braille_dots_126: number;
    const KEY_braille_dots_1267: number;
    const KEY_braille_dots_12678: number;
    const KEY_braille_dots_1268: number;
    const KEY_braille_dots_127: number;
    const KEY_braille_dots_1278: number;
    const KEY_braille_dots_128: number;
    const KEY_braille_dots_13: number;
    const KEY_braille_dots_134: number;
    const KEY_braille_dots_1345: number;
    const KEY_braille_dots_13456: number;
    const KEY_braille_dots_134567: number;
    const KEY_braille_dots_1345678: number;
    const KEY_braille_dots_134568: number;
    const KEY_braille_dots_13457: number;
    const KEY_braille_dots_134578: number;
    const KEY_braille_dots_13458: number;
    const KEY_braille_dots_1346: number;
    const KEY_braille_dots_13467: number;
    const KEY_braille_dots_134678: number;
    const KEY_braille_dots_13468: number;
    const KEY_braille_dots_1347: number;
    const KEY_braille_dots_13478: number;
    const KEY_braille_dots_1348: number;
    const KEY_braille_dots_135: number;
    const KEY_braille_dots_1356: number;
    const KEY_braille_dots_13567: number;
    const KEY_braille_dots_135678: number;
    const KEY_braille_dots_13568: number;
    const KEY_braille_dots_1357: number;
    const KEY_braille_dots_13578: number;
    const KEY_braille_dots_1358: number;
    const KEY_braille_dots_136: number;
    const KEY_braille_dots_1367: number;
    const KEY_braille_dots_13678: number;
    const KEY_braille_dots_1368: number;
    const KEY_braille_dots_137: number;
    const KEY_braille_dots_1378: number;
    const KEY_braille_dots_138: number;
    const KEY_braille_dots_14: number;
    const KEY_braille_dots_145: number;
    const KEY_braille_dots_1456: number;
    const KEY_braille_dots_14567: number;
    const KEY_braille_dots_145678: number;
    const KEY_braille_dots_14568: number;
    const KEY_braille_dots_1457: number;
    const KEY_braille_dots_14578: number;
    const KEY_braille_dots_1458: number;
    const KEY_braille_dots_146: number;
    const KEY_braille_dots_1467: number;
    const KEY_braille_dots_14678: number;
    const KEY_braille_dots_1468: number;
    const KEY_braille_dots_147: number;
    const KEY_braille_dots_1478: number;
    const KEY_braille_dots_148: number;
    const KEY_braille_dots_15: number;
    const KEY_braille_dots_156: number;
    const KEY_braille_dots_1567: number;
    const KEY_braille_dots_15678: number;
    const KEY_braille_dots_1568: number;
    const KEY_braille_dots_157: number;
    const KEY_braille_dots_1578: number;
    const KEY_braille_dots_158: number;
    const KEY_braille_dots_16: number;
    const KEY_braille_dots_167: number;
    const KEY_braille_dots_1678: number;
    const KEY_braille_dots_168: number;
    const KEY_braille_dots_17: number;
    const KEY_braille_dots_178: number;
    const KEY_braille_dots_18: number;
    const KEY_braille_dots_2: number;
    const KEY_braille_dots_23: number;
    const KEY_braille_dots_234: number;
    const KEY_braille_dots_2345: number;
    const KEY_braille_dots_23456: number;
    const KEY_braille_dots_234567: number;
    const KEY_braille_dots_2345678: number;
    const KEY_braille_dots_234568: number;
    const KEY_braille_dots_23457: number;
    const KEY_braille_dots_234578: number;
    const KEY_braille_dots_23458: number;
    const KEY_braille_dots_2346: number;
    const KEY_braille_dots_23467: number;
    const KEY_braille_dots_234678: number;
    const KEY_braille_dots_23468: number;
    const KEY_braille_dots_2347: number;
    const KEY_braille_dots_23478: number;
    const KEY_braille_dots_2348: number;
    const KEY_braille_dots_235: number;
    const KEY_braille_dots_2356: number;
    const KEY_braille_dots_23567: number;
    const KEY_braille_dots_235678: number;
    const KEY_braille_dots_23568: number;
    const KEY_braille_dots_2357: number;
    const KEY_braille_dots_23578: number;
    const KEY_braille_dots_2358: number;
    const KEY_braille_dots_236: number;
    const KEY_braille_dots_2367: number;
    const KEY_braille_dots_23678: number;
    const KEY_braille_dots_2368: number;
    const KEY_braille_dots_237: number;
    const KEY_braille_dots_2378: number;
    const KEY_braille_dots_238: number;
    const KEY_braille_dots_24: number;
    const KEY_braille_dots_245: number;
    const KEY_braille_dots_2456: number;
    const KEY_braille_dots_24567: number;
    const KEY_braille_dots_245678: number;
    const KEY_braille_dots_24568: number;
    const KEY_braille_dots_2457: number;
    const KEY_braille_dots_24578: number;
    const KEY_braille_dots_2458: number;
    const KEY_braille_dots_246: number;
    const KEY_braille_dots_2467: number;
    const KEY_braille_dots_24678: number;
    const KEY_braille_dots_2468: number;
    const KEY_braille_dots_247: number;
    const KEY_braille_dots_2478: number;
    const KEY_braille_dots_248: number;
    const KEY_braille_dots_25: number;
    const KEY_braille_dots_256: number;
    const KEY_braille_dots_2567: number;
    const KEY_braille_dots_25678: number;
    const KEY_braille_dots_2568: number;
    const KEY_braille_dots_257: number;
    const KEY_braille_dots_2578: number;
    const KEY_braille_dots_258: number;
    const KEY_braille_dots_26: number;
    const KEY_braille_dots_267: number;
    const KEY_braille_dots_2678: number;
    const KEY_braille_dots_268: number;
    const KEY_braille_dots_27: number;
    const KEY_braille_dots_278: number;
    const KEY_braille_dots_28: number;
    const KEY_braille_dots_3: number;
    const KEY_braille_dots_34: number;
    const KEY_braille_dots_345: number;
    const KEY_braille_dots_3456: number;
    const KEY_braille_dots_34567: number;
    const KEY_braille_dots_345678: number;
    const KEY_braille_dots_34568: number;
    const KEY_braille_dots_3457: number;
    const KEY_braille_dots_34578: number;
    const KEY_braille_dots_3458: number;
    const KEY_braille_dots_346: number;
    const KEY_braille_dots_3467: number;
    const KEY_braille_dots_34678: number;
    const KEY_braille_dots_3468: number;
    const KEY_braille_dots_347: number;
    const KEY_braille_dots_3478: number;
    const KEY_braille_dots_348: number;
    const KEY_braille_dots_35: number;
    const KEY_braille_dots_356: number;
    const KEY_braille_dots_3567: number;
    const KEY_braille_dots_35678: number;
    const KEY_braille_dots_3568: number;
    const KEY_braille_dots_357: number;
    const KEY_braille_dots_3578: number;
    const KEY_braille_dots_358: number;
    const KEY_braille_dots_36: number;
    const KEY_braille_dots_367: number;
    const KEY_braille_dots_3678: number;
    const KEY_braille_dots_368: number;
    const KEY_braille_dots_37: number;
    const KEY_braille_dots_378: number;
    const KEY_braille_dots_38: number;
    const KEY_braille_dots_4: number;
    const KEY_braille_dots_45: number;
    const KEY_braille_dots_456: number;
    const KEY_braille_dots_4567: number;
    const KEY_braille_dots_45678: number;
    const KEY_braille_dots_4568: number;
    const KEY_braille_dots_457: number;
    const KEY_braille_dots_4578: number;
    const KEY_braille_dots_458: number;
    const KEY_braille_dots_46: number;
    const KEY_braille_dots_467: number;
    const KEY_braille_dots_4678: number;
    const KEY_braille_dots_468: number;
    const KEY_braille_dots_47: number;
    const KEY_braille_dots_478: number;
    const KEY_braille_dots_48: number;
    const KEY_braille_dots_5: number;
    const KEY_braille_dots_56: number;
    const KEY_braille_dots_567: number;
    const KEY_braille_dots_5678: number;
    const KEY_braille_dots_568: number;
    const KEY_braille_dots_57: number;
    const KEY_braille_dots_578: number;
    const KEY_braille_dots_58: number;
    const KEY_braille_dots_6: number;
    const KEY_braille_dots_67: number;
    const KEY_braille_dots_678: number;
    const KEY_braille_dots_68: number;
    const KEY_braille_dots_7: number;
    const KEY_braille_dots_78: number;
    const KEY_braille_dots_8: number;
    const KEY_breve: number;
    const KEY_brokenbar: number;
    const KEY_c: number;
    const KEY_c_h: number;
    const KEY_cabovedot: number;
    const KEY_cacute: number;
    const KEY_careof: number;
    const KEY_caret: number;
    const KEY_caron: number;
    const KEY_ccaron: number;
    const KEY_ccedilla: number;
    const KEY_ccircumflex: number;
    const KEY_cedilla: number;
    const KEY_cent: number;
    const KEY_ch: number;
    const KEY_checkerboard: number;
    const KEY_checkmark: number;
    const KEY_circle: number;
    const KEY_club: number;
    const KEY_colon: number;
    const KEY_combining_acute: number;
    const KEY_combining_belowdot: number;
    const KEY_combining_grave: number;
    const KEY_combining_hook: number;
    const KEY_combining_tilde: number;
    const KEY_comma: number;
    const KEY_containsas: number;
    const KEY_copyright: number;
    const KEY_cr: number;
    const KEY_crossinglines: number;
    const KEY_cuberoot: number;
    const KEY_currency: number;
    const KEY_cursor: number;
    const KEY_d: number;
    const KEY_dabovedot: number;
    const KEY_dagger: number;
    const KEY_dcaron: number;
    const KEY_dead_A: number;
    const KEY_dead_E: number;
    const KEY_dead_I: number;
    const KEY_dead_O: number;
    const KEY_dead_SCHWA: number;
    const KEY_dead_U: number;
    const KEY_dead_a: number;
    const KEY_dead_abovecomma: number;
    const KEY_dead_abovedot: number;
    const KEY_dead_abovereversedcomma: number;
    const KEY_dead_abovering: number;
    const KEY_dead_aboveverticalline: number;
    const KEY_dead_acute: number;
    const KEY_dead_belowbreve: number;
    const KEY_dead_belowcircumflex: number;
    const KEY_dead_belowcomma: number;
    const KEY_dead_belowdiaeresis: number;
    const KEY_dead_belowdot: number;
    const KEY_dead_belowmacron: number;
    const KEY_dead_belowring: number;
    const KEY_dead_belowtilde: number;
    const KEY_dead_belowverticalline: number;
    const KEY_dead_breve: number;
    const KEY_dead_capital_schwa: number;
    const KEY_dead_caron: number;
    const KEY_dead_cedilla: number;
    const KEY_dead_circumflex: number;
    const KEY_dead_currency: number;
    const KEY_dead_dasia: number;
    const KEY_dead_diaeresis: number;
    const KEY_dead_doubleacute: number;
    const KEY_dead_doublegrave: number;
    const KEY_dead_e: number;
    const KEY_dead_grave: number;
    const KEY_dead_greek: number;
    const KEY_dead_hamza: number;
    const KEY_dead_hook: number;
    const KEY_dead_horn: number;
    const KEY_dead_i: number;
    const KEY_dead_invertedbreve: number;
    const KEY_dead_iota: number;
    const KEY_dead_longsolidusoverlay: number;
    const KEY_dead_lowline: number;
    const KEY_dead_macron: number;
    const KEY_dead_o: number;
    const KEY_dead_ogonek: number;
    const KEY_dead_perispomeni: number;
    const KEY_dead_psili: number;
    const KEY_dead_schwa: number;
    const KEY_dead_semivoiced_sound: number;
    const KEY_dead_small_schwa: number;
    const KEY_dead_stroke: number;
    const KEY_dead_tilde: number;
    const KEY_dead_u: number;
    const KEY_dead_voiced_sound: number;
    const KEY_decimalpoint: number;
    const KEY_degree: number;
    const KEY_diaeresis: number;
    const KEY_diamond: number;
    const KEY_digitspace: number;
    const KEY_dintegral: number;
    const KEY_division: number;
    const KEY_dollar: number;
    const KEY_doubbaselinedot: number;
    const KEY_doubleacute: number;
    const KEY_doubledagger: number;
    const KEY_doublelowquotemark: number;
    const KEY_downarrow: number;
    const KEY_downcaret: number;
    const KEY_downshoe: number;
    const KEY_downstile: number;
    const KEY_downtack: number;
    const KEY_dstroke: number;
    const KEY_e: number;
    const KEY_eabovedot: number;
    const KEY_eacute: number;
    const KEY_ebelowdot: number;
    const KEY_ecaron: number;
    const KEY_ecircumflex: number;
    const KEY_ecircumflexacute: number;
    const KEY_ecircumflexbelowdot: number;
    const KEY_ecircumflexgrave: number;
    const KEY_ecircumflexhook: number;
    const KEY_ecircumflextilde: number;
    const KEY_ediaeresis: number;
    const KEY_egrave: number;
    const KEY_ehook: number;
    const KEY_eightsubscript: number;
    const KEY_eightsuperior: number;
    const KEY_elementof: number;
    const KEY_ellipsis: number;
    const KEY_em3space: number;
    const KEY_em4space: number;
    const KEY_emacron: number;
    const KEY_emdash: number;
    const KEY_emfilledcircle: number;
    const KEY_emfilledrect: number;
    const KEY_emopencircle: number;
    const KEY_emopenrectangle: number;
    const KEY_emptyset: number;
    const KEY_emspace: number;
    const KEY_endash: number;
    const KEY_enfilledcircbullet: number;
    const KEY_enfilledsqbullet: number;
    const KEY_eng: number;
    const KEY_enopencircbullet: number;
    const KEY_enopensquarebullet: number;
    const KEY_enspace: number;
    const KEY_eogonek: number;
    const KEY_equal: number;
    const KEY_eth: number;
    const KEY_etilde: number;
    const KEY_exclam: number;
    const KEY_exclamdown: number;
    const KEY_ezh: number;
    const KEY_f: number;
    const KEY_fabovedot: number;
    const KEY_femalesymbol: number;
    const KEY_ff: number;
    const KEY_figdash: number;
    const KEY_filledlefttribullet: number;
    const KEY_filledrectbullet: number;
    const KEY_filledrighttribullet: number;
    const KEY_filledtribulletdown: number;
    const KEY_filledtribulletup: number;
    const KEY_fiveeighths: number;
    const KEY_fivesixths: number;
    const KEY_fivesubscript: number;
    const KEY_fivesuperior: number;
    const KEY_fourfifths: number;
    const KEY_foursubscript: number;
    const KEY_foursuperior: number;
    const KEY_fourthroot: number;
    const KEY_function: number;
    const KEY_g: number;
    const KEY_gabovedot: number;
    const KEY_gbreve: number;
    const KEY_gcaron: number;
    const KEY_gcedilla: number;
    const KEY_gcircumflex: number;
    const KEY_grave: number;
    const KEY_greater: number;
    const KEY_greaterthanequal: number;
    const KEY_guillemetleft: number;
    const KEY_guillemetright: number;
    const KEY_guillemotleft: number;
    const KEY_guillemotright: number;
    const KEY_h: number;
    const KEY_hairspace: number;
    const KEY_hcircumflex: number;
    const KEY_heart: number;
    const KEY_hebrew_aleph: number;
    const KEY_hebrew_ayin: number;
    const KEY_hebrew_bet: number;
    const KEY_hebrew_beth: number;
    const KEY_hebrew_chet: number;
    const KEY_hebrew_dalet: number;
    const KEY_hebrew_daleth: number;
    const KEY_hebrew_doublelowline: number;
    const KEY_hebrew_finalkaph: number;
    const KEY_hebrew_finalmem: number;
    const KEY_hebrew_finalnun: number;
    const KEY_hebrew_finalpe: number;
    const KEY_hebrew_finalzade: number;
    const KEY_hebrew_finalzadi: number;
    const KEY_hebrew_gimel: number;
    const KEY_hebrew_gimmel: number;
    const KEY_hebrew_he: number;
    const KEY_hebrew_het: number;
    const KEY_hebrew_kaph: number;
    const KEY_hebrew_kuf: number;
    const KEY_hebrew_lamed: number;
    const KEY_hebrew_mem: number;
    const KEY_hebrew_nun: number;
    const KEY_hebrew_pe: number;
    const KEY_hebrew_qoph: number;
    const KEY_hebrew_resh: number;
    const KEY_hebrew_samech: number;
    const KEY_hebrew_samekh: number;
    const KEY_hebrew_shin: number;
    const KEY_hebrew_taf: number;
    const KEY_hebrew_taw: number;
    const KEY_hebrew_tet: number;
    const KEY_hebrew_teth: number;
    const KEY_hebrew_waw: number;
    const KEY_hebrew_yod: number;
    const KEY_hebrew_zade: number;
    const KEY_hebrew_zadi: number;
    const KEY_hebrew_zain: number;
    const KEY_hebrew_zayin: number;
    const KEY_hexagram: number;
    const KEY_horizconnector: number;
    const KEY_horizlinescan1: number;
    const KEY_horizlinescan3: number;
    const KEY_horizlinescan5: number;
    const KEY_horizlinescan7: number;
    const KEY_horizlinescan9: number;
    const KEY_hstroke: number;
    const KEY_ht: number;
    const KEY_hyphen: number;
    const KEY_i: number;
    const KEY_iTouch: number;
    const KEY_iacute: number;
    const KEY_ibelowdot: number;
    const KEY_ibreve: number;
    const KEY_icircumflex: number;
    const KEY_identical: number;
    const KEY_idiaeresis: number;
    const KEY_idotless: number;
    const KEY_ifonlyif: number;
    const KEY_igrave: number;
    const KEY_ihook: number;
    const KEY_imacron: number;
    const KEY_implies: number;
    const KEY_includedin: number;
    const KEY_includes: number;
    const KEY_infinity: number;
    const KEY_integral: number;
    const KEY_intersection: number;
    const KEY_iogonek: number;
    const KEY_itilde: number;
    const KEY_j: number;
    const KEY_jcircumflex: number;
    const KEY_jot: number;
    const KEY_k: number;
    const KEY_kana_A: number;
    const KEY_kana_CHI: number;
    const KEY_kana_E: number;
    const KEY_kana_FU: number;
    const KEY_kana_HA: number;
    const KEY_kana_HE: number;
    const KEY_kana_HI: number;
    const KEY_kana_HO: number;
    const KEY_kana_HU: number;
    const KEY_kana_I: number;
    const KEY_kana_KA: number;
    const KEY_kana_KE: number;
    const KEY_kana_KI: number;
    const KEY_kana_KO: number;
    const KEY_kana_KU: number;
    const KEY_kana_MA: number;
    const KEY_kana_ME: number;
    const KEY_kana_MI: number;
    const KEY_kana_MO: number;
    const KEY_kana_MU: number;
    const KEY_kana_N: number;
    const KEY_kana_NA: number;
    const KEY_kana_NE: number;
    const KEY_kana_NI: number;
    const KEY_kana_NO: number;
    const KEY_kana_NU: number;
    const KEY_kana_O: number;
    const KEY_kana_RA: number;
    const KEY_kana_RE: number;
    const KEY_kana_RI: number;
    const KEY_kana_RO: number;
    const KEY_kana_RU: number;
    const KEY_kana_SA: number;
    const KEY_kana_SE: number;
    const KEY_kana_SHI: number;
    const KEY_kana_SO: number;
    const KEY_kana_SU: number;
    const KEY_kana_TA: number;
    const KEY_kana_TE: number;
    const KEY_kana_TI: number;
    const KEY_kana_TO: number;
    const KEY_kana_TSU: number;
    const KEY_kana_TU: number;
    const KEY_kana_U: number;
    const KEY_kana_WA: number;
    const KEY_kana_WO: number;
    const KEY_kana_YA: number;
    const KEY_kana_YO: number;
    const KEY_kana_YU: number;
    const KEY_kana_a: number;
    const KEY_kana_closingbracket: number;
    const KEY_kana_comma: number;
    const KEY_kana_conjunctive: number;
    const KEY_kana_e: number;
    const KEY_kana_fullstop: number;
    const KEY_kana_i: number;
    const KEY_kana_middledot: number;
    const KEY_kana_o: number;
    const KEY_kana_openingbracket: number;
    const KEY_kana_switch: number;
    const KEY_kana_tsu: number;
    const KEY_kana_tu: number;
    const KEY_kana_u: number;
    const KEY_kana_ya: number;
    const KEY_kana_yo: number;
    const KEY_kana_yu: number;
    const KEY_kappa: number;
    const KEY_kcedilla: number;
    const KEY_kra: number;
    const KEY_l: number;
    const KEY_lacute: number;
    const KEY_latincross: number;
    const KEY_lbelowdot: number;
    const KEY_lcaron: number;
    const KEY_lcedilla: number;
    const KEY_leftanglebracket: number;
    const KEY_leftarrow: number;
    const KEY_leftcaret: number;
    const KEY_leftdoublequotemark: number;
    const KEY_leftmiddlecurlybrace: number;
    const KEY_leftopentriangle: number;
    const KEY_leftpointer: number;
    const KEY_leftradical: number;
    const KEY_leftshoe: number;
    const KEY_leftsinglequotemark: number;
    const KEY_leftt: number;
    const KEY_lefttack: number;
    const KEY_less: number;
    const KEY_lessthanequal: number;
    const KEY_lf: number;
    const KEY_logicaland: number;
    const KEY_logicalor: number;
    const KEY_lowleftcorner: number;
    const KEY_lowrightcorner: number;
    const KEY_lstroke: number;
    const KEY_m: number;
    const KEY_mabovedot: number;
    const KEY_macron: number;
    const KEY_malesymbol: number;
    const KEY_maltesecross: number;
    const KEY_marker: number;
    const KEY_masculine: number;
    const KEY_minus: number;
    const KEY_minutes: number;
    const KEY_mu: number;
    const KEY_multiply: number;
    const KEY_musicalflat: number;
    const KEY_musicalsharp: number;
    const KEY_n: number;
    const KEY_nabla: number;
    const KEY_nacute: number;
    const KEY_ncaron: number;
    const KEY_ncedilla: number;
    const KEY_ninesubscript: number;
    const KEY_ninesuperior: number;
    const KEY_nl: number;
    const KEY_nobreakspace: number;
    const KEY_notapproxeq: number;
    const KEY_notelementof: number;
    const KEY_notequal: number;
    const KEY_notidentical: number;
    const KEY_notsign: number;
    const KEY_ntilde: number;
    const KEY_numbersign: number;
    const KEY_numerosign: number;
    const KEY_o: number;
    const KEY_oacute: number;
    const KEY_obarred: number;
    const KEY_obelowdot: number;
    const KEY_ocaron: number;
    const KEY_ocircumflex: number;
    const KEY_ocircumflexacute: number;
    const KEY_ocircumflexbelowdot: number;
    const KEY_ocircumflexgrave: number;
    const KEY_ocircumflexhook: number;
    const KEY_ocircumflextilde: number;
    const KEY_odiaeresis: number;
    const KEY_odoubleacute: number;
    const KEY_oe: number;
    const KEY_ogonek: number;
    const KEY_ograve: number;
    const KEY_ohook: number;
    const KEY_ohorn: number;
    const KEY_ohornacute: number;
    const KEY_ohornbelowdot: number;
    const KEY_ohorngrave: number;
    const KEY_ohornhook: number;
    const KEY_ohorntilde: number;
    const KEY_omacron: number;
    const KEY_oneeighth: number;
    const KEY_onefifth: number;
    const KEY_onehalf: number;
    const KEY_onequarter: number;
    const KEY_onesixth: number;
    const KEY_onesubscript: number;
    const KEY_onesuperior: number;
    const KEY_onethird: number;
    const KEY_ooblique: number;
    const KEY_openrectbullet: number;
    const KEY_openstar: number;
    const KEY_opentribulletdown: number;
    const KEY_opentribulletup: number;
    const KEY_ordfeminine: number;
    const KEY_ordmasculine: number;
    const KEY_oslash: number;
    const KEY_otilde: number;
    const KEY_overbar: number;
    const KEY_overline: number;
    const KEY_p: number;
    const KEY_pabovedot: number;
    const KEY_paragraph: number;
    const KEY_parenleft: number;
    const KEY_parenright: number;
    const KEY_partdifferential: number;
    const KEY_partialderivative: number;
    const KEY_percent: number;
    const KEY_period: number;
    const KEY_periodcentered: number;
    const KEY_permille: number;
    const KEY_phonographcopyright: number;
    const KEY_plus: number;
    const KEY_plusminus: number;
    const KEY_prescription: number;
    const KEY_prolongedsound: number;
    const KEY_punctspace: number;
    const KEY_q: number;
    const KEY_quad: number;
    const KEY_question: number;
    const KEY_questiondown: number;
    const KEY_quotedbl: number;
    const KEY_quoteleft: number;
    const KEY_quoteright: number;
    const KEY_r: number;
    const KEY_racute: number;
    const KEY_radical: number;
    const KEY_rcaron: number;
    const KEY_rcedilla: number;
    const KEY_registered: number;
    const KEY_rightanglebracket: number;
    const KEY_rightarrow: number;
    const KEY_rightcaret: number;
    const KEY_rightdoublequotemark: number;
    const KEY_rightmiddlecurlybrace: number;
    const KEY_rightmiddlesummation: number;
    const KEY_rightopentriangle: number;
    const KEY_rightpointer: number;
    const KEY_rightshoe: number;
    const KEY_rightsinglequotemark: number;
    const KEY_rightt: number;
    const KEY_righttack: number;
    const KEY_s: number;
    const KEY_sabovedot: number;
    const KEY_sacute: number;
    const KEY_scaron: number;
    const KEY_scedilla: number;
    const KEY_schwa: number;
    const KEY_scircumflex: number;
    const KEY_script_switch: number;
    const KEY_seconds: number;
    const KEY_section: number;
    const KEY_semicolon: number;
    const KEY_semivoicedsound: number;
    const KEY_seveneighths: number;
    const KEY_sevensubscript: number;
    const KEY_sevensuperior: number;
    const KEY_signaturemark: number;
    const KEY_signifblank: number;
    const KEY_similarequal: number;
    const KEY_singlelowquotemark: number;
    const KEY_sixsubscript: number;
    const KEY_sixsuperior: number;
    const KEY_slash: number;
    const KEY_soliddiamond: number;
    const KEY_space: number;
    const KEY_squareroot: number;
    const KEY_ssharp: number;
    const KEY_sterling: number;
    const KEY_stricteq: number;
    const KEY_t: number;
    const KEY_tabovedot: number;
    const KEY_tcaron: number;
    const KEY_tcedilla: number;
    const KEY_telephone: number;
    const KEY_telephonerecorder: number;
    const KEY_therefore: number;
    const KEY_thinspace: number;
    const KEY_thorn: number;
    const KEY_threeeighths: number;
    const KEY_threefifths: number;
    const KEY_threequarters: number;
    const KEY_threesubscript: number;
    const KEY_threesuperior: number;
    const KEY_tintegral: number;
    const KEY_topintegral: number;
    const KEY_topleftparens: number;
    const KEY_topleftradical: number;
    const KEY_topleftsqbracket: number;
    const KEY_topleftsummation: number;
    const KEY_toprightparens: number;
    const KEY_toprightsqbracket: number;
    const KEY_toprightsummation: number;
    const KEY_topt: number;
    const KEY_topvertsummationconnector: number;
    const KEY_trademark: number;
    const KEY_trademarkincircle: number;
    const KEY_tslash: number;
    const KEY_twofifths: number;
    const KEY_twosubscript: number;
    const KEY_twosuperior: number;
    const KEY_twothirds: number;
    const KEY_u: number;
    const KEY_uacute: number;
    const KEY_ubelowdot: number;
    const KEY_ubreve: number;
    const KEY_ucircumflex: number;
    const KEY_udiaeresis: number;
    const KEY_udoubleacute: number;
    const KEY_ugrave: number;
    const KEY_uhook: number;
    const KEY_uhorn: number;
    const KEY_uhornacute: number;
    const KEY_uhornbelowdot: number;
    const KEY_uhorngrave: number;
    const KEY_uhornhook: number;
    const KEY_uhorntilde: number;
    const KEY_umacron: number;
    const KEY_underbar: number;
    const KEY_underscore: number;
    const KEY_union: number;
    const KEY_uogonek: number;
    const KEY_uparrow: number;
    const KEY_upcaret: number;
    const KEY_upleftcorner: number;
    const KEY_uprightcorner: number;
    const KEY_upshoe: number;
    const KEY_upstile: number;
    const KEY_uptack: number;
    const KEY_uring: number;
    const KEY_utilde: number;
    const KEY_v: number;
    const KEY_variation: number;
    const KEY_vertbar: number;
    const KEY_vertconnector: number;
    const KEY_voicedsound: number;
    const KEY_vt: number;
    const KEY_w: number;
    const KEY_wacute: number;
    const KEY_wcircumflex: number;
    const KEY_wdiaeresis: number;
    const KEY_wgrave: number;
    const KEY_x: number;
    const KEY_xabovedot: number;
    const KEY_y: number;
    const KEY_yacute: number;
    const KEY_ybelowdot: number;
    const KEY_ycircumflex: number;
    const KEY_ydiaeresis: number;
    const KEY_yen: number;
    const KEY_ygrave: number;
    const KEY_yhook: number;
    const KEY_ytilde: number;
    const KEY_z: number;
    const KEY_zabovedot: number;
    const KEY_zacute: number;
    const KEY_zcaron: number;
    const KEY_zerosubscript: number;
    const KEY_zerosuperior: number;
    const KEY_zstroke: number;
    /**
     * A mask covering all entries in `GdkModifierType`.
     */
    const MODIFIER_MASK: number;
    /**
     * This is the priority that the idle handler processing surface updates
     * is given in the main loop.
     */
    const PRIORITY_REDRAW: number;
    /**
     * Draws GL content onto a cairo context.
     *
     * It takes a render buffer ID (`source_type` == GL_RENDERBUFFER) or a texture
     * id (`source_type` == GL_TEXTURE) and draws it onto `cr` with an OVER operation,
     * respecting the current clip. The top left corner of the rectangle specified
     * by `x,` `y,` `width` and `height` will be drawn at the current (0,0) position of
     * the `cairo_t`.
     *
     * This will work for *all* `cairo_t`, as long as `surface` is realized, but the
     * fallback implementation that reads back the pixels from the buffer may be
     * used in the general case. In the case of direct drawing to a surface with
     * no special effects applied to `cr` it will however use a more efficient
     * approach.
     *
     * For GL_RENDERBUFFER the code will always fall back to software for buffers
     * with alpha components, so make sure you use GL_TEXTURE if using alpha.
     *
     * Calling this may change the current GL context.
     *
     * @param cr a cairo context
     * @param surface The surface we're rendering for (not necessarily into)
     * @param source The GL ID of the source buffer
     * @param source_type The type of the `source`
     * @param buffer_scale The scale-factor that the `source` buffer is allocated for
     * @param x The source x position in `source` to start copying from in GL coordinates
     * @param y The source y position in `source` to start copying from in GL coordinates
     * @param width The width of the region to draw
     * @param height The height of the region to draw
     */
    function cairo_draw_from_gl(
        cr: cairo.Context,
        surface: Surface,
        source: number,
        source_type: number,
        buffer_scale: number,
        x: number,
        y: number,
        width: number,
        height: number,
    ): void;
    /**
     * Adds the given rectangle to the current path of `cr`.
     *
     * @param cr a cairo context
     * @param rectangle a `GdkRectangle`
     */
    function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void;
    /**
     * Adds the given region to the current path of `cr`.
     *
     * @param cr a cairo context
     * @param region a `cairo_region_t`
     */
    function cairo_region(cr: cairo.Context, region: cairo.Region): void;
    /**
     * Creates region that covers the area where the given
     * `surface` is more than 50% opaque.
     *
     * This function takes into account device offsets that might be
     * set with cairo_surface_set_device_offset().
     *
     * @returns A `cairo_region_t`
     * @param surface a cairo surface
     */
    function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region;
    /**
     * Sets the given pixbuf as the source pattern for `cr`.
     *
     * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
     * so that the origin of `pixbuf` is `pixbuf_x,` `pixbuf_y`.
     *
     * @param cr a cairo context
     * @param pixbuf a `GdkPixbuf`
     * @param pixbuf_x X coordinate of location to place upper left corner of `pixbuf`
     * @param pixbuf_y Y coordinate of location to place upper left corner of `pixbuf`
     */
    function cairo_set_source_pixbuf(
        cr: cairo.Context,
        pixbuf: GdkPixbuf.Pixbuf,
        pixbuf_x: number,
        pixbuf_y: number,
    ): void;
    /**
     * Sets the specified `GdkRGBA` as the source color of `cr`.
     *
     * @param cr a cairo context
     * @param rgba a `GdkRGBA`
     */
    function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void;
    /**
     * Returns the color state object representing the oklab color space.
     *
     * This is a perceptually uniform color state.
     *
     * @returns the color state object for oklab
     */
    function color_state_get_oklab(): ColorState;
    /**
     * Returns the color state object representing the oklch color space.
     *
     * This is the polar variant of oklab, in which the hue is encoded as
     * a polar coordinate.
     *
     * @returns the color state object for oklch
     */
    function color_state_get_oklch(): ColorState;
    /**
     * Returns the color state object representing the linear rec2100 color space.
     *
     * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and a linear
     * transfer function.
     *
     * It is equivalent to the [Cicp](class.CicpParams.html) tuple 9/8/0/1.
     *
     * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-linear)
     * for details about this colorstate.
     *
     * @returns the color state object for linearized rec2100
     */
    function color_state_get_rec2100_linear(): ColorState;
    /**
     * Returns the color state object representing the rec2100-pq color space.
     *
     * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and the transfer
     * function defined by SMPTE ST 2084 and BT.2100-2.
     *
     * It is equivalent to the [Cicp](class.CicpParams.html) tuple 9/16/0/1.
     *
     * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-pq)
     * for details about this colorstate.
     *
     * @returns the color state object for rec2100-pq
     */
    function color_state_get_rec2100_pq(): ColorState;
    /**
     * Returns the color state object representing the sRGB color space.
     *
     * This color state uses the primaries defined by BT.709-6 and the transfer function
     * defined by IEC 61966-2-1.
     *
     * It is equivalent to the [Cicp](class.CicpParams.html) tuple 1/13/0/1.
     *
     * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB)
     * for details about this colorstate.
     *
     * @returns the color state object for sRGB
     */
    function color_state_get_srgb(): ColorState;
    /**
     * Returns the color state object representing the linearized sRGB color space.
     *
     * This color state uses the primaries defined by BT.709-6 and a linear transfer function.
     *
     * It is equivalent to the [Cicp](class.CicpParams.html) tuple 1/8/0/1.
     *
     * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB-linear)
     * for details about this colorstate.
     *
     * @returns the color state object for linearized sRGB
     */
    function color_state_get_srgb_linear(): ColorState;
    /**
     * Reads content from the given input stream and deserialize it, asynchronously.
     *
     * The default I/O priority is `G_PRIORITY_DEFAULT` (i.e. 0), and lower numbers
     * indicate a higher priority.
     *
     * @param stream a `GInputStream` to read the serialized content from
     * @param mime_type the mime type to deserialize from
     * @param type the GType to deserialize from
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional `GCancellable` object
     */
    function content_deserialize_async(
        stream: Gio.InputStream,
        mime_type: string,
        type: GObject.GType,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<[GObject.Value]>;
    /**
     * Reads content from the given input stream and deserialize it, asynchronously.
     *
     * The default I/O priority is `G_PRIORITY_DEFAULT` (i.e. 0), and lower numbers
     * indicate a higher priority.
     *
     * @param stream a `GInputStream` to read the serialized content from
     * @param mime_type the mime type to deserialize from
     * @param type the GType to deserialize from
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional `GCancellable` object
     * @param callback callback to call when the operation is done
     */
    function content_deserialize_async(
        stream: Gio.InputStream,
        mime_type: string,
        type: GObject.GType,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Gio.InputStream> | null,
    ): void;
    /**
     * Reads content from the given input stream and deserialize it, asynchronously.
     *
     * The default I/O priority is `G_PRIORITY_DEFAULT` (i.e. 0), and lower numbers
     * indicate a higher priority.
     *
     * @param stream a `GInputStream` to read the serialized content from
     * @param mime_type the mime type to deserialize from
     * @param type the GType to deserialize from
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional `GCancellable` object
     * @param callback callback to call when the operation is done
     */
    function content_deserialize_async(
        stream: Gio.InputStream,
        mime_type: string,
        type: GObject.GType,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Gio.InputStream> | null,
    ): globalThis.Promise<[GObject.Value]> | void;
    /**
     * Finishes a content deserialization operation.
     *
     * @returns %TRUE if the operation was successful. In this case,
     *   `value` is set. %FALSE if an error occurred. In this case,
     *   `error` is set
     * @param result the `GAsyncResult`
     */
    function content_deserialize_finish(result: Gio.AsyncResult): [boolean, unknown];
    /**
     * Parses the given `string` into `GdkContentFormats` and
     * returns the formats.
     *
     * Strings printed via [method`Gdk`.ContentFormats.to_string]
     * can be read in again successfully using this function.
     *
     * If `string` does not describe valid content formats, %NULL
     * is returned.
     *
     * @returns the content formats if `string` is valid
     * @param string the string to parse
     */
    function content_formats_parse(string: string): ContentFormats | null;
    /**
     * Registers a function to deserialize object of a given type.
     *
     * @param mime_type the mime type which the function can deserialize from
     * @param type the type of objects that the function creates
     * @param deserialize the callback
     */
    function content_register_deserializer(
        mime_type: string,
        type: GObject.GType,
        deserialize: ContentDeserializeFunc,
    ): void;
    /**
     * Registers a function to serialize objects of a given type.
     *
     * @param type the type of objects that the function can serialize
     * @param mime_type the mime type to serialize to
     * @param serialize the callback
     */
    function content_register_serializer(type: GObject.GType, mime_type: string, serialize: ContentSerializeFunc): void;
    /**
     * Serialize content and write it to the given output stream, asynchronously.
     *
     * The default I/O priority is %G_PRIORITY_DEFAULT (i.e. 0), and lower numbers
     * indicate a higher priority.
     *
     * @param stream a `GOutputStream` to write the serialized content to
     * @param mime_type the mime type to serialize to
     * @param value the content to serialize
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional `GCancellable` object
     */
    function content_serialize_async(
        stream: Gio.OutputStream,
        mime_type: string,
        value: GObject.Value | any,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<boolean>;
    /**
     * Serialize content and write it to the given output stream, asynchronously.
     *
     * The default I/O priority is %G_PRIORITY_DEFAULT (i.e. 0), and lower numbers
     * indicate a higher priority.
     *
     * @param stream a `GOutputStream` to write the serialized content to
     * @param mime_type the mime type to serialize to
     * @param value the content to serialize
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional `GCancellable` object
     * @param callback callback to call when the operation is done
     */
    function content_serialize_async(
        stream: Gio.OutputStream,
        mime_type: string,
        value: GObject.Value | any,
        io_priority: number,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Gio.OutputStream> | null,
    ): void;
    /**
     * Serialize content and write it to the given output stream, asynchronously.
     *
     * The default I/O priority is %G_PRIORITY_DEFAULT (i.e. 0), and lower numbers
     * indicate a higher priority.
     *
     * @param stream a `GOutputStream` to write the serialized content to
     * @param mime_type the mime type to serialize to
     * @param value the content to serialize
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional `GCancellable` object
     * @param callback callback to call when the operation is done
     */
    function content_serialize_async(
        stream: Gio.OutputStream,
        mime_type: string,
        value: GObject.Value | any,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Gio.OutputStream> | null,
    ): globalThis.Promise<boolean> | void;
    /**
     * Finishes a content serialization operation.
     *
     * @returns %TRUE if the operation was successful, %FALSE if an
     *   error occurred. In this case, `error` is set
     * @param result the `GAsyncResult`
     */
    function content_serialize_finish(result: Gio.AsyncResult): boolean;
    /**
     * Registers an error quark for [class`Gdk`.DmabufTexture] errors.
     *
     * @returns the error quark
     */
    function dmabuf_error_quark(): GLib.Quark;
    /**
     * Checks if `action` represents a single action or includes
     * multiple actions.
     *
     * When `action` is 0 - ie no action was given, %TRUE
     * is returned.
     *
     * @returns %TRUE if exactly one action was given
     * @param action a `GdkDragAction`
     */
    function drag_action_is_unique(action: DragAction | null): boolean;
    /**
     * Returns the relative angle from `event1` to `event2`.
     *
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     *
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     *
     * @returns %TRUE if the angle could be calculated.
     * @param _event1 first `GdkEvent`
     * @param _event2 second `GdkEvent`
     */
    function events_get_angle(_event1: Event, _event2: Event): [boolean, number];
    /**
     * Returns the point halfway between the events' positions.
     *
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     *
     * @returns %TRUE if the center could be calculated.
     * @param _event1 first `GdkEvent`
     * @param _event2 second `GdkEvent`
     */
    function events_get_center(_event1: Event, _event2: Event): [boolean, number, number];
    /**
     * Returns the distance between the event locations.
     *
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     *
     * @returns %TRUE if the distance could be calculated.
     * @param _event1 first `GdkEvent`
     * @param _event2 second `GdkEvent`
     */
    function events_get_distance(_event1: Event, _event2: Event): [boolean, number];
    /**
     * Registers an error quark for [class`Gdk`.GLContext] errors.
     *
     * @returns the error quark
     */
    function gl_error_quark(): GLib.Quark;
    /**
     * Canonicalizes the given mime type and interns the result.
     *
     * If `string` is not a valid mime type, %NULL is returned instead.
     * See RFC 2048 for the syntax if mime types.
     *
     * @returns An interned string for the canonicalized
     *   mime type or %NULL if the string wasn't a valid mime type
     * @param string string of a potential mime type
     */
    function intern_mime_type(string: string): string | null;
    /**
     * Obtains the upper- and lower-case versions of the keyval `symbol`.
     *
     * Examples of keyvals are `GDK_KEY_a`, `GDK_KEY_Enter`, `GDK_KEY_F1`, etc.
     *
     * @param symbol a keyval
     */
    function keyval_convert_case(symbol: number): [number, number];
    /**
     * Converts a key name to a key value.
     *
     * The names are the same as those in the
     * `gdk/gdkkeysyms.h` header file
     * but without the leading “GDK_KEY_”.
     *
     * @returns the corresponding key value, or `GDK_KEY_VoidSymbol`
     *   if the key name is not a valid key
     * @param keyval_name a key name
     */
    function keyval_from_name(keyval_name: string): number;
    /**
     * Returns true if the given key value is in lower case.
     *
     * @returns true if `keyval` is in lower case, or if `keyval` is not
     *   subject to case conversion.
     * @param keyval a key value.
     */
    function keyval_is_lower(keyval: number): boolean;
    /**
     * Returns true if the given key value is in upper case.
     *
     * @returns true if `keyval` is in upper case, or if `keyval` is not subject to
     *  case conversion.
     * @param keyval a key value.
     */
    function keyval_is_upper(keyval: number): boolean;
    /**
     * Converts a key value into a symbolic name.
     *
     * The names are the same as those in the
     * `gdk/gdkkeysyms.h` header file
     * but without the leading “GDK_KEY_”.
     *
     * @returns a string containing the name
     *   of the key
     * @param keyval a key value
     */
    function keyval_name(keyval: number): string | null;
    /**
     * Converts a key value to lower case, if applicable.
     *
     * @returns the lower case form of `keyval,` or `keyval` itself if it is already
     *  in lower case or it is not subject to case conversion.
     * @param keyval a key value.
     */
    function keyval_to_lower(keyval: number): number;
    /**
     * Converts from a GDK key symbol to the corresponding Unicode
     * character.
     *
     * Note that the conversion does not take the current locale
     * into consideration, which might be expected for particular
     * keyvals, such as `GDK_KEY_KP_Decimal`.
     *
     * @returns the corresponding unicode character, or 0 if there
     *   is no corresponding character.
     * @param keyval a GDK key symbol
     */
    function keyval_to_unicode(keyval: number): number;
    /**
     * Converts a key value to upper case, if applicable.
     *
     * @returns the upper case form of `keyval,` or `keyval` itself if it is already
     *   in upper case or it is not subject to case conversion.
     * @param keyval a key value.
     */
    function keyval_to_upper(keyval: number): number;
    /**
     * Returns a paintable that has the given intrinsic size and draws nothing.
     *
     * This is often useful for implementing the
     * [vfunc`Gdk`.Paintable.get_current_image] virtual function
     * when the paintable is in an incomplete state (like a
     * [GtkMediaStream](../gtk4/class.MediaStream.html) before receiving
     * the first frame).
     *
     * @returns a `GdkPaintable`
     * @param intrinsic_width The intrinsic width to report. Can be 0 for no width.
     * @param intrinsic_height The intrinsic height to report. Can be 0 for no height.
     */
    function paintable_new_empty(intrinsic_width: number, intrinsic_height: number): Paintable;
    /**
     * Transfers image data from a `cairo_surface_t` and converts it
     * to a `GdkPixbuf`.
     *
     * This allows you to efficiently read individual pixels from cairo surfaces.
     *
     * This function will create an RGB pixbuf with 8 bits per channel.
     * The pixbuf will contain an alpha channel if the `surface` contains one.
     *
     * @returns A newly-created pixbuf with a
     *   reference count of 1
     * @param surface surface to copy from
     * @param src_x Source X coordinate within `surface`
     * @param src_y Source Y coordinate within `surface`
     * @param width Width in pixels of region to get
     * @param height Height in pixels of region to get
     */
    function pixbuf_get_from_surface(
        surface: cairo.Surface,
        src_x: number,
        src_y: number,
        width: number,
        height: number,
    ): GdkPixbuf.Pixbuf | null;
    /**
     * Creates a new pixbuf from `texture`.
     *
     * This should generally not be used in newly written code as later
     * stages will almost certainly convert the pixbuf back into a texture
     * to draw it on screen.
     *
     * @returns a new `GdkPixbuf`
     * @param texture a `GdkTexture`
     */
    function pixbuf_get_from_texture(texture: Texture): GdkPixbuf.Pixbuf | null;
    /**
     * Sets a list of backends that GDK should try to use.
     *
     * This can be useful if your application does not
     * work with certain GDK backends.
     *
     * By default, GDK tries all included backends.
     *
     * For example:
     *
     * ```c
     * gdk_set_allowed_backends ("wayland,macos,*");
     * ```
     *
     * instructs GDK to try the Wayland backend first, followed by the
     * MacOs backend, and then all others.
     *
     * If the `GDK_BACKEND` environment variable is set, it determines
     * what backends are tried in what order, while still respecting the
     * set of allowed backends that are specified by this function.
     *
     * The possible backend names are:
     *
     *   - `broadway`
     *   - `macos`
     *   - `wayland`.
     *   - `win32`
     *   - `x11`
     *
     * You can also include a `*` in the list to try all remaining backends.
     *
     * This call must happen prior to functions that open a display, such
     * as [func`Gdk`.Display.open], `gtk_init()`, or `gtk_init_check()`
     * in order to take effect.
     *
     * @param backends a comma-separated list of backends
     */
    function set_allowed_backends(backends: string): void;
    /**
     * Registers an error quark for [class`Gdk`.Texture] errors.
     *
     * @returns the error quark
     */
    function texture_error_quark(): GLib.Quark;
    /**
     * Converts from a Unicode character to a key symbol.
     *
     * @returns the corresponding GDK key symbol, if one exists,
     *   or, if there is no corresponding symbol, `wc | 0x01000000`
     * @param wc a Unicode character
     */
    function unicode_to_keyval(wc: number): number;
    /**
     * Registers an error quark for [class`Gdk`.VulkanContext] errors.
     *
     * @returns the error quark
     */
    function vulkan_error_quark(): GLib.Quark;
    interface ContentDeserializeFunc {
        (deserializer: ContentDeserializer): void;
    }
    interface ContentSerializeFunc {
        (serializer: ContentSerializer): void;
    }
    interface CursorGetTextureCallback {
        (cursor: Cursor, cursor_size: number, scale: number, data?: any | null): Texture | null;
    }
    /**
     * Positioning hints for aligning a surface relative to a rectangle.
     *
     * These hints determine how the surface should be positioned in the case that
     * the surface would fall off-screen if placed in its ideal position.
     *
     * For example, %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
     * %GDK_GRAVITY_NORTH_EAST and vice versa if the surface extends beyond the left
     * or right edges of the monitor.
     *
     * If %GDK_ANCHOR_SLIDE_X is set, the surface can be shifted horizontally to fit
     * on-screen. If %GDK_ANCHOR_RESIZE_X is set, the surface can be shrunken
     * horizontally to fit.
     *
     * In general, when multiple flags are set, flipping should take precedence over
     * sliding, which should take precedence over resizing.
     */
    export namespace AnchorHints {
        export const $gtype: GObject.GType<AnchorHints>;
    }
    enum AnchorHints {
        /**
         * allow flipping anchors horizontally
         */
        FLIP_X = 1,
        /**
         * allow flipping anchors vertically
         */
        FLIP_Y = 2,
        /**
         * allow sliding surface horizontally
         */
        SLIDE_X = 4,
        /**
         * allow sliding surface vertically
         */
        SLIDE_Y = 8,
        /**
         * allow resizing surface horizontally
         */
        RESIZE_X = 16,
        /**
         * allow resizing surface vertically
         */
        RESIZE_Y = 32,
        /**
         * allow flipping anchors on both axes
         */
        FLIP = 3,
        /**
         * allow sliding surface on both axes
         */
        SLIDE = 12,
        /**
         * allow resizing surface on both axes
         */
        RESIZE = 48,
    }
    /**
     * Flags describing the current capabilities of a device/tool.
     */
    export namespace AxisFlags {
        export const $gtype: GObject.GType<AxisFlags>;
    }
    enum AxisFlags {
        /**
         * X axis is present
         */
        X = 2,
        /**
         * Y axis is present
         */
        Y = 4,
        /**
         * Scroll X delta axis is present
         */
        DELTA_X = 8,
        /**
         * Scroll Y delta axis is present
         */
        DELTA_Y = 16,
        /**
         * Pressure axis is present
         */
        PRESSURE = 32,
        /**
         * X tilt axis is present
         */
        XTILT = 64,
        /**
         * Y tilt axis is present
         */
        YTILT = 128,
        /**
         * Wheel axis is present
         */
        WHEEL = 256,
        /**
         * Distance axis is present
         */
        DISTANCE = 512,
        /**
         * Z-axis rotation is present
         */
        ROTATION = 1024,
        /**
         * Slider axis is present
         */
        SLIDER = 2048,
    }
    /**
     * Used in `GdkDrop` and `GdkDrag` to indicate the actions that the
     * destination can and should do with the dropped data.
     */
    export namespace DragAction {
        export const $gtype: GObject.GType<DragAction>;
    }
    enum DragAction {
        /**
         * Copy the data.
         */
        COPY = 1,
        /**
         * Move the data, i.e. first copy it, then delete
         *   it from the source using the DELETE target of the X selection protocol.
         */
        MOVE = 2,
        /**
         * Add a link to the data. Note that this is only
         *   useful if source and destination agree on what it means, and is not
         *   supported on all platforms.
         */
        LINK = 4,
        /**
         * Ask the user what to do with the data.
         */
        ASK = 8,
    }
    /**
     * Used to represent the different paint clock phases that can be requested.
     *
     * The elements of the enumeration correspond to the signals of `GdkFrameClock`.
     */
    export namespace FrameClockPhase {
        export const $gtype: GObject.GType<FrameClockPhase>;
    }
    enum FrameClockPhase {
        /**
         * no phase
         */
        NONE,
        /**
         * corresponds to GdkFrameClock::flush-events. Should not be handled by applications.
         */
        FLUSH_EVENTS = 1,
        /**
         * corresponds to GdkFrameClock::before-paint. Should not be handled by applications.
         */
        BEFORE_PAINT = 2,
        /**
         * corresponds to GdkFrameClock::update.
         */
        UPDATE = 4,
        /**
         * corresponds to GdkFrameClock::layout. Should not be handled by applications.
         */
        LAYOUT = 8,
        /**
         * corresponds to GdkFrameClock::paint.
         */
        PAINT = 16,
        /**
         * corresponds to GdkFrameClock::resume-events. Should not be handled by applications.
         */
        RESUME_EVENTS = 32,
        /**
         * corresponds to GdkFrameClock::after-paint. Should not be handled by applications.
         */
        AFTER_PAINT = 64,
    }
    /**
     * The list of the different APIs that GdkGLContext can potentially support.
     */
    export namespace GLAPI {
        export const $gtype: GObject.GType<GLAPI>;
    }
    enum GLAPI {
        /**
         * The OpenGL API
         */
        GL = 1,
        /**
         * The OpenGL ES API
         */
        GLES = 2,
    }
    /**
     * Flags to indicate the state of modifier keys and mouse buttons
     * in events.
     *
     * Typical modifier keys are Shift, Control, Meta, Super, Hyper, Alt, Compose,
     * Apple, CapsLock or ShiftLock.
     *
     * Note that GDK may add internal values to events which include values outside
     * of this enumeration. Your code should preserve and ignore them. You can use
     * %GDK_MODIFIER_MASK to remove all private values.
     */
    export namespace ModifierType {
        export const $gtype: GObject.GType<ModifierType>;
    }
    enum ModifierType {
        /**
         * No modifier.
         */
        NO_MODIFIER_MASK,
        /**
         * the Shift key.
         */
        SHIFT_MASK = 1,
        /**
         * a Lock key (depending on the Windowing System configuration,
         *    this may either be <kbd>CapsLock</kbd> or <kbd>ShiftLock</kbd>).
         */
        LOCK_MASK = 2,
        /**
         * the Control key.
         */
        CONTROL_MASK = 4,
        /**
         * the fourth modifier key (it depends on the Windowing System
         *    configuration which key is interpreted as this modifier, but normally it
         *    is the <kbd>Alt</kbd> key).
         */
        ALT_MASK = 8,
        /**
         * the first mouse button.
         */
        'BUTTON1_MASK' = 256,
        /**
         * the second mouse button.
         */
        'BUTTON2_MASK' = 512,
        /**
         * the third mouse button.
         */
        'BUTTON3_MASK' = 1024,
        /**
         * the fourth mouse button.
         */
        'BUTTON4_MASK' = 2048,
        /**
         * the fifth mouse button.
         */
        'BUTTON5_MASK' = 4096,
        /**
         * the Super modifier.
         */
        SUPER_MASK = 67108864,
        /**
         * the Hyper modifier.
         */
        HYPER_MASK = 134217728,
        /**
         * the Meta modifier. Maps to Command on macOS.
         */
        META_MASK = 268435456,
    }
    /**
     * Flags about a paintable object.
     *
     * Implementations use these for optimizations such as caching.
     */
    export namespace PaintableFlags {
        export const $gtype: GObject.GType<PaintableFlags>;
    }
    enum PaintableFlags {
        /**
         * The size is immutable.
         *   The [signal`Gdk`.Paintable::invalidate-size] signal will never be
         *   emitted.
         */
        SIZE = 1,
        /**
         * The content is immutable.
         *   The [signal`Gdk`.Paintable::invalidate-contents] signal will never be
         *   emitted.
         */
        CONTENTS = 2,
    }
    /**
     * Flags describing the seat capabilities.
     */
    export namespace SeatCapabilities {
        export const $gtype: GObject.GType<SeatCapabilities>;
    }
    enum SeatCapabilities {
        /**
         * No input capabilities
         */
        NONE,
        /**
         * The seat has a pointer (e.g. mouse)
         */
        POINTER = 1,
        /**
         * The seat has touchscreen(s) attached
         */
        TOUCH = 2,
        /**
         * The seat has drawing tablet(s) attached
         */
        TABLET_STYLUS = 4,
        /**
         * The seat has keyboard(s) attached
         */
        KEYBOARD = 8,
        /**
         * The seat has drawing tablet pad(s) attached
         */
        TABLET_PAD = 16,
        /**
         * The union of all pointing capabilities
         */
        ALL_POINTING = 7,
        /**
         * The union of all capabilities
         */
        ALL = 31,
    }
    /**
     * Specifies the state of a toplevel surface.
     *
     * On platforms that support information about individual edges, the
     * %GDK_TOPLEVEL_STATE_TILED state will be set whenever any of the individual
     * tiled states is set. On platforms that lack that support, the tiled state
     * will give an indication of tiledness without any of the per-edge states
     * being set.
     */
    export namespace ToplevelState {
        export const $gtype: GObject.GType<ToplevelState>;
    }
    enum ToplevelState {
        /**
         * the surface is minimized
         */
        MINIMIZED = 1,
        /**
         * the surface is maximized
         */
        MAXIMIZED = 2,
        /**
         * the surface is sticky
         */
        STICKY = 4,
        /**
         * the surface is maximized without decorations
         */
        FULLSCREEN = 8,
        /**
         * the surface is kept above other surfaces
         */
        ABOVE = 16,
        /**
         * the surface is kept below other surfaces
         */
        BELOW = 32,
        /**
         * the surface is presented as focused (with active decorations)
         */
        FOCUSED = 64,
        /**
         * the surface is in a tiled state
         */
        TILED = 128,
        /**
         * whether the top edge is tiled
         */
        TOP_TILED = 256,
        /**
         * whether the top edge is resizable
         */
        TOP_RESIZABLE = 512,
        /**
         * whether the right edge is tiled
         */
        RIGHT_TILED = 1024,
        /**
         * whether the right edge is resizable
         */
        RIGHT_RESIZABLE = 2048,
        /**
         * whether the bottom edge is tiled
         */
        BOTTOM_TILED = 4096,
        /**
         * whether the bottom edge is resizable
         */
        BOTTOM_RESIZABLE = 8192,
        /**
         * whether the left edge is tiled
         */
        LEFT_TILED = 16384,
        /**
         * whether the left edge is resizable
         */
        LEFT_RESIZABLE = 32768,
        /**
         * The surface is not visible to the user.
         */
        SUSPENDED = 65536,
    }
    namespace AppLaunchContext {
        // Signal signatures
        interface SignalSignatures extends Gio.AppLaunchContext.SignalSignatures {
            'notify::display'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Gio.AppLaunchContext.ConstructorProps {
            /**
             * The display that the `GdkAppLaunchContext` is on.
             */
            display: Display;
        }
    }
    type AppLaunchContext = (typeof classes.AppLaunchContext)['prototype'];
    const AppLaunchContext: typeof classes.AppLaunchContext &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.AppLaunchContext.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, AppLaunchContext.SignalSignatures> & classes.AppLaunchContext);
    namespace ButtonEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to a button on a pointer device.
     */
    class ButtonEvent extends Event {
        static '$gtype': GObject.GType<ButtonEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.ButtonEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ButtonEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.ButtonEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ButtonEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.ButtonEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.ButtonEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Extract the button number from a button event.
         *
         * @returns the button of `event`
         */
        get_button(): number;
    }
    namespace CairoContext {
        // Signal signatures
        interface SignalSignatures extends DrawContext.SignalSignatures {
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends DrawContext.ConstructorProps {}
    }
    type CairoContext = (typeof classes.CairoContext)['prototype'];
    const CairoContext: typeof classes.CairoContext &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.CairoContext.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, CairoContext.SignalSignatures> & classes.CairoContext);
    namespace CicpParams {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::color-primaries'(pspec: GObject.ParamSpec): void;
            'notify::matrix-coefficients'(pspec: GObject.ParamSpec): void;
            'notify::range'(pspec: GObject.ParamSpec): void;
            'notify::transfer-function'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The color primaries to use.
             *
             * Supported values:
             *
             * - 1: BT.709 / sRGB
             * - 2: unspecified
             * - 5: PAL
             * - 6,7: BT.601 / NTSC
             * - 9: BT.2020
             * - 12: Display P3
             */
            color_primaries: number;
            /**
             * The color primaries to use.
             *
             * Supported values:
             *
             * - 1: BT.709 / sRGB
             * - 2: unspecified
             * - 5: PAL
             * - 6,7: BT.601 / NTSC
             * - 9: BT.2020
             * - 12: Display P3
             */
            colorPrimaries: number;
            /**
             * The matrix coefficients (for YUV to RGB conversion).
             *
             * Supported values:
             *
             * - 0: RGB
             * - 2: unspecified
             */
            matrix_coefficients: number;
            /**
             * The matrix coefficients (for YUV to RGB conversion).
             *
             * Supported values:
             *
             * - 0: RGB
             * - 2: unspecified
             */
            matrixCoefficients: number;
            /**
             * Whether the data is using the full range of values.
             *
             * The range of the data.
             */
            range: CicpRange;
            /**
             * The transfer function to use.
             *
             * Supported values:
             *
             * - 1,6,14,15: BT.709, BT.601, BT.2020
             * - 2: unspecified
             * - 4: gamma 2.2
             * - 5: gamma 2.8
             * - 8: linear
             * - 13: sRGB
             * - 16: BT.2100 PQ
             * - 18: BT.2100 HLG
             */
            transfer_function: number;
            /**
             * The transfer function to use.
             *
             * Supported values:
             *
             * - 1,6,14,15: BT.709, BT.601, BT.2020
             * - 2: unspecified
             * - 4: gamma 2.2
             * - 5: gamma 2.8
             * - 8: linear
             * - 13: sRGB
             * - 16: BT.2100 PQ
             * - 18: BT.2100 HLG
             */
            transferFunction: number;
        }
    }
    type CicpParams = (typeof classes.CicpParams)['prototype'];
    const CicpParams: typeof classes.CicpParams &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.CicpParams.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, CicpParams.SignalSignatures> & classes.CicpParams);
    namespace Clipboard {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed(): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::formats'(pspec: GObject.ParamSpec): void;
            'notify::local'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The `GdkContentProvider` or %NULL if the clipboard is empty or contents are
             * provided otherwise.
             */
            content: ContentProvider;
            /**
             * The `GdkDisplay` that the clipboard belongs to.
             */
            display: Display;
            /**
             * The possible formats that the clipboard can provide its data in.
             */
            formats: ContentFormats;
            /**
             * %TRUE if the contents of the clipboard are owned by this process.
             */
            local: boolean;
        }
    }
    type Clipboard = (typeof classes.Clipboard)['prototype'];
    const Clipboard: typeof classes.Clipboard &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Clipboard.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Clipboard.SignalSignatures> & classes.Clipboard);
    namespace ContentDeserializer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
    }
    type ContentDeserializer = (typeof classes.ContentDeserializer)['prototype'];
    const ContentDeserializer: typeof classes.ContentDeserializer &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.ContentDeserializer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ContentDeserializer.SignalSignatures> & classes.ContentDeserializer);
    namespace ContentProvider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'content-changed'(): void;
            'notify::formats'(pspec: GObject.ParamSpec): void;
            'notify::storable-formats'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The possible formats that the provider can provide its data in.
             */
            formats: ContentFormats;
            /**
             * The subset of formats that clipboard managers should store this provider's data in.
             */
            storable_formats: ContentFormats;
            /**
             * The subset of formats that clipboard managers should store this provider's data in.
             */
            storableFormats: ContentFormats;
        }
    }
    type ContentProvider = (typeof classes.ContentProvider)['prototype'];
    const ContentProvider: typeof classes.ContentProvider &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.ContentProvider.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ContentProvider.SignalSignatures> & classes.ContentProvider);
    namespace ContentSerializer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
    }
    type ContentSerializer = (typeof classes.ContentSerializer)['prototype'];
    const ContentSerializer: typeof classes.ContentSerializer &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.ContentSerializer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ContentSerializer.SignalSignatures> & classes.ContentSerializer);
    namespace CrossingEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event caused by a pointing device moving between surfaces.
     */
    class CrossingEvent extends Event {
        static '$gtype': GObject.GType<CrossingEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.CrossingEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.CrossingEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.CrossingEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.CrossingEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.CrossingEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.CrossingEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Extracts the notify detail from a crossing event.
         *
         * @returns the notify detail of `event`
         */
        get_detail(): NotifyType;
        /**
         * Checks if the `event` surface is the focus surface.
         *
         * @returns %TRUE if the surface is the focus surface
         */
        get_focus(): boolean;
        /**
         * Extracts the crossing mode from a crossing event.
         *
         * @returns the mode of `event`
         */
        get_mode(): CrossingMode;
    }
    namespace Cursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::fallback'(pspec: GObject.ParamSpec): void;
            'notify::hotspot-x'(pspec: GObject.ParamSpec): void;
            'notify::hotspot-y'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::texture'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * Cursor to fall back to if this cursor cannot be displayed.
             */
            fallback: Cursor;
            /**
             * X position of the cursor hotspot in the cursor image.
             */
            hotspot_x: number;
            /**
             * X position of the cursor hotspot in the cursor image.
             */
            hotspotX: number;
            /**
             * Y position of the cursor hotspot in the cursor image.
             */
            hotspot_y: number;
            /**
             * Y position of the cursor hotspot in the cursor image.
             */
            hotspotY: number;
            /**
             * Name of this this cursor.
             *
             * The name will be %NULL if the cursor was created from a texture.
             */
            name: string;
            /**
             * The texture displayed by this cursor.
             *
             * The texture will be %NULL if the cursor was created from a name.
             */
            texture: Texture;
        }
    }
    type Cursor = (typeof classes.Cursor)['prototype'];
    const Cursor: typeof classes.Cursor &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Cursor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Cursor.SignalSignatures> & classes.Cursor);
    namespace DNDEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to drag and drop operations.
     */
    class DNDEvent extends Event {
        static '$gtype': GObject.GType<DNDEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.DNDEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DNDEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.DNDEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DNDEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.DNDEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.DNDEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the `GdkDrop` object from a DND event.
         *
         * @returns the drop
         */
        get_drop(): Drop | null;
    }
    namespace DeleteEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to closing a top-level surface.
     */
    class DeleteEvent extends Event {
        static '$gtype': GObject.GType<DeleteEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.DeleteEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DeleteEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.DeleteEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DeleteEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.DeleteEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.DeleteEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed(): void;
            'tool-changed'(arg0: DeviceTool): void;
            'notify::active-layout-index'(pspec: GObject.ParamSpec): void;
            'notify::caps-lock-state'(pspec: GObject.ParamSpec): void;
            'notify::direction'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::has-bidi-layouts'(pspec: GObject.ParamSpec): void;
            'notify::has-cursor'(pspec: GObject.ParamSpec): void;
            'notify::layout-names'(pspec: GObject.ParamSpec): void;
            'notify::modifier-state'(pspec: GObject.ParamSpec): void;
            'notify::n-axes'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::num-lock-state'(pspec: GObject.ParamSpec): void;
            'notify::num-touches'(pspec: GObject.ParamSpec): void;
            'notify::product-id'(pspec: GObject.ParamSpec): void;
            'notify::scroll-lock-state'(pspec: GObject.ParamSpec): void;
            'notify::seat'(pspec: GObject.ParamSpec): void;
            'notify::source'(pspec: GObject.ParamSpec): void;
            'notify::tool'(pspec: GObject.ParamSpec): void;
            'notify::vendor-id'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The index of the keyboard active layout of a `GdkDevice`.
             *
             * Will be -1 if there is no valid active layout.
             *
             * This is only relevant for keyboard devices.
             */
            active_layout_index: number;
            /**
             * The index of the keyboard active layout of a `GdkDevice`.
             *
             * Will be -1 if there is no valid active layout.
             *
             * This is only relevant for keyboard devices.
             */
            activeLayoutIndex: number;
            /**
             * Whether Caps Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            caps_lock_state: boolean;
            /**
             * Whether Caps Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            capsLockState: boolean;
            /**
             * The direction of the current layout.
             *
             * This is only relevant for keyboard devices.
             */
            direction: Pango.Direction;
            /**
             * The `GdkDisplay` the `GdkDevice` pertains to.
             */
            display: Display;
            /**
             * Whether the device has both right-to-left and left-to-right layouts.
             *
             * This is only relevant for keyboard devices.
             */
            has_bidi_layouts: boolean;
            /**
             * Whether the device has both right-to-left and left-to-right layouts.
             *
             * This is only relevant for keyboard devices.
             */
            hasBidiLayouts: boolean;
            /**
             * Whether the device is represented by a cursor on the screen.
             */
            has_cursor: boolean;
            /**
             * Whether the device is represented by a cursor on the screen.
             */
            hasCursor: boolean;
            /**
             * The names of the keyboard layouts of a `GdkDevice`.
             *
             * This is only relevant for keyboard devices.
             */
            layout_names: string[];
            /**
             * The names of the keyboard layouts of a `GdkDevice`.
             *
             * This is only relevant for keyboard devices.
             */
            layoutNames: string[];
            /**
             * The current modifier state of the device.
             *
             * This is only relevant for keyboard devices.
             */
            modifier_state: ModifierType;
            /**
             * The current modifier state of the device.
             *
             * This is only relevant for keyboard devices.
             */
            modifierState: ModifierType;
            /**
             * Number of axes in the device.
             */
            n_axes: number;
            /**
             * Number of axes in the device.
             */
            nAxes: number;
            /**
             * The device name.
             */
            name: string;
            /**
             * Whether Num Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            num_lock_state: boolean;
            /**
             * Whether Num Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            numLockState: boolean;
            /**
             * The maximal number of concurrent touches on a touch device.
             *
             * Will be 0 if the device is not a touch device or if the number
             * of touches is unknown.
             */
            num_touches: number;
            /**
             * The maximal number of concurrent touches on a touch device.
             *
             * Will be 0 if the device is not a touch device or if the number
             * of touches is unknown.
             */
            numTouches: number;
            /**
             * Product ID of this device.
             *
             * See [method`Gdk`.Device.get_product_id].
             */
            product_id: string;
            /**
             * Product ID of this device.
             *
             * See [method`Gdk`.Device.get_product_id].
             */
            productId: string;
            /**
             * Whether Scroll Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            scroll_lock_state: boolean;
            /**
             * Whether Scroll Lock is on.
             *
             * This is only relevant for keyboard devices.
             */
            scrollLockState: boolean;
            /**
             * `GdkSeat` of this device.
             */
            seat: Seat;
            /**
             * Source type for the device.
             */
            source: InputSource;
            /**
             * The `GdkDeviceTool` that is currently used with this device.
             */
            tool: DeviceTool;
            /**
             * Vendor ID of this device.
             *
             * See [method`Gdk`.Device.get_vendor_id].
             */
            vendor_id: string;
            /**
             * Vendor ID of this device.
             *
             * See [method`Gdk`.Device.get_vendor_id].
             */
            vendorId: string;
        }
    }
    type Device = (typeof classes.Device)['prototype'];
    const Device: typeof classes.Device &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Device.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Device.SignalSignatures> & classes.Device);
    namespace DeviceTool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::axes'(pspec: GObject.ParamSpec): void;
            'notify::hardware-id'(pspec: GObject.ParamSpec): void;
            'notify::serial'(pspec: GObject.ParamSpec): void;
            'notify::tool-type'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The axes of the tool.
             */
            axes: AxisFlags;
            /**
             * The hardware ID of the tool.
             */
            hardware_id: number;
            /**
             * The hardware ID of the tool.
             */
            hardwareId: number;
            /**
             * The serial number of the tool.
             */
            serial: number;
            /**
             * The type of the tool.
             */
            tool_type: DeviceToolType;
            /**
             * The type of the tool.
             */
            toolType: DeviceToolType;
        }
    }
    type DeviceTool = (typeof classes.DeviceTool)['prototype'];
    const DeviceTool: typeof classes.DeviceTool &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.DeviceTool.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceTool.SignalSignatures> & classes.DeviceTool);
    namespace Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            closed(arg0: boolean): void;
            opened(): void;
            'seat-added'(arg0: Seat): void;
            'seat-removed'(arg0: Seat): void;
            'setting-changed'(arg0: string): void;
            'notify::composited'(pspec: GObject.ParamSpec): void;
            'notify::dmabuf-formats'(pspec: GObject.ParamSpec): void;
            'notify::input-shapes'(pspec: GObject.ParamSpec): void;
            'notify::rgba'(pspec: GObject.ParamSpec): void;
            'notify::shadow-width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * %TRUE if the display properly composites the alpha channel.
             */
            composited: boolean;
            /**
             * The dma-buf formats that are supported on this display
             */
            dmabuf_formats: DmabufFormats;
            /**
             * The dma-buf formats that are supported on this display
             */
            dmabufFormats: DmabufFormats;
            /**
             * %TRUE if the display supports input shapes.
             */
            input_shapes: boolean;
            /**
             * %TRUE if the display supports input shapes.
             */
            inputShapes: boolean;
            /**
             * %TRUE if the display supports an alpha channel.
             */
            rgba: boolean;
            /**
             * %TRUE if the display supports extensible frames.
             */
            shadow_width: boolean;
            /**
             * %TRUE if the display supports extensible frames.
             */
            shadowWidth: boolean;
        }
    }
    type Display = (typeof classes.Display)['prototype'];
    const Display: typeof classes.Display &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Display.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Display.SignalSignatures> & classes.Display);
    namespace DisplayManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'display-opened'(arg0: Display): void;
            'notify::default-display'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The default display.
             */
            default_display: Display;
            /**
             * The default display.
             */
            defaultDisplay: Display;
        }
    }
    type DisplayManager = (typeof classes.DisplayManager)['prototype'];
    const DisplayManager: typeof classes.DisplayManager &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.DisplayManager.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DisplayManager.SignalSignatures> & classes.DisplayManager);
    namespace DmabufTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Texture.ConstructorProps,
                Paintable.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {}
    }
    type DmabufTexture = (typeof classes.DmabufTexture)['prototype'];
    const DmabufTexture: typeof classes.DmabufTexture &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.DmabufTexture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DmabufTexture.SignalSignatures> & classes.DmabufTexture);
    namespace DmabufTextureBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::fourcc'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::modifier'(pspec: GObject.ParamSpec): void;
            'notify::n-planes'(pspec: GObject.ParamSpec): void;
            'notify::premultiplied'(pspec: GObject.ParamSpec): void;
            'notify::update-region'(pspec: GObject.ParamSpec): void;
            'notify::update-texture'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The color state of the texture.
             */
            color_state: ColorState;
            /**
             * The color state of the texture.
             */
            colorState: ColorState;
            /**
             * The display that this texture will be used on.
             */
            display: Display;
            /**
             * The format of the texture, as a fourcc value.
             */
            fourcc: number;
            /**
             * The height of the texture.
             */
            height: number;
            /**
             * The modifier.
             */
            modifier: number;
            /**
             * The number of planes of the texture.
             *
             * Note that you can set properties for other planes,
             * but they will be ignored when constructing the texture.
             */
            n_planes: number;
            /**
             * The number of planes of the texture.
             *
             * Note that you can set properties for other planes,
             * but they will be ignored when constructing the texture.
             */
            nPlanes: number;
            /**
             * Whether the alpha channel is premultiplied into the others.
             *
             * Only relevant if the format has alpha.
             */
            premultiplied: boolean;
            /**
             * The update region for [property`Gdk`.DmabufTextureBuilder:update-texture].
             */
            update_region: cairo.Region;
            /**
             * The update region for [property`Gdk`.DmabufTextureBuilder:update-texture].
             */
            updateRegion: cairo.Region;
            /**
             * The texture [property`Gdk`.DmabufTextureBuilder:update-region] is an update for.
             */
            update_texture: Texture;
            /**
             * The texture [property`Gdk`.DmabufTextureBuilder:update-region] is an update for.
             */
            updateTexture: Texture;
            /**
             * The width of the texture.
             */
            width: number;
        }
    }
    type DmabufTextureBuilder = (typeof classes.DmabufTextureBuilder)['prototype'];
    const DmabufTextureBuilder: typeof classes.DmabufTextureBuilder &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.DmabufTextureBuilder.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DmabufTextureBuilder.SignalSignatures> & classes.DmabufTextureBuilder);
    namespace Drag {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            cancel(arg0: DragCancelReason): void;
            'dnd-finished'(): void;
            'drop-performed'(): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::device'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::formats'(pspec: GObject.ParamSpec): void;
            'notify::selected-action'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The possible actions of this drag.
             */
            actions: DragAction;
            /**
             * The `GdkContentProvider`.
             */
            content: ContentProvider;
            /**
             * The `GdkDevice` that is performing the drag.
             */
            device: Device;
            /**
             * The `GdkDisplay` that the drag belongs to.
             */
            display: Display;
            /**
             * The possible formats that the drag can provide its data in.
             */
            formats: ContentFormats;
            /**
             * The currently selected action of the drag.
             */
            selected_action: DragAction;
            /**
             * The currently selected action of the drag.
             */
            selectedAction: DragAction;
            /**
             * The surface where the drag originates.
             */
            surface: Surface;
        }
    }
    type Drag = (typeof classes.Drag)['prototype'];
    const Drag: typeof classes.Drag &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Drag.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Drag.SignalSignatures> & classes.Drag);
    namespace DrawContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The `GdkDisplay` used to create the `GdkDrawContext`.
             */
            display: Display;
            /**
             * The `GdkSurface` the context is bound to.
             */
            surface: Surface;
        }
    }
    type DrawContext = (typeof classes.DrawContext)['prototype'];
    const DrawContext: typeof classes.DrawContext &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.DrawContext.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DrawContext.SignalSignatures> & classes.DrawContext);
    namespace Drop {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::device'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::drag'(pspec: GObject.ParamSpec): void;
            'notify::formats'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The possible actions for this drop
             */
            actions: DragAction;
            /**
             * The `GdkDevice` performing the drop
             */
            device: Device;
            /**
             * The `GdkDisplay` that the drop belongs to.
             */
            display: Display;
            /**
             * The `GdkDrag` that initiated this drop
             */
            drag: Drag;
            /**
             * The possible formats that the drop can provide its data in.
             */
            formats: ContentFormats;
            /**
             * The `GdkSurface` the drop happens on
             */
            surface: Surface;
        }
    }
    type Drop = (typeof classes.Drop)['prototype'];
    const Drop: typeof classes.Drop &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Drop.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Drop.SignalSignatures> & classes.Drop);
    namespace Event {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    /**
     * Represents windowing system events.
     *
     * In GTK applications the events are handled automatically by toplevel
     * widgets and passed on to the event controllers of appropriate widgets,
     * so using `GdkEvent` and its related API is rarely needed.
     *
     * `GdkEvent` structs are immutable.
     */
    abstract class Event {
        static '$gtype': GObject.GType<Event>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Event.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Event.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Event.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Event.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Event.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the relative angle from `event1` to `event2`.
         *
         * The relative angle is the angle between the X axis and the line
         * through both events' positions. The rotation direction for positive
         * angles is from the positive X axis towards the positive Y axis.
         *
         * This assumes that both events have X/Y information.
         * If not, this function returns %FALSE.
         *
         * @returns %TRUE if the angle could be calculated.
         * @param _event2 second `GdkEvent`
         */
        _get_angle(_event2: Event): [boolean, number];
        /**
         * Returns the point halfway between the events' positions.
         *
         * This assumes that both events have X/Y information.
         * If not, this function returns %FALSE.
         *
         * @returns %TRUE if the center could be calculated.
         * @param _event2 second `GdkEvent`
         */
        _get_center(_event2: Event): [boolean, number, number];
        /**
         * Returns the distance between the event locations.
         *
         * This assumes that both events have X/Y information.
         * If not, this function returns %FALSE.
         *
         * @returns %TRUE if the distance could be calculated.
         * @param _event2 second `GdkEvent`
         */
        _get_distance(_event2: Event): [boolean, number];
        /**
         * Extracts all axis values from an event.
         *
         * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
         * on the device tool returned by [method`Gdk`.Event.get_device_tool].
         *
         * @returns %TRUE on success, otherwise %FALSE
         */
        get_axes(): [boolean, number[]];
        /**
         * Extract the axis value for a particular axis use from
         * an event structure.
         *
         * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
         * on the device tool returned by [method`Gdk`.Event.get_device_tool].
         *
         * @returns %TRUE if the specified axis was found, otherwise %FALSE
         * @param axis_use the axis use to look for
         */
        get_axis(axis_use: AxisUse | null): [boolean, number];
        /**
         * Returns the device of an event.
         *
         * @returns a `GdkDevice`
         */
        get_device(): Device | null;
        /**
         * Returns a `GdkDeviceTool` representing the tool that
         * caused the event.
         *
         * If the was not generated by a device that supports
         * different tools (such as a tablet), this function will
         * return %NULL.
         *
         * Note: the `GdkDeviceTool` will be constant during
         * the application lifetime, if settings must be stored
         * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
         *
         * @returns The current device tool
         */
        get_device_tool(): DeviceTool | null;
        /**
         * Retrieves the display associated to the `event`.
         *
         * @returns a `GdkDisplay`
         */
        get_display(): Display | null;
        /**
         * Returns the event sequence to which the event belongs.
         *
         * Related touch events are connected in a sequence. Other
         * events typically don't have event sequence information.
         *
         * @returns the event sequence that the event belongs to
         */
        get_event_sequence(): EventSequence;
        /**
         * Retrieves the type of the event.
         *
         * @returns a `GdkEvent`Type
         */
        get_event_type(): EventType;
        /**
         * Retrieves the history of the device that `event` is for, as a list of
         * time and coordinates.
         *
         * The history includes positions that are not delivered as separate events
         * to the application because they occurred in the same frame as `event`.
         *
         * Note that only motion and scroll events record history, and motion
         * events do it only if one of the mouse buttons is down, or the device
         * has a tool.
         *
         * @returns an
         *   array of time and coordinates
         */
        get_history(): TimeCoord[] | null;
        /**
         * Returns the modifier state field of an event.
         *
         * @returns the modifier state of `event`
         */
        get_modifier_state(): ModifierType;
        /**
         * Returns whether this event is an 'emulated' pointer event.
         *
         * Emulated pointer events typically originate from a touch events.
         *
         * @returns %TRUE if this event is emulated
         */
        get_pointer_emulated(): boolean;
        /**
         * Extract the event surface relative x/y coordinates from an event.
         *
         * This position is in [surface coordinates](coordinates.html).
         *
         * @returns whether the positions were set
         */
        get_position(): [boolean, number, number];
        /**
         * Returns the seat that originated the event.
         *
         * @returns a `GdkSeat`.
         */
        get_seat(): Seat | null;
        /**
         * Extracts the surface associated with an event.
         *
         * @returns The `GdkSurface` associated with the event
         */
        get_surface(): Surface | null;
        /**
         * Returns the timestamp of `event`.
         *
         * Not all events have timestamps. In that case, this function
         * returns %GDK_CURRENT_TIME.
         *
         * @returns timestamp field from `event`
         */
        get_time(): number;
        /**
         * Increase the ref count of `event`.
         *
         * @returns `event`
         */
        ref(): Event;
        /**
         * Returns whether a `GdkEvent` should trigger a context menu,
         * according to platform conventions.
         *
         * The right mouse button typically triggers context menus.
         * On macOS, Control+left mouse button also triggers.
         *
         * This function should always be used instead of simply checking for
         *
         * ```c
         * event->button == GDK_BUTTON_SECONDARY
         * ```
         *
         * @returns %TRUE if the event should trigger a context menu.
         */
        triggers_context_menu(): boolean;
        /**
         * Decrease the ref count of `event`.
         *
         * If the last reference is dropped, the structure is freed.
         */
        unref(): void;
    }
    namespace FocusEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to a keyboard focus change.
     */
    class FocusEvent extends Event {
        static '$gtype': GObject.GType<FocusEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.FocusEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.FocusEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.FocusEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.FocusEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.FocusEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.FocusEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Extracts whether this event is about focus entering or
         * leaving the surface.
         *
         * @returns %TRUE of the focus is entering
         */
        get_in(): boolean;
    }
    namespace FrameClock {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'after-paint'(): void;
            'before-paint'(): void;
            'flush-events'(): void;
            layout(): void;
            paint(): void;
            'resume-events'(): void;
            update(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type FrameClock = (typeof classes.FrameClock)['prototype'];
    const FrameClock: typeof classes.FrameClock &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.FrameClock.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FrameClock.SignalSignatures> & classes.FrameClock);
    namespace GLContext {
        // Signal signatures
        interface SignalSignatures extends DrawContext.SignalSignatures {
            'notify::allowed-apis'(pspec: GObject.ParamSpec): void;
            'notify::api'(pspec: GObject.ParamSpec): void;
            'notify::shared-context'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends DrawContext.ConstructorProps {
            /**
             * The allowed APIs.
             */
            allowed_apis: GLAPI;
            /**
             * The allowed APIs.
             */
            allowedApis: GLAPI;
            /**
             * The API currently in use.
             */
            api: GLAPI;
            /**
             * Always %NULL
             *
             * As many contexts can share data now and no single shared context exists
             * anymore, this function has been deprecated and now always returns %NULL.
             */
            shared_context: GLContext;
            /**
             * Always %NULL
             *
             * As many contexts can share data now and no single shared context exists
             * anymore, this function has been deprecated and now always returns %NULL.
             */
            sharedContext: GLContext;
        }
    }
    type GLContext = (typeof classes.GLContext)['prototype'];
    const GLContext: typeof classes.GLContext &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.GLContext.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, GLContext.SignalSignatures> & classes.GLContext);
    namespace GLTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Texture.ConstructorProps,
                Paintable.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {}
    }
    type GLTexture = (typeof classes.GLTexture)['prototype'];
    const GLTexture: typeof classes.GLTexture &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.GLTexture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, GLTexture.SignalSignatures> & classes.GLTexture);
    namespace GLTextureBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::format'(pspec: GObject.ParamSpec): void;
            'notify::has-mipmap'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::sync'(pspec: GObject.ParamSpec): void;
            'notify::update-region'(pspec: GObject.ParamSpec): void;
            'notify::update-texture'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The color state of the texture.
             */
            color_state: ColorState;
            /**
             * The color state of the texture.
             */
            colorState: ColorState;
            /**
             * The context owning the texture.
             */
            context: GLContext;
            /**
             * The format when downloading the texture.
             */
            format: MemoryFormat;
            /**
             * If the texture has a mipmap.
             */
            has_mipmap: boolean;
            /**
             * If the texture has a mipmap.
             */
            hasMipmap: boolean;
            /**
             * The height of the texture.
             */
            height: number;
            /**
             * The texture ID to use.
             */
            id: number;
            /**
             * An optional `GLSync` object.
             *
             * If this is set, GTK will wait on it before using the texture.
             */
            sync: any;
            /**
             * The update region for [property`Gdk`.GLTextureBuilder:update-texture].
             */
            update_region: cairo.Region;
            /**
             * The update region for [property`Gdk`.GLTextureBuilder:update-texture].
             */
            updateRegion: cairo.Region;
            /**
             * The texture [property`Gdk`.GLTextureBuilder:update-region] is an update for.
             */
            update_texture: Texture;
            /**
             * The texture [property`Gdk`.GLTextureBuilder:update-region] is an update for.
             */
            updateTexture: Texture;
            /**
             * The width of the texture.
             */
            width: number;
        }
    }
    type GLTextureBuilder = (typeof classes.GLTextureBuilder)['prototype'];
    const GLTextureBuilder: typeof classes.GLTextureBuilder &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.GLTextureBuilder.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, GLTextureBuilder.SignalSignatures> & classes.GLTextureBuilder);
    namespace GrabBrokenEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to a broken windowing system grab.
     */
    class GrabBrokenEvent extends Event {
        static '$gtype': GObject.GType<GrabBrokenEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.GrabBrokenEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.GrabBrokenEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.GrabBrokenEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.GrabBrokenEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.GrabBrokenEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.GrabBrokenEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Extracts the grab surface from a grab broken event.
         *
         * @returns the grab surface of `event`
         */
        get_grab_surface(): Surface;
        /**
         * Checks whether the grab broken event is for an implicit grab.
         *
         * @returns %TRUE if the an implicit grab was broken
         */
        get_implicit(): boolean;
    }
    namespace KeyEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to a key-based device.
     */
    class KeyEvent extends Event {
        static '$gtype': GObject.GType<KeyEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.KeyEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.KeyEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.KeyEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.KeyEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.KeyEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.KeyEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Extracts the consumed modifiers from a key event.
         *
         * @returns the consumed modifiers or `event`
         */
        get_consumed_modifiers(): ModifierType;
        /**
         * Extracts the keycode from a key event.
         *
         * @returns the keycode of `event`
         */
        get_keycode(): number;
        /**
         * Extracts the keyval from a key event.
         *
         * @returns the keyval of `event`
         */
        get_keyval(): number;
        /**
         * Extracts the layout from a key event.
         *
         * @returns the layout of `event`
         */
        get_layout(): number;
        /**
         * Extracts the shift level from a key event.
         *
         * @returns the shift level of `event`
         */
        get_level(): number;
        /**
         * Gets a keyval and modifier combination that will match
         * the event.
         *
         * See [method`Gdk`.KeyEvent.matches].
         *
         * @returns %TRUE on success
         */
        get_match(): [boolean, number, ModifierType];
        /**
         * Extracts whether the key event is for a modifier key.
         *
         * @returns %TRUE if the `event` is for a modifier key
         */
        is_modifier(): boolean;
        /**
         * Matches a key event against a keyval and modifiers.
         *
         * This is typically used to trigger keyboard shortcuts such as Ctrl-C.
         *
         * Partial matches are possible where the combination matches
         * if the currently active group is ignored.
         *
         * Note that we ignore Caps Lock for matching.
         *
         * @returns a `GdkKeyMatch` value describing whether `event` matches
         * @param keyval the keyval to match
         * @param modifiers the modifiers to match
         */
        matches(keyval: number, modifiers: ModifierType | null): KeyMatch;
    }
    namespace MemoryTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Texture.ConstructorProps,
                Paintable.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {}
    }
    type MemoryTexture = (typeof classes.MemoryTexture)['prototype'];
    const MemoryTexture: typeof classes.MemoryTexture &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.MemoryTexture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MemoryTexture.SignalSignatures> & classes.MemoryTexture);
    namespace MemoryTextureBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::bytes'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::format'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::stride'(pspec: GObject.ParamSpec): void;
            'notify::update-region'(pspec: GObject.ParamSpec): void;
            'notify::update-texture'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The bytes holding the data.
             */
            bytes: GLib.Bytes;
            /**
             * The colorstate describing the data.
             */
            color_state: ColorState;
            /**
             * The colorstate describing the data.
             */
            colorState: ColorState;
            /**
             * The format of the data.
             */
            format: MemoryFormat;
            /**
             * The height of the texture.
             */
            height: number;
            /**
             * The rowstride of the texture.
             *
             * The rowstride is the number of bytes between the first pixel
             * in a row of image data, and the first pixel in the next row.
             */
            stride: number;
            /**
             * The update region for [property`Gdk`.MemoryTextureBuilder:update-texture].
             */
            update_region: cairo.Region;
            /**
             * The update region for [property`Gdk`.MemoryTextureBuilder:update-texture].
             */
            updateRegion: cairo.Region;
            /**
             * The texture [property`Gdk`.MemoryTextureBuilder:update-region] is an update for.
             */
            update_texture: Texture;
            /**
             * The texture [property`Gdk`.MemoryTextureBuilder:update-region] is an update for.
             */
            updateTexture: Texture;
            /**
             * The width of the texture.
             */
            width: number;
        }
    }
    type MemoryTextureBuilder = (typeof classes.MemoryTextureBuilder)['prototype'];
    const MemoryTextureBuilder: typeof classes.MemoryTextureBuilder &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.MemoryTextureBuilder.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MemoryTextureBuilder.SignalSignatures> & classes.MemoryTextureBuilder);
    namespace Monitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            invalidate(): void;
            'notify::connector'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::geometry'(pspec: GObject.ParamSpec): void;
            'notify::height-mm'(pspec: GObject.ParamSpec): void;
            'notify::manufacturer'(pspec: GObject.ParamSpec): void;
            'notify::model'(pspec: GObject.ParamSpec): void;
            'notify::refresh-rate'(pspec: GObject.ParamSpec): void;
            'notify::scale'(pspec: GObject.ParamSpec): void;
            'notify::scale-factor'(pspec: GObject.ParamSpec): void;
            'notify::subpixel-layout'(pspec: GObject.ParamSpec): void;
            'notify::valid'(pspec: GObject.ParamSpec): void;
            'notify::width-mm'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The connector name.
             */
            connector: string;
            /**
             * A short description of the monitor, meant for display to the user.
             */
            description: string;
            /**
             * The `GdkDisplay` of the monitor.
             */
            display: Display;
            /**
             * The geometry of the monitor.
             */
            geometry: Rectangle;
            /**
             * The height of the monitor, in millimeters.
             */
            height_mm: number;
            /**
             * The height of the monitor, in millimeters.
             */
            heightMm: number;
            /**
             * The manufacturer name.
             */
            manufacturer: string;
            /**
             * The model name.
             */
            model: string;
            /**
             * The refresh rate, in milli-Hertz.
             */
            refresh_rate: number;
            /**
             * The refresh rate, in milli-Hertz.
             */
            refreshRate: number;
            /**
             * The scale of the monitor.
             */
            scale: number;
            /**
             * The scale factor.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            scale_factor: number;
            /**
             * The scale factor.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            scaleFactor: number;
            /**
             * The subpixel layout.
             */
            subpixel_layout: SubpixelLayout;
            /**
             * The subpixel layout.
             */
            subpixelLayout: SubpixelLayout;
            /**
             * Whether the object is still valid.
             */
            valid: boolean;
            /**
             * The width of the monitor, in millimeters.
             */
            width_mm: number;
            /**
             * The width of the monitor, in millimeters.
             */
            widthMm: number;
        }
    }
    type Monitor = (typeof classes.Monitor)['prototype'];
    const Monitor: typeof classes.Monitor &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Monitor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Monitor.SignalSignatures> & classes.Monitor);
    namespace MotionEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to a pointer or touch device motion.
     */
    class MotionEvent extends Event {
        static '$gtype': GObject.GType<MotionEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.MotionEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.MotionEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.MotionEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.MotionEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.MotionEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.MotionEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace PadEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to a pad-based device.
     */
    class PadEvent extends Event {
        static '$gtype': GObject.GType<PadEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.PadEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.PadEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.PadEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.PadEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.PadEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.PadEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Extracts the information from a pad strip or ring event.
         */
        get_axis_value(): [number, number];
        /**
         * Extracts information about the pressed button from
         * a pad event.
         *
         * @returns the button of `event`
         */
        get_button(): number;
        /**
         * Extracts group and mode information from a pad event.
         */
        get_group_mode(): [number, number];
    }
    namespace ProximityEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to the proximity of a tool to a device.
     */
    class ProximityEvent extends Event {
        static '$gtype': GObject.GType<ProximityEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.ProximityEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ProximityEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.ProximityEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ProximityEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.ProximityEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.ProximityEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ScrollEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to a scrolling motion.
     */
    class ScrollEvent extends Event {
        static '$gtype': GObject.GType<ScrollEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.ScrollEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ScrollEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.ScrollEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ScrollEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.ScrollEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.ScrollEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Extracts the scroll deltas of a scroll event.
         *
         * The deltas will be zero unless the scroll direction
         * is %GDK_SCROLL_SMOOTH.
         *
         * For the representation unit of these deltas, see
         * [method`Gdk`.ScrollEvent.get_unit].
         */
        get_deltas(): [number, number];
        /**
         * Extracts the direction of a scroll event.
         *
         * @returns the scroll direction of `event`
         */
        get_direction(): ScrollDirection;
        /**
         * Extracts the scroll delta unit of a scroll event.
         *
         * The unit will always be %GDK_SCROLL_UNIT_WHEEL if the scroll direction is not
         * %GDK_SCROLL_SMOOTH.
         *
         * @returns the scroll unit.
         */
        get_unit(): ScrollUnit;
        /**
         * Check whether a scroll event is a stop scroll event.
         *
         * Scroll sequences with smooth scroll information may provide
         * a stop scroll event once the interaction with the device finishes,
         * e.g. by lifting a finger. This stop scroll event is the signal
         * that a widget may trigger kinetic scrolling based on the current
         * velocity.
         *
         * Stop scroll events always have a delta of 0/0.
         *
         * @returns %TRUE if the event is a scroll stop event
         */
        is_stop(): boolean;
    }
    namespace Seat {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'device-added'(arg0: Device): void;
            'device-removed'(arg0: Device): void;
            'tool-added'(arg0: DeviceTool): void;
            'tool-removed'(arg0: DeviceTool): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * `GdkDisplay` of this seat.
             */
            display: Display;
        }
    }
    type Seat = (typeof classes.Seat)['prototype'];
    const Seat: typeof classes.Seat &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Seat.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Seat.SignalSignatures> & classes.Seat);
    namespace Snapshot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Snapshot = (typeof classes.Snapshot)['prototype'];
    const Snapshot: typeof classes.Snapshot &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Snapshot.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Snapshot.SignalSignatures> & classes.Snapshot);
    namespace Surface {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'enter-monitor'(arg0: Monitor): void;
            event(arg0: Event): boolean | void;
            layout(arg0: number, arg1: number): void;
            'leave-monitor'(arg0: Monitor): void;
            render(arg0: cairo.Region): boolean | void;
            'notify::cursor'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::frame-clock'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::scale'(pspec: GObject.ParamSpec): void;
            'notify::scale-factor'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The mouse pointer for the `GdkSurface`.
             */
            cursor: Cursor;
            /**
             * The `GdkDisplay` connection of the surface.
             */
            display: Display;
            /**
             * The `GdkFrameClock` of the surface.
             */
            frame_clock: FrameClock;
            /**
             * The `GdkFrameClock` of the surface.
             */
            frameClock: FrameClock;
            /**
             * The height of the surface, in pixels.
             */
            height: number;
            /**
             * Whether the surface is mapped.
             */
            mapped: boolean;
            /**
             * The scale of the surface.
             */
            scale: number;
            /**
             * The scale factor of the surface.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            scale_factor: number;
            /**
             * The scale factor of the surface.
             *
             * The scale factor is the next larger integer,
             * compared to [property`Gdk`.Surface:scale].
             */
            scaleFactor: number;
            /**
             * The width of the surface in pixels.
             */
            width: number;
        }
    }
    type Surface = (typeof classes.Surface)['prototype'];
    const Surface: typeof classes.Surface &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Surface.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Surface.SignalSignatures> & classes.Surface);
    namespace Texture {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Paintable.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {
            /**
             * The color state of the texture.
             */
            color_state: ColorState;
            /**
             * The color state of the texture.
             */
            colorState: ColorState;
            /**
             * The height of the texture, in pixels.
             */
            height: number;
            /**
             * The width of the texture, in pixels.
             */
            width: number;
        }
    }
    type Texture = (typeof classes.Texture)['prototype'];
    const Texture: typeof classes.Texture &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.Texture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Texture.SignalSignatures> & classes.Texture);
    namespace TouchEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to a touch-based device.
     */
    class TouchEvent extends Event {
        static '$gtype': GObject.GType<TouchEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.TouchEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.TouchEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.TouchEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.TouchEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.TouchEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.TouchEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Extracts whether a touch event is emulating a pointer event.
         *
         * @returns %TRUE if `event` is emulating
         */
        get_emulating_pointer(): boolean;
    }
    namespace TouchpadEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }
    /**
     * An event related to a gesture on a touchpad device.
     *
     * Unlike touchscreens, where the windowing system sends basic
     * sequences of begin, update, end events, and leaves gesture
     * recognition to the clients, touchpad gestures are typically
     * processed by the system, resulting in these events.
     */
    class TouchpadEvent extends Event {
        static '$gtype': GObject.GType<TouchpadEvent>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.TouchpadEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.TouchpadEvent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.TouchpadEvent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.TouchpadEvent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.TouchpadEvent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.TouchpadEvent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Extracts delta information from a touchpad event.
         */
        get_deltas(): [number, number];
        /**
         * Extracts the touchpad gesture phase from a touchpad event.
         *
         * @returns the gesture phase of `event`
         */
        get_gesture_phase(): TouchpadGesturePhase;
        /**
         * Extracts the number of fingers from a touchpad event.
         *
         * @returns the number of fingers for `event`
         */
        get_n_fingers(): number;
        /**
         * Extracts the angle delta from a touchpad pinch event.
         *
         * @returns the angle delta of `event`
         */
        get_pinch_angle_delta(): number;
        /**
         * Extracts the scale from a touchpad pinch event.
         *
         * @returns the scale of `event`
         */
        get_pinch_scale(): number;
    }
    namespace VulkanContext {
        // Signal signatures
        interface SignalSignatures extends DrawContext.SignalSignatures {
            'images-updated'(): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends DrawContext.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    type VulkanContext = (typeof classes.VulkanContext)['prototype'];
    const VulkanContext: typeof classes.VulkanContext &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gdk.VulkanContext.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, VulkanContext.SignalSignatures> & classes.VulkanContext);
    export type CicpParamsClass = typeof CicpParams;
    /**
     * Provides information to interpret colors and pixels in a variety of ways.
     *
     * They are also known as
     * [*color spaces*](https://en.wikipedia.org/wiki/Color_space).
     *
     * Crucially, GTK knows how to convert colors from one color
     * state to another.
     *
     * `GdkColorState` objects are immutable and therefore threadsafe.
     */
    abstract class ColorState {
        static '$gtype': GObject.GType<ColorState>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Returns the color state object representing the oklab color space.
         *
         * This is a perceptually uniform color state.
         */
        static get_oklab(): ColorState;
        /**
         * Returns the color state object representing the oklch color space.
         *
         * This is the polar variant of oklab, in which the hue is encoded as
         * a polar coordinate.
         */
        static get_oklch(): ColorState;
        /**
         * Returns the color state object representing the linear rec2100 color space.
         *
         * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and a linear
         * transfer function.
         *
         * It is equivalent to the [Cicp](class.CicpParams.html) tuple 9/8/0/1.
         *
         * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-linear)
         * for details about this colorstate.
         */
        static get_rec2100_linear(): ColorState;
        /**
         * Returns the color state object representing the rec2100-pq color space.
         *
         * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and the transfer
         * function defined by SMPTE ST 2084 and BT.2100-2.
         *
         * It is equivalent to the [Cicp](class.CicpParams.html) tuple 9/16/0/1.
         *
         * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-pq)
         * for details about this colorstate.
         */
        static get_rec2100_pq(): ColorState;
        /**
         * Returns the color state object representing the sRGB color space.
         *
         * This color state uses the primaries defined by BT.709-6 and the transfer function
         * defined by IEC 61966-2-1.
         *
         * It is equivalent to the [Cicp](class.CicpParams.html) tuple 1/13/0/1.
         *
         * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB)
         * for details about this colorstate.
         */
        static get_srgb(): ColorState;
        /**
         * Returns the color state object representing the linearized sRGB color space.
         *
         * This color state uses the primaries defined by BT.709-6 and a linear transfer function.
         *
         * It is equivalent to the [Cicp](class.CicpParams.html) tuple 1/8/0/1.
         *
         * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB-linear)
         * for details about this colorstate.
         */
        static get_srgb_linear(): ColorState;
        // Methods
        /**
         * Create a [class`Gdk`.CicpParams] representing the colorstate.
         *
         * It is not guaranteed that every `GdkColorState` can be
         * represented with Cicp parameters. If that is the case,
         * this function returns `NULL`.
         *
         * @returns A new [class`Gdk`.CicpParams]
         */
        create_cicp_params(): CicpParams | null;
        /**
         * Compares two `GdkColorStates` for equality.
         *
         * Note that this function is not guaranteed to be perfect and two objects
         * describing the same color state may compare not equal. However, different
         * color states will never compare equal.
         *
         * @returns %TRUE if the two color states compare equal
         * @param other another `GdkColorStatee`
         */
        equal(other: ColorState): boolean;
        /**
         * Increase the reference count of `self`.
         *
         * @returns the object that was passed in
         */
        ref(): ColorState;
        /**
         * Decrease the reference count of `self`.
         *
         * Unless `self` is static, it will be freed
         * when the reference count reaches zero.
         */
        unref(): void;
    }
    /**
     * Used to advertise and negotiate the format of content.
     *
     * You will encounter `GdkContentFormats` when interacting with objects
     * controlling operations that pass data between different widgets, window
     * or application, like [class`Gdk`.Drag], [class`Gdk`.Drop],
     * [class`Gdk`.Clipboard] or [class`Gdk`.ContentProvider].
     *
     * GDK supports content in 2 forms: `GType` and mime type.
     * Using `GTypes` is meant only for in-process content transfers. Mime types
     * are meant to be used for data passing both in-process and out-of-process.
     * The details of how data is passed is described in the documentation of
     * the actual implementations. To transform between the two forms,
     * [class`Gdk`.ContentSerializer] and [class`Gdk`.ContentDeserializer] are used.
     *
     * A `GdkContentFormats` describes a set of possible formats content can be
     * exchanged in. It is assumed that this set is ordered. `GTypes` are more
     * important than mime types. Order between different `GTypes` or mime types
     * is the order they were added in, most important first. Functions that
     * care about order, such as [method`Gdk`.ContentFormats.union], will describe
     * in their documentation how they interpret that order, though in general the
     * order of the first argument is considered the primary order of the result,
     * followed by the order of further arguments.
     *
     * For debugging purposes, the function [method`Gdk`.ContentFormats.to_string]
     * exists. It will print a comma-separated list of formats from most important
     * to least important.
     *
     * `GdkContentFormats` is an immutable struct. After creation, you cannot change
     * the types it represents. Instead, new `GdkContentFormats` have to be created.
     * The [struct`Gdk`.ContentFormatsBuilder] structure is meant to help in this
     * endeavor.
     */
    class ContentFormats {
        static '$gtype': GObject.GType<ContentFormats>;
        // Constructors
        constructor(mime_types?: string[] | null);
        _init(...args: any[]): void;
        static new(mime_types?: string[] | null): ContentFormats;
        static new_for_gtype(type: GObject.GType): ContentFormats;
        // Static methods
        /**
         * Parses the given `string` into `GdkContentFormats` and
         * returns the formats.
         *
         * Strings printed via [method`Gdk`.ContentFormats.to_string]
         * can be read in again successfully using this function.
         *
         * If `string` does not describe valid content formats, %NULL
         * is returned.
         *
         * @param string the string to parse
         */
        static parse(string: string): ContentFormats | null;
        // Methods
        /**
         * Checks if a given `GType` is part of the given `formats`.
         *
         * @returns %TRUE if the `GType` was found
         * @param type the `GType` to search for
         */
        contain_gtype(type: GObject.GType): boolean;
        /**
         * Checks if a given mime type is part of the given `formats`.
         *
         * @returns %TRUE if the mime_type was found
         * @param mime_type the mime type to search for
         */
        contain_mime_type(mime_type: string): boolean;
        /**
         * Gets the `GType`s included in `formats`.
         *
         * Note that `formats` may not contain any `GType`s, in particular when
         * they are empty. In that case %NULL will be returned.
         *
         * @returns %G_TYPE_INVALID-terminated array of types included in `formats`
         */
        get_gtypes(): GObject.GType[] | null;
        /**
         * Gets the mime types included in `formats`.
         *
         * Note that `formats` may not contain any mime types, in particular
         * when they are empty. In that case %NULL will be returned.
         *
         * @returns %NULL-terminated array of interned strings of mime types included
         *   in `formats`
         */
        get_mime_types(): string[] | null;
        /**
         * Returns whether the content formats contain any formats.
         *
         * @returns true if `formats` contains no mime types and no GTypes
         */
        is_empty(): boolean;
        /**
         * Checks if `first` and `second` have any matching formats.
         *
         * @returns %TRUE if a matching format was found.
         * @param second the `GdkContentFormats` to intersect with
         */
        match(second: ContentFormats): boolean;
        /**
         * Finds the first `GType` from `first` that is also contained
         * in `second`.
         *
         * If no matching `GType` is found, %G_TYPE_INVALID is returned.
         *
         * @returns The first common `GType` or %G_TYPE_INVALID if none.
         * @param second the `GdkContentFormats` to intersect with
         */
        match_gtype(second: ContentFormats): GObject.GType;
        /**
         * Finds the first mime type from `first` that is also contained
         * in `second`.
         *
         * If no matching mime type is found, %NULL is returned.
         *
         * @returns The first common mime type or %NULL if none
         * @param second the `GdkContentFormats` to intersect with
         */
        match_mime_type(second: ContentFormats): string | null;
        /**
         * Prints the given `formats` into a string for human consumption.
         *
         * The result of this function can later be parsed with
         * [func`Gdk`.ContentFormats.parse].
         *
         * @param string a `GString` to print into
         */
        print(string: GLib.String): void;
        /**
         * Increases the reference count of a `GdkContentFormats` by one.
         *
         * @returns the passed in `GdkContentFormats`.
         */
        ref(): ContentFormats;
        /**
         * Prints the given `formats` into a human-readable string.
         *
         * The resulting string can be parsed with [func`Gdk`.ContentFormats.parse].
         *
         * This is a small wrapper around [method`Gdk`.ContentFormats.print]
         * to help when debugging.
         *
         * @returns a new string
         */
        to_string(): string;
        /**
         * Append all missing types from `second` to `first,` in the order
         * they had in `second`.
         *
         * @returns a new `GdkContentFormats`
         * @param second the `GdkContentFormats` to merge from
         */
        union(second: ContentFormats): ContentFormats;
        /**
         * Add GTypes for mime types in `formats` for which deserializers are
         * registered.
         *
         * @returns a new `GdkContentFormats`
         */
        union_deserialize_gtypes(): ContentFormats;
        /**
         * Add mime types for GTypes in `formats` for which deserializers are
         * registered.
         *
         * @returns a new `GdkContentFormats`
         */
        union_deserialize_mime_types(): ContentFormats;
        /**
         * Add GTypes for the mime types in `formats` for which serializers are
         * registered.
         *
         * @returns a new `GdkContentFormats`
         */
        union_serialize_gtypes(): ContentFormats;
        /**
         * Add mime types for GTypes in `formats` for which serializers are
         * registered.
         *
         * @returns a new `GdkContentFormats`
         */
        union_serialize_mime_types(): ContentFormats;
        /**
         * Decreases the reference count of a `GdkContentFormats` by one.
         *
         * If the resulting reference count is zero, frees the formats.
         */
        unref(): void;
    }
    /**
     * Creates `GdkContentFormats` objects.
     */
    class ContentFormatsBuilder {
        static '$gtype': GObject.GType<ContentFormatsBuilder>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(): ContentFormatsBuilder;
        // Methods
        /**
         * Appends all formats from `formats` to `builder,` skipping those that
         * already exist.
         *
         * @param formats the formats to add
         */
        add_formats(formats: ContentFormats): void;
        /**
         * Appends `type` to `builder` if it has not already been added.
         *
         * @param type a `GType`
         */
        add_gtype(type: GObject.GType): void;
        /**
         * Appends `mime_type` to `builder` if it has not already been added.
         *
         * @param mime_type a mime type
         */
        add_mime_type(mime_type: string): void;
        /**
         * Acquires a reference on the given `builder`.
         *
         * This function is intended primarily for bindings.
         * `GdkContentFormatsBuilder` objects should not be kept around.
         *
         * @returns the given `GdkContentFormatsBuilder`
         *   with its reference count increased
         */
        ref(): ContentFormatsBuilder;
        /**
         * Creates a new `GdkContentFormats` from the given `builder`.
         *
         * The given `GdkContentFormatsBuilder` is reset once this function returns;
         * you cannot call this function multiple times on the same `builder` instance.
         *
         * This function is intended primarily for bindings. C code should use
         * [method`Gdk`.ContentFormatsBuilder.free_to_formats].
         *
         * @returns the newly created `GdkContentFormats`
         *   with all the formats added to `builder`
         */
        to_formats(): ContentFormats;
        /**
         * Releases a reference on the given `builder`.
         */
        unref(): void;
    }
    export type ContentProviderClass = typeof ContentProvider;
    export type DevicePadInterface = typeof DevicePad;
    /**
     * Provides information about supported DMA buffer formats.
     *
     * You can query whether a given format is supported with
     * [method`Gdk`.DmabufFormats.contains] and you can iterate
     * over the list of all supported formats with
     * [method`Gdk`.DmabufFormats.get_n_formats] and
     * [method`Gdk`.DmabufFormats.get_format].
     *
     * The list of supported formats is sorted by preference,
     * with the best formats coming first.
     *
     * The list may contains (format, modifier) pairs where the modifier
     * is `DMA_FORMAT_MOD_INVALID`, indicating that **_implicit modifiers_**
     * may be used with this format.
     *
     * See [class`Gdk`.DmabufTextureBuilder] for more information
     * about DMA buffers.
     *
     * Note that DMA buffers only exist on Linux.
     */
    abstract class DmabufFormats {
        static '$gtype': GObject.GType<DmabufFormats>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Returns whether a given format is contained in `formats`.
         *
         * @returns `TRUE` if the format specified by the arguments
         *   is part of `formats`
         * @param fourcc a format code
         * @param modifier a format modifier
         */
        contains(fourcc: number, modifier: number): boolean;
        /**
         * Returns whether `formats1` and `formats2` contain the
         * same dmabuf formats, in the same order.
         *
         * @returns `TRUE` if `formats1` and `formats2` are equal
         * @param _formats2 another `GdkDmabufFormats`
         */
        equal(_formats2?: DmabufFormats | null): boolean;
        /**
         * Gets the fourcc code and modifier for a format
         * that is contained in `formats`.
         *
         * @param idx the index of the format to return
         */
        get_format(idx: number): [number, number];
        /**
         * Returns the number of formats that the `formats` object
         * contains.
         *
         * Note that DMA buffers are a Linux concept, so on other
         * platforms, [method`Gdk`.DmabufFormats.get_n_formats] will
         * always return zero.
         *
         * @returns the number of formats
         */
        get_n_formats(): number;
        /**
         * Increases the reference count of `formats`.
         *
         * @returns the passed-in object
         */
        ref(): DmabufFormats;
        /**
         * Decreases the reference count of `formats`.
         *
         * When the reference count reaches zero,
         * the object is freed.
         */
        unref(): void;
    }
    export type DmabufTextureBuilderClass = typeof DmabufTextureBuilder;
    export type DmabufTextureClass = typeof DmabufTexture;
    export type DragSurfaceInterface = typeof DragSurface;
    /**
     * Contains information that is useful to compute the size of a drag surface.
     */
    abstract class DragSurfaceSize {
        static '$gtype': GObject.GType<DragSurfaceSize>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Sets the size the drag surface prefers to be resized to.
         *
         * @param width the width
         * @param height the height
         */
        set_size(width: number, height: number): void;
    }
    /**
     * An opaque type representing a sequence of related events.
     */
    abstract class EventSequence {
        static '$gtype': GObject.GType<EventSequence>;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * An opaque type representing a list of files.
     */
    class FileList {
        static '$gtype': GObject.GType<FileList>;
        // Constructors
        constructor(files: Gio.File[]);
        _init(...args: any[]): void;
        static new_from_array(files: Gio.File[]): FileList;
        static new_from_list(files: Gio.File[]): FileList;
        // Methods
        /**
         * Retrieves the list of files inside a `GdkFileList`.
         *
         * This function is meant for language bindings.
         *
         * @returns the files inside the list
         */
        get_files(): Gio.File[];
    }
    export type FrameClockClass = typeof FrameClock;
    abstract class FrameClockPrivate {
        static '$gtype': GObject.GType<FrameClockPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * Holds timing information for a single frame of the application’s displays.
     *
     * To retrieve `GdkFrameTimings` objects, use [method`Gdk`.FrameClock.get_timings]
     * or [method`Gdk`.FrameClock.get_current_timings]. The information in
     * `GdkFrameTimings` is useful for precise synchronization of video with
     * the event or audio streams, and for measuring quality metrics for the
     * application’s display, such as latency and jitter.
     */
    abstract class FrameTimings {
        static '$gtype': GObject.GType<FrameTimings>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Returns whether `timings` are complete.
         *
         * The timing information in a `GdkFrameTimings` is filled in
         * incrementally as the frame as drawn and passed off to the
         * window system for processing and display to the user. The
         * accessor functions for `GdkFrameTimings` can return 0 to
         * indicate an unavailable value for two reasons: either because
         * the information is not yet available, or because it isn't
         * available at all.
         *
         * Once this function returns %TRUE for a frame, you can be
         * certain that no further values will become available and be
         * stored in the `GdkFrameTimings`.
         *
         * @returns %TRUE if all information that will be available
         *   for the frame has been filled in.
         */
        get_complete(): boolean;
        /**
         * Gets the frame counter value of the `GdkFrameClock` when
         * this frame was drawn.
         *
         * @returns the frame counter value for this frame
         */
        get_frame_counter(): number;
        /**
         * Returns the frame time for the frame.
         *
         * This is the time value that is typically used to time
         * animations for the frame. See [method`Gdk`.FrameClock.get_frame_time].
         *
         * @returns the frame time for the frame, in the timescale
         *  of g_get_monotonic_time()
         */
        get_frame_time(): number;
        /**
         * Gets the predicted time at which this frame will be displayed.
         *
         * Although no predicted time may be available, if one is available,
         * it will be available while the frame is being generated, in contrast
         * to [method`Gdk`.FrameTimings.get_presentation_time], which is only
         * available after the frame has been presented.
         *
         * In general, if you are simply animating, you should use
         * [method`Gdk`.FrameClock.get_frame_time] rather than this function,
         * but this function is useful for applications that want exact control
         * over latency. For example, a movie player may want this information
         * for Audio/Video synchronization.
         *
         * @returns The predicted time at which the frame will be presented,
         *   in the timescale of g_get_monotonic_time(), or 0 if no predicted
         *   presentation time is available.
         */
        get_predicted_presentation_time(): number;
        /**
         * Reurns the presentation time.
         *
         * This is the time at which the frame became visible to the user.
         *
         * @returns the time the frame was displayed to the user, in the
         *   timescale of g_get_monotonic_time(), or 0 if no presentation
         *   time is available. See [method`Gdk`.FrameTimings.get_complete]
         */
        get_presentation_time(): number;
        /**
         * Gets the natural interval between presentation times for
         * the display that this frame was displayed on.
         *
         * Frame presentation usually happens during the “vertical
         * blanking interval”.
         *
         * @returns the refresh interval of the display, in microseconds,
         *   or 0 if the refresh interval is not available.
         *   See [method`Gdk`.FrameTimings.get_complete].
         */
        get_refresh_interval(): number;
        /**
         * Increases the reference count of `timings`.
         *
         * @returns `timings`
         */
        ref(): FrameTimings;
        /**
         * Decreases the reference count of `timings`.
         *
         * If `timings` is no longer referenced, it will be freed.
         */
        unref(): void;
    }
    export type GLTextureBuilderClass = typeof GLTextureBuilder;
    export type GLTextureClass = typeof GLTexture;
    /**
     * Represents a hardware key that can be mapped to a keyval.
     */
    class KeymapKey {
        static '$gtype': GObject.GType<KeymapKey>;
        // Fields
        keycode: number;
        group: number;
        level: number;
        // Constructors
        constructor(
            properties?: Partial<{
                keycode: number;
                group: number;
                level: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    export type MemoryTextureBuilderClass = typeof MemoryTextureBuilder;
    export type MemoryTextureClass = typeof MemoryTexture;
    export type MonitorClass = typeof Monitor;
    export type PaintableInterface = typeof Paintable;
    export type PopupInterface = typeof Popup;
    /**
     * Contains information that is necessary position a [iface`Gdk`.Popup]
     * relative to its parent.
     *
     * The positioning requires a negotiation with the windowing system,
     * since it depends on external constraints, such as the position of
     * the parent surface, and the screen dimensions.
     *
     * The basic ingredients are a rectangle on the parent surface,
     * and the anchor on both that rectangle and the popup. The anchors
     * specify a side or corner to place next to each other.
     *
     * ![Popup anchors](popup-anchors.png)
     *
     * For cases where placing the anchors next to each other would make
     * the popup extend offscreen, the layout includes some hints for how
     * to resolve this problem. The hints may suggest to flip the anchor
     * position to the other side, or to 'slide' the popup along a side,
     * or to resize it.
     *
     * ![Flipping popups](popup-flip.png)
     *
     * ![Sliding popups](popup-slide.png)
     *
     * These hints may be combined.
     *
     * Ultimatively, it is up to the windowing system to determine the position
     * and size of the popup. You can learn about the result by calling
     * [method`Gdk`.Popup.get_position_x], [method`Gdk`.Popup.get_position_y],
     * [method`Gdk`.Popup.get_rect_anchor] and [method`Gdk`.Popup.get_surface_anchor]
     * after the popup has been presented. This can be used to adjust the rendering.
     * For example, [GtkPopover](../gtk4/class.Popover.html) changes its arrow position
     * accordingly. But you have to be careful avoid changing the size of the popover,
     * or it has to be presented again.
     */
    class PopupLayout {
        static '$gtype': GObject.GType<PopupLayout>;
        // Constructors
        constructor(anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity);
        _init(...args: any[]): void;
        static new(anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity): PopupLayout;
        // Methods
        /**
         * Makes a copy of `layout`.
         *
         * @returns a copy of `layout`.
         */
        copy(): PopupLayout;
        /**
         * Check whether `layout` and `other` has identical layout properties.
         *
         * @returns %TRUE if `layout` and `other` have identical layout properties,
         *   otherwise %FALSE.
         * @param other another `GdkPopupLayout`
         */
        equal(other: PopupLayout): boolean;
        /**
         * Get the `GdkAnchorHints`.
         *
         * @returns the `GdkAnchorHints`
         */
        get_anchor_hints(): AnchorHints;
        /**
         * Get the anchor rectangle.
         *
         * @returns The anchor rectangle
         */
        get_anchor_rect(): Rectangle;
        /**
         * Retrieves the offset for the anchor rectangle.
         */
        get_offset(): [number, number];
        /**
         * Returns the anchor position on the anchor rectangle.
         *
         * @returns the anchor on the anchor rectangle.
         */
        get_rect_anchor(): Gravity;
        /**
         * Obtains the shadow widths of this layout.
         */
        get_shadow_width(): [number, number, number, number];
        /**
         * Returns the anchor position on the popup surface.
         *
         * @returns the anchor on the popup surface.
         */
        get_surface_anchor(): Gravity;
        /**
         * Increases the reference count of `value`.
         *
         * @returns the same `layout`
         */
        ref(): PopupLayout;
        /**
         * Set new anchor hints.
         *
         * The set `anchor_hints` determines how `surface` will be moved
         * if the anchor points cause it to move off-screen. For example,
         * %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
         * %GDK_GRAVITY_NORTH_EAST and vice versa if `surface` extends
         * beyond the left or right edges of the monitor.
         *
         * @param anchor_hints the new `GdkAnchorHints`
         */
        set_anchor_hints(anchor_hints: AnchorHints | null): void;
        /**
         * Set the anchor rectangle.
         *
         * @param anchor_rect the new anchor rectangle
         */
        set_anchor_rect(anchor_rect: Rectangle): void;
        /**
         * Offset the position of the anchor rectangle with the given delta.
         *
         * @param dx x delta to offset the anchor rectangle with
         * @param dy y delta to offset the anchor rectangle with
         */
        set_offset(dx: number, dy: number): void;
        /**
         * Set the anchor on the anchor rectangle.
         *
         * @param anchor the new rect anchor
         */
        set_rect_anchor(anchor: Gravity | null): void;
        /**
         * Sets the shadow width of the popup.
         *
         * The shadow width corresponds to the part of the computed
         * surface size that would consist of the shadow margin
         * surrounding the window, would there be any.
         *
         * @param left width of the left part of the shadow
         * @param right width of the right part of the shadow
         * @param top height of the top part of the shadow
         * @param bottom height of the bottom part of the shadow
         */
        set_shadow_width(left: number, right: number, top: number, bottom: number): void;
        /**
         * Set the anchor on the popup surface.
         *
         * @param anchor the new popup surface anchor
         */
        set_surface_anchor(anchor: Gravity | null): void;
        /**
         * Decreases the reference count of `value`.
         */
        unref(): void;
    }
    /**
     * Represents a color, in a way that is compatible with cairo’s notion of color.
     *
     * `GdkRGBA` is a convenient way to pass colors around. It’s based on
     * cairo’s way to deal with colors and mirrors its behavior. All values
     * are in the range from 0.0 to 1.0 inclusive. So the color
     * (0.0, 0.0, 0.0, 0.0) represents transparent black and
     * (1.0, 1.0, 1.0, 1.0) is opaque white. Other values will
     * be clamped to this range when drawing.
     */
    class RGBA {
        static '$gtype': GObject.GType<RGBA>;
        // Fields
        red: number;
        green: number;
        blue: number;
        alpha: number;
        // Constructors
        constructor(
            properties?: Partial<{
                red: number;
                green: number;
                blue: number;
                alpha: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Makes a copy of a `GdkRGBA`.
         *
         * The result must be freed through [method`Gdk`.RGBA.free].
         *
         * @returns A newly allocated `GdkRGBA`, with the same contents as `rgba`
         */
        copy(): RGBA;
        /**
         * Compares two `GdkRGBA` colors.
         *
         * @returns %TRUE if the two colors compare equal
         * @param _p2 another `GdkRGBA`
         */
        equal(_p2: RGBA): boolean;
        /**
         * Frees a `GdkRGBA`.
         */
        free(): void;
        /**
         * A hash function suitable for using for a hash
         * table that stores `GdkRGBA`s.
         *
         * @returns The hash value for `p`
         */
        hash(): number;
        /**
         * Checks if an `rgba` value is transparent.
         *
         * That is, drawing with the value would not produce any change.
         *
         * @returns %TRUE if the `rgba` is clear
         */
        is_clear(): boolean;
        /**
         * Checks if an `rgba` value is opaque.
         *
         * That is, drawing with the value will not retain any results
         * from previous contents.
         *
         * @returns %TRUE if the `rgba` is opaque
         */
        is_opaque(): boolean;
        /**
         * Parses a textual representation of a color.
         *
         * The string can be either one of:
         *
         * - A standard name (Taken from the CSS specification).
         * - A hexadecimal value in the form “\#rgb”, “\#rrggbb”,
         *   “\#rrrgggbbb” or ”\#rrrrggggbbbb”
         * - A hexadecimal value in the form “\#rgba”, “\#rrggbbaa”,
         *   or ”\#rrrrggggbbbbaaaa”
         * - A RGB color in the form “rgb(r,g,b)” (In this case the color
         *   will have full opacity)
         * - A RGBA color in the form “rgba(r,g,b,a)”
         * - A HSL color in the form "hsl(hue, saturation, lightness)"
         * - A HSLA color in the form "hsla(hue, saturation, lightness, alpha)"
         *
         * Where “r”, “g”, “b” and “a” are respectively the red, green,
         * blue and alpha color values. In the last two cases, “r”, “g”,
         * and “b” are either integers in the range 0 to 255 or percentage
         * values in the range 0% to 100%, and a is a floating point value
         * in the range 0 to 1.
         *
         * @returns %TRUE if the parsing succeeded
         * @param spec the string specifying the color
         */
        parse(spec: string): boolean;
        /**
         * Returns a textual specification of `rgba` in the form
         * `rgb(r,g,b)` or `rgba(r,g,b,a)`, where “r”, “g”, “b” and
         * “a” represent the red, green, blue and alpha values
         * respectively. “r”, “g”, and “b” are represented as integers
         * in the range 0 to 255, and “a” is represented as a floating
         * point value in the range 0 to 1.
         *
         * These string forms are string forms that are supported by
         * the CSS3 colors module, and can be parsed by [method`Gdk`.RGBA.parse].
         *
         * Note that this string representation may lose some precision,
         * since “r”, “g” and “b” are represented as 8-bit integers. If
         * this is a concern, you should use a different representation.
         *
         * @returns A newly allocated text string
         */
        to_string(): string;
    }
    /**
     * Represents a rectangle.
     *
     * `GdkRectangle` is identical to `cairo_rectangle_t`. Together with Cairo’s
     * `cairo_region_t` data type, these are the central types for representing
     * sets of pixels.
     *
     * The intersection of two rectangles can be computed with
     * [method`Gdk`.Rectangle.intersect]; to find the union of two rectangles use
     * [method`Gdk`.Rectangle.union].
     *
     * The `cairo_region_t` type provided by Cairo is usually used for managing
     * non-rectangular clipping of graphical operations.
     *
     * The Graphene library has a number of other data types for regions and
     * volumes in 2D and 3D.
     */
    class Rectangle {
        static '$gtype': GObject.GType<Rectangle>;
        // Fields
        x: number;
        y: number;
        width: number;
        height: number;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Returns %TRUE if `rect` contains the point described by `x` and `y`.
         *
         * @returns %TRUE if `rect` contains the point
         * @param x X coordinate
         * @param y Y coordinate
         */
        contains_point(x: number, y: number): boolean;
        /**
         * Checks if the two given rectangles are equal.
         *
         * @returns %TRUE if the rectangles are equal.
         * @param _rect2 a `GdkRectangle`
         */
        equal(_rect2: Rectangle): boolean;
        /**
         * Calculates the intersection of two rectangles.
         *
         * It is allowed for `dest` to be the same as either `src1` or `src2`.
         * If the rectangles do not intersect, `dest’`s width and height is set
         * to 0 and its x and y values are undefined. If you are only interested
         * in whether the rectangles intersect, but not in the intersecting area
         * itself, pass %NULL for `dest`.
         *
         * @returns %TRUE if the rectangles intersect.
         * @param _src2 a `GdkRectangle`
         */
        intersect(_src2: Rectangle): [boolean, Rectangle | null];
        /**
         * Calculates the union of two rectangles.
         *
         * The union of rectangles `src1` and `src2` is the smallest rectangle which
         * includes both `src1` and `src2` within it. It is allowed for `dest` to be
         * the same as either `src1` or `src2`.
         *
         * Note that this function does not ignore 'empty' rectangles (ie. with
         * zero width or height).
         *
         * @param _src2 a `GdkRectangle`
         */
        union(_src2: Rectangle): [Rectangle];
    }
    export type SnapshotClass = typeof Snapshot;
    export type SurfaceClass = typeof Surface;
    export type TextureClass = typeof Texture;
    /**
     * Used to download the contents of a [class`Gdk`.Texture].
     *
     * It is intended to be created as a short-term object for a single download,
     * but can be used for multiple downloads of different textures or with different
     * settings.
     *
     * `GdkTextureDownloader` can be used to convert data between different formats.
     * Create a `GdkTexture` for the existing format and then download it in a
     * different format.
     */
    class TextureDownloader {
        static '$gtype': GObject.GType<TextureDownloader>;
        // Constructors
        constructor(texture: Texture);
        _init(...args: any[]): void;
        static new(texture: Texture): TextureDownloader;
        // Methods
        /**
         * Creates a copy of the downloader.
         *
         * This function is meant for language bindings.
         *
         * @returns A copy of the downloader
         */
        copy(): TextureDownloader;
        /**
         * Downloads the given texture pixels into a `GBytes`. The rowstride will
         * be stored in the stride value.
         *
         * This function will abort if it tries to download a large texture and
         * fails to allocate memory. If you think that may happen, you should handle
         * memory allocation yourself and use [method`Gdk`.TextureDownloader.download_into]
         * once allocation succeeded.
         *
         * @returns The downloaded pixels
         */
        download_bytes(): [GLib.Bytes, number];
        /**
         * Downloads the `texture` into local memory.
         *
         * @param data pointer to enough memory to be filled with the
         *   downloaded data of the texture
         * @param stride rowstride in bytes
         */
        download_into(data: Uint8Array[] | string, stride: number): void;
        /**
         * Frees the given downloader and all its associated resources.
         */
        free(): void;
        /**
         * Gets the color state that the data will be downloaded in.
         *
         * @returns The color state of the download
         */
        get_color_state(): ColorState;
        /**
         * Gets the format that the data will be downloaded in.
         *
         * @returns The format of the download
         */
        get_format(): MemoryFormat;
        /**
         * Gets the texture that the downloader will download.
         *
         * @returns The texture to download
         */
        get_texture(): Texture;
        /**
         * Sets the color state the downloader will convert the data to.
         *
         * By default, the sRGB colorstate returned by [func`ColorState`.get_srgb]
         * is used.
         *
         * @param color_state the color state to use
         */
        set_color_state(color_state: ColorState): void;
        /**
         * Sets the format the downloader will download.
         *
         * By default, GDK_MEMORY_DEFAULT is set.
         *
         * @param format the format to use
         */
        set_format(format: MemoryFormat | null): void;
        /**
         * Changes the texture the downloader will download.
         *
         * @param texture the new texture to download
         */
        set_texture(texture: Texture): void;
    }
    /**
     * Stores a single event in a motion history.
     *
     * To check whether an axis is present, check whether the corresponding
     * flag from the [flags`Gdk`.AxisFlags] enumeration is set in the `flags`
     * To access individual axis values, use the values of the values of
     * the [enum`Gdk`.AxisUse] enumerations as indices.
     */
    class TimeCoord {
        static '$gtype': GObject.GType<TimeCoord>;
        // Fields
        time: number;
        flags: AxisFlags;
        axes: number[];
        // Constructors
        _init(...args: any[]): void;
    }
    export type ToplevelInterface = typeof Toplevel;
    /**
     * Contains information that is necessary to present a sovereign
     * window on screen.
     *
     * The `GdkToplevelLayout` struct is necessary for using
     * [method`Gdk`.Toplevel.present].
     *
     * Toplevel surfaces are sovereign windows that can be presented
     * to the user in various states (maximized, on all workspaces,
     * etc).
     */
    class ToplevelLayout {
        static '$gtype': GObject.GType<ToplevelLayout>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(): ToplevelLayout;
        // Methods
        /**
         * Create a new `GdkToplevelLayout` and copy the contents of `layout` into it.
         *
         * @returns a copy of `layout`.
         */
        copy(): ToplevelLayout;
        /**
         * Check whether `layout` and `other` has identical layout properties.
         *
         * @returns %TRUE if `layout` and `other` have identical layout properties,
         *   otherwise %FALSE.
         * @param other another `GdkToplevelLayout`
         */
        equal(other: ToplevelLayout): boolean;
        /**
         * If the layout specifies whether to the toplevel should go fullscreen,
         * the value pointed to by `fullscreen` is set to %TRUE if it should go
         * fullscreen, or %FALSE, if it should go unfullscreen.
         *
         * @returns whether the `layout` specifies the fullscreen state for the toplevel
         */
        get_fullscreen(): [boolean, boolean];
        /**
         * Returns the monitor that the layout is fullscreening
         * the surface on.
         *
         * @returns the monitor on which `layout` fullscreens
         */
        get_fullscreen_monitor(): Monitor | null;
        /**
         * If the layout specifies whether to the toplevel should go maximized,
         * the value pointed to by `maximized` is set to %TRUE if it should go
         * fullscreen, or %FALSE, if it should go unmaximized.
         *
         * @returns whether the `layout` specifies the maximized state for the toplevel
         */
        get_maximized(): [boolean, boolean];
        /**
         * Returns whether the layout should allow the user
         * to resize the surface.
         *
         * @returns %TRUE if the layout is resizable
         */
        get_resizable(): boolean;
        /**
         * Increases the reference count of `layout`.
         *
         * @returns the same `layout`
         */
        ref(): ToplevelLayout;
        /**
         * Sets whether the layout should cause the surface
         * to be fullscreen when presented.
         *
         * @param fullscreen %TRUE to fullscreen the surface
         * @param monitor the monitor to fullscreen on
         */
        set_fullscreen(fullscreen: boolean, monitor?: Monitor | null): void;
        /**
         * Sets whether the layout should cause the surface
         * to be maximized when presented.
         *
         * @param maximized %TRUE to maximize
         */
        set_maximized(maximized: boolean): void;
        /**
         * Sets whether the layout should allow the user
         * to resize the surface after it has been presented.
         *
         * @param resizable %TRUE to allow resizing
         */
        set_resizable(resizable: boolean): void;
        /**
         * Decreases the reference count of `layout`.
         */
        unref(): void;
    }
    /**
     * Contains information that is useful to compute the size of a toplevel.
     */
    abstract class ToplevelSize {
        static '$gtype': GObject.GType<ToplevelSize>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Retrieves the bounds the toplevel is placed within.
         *
         * The bounds represent the largest size a toplevel may have while still being
         * able to fit within some type of boundary. Depending on the backend, this may
         * be equivalent to the dimensions of the work area or the monitor on which the
         * window is being presented on, or something else that limits the way a
         * toplevel can be presented.
         */
        get_bounds(): [number, number];
        /**
         * Sets the minimum size of the toplevel.
         *
         * The minimum size corresponds to the limitations the toplevel can be shrunk
         * to, without resulting in incorrect painting. A user of a `GdkToplevel` should
         * calculate these given both the existing size, and the bounds retrieved from
         * the `GdkToplevelSize` object.
         *
         * The minimum size should be within the bounds (see
         * [method`Gdk`.ToplevelSize.get_bounds]).
         *
         * @param min_width the minimum width
         * @param min_height the minimum height
         */
        set_min_size(min_width: number, min_height: number): void;
        /**
         * Sets the shadows size of the toplevel.
         *
         * The shadow width corresponds to the part of the computed surface size
         * that would consist of the shadow margin surrounding the window, would
         * there be any.
         *
         * Shadow width should only be set if
         * [method`Gtk`.Display.supports_shadow_width] is %TRUE.
         *
         * @param left width of the left part of the shadow
         * @param right width of the right part of the shadow
         * @param top height of the top part of the shadow
         * @param bottom height of the bottom part of the shadow
         */
        set_shadow_width(left: number, right: number, top: number, bottom: number): void;
        /**
         * Sets the size the toplevel prefers to be resized to.
         *
         * The size should be within the bounds (see
         * [method`Gdk`.ToplevelSize.get_bounds]). The set size should
         * be considered as a hint, and should not be assumed to be
         * respected by the windowing system, or backend.
         *
         * @param width the width
         * @param height the height
         */
        set_size(width: number, height: number): void;
    }
    namespace DevicePad {
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {}
    }
    export interface DevicePadNamespace {
        $gtype: GObject.GType<DevicePad>;
        prototype: DevicePad;
    }
    interface DevicePad extends Device {
        // Methods
        /**
         * Returns the group the given `feature` and `idx` belong to.
         *
         * f the feature or index do not exist in `pad,` -1 is returned.
         *
         * @returns The group number of the queried pad feature.
         * @param feature the feature type to get the group from
         * @param feature_idx the index of the feature to get the group from
         */
        get_feature_group(feature: DevicePadFeature | null, feature_idx: number): number;
        /**
         * Returns the number of modes that `group` may have.
         *
         * @returns The number of modes available in `group`.
         * @param group_idx group to get the number of available modes from
         */
        get_group_n_modes(group_idx: number): number;
        /**
         * Returns the number of features a tablet pad has.
         *
         * @returns The amount of elements of type `feature` that this pad has.
         * @param feature a pad feature
         */
        get_n_features(feature: DevicePadFeature | null): number;
        /**
         * Returns the number of groups this pad device has.
         *
         * Pads have at least one group. A pad group is a subcollection of
         * buttons/strip/rings that is affected collectively by a same
         * current mode.
         *
         * @returns The number of button/ring/strip groups in the pad.
         */
        get_n_groups(): number;
    }
    export const DevicePad: DevicePadNamespace & (new () => DevicePad);
    namespace DragSurface {
        // Constructor properties interface
        interface ConstructorProps extends Surface.ConstructorProps {}
    }
    export interface DragSurfaceNamespace {
        $gtype: GObject.GType<DragSurface>;
        prototype: DragSurface;
    }
    interface DragSurface extends Surface {
        // Methods
        /**
         * Present `drag_surface`.
         *
         * @returns %FALSE if it failed to be presented, otherwise %TRUE.
         * @param width the unconstrained drag_surface width to layout
         * @param height the unconstrained drag_surface height to layout
         */
        present(width: number, height: number): boolean;
    }
    export const DragSurface: DragSurfaceNamespace & (new () => DragSurface);
    namespace Paintable {
        /**
         * Interface for implementing Paintable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             *
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             *
             * If the `paintable` is already immutable, it will return itself.
             */
            vfunc_get_current_image(): Paintable;
            /**
             * Get flags for the paintable.
             *
             * This is oftentimes useful for optimizations.
             *
             * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
             */
            vfunc_get_flags(): PaintableFlags;
            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             *
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * Usually when a `paintable` returns nonzero values from
             * [method`Gdk`.Paintable.get_intrinsic_width] and
             * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
             * should conform to those values, though that is not required.
             *
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             */
            vfunc_get_intrinsic_aspect_ratio(): number;
            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_height(): number;
            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             *
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             *
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to [method`Gdk`.Paintable.snapshot].
             *
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             */
            vfunc_get_intrinsic_width(): number;
            /**
             * Snapshots the given paintable with the given `width` and `height`.
             *
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             *
             * @param snapshot a `GdkSnapshot` to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             */
            vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface PaintableNamespace {
        $gtype: GObject.GType<Paintable>;
        prototype: Paintable;
        /**
         * Returns a paintable that has the given intrinsic size and draws nothing.
         *
         * This is often useful for implementing the
         * [vfunc`Gdk`.Paintable.get_current_image] virtual function
         * when the paintable is in an incomplete state (like a
         * [GtkMediaStream](../gtk4/class.MediaStream.html) before receiving
         * the first frame).
         *
         * @param intrinsic_width The intrinsic width to report. Can be 0 for no width.
         * @param intrinsic_height The intrinsic height to report. Can be 0 for no height.
         */
        new_empty(intrinsic_width: number, intrinsic_height: number): Paintable;
    }
    interface Paintable extends GObject.Object, Paintable.Interface {
        // Methods
        /**
         * Compute a concrete size for the `GdkPaintable`.
         *
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         *
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         *
         * @param specified_width the width `paintable` could be drawn into or
         *   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or
         *   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if
         *   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if
         *   no other constraints were given
         */
        compute_concrete_size(
            specified_width: number,
            specified_height: number,
            default_width: number,
            default_height: number,
        ): [number, number];
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         *
         * @returns An immutable paintable for the current
         *   contents of `paintable`
         */
        get_current_image(): Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
         *
         * @returns The `GdkPaintableFlags` for this paintable
         */
        get_flags(): PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * Usually when a `paintable` returns nonzero values from
         * [method`Gdk`.Paintable.get_intrinsic_width] and
         * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         *
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their contents.
         *
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
         * it must not call this function.
         */
        invalidate_contents(): void;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their size.
         *
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
         * it must not call this function.
         */
        invalidate_size(): void;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         *
         * @param snapshot a `GdkSnapshot` to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Snapshot, width: number, height: number): void;
    }
    export const Paintable: PaintableNamespace & (new () => Paintable);
    namespace Popup {
        // Constructor properties interface
        interface ConstructorProps extends Surface.ConstructorProps {
            /**
             * Whether to hide on outside clicks.
             */
            autohide: boolean;
            /**
             * The parent surface.
             */
            parent: Surface;
        }
    }
    export interface PopupNamespace {
        $gtype: GObject.GType<Popup>;
        prototype: Popup;
    }
    interface Popup extends Surface {
        // Properties
        /**
         * Whether to hide on outside clicks.
         */
        autohide: boolean;
        /**
         * The parent surface.
         */
        parent: Surface;
        // Methods
        /**
         * Returns whether this popup is set to hide on outside clicks.
         *
         * @returns %TRUE if `popup` will autohide
         */
        get_autohide(): boolean;
        /**
         * Returns the parent surface of a popup.
         *
         * @returns the parent surface
         */
        get_parent(): Surface | null;
        /**
         * Obtains the position of the popup relative to its parent.
         *
         * @returns the X coordinate of `popup` position
         */
        get_position_x(): number;
        /**
         * Obtains the position of the popup relative to its parent.
         *
         * @returns the Y coordinate of `popup` position
         */
        get_position_y(): number;
        /**
         * Gets the current popup rectangle anchor.
         *
         * The value returned may change after calling [method`Gdk`.Popup.present],
         * or after the [signal`Gdk`.Surface::layout] signal is emitted.
         *
         * @returns the current rectangle anchor value of `popup`
         */
        get_rect_anchor(): Gravity;
        /**
         * Gets the current popup surface anchor.
         *
         * The value returned may change after calling [method`Gdk`.Popup.present],
         * or after the [signal`Gdk`.Surface::layout] signal is emitted.
         *
         * @returns the current surface anchor value of `popup`
         */
        get_surface_anchor(): Gravity;
        /**
         * Present `popup` after having processed the `GdkPopupLayout` rules.
         *
         * If the popup was previously not showing, it will be shown,
         * otherwise it will change position according to `layout`.
         *
         * After calling this function, the result should be handled in response
         * to the [signal`Gdk`.Surface::layout] signal being emitted. The resulting
         * popup position can be queried using [method`Gdk`.Popup.get_position_x],
         * [method`Gdk`.Popup.get_position_y], and the resulting size will be sent as
         * parameters in the layout signal. Use [method`Gdk`.Popup.get_rect_anchor]
         * and [method`Gdk`.Popup.get_surface_anchor] to get the resulting anchors.
         *
         * Presenting may fail, for example if the `popup` is set to autohide
         * and is immediately hidden upon being presented. If presenting failed,
         * the [signal`Gdk`.Surface::layout] signal will not me emitted.
         *
         * @returns %FALSE if it failed to be presented, otherwise %TRUE.
         * @param width the unconstrained popup width to layout
         * @param height the unconstrained popup height to layout
         * @param layout the `GdkPopupLayout` object used to layout
         */
        present(width: number, height: number, layout: PopupLayout): boolean;
    }
    export const Popup: PopupNamespace & (new () => Popup);
    namespace Toplevel {
        // Constructor properties interface
        interface ConstructorProps extends Surface.ConstructorProps {
            /**
             * Whether the window manager should add decorations.
             */
            decorated: boolean;
            /**
             * Whether the window manager should allow to close the surface.
             */
            deletable: boolean;
            /**
             * The fullscreen mode of the surface.
             */
            fullscreen_mode: FullscreenMode;
            /**
             * The fullscreen mode of the surface.
             */
            fullscreenMode: FullscreenMode;
            /**
             * A list of textures to use as icon.
             */
            icon_list: any;
            /**
             * A list of textures to use as icon.
             */
            iconList: any;
            /**
             * Whether the surface is modal.
             */
            modal: boolean;
            /**
             * Whether the surface should inhibit keyboard shortcuts.
             */
            shortcuts_inhibited: boolean;
            /**
             * Whether the surface should inhibit keyboard shortcuts.
             */
            shortcutsInhibited: boolean;
            /**
             * The startup ID of the surface.
             *
             * See [class`Gdk`.AppLaunchContext] for more information about
             * startup feedback.
             */
            startup_id: string;
            /**
             * The startup ID of the surface.
             *
             * See [class`Gdk`.AppLaunchContext] for more information about
             * startup feedback.
             */
            startupId: string;
            /**
             * The state of the toplevel.
             */
            state: ToplevelState;
            /**
             * The title of the surface.
             */
            title: string;
            /**
             * The transient parent of the surface.
             */
            transient_for: Surface;
            /**
             * The transient parent of the surface.
             */
            transientFor: Surface;
        }
    }
    export interface ToplevelNamespace {
        $gtype: GObject.GType<Toplevel>;
        prototype: Toplevel;
    }
    interface Toplevel extends Surface {
        // Properties
        /**
         * Whether the window manager should add decorations.
         */
        decorated: boolean;
        /**
         * Whether the window manager should allow to close the surface.
         */
        deletable: boolean;
        /**
         * The fullscreen mode of the surface.
         */
        fullscreen_mode: FullscreenMode;
        /**
         * The fullscreen mode of the surface.
         */
        fullscreenMode: FullscreenMode;
        /**
         * A list of textures to use as icon.
         */
        icon_list: any;
        /**
         * A list of textures to use as icon.
         */
        iconList: any;
        /**
         * Whether the surface is modal.
         */
        modal: boolean;
        /**
         * Whether the surface should inhibit keyboard shortcuts.
         */
        shortcuts_inhibited: boolean;
        /**
         * Whether the surface should inhibit keyboard shortcuts.
         */
        shortcutsInhibited: boolean;
        /**
         * The startup ID of the surface.
         *
         * See [class`Gdk`.AppLaunchContext] for more information about
         * startup feedback.
         */
        startup_id: string;
        /**
         * The startup ID of the surface.
         *
         * See [class`Gdk`.AppLaunchContext] for more information about
         * startup feedback.
         */
        startupId: string;
        /**
         * The state of the toplevel.
         */
        state: ToplevelState;
        /**
         * The title of the surface.
         */
        title: string;
        /**
         * The transient parent of the surface.
         */
        transient_for: Surface;
        /**
         * The transient parent of the surface.
         */
        transientFor: Surface;
        // Methods
        /**
         * Begins an interactive move operation.
         *
         * You might use this function to implement draggable titlebars.
         *
         * @param device the device used for the operation
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param x surface X coordinate of mouse click that began the drag
         * @param y surface Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag (use
         *   [method`Gdk`.Event.get_time])
         */
        begin_move(device: Device, button: number, x: number, y: number, timestamp: number): void;
        /**
         * Begins an interactive resize operation.
         *
         * You might use this function to implement a “window resize grip.”
         *
         * @param edge the edge or corner from which the drag is started
         * @param device the device used for the operation
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param x surface X coordinate of mouse click that began the drag
         * @param y surface Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag (use
         *   [method`Gdk`.Event.get_time])
         */
        begin_resize(
            edge: SurfaceEdge | null,
            device: Device | null,
            button: number,
            x: number,
            y: number,
            timestamp: number,
        ): void;
        /**
         * Sets keyboard focus to `surface`.
         *
         * In most cases, [gtk_window_present_with_time()](../gtk4/method.Window.present_with_time.html)
         * should be used on a [GtkWindow](../gtk4/class.Window.html), rather than
         * calling this function.
         *
         * @param timestamp timestamp of the event triggering the surface focus
         */
        focus(timestamp: number): void;
        /**
         * Gets the bitwise or of the currently active surface state flags,
         * from the `GdkToplevelState` enumeration.
         *
         * @returns surface state bitfield
         */
        get_state(): ToplevelState;
        /**
         * Requests that the `toplevel` inhibit the system shortcuts.
         *
         * This is asking the desktop environment/windowing system to let all
         * keyboard events reach the surface, as long as it is focused, instead
         * of triggering system actions.
         *
         * If granted, the rerouting remains active until the default shortcuts
         * processing is restored with [method`Gdk`.Toplevel.restore_system_shortcuts],
         * or the request is revoked by the desktop environment, windowing system
         * or the user.
         *
         * A typical use case for this API is remote desktop or virtual machine
         * viewers which need to inhibit the default system keyboard shortcuts
         * so that the remote session or virtual host gets those instead of the
         * local environment.
         *
         * The windowing system or desktop environment may ask the user to grant
         * or deny the request or even choose to ignore the request entirely.
         *
         * The caller can be notified whenever the request is granted or revoked
         * by listening to the [property`Gdk`.Toplevel:shortcuts-inhibited] property.
         *
         * @param event the `GdkEvent` that is triggering the inhibit
         *   request, or %NULL if none is available
         */
        inhibit_system_shortcuts(event?: Event | null): void;
        /**
         * Asks to lower the `toplevel` below other windows.
         *
         * The windowing system may choose to ignore the request.
         *
         * @returns %TRUE if the surface was lowered
         */
        lower(): boolean;
        /**
         * Asks to minimize the `toplevel`.
         *
         * The windowing system may choose to ignore the request.
         *
         * @returns %TRUE if the surface was minimized
         */
        minimize(): boolean;
        /**
         * Present `toplevel` after having processed the `GdkToplevelLayout` rules.
         *
         * If the toplevel was previously not showing, it will be showed,
         * otherwise it will change layout according to `layout`.
         *
         * GDK may emit the [signal`Gdk`.Toplevel::compute-size] signal to let
         * the user of this toplevel compute the preferred size of the toplevel
         * surface.
         *
         * Presenting is asynchronous and the specified layout parameters are not
         * guaranteed to be respected.
         *
         * @param layout the `GdkToplevelLayout` object used to layout
         */
        present(layout: ToplevelLayout): void;
        /**
         * Restore default system keyboard shortcuts which were previously
         * inhibited.
         *
         * This undoes the effect of [method`Gdk`.Toplevel.inhibit_system_shortcuts].
         */
        restore_system_shortcuts(): void;
        /**
         * Sets the toplevel to be decorated.
         *
         * Setting `decorated` to %FALSE hints the desktop environment
         * that the surface has its own, client-side decorations and
         * does not need to have window decorations added.
         *
         * @param decorated %TRUE to request decorations
         */
        set_decorated(decorated: boolean): void;
        /**
         * Sets the toplevel to be deletable.
         *
         * Setting `deletable` to %TRUE hints the desktop environment
         * that it should offer the user a way to close the surface.
         *
         * @param deletable %TRUE to request a delete button
         */
        set_deletable(deletable: boolean): void;
        /**
         * Sets a list of icons for the surface.
         *
         * One of these will be used to represent the surface in iconic form.
         * The icon may be shown in window lists or task bars. Which icon
         * size is shown depends on the window manager. The window manager
         * can scale the icon but setting several size icons can give better
         * image quality.
         *
         * Note that some platforms don't support surface icons.
         *
         * @param surfaces A list of textures to use as icon, of different sizes
         */
        set_icon_list(surfaces: Texture[]): void;
        /**
         * Sets the toplevel to be modal.
         *
         * The application can use this hint to tell the
         * window manager that a certain surface has modal
         * behaviour. The window manager can use this information
         * to handle modal surfaces in a special way.
         *
         * You should only use this on surfaces for which you have
         * previously called [method`Gdk`.Toplevel.set_transient_for].
         *
         * @param modal %TRUE if the surface is modal, %FALSE otherwise.
         */
        set_modal(modal: boolean): void;
        /**
         * Sets the startup notification ID.
         *
         * When using GTK, typically you should use
         * [gtk_window_set_startup_id()](../gtk4/method.Window.set_startup_id.html)
         * instead of this low-level function.
         *
         * @param startup_id a string with startup-notification identifier
         */
        set_startup_id(startup_id: string): void;
        /**
         * Sets the title of a toplevel surface.
         *
         * The title maybe be displayed in the titlebar,
         * in lists of windows, etc.
         *
         * @param title title of `surface`
         */
        set_title(title: string): void;
        /**
         * Sets a transient-for parent.
         *
         * Indicates to the window manager that `surface` is a transient
         * dialog associated with the application surface `parent`. This
         * allows the window manager to do things like center `surface`
         * on `parent` and keep `surface` above `parent`.
         *
         * See [gtk_window_set_transient_for()](../gtk4/method.Window.set_transient_for.html)
         * if you’re using [GtkWindow](../gtk4/class.Window.html).
         *
         * @param parent another toplevel `GdkSurface`
         */
        set_transient_for(parent: Surface): void;
        /**
         * Asks the windowing system to show the window menu.
         *
         * The window menu is the menu shown when right-clicking the titlebar
         * on traditional windows managed by the window manager. This is useful
         * for windows using client-side decorations, activating it with a
         * right-click on the window decorations.
         *
         * @returns %TRUE if the window menu was shown and %FALSE otherwise.
         * @param event a `GdkEvent` to show the menu for
         */
        show_window_menu(event: Event): boolean;
        /**
         * Returns whether the desktop environment supports
         * tiled window states.
         *
         * @returns %TRUE if the desktop environment supports tiled window states
         */
        supports_edge_constraints(): boolean;
        /**
         * Performs a title bar gesture.
         *
         * @returns whether the gesture was performed
         * @param gesture a `GdkTitlebarGesture`
         */
        titlebar_gesture(gesture: TitlebarGesture | null): boolean;
    }
    export const Toplevel: ToplevelNamespace & (new () => Toplevel);
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
export default Gdk;
