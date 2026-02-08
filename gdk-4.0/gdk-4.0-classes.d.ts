import type Gdk from './gdk-4.0.d.ts';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import { type GioClasses } from '@girs/gio-2.0/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
declare namespace classes {
    class AppLaunchContext extends GioClasses.AppLaunchContext {
        static '$gtype': GObject.GType<AppLaunchContext>;
        // Properties
        /**
         * The display that the `GdkAppLaunchContext` is on.
         */
        get display(): Gdk.Display;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.AppLaunchContext.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.AppLaunchContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.AppLaunchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.AppLaunchContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.AppLaunchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.AppLaunchContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.AppLaunchContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.AppLaunchContext.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the `GdkDisplay` that `context` is for.
         *
         * @returns the display of `context`
         */
        get_display(): Gdk.Display;
        // Conflicted with Gio.AppLaunchContext.get_display
        get_display(...args: never[]): any;
        /**
         * Sets the workspace on which applications will be launched.
         *
         * This only works when running under a window manager that
         * supports multiple workspaces, as described in the
         * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
         * Specifically this sets the `_NET_WM_DESKTOP` property described
         * in that spec.
         *
         * This only works when using the X11 backend.
         *
         * When the workspace is not specified or `desktop` is set to -1,
         * it is up to the window manager to pick one, typically it will
         * be the current workspace.
         *
         * @param desktop the number of a workspace, or -1
         */
        set_desktop(desktop: number): void;
        /**
         * Sets the icon for applications that are launched with this
         * context.
         *
         * Window Managers can use this information when displaying startup
         * notification.
         *
         * See also [method`Gdk`.AppLaunchContext.set_icon_name].
         *
         * @param icon a `GIcon`
         */
        set_icon(icon?: Gio.Icon | null): void;
        /**
         * Sets the icon for applications that are launched with this context.
         *
         * The `icon_name` will be interpreted in the same way as the Icon field
         * in desktop files. See also [method`Gdk`.AppLaunchContext.set_icon].
         *
         * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
         * If neither `icon` or `icon_name` is set, the icon is taken from either
         * the file that is passed to launched application or from the `GAppInfo`
         * for the launched application itself.
         *
         * @param icon_name an icon name
         */
        set_icon_name(icon_name?: string | null): void;
        /**
         * Sets the timestamp of `context`.
         *
         * The timestamp should ideally be taken from the event that
         * triggered the launch.
         *
         * Window managers can use this information to avoid moving the
         * focus to the newly launched application when the user is busy
         * typing in another window. This is also known as 'focus stealing
         * prevention'.
         *
         * @param timestamp a timestamp
         */
        set_timestamp(timestamp: number): void;
    }
    abstract class CairoContext extends DrawContext {
        static '$gtype': GObject.GType<CairoContext>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.CairoContext.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.CairoContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.CairoContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.CairoContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.CairoContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.CairoContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.CairoContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.CairoContext.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves a Cairo context to be used to draw on the `GdkSurface`
         * of `context`.
         *
         * A call to [method`Gdk`.DrawContext.begin_frame] with this
         * `context` must have been done or this function will return %NULL.
         *
         * The returned context is guaranteed to be valid until
         * [method`Gdk`.DrawContext.end_frame] is called.
         *
         * @returns a Cairo context
         *   to draw on `GdkSurface
         */
        cairo_create(): cairo.Context | null;
    }
    class CicpParams extends GObjectClasses.Object {
        static '$gtype': GObject.GType<CicpParams>;
        // Properties
        /**
         * The color primaries to use.
         *
         * Supported values:
         *
         * - 1: BT.709 / sRGB
         * - 2: unspecified
         * - 5: PAL
         * - 6,7: BT.601 / NTSC
         * - 9: BT.2020
         * - 12: Display P3
         */
        get color_primaries(): number;
        set color_primaries(val: number);
        /**
         * The color primaries to use.
         *
         * Supported values:
         *
         * - 1: BT.709 / sRGB
         * - 2: unspecified
         * - 5: PAL
         * - 6,7: BT.601 / NTSC
         * - 9: BT.2020
         * - 12: Display P3
         */
        get colorPrimaries(): number;
        set colorPrimaries(val: number);
        /**
         * The matrix coefficients (for YUV to RGB conversion).
         *
         * Supported values:
         *
         * - 0: RGB
         * - 2: unspecified
         */
        get matrix_coefficients(): number;
        set matrix_coefficients(val: number);
        /**
         * The matrix coefficients (for YUV to RGB conversion).
         *
         * Supported values:
         *
         * - 0: RGB
         * - 2: unspecified
         */
        get matrixCoefficients(): number;
        set matrixCoefficients(val: number);
        /**
         * Whether the data is using the full range of values.
         *
         * The range of the data.
         */
        get range(): Gdk.CicpRange;
        set range(val: Gdk.CicpRange);
        /**
         * The transfer function to use.
         *
         * Supported values:
         *
         * - 1,6,14,15: BT.709, BT.601, BT.2020
         * - 2: unspecified
         * - 4: gamma 2.2
         * - 5: gamma 2.8
         * - 8: linear
         * - 13: sRGB
         * - 16: BT.2100 PQ
         * - 18: BT.2100 HLG
         */
        get transfer_function(): number;
        set transfer_function(val: number);
        /**
         * The transfer function to use.
         *
         * Supported values:
         *
         * - 1,6,14,15: BT.709, BT.601, BT.2020
         * - 2: unspecified
         * - 4: gamma 2.2
         * - 5: gamma 2.8
         * - 8: linear
         * - 13: sRGB
         * - 16: BT.2100 PQ
         * - 18: BT.2100 HLG
         */
        get transferFunction(): number;
        set transferFunction(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.CicpParams.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.CicpParams.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gdk.CicpParams;
        // Signals
        connect<K extends keyof Gdk.CicpParams.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.CicpParams.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.CicpParams.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.CicpParams.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.CicpParams.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.CicpParams.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Creates a new `GdkColorState` object for the cicp parameters in `self`.
         *
         * Note that this may fail if the cicp parameters in `self` are not
         * supported by GTK. In that case, `NULL` is returned, and `error` is set
         * with an error message that can be presented to the user.
         *
         * @returns A newly allocated `GdkColorState`
         */
        build_color_state(): Gdk.ColorState;
        /**
         * Returns the value of the color-primaries property
         * of `self`.
         *
         * @returns the color-primaries value
         */
        get_color_primaries(): number;
        /**
         * Gets the matrix-coefficients property of `self`.
         *
         * @returns the matrix-coefficients value
         */
        get_matrix_coefficients(): number;
        /**
         * Gets the range property of `self`.
         *
         * @returns the range value
         */
        get_range(): Gdk.CicpRange;
        /**
         * Gets the transfer-function property of `self`.
         *
         * @returns the transfer-function value
         */
        get_transfer_function(): number;
        /**
         * Sets the color-primaries property of `self`.
         *
         * @param color_primaries the new color primaries value
         */
        set_color_primaries(color_primaries: number): void;
        /**
         * `self` a `GdkCicpParams`
         * Sets the matrix-coefficients property of `self`.
         *
         * @param matrix_coefficients the new matrix-coefficients value
         */
        set_matrix_coefficients(matrix_coefficients: number): void;
        /**
         * Sets the range property of `self`
         *
         * @param range the range value
         */
        set_range(range: Gdk.CicpRange | null): void;
        /**
         * Sets the transfer-function property of `self`.
         *
         * @param transfer_function the new transfer-function value
         */
        set_transfer_function(transfer_function: number): void;
    }
    class Clipboard extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Clipboard>;
        // Properties
        /**
         * The `GdkContentProvider` or %NULL if the clipboard is empty or contents are
         * provided otherwise.
         */
        get content(): Gdk.ContentProvider;
        /**
         * The `GdkDisplay` that the clipboard belongs to.
         */
        get display(): Gdk.Display;
        /**
         * The possible formats that the clipboard can provide its data in.
         */
        get formats(): Gdk.ContentFormats;
        /**
         * %TRUE if the contents of the clipboard are owned by this process.
         */
        get local(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Clipboard.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Clipboard.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.Clipboard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Clipboard.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Clipboard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Clipboard.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Clipboard.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Clipboard.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the `GdkContentProvider` currently set on `clipboard`.
         *
         * If the `clipboard` is empty or its contents are not owned by the
         * current process, %NULL will be returned.
         *
         * @returns The content of a clipboard
         *   if the clipboard does not maintain any content
         */
        get_content(): Gdk.ContentProvider | null;
        /**
         * Gets the `GdkDisplay` that the clipboard was created for.
         *
         * @returns a `GdkDisplay`
         */
        get_display(): Gdk.Display;
        /**
         * Gets the formats that the clipboard can provide its current contents in.
         *
         * @returns The formats of the clipboard
         */
        get_formats(): Gdk.ContentFormats;
        /**
         * Returns if the clipboard is local.
         *
         * A clipboard is considered local if it was last claimed
         * by the running application.
         *
         * Note that [method`Gdk`.Clipboard.get_content] may return %NULL
         * even on a local clipboard. In this case the clipboard is empty.
         *
         * @returns %TRUE if the clipboard is local
         */
        is_local(): boolean;
        /**
         * Asynchronously requests an input stream to read the `clipboard'`s
         * contents from.
         *
         * The clipboard will choose the most suitable mime type from the given list
         * to fulfill the request, preferring the ones listed first.
         *
         * @param mime_types a %NULL-terminated array of mime types to choose from
         * @param io_priority the I/O priority of the request
         * @param cancellable optional `GCancellable` object
         */
        read_async(
            mime_types: string[],
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Gio.InputStream | null, string]>;
        /**
         * Asynchronously requests an input stream to read the `clipboard'`s
         * contents from.
         *
         * The clipboard will choose the most suitable mime type from the given list
         * to fulfill the request, preferring the ones listed first.
         *
         * @param mime_types a %NULL-terminated array of mime types to choose from
         * @param io_priority the I/O priority of the request
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the request is satisfied
         */
        read_async(
            mime_types: string[],
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously requests an input stream to read the `clipboard'`s
         * contents from.
         *
         * The clipboard will choose the most suitable mime type from the given list
         * to fulfill the request, preferring the ones listed first.
         *
         * @param mime_types a %NULL-terminated array of mime types to choose from
         * @param io_priority the I/O priority of the request
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the request is satisfied
         */
        read_async(
            mime_types: string[],
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream | null, string]> | void;
        /**
         * Finishes an asynchronous clipboard read.
         *
         * See [method`Gdk`.Clipboard.read_async].
         *
         * @returns a `GInputStream`
         * @param result a `GAsyncResult`
         */
        read_finish(result: Gio.AsyncResult): [Gio.InputStream | null, string];
        /**
         * Asynchronously request the `clipboard` contents converted to a string.
         *
         * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
         * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
         * need more control over the operation.
         *
         * @param cancellable optional `GCancellable` object
         */
        read_text_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<string | null>;
        /**
         * Asynchronously request the `clipboard` contents converted to a string.
         *
         * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
         * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
         * need more control over the operation.
         *
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the request is satisfied
         */
        read_text_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously request the `clipboard` contents converted to a string.
         *
         * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
         * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
         * need more control over the operation.
         *
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the request is satisfied
         */
        read_text_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string | null> | void;
        /**
         * Finishes an asynchronous clipboard read.
         *
         * See [method`Gdk`.Clipboard.read_text_async].
         *
         * @returns a new string
         * @param result a `GAsyncResult`
         */
        read_text_finish(result: Gio.AsyncResult): string | null;
        /**
         * Asynchronously request the `clipboard` contents converted to a `GdkPixbuf`.
         *
         * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
         * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
         * need more control over the operation.
         *
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         */
        read_texture_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Gdk.Texture | null>;
        /**
         * Asynchronously request the `clipboard` contents converted to a `GdkPixbuf`.
         *
         * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
         * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
         * need more control over the operation.
         *
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         * @param callback callback to call when the request is satisfied
         */
        read_texture_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously request the `clipboard` contents converted to a `GdkPixbuf`.
         *
         * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
         * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
         * need more control over the operation.
         *
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         * @param callback callback to call when the request is satisfied
         */
        read_texture_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gdk.Texture | null> | void;
        /**
         * Finishes an asynchronous clipboard read.
         *
         * See [method`Gdk`.Clipboard.read_texture_async].
         *
         * @returns a new `GdkTexture`
         * @param result a `GAsyncResult`
         */
        read_texture_finish(result: Gio.AsyncResult): Gdk.Texture | null;
        /**
         * Asynchronously request the `clipboard` contents converted to the given
         * `type`.
         *
         * For local clipboard contents that are available in the given `GType`,
         * the value will be copied directly. Otherwise, GDK will try to use
         * [func`content_deserialize_async]` to convert the clipboard's data.
         *
         * @param type a `GType` to read
         * @param io_priority the I/O priority of the request
         * @param cancellable optional `GCancellable` object
         */
        read_value_async(
            type: GObject.GType,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GObject.Value>;
        /**
         * Asynchronously request the `clipboard` contents converted to the given
         * `type`.
         *
         * For local clipboard contents that are available in the given `GType`,
         * the value will be copied directly. Otherwise, GDK will try to use
         * [func`content_deserialize_async]` to convert the clipboard's data.
         *
         * @param type a `GType` to read
         * @param io_priority the I/O priority of the request
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the request is satisfied
         */
        read_value_async(
            type: GObject.GType,
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously request the `clipboard` contents converted to the given
         * `type`.
         *
         * For local clipboard contents that are available in the given `GType`,
         * the value will be copied directly. Otherwise, GDK will try to use
         * [func`content_deserialize_async]` to convert the clipboard's data.
         *
         * @param type a `GType` to read
         * @param io_priority the I/O priority of the request
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the request is satisfied
         */
        read_value_async(
            type: GObject.GType,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GObject.Value> | void;
        /**
         * Finishes an asynchronous clipboard read.
         *
         * See [method`Gdk`.Clipboard.read_value_async].
         *
         * @returns a `GValue` containing the result.
         * @param result a `GAsyncResult`
         */
        read_value_finish(result: Gio.AsyncResult): unknown;
        /**
         * Sets a new content provider on `clipboard`.
         *
         * The clipboard will claim the `GdkDisplay`'s resources and advertise
         * these new contents to other applications.
         *
         * In the rare case of a failure, this function will return %FALSE. The
         * clipboard will then continue reporting its old contents and ignore
         * `provider`.
         *
         * If the contents are read by either an external application or the
         * `clipboard'`s read functions, `clipboard` will select the best format to
         * transfer the contents and then request that format from `provider`.
         *
         * @returns %TRUE if setting the clipboard succeeded
         * @param provider the new contents of `clipboard`
         *   or %NULL to clear the clipboard
         */
        set_content(provider?: Gdk.ContentProvider | null): boolean;
        /**
         * Sets the `clipboard` to contain the given `value`.
         *
         * @param value a `GValue` to set
         */
        set(value: GObject.Value | any): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Asynchronously instructs the `clipboard` to store its contents remotely.
         *
         * If the clipboard is not local, this function does nothing but report success.
         *
         * The purpose of this call is to preserve clipboard contents beyond the
         * lifetime of an application, so this function is typically called on
         * exit. Depending on the platform, the functionality may not be available
         * unless a "clipboard manager" is running.
         *
         * This function is called automatically when a
         * [GtkApplication](../gtk4/class.Application.html)
         * is shut down, so you likely don't need to call it.
         *
         * @param io_priority the I/O priority of the request
         * @param cancellable optional `GCancellable` object
         */
        store_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously instructs the `clipboard` to store its contents remotely.
         *
         * If the clipboard is not local, this function does nothing but report success.
         *
         * The purpose of this call is to preserve clipboard contents beyond the
         * lifetime of an application, so this function is typically called on
         * exit. Depending on the platform, the functionality may not be available
         * unless a "clipboard manager" is running.
         *
         * This function is called automatically when a
         * [GtkApplication](../gtk4/class.Application.html)
         * is shut down, so you likely don't need to call it.
         *
         * @param io_priority the I/O priority of the request
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the request is satisfied
         */
        store_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously instructs the `clipboard` to store its contents remotely.
         *
         * If the clipboard is not local, this function does nothing but report success.
         *
         * The purpose of this call is to preserve clipboard contents beyond the
         * lifetime of an application, so this function is typically called on
         * exit. Depending on the platform, the functionality may not be available
         * unless a "clipboard manager" is running.
         *
         * This function is called automatically when a
         * [GtkApplication](../gtk4/class.Application.html)
         * is shut down, so you likely don't need to call it.
         *
         * @param io_priority the I/O priority of the request
         * @param cancellable optional `GCancellable` object
         * @param callback callback to call when the request is satisfied
         */
        store_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an asynchronous clipboard store.
         *
         * See [method`Gdk`.Clipboard.store_async].
         *
         * @returns %TRUE if storing was successful.
         * @param result a `GAsyncResult`
         */
        store_finish(result: Gio.AsyncResult): boolean;
    }
    class ContentDeserializer extends GObjectClasses.Object implements Gio.AsyncResult {
        static '$gtype': GObject.GType<ContentDeserializer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.ContentDeserializer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.ContentDeserializer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.ContentDeserializer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ContentDeserializer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.ContentDeserializer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ContentDeserializer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.ContentDeserializer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.ContentDeserializer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the cancellable for the current operation.
         *
         * This is the `GCancellable` that was passed to [func`Gdk`.content_deserialize_async].
         *
         * @returns the cancellable for the current operation
         */
        get_cancellable(): Gio.Cancellable | null;
        /**
         * Gets the `GType` to create an instance of.
         *
         * @returns the `GType` for the current operation
         */
        get_gtype(): GObject.GType;
        /**
         * Gets the input stream for the current operation.
         *
         * This is the stream that was passed to [func`Gdk`.content_deserialize_async].
         *
         * @returns the input stream for the current operation
         */
        get_input_stream(): Gio.InputStream;
        /**
         * Gets the mime type to deserialize from.
         *
         * @returns the mime type for the current operation
         */
        get_mime_type(): string;
        /**
         * Gets the I/O priority for the current operation.
         *
         * This is the priority that was passed to [func`Gdk`.content_deserialize_async].
         *
         * @returns the I/O priority for the current operation
         */
        get_priority(): number;
        /**
         * Gets the data that was associated with the current operation.
         *
         * See [method`Gdk`.ContentDeserializer.set_task_data].
         *
         * @returns the task data for `deserializer`
         */
        get_task_data(): any | null;
        /**
         * Gets the user data that was passed when the deserializer was registered.
         *
         * @returns the user data for this deserializer
         */
        get_user_data(): any | null;
        /**
         * Gets the `GValue` to store the deserialized object in.
         *
         * @returns the `GValue` for the current operation
         */
        get_value(): unknown;
        /**
         * Indicate that the deserialization has ended with an error.
         *
         * This function consumes `error`.
         *
         * @param error a `GError`
         */
        return_error(error: GLib.Error): void;
        /**
         * Indicate that the deserialization has been successfully completed.
         */
        return_success(): void;
        /**
         * Associate data with the current deserialization operation.
         *
         * @param data data to associate with this operation
         */
        set_task_data(data?: any | null): void;
        // Inherited methods
        /**
         * Gets the source object from a [iface`Gio`.AsyncResult].
         *
         * @returns a new reference to the source
         *    object for the `res,` or `NULL` if there is none.
         */
        get_source_object<T = GObject.Object>(): T;
        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         *
         * @returns `TRUE` if `res` has the indicated `source_tag,` `FALSE` if
         *   not.
         * @param source_tag an application-defined tag
         */
        is_tagged(source_tag?: any | null): boolean;
        /**
         * If `res` is a [class`Gio`.SimpleAsyncResult], this is equivalent to
         * [method`Gio`.SimpleAsyncResult.propagate_error]. Otherwise it returns
         * `FALSE`.
         *
         * This can be used for legacy error handling in async `*_finish()`
         * wrapper functions that traditionally handled [class`Gio`.SimpleAsyncResult]
         * error returns themselves rather than calling into the virtual method.
         * This should not be used in new code; [iface`Gio`.AsyncResult] errors that are
         * set by virtual methods should also be extracted by virtual methods,
         * to enable subclasses to chain up correctly.
         *
         * @returns `TRUE` if `error` is has been filled in with an error from
         *   `res,` `FALSE` if not.
         */
        legacy_propagate_error(): boolean;
        /**
         * Gets the source object from a [iface`Gio`.AsyncResult].
         */
        vfunc_get_source_object<T = GObject.Object>(): T;
        /**
         * Gets the user data from a [iface`Gio`.AsyncResult].
         */
        vfunc_get_user_data(): any | null;
        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         *
         * @param source_tag an application-defined tag
         */
        vfunc_is_tagged(source_tag?: any | null): boolean;
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
    class ContentProvider extends GObjectClasses.Object {
        static '$gtype': GObject.GType<ContentProvider>;
        // Properties
        /**
         * The possible formats that the provider can provide its data in.
         */
        get formats(): Gdk.ContentFormats;
        /**
         * The subset of formats that clipboard managers should store this provider's data in.
         */
        get storable_formats(): Gdk.ContentFormats;
        /**
         * The subset of formats that clipboard managers should store this provider's data in.
         */
        get storableFormats(): Gdk.ContentFormats;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.ContentProvider.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.ContentProvider.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_for_bytes(mime_type: string, bytes: GLib.Bytes | Uint8Array): Gdk.ContentProvider;
        static new_for_value(value: GObject.Value | any): Gdk.ContentProvider;
        static new_union(providers?: Gdk.ContentProvider[] | null): Gdk.ContentProvider;
        // Signals
        connect<K extends keyof Gdk.ContentProvider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ContentProvider.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.ContentProvider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ContentProvider.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.ContentProvider.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.ContentProvider.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_attach_clipboard(clipboard: Gdk.Clipboard): void;
        /**
         * Emits the ::content-changed signal.
         */
        vfunc_content_changed(): void;
        vfunc_detach_clipboard(clipboard: Gdk.Clipboard): void;
        /**
         * Gets the contents of `provider` stored in `value`.
         *
         * The `value` will have been initialized to the `GType` the value should be
         * provided in. This given `GType` does not need to be listed in the formats
         * returned by [method`Gdk`.ContentProvider.ref_formats]. However, if the
         * given `GType` is not supported, this operation can fail and
         * `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         */
        vfunc_get_value(): [boolean, unknown];
        /**
         * Gets the formats that the provider can provide its current contents in.
         */
        vfunc_ref_formats(): Gdk.ContentFormats;
        /**
         * Gets the formats that the provider suggests other applications to store
         * the data in.
         *
         * An example of such an application would be a clipboard manager.
         *
         * This can be assumed to be a subset of [method`Gdk`.ContentProvider.ref_formats].
         */
        vfunc_ref_storable_formats(): Gdk.ContentFormats;
        /**
         * Asynchronously writes the contents of `provider` to `stream` in the given
         * `mime_type`.
         *
         * The given mime type does not need to be listed in the formats returned by
         * [method`Gdk`.ContentProvider.ref_formats]. However, if the given `GType` is
         * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         *
         * The given `stream` will not be closed.
         *
         * @param mime_type the mime type to provide the data in
         * @param stream the `GOutputStream` to write to
         * @param io_priority I/O priority of the request.
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         * @param callback callback to call when the request is satisfied
         */
        vfunc_write_mime_type_async(
            mime_type: string,
            stream: Gio.OutputStream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous write operation.
         *
         * See [method`Gdk`.ContentProvider.write_mime_type_async].
         *
         * @param result a `GAsyncResult`
         */
        vfunc_write_mime_type_finish(result: Gio.AsyncResult): boolean;
        // Methods
        /**
         * Emits the ::content-changed signal.
         */
        content_changed(): void;
        /**
         * Gets the contents of `provider` stored in `value`.
         *
         * The `value` will have been initialized to the `GType` the value should be
         * provided in. This given `GType` does not need to be listed in the formats
         * returned by [method`Gdk`.ContentProvider.ref_formats]. However, if the
         * given `GType` is not supported, this operation can fail and
         * `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         *
         * @returns %TRUE if the value was set successfully. Otherwise
         *   `error` will be set to describe the failure.
         */
        get_value(): [boolean, unknown];
        /**
         * Gets the formats that the provider can provide its current contents in.
         *
         * @returns The formats of the provider
         */
        ref_formats(): Gdk.ContentFormats;
        /**
         * Gets the formats that the provider suggests other applications to store
         * the data in.
         *
         * An example of such an application would be a clipboard manager.
         *
         * This can be assumed to be a subset of [method`Gdk`.ContentProvider.ref_formats].
         *
         * @returns The storable formats of the provider
         */
        ref_storable_formats(): Gdk.ContentFormats;
        /**
         * Asynchronously writes the contents of `provider` to `stream` in the given
         * `mime_type`.
         *
         * The given mime type does not need to be listed in the formats returned by
         * [method`Gdk`.ContentProvider.ref_formats]. However, if the given `GType` is
         * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         *
         * The given `stream` will not be closed.
         *
         * @param mime_type the mime type to provide the data in
         * @param stream the `GOutputStream` to write to
         * @param io_priority I/O priority of the request.
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         */
        write_mime_type_async(
            mime_type: string,
            stream: Gio.OutputStream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously writes the contents of `provider` to `stream` in the given
         * `mime_type`.
         *
         * The given mime type does not need to be listed in the formats returned by
         * [method`Gdk`.ContentProvider.ref_formats]. However, if the given `GType` is
         * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         *
         * The given `stream` will not be closed.
         *
         * @param mime_type the mime type to provide the data in
         * @param stream the `GOutputStream` to write to
         * @param io_priority I/O priority of the request.
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         * @param callback callback to call when the request is satisfied
         */
        write_mime_type_async(
            mime_type: string,
            stream: Gio.OutputStream,
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously writes the contents of `provider` to `stream` in the given
         * `mime_type`.
         *
         * The given mime type does not need to be listed in the formats returned by
         * [method`Gdk`.ContentProvider.ref_formats]. However, if the given `GType` is
         * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         *
         * The given `stream` will not be closed.
         *
         * @param mime_type the mime type to provide the data in
         * @param stream the `GOutputStream` to write to
         * @param io_priority I/O priority of the request.
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         * @param callback callback to call when the request is satisfied
         */
        write_mime_type_async(
            mime_type: string,
            stream: Gio.OutputStream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an asynchronous write operation.
         *
         * See [method`Gdk`.ContentProvider.write_mime_type_async].
         *
         * @returns %TRUE if the operation was completed successfully. Otherwise
         *   `error` will be set to describe the failure.
         * @param result a `GAsyncResult`
         */
        write_mime_type_finish(result: Gio.AsyncResult): boolean;
    }
    class ContentSerializer extends GObjectClasses.Object implements Gio.AsyncResult {
        static '$gtype': GObject.GType<ContentSerializer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.ContentSerializer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.ContentSerializer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.ContentSerializer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ContentSerializer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.ContentSerializer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.ContentSerializer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.ContentSerializer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.ContentSerializer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the cancellable for the current operation.
         *
         * This is the `GCancellable` that was passed to [func`content_serialize_async]`.
         *
         * @returns the cancellable for the current operation
         */
        get_cancellable(): Gio.Cancellable | null;
        /**
         * Gets the `GType` to of the object to serialize.
         *
         * @returns the `GType` for the current operation
         */
        get_gtype(): GObject.GType;
        /**
         * Gets the mime type to serialize to.
         *
         * @returns the mime type for the current operation
         */
        get_mime_type(): string;
        /**
         * Gets the output stream for the current operation.
         *
         * This is the stream that was passed to [func`content_serialize_async]`.
         *
         * @returns the output stream for the current operation
         */
        get_output_stream(): Gio.OutputStream;
        /**
         * Gets the I/O priority for the current operation.
         *
         * This is the priority that was passed to [func`content_serialize_async]`.
         *
         * @returns the I/O priority for the current operation
         */
        get_priority(): number;
        /**
         * Gets the data that was associated with the current operation.
         *
         * See [method`Gdk`.ContentSerializer.set_task_data].
         *
         * @returns the task data for `serializer`
         */
        get_task_data(): any | null;
        /**
         * Gets the user data that was passed when the serializer was registered.
         *
         * @returns the user data for this serializer
         */
        get_user_data(): any | null;
        /**
         * Gets the `GValue` to read the object to serialize from.
         *
         * @returns the `GValue` for the current operation
         */
        get_value(): unknown;
        /**
         * Indicate that the serialization has ended with an error.
         *
         * This function consumes `error`.
         *
         * @param error a `GError`
         */
        return_error(error: GLib.Error): void;
        /**
         * Indicate that the serialization has been successfully completed.
         */
        return_success(): void;
        /**
         * Associate data with the current serialization operation.
         *
         * @param data data to associate with this operation
         */
        set_task_data(data?: any | null): void;
        // Inherited methods
        /**
         * Gets the source object from a [iface`Gio`.AsyncResult].
         *
         * @returns a new reference to the source
         *    object for the `res,` or `NULL` if there is none.
         */
        get_source_object<T = GObject.Object>(): T;
        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         *
         * @returns `TRUE` if `res` has the indicated `source_tag,` `FALSE` if
         *   not.
         * @param source_tag an application-defined tag
         */
        is_tagged(source_tag?: any | null): boolean;
        /**
         * If `res` is a [class`Gio`.SimpleAsyncResult], this is equivalent to
         * [method`Gio`.SimpleAsyncResult.propagate_error]. Otherwise it returns
         * `FALSE`.
         *
         * This can be used for legacy error handling in async `*_finish()`
         * wrapper functions that traditionally handled [class`Gio`.SimpleAsyncResult]
         * error returns themselves rather than calling into the virtual method.
         * This should not be used in new code; [iface`Gio`.AsyncResult] errors that are
         * set by virtual methods should also be extracted by virtual methods,
         * to enable subclasses to chain up correctly.
         *
         * @returns `TRUE` if `error` is has been filled in with an error from
         *   `res,` `FALSE` if not.
         */
        legacy_propagate_error(): boolean;
        /**
         * Gets the source object from a [iface`Gio`.AsyncResult].
         */
        vfunc_get_source_object<T = GObject.Object>(): T;
        /**
         * Gets the user data from a [iface`Gio`.AsyncResult].
         */
        vfunc_get_user_data(): any | null;
        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         *
         * @param source_tag an application-defined tag
         */
        vfunc_is_tagged(source_tag?: any | null): boolean;
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
    class Cursor extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Cursor>;
        // Properties
        /**
         * Cursor to fall back to if this cursor cannot be displayed.
         */
        get fallback(): Gdk.Cursor;
        /**
         * X position of the cursor hotspot in the cursor image.
         */
        get hotspot_x(): number;
        /**
         * X position of the cursor hotspot in the cursor image.
         */
        get hotspotX(): number;
        /**
         * Y position of the cursor hotspot in the cursor image.
         */
        get hotspot_y(): number;
        /**
         * Y position of the cursor hotspot in the cursor image.
         */
        get hotspotY(): number;
        /**
         * Name of this this cursor.
         *
         * The name will be %NULL if the cursor was created from a texture.
         */
        get name(): string;
        /**
         * The texture displayed by this cursor.
         *
         * The texture will be %NULL if the cursor was created from a name.
         */
        get texture(): Gdk.Texture;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Cursor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Cursor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_callback(callback: Gdk.CursorGetTextureCallback, fallback?: Gdk.Cursor | null): Gdk.Cursor;
        static new_from_name(name: string, fallback?: Gdk.Cursor | null): Gdk.Cursor;
        static new_from_texture(
            texture: Gdk.Texture,
            hotspot_x: number,
            hotspot_y: number,
            fallback?: Gdk.Cursor | null,
        ): Gdk.Cursor;
        // Signals
        connect<K extends keyof Gdk.Cursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Cursor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Cursor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Cursor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Cursor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Cursor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the fallback for this `cursor`.
         *
         * The fallback will be used if this cursor is not available on a given
         * `GdkDisplay`. For named cursors, this can happen when using nonstandard
         * names or when using an incomplete cursor theme. For textured cursors,
         * this can happen when the texture is too large or when the `GdkDisplay`
         * it is used on does not support textured cursors.
         *
         * @returns the fallback of the cursor or %NULL
         *   to use the default cursor as fallback
         */
        get_fallback(): Gdk.Cursor | null;
        /**
         * Returns the horizontal offset of the hotspot.
         *
         * The hotspot indicates the pixel that will be directly above the cursor.
         *
         * Note that named cursors may have a nonzero hotspot, but this function
         * will only return the hotspot position for cursors created with
         * [ctor`Gdk`.Cursor.new_from_texture].
         *
         * @returns the horizontal offset of the hotspot or 0 for named cursors
         */
        get_hotspot_x(): number;
        /**
         * Returns the vertical offset of the hotspot.
         *
         * The hotspot indicates the pixel that will be directly above the cursor.
         *
         * Note that named cursors may have a nonzero hotspot, but this function
         * will only return the hotspot position for cursors created with
         * [ctor`Gdk`.Cursor.new_from_texture].
         *
         * @returns the vertical offset of the hotspot or 0 for named cursors
         */
        get_hotspot_y(): number;
        /**
         * Returns the name of the cursor.
         *
         * If the cursor is not a named cursor, %NULL will be returned.
         *
         * @returns the name of the cursor or %NULL
         *   if it is not a named cursor
         */
        get_name(): string | null;
        /**
         * Returns the texture for the cursor.
         *
         * If the cursor is a named cursor, %NULL will be returned.
         *
         * @returns the texture for cursor or %NULL
         *   if it is a named cursor
         */
        get_texture(): Gdk.Texture | null;
    }
    abstract class Device extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Device>;
        // Properties
        /**
         * The index of the keyboard active layout of a `GdkDevice`.
         *
         * Will be -1 if there is no valid active layout.
         *
         * This is only relevant for keyboard devices.
         */
        get active_layout_index(): number;
        /**
         * The index of the keyboard active layout of a `GdkDevice`.
         *
         * Will be -1 if there is no valid active layout.
         *
         * This is only relevant for keyboard devices.
         */
        get activeLayoutIndex(): number;
        /**
         * Whether Caps Lock is on.
         *
         * This is only relevant for keyboard devices.
         */
        get caps_lock_state(): boolean;
        /**
         * Whether Caps Lock is on.
         *
         * This is only relevant for keyboard devices.
         */
        get capsLockState(): boolean;
        /**
         * The direction of the current layout.
         *
         * This is only relevant for keyboard devices.
         */
        get direction(): Pango.Direction;
        /**
         * The `GdkDisplay` the `GdkDevice` pertains to.
         */
        get display(): Gdk.Display;
        /**
         * Whether the device has both right-to-left and left-to-right layouts.
         *
         * This is only relevant for keyboard devices.
         */
        get has_bidi_layouts(): boolean;
        /**
         * Whether the device has both right-to-left and left-to-right layouts.
         *
         * This is only relevant for keyboard devices.
         */
        get hasBidiLayouts(): boolean;
        /**
         * Whether the device is represented by a cursor on the screen.
         */
        get has_cursor(): boolean;
        /**
         * Whether the device is represented by a cursor on the screen.
         */
        get hasCursor(): boolean;
        /**
         * The names of the keyboard layouts of a `GdkDevice`.
         *
         * This is only relevant for keyboard devices.
         */
        get layout_names(): string[];
        /**
         * The names of the keyboard layouts of a `GdkDevice`.
         *
         * This is only relevant for keyboard devices.
         */
        get layoutNames(): string[];
        /**
         * The current modifier state of the device.
         *
         * This is only relevant for keyboard devices.
         */
        get modifier_state(): Gdk.ModifierType;
        /**
         * The current modifier state of the device.
         *
         * This is only relevant for keyboard devices.
         */
        get modifierState(): Gdk.ModifierType;
        /**
         * Number of axes in the device.
         */
        get n_axes(): number;
        /**
         * Number of axes in the device.
         */
        get nAxes(): number;
        /**
         * The device name.
         */
        get name(): string;
        /**
         * Whether Num Lock is on.
         *
         * This is only relevant for keyboard devices.
         */
        get num_lock_state(): boolean;
        /**
         * Whether Num Lock is on.
         *
         * This is only relevant for keyboard devices.
         */
        get numLockState(): boolean;
        /**
         * The maximal number of concurrent touches on a touch device.
         *
         * Will be 0 if the device is not a touch device or if the number
         * of touches is unknown.
         */
        get num_touches(): number;
        /**
         * The maximal number of concurrent touches on a touch device.
         *
         * Will be 0 if the device is not a touch device or if the number
         * of touches is unknown.
         */
        get numTouches(): number;
        /**
         * Product ID of this device.
         *
         * See [method`Gdk`.Device.get_product_id].
         */
        get product_id(): string;
        /**
         * Product ID of this device.
         *
         * See [method`Gdk`.Device.get_product_id].
         */
        get productId(): string;
        /**
         * Whether Scroll Lock is on.
         *
         * This is only relevant for keyboard devices.
         */
        get scroll_lock_state(): boolean;
        /**
         * Whether Scroll Lock is on.
         *
         * This is only relevant for keyboard devices.
         */
        get scrollLockState(): boolean;
        /**
         * `GdkSeat` of this device.
         */
        get seat(): Gdk.Seat;
        set seat(val: Gdk.Seat);
        /**
         * Source type for the device.
         */
        get source(): Gdk.InputSource;
        /**
         * The `GdkDeviceTool` that is currently used with this device.
         */
        get tool(): Gdk.DeviceTool;
        /**
         * Vendor ID of this device.
         *
         * See [method`Gdk`.Device.get_vendor_id].
         */
        get vendor_id(): string;
        /**
         * Vendor ID of this device.
         *
         * See [method`Gdk`.Device.get_vendor_id].
         */
        get vendorId(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Device.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Device.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Device.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Device.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Device.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Device.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Device.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the index of the active layout of the keyboard.
         *
         * If there is no valid active layout for the `GdkDevice`, this function will
         * return -1;
         *
         * This is only relevant for keyboard devices.
         *
         * @returns The layout index of the active layout or -1.
         */
        get_active_layout_index(): number;
        /**
         * Retrieves whether the Caps Lock modifier of the keyboard is locked.
         *
         * This is only relevant for keyboard devices.
         *
         * @returns %TRUE if Caps Lock is on for `device`
         */
        get_caps_lock_state(): boolean;
        /**
         * Retrieves the current tool for `device`.
         *
         * @returns the `GdkDeviceTool`
         */
        get_device_tool(): Gdk.DeviceTool | null;
        /**
         * Returns the direction of effective layout of the keyboard.
         *
         * This is only relevant for keyboard devices.
         *
         * The direction of a layout is the direction of the majority
         * of its symbols. See [func`Pango`.unichar_direction].
         *
         * @returns %PANGO_DIRECTION_LTR or %PANGO_DIRECTION_RTL
         *   if it can determine the direction. %PANGO_DIRECTION_NEUTRAL
         *   otherwise
         */
        get_direction(): Pango.Direction;
        /**
         * Returns the `GdkDisplay` to which `device` pertains.
         *
         * @returns a `GdkDisplay`
         */
        get_display(): Gdk.Display;
        /**
         * Determines whether the pointer follows device motion.
         *
         * This is not meaningful for keyboard devices, which
         * don't have a pointer.
         *
         * @returns %TRUE if the pointer follows device motion
         */
        get_has_cursor(): boolean;
        /**
         * Retrieves the names of the layouts of the keyboard.
         *
         * This is only relevant for keyboard devices.
         *
         * @returns %NULL-terminated array of strings of layouts,
         */
        get_layout_names(): string[] | null;
        /**
         * Retrieves the current modifier state of the keyboard.
         *
         * This is only relevant for keyboard devices.
         *
         * @returns the current modifier state
         */
        get_modifier_state(): Gdk.ModifierType;
        /**
         * The name of the device, suitable for showing in a user interface.
         *
         * @returns a name
         */
        get_name(): string;
        /**
         * Retrieves whether the Num Lock modifier of the keyboard is locked.
         *
         * This is only relevant for keyboard devices.
         *
         * @returns %TRUE if Num Lock is on for `device`
         */
        get_num_lock_state(): boolean;
        /**
         * Retrieves the number of touch points associated to `device`.
         *
         * @returns the number of touch points
         */
        get_num_touches(): number;
        /**
         * Returns the product ID of this device.
         *
         * This ID is retrieved from the device, and does not change.
         * See [method`Gdk`.Device.get_vendor_id] for more information.
         *
         * @returns the product ID
         */
        get_product_id(): string | null;
        /**
         * Retrieves whether the Scroll Lock modifier of the keyboard is locked.
         *
         * This is only relevant for keyboard devices.
         *
         * @returns %TRUE if Scroll Lock is on for `device`
         */
        get_scroll_lock_state(): boolean;
        /**
         * Returns the `GdkSeat` the device belongs to.
         *
         * @returns a `GdkSeat`
         */
        get_seat(): Gdk.Seat;
        /**
         * Determines the type of the device.
         *
         * @returns a `GdkInputSource`
         */
        get_source(): Gdk.InputSource;
        /**
         * Obtains the surface underneath `device,` returning the location of the
         * device in `win_x` and `win_y`.
         *
         * Returns %NULL if the surface tree under `device` is not known to GDK
         * (for example, belongs to another application).
         *
         * @returns the `GdkSurface` under the
         *   device position
         */
        get_surface_at_position(): [Gdk.Surface | null, number, number];
        /**
         * Returns the timestamp of the last activity for this device.
         *
         * In practice, this means the timestamp of the last event that was
         * received from the OS for this device. (GTK may occasionally produce
         * events for a device that are not received from the OS, and will not
         * update the timestamp).
         *
         * @returns the timestamp of the last activity for this device
         */
        get_timestamp(): number;
        /**
         * Returns the vendor ID of this device.
         *
         * This ID is retrieved from the device, and does not change.
         *
         * This function, together with [method`Gdk`.Device.get_product_id],
         * can be used to eg. compose `GSettings` paths to store settings
         * for this device.
         *
         * ```c
         *  static GSettings *
         *  get_device_settings (GdkDevice *device)
         *  {
         *    const char *vendor, *product;
         *    GSettings *settings;
         *    GdkDevice *device;
         *    char *path;
         *
         *    vendor = gdk_device_get_vendor_id (device);
         *    product = gdk_device_get_product_id (device);
         *
         *    path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
         *    settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
         *    g_free (path);
         *
         *    return settings;
         *  }
         * ```
         *
         * @returns the vendor ID
         */
        get_vendor_id(): string | null;
    }
    class DeviceTool extends GObjectClasses.Object {
        static '$gtype': GObject.GType<DeviceTool>;
        // Properties
        /**
         * The axes of the tool.
         */
        get axes(): Gdk.AxisFlags;
        /**
         * The hardware ID of the tool.
         */
        get hardware_id(): number;
        /**
         * The hardware ID of the tool.
         */
        get hardwareId(): number;
        /**
         * The serial number of the tool.
         */
        get serial(): number;
        /**
         * The type of the tool.
         */
        get tool_type(): Gdk.DeviceToolType;
        /**
         * The type of the tool.
         */
        get toolType(): Gdk.DeviceToolType;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.DeviceTool.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.DeviceTool.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.DeviceTool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DeviceTool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.DeviceTool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DeviceTool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.DeviceTool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.DeviceTool.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the axes of the tool.
         *
         * @returns the axes of `tool`
         */
        get_axes(): Gdk.AxisFlags;
        /**
         * Gets the hardware ID of this tool, or 0 if it's not known.
         *
         * When non-zero, the identifier is unique for the given tool model,
         * meaning that two identical tools will share the same `hardware_id,`
         * but will have different serial numbers (see
         * [method`Gdk`.DeviceTool.get_serial]).
         *
         * This is a more concrete (and device specific) method to identify
         * a `GdkDeviceTool` than [method`Gdk`.DeviceTool.get_tool_type],
         * as a tablet may support multiple devices with the same
         * `GdkDeviceToolType`, but different hardware identifiers.
         *
         * @returns The hardware identifier of this tool.
         */
        get_hardware_id(): number;
        /**
         * Gets the serial number of this tool.
         *
         * This value can be used to identify a physical tool
         * (eg. a tablet pen) across program executions.
         *
         * @returns The serial ID for this tool
         */
        get_serial(): number;
        /**
         * Gets the `GdkDeviceToolType` of the tool.
         *
         * @returns The physical type for this tool. This can be used to
         *   figure out what sort of pen is being used, such as an airbrush
         *   or a pencil.
         */
        get_tool_type(): Gdk.DeviceToolType;
    }
    class Display extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Display>;
        // Properties
        /**
         * %TRUE if the display properly composites the alpha channel.
         */
        get composited(): boolean;
        /**
         * The dma-buf formats that are supported on this display
         */
        get dmabuf_formats(): Gdk.DmabufFormats;
        /**
         * The dma-buf formats that are supported on this display
         */
        get dmabufFormats(): Gdk.DmabufFormats;
        /**
         * %TRUE if the display supports input shapes.
         */
        get input_shapes(): boolean;
        /**
         * %TRUE if the display supports input shapes.
         */
        get inputShapes(): boolean;
        /**
         * %TRUE if the display supports an alpha channel.
         */
        get rgba(): boolean;
        /**
         * %TRUE if the display supports extensible frames.
         */
        get shadow_width(): boolean;
        /**
         * %TRUE if the display supports extensible frames.
         */
        get shadowWidth(): boolean;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Display.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Display.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Display.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Gets the default `GdkDisplay`.
         *
         * This is a convenience function for:
         *
         *     gdk_display_manager_get_default_display (gdk_display_manager_get ())
         */
        static get_default(): Gdk.Display | null;
        /**
         * Opens a display.
         *
         * If opening the display fails, `NULL` is returned.
         *
         * @param display_name the name of the display to open
         */
        static open(display_name?: string | null): Gdk.Display | null;
        // Methods
        /**
         * Emits a short beep on `display`
         */
        beep(): void;
        /**
         * Closes the connection to the windowing system for the given display.
         *
         * This cleans up associated resources.
         */
        close(): void;
        /**
         * Creates a new `GdkGLContext` for the `GdkDisplay`.
         *
         * The context is disconnected from any particular surface or surface
         * and cannot be used to draw to any surface. It can only be used to
         * draw to non-surface framebuffers like textures.
         *
         * If the creation of the `GdkGLContext` failed, `error` will be set.
         * Before using the returned `GdkGLContext`, you will need to
         * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
         *
         * @returns the newly created `GdkGLContext`
         */
        create_gl_context(): Gdk.GLContext;
        /**
         * Returns %TRUE if there is an ongoing grab on `device` for `display`.
         *
         * @returns %TRUE if there is a grab in effect for `device`.
         * @param device a `GdkDevice`
         */
        device_is_grabbed(device: Gdk.Device): boolean;
        /**
         * Flushes any requests queued for the windowing system.
         *
         * This happens automatically when the main loop blocks waiting for new events,
         * but if your application is drawing without returning control to the main loop,
         * you may need to call this function explicitly. A common case where this function
         * needs to be called is when an application is executing drawing commands
         * from a thread other than the thread where the main loop is running.
         *
         * This is most useful for X11. On windowing systems where requests are
         * handled synchronously, this function will do nothing.
         */
        flush(): void;
        /**
         * Returns a `GdkAppLaunchContext` suitable for launching
         * applications on the given display.
         *
         * @returns a new `GdkAppLaunchContext` for `display`
         */
        get_app_launch_context(): Gdk.AppLaunchContext;
        /**
         * Gets the clipboard used for copy/paste operations.
         *
         * @returns the display's clipboard
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Returns the default `GdkSeat` for this display.
         *
         * Note that a display may not have a seat. In this case,
         * this function will return %NULL.
         *
         * @returns the default seat.
         */
        get_default_seat(): Gdk.Seat | null;
        /**
         * Returns the dma-buf formats that are supported on this display.
         *
         * GTK may use OpenGL or Vulkan to support some formats.
         * Calling this function will then initialize them if they aren't yet.
         *
         * The formats returned by this function can be used for negotiating
         * buffer formats with producers such as v4l, pipewire or GStreamer.
         *
         * To learn more about dma-bufs, see [class`Gdk`.DmabufTextureBuilder].
         *
         * @returns a `GdkDmabufFormats` object
         */
        get_dmabuf_formats(): Gdk.DmabufFormats;
        /**
         * Gets the monitor in which the largest area of `surface`
         * resides.
         *
         * @returns the monitor with the largest
         *   overlap with `surface`
         * @param surface a `GdkSurface`
         */
        get_monitor_at_surface(surface: Gdk.Surface): Gdk.Monitor | null;
        /**
         * Gets the list of monitors associated with this display.
         *
         * Subsequent calls to this function will always return the
         * same list for the same display.
         *
         * You can listen to the GListModel::items-changed signal on
         * this list to monitor changes to the monitor of this display.
         *
         * @returns a `GListModel` of `GdkMonitor`
         */
        get_monitors(): Gio.ListModel;
        /**
         * Gets the name of the display.
         *
         * @returns a string representing the display name. This string is owned
         *   by GDK and should not be modified or freed.
         */
        get_name(): string;
        /**
         * Gets the clipboard used for the primary selection.
         *
         * On backends where the primary clipboard is not supported natively,
         * GDK emulates this clipboard locally.
         *
         * @returns the primary clipboard
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Retrieves a desktop-wide setting such as double-click time
         * for the `display`.
         *
         * @returns %TRUE if the setting existed and a value was stored
         *   in `value,` %FALSE otherwise
         * @param name the name of the setting
         * @param value location to store the value of the setting
         */
        get_setting(name: string, value: GObject.Value | any): boolean;
        /**
         * Gets the startup notification ID for a Wayland display, or %NULL
         * if no ID has been defined.
         *
         * @returns the startup notification ID for `display`
         */
        get_startup_notification_id(): string | null;
        /**
         * Finds out if the display has been closed.
         *
         * @returns %TRUE if the display is closed.
         */
        is_closed(): boolean;
        /**
         * Returns whether surfaces can reasonably be expected to have
         * their alpha channel drawn correctly on the screen.
         *
         * Check [method`Gdk`.Display.is_rgba] for whether the display
         * supports an alpha channel.
         *
         * On X11 this function returns whether a compositing manager is
         * compositing on `display`.
         *
         * On modern displays, this value is always %TRUE.
         *
         * @returns Whether surfaces with RGBA visuals can reasonably
         *   be expected to have their alpha channels drawn correctly
         *   on the screen.
         */
        is_composited(): boolean;
        /**
         * Returns whether surfaces on this `display` are created with an
         * alpha channel.
         *
         * Even if a %TRUE is returned, it is possible that the
         * surface’s alpha channel won’t be honored when displaying the
         * surface on the screen: in particular, for X an appropriate
         * windowing manager and compositing manager must be running to
         * provide appropriate display. Use [method`Gdk`.Display.is_composited]
         * to check if that is the case.
         *
         * On modern displays, this value is always %TRUE.
         *
         * @returns %TRUE if surfaces are created with an alpha channel or
         *   %FALSE if the display does not support this functionality.
         */
        is_rgba(): boolean;
        /**
         * Returns the list of seats known to `display`.
         *
         * @returns the
         *   list of seats known to the `GdkDisplay`
         */
        list_seats(): Gdk.Seat[];
        /**
         * Returns the keyvals bound to `keycode`.
         *
         * The Nth `GdkKeymapKey` in `keys` is bound to the Nth keyval in `keyvals`.
         *
         * When a keycode is pressed by the user, the keyval from
         * this list of entries is selected by considering the effective
         * keyboard group and level.
         *
         * Free the returned arrays with g_free().
         *
         * @returns %TRUE if there were any entries
         * @param keycode a keycode
         */
        map_keycode(keycode: number): [boolean, Gdk.KeymapKey[] | null, number[] | null];
        /**
         * Obtains a list of keycode/group/level combinations that will
         * generate `keyval`.
         *
         * Groups and levels are two kinds of keyboard mode; in general, the level
         * determines whether the top or bottom symbol on a key is used, and the
         * group determines whether the left or right symbol is used.
         *
         * On US keyboards, the shift key changes the keyboard level, and there
         * are no groups. A group switch key might convert a keyboard between
         * Hebrew to English modes, for example.
         *
         * `GdkEventKey` contains a %group field that indicates the active
         * keyboard group. The level is computed from the modifier mask.
         *
         * The returned array should be freed with g_free().
         *
         * @returns %TRUE if keys were found and returned
         * @param keyval a keyval, such as %GDK_KEY_a, %GDK_KEY_Up, %GDK_KEY_Return, etc.
         */
        map_keyval(keyval: number): [boolean, Gdk.KeymapKey[]];
        /**
         * Indicates to the GUI environment that the application has
         * finished loading, using a given identifier.
         *
         * GTK will call this function automatically for [GtkWindow](../gtk4/class.Window.html)
         * with custom startup-notification identifier unless
         * [gtk_window_set_auto_startup_notification()](../gtk4/method.Window.set_auto_startup_notification.html)
         * is called to disable that feature.
         *
         * @param startup_id a startup-notification identifier, for which
         *   notification process should be completed
         */
        notify_startup_complete(startup_id: string): void;
        /**
         * Checks that OpenGL is available for `self` and ensures that it is
         * properly initialized.
         * When this fails, an `error` will be set describing the error and this
         * function returns %FALSE.
         *
         * Note that even if this function succeeds, creating a `GdkGLContext`
         * may still fail.
         *
         * This function is idempotent. Calling it multiple times will just
         * return the same value or error.
         *
         * You never need to call this function, GDK will call it automatically
         * as needed. But you can use it as a check when setting up code that
         * might make use of OpenGL.
         *
         * @returns %TRUE if the display supports OpenGL
         */
        prepare_gl(): boolean;
        /**
         * Adds the given event to the event queue for `display`.
         *
         * @param event a `GdkEvent`
         */
        put_event(event: Gdk.Event): void;
        /**
         * Returns %TRUE if the display supports input shapes.
         *
         * This means that [method`Gdk`.Surface.set_input_region] can
         * be used to modify the input shape of surfaces on `display`.
         *
         * On modern displays, this value is always %TRUE.
         *
         * @returns %TRUE if surfaces with modified input shape are supported
         */
        supports_input_shapes(): boolean;
        /**
         * Returns whether it's possible for a surface to draw outside of the window area.
         *
         * If %TRUE is returned the application decides if it wants to draw shadows.
         * If %FALSE is returned, the compositor decides if it wants to draw shadows.
         *
         * @returns %TRUE if surfaces can draw shadows or
         *   %FALSE if the display does not support this functionality.
         */
        supports_shadow_width(): boolean;
        /**
         * Flushes any requests queued for the windowing system and waits until all
         * requests have been handled.
         *
         * This is often used for making sure that the display is synchronized
         * with the current state of the program. Calling [method`Gdk`.Display.sync]
         * before [method`GdkX1`1.Display.error_trap_pop] makes sure that any errors
         * generated from earlier requests are handled before the error trap is removed.
         *
         * This is most useful for X11. On windowing systems where requests are
         * handled synchronously, this function will do nothing.
         */
        sync(): void;
        /**
         * Translates the contents of a `GdkEventKey` into a keyval, effective group,
         * and level.
         *
         * Modifiers that affected the translation and are thus unavailable for
         * application use are returned in `consumed_modifiers`.
         *
         * The `effective_group` is the group that was actually used for the
         * translation; some keys such as Enter are not affected by the active
         * keyboard group. The `level` is derived from `state`.
         *
         * `consumed_modifiers` gives modifiers that should be masked out
         * from `state` when comparing this key press to a keyboard shortcut.
         * For instance, on a US keyboard, the `plus` symbol is shifted, so
         * when comparing a key press to a `<Control>plus` accelerator `<Shift>`
         * should be masked out.
         *
         * This function should rarely be needed, since `GdkEventKey` already
         * contains the translated keyval. It is exported for the benefit of
         * virtualized test environments.
         *
         * @returns %TRUE if there was a keyval bound to keycode/state/group.
         * @param keycode a keycode
         * @param state a modifier state
         * @param group active keyboard group
         */
        translate_key(
            keycode: number,
            state: Gdk.ModifierType | null,
            group: number,
        ): [boolean, number, number, number, Gdk.ModifierType | null];
    }
    class DisplayManager extends GObjectClasses.Object {
        static '$gtype': GObject.GType<DisplayManager>;
        // Properties
        /**
         * The default display.
         */
        get default_display(): Gdk.Display;
        set default_display(val: Gdk.Display);
        /**
         * The default display.
         */
        get defaultDisplay(): Gdk.Display;
        set defaultDisplay(val: Gdk.Display);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.DisplayManager.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.DisplayManager.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.DisplayManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DisplayManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.DisplayManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DisplayManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.DisplayManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.DisplayManager.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Gets the singleton `GdkDisplayManager` object.
         *
         * When called for the first time, this function consults the
         * `GDK_BACKEND` environment variable to find out which of the
         * supported GDK backends to use (in case GDK has been compiled
         * with multiple backends).
         *
         * Applications can use [func`set_allowed_backends]` to limit what
         * backends will be used.
         */
        static get(): Gdk.DisplayManager;
        // Methods
        /**
         * Gets the default `GdkDisplay`.
         *
         * @returns a `GdkDisplay`
         */
        get_default_display(): Gdk.Display | null;
        /**
         * List all currently open displays.
         *
         * @returns a newly
         *   allocated `GSList` of `GdkDisplay` objects
         */
        list_displays(): Gdk.Display[];
        /**
         * Opens a display.
         *
         * @returns a `GdkDisplay`, or %NULL
         *   if the display could not be opened
         * @param name the name of the display to open
         */
        open_display(name?: string | null): Gdk.Display | null;
        /**
         * Sets `display` as the default display.
         *
         * @param display a `GdkDisplay`
         */
        set_default_display(display: Gdk.Display): void;
    }
    class DmabufTexture extends Texture implements Gdk.Paintable, Gio.Icon, Gio.LoadableIcon {
        static '$gtype': GObject.GType<DmabufTexture>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.DmabufTexture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.DmabufTexture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.DmabufTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DmabufTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.DmabufTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DmabufTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.DmabufTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.DmabufTexture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Inherited methods
        /**
         * Compute a concrete size for the `GdkPaintable`.
         *
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         *
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         *
         * @param specified_width the width `paintable` could be drawn into or
         *   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or
         *   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if
         *   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if
         *   no other constraints were given
         */
        compute_concrete_size(
            specified_width: number,
            specified_height: number,
            default_width: number,
            default_height: number,
        ): [number, number];
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         *
         * @returns An immutable paintable for the current
         *   contents of `paintable`
         */
        get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
         *
         * @returns The `GdkPaintableFlags` for this paintable
         */
        get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * Usually when a `paintable` returns nonzero values from
         * [method`Gdk`.Paintable.get_intrinsic_width] and
         * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         *
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their contents.
         *
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
         * it must not call this function.
         */
        invalidate_contents(): void;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their size.
         *
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
         * it must not call this function.
         */
        invalidate_size(): void;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         *
         * @param snapshot a `GdkSnapshot` to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         */
        vfunc_get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
         */
        vfunc_get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * Usually when a `paintable` returns nonzero values from
         * [method`Gdk`.Paintable.get_intrinsic_width] and
         * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         */
        vfunc_get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         */
        vfunc_get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         */
        vfunc_get_intrinsic_width(): number;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         *
         * @param snapshot a `GdkSnapshot` to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Checks if two icons are equal.
         *
         * @returns %TRUE if `icon1` is equal to `icon2`. %FALSE otherwise.
         * @param _icon2 pointer to the second #GIcon.
         */
        equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         *
         * @returns a #guint containing a hash for the `icon,` suitable for
         *   use in a #GHashTable or similar data structure.
         */
        hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         *
         * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
         */
        serialize(): GLib.Variant | null;
        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use g_icon_new_for_string() to
         * get `icon` back from the returned string.
         *
         * The encoding of the returned string is proprietary to #GIcon except
         * in the following two cases
         *
         * - If `icon` is a #GFileIcon, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the #GFile for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of g_file_get_uri()
         *   (such as `sftp://path/to/my%20icon.png`).
         *
         * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         *
         * @returns An allocated NUL-terminated UTF8 string or
         * %NULL if `icon` can't be serialized. Use g_free() to free.
         */
        to_string(): string | null;
        /**
         * Checks if two icons are equal.
         *
         * @param _icon2 pointer to the second #GIcon.
         */
        vfunc_equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         */
        vfunc_hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         */
        vfunc_serialize(): GLib.Variant | null;
        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when g_icon_new_for_string() is called.
         */
        vfunc_to_tokens(): [boolean, string[], number];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        load_async(size: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream, string]> | void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param res a #GAsyncResult.
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        vfunc_load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @param res a #GAsyncResult.
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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
    class DmabufTextureBuilder extends GObjectClasses.Object {
        static '$gtype': GObject.GType<DmabufTextureBuilder>;
        // Properties
        /**
         * The color state of the texture.
         */
        get color_state(): Gdk.ColorState;
        set color_state(val: Gdk.ColorState);
        /**
         * The color state of the texture.
         */
        get colorState(): Gdk.ColorState;
        set colorState(val: Gdk.ColorState);
        /**
         * The display that this texture will be used on.
         */
        get display(): Gdk.Display;
        set display(val: Gdk.Display);
        /**
         * The format of the texture, as a fourcc value.
         */
        get fourcc(): number;
        set fourcc(val: number);
        /**
         * The height of the texture.
         */
        get height(): number;
        set height(val: number);
        /**
         * The modifier.
         */
        get modifier(): number;
        set modifier(val: number);
        /**
         * The number of planes of the texture.
         *
         * Note that you can set properties for other planes,
         * but they will be ignored when constructing the texture.
         */
        get n_planes(): number;
        set n_planes(val: number);
        /**
         * The number of planes of the texture.
         *
         * Note that you can set properties for other planes,
         * but they will be ignored when constructing the texture.
         */
        get nPlanes(): number;
        set nPlanes(val: number);
        /**
         * Whether the alpha channel is premultiplied into the others.
         *
         * Only relevant if the format has alpha.
         */
        get premultiplied(): boolean;
        set premultiplied(val: boolean);
        /**
         * The update region for [property`Gdk`.DmabufTextureBuilder:update-texture].
         */
        get update_region(): cairo.Region;
        set update_region(val: cairo.Region);
        /**
         * The update region for [property`Gdk`.DmabufTextureBuilder:update-texture].
         */
        get updateRegion(): cairo.Region;
        set updateRegion(val: cairo.Region);
        /**
         * The texture [property`Gdk`.DmabufTextureBuilder:update-region] is an update for.
         */
        get update_texture(): Gdk.Texture;
        set update_texture(val: Gdk.Texture);
        /**
         * The texture [property`Gdk`.DmabufTextureBuilder:update-region] is an update for.
         */
        get updateTexture(): Gdk.Texture;
        set updateTexture(val: Gdk.Texture);
        /**
         * The width of the texture.
         */
        get width(): number;
        set width(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.DmabufTextureBuilder.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.DmabufTextureBuilder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gdk.DmabufTextureBuilder;
        // Signals
        connect<K extends keyof Gdk.DmabufTextureBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DmabufTextureBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.DmabufTextureBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DmabufTextureBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.DmabufTextureBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.DmabufTextureBuilder.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Builds a new `GdkTexture` with the values set up in the builder.
         *
         * It is a programming error to call this function if any mandatory property has not been set.
         *
         * Not all formats defined in the `drm_fourcc.h` header are supported. You can use
         * [method`Gdk`.Display.get_dmabuf_formats] to get a list of supported formats. If the
         * format is not supported by GTK, %NULL will be returned and `error` will be set.
         *
         * The `destroy` function gets called when the returned texture gets released.
         *
         * It is the responsibility of the caller to keep the file descriptors for the planes
         * open until the created texture is no longer used, and close them afterwards (possibly
         * using the `destroy` notify).
         *
         * It is possible to call this function multiple times to create multiple textures,
         * possibly with changing properties in between.
         *
         * @returns a newly built `GdkTexture` or `NULL`
         *   if the format is not supported
         * @param destroy destroy function to be called when the texture is
         *   released
         * @param data user data to pass to the destroy function
         */
        build(destroy?: GLib.DestroyNotify | null, data?: any | null): Gdk.Texture | null;
        /**
         * Gets the color state previously set via gdk_dmabuf_texture_builder_set_color_state().
         *
         * @returns the color state
         */
        get_color_state(): Gdk.ColorState | null;
        /**
         * Returns the display that this texture builder is
         * associated with.
         *
         * @returns the display
         */
        get_display(): Gdk.Display;
        /**
         * Gets the file descriptor for a plane.
         *
         * @returns the file descriptor
         * @param plane the plane to get the fd for
         */
        get_fd(plane: number): number;
        /**
         * Gets the format previously set via gdk_dmabuf_texture_builder_set_fourcc()
         * or 0 if the format wasn't set.
         *
         * The format is specified as a fourcc code.
         *
         * @returns The format
         */
        get_fourcc(): number;
        /**
         * Gets the height previously set via gdk_dmabuf_texture_builder_set_height() or
         * 0 if the height wasn't set.
         *
         * @returns The height
         */
        get_height(): number;
        /**
         * Gets the modifier value.
         *
         * @returns the modifier
         */
        get_modifier(): number;
        /**
         * Gets the number of planes.
         *
         * @returns The number of planes
         */
        get_n_planes(): number;
        /**
         * Gets the offset value for a plane.
         *
         * @returns the offset
         * @param plane the plane to get the offset for
         */
        get_offset(plane: number): number;
        /**
         * Whether the data is premultiplied.
         *
         * @returns whether the data is premultiplied
         */
        get_premultiplied(): boolean;
        /**
         * Gets the stride value for a plane.
         *
         * @returns the stride
         * @param plane the plane to get the stride for
         */
        get_stride(plane: number): number;
        /**
         * Gets the region previously set via gdk_dmabuf_texture_builder_set_update_region() or
         * %NULL if none was set.
         *
         * @returns The region
         */
        get_update_region(): cairo.Region | null;
        /**
         * Gets the texture previously set via gdk_dmabuf_texture_builder_set_update_texture() or
         * %NULL if none was set.
         *
         * @returns The texture
         */
        get_update_texture(): Gdk.Texture | null;
        /**
         * Gets the width previously set via gdk_dmabuf_texture_builder_set_width() or
         * 0 if the width wasn't set.
         *
         * @returns The width
         */
        get_width(): number;
        /**
         * Sets the color state for the texture.
         *
         * By default, the colorstate is `NULL`. In that case, GTK will choose the
         * correct colorstate based on the format.
         * If you don't know what colorstates are, this is probably the right thing.
         *
         * @param color_state a `GdkColorState` or `NULL` to unset the colorstate.
         */
        set_color_state(color_state?: Gdk.ColorState | null): void;
        /**
         * Sets the display that this texture builder is
         * associated with.
         *
         * The display is used to determine the supported
         * dma-buf formats.
         *
         * @param display the display
         */
        set_display(display: Gdk.Display): void;
        /**
         * Sets the file descriptor for a plane.
         *
         * @param plane the plane to set the fd for
         * @param fd the file descriptor
         */
        set_fd(plane: number, fd: number): void;
        /**
         * Sets the format of the texture.
         *
         * The format is specified as a fourcc code.
         *
         * The format must be set before calling [method`Gdk`.DmabufTextureBuilder.build].
         *
         * @param fourcc the texture's format or 0 to unset
         */
        set_fourcc(fourcc: number): void;
        /**
         * Sets the height of the texture.
         *
         * The height must be set before calling [method`Gdk`.DmabufTextureBuilder.build].
         *
         * @param height the texture's height or 0 to unset
         */
        set_height(height: number): void;
        /**
         * Sets the modifier.
         *
         * @param modifier the modifier value
         */
        set_modifier(modifier: number): void;
        /**
         * Sets the number of planes of the texture.
         *
         * @param n_planes the number of planes
         */
        set_n_planes(n_planes: number): void;
        /**
         * Sets the offset for a plane.
         *
         * @param plane the plane to set the offset for
         * @param offset the offset value
         */
        set_offset(plane: number, offset: number): void;
        /**
         * Sets whether the data is premultiplied.
         *
         * Unless otherwise specified, all formats including alpha channels are assumed
         * to be premultiplied.
         *
         * @param premultiplied whether the data is premultiplied
         */
        set_premultiplied(premultiplied: boolean): void;
        /**
         * Sets the stride for a plane.
         *
         * The stride must be set for all planes before calling [method`Gdk`.DmabufTextureBuilder.build].
         *
         * @param plane the plane to set the stride for
         * @param stride the stride value
         */
        set_stride(plane: number, stride: number): void;
        /**
         * Sets the region to be updated by this texture. Together with
         * [property`Gdk`.DmabufTextureBuilder:update-texture] this describes an
         * update of a previous texture.
         *
         * When rendering animations of large textures, it is possible that
         * consecutive textures are only updating contents in parts of the texture.
         * It is then possible to describe this update via these two properties,
         * so that GTK can avoid rerendering parts that did not change.
         *
         * An example would be a screen recording where only the mouse pointer moves.
         *
         * @param region the region to update
         */
        set_update_region(region?: cairo.Region | null): void;
        /**
         * Sets the texture to be updated by this texture. See
         * [method`Gdk`.DmabufTextureBuilder.set_update_region] for an explanation.
         *
         * @param texture the texture to update
         */
        set_update_texture(texture?: Gdk.Texture | null): void;
        /**
         * Sets the width of the texture.
         *
         * The width must be set before calling [method`Gdk`.DmabufTextureBuilder.build].
         *
         * @param width The texture's width or 0 to unset
         */
        set_width(width: number): void;
    }
    abstract class Drag extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Drag>;
        // Properties
        /**
         * The possible actions of this drag.
         */
        get actions(): Gdk.DragAction;
        set actions(val: Gdk.DragAction);
        /**
         * The `GdkContentProvider`.
         */
        get content(): Gdk.ContentProvider;
        /**
         * The `GdkDevice` that is performing the drag.
         */
        get device(): Gdk.Device;
        /**
         * The `GdkDisplay` that the drag belongs to.
         */
        get display(): Gdk.Display;
        /**
         * The possible formats that the drag can provide its data in.
         */
        get formats(): Gdk.ContentFormats;
        /**
         * The currently selected action of the drag.
         */
        get selected_action(): Gdk.DragAction;
        set selected_action(val: Gdk.DragAction);
        /**
         * The currently selected action of the drag.
         */
        get selectedAction(): Gdk.DragAction;
        set selectedAction(val: Gdk.DragAction);
        /**
         * The surface where the drag originates.
         */
        get surface(): Gdk.Surface;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Drag.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Drag.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.Drag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Drag.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Drag.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Drag.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Drag.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Drag.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Starts a drag and creates a new drag context for it.
         *
         * This function is called by the drag source. After this call, you
         * probably want to set up the drag icon using the surface returned
         * by [method`Gdk`.Drag.get_drag_surface].
         *
         * This function returns a reference to the [class`Gdk`.Drag] object,
         * but GTK keeps its own reference as well, as long as the DND operation
         * is going on.
         *
         * Note: if `actions` include %GDK_ACTION_MOVE, you need to listen for
         * the [signal`Gdk`.Drag::dnd-finished] signal and delete the data at
         * the source if [method`Gdk`.Drag.get_selected_action] returns
         * %GDK_ACTION_MOVE.
         *
         * @param surface the source surface for this drag
         * @param device the device that controls this drag
         * @param content the offered content
         * @param actions the actions supported by this drag
         * @param dx the x offset to `device'`s position where the drag nominally started
         * @param dy the y offset to `device'`s position where the drag nominally started
         */
        static begin(
            surface: Gdk.Surface,
            device: Gdk.Device,
            content: Gdk.ContentProvider,
            actions: Gdk.DragAction,
            dx: number,
            dy: number,
        ): Gdk.Drag | null;
        // Methods
        /**
         * Informs GDK that the drop ended.
         *
         * Passing %FALSE for `success` may trigger a drag cancellation
         * animation.
         *
         * This function is called by the drag source, and should be the
         * last call before dropping the reference to the `drag`.
         *
         * The `GdkDrag` will only take the first [method`Gdk`.Drag.drop_done]
         * call as effective, if this function is called multiple times,
         * all subsequent calls will be ignored.
         *
         * @param success whether the drag was ultimatively successful
         */
        drop_done(success: boolean): void;
        /**
         * Determines the bitmask of possible actions proposed by the source.
         *
         * @returns the `GdkDragAction` flags
         */
        get_actions(): Gdk.DragAction;
        /**
         * Returns the `GdkContentProvider` associated to the `GdkDrag` object.
         *
         * @returns The `GdkContentProvider` associated to `drag`.
         */
        get_content(): Gdk.ContentProvider;
        /**
         * Returns the `GdkDevice` associated to the `GdkDrag` object.
         *
         * @returns The `GdkDevice` associated to `drag`.
         */
        get_device(): Gdk.Device;
        /**
         * Gets the `GdkDisplay` that the drag object was created for.
         *
         * @returns a `GdkDisplay`
         */
        get_display(): Gdk.Display;
        /**
         * Returns the surface on which the drag icon should be rendered
         * during the drag operation.
         *
         * Note that the surface may not be available until the drag operation
         * has begun. GDK will move the surface in accordance with the ongoing
         * drag operation. The surface is owned by `drag` and will be destroyed
         * when the drag operation is over.
         *
         * @returns the drag surface
         */
        get_drag_surface(): Gdk.Surface | null;
        /**
         * Retrieves the formats supported by this `GdkDrag` object.
         *
         * @returns a `GdkContentFormats`
         */
        get_formats(): Gdk.ContentFormats;
        /**
         * Determines the action chosen by the drag destination.
         *
         * @returns a `GdkDragAction` value
         */
        get_selected_action(): Gdk.DragAction;
        /**
         * Returns the `GdkSurface` where the drag originates.
         *
         * @returns The `GdkSurface` where the drag originates
         */
        get_surface(): Gdk.Surface;
        /**
         * Sets the position of the drag surface that will be kept
         * under the cursor hotspot.
         *
         * Initially, the hotspot is at the top left corner of the drag surface.
         *
         * @param hot_x x coordinate of the drag surface hotspot
         * @param hot_y y coordinate of the drag surface hotspot
         */
        set_hotspot(hot_x: number, hot_y: number): void;
    }
    abstract class DrawContext extends GObjectClasses.Object {
        static '$gtype': GObject.GType<DrawContext>;
        // Properties
        /**
         * The `GdkDisplay` used to create the `GdkDrawContext`.
         */
        get display(): Gdk.Display;
        /**
         * The `GdkSurface` the context is bound to.
         */
        get surface(): Gdk.Surface;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.DrawContext.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.DrawContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.DrawContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DrawContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.DrawContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.DrawContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.DrawContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.DrawContext.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Indicates that you are beginning the process of redrawing `region`
         * on the `context'`s surface.
         *
         * Calling this function begins a drawing operation using `context` on the
         * surface that `context` was created from. The actual requirements and
         * guarantees for the drawing operation vary for different implementations
         * of drawing, so a [class`Gdk`.CairoContext] and a [class`Gdk`.GLContext]
         * need to be treated differently.
         *
         * A call to this function is a requirement for drawing and must be
         * followed by a call to [method`Gdk`.DrawContext.end_frame], which will
         * complete the drawing operation and ensure the contents become visible
         * on screen.
         *
         * Note that the `region` passed to this function is the minimum region that
         * needs to be drawn and depending on implementation, windowing system and
         * hardware in use, it might be necessary to draw a larger region. Drawing
         * implementation must use [method`Gdk`.DrawContext.get_frame_region] to
         * query the region that must be drawn.
         *
         * When using GTK, the widget system automatically places calls to
         * gdk_draw_context_begin_frame() and gdk_draw_context_end_frame() via the
         * use of [GskRenderer](../gsk4/class.Renderer.html)s, so application code
         * does not need to call these functions explicitly.
         *
         * @param region minimum region that should be drawn
         */
        begin_frame(region: cairo.Region): void;
        /**
         * Ends a drawing operation started with gdk_draw_context_begin_frame().
         *
         * This makes the drawing available on screen.
         * See [method`Gdk`.DrawContext.begin_frame] for more details about drawing.
         *
         * When using a [class`Gdk`.GLContext], this function may call `glFlush()`
         * implicitly before returning; it is not recommended to call `glFlush()`
         * explicitly before calling this function.
         */
        end_frame(): void;
        /**
         * Retrieves the `GdkDisplay` the `context` is created for
         *
         * @returns the `GdkDisplay`
         */
        get_display(): Gdk.Display | null;
        /**
         * Retrieves the region that is currently being repainted.
         *
         * After a call to [method`Gdk`.DrawContext.begin_frame] this function will
         * return a union of the region passed to that function and the area of the
         * surface that the `context` determined needs to be repainted.
         *
         * If `context` is not in between calls to [method`Gdk`.DrawContext.begin_frame]
         * and [method`Gdk`.DrawContext.end_frame], %NULL will be returned.
         *
         * @returns a Cairo region
         */
        get_frame_region(): cairo.Region | null;
        /**
         * Retrieves the surface that `context` is bound to.
         *
         * @returns a `GdkSurface`
         */
        get_surface(): Gdk.Surface | null;
        /**
         * Returns %TRUE if `context` is in the process of drawing to its surface.
         *
         * This is the case between calls to [method`Gdk`.DrawContext.begin_frame]
         * and [method`Gdk`.DrawContext.end_frame]. In this situation, drawing commands
         * may be effecting the contents of the `context'`s surface.
         *
         * @returns %TRUE if the context is between [method`Gdk`.DrawContext.begin_frame]
         *   and [method`Gdk`.DrawContext.end_frame] calls.
         */
        is_in_frame(): boolean;
    }
    abstract class Drop extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Drop>;
        // Properties
        /**
         * The possible actions for this drop
         */
        get actions(): Gdk.DragAction;
        /**
         * The `GdkDevice` performing the drop
         */
        get device(): Gdk.Device;
        /**
         * The `GdkDisplay` that the drop belongs to.
         */
        get display(): Gdk.Display;
        /**
         * The `GdkDrag` that initiated this drop
         */
        get drag(): Gdk.Drag;
        /**
         * The possible formats that the drop can provide its data in.
         */
        get formats(): Gdk.ContentFormats;
        /**
         * The `GdkSurface` the drop happens on
         */
        get surface(): Gdk.Surface;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Drop.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Drop.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.Drop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Drop.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Drop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Drop.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Drop.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Drop.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Ends the drag operation after a drop.
         *
         * The `action` must be a single action selected from the actions
         * available via [method`Gdk`.Drop.get_actions].
         *
         * @param action the action performed by the destination or 0 if the drop failed
         */
        finish(action: Gdk.DragAction | null): void;
        /**
         * Returns the possible actions for this `GdkDrop`.
         *
         * If this value contains multiple actions - i.e.
         * [func`Gdk`.DragAction.is_unique] returns %FALSE for the result -
         * [method`Gdk`.Drop.finish] must choose the action to use when
         * accepting the drop. This will only happen if you passed
         * %GDK_ACTION_ASK as one of the possible actions in
         * [method`Gdk`.Drop.status]. %GDK_ACTION_ASK itself will not
         * be included in the actions returned by this function.
         *
         * This value may change over the lifetime of the [class`Gdk`.Drop]
         * both as a response to source side actions as well as to calls to
         * [method`Gdk`.Drop.status] or [method`Gdk`.Drop.finish]. The source
         * side will not change this value anymore once a drop has started.
         *
         * @returns The possible `GdkDragActions`
         */
        get_actions(): Gdk.DragAction;
        /**
         * Returns the `GdkDevice` performing the drop.
         *
         * @returns The `GdkDevice` performing the drop.
         */
        get_device(): Gdk.Device;
        /**
         * Gets the `GdkDisplay` that `self` was created for.
         *
         * @returns a `GdkDisplay`
         */
        get_display(): Gdk.Display;
        /**
         * If this is an in-app drag-and-drop operation, returns the `GdkDrag`
         * that corresponds to this drop.
         *
         * If it is not, %NULL is returned.
         *
         * @returns the corresponding `GdkDrag`
         */
        get_drag(): Gdk.Drag | null;
        /**
         * Returns the `GdkContentFormats` that the drop offers the data
         * to be read in.
         *
         * @returns The possible `GdkContentFormats`
         */
        get_formats(): Gdk.ContentFormats;
        /**
         * Returns the `GdkSurface` performing the drop.
         *
         * @returns The `GdkSurface` performing the drop.
         */
        get_surface(): Gdk.Surface;
        /**
         * Asynchronously read the dropped data from a `GdkDrop`
         * in a format that complies with one of the mime types.
         *
         * @param mime_types pointer to an array of mime types
         * @param io_priority the I/O priority for the read operation
         * @param cancellable optional `GCancellable` object
         */
        read_async(
            mime_types: string[],
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Gio.InputStream | null, string]>;
        /**
         * Asynchronously read the dropped data from a `GdkDrop`
         * in a format that complies with one of the mime types.
         *
         * @param mime_types pointer to an array of mime types
         * @param io_priority the I/O priority for the read operation
         * @param cancellable optional `GCancellable` object
         * @param callback a `GAsyncReadyCallback` to call when
         *   the request is satisfied
         */
        read_async(
            mime_types: string[],
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously read the dropped data from a `GdkDrop`
         * in a format that complies with one of the mime types.
         *
         * @param mime_types pointer to an array of mime types
         * @param io_priority the I/O priority for the read operation
         * @param cancellable optional `GCancellable` object
         * @param callback a `GAsyncReadyCallback` to call when
         *   the request is satisfied
         */
        read_async(
            mime_types: string[],
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream | null, string]> | void;
        /**
         * Finishes an async drop read operation.
         *
         * Note that you must not use blocking read calls on the returned stream
         * in the GTK thread, since some platforms might require communication with
         * GTK to complete the data transfer. You can use async APIs such as
         * g_input_stream_read_bytes_async().
         *
         * See [method`Gdk`.Drop.read_async].
         *
         * @returns the `GInputStream`
         * @param result a `GAsyncResult`
         */
        read_finish(result: Gio.AsyncResult): [Gio.InputStream | null, string];
        /**
         * Asynchronously request the drag operation's contents converted
         * to the given `type`.
         *
         * For local drag-and-drop operations that are available in the given
         * `GType`, the value will be copied directly. Otherwise, GDK will
         * try to use [func`Gdk`.content_deserialize_async] to convert the data.
         *
         * @param type a `GType` to read
         * @param io_priority the I/O priority of the request.
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         */
        read_value_async(
            type: GObject.GType,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GObject.Value>;
        /**
         * Asynchronously request the drag operation's contents converted
         * to the given `type`.
         *
         * For local drag-and-drop operations that are available in the given
         * `GType`, the value will be copied directly. Otherwise, GDK will
         * try to use [func`Gdk`.content_deserialize_async] to convert the data.
         *
         * @param type a `GType` to read
         * @param io_priority the I/O priority of the request.
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         * @param callback callback to call when the request is satisfied
         */
        read_value_async(
            type: GObject.GType,
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously request the drag operation's contents converted
         * to the given `type`.
         *
         * For local drag-and-drop operations that are available in the given
         * `GType`, the value will be copied directly. Otherwise, GDK will
         * try to use [func`Gdk`.content_deserialize_async] to convert the data.
         *
         * @param type a `GType` to read
         * @param io_priority the I/O priority of the request.
         * @param cancellable optional `GCancellable` object, %NULL to ignore.
         * @param callback callback to call when the request is satisfied
         */
        read_value_async(
            type: GObject.GType,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GObject.Value> | void;
        /**
         * Finishes an async drop read.
         *
         * See [method`Gdk`.Drop.read_value_async].
         *
         * @returns a `GValue` containing the result.
         * @param result a `GAsyncResult`
         */
        read_value_finish(result: Gio.AsyncResult): unknown;
        /**
         * Selects all actions that are potentially supported by the destination.
         *
         * When calling this function, do not restrict the passed in actions to
         * the ones provided by [method`Gdk`.Drop.get_actions]. Those actions may
         * change in the future, even depending on the actions you provide here.
         *
         * The `preferred` action is a hint to the drag-and-drop mechanism about which
         * action to use when multiple actions are possible.
         *
         * This function should be called by drag destinations in response to
         * %GDK_DRAG_ENTER or %GDK_DRAG_MOTION events. If the destination does
         * not yet know the exact actions it supports, it should set any possible
         * actions first and then later call this function again.
         *
         * @param actions Supported actions of the destination, or 0 to indicate
         *    that a drop will not be accepted
         * @param preferred A unique action that's a member of `actions` indicating the
         *    preferred action
         */
        status(actions: Gdk.DragAction | null, preferred: Gdk.DragAction | null): void;
    }
    abstract class FrameClock extends GObjectClasses.Object {
        static '$gtype': GObject.GType<FrameClock>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.FrameClock.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.FrameClock.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.FrameClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.FrameClock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.FrameClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.FrameClock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.FrameClock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.FrameClock.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Starts updates for an animation.
         *
         * Until a matching call to [method`Gdk`.FrameClock.end_updating] is made,
         * the frame clock will continually request a new frame with the
         * %GDK_FRAME_CLOCK_PHASE_UPDATE phase. This function may be called multiple
         * times and frames will be requested until gdk_frame_clock_end_updating()
         * is called the same number of times.
         */
        begin_updating(): void;
        /**
         * Stops updates for an animation.
         *
         * See the documentation for [method`Gdk`.FrameClock.begin_updating].
         */
        end_updating(): void;
        /**
         * Gets the frame timings for the current frame.
         *
         * @returns the `GdkFrameTimings` for the
         *   frame currently being processed, or even no frame is being
         *   processed, for the previous frame. Before any frames have been
         *   processed, returns %NULL.
         */
        get_current_timings(): Gdk.FrameTimings | null;
        /**
         * Calculates the current frames-per-second, based on the
         * frame timings of `frame_clock`.
         *
         * @returns the current fps, as a `double`
         */
        get_fps(): number;
        /**
         * `GdkFrameClock` maintains a 64-bit counter that increments for
         * each frame drawn.
         *
         * @returns inside frame processing, the value of the frame counter
         *   for the current frame. Outside of frame processing, the frame
         *   counter for the last frame.
         */
        get_frame_counter(): number;
        /**
         * Gets the time that should currently be used for animations.
         *
         * Inside the processing of a frame, it’s the time used to compute the
         * animation position of everything in a frame. Outside of a frame, it's
         * the time of the conceptual “previous frame,” which may be either
         * the actual previous frame time, or if that’s too old, an updated
         * time.
         *
         * @returns a timestamp in microseconds, in the timescale of
         *  of g_get_monotonic_time().
         */
        get_frame_time(): number;
        /**
         * Returns the frame counter for the oldest frame available in history.
         *
         * `GdkFrameClock` internally keeps a history of `GdkFrameTimings`
         * objects for recent frames that can be retrieved with
         * [method`Gdk`.FrameClock.get_timings]. The set of stored frames
         * is the set from the counter values given by
         * [method`Gdk`.FrameClock.get_history_start] and
         * [method`Gdk`.FrameClock.get_frame_counter], inclusive.
         *
         * @returns the frame counter value for the oldest frame
         *  that is available in the internal frame history of the
         *  `GdkFrameClock`
         */
        get_history_start(): number;
        /**
         * Predicts a presentation time, based on history.
         *
         * Using the frame history stored in the frame clock, finds the last
         * known presentation time and refresh interval, and assuming that
         * presentation times are separated by the refresh interval,
         * predicts a presentation time that is a multiple of the refresh
         * interval after the last presentation time, and later than `base_time`.
         *
         * @param base_time base time for determining a presentaton time
         */
        get_refresh_info(base_time: number): [number, number];
        /**
         * Retrieves a `GdkFrameTimings` object holding timing information
         * for the current frame or a recent frame.
         *
         * The `GdkFrameTimings` object may not yet be complete: see
         * [method`Gdk`.FrameTimings.get_complete] and
         * [method`Gdk`.FrameClock.get_history_start].
         *
         * @returns the `GdkFrameTimings` object
         *   for the specified frame, or %NULL if it is not available
         * @param frame_counter the frame counter value identifying the frame to
         *  be received
         */
        get_timings(frame_counter: number): Gdk.FrameTimings | null;
        /**
         * Asks the frame clock to run a particular phase.
         *
         * The signal corresponding the requested phase will be emitted the next
         * time the frame clock processes. Multiple calls to
         * gdk_frame_clock_request_phase() will be combined together
         * and only one frame processed. If you are displaying animated
         * content and want to continually request the
         * %GDK_FRAME_CLOCK_PHASE_UPDATE phase for a period of time,
         * you should use [method`Gdk`.FrameClock.begin_updating] instead,
         * since this allows GTK to adjust system parameters to get maximally
         * smooth animations.
         *
         * @param phase the phase that is requested
         */
        request_phase(phase: Gdk.FrameClockPhase | null): void;
    }
    abstract class GLContext extends DrawContext {
        static '$gtype': GObject.GType<GLContext>;
        // Properties
        /**
         * The allowed APIs.
         */
        get allowed_apis(): Gdk.GLAPI;
        set allowed_apis(val: Gdk.GLAPI);
        /**
         * The allowed APIs.
         */
        get allowedApis(): Gdk.GLAPI;
        set allowedApis(val: Gdk.GLAPI);
        /**
         * The API currently in use.
         */
        get api(): Gdk.GLAPI;
        /**
         * Always %NULL
         *
         * As many contexts can share data now and no single shared context exists
         * anymore, this function has been deprecated and now always returns %NULL.
         */
        get shared_context(): Gdk.GLContext;
        /**
         * Always %NULL
         *
         * As many contexts can share data now and no single shared context exists
         * anymore, this function has been deprecated and now always returns %NULL.
         */
        get sharedContext(): Gdk.GLContext;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.GLContext.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.GLContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.GLContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.GLContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.GLContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.GLContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.GLContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.GLContext.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Clears the current `GdkGLContext`.
         *
         * Any OpenGL call after this function returns will be ignored
         * until [method`Gdk`.GLContext.make_current] is called.
         */
        static clear_current(): void;
        /**
         * Retrieves the current `GdkGLContext`.
         */
        static get_current(): Gdk.GLContext | null;
        // Methods
        /**
         * Gets the allowed APIs set via gdk_gl_context_set_allowed_apis().
         *
         * @returns the allowed APIs
         */
        get_allowed_apis(): Gdk.GLAPI;
        /**
         * Gets the API currently in use.
         *
         * If the renderer has not been realized yet, 0 is returned.
         *
         * @returns the currently used API
         */
        get_api(): Gdk.GLAPI;
        /**
         * Retrieves whether the context is doing extra validations and runtime checking.
         *
         * See [method`Gdk`.GLContext.set_debug_enabled].
         *
         * @returns %TRUE if debugging is enabled
         */
        get_debug_enabled(): boolean;
        /**
         * Retrieves the display the `context` is created for
         *
         * @returns a `GdkDisplay`
         */
        get_display(): Gdk.Display | null;
        /**
         * Retrieves whether the context is forward-compatible.
         *
         * See [method`Gdk`.GLContext.set_forward_compatible].
         *
         * @returns %TRUE if the context should be forward-compatible
         */
        get_forward_compatible(): boolean;
        /**
         * Retrieves required OpenGL version set as a requirement for the `context`
         * realization. It will not change even if a greater OpenGL version is supported
         * and used after the `context` is realized. See
         * [method`Gdk`.GLContext.get_version] for the real version in use.
         *
         * See [method`Gdk`.GLContext.set_required_version].
         */
        get_required_version(): [number, number];
        /**
         * Used to retrieves the `GdkGLContext` that this `context` share data with.
         *
         * As many contexts can share data now and no single shared context exists
         * anymore, this function has been deprecated and now always returns %NULL.
         *
         * @returns %NULL
         */
        get_shared_context(): Gdk.GLContext | null;
        /**
         * Retrieves the surface used by the `context`.
         *
         * @returns a `GdkSurface`
         */
        get_surface(): Gdk.Surface | null;
        /**
         * Checks whether the `context` is using an OpenGL or OpenGL ES profile.
         *
         * @returns %TRUE if the `GdkGLContext` is using an OpenGL ES profile;
         * %FALSE if other profile is in use of if the `context` has not yet
         * been realized.
         */
        get_use_es(): boolean;
        /**
         * Retrieves the OpenGL version of the `context`.
         *
         * The `context` must be realized prior to calling this function.
         */
        get_version(): [number, number];
        /**
         * Whether the `GdkGLContext` is in legacy mode or not.
         *
         * The `GdkGLContext` must be realized before calling this function.
         *
         * When realizing a GL context, GDK will try to use the OpenGL 3.2 core
         * profile; this profile removes all the OpenGL API that was deprecated
         * prior to the 3.2 version of the specification. If the realization is
         * successful, this function will return %FALSE.
         *
         * If the underlying OpenGL implementation does not support core profiles,
         * GDK will fall back to a pre-3.2 compatibility profile, and this function
         * will return %TRUE.
         *
         * You can use the value returned by this function to decide which kind
         * of OpenGL API to use, or whether to do extension discovery, or what
         * kind of shader programs to load.
         *
         * @returns %TRUE if the GL context is in legacy mode
         */
        is_legacy(): boolean;
        /**
         * Checks if the two GL contexts can share resources.
         *
         * When they can, the texture IDs from `other` can be used in `self`. This
         * is particularly useful when passing `GdkGLTexture` objects between
         * different contexts.
         *
         * Contexts created for the same display with the same properties will
         * always be compatible, even if they are created for different surfaces.
         * For other contexts it depends on the GL backend.
         *
         * Both contexts must be realized for this check to succeed. If either one
         * is not, this function will return %FALSE.
         *
         * @returns %TRUE if the two GL contexts are compatible.
         * @param other the `GdkGLContext` that should be compatible with `self`
         */
        is_shared(other: Gdk.GLContext): boolean;
        /**
         * Makes the `context` the current one.
         */
        make_current(): void;
        /**
         * Realizes the given `GdkGLContext`.
         *
         * It is safe to call this function on a realized `GdkGLContext`.
         *
         * @returns %TRUE if the context is realized
         */
        realize(): boolean;
        /**
         * Sets the allowed APIs. When gdk_gl_context_realize() is called, only the
         * allowed APIs will be tried. If you set this to 0, realizing will always fail.
         *
         * If you set it on a realized context, the property will not have any effect.
         * It is only relevant during gdk_gl_context_realize().
         *
         * By default, all APIs are allowed.
         *
         * @param apis the allowed APIs
         */
        set_allowed_apis(apis: Gdk.GLAPI | null): void;
        /**
         * Sets whether the `GdkGLContext` should perform extra validations and
         * runtime checking.
         *
         * This is useful during development, but has additional overhead.
         *
         * The `GdkGLContext` must not be realized or made current prior to
         * calling this function.
         *
         * @param enabled whether to enable debugging in the context
         */
        set_debug_enabled(enabled: boolean): void;
        /**
         * Sets whether the `GdkGLContext` should be forward-compatible.
         *
         * Forward-compatible contexts must not support OpenGL functionality that
         * has been marked as deprecated in the requested version; non-forward
         * compatible contexts, on the other hand, must support both deprecated and
         * non deprecated functionality.
         *
         * The `GdkGLContext` must not be realized or made current prior to calling
         * this function.
         *
         * @param compatible whether the context should be forward-compatible
         */
        set_forward_compatible(compatible: boolean): void;
        /**
         * Sets the major and minor version of OpenGL to request.
         *
         * Setting `major` and `minor` to zero will use the default values.
         *
         * Setting `major` and `minor` lower than the minimum versions required
         * by GTK will result in the context choosing the minimum version.
         *
         * The `context` must not be realized or made current prior to calling
         * this function.
         *
         * @param major the major version to request
         * @param minor the minor version to request
         */
        set_required_version(major: number, minor: number): void;
        /**
         * Requests that GDK create an OpenGL ES context instead of an OpenGL one.
         *
         * Not all platforms support OpenGL ES.
         *
         * The `context` must not have been realized.
         *
         * By default, GDK will attempt to automatically detect whether the
         * underlying GL implementation is OpenGL or OpenGL ES once the `context`
         * is realized.
         *
         * You should check the return value of [method`Gdk`.GLContext.get_use_es]
         * after calling [method`Gdk`.GLContext.realize] to decide whether to use
         * the OpenGL or OpenGL ES API, extensions, or shaders.
         *
         * @param use_es whether the context should use OpenGL ES instead of OpenGL,
         *   or -1 to allow auto-detection
         */
        set_use_es(use_es: number): void;
    }
    class GLTexture extends Texture implements Gdk.Paintable, Gio.Icon, Gio.LoadableIcon {
        static '$gtype': GObject.GType<GLTexture>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.GLTexture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.GLTexture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(context: Gdk.GLContext, id: number, width: number, height: number, data?: any | null): Gdk.GLTexture;
        // Signals
        connect<K extends keyof Gdk.GLTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.GLTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.GLTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.GLTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.GLTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.GLTexture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Releases the GL resources held by a `GdkGLTexture`.
         *
         * The texture contents are still available via the
         * [method`Gdk`.Texture.download] function, after this
         * function has been called.
         */
        release(): void;
        // Inherited methods
        /**
         * Compute a concrete size for the `GdkPaintable`.
         *
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         *
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         *
         * @param specified_width the width `paintable` could be drawn into or
         *   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or
         *   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if
         *   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if
         *   no other constraints were given
         */
        compute_concrete_size(
            specified_width: number,
            specified_height: number,
            default_width: number,
            default_height: number,
        ): [number, number];
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         *
         * @returns An immutable paintable for the current
         *   contents of `paintable`
         */
        get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
         *
         * @returns The `GdkPaintableFlags` for this paintable
         */
        get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * Usually when a `paintable` returns nonzero values from
         * [method`Gdk`.Paintable.get_intrinsic_width] and
         * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         *
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their contents.
         *
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
         * it must not call this function.
         */
        invalidate_contents(): void;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their size.
         *
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
         * it must not call this function.
         */
        invalidate_size(): void;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         *
         * @param snapshot a `GdkSnapshot` to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         */
        vfunc_get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
         */
        vfunc_get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * Usually when a `paintable` returns nonzero values from
         * [method`Gdk`.Paintable.get_intrinsic_width] and
         * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         */
        vfunc_get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         */
        vfunc_get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         */
        vfunc_get_intrinsic_width(): number;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         *
         * @param snapshot a `GdkSnapshot` to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Checks if two icons are equal.
         *
         * @returns %TRUE if `icon1` is equal to `icon2`. %FALSE otherwise.
         * @param _icon2 pointer to the second #GIcon.
         */
        equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         *
         * @returns a #guint containing a hash for the `icon,` suitable for
         *   use in a #GHashTable or similar data structure.
         */
        hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         *
         * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
         */
        serialize(): GLib.Variant | null;
        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use g_icon_new_for_string() to
         * get `icon` back from the returned string.
         *
         * The encoding of the returned string is proprietary to #GIcon except
         * in the following two cases
         *
         * - If `icon` is a #GFileIcon, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the #GFile for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of g_file_get_uri()
         *   (such as `sftp://path/to/my%20icon.png`).
         *
         * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         *
         * @returns An allocated NUL-terminated UTF8 string or
         * %NULL if `icon` can't be serialized. Use g_free() to free.
         */
        to_string(): string | null;
        /**
         * Checks if two icons are equal.
         *
         * @param _icon2 pointer to the second #GIcon.
         */
        vfunc_equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         */
        vfunc_hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         */
        vfunc_serialize(): GLib.Variant | null;
        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when g_icon_new_for_string() is called.
         */
        vfunc_to_tokens(): [boolean, string[], number];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        load_async(size: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream, string]> | void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param res a #GAsyncResult.
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        vfunc_load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @param res a #GAsyncResult.
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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
    class GLTextureBuilder extends GObjectClasses.Object {
        static '$gtype': GObject.GType<GLTextureBuilder>;
        // Properties
        /**
         * The color state of the texture.
         */
        get color_state(): Gdk.ColorState;
        set color_state(val: Gdk.ColorState);
        /**
         * The color state of the texture.
         */
        get colorState(): Gdk.ColorState;
        set colorState(val: Gdk.ColorState);
        /**
         * The context owning the texture.
         */
        get context(): Gdk.GLContext;
        set context(val: Gdk.GLContext);
        /**
         * The format when downloading the texture.
         */
        get format(): Gdk.MemoryFormat;
        set format(val: Gdk.MemoryFormat);
        /**
         * If the texture has a mipmap.
         */
        get has_mipmap(): boolean;
        set has_mipmap(val: boolean);
        /**
         * If the texture has a mipmap.
         */
        get hasMipmap(): boolean;
        set hasMipmap(val: boolean);
        /**
         * The height of the texture.
         */
        get height(): number;
        set height(val: number);
        /**
         * The texture ID to use.
         */
        get id(): number;
        set id(val: number);
        /**
         * An optional `GLSync` object.
         *
         * If this is set, GTK will wait on it before using the texture.
         */
        get sync(): any;
        set sync(val: any);
        /**
         * The update region for [property`Gdk`.GLTextureBuilder:update-texture].
         */
        get update_region(): cairo.Region;
        set update_region(val: cairo.Region);
        /**
         * The update region for [property`Gdk`.GLTextureBuilder:update-texture].
         */
        get updateRegion(): cairo.Region;
        set updateRegion(val: cairo.Region);
        /**
         * The texture [property`Gdk`.GLTextureBuilder:update-region] is an update for.
         */
        get update_texture(): Gdk.Texture;
        set update_texture(val: Gdk.Texture);
        /**
         * The texture [property`Gdk`.GLTextureBuilder:update-region] is an update for.
         */
        get updateTexture(): Gdk.Texture;
        set updateTexture(val: Gdk.Texture);
        /**
         * The width of the texture.
         */
        get width(): number;
        set width(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.GLTextureBuilder.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.GLTextureBuilder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gdk.GLTextureBuilder;
        // Signals
        connect<K extends keyof Gdk.GLTextureBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.GLTextureBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.GLTextureBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.GLTextureBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.GLTextureBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.GLTextureBuilder.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Builds a new `GdkTexture` with the values set up in the builder.
         *
         * The `destroy` function gets called when the returned texture gets released;
         * either when the texture is finalized or by an explicit call to
         * [method`Gdk`.GLTexture.release]. It should release all GL resources associated
         * with the texture, such as the [property`Gdk`.GLTextureBuilder:id] and the
         * [property`Gdk`.GLTextureBuilder:sync].
         *
         * Note that it is a programming error to call this function if any mandatory
         * property has not been set.
         *
         * It is possible to call this function multiple times to create multiple textures,
         * possibly with changing properties in between.
         *
         * @returns a newly built `GdkTexture`
         * @param destroy destroy function to be called when the texture is
         *   released
         * @param data user data to pass to the destroy function
         */
        build(destroy?: GLib.DestroyNotify | null, data?: any | null): Gdk.Texture;
        /**
         * Gets the color state previously set via gdk_gl_texture_builder_set_color_state().
         *
         * @returns the color state
         */
        get_color_state(): Gdk.ColorState;
        /**
         * Gets the context previously set via gdk_gl_texture_builder_set_context() or
         * %NULL if none was set.
         *
         * @returns The context
         */
        get_context(): Gdk.GLContext | null;
        /**
         * Gets the format previously set via gdk_gl_texture_builder_set_format().
         *
         * @returns The format
         */
        get_format(): Gdk.MemoryFormat;
        /**
         * Gets whether the texture has a mipmap.
         *
         * @returns Whether the texture has a mipmap
         */
        get_has_mipmap(): boolean;
        /**
         * Gets the height previously set via gdk_gl_texture_builder_set_height() or
         * 0 if the height wasn't set.
         *
         * @returns The height
         */
        get_height(): number;
        /**
         * Gets the texture id previously set via gdk_gl_texture_builder_set_id() or
         * 0 if the id wasn't set.
         *
         * @returns The id
         */
        get_id(): number;
        /**
         * Gets the `GLsync` previously set via gdk_gl_texture_builder_set_sync().
         *
         * @returns the `GLSync`
         */
        get_sync(): any | null;
        /**
         * Gets the region previously set via gdk_gl_texture_builder_set_update_region() or
         * %NULL if none was set.
         *
         * @returns The region
         */
        get_update_region(): cairo.Region | null;
        /**
         * Gets the texture previously set via gdk_gl_texture_builder_set_update_texture() or
         * %NULL if none was set.
         *
         * @returns The texture
         */
        get_update_texture(): Gdk.Texture | null;
        /**
         * Gets the width previously set via gdk_gl_texture_builder_set_width() or
         * 0 if the width wasn't set.
         *
         * @returns The width
         */
        get_width(): number;
        /**
         * Sets the color state for the texture.
         *
         * By default, the sRGB colorstate is used. If you don't know what
         * colorstates are, this is probably the right thing.
         *
         * @param color_state a `GdkColorState`
         */
        set_color_state(color_state: Gdk.ColorState): void;
        /**
         * Sets the context to be used for the texture. This is the context that owns
         * the texture.
         *
         * The context must be set before calling [method`Gdk`.GLTextureBuilder.build].
         *
         * @param context The context the texture belongs to or %NULL to unset
         */
        set_context(context?: Gdk.GLContext | null): void;
        /**
         * Sets the format of the texture. The default is `GDK_MEMORY_R8G8B8A8_PREMULTIPLIED`.
         *
         * The format is the preferred format the texture data should be downloaded to. The
         * format must be supported by the GL version of [property`Gdk`.GLTextureBuilder:context].
         *
         * GDK's texture download code assumes that the format corresponds to the storage
         * parameters of the GL texture in an obvious way. For example, a format of
         * `GDK_MEMORY_R16G16B16A16_PREMULTIPLIED` is expected to be stored as `GL_RGBA16`
         * texture, and `GDK_MEMORY_G8A8` is expected to be stored as `GL_RG8` texture.
         *
         * Setting the right format is particularly useful when using high bit depth textures
         * to preserve the bit depth, to set the correct value for unpremultiplied textures
         * and to make sure opaque textures are treated as such.
         *
         * Non-RGBA textures need to have swizzling parameters set up properly to be usable
         * in GSK's shaders.
         *
         * @param format The texture's format
         */
        set_format(format: Gdk.MemoryFormat | null): void;
        /**
         * Sets whether the texture has a mipmap. This allows the renderer and other users of the
         * generated texture to use a higher quality downscaling.
         *
         * Typically, the `glGenerateMipmap` function is used to generate a mimap.
         *
         * @param has_mipmap Whether the texture has a mipmap
         */
        set_has_mipmap(has_mipmap: boolean): void;
        /**
         * Sets the height of the texture.
         *
         * The height must be set before calling [method`Gdk`.GLTextureBuilder.build].
         *
         * @param height The texture's height or 0 to unset
         */
        set_height(height: number): void;
        /**
         * Sets the texture id of the texture. The texture id must remain unmodified
         * until the texture was finalized. See [method`Gdk`.GLTextureBuilder.build]
         * for a longer discussion.
         *
         * The id must be set before calling [method`Gdk`.GLTextureBuilder.build].
         *
         * @param id The texture id to be used for creating the texture
         */
        set_id(id: number): void;
        /**
         * Sets the GLSync object to use for the texture.
         *
         * GTK will wait on this object before using the created `GdkTexture`.
         *
         * The `destroy` function that is passed to [method`Gdk`.GLTextureBuilder.build]
         * is responsible for freeing the sync object when it is no longer needed.
         * The texture builder does not destroy it and it is the callers
         * responsibility to make sure it doesn't leak.
         *
         * @param sync the GLSync object
         */
        set_sync(sync?: any | null): void;
        /**
         * Sets the region to be updated by this texture. Together with
         * [property`Gdk`.GLTextureBuilder:update-texture] this describes an
         * update of a previous texture.
         *
         * When rendering animations of large textures, it is possible that
         * consecutive textures are only updating contents in parts of the texture.
         * It is then possible to describe this update via these two properties,
         * so that GTK can avoid rerendering parts that did not change.
         *
         * An example would be a screen recording where only the mouse pointer moves.
         *
         * @param region the region to update
         */
        set_update_region(region?: cairo.Region | null): void;
        /**
         * Sets the texture to be updated by this texture. See
         * [method`Gdk`.GLTextureBuilder.set_update_region] for an explanation.
         *
         * @param texture the texture to update
         */
        set_update_texture(texture?: Gdk.Texture | null): void;
        /**
         * Sets the width of the texture.
         *
         * The width must be set before calling [method`Gdk`.GLTextureBuilder.build].
         *
         * @param width The texture's width or 0 to unset
         */
        set_width(width: number): void;
    }
    class MemoryTexture extends Texture implements Gdk.Paintable, Gio.Icon, Gio.LoadableIcon {
        static '$gtype': GObject.GType<MemoryTexture>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.MemoryTexture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.MemoryTexture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(
            width: number,
            height: number,
            format: Gdk.MemoryFormat,
            bytes: GLib.Bytes | Uint8Array,
            stride: number,
        ): Gdk.MemoryTexture;
        // Signals
        connect<K extends keyof Gdk.MemoryTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.MemoryTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.MemoryTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.MemoryTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.MemoryTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.MemoryTexture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Inherited methods
        /**
         * Compute a concrete size for the `GdkPaintable`.
         *
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         *
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         *
         * @param specified_width the width `paintable` could be drawn into or
         *   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or
         *   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if
         *   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if
         *   no other constraints were given
         */
        compute_concrete_size(
            specified_width: number,
            specified_height: number,
            default_width: number,
            default_height: number,
        ): [number, number];
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         *
         * @returns An immutable paintable for the current
         *   contents of `paintable`
         */
        get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
         *
         * @returns The `GdkPaintableFlags` for this paintable
         */
        get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * Usually when a `paintable` returns nonzero values from
         * [method`Gdk`.Paintable.get_intrinsic_width] and
         * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         *
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their contents.
         *
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
         * it must not call this function.
         */
        invalidate_contents(): void;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their size.
         *
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
         * it must not call this function.
         */
        invalidate_size(): void;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         *
         * @param snapshot a `GdkSnapshot` to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         */
        vfunc_get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
         */
        vfunc_get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * Usually when a `paintable` returns nonzero values from
         * [method`Gdk`.Paintable.get_intrinsic_width] and
         * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         */
        vfunc_get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         */
        vfunc_get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         */
        vfunc_get_intrinsic_width(): number;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         *
         * @param snapshot a `GdkSnapshot` to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Checks if two icons are equal.
         *
         * @returns %TRUE if `icon1` is equal to `icon2`. %FALSE otherwise.
         * @param _icon2 pointer to the second #GIcon.
         */
        equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         *
         * @returns a #guint containing a hash for the `icon,` suitable for
         *   use in a #GHashTable or similar data structure.
         */
        hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         *
         * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
         */
        serialize(): GLib.Variant | null;
        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use g_icon_new_for_string() to
         * get `icon` back from the returned string.
         *
         * The encoding of the returned string is proprietary to #GIcon except
         * in the following two cases
         *
         * - If `icon` is a #GFileIcon, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the #GFile for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of g_file_get_uri()
         *   (such as `sftp://path/to/my%20icon.png`).
         *
         * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         *
         * @returns An allocated NUL-terminated UTF8 string or
         * %NULL if `icon` can't be serialized. Use g_free() to free.
         */
        to_string(): string | null;
        /**
         * Checks if two icons are equal.
         *
         * @param _icon2 pointer to the second #GIcon.
         */
        vfunc_equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         */
        vfunc_hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         */
        vfunc_serialize(): GLib.Variant | null;
        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when g_icon_new_for_string() is called.
         */
        vfunc_to_tokens(): [boolean, string[], number];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        load_async(size: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream, string]> | void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param res a #GAsyncResult.
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        vfunc_load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @param res a #GAsyncResult.
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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
    class MemoryTextureBuilder extends GObjectClasses.Object {
        static '$gtype': GObject.GType<MemoryTextureBuilder>;
        // Properties
        /**
         * The bytes holding the data.
         */
        get bytes(): GLib.Bytes;
        set bytes(val: GLib.Bytes);
        /**
         * The colorstate describing the data.
         */
        get color_state(): Gdk.ColorState;
        set color_state(val: Gdk.ColorState);
        /**
         * The colorstate describing the data.
         */
        get colorState(): Gdk.ColorState;
        set colorState(val: Gdk.ColorState);
        /**
         * The format of the data.
         */
        get format(): Gdk.MemoryFormat;
        set format(val: Gdk.MemoryFormat);
        /**
         * The height of the texture.
         */
        get height(): number;
        set height(val: number);
        /**
         * The rowstride of the texture.
         *
         * The rowstride is the number of bytes between the first pixel
         * in a row of image data, and the first pixel in the next row.
         */
        get stride(): number;
        set stride(val: number);
        /**
         * The update region for [property`Gdk`.MemoryTextureBuilder:update-texture].
         */
        get update_region(): cairo.Region;
        set update_region(val: cairo.Region);
        /**
         * The update region for [property`Gdk`.MemoryTextureBuilder:update-texture].
         */
        get updateRegion(): cairo.Region;
        set updateRegion(val: cairo.Region);
        /**
         * The texture [property`Gdk`.MemoryTextureBuilder:update-region] is an update for.
         */
        get update_texture(): Gdk.Texture;
        set update_texture(val: Gdk.Texture);
        /**
         * The texture [property`Gdk`.MemoryTextureBuilder:update-region] is an update for.
         */
        get updateTexture(): Gdk.Texture;
        set updateTexture(val: Gdk.Texture);
        /**
         * The width of the texture.
         */
        get width(): number;
        set width(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.MemoryTextureBuilder.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.MemoryTextureBuilder.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gdk.MemoryTextureBuilder;
        // Signals
        connect<K extends keyof Gdk.MemoryTextureBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.MemoryTextureBuilder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.MemoryTextureBuilder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.MemoryTextureBuilder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.MemoryTextureBuilder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.MemoryTextureBuilder.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Builds a new `GdkTexture` with the values set up in the builder.
         *
         * Note that it is a programming error to call this function if any mandatory
         * property has not been set.
         *
         * It is possible to call this function multiple times to create multiple textures,
         * possibly with changing properties in between.
         *
         * @returns a newly built `GdkTexture`
         */
        build(): Gdk.Texture;
        /**
         * Gets the bytes previously set via gdk_memory_texture_builder_set_bytes()
         * or %NULL if none was set.
         *
         * @returns The bytes
         */
        get_bytes(): GLib.Bytes | null;
        /**
         * Gets the colorstate previously set via gdk_memory_texture_builder_set_color_state().
         *
         * @returns The colorstate
         */
        get_color_state(): Gdk.ColorState;
        /**
         * Gets the format previously set via gdk_memory_texture_builder_set_format().
         *
         * @returns The format
         */
        get_format(): Gdk.MemoryFormat;
        /**
         * Gets the height previously set via gdk_memory_texture_builder_set_height()
         * or 0 if the height wasn't set.
         *
         * @returns The height
         */
        get_height(): number;
        /**
         * Gets the stride previously set via gdk_memory_texture_builder_set_stride().
         *
         * @returns the stride
         */
        get_stride(): number;
        /**
         * Gets the region previously set via gdk_memory_texture_builder_set_update_region()
         * or %NULL if none was set.
         *
         * @returns The update region
         */
        get_update_region(): cairo.Region | null;
        /**
         * Gets the texture previously set via gdk_memory_texture_builder_set_update_texture()
         * or %NULL if none was set.
         *
         * @returns The update texture
         */
        get_update_texture(): Gdk.Texture | null;
        /**
         * Gets the width previously set via gdk_memory_texture_builder_set_width()
         * or 0 if the width wasn't set.
         *
         * @returns The width
         */
        get_width(): number;
        /**
         * Sets the data to be shown but the texture.
         *
         * The bytes must be set before calling [method`Gdk`.MemoryTextureBuilder.build].
         *
         * @param bytes The bytes the texture shows or %NULL to unset
         */
        set_bytes(bytes?: GLib.Bytes | null): void;
        /**
         * Sets the colorstate describing the data.
         *
         * By default, the sRGB colorstate is used. If you don't know
         * what colorstates are, this is probably the right thing.
         *
         * @param color_state The colorstate describing the data
         */
        set_color_state(color_state?: Gdk.ColorState | null): void;
        /**
         * Sets the format of the bytes.
         *
         * The default is `GDK_MEMORY_R8G8B8A8_PREMULTIPLIED`.
         *
         * @param format The texture's format
         */
        set_format(format: Gdk.MemoryFormat | null): void;
        /**
         * Sets the height of the texture.
         *
         * The height must be set before calling [method`Gdk`.MemoryTextureBuilder.build].
         *
         * @param height The texture's height or 0 to unset
         */
        set_height(height: number): void;
        /**
         * Sets the rowstride of the bytes used.
         *
         * The rowstride must be set before calling [method`Gdk`.MemoryTextureBuilder.build].
         *
         * @param stride the stride or 0 to unset
         */
        set_stride(stride: number): void;
        /**
         * Sets the region to be updated by this texture.
         *
         * Together with [property`Gdk`.MemoryTextureBuilder:update-texture],
         * this describes an update of a previous texture.
         *
         * When rendering animations of large textures, it is possible that
         * consecutive textures are only updating contents in parts of the texture.
         * It is then possible to describe this update via these two properties,
         * so that GTK can avoid rerendering parts that did not change.
         *
         * An example would be a screen recording where only the mouse pointer moves.
         *
         * @param region the region to update
         */
        set_update_region(region?: cairo.Region | null): void;
        /**
         * Sets the texture to be updated by this texture.
         *
         * See [method`Gdk`.MemoryTextureBuilder.set_update_region] for an explanation.
         *
         * @param texture the texture to update
         */
        set_update_texture(texture?: Gdk.Texture | null): void;
        /**
         * Sets the width of the texture.
         *
         * The width must be set before calling [method`Gdk`.MemoryTextureBuilder.build].
         *
         * @param width The texture's width or 0 to unset
         */
        set_width(width: number): void;
    }
    class Monitor extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Monitor>;
        // Properties
        /**
         * The connector name.
         */
        get connector(): string;
        /**
         * A short description of the monitor, meant for display to the user.
         */
        get description(): string;
        /**
         * The `GdkDisplay` of the monitor.
         */
        get display(): Gdk.Display;
        /**
         * The geometry of the monitor.
         */
        get geometry(): Gdk.Rectangle;
        /**
         * The height of the monitor, in millimeters.
         */
        get height_mm(): number;
        /**
         * The height of the monitor, in millimeters.
         */
        get heightMm(): number;
        /**
         * The manufacturer name.
         */
        get manufacturer(): string;
        /**
         * The model name.
         */
        get model(): string;
        /**
         * The refresh rate, in milli-Hertz.
         */
        get refresh_rate(): number;
        /**
         * The refresh rate, in milli-Hertz.
         */
        get refreshRate(): number;
        /**
         * The scale of the monitor.
         */
        get scale(): number;
        /**
         * The scale factor.
         *
         * The scale factor is the next larger integer,
         * compared to [property`Gdk`.Surface:scale].
         */
        get scale_factor(): number;
        /**
         * The scale factor.
         *
         * The scale factor is the next larger integer,
         * compared to [property`Gdk`.Surface:scale].
         */
        get scaleFactor(): number;
        /**
         * The subpixel layout.
         */
        get subpixel_layout(): Gdk.SubpixelLayout;
        /**
         * The subpixel layout.
         */
        get subpixelLayout(): Gdk.SubpixelLayout;
        /**
         * Whether the object is still valid.
         */
        get valid(): boolean;
        /**
         * The width of the monitor, in millimeters.
         */
        get width_mm(): number;
        /**
         * The width of the monitor, in millimeters.
         */
        get widthMm(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Monitor.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Monitor.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Monitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Monitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Monitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Monitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Monitor.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the name of the monitor's connector, if available.
         *
         * These are strings such as "eDP-1", or "HDMI-2". They depend
         * on software and hardware configuration, and should not be
         * relied on as stable identifiers of a specific monitor.
         *
         * @returns the name of the connector
         */
        get_connector(): string | null;
        /**
         * Gets a string describing the monitor, if available.
         *
         * This can be used to identify a monitor in the UI.
         *
         * @returns the monitor description
         */
        get_description(): string | null;
        /**
         * Gets the display that this monitor belongs to.
         *
         * @returns the display
         */
        get_display(): Gdk.Display;
        /**
         * Retrieves the size and position of the monitor within the
         * display coordinate space.
         *
         * The returned geometry is in  ”application pixels”, not in
         * ”device pixels” (see [method`Gdk`.Monitor.get_scale]).
         */
        get_geometry(): [Gdk.Rectangle];
        /**
         * Gets the height in millimeters of the monitor.
         *
         * @returns the physical height of the monitor
         */
        get_height_mm(): number;
        /**
         * Gets the name or PNP ID of the monitor's manufacturer.
         *
         * Note that this value might also vary depending on actual
         * display backend.
         *
         * The PNP ID registry is located at
         * [https://uefi.org/pnp_id_list](https://uefi.org/pnp_id_list).
         *
         * @returns the name of the manufacturer
         */
        get_manufacturer(): string | null;
        /**
         * Gets the string identifying the monitor model, if available.
         *
         * @returns the monitor model
         */
        get_model(): string | null;
        /**
         * Gets the refresh rate of the monitor, if available.
         *
         * The value is in milli-Hertz, so a refresh rate of 60Hz
         * is returned as 60000.
         *
         * @returns the refresh rate in milli-Hertz, or 0
         */
        get_refresh_rate(): number;
        /**
         * Gets the internal scale factor that maps from monitor coordinates
         * to device pixels.
         *
         * This can be used if you want to create pixel based data for a
         * particular monitor, but most of the time you’re drawing to a surface
         * where it is better to use [method`Gdk`.Surface.get_scale] instead.
         *
         * @returns the scale
         */
        get_scale(): number;
        /**
         * Gets the internal scale factor that maps from monitor coordinates
         * to device pixels.
         *
         * On traditional systems this is 1, but on very high density outputs
         * it can be a higher value (often 2).
         *
         * This can be used if you want to create pixel based data for a
         * particular monitor, but most of the time you’re drawing to a surface
         * where it is better to use [method`Gdk`.Surface.get_scale_factor] instead.
         *
         * @returns the scale factor
         */
        get_scale_factor(): number;
        /**
         * Gets information about the layout of red, green and blue
         * primaries for pixels.
         *
         * @returns the subpixel layout
         */
        get_subpixel_layout(): Gdk.SubpixelLayout;
        /**
         * Gets the width in millimeters of the monitor.
         *
         * @returns the physical width of the monitor
         */
        get_width_mm(): number;
        /**
         * Returns %TRUE if the `monitor` object corresponds to a
         * physical monitor.
         *
         * The `monitor` becomes invalid when the physical monitor
         * is unplugged or removed.
         *
         * @returns %TRUE if the object corresponds to a physical monitor
         */
        is_valid(): boolean;
    }
    abstract class Seat extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Seat>;
        // Properties
        /**
         * `GdkDisplay` of this seat.
         */
        get display(): Gdk.Display;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Seat.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Seat.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.Seat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Seat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Seat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Seat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Seat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Seat.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Returns the capabilities this `GdkSeat` currently has.
         *
         * @returns the seat capabilities
         */
        get_capabilities(): Gdk.SeatCapabilities;
        /**
         * Returns the devices that match the given capabilities.
         *
         * @returns A list
         *   of `GdkDevices`. The list must be freed with g_list_free(),
         *   the elements are owned by GTK and must not be freed.
         * @param capabilities capabilities to get devices for
         */
        get_devices(capabilities: Gdk.SeatCapabilities | null): Gdk.Device[];
        /**
         * Returns the `GdkDisplay` this seat belongs to.
         *
         * @returns a `GdkDisplay`. This object
         *   is owned by GTK and must not be freed.
         */
        get_display(): Gdk.Display;
        /**
         * Returns the device that routes keyboard events.
         *
         * @returns a `GdkDevice` with keyboard
         *   capabilities. This object is owned by GTK and must not be freed.
         */
        get_keyboard(): Gdk.Device | null;
        /**
         * Returns the device that routes pointer events.
         *
         * @returns a `GdkDevice` with pointer
         *   capabilities. This object is owned by GTK and must not be freed.
         */
        get_pointer(): Gdk.Device | null;
        /**
         * Returns all `GdkDeviceTools` that are known to the application.
         *
         * @returns A list of tools. Free with g_list_free().
         */
        get_tools(): Gdk.DeviceTool[];
    }
    abstract class Snapshot extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Snapshot>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Snapshot.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Snapshot.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.Snapshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Snapshot.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Snapshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Snapshot.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Snapshot.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Snapshot.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    abstract class Surface extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Surface>;
        // Properties
        /**
         * The mouse pointer for the `GdkSurface`.
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * The `GdkDisplay` connection of the surface.
         */
        get display(): Gdk.Display;
        /**
         * The `GdkFrameClock` of the surface.
         */
        get frame_clock(): Gdk.FrameClock;
        /**
         * The `GdkFrameClock` of the surface.
         */
        get frameClock(): Gdk.FrameClock;
        /**
         * The height of the surface, in pixels.
         */
        get height(): number;
        /**
         * Whether the surface is mapped.
         */
        get mapped(): boolean;
        /**
         * The scale of the surface.
         */
        get scale(): number;
        /**
         * The scale factor of the surface.
         *
         * The scale factor is the next larger integer,
         * compared to [property`Gdk`.Surface:scale].
         */
        get scale_factor(): number;
        /**
         * The scale factor of the surface.
         *
         * The scale factor is the next larger integer,
         * compared to [property`Gdk`.Surface:scale].
         */
        get scaleFactor(): number;
        /**
         * The width of the surface in pixels.
         */
        get width(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Surface.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Surface.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_popup(parent: Gdk.Surface, autohide: boolean): Gdk.Surface;
        static new_toplevel(display: Gdk.Display): Gdk.Surface;
        // Signals
        connect<K extends keyof Gdk.Surface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Surface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Surface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Surface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Surface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Surface.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Emits a short beep associated to `surface`.
         *
         * If the display of `surface` does not support per-surface beeps,
         * emits a short beep on the display just as [method`Gdk`.Display.beep].
         */
        beep(): void;
        /**
         * Creates a new `GdkCairoContext` for rendering on `surface`.
         *
         * @returns the newly created `GdkCairoContext`
         */
        create_cairo_context(): Gdk.CairoContext;
        /**
         * Creates a new `GdkGLContext` for the `GdkSurface`.
         *
         * The context is disconnected from any particular surface or surface.
         * If the creation of the `GdkGLContext` failed, `error` will be set.
         * Before using the returned `GdkGLContext`, you will need to
         * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
         *
         * @returns the newly created `GdkGLContext`
         */
        create_gl_context(): Gdk.GLContext;
        /**
         * Create a new Cairo surface that is as compatible as possible with the
         * given `surface`.
         *
         * For example the new surface will have the same fallback resolution
         * and font options as `surface`. Generally, the new surface will also
         * use the same backend as `surface,` unless that is not possible for
         * some reason. The type of the returned surface may be examined with
         * cairo_surface_get_type().
         *
         * Initially the surface contents are all 0 (transparent if contents
         * have transparency, black otherwise.)
         *
         * This function always returns a valid pointer, but it will return a
         * pointer to a “nil” surface if `other` is already in an error state
         * or any other error occurs.
         *
         * @returns a pointer to the newly allocated surface. The caller
         *   owns the surface and should call cairo_surface_destroy() when done
         *   with it.
         * @param content the content for the new surface
         * @param width width of the new surface
         * @param height height of the new surface
         */
        create_similar_surface(content: cairo.Content | null, width: number, height: number): cairo.Surface;
        /**
         * Sets an error and returns %NULL.
         *
         * @returns %NULL
         */
        create_vulkan_context(): Gdk.VulkanContext;
        /**
         * Destroys the window system resources associated with `surface` and
         * decrements `surface'`s reference count.
         *
         * The window system resources for all children of `surface` are also
         * destroyed, but the children’s reference counts are not decremented.
         *
         * Note that a surface will not be destroyed automatically when its
         * reference count reaches zero. You must call this function yourself
         * before that happens.
         */
        destroy(): void;
        /**
         * Retrieves a `GdkCursor` pointer for the cursor currently set on the
         * `GdkSurface`.
         *
         * If the return value is %NULL then there is no custom cursor set on
         * the surface, and it is using the cursor for its parent surface.
         *
         * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
         *
         * @returns a `GdkCursor`
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Retrieves a `GdkCursor` pointer for the `device` currently set on the
         * specified `GdkSurface`.
         *
         * If the return value is %NULL then there is no custom cursor set on the
         * specified surface, and it is using the cursor for its parent surface.
         *
         * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
         *
         * @returns a `GdkCursor`
         * @param device a pointer `GdkDevice`
         */
        get_device_cursor(device: Gdk.Device): Gdk.Cursor | null;
        /**
         * Obtains the current device position and modifier state.
         *
         * The position is given in coordinates relative to the upper
         * left corner of `surface`.
         *
         * @returns %TRUE if the device is over the surface
         * @param device pointer `GdkDevice` to query to
         */
        get_device_position(device: Gdk.Device): [boolean, number, number, Gdk.ModifierType | null];
        /**
         * Gets the `GdkDisplay` associated with a `GdkSurface`.
         *
         * @returns the `GdkDisplay` associated with `surface`
         */
        get_display(): Gdk.Display;
        /**
         * Gets the frame clock for the surface.
         *
         * The frame clock for a surface never changes unless the surface is
         * reparented to a new toplevel surface.
         *
         * @returns the frame clock
         */
        get_frame_clock(): Gdk.FrameClock;
        /**
         * Returns the height of the given `surface`.
         *
         * Surface size is reported in ”application pixels”, not
         * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
         *
         * @returns The height of `surface`
         */
        get_height(): number;
        /**
         * Checks whether the surface has been mapped.
         *
         * A surface is mapped with [method`Gdk`.Toplevel.present]
         * or [method`Gdk`.Popup.present].
         *
         * @returns %TRUE if the surface is mapped
         */
        get_mapped(): boolean;
        /**
         * Returns the internal scale that maps from surface coordinates
         * to the actual device pixels.
         *
         * When the scale is bigger than 1, the windowing system prefers to get
         * buffers with a resolution that is bigger than the surface size (e.g.
         * to show the surface on a high-resolution display, or in a magnifier).
         *
         * Compare with [method`Gdk`.Surface.get_scale_factor], which returns the
         * next larger integer.
         *
         * The scale may change during the lifetime of the surface.
         *
         * @returns the scale
         */
        get_scale(): number;
        /**
         * Returns the internal scale factor that maps from surface coordinates
         * to the actual device pixels.
         *
         * On traditional systems this is 1, but on very high density outputs
         * this can be a higher value (often 2). A higher value means that drawing
         * is automatically scaled up to a higher resolution, so any code doing
         * drawing will automatically look nicer. However, if you are supplying
         * pixel-based data the scale value can be used to determine whether to
         * use a pixel resource with higher resolution data.
         *
         * The scale factor may change during the lifetime of the surface.
         *
         * @returns the scale factor
         */
        get_scale_factor(): number;
        /**
         * Returns the width of the given `surface`.
         *
         * Surface size is reported in ”application pixels”, not
         * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
         *
         * @returns The width of `surface`
         */
        get_width(): number;
        /**
         * Hide the surface.
         *
         * For toplevel surfaces, withdraws them, so they will no longer be
         * known to the window manager; for all surfaces, unmaps them, so
         * they won’t be displayed. Normally done automatically as
         * part of [gtk_widget_hide()](../gtk4/method.Widget.hide.html).
         */
        hide(): void;
        /**
         * Check to see if a surface is destroyed.
         *
         * @returns %TRUE if the surface is destroyed
         */
        is_destroyed(): boolean;
        /**
         * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
         * to be scheduled.
         *
         * This function is useful for implementations that track invalid
         * regions on their own.
         */
        queue_render(): void;
        /**
         * Request a layout phase from the surface's frame clock.
         *
         * See [method`Gdk`.FrameClock.request_phase].
         */
        request_layout(): void;
        /**
         * Sets the default mouse pointer for a `GdkSurface`.
         *
         * Passing %NULL for the `cursor` argument means that `surface` will use
         * the cursor of its parent surface. Most surfaces should use this default.
         * Note that `cursor` must be for the same display as `surface`.
         *
         * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
         * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
         *
         * @param cursor a `GdkCursor`
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
         *
         * Passing %NULL for the `cursor` argument means that `surface` will use the
         * cursor of its parent surface. Most surfaces should use this default.
         *
         * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
         * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
         *
         * @param device a pointer `GdkDevice`
         * @param cursor a `GdkCursor`
         */
        set_device_cursor(device: Gdk.Device, cursor: Gdk.Cursor): void;
        /**
         * Apply the region to the surface for the purpose of event
         * handling.
         *
         * Mouse events which happen while the pointer position corresponds
         * to an unset bit in the mask will be passed on the surface below
         * `surface`.
         *
         * An input region is typically used with RGBA surfaces. The alpha
         * channel of the surface defines which pixels are invisible and
         * allows for nicely antialiased borders, and the input region
         * controls where the surface is “clickable”.
         *
         * Use [method`Gdk`.Display.supports_input_shapes] to find out if
         * a particular backend supports input regions.
         *
         * @param region region of surface to be reactive
         */
        set_input_region(region: cairo.Region): void;
        /**
         * Marks a region of the `GdkSurface` as opaque.
         *
         * For optimisation purposes, compositing window managers may
         * like to not draw obscured regions of surfaces, or turn off blending
         * during for these regions. With RGB windows with no transparency,
         * this is just the shape of the window, but with ARGB32 windows, the
         * compositor does not know what regions of the window are transparent
         * or not.
         *
         * This function only works for toplevel surfaces.
         *
         * GTK will update this property automatically if the `surface` background
         * is opaque, as we know where the opaque regions are. If your surface
         * background is not opaque, please update this property in your
         * [GtkWidgetClass.css_changed](../gtk4/vfunc.Widget.css_changed.html) handler.
         *
         * @param region a region, or %NULL to make the entire
         *   surface opaque
         */
        set_opaque_region(region?: cairo.Region | null): void;
        /**
         * Translates coordinates between two surfaces.
         *
         * Note that this only works if `to` and `from` are popups or
         * transient-for to the same toplevel (directly or indirectly).
         *
         * @returns %TRUE if the coordinates were successfully translated
         * @param to the target surface
         * @param x coordinates to translate
         * @param y coordinates to translate
         */
        translate_coordinates(to: Gdk.Surface, x: number, y: number): [boolean, number, number];
    }
    abstract class Texture extends GObjectClasses.Object implements Gdk.Paintable, Gio.Icon, Gio.LoadableIcon {
        static '$gtype': GObject.GType<Texture>;
        // Properties
        /**
         * The color state of the texture.
         */
        get color_state(): Gdk.ColorState;
        /**
         * The color state of the texture.
         */
        get colorState(): Gdk.ColorState;
        /**
         * The height of the texture, in pixels.
         */
        get height(): number;
        /**
         * The width of the texture, in pixels.
         */
        get width(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.Texture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.Texture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_for_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Gdk.Texture;
        static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Gdk.Texture;
        static new_from_file(file: Gio.File): Gdk.Texture;
        static new_from_filename(path: string): Gdk.Texture;
        static new_from_resource(resource_path: string): Gdk.Texture;
        // Signals
        connect<K extends keyof Gdk.Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Texture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.Texture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.Texture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.Texture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Downloads the `texture` into local memory.
         *
         * This may be an expensive operation, as the actual texture data
         * may reside on a GPU or on a remote display server.
         *
         * The data format of the downloaded data is equivalent to
         * %CAIRO_FORMAT_ARGB32, so every downloaded pixel requires
         * 4 bytes of memory.
         *
         * Downloading a texture into a Cairo image surface:
         * ```c
         * surface = cairo_image_surface_create (CAIRO_FORMAT_ARGB32,
         *                                       gdk_texture_get_width (texture),
         *                                       gdk_texture_get_height (texture));
         * gdk_texture_download (texture,
         *                       cairo_image_surface_get_data (surface),
         *                       cairo_image_surface_get_stride (surface));
         * cairo_surface_mark_dirty (surface);
         * ```
         *
         * For more flexible download capabilities, see
         * [struct`Gdk`.TextureDownloader].
         *
         * @param data pointer to enough memory to be filled with the
         *   downloaded data of `texture`
         * @param stride rowstride in bytes
         */
        download(data: Uint8Array[] | string, stride: number): void;
        /**
         * Returns the color state associated with the texture.
         *
         * @returns the color state of the `GdkTexture`
         */
        get_color_state(): Gdk.ColorState;
        /**
         * Gets the memory format most closely associated with the data of
         * the texture.
         *
         * Note that it may not be an exact match for texture data
         * stored on the GPU or with compression.
         *
         * The format can give an indication about the bit depth and opacity
         * of the texture and is useful to determine the best format for
         * downloading the texture.
         *
         * @returns the preferred format for the texture's data
         */
        get_format(): Gdk.MemoryFormat;
        /**
         * Returns the height of the `texture,` in pixels.
         *
         * @returns the height of the `GdkTexture`
         */
        get_height(): number;
        /**
         * Returns the width of `texture,` in pixels.
         *
         * @returns the width of the `GdkTexture`
         */
        get_width(): number;
        /**
         * Store the given `texture` to the `filename` as a PNG file.
         *
         * This is a utility function intended for debugging and testing.
         * If you want more control over formats, proper error handling or
         * want to store to a [iface`Gio`.File] or other location, you might want to
         * use [method`Gdk`.Texture.save_to_png_bytes] or look into the
         * gdk-pixbuf library.
         *
         * @returns %TRUE if saving succeeded, %FALSE on failure.
         * @param filename the filename to store to
         */
        save_to_png(filename: string): boolean;
        /**
         * Store the given `texture` in memory as a PNG file.
         *
         * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
         *
         * If you want to serialize a texture, this is a convenient and
         * portable way to do that.
         *
         * If you need more control over the generated image, such as
         * attaching metadata, you should look into an image handling
         * library such as the gdk-pixbuf library.
         *
         * If you are dealing with high dynamic range float data, you
         * might also want to consider [method`Gdk`.Texture.save_to_tiff_bytes]
         * instead.
         *
         * @returns a newly allocated `GBytes` containing PNG data
         */
        save_to_png_bytes(): GLib.Bytes;
        /**
         * Store the given `texture` to the `filename` as a TIFF file.
         *
         * GTK will attempt to store data without loss.
         *
         * @returns %TRUE if saving succeeded, %FALSE on failure.
         * @param filename the filename to store to
         */
        save_to_tiff(filename: string): boolean;
        /**
         * Store the given `texture` in memory as a TIFF file.
         *
         * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
         *
         * This function is intended to store a representation of the
         * texture's data that is as accurate as possible. This is
         * particularly relevant when working with high dynamic range
         * images and floating-point texture data.
         *
         * If that is not your concern and you are interested in a
         * smaller size and a more portable format, you might want to
         * use [method`Gdk`.Texture.save_to_png_bytes].
         *
         * @returns a newly allocated `GBytes` containing TIFF data
         */
        save_to_tiff_bytes(): GLib.Bytes;
        // Inherited methods
        /**
         * Compute a concrete size for the `GdkPaintable`.
         *
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         *
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         *
         * @param specified_width the width `paintable` could be drawn into or
         *   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or
         *   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if
         *   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if
         *   no other constraints were given
         */
        compute_concrete_size(
            specified_width: number,
            specified_height: number,
            default_width: number,
            default_height: number,
        ): [number, number];
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         *
         * @returns An immutable paintable for the current
         *   contents of `paintable`
         */
        get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
         *
         * @returns The `GdkPaintableFlags` for this paintable
         */
        get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * Usually when a `paintable` returns nonzero values from
         * [method`Gdk`.Paintable.get_intrinsic_width] and
         * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         *
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         *
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their contents.
         *
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
         * it must not call this function.
         */
        invalidate_contents(): void;
        /**
         * Called by implementations of `GdkPaintable` to invalidate their size.
         *
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         *
         * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
         * signal.
         *
         * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
         * it must not call this function.
         */
        invalidate_size(): void;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         *
         * @param snapshot a `GdkSnapshot` to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         *
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         *
         * If the `paintable` is already immutable, it will return itself.
         */
        vfunc_get_current_image(): Gdk.Paintable;
        /**
         * Get flags for the paintable.
         *
         * This is oftentimes useful for optimizations.
         *
         * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
         */
        vfunc_get_flags(): Gdk.PaintableFlags;
        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         *
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * Usually when a `paintable` returns nonzero values from
         * [method`Gdk`.Paintable.get_intrinsic_width] and
         * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
         * should conform to those values, though that is not required.
         *
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         */
        vfunc_get_intrinsic_aspect_ratio(): number;
        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         */
        vfunc_get_intrinsic_height(): number;
        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         *
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         *
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to [method`Gdk`.Paintable.snapshot].
         *
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         */
        vfunc_get_intrinsic_width(): number;
        /**
         * Snapshots the given paintable with the given `width` and `height`.
         *
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         *
         * @param snapshot a `GdkSnapshot` to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        vfunc_snapshot(snapshot: Gdk.Snapshot, width: number, height: number): void;
        /**
         * Checks if two icons are equal.
         *
         * @returns %TRUE if `icon1` is equal to `icon2`. %FALSE otherwise.
         * @param _icon2 pointer to the second #GIcon.
         */
        equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         *
         * @returns a #guint containing a hash for the `icon,` suitable for
         *   use in a #GHashTable or similar data structure.
         */
        hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         *
         * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
         */
        serialize(): GLib.Variant | null;
        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use g_icon_new_for_string() to
         * get `icon` back from the returned string.
         *
         * The encoding of the returned string is proprietary to #GIcon except
         * in the following two cases
         *
         * - If `icon` is a #GFileIcon, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the #GFile for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of g_file_get_uri()
         *   (such as `sftp://path/to/my%20icon.png`).
         *
         * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         *
         * @returns An allocated NUL-terminated UTF8 string or
         * %NULL if `icon` can't be serialized. Use g_free() to free.
         */
        to_string(): string | null;
        /**
         * Checks if two icons are equal.
         *
         * @param _icon2 pointer to the second #GIcon.
         */
        vfunc_equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         */
        vfunc_hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         */
        vfunc_serialize(): GLib.Variant | null;
        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when g_icon_new_for_string() is called.
         */
        vfunc_to_tokens(): [boolean, string[], number];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        load_async(size: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream, string]> | void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param res a #GAsyncResult.
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        vfunc_load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @param res a #GAsyncResult.
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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
    abstract class VulkanContext extends DrawContext implements Gio.Initable {
        static '$gtype': GObject.GType<VulkanContext>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gdk.VulkanContext.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gdk.VulkanContext.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gdk.VulkanContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.VulkanContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gdk.VulkanContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gdk.VulkanContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gdk.VulkanContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gdk.VulkanContext.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
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
}
export default classes;
