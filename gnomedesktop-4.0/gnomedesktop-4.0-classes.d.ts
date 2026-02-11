import type GnomeDesktop from './gnomedesktop-4.0.d.ts';
import Gio from '@girs/gio-2.0';
import GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import GLib from '@girs/glib-2.0';
import GModule from '@girs/gmodule-2.0';
import GdkPixbuf from '@girs/gdkpixbuf-2.0';
import GDesktopEnums from '@girs/gdesktopenums-3.0';
declare namespace classes {
    class DesktopThumbnailFactory extends GObjectClasses.Object {
        static '$gtype': GObject.GType<DesktopThumbnailFactory>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GnomeDesktop.DesktopThumbnailFactory.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GnomeDesktop.DesktopThumbnailFactory.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(size: GnomeDesktop.DesktopThumbnailSize): GnomeDesktop.DesktopThumbnailFactory;
        // Signals
        connect<K extends keyof GnomeDesktop.DesktopThumbnailFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.DesktopThumbnailFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GnomeDesktop.DesktopThumbnailFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.DesktopThumbnailFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GnomeDesktop.DesktopThumbnailFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GnomeDesktop.DesktopThumbnailFactory.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns TRUE if this GnomeDesktopThumbnailFactory can (at least try) to thumbnail
         * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         *
         * @returns TRUE if the file can be thumbnailed.
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param mtime the mtime of the file
         */
        can_thumbnail(uri: string, mime_type: string, mtime: number): boolean;
        /**
         * Creates a failed thumbnail for the file so that we don't try
         * to re-thumbnail the file later.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         *
         * @returns TRUE if everything went fine; FALSE if there was an error.
         * @param uri the uri of a file
         * @param mtime the modification time of the file
         * @param cancellable a GCancellable object, or NULL
         */
        create_failed_thumbnail(uri: string, mtime: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
         *
         * Since 43.0
         *
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         */
        create_failed_thumbnail_async(
            uri: string,
            original_mtime: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
         *
         * Since 43.0
         *
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        create_failed_thumbnail_async(
            uri: string,
            original_mtime: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
         *
         * Since 43.0
         *
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        create_failed_thumbnail_async(
            uri: string,
            original_mtime: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        create_failed_thumbnail_finish(result: Gio.AsyncResult): boolean;
        /**
         * Tries to generate a thumbnail for the specified file. If it succeeds
         * it returns a pixbuf that can be used as a thumbnail.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         *
         * @returns thumbnail pixbuf if thumbnailing succeeded, %NULL otherwise and error will be set
         * @param uri the uri of a file
         * @param mime_type the mime type of the file
         * @param cancellable a #GCancellable object or NULL
         */
        generate_thumbnail(uri: string, mime_type: string, cancellable?: Gio.Cancellable | null): GdkPixbuf.Pixbuf;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
         *
         * Since 43.0
         *
         * @param uri the URI of a file
         * @param mime_type the MIME type of the file
         * @param cancellable a Cancellable object
         */
        generate_thumbnail_async(
            uri: string,
            mime_type: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GdkPixbuf.Pixbuf>;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
         *
         * Since 43.0
         *
         * @param uri the URI of a file
         * @param mime_type the MIME type of the file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        generate_thumbnail_async(
            uri: string,
            mime_type: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
         *
         * Since 43.0
         *
         * @param uri the URI of a file
         * @param mime_type the MIME type of the file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        generate_thumbnail_async(
            uri: string,
            mime_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GdkPixbuf.Pixbuf> | void;
        generate_thumbnail_finish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf;
        /**
         * Tries to locate an failed thumbnail for the file specified. Writing
         * and looking for failed thumbnails is important to avoid to try to
         * thumbnail e.g. broken images several times.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         *
         * @returns TRUE if there is a failed thumbnail for the file.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         */
        has_valid_failed_thumbnail(uri: string, mtime: number): boolean;
        /**
         * Tries to locate an existing thumbnail for the file specified.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         *
         * @returns The absolute path of the thumbnail, or %NULL if none exist.
         * @param uri the uri of a file
         * @param mtime the mtime of the file
         */
        lookup(uri: string, mtime: number): string;
        /**
         * Saves `thumbnail` at the right place. If the save fails a
         * failed thumbnail is written.
         *
         * Usage of this function is threadsafe and does blocking I/O.
         *
         * @returns TRUE if everything went fine; FALSE if there was an error.
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a GCancellable object, or NULL
         */
        save_thumbnail(
            thumbnail: GdkPixbuf.Pixbuf,
            uri: string,
            original_mtime: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
         *
         * Since 43.0
         *
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         */
        save_thumbnail_async(
            thumbnail: GdkPixbuf.Pixbuf,
            uri: string,
            original_mtime: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
         *
         * Since 43.0
         *
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        save_thumbnail_async(
            thumbnail: GdkPixbuf.Pixbuf,
            uri: string,
            original_mtime: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
         *
         * Since 43.0
         *
         * @param thumbnail the thumbnail as a pixbuf
         * @param uri the uri of a file
         * @param original_mtime the modification time of the original file
         * @param cancellable a Cancellable object
         * @param callback a function that will be called when the task has ended
         */
        save_thumbnail_async(
            thumbnail: GdkPixbuf.Pixbuf,
            uri: string,
            original_mtime: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        save_thumbnail_finish(result: Gio.AsyncResult): boolean;
    }
    class IdleMonitor extends GObjectClasses.Object implements Gio.Initable {
        static '$gtype': GObject.GType<IdleMonitor>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GnomeDesktop.IdleMonitor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GnomeDesktop.IdleMonitor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): GnomeDesktop.IdleMonitor;
        // Signals
        connect<K extends keyof GnomeDesktop.IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GnomeDesktop.IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GnomeDesktop.IdleMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GnomeDesktop.IdleMonitor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        add_idle_watch(interval_msec: number, callback?: GnomeDesktop.IdleMonitorWatchFunc | null): number;
        add_user_active_watch(callback?: GnomeDesktop.IdleMonitorWatchFunc | null): number;
        get_idletime(): number;
        /**
         * Removes an idle time watcher, previously added by
         * gnome_idle_monitor_add_idle_watch() or
         * gnome_idle_monitor_add_user_active_watch().
         *
         * @param id A watch ID
         */
        remove_watch(id: number): void;
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
    class PnpIds extends GObjectClasses.Object {
        static '$gtype': GObject.GType<PnpIds>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GnomeDesktop.PnpIds.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GnomeDesktop.PnpIds.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): GnomeDesktop.PnpIds;
        // Signals
        connect<K extends keyof GnomeDesktop.PnpIds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.PnpIds.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GnomeDesktop.PnpIds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.PnpIds.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GnomeDesktop.PnpIds.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GnomeDesktop.PnpIds.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Find the full manufacturer name for the given PNP ID.
         *
         * @returns a new string representing the manufacturer name,
         * or %NULL when not found.
         * @param pnp_id the PNP ID to look for
         */
        get_pnp_id(pnp_id: string): string;
    }
    class WallClock extends GObjectClasses.Object {
        static '$gtype': GObject.GType<WallClock>;
        // Properties
        /**
         * A formatted string representing the current clock display.
         */
        get clock(): string;
        /**
         * If %TRUE, the formatted clock will always have seconds precision and the
         * 'clock' property will always be updated every second, irrespective of
         * system configuration.
         */
        get force_seconds(): boolean;
        set force_seconds(val: boolean);
        /**
         * If %TRUE, the formatted clock will always have seconds precision and the
         * 'clock' property will always be updated every second, irrespective of
         * system configuration.
         */
        get forceSeconds(): boolean;
        set forceSeconds(val: boolean);
        /**
         * If %TRUE, the formatted clock will never include a date or the
         * day of the week, irrespective of configuration.
         */
        get time_only(): boolean;
        set time_only(val: boolean);
        /**
         * If %TRUE, the formatted clock will never include a date or the
         * day of the week, irrespective of configuration.
         */
        get timeOnly(): boolean;
        set timeOnly(val: boolean);
        /**
         * The timezone used for this clock
         */
        get timezone(): GLib.TimeZone;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GnomeDesktop.WallClock.SignalSignatures;
        // Fields
        parent_object: GObject.Object;
        // Constructors
        constructor(properties?: Partial<GnomeDesktop.WallClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): GnomeDesktop.WallClock;
        // Signals
        connect<K extends keyof GnomeDesktop.WallClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.WallClock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GnomeDesktop.WallClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.WallClock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GnomeDesktop.WallClock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GnomeDesktop.WallClock.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the string representing the current time of this clock
         * according to the user settings.
         *
         * @returns the time of the clock as a string.
         *      This string points to internally allocated storage and
         *      must not be freed, modified or stored.
         */
        get_clock(): string;
        /**
         * Returns the current local time zone used by this clock.
         *
         * @returns the #GTimeZone of the clock.
         */
        get_timezone(): GLib.TimeZone;
        string_for_datetime(
            now: GLib.DateTime,
            clock_format: GDesktopEnums.ClockFormat | null,
            show_weekday: boolean,
            show_full_date: boolean,
            show_seconds: boolean,
        ): string;
    }
    class XkbInfo extends GObjectClasses.Object {
        static '$gtype': GObject.GType<XkbInfo>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GnomeDesktop.XkbInfo.SignalSignatures;
        // Fields
        parent_object: GObject.Object;
        // Constructors
        constructor(properties?: Partial<GnomeDesktop.XkbInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): GnomeDesktop.XkbInfo;
        // Signals
        connect<K extends keyof GnomeDesktop.XkbInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.XkbInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GnomeDesktop.XkbInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GnomeDesktop.XkbInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GnomeDesktop.XkbInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GnomeDesktop.XkbInfo.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        description_for_group(group_id: string): string;
        description_for_option(group_id: string, id: string): string;
        /**
         * Returns a list of all layout identifiers we know about.
         *
         * @returns the list
         * of layout names. The caller takes ownership of the #GList but not
         * of the strings themselves, those are internally allocated and must
         * not be modified.
         */
        get_all_layouts(): string[];
        /**
         * Returns a list of all option group identifiers we know about.
         *
         * @returns the list
         * of option group ids. The caller takes ownership of the #GList but
         * not of the strings themselves, those are internally allocated and
         * must not be modified.
         */
        get_all_option_groups(): string[];
        /**
         * Returns a list of all languages supported by a layout, given by
         * `layout_id`.
         *
         * @returns the list of
         * ISO 639 code strings. The caller takes ownership of the #GList but
         * not of the strings themselves, those are internally allocated and
         * must not be modified.
         * @param layout_id a layout identifier
         */
        get_languages_for_layout(layout_id: string): string[];
        /**
         * Retrieves information about a layout. Both `display_name` and
         * `short_name` are suitable to show in UIs and might be localized if
         * translations are available.
         *
         * Some layouts don't provide a short name (2 or 3 letters) or don't
         * specify a XKB variant, in those cases `short_name` or `xkb_variant`
         * are empty strings, i.e. "".
         *
         * If the given layout doesn't exist the return value is %FALSE and
         * all the (out) parameters are set to %NULL.
         *
         * @returns %TRUE if the layout exists or %FALSE otherwise.
         * @param id layout's identifier about which to retrieve the info
         */
        get_layout_info(id: string): [boolean, string, string, string, string];
        /**
         * Returns a list of all layout identifiers we know about for
         * `country_code`.
         *
         * @returns the list
         * of layout ids. The caller takes ownership of the #GList but not of
         * the strings themselves, those are internally allocated and must not
         * be modified.
         * @param country_code an ISO 3166 code string
         */
        get_layouts_for_country(country_code: string): string[];
        /**
         * Returns a list of all layout identifiers we know about for
         * `language_code`.
         *
         * @returns the list
         * of layout ids. The caller takes ownership of the #GList but not of
         * the strings themselves, those are internally allocated and must not
         * be modified.
         * @param language_code an ISO 639 code string
         */
        get_layouts_for_language(language_code: string): string[];
        /**
         * Returns a list of all option identifiers we know about for group
         * `group_id`.
         *
         * @returns the list
         * of option ids. The caller takes ownership of the #GList but not of
         * the strings themselves, those are internally allocated and must not
         * be modified.
         * @param group_id group's identifier about which to retrieve the options
         */
        get_options_for_group(group_id: string): string[];
    }
}
export default classes;
