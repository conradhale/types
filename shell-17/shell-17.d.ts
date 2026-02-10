/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type Clutter from '@girs/clutter-17';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Mtk from '@girs/mtk-17';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Cogl from '@girs/cogl-17';
import type Atk from '@girs/atk-1.0';
import type Gcr from '@girs/gcr-4';
import type Gck from '@girs/gck-2';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GioUnix from '@girs/giounix-2.0';
import type Gvc from '@girs/gvc-1.0';
import type Meta from '@girs/meta-17';
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type NM from '@girs/nm-1.0';
import type PolkitAgent from '@girs/polkitagent-1.0';
import type Polkit from '@girs/polkit-1.0';
import type St from '@girs/st-17';
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
    export namespace BlurMode {
        export const $gtype: GObject.GType<BlurMode>;
    }
    enum BlurMode {
        ACTOR,
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
    function get_file_contents_utf8_sync(path: string): string;
    function time_change_source_new(): GLib.Source;
    function util_check_cloexec_fds(): void;
    function util_create_pixbuf_from_data(
        data: Uint8Array[] | string,
        colorspace: GdkPixbuf.Colorspace | null,
        has_alpha: boolean,
        bits_per_sample: number,
        width: number,
        height: number,
        rowstride: number,
    ): GdkPixbuf.Pixbuf;
    function util_get_translated_folder_name(name: string): string;
    function util_get_uid(): number;
    function util_get_week_start(): number;
    function util_has_x11_display_extension(display: Meta.Display, extension: string): boolean;
    function util_regex_escape(str: string): string;
    function util_sd_notify(): void;
    function util_set_hidden_from_pick(actor: Clutter.Actor, hidden: boolean): void;
    function util_spawn_async(
        working_directory: string,
        argv: string[],
        envp: string[],
        flags: GLib.SpawnFlags | null,
    ): number;
    function util_spawn_async_with_fds(
        working_directory: string,
        argv: string[],
        envp: string[],
        flags: GLib.SpawnFlags | null,
        stdin_fd: number,
        stdout_fd: number,
        stderr_fd: number,
    ): number;
    function util_spawn_async_with_pipes(
        working_directory: string,
        argv: string[],
        envp: string[],
        flags: GLib.SpawnFlags | null,
    ): [number, number, number, number];
    function util_spawn_async_with_pipes_and_fds(
        working_directory: string,
        argv: string[],
        envp: string[],
        flags: GLib.SpawnFlags | null,
        stdin_fd: number,
        stdout_fd: number,
        stderr_fd: number,
        source_fds: number[],
        target_fds: number[],
    ): [number, number, number, number];
    function util_start_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable,
    ): globalThis.Promise<boolean>;
    function util_start_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable,
        callback: Gio.AsyncReadyCallback<string>,
    ): void;
    function util_start_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable,
        callback: Gio.AsyncReadyCallback<string>,
    ): globalThis.Promise<boolean> | void;
    function util_start_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable,
    ): globalThis.Promise<boolean>;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable,
        callback: Gio.AsyncReadyCallback<string>,
    ): void;
    function util_stop_systemd_unit(
        unit: string,
        mode: string,
        cancellable: Gio.Cancellable,
        callback: Gio.AsyncReadyCallback<string>,
    ): globalThis.Promise<boolean> | void;
    function util_stop_systemd_unit_finish(res: Gio.AsyncResult): boolean;
    function util_systemd_unit_exists(unit: string, cancellable: Gio.Cancellable): globalThis.Promise<boolean>;
    function util_systemd_unit_exists(
        unit: string,
        cancellable: Gio.Cancellable,
        callback: Gio.AsyncReadyCallback<string>,
    ): void;
    function util_systemd_unit_exists(
        unit: string,
        cancellable: Gio.Cancellable,
        callback: Gio.AsyncReadyCallback<string>,
    ): globalThis.Promise<boolean> | void;
    function util_systemd_unit_exists_finish(res: Gio.AsyncResult): boolean;
    function util_touch_file_async(file: Gio.File): globalThis.Promise<boolean>;
    function util_touch_file_async(file: Gio.File, callback: Gio.AsyncReadyCallback<Gio.File>): void;
    function util_touch_file_async(
        file: Gio.File,
        callback: Gio.AsyncReadyCallback<Gio.File>,
    ): globalThis.Promise<boolean> | void;
    function util_touch_file_finish(file: Gio.File, res: Gio.AsyncResult): boolean;
    function util_translate_time_string(str: string): string;
    function util_wifexited(status: number): [boolean, number];
    function write_string_to_stream(stream: Gio.OutputStream, str: string): boolean;
    interface LeisureFunction {
        (data: any): void;
    }
    interface PerfReplayFunction {
        (time: number, name: string, signature: string, arg: GObject.Value | any): void;
    }
    interface PerfStatisticsCallback {
        (perf_log: PerfLog, data: any): void;
    }
    export namespace ActionMode {
        export const $gtype: GObject.GType<ActionMode>;
    }
    enum ActionMode {
        NONE,
        NORMAL = 1,
        OVERVIEW = 2,
        LOCK_SCREEN = 4,
        UNLOCK_SCREEN = 8,
        LOGIN_SCREEN = 16,
        SYSTEM_MODAL = 32,
        LOOKING_GLASS = 64,
        POPUP = 128,
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
            action_group: Gio.ActionGroup;
            actionGroup: Gio.ActionGroup;
            app_info: GioUnix.DesktopAppInfo;
            appInfo: GioUnix.DesktopAppInfo;
            busy: boolean;
            icon: Gio.Icon;
            id: string;
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
            choice_visible: boolean;
            choiceVisible: boolean;
            confirm_actor: Clutter.Text;
            confirmActor: Clutter.Text;
            confirm_visible: boolean;
            confirmVisible: boolean;
            password_actor: Clutter.Text;
            passwordActor: Clutter.Text;
            password_visible: boolean;
            passwordVisible: boolean;
            warning_visible: boolean;
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
    class AppClass {
        static '$gtype': GObject.GType<AppClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class AppSystemClass {
        static '$gtype': GObject.GType<AppSystemClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class AppUsageClass {
        static '$gtype': GObject.GType<AppUsageClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class BlurEffectClass {
        static '$gtype': GObject.GType<BlurEffectClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class CameraMonitorClass {
        static '$gtype': GObject.GType<CameraMonitorClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class EdgeDragGestureClass {
        static '$gtype': GObject.GType<EdgeDragGestureClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class GLSLEffectClass {
        static '$gtype': GObject.GType<GLSLEffectClass>;
        // Fields
        base_pipeline: Cogl.Pipeline;
        // Constructors
        _init(...args: any[]): void;
    }
    class GlobalClass {
        static '$gtype': GObject.GType<GlobalClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class InvertLightnessEffectClass {
        static '$gtype': GObject.GType<InvertLightnessEffectClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class KeyringPromptClass {
        static '$gtype': GObject.GType<KeyringPromptClass>;
        // Constructors
        _init(...args: any[]): void;
    }
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
    class MountOperationClass {
        static '$gtype': GObject.GType<MountOperationClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class NetworkAgentClass {
        static '$gtype': GObject.GType<NetworkAgentClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class PerfLogClass {
        static '$gtype': GObject.GType<PerfLogClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class PolkitAuthenticationAgentClass {
        static '$gtype': GObject.GType<PolkitAuthenticationAgentClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class ScreenshotClass {
        static '$gtype': GObject.GType<ScreenshotClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class SecureTextBufferClass {
        static '$gtype': GObject.GType<SecureTextBufferClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class SquareBinClass {
        static '$gtype': GObject.GType<SquareBinClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class StackClass {
        static '$gtype': GObject.GType<StackClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class TrayIconClass {
        static '$gtype': GObject.GType<TrayIconClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class TrayManagerClass {
        static '$gtype': GObject.GType<TrayManagerClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class WMClass {
        static '$gtype': GObject.GType<WMClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class WindowPreviewClass {
        static '$gtype': GObject.GType<WindowPreviewClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class WindowPreviewLayoutClass {
        static '$gtype': GObject.GType<WindowPreviewLayoutClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class WindowPreviewLayoutPrivate {
        static '$gtype': GObject.GType<WindowPreviewLayoutPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    class WindowTrackerClass {
        static '$gtype': GObject.GType<WindowTrackerClass>;
        // Constructors
        _init(...args: any[]): void;
    }
    class WorkspaceBackgroundClass {
        static '$gtype': GObject.GType<WorkspaceBackgroundClass>;
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
export default Shell;
