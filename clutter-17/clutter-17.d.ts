/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
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
import '@girs/gjs';
import type classes from './clutter-17-classes.d.ts';
export { classes as ClutterClasses };
export namespace Clutter {
    /**
     * Clutter-17
     */
    /**
     * Controls how a #ClutterActor should align itself inside the extra space
     * assigned to it during the allocation.
     *
     * Alignment only matters if the allocated space given to an actor is
     * bigger than its natural size; for example, when
     * the [property`Clutter`.Actor:x-expand] or the [property`Clutter`.Actor:y-expand]
     * properties of #ClutterActor are set to %TRUE.
     */
    export namespace ActorAlign {
        export const $gtype: GObject.GType<ActorAlign>;
    }
    enum ActorAlign {
        /**
         * Stretch to cover the whole allocated space
         */
        FILL,
        /**
         * Snap to left or top side, leaving space
         *   to the right or bottom. For horizontal layouts, in right-to-left
         *   locales this should be reversed.
         */
        START = 1,
        /**
         * Center the actor inside the allocation
         */
        CENTER = 2,
        /**
         * Snap to right or bottom side, leaving space
         *   to the left or top. For horizontal layouts, in right-to-left locales
         *   this should be reversed.
         */
        END = 3,
    }
    /**
     * Specifies the axis on which #ClutterAlignConstraint should maintain
     * the alignment.
     */
    export namespace AlignAxis {
        export const $gtype: GObject.GType<AlignAxis>;
    }
    enum AlignAxis {
        /**
         * Maintain the alignment on the X axis
         */
        X_AXIS,
        /**
         * Maintain the alignment on the Y axis
         */
        Y_AXIS = 1,
        /**
         * Maintain the alignment on both the X and Y axis
         */
        BOTH = 2,
    }
    /**
     * The animation modes used by [iface`Animatable]`.
     *
     * This enumeration can be expanded in later versions of Clutter.
     *
     * <figure id="easing-modes">
     *   <title>Easing modes provided by Clutter</title>
     *   <graphic fileref="easing-modes.png" format="PNG"/>
     * </figure>
     *
     * Every global alpha function registered using clutter_alpha_register_func()
     * or clutter_alpha_register_closure() will have a logical id greater than
     * %CLUTTER_ANIMATION_LAST.
     */
    export namespace AnimationMode {
        export const $gtype: GObject.GType<AnimationMode>;
    }
    enum AnimationMode {
        /**
         * custom progress function
         */
        CUSTOM_MODE,
        /**
         * linear tweening
         */
        LINEAR = 1,
        /**
         * quadratic tweening
         */
        EASE_IN_QUAD = 2,
        /**
         * quadratic tweening, inverse of
         *    %CLUTTER_EASE_IN_QUAD
         */
        EASE_OUT_QUAD = 3,
        /**
         * quadratic tweening, combininig
         *    %CLUTTER_EASE_IN_QUAD and %CLUTTER_EASE_OUT_QUAD
         */
        EASE_IN_OUT_QUAD = 4,
        /**
         * cubic tweening
         */
        EASE_IN_CUBIC = 5,
        /**
         * cubic tweening, inverse of
         *    %CLUTTER_EASE_IN_CUBIC
         */
        EASE_OUT_CUBIC = 6,
        /**
         * cubic tweening, combining
         *    %CLUTTER_EASE_IN_CUBIC and %CLUTTER_EASE_OUT_CUBIC
         */
        EASE_IN_OUT_CUBIC = 7,
        /**
         * quartic tweening
         */
        EASE_IN_QUART = 8,
        /**
         * quartic tweening, inverse of
         *    %CLUTTER_EASE_IN_QUART
         */
        EASE_OUT_QUART = 9,
        /**
         * quartic tweening, combining
         *    %CLUTTER_EASE_IN_QUART and %CLUTTER_EASE_OUT_QUART
         */
        EASE_IN_OUT_QUART = 10,
        /**
         * quintic tweening
         */
        EASE_IN_QUINT = 11,
        /**
         * quintic tweening, inverse of
         *    %CLUTTER_EASE_IN_QUINT
         */
        EASE_OUT_QUINT = 12,
        /**
         * fifth power tweening, combining
         *    %CLUTTER_EASE_IN_QUINT and %CLUTTER_EASE_OUT_QUINT
         */
        EASE_IN_OUT_QUINT = 13,
        /**
         * sinusoidal tweening
         */
        EASE_IN_SINE = 14,
        /**
         * sinusoidal tweening, inverse of
         *    %CLUTTER_EASE_IN_SINE
         */
        EASE_OUT_SINE = 15,
        /**
         * sine wave tweening, combining
         *    %CLUTTER_EASE_IN_SINE and %CLUTTER_EASE_OUT_SINE
         */
        EASE_IN_OUT_SINE = 16,
        /**
         * exponential tweening
         */
        EASE_IN_EXPO = 17,
        /**
         * exponential tweening, inverse of
         *    %CLUTTER_EASE_IN_EXPO
         */
        EASE_OUT_EXPO = 18,
        /**
         * exponential tweening, combining
         *    %CLUTTER_EASE_IN_EXPO and %CLUTTER_EASE_OUT_EXPO
         */
        EASE_IN_OUT_EXPO = 19,
        /**
         * circular tweening
         */
        EASE_IN_CIRC = 20,
        /**
         * circular tweening, inverse of
         *    %CLUTTER_EASE_IN_CIRC
         */
        EASE_OUT_CIRC = 21,
        /**
         * circular tweening, combining
         *    %CLUTTER_EASE_IN_CIRC and %CLUTTER_EASE_OUT_CIRC
         */
        EASE_IN_OUT_CIRC = 22,
        /**
         * elastic tweening, with offshoot on start
         */
        EASE_IN_ELASTIC = 23,
        /**
         * elastic tweening, with offshoot on end
         */
        EASE_OUT_ELASTIC = 24,
        /**
         * elastic tweening with offshoot on both ends
         */
        EASE_IN_OUT_ELASTIC = 25,
        /**
         * overshooting cubic tweening, with
         *   backtracking on start
         */
        EASE_IN_BACK = 26,
        /**
         * overshooting cubic tweening, with
         *   backtracking on end
         */
        EASE_OUT_BACK = 27,
        /**
         * overshooting cubic tweening, with
         *   backtracking on both ends
         */
        EASE_IN_OUT_BACK = 28,
        /**
         * exponentially decaying parabolic (bounce)
         *   tweening, with bounce on start
         */
        EASE_IN_BOUNCE = 29,
        /**
         * exponentially decaying parabolic (bounce)
         *   tweening, with bounce on end
         */
        EASE_OUT_BOUNCE = 30,
        /**
         * exponentially decaying parabolic (bounce)
         *   tweening, with bounce on both ends
         */
        EASE_IN_OUT_BOUNCE = 31,
        /**
         * parametrized step function; see clutter_timeline_set_step_progress()
         *   for further details. (Since 1.12)
         */
        STEPS = 32,
        /**
         * equivalent to %CLUTTER_STEPS with a number of steps
         *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_START. (Since 1.12)
         */
        STEP_START = 33,
        /**
         * equivalent to %CLUTTER_STEPS with a number of steps
         *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_END. (Since 1.12)
         */
        STEP_END = 34,
        /**
         * cubic bezier between (0, 0) and (1, 1) with two
         *   control points; see clutter_timeline_set_cubic_bezier_progress(). (Since 1.12)
         */
        CUBIC_BEZIER = 35,
        /**
         * equivalent to %CLUTTER_CUBIC_BEZIER with control points
         *   in (0.25, 0.1) and (0.25, 1.0). (Since 1.12)
         */
        EASE = 36,
        /**
         * equivalent to %CLUTTER_CUBIC_BEZIER with control points
         *   in (0.42, 0) and (1.0, 1.0). (Since 1.12)
         */
        EASE_IN = 37,
        /**
         * equivalent to %CLUTTER_CUBIC_BEZIER with control points
         *   in (0, 0) and (0.58, 1.0). (Since 1.12)
         */
        EASE_OUT = 38,
        /**
         * equivalent to %CLUTTER_CUBIC_BEZIER with control points
         *   in (0.42, 0) and (0.58, 1.0). (Since 1.12)
         */
        EASE_IN_OUT = 39,
        /**
         * last animation mode, used as a guard for
         *   registered global alpha functions
         */
        ANIMATION_LAST = 40,
    }
    /**
     * Specifies which property should be used in a binding
     */
    export namespace BindCoordinate {
        export const $gtype: GObject.GType<BindCoordinate>;
    }
    enum BindCoordinate {
        /**
         * Bind the X coordinate
         */
        X,
        /**
         * Bind the Y coordinate
         */
        Y = 1,
        /**
         * Bind the width
         */
        WIDTH = 2,
        /**
         * Bind the height
         */
        HEIGHT = 3,
        /**
         * Equivalent to to %CLUTTER_BIND_X and
         *   %CLUTTER_BIND_Y
         */
        POSITION = 4,
        /**
         * Equivalent to %CLUTTER_BIND_WIDTH and
         *   %CLUTTER_BIND_HEIGHT
         */
        SIZE = 5,
        /**
         * Equivalent to %CLUTTER_BIND_POSITION and
         *   %CLUTTER_BIND_SIZE
         */
        ALL = 6,
    }
    export namespace ButtonState {
        export const $gtype: GObject.GType<ButtonState>;
    }
    enum ButtonState {
        RELEASED,
        PRESSED = 1,
    }
    export namespace CicpPrimaries {
        export const $gtype: GObject.GType<CicpPrimaries>;
    }
    enum CicpPrimaries {
        SRGB = 1,
        PAL = 5,
        NTSC = 6,
        'NTSC_2' = 7,
        'BT2020' = 9,
        'P3' = 12,
    }
    export namespace CicpTransfer {
        export const $gtype: GObject.GType<CicpTransfer>;
    }
    enum CicpTransfer {
        'BT709' = 1,
        'GAMMA22' = 4,
        'GAMMA28' = 5,
        'BT601' = 6,
        LINEAR = 8,
        SRGB = 13,
        'BT2020' = 14,
        'BT2020_2' = 15,
        PQ = 16,
        HLG = 18,
    }
    export namespace ColorimetryType {
        export const $gtype: GObject.GType<ColorimetryType>;
    }
    enum ColorimetryType {
        COLORSPACE,
        PRIMARIES = 1,
    }
    export namespace Colorspace {
        export const $gtype: GObject.GType<Colorspace>;
    }
    enum Colorspace {
        SRGB,
        'BT2020' = 1,
        NTSC = 2,
        PAL = 3,
        'P3' = 4,
    }
    /**
     * Controls the alignment of the #ClutterContent inside a #ClutterActor.
     */
    export namespace ContentGravity {
        export const $gtype: GObject.GType<ContentGravity>;
    }
    enum ContentGravity {
        /**
         * Align the content to the top left corner
         */
        TOP_LEFT,
        /**
         * Align the content to the top edge
         */
        TOP = 1,
        /**
         * Align the content to the top right corner
         */
        TOP_RIGHT = 2,
        /**
         * Align the content to the left edge
         */
        LEFT = 3,
        /**
         * Align the content to the center
         */
        CENTER = 4,
        /**
         * Align the content to the right edge
         */
        RIGHT = 5,
        /**
         * Align the content to the bottom left corner
         */
        BOTTOM_LEFT = 6,
        /**
         * Align the content to the bottom edge
         */
        BOTTOM = 7,
        /**
         * Align the content to the bottom right corner
         */
        BOTTOM_RIGHT = 8,
        /**
         * Resize the content to fill the allocation
         */
        RESIZE_FILL = 9,
        /**
         * Resize the content to remain within the
         *   allocation, while maintaining the aspect ratio
         */
        RESIZE_ASPECT = 10,
    }
    export namespace EOTFType {
        export const $gtype: GObject.GType<EOTFType>;
    }
    enum EOTFType {
        NAMED,
        GAMMA = 1,
    }
    /**
     * The texture format required to store a specific encoding.
     */
    export namespace EncodingRequiredFormat {
        export const $gtype: GObject.GType<EncodingRequiredFormat>;
    }
    enum EncodingRequiredFormat {
        /**
         * 8bpc uint
         */
        'UINT8',
        /**
         * 10bpc uint
         */
        'UINT10' = 1,
        /**
         * 16bpc floating point
         */
        'FP16' = 2,
    }
    export namespace EventPhase {
        export const $gtype: GObject.GType<EventPhase>;
    }
    enum EventPhase {
        CAPTURE,
        BUBBLE = 1,
    }
    /**
     * Types of events.
     */
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }
    enum EventType {
        /**
         * Empty event
         */
        NOTHING,
        /**
         * Key press event
         */
        KEY_PRESS = 1,
        /**
         * Key release event
         */
        KEY_RELEASE = 2,
        /**
         * Pointer motion event
         */
        MOTION = 3,
        /**
         * Actor enter event
         */
        ENTER = 4,
        /**
         * Actor leave event
         */
        LEAVE = 5,
        /**
         * Pointer button press event
         */
        BUTTON_PRESS = 6,
        /**
         * Pointer button release event
         */
        BUTTON_RELEASE = 7,
        /**
         * Pointer scroll event
         */
        SCROLL = 8,
        /**
         * A new touch event sequence has started;
         */
        TOUCH_BEGIN = 9,
        /**
         * A touch event sequence has been updated;
         */
        TOUCH_UPDATE = 10,
        /**
         * A touch event sequence has finished;
         */
        TOUCH_END = 11,
        /**
         * A touch event sequence has been canceled;
         */
        TOUCH_CANCEL = 12,
        /**
         * A pinch gesture event, the current state is
         *   determined by its phase field;
         */
        TOUCHPAD_PINCH = 13,
        /**
         * A swipe gesture event, the current state is
         *   determined by its phase field;
         */
        TOUCHPAD_SWIPE = 14,
        /**
         * A hold gesture event, the current state is
         *   determined by its phase field. A hold gesture starts when the user places a
         *   finger on the touchpad and ends when all fingers are lifted. It is
         *   cancelled when the finger(s) move past a certain threshold.
         */
        TOUCHPAD_HOLD = 15,
        /**
         * A tool entered in proximity to a tablet;
         */
        PROXIMITY_IN = 16,
        /**
         * A tool left from the proximity area of a tablet;
         */
        PROXIMITY_OUT = 17,
        /**
         * A tablet pad button press
         */
        PAD_BUTTON_PRESS = 18,
        /**
         * A tablet pad button release
         */
        PAD_BUTTON_RELEASE = 19,
        /**
         * A tablet pad tactile strip event
         */
        PAD_STRIP = 20,
        /**
         * A tablet pad tactile ring event
         */
        PAD_RING = 21,
        /**
         * A tablet pad dial event
         */
        PAD_DIAL = 22,
        /**
         * Notification of an added device
         */
        DEVICE_ADDED = 23,
        /**
         * Notification of a removed device
         */
        DEVICE_REMOVED = 24,
        /**
         * Input method text commit
         */
        IM_COMMIT = 25,
        /**
         * Input method text delete action
         */
        IM_DELETE = 26,
        /**
         * Input method pre-edit text notification
         */
        IM_PREEDIT = 27,
        /**
         * Keyboard state change
         */
        KEY_STATE = 28,
        /**
         * Marks the end of the #ClutterEventType enumeration;
         */
        EVENT_LAST = 29,
    }
    export namespace FrameClockMode {
        export const $gtype: GObject.GType<FrameClockMode>;
    }
    enum FrameClockMode {
        FIXED,
        VARIABLE = 1,
        PASSIVE = 2,
    }
    export namespace FrameResult {
        export const $gtype: GObject.GType<FrameResult>;
    }
    enum FrameResult {
        PENDING_PRESENTED,
        IDLE = 1,
        IGNORED = 2,
    }
    export namespace GestureState {
        export const $gtype: GObject.GType<GestureState>;
    }
    enum GestureState {
        WAITING,
        POSSIBLE = 1,
        RECOGNIZING = 2,
        COMPLETED = 3,
        CANCELLED = 4,
        CLUTTER_N_GESTURE_STATES = 5,
    }
    /**
     * Grid position modes.
     */
    export namespace GridPosition {
        export const $gtype: GObject.GType<GridPosition>;
    }
    enum GridPosition {
        /**
         * left position
         */
        LEFT,
        /**
         * right position
         */
        RIGHT = 1,
        /**
         * top position
         */
        TOP = 2,
        /**
         * bottom position
         */
        BOTTOM = 3,
    }
    /**
     * The type of axes Clutter recognizes on a #ClutterInputDevice
     */
    export namespace InputAxis {
        export const $gtype: GObject.GType<InputAxis>;
    }
    enum InputAxis {
        /**
         * Unused axis
         */
        IGNORE,
        /**
         * The position on the X axis
         */
        X = 1,
        /**
         * The position of the Y axis
         */
        Y = 2,
        /**
         * The pressure information
         */
        PRESSURE = 3,
        /**
         * The tilt on the X axis
         */
        XTILT = 4,
        /**
         * The tile on the Y axis
         */
        YTILT = 5,
        /**
         * A wheel
         */
        WHEEL = 6,
        /**
         * Distance (Since 1.12)
         */
        DISTANCE = 7,
        /**
         * Rotation along the z-axis (Since 1.28)
         */
        ROTATION = 8,
        /**
         * A slider (Since 1.28)
         */
        SLIDER = 9,
        /**
         * Last value of the enumeration; this value is
         *   useful when iterating over the enumeration values (Since 1.12)
         */
        LAST = 10,
    }
    export namespace InputContentPurpose {
        export const $gtype: GObject.GType<InputContentPurpose>;
    }
    enum InputContentPurpose {
        NORMAL,
        ALPHA = 1,
        DIGITS = 2,
        NUMBER = 3,
        PHONE = 4,
        URL = 5,
        EMAIL = 6,
        NAME = 7,
        PASSWORD = 8,
        DATE = 9,
        TIME = 10,
        DATETIME = 11,
        TERMINAL = 12,
    }
    export namespace InputDevicePadFeature {
        export const $gtype: GObject.GType<InputDevicePadFeature>;
    }
    enum InputDevicePadFeature {
        BUTTON,
        RING = 1,
        STRIP = 2,
        DIAL = 3,
    }
    export namespace InputDevicePadSource {
        export const $gtype: GObject.GType<InputDevicePadSource>;
    }
    enum InputDevicePadSource {
        UNKNOWN,
        FINGER = 1,
    }
    /**
     * Defines the type of tool that a #ClutterInputDeviceTool represents.8
     */
    export namespace InputDeviceToolType {
        export const $gtype: GObject.GType<InputDeviceToolType>;
    }
    enum InputDeviceToolType {
        /**
         * No tool
         */
        NONE,
        /**
         * The tool is a pen
         */
        PEN = 1,
        /**
         * The tool is an eraser
         */
        ERASER = 2,
        /**
         * The tool is a brush
         */
        BRUSH = 3,
        /**
         * The tool is a pencil
         */
        PENCIL = 4,
        /**
         * The tool is an airbrush
         */
        AIRBRUSH = 5,
        /**
         * The tool is a mouse
         */
        MOUSE = 6,
        /**
         * The tool is a lens
         */
        LENS = 7,
    }
    /**
     * The types of input devices available.
     *
     * The #ClutterInputDeviceType enumeration can be extended at later
     * date; not every platform supports every input device type.
     */
    export namespace InputDeviceType {
        export const $gtype: GObject.GType<InputDeviceType>;
    }
    enum InputDeviceType {
        /**
         * A pointer device
         */
        POINTER_DEVICE,
        /**
         * A keyboard device
         */
        KEYBOARD_DEVICE = 1,
        /**
         * A generic extension device
         */
        EXTENSION_DEVICE = 2,
        /**
         * A joystick device
         */
        JOYSTICK_DEVICE = 3,
        /**
         * A tablet device
         */
        TABLET_DEVICE = 4,
        /**
         * A touchpad device
         */
        TOUCHPAD_DEVICE = 5,
        /**
         * A touch screen device
         */
        TOUCHSCREEN_DEVICE = 6,
        /**
         * A pen device
         */
        PEN_DEVICE = 7,
        /**
         * An eraser device
         */
        ERASER_DEVICE = 8,
        /**
         * A cursor device
         */
        CURSOR_DEVICE = 9,
        /**
         * A tablet pad
         */
        PAD_DEVICE = 10,
        /**
         * The number of device types
         */
        N_DEVICE_TYPES = 11,
    }
    /**
     * The mode for input devices available.
     */
    export namespace InputMode {
        export const $gtype: GObject.GType<InputMode>;
    }
    enum InputMode {
        /**
         * A logical, virtual device
         */
        LOGICAL,
        /**
         * A physical device, attached to
         *   a logical device
         */
        PHYSICAL = 1,
        /**
         * A physical device, not attached
         *   to a logical device
         */
        FLOATING = 2,
    }
    export namespace InputPanelState {
        export const $gtype: GObject.GType<InputPanelState>;
    }
    enum InputPanelState {
        OFF,
        ON = 1,
        TOGGLE = 2,
    }
    export namespace KeyState {
        export const $gtype: GObject.GType<KeyState>;
    }
    enum KeyState {
        RELEASED,
        PRESSED = 1,
    }
    export namespace LuminanceType {
        export const $gtype: GObject.GType<LuminanceType>;
    }
    enum LuminanceType {
        DERIVED,
        EXPLICIT = 1,
    }
    /**
     * Represents the orientation of actors or layout managers.
     */
    export namespace Orientation {
        export const $gtype: GObject.GType<Orientation>;
    }
    enum Orientation {
        /**
         * An horizontal orientation
         */
        HORIZONTAL,
        /**
         * A vertical orientation
         */
        VERTICAL = 1,
    }
    /**
     * The axis of the constraint that should be applied on the
     * panning action
     */
    export namespace PanAxis {
        export const $gtype: GObject.GType<PanAxis>;
    }
    enum PanAxis {
        /**
         * No constraint
         */
        BOTH,
        /**
         * Set a constraint on the X axis
         */
        X = 1,
        /**
         * Set a constraint on the Y axis
         */
        Y = 2,
    }
    /**
     * Controls the paint cycle of the scene graph when in pick mode
     */
    export namespace PickMode {
        export const $gtype: GObject.GType<PickMode>;
    }
    enum PickMode {
        /**
         * Do not paint any actor
         */
        NONE,
        /**
         * Paint only the reactive actors
         */
        REACTIVE = 1,
        /**
         * Paint all actors
         */
        ALL = 2,
    }
    export namespace PipelineCapability {
        export const $gtype: GObject.GType<PipelineCapability>;
    }
    enum PipelineCapability {
        STATE,
    }
    /**
     * Dwell click types.
     */
    export namespace PointerA11yDwellClickType {
        export const $gtype: GObject.GType<PointerA11yDwellClickType>;
    }
    enum PointerA11yDwellClickType {
        /**
         * Internal use only
         */
        NONE,
        PRIMARY = 1,
        SECONDARY = 2,
        MIDDLE = 3,
        DOUBLE = 4,
        DRAG = 5,
    }
    /**
     * Dwell gesture directions.
     */
    export namespace PointerA11yDwellDirection {
        export const $gtype: GObject.GType<PointerA11yDwellDirection>;
    }
    enum PointerA11yDwellDirection {
        NONE,
        LEFT = 1,
        RIGHT = 2,
        UP = 3,
        DOWN = 4,
    }
    /**
     * Dwell mode.
     */
    export namespace PointerA11yDwellMode {
        export const $gtype: GObject.GType<PointerA11yDwellMode>;
    }
    enum PointerA11yDwellMode {
        WINDOW,
        GESTURE = 1,
    }
    /**
     * Pointer accessibility timeout type.
     */
    export namespace PointerA11yTimeoutType {
        export const $gtype: GObject.GType<PointerA11yTimeoutType>;
    }
    enum PointerA11yTimeoutType {
        SECONDARY_CLICK,
        DWELL = 1,
        GESTURE = 2,
    }
    export namespace PreeditResetMode {
        export const $gtype: GObject.GType<PreeditResetMode>;
    }
    enum PreeditResetMode {
        CLEAR,
        COMMIT = 1,
    }
    /**
     * Specifies the type of requests for a #ClutterActor.
     */
    export namespace RequestMode {
        export const $gtype: GObject.GType<RequestMode>;
    }
    enum RequestMode {
        /**
         * Height for width requests
         */
        HEIGHT_FOR_WIDTH,
        /**
         * Width for height requests
         */
        WIDTH_FOR_HEIGHT = 1,
        /**
         * Use the preferred size of the
         *   #ClutterContent, if it has any (available since 1.22)
         */
        CONTENT_SIZE = 2,
    }
    /**
     * Axis of a rotation.
     */
    export namespace RotateAxis {
        export const $gtype: GObject.GType<RotateAxis>;
    }
    enum RotateAxis {
        /**
         * Rotate around the X axis
         */
        X_AXIS,
        /**
         * Rotate around the Y axis
         */
        Y_AXIS = 1,
        /**
         * Rotate around the Z axis
         */
        Z_AXIS = 2,
    }
    /**
     * The scaling filters to be used with the [property`Actor:`minification-filter]
     * and [property`Actor:`magnification-filter] properties.
     */
    export namespace ScalingFilter {
        export const $gtype: GObject.GType<ScalingFilter>;
    }
    enum ScalingFilter {
        /**
         * Linear interpolation filter
         */
        LINEAR,
        /**
         * Nearest neighbor interpolation filter
         */
        NEAREST = 1,
        /**
         * Trilinear minification filter, with
         *   mipmap generation; this filter linearly interpolates on every axis,
         *   as well as between mipmap levels.
         */
        TRILINEAR = 2,
    }
    /**
     * Direction of a pointer scroll event.
     *
     * The %CLUTTER_SCROLL_SMOOTH value implies that the #ClutterScrollEvent
     * has precise scrolling delta information.
     */
    export namespace ScrollDirection {
        export const $gtype: GObject.GType<ScrollDirection>;
    }
    enum ScrollDirection {
        /**
         * Scroll up
         */
        UP,
        /**
         * Scroll down
         */
        DOWN = 1,
        /**
         * Scroll left
         */
        LEFT = 2,
        /**
         * Scroll right
         */
        RIGHT = 3,
        /**
         * Precise scrolling delta (available in 1.10)
         */
        SMOOTH = 4,
    }
    /**
     * The scroll source determines the source of the scroll event.
     *
     * Keep in mind that the source device #ClutterInputDeviceType is not enough
     * to infer the scroll source.
     */
    export namespace ScrollSource {
        export const $gtype: GObject.GType<ScrollSource>;
    }
    enum ScrollSource {
        /**
         * Source of scroll events is unknown.
         */
        UNKNOWN,
        /**
         * The scroll event is originated by a mouse wheel.
         */
        WHEEL = 1,
        /**
         * The scroll event is originated by one or more
         *   fingers on the device (eg. touchpads).
         */
        FINGER = 2,
        /**
         * The scroll event is originated by the
         *   motion of some device (eg. a scroll button is set).
         */
        CONTINUOUS = 3,
    }
    /**
     * The edge to snap
     */
    export namespace SnapEdge {
        export const $gtype: GObject.GType<SnapEdge>;
    }
    enum SnapEdge {
        /**
         * the top edge
         */
        TOP,
        /**
         * the right edge
         */
        RIGHT = 1,
        /**
         * the bottom edge
         */
        BOTTOM = 2,
        /**
         * the left edge
         */
        LEFT = 3,
    }
    /**
     * Change the value transition of a step function.
     *
     * See clutter_timeline_set_step_progress().
     */
    export namespace StepMode {
        export const $gtype: GObject.GType<StepMode>;
    }
    enum StepMode {
        /**
         * The change in the value of a
         *   %CLUTTER_STEP progress mode should occur at the start of
         *   the transition
         */
        START,
        /**
         * The change in the value of a
         *   %CLUTTER_STEP progress mode should occur at the end of
         *   the transition
         */
        END = 1,
    }
    /**
     * The text direction to be used by [class`Actor]`s
     */
    export namespace TextDirection {
        export const $gtype: GObject.GType<TextDirection>;
    }
    enum TextDirection {
        /**
         * Use the default setting, as returned
         *   by clutter_get_default_text_direction()
         */
        DEFAULT,
        /**
         * Use left-to-right text direction
         */
        LTR = 1,
        /**
         * Use right-to-left text direction
         */
        RTL = 2,
    }
    /**
     * The direction of a #ClutterTimeline
     */
    export namespace TimelineDirection {
        export const $gtype: GObject.GType<TimelineDirection>;
    }
    enum TimelineDirection {
        /**
         * forward direction for a timeline
         */
        FORWARD,
        /**
         * backward direction for a timeline
         */
        BACKWARD = 1,
    }
    /**
     * The phase of a touchpad gesture event.
     *
     * All gestures are guaranteed to begin with an event of type
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN, followed by a number
     * of %CLUTTER_TOUCHPAD_GESTURE_PHASE_UPDATE (possibly 0).
     *
     * A finished gesture may have 2 possible outcomes, an event with phase
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
     * considered successful, this should be used as the hint to perform any
     * permanent changes.
     *
     * Cancelled gestures may be so for a variety of reasons, due to hardware,
     * or due to the gesture recognition layers hinting the gesture did not
     * finish resolutely (eg. a 3rd finger being added during a pinch gesture).
     * In these cases, the last event with report the phase
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
     * to undo any visible/permanent changes that were done throughout the
     * progress of the gesture.
     *
     * See also #ClutterTouchpadPinchEvent and #ClutterTouchpadPinchEvent.4
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
    export namespace TransferFunction {
        export const $gtype: GObject.GType<TransferFunction>;
    }
    enum TransferFunction {
        SRGB,
        PQ = 1,
        'BT709' = 2,
        LINEAR = 3,
    }
    /**
     * The middle button of a pointer device.
     */
    const BUTTON_MIDDLE: number;
    /**
     * The primary button of a pointer device.
     *
     * This is typically the left mouse button in a right-handed
     * mouse configuration.
     */
    const BUTTON_PRIMARY: number;
    /**
     * The secondary button of a pointer device.
     *
     * This is typically the right mouse button in a right-handed
     * mouse configuration.
     */
    const BUTTON_SECONDARY: number;
    /**
     * Default value for "now".
     */
    const CURRENT_TIME: number;
    /**
     * Continues the propagation of an event; this macro should be
     * used in event-related signals.
     */
    const EVENT_PROPAGATE: boolean;
    /**
     * Stops the propagation of an event; this macro should be used
     * in event-related signals.
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
     * Priority of the redraws. This is chosen to be lower than the GTK+
     * redraw and resize priorities, because in application with both
     * GTK+ and Clutter it's more likely that the Clutter part will be
     * continually animating (and thus able to starve GTK+) than
     * vice-versa.
     */
    const PRIORITY_REDRAW: number;
    const VIRTUAL_INPUT_DEVICE_MAX_TOUCH_SLOTS: number;
    /**
     * Allocates a new [struct`ActorBox]`.
     *
     * @returns the newly allocated #ClutterActorBox.
     *   Use [method`ActorBox`.free] to free its resources
     */
    function actor_box_alloc(): ActorBox;
    /**
     * Clamps the components of `box` to the nearest integer
     *
     * @param box the #ClutterActorBox to clamp
     */
    function actor_box_clamp_to_pixel(box: ActorBox): [ActorBox];
    /**
     * Adds the debug flags passed to the list of debug flags.
     *
     * @param debug_flags
     * @param draw_flags
     * @param pick_flags
     */
    function add_debug_flags(
        debug_flags: DebugFlag | null,
        draw_flags: DrawDebugFlag | null,
        pick_flags: PickDebugFlag | null,
    ): void;
    function colorspace_to_primaries(colorspace: Colorspace | null): Primaries;
    function debug_set_max_render_time_constant(max_render_time_constant_us: number): void;
    /**
     * Adds a function which will be called for all events that Clutter
     * processes. The function will be called before any signals are
     * emitted for the event and it will take precedence over any grabs.
     *
     * @returns an identifier for the event filter, to be used
     *   with [func`Clutter`.Event.remove_filter].
     * @param stage The #ClutterStage to capture events for
     * @param func The callback function which will be passed all events.
     */
    function event_add_filter(stage: Stage | null, func: EventFilterFunc): number;
    /**
     * Pops an event off the event queue. Applications should not need to call
     * this.
     *
     * @returns A #ClutterEvent or NULL if queue empty
     */
    function event_get(): Event;
    /**
     * Removes an event filter that was previously added with
     * [func`Clutter`.Event.add_filter].
     *
     * @param id The ID of the event filter, as returned from [func`Clutter`.Event.add_filter]
     */
    function event_remove_filter(id: number): void;
    /**
     * Checks if events are pending in the event queue.
     *
     * @returns TRUE if there are pending events, FALSE otherwise.
     */
    function events_pending(): boolean;
    /**
     * Returns whether Clutter has accessibility support enabled.
     *
     * @returns %TRUE if Clutter has accessibility support enabled
     */
    function get_accessibility_enabled(): boolean;
    /**
     * If an event is currently being processed, return that event.
     * This function is intended to be used to access event state
     * that might not be exposed by higher-level widgets.  For
     * example, to get the key modifier state from a Button 'clicked'
     * event.
     *
     * @returns The current ClutterEvent, or %NULL if none
     */
    function get_current_event(): Event;
    /**
     * Retrieves the timestamp of the last event, if there is an
     * event or if the event has a timestamp.
     *
     * @returns the event timestamp, or %CLUTTER_CURRENT_TIME
     */
    function get_current_event_time(): number;
    function get_debug_flags(): [DebugFlag | null, DrawDebugFlag | null, PickDebugFlag | null];
    /**
     * Retrieves the default #ClutterBackend used by Clutter. The
     * #ClutterBackend holds backend-specific configuration options.
     *
     * @returns the default backend. You should
     *   not ref or unref the returned object. Applications should rarely
     *   need to use this.
     */
    function get_default_backend(): Backend;
    /**
     * Retrieves the default direction for the text. The text direction is
     * determined by the locale and/or by the `CLUTTER_TEXT_DIRECTION`
     * environment variable.
     *
     * The default text direction can be overridden on a per-actor basis by using
     * [method`Actor`.set_text_direction].
     *
     * @returns the default text direction
     */
    function get_default_text_direction(): TextDirection;
    function get_text_direction(): TextDirection;
    /**
     * Converts `keyval` from a Clutter key symbol to the corresponding
     * ISO10646 (Unicode) character.
     *
     * @returns a Unicode character, or 0 if there  is no corresponding
     *   character.
     * @param keyval a key symbol
     */
    function keysym_to_unicode(keyval: number): number;
    function keyval_convert_case(symbol: number): [number, number];
    function keyval_name(keyval: number): string | null;
    function pipeline_capability_quark(): GLib.Quark;
    /**
     * Removes the debug flags passed from the list of debug flags.
     *
     * @param debug_flags
     * @param draw_flags
     * @param pick_flags
     */
    function remove_debug_flags(
        debug_flags: DebugFlag | null,
        draw_flags: DrawDebugFlag | null,
        pick_flags: PickDebugFlag | null,
    ): void;
    /**
     * Adds a function to be called whenever Clutter is processing a new
     * frame.
     *
     * If the function returns %FALSE it is automatically removed from the
     * list of repaint functions and will not be called again.
     *
     * This function is guaranteed to be called from within the same thread
     * that called clutter_main(), and while the Clutter lock is being held;
     * the function will be called within the main loop, so it is imperative
     * that it does not block, otherwise the frame time budget may be lost.
     *
     * A repaint function is useful to ensure that an update of the scenegraph
     * is performed before the scenegraph is repainted. The `flags` passed to this
     * function will determine the section of the frame processing that will
     * result in `func` being called.
     *
     * Adding a repaint function does not automatically ensure that a new
     * frame will be queued.
     *
     * When the repaint function is removed (either because it returned %FALSE
     * or because clutter_threads_remove_repaint_func() has been called) the
     * `notify` function will be called, if any is set.
     *
     * @returns the ID (greater than 0) of the repaint function. You
     *   can use the returned integer to remove the repaint function by
     *   calling clutter_threads_remove_repaint_func().
     * @param flags flags for the repaint function
     * @param func the function to be called within the paint cycle
     */
    function threads_add_repaint_func(flags: RepaintFlags | null, func: GLib.SourceFunc): number;
    /**
     * Removes the repaint function with `handle_id` as its id
     *
     * @param handle_id an unsigned integer greater than zero
     */
    function threads_remove_repaint_func(handle_id: number): void;
    /**
     * Convert from a ISO10646 character to a key symbol.
     *
     * @returns the corresponding Clutter key symbol, if one exists.
     *   or, if there is no corresponding symbol, wc | 0x01000000
     * @param wc a ISO10646 encoded character
     */
    function unicode_to_keysym(wc: number): number;
    /**
     * Retrieves a pointer to the #ClutterPaintNode contained inside
     * the passed #GValue, and if not %NULL it will increase the
     * reference count.
     *
     * @returns a pointer
     *   to the #ClutterPaintNode, with its reference count increased,
     *   or %NULL
     * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
     */
    function value_dup_paint_node(value: GObject.Value | any): PaintNode;
    /**
     * Retrieves a pointer to the #ClutterPaintNode contained inside
     * the passed #GValue.
     *
     * @returns a pointer to
     *   a #ClutterPaintNode, or %NULL
     * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
     */
    function value_get_paint_node(value: GObject.Value | any): PaintNode;
    /**
     * Retrieves the list of floating point values stored inside
     * the passed [struct`GObject`.Value]. `value` must have been initialized with
     * %CLUTTER_TYPE_SHADER_FLOAT.
     *
     * @returns the pointer to a list of
     *   floating point values.  The returned value is owned by the
     *   #GValue and should never be modified or freed.
     * @param value a #GValue
     */
    function value_get_shader_float(value: GObject.Value | any): number[];
    /**
     * Retrieves the list of integer values stored inside the passed
     * [struct`GObject`.Value]. `value` must have been initialized with
     * %CLUTTER_TYPE_SHADER_INT.
     *
     * @returns the pointer to a list of
     *   integer values.  The returned value is owned by the #GValue and
     *   should never be modified or freed.
     * @param value a #GValue
     */
    function value_get_shader_int(value: GObject.Value | any): number[];
    /**
     * Retrieves a matrix of floating point values stored inside
     * the passed [struct`GObject`.Value]. `value` must have been initialized with
     * %CLUTTER_TYPE_SHADER_MATRIX.
     *
     * @returns the pointer to a matrix
     *   of floating point values. The returned value is owned by the #GValue and
     *   should never be modified or freed.
     * @param value a #GValue
     */
    function value_get_shader_matrix(value: GObject.Value | any): number[];
    /**
     * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
     *
     * This function increased the reference count of `node;` if you do not wish
     * to increase the reference count, use clutter_value_take_paint_node()
     * instead. The reference count will be released by g_value_unset().
     *
     * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
     * @param node a #ClutterPaintNode, or %NULL
     */
    function value_set_paint_node(value: GObject.Value | any, node?: PaintNode | null): void;
    /**
     * Sets `floats` as the contents of `value`. The passed [struct`GObject`.Value]
     * must have been initialized using %CLUTTER_TYPE_SHADER_FLOAT.
     *
     * @param value a #GValue
     * @param floats an array of floating point values
     */
    function value_set_shader_float(value: GObject.Value | any, floats: number[]): void;
    /**
     * Sets `ints` as the contents of `value`. The passed [struct`GObject`.Value]
     * must have been initialized using %CLUTTER_TYPE_SHADER_INT.
     *
     * @param value a #GValue
     * @param ints an array of integer values
     */
    function value_set_shader_int(value: GObject.Value | any, ints: number[]): void;
    /**
     * Sets `matrix` as the contents of `value`. The passed [struct`GObject`.Value]
     * must have been initialized using %CLUTTER_TYPE_SHADER_MATRIX.
     *
     * @param value a #GValue
     * @param matrix a matrix of floating point values
     */
    function value_set_shader_matrix(value: GObject.Value | any, matrix: number[]): void;
    /**
     * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
     *
     * Unlike clutter_value_set_paint_node(), this function will not take a
     * reference on the passed `node:` instead, it will take ownership of the
     * current reference count.
     *
     * @param value a #GValue, initialized with %CLUTTER_TYPE_PAINT_NODE
     * @param node a #ClutterPaintNode, or %NULL
     */
    function value_take_paint_node(value: GObject.Value | any, node?: PaintNode | null): void;
    interface ActorCreateChildFunc<A = GObject.Object> {
        (item: A): Actor;
    }
    interface EventFilterFunc {
        (event: Event, event_actor: Actor): boolean;
    }
    interface ProgressFunc {
        (a: GObject.Value | any, b: GObject.Value | any, progress: number, retval: GObject.Value | any): boolean;
    }
    interface StageInputForeachFunc {
        (stage: Stage, sprite: Sprite): boolean;
    }
    interface TimelineProgressFunc {
        (timeline: Timeline, elapsed: number, total: number): number;
    }
    export namespace ColorStateTransformFlags {
        export const $gtype: GObject.GType<ColorStateTransformFlags>;
    }
    enum ColorStateTransformFlags {
        OPAQUE = 1,
    }
    /**
     * Content repeat modes.
     */
    export namespace ContentRepeat {
        export const $gtype: GObject.GType<ContentRepeat>;
    }
    enum ContentRepeat {
        /**
         * No repeat
         */
        NONE,
        /**
         * Repeat the content on the X axis
         */
        X_AXIS = 1,
        /**
         * Repeat the content on the Y axis
         */
        Y_AXIS = 2,
        /**
         * Repeat the content on both axis
         */
        BOTH = 3,
    }
    export namespace DebugFlag {
        export const $gtype: GObject.GType<DebugFlag>;
    }
    enum DebugFlag {
        MISC = 1,
        ACTOR = 2,
        TEXTURE = 4,
        EVENT = 8,
        PAINT = 16,
        PANGO = 32,
        BACKEND = 64,
        SCHEDULER = 128,
        SCRIPT = 256,
        SHADER = 512,
        MULTISTAGE = 1024,
        ANIMATION = 2048,
        LAYOUT = 4096,
        PICK = 8192,
        EVENTLOOP = 16384,
        CLIPPING = 32768,
        OOB_TRANSFORMS = 65536,
        FRAME_TIMINGS = 131072,
        DETAILED_TRACE = 262144,
        GRABS = 524288,
        FRAME_CLOCK = 1048576,
        GESTURES = 2097152,
    }
    export namespace DrawDebugFlag {
        export const $gtype: GObject.GType<DrawDebugFlag>;
    }
    enum DrawDebugFlag {
        DISABLE_SWAP_EVENTS = 1,
        DISABLE_CLIPPED_REDRAWS = 2,
        REDRAWS = 4,
        PAINT_VOLUMES = 8,
        DISABLE_CULLING = 16,
        DISABLE_OFFSCREEN_REDIRECT = 32,
        CONTINUOUS_REDRAW = 64,
        PAINT_DEFORM_TILES = 128,
        PAINT_DAMAGE_REGION = 256,
        DISABLE_DYNAMIC_MAX_RENDER_TIME = 512,
        PAINT_MAX_RENDER_TIME = 1024,
        DISABLE_TRIPLE_BUFFERING = 2048,
    }
    /**
     * Flags passed to the ‘paint’ or ‘pick’ method of #ClutterEffect.
     */
    export namespace EffectPaintFlags {
        export const $gtype: GObject.GType<EffectPaintFlags>;
    }
    enum EffectPaintFlags {
        /**
         * The actor or one of its children
         *   has queued a redraw before this paint. This implies that the effect
         *   should call clutter_actor_continue_paint() to chain to the next
         *   effect and can not cache any results from a previous paint.
         */
        ACTOR_DIRTY = 1,
        /**
         * The effect should not be used
         *   on this frame, but it will be asked to paint the actor still.
         */
        BYPASS_EFFECT = 2,
    }
    /**
     * Flags for the #ClutterEvent
     */
    export namespace EventFlags {
        export const $gtype: GObject.GType<EventFlags>;
    }
    enum EventFlags {
        /**
         * No flag set
         */
        NONE,
        /**
         * Synthetic event
         */
        FLAG_SYNTHETIC = 1,
        FLAG_INPUT_METHOD = 2,
        /**
         * Auto-repeated event
         */
        FLAG_REPEATED = 4,
        FLAG_RELATIVE_MOTION = 8,
        FLAG_GRAB_NOTIFY = 16,
        FLAG_POINTER_EMULATED = 32,
        'FLAG_A11Y_MODIFIER_FIRST_CLICK' = 64,
    }
    export namespace FrameInfoFlag {
        export const $gtype: GObject.GType<FrameInfoFlag>;
    }
    enum FrameInfoFlag {
        NONE,
        HW_CLOCK = 1,
        ZERO_COPY = 2,
        VSYNC = 4,
    }
    export namespace GrabState {
        export const $gtype: GObject.GType<GrabState>;
    }
    enum GrabState {
        NONE,
        POINTER = 1,
        KEYBOARD = 2,
        ALL = 3,
    }
    export namespace InputAxisFlags {
        export const $gtype: GObject.GType<InputAxisFlags>;
    }
    enum InputAxisFlags {
        NONE,
        X = 2,
        Y = 4,
        PRESSURE = 8,
        XTILT = 16,
        YTILT = 32,
        WHEEL = 64,
        DISTANCE = 128,
        ROTATION = 256,
        SLIDER = 512,
    }
    export namespace InputCapabilities {
        export const $gtype: GObject.GType<InputCapabilities>;
    }
    enum InputCapabilities {
        NONE,
        POINTER = 1,
        KEYBOARD = 2,
        TOUCHPAD = 4,
        TOUCH = 8,
        TABLET_TOOL = 16,
        TABLET_PAD = 32,
        TRACKBALL = 64,
        TRACKPOINT = 128,
    }
    export namespace InputContentHintFlags {
        export const $gtype: GObject.GType<InputContentHintFlags>;
    }
    enum InputContentHintFlags {
        COMPLETION = 1,
        SPELLCHECK = 2,
        AUTO_CAPITALIZATION = 4,
        LOWERCASE = 8,
        UPPERCASE = 16,
        TITLECASE = 32,
        HIDDEN_TEXT = 64,
        SENSITIVE_DATA = 128,
        LATIN = 256,
        MULTILINE = 512,
    }
    /**
     * Masks applied to a #ClutterEvent by modifiers.
     *
     * Note that Clutter may add internal values to events which include
     * reserved values such as %CLUTTER_MODIFIER_RESERVED_13_MASK.  Your code
     * should preserve and ignore them.  You can use %CLUTTER_MODIFIER_MASK to
     * remove all reserved values.
     */
    export namespace ModifierType {
        export const $gtype: GObject.GType<ModifierType>;
    }
    enum ModifierType {
        /**
         * Mask applied by the Shift key
         */
        SHIFT_MASK = 1,
        /**
         * Mask applied by the Caps Lock key
         */
        LOCK_MASK = 2,
        /**
         * Mask applied by the Control key
         */
        CONTROL_MASK = 4,
        /**
         * Mask applied by the first Mod key
         */
        'MOD1_MASK' = 8,
        /**
         * Mask applied by the second Mod key
         */
        'MOD2_MASK' = 16,
        /**
         * Mask applied by the third Mod key
         */
        'MOD3_MASK' = 32,
        /**
         * Mask applied by the fourth Mod key
         */
        'MOD4_MASK' = 64,
        /**
         * Mask applied by the fifth Mod key
         */
        'MOD5_MASK' = 128,
        /**
         * Mask applied by the first pointer button
         */
        'BUTTON1_MASK' = 256,
        /**
         * Mask applied by the second pointer button
         */
        'BUTTON2_MASK' = 512,
        /**
         * Mask applied by the third pointer button
         */
        'BUTTON3_MASK' = 1024,
        /**
         * Mask applied by the fourth pointer button
         */
        'BUTTON4_MASK' = 2048,
        /**
         * Mask applied by the fifth pointer button
         */
        'BUTTON5_MASK' = 4096,
        'MODIFIER_RESERVED_13_MASK' = 8192,
        'MODIFIER_RESERVED_14_MASK' = 16384,
        'MODIFIER_RESERVED_15_MASK' = 32768,
        'MODIFIER_RESERVED_16_MASK' = 65536,
        'MODIFIER_RESERVED_17_MASK' = 131072,
        'MODIFIER_RESERVED_18_MASK' = 262144,
        'MODIFIER_RESERVED_19_MASK' = 524288,
        'MODIFIER_RESERVED_20_MASK' = 1048576,
        'MODIFIER_RESERVED_21_MASK' = 2097152,
        'MODIFIER_RESERVED_22_MASK' = 4194304,
        'MODIFIER_RESERVED_23_MASK' = 8388608,
        'MODIFIER_RESERVED_24_MASK' = 16777216,
        'MODIFIER_RESERVED_25_MASK' = 33554432,
        /**
         * Mask applied by the Super key
         */
        SUPER_MASK = 67108864,
        /**
         * Mask applied by the Hyper key
         */
        HYPER_MASK = 134217728,
        /**
         * Mask applied by the Meta key
         */
        META_MASK = 268435456,
        'MODIFIER_RESERVED_29_MASK' = 536870912,
        /**
         * Mask applied during release
         */
        RELEASE_MASK = 1073741824,
        /**
         * A mask covering all modifier types
         */
        MODIFIER_MASK = 1543512063,
    }
    /**
     * Possible flags to pass to clutter_actor_set_offscreen_redirect().
     */
    export namespace OffscreenRedirect {
        export const $gtype: GObject.GType<OffscreenRedirect>;
    }
    enum OffscreenRedirect {
        /**
         * Only redirect
         *   the actor if it is semi-transparent and its has_overlaps()
         *   virtual returns %TRUE.
         */
        AUTOMATIC_FOR_OPACITY = 1,
        /**
         * Always redirect the actor to an
         *   offscreen buffer even if it is fully opaque.
         */
        ALWAYS = 2,
        /**
         * Only redirect the actor if it is the
         *   most efficient thing to do based on its recent repaint behaviour. That
         *   means when its contents are changing less frequently than it's being used
         *   on stage.
         */
        ON_IDLE = 4,
    }
    export namespace PaintFlag {
        export const $gtype: GObject.GType<PaintFlag>;
    }
    enum PaintFlag {
        NONE,
        NO_CURSORS = 1,
        FORCE_CURSORS = 2,
        CLEAR = 4,
    }
    export namespace PickDebugFlag {
        export const $gtype: GObject.GType<PickDebugFlag>;
    }
    enum PickDebugFlag {
        PICKING = 1,
    }
    /**
     * Pointer accessibility features applied to a ClutterInputDevice pointer.
     */
    export namespace PointerA11yFlags {
        export const $gtype: GObject.GType<PointerA11yFlags>;
    }
    enum PointerA11yFlags {
        SECONDARY_CLICK_ENABLED = 1,
        DWELL_ENABLED = 2,
    }
    /**
     * Flags to pass to [func`Clutter`.threads_add_repaint_func].
     */
    export namespace RepaintFlags {
        export const $gtype: GObject.GType<RepaintFlags>;
    }
    enum RepaintFlags {
        /**
         * Run the repaint function prior to
         *   painting the stages
         */
        PRE_PAINT = 1,
        /**
         * Run the repaint function after
         *   painting the stages
         */
        POST_PAINT = 2,
    }
    /**
     * Flags used to notify the axes that were stopped in a #ClutterScrollEvent.
     *
     * These can be used to trigger post-scroll effects like kinetic scrolling.
     */
    export namespace ScrollFinishFlags {
        export const $gtype: GObject.GType<ScrollFinishFlags>;
    }
    enum ScrollFinishFlags {
        /**
         * no axis was stopped.
         */
        NONE,
        /**
         * The horizontal axis stopped.
         */
        HORIZONTAL = 1,
        /**
         * The vertical axis stopped.
         */
        VERTICAL = 2,
    }
    /**
     * Flags used to notify modification on scrolling behavior.
     */
    export namespace ScrollFlags {
        export const $gtype: GObject.GType<ScrollFlags>;
    }
    enum ScrollFlags {
        /**
         * No additional information.
         */
        NONE,
        /**
         * Scroll direction is inverted, relative to the
         *   physical motion on the device.
         */
        INVERTED = 1,
    }
    export namespace VirtualDeviceType {
        export const $gtype: GObject.GType<VirtualDeviceType>;
    }
    enum VirtualDeviceType {
        NONE,
        KEYBOARD = 1,
        POINTER = 2,
        TOUCHSCREEN = 4,
    }
    namespace Action {
        // Signal signatures
        interface SignalSignatures extends ActorMeta.SignalSignatures {
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends ActorMeta.ConstructorProps {}
    }
    type Action = (typeof classes.Action)['prototype'];
    const Action: typeof classes.Action &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Action.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Action.SignalSignatures> & classes.Action);
    namespace Actor {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'button-press-event'(arg0: Event): boolean | void;
            'button-release-event'(arg0: Event): boolean | void;
            'captured-event'(arg0: Event): boolean | void;
            'child-added'(arg0: Actor): void;
            'child-removed'(arg0: Actor): void;
            cloned(arg0: Clone): void;
            decloned(arg0: Clone): void;
            destroy(): void;
            'enter-event'(arg0: Event): boolean | void;
            event(arg0: Event): boolean | void;
            hide(): void;
            'key-focus-in'(): void;
            'key-focus-out'(): void;
            'key-press-event'(arg0: Event): boolean | void;
            'key-release-event'(arg0: Event): boolean | void;
            'leave-event'(arg0: Event): boolean | void;
            'motion-event'(arg0: Event): boolean | void;
            'parent-set'(arg0: Actor | null): void;
            pick(arg0: PickContext): void;
            'queue-relayout'(): void;
            realize(): void;
            'resource-scale-changed'(): void;
            'scroll-event'(arg0: Event): boolean | void;
            show(): void;
            'stage-views-changed'(): void;
            'touch-event'(arg0: Event): boolean | void;
            'transition-stopped'(arg0: string, arg1: boolean): void;
            'transitions-completed'(): void;
            unrealize(): void;
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
            'captured-event::accessible-name'(arg0: Event): boolean | void;
            'captured-event::accessible-role'(arg0: Event): boolean | void;
            'captured-event::actions'(arg0: Event): boolean | void;
            'captured-event::allocation'(arg0: Event): boolean | void;
            'captured-event::background-color'(arg0: Event): boolean | void;
            'captured-event::background-color-set'(arg0: Event): boolean | void;
            'captured-event::child-transform'(arg0: Event): boolean | void;
            'captured-event::child-transform-set'(arg0: Event): boolean | void;
            'captured-event::clip-rect'(arg0: Event): boolean | void;
            'captured-event::clip-to-allocation'(arg0: Event): boolean | void;
            'captured-event::color-state'(arg0: Event): boolean | void;
            'captured-event::constraints'(arg0: Event): boolean | void;
            'captured-event::content'(arg0: Event): boolean | void;
            'captured-event::content-box'(arg0: Event): boolean | void;
            'captured-event::content-gravity'(arg0: Event): boolean | void;
            'captured-event::content-repeat'(arg0: Event): boolean | void;
            'captured-event::context'(arg0: Event): boolean | void;
            'captured-event::effect'(arg0: Event): boolean | void;
            'captured-event::first-child'(arg0: Event): boolean | void;
            'captured-event::fixed-position-set'(arg0: Event): boolean | void;
            'captured-event::fixed-x'(arg0: Event): boolean | void;
            'captured-event::fixed-y'(arg0: Event): boolean | void;
            'captured-event::has-clip'(arg0: Event): boolean | void;
            'captured-event::has-pointer'(arg0: Event): boolean | void;
            'captured-event::height'(arg0: Event): boolean | void;
            'captured-event::last-child'(arg0: Event): boolean | void;
            'captured-event::layout-manager'(arg0: Event): boolean | void;
            'captured-event::magnification-filter'(arg0: Event): boolean | void;
            'captured-event::mapped'(arg0: Event): boolean | void;
            'captured-event::margin-bottom'(arg0: Event): boolean | void;
            'captured-event::margin-left'(arg0: Event): boolean | void;
            'captured-event::margin-right'(arg0: Event): boolean | void;
            'captured-event::margin-top'(arg0: Event): boolean | void;
            'captured-event::min-height'(arg0: Event): boolean | void;
            'captured-event::min-height-set'(arg0: Event): boolean | void;
            'captured-event::min-width'(arg0: Event): boolean | void;
            'captured-event::min-width-set'(arg0: Event): boolean | void;
            'captured-event::minification-filter'(arg0: Event): boolean | void;
            'captured-event::name'(arg0: Event): boolean | void;
            'captured-event::natural-height'(arg0: Event): boolean | void;
            'captured-event::natural-height-set'(arg0: Event): boolean | void;
            'captured-event::natural-width'(arg0: Event): boolean | void;
            'captured-event::natural-width-set'(arg0: Event): boolean | void;
            'captured-event::offscreen-redirect'(arg0: Event): boolean | void;
            'captured-event::opacity'(arg0: Event): boolean | void;
            'captured-event::pivot-point'(arg0: Event): boolean | void;
            'captured-event::pivot-point-z'(arg0: Event): boolean | void;
            'captured-event::position'(arg0: Event): boolean | void;
            'captured-event::reactive'(arg0: Event): boolean | void;
            'captured-event::realized'(arg0: Event): boolean | void;
            'captured-event::request-mode'(arg0: Event): boolean | void;
            'captured-event::rotation-angle-x'(arg0: Event): boolean | void;
            'captured-event::rotation-angle-y'(arg0: Event): boolean | void;
            'captured-event::rotation-angle-z'(arg0: Event): boolean | void;
            'captured-event::scale-x'(arg0: Event): boolean | void;
            'captured-event::scale-y'(arg0: Event): boolean | void;
            'captured-event::scale-z'(arg0: Event): boolean | void;
            'captured-event::show-on-set-parent'(arg0: Event): boolean | void;
            'captured-event::size'(arg0: Event): boolean | void;
            'captured-event::text-direction'(arg0: Event): boolean | void;
            'captured-event::transform'(arg0: Event): boolean | void;
            'captured-event::transform-set'(arg0: Event): boolean | void;
            'captured-event::translation-x'(arg0: Event): boolean | void;
            'captured-event::translation-y'(arg0: Event): boolean | void;
            'captured-event::translation-z'(arg0: Event): boolean | void;
            'captured-event::visible'(arg0: Event): boolean | void;
            'captured-event::width'(arg0: Event): boolean | void;
            'captured-event::x'(arg0: Event): boolean | void;
            'captured-event::x-align'(arg0: Event): boolean | void;
            'captured-event::x-expand'(arg0: Event): boolean | void;
            'captured-event::y'(arg0: Event): boolean | void;
            'captured-event::y-align'(arg0: Event): boolean | void;
            'captured-event::y-expand'(arg0: Event): boolean | void;
            'captured-event::z-position'(arg0: Event): boolean | void;
            'event::accessible-name'(arg0: Event): boolean | void;
            'event::accessible-role'(arg0: Event): boolean | void;
            'event::actions'(arg0: Event): boolean | void;
            'event::allocation'(arg0: Event): boolean | void;
            'event::background-color'(arg0: Event): boolean | void;
            'event::background-color-set'(arg0: Event): boolean | void;
            'event::child-transform'(arg0: Event): boolean | void;
            'event::child-transform-set'(arg0: Event): boolean | void;
            'event::clip-rect'(arg0: Event): boolean | void;
            'event::clip-to-allocation'(arg0: Event): boolean | void;
            'event::color-state'(arg0: Event): boolean | void;
            'event::constraints'(arg0: Event): boolean | void;
            'event::content'(arg0: Event): boolean | void;
            'event::content-box'(arg0: Event): boolean | void;
            'event::content-gravity'(arg0: Event): boolean | void;
            'event::content-repeat'(arg0: Event): boolean | void;
            'event::context'(arg0: Event): boolean | void;
            'event::effect'(arg0: Event): boolean | void;
            'event::first-child'(arg0: Event): boolean | void;
            'event::fixed-position-set'(arg0: Event): boolean | void;
            'event::fixed-x'(arg0: Event): boolean | void;
            'event::fixed-y'(arg0: Event): boolean | void;
            'event::has-clip'(arg0: Event): boolean | void;
            'event::has-pointer'(arg0: Event): boolean | void;
            'event::height'(arg0: Event): boolean | void;
            'event::last-child'(arg0: Event): boolean | void;
            'event::layout-manager'(arg0: Event): boolean | void;
            'event::magnification-filter'(arg0: Event): boolean | void;
            'event::mapped'(arg0: Event): boolean | void;
            'event::margin-bottom'(arg0: Event): boolean | void;
            'event::margin-left'(arg0: Event): boolean | void;
            'event::margin-right'(arg0: Event): boolean | void;
            'event::margin-top'(arg0: Event): boolean | void;
            'event::min-height'(arg0: Event): boolean | void;
            'event::min-height-set'(arg0: Event): boolean | void;
            'event::min-width'(arg0: Event): boolean | void;
            'event::min-width-set'(arg0: Event): boolean | void;
            'event::minification-filter'(arg0: Event): boolean | void;
            'event::name'(arg0: Event): boolean | void;
            'event::natural-height'(arg0: Event): boolean | void;
            'event::natural-height-set'(arg0: Event): boolean | void;
            'event::natural-width'(arg0: Event): boolean | void;
            'event::natural-width-set'(arg0: Event): boolean | void;
            'event::offscreen-redirect'(arg0: Event): boolean | void;
            'event::opacity'(arg0: Event): boolean | void;
            'event::pivot-point'(arg0: Event): boolean | void;
            'event::pivot-point-z'(arg0: Event): boolean | void;
            'event::position'(arg0: Event): boolean | void;
            'event::reactive'(arg0: Event): boolean | void;
            'event::realized'(arg0: Event): boolean | void;
            'event::request-mode'(arg0: Event): boolean | void;
            'event::rotation-angle-x'(arg0: Event): boolean | void;
            'event::rotation-angle-y'(arg0: Event): boolean | void;
            'event::rotation-angle-z'(arg0: Event): boolean | void;
            'event::scale-x'(arg0: Event): boolean | void;
            'event::scale-y'(arg0: Event): boolean | void;
            'event::scale-z'(arg0: Event): boolean | void;
            'event::show-on-set-parent'(arg0: Event): boolean | void;
            'event::size'(arg0: Event): boolean | void;
            'event::text-direction'(arg0: Event): boolean | void;
            'event::transform'(arg0: Event): boolean | void;
            'event::transform-set'(arg0: Event): boolean | void;
            'event::translation-x'(arg0: Event): boolean | void;
            'event::translation-y'(arg0: Event): boolean | void;
            'event::translation-z'(arg0: Event): boolean | void;
            'event::visible'(arg0: Event): boolean | void;
            'event::width'(arg0: Event): boolean | void;
            'event::x'(arg0: Event): boolean | void;
            'event::x-align'(arg0: Event): boolean | void;
            'event::x-expand'(arg0: Event): boolean | void;
            'event::y'(arg0: Event): boolean | void;
            'event::y-align'(arg0: Event): boolean | void;
            'event::y-expand'(arg0: Event): boolean | void;
            'event::z-position'(arg0: Event): boolean | void;
            'transition-stopped::accessible-name'(arg0: string, arg1: boolean): void;
            'transition-stopped::accessible-role'(arg0: string, arg1: boolean): void;
            'transition-stopped::actions'(arg0: string, arg1: boolean): void;
            'transition-stopped::allocation'(arg0: string, arg1: boolean): void;
            'transition-stopped::background-color'(arg0: string, arg1: boolean): void;
            'transition-stopped::background-color-set'(arg0: string, arg1: boolean): void;
            'transition-stopped::child-transform'(arg0: string, arg1: boolean): void;
            'transition-stopped::child-transform-set'(arg0: string, arg1: boolean): void;
            'transition-stopped::clip-rect'(arg0: string, arg1: boolean): void;
            'transition-stopped::clip-to-allocation'(arg0: string, arg1: boolean): void;
            'transition-stopped::color-state'(arg0: string, arg1: boolean): void;
            'transition-stopped::constraints'(arg0: string, arg1: boolean): void;
            'transition-stopped::content'(arg0: string, arg1: boolean): void;
            'transition-stopped::content-box'(arg0: string, arg1: boolean): void;
            'transition-stopped::content-gravity'(arg0: string, arg1: boolean): void;
            'transition-stopped::content-repeat'(arg0: string, arg1: boolean): void;
            'transition-stopped::context'(arg0: string, arg1: boolean): void;
            'transition-stopped::effect'(arg0: string, arg1: boolean): void;
            'transition-stopped::first-child'(arg0: string, arg1: boolean): void;
            'transition-stopped::fixed-position-set'(arg0: string, arg1: boolean): void;
            'transition-stopped::fixed-x'(arg0: string, arg1: boolean): void;
            'transition-stopped::fixed-y'(arg0: string, arg1: boolean): void;
            'transition-stopped::has-clip'(arg0: string, arg1: boolean): void;
            'transition-stopped::has-pointer'(arg0: string, arg1: boolean): void;
            'transition-stopped::height'(arg0: string, arg1: boolean): void;
            'transition-stopped::last-child'(arg0: string, arg1: boolean): void;
            'transition-stopped::layout-manager'(arg0: string, arg1: boolean): void;
            'transition-stopped::magnification-filter'(arg0: string, arg1: boolean): void;
            'transition-stopped::mapped'(arg0: string, arg1: boolean): void;
            'transition-stopped::margin-bottom'(arg0: string, arg1: boolean): void;
            'transition-stopped::margin-left'(arg0: string, arg1: boolean): void;
            'transition-stopped::margin-right'(arg0: string, arg1: boolean): void;
            'transition-stopped::margin-top'(arg0: string, arg1: boolean): void;
            'transition-stopped::min-height'(arg0: string, arg1: boolean): void;
            'transition-stopped::min-height-set'(arg0: string, arg1: boolean): void;
            'transition-stopped::min-width'(arg0: string, arg1: boolean): void;
            'transition-stopped::min-width-set'(arg0: string, arg1: boolean): void;
            'transition-stopped::minification-filter'(arg0: string, arg1: boolean): void;
            'transition-stopped::name'(arg0: string, arg1: boolean): void;
            'transition-stopped::natural-height'(arg0: string, arg1: boolean): void;
            'transition-stopped::natural-height-set'(arg0: string, arg1: boolean): void;
            'transition-stopped::natural-width'(arg0: string, arg1: boolean): void;
            'transition-stopped::natural-width-set'(arg0: string, arg1: boolean): void;
            'transition-stopped::offscreen-redirect'(arg0: string, arg1: boolean): void;
            'transition-stopped::opacity'(arg0: string, arg1: boolean): void;
            'transition-stopped::pivot-point'(arg0: string, arg1: boolean): void;
            'transition-stopped::pivot-point-z'(arg0: string, arg1: boolean): void;
            'transition-stopped::position'(arg0: string, arg1: boolean): void;
            'transition-stopped::reactive'(arg0: string, arg1: boolean): void;
            'transition-stopped::realized'(arg0: string, arg1: boolean): void;
            'transition-stopped::request-mode'(arg0: string, arg1: boolean): void;
            'transition-stopped::rotation-angle-x'(arg0: string, arg1: boolean): void;
            'transition-stopped::rotation-angle-y'(arg0: string, arg1: boolean): void;
            'transition-stopped::rotation-angle-z'(arg0: string, arg1: boolean): void;
            'transition-stopped::scale-x'(arg0: string, arg1: boolean): void;
            'transition-stopped::scale-y'(arg0: string, arg1: boolean): void;
            'transition-stopped::scale-z'(arg0: string, arg1: boolean): void;
            'transition-stopped::show-on-set-parent'(arg0: string, arg1: boolean): void;
            'transition-stopped::size'(arg0: string, arg1: boolean): void;
            'transition-stopped::text-direction'(arg0: string, arg1: boolean): void;
            'transition-stopped::transform'(arg0: string, arg1: boolean): void;
            'transition-stopped::transform-set'(arg0: string, arg1: boolean): void;
            'transition-stopped::translation-x'(arg0: string, arg1: boolean): void;
            'transition-stopped::translation-y'(arg0: string, arg1: boolean): void;
            'transition-stopped::translation-z'(arg0: string, arg1: boolean): void;
            'transition-stopped::visible'(arg0: string, arg1: boolean): void;
            'transition-stopped::width'(arg0: string, arg1: boolean): void;
            'transition-stopped::x'(arg0: string, arg1: boolean): void;
            'transition-stopped::x-align'(arg0: string, arg1: boolean): void;
            'transition-stopped::x-expand'(arg0: string, arg1: boolean): void;
            'transition-stopped::y'(arg0: string, arg1: boolean): void;
            'transition-stopped::y-align'(arg0: string, arg1: boolean): void;
            'transition-stopped::y-expand'(arg0: string, arg1: boolean): void;
            'transition-stopped::z-position'(arg0: string, arg1: boolean): void;
        }
        // Constructor properties interface
        interface ConstructorProps<A extends LayoutManager = LayoutManager, B extends Content = Content>
            extends GObject.InitiallyUnowned.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Animatable.ConstructorProps {
            /**
             * Object instance's name for assistive technology access.
             */
            accessible_name: string;
            /**
             * Object instance's name for assistive technology access.
             */
            accessibleName: string;
            /**
             * The accessible role of this object
             */
            accessible_role: Atk.Role;
            /**
             * The accessible role of this object
             */
            accessibleRole: Atk.Role;
            /**
             * Adds a #ClutterAction to the actor
             */
            actions: Action;
            /**
             * The allocation for the actor, in pixels
             *
             * This is property is read-only, but you might monitor it to know when an
             * actor moves or resizes
             */
            allocation: ActorBox;
            /**
             * Paints a solid fill of the actor's allocation using the specified
             * color.
             *
             * The [property`Clutter`.Actor:background-color] property is animatable.
             */
            background_color: Cogl.Color;
            /**
             * Paints a solid fill of the actor's allocation using the specified
             * color.
             *
             * The [property`Clutter`.Actor:background-color] property is animatable.
             */
            backgroundColor: Cogl.Color;
            /**
             * Whether the [property`Clutter`.Actor:background-color] property has been set.
             */
            background_color_set: boolean;
            /**
             * Whether the [property`Clutter`.Actor:background-color] property has been set.
             */
            backgroundColorSet: boolean;
            /**
             * Applies a transformation matrix on each child of an actor.
             *
             * Setting this property with a #graphene_matrix_t will set the
             * [property`Clutter`.Actor:child-transform-set] property to %TRUE as a side effect;
             * setting this property with %NULL will set the
             * [property`Clutter`.Actor:child-transform-set] property to %FALSE.
             *
             * The [property`Clutter`.Actor:child-transform] property is animatable.
             */
            child_transform: Graphene.Matrix;
            /**
             * Applies a transformation matrix on each child of an actor.
             *
             * Setting this property with a #graphene_matrix_t will set the
             * [property`Clutter`.Actor:child-transform-set] property to %TRUE as a side effect;
             * setting this property with %NULL will set the
             * [property`Clutter`.Actor:child-transform-set] property to %FALSE.
             *
             * The [property`Clutter`.Actor:child-transform] property is animatable.
             */
            childTransform: Graphene.Matrix;
            /**
             * Whether the [property`Clutter`.Actor:child-transform] property is set.
             */
            child_transform_set: boolean;
            /**
             * Whether the [property`Clutter`.Actor:child-transform] property is set.
             */
            childTransformSet: boolean;
            /**
             * The visible region of the actor, in actor-relative coordinates,
             * expressed as a #graphene_rect_t.
             *
             * Setting this property to %NULL will unset the existing clip.
             *
             * Setting this property will change the [property`Clutter`.Actor:has-clip]
             * property as a side effect.
             */
            clip_rect: Graphene.Rect;
            /**
             * The visible region of the actor, in actor-relative coordinates,
             * expressed as a #graphene_rect_t.
             *
             * Setting this property to %NULL will unset the existing clip.
             *
             * Setting this property will change the [property`Clutter`.Actor:has-clip]
             * property as a side effect.
             */
            clipRect: Graphene.Rect;
            /**
             * Whether the clip region should track the allocated area
             * of the actor.
             *
             * This property is ignored if a clip area has been explicitly
             * set using clutter_actor_set_clip().
             */
            clip_to_allocation: boolean;
            /**
             * Whether the clip region should track the allocated area
             * of the actor.
             *
             * This property is ignored if a clip area has been explicitly
             * set using clutter_actor_set_clip().
             */
            clipToAllocation: boolean;
            /**
             * The #ClutterColorState contains the properties like colorspace for each
             * actors.
             */
            color_state: ColorState;
            /**
             * The #ClutterColorState contains the properties like colorspace for each
             * actors.
             */
            colorState: ColorState;
            /**
             * Adds a #ClutterConstraint to the actor
             */
            constraints: Constraint;
            /**
             * The #ClutterContent implementation that controls the content
             * of the actor.
             */
            content: B;
            /**
             * The bounding box for the #ClutterContent used by the actor.
             *
             * The value of this property is controlled by the [property`Clutter`.Actor:allocation]
             * and [property`Clutter`.Actor:content-gravity] properties of #ClutterActor.
             *
             * The bounding box for the content is guaranteed to never exceed the
             * allocation's of the actor.
             */
            content_box: ActorBox;
            /**
             * The bounding box for the #ClutterContent used by the actor.
             *
             * The value of this property is controlled by the [property`Clutter`.Actor:allocation]
             * and [property`Clutter`.Actor:content-gravity] properties of #ClutterActor.
             *
             * The bounding box for the content is guaranteed to never exceed the
             * allocation's of the actor.
             */
            contentBox: ActorBox;
            /**
             * The alignment that should be honoured by the #ClutterContent
             * set with the [property`Clutter`.Actor:content] property.
             *
             * Changing the value of this property will change the bounding box of
             * the content; you can use the [property`Clutter`.Actor:content-box] property to
             * get the position and size of the content within the actor's
             * allocation.
             *
             * This property is meaningful only for #ClutterContent implementations
             * that have a preferred size, and if the preferred size is smaller than
             * the actor's allocation.
             *
             * The [property`Clutter`.Actor:content-gravity] property is animatable.
             */
            content_gravity: ContentGravity;
            /**
             * The alignment that should be honoured by the #ClutterContent
             * set with the [property`Clutter`.Actor:content] property.
             *
             * Changing the value of this property will change the bounding box of
             * the content; you can use the [property`Clutter`.Actor:content-box] property to
             * get the position and size of the content within the actor's
             * allocation.
             *
             * This property is meaningful only for #ClutterContent implementations
             * that have a preferred size, and if the preferred size is smaller than
             * the actor's allocation.
             *
             * The [property`Clutter`.Actor:content-gravity] property is animatable.
             */
            contentGravity: ContentGravity;
            /**
             * The repeat policy for the actor's [property`Clutter`.Actor:content].
             */
            content_repeat: ContentRepeat;
            /**
             * The repeat policy for the actor's [property`Clutter`.Actor:content].
             */
            contentRepeat: ContentRepeat;
            /**
             * The %ClutterContext of the actor
             */
            context: Context;
            /**
             * Adds #ClutterEffect to the list of effects be applied on a #ClutterActor
             */
            effect: Effect;
            /**
             * The actor's first child.
             */
            first_child: Actor;
            /**
             * The actor's first child.
             */
            firstChild: Actor;
            /**
             * This flag controls whether the [property`Clutter`.Actor:fixed-x] and
             * [property`Clutter`.Actor:fixed-y] properties are used
             */
            fixed_position_set: boolean;
            /**
             * This flag controls whether the [property`Clutter`.Actor:fixed-x] and
             * [property`Clutter`.Actor:fixed-y] properties are used
             */
            fixedPositionSet: boolean;
            /**
             * The fixed X position of the actor in pixels.
             *
             * Writing this property sets [property`Clutter`.Actor:fixed-position-set]
             * property as well, as a side effect
             */
            fixed_x: number;
            /**
             * The fixed X position of the actor in pixels.
             *
             * Writing this property sets [property`Clutter`.Actor:fixed-position-set]
             * property as well, as a side effect
             */
            fixedX: number;
            /**
             * The fixed Y position of the actor in pixels.
             *
             * Writing this property sets the [property`Clutter`.Actor:fixed-position-set]
             * property as well, as a side effect
             */
            fixed_y: number;
            /**
             * The fixed Y position of the actor in pixels.
             *
             * Writing this property sets the [property`Clutter`.Actor:fixed-position-set]
             * property as well, as a side effect
             */
            fixedY: number;
            /**
             * Whether the actor has the [property`Clutter`.Actor:clip-rect] property set or not
             */
            has_clip: boolean;
            /**
             * Whether the actor has the [property`Clutter`.Actor:clip-rect] property set or not
             */
            hasClip: boolean;
            /**
             * Whether the actor contains the pointer of a #ClutterInputDevice
             * or not.
             */
            has_pointer: boolean;
            /**
             * Whether the actor contains the pointer of a #ClutterInputDevice
             * or not.
             */
            hasPointer: boolean;
            /**
             * Height of the actor (in pixels).  If written, forces the minimum and
             * natural size request of the actor to the given height. If read, returns
             * the allocated height if available, otherwise the height request.
             *
             * The [property`Clutter`.Actor:height] property is animatable.
             */
            height: number;
            /**
             * The actor's last child.
             */
            last_child: Actor;
            /**
             * The actor's last child.
             */
            lastChild: Actor;
            /**
             * A delegate object for controlling the layout of the children of
             * an actor.
             */
            layout_manager: A;
            /**
             * A delegate object for controlling the layout of the children of
             * an actor.
             */
            layoutManager: A;
            magnification_filter: ScalingFilter;
            magnificationFilter: ScalingFilter;
            /**
             * Whether the actor is mapped (will be painted when the stage
             * to which it belongs is mapped)
             */
            mapped: boolean;
            /**
             * The margin (in pixels) from the bottom of the actor.
             *
             * This property adds a margin to the actor's preferred size; the margin
             * will be automatically taken into account when allocating the actor.
             *
             * The [property`Clutter`.Actor:margin-bottom] property is animatable.
             */
            margin_bottom: number;
            /**
             * The margin (in pixels) from the bottom of the actor.
             *
             * This property adds a margin to the actor's preferred size; the margin
             * will be automatically taken into account when allocating the actor.
             *
             * The [property`Clutter`.Actor:margin-bottom] property is animatable.
             */
            marginBottom: number;
            /**
             * The margin (in pixels) from the left of the actor.
             *
             * This property adds a margin to the actor's preferred size; the margin
             * will be automatically taken into account when allocating the actor.
             *
             * The [property`Clutter`.Actor:margin-left] property is animatable.
             */
            margin_left: number;
            /**
             * The margin (in pixels) from the left of the actor.
             *
             * This property adds a margin to the actor's preferred size; the margin
             * will be automatically taken into account when allocating the actor.
             *
             * The [property`Clutter`.Actor:margin-left] property is animatable.
             */
            marginLeft: number;
            /**
             * The margin (in pixels) from the right of the actor.
             *
             * This property adds a margin to the actor's preferred size; the margin
             * will be automatically taken into account when allocating the actor.
             *
             * The [property`Clutter`.Actor:margin-right] property is animatable.
             */
            margin_right: number;
            /**
             * The margin (in pixels) from the right of the actor.
             *
             * This property adds a margin to the actor's preferred size; the margin
             * will be automatically taken into account when allocating the actor.
             *
             * The [property`Clutter`.Actor:margin-right] property is animatable.
             */
            marginRight: number;
            /**
             * The margin (in pixels) from the top of the actor.
             *
             * This property adds a margin to the actor's preferred size; the margin
             * will be automatically taken into account when allocating the actor.
             *
             * The [property`Clutter`.Actor:margin-top] property is animatable.
             */
            margin_top: number;
            /**
             * The margin (in pixels) from the top of the actor.
             *
             * This property adds a margin to the actor's preferred size; the margin
             * will be automatically taken into account when allocating the actor.
             *
             * The [property`Clutter`.Actor:margin-top] property is animatable.
             */
            marginTop: number;
            /**
             * A forced minimum height request for the actor, in pixels
             *
             * Writing this property sets the [property`Clutter`.Actor:min-height-set] property
             * as well, as a side effect. This property overrides the usual height
             * request of the actor.
             */
            min_height: number;
            /**
             * A forced minimum height request for the actor, in pixels
             *
             * Writing this property sets the [property`Clutter`.Actor:min-height-set] property
             * as well, as a side effect. This property overrides the usual height
             * request of the actor.
             */
            minHeight: number;
            /**
             * This flag controls whether the [property`Clutter`.Actor:min-height] property
             * is used
             */
            min_height_set: boolean;
            /**
             * This flag controls whether the [property`Clutter`.Actor:min-height] property
             * is used
             */
            minHeightSet: boolean;
            /**
             * A forced minimum width request for the actor, in pixels
             *
             * Writing this property sets the [property`Clutter`.Actor:min-width-set] property
             * as well, as a side effect.
             *
             * This property overrides the usual width request of the actor.
             */
            min_width: number;
            /**
             * A forced minimum width request for the actor, in pixels
             *
             * Writing this property sets the [property`Clutter`.Actor:min-width-set] property
             * as well, as a side effect.
             *
             * This property overrides the usual width request of the actor.
             */
            minWidth: number;
            /**
             * This flag controls whether the [property`Clutter`.Actor:min-width] property
             * is used
             */
            min_width_set: boolean;
            /**
             * This flag controls whether the [property`Clutter`.Actor:min-width] property
             * is used
             */
            minWidthSet: boolean;
            minification_filter: ScalingFilter;
            minificationFilter: ScalingFilter;
            /**
             * The name of the actor
             */
            name: string;
            /**
             * A forced natural height request for the actor, in pixels
             *
             * Writing this property sets the [property`Clutter`.Actor:natural-height-set]
             * property as well, as a side effect. This property overrides the
             * usual height request of the actor
             */
            natural_height: number;
            /**
             * A forced natural height request for the actor, in pixels
             *
             * Writing this property sets the [property`Clutter`.Actor:natural-height-set]
             * property as well, as a side effect. This property overrides the
             * usual height request of the actor
             */
            naturalHeight: number;
            /**
             * This flag controls whether the [property`Clutter`.Actor:natural-height] property
             * is used
             */
            natural_height_set: boolean;
            /**
             * This flag controls whether the [property`Clutter`.Actor:natural-height] property
             * is used
             */
            naturalHeightSet: boolean;
            /**
             * A forced natural width request for the actor, in pixels
             *
             * Writing this property sets the [property`Clutter`.Actor:natural-width-set]
             * property as well, as a side effect. This property overrides the
             * usual width request of the actor
             */
            natural_width: number;
            /**
             * A forced natural width request for the actor, in pixels
             *
             * Writing this property sets the [property`Clutter`.Actor:natural-width-set]
             * property as well, as a side effect. This property overrides the
             * usual width request of the actor
             */
            naturalWidth: number;
            /**
             * This flag controls whether the [property`Clutter`.Actor:natural-width] property
             * is used
             */
            natural_width_set: boolean;
            /**
             * This flag controls whether the [property`Clutter`.Actor:natural-width] property
             * is used
             */
            naturalWidthSet: boolean;
            /**
             * Determines the conditions in which the actor will be redirected
             * to an offscreen framebuffer while being painted. For example this
             * can be used to cache an actor in a framebuffer or for improved
             * handling of transparent actors. See
             * clutter_actor_set_offscreen_redirect() for details.
             */
            offscreen_redirect: OffscreenRedirect;
            /**
             * Determines the conditions in which the actor will be redirected
             * to an offscreen framebuffer while being painted. For example this
             * can be used to cache an actor in a framebuffer or for improved
             * handling of transparent actors. See
             * clutter_actor_set_offscreen_redirect() for details.
             */
            offscreenRedirect: OffscreenRedirect;
            /**
             * Opacity of an actor, between 0 (fully transparent) and
             * 255 (fully opaque)
             *
             * The [property`Clutter`.Actor:opacity] property is animatable.
             */
            opacity: number;
            /**
             * The point around which the scaling and rotation transformations occur.
             *
             * The pivot point is expressed in normalized coordinates space, with (0, 0)
             * being the top left corner of the actor and (1, 1) the bottom right corner
             * of the actor.
             *
             * The default pivot point is located at (0, 0).
             *
             * The [property`Clutter`.Actor:pivot-point] property is animatable.
             */
            pivot_point: Graphene.Point;
            /**
             * The point around which the scaling and rotation transformations occur.
             *
             * The pivot point is expressed in normalized coordinates space, with (0, 0)
             * being the top left corner of the actor and (1, 1) the bottom right corner
             * of the actor.
             *
             * The default pivot point is located at (0, 0).
             *
             * The [property`Clutter`.Actor:pivot-point] property is animatable.
             */
            pivotPoint: Graphene.Point;
            /**
             * The Z component of the [property`Clutter`.Actor:pivot-point], expressed as a value
             * along the Z axis.
             *
             * The [property`Clutter`.Actor:pivot-point-z] property is animatable.
             */
            pivot_point_z: number;
            /**
             * The Z component of the [property`Clutter`.Actor:pivot-point], expressed as a value
             * along the Z axis.
             *
             * The [property`Clutter`.Actor:pivot-point-z] property is animatable.
             */
            pivotPointZ: number;
            /**
             * The position of the origin of the actor.
             *
             * This property is a shorthand for setting and getting the
             * [property`Clutter`.Actor:x] and [property`Clutter`.Actor:y] properties at the same
             * time.
             *
             * The [property`Clutter`.Actor:position] property is animatable.
             */
            position: Graphene.Point;
            /**
             * Whether the actor is reactive to events or not
             *
             * Only reactive actors will emit event-related signals
             */
            reactive: boolean;
            /**
             * Whether the actor has been realized
             */
            realized: boolean;
            /**
             * Request mode for the #ClutterActor. The request mode determines the
             * type of geometry management used by the actor, either height for width
             * (the default) or width for height.
             *
             * For actors implementing height for width, the parent container should get
             * the preferred width first, and then the preferred height for that width.
             *
             * For actors implementing width for height, the parent container should get
             * the preferred height first, and then the preferred width for that height.
             *
             * For instance:
             *
             * ```c
             *   ClutterRequestMode mode;
             *   gfloat natural_width, min_width;
             *   gfloat natural_height, min_height;
             *
             *   mode = clutter_actor_get_request_mode (child);
             *   if (mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
             *     {
             *       clutter_actor_get_preferred_width (child, -1,
             *                                          &min_width,
             *                                          &natural_width);
             *       clutter_actor_get_preferred_height (child, natural_width,
             *                                           &min_height,
             *                                           &natural_height);
             *     }
             *   else if (mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
             *     {
             *       clutter_actor_get_preferred_height (child, -1,
             *                                           &min_height,
             *                                           &natural_height);
             *       clutter_actor_get_preferred_width (child, natural_height,
             *                                          &min_width,
             *                                          &natural_width);
             *     }
             *   else if (mode == CLUTTER_REQUEST_CONTENT_SIZE)
             *     {
             *       ClutterContent *content = clutter_actor_get_content (child);
             *
             *       min_width, min_height = 0;
             *       natural_width = natural_height = 0;
             *
             *       if (content != NULL)
             *         clutter_content_get_preferred_size (content, &natural_width, &natural_height);
             *     }
             * ```
             *
             * will retrieve the minimum and natural width and height depending on the
             * preferred request mode of the #ClutterActor "child".
             *
             * The [method`Clutter`.Actor.get_preferred_size] function will implement this
             * check for you.
             */
            request_mode: RequestMode;
            /**
             * Request mode for the #ClutterActor. The request mode determines the
             * type of geometry management used by the actor, either height for width
             * (the default) or width for height.
             *
             * For actors implementing height for width, the parent container should get
             * the preferred width first, and then the preferred height for that width.
             *
             * For actors implementing width for height, the parent container should get
             * the preferred height first, and then the preferred width for that height.
             *
             * For instance:
             *
             * ```c
             *   ClutterRequestMode mode;
             *   gfloat natural_width, min_width;
             *   gfloat natural_height, min_height;
             *
             *   mode = clutter_actor_get_request_mode (child);
             *   if (mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
             *     {
             *       clutter_actor_get_preferred_width (child, -1,
             *                                          &min_width,
             *                                          &natural_width);
             *       clutter_actor_get_preferred_height (child, natural_width,
             *                                           &min_height,
             *                                           &natural_height);
             *     }
             *   else if (mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
             *     {
             *       clutter_actor_get_preferred_height (child, -1,
             *                                           &min_height,
             *                                           &natural_height);
             *       clutter_actor_get_preferred_width (child, natural_height,
             *                                          &min_width,
             *                                          &natural_width);
             *     }
             *   else if (mode == CLUTTER_REQUEST_CONTENT_SIZE)
             *     {
             *       ClutterContent *content = clutter_actor_get_content (child);
             *
             *       min_width, min_height = 0;
             *       natural_width = natural_height = 0;
             *
             *       if (content != NULL)
             *         clutter_content_get_preferred_size (content, &natural_width, &natural_height);
             *     }
             * ```
             *
             * will retrieve the minimum and natural width and height depending on the
             * preferred request mode of the #ClutterActor "child".
             *
             * The [method`Clutter`.Actor.get_preferred_size] function will implement this
             * check for you.
             */
            requestMode: RequestMode;
            /**
             * The rotation angle on the X axis.
             *
             * The [property`Clutter`.Actor:rotation-angle-x] property is animatable.
             */
            rotation_angle_x: number;
            /**
             * The rotation angle on the X axis.
             *
             * The [property`Clutter`.Actor:rotation-angle-x] property is animatable.
             */
            rotationAngleX: number;
            /**
             * The rotation angle on the Y axis
             *
             * The [property`Clutter`.Actor:rotation-angle-y] property is animatable.
             */
            rotation_angle_y: number;
            /**
             * The rotation angle on the Y axis
             *
             * The [property`Clutter`.Actor:rotation-angle-y] property is animatable.
             */
            rotationAngleY: number;
            /**
             * The rotation angle on the Z axis
             *
             * The [property`Clutter`.Actor:rotation-angle-z] property is animatable.
             */
            rotation_angle_z: number;
            /**
             * The rotation angle on the Z axis
             *
             * The [property`Clutter`.Actor:rotation-angle-z] property is animatable.
             */
            rotationAngleZ: number;
            /**
             * The horizontal scale of the actor.
             *
             * The [property`Clutter`.Actor:scale-x] property is animatable.
             */
            scale_x: number;
            /**
             * The horizontal scale of the actor.
             *
             * The [property`Clutter`.Actor:scale-x] property is animatable.
             */
            scaleX: number;
            /**
             * The vertical scale of the actor.
             *
             * The [property`Clutter`.Actor:scale-y] property is animatable.
             */
            scale_y: number;
            /**
             * The vertical scale of the actor.
             *
             * The [property`Clutter`.Actor:scale-y] property is animatable.
             */
            scaleY: number;
            /**
             * The scale factor of the actor along the Z axis.
             *
             * The [property`Clutter`.Actor:scale-y] property is animatable.
             */
            scale_z: number;
            /**
             * The scale factor of the actor along the Z axis.
             *
             * The [property`Clutter`.Actor:scale-y] property is animatable.
             */
            scaleZ: number;
            /**
             * If %TRUE, the actor is automatically shown when parented.
             *
             * Calling clutter_actor_hide() on an actor which has not been
             * parented will set this property to %FALSE as a side effect.
             */
            show_on_set_parent: boolean;
            /**
             * If %TRUE, the actor is automatically shown when parented.
             *
             * Calling clutter_actor_hide() on an actor which has not been
             * parented will set this property to %FALSE as a side effect.
             */
            showOnSetParent: boolean;
            /**
             * The size of the actor.
             *
             * This property is a shorthand for setting and getting the
             * [property`Clutter`.Actor:width] and [property`Clutter`.Actor:height]
             * at the same time.
             *
             * The [property`Clutter`.Actor:size] property is animatable.
             */
            size: Graphene.Size;
            /**
             * The direction of the text inside a #ClutterActor.
             */
            text_direction: TextDirection;
            /**
             * The direction of the text inside a #ClutterActor.
             */
            textDirection: TextDirection;
            /**
             * Overrides the transformations of a #ClutterActor with a custom
             * matrix.
             *
             * The matrix specified by the [property`Clutter`.Actor:transform] property is
             * applied to the actor and its children relative to the actor's
             * [property`Clutter`.Actor:allocation] and
             * [property`Clutter`.Actor:pivot-point].
             *
             * Application code should rarely need to use this function directly.
             *
             * Setting this property with a #graphene_matrix_t will set the
             * [property`Clutter`.Actor:transform-set] property to %TRUE as a side effect;
             * setting this property with %NULL will set the
             * [property`Clutter`.Actor:transform-set] property to %FALSE.
             *
             * The [property`Clutter`.Actor:transform] property is animatable.
             */
            transform: Graphene.Matrix;
            /**
             * Whether the [property`Clutter`.Actor:transform] property is set.
             */
            transform_set: boolean;
            /**
             * Whether the [property`Clutter`.Actor:transform] property is set.
             */
            transformSet: boolean;
            /**
             * An additional translation applied along the X axis, relative
             * to the actor's [property`Clutter`.Actor:pivot-point].
             *
             * The [property`Clutter`.Actor:translation-x] property is animatable.
             */
            translation_x: number;
            /**
             * An additional translation applied along the X axis, relative
             * to the actor's [property`Clutter`.Actor:pivot-point].
             *
             * The [property`Clutter`.Actor:translation-x] property is animatable.
             */
            translationX: number;
            /**
             * An additional translation applied along the Y axis, relative
             * to the actor's [property`Clutter`.Actor:pivot-point].
             *
             * The [property`Clutter`.Actor:translation-y] property is animatable.
             */
            translation_y: number;
            /**
             * An additional translation applied along the Y axis, relative
             * to the actor's [property`Clutter`.Actor:pivot-point].
             *
             * The [property`Clutter`.Actor:translation-y] property is animatable.
             */
            translationY: number;
            /**
             * An additional translation applied along the Z axis, relative
             * to the actor's [property`Clutter`.Actor:pivot-point].
             *
             * The [property`Clutter`.Actor:translation-z] property is animatable.
             */
            translation_z: number;
            /**
             * An additional translation applied along the Z axis, relative
             * to the actor's [property`Clutter`.Actor:pivot-point].
             *
             * The [property`Clutter`.Actor:translation-z] property is animatable.
             */
            translationZ: number;
            /**
             * Whether the actor is set to be visible or not
             *
             * See also [property`Clutter`.Actor:mapped]
             */
            visible: boolean;
            /**
             * Width of the actor (in pixels). If written, forces the minimum and
             * natural size request of the actor to the given width. If read, returns
             * the allocated width if available, otherwise the width request.
             *
             * The [property`Clutter`.Actor:width] property is animatable.
             */
            width: number;
            /**
             * X coordinate of the actor in pixels. If written, forces a fixed
             * position for the actor. If read, returns the fixed position if any,
             * otherwise the allocation if available, otherwise 0.
             *
             * The [property`Clutter`.Actor:x] property is animatable.
             */
            x: number;
            /**
             * The alignment of an actor on the X axis, if the actor has been given
             * extra space for its allocation. See also the [property`Clutter`.Actor:x-expand]
             * property.
             */
            x_align: ActorAlign;
            /**
             * The alignment of an actor on the X axis, if the actor has been given
             * extra space for its allocation. See also the [property`Clutter`.Actor:x-expand]
             * property.
             */
            xAlign: ActorAlign;
            /**
             * Whether a layout manager should assign more space to the actor on
             * the X axis.
             */
            x_expand: boolean;
            /**
             * Whether a layout manager should assign more space to the actor on
             * the X axis.
             */
            xExpand: boolean;
            /**
             * Y coordinate of the actor in pixels. If written, forces a fixed
             * position for the actor.  If read, returns the fixed position if
             * any, otherwise the allocation if available, otherwise 0.
             *
             * The [property`Clutter`.Actor:y] property is animatable.
             */
            y: number;
            /**
             * The alignment of an actor on the Y axis, if the actor has been given
             * extra space for its allocation.
             */
            y_align: ActorAlign;
            /**
             * The alignment of an actor on the Y axis, if the actor has been given
             * extra space for its allocation.
             */
            yAlign: ActorAlign;
            /**
             * Whether a layout manager should assign more space to the actor on
             * the Y axis.
             */
            y_expand: boolean;
            /**
             * Whether a layout manager should assign more space to the actor on
             * the Y axis.
             */
            yExpand: boolean;
            /**
             * The actor's position on the Z axis, relative to the parent's
             * transformations.
             *
             * Positive values will bring the actor's position nearer to the user,
             * whereas negative values will bring the actor's position farther from
             * the user.
             *
             * The [property`Clutter`.Actor:z-position] does not affect the paint or allocation
             * order.
             *
             * The [property`Clutter`.Actor:z-position] property is animatable.
             */
            z_position: number;
            /**
             * The actor's position on the Z axis, relative to the parent's
             * transformations.
             *
             * Positive values will bring the actor's position nearer to the user,
             * whereas negative values will bring the actor's position farther from
             * the user.
             *
             * The [property`Clutter`.Actor:z-position] does not affect the paint or allocation
             * order.
             *
             * The [property`Clutter`.Actor:z-position] property is animatable.
             */
            zPosition: number;
        }
    }
    type Actor<A extends LayoutManager = LayoutManager, B extends Content = Content> = (typeof classes.Actor<
        A,
        B
    >)['prototype'];
    const Actor: typeof classes.Actor &
        (new <A extends LayoutManager = LayoutManager, B extends Content = Content, Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Actor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Actor.SignalSignatures> & classes.Actor<A, B>);
    namespace ActorAccessible {
        // Signal signatures
        interface SignalSignatures extends Atk.GObjectAccessible.SignalSignatures {
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
        interface ConstructorProps extends Atk.GObjectAccessible.ConstructorProps, Atk.Component.ConstructorProps {}
    }
    type ActorAccessible = (typeof classes.ActorAccessible)['prototype'];
    const ActorAccessible: typeof classes.ActorAccessible &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.ActorAccessible.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ActorAccessible.SignalSignatures> & classes.ActorAccessible);
    namespace ActorMeta {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            /**
             * The #ClutterActor attached to the #ClutterActorMeta instance
             */
            actor: Actor;
            /**
             * Whether or not the #ClutterActorMeta is enabled
             */
            enabled: boolean;
            /**
             * The unique name to access the #ClutterActorMeta
             */
            name: string;
        }
    }
    type ActorMeta = (typeof classes.ActorMeta)['prototype'];
    const ActorMeta: typeof classes.ActorMeta &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.ActorMeta.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ActorMeta.SignalSignatures> & classes.ActorMeta);
    namespace ActorNode {
        // Signal signatures
        interface SignalSignatures extends PaintNode.SignalSignatures {}
    }
    class ActorNode extends PaintNode {
        static '$gtype': GObject.GType<ActorNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(actor: Actor, opacity: number): ActorNode;
        // Signals
        connect<K extends keyof Clutter.ActorNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ActorNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ActorNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ActorNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ActorNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ActorNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace AlignConstraint {
        // Signal signatures
        interface SignalSignatures extends Constraint.SignalSignatures {
            'notify::align-axis'(pspec: GObject.ParamSpec): void;
            'notify::factor'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::source'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Constraint.ConstructorProps {
            /**
             * The axis to be used to compute the alignment
             */
            align_axis: AlignAxis;
            /**
             * The axis to be used to compute the alignment
             */
            alignAxis: AlignAxis;
            /**
             * The alignment factor, as a normalized value between 0.0 and 1.0
             *
             * The factor depends on the #ClutterAlignConstraint:align-axis property:
             * with an align-axis value of %CLUTTER_ALIGN_X_AXIS, 0.0 means left and
             * 1.0 means right; with a value of %CLUTTER_ALIGN_Y_AXIS, 0.0 means top
             * and 1.0 means bottom.
             */
            factor: number;
            /**
             * The pivot point used by the constraint. The pivot point is the
             * point in the constraint actor around which the aligning is applied,
             * with (0, 0) being the top left corner of the actor and (1, 1) the
             * bottom right corner of the actor.
             *
             * For example, setting the pivot point to (0.5, 0.5) and using a factor
             * of 1 for both axes will align the actors horizontal and vertical
             * center point with the bottom right corner of the source actor.
             *
             * By default, the pivot point is set to (-1, -1), which means it's not
             * used and the constrained actor will be aligned to always stay inside
             * the source actor.
             */
            pivot_point: Graphene.Point;
            /**
             * The pivot point used by the constraint. The pivot point is the
             * point in the constraint actor around which the aligning is applied,
             * with (0, 0) being the top left corner of the actor and (1, 1) the
             * bottom right corner of the actor.
             *
             * For example, setting the pivot point to (0.5, 0.5) and using a factor
             * of 1 for both axes will align the actors horizontal and vertical
             * center point with the bottom right corner of the source actor.
             *
             * By default, the pivot point is set to (-1, -1), which means it's not
             * used and the constrained actor will be aligned to always stay inside
             * the source actor.
             */
            pivotPoint: Graphene.Point;
            /**
             * The #ClutterActor used as the source for the alignment.
             *
             * The #ClutterActor must not be a child or a grandchild of the actor
             * using the constraint.
             */
            source: Actor;
        }
    }
    type AlignConstraint = (typeof classes.AlignConstraint)['prototype'];
    const AlignConstraint: typeof classes.AlignConstraint &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.AlignConstraint.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, AlignConstraint.SignalSignatures> & classes.AlignConstraint);
    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'font-changed'(): void;
            'resolution-changed'(): void;
            'settings-changed'(): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
        }
    }
    type Backend = (typeof classes.Backend)['prototype'];
    const Backend: typeof classes.Backend &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Backend.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Backend.SignalSignatures> & classes.Backend);
    namespace BinLayout {
        // Signal signatures
        interface SignalSignatures extends LayoutManager.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends LayoutManager.ConstructorProps {}
    }
    type BinLayout = (typeof classes.BinLayout)['prototype'];
    const BinLayout: typeof classes.BinLayout &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.BinLayout.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BinLayout.SignalSignatures> & classes.BinLayout);
    namespace BindConstraint {
        // Signal signatures
        interface SignalSignatures extends Constraint.SignalSignatures {
            'notify::coordinate'(pspec: GObject.ParamSpec): void;
            'notify::offset'(pspec: GObject.ParamSpec): void;
            'notify::source'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Constraint.ConstructorProps {
            /**
             * The coordinate to be bound
             */
            coordinate: BindCoordinate;
            /**
             * The offset, in pixels, to be applied to the binding
             */
            offset: number;
            /**
             * The #ClutterActor used as the source for the binding.
             *
             * The #ClutterActor must not be contained inside the actor associated
             * to the constraint.
             */
            source: Actor;
        }
    }
    type BindConstraint = (typeof classes.BindConstraint)['prototype'];
    const BindConstraint: typeof classes.BindConstraint &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.BindConstraint.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BindConstraint.SignalSignatures> & classes.BindConstraint);
    namespace BindingPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The unique name of the #ClutterBindingPool.
             */
            name: string;
        }
    }
    type BindingPool = (typeof classes.BindingPool)['prototype'];
    const BindingPool: typeof classes.BindingPool &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.BindingPool.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BindingPool.SignalSignatures> & classes.BindingPool);
    namespace BlitNode {
        // Signal signatures
        interface SignalSignatures extends PaintNode.SignalSignatures {}
    }
    class BlitNode extends PaintNode {
        static '$gtype': GObject.GType<BlitNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(src: Cogl.Framebuffer): BlitNode;
        // Signals
        connect<K extends keyof Clutter.BlitNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BlitNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.BlitNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BlitNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.BlitNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.BlitNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Adds a new blit rectangle to the stack of rectangles. All the
         * constraints of [method`Cogl`.Framebuffer.blit] apply here.
         *
         * @param src_x Source x position
         * @param src_y Source y position
         * @param dst_x Destination x position
         * @param dst_y Destination y position
         * @param width Width of region to copy
         * @param height Height of region to copy
         */
        add_blit_rectangle(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            width: number,
            height: number,
        ): void;
    }
    namespace BlurEffect {
        // Signal signatures
        interface SignalSignatures extends OffscreenEffect.SignalSignatures {
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends OffscreenEffect.ConstructorProps {}
    }
    type BlurEffect = (typeof classes.BlurEffect)['prototype'];
    const BlurEffect: typeof classes.BlurEffect &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.BlurEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BlurEffect.SignalSignatures> & classes.BlurEffect);
    namespace BlurNode {
        // Signal signatures
        interface SignalSignatures extends LayerNode.SignalSignatures {}
    }
    class BlurNode extends LayerNode {
        static '$gtype': GObject.GType<BlurNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(width: number, height: number, radius: number): BlurNode;
        // Signals
        connect<K extends keyof Clutter.BlurNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BlurNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.BlurNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BlurNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.BlurNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.BlurNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace BoxLayout {
        // Signal signatures
        interface SignalSignatures extends LayoutManager.SignalSignatures {
            'notify::homogeneous'(pspec: GObject.ParamSpec): void;
            'notify::orientation'(pspec: GObject.ParamSpec): void;
            'notify::spacing'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends LayoutManager.ConstructorProps {
            /**
             * Whether the #ClutterBoxLayout should arrange its children
             * homogeneously, i.e. all children get the same size
             */
            homogeneous: boolean;
            /**
             * The orientation of the #ClutterBoxLayout, either horizontal
             * or vertical
             */
            orientation: Orientation;
            /**
             * The spacing between children of the #ClutterBoxLayout, in pixels
             */
            spacing: number;
        }
    }
    type BoxLayout = (typeof classes.BoxLayout)['prototype'];
    const BoxLayout: typeof classes.BoxLayout &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.BoxLayout.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BoxLayout.SignalSignatures> & classes.BoxLayout);
    namespace BrightnessContrastEffect {
        // Signal signatures
        interface SignalSignatures extends OffscreenEffect.SignalSignatures {
            'notify::brightness'(pspec: GObject.ParamSpec): void;
            'notify::contrast'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            /**
             * The brightness change to apply to the effect.
             *
             * This property uses a #CoglColor to represent the changes to each
             * color channel. The range is [ 0, 255 ], with 127 as the value used
             * to indicate no change; values smaller than 127 indicate a decrease
             * in brightness, and values larger than 127 indicate an increase in
             * brightness.
             */
            brightness: Cogl.Color;
            /**
             * The contrast change to apply to the effect.
             *
             * This property uses a #CoglColor to represent the changes to each
             * color channel. The range is [ 0, 255 ], with 127 as the value used
             * to indicate no change; values smaller than 127 indicate a decrease
             * in contrast, and values larger than 127 indicate an increase in
             * contrast.
             */
            contrast: Cogl.Color;
        }
    }
    type BrightnessContrastEffect = (typeof classes.BrightnessContrastEffect)['prototype'];
    const BrightnessContrastEffect: typeof classes.BrightnessContrastEffect &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.BrightnessContrastEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BrightnessContrastEffect.SignalSignatures> &
            classes.BrightnessContrastEffect);
    namespace ClickGesture {
        // Signal signatures
        interface SignalSignatures extends PressGesture.SignalSignatures {
            'notify::n-clicks-required'(pspec: GObject.ParamSpec): void;
            'notify::recognize-on-press'(pspec: GObject.ParamSpec): void;
            'notify::cancel-threshold'(pspec: GObject.ParamSpec): void;
            'notify::long-press-duration-ms'(pspec: GObject.ParamSpec): void;
            'notify::pressed'(pspec: GObject.ParamSpec): void;
            'notify::required-button'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends PressGesture.ConstructorProps {
            /**
             * The number of clicks required for the gesture to recognize, this can
             * be used to implement double-click gestures.
             *
             * Note that for single clicks, the gesture will recognize on button-release,
             * while for double or more clicks, the gesture will recognize on
             * button-press.
             */
            n_clicks_required: number;
            /**
             * The number of clicks required for the gesture to recognize, this can
             * be used to implement double-click gestures.
             *
             * Note that for single clicks, the gesture will recognize on button-release,
             * while for double or more clicks, the gesture will recognize on
             * button-press.
             */
            nClicksRequired: number;
            /**
             * Set this to %TRUE to make the click gesture recognize on
             * button-press/touch-begin rather than on button-release/touch-end events.
             *
             * Defaults to %FALSE.
             */
            recognize_on_press: boolean;
            /**
             * Set this to %TRUE to make the click gesture recognize on
             * button-press/touch-begin rather than on button-release/touch-end events.
             *
             * Defaults to %FALSE.
             */
            recognizeOnPress: boolean;
        }
    }
    type ClickGesture = (typeof classes.ClickGesture)['prototype'];
    const ClickGesture: typeof classes.ClickGesture &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.ClickGesture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ClickGesture.SignalSignatures> & classes.ClickGesture);
    namespace ClipNode {
        // Signal signatures
        interface SignalSignatures extends PaintNode.SignalSignatures {}
    }
    class ClipNode extends PaintNode {
        static '$gtype': GObject.GType<ClipNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(): ClipNode;
        // Signals
        connect<K extends keyof Clutter.ClipNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ClipNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ClipNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ClipNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ClipNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ClipNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Clone {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            'notify::source'(pspec: GObject.ParamSpec): void;
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
        interface ConstructorProps<A extends Actor = Actor>
            extends Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Animatable.ConstructorProps {
            /**
             * This property specifies the source actor being cloned.
             */
            source: A;
        }
    }
    type Clone<A extends Actor = Actor> = (typeof classes.Clone<A>)['prototype'];
    const Clone: typeof classes.Clone &
        (new <A extends Actor = Actor, Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Clone.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Clone.SignalSignatures> & classes.Clone<A>);
    namespace ColorManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The associated ClutterContext.
             */
            context: Context;
        }
    }
    type ColorManager = (typeof classes.ColorManager)['prototype'];
    const ColorManager: typeof classes.ColorManager &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.ColorManager.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ColorManager.SignalSignatures> & classes.ColorManager);
    namespace ColorNode {
        // Signal signatures
        interface SignalSignatures extends PipelineNode.SignalSignatures {}
    }
    class ColorNode extends PipelineNode {
        static '$gtype': GObject.GType<ColorNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(color?: Cogl.Color | null): ColorNode;
        // Conflicted with Clutter.PipelineNode.new
        static new(...args: never[]): any;
        // Signals
        connect<K extends keyof Clutter.ColorNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ColorNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ColorNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ColorNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ColorState {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The associated ClutterContext.
             */
            context: Context;
        }
    }
    type ColorState = (typeof classes.ColorState)['prototype'];
    const ColorState: typeof classes.ColorState &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.ColorState.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ColorState.SignalSignatures> & classes.ColorState);
    namespace ColorStateIcc {
        // Signal signatures
        interface SignalSignatures extends ColorState.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends ColorState.ConstructorProps {}
    }
    type ColorStateIcc = (typeof classes.ColorStateIcc)['prototype'];
    const ColorStateIcc: typeof classes.ColorStateIcc &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.ColorStateIcc.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ColorStateIcc.SignalSignatures> & classes.ColorStateIcc);
    namespace ColorStateParams {
        // Signal signatures
        interface SignalSignatures extends ColorState.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends ColorState.ConstructorProps {}
    }
    type ColorStateParams = (typeof classes.ColorStateParams)['prototype'];
    const ColorStateParams: typeof classes.ColorStateParams &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.ColorStateParams.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ColorStateParams.SignalSignatures> & classes.ColorStateParams);
    namespace ColorizeEffect {
        // Signal signatures
        interface SignalSignatures extends OffscreenEffect.SignalSignatures {
            'notify::tint'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            /**
             * The tint to apply to the actor
             */
            tint: Cogl.Color;
        }
    }
    type ColorizeEffect = (typeof classes.ColorizeEffect)['prototype'];
    const ColorizeEffect: typeof classes.ColorizeEffect &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.ColorizeEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ColorizeEffect.SignalSignatures> & classes.ColorizeEffect);
    namespace Constraint {
        // Signal signatures
        interface SignalSignatures extends ActorMeta.SignalSignatures {
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends ActorMeta.ConstructorProps {}
    }
    type Constraint = (typeof classes.Constraint)['prototype'];
    const Constraint: typeof classes.Constraint &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Constraint.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Constraint.SignalSignatures> & classes.Constraint);
    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Context = (typeof classes.Context)['prototype'];
    const Context: typeof classes.Context &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Context.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Context.SignalSignatures> & classes.Context);
    namespace DeformEffect {
        // Signal signatures
        interface SignalSignatures extends OffscreenEffect.SignalSignatures {
            'notify::back-pipeline'(pspec: GObject.ParamSpec): void;
            'notify::x-tiles'(pspec: GObject.ParamSpec): void;
            'notify::y-tiles'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            /**
             * A pipeline to be used when painting the back of the actor
             * to which this effect has been applied
             *
             * By default, no pipeline will be used
             */
            back_pipeline: Cogl.Pipeline;
            /**
             * A pipeline to be used when painting the back of the actor
             * to which this effect has been applied
             *
             * By default, no pipeline will be used
             */
            backPipeline: Cogl.Pipeline;
            /**
             * The number of horizontal tiles. The bigger the number, the
             * smaller the tiles
             */
            x_tiles: number;
            /**
             * The number of horizontal tiles. The bigger the number, the
             * smaller the tiles
             */
            xTiles: number;
            /**
             * The number of vertical tiles. The bigger the number, the
             * smaller the tiles
             */
            y_tiles: number;
            /**
             * The number of vertical tiles. The bigger the number, the
             * smaller the tiles
             */
            yTiles: number;
        }
    }
    type DeformEffect = (typeof classes.DeformEffect)['prototype'];
    const DeformEffect: typeof classes.DeformEffect &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.DeformEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeformEffect.SignalSignatures> & classes.DeformEffect);
    namespace DesaturateEffect {
        // Signal signatures
        interface SignalSignatures extends OffscreenEffect.SignalSignatures {
            'notify::factor'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            /**
             * The desaturation factor, between 0.0 (no desaturation) and 1.0 (full
             * desaturation).
             */
            factor: number;
        }
    }
    type DesaturateEffect = (typeof classes.DesaturateEffect)['prototype'];
    const DesaturateEffect: typeof classes.DesaturateEffect &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.DesaturateEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DesaturateEffect.SignalSignatures> & classes.DesaturateEffect);
    namespace Effect {
        // Signal signatures
        interface SignalSignatures extends ActorMeta.SignalSignatures {
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends ActorMeta.ConstructorProps {}
    }
    type Effect = (typeof classes.Effect)['prototype'];
    const Effect: typeof classes.Effect &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Effect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Effect.SignalSignatures> & classes.Effect);
    namespace FixedLayout {
        // Signal signatures
        interface SignalSignatures extends LayoutManager.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends LayoutManager.ConstructorProps {}
    }
    type FixedLayout = (typeof classes.FixedLayout)['prototype'];
    const FixedLayout: typeof classes.FixedLayout &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.FixedLayout.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FixedLayout.SignalSignatures> & classes.FixedLayout);
    namespace FlowLayout {
        // Signal signatures
        interface SignalSignatures extends LayoutManager.SignalSignatures {
            'notify::column-spacing'(pspec: GObject.ParamSpec): void;
            'notify::homogeneous'(pspec: GObject.ParamSpec): void;
            'notify::max-column-width'(pspec: GObject.ParamSpec): void;
            'notify::max-row-height'(pspec: GObject.ParamSpec): void;
            'notify::min-column-width'(pspec: GObject.ParamSpec): void;
            'notify::min-row-height'(pspec: GObject.ParamSpec): void;
            'notify::orientation'(pspec: GObject.ParamSpec): void;
            'notify::row-spacing'(pspec: GObject.ParamSpec): void;
            'notify::snap-to-grid'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends LayoutManager.ConstructorProps {
            /**
             * The spacing between columns, in pixels; the value of this
             * property is honoured by horizontal non-overflowing layouts
             * and by vertical overflowing layouts
             */
            column_spacing: number;
            /**
             * The spacing between columns, in pixels; the value of this
             * property is honoured by horizontal non-overflowing layouts
             * and by vertical overflowing layouts
             */
            columnSpacing: number;
            /**
             * Whether each child inside the #ClutterFlowLayout should receive
             * the same allocation
             */
            homogeneous: boolean;
            /**
             * Maximum width for each column in the layout, in pixels. If
             * set to -1 the width will be the maximum child width
             */
            max_column_width: number;
            /**
             * Maximum width for each column in the layout, in pixels. If
             * set to -1 the width will be the maximum child width
             */
            maxColumnWidth: number;
            /**
             * Maximum height for each row in the layout, in pixels. If
             * set to -1 the width will be the maximum child height
             */
            max_row_height: number;
            /**
             * Maximum height for each row in the layout, in pixels. If
             * set to -1 the width will be the maximum child height
             */
            maxRowHeight: number;
            /**
             * Minimum width for each column in the layout, in pixels
             */
            min_column_width: number;
            /**
             * Minimum width for each column in the layout, in pixels
             */
            minColumnWidth: number;
            /**
             * Minimum height for each row in the layout, in pixels
             */
            min_row_height: number;
            /**
             * Minimum height for each row in the layout, in pixels
             */
            minRowHeight: number;
            /**
             * The orientation of the #ClutterFlowLayout. The children
             * of the layout will be laid out following the orientation.
             *
             * This property also controls the overflowing directions
             */
            orientation: Orientation;
            /**
             * The spacing between rows, in pixels; the value of this
             * property is honoured by vertical non-overflowing layouts and
             * by horizontal overflowing layouts
             */
            row_spacing: number;
            /**
             * The spacing between rows, in pixels; the value of this
             * property is honoured by vertical non-overflowing layouts and
             * by horizontal overflowing layouts
             */
            rowSpacing: number;
            /**
             * Whether the #ClutterFlowLayout should arrange its children
             * on a grid
             */
            snap_to_grid: boolean;
            /**
             * Whether the #ClutterFlowLayout should arrange its children
             * on a grid
             */
            snapToGrid: boolean;
        }
    }
    type FlowLayout = (typeof classes.FlowLayout)['prototype'];
    const FlowLayout: typeof classes.FlowLayout &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.FlowLayout.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FlowLayout.SignalSignatures> & classes.FlowLayout);
    namespace Focus {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::stage'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            stage: Stage;
        }
    }
    type Focus = (typeof classes.Focus)['prototype'];
    const Focus: typeof classes.Focus &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Focus.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Focus.SignalSignatures> & classes.Focus);
    namespace FrameClock {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            destroy(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type FrameClock = (typeof classes.FrameClock)['prototype'];
    const FrameClock: typeof classes.FrameClock &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.FrameClock.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FrameClock.SignalSignatures> & classes.FrameClock);
    namespace FrameClockDriver {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type FrameClockDriver = (typeof classes.FrameClockDriver)['prototype'];
    const FrameClockDriver: typeof classes.FrameClockDriver &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.FrameClockDriver.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FrameClockDriver.SignalSignatures> & classes.FrameClockDriver);
    namespace Gesture {
        // Signal signatures
        interface SignalSignatures extends Action.SignalSignatures {
            cancel(): void;
            end(): void;
            'may-recognize'(): boolean | void;
            recognize(): void;
            'should-handle-sequence'(arg0: Event): boolean | void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Action.ConstructorProps {
            /**
             * The current state of the gesture.
             */
            state: GestureState;
        }
    }
    type Gesture = (typeof classes.Gesture)['prototype'];
    const Gesture: typeof classes.Gesture &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Gesture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Gesture.SignalSignatures> & classes.Gesture);
    namespace Grab {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::revoked'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            revoked: boolean;
        }
    }
    type Grab = (typeof classes.Grab)['prototype'];
    const Grab: typeof classes.Grab &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Grab.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Grab.SignalSignatures> & classes.Grab);
    namespace GridLayout {
        // Signal signatures
        interface SignalSignatures extends LayoutManager.SignalSignatures {
            'notify::column-homogeneous'(pspec: GObject.ParamSpec): void;
            'notify::column-spacing'(pspec: GObject.ParamSpec): void;
            'notify::orientation'(pspec: GObject.ParamSpec): void;
            'notify::row-homogeneous'(pspec: GObject.ParamSpec): void;
            'notify::row-spacing'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends LayoutManager.ConstructorProps {
            /**
             * Whether all columns of the layout should have the same width
             */
            column_homogeneous: boolean;
            /**
             * Whether all columns of the layout should have the same width
             */
            columnHomogeneous: boolean;
            /**
             * The amount of space in pixels between two consecutive columns
             */
            column_spacing: number;
            /**
             * The amount of space in pixels between two consecutive columns
             */
            columnSpacing: number;
            /**
             * The orientation of the layout, either horizontal or vertical
             */
            orientation: Orientation;
            /**
             * Whether all rows of the layout should have the same height
             */
            row_homogeneous: boolean;
            /**
             * Whether all rows of the layout should have the same height
             */
            rowHomogeneous: boolean;
            /**
             * The amount of space in pixels between two consecutive rows
             */
            row_spacing: number;
            /**
             * The amount of space in pixels between two consecutive rows
             */
            rowSpacing: number;
        }
    }
    type GridLayout = (typeof classes.GridLayout)['prototype'];
    const GridLayout: typeof classes.GridLayout &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.GridLayout.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, GridLayout.SignalSignatures> & classes.GridLayout);
    namespace InputDevice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::bus-type'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-mode'(pspec: GObject.ParamSpec): void;
            'notify::device-node'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::has-cursor'(pspec: GObject.ParamSpec): void;
            'notify::n-buttons'(pspec: GObject.ParamSpec): void;
            'notify::n-dials'(pspec: GObject.ParamSpec): void;
            'notify::n-mode-groups'(pspec: GObject.ParamSpec): void;
            'notify::n-rings'(pspec: GObject.ParamSpec): void;
            'notify::n-strips'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::product-id'(pspec: GObject.ParamSpec): void;
            'notify::seat'(pspec: GObject.ParamSpec): void;
            'notify::vendor-id'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * Bus type of this device.
             */
            bus_type: number;
            /**
             * Bus type of this device.
             */
            busType: number;
            /**
             * The capabilities of the device
             */
            capabilities: InputCapabilities;
            device_mode: InputMode;
            deviceMode: InputMode;
            device_node: string;
            deviceNode: string;
            /**
             * The type of the device
             */
            device_type: InputDeviceType;
            /**
             * The type of the device
             */
            deviceType: InputDeviceType;
            /**
             * Whether the device has an on screen cursor following its movement.
             */
            has_cursor: boolean;
            /**
             * Whether the device has an on screen cursor following its movement.
             */
            hasCursor: boolean;
            n_buttons: number;
            nButtons: number;
            n_dials: number;
            nDials: number;
            n_mode_groups: number;
            nModeGroups: number;
            n_rings: number;
            nRings: number;
            n_strips: number;
            nStrips: number;
            /**
             * The name of the device
             */
            name: string;
            /**
             * Product ID of this device.
             */
            product_id: number;
            /**
             * Product ID of this device.
             */
            productId: number;
            /**
             * The #ClutterSeat instance which owns the device
             */
            seat: Seat;
            /**
             * Vendor ID of this device.
             */
            vendor_id: number;
            /**
             * Vendor ID of this device.
             */
            vendorId: number;
        }
    }
    type InputDevice = (typeof classes.InputDevice)['prototype'];
    const InputDevice: typeof classes.InputDevice &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.InputDevice.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, InputDevice.SignalSignatures> & classes.InputDevice);
    namespace InputDeviceTool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::axes'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::serial'(pspec: GObject.ParamSpec): void;
            'notify::type'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            axes: InputAxisFlags;
            id: number;
            serial: number;
            type: InputDeviceToolType;
        }
    }
    type InputDeviceTool = (typeof classes.InputDeviceTool)['prototype'];
    const InputDeviceTool: typeof classes.InputDeviceTool &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.InputDeviceTool.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, InputDeviceTool.SignalSignatures> & classes.InputDeviceTool);
    namespace InputFocus {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type InputFocus = (typeof classes.InputFocus)['prototype'];
    const InputFocus: typeof classes.InputFocus &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.InputFocus.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, InputFocus.SignalSignatures> & classes.InputFocus);
    namespace InputMethod {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            commit(arg0: string): void;
            'cursor-location-changed'(arg0: Graphene.Rect): void;
            'delete-surrounding'(arg0: number, arg1: number): void;
            'input-panel-state'(arg0: InputPanelState): void;
            'request-surrounding'(): void;
            'notify::can-show-preedit'(pspec: GObject.ParamSpec): void;
            'notify::content-hints'(pspec: GObject.ParamSpec): void;
            'notify::content-purpose'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            can_show_preedit: boolean;
            canShowPreedit: boolean;
            content_hints: InputContentHintFlags;
            contentHints: InputContentHintFlags;
            content_purpose: InputContentPurpose;
            contentPurpose: InputContentPurpose;
        }
    }
    type InputMethod = (typeof classes.InputMethod)['prototype'];
    const InputMethod: typeof classes.InputMethod &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.InputMethod.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, InputMethod.SignalSignatures> & classes.InputMethod);
    namespace Interval {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'notify::final'(pspec: GObject.ParamSpec): void;
            'notify::initial'(pspec: GObject.ParamSpec): void;
            'notify::value-type'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            /**
             * The final value of the interval.
             */
            final: GObject.Value;
            /**
             * The initial value of the interval.
             */
            initial: GObject.Value;
            /**
             * The type of the values in the interval.
             */
            value_type: GObject.GType;
            /**
             * The type of the values in the interval.
             */
            valueType: GObject.GType;
        }
    }
    type Interval = (typeof classes.Interval)['prototype'];
    const Interval: typeof classes.Interval &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Interval.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Interval.SignalSignatures> & classes.Interval);
    namespace KeyFocus {
        // Signal signatures
        interface SignalSignatures extends Focus.SignalSignatures {
            'notify::stage'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Focus.ConstructorProps {}
    }
    type KeyFocus = (typeof classes.KeyFocus)['prototype'];
    const KeyFocus: typeof classes.KeyFocus &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.KeyFocus.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, KeyFocus.SignalSignatures> & classes.KeyFocus);
    namespace KeyframeTransition {
        // Signal signatures
        interface SignalSignatures extends PropertyTransition.SignalSignatures {
            'notify::property-name'(pspec: GObject.ParamSpec): void;
            'notify::animatable'(pspec: GObject.ParamSpec): void;
            'notify::interval'(pspec: GObject.ParamSpec): void;
            'notify::remove-on-complete'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::auto-reverse'(pspec: GObject.ParamSpec): void;
            'notify::delay'(pspec: GObject.ParamSpec): void;
            'notify::direction'(pspec: GObject.ParamSpec): void;
            'notify::duration'(pspec: GObject.ParamSpec): void;
            'notify::frame-clock'(pspec: GObject.ParamSpec): void;
            'notify::progress-mode'(pspec: GObject.ParamSpec): void;
            'notify::repeat-count'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends PropertyTransition.ConstructorProps {}
    }
    type KeyframeTransition = (typeof classes.KeyframeTransition)['prototype'];
    const KeyframeTransition: typeof classes.KeyframeTransition &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.KeyframeTransition.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, KeyframeTransition.SignalSignatures> & classes.KeyframeTransition);
    namespace Keymap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'state-changed'(): void;
            'notify::caps-lock-state'(pspec: GObject.ParamSpec): void;
            'notify::num-lock-state'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            caps_lock_state: boolean;
            capsLockState: boolean;
            num_lock_state: boolean;
            numLockState: boolean;
        }
    }
    type Keymap = (typeof classes.Keymap)['prototype'];
    const Keymap: typeof classes.Keymap &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Keymap.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Keymap.SignalSignatures> & classes.Keymap);
    namespace LayerNode {
        // Signal signatures
        interface SignalSignatures extends PaintNode.SignalSignatures {}
    }
    class LayerNode extends PaintNode {
        static '$gtype': GObject.GType<LayerNode>;
        // Constructors
        _init(...args: any[]): void;
        static new_to_framebuffer(framebuffer: Cogl.Framebuffer, pipeline: Cogl.Pipeline): LayerNode;
        // Signals
        connect<K extends keyof Clutter.LayerNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.LayerNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.LayerNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.LayerNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.LayerNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.LayerNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace LayoutManager {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'layout-changed'(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }
    type LayoutManager = (typeof classes.LayoutManager)['prototype'];
    const LayoutManager: typeof classes.LayoutManager &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.LayoutManager.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, LayoutManager.SignalSignatures> & classes.LayoutManager);
    namespace LayoutMeta {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::container'(pspec: GObject.ParamSpec): void;
            'notify::manager'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The [type`Clutter`.Actor] being wrapped by this [type`Clutter`.LayoutMeta]
             */
            actor: Actor;
            /**
             * The [type`Clutter`.Actor] containing [property`Clutter`.LayoutMeta:actor]
             */
            container: Actor;
            /**
             * The [class`LayoutManager]` that created this [type`Clutter`.LayoutMeta].
             */
            manager: LayoutManager;
        }
    }
    type LayoutMeta = (typeof classes.LayoutMeta)['prototype'];
    const LayoutMeta: typeof classes.LayoutMeta &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.LayoutMeta.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, LayoutMeta.SignalSignatures> & classes.LayoutMeta);
    namespace LongPressGesture {
        // Signal signatures
        interface SignalSignatures extends PressGesture.SignalSignatures {
            'notify::cancel-threshold'(pspec: GObject.ParamSpec): void;
            'notify::long-press-duration-ms'(pspec: GObject.ParamSpec): void;
            'notify::pressed'(pspec: GObject.ParamSpec): void;
            'notify::required-button'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends PressGesture.ConstructorProps {}
    }
    type LongPressGesture = (typeof classes.LongPressGesture)['prototype'];
    const LongPressGesture: typeof classes.LongPressGesture &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.LongPressGesture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, LongPressGesture.SignalSignatures> & classes.LongPressGesture);
    namespace OffscreenEffect {
        // Signal signatures
        interface SignalSignatures extends Effect.SignalSignatures {
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Effect.ConstructorProps {}
    }
    type OffscreenEffect = (typeof classes.OffscreenEffect)['prototype'];
    const OffscreenEffect: typeof classes.OffscreenEffect &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.OffscreenEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, OffscreenEffect.SignalSignatures> & classes.OffscreenEffect);
    namespace PageTurnEffect {
        // Signal signatures
        interface SignalSignatures extends DeformEffect.SignalSignatures {
            'notify::angle'(pspec: GObject.ParamSpec): void;
            'notify::period'(pspec: GObject.ParamSpec): void;
            'notify::radius'(pspec: GObject.ParamSpec): void;
            'notify::back-pipeline'(pspec: GObject.ParamSpec): void;
            'notify::x-tiles'(pspec: GObject.ParamSpec): void;
            'notify::y-tiles'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends DeformEffect.ConstructorProps {
            /**
             * The angle of the page rotation, in degrees, between 0.0 and 360.0
             */
            angle: number;
            /**
             * The period of the page turn, between 0.0 (no curling) and
             * 1.0 (fully curled)
             */
            period: number;
            /**
             * The radius of the page curl, in pixels
             */
            radius: number;
        }
    }
    type PageTurnEffect = (typeof classes.PageTurnEffect)['prototype'];
    const PageTurnEffect: typeof classes.PageTurnEffect &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.PageTurnEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PageTurnEffect.SignalSignatures> & classes.PageTurnEffect);
    namespace PaintNode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    /**
     * Paint objects
     *
     * #ClutterPaintNode is an element in the render graph.
     *
     * The render graph contains all the elements that need to be painted by
     * Clutter when submitting a frame to the graphics system.
     *
     * The render graph is distinct from the scene graph: the scene graph is
     * composed by actors, which can be visible or invisible; the scene graph
     * elements also respond to events. The render graph, instead, is only
     * composed by nodes that will be painted.
     *
     * Each #ClutterActor can submit multiple `ClutterPaintNode`s to
     * the render graph.
     */
    abstract class PaintNode {
        static '$gtype': GObject.GType<PaintNode>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.PaintNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PaintNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.PaintNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PaintNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.PaintNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.PaintNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Adds `child` to the list of children of `node`.
         *
         * This function will acquire a reference on `child`.
         *
         * @param child the child #ClutterPaintNode to add
         */
        add_child(child: PaintNode): void;
        /**
         * Adds a rectangle region to the `node,` with multitexture coordinates.
         *
         * @param rect a #ClutterActorBox
         * @param text_coords array of multitexture values
         * @param text_coords_len number of items of `text_coords`
         */
        add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void;
        /**
         * Adds a rectangle region to the `node,` as described by the
         * passed `rect`.
         *
         * @param rect a #ClutterActorBox
         */
        add_rectangle(rect: ActorBox): void;
        /**
         * Adds a series of rectangles to `node`.
         *
         * As a general rule for better performance its recommended to use this API
         * instead of calling clutter_paint_node_add_rectangle() separately for
         * multiple rectangles if all of the rectangles will be drawn together.
         *
         * See cogl_framebuffer_draw_rectangles().
         *
         * @param coords array of
         *   coordinates containing groups of 4 float values: [x_1, y_1, x_2, y_2] that
         *   are interpreted as two position coordinates; one for the top left of the
         *   rectangle (x1, y1), and one for the bottom right of the rectangle
         *   (x2, y2).
         */
        add_rectangles(coords: number[]): void;
        /**
         * Adds a rectangle region to the `node,` with texture coordinates.
         *
         * @param rect a #ClutterActorBox
         * @param _x_1 the left X coordinate of the texture
         * @param _y_1 the top Y coordinate of the texture
         * @param _x_2 the right X coordinate of the texture
         * @param _y_2 the bottom Y coordinate of the texture
         */
        add_texture_rectangle(rect: ActorBox, _x_1: number, _y_1: number, _x_2: number, _y_2: number): void;
        /**
         * Adds a series of rectangles to `node`.
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in s_1=0, t_1=0, s_2=1, t_2=1.
         *
         * See cogl_framebuffer_draw_textured_rectangles().
         *
         * @param coords array containing
         *   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]
         *   that have the same meaning as the arguments for
         *   cogl_framebuffer_draw_textured_rectangle().
         */
        add_texture_rectangles(coords: number[]): void;
        /**
         * Retrieves the #CoglFramebuffer that `node` will draw
         * into. If `node` doesn't specify a custom framebuffer,
         * the first ancestor with a custom framebuffer will be
         * used.
         *
         * @returns a #CoglFramebuffer or %NULL if no custom one is
         * set.
         */
        get_framebuffer(): Cogl.Framebuffer;
        /**
         * Paints the `node` using the class implementation, traversing
         * its children, if any.
         *
         * @param paint_context
         */
        paint(paint_context: PaintContext): void;
        /**
         * Acquires a reference on `node`.
         *
         * @returns the #ClutterPaintNode
         */
        ref(): PaintNode;
        /**
         * Sets a user-readable `name` for `node`.
         *
         * The `name` will be used for debugging purposes.
         *
         * The `node` will intern `name` using g_intern_string(). If you have access to a
         * static string, use clutter_paint_node_set_static_name() instead.
         *
         * @param name a string annotating the `node`
         */
        set_name(name: string): void;
        /**
         * Releases a reference on `node`.
         */
        unref(): void;
    }
    namespace PanGesture {
        // Signal signatures
        interface SignalSignatures extends Gesture.SignalSignatures {
            'pan-update'(): void;
            'notify::begin-threshold'(pspec: GObject.ParamSpec): void;
            'notify::max-n-points'(pspec: GObject.ParamSpec): void;
            'notify::max-npoints'(pspec: GObject.ParamSpec): void;
            'notify::min-n-points'(pspec: GObject.ParamSpec): void;
            'notify::min-npoints'(pspec: GObject.ParamSpec): void;
            'notify::pan-axis'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Gesture.ConstructorProps {
            /**
             * The threshold in pixels that has to be panned for the gesture to start.
             */
            begin_threshold: number;
            /**
             * The threshold in pixels that has to be panned for the gesture to start.
             */
            beginThreshold: number;
            /**
             * The maximum number of points to use for the pan. Set to 0 to allow
             * an unlimited number. Defaults to 0.
             */
            max_n_points: number;
            /**
             * The maximum number of points to use for the pan. Set to 0 to allow
             * an unlimited number. Defaults to 0.
             */
            maxNPoints: number;
            /**
             * The minimum number of points for the gesture to start, defaults to 1.
             */
            min_n_points: number;
            /**
             * The minimum number of points for the gesture to start, defaults to 1.
             */
            minNPoints: number;
            /**
             * Constraints the pan gesture to the specified axis.
             */
            pan_axis: PanAxis;
            /**
             * Constraints the pan gesture to the specified axis.
             */
            panAxis: PanAxis;
        }
    }
    type PanGesture = (typeof classes.PanGesture)['prototype'];
    const PanGesture: typeof classes.PanGesture &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.PanGesture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PanGesture.SignalSignatures> & classes.PanGesture);
    namespace PipelineCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type PipelineCache = (typeof classes.PipelineCache)['prototype'];
    const PipelineCache: typeof classes.PipelineCache &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.PipelineCache.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PipelineCache.SignalSignatures> & classes.PipelineCache);
    namespace PipelineNode {
        // Signal signatures
        interface SignalSignatures extends PaintNode.SignalSignatures {}
    }
    class PipelineNode extends PaintNode {
        static '$gtype': GObject.GType<PipelineNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(pipeline?: Cogl.Pipeline | null): PipelineNode;
        // Signals
        connect<K extends keyof Clutter.PipelineNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PipelineNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.PipelineNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PipelineNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.PipelineNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.PipelineNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace PressGesture {
        // Signal signatures
        interface SignalSignatures extends Gesture.SignalSignatures {
            'notify::cancel-threshold'(pspec: GObject.ParamSpec): void;
            'notify::long-press-duration-ms'(pspec: GObject.ParamSpec): void;
            'notify::pressed'(pspec: GObject.ParamSpec): void;
            'notify::required-button'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Gesture.ConstructorProps {
            /**
             * Threshold in pixels to cancel the gesture, use -1 to disable the threshold.
             */
            cancel_threshold: number;
            /**
             * Threshold in pixels to cancel the gesture, use -1 to disable the threshold.
             */
            cancelThreshold: number;
            /**
             * The minimum duration of a press in milliseconds for it to be recognized
             * as a long press gesture.
             *
             * A value of -1 (default) will make the gesture use the value of the
             * #ClutterSettings:long-press-duration property.
             */
            long_press_duration_ms: number;
            /**
             * The minimum duration of a press in milliseconds for it to be recognized
             * as a long press gesture.
             *
             * A value of -1 (default) will make the gesture use the value of the
             * #ClutterSettings:long-press-duration property.
             */
            longPressDurationMs: number;
            /**
             * Whether the clickable actor should be in "pressed" state
             */
            pressed: boolean;
            /**
             * The mouse button required for the press gesture to recognize.
             * Pass 0 to allow any button. Touch input is always handled as a press
             * of the primary button.
             */
            required_button: number;
            /**
             * The mouse button required for the press gesture to recognize.
             * Pass 0 to allow any button. Touch input is always handled as a press
             * of the primary button.
             */
            requiredButton: number;
        }
    }
    type PressGesture = (typeof classes.PressGesture)['prototype'];
    const PressGesture: typeof classes.PressGesture &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.PressGesture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PressGesture.SignalSignatures> & classes.PressGesture);
    namespace PropertyTransition {
        // Signal signatures
        interface SignalSignatures extends Transition.SignalSignatures {
            'notify::property-name'(pspec: GObject.ParamSpec): void;
            'notify::animatable'(pspec: GObject.ParamSpec): void;
            'notify::interval'(pspec: GObject.ParamSpec): void;
            'notify::remove-on-complete'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::auto-reverse'(pspec: GObject.ParamSpec): void;
            'notify::delay'(pspec: GObject.ParamSpec): void;
            'notify::direction'(pspec: GObject.ParamSpec): void;
            'notify::duration'(pspec: GObject.ParamSpec): void;
            'notify::frame-clock'(pspec: GObject.ParamSpec): void;
            'notify::progress-mode'(pspec: GObject.ParamSpec): void;
            'notify::repeat-count'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Transition.ConstructorProps {
            /**
             * The name of the property of a [iface`Animatable]` to animate.
             */
            property_name: string;
            /**
             * The name of the property of a [iface`Animatable]` to animate.
             */
            propertyName: string;
        }
    }
    type PropertyTransition = (typeof classes.PropertyTransition)['prototype'];
    const PropertyTransition: typeof classes.PropertyTransition &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.PropertyTransition.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PropertyTransition.SignalSignatures> & classes.PropertyTransition);
    namespace RootNode {
        // Signal signatures
        interface SignalSignatures extends PaintNode.SignalSignatures {}
    }
    class RootNode extends PaintNode {
        static '$gtype': GObject.GType<RootNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            framebuffer: Cogl.Framebuffer,
            color_state: ColorState,
            clear_color: Cogl.Color,
            clear_flags: Cogl.BufferBit,
        ): RootNode;
        // Signals
        connect<K extends keyof Clutter.RootNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.RootNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.RootNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.RootNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.RootNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.RootNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Seat {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'device-added'(arg0: InputDevice): void;
            'device-removed'(arg0: InputDevice): void;
            'is-unfocus-inhibited-changed'(): void;
            'kbd-a11y-flags-changed'(arg0: number, arg1: number): void;
            'kbd-a11y-mods-state-changed'(arg0: number, arg1: number): void;
            'ptr-a11y-dwell-click-type-changed'(arg0: PointerA11yDwellClickType): void;
            'ptr-a11y-timeout-started'(arg0: PointerA11yTimeoutType, arg1: number): void;
            'ptr-a11y-timeout-stopped'(arg0: PointerA11yTimeoutType, arg1: boolean): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::touch-mode'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            name: string;
            /**
             * The current touch-mode of the #ClutterSeat, it is set to %TRUE if the
             * requirements documented in [method`Seat`.get_touch_mode] are fulfilled.
             */
            touch_mode: boolean;
            /**
             * The current touch-mode of the #ClutterSeat, it is set to %TRUE if the
             * requirements documented in [method`Seat`.get_touch_mode] are fulfilled.
             */
            touchMode: boolean;
        }
    }
    type Seat = (typeof classes.Seat)['prototype'];
    const Seat: typeof classes.Seat &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Seat.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Seat.SignalSignatures> & classes.Seat);
    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::dnd-drag-threshold'(pspec: GObject.ParamSpec): void;
            'notify::double-click-distance'(pspec: GObject.ParamSpec): void;
            'notify::double-click-time'(pspec: GObject.ParamSpec): void;
            'notify::font-dpi'(pspec: GObject.ParamSpec): void;
            'notify::font-name'(pspec: GObject.ParamSpec): void;
            'notify::long-press-duration'(pspec: GObject.ParamSpec): void;
            'notify::password-hint-time'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The default distance that the cursor of a pointer device
             * should travel before a drag operation should start.
             */
            dnd_drag_threshold: number;
            /**
             * The default distance that the cursor of a pointer device
             * should travel before a drag operation should start.
             */
            dndDragThreshold: number;
            /**
             * The maximum distance, in pixels, between button-press events that
             * determines whether or not to increase the click count by 1.
             */
            double_click_distance: number;
            /**
             * The maximum distance, in pixels, between button-press events that
             * determines whether or not to increase the click count by 1.
             */
            doubleClickDistance: number;
            /**
             * The time, in milliseconds, that should elapse between button-press
             * events in order to increase the click count by 1.
             */
            double_click_time: number;
            /**
             * The time, in milliseconds, that should elapse between button-press
             * events in order to increase the click count by 1.
             */
            doubleClickTime: number;
            /**
             * The DPI used when rendering text, as a value of 1024 * dots/inch.
             *
             * If set to -1, the system's default will be used instead
             */
            font_dpi: number;
            /**
             * The DPI used when rendering text, as a value of 1024 * dots/inch.
             *
             * If set to -1, the system's default will be used instead
             */
            fontDpi: number;
            /**
             * The default font name that should be used by text actors, as
             * a string that can be passed to [func`Pango`.FontDescription.from_string].
             */
            font_name: string;
            /**
             * The default font name that should be used by text actors, as
             * a string that can be passed to [func`Pango`.FontDescription.from_string].
             */
            fontName: string;
            /**
             * Sets the minimum duration for a press to be recognized as a long press
             * gesture. The duration is expressed in milliseconds.
             *
             * See also [property`PressGesture:`long-press-duration-ms].
             */
            long_press_duration: number;
            /**
             * Sets the minimum duration for a press to be recognized as a long press
             * gesture. The duration is expressed in milliseconds.
             *
             * See also [property`PressGesture:`long-press-duration-ms].
             */
            longPressDuration: number;
            password_hint_time: number;
            passwordHintTime: number;
        }
    }
    type Settings = (typeof classes.Settings)['prototype'];
    const Settings: typeof classes.Settings &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Settings.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Settings.SignalSignatures> & classes.Settings);
    namespace ShaderEffect {
        // Signal signatures
        interface SignalSignatures extends OffscreenEffect.SignalSignatures {
            'notify::shader-type'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            /**
             * The type of shader that is used by the effect. This property
             * should be set by the constructor of #ClutterShaderEffect
             * sub-classes.
             */
            shader_type: Cogl.ShaderType;
            /**
             * The type of shader that is used by the effect. This property
             * should be set by the constructor of #ClutterShaderEffect
             * sub-classes.
             */
            shaderType: Cogl.ShaderType;
        }
    }
    type ShaderEffect = (typeof classes.ShaderEffect)['prototype'];
    const ShaderEffect: typeof classes.ShaderEffect &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.ShaderEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ShaderEffect.SignalSignatures> & classes.ShaderEffect);
    namespace ShaderFloat {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class ShaderFloat {
        static '$gtype': GObject.GType<ShaderFloat>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.ShaderFloat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ShaderFloat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ShaderFloat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ShaderFloat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ShaderFloat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ShaderFloat.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ShaderInt {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class ShaderInt {
        static '$gtype': GObject.GType<ShaderInt>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.ShaderInt.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ShaderInt.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ShaderInt.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ShaderInt.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ShaderInt.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ShaderInt.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace ShaderMatrix {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    class ShaderMatrix {
        static '$gtype': GObject.GType<ShaderMatrix>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.ShaderMatrix.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ShaderMatrix.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ShaderMatrix.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ShaderMatrix.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ShaderMatrix.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ShaderMatrix.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace SnapConstraint {
        // Signal signatures
        interface SignalSignatures extends Constraint.SignalSignatures {
            'notify::from-edge'(pspec: GObject.ParamSpec): void;
            'notify::offset'(pspec: GObject.ParamSpec): void;
            'notify::source'(pspec: GObject.ParamSpec): void;
            'notify::to-edge'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Constraint.ConstructorProps {
            /**
             * The edge of the [class`Actor]` that should be snapped
             */
            from_edge: SnapEdge;
            /**
             * The edge of the [class`Actor]` that should be snapped
             */
            fromEdge: SnapEdge;
            /**
             * The offset, in pixels, between [property`SnapConstraint:`from-edge]
             * and [property`SnapConstraint:`to-edge]
             */
            offset: number;
            /**
             * The [class`Actor]` used as the source for the constraint
             */
            source: Actor;
            /**
             * The edge of the [property`SnapConstraint:`source] that should be snapped
             */
            to_edge: SnapEdge;
            /**
             * The edge of the [property`SnapConstraint:`source] that should be snapped
             */
            toEdge: SnapEdge;
        }
    }
    type SnapConstraint = (typeof classes.SnapConstraint)['prototype'];
    const SnapConstraint: typeof classes.SnapConstraint &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.SnapConstraint.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SnapConstraint.SignalSignatures> & classes.SnapConstraint);
    namespace Sprite {
        // Signal signatures
        interface SignalSignatures extends Focus.SignalSignatures {
            'notify::device'(pspec: GObject.ParamSpec): void;
            'notify::sequence'(pspec: GObject.ParamSpec): void;
            'notify::stage'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Focus.ConstructorProps {
            device: InputDevice;
            sequence: EventSequence;
        }
    }
    type Sprite = (typeof classes.Sprite)['prototype'];
    const Sprite: typeof classes.Sprite &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Sprite.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Sprite.SignalSignatures> & classes.Sprite);
    namespace Stage {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            'after-paint'(arg0: StageView, arg1: Frame): void;
            'after-update'(arg0: StageView, arg1: Frame): void;
            'before-paint'(arg0: StageView, arg1: Frame): void;
            'before-update'(arg0: StageView, arg1: Frame): void;
            'gl-video-memory-purged'(): void;
            'paint-view'(arg0: StageView, arg1: Mtk.Region, arg2: Frame): void;
            'prepare-frame'(arg0: StageView, arg1: Frame): void;
            presented(arg0: StageView, arg1: any | null): void;
            'skipped-paint'(arg0: StageView, arg1: Frame): void;
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
            extends Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Animatable.ConstructorProps {
            /**
             * %TRUE if there is currently an active grab on the stage.
             */
            is_grabbed: boolean;
            /**
             * %TRUE if there is currently an active grab on the stage.
             */
            isGrabbed: boolean;
            /**
             * The [class`Clutter`.Actor] that will receive key events from the underlying
             * windowing system.
             *
             * If %NULL, the #ClutterStage will receive the events.
             */
            key_focus: Actor;
            /**
             * The [class`Clutter`.Actor] that will receive key events from the underlying
             * windowing system.
             *
             * If %NULL, the #ClutterStage will receive the events.
             */
            keyFocus: Actor;
            /**
             * The parameters used for the perspective projection from 3D
             * coordinates to 2D
             */
            perspective: Perspective;
        }
    }
    type Stage = (typeof classes.Stage)['prototype'];
    const Stage: typeof classes.Stage &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Stage.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Stage.SignalSignatures> & classes.Stage);
    namespace StageView {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            destroy(): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::framebuffer'(pspec: GObject.ParamSpec): void;
            'notify::layout'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::output-color-state'(pspec: GObject.ParamSpec): void;
            'notify::refresh-rate'(pspec: GObject.ParamSpec): void;
            'notify::scale'(pspec: GObject.ParamSpec): void;
            'notify::stage'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::use-shadowfb'(pspec: GObject.ParamSpec): void;
            'notify::vblank-duration-us'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_state: ColorState;
            colorState: ColorState;
            framebuffer: Cogl.Framebuffer;
            layout: Mtk.Rectangle;
            name: string;
            output_color_state: ColorState;
            outputColorState: ColorState;
            refresh_rate: number;
            refreshRate: number;
            scale: number;
            stage: Stage;
            transform: number;
            use_shadowfb: boolean;
            useShadowfb: boolean;
            vblank_duration_us: number;
            vblankDurationUs: number;
        }
    }
    type StageView = (typeof classes.StageView)['prototype'];
    const StageView: typeof classes.StageView &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.StageView.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, StageView.SignalSignatures> & classes.StageView);
    namespace Text {
        // Signal signatures
        interface SignalSignatures extends Actor.SignalSignatures {
            activate(): void;
            'cursor-changed'(): void;
            'delete-text'(arg0: number, arg1: number): void;
            'insert-text'(arg0: string, arg1: number, arg2: any | null): void;
            'text-changed'(): void;
            'notify::activatable'(pspec: GObject.ParamSpec): void;
            'notify::attributes'(pspec: GObject.ParamSpec): void;
            'notify::buffer'(pspec: GObject.ParamSpec): void;
            'notify::color'(pspec: GObject.ParamSpec): void;
            'notify::cursor-color'(pspec: GObject.ParamSpec): void;
            'notify::cursor-color-set'(pspec: GObject.ParamSpec): void;
            'notify::cursor-position'(pspec: GObject.ParamSpec): void;
            'notify::cursor-size'(pspec: GObject.ParamSpec): void;
            'notify::cursor-visible'(pspec: GObject.ParamSpec): void;
            'notify::editable'(pspec: GObject.ParamSpec): void;
            'notify::ellipsize'(pspec: GObject.ParamSpec): void;
            'notify::font-description'(pspec: GObject.ParamSpec): void;
            'notify::font-name'(pspec: GObject.ParamSpec): void;
            'notify::input-hints'(pspec: GObject.ParamSpec): void;
            'notify::input-purpose'(pspec: GObject.ParamSpec): void;
            'notify::justify'(pspec: GObject.ParamSpec): void;
            'notify::line-alignment'(pspec: GObject.ParamSpec): void;
            'notify::line-wrap'(pspec: GObject.ParamSpec): void;
            'notify::line-wrap-mode'(pspec: GObject.ParamSpec): void;
            'notify::max-length'(pspec: GObject.ParamSpec): void;
            'notify::password-char'(pspec: GObject.ParamSpec): void;
            'notify::selectable'(pspec: GObject.ParamSpec): void;
            'notify::selected-text-color'(pspec: GObject.ParamSpec): void;
            'notify::selected-text-color-set'(pspec: GObject.ParamSpec): void;
            'notify::selection-bound'(pspec: GObject.ParamSpec): void;
            'notify::selection-color'(pspec: GObject.ParamSpec): void;
            'notify::selection-color-set'(pspec: GObject.ParamSpec): void;
            'notify::single-line-mode'(pspec: GObject.ParamSpec): void;
            'notify::text'(pspec: GObject.ParamSpec): void;
            'notify::use-markup'(pspec: GObject.ParamSpec): void;
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
            extends Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Animatable.ConstructorProps {
            /**
             * Toggles whether return invokes the activate signal or not.
             */
            activatable: boolean;
            /**
             * A list of `PangoStyleAttribute`s to be applied to the
             * contents of the #ClutterText actor.
             */
            attributes: Pango.AttrList;
            /**
             * The buffer which stores the text for this #ClutterText.
             *
             * If set to %NULL, a default buffer will be created.
             */
            buffer: TextBuffer;
            /**
             * The color used to render the text.
             */
            color: Cogl.Color;
            /**
             * The color of the cursor.
             */
            cursor_color: Cogl.Color;
            /**
             * The color of the cursor.
             */
            cursorColor: Cogl.Color;
            /**
             * Will be set to %TRUE if [property`Text:`cursor-color] has been set.
             */
            cursor_color_set: boolean;
            /**
             * Will be set to %TRUE if [property`Text:`cursor-color] has been set.
             */
            cursorColorSet: boolean;
            /**
             * The current input cursor position. -1 is taken to be the end of the text
             */
            cursor_position: number;
            /**
             * The current input cursor position. -1 is taken to be the end of the text
             */
            cursorPosition: number;
            /**
             * The size of the cursor, in pixels. If set to -1 the size used will
             * be the default cursor size of 2 pixels.
             */
            cursor_size: number;
            /**
             * The size of the cursor, in pixels. If set to -1 the size used will
             * be the default cursor size of 2 pixels.
             */
            cursorSize: number;
            /**
             * Whether the input cursor is visible or not.
             *
             * The cursor will only be visible if this property and either
             * the [property`Text:`editable] or the [property`Text:`selectable] properties
             * are set to %TRUE.
             */
            cursor_visible: boolean;
            /**
             * Whether the input cursor is visible or not.
             *
             * The cursor will only be visible if this property and either
             * the [property`Text:`editable] or the [property`Text:`selectable] properties
             * are set to %TRUE.
             */
            cursorVisible: boolean;
            /**
             * Whether key events delivered to the actor causes editing.
             */
            editable: boolean;
            /**
             * The preferred place to ellipsize the contents of the #ClutterText actor
             */
            ellipsize: Pango.EllipsizeMode;
            /**
             * The [struct`Pango`.FontDescription] that should be used by the #ClutterText
             *
             * If you have a string describing the font then you should look at
             * [property`Text:`font-name] instead
             */
            font_description: Pango.FontDescription;
            /**
             * The [struct`Pango`.FontDescription] that should be used by the #ClutterText
             *
             * If you have a string describing the font then you should look at
             * [property`Text:`font-name] instead
             */
            fontDescription: Pango.FontDescription;
            /**
             * The font to be used by the #ClutterText, as a string
             * that can be parsed by [func`Pango`.FontDescription.from_string].
             *
             * If set to %NULL, the default system font will be used instead.
             */
            font_name: string;
            /**
             * The font to be used by the #ClutterText, as a string
             * that can be parsed by [func`Pango`.FontDescription.from_string].
             *
             * If set to %NULL, the default system font will be used instead.
             */
            fontName: string;
            input_hints: InputContentHintFlags;
            inputHints: InputContentHintFlags;
            input_purpose: InputContentPurpose;
            inputPurpose: InputContentPurpose;
            /**
             * Whether the contents of the #ClutterText should be justified
             * on both margins.
             */
            justify: boolean;
            /**
             * The preferred alignment for the text. This property controls
             * the alignment of multi-line paragraphs.
             */
            line_alignment: Pango.Alignment;
            /**
             * The preferred alignment for the text. This property controls
             * the alignment of multi-line paragraphs.
             */
            lineAlignment: Pango.Alignment;
            /**
             * Whether to wrap the lines of [property`Text:`text] if the contents
             * exceed the available allocation. The wrapping strategy is
             * controlled by the [property`Text:`line-wrap-mode] property.
             */
            line_wrap: boolean;
            /**
             * Whether to wrap the lines of [property`Text:`text] if the contents
             * exceed the available allocation. The wrapping strategy is
             * controlled by the [property`Text:`line-wrap-mode] property.
             */
            lineWrap: boolean;
            /**
             * If [property`Text:`line-wrap] is set to %TRUE, this property will
             * control how the text is wrapped.
             */
            line_wrap_mode: Pango.WrapMode;
            /**
             * If [property`Text:`line-wrap] is set to %TRUE, this property will
             * control how the text is wrapped.
             */
            lineWrapMode: Pango.WrapMode;
            /**
             * The maximum length of the contents of the #ClutterText actor.
             */
            max_length: number;
            /**
             * The maximum length of the contents of the #ClutterText actor.
             */
            maxLength: number;
            /**
             * If non-zero, the character that should be used in place of
             * the actual text in a password text actor.
             */
            password_char: number;
            /**
             * If non-zero, the character that should be used in place of
             * the actual text in a password text actor.
             */
            passwordChar: number;
            /**
             * Whether it is possible to select text, either using the pointer
             * or the keyboard.
             *
             * This property depends on the [property`Actor:`reactive] property being
             * set to %TRUE.
             */
            selectable: boolean;
            /**
             * The color of selected text.
             */
            selected_text_color: Cogl.Color;
            /**
             * The color of selected text.
             */
            selectedTextColor: Cogl.Color;
            /**
             * Will be set to %TRUE if [property`Text:`selected-text-color] has been set.
             */
            selected_text_color_set: boolean;
            /**
             * Will be set to %TRUE if [property`Text:`selected-text-color] has been set.
             */
            selectedTextColorSet: boolean;
            /**
             * The current input cursor position. -1 is taken to be the end of the text
             */
            selection_bound: number;
            /**
             * The current input cursor position. -1 is taken to be the end of the text
             */
            selectionBound: number;
            /**
             * The color of the selection.
             */
            selection_color: Cogl.Color;
            /**
             * The color of the selection.
             */
            selectionColor: Cogl.Color;
            /**
             * Will be set to %TRUE if [property`Text:`selection-color] has been set.
             */
            selection_color_set: boolean;
            /**
             * Will be set to %TRUE if [property`Text:`selection-color] has been set.
             */
            selectionColorSet: boolean;
            /**
             * Whether the #ClutterText actor should be in single line mode
             * or not. A single line #ClutterText actor will only contain a
             * single line of text, scrolling it in case its length is bigger
             * than the allocated size.
             *
             * Setting this property will also set the [property`Text:`activatable]
             * property as a side-effect.
             *
             * The [property`Text:`single-line-mode] property is used only if the
             * [property`Text:`editable] property is set to %TRUE.
             */
            single_line_mode: boolean;
            /**
             * Whether the #ClutterText actor should be in single line mode
             * or not. A single line #ClutterText actor will only contain a
             * single line of text, scrolling it in case its length is bigger
             * than the allocated size.
             *
             * Setting this property will also set the [property`Text:`activatable]
             * property as a side-effect.
             *
             * The [property`Text:`single-line-mode] property is used only if the
             * [property`Text:`editable] property is set to %TRUE.
             */
            singleLineMode: boolean;
            /**
             * The text to render inside the actor.
             */
            text: string;
            /**
             * Whether the text includes Pango markup.
             *
             * For more information about the Pango markup format, see
             * [method`Pango`.Layout.set_markup] in the Pango documentation.
             *
             * It is not possible to round-trip this property between
             * %TRUE and %FALSE. Once a string with markup has been set on
             * a #ClutterText actor with [property`Text:`use-markup] set to %TRUE, the markup
             * is stripped from the string.
             */
            use_markup: boolean;
            /**
             * Whether the text includes Pango markup.
             *
             * For more information about the Pango markup format, see
             * [method`Pango`.Layout.set_markup] in the Pango documentation.
             *
             * It is not possible to round-trip this property between
             * %TRUE and %FALSE. Once a string with markup has been set on
             * a #ClutterText actor with [property`Text:`use-markup] set to %TRUE, the markup
             * is stripped from the string.
             */
            useMarkup: boolean;
        }
    }
    type Text = (typeof classes.Text)['prototype'];
    const Text: typeof classes.Text &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Text.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Text.SignalSignatures> & classes.Text);
    namespace TextBuffer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'deleted-text'(arg0: number, arg1: number): void;
            'inserted-text'(arg0: number, arg1: string, arg2: number): void;
            'notify::length'(pspec: GObject.ParamSpec): void;
            'notify::max-length'(pspec: GObject.ParamSpec): void;
            'notify::text'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The length (in characters) of the text in buffer.
             */
            length: number;
            /**
             * The maximum length (in characters) of the text in the buffer.
             */
            max_length: number;
            /**
             * The maximum length (in characters) of the text in the buffer.
             */
            maxLength: number;
            /**
             * The contents of the buffer.
             */
            text: string;
        }
    }
    type TextBuffer = (typeof classes.TextBuffer)['prototype'];
    const TextBuffer: typeof classes.TextBuffer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.TextBuffer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, TextBuffer.SignalSignatures> & classes.TextBuffer);
    namespace TextNode {
        // Signal signatures
        interface SignalSignatures extends PaintNode.SignalSignatures {}
    }
    class TextNode extends PaintNode {
        static '$gtype': GObject.GType<TextNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(layout?: Pango.Layout | null, color?: Cogl.Color | null): TextNode;
        // Signals
        connect<K extends keyof Clutter.TextNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TextNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.TextNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TextNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.TextNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.TextNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace TextureContent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Content.ConstructorProps {}
    }
    type TextureContent = (typeof classes.TextureContent)['prototype'];
    const TextureContent: typeof classes.TextureContent &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.TextureContent.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, TextureContent.SignalSignatures> & classes.TextureContent);
    namespace TextureNode {
        // Signal signatures
        interface SignalSignatures extends PipelineNode.SignalSignatures {}
    }
    class TextureNode extends PipelineNode {
        static '$gtype': GObject.GType<TextureNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            texture: Cogl.Texture,
            color: Cogl.Color | null,
            min_filter: ScalingFilter,
            mag_filter: ScalingFilter,
        ): TextureNode;
        // Conflicted with Clutter.PipelineNode.new
        static new(...args: never[]): any;
        // Signals
        connect<K extends keyof Clutter.TextureNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TextureNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.TextureNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TextureNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.TextureNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.TextureNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Timeline {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            completed(): void;
            'marker-reached'(arg0: string, arg1: number): void;
            'new-frame'(arg0: number): void;
            paused(): void;
            started(): void;
            stopped(arg0: boolean): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::auto-reverse'(pspec: GObject.ParamSpec): void;
            'notify::delay'(pspec: GObject.ParamSpec): void;
            'notify::direction'(pspec: GObject.ParamSpec): void;
            'notify::duration'(pspec: GObject.ParamSpec): void;
            'notify::frame-clock'(pspec: GObject.ParamSpec): void;
            'notify::progress-mode'(pspec: GObject.ParamSpec): void;
            'notify::repeat-count'(pspec: GObject.ParamSpec): void;
            'marker-reached::actor'(arg0: string, arg1: number): void;
            'marker-reached::auto-reverse'(arg0: string, arg1: number): void;
            'marker-reached::delay'(arg0: string, arg1: number): void;
            'marker-reached::direction'(arg0: string, arg1: number): void;
            'marker-reached::duration'(arg0: string, arg1: number): void;
            'marker-reached::frame-clock'(arg0: string, arg1: number): void;
            'marker-reached::progress-mode'(arg0: string, arg1: number): void;
            'marker-reached::repeat-count'(arg0: string, arg1: number): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            actor: Actor;
            /**
             * If the direction of the timeline should be automatically reversed
             * when reaching the end.
             */
            auto_reverse: boolean;
            /**
             * If the direction of the timeline should be automatically reversed
             * when reaching the end.
             */
            autoReverse: boolean;
            /**
             * A delay, in milliseconds, that should be observed by the
             * timeline before actually starting.
             */
            delay: number;
            /**
             * The direction of the timeline, either %CLUTTER_TIMELINE_FORWARD or
             * %CLUTTER_TIMELINE_BACKWARD.
             */
            direction: TimelineDirection;
            /**
             * Duration of the timeline in milliseconds, depending on the
             * [property`Timeline:`frame-clock] value.
             */
            duration: number;
            /**
             * The frame clock driving the timeline.
             */
            frame_clock: FrameClock;
            /**
             * The frame clock driving the timeline.
             */
            frameClock: FrameClock;
            /**
             * Controls the way a #ClutterTimeline computes the normalized progress.
             */
            progress_mode: AnimationMode;
            /**
             * Controls the way a #ClutterTimeline computes the normalized progress.
             */
            progressMode: AnimationMode;
            /**
             * Defines how many times the timeline should repeat.
             *
             * If the repeat count is 0, the timeline does not repeat.
             *
             * If the repeat count is set to -1, the timeline will repeat until it is
             * stopped.
             */
            repeat_count: number;
            /**
             * Defines how many times the timeline should repeat.
             *
             * If the repeat count is 0, the timeline does not repeat.
             *
             * If the repeat count is set to -1, the timeline will repeat until it is
             * stopped.
             */
            repeatCount: number;
        }
    }
    type Timeline = (typeof classes.Timeline)['prototype'];
    const Timeline: typeof classes.Timeline &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Timeline.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Timeline.SignalSignatures> & classes.Timeline);
    namespace TransformNode {
        // Signal signatures
        interface SignalSignatures extends PaintNode.SignalSignatures {}
    }
    class TransformNode extends PaintNode {
        static '$gtype': GObject.GType<TransformNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(projection: Graphene.Matrix): TransformNode;
        // Signals
        connect<K extends keyof Clutter.TransformNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TransformNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.TransformNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TransformNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.TransformNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.TransformNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace Transition {
        // Signal signatures
        interface SignalSignatures extends Timeline.SignalSignatures {
            'notify::animatable'(pspec: GObject.ParamSpec): void;
            'notify::interval'(pspec: GObject.ParamSpec): void;
            'notify::remove-on-complete'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::auto-reverse'(pspec: GObject.ParamSpec): void;
            'notify::delay'(pspec: GObject.ParamSpec): void;
            'notify::direction'(pspec: GObject.ParamSpec): void;
            'notify::duration'(pspec: GObject.ParamSpec): void;
            'notify::frame-clock'(pspec: GObject.ParamSpec): void;
            'notify::progress-mode'(pspec: GObject.ParamSpec): void;
            'notify::repeat-count'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Timeline.ConstructorProps {
            /**
             * The [iface`Animatable]` instance currently being animated.
             */
            animatable: Animatable;
            /**
             * The [class`Interval]` used to describe the initial and final states
             * of the transition.
             */
            interval: Interval;
            /**
             * Whether the #ClutterTransition should be automatically detached
             * from the [property`Transition:`animatable] instance whenever the
             * [signal`Timeline:`:stopped] signal is emitted.
             *
             * The [property`Transition:`remove-on-complete] property takes into
             * account the value of the [property`Timeline:`repeat-count] property,
             * and it only detaches the transition if the transition is not
             * repeating.
             */
            remove_on_complete: boolean;
            /**
             * Whether the #ClutterTransition should be automatically detached
             * from the [property`Transition:`animatable] instance whenever the
             * [signal`Timeline:`:stopped] signal is emitted.
             *
             * The [property`Transition:`remove-on-complete] property takes into
             * account the value of the [property`Timeline:`repeat-count] property,
             * and it only detaches the transition if the transition is not
             * repeating.
             */
            removeOnComplete: boolean;
        }
    }
    type Transition = (typeof classes.Transition)['prototype'];
    const Transition: typeof classes.Transition &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.Transition.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Transition.SignalSignatures> & classes.Transition);
    namespace TransitionGroup {
        // Signal signatures
        interface SignalSignatures extends Transition.SignalSignatures {
            'notify::animatable'(pspec: GObject.ParamSpec): void;
            'notify::interval'(pspec: GObject.ParamSpec): void;
            'notify::remove-on-complete'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::auto-reverse'(pspec: GObject.ParamSpec): void;
            'notify::delay'(pspec: GObject.ParamSpec): void;
            'notify::direction'(pspec: GObject.ParamSpec): void;
            'notify::duration'(pspec: GObject.ParamSpec): void;
            'notify::frame-clock'(pspec: GObject.ParamSpec): void;
            'notify::progress-mode'(pspec: GObject.ParamSpec): void;
            'notify::repeat-count'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Transition.ConstructorProps {}
    }
    type TransitionGroup = (typeof classes.TransitionGroup)['prototype'];
    const TransitionGroup: typeof classes.TransitionGroup &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.TransitionGroup.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, TransitionGroup.SignalSignatures> & classes.TransitionGroup);
    namespace VirtualInputDevice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::seat'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            device_type: InputDeviceType;
            deviceType: InputDeviceType;
            seat: Seat;
        }
    }
    type VirtualInputDevice = (typeof classes.VirtualInputDevice)['prototype'];
    const VirtualInputDevice: typeof classes.VirtualInputDevice &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Clutter.VirtualInputDevice.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, VirtualInputDevice.SignalSignatures> & classes.VirtualInputDevice);
    export type ActionClass = typeof Action;
    export type ActorAccessibleClass = typeof ActorAccessible;
    abstract class ActorAccessiblePrivate {
        static '$gtype': GObject.GType<ActorAccessiblePrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * Bounding box of an actor.
     *
     * The coordinates of the top left and right bottom corners
     * of an actor. The coordinates of the two points are expressed in
     * pixels with sub-pixel precision
     */
    class ActorBox {
        static '$gtype': GObject.GType<ActorBox>;
        // Fields
        'x1': number;
        'y1': number;
        'x2': number;
        'y2': number;
        // Constructors
        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            }>,
        );
        _init(...args: any[]): void;
        static new(_x_1: number, _y_1: number, _x_2: number, _y_2: number): ActorBox;
        // Static methods
        /**
         * Allocates a new [struct`ActorBox]`.
         */
        static alloc(): ActorBox;
        /**
         * Clamps the components of `box` to the nearest integer
         *
         * @param box the #ClutterActorBox to clamp
         */
        static clamp_to_pixel(box: ActorBox): [ActorBox];
        // Methods
        /**
         * Checks whether a point with `x,` `y` coordinates is contained
         * within `box`
         *
         * @returns %TRUE if the point is contained by the #ClutterActorBox
         * @param x X coordinate of the point
         * @param y Y coordinate of the point
         */
        contains(x: number, y: number): boolean;
        /**
         * Copies `box`
         *
         * @returns a newly allocated copy of #ClutterActorBox. Use
         *   [method`ActorBox`.free] to free the allocated resources
         */
        copy(): ActorBox;
        /**
         * Checks `box_a` and `box_b` for equality
         *
         * @returns %TRUE if the passed #ClutterActorBox are equal
         * @param box_b a #ClutterActorBox
         */
        equal(box_b: ActorBox): boolean;
        /**
         * Frees a #ClutterActorBox allocated using [ctor`ActorBox`.new]
         * or [method`ActorBox`.copy].
         */
        free(): void;
        /**
         * Calculates the bounding box represented by the four vertices; for details
         * of the vertex array see [method`Actor`.get_abs_allocation_vertices].
         *
         * @param verts array of four #graphene_point3d_t
         */
        from_vertices(verts: Graphene.Point3D[]): void;
        /**
         * Retrieves the area of `box`
         *
         * @returns the area of a #ClutterActorBox, in pixels
         */
        get_area(): number;
        /**
         * Retrieves the height of the `box`
         *
         * @returns the height of the box
         */
        get_height(): number;
        /**
         * Retrieves the origin of `box`
         */
        get_origin(): [number, number];
        /**
         * Retrieves the size of `box`
         */
        get_size(): [number, number];
        /**
         * Retrieves the width of the `box`
         *
         * @returns the width of the box
         */
        get_width(): number;
        /**
         * Retrieves the X coordinate of the origin of `box`
         *
         * @returns the X coordinate of the origin
         */
        get_x(): number;
        /**
         * Retrieves the Y coordinate of the origin of `box`
         *
         * @returns the Y coordinate of the origin
         */
        get_y(): number;
        /**
         * Initializes `box` with the given coordinates.
         *
         * @returns the initialized #ClutterActorBox
         * @param _x_1 X coordinate of the top left point
         * @param _y_1 Y coordinate of the top left point
         * @param _x_2 X coordinate of the bottom right point
         * @param _y_2 Y coordinate of the bottom right point
         */
        init(_x_1: number, _y_1: number, _x_2: number, _y_2: number): ActorBox;
        /**
         * Initializes `box` with the given origin and size.
         *
         * @param x X coordinate of the origin
         * @param y Y coordinate of the origin
         * @param width width of the box
         * @param height height of the box
         */
        init_rect(x: number, y: number, width: number, height: number): void;
        /**
         * Interpolates between `initial` and `final` `ClutterActorBox`es
         * using `progress`
         *
         * @param _final the final #ClutterActorBox
         * @param progress the interpolation progress
         */
        interpolate(_final: ActorBox, progress: number): [ActorBox];
        /**
         * Checks if `box` has been initialized, a #ClutterActorBox is uninitialized
         * if it has a size of -1 at an origin of 0, 0.
         *
         * @returns %TRUE if the box is uninitialized, %FALSE if it isn't
         */
        is_initialized(): boolean;
        /**
         * Rescale the `box` by provided `scale` factor.
         *
         * @param scale scale factor for resizing this box
         */
        scale(scale: number): void;
        /**
         * Changes the origin of `box,` maintaining the size of the #ClutterActorBox.
         *
         * @param x the X coordinate of the new origin
         * @param y the Y coordinate of the new origin
         */
        set_origin(x: number, y: number): void;
        /**
         * Sets the size of `box,` maintaining the origin of the #ClutterActorBox.
         *
         * @param width the new width
         * @param height the new height
         */
        set_size(width: number, height: number): void;
        /**
         * Unions the two boxes `a` and `b` and stores the result in `result`.
         *
         * @param b the second #ClutterActorBox
         */
        union(b: ActorBox): [ActorBox];
    }
    export type ActorClass = typeof Actor;
    /**
     * An iterator structure that allows to efficiently iterate over a
     * section of the scene graph.
     *
     * The contents of the #ClutterActorIter structure
     * are private and should only be accessed using the provided API.
     */
    class ActorIter {
        static '$gtype': GObject.GType<ActorIter>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        // Methods
        /**
         * Safely destroys the #ClutterActor currently pointer to by the iterator
         * from its parent.
         *
         * This function can only be called after [method`Clutter`.ActorIter.next] or
         * [method`Clutter`.ActorIter.prev] returned %TRUE, and cannot be called more
         * than once for the same actor.
         *
         * This function will call [method`Clutter`.Actor.destroy] internally.
         */
        destroy(): void;
        /**
         * Initializes a #ClutterActorIter, which can then be used to iterate
         * efficiently over a section of the scene graph, and associates it
         * with `root`.
         *
         * Modifying the scene graph section that contains `root` will invalidate
         * the iterator.
         *
         * ```c
         *   ClutterActorIter iter;
         *   ClutterActor *child;
         *
         *   clutter_actor_iter_init (&iter, container);
         *   while (clutter_actor_iter_next (&iter, &child))
         *     {
         *       // do something with child
         *     }
         * ```
         *
         * @param root a #ClutterActor
         */
        init(root: Actor): void;
        /**
         * Checks whether a #ClutterActorIter is still valid.
         *
         * An iterator is considered valid if it has been initialized, and
         * if the #ClutterActor that it refers to hasn't been modified after
         * the initialization.
         *
         * @returns %TRUE if the iterator is valid, and %FALSE otherwise
         */
        is_valid(): boolean;
        /**
         * Advances the `iter` and retrieves the next child of the root #ClutterActor
         * that was used to initialize the #ClutterActorIterator.
         *
         * If the iterator can advance, this function returns %TRUE and sets the
         * `child` argument.
         *
         * If the iterator cannot advance, this function returns %FALSE, and
         * the contents of `child` are undefined.
         *
         * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
         */
        next(): [boolean, Actor | null];
        /**
         * Advances the `iter` and retrieves the previous child of the root
         * #ClutterActor that was used to initialize the #ClutterActorIterator.
         *
         * If the iterator can advance, this function returns %TRUE and sets the
         * `child` argument.
         *
         * If the iterator cannot advance, this function returns %FALSE, and
         * the contents of `child` are undefined.
         *
         * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
         */
        prev(): [boolean, Actor | null];
        /**
         * Safely removes the #ClutterActor currently pointer to by the iterator
         * from its parent.
         *
         * This function can only be called after [method`Clutter`.ActorIter.next] or
         *   [method`Clutter`.ActorIter.prev] returned %TRUE, and cannot be called more
         * than once for the same actor.
         *
         * This function will call [method`Clutter`.Actor.remove_child] internally.
         */
        remove(): void;
    }
    export type ActorMetaClass = typeof ActorMeta;
    abstract class ActorMetaPrivate {
        static '$gtype': GObject.GType<ActorMetaPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type ActorNodeClass = typeof ActorNode;
    abstract class ActorPrivate {
        static '$gtype': GObject.GType<ActorPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type AlignConstraintClass = typeof AlignConstraint;
    export type AnimatableInterface = typeof Animatable;
    abstract class AnyEvent {
        static '$gtype': GObject.GType<AnyEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type BackendClass = typeof Backend;
    export type BinLayoutClass = typeof BinLayout;
    export type BindConstraintClass = typeof BindConstraint;
    export type BindingPoolClass = typeof BindingPool;
    export type BlitNodeClass = typeof BlitNode;
    export type BlurEffectClass = typeof BlurEffect;
    export type BlurNodeClass = typeof BlurNode;
    export type BoxLayoutClass = typeof BoxLayout;
    export type BrightnessContrastEffectClass = typeof BrightnessContrastEffect;
    abstract class ButtonEvent {
        static '$gtype': GObject.GType<ButtonEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    class Cicp {
        static '$gtype': GObject.GType<Cicp>;
        // Fields
        primaries: CicpPrimaries;
        transfer: CicpTransfer;
        matrix_coefficients: number;
        video_full_range_flag: number;
        // Constructors
        _init(...args: any[]): void;
    }
    export type ClickGestureClass = typeof ClickGesture;
    export type ClipNodeClass = typeof ClipNode;
    export type CloneClass = typeof Clone;
    export type ColorManagerClass = typeof ColorManager;
    export type ColorNodeClass = typeof ColorNode;
    export type ColorStateClass = typeof ColorState;
    export type ColorStateIccClass = typeof ColorStateIcc;
    export type ColorStateParamsClass = typeof ColorStateParams;
    abstract class ColorTransformKey {
        static '$gtype': GObject.GType<ColorTransformKey>;
        // Constructors
        _init(...args: any[]): void;
    }
    class Colorimetry {
        static '$gtype': GObject.GType<Colorimetry>;
        // Fields
        type: ColorimetryType;
        // Constructors
        _init(...args: any[]): void;
    }
    export type ColorizeEffectClass = typeof ColorizeEffect;
    export type ConstraintClass = typeof Constraint;
    export type ContentInterface = typeof Content;
    export type ContextClass = typeof Context;
    abstract class CrossingEvent {
        static '$gtype': GObject.GType<CrossingEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type DeformEffectClass = typeof DeformEffect;
    export type DesaturateEffectClass = typeof DesaturateEffect;
    abstract class DeviceEvent {
        static '$gtype': GObject.GType<DeviceEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    class EOTF {
        static '$gtype': GObject.GType<EOTF>;
        // Fields
        type: EOTFType;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        get_default_luminance(): Luminance;
    }
    export type EffectClass = typeof Effect;
    /**
     * The #ClutterEventSequence structure is an opaque
     * type used to denote the event sequence of a touch event.
     */
    abstract class EventSequence {
        static '$gtype': GObject.GType<EventSequence>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        get_slot(): number;
    }
    export type FixedLayoutClass = typeof FixedLayout;
    export type FlowLayoutClass = typeof FlowLayout;
    export type FocusClass = typeof Focus;
    abstract class Frame {
        static '$gtype': GObject.GType<Frame>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        get_count(): number;
        get_frame_deadline(frame_deadline_us: number): boolean;
        get_target_presentation_time(target_presentation_time_us: number): boolean;
        has_result(): boolean;
        ref(): Frame;
        set_result(result: FrameResult | null): void;
        unref(): void;
    }
    export type FrameClockClass = typeof FrameClock;
    export type FrameClockDriverClass = typeof FrameClockDriver;
    export type GestureClass = typeof Gesture;
    export type GrabClass = typeof Grab;
    export type GridLayoutClass = typeof GridLayout;
    abstract class IMEvent {
        static '$gtype': GObject.GType<IMEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type InputDeviceClass = typeof InputDevice;
    export type InputDeviceToolClass = typeof InputDeviceTool;
    export type InputFocusClass = typeof InputFocus;
    export type InputMethodClass = typeof InputMethod;
    export type IntervalClass = typeof Interval;
    abstract class KeyEvent {
        static '$gtype': GObject.GType<KeyEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type KeyFocusClass = typeof KeyFocus;
    export type KeyframeTransitionClass = typeof KeyframeTransition;
    export type KeymapClass = typeof Keymap;
    export type LayerNodeClass = typeof LayerNode;
    export type LayoutManagerClass = typeof LayoutManager;
    export type LayoutMetaClass = typeof LayoutMeta;
    export type LongPressGestureClass = typeof LongPressGesture;
    class Luminance {
        static '$gtype': GObject.GType<Luminance>;
        // Fields
        type: LuminanceType;
        'ref_is_1_0': number;
        min: number;
        max: number;
        ref: number;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A representation of the components of a margin.
     */
    class Margin {
        static '$gtype': GObject.GType<Margin>;
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
        static new(): Margin;
        // Methods
        /**
         * Creates a new #ClutterMargin and copies the contents of `margin_` into
         * the newly created structure.
         *
         * @returns a copy of the #ClutterMargin.
         */
        copy(): Margin;
        /**
         * Frees the resources allocated by [ctor`Clutter`.Margin.new] and
         * [method`Clutter`.Margin.copy].
         */
        free(): void;
    }
    abstract class MotionEvent {
        static '$gtype': GObject.GType<MotionEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type OffscreenEffectClass = typeof OffscreenEffect;
    abstract class PadButtonEvent {
        static '$gtype': GObject.GType<PadButtonEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    abstract class PadDialEvent {
        static '$gtype': GObject.GType<PadDialEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    abstract class PadRingEvent {
        static '$gtype': GObject.GType<PadRingEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    abstract class PadStripEvent {
        static '$gtype': GObject.GType<PadStripEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type PageTurnEffectClass = typeof PageTurnEffect;
    class PaintContext {
        static '$gtype': GObject.GType<PaintContext>;
        // Constructors
        constructor(
            framebuffer: Cogl.Framebuffer,
            redraw_clip: Mtk.Region,
            paint_flags: PaintFlag,
            color_state: ColorState,
        );
        _init(...args: any[]): void;
        // Methods
        destroy(): void;
        get_framebuffer(): Cogl.Framebuffer;
        get_redraw_clip(): Mtk.Region;
        pop_color_state(): void;
        pop_framebuffer(): void;
        push_color_state(color_state: ColorState): void;
        push_framebuffer(framebuffer: Cogl.Framebuffer): void;
        ref(): PaintContext;
        unref(): void;
    }
    export type PaintNodeClass = typeof PaintNode;
    abstract class PaintNodePrivate {
        static '$gtype': GObject.GType<PaintNodePrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A #ClutterPaintVolume represents a bounding volume whose internal
     * representation isn't defined but can be set and queried in terms
     * of an axis aligned bounding box.
     *
     * A #ClutterPaintVolume for a [class`Actor]`
     * is defined to be relative from the current actor modelview matrix.
     *
     * Other internal representation and methods for describing the
     * bounding volume may be added in the future.
     */
    abstract class PaintVolume {
        static '$gtype': GObject.GType<PaintVolume>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Copies `pv` into a new #ClutterPaintVolume
         *
         * @returns a newly allocated copy of a #ClutterPaintVolume
         */
        copy(): PaintVolume;
        /**
         * Frees the resources allocated by `pv`
         */
        free(): void;
        /**
         * Retrieves the depth of the volume's, axis aligned, bounding box.
         *
         * In other words; this takes into account what actor's coordinate
         * space `pv` belongs too and conceptually fits an axis aligned box
         * around the volume. It returns the size of that bounding box as
         * measured along the z-axis.
         *
         * If, for example, [method`Actor`.get_transformed_paint_volume]
         * is used to transform a 2D child actor that is 100px wide, 100px
         * high and 0px deep into container coordinates then the depth might
         * not simply be 0px if the child actor has a 3D rotation applied to
         * it.
         *
         * Remember: if [method`Actor`.get_transformed_paint_volume] is
         * used then the transformed volume will be defined relative to the
         * container actor and in container coordinates a 2D child actor
         * can have a 3D bounding volume.
         *
         * There are no accuracy guarantees for the reported depth,
         * except that it must always be greater than, or equal to, the actor's
         * depth. This is because actors may report simple, loose fitting paint
         * volumes for efficiency.
         *
         * @returns the depth, in units of `pv'`s local coordinate system.
         */
        get_depth(): number;
        /**
         * Retrieves the height of the volume's, axis aligned, bounding box.
         *
         * In other words; this takes into account what actor's coordinate
         * space `pv` belongs too and conceptually fits an axis aligned box
         * around the volume. It returns the size of that bounding box as
         * measured along the y-axis.
         *
         * If, for example, [method`Actor`.get_transformed_paint_volume]
         * is used to transform a 2D child actor that is 100px wide, 100px
         * high and 0px deep into container coordinates then the height might
         * not simply be 100px if the child actor has a 3D rotation applied to
         * it.
         *
         * Remember: if [method`Actor`.get_transformed_paint_volume] is
         * used then a transformed child volume will be defined relative to the
         * ancestor container actor and so a 2D child actor
         * can have a 3D bounding volume.
         *
         * There are no accuracy guarantees for the reported height,
         * except that it must always be greater than, or equal to, the actor's
         * height. This is because actors may report simple, loose fitting paint
         * volumes for efficiency.
         *
         * @returns the height, in units of `pv'`s local coordinate system.
         */
        get_height(): number;
        /**
         * Retrieves the origin of the #ClutterPaintVolume.
         */
        get_origin(): [Graphene.Point3D];
        /**
         * Retrieves the width of the volume's, axis aligned, bounding box.
         *
         * In other words; this takes into account what actor's coordinate
         * space `pv` belongs too and conceptually fits an axis aligned box
         * around the volume. It returns the size of that bounding box as
         * measured along the x-axis.
         *
         * If, for example, [method`Actor`.get_transformed_paint_volume]
         * is used to transform a 2D child actor that is 100px wide, 100px
         * high and 0px deep into container coordinates then the width might
         * not simply be 100px if the child actor has a 3D rotation applied to
         * it.
         *
         * Remember: if [method`Actor`.get_transformed_paint_volume] is
         * used then a transformed child volume will be defined relative to the
         * ancestor container actor and so a 2D child actor can have a 3D
         * bounding volume.
         *
         * There are no accuracy guarantees for the reported width,
         * except that it must always be greater than, or equal to, the
         * actor's width. This is because actors may report simple, loose
         * fitting paint volumes for efficiency.
         *
         * @returns the width, in units of `pv'`s local coordinate system.
         */
        get_width(): number;
        /**
         * Sets the depth of the paint volume. The depth is measured along
         * the z axis in the actor coordinates that `pv` is associated with.
         *
         * @param depth the depth of the paint volume, in pixels
         */
        set_depth(depth: number): void;
        /**
         * Sets the #ClutterPaintVolume from the allocation of `actor`.
         *
         * This function should be used when overriding the
         * [vfunc`Actor`.get_paint_volume] by [class`Actor]` sub-classes
         * that do not paint outside their allocation.
         *
         * A typical example is:
         *
         * ```c
         * static gboolean
         * my_actor_get_paint_volume (ClutterActor       *self,
         *                            ClutterPaintVolume *volume)
         * {
         *   return clutter_paint_volume_set_from_allocation (volume, self);
         * }
         * ```
         *
         * @returns %TRUE if the paint volume was successfully set, and %FALSE
         *   otherwise
         * @param actor a #ClutterActor
         */
        set_from_allocation(actor: Actor): boolean;
        /**
         * Sets the height of the paint volume. The height is measured along
         * the y axis in the actor coordinates that `pv` is associated with.
         *
         * @param height the height of the paint volume, in pixels
         */
        set_height(height: number): void;
        /**
         * Sets the origin of the paint volume.
         *
         * The origin is defined as the X, Y and Z coordinates of the top-left
         * corner of an actor's paint volume, in actor coordinates.
         *
         * The default is origin is assumed at: (0, 0, 0)
         *
         * @param origin a #graphene_point3d_t
         */
        set_origin(origin: Graphene.Point3D): void;
        /**
         * Sets the width of the paint volume. The width is measured along
         * the x axis in the actor coordinates that `pv` is associated with.
         *
         * @param width the width of the paint volume, in pixels
         */
        set_width(width: number): void;
        /**
         * Updates the geometry of `pv` to encompass `pv` and `another_pv`.
         *
         * There are no guarantees about how precisely the two volumes
         * will be unioned.
         *
         * @param another_pv A second #ClutterPaintVolume to union with `pv`
         */
        union(another_pv: PaintVolume): void;
        /**
         * Unions the 2D region represented by `box` to a #ClutterPaintVolume.
         *
         * This function is similar to [method`PaintVolume`.union], but it is
         * specific for 2D regions.
         *
         * @param box a #ClutterActorBox to union to `pv`
         */
        union_box(box: ActorBox): void;
    }
    export type PanGestureClass = typeof PanGesture;
    /**
     * Stage perspective definition.
     */
    class Perspective {
        static '$gtype': GObject.GType<Perspective>;
        // Fields
        fovy: number;
        aspect: number;
        z_near: number;
        z_far: number;
        // Constructors
        constructor(
            properties?: Partial<{
                fovy: number;
                aspect: number;
                z_near: number;
                z_far: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    abstract class PickContext {
        static '$gtype': GObject.GType<PickContext>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        destroy(): void;
        /**
         * Retrieves the current transform of the pick stack.
         */
        get_transform(): [Graphene.Matrix];
        /**
         * Logs an overlapping actor into the pick stack.
         *
         * @param actor a #ClutterActor
         */
        log_overlap(actor: Actor): void;
        /**
         * Logs a pick rectangle into the pick stack.
         *
         * @param box a #ClutterActorBox
         * @param actor a #ClutterActor
         */
        log_pick(box: ActorBox, actor: Actor): void;
        /**
         * Pops the current clip rectangle from the clip stack. It is a programming
         * error to call this without a corresponding [method`PickContext`.push_clip]
         * call first.
         */
        pop_clip(): void;
        /**
         * Pops the current transform from the clip stack. It is a programming error
         * to call this without a corresponding [method`PickContext`.push_transform]
         * call first.
         */
        pop_transform(): void;
        /**
         * Pushes a clip rectangle defined by `box` into the pick stack. Pop with
         * [method`PickContext`.pop_clip] when done.
         *
         * @param box a #ClutterActorBox
         */
        push_clip(box: ActorBox): void;
        /**
         * Pushes `transform` into the pick stack. Pop with
         * [method`PickContext`.pop_transform] when done.
         *
         * @param transform a #graphene_matrix_t
         */
        push_transform(transform: Graphene.Matrix): void;
        ref(): PickContext;
        unref(): void;
    }
    export type PipelineCacheClass = typeof PipelineCache;
    export type PipelineNodeClass = typeof PipelineNode;
    /**
     * The #ClutterPointerA11ySettings structure contains pointer accessibility
     * settings
     */
    class PointerA11ySettings {
        static '$gtype': GObject.GType<PointerA11ySettings>;
        // Fields
        controls: PointerA11yFlags;
        dwell_click_type: PointerA11yDwellClickType;
        dwell_mode: PointerA11yDwellMode;
        dwell_gesture_single: PointerA11yDwellDirection;
        dwell_gesture_double: PointerA11yDwellDirection;
        dwell_gesture_drag: PointerA11yDwellDirection;
        dwell_gesture_secondary: PointerA11yDwellDirection;
        secondary_click_delay: number;
        dwell_delay: number;
        dwell_threshold: number;
        // Constructors
        _init(...args: any[]): void;
    }
    export type PressGestureClass = typeof PressGesture;
    class Primaries {
        static '$gtype': GObject.GType<Primaries>;
        // Fields
        r_x: number;
        r_y: number;
        g_x: number;
        g_y: number;
        b_x: number;
        b_y: number;
        w_x: number;
        w_y: number;
        // Constructors
        constructor(
            properties?: Partial<{
                r_x: number;
                r_y: number;
                g_x: number;
                g_y: number;
                b_x: number;
                b_y: number;
                w_x: number;
                w_y: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        ensure_normalized_range(): void;
    }
    export type PropertyTransitionClass = typeof PropertyTransition;
    abstract class ProximityEvent {
        static '$gtype': GObject.GType<ProximityEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type RootNodeClass = typeof RootNode;
    abstract class ScrollActor {
        static '$gtype': GObject.GType<ScrollActor>;
        // Constructors
        _init(...args: any[]): void;
    }
    abstract class ScrollEvent {
        static '$gtype': GObject.GType<ScrollEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type SeatClass = typeof Seat;
    export type SettingsClass = typeof Settings;
    export type ShaderEffectClass = typeof ShaderEffect;
    export type SnapConstraintClass = typeof SnapConstraint;
    export type SpriteClass = typeof Sprite;
    export type StageClass = typeof Stage;
    export type StageViewClass = typeof StageView;
    export type TextBufferClass = typeof TextBuffer;
    export type TextClass = typeof Text;
    export type TextNodeClass = typeof TextNode;
    export type TextureContentClass = typeof TextureContent;
    export type TextureNodeClass = typeof TextureNode;
    /**
     * Used to specify vertex information when calling cogl_polygon()
     */
    class TextureVertex {
        static '$gtype': GObject.GType<TextureVertex>;
        // Fields
        x: number;
        y: number;
        z: number;
        tx: number;
        ty: number;
        color: Cogl.Color;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                z: number;
                tx: number;
                ty: number;
                color: Cogl.Color;
            }>,
        );
        _init(...args: any[]): void;
    }
    export type TimelineClass = typeof Timeline;
    abstract class TouchEvent {
        static '$gtype': GObject.GType<TouchEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    abstract class TouchpadHoldEvent {
        static '$gtype': GObject.GType<TouchpadHoldEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    abstract class TouchpadPinchEvent {
        static '$gtype': GObject.GType<TouchpadPinchEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    abstract class TouchpadSwipeEvent {
        static '$gtype': GObject.GType<TouchpadSwipeEvent>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type TransformNodeClass = typeof TransformNode;
    export type TransitionClass = typeof Transition;
    export type TransitionGroupClass = typeof TransitionGroup;
    export type VirtualInputDeviceClass = typeof VirtualInputDevice;
    class Event {
        static '$gtype': GObject.GType<Event>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Adds a function which will be called for all events that Clutter
         * processes. The function will be called before any signals are
         * emitted for the event and it will take precedence over any grabs.
         *
         * @param stage The #ClutterStage to capture events for
         * @param func The callback function which will be passed all events.
         */
        static add_filter(stage: Stage | null, func: EventFilterFunc): number;
        /**
         * Pops an event off the event queue. Applications should not need to call
         * this.
         */
        static get(): Event;
        /**
         * Removes an event filter that was previously added with
         * [func`Clutter`.Event.add_filter].
         *
         * @param id The ID of the event filter, as returned from [func`Clutter`.Event.add_filter]
         */
        static remove_filter(id: number): void;
        // Methods
        /**
         * Copies `event`.
         *
         * @returns A newly allocated #ClutterEvent
         */
        copy(): Event;
        /**
         * Frees all resources used by `event`.
         */
        free(): void;
        /**
         * Retrieves the angle relative from `source` to `target`.
         *
         * The direction of the angle is from the position X axis towards
         * the positive Y axis.
         *
         * @returns the angle between two #ClutterEvent
         * @param target a #ClutterEvent
         */
        get_angle(target: Event): number;
        /**
         * Retrieves the array of axes values attached to the event.
         *
         * @returns an array of axis values
         */
        get_axes(): [number, number];
        /**
         * Retrieves the button number of `event`
         *
         * @returns the button number
         */
        get_button(): number;
        /**
         * Retrieves the coordinates of `event` and puts them into `x` and `y`.
         */
        get_coords(): [number, number];
        /**
         * Returns the device tool that originated this event
         *
         * @returns The tool of this event8
         */
        get_device_tool(): InputDeviceTool;
        /**
         * Retrieves the type of the device for `event`
         *
         * @returns the #ClutterInputDeviceType for the device, if
         *   any is set
         */
        get_device_type(): InputDeviceType;
        /**
         * Retrieves the distance between two events, a `source` and a `target`.
         *
         * @returns the distance between two #ClutterEvent
         * @param target a #ClutterEvent
         */
        get_distance(target: Event): number;
        get_event_code(): number;
        /**
         * Retrieves the #ClutterEventSequence of `event`.
         *
         * @returns the event sequence, or %NULL
         */
        get_event_sequence(): EventSequence;
        /**
         * Retrieves the #ClutterEventFlags of `event`
         *
         * @returns the event flags
         */
        get_flags(): EventFlags;
        /**
         * Returns the gesture motion deltas relative to the current pointer
         * position.4
         */
        get_gesture_motion_delta(): [number, number];
        /**
         * Returns the unaccelerated gesture motion deltas relative to the current
         * pointer position. Unlike [method`Clutter`.Event.get_gesture_motion_delta],
         * pointer acceleration is ignored.
         */
        get_gesture_motion_delta_unaccelerated(): [number, number];
        /**
         * Returns the phase of the event, See #ClutterTouchpadGesturePhase.
         *
         * @returns the phase of the gesture event.
         */
        get_gesture_phase(): TouchpadGesturePhase;
        /**
         * Returns the angle delta reported by this specific event.
         *
         * @returns The angle delta relative to the previous event.4
         */
        get_gesture_pinch_angle_delta(): number;
        /**
         * Returns the current scale as reported by `event,` 1.0 being the original
         * distance at the time the corresponding event with phase
         * %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN is received.
         * is received.
         *
         * @returns the current pinch gesture scale4
         */
        get_gesture_pinch_scale(): number;
        get_im_delete_length(): number;
        get_im_location(offset: number, anchor: number): boolean;
        get_im_preedit_reset_mode(): PreeditResetMode;
        get_im_text(): string;
        /**
         * Retrieves the keycode of the key that caused `event`
         *
         * @returns The keycode representing the key
         */
        get_key_code(): number;
        /**
         * Returns the modifier state decomposed into independent
         * pressed/latched/locked states. The effective state is a
         * composition of these 3 states, see [method`Clutter`.Event.get_state].
         */
        get_key_state(): [ModifierType, ModifierType, ModifierType];
        /**
         * Retrieves the key symbol of `event`
         *
         * @returns the key symbol representing the key
         */
        get_key_symbol(): number;
        /**
         * Retrieves the unicode value for the key that caused `keyev`.
         *
         * @returns The unicode value representing the key
         */
        get_key_unicode(): string;
        get_mode_group(): number;
        /**
         * Returns the details of a pad event.
         *
         * @returns #TRUE if event details could be obtained
         */
        get_pad_details(): [boolean, number, number, InputDevicePadSource | null, number];
        /**
         * Retrieves the event coordinates as a #graphene_point_t.
         *
         * @param position a #graphene_point_t
         */
        get_position(position: Graphene.Point): void;
        /**
         * Retrieves the related actor of a crossing event.
         *
         * @returns the related #ClutterActor, or %NULL
         */
        get_related(): Actor;
        get_relative_motion(
            dx: number,
            dy: number,
            dx_unaccel: number,
            dy_unaccel: number,
            dx_constrained: number,
            dy_constrained: number,
        ): boolean;
        /**
         * Retrieves the precise scrolling information of `event`.
         *
         * The `event` has to have a #ClutterScrollEvent.direction value
         * of %CLUTTER_SCROLL_SMOOTH.
         */
        get_scroll_delta(): [number, number];
        /**
         * Retrieves the direction of the scrolling of `event`
         *
         * @returns the scrolling direction
         */
        get_scroll_direction(): ScrollDirection;
        /**
         * Returns the #ClutterScrollFinishFlags of an scroll event. Those
         * can be used to determine whether post-scroll effects like kinetic
         * scrolling should be applied.
         *
         * @returns The scroll finish flags
         */
        get_scroll_finish_flags(): ScrollFinishFlags;
        /**
         * Returns the #ClutterScrollFlags of an scroll event.
         *
         * @returns The scroll flags
         */
        get_scroll_flags(): ScrollFlags;
        /**
         * Returns the #ClutterScrollSource that applies to an scroll event.
         *
         * @returns The source of scroll events
         */
        get_scroll_source(): ScrollSource;
        /**
         * Retrieves the source #ClutterActor the event originated from, or
         * NULL if the event has no source.
         *
         * @returns a #ClutterActor
         */
        get_source(): Actor;
        /**
         * Retrieves the hardware device that originated the event.
         *
         * @returns a pointer to a #ClutterInputDevice
         *   or %NULL
         */
        get_source_device(): InputDevice;
        /**
         * Retrieves the modifier state of the event. In case the window system
         * supports reporting latched and locked modifiers, this function returns
         * the effective state.
         *
         * @returns the modifier state parameter, or 0
         */
        get_state(): ModifierType;
        /**
         * Retrieves the time of the event.
         *
         * @returns the time of the event, or %CLUTTER_CURRENT_TIME
         */
        get_time(): number;
        get_time_us(): number;
        /**
         * Returns the number of fingers that is triggering the touchpad gesture.
         *
         * @returns the number of fingers in the gesture.4
         */
        get_touchpad_gesture_finger_count(): number;
        /**
         * Checks whether `event` has the Control modifier mask set.
         *
         * @returns %TRUE if the event has the Control modifier mask set
         */
        has_control_modifier(): boolean;
        /**
         * Checks whether `event` has the Shift modifier mask set.
         *
         * @returns %TRUE if the event has the Shift modifier mask set
         */
        has_shift_modifier(): boolean;
        /**
         * Checks whether a pointer `event` has been generated by the windowing
         * system. The returned value can be used to distinguish between events
         * synthesized by the windowing system itself (as opposed by Clutter).
         *
         * @returns %TRUE if the event is pointer emulated
         */
        is_pointer_emulated(): boolean;
        /**
         * Puts a copy of the event on the back of the event queue. The event will
         * have the %CLUTTER_EVENT_FLAG_SYNTHETIC flag set. If the source is set
         * event signals will be emitted for this source and capture/bubbling for
         * its ancestors. If the source is not set it will be generated by picking
         * or use the actor that currently has keyboard focus
         */
        put(): void;
        /**
         * Retrieves the type of the event.
         *
         * @returns a #ClutterEventType
         */
        type(): EventType;
    }
    namespace Animatable {
        /**
         * Interface for implementing Animatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Finds the [class`GObject`.ParamSpec] for `property_name`
             *
             * @param property_name the name of the animatable property to find
             */
            vfunc_find_property(property_name: string): GObject.ParamSpec;
            /**
             * Get animated actor.
             */
            vfunc_get_actor(): Actor;
            /**
             * Retrieves the current state of `property_name` and sets `value` with it
             *
             * @param property_name the name of the animatable property to retrieve
             * @param value a #GValue initialized to the type of the property to retrieve
             */
            vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
            /**
             * Asks a #ClutterAnimatable implementation to interpolate a
             * a named property between the initial and final values of
             * a #ClutterInterval, using `progress` as the interpolation
             * value, and store the result inside `value`.
             *
             * This function should be used for every property animation
             * involving `ClutterAnimatable`s.
             *
             * @param property_name the name of the property to interpolate
             * @param interval a #ClutterInterval with the animation range
             * @param progress the progress to use to interpolate between the
             *   initial and final values of the `interval`
             */
            vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
            /**
             * Sets the current state of `property_name` to `value`
             *
             * @param property_name the name of the animatable property to set
             * @param value the value of the animatable property to set
             */
            vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface AnimatableNamespace {
        $gtype: GObject.GType<Animatable>;
        prototype: Animatable;
    }
    interface Animatable extends GObject.Object, Animatable.Interface {
        // Methods
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         *
         * @returns The #GParamSpec for the given property
         *   or %NULL
         * @param property_name the name of the animatable property to find
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         *
         * @returns a #ClutterActor
         */
        get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         *
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         *
         * @returns %TRUE if the interpolation was successful,
         *   and %FALSE otherwise
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the
         *   initial and final values of the `interval`
         */
        interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         *
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
    }
    export const Animatable: AnimatableNamespace & (new () => Animatable);
    namespace Content {
        /**
         * Interface for implementing Content.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * virtual function; called each time a #ClutterContent is attached
             *   to a #ClutterActor.
             *
             * @param actor
             */
            vfunc_attached(actor: Actor): void;
            /**
             * virtual function; called each time a #ClutterContent is detached
             *   from a #ClutterActor.
             *
             * @param actor
             */
            vfunc_detached(actor: Actor): void;
            /**
             * Retrieves the natural size of the `content,` if any.
             *
             * The natural size of a #ClutterContent is defined as the size the content
             * would have regardless of the allocation of the actor that is painting it,
             * for instance the size of an image data.
             */
            vfunc_get_preferred_size(): [boolean, number, number];
            /**
             * Invalidates a #ClutterContent.
             *
             * This function should be called by #ClutterContent implementations when
             * they change the way a the content should be painted regardless of the
             * actor state.
             */
            vfunc_invalidate(): void;
            /**
             * Signals that `content'`s size changed. Attached actors with request mode
             * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
             *
             * Attached actors with other request modes are not redrawn. To redraw them
             * too, use [method`Clutter`.Content.invalidate].
             */
            vfunc_invalidate_size(): void;
            /**
             * virtual function; called each time the content needs to
             *   paint itself
             *
             * @param actor
             * @param node
             * @param paint_context
             */
            vfunc_paint_content(actor: Actor, node: PaintNode, paint_context: PaintContext): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ContentNamespace {
        $gtype: GObject.GType<Content>;
        prototype: Content;
    }
    interface Content extends GObject.Object, Content.Interface {
        // Methods
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         *
         * @returns %TRUE if the content has a preferred size, and %FALSE
         *   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use [method`Clutter`.Content.invalidate].
         */
        invalidate_size(): void;
    }
    export const Content: ContentNamespace & (new () => Content);
    export type PipelineGroup = any;
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
export default Clutter;
