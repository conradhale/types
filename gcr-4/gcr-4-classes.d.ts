import type Gcr from './gcr-4.d.ts';
import Gio from '@girs/gio-2.0';
import GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import GLib from '@girs/glib-2.0';
import GModule from '@girs/gmodule-2.0';
import Gck from '@girs/gck-2';
import { type GckClasses } from '@girs/gck-2/gck-2';
declare namespace classes {
    class AccessDescription extends GObjectClasses.Object {
        static '$gtype': GObject.GType<AccessDescription>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.AccessDescription.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.AccessDescription.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.AccessDescription.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.AccessDescription.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.AccessDescription.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.AccessDescription.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.AccessDescription.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.AccessDescription.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the location, described by a [class`Gcr`.GeneralName].
         *
         * @returns the location
         */
        get_location(): Gcr.GeneralName;
        /**
         * Returns a user-friendly name of the method for accesssing the resource, if
         * known.
         *
         * @returns A method name
         */
        get_method_name(): string;
        /**
         * Returns the OID string that describes the method for accessing the resource.
         *
         * @returns The method OID
         */
        get_method_oid(): string;
    }
    class CertificateChain extends GObjectClasses.Object {
        static '$gtype': GObject.GType<CertificateChain>;
        // Properties
        /**
         * The length of the certificate chain.
         */
        get length(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateChain.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateChain.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gcr.CertificateChain;
        // Signals
        connect<K extends keyof Gcr.CertificateChain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateChain.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateChain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateChain.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateChain.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateChain.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Add `certificate` to the chain. The order of certificates in the chain are
         * important. The first certificate should be the endpoint certificate, and
         * then come the signers (certificate authorities) each in turn. If a root
         * certificate authority is present, it should come last.
         *
         * Adding a certificate an already built chain (see
         * [method`Gcr`.CertificateChain.build]) resets the type of the certificate chain
         * to %GCR_CERTIFICATE_CHAIN_UNKNOWN
         *
         * @param certificate a #GcrCertificate to add to the chain
         */
        add(certificate: Gcr.Certificate): void;
        /**
         * Complete a certificate chain. Once a certificate chain has been built
         * its status can be examined.
         *
         * This operation will lookup missing certificates in PKCS#11
         * modules and also that each certificate in the chain is the signer of the
         * previous one. If a trust anchor, pinned certificate, or self-signed certificate
         * is found, then the chain is considered built. Any extra certificates are
         * removed from the chain.
         *
         * It's important to understand that building of a certificate chain does not
         * constitute verifying that chain. This is merely the first step towards
         * trust verification.
         *
         * The `purpose` is a string like %GCR_PURPOSE_CLIENT_AUTH and is the purpose
         * for which the certificate chain will be used. Trust anchors are looked up
         * for this purpose. This argument is required.
         *
         * The `peer` is usually the host name of the peer whith which this certificate
         * chain is being used. It is used to look up pinned certificates that have
         * been stored for this peer. If %NULL then no pinned certificates will
         * be considered.
         *
         * If the %GCR_CERTIFICATE_CHAIN_NO_LOOKUPS flag is specified then no
         * lookups for anchors or pinned certificates are done, and the resulting chain
         * will be neither anchored or pinned. Additionally no missing certificate
         * authorities are looked up in PKCS#11
         *
         * This call will block, see [method`Gcr`.CertificateChain.build_async] for the
         * asynchronous version.
         *
         * @returns whether the operation completed successfully
         * @param purpose the purpose the certificate chain will be used for
         * @param peer the peer the certificate chain will be used with, or %NULL
         * @param flags chain completion flags
         * @param cancellable a #GCancellable or %NULL
         */
        build(
            purpose: string,
            peer: string | null,
            flags: Gcr.CertificateChainFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Complete a certificate chain. Once a certificate chain has been built
         * its status can be examined.
         *
         * This will lookup missing certificates in PKCS#11
         * modules and also that each certificate in the chain is the signer of the
         * previous one. If a trust anchor, pinned certificate, or self-signed certificate
         * is found, then the chain is considered built. Any extra certificates are
         * removed from the chain.
         *
         * It's important to understand that building of a certificate chain does not
         * constitute verifying that chain. This is merely the first step towards
         * trust verification.
         *
         * The `purpose` is a string like %GCR_PURPOSE_CLIENT_AUTH and is the purpose
         * for which the certificate chain will be used. Trust anchors are looked up
         * for this purpose. This argument is required.
         *
         * The `peer` is usually the host name of the peer whith which this certificate
         * chain is being used. It is used to look up pinned certificates that have
         * been stored for this peer. If %NULL then no pinned certificates will
         * be considered.
         *
         * If the %GCR_CERTIFICATE_CHAIN_NO_LOOKUPS flag is specified then no
         * lookups for anchors or pinned certificates are done, and the resulting chain
         * will be neither anchored or pinned. Additionally no missing certificate
         * authorities are looked up in PKCS#11
         *
         * When the operation is finished, `callback` will be called. You can then call
         * gcr_certificate_chain_build_finish() to get the result of the operation.
         *
         * @param purpose the purpose the certificate chain will be used for
         * @param peer the peer the certificate chain will be used with, or %NULL
         * @param flags chain completion flags
         * @param cancellable a #GCancellable or %NULL
         */
        build_async(
            purpose: string,
            peer: string | null,
            flags: Gcr.CertificateChainFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Complete a certificate chain. Once a certificate chain has been built
         * its status can be examined.
         *
         * This will lookup missing certificates in PKCS#11
         * modules and also that each certificate in the chain is the signer of the
         * previous one. If a trust anchor, pinned certificate, or self-signed certificate
         * is found, then the chain is considered built. Any extra certificates are
         * removed from the chain.
         *
         * It's important to understand that building of a certificate chain does not
         * constitute verifying that chain. This is merely the first step towards
         * trust verification.
         *
         * The `purpose` is a string like %GCR_PURPOSE_CLIENT_AUTH and is the purpose
         * for which the certificate chain will be used. Trust anchors are looked up
         * for this purpose. This argument is required.
         *
         * The `peer` is usually the host name of the peer whith which this certificate
         * chain is being used. It is used to look up pinned certificates that have
         * been stored for this peer. If %NULL then no pinned certificates will
         * be considered.
         *
         * If the %GCR_CERTIFICATE_CHAIN_NO_LOOKUPS flag is specified then no
         * lookups for anchors or pinned certificates are done, and the resulting chain
         * will be neither anchored or pinned. Additionally no missing certificate
         * authorities are looked up in PKCS#11
         *
         * When the operation is finished, `callback` will be called. You can then call
         * gcr_certificate_chain_build_finish() to get the result of the operation.
         *
         * @param purpose the purpose the certificate chain will be used for
         * @param peer the peer the certificate chain will be used with, or %NULL
         * @param flags chain completion flags
         * @param cancellable a #GCancellable or %NULL
         * @param callback this will be called when the operation completes.
         */
        build_async(
            purpose: string,
            peer: string | null,
            flags: Gcr.CertificateChainFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Complete a certificate chain. Once a certificate chain has been built
         * its status can be examined.
         *
         * This will lookup missing certificates in PKCS#11
         * modules and also that each certificate in the chain is the signer of the
         * previous one. If a trust anchor, pinned certificate, or self-signed certificate
         * is found, then the chain is considered built. Any extra certificates are
         * removed from the chain.
         *
         * It's important to understand that building of a certificate chain does not
         * constitute verifying that chain. This is merely the first step towards
         * trust verification.
         *
         * The `purpose` is a string like %GCR_PURPOSE_CLIENT_AUTH and is the purpose
         * for which the certificate chain will be used. Trust anchors are looked up
         * for this purpose. This argument is required.
         *
         * The `peer` is usually the host name of the peer whith which this certificate
         * chain is being used. It is used to look up pinned certificates that have
         * been stored for this peer. If %NULL then no pinned certificates will
         * be considered.
         *
         * If the %GCR_CERTIFICATE_CHAIN_NO_LOOKUPS flag is specified then no
         * lookups for anchors or pinned certificates are done, and the resulting chain
         * will be neither anchored or pinned. Additionally no missing certificate
         * authorities are looked up in PKCS#11
         *
         * When the operation is finished, `callback` will be called. You can then call
         * gcr_certificate_chain_build_finish() to get the result of the operation.
         *
         * @param purpose the purpose the certificate chain will be used for
         * @param peer the peer the certificate chain will be used with, or %NULL
         * @param flags chain completion flags
         * @param cancellable a #GCancellable or %NULL
         * @param callback this will be called when the operation completes.
         */
        build_async(
            purpose: string,
            peer: string | null,
            flags: Gcr.CertificateChainFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an asynchronous operation started by
         * gcr_certificate_chain_build_async().
         *
         * @returns whether the operation succeeded
         * @param result the #GAsyncResult passed to the callback
         */
        build_finish(result: Gio.AsyncResult): boolean;
        /**
         * If the certificate chain has been built and is of status
         * %GCR_CERTIFICATE_CHAIN_ANCHORED, then this will return the anchor
         * certificate that was found. This is not necessarily a root certificate
         * authority. If an intermediate certificate authority in the chain was
         * found to be anchored, then that certificate will be returned.
         *
         * If an anchor is returned it does not mean that the certificate chain has
         * been verified, but merely that an anchor has been found.
         *
         * @returns the anchor certificate, or %NULL if not anchored.
         */
        get_anchor(): Gcr.Certificate;
        /**
         * Get a certificate in the chain. It is an error to call this function
         * with an invalid index.
         *
         * @returns the certificate
         * @param index index of the certificate to get
         */
        get_certificate(index: number): Gcr.Certificate;
        /**
         * Get the endpoint certificate in the chain. This is always the first
         * certificate in the chain. The endpoint certificate cannot be anchored.
         *
         * @returns the endpoint certificate, or %NULL if the chain
         *          is empty
         */
        get_endpoint(): Gcr.Certificate;
        /**
         * Get the length of the certificate chain.
         *
         * @returns the length of the certificate chain
         */
        get_length(): number;
        /**
         * Get the status of a certificate chain. If the certificate chain has not
         * been built, then the status will be %GCR_CERTIFICATE_CHAIN_UNKNOWN.
         *
         * A status of %GCR_CERTIFICATE_CHAIN_ANCHORED does not mean that the
         * certificate chain has been verified, but merely that an anchor has been
         * found.
         *
         * @returns the status of the certificate chain.
         */
        get_status(): Gcr.CertificateChainStatus;
    }
    class CertificateExtension extends GObjectClasses.Object {
        static '$gtype': GObject.GType<CertificateExtension>;
        // Properties
        /**
         * Whether this certificate is critical.
         */
        get critical(): boolean;
        /**
         * The Object Identifier (OID) that identifies the extension.
         */
        get oid(): string;
        /**
         * The raw value in bytes of the extension.
         */
        get value(): GLib.Bytes;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtension.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateExtension.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtension.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtension.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtension.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtension.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns a user-displayable description of the OID that identifies the
         * extension, if known.
         *
         * @returns A user-facing description, or `null` if
         *   unknown
         */
        get_description(): string | null;
        /**
         * Returns the OID that identifies the extension
         */
        get_oid(): string;
        /**
         * Returns the raw value in bytes of the extension.
         *
         * @returns The raw value date
         */
        get_value(): GLib.Bytes;
        /**
         * Returns wether the certificate extension is marked critical.
         *
         * @returns `true` if the extension is marked critical
         */
        is_critical(): boolean;
    }
    class CertificateExtensionAuthorityInfoAccess<A extends GObject.Object = GObject.Object>
        extends CertificateExtension
        implements Gio.ListModel<A>
    {
        static '$gtype': GObject.GType<CertificateExtensionAuthorityInfoAccess>;
        // Properties
        /**
         * The number of items. See [method`Gio`.ListModel.get_n_items].
         */
        get n_items(): number;
        /**
         * The number of items. See [method`Gio`.ListModel.get_n_items].
         */
        get nItems(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionAuthorityInfoAccess.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateExtensionAuthorityInfoAccess.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionAuthorityInfoAccess.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionAuthorityInfoAccess.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionAuthorityInfoAccess.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionAuthorityInfoAccess.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionAuthorityInfoAccess.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionAuthorityInfoAccess.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the description at a given position
         *
         * @returns The description at position `position`
         * @param position
         */
        get_description(position: number): Gcr.AccessDescription;
        // Conflicted with Gcr.CertificateExtension.get_description
        get_description(...args: never[]): any;
        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         *
         * @returns the #GType of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         *
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         *
         * @returns the object at `position`.
         * @param position the position of the item to fetch
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         *
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         *
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
    class CertificateExtensionAuthorityKeyIdentifier extends CertificateExtension {
        static '$gtype': GObject.GType<CertificateExtensionAuthorityKeyIdentifier>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionAuthorityKeyIdentifier.SignalSignatures;
        // Constructors
        constructor(
            properties?: Partial<Gcr.CertificateExtensionAuthorityKeyIdentifier.ConstructorProps>,
            ...args: any[]
        );
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionAuthorityKeyIdentifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionAuthorityKeyIdentifier.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionAuthorityKeyIdentifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionAuthorityKeyIdentifier.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionAuthorityKeyIdentifier.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionAuthorityKeyIdentifier.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the issuer, described by a list of [class`Gcr`.GeneralName]s.
         *
         * @returns The names of issuer, if set
         */
        get_authority_cert_issuer(): Gcr.GeneralNames | null;
        /**
         * Returns the serial number of the certificate that was used to sign this
         * certificate.
         *
         * @returns The serial number, if set
         */
        get_authority_cert_serial_number(): GLib.Bytes | null;
        /**
         * Returns the raw bytes containing the authority key identifier, if present.
         *
         * @returns The authority key identifier if present.
         */
        get_key_id(): GLib.Bytes | null;
    }
    class CertificateExtensionBasicConstraints extends CertificateExtension {
        static '$gtype': GObject.GType<CertificateExtensionBasicConstraints>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionBasicConstraints.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateExtensionBasicConstraints.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionBasicConstraints.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionBasicConstraints.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionBasicConstraints.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionBasicConstraints.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionBasicConstraints.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionBasicConstraints.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the maximum number of CAs that are allowed in the chain below this
         * certificate.
         *
         * If this is not set, this method returns -1.
         *
         * Note that this field doesn't really make sense if
         * [method`Gcr`.CertificateExtensionBasicConstraints.is_ca] is false.
         *
         * @returns The value of "pathLenConstraint", or -1 if not set.
         */
        get_path_len_constraint(): number;
        /**
         * Returns whether the certificate us a certificate authority (CA) certificate
         * or an end entity certificate.
         *
         * @returns The value of "cA".
         */
        is_ca(): boolean;
    }
    class CertificateExtensionCertificatePolicies<A extends GObject.Object = GObject.Object>
        extends CertificateExtension
        implements Gio.ListModel<A>
    {
        static '$gtype': GObject.GType<CertificateExtensionCertificatePolicies>;
        // Properties
        /**
         * The number of items. See [method`Gio`.ListModel.get_n_items].
         */
        get n_items(): number;
        /**
         * The number of items. See [method`Gio`.ListModel.get_n_items].
         */
        get nItems(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionCertificatePolicies.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateExtensionCertificatePolicies.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionCertificatePolicies.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionCertificatePolicies.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionCertificatePolicies.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionCertificatePolicies.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionCertificatePolicies.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionCertificatePolicies.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the policy at a given position
         *
         * @returns The policy at position `position`
         * @param position
         */
        get_policy(position: number): Gcr.CertificatePolicy;
        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         *
         * @returns the #GType of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         *
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         *
         * @returns the object at `position`.
         * @param position the position of the item to fetch
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         *
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         *
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
    class CertificateExtensionCrlDistributionPoints<A extends GObject.Object = GObject.Object>
        extends CertificateExtension
        implements Gio.ListModel<A>
    {
        static '$gtype': GObject.GType<CertificateExtensionCrlDistributionPoints>;
        // Properties
        /**
         * The number of items. See [method`Gio`.ListModel.get_n_items].
         */
        get n_items(): number;
        /**
         * The number of items. See [method`Gio`.ListModel.get_n_items].
         */
        get nItems(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionCrlDistributionPoints.SignalSignatures;
        // Constructors
        constructor(
            properties?: Partial<Gcr.CertificateExtensionCrlDistributionPoints.ConstructorProps>,
            ...args: any[]
        );
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionCrlDistributionPoints.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionCrlDistributionPoints.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionCrlDistributionPoints.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionCrlDistributionPoints.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionCrlDistributionPoints.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionCrlDistributionPoints.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the CRL distribution point at a given position.
         *
         * It is illegal to call this on an invalid position.
         *
         * @returns The distribution point at position `position`
         * @param position
         */
        get_distribution_point(position: number): Gcr.DistributionPoint;
        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         *
         * @returns the #GType of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         *
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         *
         * @returns the object at `position`.
         * @param position the position of the item to fetch
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         *
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         *
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
    class CertificateExtensionExtendedKeyUsage extends CertificateExtension {
        static '$gtype': GObject.GType<CertificateExtensionExtendedKeyUsage>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionExtendedKeyUsage.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateExtensionExtendedKeyUsage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionExtendedKeyUsage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionExtendedKeyUsage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionExtendedKeyUsage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionExtendedKeyUsage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionExtendedKeyUsage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionExtendedKeyUsage.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns a user-friendly list of description of the key usages.
         *
         * @returns The descriptions.
         */
        get_descriptions(): string[];
        /**
         * Returns the list of OIDs of the extended key usages.
         *
         * @returns The OIDs.
         */
        get_oids(): string[];
    }
    class CertificateExtensionKeyUsage extends CertificateExtension {
        static '$gtype': GObject.GType<CertificateExtensionKeyUsage>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionKeyUsage.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateExtensionKeyUsage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionKeyUsage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionKeyUsage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionKeyUsage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionKeyUsage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionKeyUsage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionKeyUsage.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns a user-friendly list of description of the key usages.
         *
         * @returns The descriptions.
         */
        get_descriptions(): string[];
        /**
         * Returns the bit string describing the usages.
         */
        get_usages(): number;
    }
    class CertificateExtensionList<A extends GObject.Object = GObject.Object>
        extends GObjectClasses.Object
        implements Gio.ListModel<A>
    {
        static '$gtype': GObject.GType<CertificateExtensionList>;
        // Properties
        get n_items(): number;
        get nItems(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionList.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateExtensionList.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionList.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Looks for an extension with the given OID.
         *
         * @returns The certificate extension with
         *  the given OID, or %NULL if not found.
         * @param oid The OID of the certificate extension
         */
        find_by_oid(oid: string): Gcr.CertificateExtension | null;
        /**
         * Returns the extension at the given position.
         *
         * It is illegal to call this function with an invalid position.
         *
         * @returns The certificate extension with the given OID
         * @param position The position of the extension in the list
         */
        get_extension(position: number): Gcr.CertificateExtension;
        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         *
         * @returns the #GType of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         *
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         *
         * @returns the object at `position`.
         * @param position the position of the item to fetch
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         *
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         *
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
    class CertificateExtensionSubjectAltName<A extends GObject.Object = GObject.Object>
        extends CertificateExtension
        implements Gio.ListModel<A>
    {
        static '$gtype': GObject.GType<CertificateExtensionSubjectAltName>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionSubjectAltName.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateExtensionSubjectAltName.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionSubjectAltName.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionSubjectAltName.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionSubjectAltName.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionSubjectAltName.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionSubjectAltName.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionSubjectAltName.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the name at the given position.
         *
         * @returns The name at position `position`
         * @param position The position of the name
         */
        get_name(position: number): Gcr.GeneralName;
        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         *
         * @returns the #GType of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         *
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         *
         * @returns the object at `position`.
         * @param position the position of the item to fetch
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         *
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         *
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
    class CertificateExtensionSubjectKeyIdentifier extends CertificateExtension {
        static '$gtype': GObject.GType<CertificateExtensionSubjectKeyIdentifier>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateExtensionSubjectKeyIdentifier.SignalSignatures;
        // Constructors
        constructor(
            properties?: Partial<Gcr.CertificateExtensionSubjectKeyIdentifier.ConstructorProps>,
            ...args: any[]
        );
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateExtensionSubjectKeyIdentifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionSubjectKeyIdentifier.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateExtensionSubjectKeyIdentifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateExtensionSubjectKeyIdentifier.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateExtensionSubjectKeyIdentifier.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateExtensionSubjectKeyIdentifier.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the raw bytes containing the subject key identifier.
         *
         * @returns The subject key identifier.
         */
        get_key_id(): GLib.Bytes;
    }
    class CertificateField extends GObjectClasses.Object {
        static '$gtype': GObject.GType<CertificateField>;
        // Properties
        get label(): string;
        get section(): Gcr.CertificateSection;
        get value(): GObject.Value;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateField.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateField.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateField.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateField.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateField.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateField.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateField.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateField.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Get the display label of the field.
         *
         * @returns the display label of the field
         */
        get_label(): string;
        /**
         * Get the parent #GcrCertificateSection.
         *
         * @returns the parent #GcrCertificateSection
         */
        get_section(): Gcr.CertificateSection;
        /**
         * Get the value of the field.
         *
         * The `value` will have been initialized to the `GType` the value should be
         * provided in.
         *
         * @returns %TRUE if the value was set successfully.
         */
        get_value(): [boolean, unknown];
        /**
         * Get the type associated with the value.
         *
         * @returns The `GType` of the value
         */
        get_value_type(): GObject.GType;
    }
    class CertificatePolicy<A extends GObject.Object = GObject.Object>
        extends GObjectClasses.Object
        implements Gio.ListModel<A>
    {
        static '$gtype': GObject.GType<CertificatePolicy>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificatePolicy.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificatePolicy.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificatePolicy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificatePolicy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificatePolicy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificatePolicy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificatePolicy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificatePolicy.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns a user-friendly name of this certificate policy, if known.
         *
         * @returns A name describing the policy OID
         */
        get_name(): string;
        /**
         * Returns the OID string that describes this certificate policy.
         *
         * @returns The policy OID
         */
        get_oid(): string;
        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         *
         * @returns the #GType of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         *
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         *
         * @returns the object at `position`.
         * @param position the position of the item to fetch
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         *
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         *
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
    class CertificatePolicyQualifier extends GObjectClasses.Object {
        static '$gtype': GObject.GType<CertificatePolicyQualifier>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificatePolicyQualifier.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificatePolicyQualifier.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificatePolicyQualifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificatePolicyQualifier.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificatePolicyQualifier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificatePolicyQualifier.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificatePolicyQualifier.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificatePolicyQualifier.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns a user-friendly name of this certificate policy qualifier, if known.
         *
         * @returns A name describing the policy qualifier OID
         */
        get_name(): string;
        /**
         * Returns the OID string that describes this certificate policy qualifier.
         *
         * @returns The policy qualifier OID
         */
        get_oid(): string;
    }
    class CertificateRequest extends GObjectClasses.Object {
        static '$gtype': GObject.GType<CertificateRequest>;
        // Properties
        /**
         * The private key that this certificate request is for.
         */
        get private_key(): Gck.Object;
        /**
         * The private key that this certificate request is for.
         */
        get privateKey(): Gck.Object;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateRequest.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateRequest.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateRequest.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Check whether [class`CertificateRequest]` is capable of creating a request
         * for the given `private_key`.
         *
         * @param private_key a private key
         * @param cancellable cancellation object
         */
        static capable(private_key: Gck.Object, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously check whether [class`CertificateRequest]` is capable of
         * creating a request for the given `private_key`.
         *
         * @param private_key a private key
         * @param cancellable cancellation object
         * @param callback will be called when the operation completes
         */
        static capable_async(
            private_key: Gck.Object,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gcr.CertificateRequest> | null,
        ): void;
        /**
         * Get the result for asynchronously check whether [class`CertificateRequest]` is
         * capable of creating a request for the given `private_key`.
         *
         * @param result asynchronous result
         */
        static capable_finish(result: Gio.AsyncResult): boolean;
        /**
         * Create a new certificate request, in the given format for the private key.
         *
         * @param format the format for the certificate request
         * @param private_key the private key the the certificate is being requested for
         */
        static prepare(format: Gcr.CertificateRequestFormat, private_key: Gck.Object): Gcr.CertificateRequest;
        // Methods
        /**
         * Complete and sign a certificate request, so that it can be encoded
         * and sent to a certificate authority.
         *
         * This call may block as it signs the request using the private key.
         *
         * @returns whether certificate request was successfully completed or not
         * @param cancellable a cancellation object
         */
        complete(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously complete and sign a certificate request, so that it can
         * be encoded and sent to a certificate authority.
         *
         * This call will return immediately and complete later.
         *
         * @param cancellable a cancellation object
         */
        complete_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously complete and sign a certificate request, so that it can
         * be encoded and sent to a certificate authority.
         *
         * This call will return immediately and complete later.
         *
         * @param cancellable a cancellation object
         * @param callback called when the operation completes
         */
        complete_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously complete and sign a certificate request, so that it can
         * be encoded and sent to a certificate authority.
         *
         * This call will return immediately and complete later.
         *
         * @param cancellable a cancellation object
         * @param callback called when the operation completes
         */
        complete_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation to complete and sign a certificate
         * request.
         *
         * @returns whether certificate request was successfully completed or not
         * @param result result of the asynchronous operation
         */
        complete_finish(result: Gio.AsyncResult): boolean;
        /**
         * Encode the certificate request. It must have been completed with
         * [method`CertificateRequest`.complete] or
         * [method`CertificateRequest`.complete_async].
         *
         * If `textual` is %FALSE, the output is a DER encoded certificate request.
         *
         * If `textual` is %TRUE, the output is encoded as text. For PKCS#10 requests
         * this is done using the OpenSSL style PEM encoding.
         *
         * @returns the encoded certificate request
         * @param textual whether to encode output as text
         */
        encode(textual: boolean): Uint8Array[];
        /**
         * Get the format of this certificate request.
         *
         * @returns the format
         */
        get_format(): Gcr.CertificateRequestFormat;
        /**
         * Get the private key this certificate request is for.
         *
         * @returns the private key,
         */
        get_private_key(): Gck.Object;
        /**
         * Set the common name encoded in the certificate request.
         *
         * @param cn common name to set on the request
         */
        set_cn(cn: string): void;
    }
    class CertificateSection extends GObjectClasses.Object {
        static '$gtype': GObject.GType<CertificateSection>;
        // Properties
        get fields(): Gio.ListModel;
        get label(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.CertificateSection.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.CertificateSection.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.CertificateSection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateSection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.CertificateSection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.CertificateSection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.CertificateSection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.CertificateSection.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Get the list of all the fields in this section.
         *
         * @returns a #GListModel of #GcrCertificateField
         */
        get_fields(): Gio.ListModel;
        /**
         * Get the flags.
         *
         * @returns the `GcrCertificateSectionFlags`
         */
        get_flags(): Gcr.CertificateSectionFlags;
        /**
         * Get the displayable label of the section.
         *
         * @returns the displayable label of the section
         */
        get_label(): string;
    }
    class DistributionPoint extends GObjectClasses.Object {
        static '$gtype': GObject.GType<DistributionPoint>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.DistributionPoint.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.DistributionPoint.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.DistributionPoint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.DistributionPoint.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.DistributionPoint.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.DistributionPoint.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.DistributionPoint.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.DistributionPoint.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the full name of the CRL distribution point, if set.
         *
         * @returns The full name of the distribution point
         */
        get_full_name(): Gcr.GeneralNames | null;
        /**
         * Returns a part of the relative name of `self,` if set.
         *
         * Note that the relative name might not be set, nor the specific part.
         *
         * Examples of a `part` might be the 'OU' (organizational unit) or the 'CN'
         * (common name). Only the value of that part of the RDN is returned.
         *
         * @returns The relative name part if set, or NULL
         * @param part a RDN type string or OID.
         */
        get_relative_name_part(part: string): string | null;
    }
    class GeneralName extends GObjectClasses.Object {
        static '$gtype': GObject.GType<GeneralName>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.GeneralName.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.GeneralName.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.GeneralName.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.GeneralName.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.GeneralName.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.GeneralName.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.GeneralName.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.GeneralName.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns a user-friendly string describing the name.
         */
        get_description(): string;
        /**
         * Returns the actual value of the name.
         */
        get_value(): string;
        /**
         * Returns the raw bytes describing the value of the name.
         */
        get_value_raw(): GLib.Bytes;
    }
    class GeneralNames<A extends GObject.Object = GObject.Object>
        extends GObjectClasses.Object
        implements Gio.ListModel<A>
    {
        static '$gtype': GObject.GType<GeneralNames>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.GeneralNames.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.GeneralNames.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.GeneralNames.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.GeneralNames.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.GeneralNames.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.GeneralNames.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.GeneralNames.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.GeneralNames.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the name at the given position.
         *
         * It is illegal to call this function with a position larger than the number
         * of elements in this list.
         *
         * @returns The name at the given position
         * @param position The position in the list
         */
        get_name(position: number): Gcr.GeneralName;
        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         *
         * @returns the #GType of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         *
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         *
         * @returns the object at `position`.
         * @param position the position of the item to fetch
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         *
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         *
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
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
    class Parser extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Parser>;
        // Properties
        /**
         * Get the attributes that make up the currently parsed item. This is
         * generally only valid during a [signal`Parser:`:parsed] signal.
         */
        get parsed_attributes(): Gck.Attributes;
        /**
         * Get the attributes that make up the currently parsed item. This is
         * generally only valid during a [signal`Parser:`:parsed] signal.
         */
        get parsedAttributes(): Gck.Attributes;
        /**
         * The description of the type of the currently parsed item. This is generally
         * only valid during a [signal`Parser:`:parsed] signal.
         */
        get parsed_description(): string;
        /**
         * The description of the type of the currently parsed item. This is generally
         * only valid during a [signal`Parser:`:parsed] signal.
         */
        get parsedDescription(): string;
        /**
         * The label of the currently parsed item. This is generally
         * only valid during a [signal`Parser:`:parsed] signal.
         */
        get parsed_label(): string;
        /**
         * The label of the currently parsed item. This is generally
         * only valid during a [signal`Parser:`:parsed] signal.
         */
        get parsedLabel(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.Parser.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.Parser.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gcr.Parser;
        // Signals
        connect<K extends keyof Gcr.Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.Parser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.Parser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.Parser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.Parser.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * The default handler for the authenticate signal.
         *
         * @param count
         */
        vfunc_authenticate(count: number): boolean;
        /**
         * The default handler for the parsed signal.
         */
        vfunc_parsed(): void;
        // Methods
        /**
         * Add a password to the set of passwords to try when parsing locked or encrypted
         * items. This is usually called from the [signal`Parser:`:authenticate] signal.
         *
         * @param password a password to try
         */
        add_password(password?: string | null): void;
        /**
         * Disable parsing of the given format. Use %GCR_FORMAT_ALL to disable all the formats.
         *
         * @param format The format identifier
         */
        format_disable(format: Gcr.DataFormat | null): void;
        /**
         * Enable parsing of the given format. Use %GCR_FORMAT_ALL to enable all the formats.
         *
         * @param format The format identifier
         */
        format_enable(format: Gcr.DataFormat | null): void;
        /**
         * Check whether the given format is supported by the parser.
         *
         * @returns Whether the format is supported.
         * @param format The format identifier
         */
        format_supported(format: Gcr.DataFormat | null): boolean;
        /**
         * Get the filename of the parser item.
         *
         * @returns the filename set on the parser, or %NULL
         */
        get_filename(): string;
        /**
         * Get the currently parsed item
         *
         * @returns the currently parsed item
         */
        get_parsed(): Gcr.Parsed;
        /**
         * Get the attributes which make up the currently parsed item. This is generally
         * only valid during the [signal`Parser:`:parsed] signal.
         *
         * @returns the attributes for the current item,
         *          which are owned by the parser and should not be freed
         */
        get_parsed_attributes(): Gck.Attributes | null;
        /**
         * Get the raw data block that represents this parsed object. This is only
         * valid during the [signal`Parser:`:parsed] signal.
         *
         * @returns the raw data
         *          block of the currently parsed item; the value is owned by the parser
         *          and should not be freed
         */
        get_parsed_block(): Uint8Array[] | null;
        /**
         * Get the raw data block that represents this parsed object. This is only
         * valid during the [signal`Parser:`:parsed] signal.
         *
         * @returns the raw data block of the currently parsed item
         */
        get_parsed_bytes(): GLib.Bytes;
        /**
         * Get a description for the type of the currently parsed item. This is generally
         * only valid during the [signal`Parser:`:parsed] signal.
         *
         * @returns the description for the current item; this is owned by
         *          the parser and should not be freed
         */
        get_parsed_description(): string | null;
        /**
         * Get the format of the raw data block that represents this parsed object.
         * This corresponds with the data returned from
         * [method`Parser`.get_parsed_block].
         *
         * This is only valid during the [signal`Parser:`:parsed] signal.
         *
         * @returns the data format of the currently parsed item
         */
        get_parsed_format(): Gcr.DataFormat;
        /**
         * Get the label of the currently parsed item. This is generally only valid
         * during the [signal`Parser:`:parsed] signal.
         *
         * @returns the label of the currently parsed item. The value is
         *          owned by the parser and should not be freed.
         */
        get_parsed_label(): string | null;
        /**
         * Parse the data. The [signal`Parser:`:parsed] and
         * [signal`Parser:`:authenticate] signals may fire during the parsing.
         *
         * @returns Whether the data was parsed successfully or not.
         * @param data the data to parse
         */
        parse_bytes(data: GLib.Bytes | Uint8Array): boolean;
        /**
         * Parse the data. The [signal`Parser:`:parsed] and [signal`Parser:`:authenticate]
         * signals may fire during the parsing.
         *
         * A copy of the data will be made. Use [method`Parser`.parse_bytes] to avoid
         * this.
         *
         * @returns Whether the data was parsed successfully or not.
         * @param data the data to parse
         */
        parse_data(data: Uint8Array[] | string): boolean;
        /**
         * Parse items from the data in a #GInputStream. This function may block while
         * reading from the input stream. Use [method`Parser`.parse_stream_async] for
         * a non-blocking variant.
         *
         * The [signal`Parser:`:parsed] and [signal`Parser:`:authenticate] signals
         * may fire during the parsing.
         *
         * @returns Whether the parsing completed successfully or not.
         * @param input The input stream
         * @param cancellable An optional cancellation object
         */
        parse_stream(input: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Parse items from the data in a #GInputStream. This function completes
         * asyncronously and doesn't block.
         *
         * The [signal`Parser:`:parsed] and [signal`Parser:`:authenticate] signals
         * may fire during the parsing.
         *
         * @param input The input stream
         * @param cancellable An optional cancellation object
         */
        parse_stream_async(input: Gio.InputStream, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Parse items from the data in a #GInputStream. This function completes
         * asyncronously and doesn't block.
         *
         * The [signal`Parser:`:parsed] and [signal`Parser:`:authenticate] signals
         * may fire during the parsing.
         *
         * @param input The input stream
         * @param cancellable An optional cancellation object
         * @param callback Called when the operation result is ready.
         */
        parse_stream_async(
            input: Gio.InputStream,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Parse items from the data in a #GInputStream. This function completes
         * asyncronously and doesn't block.
         *
         * The [signal`Parser:`:parsed] and [signal`Parser:`:authenticate] signals
         * may fire during the parsing.
         *
         * @param input The input stream
         * @param cancellable An optional cancellation object
         * @param callback Called when the operation result is ready.
         */
        parse_stream_async(
            input: Gio.InputStream,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete an operation to parse a stream.
         *
         * @returns Whether the parsing completed successfully or not.
         * @param result The operation result
         */
        parse_stream_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the filename of the parser item.
         *
         * @param filename a string of the filename of the parser item
         */
        set_filename(filename?: string | null): void;
    }
    class Pkcs11Certificate extends GckClasses.Object implements Gcr.Certificate {
        static '$gtype': GObject.GType<Pkcs11Certificate>;
        // Properties
        /**
         * Automatically loaded attributes for this certificate.
         */
        get attributes(): Gck.Attributes;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.Pkcs11Certificate.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.Pkcs11Certificate.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.Pkcs11Certificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.Pkcs11Certificate.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.Pkcs11Certificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.Pkcs11Certificate.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.Pkcs11Certificate.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.Pkcs11Certificate.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Lookup a the issuer of a `certificate` in the PKCS#11 storage. The
         * lookup is done using the issuer DN of the certificate. No certificate chain
         * verification is done. Use a crypto library to make trust decisions.
         *
         * This call may block, see [func`Gcr`.Pkcs11Certificate.lookup_issuer] for the
         * non-blocking version.
         *
         * Will return %NULL if no issuer certificate is found. Use `error` to determine
         * if an error occurred.
         *
         * @param certificate a #GcrCertificate
         * @param cancellable a cancellable
         */
        static lookup_issuer(
            certificate: Gcr.Certificate,
            cancellable?: Gio.Cancellable | null,
        ): Gcr.Certificate | null;
        /**
         * Lookup a the issuer of a `certificate` in the PKCS#11 storage. The
         * lookup is done using the issuer DN of the certificate. No certificate chain
         * verification is done. Use a crypto library to make trust decisions.
         *
         * When the operation is finished, callback will be called. You can then call
         * [func`Gcr`.Pkcs11Certificate.lookup_issuer_finish] to get the result of the
         * operation.
         *
         * @param certificate a #GcrCertificate
         * @param cancellable a cancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        static lookup_issuer_async(
            certificate: Gcr.Certificate,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gcr.Pkcs11Certificate> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started by
         * [func`Gcr`.Pkcs11Certificate.lookup_issuer_async].
         *
         * Will return %NULL if no issuer certificate is found. Use `error` to determine
         * if an error occurred.
         *
         * @param result the #GAsyncResult passed to the callback
         */
        static lookup_issuer_finish(result: Gio.AsyncResult): Gcr.Certificate | null;
        /**
         * Lookup a certificate in the PKCS#11 storage by the given URI.
         *
         * This call may block, see gcr_pkcs11_certificate_new_from_uri_async() for
         * the non-blocking version.
         *
         * Will return %NULL if no certificate is found. Use `error` to determine
         * if an error occurred.
         *
         * @param _pkcs11_uri a A PKCS \#11 URI
         * @param cancellable a #GCancellable
         */
        static new_from_uri(_pkcs11_uri: string, cancellable?: Gio.Cancellable | null): Gcr.Certificate | null;
        /**
         * Lookup a certificate in the PKCS#11 storage by the given URI.
         *
         * When the operation is finished, callback will be called. You can then call
         * gcr_pkcs11_certificate_new_from_uri_finish() to get the result of the
         * operation.
         *
         * @param _pkcs11_uri a A PKCS \#11 URI
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the operation completes
         */
        static new_from_uri_async(
            _pkcs11_uri: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gcr.Pkcs11Certificate> | null,
        ): void;
        /**
         * Finishes an asynchronous operation started by
         * gcr_pkcs11_certificate_new_from_uri_async().
         *
         * Will return %NULL if no certificate is found. Use `error` to determine
         * if an error occurred.
         *
         * @param result the #GAsyncResult passed to the callback
         */
        static new_from_uri_finish(result: Gio.AsyncResult): Gcr.Certificate | null;
        // Methods
        /**
         * Access the automatically loaded attributes for this certificate.
         *
         * @returns the certificate attributes
         */
        get_attributes(): Gck.Attributes;
        // Inherited properties
        /**
         * A readable description for this certificate
         */
        get description(): string;
        /**
         * The expiry date of the certificate
         */
        get expiry_date(): GLib.DateTime;
        /**
         * The expiry date of the certificate
         */
        get expiryDate(): GLib.DateTime;
        /**
         * Common name part of the certificate issuer
         */
        get issuer_name(): string;
        /**
         * Common name part of the certificate issuer
         */
        get issuerName(): string;
        /**
         * A readable label for this certificate.
         */
        get label(): string;
        get subject_name(): string;
        get subjectName(): string;
        // Inherited methods
        /**
         * Get the basic constraints for the certificate if present. If %FALSE is
         * returned then no basic constraints are present and the `is_ca` and
         * `path_len` arguments are not changed.
         *
         * @returns whether basic constraints are present or not
         */
        get_basic_constraints(): [boolean, boolean, number];
        /**
         * Gets the raw DER data for an X.509 certificate.
         *
         * @returns raw DER data of the X.509 certificate
         */
        get_der_data(): Uint8Array[];
        /**
         * Get the expiry date of this certificate.
         *
         * @returns An expiry date of this certificate.
         */
        get_expiry_date(): GLib.DateTime | null;
        /**
         * Calculate the fingerprint for this certificate.
         *
         * The caller should free the returned data using g_free() when
         * it is no longer required.
         *
         * @returns the raw binary fingerprint
         * @param type the type of algorithm for the fingerprint.
         */
        get_fingerprint(type: GLib.ChecksumType | null): Uint8Array[] | null;
        /**
         * Calculate the fingerprint for this certificate, and return it
         * as a hex string.
         *
         * The caller should free the returned data using g_free() when
         * it is no longer required.
         *
         * @returns an allocated hex string which contains the fingerprint.
         * @param type the type of algorithm for the fingerprint.
         */
        get_fingerprint_hex(type: GLib.ChecksumType | null): string | null;
        /**
         * Get the list of sections from the certificate that can be shown to the user
         * interface.
         *
         * @returns A #GList of
         * #GcrCertificateSection
         */
        get_interface_elements(): Gcr.CertificateSection[];
        /**
         * Get the issued date of this certificate.
         *
         * @returns A issued date of this certificate.
         */
        get_issued_date(): GLib.DateTime | null;
        /**
         * Get the common name of the issuer of this certificate.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns The allocated issuer CN, or %NULL if no issuer CN present.
         */
        get_issuer_cn(): string | null;
        /**
         * Get the full issuer DN of the certificate as a (mostly)
         * readable string.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns The allocated issuer DN of the certificate.
         */
        get_issuer_dn(): string | null;
        /**
         * Get a name to represent the issuer of this certificate.
         *
         * This will try to lookup the common name, orianizational unit,
         * organization in that order.
         *
         * @returns the allocated issuer name, or %NULL if no issuer name
         */
        get_issuer_name(): string | null;
        /**
         * Get a part of the DN of the issuer of this certificate.
         *
         * Examples of a `part` might be the 'OU' (organizational unit)
         * or the 'CN' (common name). Only the value of that part
         * of the DN is returned.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns the allocated part of the issuer DN, or %NULL if no
         *          such part is present
         * @param part a DN type string or OID.
         */
        get_issuer_part(part: string): string | null;
        /**
         * Get the raw DER data for the issuer DN of the certificate.
         *
         * The data should be freed by using g_free() when no longer required.
         *
         * @returns allocated memory
         *          containing the raw issuer
         */
        get_issuer_raw(): Uint8Array[] | null;
        /**
         * Get the key size in bits of the public key represented
         * by this certificate.
         *
         * @returns The key size of the certificate.
         */
        get_key_size(): number;
        /**
         * Returns the subject public key info (SPKI) of the certificate.
         *
         * @returns The SPKI of the certificate.
         */
        get_public_key_info(): Gcr.SubjectPublicKeyInfo;
        /**
         * Get the raw binary serial number of the certificate.
         *
         * The caller should free the returned data using g_free() when
         * it is no longer required.
         *
         * @returns the raw binary serial number.
         */
        get_serial_number(): Uint8Array[] | null;
        /**
         * Get the serial number of the certificate as a hex string.
         *
         * The caller should free the returned data using g_free() when
         * it is no longer required.
         *
         * @returns an allocated string containing the serial number as hex.
         */
        get_serial_number_hex(): string | null;
        /**
         * Get the common name of the subject of this certificate.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns The allocated subject CN, or %NULL if no subject CN present.
         */
        get_subject_cn(): string | null;
        /**
         * Get the full subject DN of the certificate as a (mostly)
         * readable string.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns The allocated subject DN of the certificate.
         */
        get_subject_dn(): string | null;
        /**
         * Get a name to represent the subject of this certificate.
         *
         * This will try to lookup the common name, orianizational unit,
         * organization in that order.
         *
         * @returns the allocated subject name, or %NULL if no subject name
         */
        get_subject_name(): string | null;
        /**
         * Get a part of the DN of the subject of this certificate.
         *
         * Examples of a `part` might be the 'OU' (organizational unit)
         * or the 'CN' (common name). Only the value of that part
         * of the DN is returned.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns the allocated part of the subject DN, or %NULL if no
         *          such part is present.
         * @param part a DN type string or OID.
         */
        get_subject_part(part: string): string | null;
        /**
         * Get the raw DER data for the subject DN of the certificate.
         *
         * The data should be freed by using g_free() when no longer required.
         *
         * @returns allocated memory
         *          containing the raw subject
         */
        get_subject_raw(): Uint8Array[] | null;
        /**
         * Get the version of the X.509 certificate.
         *
         * @returns the version of the certificate
         */
        get_version(): number;
        /**
         * Check if `issuer` could be the issuer of this certificate. This is done by
         * comparing the relevant subject and issuer fields. No signature check is
         * done. Proper verification of certificates must be done via a crypto
         * library.
         *
         * @returns whether `issuer` could be the issuer of the certificate.
         * @param issuer a possible issuer #GcrCertificate
         */
        is_issuer(issuer: Gcr.Certificate): boolean;
        /**
         * Creates a [class`CertificateExtensionList]` that can be used to inspect the
         * extensions of this certificate.
         *
         * @returns The certificate's extensions
         */
        list_extensions(): Gcr.CertificateExtensionList;
        /**
         * Implementers of the #GcrCertificate mixin should call this function to notify
         * when the certificate has changed to emit notifications on the various
         * properties.
         */
        mixin_emit_notify(): void;
        /**
         * Gets the raw DER data for an X.509 certificate.
         */
        vfunc_get_der_data(): Uint8Array[];
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
        // Conflicted with Gck.Object.get_data
        get_data(...args: never[]): any;
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
        // Conflicted with Gck.Object.set
        set(...args: never[]): any;
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
    class SecretExchange extends GObjectClasses.Object {
        static '$gtype': GObject.GType<SecretExchange>;
        // Properties
        /**
         * The protocol being used for the exchange.
         *
         * Will be %NULL if no protocol was specified when creating this object,
         * and either [method`SecretExchange`.begin] or [method`SecretExchange`.receive]
         * have not been called successfully.
         */
        get protocol(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.SecretExchange.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.SecretExchange.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(protocol?: string | null): Gcr.SecretExchange;
        // Signals
        connect<K extends keyof Gcr.SecretExchange.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SecretExchange.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.SecretExchange.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SecretExchange.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.SecretExchange.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.SecretExchange.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_derive_transport_key(peer: number, n_peer: number): boolean;
        vfunc_generate_exchange_key(scheme: string, public_key: number, n_public_key: number): boolean;
        // Methods
        /**
         * Begin the secret exchange. The resulting string should be sent to the other
         * side of the exchange. The other side should use [method`SecretExchange`.receive]
         * to process the string.
         *
         * @returns A newly allocated string to be sent to the other
         *     side of the secret exchange
         */
        begin(): string;
        /**
         * Will return %NULL if no protocol was specified, and either
         * [method`SecretExchange`.begin] or [method`SecretExchange`.receive] have not
         * been called successfully.
         *
         * @returns the protocol or %NULL
         */
        get_protocol(): string;
        /**
         * Returns the last secret received. If no secret has yet been received this
         * will return %NULL. The string is owned by the #GcrSecretExchange object
         * and will be valid until the next time that gcr_secret_exchange_receive()
         * is called on this object, or the object is destroyed.
         *
         * Depending on the secret passed into the other side of the secret exchange,
         * the result may be a binary string. It does however have a null terminator,
         * so if you're certain that it is does not contain arbitrary binary data,
         * it can be used as a string.
         *
         * @returns the last secret received
         */
        get_secret(): string[];
        /**
         * Receive a string from the other side of secret exchange. This string will
         * have been created by [method`SecretExchange`.begin] or
         * [method`SecretExchange`.send].
         *
         * After this call completes successfully the value returned from
         * gcr_secret_exchange_get_secret() will have changed.
         *
         * @returns whether the string was successfully parsed and received
         * @param exchange the string received
         */
        receive(exchange: string): boolean;
        /**
         * Send a reply to the other side of the secret exchange, optionally sending a
         * secret.
         *
         * [method`SecretExchange`.receive] must have been successfully called at least
         * once on this object. In other words this object must have received data
         * from the other side of the secret exchange, before we can send a secret.
         *
         * @returns a newly allocated string to be sent to the other
         *     side of the secret exchange
         * @param secret optionally, a secret to send to the other side
         * @param secret_len length of `secret,` or -1 if null terminated
         */
        send(secret: string | null, secret_len: number): string;
    }
    class SimpleCertificate extends GObjectClasses.Object implements Gcr.Certificate {
        static '$gtype': GObject.GType<SimpleCertificate>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.SimpleCertificate.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.SimpleCertificate.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(data: Uint8Array[] | string): Gcr.SimpleCertificate;
        // Signals
        connect<K extends keyof Gcr.SimpleCertificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SimpleCertificate.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.SimpleCertificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SimpleCertificate.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.SimpleCertificate.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.SimpleCertificate.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Inherited properties
        /**
         * A readable description for this certificate
         */
        get description(): string;
        /**
         * The expiry date of the certificate
         */
        get expiry_date(): GLib.DateTime;
        /**
         * The expiry date of the certificate
         */
        get expiryDate(): GLib.DateTime;
        /**
         * Common name part of the certificate issuer
         */
        get issuer_name(): string;
        /**
         * Common name part of the certificate issuer
         */
        get issuerName(): string;
        /**
         * A readable label for this certificate.
         */
        get label(): string;
        get subject_name(): string;
        get subjectName(): string;
        // Inherited methods
        /**
         * Get the basic constraints for the certificate if present. If %FALSE is
         * returned then no basic constraints are present and the `is_ca` and
         * `path_len` arguments are not changed.
         *
         * @returns whether basic constraints are present or not
         */
        get_basic_constraints(): [boolean, boolean, number];
        /**
         * Gets the raw DER data for an X.509 certificate.
         *
         * @returns raw DER data of the X.509 certificate
         */
        get_der_data(): Uint8Array[];
        /**
         * Get the expiry date of this certificate.
         *
         * @returns An expiry date of this certificate.
         */
        get_expiry_date(): GLib.DateTime | null;
        /**
         * Calculate the fingerprint for this certificate.
         *
         * The caller should free the returned data using g_free() when
         * it is no longer required.
         *
         * @returns the raw binary fingerprint
         * @param type the type of algorithm for the fingerprint.
         */
        get_fingerprint(type: GLib.ChecksumType | null): Uint8Array[] | null;
        /**
         * Calculate the fingerprint for this certificate, and return it
         * as a hex string.
         *
         * The caller should free the returned data using g_free() when
         * it is no longer required.
         *
         * @returns an allocated hex string which contains the fingerprint.
         * @param type the type of algorithm for the fingerprint.
         */
        get_fingerprint_hex(type: GLib.ChecksumType | null): string | null;
        /**
         * Get the list of sections from the certificate that can be shown to the user
         * interface.
         *
         * @returns A #GList of
         * #GcrCertificateSection
         */
        get_interface_elements(): Gcr.CertificateSection[];
        /**
         * Get the issued date of this certificate.
         *
         * @returns A issued date of this certificate.
         */
        get_issued_date(): GLib.DateTime | null;
        /**
         * Get the common name of the issuer of this certificate.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns The allocated issuer CN, or %NULL if no issuer CN present.
         */
        get_issuer_cn(): string | null;
        /**
         * Get the full issuer DN of the certificate as a (mostly)
         * readable string.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns The allocated issuer DN of the certificate.
         */
        get_issuer_dn(): string | null;
        /**
         * Get a name to represent the issuer of this certificate.
         *
         * This will try to lookup the common name, orianizational unit,
         * organization in that order.
         *
         * @returns the allocated issuer name, or %NULL if no issuer name
         */
        get_issuer_name(): string | null;
        /**
         * Get a part of the DN of the issuer of this certificate.
         *
         * Examples of a `part` might be the 'OU' (organizational unit)
         * or the 'CN' (common name). Only the value of that part
         * of the DN is returned.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns the allocated part of the issuer DN, or %NULL if no
         *          such part is present
         * @param part a DN type string or OID.
         */
        get_issuer_part(part: string): string | null;
        /**
         * Get the raw DER data for the issuer DN of the certificate.
         *
         * The data should be freed by using g_free() when no longer required.
         *
         * @returns allocated memory
         *          containing the raw issuer
         */
        get_issuer_raw(): Uint8Array[] | null;
        /**
         * Get the key size in bits of the public key represented
         * by this certificate.
         *
         * @returns The key size of the certificate.
         */
        get_key_size(): number;
        /**
         * Returns the subject public key info (SPKI) of the certificate.
         *
         * @returns The SPKI of the certificate.
         */
        get_public_key_info(): Gcr.SubjectPublicKeyInfo;
        /**
         * Get the raw binary serial number of the certificate.
         *
         * The caller should free the returned data using g_free() when
         * it is no longer required.
         *
         * @returns the raw binary serial number.
         */
        get_serial_number(): Uint8Array[] | null;
        /**
         * Get the serial number of the certificate as a hex string.
         *
         * The caller should free the returned data using g_free() when
         * it is no longer required.
         *
         * @returns an allocated string containing the serial number as hex.
         */
        get_serial_number_hex(): string | null;
        /**
         * Get the common name of the subject of this certificate.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns The allocated subject CN, or %NULL if no subject CN present.
         */
        get_subject_cn(): string | null;
        /**
         * Get the full subject DN of the certificate as a (mostly)
         * readable string.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns The allocated subject DN of the certificate.
         */
        get_subject_dn(): string | null;
        /**
         * Get a name to represent the subject of this certificate.
         *
         * This will try to lookup the common name, orianizational unit,
         * organization in that order.
         *
         * @returns the allocated subject name, or %NULL if no subject name
         */
        get_subject_name(): string | null;
        /**
         * Get a part of the DN of the subject of this certificate.
         *
         * Examples of a `part` might be the 'OU' (organizational unit)
         * or the 'CN' (common name). Only the value of that part
         * of the DN is returned.
         *
         * The string returned should be freed by the caller when no longer
         * required.
         *
         * @returns the allocated part of the subject DN, or %NULL if no
         *          such part is present.
         * @param part a DN type string or OID.
         */
        get_subject_part(part: string): string | null;
        /**
         * Get the raw DER data for the subject DN of the certificate.
         *
         * The data should be freed by using g_free() when no longer required.
         *
         * @returns allocated memory
         *          containing the raw subject
         */
        get_subject_raw(): Uint8Array[] | null;
        /**
         * Get the version of the X.509 certificate.
         *
         * @returns the version of the certificate
         */
        get_version(): number;
        /**
         * Check if `issuer` could be the issuer of this certificate. This is done by
         * comparing the relevant subject and issuer fields. No signature check is
         * done. Proper verification of certificates must be done via a crypto
         * library.
         *
         * @returns whether `issuer` could be the issuer of the certificate.
         * @param issuer a possible issuer #GcrCertificate
         */
        is_issuer(issuer: Gcr.Certificate): boolean;
        /**
         * Creates a [class`CertificateExtensionList]` that can be used to inspect the
         * extensions of this certificate.
         *
         * @returns The certificate's extensions
         */
        list_extensions(): Gcr.CertificateExtensionList;
        /**
         * Implementers of the #GcrCertificate mixin should call this function to notify
         * when the certificate has changed to emit notifications on the various
         * properties.
         */
        mixin_emit_notify(): void;
        /**
         * Gets the raw DER data for an X.509 certificate.
         */
        vfunc_get_der_data(): Uint8Array[];
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
    class SshAskpass extends GObjectClasses.Object {
        static '$gtype': GObject.GType<SshAskpass>;
        // Properties
        /**
         * The interaction used to prompt for passwords.
         */
        get interaction(): Gio.TlsInteraction;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.SshAskpass.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.SshAskpass.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(interaction: Gio.TlsInteraction): Gcr.SshAskpass;
        // Signals
        connect<K extends keyof Gcr.SshAskpass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SshAskpass.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.SshAskpass.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SshAskpass.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.SshAskpass.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.SshAskpass.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Use this function as a callback setup function passed to g_spawn_sync(),
         * g_spawn_async(), g_spawn_async_with_pipes().
         *
         * @param askpass a #GcrSshAskpass object
         */
        static child_setup(askpass?: any | null): void;
        // Methods
        /**
         * Get the interaction associated with this object.
         *
         * @returns the interaction
         */
        get_interaction(): Gio.TlsInteraction;
    }
    class SystemPrompt
        extends GObjectClasses.Object
        implements Gcr.Prompt, Gio.AsyncInitable<Gcr.SystemPrompt>, Gio.Initable
    {
        static '$gtype': GObject.GType<SystemPrompt>;
        // Properties
        /**
         * The DBus bus name of the prompter to use for prompting, or %NULL
         * for the default prompter.
         */
        get bus_name(): string;
        /**
         * The DBus bus name of the prompter to use for prompting, or %NULL
         * for the default prompter.
         */
        get busName(): string;
        /**
         * The #GcrSecretExchange to use when transferring passwords. A default
         * secret exchange will be used if this is not set.
         */
        get secret_exchange(): Gcr.SecretExchange;
        set secret_exchange(val: Gcr.SecretExchange);
        /**
         * The #GcrSecretExchange to use when transferring passwords. A default
         * secret exchange will be used if this is not set.
         */
        get secretExchange(): Gcr.SecretExchange;
        set secretExchange(val: Gcr.SecretExchange);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.SystemPrompt.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.SystemPrompt.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gcr.SystemPrompt.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SystemPrompt.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.SystemPrompt.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SystemPrompt.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.SystemPrompt.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.SystemPrompt.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        static error_get_domain(): GLib.Quark;
        /**
         * Opens a system prompt with the default prompter.
         *
         * Most system prompters only allow showing one prompt at a time, and if
         * another prompt is shown then this method will block for up to
         * `timeout_seconds` seconds. If `timeout_seconds` is equal to -1, then this
         * will block indefinitely until the prompt can be opened. If `timeout_seconds`
         * expires, then this function will fail with a %GCR_SYSTEM_PROMPT_IN_PROGRESS
         * error.
         *
         * @param timeout_seconds the number of seconds to wait to access the prompt, or -1
         * @param cancellable optional cancellation object
         */
        static open(timeout_seconds: number, cancellable?: Gio.Cancellable | null): Gcr.SystemPrompt;
        /**
         * Asynchronously open a system prompt with the default system prompter.
         *
         * Most system prompters only allow showing one prompt at a time, and if
         * another prompt is shown then this method will block for up to
         * `timeout_seconds` seconds. If `timeout_seconds` is equal to -1, then this
         * will block indefinitely until the prompt can be opened. If `timeout_seconds`
         * expires, then this operation will fail with a %GCR_SYSTEM_PROMPT_IN_PROGRESS
         * error.
         *
         * @param timeout_seconds the number of seconds to wait to access the prompt, or -1
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        static open_async(
            timeout_seconds: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gcr.SystemPrompt> | null,
        ): void;
        /**
         * Complete an operation to asynchronously open a system prompt.
         *
         * @param result the asynchronous result
         */
        static open_finish(result: Gio.AsyncResult): Gcr.SystemPrompt;
        /**
         * Opens a system prompt. If prompter_name is %NULL, then the default
         * system prompter is used.
         *
         * Most system prompters only allow showing one prompt at a time, and if
         * another prompt is shown then this method will block for up to
         * `timeout_seconds` seconds. If `timeout_seconds` is equal to -1, then this
         * will block indefinitely until the prompt can be opened. If `timeout_seconds`
         * expires, then this function will fail with a %GCR_SYSTEM_PROMPT_IN_PROGRESS
         * error.
         *
         * @param prompter_name the prompter dbus name
         * @param timeout_seconds the number of seconds to wait to access the prompt, or -1
         * @param cancellable optional cancellation object
         */
        static open_for_prompter(
            prompter_name: string | null,
            timeout_seconds: number,
            cancellable?: Gio.Cancellable | null,
        ): Gcr.SystemPrompt;
        /**
         * Opens a system prompt asynchronously. If prompter_name is %NULL, then the
         * default system prompter is used.
         *
         * Most system prompters only allow showing one prompt at a time, and if
         * another prompt is shown then this method will block for up to
         * `timeout_seconds` seconds. If `timeout_seconds` is equal to -1, then this
         * will block indefinitely until the prompt can be opened. If `timeout_seconds`
         * expires, then this operation will fail with a %GCR_SYSTEM_PROMPT_IN_PROGRESS
         * error.
         *
         * @param prompter_name the prompter D-Bus name
         * @param timeout_seconds the number of seconds to wait to access the prompt, or -1
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        static open_for_prompter_async(
            prompter_name: string | null,
            timeout_seconds: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Gcr.SystemPrompt> | null,
        ): void;
        // Methods
        /**
         * Close this prompt. After calling this function, no further prompts will
         * succeed on this object. The prompt object is not unreferenced by this
         * function, and you must unreference it once done.
         *
         * This call may block, use the gcr_system_prompt_close_async() to perform
         * this action indefinitely.
         *
         * Whether or not this function returns %TRUE, the system prompt object is
         * still closed and may not be further used.
         *
         * @returns whether close was cleanly completed
         * @param cancellable an optional cancellation object
         */
        close(cancellable?: Gio.Cancellable | null): boolean;
        // Conflicted with Gcr.Prompt.close
        close(...args: never[]): any;
        /**
         * Close this prompt asynchronously. After calling this function, no further
         * methods may be called on this object. The prompt object is not unreferenced
         * by this function, and you must unreference it once done.
         *
         * This call returns immediately and completes asynchronously.
         *
         * @param cancellable an optional cancellation object
         */
        close_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Close this prompt asynchronously. After calling this function, no further
         * methods may be called on this object. The prompt object is not unreferenced
         * by this function, and you must unreference it once done.
         *
         * This call returns immediately and completes asynchronously.
         *
         * @param cancellable an optional cancellation object
         * @param callback called when the operation completes
         */
        close_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Close this prompt asynchronously. After calling this function, no further
         * methods may be called on this object. The prompt object is not unreferenced
         * by this function, and you must unreference it once done.
         *
         * This call returns immediately and completes asynchronously.
         *
         * @param cancellable an optional cancellation object
         * @param callback called when the operation completes
         */
        close_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete operation to close this prompt.
         *
         * Whether or not this function returns %TRUE, the system prompt object is
         * still closed and may not be further used.
         *
         * @returns whether close was cleanly completed
         * @param result asynchronous operation result
         */
        close_finish(result: Gio.AsyncResult): boolean;
        /**
         * Get the current [class`SecretExchange]` used to transfer secrets in this prompt.
         *
         * @returns the secret exchange
         */
        get_secret_exchange(): Gcr.SecretExchange;
        // Inherited properties
        /**
         * The string handle of the caller's window.
         *
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         *
         * In X11, this will be a stringified version of the XWindow handle; in
         * Wayland this is the result of an export using the XDG foreign
         * protocol.
         */
        get caller_window(): string;
        set caller_window(val: string);
        /**
         * The string handle of the caller's window.
         *
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         *
         * In X11, this will be a stringified version of the XWindow handle; in
         * Wayland this is the result of an export using the XDG foreign
         * protocol.
         */
        get callerWindow(): string;
        set callerWindow(val: string);
        /**
         * The label for the cancel button in the prompt.
         */
        get cancel_label(): string;
        set cancel_label(val: string);
        /**
         * The label for the cancel button in the prompt.
         */
        get cancelLabel(): string;
        set cancelLabel(val: string);
        /**
         * Whether the additional choice is chosen or not.
         *
         * The additional choice would have been setup using #GcrPrompt:choice-label.
         */
        get choice_chosen(): boolean;
        set choice_chosen(val: boolean);
        /**
         * Whether the additional choice is chosen or not.
         *
         * The additional choice would have been setup using #GcrPrompt:choice-label.
         */
        get choiceChosen(): boolean;
        set choiceChosen(val: boolean);
        /**
         * The label for the additional choice.
         *
         * If this is a non-%NULL value then an additional boolean choice will be
         * displayed by the prompt allowing the user to select or deselect it.
         *
         * If %NULL, then no additional choice is displayed.
         *
         * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
         */
        get choice_label(): string;
        set choice_label(val: string);
        /**
         * The label for the additional choice.
         *
         * If this is a non-%NULL value then an additional boolean choice will be
         * displayed by the prompt allowing the user to select or deselect it.
         *
         * If %NULL, then no additional choice is displayed.
         *
         * The initial value of the choice can be set with #GcrPrompt:choice-chosen.
         */
        get choiceLabel(): string;
        set choiceLabel(val: string);
        /**
         * The label for the continue button in the prompt.
         */
        get continue_label(): string;
        set continue_label(val: string);
        /**
         * The label for the continue button in the prompt.
         */
        get continueLabel(): string;
        set continueLabel(val: string);
        /**
         * The detailed description of the prompt.
         *
         * A prompt implementation may choose not to display this detailed description.
         * The prompt message should contain relevant information.
         */
        get description(): string;
        set description(val: string);
        /**
         * The prompt message for the user.
         *
         * A prompt implementation should always display this message.
         */
        get message(): string;
        set message(val: string);
        /**
         * Whether the prompt will prompt for a new password.
         *
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         */
        get password_new(): boolean;
        set password_new(val: boolean);
        /**
         * Whether the prompt will prompt for a new password.
         *
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         */
        get passwordNew(): boolean;
        set passwordNew(val: boolean);
        /**
         * Indication of the password strength.
         *
         * Prompts will return a zero value if the password is empty, and a value
         * greater than zero if the password has any characters.
         *
         * This is only valid after a successful prompt for a password.
         */
        get password_strength(): number;
        /**
         * Indication of the password strength.
         *
         * Prompts will return a zero value if the password is empty, and a value
         * greater than zero if the password has any characters.
         *
         * This is only valid after a successful prompt for a password.
         */
        get passwordStrength(): number;
        /**
         * The title of the prompt.
         *
         * A prompt implementation may choose not to display the prompt title. The
         * #GcrPrompt:message should contain relevant information.
         */
        get title(): string;
        set title(val: string);
        /**
         * A prompt warning displayed on the prompt, or %NULL for no warning.
         *
         * This is a warning like "The password is incorrect." usually displayed to the
         * user about a previous 'unsuccessful' prompt.
         */
        get warning(): string;
        set warning(val: string);
        // Inherited methods
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this function to
         * represent the question correctly.
         *
         * This method will block until the a response is returned from the prompter.
         *
         * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
         * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         *
         * @returns the reply from the prompt
         * @param cancellable optional cancellation object
         */
        confirm(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         *
         * This method will return immediately and complete asynchronously.
         *
         * @param cancellable optional cancellation object
         */
        confirm_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Gcr.PromptReply>;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         *
         * This method will return immediately and complete asynchronously.
         *
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        confirm_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         *
         * This method will return immediately and complete asynchronously.
         *
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        confirm_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gcr.PromptReply> | void;
        /**
         * Complete an operation to prompt for confirmation.
         *
         * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
         * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         *
         * @returns the reply from the prompt
         * @param result asynchronous result passed to callback
         */
        confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this function to
         * represent the question correctly.
         *
         * This method will block until the a response is returned from the prompter
         * and will run a main loop similar to a `gtk_dialog_run()`. The application
         * will remain responsive but care must be taken to handle reentrancy issues.
         *
         * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
         * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         *
         * @returns the reply from the prompt
         * @param cancellable optional cancellation object
         */
        confirm_run(cancellable?: Gio.Cancellable | null): Gcr.PromptReply;
        /**
         * Get the string handle of the caller's window.
         *
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         *
         * @returns a newly allocated string containing the string
         *          handle of the window.
         */
        get_caller_window(): string;
        /**
         * Get the label for the cancel button.
         *
         * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
         * from the prompt.
         *
         * @returns a newly allocated string containing the label
         */
        get_cancel_label(): string;
        /**
         * Get whether the additional choice was chosen or not.
         *
         * The additional choice would have been setup using
         * gcr_prompt_set_choice_label().
         *
         * @returns whether chosen
         */
        get_choice_chosen(): boolean;
        /**
         * Get the label for the additional choice.
         *
         * This will be %NULL if no additional choice is being displayed.
         *
         * @returns a newly allocated string containing the additional
         *          choice or %NULL
         */
        get_choice_label(): string;
        /**
         * Get the label for the continue button.
         *
         * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
         * from the prompt.
         *
         * @returns a newly allocated string containing the label
         */
        get_continue_label(): string;
        /**
         * Get the detailed description of the prompt.
         *
         * A prompt implementation may choose not to display this detailed description.
         * The prompt message should contain relevant information.
         *
         * @returns a newly allocated string containing the detailed
         *          description of the prompt
         */
        get_description(): string;
        /**
         * Gets the prompt message for the user.
         *
         * A prompt implementation should always display this message.
         *
         * @returns a newly allocated string containing the detailed
         *          description of the prompt
         */
        get_message(): string;
        /**
         * Get whether the prompt will prompt for a new password.
         *
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         *
         * @returns whether in new password mode or not
         */
        get_password_new(): boolean;
        /**
         * Get indication of the password strength.
         *
         * Prompts will return a zero value if the password is empty, and a value
         * greater than zero if the password has any characters.
         *
         * This is only valid after a successful prompt for a password.
         *
         * @returns zero if the password is empty, greater than zero if not
         */
        get_password_strength(): number;
        /**
         * Gets the title of the prompt.
         *
         * A prompt implementation may choose not to display the prompt title. The
         * prompt message should contain relevant information.
         *
         * @returns a newly allocated string containing the prompt
         *          title.
         */
        get_title(): string;
        /**
         * Get a prompt warning displayed on the prompt.
         *
         * This is a warning like "The password is incorrect." usually displayed to the
         * user about a previous 'unsuccessful' prompt.
         *
         * If this string is %NULL then no warning is displayed.
         *
         * @returns a newly allocated string containing the prompt
         *          warning, or %NULL if no warning
         */
        get_warning(): string;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will block until the a response is returned from the prompter.
         *
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         *
         * %NULL will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         *
         * @returns the password owned by the prompt, or %NULL
         * @param cancellable optional cancellation object
         */
        password(cancellable?: Gio.Cancellable | null): string;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will return immediately and complete asynchronously.
         *
         * @param cancellable optional cancellation object
         */
        password_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will return immediately and complete asynchronously.
         *
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        password_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will return immediately and complete asynchronously.
         *
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        password_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Complete an operation to prompt for a password.
         *
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         *
         * %NULL will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         *
         * @returns the password owned by the prompt, or %NULL
         * @param result asynchronous result passed to callback
         */
        password_finish(result: Gio.AsyncResult): string;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will block until the a response is returned from the prompter
         * and will run a main loop similar to a gtk_dialog_run(). The application
         * will remain responsive but care must be taken to handle reentrancy issues.
         *
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         *
         * %NULL will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         *
         * @returns the password owned by the prompt, or %NULL
         * @param cancellable optional cancellation object
         */
        password_run(cancellable?: Gio.Cancellable | null): string;
        /**
         * Reset the contents and properties of the prompt.
         */
        reset(): void;
        /**
         * Set the string handle of the caller's window.
         *
         * The caller window indicates to the prompt which window is prompting the
         * user. The prompt may choose to ignore this information or use it in whatever
         * way it sees fit.
         *
         * @param window_id the window id
         */
        set_caller_window(window_id: string): void;
        /**
         * Set the label for the continue button.
         *
         * This is the button that results in a %GCR_PROMPT_REPLY_CANCEL reply
         * from the prompt.
         *
         * @param cancel_label the label
         */
        set_cancel_label(cancel_label: string): void;
        /**
         * Set whether the additional choice is chosen or not.
         *
         * The additional choice should be set up using gcr_prompt_set_choice_label().
         *
         * @param chosen whether chosen
         */
        set_choice_chosen(chosen: boolean): void;
        /**
         * Set the label for the additional choice.
         *
         * If this is a non-%NULL value then an additional boolean choice will be
         * displayed by the prompt allowing the user to select or deselect it.
         *
         * The initial value of the choice can be set with the
         * gcr_prompt_set_choice_label() method.
         *
         * If this is %NULL, then no additional choice is being displayed.
         *
         * @param choice_label the additional choice or %NULL
         */
        set_choice_label(choice_label?: string | null): void;
        /**
         * Set the label for the continue button.
         *
         * This is the button that results in a %GCR_PROMPT_REPLY_CONTINUE reply
         * from the prompt.
         *
         * @param continue_label the label
         */
        set_continue_label(continue_label: string): void;
        /**
         * Set the detailed description of the prompt.
         *
         * A prompt implementation may choose not to display this detailed description.
         * Use gcr_prompt_set_message() to set a general message containing relevant
         * information.
         *
         * @param description the detailed description
         */
        set_description(description: string): void;
        /**
         * Sets the prompt message for the user.
         *
         * A prompt implementation should always display this message.
         *
         * @param message the prompt message
         */
        set_message(message: string): void;
        /**
         * Set whether the prompt will prompt for a new password.
         *
         * This will cause the prompt implementation to ask the user to confirm the
         * password and/or display other relevant user interface for creating a new
         * password.
         *
         * @param new_password whether in new password mode or not
         */
        set_password_new(new_password: boolean): void;
        /**
         * Sets the title of the prompt.
         *
         * A prompt implementation may choose not to display the prompt title. The
         * prompt message should contain relevant information.
         *
         * @param title the prompt title
         */
        set_title(title: string): void;
        /**
         * Set a prompt warning displayed on the prompt.
         *
         * This is a warning like "The password is incorrect." usually displayed to the
         * user about a previous 'unsuccessful' prompt.
         *
         * If this string is %NULL then no warning is displayed.
         *
         * @param warning the warning or %NULL
         */
        set_warning(warning?: string | null): void;
        /**
         * close a prompt
         */
        vfunc_prompt_close(): void;
        /**
         * Prompts for confirmation asking a cancel/continue style question.
         * Set the various properties on the prompt before calling this method to
         * represent the question correctly.
         *
         * This method will return immediately and complete asynchronously.
         *
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        vfunc_prompt_confirm_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Complete an operation to prompt for confirmation.
         *
         * %GCR_PROMPT_REPLY_CONTINUE will be returned if the user confirms the prompt. The
         * return value will also be %GCR_PROMPT_REPLY_CANCEL if the user cancels or if
         * an error occurs. Check the `error` argument to tell the difference.
         *
         * @param result asynchronous result passed to callback
         */
        vfunc_prompt_confirm_finish(result: Gio.AsyncResult): Gcr.PromptReply;
        /**
         * Prompts for password. Set the various properties on the prompt before calling
         * this method to explain which password should be entered.
         *
         * This method will return immediately and complete asynchronously.
         *
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        vfunc_prompt_password_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Complete an operation to prompt for a password.
         *
         * A password will be returned if the user enters a password successfully.
         * The returned password is valid until the next time a method is called
         * to display another prompt.
         *
         * %NULL will be returned if the user cancels or if an error occurs. Check the
         * `error` argument to tell the difference.
         *
         * @param result asynchronous result passed to callback
         */
        vfunc_prompt_password_finish(result: Gio.AsyncResult): string;
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
        new_finish(res: Gio.AsyncResult): Gcr.SystemPrompt;
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
    class SystemPrompter extends GObjectClasses.Object {
        static '$gtype': GObject.GType<SystemPrompter>;
        // Properties
        /**
         * The #GType for prompts created by this prompter. This must be a
         * #GcrPrompt implementation.
         */
        get prompt_type(): GObject.GType;
        /**
         * The #GType for prompts created by this prompter. This must be a
         * #GcrPrompt implementation.
         */
        get promptType(): GObject.GType;
        /**
         * Whether the prompter is prompting or not.
         */
        get prompting(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gcr.SystemPrompter.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gcr.SystemPrompter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(mode: Gcr.SystemPrompterMode, prompt_type: GObject.GType): Gcr.SystemPrompter;
        // Signals
        connect<K extends keyof Gcr.SystemPrompter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SystemPrompter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gcr.SystemPrompter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gcr.SystemPrompter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gcr.SystemPrompter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gcr.SystemPrompter.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Get the mode for this prompter.
         *
         * Most system prompters only display one prompt at a time and therefore
         * return %GCR_SYSTEM_PROMPTER_SINGLE.
         *
         * @returns the prompter mode
         */
        get_mode(): Gcr.SystemPrompterMode;
        /**
         * Get the #GType for prompts created by this prompter.
         *
         * The returned #GType will be a #GcrPrompt implementation.
         *
         * @returns the prompt #GType
         */
        get_prompt_type(): GObject.GType;
        /**
         * Get whether prompting or not.
         *
         * @returns whether prompting or not
         */
        get_prompting(): boolean;
        /**
         * Register this system prompter on the DBus `connection`.
         *
         * This makes the prompter available for clients to call. The prompter will
         * remain registered until gcr_system_prompter_unregister() is called, or the
         * prompter is unreferenced.
         *
         * @param connection a DBus connection
         */
        register(connection: Gio.DBusConnection): void;
        /**
         * Unregister this system prompter on the DBus `connection`.
         *
         * The prompter must have previously been registered with gcr_system_prompter_register().
         *
         * If `wait` is set then this function will wait until all prompts have been closed
         * or cancelled. This is usually only used by tests.
         *
         * @param wait whether to wait for closing prompts
         */
        unregister(wait: boolean): void;
    }
}
export default classes;
