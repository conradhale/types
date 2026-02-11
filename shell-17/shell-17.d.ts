/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import St from '@girs/st-17';
import Meta from '@girs/meta-17';
import xlib from '@girs/xlib-2.0';
import xfixes from '@girs/xfixes-4.0';
import Mtk from '@girs/mtk-17';
import Graphene from '@girs/graphene-1.0';
import GObject from '@girs/gobject-2.0';
import GLib from '@girs/glib-2.0';
import Gio from '@girs/gio-2.0';
import GModule from '@girs/gmodule-2.0';
import GDesktopEnums from '@girs/gdesktopenums-3.0';
import Cogl from '@girs/cogl-17';
import GL from '@girs/gl-1.0';
import Clutter from '@girs/clutter-17';
import Pango from '@girs/pango-1.0';
import cairo from '@girs/cairo-1.0';
import HarfBuzz from '@girs/harfbuzz-0.0';
import freetype2 from '@girs/freetype2-2.0';
import Atk from '@girs/atk-1.0';
import GdkPixbuf from '@girs/gdkpixbuf-2.0';
import PolkitAgent from '@girs/polkitagent-1.0';
import Polkit from '@girs/polkit-1.0';
import NM from '@girs/nm-1.0';
import Gvc from '@girs/gvc-1.0';
import GioUnix from '@girs/giounix-2.0';
import Gcr from '@girs/gcr-4';
import Gck from '@girs/gck-2';
import '@girs/gjs';
import type classes from './shell-17-classes.d.ts';
export { classes as ShellClasses };
export namespace Shell {
    /**
     * Shell-17
     */
    export namespace AppLaunchGpu {
        export const $gtype: GObject.GType<AppLaunchGpu>;
    }
    enum AppLaunchGpu {
        APP_PREF,
        DISCRETE = 1,
        DEFAULT = 2,
    }
    export namespace AppState {
        export const $gtype: GObject.GType<AppState>;
    }
    enum AppState {
        STOPPED,
        STARTING = 1,
        RUNNING = 2,
    }
    /**
     * The mode of blurring of the effect.
     */
    export namespace BlurMode {
        export const $gtype: GObject.GType<BlurMode>;
    }
    enum BlurMode {
        /**
         * blur the actor contents, and its children
         */
        ACTOR,
        /**
         * blur what's beneath the actor
         */
        BACKGROUND = 1,
    }
    export namespace NetworkAgentResponse {
        export const $gtype: GObject.GType<NetworkAgentResponse>;
    }
    enum NetworkAgentResponse {
        CONFIRMED,
        USER_CANCELED = 1,
        INTERNAL_ERROR = 2,
    }
    const KEYRING_SK_TAG: string;
    const KEYRING_SN_TAG: string;
    const KEYRING_UUID_TAG: string;
    /**
     * Synchronously load the contents of a file as a NUL terminated
     * string, validating it as UTF-8.  Embedded NUL characters count as
     * invalid content.
     *
     * @returns File contents
     * @param path UTF-8 encoded filename path
     */
    function get_file_contents_utf8_sync(path: string): string;
    /**
     * Creates a #GSource which is dispatched every time the system realtime clock
     * changes relative to the monotonic clock.
     *
     * This typically happens after NTP synchronisation.
     *
     * On error, a #GFileError will be returned. This happens if a timerfd cannot be
     * created.
     *
     * Any callback attached to the returned #GSource must have type
     * #GSourceFunc.
     *
     * @returns the newly created #GSource, or %NULL on error
     */
    function time_change_source_new(): GLib.Source;
    /**
     * Walk over all open file descriptors. Check them for the FD_CLOEXEC flag.
     * If this flag is not set, log the offending file descriptor number.
     *
     * It is important that gnome-shell's file descriptors are all marked CLOEXEC,
     * so that the shell's open file descriptors are not passed to child processes
     * that we launch.
     */
    function util_check_cloexec_fds(): void;
    /**
     * Workaround for non-introspectability of gdk_pixbuf_from_data().
     *
     * @param data
     * @param colorspace
     * @param has_alpha
     * @param bits_per_sample
     * @param width
     * @param height
     * @param rowstride
     */
    function util_create_pixbuf_from_data(
        data: Uint8Array[] | string,
        colorspace: GdkPixbuf.Colorspace | null,
        has_alpha: boolean,
        bits_per_sample: number,
        width: number,
        height: number,
        rowstride: number,
    ): GdkPixbuf.Pixbuf;
    /**
     * Attempts to translate the folder `name` using translations provided
     * by .directory files.
     *
     * @returns a translated string or %NULL
     * @param name the untranslated folder name
     */
    function util_get_translated_folder_name(name: string): string | null;
    /**
     * A wrapper around getuid() so that it can be used from JavaScript. This
     * function will always succeed.
     *
     * @returns the real user ID of the calling process
     */
    function util_get_uid(): number;
    /**
     * Gets the first week day for the current locale, expressed as a
     * number in the range 0..6, representing week days from Sunday to
     * Saturday.
     *
     * @returns A number representing the first week day for the current
     *          locale
     */
    function util_get_week_start(): number;
    /**
     * If the corresponding X11 display provides the passed extension, return %TRUE,
     * otherwise %FALSE. If there is no X11 display, %FALSE is passed.
     *
     * @param display A #MetaDisplay
     * @param extension An X11 extension
     */
    function util_has_x11_display_extension(display: Meta.Display, extension: string): boolean;
    /**
     * A wrapper around g_regex_escape_string() that takes its argument as
     * \0-terminated string rather than a byte-array that confuses gjs.
     *
     * @returns `str` with all regex-special characters escaped
     * @param str a UTF-8 string to escape
     */
    function util_regex_escape(str: string): string;
    function util_sd_notify(): void;
    /**
     * If `hidden` is %TRUE, hide `actor` from pick even with a mode of
     * %CLUTTER_PICK_ALL; if `hidden` is %FALSE, unhide `actor`.
     *
     * @param actor A #ClutterActor
     * @param hidden Whether `actor` should be hidden from pick
     */
    function util_set_hidden_from_pick(actor: Clutter.Actor, hidden: boolean): void;
    /**
     * A wrapper around g_spawn_async() with async-signal-safe implementation of
     * #GSpawnChildSetupFunc to launch a child program asynchronously resetting the
     * rlimit nofile on child setup.
     *
     * @returns the PID of the child on success, 0 if error is set
     * @param working_directory child's current working
     *     directory, or %NULL to inherit parent's
     * @param argv child's argument vector
     * @param envp child's environment, or %NULL to inherit parent's
     * @param flags flags from #GSpawnFlags
     */
    function util_spawn_async(
        working_directory: string | null,
        argv: string[],
        envp: string[] | null,
        flags: GLib.SpawnFlags | null,
    ): GLib.Pid;
    /**
     * A wrapper around g_spawn_async_with_fds() with async-signal-safe
     * implementation of #GSpawnChildSetupFunc to launch a child program
     * asynchronously resetting the rlimit nofile on child setup.
     *
     * @returns the PID of the child on success, 0 if error is set
     * @param working_directory child's current working
     *     directory, or %NULL to inherit parent's
     * @param argv child's argument vector
     * @param envp child's environment, or %NULL to inherit parent's
     * @param flags flags from #GSpawnFlags
     * @param stdin_fd file descriptor to use for child's stdin, or `-1`
     * @param stdout_fd file descriptor to use for child's stdout, or `-1`
     * @param stderr_fd file descriptor to use for child's stderr, or `-1`
     */
    function util_spawn_async_with_fds(
        working_directory: string | null,
        argv: string[],
        envp: string[] | null,
        flags: GLib.SpawnFlags | null,
        stdin_fd: number,
        stdout_fd: number,
        stderr_fd: number,
    ): GLib.Pid;
    /**
     * A wrapper around g_spawn_async_with_pipes() with async-signal-safe
     * implementation of #GSpawnChildSetupFunc to launch a child program
     * asynchronously resetting the rlimit nofile on child setup.
     *
     * @returns the PID of the child on success, 0 if error is set
     * @param working_directory child's current working
     *     directory, or %NULL to inherit parent's
     * @param argv child's argument vector
     * @param envp child's environment, or %NULL to inherit parent's
     * @param flags flags from #GSpawnFlags
     */
    function util_spawn_async_with_pipes(
        working_directory: string | null,
        argv: string[],
        envp: string[] | null,
        flags: GLib.SpawnFlags | null,
    ): [GLib.Pid, number, number, number];
    /**
     * A wrapper around g_spawn_async_with_pipes_and_fds() with async-signal-safe
     * implementation of #GSpawnChildSetupFunc to launch a child program
     * asynchronously resetting the rlimit nofile on child setup.
     *
     * @returns the PID of the child on success, 0 if error is set
     * @param working_directory child's current working
     *     directory, or %NULL to inherit parent's, in the GLib file name encoding
     * @param argv child's argument
     *     vector, in the GLib file name encoding; it must be non-empty and %NULL-terminated
     * @param envp child's environment, or %NULL to inherit parent's, in the GLib file
     *     name encoding
     * @param flags flags from #GSpawnFlags
     * @param stdin_fd file descriptor to use for child's stdin, or `-1`
     * @param stdout_fd file descriptor to use for child's stdout, or `-1`
     * @param stderr_fd file descriptor to use for child's stderr, or `-1`
     * @param source_fds array of FDs from the parent
     *    process to make available in the child process
     * @param target_fds array of FDs to remap
     *    `source_fds` to in the child process
     */
    function util_spawn_async_with_pipes_and_fds(
        working_directory: string | null,
        argv: string[],
        envp: string[] | null,
        flags: GLib.SpawnFlags | null,
        stdin_fd: number,
        stdout_fd: number,
        stderr_fd: number,
        source_fds: number[] | null,
        target_fds: number[] | null,
    ): [GLib.Pid, number, number, number];
    function util_start_systemd_unit(
        unit: string,
        mode: string,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<boolean>;
    function util_start_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    function util_start_systemd_unit(
        unit: string,
        mode: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<boolean> | void;
    function util_start_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<boolean>;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<boolean> | void;
    function util_stop_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_systemd_unit_exists(unit: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
    function util_systemd_unit_exists(
        unit: string,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    function util_systemd_unit_exists(
        unit: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<boolean> | void;
    function util_systemd_unit_exists_finish(res: Gio.AsyncResult): boolean;
    function util_touch_file_async(file: Gio.File): globalThis.Promise<boolean>;
    function util_touch_file_async(file: Gio.File, callback: Gio.AsyncReadyCallback<Gio.File> | null): void;
    function util_touch_file_async(
        file: Gio.File,
        callback?: Gio.AsyncReadyCallback<Gio.File> | null,
    ): globalThis.Promise<boolean> | void;
    function util_touch_file_finish(file: Gio.File, res: Gio.AsyncResult): boolean;
    /**
     * Translate `str` according to the locale defined by LC_TIME; unlike
     * dcgettext(), the translations is still taken from the LC_MESSAGES
     * catalogue and not the LC_TIME one.
     *
     * @returns the translated string
     * @param str String to translate
     */
    function util_translate_time_string(str: string): string;
    /**
     * Implements libc standard WIFEXITED, that cannot be used JS
     * code.
     *
     * @returns TRUE if the process exited normally, FALSE otherwise
     * @param status the status returned by wait() or waitpid()
     */
    function util_wifexited(status: number): [boolean, number];
    /**
     * Write a string to a GOutputStream as UTF-8. This is a workaround
     * for not having binary buffers in GJS.
     *
     * @returns %TRUE if write succeeded
     * @param stream a #GOutputStream
     * @param str a UTF-8 string to write to `stream`
     */
    function write_string_to_stream(stream: Gio.OutputStream, str: string): boolean;
    interface LeisureFunction {
        (data?: any | null): void;
    }
    interface PerfReplayFunction {
        (time: number, name: string, signature: string, arg: GObject.Value | any): void;
    }
    interface PerfStatisticsCallback {
        (perf_log: PerfLog, data?: any | null): void;
    }
    /**
     * Controls in which GNOME Shell states an action (like keybindings and gestures)
     * should be handled.
     */
    export namespace ActionMode {
        export const $gtype: GObject.GType<ActionMode>;
    }
    enum ActionMode {
        /**
         * block action
         */
        NONE,
        /**
         * allow action when in window mode,
         *     e.g. when the focus is in an application window
         */
        NORMAL = 1,
        /**
         * allow action while the overview
         *     is active
         */
        OVERVIEW = 2,
        /**
         * allow action when the screen
         *     is locked, e.g. when the screen shield is shown
         */
        LOCK_SCREEN = 4,
        /**
         * allow action in the unlock
         *     dialog
         */
        UNLOCK_SCREEN = 8,
        /**
         * allow action in the login screen
         */
        LOGIN_SCREEN = 16,
        /**
         * allow action when a system modal
         *     dialog (e.g. authentication or session dialogs) is open
         */
        SYSTEM_MODAL = 32,
        /**
         * allow action in looking glass
         */
        LOOKING_GLASS = 64,
        /**
         * allow action while a shell menu is open
         */
        POPUP = 128,
        /**
         * always allow action
         */
        ALL = -1,
    }
    namespace App {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'windows-changed'(): void;
            'notify::action-group'(pspec: GObject.ParamSpec): void;
            'notify::app-info'(pspec: GObject.ParamSpec): void;
            'notify::busy'(pspec: GObject.ParamSpec): void;
            'notify::icon'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The #GDBusActionGroup associated with this ShellApp, if any. See the
             * documentation of #GApplication and #GActionGroup for details.
             */
            action_group: Gio.ActionGroup;
            /**
             * The #GDBusActionGroup associated with this ShellApp, if any. See the
             * documentation of #GApplication and #GActionGroup for details.
             */
            actionGroup: Gio.ActionGroup;
            /**
             * The #GDesktopAppInfo associated with this ShellApp, if any.
             */
            app_info: GioUnix.DesktopAppInfo;
            /**
             * The #GDesktopAppInfo associated with this ShellApp, if any.
             */
            appInfo: GioUnix.DesktopAppInfo;
            /**
             * Whether the application has marked itself as busy.
             */
            busy: boolean;
            /**
             * The #GIcon representing this ShellApp
             */
            icon: Gio.Icon;
            /**
             * The id of this application (a desktop filename, or a special string
             * like window:0xabcd1234)
             */
            id: string;
            /**
             * The high-level state of the application, effectively whether it's
             * running or not, or transitioning between those states.
             */
            state: AppState;
        }
    }
    type App = (typeof classes.App)['prototype'];
    const App: typeof classes.App &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.App.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, App.SignalSignatures> & classes.App);
    namespace AppSystem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'app-state-changed'(arg0: App): void;
            'installed-changed'(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type AppSystem = (typeof classes.AppSystem)['prototype'];
    const AppSystem: typeof classes.AppSystem &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.AppSystem.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, AppSystem.SignalSignatures> & classes.AppSystem);
    namespace AppUsage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type AppUsage = (typeof classes.AppUsage)['prototype'];
    const AppUsage: typeof classes.AppUsage &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.AppUsage.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, AppUsage.SignalSignatures> & classes.AppUsage);
    namespace BlurEffect {
        // Signal signatures
        interface SignalSignatures extends Clutter.Effect.SignalSignatures {
            'notify::brightness'(pspec: GObject.ParamSpec): void;
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::radius'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Clutter.Effect.ConstructorProps {
            brightness: number;
            mode: BlurMode;
            radius: number;
        }
    }
    type BlurEffect = (typeof classes.BlurEffect)['prototype'];
    const BlurEffect: typeof classes.BlurEffect &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.BlurEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BlurEffect.SignalSignatures> & classes.BlurEffect);
    namespace CameraMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::cameras-in-use'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cameras_in_use: boolean;
            camerasInUse: boolean;
        }
    }
    type CameraMonitor = (typeof classes.CameraMonitor)['prototype'];
    const CameraMonitor: typeof classes.CameraMonitor &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.CameraMonitor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, CameraMonitor.SignalSignatures> & classes.CameraMonitor);
    namespace EdgeDragGesture {
        // Signal signatures
        interface SignalSignatures extends Clutter.Gesture.SignalSignatures {
            progress(arg0: number): void;
            'notify::side'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Clutter.Gesture.ConstructorProps {
            /**
             * Edge that the gesture may start at. Defaults to the top edge.
             */
            side: Clutter.GestureState;
        }
    }
    type EdgeDragGesture = (typeof classes.EdgeDragGesture)['prototype'];
    const EdgeDragGesture: typeof classes.EdgeDragGesture &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.EdgeDragGesture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, EdgeDragGesture.SignalSignatures> & classes.EdgeDragGesture);
    namespace GLSLEffect {
        // Signal signatures
        interface SignalSignatures extends Clutter.OffscreenEffect.SignalSignatures {
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Clutter.OffscreenEffect.ConstructorProps {}
    }
    type GLSLEffect = (typeof classes.GLSLEffect)['prototype'];
    const GLSLEffect: typeof classes.GLSLEffect &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.GLSLEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, GLSLEffect.SignalSignatures> & classes.GLSLEffect);
    namespace Global {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'locate-pointer'(): void;
            'notify-error'(arg0: string, arg1: string): void;
            shutdown(): void;
            'notify::automation-script'(pspec: GObject.ParamSpec): void;
            'notify::backend'(pspec: GObject.ParamSpec): void;
            'notify::compositor'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::datadir'(pspec: GObject.ParamSpec): void;
            'notify::display'(pspec: GObject.ParamSpec): void;
            'notify::focus-manager'(pspec: GObject.ParamSpec): void;
            'notify::force-animations'(pspec: GObject.ParamSpec): void;
            'notify::frame-finish-timestamp'(pspec: GObject.ParamSpec): void;
            'notify::frame-timestamps'(pspec: GObject.ParamSpec): void;
            'notify::screen-height'(pspec: GObject.ParamSpec): void;
            'notify::screen-width'(pspec: GObject.ParamSpec): void;
            'notify::session-mode'(pspec: GObject.ParamSpec): void;
            'notify::settings'(pspec: GObject.ParamSpec): void;
            'notify::stage'(pspec: GObject.ParamSpec): void;
            'notify::switcheroo-control'(pspec: GObject.ParamSpec): void;
            'notify::top-window-group'(pspec: GObject.ParamSpec): void;
            'notify::userdatadir'(pspec: GObject.ParamSpec): void;
            'notify::window-group'(pspec: GObject.ParamSpec): void;
            'notify::window-manager'(pspec: GObject.ParamSpec): void;
            'notify::workspace-manager'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            automation_script: Gio.File;
            automationScript: Gio.File;
            backend: Meta.Backend;
            compositor: Meta.Compositor;
            context: Meta.Context;
            datadir: string;
            display: Meta.Display;
            focus_manager: St.FocusManager;
            focusManager: St.FocusManager;
            force_animations: boolean;
            forceAnimations: boolean;
            frame_finish_timestamp: boolean;
            frameFinishTimestamp: boolean;
            frame_timestamps: boolean;
            frameTimestamps: boolean;
            screen_height: number;
            screenHeight: number;
            screen_width: number;
            screenWidth: number;
            session_mode: string;
            sessionMode: string;
            settings: Gio.Settings;
            stage: Clutter.Stage;
            switcheroo_control: Gio.DBusProxy;
            switcherooControl: Gio.DBusProxy;
            top_window_group: Clutter.Actor;
            topWindowGroup: Clutter.Actor;
            userdatadir: string;
            window_group: Clutter.Actor;
            windowGroup: Clutter.Actor;
            window_manager: WM;
            windowManager: WM;
            workspace_manager: Meta.WorkspaceManager;
            workspaceManager: Meta.WorkspaceManager;
        }
    }
    type Global = (typeof classes.Global)['prototype'];
    const Global: typeof classes.Global &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.Global.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Global.SignalSignatures> & classes.Global);
    namespace InvertLightnessEffect {
        // Signal signatures
        interface SignalSignatures extends Clutter.OffscreenEffect.SignalSignatures {
            'notify::actor'(pspec: GObject.ParamSpec): void;
            'notify::enabled'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Clutter.OffscreenEffect.ConstructorProps {}
    }
    type InvertLightnessEffect = (typeof classes.InvertLightnessEffect)['prototype'];
    const InvertLightnessEffect: typeof classes.InvertLightnessEffect &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.InvertLightnessEffect.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, InvertLightnessEffect.SignalSignatures> & classes.InvertLightnessEffect);
    namespace KeyringPrompt {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'show-confirm'(): void;
            'show-password'(): void;
            'notify::choice-visible'(pspec: GObject.ParamSpec): void;
            'notify::confirm-actor'(pspec: GObject.ParamSpec): void;
            'notify::confirm-visible'(pspec: GObject.ParamSpec): void;
            'notify::password-actor'(pspec: GObject.ParamSpec): void;
            'notify::password-visible'(pspec: GObject.ParamSpec): void;
            'notify::warning-visible'(pspec: GObject.ParamSpec): void;
            'notify::caller-window'(pspec: GObject.ParamSpec): void;
            'notify::cancel-label'(pspec: GObject.ParamSpec): void;
            'notify::choice-chosen'(pspec: GObject.ParamSpec): void;
            'notify::choice-label'(pspec: GObject.ParamSpec): void;
            'notify::continue-label'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::message'(pspec: GObject.ParamSpec): void;
            'notify::password-new'(pspec: GObject.ParamSpec): void;
            'notify::password-strength'(pspec: GObject.ParamSpec): void;
            'notify::title'(pspec: GObject.ParamSpec): void;
            'notify::warning'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gcr.Prompt.ConstructorProps {
            /**
             * Whether the choice check box is visible or not.
             */
            choice_visible: boolean;
            /**
             * Whether the choice check box is visible or not.
             */
            choiceVisible: boolean;
            /**
             * Text field for confirmation password
             */
            confirm_actor: Clutter.Text;
            /**
             * Text field for confirmation password
             */
            confirmActor: Clutter.Text;
            /**
             * Whether the password confirm entry is visible or not.
             */
            confirm_visible: boolean;
            /**
             * Whether the password confirm entry is visible or not.
             */
            confirmVisible: boolean;
            /**
             * Text field for password
             */
            password_actor: Clutter.Text;
            /**
             * Text field for password
             */
            passwordActor: Clutter.Text;
            /**
             * Whether the password entry is visible or not.
             */
            password_visible: boolean;
            /**
             * Whether the password entry is visible or not.
             */
            passwordVisible: boolean;
            /**
             * Whether the warning label is visible or not.
             */
            warning_visible: boolean;
            /**
             * Whether the warning label is visible or not.
             */
            warningVisible: boolean;
        }
    }
    type KeyringPrompt = (typeof classes.KeyringPrompt)['prototype'];
    const KeyringPrompt: typeof classes.KeyringPrompt &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.KeyringPrompt.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, KeyringPrompt.SignalSignatures> & classes.KeyringPrompt);
    namespace MountOperation {
        // Signal signatures
        interface SignalSignatures extends Gio.MountOperation.SignalSignatures {
            'show-processes-2'(): void;
            'notify::anonymous'(pspec: GObject.ParamSpec): void;
            'notify::choice'(pspec: GObject.ParamSpec): void;
            'notify::domain'(pspec: GObject.ParamSpec): void;
            'notify::is-tcrypt-hidden-volume'(pspec: GObject.ParamSpec): void;
            'notify::is-tcrypt-system-volume'(pspec: GObject.ParamSpec): void;
            'notify::password'(pspec: GObject.ParamSpec): void;
            'notify::password-save'(pspec: GObject.ParamSpec): void;
            'notify::pim'(pspec: GObject.ParamSpec): void;
            'notify::username'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Gio.MountOperation.ConstructorProps {}
    }
    type MountOperation = (typeof classes.MountOperation)['prototype'];
    const MountOperation: typeof classes.MountOperation &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.MountOperation.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MountOperation.SignalSignatures> & classes.MountOperation);
    namespace NetworkAgent {
        // Signal signatures
        interface SignalSignatures extends NM.SecretAgentOld.SignalSignatures {
            'cancel-request'(arg0: string): void;
            'new-request'(arg0: string, arg1: NM.Connection, arg2: string, arg3: string[], arg4: number): void;
            'notify::force-always-ask'(pspec: GObject.ParamSpec): void;
            'notify::auto-register'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::dbus-connection'(pspec: GObject.ParamSpec): void;
            'notify::identifier'(pspec: GObject.ParamSpec): void;
            'notify::registered'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends NM.SecretAgentOld.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {
            force_always_ask: boolean;
            forceAlwaysAsk: boolean;
        }
    }
    type NetworkAgent = (typeof classes.NetworkAgent)['prototype'];
    const NetworkAgent: typeof classes.NetworkAgent &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.NetworkAgent.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, NetworkAgent.SignalSignatures> & classes.NetworkAgent);
    namespace PerfLog {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type PerfLog = (typeof classes.PerfLog)['prototype'];
    const PerfLog: typeof classes.PerfLog &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.PerfLog.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PerfLog.SignalSignatures> & classes.PerfLog);
    namespace PolkitAuthenticationAgent {
        // Signal signatures
        interface SignalSignatures extends PolkitAgent.Listener.SignalSignatures {
            cancel(): void;
            initiate(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string[]): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends PolkitAgent.Listener.ConstructorProps {}
    }
    type PolkitAuthenticationAgent = (typeof classes.PolkitAuthenticationAgent)['prototype'];
    const PolkitAuthenticationAgent: typeof classes.PolkitAuthenticationAgent &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.PolkitAuthenticationAgent.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PolkitAuthenticationAgent.SignalSignatures> &
            classes.PolkitAuthenticationAgent);
    namespace Screenshot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'screenshot-taken'(arg0: Mtk.Rectangle): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Screenshot = (typeof classes.Screenshot)['prototype'];
    const Screenshot: typeof classes.Screenshot &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.Screenshot.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Screenshot.SignalSignatures> & classes.Screenshot);
    namespace SecureTextBuffer {
        // Signal signatures
        interface SignalSignatures extends Clutter.TextBuffer.SignalSignatures {
            'notify::length'(pspec: GObject.ParamSpec): void;
            'notify::max-length'(pspec: GObject.ParamSpec): void;
            'notify::text'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Clutter.TextBuffer.ConstructorProps {}
    }
    type SecureTextBuffer = (typeof classes.SecureTextBuffer)['prototype'];
    const SecureTextBuffer: typeof classes.SecureTextBuffer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.SecureTextBuffer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SecureTextBuffer.SignalSignatures> & classes.SecureTextBuffer);
    namespace SquareBin {
        // Signal signatures
        interface SignalSignatures extends St.Bin.SignalSignatures {
            'notify::child'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends St.Bin.ConstructorProps<A>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }
    type SquareBin<A extends Clutter.Actor = Clutter.Actor> = (typeof classes.SquareBin<A>)['prototype'];
    const SquareBin: typeof classes.SquareBin &
        (new <A extends Clutter.Actor, Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.SquareBin.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SquareBin.SignalSignatures> & classes.SquareBin<A>);
    namespace Stack {
        // Signal signatures
        interface SignalSignatures extends St.Widget.SignalSignatures {
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends St.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }
    type Stack = (typeof classes.Stack)['prototype'];
    const Stack: typeof classes.Stack &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.Stack.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Stack.SignalSignatures> & classes.Stack);
    namespace TrayIcon {
        // Signal signatures
        interface SignalSignatures extends Clutter.Clone.SignalSignatures {
            'notify::pid'(pspec: GObject.ParamSpec): void;
            'notify::title'(pspec: GObject.ParamSpec): void;
            'notify::wm-class'(pspec: GObject.ParamSpec): void;
            'notify::source'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps<A extends Clutter.Actor = Clutter.Actor>
            extends Clutter.Clone.ConstructorProps<A>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            pid: number;
            title: string;
            wm_class: string;
            wmClass: string;
        }
    }
    type TrayIcon<A extends Clutter.Actor = Clutter.Actor> = (typeof classes.TrayIcon<A>)['prototype'];
    const TrayIcon: typeof classes.TrayIcon &
        (new <A extends Clutter.Actor, Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.TrayIcon.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, TrayIcon.SignalSignatures> & classes.TrayIcon<A>);
    namespace TrayManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'tray-icon-added'(arg0: Clutter.Actor): void;
            'tray-icon-removed'(arg0: Clutter.Actor): void;
            'notify::bg-color'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bg_color: Cogl.Color;
            bgColor: Cogl.Color;
        }
    }
    type TrayManager = (typeof classes.TrayManager)['prototype'];
    const TrayManager: typeof classes.TrayManager &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.TrayManager.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, TrayManager.SignalSignatures> & classes.TrayManager);
    namespace WM {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'confirm-display-change'(): void;
            'create-close-dialog'(arg0: Meta.Window): Meta.CloseDialog;
            'create-inhibit-shortcuts-dialog'(arg0: Meta.Window): Meta.InhibitShortcutsDialog;
            destroy(arg0: Meta.WindowActor): void;
            'filter-keybinding'(arg0: Meta.KeyBinding): boolean | void;
            'hide-tile-preview'(): void;
            'kill-switch-workspace'(): void;
            'kill-window-effects'(arg0: Meta.WindowActor): void;
            map(arg0: Meta.WindowActor): void;
            minimize(arg0: Meta.WindowActor): void;
            'show-tile-preview'(arg0: Meta.Window, arg1: Mtk.Rectangle, arg2: number): void;
            'show-window-menu'(arg0: Meta.Window, arg1: number, arg2: Mtk.Rectangle): void;
            'size-change'(
                arg0: Meta.WindowActor,
                arg1: Meta.SizeChange,
                arg2: Mtk.Rectangle,
                arg3: Mtk.Rectangle,
            ): void;
            'size-changed'(arg0: Meta.WindowActor): void;
            'switch-workspace'(arg0: number, arg1: number, arg2: number): void;
            unminimize(arg0: Meta.WindowActor): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type WM = (typeof classes.WM)['prototype'];
    const WM: typeof classes.WM &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.WM.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WM.SignalSignatures> & classes.WM);
    namespace WindowPreview {
        // Signal signatures
        interface SignalSignatures extends St.Widget.SignalSignatures {
            'notify::window-container'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends St.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            window_container: Clutter.Actor;
            windowContainer: Clutter.Actor;
        }
    }
    type WindowPreview = (typeof classes.WindowPreview)['prototype'];
    const WindowPreview: typeof classes.WindowPreview &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.WindowPreview.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WindowPreview.SignalSignatures> & classes.WindowPreview);
    namespace WindowPreviewLayout {
        // Signal signatures
        interface SignalSignatures extends Clutter.LayoutManager.SignalSignatures {
            'notify::bounding-box'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Clutter.LayoutManager.ConstructorProps {
            bounding_box: Clutter.ActorBox;
            boundingBox: Clutter.ActorBox;
        }
    }
    type WindowPreviewLayout = (typeof classes.WindowPreviewLayout)['prototype'];
    const WindowPreviewLayout: typeof classes.WindowPreviewLayout &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.WindowPreviewLayout.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WindowPreviewLayout.SignalSignatures> & classes.WindowPreviewLayout);
    namespace WindowTracker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'startup-sequence-changed'(arg0: Meta.StartupSequence): void;
            'tracked-windows-changed'(): void;
            'notify::focus-app'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            focus_app: App;
            focusApp: App;
        }
    }
    type WindowTracker = (typeof classes.WindowTracker)['prototype'];
    const WindowTracker: typeof classes.WindowTracker &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.WindowTracker.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WindowTracker.SignalSignatures> & classes.WindowTracker);
    namespace WorkspaceBackground {
        // Signal signatures
        interface SignalSignatures extends St.Widget.SignalSignatures {
            'notify::monitor-index'(pspec: GObject.ParamSpec): void;
            'notify::state-adjustment-value'(pspec: GObject.ParamSpec): void;
            'notify::can-focus'(pspec: GObject.ParamSpec): void;
            'notify::hover'(pspec: GObject.ParamSpec): void;
            'notify::label-actor'(pspec: GObject.ParamSpec): void;
            'notify::pseudo-class'(pspec: GObject.ParamSpec): void;
            'notify::style'(pspec: GObject.ParamSpec): void;
            'notify::style-class'(pspec: GObject.ParamSpec): void;
            'notify::track-hover'(pspec: GObject.ParamSpec): void;
            'notify::accessible-name'(pspec: GObject.ParamSpec): void;
            'notify::accessible-role'(pspec: GObject.ParamSpec): void;
            'notify::actions'(pspec: GObject.ParamSpec): void;
            'notify::allocation'(pspec: GObject.ParamSpec): void;
            'notify::background-color'(pspec: GObject.ParamSpec): void;
            'notify::background-color-set'(pspec: GObject.ParamSpec): void;
            'notify::child-transform'(pspec: GObject.ParamSpec): void;
            'notify::child-transform-set'(pspec: GObject.ParamSpec): void;
            'notify::clip-rect'(pspec: GObject.ParamSpec): void;
            'notify::clip-to-allocation'(pspec: GObject.ParamSpec): void;
            'notify::color-state'(pspec: GObject.ParamSpec): void;
            'notify::constraints'(pspec: GObject.ParamSpec): void;
            'notify::content'(pspec: GObject.ParamSpec): void;
            'notify::content-box'(pspec: GObject.ParamSpec): void;
            'notify::content-gravity'(pspec: GObject.ParamSpec): void;
            'notify::content-repeat'(pspec: GObject.ParamSpec): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::effect'(pspec: GObject.ParamSpec): void;
            'notify::first-child'(pspec: GObject.ParamSpec): void;
            'notify::fixed-position-set'(pspec: GObject.ParamSpec): void;
            'notify::fixed-x'(pspec: GObject.ParamSpec): void;
            'notify::fixed-y'(pspec: GObject.ParamSpec): void;
            'notify::has-clip'(pspec: GObject.ParamSpec): void;
            'notify::has-pointer'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::last-child'(pspec: GObject.ParamSpec): void;
            'notify::layout-manager'(pspec: GObject.ParamSpec): void;
            'notify::magnification-filter'(pspec: GObject.ParamSpec): void;
            'notify::mapped'(pspec: GObject.ParamSpec): void;
            'notify::margin-bottom'(pspec: GObject.ParamSpec): void;
            'notify::margin-left'(pspec: GObject.ParamSpec): void;
            'notify::margin-right'(pspec: GObject.ParamSpec): void;
            'notify::margin-top'(pspec: GObject.ParamSpec): void;
            'notify::min-height'(pspec: GObject.ParamSpec): void;
            'notify::min-height-set'(pspec: GObject.ParamSpec): void;
            'notify::min-width'(pspec: GObject.ParamSpec): void;
            'notify::min-width-set'(pspec: GObject.ParamSpec): void;
            'notify::minification-filter'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::natural-height'(pspec: GObject.ParamSpec): void;
            'notify::natural-height-set'(pspec: GObject.ParamSpec): void;
            'notify::natural-width'(pspec: GObject.ParamSpec): void;
            'notify::natural-width-set'(pspec: GObject.ParamSpec): void;
            'notify::offscreen-redirect'(pspec: GObject.ParamSpec): void;
            'notify::opacity'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point'(pspec: GObject.ParamSpec): void;
            'notify::pivot-point-z'(pspec: GObject.ParamSpec): void;
            'notify::position'(pspec: GObject.ParamSpec): void;
            'notify::reactive'(pspec: GObject.ParamSpec): void;
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::request-mode'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-x'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-y'(pspec: GObject.ParamSpec): void;
            'notify::rotation-angle-z'(pspec: GObject.ParamSpec): void;
            'notify::scale-x'(pspec: GObject.ParamSpec): void;
            'notify::scale-y'(pspec: GObject.ParamSpec): void;
            'notify::scale-z'(pspec: GObject.ParamSpec): void;
            'notify::show-on-set-parent'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::text-direction'(pspec: GObject.ParamSpec): void;
            'notify::transform'(pspec: GObject.ParamSpec): void;
            'notify::transform-set'(pspec: GObject.ParamSpec): void;
            'notify::translation-x'(pspec: GObject.ParamSpec): void;
            'notify::translation-y'(pspec: GObject.ParamSpec): void;
            'notify::translation-z'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
            'notify::x'(pspec: GObject.ParamSpec): void;
            'notify::x-align'(pspec: GObject.ParamSpec): void;
            'notify::x-expand'(pspec: GObject.ParamSpec): void;
            'notify::y'(pspec: GObject.ParamSpec): void;
            'notify::y-align'(pspec: GObject.ParamSpec): void;
            'notify::y-expand'(pspec: GObject.ParamSpec): void;
            'notify::z-position'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends St.Widget.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            monitor_index: number;
            monitorIndex: number;
            state_adjustment_value: number;
            stateAdjustmentValue: number;
        }
    }
    type WorkspaceBackground = (typeof classes.WorkspaceBackground)['prototype'];
    const WorkspaceBackground: typeof classes.WorkspaceBackground &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Shell.WorkspaceBackground.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WorkspaceBackground.SignalSignatures> & classes.WorkspaceBackground);
    export type AppClass = typeof App;
    export type AppSystemClass = typeof AppSystem;
    export type AppUsageClass = typeof AppUsage;
    export type BlurEffectClass = typeof BlurEffect;
    export type CameraMonitorClass = typeof CameraMonitor;
    export type EdgeDragGestureClass = typeof EdgeDragGesture;
    export type GLSLEffectClass = typeof GLSLEffect;
    export type GlobalClass = typeof Global;
    export type InvertLightnessEffectClass = typeof InvertLightnessEffect;
    export type KeyringPromptClass = typeof KeyringPrompt;
    class MemoryInfo {
        static '$gtype': GObject.GType<MemoryInfo>;
        // Fields
        glibc_uordblks: number;
        js_bytes: number;
        gjs_boxed: number;
        gjs_gobject: number;
        gjs_function: number;
        gjs_closure: number;
        last_gc_seconds_ago: number;
        // Constructors
        constructor(
            properties?: Partial<{
                glibc_uordblks: number;
                js_bytes: number;
                gjs_boxed: number;
                gjs_gobject: number;
                gjs_function: number;
                gjs_closure: number;
                last_gc_seconds_ago: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    export type MountOperationClass = typeof MountOperation;
    export type NetworkAgentClass = typeof NetworkAgent;
    export type PerfLogClass = typeof PerfLog;
    export type PolkitAuthenticationAgentClass = typeof PolkitAuthenticationAgent;
    export type ScreenshotClass = typeof Screenshot;
    export type SecureTextBufferClass = typeof SecureTextBuffer;
    export type SquareBinClass = typeof SquareBin;
    export type StackClass = typeof Stack;
    export type TrayIconClass = typeof TrayIcon;
    export type TrayManagerClass = typeof TrayManager;
    export type WMClass = typeof WM;
    export type WindowPreviewClass = typeof WindowPreview;
    export type WindowPreviewLayoutClass = typeof WindowPreviewLayout;
    abstract class WindowPreviewLayoutPrivate {
        static '$gtype': GObject.GType<WindowPreviewLayoutPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type WindowTrackerClass = typeof WindowTracker;
    export type WorkspaceBackgroundClass = typeof WorkspaceBackground;
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
export default Shell;
