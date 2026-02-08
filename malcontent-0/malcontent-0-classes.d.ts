import type Malcontent from './malcontent-0.d.ts';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
declare namespace classes {
    class Manager extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Manager>;
        // Properties
        /**
         * A connection to the system bus, where accounts-service runs. It’s provided
         * mostly for testing purposes, or to allow an existing connection to be
         * re-used.
         */
        get connection(): Gio.DBusConnection;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Malcontent.Manager.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Malcontent.Manager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(connection: Gio.DBusConnection): Malcontent.Manager;
        // Signals
        connect<K extends keyof Malcontent.Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Malcontent.Manager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Malcontent.Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Malcontent.Manager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Malcontent.Manager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Malcontent.Manager.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Synchronous version of mct_manager_get_app_filter_async().
         *
         * @returns app filter for the queried user
         * @param user_id ID of the user to query, typically coming from getuid()
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         */
        get_app_filter(
            user_id: number,
            flags: Malcontent.ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): Malcontent.AppFilter;
        /**
         * Asynchronously get a snapshot of the app filter settings for the given
         * `user_id`.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned.
         *
         * @param user_id ID of the user to query, typically coming from getuid()
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         */
        get_app_filter_async(
            user_id: number,
            flags: Malcontent.ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Malcontent.AppFilter>;
        /**
         * Asynchronously get a snapshot of the app filter settings for the given
         * `user_id`.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned.
         *
         * @param user_id ID of the user to query, typically coming from getuid()
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        get_app_filter_async(
            user_id: number,
            flags: Malcontent.ManagerGetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get a snapshot of the app filter settings for the given
         * `user_id`.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned.
         *
         * @param user_id ID of the user to query, typically coming from getuid()
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        get_app_filter_async(
            user_id: number,
            flags: Malcontent.ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Malcontent.AppFilter> | void;
        /**
         * Finish an asynchronous operation to get the app filter for a user, started
         * with mct_manager_get_app_filter_async().
         *
         * @returns app filter for the queried user
         * @param result a #GAsyncResult
         */
        get_app_filter_finish(result: Gio.AsyncResult): Malcontent.AppFilter;
        /**
         * Synchronous version of mct_manager_get_session_limits_async().
         *
         * @returns session limits for the queried user
         * @param user_id ID of the user to query, typically coming from getuid()
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         */
        get_session_limits(
            user_id: number,
            flags: Malcontent.ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): Malcontent.SessionLimits;
        /**
         * Asynchronously get a snapshot of the session limit settings for the given
         * `user_id`.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned via mct_manager_get_session_limits_finish().
         *
         * @param user_id ID of the user to query, typically coming from getuid()
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         */
        get_session_limits_async(
            user_id: number,
            flags: Malcontent.ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Malcontent.SessionLimits>;
        /**
         * Asynchronously get a snapshot of the session limit settings for the given
         * `user_id`.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned via mct_manager_get_session_limits_finish().
         *
         * @param user_id ID of the user to query, typically coming from getuid()
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        get_session_limits_async(
            user_id: number,
            flags: Malcontent.ManagerGetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get a snapshot of the session limit settings for the given
         * `user_id`.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned via mct_manager_get_session_limits_finish().
         *
         * @param user_id ID of the user to query, typically coming from getuid()
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        get_session_limits_async(
            user_id: number,
            flags: Malcontent.ManagerGetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Malcontent.SessionLimits> | void;
        /**
         * Finish an asynchronous operation to get the session limits for a user,
         * started with mct_manager_get_session_limits_async().
         *
         * @returns session limits for the queried user
         * @param result a #GAsyncResult
         */
        get_session_limits_finish(result: Gio.AsyncResult): Malcontent.SessionLimits;
        /**
         * Synchronous version of mct_manager_set_app_filter_async().
         *
         * @returns %TRUE on success, %FALSE otherwise
         * @param user_id ID of the user to set the filter for, typically coming from getuid()
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         */
        set_app_filter(
            user_id: number,
            app_filter: Malcontent.AppFilter,
            flags: Malcontent.ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously set the app filter settings for the given `user_id` to the
         * given `app_filter` instance. This will set all fields of the app filter.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned. The user’s app filter settings will be left in an undefined state.
         *
         * @param user_id ID of the user to set the filter for, typically coming from getuid()
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         */
        set_app_filter_async(
            user_id: number,
            app_filter: Malcontent.AppFilter,
            flags: Malcontent.ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously set the app filter settings for the given `user_id` to the
         * given `app_filter` instance. This will set all fields of the app filter.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned. The user’s app filter settings will be left in an undefined state.
         *
         * @param user_id ID of the user to set the filter for, typically coming from getuid()
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        set_app_filter_async(
            user_id: number,
            app_filter: Malcontent.AppFilter,
            flags: Malcontent.ManagerSetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously set the app filter settings for the given `user_id` to the
         * given `app_filter` instance. This will set all fields of the app filter.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned. The user’s app filter settings will be left in an undefined state.
         *
         * @param user_id ID of the user to set the filter for, typically coming from getuid()
         * @param app_filter the app filter to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        set_app_filter_async(
            user_id: number,
            app_filter: Malcontent.AppFilter,
            flags: Malcontent.ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation to set the app filter for a user, started
         * with mct_manager_set_app_filter_async().
         *
         * @returns %TRUE on success, %FALSE otherwise
         * @param result a #GAsyncResult
         */
        set_app_filter_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronous version of mct_manager_set_session_limits_async().
         *
         * @returns %TRUE on success, %FALSE otherwise
         * @param user_id ID of the user to set the limits for, typically coming from getuid()
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         */
        set_session_limits(
            user_id: number,
            session_limits: Malcontent.SessionLimits,
            flags: Malcontent.ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously set the session limits settings for the given `user_id` to the
         * given `session_limits` instance.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned via mct_manager_set_session_limits_finish(). The user’s session
         * limits settings will be left in an undefined state.
         *
         * @param user_id ID of the user to set the limits for, typically coming from getuid()
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         */
        set_session_limits_async(
            user_id: number,
            session_limits: Malcontent.SessionLimits,
            flags: Malcontent.ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously set the session limits settings for the given `user_id` to the
         * given `session_limits` instance.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned via mct_manager_set_session_limits_finish(). The user’s session
         * limits settings will be left in an undefined state.
         *
         * @param user_id ID of the user to set the limits for, typically coming from getuid()
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        set_session_limits_async(
            user_id: number,
            session_limits: Malcontent.SessionLimits,
            flags: Malcontent.ManagerSetValueFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously set the session limits settings for the given `user_id` to the
         * given `session_limits` instance.
         *
         * On failure, an #MctManagerError, a #GDBusError or a #GIOError will be
         * returned via mct_manager_set_session_limits_finish(). The user’s session
         * limits settings will be left in an undefined state.
         *
         * @param user_id ID of the user to set the limits for, typically coming from getuid()
         * @param session_limits the session limits to set for the user
         * @param flags flags to affect the behaviour of the call
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback
         */
        set_session_limits_async(
            user_id: number,
            session_limits: Malcontent.SessionLimits,
            flags: Malcontent.ManagerSetValueFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation to set the session limits for a user,
         * started with mct_manager_set_session_limits_async().
         *
         * @returns %TRUE on success, %FALSE otherwise
         * @param result a #GAsyncResult
         */
        set_session_limits_finish(result: Gio.AsyncResult): boolean;
    }
}
export default classes;
