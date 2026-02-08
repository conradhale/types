/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import '@girs/gjs';
import type classes from './gnomedesktop-4.0-classes.d.ts';
export { classes as GnomeDesktopClasses };
export namespace GnomeDesktop {
    /**
     * GnomeDesktop-4.0
     */
    export namespace DesktopThumbnailSize {
        export const $gtype: GObject.GType<DesktopThumbnailSize>;
    }
    enum DesktopThumbnailSize {
        NORMAL,
        LARGE = 1,
        XLARGE = 2,
        XXLARGE = 3,
    }
    const DESKTOP_PLATFORM_VERSION: number;
    /**
     * Returns whether the thumbnail has the correct uri and mtime embedded in the
     * png options. This function is threadsafe and does no blocking I/O.
     *
     * @returns TRUE if the thumbnail has the right `uri` and `mtime`
     * @param pixbuf an loaded thumbnail #GdkPixbuf
     * @param uri a uri
     * @param mtime the mtime
     */
    function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean;
    /**
     * Returns the filename that a thumbnail of size `size` for `uri` would have.
     * This function is threadsafe and does no blocking I/O.
     *
     * @returns an absolute filename
     * @param uri an uri
     * @param size a thumbnail size
     */
    function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize | null): string;
    /**
     * Gets all locales.
     *
     * @returns a newly allocated %NULL-terminated string array containing the
     *   all locales. Free with g_strfreev().
     */
    function get_all_locales(): string[];
    /**
     * Gets the country name for `code`. If `translation` is provided the
     * returned string is translated accordingly.
     *
     * @returns the country name. Caller takes
     * ownership.
     * @param code an ISO 3166 code string
     * @param translation a locale string
     */
    function get_country_from_code(code: string, translation?: string | null): string;
    /**
     * Gets the country description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     *
     * @returns the country description. Caller
     * takes ownership.
     * @param locale a locale string
     * @param translation a locale string
     */
    function get_country_from_locale(locale: string, translation?: string | null): string;
    /**
     * Gets the default input source's type and identifier for a given
     * locale.
     *
     * @returns %TRUE if a input source exists or %FALSE otherwise.
     * @param locale a locale string
     */
    function get_input_source_from_locale(locale: string): [boolean, string, string];
    /**
     * Gets the language name for `code`. If `translation` is provided the
     * returned string is translated accordingly.
     *
     * @returns the language name. Caller takes
     * ownership.
     * @param code an ISO 639 code string
     * @param translation a locale string
     */
    function get_language_from_code(code: string, translation?: string | null): string;
    /**
     * Gets the language description for `locale`. If `translation` is
     * provided the returned string is translated accordingly.
     *
     * @returns the language description. Caller
     * takes ownership.
     * @param locale a locale string
     * @param translation a locale string
     */
    function get_language_from_locale(locale: string, translation?: string | null): string;
    /**
     * Returns an integer with the major version of GNOME. Useful for
     * dynamic languages like Javascript or Python (static languages like
     * C should use %GNOME_DESKTOP_PLATFORM_VERSION). If this
     * function doesn't exist, it can be presumed that the GNOME platform
     * version is 42 or previous.
     *
     * @returns an integer with the major version of GNOME.
     */
    function get_platform_version(): number;
    /**
     * Gets a translation of the raw `modifier` string. If `translation`
     * is provided the returned string is translated accordingly.
     *
     * @returns the translated modifier string.
     * Caller takes ownership.
     * @param modifier the modifier part of a locale name
     * @param translation a locale string
     */
    function get_translated_modifier(modifier: string, translation?: string | null): string;
    /**
     * Returns %TRUE if there are translations for language `code`.
     *
     * @returns %TRUE if there are translations for language `code`.
     * @param code an ISO 639 code string
     */
    function language_has_translations(code: string): boolean;
    /**
     * Gets the normalized locale string in the form
     * [language[_country][.codeset][`modifier]`] for `name`.
     *
     * @returns normalized locale string. Caller
     * takes ownership.
     * @param locale a locale string
     */
    function normalize_locale(locale: string): string;
    /**
     * Extracts the various components of a locale string in XPG format.
     * ([language[_country][.codeset][`modifier]`]). See
     * http://en.wikipedia.org/wiki/Locale.
     *
     * @returns %TRUE if parsing was successful.
     * @param locale a locale string
     */
    function parse_locale(locale: string): [boolean, string, string, string, string];
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID or the executable in all
     * other cases. If a desktop-id is passed then the .desktop suffix will be
     * stripped.
     *
     * It is advisable to use this function every time where the started application
     * can be considered reasonably independent of the launching application. Placing
     * it in a scope creates proper separation between the programs rather than being
     * considered a single entity by systemd.
     *
     * It is always safe to call this function. Note that a successful return code
     * does not imply that a unit has been created. It solely means that no error
     * condition was hit sending the request.
     *
     * If `connection` is %NULL then g_dbus_get() will be called internally.
     *
     * Note that most callers will not need to handle errors. As such, it is normal
     * to pass a %NULL `callback`.
     *
     * @param name Name for the application
     * @param pid The PID of the application
     * @param description A description to use for the unit, or %NULL
     * @param connection An #GDBusConnection to the session bus, or %NULL
     * @param cancellable #GCancellable to use
     */
    function start_systemd_scope(
        name: string,
        pid: number,
        description?: string | null,
        connection?: Gio.DBusConnection | null,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<boolean>;
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID or the executable in all
     * other cases. If a desktop-id is passed then the .desktop suffix will be
     * stripped.
     *
     * It is advisable to use this function every time where the started application
     * can be considered reasonably independent of the launching application. Placing
     * it in a scope creates proper separation between the programs rather than being
     * considered a single entity by systemd.
     *
     * It is always safe to call this function. Note that a successful return code
     * does not imply that a unit has been created. It solely means that no error
     * condition was hit sending the request.
     *
     * If `connection` is %NULL then g_dbus_get() will be called internally.
     *
     * Note that most callers will not need to handle errors. As such, it is normal
     * to pass a %NULL `callback`.
     *
     * @param name Name for the application
     * @param pid The PID of the application
     * @param description A description to use for the unit, or %NULL
     * @param connection An #GDBusConnection to the session bus, or %NULL
     * @param cancellable #GCancellable to use
     * @param callback Callback to call when the operation is done
     */
    function start_systemd_scope(
        name: string,
        pid: number,
        description: string | null,
        connection: Gio.DBusConnection | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    /**
     * If the current process is running inside a user systemd instance, then move
     * the launched PID into a transient scope. The given `name` will be used to
     * create a unit name. It should be the application ID or the executable in all
     * other cases. If a desktop-id is passed then the .desktop suffix will be
     * stripped.
     *
     * It is advisable to use this function every time where the started application
     * can be considered reasonably independent of the launching application. Placing
     * it in a scope creates proper separation between the programs rather than being
     * considered a single entity by systemd.
     *
     * It is always safe to call this function. Note that a successful return code
     * does not imply that a unit has been created. It solely means that no error
     * condition was hit sending the request.
     *
     * If `connection` is %NULL then g_dbus_get() will be called internally.
     *
     * Note that most callers will not need to handle errors. As such, it is normal
     * to pass a %NULL `callback`.
     *
     * @param name Name for the application
     * @param pid The PID of the application
     * @param description A description to use for the unit, or %NULL
     * @param connection An #GDBusConnection to the session bus, or %NULL
     * @param cancellable #GCancellable to use
     * @param callback Callback to call when the operation is done
     */
    function start_systemd_scope(
        name: string,
        pid: number,
        description?: string | null,
        connection?: Gio.DBusConnection | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<boolean> | void;
    /**
     * Finish an asynchronous operation to create a transient scope that was
     * started with gnome_start_systemd_scope().
     *
     * Note that a successful return code does not imply that a unit has been
     * created. It solely means that no error condition was hit sending the request.
     *
     * @returns %FALSE on error, %TRUE otherwise
     * @param res A #GAsyncResult
     */
    function start_systemd_scope_finish(res: Gio.AsyncResult): boolean;
    interface IdleMonitorWatchFunc {
        (monitor: IdleMonitor, id: number): void;
    }
    namespace DesktopThumbnailFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type DesktopThumbnailFactory = (typeof classes.DesktopThumbnailFactory)['prototype'];
    const DesktopThumbnailFactory: typeof classes.DesktopThumbnailFactory &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GnomeDesktop.DesktopThumbnailFactory.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DesktopThumbnailFactory.SignalSignatures> & classes.DesktopThumbnailFactory);
    namespace IdleMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {}
    }
    type IdleMonitor = (typeof classes.IdleMonitor)['prototype'];
    const IdleMonitor: typeof classes.IdleMonitor &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GnomeDesktop.IdleMonitor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, IdleMonitor.SignalSignatures> & classes.IdleMonitor);
    namespace PnpIds {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type PnpIds = (typeof classes.PnpIds)['prototype'];
    const PnpIds: typeof classes.PnpIds &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GnomeDesktop.PnpIds.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PnpIds.SignalSignatures> & classes.PnpIds);
    namespace WallClock {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::clock'(pspec: GObject.ParamSpec): void;
            'notify::force-seconds'(pspec: GObject.ParamSpec): void;
            'notify::time-only'(pspec: GObject.ParamSpec): void;
            'notify::timezone'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * A formatted string representing the current clock display.
             */
            clock: string;
            /**
             * If %TRUE, the formatted clock will always have seconds precision and the
             * 'clock' property will always be updated every second, irrespective of
             * system configuration.
             */
            force_seconds: boolean;
            /**
             * If %TRUE, the formatted clock will always have seconds precision and the
             * 'clock' property will always be updated every second, irrespective of
             * system configuration.
             */
            forceSeconds: boolean;
            /**
             * If %TRUE, the formatted clock will never include a date or the
             * day of the week, irrespective of configuration.
             */
            time_only: boolean;
            /**
             * If %TRUE, the formatted clock will never include a date or the
             * day of the week, irrespective of configuration.
             */
            timeOnly: boolean;
            /**
             * The timezone used for this clock
             */
            timezone: GLib.TimeZone;
        }
    }
    type WallClock = (typeof classes.WallClock)['prototype'];
    const WallClock: typeof classes.WallClock &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GnomeDesktop.WallClock.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WallClock.SignalSignatures> & classes.WallClock);
    namespace XkbInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'layouts-changed'(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type XkbInfo = (typeof classes.XkbInfo)['prototype'];
    const XkbInfo: typeof classes.XkbInfo &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GnomeDesktop.XkbInfo.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, XkbInfo.SignalSignatures> & classes.XkbInfo);
    export type DesktopThumbnailFactoryClass = typeof DesktopThumbnailFactory;
    abstract class DesktopThumbnailFactoryPrivate {
        static '$gtype': GObject.GType<DesktopThumbnailFactoryPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type IdleMonitorClass = typeof IdleMonitor;
    abstract class IdleMonitorPrivate {
        static '$gtype': GObject.GType<IdleMonitorPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type PnpIdsClass = typeof PnpIds;
    abstract class PnpIdsPrivate {
        static '$gtype': GObject.GType<PnpIdsPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type WallClockClass = typeof WallClock;
    abstract class WallClockPrivate {
        static '$gtype': GObject.GType<WallClockPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type XkbInfoClass = typeof XkbInfo;
    abstract class XkbInfoPrivate {
        static '$gtype': GObject.GType<XkbInfoPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
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
export default GnomeDesktop;
