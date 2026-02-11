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
import type classes from './gck-2-classes.d.ts';
export { classes as GckClasses };
export namespace Gck {
    /**
     * Gck-2
     */
    /**
     * Flags to be used with a [method`Builder`.init_full] and [ctor`Builder`.new].
     */
    export namespace BuilderFlags {
        export const $gtype: GObject.GType<BuilderFlags>;
    }
    enum BuilderFlags {
        /**
         * no special flags
         */
        NONE,
        /**
         * use non-pageable memory for the values of the attributes
         */
        SECURE_MEMORY = 1,
    }
    /**
     * Various error codes. All the `CKR_XXX` error codes from PKCS#11 are also
     * relevant error codes.
     *
     * Note that errors are returned as [struct`GLib`.Error] structures. The `code`
     * member of the error then contains the raw PKCS#11 `CK_RV` result value.
     */
    class Error extends GLib.Error {
        static '$gtype': GObject.GType<Error>;
        // Static Fields
        /**
         * a result code that signifies there was a problem
         *                            loading a PKCS#11 module, usually a shared library
         */
        static PROBLEM: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * Various error codes used with PKCS#11 URIs
     */
    class UriError extends GLib.Error {
        static '$gtype': GObject.GType<UriError>;
        // Static Fields
        /**
         * invalid URI scheme
         */
        static BAD_SCHEME: number;
        /**
         * bad URI encoding
         */
        static BAD_ENCODING: number;
        /**
         * bad URI syntax
         */
        static BAD_SYNTAX: number;
        /**
         * bad URI version component
         */
        static BAD_VERSION: number;
        /**
         * piece of the URI was not found
         */
        static NOT_FOUND: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * Used as a terminator at the end of variable argument lists.
     */
    const INVALID: number;
    /**
     * The major version number of the Gck library.
     */
    const MAJOR_VERSION: number;
    /**
     * The micro version number of the Gck library.
     */
    const MICRO_VERSION: number;
    /**
     * The minor version number of the Gck library.
     */
    const MINOR_VERSION: number;
    /**
     * The URI will match specific version of modules. To be used as a GckUriFlags argument.
     */
    const URI_FOR_MODULE_WITH_VERSION: number;
    /**
     * The URI will match objects on a specific token. To be used as a GckUriFlags argument.
     */
    const URI_FOR_OBJECT_ON_TOKEN: number;
    /**
     * The token inserted into a device with a specific module.
     */
    const URI_FOR_OBJECT_ON_TOKEN_AND_MODULE: number;
    /**
     * Custom PKCS#11 errors that originate from the gck library, are
     * based at this error code.
     */
    const VENDOR_CODE: number;
    function error_quark(): GLib.Quark;
    /**
     * Get a message for a PKCS#11 return value or error code. Do not
     * pass `CKR_OK` or other non-errors to this function.
     *
     * @returns The user readable message.
     * @param rv The PKCS#11 return value to get a message for.
     */
    function message_from_rv(rv: number): string;
    /**
     * Setup an enumerator for listing matching objects on the modules.
     *
     * This call will not block but will return an enumerator immediately.
     *
     * @returns A new enumerator, which should be released
     * with g_object_unref().
     * @param modules The modules
     * @param attrs attributes that the objects must have, or empty for all objects
     * @param session_options Options from GckSessionOptions
     */
    function modules_enumerate_objects(
        modules: Module[],
        attrs: Attributes,
        session_options: SessionOptions | null,
    ): Enumerator;
    /**
     * Enumerate objects that match a URI.
     *
     * This call will not block. Use the [class`Enumerator]` functions in order to
     * get at the actual objects that match.
     *
     * @returns A new #GckEnumerator, or %NULL if an error occurs.
     * @param modules The modules
     * @param uri The URI that the enumerator will match
     * @param session_options Options from GckSessionOptions
     */
    function modules_enumerate_uri(modules: Module[], uri: string, session_options: SessionOptions | null): Enumerator;
    /**
     * Get a list of slots for across all of the modules.
     *
     * @returns A list of #GckSlot
     * objects.
     * @param modules The modules
     * @param token_present Whether to only list slots with token present
     */
    function modules_get_slots(modules: Module[], token_present: boolean): Slot[];
    /**
     * Load and initialize all the registered modules.
     *
     * @returns A newly allocated list
     * of #GckModule objects.
     * @param cancellable optional cancellation object
     */
    function modules_initialize_registered(cancellable?: Gio.Cancellable | null): Module[];
    /**
     * Load and initialize all the registered modules asynchronously.
     *
     * @param cancellable optional cancellation object
     */
    function modules_initialize_registered_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Module[]>;
    /**
     * Load and initialize all the registered modules asynchronously.
     *
     * @param cancellable optional cancellation object
     * @param callback a callback which will be called when the operation completes
     */
    function modules_initialize_registered_async(
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null,
    ): void;
    /**
     * Load and initialize all the registered modules asynchronously.
     *
     * @param cancellable optional cancellation object
     * @param callback a callback which will be called when the operation completes
     */
    function modules_initialize_registered_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Gio.Cancellable | null> | null,
    ): globalThis.Promise<Module[]> | void;
    /**
     * Finishes the asynchronous operation to initialize the registered
     * PKCS#11 modules.
     *
     * @returns a list of newly
     * initialized #GckModule objects
     * @param result the asynchronous result
     */
    function modules_initialize_registered_finish(result: Gio.AsyncResult): Module[];
    /**
     * Find an object that matches a URI.
     *
     * This call can block. Use [func`modules_enumerate_uri]` for a non-blocking
     * version.
     *
     * @returns A new #GckObject which should be released with
     * g_object_unref(), or %NULL if no matching object was found.
     * @param modules The modules
     * @param uri The URI the objects must match
     * @param session_options Options from GckSessionOptions
     */
    function modules_object_for_uri(
        modules: Module[],
        uri: string,
        session_options: SessionOptions | null,
    ): Object | null;
    /**
     * Find objects that match a URI.
     *
     * This call can block. Use [func`modules_enumerate_uri]` for a non-blocking
     * version.
     *
     * @returns A (possibly empty) list
     * of `Gck.Object`s.
     * @param modules The modules
     * @param uri The URI the objects must match
     * @param session_options Options from GckSessionOptions
     */
    function modules_objects_for_uri(modules: Module[], uri: string, session_options: SessionOptions | null): Object[];
    /**
     * Lookup a token that matches the URI.
     *
     * @returns A newly allocated #GckSlot or %NULL if no such
     * token was found.
     * @param modules The modules
     * @param uri The URI that the token must match
     */
    function modules_token_for_uri(modules: Module[], uri: string): Slot;
    /**
     * Lookup a token that matches the URI.
     *
     * @returns A list of newly allocated
     * #GckSlot objects.
     * @param modules The modules
     * @param uri The URI that the token must match
     */
    function modules_tokens_for_uri(modules: Module[], uri: string): Slot[];
    /**
     * Initialize a list of GckObject from raw PKCS#11 handles. The handles argument must contain
     * contiguous CK_OBJECT_HANDLE handles in an array.
     *
     * @returns The list of #GckObject
     *          objects.
     * @param session The session for these objects
     * @param object_handles The raw object handles.
     */
    function objects_from_handle_array(session: Session, object_handles: number[]): Object[];
    /**
     * Setup an enumerator for listing matching objects on the slots.
     *
     * This call will not block but will return an enumerator immediately.
     *
     * @returns a new enumerator
     * @param slots a list of #GckSlot to enumerate objects on.
     * @param match attributes that the objects must match, or empty for all objects
     * @param options options for opening a session
     */
    function slots_enumerate_objects(slots: Slot[], match: Attributes, options: SessionOptions | null): Enumerator;
    /**
     * Parse a PKCS#11 URI for use in a given context.
     *
     * The result will contain the fields that are relevant for
     * the given context. See #GckUriData  for more info.
     * Other fields will be set to %NULL.
     *
     * @returns a newly allocated #GckUriData; which should be
     *          freed with gck_uri_data_free()
     * @param string the URI to parse.
     * @param flags the context in which the URI will be used.
     */
    function uri_data_parse(string: string, flags: UriFlags | null): UriData;
    function uri_error_quark(): GLib.Quark;
    /**
     * Convert `CK_BBOOL` type memory to a boolean.
     *
     * @returns Whether the conversion was successful.
     * @param value memory to convert
     */
    function value_to_boolean(value: Uint8Array[] | string): [boolean, boolean];
    /**
     * Convert `CK_ULONG` type memory to a boolean.
     *
     * @returns Whether the conversion was successful.
     * @param value memory to convert
     */
    function value_to_ulong(value: Uint8Array[] | string): [boolean, number];
    interface Allocator {
        (data: any | null, length: number): any | null;
    }
    /**
     * Options for creating sessions.
     */
    export namespace SessionOptions {
        export const $gtype: GObject.GType<SessionOptions>;
    }
    enum SessionOptions {
        /**
         * Open session as read only
         */
        READ_ONLY,
        /**
         * Open sessions as read/write
         */
        READ_WRITE = 2,
        /**
         * Login as user on new sessions
         */
        LOGIN_USER = 4,
        /**
         * Authenticate as necessary
         */
        AUTHENTICATE = 8,
    }
    /**
     * Which parts of the PKCS#11 URI will be parsed or formatted. These can be
     * combined.
     */
    export namespace UriFlags {
        export const $gtype: GObject.GType<UriFlags>;
    }
    enum UriFlags {
        /**
         * the URI will be used to match objects.
         */
        FOR_OBJECT = 2,
        /**
         * the URI will be used to match tokens.
         */
        FOR_TOKEN = 4,
        /**
         * the URI will be used to match modules.
         */
        FOR_MODULE = 8,
        /**
         * the URI has specific version numbers for module and/or token
         */
        WITH_VERSION = 16,
        /**
         * parse all recognized components of the URI.
         */
        FOR_ANY = 65535,
    }
    namespace Enumerator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::chained'(pspec: GObject.ParamSpec): void;
            'notify::interaction'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * Chained enumerator, which will be enumerated when this enumerator
             * has enumerated all its objects.
             */
            chained: Enumerator;
            /**
             * Interaction object used to ask the user for pins when opening
             * sessions. Used if the session_options of the enumerator have
             * %GCK_SESSION_LOGIN_USER
             */
            interaction: Gio.TlsInteraction;
        }
    }
    type Enumerator = (typeof classes.Enumerator)['prototype'];
    const Enumerator: typeof classes.Enumerator &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gck.Enumerator.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Enumerator.SignalSignatures> & classes.Enumerator);
    namespace Module {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::functions'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The raw PKCS&num;11 function list for the module.
             *
             * This points to a CK_FUNCTION_LIST structure.
             */
            functions: any;
            /**
             * The PKCS&num;11 module file path.
             *
             * This may be set to NULL if this object was created from an already
             * initialized module via the gck_module_new() function.
             */
            path: string;
        }
    }
    type Module = (typeof classes.Module)['prototype'];
    const Module: typeof classes.Module &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gck.Module.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Module.SignalSignatures> & classes.Module);
    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle'(pspec: GObject.ParamSpec): void;
            'notify::module'(pspec: GObject.ParamSpec): void;
            'notify::session'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The raw PKCS11 handle for this object.
             */
            handle: number;
            /**
             * The GckModule that this object belongs to.
             */
            module: Module;
            /**
             * The PKCS11 session to make calls on when this object needs to
             * perform operations on itself.
             *
             * If this is NULL then a new session is opened for each operation,
             * such as gck_object_get(), gck_object_set() or gck_object_destroy().
             */
            session: Session;
        }
    }
    type Object = (typeof classes.Object)['prototype'];
    const Object: typeof classes.Object &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gck.Object.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Object.SignalSignatures> & classes.Object);
    namespace Password {
        // Signal signatures
        interface SignalSignatures extends Gio.TlsPassword.SignalSignatures {
            'notify::key'(pspec: GObject.ParamSpec): void;
            'notify::module'(pspec: GObject.ParamSpec): void;
            'notify::token'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::flags'(pspec: GObject.ParamSpec): void;
            'notify::warning'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Gio.TlsPassword.ConstructorProps {
            /**
             * The PKCS#11 key that the password is being requested for. If this
             * is set then the GckPassword:token property will be %NULL
             */
            key: Object;
            /**
             * The PKCS#11 module that is requesting the password
             */
            module: Module;
            /**
             * The PKCS#11 token the password is for, if this is set then
             * the GckPassword:object property will be %NULL
             */
            token: Slot;
        }
    }
    type Password = (typeof classes.Password)['prototype'];
    const Password: typeof classes.Password &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gck.Password.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Password.SignalSignatures> & classes.Password);
    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'discard-handle'(arg0: number): boolean | void;
            'notify::app-data'(pspec: GObject.ParamSpec): void;
            'notify::handle'(pspec: GObject.ParamSpec): void;
            'notify::interaction'(pspec: GObject.ParamSpec): void;
            'notify::module'(pspec: GObject.ParamSpec): void;
            'notify::opening-flags'(pspec: GObject.ParamSpec): void;
            'notify::options'(pspec: GObject.ParamSpec): void;
            'notify::slot'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {
            /**
             * Raw PKCS#11 application data used to open the PKCS#11 session.
             */
            app_data: any;
            /**
             * Raw PKCS#11 application data used to open the PKCS#11 session.
             */
            appData: any;
            /**
             * The raw CK_SESSION_HANDLE handle of this session.
             */
            handle: number;
            /**
             * Interaction object used to ask the user for pins when opening
             * sessions. Used if the session_options of the enumerator have
             * %GCK_SESSION_LOGIN_USER
             */
            interaction: Gio.TlsInteraction;
            /**
             * The GckModule that this session is opened on.
             */
            module: Module;
            /**
             * Raw PKCS#11 flags used to open the PKCS#11 session.
             */
            opening_flags: number;
            /**
             * Raw PKCS#11 flags used to open the PKCS#11 session.
             */
            openingFlags: number;
            /**
             * The options this session was opened with.
             */
            options: SessionOptions;
            /**
             * The GckSlot this session is opened on.
             */
            slot: Slot;
        }
    }
    type Session = (typeof classes.Session)['prototype'];
    const Session: typeof classes.Session &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gck.Session.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Session.SignalSignatures> & classes.Session);
    namespace Slot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle'(pspec: GObject.ParamSpec): void;
            'notify::module'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The raw CK_SLOT_ID handle of this slot.
             */
            handle: number;
            /**
             * The PKCS11 object that this slot is a part of.
             */
            module: Module;
        }
    }
    type Slot = (typeof classes.Slot)['prototype'];
    const Slot: typeof classes.Slot &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gck.Slot.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Slot.SignalSignatures> & classes.Slot);
    /**
     * This structure represents a PKCS#11 `CK_ATTRIBUTE`. These attributes contain
     * information about a PKCS#11 object. Use [method`Object`.get] or
     * [method`Object`.set] to set and attributes on an object.
     *
     * Although you are free to allocate a `GckAttribute` in your own code, no
     * functions in this library will operate on such an attribute.
     */
    class Attribute {
        static '$gtype': GObject.GType<Attribute>;
        // Fields
        type: number;
        value: Uint8Array[];
        length: number;
        // Constructors
        constructor(
            properties?: Partial<{
                type: number;
                value: Uint8Array[];
                length: number;
            }>,
        );
        _init(...args: any[]): void;
        static new(attr_type: number, value: number, length: number): Attribute;
        static new_boolean(attr_type: number, value: boolean): Attribute;
        static new_date(attr_type: number, value: GLib.Date): Attribute;
        static new_empty(attr_type: number): Attribute;
        static new_invalid(attr_type: number): Attribute;
        static new_string(attr_type: number, value: string): Attribute;
        static new_ulong(attr_type: number, value: number): Attribute;
        // Methods
        /**
         * Clear allocated memory held by a #GckAttribute.
         *
         * This attribute must have been allocated by a Gck library function, or
         * the results of this method are undefined.
         *
         * The type of the attribute will remain set.
         */
        clear(): void;
        /**
         * Dump the specified attribute using g_printerr().
         */
        dump(): void;
        /**
         * Duplicate the PKCS#11 attribute. All value memory is
         * also copied.
         *
         * The `attr` must have been allocated or initialized by a Gck function or
         * the results of this function are undefined.
         *
         * @returns the duplicated attribute; use gck_attribute_free()
         *          to free it
         */
        dup(): Attribute;
        /**
         * Compare two attributes. Useful with <code>GHashTable</code>.
         *
         * @returns %TRUE if the attributes are equal.
         * @param _attr2 second attribute to compare
         */
        equal(_attr2: Attribute): boolean;
        /**
         * Free an attribute and its allocated memory. These is usually
         * used with attributes that are allocated by [ctor`Attribute`.new]
         * or a similar function.
         */
        free(): void;
        /**
         * Get the CK_BBOOL of a PKCS#11 attribute. No conversion
         * is performed. It is an error to pass an attribute to this
         * function unless you're know it's supposed to contain a
         * boolean value.
         *
         * @returns The boolean value of the attribute.
         */
        get_boolean(): boolean;
        /**
         * Get the raw value in the attribute.
         *
         * This is useful from scripting languages. C callers will generally
         * access the #GckAttribute struct directly.
         *
         * This function will %NULL if the attribute contains empty or invalid
         * data. The returned data must not be modified and is only valid
         * as long as this `attribute`.
         *
         * @returns the value data or %NULL
         */
        get_data(): Uint8Array[];
        /**
         * Get the CK_DATE of a PKCS#11 attribute. No
         * conversion is performed. It is an error to pass an attribute
         * to this function unless you're know it's supposed to contain
         * a value of the right type.
         *
         * @param value The date value to fill in with the parsed date.
         */
        get_date(value: GLib.Date): void;
        /**
         * Get the string value of a PKCS#11 attribute. No
         * conversion is performed. It is an error to pass an attribute
         * to this function unless you're know it's supposed to contain
         * a value of the right type.
         *
         * @returns a null terminated string, to be freed with
         *               g_free(), or %NULL if the value was invalid
         */
        get_string(): string | null;
        /**
         * Get the CK_ULONG value of a PKCS#11 attribute. No
         * conversion is performed. It is an error to pass an attribute
         * to this function unless you're know it's supposed to contain
         * a value of the right type.
         *
         * @returns The ulong value of the attribute.
         */
        get_ulong(): number;
        /**
         * Hash an attribute for use in <code>GHashTable</code> keys.
         *
         * @returns the hash code
         */
        hash(): number;
        /**
         * Initialize a PKCS#11 attribute as a copy of another attribute.
         * This copies the value memory as well.
         *
         * When done with the copied attribute you should use
         * [method`Attribute`.clear] to free the internal memory.
         *
         * @param src An attribute to copy.
         */
        init_copy(src: Attribute): void;
        /**
         * Check if the PKCS#11 attribute represents 'invalid' or 'not found'
         * according to the PKCS#11 spec. That is, having length
         * of (CK_ULONG)-1.
         *
         * @returns Whether the attribute represents invalid or not.
         */
        is_invalid(): boolean;
    }
    /**
     * A set of [struct`Attribute]` structures.
     *
     * These attributes contain information about a PKCS11 object. Use
     * [method`Object`.get] or [method`Object`.set] to set and retrieve attributes on
     * an object.
     */
    class Attributes {
        static '$gtype': GObject.GType<Attributes>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(): Attributes;
        // Methods
        /**
         * Get attribute at the specified index in the attribute array.
         *
         * Use [method`Attributes`.count] to determine how many attributes are
         * in the array.
         *
         * @returns the specified attribute
         * @param index The attribute index to retrieve.
         */
        at(index: number): Attribute;
        /**
         * Check whether the attributes contain a certain attribute.
         *
         * @returns %TRUE if the attributes contain the attribute.
         * @param match The attribute to find
         */
        contains(match: Attribute): boolean;
        /**
         * Get the number of attributes in this attribute array.
         *
         * @returns The number of contained attributes.
         */
        count(): number;
        /**
         * Dump the attributes using g_printerr().
         */
        dump(): void;
        /**
         * Find an attribute with the specified type in the array.
         *
         * @returns the first attribute found with the specified type,
         *          or %NULL
         * @param attr_type The type of attribute to find.
         */
        find(attr_type: number): Attribute;
        /**
         * Find an attribute with the specified type in the array.
         *
         * The attribute (if found) must be of the right size to store
         * a boolean value (ie: CK_BBOOL). If the attribute is marked invalid
         * then it will be treated as not found.
         *
         * @returns Whether a value was found or not.
         * @param attr_type The type of attribute to find.
         */
        find_boolean(attr_type: number): [boolean, boolean];
        /**
         * Find an attribute with the specified type in the array.
         *
         * The attribute (if found) must be of the right size to store
         * a date value (ie: CK_DATE). If the attribute is marked invalid
         * then it will be treated as not found.
         *
         * @returns Whether a value was found or not.
         * @param attr_type The type of attribute to find.
         */
        find_date(attr_type: number): [boolean, GLib.Date];
        /**
         * Find an attribute with the specified type in the array.
         *
         * If the attribute is marked invalid then it will be treated as not found.
         * The resulting string will be null-terminated, and must be freed by the caller
         * using g_free().
         *
         * @returns Whether a value was found or not.
         * @param attr_type The type of attribute to find.
         */
        find_string(attr_type: number): [boolean, string];
        /**
         * Find an attribute with the specified type in the array.
         *
         * The attribute (if found) must be of the right size to store
         * a unsigned long value (ie: CK_ULONG). If the attribute is marked invalid
         * then it will be treated as not found.
         *
         * @returns Whether a value was found or not.
         * @param attr_type The type of attribute to find.
         */
        find_ulong(attr_type: number): [boolean, number];
        /**
         * Reference this attributes array.
         *
         * @returns the attributes
         */
        ref(): Attributes;
        /**
         * Print out attributes to a string in aform that's useful for debugging
         * or logging.
         *
         * The format of the string returned may change in the future.
         *
         * @returns a newly allocated string
         */
        to_string(): string;
        /**
         * Unreference this attribute array.
         *
         * When all outstanding references are gone, the array will be freed.
         */
        unref(): void;
    }
    /**
     * A builder for a set of attributes. Add attributes to a builder, and then use
     * [method`Builder`.end] to get the completed [struct`Attributes]`.
     *
     * The fields of #GckBuilder are private and not to be accessed directly.
     */
    class Builder {
        static '$gtype': GObject.GType<Builder>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(flags: BuilderFlags): Builder;
        // Methods
        /**
         * Add all the `attrs` attributes to the builder. The attributes are added
         * uncondititionally whether or not attributes with the same types already
         * exist in the builder.
         *
         * As an optimization, the attribute memory values are automatically shared
         * between the attributes and the builder.
         *
         * @param attrs the attributes to add
         */
        add_all(attrs: Attributes): void;
        /**
         * Add an attribute to the builder. The attribute is added unconditionally whether
         * or not an attribute with the same type already exists on the builder.
         *
         * The `attr` attribute must have been created or owned by the Gck library.
         * If you call this function on an arbitrary `GckAttribute` that is allocated on
         * the stack or elsewhere, then this will result in undefined behavior.
         *
         * As an optimization, the attribute memory value is automatically shared
         * between the attribute and the builder.
         *
         * @param attr the attribute to add
         */
        add_attribute(attr: Attribute): void;
        /**
         * Add a new attribute to the builder for the boolean `value`.
         * Unconditionally adds a new attribute, even if one with the same `attr_type`
         * already exists.
         *
         * @param attr_type the new attribute type
         * @param value the attribute value
         */
        add_boolean(attr_type: number, value: boolean): void;
        /**
         * Add a new attribute to the builder with an arbitrary value. Unconditionally
         * adds a new attribute, even if one with the same `attr_type` already exists.
         *
         * The memory in `value` is copied by the builder.
         *
         * %NULL may be specified for the `value` argument, in which case an empty
         * attribute is created. [const`INVALID]` may be specified for the length, in
         * which case an invalid attribute is created in the PKCS#11 style.
         *
         * @param attr_type the new attribute type
         * @param value the new attribute memory
         */
        add_data(attr_type: number, value?: Uint8Array[] | null): void;
        /**
         * Add a new attribute to the builder for the date `value`.
         * Unconditionally adds a new attribute, even if one with the same `attr_type`
         * already exists.
         *
         * @param attr_type the new attribute type
         * @param value the attribute value
         */
        add_date(attr_type: number, value: GLib.Date): void;
        /**
         * Add a new attribute to the builder that is empty. Unconditionally
         * adds a new attribute, even if one with the same `attr_type` already exists.
         *
         * @param attr_type the new attribute type
         */
        add_empty(attr_type: number): void;
        /**
         * Add a new attribute to the builder that is invalid in the PKCS#11 sense.
         * Unconditionally adds a new attribute, even if one with the same `attr_type`
         * already exists.
         *
         * @param attr_type the new attribute type
         */
        add_invalid(attr_type: number): void;
        /**
         * Add the attributes with the types in `only_types` from `attrs` to the
         * builder. The attributes are added uncondititionally whether or not
         * attributes with the same types already exist in the builder.
         *
         * ```c
         * // Add the CKA_ID and CKA_CLASS attributes from attrs to builder
         * gulong only[] = { CKA_ID, CKA_CLASS };
         * gck_builder_add_onlyv (builder, attrs, only, 2);
         * ```
         *
         * As an optimization, the attribute memory values are automatically shared
         * between the attributes and the builder.
         *
         * @param attrs the attributes to add
         * @param only_types the types of attributes to add
         */
        add_only(attrs: Attributes, only_types: number[]): void;
        /**
         * Add a new attribute to the builder for the string `value` or %NULL.
         * Unconditionally adds a new attribute, even if one with the same `attr_type`
         * already exists.
         *
         * @param attr_type the new attribute type
         * @param value the attribute value
         */
        add_string(attr_type: number, value?: string | null): void;
        /**
         * Add a new attribute to the builder for the unsigned long `value`.
         * Unconditionally adds a new attribute, even if one with the same `attr_type`
         * already exists.
         *
         * @param attr_type the new attribute type
         * @param value the attribute value
         */
        add_ulong(attr_type: number, value: number): void;
        /**
         * Clear the builder and release all allocated memory. The builder may be used
         * again to build another set of attributes after this function call.
         *
         * If memory is shared between this builder and other attributes, then that
         * memory is only freed when both of them are cleared or unreferenced.
         */
        clear(): void;
        /**
         * Make a copy of the builder and its state. The new builder is allocated
         * with [ctor`Builder`.new] and should be freed with gck_builder_unref().
         *
         * Attribute value memory is automatically shared between the two builders,
         * and is only freed when both are gone.
         *
         * @returns the builder copy, which should be freed with
         *          gck_builder_unref().
         */
        copy(): Builder;
        /**
         * Take the attributes that have been built in the #GckBuilder. The builder
         * will no longer contain any attributes after this function call.
         *
         * @returns the attributes, which should be freed with
         *          gck_attributes_unref()
         */
        end(): Attributes;
        /**
         * Find an attribute in the builder. Both valid and invalid attributes (in
         * the PKCS#11 sense) are returned. If multiple attributes exist for the given
         * attribute type, then the first one is returned.
         *
         * The returned [struct`Attribute]` is owned by the builder and may not be
         * modified in any way. It is only valid until another attribute is added to or
         * set on the builder, or until the builder is cleared or unreferenced.
         *
         * @returns the attribute or %NULL if not found
         * @param attr_type the type of attribute to find
         */
        find(attr_type: number): Attribute;
        /**
         * Find a boolean attribute in the builder that has the type `attr_type,` is
         * of the correct boolean size, and is not invalid in the PKCS#11 sense.
         * If multiple attributes exist for the given attribute type, then the first\
         * one is returned.
         *
         * @returns whether a valid boolean attribute was found
         * @param attr_type the type of attribute to find
         */
        find_boolean(attr_type: number): [boolean, boolean];
        /**
         * Find a date attribute in the builder that has the type `attr_type,` is of
         * the correct date size, and is not invalid in the PKCS#11 sense.
         * If multiple attributes exist for the given attribute type, then the first
         * one is returned.
         *
         * @returns whether a valid date attribute was found
         * @param attr_type the type of attribute to find
         */
        find_date(attr_type: number): [boolean, GLib.Date];
        /**
         * Find a string attribute in the builder that has the type `attr_type,` has a
         * non %NULL value pointer, and is not invalid in the PKCS#11 sense.
         * If multiple attributes exist for the given attribute type, then the first
         * one is returned.
         *
         * @returns whether a valid string attribute was found
         * @param attr_type the type of attribute to find
         */
        find_string(attr_type: number): [boolean, string];
        /**
         * Find a unsigned long attribute in the builder that has the type `attr_type,`
         * is of the correct unsigned long size, and is not invalid in the PKCS#11 sense.
         * If multiple attributes exist for the given attribute type, then the first
         * one is returned.
         *
         * @returns whether a valid unsigned long attribute was found
         * @param attr_type the type of attribute to find
         */
        find_ulong(attr_type: number): [boolean, number];
        /**
         * Initialize a stack allocated builder, with the default flags.
         *
         * This is equivalent to initializing a builder variable with the
         * %GCK_BUILDER_INIT constant, or setting it to zeroed memory.
         *
         * ```c
         * // Equivalent ways of initializing a GckBuilder
         * GckBuilder builder = GCK_BUILDER_INIT;
         * GckBuilder builder2;
         * GckBuilder builder3;
         *
         * gck_builder_init (&builder2);
         *
         * memset (&builder3, 0, sizeof (builder3));
         * ```
         */
        init(): void;
        /**
         * Initialize a stack allocated builder, with the appropriate flags.
         *
         * If the %GCK_BUILDER_SECURE_MEMORY flag is specified then non-pageable memory
         * will be used for the various values of the attributes in the builder
         *
         * @param flags the flags for the new builder
         */
        init_full(flags: BuilderFlags | null): void;
        /**
         * Add a reference to a builder that was created with [ctor`Builder`.new]. The
         * builder must later be unreferenced again with gck_builder_unref().
         *
         * It is an error to use this function on builders that were allocated on the
         * stack.
         *
         * @returns the builder
         */
        ref(): Builder;
        /**
         * Set all the `attrs` attributes to the builder. If any attributes with the
         * same types are already present in the builder, then those attributes are
         * changed to the new values.
         *
         * As an optimization, the attribute memory values are automatically shared
         * between the attributes and the builder.
         *
         * @param attrs the attributes to set
         */
        set_all(attrs: Attributes): void;
        /**
         * Set an attribute on the builder for the boolean `value`.
         * If an attribute with `attr_type` already exists in the builder then it is
         * changed to the new value, otherwise an attribute is added.
         *
         * @param attr_type the new attribute type
         * @param value the attribute value
         */
        set_boolean(attr_type: number, value: boolean): void;
        /**
         * Set a new attribute to the builder with an arbitrary value. If an attribute
         * with `attr_type` already exists in the builder then it is changed to the new
         * value, otherwise an attribute is added.
         *
         * The memory in `value` is copied by the builder.
         *
         * %NULL may be specified for the `value` argument, in which case an empty
         * attribute is created. [const`INVALID]` may be specified for the length, in
         * which case an invalid attribute is created in the PKCS#11 style.
         *
         * @param attr_type the attribute type
         * @param value the new attribute memory
         */
        set_data(attr_type: number, value?: Uint8Array[] | null): void;
        /**
         * Set an attribute on the builder for the date `value`.
         * If an attribute with `attr_type` already exists in the builder then it is
         * changed to the new value, otherwise an attribute is added.
         *
         * @param attr_type the new attribute type
         * @param value the attribute value
         */
        set_date(attr_type: number, value: GLib.Date): void;
        /**
         * Set an attribute on the builder that is empty. If an attribute
         * with `attr_type` already exists in the builder then it is changed to the new
         * value, otherwise an attribute is added.
         *
         * @param attr_type the attribute type
         */
        set_empty(attr_type: number): void;
        /**
         * Set an attribute on the builder that is invalid in the PKCS#11 sense.
         * If an attribute with `attr_type` already exists in the builder then it is
         * changed to the new value, otherwise an attribute is added.
         *
         * @param attr_type the attribute type
         */
        set_invalid(attr_type: number): void;
        /**
         * Set an attribute on the builder for the string `value` or %NULL.
         * If an attribute with `attr_type` already exists in the builder then it is
         * changed to the new value, otherwise an attribute is added.
         *
         * @param attr_type the new attribute type
         * @param value the attribute value
         */
        set_string(attr_type: number, value: string): void;
        /**
         * Set an attribute on the builder for the unsigned long `value`.
         * If an attribute with `attr_type` already exists in the builder then it is
         * changed to the new value, otherwise an attribute is added.
         *
         * @param attr_type the new attribute type
         * @param value the attribute value
         */
        set_ulong(attr_type: number, value: number): void;
        /**
         * Add a new attribute to the builder with an arbitrary value. Unconditionally
         * adds a new attribute, even if one with the same `attr_type` already exists.
         *
         * Ownership of the `value` memory is taken by the builder, may be reallocated,
         * and is eventually freed with g_free(). The memory must have been allocated
         * using the standard GLib memory allocation routines.
         *
         * %NULL may be specified for the `value` argument, in which case an empty
         * attribute is created. [const`INVALID]` may be specified for the length, in
         * which case an invalid attribute is created in the PKCS#11 style.
         *
         * @param attr_type the new attribute type
         * @param value the new
         *         attribute memory
         */
        take_data(attr_type: number, value?: Uint8Array[] | null): void;
        /**
         * Unreferences a builder. If this was the last reference then the builder
         * is freed.
         *
         * It is an error to use this function on builders that were allocated on the
         * stack.
         */
        unref(): void;
    }
    export type EnumeratorClass = typeof Enumerator;
    /**
     * Represents a mechanism used with crypto operations.
     */
    class Mechanism {
        static '$gtype': GObject.GType<Mechanism>;
        // Fields
        type: number;
        parameter: any;
        n_parameter: number;
        // Constructors
        constructor(
            properties?: Partial<{
                type: number;
                parameter: any;
                n_parameter: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * Represents information about a PKCS11 mechanism.
     *
     * This is analogous to a CK_MECHANISM_INFO structure.
     *
     * When you're done with this structure it should be released with
     * gck_mechanism_info_free().
     */
    class MechanismInfo {
        static '$gtype': GObject.GType<MechanismInfo>;
        // Fields
        min_key_size: number;
        max_key_size: number;
        flags: number;
        // Constructors
        constructor(
            properties?: Partial<{
                min_key_size: number;
                max_key_size: number;
                flags: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Make a copy of the mechanism info.
         *
         * @returns a newly allocated copy mechanism info
         */
        copy(): MechanismInfo;
        /**
         * Free the GckMechanismInfo and associated resources.
         */
        free(): void;
    }
    export type ModuleClass = typeof Module;
    /**
     * Holds information about the PKCS#11 module.
     *
     * This structure corresponds to `CK_MODULE_INFO` in the PKCS#11 standard. The
     * strings are %NULL terminated for easier use.
     *
     * Use gck_module_info_free() to release this structure when done with it.
     */
    class ModuleInfo {
        static '$gtype': GObject.GType<ModuleInfo>;
        // Fields
        'pkcs11_version_major': number;
        'pkcs11_version_minor': number;
        manufacturer_id: string;
        flags: number;
        library_description: string;
        library_version_major: number;
        library_version_minor: number;
        // Constructors
        constructor(
            properties?: Partial<{
                pkcs11_version_major: number;
                pkcs11_version_minor: number;
                manufacturer_id: string;
                flags: number;
                library_description: string;
                library_version_major: number;
                library_version_minor: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Make a copy of the module info.
         *
         * @returns a newly allocated copy module info
         */
        copy(): ModuleInfo;
        /**
         * Free a GckModuleInfo structure.
         */
        free(): void;
    }
    export type ObjectCacheInterface = typeof ObjectCache;
    export type ObjectClass = typeof Object;
    export type PasswordClass = typeof Password;
    export type SessionClass = typeof Session;
    /**
     * Information about the session. This is analogous to a CK_SESSION_INFO structure.
     *
     * When done with this structure, release it using gck_session_info_free().
     */
    class SessionInfo {
        static '$gtype': GObject.GType<SessionInfo>;
        // Fields
        slot_id: number;
        state: number;
        flags: number;
        device_error: number;
        // Constructors
        constructor(
            properties?: Partial<{
                slot_id: number;
                state: number;
                flags: number;
                device_error: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Make a new copy of a session info structure.
         *
         * @returns a new copy of the session info
         */
        copy(): SessionInfo;
        /**
         * Free the GckSessionInfo structure and all associated memory.
         */
        free(): void;
    }
    export type SlotClass = typeof Slot;
    /**
     * Represents information about a PKCS11 slot.
     *
     * This is analogous to a CK_SLOT_INFO structure, but the
     * strings are far more usable.
     *
     * When you're done with this structure it should be released with
     * gck_slot_info_free().
     */
    class SlotInfo {
        static '$gtype': GObject.GType<SlotInfo>;
        // Fields
        slot_description: string;
        manufacturer_id: string;
        flags: number;
        hardware_version_major: number;
        hardware_version_minor: number;
        firmware_version_major: number;
        firmware_version_minor: number;
        // Constructors
        constructor(
            properties?: Partial<{
                slot_description: string;
                manufacturer_id: string;
                flags: number;
                hardware_version_major: number;
                hardware_version_minor: number;
                firmware_version_major: number;
                firmware_version_minor: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Make a copy of the slot info.
         *
         * @returns a newly allocated copy slot info
         */
        copy(): SlotInfo;
        /**
         * Free the GckSlotInfo and associated resources.
         */
        free(): void;
    }
    /**
     * Represents information about a PKCS#11 token.
     *
     * This is analogous to a `CK_TOKEN_INFO` structure, but the fields are far
     * more usable.
     *
     * When you're done with this structure it should be released with
     * gck_token_info_free().
     */
    class TokenInfo {
        static '$gtype': GObject.GType<TokenInfo>;
        // Fields
        label: string;
        manufacturer_id: string;
        model: string;
        serial_number: string;
        flags: number;
        max_session_count: number;
        session_count: number;
        max_rw_session_count: number;
        rw_session_count: number;
        max_pin_len: number;
        min_pin_len: number;
        total_public_memory: number;
        free_public_memory: number;
        total_private_memory: number;
        free_private_memory: number;
        hardware_version_major: number;
        hardware_version_minor: number;
        firmware_version_major: number;
        firmware_version_minor: number;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Make a copy of the token info.
         *
         * @returns a newly allocated copy token info
         */
        copy(): TokenInfo;
        /**
         * Free the GckTokenInfo and associated resources.
         */
        free(): void;
    }
    /**
     * Information about the contents of a PKCS#11 URI. Various fields may be %NULL
     * depending on the context that the URI was parsed for.
     *
     * Since PKCS#11 URIs represent a set which results from the intersections of
     * all of the URI parts, if `any_recognized` is set to %TRUE then usually the URI
     * should be treated as not matching anything.
     */
    class UriData {
        static '$gtype': GObject.GType<UriData>;
        // Fields
        any_unrecognized: boolean;
        module_info: ModuleInfo;
        // Constructors
        constructor(
            properties?: Partial<{
                any_unrecognized: boolean;
            }>,
        );
        _init(...args: any[]): void;
        static new(): UriData;
        // Static methods
        /**
         * Parse a PKCS#11 URI for use in a given context.
         *
         * The result will contain the fields that are relevant for
         * the given context. See #GckUriData  for more info.
         * Other fields will be set to %NULL.
         *
         * @param string the URI to parse.
         * @param flags the context in which the URI will be used.
         */
        static parse(string: string, flags: UriFlags): UriData;
        // Methods
        /**
         * Build a PKCS#11 URI. The various parts relevant to the flags
         * specified will be used to build the URI.
         *
         * @returns a newly allocated string containing a PKCS#11 URI.
         * @param flags The context that the URI is for
         */
        build(flags: UriFlags | null): string;
        /**
         * Copy a #GckUriData
         *
         * @returns newly allocated copy of the uri data
         */
        copy(): UriData;
        /**
         * Free a #GckUriData.
         */
        free(): void;
    }
    namespace ObjectCache {
        /**
         * Interface for implementing ObjectCache.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Adds the attributes to the set cached on this object. If an attribute is
             * already present in the cache it will be overridden by this value.
             *
             * This will be done in a thread-safe manner.
             *
             * @param attrs the attributes to cache
             */
            vfunc_fill(attrs: Attributes): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The attributes cached on this object.
             */
            attributes: Attributes;
        }
    }
    export interface ObjectCacheNamespace {
        $gtype: GObject.GType<ObjectCache>;
        prototype: ObjectCache;
    }
    interface ObjectCache extends Object, ObjectCache.Interface {
        // Properties
        /**
         * The attributes cached on this object.
         */
        attributes: Attributes;
        // Methods
        /**
         * Adds the attributes to the set cached on this object. If an attribute is
         * already present in the cache it will be overridden by this value.
         *
         * This will be done in a thread-safe manner.
         *
         * @param attrs the attributes to cache
         */
        fill(attrs: Attributes): void;
        /**
         * Sets the attributes cached on this object.
         *
         * @param attrs the attributes to set
         */
        set_attributes(attrs?: Attributes | null): void;
        /**
         * Update the object cache with given attributes. If an attribute already
         * exists in the cache, it will be updated, and if it doesn't it will be added.
         *
         * This may block, use the asynchronous version when this is not desirable
         *
         * @returns whether the cache update was successful
         * @param attr_types the types of attributes to update
         * @param cancellable optional cancellation object
         */
        update(attr_types: number[], cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Update the object cache with given attributes. If an attribute already
         * exists in the cache, it will be updated, and if it doesn't it will be added.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_types the types of attributes to update
         * @param cancellable optional cancellation object
         */
        update_async(attr_types: number[], cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Update the object cache with given attributes. If an attribute already
         * exists in the cache, it will be updated, and if it doesn't it will be added.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_types the types of attributes to update
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        update_async(
            attr_types: number[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Update the object cache with given attributes. If an attribute already
         * exists in the cache, it will be updated, and if it doesn't it will be added.
         *
         * This call will return immediately and complete asynchronously.
         *
         * @param attr_types the types of attributes to update
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        update_async(
            attr_types: number[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete an asynchronous operation to update the object cache with given
         * attributes.
         *
         * @returns whether the cache update was successful
         * @param result the asynchronous result passed to the callback
         */
        update_finish(result: Gio.AsyncResult): boolean;
    }
    export const ObjectCache: ObjectCacheNamespace & (new () => ObjectCache);
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
export default Gck;
