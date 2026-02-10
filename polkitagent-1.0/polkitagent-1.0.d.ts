/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type Polkit from '@girs/polkit-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import '@girs/gjs';
import type classes from './polkitagent-1.0-classes.d.ts';
export { classes as PolkitAgentClasses };
export namespace PolkitAgent {
    /**
     * PolkitAgent-1.0
     */
    /**
     * (deprecated)
     *
     * @param listener A #PolkitAgentListener.
     * @param subject The subject to become an authentication agent for, typically a #PolkitUnixSession object.
     * @param object_path The D-Bus object path to use for the authentication agent or %NULL for the default object path.
     */
    function register_listener(listener: Listener, subject: Polkit.Subject, object_path: string): boolean;
    /**
     * Flags used in polkit_agent_listener_register().
     */
    export namespace RegisterFlags {
        export const $gtype: GObject.GType<RegisterFlags>;
    }
    enum RegisterFlags {
        /**
         * No flags are set.
         */
        NONE,
        /**
         * Run the listener in a dedicated thread.
         */
        RUN_IN_THREAD = 1,
    }
    namespace Listener {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Listener = (typeof classes.Listener)['prototype'];
    const Listener: typeof classes.Listener &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<PolkitAgent.Listener.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Listener.SignalSignatures> & classes.Listener);
    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            completed(arg0: boolean): void;
            request(arg0: string, arg1: boolean): void;
            'show-error'(arg0: string): void;
            'show-info'(arg0: string): void;
            'notify::cookie'(pspec: GObject.ParamSpec): void;
            'notify::identity'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The cookie obtained from the PolicyKit daemon
             */
            cookie: string;
            /**
             * The identity to authenticate.
             */
            identity: Polkit.Identity;
        }
    }
    type Session = (typeof classes.Session)['prototype'];
    const Session: typeof classes.Session &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<PolkitAgent.Session.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Session.SignalSignatures> & classes.Session);
    namespace TextListener {
        // Signal signatures
        interface SignalSignatures extends Listener.SignalSignatures {
            'tty-attrs-changed'(arg0: boolean): void;
            'notify::delay'(pspec: GObject.ParamSpec): void;
            'notify::use-alternate-buffer'(pspec: GObject.ParamSpec): void;
            'notify::use-color'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Listener.ConstructorProps, Gio.Initable.ConstructorProps {
            delay: number;
            use_alternate_buffer: boolean;
            useAlternateBuffer: boolean;
            use_color: boolean;
            useColor: boolean;
        }
    }
    type TextListener = (typeof classes.TextListener)['prototype'];
    const TextListener: typeof classes.TextListener &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<PolkitAgent.TextListener.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, TextListener.SignalSignatures> & classes.TextListener);
    export type ListenerClass = typeof Listener;
    export type SessionClass = typeof Session;
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
export default PolkitAgent;
