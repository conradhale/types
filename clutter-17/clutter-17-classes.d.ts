import type Clutter from './clutter-17.d.ts';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
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
import { type AtkClasses } from '@girs/atk-1.0/atk-1.0';
declare namespace classes {
    abstract class Action extends ActorMeta {
        static '$gtype': GObject.GType<Action>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Action.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Action.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Action.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Action.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Action.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Action.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Action.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Action.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_handle_event(event: Clutter.Event): boolean;
        vfunc_register_sequence(event: Clutter.Event): boolean;
        vfunc_sequence_cancelled(sprite: Clutter.Sprite): void;
        vfunc_setup_sequence_relationship(_action_2: Clutter.Action, sprite: Clutter.Sprite): number;
        // Methods
        get_phase(): Clutter.EventPhase;
    }
    class Actor<A extends Clutter.LayoutManager = Clutter.LayoutManager, B extends Clutter.Content = Clutter.Content>
        extends GObjectClasses.InitiallyUnowned
        implements Atk.ImplementorIface, Clutter.Animatable
    {
        static '$gtype': GObject.GType<Actor>;
        // Properties
        /**
         * Object instance's name for assistive technology access.
         */
        get accessible_name(): string;
        set accessible_name(val: string);
        /**
         * Object instance's name for assistive technology access.
         */
        get accessibleName(): string;
        set accessibleName(val: string);
        /**
         * The accessible role of this object
         */
        get accessible_role(): Atk.Role;
        set accessible_role(val: Atk.Role);
        /**
         * The accessible role of this object
         */
        get accessibleRole(): Atk.Role;
        set accessibleRole(val: Atk.Role);
        set actions(val: Clutter.Action);
        /**
         * The allocation for the actor, in pixels
         *
         * This is property is read-only, but you might monitor it to know when an
         * actor moves or resizes
         */
        get allocation(): Clutter.ActorBox;
        /**
         * Paints a solid fill of the actor's allocation using the specified
         * color.
         *
         * The [property`Clutter`.Actor:background-color] property is animatable.
         */
        get background_color(): Cogl.Color;
        set background_color(val: Cogl.Color);
        /**
         * Paints a solid fill of the actor's allocation using the specified
         * color.
         *
         * The [property`Clutter`.Actor:background-color] property is animatable.
         */
        get backgroundColor(): Cogl.Color;
        set backgroundColor(val: Cogl.Color);
        /**
         * Whether the [property`Clutter`.Actor:background-color] property has been set.
         */
        get background_color_set(): boolean;
        /**
         * Whether the [property`Clutter`.Actor:background-color] property has been set.
         */
        get backgroundColorSet(): boolean;
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
        get child_transform(): Graphene.Matrix;
        set child_transform(val: Graphene.Matrix);
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
        get childTransform(): Graphene.Matrix;
        set childTransform(val: Graphene.Matrix);
        /**
         * Whether the [property`Clutter`.Actor:child-transform] property is set.
         */
        get child_transform_set(): boolean;
        /**
         * Whether the [property`Clutter`.Actor:child-transform] property is set.
         */
        get childTransformSet(): boolean;
        /**
         * The visible region of the actor, in actor-relative coordinates,
         * expressed as a #graphene_rect_t.
         *
         * Setting this property to %NULL will unset the existing clip.
         *
         * Setting this property will change the [property`Clutter`.Actor:has-clip]
         * property as a side effect.
         */
        get clip_rect(): Graphene.Rect;
        set clip_rect(val: Graphene.Rect);
        /**
         * The visible region of the actor, in actor-relative coordinates,
         * expressed as a #graphene_rect_t.
         *
         * Setting this property to %NULL will unset the existing clip.
         *
         * Setting this property will change the [property`Clutter`.Actor:has-clip]
         * property as a side effect.
         */
        get clipRect(): Graphene.Rect;
        set clipRect(val: Graphene.Rect);
        /**
         * Whether the clip region should track the allocated area
         * of the actor.
         *
         * This property is ignored if a clip area has been explicitly
         * set using clutter_actor_set_clip().
         */
        get clip_to_allocation(): boolean;
        set clip_to_allocation(val: boolean);
        /**
         * Whether the clip region should track the allocated area
         * of the actor.
         *
         * This property is ignored if a clip area has been explicitly
         * set using clutter_actor_set_clip().
         */
        get clipToAllocation(): boolean;
        set clipToAllocation(val: boolean);
        /**
         * The #ClutterColorState contains the properties like colorspace for each
         * actors.
         */
        get color_state(): Clutter.ColorState;
        set color_state(val: Clutter.ColorState);
        /**
         * The #ClutterColorState contains the properties like colorspace for each
         * actors.
         */
        get colorState(): Clutter.ColorState;
        set colorState(val: Clutter.ColorState);
        set constraints(val: Clutter.Constraint);
        /**
         * The #ClutterContent implementation that controls the content
         * of the actor.
         */
        get content(): B;
        set content(val: B);
        /**
         * The bounding box for the #ClutterContent used by the actor.
         *
         * The value of this property is controlled by the [property`Clutter`.Actor:allocation]
         * and [property`Clutter`.Actor:content-gravity] properties of #ClutterActor.
         *
         * The bounding box for the content is guaranteed to never exceed the
         * allocation's of the actor.
         */
        get content_box(): Clutter.ActorBox;
        /**
         * The bounding box for the #ClutterContent used by the actor.
         *
         * The value of this property is controlled by the [property`Clutter`.Actor:allocation]
         * and [property`Clutter`.Actor:content-gravity] properties of #ClutterActor.
         *
         * The bounding box for the content is guaranteed to never exceed the
         * allocation's of the actor.
         */
        get contentBox(): Clutter.ActorBox;
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
        get content_gravity(): Clutter.ContentGravity;
        set content_gravity(val: Clutter.ContentGravity);
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
        get contentGravity(): Clutter.ContentGravity;
        set contentGravity(val: Clutter.ContentGravity);
        /**
         * The repeat policy for the actor's [property`Clutter`.Actor:content].
         */
        get content_repeat(): Clutter.ContentRepeat;
        set content_repeat(val: Clutter.ContentRepeat);
        /**
         * The repeat policy for the actor's [property`Clutter`.Actor:content].
         */
        get contentRepeat(): Clutter.ContentRepeat;
        set contentRepeat(val: Clutter.ContentRepeat);
        /**
         * The %ClutterContext of the actor
         */
        get context(): Clutter.Context;
        set effect(val: Clutter.Effect);
        /**
         * The actor's first child.
         */
        get first_child(): Clutter.Actor;
        /**
         * The actor's first child.
         */
        get firstChild(): Clutter.Actor;
        /**
         * This flag controls whether the [property`Clutter`.Actor:fixed-x] and
         * [property`Clutter`.Actor:fixed-y] properties are used
         */
        get fixed_position_set(): boolean;
        set fixed_position_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:fixed-x] and
         * [property`Clutter`.Actor:fixed-y] properties are used
         */
        get fixedPositionSet(): boolean;
        set fixedPositionSet(val: boolean);
        /**
         * The fixed X position of the actor in pixels.
         *
         * Writing this property sets [property`Clutter`.Actor:fixed-position-set]
         * property as well, as a side effect
         */
        get fixed_x(): number;
        set fixed_x(val: number);
        /**
         * The fixed X position of the actor in pixels.
         *
         * Writing this property sets [property`Clutter`.Actor:fixed-position-set]
         * property as well, as a side effect
         */
        get fixedX(): number;
        set fixedX(val: number);
        /**
         * The fixed Y position of the actor in pixels.
         *
         * Writing this property sets the [property`Clutter`.Actor:fixed-position-set]
         * property as well, as a side effect
         */
        get fixed_y(): number;
        set fixed_y(val: number);
        /**
         * The fixed Y position of the actor in pixels.
         *
         * Writing this property sets the [property`Clutter`.Actor:fixed-position-set]
         * property as well, as a side effect
         */
        get fixedY(): number;
        set fixedY(val: number);
        /**
         * Whether the actor has the [property`Clutter`.Actor:clip-rect] property set or not
         */
        get has_clip(): boolean;
        /**
         * Whether the actor has the [property`Clutter`.Actor:clip-rect] property set or not
         */
        get hasClip(): boolean;
        /**
         * Whether the actor contains the pointer of a #ClutterInputDevice
         * or not.
         */
        get has_pointer(): boolean;
        /**
         * Whether the actor contains the pointer of a #ClutterInputDevice
         * or not.
         */
        get hasPointer(): boolean;
        /**
         * Height of the actor (in pixels).  If written, forces the minimum and
         * natural size request of the actor to the given height. If read, returns
         * the allocated height if available, otherwise the height request.
         *
         * The [property`Clutter`.Actor:height] property is animatable.
         */
        get height(): number;
        set height(val: number);
        /**
         * The actor's last child.
         */
        get last_child(): Clutter.Actor;
        /**
         * The actor's last child.
         */
        get lastChild(): Clutter.Actor;
        /**
         * A delegate object for controlling the layout of the children of
         * an actor.
         */
        get layout_manager(): A;
        set layout_manager(val: A);
        /**
         * A delegate object for controlling the layout of the children of
         * an actor.
         */
        get layoutManager(): A;
        set layoutManager(val: A);
        get magnification_filter(): Clutter.ScalingFilter;
        set magnification_filter(val: Clutter.ScalingFilter);
        get magnificationFilter(): Clutter.ScalingFilter;
        set magnificationFilter(val: Clutter.ScalingFilter);
        /**
         * Whether the actor is mapped (will be painted when the stage
         * to which it belongs is mapped)
         */
        get mapped(): boolean;
        /**
         * The margin (in pixels) from the bottom of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-bottom] property is animatable.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * The margin (in pixels) from the bottom of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-bottom] property is animatable.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * The margin (in pixels) from the left of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-left] property is animatable.
         */
        get margin_left(): number;
        set margin_left(val: number);
        /**
         * The margin (in pixels) from the left of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-left] property is animatable.
         */
        get marginLeft(): number;
        set marginLeft(val: number);
        /**
         * The margin (in pixels) from the right of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-right] property is animatable.
         */
        get margin_right(): number;
        set margin_right(val: number);
        /**
         * The margin (in pixels) from the right of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-right] property is animatable.
         */
        get marginRight(): number;
        set marginRight(val: number);
        /**
         * The margin (in pixels) from the top of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-top] property is animatable.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * The margin (in pixels) from the top of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-top] property is animatable.
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * A forced minimum height request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:min-height-set] property
         * as well, as a side effect. This property overrides the usual height
         * request of the actor.
         */
        get min_height(): number;
        set min_height(val: number);
        /**
         * A forced minimum height request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:min-height-set] property
         * as well, as a side effect. This property overrides the usual height
         * request of the actor.
         */
        get minHeight(): number;
        set minHeight(val: number);
        /**
         * This flag controls whether the [property`Clutter`.Actor:min-height] property
         * is used
         */
        get min_height_set(): boolean;
        set min_height_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:min-height] property
         * is used
         */
        get minHeightSet(): boolean;
        set minHeightSet(val: boolean);
        /**
         * A forced minimum width request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:min-width-set] property
         * as well, as a side effect.
         *
         * This property overrides the usual width request of the actor.
         */
        get min_width(): number;
        set min_width(val: number);
        /**
         * A forced minimum width request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:min-width-set] property
         * as well, as a side effect.
         *
         * This property overrides the usual width request of the actor.
         */
        get minWidth(): number;
        set minWidth(val: number);
        /**
         * This flag controls whether the [property`Clutter`.Actor:min-width] property
         * is used
         */
        get min_width_set(): boolean;
        set min_width_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:min-width] property
         * is used
         */
        get minWidthSet(): boolean;
        set minWidthSet(val: boolean);
        get minification_filter(): Clutter.ScalingFilter;
        set minification_filter(val: Clutter.ScalingFilter);
        get minificationFilter(): Clutter.ScalingFilter;
        set minificationFilter(val: Clutter.ScalingFilter);
        /**
         * The name of the actor
         */
        get name(): string;
        set name(val: string);
        /**
         * A forced natural height request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:natural-height-set]
         * property as well, as a side effect. This property overrides the
         * usual height request of the actor
         */
        get natural_height(): number;
        set natural_height(val: number);
        /**
         * A forced natural height request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:natural-height-set]
         * property as well, as a side effect. This property overrides the
         * usual height request of the actor
         */
        get naturalHeight(): number;
        set naturalHeight(val: number);
        /**
         * This flag controls whether the [property`Clutter`.Actor:natural-height] property
         * is used
         */
        get natural_height_set(): boolean;
        set natural_height_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:natural-height] property
         * is used
         */
        get naturalHeightSet(): boolean;
        set naturalHeightSet(val: boolean);
        /**
         * A forced natural width request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:natural-width-set]
         * property as well, as a side effect. This property overrides the
         * usual width request of the actor
         */
        get natural_width(): number;
        set natural_width(val: number);
        /**
         * A forced natural width request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:natural-width-set]
         * property as well, as a side effect. This property overrides the
         * usual width request of the actor
         */
        get naturalWidth(): number;
        set naturalWidth(val: number);
        /**
         * This flag controls whether the [property`Clutter`.Actor:natural-width] property
         * is used
         */
        get natural_width_set(): boolean;
        set natural_width_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:natural-width] property
         * is used
         */
        get naturalWidthSet(): boolean;
        set naturalWidthSet(val: boolean);
        /**
         * Determines the conditions in which the actor will be redirected
         * to an offscreen framebuffer while being painted. For example this
         * can be used to cache an actor in a framebuffer or for improved
         * handling of transparent actors. See
         * clutter_actor_set_offscreen_redirect() for details.
         */
        get offscreen_redirect(): Clutter.OffscreenRedirect;
        set offscreen_redirect(val: Clutter.OffscreenRedirect);
        /**
         * Determines the conditions in which the actor will be redirected
         * to an offscreen framebuffer while being painted. For example this
         * can be used to cache an actor in a framebuffer or for improved
         * handling of transparent actors. See
         * clutter_actor_set_offscreen_redirect() for details.
         */
        get offscreenRedirect(): Clutter.OffscreenRedirect;
        set offscreenRedirect(val: Clutter.OffscreenRedirect);
        /**
         * Opacity of an actor, between 0 (fully transparent) and
         * 255 (fully opaque)
         *
         * The [property`Clutter`.Actor:opacity] property is animatable.
         */
        get opacity(): number;
        set opacity(val: number);
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
        get pivot_point(): Graphene.Point;
        set pivot_point(val: Graphene.Point);
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
        get pivotPoint(): Graphene.Point;
        set pivotPoint(val: Graphene.Point);
        /**
         * The Z component of the [property`Clutter`.Actor:pivot-point], expressed as a value
         * along the Z axis.
         *
         * The [property`Clutter`.Actor:pivot-point-z] property is animatable.
         */
        get pivot_point_z(): number;
        set pivot_point_z(val: number);
        /**
         * The Z component of the [property`Clutter`.Actor:pivot-point], expressed as a value
         * along the Z axis.
         *
         * The [property`Clutter`.Actor:pivot-point-z] property is animatable.
         */
        get pivotPointZ(): number;
        set pivotPointZ(val: number);
        /**
         * The position of the origin of the actor.
         *
         * This property is a shorthand for setting and getting the
         * [property`Clutter`.Actor:x] and [property`Clutter`.Actor:y] properties at the same
         * time.
         *
         * The [property`Clutter`.Actor:position] property is animatable.
         */
        get position(): Graphene.Point;
        set position(val: Graphene.Point);
        /**
         * Whether the actor is reactive to events or not
         *
         * Only reactive actors will emit event-related signals
         */
        get reactive(): boolean;
        set reactive(val: boolean);
        /**
         * Whether the actor has been realized
         */
        get realized(): boolean;
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
        get request_mode(): Clutter.RequestMode;
        set request_mode(val: Clutter.RequestMode);
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
        get requestMode(): Clutter.RequestMode;
        set requestMode(val: Clutter.RequestMode);
        /**
         * The rotation angle on the X axis.
         *
         * The [property`Clutter`.Actor:rotation-angle-x] property is animatable.
         */
        get rotation_angle_x(): number;
        set rotation_angle_x(val: number);
        /**
         * The rotation angle on the X axis.
         *
         * The [property`Clutter`.Actor:rotation-angle-x] property is animatable.
         */
        get rotationAngleX(): number;
        set rotationAngleX(val: number);
        /**
         * The rotation angle on the Y axis
         *
         * The [property`Clutter`.Actor:rotation-angle-y] property is animatable.
         */
        get rotation_angle_y(): number;
        set rotation_angle_y(val: number);
        /**
         * The rotation angle on the Y axis
         *
         * The [property`Clutter`.Actor:rotation-angle-y] property is animatable.
         */
        get rotationAngleY(): number;
        set rotationAngleY(val: number);
        /**
         * The rotation angle on the Z axis
         *
         * The [property`Clutter`.Actor:rotation-angle-z] property is animatable.
         */
        get rotation_angle_z(): number;
        set rotation_angle_z(val: number);
        /**
         * The rotation angle on the Z axis
         *
         * The [property`Clutter`.Actor:rotation-angle-z] property is animatable.
         */
        get rotationAngleZ(): number;
        set rotationAngleZ(val: number);
        /**
         * The horizontal scale of the actor.
         *
         * The [property`Clutter`.Actor:scale-x] property is animatable.
         */
        get scale_x(): number;
        set scale_x(val: number);
        /**
         * The horizontal scale of the actor.
         *
         * The [property`Clutter`.Actor:scale-x] property is animatable.
         */
        get scaleX(): number;
        set scaleX(val: number);
        /**
         * The vertical scale of the actor.
         *
         * The [property`Clutter`.Actor:scale-y] property is animatable.
         */
        get scale_y(): number;
        set scale_y(val: number);
        /**
         * The vertical scale of the actor.
         *
         * The [property`Clutter`.Actor:scale-y] property is animatable.
         */
        get scaleY(): number;
        set scaleY(val: number);
        /**
         * The scale factor of the actor along the Z axis.
         *
         * The [property`Clutter`.Actor:scale-y] property is animatable.
         */
        get scale_z(): number;
        set scale_z(val: number);
        /**
         * The scale factor of the actor along the Z axis.
         *
         * The [property`Clutter`.Actor:scale-y] property is animatable.
         */
        get scaleZ(): number;
        set scaleZ(val: number);
        /**
         * If %TRUE, the actor is automatically shown when parented.
         *
         * Calling clutter_actor_hide() on an actor which has not been
         * parented will set this property to %FALSE as a side effect.
         */
        get show_on_set_parent(): boolean;
        set show_on_set_parent(val: boolean);
        /**
         * If %TRUE, the actor is automatically shown when parented.
         *
         * Calling clutter_actor_hide() on an actor which has not been
         * parented will set this property to %FALSE as a side effect.
         */
        get showOnSetParent(): boolean;
        set showOnSetParent(val: boolean);
        /**
         * The size of the actor.
         *
         * This property is a shorthand for setting and getting the
         * [property`Clutter`.Actor:width] and [property`Clutter`.Actor:height]
         * at the same time.
         *
         * The [property`Clutter`.Actor:size] property is animatable.
         */
        get size(): Graphene.Size;
        set size(val: Graphene.Size);
        /**
         * The direction of the text inside a #ClutterActor.
         */
        get text_direction(): Clutter.TextDirection;
        set text_direction(val: Clutter.TextDirection);
        /**
         * The direction of the text inside a #ClutterActor.
         */
        get textDirection(): Clutter.TextDirection;
        set textDirection(val: Clutter.TextDirection);
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
        get transform(): Graphene.Matrix;
        set transform(val: Graphene.Matrix);
        /**
         * Whether the [property`Clutter`.Actor:transform] property is set.
         */
        get transform_set(): boolean;
        /**
         * Whether the [property`Clutter`.Actor:transform] property is set.
         */
        get transformSet(): boolean;
        /**
         * An additional translation applied along the X axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-x] property is animatable.
         */
        get translation_x(): number;
        set translation_x(val: number);
        /**
         * An additional translation applied along the X axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-x] property is animatable.
         */
        get translationX(): number;
        set translationX(val: number);
        /**
         * An additional translation applied along the Y axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-y] property is animatable.
         */
        get translation_y(): number;
        set translation_y(val: number);
        /**
         * An additional translation applied along the Y axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-y] property is animatable.
         */
        get translationY(): number;
        set translationY(val: number);
        /**
         * An additional translation applied along the Z axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-z] property is animatable.
         */
        get translation_z(): number;
        set translation_z(val: number);
        /**
         * An additional translation applied along the Z axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-z] property is animatable.
         */
        get translationZ(): number;
        set translationZ(val: number);
        /**
         * Whether the actor is set to be visible or not
         *
         * See also [property`Clutter`.Actor:mapped]
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Width of the actor (in pixels). If written, forces the minimum and
         * natural size request of the actor to the given width. If read, returns
         * the allocated width if available, otherwise the width request.
         *
         * The [property`Clutter`.Actor:width] property is animatable.
         */
        get width(): number;
        set width(val: number);
        /**
         * X coordinate of the actor in pixels. If written, forces a fixed
         * position for the actor. If read, returns the fixed position if any,
         * otherwise the allocation if available, otherwise 0.
         *
         * The [property`Clutter`.Actor:x] property is animatable.
         */
        get x(): number;
        set x(val: number);
        /**
         * The alignment of an actor on the X axis, if the actor has been given
         * extra space for its allocation. See also the [property`Clutter`.Actor:x-expand]
         * property.
         */
        get x_align(): Clutter.ActorAlign;
        set x_align(val: Clutter.ActorAlign);
        /**
         * The alignment of an actor on the X axis, if the actor has been given
         * extra space for its allocation. See also the [property`Clutter`.Actor:x-expand]
         * property.
         */
        get xAlign(): Clutter.ActorAlign;
        set xAlign(val: Clutter.ActorAlign);
        /**
         * Whether a layout manager should assign more space to the actor on
         * the X axis.
         */
        get x_expand(): boolean;
        set x_expand(val: boolean);
        /**
         * Whether a layout manager should assign more space to the actor on
         * the X axis.
         */
        get xExpand(): boolean;
        set xExpand(val: boolean);
        /**
         * Y coordinate of the actor in pixels. If written, forces a fixed
         * position for the actor.  If read, returns the fixed position if
         * any, otherwise the allocation if available, otherwise 0.
         *
         * The [property`Clutter`.Actor:y] property is animatable.
         */
        get y(): number;
        set y(val: number);
        /**
         * The alignment of an actor on the Y axis, if the actor has been given
         * extra space for its allocation.
         */
        get y_align(): Clutter.ActorAlign;
        set y_align(val: Clutter.ActorAlign);
        /**
         * The alignment of an actor on the Y axis, if the actor has been given
         * extra space for its allocation.
         */
        get yAlign(): Clutter.ActorAlign;
        set yAlign(val: Clutter.ActorAlign);
        /**
         * Whether a layout manager should assign more space to the actor on
         * the Y axis.
         */
        get y_expand(): boolean;
        set y_expand(val: boolean);
        /**
         * Whether a layout manager should assign more space to the actor on
         * the Y axis.
         */
        get yExpand(): boolean;
        set yExpand(val: boolean);
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
        get z_position(): number;
        set z_position(val: number);
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
        get zPosition(): number;
        set zPosition(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Actor.SignalSignatures;
        // Fields
        flags: number;
        // Constructors
        constructor(properties?: Partial<Clutter.Actor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.Actor;
        // Signals
        connect<K extends keyof Clutter.Actor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Actor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Actor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Actor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Actor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Actor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        static get_layout_manager_type(): GObject.GType;
        static set_layout_manager_type(type: GObject.GType): void;
        // Virtual methods
        /**
         * Assigns the size of a #ClutterActor from the given `box`.
         *
         * This function should only be called on the children of an actor when
         * overriding the [vfunc`Clutter`.Actor.allocate] virtual function.
         *
         * This function will adjust the stored allocation to take into account
         * the alignment flags set in the [property`Clutter`.Actor:x-align] and
         * [property`Clutter`.Actor:y-align] properties, as well as the margin values set in
         * the[property`Clutter`.Actor:margin-top], [property`Clutter`.Actor:margin-right],
         * [property`Clutter`.Actor:margin-bottom], and
         * [property`Clutter`.Actor:margin-left] properties.
         *
         * This function will respect the easing state of the #ClutterActor and
         * interpolate between the current allocation and the new one if the
         * easing state duration is a positive value.
         *
         * Actors can know from their allocation box whether they have moved
         * with respect to their parent actor. The `flags` parameter describes
         * additional information about the allocation, for instance whether
         * the parent has moved with respect to the stage, for example because
         * a grandparent's origin has moved.
         *
         * @param box new allocation of the actor, in parent-relative coordinates
         */
        vfunc_allocate(box: Clutter.ActorBox): void;
        /**
         * virtual function, used when applying the transformations
         *   to an actor before painting it or when transforming coordinates or
         *   the allocation; if the transformation calculated by this function may
         *   have changed, the cached transformation must be invalidated by calling
         *   clutter_actor_invalidate_transform(); it must chain up to the parent's
         *   implementation
         *
         * @param matrix
         */
        vfunc_apply_transform(matrix: Graphene.Matrix): void;
        /**
         * class handler for [signal`Clutter`.Actor::button-press-event]
         *
         * @param event
         */
        vfunc_button_press_event(event: Clutter.Event): boolean;
        /**
         * class handler for
         *   [signal`Clutter`.Actor::button-release-event]
         *
         * @param event
         */
        vfunc_button_release_event(event: Clutter.Event): boolean;
        vfunc_calculate_resource_scale(phase: number): number;
        /**
         * signal class closure for [signal`Clutter`.Actor::captured-event]
         *
         * @param event
         */
        vfunc_captured_event(event: Clutter.Event): boolean;
        vfunc_child_added(child: Clutter.Actor): void;
        vfunc_child_removed(child: Clutter.Actor): void;
        /**
         * Destroys an actor.  When an actor is destroyed, it will break any
         * references it holds to other objects.  If the actor is inside a
         * container, the actor will be removed.
         *
         * When you destroy a container, its children will be destroyed as well.
         */
        vfunc_destroy(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::enter-event]
         *
         * @param event
         */
        vfunc_enter_event(event: Clutter.Event): boolean;
        /**
         * class handler for [signal`Clutter`.Actor::event]
         *
         * @param event
         */
        vfunc_event(event: Clutter.Event): boolean;
        /**
         * Returns the accessible object that describes the actor to an
         * assistive technology.
         *
         * If no class-specific #AtkObject implementation is available for the
         * actor instance in question, it will inherit an #AtkObject
         * implementation from the first ancestor class for which such an
         * implementation is defined.
         *
         * The documentation of the [https://gnome.pages.gitlab.gnome.org/at-spi2-core/atk/](ATK)
         * library contains more information about accessible objects and
         * their uses.
         */
        vfunc_get_accessible(): Atk.Object;
        /**
         * virtual function, for sub-classes to define their
         *   #ClutterPaintVolume
         *
         * @param volume
         */
        vfunc_get_paint_volume(volume: Clutter.PaintVolume): boolean;
        /**
         * Computes the requested minimum and natural heights for an actor,
         * or if they are already computed, returns the cached values.
         *
         * An actor may not get its request - depending on the layout
         * manager that's in effect.
         *
         * A request should not incorporate the actor's scale or translation;
         * those transformations do not affect layout, only rendering.
         *
         * @param for_width available width to assume in computing desired height,
         *   or a negative value to indicate that no width is defined
         */
        vfunc_get_preferred_height(for_width: number): [number, number];
        /**
         * Computes the requested minimum and natural widths for an actor,
         * optionally depending on the specified height, or if they are
         * already computed, returns the cached values.
         *
         * An actor may not get its request - depending on the layout
         * manager that's in effect.
         *
         * A request should not incorporate the actor's scaleor translation;
         * those transformations do not affect layout, only rendering.
         *
         * @param for_height available height when computing the preferred width,
         *   or a negative value to indicate that no height is defined
         */
        vfunc_get_preferred_width(for_height: number): [number, number];
        /**
         * Asks the actor's implementation whether it may contain overlapping
         * primitives.
         *
         * For example; Clutter may use this to determine whether the painting
         * should be redirected to an offscreen buffer to correctly implement
         * the opacity property.
         *
         * Custom actors can override the default response by implementing the
         * [vfunc`Clutter`.Actor.has_overlaps]. See
         * [method`Clutter`.Actor.set_offscreen_redirect] for more information.
         */
        vfunc_has_overlaps(): boolean;
        /**
         * Flags an actor to be hidden. A hidden actor will not be
         * rendered on the stage.
         *
         * Actors are visible by default.
         *
         * If this function is called on an actor without a parent, the
         * [property`Clutter`.Actor:show-on-set-parent] property will be set to %FALSE
         * as a side-effect.
         */
        vfunc_hide(): void;
        /**
         * virtual function for containers and composite actors, to
         *   determine which children should be shown when calling
         *   clutter_actor_hide_all() on the actor. Defaults to calling
         *   clutter_actor_hide(). This virtual function is deprecated and it
         *   should not be overridden.
         */
        vfunc_hide_all(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::key-focus-in]
         */
        vfunc_key_focus_in(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::key-focus-out]
         */
        vfunc_key_focus_out(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::key-press-event]
         *
         * @param event
         */
        vfunc_key_press_event(event: Clutter.Event): boolean;
        /**
         * signal class closure for
         *   [signal`Clutter`.Actor::key-release-event]
         *
         * @param event
         */
        vfunc_key_release_event(event: Clutter.Event): boolean;
        /**
         * signal class closure for [signal`Clutter`.Actor::leave-event]
         *
         * @param event
         */
        vfunc_leave_event(event: Clutter.Event): boolean;
        /**
         * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
         * and realizes its children if they are visible. Does nothing if the
         * actor is not visible.
         *
         * Calling this function is strongly discouraged: the default
         * implementation of [vfunc`Clutter`.Actor.map] will map all the children
         * of an actor when mapping its parent.
         *
         * When overriding map, it is mandatory to chain up to the parent
         * implementation.
         */
        vfunc_map(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::motion-event]
         *
         * @param event
         */
        vfunc_motion_event(event: Clutter.Event): boolean;
        /**
         * Renders the actor to display.
         *
         * This function should not be called directly by applications.
         * Call clutter_actor_queue_redraw() to queue paints, instead.
         *
         * This function is context-aware, and will either cause a
         * regular paint or a pick paint.
         *
         * This function will call the [vfunc`Clutter`.Actor.paint] virtual
         * function.
         *
         * This function does not paint the actor if the actor is set to 0,
         * unless it is performing a pick paint.
         *
         * @param paint_context
         */
        vfunc_paint(paint_context: Clutter.PaintContext): void;
        /**
         * virtual function for creating paint nodes and attaching
         *   them to the render tree
         *
         * @param root
         * @param paint_context
         */
        vfunc_paint_node(root: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
        /**
         * signal class handler for the [signal`Clutter`.Actor::parent-set]
         *
         * @param old_parent
         */
        vfunc_parent_set(old_parent: Clutter.Actor): void;
        /**
         * Asks `actor` to perform a pick.
         *
         * @param pick_context
         */
        vfunc_pick(pick_context: Clutter.PickContext): void;
        /**
         * Indicates that the actor's size request or other layout-affecting
         * properties may have changed. This function is used inside #ClutterActor
         * subclass implementations, not by applications directly.
         *
         * Queueing a new layout automatically queues a redraw as well.
         */
        vfunc_queue_relayout(): void;
        /**
         * Realization informs the actor that it is attached to a stage. It
         * can use this to allocate resources if it wanted to delay allocation
         * until it would be rendered. However it is perfectly acceptable for
         * an actor to create resources before being realized because Clutter
         * only ever has a single rendering context so that actor is free to
         * be moved from one stage to another.
         *
         * This function does nothing if the actor is already realized.
         *
         * Because a realized actor must have realized parent actors, calling
         * clutter_actor_realize() will also realize all parents of the actor.
         *
         * This function does not realize child actors, except in the special
         * case that realizing the stage, when the stage is visible, will
         * suddenly map (and thus realize) the children of the stage.
         */
        vfunc_realize(): void;
        vfunc_resource_scale_changed(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::scroll-event]
         *
         * @param event
         */
        vfunc_scroll_event(event: Clutter.Event): boolean;
        /**
         * Flags an actor to be displayed. An actor that isn't shown will not
         * be rendered on the stage.
         *
         * Actors are visible by default.
         *
         * If this function is called on an actor without a parent, the
         * [property`Clutter`.Actor:show-on-set-parent] will be set to %TRUE as a side
         * effect.
         */
        vfunc_show(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::touch-event]
         *
         * @param event
         */
        vfunc_touch_event(event: Clutter.Event): boolean;
        /**
         * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
         * unmaps its children if they were mapped.
         *
         * Calling this function is not encouraged: the default #ClutterActor
         * implementation of [vfunc`Clutter`.Actor.unmap] will also unmap any
         * eventual children by default when their parent is unmapped.
         *
         * When overriding [vfunc`Clutter`.Actor.unmap], it is mandatory to
         * chain up to the parent implementation.
         *
         * It is important to note that the implementation of the
         * [vfunc`Clutter`.Actor.unmap] virtual function may be called after
         * the [vfunc`Clutter`.Actor.destroy] or the [vfunc`GObject`.Object.dispose]
         * implementation, but it is guaranteed to be called before the
         * [vfunc`GObject`.Object.finalize] implementation.
         */
        vfunc_unmap(): void;
        /**
         * Unrealization informs the actor that it may be being destroyed or
         * moved to another stage. The actor may want to destroy any
         * underlying graphics resources at this point. However it is
         * perfectly acceptable for it to retain the resources until the actor
         * is destroyed because Clutter only ever uses a single rendering
         * context and all of the graphics resources are valid on any stage.
         *
         * Because mapped actors must be realized, actors may not be
         * unrealized if they are mapped. This function hides the actor to be
         * sure it isn't mapped, an application-visible side effect that you
         * may not be expecting.
         *
         * This function should not be called by application code.
         *
         * This function should not really be in the public API, because
         * there isn't a good reason to call it. ClutterActor will already
         * unrealize things for you when it's important to do so.
         *
         * If you were using clutter_actor_unrealize() in a dispose
         * implementation, then don't, just chain up to ClutterActor's
         * dispose.
         *
         * If you were using clutter_actor_unrealize() to implement
         * unrealizing children of your container, then don't, ClutterActor
         * will already take care of that.
         */
        vfunc_unrealize(): void;
        // Methods
        /**
         * This method adds `state` as one of the accessible states for
         * `actor`. The list of states of an actor describes the current state
         * of user interface element `actor` and is provided so that assistive
         * technologies know how to present `actor` to the user.
         *
         * Usually you will have no need to add accessible states for an
         * object, as the accessible object can extract most of the states
         * from the object itself.
         * This method is only required when one cannot extract the
         * information automatically from the object itself (i.e.: a generic
         * container used as a toggle menu item will not automatically include
         * the toggled state).
         *
         * @param state #AtkStateType state to add
         */
        add_accessible_state(state: Atk.StateType | null): void;
        /**
         * Adds `action` to the list of actions applied to `self`
         *
         * A #ClutterAction can only belong to one actor at a time
         *
         * The #ClutterActor will hold a reference on `action` until either
         * [method`Clutter`.Actor.remove_action] or [method`Clutter`.Actor.clear_actions]
         * is called
         *
         * @param action a #ClutterAction
         */
        add_action(action: Clutter.Action): void;
        add_action_full(name: string, phase: Clutter.EventPhase | null, action: Clutter.Action): void;
        /**
         * A convenience function for setting the name of a #ClutterAction
         * while adding it to the list of actions applied to `self`
         *
         * This function is the logical equivalent of:
         *
         * ```c
         *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (action), name);
         *   clutter_actor_add_action (self, action);
         * ```
         *
         * @param name the name to set on the action
         * @param action a #ClutterAction
         */
        add_action_with_name(name: string, action: Clutter.Action): void;
        /**
         * Adds `child` to the children of `self`.
         *
         * This function will acquire a reference on `child` that will only
         * be released when calling [method`Clutter`.Actor.remove_child].
         *
         * This function will take into consideration the depth
         * of `child,` and will keep the list of children sorted.
         *
         * This function will emit the [signal`Clutter`.Actor::child-added] signal
         * on `self`.
         *
         * @param child a #ClutterActor
         */
        add_child(child: Clutter.Actor): void;
        /**
         * Adds `constraint` to the list`of `ClutterConstraint`s applied
         * to `self`
         *
         * The #ClutterActor will hold a reference on the `constraint` until
         * either [method`Clutter`.Actor.remove_constraint] or
         * [method`Clutter`.Actor.clear_constraints] is called.
         *
         * @param constraint a #ClutterConstraint
         */
        add_constraint(constraint: Clutter.Constraint): void;
        /**
         * A convenience function for setting the name of a #ClutterConstraint
         * while adding it to the list of constraints applied to `self`
         *
         * This function is the logical equivalent of:
         *
         * ```c
         *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), name);
         *   clutter_actor_add_constraint (self, constraint);
         * ```
         *
         * @param name the name to set on the constraint
         * @param constraint a #ClutterConstraint
         */
        add_constraint_with_name(name: string, constraint: Clutter.Constraint): void;
        /**
         * Adds `effect` to the list of [class`Clutter`.Effect]s applied to `self`
         *
         * The #ClutterActor will hold a reference on the `effect` until either
         * [method`Clutter`.Actor.remove_effect] or [method`Clutter`.Actor.clear_effects] is
         * called.
         *
         * @param effect a #ClutterEffect
         */
        add_effect(effect: Clutter.Effect): void;
        /**
         * A convenience function for setting the name of a #ClutterEffect
         * while adding it to the list of effectss applied to `self`
         *
         * This function is the logical equivalent of:
         *
         * ```c
         *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (effect), name);
         *   clutter_actor_add_effect (self, effect);
         * ```
         *
         * @param name the name to set on the effect
         * @param effect a #ClutterEffect
         */
        add_effect_with_name(name: string, effect: Clutter.Effect): void;
        /**
         * Adds a `transition` to the #ClutterActor's list of animations.
         *
         * The `name` string is a per-actor unique identifier of the `transition:` only
         * one #ClutterTransition can be associated to the specified `name`.
         *
         * The `transition` will be started once added.
         *
         * This function will take a reference on the `transition`.
         *
         * This function is usually called implicitly when modifying an animatable
         * property.
         *
         * @param name the name of the transition to add
         * @param transition the #ClutterTransition to add
         */
        add_transition(name: string, transition: Clutter.Transition): void;
        /**
         * Assigns the size of a #ClutterActor from the given `box`.
         *
         * This function should only be called on the children of an actor when
         * overriding the [vfunc`Clutter`.Actor.allocate] virtual function.
         *
         * This function will adjust the stored allocation to take into account
         * the alignment flags set in the [property`Clutter`.Actor:x-align] and
         * [property`Clutter`.Actor:y-align] properties, as well as the margin values set in
         * the[property`Clutter`.Actor:margin-top], [property`Clutter`.Actor:margin-right],
         * [property`Clutter`.Actor:margin-bottom], and
         * [property`Clutter`.Actor:margin-left] properties.
         *
         * This function will respect the easing state of the #ClutterActor and
         * interpolate between the current allocation and the new one if the
         * easing state duration is a positive value.
         *
         * Actors can know from their allocation box whether they have moved
         * with respect to their parent actor. The `flags` parameter describes
         * additional information about the allocation, for instance whether
         * the parent has moved with respect to the stage, for example because
         * a grandparent's origin has moved.
         *
         * @param box new allocation of the actor, in parent-relative coordinates
         */
        allocate(box: Clutter.ActorBox): void;
        /**
         * Allocates `self` by taking into consideration the available allocation
         * area; an alignment factor on either axis; and whether the actor should
         * fill the allocation on either axis.
         *
         * The `box` should contain the available allocation width and height;
         * if the x1 and y1 members of #ClutterActorBox are not set to 0, the
         * allocation will be offset by their value.
         *
         * This function takes into consideration the geometry request specified by
         * the [property`Clutter`.Actor:request-mode] property, and the text direction.
         *
         * This function is useful for fluid layout managers using legacy alignment
         * flags. Newly written layout managers should use the
         * [property`Clutter`.Actor:x-align] and [property`Clutter`.Actor:y-align]
         * properties, instead, and just call [method`Clutter`.Actor.allocate]
         * inside their [vfunc`Clutter`.Actor.allocate] implementation.
         *
         * @param box a #ClutterActorBox, containing the available width and height
         * @param x_align the horizontal alignment, between 0 and 1
         * @param y_align the vertical alignment, between 0 and 1
         * @param x_fill whether the actor should fill horizontally
         * @param y_fill whether the actor should fill vertically
         */
        allocate_align_fill(
            box: Clutter.ActorBox,
            x_align: number,
            y_align: number,
            x_fill: boolean,
            y_fill: boolean,
        ): void;
        /**
         * Allocates `self` taking into account the #ClutterActor's
         * preferred size, but limiting it to the maximum available width
         * and height provided.
         *
         * This function will do the right thing when dealing with the
         * actor's request mode.
         *
         * The implementation of this function is equivalent to:
         *
         * ```c
         *   if (request_mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
         *     {
         *       clutter_actor_get_preferred_width (self, available_height,
         *                                          &min_width,
         *                                          &natural_width);
         *       width = CLAMP (natural_width, min_width, available_width);
         *
         *       clutter_actor_get_preferred_height (self, width,
         *                                           &min_height,
         *                                           &natural_height);
         *       height = CLAMP (natural_height, min_height, available_height);
         *     }
         *   else if (request_mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
         *     {
         *       clutter_actor_get_preferred_height (self, available_width,
         *                                           &min_height,
         *                                           &natural_height);
         *       height = CLAMP (natural_height, min_height, available_height);
         *
         *       clutter_actor_get_preferred_width (self, height,
         *                                          &min_width,
         *                                          &natural_width);
         *       width = CLAMP (natural_width, min_width, available_width);
         *     }
         *   else if (request_mode == CLUTTER_REQUEST_CONTENT_SIZE)
         *     {
         *       clutter_content_get_preferred_size (content, &natural_width, &natural_height);
         *
         *       width = CLAMP (natural_width, 0, available_width);
         *       height = CLAMP (natural_height, 0, available_height);
         *     }
         *
         *   box.x1 = x; box.y1 = y;
         *   box.x2 = box.x1 + available_width;
         *   box.y2 = box.y1 + available_height;
         *   clutter_actor_allocate (self, &box);
         * ```
         *
         * This function can be used by fluid layout managers to allocate
         * an actor's preferred size without making it bigger than the area
         * available for the container.
         *
         * @param x the actor's X coordinate
         * @param y the actor's Y coordinate
         * @param available_width the maximum available width, or -1 to use the
         *   actor's natural width
         * @param available_height the maximum available height, or -1 to use the
         *   actor's natural height
         */
        allocate_available_size(x: number, y: number, available_width: number, available_height: number): void;
        /**
         * Allocates the natural size of `self`.
         *
         * This function is a utility call for #ClutterActor implementations
         * that allocates the actor's preferred natural size. It can be used
         * by fixed layout managers (like #ClutterGroup or so called
         * 'composite actors') inside the [vfunc`Clutter`.Actor.allocate]
         * implementation to give each child exactly how much space it
         * requires, regardless of the size of the parent.
         *
         * This function is not meant to be used by applications. It is also
         * not meant to be used outside the implementation of the
         * #ClutterActorClass.allocate virtual function.
         *
         * @param x the actor's X coordinate
         * @param y the actor's Y coordinate
         */
        allocate_preferred_size(x: number, y: number): void;
        /**
         * Transforms `point` in coordinates relative to the actor into
         * ancestor-relative coordinates using the relevant transform
         * stack (i.e. scale, rotation, etc).
         *
         * If `ancestor` is %NULL the ancestor will be the #ClutterStage. In
         * this case, the coordinates returned will be the coordinates on
         * the stage before the projection is applied. This is different from
         * the behaviour of clutter_actor_apply_transform_to_point().
         *
         * @param ancestor A #ClutterActor ancestor, or %NULL to use the
         *   default #ClutterStage
         * @param point A point as #graphene_point3d_t
         */
        apply_relative_transform_to_point(ancestor: Clutter.Actor | null, point: Graphene.Point3D): [Graphene.Point3D];
        /**
         * Transforms `point` in coordinates relative to the actor
         * into screen-relative coordinates with the current actor
         * transformation (i.e. scale, rotation, etc)
         *
         * @param point A point as #graphene_point3d_t
         */
        apply_transform_to_point(point: Graphene.Point3D): [Graphene.Point3D];
        /**
         * Binds a #GListModel to a #ClutterActor.
         *
         * If the #ClutterActor was already bound to a #GListModel, the previous
         * binding is destroyed.
         *
         * The existing children of #ClutterActor are destroyed when setting a
         * model, and new children are created and added, representing the contents
         * of the `model`. The #ClutterActor is updated whenever the `model` changes.
         * If `model` is %NULL, the #ClutterActor is left empty.
         *
         * When a #ClutterActor is bound to a model, adding and removing children
         * directly is undefined behaviour.4
         *
         * @param model a #GListModel
         * @param create_child_func a function that creates #ClutterActor instances
         *   from the contents of the `model`
         */
        bind_model(model: Gio.ListModel | null, create_child_func: Clutter.ActorCreateChildFunc): void;
        /**
         * Clears the list of actions applied to `self`
         */
        clear_actions(): void;
        /**
         * Clears the list of constraints applied to `self`
         */
        clear_constraints(): void;
        /**
         * Clears the list of effects applied to `self`
         */
        clear_effects(): void;
        /**
         * Determines if `descendant` is contained inside `self` (either as an
         * immediate child, or as a deeper descendant). If `self` and
         * `descendant` point to the same actor then it will also return %TRUE.
         *
         * @returns whether `descendent` is contained within `self`
         * @param descendant A #ClutterActor, possibly contained in `self`
         */
        contains(descendant: Clutter.Actor): boolean;
        /**
         * Run the next stage of the paint sequence. This function should only
         * be called within the implementation of the ‘run’ virtual of a
         * #ClutterEffect. It will cause the run method of the next effect to
         * be applied, or it will paint the actual actor if the current effect
         * is the last effect in the chain.
         *
         * @param paint_context
         */
        continue_paint(paint_context: Clutter.PaintContext): void;
        /**
         * Run the next stage of the pick sequence. This function should only
         * be called within the implementation of the ‘pick’ virtual of a
         * #ClutterEffect. It will cause the run method of the next effect to
         * be applied, or it will pick the actual actor if the current effect
         * is the last effect in the chain.
         *
         * @param pick_context
         */
        continue_pick(pick_context: Clutter.PickContext): void;
        /**
         * Creates a #PangoContext for the given actor. The #PangoContext
         * is already configured using the appropriate font map, resolution
         * and font options.
         *
         * See also [method`Clutter`.Actor.get_pango_context].
         *
         * @returns the newly created #PangoContext.
         *   Use g_object_unref() on the returned value to deallocate its
         *   resources
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new #PangoLayout from the same #PangoContext used
         * by the #ClutterActor. The #PangoLayout is already configured
         * with the font map, resolution and font options, and the
         * given `text`.
         *
         * If you want to keep around a #PangoLayout created by this
         * function you will have to connect to the #ClutterBackend::font-changed
         * and #ClutterBackend::resolution-changed signals, and call
         * pango_layout_context_changed() in response to them.
         *
         * @returns the newly created #PangoLayout.
         *   Use g_object_unref() when done
         * @param text the text to set on the #PangoLayout, or %NULL
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Creates a #ClutterPaintNode initialized using the state of the
         * given #ClutterActor, ready to be used inside the implementation
         * of the #ClutterActorClass.paint_node virtual function.
         *
         * The returned paint node has the geometry set to the size of the
         * [property`Clutter`.Actor:content-box] property; it uses the filters specified
         * in the [property`Clutter`.Actor:minification-filter]
         * and [property`Clutter`.Actor:magnification-filter]
         * properties; and respects the [property`Clutter`.Actor:content-repeat] property.
         *
         * @returns The newly created #ClutterPaintNode4
         * @param texture a #CoglTexture
         */
        create_texture_paint_node(texture: Cogl.Texture): Clutter.PaintNode;
        /**
         * Destroys an actor.  When an actor is destroyed, it will break any
         * references it holds to other objects.  If the actor is inside a
         * container, the actor will be removed.
         *
         * When you destroy a container, its children will be destroyed as well.
         */
        destroy(): void;
        /**
         * Destroys all children of `self`.
         *
         * This function releases the reference added by inserting a child
         * actor in the list of children of `self,` and ensures that the
         * [signal`Clutter`.Actor::destroy] signal is emitted on each child of the
         * actor.
         *
         * By default, #ClutterActor will emit the [signal`Clutter`.Actor::destroy] signal
         * when its reference count drops to 0; the default handler of the
         * [signal`Clutter`.Actor::destroy] signal will destroy all the children of an
         * actor. This function ensures that all children are destroyed, instead
         * of just removed from `self,` unlike [method`Clutter`.Actor.remove_all_children]
         * which will merely release the reference and remove each child.
         *
         * Unless you acquired an additional reference on each child of `self`
         * prior to calling [method`Clutter`.Actor.remove_all_children] and want to reuse
         * the actors, you should use [method`Clutter`.Actor.destroy_all_children] in
         * order to make sure that children are destroyed and signal handlers
         * are disconnected even in cases where circular references prevent this
         * from automatically happening through reference counting alone.
         */
        destroy_all_children(): void;
        /**
         * This function is used to emit an event on the main stage.
         * You should rarely need to use this function, except for
         * synthetising events.
         *
         * @returns the return value from the signal emission: %TRUE
         *   if the actor handled the event, or %FALSE if the event was
         *   not handled
         * @param event a #ClutterEvent
         * @param capture %TRUE if event in in capture phase, %FALSE otherwise.
         */
        event(event: Clutter.Event, capture: boolean): boolean;
        /**
         * Calculates the transformed screen coordinates of the four corners of
         * the actor; the returned vertices relate to the #ClutterActorBox
         * coordinates  as follows:
         *
         *  - v[0] contains (x1, y1)
         *  - v[1] contains (x2, y1)
         *  - v[2] contains (x1, y2)
         *  - v[3] contains (x2, y2)
         */
        get_abs_allocation_vertices(): [Graphene.Point3D[]];
        /**
         * Returns the accessible object that describes the actor to an
         * assistive technology.
         *
         * If no class-specific #AtkObject implementation is available for the
         * actor instance in question, it will inherit an #AtkObject
         * implementation from the first ancestor class for which such an
         * implementation is defined.
         *
         * The documentation of the [https://gnome.pages.gitlab.gnome.org/at-spi2-core/atk/](ATK)
         * library contains more information about accessible objects and
         * their uses.
         *
         * @returns the #AtkObject associated with `actor`
         */
        get_accessible(): Atk.Object;
        /**
         * Gets the accessible name for this widget. See
         * clutter_actor_set_accessible_name() for more information.
         *
         * @returns a character string representing the accessible name
         * of the widget.
         */
        get_accessible_name(): string;
        /**
         * Gets the #AtkRole for this widget. See
         * clutter_actor_set_accessible_role() for more information.
         *
         * @returns accessible #AtkRole for this widget
         */
        get_accessible_role(): Atk.Role;
        /**
         * Retrieves the #ClutterAction with the given name in the list
         * of actions applied to `self`
         *
         * @returns a #ClutterAction for the given
         *   name, or %NULL. The returned #ClutterAction is owned by the
         *   actor and it should not be unreferenced directly
         * @param name the name of the action to retrieve
         */
        get_action(name: string): Clutter.Action | null;
        /**
         * Retrieves the list of actions applied to `self`
         *
         * @returns a copy
         *   of the list of `ClutterAction`s. The contents of the list are
         *   owned by the #ClutterActor. Use g_list_free() to free the resources
         *   allocated by the returned #GList
         */
        get_actions(): Clutter.Action[];
        /**
         * Gets the layout box an actor has been assigned. The allocation can
         * only be assumed valid inside a paint() method; anywhere else, it
         * may be out-of-date.
         *
         * An allocation does not incorporate the actor's scale or translation;
         * those transformations do not affect layout, only rendering.
         *
         * Do not call any of the clutter_actor_get_allocation_*() family
         * of functions inside the implementation of the get_preferred_width()
         * or get_preferred_height() virtual functions.
         */
        get_allocation_box(): [Clutter.ActorBox];
        /**
         * Retrieves the color set using [method`Clutter`.Actor.set_background_color].
         */
        get_background_color(): [Cogl.Color];
        /**
         * Retrieves the actor at the given `index_` inside the list of
         * children of `self`.
         *
         * @returns a pointer to a #ClutterActor,
         *   or %NULL
         * @param index_ the position in the list of children
         */
        get_child_at_index(index_: number): Clutter.Actor | null;
        /**
         * Retrieves the child transformation matrix set using
         * [method`Clutter`.Actor.set_child_transform]; if none is currently set,
         * the `transform` matrix will be initialized to the identity matrix.
         */
        get_child_transform(): [Graphene.Matrix];
        /**
         * Retrieves the list of children of `self`.
         *
         * @returns A newly
         *   allocated #GList of `ClutterActor`s. Use g_list_free() when
         *   done.
         */
        get_children(): Clutter.Actor[];
        /**
         * Gets the clip area for `self,` if any is set.
         */
        get_clip(): [number, number, number, number];
        /**
         * Retrieves the value set using clutter_actor_set_clip_to_allocation()
         *
         * @returns %TRUE if the #ClutterActor is clipped to its allocation
         */
        get_clip_to_allocation(): boolean;
        /**
         * Retrieves the color_state of a [class`Actor]` set by
         * [method`Actor`.set_color_state].
         *
         * @returns the #ClutterColorState
         */
        get_color_state(): Clutter.ColorState;
        /**
         * Retrieves the #ClutterConstraint with the given name in the list
         * of constraints applied to `self`
         *
         * @returns a #ClutterConstraint for the given
         *   name, or %NULL. The returned #ClutterConstraint is owned by the
         *   actor and it should not be unreferenced directly
         * @param name the name of the constraint to retrieve
         */
        get_constraint(name: string): Clutter.Constraint | null;
        /**
         * Retrieves the list of constraints applied to `self`
         *
         * @returns a copy
         *   of the list of `ClutterConstraint`s. The contents of the list are
         *   owned by the #ClutterActor. Use g_list_free() to free the resources
         *   allocated by the returned #GList
         */
        get_constraints(): Clutter.Constraint[];
        /**
         * Retrieves the contents of `self`.
         *
         * @returns a pointer to the #ClutterContent
         *   instance, or %NULL if none was set
         */
        get_content(): B | null;
        /**
         * Retrieves the bounding box for the #ClutterContent of `self`.
         *
         * The bounding box is relative to the actor's allocation.
         *
         * If no #ClutterContent is set for `self,` or if `self` has not been
         * allocated yet, then the result is undefined.
         *
         * The content box is guaranteed to be, at most, as big as the allocation
         * of the #ClutterActor.
         *
         * If the #ClutterContent used by the actor has a preferred size, then
         * it is possible to modify the content box by using the
         * [property`Clutter`.Actor:content-gravity] property.
         */
        get_content_box(): [Clutter.ActorBox];
        /**
         * Retrieves the content gravity as set using
         * [method`Clutter`.Actor.set_content_gravity].
         *
         * @returns the content gravity
         */
        get_content_gravity(): Clutter.ContentGravity;
        /**
         * Retrieves the repeat policy for a #ClutterActor set by
         * [method`Clutter`.Actor.set_content_repeat].
         *
         * @returns the content repeat policy
         */
        get_content_repeat(): Clutter.ContentRepeat;
        /**
         * Retrieves the values set using [method`Clutter`.Actor.set_content_scaling_filters].
         */
        get_content_scaling_filters(): [Clutter.ScalingFilter | null, Clutter.ScalingFilter | null];
        get_context(): Clutter.Context;
        /**
         * Retrieves the delay that should be applied when tweening animatable
         * properties.
         *
         * @returns a delay, in milliseconds
         */
        get_easing_delay(): number;
        /**
         * Retrieves the duration of the tweening for animatable
         * properties of `self` for the current easing state.
         *
         * @returns the duration of the tweening, in milliseconds
         */
        get_easing_duration(): number;
        /**
         * Retrieves the easing mode for the tweening of animatable properties
         * of `self` for the current easing state.
         *
         * @returns an easing mode
         */
        get_easing_mode(): Clutter.AnimationMode;
        /**
         * Retrieves the #ClutterEffect with the given name in the list
         * of effects applied to `self`
         *
         * @returns a #ClutterEffect for the given
         *   name, or %NULL. The returned #ClutterEffect is owned by the
         *   actor and it should not be unreferenced directly
         * @param name the name of the effect to retrieve
         */
        get_effect(name: string): Clutter.Effect | null;
        /**
         * Retrieves the `ClutterEffect`s applied on `self,` if any
         *
         * @returns a list
         *   of `ClutterEffect`s, or %NULL. The elements of the returned
         *   list are owned by Clutter and they should not be freed. You should
         *   free the returned list using g_list_free() when done
         */
        get_effects(): Clutter.Effect[];
        /**
         * Retrieves the first child of `self`.
         *
         * The returned pointer is only valid until the scene graph changes; it
         * is not safe to modify the list of children of `self` while iterating
         * it.
         *
         * @returns a pointer to a #ClutterActor,
         *   or %NULL
         */
        get_first_child(): Clutter.Actor | null;
        /**
         * This function gets the fixed position of the actor, if set. If there
         * is no fixed position set, this function returns %FALSE and doesn't set
         * the x and y coordinates.
         *
         * @returns %TRUE if the fixed position is set, %FALSE if it isn't
         */
        get_fixed_position(): [boolean, number, number];
        /**
         * Checks whether an actor has a fixed position set (and will thus be
         * unaffected by any layout manager).
         *
         * @returns %TRUE if the fixed position is set on the actor
         */
        get_fixed_position_set(): boolean;
        /**
         * Retrieves the height of a #ClutterActor.
         *
         * If the actor has a valid allocation, this function will return the
         * height of the allocated area given to the actor.
         *
         * If the actor does not have a valid allocation, this function will
         * return the actor's natural height, that is the preferred height of
         * the actor.
         *
         * If you care whether you get the preferred height or the height that
         * has been assigned to the actor, you should probably call a different
         * function like [method`Clutter`.Actor.get_allocation_box] to retrieve the
         * allocated size [method`Clutter`.Actor.get_preferred_height] to retrieve the
         * preferred height.
         *
         * If an actor has a fixed height, for instance a height that has been
         * assigned using [method`Clutter`.Actor.set_height], the height returned will
         * be the same value.
         *
         * @returns the height of the actor, in pixels
         */
        get_height(): number;
        /**
         * Retrieves the last child of `self`.
         *
         * The returned pointer is only valid until the scene graph changes; it
         * is not safe to modify the list of children of `self` while iterating
         * it.
         *
         * @returns a pointer to a #ClutterActor,
         *   or %NULL
         */
        get_last_child(): Clutter.Actor | null;
        /**
         * Retrieves the #ClutterLayoutManager used by `self`.
         *
         * @returns a pointer to the
         *   #ClutterLayoutManager, or %NULL
         */
        get_layout_manager(): A | null;
        /**
         * Retrieves all the components of the margin of a #ClutterActor.
         */
        get_margin(): [Clutter.Margin];
        /**
         * Retrieves the bottom margin of a #ClutterActor.
         *
         * @returns the bottom margin
         */
        get_margin_bottom(): number;
        /**
         * Retrieves the left margin of a #ClutterActor.
         *
         * @returns the left margin
         */
        get_margin_left(): number;
        /**
         * Retrieves the right margin of a #ClutterActor.
         *
         * @returns the right margin
         */
        get_margin_right(): number;
        /**
         * Retrieves the top margin of a #ClutterActor.
         *
         * @returns the top margin
         */
        get_margin_top(): number;
        /**
         * Retrieves the number of children of `self`.
         *
         * @returns the number of children of an actor
         */
        get_n_children(): number;
        /**
         * Retrieves the name of `self`.
         *
         * @returns the name of the actor, or %NULL. The returned
         *   string is owned by the actor and should not be modified or freed.
         */
        get_name(): string | null;
        /**
         * Retrieves the sibling of `self` that comes after it in the list
         * of children of `self'`s parent.
         *
         * The returned pointer is only valid until the scene graph changes; it
         * is not safe to modify the list of children of `self` while iterating
         * it.
         *
         * @returns a pointer to a #ClutterActor,
         *   or %NULL
         */
        get_next_sibling(): Clutter.Actor | null;
        /**
         * Retrieves whether to redirect the actor to an offscreen buffer, as
         * set by clutter_actor_set_offscreen_redirect().
         *
         * @returns the value of the offscreen-redirect property of the actor
         */
        get_offscreen_redirect(): Clutter.OffscreenRedirect;
        /**
         * Retrieves the opacity value of an actor, as set by
         * clutter_actor_set_opacity().
         *
         * For retrieving the absolute opacity of the actor inside a paint
         * virtual function, see clutter_actor_get_paint_opacity().
         *
         * @returns the opacity of the actor
         */
        get_opacity(): number;
        /**
         * See clutter_actor_set_opacity_override()
         *
         * @returns the override value for the actor's opacity, or -1 if no override
         *   is set.2
         */
        get_opacity_override(): number;
        /**
         * Retrieves the paint volume of the passed #ClutterActor, and
         * transforms it into a 2D bounding box in stage coordinates.
         *
         * This function is useful to determine the on screen area occupied by
         * the actor. The box is only an approximation and may often be
         * considerably larger due to the optimizations used to calculate the
         * box. The box is never smaller though, so it can reliably be used
         * for culling.
         *
         * There are times when a 2D paint box can't be determined, e.g.
         * because the actor isn't yet parented under a stage or because
         * the actor is unable to determine a paint volume.
         *
         * @returns %TRUE if a 2D paint box could be determined, else
         * %FALSE.
         */
        get_paint_box(): [boolean, Clutter.ActorBox];
        /**
         * Retrieves the absolute opacity of the actor, as it appears on the stage.
         *
         * This function traverses the hierarchy chain and composites the opacity of
         * the actor with that of its parents.
         *
         * This function is intended for subclasses to use in the paint virtual
         * function, to paint themselves with the correct opacity.
         *
         * @returns The actor opacity value.
         */
        get_paint_opacity(): number;
        /**
         * Retrieves the 'paint' visibility of an actor recursively checking for non
         * visible parents.
         *
         * This is by definition the same as clutter_actor_is_mapped.
         *
         * @returns %TRUE if the actor is visible and will be painted.
         */
        get_paint_visibility(): boolean;
        /**
         * Retrieves the paint volume of the passed #ClutterActor, or %NULL
         * when a paint volume can't be determined.
         *
         * The paint volume is defined as the 3D space occupied by an actor
         * when being painted.
         *
         * This function will call the [vfunc`Clutter`.Actor.get_paint_volume]
         * virtual function of the #ClutterActor class. Sub-classes of #ClutterActor
         * should not usually care about overriding the default implementation,
         * unless they are, for instance: painting outside their allocation, or
         * actors with a depth factor (not in terms of depth but real
         * 3D depth).
         *
         * Note: 2D actors overriding [vfunc`Clutter`.Actor.get_paint_volume]
         * should ensure that their volume has a depth of 0. (This will be true
         * as long as you don't call [method`Clutter`.PaintVolume.set_depth].)
         *
         * @returns a pointer to a #ClutterPaintVolume,
         *   or %NULL if no volume could be determined. The returned pointer
         *   is not guaranteed to be valid across multiple frames; if you want
         *   to keep it, you will need to copy it using [method`Clutter`.PaintVolume.copy].
         */
        get_paint_volume(): Clutter.PaintVolume | null;
        /**
         * Retrieves the #PangoContext for `self`. The actor's #PangoContext
         * is already configured using the appropriate font map, resolution
         * and font options.
         *
         * Unlike clutter_actor_create_pango_context(), this context is owend
         * by the #ClutterActor and it will be updated each time the options
         * stored by the #ClutterBackend change.
         *
         * You can use the returned #PangoContext to create a #PangoLayout
         * and render text using clutter_show_layout() to reuse the
         * glyphs cache also used by Clutter.
         *
         * @returns the #PangoContext for a #ClutterActor.
         *   The returned #PangoContext is owned by the actor and should not be
         *   unreferenced by the application code
         */
        get_pango_context(): Pango.Context;
        /**
         * Retrieves the parent of `self`.
         *
         * @returns The #ClutterActor parent, or %NULL
         *  if no parent is set
         */
        get_parent(): Clutter.Actor | null;
        /**
         * Retrieves the coordinates of the [property`Clutter`.Actor:pivot-point].
         */
        get_pivot_point(): [number, number];
        /**
         * Retrieves the Z component of the [property`Clutter`.Actor:pivot-point].
         */
        get_pivot_point_z(): number;
        /**
         * This function tries to "do what you mean" and tell you where the
         * actor is, prior to any transformations. Retrieves the fixed
         * position of an actor in pixels, if one has been set; otherwise, if
         * the allocation is valid, returns the actor's allocated position;
         * otherwise, returns 0,0.
         *
         * The returned position is in pixels.
         */
        get_position(): [number, number];
        /**
         * Computes the requested minimum and natural heights for an actor,
         * or if they are already computed, returns the cached values.
         *
         * An actor may not get its request - depending on the layout
         * manager that's in effect.
         *
         * A request should not incorporate the actor's scale or translation;
         * those transformations do not affect layout, only rendering.
         *
         * @param for_width available width to assume in computing desired height,
         *   or a negative value to indicate that no width is defined
         */
        get_preferred_height(for_width: number): [number, number];
        /**
         * Computes the preferred minimum and natural size of an actor, taking into
         * account the actor's geometry management (either height-for-width
         * or width-for-height).
         *
         * The width and height used to compute the preferred height and preferred
         * width are the actor's natural ones.
         *
         * If you need to control the height for the preferred width, or the width for
         * the preferred height, you should [method`Clutter`.Actor.get_preferred_width]
         * and [method`Clutter`.Actor.get_preferred_height], and check the actor's preferred
         * geometry management using the [property`Clutter`.Actor:request-mode] property.
         */
        get_preferred_size(): [number, number, number, number];
        /**
         * Computes the requested minimum and natural widths for an actor,
         * optionally depending on the specified height, or if they are
         * already computed, returns the cached values.
         *
         * An actor may not get its request - depending on the layout
         * manager that's in effect.
         *
         * A request should not incorporate the actor's scaleor translation;
         * those transformations do not affect layout, only rendering.
         *
         * @param for_height available height when computing the preferred width,
         *   or a negative value to indicate that no height is defined
         */
        get_preferred_width(for_height: number): [number, number];
        /**
         * Retrieves the sibling of `self` that comes before it in the list
         * of children of `self'`s parent.
         *
         * The returned pointer is only valid until the scene graph changes; it
         * is not safe to modify the list of children of `self` while iterating
         * it.
         *
         * @returns a pointer to a #ClutterActor,
         *   or %NULL
         */
        get_previous_sibling(): Clutter.Actor | null;
        /**
         * Checks whether `actor` is marked as reactive.
         *
         * @returns %TRUE if the actor is reactive
         */
        get_reactive(): boolean;
        /**
         * Retrieves the geometry request mode of `self`
         *
         * @returns the request mode for the actor
         */
        get_request_mode(): Clutter.RequestMode;
        /**
         * Retrieves the resource scale for this actor.
         *
         * The resource scale refers to the scale the actor should use for its resources.
         * For example if an actor draws a a picture of size 100 x 100 in the stage
         * coordinate space, it should use a texture of twice the size (i.e. 200 x 200)
         * if the resource scale is 2.
         *
         * The resource scale is determined by calculating the highest #ClutterStageView
         * scale the actor will get painted on.
         *
         * Note that the scale returned by this function is only guaranteed to be
         * correct when queried during the paint cycle, in all other cases this
         * function will only return a best guess. If your implementation really
         * needs to get a resource scale outside of the paint cycle, make sure to
         * subscribe to the "resource-scale-changed" signal to get notified about
         * the new, correct resource scale before painting.
         *
         * Also avoid getting the resource scale for actors that are not attached
         * to a stage. There's no sane way for Clutter to guess which #ClutterStageView
         * the actor is going to be painted on, so you'll probably end up receiving
         * the "resource-scale-changed" signal and having to rebuild your resources.
         *
         * The best guess this function may return is usually just the last resource
         * scale the actor got painted with. If this resource scale couldn't be found
         * because the actor was never painted so far or Clutter was unable to
         * determine its position and size, this function will return the resource
         * scale of a parent.
         *
         * @returns The resource scale the actor should use for its textures
         */
        get_resource_scale(): number;
        /**
         * Retrieves the angle of rotation set by clutter_actor_set_rotation_angle().
         *
         * @returns the angle of rotation, in degrees
         * @param axis the axis of the rotation
         */
        get_rotation_angle(axis: Clutter.RotateAxis | null): number;
        /**
         * Retrieves an actors scale factors.
         */
        get_scale(): [number, number];
        /**
         * Retrieves the scaling factor along the Z axis, as set using
         * [method`Clutter`.Actor.set_scale_z].
         *
         * @returns the scaling factor along the Z axis
         */
        get_scale_z(): number;
        /**
         * This function tries to "do what you mean" and return
         * the size an actor will have. If the actor has a valid
         * allocation, the allocation will be returned; otherwise,
         * the actors natural size request will be returned.
         *
         * If you care whether you get the request vs. the allocation, you
         * should probably call a different function like
         * [method`Clutter`.Actor.get_allocation_box] or
         * [method`Clutter`.Actor.get_preferred_width].
         */
        get_size(): [number, number];
        /**
         * Retrieves the #ClutterStage where `actor` is contained.
         *
         * @returns the stage
         *   containing the actor, or %NULL
         */
        get_stage(): Clutter.Stage;
        /**
         * Retrieves the value set using clutter_actor_set_text_direction()
         *
         * If no text direction has been previously set, the default text
         * direction, as returned by clutter_get_default_text_direction(), will
         * be returned instead
         *
         * @returns the #ClutterTextDirection for the actor
         */
        get_text_direction(): Clutter.TextDirection;
        /**
         * Retrieves the current transformation matrix of a #ClutterActor.
         */
        get_transform(): [Graphene.Matrix];
        /**
         * Gets the transformed bounding rect of an actor, in pixels relative to the
         * stage. Using this outside of paint() may result in outdated results.
         *
         * The result can only be assumed valid inside a paint() method, or an
         * allocate() function of an actor that explicitly gets allocated after `self;`
         * anywhere else, it may be out-of-date.
         */
        get_transformed_extents(): [Graphene.Rect];
        /**
         * Retrieves the 3D paint volume of an actor like
         * [method`Clutter`.Actor.get_paint_volume] does and it additionally
         * transforms the paint volume into the coordinate
         * space of `relative_to_ancestor`. (Or the stage if %NULL
         * is passed for `relative_to_ancestor)`
         *
         * This can be used by containers that base their paint volume on
         * the volume of their children. Such containers can query the
         * transformed paint volume of all of its children and union them
         * together using [method`Clutter`.PaintVolume.union].
         *
         * @returns a pointer to a #ClutterPaintVolume,
         *   or %NULL if no volume could be determined.
         * @param relative_to_ancestor A #ClutterActor that is an ancestor of `self`
         *    (or %NULL for the stage)
         */
        get_transformed_paint_volume(relative_to_ancestor: Clutter.Actor): Clutter.PaintVolume | null;
        /**
         * Gets the absolute position of an actor, in pixels relative to the stage.
         */
        get_transformed_position(): [number, number];
        /**
         * Gets the absolute size of an actor in pixels, taking into account the
         * scaling factors.
         *
         * If the actor has a valid allocation, the allocated size will be used.
         * If the actor has not a valid allocation then the preferred size will
         * be transformed and returned.
         *
         * If you want the transformed allocation, see
         * [method`Clutter`.Actor.get_abs_allocation_vertices] instead.
         *
         * When the actor (or one of its ancestors) is rotated around the
         * X or Y axis, it no longer appears as on the stage as a rectangle, but
         * as a generic quadrangle; in that case this function returns the size
         * of the smallest rectangle that encapsulates the entire quad. Please
         * note that in this case no assumptions can be made about the relative
         * position of this envelope to the absolute position of the actor, as
         * returned by [method`Clutter`.Actor.get_transformed_position]; if you need this
         * information, you need to use [method`Clutter`.Actor.get_abs_allocation_vertices]
         * to get the coords of the actual quadrangle.
         */
        get_transformed_size(): [number, number];
        /**
         * Retrieves the #ClutterTransition of a #ClutterActor by using the
         * transition `name`.
         *
         * Transitions created for animatable properties use the name of the
         * property itself, for instance the code below:
         *
         * ```c
         *   clutter_actor_set_easing_duration (actor, 1000);
         *   clutter_actor_set_rotation_angle (actor, CLUTTER_Y_AXIS, 360.0);
         *
         *   transition = clutter_actor_get_transition (actor, "rotation-angle-y");
         *   g_signal_connect (transition, "stopped",
         *                     G_CALLBACK (on_transition_stopped),
         *                     actor);
         * ```
         *
         * will call the `on_transition_stopped` callback when the transition
         * is finished.
         *
         * If you just want to get notifications of the completion of a transition,
         * you should use the [signal`Clutter`.Actor::transition-stopped] signal, using the
         * transition name as the signal detail.
         *
         * @returns a #ClutterTransition, or %NULL if
         *   none was found to match the passed name; the returned instance is owned
         *   by Clutter and it should not be freed
         * @param name the name of the transition
         */
        get_transition(name: string): Clutter.Transition | null;
        /**
         * Retrieves the translation set using clutter_actor_set_translation().
         */
        get_translation(): [number, number, number];
        /**
         * Retrieves the width of a #ClutterActor.
         *
         * If the actor has a valid allocation, this function will return the
         * width of the allocated area given to the actor.
         *
         * If the actor does not have a valid allocation, this function will
         * return the actor's natural width, that is the preferred width of
         * the actor.
         *
         * If you care whether you get the preferred width or the width that
         * has been assigned to the actor, you should probably call a different
         * function like [method`Clutter`.Actor.get_allocation_box] to retrieve the
         * allocated size [method`Clutter`.Actor.get_preferred_width] to retrieve the
         * preferred width.
         *
         * If an actor has a fixed width, for instance a width that has been
         * assigned using [method`Clutter`.Actor.set_width], the width returned will
         * be the same value.
         *
         * @returns the width of the actor, in pixels
         */
        get_width(): number;
        /**
         * Retrieves the X coordinate of a #ClutterActor.
         *
         * This function tries to "do what you mean", by returning the
         * correct value depending on the actor's state.
         *
         * If the actor has a valid allocation, this function will return
         * the X coordinate of the origin of the allocation box.
         *
         * If the actor has any fixed coordinate set using [method`Clutter`.Actor.set_x],
         * [method`Clutter`.Actor.set_position], this function will return that coordinate.
         *
         * If both the allocation and a fixed position are missing, this function
         * will return 0.
         *
         * @returns the X coordinate, in pixels, ignoring any
         *   transformation (i.e. scaling, rotation)
         */
        get_x(): number;
        /**
         * Retrieves the horizontal alignment policy set using
         * [method`Clutter`.Actor.set_x_align].
         *
         * @returns the horizontal alignment policy.
         */
        get_x_align(): Clutter.ActorAlign;
        /**
         * Retrieves the value set with [method`Clutter`.Actor.set_x_expand].
         *
         * See also: [method`Clutter`.Actor.needs_expand]
         *
         * @returns %TRUE if the actor has been set to expand
         */
        get_x_expand(): boolean;
        /**
         * Retrieves the Y coordinate of a #ClutterActor.
         *
         * This function tries to "do what you mean", by returning the
         * correct value depending on the actor's state.
         *
         * If the actor has a valid allocation, this function will return
         * the Y coordinate of the origin of the allocation box.
         *
         * If the actor has any fixed coordinate set using [method`Clutter`.Actor.set_y],
         * [method`Clutter`.Actor.set_position], this function will return that coordinate.
         *
         * If both the allocation and a fixed position are missing, this function
         * will return 0.
         *
         * @returns the Y coordinate, in pixels, ignoring any
         *   transformation (i.e. scaling, rotation)
         */
        get_y(): number;
        /**
         * Retrieves the vertical alignment policy set using
         * [method`Clutter`.Actor.set_y_align].
         *
         * @returns the vertical alignment policy.
         */
        get_y_align(): Clutter.ActorAlign;
        /**
         * Retrieves the value set with [method`Clutter`.Actor.set_y_expand].
         *
         * See also: [method`Clutter`.Actor.needs_expand]
         *
         * @returns %TRUE if the actor has been set to expand
         */
        get_y_expand(): boolean;
        /**
         * Retrieves the actor's position on the Z axis.
         *
         * @returns the position on the Z axis.
         */
        get_z_position(): number;
        /**
         * Sets the key focus of the #ClutterStage including `self`
         * to this #ClutterActor.
         */
        grab_key_focus(): void;
        /**
         * Returns whether the actor has any actions applied.
         *
         * @returns %TRUE if the actor has any actions,
         *   %FALSE otherwise
         */
        has_actions(): boolean;
        /**
         * Checks if the actor has an up-to-date allocation assigned to
         * it. This means that the actor should have an allocation: it's
         * visible and has a parent. It also means that there is no
         * outstanding relayout request in progress for the actor or its
         * children (There might be other outstanding layout requests in
         * progress that will cause the actor to get a new allocation
         * when the stage is laid out, however).
         *
         * If this function returns %FALSE, then the actor will normally
         * be allocated before it is next drawn on the screen.
         *
         * @returns %TRUE if the actor has an up-to-date allocation
         */
        has_allocation(): boolean;
        /**
         * Returns whether the actor has any constraints applied.
         *
         * @returns %TRUE if the actor has any constraints,
         *   %FALSE otherwise
         */
        has_constraints(): boolean;
        /**
         * Returns whether the actor has any effects applied.
         *
         * @returns %TRUE if the actor has any effects,
         *   %FALSE otherwise
         */
        has_effects(): boolean;
        /**
         * Checks whether `self` is the #ClutterActor that has key focus
         *
         * @returns %TRUE if the actor has key focus, and %FALSE otherwise
         */
        has_key_focus(): boolean;
        /**
         * Returns whether a #ClutterActor or any parent actors have mapped clones
         * that are clone-painting `self`.
         *
         * @returns %TRUE if the actor has mapped clones, %FALSE otherwise
         */
        has_mapped_clones(): boolean;
        /**
         * Asks the actor's implementation whether it may contain overlapping
         * primitives.
         *
         * For example; Clutter may use this to determine whether the painting
         * should be redirected to an offscreen buffer to correctly implement
         * the opacity property.
         *
         * Custom actors can override the default response by implementing the
         * [vfunc`Clutter`.Actor.has_overlaps]. See
         * [method`Clutter`.Actor.set_offscreen_redirect] for more information.
         *
         * @returns %TRUE if the actor may have overlapping primitives, and
         *   %FALSE otherwise
         */
        has_overlaps(): boolean;
        /**
         * Flags an actor to be hidden. A hidden actor will not be
         * rendered on the stage.
         *
         * Actors are visible by default.
         *
         * If this function is called on an actor without a parent, the
         * [property`Clutter`.Actor:show-on-set-parent] property will be set to %FALSE
         * as a side-effect.
         */
        hide(): void;
        /**
         * Increases the culling inhibitor counter. Inhibiting culling
         * forces the actor to be painted even when outside the visible
         * bounds of the stage view.
         *
         * This is usually necessary when an actor is being painted on
         * another paint context.
         *
         * Pair with clutter_actor_uninhibit_culling() when the actor doesn't
         * need to be painted anymore.
         */
        inhibit_culling(): void;
        /**
         * Inserts `child` into the list of children of `self,` above another
         * child of `self` or, if `sibling` is %NULL, above all the children
         * of `self`.
         *
         * This function will acquire a reference on `child` that will only
         * be released when calling [method`Clutter`.Actor.remove_child].
         *
         * This function will not take into consideration the depth
         * of `child`.
         *
         * This function will emit the [signal`Clutter`.Actor::child-added] signal
         * on `self`.
         *
         * @param child a #ClutterActor
         * @param sibling a child of `self,` or %NULL
         */
        insert_child_above(child: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Inserts `child` into the list of children of `self,` using the
         * given `index_`. If `index_` is greater than the number of children
         * in `self,` or is less than 0, then the new child is added at the end.
         *
         * This function will acquire a reference on `child` that will only
         * be released when calling [method`Clutter`.Actor.remove_child].
         *
         * This function will not take into consideration the depth
         * of `child`.
         *
         * This function will emit the [signal`Clutter`.Actor::child-added] signal
         * on `self`.
         *
         * @param child a #ClutterActor
         * @param index_ the index
         */
        insert_child_at_index(child: Clutter.Actor, index_: number): void;
        /**
         * Inserts `child` into the list of children of `self,` below another
         * child of `self` or, if `sibling` is %NULL, below all the children
         * of `self`.
         *
         * This function will acquire a reference on `child` that will only
         * be released when calling [method`Clutter`.Actor.remove_child].
         *
         * This function will not take into consideration the depth
         * of `child`.
         *
         * This function will emit the [signal`Clutter`.Actor::child-added] signal
         * on `self`.
         *
         * @param child a #ClutterActor
         * @param sibling a child of `self,` or %NULL
         */
        insert_child_below(child: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Invalidates the cached paint volume of `self`. This is needed for
         * implementations overriding the [vfunc`Clutter`.Actor.get_paint_volume]
         * virtual function and has to be called every time the paint volume
         * returned by that function would change.
         */
        invalidate_paint_volume(): void;
        /**
         * Invalidate the cached transformation matrix of `self`.
         * This is needed for implementations overriding the apply_transform()
         * vfunc and has to be called if the matrix returned by apply_transform()
         * would change.
         */
        invalidate_transform(): void;
        /**
         * Checks whether `self` is being currently painted by a #ClutterClone
         *
         * This function is useful only inside implementations of the
         * [vfunc`Clutter`.Actor.paint] virtual function.
         *
         * This function should not be used by applications
         *
         * @returns %TRUE if the #ClutterActor is currently being painted
         *   by a #ClutterClone, and %FALSE otherwise
         */
        is_in_clone_paint(): boolean;
        /**
         * Checks whether a #ClutterActor has been set as mapped.
         *
         * See also [property`Clutter`.Actor:mapped]
         *
         * @returns %TRUE if the actor is mapped4
         */
        is_mapped(): boolean;
        /**
         * Checks whether `actor` is marked as no layout.
         *
         * That means the `actor` provides an explicit layout management
         * policy for its children; this will prevent Clutter from automatic
         * queueing of relayout and will defer all layouting to the actor itself
         *
         * @returns %TRUE if the actor is marked as no layout
         */
        is_no_layout(): boolean;
        /**
         * Checks whether a #ClutterActor is realized.
         *
         * @returns %TRUE if the actor is realized4
         */
        is_realized(): boolean;
        /**
         * Checks whether any rotation is applied to the actor.
         *
         * @returns %TRUE if the actor is rotated.
         */
        is_rotated(): boolean;
        /**
         * Checks whether the actor is scaled in either dimension.
         *
         * @returns %TRUE if the actor is scaled.
         */
        is_scaled(): boolean;
        /**
         * Checks whether an actor is marked as visible.
         *
         * @returns %TRUE if the actor visible4
         */
        is_visible(): boolean;
        /**
         * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
         * and realizes its children if they are visible. Does nothing if the
         * actor is not visible.
         *
         * Calling this function is strongly discouraged: the default
         * implementation of [vfunc`Clutter`.Actor.map] will map all the children
         * of an actor when mapping its parent.
         *
         * When overriding map, it is mandatory to chain up to the parent
         * implementation.
         */
        map(): void;
        /**
         * Moves an actor by the specified distance relative to its current
         * position in pixels.
         *
         * This function modifies the fixed position of an actor and thus removes
         * it from any layout management. Another way to move an actor is with an
         * additional translation, using clutter_actor_set_translation().
         *
         * @param dx Distance to move Actor on X axis.
         * @param dy Distance to move Actor on Y axis.
         */
        move_by(dx: number, dy: number): void;
        /**
         * Checks whether an actor, or any of its children, is set to expand
         * horizontally or vertically.
         *
         * This function should only be called by layout managers that can
         * assign extra space to their children.
         *
         * If you want to know whether the actor was explicitly set to expand,
         * use [method`Clutter`.Actor.get_x_expand] or [method`Clutter`.Actor.get_y_expand].
         *
         * @returns %TRUE if the actor should expand
         * @param orientation the direction of expansion
         */
        needs_expand(orientation: Clutter.Orientation | null): boolean;
        /**
         * Renders the actor to display.
         *
         * This function should not be called directly by applications.
         * Call clutter_actor_queue_redraw() to queue paints, instead.
         *
         * This function is context-aware, and will either cause a
         * regular paint or a pick paint.
         *
         * This function will call the [vfunc`Clutter`.Actor.paint] virtual
         * function.
         *
         * This function does not paint the actor if the actor is set to 0,
         * unless it is performing a pick paint.
         *
         * @param paint_context
         */
        paint(paint_context: Clutter.PaintContext): void;
        /**
         * Retrieves the list of `ClutterStageView`s the actor is being
         * painted on.
         *
         * If this function is called during the paint cycle, the list is guaranteed
         * to be up-to-date, if called outside the paint cycle, the list will
         * contain the views the actor was painted on last.
         *
         * The list returned by this function is not updated when the actors
         * visibility changes: If an actor gets hidden and is not being painted
         * anymore, this function will return the list of views the actor was
         * painted on last.
         *
         * If an actor is not attached to a stage (realized), this function will
         * always return an empty list.
         *
         * @returns The list of
         *   `ClutterStageView`s the actor is being painted on. The list and
         *   its contents are owned by the #ClutterActor and the list may not be
         *   freed or modified.
         */
        peek_stage_views(): Clutter.StageView[];
        /**
         * Asks `actor` to perform a pick.
         *
         * @param pick_context
         */
        pick(pick_context: Clutter.PickContext): void;
        /**
         * Logs (does a virtual paint of) a rectangle for picking. Note that `box` is
         * in the actor's own local coordinates, so is usually {0,0,width,height}
         * to include the whole actor. That is unless the actor has a shaped input
         * region in which case you may wish to log the (multiple) smaller rectangles
         * that make up the input region.
         *
         * @param pick_context The #ClutterPickContext
         * @param box A rectangle in the actor's own local coordinates.
         */
        pick_box(pick_context: Clutter.PickContext, box: Clutter.ActorBox): void;
        /**
         * Queues up a redraw of an actor and any children. The redraw occurs
         * once the main loop becomes idle (after the current batch of events
         * has been processed, roughly).
         *
         * Applications rarely need to call this, as redraws are handled
         * automatically by modification functions.
         *
         * This function will not do anything if `self` is not visible, or
         * if the actor is inside an invisible part of the scenegraph.
         *
         * Also be aware that painting is a NOP for actors with an opacity of
         * 0
         *
         * When you are implementing a custom actor you must queue a redraw
         * whenever some private state changes that will affect painting or
         * picking of your actor.
         */
        queue_redraw(): void;
        /**
         * Queues a redraw on `self` limited to a specific, actor-relative
         * rectangular area.
         *
         * If `clip` is %NULL this function is equivalent to
         * clutter_actor_queue_redraw().
         *
         * @param clip a rectangular clip region, or %NULL
         */
        queue_redraw_with_clip(clip?: Mtk.Rectangle | null): void;
        /**
         * Indicates that the actor's size request or other layout-affecting
         * properties may have changed. This function is used inside #ClutterActor
         * subclass implementations, not by applications directly.
         *
         * Queueing a new layout automatically queues a redraw as well.
         */
        queue_relayout(): void;
        /**
         * Realization informs the actor that it is attached to a stage. It
         * can use this to allocate resources if it wanted to delay allocation
         * until it would be rendered. However it is perfectly acceptable for
         * an actor to create resources before being realized because Clutter
         * only ever has a single rendering context so that actor is free to
         * be moved from one stage to another.
         *
         * This function does nothing if the actor is already realized.
         *
         * Because a realized actor must have realized parent actors, calling
         * clutter_actor_realize() will also realize all parents of the actor.
         *
         * This function does not realize child actors, except in the special
         * case that realizing the stage, when the stage is visible, will
         * suddenly map (and thus realize) the children of the stage.
         */
        realize(): void;
        /**
         * This method removes `state` as on of the accessible states for
         * `actor`. See [method`Clutter`.Actor.add_accessible_state] for more information.
         *
         * @param state #AtkState state to remove
         */
        remove_accessible_state(state: Atk.StateType | null): void;
        /**
         * Removes `action` from the list of actions applied to `self`
         *
         * The reference held by `self` on the #ClutterAction will be released
         *
         * @param action a #ClutterAction
         */
        remove_action(action: Clutter.Action): void;
        /**
         * Removes the #ClutterAction with the given name from the list
         * of actions applied to `self`
         *
         * @param name the name of the action to remove
         */
        remove_action_by_name(name: string): void;
        /**
         * Removes all children of `self`.
         *
         * This function releases the reference added by inserting a child actor
         * in the list of children of `self`.
         *
         * If the reference count of a child drops to zero, the child will be
         * destroyed. If you want to ensure the destruction of all the children
         * of `self,` use clutter_actor_destroy_all_children().
         */
        remove_all_children(): void;
        /**
         * Removes all transitions associated to `self`.
         */
        remove_all_transitions(): void;
        /**
         * Removes `child` from the children of `self`.
         *
         * This function will release the reference added by
         * [method`Clutter`.Actor.add_child], so if you want to keep using `child`
         * you will have to acquire a referenced on it before calling this
         * function.
         *
         * This function will emit the [signal`Clutter`.Actor::child-removed]
         * signal on `self`.
         *
         * @param child a #ClutterActor
         */
        remove_child(child: Clutter.Actor): void;
        /**
         * Removes clip area from `self`.
         */
        remove_clip(): void;
        /**
         * Removes `constraint` from the list of constraints applied to `self`
         *
         * The reference held by `self` on the #ClutterConstraint will be released
         *
         * @param constraint a #ClutterConstraint
         */
        remove_constraint(constraint: Clutter.Constraint): void;
        /**
         * Removes the #ClutterConstraint with the given name from the list
         * of constraints applied to `self`
         *
         * @param name the name of the constraint to remove
         */
        remove_constraint_by_name(name: string): void;
        /**
         * Removes `effect` from the list of effects applied to `self`
         *
         * The reference held by `self` on the #ClutterEffect will be released
         *
         * @param effect a #ClutterEffect
         */
        remove_effect(effect: Clutter.Effect): void;
        /**
         * Removes the #ClutterEffect with the given name from the list
         * of effects applied to `self`
         *
         * @param name the name of the effect to remove
         */
        remove_effect_by_name(name: string): void;
        /**
         * Removes the transition stored inside a #ClutterActor using `name`
         * identifier.
         *
         * If the transition is currently in progress, it will be stopped.
         *
         * This function releases the reference acquired when the transition
         * was added to the #ClutterActor.
         *
         * @param name the name of the transition to remove
         */
        remove_transition(name: string): void;
        /**
         * Replaces `old_child` with `new_child` in the list of children of `self`.
         *
         * @param old_child the child of `self` to replace
         * @param new_child the #ClutterActor to replace `old_child`
         */
        replace_child(old_child: Clutter.Actor, new_child: Clutter.Actor): void;
        /**
         * Restores the easing state as it was prior to a call to
         * [method`Clutter`.Actor.save_easing_state].
         */
        restore_easing_state(): void;
        /**
         * Saves the current easing state for animatable properties, and creates
         * a new state with the default values for easing mode and duration.
         *
         * New transitions created after calling this function will inherit the
         * duration, easing mode, and delay of the new easing state; this also
         * applies to transitions modified in flight.
         */
        save_easing_state(): void;
        /**
         * This method allows to set a customly created accessible object to
         * this widget
         *
         * NULL is a valid value for `accessible`. That contemplates the
         * hypothetical case of not needing anymore a custom accessible object
         * for the widget. Next call of [method`Clutter`.Actor.get_accessible] would
         * create and return a default accessible.
         *
         * It assumes that the call to atk_object_initialize that bound the
         * gobject with the custom accessible object was already called, so
         * not a responsibility of this method.
         *
         * @param accessible an accessible
         */
        set_accessible(accessible: Atk.Object): void;
        /**
         * This method sets `name` as the accessible name for `self`.
         *
         * Usually you will have no need to set the accessible name for an
         * object, as usually there is a label for most of the interface
         * elements.
         *
         * @param name a character string to be set as the accessible name
         */
        set_accessible_name(name?: string | null): void;
        /**
         * This method sets `role` as the accessible role for `self`. This
         * role describes what kind of user interface element `self` is and
         * is provided so that assistive technologies know how to present
         * `self` to the user.
         *
         * Usually you will have no need to set the accessible role for an
         * object, as this information is extracted from the context of the
         * object (ie: a #StButton has by default a push button role). This
         * method is only required when you need to redefine the role
         * currently associated with the widget, for instance if it is being
         * used in an unusual way (ie: a #StButton used as a togglebutton), or
         * if a generic object is used directly (ie: a container as a menu
         * item).
         *
         * If `role` is #ATK_ROLE_INVALID, the role will not be changed
         * and the accessible's default role will be used instead.
         *
         * @param role The role to use
         */
        set_accessible_role(role: Atk.Role | null): void;
        /**
         * Stores the allocation of `self` as defined by `box`.
         *
         * This function can only be called from within the implementation of
         * the [vfunc`Clutter`.Actor.allocate] virtual function.
         *
         * The allocation `box` should have been adjusted to take into account
         * constraints, alignment, and margin properties.
         *
         * This function should only be used by subclasses of #ClutterActor
         * that wish to store their allocation but cannot chain up to the
         * parent's implementation; the default implementation of the
         * [vfunc`Clutter`.Actor.allocate] virtual function will call this
         * function.
         *
         * @param box a #ClutterActorBox
         */
        set_allocation(box: Clutter.ActorBox): void;
        /**
         * Sets the background color of a #ClutterActor.
         *
         * The background color will be used to cover the whole allocation of the
         * actor. The default background color of an actor is transparent.
         *
         * To check whether an actor has a background color, you can use the
         * [property`Clutter`.Actor:background-color-set] actor property.
         *
         * The [property`Clutter`.Actor:background-color] property is animatable.
         *
         * @param color a #CoglColor, or %NULL to unset a previously
         *  set color
         */
        set_background_color(color?: Cogl.Color | null): void;
        /**
         * Sets `child` to be above `sibling` in the list of children of `self`.
         *
         * If `sibling` is %NULL, `child` will be the new last child of `self`.
         *
         * This function is logically equivalent to removing `child` and using
         * clutter_actor_insert_child_above(), but it will not emit signals
         * or change state on `child`.
         *
         * @param child a #ClutterActor child of `self`
         * @param sibling a #ClutterActor child of `self,` or %NULL
         */
        set_child_above_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Changes the index of `child` in the list of children of `self`.
         *
         * This function is logically equivalent to removing `child` and
         * calling clutter_actor_insert_child_at_index(), but it will not
         * emit signals or change state on `child`.
         *
         * @param child a #ClutterActor child of `self`
         * @param index_ the new index for `child`
         */
        set_child_at_index(child: Clutter.Actor, index_: number): void;
        /**
         * Sets `child` to be below `sibling` in the list of children of `self`.
         *
         * If `sibling` is %NULL, `child` will be the new first child of `self`.
         *
         * This function is logically equivalent to removing `self` and using
         * clutter_actor_insert_child_below(), but it will not emit signals
         * or change state on `child`.
         *
         * @param child a #ClutterActor child of `self`
         * @param sibling a #ClutterActor child of `self,` or %NULL
         */
        set_child_below_sibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void;
        /**
         * Sets the transformation matrix to be applied to all the children
         * of `self` prior to their own transformations. The default child
         * transformation is the identity matrix.
         *
         * If `transform` is %NULL, the child transform will be unset.
         *
         * The [property`Clutter`.Actor:child-transform] property is animatable.
         *
         * @param transform a #graphene_matrix_t, or %NULL
         */
        set_child_transform(transform?: Graphene.Matrix | null): void;
        /**
         * Sets clip area for `self`. The clip area is always computed from the
         * upper left corner of the actor.
         *
         * @param xoff X offset of the clip rectangle
         * @param yoff Y offset of the clip rectangle
         * @param width Width of the clip rectangle
         * @param height Height of the clip rectangle
         */
        set_clip(xoff: number, yoff: number, width: number, height: number): void;
        /**
         * Sets whether `self` should be clipped to the same size as its
         * allocation
         *
         * @param clip_set %TRUE to apply a clip tracking the allocation
         */
        set_clip_to_allocation(clip_set: boolean): void;
        /**
         * Set `self'`s color state to `color_state`.
         *
         * @param color_state a #ClutterColorState
         */
        set_color_state(color_state: Clutter.ColorState): void;
        /**
         * Sets the contents of a #ClutterActor.
         *
         * @param content a #ClutterContent, or %NULL
         */
        set_content(content?: B | null): void;
        /**
         * Sets the gravity of the #ClutterContent used by `self`.
         *
         * See the description of the [property`Clutter`.Actor:content-gravity] property for
         * more information.
         *
         * The [property`Clutter`.Actor:content-gravity] property is animatable.
         *
         * @param gravity the #ClutterContentGravity
         */
        set_content_gravity(gravity: Clutter.ContentGravity | null): void;
        /**
         * Sets the policy for repeating the [property`Clutter`.Actor:content] of a
         * #ClutterActor. The behaviour is deferred to the #ClutterContent
         * implementation.
         *
         * @param repeat the repeat policy
         */
        set_content_repeat(repeat: Clutter.ContentRepeat | null): void;
        /**
         * Sets the minification and magnification filter to be applied when
         * scaling the [property`Clutter`.Actor:content] of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:minification-filter] will be used when reducing
         * the size of the content; the [property`Clutter`.Actor:magnification-filter]
         * will be used when increasing the size of the content.
         *
         * @param min_filter the minification filter for the content
         * @param mag_filter the magnification filter for the content
         */
        set_content_scaling_filters(
            min_filter: Clutter.ScalingFilter | null,
            mag_filter: Clutter.ScalingFilter | null,
        ): void;
        /**
         * Sets the delay that should be applied before tweening animatable
         * properties.
         *
         * @param msecs the delay before the start of the tweening, in milliseconds
         */
        set_easing_delay(msecs: number): void;
        /**
         * Sets the duration of the tweening for animatable properties
         * of `self` for the current easing state.
         *
         * @param msecs the duration of the easing, or %NULL
         */
        set_easing_duration(msecs: number): void;
        /**
         * Sets the easing mode for the tweening of animatable properties
         * of `self`.
         *
         * @param mode an easing mode, excluding %CLUTTER_CUSTOM_MODE
         */
        set_easing_mode(mode: Clutter.AnimationMode | null): void;
        /**
         * Sets whether an actor has a fixed position set (and will thus be
         * unaffected by any layout manager).
         *
         * @param is_set whether to use fixed position
         */
        set_fixed_position_set(is_set: boolean): void;
        /**
         * Forces a height on an actor, causing the actor's preferred width
         * and height (if any) to be ignored.
         *
         * If `height` is -1 the actor will use its preferred height instead of
         * overriding it, i.e. you can "unset" the height with -1.
         *
         * This function sets both the minimum and natural size of the actor.
         *
         * @param height Requested new height for the actor, in pixels, or -1
         */
        set_height(height: number): void;
        /**
         * Sets the #ClutterLayoutManager delegate object that will be used to
         * lay out the children of `self`.
         *
         * The #ClutterActor will take a reference on the passed `manager` which
         * will be released either when the layout manager is removed, or when
         * the actor is destroyed.
         *
         * @param manager a #ClutterLayoutManager, or %NULL to unset it
         */
        set_layout_manager(manager?: A | null): void;
        /**
         * Sets all the components of the margin of a #ClutterActor.
         *
         * @param margin a #ClutterMargin
         */
        set_margin(margin: Clutter.Margin): void;
        /**
         * Sets the margin from the bottom of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:margin-bottom] property is animatable.
         *
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the margin from the left of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:margin-left] property is animatable.
         *
         * @param margin the left margin
         */
        set_margin_left(margin: number): void;
        /**
         * Sets the margin from the right of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:margin-right] property is animatable.
         *
         * @param margin the right margin
         */
        set_margin_right(margin: number): void;
        /**
         * Sets the margin from the top of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:margin-top] property is animatable.
         *
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets the given name to `self`. The name can be used to identify
         * a #ClutterActor.
         *
         * @param name Textual tag to apply to actor
         */
        set_name(name?: string | null): void;
        set_no_layout(no_layout: boolean): void;
        /**
         * Defines the circumstances where the actor should be redirected into
         * an offscreen image. The offscreen image is used to flatten the
         * actor into a single image while painting for two main reasons.
         * Firstly, when the actor is painted a second time without any of its
         * contents changing it can simply repaint the cached image without
         * descending further down the actor hierarchy. Secondly, it will make
         * the opacity look correct even if there are overlapping primitives
         * in the actor.
         *
         * Caching the actor could in some cases be a performance win and in
         * some cases be a performance lose so it is important to determine
         * which value is right for an actor before modifying this value. For
         * example, there is never any reason to flatten an actor that is just
         * a single texture (such as a #ClutterTexture) because it is
         * effectively already cached in an image so the offscreen would be
         * redundant. Also if the actor contains primitives that are far apart
         * with a large transparent area in the middle (such as a large
         * CluterGroup with a small actor in the top left and a small actor in
         * the bottom right) then the cached image will contain the entire
         * image of the large area and the paint will waste time blending all
         * of the transparent pixels in the middle.
         *
         * The default method of implementing opacity on a container simply
         * forwards on the opacity to all of the children. If the children are
         * overlapping then it will appear as if they are two separate glassy
         * objects and there will be a break in the color where they
         * overlap. By redirecting to an offscreen buffer it will be as if the
         * two opaque objects are combined into one and then made transparent
         * which is usually what is expected.
         *
         * The image below demonstrates the difference between redirecting and
         * not. The image shows two Clutter groups, each containing a red and
         * a green rectangle which overlap. The opacity on the group is set to
         * 128 (which is 50%). When the offscreen redirect is not used, the
         * red rectangle can be seen through the blue rectangle as if the two
         * rectangles were separately transparent. When the redirect is used
         * the group as a whole is transparent instead so the red rectangle is
         * not visible where they overlap.
         *
         * <figure id="offscreen-redirect">
         *   <title>Sample of using an offscreen redirect for transparency</title>
         *   <graphic fileref="offscreen-redirect.png" format="PNG"/>
         * </figure>
         *
         * The default value for this property is 0, so we effectively will
         * never redirect an actor offscreen by default. This means that there
         * are times that transparent actors may look glassy as described
         * above. The reason this is the default is because there is a
         * performance trade off between quality and performance here. In many
         * cases the default form of glassy opacity looks good enough, but if
         * it's not you will need to set the
         * %CLUTTER_OFFSCREEN_REDIRECT_AUTOMATIC_FOR_OPACITY flag to enable
         * redirection for opacity.
         *
         * Custom actors that don't contain any overlapping primitives are
         * recommended to override the has_overlaps() virtual to return %FALSE
         * for maximum efficiency.
         *
         * @param redirect New offscreen redirect flags for the actor.
         */
        set_offscreen_redirect(redirect: Clutter.OffscreenRedirect | null): void;
        /**
         * Sets the actor's opacity, with zero being completely transparent and
         * 255 (0xff) being fully opaque.
         *
         * The [property`Clutter`.Actor:opacity] property is animatable.
         *
         * @param opacity New opacity value for the actor.
         */
        set_opacity(opacity: number): void;
        /**
         * Allows overriding the calculated paint opacity (as returned by
         * clutter_actor_get_paint_opacity()). This is used internally by
         * ClutterClone and ClutterOffscreenEffect, and should be used by
         * actors that need to mimic those.
         *
         * In almost all cases this should not used by applications.
         *
         * @param opacity the override opacity value, or -1 to reset
         */
        set_opacity_override(opacity: number): void;
        /**
         * Sets the position of the [property`Clutter`.Actor:pivot-point] around which the
         * scaling and rotation transformations occur.
         *
         * The pivot point's coordinates are in normalized space, with the (0, 0)
         * point being the top left corner of the actor, and the (1, 1) point being
         * the bottom right corner.
         *
         * @param pivot_x the normalized X coordinate of the pivot point
         * @param pivot_y the normalized Y coordinate of the pivot point
         */
        set_pivot_point(pivot_x: number, pivot_y: number): void;
        /**
         * Sets the component on the Z axis of the [property`Clutter`.Actor:pivot-point] around
         * which the scaling and rotation transformations occur.
         *
         * The `pivot_z` value is expressed as a distance along the Z axis.
         *
         * @param pivot_z the Z coordinate of the actor's pivot point
         */
        set_pivot_point_z(pivot_z: number): void;
        /**
         * Sets the actor's fixed position in pixels relative to any parent
         * actor.
         *
         * If a layout manager is in use, this position will override the
         * layout manager and force a fixed position.
         *
         * @param x New left position of actor in pixels.
         * @param y New top position of actor in pixels.
         */
        set_position(x: number, y: number): void;
        /**
         * Sets `actor` as reactive. Reactive actors will receive events.
         *
         * @param reactive whether the actor should be reactive to events
         */
        set_reactive(reactive: boolean): void;
        /**
         * Sets the geometry request mode of `self`.
         *
         * The `mode` determines the order for invoking
         *  [method`Clutter`.Actor.get_preferred_width] and
         *  [method`Clutter`.Actor.get_preferred_height]
         *
         * @param mode the request mode
         */
        set_request_mode(mode: Clutter.RequestMode | null): void;
        /**
         * Sets the `angle` of rotation of a #ClutterActor on the given `axis`.
         *
         * This function is a convenience for setting the rotation properties
         * [property`Clutter`.Actor:rotation-angle-x], [property`Clutter`.Actor:rotation-angle-y],
         * and [property`Clutter`.Actor:rotation-angle-z].
         *
         * The center of rotation is established by the [property`Clutter`.Actor:pivot-point]
         * property.
         *
         * @param axis the axis to set the angle one
         * @param angle the angle of rotation, in degrees
         */
        set_rotation_angle(axis: Clutter.RotateAxis | null, angle: number): void;
        /**
         * Scales an actor with the given factors.
         *
         * The scale transformation is relative the [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:scale-x] and [property`Clutter`.Actor:scale-y]
         * properties are animatable.
         *
         * @param scale_x double factor to scale actor by horizontally.
         * @param scale_y double factor to scale actor by vertically.
         */
        set_scale(scale_x: number, scale_y: number): void;
        /**
         * Scales an actor on the Z axis by the given `scale_z` factor.
         *
         * The scale transformation is relative the the [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:scale-z] property is animatable.
         *
         * @param scale_z the scaling factor along the Z axis
         */
        set_scale_z(scale_z: number): void;
        /**
         * Sets the actor's size request in pixels. This overrides any
         * "normal" size request the actor would have. For example
         * a text actor might normally request the size of the text;
         * this function would force a specific size instead.
         *
         * If `width` and/or `height` are -1 the actor will use its
         * "normal" size request instead of overriding it, i.e.
         * you can "unset" the size with -1.
         *
         * This function sets or unsets both the minimum and natural size.
         *
         * @param width New width of actor in pixels, or -1
         * @param height New height of actor in pixels, or -1
         */
        set_size(width: number, height: number): void;
        /**
         * Sets the #ClutterTextDirection for an actor
         *
         * The passed text direction must not be %CLUTTER_TEXT_DIRECTION_DEFAULT
         *
         * This function will recurse inside all the children of `self`
         *
         * @param text_dir the text direction for `self`
         */
        set_text_direction(text_dir: Clutter.TextDirection | null): void;
        /**
         * Overrides the transformations of a #ClutterActor with a custom
         * matrix, which will be applied relative to the origin of the
         * actor's allocation and to the actor's pivot point.
         *
         * The [property`Clutter`.Actor:transform] property is animatable.
         *
         * @param transform a #graphene_matrix_t, or %NULL to
         *   unset a custom transformation
         */
        set_transform(transform?: Graphene.Matrix | null): void;
        /**
         * Sets an additional translation transformation on a #ClutterActor,
         * relative to the [property`Clutter`.Actor:pivot-point].
         *
         * @param translate_x the translation along the X axis
         * @param translate_y the translation along the Y axis
         * @param translate_z the translation along the Z axis
         */
        set_translation(translate_x: number, translate_y: number, translate_z: number): void;
        /**
         * Forces a width on an actor, causing the actor's preferred width
         * and height (if any) to be ignored.
         *
         * If `width` is -1 the actor will use its preferred width request
         * instead of overriding it, i.e. you can "unset" the width with -1.
         *
         * This function sets both the minimum and natural size of the actor.
         *
         * @param width Requested new width for the actor, in pixels, or -1
         */
        set_width(width: number): void;
        /**
         * Sets the actor's X coordinate, relative to its parent, in pixels.
         *
         * Overrides any layout manager and forces a fixed position for
         * the actor.
         *
         * The [property`Clutter`.Actor:x] property is animatable.
         *
         * @param x the actor's position on the X axis
         */
        set_x(x: number): void;
        /**
         * Sets the horizontal alignment policy of a #ClutterActor, in case the
         * actor received extra horizontal space.
         *
         * See also the [property`Clutter`.Actor:x-align] property.
         *
         * @param x_align the horizontal alignment policy
         */
        set_x_align(x_align: Clutter.ActorAlign | null): void;
        /**
         * Sets whether a #ClutterActor should expand horizontally; this means
         * that layout manager should allocate extra space for the actor, if
         * possible.
         *
         * Setting an actor to expand will also make all its parent expand, so
         * that it's possible to build an actor tree and only set this flag on
         * its leaves and not on every single actor.
         *
         * @param expand whether the actor should expand horizontally
         */
        set_x_expand(expand: boolean): void;
        /**
         * Sets the actor's Y coordinate, relative to its parent, in pixels.#
         *
         * Overrides any layout manager and forces a fixed position for
         * the actor.
         *
         * The [property`Clutter`.Actor:y] property is animatable.
         *
         * @param y the actor's position on the Y axis
         */
        set_y(y: number): void;
        /**
         * Sets the vertical alignment policy of a #ClutterActor, in case the
         * actor received extra vertical space.
         *
         * See also the [property`Clutter`.Actor:y-align] property.
         *
         * @param y_align the vertical alignment policy
         */
        set_y_align(y_align: Clutter.ActorAlign | null): void;
        /**
         * Sets whether a #ClutterActor should expand horizontally; this means
         * that layout manager should allocate extra space for the actor, if
         * possible.
         *
         * Setting an actor to expand will also make all its parent expand, so
         * that it's possible to build an actor tree and only set this flag on
         * its leaves and not on every single actor.
         *
         * @param expand whether the actor should expand vertically
         */
        set_y_expand(expand: boolean): void;
        /**
         * Sets the actor's position on the Z axis.
         *
         * See [property`Clutter`.Actor:z-position].
         *
         * @param z_position the position on the Z axis
         */
        set_z_position(z_position: number): void;
        /**
         * Should be called inside the implementation of the
         * [vfunc`Clutter`.Actor.pick] virtual function in order to check whether
         * the actor should be picked or not.
         *
         * This function should never be called directly by applications.
         *
         * @returns %TRUE if the actor should be picked, %FALSE otherwise
         * @param pick_context a #ClutterPickContext
         */
        should_pick(pick_context: Clutter.PickContext): boolean;
        /**
         * Flags an actor to be displayed. An actor that isn't shown will not
         * be rendered on the stage.
         *
         * Actors are visible by default.
         *
         * If this function is called on an actor without a parent, the
         * [property`Clutter`.Actor:show-on-set-parent] will be set to %TRUE as a side
         * effect.
         */
        show(): void;
        /**
         * This function translates screen coordinates (`x,` `y)` to
         * coordinates relative to the actor. For example, it can be used to translate
         * screen events from global screen coordinates into actor-local coordinates.
         *
         * The conversion can fail, notably if the transform stack results in the
         * actor being projected on the screen as a mere line.
         *
         * The conversion should not be expected to be pixel-perfect due to the
         * nature of the operation. In general the error grows when the skewing
         * of the actor rectangle on screen increases.
         *
         * This function can be computationally intensive.
         *
         * This function only works when the allocation is up-to-date, i.e. inside of
         * the [vfunc`Clutter`.Actor.paint] implementation
         *
         * @returns %TRUE if conversion was successful.
         * @param x x screen coordinate of the point to unproject
         * @param y y screen coordinate of the point to unproject
         */
        transform_stage_point(x: number, y: number): [boolean, number, number];
        /**
         * Decreases the culling inhibitor counter. See clutter_actor_inhibit_culling()
         * for when inhibit culling is necessary.
         *
         * Calling this function without a matching call to
         * clutter_actor_inhibit_culling() is a programming error.
         */
        uninhibit_culling(): void;
        /**
         * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
         * unmaps its children if they were mapped.
         *
         * Calling this function is not encouraged: the default #ClutterActor
         * implementation of [vfunc`Clutter`.Actor.unmap] will also unmap any
         * eventual children by default when their parent is unmapped.
         *
         * When overriding [vfunc`Clutter`.Actor.unmap], it is mandatory to
         * chain up to the parent implementation.
         *
         * It is important to note that the implementation of the
         * [vfunc`Clutter`.Actor.unmap] virtual function may be called after
         * the [vfunc`Clutter`.Actor.destroy] or the [vfunc`GObject`.Object.dispose]
         * implementation, but it is guaranteed to be called before the
         * [vfunc`GObject`.Object.finalize] implementation.
         */
        unmap(): void;
        /**
         * Unrealization informs the actor that it may be being destroyed or
         * moved to another stage. The actor may want to destroy any
         * underlying graphics resources at this point. However it is
         * perfectly acceptable for it to retain the resources until the actor
         * is destroyed because Clutter only ever uses a single rendering
         * context and all of the graphics resources are valid on any stage.
         *
         * Because mapped actors must be realized, actors may not be
         * unrealized if they are mapped. This function hides the actor to be
         * sure it isn't mapped, an application-visible side effect that you
         * may not be expecting.
         *
         * This function should not be called by application code.
         *
         * This function should not really be in the public API, because
         * there isn't a good reason to call it. ClutterActor will already
         * unrealize things for you when it's important to do so.
         *
         * If you were using clutter_actor_unrealize() in a dispose
         * implementation, then don't, just chain up to ClutterActor's
         * dispose.
         *
         * If you were using clutter_actor_unrealize() to implement
         * unrealizing children of your container, then don't, ClutterActor
         * will already take care of that.
         */
        unrealize(): void;
        /**
         * Set `self'`s color state to the default.
         */
        unset_color_state(): void;
        // Inherited methods
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
        get_actor(): Clutter.Actor;
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
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         *
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         *
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Clutter.Actor;
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
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         *
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function
         *     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from the transformation function
         *     from the `target` to the `source,` or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free
         *     resources used by the transformation functions, or %NULL if not required
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         *
         * @returns the data if found,
         *          or %NULL if no such data exists.
         * @param key name of the key for that association
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         *
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         *
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         *
         * @returns %TRUE if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         *
         * @param pspec the #GParamSpec of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         *
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         *
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         *
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         *
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         *
         * @returns the data if found, or %NULL
         *          if no such data exists.
         * @param key name of the key
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         *
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         *
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         *
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         *
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         *
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         *
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         *
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }
    class ActorAccessible extends AtkClasses.GObjectAccessible implements Atk.Component {
        static '$gtype': GObject.GType<ActorAccessible>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.ActorAccessible.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.ActorAccessible.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.ActorAccessible.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ActorAccessible.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ActorAccessible.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ActorAccessible.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ActorAccessible.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ActorAccessible.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Inherited methods
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         *
         * @returns %TRUE or %FALSE indicating whether the specified point is within
         * the extent of the `component` or not
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component,` on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         *
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         *
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         *
         * @returns an #AtkLayer which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         *
         * @returns a gint which is the zorder of the component, i.e. the depth at
         * which the component is shown in relation to other components in the same
         * container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component'`s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         *
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        get_position(coord_type: Atk.CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         *
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         *
         * @returns a reference to the accessible
         * child, if one exists
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         *
         * @param handler_id the handler id of the focus handler to be removed
         * from `component`
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         *
         * @returns whether scrolling was successful.
         * @param type specify where the object should be made visible.
         */
        scroll_to(type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         *
         * @returns whether scrolling was successful.
         * @param coords specify whether coordinates are relative to the screen or to the
         * parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         */
        scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         *
         * @returns %TRUE or %FALSE whether the extents were set or not
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         *
         * @returns %TRUE or %FALSE whether or not the position was set or not
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the component's top level window
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         *
         * @returns %TRUE or %FALSE whether the size was set or not
         * @param width width to set for `component`
         * @param height height to set for `component`
         */
        set_size(width: number, height: number): boolean;
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         *
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component,` on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         *
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component'`s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         *
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         *
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         *
         * @param handler_id the handler id of the focus handler to be removed
         * from `component`
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         *
         * @param type specify where the object should be made visible.
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         *
         * @param coords specify whether coordinates are relative to the screen or to the
         * parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         *
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for `component`
         * @param height height to set for `component`
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the components top level window
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         *
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen
         * or to the component's top level window
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         *
         * @param width width to set for `component`
         * @param height height to set for `component`
         */
        vfunc_set_size(width: number, height: number): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function
         *     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from the transformation function
         *     from the `target` to the `source,` or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free
         *     resources used by the transformation functions, or %NULL if not required
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         *
         * @returns the data if found,
         *          or %NULL if no such data exists.
         * @param key name of the key for that association
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         *
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         *
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         *
         * @returns %TRUE if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         *
         * @param pspec the #GParamSpec of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         *
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         *
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         *
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         *
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         *
         * @returns the data if found, or %NULL
         *          if no such data exists.
         * @param key name of the key
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         *
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         *
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         *
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         *
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         *
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         *
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         *
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }
    abstract class ActorMeta extends GObjectClasses.InitiallyUnowned {
        static '$gtype': GObject.GType<ActorMeta>;
        // Properties
        /**
         * The #ClutterActor attached to the #ClutterActorMeta instance
         */
        get actor(): Clutter.Actor;
        /**
         * Whether or not the #ClutterActorMeta is enabled
         */
        get enabled(): boolean;
        set enabled(val: boolean);
        /**
         * The unique name to access the #ClutterActorMeta
         */
        get name(): string;
        set name(val: string);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.ActorMeta.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.ActorMeta.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.ActorMeta.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ActorMeta.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ActorMeta.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ActorMeta.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ActorMeta.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ActorMeta.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Virtual function, called when `meta` is attached or detached
         * from a #ClutterActor.
         *
         * @param actor the actor attached to `meta,` or %NULL
         */
        vfunc_set_actor(actor?: Clutter.Actor | null): void;
        /**
         * Sets whether `meta` should be enabled or not
         *
         * @param is_enabled whether `meta` is enabled
         */
        vfunc_set_enabled(is_enabled: boolean): void;
        // Methods
        /**
         * Retrieves a pointer to the [class`Actor]` that owns `meta`
         *
         * @returns a pointer to a #ClutterActor or %NULL
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves whether `meta` is enabled
         *
         * @returns %TRUE if the #ClutterActorMeta instance is enabled
         */
        get_enabled(): boolean;
        /**
         * Retrieves the name set using [method`ActorMeta`.set_name]
         *
         * @returns the name of the #ClutterActorMeta
         *   instance, or %NULL if none was set. The returned string is owned
         *   by the #ClutterActorMeta instance and it should not be modified
         *   or freed
         */
        get_name(): string;
        /**
         * Sets whether `meta` should be enabled or not
         *
         * @param is_enabled whether `meta` is enabled
         */
        set_enabled(is_enabled: boolean): void;
        /**
         * Sets the name of `meta`
         *
         * The name can be used to identify the #ClutterActorMeta instance
         *
         * @param name the name of `meta`
         */
        set_name(name: string): void;
    }
    class AlignConstraint extends Constraint {
        static '$gtype': GObject.GType<AlignConstraint>;
        // Properties
        /**
         * The axis to be used to compute the alignment
         */
        get align_axis(): Clutter.AlignAxis;
        set align_axis(val: Clutter.AlignAxis);
        /**
         * The axis to be used to compute the alignment
         */
        get alignAxis(): Clutter.AlignAxis;
        set alignAxis(val: Clutter.AlignAxis);
        /**
         * The alignment factor, as a normalized value between 0.0 and 1.0
         *
         * The factor depends on the #ClutterAlignConstraint:align-axis property:
         * with an align-axis value of %CLUTTER_ALIGN_X_AXIS, 0.0 means left and
         * 1.0 means right; with a value of %CLUTTER_ALIGN_Y_AXIS, 0.0 means top
         * and 1.0 means bottom.
         */
        get factor(): number;
        set factor(val: number);
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
        get pivot_point(): Graphene.Point;
        set pivot_point(val: Graphene.Point);
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
        get pivotPoint(): Graphene.Point;
        set pivotPoint(val: Graphene.Point);
        /**
         * The #ClutterActor used as the source for the alignment.
         *
         * The #ClutterActor must not be a child or a grandchild of the actor
         * using the constraint.
         */
        get source(): Clutter.Actor;
        set source(val: Clutter.Actor);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.AlignConstraint.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.AlignConstraint.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(source: Clutter.Actor | null, axis: Clutter.AlignAxis, factor: number): Clutter.AlignConstraint;
        // Signals
        connect<K extends keyof Clutter.AlignConstraint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.AlignConstraint.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.AlignConstraint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.AlignConstraint.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.AlignConstraint.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.AlignConstraint.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the value set using [method`Clutter`.AlignConstraint.set_align_axis]
         *
         * @returns the alignment axis
         */
        get_align_axis(): Clutter.AlignAxis;
        /**
         * Retrieves the factor set using [method`Clutter`.AlignConstraint.set_factor]
         *
         * @returns the alignment factor
         */
        get_factor(): number;
        /**
         * Gets the pivot point used by the constraint set with
         * [method`Clutter`.AlignConstraint.set_pivot_point]. If no custom pivot
         * point is set, -1 is set.
         */
        get_pivot_point(): [Graphene.Point];
        /**
         * Retrieves the source of the alignment
         *
         * @returns the #ClutterActor used as the source
         *   of the alignment
         */
        get_source(): Clutter.Actor;
        /**
         * Sets the axis to which the alignment refers to
         *
         * @param axis the axis to which the alignment refers to
         */
        set_align_axis(axis: Clutter.AlignAxis | null): void;
        /**
         * Sets the alignment factor of the constraint
         *
         * The factor depends on the #ClutterAlignConstraint:align-axis property
         * and it is a value between 0.0 (meaning left, when
         * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
         * meaning top, when #ClutterAlignConstraint:align-axis is set to
         * %CLUTTER_ALIGN_Y_AXIS) and 1.0 (meaning right, when
         * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
         * meaning bottom, when #ClutterAlignConstraint:align-axis is set to
         * %CLUTTER_ALIGN_Y_AXIS). A value of 0.5 aligns in the middle in either
         * cases
         *
         * @param factor the alignment factor, between 0.0 and 1.0
         */
        set_factor(factor: number): void;
        /**
         * Sets the pivot point used by the constraint, the pivot point is the
         * point in the constraint actor around which the aligning is applied,
         * with (0, 0) being the top left corner of the actor and (1, 1) the
         * bottom right corner of the actor.
         *
         * If -1 is used, the pivot point is unset and the constrained actor
         * will be aligned to always stay inside the source actor.
         *
         * @param pivot_point A #GraphenePoint
         */
        set_pivot_point(pivot_point: Graphene.Point): void;
        /**
         * Sets the source of the alignment constraint
         *
         * @param source a #ClutterActor, or %NULL to unset the source
         */
        set_source(source?: Clutter.Actor | null): void;
    }
    abstract class Backend extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Backend>;
        // Properties
        get context(): Clutter.Context;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Backend.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Backend.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Backend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Backend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Backend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Backend.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the #CoglContext associated with the given clutter
         * `backend`. A #CoglContext is required when using some of the
         * experimental 2.0 Cogl API.
         *
         * Since CoglContext is itself experimental API this API should
         * be considered experimental too.
         *
         * This API is not yet supported on OSX because OSX still
         * uses the stub Cogl winsys and the Clutter backend doesn't
         * explicitly create a CoglContext.
         *
         * @returns The #CoglContext associated with `backend`.
         */
        get_cogl_context(): Cogl.Context;
        /**
         * Returns the default seat
         *
         * @returns the default seat
         */
        get_default_seat(): Clutter.Seat;
        /**
         * Returns the input method used by Clutter
         *
         * @returns the input method
         */
        get_input_method(): Clutter.InputMethod;
        /**
         * Returns the key focus for stage
         *
         * @returns the #ClutterKeyFocus representing key focus
         * @param stage a #ClutterStage
         */
        get_key_focus(stage: Clutter.Stage): Clutter.KeyFocus;
        /**
         * Gets the on-screen sprite typically considered "the pointer"
         *
         * @returns The "pointer" sprite
         * @param stage a #ClutterStage
         */
        get_pointer_sprite(stage: Clutter.Stage): Clutter.Sprite;
        /**
         * Gets the resolution for font handling on the screen.
         *
         * The resolution is a scale factor between points specified in a
         * #PangoFontDescription and cairo units. The default value is 96.0,
         * meaning that a 10 point font will be 13 units
         * high (10 * 96. / 72. = 13.3).
         *
         * Clutter will set the resolution using the current backend when
         * initializing; the resolution is also stored in the
         * #ClutterSettings:font-dpi property.
         *
         * @returns the current resolution, or -1 if no resolution
         *   has been set.
         */
        get_resolution(): number;
        /**
         * Retrieves the #ClutterSprite affected by `for_event`
         *
         * @returns a #ClutterSprite, or %NULL if event does not drive one
         * @param stage A #ClutterStage
         * @param for_event Event to get sprite for
         */
        get_sprite(stage: Clutter.Stage, for_event: Clutter.Event): Clutter.Sprite | null;
        /**
         * Sets the input method to be used by Clutter
         *
         * @param method the input method
         */
        set_input_method(method?: Clutter.InputMethod | null): void;
    }
    class BinLayout extends LayoutManager {
        static '$gtype': GObject.GType<BinLayout>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.BinLayout.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.BinLayout.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.BinLayout;
        // Signals
        connect<K extends keyof Clutter.BinLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BinLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.BinLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BinLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.BinLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.BinLayout.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class BindConstraint extends Constraint {
        static '$gtype': GObject.GType<BindConstraint>;
        // Properties
        /**
         * The coordinate to be bound
         */
        get coordinate(): Clutter.BindCoordinate;
        set coordinate(val: Clutter.BindCoordinate);
        /**
         * The offset, in pixels, to be applied to the binding
         */
        get offset(): number;
        set offset(val: number);
        /**
         * The #ClutterActor used as the source for the binding.
         *
         * The #ClutterActor must not be contained inside the actor associated
         * to the constraint.
         */
        get source(): Clutter.Actor;
        set source(val: Clutter.Actor);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.BindConstraint.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.BindConstraint.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(
            source: Clutter.Actor | null,
            coordinate: Clutter.BindCoordinate,
            offset: number,
        ): Clutter.BindConstraint;
        // Signals
        connect<K extends keyof Clutter.BindConstraint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BindConstraint.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.BindConstraint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BindConstraint.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.BindConstraint.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.BindConstraint.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the bound coordinate of the constraint
         *
         * @returns the bound coordinate
         */
        get_coordinate(): Clutter.BindCoordinate;
        /**
         * Retrieves the offset set using [method`Clutter`.BindConstraint.set_offset]
         *
         * @returns the offset, in pixels
         */
        get_offset(): number;
        /**
         * Retrieves the #ClutterActor set using [method`Clutter`.BindConstraint.set_source]
         *
         * @returns a pointer to the source actor
         */
        get_source(): Clutter.Actor;
        /**
         * Sets the coordinate to bind in the constraint
         *
         * @param coordinate the coordinate to bind
         */
        set_coordinate(coordinate: Clutter.BindCoordinate | null): void;
        /**
         * Sets the offset to be applied to the constraint
         *
         * @param offset the offset to apply, in pixels
         */
        set_offset(offset: number): void;
        /**
         * Sets the source #ClutterActor for the constraint
         *
         * @param source a #ClutterActor, or %NULL to unset the source
         */
        set_source(source?: Clutter.Actor | null): void;
    }
    class BindingPool extends GObjectClasses.Object {
        static '$gtype': GObject.GType<BindingPool>;
        // Properties
        /**
         * The unique name of the #ClutterBindingPool.
         */
        get name(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.BindingPool.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.BindingPool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(name: string): Clutter.BindingPool;
        // Signals
        connect<K extends keyof Clutter.BindingPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BindingPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.BindingPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BindingPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.BindingPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.BindingPool.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Finds the #ClutterBindingPool with `name`.
         *
         * @param name the name of the binding pool to find
         */
        static find(name: string): Clutter.BindingPool;
        /**
         * Retrieves the #ClutterBindingPool for the given #GObject class
         * and, eventually, creates it. This function is a wrapper around
         * [ctor`Clutter`.BindingPool.new] and uses the class type name as the
         * unique name for the binding pool.
         *
         * Calling this function multiple times will return the same
         * #ClutterBindingPool.
         *
         * A binding pool for a class can also be retrieved using
         * [func`Clutter`.BindingPool.find] with the class type name:
         *
         * ```
         *   pool = clutter_binding_pool_find (G_OBJECT_TYPE_NAME (instance));
         * ```
         *
         * @param klass a #GObjectClass pointer
         */
        static get_for_class(klass?: any | null): Clutter.BindingPool;
        // Methods
        /**
         * Activates the callback associated to the action that is
         * bound to the `key_val` and `modifiers` pair.
         *
         * The callback has the following signature:
         *
         * ```
         *   void (* callback) (GObject             *gobject,
         *                      const gchar         *action_name,
         *                      guint                key_val,
         *                      ClutterModifierType  modifiers,
         *                      gpointer             user_data);
         * ```
         *
         * Where the #GObject instance is `gobject` and the user data
         * is the one passed when installing the action with
         * [method`Clutter`.BindingPool.install_action].
         *
         * If the action bound to the `key_val,` `modifiers` pair has been
         * blocked using [method`Clutter`.BindingPool.block_action], the callback
         * will not be invoked, and this function will return %FALSE.
         *
         * @returns %TRUE if an action was found and was activated
         * @param key_val the key symbol
         * @param modifiers bitmask for the modifiers
         * @param gobject a #GObject
         */
        activate(key_val: number, modifiers: Clutter.ModifierType | null, gobject: GObject.Object): boolean;
        /**
         * Blocks all the actions with name `action_name` inside `pool`.
         *
         * @param action_name an action name
         */
        block_action(action_name: string): void;
        /**
         * Retrieves the name of the action matching the given key symbol
         * and modifiers bitmask.
         *
         * @returns the name of the action, if found, or %NULL. The
         *   returned string is owned by the binding pool and should never
         *   be modified or freed
         * @param key_val a key symbol
         * @param modifiers a bitmask for the modifiers
         */
        find_action(key_val: number, modifiers: Clutter.ModifierType | null): string;
        /**
         * Installs a new action inside a #ClutterBindingPool. The action
         * is bound to `key_val` and `modifiers`.
         *
         * The same action name can be used for multiple `key_val,` `modifiers`
         * pairs.
         *
         * When an action has been activated using [method`Clutter`.BindingPool.activate]
         * the passed `callback` will be invoked (with `data)`.
         *
         * Actions can be blocked with [method`Clutter`.BindingPool.block_action]
         * and then unblocked using [method`Clutter`.BindingPool.unblock_action].
         *
         * @param action_name the name of the action
         * @param key_val key symbol
         * @param modifiers bitmask of modifiers
         * @param callback function to be called
         *   when the action is activated
         */
        install_action(
            action_name: string,
            key_val: number,
            modifiers: Clutter.ModifierType | null,
            callback: GObject.Callback,
        ): void;
        /**
         * A #GClosure variant of [method`Clutter`.BindingPool.install_action].
         *
         * Installs a new action inside a #ClutterBindingPool. The action
         * is bound to `key_val` and `modifiers`.
         *
         * The same action name can be used for multiple `key_val,` `modifiers`
         * pairs.
         *
         * When an action has been activated using [method`Clutter`.BindingPool.activate]
         * the passed `closure` will be invoked.
         *
         * Actions can be blocked with [method`Clutter`.BindingPool.block_action]
         * and then unblocked using [method`Clutter`.BindingPool.unblock_action].
         *
         * @param action_name the name of the action
         * @param key_val key symbol
         * @param modifiers bitmask of modifiers
         * @param closure a #GClosure
         */
        install_closure(
            action_name: string,
            key_val: number,
            modifiers: Clutter.ModifierType | null,
            closure: GObject.Closure,
        ): void;
        /**
         * Allows overriding the action for `key_val` and `modifiers` inside a
         * #ClutterBindingPool. See [method`Clutter`.BindingPool.install_action].
         *
         * When an action has been activated using [method`Clutter`.BindingPool.activate]
         * the passed `callback` will be invoked (with `data)`.
         *
         * Actions can be blocked with [method`Clutter`.BindingPool.block_action]
         * and then unblocked using [method`Clutter`.BindingPool.unblock_action].
         *
         * @param key_val key symbol
         * @param modifiers bitmask of modifiers
         * @param callback function to be called when the action is activated
         */
        override_action(key_val: number, modifiers: Clutter.ModifierType | null, callback: GObject.Callback): void;
        /**
         * A #GClosure variant of [method`Clutter`.BindingPool.override_action].
         *
         * Allows overriding the action for `key_val` and `modifiers` inside a
         * #ClutterBindingPool. See [method`Clutter`.BindingPool.install_closure].
         *
         * When an action has been activated using [method`Clutter`.BindingPool.activate]
         * the passed `callback` will be invoked (with `data)`.
         *
         * Actions can be blocked with [method`Clutter`.BindingPool.block_action]
         * and then unblocked using [method`Clutter`.BindingPool.unblock_action].
         *
         * @param key_val key symbol
         * @param modifiers bitmask of modifiers
         * @param closure a #GClosure
         */
        override_closure(key_val: number, modifiers: Clutter.ModifierType | null, closure: GObject.Closure): void;
        /**
         * Removes the action matching the given `key_val,` `modifiers` pair,
         * if any exists.
         *
         * @param key_val a key symbol
         * @param modifiers a bitmask for the modifiers
         */
        remove_action(key_val: number, modifiers: Clutter.ModifierType | null): void;
        /**
         * Unblockes all the actions with name `action_name` inside `pool`.
         *
         * Unblocking an action does not cause the callback bound to it to
         * be invoked in case [method`Clutter`.BindingPool.activate] was called on
         * an action previously blocked with [method`Clutter`.BindingPool.block_action].
         *
         * @param action_name an action name
         */
        unblock_action(action_name: string): void;
    }
    class BlurEffect extends OffscreenEffect {
        static '$gtype': GObject.GType<BlurEffect>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.BlurEffect.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.BlurEffect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.BlurEffect;
        // Signals
        connect<K extends keyof Clutter.BlurEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BlurEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.BlurEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BlurEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.BlurEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.BlurEffect.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class BoxLayout extends LayoutManager {
        static '$gtype': GObject.GType<BoxLayout>;
        // Properties
        /**
         * Whether the #ClutterBoxLayout should arrange its children
         * homogeneously, i.e. all children get the same size
         */
        get homogeneous(): boolean;
        set homogeneous(val: boolean);
        /**
         * The orientation of the #ClutterBoxLayout, either horizontal
         * or vertical
         */
        get orientation(): Clutter.Orientation;
        set orientation(val: Clutter.Orientation);
        /**
         * The spacing between children of the #ClutterBoxLayout, in pixels
         */
        get spacing(): number;
        set spacing(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.BoxLayout.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.BoxLayout.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.BoxLayout;
        // Signals
        connect<K extends keyof Clutter.BoxLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BoxLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.BoxLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BoxLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.BoxLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.BoxLayout.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves if the children sizes are allocated homogeneously.
         *
         * @returns %TRUE if the #ClutterBoxLayout is arranging its children
         *   homogeneously, and %FALSE otherwise
         */
        get_homogeneous(): boolean;
        /**
         * Retrieves the orientation of the `layout`.
         *
         * @returns the orientation of the layout
         */
        get_orientation(): Clutter.Orientation;
        /**
         * Retrieves the spacing set using [method`Clutter`.BoxLayout.set_spacing]
         *
         * @returns the spacing between children of the #ClutterBoxLayout
         */
        get_spacing(): number;
        /**
         * Sets whether the size of `layout` children should be
         * homogeneous
         *
         * @param homogeneous %TRUE if the layout should be homogeneous
         */
        set_homogeneous(homogeneous: boolean): void;
        /**
         * Sets the orientation of the #ClutterBoxLayout layout manager.
         *
         * @param orientation the orientation of the #ClutterBoxLayout
         */
        set_orientation(orientation: Clutter.Orientation | null): void;
        /**
         * Sets the spacing between children of `layout`
         *
         * @param spacing the spacing between children of the layout, in pixels
         */
        set_spacing(spacing: number): void;
    }
    class BrightnessContrastEffect extends OffscreenEffect {
        static '$gtype': GObject.GType<BrightnessContrastEffect>;
        // Properties
        /**
         * The brightness change to apply to the effect.
         *
         * This property uses a #CoglColor to represent the changes to each
         * color channel. The range is [ 0, 255 ], with 127 as the value used
         * to indicate no change; values smaller than 127 indicate a decrease
         * in brightness, and values larger than 127 indicate an increase in
         * brightness.
         */
        get brightness(): Cogl.Color;
        set brightness(val: Cogl.Color);
        /**
         * The contrast change to apply to the effect.
         *
         * This property uses a #CoglColor to represent the changes to each
         * color channel. The range is [ 0, 255 ], with 127 as the value used
         * to indicate no change; values smaller than 127 indicate a decrease
         * in contrast, and values larger than 127 indicate an increase in
         * contrast.
         */
        get contrast(): Cogl.Color;
        set contrast(val: Cogl.Color);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.BrightnessContrastEffect.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.BrightnessContrastEffect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.BrightnessContrastEffect;
        // Signals
        connect<K extends keyof Clutter.BrightnessContrastEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BrightnessContrastEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.BrightnessContrastEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.BrightnessContrastEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.BrightnessContrastEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.BrightnessContrastEffect.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the change in brightness used by `effect`.
         */
        get_brightness(): [number, number, number];
        /**
         * Retrieves the contrast value used by `effect`.
         */
        get_contrast(): [number, number, number];
        /**
         * The range of `brightness` is [-1.0, 1.0], where 0.0 designates no change;
         * a value below 0.0 indicates a decrease in brightness; and a value
         * above 0.0 indicates an increase of brightness.
         *
         * @param brightness the brightness change for all three components (r, g, b)
         */
        set_brightness(brightness: number): void;
        /**
         * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
         * values below 0.0 mean a decrease in brightness, and values above indicate
         * an increase.
         *
         * @param red red component of the change in brightness
         * @param green green component of the change in brightness
         * @param blue blue component of the change in brightness
         */
        set_brightness_full(red: number, green: number, blue: number): void;
        /**
         * The range for `contrast` is [-1.0, 1.0], where 0.0 designates no change;
         * a value below 0.0 indicates a decrease in contrast; and a value above
         * 0.0 indicates an increase.
         *
         * @param contrast contrast change for all three channels
         */
        set_contrast(contrast: number): void;
        /**
         * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
         * values below 0.0 mean a decrease in contrast, and values above indicate
         * an increase.
         *
         * @param red red component of the change in contrast
         * @param green green component of the change in contrast
         * @param blue blue component of the change in contrast
         */
        set_contrast_full(red: number, green: number, blue: number): void;
    }
    class ClickGesture extends PressGesture {
        static '$gtype': GObject.GType<ClickGesture>;
        // Properties
        /**
         * The number of clicks required for the gesture to recognize, this can
         * be used to implement double-click gestures.
         *
         * Note that for single clicks, the gesture will recognize on button-release,
         * while for double or more clicks, the gesture will recognize on
         * button-press.
         */
        get n_clicks_required(): number;
        set n_clicks_required(val: number);
        /**
         * The number of clicks required for the gesture to recognize, this can
         * be used to implement double-click gestures.
         *
         * Note that for single clicks, the gesture will recognize on button-release,
         * while for double or more clicks, the gesture will recognize on
         * button-press.
         */
        get nClicksRequired(): number;
        set nClicksRequired(val: number);
        /**
         * Set this to %TRUE to make the click gesture recognize on
         * button-press/touch-begin rather than on button-release/touch-end events.
         *
         * Defaults to %FALSE.
         */
        get recognize_on_press(): boolean;
        set recognize_on_press(val: boolean);
        /**
         * Set this to %TRUE to make the click gesture recognize on
         * button-press/touch-begin rather than on button-release/touch-end events.
         *
         * Defaults to %FALSE.
         */
        get recognizeOnPress(): boolean;
        set recognizeOnPress(val: boolean);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.ClickGesture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.ClickGesture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.ClickGesture;
        // Signals
        connect<K extends keyof Clutter.ClickGesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ClickGesture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ClickGesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ClickGesture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ClickGesture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ClickGesture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the number of clicks required for the click gesture to recognize.
         *
         * @returns The number of clicks
         */
        get_n_clicks_required(): number;
        /**
         * Get whether the click gesture recognizes on button-press/touch-begin events.
         *
         * @returns %TRUE when the gesture recognizes on press.
         */
        get_recognize_on_press(): boolean;
        /**
         * Sets the number of clicks required for the gesture to recognize, this can
         * be used to implement double-click gestures.
         *
         * See also #ClutterClickGesture:n-clicks-required.
         *
         * @param n_clicks_required the number of clicks required
         */
        set_n_clicks_required(n_clicks_required: number): void;
        /**
         * Set this to %TRUE to make the click gesture recognize on
         * button-press/touch-begin rather than on button-release/touch-end events.
         *
         * See also #ClutterClickGesture:recognize-on-press.
         *
         * @param recognize_on_press whether to recognize on press
         */
        set_recognize_on_press(recognize_on_press: boolean): void;
    }
    class Clone<A extends Clutter.Actor = Clutter.Actor>
        extends Actor
        implements Atk.ImplementorIface, Clutter.Animatable
    {
        static '$gtype': GObject.GType<Clone>;
        // Properties
        /**
         * This property specifies the source actor being cloned.
         */
        get source(): A;
        set source(val: A);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Clone.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Clone.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(source: Clutter.Actor): Clutter.Clone;
        // Conflicted with Clutter.Actor.new
        static new(...args: never[]): any;
        // Signals
        connect<K extends keyof Clutter.Clone.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Clone.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Clone.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Clone.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Clone.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Clone.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the source #ClutterActor being cloned by `self`.
         *
         * @returns the actor source for the clone
         */
        get_source(): A;
        /**
         * Sets `source` as the source actor to be cloned by `self`.
         *
         * @param source a #ClutterActor, or %NULL
         */
        set_source(source?: A | null): void;
        // Inherited methods
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
        get_actor(): Clutter.Actor;
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
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         *
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         *
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Clutter.Actor;
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
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         *
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function
         *     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from the transformation function
         *     from the `target` to the `source,` or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free
         *     resources used by the transformation functions, or %NULL if not required
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         *
         * @returns the data if found,
         *          or %NULL if no such data exists.
         * @param key name of the key for that association
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         *
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         *
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         *
         * @returns %TRUE if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         *
         * @param pspec the #GParamSpec of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         *
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         *
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         *
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         *
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         *
         * @returns the data if found, or %NULL
         *          if no such data exists.
         * @param key name of the key
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         *
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         *
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         *
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         *
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         *
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         *
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         *
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }
    class ColorManager extends GObjectClasses.Object {
        static '$gtype': GObject.GType<ColorManager>;
        // Properties
        /**
         * The associated ClutterContext.
         */
        get context(): Clutter.Context;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.ColorManager.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.ColorManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.ColorManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ColorManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ColorManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ColorManager.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class ColorState extends GObjectClasses.Object {
        static '$gtype': GObject.GType<ColorState>;
        // Properties
        /**
         * The associated ClutterContext.
         */
        get context(): Clutter.Context;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.ColorState.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.ColorState.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.ColorState.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorState.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ColorState.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorState.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ColorState.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ColorState.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_append_transform_snippet(
            target_color_state: Clutter.ColorState,
            snippet_globals: GLib.String,
            snippet_source: GLib.String,
            snippet_color_var: string,
        ): void;
        vfunc_do_transform_from_XYZ(data: number[], n_samples: number): void;
        vfunc_do_transform_to_XYZ(data: number[], n_samples: number): void;
        vfunc_equals(other_color_state: Clutter.ColorState): boolean;
        /**
         * Retrieves a variant of `color_state` that is suitable for blending. This
         * usually is a variant with linear transfer characteristics. If `color_state`
         * already is a #ClutterColorState suitable for blending, then `color_state` is
         * returned.
         *
         * If `force` is TRUE then linear transfer characteristics are used always.
         *
         * @param force if a linear variant should be forced
         */
        vfunc_get_blending(force: boolean): Clutter.ColorState;
        vfunc_init_color_transform_key(
            target_color_state: Clutter.ColorState,
            flags: Clutter.ColorStateTransformFlags,
            key: Clutter.ColorTransformKey,
        ): void;
        vfunc_needs_mapping(target_color_state: Clutter.ColorState): boolean;
        vfunc_required_format(): Clutter.EncodingRequiredFormat;
        vfunc_to_string(): string;
        vfunc_update_uniforms(target_color_state: Clutter.ColorState, pipeline: Cogl.Pipeline): void;
        // Methods
        add_pipeline_transform(
            target_color_state: Clutter.ColorState,
            pipeline: Cogl.Pipeline,
            flags: Clutter.ColorStateTransformFlags | null,
        ): void;
        /**
         * Applies the transform to the given #ClutterColorState
         *
         * @param target_color_state the target a #ClutterColorState
         * @param data The transform data
         * @param n_samples The number of data samples
         */
        do_transform(target_color_state: Clutter.ColorState, data: number[], n_samples: number): void;
        equals(other_color_state: Clutter.ColorState): boolean;
        /**
         * Retrieves a variant of `color_state` that is suitable for blending. This
         * usually is a variant with linear transfer characteristics. If `color_state`
         * already is a #ClutterColorState suitable for blending, then `color_state` is
         * returned.
         *
         * If `force` is TRUE then linear transfer characteristics are used always.
         *
         * @returns the #ClutterColorState suitable for blending
         * @param force if a linear variant should be forced
         */
        get_blending(force: boolean): Clutter.ColorState;
        get_id(): number;
        needs_mapping(target_color_state: Clutter.ColorState): boolean;
        /**
         * Applies the tone mapping to the given #ClutterColorState
         *
         * @param other_color_state the other a #ClutterColorState
         * @param data The data
         * @param n_samples The number of data samples
         */
        params_do_tone_mapping(other_color_state: Clutter.ColorState, data: number[], n_samples: number): void;
        required_format(): Clutter.EncodingRequiredFormat;
        to_string(): string;
        update_uniforms(target_color_state: Clutter.ColorState, pipeline: Cogl.Pipeline): void;
    }
    class ColorStateIcc extends ColorState {
        static '$gtype': GObject.GType<ColorStateIcc>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.ColorStateIcc.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.ColorStateIcc.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(context: Clutter.Context, icc_bytes: number, icc_length: number): Clutter.ColorStateIcc;
        // Signals
        connect<K extends keyof Clutter.ColorStateIcc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorStateIcc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ColorStateIcc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorStateIcc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ColorStateIcc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ColorStateIcc.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_file(): Mtk.AnonymousFile;
    }
    class ColorStateParams extends ColorState {
        static '$gtype': GObject.GType<ColorStateParams>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.ColorStateParams.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.ColorStateParams.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(
            context: Clutter.Context,
            colorspace: Clutter.Colorspace,
            transfer_function: Clutter.TransferFunction,
        ): Clutter.ColorStateParams;
        static new_from_cicp(context: Clutter.Context, cicp: Clutter.Cicp): Clutter.ColorStateParams;
        static new_from_primitives(
            context: Clutter.Context,
            colorimetry: Clutter.Colorimetry,
            eotf: Clutter.EOTF,
            luminance: Clutter.Luminance,
        ): Clutter.ColorStateParams;
        static new_full(
            context: Clutter.Context,
            colorspace: Clutter.Colorspace,
            transfer_function: Clutter.TransferFunction,
            primaries: Clutter.Primaries,
            gamma_exp: number,
            min_lum: number,
            max_lum: number,
            ref_lum: number,
            _ref_is_1_0: boolean,
        ): Clutter.ColorStateParams;
        // Signals
        connect<K extends keyof Clutter.ColorStateParams.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorStateParams.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ColorStateParams.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorStateParams.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ColorStateParams.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ColorStateParams.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_colorimetry(): Clutter.Colorimetry;
        get_eotf(): Clutter.EOTF;
        get_luminance(): Clutter.Luminance;
    }
    class ColorizeEffect extends OffscreenEffect {
        static '$gtype': GObject.GType<ColorizeEffect>;
        // Properties
        /**
         * The tint to apply to the actor
         */
        get tint(): Cogl.Color;
        set tint(val: Cogl.Color);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.ColorizeEffect.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.ColorizeEffect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(tint: Cogl.Color): Clutter.ColorizeEffect;
        // Signals
        connect<K extends keyof Clutter.ColorizeEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorizeEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ColorizeEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ColorizeEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ColorizeEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ColorizeEffect.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the tint used by `effect`
         */
        get_tint(): [Cogl.Color];
        /**
         * Sets the tint to be used when colorizing
         *
         * @param tint the color to be used
         */
        set_tint(tint: Cogl.Color): void;
    }
    abstract class Constraint extends ActorMeta {
        static '$gtype': GObject.GType<Constraint>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Constraint.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Constraint.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Constraint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Constraint.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Constraint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Constraint.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Constraint.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Constraint.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * virtual function used to update the allocation
         *   of the #ClutterActor using the #ClutterConstraint
         *
         * @param actor
         * @param allocation
         */
        vfunc_update_allocation(actor: Clutter.Actor, allocation: Clutter.ActorBox): void;
        /**
         * Asks the `constraint` to update the size request of a #ClutterActor.
         *
         * @param actor a #ClutterActor
         * @param direction a #ClutterOrientation
         * @param for_size the size in the opposite direction
         * @param minimum_size the minimum size to modify
         * @param natural_size the natural size to modify
         */
        vfunc_update_preferred_size(
            actor: Clutter.Actor,
            direction: Clutter.Orientation,
            for_size: number,
            minimum_size: number,
            natural_size: number,
        ): [number, number];
        // Methods
        /**
         * Asks the `constraint` to update the size request of a #ClutterActor.
         *
         * @param actor a #ClutterActor
         * @param direction a #ClutterOrientation
         * @param for_size the size in the opposite direction
         * @param minimum_size the minimum size to modify
         * @param natural_size the natural size to modify
         */
        update_preferred_size(
            actor: Clutter.Actor,
            direction: Clutter.Orientation | null,
            for_size: number,
            minimum_size: number,
            natural_size: number,
        ): [number, number];
    }
    class Context extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Context>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Context.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Context.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Context.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_backend(): Clutter.Backend;
        get_color_manager(): Clutter.ColorManager;
        get_settings(): Clutter.Settings;
        get_text_direction(): Clutter.TextDirection;
    }
    abstract class DeformEffect extends OffscreenEffect {
        static '$gtype': GObject.GType<DeformEffect>;
        // Properties
        /**
         * A pipeline to be used when painting the back of the actor
         * to which this effect has been applied
         *
         * By default, no pipeline will be used
         */
        get back_pipeline(): Cogl.Pipeline;
        set back_pipeline(val: Cogl.Pipeline);
        /**
         * A pipeline to be used when painting the back of the actor
         * to which this effect has been applied
         *
         * By default, no pipeline will be used
         */
        get backPipeline(): Cogl.Pipeline;
        set backPipeline(val: Cogl.Pipeline);
        /**
         * The number of horizontal tiles. The bigger the number, the
         * smaller the tiles
         */
        get x_tiles(): number;
        set x_tiles(val: number);
        /**
         * The number of horizontal tiles. The bigger the number, the
         * smaller the tiles
         */
        get xTiles(): number;
        set xTiles(val: number);
        /**
         * The number of vertical tiles. The bigger the number, the
         * smaller the tiles
         */
        get y_tiles(): number;
        set y_tiles(val: number);
        /**
         * The number of vertical tiles. The bigger the number, the
         * smaller the tiles
         */
        get yTiles(): number;
        set yTiles(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.DeformEffect.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.DeformEffect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.DeformEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.DeformEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.DeformEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.DeformEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.DeformEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.DeformEffect.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * virtual function; sub-classes should override this
         *   function to compute the deformation of each vertex
         *
         * @param width
         * @param height
         * @param vertex
         */
        vfunc_deform_vertex(width: number, height: number, vertex: Clutter.TextureVertex): void;
        // Methods
        /**
         * Retrieves the back pipeline used by `effect`
         *
         * @returns A #CoglPipeline.
         */
        get_back_pipeline(): Cogl.Pipeline | null;
        /**
         * Retrieves the number of horizontal and vertical tiles used to sub-divide
         * the actor's geometry during the effect
         */
        get_n_tiles(): [number, number];
        /**
         * Invalidates the `effect`'s vertices and, if it is associated
         * to an actor, it will queue a redraw
         */
        invalidate(): void;
        /**
         * Sets the pipeline that should be used when drawing the back face
         * of the actor during a deformation
         *
         * The #ClutterDeformEffect will take a reference on the pipeline's
         * handle
         *
         * @param pipeline A #CoglPipeline
         */
        set_back_pipeline(pipeline?: Cogl.Pipeline | null): void;
        /**
         * Sets the number of horizontal and vertical tiles to be used
         * when applying the effect
         *
         * More tiles allow a finer grained deformation at the expenses
         * of computation
         *
         * @param x_tiles number of horizontal tiles
         * @param y_tiles number of vertical tiles
         */
        set_n_tiles(x_tiles: number, y_tiles: number): void;
    }
    class DesaturateEffect extends OffscreenEffect {
        static '$gtype': GObject.GType<DesaturateEffect>;
        // Properties
        /**
         * The desaturation factor, between 0.0 (no desaturation) and 1.0 (full
         * desaturation).
         */
        get factor(): number;
        set factor(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.DesaturateEffect.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.DesaturateEffect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(factor: number): Clutter.DesaturateEffect;
        // Signals
        connect<K extends keyof Clutter.DesaturateEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.DesaturateEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.DesaturateEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.DesaturateEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.DesaturateEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.DesaturateEffect.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the desaturation factor of `effect`
         *
         * @returns the desaturation factor
         */
        get_factor(): number;
        /**
         * Sets the desaturation factor for `effect,` with 0.0 being "do not desaturate"
         * and 1.0 being "fully desaturate"
         *
         * @param factor the desaturation factor, between 0.0 and 1.0
         */
        set_factor(factor: number): void;
    }
    abstract class Effect extends ActorMeta {
        static '$gtype': GObject.GType<Effect>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Effect.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Effect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Effect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Effect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Effect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Effect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Effect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Effect.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * virtual function
         *
         * @param volume
         */
        vfunc_modify_paint_volume(volume: Clutter.PaintVolume): boolean;
        /**
         * virtual function
         *
         * @param node
         * @param paint_context
         * @param flags
         */
        vfunc_paint(
            node: Clutter.PaintNode,
            paint_context: Clutter.PaintContext,
            flags: Clutter.EffectPaintFlags,
        ): void;
        vfunc_paint_node(
            node: Clutter.PaintNode,
            paint_context: Clutter.PaintContext,
            flags: Clutter.EffectPaintFlags,
        ): void;
        /**
         * virtual function
         *
         * @param pick_context
         */
        vfunc_pick(pick_context: Clutter.PickContext): void;
        /**
         * virtual function
         *
         * @param node
         * @param paint_context
         */
        vfunc_post_paint(node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
        /**
         * virtual function
         *
         * @param node
         * @param paint_context
         */
        vfunc_pre_paint(node: Clutter.PaintNode, paint_context: Clutter.PaintContext): boolean;
        // Methods
        /**
         * Queues a repaint of the effect. The effect can detect when the ‘paint’
         * method is called as a result of this function because it will not
         * have the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag set. In that case the
         * effect is free to assume that the actor has not changed its
         * appearance since the last time it was painted so it doesn't need to
         * call clutter_actor_continue_paint() if it can draw a cached
         * image. This is mostly intended for effects that are using a
         * %CoglOffscreen to redirect the actor (such as
         * %ClutterOffscreenEffect). In that case the effect can save a bit of
         * rendering time by painting the cached texture without causing the
         * entire actor to be painted.
         *
         * This function can be used by effects that have their own animatable
         * parameters. For example, an effect which adds a varying degree of a
         * red tint to an actor by redirecting it through a CoglOffscreen
         * might have a property to specify the level of tint. When this value
         * changes, the underlying actor doesn't need to be redrawn so the
         * effect can call clutter_effect_queue_repaint() to make sure the
         * effect is repainted.
         *
         * Note however that modifying the position of the parent of an actor
         * may change the appearance of the actor because its transformation
         * matrix would change. In this case a redraw wouldn't be queued on
         * the actor itself so the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY would still
         * not be set. The effect can detect this case by keeping track of the
         * last modelview matrix that was used to render the actor and
         * verifying that it remains the same in the next paint.
         *
         * Any other effects that are layered on top of the passed in effect
         * will still be passed the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag. If
         * anything queues a redraw on the actor without specifying an effect
         * or with an effect that is lower in the chain of effects than this
         * one then that will override this call. In that case this effect
         * will instead be called with the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY
         * flag set.
         */
        queue_repaint(): void;
    }
    class FixedLayout extends LayoutManager {
        static '$gtype': GObject.GType<FixedLayout>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.FixedLayout.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.FixedLayout.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.FixedLayout;
        // Signals
        connect<K extends keyof Clutter.FixedLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.FixedLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.FixedLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.FixedLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.FixedLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.FixedLayout.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class FlowLayout extends LayoutManager {
        static '$gtype': GObject.GType<FlowLayout>;
        // Properties
        /**
         * The spacing between columns, in pixels; the value of this
         * property is honoured by horizontal non-overflowing layouts
         * and by vertical overflowing layouts
         */
        get column_spacing(): number;
        set column_spacing(val: number);
        /**
         * The spacing between columns, in pixels; the value of this
         * property is honoured by horizontal non-overflowing layouts
         * and by vertical overflowing layouts
         */
        get columnSpacing(): number;
        set columnSpacing(val: number);
        /**
         * Whether each child inside the #ClutterFlowLayout should receive
         * the same allocation
         */
        get homogeneous(): boolean;
        set homogeneous(val: boolean);
        /**
         * Maximum width for each column in the layout, in pixels. If
         * set to -1 the width will be the maximum child width
         */
        get max_column_width(): number;
        set max_column_width(val: number);
        /**
         * Maximum width for each column in the layout, in pixels. If
         * set to -1 the width will be the maximum child width
         */
        get maxColumnWidth(): number;
        set maxColumnWidth(val: number);
        /**
         * Maximum height for each row in the layout, in pixels. If
         * set to -1 the width will be the maximum child height
         */
        get max_row_height(): number;
        set max_row_height(val: number);
        /**
         * Maximum height for each row in the layout, in pixels. If
         * set to -1 the width will be the maximum child height
         */
        get maxRowHeight(): number;
        set maxRowHeight(val: number);
        /**
         * Minimum width for each column in the layout, in pixels
         */
        get min_column_width(): number;
        set min_column_width(val: number);
        /**
         * Minimum width for each column in the layout, in pixels
         */
        get minColumnWidth(): number;
        set minColumnWidth(val: number);
        /**
         * Minimum height for each row in the layout, in pixels
         */
        get min_row_height(): number;
        set min_row_height(val: number);
        /**
         * Minimum height for each row in the layout, in pixels
         */
        get minRowHeight(): number;
        set minRowHeight(val: number);
        /**
         * The orientation of the #ClutterFlowLayout. The children
         * of the layout will be laid out following the orientation.
         *
         * This property also controls the overflowing directions
         */
        get orientation(): Clutter.Orientation;
        set orientation(val: Clutter.Orientation);
        /**
         * The spacing between rows, in pixels; the value of this
         * property is honoured by vertical non-overflowing layouts and
         * by horizontal overflowing layouts
         */
        get row_spacing(): number;
        set row_spacing(val: number);
        /**
         * The spacing between rows, in pixels; the value of this
         * property is honoured by vertical non-overflowing layouts and
         * by horizontal overflowing layouts
         */
        get rowSpacing(): number;
        set rowSpacing(val: number);
        /**
         * Whether the #ClutterFlowLayout should arrange its children
         * on a grid
         */
        get snap_to_grid(): boolean;
        set snap_to_grid(val: boolean);
        /**
         * Whether the #ClutterFlowLayout should arrange its children
         * on a grid
         */
        get snapToGrid(): boolean;
        set snapToGrid(val: boolean);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.FlowLayout.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.FlowLayout.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(orientation: Clutter.Orientation): Clutter.FlowLayout;
        // Signals
        connect<K extends keyof Clutter.FlowLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.FlowLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.FlowLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.FlowLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.FlowLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.FlowLayout.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the spacing between columns
         *
         * @returns the spacing between columns of the #ClutterFlowLayout,
         *   in pixels
         */
        get_column_spacing(): number;
        /**
         * Retrieves the minimum and maximum column widths
         */
        get_column_width(): [number, number];
        /**
         * Retrieves whether the `layout` is homogeneous
         *
         * @returns %TRUE if the #ClutterFlowLayout is homogeneous
         */
        get_homogeneous(): boolean;
        /**
         * Retrieves the orientation of the `layout`
         *
         * @returns the orientation of the #ClutterFlowLayout
         */
        get_orientation(): Clutter.Orientation;
        /**
         * Retrieves the minimum and maximum row heights
         */
        get_row_height(): [number, number];
        /**
         * Retrieves the spacing between rows
         *
         * @returns the spacing between rows of the #ClutterFlowLayout,
         *   in pixels
         */
        get_row_spacing(): number;
        /**
         * Retrieves the value of #ClutterFlowLayout:snap-to-grid property
         *
         * @returns %TRUE if the `layout` is placing its children on a grid
         */
        get_snap_to_grid(): boolean;
        /**
         * Sets the space between columns, in pixels
         *
         * @param spacing the space between columns
         */
        set_column_spacing(spacing: number): void;
        /**
         * Sets the minimum and maximum widths that a column can have
         *
         * @param min_width minimum width of a column
         * @param max_width maximum width of a column
         */
        set_column_width(min_width: number, max_width: number): void;
        /**
         * Sets whether the `layout` should allocate the same space for
         * each child
         *
         * @param homogeneous whether the layout should be homogeneous or not
         */
        set_homogeneous(homogeneous: boolean): void;
        /**
         * Sets the orientation of the flow layout
         *
         * The orientation controls the direction used to allocate
         * the children: either horizontally or vertically. The
         * orientation also controls the direction of the overflowing
         *
         * @param orientation the orientation of the layout
         */
        set_orientation(orientation: Clutter.Orientation | null): void;
        /**
         * Sets the minimum and maximum heights that a row can have
         *
         * @param min_height the minimum height of a row
         * @param max_height the maximum height of a row
         */
        set_row_height(min_height: number, max_height: number): void;
        /**
         * Sets the spacing between rows, in pixels
         *
         * @param spacing the space between rows
         */
        set_row_spacing(spacing: number): void;
        /**
         * Whether the `layout` should place its children on a grid.
         *
         * @param snap_to_grid %TRUE if `layout` should place its children on a grid
         */
        set_snap_to_grid(snap_to_grid: boolean): void;
    }
    class Focus extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Focus>;
        // Properties
        get stage(): Clutter.Stage;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Focus.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Focus.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Focus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Focus.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Focus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Focus.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Focus.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Focus.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_notify_grab(grab: Clutter.Grab, grab_actor: Clutter.Actor, old_grab_actor: Clutter.Actor): void;
        vfunc_propagate_event(event: Clutter.Event): void;
        vfunc_set_current_actor(actor: Clutter.Actor, source_device: Clutter.InputDevice, time_ms: number): boolean;
        vfunc_update_from_event(event: Clutter.Event): void;
    }
    class FrameClock extends GObjectClasses.Object {
        static '$gtype': GObject.GType<FrameClock>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.FrameClock.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.FrameClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.FrameClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.FrameClock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.FrameClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.FrameClock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.FrameClock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.FrameClock.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        add_future_time(when_us: number): void;
        add_timeline(timeline: Clutter.Timeline): void;
        destroy(): void;
        dispatch(time_us: number): Clutter.FrameResult;
        get_max_render_time_debug_info(): GLib.String;
        get_priority(): number;
        get_refresh_rate(): number;
        inhibit(): void;
        notify_ready(): void;
        record_flip_time(flip_time_us: number): void;
        remove_timeline(timeline: Clutter.Timeline): void;
        schedule_update(): void;
        schedule_update_now(): void;
        set_deadline_evasion(deadline_evasion_us: number): void;
        set_frame_sync_update_time(update_time_us: number): void;
        set_mode(mode: Clutter.FrameClockMode | null): void;
        set_passive(driver: Clutter.FrameClockDriver): void;
        uninhibit(): void;
    }
    abstract class FrameClockDriver extends GObjectClasses.Object {
        static '$gtype': GObject.GType<FrameClockDriver>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.FrameClockDriver.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.FrameClockDriver.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.FrameClockDriver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.FrameClockDriver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.FrameClockDriver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.FrameClockDriver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.FrameClockDriver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.FrameClockDriver.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_schedule_update(): void;
    }
    abstract class Gesture extends Action {
        static '$gtype': GObject.GType<Gesture>;
        // Properties
        /**
         * The current state of the gesture.
         */
        get state(): Clutter.GestureState;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Gesture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Gesture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Gesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Gesture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Gesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Gesture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Gesture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Gesture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * In case `self` and `other_gesture` are operating on the same points, calling
         * this function will make sure that `self` does not cancel `other_gesture`
         * when `self` moves to state RECOGNIZING.
         *
         * To allow two gestures to recognize simultaneously using the same set of
         * points (for example a zoom and a rotate gesture on the same actor), call
         * clutter_gesture_can_not_cancel() twice, so that both gestures can not
         * cancel each other.
         *
         * @param other_gesture the other #ClutterGesture
         */
        can_not_cancel(other_gesture: Clutter.Gesture): void;
        /**
         * Cancels the gesture by setting its state to CANCELLED.
         */
        cancel(): void;
        /**
         * Retrieves the number of active points the gesture currently has.
         *
         * @returns the number of active points
         */
        get_n_points(): number;
        /**
         * Retrieves the begin coordinates of the point with index `point_index`.
         *
         * @param point_index index of the point
         */
        get_point_begin_coords(point_index: number): [Graphene.Point];
        /**
         * Retrieves the latest coordinates of the point with index `point_index`.
         *
         * @param point_index index of the point
         */
        get_point_coords(point_index: number): [Graphene.Point];
        /**
         * Retrieves the the latest event of the point with index `point_index`.
         *
         * @returns The #ClutterEvent
         * @param point_index index of the point
         */
        get_point_event(point_index: number): Clutter.Event;
        /**
         * Retrieves the previous coordinates of the point with index `point_index`.
         *
         * @param point_index index of the point
         */
        get_point_previous_coords(point_index: number): [Graphene.Point];
        /**
         * Retrieves an array of the currently active points of the gesture, the array is
         * ordered in the order the points were added in (newest to oldest).
         *
         * @returns array with active points of the gesture
         */
        get_points(): number[];
        /**
         * Gets the current state of the gesture.
         *
         * @returns the #ClutterGestureState
         */
        get_state(): Clutter.GestureState;
    }
    class Grab extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Grab>;
        // Properties
        get revoked(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Grab.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Grab.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Grab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Grab.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Grab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Grab.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Grab.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Grab.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Activates a grab onto its assigned actor. Events will be propagated as
         * usual inside its hierarchy. Activating an already active grab will have
         * no side effects.
         *
         * This method is necessary for grabs obtained through
         * [method`Stage`.grab_inactive]. Grabs obtained through [method`Stage`.grab]
         * will be activated implicitly.
         *
         * to undo the effects of this function, call [method`Grab`.dismiss].
         */
        activate(): void;
        /**
         * Removes a grab. If this grab is effective, crossing events
         * will be generated to indicate the change in event redirection.
         */
        dismiss(): void;
        /**
         * Returns the windowing-level state of the
         * grab, the devices that are guaranteed to be
         * grabbed.
         *
         * @returns The state of the grab.
         */
        get_seat_state(): Clutter.GrabState;
        is_revoked(): boolean;
    }
    class GridLayout extends LayoutManager {
        static '$gtype': GObject.GType<GridLayout>;
        // Properties
        /**
         * Whether all columns of the layout should have the same width
         */
        get column_homogeneous(): boolean;
        set column_homogeneous(val: boolean);
        /**
         * Whether all columns of the layout should have the same width
         */
        get columnHomogeneous(): boolean;
        set columnHomogeneous(val: boolean);
        /**
         * The amount of space in pixels between two consecutive columns
         */
        get column_spacing(): number;
        set column_spacing(val: number);
        /**
         * The amount of space in pixels between two consecutive columns
         */
        get columnSpacing(): number;
        set columnSpacing(val: number);
        /**
         * The orientation of the layout, either horizontal or vertical
         */
        get orientation(): Clutter.Orientation;
        set orientation(val: Clutter.Orientation);
        /**
         * Whether all rows of the layout should have the same height
         */
        get row_homogeneous(): boolean;
        set row_homogeneous(val: boolean);
        /**
         * Whether all rows of the layout should have the same height
         */
        get rowHomogeneous(): boolean;
        set rowHomogeneous(val: boolean);
        /**
         * The amount of space in pixels between two consecutive rows
         */
        get row_spacing(): number;
        set row_spacing(val: number);
        /**
         * The amount of space in pixels between two consecutive rows
         */
        get rowSpacing(): number;
        set rowSpacing(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.GridLayout.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.GridLayout.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.GridLayout;
        // Signals
        connect<K extends keyof Clutter.GridLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.GridLayout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.GridLayout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.GridLayout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.GridLayout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.GridLayout.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Adds a widget to the grid.
         *
         * The position of `child` is determined by `left` and `top`. The
         * number of 'cells' that `child` will occupy is determined by
         * `width` and `height`.
         *
         * @param child the #ClutterActor to add
         * @param left the column number to attach the left side of `child` to
         * @param top the row number to attach the top side of `child` to
         * @param width the number of columns that `child` will span
         * @param height the number of rows that `child` will span
         */
        attach(child: Clutter.Actor, left: number, top: number, width: number, height: number): void;
        /**
         * Adds a actor to the grid.
         *
         * The actor is placed next to `sibling,` on the side determined by
         * `side`. When `sibling` is %NULL, the actor is placed in row (for
         * left or right placement) or column 0 (for top or bottom placement),
         * at the end indicated by `side`.
         *
         * Attaching widgets labeled [1], [2], [3] with `sibling` == %NULL and
         * `side` == %CLUTTER_GRID_POSITION_LEFT yields a layout of [3][2][1].
         *
         * @param child the actor to add
         * @param sibling the child of `layout` that `child` will be placed
         *     next to, or %NULL to place `child` at the beginning or end
         * @param side the side of `sibling` that `child` is positioned next to
         * @param width the number of columns that `child` will span
         * @param height the number of rows that `child` will span
         */
        attach_next_to(
            child: Clutter.Actor,
            sibling: Clutter.Actor | null,
            side: Clutter.GridPosition | null,
            width: number,
            height: number,
        ): void;
        /**
         * Gets the child of `layout` whose area covers the grid
         * cell whose upper left corner is at `left,` `top`.
         *
         * @returns the child at the given position, or %NULL
         * @param left the left edge of the cell
         * @param top the top edge of the cell
         */
        get_child_at(left: number, top: number): Clutter.Actor;
        /**
         * Returns whether all columns of `layout` have the same width.
         *
         * @returns whether all columns of `layout` have the same width.
         */
        get_column_homogeneous(): boolean;
        /**
         * Retrieves the spacing set using [method`Clutter`.GridLayout.set_column_spacing]
         *
         * @returns the spacing between coluns of `layout`
         */
        get_column_spacing(): number;
        /**
         * Retrieves the orientation of the `layout`.
         *
         * @returns the orientation of the layout
         */
        get_orientation(): Clutter.Orientation;
        /**
         * Returns whether all rows of `layout` have the same height.
         *
         * @returns whether all rows of `layout` have the same height.
         */
        get_row_homogeneous(): boolean;
        /**
         * Retrieves the spacing set using [method`Clutter`.GridLayout.set_row_spacing]
         *
         * @returns the spacing between rows of `layout`
         */
        get_row_spacing(): number;
        /**
         * Inserts a column at the specified position.
         *
         * Children which are attached at or to the right of this position
         * are moved one column to the right. Children which span across this
         * position are grown to span the new column.
         *
         * @param position the position to insert the column at
         */
        insert_column(position: number): void;
        /**
         * Inserts a row or column at the specified position.
         *
         * The new row or column is placed next to `sibling,` on the side
         * determined by `side`. If `side` is %CLUTTER_GRID_POSITION_LEFT or
         * %CLUTTER_GRID_POSITION_BOTTOM, a row is inserted. If `side` is
         * %CLUTTER_GRID_POSITION_LEFT of %CLUTTER_GRID_POSITION_RIGHT,
         * a column is inserted.
         *
         * @param sibling the child of `layout` that the new row or column will be
         *     placed next to
         * @param side the side of `sibling` that `child` is positioned next to
         */
        insert_next_to(sibling: Clutter.Actor, side: Clutter.GridPosition | null): void;
        /**
         * Inserts a row at the specified position.
         *
         * Children which are attached at or below this position
         * are moved one row down. Children which span across this
         * position are grown to span the new row.
         *
         * @param position the position to insert the row at
         */
        insert_row(position: number): void;
        /**
         * Sets whether all columns of `layout` will have the same width.
         *
         * @param homogeneous %TRUE to make columns homogeneous
         */
        set_column_homogeneous(homogeneous: boolean): void;
        /**
         * Sets the spacing between columns of `layout`
         *
         * @param spacing the spacing between columns of the layout, in pixels
         */
        set_column_spacing(spacing: number): void;
        /**
         * Sets the orientation of the `layout`.
         *
         * #ClutterGridLayout uses the orientation as a hint when adding
         * children to the #ClutterActor using it as a layout manager via
         * [method`Clutter`.Actor.add_child]; changing this value will not have
         * any effect on children that are already part of the layout.
         *
         * @param orientation the orientation of the #ClutterGridLayout
         */
        set_orientation(orientation: Clutter.Orientation | null): void;
        /**
         * Sets whether all rows of `layout` will have the same height.
         *
         * @param homogeneous %TRUE to make rows homogeneous
         */
        set_row_homogeneous(homogeneous: boolean): void;
        /**
         * Sets the spacing between rows of `layout`
         *
         * @param spacing the spacing between rows of the layout, in pixels
         */
        set_row_spacing(spacing: number): void;
    }
    class InputDevice extends GObjectClasses.Object {
        static '$gtype': GObject.GType<InputDevice>;
        // Properties
        /**
         * Bus type of this device.
         */
        get bus_type(): number;
        /**
         * Bus type of this device.
         */
        get busType(): number;
        /**
         * The capabilities of the device
         */
        get capabilities(): Clutter.InputCapabilities;
        get device_mode(): Clutter.InputMode;
        get deviceMode(): Clutter.InputMode;
        get device_node(): string;
        get deviceNode(): string;
        /**
         * The type of the device
         */
        get device_type(): Clutter.InputDeviceType;
        /**
         * The type of the device
         */
        get deviceType(): Clutter.InputDeviceType;
        /**
         * Whether the device has an on screen cursor following its movement.
         */
        get has_cursor(): boolean;
        /**
         * Whether the device has an on screen cursor following its movement.
         */
        get hasCursor(): boolean;
        get n_buttons(): number;
        get nButtons(): number;
        get n_dials(): number;
        get nDials(): number;
        get n_mode_groups(): number;
        get nModeGroups(): number;
        get n_rings(): number;
        get nRings(): number;
        get n_strips(): number;
        get nStrips(): number;
        /**
         * The name of the device
         */
        get name(): string;
        /**
         * Product ID of this device.
         */
        get product_id(): number;
        /**
         * Product ID of this device.
         */
        get productId(): number;
        /**
         * The #ClutterSeat instance which owns the device
         */
        get seat(): Clutter.Seat;
        /**
         * Vendor ID of this device.
         */
        get vendor_id(): number;
        /**
         * Vendor ID of this device.
         */
        get vendorId(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.InputDevice.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.InputDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.InputDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.InputDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.InputDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.InputDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.InputDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.InputDevice.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_get_dimensions(): [boolean, number, number];
        vfunc_get_group_n_modes(group: number): number;
        vfunc_get_pad_feature_group(feature: Clutter.InputDevicePadFeature, n_feature: number): number;
        vfunc_is_grouped(other_device: Clutter.InputDevice): boolean;
        vfunc_is_mode_switch_button(group: number, button: number): boolean;
        // Methods
        /**
         * Gets the bus type of this device. The returned
         * value is one of the BUS_* constants defined in
         * linux/input.h.
         *
         * @returns the bus type
         */
        get_bus_type(): number;
        /**
         * Retrieves the capabilities of `device`
         *
         * @returns the capabilities of the device
         */
        get_capabilities(): Clutter.InputCapabilities;
        /**
         * Retrieves the #ClutterInputMode of `device`.
         *
         * @returns the device mode
         */
        get_device_mode(): Clutter.InputMode;
        /**
         * Retrieves the name of the `device`
         *
         * @returns the name of the device, or %NULL. The returned string
         *   is owned by the #ClutterInputDevice and should never be modified
         *   or freed
         */
        get_device_name(): string;
        get_device_node(): string;
        /**
         * Retrieves the type of `device`
         *
         * @returns the type of the device
         */
        get_device_type(): Clutter.InputDeviceType;
        get_dimensions(): [boolean, number, number];
        get_group_n_modes(group: number): number;
        /**
         * Retrieves whether `device` has a pointer that follows the
         * device motion.
         *
         * @returns %TRUE if the device has a cursor
         */
        get_has_cursor(): boolean;
        get_mode_switch_button_group(button: number): number;
        get_n_buttons(): number;
        get_n_dials(): number;
        get_n_mode_groups(): number;
        get_n_rings(): number;
        get_n_strips(): number;
        get_pad_feature_group(feature: Clutter.InputDevicePadFeature | null, n_feature: number): number;
        /**
         * Gets the product ID of this device.
         *
         * @returns the product ID2
         */
        get_product_id(): number;
        /**
         * Returns the seat the device belongs to
         *
         * @returns the device seat
         */
        get_seat(): Clutter.Seat;
        /**
         * Gets the vendor ID of this device.
         *
         * @returns the vendor ID
         */
        get_vendor_id(): number;
        is_grouped(other_device: Clutter.InputDevice): boolean;
        is_mode_switch_button(group: number, button: number): boolean;
    }
    abstract class InputDeviceTool extends GObjectClasses.Object {
        static '$gtype': GObject.GType<InputDeviceTool>;
        // Properties
        get axes(): Clutter.InputAxisFlags;
        get id(): number;
        get serial(): number;
        get type(): Clutter.InputDeviceToolType;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.InputDeviceTool.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.InputDeviceTool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.InputDeviceTool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.InputDeviceTool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.InputDeviceTool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.InputDeviceTool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.InputDeviceTool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.InputDeviceTool.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_axes(): Clutter.InputAxisFlags;
        /**
         * Gets the ID of this tool, this value can be used to identify a
         * physical tool (eg. a tablet pen) across program executions.
         *
         * @returns The tool ID for this tool
         */
        get_id(): number;
        /**
         * Gets the serial of this tool, this value can be used to identify a
         * physical tool (eg. a tablet pen) across program executions.
         *
         * @returns The serial ID for this tool8
         */
        get_serial(): number;
        /**
         * Gets the tool type of this tool.
         *
         * @returns The tool type of this tool8
         */
        get_tool_type(): Clutter.InputDeviceToolType;
    }
    abstract class InputFocus extends GObjectClasses.Object {
        static '$gtype': GObject.GType<InputFocus>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.InputFocus.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.InputFocus.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.InputFocus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.InputFocus.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.InputFocus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.InputFocus.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.InputFocus.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.InputFocus.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_commit_text(text: string): void;
        vfunc_delete_surrounding(offset: number, len: number): void;
        vfunc_focus_in(input_method: Clutter.InputMethod): void;
        vfunc_focus_out(): void;
        vfunc_request_surrounding(): void;
        vfunc_set_preedit_text(preedit: string, cursor: number, anchor: number): void;
        // Methods
        filter_event(event: Clutter.Event): boolean;
        is_focused(): boolean;
        process_event(event: Clutter.Event): boolean;
        reset(): void;
        set_can_show_preedit(can_show_preedit: boolean): void;
        set_content_hints(hint: Clutter.InputContentHintFlags | null): void;
        set_content_purpose(purpose: Clutter.InputContentPurpose | null): void;
        set_cursor_location(rect: Graphene.Rect): void;
        set_input_panel_state(state: Clutter.InputPanelState | null): void;
        set_surrounding(text: string, cursor: number, anchor: number): void;
    }
    abstract class InputMethod extends GObjectClasses.Object {
        static '$gtype': GObject.GType<InputMethod>;
        // Properties
        get can_show_preedit(): boolean;
        set can_show_preedit(val: boolean);
        get canShowPreedit(): boolean;
        set canShowPreedit(val: boolean);
        get content_hints(): Clutter.InputContentHintFlags;
        set content_hints(val: Clutter.InputContentHintFlags);
        get contentHints(): Clutter.InputContentHintFlags;
        set contentHints(val: Clutter.InputContentHintFlags);
        get content_purpose(): Clutter.InputContentPurpose;
        set content_purpose(val: Clutter.InputContentPurpose);
        get contentPurpose(): Clutter.InputContentPurpose;
        set contentPurpose(val: Clutter.InputContentPurpose);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.InputMethod.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.InputMethod.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.InputMethod.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.InputMethod.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.InputMethod.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.InputMethod.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.InputMethod.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.InputMethod.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_filter_key_event(key: Clutter.Event): boolean;
        vfunc_focus_in(actor: Clutter.InputFocus): void;
        vfunc_focus_out(): void;
        vfunc_reset(): void;
        vfunc_set_cursor_location(rect: Graphene.Rect): void;
        vfunc_set_surrounding(text: string, cursor: number, anchor: number): void;
        vfunc_update_content_hints(hint: Clutter.InputContentHintFlags): void;
        vfunc_update_content_purpose(purpose: Clutter.InputContentPurpose): void;
        // Methods
        commit(text: string): void;
        delete_surrounding(offset: number, len: number): void;
        focus_in(focus: Clutter.InputFocus): void;
        focus_out(): void;
        forward_key(keyval: number, keycode: number, state: number, time_: number, press: boolean): void;
        notify_key_event(event: Clutter.Event, filtered: boolean): void;
        request_surrounding(): void;
        set_input_panel_state(state: Clutter.InputPanelState | null): void;
        /**
         * Sets the preedit text on the current input focus.
         *
         * @param preedit the preedit text, or %NULL
         * @param cursor the cursor
         * @param anchor
         * @param mode
         */
        set_preedit_text(
            preedit: string | null,
            cursor: number,
            anchor: number,
            mode: Clutter.PreeditResetMode | null,
        ): void;
    }
    class Interval extends GObjectClasses.InitiallyUnowned {
        static '$gtype': GObject.GType<Interval>;
        // Properties
        /**
         * The final value of the interval.
         */
        get final(): GObject.Value;
        set final(val: GObject.Value);
        /**
         * The initial value of the interval.
         */
        get initial(): GObject.Value;
        set initial(val: GObject.Value);
        /**
         * The type of the values in the interval.
         */
        get value_type(): GObject.GType;
        /**
         * The type of the values in the interval.
         */
        get valueType(): GObject.GType;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Interval.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Interval.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_with_values(
            gtype: GObject.GType,
            initial?: GObject.Value | null,
            _final?: GObject.Value | null,
        ): Clutter.Interval;
        // Signals
        connect<K extends keyof Clutter.Interval.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Interval.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Interval.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Interval.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Interval.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Interval.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Computes the value between the `interval` boundaries given the
         * progress `factor` and copies it into `value`.
         *
         * @param factor the progress factor, between 0 and 1
         */
        vfunc_compute_value(factor: number): [boolean, unknown];
        /**
         * Validates the initial and final values of `interval` against
         * a #GParamSpec.
         *
         * @param pspec a #GParamSpec
         */
        vfunc_validate(pspec: GObject.ParamSpec): boolean;
        // Methods
        /**
         * Creates a copy of `interval`.
         *
         * @returns the newly created #ClutterInterval
         */
        clone(): Clutter.Interval;
        /**
         * Computes the value between the `interval` boundaries given the
         * progress `factor`
         *
         * Unlike [method`Clutter`.Interval.compute_value], this function will
         * return a const pointer to the computed value
         *
         * You should use this function if you immediately pass the computed
         * value to another function that makes a copy of it, like
         * g_object_set_property()
         *
         * @returns a pointer to the computed value,
         *   or %NULL if the computation was not successful
         * @param factor the progress factor, between 0 and 1
         */
        compute(factor: number): unknown;
        /**
         * Computes the value between the `interval` boundaries given the
         * progress `factor` and copies it into `value`.
         *
         * @returns %TRUE if the operation was successful
         * @param factor the progress factor, between 0 and 1
         */
        compute_value(factor: number): [boolean, unknown];
        /**
         * Retrieves the final value of `interval` and copies
         * it into `value`.
         *
         * The passed #GValue must be initialized to the value held by
         * the #ClutterInterval.
         */
        get_final_value(): [unknown];
        /**
         * Retrieves the initial value of `interval` and copies
         * it into `value`.
         *
         * The passed #GValue must be initialized to the value held by
         * the #ClutterInterval.
         */
        get_initial_value(): [unknown];
        /**
         * Retrieves the #GType of the values inside `interval`.
         *
         * @returns the type of the value, or G_TYPE_INVALID
         */
        get_value_type(): GObject.GType;
        /**
         * Checks if the `interval` has a valid initial and final values.
         *
         * @returns %TRUE if the #ClutterInterval has an initial and
         *   final values, and %FALSE otherwise
         */
        is_valid(): boolean;
        /**
         * Gets the pointer to the final value of `interval`
         *
         * @returns the final value of the interval.
         *   The value is owned by the #ClutterInterval and it should not be
         *   modified or freed
         */
        peek_final_value(): unknown;
        /**
         * Gets the pointer to the initial value of `interval`
         *
         * @returns the initial value of the interval.
         *   The value is owned by the #ClutterInterval and it should not be
         *   modified or freed
         */
        peek_initial_value(): unknown;
        /**
         * Sets the final value of `interval` to `value`. The value is
         * copied inside the #ClutterInterval.
         *
         * @param value a #GValue
         */
        set_final(value: GObject.Value | any): void;
        /**
         * Sets the initial value of `interval` to `value`. The value is copied
         * inside the #ClutterInterval.
         *
         * @param value a #GValue
         */
        set_initial(value: GObject.Value | any): void;
        /**
         * Validates the initial and final values of `interval` against
         * a #GParamSpec.
         *
         * @returns %TRUE if the #ClutterInterval is valid, %FALSE otherwise
         * @param pspec a #GParamSpec
         */
        validate(pspec: GObject.ParamSpec): boolean;
    }
    class KeyFocus extends Focus {
        static '$gtype': GObject.GType<KeyFocus>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.KeyFocus.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.KeyFocus.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.KeyFocus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.KeyFocus.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.KeyFocus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.KeyFocus.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.KeyFocus.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.KeyFocus.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class KeyframeTransition extends PropertyTransition {
        static '$gtype': GObject.GType<KeyframeTransition>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.KeyframeTransition.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.KeyframeTransition.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(property_name: string): Clutter.KeyframeTransition;
        // Conflicted with Clutter.PropertyTransition.new
        static new(...args: never[]): any;
        // Signals
        connect<K extends keyof Clutter.KeyframeTransition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.KeyframeTransition.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.KeyframeTransition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.KeyframeTransition.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.KeyframeTransition.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.KeyframeTransition.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Removes all key frames from `transition`.
         */
        clear(): void;
        /**
         * Retrieves the details of the key frame at `index_` inside `transition`.
         *
         * The `transition` must already have key frames set, and `index_` must be
         * smaller than the number of key frames.
         *
         * @param index_ the index of the key frame
         */
        get_key_frame(index_: number): [number, Clutter.AnimationMode | null, unknown];
        /**
         * Retrieves the number of key frames inside `transition`.
         *
         * @returns the number of key frames
         */
        get_n_key_frames(): number;
        /**
         * Sets the details of the key frame at `index_` inside `transition`.
         *
         * The `transition` must already have a key frame at `index_,` and `index_`
         * must be smaller than the number of key frames inside `transition`.
         *
         * @param index_ the index of the key frame
         * @param key the key of the key frame
         * @param mode the easing mode of the key frame
         * @param value a #GValue containing the value of the key frame
         */
        set_key_frame(
            index_: number,
            key: number,
            mode: Clutter.AnimationMode | null,
            value: GObject.Value | any,
        ): void;
        /**
         * Sets the keys for each key frame inside `transition`.
         *
         * If `transition` does not hold any key frame, `n_key_frames` key frames
         * will be created; if `transition` already has key frames, `key_frames` must
         * have at least as many elements as the number of key frames.
         *
         * @param key_frames an array of keys between 0.0
         *   and 1.0, one for each key frame
         */
        set_key_frames(key_frames: number[]): void;
        /**
         * Sets the easing modes for each key frame inside `transition`.
         *
         * If `transition` does not hold any key frame, `n_modes` key frames will
         * be created; if `transition` already has key frames, `modes` must have
         * at least as many elements as the number of key frames.
         *
         * @param modes an array of easing modes, one for
         *   each key frame
         */
        set_modes(modes: Clutter.AnimationMode[] | null): void;
        /**
         * Sets the values for each key frame inside `transition`.
         *
         * If `transition` does not hold any key frame, `n_values` key frames will
         * be created; if `transition` already has key frames, `values` must have
         * at least as many elements as the number of key frames.
         *
         * @param values an array of values, one for each
         *   key frame
         */
        set_values(values: (GObject.Value | any)[]): void;
    }
    abstract class Keymap extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Keymap>;
        // Properties
        get caps_lock_state(): boolean;
        get capsLockState(): boolean;
        get num_lock_state(): boolean;
        get numLockState(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Keymap.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Keymap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Keymap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Keymap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Keymap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Keymap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Keymap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Keymap.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_get_direction(): Clutter.TextDirection;
        // Methods
        get_caps_lock_state(): boolean;
        get_direction(): Clutter.TextDirection;
        get_num_lock_state(): boolean;
    }
    abstract class LayoutManager extends GObjectClasses.InitiallyUnowned {
        static '$gtype': GObject.GType<LayoutManager>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.LayoutManager.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.LayoutManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.LayoutManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.LayoutManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.LayoutManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.LayoutManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.LayoutManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.LayoutManager.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Allocates the children of `container` given an area
         *
         * See also [method`Clutter`.Actor.allocate]
         *
         * @param container the #ClutterActor using `manager`
         * @param allocation the #ClutterActorBox containing the allocated area
         *   of `container`
         */
        vfunc_allocate(container: Clutter.Actor, allocation: Clutter.ActorBox): void;
        /**
         * virtual function; override to return the #GType
         *   of the #ClutterLayoutMeta sub-class used by the #ClutterLayoutManager
         */
        vfunc_get_child_meta_type(): GObject.GType;
        /**
         * Computes the minimum and natural heights of the `container` according
         * to `manager`.
         *
         * See also [method`Clutter`.Actor.get_preferred_height]
         *
         * @param container the #ClutterActor using `manager`
         * @param for_width the width for which the height should be computed, or -1
         */
        vfunc_get_preferred_height(container: Clutter.Actor, for_width: number): [number, number];
        /**
         * Computes the minimum and natural widths of the `container` according
         * to `manager`.
         *
         * See also [method`Clutter`.Actor.get_preferred_width]
         *
         * @param container the #ClutterActor using `manager`
         * @param for_height the height for which the width should be computed, or -1
         */
        vfunc_get_preferred_width(container: Clutter.Actor, for_height: number): [number, number];
        /**
         * Emits the [signal`Clutter`.LayoutManager::layout-changed] signal on `manager`
         *
         * This function should only be called by implementations of the
         * #ClutterLayoutManager class
         */
        vfunc_layout_changed(): void;
        /**
         * If the #ClutterLayoutManager sub-class allows it, allow
         * adding a weak reference of the `container` using `manager`
         * from within the layout manager
         *
         * The layout manager should not increase the reference
         * count of the `container`
         *
         * @param container a [type`Clutter`.Actor] using `manager`
         */
        vfunc_set_container(container?: Clutter.Actor | null): void;
        // Methods
        /**
         * Allocates the children of `container` given an area
         *
         * See also [method`Clutter`.Actor.allocate]
         *
         * @param container the #ClutterActor using `manager`
         * @param allocation the #ClutterActorBox containing the allocated area
         *   of `container`
         */
        allocate(container: Clutter.Actor, allocation: Clutter.ActorBox): void;
        /**
         * Gets a property on the #ClutterLayoutMeta created by `manager` and
         * attached to a child of `container`
         *
         * The #GValue must already be initialized to the type of the property
         * and has to be unset with g_value_unset() after extracting the real
         * value out of it
         *
         * @param container a [type`Clutter`.Actor] using `manager`
         * @param actor a [type`Clutter`.Actor] child of `container`
         * @param property_name the name of the property to get
         * @param value a #GValue with the value of the property to get
         */
        child_get_property(
            container: Clutter.Actor,
            actor: Clutter.Actor,
            property_name: string,
            value: GObject.Value | any,
        ): void;
        /**
         * Sets a property on the #ClutterLayoutMeta created by `manager` and
         * attached to a child of `container`
         *
         * @param container a [type`Clutter`.Actor] using `manager`
         * @param actor a [type`Clutter`.Actor] child of `container`
         * @param property_name the name of the property to set
         * @param value a #GValue with the value of the property to set
         */
        child_set_property(
            container: Clutter.Actor,
            actor: Clutter.Actor,
            property_name: string,
            value: GObject.Value | any,
        ): void;
        /**
         * Retrieves the #GParamSpec for the layout property `name` inside
         * the #ClutterLayoutMeta sub-class used by `manager`
         *
         * @returns a #GParamSpec describing the property,
         *   or %NULL if no property with that name exists. The returned
         *   #GParamSpec is owned by the layout manager and should not be
         *   modified or freed
         * @param name the name of the property
         */
        find_child_property(name: string): GObject.ParamSpec;
        /**
         * Retrieves the #ClutterLayoutMeta that the layout `manager` associated
         * to the `actor` child of `container,` eventually by creating one if the
         * #ClutterLayoutManager supports layout properties
         *
         * @returns a #ClutterLayoutMeta, or %NULL if the
         *   #ClutterLayoutManager does not have layout properties. The returned
         *   layout meta instance is owned by the #ClutterLayoutManager and it
         *   should not be unreferenced
         * @param container a [type`Clutter`.Actor] using `manager`
         * @param actor a [type`Clutter`.Actor] child of `container`
         */
        get_child_meta(container: Clutter.Actor, actor: Clutter.Actor): Clutter.LayoutMeta;
        /**
         * Computes the minimum and natural heights of the `container` according
         * to `manager`.
         *
         * See also [method`Clutter`.Actor.get_preferred_height]
         *
         * @param container the #ClutterActor using `manager`
         * @param for_width the width for which the height should be computed, or -1
         */
        get_preferred_height(container: Clutter.Actor, for_width: number): [number, number];
        /**
         * Computes the minimum and natural widths of the `container` according
         * to `manager`.
         *
         * See also [method`Clutter`.Actor.get_preferred_width]
         *
         * @param container the #ClutterActor using `manager`
         * @param for_height the height for which the width should be computed, or -1
         */
        get_preferred_width(container: Clutter.Actor, for_height: number): [number, number];
        /**
         * Emits the [signal`Clutter`.LayoutManager::layout-changed] signal on `manager`
         *
         * This function should only be called by implementations of the
         * #ClutterLayoutManager class
         */
        layout_changed(): void;
        /**
         * Retrieves all the `GParamSpec`s for the layout properties
         * stored inside the #ClutterLayoutMeta sub-class used by `manager`
         *
         * @returns the newly-allocated,
         *   %NULL-terminated array of `GParamSpec`s. Use g_free() to free the
         *   resources allocated for the array
         */
        list_child_properties(): GObject.ParamSpec[];
        /**
         * If the #ClutterLayoutManager sub-class allows it, allow
         * adding a weak reference of the `container` using `manager`
         * from within the layout manager
         *
         * The layout manager should not increase the reference
         * count of the `container`
         *
         * @param container a [type`Clutter`.Actor] using `manager`
         */
        set_container(container?: Clutter.Actor | null): void;
    }
    abstract class LayoutMeta extends GObjectClasses.Object {
        static '$gtype': GObject.GType<LayoutMeta>;
        // Properties
        /**
         * The [type`Clutter`.Actor] being wrapped by this [type`Clutter`.LayoutMeta]
         */
        get actor(): Clutter.Actor;
        /**
         * The [type`Clutter`.Actor] containing [property`Clutter`.LayoutMeta:actor]
         */
        get container(): Clutter.Actor;
        /**
         * The [class`LayoutManager]` that created this [type`Clutter`.LayoutMeta].
         */
        get manager(): Clutter.LayoutManager;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.LayoutMeta.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.LayoutMeta.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.LayoutMeta.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.LayoutMeta.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.LayoutMeta.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.LayoutMeta.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.LayoutMeta.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.LayoutMeta.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the actor wrapped by `data`
         *
         * @returns a [type`Clutter`.Actor]
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the container using `data`
         *
         * @returns a [type`Clutter`.Actor]
         */
        get_container(): Clutter.Actor;
        /**
         * Retrieves the actor wrapped by `data`
         *
         * @returns a [type`Clutter`.LayoutManager]
         */
        get_manager(): Clutter.LayoutManager;
        is_for(manager: Clutter.LayoutManager, container: Clutter.Actor, actor: Clutter.Actor): boolean;
    }
    class LongPressGesture extends PressGesture {
        static '$gtype': GObject.GType<LongPressGesture>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.LongPressGesture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.LongPressGesture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.LongPressGesture;
        // Signals
        connect<K extends keyof Clutter.LongPressGesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.LongPressGesture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.LongPressGesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.LongPressGesture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.LongPressGesture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.LongPressGesture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    abstract class OffscreenEffect extends Effect {
        static '$gtype': GObject.GType<OffscreenEffect>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.OffscreenEffect.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.OffscreenEffect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.OffscreenEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.OffscreenEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.OffscreenEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.OffscreenEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.OffscreenEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.OffscreenEffect.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Calls the [vfunc`OffscreenEffect`.create_texture] virtual function of the `effect`
         *
         * @param cogl_context
         * @param width the minimum width of the target texture
         * @param height the minimum height of the target texture
         */
        vfunc_create_texture(cogl_context: Cogl.Context, width: number, height: number): Cogl.Texture;
        /**
         * Calls the [vfunc`OffscreenEffect`.paint_target] virtual function of the `effect`
         *
         * @param node a #ClutterPaintNode
         * @param paint_context a #ClutterPaintContext
         */
        vfunc_paint_target(node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
        // Methods
        /**
         * Calls the [vfunc`OffscreenEffect`.create_texture] virtual function of the `effect`
         *
         * @returns a handle to a Cogl texture, or
         *   %NULL. The returned handle has its reference
         *   count increased.
         * @param context
         * @param width the minimum width of the target texture
         * @param height the minimum height of the target texture
         */
        create_texture(context: Cogl.Context, width: number, height: number): Cogl.Texture;
        /**
         * Retrieves the pipeline used as a render target for the offscreen
         * buffer created by `effect`
         *
         * You should only use the returned [class`Cogl`.Pipeline] when painting. The
         * returned pipeline might change between different frames.
         *
         * @returns a #CoglPipeline. The
         *   pipeline is owned by Clutter and it should not be modified
         *   or freed
         */
        get_pipeline(): Cogl.Pipeline | null;
        /**
         * Retrieves the size of the offscreen buffer used by `effect` to
         * paint the actor to which it has been applied.
         *
         * This function should only be called by #ClutterOffscreenEffect
         * implementations, from within the [vfunc`OffscreenEffect`.paint_target]
         * virtual function.
         *
         * @returns %TRUE if the offscreen buffer has a valid size,
         *   and %FALSE otherwise
         */
        get_target_size(): [boolean, number, number];
        /**
         * Retrieves the texture used as a render target for the offscreen
         * buffer created by `effect`
         *
         * You should only use the returned texture when painting. The texture
         * may change after [vfunc`Effect`.pre_paint] is called so the effect
         * implementation should update any references to the texture after
         * chaining-up to the parent's pre_paint implementation. This can be
         * used instead of [method`OffscreenEffect`.get_texture] when the
         * effect subclass wants to paint using its own pipeline.
         *
         * @returns a #CoglTexture or %NULL. The
         *   returned texture is owned by Clutter and it should not be
         *   modified or freed
         */
        get_texture(): Cogl.Texture;
        /**
         * Calls the [vfunc`OffscreenEffect`.paint_target] virtual function of the `effect`
         *
         * @param node a #ClutterPaintNode
         * @param paint_context a #ClutterPaintContext
         */
        paint_target(node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
    }
    class PageTurnEffect extends DeformEffect {
        static '$gtype': GObject.GType<PageTurnEffect>;
        // Properties
        /**
         * The angle of the page rotation, in degrees, between 0.0 and 360.0
         */
        get angle(): number;
        set angle(val: number);
        /**
         * The period of the page turn, between 0.0 (no curling) and
         * 1.0 (fully curled)
         */
        get period(): number;
        set period(val: number);
        /**
         * The radius of the page curl, in pixels
         */
        get radius(): number;
        set radius(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.PageTurnEffect.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.PageTurnEffect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(period: number, angle: number, radius: number): Clutter.PageTurnEffect;
        // Signals
        connect<K extends keyof Clutter.PageTurnEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PageTurnEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.PageTurnEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PageTurnEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.PageTurnEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.PageTurnEffect.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the value set using [method`PageTurnEffect`.get_angle]
         *
         * @returns the angle of the page curling
         */
        get_angle(): number;
        /**
         * Retrieves the value set using [method`PageTurnEffect`.get_period]
         *
         * @returns the period of the page curling
         */
        get_period(): number;
        /**
         * Retrieves the value set using [method`PageTurnEffect`.set_radius]
         *
         * @returns the radius of the page curling
         */
        get_radius(): number;
        /**
         * Sets the angle of the page curling, in degrees
         *
         * @param angle the angle of the page curl, in degrees
         */
        set_angle(angle: number): void;
        /**
         * Sets the period of the page curling, between 0.0 (no curling)
         * and 1.0 (fully curled)
         *
         * @param period the period of the page curl, between 0.0 and 1.0
         */
        set_period(period: number): void;
        /**
         * Sets the radius of the page curling
         *
         * @param radius the radius of the page curling, in pixels
         */
        set_radius(radius: number): void;
    }
    class PanGesture extends Gesture {
        static '$gtype': GObject.GType<PanGesture>;
        // Properties
        /**
         * The threshold in pixels that has to be panned for the gesture to start.
         */
        get begin_threshold(): number;
        set begin_threshold(val: number);
        /**
         * The threshold in pixels that has to be panned for the gesture to start.
         */
        get beginThreshold(): number;
        set beginThreshold(val: number);
        /**
         * The maximum number of points to use for the pan. Set to 0 to allow
         * an unlimited number. Defaults to 0.
         */
        get max_n_points(): number;
        set max_n_points(val: number);
        /**
         * The maximum number of points to use for the pan. Set to 0 to allow
         * an unlimited number. Defaults to 0.
         */
        get maxNPoints(): number;
        set maxNPoints(val: number);
        /**
         * The minimum number of points for the gesture to start, defaults to 1.
         */
        get min_n_points(): number;
        set min_n_points(val: number);
        /**
         * The minimum number of points for the gesture to start, defaults to 1.
         */
        get minNPoints(): number;
        set minNPoints(val: number);
        /**
         * Constraints the pan gesture to the specified axis.
         */
        get pan_axis(): Clutter.PanAxis;
        set pan_axis(val: Clutter.PanAxis);
        /**
         * Constraints the pan gesture to the specified axis.
         */
        get panAxis(): Clutter.PanAxis;
        set panAxis(val: Clutter.PanAxis);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.PanGesture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.PanGesture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.PanGesture;
        // Signals
        connect<K extends keyof Clutter.PanGesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PanGesture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.PanGesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PanGesture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.PanGesture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.PanGesture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the accumulated delta from all events (ie. the total delta that the
         * pan has been moved) as `accumulated_delta_out`.
         *
         * This function is mostly meant to be called within ::pan-update signal handlers,
         * to get the delta that the pan has moved since the last ::pan-update emission.
         */
        get_accumulated_delta(): [Graphene.Vec2];
        get_accumulated_delta_abs(): [Graphene.Vec2];
        /**
         * Retrieves the begin centroid of `self`.
         */
        get_begin_centroid(): [Graphene.Point];
        /**
         * Retrieves the begin centroid of `self` in absolute coordinates.
         */
        get_begin_centroid_abs(): [Graphene.Point];
        /**
         * Gets the movement threshold in pixels that begins the pan gesture.
         *
         * @returns The begin threshold in pixels
         */
        get_begin_threshold(): number;
        /**
         * Retrieves the current centroid of the points active on `self`.
         *
         * Note that ClutterPanGesture tries to keep the centroid "stable" when points
         * are added or removed from the gesture: The centroid is driven from deltas
         * rather than the actual points on the screen.
         */
        get_centroid(): [Graphene.Point];
        /**
         * Retrieves the current centroid of the points active on `self` in
         * absolute coordinates.
         *
         * Note that ClutterPanGesture tries to keep the centroid "stable" when points
         * are added or removed from the gesture: The centroid is driven from deltas
         * rather than the actual points on the screen.
         */
        get_centroid_abs(): [Graphene.Point];
        /**
         * Retrieves the delta between the current ::pan-update signal emission and the
         * one before as `delta_out`.
         *
         * This function is mostly meant to be called within ::pan-update signal handlers,
         * to get the delta that the pan has moved since the last ::pan-update emission.
         */
        get_delta(): [Graphene.Vec2];
        get_delta_abs(): [Graphene.Vec2];
        /**
         * Gets the maximum number of points set by
         * clutter_pan_gesture_set_max_n_points().
         *
         * @returns the maximum number of points
         */
        get_max_n_points(): number;
        /**
         * Gets the minimum number of points set by
         * clutter_pan_gesture_set_min_n_points().
         *
         * @returns the minimum number of points
         */
        get_min_n_points(): number;
        /**
         * Retrieves the axis constraint set by clutter_pan_gesture_set_pan_axis().
         *
         * @returns the axis constraint
         */
        get_pan_axis(): Clutter.PanAxis;
        /**
         * Retrieves the current velocity of the pan.
         */
        get_velocity(): [Graphene.Vec2];
        get_velocity_abs(): [Graphene.Vec2];
        /**
         * Sets the movement threshold in pixels to begin the pan gesture.
         *
         * @param begin_threshold the threshold in pixels
         */
        set_begin_threshold(begin_threshold: number): void;
        /**
         * Sets the maximum number of points to use for the pan. Set to 0 to allow
         * an unlimited number.
         *
         * @param max_n_points the maximum number of points
         */
        set_max_n_points(max_n_points: number): void;
        /**
         * Sets the minimum number of points for the gesture to start.
         *
         * @param min_n_points the minimum number of points
         */
        set_min_n_points(min_n_points: number): void;
        /**
         * Restricts the pan gesture to a specific axis.
         *
         * @param axis the #ClutterPanAxis
         */
        set_pan_axis(axis: Clutter.PanAxis | null): void;
    }
    class PipelineCache extends GObjectClasses.Object {
        static '$gtype': GObject.GType<PipelineCache>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.PipelineCache.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.PipelineCache.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.PipelineCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PipelineCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.PipelineCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PipelineCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.PipelineCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.PipelineCache.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        set_pipeline(
            group: Clutter.PipelineGroup,
            slot: number,
            source_color_state: Clutter.ColorState,
            target_color_state: Clutter.ColorState,
            pipeline: Cogl.Pipeline,
        ): void;
        unset_all_pipelines(group: Clutter.PipelineGroup): void;
    }
    abstract class PressGesture extends Gesture {
        static '$gtype': GObject.GType<PressGesture>;
        // Properties
        /**
         * Threshold in pixels to cancel the gesture, use -1 to disable the threshold.
         */
        get cancel_threshold(): number;
        set cancel_threshold(val: number);
        /**
         * Threshold in pixels to cancel the gesture, use -1 to disable the threshold.
         */
        get cancelThreshold(): number;
        set cancelThreshold(val: number);
        /**
         * The minimum duration of a press in milliseconds for it to be recognized
         * as a long press gesture.
         *
         * A value of -1 (default) will make the gesture use the value of the
         * #ClutterSettings:long-press-duration property.
         */
        get long_press_duration_ms(): number;
        set long_press_duration_ms(val: number);
        /**
         * The minimum duration of a press in milliseconds for it to be recognized
         * as a long press gesture.
         *
         * A value of -1 (default) will make the gesture use the value of the
         * #ClutterSettings:long-press-duration property.
         */
        get longPressDurationMs(): number;
        set longPressDurationMs(val: number);
        /**
         * Whether the clickable actor should be in "pressed" state
         */
        get pressed(): boolean;
        set pressed(val: boolean);
        /**
         * The mouse button required for the press gesture to recognize.
         * Pass 0 to allow any button. Touch input is always handled as a press
         * of the primary button.
         */
        get required_button(): number;
        set required_button(val: number);
        /**
         * The mouse button required for the press gesture to recognize.
         * Pass 0 to allow any button. Touch input is always handled as a press
         * of the primary button.
         */
        get requiredButton(): number;
        set requiredButton(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.PressGesture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.PressGesture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.PressGesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PressGesture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.PressGesture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PressGesture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.PressGesture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.PressGesture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_long_press(): void;
        vfunc_press(): void;
        vfunc_release(): void;
        // Methods
        /**
         * Retrieves the button that was pressed.
         *
         * @returns the button value
         */
        get_button(): number;
        /**
         * Gets the movement threshold in pixels that cancels the press gesture.
         *
         * @returns The cancel threshold in pixels
         */
        get_cancel_threshold(): number;
        /**
         * Retrieves the coordinates of the press.
         */
        get_coords(): [Graphene.Point];
        /**
         * Retrieves the coordinates of the press in absolute coordinates.
         */
        get_coords_abs(): [Graphene.Point];
        /**
         * Gets the minimum duration is milliseconds that's necessary for a long press
         * to recognize. A value of -1 means the default from
         * #ClutterSettings:long-press-duration is used.
         */
        get_long_press_duration_ms(): number;
        /**
         * Retrieves the number of presses that happened on the gesture.
         *
         * @returns The number of presses
         */
        get_n_presses(): number;
        /**
         * Gets whether the press gesture actor should be in the "pressed" state.
         *
         * @returns The "pressed" state
         */
        get_pressed(): boolean;
        /**
         * Gets the mouse button required for the press gesture to recognize.
         *
         * @returns The mouse button required to recognize
         */
        get_required_button(): number;
        /**
         * Retrieves the modifier state of the press gesture.
         *
         * @returns the modifier state parameter, or 0
         */
        get_state(): Clutter.ModifierType;
        // Conflicted with Clutter.Gesture.get_state
        get_state(...args: never[]): any;
        /**
         * Sets the movement threshold in pixels that cancels the press gesture.
         *
         * See also #ClutterPressGesture:cancel-threshold.
         *
         * @param cancel_threshold the threshold in pixels, or -1 to disable the threshold
         */
        set_cancel_threshold(cancel_threshold: number): void;
        /**
         * Sets the minimum duration is milliseconds that's necessary for a long press
         * to recognize.
         *
         * Pass -1 to use the default from #ClutterSettings:long-press-duration.
         *
         * @param long_press_duration_ms minimum duration for long press to recognize
         */
        set_long_press_duration_ms(long_press_duration_ms: number): void;
        /**
         * Sets the mouse button required for the press gesture to recognize.
         * Pass 0 to allow any button. Touch input is always handled as a press
         * of the primary button.
         *
         * @param required_button mouse button required for the gesture to recognize
         */
        set_required_button(required_button: number): void;
    }
    class PropertyTransition extends Transition {
        static '$gtype': GObject.GType<PropertyTransition>;
        // Properties
        /**
         * The name of the property of a [iface`Animatable]` to animate.
         */
        get property_name(): string;
        set property_name(val: string);
        /**
         * The name of the property of a [iface`Animatable]` to animate.
         */
        get propertyName(): string;
        set propertyName(val: string);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.PropertyTransition.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.PropertyTransition.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(property_name?: string | null): Clutter.PropertyTransition;
        static new_for_actor(actor: Clutter.Actor, property_name?: string | null): Clutter.PropertyTransition;
        // Conflicted with Clutter.Timeline.new_for_actor
        static new_for_actor(...args: never[]): any;
        // Signals
        connect<K extends keyof Clutter.PropertyTransition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PropertyTransition.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.PropertyTransition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.PropertyTransition.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.PropertyTransition.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.PropertyTransition.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the value of the [property`PropertyTransition:`property-name]
         * property.
         *
         * @returns the name of the property being animated, or %NULL if
         *   none is set. The returned string is owned by the `transition` and
         *   it should not be freed.
         */
        get_property_name(): string;
        /**
         * Sets the [property`PropertyTransition:`property-name] property of `transition`.
         *
         * @param property_name a property name
         */
        set_property_name(property_name?: string | null): void;
    }
    abstract class Seat extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Seat>;
        // Properties
        get context(): Clutter.Context;
        get name(): string;
        /**
         * The current touch-mode of the #ClutterSeat, it is set to %TRUE if the
         * requirements documented in [method`Seat`.get_touch_mode] are fulfilled.
         */
        get touch_mode(): boolean;
        /**
         * The current touch-mode of the #ClutterSeat, it is set to %TRUE if the
         * requirements documented in [method`Seat`.get_touch_mode] are fulfilled.
         */
        get touchMode(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Seat.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Seat.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Seat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Seat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Seat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Seat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Seat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Seat.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_bell_notify(): void;
        /**
         * Creates a virtual input device.
         *
         * @param device_type the type of the virtual device
         */
        vfunc_create_virtual_device(device_type: Clutter.InputDeviceType): Clutter.VirtualInputDevice;
        /**
         * Returns the seat keymap
         */
        vfunc_get_keymap(): Clutter.Keymap;
        vfunc_grab(time: number): Clutter.GrabState;
        vfunc_handle_event_post(event: Clutter.Event): boolean;
        vfunc_init_pointer_position(x: number, y: number): void;
        vfunc_query_state(sprite: Clutter.Sprite, coords: Graphene.Point, modifiers: Clutter.ModifierType): boolean;
        vfunc_ungrab(time: number): void;
        vfunc_warp_pointer(x: number, y: number): void;
        // Methods
        bell_notify(): void;
        /**
         * Creates a virtual input device.
         *
         * @returns a newly created virtual device
         * @param device_type the type of the virtual device
         */
        create_virtual_device(device_type: Clutter.InputDeviceType | null): Clutter.VirtualInputDevice;
        ensure_a11y_state(): void;
        get_context(): Clutter.Context;
        /**
         * Returns the seat keymap
         *
         * @returns the seat keymap
         */
        get_keymap(): Clutter.Keymap;
        get_name(): string;
        /**
         * Gets the current pointer accessibility settings
         *
         * @param settings a pointer to a #ClutterPointerA11ySettings
         */
        get_pointer_a11y_settings(settings: Clutter.PointerA11ySettings): void;
        /**
         * Gets the current touch-mode state of the #ClutterSeat `seat`.
         * The [property`Seat:`touch-mode] property is set to %TRUE if the following
         * requirements are fulfilled:
         *
         *  - A touchscreen is available
         *  - A tablet mode switch, if present, is enabled
         *
         * @returns %TRUE if the device is a tablet that doesn't have an external
         *   keyboard attached, %FALSE otherwise.
         */
        get_touch_mode(): boolean;
        /**
         * Inhibits unsetting of the pointer focus-surface for the #ClutterSeat `seat,`
         * this allows to keep using the pointer even when it's hidden.
         *
         * This property is refcounted, so [method`Seat`.uninhibit_unfocus] must be
         * called the exact same number of times as [method`Seat`.inhibit_unfocus]
         * was called before.
         */
        inhibit_unfocus(): void;
        /**
         * Gets whether unsetting of the pointer focus-surface is inhibited
         * for the #ClutterSeat `seat`.
         *
         * @returns %TRUE if unsetting is inhibited, %FALSE otherwise
         */
        is_unfocus_inhibited(): boolean;
        /**
         * Returns the list of HW devices
         *
         * @returns A list
         *   of #ClutterInputDevice. The elements of the returned list are owned by
         *   Clutter and may not be freed, the returned list should be freed using
         *   g_list_free() when done.
         */
        list_devices(): Clutter.InputDevice[];
        /**
         * Sets the dwell click type
         *
         * @param click_type type of click as #ClutterPointerA11yDwellClickType
         */
        set_pointer_a11y_dwell_click_type(click_type: Clutter.PointerA11yDwellClickType | null): void;
        /**
         * Sets the pointer accessibility settings
         *
         * @param settings a pointer to a #ClutterPointerA11ySettings
         */
        set_pointer_a11y_settings(settings: Clutter.PointerA11ySettings): void;
        /**
         * Disables the inhibiting of unsetting of the pointer focus-surface
         * previously enabled by calling [method`Seat`.inhibit_unfocus].
         *
         * This property is refcounted, so [method`Seat`.uninhibit_unfocus] must be
         * called the exact same number of times as [method`Seat`.inhibit_unfocus]
         * was called before.
         */
        uninhibit_unfocus(): void;
        warp_pointer(x: number, y: number): void;
    }
    class Settings extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Settings>;
        // Properties
        /**
         * The default distance that the cursor of a pointer device
         * should travel before a drag operation should start.
         */
        get dnd_drag_threshold(): number;
        set dnd_drag_threshold(val: number);
        /**
         * The default distance that the cursor of a pointer device
         * should travel before a drag operation should start.
         */
        get dndDragThreshold(): number;
        set dndDragThreshold(val: number);
        /**
         * The maximum distance, in pixels, between button-press events that
         * determines whether or not to increase the click count by 1.
         */
        get double_click_distance(): number;
        set double_click_distance(val: number);
        /**
         * The maximum distance, in pixels, between button-press events that
         * determines whether or not to increase the click count by 1.
         */
        get doubleClickDistance(): number;
        set doubleClickDistance(val: number);
        /**
         * The time, in milliseconds, that should elapse between button-press
         * events in order to increase the click count by 1.
         */
        get double_click_time(): number;
        set double_click_time(val: number);
        /**
         * The time, in milliseconds, that should elapse between button-press
         * events in order to increase the click count by 1.
         */
        get doubleClickTime(): number;
        set doubleClickTime(val: number);
        /**
         * The DPI used when rendering text, as a value of 1024 * dots/inch.
         *
         * If set to -1, the system's default will be used instead
         */
        get font_dpi(): number;
        set font_dpi(val: number);
        /**
         * The DPI used when rendering text, as a value of 1024 * dots/inch.
         *
         * If set to -1, the system's default will be used instead
         */
        get fontDpi(): number;
        set fontDpi(val: number);
        /**
         * The default font name that should be used by text actors, as
         * a string that can be passed to [func`Pango`.FontDescription.from_string].
         */
        get font_name(): string;
        set font_name(val: string);
        /**
         * The default font name that should be used by text actors, as
         * a string that can be passed to [func`Pango`.FontDescription.from_string].
         */
        get fontName(): string;
        set fontName(val: string);
        /**
         * Sets the minimum duration for a press to be recognized as a long press
         * gesture. The duration is expressed in milliseconds.
         *
         * See also [property`PressGesture:`long-press-duration-ms].
         */
        get long_press_duration(): number;
        set long_press_duration(val: number);
        /**
         * Sets the minimum duration for a press to be recognized as a long press
         * gesture. The duration is expressed in milliseconds.
         *
         * See also [property`PressGesture:`long-press-duration-ms].
         */
        get longPressDuration(): number;
        set longPressDuration(val: number);
        get password_hint_time(): number;
        set password_hint_time(val: number);
        get passwordHintTime(): number;
        set passwordHintTime(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Settings.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Settings.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Settings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Settings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Settings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Settings.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Retrieves the singleton instance of #ClutterSettings
         */
        static get_default(): Clutter.Settings;
    }
    class ShaderEffect extends OffscreenEffect {
        static '$gtype': GObject.GType<ShaderEffect>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.ShaderEffect.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.ShaderEffect.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(shader_type: Cogl.ShaderType): Clutter.ShaderEffect;
        // Signals
        connect<K extends keyof Clutter.ShaderEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ShaderEffect.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.ShaderEffect.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.ShaderEffect.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.ShaderEffect.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.ShaderEffect.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Returns the GLSL source code to use for
         *  instances of this shader effect. Note that this function is only
         *  called once per subclass of #ClutterShaderEffect regardless of how
         *  many instances are used. It is expected that subclasses will return
         *  a copy of a static string from this function.
         */
        vfunc_get_static_shader_source(): string;
        // Methods
        /**
         * Retrieves a pointer to the program's handle
         *
         * @returns a pointer to the program's handle,
         *   or %NULL
         */
        get_program(): Cogl.Program;
        /**
         * Retrieves a pointer to the shader's handle
         *
         * @returns a pointer to the shader's handle,
         *   or %NULL
         */
        get_shader(): Cogl.Shader;
        /**
         * Sets the source of the GLSL shader used by `effect`
         *
         * This function should only be called by implementations of
         * the #ClutterShaderEffect class, and not by application code.
         *
         * This function can only be called once; subsequent calls will
         * yield no result.
         *
         * @returns %TRUE if the source was set
         * @param source the source of a GLSL shader
         */
        set_shader_source(source: string): boolean;
        /**
         * Sets `value` as the payload for the uniform `name` inside the shader
         * effect
         *
         * The #GType of the `value` must be one of: %G_TYPE_INT, for a single
         * integer value; %G_TYPE_FLOAT, for a single floating point value;
         * %CLUTTER_TYPE_SHADER_INT, for an array of integer values;
         * %CLUTTER_TYPE_SHADER_FLOAT, for an array of floating point values;
         * and %CLUTTER_TYPE_SHADER_MATRIX, for a matrix of floating point
         * values. It also accepts %G_TYPE_DOUBLE for compatibility with other
         * languages than C.
         *
         * @param name the name of the uniform to set
         * @param value a #GValue with the value of the uniform to set
         */
        set_uniform_value(name: string, value: GObject.Value | any): void;
    }
    class SnapConstraint extends Constraint {
        static '$gtype': GObject.GType<SnapConstraint>;
        // Properties
        /**
         * The edge of the [class`Actor]` that should be snapped
         */
        get from_edge(): Clutter.SnapEdge;
        set from_edge(val: Clutter.SnapEdge);
        /**
         * The edge of the [class`Actor]` that should be snapped
         */
        get fromEdge(): Clutter.SnapEdge;
        set fromEdge(val: Clutter.SnapEdge);
        /**
         * The offset, in pixels, between [property`SnapConstraint:`from-edge]
         * and [property`SnapConstraint:`to-edge]
         */
        get offset(): number;
        set offset(val: number);
        /**
         * The [class`Actor]` used as the source for the constraint
         */
        get source(): Clutter.Actor;
        set source(val: Clutter.Actor);
        /**
         * The edge of the [property`SnapConstraint:`source] that should be snapped
         */
        get to_edge(): Clutter.SnapEdge;
        set to_edge(val: Clutter.SnapEdge);
        /**
         * The edge of the [property`SnapConstraint:`source] that should be snapped
         */
        get toEdge(): Clutter.SnapEdge;
        set toEdge(val: Clutter.SnapEdge);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.SnapConstraint.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.SnapConstraint.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(
            source: Clutter.Actor | null,
            from_edge: Clutter.SnapEdge,
            to_edge: Clutter.SnapEdge,
            offset: number,
        ): Clutter.SnapConstraint;
        // Signals
        connect<K extends keyof Clutter.SnapConstraint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.SnapConstraint.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.SnapConstraint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.SnapConstraint.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.SnapConstraint.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.SnapConstraint.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the edges used by the `constraint`
         */
        get_edges(): [Clutter.SnapEdge, Clutter.SnapEdge];
        /**
         * Retrieves the offset set using [method`SnapConstraint`.set_offset]
         *
         * @returns the offset, in pixels
         */
        get_offset(): number;
        /**
         * Retrieves the [class`Actor]` set using [method`SnapConstraint`.set_source]
         *
         * @returns a pointer to the source actor
         */
        get_source(): Clutter.Actor;
        /**
         * Sets the edges to be used by the `constraint`
         *
         * The `from_edge` is the edge on the [class`Actor]` to which `constraint`
         * has been added. The `to_edge` is the edge of the [class`Actor]` inside
         * the [property`SnapConstraint:`source] property.
         *
         * @param from_edge the edge on the actor
         * @param to_edge the edge on the source
         */
        set_edges(from_edge: Clutter.SnapEdge | null, to_edge: Clutter.SnapEdge | null): void;
        /**
         * Sets the offset to be applied to the constraint
         *
         * @param offset the offset to apply, in pixels
         */
        set_offset(offset: number): void;
        /**
         * Sets the source [class`Actor]` for the constraint
         *
         * @param source a #ClutterActor, or %NULL to unset the source
         */
        set_source(source?: Clutter.Actor | null): void;
    }
    class Sprite extends Focus {
        static '$gtype': GObject.GType<Sprite>;
        // Properties
        get device(): Clutter.InputDevice;
        get sequence(): Clutter.EventSequence;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Sprite.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Sprite.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Sprite.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Sprite.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Sprite.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Sprite.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Sprite.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Sprite.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the current position that `sprite` points to, in stage-global
         * coordinate system.
         */
        get_coords(): [Graphene.Point];
    }
    class Stage extends Actor implements Atk.ImplementorIface, Clutter.Animatable {
        static '$gtype': GObject.GType<Stage>;
        // Properties
        /**
         * %TRUE if there is currently an active grab on the stage.
         */
        get is_grabbed(): boolean;
        /**
         * %TRUE if there is currently an active grab on the stage.
         */
        get isGrabbed(): boolean;
        /**
         * The [class`Clutter`.Actor] that will receive key events from the underlying
         * windowing system.
         *
         * If %NULL, the #ClutterStage will receive the events.
         */
        get key_focus(): Clutter.Actor;
        set key_focus(val: Clutter.Actor);
        /**
         * The [class`Clutter`.Actor] that will receive key events from the underlying
         * windowing system.
         *
         * If %NULL, the #ClutterStage will receive the events.
         */
        get keyFocus(): Clutter.Actor;
        set keyFocus(val: Clutter.Actor);
        /**
         * The parameters used for the perspective projection from 3D
         * coordinates to 2D
         */
        get perspective(): Clutter.Perspective;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Stage.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Stage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Stage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Stage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Stage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Stage.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_before_paint(view: Clutter.StageView, frame: Clutter.Frame): void;
        vfunc_paint_view(view: Clutter.StageView, redraw_clip: Mtk.Region, frame: Clutter.Frame): void;
        vfunc_skipped_paint(view: Clutter.StageView, frame: Clutter.Frame): void;
        // Methods
        /**
         * Ensures that the GL viewport is updated with the current
         * stage window size.
         *
         * This function will queue a redraw of `stage`.
         *
         * This function should not be called by applications; it is used
         * when embedding a #ClutterStage into a toolkit with another
         * windowing system, like GTK+.
         */
        ensure_viewport(): void;
        /**
         * Iterates over active input.
         *
         * @returns %TRUE if the foreach function did not stop.
         * @param func Iterator function
         */
        foreach_sprite(func: Clutter.StageInputForeachFunc): boolean;
        /**
         * Checks the scene at the coordinates `x` and `y` and returns a pointer
         * to the [class`Clutter`.Actor] at those coordinates. The result is the actor which
         * would be at the specified location on the next redraw, and is not
         * necessarily that which was there on the previous redraw. This allows the
         * function to perform chronologically correctly after any queued changes to
         * the scene, and even if nothing has been drawn.
         *
         * By using `pick_mode` it is possible to control which actors will be
         * painted and thus available.
         *
         * @returns the actor at the specified coordinates,
         *   if any
         * @param pick_mode how the scene graph should be painted
         * @param x X coordinate to check
         * @param y Y coordinate to check
         */
        get_actor_at_pos(pick_mode: Clutter.PickMode | null, x: number, y: number): Clutter.Actor;
        /**
         * Get the size of the framebuffer one must pass to
         * [method`Stage`.paint_to_buffer] or [method`Stage`.paint_to_framebuffer]
         * would be used with the same `rect`.
         *
         * @returns %TRUE if the size has been retrieved, %FALSE otherwise.
         * @param rect a rectangle
         */
        get_capture_final_size(rect: Mtk.Rectangle): [boolean, number, number, number];
        /**
         * Retrieves the current focus actor for an event. This is
         * the key focus for key events and other events directed
         * to the key focus, or the actor directly under the
         * coordinates of a device or touch sequence.
         *
         * The actor is looked up at the time of calling this function,
         * and may differ from the actor that the stage originally
         * delivered the event to.
         *
         * @returns a pointer to the #ClutterActor or %NULL
         * @param event an event received on the stage
         */
        get_event_actor(event: Clutter.Event): Clutter.Actor | null;
        /**
         * Gets the actor that currently holds a grab.
         *
         * @returns The grabbing actor
         */
        get_grab_actor(): Clutter.Actor | null;
        /**
         * Retrieves the actor that is currently under key focus.
         *
         * @returns the actor with key focus
         */
        get_key_focus(): Clutter.Actor | null;
        /**
         * Retrieves the stage perspective.
         */
        get_perspective(): [Clutter.Perspective | null];
        /**
         * Grabs input onto a certain actor. Events will be propagated as
         * usual inside its hierarchy.
         *
         * @returns an opaque #ClutterGrab handle, drop
         *   with [method`Grab`.dismiss]
         * @param actor The actor grabbing input
         */
        grab(actor: Clutter.Actor): Clutter.Grab;
        /**
         * Creates an inactive grab. The grab will become effective
         * after [method`Grab`.activate].
         *
         * @returns an opaque #ClutterGrab handle
         * @param actor The actor that will grab input
         */
        grab_inactive(actor: Clutter.Actor): Clutter.Grab;
        /**
         * Processes an event.
         *
         * The `event` must be a valid #ClutterEvent and have a #ClutterStage
         * associated to it.
         *
         * This function is only useful when embedding Clutter inside another
         * toolkit, and it should never be called by applications.
         *
         * @param event a #ClutterEvent.
         */
        handle_event(event: Clutter.Event): void;
        is_active(): boolean;
        /**
         * Take a snapshot of the stage to a provided buffer.
         *
         * @returns %TRUE is the buffer has been paint successfully, %FALSE otherwise.
         * @param rect a rectangle
         * @param scale the scale
         * @param data a pointer to the data
         * @param stride stride of the image surface
         * @param format the pixel format
         * @param paint_flags the #ClutterPaintFlag
         */
        paint_to_buffer(
            rect: Mtk.Rectangle,
            scale: number,
            data: Uint8Array[] | string,
            stride: number,
            format: Cogl.PixelFormat | null,
            paint_flags: Clutter.PaintFlag | null,
        ): boolean;
        /**
         * Take a snapshot of the stage to a #ClutterContent.
         *
         * @returns the #ClutterContent or %NULL on error.
         * @param rect a rectangle
         * @param scale the scale
         * @param paint_flags the #ClutterPaintFlag
         */
        paint_to_content(rect: Mtk.Rectangle, scale: number, paint_flags: Clutter.PaintFlag | null): Clutter.Content;
        paint_to_framebuffer(
            framebuffer: Cogl.Framebuffer,
            rect: Mtk.Rectangle,
            scale: number,
            paint_flags: Clutter.PaintFlag | null,
        ): void;
        /**
         * Makes a screenshot of the stage in RGBA 8bit data, returns a
         * linear buffer with `width` * 4 as rowstride.
         *
         * The alpha data contained in the returned buffer is driver-dependent,
         * and not guaranteed to hold any sensible value.
         *
         * @returns a pointer to newly allocated memory with the buffer
         *   or %NULL if the read failed. Use g_free() on the returned data
         *   to release the resources it has allocated.
         * @param x x coordinate of the first pixel that is read from stage
         * @param y y coordinate of the first pixel that is read from stage
         * @param width Width dimension of pixels to be read, or -1 for the
         *   entire stage width
         * @param height Height dimension of pixels to be read, or -1 for the
         *   entire stage height
         */
        read_pixels(x: number, y: number, width: number, height: number): Uint8Array[];
        /**
         * Schedules a redraw of the #ClutterStage at the next optimal timestamp.
         */
        schedule_update(): void;
        set_active(is_active: boolean): void;
        /**
         * Sets the key focus on `actor`. An actor with key focus will receive
         * all the key events. If `actor` is %NULL, the stage will receive
         * focus.
         *
         * @param actor the actor to set key focus to, or %NULL
         */
        set_key_focus(actor?: Clutter.Actor | null): void;
        set_minimum_size(width: number, height: number): void;
        // Inherited methods
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
        get_actor(): Clutter.Actor;
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
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         *
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         *
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Clutter.Actor;
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
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         *
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function
         *     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from the transformation function
         *     from the `target` to the `source,` or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free
         *     resources used by the transformation functions, or %NULL if not required
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         *
         * @returns the data if found,
         *          or %NULL if no such data exists.
         * @param key name of the key for that association
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         *
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         *
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         *
         * @returns %TRUE if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         *
         * @param pspec the #GParamSpec of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         *
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         *
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         *
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         *
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         *
         * @returns the data if found, or %NULL
         *          if no such data exists.
         * @param key name of the key
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         *
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         *
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         *
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         *
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         *
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         *
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         *
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }
    class StageView extends GObjectClasses.Object {
        static '$gtype': GObject.GType<StageView>;
        // Properties
        get color_state(): Clutter.ColorState;
        set color_state(val: Clutter.ColorState);
        get colorState(): Clutter.ColorState;
        set colorState(val: Clutter.ColorState);
        get framebuffer(): Cogl.Framebuffer;
        set framebuffer(val: Cogl.Framebuffer);
        get layout(): Mtk.Rectangle;
        set layout(val: Mtk.Rectangle);
        get name(): string;
        get output_color_state(): Clutter.ColorState;
        set output_color_state(val: Clutter.ColorState);
        get outputColorState(): Clutter.ColorState;
        set outputColorState(val: Clutter.ColorState);
        get refresh_rate(): number;
        set refresh_rate(val: number);
        get refreshRate(): number;
        set refreshRate(val: number);
        get scale(): number;
        set scale(val: number);
        get stage(): Clutter.Stage;
        get transform(): number;
        get use_shadowfb(): boolean;
        get useShadowfb(): boolean;
        get vblank_duration_us(): number;
        get vblankDurationUs(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.StageView.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.StageView.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.StageView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.StageView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.StageView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.StageView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.StageView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.StageView.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_get_default_paint_flags(): Clutter.PaintFlag;
        vfunc_new_frame(): Clutter.Frame;
        vfunc_schedule_update(): void;
        // Methods
        destroy(): void;
        get_default_paint_flags(): Clutter.PaintFlag;
        /**
         * Retrieves the framebuffer of `view` to draw to.
         *
         * @returns a #CoglFramebuffer
         */
        get_framebuffer(): Cogl.Framebuffer;
        get_layout(rect: Mtk.Rectangle): void;
        get_offscreen_transformation_matrix(matrix: Graphene.Matrix): void;
        /**
         * Retrieves the onscreen framebuffer of `view` if available.
         *
         * @returns a #CoglFramebuffer
         */
        get_onscreen(): Cogl.Framebuffer;
        get_refresh_rate(): number;
        get_scale(): number;
        get_transform(): Mtk.MonitorTransform;
        has_shadowfb(): boolean;
        schedule_update_now(): void;
    }
    class Text extends Actor implements Atk.ImplementorIface, Clutter.Animatable {
        static '$gtype': GObject.GType<Text>;
        // Properties
        /**
         * Toggles whether return invokes the activate signal or not.
         */
        get activatable(): boolean;
        set activatable(val: boolean);
        /**
         * A list of `PangoStyleAttribute`s to be applied to the
         * contents of the #ClutterText actor.
         */
        get attributes(): Pango.AttrList;
        set attributes(val: Pango.AttrList);
        /**
         * The buffer which stores the text for this #ClutterText.
         *
         * If set to %NULL, a default buffer will be created.
         */
        get buffer(): Clutter.TextBuffer;
        set buffer(val: Clutter.TextBuffer);
        /**
         * The color used to render the text.
         */
        get color(): Cogl.Color;
        set color(val: Cogl.Color);
        /**
         * The color of the cursor.
         */
        get cursor_color(): Cogl.Color;
        set cursor_color(val: Cogl.Color);
        /**
         * The color of the cursor.
         */
        get cursorColor(): Cogl.Color;
        set cursorColor(val: Cogl.Color);
        /**
         * Will be set to %TRUE if [property`Text:`cursor-color] has been set.
         */
        get cursor_color_set(): boolean;
        /**
         * Will be set to %TRUE if [property`Text:`cursor-color] has been set.
         */
        get cursorColorSet(): boolean;
        /**
         * The current input cursor position. -1 is taken to be the end of the text
         */
        get cursor_position(): number;
        set cursor_position(val: number);
        /**
         * The current input cursor position. -1 is taken to be the end of the text
         */
        get cursorPosition(): number;
        set cursorPosition(val: number);
        /**
         * The size of the cursor, in pixels. If set to -1 the size used will
         * be the default cursor size of 2 pixels.
         */
        get cursor_size(): number;
        set cursor_size(val: number);
        /**
         * The size of the cursor, in pixels. If set to -1 the size used will
         * be the default cursor size of 2 pixels.
         */
        get cursorSize(): number;
        set cursorSize(val: number);
        /**
         * Whether the input cursor is visible or not.
         *
         * The cursor will only be visible if this property and either
         * the [property`Text:`editable] or the [property`Text:`selectable] properties
         * are set to %TRUE.
         */
        get cursor_visible(): boolean;
        set cursor_visible(val: boolean);
        /**
         * Whether the input cursor is visible or not.
         *
         * The cursor will only be visible if this property and either
         * the [property`Text:`editable] or the [property`Text:`selectable] properties
         * are set to %TRUE.
         */
        get cursorVisible(): boolean;
        set cursorVisible(val: boolean);
        /**
         * Whether key events delivered to the actor causes editing.
         */
        get editable(): boolean;
        set editable(val: boolean);
        /**
         * The preferred place to ellipsize the contents of the #ClutterText actor
         */
        get ellipsize(): Pango.EllipsizeMode;
        set ellipsize(val: Pango.EllipsizeMode);
        /**
         * The [struct`Pango`.FontDescription] that should be used by the #ClutterText
         *
         * If you have a string describing the font then you should look at
         * [property`Text:`font-name] instead
         */
        get font_description(): Pango.FontDescription;
        set font_description(val: Pango.FontDescription);
        /**
         * The [struct`Pango`.FontDescription] that should be used by the #ClutterText
         *
         * If you have a string describing the font then you should look at
         * [property`Text:`font-name] instead
         */
        get fontDescription(): Pango.FontDescription;
        set fontDescription(val: Pango.FontDescription);
        /**
         * The font to be used by the #ClutterText, as a string
         * that can be parsed by [func`Pango`.FontDescription.from_string].
         *
         * If set to %NULL, the default system font will be used instead.
         */
        get font_name(): string;
        set font_name(val: string);
        /**
         * The font to be used by the #ClutterText, as a string
         * that can be parsed by [func`Pango`.FontDescription.from_string].
         *
         * If set to %NULL, the default system font will be used instead.
         */
        get fontName(): string;
        set fontName(val: string);
        get input_hints(): Clutter.InputContentHintFlags;
        set input_hints(val: Clutter.InputContentHintFlags);
        get inputHints(): Clutter.InputContentHintFlags;
        set inputHints(val: Clutter.InputContentHintFlags);
        get input_purpose(): Clutter.InputContentPurpose;
        set input_purpose(val: Clutter.InputContentPurpose);
        get inputPurpose(): Clutter.InputContentPurpose;
        set inputPurpose(val: Clutter.InputContentPurpose);
        /**
         * Whether the contents of the #ClutterText should be justified
         * on both margins.
         */
        get justify(): boolean;
        set justify(val: boolean);
        /**
         * The preferred alignment for the text. This property controls
         * the alignment of multi-line paragraphs.
         */
        get line_alignment(): Pango.Alignment;
        set line_alignment(val: Pango.Alignment);
        /**
         * The preferred alignment for the text. This property controls
         * the alignment of multi-line paragraphs.
         */
        get lineAlignment(): Pango.Alignment;
        set lineAlignment(val: Pango.Alignment);
        /**
         * Whether to wrap the lines of [property`Text:`text] if the contents
         * exceed the available allocation. The wrapping strategy is
         * controlled by the [property`Text:`line-wrap-mode] property.
         */
        get line_wrap(): boolean;
        set line_wrap(val: boolean);
        /**
         * Whether to wrap the lines of [property`Text:`text] if the contents
         * exceed the available allocation. The wrapping strategy is
         * controlled by the [property`Text:`line-wrap-mode] property.
         */
        get lineWrap(): boolean;
        set lineWrap(val: boolean);
        /**
         * If [property`Text:`line-wrap] is set to %TRUE, this property will
         * control how the text is wrapped.
         */
        get line_wrap_mode(): Pango.WrapMode;
        set line_wrap_mode(val: Pango.WrapMode);
        /**
         * If [property`Text:`line-wrap] is set to %TRUE, this property will
         * control how the text is wrapped.
         */
        get lineWrapMode(): Pango.WrapMode;
        set lineWrapMode(val: Pango.WrapMode);
        /**
         * The maximum length of the contents of the #ClutterText actor.
         */
        get max_length(): number;
        set max_length(val: number);
        /**
         * The maximum length of the contents of the #ClutterText actor.
         */
        get maxLength(): number;
        set maxLength(val: number);
        /**
         * If non-zero, the character that should be used in place of
         * the actual text in a password text actor.
         */
        get password_char(): number;
        set password_char(val: number);
        /**
         * If non-zero, the character that should be used in place of
         * the actual text in a password text actor.
         */
        get passwordChar(): number;
        set passwordChar(val: number);
        /**
         * Whether it is possible to select text, either using the pointer
         * or the keyboard.
         *
         * This property depends on the [property`Actor:`reactive] property being
         * set to %TRUE.
         */
        get selectable(): boolean;
        set selectable(val: boolean);
        /**
         * The color of selected text.
         */
        get selected_text_color(): Cogl.Color;
        set selected_text_color(val: Cogl.Color);
        /**
         * The color of selected text.
         */
        get selectedTextColor(): Cogl.Color;
        set selectedTextColor(val: Cogl.Color);
        /**
         * Will be set to %TRUE if [property`Text:`selected-text-color] has been set.
         */
        get selected_text_color_set(): boolean;
        /**
         * Will be set to %TRUE if [property`Text:`selected-text-color] has been set.
         */
        get selectedTextColorSet(): boolean;
        /**
         * The current input cursor position. -1 is taken to be the end of the text
         */
        get selection_bound(): number;
        set selection_bound(val: number);
        /**
         * The current input cursor position. -1 is taken to be the end of the text
         */
        get selectionBound(): number;
        set selectionBound(val: number);
        /**
         * The color of the selection.
         */
        get selection_color(): Cogl.Color;
        set selection_color(val: Cogl.Color);
        /**
         * The color of the selection.
         */
        get selectionColor(): Cogl.Color;
        set selectionColor(val: Cogl.Color);
        /**
         * Will be set to %TRUE if [property`Text:`selection-color] has been set.
         */
        get selection_color_set(): boolean;
        /**
         * Will be set to %TRUE if [property`Text:`selection-color] has been set.
         */
        get selectionColorSet(): boolean;
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
        get single_line_mode(): boolean;
        set single_line_mode(val: boolean);
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
        get singleLineMode(): boolean;
        set singleLineMode(val: boolean);
        /**
         * The text to render inside the actor.
         */
        get text(): string;
        set text(val: string);
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
        get use_markup(): boolean;
        set use_markup(val: boolean);
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
        get useMarkup(): boolean;
        set useMarkup(val: boolean);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Text.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Text.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.Text;
        static new_full(font_name: string, text: string, color: Cogl.Color): Clutter.Text;
        static new_with_buffer(buffer: Clutter.TextBuffer): Clutter.Text;
        static new_with_text(font_name: string | null, text: string): Clutter.Text;
        // Signals
        connect<K extends keyof Clutter.Text.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Text.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Text.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Text.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Text.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Text.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * class handler for the #ClutterText::activate signal
         */
        vfunc_activate(): void;
        /**
         * class handler for the #ClutterText::cursor-changed signal
         */
        vfunc_cursor_changed(): void;
        /**
         * class handler for the #ClutterText::text-changed signal
         */
        vfunc_text_changed(): void;
        // Methods
        /**
         * Emits the [signal`Text:`:activate] signal, if `self` has been set
         * as activatable using [method`Text`.set_activatable].
         *
         * This function can be used to emit the [signal`Text:`:activate] signal inside
         * a [signal`Actor:`:captured-event] or [signal`Actor:`:key-press-event]
         * signal handlers before the default signal handler for the
         * #ClutterText is invoked.
         *
         * @returns %TRUE if the [signal`Text:`:activate] signal has been emitted,
         *   and %FALSE otherwise
         */
        activate(): boolean;
        /**
         * Retrieves the position of the character at the given coordinates.
         *
         * @returns the position of the character
         * @param x the X coordinate, relative to the actor
         * @param y the Y coordinate, relative to the actor
         */
        coords_to_position(x: number, y: number): number;
        /**
         * Deletes `n_chars` inside a #ClutterText actor, starting from the
         * current cursor position.
         *
         * Somewhat awkwardly, the cursor position is decremented by the same
         * number of characters you've deleted.
         *
         * @param n_chars the number of characters to delete
         */
        delete_chars(n_chars: number): void;
        /**
         * Deletes the currently selected text
         *
         * This function is only useful in subclasses of #ClutterText
         *
         * @returns %TRUE if text was deleted or if the text actor
         *   is empty, and %FALSE otherwise
         */
        delete_selection(): boolean;
        /**
         * Deletes the text inside a #ClutterText actor between `start_pos`
         * and `end_pos`.
         *
         * The starting and ending positions are expressed in characters,
         * not in bytes.
         *
         * @param start_pos starting position
         * @param end_pos ending position
         */
        delete_text(start_pos: number, end_pos: number): void;
        /**
         * Retrieves whether a #ClutterText is activatable or not.
         *
         * @returns %TRUE if the actor is activatable
         */
        get_activatable(): boolean;
        /**
         * Gets the attribute list that was set on the #ClutterText actor
         * [method`Text`.set_attributes], if any.
         *
         * @returns the attribute list, or %NULL if none was set. The
         *  returned value is owned by the #ClutterText and should not be unreferenced.
         */
        get_attributes(): Pango.AttrList;
        /**
         * Get the #ClutterTextBuffer object which holds the text for
         * this widget.
         *
         * @returns A #GtkEntryBuffer object.
         */
        get_buffer(): Clutter.TextBuffer;
        /**
         * Retrieves the contents of the #ClutterText actor between
         * `start_pos` and `end_pos,` but not including `end_pos`.
         *
         * The positions are specified in characters, not in bytes.
         *
         * @returns a newly allocated string with the contents of
         *   the text actor between the specified positions. Use [func`GLib`.free]
         *   to free the resources when done
         * @param start_pos start of text, in characters
         * @param end_pos end of text, in characters
         */
        get_chars(start_pos: number, end_pos: number): string;
        /**
         * Retrieves the text color as set by [method`Text`.set_color].
         */
        get_color(): [Cogl.Color];
        /**
         * Retrieves the color of the cursor of a #ClutterText actor.
         */
        get_cursor_color(): [Cogl.Color];
        /**
         * Retrieves the cursor position.
         *
         * @returns the cursor position, in characters
         */
        get_cursor_position(): number;
        /**
         * Retrieves the rectangle that contains the cursor.
         *
         * The coordinates of the rectangle's origin are in actor-relative
         * coordinates.
         */
        get_cursor_rect(): [Graphene.Rect];
        /**
         * Retrieves the size of the cursor of a #ClutterText actor.
         *
         * @returns the size of the cursor, in pixels
         */
        get_cursor_size(): number;
        /**
         * Retrieves whether the cursor of a #ClutterText actor is visible.
         *
         * @returns %TRUE if the cursor is visible
         */
        get_cursor_visible(): boolean;
        /**
         * Retrieves whether a #ClutterText is editable or not.
         *
         * @returns %TRUE if the actor is editable
         */
        get_editable(): boolean;
        /**
         * Returns the ellipsizing position of a #ClutterText actor, as
         * set by [method`Text`.set_ellipsize].
         *
         * @returns #PangoEllipsizeMode
         */
        get_ellipsize(): Pango.EllipsizeMode;
        /**
         * Retrieves the [struct`Pango`.FontDescription] used by `self`
         *
         * @returns a #PangoFontDescription. The returned value is owned
         *   by the #ClutterText actor and it should not be modified or freed
         */
        get_font_description(): Pango.FontDescription;
        /**
         * Retrieves the font name as set by [method`Text`.set_font_name].
         *
         * @returns a string containing the font name. The returned
         *   string is owned by the #ClutterText actor and should not be
         *   modified or freed
         */
        get_font_name(): string;
        get_input_hints(): Clutter.InputContentHintFlags;
        get_input_purpose(): Clutter.InputContentPurpose;
        /**
         * Retrieves whether the #ClutterText actor should justify its contents
         * on both margins.
         *
         * @returns %TRUE if the text should be justified
         */
        get_justify(): boolean;
        /**
         * Retrieves the current #PangoLayout used by a #ClutterText actor.
         *
         * @returns a #PangoLayout. The returned object is owned by
         *   the #ClutterText actor and should not be modified or freed
         */
        get_layout(): Pango.Layout;
        /**
         * Obtains the coordinates where the #ClutterText will draw the [class`Pango`.Layout]
         * representing the text.
         */
        get_layout_offsets(): [number, number];
        /**
         * Retrieves the alignment of a #ClutterText, as set by
         * [method`Text`.set_line_alignment].
         *
         * @returns a [enum`Pango`.Alignment]
         */
        get_line_alignment(): Pango.Alignment;
        /**
         * Retrieves the value set using [method`Text`.set_line_wrap].
         *
         * @returns %TRUE if the #ClutterText actor should wrap
         *   its contents
         */
        get_line_wrap(): boolean;
        /**
         * Retrieves the line wrap mode used by the #ClutterText actor.
         *
         * See [method`Text`.set_line_wrap_mode].
         *
         * @returns the wrap mode used by the #ClutterText
         */
        get_line_wrap_mode(): Pango.WrapMode;
        /**
         * Gets the maximum length of text that can be set into a text actor.
         *
         * See [method`Text`.set_max_length].
         *
         * @returns the maximum number of characters.
         */
        get_max_length(): number;
        /**
         * Retrieves the character to use in place of the actual text
         * as set by [method`Text`.set_password_char].
         *
         * @returns a Unicode character or 0 if the password
         *   character is not set
         */
        get_password_char(): string;
        /**
         * Retrieves whether a #ClutterText is selectable or not.
         *
         * @returns %TRUE if the actor is selectable
         */
        get_selectable(): boolean;
        /**
         * Retrieves the color of selected text of a #ClutterText actor.
         */
        get_selected_text_color(): [Cogl.Color];
        /**
         * Retrieves the currently selected text.
         *
         * @returns a newly allocated string containing the currently
         *   selected text, or %NULL. Use [func`GLib`.free] to free the returned
         *   string.
         */
        get_selection(): string;
        /**
         * Retrieves the other end of the selection of a #ClutterText actor,
         * in characters from the current cursor position.
         *
         * @returns the position of the other end of the selection
         */
        get_selection_bound(): number;
        /**
         * Retrieves the color of the selection of a #ClutterText actor.
         */
        get_selection_color(): [Cogl.Color];
        /**
         * Retrieves whether the #ClutterText actor is in single line mode.
         *
         * @returns %TRUE if the #ClutterText actor is in single line mode
         */
        get_single_line_mode(): boolean;
        /**
         * Retrieves a pointer to the current contents of a #ClutterText
         * actor.
         *
         * If you need a copy of the contents for manipulating, either
         * use [func`GLib`.strdup] on the returned string, or use:
         *
         * ```c
         *    copy = clutter_text_get_chars (text, 0, -1);
         * ```
         *
         * Which will return a newly allocated string.
         *
         * If the #ClutterText actor is empty, this function will return
         * an empty string, and not %NULL.
         *
         * @returns the contents of the actor. The returned
         *   string is owned by the #ClutterText actor and should never be modified
         *   or freed
         */
        get_text(): string;
        /**
         * Retrieves whether the contents of the #ClutterText actor should be
         * parsed for the Pango text markup.
         *
         * @returns %TRUE if the contents will be parsed for markup
         */
        get_use_markup(): boolean;
        has_preedit(): boolean;
        /**
         * Inserts `text` into a [class`Actor]` at the given position.
         *
         * If `position` is a negative number, the text will be appended
         * at the end of the current contents of the #ClutterText.
         *
         * The position is expressed in characters, not in bytes.
         *
         * @param text the text to be inserted
         * @param position the position of the insertion, or -1
         */
        insert_text(text: string, position: number): void;
        /**
         * Inserts `wc` at the current cursor position of a
         * #ClutterText actor.
         *
         * @param wc a Unicode character
         */
        insert_unichar(wc: string): void;
        /**
         * Retrieves the coordinates of the given `position`.
         *
         * @returns %TRUE if the conversion was successful
         * @param position position in characters
         */
        position_to_coords(position: number): [boolean, number, number, number];
        /**
         * Sets whether a #ClutterText actor should be activatable.
         *
         * An activatable #ClutterText actor will emit the [signal`Text:`:activate]
         * signal whenever the 'Enter' (or 'Return') key is pressed; if it is not
         * activatable, a new line will be appended to the current content.
         *
         * An activatable #ClutterText must also be set as editable using
         * [method`Text`.set_editable].
         *
         * @param activatable whether the #ClutterText actor should be activatable
         */
        set_activatable(activatable: boolean): void;
        /**
         * Sets the attributes list that are going to be applied to the
         * #ClutterText contents.
         *
         * The #ClutterText actor will take a reference on the [struct`Pango`.AttrList]
         * passed to this function.
         *
         * @param attrs a #PangoAttrList or %NULL to unset the attributes
         */
        set_attributes(attrs?: Pango.AttrList | null): void;
        /**
         * Set the [class`TextBuffer]` object which holds the text for
         * this widget.
         *
         * @param buffer a #ClutterTextBuffer
         */
        set_buffer(buffer: Clutter.TextBuffer): void;
        /**
         * Sets the color of the contents of a #ClutterText actor.
         *
         * The overall opacity of the #ClutterText actor will be the
         * result of the alpha value of `color` and the composited
         * opacity of the actor itself on the scenegraph, as returned
         * by [method`Actor`.get_paint_opacity].
         *
         * @param color a #CoglColor
         */
        set_color(color: Cogl.Color): void;
        /**
         * Sets the color of the cursor of a #ClutterText actor.
         *
         * If `color` is %NULL, the cursor color will be the same as the
         * text color.
         *
         * @param color the color of the cursor, or %NULL to unset it
         */
        set_cursor_color(color?: Cogl.Color | null): void;
        /**
         * Sets the cursor of a #ClutterText actor at `position`.
         *
         * The position is expressed in characters, not in bytes.
         *
         * @param position the new cursor position, in characters
         */
        set_cursor_position(position: number): void;
        /**
         * Sets the size of the cursor of a #ClutterText. The cursor
         * will only be visible if the [property`Text:`cursor-visible] property
         * is set to %TRUE.
         *
         * @param size the size of the cursor, in pixels, or -1 to use the
         *   default value
         */
        set_cursor_size(size: number): void;
        /**
         * Sets whether the cursor of a #ClutterText actor should be
         * visible or not.
         *
         * The color of the cursor will be the same as the text color
         * unless [method`Text`.set_cursor_color] has been called.
         *
         * The size of the cursor can be set using [method`Text`.set_cursor_size].
         *
         * The position of the cursor can be changed programmatically using
         * [method`Text`.set_cursor_position].
         *
         * @param cursor_visible whether the cursor should be visible
         */
        set_cursor_visible(cursor_visible: boolean): void;
        /**
         * Sets whether the #ClutterText actor should be editable.
         *
         * An editable #ClutterText with key focus set using
         * [method`Actor`.grab_key_focus] or [method`Stage`.set_key_focus]
         * will receive key events and will update its contents accordingly.
         *
         * @param editable whether the #ClutterText should be editable
         */
        set_editable(editable: boolean): void;
        /**
         * Sets the mode used to ellipsize (add an ellipsis: "...") to the
         * text if there is not enough space to render the entire contents
         * of a #ClutterText actor
         *
         * @param mode a #PangoEllipsizeMode
         */
        set_ellipsize(mode: Pango.EllipsizeMode | null): void;
        /**
         * Sets `font_desc` as the font description for a #ClutterText
         *
         * The #PangoFontDescription is copied by the #ClutterText actor
         * so you can safely call [method`Pango`.FontDescription.free] on it after
         * calling this function.
         *
         * @param font_desc a #PangoFontDescription
         */
        set_font_description(font_desc: Pango.FontDescription): void;
        /**
         * Sets the font used by a #ClutterText. The `font_name` string
         * must either be %NULL, which means that the font name from the
         * default [class`Backend]` will be used; or be something that can
         * be parsed by the [func`Pango`.FontDescription.from_string] function,
         * like:
         *
         * ```c
         *   // Set the font to the system's Sans, 10 points
         *   clutter_text_set_font_name (text, "Sans 10");
         *
         *   // Set the font to the system's Serif, 16 pixels
         *   clutter_text_set_font_name (text, "Serif 16px");
         *
         *   // Set the font to Helvetica, 10 points
         *   clutter_text_set_font_name (text, "Helvetica 10");
         * ```
         *
         * @param font_name a font name, or %NULL to set the default font name
         */
        set_font_name(font_name?: string | null): void;
        set_input_hints(hints: Clutter.InputContentHintFlags | null): void;
        set_input_purpose(purpose: Clutter.InputContentPurpose | null): void;
        /**
         * Sets whether the text of the #ClutterText actor should be justified
         * on both margins. This setting is ignored if Clutter is compiled
         * against Pango &lt; 1.18.
         *
         * @param justify whether the text should be justified
         */
        set_justify(justify: boolean): void;
        /**
         * Sets the way that the lines of a wrapped label are aligned with
         * respect to each other. This does not affect the overall alignment
         * of the label within its allocated or specified width.
         *
         * To align a #ClutterText actor you should add it to a container
         * that supports alignment, or use the anchor point.
         *
         * @param alignment A #PangoAlignment
         */
        set_line_alignment(alignment: Pango.Alignment | null): void;
        /**
         * Sets whether the contents of a #ClutterText actor should wrap,
         * if they don't fit the size assigned to the actor.
         *
         * @param line_wrap whether the contents should wrap
         */
        set_line_wrap(line_wrap: boolean): void;
        /**
         * If line wrapping is enabled (see [method`Text`.set_line_wrap]) this
         * function controls how the line wrapping is performed. The default is
         * %PANGO_WRAP_WORD which means wrap on word boundaries.
         *
         * @param wrap_mode the line wrapping mode
         */
        set_line_wrap_mode(wrap_mode: Pango.WrapMode | null): void;
        /**
         * Sets `markup` as the contents of a #ClutterText.
         *
         * This is a convenience function for setting a string containing
         * Pango markup, and it is logically equivalent to:
         *
         * ```c
         *   /&ast; the order is important &ast;/
         *   clutter_text_set_text (CLUTTER_TEXT (actor), markup);
         *   clutter_text_set_use_markup (CLUTTER_TEXT (actor), TRUE);
         * ```
         *
         * @param markup a string containing Pango markup.
         *   Passing %NULL is the same as passing "" (the empty string)
         */
        set_markup(markup?: string | null): void;
        /**
         * Sets the maximum allowed length of the contents of the actor. If the
         * current contents are longer than the given length, then they will be
         * truncated to fit.
         *
         * @param max the maximum number of characters allowed in the text actor; 0
         *   to disable or -1 to set the length of the current string
         */
        set_max_length(max: number): void;
        /**
         * Sets the character to use in place of the actual text in a
         * password text actor.
         *
         * If `wc` is 0 the text will be displayed as it is entered in the
         * #ClutterText actor.
         *
         * @param wc a Unicode character, or 0 to unset the password character
         */
        set_password_char(wc: string): void;
        /**
         * Sets, or unsets, the pre-edit string. This function is useful
         * for input methods to display a string (with eventual specific
         * Pango attributes) before it is entered inside the #ClutterText
         * buffer.
         *
         * The preedit string and attributes are ignored if the #ClutterText
         * actor is not editable.
         *
         * This function should not be used by applications
         *
         * @param preedit_str the pre-edit string, or %NULL to unset it
         * @param preedit_attrs the pre-edit string attributes
         * @param cursor_pos the cursor position for the pre-edit string
         */
        set_preedit_string(preedit_str: string | null, preedit_attrs: Pango.AttrList | null, cursor_pos: number): void;
        /**
         * Sets whether a #ClutterText actor should be selectable.
         *
         * A selectable #ClutterText will allow selecting its contents using
         * the pointer or the keyboard.
         *
         * @param selectable whether the #ClutterText actor should be selectable
         */
        set_selectable(selectable: boolean): void;
        /**
         * Sets the selected text color of a #ClutterText actor.
         *
         * If `color` is %NULL, the selected text color will be the same as the
         * selection color, which then falls back to cursor, and then text color.
         *
         * @param color the selected text color, or %NULL to unset it
         */
        set_selected_text_color(color?: Cogl.Color | null): void;
        /**
         * Selects the region of text between `start_pos` and `end_pos`.
         *
         * This function changes the position of the cursor to match
         * `start_pos` and the selection bound to match `end_pos`.
         *
         * @param start_pos start of the selection, in characters
         * @param end_pos end of the selection, in characters
         */
        set_selection(start_pos: number, end_pos: number): void;
        /**
         * Sets the other end of the selection, starting from the current
         * cursor position.
         *
         * If `selection_bound` is -1, the selection unset.
         *
         * @param selection_bound the position of the end of the selection, in characters
         */
        set_selection_bound(selection_bound: number): void;
        /**
         * Sets the color of the selection of a #ClutterText actor.
         *
         * If `color` is %NULL, the selection color will be the same as the
         * cursor color, or if no cursor color is set either then it will be
         * the same as the text color.
         *
         * @param color the color of the selection, or %NULL to unset it
         */
        set_selection_color(color?: Cogl.Color | null): void;
        /**
         * Sets whether a #ClutterText actor should be in single line mode
         * or not. Only editable `ClutterText`s can be in single line
         * mode.
         *
         * A text actor in single line mode will not wrap text and will clip
         * the visible area to the predefined size. The contents of the
         * text actor will scroll to display the end of the text if its length
         * is bigger than the allocated width.
         *
         * When setting the single line mode the [property`Text:`activatable]
         * property is also set as a side effect. Instead of entering a new
         * line character, the text actor will emit the [signal`Text:`:activate]
         * signal.
         *
         * @param single_line whether to enable single line mode
         */
        set_single_line_mode(single_line: boolean): void;
        /**
         * Sets the contents of a #ClutterText actor.
         *
         * If the [property`Text:`use-markup] property was set to %TRUE it
         * will be reset to %FALSE as a side effect. If you want to
         * maintain the [property`Text:`use-markup] you should use the
         * [method`Text`.set_markup] function instead
         *
         * @param text the text to set. Passing %NULL is the same
         *   as passing "" (the empty string)
         */
        set_text(text?: string | null): void;
        /**
         * Sets whether the contents of the #ClutterText actor contains markup
         * in [Pango's text markup language](https://docs.gtk.org/Pango/pango_markup.html#pango-markup).
         *
         * Setting [property`Text:`use-markup] on an editable #ClutterText will
         * not have any effect except hiding the markup.
         *
         * See also [property`Text:`use-markup].
         *
         * @param setting %TRUE if the text should be parsed for markup.
         */
        set_use_markup(setting: boolean): void;
        // Inherited methods
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
        get_actor(): Clutter.Actor;
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
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         *
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         *
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Clutter.Actor;
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
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         *
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function
         *     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from the transformation function
         *     from the `target` to the `source,` or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free
         *     resources used by the transformation functions, or %NULL if not required
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         *
         * @returns the data if found,
         *          or %NULL if no such data exists.
         * @param key name of the key for that association
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         *
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         *
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         *
         * @returns %TRUE if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         *
         * @param pspec the #GParamSpec of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         *
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         *
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         *
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         *
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         *
         * @returns the data if found, or %NULL
         *          if no such data exists.
         * @param key name of the key
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         *
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         *
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         *
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         *
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         *
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         *
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         *
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }
    class TextBuffer extends GObjectClasses.Object {
        static '$gtype': GObject.GType<TextBuffer>;
        // Properties
        /**
         * The length (in characters) of the text in buffer.
         */
        get length(): number;
        /**
         * The maximum length (in characters) of the text in the buffer.
         */
        get max_length(): number;
        set max_length(val: number);
        /**
         * The maximum length (in characters) of the text in the buffer.
         */
        get maxLength(): number;
        set maxLength(val: number);
        /**
         * The contents of the buffer.
         */
        get text(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.TextBuffer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.TextBuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.TextBuffer;
        static new_with_text(text: string | null, text_len: number): Clutter.TextBuffer;
        // Signals
        connect<K extends keyof Clutter.TextBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TextBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.TextBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TextBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.TextBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.TextBuffer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Deletes a sequence of characters from the buffer. `n_chars` characters are
         * deleted starting at `position`. If `n_chars` is negative, then all characters
         * until the end of the text are deleted.
         *
         * If `position` or `n_chars` are out of bounds, then they are coerced to sane
         * values.
         *
         * Note that the positions are specified in characters, not bytes.
         *
         * @param position position at which to delete text
         * @param n_chars number of characters to delete
         */
        vfunc_delete_text(position: number, n_chars: number): number;
        /**
         * default handler for the #ClutterTextBuffer::deleted-text signal
         *
         * @param position
         * @param n_chars
         */
        vfunc_deleted_text(position: number, n_chars: number): void;
        /**
         * Retrieves the length in characters of the buffer.
         */
        vfunc_get_length(): number;
        /**
         * virtual function
         *
         * @param n_bytes
         */
        vfunc_get_text(n_bytes: number): string;
        /**
         * Inserts `n_chars` characters of `chars` into the contents of the
         * buffer, at position `position`.
         *
         * If `n_chars` is negative, then characters from chars will be inserted
         * until a null-terminator is found. If `position` or `n_chars` are out of
         * bounds, or the maximum buffer text length is exceeded, then they are
         * coerced to sane values.
         *
         * Note that the position and length are in characters, not in bytes.
         *
         * @param position the position at which to insert text.
         * @param chars the text to insert into the buffer.
         * @param n_chars the length of the text in characters, or -1
         */
        vfunc_insert_text(position: number, chars: string, n_chars: number): number;
        /**
         * default handler for the #ClutterTextBuffer::inserted-text signal
         *
         * @param position
         * @param chars
         * @param n_chars
         */
        vfunc_inserted_text(position: number, chars: string, n_chars: number): void;
        // Methods
        /**
         * Deletes a sequence of characters from the buffer. `n_chars` characters are
         * deleted starting at `position`. If `n_chars` is negative, then all characters
         * until the end of the text are deleted.
         *
         * If `position` or `n_chars` are out of bounds, then they are coerced to sane
         * values.
         *
         * Note that the positions are specified in characters, not bytes.
         *
         * @returns The number of characters deleted.
         * @param position position at which to delete text
         * @param n_chars number of characters to delete
         */
        delete_text(position: number, n_chars: number): number;
        /**
         * Emits the [signal`TextBuffer:`:deleted-text] signal on `buffer`.
         *
         * Used when subclassing #ClutterTextBuffer
         *
         * @param position position at which text was deleted
         * @param n_chars number of characters deleted
         */
        emit_deleted_text(position: number, n_chars: number): void;
        /**
         * Emits the [signal`TextBuffer:`:inserted-text] signal on `buffer`.
         *
         * Used when subclassing #ClutterTextBuffer
         *
         * @param position position at which text was inserted
         * @param chars text that was inserted
         * @param n_chars number of characters inserted
         */
        emit_inserted_text(position: number, chars: string, n_chars: number): void;
        /**
         * Retrieves the length in bytes of the buffer.
         * See [method`TextBuffer`.get_length].
         *
         * @returns The byte length of the buffer.
         */
        get_bytes(): number;
        /**
         * Retrieves the length in characters of the buffer.
         *
         * @returns The number of characters in the buffer.
         */
        get_length(): number;
        /**
         * Retrieves the maximum allowed length of the text in
         * `buffer`. See [method`TextBuffer`.set_max_length].
         *
         * @returns the maximum allowed number of characters
         *               in #ClutterTextBuffer, or 0 if there is no maximum.
         */
        get_max_length(): number;
        /**
         * Retrieves the contents of the buffer.
         *
         * The memory pointer returned by this call will not change
         * unless this object emits a signal, or is finalized.
         *
         * @returns a pointer to the contents of the widget as a
         *      string. This string points to internally allocated
         *      storage in the buffer and must not be freed, modified or
         *      stored.
         */
        get_text(): string;
        /**
         * Inserts `n_chars` characters of `chars` into the contents of the
         * buffer, at position `position`.
         *
         * If `n_chars` is negative, then characters from chars will be inserted
         * until a null-terminator is found. If `position` or `n_chars` are out of
         * bounds, or the maximum buffer text length is exceeded, then they are
         * coerced to sane values.
         *
         * Note that the position and length are in characters, not in bytes.
         *
         * @returns The number of characters actually inserted.
         * @param position the position at which to insert text.
         * @param chars the text to insert into the buffer.
         * @param n_chars the length of the text in characters, or -1
         */
        insert_text(position: number, chars: string, n_chars: number): number;
        /**
         * Sets the maximum allowed length of the contents of the buffer.
         *
         * If the current contents are longer than the given length,
         * then they will be truncated to fit.
         *
         * @param max_length the maximum length of the entry buffer, or 0 for no maximum.
         *   (other than the maximum length of entries.) The value passed in will
         *   be clamped to the range [ 0, %CLUTTER_TEXT_BUFFER_MAX_SIZE ].
         */
        set_max_length(max_length: number): void;
        /**
         * Sets the text in the buffer.
         *
         * This is roughly equivalent to calling [method`TextBuffer`.delete_text]
         * and [method`TextBuffer`.insert_text].
         *
         * Note that `n_chars` is in characters, not in bytes.
         *
         * @param chars the new text
         * @param n_chars the number of characters in `text,` or -1
         */
        set_text(chars: string, n_chars: number): void;
    }
    class TextureContent extends GObjectClasses.Object implements Clutter.Content {
        static '$gtype': GObject.GType<TextureContent>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.TextureContent.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.TextureContent.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.TextureContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TextureContent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.TextureContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TextureContent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.TextureContent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.TextureContent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Creates a new [class`TextureContent]` instance for `texture,` taking an
         * internal reference to `texture`.
         *
         * If you change the contents of the [class`Cogl`.Texture] you will need
         * to manually invalidate the `texture_content` with [method`Content`.invalidate]
         * in order to update the actors using `texture_content` as their content.
         *
         * @param texture a #CoglTexture
         * @param clip A clipping rectangle
         */
        static new_from_texture(texture: Cogl.Texture, clip?: Mtk.Rectangle | null): Clutter.Content;
        // Methods
        /**
         * Retrieves a pointer to the [class`Cogl`.Texture] used by `texture_content`.
         *
         * If you change the contents of the returned [class`Cogl`.Texture] you will need
         * to manually invalidate the `texture_content` with [method`Content`.invalidate]
         * in order to update the actors using `texture_content` as their content.
         *
         * @returns a pointer to the [class`Cogl`.Texture]
         */
        get_texture(): Cogl.Texture;
        // Inherited methods
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
        /**
         * virtual function; called each time a #ClutterContent is attached
         *   to a #ClutterActor.
         *
         * @param actor
         */
        vfunc_attached(actor: Clutter.Actor): void;
        /**
         * virtual function; called each time a #ClutterContent is detached
         *   from a #ClutterActor.
         *
         * @param actor
         */
        vfunc_detached(actor: Clutter.Actor): void;
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
        vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function
         *     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from the transformation function
         *     from the `target` to the `source,` or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free
         *     resources used by the transformation functions, or %NULL if not required
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         *
         * @returns the data if found,
         *          or %NULL if no such data exists.
         * @param key name of the key for that association
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         *
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         *
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         *
         * @returns %TRUE if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         *
         * @param pspec the #GParamSpec of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         *
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         *
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         *
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         *
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         *
         * @returns the data if found, or %NULL
         *          if no such data exists.
         * @param key name of the key
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         *
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         *
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         *
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         *
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         *
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         *
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         *
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }
    class Timeline extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Timeline>;
        // Properties
        get actor(): Clutter.Actor;
        set actor(val: Clutter.Actor);
        /**
         * If the direction of the timeline should be automatically reversed
         * when reaching the end.
         */
        get auto_reverse(): boolean;
        set auto_reverse(val: boolean);
        /**
         * If the direction of the timeline should be automatically reversed
         * when reaching the end.
         */
        get autoReverse(): boolean;
        set autoReverse(val: boolean);
        /**
         * A delay, in milliseconds, that should be observed by the
         * timeline before actually starting.
         */
        get delay(): number;
        set delay(val: number);
        /**
         * The direction of the timeline, either %CLUTTER_TIMELINE_FORWARD or
         * %CLUTTER_TIMELINE_BACKWARD.
         */
        get direction(): Clutter.TimelineDirection;
        set direction(val: Clutter.TimelineDirection);
        /**
         * Duration of the timeline in milliseconds, depending on the
         * [property`Timeline:`frame-clock] value.
         */
        get duration(): number;
        set duration(val: number);
        /**
         * The frame clock driving the timeline.
         */
        get frame_clock(): Clutter.FrameClock;
        set frame_clock(val: Clutter.FrameClock);
        /**
         * The frame clock driving the timeline.
         */
        get frameClock(): Clutter.FrameClock;
        set frameClock(val: Clutter.FrameClock);
        /**
         * Controls the way a #ClutterTimeline computes the normalized progress.
         */
        get progress_mode(): Clutter.AnimationMode;
        set progress_mode(val: Clutter.AnimationMode);
        /**
         * Controls the way a #ClutterTimeline computes the normalized progress.
         */
        get progressMode(): Clutter.AnimationMode;
        set progressMode(val: Clutter.AnimationMode);
        /**
         * Defines how many times the timeline should repeat.
         *
         * If the repeat count is 0, the timeline does not repeat.
         *
         * If the repeat count is set to -1, the timeline will repeat until it is
         * stopped.
         */
        get repeat_count(): number;
        set repeat_count(val: number);
        /**
         * Defines how many times the timeline should repeat.
         *
         * If the repeat count is 0, the timeline does not repeat.
         *
         * If the repeat count is set to -1, the timeline will repeat until it is
         * stopped.
         */
        get repeatCount(): number;
        set repeatCount(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Timeline.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Timeline.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_for_actor(actor: Clutter.Actor, duration_ms: number): Clutter.Timeline;
        static new_for_frame_clock(frame_clock: Clutter.FrameClock, duration_ms: number): Clutter.Timeline;
        // Signals
        connect<K extends keyof Clutter.Timeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Timeline.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Timeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Timeline.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Timeline.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Timeline.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * class handler for the #ClutterTimeline::completed signal
         */
        vfunc_completed(): void;
        /**
         * class handler for the #ClutterTimeline::marker-reached signal
         *
         * @param marker_name
         * @param msecs
         */
        vfunc_marker_reached(marker_name: string, msecs: number): void;
        /**
         * class handler for the #ClutterTimeline::new-frame signal
         *
         * @param msecs
         */
        vfunc_new_frame(msecs: number): void;
        /**
         * class handler for the #ClutterTimeline::paused signal
         */
        vfunc_paused(): void;
        /**
         * class handler for the #ClutterTimeline::started signal
         */
        vfunc_started(): void;
        /**
         * class handler for the #ClutterTimeline::stopped signal
         *
         * @param is_finished
         */
        vfunc_stopped(is_finished: boolean): void;
        // Methods
        /**
         * Adds a named marker that will be hit when the timeline has reached
         * the specified `progress`.
         *
         * Markers are unique string identifiers for a given position on the
         * timeline. Once `timeline` reaches the given `progress` of its duration,
         * if will emit a [signal`Timeline:`:marker-reached] signal for each marker
         * attached to that particular point.
         *
         * A marker can be removed with [method`Timeline`.remove_marker]. The
         * timeline can be advanced to a marker using
         * [method`Timeline`.advance_to_marker].
         *
         * See also: [method`Timeline`.add_marker_at_time]
         *
         * @param marker_name the unique name for this marker
         * @param progress the normalized value of the position of the martke
         */
        add_marker(marker_name: string, progress: number): void;
        /**
         * Adds a named marker that will be hit when the timeline has been
         * running for `msecs` milliseconds.
         *
         * Markers are unique string identifiers for a given position on the
         * timeline. Once `timeline` reaches the given `msecs,` it will emit
         * a [signal`Timeline:`:marker-reached] signal for each marker attached to that position.
         *
         * A marker can be removed with [method`Timeline`.remove_marker]. The
         * timeline can be advanced to a marker using
         * [method`Timeline`.advance_to_marker].
         *
         * See also: [method`Timeline`.add_marker]
         *
         * @param marker_name the unique name for this marker
         * @param msecs position of the marker in milliseconds
         */
        add_marker_at_time(marker_name: string, msecs: number): void;
        /**
         * Advance timeline to the requested point. The point is given as a
         * time in milliseconds since the timeline started.
         *
         * The `timeline` will not emit the [signal`Timeline:`:new-frame]
         * signal for the given time. The first [signal`Timeline:`:new-frame] signal
         * after the call to [method`Timeline`.advance] will be emit the skipped markers.
         *
         * @param msecs Time to advance to
         */
        advance(msecs: number): void;
        /**
         * Advances `timeline` to the time of the given `marker_name`.
         *
         * Like [method`Timeline`.advance], this function will not
         * emit the [signal`Timeline:`:new-frame] for the time where `marker_name`
         * is set, nor it will emit [signal`Timeline:`:marker-reached] for
         * `marker_name`.
         *
         * @param marker_name the name of the marker
         */
        advance_to_marker(marker_name: string): void;
        /**
         * Get the actor the timeline is associated with.
         *
         * @returns the associated #ClutterActor
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the value set by [method`Timeline`.set_auto_reverse].
         *
         * @returns %TRUE if the timeline should automatically reverse, and
         *   %FALSE otherwise
         */
        get_auto_reverse(): boolean;
        /**
         * Retrieves the control points for the cubic bezier progress mode.
         *
         * @returns %TRUE if the `timeline` is using a cubic bezier progress
         *   more, and %FALSE otherwise
         */
        get_cubic_bezier_progress(): [boolean, Graphene.Point, Graphene.Point];
        /**
         * Retrieves the current repeat for a timeline.
         *
         * Repeats start at 0.
         *
         * @returns the current repeat
         */
        get_current_repeat(): number;
        /**
         * Retrieves the delay set using [method`Timeline`.set_delay].
         *
         * @returns the delay in milliseconds.
         */
        get_delay(): number;
        /**
         * Retrieves the amount of time elapsed since the last
         * [signal`Timeline:`:new-frame] signal.
         *
         * This function is only useful inside handlers for the ::new-frame
         * signal, and its behaviour is undefined if the timeline is not
         * playing.
         *
         * @returns the amount of time in milliseconds elapsed since the
         * last frame
         */
        get_delta(): number;
        /**
         * Retrieves the direction of the timeline set with
         * [method`Timeline`.set_direction].
         *
         * @returns the direction of the timeline
         */
        get_direction(): Clutter.TimelineDirection;
        /**
         * Retrieves the duration of a #ClutterTimeline in milliseconds.
         * See [method`Timeline`.set_duration].
         *
         * @returns the duration of the timeline, in milliseconds.
         */
        get_duration(): number;
        /**
         * Retrieves the full duration of the `timeline,` taking into account the
         * current value of the [property`Timeline:`repeat-count] property.
         *
         * If the [property`Timeline:`repeat-count] property is set to -1, this function
         * will return %G_MAXINT64.
         *
         * The returned value is to be considered a hint, and it's only valid
         * as long as the `timeline` hasn't been changed.
         *
         * @returns the full duration of the #ClutterTimeline
         */
        get_duration_hint(): number;
        /**
         * Request the current time position of the timeline.
         *
         * @returns current elapsed time in milliseconds.
         */
        get_elapsed_time(): number;
        /**
         * The position of the timeline in a normalized [-1, 2] interval.
         *
         * The return value of this function is determined by the progress
         * mode set using [method`Timeline`.set_progress_mode], or by the
         * progress function set using [method`Timeline`.set_progress_func].
         *
         * @returns the normalized current position in the timeline.
         */
        get_progress(): number;
        /**
         * Retrieves the progress mode set using [method`Timeline`.set_progress_mode]
         * or [method`Timeline`.set_progress_func].
         *
         * @returns a #ClutterAnimationMode
         */
        get_progress_mode(): Clutter.AnimationMode;
        /**
         * Retrieves the number set using [method`Timeline`.set_repeat_count].
         *
         * @returns the number of repeats
         */
        get_repeat_count(): number;
        /**
         * Retrieves the parameters of the step progress mode used by `timeline`.
         *
         * @returns %TRUE if the `timeline` is using a step progress
         *   mode, and %FALSE otherwise
         */
        get_step_progress(): [boolean, number, Clutter.StepMode];
        /**
         * Checks whether `timeline` has a marker set with the given name.
         *
         * @returns %TRUE if the marker was found
         * @param marker_name the name of the marker
         */
        has_marker(marker_name: string): boolean;
        /**
         * Queries state of a #ClutterTimeline.
         *
         * @returns %TRUE if timeline is currently playing
         */
        is_playing(): boolean;
        /**
         * Retrieves the list of markers at time `msecs`. If `msecs` is a
         * negative integer, all the markers attached to `timeline` will be
         * returned.
         *
         * @returns a newly allocated, %NULL terminated string array containing the names
         *   of the markers. Use [func`GLib`.strfreev] when done.
         * @param msecs the time to check, or -1
         */
        list_markers(msecs: number): string[];
        /**
         * Pauses the #ClutterTimeline on current frame
         */
        pause(): void;
        /**
         * Removes `marker_name,` if found, from `timeline`.
         *
         * @param marker_name the name of the marker to remove
         */
        remove_marker(marker_name: string): void;
        /**
         * Rewinds #ClutterTimeline to the first frame if its direction is
         * %CLUTTER_TIMELINE_FORWARD and the last frame if it is
         * %CLUTTER_TIMELINE_BACKWARD.
         */
        rewind(): void;
        /**
         * Set the actor the timeline is associated with.
         *
         * @param actor a #ClutterActor
         */
        set_actor(actor?: Clutter.Actor | null): void;
        /**
         * Sets whether `timeline` should reverse the direction after the
         * emission of the [signal`Timeline:`:completed] signal.
         *
         * Setting the [property`Timeline:`auto-reverse] property to %TRUE is the
         * equivalent of connecting a callback to the [signal`Timeline:`:completed]
         * signal and changing the direction of the timeline from that callback;
         * for instance, this code:
         *
         * ```c
         * static void
         * reverse_timeline (ClutterTimeline *timeline)
         * {
         *   ClutterTimelineDirection dir = clutter_timeline_get_direction (timeline);
         *
         *   if (dir == CLUTTER_TIMELINE_FORWARD)
         *     dir = CLUTTER_TIMELINE_BACKWARD;
         *   else
         *     dir = CLUTTER_TIMELINE_FORWARD;
         *
         *   clutter_timeline_set_direction (timeline, dir);
         * }
         * ...
         *   timeline = clutter_timeline_new_for_actor (some_actor, 1000);
         *   clutter_timeline_set_repeat_count (timeline, -1);
         *   g_signal_connect (timeline, "completed",
         *                     G_CALLBACK (reverse_timeline),
         *                     NULL);
         * ```
         *
         * can be effectively replaced by:
         *
         * ```c
         *   timeline = clutter_timeline_new_for_actor (some_actor, 1000);
         *   clutter_timeline_set_repeat_count (timeline, -1);
         *   clutter_timeline_set_auto_reverse (timeline);
         * ```
         *
         * @param reverse %TRUE if the `timeline` should reverse the direction
         */
        set_auto_reverse(reverse: boolean): void;
        /**
         * Sets the [property`Timeline:`progress-mode] of `timeline`
         * to %CLUTTER_CUBIC_BEZIER, and sets the two control
         * points for the cubic bezier.
         *
         * The cubic bezier curve is between (0, 0) and (1, 1). The X coordinate
         * of the two control points must be in the [ 0, 1 ] range, while the
         * Y coordinate of the two control points can exceed this range.
         *
         * @param _c_1 the first control point for the cubic bezier
         * @param _c_2 the second control point for the cubic bezier
         */
        set_cubic_bezier_progress(_c_1: Graphene.Point, _c_2: Graphene.Point): void;
        /**
         * Sets the delay, in milliseconds, before `timeline` should start.
         *
         * @param msecs delay in milliseconds
         */
        set_delay(msecs: number): void;
        /**
         * Sets the direction of `timeline,` either %CLUTTER_TIMELINE_FORWARD or
         * %CLUTTER_TIMELINE_BACKWARD.
         *
         * @param direction the direction of the timeline
         */
        set_direction(direction: Clutter.TimelineDirection | null): void;
        /**
         * Sets the duration of the timeline, in milliseconds. The speed
         * of the timeline depends on the [property`Timeline:`frame-clock] setting.
         *
         * @param msecs duration of the timeline in milliseconds
         */
        set_duration(msecs: number): void;
        set_frame_clock(frame_clock: Clutter.FrameClock): void;
        /**
         * Sets a custom progress function for `timeline`. The progress function will
         * be called by [method`Timeline`.get_progress] and will be used to compute
         * the progress value based on the elapsed time and the total duration of the
         * timeline.
         *
         * If `func` is not %NULL, the [property`Timeline:`progress-mode] property will
         * be set to %CLUTTER_CUSTOM_MODE.
         *
         * If `func` is %NULL, any previously set progress function will be unset, and
         * the [property`Timeline:`progress-mode] property will be set to %CLUTTER_LINEAR.
         *
         * @param func a progress function,
         *        or %NULL
         */
        set_progress_func(func?: Clutter.TimelineProgressFunc | null): void;
        /**
         * Sets the progress function using a value from the [enum`AnimationMode]`
         * enumeration. The `mode` cannot be %CLUTTER_CUSTOM_MODE or bigger than
         * %CLUTTER_ANIMATION_LAST.
         *
         * @param mode the progress mode, as a #ClutterAnimationMode
         */
        set_progress_mode(mode: Clutter.AnimationMode | null): void;
        /**
         * Sets the number of times the `timeline` should repeat.
         *
         * If `count` is 0, the timeline never repeats.
         *
         * If `count` is -1, the timeline will always repeat until
         * it's stopped.
         *
         * @param count the number of times the timeline should repeat
         */
        set_repeat_count(count: number): void;
        /**
         * Sets the [property`Timeline:`progress-mode] of the `timeline` to %CLUTTER_STEPS
         * and provides the parameters of the step function.
         *
         * @param n_steps the number of steps
         * @param step_mode whether the change should happen at the start
         *   or at the end of the step
         */
        set_step_progress(n_steps: number, step_mode: Clutter.StepMode | null): void;
        /**
         * Advance timeline by the requested time in milliseconds
         *
         * @param msecs Amount of time to skip
         */
        skip(msecs: number): void;
        /**
         * Starts the #ClutterTimeline playing.
         */
        start(): void;
        /**
         * Stops the #ClutterTimeline and moves to frame 0
         */
        stop(): void;
    }
    abstract class Transition extends Timeline {
        static '$gtype': GObject.GType<Transition>;
        // Properties
        /**
         * The [iface`Animatable]` instance currently being animated.
         */
        get animatable(): Clutter.Animatable;
        set animatable(val: Clutter.Animatable);
        /**
         * The [class`Interval]` used to describe the initial and final states
         * of the transition.
         */
        get interval(): Clutter.Interval;
        set interval(val: Clutter.Interval);
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
        get remove_on_complete(): boolean;
        set remove_on_complete(val: boolean);
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
        get removeOnComplete(): boolean;
        set removeOnComplete(val: boolean);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.Transition.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.Transition.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.Transition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Transition.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.Transition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.Transition.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.Transition.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.Transition.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * virtual function; called when a transition is attached to
         *   a #ClutterAnimatable instance
         *
         * @param animatable
         */
        vfunc_attached(animatable: Clutter.Animatable): void;
        /**
         * virtual function; called each frame to compute and apply
         *   the interpolation of the interval
         *
         * @param animatable
         * @param interval
         * @param progress
         */
        vfunc_compute_value(animatable: Clutter.Animatable, interval: Clutter.Interval, progress: number): void;
        /**
         * virtual function; called when a transition is detached from
         *   a #ClutterAnimatable instance
         *
         * @param animatable
         */
        vfunc_detached(animatable: Clutter.Animatable): void;
        // Methods
        /**
         * Retrieves the [iface`Animatable]` set using [method`Transition`.set_animatable].
         *
         * @returns a [iface`Animatable]`, or %NULL; the returned
         *   animatable is owned by the #ClutterTransition, and it should not be freed
         *   directly.
         */
        get_animatable(): Clutter.Animatable;
        /**
         * Retrieves the interval set using [method`Transition`.set_interval]
         *
         * @returns a [class`Interval]`, or %NULL; the returned
         *   interval is owned by the #ClutterTransition and it should not be freed
         *   directly
         */
        get_interval(): Clutter.Interval;
        /**
         * Retrieves the value of the [property`Transition:`remove-on-complete] property.
         *
         * @returns %TRUE if the `transition` should be detached when complete,
         *   and %FALSE otherwise
         */
        get_remove_on_complete(): boolean;
        /**
         * Sets the [property`Transition:`animatable] property.
         *
         * The `transition` will acquire a reference to the `animatable` instance,
         * and will call the [vfunc`Transition`.attached] virtual function.
         *
         * If an existing [iface`Animatable]` is attached to `transition,` the
         * reference will be released, and the [vfunc`Transition`.detached]
         * virtual function will be called.
         *
         * @param animatable a #ClutterAnimatable, or %NULL
         */
        set_animatable(animatable?: Clutter.Animatable | null): void;
        /**
         * Sets the initial value of the transition.
         *
         * This is a convenience function that will either create the
         * [class`Interval]` used by `transition,` or will update it if
         * the [property`Transition:`interval] is already set.
         *
         * This function will copy the contents of `value,` so it is
         * safe to call [method`GObject`.Value.unset] after it returns.
         *
         * If `transition` already has a [property`Transition:`interval] set,
         * then `value` must hold the same type, or a transformable type,
         * as the interval's [property`Interval:`value-type] property.
         *
         * This function is meant to be used by language bindings.
         *
         * @param value a #GValue with the initial value of the transition
         */
        set_from(value: GObject.Value | any): void;
        /**
         * Sets the [property`Transition:`interval] property using `interval`.
         *
         * The `transition` will acquire a reference on the `interval,` sinking
         * the floating flag on it if necessary.
         *
         * @param interval a #ClutterInterval, or %NULL
         */
        set_interval(interval?: Clutter.Interval | null): void;
        /**
         * Sets whether `transition` should be detached from the [iface`Animatable]`
         * set using [method`Transition`.set_animatable] when the
         * [signal`Timeline:`:completed] signal is emitted.
         *
         * @param remove_complete whether to detach `transition` when complete
         */
        set_remove_on_complete(remove_complete: boolean): void;
        /**
         * Sets the final value of the transition.
         *
         * This is a convenience function that will either create the
         * #ClutterInterval used by `transition,` or will update it if
         * the [property`Transition:`interval] is already set.
         *
         * This function will copy the contents of `value,` so it is
         * safe to call [method`GObject`.Value.unset] after it returns.
         *
         * If `transition` already has a [property`Transition:`interval] set,
         * then `value` must hold the same type, or a transformable type,
         * as the interval's [property`Interval:`value-type] property.
         *
         * This function is meant to be used by language bindings.
         *
         * @param value a #GValue with the final value of the transition
         */
        set_to(value: GObject.Value | any): void;
    }
    class TransitionGroup extends Transition {
        static '$gtype': GObject.GType<TransitionGroup>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.TransitionGroup.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.TransitionGroup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Clutter.TransitionGroup;
        // Signals
        connect<K extends keyof Clutter.TransitionGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TransitionGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.TransitionGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.TransitionGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.TransitionGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.TransitionGroup.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Adds `transition` to `group`.
         *
         * This function acquires a reference on `transition` that will be released
         * when calling [method`TransitionGroup`.remove_transition].
         *
         * @param transition a #ClutterTransition
         */
        add_transition(transition: Clutter.Transition): void;
        /**
         * Removes all transitions from `group`.
         *
         * This function releases the reference acquired when calling
         * [method`TransitionGroup`.add_transition].
         */
        remove_all(): void;
        /**
         * Removes `transition` from `group`.
         *
         * This function releases the reference acquired on `transition` when
         * calling [method`TransitionGroup`.add_transition].
         *
         * @param transition a #ClutterTransition
         */
        remove_transition(transition: Clutter.Transition): void;
    }
    class VirtualInputDevice extends GObjectClasses.Object {
        static '$gtype': GObject.GType<VirtualInputDevice>;
        // Properties
        get device_type(): Clutter.InputDeviceType;
        get deviceType(): Clutter.InputDeviceType;
        get seat(): Clutter.Seat;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Clutter.VirtualInputDevice.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Clutter.VirtualInputDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Clutter.VirtualInputDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.VirtualInputDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Clutter.VirtualInputDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clutter.VirtualInputDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Clutter.VirtualInputDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clutter.VirtualInputDevice.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_notify_absolute_motion(time_us: number, x: number, y: number): void;
        vfunc_notify_button(time_us: number, button: number, button_state: Clutter.ButtonState): void;
        vfunc_notify_discrete_scroll(
            time_us: number,
            direction: Clutter.ScrollDirection,
            scroll_source: Clutter.ScrollSource,
        ): void;
        vfunc_notify_key(time_us: number, key: number, key_state: Clutter.KeyState): void;
        vfunc_notify_keyval(time_us: number, keyval: number, key_state: Clutter.KeyState): void;
        vfunc_notify_relative_motion(time_us: number, dx: number, dy: number): void;
        vfunc_notify_scroll_continuous(
            time_us: number,
            dx: number,
            dy: number,
            scroll_source: Clutter.ScrollSource,
            finish_flags: Clutter.ScrollFinishFlags,
        ): void;
        vfunc_notify_touch_down(time_us: number, slot: number, x: number, y: number): void;
        vfunc_notify_touch_motion(time_us: number, slot: number, x: number, y: number): void;
        vfunc_notify_touch_up(time_us: number, slot: number): void;
        // Methods
        get_device_type(): number;
        get_seat(): Clutter.Seat;
        notify_absolute_motion(time_us: number, x: number, y: number): void;
        notify_button(time_us: number, button: number, button_state: Clutter.ButtonState | null): void;
        notify_discrete_scroll(
            time_us: number,
            direction: Clutter.ScrollDirection | null,
            scroll_source: Clutter.ScrollSource | null,
        ): void;
        notify_key(time_us: number, key: number, key_state: Clutter.KeyState | null): void;
        notify_keyval(time_us: number, keyval: number, key_state: Clutter.KeyState | null): void;
        notify_relative_motion(time_us: number, dx: number, dy: number): void;
        notify_scroll_continuous(
            time_us: number,
            dx: number,
            dy: number,
            scroll_source: Clutter.ScrollSource | null,
            finish_flags: Clutter.ScrollFinishFlags | null,
        ): void;
        notify_touch_down(time_us: number, slot: number, x: number, y: number): void;
        notify_touch_motion(time_us: number, slot: number, x: number, y: number): void;
        notify_touch_up(time_us: number, slot: number): void;
    }
}
export default classes;
