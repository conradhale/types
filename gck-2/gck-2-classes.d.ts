import type Gck from './gck-2.d.ts';
import Gio from '@girs/gio-2.0';
import { type GioClasses } from '@girs/gio-2.0/gio-2.0';
import GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import GLib from '@girs/glib-2.0';
import GModule from '@girs/gmodule-2.0';
declare namespace classes {
    class Enumerator extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Enumerator>;
        // Properties
        /**
         * Chained enumerator, which will be enumerated when this enumerator
         * has enumerated all its objects.
         */
        get chained(): Gck.Enumerator;
        set chained(val: Gck.Enumerator);
        /**
         * Interaction object used to ask the user for pins when opening
         * sessions. Used if the session_options of the enumerator have
         * %GCK_SESSION_LOGIN_USER
         */
        get interaction(): Gio.TlsInteraction;
        set interaction(val: Gio.TlsInteraction);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gck.Enumerator.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gck.Enumerator.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gck.Enumerator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Enumerator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gck.Enumerator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Enumerator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gck.Enumerator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gck.Enumerator.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Get the enumerator that will be run after all objects from this one
         * are seen.
         *
         * @returns the chained enumerator or %NULL
         */
        get_chained(): Gck.Enumerator | null;
        /**
         * Get the interaction used when a pin is needed
         *
         * @returns the interaction or %NULL
         */
        get_interaction(): Gio.TlsInteraction | null;
        /**
         * Get the type of objects created by this enumerator. The type will always
         * either be #GckObject or derived from it.
         *
         * @returns the type of objects created
         */
        get_object_type(): GObject.GType;
        /**
         * Get the next object in the enumerator, or %NULL if there are no more objects.
         *
         * %NULL is also returned if the function fails. Use the `error` to determine
         * whether a failure occurred or not.
         *
         * @returns The next object, which must be released
         * using g_object_unref, or %NULL.
         * @param cancellable A #GCancellable or %NULL
         */
        next(cancellable?: Gio.Cancellable | null): Gck.Object | null;
        /**
         * Get the next set of objects from the enumerator. This operation completes
         * asynchronously.The maximum number of objects can be specified with
         * `max_objects`. If -1 is specified, then all the remaining objects will be
         * enumerated.
         *
         * @param max_objects The maximum number of objects to get
         * @param cancellable A #GCancellable or %NULL
         */
        next_async(max_objects: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<Gck.Object[]>;
        /**
         * Get the next set of objects from the enumerator. This operation completes
         * asynchronously.The maximum number of objects can be specified with
         * `max_objects`. If -1 is specified, then all the remaining objects will be
         * enumerated.
         *
         * @param max_objects The maximum number of objects to get
         * @param cancellable A #GCancellable or %NULL
         * @param callback Called when the result is ready
         */
        next_async(
            max_objects: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the next set of objects from the enumerator. This operation completes
         * asynchronously.The maximum number of objects can be specified with
         * `max_objects`. If -1 is specified, then all the remaining objects will be
         * enumerated.
         *
         * @param max_objects The maximum number of objects to get
         * @param cancellable A #GCancellable or %NULL
         * @param callback Called when the result is ready
         */
        next_async(
            max_objects: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gck.Object[]> | void;
        /**
         * Complete an operation to enumerate next objects.
         *
         * %NULL is also returned if the function fails. Use the `error` to determine
         * whether a failure occurred or not.
         *
         * @returns A list of `Gck.Object`s
         * @param result The result passed to the callback
         */
        next_finish(result: Gio.AsyncResult): Gck.Object[];
        /**
         * Get the next set of objects from the enumerator. The maximum number of
         * objects can be specified with `max_objects`. If -1 is specified, then all
         * the remaining objects will be returned.
         *
         * %NULL is also returned if the function fails. Use the `error` to determine
         * whether a failure occurred or not.
         *
         * @returns A list of `Gck.Object`s
         * @param max_objects The maximum amount of objects to enumerate
         * @param cancellable A #GCancellable or %NULL
         */
        next_n(max_objects: number, cancellable?: Gio.Cancellable | null): Gck.Object[];
        /**
         * Set a chained enumerator that will be run after all objects from this one
         * are seen.
         *
         * @param chained the chained enumerator or %NULL
         */
        set_chained(chained?: Gck.Enumerator | null): void;
        /**
         * Set the interaction used when a pin is needed
         *
         * @param interaction the interaction or %NULL
         */
        set_interaction(interaction?: Gio.TlsInteraction | null): void;
        /**
         * Set the type of objects to be created by this enumerator. The type must
         * always be either #GckObject or derived from it.
         *
         * If `attr_types` and `attr_count` are non-NULL and non-zero respectively,
         * then the #GckObjectCache interface is expected to be implemented on the
         * derived class, then the enumerator will retrieve attributes for each object.
         *
         * @param object_type the type of objects to create
         * @param attr_types types of attributes to retrieve for objects
         */
        set_object_type(object_type: GObject.GType, attr_types: number[]): void;
    }
    class Module extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Module>;
        // Properties
        /**
         * The raw PKCS&num;11 function list for the module.
         *
         * This points to a CK_FUNCTION_LIST structure.
         */
        get functions(): any;
        /**
         * The PKCS&num;11 module file path.
         *
         * This may be set to NULL if this object was created from an already
         * initialized module via the gck_module_new() function.
         */
        get path(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gck.Module.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gck.Module.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gck.Module.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Module.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gck.Module.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Module.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gck.Module.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gck.Module.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Load and initialize a PKCS#11 module represented by a GckModule object.
         *
         * @param path The file system path to the PKCS#11 module to load.
         * @param cancellable optional cancellation object
         */
        static initialize(path: string, cancellable?: Gio.Cancellable | null): Gck.Module;
        /**
         * Asynchronously load and initialize a PKCS#11 module represented by a
         * [class`Module]` object.
         *
         * @param path the file system path to the PKCS#11 module to load
         * @param cancellable optional cancellation object
         * @param callback a callback which will be called when the operation completes
         */
        static initialize_async(
            path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gck.Module> | null,
        ): void;
        /**
         * Finishes the asynchronous initialize operation.
         *
         * @param result the asynchronous result
         */
        static initialize_finish(result: Gio.AsyncResult): Gck.Module | null;
        // Virtual methods
        vfunc_authenticate_object(object: Gck.Object, label: string, password: string): boolean;
        vfunc_authenticate_slot(slot: Gck.Slot, label: string, password: string): boolean;
        // Methods
        /**
         * Checks equality of two modules. Two GckModule objects can point to the same
         * underlying PKCS#11 module.
         *
         * @returns %TRUE if module1 and module2 are equal.
         *               %FALSE if either is not a GckModule.
         * @param _module2 a second #GckModule
         */
        equal(_module2: Gck.Module): boolean;
        /**
         * Get the info about a PKCS#11 module.
         *
         * @returns the module info; release this with gck_module_info_free()
         */
        get_info(): Gck.ModuleInfo;
        /**
         * Get the file path of this module. This may not be an absolute path, and
         * usually reflects the path passed to [func`Module`.initialize].
         *
         * @returns The path, do not modify or free this value.
         */
        get_path(): string;
        /**
         * Get the GckSlot objects for a given module.
         *
         * @returns The possibly empty
         *               list of slots.
         * @param token_present Whether to limit only to slots with a token present.
         */
        get_slots(token_present: boolean): Gck.Slot[];
        /**
         * Create a hash value for the GckModule.
         *
         * This function is intended for easily hashing a [class`Module]` to add to
         * a [struct`GLib`.HashTable] or similar data structure.
         *
         * @returns An integer that can be used as a hash value, or 0 if invalid.
         */
        hash(): number;
        /**
         * Check whether the PKCS#11 URI matches the module
         *
         * @returns whether the URI matches or not
         * @param uri the uri to match against the module
         */
        match(uri: Gck.UriData): boolean;
    }
    class Object extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Object>;
        // Properties
        /**
         * The raw PKCS11 handle for this object.
         */
        get handle(): number;
        /**
         * The GckModule that this object belongs to.
         */
        get module(): Gck.Module;
        /**
         * The PKCS11 session to make calls on when this object needs to
         * perform operations on itself.
         *
         * If this is NULL then a new session is opened for each operation,
         * such as gck_object_get(), gck_object_set() or gck_object_destroy().
         */
        get session(): Gck.Session;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gck.Object.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gck.Object.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static from_handle(session: Gck.Session, object_handle: number): Gck.Object;
        // Signals
        connect<K extends keyof Gck.Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gck.Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gck.Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gck.Object.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Lookup attributes in the cache, or retrieve them from the object if necessary.
         *
         * If `object` is a #GckObjectCache then this will lookup the attributes there
         * first if available, otherwise will read them from the object and update
         * the cache.
         *
         * If `object` is not a #GckObjectCache, then the attributes will simply be
         * read from the object.
         *
         * This may block, use the asynchronous version when this is not desirable
         *
         * @returns the attributes retrieved or %NULL on failure
         * @param attr_types the types of attributes to update
         * @param cancellable optional cancellation object
         */
        cache_lookup(attr_types: number[], cancellable?: Gio.Cancellable | null): Gck.Attributes;
        /**
         * Lookup attributes in the cache, or retrieve them from the object if necessary.
         *
         * If `object` is a #GckObjectCache then this will lookup the attributes there
         * first if available, otherwise will read them from the object and update
         * the cache.
         *
         * If `object` is not a #GckObjectCache, then the attributes will simply be
         * read from the object.
         *
         * This will return immediately and complete asynchronously
         *
         * @param attr_types the types of attributes to update
         * @param cancellable optional cancellation object
         */
        cache_lookup_async(
            attr_types: number[],
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Gck.Attributes>;
        /**
         * Lookup attributes in the cache, or retrieve them from the object if necessary.
         *
         * If `object` is a #GckObjectCache then this will lookup the attributes there
         * first if available, otherwise will read them from the object and update
         * the cache.
         *
         * If `object` is not a #GckObjectCache, then the attributes will simply be
         * read from the object.
         *
         * This will return immediately and complete asynchronously
         *
         * @param attr_types the types of attributes to update
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        cache_lookup_async(
            attr_types: number[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Lookup attributes in the cache, or retrieve them from the object if necessary.
         *
         * If `object` is a #GckObjectCache then this will lookup the attributes there
         * first if available, otherwise will read them from the object and update
         * the cache.
         *
         * If `object` is not a #GckObjectCache, then the attributes will simply be
         * read from the object.
         *
         * This will return immediately and complete asynchronously
         *
         * @param attr_types the types of attributes to update
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        cache_lookup_async(
            attr_types: number[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gck.Attributes> | void;
        /**
         * Complete an operation to lookup attributes in the cache or retrieve them
         * from the object if necessary.
         *
         * @returns the attributes retrieved or %NULL on failure
         * @param result the asynchrounous result passed to the callback
         */
        cache_lookup_finish(result: Gio.AsyncResult): Gck.Attributes;
        /**
         * Destroy a PKCS#11 object, deleting it from storage or the session.
         * This call may block for an indefinite period.
         *
         * @returns Whether the call was successful or not.
         * @param cancellable Optional cancellable object, or %NULL to ignore.
         */
        destroy(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Destroy a PKCS#11 object, deleting it from storage or the session.
         * This call will return immediately and complete asynchronously.
         *
         * @param cancellable Optional cancellable object, or %NULL to ignore.
         */
        destroy_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Destroy a PKCS#11 object, deleting it from storage or the session.
         * This call will return immediately and complete asynchronously.
         *
         * @param cancellable Optional cancellable object, or %NULL to ignore.
         * @param callback Callback which is called when operation completes.
         */
        destroy_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Destroy a PKCS#11 object, deleting it from storage or the session.
         * This call will return immediately and complete asynchronously.
         *
         * @param cancellable Optional cancellable object, or %NULL to ignore.
         * @param callback Callback which is called when operation completes.
         */
        destroy_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Get the status of the operation to destroy a PKCS#11 object, begun with
         * gck_object_destroy_async().
         *
         * @returns Whether the object was destroyed successfully or not.
         * @param result The result of the destory operation passed to the callback.
         */
        destroy_finish(result: Gio.AsyncResult): boolean;
        /**
         * Checks equality of two objects. Two GckObject objects can point to the same
         * underlying PKCS#11 object.
         *
         * @returns %TRUE if object1 and object2 are equal.
         *               %FALSE if either is not a GckObject.
         * @param _object2 a pointer to the second #GckObject
         */
        equal(_object2: Gck.Object): boolean;
        /**
         * Get the specified attributes from the object. The attributes will be cleared
         * of their current values, and new attributes will be stored. The attributes
         * should not be accessed in any way except for referencing and unreferencing
         * them until gck_object_get_finish() is called.
         *
         * This call returns immediately and completes asynchronously.
         *
         * @param attr_types the types of the attributes to get
         * @param cancellable optional cancellation object, or %NULL
         */
        get_async(attr_types: number[], cancellable?: Gio.Cancellable | null): globalThis.Promise<Gck.Attributes>;
        /**
         * Get the specified attributes from the object. The attributes will be cleared
         * of their current values, and new attributes will be stored. The attributes
         * should not be accessed in any way except for referencing and unreferencing
         * them until gck_object_get_finish() is called.
         *
         * This call returns immediately and completes asynchronously.
         *
         * @param attr_types the types of the attributes to get
         * @param cancellable optional cancellation object, or %NULL
         * @param callback A callback which is called when the operation completes.
         */
        get_async(
            attr_types: number[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the specified attributes from the object. The attributes will be cleared
         * of their current values, and new attributes will be stored. The attributes
         * should not be accessed in any way except for referencing and unreferencing
         * them until gck_object_get_finish() is called.
         *
         * This call returns immediately and completes asynchronously.
         *
         * @param attr_types the types of the attributes to get
         * @param cancellable optional cancellation object, or %NULL
         * @param callback A callback which is called when the operation completes.
         */
        get_async(
            attr_types: number[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gck.Attributes> | void;
        /**
         * Get the data for the specified attribute from the object. For convenience
         * the returned data has a null terminator.
         *
         * This call may block for an indefinite period.
         *
         * @returns the resulting PKCS#11
         *          attribute data, or %NULL if an error occurred
         * @param attr_type The attribute to get data for.
         * @param cancellable A #GCancellable or %NULL
         */
        get_data(attr_type: number, cancellable?: Gio.Cancellable | null): Uint8Array[];
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Get the data for the specified attribute from the object.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_type The attribute to get data for.
         * @param allocator An allocator with which to allocate memory for the data, or %NULL for default.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        get_data_async(
            attr_type: number,
            allocator: Gck.Allocator,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Uint8Array[]>;
        /**
         * Get the data for the specified attribute from the object.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_type The attribute to get data for.
         * @param allocator An allocator with which to allocate memory for the data, or %NULL for default.
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        get_data_async(
            attr_type: number,
            allocator: Gck.Allocator,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get the data for the specified attribute from the object.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_type The attribute to get data for.
         * @param allocator An allocator with which to allocate memory for the data, or %NULL for default.
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        get_data_async(
            attr_type: number,
            allocator: Gck.Allocator,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Uint8Array[]> | void;
        /**
         * Get the result of an operation to get attribute data from
         * an object. For convenience the returned data has an extra null terminator,
         * not included in the returned length.
         *
         * @returns The PKCS#11 attribute data
         *          or %NULL if an error occurred.
         * @param result The result passed to the callback.
         */
        get_data_finish(result: Gio.AsyncResult): Uint8Array[];
        /**
         * Get the result of a get operation and return specified attributes from
         * the object.
         *
         * No extra references are added to the returned attributes pointer.
         *
         * @returns The filled in attributes structure if successful or
         * %NULL if not successful.
         * @param result The result passed to the callback.
         */
        get_finish(result: Gio.AsyncResult): Gck.Attributes;
        /**
         * Get the specified attributes from the object. This call may
         * block for an indefinite period.
         *
         * No extra references are added to the returned attributes pointer.
         * During this call you may not access the attributes in any way.
         *
         * @returns a pointer to the filled in attributes if successful,
         *          or %NULL if not
         * @param attr_types the types of the attributes to get
         * @param cancellable optional cancellation object, or %NULL
         */
        get_full(attr_types: number[], cancellable?: Gio.Cancellable | null): Gck.Attributes;
        /**
         * Get the raw PKCS#11 handle of a GckObject.
         *
         * @returns the raw CK_OBJECT_HANDLE object handle
         */
        get_handle(): number;
        /**
         * Get the PKCS#11 module to which this object belongs.
         *
         * @returns the module, which should be unreffed after use
         */
        get_module(): Gck.Module;
        /**
         * Get the PKCS#11 session assigned to make calls on when operating
         * on this object.
         *
         * This will only return a session if it was set explitly on this
         * object. By default an object will open and close sessions
         * appropriate for its calls.
         *
         * @returns the assigned session, which must be unreffed after use
         */
        get_session(): Gck.Session;
        /**
         * Get an attribute template from the object. The attr_type must be for
         * an attribute which returns a template.
         *
         * This call may block for an indefinite period.
         *
         * @returns the resulting PKCS#11 attribute template, or %NULL
         *          if an error occurred
         * @param attr_type The template attribute type.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        get_template(attr_type: number, cancellable?: Gio.Cancellable | null): Gck.Attributes;
        /**
         * Get an attribute template from the object. The `attr_type` must be for
         * an attribute which returns a template.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_type The template attribute type.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        get_template_async(attr_type: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<Gck.Attributes>;
        /**
         * Get an attribute template from the object. The `attr_type` must be for
         * an attribute which returns a template.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_type The template attribute type.
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        get_template_async(
            attr_type: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Get an attribute template from the object. The `attr_type` must be for
         * an attribute which returns a template.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_type The template attribute type.
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        get_template_async(
            attr_type: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gck.Attributes> | void;
        /**
         * Get the result of an operation to get attribute template from
         * an object.
         *
         * @returns the resulting PKCS#11 attribute template, or %NULL
         *          if an error occurred
         * @param result The result passed to the callback.
         */
        get_template_finish(result: Gio.AsyncResult): Gck.Attributes;
        /**
         * Create a hash value for the GckObject.
         *
         * This function is intended for easily hashing a GckObject to add to
         * a GHashTable or similar data structure.
         *
         * @returns An integer that can be used as a hash value, or 0 if invalid.
         */
        hash(): number;
        /**
         * Set PKCS#11 attributes on an object. This call may block for an indefinite period.
         *
         * @returns Whether the call was successful or not.
         * @param attrs The attributes to set on the object.
         * @param cancellable Optional cancellable object, or %NULL to ignore.
         */
        set(attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): boolean;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Set PKCS#11 attributes on an object. This call will return
         * immediately and completes asynchronously.
         *
         * @param attrs The attributes to set on the object.
         * @param cancellable Optional cancellable object, or %NULL to ignore.
         */
        set_async(attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Set PKCS#11 attributes on an object. This call will return
         * immediately and completes asynchronously.
         *
         * @param attrs The attributes to set on the object.
         * @param cancellable Optional cancellable object, or %NULL to ignore.
         * @param callback Callback which is called when operation completes.
         */
        set_async(
            attrs: Gck.Attributes,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Set PKCS#11 attributes on an object. This call will return
         * immediately and completes asynchronously.
         *
         * @param attrs The attributes to set on the object.
         * @param cancellable Optional cancellable object, or %NULL to ignore.
         * @param callback Callback which is called when operation completes.
         */
        set_async(
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Get the status of the operation to set attributes on a PKCS#11 object,
         * begun with gck_object_set_async().
         *
         * @returns Whether the attributes were successfully set on the object or not.
         * @param result The result of the destory operation passed to the callback.
         */
        set_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set an attribute template on the object. The attr_type must be for
         * an attribute which contains a template.
         *
         * If the `attrs` #GckAttributes is floating, it is consumed.
         *
         * This call may block for an indefinite period.
         *
         * @returns %TRUE if the operation succeeded.
         * @param attr_type The attribute template type.
         * @param attrs The attribute template.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        set_template(attr_type: number, attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Set an attribute template on the object. The attr_type must be for
         * an attribute which contains a template.
         *
         * If the `attrs` #GckAttributes is floating, it is consumed.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_type The attribute template type.
         * @param attrs The attribute template.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        set_template_async(
            attr_type: number,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Set an attribute template on the object. The attr_type must be for
         * an attribute which contains a template.
         *
         * If the `attrs` #GckAttributes is floating, it is consumed.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_type The attribute template type.
         * @param attrs The attribute template.
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        set_template_async(
            attr_type: number,
            attrs: Gck.Attributes,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Set an attribute template on the object. The attr_type must be for
         * an attribute which contains a template.
         *
         * If the `attrs` #GckAttributes is floating, it is consumed.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_type The attribute template type.
         * @param attrs The attribute template.
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        set_template_async(
            attr_type: number,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Get the result of an operation to set attribute template on
         * an object.
         *
         * @returns %TRUE if the operation succeeded.
         * @param result The result passed to the callback.
         */
        set_template_finish(result: Gio.AsyncResult): boolean;
    }
    class Password extends GioClasses.TlsPassword {
        static '$gtype': GObject.GType<Password>;
        // Properties
        /**
         * The PKCS#11 key that the password is being requested for. If this
         * is set then the GckPassword:token property will be %NULL
         */
        get key(): Gck.Object;
        /**
         * The PKCS#11 module that is requesting the password
         */
        get module(): Gck.Module;
        /**
         * The PKCS#11 token the password is for, if this is set then
         * the GckPassword:object property will be %NULL
         */
        get token(): Gck.Slot;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gck.Password.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gck.Password.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gck.Password.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Password.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gck.Password.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Password.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gck.Password.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gck.Password.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * If the password request is to unlock a PKCS#11 key, then this is the
         * the object representing that key.
         *
         * @returns the password is for this key, or %NULL if not
         *          being requested for a key; must be unreferenced after use
         */
        get_key(): Gck.Object;
        /**
         * Get the PKCS#11 module that is requesting the password.
         *
         * @returns the module that is requesting the password, which
         *          must be unreferenced after use
         */
        get_module(): Gck.Module;
        /**
         * If the password request is to unlock a PKCS#11 token, then this is the
         * slot containing that token.
         *
         * @returns the slot that contains the token, or %NULL if not
         *          being requested for a token; must be unreferenced after use
         */
        get_token(): Gck.Slot;
    }
    class Session extends GObjectClasses.Object implements Gio.AsyncInitable<Gck.Session>, Gio.Initable {
        static '$gtype': GObject.GType<Session>;
        // Properties
        /**
         * The raw CK_SESSION_HANDLE handle of this session.
         */
        get handle(): number;
        /**
         * Interaction object used to ask the user for pins when opening
         * sessions. Used if the session_options of the enumerator have
         * %GCK_SESSION_LOGIN_USER
         */
        get interaction(): Gio.TlsInteraction;
        set interaction(val: Gio.TlsInteraction);
        /**
         * The GckModule that this session is opened on.
         */
        get module(): Gck.Module;
        /**
         * The options this session was opened with.
         */
        get options(): Gck.SessionOptions;
        /**
         * The GckSlot this session is opened on.
         */
        get slot(): Gck.Slot;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gck.Session.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gck.Session.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gck.Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Session.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gck.Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Session.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gck.Session.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gck.Session.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Initialize a session object from a raw PKCS#11 session handle.
         * Usually one would use the [method`Slot`.open_session] function to
         * create a session.
         *
         * @param slot The slot which the session belongs to.
         * @param session_handle the raw PKCS#11 handle of the session
         * @param options Session options. Those which are used during opening a session have no effect.
         */
        static from_handle(slot: Gck.Slot, session_handle: number, options: Gck.SessionOptions): Gck.Session;
        /**
         * Open a session on the slot. This call may block for an indefinite period.
         *
         * @param slot the slot to open session on
         * @param options session options
         * @param interaction optional interaction for logins or object authentication
         * @param cancellable optional cancellation object
         */
        static open(
            slot: Gck.Slot,
            options: Gck.SessionOptions,
            interaction?: Gio.TlsInteraction | null,
            cancellable?: Gio.Cancellable | null,
        ): Gck.Session;
        /**
         * Open a session on the slot. This call will return immediately and complete
         * asynchronously.
         *
         * @param slot the slot to open session on
         * @param options session options
         * @param interaction optional interaction for logins or object authentication
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        static open_async(
            slot: Gck.Slot,
            options: Gck.SessionOptions,
            interaction?: Gio.TlsInteraction | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gck.Session> | null,
        ): void;
        /**
         * Get the result of an open session operation.
         *
         * @param result the result passed to the callback
         */
        static open_finish(result: Gio.AsyncResult): Gck.Session;
        // Methods
        /**
         * Create a new PKCS#11 object. This call may block for an
         * indefinite period.
         *
         * @returns the newly created object or %NULL if an error occurred
         * @param attrs The attributes to create the object with.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        create_object(attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): Gck.Object;
        /**
         * Create a new PKCS#11 object. This call will return immediately
         * and complete asynchronously.
         *
         * If `attrs` is a floating reference, it is consumed.
         *
         * @param attrs The attributes to create the object with.
         * @param cancellable Optional cancellation object or %NULL.
         */
        create_object_async(
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Gck.Object>;
        /**
         * Create a new PKCS#11 object. This call will return immediately
         * and complete asynchronously.
         *
         * If `attrs` is a floating reference, it is consumed.
         *
         * @param attrs The attributes to create the object with.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        create_object_async(
            attrs: Gck.Attributes,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Create a new PKCS#11 object. This call will return immediately
         * and complete asynchronously.
         *
         * If `attrs` is a floating reference, it is consumed.
         *
         * @param attrs The attributes to create the object with.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        create_object_async(
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gck.Object> | void;
        /**
         * Get the result of creating a new PKCS#11 object.
         *
         * @returns the newly created object or %NULL if an error occurred
         * @param result The result passed to the callback.
         */
        create_object_finish(result: Gio.AsyncResult): Gck.Object;
        /**
         * Decrypt data in a mechanism specific manner. This call may
         * block for an indefinite period.
         *
         * @returns the data that was decrypted,
         *          or %NULL if an error occured
         * @param key The key to decrypt with.
         * @param mech_type The mechanism type to use for decryption.
         * @param input data to decrypt
         * @param cancellable Optional cancellation object, or %NULL
         */
        decrypt(
            key: Gck.Object,
            mech_type: number,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): Uint8Array[];
        /**
         * Decrypt data in a mechanism specific manner. This call will
         * return immediately and complete asynchronously.
         *
         * @param key The key to decrypt with.
         * @param mechanism The mechanism type and parameters to use for decryption.
         * @param input data to decrypt
         * @param cancellable A GCancellable which can be used to cancel the operation.
         */
        decrypt_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Uint8Array[]>;
        /**
         * Decrypt data in a mechanism specific manner. This call will
         * return immediately and complete asynchronously.
         *
         * @param key The key to decrypt with.
         * @param mechanism The mechanism type and parameters to use for decryption.
         * @param input data to decrypt
         * @param cancellable A GCancellable which can be used to cancel the operation.
         * @param callback Called when the operation completes.
         */
        decrypt_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Decrypt data in a mechanism specific manner. This call will
         * return immediately and complete asynchronously.
         *
         * @param key The key to decrypt with.
         * @param mechanism The mechanism type and parameters to use for decryption.
         * @param input data to decrypt
         * @param cancellable A GCancellable which can be used to cancel the operation.
         * @param callback Called when the operation completes.
         */
        decrypt_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Uint8Array[]> | void;
        /**
         * Get the result of an decryption operation.
         *
         * @returns the data that was decrypted,
         *          or %NULL if an error occurred
         * @param result The result object passed to the callback.
         */
        decrypt_finish(result: Gio.AsyncResult): Uint8Array[];
        /**
         * Decrypt data in a mechanism specific manner. This call may
         * block for an indefinite period.
         *
         * @returns the data that was decrypted,
         *          or %NULL if an error occured
         * @param key The key to decrypt with.
         * @param mechanism The mechanism type and parameters to use for decryption.
         * @param input data to decrypt
         * @param cancellable A GCancellable which can be used to cancel the operation.
         */
        decrypt_full(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): Uint8Array[];
        /**
         * Derive a key from another key. This call may block for an
         * indefinite period.
         *
         * If the `attrs` #GckAttributes is floating, it is consumed.
         *
         * @returns the new derived key or %NULL if the operation
         *          failed
         * @param base The key to derive from.
         * @param mech_type The mechanism to use for derivation.
         * @param attrs Additional attributes for the derived key.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        derive_key(
            base: Gck.Object,
            mech_type: number,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): Gck.Object;
        /**
         * Derive a key from another key. This call will
         * return immediately and complete asynchronously.
         *
         * @param base The key to derive from.
         * @param mechanism The mechanism to use for derivation.
         * @param attrs Additional attributes for the derived key.
         * @param cancellable Optional cancellation object or %NULL.
         */
        derive_key_async(
            base: Gck.Object,
            mechanism: Gck.Mechanism,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Gck.Object>;
        /**
         * Derive a key from another key. This call will
         * return immediately and complete asynchronously.
         *
         * @param base The key to derive from.
         * @param mechanism The mechanism to use for derivation.
         * @param attrs Additional attributes for the derived key.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        derive_key_async(
            base: Gck.Object,
            mechanism: Gck.Mechanism,
            attrs: Gck.Attributes,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Derive a key from another key. This call will
         * return immediately and complete asynchronously.
         *
         * @param base The key to derive from.
         * @param mechanism The mechanism to use for derivation.
         * @param attrs Additional attributes for the derived key.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        derive_key_async(
            base: Gck.Object,
            mechanism: Gck.Mechanism,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gck.Object> | void;
        /**
         * Get the result of a derive key operation.
         *
         * @returns the new derived key or %NULL if the operation
         *          failed
         * @param result The async result passed to the callback.
         */
        derive_key_finish(result: Gio.AsyncResult): Gck.Object;
        /**
         * Derive a key from another key. This call may block for an
         * indefinite period.
         *
         * @returns the new derived key or %NULL if the operation
         *          failed
         * @param base The key to derive from.
         * @param mechanism The mechanism to use for derivation.
         * @param attrs Additional attributes for the derived key.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        derive_key_full(
            base: Gck.Object,
            mechanism: Gck.Mechanism,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): Gck.Object;
        /**
         * Encrypt data in a mechanism specific manner. This call may
         * block for an indefinite period.
         *
         * @returns the data that was encrypted,
         *          or %NULL if an error occured.
         * @param key The key to encrypt with.
         * @param mech_type The mechanism type to use for encryption.
         * @param input the data to encrypt
         * @param cancellable Optional cancellation object, or %NULL
         */
        encrypt(
            key: Gck.Object,
            mech_type: number,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): Uint8Array[];
        /**
         * Encrypt data in a mechanism specific manner. This call will
         * return immediately and complete asynchronously.
         *
         * @param key The key to encrypt with.
         * @param mechanism The mechanism type and parameters to use for encryption.
         * @param input the data to encrypt
         * @param cancellable A GCancellable which can be used to cancel the operation.
         */
        encrypt_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Uint8Array[]>;
        /**
         * Encrypt data in a mechanism specific manner. This call will
         * return immediately and complete asynchronously.
         *
         * @param key The key to encrypt with.
         * @param mechanism The mechanism type and parameters to use for encryption.
         * @param input the data to encrypt
         * @param cancellable A GCancellable which can be used to cancel the operation.
         * @param callback Called when the operation completes.
         */
        encrypt_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Encrypt data in a mechanism specific manner. This call will
         * return immediately and complete asynchronously.
         *
         * @param key The key to encrypt with.
         * @param mechanism The mechanism type and parameters to use for encryption.
         * @param input the data to encrypt
         * @param cancellable A GCancellable which can be used to cancel the operation.
         * @param callback Called when the operation completes.
         */
        encrypt_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Uint8Array[]> | void;
        /**
         * Get the result of an encryption operation.
         *
         * @returns the data that was encrypted,
         *          or %NULL if an error occurred.
         * @param result The result object passed to the callback.
         */
        encrypt_finish(result: Gio.AsyncResult): Uint8Array[];
        /**
         * Encrypt data in a mechanism specific manner. This call may
         * block for an indefinite period.
         *
         * @returns the data that was encrypted,
         *          or %NULL if an error occured
         * @param key The key to encrypt with.
         * @param mechanism The mechanism type and parameters to use for encryption.
         * @param input the data to encrypt
         * @param cancellable A GCancellable which can be used to cancel the operation.
         */
        encrypt_full(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): Uint8Array[];
        /**
         * Setup an enumerator for listing matching objects available via this session.
         *
         * This call will not block but will return an enumerator immediately.
         *
         * @returns a new enumerator
         * @param match attributes that the objects must match, or empty for all objects
         */
        enumerate_objects(match: Gck.Attributes): Gck.Enumerator;
        /**
         * Find the objects matching the passed attributes. This call may
         * block for an indefinite period.
         *
         * @returns a list of
         *          the matching objects, which may be empty
         * @param match the attributes to match against objects
         * @param cancellable optional cancellation object or %NULL
         */
        find_handles(match: Gck.Attributes, cancellable?: Gio.Cancellable | null): number[] | null;
        /**
         * Find the objects matching the passed attributes. This call will
         * return immediately and complete asynchronously.
         *
         * If `match` is a floating reference, it is consumed.
         *
         * @param match the attributes to match against the objects
         * @param cancellable optional cancellation object or %NULL
         */
        find_handles_async(
            match: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<number[] | null>;
        /**
         * Find the objects matching the passed attributes. This call will
         * return immediately and complete asynchronously.
         *
         * If `match` is a floating reference, it is consumed.
         *
         * @param match the attributes to match against the objects
         * @param cancellable optional cancellation object or %NULL
         * @param callback called when the operation completes
         */
        find_handles_async(
            match: Gck.Attributes,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Find the objects matching the passed attributes. This call will
         * return immediately and complete asynchronously.
         *
         * If `match` is a floating reference, it is consumed.
         *
         * @param match the attributes to match against the objects
         * @param cancellable optional cancellation object or %NULL
         * @param callback called when the operation completes
         */
        find_handles_async(
            match: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number[] | null> | void;
        /**
         * Get the result of a find handles operation.
         *
         * @returns an array of
         *          handles that matched, which may be empty, or %NULL on failure
         * @param result the asynchronous result
         */
        find_handles_finish(result: Gio.AsyncResult): number[] | null;
        /**
         * Find the objects matching the passed attributes. This call may
         * block for an indefinite period.
         *
         * If `match` is a floating reference, it is consumed.
         *
         * @returns a list of the matching
         *          objects, which may be empty
         * @param match the attributes to match
         * @param cancellable Optional cancellation object or %NULL.
         */
        find_objects(match: Gck.Attributes, cancellable?: Gio.Cancellable | null): Gck.Object[];
        /**
         * Find the objects matching the passed attributes. This call will
         * return immediately and complete asynchronously.
         *
         * If the `match` #GckAttributes is floating, it is consumed.
         *
         * @param match The attributes to match.
         * @param cancellable Optional cancellation object or %NULL.
         */
        find_objects_async(
            match: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Gck.Object[]>;
        /**
         * Find the objects matching the passed attributes. This call will
         * return immediately and complete asynchronously.
         *
         * If the `match` #GckAttributes is floating, it is consumed.
         *
         * @param match The attributes to match.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        find_objects_async(
            match: Gck.Attributes,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Find the objects matching the passed attributes. This call will
         * return immediately and complete asynchronously.
         *
         * If the `match` #GckAttributes is floating, it is consumed.
         *
         * @param match The attributes to match.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        find_objects_async(
            match: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gck.Object[]> | void;
        /**
         * Get the result of a find operation.
         *
         * @returns a list of the matching
         *          objects, which may be empty
         * @param result The attributes to match.
         */
        find_objects_finish(result: Gio.AsyncResult): Gck.Object[];
        /**
         * Generate a new key pair of public and private keys. This call may block for
         * an indefinite period.
         *
         * If `public_attrs` and/or `private_attrs` is a floating reference, it is
         * consumed.
         *
         * @returns %TRUE if the operation succeeded.
         * @param mech_type The mechanism type to use for key generation.
         * @param public_attrs Additional attributes for the generated public key.
         * @param private_attrs Additional attributes for the generated private key.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        generate_key_pair(
            mech_type: number,
            public_attrs: Gck.Attributes,
            private_attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Gck.Object | null, Gck.Object | null];
        /**
         * Generate a new key pair of public and private keys. This call will
         * return immediately and complete asynchronously.
         *
         * If `public_attrs` and/or `private_attrs` is a floating reference, it is
         * consumed.
         *
         * @param mechanism The mechanism to use for key generation.
         * @param public_attrs Additional attributes for the generated public key.
         * @param private_attrs Additional attributes for the generated private key.
         * @param cancellable Optional cancellation object or %NULL.
         */
        generate_key_pair_async(
            mechanism: Gck.Mechanism,
            public_attrs: Gck.Attributes,
            private_attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Gck.Object | null, Gck.Object | null]>;
        /**
         * Generate a new key pair of public and private keys. This call will
         * return immediately and complete asynchronously.
         *
         * If `public_attrs` and/or `private_attrs` is a floating reference, it is
         * consumed.
         *
         * @param mechanism The mechanism to use for key generation.
         * @param public_attrs Additional attributes for the generated public key.
         * @param private_attrs Additional attributes for the generated private key.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        generate_key_pair_async(
            mechanism: Gck.Mechanism,
            public_attrs: Gck.Attributes,
            private_attrs: Gck.Attributes,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Generate a new key pair of public and private keys. This call will
         * return immediately and complete asynchronously.
         *
         * If `public_attrs` and/or `private_attrs` is a floating reference, it is
         * consumed.
         *
         * @param mechanism The mechanism to use for key generation.
         * @param public_attrs Additional attributes for the generated public key.
         * @param private_attrs Additional attributes for the generated private key.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        generate_key_pair_async(
            mechanism: Gck.Mechanism,
            public_attrs: Gck.Attributes,
            private_attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gck.Object | null, Gck.Object | null]> | void;
        /**
         * Get the result of a generate key pair operation.
         *
         * @returns %TRUE if the operation succeeded.
         * @param result The async result passed to the callback.
         */
        generate_key_pair_finish(result: Gio.AsyncResult): [boolean, Gck.Object | null, Gck.Object | null];
        /**
         * Generate a new key pair of public and private keys. This call may block for an
         * indefinite period.
         *
         * @returns %TRUE if the operation succeeded.
         * @param mechanism The mechanism to use for key generation.
         * @param public_attrs Additional attributes for the generated public key.
         * @param private_attrs Additional attributes for the generated private key.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        generate_key_pair_full(
            mechanism: Gck.Mechanism,
            public_attrs: Gck.Attributes,
            private_attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Gck.Object | null, Gck.Object | null];
        /**
         * Get the raw PKCS#11 session handle from a session object.
         *
         * @returns The raw session handle.
         */
        get_handle(): number;
        /**
         * Get information about the session.
         *
         * @returns the session info. Use the gck_session_info_free()
         *          to release when done
         */
        get_info(): Gck.SessionInfo;
        /**
         * Get the interaction object set on this session, which is used to prompt
         * for pins and the like.
         *
         * @returns the interaction object, or %NULL
         */
        get_interaction(): Gio.TlsInteraction | null;
        /**
         * Get the PKCS#11 module to which this session belongs.
         *
         * @returns the module, which should be unreffed after use
         */
        get_module(): Gck.Module;
        /**
         * Get the options this session was opened with.
         *
         * @returns The session options.
         */
        get_options(): Gck.SessionOptions;
        /**
         * Get the PKCS#11 slot to which this session belongs.
         *
         * @returns The slot, which should be unreffed after use.
         */
        get_slot(): Gck.Slot;
        /**
         * Get the session state. The state is the various PKCS#11 CKS_XXX flags.
         *
         * @returns the session state
         */
        get_state(): number;
        /**
         * Initialize the user's pin on this slot that this session is opened on.
         * According to the PKCS#11 standards, the session must be logged in with
         * the CKU_SO user type.
         *
         * This call may block for an indefinite period.
         *
         * @returns Whether successful or not.
         * @param pin the user's PIN, or %NULL for
         *       protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         */
        init_pin(pin?: Uint8Array[] | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initialize the user's pin on this slot that this session is opened on.
         * According to the PKCS#11 standards, the session must be logged in with
         * the `CKU_SO` user type.
         *
         * This call will return immediately and completes asynchronously.
         *
         * @param pin the user's PIN, or %NULL for protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         */
        init_pin_async(pin?: Uint8Array[] | null, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Initialize the user's pin on this slot that this session is opened on.
         * According to the PKCS#11 standards, the session must be logged in with
         * the `CKU_SO` user type.
         *
         * This call will return immediately and completes asynchronously.
         *
         * @param pin the user's PIN, or %NULL for protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        init_pin_async(
            pin: Uint8Array[] | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Initialize the user's pin on this slot that this session is opened on.
         * According to the PKCS#11 standards, the session must be logged in with
         * the `CKU_SO` user type.
         *
         * This call will return immediately and completes asynchronously.
         *
         * @param pin the user's PIN, or %NULL for protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        init_pin_async(
            pin?: Uint8Array[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Get the result of initializing a user's PIN.
         *
         * @returns Whether the operation was successful or not.
         * @param result The result passed to the callback.
         */
        init_pin_finish(result: Gio.AsyncResult): boolean;
        /**
         * Login the user on the session. This call may block for
         * an indefinite period.
         *
         * @returns Whether successful or not.
         * @param user_type The type of login user.
         * @param pin the user's PIN, or %NULL for
         *       protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         */
        login(user_type: number, pin?: Uint8Array[] | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Login the user on the session. This call will return
         * immediately and completes asynchronously.
         *
         * @param user_type The type of login user.
         * @param pin the user's PIN, or %NULL for
         *       protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         */
        login_async(
            user_type: number,
            pin?: Uint8Array[] | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Login the user on the session. This call will return
         * immediately and completes asynchronously.
         *
         * @param user_type The type of login user.
         * @param pin the user's PIN, or %NULL for
         *       protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        login_async(
            user_type: number,
            pin: Uint8Array[] | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Login the user on the session. This call will return
         * immediately and completes asynchronously.
         *
         * @param user_type The type of login user.
         * @param pin the user's PIN, or %NULL for
         *       protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        login_async(
            user_type: number,
            pin?: Uint8Array[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Get the result of a login operation.
         *
         * @returns Whether the operation was successful or not.
         * @param result The result passed to the callback.
         */
        login_finish(result: Gio.AsyncResult): boolean;
        /**
         * Login the user on the session requesting the password interactively
         * when necessary. This call may block for an indefinite period.
         *
         * @returns Whether successful or not.
         * @param user_type the type of login user
         * @param interaction interaction to request PIN when necessary
         * @param cancellable optional cancellation object, or %NULL
         */
        login_interactive(
            user_type: number,
            interaction?: Gio.TlsInteraction | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Login the user on the session prompting for passwords interactively when
         * necessary. This call will return immediately and completes asynchronously.
         *
         * @param user_type the type of login user
         * @param interaction interaction to request PIN when necessary
         * @param cancellable optional cancellation object, or %NULL
         */
        login_interactive_async(
            user_type: number,
            interaction?: Gio.TlsInteraction | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Login the user on the session prompting for passwords interactively when
         * necessary. This call will return immediately and completes asynchronously.
         *
         * @param user_type the type of login user
         * @param interaction interaction to request PIN when necessary
         * @param cancellable optional cancellation object, or %NULL
         * @param callback called when the operation completes
         */
        login_interactive_async(
            user_type: number,
            interaction: Gio.TlsInteraction | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Login the user on the session prompting for passwords interactively when
         * necessary. This call will return immediately and completes asynchronously.
         *
         * @param user_type the type of login user
         * @param interaction interaction to request PIN when necessary
         * @param cancellable optional cancellation object, or %NULL
         * @param callback called when the operation completes
         */
        login_interactive_async(
            user_type: number,
            interaction?: Gio.TlsInteraction | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Get the result of a login operation.
         *
         * @returns Whether the operation was successful or not.
         * @param result the result passed to the callback
         */
        login_interactive_finish(result: Gio.AsyncResult): boolean;
        /**
         * Log out of the session. This call may block for an indefinite period.
         *
         * @returns Whether the logout was successful or not.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        logout(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Log out of the session. This call returns immediately and completes
         * asynchronously.
         *
         * @param cancellable Optional cancellation object, or %NULL.
         */
        logout_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Log out of the session. This call returns immediately and completes
         * asynchronously.
         *
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        logout_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Log out of the session. This call returns immediately and completes
         * asynchronously.
         *
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        logout_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Get the result of logging out of a session.
         *
         * @returns Whether the logout was successful or not.
         * @param result The result passed to the callback.
         */
        logout_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the interaction object on this session, which is used to prompt for
         * pins and the like.
         *
         * @param interaction the interaction or %NULL
         */
        set_interaction(interaction?: Gio.TlsInteraction | null): void;
        /**
         * Change the user's pin on this slot that this session is opened on.
         *
         * This call may block for an indefinite period.
         *
         * @returns Whether successful or not.
         * @param old_pin the user's old PIN, or %NULL
         *           for protected authentication path.
         * @param new_pin the user's new PIN, or %NULL
         *           for protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         */
        set_pin(
            old_pin?: Uint8Array[] | null,
            new_pin?: Uint8Array[] | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Change the user's pin on this slot that this session is opened on.
         *
         * This call will return immediately and completes asynchronously.
         *
         * @param old_pin the user's old PIN, or %NULL
         *           for protected authentication path
         * @param n_old_pin the length of the old PIN
         * @param new_pin the user's new PIN, or %NULL
         *           for protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         */
        set_pin_async(
            old_pin: Uint8Array[] | null,
            n_old_pin: number,
            new_pin?: Uint8Array[] | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Change the user's pin on this slot that this session is opened on.
         *
         * This call will return immediately and completes asynchronously.
         *
         * @param old_pin the user's old PIN, or %NULL
         *           for protected authentication path
         * @param n_old_pin the length of the old PIN
         * @param new_pin the user's new PIN, or %NULL
         *           for protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        set_pin_async(
            old_pin: Uint8Array[] | null,
            n_old_pin: number,
            new_pin: Uint8Array[] | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Change the user's pin on this slot that this session is opened on.
         *
         * This call will return immediately and completes asynchronously.
         *
         * @param old_pin the user's old PIN, or %NULL
         *           for protected authentication path
         * @param n_old_pin the length of the old PIN
         * @param new_pin the user's new PIN, or %NULL
         *           for protected authentication path
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        set_pin_async(
            old_pin: Uint8Array[] | null,
            n_old_pin: number,
            new_pin?: Uint8Array[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Get the result of changing a user's PIN.
         *
         * @returns Whether the operation was successful or not.
         * @param result The result passed to the callback.
         */
        set_pin_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sign data in a mechanism specific manner. This call may
         * block for an indefinite period.
         *
         * @returns the data that was signed,
         *          or %NULL if an error occured
         * @param key The key to sign with.
         * @param mech_type The mechanism type to use for signing.
         * @param input data to sign
         * @param cancellable Optional cancellation object, or %NULL
         */
        sign(
            key: Gck.Object,
            mech_type: number,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): Uint8Array[];
        /**
         * Sign data in a mechanism specific manner. This call will
         * return immediately and complete asynchronously.
         *
         * @param key The key to sign with.
         * @param mechanism The mechanism type and parameters to use for signing.
         * @param input data to sign
         * @param cancellable A GCancellable which can be used to cancel the operation.
         */
        sign_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Uint8Array[]>;
        /**
         * Sign data in a mechanism specific manner. This call will
         * return immediately and complete asynchronously.
         *
         * @param key The key to sign with.
         * @param mechanism The mechanism type and parameters to use for signing.
         * @param input data to sign
         * @param cancellable A GCancellable which can be used to cancel the operation.
         * @param callback Called when the operation completes.
         */
        sign_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Sign data in a mechanism specific manner. This call will
         * return immediately and complete asynchronously.
         *
         * @param key The key to sign with.
         * @param mechanism The mechanism type and parameters to use for signing.
         * @param input data to sign
         * @param cancellable A GCancellable which can be used to cancel the operation.
         * @param callback Called when the operation completes.
         */
        sign_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Uint8Array[]> | void;
        /**
         * Get the result of an signing operation.
         *
         * @returns the data that was signed,
         *          or %NULL if an error occurred
         * @param result The result object passed to the callback.
         */
        sign_finish(result: Gio.AsyncResult): Uint8Array[];
        /**
         * Sign data in a mechanism specific manner. This call may
         * block for an indefinite period.
         *
         * @returns The data that was signed, or %NULL if an error occured.
         * @param key The key to sign with.
         * @param mechanism The mechanism type and parameters to use for signing.
         * @param input data to sign
         * @param n_result location to store the length of the result data
         * @param cancellable A GCancellable which can be used to cancel the operation.
         */
        sign_full(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            n_result: number,
            cancellable?: Gio.Cancellable | null,
        ): number;
        /**
         * Unwrap a key from a byte stream. This call may block for an
         * indefinite period.
         *
         * @returns the new unwrapped key or %NULL if the
         *          operation failed
         * @param wrapper The key to use for unwrapping.
         * @param mech_type The mechanism to use for unwrapping.
         * @param input the wrapped data as a byte stream
         * @param attrs Additional attributes for the unwrapped key.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        unwrap_key(
            wrapper: Gck.Object,
            mech_type: number,
            input: Uint8Array[] | string,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): Gck.Object;
        /**
         * Unwrap a key from a byte stream. This call will
         * return immediately and complete asynchronously.
         *
         * @param wrapper The key to use for unwrapping.
         * @param mechanism The mechanism to use for unwrapping.
         * @param input the wrapped data as a byte stream
         * @param attrs Additional attributes for the unwrapped key.
         * @param cancellable Optional cancellation object or %NULL.
         */
        unwrap_key_async(
            wrapper: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Gck.Object>;
        /**
         * Unwrap a key from a byte stream. This call will
         * return immediately and complete asynchronously.
         *
         * @param wrapper The key to use for unwrapping.
         * @param mechanism The mechanism to use for unwrapping.
         * @param input the wrapped data as a byte stream
         * @param attrs Additional attributes for the unwrapped key.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        unwrap_key_async(
            wrapper: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            attrs: Gck.Attributes,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Unwrap a key from a byte stream. This call will
         * return immediately and complete asynchronously.
         *
         * @param wrapper The key to use for unwrapping.
         * @param mechanism The mechanism to use for unwrapping.
         * @param input the wrapped data as a byte stream
         * @param attrs Additional attributes for the unwrapped key.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        unwrap_key_async(
            wrapper: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gck.Object> | void;
        /**
         * Get the result of a unwrap key operation.
         *
         * @returns the new unwrapped key or %NULL if the operation
         *          failed.
         * @param result The async result passed to the callback.
         */
        unwrap_key_finish(result: Gio.AsyncResult): Gck.Object;
        /**
         * Unwrap a key from a byte stream. This call may block for an
         * indefinite period.
         *
         * @returns the new unwrapped key or %NULL if the operation
         *          failed
         * @param wrapper The key to use for unwrapping.
         * @param mechanism The mechanism to use for unwrapping.
         * @param input the wrapped data as a byte stream
         * @param attrs Additional attributes for the unwrapped key.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        unwrap_key_full(
            wrapper: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            attrs: Gck.Attributes,
            cancellable?: Gio.Cancellable | null,
        ): Gck.Object;
        /**
         * Verify data in a mechanism specific manner. This call may
         * block for an indefinite period.
         *
         * @returns %TRUE if the data verified correctly, otherwise a failure or error occurred.
         * @param key The key to verify with.
         * @param mech_type The mechanism type to use for verifying.
         * @param input data to verify
         * @param signature the signature
         * @param cancellable Optional cancellation object, or %NULL
         */
        verify(
            key: Gck.Object,
            mech_type: number,
            input: Uint8Array[] | string,
            signature: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Verify data in a mechanism specific manner. This call returns
         * immediately and completes asynchronously.
         *
         * @param key The key to verify with.
         * @param mechanism The mechanism type and parameters to use for signing.
         * @param input data to verify
         * @param signature the signature
         * @param cancellable A GCancellable which can be used to cancel the operation.
         */
        verify_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            signature: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Verify data in a mechanism specific manner. This call returns
         * immediately and completes asynchronously.
         *
         * @param key The key to verify with.
         * @param mechanism The mechanism type and parameters to use for signing.
         * @param input data to verify
         * @param signature the signature
         * @param cancellable A GCancellable which can be used to cancel the operation.
         * @param callback Called when the operation completes.
         */
        verify_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            signature: Uint8Array[] | string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Verify data in a mechanism specific manner. This call returns
         * immediately and completes asynchronously.
         *
         * @param key The key to verify with.
         * @param mechanism The mechanism type and parameters to use for signing.
         * @param input data to verify
         * @param signature the signature
         * @param cancellable A GCancellable which can be used to cancel the operation.
         * @param callback Called when the operation completes.
         */
        verify_async(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            signature: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Get the result of an verify operation.
         *
         * @returns %TRUE if the data verified correctly, otherwise a failure or error occurred.
         * @param result The result object passed to the callback.
         */
        verify_finish(result: Gio.AsyncResult): boolean;
        /**
         * Verify data in a mechanism specific manner. This call may
         * block for an indefinite period.
         *
         * @returns %TRUE if the data verified correctly, otherwise a failure or error occurred.
         * @param key The key to verify with.
         * @param mechanism The mechanism type and parameters to use for signing.
         * @param input data to verify
         * @param signature the signature
         * @param cancellable A GCancellable which can be used to cancel the operation.
         */
        verify_full(
            key: Gck.Object,
            mechanism: Gck.Mechanism,
            input: Uint8Array[] | string,
            signature: Uint8Array[] | string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Wrap a key into a byte stream. This call may block for an
         * indefinite period.
         *
         * @returns the wrapped data or %NULL
         *          if the operation failed
         * @param wrapper The key to use for wrapping.
         * @param mech_type The mechanism type to use for wrapping.
         * @param wrapped The key to wrap.
         * @param cancellable A #GCancellable or %NULL
         */
        wrap_key(
            wrapper: Gck.Object,
            mech_type: number,
            wrapped: Gck.Object,
            cancellable?: Gio.Cancellable | null,
        ): Uint8Array[];
        /**
         * Wrap a key into a byte stream. This call will
         * return immediately and complete asynchronously.
         *
         * @param wrapper The key to use for wrapping.
         * @param mechanism The mechanism to use for wrapping.
         * @param wrapped The key to wrap.
         * @param cancellable Optional cancellation object or %NULL.
         */
        wrap_key_async(
            wrapper: Gck.Object,
            mechanism: Gck.Mechanism,
            wrapped: Gck.Object,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Uint8Array[]>;
        /**
         * Wrap a key into a byte stream. This call will
         * return immediately and complete asynchronously.
         *
         * @param wrapper The key to use for wrapping.
         * @param mechanism The mechanism to use for wrapping.
         * @param wrapped The key to wrap.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        wrap_key_async(
            wrapper: Gck.Object,
            mechanism: Gck.Mechanism,
            wrapped: Gck.Object,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Wrap a key into a byte stream. This call will
         * return immediately and complete asynchronously.
         *
         * @param wrapper The key to use for wrapping.
         * @param mechanism The mechanism to use for wrapping.
         * @param wrapped The key to wrap.
         * @param cancellable Optional cancellation object or %NULL.
         * @param callback Called when the operation completes.
         */
        wrap_key_async(
            wrapper: Gck.Object,
            mechanism: Gck.Mechanism,
            wrapped: Gck.Object,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Uint8Array[]> | void;
        /**
         * Get the result of a wrap key operation.
         *
         * @returns the wrapped data or %NULL
         *          if the operation failed
         * @param result The async result passed to the callback.
         */
        wrap_key_finish(result: Gio.AsyncResult): Uint8Array[];
        /**
         * Wrap a key into a byte stream. This call may block for an
         * indefinite period.
         *
         * @returns the wrapped data or %NULL
         *          if the operation failed
         * @param wrapper The key to use for wrapping.
         * @param mechanism The mechanism to use for wrapping.
         * @param wrapped The key to wrap.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        wrap_key_full(
            wrapper: Gck.Object,
            mechanism: Gck.Mechanism,
            wrapped: Gck.Object,
            cancellable?: Gio.Cancellable | null,
        ): Uint8Array[];
        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         *
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         *
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         *
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         *
         * @returns %TRUE if successful. If an error has occurred, this function
         * will return %FALSE and set `error` appropriately if present.
         * @param res a #GAsyncResult.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         *
         * @returns a newly created #GObject,
         *      or %NULL on error. Free with g_object_unref().
         * @param res the #GAsyncResult from the callback
         */
        new_finish(res: Gio.AsyncResult): Gck.Session;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         *
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         *
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
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
    class Slot extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Slot>;
        // Properties
        /**
         * The raw CK_SLOT_ID handle of this slot.
         */
        get handle(): number;
        /**
         * The PKCS11 object that this slot is a part of.
         */
        get module(): Gck.Module;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gck.Slot.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gck.Slot.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gck.Slot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Slot.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gck.Slot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gck.Slot.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gck.Slot.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gck.Slot.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Create a new GckSlot object for a raw PKCS#11 handle.
         *
         * @param module The module that this slot is on.
         * @param slot_id The raw PKCS#11 handle or slot id of this slot.
         */
        static from_handle(module: Gck.Module, slot_id: number): Gck.Slot;
        // Methods
        /**
         * Setup an enumerator for listing matching objects on the slot.
         *
         * If the `match` #GckAttributes is floating, it is consumed.
         *
         * This call will not block but will return an enumerator immediately.
         *
         * @returns a new enumerator
         * @param match attributes that the objects must match, or empty for all objects
         * @param options options for opening a session
         */
        enumerate_objects(match: Gck.Attributes, options: Gck.SessionOptions | null): Gck.Enumerator;
        /**
         * Checks equality of two slots. Two GckSlot objects can point to the same
         * underlying PKCS#11 slot.
         *
         * @returns %TRUE if slot1 and slot2 are equal.
         *               %FALSE if either is not a GckSlot.
         * @param _slot2 a pointer to the second #GckSlot
         */
        equal(_slot2: Gck.Slot): boolean;
        /**
         * Get the raw PKCS#11 handle of a slot.
         *
         * @returns the raw CK_SLOT_ID handle
         */
        get_handle(): number;
        /**
         * Get the information for this slot.
         *
         * @returns the slot information, when done, use gck_slot_info_free()
         *          to release it.
         */
        get_info(): Gck.SlotInfo;
        /**
         * Get information for the specified mechanism.
         *
         * @returns the mechanism information, or %NULL if failed; use
         *          gck_mechanism_info_free() when done with it
         * @param mech_type The mechanisms type to get info for.
         */
        get_mechanism_info(mech_type: number): Gck.MechanismInfo;
        /**
         * Get the available mechanisms for this slot.
         *
         * @returns a list of the mechanisms
         *          for this slot, which should be freed with g_array_free ()
         */
        get_mechanisms(): number[];
        /**
         * Get the module that this slot is on.
         *
         * @returns The module, you must unreference this after
         *          you're done with it.
         */
        get_module(): Gck.Module;
        /**
         * Get the token information for this slot.
         *
         * @returns the token information; when done, use gck_token_info_free()
         *          to release it
         */
        get_token_info(): Gck.TokenInfo;
        /**
         * Check if the PKCS11 slot has the given flags.
         *
         * @returns Whether one or more flags exist.
         * @param flags The flags to check.
         */
        has_flags(flags: number): boolean;
        /**
         * Create a hash value for the GckSlot.
         *
         * This function is intended for easily hashing a GckSlot to add to
         * a GHashTable or similar data structure.
         *
         * @returns An integer that can be used as a hash value, or 0 if invalid.
         */
        hash(): number;
        /**
         * Check whether the PKCS#11 URI matches the slot
         *
         * @returns whether the URI matches or not
         * @param uri the uri to match against the slot
         */
        match(uri: Gck.UriData): boolean;
        /**
         * Open a session on the slot. If the 'auto reuse' setting is set,
         * then this may be a recycled session with the same flags.
         *
         * This call may block for an indefinite period.
         *
         * @returns a new session or %NULL if an error occurs
         * @param options The #GckSessionOptions to open a session with.
         * @param interaction The #GTlsInteraction to use, or %NULL.
         * @param cancellable An optional cancellation object, or %NULL.
         */
        open_session(
            options: Gck.SessionOptions | null,
            interaction?: Gio.TlsInteraction | null,
            cancellable?: Gio.Cancellable | null,
        ): Gck.Session;
        /**
         * Open a session on the slot. If the 'auto reuse' setting is set,
         * then this may be a recycled session with the same flags.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param options The options to open the new session with.
         * @param interaction The #GTlsInteraction to use, or %NULL.
         * @param cancellable Optional cancellation object, or %NULL.
         */
        open_session_async(
            options: Gck.SessionOptions | null,
            interaction?: Gio.TlsInteraction | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Gck.Session>;
        /**
         * Open a session on the slot. If the 'auto reuse' setting is set,
         * then this may be a recycled session with the same flags.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param options The options to open the new session with.
         * @param interaction The #GTlsInteraction to use, or %NULL.
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        open_session_async(
            options: Gck.SessionOptions | null,
            interaction: Gio.TlsInteraction | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Open a session on the slot. If the 'auto reuse' setting is set,
         * then this may be a recycled session with the same flags.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param options The options to open the new session with.
         * @param interaction The #GTlsInteraction to use, or %NULL.
         * @param cancellable Optional cancellation object, or %NULL.
         * @param callback Called when the operation completes.
         */
        open_session_async(
            options: Gck.SessionOptions | null,
            interaction?: Gio.TlsInteraction | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gck.Session> | void;
        /**
         * Get the result of an open session operation. If the 'auto reuse' setting is set,
         * then this may be a recycled session with the same flags.
         *
         * @returns the new session or %NULL if an error occurs
         * @param result The result passed to the callback.
         */
        open_session_finish(result: Gio.AsyncResult): Gck.Session;
    }
}
export default classes;
