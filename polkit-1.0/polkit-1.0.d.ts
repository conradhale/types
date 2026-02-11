/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import Gio from '@girs/gio-2.0';
import GObject from '@girs/gobject-2.0';
import GLib from '@girs/glib-2.0';
import GModule from '@girs/gmodule-2.0';
import '@girs/gjs';
import type classes from './polkit-1.0-classes.d.ts';
export { classes as PolkitClasses };
export namespace Polkit {
    /**
     * Polkit-1.0
     */
    /**
     * Possible error when using PolicyKit.
     */
    class Error extends GLib.Error {
        static '$gtype': GObject.GType<Error>;
        // Static Fields
        /**
         * The operation failed.
         */
        static FAILED: number;
        /**
         * The operation was cancelled.
         */
        static CANCELLED: number;
        /**
         * Operation is not supported.
         */
        static NOT_SUPPORTED: number;
        /**
         * Not authorized to perform operation.
         */
        static NOT_AUTHORIZED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * Possible implicit authorizations.
     */
    export namespace ImplicitAuthorization {
        export const $gtype: GObject.GType<ImplicitAuthorization>;
    }
    enum ImplicitAuthorization {
        /**
         * Unknown whether the subject is authorized, never returned in any public API.
         */
        UNKNOWN = -1,
        /**
         * Subject is not authorized.
         */
        NOT_AUTHORIZED,
        /**
         * Authentication is required.
         */
        AUTHENTICATION_REQUIRED = 1,
        /**
         * Authentication as an administrator is required.
         */
        ADMINISTRATOR_AUTHENTICATION_REQUIRED = 2,
        /**
         * Authentication is required. If the authorization is obtained, it is retained.
         */
        AUTHENTICATION_REQUIRED_RETAINED = 3,
        /**
         * Authentication as an administrator is required. If the authorization is obtained, it is retained.
         */
        ADMINISTRATOR_AUTHENTICATION_REQUIRED_RETAINED = 4,
        /**
         * The subject is authorized
         */
        AUTHORIZED = 5,
    }
    function error_quark(): GLib.Quark;
    /**
     * Creates an object from `str` that implements the #PolkitIdentity
     * interface.
     *
     * @returns A #PolkitIdentity or %NULL
     * if `error` is set. Free with g_object_unref().
     * @param str A string obtained from polkit_identity_to_string().
     */
    function identity_from_string(str: string): Identity | null;
    function implicit_authorization_from_string(string: string): [boolean, ImplicitAuthorization];
    function implicit_authorization_to_string(implicit_authorization: ImplicitAuthorization | null): string;
    /**
     * Creates an object from `str` that implements the #PolkitSubject
     * interface.
     *
     * @returns A #PolkitSubject or %NULL if `error` is
     * set. Free with g_object_unref().
     * @param str A string obtained from polkit_subject_to_string().
     */
    function subject_from_string(str: string): Subject;
    /**
     * Flags describing features supported by the Authority implementation.
     */
    export namespace AuthorityFeatures {
        export const $gtype: GObject.GType<AuthorityFeatures>;
    }
    enum AuthorityFeatures {
        /**
         * No flags set.
         */
        NONE,
        /**
         * The authority supports temporary authorizations
         * that can be obtained through authentication.
         */
        TEMPORARY_AUTHORIZATION = 1,
    }
    /**
     * Possible flags when checking authorizations.
     */
    export namespace CheckAuthorizationFlags {
        export const $gtype: GObject.GType<CheckAuthorizationFlags>;
    }
    enum CheckAuthorizationFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * If the subject can obtain the authorization
         * through authentication, and an authentication agent is available, then attempt to do so. Note, this
         * means that the method used for checking authorization is likely to block for a long time.
         */
        ALLOW_USER_INTERACTION = 1,
        /**
         * Check access against policy even for root user.
         */
        ALWAYS_CHECK = 2,
    }
    namespace ActionDescription {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type ActionDescription = (typeof classes.ActionDescription)['prototype'];
    const ActionDescription: typeof classes.ActionDescription &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.ActionDescription.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ActionDescription.SignalSignatures> & classes.ActionDescription);
    namespace Authority {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed(): void;
            'sessions-changed'(): void;
            'notify::backend-features'(pspec: GObject.ParamSpec): void;
            'notify::backend-name'(pspec: GObject.ParamSpec): void;
            'notify::backend-version'(pspec: GObject.ParamSpec): void;
            'notify::owner'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {
            /**
             * The features of the currently used Authority backend.
             */
            backend_features: AuthorityFeatures;
            /**
             * The features of the currently used Authority backend.
             */
            backendFeatures: AuthorityFeatures;
            /**
             * The name of the currently used Authority backend.
             */
            backend_name: string;
            /**
             * The name of the currently used Authority backend.
             */
            backendName: string;
            backend_version: string;
            backendVersion: string;
            /**
             * The unique name of the owner of the org.freedesktop.PolicyKit1
             * D-Bus service or %NULL if there is no owner. Connect to the
             * #GObject::notify signal to track changes to this property.
             */
            owner: string;
        }
    }
    type Authority = (typeof classes.Authority)['prototype'];
    const Authority: typeof classes.Authority &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.Authority.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Authority.SignalSignatures> & classes.Authority);
    namespace AuthorizationResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type AuthorizationResult = (typeof classes.AuthorizationResult)['prototype'];
    const AuthorizationResult: typeof classes.AuthorizationResult &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.AuthorizationResult.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, AuthorizationResult.SignalSignatures> & classes.AuthorizationResult);
    namespace Details {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Details = (typeof classes.Details)['prototype'];
    const Details: typeof classes.Details &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.Details.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Details.SignalSignatures> & classes.Details);
    namespace Permission {
        // Signal signatures
        interface SignalSignatures extends Gio.Permission.SignalSignatures {
            'notify::action-id'(pspec: GObject.ParamSpec): void;
            'notify::subject'(pspec: GObject.ParamSpec): void;
            'notify::allowed'(pspec: GObject.ParamSpec): void;
            'notify::can-acquire'(pspec: GObject.ParamSpec): void;
            'notify::can-release'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Gio.Permission.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {
            /**
             * The action identifier to use for the permission.
             */
            action_id: string;
            /**
             * The action identifier to use for the permission.
             */
            actionId: string;
            /**
             * The #PolkitSubject to use for the permission. If not set during
             * construction, it will be set to match the current process.
             */
            subject: Subject;
        }
    }
    type Permission = (typeof classes.Permission)['prototype'];
    const Permission: typeof classes.Permission &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.Permission.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Permission.SignalSignatures> & classes.Permission);
    namespace SystemBusName {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Subject.ConstructorProps {
            /**
             * The unique name on the system message bus.
             */
            name: string;
        }
    }
    type SystemBusName = (typeof classes.SystemBusName)['prototype'];
    const SystemBusName: typeof classes.SystemBusName &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.SystemBusName.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SystemBusName.SignalSignatures> & classes.SystemBusName);
    namespace TemporaryAuthorization {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type TemporaryAuthorization = (typeof classes.TemporaryAuthorization)['prototype'];
    const TemporaryAuthorization: typeof classes.TemporaryAuthorization &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.TemporaryAuthorization.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, TemporaryAuthorization.SignalSignatures> & classes.TemporaryAuthorization);
    namespace UnixGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::gid'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Identity.ConstructorProps {
            /**
             * The UNIX group id.
             */
            gid: number;
        }
    }
    type UnixGroup = (typeof classes.UnixGroup)['prototype'];
    const UnixGroup: typeof classes.UnixGroup &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.UnixGroup.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, UnixGroup.SignalSignatures> & classes.UnixGroup);
    namespace UnixNetgroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Identity.ConstructorProps {
            /**
             * The NIS netgroup name.
             */
            name: string;
        }
    }
    type UnixNetgroup = (typeof classes.UnixNetgroup)['prototype'];
    const UnixNetgroup: typeof classes.UnixNetgroup &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.UnixNetgroup.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, UnixNetgroup.SignalSignatures> & classes.UnixNetgroup);
    namespace UnixProcess {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::gids'(pspec: GObject.ParamSpec): void;
            'notify::pid'(pspec: GObject.ParamSpec): void;
            'notify::pidfd'(pspec: GObject.ParamSpec): void;
            'notify::pidfd-is-safe'(pspec: GObject.ParamSpec): void;
            'notify::start-time'(pspec: GObject.ParamSpec): void;
            'notify::uid'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Subject.ConstructorProps {
            /**
             * The UNIX group ids of the process.
             */
            gids: any[];
            /**
             * The UNIX process id.
             */
            pid: number;
            /**
             * The UNIX process id file descriptor.
             */
            pidfd: number;
            pidfd_is_safe: boolean;
            pidfdIsSafe: boolean;
            /**
             * The start time of the process.
             */
            start_time: number;
            /**
             * The start time of the process.
             */
            startTime: number;
            /**
             * The UNIX user id of the process or -1 if unknown.
             *
             * Note that this is the real user-id, not the effective user-id.
             */
            uid: number;
        }
    }
    type UnixProcess = (typeof classes.UnixProcess)['prototype'];
    const UnixProcess: typeof classes.UnixProcess &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.UnixProcess.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, UnixProcess.SignalSignatures> & classes.UnixProcess);
    namespace UnixSession {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::pid'(pspec: GObject.ParamSpec): void;
            'notify::session-id'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps,
                Subject.ConstructorProps {
            /**
             * The UNIX process id to look up the session.
             */
            pid: number;
            /**
             * The UNIX session id.
             */
            session_id: string;
            /**
             * The UNIX session id.
             */
            sessionId: string;
        }
    }
    type UnixSession = (typeof classes.UnixSession)['prototype'];
    const UnixSession: typeof classes.UnixSession &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.UnixSession.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, UnixSession.SignalSignatures> & classes.UnixSession);
    namespace UnixUser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::uid'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Identity.ConstructorProps {
            /**
             * The UNIX user id.
             */
            uid: number;
        }
    }
    type UnixUser = (typeof classes.UnixUser)['prototype'];
    const UnixUser: typeof classes.UnixUser &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Polkit.UnixUser.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, UnixUser.SignalSignatures> & classes.UnixUser);
    export type ActionDescriptionClass = typeof ActionDescription;
    export type AuthorityClass = typeof Authority;
    export type AuthorizationResultClass = typeof AuthorizationResult;
    export type DetailsClass = typeof Details;
    export type IdentityIface = typeof Identity;
    export type SubjectIface = typeof Subject;
    export type SystemBusNameClass = typeof SystemBusName;
    export type TemporaryAuthorizationClass = typeof TemporaryAuthorization;
    export type UnixGroupClass = typeof UnixGroup;
    export type UnixNetgroupClass = typeof UnixNetgroup;
    export type UnixProcessClass = typeof UnixProcess;
    export type UnixSessionClass = typeof UnixSession;
    export type UnixUserClass = typeof UnixUser;
    namespace Identity {
        /**
         * Interface for implementing Identity.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Checks if `a` and `b` are equal, ie. represent the same identity.
             *
             * This function can be used in e.g. g_hash_table_new().
             *
             * @param b A #PolkitIdentity.
             */
            vfunc_equal(b: Identity): boolean;
            /**
             * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `identity` to a string that can be used in
             * polkit_identity_from_string().
             */
            vfunc_to_string(): string;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface IdentityNamespace {
        $gtype: GObject.GType<Identity>;
        prototype: Identity;
        /**
         * Creates an object from `str` that implements the #PolkitIdentity
         * interface.
         *
         * @param str A string obtained from polkit_identity_to_string().
         */
        from_string(str: string): Identity | null;
    }
    interface Identity extends GObject.Object, Identity.Interface {
        // Methods
        /**
         * Checks if `a` and `b` are equal, ie. represent the same identity.
         *
         * This function can be used in e.g. g_hash_table_new().
         *
         * @returns %TRUE if `a` and `b` are equal, %FALSE otherwise.
         * @param b A #PolkitIdentity.
         */
        equal(b: Identity): boolean;
        /**
         * Gets a hash code for `identity` that can be used with e.g. g_hash_table_new().
         *
         * @returns A hash code.
         */
        hash(): number;
        /**
         * Serializes `identity` to a string that can be used in
         * polkit_identity_from_string().
         *
         * @returns A string representing `identity`. Free with g_free().
         */
        to_string(): string;
    }
    export const Identity: IdentityNamespace & (new () => Identity);
    namespace Subject {
        /**
         * Interface for implementing Subject.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Checks if `a` and `b` are equal, ie. represent the same subject.
             * However, avoid calling polkit_subject_equal() to compare two processes;
             * for more information see the `PolkitUnixProcess` documentation.
             *
             * This function can be used in e.g. g_hash_table_new().
             *
             * @param b A #PolkitSubject.
             */
            vfunc_equal(b: Subject): boolean;
            /**
             * Asynchronously checks if `subject` exists.
             *
             * When the operation is finished, `callback` will be invoked in the
             * <link linkend="g-main-context-push-thread-default">thread-default
             * main loop</link> of the thread you are calling this method
             * from. You can then call polkit_subject_exists_finish() to get the
             * result of the operation.
             *
             * @param cancellable A #GCancellable or %NULL.
             * @param callback A #GAsyncReadyCallback to call when the request is satisfied
             */
            vfunc_exists(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
            /**
             * Finishes checking whether a subject exists.
             *
             * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
             */
            vfunc_exists_finish(res: Gio.AsyncResult): boolean;
            /**
             * Checks if `subject` exists.
             *
             * This is a synchronous blocking call - the calling thread is blocked
             * until a reply is received. See polkit_subject_exists() for the
             * asynchronous version.
             *
             * @param cancellable A #GCancellable or %NULL.
             */
            vfunc_exists_sync(cancellable?: Gio.Cancellable | null): boolean;
            /**
             * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
             */
            vfunc_hash(): number;
            /**
             * Serializes `subject` to a string that can be used in
             * polkit_subject_from_string().
             */
            vfunc_to_string(): string;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface SubjectNamespace {
        $gtype: GObject.GType<Subject>;
        prototype: Subject;
        /**
         * Creates an object from `str` that implements the #PolkitSubject
         * interface.
         *
         * @param str A string obtained from polkit_subject_to_string().
         */
        from_string(str: string): Subject;
    }
    interface Subject extends GObject.Object, Subject.Interface {
        // Methods
        /**
         * Checks if `a` and `b` are equal, ie. represent the same subject.
         * However, avoid calling polkit_subject_equal() to compare two processes;
         * for more information see the `PolkitUnixProcess` documentation.
         *
         * This function can be used in e.g. g_hash_table_new().
         *
         * @returns %TRUE if `a` and `b` are equal, %FALSE otherwise.
         * @param b A #PolkitSubject.
         */
        equal(b: Subject): boolean;
        /**
         * Asynchronously checks if `subject` exists.
         *
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call polkit_subject_exists_finish() to get the
         * result of the operation.
         *
         * @param cancellable A #GCancellable or %NULL.
         */
        exists(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously checks if `subject` exists.
         *
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call polkit_subject_exists_finish() to get the
         * result of the operation.
         *
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied
         */
        exists(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously checks if `subject` exists.
         *
         * When the operation is finished, `callback` will be invoked in the
         * <link linkend="g-main-context-push-thread-default">thread-default
         * main loop</link> of the thread you are calling this method
         * from. You can then call polkit_subject_exists_finish() to get the
         * result of the operation.
         *
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied
         */
        exists(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes checking whether a subject exists.
         *
         * @returns %TRUE if the subject exists, %FALSE if not or `error` is set.
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to polkit_subject_exists().
         */
        exists_finish(res: Gio.AsyncResult): boolean;
        /**
         * Checks if `subject` exists.
         *
         * This is a synchronous blocking call - the calling thread is blocked
         * until a reply is received. See polkit_subject_exists() for the
         * asynchronous version.
         *
         * @returns %TRUE if the subject exists, %FALSE if not or `error` is set.
         * @param cancellable A #GCancellable or %NULL.
         */
        exists_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets a hash code for `subject` that can be used with e.g. g_hash_table_new().
         *
         * @returns A hash code.
         */
        hash(): number;
        /**
         * Serializes `subject` to a string that can be used in
         * polkit_subject_from_string().
         *
         * @returns A string representing `subject`. Free with g_free().
         */
        to_string(): string;
    }
    export const Subject: SubjectNamespace & (new () => Subject);
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
export default Polkit;
