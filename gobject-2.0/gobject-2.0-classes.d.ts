import type GObject from './gobject-2.0.d.ts';
import type GLib from '@girs/glib-2.0';
declare namespace classes {
    class Binding extends Object {
        static '$gtype': GObject.GType<Binding>;
        // Properties
        /**
         * Flags to be used to control the #GBinding
         */
        get flags(): GObject.BindingFlags;
        /**
         * The #GObject that should be used as the source of the binding
         */
        get source(): GObject.Object;
        /**
         * The name of the property of #GBinding:source that should be used
         * as the source of the binding.
         *
         * This should be in [canonical form][canonical-parameter-names] to get the
         * best performance.
         */
        get source_property(): string;
        /**
         * The name of the property of #GBinding:source that should be used
         * as the source of the binding.
         *
         * This should be in [canonical form][canonical-parameter-names] to get the
         * best performance.
         */
        get sourceProperty(): string;
        /**
         * The #GObject that should be used as the target of the binding
         */
        get target(): GObject.Object;
        /**
         * The name of the property of #GBinding:target that should be used
         * as the target of the binding.
         *
         * This should be in [canonical form][canonical-parameter-names] to get the
         * best performance.
         */
        get target_property(): string;
        /**
         * The name of the property of #GBinding:target that should be used
         * as the target of the binding.
         *
         * This should be in [canonical form][canonical-parameter-names] to get the
         * best performance.
         */
        get targetProperty(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GObject.Binding.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GObject.Binding.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof GObject.Binding.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.Binding.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GObject.Binding.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.Binding.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GObject.Binding.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GObject.Binding.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the #GObject instance used as the source of the binding.
         *
         * A #GBinding can outlive the source #GObject as the binding does not hold a
         * strong reference to the source. If the source is destroyed before the
         * binding then this function will return %NULL.
         *
         * @returns the source #GObject, or %NULL if the
         *     source does not exist any more.
         */
        dup_source<T = GObject.Object>(): T;
        /**
         * Retrieves the #GObject instance used as the target of the binding.
         *
         * A #GBinding can outlive the target #GObject as the binding does not hold a
         * strong reference to the target. If the target is destroyed before the
         * binding then this function will return %NULL.
         *
         * @returns the target #GObject, or %NULL if the
         *     target does not exist any more.
         */
        dup_target<T = GObject.Object>(): T;
        /**
         * Retrieves the flags passed when constructing the #GBinding.
         *
         * @returns the #GBindingFlags used by the #GBinding
         */
        get_flags(): GObject.BindingFlags;
        /**
         * Retrieves the #GObject instance used as the source of the binding.
         *
         * A #GBinding can outlive the source #GObject as the binding does not hold a
         * strong reference to the source. If the source is destroyed before the
         * binding then this function will return %NULL.
         *
         * Use g_binding_dup_source() if the source or binding are used from different
         * threads as otherwise the pointer returned from this function might become
         * invalid if the source is finalized from another thread in the meantime.
         *
         * @returns the source #GObject, or %NULL if the
         *     source does not exist any more.
         */
        get_source<T = GObject.Object>(): T;
        /**
         * Retrieves the name of the property of #GBinding:source used as the source
         * of the binding.
         *
         * @returns the name of the source property
         */
        get_source_property(): string;
        /**
         * Retrieves the #GObject instance used as the target of the binding.
         *
         * A #GBinding can outlive the target #GObject as the binding does not hold a
         * strong reference to the target. If the target is destroyed before the
         * binding then this function will return %NULL.
         *
         * Use g_binding_dup_target() if the target or binding are used from different
         * threads as otherwise the pointer returned from this function might become
         * invalid if the target is finalized from another thread in the meantime.
         *
         * @returns the target #GObject, or %NULL if the
         *     target does not exist any more.
         */
        get_target<T = GObject.Object>(): T;
        /**
         * Retrieves the name of the property of #GBinding:target used as the target
         * of the binding.
         *
         * @returns the name of the target property
         */
        get_target_property(): string;
        /**
         * Explicitly releases the binding between the source and the target
         * property expressed by `binding`.
         *
         * This function will release the reference that is being held on
         * the `binding` instance if the binding is still bound; if you want to hold on
         * to the #GBinding instance after calling g_binding_unbind(), you will need
         * to hold a reference to it.
         *
         * Note however that this function does not take ownership of `binding,` it
         * only unrefs the reference that was initially created by
         * g_object_bind_property() and is owned by the binding.
         */
        unbind(): void;
    }
    class BindingGroup extends Object {
        static '$gtype': GObject.GType<BindingGroup>;
        // Properties
        /**
         * The source object used for binding properties.
         */
        get source(): GObject.Object;
        set source(val: GObject.Object);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GObject.BindingGroup.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GObject.BindingGroup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): GObject.BindingGroup;
        // Signals
        connect<K extends keyof GObject.BindingGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.BindingGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GObject.BindingGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.BindingGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GObject.BindingGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GObject.BindingGroup.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Creates a binding between `source_property` on the source object
         * and `target_property` on `target`. Whenever the `source_property`
         * is changed the `target_property` is updated using the same value.
         * The binding flag %G_BINDING_SYNC_CREATE is automatically specified.
         *
         * See g_object_bind_property() for more information.
         *
         * @param source_property the property on the source to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags the flags used to create the #GBinding
         */
        bind(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): void;
        /**
         * Creates a binding between `source_property` on the source object and
         * `target_property` on `target,` allowing you to set the transformation
         * functions to be used by the binding. The binding flag
         * %G_BINDING_SYNC_CREATE is automatically specified.
         *
         * See g_object_bind_property_full() for more information.
         *
         * @param source_property the property on the source to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags the flags used to create the #GBinding
         * @param transform_to the transformation function
         *     from the source object to the `target,` or %NULL to use the default
         * @param transform_from the transformation function
         *     from the `target` to the source object, or %NULL to use the default
         */
        bind_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
        ): void;
        /**
         * Creates a binding between `source_property` on the source object and
         * `target_property` on `target,` allowing you to set the transformation
         * functions to be used by the binding. The binding flag
         * %G_BINDING_SYNC_CREATE is automatically specified.
         *
         * This function is the language bindings friendly version of
         * g_binding_group_bind_property_full(), using #GClosures
         * instead of function pointers.
         *
         * See g_object_bind_property_with_closures() for more information.
         *
         * @param source_property the property on the source to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags the flags used to create the #GBinding
         * @param transform_to a #GClosure wrapping the
         *     transformation function from the source object to the `target,`
         *     or %NULL to use the default
         * @param transform_from a #GClosure wrapping the
         *     transformation function from the `target` to the source object,
         *     or %NULL to use the default
         */
        bind_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.Closure | null,
            transform_from?: GObject.Closure | null,
        ): void;
        /**
         * Gets the source object used for binding properties.
         *
         * @returns a #GObject or %NULL.
         */
        dup_source<T = GObject.Object>(): T;
        /**
         * Sets `source` as the source object used for creating property
         * bindings. If there is already a source object all bindings from it
         * will be removed.
         *
         * Note that all properties that have been bound must exist on `source`.
         *
         * @param source the source #GObject,
         *   or %NULL to clear it
         */
        set_source(source?: GObject.Object | null): void;
    }
    class InitiallyUnowned extends Object {
        static '$gtype': GObject.GType<InitiallyUnowned>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GObject.InitiallyUnowned.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GObject.InitiallyUnowned.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof GObject.InitiallyUnowned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.InitiallyUnowned.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GObject.InitiallyUnowned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.InitiallyUnowned.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GObject.InitiallyUnowned.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GObject.InitiallyUnowned.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class Object {
        static '$gtype': GObject.GType<Object>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GObject.Object.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GObject.Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static newv(object_type: GObject.GType, parameters: GObject.Parameter[]): GObject.Object;
        // Signals
        connect<K extends keyof GObject.Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GObject.Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GObject.Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GObject.Object.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        static compat_control(what: number, data?: any | null): number;
        /**
         * Find the #GParamSpec with the given name for an
         * interface. Generally, the interface vtable passed in as `g_iface`
         * will be the default vtable from g_type_default_interface_ref(), or,
         * if you know the interface has already been loaded,
         * g_type_default_interface_peek().
         *
         * @param g_iface any interface vtable for the
         *  interface, or the default vtable for the interface
         * @param property_name name of a property to look up.
         */
        static interface_find_property(g_iface: GObject.TypeInterface, property_name: string): GObject.ParamSpec;
        /**
         * Add a property to an interface; this is only useful for interfaces
         * that are added to GObject-derived types. Adding a property to an
         * interface forces all objects classes with that interface to have a
         * compatible property. The compatible property could be a newly
         * created #GParamSpec, but normally
         * g_object_class_override_property() will be used so that the object
         * class only needs to provide an implementation and inherits the
         * property description, default value, bounds, and so forth from the
         * interface property.
         *
         * This function is meant to be called from the interface's default
         * vtable initialization function (the `class_init` member of
         * #GTypeInfo.) It must not be called after after `class_init` has
         * been called for any object types implementing this interface.
         *
         * If `pspec` is a floating reference, it will be consumed.
         *
         * @param g_iface any interface vtable for the
         *    interface, or the default
         *  vtable for the interface.
         * @param pspec the #GParamSpec for the new property
         */
        static interface_install_property(g_iface: GObject.TypeInterface, pspec: GObject.ParamSpec): void;
        /**
         * Lists the properties of an interface.Generally, the interface
         * vtable passed in as `g_iface` will be the default vtable from
         * g_type_default_interface_ref(), or, if you know the interface has
         * already been loaded, g_type_default_interface_peek().
         *
         * @param g_iface any interface vtable for the
         *  interface, or the default vtable for the interface
         */
        static interface_list_properties(g_iface: GObject.TypeInterface): GObject.ParamSpec[];
        static find_property(property_name: string): GObject.ParamSpec;
        static install_properties(pspecs: GObject.ParamSpec[]): void;
        static install_property(property_id: number, pspec: GObject.ParamSpec): void;
        static list_properties(): GObject.ParamSpec[];
        static override_property(property_id: number, name: string): void;
        static _classInit(klass: any): any;
        // Virtual methods
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
        // Methods
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * This function is the language bindings friendly version of
         * g_object_bind_property_full(), using #GClosures instead of
         * function pointers.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to a #GClosure wrapping the transformation function
         *     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from a #GClosure wrapping the transformation function
         *     from the `target` to the `source,` or %NULL to use the default
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to: GObject.Closure | null,
            transform_from: GObject.Closure | null,
        ): GObject.Binding;
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
    class SignalGroup extends Object {
        static '$gtype': GObject.GType<SignalGroup>;
        // Properties
        /**
         * The target instance used when connecting signals.
         */
        get target(): GObject.Object;
        set target(val: GObject.Object);
        /**
         * The #GType of the target property.
         */
        get target_type(): GObject.GType;
        /**
         * The #GType of the target property.
         */
        get targetType(): GObject.GType;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GObject.SignalGroup.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GObject.SignalGroup.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(target_type: GObject.GType): GObject.SignalGroup;
        // Signals
        connect<K extends keyof GObject.SignalGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.SignalGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GObject.SignalGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.SignalGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GObject.SignalGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GObject.SignalGroup.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Blocks all signal handlers managed by `self` so they will not
         * be called during any signal emissions. Must be unblocked exactly
         * the same number of times it has been blocked to become active again.
         *
         * This blocked state will be kept across changes of the target instance.
         */
        block(): void;
        /**
         * Connects `closure` to the signal `detailed_signal` on #GSignalGroup:target.
         *
         * You cannot connect a signal handler after #GSignalGroup:target has been set.
         *
         * @param detailed_signal a string of the form `signal-name` with optional `::signal-detail`
         * @param closure the closure to connect.
         * @param after whether the handler should be called before or after the
         *  default handler of the signal.
         */
        connect_closure(detailed_signal: string, closure: GObject.Closure, after: boolean): void;
        /**
         * Connects `c_handler` to the signal `detailed_signal`
         * on the target instance of `self`.
         *
         * You cannot connect a signal handler after #GSignalGroup:target has been set.
         *
         * @param detailed_signal a string of the form "signal-name::detail"
         * @param c_handler the #GCallback to connect
         * @param notify function to be called when disposing of `self`
         * @param flags the flags used to create the signal connection
         */
        connect_data(
            detailed_signal: string,
            c_handler: GObject.Callback,
            notify: GObject.ClosureNotify,
            flags: GObject.ConnectFlags | null,
        ): void;
        /**
         * Connects `c_handler` to the signal `detailed_signal`
         * on the target instance of `self`.
         *
         * The instance on which the signal is emitted and `data`
         * will be swapped when calling `c_handler`.
         *
         * You cannot connect a signal handler after #GSignalGroup:target has been set.
         *
         * @param detailed_signal a string of the form "signal-name::detail"
         * @param c_handler the #GCallback to connect
         */
        connect_swapped(detailed_signal: string, c_handler: GObject.Callback): void;
        /**
         * Gets the target instance used when connecting signals.
         *
         * @returns The target instance
         */
        dup_target<T = GObject.Object>(): T;
        /**
         * Sets the target instance used when connecting signals. Any signal
         * that has been registered with g_signal_group_connect_object() or
         * similar functions will be connected to this object.
         *
         * If the target instance was previously set, signals will be
         * disconnected from that object prior to connecting to `target`.
         *
         * @param target The target instance used
         *     when connecting signals.
         */
        set_target(target?: GObject.Object | null): void;
        /**
         * Unblocks all signal handlers managed by `self` so they will be
         * called again during any signal emissions unless it is blocked
         * again. Must be unblocked exactly the same number of times it
         * has been blocked to become active again.
         */
        unblock(): void;
    }
    abstract class TypeModule extends Object implements GObject.TypePlugin {
        static '$gtype': GObject.GType<TypeModule>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GObject.TypeModule.SignalSignatures;
        // Fields
        use_count: number;
        type_infos: any[];
        interface_infos: any[];
        name: string;
        // Constructors
        constructor(properties?: Partial<GObject.TypeModule.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof GObject.TypeModule.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.TypeModule.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GObject.TypeModule.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GObject.TypeModule.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GObject.TypeModule.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GObject.TypeModule.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * loads the module and registers one or more types using
         *  g_type_module_register_type().
         */
        vfunc_load(): boolean;
        /**
         * unloads the module
         */
        vfunc_unload(): void;
        // Methods
        /**
         * Registers an additional interface for a type, whose interface lives
         * in the given type plugin. If the interface was already registered
         * for the type in this plugin, nothing will be done.
         *
         * As long as any instances of the type exist, the type plugin will
         * not be unloaded.
         *
         * Since 2.56 if `module` is %NULL this will call g_type_add_interface_static()
         * instead. This can be used when making a static build of the module.
         *
         * @param instance_type type to which to add the interface.
         * @param interface_type interface type to add
         * @param interface_info type information structure
         */
        add_interface(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            interface_info: GObject.InterfaceInfo,
        ): void;
        /**
         * Looks up or registers an enumeration that is implemented with a particular
         * type plugin. If a type with name `type_name` was previously registered,
         * the #GType identifier for the type is returned, otherwise the type
         * is newly registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type plugin will
         * not be unloaded.
         *
         * Since 2.56 if `module` is %NULL this will call g_type_register_static()
         * instead. This can be used when making a static build of the module.
         *
         * @returns the new or existing type ID
         * @param name name for the type
         * @param const_static_values an array of #GEnumValue structs for the
         *                       possible enumeration values. The array is
         *                       terminated by a struct with all members being
         *                       0.
         */
        register_enum(name: string, const_static_values: GObject.EnumValue): GObject.GType;
        /**
         * Looks up or registers a flags type that is implemented with a particular
         * type plugin. If a type with name `type_name` was previously registered,
         * the #GType identifier for the type is returned, otherwise the type
         * is newly registered, and the resulting #GType identifier returned.
         *
         * As long as any instances of the type exist, the type plugin will
         * not be unloaded.
         *
         * Since 2.56 if `module` is %NULL this will call g_type_register_static()
         * instead. This can be used when making a static build of the module.
         *
         * @returns the new or existing type ID
         * @param name name for the type
         * @param const_static_values an array of #GFlagsValue structs for the
         *                       possible flags values. The array is
         *                       terminated by a struct with all members being
         *                       0.
         */
        register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.GType;
        /**
         * Looks up or registers a type that is implemented with a particular
         * type plugin. If a type with name `type_name` was previously registered,
         * the #GType identifier for the type is returned, otherwise the type
         * is newly registered, and the resulting #GType identifier returned.
         *
         * When reregistering a type (typically because a module is unloaded
         * then reloaded, and reinitialized), `module` and `parent_type` must
         * be the same as they were previously.
         *
         * As long as any instances of the type exist, the type plugin will
         * not be unloaded.
         *
         * Since 2.56 if `module` is %NULL this will call g_type_register_static()
         * instead. This can be used when making a static build of the module.
         *
         * @returns the new or existing type ID
         * @param parent_type the type for the parent class
         * @param type_name name for the type
         * @param type_info type information structure
         * @param flags flags field providing details about the type
         */
        register_type(
            parent_type: GObject.GType,
            type_name: string,
            type_info: GObject.TypeInfo,
            flags: GObject.TypeFlags | null,
        ): GObject.GType;
        /**
         * Sets the name for a #GTypeModule
         *
         * @param name a human-readable name to use in error messages.
         */
        set_name(name: string): void;
        /**
         * Decreases the use count of a #GTypeModule by one. If the
         * result is zero, the module will be unloaded. (However, the
         * #GTypeModule will not be freed, and types associated with the
         * #GTypeModule are not unregistered. Once a #GTypeModule is
         * initialized, it must exist forever.)
         */
        unuse(): void;
        /**
         * Increases the use count of a #GTypeModule by one. If the
         * use count was zero before, the plugin will be loaded.
         * If loading the plugin fails, the use count is reset to
         * its prior value.
         *
         * @returns %FALSE if the plugin needed to be loaded and
         *  loading the plugin failed.
         */
        use(): boolean;
        // Conflicted with GObject.TypePlugin.use
        use(...args: never[]): any;
        // Inherited methods
        /**
         * Calls the `complete_interface_info` function from the
         * #GTypePluginClass of `plugin`. There should be no need to use this
         * function outside of the GObject type system itself.
         *
         * @param instance_type the #GType of an instantiatable type to which the interface
         *  is added
         * @param interface_type the #GType of the interface whose info is completed
         * @param info the #GInterfaceInfo to fill in
         */
        complete_interface_info(
            instance_type: GObject.GType,
            interface_type: GObject.GType,
            info: GObject.InterfaceInfo,
        ): void;
        /**
         * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
         * There should be no need to use this function outside of the GObject
         * type system itself.
         *
         * @param g_type the #GType whose info is completed
         * @param info the #GTypeInfo struct to fill in
         * @param value_table the #GTypeValueTable to fill in
         */
        complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;
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
}
export default classes;
