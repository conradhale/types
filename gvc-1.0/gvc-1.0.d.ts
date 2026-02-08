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
import '@girs/gjs';
import type classes from './gvc-1.0-classes.d.ts';
export { classes as GvcClasses };
export namespace Gvc {
    /**
     * Gvc-1.0
     */
    export namespace MixerControlState {
        export const $gtype: GObject.GType<MixerControlState>;
    }
    enum MixerControlState {
        CLOSED,
        READY = 1,
        CONNECTING = 2,
        FAILED = 3,
    }
    export namespace MixerStreamState {
        export const $gtype: GObject.GType<MixerStreamState>;
    }
    enum MixerStreamState {
        INVALID,
        RUNNING = 1,
        IDLE = 2,
        SUSPENDED = 3,
    }
    export namespace MixerUIDeviceDirection {
        export const $gtype: GObject.GType<MixerUIDeviceDirection>;
    }
    enum MixerUIDeviceDirection {
        INPUT,
        OUTPUT = 1,
    }
    const MIXER_UI_DEVICE_INVALID: number;
    export namespace HeadsetPortChoice {
        export const $gtype: GObject.GType<HeadsetPortChoice>;
    }
    enum HeadsetPortChoice {
        NONE,
        HEADPHONES = 1,
        HEADSET = 2,
        MIC = 4,
    }
    namespace ChannelMap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'volume-changed'(arg0: boolean): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type ChannelMap = (typeof classes.ChannelMap)['prototype'];
    const ChannelMap: typeof classes.ChannelMap &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.ChannelMap.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ChannelMap.SignalSignatures> & classes.ChannelMap);
    namespace MixerCard {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::human-profile'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::index'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::pa-context'(pspec: GObject.ParamSpec): void;
            'notify::profile'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            human_profile: string;
            humanProfile: string;
            icon_name: string;
            iconName: string;
            id: number;
            index: number;
            name: string;
            pa_context: any;
            paContext: any;
            profile: string;
        }
    }
    type MixerCard = (typeof classes.MixerCard)['prototype'];
    const MixerCard: typeof classes.MixerCard &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.MixerCard.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MixerCard.SignalSignatures> & classes.MixerCard);
    namespace MixerControl {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'active-input-update'(arg0: number): void;
            'active-output-update'(arg0: number): void;
            'audio-device-selection-needed'(arg0: number, arg1: boolean, arg2: number): void;
            'card-added'(arg0: number): void;
            'card-removed'(arg0: number): void;
            'default-sink-changed'(arg0: number): void;
            'default-source-changed'(arg0: number): void;
            'input-added'(arg0: number): void;
            'input-removed'(arg0: number): void;
            'output-added'(arg0: number): void;
            'output-removed'(arg0: number): void;
            'state-changed'(arg0: number): void;
            'stream-added'(arg0: number): void;
            'stream-changed'(arg0: number): void;
            'stream-removed'(arg0: number): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }
    type MixerControl = (typeof classes.MixerControl)['prototype'];
    const MixerControl: typeof classes.MixerControl &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.MixerControl.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MixerControl.SignalSignatures> & classes.MixerControl);
    namespace MixerEventRole {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::device'(pspec: GObject.ParamSpec): void;
            'notify::application-id'(pspec: GObject.ParamSpec): void;
            'notify::can-decibel'(pspec: GObject.ParamSpec): void;
            'notify::card-index'(pspec: GObject.ParamSpec): void;
            'notify::channel-map'(pspec: GObject.ParamSpec): void;
            'notify::decibel'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::form-factor'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::index'(pspec: GObject.ParamSpec): void;
            'notify::is-event-stream'(pspec: GObject.ParamSpec): void;
            'notify::is-muted'(pspec: GObject.ParamSpec): void;
            'notify::is-virtual'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::pa-context'(pspec: GObject.ParamSpec): void;
            'notify::port'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::sysfs-path'(pspec: GObject.ParamSpec): void;
            'notify::volume'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends MixerStream.ConstructorProps {
            device: string;
        }
    }
    type MixerEventRole = (typeof classes.MixerEventRole)['prototype'];
    const MixerEventRole: typeof classes.MixerEventRole &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.MixerEventRole.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MixerEventRole.SignalSignatures> & classes.MixerEventRole);
    namespace MixerSink {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::application-id'(pspec: GObject.ParamSpec): void;
            'notify::can-decibel'(pspec: GObject.ParamSpec): void;
            'notify::card-index'(pspec: GObject.ParamSpec): void;
            'notify::channel-map'(pspec: GObject.ParamSpec): void;
            'notify::decibel'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::form-factor'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::index'(pspec: GObject.ParamSpec): void;
            'notify::is-event-stream'(pspec: GObject.ParamSpec): void;
            'notify::is-muted'(pspec: GObject.ParamSpec): void;
            'notify::is-virtual'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::pa-context'(pspec: GObject.ParamSpec): void;
            'notify::port'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::sysfs-path'(pspec: GObject.ParamSpec): void;
            'notify::volume'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends MixerStream.ConstructorProps {}
    }
    type MixerSink = (typeof classes.MixerSink)['prototype'];
    const MixerSink: typeof classes.MixerSink &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.MixerSink.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MixerSink.SignalSignatures> & classes.MixerSink);
    namespace MixerSinkInput {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::application-id'(pspec: GObject.ParamSpec): void;
            'notify::can-decibel'(pspec: GObject.ParamSpec): void;
            'notify::card-index'(pspec: GObject.ParamSpec): void;
            'notify::channel-map'(pspec: GObject.ParamSpec): void;
            'notify::decibel'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::form-factor'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::index'(pspec: GObject.ParamSpec): void;
            'notify::is-event-stream'(pspec: GObject.ParamSpec): void;
            'notify::is-muted'(pspec: GObject.ParamSpec): void;
            'notify::is-virtual'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::pa-context'(pspec: GObject.ParamSpec): void;
            'notify::port'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::sysfs-path'(pspec: GObject.ParamSpec): void;
            'notify::volume'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends MixerStream.ConstructorProps {}
    }
    type MixerSinkInput = (typeof classes.MixerSinkInput)['prototype'];
    const MixerSinkInput: typeof classes.MixerSinkInput &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.MixerSinkInput.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MixerSinkInput.SignalSignatures> & classes.MixerSinkInput);
    namespace MixerSource {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::application-id'(pspec: GObject.ParamSpec): void;
            'notify::can-decibel'(pspec: GObject.ParamSpec): void;
            'notify::card-index'(pspec: GObject.ParamSpec): void;
            'notify::channel-map'(pspec: GObject.ParamSpec): void;
            'notify::decibel'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::form-factor'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::index'(pspec: GObject.ParamSpec): void;
            'notify::is-event-stream'(pspec: GObject.ParamSpec): void;
            'notify::is-muted'(pspec: GObject.ParamSpec): void;
            'notify::is-virtual'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::pa-context'(pspec: GObject.ParamSpec): void;
            'notify::port'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::sysfs-path'(pspec: GObject.ParamSpec): void;
            'notify::volume'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends MixerStream.ConstructorProps {}
    }
    type MixerSource = (typeof classes.MixerSource)['prototype'];
    const MixerSource: typeof classes.MixerSource &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.MixerSource.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MixerSource.SignalSignatures> & classes.MixerSource);
    namespace MixerSourceOutput {
        // Signal signatures
        interface SignalSignatures extends MixerStream.SignalSignatures {
            'notify::application-id'(pspec: GObject.ParamSpec): void;
            'notify::can-decibel'(pspec: GObject.ParamSpec): void;
            'notify::card-index'(pspec: GObject.ParamSpec): void;
            'notify::channel-map'(pspec: GObject.ParamSpec): void;
            'notify::decibel'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::form-factor'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::index'(pspec: GObject.ParamSpec): void;
            'notify::is-event-stream'(pspec: GObject.ParamSpec): void;
            'notify::is-muted'(pspec: GObject.ParamSpec): void;
            'notify::is-virtual'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::pa-context'(pspec: GObject.ParamSpec): void;
            'notify::port'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::sysfs-path'(pspec: GObject.ParamSpec): void;
            'notify::volume'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends MixerStream.ConstructorProps {}
    }
    type MixerSourceOutput = (typeof classes.MixerSourceOutput)['prototype'];
    const MixerSourceOutput: typeof classes.MixerSourceOutput &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.MixerSourceOutput.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MixerSourceOutput.SignalSignatures> & classes.MixerSourceOutput);
    namespace MixerStream {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application-id'(pspec: GObject.ParamSpec): void;
            'notify::can-decibel'(pspec: GObject.ParamSpec): void;
            'notify::card-index'(pspec: GObject.ParamSpec): void;
            'notify::channel-map'(pspec: GObject.ParamSpec): void;
            'notify::decibel'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::form-factor'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::index'(pspec: GObject.ParamSpec): void;
            'notify::is-event-stream'(pspec: GObject.ParamSpec): void;
            'notify::is-muted'(pspec: GObject.ParamSpec): void;
            'notify::is-virtual'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::pa-context'(pspec: GObject.ParamSpec): void;
            'notify::port'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::sysfs-path'(pspec: GObject.ParamSpec): void;
            'notify::volume'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_id: string;
            applicationId: string;
            can_decibel: boolean;
            canDecibel: boolean;
            card_index: number;
            cardIndex: number;
            channel_map: ChannelMap;
            channelMap: ChannelMap;
            decibel: number;
            description: string;
            form_factor: string;
            formFactor: string;
            icon_name: string;
            iconName: string;
            id: number;
            index: number;
            is_event_stream: boolean;
            isEventStream: boolean;
            is_muted: boolean;
            isMuted: boolean;
            is_virtual: boolean;
            isVirtual: boolean;
            name: string;
            pa_context: any;
            paContext: any;
            port: string;
            state: MixerStreamState;
            sysfs_path: string;
            sysfsPath: string;
            volume: number;
        }
    }
    type MixerStream = (typeof classes.MixerStream)['prototype'];
    const MixerStream: typeof classes.MixerStream &
        (abstract new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.MixerStream.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MixerStream.SignalSignatures> & classes.MixerStream);
    namespace MixerUIDevice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::card'(pspec: GObject.ParamSpec): void;
            'notify::description'(pspec: GObject.ParamSpec): void;
            'notify::icon-name'(pspec: GObject.ParamSpec): void;
            'notify::origin'(pspec: GObject.ParamSpec): void;
            'notify::port-available'(pspec: GObject.ParamSpec): void;
            'notify::port-name'(pspec: GObject.ParamSpec): void;
            'notify::stream-id'(pspec: GObject.ParamSpec): void;
            'notify::type'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            card: any;
            description: string;
            icon_name: string;
            iconName: string;
            origin: string;
            port_available: boolean;
            portAvailable: boolean;
            port_name: string;
            portName: string;
            stream_id: number;
            streamId: number;
            type: number;
        }
    }
    type MixerUIDevice = (typeof classes.MixerUIDevice)['prototype'];
    const MixerUIDevice: typeof classes.MixerUIDevice &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<Gvc.MixerUIDevice.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MixerUIDevice.SignalSignatures> & classes.MixerUIDevice);
    export type ChannelMapClass = typeof ChannelMap;
    abstract class ChannelMapPrivate {
        static '$gtype': GObject.GType<ChannelMapPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type MixerCardClass = typeof MixerCard;
    class MixerCardPort {
        static '$gtype': GObject.GType<MixerCardPort>;
        // Fields
        port: string;
        human_port: string;
        icon_name: string;
        priority: number;
        available: number;
        direction: number;
        profiles: any[];
        // Constructors
        constructor(
            properties?: Partial<{
                port: string;
                human_port: string;
                icon_name: string;
                priority: number;
                available: number;
                direction: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    abstract class MixerCardPrivate {
        static '$gtype': GObject.GType<MixerCardPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    class MixerCardProfile {
        static '$gtype': GObject.GType<MixerCardProfile>;
        // Fields
        profile: string;
        human_profile: string;
        status: string;
        priority: number;
        n_sinks: number;
        n_sources: number;
        // Constructors
        constructor(
            properties?: Partial<{
                profile: string;
                human_profile: string;
                status: string;
                priority: number;
                n_sinks: number;
                n_sources: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        compare(b: MixerCardProfile): number;
    }
    export type MixerControlClass = typeof MixerControl;
    abstract class MixerControlPrivate {
        static '$gtype': GObject.GType<MixerControlPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type MixerEventRoleClass = typeof MixerEventRole;
    abstract class MixerEventRolePrivate {
        static '$gtype': GObject.GType<MixerEventRolePrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type MixerSinkClass = typeof MixerSink;
    export type MixerSinkInputClass = typeof MixerSinkInput;
    abstract class MixerSinkInputPrivate {
        static '$gtype': GObject.GType<MixerSinkInputPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    abstract class MixerSinkPrivate {
        static '$gtype': GObject.GType<MixerSinkPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type MixerSourceClass = typeof MixerSource;
    export type MixerSourceOutputClass = typeof MixerSourceOutput;
    abstract class MixerSourceOutputPrivate {
        static '$gtype': GObject.GType<MixerSourceOutputPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    abstract class MixerSourcePrivate {
        static '$gtype': GObject.GType<MixerSourcePrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type MixerStreamClass = typeof MixerStream;
    class MixerStreamPort {
        static '$gtype': GObject.GType<MixerStreamPort>;
        // Fields
        port: string;
        human_port: string;
        priority: number;
        available: boolean;
        // Constructors
        constructor(
            properties?: Partial<{
                port: string;
                human_port: string;
                priority: number;
                available: boolean;
            }>,
        );
        _init(...args: any[]): void;
    }
    abstract class MixerStreamPrivate {
        static '$gtype': GObject.GType<MixerStreamPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type MixerUIDeviceClass = typeof MixerUIDevice;
    abstract class MixerUIDevicePrivate {
        static '$gtype': GObject.GType<MixerUIDevicePrivate>;
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
export default Gvc;
