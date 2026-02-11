import type Meta from './meta-17.d.ts';
import xlib from '@girs/xlib-2.0';
import xfixes from '@girs/xfixes-4.0';
import Mtk from '@girs/mtk-17';
import Graphene from '@girs/graphene-1.0';
import GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import GLib from '@girs/glib-2.0';
import Gio from '@girs/gio-2.0';
import { type GioClasses } from '@girs/gio-2.0/gio-2.0';
import GModule from '@girs/gmodule-2.0';
import GDesktopEnums from '@girs/gdesktopenums-3.0';
import Cogl from '@girs/cogl-17';
import GL from '@girs/gl-1.0';
import Clutter from '@girs/clutter-17';
import { type ClutterClasses } from '@girs/clutter-17/clutter-17';
import Pango from '@girs/pango-1.0';
import cairo from '@girs/cairo-1.0';
import HarfBuzz from '@girs/harfbuzz-0.0';
import freetype2 from '@girs/freetype2-2.0';
import Atk from '@girs/atk-1.0';
declare namespace classes {
    abstract class Backend extends GObjectClasses.Object implements Gio.Initable {
        static '$gtype': GObject.GType<Backend>;
        // Properties
        get capabilities(): Meta.BackendCapabilities;
        get context(): Meta.Context;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Backend.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Backend.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Backend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Backend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Backend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Backend.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        freeze_keyboard(timestamp: number): void;
        get_capabilities(): Meta.BackendCapabilities;
        get_context(): Meta.Context;
        get_core_idle_monitor(): Meta.IdleMonitor;
        /**
         * Returns the [class`Meta`.LogicalMonitor] that currently has the mouse pointer.
         *
         * @returns The current [class`Meta`.LogicalMonitor].
         */
        get_current_logical_monitor(): Meta.LogicalMonitor | null;
        get_cursor_tracker(): Meta.CursorTracker;
        /**
         * Gets the global #MetaDnd that's managed by this backend.
         *
         * @returns the #MetaDnd
         */
        get_dnd(): Meta.Dnd;
        get_monitor_manager(): Meta.MonitorManager;
        get_orientation_manager(): Meta.OrientationManager;
        get_remote_access_controller(): Meta.RemoteAccessController;
        /**
         * Gets the global #ClutterStage that's managed by this backend.
         *
         * @returns the #ClutterStage
         */
        get_stage(): Clutter.Actor;
        is_headless(): boolean;
        is_rendering_hardware_accelerated(): boolean;
        renderdoc_capture(): void;
        set_keymap_async(
            layouts: string,
            variants: string,
            options: string,
            model: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        set_keymap_async(
            layouts: string,
            variants: string,
            options: string,
            model: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_keymap_async(
            layouts: string,
            variants: string,
            options: string,
            model: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        set_keymap_finish(result: Gio.AsyncResult): boolean;
        set_keymap_layout_group_async(idx: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        set_keymap_layout_group_async(
            idx: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        set_keymap_layout_group_async(
            idx: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        set_keymap_layout_group_finish(result: Gio.AsyncResult): boolean;
        unfreeze_keyboard(timestamp: number): void;
        ungrab_keyboard(timestamp: number): void;
        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         *
         * @returns %TRUE if successful. If an error has occurred, this function will
         *     return %FALSE and set `error` appropriately if present.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         *
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
    class Background extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Background>;
        // Properties
        get meta_display(): Meta.Display;
        get metaDisplay(): Meta.Display;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Background.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Background.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(display: Meta.Display): Meta.Background;
        // Signals
        connect<K extends keyof Meta.Background.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Background.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Background.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Background.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Background.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Background.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        static refresh_all(): void;
        // Methods
        set_blend(
            _file1: Gio.File,
            _file2: Gio.File,
            blend_factor: number,
            style: GDesktopEnums.BackgroundStyle | null,
        ): void;
        set_color(color: Cogl.Color): void;
        /**
         * Set the background to `file`
         *
         * @param file a #GFile representing the background file
         * @param style the background style to apply
         */
        set_file(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle | null): void;
        set_gradient(
            shading_direction: GDesktopEnums.BackgroundShading | null,
            color: Cogl.Color,
            second_color: Cogl.Color,
        ): void;
    }
    class BackgroundActor
        extends ClutterClasses.Actor<Clutter.LayoutManager, Meta.BackgroundContent>
        implements Atk.ImplementorIface, Clutter.Animatable
    {
        static '$gtype': GObject.GType<BackgroundActor>;
        // Properties
        get meta_display(): Meta.Display;
        get metaDisplay(): Meta.Display;
        get monitor(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.BackgroundActor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.BackgroundActor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(display: Meta.Display, monitor: number): Meta.BackgroundActor;
        // Conflicted with Clutter.Actor.new
        static new(...args: never[]): any;
        // Signals
        connect<K extends keyof Meta.BackgroundActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundActor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.BackgroundActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundActor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.BackgroundActor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.BackgroundActor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
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
    class BackgroundContent extends GObjectClasses.Object implements Clutter.Content {
        static '$gtype': GObject.GType<BackgroundContent>;
        // Properties
        get background(): Meta.Background;
        set background(val: Meta.Background);
        get brightness(): number;
        set brightness(val: number);
        get gradient(): boolean;
        set gradient(val: boolean);
        get gradient_height(): number;
        set gradient_height(val: number);
        get gradientHeight(): number;
        set gradientHeight(val: number);
        get gradient_max_darkness(): number;
        set gradient_max_darkness(val: number);
        get gradientMaxDarkness(): number;
        set gradientMaxDarkness(val: number);
        get meta_display(): Meta.Display;
        get metaDisplay(): Meta.Display;
        get monitor(): number;
        get rounded_clip_radius(): number;
        set rounded_clip_radius(val: number);
        get roundedClipRadius(): number;
        set roundedClipRadius(val: number);
        get vignette(): boolean;
        set vignette(val: boolean);
        get vignette_sharpness(): number;
        set vignette_sharpness(val: number);
        get vignetteSharpness(): number;
        set vignetteSharpness(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.BackgroundContent.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.BackgroundContent.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.BackgroundContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundContent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.BackgroundContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundContent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.BackgroundContent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.BackgroundContent.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Creates a new actor to draw the background for the given monitor.
         *
         * @param display a #MetaDisplay
         * @param monitor Index of the monitor for which to draw the background
         */
        static new(display: Meta.Display, monitor: number): Clutter.Content;
        // Methods
        set_background(background: Meta.Background): void;
        set_gradient(enabled: boolean, height: number, tone_start: number): void;
        /**
         * Sets the bounding clip rectangle of the #MetaBackgroundContent that's used
         * when a rounded clip set via meta_background_content_set_rounded_clip_radius()
         * is in effect, set it to  %NULL to use no bounding clip, rounding the edges
         * of the full texture.
         *
         * @param bounds The new bounding clip rectangle, or %NULL
         */
        set_rounded_clip_bounds(bounds?: Graphene.Rect | null): void;
        set_rounded_clip_radius(radius: number): void;
        set_vignette(enabled: boolean, brightness: number, sharpness: number): void;
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
    class BackgroundGroup extends ClutterClasses.Actor implements Atk.ImplementorIface, Clutter.Animatable {
        static '$gtype': GObject.GType<BackgroundGroup>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.BackgroundGroup.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.BackgroundGroup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Meta.BackgroundGroup;
        // Signals
        connect<K extends keyof Meta.BackgroundGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.BackgroundGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.BackgroundGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.BackgroundGroup.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
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
    class BackgroundImage extends GObjectClasses.Object {
        static '$gtype': GObject.GType<BackgroundImage>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.BackgroundImage.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.BackgroundImage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.BackgroundImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundImage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.BackgroundImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundImage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.BackgroundImage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.BackgroundImage.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * This function is a convenience function for checking for success,
         * without having to call meta_background_image_get_texture() and
         * handle the return of a Cogl type.
         *
         * @returns %TRUE if loading completed successfully, otherwise %FALSE
         */
        get_success(): boolean;
        get_texture(): Cogl.Texture;
        is_loaded(): boolean;
    }
    class BackgroundImageCache extends GObjectClasses.Object {
        static '$gtype': GObject.GType<BackgroundImageCache>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.BackgroundImageCache.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.BackgroundImageCache.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.BackgroundImageCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundImageCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.BackgroundImageCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.BackgroundImageCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.BackgroundImageCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.BackgroundImageCache.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        static get_default(): Meta.BackgroundImageCache;
        // Methods
        /**
         * Loads an image to use as a background, or returns a reference to an
         * image that is already in the process of loading or loaded.
         *
         * In either case, what is returned is a [class`Meta`.BackgroundImage] which can be dereferenced
         * to get a [class`Cogl`.Texture]. If [method`Meta`.BackgroundImage.is_loaded] returns %TRUE,
         * the background is loaded, otherwise the [signal`Meta`.BackgroundImage::loaded]
         * signal will be emitted exactly once. The 'loaded' state means that the
         * loading process finished, whether it succeeded or failed.
         *
         * @returns a #MetaBackgroundImage to dereference to get the loaded texture
         * @param file #GFile to load
         */
        load(file: Gio.File): Meta.BackgroundImage;
        /**
         * Remove an entry from the cache; this would be used if monitoring
         * showed that the file changed.
         *
         * @param file file to remove from the cache
         */
        purge(file: Gio.File): void;
    }
    abstract class Backlight extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Backlight>;
        // Properties
        get backend(): Meta.Backend;
        get brightness(): number;
        set brightness(val: number);
        get brightness_max(): number;
        get brightnessMax(): number;
        get brightness_min(): number;
        get brightnessMin(): number;
        get name(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Backlight.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Backlight.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Backlight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Backlight.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Backlight.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Backlight.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Backlight.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Backlight.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the brightness target of the backlight. The target is a value between
         * the minimum and maximum brightness of the backlight.
         *
         * @returns The brightness target of the backlight.
         */
        get_brightness(): number;
        /**
         * Returns the minimum and maximum supported brightness of the monitor.
         */
        get_brightness_info(): [number, number];
        /**
         * Sets the brightness target of the backlight. The target is a value between
         * the minimum and maximum brightness of the backlight.
         *
         * @param brightness The brightness target
         */
        set_brightness(brightness: number): void;
    }
    class Barrier extends GObjectClasses.Object implements Gio.Initable {
        static '$gtype': GObject.GType<Barrier>;
        // Properties
        get backend(): Meta.Backend;
        get directions(): Meta.BarrierDirection;
        get flags(): Meta.BarrierFlags;
        get x1(): number;
        get x2(): number;
        get y1(): number;
        get y2(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Barrier.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Barrier.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(
            backend: Meta.Backend,
            _x1: number,
            _y1: number,
            _x2: number,
            _y2: number,
            directions: Meta.BarrierDirection,
            flags: Meta.BarrierFlags,
        ): Meta.Barrier;
        // Signals
        connect<K extends keyof Meta.Barrier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Barrier.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Barrier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Barrier.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Barrier.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Barrier.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        destroy(): void;
        is_active(): boolean;
        /**
         * In XI2.3, pointer barriers provide a feature where they can
         * be temporarily released so that the pointer goes through
         * them. Pass a #MetaBarrierEvent to release the barrier for
         * this event sequence.
         *
         * @param event The event to release the pointer for
         */
        release(event: Meta.BarrierEvent): void;
        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         *
         * @returns %TRUE if successful. If an error has occurred, this function will
         *     return %FALSE and set `error` appropriately if present.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         *
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
    abstract class Compositor extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Compositor>;
        // Properties
        get backend(): Meta.Backend;
        get display(): Meta.Display;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Compositor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Compositor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Compositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Compositor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Compositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Compositor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Compositor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Compositor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Disables unredirection, can be useful in situations where having
         * unredirected windows is undesirable like when recording a video.
         */
        disable_unredirect(): void;
        /**
         * Enables unredirection which reduces the overhead for apps like games.
         */
        enable_unredirect(): void;
        get_backend(): Meta.Backend;
        get_feedback_group(): Clutter.Actor;
        get_laters(): Meta.Laters;
        get_stage(): Clutter.Stage;
        get_top_window_group(): Clutter.Actor;
        get_window_actors(): Clutter.Actor[];
        get_window_group(): Clutter.Actor;
    }
    class Context extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Context>;
        // Properties
        get name(): string;
        get nick(): string;
        get unsafe_mode(): boolean;
        set unsafe_mode(val: boolean);
        get unsafeMode(): boolean;
        set unsafeMode(val: boolean);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Context.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Context.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Context.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * See g_option_context_add_main_entries() for more details.
         *
         * @param entries a %NULL-terminated array of #GOptionEntrys
         * @param translation_domain a translation domain to use, or %NULL
         */
        add_option_entries(entries: GLib.OptionEntry[], translation_domain?: string | null): void;
        /**
         * See g_option_context_add_group() for more details.
         *
         * @param group the group to add
         */
        add_option_group(group: GLib.OptionGroup): void;
        configure(argv?: string[] | null): [boolean, string[] | null];
        destroy(): void;
        get_backend(): Meta.Backend;
        get_compositor_type(): Meta.CompositorType;
        get_debug_control(): Meta.DebugControl;
        get_display(): Meta.Display;
        /**
         * Get the #MetaWaylandCompositor associated with the MetaContext. The might be
         * none currently associated if the context hasn't been started or if the
         * requested compositor type is not %META_COMPOSITOR_TYPE_WAYLAND.
         *
         * @returns the #MetaWaylandCompositor
         */
        get_wayland_compositor(): Meta.WaylandCompositor | null;
        is_replacing(): boolean;
        notify_ready(): void;
        /**
         * Raises the RLIMIT_NOFILE limit value to the hard limit.
         */
        raise_rlimit_nofile(): boolean;
        /**
         * Restores the RLIMIT_NOFILE limits from when the #MetaContext was created.
         */
        restore_rlimit_nofile(): boolean;
        run_main_loop(): boolean;
        set_gnome_wm_keybindings(wm_keybindings: string): void;
        set_plugin_gtype(plugin_gtype: GObject.GType): void;
        set_plugin_name(plugin_name: string): void;
        setup(): boolean;
        start(): boolean;
        terminate(): void;
        terminate_with_error(error: GLib.Error): void;
    }
    class CursorTracker extends GObjectClasses.Object {
        static '$gtype': GObject.GType<CursorTracker>;
        // Properties
        get backend(): Meta.Backend;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.CursorTracker.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.CursorTracker.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.CursorTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.CursorTracker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.CursorTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.CursorTracker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.CursorTracker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.CursorTracker.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Get the hotspot of the current cursor sprite.
         */
        get_hot(): [number, number];
        /**
         * Get the current pointer position and state.
         */
        get_pointer(): [Graphene.Point | null, Clutter.ModifierType | null];
        get_pointer_visible(): boolean;
        /**
         * Get the scale factor of the cursor sprite
         *
         * @returns The scale factor of the cursor sprite
         */
        get_scale(): number;
        /**
         * Get the #CoglTexture of the cursor sprite
         *
         * @returns the #CoglTexture of the cursor sprite
         */
        get_sprite(): Cogl.Texture | null;
        inhibit_cursor_visibility(): void;
        uninhibit_cursor_visibility(): void;
    }
    class DebugControl extends GioClasses.DBusInterfaceSkeleton implements Gio.DBusInterface {
        static '$gtype': GObject.GType<DebugControl>;
        // Properties
        get context(): Meta.Context;
        get exported(): boolean;
        set exported(val: boolean);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.DebugControl.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.DebugControl.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.DebugControl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.DebugControl.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.DebugControl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.DebugControl.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.DebugControl.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.DebugControl.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        set_exported(exported: boolean): void;
        // Inherited methods
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         *
         * @returns A #GDBusObject or %NULL. The returned
         * reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         *
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         *
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         *
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
    class Display extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Display>;
        // Properties
        get compositor_modifiers(): Clutter.ModifierType;
        get compositorModifiers(): Clutter.ModifierType;
        get focus_window(): Meta.Window;
        get focusWindow(): Meta.Window;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Display.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Display.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Display.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Add a keybinding at runtime. The key `name` in `schema` needs to be of
         * type %G_VARIANT_TYPE_STRING_ARRAY, with each string describing a
         * keybinding in the form of "&lt;Control&gt;a" or "&lt;Shift&gt;&lt;Alt&gt;F1". The parser
         * is fairly liberal and allows lower or upper case, and also abbreviations
         * such as "&lt;Ctl&gt;" and "&lt;Ctrl&gt;". If the key is set to the empty list or a
         * list with a single element of either "" or "disabled", the keybinding is
         * disabled.
         *
         * Use meta_display_remove_keybinding() to remove the binding.
         *
         * @returns the corresponding keybinding action if the keybinding was
         *          added successfully, otherwise %META_KEYBINDING_ACTION_NONE
         * @param name the binding's name
         * @param settings the #GSettings object where `name` is stored
         * @param flags flags to specify binding details
         * @param handler function to run when the keybinding is invoked
         */
        add_keybinding(
            name: string,
            settings: Gio.Settings,
            flags: Meta.KeyBindingFlags | null,
            handler: Meta.KeyHandlerFunc,
        ): number;
        /**
         * Sets the mouse-mode flag to %FALSE, which means that motion events are
         * no longer ignored in mouse or sloppy focus.
         * This is an internal function. It should be used only for reimplementing
         * keybindings, and only in a manner compatible with core code.
         */
        clear_mouse_mode(): void;
        close(timestamp: number): void;
        focus_default_window(timestamp: number): void;
        get_compositor(): Meta.Compositor;
        get_compositor_modifiers(): Clutter.ModifierType;
        get_context(): Meta.Context;
        /**
         * Gets the index of the monitor that currently has the mouse pointer.
         *
         * @returns a monitor index
         */
        get_current_monitor(): number;
        get_current_time(): number;
        get_current_time_roundtrip(): number;
        /**
         * Get our best guess as to the "currently" focused window (that is,
         * the window that we expect will be focused at the point when the X
         * server processes our next request).
         *
         * @returns The current focus window
         */
        get_focus_window(): Meta.Window;
        /**
         * Get the keybinding action bound to `keycode`. Builtin keybindings
         * have a fixed associated #MetaKeyBindingAction, for bindings added
         * dynamically the function will return the keybinding action
         * meta_display_add_keybinding() returns on registration.
         *
         * @returns The action that should be taken for the given key, or
         * %META_KEYBINDING_ACTION_NONE.
         * @param keycode Raw keycode
         * @param mask Event mask
         */
        get_keybinding_action(keycode: number, mask: number): number;
        get_last_user_time(): number;
        /**
         * Stores the location and size of the indicated `monitor` in `geometry`.
         *
         * @param monitor the monitor number
         */
        get_monitor_geometry(monitor: number): [Mtk.Rectangle];
        /**
         * Determines whether there is a fullscreen window obscuring the specified
         * monitor. If there is a fullscreen window, the desktop environment will
         * typically hide any controls that might obscure the fullscreen window.
         *
         * You can get notification when this changes by connecting to
         * MetaDisplay::in-fullscreen-changed.
         *
         * @returns %TRUE if there is a fullscreen window covering the specified monitor.
         * @param monitor the monitor number
         */
        get_monitor_in_fullscreen(monitor: number): boolean;
        get_monitor_index_for_rect(rect: Mtk.Rectangle): number;
        get_monitor_neighbor_index(which_monitor: number, dir: Meta.DisplayDirection | null): number;
        /**
         * Gets the monitor scaling value for the given `monitor`.
         *
         * @returns the monitor scaling value
         * @param monitor the monitor number
         */
        get_monitor_scale(monitor: number): number;
        /**
         * Gets the number of monitors that are joined together to form `display`.
         *
         * @returns the number of monitors
         */
        get_n_monitors(): number;
        get_pad_button_label(pad: Clutter.InputDevice, button_number: number): string;
        get_pad_feature_label(
            pad: Clutter.InputDevice,
            feature: Meta.PadFeatureType | null,
            direction: Meta.PadDirection | null,
            feature_number: number,
        ): string;
        /**
         * Gets the index of the primary monitor on this `display`.
         *
         * @returns a monitor index
         */
        get_primary_monitor(): number;
        get_selection(): Meta.Selection;
        /**
         * Retrieve the size of the display.
         */
        get_size(): [number, number];
        get_sound_player(): Meta.SoundPlayer;
        /**
         * Determine the active window that should be displayed for Alt-TAB.
         *
         * @returns Current window
         * @param type type of tab list
         * @param workspace origin workspace
         */
        get_tab_current(type: Meta.TabList | null, workspace: Meta.Workspace): Meta.Window;
        /**
         * Determine the list of windows that should be displayed for Alt-TAB
         * functionality.  The windows are returned in most recently used order.
         * If `workspace` is not %NULL, the list only contains windows that are on
         * `workspace` or have the demands-attention hint set; otherwise it contains
         * all windows.
         *
         * @returns List of windows
         * @param type type of tab list
         * @param workspace origin workspace
         */
        get_tab_list(type: Meta.TabList | null, workspace?: Meta.Workspace | null): Meta.Window[];
        /**
         * Determine the next window that should be displayed for Alt-TAB
         * functionality.
         *
         * @returns Next window
         * @param type type of tab list
         * @param workspace origin workspace
         * @param window starting window
         * @param backward If %TRUE, look for the previous window.
         */
        get_tab_next(
            type: Meta.TabList | null,
            workspace: Meta.Workspace,
            window: Meta.Window | null,
            backward: boolean,
        ): Meta.Window;
        get_workspace_manager(): Meta.WorkspaceManager;
        grab_accelerator(accelerator: string, flags: Meta.KeyBindingFlags | null): number;
        /**
         * Returns %TRUE if there is an ongoing grab operation.
         *
         * @returns Whether there is an active display grab operation.
         */
        is_grabbed(): boolean;
        /**
         * Tells whether the event sequence is the used for pointer emulation
         * and single-touch interaction.
         *
         * @returns #TRUE if the sequence emulates pointer behavior
         * @param sequence a #ClutterEventSequence
         */
        is_pointer_emulating_sequence(sequence?: Clutter.EventSequence | null): boolean;
        /**
         * List all windows, including override-redirect ones. The windows are
         * in no particular order.
         *
         * @returns List of windows
         */
        list_all_windows(): Meta.Window[];
        /**
         * Remove keybinding `name;` the function will fail if `name` is not a known
         * keybinding or has not been added with meta_display_add_keybinding().
         *
         * @returns %TRUE if the binding has been removed successfully,
         *          otherwise %FALSE
         * @param name name of the keybinding to remove
         */
        remove_keybinding(name: string): boolean;
        request_pad_osd(pad: Clutter.InputDevice, edition_mode: boolean): void;
        set_cursor(cursor: Meta.Cursor | null): void;
        set_input_focus(window: Meta.Window, timestamp: number): void;
        /**
         * Sorts a set of windows according to their current stacking order. If windows
         * from multiple screens are present in the set of input windows, then all the
         * windows on screen 0 are sorted below all the windows on screen 1, and so forth.
         * Since the stacking order of override-redirect windows isn't controlled by
         * Metacity, if override-redirect windows are in the input, the result may not
         * correspond to the actual stacking order in the X server.
         *
         * An example of using this would be to sort the list of transient dialogs for a
         * window into their current stacking order.
         *
         * @returns Input windows sorted by stacking order, from lowest to highest
         * @param windows Set of windows
         */
        sort_windows_by_stacking(windows: Meta.Window[]): Meta.Window[];
        ungrab_accelerator(action_id: number): boolean;
        unset_input_focus(timestamp: number): void;
        /**
         * Xserver time can wraparound, thus comparing two timestamps needs to take
         * this into account. If no wraparound has occurred, this is equivalent to
         *   time1 < time2
         * Otherwise, we need to account for the fact that wraparound can occur
         * and the fact that a timestamp of 0 must be special-cased since it
         * means "older than anything else".
         *
         * Note that this is NOT an equivalent for time1 <= time2; if that's what
         * you need then you'll need to swap the order of the arguments and negate
         * the result.
         *
         * @param _time1 An event timestamp
         * @param _time2 An event timestamp
         */
        xserver_time_is_before(_time1: number, _time2: number): boolean;
    }
    class Dnd extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Dnd>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Dnd.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Dnd.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Dnd.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Dnd.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Dnd.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Dnd.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Dnd.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Dnd.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class IdleMonitor extends GObjectClasses.Object {
        static '$gtype': GObject.GType<IdleMonitor>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.IdleMonitor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.IdleMonitor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.IdleMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.IdleMonitor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        add_idle_watch(interval_msec: number, callback?: Meta.IdleMonitorWatchFunc | null): number;
        add_user_active_watch(callback?: Meta.IdleMonitorWatchFunc | null): number;
        get_idletime(): number;
        /**
         * Removes an idle time watcher, previously added by
         * meta_idle_monitor_add_idle_watch() or
         * meta_idle_monitor_add_user_active_watch().
         *
         * @param id A watch ID
         */
        remove_watch(id: number): void;
    }
    class Laters extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Laters>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Laters.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Laters.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Laters.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Laters.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Laters.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Laters.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Laters.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Laters.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Sets up a callback  to be called at some later time. `when` determines the
         * particular later occasion at which it is called. This is much like g_idle_add(),
         * except that the functions interact properly with clutter event handling.
         * If a "later" function is added from a clutter event handler, and is supposed
         * to be run before the stage is redrawn, it will be run before that redraw
         * of the stage, not the next one.
         *
         * @returns an integer ID (guaranteed to be non-zero) that can be used
         *  to cancel the callback and prevent it from being run.
         * @param when enumeration value determining the phase at which to run the callback
         * @param func callback to run later
         */
        add(when: Meta.LaterType | null, func: GLib.SourceFunc): number;
        /**
         * Removes a callback added with meta_later_add()
         *
         * @param later_id the integer ID returned from meta_later_add()
         */
        remove(later_id: number): void;
    }
    class LaunchContext extends GioClasses.AppLaunchContext {
        static '$gtype': GObject.GType<LaunchContext>;
        // Properties
        get display(): Meta.Display;
        get timestamp(): number;
        set timestamp(val: number);
        get workspace(): Meta.Workspace;
        set workspace(val: Meta.Workspace);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.LaunchContext.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.LaunchContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.LaunchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.LaunchContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.LaunchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.LaunchContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.LaunchContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.LaunchContext.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        set_timestamp(timestamp: number): void;
        set_workspace(workspace: Meta.Workspace): void;
    }
    class LogicalMonitor extends GObjectClasses.Object {
        static '$gtype': GObject.GType<LogicalMonitor>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.LogicalMonitor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.LogicalMonitor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.LogicalMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.LogicalMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.LogicalMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.LogicalMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.LogicalMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.LogicalMonitor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the list of [class`Meta`.Monitor]s.
         *
         * @returns The list of [class`Meta`.Monitor]s.
         */
        get_monitors(): Meta.Monitor[];
        /**
         * Returns the [class`Meta`.Monitor]s number which is compatible with the monitor
         * API on [class`Meta`.Display] until the next monitors-changed.
         *
         * @returns The [class`Meta`.Monitor]s number
         */
        get_number(): number;
    }
    class Monitor extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Monitor>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Monitor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Monitor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Monitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Monitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Monitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Monitor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the [class`Meta`.Backlight] of the monitor, or NULL if it has no
         * controllable backlight.
         *
         * @returns The [class`Meta`.Backlight].
         */
        get_backlight(): Meta.Backlight | null;
        /**
         * Get the connector name of the monitor.
         *
         * @returns The connector name of the monitor.
         */
        get_connector(): string;
        /**
         * Get the displayable name of the monitor.
         *
         * @returns The displayable name of the monitor.
         */
        get_display_name(): string;
        /**
         * Get the product name of the monitor.
         *
         * @returns The product name of the monitor.
         */
        get_product(): string;
        /**
         * Get the serial id of the monitor.
         *
         * @returns The serial id of the monitor.
         */
        get_serial(): string;
        /**
         * Get the vendor name of the monitor.
         *
         * @returns The vendor name of the monitor.
         */
        get_vendor(): string;
        /**
         * Returns whether the monitor is active.
         *
         * @returns %TRUE if the monitor is active, %FALSE otherwise.
         */
        is_active(): boolean;
        /**
         * Returns whether the monitor is a builtin monitor.
         *
         * @returns %TRUE if no monitors is a builtin monitor, %FALSE otherwise.
         */
        is_builtin(): boolean;
        /**
         * Returns whether the monitor is the primary monitor.
         *
         * @returns %TRUE if no monitors is the primary monitor, %FALSE otherwise.
         */
        is_primary(): boolean;
        /**
         * Returns whether the monitor is virtual.
         *
         * @returns %TRUE if no monitors is virtual, %FALSE otherwise.
         */
        is_virtual(): boolean;
    }
    class MonitorManager extends GObjectClasses.Object {
        static '$gtype': GObject.GType<MonitorManager>;
        // Properties
        get backend(): Meta.Backend;
        get has_builtin_panel(): boolean;
        get hasBuiltinPanel(): boolean;
        get night_light_supported(): boolean;
        get nightLightSupported(): boolean;
        get panel_orientation_managed(): boolean;
        get panelOrientationManaged(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.MonitorManager.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.MonitorManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.MonitorManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.MonitorManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.MonitorManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.MonitorManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.MonitorManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.MonitorManager.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        can_switch_config(): boolean;
        get_display_configuration_timeout(): number;
        /**
         * Returns whether the built-in display (i.e. a laptop panel) is turned on.
         */
        get_is_builtin_display_on(): boolean;
        /**
         * Returns the list of [class`Meta`.LogicalMonitor]s. See also
         * meta_monitor_manager_get_num_logical_monitors() if you only need the size of
         * the list.
         *
         * @returns The list of [class`Meta`.LogicalMonitor]s.
         */
        get_logical_monitors(): Meta.LogicalMonitor[] | null;
        get_monitor_for_connector(connector: string): number;
        /**
         * Returns the list of [class`Meta`.Monitor]s. See also
         * meta_monitor_manager_get_logical_monitors() for a list of
         * `MetaLogicalMonitor`s.
         *
         * @returns The list of [class`Meta`.Monitor]s.
         */
        get_monitors(): Meta.Monitor[] | null;
        get_panel_orientation_managed(): boolean;
        get_switch_config(): Meta.MonitorSwitchConfigType;
        switch_config(config_type: Meta.MonitorSwitchConfigType | null): void;
    }
    class MultiTexture extends GObjectClasses.Object {
        static '$gtype': GObject.GType<MultiTexture>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.MultiTexture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.MultiTexture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(format: Meta.MultiTextureFormat, planes: Cogl.Texture, n_planes: number): Meta.MultiTexture;
        static new_simple(plane: Cogl.Texture): Meta.MultiTexture;
        // Signals
        connect<K extends keyof Meta.MultiTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.MultiTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.MultiTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.MultiTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.MultiTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.MultiTexture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        add_pipeline_sampling(
            coeffs: Meta.MultiTextureCoefficients | null,
            premult: Meta.MultiTextureAlphaMode | null,
            pipeline: Cogl.Pipeline,
        ): void;
        /**
         * Returns the #MetaMultiTextureFormat that is used by this texture.
         *
         * @returns The texture format that is used by this #MetaMultiTexture.
         */
        get_format(): Meta.MultiTextureFormat;
        /**
         * Returns the height of the #MetaMultiTexture. Prefer this over calling
         * cogl_texture_get_height() on one of the textures, as that might give a
         * different size when dealing with subsampling.
         *
         * @returns The height of the texture.
         */
        get_height(): number;
        /**
         * Returns the number of planes for this texture. Note that this is entirely
         * dependent on the #CoglPixelFormat that is used. For example, simple RGB
         * textures will have a single plane, while some more convoluted formats like
         * NV12 and YUV 4:4:4 can have 2 and 3 planes respectively.
         *
         * @returns The number of planes in this #MetaMultiTexture.
         */
        get_n_planes(): number;
        /**
         * Returns the n'th plane of the #MetaMultiTexture. Note that it's a programming
         * error to use with an index larger than meta_multi_texture_get_n_planes().
         *
         * @returns The plane at the given `index`.
         * @param index the index of the plane
         */
        get_plane(index: number): Cogl.Texture;
        /**
         * Returns the width of the #MetaMultiTexture. Prefer this over calling
         * cogl_texture_get_width() on one of the textures, as that might give a
         * different size when dealing with subsampling.
         *
         * @returns The width of the texture.
         */
        get_width(): number;
        /**
         * A small function that checks whether the given multi texture uses a "simple"
         * format, i.e. one that can be represented by a #CoglPixelFormat.
         *
         * @returns Whether the texture format is #META_MULTI_TEXTURE_FORMAT_SIMPLE
         */
        is_simple(): boolean;
        /**
         * Returns a string representation of `multi_texture,` useful for debugging
         * purposes.
         *
         * @returns A string representation of `multi_texture`. Use
         * g_free() when done with it.
         */
        to_string(): string;
    }
    class OrientationManager extends GObjectClasses.Object {
        static '$gtype': GObject.GType<OrientationManager>;
        // Properties
        get has_accelerometer(): boolean;
        get hasAccelerometer(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.OrientationManager.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.OrientationManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.OrientationManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.OrientationManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.OrientationManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.OrientationManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.OrientationManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.OrientationManager.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_orientation(): Meta.Orientation;
        inhibit_tracking(): void;
        uninhibit_tracking(): void;
    }
    abstract class Plugin extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Plugin>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Plugin.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Plugin.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Plugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Plugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Plugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Plugin.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        static manager_set_plugin_type(gtype: GObject.GType): void;
        // Virtual methods
        vfunc_confirm_display_change(): void;
        /**
         * Virtual function called to create a "force quit" dialog
         * on non-responsive clients.
         *
         * @param window a #MetaWindow
         */
        vfunc_create_close_dialog(window: Meta.Window): Meta.CloseDialog | null;
        /**
         * Virtual function called to create a "inhibit shortcuts" dialog
         * when a client requests compositor shortcuts to be inhibited.
         *
         * @param window a #MetaWindow
         */
        vfunc_create_inhibit_shortcuts_dialog(window: Meta.Window): Meta.InhibitShortcutsDialog;
        /**
         * Virtual function called when the window represented by `actor` is destroyed.
         *
         * @param actor a #MetaWindowActor
         */
        vfunc_destroy(actor: Meta.WindowActor): void;
        vfunc_hide_tile_preview(): void;
        /**
         * Virtual function called when handling each keybinding.
         *
         * @param binding a #MetaKeyBinding
         */
        vfunc_keybinding_filter(binding: Meta.KeyBinding): boolean;
        /**
         * Virtual function called when the workspace-switching effect needs to be
         * killed prematurely.
         */
        vfunc_kill_switch_workspace(): void;
        /**
         * Virtual function called when the effects on `actor` need to be killed
         * prematurely; the plugin must call the completed() callback as if the effect
         * terminated naturally.
         *
         * @param actor a #MetaWindowActor
         */
        vfunc_kill_window_effects(actor: Meta.WindowActor): void;
        /**
         * Virtual function called when the user triggered the "locate-pointer"
         * mechanism.
         * The common way to implement this function is to show some animation
         * on screen to draw user attention on the pointer location.
         */
        vfunc_locate_pointer(): void;
        /**
         * Virtual function called when the window represented by `actor` is mapped.
         *
         * @param actor a #MetaWindowActor
         */
        vfunc_map(actor: Meta.WindowActor): void;
        /**
         * Virtual function called when the window represented by `actor` is minimized.
         *
         * @param actor a #MetaWindowActor
         */
        vfunc_minimize(actor: Meta.WindowActor): void;
        vfunc_show_tile_preview(window: Meta.Window, tile_rect: Mtk.Rectangle, tile_monitor_number: number): void;
        vfunc_show_window_menu(window: Meta.Window, menu: Meta.WindowMenuType, x: number, y: number): void;
        vfunc_show_window_menu_for_rect(window: Meta.Window, menu: Meta.WindowMenuType, rect: Mtk.Rectangle): void;
        /**
         * virtual function called when a window changes size to/from constraints
         *
         * @param actor
         * @param which_change
         * @param old_frame_rect
         * @param old_buffer_rect
         */
        vfunc_size_change(
            actor: Meta.WindowActor,
            which_change: Meta.SizeChange,
            old_frame_rect: Mtk.Rectangle,
            old_buffer_rect: Mtk.Rectangle,
        ): void;
        vfunc_size_changed(actor: Meta.WindowActor): void;
        /**
         * Virtual function called when the compositor starts managing a screen
         */
        vfunc_start(): void;
        /**
         * Virtual function called when the window represented by `actor` is destroyed.
         *
         * @param from origin workspace
         * @param to destination workspace
         * @param direction a #MetaMotionDirection
         */
        vfunc_switch_workspace(from: number, to: number, direction: Meta.MotionDirection): void;
        /**
         * Virtual function called when the window represented by `actor` is unminimized.
         *
         * @param actor a #MetaWindowActor
         */
        vfunc_unminimize(actor: Meta.WindowActor): void;
        /**
         * Virtual function called when handling each event.
         *
         * @param event a xlib.XEvent
         */
        vfunc_xevent_filter(event: Meta.XEvent): boolean;
        // Methods
        complete_display_change(ok: boolean): void;
        destroy_completed(actor: Meta.WindowActor): void;
        /**
         * Gets the #MetaDisplay corresponding to a plugin.
         *
         * @returns the #MetaDisplay for the plugin
         */
        get_display(): Meta.Display;
        map_completed(actor: Meta.WindowActor): void;
        minimize_completed(actor: Meta.WindowActor): void;
        size_change_completed(actor: Meta.WindowActor): void;
        switch_workspace_completed(): void;
        unminimize_completed(actor: Meta.WindowActor): void;
    }
    class RemoteAccessController extends GObjectClasses.Object {
        static '$gtype': GObject.GType<RemoteAccessController>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.RemoteAccessController.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.RemoteAccessController.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.RemoteAccessController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.RemoteAccessController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.RemoteAccessController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.RemoteAccessController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.RemoteAccessController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.RemoteAccessController.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Inhibits remote access sessions from being created and running. Any active
         * remote access session will be terminated.
         */
        inhibit_remote_access(): void;
        /**
         * Uninhibits remote access sessions from being created and running. If this was
         * the last inhibition that was inhibited, new remote access sessions can now
         * be created.
         */
        uninhibit_remote_access(): void;
    }
    class RemoteAccessHandle extends GObjectClasses.Object {
        static '$gtype': GObject.GType<RemoteAccessHandle>;
        // Properties
        get is_recording(): boolean;
        get isRecording(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.RemoteAccessHandle.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.RemoteAccessHandle.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.RemoteAccessHandle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.RemoteAccessHandle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.RemoteAccessHandle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.RemoteAccessHandle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.RemoteAccessHandle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.RemoteAccessHandle.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Stop the associated remote access session.
         */
        vfunc_stop(): void;
        // Methods
        get_disable_animations(): boolean;
        /**
         * Stop the associated remote access session.
         */
        stop(): void;
    }
    class Selection extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Selection>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Selection.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Selection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(display: Meta.Display): Meta.Selection;
        // Signals
        connect<K extends keyof Meta.Selection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Selection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Selection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Selection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Selection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Selection.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the list of supported mimetypes for the given selection type.
         *
         * @returns The supported mimetypes
         * @param selection_type Selection to query
         */
        get_mimetypes(selection_type: Meta.SelectionType | null): string[];
        /**
         * Sets `owner` as the owner of the selection given by `selection_type,`
         * unsets any previous owner there was.
         *
         * @param selection_type Selection type
         * @param owner New selection owner
         */
        set_owner(selection_type: Meta.SelectionType | null, owner: Meta.SelectionSource): void;
        /**
         * Requests a transfer of `mimetype` on the selection given by
         * `selection_type`.
         *
         * @param selection_type Selection type
         * @param mimetype Mimetype to transfer
         * @param size Maximum size to transfer, -1 for unlimited
         * @param output Output stream to write contents to
         * @param cancellable Cancellable
         */
        transfer_async(
            selection_type: Meta.SelectionType | null,
            mimetype: string,
            size: number,
            output: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Requests a transfer of `mimetype` on the selection given by
         * `selection_type`.
         *
         * @param selection_type Selection type
         * @param mimetype Mimetype to transfer
         * @param size Maximum size to transfer, -1 for unlimited
         * @param output Output stream to write contents to
         * @param cancellable Cancellable
         * @param callback User callback
         */
        transfer_async(
            selection_type: Meta.SelectionType | null,
            mimetype: string,
            size: number,
            output: Gio.OutputStream,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Requests a transfer of `mimetype` on the selection given by
         * `selection_type`.
         *
         * @param selection_type Selection type
         * @param mimetype Mimetype to transfer
         * @param size Maximum size to transfer, -1 for unlimited
         * @param output Output stream to write contents to
         * @param cancellable Cancellable
         * @param callback User callback
         */
        transfer_async(
            selection_type: Meta.SelectionType | null,
            mimetype: string,
            size: number,
            output: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the transfer of a queried mimetype.
         *
         * @returns #TRUE if the transfer was successful.
         * @param result The async result
         */
        transfer_finish(result: Gio.AsyncResult): boolean;
        /**
         * Unsets `owner` as the owner the selection given by `selection_type`. If
         * `owner` does not own the selection, nothing is done.
         *
         * @param selection_type Selection type
         * @param owner Owner to unset
         */
        unset_owner(selection_type: Meta.SelectionType | null, owner: Meta.SelectionSource): void;
    }
    class SelectionSource extends GObjectClasses.Object {
        static '$gtype': GObject.GType<SelectionSource>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.SelectionSource.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.SelectionSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.SelectionSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.SelectionSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.SelectionSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.SelectionSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.SelectionSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.SelectionSource.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_activated(): void;
        vfunc_deactivated(): void;
        /**
         * Returns the list of supported mimetypes.
         */
        vfunc_get_mimetypes(): string[];
        vfunc_read_async(
            mimetype: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a read from the selection source.
         *
         * @param result The async result
         */
        vfunc_read_finish(result: Gio.AsyncResult): Gio.InputStream;
        // Methods
        /**
         * Returns the list of supported mimetypes.
         *
         * @returns The supported mimetypes
         */
        get_mimetypes(): string[];
        /**
         * Returns #TRUE if the source is active on a selection.
         *
         * @returns #TRUE if the source owns a selection.
         */
        is_active(): boolean;
        read_async(mimetype: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>;
        read_async(
            mimetype: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        read_async(
            mimetype: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gio.InputStream> | void;
        /**
         * Finishes a read from the selection source.
         *
         * @returns The resulting #GInputStream
         * @param result The async result
         */
        read_finish(result: Gio.AsyncResult): Gio.InputStream;
    }
    class SelectionSourceMemory extends SelectionSource {
        static '$gtype': GObject.GType<SelectionSourceMemory>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.SelectionSourceMemory.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.SelectionSourceMemory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(mimetype: string, content: GLib.Bytes | Uint8Array): Meta.SelectionSourceMemory;
        // Signals
        connect<K extends keyof Meta.SelectionSourceMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.SelectionSourceMemory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.SelectionSourceMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.SelectionSourceMemory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.SelectionSourceMemory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.SelectionSourceMemory.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class ShapedTexture extends GObjectClasses.Object implements Clutter.Content {
        static '$gtype': GObject.GType<ShapedTexture>;
        // Properties
        get clutter_context(): Clutter.Context;
        get clutterContext(): Clutter.Context;
        get color_state(): Clutter.ColorState;
        get colorState(): Clutter.ColorState;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.ShapedTexture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.ShapedTexture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.ShapedTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.ShapedTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.ShapedTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.ShapedTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.ShapedTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.ShapedTexture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Flattens the two layers of the shaped texture into one ARGB32
         * image by alpha blending the two images, and returns the flattened
         * image.
         *
         * @returns a new cairo surface to be freed with
         * cairo_surface_destroy().
         * @param clip A clipping rectangle, to help prevent extra processing.
         * In the case that the clipping rectangle is partially or fully
         * outside the bounds of the texture, the rectangle will be clipped.
         */
        get_image(clip?: Mtk.Rectangle | null): cairo.Surface | null;
        get_texture(): Meta.MultiTexture;
        set_create_mipmaps(create_mipmaps: boolean): void;
        set_mask_texture(mask_texture: Cogl.Texture): void;
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
    class SoundPlayer extends GObjectClasses.Object {
        static '$gtype': GObject.GType<SoundPlayer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.SoundPlayer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.SoundPlayer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.SoundPlayer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.SoundPlayer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Plays a sound from a file.
         *
         * @param file file to play
         * @param description description of the played sound
         * @param cancellable cancellable for the request
         */
        play_from_file(file: Gio.File, description: string, cancellable?: Gio.Cancellable | null): void;
        /**
         * Plays a sound from the sound theme.
         *
         * @param name sound theme name of the event
         * @param description description of the event
         * @param cancellable cancellable for the request
         */
        play_from_theme(name: string, description: string, cancellable?: Gio.Cancellable | null): void;
    }
    class Stage extends ClutterClasses.Stage implements Atk.ImplementorIface, Clutter.Animatable {
        static '$gtype': GObject.GType<Stage>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Stage.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Stage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Stage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Stage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Stage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Stage.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Inherited methods
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
    class StartupNotification extends GObjectClasses.Object {
        static '$gtype': GObject.GType<StartupNotification>;
        // Properties
        get display(): Meta.Display;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.StartupNotification.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.StartupNotification.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.StartupNotification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.StartupNotification.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.StartupNotification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.StartupNotification.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.StartupNotification.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.StartupNotification.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Creates an app launch context.
         *
         * @returns a launch context.
         */
        create_launcher(): Meta.LaunchContext;
        /**
         * Get the list of startup sequences arrived in the startup notification object.
         *
         * @returns a #GSList of
         * #MetaStartupSequence in the #MetaStartupNotification.
         */
        get_sequences(): Meta.StartupSequence[];
    }
    class StartupSequence extends GObjectClasses.Object {
        static '$gtype': GObject.GType<StartupSequence>;
        // Properties
        get application_id(): string;
        get applicationId(): string;
        get display(): Meta.Display;
        get icon_name(): string;
        get iconName(): string;
        get id(): string;
        get name(): string;
        get timestamp(): number;
        get wmclass(): string;
        get workspace(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.StartupSequence.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.StartupSequence.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.StartupSequence.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.StartupSequence.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.StartupSequence.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.StartupSequence.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.StartupSequence.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.StartupSequence.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        complete(): void;
        /**
         * Get the application id of the startup sequence.
         *
         * @returns the application id or %NULL.
         */
        get_application_id(): string | null;
        get_completed(): boolean;
        /**
         * Get the icon name of the startup sequence.
         *
         * @returns the icon name or %NULL.
         */
        get_icon_name(): string | null;
        get_id(): string;
        get_name(): string;
        get_timestamp(): number;
        /**
         * Get the wmclass of the startup sequence.
         *
         * @returns the wmclass or %NULL.
         */
        get_wmclass(): string | null;
        get_workspace(): number;
    }
    class WaylandClient extends GObjectClasses.Object {
        static '$gtype': GObject.GType<WaylandClient>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.WaylandClient.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.WaylandClient.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_subprocess(
            context: Meta.Context,
            launcher: Gio.SubprocessLauncher,
            argv: string[],
        ): Meta.WaylandClient;
        // Signals
        connect<K extends keyof Meta.WaylandClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WaylandClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.WaylandClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WaylandClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.WaylandClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.WaylandClient.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_pid(): number;
        /**
         * Get the #GSubprocess which was created by meta_wayland_client_new_subprocess.
         *
         * @returns The #GSubprocess
         */
        get_subprocess(): Gio.Subprocess;
        /**
         * Checks whether `window` belongs to the process launched from `client` or not.
         * This only works under Wayland. If the window is an X11 window, an exception
         * will be triggered.
         *
         * @returns TRUE if the window was created by this process; FALSE if not.
         * @param window a MetaWindow
         */
        owns_window(window: Meta.Window): boolean;
    }
    class WaylandCompositor extends GObjectClasses.Object {
        static '$gtype': GObject.GType<WaylandCompositor>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.WaylandCompositor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.WaylandCompositor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.WaylandCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WaylandCompositor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.WaylandCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WaylandCompositor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.WaylandCompositor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.WaylandCompositor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_wayland_display(): any | null;
    }
    class WaylandSurface extends GObjectClasses.Object {
        static '$gtype': GObject.GType<WaylandSurface>;
        // Properties
        get main_monitor(): Meta.LogicalMonitor;
        set main_monitor(val: Meta.LogicalMonitor);
        get mainMonitor(): Meta.LogicalMonitor;
        set mainMonitor(val: Meta.LogicalMonitor);
        get window(): Meta.Window;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.WaylandSurface.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.WaylandSurface.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.WaylandSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WaylandSurface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.WaylandSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WaylandSurface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.WaylandSurface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.WaylandSurface.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Get the #MetaWindow associated with this wayland surface.
         *
         * @returns a #MetaWindow
         */
        get_window(): Meta.Window | null;
    }
    abstract class Window extends GObjectClasses.Object implements Gio.Initable {
        static '$gtype': GObject.GType<Window>;
        // Properties
        get above(): boolean;
        get appears_focused(): boolean;
        get appearsFocused(): boolean;
        get decorated(): boolean;
        get demands_attention(): boolean;
        get demandsAttention(): boolean;
        get display(): Meta.Display;
        get effect(): number;
        get fullscreen(): boolean;
        get gtk_app_menu_object_path(): string;
        get gtkAppMenuObjectPath(): string;
        get gtk_application_id(): string;
        get gtkApplicationId(): string;
        get gtk_application_object_path(): string;
        get gtkApplicationObjectPath(): string;
        get gtk_menubar_object_path(): string;
        get gtkMenubarObjectPath(): string;
        get gtk_unique_bus_name(): string;
        get gtkUniqueBusName(): string;
        get gtk_window_object_path(): string;
        get gtkWindowObjectPath(): string;
        get is_alive(): boolean;
        get isAlive(): boolean;
        get main_monitor(): Meta.LogicalMonitor;
        get mainMonitor(): Meta.LogicalMonitor;
        get mapped(): boolean;
        get maximized_horizontally(): boolean;
        get maximizedHorizontally(): boolean;
        get maximized_vertically(): boolean;
        get maximizedVertically(): boolean;
        get minimized(): boolean;
        get mutter_hints(): string;
        get mutterHints(): string;
        get on_all_workspaces(): boolean;
        get onAllWorkspaces(): boolean;
        get resizeable(): boolean;
        get skip_taskbar(): boolean;
        get skipTaskbar(): boolean;
        get tag(): string;
        get title(): string;
        get urgent(): boolean;
        get user_time(): number;
        get userTime(): number;
        get window_type(): Meta.WindowType;
        get windowType(): Meta.WindowType;
        get wm_class(): string;
        get wmClass(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Window.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Window.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Window.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Window.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Window.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Window.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        activate(current_time: number): void;
        activate_with_workspace(current_time: number, workspace: Meta.Workspace): void;
        allows_move(): boolean;
        allows_resize(): boolean;
        begin_grab_op(
            op: Meta.GrabOp | null,
            sprite: Clutter.Sprite | null,
            timestamp: number,
            pos_hint?: Graphene.Point | null,
        ): boolean;
        can_close(): boolean;
        can_maximize(): boolean;
        can_minimize(): boolean;
        change_workspace(workspace: Meta.Workspace): void;
        change_workspace_by_index(space_index: number, append: boolean): void;
        check_alive(timestamp: number): void;
        /**
         * Converts a desired bounds of the client window into the corresponding bounds
         * of the window frame (excluding invisible borders and client side shadows.)
         *
         * @param client_rect client rectangle in root coordinates
         */
        client_rect_to_frame_rect(client_rect: Mtk.Rectangle): [Mtk.Rectangle];
        delete(timestamp: number): void;
        /**
         * Follow the chain of parents of `window,` skipping transient windows,
         * and return the "root" window which has no non-transient parent.
         *
         * @returns The root ancestor window
         */
        find_root_ancestor(): Meta.Window;
        focus(timestamp: number): void;
        /**
         * If `window` is transient, call `func` with the window for which it's transient,
         * repeatedly until either we find a non-transient window, or `func` returns %FALSE.
         *
         * @param func Called for each window which is a transient parent of `window`
         */
        foreach_ancestor(func: Meta.WindowForeachFunc): void;
        /**
         * Call `func` for every window which is either transient for `window,` or is
         * a transient of a window which is in turn transient for `window`.
         * The order of window enumeration is not defined.
         *
         * Iteration will stop if `func` at any point returns %FALSE.
         *
         * @param func Called for each window which is a transient of `window` (transitively)
         */
        foreach_transient(func: Meta.WindowForeachFunc): void;
        /**
         * Converts a desired frame bounds for a window into the bounds of the client
         * window.
         *
         * @param frame_rect desired frame bounds for the window
         */
        frame_rect_to_client_rect(frame_rect: Mtk.Rectangle): [Mtk.Rectangle];
        /**
         * Gets the rectangle that the pixmap or buffer of `window` occupies.
         *
         * For X11 windows, this is the server-side geometry of the toplevel
         * window.
         *
         * For Wayland windows, this is the bounding rectangle of the attached
         * buffer.
         */
        get_buffer_rect(): [Mtk.Rectangle];
        /**
         * Gets the client rectangle that ATSPI window coordinates
         * are relative to.
         */
        get_client_content_rect(): [Mtk.Rectangle];
        /**
         * Returns the #MetaWindowClientType of the window.
         *
         * @returns The root ancestor window
         */
        get_client_type(): Meta.WindowClientType;
        /**
         * Gets the compositor's wrapper object for `window`.
         *
         * @returns the wrapper object.
         */
        get_compositor_private<T = GObject.Object>(): T;
        get_description(): string;
        get_display(): Meta.Display;
        /**
         * Gets the rectangle that bounds `window` that is what the user thinks of
         * as the edge of the window.
         *
         * This doesn't include any extra reactive area that we or the client
         * adds to the window, or any area that the client adds to draw a client-side shadow.
         */
        get_frame_rect(): [Mtk.Rectangle];
        /**
         * Gets the type of window decorations that should be used for this window.
         *
         * @returns the frame type
         */
        get_frame_type(): Meta.FrameType;
        get_gtk_app_menu_object_path(): string | null;
        get_gtk_application_id(): string | null;
        get_gtk_application_object_path(): string | null;
        get_gtk_menubar_object_path(): string | null;
        get_gtk_theme_variant(): string | null;
        get_gtk_unique_bus_name(): string | null;
        get_gtk_window_object_path(): string | null;
        /**
         * Gets the location of the icon corresponding to the window.
         *
         * The location will be provided set by the task bar or other user interface
         * element displaying the icon, and is relative to the root window.
         *
         * @returns %TRUE if the icon geometry was successfully retrieved.
         */
        get_icon_geometry(): [boolean, Mtk.Rectangle];
        /**
         * Returns the window id associated with window.
         *
         * @returns The window id
         */
        get_id(): number;
        get_layer(): Meta.StackLayer;
        /**
         * Gets the current maximization state of the window, as combination
         * of the %META_MAXIMIZE_HORIZONTAL and %META_MAXIMIZE_VERTICAL flags;
         *
         * @returns current maximization state
         */
        get_maximize_flags(): Meta.MaximizeFlags;
        /**
         * Gets index of the monitor that this window is on.
         *
         * @returns The index of the monitor in the screens monitor list, or -1
         * if the window has been recently unmanaged and does not have a monitor.
         */
        get_monitor(): number;
        /**
         * Gets the current value of the _MUTTER_HINTS property.
         *
         * The purpose of the hints is to allow fine-tuning of the Window Manager and
         * Compositor behaviour on per-window basis, and is intended primarily for
         * hints that are plugin-specific.
         *
         * The property is a list of colon-separated key=value pairs. The key names for
         * any plugin-specific hints must be suitably namespaced to allow for shared
         * use; 'mutter-' key prefix is reserved for internal use, and must not be used
         * by plugins.
         *
         * @returns the _MUTTER_HINTS string, or %NULL if no
         * hints are set.
         */
        get_mutter_hints(): string | null;
        /**
         * Returns the pid of the process that created this window, if available
         * to the windowing system.
         *
         * Note that the value returned by this is vulnerable to spoofing attacks
         * by the client.
         *
         * @returns the pid, or 0 if not known.
         */
        get_pid(): number;
        get_role(): string;
        /**
         * Gets an unique id for a sandboxed app (currently flatpaks and snaps are
         * supported).
         *
         * @returns the sandboxed application ID or %NULL
         */
        get_sandboxed_app_id(): string | null;
        /**
         * The stable sequence number is a monotonicially increasing
         * unique integer assigned to each #MetaWindow upon creation.
         *
         * This number can be useful for sorting windows in a stable
         * fashion.
         *
         * @returns Internal sequence number for this window
         */
        get_stable_sequence(): number;
        /**
         * Gets the startup id of the given #MetaWindow
         *
         * @returns the startup id
         */
        get_startup_id(): string | null;
        /**
         * Get a tag associated to the window.
         * Under wayland the tag can be set using the toplevel tag protocol,
         * and under x11 it falls back to using `NET_WM_WINDOW_TAG` atom.
         *
         * @returns An associated toplevel tag
         */
        get_tag(): string | null;
        /**
         * Returns the matching tiled window on the same monitor as `window`. This is
         * the topmost tiled window in a complementary tile mode that is:
         *
         *  - on the same monitor;
         *  - on the same workspace;
         *  - spanning the remaining monitor width;
         *  - there is no 3rd window stacked between both tiled windows that's
         *    partially visible in the common edge.
         *
         * @returns the matching tiled window or
         * %NULL if it doesn't exist.
         */
        get_tile_match(): Meta.Window | null;
        get_title(): string;
        /**
         * Returns the #MetaWindow for the window that is pointed to by the
         * WM_TRANSIENT_FOR hint on this window (see XGetTransientForHint()
         * or XSetTransientForHint()). Mutter keeps transient windows above their
         * parents. A typical usage of this hint is for a dialog that wants to stay
         * above its associated window.
         *
         * @returns the window this window is transient for,
         * or %NULL if the WM_TRANSIENT_FOR hint is unset or does not point to a
         * toplevel window that Mutter knows about.
         */
        get_transient_for(): Meta.Window | null;
        /**
         * The user time represents a timestamp for the last time the user
         * interacted with this window.
         *
         * Note this property is only available for non-override-redirect windows.
         *
         * The property is set by Mutter initially upon window creation,
         * and updated thereafter on input events (key and button presses) seen by Mutter,
         * client updates to the _NET_WM_USER_TIME property (if later than the current time)
         * and when focusing the window.
         *
         * @returns The last time the user interacted with this window.
         */
        get_user_time(): number;
        get_window_type(): Meta.WindowType;
        /**
         * Return the current value of the name part of `WM_CLASS` X property.
         *
         * @returns the current value of the name part of `WM_CLASS` X
         * property
         */
        get_wm_class(): string | null;
        /**
         * Return the current value of the instance part of `WM_CLASS` X property.
         *
         * @returns the current value of the instance part of `WM_CLASS` X
         * property.
         */
        get_wm_class_instance(): string | null;
        /**
         * Get the work area for all monitors for `window`.
         */
        get_work_area_all_monitors(): [Mtk.Rectangle];
        /**
         * Get the work area for the monitor `window` is currently on.
         */
        get_work_area_current_monitor(): [Mtk.Rectangle];
        /**
         * Get the work area for `window,` given the monitor index
         * `which_monitor`.
         *
         * @param which_monitor a moniotr to get the work area for
         */
        get_work_area_for_monitor(which_monitor: number): [Mtk.Rectangle];
        /**
         * Gets the [class`Meta`.Workspace] that the window is currently displayed on.
         *
         * If the window is on all workspaces, returns the currently active
         * workspace.
         *
         * @returns the #MetaWorkspace for the window
         */
        get_workspace(): Meta.Workspace;
        /**
         * Tests if `window` has any transients attached to it.
         *
         * If the `attach_modal_dialogs` option is not enabled, this will
         * always return %FALSE.
         *
         * @returns whether `window` has attached transients
         */
        has_attached_dialogs(): boolean;
        has_focus(): boolean;
        has_pointer(): boolean;
        /**
         * Hides this window from any window list, like taskbars, pagers...
         */
        hide_from_window_list(): void;
        is_above(): boolean;
        is_always_on_all_workspaces(): boolean;
        /**
         * The function determines whether `window` is an ancestor of `transient;` it does
         * so by traversing the `transient'`s ancestors until it either locates `window`
         * or reaches an ancestor that is not transient.
         *
         * @returns %TRUE if window is an ancestor of transient.
         * @param _transient a #MetaWindow
         */
        is_ancestor_of_transient(_transient: Meta.Window): boolean;
        /**
         * Tests if `window` should be attached to its parent window.
         *
         * If the `attach_modal_dialogs` option is not enabled, this will
         * always return %FALSE.
         *
         * @returns whether `window` should be attached to its parent
         */
        is_attached_dialog(): boolean;
        is_fullscreen(): boolean;
        is_hidden(): boolean;
        is_maximized(): boolean;
        is_monitor_sized(): boolean;
        is_on_all_workspaces(): boolean;
        is_on_primary_monitor(): boolean;
        is_override_redirect(): boolean;
        is_remote(): boolean;
        is_screen_sized(): boolean;
        /**
         * Gets whether this window should be ignored by task lists.
         *
         * @returns %TRUE if the skip bar hint is set.
         */
        is_skip_taskbar(): boolean;
        kill(): void;
        located_on_workspace(workspace: Meta.Workspace): boolean;
        lower(): void;
        lower_with_transients(timestamp: number): void;
        make_above(): void;
        make_fullscreen(): void;
        maximize(): void;
        minimize(): void;
        /**
         * Moves the window to the desired location on window's assigned
         * workspace, using the northwest edge of the frame as the reference,
         * instead of the actual window's origin, but only if a frame is present.
         *
         * Otherwise, acts identically to meta_window_move().
         *
         * @param user_op bool to indicate whether or not this is a user operation
         * @param root_x_nw desired x pos
         * @param root_y_nw desired y pos
         */
        move_frame(user_op: boolean, root_x_nw: number, root_y_nw: number): void;
        /**
         * Resizes the window so that its outer bounds (including frame)
         * fit within the given rect
         *
         * @param user_op bool to indicate whether or not this is a user operation
         * @param root_x_nw new x
         * @param root_y_nw new y
         * @param w desired width
         * @param h desired height
         */
        move_resize_frame(user_op: boolean, root_x_nw: number, root_y_nw: number, w: number, h: number): void;
        /**
         * Moves the window to the monitor with index `monitor,` keeping
         * the relative position of the window's top left corner.
         *
         * @param monitor desired monitor index
         */
        move_to_monitor(monitor: number): void;
        /**
         * Transform the coordinates from protocol coordinates to coordinates expected
         * by the stage and internal window management logic.
         *
         * @param protocol_rect rectangle in protocol coordinate space
         */
        protocol_to_stage_rect(protocol_rect: Mtk.Rectangle): [Mtk.Rectangle];
        raise(): void;
        /**
         * Raises a window and marks it as the most recently used window on the
         * workspace `target_workspace`. If the window exists on all workspaces, it will
         * become the most recently used sticky window on all other workspaces. This
         * ensures proper tracking among windows on all workspaces while not overriding
         * MRU for other windows.
         *
         * @param workspace the #MetaWorkspace to raise and make it most recent on
         */
        raise_and_make_recent_on_workspace(workspace: Meta.Workspace): void;
        set_compositor_private(priv: GObject.Object): void;
        set_demands_attention(): void;
        /**
         * Sets or unsets the location of the icon corresponding to the window.
         *
         * If set, the location should correspond to a dock, task bar or other user
         * interface element displaying the icon, and is relative to the root window.
         *
         * @param rect rectangle with the desired geometry or %NULL.
         */
        set_icon_geometry(rect?: Mtk.Rectangle | null): void;
        set_maximize_flags(directions: Meta.MaximizeFlags | null): void;
        /**
         * Set the window type
         *
         * @param type The #MetaWindowType
         */
        set_type(type: Meta.WindowType | null): void;
        set_unmaximize_flags(directions: Meta.MaximizeFlags | null): void;
        /**
         * Shows again this window in window lists, like taskbars, pagers...
         */
        show_in_window_list(): void;
        showing_on_its_workspace(): boolean;
        /**
         * Transform the coordinates from stage coordinates to protocol coordinates
         *
         * @param stage_rect x #MtkRectangle in stage coordinate space
         */
        stage_to_protocol_rect(stage_rect: Mtk.Rectangle): [Mtk.Rectangle];
        stick(): void;
        unmake_above(): void;
        unmake_fullscreen(): void;
        unmaximize(): void;
        unminimize(): void;
        unset_demands_attention(): void;
        unstick(): void;
        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         *
         * @returns %TRUE if successful. If an error has occurred, this function will
         *     return %FALSE and set `error` appropriately if present.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         *
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
    abstract class WindowActor extends ClutterClasses.Actor implements Atk.ImplementorIface, Clutter.Animatable {
        static '$gtype': GObject.GType<WindowActor>;
        // Properties
        get meta_window(): Meta.Window;
        get metaWindow(): Meta.Window;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.WindowActor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.WindowActor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.WindowActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WindowActor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.WindowActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WindowActor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.WindowActor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.WindowActor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Freezes the #MetaWindowActor, which inhibits updates and geometry
         * changes of the window. This property is refcounted, so make sure
         * to call meta_window_actor_thaw() the exact same amount of times
         * as this function to allow updates again.
         */
        freeze(): void;
        /**
         * Flattens the layers of `self` into one ARGB32 image by alpha blending
         * the images, and returns the flattened image.
         *
         * @returns a new cairo surface to be freed with
         * cairo_surface_destroy().
         * @param clip A clipping rectangle, to help prevent extra processing.
         * In the case that the clipping rectangle is partially or fully
         * outside the bounds of the actor, the rectangle will be clipped.
         */
        get_image(clip?: Mtk.Rectangle | null): cairo.Surface | null;
        /**
         * Gets the #MetaWindow object that the the #MetaWindowActor is displaying
         *
         * @returns the displayed #MetaWindow
         */
        get_meta_window(): Meta.Window | null;
        /**
         * Gets the ClutterActor that is used to display the contents of the window,
         * or NULL if no texture is shown yet, because the window is not mapped.
         *
         * @returns the #ClutterActor for the contents
         */
        get_texture(): Meta.ShapedTexture | null;
        /**
         * Gets whether the X window that the actor was displaying has been destroyed
         *
         * @returns %TRUE when the window is destroyed, otherwise %FALSE
         */
        is_destroyed(): boolean;
        paint_to_content(clip?: Mtk.Rectangle | null): Clutter.Content | null;
        sync_visibility(): void;
        /**
         * Thaws/unfreezes the #MetaWindowActor to allow updates and geometry
         * changes after a window was frozen using meta_window_actor_freeze().
         */
        thaw(): void;
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
    class WindowConfig extends GObjectClasses.Object {
        static '$gtype': GObject.GType<WindowConfig>;
        // Properties
        get is_fullscreen(): boolean;
        set is_fullscreen(val: boolean);
        get isFullscreen(): boolean;
        set isFullscreen(val: boolean);
        get rect(): Mtk.Rectangle;
        set rect(val: Mtk.Rectangle);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.WindowConfig.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.WindowConfig.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Meta.WindowConfig;
        // Signals
        connect<K extends keyof Meta.WindowConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WindowConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.WindowConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WindowConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.WindowConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.WindowConfig.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_is_fullscreen(): boolean;
        get_is_initial(): boolean;
        get_position(x: number, y: number): void;
        get_rect(): Mtk.Rectangle;
        get_size(width: number, height: number): void;
        set_is_fullscreen(is_fullscreen: boolean): void;
        set_position(x: number, y: number): void;
        set_rect(rect: Mtk.Rectangle): void;
        set_size(width: number, height: number): void;
    }
    class WindowGroup extends ClutterClasses.Actor implements Atk.ImplementorIface, Clutter.Animatable {
        static '$gtype': GObject.GType<WindowGroup>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.WindowGroup.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.WindowGroup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.WindowGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WindowGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.WindowGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WindowGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.WindowGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.WindowGroup.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
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
    class Workspace extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Workspace>;
        // Properties
        get active(): boolean;
        get n_windows(): number;
        get nWindows(): number;
        get workspace_index(): number;
        get workspaceIndex(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.Workspace.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.Workspace.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.Workspace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Workspace.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.Workspace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.Workspace.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.Workspace.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.Workspace.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        activate(timestamp: number): void;
        /**
         * Switches to `workspace` and possibly activates the window `focus_this`.
         *
         * The window `focus_this` is activated by calling meta_window_activate()
         * which will unminimize it and transient parents, raise it and give it
         * the focus.
         *
         * If a window is currently being moved by the user, it will be
         * moved to `workspace`.
         *
         * The advantage of calling this function instead of meta_workspace_activate()
         * followed by meta_window_activate() is that it happens as a unit, so
         * no other window gets focused first before `focus_this`.
         *
         * @param focus_this the #MetaWindow to be focused, or %NULL
         * @param timestamp timestamp for `focus_this`
         */
        activate_with_focus(focus_this: Meta.Window, timestamp: number): void;
        /**
         * Gets the #MetaDisplay that the workspace is part of.
         *
         * @returns the #MetaDisplay for the workspace
         */
        get_display(): Meta.Display;
        /**
         * Calculate and retrieve the workspace that is next to `workspace,`
         * according to `direction` and the current workspace layout, as set
         * by meta_screen_override_workspace_layout().
         *
         * @returns the workspace next to `workspace,` or
         *   `workspace` itself if the neighbor would be outside the layout
         * @param direction a #MetaMotionDirection, relative to `workspace`
         */
        get_neighbor(direction: Meta.MotionDirection | null): Meta.Workspace;
        /**
         * Stores the work area in `area`.
         */
        get_work_area_all_monitors(): [Mtk.Rectangle];
        /**
         * Stores the work area for `which_monitor` on `workspace`
         * in `area`.
         *
         * @param which_monitor a monitor index
         */
        get_work_area_for_monitor(which_monitor: number): [Mtk.Rectangle];
        index(): number;
        /**
         * Gets windows contained on the workspace, including workspace->windows
         * and also sticky windows. Override-redirect windows are not included.
         *
         * @returns the list of windows.
         */
        list_windows(): Meta.Window[];
        /**
         * Sets a list of struts that will be used in addition to the struts
         * of the windows in the workspace when computing the work area of
         * the workspace.
         *
         * @param struts list of #MetaStrut
         */
        set_builtin_struts(struts: Meta.Strut[]): void;
    }
    class WorkspaceManager extends GObjectClasses.Object {
        static '$gtype': GObject.GType<WorkspaceManager>;
        // Properties
        get layout_columns(): number;
        get layoutColumns(): number;
        get layout_rows(): number;
        get layoutRows(): number;
        get n_workspaces(): number;
        get nWorkspaces(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.WorkspaceManager.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.WorkspaceManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.WorkspaceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WorkspaceManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.WorkspaceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.WorkspaceManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.WorkspaceManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.WorkspaceManager.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Append a new workspace to the workspace manager and (optionally) switch to that
         * display.
         *
         * @returns the newly appended workspace.
         * @param activate %TRUE if the workspace should be switched to after creation
         * @param timestamp if switching to a new workspace, timestamp to be used when
         *   focusing a window on the new workspace. (Doesn't hurt to pass a valid
         *   timestamp when available even if not switching workspaces.)
         */
        append_new_workspace(activate: boolean, timestamp: number): Meta.Workspace;
        get_active_workspace(): Meta.Workspace;
        get_active_workspace_index(): number;
        get_layout_columns(): number;
        get_layout_rows(): number;
        get_n_workspaces(): number;
        /**
         * Gets the workspace object for one of a workspace manager's workspaces given the workspace
         * index. It's valid to call this function with an out-of-range index and it
         * will robustly return %NULL.
         *
         * @returns the workspace object with specified
         *   index, or %NULL if the index is out of range.
         * @param index index of one of the display's workspaces
         */
        get_workspace_by_index(index: number): Meta.Workspace | null;
        /**
         * Explicitly set the layout of workspaces. Once this has been called, the contents of the
         * _NET_DESKTOP_LAYOUT property on the root window are completely ignored.
         *
         * @param starting_corner the corner at which the first workspace is found
         * @param vertical_layout if %TRUE the workspaces are laid out in columns rather than rows
         * @param n_rows number of rows of workspaces, or -1 to determine the number of rows from
         *   `n_columns` and the total number of workspaces
         * @param n_columns number of columns of workspaces, or -1 to determine the number of columns from
         *   `n_rows` and the total number of workspaces
         */
        override_workspace_layout(
            starting_corner: Meta.DisplayCorner | null,
            vertical_layout: boolean,
            n_rows: number,
            n_columns: number,
        ): void;
        remove_workspace(workspace: Meta.Workspace, timestamp: number): void;
        /**
         * Reorder a workspace to a new index. If the workspace is currently active
         * the "active-workspace-changed" signal will be emitted.
         * If the workspace's index is the same as `new_index` or the workspace
         * will not be found in the list, this function will return.
         *
         * Calling this function will also emit the "workspaces-reordered" signal.
         *
         * @param workspace a #MetaWorkspace to reorder
         * @param new_index the new index of the passed workspace
         */
        reorder_workspace(workspace: Meta.Workspace, new_index: number): void;
    }
    class X11Display extends GObjectClasses.Object {
        static '$gtype': GObject.GType<X11Display>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Meta.X11Display.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Meta.X11Display.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Meta.X11Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.X11Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Meta.X11Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Meta.X11Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Meta.X11Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Meta.X11Display.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        lookup_xwindow(window: Meta.Window): xlib.Window;
        redirect_windows(display: Meta.Display): void;
    }
}
export default classes;
