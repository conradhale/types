import type Gvc from './gvc-1.0.d.ts';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
declare namespace classes {
    class ChannelMap extends GObjectClasses.Object {
        static '$gtype': GObject.GType<ChannelMap>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.ChannelMap.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.ChannelMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gvc.ChannelMap;
        // Signals
        connect<K extends keyof Gvc.ChannelMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.ChannelMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.ChannelMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.ChannelMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.ChannelMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.ChannelMap.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_volume_changed(set: boolean): void;
        // Methods
        can_balance(): boolean;
        can_fade(): boolean;
        get_mapping(): string;
        get_num_channels(): number;
        get_volume(): number;
    }
    class MixerCard extends GObjectClasses.Object {
        static '$gtype': GObject.GType<MixerCard>;
        // Properties
        get human_profile(): string;
        get humanProfile(): string;
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get id(): number;
        get index(): number;
        get name(): string;
        set name(val: string);
        get pa_context(): any;
        get paContext(): any;
        get profile(): string;
        set profile(val: string);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.MixerCard.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.MixerCard.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gvc.MixerCard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerCard.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.MixerCard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerCard.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.MixerCard.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.MixerCard.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Change the profile in use on this card.
         *
         * @returns %TRUE if profile successfully changed or already using this profile.
         * @param profile the profile to change to or %NULL.
         */
        change_profile(profile?: string | null): boolean;
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        get_id(): number;
        get_index(): number;
        get_name(): string;
        get_ports(): Gvc.MixerCardPort[];
        get_profiles(): Gvc.MixerCardProfile[];
        set_icon_name(name: string): boolean;
        set_name(name: string): boolean;
        set_ports(ports: Gvc.MixerCardPort[]): boolean;
        set_profile(profile: string): boolean;
        set_profiles(profiles: Gvc.MixerCardProfile[]): boolean;
    }
    class MixerControl extends GObjectClasses.Object {
        static '$gtype': GObject.GType<MixerControl>;
        // Properties
        get name(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.MixerControl.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.MixerControl.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(name: string): Gvc.MixerControl;
        // Signals
        connect<K extends keyof Gvc.MixerControl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerControl.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.MixerControl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerControl.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.MixerControl.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.MixerControl.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_active_input_update(id: number): void;
        vfunc_active_output_update(id: number): void;
        vfunc_audio_device_selection_needed(id: number, show_dialog: boolean, choices: Gvc.HeadsetPortChoice): void;
        vfunc_card_added(id: number): void;
        vfunc_card_removed(id: number): void;
        vfunc_default_sink_changed(id: number): void;
        vfunc_default_source_changed(id: number): void;
        vfunc_input_added(id: number): void;
        vfunc_input_removed(id: number): void;
        vfunc_output_added(id: number): void;
        vfunc_output_removed(id: number): void;
        vfunc_state_changed(new_state: Gvc.MixerControlState): void;
        vfunc_stream_added(id: number): void;
        vfunc_stream_changed(id: number): void;
        vfunc_stream_removed(id: number): void;
        // Methods
        change_input(input: Gvc.MixerUIDevice): void;
        change_output(output: Gvc.MixerUIDevice): void;
        change_profile_on_selected_device(device: Gvc.MixerUIDevice, profile?: string | null): boolean;
        close(): boolean;
        get_cards(): Gvc.MixerCard[];
        get_default_sink(): Gvc.MixerStream;
        get_default_source(): Gvc.MixerStream;
        get_event_sink_input(): Gvc.MixerStream;
        get_sink_inputs(): Gvc.MixerSinkInput[];
        get_sinks(): Gvc.MixerSink[];
        get_source_outputs(): Gvc.MixerSourceOutput[];
        get_sources(): Gvc.MixerSource[];
        get_state(): Gvc.MixerControlState;
        get_stream_from_device(device: Gvc.MixerUIDevice): Gvc.MixerStream;
        get_streams(): Gvc.MixerStream[];
        get_vol_max_amplified(): number;
        get_vol_max_norm(): number;
        lookup_card_id(id: number): Gvc.MixerCard;
        lookup_device_from_stream(stream: Gvc.MixerStream): Gvc.MixerUIDevice;
        lookup_input_id(id: number): Gvc.MixerUIDevice;
        lookup_output_id(id: number): Gvc.MixerUIDevice;
        lookup_stream_id(id: number): Gvc.MixerStream;
        open(): boolean;
        set_default_sink(stream: Gvc.MixerStream): boolean;
        set_default_source(stream: Gvc.MixerStream): boolean;
        set_headset_port(id: number, choices: Gvc.HeadsetPortChoice | null): void;
    }
    class MixerEventRole extends MixerStream {
        static '$gtype': GObject.GType<MixerEventRole>;
        // Properties
        get device(): string;
        set device(val: string);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.MixerEventRole.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.MixerEventRole.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gvc.MixerEventRole.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerEventRole.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.MixerEventRole.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerEventRole.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.MixerEventRole.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.MixerEventRole.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class MixerSink extends MixerStream {
        static '$gtype': GObject.GType<MixerSink>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.MixerSink.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.MixerSink.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gvc.MixerSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerSink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.MixerSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerSink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.MixerSink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.MixerSink.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class MixerSinkInput extends MixerStream {
        static '$gtype': GObject.GType<MixerSinkInput>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.MixerSinkInput.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.MixerSinkInput.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gvc.MixerSinkInput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerSinkInput.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.MixerSinkInput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerSinkInput.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.MixerSinkInput.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.MixerSinkInput.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class MixerSource extends MixerStream {
        static '$gtype': GObject.GType<MixerSource>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.MixerSource.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.MixerSource.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gvc.MixerSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.MixerSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.MixerSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.MixerSource.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class MixerSourceOutput extends MixerStream {
        static '$gtype': GObject.GType<MixerSourceOutput>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.MixerSourceOutput.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.MixerSourceOutput.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gvc.MixerSourceOutput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerSourceOutput.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.MixerSourceOutput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerSourceOutput.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.MixerSourceOutput.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.MixerSourceOutput.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    abstract class MixerStream extends GObjectClasses.Object {
        static '$gtype': GObject.GType<MixerStream>;
        // Properties
        get application_id(): string;
        set application_id(val: string);
        get applicationId(): string;
        set applicationId(val: string);
        get can_decibel(): boolean;
        set can_decibel(val: boolean);
        get canDecibel(): boolean;
        set canDecibel(val: boolean);
        get card_index(): number;
        set card_index(val: number);
        get cardIndex(): number;
        set cardIndex(val: number);
        get channel_map(): Gvc.ChannelMap;
        set channel_map(val: Gvc.ChannelMap);
        get channelMap(): Gvc.ChannelMap;
        set channelMap(val: Gvc.ChannelMap);
        get decibel(): number;
        set decibel(val: number);
        get description(): string;
        set description(val: string);
        get form_factor(): string;
        set form_factor(val: string);
        get formFactor(): string;
        set formFactor(val: string);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get id(): number;
        get index(): number;
        get is_event_stream(): boolean;
        set is_event_stream(val: boolean);
        get isEventStream(): boolean;
        set isEventStream(val: boolean);
        get is_muted(): boolean;
        set is_muted(val: boolean);
        get isMuted(): boolean;
        set isMuted(val: boolean);
        get is_virtual(): boolean;
        set is_virtual(val: boolean);
        get isVirtual(): boolean;
        set isVirtual(val: boolean);
        get name(): string;
        set name(val: string);
        get pa_context(): any;
        get paContext(): any;
        get port(): string;
        set port(val: string);
        get state(): Gvc.MixerStreamState;
        set state(val: Gvc.MixerStreamState);
        get sysfs_path(): string;
        set sysfs_path(val: string);
        get sysfsPath(): string;
        set sysfsPath(val: string);
        get volume(): number;
        set volume(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.MixerStream.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.MixerStream.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gvc.MixerStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.MixerStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.MixerStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.MixerStream.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_change_is_muted(is_muted: boolean): boolean;
        vfunc_change_port(port: string): boolean;
        vfunc_push_volume(operation?: any | null): boolean;
        // Methods
        change_is_muted(is_muted: boolean): boolean;
        change_port(port: string): boolean;
        get_application_id(): string;
        get_base_volume(): number;
        get_can_decibel(): boolean;
        get_card_index(): number;
        get_channel_map(): Gvc.ChannelMap;
        get_decibel(): number;
        get_description(): string;
        get_form_factor(): string;
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        get_id(): number;
        get_index(): number;
        get_is_muted(): boolean;
        get_name(): string;
        get_port(): Gvc.MixerStreamPort;
        get_ports(): Gvc.MixerStreamPort[];
        get_state(): Gvc.MixerStreamState;
        get_sysfs_path(): string;
        get_volume(): number;
        is_running(): boolean;
        push_volume(): boolean;
        set_application_id(application_id: string): boolean;
        set_base_volume(base_volume: number): boolean;
        set_can_decibel(can_decibel: boolean): boolean;
        set_card_index(card_index: number): boolean;
        set_decibel(db: number): boolean;
        set_description(description: string): boolean;
        set_form_factor(form_factor: string): boolean;
        set_icon_name(name: string): boolean;
        set_is_event_stream(is_event_stream: boolean): boolean;
        set_is_muted(is_muted: boolean): boolean;
        set_is_virtual(is_event_stream: boolean): boolean;
        set_name(name: string): boolean;
        set_port(port: string): boolean;
        set_ports(ports: Gvc.MixerStreamPort[]): boolean;
        set_state(state: Gvc.MixerStreamState | null): boolean;
        set_sysfs_path(sysfs_path: string): boolean;
        set_volume(volume: number): boolean;
    }
    class MixerUIDevice extends GObjectClasses.Object {
        static '$gtype': GObject.GType<MixerUIDevice>;
        // Properties
        get card(): any;
        set card(val: any);
        get description(): string;
        set description(val: string);
        get icon_name(): string;
        set icon_name(val: string);
        get iconName(): string;
        set iconName(val: string);
        get origin(): string;
        set origin(val: string);
        get port_available(): boolean;
        set port_available(val: boolean);
        get portAvailable(): boolean;
        set portAvailable(val: boolean);
        get port_name(): string;
        set port_name(val: string);
        get portName(): string;
        set portName(val: string);
        get stream_id(): number;
        set stream_id(val: number);
        get streamId(): number;
        set streamId(val: number);
        get type(): number;
        set type(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gvc.MixerUIDevice.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gvc.MixerUIDevice.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gvc.MixerUIDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerUIDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gvc.MixerUIDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gvc.MixerUIDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gvc.MixerUIDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gvc.MixerUIDevice.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_active_profile(): string;
        get_best_profile(selected: string | null, current: string): string;
        get_description(): string;
        get_gicon(): Gio.Icon;
        get_icon_name(): string;
        get_id(): number;
        get_matching_profile(profile: string): string;
        get_origin(): string;
        get_port(): string;
        get_profiles(): Gvc.MixerCardProfile[];
        get_stream_id(): number;
        get_supported_profiles(): Gvc.MixerCardProfile[];
        get_top_priority_profile(): string;
        get_user_preferred_profile(): string;
        has_ports(): boolean;
        invalidate_stream(): void;
        is_output(): boolean;
        /**
         * Assigns value to
         *  - device->priv->profiles (profiles to be added to combobox)
         *  - device->priv->supported_profiles (all profiles of this port)
         *  - device->priv->disable_profile_swapping (whether to show the combobox)
         *
         * This method attempts to reduce the list of profiles visible to the user by figuring out
         * from the context of that device (whether it's an input or an output) what profiles
         * actually provide an alternative.
         *
         * It does this by the following.
         *  - It ignores off profiles.
         *  - It takes the canonical name of the profile. That name is what you get when you
         *    ignore the other direction.
         *  - In the first iteration, it only adds the names of canonical profiles - i e
         *    when the other side is turned off.
         *  - Normally the first iteration covers all cases, but sometimes (e g bluetooth)
         *    it doesn't, so add other profiles whose canonical name isn't already added
         *    in a second iteration.
         *
         * @param in_profiles a list of GvcMixerCardProfile
         */
        set_profiles(in_profiles: Gvc.MixerCardProfile[]): void;
        set_user_preferred_profile(profile: string): void;
        should_profiles_be_hidden(): boolean;
    }
}
export default classes;
