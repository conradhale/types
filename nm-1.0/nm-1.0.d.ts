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
import type classes from './nm-1.0-classes.d.ts';
export { classes as NMClasses };
export namespace NM {
    /**
     * NM-1.0
     */
    /**
     * Indicates the 802.11 mode an access point or device is currently in.
     */
    export namespace __80211Mode {
        export const $gtype: GObject.GType<__80211Mode>;
    }
    enum __80211Mode {
        /**
         * the device or access point mode is unknown
         */
        UNKNOWN,
        /**
         * for both devices and access point objects, indicates
         *   the object is part of an Ad-Hoc 802.11 network without a central
         *   coordinating access point.
         */
        ADHOC = 1,
        /**
         * the device or access point is in infrastructure mode.
         *   For devices, this indicates the device is an 802.11 client/station.  For
         *   access point objects, this indicates the object is an access point that
         *   provides connectivity to clients.
         */
        INFRA = 2,
        /**
         * the device is an access point/hotspot.  Not valid for
         *   access point objects; used only for hotspot mode on the local machine.
         */
        AP = 3,
        /**
         * the device is a 802.11s mesh point. Since: 1.20.
         */
        MESH = 4,
    }
    /**
     * #NMActiveConnectionState values indicate the state of a connection to a
     * specific network while it is starting, connected, or disconnecting from that
     * network.
     */
    export namespace ActiveConnectionState {
        export const $gtype: GObject.GType<ActiveConnectionState>;
    }
    enum ActiveConnectionState {
        /**
         * the state of the connection is unknown
         */
        UNKNOWN,
        /**
         * a network connection is being prepared
         */
        ACTIVATING = 1,
        /**
         * there is a connection to the network
         */
        ACTIVATED = 2,
        /**
         * the network connection is being
         *   torn down and cleaned up
         */
        DEACTIVATING = 3,
        /**
         * the network connection is disconnected
         *   and will be removed
         */
        DEACTIVATED = 4,
    }
    /**
     * Active connection state reasons.
     */
    export namespace ActiveConnectionStateReason {
        export const $gtype: GObject.GType<ActiveConnectionStateReason>;
    }
    enum ActiveConnectionStateReason {
        /**
         * The reason for the active connection
         *   state change is unknown.
         */
        UNKNOWN,
        /**
         * No reason was given for the active
         *   connection state change.
         */
        NONE = 1,
        /**
         * The active connection changed
         *   state because the user disconnected it.
         */
        USER_DISCONNECTED = 2,
        /**
         * The active connection
         *   changed state because the device it was using was disconnected.
         */
        DEVICE_DISCONNECTED = 3,
        /**
         * The service providing the
         *   VPN connection was stopped.
         */
        SERVICE_STOPPED = 4,
        /**
         * The IP config of the active
         *   connection was invalid.
         */
        IP_CONFIG_INVALID = 5,
        /**
         * The connection attempt to
         *   the VPN service timed out.
         */
        CONNECT_TIMEOUT = 6,
        /**
         * A timeout occurred
         *   while starting the service providing the VPN connection.
         */
        SERVICE_START_TIMEOUT = 7,
        /**
         * Starting the service
         *   providing the VPN connection failed.
         */
        SERVICE_START_FAILED = 8,
        /**
         * Necessary secrets for the
         *   connection were not provided.
         */
        NO_SECRETS = 9,
        /**
         * Authentication to the
         *   server failed.
         */
        LOGIN_FAILED = 10,
        /**
         * The connection was
         *   deleted from settings.
         */
        CONNECTION_REMOVED = 11,
        /**
         * Master connection of this
         *   connection failed to activate.
         */
        DEPENDENCY_FAILED = 12,
        /**
         * Could not create the
         *   software device link.
         */
        DEVICE_REALIZE_FAILED = 13,
        /**
         * The device this connection
         *   depended on disappeared.
         */
        DEVICE_REMOVED = 14,
    }
    /**
     * Errors returned from the secret-agent manager.
     *
     * These errors may be returned from operations that could cause secrets to be
     * requested (such as nm_client_activate_connection()), and correspond to D-Bus
     * errors in the "org.freedesktop.NetworkManager.AgentManager" namespace.
     */
    class AgentManagerError extends GLib.Error {
        static '$gtype': GObject.GType<AgentManagerError>;
        // Static Fields
        /**
         * unknown or unspecified error
         */
        static FAILED: number;
        /**
         * The caller does not have permission
         *   to register a secret agent, or is trying to register the same secret agent
         *   twice.
         */
        static PERMISSIONDENIED: number;
        /**
         * The identifier is not a valid
         *   secret agent identifier.
         */
        static INVALIDIDENTIFIER: number;
        /**
         * The caller tried to unregister an agent
         *   that was not registered.
         */
        static NOTREGISTERED: number;
        /**
         * No secret agent returned secrets for this
         *   request
         */
        static NOSECRETS: number;
        /**
         * The user canceled the secrets request.
         */
        static USERCANCELED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * #NMCapability names the numbers in the Capabilities property.
     * Capabilities are positive numbers. They are part of stable API
     * and a certain capability number is guaranteed not to change.
     *
     * The range 0x7000 - 0x7FFF of capabilities is guaranteed not to be
     * used by upstream NetworkManager. It could thus be used for downstream
     * extensions.
     */
    export namespace Capability {
        export const $gtype: GObject.GType<Capability>;
    }
    enum Capability {
        /**
         * Teams can be managed. This means the team device plugin
         *   is loaded.
         */
        TEAM = 1,
        /**
         * OpenVSwitch can be managed. This means the OVS device plugin
         *   is loaded. Since: 1.24.
         */
        OVS = 2,
    }
    /**
     * Describes errors that may result from operations involving a #NMClient.
     *
     * D-Bus operations may also return errors from other domains, including
     * #NMManagerError, #NMSettingsError, #NMAgentManagerError, and #NMConnectionError.
     */
    class ClientError extends GLib.Error {
        static '$gtype': GObject.GType<ClientError>;
        // Static Fields
        /**
         * unknown or unclassified error
         */
        static FAILED: number;
        /**
         * an operation that requires NetworkManager
         *   failed because NetworkManager is not running
         */
        static MANAGER_NOT_RUNNING: number;
        /**
         * NetworkManager claimed that an
         *   operation succeeded, but the object that was allegedly created (eg,
         *   #NMRemoteConnection, #NMActiveConnection) was apparently destroyed before
         *   #NMClient could create a representation of it.
         */
        static OBJECT_CREATION_FAILED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        /**
         * Registers an error quark for #NMClient if necessary.
         */
        static quark(): GLib.Quark;
    }
    /**
     * #NMClientPermission values indicate various permissions that NetworkManager
     * clients can obtain to perform certain tasks on behalf of the current user.
     */
    export namespace ClientPermission {
        export const $gtype: GObject.GType<ClientPermission>;
    }
    enum ClientPermission {
        /**
         * unknown or no permission
         */
        NONE,
        /**
         * controls whether networking
         *  can be globally enabled or disabled
         */
        ENABLE_DISABLE_NETWORK = 1,
        /**
         * controls whether Wi-Fi can be
         *  globally enabled or disabled
         */
        ENABLE_DISABLE_WIFI = 2,
        /**
         * controls whether WWAN (3G) can be
         *  globally enabled or disabled
         */
        ENABLE_DISABLE_WWAN = 3,
        /**
         * controls whether WiMAX can be
         *  globally enabled or disabled
         */
        ENABLE_DISABLE_WIMAX = 4,
        /**
         * controls whether the client can ask
         *  NetworkManager to sleep and wake
         */
        SLEEP_WAKE = 5,
        /**
         * controls whether networking connections
         *  can be started, stopped, and changed
         */
        NETWORK_CONTROL = 6,
        /**
         * controls whether a password
         *  protected Wi-Fi hotspot can be created
         */
        WIFI_SHARE_PROTECTED = 7,
        /**
         * controls whether an open Wi-Fi hotspot
         *  can be created
         */
        WIFI_SHARE_OPEN = 8,
        /**
         * controls whether connections
         *  that are available to all users can be modified
         */
        SETTINGS_MODIFY_SYSTEM = 9,
        /**
         * controls whether connections
         *  owned by the current user can be modified
         */
        SETTINGS_MODIFY_OWN = 10,
        /**
         * controls whether the
         *  persistent hostname can be changed
         */
        SETTINGS_MODIFY_HOSTNAME = 11,
        /**
         * modify persistent global
         *  DNS configuration
         */
        SETTINGS_MODIFY_GLOBAL_DNS = 12,
        /**
         * controls access to Reload.
         */
        RELOAD = 13,
        /**
         * permission to create checkpoints.
         */
        CHECKPOINT_ROLLBACK = 14,
        /**
         * controls whether device
         *  statistics can be globally enabled or disabled
         */
        ENABLE_DISABLE_STATISTICS = 15,
        /**
         * controls whether
         *  connectivity check can be enabled or disabled
         */
        ENABLE_DISABLE_CONNECTIVITY_CHECK = 16,
        /**
         * controls whether wifi scans can be performed
         */
        WIFI_SCAN = 17,
        /**
         * a reserved boundary value
         */
        LAST = 17,
    }
    /**
     * #NMClientPermissionResult values indicate what authorizations and permissions
     * the user requires to obtain a given #NMClientPermission
     */
    export namespace ClientPermissionResult {
        export const $gtype: GObject.GType<ClientPermissionResult>;
    }
    enum ClientPermissionResult {
        /**
         * unknown or no authorization
         */
        UNKNOWN,
        /**
         * the permission is available
         */
        YES = 1,
        /**
         * authorization is necessary before the
         *  permission is available
         */
        AUTH = 2,
        /**
         * permission to perform the operation is
         *  denied by system policy
         */
        NO = 3,
    }
    /**
     * Describes errors that may result from operations involving a #NMConnection
     * or its #NMSettings.
     *
     * These errors may be returned directly from #NMConnection and #NMSetting
     * methods, or may be returned from D-Bus operations (eg on #NMClient or
     * #NMDevice), where they correspond to errors in the
     * "org.freedesktop.NetworkManager.Settings.Connection" namespace.
     */
    class ConnectionError extends GLib.Error {
        static '$gtype': GObject.GType<ConnectionError>;
        // Static Fields
        /**
         * unknown or unclassified error
         */
        static FAILED: number;
        /**
         * the #NMConnection object
         *   did not contain the specified #NMSetting object
         */
        static SETTINGNOTFOUND: number;
        /**
         * the #NMConnection did not contain the
         *   requested #NMSetting property
         */
        static PROPERTYNOTFOUND: number;
        /**
         * an operation which requires a secret
         *   was attempted on a non-secret property
         */
        static PROPERTYNOTSECRET: number;
        /**
         * the #NMConnection object is missing an
         *   #NMSetting which is required for its configuration. The error message will
         *   always be prefixed with "&lt;setting-name>: ", where "&lt;setting-name>" is the
         *   name of the setting that is missing.
         */
        static MISSINGSETTING: number;
        /**
         * the #NMConnection object contains an
         *   invalid or inappropriate #NMSetting. The error message will always be
         *   prefixed with "&lt;setting-name>: ", where "&lt;setting-name>" is the name of the
         *   setting that is invalid.
         */
        static INVALIDSETTING: number;
        /**
         * the #NMConnection object is invalid
         *   because it is missing a required property. The error message will always be
         *   prefixed with "&lt;setting-name>.&lt;property-name>: ", where "&lt;setting-name>" is
         *   the name of the setting with the missing property, and "&lt;property-name>" is
         *   the property that is missing.
         */
        static MISSINGPROPERTY: number;
        /**
         * the #NMConnection object is invalid
         *   because a property has an invalid value. The error message will always be
         *   prefixed with "&lt;setting-name>.&lt;property-name>: ", where "&lt;setting-name>" is
         *   the name of the setting with the invalid property, and "&lt;property-name>" is
         *   the property that is invalid.
         */
        static INVALIDPROPERTY: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    export namespace ConnectionMultiConnect {
        export const $gtype: GObject.GType<ConnectionMultiConnect>;
    }
    enum ConnectionMultiConnect {
        /**
         * indicates that the per-connection
         *   setting is unspecified. In this case, it will fallback to the default
         *   value, which is %NM_CONNECTION_MULTI_CONNECT_SINGLE.
         */
        DEFAULT,
        /**
         * the connection profile can only
         *   be active once at each moment. Activating a profile that is already active,
         *   will first deactivate it.
         */
        SINGLE = 1,
        /**
         * the profile can
         *   be manually activated multiple times on different devices. However,
         *   regarding autoconnect, the profile will autoconnect only if it is
         *   currently not connected otherwise.
         */
        MANUAL_MULTIPLE = 2,
        /**
         * the profile can autoactivate
         *   and be manually activated multiple times together.
         */
        MULTIPLE = 3,
    }
    export namespace ConnectivityState {
        export const $gtype: GObject.GType<ConnectivityState>;
    }
    enum ConnectivityState {
        /**
         * Network connectivity is unknown. This means the
         *   connectivity checks are disabled (e.g. on server installations) or has
         *   not run yet. The graphical shell should assume the Internet connection
         *   might be available and not present a captive portal window.
         */
        UNKNOWN,
        /**
         * The host is not connected to any network. There's
         *   no active connection that contains a default route to the internet and
         *   thus it makes no sense to even attempt a connectivity check. The graphical
         *   shell should use this state to indicate the network connection is unavailable.
         */
        NONE = 1,
        /**
         * The Internet connection is hijacked by a captive
         *   portal gateway. The graphical shell may open a sandboxed web browser window
         *   (because the captive portals typically attempt a man-in-the-middle attacks
         *   against the https connections) for the purpose of authenticating to a gateway
         *   and retrigger the connectivity check with CheckConnectivity() when the
         *   browser window is dismissed.
         */
        PORTAL = 2,
        /**
         * The host is connected to a network, does not appear
         *   to be able to reach the full Internet, but a captive portal has not been
         *   detected.
         */
        LIMITED = 3,
        /**
         * The host is connected to a network, and
         *   appears to be able to reach the full Internet.
         */
        FULL = 4,
    }
    /**
     * Cryptography-related errors that can be returned from some nm-utils methods,
     * and some #NMSetting8021x operations.
     */
    class CryptoError extends GLib.Error {
        static '$gtype': GObject.GType<CryptoError>;
        // Static Fields
        /**
         * generic failure
         */
        static FAILED: number;
        /**
         * the certificate or key data provided
         *   was invalid
         */
        static INVALID_DATA: number;
        /**
         * the password was invalid
         */
        static INVALID_PASSWORD: number;
        /**
         * the data uses an unknown cipher
         */
        static UNKNOWN_CIPHER: number;
        /**
         * decryption failed
         */
        static DECRYPTION_FAILED: number;
        /**
         * encryption failed
         */
        static ENCRYPTION_FAILED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * Device-related errors.
     *
     * These errors may be returned directly from #NMDevice methods, or may be
     * returned from D-Bus operations (where they correspond to errors in the
     * "org.freedesktop.NetworkManager.Device" namespace).
     */
    class DeviceError extends GLib.Error {
        static '$gtype': GObject.GType<DeviceError>;
        // Static Fields
        /**
         * unknown or unclassified error
         */
        static FAILED: number;
        /**
         * NetworkManager failed to create the device
         */
        static CREATIONFAILED: number;
        /**
         * the specified connection is not valid
         */
        static INVALIDCONNECTION: number;
        /**
         * the specified connection is not
         *   compatible with this device.
         */
        static INCOMPATIBLECONNECTION: number;
        /**
         * the device does not have an active connection
         */
        static NOTACTIVE: number;
        /**
         * the requested operation is only valid on
         *   software devices.
         */
        static NOTSOFTWARE: number;
        /**
         * the requested operation is not allowed at
         *   this time.
         */
        static NOTALLOWED: number;
        /**
         * the "specific object" in the
         *   activation request (eg, the #NMAccessPoint or #NMWimaxNsp) was not
         *   found.
         */
        static SPECIFICOBJECTNOTFOUND: number;
        /**
         * the version id did not match.
         */
        static VERSIONIDMISMATCH: number;
        /**
         * the requested operation could not
         *   be completed due to missing dependencies.
         */
        static MISSINGDEPENDENCIES: number;
        /**
         * invalid argument. Since: 1.16.
         */
        static INVALIDARGUMENT: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    export namespace DeviceState {
        export const $gtype: GObject.GType<DeviceState>;
    }
    enum DeviceState {
        /**
         * the device's state is unknown
         */
        UNKNOWN,
        /**
         * the device is recognized, but not managed by
         *   NetworkManager
         */
        UNMANAGED = 10,
        /**
         * the device is managed by NetworkManager, but
         *   is not available for use.  Reasons may include the wireless switched off,
         *   missing firmware, no ethernet carrier, missing supplicant or modem manager,
         *   etc.
         */
        UNAVAILABLE = 20,
        /**
         * the device can be activated, but is currently
         *   idle and not connected to a network.
         */
        DISCONNECTED = 30,
        /**
         * the device is preparing the connection to the
         *   network.  This may include operations like changing the MAC address,
         *   setting physical link properties, and anything else required to connect
         *   to the requested network.
         */
        PREPARE = 40,
        /**
         * the device is connecting to the requested network.
         *   This may include operations like associating with the Wi-Fi AP, dialing
         *   the modem, connecting to the remote Bluetooth device, etc.
         */
        CONFIG = 50,
        /**
         * the device requires more information to continue
         *   connecting to the requested network.  This includes secrets like WiFi
         *   passphrases, login passwords, PIN codes, etc.
         */
        NEED_AUTH = 60,
        /**
         * the device is requesting IPv4 and/or IPv6
         *   addresses and routing information from the network.
         */
        IP_CONFIG = 70,
        /**
         * the device is checking whether further action is
         *   required for the requested network connection.  This may include checking
         *   whether only local network access is available, whether a captive portal
         *   is blocking access to the Internet, etc.
         */
        IP_CHECK = 80,
        /**
         * the device is waiting for a secondary
         *   connection (like a VPN) which must activated before the device can be
         *   activated
         */
        SECONDARIES = 90,
        /**
         * the device has a network connection, either local
         *   or global.
         */
        ACTIVATED = 100,
        /**
         * a disconnection from the current network
         *   connection was requested, and the device is cleaning up resources used for
         *   that connection.  The network connection may still be valid.
         */
        DEACTIVATING = 110,
        /**
         * the device failed to connect to the requested
         *   network and is cleaning up the connection request
         */
        FAILED = 120,
    }
    /**
     * Device state change reason codes
     */
    export namespace DeviceStateReason {
        export const $gtype: GObject.GType<DeviceStateReason>;
    }
    enum DeviceStateReason {
        /**
         * No reason given
         */
        NONE,
        /**
         * Unknown error
         */
        UNKNOWN = 1,
        /**
         * Device is now managed
         */
        NOW_MANAGED = 2,
        /**
         * Device is now unmanaged
         */
        NOW_UNMANAGED = 3,
        /**
         * The device could not be readied for configuration
         */
        CONFIG_FAILED = 4,
        /**
         * IP configuration could not be reserved (no available address, timeout, etc)
         */
        IP_CONFIG_UNAVAILABLE = 5,
        /**
         * The IP config is no longer valid
         */
        IP_CONFIG_EXPIRED = 6,
        /**
         * Secrets were required, but not provided
         */
        NO_SECRETS = 7,
        /**
         * 802.1x supplicant disconnected
         */
        SUPPLICANT_DISCONNECT = 8,
        /**
         * 802.1x supplicant configuration failed
         */
        SUPPLICANT_CONFIG_FAILED = 9,
        /**
         * 802.1x supplicant failed
         */
        SUPPLICANT_FAILED = 10,
        /**
         * 802.1x supplicant took too long to authenticate
         */
        SUPPLICANT_TIMEOUT = 11,
        /**
         * PPP service failed to start
         */
        PPP_START_FAILED = 12,
        /**
         * PPP service disconnected
         */
        PPP_DISCONNECT = 13,
        /**
         * PPP failed
         */
        PPP_FAILED = 14,
        /**
         * DHCP client failed to start
         */
        DHCP_START_FAILED = 15,
        /**
         * DHCP client error
         */
        DHCP_ERROR = 16,
        /**
         * DHCP client failed
         */
        DHCP_FAILED = 17,
        /**
         * Shared connection service failed to start
         */
        SHARED_START_FAILED = 18,
        /**
         * Shared connection service failed
         */
        SHARED_FAILED = 19,
        /**
         * AutoIP service failed to start
         */
        AUTOIP_START_FAILED = 20,
        /**
         * AutoIP service error
         */
        AUTOIP_ERROR = 21,
        /**
         * AutoIP service failed
         */
        AUTOIP_FAILED = 22,
        /**
         * The line is busy
         */
        MODEM_BUSY = 23,
        /**
         * No dial tone
         */
        MODEM_NO_DIAL_TONE = 24,
        /**
         * No carrier could be established
         */
        MODEM_NO_CARRIER = 25,
        /**
         * The dialing request timed out
         */
        MODEM_DIAL_TIMEOUT = 26,
        /**
         * The dialing attempt failed
         */
        MODEM_DIAL_FAILED = 27,
        /**
         * Modem initialization failed
         */
        MODEM_INIT_FAILED = 28,
        /**
         * Failed to select the specified APN
         */
        GSM_APN_FAILED = 29,
        /**
         * Not searching for networks
         */
        GSM_REGISTRATION_NOT_SEARCHING = 30,
        /**
         * Network registration denied
         */
        GSM_REGISTRATION_DENIED = 31,
        /**
         * Network registration timed out
         */
        GSM_REGISTRATION_TIMEOUT = 32,
        /**
         * Failed to register with the requested network
         */
        GSM_REGISTRATION_FAILED = 33,
        /**
         * PIN check failed
         */
        GSM_PIN_CHECK_FAILED = 34,
        /**
         * Necessary firmware for the device may be missing
         */
        FIRMWARE_MISSING = 35,
        /**
         * The device was removed
         */
        REMOVED = 36,
        /**
         * NetworkManager went to sleep
         */
        SLEEPING = 37,
        /**
         * The device's active connection disappeared
         */
        CONNECTION_REMOVED = 38,
        /**
         * Device disconnected by user or client
         */
        USER_REQUESTED = 39,
        /**
         * Carrier/link changed
         */
        CARRIER = 40,
        /**
         * The device's existing connection was assumed
         */
        CONNECTION_ASSUMED = 41,
        /**
         * The supplicant is now available
         */
        SUPPLICANT_AVAILABLE = 42,
        /**
         * The modem could not be found
         */
        MODEM_NOT_FOUND = 43,
        /**
         * The Bluetooth connection failed or timed out
         */
        BT_FAILED = 44,
        /**
         * GSM Modem's SIM Card not inserted
         */
        GSM_SIM_NOT_INSERTED = 45,
        /**
         * GSM Modem's SIM Pin required
         */
        GSM_SIM_PIN_REQUIRED = 46,
        /**
         * GSM Modem's SIM Puk required
         */
        GSM_SIM_PUK_REQUIRED = 47,
        /**
         * GSM Modem's SIM wrong
         */
        GSM_SIM_WRONG = 48,
        /**
         * InfiniBand device does not support connected mode
         */
        INFINIBAND_MODE = 49,
        /**
         * A dependency of the connection failed
         */
        DEPENDENCY_FAILED = 50,
        /**
         * Problem with the RFC 2684 Ethernet over ADSL bridge
         */
        'BR2684_FAILED' = 51,
        /**
         * ModemManager not running
         */
        MODEM_MANAGER_UNAVAILABLE = 52,
        /**
         * The Wi-Fi network could not be found
         */
        SSID_NOT_FOUND = 53,
        /**
         * A secondary connection of the base connection failed
         */
        SECONDARY_CONNECTION_FAILED = 54,
        /**
         * DCB or FCoE setup failed
         */
        DCB_FCOE_FAILED = 55,
        /**
         * teamd control failed
         */
        TEAMD_CONTROL_FAILED = 56,
        /**
         * Modem failed or no longer available
         */
        MODEM_FAILED = 57,
        /**
         * Modem now ready and available
         */
        MODEM_AVAILABLE = 58,
        /**
         * SIM PIN was incorrect
         */
        SIM_PIN_INCORRECT = 59,
        /**
         * New connection activation was enqueued
         */
        NEW_ACTIVATION = 60,
        /**
         * the device's parent changed
         */
        PARENT_CHANGED = 61,
        /**
         * the device parent's management changed
         */
        PARENT_MANAGED_CHANGED = 62,
        /**
         * problem communicating with Open vSwitch database
         */
        OVSDB_FAILED = 63,
        /**
         * a duplicate IP address was detected
         */
        IP_ADDRESS_DUPLICATE = 64,
        /**
         * The selected IP method is not supported
         */
        IP_METHOD_UNSUPPORTED = 65,
        /**
         * configuration of SR-IOV parameters failed
         */
        SRIOV_CONFIGURATION_FAILED = 66,
        /**
         * The Wi-Fi P2P peer could not be found
         */
        PEER_NOT_FOUND = 67,
        /**
         * The device handler dispatcher returned an
         *   error. Since: 1.46
         */
        DEVICE_HANDLER_FAILED = 68,
        /**
         * The device is unmanaged because the device type
         *   is unmanaged by default. Since: 1.48
         */
        UNMANAGED_BY_DEFAULT = 69,
        /**
         * The device is unmanaged because it is an
         *   external device and is unconfigured (down or without addresses). Since: 1.48
         */
        UNMANAGED_EXTERNAL_DOWN = 70,
        /**
         * The device is unmanaged because the link is
         *   not initialized by udev. Since: 1.48
         */
        UNMANAGED_LINK_NOT_INIT = 71,
        /**
         * The device is unmanaged because NetworkManager is
         *   quitting. Since: 1.48
         */
        UNMANAGED_QUITTING = 72,
        /**
         * The device is unmanaged because networking is
         *   disabled or the system is suspended. Since: 1.48
         */
        UNMANAGED_SLEEPING = 73,
        /**
         * The device is unmanaged by user decision in
         *   NetworkManager.conf ('unmanaged' in a [device*] section). Since: 1.48
         */
        UNMANAGED_USER_CONF = 74,
        /**
         * The device is unmanaged by explicit user
         *   decision (e.g. 'nmcli device set $DEV managed no'). Since: 1.48
         */
        UNMANAGED_USER_EXPLICIT = 75,
        /**
         * The device is unmanaged by user decision
         *   via settings plugin ('unmanaged-devices' for keyfile or 'NM_CONTROLLED=no' for ifcfg-rh).
         *   Since: 1.48
         */
        UNMANAGED_USER_SETTINGS = 76,
        /**
         * The device is unmanaged via udev rule. Since: 1.48
         */
        UNMANAGED_USER_UDEV = 77,
    }
    /**
     * #NMDeviceType values indicate the type of hardware represented by a
     * device object.
     */
    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }
    enum DeviceType {
        /**
         * unknown device
         */
        UNKNOWN,
        /**
         * a wired ethernet device
         */
        ETHERNET = 1,
        /**
         * an 802.11 Wi-Fi device
         */
        WIFI = 2,
        /**
         * not used
         */
        'UNUSED1' = 3,
        /**
         * not used
         */
        'UNUSED2' = 4,
        /**
         * a Bluetooth device supporting PAN or DUN access protocols
         */
        BT = 5,
        /**
         * an OLPC XO mesh networking device
         */
        OLPC_MESH = 6,
        /**
         * an 802.16e Mobile WiMAX broadband device
         */
        WIMAX = 7,
        /**
         * a modem supporting analog telephone, CDMA/EVDO,
         * GSM/UMTS, or LTE network access protocols
         */
        MODEM = 8,
        /**
         * an IP-over-InfiniBand device
         */
        INFINIBAND = 9,
        /**
         * a bond controller interface
         */
        BOND = 10,
        /**
         * an 802.1Q VLAN interface
         */
        VLAN = 11,
        /**
         * ADSL modem
         */
        ADSL = 12,
        /**
         * a bridge controller interface
         */
        BRIDGE = 13,
        /**
         * generic support for unrecognized device types
         */
        GENERIC = 14,
        /**
         * a team controller interface
         */
        TEAM = 15,
        /**
         * a TUN or TAP interface
         */
        TUN = 16,
        /**
         * a IP tunnel interface
         */
        IP_TUNNEL = 17,
        /**
         * a MACVLAN interface
         */
        MACVLAN = 18,
        /**
         * a VXLAN interface
         */
        VXLAN = 19,
        /**
         * a VETH interface
         */
        VETH = 20,
        /**
         * a MACsec interface
         */
        MACSEC = 21,
        /**
         * a dummy interface
         */
        DUMMY = 22,
        /**
         * a PPP interface
         */
        PPP = 23,
        /**
         * a Open vSwitch interface
         */
        OVS_INTERFACE = 24,
        /**
         * a Open vSwitch port
         */
        OVS_PORT = 25,
        /**
         * a Open vSwitch bridge
         */
        OVS_BRIDGE = 26,
        /**
         * a IEEE 802.15.4 (WPAN) MAC Layer Device
         */
        WPAN = 27,
        /**
         * 6LoWPAN interface
         */
        '6LOWPAN' = 28,
        /**
         * a WireGuard interface
         */
        WIREGUARD = 29,
        /**
         * an 802.11 Wi-Fi P2P device. Since: 1.16.
         */
        'WIFI_P2P' = 30,
        /**
         * A VRF (Virtual Routing and Forwarding) interface. Since: 1.24.
         */
        VRF = 31,
        /**
         * a loopback interface. Since: 1.42.
         */
        LOOPBACK = 32,
        /**
         * A HSR/PRP device. Since: 1.46.
         */
        HSR = 33,
    }
    /**
     * The tunneling mode.
     */
    export namespace IPTunnelMode {
        export const $gtype: GObject.GType<IPTunnelMode>;
    }
    enum IPTunnelMode {
        /**
         * Unknown/unset tunnel mode
         */
        UNKNOWN,
        /**
         * IP in IP tunnel
         */
        IPIP = 1,
        /**
         * GRE tunnel
         */
        GRE = 2,
        /**
         * SIT tunnel
         */
        SIT = 3,
        /**
         * ISATAP tunnel
         */
        ISATAP = 4,
        /**
         * VTI tunnel
         */
        VTI = 5,
        /**
         * IPv6 in IPv6 tunnel
         */
        'IP6IP6' = 6,
        /**
         * IPv4 in IPv6 tunnel
         */
        'IPIP6' = 7,
        /**
         * IPv6 GRE tunnel
         */
        'IP6GRE' = 8,
        /**
         * IPv6 VTI tunnel
         */
        'VTI6' = 9,
        /**
         * GRETAP tunnel
         */
        GRETAP = 10,
        /**
         * IPv6 GRETAP tunnel
         */
        'IP6GRETAP' = 11,
    }
    /**
     * The type of the callback for %NMKeyfileReadHandler and %NMKeyfileWriteHandler.
     * Depending on the type, you can interpret %NMKeyfileHandlerData.
     */
    export namespace KeyfileHandlerType {
        export const $gtype: GObject.GType<KeyfileHandlerType>;
    }
    enum KeyfileHandlerType {
        /**
         * a warning.
         */
        WARN = 1,
        /**
         * for handling certificates while writing
         *   a connection to keyfile.
         */
        WRITE_CERT = 2,
    }
    /**
     * The severity level of %NM_KEYFILE_HANDLER_TYPE_WARN events.
     */
    export namespace KeyfileWarnSeverity {
        export const $gtype: GObject.GType<KeyfileWarnSeverity>;
    }
    enum KeyfileWarnSeverity {
        /**
         * debug message
         */
        DEBUG = 1000,
        /**
         * info message
         */
        INFO = 2000,
        /**
         * info message about a missing file
         */
        INFO_MISSING_FILE = 2901,
        /**
         * a warning message
         */
        WARN = 3000,
    }
    /**
     * Errors related to the main "network management" interface of NetworkManager.
     * These may be returned from #NMClient methods that invoke D-Bus operations on
     * the "org.freedesktop.NetworkManager" interface, and correspond to D-Bus
     * errors in that namespace.
     */
    class ManagerError extends GLib.Error {
        static '$gtype': GObject.GType<ManagerError>;
        // Static Fields
        /**
         * unknown or unclassified error
         */
        static FAILED: number;
        /**
         * Permission denied.
         */
        static PERMISSIONDENIED: number;
        /**
         * The requested connection is not known.
         */
        static UNKNOWNCONNECTION: number;
        /**
         * The requested device is not known.
         */
        static UNKNOWNDEVICE: number;
        /**
         * The requested connection cannot be
         *   activated at this time.
         */
        static CONNECTIONNOTAVAILABLE: number;
        /**
         * The request could not be completed
         *   because a required connection is not active.
         */
        static CONNECTIONNOTACTIVE: number;
        /**
         * The connection to be activated was
         *   already active on another device.
         */
        static CONNECTIONALREADYACTIVE: number;
        /**
         * An activation request failed due to a
         *   dependency being unavailable.
         */
        static DEPENDENCYFAILED: number;
        /**
         * The manager is already in the requested
         *   sleep/wake state.
         */
        static ALREADYASLEEPORAWAKE: number;
        /**
         * The network is already
         *   enabled/disabled.
         */
        static ALREADYENABLEDORDISABLED: number;
        /**
         * Unknown log level in SetLogging
         */
        static UNKNOWNLOGLEVEL: number;
        /**
         * Unknown log domain in SetLogging
         */
        static UNKNOWNLOGDOMAIN: number;
        /**
         * Invalid arguments for D-Bus request
         */
        static INVALIDARGUMENTS: number;
        /**
         * A plug-in was needed to complete the
         *   activation but is not available.
         */
        static MISSINGPLUGIN: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * The NMMetered enum has two different purposes: one is to configure
     * "connection.metered" setting of a connection profile in #NMSettingConnection, and
     * the other is to express the actual metered state of the #NMDevice at a given moment.
     *
     * For the connection profile only #NM_METERED_UNKNOWN, #NM_METERED_NO
     * and #NM_METERED_YES are allowed.
     *
     * The device's metered state at runtime is determined by the profile
     * which is currently active. If the profile explicitly specifies #NM_METERED_NO
     * or #NM_METERED_YES, then the device's metered state is as such.
     * If the connection profile leaves it undecided at #NM_METERED_UNKNOWN (the default),
     * then NetworkManager tries to guess the metered state, for example based on the
     * device type or on DHCP options (like Android devices exposing a "ANDROID_METERED"
     * DHCP vendor option). This then leads to either #NM_METERED_GUESS_NO or #NM_METERED_GUESS_YES.
     *
     * Most applications probably should treat the runtime state #NM_METERED_GUESS_YES
     * like #NM_METERED_YES, and all other states as not metered.
     *
     * Note that the per-device metered states are then combined to a global metered
     * state. This is basically the metered state of the device with the best default
     * route. However, that generalization of a global metered state may not be correct
     * if the default routes for IPv4 and IPv6 are on different devices, or if policy
     * routing is configured. In general, the global metered state tries to express whether
     * the traffic is likely metered, but since that depends on the traffic itself,
     * there is not one answer in all cases. Hence, an application may want to consider
     * the per-device's metered states.
     */
    export namespace Metered {
        export const $gtype: GObject.GType<Metered>;
    }
    enum Metered {
        /**
         * The metered status is unknown
         */
        UNKNOWN,
        /**
         * Metered, the value was explicitly configured
         */
        YES = 1,
        /**
         * Not metered, the value was explicitly configured
         */
        NO = 2,
        /**
         * Metered, the value was guessed
         */
        GUESS_YES = 3,
        /**
         * Not metered, the value was guessed
         */
        GUESS_NO = 4,
    }
    /**
     * The result of a checkpoint Rollback() operation for a specific device.
     */
    export namespace RollbackResult {
        export const $gtype: GObject.GType<RollbackResult>;
    }
    enum RollbackResult {
        /**
         * the rollback succeeded.
         */
        OK,
        /**
         * the device no longer exists.
         */
        ERR_NO_DEVICE = 1,
        /**
         * the device is now unmanaged.
         */
        ERR_DEVICE_UNMANAGED = 2,
        /**
         * other errors during rollback.
         */
        ERR_FAILED = 3,
    }
    /**
     * #NMSecretAgentError values are passed by secret agents back to NetworkManager
     * when they encounter problems retrieving secrets on behalf of NM. They
     * correspond to errors in the "org.freedesktop.NetworkManager.SecretManager"
     * namespace.
     *
     * Client APIs such as nm_client_activate_connection() will not see these error
     * codes; instead, the secret agent manager will translate them to the
     * corresponding #NMAgentManagerError codes.
     */
    class SecretAgentError extends GLib.Error {
        static '$gtype': GObject.GType<SecretAgentError>;
        // Static Fields
        /**
         * unknown or unclassified error
         */
        static FAILED: number;
        /**
         * the caller (ie, NetworkManager) is
         *   not authorized to make this request
         */
        static PERMISSIONDENIED: number;
        /**
         * the connection for which secrets
         *   were requested is invalid
         */
        static INVALIDCONNECTION: number;
        /**
         * the request was canceled by the user
         */
        static USERCANCELED: number;
        /**
         * the agent canceled the request
         *   because it was requested to do so by NetworkManager
         */
        static AGENTCANCELED: number;
        /**
         * the agent cannot find any secrets for this
         *   connection
         */
        static NOSECRETS: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * #NMSetting8021xCKFormat values indicate the general type of a certificate
     * or private key
     */
    export namespace Setting8021xCKFormat {
        export const $gtype: GObject.GType<Setting8021xCKFormat>;
    }
    enum Setting8021xCKFormat {
        /**
         * unknown file format
         */
        UNKNOWN,
        /**
         * file contains an X.509 format certificate
         */
        'X509' = 1,
        /**
         * file contains an old-style OpenSSL PEM
         * or DER private key
         */
        RAW_KEY = 2,
        /**
         * file contains a PKCS#<!-- -->12 certificate
         * and private key
         */
        'PKCS12' = 3,
    }
    /**
     * #NMSetting8021xCKScheme values indicate how a certificate or private key is
     * stored in the setting properties, either as a blob of the item's data, or as
     * a path to a certificate or private key file on the filesystem
     */
    export namespace Setting8021xCKScheme {
        export const $gtype: GObject.GType<Setting8021xCKScheme>;
    }
    enum Setting8021xCKScheme {
        /**
         * unknown certificate or private key
         * scheme
         */
        UNKNOWN,
        /**
         * certificate or key is stored as the raw
         * item data
         */
        BLOB = 1,
        /**
         * certificate or key is stored as a path
         * to a file containing the certificate or key data
         */
        PATH = 2,
        /**
         * certificate or key is stored as a
         * URI of an object on a PKCS#11 token
         */
        'PKCS11' = 3,
    }
    /**
     * These flags modify the comparison behavior when comparing two settings or
     * two connections.
     */
    export namespace SettingCompareFlags {
        export const $gtype: GObject.GType<SettingCompareFlags>;
    }
    enum SettingCompareFlags {
        /**
         * match all properties exactly
         */
        EXACT,
        /**
         * match only important attributes, like SSID,
         *   type, security settings, etc.  Does not match, for example, connection ID
         *   or UUID.
         */
        FUZZY = 1,
        /**
         * ignore the connection's ID
         */
        IGNORE_ID = 2,
        /**
         * ignore all secrets
         */
        IGNORE_SECRETS = 4,
        /**
         * ignore secrets for which
         *   the secret's flags indicate the secret is owned by a user secret agent
         *   (ie, the secret's flag includes `NM_SETTING_SECRET_FLAG_AGENT_OWNED)`
         */
        IGNORE_AGENT_OWNED_SECRETS = 8,
        /**
         * ignore secrets for which
         *   the secret's flags indicate the secret should not be saved to persistent
         *   storage (ie, the secret's flag includes `NM_SETTING_SECRET_FLAG_NOT_SAVED)`
         */
        IGNORE_NOT_SAVED_SECRETS = 16,
        /**
         * if this flag is set,
         *   nm_setting_diff() and nm_connection_diff() will also include properties that
         *   are set to their default value. See also `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_NO_DEFAULT`.
         */
        DIFF_RESULT_WITH_DEFAULT = 32,
        /**
         * if this flag is set,
         *   nm_setting_diff() and nm_connection_diff() will not include properties that
         *   are set to their default value. This is the opposite of
         *   `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT`. If both flags are set together,
         *   `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT` wins. If both flags are unset,
         *   this means to exclude default properties if there is a setting to compare,
         *   but include all properties, if the setting 'b' is missing. This is the legacy
         *   behaviour of libnm-util, where nm_setting_diff() behaved differently depending
         *   on whether the setting 'b' was available. If `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT`
         *   is set, nm_setting_diff() will also set the flags `NM_SETTING_DIFF_RESULT_IN_A_DEFAULT`
         *   and `NM_SETTING_DIFF_RESULT_IN_B_DEFAULT,` if the values are default values.
         */
        DIFF_RESULT_NO_DEFAULT = 64,
        /**
         * ignore the connection's timestamp
         */
        IGNORE_TIMESTAMP = 128,
    }
    /**
     * #NMSettingConnectionAutoconnectSlaves values indicate whether slave connections
     * should be activated when controller is activated.
     */
    export namespace SettingConnectionAutoconnectSlaves {
        export const $gtype: GObject.GType<SettingConnectionAutoconnectSlaves>;
    }
    enum SettingConnectionAutoconnectSlaves {
        /**
         * default value
         */
        DEFAULT = -1,
        /**
         * slaves are not brought up when
         *   controller is activated
         */
        NO,
        /**
         * slaves are brought up when
         *   controller is activated
         */
        YES = 1,
    }
    /**
     * #NMSettingConnectionDnsOverTls values indicate whether DNSOverTls should be enabled.
     */
    export namespace SettingConnectionDnsOverTls {
        export const $gtype: GObject.GType<SettingConnectionDnsOverTls>;
    }
    enum SettingConnectionDnsOverTls {
        /**
         * default value
         */
        DEFAULT = -1,
        /**
         * disable DNSOverTls
         */
        NO,
        /**
         * enable opportunistic mode
         */
        OPPORTUNISTIC = 1,
        /**
         * enable strict mode
         */
        YES = 2,
    }
    /**
     * #NMSettingConnectionDownOnPoweroff indicates whether the connection will be
     * brought down before the system is powered off.
     */
    export namespace SettingConnectionDownOnPoweroff {
        export const $gtype: GObject.GType<SettingConnectionDownOnPoweroff>;
    }
    enum SettingConnectionDownOnPoweroff {
        /**
         * default value
         */
        DEFAULT = -1,
        /**
         * disable down-on-poweroff
         */
        NO,
        /**
         * enable down-on-poweroff
         */
        YES = 1,
    }
    /**
     * #NMSettingConnectionLldp values indicate whether LLDP should be enabled.
     */
    export namespace SettingConnectionLldp {
        export const $gtype: GObject.GType<SettingConnectionLldp>;
    }
    enum SettingConnectionLldp {
        /**
         * default value
         */
        DEFAULT = -1,
        /**
         * disable LLDP
         */
        DISABLE,
        /**
         * enable reception of LLDP frames
         */
        ENABLE_RX = 1,
    }
    /**
     * #NMSettingConnectionLlmnr values indicate whether LLMNR should be enabled.
     */
    export namespace SettingConnectionLlmnr {
        export const $gtype: GObject.GType<SettingConnectionLlmnr>;
    }
    enum SettingConnectionLlmnr {
        /**
         * default value
         */
        DEFAULT = -1,
        /**
         * disable LLMNR
         */
        NO,
        /**
         * support only resolving, do not register hostname
         */
        RESOLVE = 1,
        /**
         * enable LLMNR
         */
        YES = 2,
    }
    /**
     * #NMSettingConnectionMdns values indicate whether mDNS should be enabled.
     */
    export namespace SettingConnectionMdns {
        export const $gtype: GObject.GType<SettingConnectionMdns>;
    }
    enum SettingConnectionMdns {
        /**
         * default value
         */
        DEFAULT = -1,
        /**
         * disable mDNS
         */
        NO,
        /**
         * support only resolving, do not register hostname
         */
        RESOLVE = 1,
        /**
         * enable mDNS
         */
        YES = 2,
    }
    /**
     * These values indicate the result of a setting difference operation.
     */
    export namespace SettingDiffResult {
        export const $gtype: GObject.GType<SettingDiffResult>;
    }
    enum SettingDiffResult {
        /**
         * unknown result
         */
        UNKNOWN,
        /**
         * the property is present in setting A
         */
        IN_A = 1,
        /**
         * the property is present in setting B
         */
        IN_B = 2,
        /**
         * the property is present in
         * setting A but is set to the default value. This flag is only set,
         * if you specify `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT`.
         */
        IN_A_DEFAULT = 4,
        /**
         * analog to `NM_SETTING_DIFF_RESULT_IN_A_DEFAULT`.
         */
        IN_B_DEFAULT = 8,
    }
    /**
     * #NMSettingIP4LinkLocal values indicate whether IPv4 link-local address protocol should be enabled.
     */
    export namespace SettingIP4LinkLocal {
        export const $gtype: GObject.GType<SettingIP4LinkLocal>;
    }
    enum SettingIP4LinkLocal {
        /**
         * Allow fallback to a globally configured default. If unspecified,
         *   fallback to "auto". Note that if "ipv4.method" is "disabled", this always implies link-local
         *   addresses disabled too.
         */
        DEFAULT,
        /**
         * Special value which enables LL if "ipv4.method" is set to
         *   "link-local".
         */
        AUTO = 1,
        /**
         * Disable IPv4 link-local protocol.
         */
        DISABLED = 2,
        /**
         * Enable the IPv4 link-local protocol regardless what other protocols
         * such as DHCP or manually assigned IP addresses might be active.
         */
        ENABLED = 3,
    }
    /**
     * #NMSettingIP6ConfigAddrGenMode controls how the Interface Identifier for
     * RFC4862 Stateless Address Autoconfiguration is created.
     */
    export namespace SettingIP6ConfigAddrGenMode {
        export const $gtype: GObject.GType<SettingIP6ConfigAddrGenMode>;
    }
    enum SettingIP6ConfigAddrGenMode {
        /**
         * The Interface Identifier is derived
         * from the interface hardware address.
         */
        'EUI64',
        /**
         * The Interface Identifier
         * is created by using a cryptographically secure hash of a secret host-specific
         * key along with the connection identification and the network address as
         * specified by RFC7217.
         */
        STABLE_PRIVACY = 1,
        /**
         * Fallback to the global
         *   default, and if unspecified use "eui64". Since: 1.40.
         */
        'DEFAULT_OR_EUI64' = 2,
        /**
         * Fallback to the global
         *   default, and if unspecified use "stable-privacy". Since: 1.40.
         */
        DEFAULT = 3,
    }
    /**
     * #NMSettingIP6ConfigPrivacy values indicate if and how IPv6 Privacy
     * Extensions are used (RFC4941).
     */
    export namespace SettingIP6ConfigPrivacy {
        export const $gtype: GObject.GType<SettingIP6ConfigPrivacy>;
    }
    enum SettingIP6ConfigPrivacy {
        /**
         * unknown or no value specified
         */
        UNKNOWN = -1,
        /**
         * IPv6 Privacy Extensions are disabled
         */
        DISABLED,
        /**
         * IPv6 Privacy Extensions
         * are enabled, but public addresses are preferred over temporary addresses
         */
        PREFER_PUBLIC_ADDR = 1,
        /**
         * IPv6 Privacy Extensions
         * are enabled and temporary addresses are preferred over public addresses
         */
        PREFER_TEMP_ADDR = 2,
    }
    /**
     * Controls if and how the MAC address of a device is randomzied.
     */
    export namespace SettingMacRandomization {
        export const $gtype: GObject.GType<SettingMacRandomization>;
    }
    enum SettingMacRandomization {
        /**
         * the default value, which unless
         * overridden by user-controlled defaults configuration, is "never".
         */
        DEFAULT,
        /**
         * the device's MAC address is always used.
         */
        NEVER = 1,
        /**
         * a random MAC address is used.
         */
        ALWAYS = 2,
    }
    /**
     * #NMSettingMacsecMode controls how the CAK (Connectivity Association Key) used
     * in MKA (MACsec Key Agreement) is obtained.
     */
    export namespace SettingMacsecMode {
        export const $gtype: GObject.GType<SettingMacsecMode>;
    }
    enum SettingMacsecMode {
        /**
         * The CAK is pre-shared
         */
        PSK,
        /**
         * The CAK is the result of participation in EAP
         */
        EAP = 1,
    }
    /**
     * These flags control the MACsec offload mode.
     */
    export namespace SettingMacsecOffload {
        export const $gtype: GObject.GType<SettingMacsecOffload>;
    }
    enum SettingMacsecOffload {
        /**
         * use the global default; disable if not defined
         */
        DEFAULT = -1,
        /**
         * disable offload
         */
        OFF,
        /**
         * request offload to the PHY
         */
        PHY = 1,
        /**
         * request offload to the MAC
         */
        MAC = 2,
    }
    /**
     * #NMSettingMacsecValidation specifies a validation mode for incoming frames.
     */
    export namespace SettingMacsecValidation {
        export const $gtype: GObject.GType<SettingMacsecValidation>;
    }
    enum SettingMacsecValidation {
        /**
         * All incoming frames are accepted if
         *   possible
         */
        DISABLE,
        /**
         * Non protected, invalid, or impossible to
         *   verify frames are accepted and counted as "invalid"
         */
        CHECK = 1,
        /**
         * Non protected, invalid, or impossible to
         *   verify frames are dropped
         */
        STRICT = 2,
    }
    export namespace SettingMacvlanMode {
        export const $gtype: GObject.GType<SettingMacvlanMode>;
    }
    enum SettingMacvlanMode {
        /**
         * unknown/unset mode
         */
        UNKNOWN,
        /**
         * Virtual Ethernet Port Aggregator mode
         */
        VEPA = 1,
        /**
         * bridge mode
         */
        BRIDGE = 2,
        /**
         * private mode
         */
        PRIVATE = 3,
        /**
         * passthru mode
         */
        PASSTHRU = 4,
        /**
         * source mode
         */
        SOURCE = 5,
    }
    /**
     * The Proxy method.
     */
    export namespace SettingProxyMethod {
        export const $gtype: GObject.GType<SettingProxyMethod>;
    }
    enum SettingProxyMethod {
        /**
         * No Proxy for the Connection
         */
        NONE,
        /**
         * DHCP obtained Proxy/ Manual override
         */
        AUTO = 1,
    }
    /**
     * The parity setting of a serial port.
     */
    export namespace SettingSerialParity {
        export const $gtype: GObject.GType<SettingSerialParity>;
    }
    enum SettingSerialParity {
        /**
         * No parity bits (default)
         */
        NONE,
        /**
         * Even parity
         */
        EVEN = 1,
        /**
         * Odd parity
         */
        ODD = 2,
    }
    /**
     * #NMSettingTunMode values indicate the device type (TUN/TAP)
     */
    export namespace SettingTunMode {
        export const $gtype: GObject.GType<SettingTunMode>;
    }
    enum SettingTunMode {
        /**
         * an unknown device type
         */
        UNKNOWN,
        /**
         * a TUN device
         */
        TUN = 1,
        /**
         * a TAP device
         */
        TAP = 2,
    }
    /**
     * Indicates the wireless channel width.
     */
    export namespace SettingWirelessChannelWidth {
        export const $gtype: GObject.GType<SettingWirelessChannelWidth>;
    }
    enum SettingWirelessChannelWidth {
        /**
         * automatically determine the width
         */
        AUTO,
        /**
         * use a 20MHz channel width
         */
        '20MHZ' = 20,
        /**
         * use a 40MHz channel width
         */
        '40MHZ' = 40,
        /**
         * use a 80MHz channel width
         */
        '80MHZ' = 80,
    }
    /**
     * These flags indicate whether wireless powersave must be enabled.
     */
    export namespace SettingWirelessPowersave {
        export const $gtype: GObject.GType<SettingWirelessPowersave>;
    }
    enum SettingWirelessPowersave {
        /**
         * use the default value
         */
        DEFAULT,
        /**
         * don't touch existing setting
         */
        IGNORE = 1,
        /**
         * disable powersave
         */
        DISABLE = 2,
        /**
         * enable powersave
         */
        ENABLE = 3,
    }
    /**
     * These flags indicate whether FILS must be enabled.
     */
    export namespace SettingWirelessSecurityFils {
        export const $gtype: GObject.GType<SettingWirelessSecurityFils>;
    }
    enum SettingWirelessSecurityFils {
        /**
         * use the default value
         */
        DEFAULT,
        /**
         * disable FILS
         */
        DISABLE = 1,
        /**
         * enable FILS if the supplicant and the AP support it
         */
        OPTIONAL = 2,
        /**
         * require FILS and fail if not available
         */
        REQUIRED = 3,
    }
    /**
     * These flags indicate whether PMF must be enabled.
     */
    export namespace SettingWirelessSecurityPmf {
        export const $gtype: GObject.GType<SettingWirelessSecurityPmf>;
    }
    enum SettingWirelessSecurityPmf {
        /**
         * use the default value
         */
        DEFAULT,
        /**
         * disable PMF
         */
        DISABLE = 1,
        /**
         * enable PMF if the supplicant and the AP support it
         */
        OPTIONAL = 2,
        /**
         * require PMF and fail if not available
         */
        REQUIRED = 3,
    }
    /**
     * Errors related to the settings/persistent configuration interface of
     * NetworkManager.
     *
     * These may be returned from #NMClient methods that invoke D-Bus operations on
     * the "org.freedesktop.NetworkManager.Settings" interface, and correspond to
     * D-Bus errors in that namespace.
     */
    class SettingsError extends GLib.Error {
        static '$gtype': GObject.GType<SettingsError>;
        // Static Fields
        /**
         * unknown or unclassified error
         */
        static FAILED: number;
        /**
         * permission denied
         */
        static PERMISSIONDENIED: number;
        /**
         * the requested operation is not supported by any
         *   active settings backend
         */
        static NOTSUPPORTED: number;
        /**
         * the connection was invalid
         */
        static INVALIDCONNECTION: number;
        /**
         * attempted to modify a read-only connection
         */
        static READONLYCONNECTION: number;
        /**
         * a connection with that UUID already exists
         */
        static UUIDEXISTS: number;
        /**
         * attempted to set an invalid hostname
         */
        static INVALIDHOSTNAME: number;
        /**
         * invalid arguments
         */
        static INVALIDARGUMENTS: number;
        /**
         * The profile's VersionId mismatched
         *   and the update is rejected. See the "version-id" argument to Update2()
         *   method. Since 1.44.
         */
        static VERSIONIDMISMATCH: number;
        /**
         * the requested operation is not
         *   supported by the settings plugin currently in use for the specified object.
         *   Since: 1.44.
         */
        static NOTSUPPORTEDBYPLUGIN: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    export namespace SriovEswitchEncapMode {
        export const $gtype: GObject.GType<SriovEswitchEncapMode>;
    }
    enum SriovEswitchEncapMode {
        /**
         * don't modify current encap-mode
         */
        PRESERVE = -1,
        /**
         * disable encapsulation mode
         */
        NONE,
        /**
         * enable encapsulation mode
         */
        BASIC = 1,
    }
    export namespace SriovEswitchInlineMode {
        export const $gtype: GObject.GType<SriovEswitchInlineMode>;
    }
    enum SriovEswitchInlineMode {
        /**
         * don't modify current inline-mode
         */
        PRESERVE = -1,
        /**
         * don't use inline mode
         */
        NONE,
        /**
         * L2 mode
         */
        LINK = 1,
        /**
         * L3 mode
         */
        NETWORK = 2,
        /**
         * L4 mode
         */
        TRANSPORT = 3,
    }
    export namespace SriovEswitchMode {
        export const $gtype: GObject.GType<SriovEswitchMode>;
    }
    enum SriovEswitchMode {
        /**
         * don't modify current eswitch mode
         */
        PRESERVE = -1,
        /**
         * use legacy SRIOV
         */
        LEGACY,
        /**
         * use switchdev mode
         */
        SWITCHDEV = 1,
    }
    /**
     * #NMSriovVFVlanProtocol indicates the VLAN protocol to use.
     */
    export namespace SriovVFVlanProtocol {
        export const $gtype: GObject.GType<SriovVFVlanProtocol>;
    }
    enum SriovVFVlanProtocol {
        /**
         * use 802.1Q
         */
        '1Q',
        /**
         * use 802.1ad
         */
        '1AD' = 1,
    }
    /**
     * #NMState values indicate the current overall networking state.
     */
    export namespace State {
        export const $gtype: GObject.GType<State>;
    }
    enum State {
        /**
         * Networking state is unknown. This indicates a daemon error
         *    that makes it unable to reasonably assess the state. In such event the
         *    applications are expected to assume Internet connectivity might be present
         *    and not disable controls that require network access.
         *    The graphical shells may hide the network accessibility indicator altogether
         *    since no meaningful status indication can be provided.
         */
        UNKNOWN,
        /**
         * Networking is not enabled, the system is being suspended or
         *    resumed from suspend.
         */
        ASLEEP = 10,
        /**
         * There is no active network connection.
         *    The graphical shell should indicate  no network connectivity and the
         *    applications should not attempt to access the network.
         */
        DISCONNECTED = 20,
        /**
         * Network connections are being cleaned up.
         *    The applications should tear down their network sessions.
         */
        DISCONNECTING = 30,
        /**
         * A network connection is being started
         *    The graphical shell should indicate the network is being connected while
         *    the applications should still make no attempts to connect the network.
         */
        CONNECTING = 40,
        /**
         * There is only local IPv4 and/or IPv6 connectivity,
         *    but no default route to access the Internet. The graphical shell should
         *    indicate no network connectivity.
         */
        CONNECTED_LOCAL = 50,
        /**
         * There is only site-wide IPv4 and/or IPv6 connectivity.
         *    This means a default route is available, but the Internet connectivity check
         *    (see "Connectivity" property) did not succeed. The graphical shell should
         *    indicate limited network connectivity.
         */
        CONNECTED_SITE = 60,
        /**
         * There is global IPv4 and/or IPv6 Internet connectivity
         *    This means the Internet connectivity check succeeded, the graphical shell should
         *    indicate full network connectivity.
         */
        CONNECTED_GLOBAL = 70,
    }
    /**
     * An boolean value that can be overridden by a default.
     */
    export namespace Ternary {
        export const $gtype: GObject.GType<Ternary>;
    }
    enum Ternary {
        /**
         * use the globally-configured default value.
         */
        DEFAULT = -1,
        /**
         * the option is disabled.
         */
        FALSE,
        /**
         * the option is enabled.
         */
        TRUE = 1,
    }
    /**
     * Describes generic security mechanisms that 802.11 access points may offer.
     * Used with nm_utils_security_valid() for checking whether a given access
     * point is compatible with a network device.
     */
    export namespace UtilsSecurityType {
        export const $gtype: GObject.GType<UtilsSecurityType>;
    }
    enum UtilsSecurityType {
        /**
         * unknown or invalid security, placeholder and not used
         */
        INVALID,
        /**
         * unencrypted and open
         */
        NONE = 1,
        /**
         * static WEP keys are used for encryption
         */
        STATIC_WEP = 2,
        /**
         * Cisco LEAP is used for authentication and for generating the
         * dynamic WEP keys automatically
         */
        LEAP = 3,
        /**
         * standard 802.1x is used for authentication and
         * generating the dynamic WEP keys automatically
         */
        DYNAMIC_WEP = 4,
        /**
         * WPA1 is used with Pre-Shared Keys (PSK)
         */
        WPA_PSK = 5,
        /**
         * WPA1 is used with 802.1x authentication
         */
        WPA_ENTERPRISE = 6,
        /**
         * WPA2/RSN is used with Pre-Shared Keys (PSK)
         */
        'WPA2_PSK' = 7,
        /**
         * WPA2 is used with 802.1x authentication
         */
        'WPA2_ENTERPRISE' = 8,
        /**
         * is used with WPA3 Enterprise
         */
        SAE = 9,
        /**
         * is used with Enhanced Open
         */
        OWE = 10,
        /**
         * is used with WPA3 Enterprise Suite-B 192 bit mode. Since: 1.30.
         */
        'WPA3_SUITE_B_192' = 11,
    }
    /**
     * %_NM_VERSION_INFO_CAPABILITY_UNUSED: a dummy capability. It has no meaning,
     *   don't use it.
     * Currently no enum values are defined. These capabilities are exposed
     * on D-Bus in the "VersionInfo" bit field.
     */
    export namespace VersionInfoCapability {
        export const $gtype: GObject.GType<VersionInfoCapability>;
    }
    enum VersionInfoCapability {
        UNUSED = 2147483647,
    }
    /**
     * A selector for traffic priority maps; these map Linux SKB priorities
     * to 802.1p priorities used in VLANs.
     */
    export namespace VlanPriorityMap {
        export const $gtype: GObject.GType<VlanPriorityMap>;
    }
    enum VlanPriorityMap {
        /**
         * map for incoming data
         */
        INGRESS_MAP,
        /**
         * map for outgoing data
         */
        EGRESS_MAP = 1,
    }
    /**
     * VPN connection states
     */
    export namespace VpnConnectionState {
        export const $gtype: GObject.GType<VpnConnectionState>;
    }
    enum VpnConnectionState {
        /**
         * The state of the VPN connection is
         *   unknown.
         */
        UNKNOWN,
        /**
         * The VPN connection is preparing to
         *   connect.
         */
        PREPARE = 1,
        /**
         * The VPN connection needs authorization
         *   credentials.
         */
        NEED_AUTH = 2,
        /**
         * The VPN connection is being established.
         */
        CONNECT = 3,
        /**
         * The VPN connection is getting an IP
         *   address.
         */
        IP_CONFIG_GET = 4,
        /**
         * The VPN connection is active.
         */
        ACTIVATED = 5,
        /**
         * The VPN connection failed.
         */
        FAILED = 6,
        /**
         * The VPN connection is disconnected.
         */
        DISCONNECTED = 7,
    }
    /**
     * VPN connection state reasons
     */
    export namespace VpnConnectionStateReason {
        export const $gtype: GObject.GType<VpnConnectionStateReason>;
    }
    enum VpnConnectionStateReason {
        /**
         * The reason for the VPN connection
         *   state change is unknown.
         */
        UNKNOWN,
        /**
         * No reason was given for the VPN
         *   connection state change.
         */
        NONE = 1,
        /**
         * The VPN connection changed
         *   state because the user disconnected it.
         */
        USER_DISCONNECTED = 2,
        /**
         * The VPN connection
         *   changed state because the device it was using was disconnected.
         */
        DEVICE_DISCONNECTED = 3,
        /**
         * The service providing the
         *   VPN connection was stopped.
         */
        SERVICE_STOPPED = 4,
        /**
         * The IP config of the VPN
         *   connection was invalid.
         */
        IP_CONFIG_INVALID = 5,
        /**
         * The connection attempt to
         *   the VPN service timed out.
         */
        CONNECT_TIMEOUT = 6,
        /**
         * A timeout occurred
         *   while starting the service providing the VPN connection.
         */
        SERVICE_START_TIMEOUT = 7,
        /**
         * Starting the service
         *   starting the service providing the VPN connection failed.
         */
        SERVICE_START_FAILED = 8,
        /**
         * Necessary secrets for the VPN
         *   connection were not provided.
         */
        NO_SECRETS = 9,
        /**
         * Authentication to the VPN
         *   server failed.
         */
        LOGIN_FAILED = 10,
        /**
         * The connection was
         *   deleted from settings.
         */
        CONNECTION_REMOVED = 11,
    }
    /**
     * Returned by the VPN service plugin to indicate errors. These codes correspond
     * to errors in the "org.freedesktop.NetworkManager.VPN.Error" namespace.
     */
    class VpnPluginError extends GLib.Error {
        static '$gtype': GObject.GType<VpnPluginError>;
        // Static Fields
        /**
         * unknown or unclassified error
         */
        static FAILED: number;
        /**
         * the plugin is already starting,
         *   and another connect request was received
         */
        static STARTINGINPROGRESS: number;
        /**
         * the plugin is already connected, and
         *   another connect request was received
         */
        static ALREADYSTARTED: number;
        /**
         * the plugin is already stopping,
         *   and another stop request was received
         */
        static STOPPINGINPROGRESS: number;
        /**
         * the plugin is already stopped, and
         *   another disconnect request was received
         */
        static ALREADYSTOPPED: number;
        /**
         * the operation could not be performed in
         *   this state
         */
        static WRONGSTATE: number;
        /**
         * the operation could not be performed as
         *   the request contained malformed arguments, or arguments of unexpected type.
         *   Usually means that one of the VPN setting data items or secrets was not of
         *   the expected type (ie int, string, bool, etc).
         */
        static BADARGUMENTS: number;
        /**
         * a child process failed to launch
         */
        static LAUNCHFAILED: number;
        /**
         * the operation could not be performed
         *   because the connection was invalid.  Usually means that the connection's
         *   VPN setting was missing some required data item or secret.
         */
        static INVALIDCONNECTION: number;
        /**
         * the operation could not be
         *   performed as the plugin does not support interactive operations, such as
         *   ConnectInteractive() or NewSecrets()
         */
        static INTERACTIVENOTSUPPORTED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * VPN plugin failure reasons
     */
    export namespace VpnPluginFailure {
        export const $gtype: GObject.GType<VpnPluginFailure>;
    }
    enum VpnPluginFailure {
        /**
         * Login failed.
         */
        LOGIN_FAILED,
        /**
         * Connect failed.
         */
        CONNECT_FAILED = 1,
        /**
         * Invalid IP configuration returned from
         *   the VPN plugin.
         */
        BAD_IP_CONFIG = 2,
    }
    /**
     * VPN daemon states
     */
    export namespace VpnServiceState {
        export const $gtype: GObject.GType<VpnServiceState>;
    }
    enum VpnServiceState {
        /**
         * The state of the VPN plugin is unknown.
         */
        UNKNOWN,
        /**
         * The VPN plugin is initialized.
         */
        INIT = 1,
        /**
         * Not used.
         */
        SHUTDOWN = 2,
        /**
         * The plugin is attempting to connect to a VPN server.
         */
        STARTING = 3,
        /**
         * The plugin has connected to a VPN server.
         */
        STARTED = 4,
        /**
         * The plugin is disconnecting from the VPN server.
         */
        STOPPING = 5,
        /**
         * The plugin has disconnected from the VPN server.
         */
        STOPPED = 6,
    }
    /**
     * The #NMWepKeyType values specify how any WEP keys present in the setting
     * are interpreted.  There are no standards governing how to hash the various WEP
     * key/passphrase formats into the actual WEP key.  Unfortunately some WEP keys
     * can be interpreted in multiple ways, requiring the setting to specify how to
     * interpret the any WEP keys.  For example, the key "732f2d712e4a394a375d366931"
     * is both a valid Hexadecimal WEP key and a WEP passphrase.  Further, many
     * ASCII keys are also valid WEP passphrases, but since passphrases and ASCII
     * keys are hashed differently to determine the actual WEP key the type must be
     * specified.
     */
    export namespace WepKeyType {
        export const $gtype: GObject.GType<WepKeyType>;
    }
    enum WepKeyType {
        /**
         * unknown WEP key type
         */
        UNKNOWN,
        /**
         * indicates a hexadecimal or ASCII formatted WEP key.
         * Hex keys are either 10 or 26 hexadecimal characters (ie "5f782f2f5f" or
         * "732f2d712e4a394a375d366931"), while ASCII keys are either 5 or 13 ASCII
         * characters (ie "abcde" or "blahblah99$*1").
         */
        KEY = 1,
        /**
         * indicates a WEP passphrase (ex "I bought a duck
         * on my way back from the market 235Q&^%^*%") instead of a hexadecimal or ASCII
         * key.  Passphrases are between 8 and 64 characters inclusive and are hashed
         * the actual WEP key using the MD5 hash algorithm.
         */
        PASSPHRASE = 2,
    }
    /**
     * WiMAX network type.
     */
    export namespace WimaxNspNetworkType {
        export const $gtype: GObject.GType<WimaxNspNetworkType>;
    }
    enum WimaxNspNetworkType {
        /**
         * unknown network type
         */
        UNKNOWN,
        /**
         * home network
         */
        HOME = 1,
        /**
         * partner network
         */
        PARTNER = 2,
        /**
         * roaming partner network
         */
        ROAMING_PARTNER = 3,
    }
    const ACCESS_POINT_BANDWIDTH: string;
    const ACCESS_POINT_BSSID: string;
    const ACCESS_POINT_FLAGS: string;
    const ACCESS_POINT_FREQUENCY: string;
    const ACCESS_POINT_HW_ADDRESS: string;
    const ACCESS_POINT_LAST_SEEN: string;
    const ACCESS_POINT_MAX_BITRATE: string;
    const ACCESS_POINT_MODE: string;
    const ACCESS_POINT_RSN_FLAGS: string;
    const ACCESS_POINT_SSID: string;
    const ACCESS_POINT_STRENGTH: string;
    const ACCESS_POINT_WPA_FLAGS: string;
    const ACTIVE_CONNECTION_CONNECTION: string;
    const ACTIVE_CONNECTION_CONTROLLER: string;
    const ACTIVE_CONNECTION_DEFAULT: string;
    const ACTIVE_CONNECTION_DEFAULT6: string;
    const ACTIVE_CONNECTION_DEVICES: string;
    const ACTIVE_CONNECTION_DHCP4_CONFIG: string;
    const ACTIVE_CONNECTION_DHCP6_CONFIG: string;
    const ACTIVE_CONNECTION_ID: string;
    const ACTIVE_CONNECTION_IP4_CONFIG: string;
    const ACTIVE_CONNECTION_IP6_CONFIG: string;
    const ACTIVE_CONNECTION_MASTER: string;
    const ACTIVE_CONNECTION_SPECIFIC_OBJECT_PATH: string;
    const ACTIVE_CONNECTION_STATE: string;
    const ACTIVE_CONNECTION_STATE_FLAGS: string;
    const ACTIVE_CONNECTION_TYPE: string;
    const ACTIVE_CONNECTION_UUID: string;
    const ACTIVE_CONNECTION_VPN: string;
    const BRIDGE_VLAN_VID_MAX: number;
    const BRIDGE_VLAN_VID_MIN: number;
    const CHECKPOINT_CREATED: string;
    const CHECKPOINT_DEVICES: string;
    const CHECKPOINT_ROLLBACK_TIMEOUT: string;
    const CLIENT_ACTIVATING_CONNECTION: string;
    const CLIENT_ACTIVE_CONNECTIONS: string;
    const CLIENT_ACTIVE_CONNECTION_ADDED: string;
    const CLIENT_ACTIVE_CONNECTION_REMOVED: string;
    const CLIENT_ALL_DEVICES: string;
    const CLIENT_ANY_DEVICE_ADDED: string;
    const CLIENT_ANY_DEVICE_REMOVED: string;
    const CLIENT_CAN_MODIFY: string;
    const CLIENT_CAPABILITIES: string;
    const CLIENT_CHECKPOINTS: string;
    const CLIENT_CONNECTIONS: string;
    const CLIENT_CONNECTION_ADDED: string;
    const CLIENT_CONNECTION_REMOVED: string;
    const CLIENT_CONNECTIVITY: string;
    const CLIENT_CONNECTIVITY_CHECK_AVAILABLE: string;
    const CLIENT_CONNECTIVITY_CHECK_ENABLED: string;
    const CLIENT_CONNECTIVITY_CHECK_URI: string;
    const CLIENT_DBUS_CONNECTION: string;
    const CLIENT_DBUS_NAME_OWNER: string;
    const CLIENT_DEVICES: string;
    const CLIENT_DEVICE_ADDED: string;
    const CLIENT_DEVICE_REMOVED: string;
    const CLIENT_DNS_CONFIGURATION: string;
    const CLIENT_DNS_MODE: string;
    const CLIENT_DNS_RC_MANAGER: string;
    const CLIENT_HOSTNAME: string;
    const CLIENT_INSTANCE_FLAGS: string;
    const CLIENT_METERED: string;
    const CLIENT_NETWORKING_ENABLED: string;
    const CLIENT_NM_RUNNING: string;
    const CLIENT_PERMISSIONS_STATE: string;
    const CLIENT_PERMISSION_CHANGED: string;
    const CLIENT_PRIMARY_CONNECTION: string;
    const CLIENT_RADIO_FLAGS: string;
    const CLIENT_STARTUP: string;
    const CLIENT_STATE: string;
    const CLIENT_VERSION: string;
    const CLIENT_VERSION_INFO: string;
    const CLIENT_WIMAX_ENABLED: string;
    const CLIENT_WIMAX_HARDWARE_ENABLED: string;
    const CLIENT_WIRELESS_ENABLED: string;
    const CLIENT_WIRELESS_HARDWARE_ENABLED: string;
    const CLIENT_WWAN_ENABLED: string;
    const CLIENT_WWAN_HARDWARE_ENABLED: string;
    const CONNECTION_CHANGED: string;
    const CONNECTION_NORMALIZE_PARAM_IP4_CONFIG_METHOD: string;
    const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string;
    const CONNECTION_SECRETS_CLEARED: string;
    const CONNECTION_SECRETS_UPDATED: string;
    const DBUS_INTERFACE: string;
    const DBUS_INTERFACE_DNS_MANAGER: string;
    const DBUS_INTERFACE_SETTINGS: string;
    const DBUS_INTERFACE_SETTINGS_CONNECTION: string;
    const DBUS_INTERFACE_SETTINGS_CONNECTION_SECRETS: string;
    const DBUS_INTERFACE_VPN: string;
    const DBUS_INTERFACE_VPN_CONNECTION: string;
    const DBUS_INVALID_VPN_CONNECTION: string;
    const DBUS_NO_ACTIVE_VPN_CONNECTION: string;
    const DBUS_NO_VPN_CONNECTIONS: string;
    const DBUS_PATH: string;
    const DBUS_PATH_AGENT_MANAGER: string;
    const DBUS_PATH_DNS_MANAGER: string;
    const DBUS_PATH_SECRET_AGENT: string;
    const DBUS_PATH_SETTINGS: string;
    const DBUS_PATH_SETTINGS_CONNECTION: string;
    const DBUS_PATH_VPN: string;
    const DBUS_PATH_VPN_CONNECTION: string;
    const DBUS_SERVICE: string;
    const DBUS_VPN_ALREADY_STARTED: string;
    const DBUS_VPN_ALREADY_STOPPED: string;
    const DBUS_VPN_BAD_ARGUMENTS: string;
    const DBUS_VPN_ERROR_PREFIX: string;
    const DBUS_VPN_INTERACTIVE_NOT_SUPPORTED: string;
    const DBUS_VPN_SIGNAL_CONNECT_FAILED: string;
    const DBUS_VPN_SIGNAL_IP4_CONFIG: string;
    const DBUS_VPN_SIGNAL_IP_CONFIG_BAD: string;
    const DBUS_VPN_SIGNAL_LAUNCH_FAILED: string;
    const DBUS_VPN_SIGNAL_LOGIN_BANNER: string;
    const DBUS_VPN_SIGNAL_LOGIN_FAILED: string;
    const DBUS_VPN_SIGNAL_STATE_CHANGE: string;
    const DBUS_VPN_SIGNAL_VPN_CONFIG_BAD: string;
    const DBUS_VPN_STARTING_IN_PROGRESS: string;
    const DBUS_VPN_STOPPING_IN_PROGRESS: string;
    const DBUS_VPN_WRONG_STATE: string;
    const DEVICE_6LOWPAN_HW_ADDRESS: string;
    const DEVICE_6LOWPAN_PARENT: string;
    const DEVICE_ACTIVE_CONNECTION: string;
    const DEVICE_ADSL_CARRIER: string;
    const DEVICE_AUTOCONNECT: string;
    const DEVICE_AVAILABLE_CONNECTIONS: string;
    const DEVICE_BOND_CARRIER: string;
    const DEVICE_BOND_HW_ADDRESS: string;
    const DEVICE_BOND_SLAVES: string;
    const DEVICE_BRIDGE_CARRIER: string;
    const DEVICE_BRIDGE_HW_ADDRESS: string;
    const DEVICE_BRIDGE_SLAVES: string;
    const DEVICE_BT_CAPABILITIES: string;
    const DEVICE_BT_HW_ADDRESS: string;
    const DEVICE_BT_NAME: string;
    const DEVICE_CAPABILITIES: string;
    const DEVICE_DEVICE_TYPE: string;
    const DEVICE_DHCP4_CONFIG: string;
    const DEVICE_DHCP6_CONFIG: string;
    const DEVICE_DRIVER: string;
    const DEVICE_DRIVER_VERSION: string;
    const DEVICE_DUMMY_HW_ADDRESS: string;
    const DEVICE_ETHERNET_CARRIER: string;
    const DEVICE_ETHERNET_HW_ADDRESS: string;
    const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string;
    const DEVICE_ETHERNET_S390_SUBCHANNELS: string;
    const DEVICE_ETHERNET_SPEED: string;
    const DEVICE_FIRMWARE_MISSING: string;
    const DEVICE_FIRMWARE_VERSION: string;
    const DEVICE_GENERIC_HW_ADDRESS: string;
    const DEVICE_GENERIC_TYPE_DESCRIPTION: string;
    const DEVICE_HSR_MULTICAST_SPEC: string;
    const DEVICE_HSR_PORT1: string;
    const DEVICE_HSR_PORT2: string;
    const DEVICE_HSR_PRP: string;
    const DEVICE_HSR_SUPERVISION_ADDRESS: string;
    const DEVICE_HW_ADDRESS: string;
    const DEVICE_INFINIBAND_CARRIER: string;
    const DEVICE_INFINIBAND_HW_ADDRESS: string;
    const DEVICE_INTERFACE: string;
    const DEVICE_INTERFACE_FLAGS: string;
    const DEVICE_IP4_CONFIG: string;
    const DEVICE_IP4_CONNECTIVITY: string;
    const DEVICE_IP6_CONFIG: string;
    const DEVICE_IP6_CONNECTIVITY: string;
    const DEVICE_IP_INTERFACE: string;
    const DEVICE_IP_TUNNEL_ENCAPSULATION_LIMIT: string;
    const DEVICE_IP_TUNNEL_FLAGS: string;
    const DEVICE_IP_TUNNEL_FLOW_LABEL: string;
    const DEVICE_IP_TUNNEL_FWMARK: string;
    const DEVICE_IP_TUNNEL_INPUT_KEY: string;
    const DEVICE_IP_TUNNEL_LOCAL: string;
    const DEVICE_IP_TUNNEL_MODE: string;
    const DEVICE_IP_TUNNEL_OUTPUT_KEY: string;
    const DEVICE_IP_TUNNEL_PARENT: string;
    const DEVICE_IP_TUNNEL_PATH_MTU_DISCOVERY: string;
    const DEVICE_IP_TUNNEL_REMOTE: string;
    const DEVICE_IP_TUNNEL_TOS: string;
    const DEVICE_IP_TUNNEL_TTL: string;
    const DEVICE_LLDP_NEIGHBORS: string;
    const DEVICE_MACSEC_CIPHER_SUITE: string;
    const DEVICE_MACSEC_ENCODING_SA: string;
    const DEVICE_MACSEC_ENCRYPT: string;
    const DEVICE_MACSEC_ES: string;
    const DEVICE_MACSEC_HW_ADDRESS: string;
    const DEVICE_MACSEC_ICV_LENGTH: string;
    const DEVICE_MACSEC_INCLUDE_SCI: string;
    const DEVICE_MACSEC_PARENT: string;
    const DEVICE_MACSEC_PROTECT: string;
    const DEVICE_MACSEC_REPLAY_PROTECT: string;
    const DEVICE_MACSEC_SCB: string;
    const DEVICE_MACSEC_SCI: string;
    const DEVICE_MACSEC_VALIDATION: string;
    const DEVICE_MACSEC_WINDOW: string;
    const DEVICE_MACVLAN_HW_ADDRESS: string;
    const DEVICE_MACVLAN_MODE: string;
    const DEVICE_MACVLAN_NO_PROMISC: string;
    const DEVICE_MACVLAN_PARENT: string;
    const DEVICE_MACVLAN_TAP: string;
    const DEVICE_MANAGED: string;
    const DEVICE_METERED: string;
    const DEVICE_MODEM_APN: string;
    const DEVICE_MODEM_CURRENT_CAPABILITIES: string;
    const DEVICE_MODEM_DEVICE_ID: string;
    const DEVICE_MODEM_MODEM_CAPABILITIES: string;
    const DEVICE_MODEM_OPERATOR_CODE: string;
    const DEVICE_MTU: string;
    const DEVICE_NM_PLUGIN_MISSING: string;
    const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string;
    const DEVICE_OLPC_MESH_COMPANION: string;
    const DEVICE_OLPC_MESH_HW_ADDRESS: string;
    const DEVICE_OVS_BRIDGE_SLAVES: string;
    const DEVICE_OVS_PORT_SLAVES: string;
    const DEVICE_PATH: string;
    const DEVICE_PHYSICAL_PORT_ID: string;
    const DEVICE_PORTS: string;
    const DEVICE_PRODUCT: string;
    const DEVICE_REAL: string;
    const DEVICE_STATE: string;
    const DEVICE_STATE_REASON: string;
    const DEVICE_TEAM_CARRIER: string;
    const DEVICE_TEAM_CONFIG: string;
    const DEVICE_TEAM_HW_ADDRESS: string;
    const DEVICE_TEAM_SLAVES: string;
    const DEVICE_TUN_GROUP: string;
    const DEVICE_TUN_HW_ADDRESS: string;
    const DEVICE_TUN_MODE: string;
    const DEVICE_TUN_MULTI_QUEUE: string;
    const DEVICE_TUN_NO_PI: string;
    const DEVICE_TUN_OWNER: string;
    const DEVICE_TUN_VNET_HDR: string;
    const DEVICE_UDI: string;
    const DEVICE_VENDOR: string;
    const DEVICE_VETH_PEER: string;
    const DEVICE_VLAN_CARRIER: string;
    const DEVICE_VLAN_HW_ADDRESS: string;
    const DEVICE_VLAN_PARENT: string;
    const DEVICE_VLAN_VLAN_ID: string;
    const DEVICE_VRF_TABLE: string;
    const DEVICE_VXLAN_AGEING: string;
    const DEVICE_VXLAN_CARRIER: string;
    const DEVICE_VXLAN_DST_PORT: string;
    const DEVICE_VXLAN_GROUP: string;
    const DEVICE_VXLAN_HW_ADDRESS: string;
    const DEVICE_VXLAN_ID: string;
    const DEVICE_VXLAN_L2MISS: string;
    const DEVICE_VXLAN_L3MISS: string;
    const DEVICE_VXLAN_LEARNING: string;
    const DEVICE_VXLAN_LIMIT: string;
    const DEVICE_VXLAN_LOCAL: string;
    const DEVICE_VXLAN_PARENT: string;
    const DEVICE_VXLAN_PROXY: string;
    const DEVICE_VXLAN_RSC: string;
    const DEVICE_VXLAN_SRC_PORT_MAX: string;
    const DEVICE_VXLAN_SRC_PORT_MIN: string;
    const DEVICE_VXLAN_TOS: string;
    const DEVICE_VXLAN_TTL: string;
    const DEVICE_WIFI_ACCESS_POINTS: string;
    const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string;
    const DEVICE_WIFI_BITRATE: string;
    const DEVICE_WIFI_CAPABILITIES: string;
    const DEVICE_WIFI_HW_ADDRESS: string;
    const DEVICE_WIFI_LAST_SCAN: string;
    const DEVICE_WIFI_MODE: string;
    const DEVICE_WIFI_P2P_HW_ADDRESS: string;
    const DEVICE_WIFI_P2P_PEERS: string;
    const DEVICE_WIFI_P2P_WFDIES: string;
    const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string;
    const DEVICE_WIMAX_ACTIVE_NSP: string;
    const DEVICE_WIMAX_BSID: string;
    const DEVICE_WIMAX_CENTER_FREQUENCY: string;
    const DEVICE_WIMAX_CINR: string;
    const DEVICE_WIMAX_HW_ADDRESS: string;
    const DEVICE_WIMAX_NSPS: string;
    const DEVICE_WIMAX_RSSI: string;
    const DEVICE_WIMAX_TX_POWER: string;
    const DEVICE_WIREGUARD_FWMARK: string;
    const DEVICE_WIREGUARD_LISTEN_PORT: string;
    const DEVICE_WIREGUARD_PUBLIC_KEY: string;
    const DEVICE_WPAN_HW_ADDRESS: string;
    const DHCP_CONFIG_FAMILY: string;
    const DHCP_CONFIG_OPTIONS: string;
    const ETHTOOL_OPTNAME_CHANNELS_COMBINED: string;
    const ETHTOOL_OPTNAME_CHANNELS_OTHER: string;
    const ETHTOOL_OPTNAME_CHANNELS_RX: string;
    const ETHTOOL_OPTNAME_CHANNELS_TX: string;
    const ETHTOOL_OPTNAME_COALESCE_ADAPTIVE_RX: string;
    const ETHTOOL_OPTNAME_COALESCE_ADAPTIVE_TX: string;
    const ETHTOOL_OPTNAME_COALESCE_PKT_RATE_HIGH: string;
    const ETHTOOL_OPTNAME_COALESCE_PKT_RATE_LOW: string;
    const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES: string;
    const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES_HIGH: string;
    const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES_IRQ: string;
    const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES_LOW: string;
    const ETHTOOL_OPTNAME_COALESCE_RX_USECS: string;
    const ETHTOOL_OPTNAME_COALESCE_RX_USECS_HIGH: string;
    const ETHTOOL_OPTNAME_COALESCE_RX_USECS_IRQ: string;
    const ETHTOOL_OPTNAME_COALESCE_RX_USECS_LOW: string;
    const ETHTOOL_OPTNAME_COALESCE_SAMPLE_INTERVAL: string;
    const ETHTOOL_OPTNAME_COALESCE_STATS_BLOCK_USECS: string;
    const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES: string;
    const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES_HIGH: string;
    const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES_IRQ: string;
    const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES_LOW: string;
    const ETHTOOL_OPTNAME_COALESCE_TX_USECS: string;
    const ETHTOOL_OPTNAME_COALESCE_TX_USECS_HIGH: string;
    const ETHTOOL_OPTNAME_COALESCE_TX_USECS_IRQ: string;
    const ETHTOOL_OPTNAME_COALESCE_TX_USECS_LOW: string;
    const ETHTOOL_OPTNAME_EEE_ENABLED: string;
    const ETHTOOL_OPTNAME_FEATURE_ESP_HW_OFFLOAD: string;
    const ETHTOOL_OPTNAME_FEATURE_ESP_TX_CSUM_HW_OFFLOAD: string;
    const ETHTOOL_OPTNAME_FEATURE_FCOE_MTU: string;
    const ETHTOOL_OPTNAME_FEATURE_GRO: string;
    const ETHTOOL_OPTNAME_FEATURE_GSO: string;
    const ETHTOOL_OPTNAME_FEATURE_HIGHDMA: string;
    const ETHTOOL_OPTNAME_FEATURE_HW_TC_OFFLOAD: string;
    const ETHTOOL_OPTNAME_FEATURE_L2_FWD_OFFLOAD: string;
    const ETHTOOL_OPTNAME_FEATURE_LOOPBACK: string;
    const ETHTOOL_OPTNAME_FEATURE_LRO: string;
    const ETHTOOL_OPTNAME_FEATURE_MACSEC_HW_OFFLOAD: string;
    const ETHTOOL_OPTNAME_FEATURE_NTUPLE: string;
    const ETHTOOL_OPTNAME_FEATURE_RX: string;
    const ETHTOOL_OPTNAME_FEATURE_RXHASH: string;
    const ETHTOOL_OPTNAME_FEATURE_RXVLAN: string;
    const ETHTOOL_OPTNAME_FEATURE_RX_ALL: string;
    const ETHTOOL_OPTNAME_FEATURE_RX_FCS: string;
    const ETHTOOL_OPTNAME_FEATURE_RX_GRO_HW: string;
    const ETHTOOL_OPTNAME_FEATURE_RX_GRO_LIST: string;
    const ETHTOOL_OPTNAME_FEATURE_RX_UDP_GRO_FORWARDING: string;
    const ETHTOOL_OPTNAME_FEATURE_RX_UDP_TUNNEL_PORT_OFFLOAD: string;
    const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_FILTER: string;
    const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_STAG_FILTER: string;
    const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_STAG_HW_PARSE: string;
    const ETHTOOL_OPTNAME_FEATURE_SG: string;
    const ETHTOOL_OPTNAME_FEATURE_TLS_HW_RECORD: string;
    const ETHTOOL_OPTNAME_FEATURE_TLS_HW_RX_OFFLOAD: string;
    const ETHTOOL_OPTNAME_FEATURE_TLS_HW_TX_OFFLOAD: string;
    const ETHTOOL_OPTNAME_FEATURE_TSO: string;
    const ETHTOOL_OPTNAME_FEATURE_TX: string;
    const ETHTOOL_OPTNAME_FEATURE_TXVLAN: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_FCOE_CRC: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IPV4: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IPV6: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IP_GENERIC: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_SCTP: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_ESP_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_FCOE_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_GRE_CSUM_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_GRE_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_GSO_LIST: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_GSO_PARTIAL: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_GSO_ROBUST: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_IPXIP4_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_IPXIP6_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_NOCACHE_COPY: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_SCATTER_GATHER: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_SCATTER_GATHER_FRAGLIST: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_SCTP_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_TCP6_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_TCP_ECN_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_TCP_MANGLEID_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_TCP_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_TUNNEL_REMCSUM_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_UDP_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_UDP_TNL_CSUM_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_UDP_TNL_SEGMENTATION: string;
    const ETHTOOL_OPTNAME_FEATURE_TX_VLAN_STAG_HW_INSERT: string;
    const ETHTOOL_OPTNAME_PAUSE_AUTONEG: string;
    const ETHTOOL_OPTNAME_PAUSE_RX: string;
    const ETHTOOL_OPTNAME_PAUSE_TX: string;
    const ETHTOOL_OPTNAME_RING_RX: string;
    const ETHTOOL_OPTNAME_RING_RX_JUMBO: string;
    const ETHTOOL_OPTNAME_RING_RX_MINI: string;
    const ETHTOOL_OPTNAME_RING_TX: string;
    const IP_ADDRESS_ATTRIBUTE_LABEL: string;
    const IP_CONFIG_ADDRESSES: string;
    const IP_CONFIG_DOMAINS: string;
    const IP_CONFIG_FAMILY: string;
    const IP_CONFIG_GATEWAY: string;
    const IP_CONFIG_NAMESERVERS: string;
    const IP_CONFIG_ROUTES: string;
    const IP_CONFIG_SEARCHES: string;
    const IP_CONFIG_WINS_SERVERS: string;
    const IP_ROUTE_ATTRIBUTE_ADVMSS: string;
    const IP_ROUTE_ATTRIBUTE_CWND: string;
    const IP_ROUTE_ATTRIBUTE_FROM: string;
    const IP_ROUTE_ATTRIBUTE_INITCWND: string;
    const IP_ROUTE_ATTRIBUTE_INITRWND: string;
    const IP_ROUTE_ATTRIBUTE_LOCK_ADVMSS: string;
    const IP_ROUTE_ATTRIBUTE_LOCK_CWND: string;
    const IP_ROUTE_ATTRIBUTE_LOCK_INITCWND: string;
    const IP_ROUTE_ATTRIBUTE_LOCK_INITRWND: string;
    const IP_ROUTE_ATTRIBUTE_LOCK_MTU: string;
    const IP_ROUTE_ATTRIBUTE_LOCK_WINDOW: string;
    const IP_ROUTE_ATTRIBUTE_MTU: string;
    const IP_ROUTE_ATTRIBUTE_ONLINK: string;
    const IP_ROUTE_ATTRIBUTE_QUICKACK: string;
    const IP_ROUTE_ATTRIBUTE_RTO_MIN: string;
    const IP_ROUTE_ATTRIBUTE_SCOPE: string;
    const IP_ROUTE_ATTRIBUTE_SRC: string;
    const IP_ROUTE_ATTRIBUTE_TABLE: string;
    const IP_ROUTE_ATTRIBUTE_TOS: string;
    const IP_ROUTE_ATTRIBUTE_TYPE: string;
    const IP_ROUTE_ATTRIBUTE_WEIGHT: string;
    const IP_ROUTE_ATTRIBUTE_WINDOW: string;
    const LLDP_ATTR_CHASSIS_ID: string;
    const LLDP_ATTR_CHASSIS_ID_TYPE: string;
    const LLDP_ATTR_DESTINATION: string;
    const LLDP_ATTR_IEEE_802_1_PPVID: string;
    const LLDP_ATTR_IEEE_802_1_PPVIDS: string;
    const LLDP_ATTR_IEEE_802_1_PPVID_FLAGS: string;
    const LLDP_ATTR_IEEE_802_1_PVID: string;
    const LLDP_ATTR_IEEE_802_1_VID: string;
    const LLDP_ATTR_IEEE_802_1_VLANS: string;
    const LLDP_ATTR_IEEE_802_1_VLAN_NAME: string;
    const LLDP_ATTR_IEEE_802_3_MAC_PHY_CONF: string;
    const LLDP_ATTR_IEEE_802_3_MAX_FRAME_SIZE: string;
    const LLDP_ATTR_IEEE_802_3_POWER_VIA_MDI: string;
    const LLDP_ATTR_MANAGEMENT_ADDRESSES: string;
    const LLDP_ATTR_MUD_URL: string;
    const LLDP_ATTR_PORT_DESCRIPTION: string;
    const LLDP_ATTR_PORT_ID: string;
    const LLDP_ATTR_PORT_ID_TYPE: string;
    const LLDP_ATTR_RAW: string;
    const LLDP_ATTR_SYSTEM_CAPABILITIES: string;
    const LLDP_ATTR_SYSTEM_DESCRIPTION: string;
    const LLDP_ATTR_SYSTEM_NAME: string;
    const LLDP_DEST_NEAREST_BRIDGE: string;
    const LLDP_DEST_NEAREST_CUSTOMER_BRIDGE: string;
    const LLDP_DEST_NEAREST_NON_TPMR_BRIDGE: string;
    /**
     * Evaluates to the major version number of NetworkManager which this source
     * is compiled against.
     */
    const MAJOR_VERSION: number;
    /**
     * Evaluates to the micro version number of NetworkManager which this source
     * compiled against.
     */
    const MICRO_VERSION: number;
    /**
     * Evaluates to the minor version number of NetworkManager which this source
     * is compiled against.
     */
    const MINOR_VERSION: number;
    const OBJECT_CLIENT: string;
    const OBJECT_PATH: string;
    const REMOTE_CONNECTION_DBUS_CONNECTION: string;
    const REMOTE_CONNECTION_FILENAME: string;
    const REMOTE_CONNECTION_FLAGS: string;
    const REMOTE_CONNECTION_PATH: string;
    const REMOTE_CONNECTION_UNSAVED: string;
    const REMOTE_CONNECTION_VERSION_ID: string;
    const REMOTE_CONNECTION_VISIBLE: string;
    const SECRET_AGENT_OLD_AUTO_REGISTER: string;
    const SECRET_AGENT_OLD_CAPABILITIES: string;
    const SECRET_AGENT_OLD_DBUS_CONNECTION: string;
    const SECRET_AGENT_OLD_IDENTIFIER: string;
    const SECRET_AGENT_OLD_REGISTERED: string;
    const SECRET_TAG_DYNAMIC_CHALLENGE: string;
    const SECRET_TAG_DYNAMIC_CHALLENGE_ECHO: string;
    const SECRET_TAG_VPN_MSG: string;
    const SETTING_6LOWPAN_PARENT: string;
    const SETTING_6LOWPAN_SETTING_NAME: string;
    const SETTING_802_1X_ALTSUBJECT_MATCHES: string;
    const SETTING_802_1X_ANONYMOUS_IDENTITY: string;
    const SETTING_802_1X_AUTH_TIMEOUT: string;
    const SETTING_802_1X_CA_CERT: string;
    const SETTING_802_1X_CA_CERT_PASSWORD: string;
    const SETTING_802_1X_CA_CERT_PASSWORD_FLAGS: string;
    const SETTING_802_1X_CA_PATH: string;
    const SETTING_802_1X_CERT_SCHEME_PREFIX_PATH: string;
    const SETTING_802_1X_CERT_SCHEME_PREFIX_PKCS11: string;
    const SETTING_802_1X_CLIENT_CERT: string;
    const SETTING_802_1X_CLIENT_CERT_PASSWORD: string;
    const SETTING_802_1X_CLIENT_CERT_PASSWORD_FLAGS: string;
    const SETTING_802_1X_DOMAIN_MATCH: string;
    const SETTING_802_1X_DOMAIN_SUFFIX_MATCH: string;
    const SETTING_802_1X_EAP: string;
    const SETTING_802_1X_IDENTITY: string;
    const SETTING_802_1X_OPENSSL_CIPHERS: string;
    const SETTING_802_1X_OPTIONAL: string;
    const SETTING_802_1X_PAC_FILE: string;
    const SETTING_802_1X_PASSWORD: string;
    const SETTING_802_1X_PASSWORD_FLAGS: string;
    const SETTING_802_1X_PASSWORD_RAW: string;
    const SETTING_802_1X_PASSWORD_RAW_FLAGS: string;
    const SETTING_802_1X_PHASE1_AUTH_FLAGS: string;
    const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string;
    const SETTING_802_1X_PHASE1_PEAPLABEL: string;
    const SETTING_802_1X_PHASE1_PEAPVER: string;
    const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string;
    const SETTING_802_1X_PHASE2_AUTH: string;
    const SETTING_802_1X_PHASE2_AUTHEAP: string;
    const SETTING_802_1X_PHASE2_CA_CERT: string;
    const SETTING_802_1X_PHASE2_CA_CERT_PASSWORD: string;
    const SETTING_802_1X_PHASE2_CA_CERT_PASSWORD_FLAGS: string;
    const SETTING_802_1X_PHASE2_CA_PATH: string;
    const SETTING_802_1X_PHASE2_CLIENT_CERT: string;
    const SETTING_802_1X_PHASE2_CLIENT_CERT_PASSWORD: string;
    const SETTING_802_1X_PHASE2_CLIENT_CERT_PASSWORD_FLAGS: string;
    const SETTING_802_1X_PHASE2_DOMAIN_MATCH: string;
    const SETTING_802_1X_PHASE2_DOMAIN_SUFFIX_MATCH: string;
    const SETTING_802_1X_PHASE2_PRIVATE_KEY: string;
    const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD: string;
    const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD_FLAGS: string;
    const SETTING_802_1X_PHASE2_SUBJECT_MATCH: string;
    const SETTING_802_1X_PIN: string;
    const SETTING_802_1X_PIN_FLAGS: string;
    const SETTING_802_1X_PRIVATE_KEY: string;
    const SETTING_802_1X_PRIVATE_KEY_PASSWORD: string;
    const SETTING_802_1X_PRIVATE_KEY_PASSWORD_FLAGS: string;
    const SETTING_802_1X_SETTING_NAME: string;
    const SETTING_802_1X_SUBJECT_MATCH: string;
    const SETTING_802_1X_SYSTEM_CA_CERTS: string;
    const SETTING_ADSL_ENCAPSULATION: string;
    const SETTING_ADSL_ENCAPSULATION_LLC: string;
    const SETTING_ADSL_ENCAPSULATION_VCMUX: string;
    const SETTING_ADSL_PASSWORD: string;
    const SETTING_ADSL_PASSWORD_FLAGS: string;
    const SETTING_ADSL_PROTOCOL: string;
    const SETTING_ADSL_PROTOCOL_IPOATM: string;
    const SETTING_ADSL_PROTOCOL_PPPOA: string;
    const SETTING_ADSL_PROTOCOL_PPPOE: string;
    const SETTING_ADSL_SETTING_NAME: string;
    const SETTING_ADSL_USERNAME: string;
    const SETTING_ADSL_VCI: string;
    const SETTING_ADSL_VPI: string;
    const SETTING_BLUETOOTH_BDADDR: string;
    const SETTING_BLUETOOTH_SETTING_NAME: string;
    const SETTING_BLUETOOTH_TYPE: string;
    /**
     * Connection type describing a connection to devices that support the Bluetooth
     * DUN profile.
     */
    const SETTING_BLUETOOTH_TYPE_DUN: string;
    /**
     * Connection type describing a Bluetooth NAP (Network Access Point),
     * which accepts PANU clients.
     */
    const SETTING_BLUETOOTH_TYPE_NAP: string;
    /**
     * Connection type describing PANU connection to a Bluetooth NAP (Network
     * Access Point).
     */
    const SETTING_BLUETOOTH_TYPE_PANU: string;
    const SETTING_BOND_OPTIONS: string;
    const SETTING_BOND_OPTION_ACTIVE_SLAVE: string;
    const SETTING_BOND_OPTION_AD_ACTOR_SYSTEM: string;
    const SETTING_BOND_OPTION_AD_ACTOR_SYS_PRIO: string;
    const SETTING_BOND_OPTION_AD_SELECT: string;
    const SETTING_BOND_OPTION_AD_USER_PORT_KEY: string;
    const SETTING_BOND_OPTION_ALL_SLAVES_ACTIVE: string;
    const SETTING_BOND_OPTION_ARP_ALL_TARGETS: string;
    const SETTING_BOND_OPTION_ARP_INTERVAL: string;
    const SETTING_BOND_OPTION_ARP_IP_TARGET: string;
    const SETTING_BOND_OPTION_ARP_MISSED_MAX: string;
    const SETTING_BOND_OPTION_ARP_VALIDATE: string;
    const SETTING_BOND_OPTION_BALANCE_SLB: string;
    const SETTING_BOND_OPTION_DOWNDELAY: string;
    const SETTING_BOND_OPTION_FAIL_OVER_MAC: string;
    const SETTING_BOND_OPTION_LACP_ACTIVE: string;
    const SETTING_BOND_OPTION_LACP_RATE: string;
    const SETTING_BOND_OPTION_LP_INTERVAL: string;
    const SETTING_BOND_OPTION_MIIMON: string;
    const SETTING_BOND_OPTION_MIN_LINKS: string;
    const SETTING_BOND_OPTION_MODE: string;
    const SETTING_BOND_OPTION_NS_IP6_TARGET: string;
    const SETTING_BOND_OPTION_NUM_GRAT_ARP: string;
    const SETTING_BOND_OPTION_NUM_UNSOL_NA: string;
    const SETTING_BOND_OPTION_PACKETS_PER_SLAVE: string;
    const SETTING_BOND_OPTION_PEER_NOTIF_DELAY: string;
    const SETTING_BOND_OPTION_PRIMARY: string;
    const SETTING_BOND_OPTION_PRIMARY_RESELECT: string;
    const SETTING_BOND_OPTION_RESEND_IGMP: string;
    const SETTING_BOND_OPTION_TLB_DYNAMIC_LB: string;
    const SETTING_BOND_OPTION_UPDELAY: string;
    const SETTING_BOND_OPTION_USE_CARRIER: string;
    const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string;
    const SETTING_BOND_PORT_PRIO: string;
    const SETTING_BOND_PORT_QUEUE_ID: string;
    const SETTING_BOND_PORT_SETTING_NAME: string;
    const SETTING_BOND_SETTING_NAME: string;
    const SETTING_BRIDGE_AGEING_TIME: string;
    const SETTING_BRIDGE_FORWARD_DELAY: string;
    const SETTING_BRIDGE_GROUP_ADDRESS: string;
    const SETTING_BRIDGE_GROUP_FORWARD_MASK: string;
    const SETTING_BRIDGE_HELLO_TIME: string;
    const SETTING_BRIDGE_MAC_ADDRESS: string;
    const SETTING_BRIDGE_MAX_AGE: string;
    const SETTING_BRIDGE_MULTICAST_HASH_MAX: string;
    const SETTING_BRIDGE_MULTICAST_LAST_MEMBER_COUNT: string;
    const SETTING_BRIDGE_MULTICAST_LAST_MEMBER_INTERVAL: string;
    const SETTING_BRIDGE_MULTICAST_MEMBERSHIP_INTERVAL: string;
    const SETTING_BRIDGE_MULTICAST_QUERIER: string;
    const SETTING_BRIDGE_MULTICAST_QUERIER_INTERVAL: string;
    const SETTING_BRIDGE_MULTICAST_QUERY_INTERVAL: string;
    const SETTING_BRIDGE_MULTICAST_QUERY_RESPONSE_INTERVAL: string;
    const SETTING_BRIDGE_MULTICAST_QUERY_USE_IFADDR: string;
    const SETTING_BRIDGE_MULTICAST_ROUTER: string;
    const SETTING_BRIDGE_MULTICAST_SNOOPING: string;
    const SETTING_BRIDGE_MULTICAST_STARTUP_QUERY_COUNT: string;
    const SETTING_BRIDGE_MULTICAST_STARTUP_QUERY_INTERVAL: string;
    const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string;
    const SETTING_BRIDGE_PORT_PATH_COST: string;
    const SETTING_BRIDGE_PORT_PRIORITY: string;
    const SETTING_BRIDGE_PORT_SETTING_NAME: string;
    const SETTING_BRIDGE_PORT_VLANS: string;
    const SETTING_BRIDGE_PRIORITY: string;
    const SETTING_BRIDGE_SETTING_NAME: string;
    const SETTING_BRIDGE_STP: string;
    const SETTING_BRIDGE_VLANS: string;
    const SETTING_BRIDGE_VLAN_DEFAULT_PVID: string;
    const SETTING_BRIDGE_VLAN_FILTERING: string;
    const SETTING_BRIDGE_VLAN_PROTOCOL: string;
    const SETTING_BRIDGE_VLAN_STATS_ENABLED: string;
    const SETTING_CDMA_MTU: string;
    const SETTING_CDMA_NUMBER: string;
    const SETTING_CDMA_PASSWORD: string;
    const SETTING_CDMA_PASSWORD_FLAGS: string;
    const SETTING_CDMA_SETTING_NAME: string;
    const SETTING_CDMA_USERNAME: string;
    const SETTING_CONNECTION_AUTH_RETRIES: string;
    const SETTING_CONNECTION_AUTOCONNECT: string;
    const SETTING_CONNECTION_AUTOCONNECT_PORTS: string;
    const SETTING_CONNECTION_AUTOCONNECT_PRIORITY: string;
    const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_DEFAULT: number;
    const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_MAX: number;
    const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_MIN: number;
    const SETTING_CONNECTION_AUTOCONNECT_RETRIES: string;
    const SETTING_CONNECTION_AUTOCONNECT_SLAVES: string;
    const SETTING_CONNECTION_CONTROLLER: string;
    const SETTING_CONNECTION_DNS_OVER_TLS: string;
    const SETTING_CONNECTION_DOWN_ON_POWEROFF: string;
    const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string;
    const SETTING_CONNECTION_ID: string;
    const SETTING_CONNECTION_INTERFACE_NAME: string;
    const SETTING_CONNECTION_LLDP: string;
    const SETTING_CONNECTION_LLMNR: string;
    const SETTING_CONNECTION_MASTER: string;
    const SETTING_CONNECTION_MDNS: string;
    const SETTING_CONNECTION_METERED: string;
    const SETTING_CONNECTION_MPTCP_FLAGS: string;
    const SETTING_CONNECTION_MUD_URL: string;
    const SETTING_CONNECTION_MULTI_CONNECT: string;
    const SETTING_CONNECTION_PERMISSIONS: string;
    const SETTING_CONNECTION_PORT_TYPE: string;
    const SETTING_CONNECTION_READ_ONLY: string;
    const SETTING_CONNECTION_SECONDARIES: string;
    const SETTING_CONNECTION_SETTING_NAME: string;
    const SETTING_CONNECTION_SLAVE_TYPE: string;
    const SETTING_CONNECTION_STABLE_ID: string;
    const SETTING_CONNECTION_TIMESTAMP: string;
    const SETTING_CONNECTION_TYPE: string;
    const SETTING_CONNECTION_UUID: string;
    const SETTING_CONNECTION_WAIT_ACTIVATION_DELAY: string;
    const SETTING_CONNECTION_WAIT_DEVICE_TIMEOUT: string;
    const SETTING_CONNECTION_ZONE: string;
    const SETTING_DCB_APP_FCOE_FLAGS: string;
    const SETTING_DCB_APP_FCOE_MODE: string;
    const SETTING_DCB_APP_FCOE_PRIORITY: string;
    const SETTING_DCB_APP_FIP_FLAGS: string;
    const SETTING_DCB_APP_FIP_PRIORITY: string;
    const SETTING_DCB_APP_ISCSI_FLAGS: string;
    const SETTING_DCB_APP_ISCSI_PRIORITY: string;
    /**
     * Indicates that the FCoE controller should use "fabric" mode (default)
     */
    const SETTING_DCB_FCOE_MODE_FABRIC: string;
    /**
     * Indicates that the FCoE controller should use "VN2VN" mode.
     */
    const SETTING_DCB_FCOE_MODE_VN2VN: string;
    const SETTING_DCB_PRIORITY_BANDWIDTH: string;
    const SETTING_DCB_PRIORITY_FLOW_CONTROL: string;
    const SETTING_DCB_PRIORITY_FLOW_CONTROL_FLAGS: string;
    const SETTING_DCB_PRIORITY_GROUP_BANDWIDTH: string;
    const SETTING_DCB_PRIORITY_GROUP_FLAGS: string;
    const SETTING_DCB_PRIORITY_GROUP_ID: string;
    const SETTING_DCB_PRIORITY_STRICT_BANDWIDTH: string;
    const SETTING_DCB_PRIORITY_TRAFFIC_CLASS: string;
    const SETTING_DCB_SETTING_NAME: string;
    const SETTING_DNS_OPTION_ATTEMPTS: string;
    const SETTING_DNS_OPTION_DEBUG: string;
    const SETTING_DNS_OPTION_EDNS0: string;
    const SETTING_DNS_OPTION_INET6: string;
    const SETTING_DNS_OPTION_INTERNAL_NO_ADD_EDNS0: string;
    const SETTING_DNS_OPTION_INTERNAL_NO_ADD_TRUST_AD: string;
    const SETTING_DNS_OPTION_IP6_BYTESTRING: string;
    const SETTING_DNS_OPTION_IP6_DOTINT: string;
    const SETTING_DNS_OPTION_NDOTS: string;
    const SETTING_DNS_OPTION_NO_AAAA: string;
    const SETTING_DNS_OPTION_NO_CHECK_NAMES: string;
    const SETTING_DNS_OPTION_NO_IP6_DOTINT: string;
    const SETTING_DNS_OPTION_NO_RELOAD: string;
    const SETTING_DNS_OPTION_NO_TLD_QUERY: string;
    const SETTING_DNS_OPTION_ROTATE: string;
    const SETTING_DNS_OPTION_SINGLE_REQUEST: string;
    const SETTING_DNS_OPTION_SINGLE_REQUEST_REOPEN: string;
    const SETTING_DNS_OPTION_TIMEOUT: string;
    const SETTING_DNS_OPTION_TRUST_AD: string;
    const SETTING_DNS_OPTION_USE_VC: string;
    const SETTING_DUMMY_SETTING_NAME: string;
    const SETTING_ETHTOOL_SETTING_NAME: string;
    const SETTING_GENERIC_DEVICE_HANDLER: string;
    const SETTING_GENERIC_SETTING_NAME: string;
    const SETTING_GSM_APN: string;
    const SETTING_GSM_AUTO_CONFIG: string;
    const SETTING_GSM_DEVICE_ID: string;
    const SETTING_GSM_HOME_ONLY: string;
    const SETTING_GSM_INITIAL_EPS_BEARER_APN: string;
    const SETTING_GSM_INITIAL_EPS_BEARER_CONFIGURE: string;
    const SETTING_GSM_MTU: string;
    const SETTING_GSM_NETWORK_ID: string;
    const SETTING_GSM_NUMBER: string;
    const SETTING_GSM_PASSWORD: string;
    const SETTING_GSM_PASSWORD_FLAGS: string;
    const SETTING_GSM_PIN: string;
    const SETTING_GSM_PIN_FLAGS: string;
    const SETTING_GSM_SETTING_NAME: string;
    const SETTING_GSM_SIM_ID: string;
    const SETTING_GSM_SIM_OPERATOR_ID: string;
    const SETTING_GSM_USERNAME: string;
    const SETTING_HOSTNAME_FROM_DHCP: string;
    const SETTING_HOSTNAME_FROM_DNS_LOOKUP: string;
    const SETTING_HOSTNAME_ONLY_FROM_DEFAULT: string;
    const SETTING_HOSTNAME_PRIORITY: string;
    const SETTING_HOSTNAME_SETTING_NAME: string;
    const SETTING_HSR_MULTICAST_SPEC: string;
    const SETTING_HSR_PORT1: string;
    const SETTING_HSR_PORT2: string;
    const SETTING_HSR_PRP: string;
    const SETTING_HSR_SETTING_NAME: string;
    const SETTING_INFINIBAND_MAC_ADDRESS: string;
    const SETTING_INFINIBAND_MTU: string;
    const SETTING_INFINIBAND_PARENT: string;
    const SETTING_INFINIBAND_P_KEY: string;
    const SETTING_INFINIBAND_SETTING_NAME: string;
    const SETTING_INFINIBAND_TRANSPORT_MODE: string;
    const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string;
    const SETTING_IP4_CONFIG_DHCP_FQDN: string;
    const SETTING_IP4_CONFIG_DHCP_VENDOR_CLASS_IDENTIFIER: string;
    const SETTING_IP4_CONFIG_LINK_LOCAL: string;
    /**
     * IPv4 configuration should be automatically determined via a method appropriate
     * for the hardware interface, ie DHCP or PPP or some other device-specific
     * manner.
     */
    const SETTING_IP4_CONFIG_METHOD_AUTO: string;
    /**
     * This connection does not use or require IPv4 address and it should be disabled.
     */
    const SETTING_IP4_CONFIG_METHOD_DISABLED: string;
    /**
     * IPv4 configuration should be automatically configured for link-local-only
     * operation.
     */
    const SETTING_IP4_CONFIG_METHOD_LINK_LOCAL: string;
    /**
     * All necessary IPv4 configuration (addresses, prefix, DNS, etc) is specified
     * in the setting's properties.
     */
    const SETTING_IP4_CONFIG_METHOD_MANUAL: string;
    /**
     * This connection specifies configuration that allows other computers to
     * connect through it to the default network (usually the Internet).  The
     * connection's interface will be assigned a private address, and a DHCP server,
     * caching DNS server, and Network Address Translation (NAT) functionality will
     * be started on this connection's interface to allow other devices to connect
     * through that interface to the default network.
     */
    const SETTING_IP4_CONFIG_METHOD_SHARED: string;
    const SETTING_IP4_CONFIG_SETTING_NAME: string;
    const SETTING_IP6_CONFIG_ADDR_GEN_MODE: string;
    const SETTING_IP6_CONFIG_DHCP_DUID: string;
    const SETTING_IP6_CONFIG_DHCP_PD_HINT: string;
    const SETTING_IP6_CONFIG_IP6_PRIVACY: string;
    /**
     * IPv6 configuration should be automatically determined via a method appropriate
     * for the hardware interface, ie router advertisements, DHCP, or PPP or some
     * other device-specific manner.
     */
    const SETTING_IP6_CONFIG_METHOD_AUTO: string;
    /**
     * IPv6 configuration should be automatically determined via DHCPv6 only and
     * router advertisements should be ignored.
     */
    const SETTING_IP6_CONFIG_METHOD_DHCP: string;
    /**
     * IPv6 is disabled for the connection.
     */
    const SETTING_IP6_CONFIG_METHOD_DISABLED: string;
    /**
     * IPv6 is not required or is handled by some other mechanism, and NetworkManager
     * should not configure IPv6 for this connection.
     */
    const SETTING_IP6_CONFIG_METHOD_IGNORE: string;
    /**
     * IPv6 configuration should be automatically configured for link-local-only
     * operation.
     */
    const SETTING_IP6_CONFIG_METHOD_LINK_LOCAL: string;
    /**
     * All necessary IPv6 configuration (addresses, prefix, DNS, etc) is specified
     * in the setting's properties.
     */
    const SETTING_IP6_CONFIG_METHOD_MANUAL: string;
    /**
     * This connection specifies configuration that allows other computers to
     * connect through it to the default network (usually the Internet).  The
     * connection's interface will be assigned a private address, and router
     * advertisements, a caching DNS server, and Network Address Translation (NAT)
     * functionality will be started on this connection's interface to allow other
     * devices to connect through that interface to the default network. (not yet
     * supported for IPv6)
     */
    const SETTING_IP6_CONFIG_METHOD_SHARED: string;
    const SETTING_IP6_CONFIG_MTU: string;
    const SETTING_IP6_CONFIG_RA_TIMEOUT: string;
    const SETTING_IP6_CONFIG_SETTING_NAME: string;
    const SETTING_IP6_CONFIG_TEMP_PREFERRED_LIFETIME: string;
    const SETTING_IP6_CONFIG_TEMP_VALID_LIFETIME: string;
    const SETTING_IP6_CONFIG_TOKEN: string;
    const SETTING_IP_CONFIG_ADDRESSES: string;
    const SETTING_IP_CONFIG_AUTO_ROUTE_EXT_GW: string;
    const SETTING_IP_CONFIG_DAD_TIMEOUT: string;
    const SETTING_IP_CONFIG_DAD_TIMEOUT_MAX: number;
    const SETTING_IP_CONFIG_DHCP_DSCP: string;
    const SETTING_IP_CONFIG_DHCP_HOSTNAME: string;
    const SETTING_IP_CONFIG_DHCP_HOSTNAME_FLAGS: string;
    const SETTING_IP_CONFIG_DHCP_IAID: string;
    const SETTING_IP_CONFIG_DHCP_REJECT_SERVERS: string;
    const SETTING_IP_CONFIG_DHCP_SEND_HOSTNAME: string;
    const SETTING_IP_CONFIG_DHCP_SEND_RELEASE: string;
    const SETTING_IP_CONFIG_DHCP_TIMEOUT: string;
    const SETTING_IP_CONFIG_DNS: string;
    const SETTING_IP_CONFIG_DNS_OPTIONS: string;
    const SETTING_IP_CONFIG_DNS_PRIORITY: string;
    const SETTING_IP_CONFIG_DNS_SEARCH: string;
    const SETTING_IP_CONFIG_GATEWAY: string;
    const SETTING_IP_CONFIG_IGNORE_AUTO_DNS: string;
    const SETTING_IP_CONFIG_IGNORE_AUTO_ROUTES: string;
    const SETTING_IP_CONFIG_MAY_FAIL: string;
    const SETTING_IP_CONFIG_METHOD: string;
    const SETTING_IP_CONFIG_NEVER_DEFAULT: string;
    const SETTING_IP_CONFIG_REPLACE_LOCAL_RULE: string;
    const SETTING_IP_CONFIG_REQUIRED_TIMEOUT: string;
    const SETTING_IP_CONFIG_ROUTES: string;
    const SETTING_IP_CONFIG_ROUTE_METRIC: string;
    const SETTING_IP_CONFIG_ROUTE_TABLE: string;
    const SETTING_IP_CONFIG_ROUTING_RULES: string;
    const SETTING_IP_TUNNEL_ENCAPSULATION_LIMIT: string;
    const SETTING_IP_TUNNEL_FLAGS: string;
    const SETTING_IP_TUNNEL_FLOW_LABEL: string;
    const SETTING_IP_TUNNEL_FWMARK: string;
    const SETTING_IP_TUNNEL_INPUT_KEY: string;
    const SETTING_IP_TUNNEL_LOCAL: string;
    const SETTING_IP_TUNNEL_MODE: string;
    const SETTING_IP_TUNNEL_MTU: string;
    const SETTING_IP_TUNNEL_OUTPUT_KEY: string;
    const SETTING_IP_TUNNEL_PARENT: string;
    const SETTING_IP_TUNNEL_PATH_MTU_DISCOVERY: string;
    const SETTING_IP_TUNNEL_REMOTE: string;
    const SETTING_IP_TUNNEL_SETTING_NAME: string;
    const SETTING_IP_TUNNEL_TOS: string;
    const SETTING_IP_TUNNEL_TTL: string;
    const SETTING_LINK_GRO_MAX_SIZE: string;
    const SETTING_LINK_GSO_MAX_SEGMENTS: string;
    const SETTING_LINK_GSO_MAX_SIZE: string;
    const SETTING_LINK_SETTING_NAME: string;
    const SETTING_LINK_TX_QUEUE_LENGTH: string;
    const SETTING_LOOPBACK_MTU: string;
    const SETTING_LOOPBACK_SETTING_NAME: string;
    const SETTING_MACSEC_ENCRYPT: string;
    const SETTING_MACSEC_MKA_CAK: string;
    const SETTING_MACSEC_MKA_CAK_FLAGS: string;
    const SETTING_MACSEC_MKA_CAK_LENGTH: number;
    const SETTING_MACSEC_MKA_CKN: string;
    const SETTING_MACSEC_MKA_CKN_LENGTH: number;
    const SETTING_MACSEC_MODE: string;
    const SETTING_MACSEC_OFFLOAD: string;
    const SETTING_MACSEC_PARENT: string;
    const SETTING_MACSEC_PORT: string;
    const SETTING_MACSEC_SEND_SCI: string;
    const SETTING_MACSEC_SETTING_NAME: string;
    const SETTING_MACSEC_VALIDATION: string;
    const SETTING_MACVLAN_MODE: string;
    const SETTING_MACVLAN_PARENT: string;
    const SETTING_MACVLAN_PROMISCUOUS: string;
    const SETTING_MACVLAN_SETTING_NAME: string;
    const SETTING_MACVLAN_TAP: string;
    const SETTING_MATCH_DRIVER: string;
    const SETTING_MATCH_INTERFACE_NAME: string;
    const SETTING_MATCH_KERNEL_COMMAND_LINE: string;
    const SETTING_MATCH_PATH: string;
    const SETTING_MATCH_SETTING_NAME: string;
    const SETTING_NAME: string;
    const SETTING_OLPC_MESH_CHANNEL: string;
    const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string;
    const SETTING_OLPC_MESH_SETTING_NAME: string;
    const SETTING_OLPC_MESH_SSID: string;
    const SETTING_OVS_BRIDGE_DATAPATH_TYPE: string;
    const SETTING_OVS_BRIDGE_FAIL_MODE: string;
    const SETTING_OVS_BRIDGE_MCAST_SNOOPING_ENABLE: string;
    const SETTING_OVS_BRIDGE_RSTP_ENABLE: string;
    const SETTING_OVS_BRIDGE_SETTING_NAME: string;
    const SETTING_OVS_BRIDGE_STP_ENABLE: string;
    const SETTING_OVS_DPDK_DEVARGS: string;
    const SETTING_OVS_DPDK_N_RXQ: string;
    const SETTING_OVS_DPDK_N_RXQ_DESC: string;
    const SETTING_OVS_DPDK_N_TXQ_DESC: string;
    const SETTING_OVS_DPDK_SETTING_NAME: string;
    const SETTING_OVS_EXTERNAL_IDS_DATA: string;
    const SETTING_OVS_EXTERNAL_IDS_SETTING_NAME: string;
    const SETTING_OVS_INTERFACE_OFPORT_REQUEST: string;
    const SETTING_OVS_INTERFACE_SETTING_NAME: string;
    const SETTING_OVS_INTERFACE_TYPE: string;
    const SETTING_OVS_OTHER_CONFIG_DATA: string;
    const SETTING_OVS_OTHER_CONFIG_SETTING_NAME: string;
    const SETTING_OVS_PATCH_PEER: string;
    const SETTING_OVS_PATCH_SETTING_NAME: string;
    const SETTING_OVS_PORT_BOND_DOWNDELAY: string;
    const SETTING_OVS_PORT_BOND_MODE: string;
    const SETTING_OVS_PORT_BOND_UPDELAY: string;
    const SETTING_OVS_PORT_LACP: string;
    const SETTING_OVS_PORT_SETTING_NAME: string;
    const SETTING_OVS_PORT_TAG: string;
    const SETTING_OVS_PORT_TRUNKS: string;
    const SETTING_OVS_PORT_VLAN_MODE: string;
    const SETTING_PARAM_FUZZY_IGNORE: number;
    const SETTING_PARAM_REQUIRED: number;
    const SETTING_PARAM_SECRET: number;
    const SETTING_PPPOE_PARENT: string;
    const SETTING_PPPOE_PASSWORD: string;
    const SETTING_PPPOE_PASSWORD_FLAGS: string;
    const SETTING_PPPOE_SERVICE: string;
    const SETTING_PPPOE_SETTING_NAME: string;
    const SETTING_PPPOE_USERNAME: string;
    const SETTING_PPP_BAUD: string;
    const SETTING_PPP_CRTSCTS: string;
    const SETTING_PPP_LCP_ECHO_FAILURE: string;
    const SETTING_PPP_LCP_ECHO_INTERVAL: string;
    const SETTING_PPP_MPPE_STATEFUL: string;
    const SETTING_PPP_MRU: string;
    const SETTING_PPP_MTU: string;
    const SETTING_PPP_NOAUTH: string;
    const SETTING_PPP_NOBSDCOMP: string;
    const SETTING_PPP_NODEFLATE: string;
    const SETTING_PPP_NO_VJ_COMP: string;
    const SETTING_PPP_REFUSE_CHAP: string;
    const SETTING_PPP_REFUSE_EAP: string;
    const SETTING_PPP_REFUSE_MSCHAP: string;
    const SETTING_PPP_REFUSE_MSCHAPV2: string;
    const SETTING_PPP_REFUSE_PAP: string;
    const SETTING_PPP_REQUIRE_MPPE: string;
    const SETTING_PPP_REQUIRE_MPPE_128: string;
    const SETTING_PPP_SETTING_NAME: string;
    const SETTING_PROXY_BROWSER_ONLY: string;
    const SETTING_PROXY_METHOD: string;
    const SETTING_PROXY_PAC_SCRIPT: string;
    const SETTING_PROXY_PAC_URL: string;
    const SETTING_PROXY_SETTING_NAME: string;
    const SETTING_SERIAL_BAUD: string;
    const SETTING_SERIAL_BITS: string;
    const SETTING_SERIAL_PARITY: string;
    const SETTING_SERIAL_SEND_DELAY: string;
    const SETTING_SERIAL_SETTING_NAME: string;
    const SETTING_SERIAL_STOPBITS: string;
    const SETTING_SRIOV_AUTOPROBE_DRIVERS: string;
    const SETTING_SRIOV_ESWITCH_ENCAP_MODE: string;
    const SETTING_SRIOV_ESWITCH_INLINE_MODE: string;
    const SETTING_SRIOV_ESWITCH_MODE: string;
    const SETTING_SRIOV_SETTING_NAME: string;
    const SETTING_SRIOV_TOTAL_VFS: string;
    const SETTING_SRIOV_VFS: string;
    const SETTING_TC_CONFIG_QDISCS: string;
    const SETTING_TC_CONFIG_SETTING_NAME: string;
    const SETTING_TC_CONFIG_TFILTERS: string;
    const SETTING_TEAM_CONFIG: string;
    const SETTING_TEAM_LINK_WATCHERS: string;
    const SETTING_TEAM_MCAST_REJOIN_COUNT: string;
    const SETTING_TEAM_MCAST_REJOIN_INTERVAL: string;
    const SETTING_TEAM_NOTIFY_MCAST_COUNT_ACTIVEBACKUP_DEFAULT: number;
    const SETTING_TEAM_NOTIFY_PEERS_COUNT: string;
    const SETTING_TEAM_NOTIFY_PEERS_COUNT_ACTIVEBACKUP_DEFAULT: number;
    const SETTING_TEAM_NOTIFY_PEERS_INTERVAL: string;
    const SETTING_TEAM_PORT_CONFIG: string;
    const SETTING_TEAM_PORT_LACP_KEY: string;
    const SETTING_TEAM_PORT_LACP_PRIO: string;
    const SETTING_TEAM_PORT_LACP_PRIO_DEFAULT: number;
    const SETTING_TEAM_PORT_LINK_WATCHERS: string;
    const SETTING_TEAM_PORT_PRIO: string;
    const SETTING_TEAM_PORT_QUEUE_ID: string;
    const SETTING_TEAM_PORT_QUEUE_ID_DEFAULT: number;
    const SETTING_TEAM_PORT_SETTING_NAME: string;
    const SETTING_TEAM_PORT_STICKY: string;
    const SETTING_TEAM_RUNNER: string;
    const SETTING_TEAM_RUNNER_ACTIVE: string;
    const SETTING_TEAM_RUNNER_ACTIVEBACKUP: string;
    const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY: string;
    const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_BANDWIDTH: string;
    const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_COUNT: string;
    const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_LACP_PRIO: string;
    const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_LACP_PRIO_STABLE: string;
    const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_PORT_CONFIG: string;
    const SETTING_TEAM_RUNNER_BROADCAST: string;
    const SETTING_TEAM_RUNNER_FAST_RATE: string;
    const SETTING_TEAM_RUNNER_HWADDR_POLICY: string;
    const SETTING_TEAM_RUNNER_HWADDR_POLICY_BY_ACTIVE: string;
    const SETTING_TEAM_RUNNER_HWADDR_POLICY_ONLY_ACTIVE: string;
    const SETTING_TEAM_RUNNER_HWADDR_POLICY_SAME_ALL: string;
    const SETTING_TEAM_RUNNER_LACP: string;
    const SETTING_TEAM_RUNNER_LOADBALANCE: string;
    const SETTING_TEAM_RUNNER_MIN_PORTS: string;
    const SETTING_TEAM_RUNNER_RANDOM: string;
    const SETTING_TEAM_RUNNER_ROUNDROBIN: string;
    const SETTING_TEAM_RUNNER_SYS_PRIO: string;
    const SETTING_TEAM_RUNNER_SYS_PRIO_DEFAULT: number;
    const SETTING_TEAM_RUNNER_TX_BALANCER: string;
    const SETTING_TEAM_RUNNER_TX_BALANCER_INTERVAL: string;
    const SETTING_TEAM_RUNNER_TX_BALANCER_INTERVAL_DEFAULT: number;
    const SETTING_TEAM_RUNNER_TX_HASH: string;
    const SETTING_TEAM_SETTING_NAME: string;
    const SETTING_TUN_GROUP: string;
    const SETTING_TUN_MODE: string;
    const SETTING_TUN_MULTI_QUEUE: string;
    const SETTING_TUN_OWNER: string;
    const SETTING_TUN_PI: string;
    const SETTING_TUN_SETTING_NAME: string;
    const SETTING_TUN_VNET_HDR: string;
    const SETTING_USER_DATA: string;
    const SETTING_USER_SETTING_NAME: string;
    const SETTING_VETH_PEER: string;
    const SETTING_VETH_SETTING_NAME: string;
    const SETTING_VLAN_EGRESS_PRIORITY_MAP: string;
    const SETTING_VLAN_FLAGS: string;
    const SETTING_VLAN_ID: string;
    const SETTING_VLAN_INGRESS_PRIORITY_MAP: string;
    const SETTING_VLAN_PARENT: string;
    const SETTING_VLAN_PROTOCOL: string;
    const SETTING_VLAN_SETTING_NAME: string;
    const SETTING_VPN_DATA: string;
    const SETTING_VPN_PERSISTENT: string;
    const SETTING_VPN_SECRETS: string;
    const SETTING_VPN_SERVICE_TYPE: string;
    const SETTING_VPN_SETTING_NAME: string;
    const SETTING_VPN_TIMEOUT: string;
    const SETTING_VPN_USER_NAME: string;
    const SETTING_VRF_SETTING_NAME: string;
    const SETTING_VRF_TABLE: string;
    const SETTING_VXLAN_AGEING: string;
    const SETTING_VXLAN_DESTINATION_PORT: string;
    const SETTING_VXLAN_ID: string;
    const SETTING_VXLAN_L2_MISS: string;
    const SETTING_VXLAN_L3_MISS: string;
    const SETTING_VXLAN_LEARNING: string;
    const SETTING_VXLAN_LIMIT: string;
    const SETTING_VXLAN_LOCAL: string;
    const SETTING_VXLAN_PARENT: string;
    const SETTING_VXLAN_PROXY: string;
    const SETTING_VXLAN_REMOTE: string;
    const SETTING_VXLAN_RSC: string;
    const SETTING_VXLAN_SETTING_NAME: string;
    const SETTING_VXLAN_SOURCE_PORT_MAX: string;
    const SETTING_VXLAN_SOURCE_PORT_MIN: string;
    const SETTING_VXLAN_TOS: string;
    const SETTING_VXLAN_TTL: string;
    /**
     * The mac address of the peer to connect to.
     */
    const SETTING_WIFI_P2P_PEER: string;
    const SETTING_WIFI_P2P_SETTING_NAME: string;
    const SETTING_WIFI_P2P_WFD_IES: string;
    const SETTING_WIFI_P2P_WPS_METHOD: string;
    const SETTING_WIMAX_MAC_ADDRESS: string;
    const SETTING_WIMAX_NETWORK_NAME: string;
    const SETTING_WIMAX_SETTING_NAME: string;
    const SETTING_WIRED_ACCEPT_ALL_MAC_ADDRESSES: string;
    const SETTING_WIRED_AUTO_NEGOTIATE: string;
    const SETTING_WIRED_CLONED_MAC_ADDRESS: string;
    const SETTING_WIRED_DUPLEX: string;
    const SETTING_WIRED_GENERATE_MAC_ADDRESS_MASK: string;
    const SETTING_WIRED_MAC_ADDRESS: string;
    const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string;
    const SETTING_WIRED_MAC_ADDRESS_DENYLIST: string;
    const SETTING_WIRED_MTU: string;
    const SETTING_WIRED_PORT: string;
    const SETTING_WIRED_S390_NETTYPE: string;
    const SETTING_WIRED_S390_OPTIONS: string;
    const SETTING_WIRED_S390_SUBCHANNELS: string;
    const SETTING_WIRED_SETTING_NAME: string;
    const SETTING_WIRED_SPEED: string;
    const SETTING_WIRED_WAKE_ON_LAN: string;
    const SETTING_WIRED_WAKE_ON_LAN_PASSWORD: string;
    const SETTING_WIREGUARD_FWMARK: string;
    const SETTING_WIREGUARD_IP4_AUTO_DEFAULT_ROUTE: string;
    const SETTING_WIREGUARD_IP6_AUTO_DEFAULT_ROUTE: string;
    const SETTING_WIREGUARD_LISTEN_PORT: string;
    const SETTING_WIREGUARD_MTU: string;
    const SETTING_WIREGUARD_PEERS: string;
    const SETTING_WIREGUARD_PEER_ROUTES: string;
    const SETTING_WIREGUARD_PRIVATE_KEY: string;
    const SETTING_WIREGUARD_PRIVATE_KEY_FLAGS: string;
    const SETTING_WIREGUARD_SETTING_NAME: string;
    const SETTING_WIRELESS_AP_ISOLATION: string;
    const SETTING_WIRELESS_BAND: string;
    const SETTING_WIRELESS_BSSID: string;
    const SETTING_WIRELESS_CHANNEL: string;
    const SETTING_WIRELESS_CHANNEL_WIDTH: string;
    const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string;
    const SETTING_WIRELESS_GENERATE_MAC_ADDRESS_MASK: string;
    const SETTING_WIRELESS_HIDDEN: string;
    const SETTING_WIRELESS_MAC_ADDRESS: string;
    const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string;
    const SETTING_WIRELESS_MAC_ADDRESS_DENYLIST: string;
    const SETTING_WIRELESS_MAC_ADDRESS_RANDOMIZATION: string;
    const SETTING_WIRELESS_MODE: string;
    /**
     * Indicates Ad-Hoc mode where no access point is expected to be present.
     */
    const SETTING_WIRELESS_MODE_ADHOC: string;
    /**
     * Indicates AP/master mode where the wireless device is started as an access
     * point/hotspot.
     */
    const SETTING_WIRELESS_MODE_AP: string;
    /**
     * Indicates infrastructure mode where an access point is expected to be present
     * for this connection.
     */
    const SETTING_WIRELESS_MODE_INFRA: string;
    /**
     * Indicates that the connection should create a mesh point.
     */
    const SETTING_WIRELESS_MODE_MESH: string;
    const SETTING_WIRELESS_MTU: string;
    const SETTING_WIRELESS_POWERSAVE: string;
    const SETTING_WIRELESS_RATE: string;
    const SETTING_WIRELESS_SECURITY_AUTH_ALG: string;
    const SETTING_WIRELESS_SECURITY_FILS: string;
    const SETTING_WIRELESS_SECURITY_GROUP: string;
    const SETTING_WIRELESS_SECURITY_KEY_MGMT: string;
    const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string;
    const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string;
    const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string;
    const SETTING_WIRELESS_SECURITY_PAIRWISE: string;
    const SETTING_WIRELESS_SECURITY_PMF: string;
    const SETTING_WIRELESS_SECURITY_PROTO: string;
    const SETTING_WIRELESS_SECURITY_PSK: string;
    const SETTING_WIRELESS_SECURITY_PSK_FLAGS: string;
    const SETTING_WIRELESS_SECURITY_SETTING_NAME: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY0: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY1: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY2: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY3: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY_FLAGS: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY_TYPE: string;
    const SETTING_WIRELESS_SECURITY_WEP_TX_KEYIDX: string;
    const SETTING_WIRELESS_SECURITY_WPS_METHOD: string;
    const SETTING_WIRELESS_SEEN_BSSIDS: string;
    const SETTING_WIRELESS_SETTING_NAME: string;
    const SETTING_WIRELESS_SSID: string;
    const SETTING_WIRELESS_TX_POWER: string;
    const SETTING_WIRELESS_WAKE_ON_WLAN: string;
    const SETTING_WPAN_CHANNEL: string;
    const SETTING_WPAN_CHANNEL_DEFAULT: number;
    const SETTING_WPAN_MAC_ADDRESS: string;
    const SETTING_WPAN_PAGE: string;
    const SETTING_WPAN_PAGE_DEFAULT: number;
    const SETTING_WPAN_PAN_ID: string;
    const SETTING_WPAN_SETTING_NAME: string;
    const SETTING_WPAN_SHORT_ADDRESS: string;
    const SRIOV_VF_ATTRIBUTE_MAC: string;
    const SRIOV_VF_ATTRIBUTE_MAX_TX_RATE: string;
    const SRIOV_VF_ATTRIBUTE_MIN_TX_RATE: string;
    const SRIOV_VF_ATTRIBUTE_SPOOF_CHECK: string;
    const SRIOV_VF_ATTRIBUTE_TRUST: string;
    const TEAM_LINK_WATCHER_ARP_PING: string;
    const TEAM_LINK_WATCHER_ETHTOOL: string;
    const TEAM_LINK_WATCHER_NSNA_PING: string;
    /**
     * The maximum length of hardware addresses handled by NetworkManager itself,
     * nm_utils_hwaddr_len(), and nm_utils_hwaddr_aton().
     */
    const UTILS_HWADDR_LEN_MAX: number;
    const VLAN_FLAGS_ALL: number;
    const VPN_CONNECTION_BANNER: string;
    const VPN_CONNECTION_VPN_STATE: string;
    const VPN_DBUS_PLUGIN_INTERFACE: string;
    const VPN_DBUS_PLUGIN_PATH: string;
    const VPN_EDITOR_PLUGIN_DESCRIPTION: string;
    const VPN_EDITOR_PLUGIN_NAME: string;
    const VPN_EDITOR_PLUGIN_SERVICE: string;
    const VPN_PLUGIN_CAN_PERSIST: string;
    const VPN_PLUGIN_CONFIG_BANNER: string;
    const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string;
    const VPN_PLUGIN_CONFIG_HAS_IP4: string;
    const VPN_PLUGIN_CONFIG_HAS_IP6: string;
    const VPN_PLUGIN_CONFIG_MTU: string;
    const VPN_PLUGIN_CONFIG_PROXY_PAC: string;
    const VPN_PLUGIN_CONFIG_TUNDEV: string;
    const VPN_PLUGIN_INFO_FILENAME: string;
    const VPN_PLUGIN_INFO_KEYFILE: string;
    const VPN_PLUGIN_INFO_KF_GROUP_CONNECTION: string;
    const VPN_PLUGIN_INFO_KF_GROUP_GNOME: string;
    const VPN_PLUGIN_INFO_KF_GROUP_LIBNM: string;
    const VPN_PLUGIN_INFO_NAME: string;
    const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string;
    const VPN_PLUGIN_IP4_CONFIG_DNS: string;
    const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string;
    const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string;
    const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string;
    const VPN_PLUGIN_IP4_CONFIG_MSS: string;
    const VPN_PLUGIN_IP4_CONFIG_NBNS: string;
    const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string;
    const VPN_PLUGIN_IP4_CONFIG_PREFIX: string;
    const VPN_PLUGIN_IP4_CONFIG_PRESERVE_ROUTES: string;
    const VPN_PLUGIN_IP4_CONFIG_PTP: string;
    const VPN_PLUGIN_IP4_CONFIG_ROUTES: string;
    const VPN_PLUGIN_IP6_CONFIG_ADDRESS: string;
    const VPN_PLUGIN_IP6_CONFIG_DNS: string;
    const VPN_PLUGIN_IP6_CONFIG_DOMAIN: string;
    const VPN_PLUGIN_IP6_CONFIG_DOMAINS: string;
    const VPN_PLUGIN_IP6_CONFIG_INT_GATEWAY: string;
    const VPN_PLUGIN_IP6_CONFIG_MSS: string;
    const VPN_PLUGIN_IP6_CONFIG_NEVER_DEFAULT: string;
    const VPN_PLUGIN_IP6_CONFIG_PREFIX: string;
    const VPN_PLUGIN_IP6_CONFIG_PRESERVE_ROUTES: string;
    const VPN_PLUGIN_IP6_CONFIG_PTP: string;
    const VPN_PLUGIN_IP6_CONFIG_ROUTES: string;
    const VPN_PLUGIN_OLD_DBUS_SERVICE_NAME: string;
    const VPN_PLUGIN_OLD_STATE: string;
    const VPN_SERVICE_PLUGIN_DBUS_SERVICE_NAME: string;
    const VPN_SERVICE_PLUGIN_DBUS_WATCH_PEER: string;
    const VPN_SERVICE_PLUGIN_STATE: string;
    const WIFI_P2P_PEER_FLAGS: string;
    const WIFI_P2P_PEER_HW_ADDRESS: string;
    const WIFI_P2P_PEER_LAST_SEEN: string;
    const WIFI_P2P_PEER_MANUFACTURER: string;
    const WIFI_P2P_PEER_MODEL: string;
    const WIFI_P2P_PEER_MODEL_NUMBER: string;
    const WIFI_P2P_PEER_NAME: string;
    const WIFI_P2P_PEER_SERIAL: string;
    const WIFI_P2P_PEER_STRENGTH: string;
    const WIFI_P2P_PEER_WFD_IES: string;
    const WIMAX_NSP_NAME: string;
    const WIMAX_NSP_NETWORK_TYPE: string;
    const WIMAX_NSP_SIGNAL_QUALITY: string;
    const WIREGUARD_PEER_ATTR_ALLOWED_IPS: string;
    const WIREGUARD_PEER_ATTR_ENDPOINT: string;
    const WIREGUARD_PEER_ATTR_PERSISTENT_KEEPALIVE: string;
    const WIREGUARD_PEER_ATTR_PRESHARED_KEY: string;
    const WIREGUARD_PEER_ATTR_PRESHARED_KEY_FLAGS: string;
    const WIREGUARD_PEER_ATTR_PUBLIC_KEY: string;
    const WIREGUARD_PUBLIC_KEY_LEN: number;
    const WIREGUARD_SYMMETRIC_KEY_LEN: number;
    function agent_manager_error_quark(): GLib.Quark;
    /**
     * Parses the string representation of the queueing
     * discipline to a %NMBridgeVlan instance.
     *
     * @returns the %NMBridgeVlan or %NULL
     * @param str the string representation of a bridge VLAN
     */
    function bridge_vlan_from_str(str: string): BridgeVlan;
    /**
     * Registers an error quark for #NMClient if necessary.
     *
     * @returns the error quark used for #NMClient errors.
     */
    function client_error_quark(): GLib.Quark;
    function conn_wireguard_import(filename: string): Connection;
    function connection_error_quark(): GLib.Quark;
    function crypto_error_quark(): GLib.Quark;
    function device_error_quark(): GLib.Quark;
    /**
     * Checks whether `optname` is a valid option name for a channels setting.
     *
     * @returns %TRUE, if `optname` is valid
     * @param optname the option name to check
     */
    function ethtool_optname_is_channels(optname?: string | null): boolean;
    /**
     * Checks whether `optname` is a valid option name for a coalesce setting.
     *
     * @returns %TRUE, if `optname` is valid
     * @param optname the option name to check
     */
    function ethtool_optname_is_coalesce(optname?: string | null): boolean;
    /**
     * Checks whether `optname` is a valid option name for an eee setting.
     *
     * @returns %TRUE, if `optname` is valid
     * @param optname the option name to check
     */
    function ethtool_optname_is_eee(optname?: string | null): boolean;
    /**
     * Checks whether `optname` is a valid option name for an offload feature.
     *
     * @returns %TRUE, if `optname` is valid
     *
     * Note that nm_ethtool_optname_is_feature() was first added to the libnm header files
     * in 1.14.0 but forgot to actually add to the library. This happened belatedly in 1.20.0 and
     * the stable versions 1.18.2, 1.16.4 and 1.14.8 (with linker version "libnm_1_14_8").
     * @param optname the option name to check
     */
    function ethtool_optname_is_feature(optname?: string | null): boolean;
    /**
     * Checks whether `optname` is a valid option name for a pause setting.
     *
     * @returns %TRUE, if `optname` is valid
     * @param optname the option name to check
     */
    function ethtool_optname_is_pause(optname?: string | null): boolean;
    /**
     * Checks whether `optname` is a valid option name for a ring setting.
     *
     * @returns %TRUE, if `optname` is valid
     * @param optname the option name to check
     */
    function ethtool_optname_is_ring(optname?: string | null): boolean;
    /**
     * Validates a route attribute, i.e. checks that the attribute is a known one
     * and the value is of the correct type and well-formed.
     *
     * @returns %TRUE if the attribute is valid, %FALSE otherwise
     * @param name the attribute name
     * @param value the attribute value
     * @param family IP address family of the route
     */
    function ip_route_attribute_validate(name: string, value: GLib.Variant, family: number): [boolean, boolean];
    function ip_route_get_variant_attribute_spec(): VariantAttributeSpec;
    function ip_routing_rule_from_string(
        str: string,
        to_string_flags: IPRoutingRuleAsStringFlags | null,
        extra_args?: GLib.HashTable<any, any> | null,
    ): IPRoutingRule;
    /**
     * Tries to create a NMConnection from a keyfile. The resulting keyfile is
     * not normalized and might not even verify.
     *
     * @returns on success, returns the created connection.
     * @param keyfile the keyfile from which to create the connection
     * @param base_dir when reading certificates from files with relative name,
     *   the relative path is made absolute using `base_dir`. This must
     *   be an absolute path.
     * @param handler_flags the #NMKeyfileHandlerFlags.
     * @param handler read handler
     */
    function keyfile_read(
        keyfile: GLib.KeyFile,
        base_dir: string,
        handler_flags: KeyfileHandlerFlags | null,
        handler?: KeyfileReadHandler | null,
    ): Connection;
    /**
     * `connection` should verify as a valid profile according to
     * nm_connection_verify(). If it does not verify, the keyfile may
     * be incomplete and the parser may not be able to fully recreate
     * the original profile.
     *
     * @returns a new #GKeyFile or %NULL on error.
     * @param connection the #NMConnection to persist to keyfile.
     * @param handler_flags the #NMKeyfileHandlerFlags.
     * @param handler optional handler for events and
     *   to override the default behavior.
     */
    function keyfile_write(
        connection: Connection,
        handler_flags: KeyfileHandlerFlags | null,
        handler?: KeyfileWriteHandler | null,
    ): GLib.KeyFile;
    function manager_error_quark(): GLib.Quark;
    /**
     * Parses the string representation of the range to create a %NMRange
     * instance.
     *
     * @returns the %NMRange or %NULL
     * @param str the string representation of a range
     */
    function range_from_str(str: string): Range;
    function secret_agent_error_quark(): GLib.Quark;
    function settings_error_quark(): GLib.Quark;
    /**
     * Validates a VF attribute, i.e. checks that the attribute is a known one,
     * the value is of the correct type and well-formed.
     *
     * @returns %TRUE if the attribute is valid, %FALSE otherwise
     * @param name the attribute name
     * @param value the attribute value
     */
    function sriov_vf_attribute_validate(name: string, value: GLib.Variant): [boolean, boolean];
    /**
     * Given a set of device capabilities, and a desired security type to check
     * against, determines whether the combination of device capabilities and
     * desired security type are valid for AP/Hotspot connections.
     *
     * @returns %TRUE if the device capabilities are compatible with the desired
     * `type,` %FALSE if they are not.
     * @param type the security type to check device capabilities against,
     * e.g. #NMU_SEC_STATIC_WEP
     * @param wifi_caps bitfield of the capabilities of the specific Wi-Fi device, e.g.
     * #NM_WIFI_DEVICE_CAP_CIPHER_WEP40
     */
    function utils_ap_mode_security_valid(
        type: UtilsSecurityType | null,
        wifi_caps: DeviceWifiCapabilities | null,
    ): boolean;
    function utils_base64secret_decode(_base64_key: string, required_key_len: number): [boolean, number];
    /**
     * Converts the byte array `src` into a hexadecimal string. If `final_len` is
     * greater than -1, the returned string is terminated at that index
     * (returned_string[final_len] == '\0'),
     *
     * @returns the textual form of `bytes`
     * @param src an array of bytes
     * @param final_len an index where to cut off the returned string, or -1
     */
    function utils_bin2hexstr(src: Uint8Array[] | string, final_len: number): string;
    /**
     * Convert bonding mode from integer value to descriptive name.
     * See https://www.kernel.org/doc/Documentation/networking/bonding.txt for
     * available modes.
     *
     * @returns bonding mode string, or NULL on error
     * @param mode bonding mode as a numeric value
     */
    function utils_bond_mode_int_to_string(mode: number): string;
    /**
     * Convert bonding mode from string representation to numeric value.
     * See https://www.kernel.org/doc/Documentation/networking/bonding.txt for
     * available modes.
     * The `mode` string can be either a descriptive name or a number (as string).
     *
     * @returns numeric bond mode, or -1 on error
     * @param mode bonding mode as string
     */
    function utils_bond_mode_string_to_int(mode: string): number;
    /**
     * Determines if a connection of type `virtual_type` can (in the
     * general case) work with connections of type `other_type`.
     *
     * If `virtual_type` is %NM_TYPE_SETTING_VLAN, then this checks if
     * `other_type` is a valid type for the parent of a VLAN.
     *
     * If `virtual_type` is a "controller" type (eg, %NM_TYPE_SETTING_BRIDGE),
     * then this checks if `other_type` is a valid type for a port of that
     * controller.
     *
     * Note that even if this returns %TRUE it is not guaranteed that
     * <emphasis>every</emphasis> connection of type `other_type` is
     * compatible with `virtual_type;` it may depend on the exact
     * configuration of the two connections, or on the capabilities of an
     * underlying device driver.
     *
     * @returns %TRUE or %FALSE
     * @param virtual_type a virtual connection type
     * @param other_type a connection type to test against `virtual_type`
     */
    function utils_check_virtual_device_compatibility(virtual_type: GObject.GType, other_type: GObject.GType): boolean;
    /**
     * This ensures that all NMSetting GTypes are created. For example,
     * after this call, g_type_from_name("NMSettingConnection") will work.
     *
     * This cannot fail and does nothing if the type already exists.
     */
    function utils_ensure_gtypes(): void;
    /**
     * Converts a string to the matching enum value.
     *
     * If the enum is a %G_TYPE_FLAGS the function returns the logical OR of values
     * matching the comma-separated tokens in the string; if an unknown token is found
     * the function returns %FALSE and stores a pointer to a newly allocated string
     * containing the unrecognized token in `err_token`.
     *
     * @returns %TRUE if the conversion was successful, %FALSE otherwise
     * @param type the %GType of the enum
     * @param str the input string
     */
    function utils_enum_from_str(type: GObject.GType, str: string): [boolean, number, string];
    /**
     * Returns the list of possible values for a given enum.
     *
     * @returns a NULL-terminated dynamically-allocated array of static strings
     * or %NULL on error
     * @param type the %GType of the enum
     * @param from the first element to be returned
     * @param to the last element to be returned
     */
    function utils_enum_get_values(type: GObject.GType, from: number, to: number): string[];
    /**
     * Converts an enum value to its string representation. If the enum is a
     * %G_TYPE_FLAGS the function returns a comma-separated list of matching values.
     * If the value has no corresponding string representation, it is converted
     * to a number. For enums it is converted to a decimal number, for flags
     * to an (unsigned) hex number.
     *
     * @returns a newly allocated string or %NULL
     * @param type the %GType of the enum
     * @param value the value to be translated
     */
    function utils_enum_to_str(type: GObject.GType, value: number): string;
    /**
     * This function does a quick printable character conversion of the SSID, simply
     * replacing embedded NULLs and non-printable characters with the hexadecimal
     * representation of that character.  Intended for debugging only, should not
     * be used for display of SSIDs.
     *
     * Warning: this function uses a static buffer. It is not thread-safe. Don't
     *   use this function.
     *
     * @returns pointer to the escaped SSID, which uses an internal static buffer
     * and will be overwritten by subsequent calls to this function
     * @param ssid pointer to a buffer containing the SSID data
     */
    function utils_escape_ssid(ssid: Uint8Array[] | string): string;
    /**
     * Tests if `filename` has a valid extension for an X.509 certificate file
     * (".cer", ".crt", ".der", or ".pem"), and contains a certificate in a format
     * recognized by NetworkManager.
     *
     * @returns %TRUE if the file is a certificate, %FALSE if it is not
     * @param filename name of the file to test
     */
    function utils_file_is_certificate(filename: string): boolean;
    /**
     * Tests if `filename` is a PKCS#<!-- -->12 file.
     *
     * @returns %TRUE if the file is PKCS#<!-- -->12, %FALSE if it is not
     * @param filename name of the file to test
     */
    function utils_file_is_pkcs12(filename: string): boolean;
    /**
     * Tests if `filename` has a valid extension for an X.509 private key file
     * (".der", ".key", ".pem", or ".p12"), and contains a private key in a format
     * recognized by NetworkManager.
     *
     * @returns %TRUE if the file is a private key, %FALSE if it is not
     * @param filename name of the file to test
     */
    function utils_file_is_private_key(filename: string): [boolean, boolean];
    /**
     * Searches for a `progname` file in a list of search `paths`.
     *
     * @returns the full path to the helper, if found, or %NULL if not found.
     *   The returned string is not owned by the caller, but later
     *   invocations of the function might overwrite it.
     * @param progname the helper program name, like "iptables"
     *   Must be a non-empty string, without path separator (/).
     * @param try_first a custom path to try first before searching.
     *   It is silently ignored if it is empty or not an absolute path.
     * @param paths a %NULL terminated list of search paths.
     *   Can be empty or %NULL, in which case only `try_first` is checked.
     * @param file_test_flags the flags passed to g_file_test() when searching
     *   for `progname`. Set it to 0 to skip the g_file_test().
     * @param predicate if given, pass the file name to this function
     *   for additional checks. This check is performed after the check for
     *   `file_test_flags`. You cannot omit both `file_test_flags` and `predicate`.
     */
    function utils_file_search_in_paths(
        progname: string,
        try_first: string | null,
        paths: string | null,
        file_test_flags: GLib.FileTest | null,
        predicate: UtilsFileSearchInPathsPredicate,
    ): string;
    /**
     * Format attributes to a string.
     *
     * @returns the string representing attributes, or %NULL
     *    in case there are no attributes
     * @param attributes a #GHashTable mapping attribute names to #GVariant values
     * @param attr_separator the attribute separator character
     * @param key_value_separator character separating key and values
     */
    function utils_format_variant_attributes(
        attributes: GLib.HashTable<string, GLib.Variant>,
        attr_separator: number,
        key_value_separator: number,
    ): string;
    /**
     * Gets current time in milliseconds of CLOCK_BOOTTIME.
     *
     * @returns time in milliseconds
     */
    function utils_get_timestamp_msec(): number;
    /**
     * Converts a hexadecimal string `hex` into an array of bytes.  The optional
     * separator ':' may be used between single or pairs of hexadecimal characters,
     * eg "00:11" or "0:1".  Any "0x" at the beginning of `hex` is ignored.  `hex`
     * may not start or end with ':'.
     *
     * @returns the converted bytes, or %NULL on error
     * @param hex a string of hexadecimal characters with optional ':' separators
     */
    function utils_hexstr2bin(hex: string): GLib.Bytes;
    /**
     * Parses `asc` and converts it to binary form in a #GByteArray. See
     * nm_utils_hwaddr_aton() if you don't want a #GByteArray.
     *
     * @returns a new #GByteArray, or %NULL if `asc` couldn't
     * be parsed
     * @param asc the ASCII representation of a hardware address
     * @param length the expected length in bytes of the result
     */
    function utils_hwaddr_atoba(asc: string, length: number): Uint8Array[];
    /**
     * Parses `asc` and converts it to binary form in `buffer`.
     * Bytes in `asc` can be separated by colons (:), or hyphens (-), but not mixed.
     *
     * @returns `buffer,` or %NULL if `asc` couldn't be parsed
     *   or would be shorter or longer than `length`.
     * @param asc the ASCII representation of a hardware address
     * @param buffer buffer to store the result into
     */
    function utils_hwaddr_aton(asc: string, buffer: Uint8Array[] | string): number;
    /**
     * Parses `asc` to see if it is a valid hardware address of the given
     * length, and if so, returns it in canonical form (uppercase, with
     * leading 0s as needed, and with colons rather than hyphens).
     *
     * @returns the canonicalized address if `asc` appears to
     *   be a valid hardware address of the indicated length, %NULL if not.
     * @param asc the ASCII representation of a hardware address
     * @param length the length of address that `asc` is expected to convert to
     *   (or -1 to accept any length up to %NM_UTILS_HWADDR_LEN_MAX)
     */
    function utils_hwaddr_canonical(asc: string, length: number): string;
    /**
     * Returns the length in octets of a hardware address of type `type`.
     *
     * Before 1.28, it was an error to call this function with any value other than
     * <literal>ARPHRD_ETHER</literal> or <literal>ARPHRD_INFINIBAND</literal>.
     *
     * @returns the length or zero if the type is unrecognized.
     * @param type the type of address; either <literal>ARPHRD_ETHER</literal> or
     * <literal>ARPHRD_INFINIBAND</literal>
     */
    function utils_hwaddr_len(type: number): number;
    /**
     * Generalized hardware address comparison function. Tests if `hwaddr1` and
     * `hwaddr2` "equal" (or more precisely, "equivalent"), with several advantages
     * over a simple memcmp():
     *
     *   1. If `hwaddr1`_len or `hwaddr2`_len is -1, then the corresponding address is
     *      assumed to be ASCII rather than binary, and will be converted to binary
     *      before being compared.
     *
     *   2. If `hwaddr1` or `hwaddr2` is %NULL, it is treated instead as though it was
     *      a zero-filled buffer `hwaddr1`_len or `hwaddr2`_len bytes long.
     *
     *   3. If `hwaddr1` and `hwaddr2` are InfiniBand hardware addresses (that is, if
     *      they are <literal>INFINIBAND_ALEN</literal> bytes long in binary form)
     *      then only the last 8 bytes are compared, since those are the only bytes
     *      that actually identify the hardware. (The other 12 bytes will change
     *      depending on the configuration of the InfiniBand fabric that the device
     *      is connected to.)
     *
     * If a passed-in ASCII hardware address cannot be parsed, or would parse to an
     * address larger than %NM_UTILS_HWADDR_LEN_MAX, then it will silently fail to
     * match. (This means that externally-provided address strings do not need to be
     * sanity-checked before comparing them against known good addresses; they are
     * guaranteed to not match if they are invalid.)
     *
     * @returns %TRUE if `hwaddr1` and `hwaddr2` are equivalent, %FALSE if they are
     *   different (or either of them is invalid).
     * @param _hwaddr1 pointer to a binary or ASCII hardware address, or %NULL
     * @param _hwaddr1_len size of `hwaddr1`, or -1 if `hwaddr1` is ASCII
     * @param _hwaddr2 pointer to a binary or ASCII hardware address, or %NULL
     * @param _hwaddr2_len size of `hwaddr2`, or -1 if `hwaddr2` is ASCII
     */
    function utils_hwaddr_matches(
        _hwaddr1: any | null,
        _hwaddr1_len: number,
        _hwaddr2: any | null,
        _hwaddr2_len: number,
    ): boolean;
    /**
     * Converts `addr` to textual form.
     *
     * @returns the textual form of `addr`
     * @param addr a binary hardware address
     */
    function utils_hwaddr_ntoa(addr: Uint8Array[] | string): string;
    /**
     * Parses `asc` to see if it is a valid hardware address of the given
     * length.
     *
     * @returns %TRUE if `asc` appears to be a valid hardware address
     *   of the indicated length, %FALSE if not.
     * @param asc the ASCII representation of a hardware address
     * @param length the length of address that `asc` is expected to convert to
     *   (or -1 to accept any length up to %NM_UTILS_HWADDR_LEN_MAX)
     */
    function utils_hwaddr_valid(asc: string, length: number): boolean;
    /**
     * Validate the network interface name.
     *
     * @returns %TRUE if interface name is valid, otherwise %FALSE is returned.
     *
     * Before 1.20, this function did not accept %NULL as `name` argument. If you
     *   want to run against older versions of libnm, don't pass %NULL.
     * @param name Name of interface
     */
    function utils_iface_valid_name(name?: string | null): boolean;
    /**
     * Utility function to convert a #GVariant of type 'aau' representing a list of
     * NetworkManager IPv4 addresses (which are tuples of address, prefix, and
     * gateway) into a #GPtrArray of #NMIPAddress objects. The "gateway" field of
     * the first address (if set) will be returned in `out_gateway;` the "gateway" fields
     * of the other addresses are ignored. Note that invalid addresses are discarded
     * but the valid addresses are still returned.
     *
     * Since 1.46, an empty list is returned if the variant type is not valid
     * (before it was checked as assertion)
     *
     * @returns a newly allocated
     *   #GPtrArray of #NMIPAddress objects
     * @param value a #GVariant of type 'aau'
     */
    function utils_ip4_addresses_from_variant(value: GLib.Variant): [IPAddress[], string];
    /**
     * Utility function to convert a #GPtrArray of #NMIPAddress objects representing
     * IPv4 addresses into a #GVariant of type 'aau' representing an array of
     * NetworkManager IPv4 addresses (which are tuples of address, prefix, and
     * gateway). The "gateway" field of the first address will get the value of
     * `gateway` (if non-%NULL). In all of the other addresses, that field will be 0.
     *
     * @returns a new floating #GVariant representing `addresses`.
     * @param addresses an array of #NMIPAddress objects
     * @param gateway the gateway IP address
     */
    function utils_ip4_addresses_to_variant(addresses: IPAddress[], gateway?: string | null): GLib.Variant;
    /**
     * Utility function to convert a #GVariant of type 'au' representing a list of
     * IPv4 addresses into an array of IP address strings.
     *
     * Since 1.46, an empty list is returned if the variant type is not valid
     * (before it was checked as assertion)
     *
     * @returns a %NULL-terminated array of IP address strings.
     * @param value a #GVariant of type 'au'
     */
    function utils_ip4_dns_from_variant(value: GLib.Variant): string;
    /**
     * Utility function to convert an array of IP address strings int a #GVariant of
     * type 'au' representing an array of IPv4 addresses.
     *
     * @returns a new floating #GVariant representing `dns`.
     * @param dns an array of IP address strings
     */
    function utils_ip4_dns_to_variant(dns: string): GLib.Variant;
    /**
     * When the Internet was originally set up, various ranges of IP addresses were
     * segmented into three network classes: A, B, and C.  This function will return
     * a prefix that is associated with the IP address specified defining where it
     * falls in the predefined classes.
     *
     * @returns the default class prefix for the given IP
     * @param ip an IPv4 address (in network byte order)
     */
    function utils_ip4_get_default_prefix(ip: number): number;
    function utils_ip4_netmask_to_prefix(netmask: number): number;
    function utils_ip4_prefix_to_netmask(prefix: number): number;
    /**
     * Utility function to convert a #GVariant of type 'aau' representing an array
     * of NetworkManager IPv4 routes (which are tuples of route, prefix, next hop,
     * and metric) into a #GPtrArray of #NMIPRoute objects. Note that invalid routes
     * are discarded but the valid routes are still returned.
     *
     * Since 1.46, an empty list is returned if the variant type is not valid
     * (before it was checked as assertion)
     *
     * @returns a newly allocated
     *   #GPtrArray of #NMIPRoute objects
     * @param value #GVariant of type 'aau'
     */
    function utils_ip4_routes_from_variant(value: GLib.Variant): IPRoute[];
    /**
     * Utility function to convert a #GPtrArray of #NMIPRoute objects representing
     * IPv4 routes into a #GVariant of type 'aau' representing an array of
     * NetworkManager IPv4 routes (which are tuples of route, prefix, next hop, and
     * metric).
     *
     * @returns a new floating #GVariant representing `routes`.
     * @param routes an array of #NMIP4Route objects
     */
    function utils_ip4_routes_to_variant(routes: IPRoute[]): GLib.Variant;
    /**
     * Utility function to convert a #GVariant of type 'a(ayuay)' representing a
     * list of NetworkManager IPv6 addresses (which are tuples of address, prefix,
     * and gateway) into a #GPtrArray of #NMIPAddress objects. The "gateway" field
     * of the first address (if set) will be returned in `out_gateway;` the "gateway"
     * fields of the other addresses are ignored. Note that invalid addresses are
     * discarded but the valid addresses are still returned.
     *
     * Since 1.46, an empty list is returned if the variant type is not valid
     * (before it was checked as assertion)
     *
     * @returns a newly allocated
     *   #GPtrArray of #NMIPAddress objects
     * @param value a #GVariant of type 'a(ayuay)'
     */
    function utils_ip6_addresses_from_variant(value: GLib.Variant): [IPAddress[], string];
    /**
     * Utility function to convert a #GPtrArray of #NMIPAddress objects representing
     * IPv6 addresses into a #GVariant of type 'a(ayuay)' representing an array of
     * NetworkManager IPv6 addresses (which are tuples of address, prefix, and
     * gateway).  The "gateway" field of the first address will get the value of
     * `gateway` (if non-%NULL). In all of the other addresses, that field will be
     * all 0s.
     *
     * @returns a new floating #GVariant representing `addresses`.
     * @param addresses an array of #NMIPAddress objects
     * @param gateway the gateway IP address
     */
    function utils_ip6_addresses_to_variant(addresses: IPAddress[], gateway?: string | null): GLib.Variant;
    /**
     * Utility function to convert a #GVariant of type 'aay' representing a list of
     * IPv6 addresses into an array of IP address strings. Each "ay" entry must be
     * a IPv6 address in binary form (16 bytes long). Invalid entries are silently
     * ignored.
     *
     * Since 1.46, an empty list is returned if the variant type is not valid
     * (before it was checked as assertion)
     *
     * @returns a %NULL-terminated array of IP address strings.
     * @param value a #GVariant of type 'aay'
     */
    function utils_ip6_dns_from_variant(value: GLib.Variant): string;
    /**
     * Utility function to convert an array of IP address strings int a #GVariant of
     * type 'aay' representing an array of IPv6 addresses.
     *
     * If a string cannot be parsed, it will be silently ignored.
     *
     * @returns a new floating #GVariant representing `dns`.
     * @param dns an array of IP address strings
     */
    function utils_ip6_dns_to_variant(dns: string): GLib.Variant;
    /**
     * Utility function to convert a #GVariant of type 'a(ayuayu)' representing an
     * array of NetworkManager IPv6 routes (which are tuples of route, prefix, next
     * hop, and metric) into a #GPtrArray of #NMIPRoute objects. Note that invalid
     * routes are ignored but the valid ones are still returned.
     *
     * Since 1.46, an empty list is returned if the variant type is not valid
     * (before it was checked as assertion)
     *
     * @returns a newly allocated
     *   #GPtrArray of #NMIPRoute objects
     * @param value #GVariant of type 'a(ayuayu)'
     */
    function utils_ip6_routes_from_variant(value: GLib.Variant): IPRoute[];
    /**
     * Utility function to convert a #GPtrArray of #NMIPRoute objects representing
     * IPv6 routes into a #GVariant of type 'a(ayuayu)' representing an array of
     * NetworkManager IPv6 routes (which are tuples of route, prefix, next hop, and
     * metric).
     *
     * @returns a new floating #GVariant representing `routes`.
     * @param routes an array of #NMIPRoute objects
     */
    function utils_ip6_routes_to_variant(routes: IPRoute[]): GLib.Variant;
    /**
     * Utility function to convert a #GVariant representing a list of new-style
     * NetworkManager IPv4 or IPv6 addresses (as described in the documentation for
     * nm_utils_ip_addresses_to_variant()) into a #GPtrArray of #NMIPAddress
     * objects. Note that invalid addresses are discarded but the valid addresses
     * are still returned.
     *
     * Since 1.46, an empty list is returned if the variant type is not valid
     * (before it was checked as assertion)
     *
     * @returns a newly allocated
     *   #GPtrArray of #NMIPAddress objects
     * @param value a #GVariant of type 'aa{sv}'
     * @param family an IP address family
     */
    function utils_ip_addresses_from_variant(value: GLib.Variant, family: number): IPAddress[];
    /**
     * Utility function to convert a #GPtrArray of #NMIPAddress objects representing
     * IPv4 or IPv6 addresses into a #GVariant of type 'aa{sv}' representing an
     * array of new-style NetworkManager IP addresses. All addresses will include
     * "address" (an IP address string), and "prefix" (a uint). Some addresses may
     * include additional attributes.
     *
     * @returns a new floating #GVariant representing `addresses`.
     * @param addresses an array of #NMIPAddress objects
     */
    function utils_ip_addresses_to_variant(addresses: IPAddress[]): GLib.Variant;
    /**
     * Utility function to convert a #GVariant representing a list of new-style
     * NetworkManager IPv4 or IPv6 addresses (as described in the documentation for
     * nm_utils_ip_routes_to_variant()) into a #GPtrArray of #NMIPRoute objects.
     * Invalid routes are discarded but the valid routes are still returned.
     *
     * Since 1.46, an empty list is returned if the variant type is not valid
     * (before it was checked as assertion)
     *
     * @returns a newly allocated
     *   #GPtrArray of #NMIPRoute objects
     * @param value a #GVariant of type 'aa{sv}'
     * @param family an IP address family
     */
    function utils_ip_routes_from_variant(value: GLib.Variant, family: number): IPRoute[];
    /**
     * Utility function to convert a #GPtrArray of #NMIPRoute objects representing
     * IPv4 or IPv6 routes into a #GVariant of type 'aa{sv}' representing an array
     * of new-style NetworkManager IP routes. All routes will include "dest" (an IP
     * address string), "prefix" (an uint) and optionally "next-hop" (an IP address
     * string) and "metric" (an uint). Some routes may include additional attributes.
     * Note that invalid routes are discarded and only a warning is emitted, but the
     * valid routes are still returned.
     *
     * @returns a new floating #GVariant representing `routes`.
     * @param routes an array of #NMIPRoute objects
     */
    function utils_ip_routes_to_variant(routes: IPRoute[]): GLib.Variant;
    /**
     * Checks if `ip` contains a valid IP address of the given family.
     *
     * @returns %TRUE or %FALSE
     * @param family <literal>AF_INET</literal> or <literal>AF_INET6</literal>, or
     *   <literal>AF_UNSPEC</literal> to accept either
     * @param ip an IP address
     */
    function utils_ipaddr_valid(family: number, ip: string): boolean;
    /**
     * Different manufacturers use different mechanisms for not broadcasting the
     * AP's SSID.  This function attempts to detect blank/empty SSIDs using a
     * number of known SSID-cloaking methods.
     *
     * @returns %TRUE if the SSID is "empty", %FALSE if it is not
     * @param ssid pointer to a buffer containing the SSID data
     */
    function utils_is_empty_ssid(ssid: Uint8Array[] | string): boolean;
    function utils_is_json_object(str: string): boolean;
    /**
     * Checks if `str` is a UUID
     *
     * @returns %TRUE if `str` is a UUID, %FALSE if not
     *
     * In older versions, nm_utils_is_uuid() did not accept %NULL as `str`
     * argument. Don't pass %NULL if you run against older versions of libnm.
     * @param str a string that might be a UUID
     */
    function utils_is_uuid(str?: string | null): boolean;
    /**
     * Validate the network interface name.
     *
     * This function is a 1:1 copy of the kernel's interface validation
     * function in net/core/dev.c.
     *
     * @returns %TRUE if interface name is valid, otherwise %FALSE is returned.
     *
     * Before 1.20, this function did not accept %NULL as `name` argument. If you
     *   want to run against older versions of libnm, don't pass %NULL.
     * @param name Name of interface
     */
    function utils_is_valid_iface_name(name?: string | null): boolean;
    /**
     * Parse attributes from a string.
     *
     * @returns a #GHashTable mapping
     * attribute names to #GVariant values. Warning: the variant are still floating
     * references, owned by the hash table. If you take a reference, ensure to sink
     * the one of the hash table first.
     * @param string the input string
     * @param attr_separator the attribute separator character
     * @param key_value_separator character separating key and values
     * @param ignore_unknown whether unknown attributes should be ignored
     * @param spec the attribute format specifiers
     */
    function utils_parse_variant_attributes(
        string: string,
        attr_separator: number,
        key_value_separator: number,
        ignore_unknown: boolean,
        spec: VariantAttributeSpec,
    ): GLib.HashTable<string, GLib.Variant>;
    /**
     * The only purpose of this function is to give access to g_print()
     * or g_printerr() from pygobject. libnm can do debug logging by
     * setting LIBNM_CLIENT_DEBUG and uses thereby g_printerr() or
     * g_print(). A plain "print()" function in python is not in sync
     * with these functions (it implements additional buffering). By
     * using nm_utils_print(), the same logging mechanisms can be used.
     *
     * LIBNM_CLIENT_DEBUG is a list of keywords separated by commas. The keyword
     * "trace" enables printing messages of the lowest up to the highest severity.
     * Likewise, the severities "debug", "warn" ("warning") and "error" are honored
     * in similar way. Setting the flags "ERROR" or "WARN" ("WARNING") implies that
     * respective levels are enabled, but also are ERROR messages printed with
     * g_critical() and WARN messages with g_warning(). Together with G_DEBUG="fatal-warnings"
     * or G_DEBUG="fatal-critical" this can be used to abort the program on errors.
     * Note that all &lt;error&gt; messages imply an unexpected data on the D-Bus API
     * (due to a bug). &lt;warn&gt; also implies unexepected data, but that can happen
     * when using different versions of libnm and daemon. For testing, it is
     * good to turn these into assertions.
     *
     * By default, messages are printed to stderr, unless LIBNM_CLIENT_DEBUG
     * contains "stdout" flag. Also, libnm honors LIBNM_CLIENT_DEBUG_FILE
     * environment. If this is set to a filename pattern (accepting "%%p" for the
     * process ID), then the debug log is written to that file instead of
     * stderr/stdout. With `output_mode` zero, the same location will be written.
     *
     * LIBNM_CLIENT_DEBUG_FILE is supported since 1.44. "ERROR", "WARN" and "WARNING"
     * are supported since 1.46.
     *
     * @param output_mode if 1 it uses g_print(). If 2, it uses g_printerr().
     *   If 0, it uses the same output as internal libnm debug logging
     *   does. That is, depending on LIBNM_CLIENT_DEBUG's "stdout" flag
     *   it uses g_print() or g_printerr() and if LIBNM_CLIENT_DEBUG_FILE is
     *   set, it writes the output to file instead
     * @param msg the message to print. The function does not append
     *   a trailing newline.
     */
    function utils_print(output_mode: number, msg: string): void;
    /**
     * Earlier versions of the Linux kernel added a NULL byte to the end of the
     * SSID to enable easy printing of the SSID on the console or in a terminal,
     * but this behavior was problematic (SSIDs are simply byte arrays, not strings)
     * and thus was changed.  This function compensates for that behavior at the
     * cost of some compatibility with odd SSIDs that may legitimately have trailing
     * NULLs, even though that is functionally pointless.
     *
     * @returns %TRUE if the SSIDs are the same, %FALSE if they are not
     * @param _ssid1 the first SSID to compare
     * @param _ssid2 the second SSID to compare
     * @param ignore_trailing_null %TRUE to ignore one trailing NULL byte
     */
    function utils_same_ssid(
        _ssid1: Uint8Array[] | string,
        _ssid2: Uint8Array[] | string,
        ignore_trailing_null: boolean,
    ): boolean;
    /**
     * Given a set of device capabilities, and a desired security type to check
     * against, determines whether the combination of device, desired security
     * type, and AP capabilities intersect.
     *
     * NOTE: this function cannot handle checking security for AP/Hotspot mode;
     * use nm_utils_ap_mode_security_valid() instead.
     *
     * @returns %TRUE if the device capabilities and AP capabilities intersect and are
     * compatible with the desired `type,` %FALSE if they are not
     * @param type the security type to check AP flags and device capabilities against,
     * e.g. #NMU_SEC_STATIC_WEP
     * @param wifi_caps bitfield of the capabilities of the specific Wi-Fi device, e.g.
     * #NM_WIFI_DEVICE_CAP_CIPHER_WEP40
     * @param have_ap whether the `ap_flags,` `ap_wpa,` and `ap_rsn` arguments are valid
     * @param adhoc whether the capabilities being tested are from an Ad-Hoc AP (IBSS)
     * @param ap_flags bitfield of AP capabilities, e.g. #NM_802_11_AP_FLAGS_PRIVACY
     * @param ap_wpa bitfield of AP capabilities derived from the AP's WPA beacon,
     * e.g. (#NM_802_11_AP_SEC_PAIR_TKIP | #NM_802_11_AP_SEC_KEY_MGMT_PSK)
     * @param ap_rsn bitfield of AP capabilities derived from the AP's RSN/WPA2 beacon,
     * e.g. (#NM_802_11_AP_SEC_PAIR_CCMP | #NM_802_11_AP_SEC_PAIR_TKIP)
     */
    function utils_security_valid(
        type: UtilsSecurityType | null,
        wifi_caps: DeviceWifiCapabilities | null,
        have_ap: boolean,
        adhoc: boolean,
        ap_flags: __80211ApFlags,
        ap_wpa: __80211ApSecurityFlags,
        ap_rsn: __80211ApSecurityFlags,
    ): boolean;
    /**
     * Converts a string to a SR-IOV virtual function object.
     *
     * @returns the virtual function object
     * @param str the input string
     */
    function utils_sriov_vf_from_str(str: string): SriovVF;
    /**
     * Converts a SR-IOV virtual function object to its string representation.
     *
     * @returns a newly allocated string or %NULL on error
     * @param vf the %NMSriovVF
     * @param omit_index if %TRUE, the VF index will be omitted from output string
     */
    function utils_sriov_vf_to_str(vf: SriovVF, omit_index: boolean): string;
    /**
     * Wi-Fi SSIDs are byte arrays, they are _not_ strings.  Thus, an SSID may
     * contain embedded NULLs and other unprintable characters.  Often it is
     * useful to print the SSID out for debugging purposes, but that should be the
     * _only_ use of this function.  Do not use this function for any persistent
     * storage of the SSID, since the printable SSID returned from this function
     * cannot be converted back into the real SSID of the access point.
     *
     * This function does almost everything humanly possible to convert the input
     * into a printable UTF-8 string, using roughly the following procedure:
     *
     * 1) if the input data is already UTF-8 safe, no conversion is performed
     * 2) attempts to get the current system language from the LANG environment
     *    variable, and depending on the language, uses a table of alternative
     *    encodings to try.  For example, if LANG=hu_HU, the table may first try
     *    the ISO-8859-2 encoding, and if that fails, try the Windows-1250 encoding.
     *    If all fallback encodings fail, replaces non-UTF-8 characters with '?'.
     * 3) If the system language was unable to be determined, falls back to the
     *    ISO-8859-1 encoding, then to the Windows-1251 encoding.
     * 4) If step 3 fails, replaces non-UTF-8 characters with '?'.
     *
     * Again, this function should be used for debugging and display purposes
     * _only_.
     *
     * @returns an allocated string containing a UTF-8
     * representation of the SSID, which must be freed by the caller using g_free().
     * Returns %NULL on errors.
     * @param ssid pointer to a buffer containing the SSID data
     */
    function utils_ssid_to_utf8(ssid: Uint8Array[] | string): string;
    /**
     * Parses the tc style string action representation of the queueing
     * discipline to a %NMTCAction instance. Supports a subset of the tc language.
     *
     * @returns the %NMTCAction or %NULL
     * @param str the string representation of a action
     */
    function utils_tc_action_from_str(str: string): TCAction;
    /**
     * Turns the %NMTCAction into a tc style string representation of the queueing
     * discipline.
     *
     * @returns formatted string or %NULL
     * @param action the %NMTCAction
     */
    function utils_tc_action_to_str(action: TCAction): string;
    /**
     * Parses the tc style string qdisc representation of the queueing
     * discipline to a %NMTCQdisc instance. Supports a subset of the tc language.
     *
     * @returns the %NMTCQdisc or %NULL
     * @param str the string representation of a qdisc
     */
    function utils_tc_qdisc_from_str(str: string): TCQdisc;
    /**
     * Turns the %NMTCQdisc into a tc style string representation of the queueing
     * discipline.
     *
     * @returns formatted string or %NULL
     * @param qdisc the %NMTCQdisc
     */
    function utils_tc_qdisc_to_str(qdisc: TCQdisc): string;
    /**
     * Parses the tc style string tfilter representation of the queueing
     * discipline to a %NMTCTfilter instance. Supports a subset of the tc language.
     *
     * @returns the %NMTCTfilter or %NULL
     * @param str the string representation of a tfilter
     */
    function utils_tc_tfilter_from_str(str: string): TCTfilter;
    /**
     * Turns the %NMTCTfilter into a tc style string representation of the queueing
     * discipline.
     *
     * @returns formatted string or %NULL
     * @param tfilter the %NMTCTfilter
     */
    function utils_tc_tfilter_to_str(tfilter: TCTfilter): string;
    function utils_uuid_generate(): string;
    function utils_version(): number;
    /**
     * Checks if `key` is a valid WEP key
     *
     * @returns %TRUE if `key` is a WEP key, %FALSE if not
     * @param key a string that might be a WEP key
     * @param wep_type the #NMWepKeyType type of the WEP key
     */
    function utils_wep_key_valid(key: string, wep_type: WepKeyType | null): boolean;
    /**
     * Utility function to return 2.4 GHz Wi-Fi frequencies (802.11bg band).
     *
     * @returns zero-terminated array of frequencies numbers (in MHz)
     */
    function utils_wifi_2ghz_freqs(): number;
    /**
     * Utility function to return 5 GHz Wi-Fi frequencies (802.11a band).
     *
     * @returns zero-terminated array of frequencies numbers (in MHz)
     */
    function utils_wifi_5ghz_freqs(): number;
    /**
     * Utility function to translate a Wi-Fi channel to its corresponding frequency.
     *
     * @returns the frequency represented by the channel of the band,
     *          or -1 when the freq is invalid, or 0 when the band
     *          is invalid
     * @param channel channel
     * @param band frequency band for wireless ("a" or "bg")
     */
    function utils_wifi_channel_to_freq(channel: number, band: string): number;
    /**
     * Utility function to find out next/previous Wi-Fi channel for a channel.
     *
     * @returns the next channel in the specified direction or 0
     * @param channel current channel
     * @param direction whether going downward (0 or less) or upward (1 or more)
     * @param band frequency band for wireless ("a" or "bg")
     */
    function utils_wifi_find_next_channel(channel: number, direction: number, band: string): number;
    /**
     * Utility function to translate a Wi-Fi frequency to its corresponding channel.
     *
     * @returns the channel represented by the frequency or 0
     * @param freq frequency
     */
    function utils_wifi_freq_to_channel(freq: number): number;
    /**
     * Utility function to verify Wi-Fi channel validity.
     *
     * @returns %TRUE or %FALSE
     * @param channel channel
     * @param band frequency band for wireless ("a" or "bg")
     */
    function utils_wifi_is_channel_valid(channel: number, band: string): boolean;
    /**
     * Converts `strength` into a 4-character-wide graphical representation of
     * strength suitable for printing to stdout.
     *
     * Previous versions used to take a guess at the terminal type and possibly
     * return a wide UTF-8 encoded string. Now it always returns a 7-bit
     * clean strings of one to 0 to 4 asterisks. Users that actually need
     * the functionality are encouraged to make their implementations instead.
     *
     * @returns the graphical representation of the access point strength
     * @param strength the access point strength, from 0 to 100
     */
    function utils_wifi_strength_bars(strength: number): string;
    /**
     * Checks if `psk` is a valid WPA PSK
     *
     * @returns %TRUE if `psk` is a WPA PSK, %FALSE if not
     * @param psk a string that might be a WPA PSK
     */
    function utils_wpa_psk_valid(psk: string): boolean;
    /**
     * Load the shared library `plugin_name` and create a new
     * #NMVpnEditorPlugin instance via the #NMVpnEditorPluginFactory
     * function.
     *
     * This is similar to nm_vpn_editor_plugin_load_from_file(), but
     * it does no validation of the plugin name, instead passes it directly
     * to dlopen(). If you have the full path to a plugin file,
     * nm_vpn_editor_plugin_load_from_file() is preferred.
     *
     * @returns a new plugin instance or %NULL on error.
     * @param plugin_name The name of the shared library to load.
     *  This path will be directly passed to dlopen() without
     *  further checks.
     * @param check_service if not-null, check that the loaded plugin advertises
     *  the given service.
     */
    function vpn_editor_plugin_load(plugin_name: string, check_service: string): VpnEditorPlugin;
    /**
     * Load the shared library `plugin_name` and create a new
     * #NMVpnEditorPlugin instance via the #NMVpnEditorPluginFactory
     * function.
     *
     * If `plugin_name` is not an absolute path name, it assumes the file
     * is in the plugin directory of NetworkManager. In any case, the call
     * will do certain checks on the file before passing it to dlopen.
     * A consequence for that is, that you cannot omit the ".so" suffix
     * as you could for nm_vpn_editor_plugin_load().
     *
     * @returns a new plugin instance or %NULL on error.
     * @param plugin_name The path or name of the shared library to load.
     *  The path must either be an absolute filename to an existing file.
     *  Alternatively, it can be the name (without path) of a library in the
     *  plugin directory of NetworkManager.
     * @param check_service if not-null, check that the loaded plugin advertises
     *  the given service.
     * @param check_owner if non-negative, check whether the file is owned
     *  by UID `check_owner` or by root. In this case also check that
     *  the file is not writable by anybody else.
     * @param check_file optional callback to validate the file prior to
     *   loading the shared library.
     */
    function vpn_editor_plugin_load_from_file(
        plugin_name: string,
        check_service: string,
        check_owner: number,
        check_file: UtilsCheckFilePredicate,
    ): VpnEditorPlugin;
    function vpn_plugin_error_quark(): GLib.Quark;
    interface KeyfileReadHandler {
        (
            keyfile: GLib.KeyFile,
            connection: Connection,
            handler_type: KeyfileHandlerType,
            handler_data: KeyfileHandlerData,
        ): boolean;
    }
    interface KeyfileWriteHandler {
        (
            connection: Connection,
            keyfile: GLib.KeyFile,
            handler_type: KeyfileHandlerType,
            handler_data: KeyfileHandlerData,
        ): boolean;
    }
    interface SecretAgentOldDeleteSecretsFunc {
        (agent: SecretAgentOld, connection: Connection, error: GLib.Error): void;
    }
    interface SecretAgentOldGetSecretsFunc {
        (agent: SecretAgentOld, connection: Connection, secrets: GLib.Variant, error: GLib.Error): void;
    }
    interface SecretAgentOldSaveSecretsFunc {
        (agent: SecretAgentOld, connection: Connection, error: GLib.Error): void;
    }
    interface SettingClearSecretsWithFlagsFn {
        (setting: Setting, secret: string, flags: SettingSecretFlags): boolean;
    }
    interface SettingValueIterFn {
        (setting: Setting, key: string, value: GObject.Value | any, flags: GObject.ParamFlags): void;
    }
    interface UtilsCheckFilePredicate {
        (filename: string, stat?: any | null): boolean;
    }
    interface UtilsFileSearchInPathsPredicate {
        (filename: string): boolean;
    }
    interface UtilsPredicateStr {
        (str: string): boolean;
    }
    interface VpnIterFunc {
        (key: string, value: string): void;
    }
    /**
     * 802.11 access point flags.
     */
    export namespace __80211ApFlags {
        export const $gtype: GObject.GType<__80211ApFlags>;
    }
    enum __80211ApFlags {
        /**
         * access point has no special capabilities
         */
        NONE,
        /**
         * access point requires authentication and
         * encryption (usually means WEP)
         */
        PRIVACY = 1,
        /**
         * access point supports some WPS method
         */
        WPS = 2,
        /**
         * access point supports push-button WPS
         */
        WPS_PBC = 4,
        /**
         * access point supports PIN-based WPS
         */
        WPS_PIN = 8,
    }
    /**
     * 802.11 access point security and authentication flags.  These flags describe
     * the current security requirements of an access point as determined from the
     * access point's beacon.
     */
    export namespace __80211ApSecurityFlags {
        export const $gtype: GObject.GType<__80211ApSecurityFlags>;
    }
    enum __80211ApSecurityFlags {
        /**
         * the access point has no special security requirements
         */
        NONE,
        /**
         * 40/64-bit WEP is supported for
         * pairwise/unicast encryption
         */
        'PAIR_WEP40' = 1,
        /**
         * 104/128-bit WEP is supported for
         * pairwise/unicast encryption
         */
        'PAIR_WEP104' = 2,
        /**
         * TKIP is supported for pairwise/unicast encryption
         */
        PAIR_TKIP = 4,
        /**
         * AES/CCMP is supported for pairwise/unicast encryption
         */
        PAIR_CCMP = 8,
        /**
         * 40/64-bit WEP is supported for group/broadcast
         * encryption
         */
        'GROUP_WEP40' = 16,
        /**
         * 104/128-bit WEP is supported for
         * group/broadcast encryption
         */
        'GROUP_WEP104' = 32,
        /**
         * TKIP is supported for group/broadcast encryption
         */
        GROUP_TKIP = 64,
        /**
         * AES/CCMP is supported for group/broadcast
         * encryption
         */
        GROUP_CCMP = 128,
        /**
         * WPA/RSN Pre-Shared Key encryption is
         * supported
         */
        KEY_MGMT_PSK = 256,
        /**
         * 802.1x authentication and key management
         * is supported
         */
        'KEY_MGMT_802_1X' = 512,
        /**
         * WPA/RSN Simultaneous Authentication of Equals is
         * supported
         */
        KEY_MGMT_SAE = 1024,
        /**
         * WPA/RSN Opportunistic Wireless Encryption is
         * supported
         */
        KEY_MGMT_OWE = 2048,
        /**
         * WPA/RSN Opportunistic Wireless Encryption
         * transition mode is supported. Since: 1.26.
         */
        KEY_MGMT_OWE_TM = 4096,
        /**
         * WPA3 Enterprise Suite-B 192 bit mode
         * is supported. Since: 1.30.
         */
        'KEY_MGMT_EAP_SUITE_B_192' = 8192,
    }
    /**
     * Flags describing the current activation state.
     */
    export namespace ActivationStateFlags {
        export const $gtype: GObject.GType<ActivationStateFlags>;
    }
    enum ActivationStateFlags {
        /**
         * an alias for numeric zero, no flags set.
         */
        NONE,
        /**
         * the device is a controller.
         */
        IS_CONTROLLER = 1,
        /**
         * the device is a port.
         */
        IS_PORT = 2,
        /**
         * layer2 is activated and ready.
         */
        'LAYER2_READY' = 4,
        /**
         * IPv4 setting is completed.
         */
        'IP4_READY' = 8,
        /**
         * IPv6 setting is completed.
         */
        'IP6_READY' = 16,
        /**
         * The controller has any port devices attached.
         *   This only makes sense if the device is a controller.
         */
        CONTROLLER_HAS_PORTS = 32,
        /**
         * the lifetime
         *   of the activation is bound to the visibility of the connection profile,
         *   which in turn depends on "connection.permissions" and whether a session
         *   for the user exists. Since: 1.16.
         */
        LIFETIME_BOUND_TO_PROFILE_VISIBILITY = 64,
        /**
         * the active connection was generated to
         *  represent an external configuration of a networking device. Since: 1.26.
         */
        EXTERNAL = 128,
    }
    /**
     * #NMBluetoothCapabilities values indicate the usable capabilities of a
     * Bluetooth device.
     */
    export namespace BluetoothCapabilities {
        export const $gtype: GObject.GType<BluetoothCapabilities>;
    }
    enum BluetoothCapabilities {
        /**
         * device has no usable capabilities
         */
        NONE,
        /**
         * device provides Dial-Up Networking capability
         */
        DUN = 1,
        /**
         * device provides Network Access Point capability
         */
        NAP = 2,
    }
    /**
     * The flags for CheckpointCreate call
     */
    export namespace CheckpointCreateFlags {
        export const $gtype: GObject.GType<CheckpointCreateFlags>;
    }
    enum CheckpointCreateFlags {
        /**
         * no flags
         */
        NONE,
        /**
         * when creating
         *   a new checkpoint, destroy all existing ones.
         */
        DESTROY_ALL = 1,
        /**
         * upon rollback,
         *   delete any new connection added after the checkpoint. Since: 1.6.
         */
        DELETE_NEW_CONNECTIONS = 2,
        /**
         * upon rollback,
         *   disconnect any new device appeared after the checkpoint. Since: 1.6.
         */
        DISCONNECT_NEW_DEVICES = 4,
        /**
         * by default, creating
         *   a checkpoint fails if there are already existing checkpoints that
         *   reference the same devices. With this flag, creation of such
         *   checkpoints is allowed, however, if an older checkpoint
         *   that references overlapping devices gets rolled back, it will
         *   automatically destroy this checkpoint during rollback. This
         *   allows to create several overlapping checkpoints in parallel,
         *   and rollback to them at will. With the special case that
         *   rolling back to an older checkpoint will invalidate all
         *   overlapping younger checkpoints. This opts-in that the
         *   checkpoint can be automatically destroyed by the rollback
         *   of an older checkpoint. Since: 1.12.
         */
        ALLOW_OVERLAPPING = 8,
        /**
         * during rollback,
         *   by default externally added ports attached to bridge devices are preserved.
         *   With this flag, the rollback detaches all external ports.
         *   This only has an effect for bridge ports. Before 1.38, this was the default
         *   behavior. Since: 1.38.
         */
        NO_PRESERVE_EXTERNAL_PORTS = 16,
        /**
         * during rollback,
         *   by default changes to global DNS via D-BUS interface are preserved.
         *   With this flag, the rollback reverts the global DNS changes made via D-Bus
         *   interface. Global DNS defined in [global-dns] section of
         *   NetworkManager.conf is not impacted by this flag. Since: 1.48.
         */
        TRACK_INTERNAL_GLOBAL_DNS = 32,
    }
    export namespace ClientInstanceFlags {
        export const $gtype: GObject.GType<ClientInstanceFlags>;
    }
    enum ClientInstanceFlags {
        /**
         * special value to indicate no flags.
         */
        NONE,
        /**
         * by default, NMClient
         *   will fetch the permissions via "GetPermissions" and refetch them when
         *   "CheckPermissions" signal gets received. By setting this flag, this behavior
         *   can be disabled. You can toggle this flag to enable and disable automatic
         *   fetching of the permissions. Watch also nm_client_get_permissions_state()
         *   to know whether the permissions are up to date.
         */
        NO_AUTO_FETCH_PERMISSIONS = 1,
        /**
         * as #NMClient is an GInitable
         *   and GAsyncInitable, nm_client_get_instance_flags() returns this flag
         *   once initialization completed with success. This flag cannot be set
         *   as NM_CLIENT_INSTANCE_FLAGS property. Since: 1.42.
         */
        INITIALIZED_GOOD = 2,
        /**
         * like `NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_GOOD`
         *   indicates that the instance completed initialization with failure. In that
         *   case the instance is unusable. Since: 1.42.
         */
        INITIALIZED_BAD = 4,
    }
    /**
     * These flags determine which properties are serialized when calling
     * nm_connection_to_dbus().
     */
    export namespace ConnectionSerializationFlags {
        export const $gtype: GObject.GType<ConnectionSerializationFlags>;
    }
    enum ConnectionSerializationFlags {
        /**
         * serialize all properties (including secrets)
         */
        ALL,
        /**
         * serialize properties that are
         *   not secrets. Since 1.32.
         */
        WITH_NON_SECRET = 1,
        /**
         * this is a deprecated alias for
         *   `NM_CONNECTION_SERIALIZE_WITH_NON_SECRET`.
         */
        NO_SECRETS = 1,
        /**
         * serialize all secrets. This flag is
         *   ignored if any of `NM_CONNECTION_SERIALIZE_WITH_SECRETS_AGENT_OWNED,`
         *   `NM_CONNECTION_SERIALIZE_WITH_SECRETS_SYSTEM_OWNED` or
         *   `NM_CONNECTION_SERIALIZE_WITH_SECRETS_NOT_SAVED` is set. Since 1.32.
         */
        WITH_SECRETS = 2,
        /**
         * a deprecated alias for
         *   `NM_CONNECTION_SERIALIZE_WITH_SECRETS`.
         */
        ONLY_SECRETS = 2,
        /**
         * serialize agent-owned
         *   secrets. Since: 1.20.
         */
        WITH_SECRETS_AGENT_OWNED = 4,
        /**
         * serialize system-owned
         *   secrets. Since: 1.32.
         */
        WITH_SECRETS_SYSTEM_OWNED = 8,
        /**
         * serialize secrets that
         *   are marked as never saved. Since: 1.32.
         */
        WITH_SECRETS_NOT_SAVED = 16,
    }
    /**
     * General device capability flags.
     */
    export namespace DeviceCapabilities {
        export const $gtype: GObject.GType<DeviceCapabilities>;
    }
    enum DeviceCapabilities {
        /**
         * device has no special capabilities
         */
        NONE,
        /**
         * NetworkManager supports this device
         */
        NM_SUPPORTED = 1,
        /**
         * this device can indicate carrier status
         */
        CARRIER_DETECT = 2,
        /**
         * this device is a software device
         */
        IS_SOFTWARE = 4,
        /**
         * this device supports single-root I/O virtualization
         */
        SRIOV = 8,
    }
    /**
     * Flags for a network interface.
     */
    export namespace DeviceInterfaceFlags {
        export const $gtype: GObject.GType<DeviceInterfaceFlags>;
    }
    enum DeviceInterfaceFlags {
        /**
         * the interface is enabled from the
         *   administrative point of view. Corresponds to kernel IFF_UP.
         */
        UP = 1,
        /**
         * the physical link is up. Corresponds
         *   to kernel IFF_LOWER_UP.
         */
        LOWER_UP = 2,
        /**
         * receive all packets. Corresponds to
         *   kernel IFF_PROMISC. Since: 1.32.
         */
        PROMISC = 4,
        /**
         * the interface has carrier. In most
         *   cases this is equal to the value of `NM_DEVICE_INTERFACE_FLAG_LOWER_UP`.
         *   However some devices have a non-standard carrier detection mechanism.
         */
        CARRIER = 65536,
        /**
         * the flag to indicate device
         *   LLDP status. Since: 1.32.
         */
        LLDP_CLIENT_ENABLED = 131072,
    }
    /**
     * #NMDeviceModemCapabilities values indicate the generic radio access
     * technology families a modem device supports.  For more information on the
     * specific access technologies the device supports use the ModemManager D-Bus
     * API.
     */
    export namespace DeviceModemCapabilities {
        export const $gtype: GObject.GType<DeviceModemCapabilities>;
    }
    enum DeviceModemCapabilities {
        /**
         * modem has no usable capabilities
         */
        NONE,
        /**
         * modem uses the analog wired telephone
         * network and is not a wireless/cellular device
         */
        POTS = 1,
        /**
         * modem supports at least one of CDMA
         * 1xRTT, EVDO revision 0, EVDO revision A, or EVDO revision B
         */
        CDMA_EVDO = 2,
        /**
         * modem supports at least one of GSM,
         * GPRS, EDGE, UMTS, HSDPA, HSUPA, or HSPA+ packet switched data capability
         */
        GSM_UMTS = 4,
        /**
         * modem has LTE data capability
         */
        LTE = 8,
        /**
         * modem has 5GNR data capability. Since: 1.36.
         */
        '5GNR' = 64,
    }
    /**
     * Flags for the Reapply() D-Bus call of a device and
     * nm_device_reapply_async().
     */
    export namespace DeviceReapplyFlags {
        export const $gtype: GObject.GType<DeviceReapplyFlags>;
    }
    enum DeviceReapplyFlags {
        /**
         * no flag set.
         */
        NONE,
        /**
         * during reapply,
         *   preserve external IP addresses and routes.
         */
        PRESERVE_EXTERNAL_IP = 1,
    }
    /**
     * 802.11 specific device encryption and authentication capabilities.
     */
    export namespace DeviceWifiCapabilities {
        export const $gtype: GObject.GType<DeviceWifiCapabilities>;
    }
    enum DeviceWifiCapabilities {
        /**
         * device has no encryption/authentication capabilities
         */
        NONE,
        /**
         * device supports 40/64-bit WEP encryption
         */
        'CIPHER_WEP40' = 1,
        /**
         * device supports 104/128-bit WEP encryption
         */
        'CIPHER_WEP104' = 2,
        /**
         * device supports TKIP encryption
         */
        CIPHER_TKIP = 4,
        /**
         * device supports AES/CCMP encryption
         */
        CIPHER_CCMP = 8,
        /**
         * device supports WPA1 authentication
         */
        WPA = 16,
        /**
         * device supports WPA2/RSN authentication
         */
        RSN = 32,
        /**
         * device supports Access Point mode
         */
        AP = 64,
        /**
         * device supports Ad-Hoc mode
         */
        ADHOC = 128,
        /**
         * device reports frequency capabilities
         */
        FREQ_VALID = 256,
        /**
         * device supports 2.4GHz frequencies
         */
        'FREQ_2GHZ' = 512,
        /**
         * device supports 5GHz frequencies
         */
        'FREQ_5GHZ' = 1024,
        /**
         * device supports 6GHz frequencies. Since: 1.46.
         */
        'FREQ_6GHZ' = 2048,
        /**
         * device supports acting as a mesh point. Since: 1.20.
         */
        MESH = 4096,
        /**
         * device supports WPA2/RSN in an IBSS network. Since: 1.22.
         */
        IBSS_RSN = 8192,
    }
    /**
     * #NMDhcpHostnameFlags describe flags related to the DHCP hostname and
     * FQDN.
     */
    export namespace DhcpHostnameFlags {
        export const $gtype: GObject.GType<DhcpHostnameFlags>;
    }
    enum DhcpHostnameFlags {
        /**
         * no flag set. The default value from
         *   Networkmanager global configuration is used. If such value is unset
         *   or still zero, the DHCP request will use standard FQDN flags, i.e.
         *   %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE and
         *   %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED for IPv4 and
         *   %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE for IPv6.
         */
        NONE,
        /**
         * whether the server should
         *   do the A RR (FQDN-to-address) DNS updates.
         */
        FQDN_SERV_UPDATE = 1,
        /**
         * if set, the FQDN is encoded
         *   using canonical wire format. Otherwise it uses the deprecated
         *   ASCII encoding. This flag is allowed only for DHCPv4.
         */
        FQDN_ENCODED = 2,
        /**
         * when not set, request the
         *   server to perform updates (the PTR RR and possibly the A RR
         *   based on the %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE flag). If
         *   this is set, the %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE flag
         *   should be cleared.
         */
        FQDN_NO_UPDATE = 4,
        /**
         * when set, no FQDN flags are
         *   sent in the DHCP FQDN option. When cleared and all other FQDN
         *   flags are zero, standard FQDN flags are sent. This flag is
         *   incompatible with any other FQDN flag.
         */
        FQDN_CLEAR_FLAGS = 8,
    }
    /**
     * Compare flags for nm_ip_address_cmp_full().
     */
    export namespace IPAddressCmpFlags {
        export const $gtype: GObject.GType<IPAddressCmpFlags>;
    }
    enum IPAddressCmpFlags {
        /**
         * no flags.
         */
        NONE,
        /**
         * when comparing two addresses,
         *   also consider their attributes. Warning: note that attributes are GVariants
         *   and they don't have a total order. In other words, if the address differs only
         *   by their attributes, the returned compare order is not total. In that case,
         *   the return value merely indicates equality (zero) or inequality.
         */
        WITH_ATTRS = 1,
    }
    export namespace IPRoutingRuleAsStringFlags {
        export const $gtype: GObject.GType<IPRoutingRuleAsStringFlags>;
    }
    enum IPRoutingRuleAsStringFlags {
        /**
         * no flags selected.
         */
        NONE,
        /**
         * whether to allow parsing
         *   IPv4 addresses.
         */
        AF_INET = 1,
        /**
         * whether to allow parsing
         *   IPv6 addresses. If both `NM_IP_ROUTING_RULE_AS_STRING_FLAGS_AF_INET` and
         *   `NM_IP_ROUTING_RULE_AS_STRING_FLAGS_AF_INET6` are unset, it's the same
         *   as setting them both.
         */
        'AF_INET6' = 2,
        /**
         * if set, ensure that the
         *   rule verfies or fail.
         */
        VALIDATE = 4,
    }
    /**
     * IP tunnel flags.
     */
    export namespace IPTunnelFlags {
        export const $gtype: GObject.GType<IPTunnelFlags>;
    }
    enum IPTunnelFlags {
        /**
         * no flag
         */
        NONE,
        /**
         * don't add encapsulation limit
         *     if one isn't present in inner packet
         */
        'IP6_IGN_ENCAP_LIMIT' = 1,
        /**
         * copy the traffic class field
         *     from the inner packet
         */
        'IP6_USE_ORIG_TCLASS' = 2,
        /**
         * copy the flowlabel from the
         *     inner packet
         */
        'IP6_USE_ORIG_FLOWLABEL' = 4,
        /**
         * used for Mobile IPv6
         */
        'IP6_MIP6_DEV' = 8,
        /**
         * copy DSCP from the outer packet
         */
        'IP6_RCV_DSCP_COPY' = 16,
        /**
         * copy fwmark from inner packet
         */
        'IP6_USE_ORIG_FWMARK' = 32,
    }
    /**
     * Flags for customizing nm_keyfile_read() and nm_keyfile_write().
     *
     * Currently no flags are implemented.
     */
    export namespace KeyfileHandlerFlags {
        export const $gtype: GObject.GType<KeyfileHandlerFlags>;
    }
    enum KeyfileHandlerFlags {
        /**
         * no flags set.
         */
        NONE,
    }
    /**
     * Flags for the manager Reload() call.
     */
    export namespace ManagerReloadFlags {
        export const $gtype: GObject.GType<ManagerReloadFlags>;
    }
    enum ManagerReloadFlags {
        /**
         * reload the NetworkManager.conf configuration
         *   from disk. Note that this does not include connections, which can be
         *   reloaded via Setting's ReloadConnections().
         */
        CONF = 1,
        /**
         * update DNS configuration, which usually
         *   involves writing /etc/resolv.conf anew.
         */
        DNS_RC = 2,
        /**
         * means to restart the DNS plugin. This
         *   is for example useful when using dnsmasq plugin, which uses additional
         *   configuration in /etc/NetworkManager/dnsmasq.d. If you edit those files,
         *   you can restart the DNS plugin. This action shortly interrupts name
         *   resolution.
         */
        DNS_FULL = 4,
    }
    export namespace MptcpFlags {
        export const $gtype: GObject.GType<MptcpFlags>;
    }
    enum MptcpFlags {
        /**
         * The default, meaning that no MPTCP flags are set.
         */
        NONE,
        /**
         * don't configure MPTCP endpoints on the device.
         */
        DISABLED = 1,
        /**
         * MPTCP is enabled and endpoints will be configured.
         *   This flag is implied if any of the other flags indicate that
         *   MPTCP is enabled and therefore in most cases unnecessary.
         *   Note that if "/proc/sys/net/mptcp/enabled" sysctl is disabled, MPTCP
         *   handling is disabled despite this flag. This can be overruled with the
         *   "also-without-sysctl" flag.
         *   Note that by default interfaces that don't have a default route are
         *   excluded from having MPTCP endpoints configured. This can be overruled
         *   with the "also-without-default-route" and this affects endpoints
         *   per address family.
         */
        ENABLED = 2,
        /**
         * even if MPTCP handling is enabled
         *   via the "enabled" flag, it is ignored unless "/proc/sys/net/mptcp/enabled"
         *   is on. With this flag, MPTCP endpoints will be configured regardless
         *   of the sysctl setting.
         */
        ALSO_WITHOUT_SYSCTL = 4,
        /**
         * even if MPTCP handling is enabled
         *   via the "enabled" flag, it is ignored per-address family unless NetworkManager
         *   configures a default route. With this flag, NetworkManager will also configure
         *   MPTCP endpoints if there is no default route. This takes effect per-address
         *   family.
         */
        ALSO_WITHOUT_DEFAULT_ROUTE = 8,
        /**
         * Flag for the MPTCP endpoint. The endpoint will be
         *   announced/signaled to each peer via an MPTCP ADD_ADDR sub-option.
         */
        SIGNAL = 16,
        /**
         * Flag for the MPTCP endpoint. If additional subflow creation
         *   is allowed by the MPTCP limits, the MPTCP path manager will try to create an
         *   additional subflow using this endpoint as the source address after the MPTCP connection
         *   is established.
         */
        SUBFLOW = 32,
        /**
         * Flag for the MPTCP endpoint. If this is a subflow endpoint, the
         *   subflows created using this endpoint will have the backup flag set during the connection
         *   process. This flag instructs the peer to only send data on a given subflow when all
         *   non-backup subflows are unavailable. This does not affect outgoing data,
         *   where subflow priority is determined by the backup/non-backup flag received
         *   from the peer
         */
        BACKUP = 64,
        /**
         * Flag for the MPTCP endpoint. If this is a subflow endpoint and additional
         *   subflow creation is allowed by the MPTCP limits, the MPTCP path manager will try to create an
         *   additional subflow for each known peer address, using this endpoint as the source address.
         *   This will occur after the MPTCP connection is established. If the peer did not announce
         *   any additional addresses using the MPTCP ADD_ADDR sub-option, this will behave the same
         *   as a plain subflow endpoint. When the peer does announce addresses, each received ADD_ADDR
         *   sub-option will trigger creation of an additional subflow to generate a full mesh topology.
         */
        FULLMESH = 128,
    }
    /**
     * Flags related to radio interfaces.
     */
    export namespace RadioFlags {
        export const $gtype: GObject.GType<RadioFlags>;
    }
    enum RadioFlags {
        /**
         * an alias for numeric zero, no flags set.
         */
        NONE,
        /**
         * A Wireless LAN device or rfkill switch
         *   is detected in the system.
         */
        WLAN_AVAILABLE = 1,
        /**
         * A Wireless WAN device or rfkill switch
         *   is detected in the system.
         */
        WWAN_AVAILABLE = 2,
    }
    /**
     * #NMSecretAgentCapabilities indicate various capabilities of the agent.
     */
    export namespace SecretAgentCapabilities {
        export const $gtype: GObject.GType<SecretAgentCapabilities>;
    }
    enum SecretAgentCapabilities {
        /**
         * the agent supports no special capabilities
         */
        NONE,
        /**
         * the agent supports passing hints to
         * VPN plugin authentication dialogs.
         */
        VPN_HINTS = 1,
        /**
         * bounds checking value; should not be used.
         */
        LAST = 1,
    }
    /**
     * #NMSecretAgentGetSecretsFlags values modify the behavior of a GetSecrets request.
     */
    export namespace SecretAgentGetSecretsFlags {
        export const $gtype: GObject.GType<SecretAgentGetSecretsFlags>;
    }
    enum SecretAgentGetSecretsFlags {
        /**
         * no special behavior; by default no
         *   user interaction is allowed and requests for secrets are fulfilled from
         *   persistent storage, or if no secrets are available an error is returned.
         */
        NONE,
        /**
         * allows the request to
         *   interact with the user, possibly prompting via UI for secrets if any are
         *   required, or if none are found in persistent storage.
         */
        ALLOW_INTERACTION = 1,
        /**
         * explicitly prompt for new
         *   secrets from the user.  This flag signals that NetworkManager thinks any
         *   existing secrets are invalid or wrong.  This flag implies that interaction
         *   is allowed.
         */
        REQUEST_NEW = 2,
        /**
         * set if the request was
         *   initiated by user-requested action via the D-Bus interface, as opposed to
         *   automatically initiated by NetworkManager in response to (for example) scan
         *   results or carrier changes.
         */
        USER_REQUESTED = 4,
        /**
         * indicates that WPS enrollment
         *   is active with PBC method. The agent may suggest that the user pushes a button
         *   on the router instead of supplying a PSK.
         */
        WPS_PBC_ACTIVE = 8,
        /**
         * Internal flag, not part of
         *   the D-Bus API.
         */
        ONLY_SYSTEM = 2147483648,
        /**
         * Internal flag, not part of
         *   the D-Bus API.
         */
        NO_ERRORS = 1073741824,
    }
    /**
     * #NMSetting8021xAuthFlags values indicate which authentication settings
     * should be used.
     *
     * Before 1.22, this was wrongly marked as a enum and not as a flags
     * type.
     */
    export namespace Setting8021xAuthFlags {
        export const $gtype: GObject.GType<Setting8021xAuthFlags>;
    }
    enum Setting8021xAuthFlags {
        /**
         * No flags
         */
        NONE,
        /**
         * Disable TLSv1.0
         */
        'TLS_1_0_DISABLE' = 1,
        /**
         * Disable TLSv1.1
         */
        'TLS_1_1_DISABLE' = 2,
        /**
         * Disable TLSv1.2
         */
        'TLS_1_2_DISABLE' = 4,
        /**
         * Disable TLS time checks. Since 1.42.
         */
        TLS_DISABLE_TIME_CHECKS = 8,
        /**
         * Disable TLSv1.3. Since 1.42.
         */
        'TLS_1_3_DISABLE' = 16,
        /**
         * Enable TLSv1.0. Since 1.42.
         */
        'TLS_1_0_ENABLE' = 32,
        /**
         * Enable TLSv1.1. Since 1.42.
         */
        'TLS_1_1_ENABLE' = 64,
        /**
         * Enable TLSv1.2. Since 1.42.
         */
        'TLS_1_2_ENABLE' = 128,
        /**
         * Enable TLSv1.3. Since 1.42.
         */
        'TLS_1_3_ENABLE' = 256,
        /**
         * All supported flags
         */
        ALL = 511,
    }
    /**
     * DCB feature flags.
     */
    export namespace SettingDcbFlags {
        export const $gtype: GObject.GType<SettingDcbFlags>;
    }
    enum SettingDcbFlags {
        /**
         * no flag
         */
        NONE,
        /**
         * the feature is enabled
         */
        ENABLE = 1,
        /**
         * the feature is advertised
         */
        ADVERTISE = 2,
        /**
         * the feature is willing to change based on
         * peer configuration advertisements
         */
        WILLING = 4,
    }
    /**
     * These flags indicate specific behavior related to handling of a secret.  Each
     * secret has a corresponding set of these flags which indicate how the secret
     * is to be stored and/or requested when it is needed.
     */
    export namespace SettingSecretFlags {
        export const $gtype: GObject.GType<SettingSecretFlags>;
    }
    enum SettingSecretFlags {
        /**
         * the system is responsible for providing and
         * storing this secret (default)
         */
        NONE,
        /**
         * a user secret agent is responsible
         * for providing and storing this secret; when it is required agents will be
         * asked to retrieve it
         */
        AGENT_OWNED = 1,
        /**
         * this secret should not be saved, but
         * should be requested from the user each time it is needed
         */
        NOT_SAVED = 2,
        /**
         * in situations where it cannot be
         * automatically determined that the secret is required (some VPNs and PPP
         * providers don't require all secrets) this flag indicates that the specific
         * secret is not required
         */
        NOT_REQUIRED = 4,
    }
    /**
     * Options for #NMSettingWired:wake-on-lan. Note that not all options
     * are supported by all devices.
     */
    export namespace SettingWiredWakeOnLan {
        export const $gtype: GObject.GType<SettingWiredWakeOnLan>;
    }
    enum SettingWiredWakeOnLan {
        /**
         * Wake on PHY activity
         */
        PHY = 2,
        /**
         * Wake on unicast messages
         */
        UNICAST = 4,
        /**
         * Wake on multicast messages
         */
        MULTICAST = 8,
        /**
         * Wake on broadcast messages
         */
        BROADCAST = 16,
        /**
         * Wake on ARP
         */
        ARP = 32,
        /**
         * Wake on magic packet
         */
        MAGIC = 64,
        /**
         * Use the default value
         */
        DEFAULT = 1,
        /**
         * Don't change configured settings
         */
        IGNORE = 32768,
    }
    /**
     * Configure the use of WPS by a connection while it activates.
     *
     * Note: prior to 1.16, this was a GEnum type instead of a GFlags type
     * although, with the same numeric values.
     */
    export namespace SettingWirelessSecurityWpsMethod {
        export const $gtype: GObject.GType<SettingWirelessSecurityWpsMethod>;
    }
    enum SettingWirelessSecurityWpsMethod {
        /**
         * Attempt whichever method AP supports
         */
        DEFAULT,
        /**
         * WPS can not be used.
         */
        DISABLED = 1,
        /**
         * Use WPS, any method
         */
        AUTO = 2,
        /**
         * use WPS push-button method
         */
        PBC = 4,
        /**
         * use PIN method
         */
        PIN = 8,
    }
    /**
     * Options for #NMSettingWireless:wake-on-wlan. Note that not all options
     * are supported by all devices.
     */
    export namespace SettingWirelessWakeOnWLan {
        export const $gtype: GObject.GType<SettingWirelessWakeOnWLan>;
    }
    enum SettingWirelessWakeOnWLan {
        /**
         * Wake on any activity
         */
        ANY = 2,
        /**
         * Wake on disconnect
         */
        DISCONNECT = 4,
        /**
         * Wake on magic packet
         */
        MAGIC = 8,
        /**
         * Wake on GTK rekey failure
         */
        GTK_REKEY_FAILURE = 16,
        /**
         * Wake on EAP identity request
         */
        EAP_IDENTITY_REQUEST = 32,
        /**
         * Wake on 4way handshake
         */
        '4WAY_HANDSHAKE' = 64,
        /**
         * Wake on rfkill release
         */
        RFKILL_RELEASE = 128,
        TCP = 256,
        /**
         * Wake on all events. This does not
         *   include the exclusive flags `NM_SETTING_WIRELESS_WAKE_ON_WLAN_DEFAULT` or
         *   `NM_SETTING_WIRELESS_WAKE_ON_WLAN_IGNORE`.
         */
        ALL = 510,
        /**
         * Use the default value
         */
        DEFAULT = 1,
        /**
         * Don't change configured settings
         */
        IGNORE = 32768,
    }
    /**
     * Numeric flags for the "flags" argument of AddConnection2() D-Bus API.
     */
    export namespace SettingsAddConnection2Flags {
        export const $gtype: GObject.GType<SettingsAddConnection2Flags>;
    }
    enum SettingsAddConnection2Flags {
        /**
         * an alias for numeric zero, no flags set.
         */
        NONE,
        /**
         * to persist the connection to disk.
         */
        TO_DISK = 1,
        /**
         * to make the connection in-memory only.
         */
        IN_MEMORY = 2,
        /**
         * usually, when the connection
         *   has autoconnect enabled and gets added, it becomes eligible to autoconnect
         *   right away. Setting this flag, disables autoconnect until the connection
         *   is manually activated.
         */
        BLOCK_AUTOCONNECT = 32,
    }
    /**
     * Flags describing the current activation state.
     */
    export namespace SettingsConnectionFlags {
        export const $gtype: GObject.GType<SettingsConnectionFlags>;
    }
    enum SettingsConnectionFlags {
        /**
         * an alias for numeric zero, no flags set.
         */
        NONE,
        /**
         * the connection is not saved to disk.
         *   That either means, that the connection is in-memory only and currently
         *   is not backed by a file. Or, that the connection is backed by a file,
         *   but has modifications in-memory that were not persisted to disk.
         */
        UNSAVED = 1,
        /**
         * A connection is "nm-generated" if
         *  it was generated by NetworkManger. If the connection gets modified or saved
         *  by the user, the flag gets cleared. A nm-generated is also unsaved
         *  and has no backing file as it is in-memory only.
         */
        NM_GENERATED = 2,
        /**
         * The connection will be deleted
         *  when it disconnects. That is for in-memory connections (unsaved), which are
         *  currently active but deleted on disconnect. Volatile connections are
         *  always unsaved, but they are also no backing file on disk and are entirely
         *  in-memory only.
         */
        VOLATILE = 4,
        /**
         * the profile was generated to represent
         *  an external configuration of a networking device. Since: 1.26.
         */
        EXTERNAL = 8,
    }
    export namespace SettingsUpdate2Flags {
        export const $gtype: GObject.GType<SettingsUpdate2Flags>;
    }
    enum SettingsUpdate2Flags {
        /**
         * an alias for numeric zero, no flags set.
         */
        NONE,
        /**
         * to persist the connection to disk.
         */
        TO_DISK = 1,
        /**
         * makes the profile in-memory.
         *   Note that such profiles are stored in keyfile format under /run.
         *   If the file is already in-memory, the file in /run is updated in-place.
         *   Otherwise, the previous storage for the profile is left unchanged
         *   on disk, and the in-memory copy shadows it.
         *   Note that the original filename of the previous persistent storage (if any)
         *   is remembered. That means, when later persisting the profile again to disk,
         *   the file on disk will be overwritten again.
         *   Likewise, when finally deleting the profile, both the storage from /run
         *   and persistent storage are deleted (or if the persistent storage does not
         *   allow deletion, and nmmeta file is written to mark the UUID as deleted).
         */
        IN_MEMORY = 2,
        /**
         * this is almost the same
         *   as %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY, with one difference: when later deleting
         *   the profile, the original profile will not be deleted. Instead a nmmeta
         *   file is written to /run to indicate that the profile is gone.
         *   Note that if such a nmmeta tombstone file exists and hides a file in persistent
         *   storage, then when re-adding the profile with the same UUID, then the original
         *   storage is taken over again.
         */
        IN_MEMORY_DETACHED = 4,
        /**
         * this is like %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY,
         *   but if the connection has a corresponding file on persistent storage, the file
         *   will be deleted right away. If the profile is later again persisted to disk,
         *   a new, unused filename will be chosen.
         */
        IN_MEMORY_ONLY = 8,
        /**
         * This can be specified with either
         *   %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY, %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY_DETACHED
         *   or %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY_ONLY.
         *   After making the connection in-memory only, the connection is marked
         *   as volatile. That means, if the connection is currently not active
         *   it will be deleted right away. Otherwise, it is marked to for deletion
         *   once the connection deactivates. A volatile connection cannot autoactivate
         *   again (because it's about to be deleted), but a manual activation will
         *   clear the volatile flag.
         */
        VOLATILE = 16,
        /**
         * usually, when the connection
         *   has autoconnect enabled and is modified, it becomes eligible to autoconnect
         *   right away. Setting this flag, disables autoconnect until the connection
         *   is manually activated.
         */
        BLOCK_AUTOCONNECT = 32,
        /**
         * when a profile gets modified that is
         *   currently active, then these changes don't take effect for the active
         *   device unless the profile gets reactivated or the configuration reapplied.
         *   There are two exceptions: by default "connection.zone" and "connection.metered"
         *   properties take effect immediately. Specify this flag to prevent these
         *   properties to take effect, so that the change is restricted to modify
         *   the profile. Since: 1.20.
         */
        NO_REAPPLY = 64,
    }
    export namespace TeamLinkWatcherArpPingFlags {
        export const $gtype: GObject.GType<TeamLinkWatcherArpPingFlags>;
    }
    enum TeamLinkWatcherArpPingFlags {
        /**
         * the arp_ping link watcher
         *    option 'validate_active' is enabled (set to true).
         */
        VALIDATE_ACTIVE = 2,
        /**
         * the arp_ping link watcher
         *    option 'validate_inactive' is enabled (set to true).
         */
        VALIDATE_INACTIVE = 4,
        /**
         * the arp_ping link watcher option
         *    'send_always' is enabled (set to true).
         */
        SEND_ALWAYS = 8,
    }
    /**
     * #NMVlanFlags values control the behavior of the VLAN interface.
     */
    export namespace VlanFlags {
        export const $gtype: GObject.GType<VlanFlags>;
    }
    enum VlanFlags {
        /**
         * indicates that this interface should reorder
         *  outgoing packet headers to look more like a non-VLAN Ethernet interface
         */
        REORDER_HEADERS = 1,
        /**
         * indicates that this interface should use GVRP to register
         *  itself with its switch
         */
        GVRP = 2,
        /**
         * indicates that this interface's operating
         *  state is tied to the underlying network interface but other details
         *  (like routing) are not.
         */
        LOOSE_BINDING = 4,
        /**
         * indicates that this interface should use MVRP to register
         *  itself with its switch
         */
        MVRP = 8,
    }
    /**
     * Flags that indicate certain capabilities of the plugin to editor programs.
     */
    export namespace VpnEditorPluginCapability {
        export const $gtype: GObject.GType<VpnEditorPluginCapability>;
    }
    enum VpnEditorPluginCapability {
        /**
         * unknown or no capability
         */
        NONE,
        /**
         * the plugin can import new connections
         */
        IMPORT = 1,
        /**
         * the plugin can export connections
         */
        EXPORT = 2,
        /**
         * the plugin supports IPv6 addressing
         */
        'IPV6' = 4,
    }
    namespace AccessPoint {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::bandwidth'(pspec: GObject.ParamSpec): void;
            'notify::bssid'(pspec: GObject.ParamSpec): void;
            'notify::flags'(pspec: GObject.ParamSpec): void;
            'notify::frequency'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::last-seen'(pspec: GObject.ParamSpec): void;
            'notify::max-bitrate'(pspec: GObject.ParamSpec): void;
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::rsn-flags'(pspec: GObject.ParamSpec): void;
            'notify::ssid'(pspec: GObject.ParamSpec): void;
            'notify::strength'(pspec: GObject.ParamSpec): void;
            'notify::wpa-flags'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The channel bandwidth announced by the AP in MHz.
             */
            bandwidth: number;
            /**
             * The BSSID of the access point.
             */
            bssid: string;
            /**
             * The flags of the access point.
             */
            flags: __80211ApFlags;
            /**
             * The frequency of the access point.
             */
            frequency: number;
            /**
             * Alias for #NMAccessPoint:bssid.
             */
            hw_address: string;
            /**
             * Alias for #NMAccessPoint:bssid.
             */
            hwAddress: string;
            /**
             * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
             * access point was found in scan results.  A value of -1 means the
             * access point has not been found in a scan.
             */
            last_seen: number;
            /**
             * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
             * access point was found in scan results.  A value of -1 means the
             * access point has not been found in a scan.
             */
            lastSeen: number;
            /**
             * The maximum bit rate of the access point in kbit/s.
             */
            max_bitrate: number;
            /**
             * The maximum bit rate of the access point in kbit/s.
             */
            maxBitrate: number;
            /**
             * The mode of the access point; either "infrastructure" (a central
             * coordinator of the wireless network allowing clients to connect) or
             * "ad-hoc" (a network with no central controller).
             */
            mode: __80211Mode;
            /**
             * The RSN flags of the access point.
             */
            rsn_flags: __80211ApSecurityFlags;
            /**
             * The RSN flags of the access point.
             */
            rsnFlags: __80211ApSecurityFlags;
            /**
             * The SSID of the access point, or %NULL if it is not known.
             */
            ssid: GLib.Bytes;
            /**
             * The current signal strength of the access point.
             */
            strength: number;
            /**
             * The WPA flags of the access point.
             */
            wpa_flags: __80211ApSecurityFlags;
            /**
             * The WPA flags of the access point.
             */
            wpaFlags: __80211ApSecurityFlags;
        }
    }
    type AccessPoint = (typeof classes.AccessPoint)['prototype'];
    const AccessPoint: typeof classes.AccessPoint &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.AccessPoint.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, AccessPoint.SignalSignatures> & classes.AccessPoint);
    namespace ActiveConnection {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'state-changed'(arg0: number, arg1: number): void;
            'notify::connection'(pspec: GObject.ParamSpec): void;
            'notify::controller'(pspec: GObject.ParamSpec): void;
            'notify::default'(pspec: GObject.ParamSpec): void;
            'notify::default6'(pspec: GObject.ParamSpec): void;
            'notify::devices'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::master'(pspec: GObject.ParamSpec): void;
            'notify::specific-object-path'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-flags'(pspec: GObject.ParamSpec): void;
            'notify::type'(pspec: GObject.ParamSpec): void;
            'notify::uuid'(pspec: GObject.ParamSpec): void;
            'notify::vpn'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The connection that this is an active instance of.
             */
            connection: RemoteConnection;
            /**
             * The controller device if one exists. This replaces the deprecated
             * "master" property.
             */
            controller: Device;
            /**
             * Whether the active connection is the default IPv4 one.
             */
            default: boolean;
            /**
             * Whether the active connection is the default IPv6 one.
             */
            default6: boolean;
            /**
             * The devices of the active connection.
             */
            devices: Device[];
            /**
             * The IPv4 #NMDhcpConfig of the connection.
             */
            dhcp4_config: DhcpConfig;
            /**
             * The IPv4 #NMDhcpConfig of the connection.
             */
            dhcp4Config: DhcpConfig;
            /**
             * The IPv6 #NMDhcpConfig of the connection.
             */
            dhcp6_config: DhcpConfig;
            /**
             * The IPv6 #NMDhcpConfig of the connection.
             */
            dhcp6Config: DhcpConfig;
            /**
             * The active connection's ID
             */
            id: string;
            /**
             * The IPv4 #NMIPConfig of the connection.
             */
            ip4_config: IPConfig;
            /**
             * The IPv4 #NMIPConfig of the connection.
             */
            ip4Config: IPConfig;
            /**
             * The IPv6 #NMIPConfig of the connection.
             */
            ip6_config: IPConfig;
            /**
             * The IPv6 #NMIPConfig of the connection.
             */
            ip6Config: IPConfig;
            /**
             * The controller device if one exists. Replaced by the "controller" property.
             */
            master: Device;
            /**
             * The path to the "specific object" of the active connection; see
             * nm_active_connection_get_specific_object_path() for more details.
             */
            specific_object_path: string;
            /**
             * The path to the "specific object" of the active connection; see
             * nm_active_connection_get_specific_object_path() for more details.
             */
            specificObjectPath: string;
            /**
             * The state of the active connection.
             */
            state: ActiveConnectionState;
            /**
             * The state flags of the active connection.
             */
            state_flags: number;
            /**
             * The state flags of the active connection.
             */
            stateFlags: number;
            /**
             * The active connection's type
             */
            type: string;
            /**
             * The active connection's UUID
             */
            uuid: string;
            /**
             * Whether the active connection is a VPN connection.
             */
            vpn: boolean;
        }
    }
    type ActiveConnection = (typeof classes.ActiveConnection)['prototype'];
    const ActiveConnection: typeof classes.ActiveConnection &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.ActiveConnection.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, ActiveConnection.SignalSignatures> & classes.ActiveConnection);
    namespace Checkpoint {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::created'(pspec: GObject.ParamSpec): void;
            'notify::devices'(pspec: GObject.ParamSpec): void;
            'notify::rollback-timeout'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The timestamp (in CLOCK_BOOTTIME milliseconds) of checkpoint creation.
             */
            created: number;
            /**
             * The devices that are part of this checkpoint.
             */
            devices: Device[];
            /**
             * Timeout in seconds for automatic rollback, or zero.
             */
            rollback_timeout: number;
            /**
             * Timeout in seconds for automatic rollback, or zero.
             */
            rollbackTimeout: number;
        }
    }
    type Checkpoint = (typeof classes.Checkpoint)['prototype'];
    const Checkpoint: typeof classes.Checkpoint &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.Checkpoint.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Checkpoint.SignalSignatures> & classes.Checkpoint);
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'active-connection-added'(arg0: ActiveConnection): void;
            'active-connection-removed'(arg0: ActiveConnection): void;
            'any-device-added'(arg0: Device): void;
            'any-device-removed'(arg0: Device): void;
            'connection-added'(arg0: RemoteConnection): void;
            'connection-removed'(arg0: RemoteConnection): void;
            'device-added'(arg0: Device): void;
            'device-removed'(arg0: Device): void;
            'permission-changed'(arg0: number, arg1: number): void;
            'notify::activating-connection'(pspec: GObject.ParamSpec): void;
            'notify::active-connections'(pspec: GObject.ParamSpec): void;
            'notify::all-devices'(pspec: GObject.ParamSpec): void;
            'notify::can-modify'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::checkpoints'(pspec: GObject.ParamSpec): void;
            'notify::connections'(pspec: GObject.ParamSpec): void;
            'notify::connectivity'(pspec: GObject.ParamSpec): void;
            'notify::connectivity-check-available'(pspec: GObject.ParamSpec): void;
            'notify::connectivity-check-enabled'(pspec: GObject.ParamSpec): void;
            'notify::connectivity-check-uri'(pspec: GObject.ParamSpec): void;
            'notify::dbus-connection'(pspec: GObject.ParamSpec): void;
            'notify::dbus-name-owner'(pspec: GObject.ParamSpec): void;
            'notify::devices'(pspec: GObject.ParamSpec): void;
            'notify::dns-configuration'(pspec: GObject.ParamSpec): void;
            'notify::dns-mode'(pspec: GObject.ParamSpec): void;
            'notify::dns-rc-manager'(pspec: GObject.ParamSpec): void;
            'notify::hostname'(pspec: GObject.ParamSpec): void;
            'notify::instance-flags'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::networking-enabled'(pspec: GObject.ParamSpec): void;
            'notify::nm-running'(pspec: GObject.ParamSpec): void;
            'notify::permissions-state'(pspec: GObject.ParamSpec): void;
            'notify::primary-connection'(pspec: GObject.ParamSpec): void;
            'notify::radio-flags'(pspec: GObject.ParamSpec): void;
            'notify::startup'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::version'(pspec: GObject.ParamSpec): void;
            'notify::version-info'(pspec: GObject.ParamSpec): void;
            'notify::wimax-enabled'(pspec: GObject.ParamSpec): void;
            'notify::wimax-hardware-enabled'(pspec: GObject.ParamSpec): void;
            'notify::wireless-enabled'(pspec: GObject.ParamSpec): void;
            'notify::wireless-hardware-enabled'(pspec: GObject.ParamSpec): void;
            'notify::wwan-enabled'(pspec: GObject.ParamSpec): void;
            'notify::wwan-hardware-enabled'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {
            /**
             * The #NMActiveConnection of the activating connection that is
             * likely to become the new #NMClient:primary-connection.
             */
            activating_connection: ActiveConnection;
            /**
             * The #NMActiveConnection of the activating connection that is
             * likely to become the new #NMClient:primary-connection.
             */
            activatingConnection: ActiveConnection;
            /**
             * The active connections.
             */
            active_connections: ActiveConnection[];
            /**
             * The active connections.
             */
            activeConnections: ActiveConnection[];
            /**
             * List of both real devices and device placeholders.
             */
            all_devices: Device[];
            /**
             * List of both real devices and device placeholders.
             */
            allDevices: Device[];
            /**
             * If %TRUE, adding and modifying connections is supported.
             */
            can_modify: boolean;
            /**
             * If %TRUE, adding and modifying connections is supported.
             */
            canModify: boolean;
            /**
             * The list of capabilities numbers as guint32 or %NULL if
             * there are no capabilities. The numeric value correspond
             * to %NMCapability enum.
             */
            capabilities: number[];
            /**
             * The list of active checkpoints.
             */
            checkpoints: Checkpoint[];
            /**
             * The list of configured connections that are available to the user. (Note
             * that this differs from the underlying D-Bus property, which may also
             * contain the object paths of connections that the user does not have
             * permission to read the details of.)
             */
            connections: RemoteConnection[];
            /**
             * The network connectivity state.
             */
            connectivity: ConnectivityState;
            connectivity_check_available: boolean;
            connectivityCheckAvailable: boolean;
            connectivity_check_enabled: boolean;
            connectivityCheckEnabled: boolean;
            /**
             * The used URI for connectivity checking.
             */
            connectivity_check_uri: string;
            /**
             * The used URI for connectivity checking.
             */
            connectivityCheckUri: string;
            /**
             * The #GDBusConnection to use.
             *
             * If this is not set during object construction, the D-Bus connection will
             * automatically be chosen during async/sync initalization via g_bus_get().
             */
            dbus_connection: Gio.DBusConnection;
            /**
             * The #GDBusConnection to use.
             *
             * If this is not set during object construction, the D-Bus connection will
             * automatically be chosen during async/sync initalization via g_bus_get().
             */
            dbusConnection: Gio.DBusConnection;
            /**
             * The name owner of the NetworkManager D-Bus service.
             */
            dbus_name_owner: string;
            /**
             * The name owner of the NetworkManager D-Bus service.
             */
            dbusNameOwner: string;
            /**
             * List of real network devices.  Does not include placeholder devices.
             */
            devices: Device[];
            /**
             * The current DNS configuration, represented as an array
             * of #NMDnsEntry objects.
             */
            dns_configuration: DnsEntry[];
            /**
             * The current DNS configuration, represented as an array
             * of #NMDnsEntry objects.
             */
            dnsConfiguration: DnsEntry[];
            /**
             * The current DNS processing mode.
             */
            dns_mode: string;
            /**
             * The current DNS processing mode.
             */
            dnsMode: string;
            /**
             * The current resolv.conf management mode.
             */
            dns_rc_manager: string;
            /**
             * The current resolv.conf management mode.
             */
            dnsRcManager: string;
            /**
             * The machine hostname stored in persistent configuration. This can be
             * modified by calling nm_client_save_hostname().
             */
            hostname: string;
            /**
             * #NMClientInstanceFlags for the instance. These affect behavior of #NMClient.
             * This is a construct property and you may only set most flags only during
             * construction.
             *
             * The flag %NM_CLIENT_INSTANCE_FLAGS_NO_AUTO_FETCH_PERMISSIONS can be toggled any time,
             * even after constructing the instance. Note that you may want to watch NMClient:permissions-state
             * property to know whether permissions are ready. Note that permissions are only fetched
             * when NMClient has a D-Bus name owner.
             *
             * The flags %NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_GOOD and %NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_BAD
             * cannot be set, however they will be returned by the getter after initialization completes.
             */
            instance_flags: number;
            /**
             * #NMClientInstanceFlags for the instance. These affect behavior of #NMClient.
             * This is a construct property and you may only set most flags only during
             * construction.
             *
             * The flag %NM_CLIENT_INSTANCE_FLAGS_NO_AUTO_FETCH_PERMISSIONS can be toggled any time,
             * even after constructing the instance. Note that you may want to watch NMClient:permissions-state
             * property to know whether permissions are ready. Note that permissions are only fetched
             * when NMClient has a D-Bus name owner.
             *
             * The flags %NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_GOOD and %NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_BAD
             * cannot be set, however they will be returned by the getter after initialization completes.
             */
            instanceFlags: number;
            /**
             * Whether the connectivity is metered.
             */
            metered: number;
            /**
             * Whether networking is enabled.
             *
             * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
             */
            networking_enabled: boolean;
            /**
             * Whether networking is enabled.
             *
             * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
             */
            networkingEnabled: boolean;
            /**
             * Whether the daemon is running.
             */
            nm_running: boolean;
            /**
             * Whether the daemon is running.
             */
            nmRunning: boolean;
            /**
             * The state of the cached permissions. The value %NM_TERNARY_DEFAULT
             * means that no permissions are yet received (or not yet requested).
             * %NM_TERNARY_TRUE means that permissions are received, cached and up
             * to date. %NM_TERNARY_FALSE means that permissions were received and are
             * cached, but in the meantime a "CheckPermissions" signal was received
             * that invalidated the cached permissions.
             * Note that NMClient will always emit a notify::permissions-state signal
             * when a "CheckPermissions" signal got received or after new permissions
             * got received (that is regardless whether the value of the permission state
             * actually changed). With this you can watch the permissions-state property
             * to know whether the permissions are ready. Note that while NMClient has
             * no D-Bus name owner, no permissions are fetched (and this property won't
             * change).
             */
            permissions_state: Ternary;
            /**
             * The state of the cached permissions. The value %NM_TERNARY_DEFAULT
             * means that no permissions are yet received (or not yet requested).
             * %NM_TERNARY_TRUE means that permissions are received, cached and up
             * to date. %NM_TERNARY_FALSE means that permissions were received and are
             * cached, but in the meantime a "CheckPermissions" signal was received
             * that invalidated the cached permissions.
             * Note that NMClient will always emit a notify::permissions-state signal
             * when a "CheckPermissions" signal got received or after new permissions
             * got received (that is regardless whether the value of the permission state
             * actually changed). With this you can watch the permissions-state property
             * to know whether the permissions are ready. Note that while NMClient has
             * no D-Bus name owner, no permissions are fetched (and this property won't
             * change).
             */
            permissionsState: Ternary;
            /**
             * The #NMActiveConnection of the device with the default route;
             * see nm_client_get_primary_connection() for more details.
             */
            primary_connection: ActiveConnection;
            /**
             * The #NMActiveConnection of the device with the default route;
             * see nm_client_get_primary_connection() for more details.
             */
            primaryConnection: ActiveConnection;
            /**
             * Flags for radio interfaces. See #NMRadioFlags.
             */
            radio_flags: number;
            /**
             * Flags for radio interfaces. See #NMRadioFlags.
             */
            radioFlags: number;
            /**
             * Whether the daemon is still starting up.
             */
            startup: boolean;
            /**
             * The current daemon state.
             */
            state: State;
            /**
             * The NetworkManager version.
             */
            version: string;
            /**
             * Expose version info and capabilities of NetworkManager. If non-empty,
             * the first element is NM_VERSION, which encodes the version of the
             * daemon as "(major << 16 | minor << 8 | micro)". The following elements
             * is a bitfields of %NMVersionInfoCapabilities. If a bit is set, then
             * the running NetworkManager has the respective capability.
             */
            version_info: number[];
            /**
             * Expose version info and capabilities of NetworkManager. If non-empty,
             * the first element is NM_VERSION, which encodes the version of the
             * daemon as "(major << 16 | minor << 8 | micro)". The following elements
             * is a bitfields of %NMVersionInfoCapabilities. If a bit is set, then
             * the running NetworkManager has the respective capability.
             */
            versionInfo: number[];
            /**
             * Whether WiMAX functionality is enabled.
             */
            wimax_enabled: boolean;
            /**
             * Whether WiMAX functionality is enabled.
             */
            wimaxEnabled: boolean;
            /**
             * Whether the WiMAX hardware is enabled.
             */
            wimax_hardware_enabled: boolean;
            /**
             * Whether the WiMAX hardware is enabled.
             */
            wimaxHardwareEnabled: boolean;
            /**
             * Whether wireless is enabled.
             *
             * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
             */
            wireless_enabled: boolean;
            /**
             * Whether wireless is enabled.
             *
             * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
             */
            wirelessEnabled: boolean;
            /**
             * Whether the wireless hardware is enabled.
             */
            wireless_hardware_enabled: boolean;
            /**
             * Whether the wireless hardware is enabled.
             */
            wirelessHardwareEnabled: boolean;
            /**
             * Whether WWAN functionality is enabled.
             *
             * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
             */
            wwan_enabled: boolean;
            /**
             * Whether WWAN functionality is enabled.
             *
             * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
             */
            wwanEnabled: boolean;
            /**
             * Whether the WWAN hardware is enabled.
             */
            wwan_hardware_enabled: boolean;
            /**
             * Whether the WWAN hardware is enabled.
             */
            wwanHardwareEnabled: boolean;
        }
    }
    type Client = (typeof classes.Client)['prototype'];
    const Client: typeof classes.Client &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.Client.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Client.SignalSignatures> & classes.Client);
    namespace Device {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'state-changed'(arg0: number, arg1: number, arg2: number): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The #NMActiveConnection object that "owns" this device during activation.
             */
            active_connection: ActiveConnection;
            /**
             * The #NMActiveConnection object that "owns" this device during activation.
             */
            activeConnection: ActiveConnection;
            /**
             * Whether the device can auto-activate a connection.
             *
             * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
             */
            autoconnect: boolean;
            /**
             * The available connections of the device
             */
            available_connections: RemoteConnection[];
            /**
             * The available connections of the device
             */
            availableConnections: RemoteConnection[];
            /**
             * The capabilities of the device.
             */
            capabilities: DeviceCapabilities;
            /**
             * The numeric type of the device.
             */
            device_type: DeviceType;
            /**
             * The numeric type of the device.
             */
            deviceType: DeviceType;
            /**
             * The IPv4 #NMDhcpConfig of the device.
             */
            dhcp4_config: DhcpConfig;
            /**
             * The IPv4 #NMDhcpConfig of the device.
             */
            dhcp4Config: DhcpConfig;
            /**
             * The IPv6 #NMDhcpConfig of the device.
             */
            dhcp6_config: DhcpConfig;
            /**
             * The IPv6 #NMDhcpConfig of the device.
             */
            dhcp6Config: DhcpConfig;
            /**
             * The driver of the device.
             */
            driver: string;
            /**
             * The version of the device driver.
             */
            driver_version: string;
            /**
             * The version of the device driver.
             */
            driverVersion: string;
            /**
             * When %TRUE indicates the device is likely missing firmware required
             * for its operation.
             */
            firmware_missing: boolean;
            /**
             * When %TRUE indicates the device is likely missing firmware required
             * for its operation.
             */
            firmwareMissing: boolean;
            /**
             * The firmware version of the device.
             */
            firmware_version: string;
            /**
             * The firmware version of the device.
             */
            firmwareVersion: string;
            /**
             * The hardware address of the device.
             */
            hw_address: string;
            /**
             * The hardware address of the device.
             */
            hwAddress: string;
            /**
             * The interface of the device.
             */
            interface: string;
            /**
             * The interface flags.
             */
            interface_flags: number;
            /**
             * The interface flags.
             */
            interfaceFlags: number;
            /**
             * The IP interface of the device which should be used for all IP-related
             * operations like addressing and routing.
             */
            ip_interface: string;
            /**
             * The IP interface of the device which should be used for all IP-related
             * operations like addressing and routing.
             */
            ipInterface: string;
            /**
             * The #NMIP4Config of the device.
             */
            ip4_config: IPConfig;
            /**
             * The #NMIP4Config of the device.
             */
            ip4Config: IPConfig;
            /**
             * The IPv4 connectivity state of the device.
             */
            ip4_connectivity: ConnectivityState;
            /**
             * The IPv4 connectivity state of the device.
             */
            ip4Connectivity: ConnectivityState;
            /**
             * The IPv6 #NMIPConfig of the device.
             */
            ip6_config: IPConfig;
            /**
             * The IPv6 #NMIPConfig of the device.
             */
            ip6Config: IPConfig;
            /**
             * The IPv6 connectivity state of the device.
             */
            ip6_connectivity: ConnectivityState;
            /**
             * The IPv6 connectivity state of the device.
             */
            ip6Connectivity: ConnectivityState;
            /**
             * The LLDP neighbors.
             */
            lldp_neighbors: any[];
            /**
             * The LLDP neighbors.
             */
            lldpNeighbors: any[];
            /**
             * Whether the device is managed by NetworkManager.
             */
            managed: boolean;
            /**
             * Whether the device is metered.
             */
            metered: number;
            /**
             * The MTU of the device.
             */
            mtu: number;
            /**
             * When %TRUE indicates that the NetworkManager plugin for the device
             * is not installed.
             */
            nm_plugin_missing: boolean;
            /**
             * When %TRUE indicates that the NetworkManager plugin for the device
             * is not installed.
             */
            nmPluginMissing: boolean;
            /**
             * The device path as exposed by the udev property ID_PATH.
             *
             * The string is backslash escaped (C escaping) for invalid
             * characters. The escaping can be reverted with g_strcompress(),
             * however the result may not be valid UTF-8.
             */
            path: string;
            /**
             * The physical port ID of the device. (See
             * nm_device_get_physical_port_id().)
             */
            physical_port_id: string;
            /**
             * The physical port ID of the device. (See
             * nm_device_get_physical_port_id().)
             */
            physicalPortId: string;
            /**
             * The port devices of the controller device. For devices that cannot be
             * controllers this is likely to be always empty.
             */
            ports: any[];
            /**
             * The product string of the device.
             */
            product: string;
            /**
             * Whether the device is real or is a placeholder device that could
             * be created automatically by NetworkManager if one of its
             * #NMDevice:available-connections was activated.
             */
            real: boolean;
            /**
             * The state of the device.
             */
            state: DeviceState;
            /**
             * The reason for the device state.
             */
            state_reason: number;
            /**
             * The reason for the device state.
             */
            stateReason: number;
            /**
             * An operating-system specific device hardware identifier; this is not
             * unique to a specific hardware device across reboots or hotplugs.  It
             * is an opaque string which for some device types (Bluetooth, Modem)
             * contains an identifier provided by the underlying hardware service daemon
             * such as Bluez or ModemManager, and clients can use this property to
             * request more information about the device from those services.
             */
            udi: string;
            /**
             * The vendor string of the device.
             */
            vendor: string;
        }
    }
    type Device = (typeof classes.Device)['prototype'];
    const Device: typeof classes.Device &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.Device.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Device.SignalSignatures> & classes.Device);
    namespace Device6Lowpan {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The devices's parent device.
             */
            parent: Device;
        }
    }
    type Device6Lowpan = (typeof classes.Device6Lowpan)['prototype'];
    const Device6Lowpan: typeof classes.Device6Lowpan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.Device6Lowpan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Device6Lowpan.SignalSignatures> & classes.Device6Lowpan);
    namespace DeviceAdsl {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::carrier'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Whether the device has carrier.
             */
            carrier: boolean;
        }
    }
    type DeviceAdsl = (typeof classes.DeviceAdsl)['prototype'];
    const DeviceAdsl: typeof classes.DeviceAdsl &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceAdsl.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceAdsl.SignalSignatures> & classes.DeviceAdsl);
    namespace DeviceBond {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::carrier'(pspec: GObject.ParamSpec): void;
            'notify::slaves'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Whether the device has carrier.
             */
            carrier: boolean;
            /**
             * The devices attached as port to the bond device.
             */
            slaves: Device[];
        }
    }
    type DeviceBond = (typeof classes.DeviceBond)['prototype'];
    const DeviceBond: typeof classes.DeviceBond &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceBond.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceBond.SignalSignatures> & classes.DeviceBond);
    namespace DeviceBridge {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::carrier'(pspec: GObject.ParamSpec): void;
            'notify::slaves'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Whether the device has carrier.
             */
            carrier: boolean;
            /**
             * The devices attached as port to the bridge device.
             */
            slaves: Device[];
        }
    }
    type DeviceBridge = (typeof classes.DeviceBridge)['prototype'];
    const DeviceBridge: typeof classes.DeviceBridge &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceBridge.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceBridge.SignalSignatures> & classes.DeviceBridge);
    namespace DeviceBt {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::bt-capabilities'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The device's bluetooth capabilities, a combination of #NMBluetoothCapabilities.
             */
            bt_capabilities: BluetoothCapabilities;
            /**
             * The device's bluetooth capabilities, a combination of #NMBluetoothCapabilities.
             */
            btCapabilities: BluetoothCapabilities;
            /**
             * The name of the bluetooth device.
             */
            name: string;
        }
    }
    type DeviceBt = (typeof classes.DeviceBt)['prototype'];
    const DeviceBt: typeof classes.DeviceBt &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceBt.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceBt.SignalSignatures> & classes.DeviceBt);
    namespace DeviceDummy {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {}
    }
    type DeviceDummy = (typeof classes.DeviceDummy)['prototype'];
    const DeviceDummy: typeof classes.DeviceDummy &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceDummy.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceDummy.SignalSignatures> & classes.DeviceDummy);
    namespace DeviceEthernet {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::carrier'(pspec: GObject.ParamSpec): void;
            'notify::perm-hw-address'(pspec: GObject.ParamSpec): void;
            'notify::s390-subchannels'(pspec: GObject.ParamSpec): void;
            'notify::speed'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Whether the device has carrier.
             */
            carrier: boolean;
            /**
             * The permanent hardware (MAC) address of the device.
             */
            perm_hw_address: string;
            /**
             * The permanent hardware (MAC) address of the device.
             */
            permHwAddress: string;
            /**
             * Identifies subchannels of this network device used for
             * communication with z/VM or s390 host.
             */
            s390_subchannels: string[];
            /**
             * Identifies subchannels of this network device used for
             * communication with z/VM or s390 host.
             */
            s390Subchannels: string[];
            /**
             * The speed of the device.
             */
            speed: number;
        }
    }
    type DeviceEthernet = (typeof classes.DeviceEthernet)['prototype'];
    const DeviceEthernet: typeof classes.DeviceEthernet &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceEthernet.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceEthernet.SignalSignatures> & classes.DeviceEthernet);
    namespace DeviceGeneric {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::type-description'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * A description of the specific type of device this is, or %NULL
             * if not known.
             */
            type_description: string;
            /**
             * A description of the specific type of device this is, or %NULL
             * if not known.
             */
            typeDescription: string;
        }
    }
    type DeviceGeneric = (typeof classes.DeviceGeneric)['prototype'];
    const DeviceGeneric: typeof classes.DeviceGeneric &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceGeneric.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceGeneric.SignalSignatures> & classes.DeviceGeneric);
    namespace DeviceHsr {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::multicast-spec'(pspec: GObject.ParamSpec): void;
            'notify::port1'(pspec: GObject.ParamSpec): void;
            'notify::port2'(pspec: GObject.ParamSpec): void;
            'notify::prp'(pspec: GObject.ParamSpec): void;
            'notify::supervision-address'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The device last byte of the supervision address.
             */
            multicast_spec: number;
            /**
             * The device last byte of the supervision address.
             */
            multicastSpec: number;
            /**
             * The device's port1 device.
             */
            port1: Device;
            /**
             * The device's port2 device.
             */
            port2: Device;
            /**
             * Whether the PRP protocol is used or not.
             */
            prp: boolean;
            /**
             * The device supervision MAC adddress.
             */
            supervision_address: string;
            /**
             * The device supervision MAC adddress.
             */
            supervisionAddress: string;
        }
    }
    type DeviceHsr = (typeof classes.DeviceHsr)['prototype'];
    const DeviceHsr: typeof classes.DeviceHsr &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceHsr.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceHsr.SignalSignatures> & classes.DeviceHsr);
    namespace DeviceIPTunnel {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::encapsulation-limit'(pspec: GObject.ParamSpec): void;
            'notify::flags'(pspec: GObject.ParamSpec): void;
            'notify::flow-label'(pspec: GObject.ParamSpec): void;
            'notify::fwmark'(pspec: GObject.ParamSpec): void;
            'notify::input-key'(pspec: GObject.ParamSpec): void;
            'notify::local'(pspec: GObject.ParamSpec): void;
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::output-key'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::path-mtu-discovery'(pspec: GObject.ParamSpec): void;
            'notify::remote'(pspec: GObject.ParamSpec): void;
            'notify::tos'(pspec: GObject.ParamSpec): void;
            'notify::ttl'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * How many additional levels of encapsulation are permitted to
             * be prepended to packets. This property applies only to IPv6
             * tunnels.
             */
            encapsulation_limit: number;
            /**
             * How many additional levels of encapsulation are permitted to
             * be prepended to packets. This property applies only to IPv6
             * tunnels.
             */
            encapsulationLimit: number;
            /**
             * Tunnel flags.
             */
            flags: number;
            /**
             * The flow label to assign to tunnel packets. This property
             * applies only to IPv6 tunnels.
             */
            flow_label: number;
            /**
             * The flow label to assign to tunnel packets. This property
             * applies only to IPv6 tunnels.
             */
            flowLabel: number;
            /**
             * The fwmark value to assign to tunnel packets. This property applies only
             * to VTI tunnels.
             */
            fwmark: number;
            /**
             * The key used for tunneled input packets, if applicable.
             */
            input_key: string;
            /**
             * The key used for tunneled input packets, if applicable.
             */
            inputKey: string;
            /**
             * The local endpoint of the tunnel.
             */
            local: string;
            /**
             * The tunneling mode of the device.
             */
            mode: number;
            /**
             * The key used for tunneled output packets, if applicable.
             */
            output_key: string;
            /**
             * The key used for tunneled output packets, if applicable.
             */
            outputKey: string;
            /**
             * The devices's parent device.
             */
            parent: Device;
            /**
             * Whether path MTU discovery is enabled on this tunnel.
             */
            path_mtu_discovery: boolean;
            /**
             * Whether path MTU discovery is enabled on this tunnel.
             */
            pathMtuDiscovery: boolean;
            /**
             * The remote endpoint of the tunnel.
             */
            remote: string;
            /**
             * The type of service (IPv4) or traffic class (IPv6) assigned to
             * tunneled packets.
             */
            tos: number;
            /**
             * The TTL assigned to tunneled packets. 0 is a special value
             *  meaning that packets inherit the TTL value
             */
            ttl: number;
        }
    }
    type DeviceIPTunnel = (typeof classes.DeviceIPTunnel)['prototype'];
    const DeviceIPTunnel: typeof classes.DeviceIPTunnel &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceIPTunnel.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceIPTunnel.SignalSignatures> & classes.DeviceIPTunnel);
    namespace DeviceInfiniband {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::carrier'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Whether the device has carrier.
             */
            carrier: boolean;
        }
    }
    type DeviceInfiniband = (typeof classes.DeviceInfiniband)['prototype'];
    const DeviceInfiniband: typeof classes.DeviceInfiniband &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceInfiniband.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceInfiniband.SignalSignatures> & classes.DeviceInfiniband);
    namespace DeviceLoopback {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {}
    }
    type DeviceLoopback = (typeof classes.DeviceLoopback)['prototype'];
    const DeviceLoopback: typeof classes.DeviceLoopback &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceLoopback.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceLoopback.SignalSignatures> & classes.DeviceLoopback);
    namespace DeviceMacsec {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::cipher-suite'(pspec: GObject.ParamSpec): void;
            'notify::encoding-sa'(pspec: GObject.ParamSpec): void;
            'notify::encrypt'(pspec: GObject.ParamSpec): void;
            'notify::es'(pspec: GObject.ParamSpec): void;
            'notify::icv-length'(pspec: GObject.ParamSpec): void;
            'notify::include-sci'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::protect'(pspec: GObject.ParamSpec): void;
            'notify::replay-protect'(pspec: GObject.ParamSpec): void;
            'notify::scb'(pspec: GObject.ParamSpec): void;
            'notify::sci'(pspec: GObject.ParamSpec): void;
            'notify::validation'(pspec: GObject.ParamSpec): void;
            'notify::window'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The set of cryptographic algorithms in use.
             */
            cipher_suite: number;
            /**
             * The set of cryptographic algorithms in use.
             */
            cipherSuite: number;
            /**
             * The value of the Association Number (0..3) for the Security
             * Association in use.
             */
            encoding_sa: number;
            /**
             * The value of the Association Number (0..3) for the Security
             * Association in use.
             */
            encodingSa: number;
            /**
             * Whether encryption of transmitted frames is enabled.
             */
            encrypt: boolean;
            /**
             * Whether the ES (End station) bit is enabled in SecTAG for
             * transmitted frames.
             */
            es: boolean;
            /**
             * The length of ICV (Integrity Check Value).
             */
            icv_length: number;
            /**
             * The length of ICV (Integrity Check Value).
             */
            icvLength: number;
            /**
             * Whether the SCI is always included in SecTAG for transmitted
             * frames.
             */
            include_sci: boolean;
            /**
             * Whether the SCI is always included in SecTAG for transmitted
             * frames.
             */
            includeSci: boolean;
            /**
             * The devices's parent device.
             */
            parent: Device;
            /**
             * Whether protection of transmitted frames is enabled.
             */
            protect: boolean;
            /**
             * Whether replay protection is enabled.
             */
            replay_protect: boolean;
            /**
             * Whether replay protection is enabled.
             */
            replayProtect: boolean;
            /**
             * Whether the SCB (Single Copy Broadcast) bit is enabled in
             * SecTAG for transmitted frames.
             */
            scb: boolean;
            /**
             * The Secure Channel Identifier in use.
             */
            sci: number;
            /**
             * The validation mode for incoming packets (strict, check,
             * disabled).
             */
            validation: string;
            /**
             * The size of the replay window.
             */
            window: number;
        }
    }
    type DeviceMacsec = (typeof classes.DeviceMacsec)['prototype'];
    const DeviceMacsec: typeof classes.DeviceMacsec &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceMacsec.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceMacsec.SignalSignatures> & classes.DeviceMacsec);
    namespace DeviceMacvlan {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::no-promisc'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::tap'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The MACVLAN mode.
             */
            mode: string;
            /**
             * Whether the device has the no-promiscuos flag.
             */
            no_promisc: boolean;
            /**
             * Whether the device has the no-promiscuos flag.
             */
            noPromisc: boolean;
            /**
             * The devices's parent device.
             */
            parent: Device;
            /**
             * Whether the device is a MACVTAP.
             */
            tap: boolean;
        }
    }
    type DeviceMacvlan = (typeof classes.DeviceMacvlan)['prototype'];
    const DeviceMacvlan: typeof classes.DeviceMacvlan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceMacvlan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceMacvlan.SignalSignatures> & classes.DeviceMacvlan);
    namespace DeviceModem {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::apn'(pspec: GObject.ParamSpec): void;
            'notify::current-capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-id'(pspec: GObject.ParamSpec): void;
            'notify::modem-capabilities'(pspec: GObject.ParamSpec): void;
            'notify::operator-code'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            apn: string;
            /**
             * The generic family of access technologies the modem currently supports
             * without a firmware reload or reinitialization.
             */
            current_capabilities: DeviceModemCapabilities;
            /**
             * The generic family of access technologies the modem currently supports
             * without a firmware reload or reinitialization.
             */
            currentCapabilities: DeviceModemCapabilities;
            device_id: string;
            deviceId: string;
            /**
             * The generic family of access technologies the modem supports.  Not all
             * capabilities are available at the same time however; some modems require
             * a firmware reload or other reinitialization to switch between eg
             * CDMA/EVDO and GSM/UMTS.
             */
            modem_capabilities: DeviceModemCapabilities;
            /**
             * The generic family of access technologies the modem supports.  Not all
             * capabilities are available at the same time however; some modems require
             * a firmware reload or other reinitialization to switch between eg
             * CDMA/EVDO and GSM/UMTS.
             */
            modemCapabilities: DeviceModemCapabilities;
            operator_code: string;
            operatorCode: string;
        }
    }
    type DeviceModem = (typeof classes.DeviceModem)['prototype'];
    const DeviceModem: typeof classes.DeviceModem &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceModem.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceModem.SignalSignatures> & classes.DeviceModem);
    namespace DeviceOlpcMesh {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::active-channel'(pspec: GObject.ParamSpec): void;
            'notify::companion'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The device's active channel.
             */
            active_channel: number;
            /**
             * The device's active channel.
             */
            activeChannel: number;
            /**
             * The companion device.
             */
            companion: DeviceWifi;
        }
    }
    type DeviceOlpcMesh = (typeof classes.DeviceOlpcMesh)['prototype'];
    const DeviceOlpcMesh: typeof classes.DeviceOlpcMesh &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceOlpcMesh.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceOlpcMesh.SignalSignatures> & classes.DeviceOlpcMesh);
    namespace DeviceOvsBridge {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::slaves'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Gets the ports currently attached as port to the device.
             */
            slaves: Device[];
        }
    }
    type DeviceOvsBridge = (typeof classes.DeviceOvsBridge)['prototype'];
    const DeviceOvsBridge: typeof classes.DeviceOvsBridge &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceOvsBridge.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceOvsBridge.SignalSignatures> & classes.DeviceOvsBridge);
    namespace DeviceOvsInterface {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {}
    }
    type DeviceOvsInterface = (typeof classes.DeviceOvsInterface)['prototype'];
    const DeviceOvsInterface: typeof classes.DeviceOvsInterface &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceOvsInterface.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceOvsInterface.SignalSignatures> & classes.DeviceOvsInterface);
    namespace DeviceOvsPort {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::slaves'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Gets the interfaces currently attached as port to the device.
             */
            slaves: Device[];
        }
    }
    type DeviceOvsPort = (typeof classes.DeviceOvsPort)['prototype'];
    const DeviceOvsPort: typeof classes.DeviceOvsPort &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceOvsPort.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceOvsPort.SignalSignatures> & classes.DeviceOvsPort);
    namespace DevicePpp {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {}
    }
    type DevicePpp = (typeof classes.DevicePpp)['prototype'];
    const DevicePpp: typeof classes.DevicePpp &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DevicePpp.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DevicePpp.SignalSignatures> & classes.DevicePpp);
    namespace DeviceTeam {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::carrier'(pspec: GObject.ParamSpec): void;
            'notify::config'(pspec: GObject.ParamSpec): void;
            'notify::slaves'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Whether the device has carrier.
             */
            carrier: boolean;
            /**
             * The current JSON configuration of the device.
             */
            config: string;
            /**
             * The devices attached as port to the team device.
             */
            slaves: Device[];
        }
    }
    type DeviceTeam = (typeof classes.DeviceTeam)['prototype'];
    const DeviceTeam: typeof classes.DeviceTeam &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceTeam.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceTeam.SignalSignatures> & classes.DeviceTeam);
    namespace DeviceTun {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::group'(pspec: GObject.ParamSpec): void;
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::multi-queue'(pspec: GObject.ParamSpec): void;
            'notify::no-pi'(pspec: GObject.ParamSpec): void;
            'notify::owner'(pspec: GObject.ParamSpec): void;
            'notify::vnet-hdr'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The gid of the tunnel group, or -1 if it has no owner.
             */
            group: number;
            /**
             * The tunnel mode, either "tun" or "tap".
             */
            mode: string;
            /**
             * The tunnel's "TUN_TAP_MQ" flag; true if callers can connect to
             * the tap device multiple times, for multiple send/receive
             * queues.
             */
            multi_queue: boolean;
            /**
             * The tunnel's "TUN_TAP_MQ" flag; true if callers can connect to
             * the tap device multiple times, for multiple send/receive
             * queues.
             */
            multiQueue: boolean;
            /**
             * The tunnel's "TUN_NO_PI" flag; true if no protocol info is
             * prepended to the tunnel packets.
             */
            no_pi: boolean;
            /**
             * The tunnel's "TUN_NO_PI" flag; true if no protocol info is
             * prepended to the tunnel packets.
             */
            noPi: boolean;
            /**
             * The uid of the tunnel owner, or -1 if it has no owner.
             */
            owner: number;
            /**
             * The tunnel's "TUN_VNET_HDR" flag; true if the tunnel packets
             * include a virtio network header.
             */
            vnet_hdr: boolean;
            /**
             * The tunnel's "TUN_VNET_HDR" flag; true if the tunnel packets
             * include a virtio network header.
             */
            vnetHdr: boolean;
        }
    }
    type DeviceTun = (typeof classes.DeviceTun)['prototype'];
    const DeviceTun: typeof classes.DeviceTun &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceTun.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceTun.SignalSignatures> & classes.DeviceTun);
    namespace DeviceVeth {
        // Signal signatures
        interface SignalSignatures extends DeviceEthernet.SignalSignatures {
            'notify::peer'(pspec: GObject.ParamSpec): void;
            'notify::carrier'(pspec: GObject.ParamSpec): void;
            'notify::perm-hw-address'(pspec: GObject.ParamSpec): void;
            'notify::s390-subchannels'(pspec: GObject.ParamSpec): void;
            'notify::speed'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends DeviceEthernet.ConstructorProps {
            /**
             * The device's peer device.
             */
            peer: Device;
        }
    }
    type DeviceVeth = (typeof classes.DeviceVeth)['prototype'];
    const DeviceVeth: typeof classes.DeviceVeth &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceVeth.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceVeth.SignalSignatures> & classes.DeviceVeth);
    namespace DeviceVlan {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::carrier'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::vlan-id'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Whether the device has carrier.
             */
            carrier: boolean;
            /**
             * The devices's parent device.
             */
            parent: Device;
            /**
             * The device's VLAN ID.
             */
            vlan_id: number;
            /**
             * The device's VLAN ID.
             */
            vlanId: number;
        }
    }
    type DeviceVlan = (typeof classes.DeviceVlan)['prototype'];
    const DeviceVlan: typeof classes.DeviceVlan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceVlan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceVlan.SignalSignatures> & classes.DeviceVlan);
    namespace DeviceVrf {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::table'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The device's VRF table.
             */
            table: number;
        }
    }
    type DeviceVrf = (typeof classes.DeviceVrf)['prototype'];
    const DeviceVrf: typeof classes.DeviceVrf &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceVrf.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceVrf.SignalSignatures> & classes.DeviceVrf);
    namespace DeviceVxlan {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::ageing'(pspec: GObject.ParamSpec): void;
            'notify::carrier'(pspec: GObject.ParamSpec): void;
            'notify::dst-port'(pspec: GObject.ParamSpec): void;
            'notify::group'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::l2miss'(pspec: GObject.ParamSpec): void;
            'notify::l3miss'(pspec: GObject.ParamSpec): void;
            'notify::learning'(pspec: GObject.ParamSpec): void;
            'notify::limit'(pspec: GObject.ParamSpec): void;
            'notify::local'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::proxy'(pspec: GObject.ParamSpec): void;
            'notify::rsc'(pspec: GObject.ParamSpec): void;
            'notify::src-port-max'(pspec: GObject.ParamSpec): void;
            'notify::src-port-min'(pspec: GObject.ParamSpec): void;
            'notify::tos'(pspec: GObject.ParamSpec): void;
            'notify::ttl'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The lifetime in seconds of FDB entries learnt by the kernel.
             */
            ageing: number;
            /**
             * Whether the device has carrier.
             *
             * This property is not implemented yet, and the property is always FALSE.
             */
            carrier: boolean;
            /**
             * The UDP destination port used to communicate with the remote VXLAN tunnel
             * endpoint.
             */
            dst_port: number;
            /**
             * The UDP destination port used to communicate with the remote VXLAN tunnel
             * endpoint.
             */
            dstPort: number;
            /**
             * The unicast destination IP address used in outgoing packets when the
             * destination link layer address is not known in the VXLAN device
             * forwarding database or the multicast IP address joined.
             */
            group: string;
            /**
             * The device's VXLAN ID.
             */
            id: number;
            /**
             * Whether netlink LL ADDR miss notifications are generated.
             */
            l2miss: boolean;
            /**
             * Whether netlink IP ADDR miss notifications are generated.
             */
            l3miss: boolean;
            /**
             * Whether unknown source link layer addresses and IP addresses are entered
             * into the VXLAN device forwarding database.
             */
            learning: boolean;
            /**
             * The maximum number of entries that can be added to the forwarding table.
             */
            limit: number;
            /**
             * The source IP address to use in outgoing packets.
             */
            local: string;
            /**
             * The devices's parent device.
             */
            parent: Device;
            /**
             * Whether ARP proxy is turned on.
             */
            proxy: boolean;
            /**
             * Whether route short circuit is turned on.
             */
            rsc: boolean;
            /**
             * The maximum UDP source port used to communicate with the remote VXLAN
             * tunnel endpoint.
             */
            src_port_max: number;
            /**
             * The maximum UDP source port used to communicate with the remote VXLAN
             * tunnel endpoint.
             */
            srcPortMax: number;
            /**
             * The minimum UDP source port used to communicate with the remote VXLAN
             * tunnel endpoint.
             */
            src_port_min: number;
            /**
             * The minimum UDP source port used to communicate with the remote VXLAN
             * tunnel endpoint.
             */
            srcPortMin: number;
            /**
             * The TOS value to use in outgoing packets.
             */
            tos: number;
            /**
             * The time-to-live value to use in outgoing packets.
             */
            ttl: number;
        }
    }
    type DeviceVxlan = (typeof classes.DeviceVxlan)['prototype'];
    const DeviceVxlan: typeof classes.DeviceVxlan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceVxlan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceVxlan.SignalSignatures> & classes.DeviceVxlan);
    namespace DeviceWifi {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'access-point-added'(arg0: GObject.Object): void;
            'access-point-removed'(arg0: GObject.Object): void;
            'notify::access-points'(pspec: GObject.ParamSpec): void;
            'notify::active-access-point'(pspec: GObject.ParamSpec): void;
            'notify::bitrate'(pspec: GObject.ParamSpec): void;
            'notify::last-scan'(pspec: GObject.ParamSpec): void;
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::perm-hw-address'(pspec: GObject.ParamSpec): void;
            'notify::wireless-capabilities'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * List of all Wi-Fi access points the device can see.
             */
            access_points: AccessPoint[];
            /**
             * List of all Wi-Fi access points the device can see.
             */
            accessPoints: AccessPoint[];
            /**
             * The active #NMAccessPoint of the device.
             */
            active_access_point: AccessPoint;
            /**
             * The active #NMAccessPoint of the device.
             */
            activeAccessPoint: AccessPoint;
            /**
             * The bit rate of the device in kbit/s.
             */
            bitrate: number;
            /**
             * The timestamp (in CLOCK_BOOTTIME seconds) for the last finished
             * network scan. A value of -1 means the device never scanned for
             * access points.
             */
            last_scan: number;
            /**
             * The timestamp (in CLOCK_BOOTTIME seconds) for the last finished
             * network scan. A value of -1 means the device never scanned for
             * access points.
             */
            lastScan: number;
            /**
             * The mode of the device.
             */
            mode: __80211Mode;
            /**
             * The hardware (MAC) address of the device.
             */
            perm_hw_address: string;
            /**
             * The hardware (MAC) address of the device.
             */
            permHwAddress: string;
            /**
             * The wireless capabilities of the device.
             */
            wireless_capabilities: DeviceWifiCapabilities;
            /**
             * The wireless capabilities of the device.
             */
            wirelessCapabilities: DeviceWifiCapabilities;
        }
    }
    type DeviceWifi = (typeof classes.DeviceWifi)['prototype'];
    const DeviceWifi: typeof classes.DeviceWifi &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceWifi.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceWifi.SignalSignatures> & classes.DeviceWifi);
    namespace DeviceWifiP2P {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'peer-added'(arg0: GObject.Object): void;
            'peer-removed'(arg0: GObject.Object): void;
            'notify::peers'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * List of all Wi-Fi P2P peers the device can see.
             */
            peers: WifiP2PPeer[];
        }
    }
    type DeviceWifiP2P = (typeof classes.DeviceWifiP2P)['prototype'];
    const DeviceWifiP2P: typeof classes.DeviceWifiP2P &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceWifiP2P.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceWifiP2P.SignalSignatures> & classes.DeviceWifiP2P);
    namespace DeviceWimax {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'nsp-added'(arg0: GObject.Object): void;
            'nsp-removed'(arg0: GObject.Object): void;
            'notify::active-nsp'(pspec: GObject.ParamSpec): void;
            'notify::bsid'(pspec: GObject.ParamSpec): void;
            'notify::center-frequency'(pspec: GObject.ParamSpec): void;
            'notify::cinr'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::nsps'(pspec: GObject.ParamSpec): void;
            'notify::rssi'(pspec: GObject.ParamSpec): void;
            'notify::tx-power'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * The active #NMWimaxNsp of the device.
             */
            active_nsp: WimaxNsp;
            /**
             * The active #NMWimaxNsp of the device.
             */
            activeNsp: WimaxNsp;
            /**
             * The ID of the serving base station as received from the network.  Has
             * no meaning when the device is not connected.
             */
            bsid: string;
            /**
             * The center frequency (in KHz) of the radio channel the device is using to
             * communicate with the network when connected.  Has no meaning when the
             * device is not connected.
             */
            center_frequency: number;
            /**
             * The center frequency (in KHz) of the radio channel the device is using to
             * communicate with the network when connected.  Has no meaning when the
             * device is not connected.
             */
            centerFrequency: number;
            /**
             * CINR (Carrier to Interference + Noise Ratio) of the current radio link
             * in dB.  CINR is a more accurate measure of radio link quality.  Has no
             * meaning when the device is not connected.
             */
            cinr: number;
            /**
             * The hardware (MAC) address of the device.
             */
            hw_address: string;
            /**
             * The hardware (MAC) address of the device.
             */
            hwAddress: string;
            /**
             * List of all WiMAX Network Service Providers the device can see.
             */
            nsps: WimaxNsp[];
            /**
             * RSSI of the current radio link in dBm.  This value indicates how strong
             * the raw received RF signal from the base station is, but does not
             * indicate the overall quality of the radio link.  Has no meaning when the
             * device is not connected.
             */
            rssi: number;
            /**
             * Average power of the last burst transmitted by the device, in units of
             * 0.5 dBm.  i.e. a TxPower of -11 represents an actual device TX power of
             * -5.5 dBm.  Has no meaning when the device is not connected.
             */
            tx_power: number;
            /**
             * Average power of the last burst transmitted by the device, in units of
             * 0.5 dBm.  i.e. a TxPower of -11 represents an actual device TX power of
             * -5.5 dBm.  Has no meaning when the device is not connected.
             */
            txPower: number;
        }
    }
    type DeviceWimax = (typeof classes.DeviceWimax)['prototype'];
    const DeviceWimax: typeof classes.DeviceWimax &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceWimax.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceWimax.SignalSignatures> & classes.DeviceWimax);
    namespace DeviceWireGuard {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::fwmark'(pspec: GObject.ParamSpec): void;
            'notify::listen-port'(pspec: GObject.ParamSpec): void;
            'notify::public-key'(pspec: GObject.ParamSpec): void;
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {
            /**
             * Optional firewall mark - see ip-rule(8).
             * Used when setting routing policy for outgoing encrypted packets.
             * Set to 0 to disable the mark (default).
             */
            fwmark: number;
            /**
             * Local UDP listen port.
             * Set to 0 to allow a random port to be chosen (default).
             */
            listen_port: number;
            /**
             * Local UDP listen port.
             * Set to 0 to allow a random port to be chosen (default).
             */
            listenPort: number;
            /**
             * 32-byte public key, derived from the current private key.
             */
            public_key: GLib.Bytes;
            /**
             * 32-byte public key, derived from the current private key.
             */
            publicKey: GLib.Bytes;
        }
    }
    type DeviceWireGuard = (typeof classes.DeviceWireGuard)['prototype'];
    const DeviceWireGuard: typeof classes.DeviceWireGuard &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceWireGuard.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceWireGuard.SignalSignatures> & classes.DeviceWireGuard);
    namespace DeviceWpan {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            'notify::active-connection'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::available-connections'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::device-type'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::driver-version'(pspec: GObject.ParamSpec): void;
            'notify::firmware-missing'(pspec: GObject.ParamSpec): void;
            'notify::firmware-version'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::interface'(pspec: GObject.ParamSpec): void;
            'notify::interface-flags'(pspec: GObject.ParamSpec): void;
            'notify::ip-interface'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip4-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-connectivity'(pspec: GObject.ParamSpec): void;
            'notify::lldp-neighbors'(pspec: GObject.ParamSpec): void;
            'notify::managed'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::nm-plugin-missing'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::physical-port-id'(pspec: GObject.ParamSpec): void;
            'notify::ports'(pspec: GObject.ParamSpec): void;
            'notify::product'(pspec: GObject.ParamSpec): void;
            'notify::real'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-reason'(pspec: GObject.ParamSpec): void;
            'notify::udi'(pspec: GObject.ParamSpec): void;
            'notify::vendor'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {}
    }
    type DeviceWpan = (typeof classes.DeviceWpan)['prototype'];
    const DeviceWpan: typeof classes.DeviceWpan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DeviceWpan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DeviceWpan.SignalSignatures> & classes.DeviceWpan);
    namespace DhcpConfig {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::family'(pspec: GObject.ParamSpec): void;
            'notify::options'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The IP address family of the configuration; either
             * <literal>AF_INET</literal> or <literal>AF_INET6</literal>.
             */
            family: number;
            /**
             * The #GHashTable containing options of the configuration.
             */
            options: GLib.HashTable<string, string>;
        }
    }
    type DhcpConfig = (typeof classes.DhcpConfig)['prototype'];
    const DhcpConfig: typeof classes.DhcpConfig &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.DhcpConfig.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DhcpConfig.SignalSignatures> & classes.DhcpConfig);
    namespace IPConfig {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::addresses'(pspec: GObject.ParamSpec): void;
            'notify::domains'(pspec: GObject.ParamSpec): void;
            'notify::family'(pspec: GObject.ParamSpec): void;
            'notify::gateway'(pspec: GObject.ParamSpec): void;
            'notify::nameservers'(pspec: GObject.ParamSpec): void;
            'notify::routes'(pspec: GObject.ParamSpec): void;
            'notify::searches'(pspec: GObject.ParamSpec): void;
            'notify::wins-servers'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * A #GPtrArray containing the addresses (#NMIPAddress) of the configuration.
             */
            addresses: any[];
            /**
             * The array containing domain strings of the configuration.
             */
            domains: string[];
            /**
             * The IP address family of the configuration; either
             * <literal>AF_INET</literal> or <literal>AF_INET6</literal>.
             */
            family: number;
            /**
             * The IP gateway address of the configuration as string.
             */
            gateway: string;
            /**
             * The array containing name server IP addresses of the configuration.
             */
            nameservers: string[];
            /**
             * A #GPtrArray containing the routes (#NMIPRoute) of the configuration.
             */
            routes: IPRoute[];
            /**
             * The array containing DNS search strings of the configuration.
             */
            searches: string[];
            /**
             * The array containing WINS server IP addresses of the configuration.
             * (This will always be empty for IPv6 configurations.)
             */
            wins_servers: string[];
            /**
             * The array containing WINS server IP addresses of the configuration.
             * (This will always be empty for IPv6 configurations.)
             */
            winsServers: string[];
        }
    }
    type IPConfig = (typeof classes.IPConfig)['prototype'];
    const IPConfig: typeof classes.IPConfig &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.IPConfig.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, IPConfig.SignalSignatures> & classes.IPConfig);
    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The NMClient instance as returned by nm_object_get_client().
             *
             * When an NMObject gets removed from the NMClient cache,
             * the NMObject:path property stays unchanged, but this client
             * instance gets reset to %NULL. You can use this property to
             * track removal of the object from the cache.
             */
            client: Client;
            /**
             * The D-Bus object path.
             *
             * The D-Bus path of an object instance never changes, even if the object
             * gets removed from the cache. To see whether the object is still in the
             * cache, check NMObject:client.
             */
            path: string;
        }
    }
    type Object = (typeof classes.Object)['prototype'];
    const Object: typeof classes.Object &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.Object.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Object.SignalSignatures> & classes.Object);
    namespace RemoteConnection {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::filename'(pspec: GObject.ParamSpec): void;
            'notify::flags'(pspec: GObject.ParamSpec): void;
            'notify::unsaved'(pspec: GObject.ParamSpec): void;
            'notify::version-id'(pspec: GObject.ParamSpec): void;
            'notify::visible'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps, Connection.ConstructorProps {
            /**
             * File that stores the connection in case the connection is
             * file-backed.
             */
            filename: string;
            /**
             * The flags of the connection as unsigned integer. The values
             * correspond to the #NMSettingsConnectionFlags enum.
             */
            flags: number;
            /**
             * %TRUE if the remote connection contains changes that have not been saved
             * to disk, %FALSE if the connection is the same as its on-disk representation.
             */
            unsaved: boolean;
            /**
             * The version ID of the profile that is incremented when the profile gets modified.
             * This can be used to track concurrent modifications of the profile.
             */
            version_id: number;
            /**
             * The version ID of the profile that is incremented when the profile gets modified.
             * This can be used to track concurrent modifications of the profile.
             */
            versionId: number;
            /**
             * %TRUE if the remote connection is visible to the current user, %FALSE if
             * not.  If the connection is not visible then it is essentially useless; it
             * will not contain any settings, and operations such as
             * nm_remote_connection_save() and nm_remote_connection_delete() will always
             * fail. (#NMRemoteSettings will not normally return non-visible connections
             * to callers, but it is possible for a connection's visibility to change
             * after you already have a reference to it.)
             */
            visible: boolean;
        }
    }
    type RemoteConnection = (typeof classes.RemoteConnection)['prototype'];
    const RemoteConnection: typeof classes.RemoteConnection &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.RemoteConnection.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, RemoteConnection.SignalSignatures> & classes.RemoteConnection);
    namespace SecretAgentOld {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::auto-register'(pspec: GObject.ParamSpec): void;
            'notify::capabilities'(pspec: GObject.ParamSpec): void;
            'notify::dbus-connection'(pspec: GObject.ParamSpec): void;
            'notify::identifier'(pspec: GObject.ParamSpec): void;
            'notify::registered'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.Initable.ConstructorProps {
            /**
             * If %TRUE (the default), the agent will always be registered when
             * NetworkManager is running; if NetworkManager exits and restarts, the
             * agent will re-register itself automatically.
             *
             * In particular, if this property is %TRUE at construct time, then the
             * agent will register itself with NetworkManager during
             * construction/initialization and initialization will only complete
             * after registration is completed (either successfully or unsuccessfully).
             * Since 1.24, a failure to register will no longer cause initialization
             * of #NMSecretAgentOld to fail.
             *
             * If the property is %FALSE, the agent will not automatically register with
             * NetworkManager, and nm_secret_agent_old_enable() or
             * nm_secret_agent_old_register_async() must be called to register it.
             *
             * Calling nm_secret_agent_old_enable() has the same effect as setting this
             * property.
             */
            auto_register: boolean;
            /**
             * If %TRUE (the default), the agent will always be registered when
             * NetworkManager is running; if NetworkManager exits and restarts, the
             * agent will re-register itself automatically.
             *
             * In particular, if this property is %TRUE at construct time, then the
             * agent will register itself with NetworkManager during
             * construction/initialization and initialization will only complete
             * after registration is completed (either successfully or unsuccessfully).
             * Since 1.24, a failure to register will no longer cause initialization
             * of #NMSecretAgentOld to fail.
             *
             * If the property is %FALSE, the agent will not automatically register with
             * NetworkManager, and nm_secret_agent_old_enable() or
             * nm_secret_agent_old_register_async() must be called to register it.
             *
             * Calling nm_secret_agent_old_enable() has the same effect as setting this
             * property.
             */
            autoRegister: boolean;
            /**
             * A bitfield of %NMSecretAgentCapabilities.
             *
             * Changing this property is possible at any time. In case the secret
             * agent is currently registered, this will cause a re-registration.
             */
            capabilities: SecretAgentCapabilities;
            /**
             * The #GDBusConnection used by the instance. You may either set this
             * as construct-only property, or otherwise #NMSecretAgentOld will choose
             * a connection via g_bus_get() during initialization.
             */
            dbus_connection: Gio.DBusConnection;
            /**
             * The #GDBusConnection used by the instance. You may either set this
             * as construct-only property, or otherwise #NMSecretAgentOld will choose
             * a connection via g_bus_get() during initialization.
             */
            dbusConnection: Gio.DBusConnection;
            /**
             * Identifies this agent; only one agent in each user session may use the
             * same identifier.  Identifier formatting follows the same rules as
             * D-Bus bus names with the exception that the ':' character is not
             * allowed.  The valid set of characters is "[A-Z][a-z][0-9]_-." and the
             * identifier is limited in length to 255 characters with a minimum
             * of 3 characters.  An example valid identifier is 'org.gnome.nm-applet'
             * (without quotes).
             */
            identifier: string;
            /**
             * %TRUE if the agent is registered with NetworkManager, %FALSE if not.
             */
            registered: boolean;
        }
    }
    type SecretAgentOld = (typeof classes.SecretAgentOld)['prototype'];
    const SecretAgentOld: typeof classes.SecretAgentOld &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SecretAgentOld.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SecretAgentOld.SignalSignatures> & classes.SecretAgentOld);
    namespace Setting {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * The setting's name, which uniquely identifies the setting within the
             * connection.  Each setting type has a name unique to that type, for
             * example "ppp" or "802-11-wireless" or "802-3-ethernet".
             */
            name: string;
        }
    }
    type Setting = (typeof classes.Setting)['prototype'];
    const Setting: typeof classes.Setting &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.Setting.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Setting.SignalSignatures> & classes.Setting);
    namespace Setting6Lowpan {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * If given, specifies the parent interface name or parent connection UUID
             * from which this 6LowPAN interface should be created.
             */
            parent: string;
        }
    }
    type Setting6Lowpan = (typeof classes.Setting6Lowpan)['prototype'];
    const Setting6Lowpan: typeof classes.Setting6Lowpan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.Setting6Lowpan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Setting6Lowpan.SignalSignatures> & classes.Setting6Lowpan);
    namespace Setting8021x {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::altsubject-matches'(pspec: GObject.ParamSpec): void;
            'notify::anonymous-identity'(pspec: GObject.ParamSpec): void;
            'notify::auth-timeout'(pspec: GObject.ParamSpec): void;
            'notify::ca-cert'(pspec: GObject.ParamSpec): void;
            'notify::ca-cert-password'(pspec: GObject.ParamSpec): void;
            'notify::ca-cert-password-flags'(pspec: GObject.ParamSpec): void;
            'notify::ca-path'(pspec: GObject.ParamSpec): void;
            'notify::client-cert'(pspec: GObject.ParamSpec): void;
            'notify::client-cert-password'(pspec: GObject.ParamSpec): void;
            'notify::client-cert-password-flags'(pspec: GObject.ParamSpec): void;
            'notify::domain-match'(pspec: GObject.ParamSpec): void;
            'notify::domain-suffix-match'(pspec: GObject.ParamSpec): void;
            'notify::eap'(pspec: GObject.ParamSpec): void;
            'notify::identity'(pspec: GObject.ParamSpec): void;
            'notify::openssl-ciphers'(pspec: GObject.ParamSpec): void;
            'notify::optional'(pspec: GObject.ParamSpec): void;
            'notify::pac-file'(pspec: GObject.ParamSpec): void;
            'notify::password'(pspec: GObject.ParamSpec): void;
            'notify::password-flags'(pspec: GObject.ParamSpec): void;
            'notify::password-raw'(pspec: GObject.ParamSpec): void;
            'notify::password-raw-flags'(pspec: GObject.ParamSpec): void;
            'notify::phase1-auth-flags'(pspec: GObject.ParamSpec): void;
            'notify::phase1-fast-provisioning'(pspec: GObject.ParamSpec): void;
            'notify::phase1-peaplabel'(pspec: GObject.ParamSpec): void;
            'notify::phase1-peapver'(pspec: GObject.ParamSpec): void;
            'notify::phase2-altsubject-matches'(pspec: GObject.ParamSpec): void;
            'notify::phase2-auth'(pspec: GObject.ParamSpec): void;
            'notify::phase2-autheap'(pspec: GObject.ParamSpec): void;
            'notify::phase2-ca-cert'(pspec: GObject.ParamSpec): void;
            'notify::phase2-ca-cert-password'(pspec: GObject.ParamSpec): void;
            'notify::phase2-ca-cert-password-flags'(pspec: GObject.ParamSpec): void;
            'notify::phase2-ca-path'(pspec: GObject.ParamSpec): void;
            'notify::phase2-client-cert'(pspec: GObject.ParamSpec): void;
            'notify::phase2-client-cert-password'(pspec: GObject.ParamSpec): void;
            'notify::phase2-client-cert-password-flags'(pspec: GObject.ParamSpec): void;
            'notify::phase2-domain-match'(pspec: GObject.ParamSpec): void;
            'notify::phase2-domain-suffix-match'(pspec: GObject.ParamSpec): void;
            'notify::phase2-private-key'(pspec: GObject.ParamSpec): void;
            'notify::phase2-private-key-password'(pspec: GObject.ParamSpec): void;
            'notify::phase2-private-key-password-flags'(pspec: GObject.ParamSpec): void;
            'notify::phase2-subject-match'(pspec: GObject.ParamSpec): void;
            'notify::pin'(pspec: GObject.ParamSpec): void;
            'notify::pin-flags'(pspec: GObject.ParamSpec): void;
            'notify::private-key'(pspec: GObject.ParamSpec): void;
            'notify::private-key-password'(pspec: GObject.ParamSpec): void;
            'notify::private-key-password-flags'(pspec: GObject.ParamSpec): void;
            'notify::subject-match'(pspec: GObject.ParamSpec): void;
            'notify::system-ca-certs'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * List of strings to be matched against the altSubjectName of the
             * certificate presented by the authentication server. If the list is empty,
             * no verification of the server certificate's altSubjectName is performed.
             */
            altsubject_matches: string[];
            /**
             * List of strings to be matched against the altSubjectName of the
             * certificate presented by the authentication server. If the list is empty,
             * no verification of the server certificate's altSubjectName is performed.
             */
            altsubjectMatches: string[];
            /**
             * Anonymous identity string for EAP authentication methods.  Used as the
             * unencrypted identity with EAP types that support different tunneled
             * identity like EAP-TTLS.
             */
            anonymous_identity: string;
            /**
             * Anonymous identity string for EAP authentication methods.  Used as the
             * unencrypted identity with EAP types that support different tunneled
             * identity like EAP-TTLS.
             */
            anonymousIdentity: string;
            /**
             * A timeout for the authentication. Zero means the global default; if the
             * global default is not set, the authentication timeout is 25 seconds.
             */
            auth_timeout: number;
            /**
             * A timeout for the authentication. Zero means the global default; if the
             * global default is not set, the authentication timeout is 25 seconds.
             */
            authTimeout: number;
            /**
             * Contains the CA certificate if used by the EAP method specified in the
             * #NMSetting8021x:eap property.
             *
             * Certificate data is specified using a "scheme"; three are currently
             * supported: blob, path and pkcs#11 URL. When using the blob scheme this property
             * should be set to the certificate's DER encoded data. When using the path
             * scheme, this property should be set to the full UTF-8 encoded path of the
             * certificate, prefixed with the string "file://" and ending with a terminating
             * NUL byte.
             * This property can be unset even if the EAP method supports CA certificates,
             * but this allows man-in-the-middle attacks and is NOT recommended.
             *
             * Note that enabling NMSetting8021x:system-ca-certs will override this
             * setting to use the built-in path, if the built-in path is not a directory.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_ca_cert() function instead.
             */
            ca_cert: GLib.Bytes;
            /**
             * Contains the CA certificate if used by the EAP method specified in the
             * #NMSetting8021x:eap property.
             *
             * Certificate data is specified using a "scheme"; three are currently
             * supported: blob, path and pkcs#11 URL. When using the blob scheme this property
             * should be set to the certificate's DER encoded data. When using the path
             * scheme, this property should be set to the full UTF-8 encoded path of the
             * certificate, prefixed with the string "file://" and ending with a terminating
             * NUL byte.
             * This property can be unset even if the EAP method supports CA certificates,
             * but this allows man-in-the-middle attacks and is NOT recommended.
             *
             * Note that enabling NMSetting8021x:system-ca-certs will override this
             * setting to use the built-in path, if the built-in path is not a directory.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_ca_cert() function instead.
             */
            caCert: GLib.Bytes;
            /**
             * The password used to access the CA certificate stored in
             * #NMSetting8021x:ca-cert property. Only makes sense if the certificate
             * is stored on a PKCS#<!-- -->11 token that requires a login.
             */
            ca_cert_password: string;
            /**
             * The password used to access the CA certificate stored in
             * #NMSetting8021x:ca-cert property. Only makes sense if the certificate
             * is stored on a PKCS#<!-- -->11 token that requires a login.
             */
            caCertPassword: string;
            /**
             * Flags indicating how to handle the #NMSetting8021x:ca-cert-password property.
             */
            ca_cert_password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSetting8021x:ca-cert-password property.
             */
            caCertPasswordFlags: SettingSecretFlags;
            /**
             * UTF-8 encoded path to a directory containing PEM or DER formatted
             * certificates to be added to the verification chain in addition to the
             * certificate specified in the #NMSetting8021x:ca-cert property.
             *
             * If NMSetting8021x:system-ca-certs is enabled and the built-in CA
             * path is an existing directory, then this setting is ignored.
             */
            ca_path: string;
            /**
             * UTF-8 encoded path to a directory containing PEM or DER formatted
             * certificates to be added to the verification chain in addition to the
             * certificate specified in the #NMSetting8021x:ca-cert property.
             *
             * If NMSetting8021x:system-ca-certs is enabled and the built-in CA
             * path is an existing directory, then this setting is ignored.
             */
            caPath: string;
            /**
             * Contains the client certificate if used by the EAP method specified in
             * the #NMSetting8021x:eap property.
             *
             * Certificate data is specified using a "scheme"; two are currently
             * supported: blob and path. When using the blob scheme (which is backwards
             * compatible with NM 0.7.x) this property should be set to the
             * certificate's DER encoded data. When using the path scheme, this property
             * should be set to the full UTF-8 encoded path of the certificate, prefixed
             * with the string "file://" and ending with a terminating NUL byte.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_client_cert() function instead.
             */
            client_cert: GLib.Bytes;
            /**
             * Contains the client certificate if used by the EAP method specified in
             * the #NMSetting8021x:eap property.
             *
             * Certificate data is specified using a "scheme"; two are currently
             * supported: blob and path. When using the blob scheme (which is backwards
             * compatible with NM 0.7.x) this property should be set to the
             * certificate's DER encoded data. When using the path scheme, this property
             * should be set to the full UTF-8 encoded path of the certificate, prefixed
             * with the string "file://" and ending with a terminating NUL byte.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_client_cert() function instead.
             */
            clientCert: GLib.Bytes;
            /**
             * The password used to access the client certificate stored in
             * #NMSetting8021x:client-cert property. Only makes sense if the certificate
             * is stored on a PKCS#<!-- -->11 token that requires a login.
             */
            client_cert_password: string;
            /**
             * The password used to access the client certificate stored in
             * #NMSetting8021x:client-cert property. Only makes sense if the certificate
             * is stored on a PKCS#<!-- -->11 token that requires a login.
             */
            clientCertPassword: string;
            /**
             * Flags indicating how to handle the #NMSetting8021x:client-cert-password property.
             */
            client_cert_password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSetting8021x:client-cert-password property.
             */
            clientCertPasswordFlags: SettingSecretFlags;
            /**
             * Constraint for server domain name. If set, this list of FQDNs is used as
             * a match requirement for dNSName element(s) of the certificate presented
             * by the authentication server.  If a matching dNSName is found, this
             * constraint is met.  If no dNSName values are present, this constraint is
             * matched against SubjectName CN using the same comparison.
             * Multiple valid FQDNs can be passed as a ";" delimited list.
             */
            domain_match: string;
            /**
             * Constraint for server domain name. If set, this list of FQDNs is used as
             * a match requirement for dNSName element(s) of the certificate presented
             * by the authentication server.  If a matching dNSName is found, this
             * constraint is met.  If no dNSName values are present, this constraint is
             * matched against SubjectName CN using the same comparison.
             * Multiple valid FQDNs can be passed as a ";" delimited list.
             */
            domainMatch: string;
            /**
             * Constraint for server domain name. If set, this FQDN is used as a suffix
             * match requirement for dNSName element(s) of the certificate presented by
             * the authentication server.  If a matching dNSName is found, this
             * constraint is met.  If no dNSName values are present, this constraint is
             * matched against SubjectName CN using same suffix match comparison.
             * Since version 1.24, multiple valid FQDNs can be passed as a ";" delimited
             * list.
             */
            domain_suffix_match: string;
            /**
             * Constraint for server domain name. If set, this FQDN is used as a suffix
             * match requirement for dNSName element(s) of the certificate presented by
             * the authentication server.  If a matching dNSName is found, this
             * constraint is met.  If no dNSName values are present, this constraint is
             * matched against SubjectName CN using same suffix match comparison.
             * Since version 1.24, multiple valid FQDNs can be passed as a ";" delimited
             * list.
             */
            domainSuffixMatch: string;
            /**
             * The allowed EAP method to be used when authenticating to the network with
             * 802.1x.  Valid methods are: "leap", "md5", "tls", "peap", "ttls", "pwd",
             * and "fast".  Each method requires different configuration using the
             * properties of this setting; refer to wpa_supplicant documentation for the
             * allowed combinations.
             */
            eap: string[];
            /**
             * Identity string for EAP authentication methods.  Often the user's user or
             * login name.
             */
            identity: string;
            /**
             * Define openssl_ciphers for wpa_supplicant. Openssl sometimes moves ciphers
             * among SECLEVELs, thus compiled-in default value in wpa_supplicant
             * (as modified by some linux distributions) sometimes prevents
             * to connect to old servers that do not support new protocols.
             */
            openssl_ciphers: string;
            /**
             * Define openssl_ciphers for wpa_supplicant. Openssl sometimes moves ciphers
             * among SECLEVELs, thus compiled-in default value in wpa_supplicant
             * (as modified by some linux distributions) sometimes prevents
             * to connect to old servers that do not support new protocols.
             */
            opensslCiphers: string;
            /**
             * Whether the 802.1X authentication is optional. If %TRUE, the activation
             * will continue even after a timeout or an authentication failure. Setting
             * the property to %TRUE is currently allowed only for Ethernet connections.
             * If set to %FALSE, the activation can continue only after a successful
             * authentication.
             */
            optional: boolean;
            /**
             * UTF-8 encoded file path containing PAC for EAP-FAST.
             */
            pac_file: string;
            /**
             * UTF-8 encoded file path containing PAC for EAP-FAST.
             */
            pacFile: string;
            /**
             * UTF-8 encoded password used for EAP authentication methods. If both the
             * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
             * property are specified, #NMSetting8021x:password is preferred.
             */
            password: string;
            /**
             * Flags indicating how to handle the #NMSetting8021x:password property.
             */
            password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSetting8021x:password property.
             */
            passwordFlags: SettingSecretFlags;
            /**
             * Password used for EAP authentication methods, given as a byte array to
             * allow passwords in other encodings than UTF-8 to be used. If both the
             * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
             * property are specified, #NMSetting8021x:password is preferred.
             */
            password_raw: GLib.Bytes;
            /**
             * Password used for EAP authentication methods, given as a byte array to
             * allow passwords in other encodings than UTF-8 to be used. If both the
             * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
             * property are specified, #NMSetting8021x:password is preferred.
             */
            passwordRaw: GLib.Bytes;
            /**
             * Flags indicating how to handle the #NMSetting8021x:password-raw property.
             */
            password_raw_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSetting8021x:password-raw property.
             */
            passwordRawFlags: SettingSecretFlags;
            /**
             * Specifies authentication flags to use in "phase 1" outer
             * authentication using #NMSetting8021xAuthFlags options.
             * The individual TLS versions can be explicitly disabled. TLS time checks
             * can be also disabled. If a certain TLS disable flag is not
             * set, it is up to the supplicant to allow or forbid it. The TLS options
             * map to tls_disable_tlsv1_x and tls_disable_time_checks settings.
             * See the wpa_supplicant documentation for more details.
             */
            phase1_auth_flags: number;
            /**
             * Specifies authentication flags to use in "phase 1" outer
             * authentication using #NMSetting8021xAuthFlags options.
             * The individual TLS versions can be explicitly disabled. TLS time checks
             * can be also disabled. If a certain TLS disable flag is not
             * set, it is up to the supplicant to allow or forbid it. The TLS options
             * map to tls_disable_tlsv1_x and tls_disable_time_checks settings.
             * See the wpa_supplicant documentation for more details.
             */
            phase1AuthFlags: number;
            /**
             * Enables or disables in-line provisioning of EAP-FAST credentials when
             * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
             * Recognized values are "0" (disabled), "1" (allow unauthenticated
             * provisioning), "2" (allow authenticated provisioning), and "3" (allow
             * both authenticated and unauthenticated provisioning).  See the
             * wpa_supplicant documentation for more details.
             */
            phase1_fast_provisioning: string;
            /**
             * Enables or disables in-line provisioning of EAP-FAST credentials when
             * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
             * Recognized values are "0" (disabled), "1" (allow unauthenticated
             * provisioning), "2" (allow authenticated provisioning), and "3" (allow
             * both authenticated and unauthenticated provisioning).  See the
             * wpa_supplicant documentation for more details.
             */
            phase1FastProvisioning: string;
            /**
             * Forces use of the new PEAP label during key derivation.  Some RADIUS
             * servers may require forcing the new PEAP label to interoperate with
             * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
             * wpa_supplicant documentation for more details.
             */
            phase1_peaplabel: string;
            /**
             * Forces use of the new PEAP label during key derivation.  Some RADIUS
             * servers may require forcing the new PEAP label to interoperate with
             * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
             * wpa_supplicant documentation for more details.
             */
            phase1Peaplabel: string;
            /**
             * Forces which PEAP version is used when PEAP is set as the EAP method in
             * the #NMSetting8021x:eap property.  When unset, the version reported by
             * the server will be used.  Sometimes when using older RADIUS servers, it
             * is necessary to force the client to use a particular PEAP version.  To do
             * so, this property may be set to "0" or "1" to force that specific PEAP
             * version.
             */
            phase1_peapver: string;
            /**
             * Forces which PEAP version is used when PEAP is set as the EAP method in
             * the #NMSetting8021x:eap property.  When unset, the version reported by
             * the server will be used.  Sometimes when using older RADIUS servers, it
             * is necessary to force the client to use a particular PEAP version.  To do
             * so, this property may be set to "0" or "1" to force that specific PEAP
             * version.
             */
            phase1Peapver: string;
            /**
             * List of strings to be matched against the altSubjectName of the
             * certificate presented by the authentication server during the inner
             * "phase 2" authentication. If the list is empty, no verification of the
             * server certificate's altSubjectName is performed.
             */
            phase2_altsubject_matches: string[];
            /**
             * List of strings to be matched against the altSubjectName of the
             * certificate presented by the authentication server during the inner
             * "phase 2" authentication. If the list is empty, no verification of the
             * server certificate's altSubjectName is performed.
             */
            phase2AltsubjectMatches: string[];
            /**
             * Specifies the allowed "phase 2" inner authentication method when an EAP
             * method that uses an inner TLS tunnel is specified in the #NMSetting8021x:eap
             * property.  For TTLS this property selects one of the supported non-EAP
             * inner methods: "pap", "chap", "mschap", "mschapv2" while
             * #NMSetting8021x:phase2-autheap selects an EAP inner method.  For PEAP
             * this selects an inner EAP method, one of: "gtc", "otp", "md5" and "tls".
             * Each "phase 2" inner method requires specific parameters for successful
             * authentication; see the wpa_supplicant documentation for more details.
             * Both #NMSetting8021x:phase2-auth and #NMSetting8021x:phase2-autheap cannot
             * be specified.
             */
            phase2_auth: string;
            /**
             * Specifies the allowed "phase 2" inner authentication method when an EAP
             * method that uses an inner TLS tunnel is specified in the #NMSetting8021x:eap
             * property.  For TTLS this property selects one of the supported non-EAP
             * inner methods: "pap", "chap", "mschap", "mschapv2" while
             * #NMSetting8021x:phase2-autheap selects an EAP inner method.  For PEAP
             * this selects an inner EAP method, one of: "gtc", "otp", "md5" and "tls".
             * Each "phase 2" inner method requires specific parameters for successful
             * authentication; see the wpa_supplicant documentation for more details.
             * Both #NMSetting8021x:phase2-auth and #NMSetting8021x:phase2-autheap cannot
             * be specified.
             */
            phase2Auth: string;
            /**
             * Specifies the allowed "phase 2" inner EAP-based authentication method
             * when TTLS is specified in the #NMSetting8021x:eap property.  Recognized
             * EAP-based "phase 2" methods are "md5", "mschapv2", "otp", "gtc", and
             * "tls". Each "phase 2" inner method requires specific parameters for
             * successful authentication; see the wpa_supplicant documentation for
             * more details.
             */
            phase2_autheap: string;
            /**
             * Specifies the allowed "phase 2" inner EAP-based authentication method
             * when TTLS is specified in the #NMSetting8021x:eap property.  Recognized
             * EAP-based "phase 2" methods are "md5", "mschapv2", "otp", "gtc", and
             * "tls". Each "phase 2" inner method requires specific parameters for
             * successful authentication; see the wpa_supplicant documentation for
             * more details.
             */
            phase2Autheap: string;
            /**
             * Contains the "phase 2" CA certificate if used by the EAP method specified
             * in the #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap
             * properties.
             *
             * Certificate data is specified using a "scheme"; three are currently
             * supported: blob, path and pkcs#11 URL. When using the blob scheme this property
             * should be set to the certificate's DER encoded data. When using the path
             * scheme, this property should be set to the full UTF-8 encoded path of the
             * certificate, prefixed with the string "file://" and ending with a terminating
             * NUL byte.
             * This property can be unset even if the EAP method supports CA certificates,
             * but this allows man-in-the-middle attacks and is NOT recommended.
             *
             * Note that enabling NMSetting8021x:system-ca-certs will override this
             * setting to use the built-in path, if the built-in path is not a directory.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_phase2_ca_cert() function instead.
             */
            phase2_ca_cert: GLib.Bytes;
            /**
             * Contains the "phase 2" CA certificate if used by the EAP method specified
             * in the #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap
             * properties.
             *
             * Certificate data is specified using a "scheme"; three are currently
             * supported: blob, path and pkcs#11 URL. When using the blob scheme this property
             * should be set to the certificate's DER encoded data. When using the path
             * scheme, this property should be set to the full UTF-8 encoded path of the
             * certificate, prefixed with the string "file://" and ending with a terminating
             * NUL byte.
             * This property can be unset even if the EAP method supports CA certificates,
             * but this allows man-in-the-middle attacks and is NOT recommended.
             *
             * Note that enabling NMSetting8021x:system-ca-certs will override this
             * setting to use the built-in path, if the built-in path is not a directory.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_phase2_ca_cert() function instead.
             */
            phase2CaCert: GLib.Bytes;
            /**
             * The password used to access the "phase2" CA certificate stored in
             * #NMSetting8021x:phase2-ca-cert property. Only makes sense if the certificate
             * is stored on a PKCS#<!-- -->11 token that requires a login.
             */
            phase2_ca_cert_password: string;
            /**
             * The password used to access the "phase2" CA certificate stored in
             * #NMSetting8021x:phase2-ca-cert property. Only makes sense if the certificate
             * is stored on a PKCS#<!-- -->11 token that requires a login.
             */
            phase2CaCertPassword: string;
            /**
             * Flags indicating how to handle the #NMSetting8021x:phase2-ca-cert-password property.
             */
            phase2_ca_cert_password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSetting8021x:phase2-ca-cert-password property.
             */
            phase2CaCertPasswordFlags: SettingSecretFlags;
            /**
             * UTF-8 encoded path to a directory containing PEM or DER formatted
             * certificates to be added to the verification chain in addition to the
             * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
             *
             * If NMSetting8021x:system-ca-certs is enabled and the built-in CA
             * path is an existing directory, then this setting is ignored.
             */
            phase2_ca_path: string;
            /**
             * UTF-8 encoded path to a directory containing PEM or DER formatted
             * certificates to be added to the verification chain in addition to the
             * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
             *
             * If NMSetting8021x:system-ca-certs is enabled and the built-in CA
             * path is an existing directory, then this setting is ignored.
             */
            phase2CaPath: string;
            /**
             * Contains the "phase 2" client certificate if used by the EAP method
             * specified in the #NMSetting8021x:phase2-auth or
             * #NMSetting8021x:phase2-autheap properties.
             *
             * Certificate data is specified using a "scheme"; two are currently
             * supported: blob and path. When using the blob scheme (which is backwards
             * compatible with NM 0.7.x) this property should be set to the
             * certificate's DER encoded data. When using the path scheme, this property
             * should be set to the full UTF-8 encoded path of the certificate, prefixed
             * with the string "file://" and ending with a terminating NUL byte. This
             * property can be unset even if the EAP method supports CA certificates,
             * but this allows man-in-the-middle attacks and is NOT recommended.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_phase2_client_cert() function instead.
             */
            phase2_client_cert: GLib.Bytes;
            /**
             * Contains the "phase 2" client certificate if used by the EAP method
             * specified in the #NMSetting8021x:phase2-auth or
             * #NMSetting8021x:phase2-autheap properties.
             *
             * Certificate data is specified using a "scheme"; two are currently
             * supported: blob and path. When using the blob scheme (which is backwards
             * compatible with NM 0.7.x) this property should be set to the
             * certificate's DER encoded data. When using the path scheme, this property
             * should be set to the full UTF-8 encoded path of the certificate, prefixed
             * with the string "file://" and ending with a terminating NUL byte. This
             * property can be unset even if the EAP method supports CA certificates,
             * but this allows man-in-the-middle attacks and is NOT recommended.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_phase2_client_cert() function instead.
             */
            phase2ClientCert: GLib.Bytes;
            /**
             * The password used to access the "phase2" client certificate stored in
             * #NMSetting8021x:phase2-client-cert property. Only makes sense if the certificate
             * is stored on a PKCS#<!-- -->11 token that requires a login.
             */
            phase2_client_cert_password: string;
            /**
             * The password used to access the "phase2" client certificate stored in
             * #NMSetting8021x:phase2-client-cert property. Only makes sense if the certificate
             * is stored on a PKCS#<!-- -->11 token that requires a login.
             */
            phase2ClientCertPassword: string;
            /**
             * Flags indicating how to handle the #NMSetting8021x:phase2-client-cert-password property.
             */
            phase2_client_cert_password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSetting8021x:phase2-client-cert-password property.
             */
            phase2ClientCertPasswordFlags: SettingSecretFlags;
            /**
             * Constraint for server domain name. If set, this list of FQDNs is used as
             * a match requirement for dNSName element(s) of the certificate presented
             * by the authentication server during the inner "phase 2" authentication.
             * If a matching dNSName is found, this constraint is met.  If no dNSName
             * values are present, this constraint is matched against SubjectName CN
             * using the same comparison.
             * Multiple valid FQDNs can be passed as a ";" delimited list.
             */
            phase2_domain_match: string;
            /**
             * Constraint for server domain name. If set, this list of FQDNs is used as
             * a match requirement for dNSName element(s) of the certificate presented
             * by the authentication server during the inner "phase 2" authentication.
             * If a matching dNSName is found, this constraint is met.  If no dNSName
             * values are present, this constraint is matched against SubjectName CN
             * using the same comparison.
             * Multiple valid FQDNs can be passed as a ";" delimited list.
             */
            phase2DomainMatch: string;
            /**
             * Constraint for server domain name. If set, this FQDN is used as a suffix
             * match requirement for dNSName element(s) of the certificate presented by
             * the authentication server during the inner "phase 2" authentication.  If
             * a matching dNSName is found, this constraint is met.  If no dNSName
             * values are present, this constraint is matched against SubjectName CN
             * using same suffix match comparison.
             * Since version 1.24, multiple valid FQDNs can be passed as a ";" delimited
             * list.
             */
            phase2_domain_suffix_match: string;
            /**
             * Constraint for server domain name. If set, this FQDN is used as a suffix
             * match requirement for dNSName element(s) of the certificate presented by
             * the authentication server during the inner "phase 2" authentication.  If
             * a matching dNSName is found, this constraint is met.  If no dNSName
             * values are present, this constraint is matched against SubjectName CN
             * using same suffix match comparison.
             * Since version 1.24, multiple valid FQDNs can be passed as a ";" delimited
             * list.
             */
            phase2DomainSuffixMatch: string;
            /**
             * Contains the "phase 2" inner private key when the
             * #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap property is
             * set to "tls".
             *
             * Key data is specified using a "scheme"; two are currently supported: blob
             * and path. When using the blob scheme and private keys, this property
             * should be set to the key's encrypted PEM encoded data. When using private
             * keys with the path scheme, this property should be set to the full UTF-8
             * encoded path of the key, prefixed with the string "file://" and ending
             * with a terminating NUL byte. When using PKCS#<!-- -->12 format private
             * keys and the blob scheme, this property should be set to the
             * PKCS#<!-- -->12 data and the #NMSetting8021x:phase2-private-key-password
             * property must be set to password used to decrypt the PKCS#<!-- -->12
             * certificate and key. When using PKCS#<!-- -->12 files and the path
             * scheme, this property should be set to the full UTF-8 encoded path of the
             * key, prefixed with the string "file://" and ending with a terminating
             * NUL byte, and as with the blob scheme the
             * #NMSetting8021x:phase2-private-key-password property must be set to the
             * password used to decode the PKCS#<!-- -->12 private key and certificate.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_phase2_private_key() function instead.
             */
            phase2_private_key: GLib.Bytes;
            /**
             * Contains the "phase 2" inner private key when the
             * #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap property is
             * set to "tls".
             *
             * Key data is specified using a "scheme"; two are currently supported: blob
             * and path. When using the blob scheme and private keys, this property
             * should be set to the key's encrypted PEM encoded data. When using private
             * keys with the path scheme, this property should be set to the full UTF-8
             * encoded path of the key, prefixed with the string "file://" and ending
             * with a terminating NUL byte. When using PKCS#<!-- -->12 format private
             * keys and the blob scheme, this property should be set to the
             * PKCS#<!-- -->12 data and the #NMSetting8021x:phase2-private-key-password
             * property must be set to password used to decrypt the PKCS#<!-- -->12
             * certificate and key. When using PKCS#<!-- -->12 files and the path
             * scheme, this property should be set to the full UTF-8 encoded path of the
             * key, prefixed with the string "file://" and ending with a terminating
             * NUL byte, and as with the blob scheme the
             * #NMSetting8021x:phase2-private-key-password property must be set to the
             * password used to decode the PKCS#<!-- -->12 private key and certificate.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_phase2_private_key() function instead.
             */
            phase2PrivateKey: GLib.Bytes;
            /**
             * The password used to decrypt the "phase 2" private key specified in the
             * #NMSetting8021x:phase2-private-key property when the private key either
             * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this
             * property directly is not generally necessary except when returning
             * secrets to NetworkManager; it is generally set automatically when setting
             * the private key by the nm_setting_802_1x_set_phase2_private_key()
             * function.
             */
            phase2_private_key_password: string;
            /**
             * The password used to decrypt the "phase 2" private key specified in the
             * #NMSetting8021x:phase2-private-key property when the private key either
             * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this
             * property directly is not generally necessary except when returning
             * secrets to NetworkManager; it is generally set automatically when setting
             * the private key by the nm_setting_802_1x_set_phase2_private_key()
             * function.
             */
            phase2PrivateKeyPassword: string;
            /**
             * Flags indicating how to handle the
             * #NMSetting8021x:phase2-private-key-password property.
             */
            phase2_private_key_password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the
             * #NMSetting8021x:phase2-private-key-password property.
             */
            phase2PrivateKeyPasswordFlags: SettingSecretFlags;
            /**
             * Substring to be matched against the subject of the certificate presented
             * by the authentication server during the inner "phase 2"
             * authentication. When unset, no verification of the authentication server
             * certificate's subject is performed. This property provides little security,
             * if any, and should not be used.
             */
            phase2_subject_match: string;
            /**
             * Substring to be matched against the subject of the certificate presented
             * by the authentication server during the inner "phase 2"
             * authentication. When unset, no verification of the authentication server
             * certificate's subject is performed. This property provides little security,
             * if any, and should not be used.
             */
            phase2SubjectMatch: string;
            /**
             * PIN used for EAP authentication methods.
             */
            pin: string;
            /**
             * Flags indicating how to handle the #NMSetting8021x:pin property.
             */
            pin_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSetting8021x:pin property.
             */
            pinFlags: SettingSecretFlags;
            /**
             * Contains the private key when the #NMSetting8021x:eap property is set to
             * "tls".
             *
             * Key data is specified using a "scheme"; two are currently supported: blob
             * and path. When using the blob scheme and private keys, this property
             * should be set to the key's encrypted PEM encoded data. When using private
             * keys with the path scheme, this property should be set to the full UTF-8
             * encoded path of the key, prefixed with the string "file://" and ending
             * with a terminating NUL byte. When using PKCS#<!-- -->12 format private
             * keys and the blob scheme, this property should be set to the
             * PKCS#<!-- -->12 data and the #NMSetting8021x:private-key-password
             * property must be set to password used to decrypt the PKCS#<!-- -->12
             * certificate and key. When using PKCS#<!-- -->12 files and the path
             * scheme, this property should be set to the full UTF-8 encoded path of the
             * key, prefixed with the string "file://" and ending with a terminating
             * NUL byte, and as with the blob scheme the "private-key-password" property
             * must be set to the password used to decode the PKCS#<!-- -->12 private
             * key and certificate.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_private_key() function instead.
             *
             * WARNING: #NMSetting8021x:private-key is not a "secret" property, and thus
             * unencrypted private key data using the BLOB scheme may be readable by
             * unprivileged users.  Private keys should always be encrypted with a
             * private key password to prevent unauthorized access to unencrypted
             * private key data.
             */
            private_key: GLib.Bytes;
            /**
             * Contains the private key when the #NMSetting8021x:eap property is set to
             * "tls".
             *
             * Key data is specified using a "scheme"; two are currently supported: blob
             * and path. When using the blob scheme and private keys, this property
             * should be set to the key's encrypted PEM encoded data. When using private
             * keys with the path scheme, this property should be set to the full UTF-8
             * encoded path of the key, prefixed with the string "file://" and ending
             * with a terminating NUL byte. When using PKCS#<!-- -->12 format private
             * keys and the blob scheme, this property should be set to the
             * PKCS#<!-- -->12 data and the #NMSetting8021x:private-key-password
             * property must be set to password used to decrypt the PKCS#<!-- -->12
             * certificate and key. When using PKCS#<!-- -->12 files and the path
             * scheme, this property should be set to the full UTF-8 encoded path of the
             * key, prefixed with the string "file://" and ending with a terminating
             * NUL byte, and as with the blob scheme the "private-key-password" property
             * must be set to the password used to decode the PKCS#<!-- -->12 private
             * key and certificate.
             *
             * Setting this property directly is discouraged; use the
             * nm_setting_802_1x_set_private_key() function instead.
             *
             * WARNING: #NMSetting8021x:private-key is not a "secret" property, and thus
             * unencrypted private key data using the BLOB scheme may be readable by
             * unprivileged users.  Private keys should always be encrypted with a
             * private key password to prevent unauthorized access to unencrypted
             * private key data.
             */
            privateKey: GLib.Bytes;
            /**
             * The password used to decrypt the private key specified in the
             * #NMSetting8021x:private-key property when the private key either uses the
             * path scheme, or if the private key is a PKCS#<!-- -->12 format key.  Setting this
             * property directly is not generally necessary except when returning
             * secrets to NetworkManager; it is generally set automatically when setting
             * the private key by the nm_setting_802_1x_set_private_key() function.
             */
            private_key_password: string;
            /**
             * The password used to decrypt the private key specified in the
             * #NMSetting8021x:private-key property when the private key either uses the
             * path scheme, or if the private key is a PKCS#<!-- -->12 format key.  Setting this
             * property directly is not generally necessary except when returning
             * secrets to NetworkManager; it is generally set automatically when setting
             * the private key by the nm_setting_802_1x_set_private_key() function.
             */
            privateKeyPassword: string;
            /**
             * Flags indicating how to handle the #NMSetting8021x:private-key-password
             * property.
             */
            private_key_password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSetting8021x:private-key-password
             * property.
             */
            privateKeyPasswordFlags: SettingSecretFlags;
            /**
             * Substring to be matched against the subject of the certificate presented
             * by the authentication server. When unset, no verification of the
             * authentication server certificate's subject is performed. This property
             * provides little security, if any, and should not be used.
             */
            subject_match: string;
            /**
             * Substring to be matched against the subject of the certificate presented
             * by the authentication server. When unset, no verification of the
             * authentication server certificate's subject is performed. This property
             * provides little security, if any, and should not be used.
             */
            subjectMatch: string;
            /**
             * When %TRUE, overrides the #NMSetting8021x:ca-path and
             * #NMSetting8021x:phase2-ca-path properties using the system CA directory
             * specified at configure time with the --system-ca-path switch.  The
             * certificates in this directory are added to the verification chain in
             * addition to any certificates specified by the #NMSetting8021x:ca-cert and
             * #NMSetting8021x:phase2-ca-cert properties. If the path provided with
             * --system-ca-path is rather a file name (bundle of trusted CA certificates),
             * it overrides #NMSetting8021x:ca-cert and #NMSetting8021x:phase2-ca-cert
             * properties instead (sets ca_cert/ca_cert2 options for wpa_supplicant).
             */
            system_ca_certs: boolean;
            /**
             * When %TRUE, overrides the #NMSetting8021x:ca-path and
             * #NMSetting8021x:phase2-ca-path properties using the system CA directory
             * specified at configure time with the --system-ca-path switch.  The
             * certificates in this directory are added to the verification chain in
             * addition to any certificates specified by the #NMSetting8021x:ca-cert and
             * #NMSetting8021x:phase2-ca-cert properties. If the path provided with
             * --system-ca-path is rather a file name (bundle of trusted CA certificates),
             * it overrides #NMSetting8021x:ca-cert and #NMSetting8021x:phase2-ca-cert
             * properties instead (sets ca_cert/ca_cert2 options for wpa_supplicant).
             */
            systemCaCerts: boolean;
        }
    }
    type Setting8021x = (typeof classes.Setting8021x)['prototype'];
    const Setting8021x: typeof classes.Setting8021x &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.Setting8021x.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Setting8021x.SignalSignatures> & classes.Setting8021x);
    namespace SettingAdsl {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::encapsulation'(pspec: GObject.ParamSpec): void;
            'notify::password'(pspec: GObject.ParamSpec): void;
            'notify::password-flags'(pspec: GObject.ParamSpec): void;
            'notify::protocol'(pspec: GObject.ParamSpec): void;
            'notify::username'(pspec: GObject.ParamSpec): void;
            'notify::vci'(pspec: GObject.ParamSpec): void;
            'notify::vpi'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Encapsulation of ADSL connection.  Can be "vcmux" or "llc".
             */
            encapsulation: string;
            /**
             * Password used to authenticate with the ADSL service.
             */
            password: string;
            /**
             * Flags indicating how to handle the #NMSettingAdsl:password property.
             */
            password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingAdsl:password property.
             */
            passwordFlags: SettingSecretFlags;
            /**
             * ADSL connection protocol.  Can be "pppoa", "pppoe" or "ipoatm".
             */
            protocol: string;
            /**
             * Username used to authenticate with the ADSL service.
             */
            username: string;
            /**
             * VCI of ADSL connection
             */
            vci: number;
            /**
             * VPI of ADSL connection
             */
            vpi: number;
        }
    }
    type SettingAdsl = (typeof classes.SettingAdsl)['prototype'];
    const SettingAdsl: typeof classes.SettingAdsl &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingAdsl.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingAdsl.SignalSignatures> & classes.SettingAdsl);
    namespace SettingBluetooth {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::bdaddr'(pspec: GObject.ParamSpec): void;
            'notify::type'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The Bluetooth address of the device.
             */
            bdaddr: string;
            /**
             * Either "dun" for Dial-Up Networking connections or "panu" for Personal
             * Area Networking connections to devices supporting the NAP profile.
             */
            type: string;
        }
    }
    type SettingBluetooth = (typeof classes.SettingBluetooth)['prototype'];
    const SettingBluetooth: typeof classes.SettingBluetooth &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingBluetooth.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingBluetooth.SignalSignatures> & classes.SettingBluetooth);
    namespace SettingBond {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::options'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Dictionary of key/value pairs of bonding options.  Both keys and values
             * must be strings. Option names must contain only alphanumeric characters
             * (ie, [a-zA-Z0-9]).
             */
            options: GLib.HashTable<string, string>;
        }
    }
    type SettingBond = (typeof classes.SettingBond)['prototype'];
    const SettingBond: typeof classes.SettingBond &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingBond.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingBond.SignalSignatures> & classes.SettingBond);
    namespace SettingBondPort {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::prio'(pspec: GObject.ParamSpec): void;
            'notify::queue-id'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The port priority for bond active port re-selection during failover. A
             * higher number means a higher priority in selection. The primary port has
             * the highest priority. This option is only compatible with active-backup,
             * balance-tlb and balance-alb modes.
             */
            prio: number;
            /**
             * The queue ID of this bond port. The maximum value of queue ID is
             * the number of TX queues currently active in device.
             */
            queue_id: number;
            /**
             * The queue ID of this bond port. The maximum value of queue ID is
             * the number of TX queues currently active in device.
             */
            queueId: number;
        }
    }
    type SettingBondPort = (typeof classes.SettingBondPort)['prototype'];
    const SettingBondPort: typeof classes.SettingBondPort &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingBondPort.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingBondPort.SignalSignatures> & classes.SettingBondPort);
    namespace SettingBridge {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::ageing-time'(pspec: GObject.ParamSpec): void;
            'notify::forward-delay'(pspec: GObject.ParamSpec): void;
            'notify::group-address'(pspec: GObject.ParamSpec): void;
            'notify::group-forward-mask'(pspec: GObject.ParamSpec): void;
            'notify::hello-time'(pspec: GObject.ParamSpec): void;
            'notify::mac-address'(pspec: GObject.ParamSpec): void;
            'notify::max-age'(pspec: GObject.ParamSpec): void;
            'notify::multicast-hash-max'(pspec: GObject.ParamSpec): void;
            'notify::multicast-last-member-count'(pspec: GObject.ParamSpec): void;
            'notify::multicast-last-member-interval'(pspec: GObject.ParamSpec): void;
            'notify::multicast-membership-interval'(pspec: GObject.ParamSpec): void;
            'notify::multicast-querier'(pspec: GObject.ParamSpec): void;
            'notify::multicast-querier-interval'(pspec: GObject.ParamSpec): void;
            'notify::multicast-query-interval'(pspec: GObject.ParamSpec): void;
            'notify::multicast-query-response-interval'(pspec: GObject.ParamSpec): void;
            'notify::multicast-query-use-ifaddr'(pspec: GObject.ParamSpec): void;
            'notify::multicast-router'(pspec: GObject.ParamSpec): void;
            'notify::multicast-snooping'(pspec: GObject.ParamSpec): void;
            'notify::multicast-startup-query-count'(pspec: GObject.ParamSpec): void;
            'notify::multicast-startup-query-interval'(pspec: GObject.ParamSpec): void;
            'notify::priority'(pspec: GObject.ParamSpec): void;
            'notify::stp'(pspec: GObject.ParamSpec): void;
            'notify::vlan-default-pvid'(pspec: GObject.ParamSpec): void;
            'notify::vlan-filtering'(pspec: GObject.ParamSpec): void;
            'notify::vlan-protocol'(pspec: GObject.ParamSpec): void;
            'notify::vlan-stats-enabled'(pspec: GObject.ParamSpec): void;
            'notify::vlans'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The Ethernet MAC address aging time, in seconds.
             */
            ageing_time: number;
            /**
             * The Ethernet MAC address aging time, in seconds.
             */
            ageingTime: number;
            /**
             * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
             */
            forward_delay: number;
            /**
             * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
             */
            forwardDelay: number;
            /**
             * If specified, The MAC address of the multicast group this bridge uses for STP.
             *
             * The address must be a link-local address in standard Ethernet MAC address format,
             * ie an address of the form 01:80:C2:00:00:0X, with X in [0, 4..F].
             * If not specified the default value is 01:80:C2:00:00:00.
             */
            group_address: string;
            /**
             * If specified, The MAC address of the multicast group this bridge uses for STP.
             *
             * The address must be a link-local address in standard Ethernet MAC address format,
             * ie an address of the form 01:80:C2:00:00:0X, with X in [0, 4..F].
             * If not specified the default value is 01:80:C2:00:00:00.
             */
            groupAddress: string;
            /**
             * A mask of group addresses to forward. Usually, group addresses in
             * the range from 01:80:C2:00:00:00 to 01:80:C2:00:00:0F are not
             * forwarded according to standards. This property is a mask of 16 bits,
             * each corresponding to a group address in that range that must be
             * forwarded. The mask can't have bits 0, 1 or 2 set because they are
             * used for STP, MAC pause frames and LACP.
             */
            group_forward_mask: number;
            /**
             * A mask of group addresses to forward. Usually, group addresses in
             * the range from 01:80:C2:00:00:00 to 01:80:C2:00:00:0F are not
             * forwarded according to standards. This property is a mask of 16 bits,
             * each corresponding to a group address in that range that must be
             * forwarded. The mask can't have bits 0, 1 or 2 set because they are
             * used for STP, MAC pause frames and LACP.
             */
            groupForwardMask: number;
            /**
             * The Spanning Tree Protocol (STP) hello time, in seconds.
             */
            hello_time: number;
            /**
             * The Spanning Tree Protocol (STP) hello time, in seconds.
             */
            helloTime: number;
            /**
             * If specified, the MAC address of bridge. When creating a new bridge, this
             * MAC address will be set.
             *
             * If this field is left unspecified, the "ethernet.cloned-mac-address" is
             * referred instead to generate the initial MAC address. Note that setting
             * "ethernet.cloned-mac-address" anyway overwrites the MAC address of
             * the bridge later while activating the bridge.
             */
            mac_address: string;
            /**
             * If specified, the MAC address of bridge. When creating a new bridge, this
             * MAC address will be set.
             *
             * If this field is left unspecified, the "ethernet.cloned-mac-address" is
             * referred instead to generate the initial MAC address. Note that setting
             * "ethernet.cloned-mac-address" anyway overwrites the MAC address of
             * the bridge later while activating the bridge.
             */
            macAddress: string;
            /**
             * The Spanning Tree Protocol (STP) maximum message age, in seconds.
             */
            max_age: number;
            /**
             * The Spanning Tree Protocol (STP) maximum message age, in seconds.
             */
            maxAge: number;
            /**
             * Set maximum size of multicast hash table (value must be a power of 2).
             */
            multicast_hash_max: number;
            /**
             * Set maximum size of multicast hash table (value must be a power of 2).
             */
            multicastHashMax: number;
            /**
             * Set the number of queries the bridge will send before
             * stopping forwarding a multicast group after a "leave"
             * message has been received.
             */
            multicast_last_member_count: number;
            /**
             * Set the number of queries the bridge will send before
             * stopping forwarding a multicast group after a "leave"
             * message has been received.
             */
            multicastLastMemberCount: number;
            /**
             * Set interval (in deciseconds) between queries to find remaining
             * members of a group, after a "leave" message is received.
             */
            multicast_last_member_interval: number;
            /**
             * Set interval (in deciseconds) between queries to find remaining
             * members of a group, after a "leave" message is received.
             */
            multicastLastMemberInterval: number;
            /**
             * Set delay (in deciseconds) after which the bridge will
             * leave a group, if no membership reports for this
             * group are received.
             */
            multicast_membership_interval: number;
            /**
             * Set delay (in deciseconds) after which the bridge will
             * leave a group, if no membership reports for this
             * group are received.
             */
            multicastMembershipInterval: number;
            /**
             * Enable or disable sending of multicast queries by the bridge.
             * If not specified the option is disabled.
             */
            multicast_querier: boolean;
            /**
             * Enable or disable sending of multicast queries by the bridge.
             * If not specified the option is disabled.
             */
            multicastQuerier: boolean;
            /**
             * If no queries are seen after this delay (in deciseconds) has passed,
             * the bridge will start to send its own queries.
             */
            multicast_querier_interval: number;
            /**
             * If no queries are seen after this delay (in deciseconds) has passed,
             * the bridge will start to send its own queries.
             */
            multicastQuerierInterval: number;
            /**
             * Interval (in deciseconds) between queries sent
             * by the bridge after the end of the startup phase.
             */
            multicast_query_interval: number;
            /**
             * Interval (in deciseconds) between queries sent
             * by the bridge after the end of the startup phase.
             */
            multicastQueryInterval: number;
            /**
             * Set the Max Response Time/Max Response Delay
             * (in deciseconds) for IGMP/MLD queries sent by the bridge.
             */
            multicast_query_response_interval: number;
            /**
             * Set the Max Response Time/Max Response Delay
             * (in deciseconds) for IGMP/MLD queries sent by the bridge.
             */
            multicastQueryResponseInterval: number;
            /**
             * If enabled the bridge's own IP address is used as
             * the source address for IGMP queries otherwise
             * the default of 0.0.0.0 is used.
             */
            multicast_query_use_ifaddr: boolean;
            /**
             * If enabled the bridge's own IP address is used as
             * the source address for IGMP queries otherwise
             * the default of 0.0.0.0 is used.
             */
            multicastQueryUseIfaddr: boolean;
            /**
             * Sets bridge's multicast router. Multicast-snooping must be enabled
             * for this option to work.
             *
             * Supported values are: 'auto', 'disabled', 'enabled' to which kernel
             * assigns the numbers 1, 0, and 2, respectively.
             * If not specified the default value is 'auto' (1).
             */
            multicast_router: string;
            /**
             * Sets bridge's multicast router. Multicast-snooping must be enabled
             * for this option to work.
             *
             * Supported values are: 'auto', 'disabled', 'enabled' to which kernel
             * assigns the numbers 1, 0, and 2, respectively.
             * If not specified the default value is 'auto' (1).
             */
            multicastRouter: string;
            /**
             * Controls whether IGMP snooping is enabled for this bridge.
             * Note that if snooping was automatically disabled due to hash collisions,
             * the system may refuse to enable the feature until the collisions are
             * resolved.
             */
            multicast_snooping: boolean;
            /**
             * Controls whether IGMP snooping is enabled for this bridge.
             * Note that if snooping was automatically disabled due to hash collisions,
             * the system may refuse to enable the feature until the collisions are
             * resolved.
             */
            multicastSnooping: boolean;
            /**
             * Set the number of IGMP queries to send during startup phase.
             */
            multicast_startup_query_count: number;
            /**
             * Set the number of IGMP queries to send during startup phase.
             */
            multicastStartupQueryCount: number;
            /**
             * Sets the time (in deciseconds) between queries sent out
             * at startup to determine membership information.
             */
            multicast_startup_query_interval: number;
            /**
             * Sets the time (in deciseconds) between queries sent out
             * at startup to determine membership information.
             */
            multicastStartupQueryInterval: number;
            /**
             * Sets the Spanning Tree Protocol (STP) priority for this bridge.  Lower
             * values are "better"; the lowest priority bridge will be elected the root
             * bridge.
             */
            priority: number;
            /**
             * Controls whether Spanning Tree Protocol (STP) is enabled for this bridge.
             */
            stp: boolean;
            /**
             * The default PVID for the ports of the bridge, that is the VLAN id
             * assigned to incoming untagged frames.
             */
            vlan_default_pvid: number;
            /**
             * The default PVID for the ports of the bridge, that is the VLAN id
             * assigned to incoming untagged frames.
             */
            vlanDefaultPvid: number;
            /**
             * Control whether VLAN filtering is enabled on the bridge.
             */
            vlan_filtering: boolean;
            /**
             * Control whether VLAN filtering is enabled on the bridge.
             */
            vlanFiltering: boolean;
            /**
             * If specified, the protocol used for VLAN filtering.
             *
             * Supported values are: '802.1Q', '802.1ad'.
             * If not specified the default value is '802.1Q'.
             */
            vlan_protocol: string;
            /**
             * If specified, the protocol used for VLAN filtering.
             *
             * Supported values are: '802.1Q', '802.1ad'.
             * If not specified the default value is '802.1Q'.
             */
            vlanProtocol: string;
            /**
             * Controls whether per-VLAN stats accounting is enabled.
             */
            vlan_stats_enabled: boolean;
            /**
             * Controls whether per-VLAN stats accounting is enabled.
             */
            vlanStatsEnabled: boolean;
            /**
             * Array of bridge VLAN objects. In addition to the VLANs
             * specified here, the bridge will also have the default-pvid
             * VLAN configured  by the bridge.vlan-default-pvid property.
             *
             * In nmcli the VLAN list can be specified with the following
             * syntax:
             *
             *  $vid [pvid] [untagged] [, $vid [pvid] [untagged]]...
             *
             * where $vid is either a single id between 1 and 4094 or a
             * range, represented as a couple of ids separated by a dash.
             */
            vlans: BridgeVlan[];
        }
    }
    type SettingBridge = (typeof classes.SettingBridge)['prototype'];
    const SettingBridge: typeof classes.SettingBridge &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingBridge.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingBridge.SignalSignatures> & classes.SettingBridge);
    namespace SettingBridgePort {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::hairpin-mode'(pspec: GObject.ParamSpec): void;
            'notify::path-cost'(pspec: GObject.ParamSpec): void;
            'notify::priority'(pspec: GObject.ParamSpec): void;
            'notify::vlans'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Enables or disables "hairpin mode" for the port, which allows frames to
             * be sent back out through the port the frame was received on.
             */
            hairpin_mode: boolean;
            /**
             * Enables or disables "hairpin mode" for the port, which allows frames to
             * be sent back out through the port the frame was received on.
             */
            hairpinMode: boolean;
            /**
             * The Spanning Tree Protocol (STP) port cost for destinations via this
             * port.
             */
            path_cost: number;
            /**
             * The Spanning Tree Protocol (STP) port cost for destinations via this
             * port.
             */
            pathCost: number;
            /**
             * The Spanning Tree Protocol (STP) priority of this bridge port.
             */
            priority: number;
            /**
             * Array of bridge VLAN objects. In addition to the VLANs
             * specified here, the port will also have the default-pvid
             * VLAN configured on the bridge by the bridge.vlan-default-pvid
             * property.
             *
             * In nmcli the VLAN list can be specified with the following
             * syntax:
             *
             *  $vid [pvid] [untagged] [, $vid [pvid] [untagged]]...
             *
             * where $vid is either a single id between 1 and 4094 or a
             * range, represented as a couple of ids separated by a dash.
             */
            vlans: BridgeVlan[];
        }
    }
    type SettingBridgePort = (typeof classes.SettingBridgePort)['prototype'];
    const SettingBridgePort: typeof classes.SettingBridgePort &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingBridgePort.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingBridgePort.SignalSignatures> & classes.SettingBridgePort);
    namespace SettingCdma {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::number'(pspec: GObject.ParamSpec): void;
            'notify::password'(pspec: GObject.ParamSpec): void;
            'notify::password-flags'(pspec: GObject.ParamSpec): void;
            'notify::username'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * If non-zero, only transmit packets of the specified size or smaller,
             * breaking larger packets up into multiple frames.
             */
            mtu: number;
            /**
             * The number to dial to establish the connection to the CDMA-based mobile
             * broadband network, if any.  If not specified, the default number (#777)
             * is used when required.
             */
            number: string;
            /**
             * The password used to authenticate with the network, if required.  Many
             * providers do not require a password, or accept any password.  But if a
             * password is required, it is specified here.
             */
            password: string;
            /**
             * Flags indicating how to handle the #NMSettingCdma:password property.
             */
            password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingCdma:password property.
             */
            passwordFlags: SettingSecretFlags;
            /**
             * The username used to authenticate with the network, if required.  Many
             * providers do not require a username, or accept any username.  But if a
             * username is required, it is specified here.
             */
            username: string;
        }
    }
    type SettingCdma = (typeof classes.SettingCdma)['prototype'];
    const SettingCdma: typeof classes.SettingCdma &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingCdma.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingCdma.SignalSignatures> & classes.SettingCdma);
    namespace SettingConnection {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::auth-retries'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect-ports'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect-priority'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect-retries'(pspec: GObject.ParamSpec): void;
            'notify::autoconnect-slaves'(pspec: GObject.ParamSpec): void;
            'notify::controller'(pspec: GObject.ParamSpec): void;
            'notify::dns-over-tls'(pspec: GObject.ParamSpec): void;
            'notify::down-on-poweroff'(pspec: GObject.ParamSpec): void;
            'notify::gateway-ping-timeout'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::interface-name'(pspec: GObject.ParamSpec): void;
            'notify::lldp'(pspec: GObject.ParamSpec): void;
            'notify::llmnr'(pspec: GObject.ParamSpec): void;
            'notify::master'(pspec: GObject.ParamSpec): void;
            'notify::mdns'(pspec: GObject.ParamSpec): void;
            'notify::metered'(pspec: GObject.ParamSpec): void;
            'notify::mptcp-flags'(pspec: GObject.ParamSpec): void;
            'notify::mud-url'(pspec: GObject.ParamSpec): void;
            'notify::multi-connect'(pspec: GObject.ParamSpec): void;
            'notify::permissions'(pspec: GObject.ParamSpec): void;
            'notify::port-type'(pspec: GObject.ParamSpec): void;
            'notify::read-only'(pspec: GObject.ParamSpec): void;
            'notify::secondaries'(pspec: GObject.ParamSpec): void;
            'notify::slave-type'(pspec: GObject.ParamSpec): void;
            'notify::stable-id'(pspec: GObject.ParamSpec): void;
            'notify::timestamp'(pspec: GObject.ParamSpec): void;
            'notify::type'(pspec: GObject.ParamSpec): void;
            'notify::uuid'(pspec: GObject.ParamSpec): void;
            'notify::wait-activation-delay'(pspec: GObject.ParamSpec): void;
            'notify::wait-device-timeout'(pspec: GObject.ParamSpec): void;
            'notify::zone'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The number of retries for the authentication. Zero means to try indefinitely; -1 means
             * to use a global default. If the global default is not set, the authentication
             * retries for 3 times before failing the connection.
             *
             * Currently, this only applies to 802-1x authentication.
             */
            auth_retries: number;
            /**
             * The number of retries for the authentication. Zero means to try indefinitely; -1 means
             * to use a global default. If the global default is not set, the authentication
             * retries for 3 times before failing the connection.
             *
             * Currently, this only applies to 802-1x authentication.
             */
            authRetries: number;
            /**
             * Whether or not the connection should be automatically connected by
             * NetworkManager when the resources for the connection are available.
             * %TRUE to automatically activate the connection, %FALSE to require manual
             * intervention to activate the connection.
             *
             * Autoconnect happens when the circumstances are suitable. That means for
             * example that the device is currently managed and not active. Autoconnect
             * thus never replaces or competes with an already active profile.
             *
             * Note that autoconnect is not implemented for VPN profiles. See
             * #NMSettingConnection:secondaries as an alternative to automatically
             * connect VPN profiles.
             *
             * If multiple profiles are ready to autoconnect on the same device,
             * the one with the better "connection.autoconnect-priority" is chosen. If
             * the priorities are equal, then the most recently connected profile is activated.
             * If the profiles were not connected earlier or their
             * "connection.timestamp" is identical, the choice is undefined.
             *
             * Depending on "connection.multi-connect", a profile can (auto)connect only
             * once at a time or multiple times.
             */
            autoconnect: boolean;
            /**
             * Whether or not ports of this connection should be automatically brought up
             * when NetworkManager activates this connection. This only has a real effect
             * for controller connections. The properties #NMSettingConnection:autoconnect,
             * #NMSettingConnection:autoconnect-priority and #NMSettingConnection:autoconnect-retries
             * are unrelated to this setting.
             * The permitted values are: 0: leave port connections untouched,
             * 1: activate all the port connections with this connection, -1: default.
             * If -1 (default) is set, global connection.autoconnect-ports is read to
             * determine the real value. If it is default as well, this fallbacks to 0.
             */
            autoconnect_ports: number;
            /**
             * Whether or not ports of this connection should be automatically brought up
             * when NetworkManager activates this connection. This only has a real effect
             * for controller connections. The properties #NMSettingConnection:autoconnect,
             * #NMSettingConnection:autoconnect-priority and #NMSettingConnection:autoconnect-retries
             * are unrelated to this setting.
             * The permitted values are: 0: leave port connections untouched,
             * 1: activate all the port connections with this connection, -1: default.
             * If -1 (default) is set, global connection.autoconnect-ports is read to
             * determine the real value. If it is default as well, this fallbacks to 0.
             */
            autoconnectPorts: number;
            /**
             * The autoconnect priority in range -999 to 999. If the connection is set
             * to autoconnect, connections with higher priority will be preferred.
             * The higher number means higher priority. Defaults to 0.
             * Note that this property only matters if there are more than one candidate
             * profile to select for autoconnect. In case of equal priority, the profile
             * used most recently is chosen.
             */
            autoconnect_priority: number;
            /**
             * The autoconnect priority in range -999 to 999. If the connection is set
             * to autoconnect, connections with higher priority will be preferred.
             * The higher number means higher priority. Defaults to 0.
             * Note that this property only matters if there are more than one candidate
             * profile to select for autoconnect. In case of equal priority, the profile
             * used most recently is chosen.
             */
            autoconnectPriority: number;
            /**
             * The number of times a connection should be tried when autoactivating before
             * giving up. Zero means forever, -1 means the global default (4 times if not
             * overridden). Setting this to 1 means to try activation only once before
             * blocking autoconnect. Note that after a timeout, NetworkManager will try
             * to autoconnect again.
             */
            autoconnect_retries: number;
            /**
             * The number of times a connection should be tried when autoactivating before
             * giving up. Zero means forever, -1 means the global default (4 times if not
             * overridden). Setting this to 1 means to try activation only once before
             * blocking autoconnect. Note that after a timeout, NetworkManager will try
             * to autoconnect again.
             */
            autoconnectRetries: number;
            /**
             * Whether or not ports of this connection should be automatically brought up
             * when NetworkManager activates this connection. This only has a real effect
             * for controller connections. The properties #NMSettingConnection:autoconnect,
             * #NMSettingConnection:autoconnect-priority and #NMSettingConnection:autoconnect-retries
             * are unrelated to this setting.
             * The permitted values are: 0: leave port connections untouched,
             * 1: activate all the port connections with this connection, -1: default.
             * If -1 (default) is set, global connection.autoconnect-slaves is read to
             * determine the real value. If it is default as well, this fallbacks to 0.
             *
             * Deprecated 1.46. Use #NMSettingConnection:autoconnect-ports instead, this is just an alias.
             */
            autoconnect_slaves: SettingConnectionAutoconnectSlaves;
            /**
             * Whether or not ports of this connection should be automatically brought up
             * when NetworkManager activates this connection. This only has a real effect
             * for controller connections. The properties #NMSettingConnection:autoconnect,
             * #NMSettingConnection:autoconnect-priority and #NMSettingConnection:autoconnect-retries
             * are unrelated to this setting.
             * The permitted values are: 0: leave port connections untouched,
             * 1: activate all the port connections with this connection, -1: default.
             * If -1 (default) is set, global connection.autoconnect-slaves is read to
             * determine the real value. If it is default as well, this fallbacks to 0.
             *
             * Deprecated 1.46. Use #NMSettingConnection:autoconnect-ports instead, this is just an alias.
             */
            autoconnectSlaves: SettingConnectionAutoconnectSlaves;
            /**
             * Interface name of the controller device or UUID of the controller connection.
             */
            controller: string;
            /**
             * Whether DNSOverTls (dns-over-tls) is enabled for the connection.
             * DNSOverTls is a technology which uses TLS to encrypt dns traffic.
             *
             * The permitted values are: "yes" (2) use DNSOverTls and disabled fallback,
             * "opportunistic" (1) use DNSOverTls but allow fallback to unencrypted resolution,
             * "no" (0) don't ever use DNSOverTls.
             * If unspecified "default" depends on the plugin used. Systemd-resolved
             * uses global setting.
             *
             * This feature requires a plugin which supports DNSOverTls. Otherwise, the
             * setting has no effect. One such plugin is dns-systemd-resolved.
             */
            dns_over_tls: number;
            /**
             * Whether DNSOverTls (dns-over-tls) is enabled for the connection.
             * DNSOverTls is a technology which uses TLS to encrypt dns traffic.
             *
             * The permitted values are: "yes" (2) use DNSOverTls and disabled fallback,
             * "opportunistic" (1) use DNSOverTls but allow fallback to unencrypted resolution,
             * "no" (0) don't ever use DNSOverTls.
             * If unspecified "default" depends on the plugin used. Systemd-resolved
             * uses global setting.
             *
             * This feature requires a plugin which supports DNSOverTls. Otherwise, the
             * setting has no effect. One such plugin is dns-systemd-resolved.
             */
            dnsOverTls: number;
            /**
             * Whether the connection will be brought down before the system is powered
             * off.  The default value is %NM_SETTING_CONNECTION_DOWN_ON_POWEROFF_DEFAULT. When
             * the default value is specified, then the global value from
             * NetworkManager configuration is looked up, if not set, it is considered
             * as %NM_SETTING_CONNECTION_DOWN_ON_POWEROFF_NO.
             */
            down_on_poweroff: number;
            /**
             * Whether the connection will be brought down before the system is powered
             * off.  The default value is %NM_SETTING_CONNECTION_DOWN_ON_POWEROFF_DEFAULT. When
             * the default value is specified, then the global value from
             * NetworkManager configuration is looked up, if not set, it is considered
             * as %NM_SETTING_CONNECTION_DOWN_ON_POWEROFF_NO.
             */
            downOnPoweroff: number;
            /**
             * If greater than zero, delay success of IP addressing until either the
             * timeout is reached, or an IP gateway replies to a ping.
             */
            gateway_ping_timeout: number;
            /**
             * If greater than zero, delay success of IP addressing until either the
             * timeout is reached, or an IP gateway replies to a ping.
             */
            gatewayPingTimeout: number;
            /**
             * A human readable unique identifier for the connection, like "Work Wi-Fi"
             * or "T-Mobile 3G".
             */
            id: string;
            /**
             * The name of the network interface this connection is bound to. If not
             * set, then the connection can be attached to any interface of the
             * appropriate type (subject to restrictions imposed by other settings).
             *
             * For software devices this specifies the name of the created device.
             *
             * For connection types where interface names cannot easily be made
             * persistent (e.g. mobile broadband or USB Ethernet), this property should
             * not be used. Setting this property restricts the interfaces a connection
             * can be used with, and if interface names change or are reordered the
             * connection may be applied to the wrong interface.
             */
            interface_name: string;
            /**
             * The name of the network interface this connection is bound to. If not
             * set, then the connection can be attached to any interface of the
             * appropriate type (subject to restrictions imposed by other settings).
             *
             * For software devices this specifies the name of the created device.
             *
             * For connection types where interface names cannot easily be made
             * persistent (e.g. mobile broadband or USB Ethernet), this property should
             * not be used. Setting this property restricts the interfaces a connection
             * can be used with, and if interface names change or are reordered the
             * connection may be applied to the wrong interface.
             */
            interfaceName: string;
            /**
             * Whether LLDP is enabled for the connection.
             */
            lldp: number;
            /**
             * Whether Link-Local Multicast Name Resolution (LLMNR) is enabled
             * for the connection. LLMNR is a protocol based on the Domain Name
             * System (DNS) packet format that allows both IPv4 and IPv6 hosts
             * to perform name resolution for hosts on the same local link.
             *
             * The permitted values are: "yes" (2) register hostname and resolving
             * for the connection, "no" (0) disable LLMNR for the interface, "resolve"
             * (1) do not register hostname but allow resolving of LLMNR host names
             * If unspecified, "default" ultimately depends on the DNS plugin (which
             * for systemd-resolved currently means "yes").
             *
             * This feature requires a plugin which supports LLMNR. Otherwise, the
             * setting has no effect. One such plugin is dns-systemd-resolved.
             */
            llmnr: number;
            /**
             * Interface name of the controller device or UUID of the controller connection.
             *
             * Deprecated 1.46. Use #NMSettingConnection:controller instead, this is just an alias.
             */
            master: string;
            /**
             * Whether mDNS is enabled for the connection.
             *
             * The permitted values are: "yes" (2) register hostname and resolving
             * for the connection, "no" (0) disable mDNS for the interface, "resolve"
             * (1) do not register hostname but allow resolving of mDNS host names
             * and "default" (-1) to allow lookup of a global default in NetworkManager.conf.
             * If unspecified, "default" ultimately depends on the DNS plugin.
             *
             * This feature requires a plugin which supports mDNS. Otherwise, the
             * setting has no effect. Currently the only supported DNS plugin is
             * systemd-resolved. For systemd-resolved, the default is configurable via
             * MulticastDNS= setting in resolved.conf.
             */
            mdns: number;
            /**
             * Whether the connection is metered.
             *
             * When updating this property on a currently activated connection,
             * the change takes effect immediately.
             */
            metered: Metered;
            /**
             * Whether to configure MPTCP endpoints and the address flags.
             * If MPTCP is enabled in NetworkManager, it will configure the
             * addresses of the interface as MPTCP endpoints. Note that
             * IPv4 loopback addresses (127.0.0.0/8), IPv4 link local
             * addresses (169.254.0.0/16), the IPv6 loopback address (::1),
             * IPv6 link local addresses (fe80::/10), IPv6 unique
             * local addresses (ULA, fc00::/7) and IPv6 privacy extension addresses
             * (rfc3041, ipv6.ip6-privacy) will be excluded from being
             * configured as endpoints.
             *
             * If "disabled" (0x1), MPTCP handling for the interface is disabled and
             * no endpoints are registered.
             *
             * The "enabled" (0x2) flag means that MPTCP handling is enabled.
             * This flag can also be implied from the presence of other flags.
             *
             * Even when enabled, MPTCP handling will by default still be disabled
             * unless "/proc/sys/net/mptcp/enabled" sysctl is on. NetworkManager
             * does not change the sysctl and this is up to the administrator
             * or distribution. To configure endpoints even if the sysctl is
             * disabled, "also-without-sysctl" (0x4) flag can be used. In that case,
             * NetworkManager doesn't look at the sysctl and configures endpoints
             * regardless.
             *
             * Even when enabled, NetworkManager will only configure MPTCP endpoints
             * for a certain address family, if there is a unicast default route (0.0.0.0/0
             * or ::/0) in the main routing table. The flag "also-without-default-route"
             * (0x8) can override that.
             *
             * When MPTCP handling is enabled then endpoints are configured with
             * the specified address flags "signal" (0x10), "subflow" (0x20), "backup" (0x40),
             * "fullmesh" (0x80). See ip-mptcp(8) manual for additional information about the flags.
             *
             * If the flags are zero (0x0), the global connection default from NetworkManager.conf is
             * honored. If still unspecified, the fallback is "enabled,subflow".
             * Note that this means that MPTCP is by default done depending on the
             * "/proc/sys/net/mptcp/enabled" sysctl.
             *
             * NetworkManager does not change the MPTCP limits nor enable MPTCP via
             * "/proc/sys/net/mptcp/enabled". That is a host configuration which the
             * admin can change via sysctl and ip-mptcp.
             *
             * Strict reverse path filtering (rp_filter) breaks many MPTCP use cases, so when
             * MPTCP handling for IPv4 addresses on the interface is enabled, NetworkManager would
             * loosen the strict reverse path filtering (1) to the loose setting (2).
             */
            mptcp_flags: number;
            /**
             * Whether to configure MPTCP endpoints and the address flags.
             * If MPTCP is enabled in NetworkManager, it will configure the
             * addresses of the interface as MPTCP endpoints. Note that
             * IPv4 loopback addresses (127.0.0.0/8), IPv4 link local
             * addresses (169.254.0.0/16), the IPv6 loopback address (::1),
             * IPv6 link local addresses (fe80::/10), IPv6 unique
             * local addresses (ULA, fc00::/7) and IPv6 privacy extension addresses
             * (rfc3041, ipv6.ip6-privacy) will be excluded from being
             * configured as endpoints.
             *
             * If "disabled" (0x1), MPTCP handling for the interface is disabled and
             * no endpoints are registered.
             *
             * The "enabled" (0x2) flag means that MPTCP handling is enabled.
             * This flag can also be implied from the presence of other flags.
             *
             * Even when enabled, MPTCP handling will by default still be disabled
             * unless "/proc/sys/net/mptcp/enabled" sysctl is on. NetworkManager
             * does not change the sysctl and this is up to the administrator
             * or distribution. To configure endpoints even if the sysctl is
             * disabled, "also-without-sysctl" (0x4) flag can be used. In that case,
             * NetworkManager doesn't look at the sysctl and configures endpoints
             * regardless.
             *
             * Even when enabled, NetworkManager will only configure MPTCP endpoints
             * for a certain address family, if there is a unicast default route (0.0.0.0/0
             * or ::/0) in the main routing table. The flag "also-without-default-route"
             * (0x8) can override that.
             *
             * When MPTCP handling is enabled then endpoints are configured with
             * the specified address flags "signal" (0x10), "subflow" (0x20), "backup" (0x40),
             * "fullmesh" (0x80). See ip-mptcp(8) manual for additional information about the flags.
             *
             * If the flags are zero (0x0), the global connection default from NetworkManager.conf is
             * honored. If still unspecified, the fallback is "enabled,subflow".
             * Note that this means that MPTCP is by default done depending on the
             * "/proc/sys/net/mptcp/enabled" sysctl.
             *
             * NetworkManager does not change the MPTCP limits nor enable MPTCP via
             * "/proc/sys/net/mptcp/enabled". That is a host configuration which the
             * admin can change via sysctl and ip-mptcp.
             *
             * Strict reverse path filtering (rp_filter) breaks many MPTCP use cases, so when
             * MPTCP handling for IPv4 addresses on the interface is enabled, NetworkManager would
             * loosen the strict reverse path filtering (1) to the loose setting (2).
             */
            mptcpFlags: number;
            /**
             * If configured, set to a Manufacturer Usage Description (MUD) URL that points
             * to manufacturer-recommended network policies for IoT devices. It is transmitted
             * as a DHCPv4 or DHCPv6 option. The value must be a valid URL starting with "https://".
             *
             * The special value "none" is allowed to indicate that no MUD URL is used.
             *
             * If the per-profile value is unspecified (the default), a global connection default gets
             * consulted. If still unspecified, the ultimate default is "none".
             */
            mud_url: string;
            /**
             * If configured, set to a Manufacturer Usage Description (MUD) URL that points
             * to manufacturer-recommended network policies for IoT devices. It is transmitted
             * as a DHCPv4 or DHCPv6 option. The value must be a valid URL starting with "https://".
             *
             * The special value "none" is allowed to indicate that no MUD URL is used.
             *
             * If the per-profile value is unspecified (the default), a global connection default gets
             * consulted. If still unspecified, the ultimate default is "none".
             */
            mudUrl: string;
            /**
             * Specifies whether the profile can be active multiple times at a particular
             * moment. The value is of type #NMConnectionMultiConnect.
             */
            multi_connect: number;
            /**
             * Specifies whether the profile can be active multiple times at a particular
             * moment. The value is of type #NMConnectionMultiConnect.
             */
            multiConnect: number;
            /**
             * An array of strings defining what access a given user has to this
             * connection.  If this is %NULL or empty, all users are allowed to access
             * this connection; otherwise users are allowed if and only if they are in
             * this list.  When this is not empty, the connection can be active only when
             * one of the specified users is logged into an active session.  Each entry
             * is of the form "[type]:[id]:[reserved]"; for example, "user:dcbw:blah".
             *
             * At this time only the "user" [type] is allowed.  Any other values are
             * ignored and reserved for future use.  [id] is the username that this
             * permission refers to, which may not contain the ":" character. Any
             * [reserved] information present must be ignored and is reserved for future
             * use.  All of [type], [id], and [reserved] must be valid UTF-8.
             */
            permissions: string[];
            /**
             * Setting name of the device type of this port's controller connection (eg,
             * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
             * port.
             */
            port_type: string;
            /**
             * Setting name of the device type of this port's controller connection (eg,
             * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
             * port.
             */
            portType: string;
            /**
             * This property is deprecated and has no meaning.
             */
            read_only: boolean;
            /**
             * This property is deprecated and has no meaning.
             */
            readOnly: boolean;
            /**
             * List of connection UUIDs that should be activated when the base
             * connection itself is activated. Currently, only VPN connections are
             * supported.
             */
            secondaries: string[];
            /**
             * Setting name of the device type of this port's controller connection (eg,
             * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
             * port.
             *
             * Deprecated 1.46. Use #NMSettingConnection:port-type instead, this is just an alias.
             */
            slave_type: string;
            /**
             * Setting name of the device type of this port's controller connection (eg,
             * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
             * port.
             *
             * Deprecated 1.46. Use #NMSettingConnection:port-type instead, this is just an alias.
             */
            slaveType: string;
            /**
             * This represents the identity of the connection used for various purposes.
             * It allows to configure multiple profiles to share the identity. Also,
             * the stable-id can contain placeholders that are substituted dynamically and
             * deterministically depending on the context.
             *
             * The stable-id is used for generating IPv6 stable private addresses with
             * ipv6.addr-gen-mode=stable-privacy. It is also used to seed the generated
             * cloned MAC address for ethernet.cloned-mac-address=stable and
             * wifi.cloned-mac-address=stable. It is also used to derive the DHCP
             * client identifier with ipv4.dhcp-client-id=stable, the DHCPv6 DUID with
             * ipv6.dhcp-duid=stable-[llt,ll,uuid] and the DHCP IAID with
             * ipv4.iaid=stable and ipv6.iaid=stable.
             *
             * Note that depending on the context where it is used, other parameters are
             * also seeded into the generation algorithm. For example, a per-host key
             * is commonly also included, so that different systems end up generating
             * different IDs. Or with ipv6.addr-gen-mode=stable-privacy, also the device's
             * name is included, so that different interfaces yield different addresses.
             * The per-host key is the identity of your machine and stored in /var/lib/NetworkManager/secret_key.
             * See NetworkManager(8) manual about the secret-key and the host identity.
             *
             * The '$' character is treated special to perform dynamic substitutions at
             * activation time. Currently, supported are "${CONNECTION}", "${DEVICE}",
             * "${MAC}", "${NETWORK_SSID}", "${BOOT}", "${RANDOM}".  These effectively
             * create unique IDs per-connection, per-device, per-SSID, per-boot, or
             * every time.  The "${CONNECTION}" uses the profile's connection.uuid, the
             * "${DEVICE}" uses the interface name of the device and "${MAC}" the
             * permanent MAC address of the device. "${NETWORK_SSID}" uses the SSID for
             * Wi-Fi networks and falls back to "${CONNECTION}" on other networks. Any
             * unrecognized patterns following '$' are treated verbatim, however are
             * reserved for future use. You are thus advised to avoid '$' or escape it
             * as "$$".  For example, set it to "${CONNECTION}-${BOOT}-${DEVICE}" to
             * create a unique id for this connection that changes with every reboot
             * and differs depending on the interface where the profile activates.
             *
             * If the value is unset, a global connection default is consulted. If the
             * value is still unset, the default is "default${CONNECTION}" go generate
             * an ID unique per connection profile.
             */
            stable_id: string;
            /**
             * This represents the identity of the connection used for various purposes.
             * It allows to configure multiple profiles to share the identity. Also,
             * the stable-id can contain placeholders that are substituted dynamically and
             * deterministically depending on the context.
             *
             * The stable-id is used for generating IPv6 stable private addresses with
             * ipv6.addr-gen-mode=stable-privacy. It is also used to seed the generated
             * cloned MAC address for ethernet.cloned-mac-address=stable and
             * wifi.cloned-mac-address=stable. It is also used to derive the DHCP
             * client identifier with ipv4.dhcp-client-id=stable, the DHCPv6 DUID with
             * ipv6.dhcp-duid=stable-[llt,ll,uuid] and the DHCP IAID with
             * ipv4.iaid=stable and ipv6.iaid=stable.
             *
             * Note that depending on the context where it is used, other parameters are
             * also seeded into the generation algorithm. For example, a per-host key
             * is commonly also included, so that different systems end up generating
             * different IDs. Or with ipv6.addr-gen-mode=stable-privacy, also the device's
             * name is included, so that different interfaces yield different addresses.
             * The per-host key is the identity of your machine and stored in /var/lib/NetworkManager/secret_key.
             * See NetworkManager(8) manual about the secret-key and the host identity.
             *
             * The '$' character is treated special to perform dynamic substitutions at
             * activation time. Currently, supported are "${CONNECTION}", "${DEVICE}",
             * "${MAC}", "${NETWORK_SSID}", "${BOOT}", "${RANDOM}".  These effectively
             * create unique IDs per-connection, per-device, per-SSID, per-boot, or
             * every time.  The "${CONNECTION}" uses the profile's connection.uuid, the
             * "${DEVICE}" uses the interface name of the device and "${MAC}" the
             * permanent MAC address of the device. "${NETWORK_SSID}" uses the SSID for
             * Wi-Fi networks and falls back to "${CONNECTION}" on other networks. Any
             * unrecognized patterns following '$' are treated verbatim, however are
             * reserved for future use. You are thus advised to avoid '$' or escape it
             * as "$$".  For example, set it to "${CONNECTION}-${BOOT}-${DEVICE}" to
             * create a unique id for this connection that changes with every reboot
             * and differs depending on the interface where the profile activates.
             *
             * If the value is unset, a global connection default is consulted. If the
             * value is still unset, the default is "default${CONNECTION}" go generate
             * an ID unique per connection profile.
             */
            stableId: string;
            /**
             * The time, in seconds since the Unix Epoch, that the connection was last
             * _successfully_ fully activated.
             *
             * NetworkManager updates the connection timestamp periodically when the
             * connection is active to ensure that an active connection has the latest
             * timestamp. The property is only meant for reading (changes to this
             * property will not be preserved).
             */
            timestamp: number;
            /**
             * Base type of the connection. For hardware-dependent connections, should
             * contain the setting name of the hardware-type specific setting (ie,
             * "802-3-ethernet" or "802-11-wireless" or "bluetooth", etc), and for
             * non-hardware dependent connections like VPN or otherwise, should contain
             * the setting name of that setting type (ie, "vpn" or "bridge", etc).
             */
            type: string;
            /**
             * A universally unique identifier for the connection, for example generated
             * with libuuid.  It should be assigned when the connection is created, and
             * never changed as long as the connection still applies to the same
             * network.  For example, it should not be changed when the
             * #NMSettingConnection:id property or #NMSettingIP4Config changes, but
             * might need to be re-created when the Wi-Fi SSID, mobile broadband network
             * provider, or #NMSettingConnection:type property changes.
             *
             * The UUID must be in the format "2815492f-7e56-435e-b2e9-246bd7cdc664"
             * (ie, contains only hexadecimal characters and "-").  A suitable UUID may
             * be generated by nm_utils_uuid_generate() or
             * nm_uuid_generate_from_string_str().
             */
            uuid: string;
            /**
             * Time in milliseconds to wait for connection to be considered activated.
             * The wait will start after the pre-up dispatcher event.
             *
             * The value 0 means no wait time. The default value is -1, which
             * currently has the same meaning as no wait time.
             */
            wait_activation_delay: number;
            /**
             * Time in milliseconds to wait for connection to be considered activated.
             * The wait will start after the pre-up dispatcher event.
             *
             * The value 0 means no wait time. The default value is -1, which
             * currently has the same meaning as no wait time.
             */
            waitActivationDelay: number;
            /**
             * Timeout in milliseconds to wait for device at startup.
             * During boot, devices may take a while to be detected by the driver.
             * This property will cause to delay NetworkManager-wait-online.service
             * and nm-online to give the device a chance to appear. This works by
             * waiting for the given timeout until a compatible device for the
             * profile is available and managed.
             *
             * The value 0 means no wait time. The default value is -1, which
             * currently has the same meaning as no wait time.
             */
            wait_device_timeout: number;
            /**
             * Timeout in milliseconds to wait for device at startup.
             * During boot, devices may take a while to be detected by the driver.
             * This property will cause to delay NetworkManager-wait-online.service
             * and nm-online to give the device a chance to appear. This works by
             * waiting for the given timeout until a compatible device for the
             * profile is available and managed.
             *
             * The value 0 means no wait time. The default value is -1, which
             * currently has the same meaning as no wait time.
             */
            waitDeviceTimeout: number;
            /**
             * The trust level of a the connection.  Free form case-insensitive string
             * (for example "Home", "Work", "Public").  %NULL or unspecified zone means
             * the connection will be placed in the default zone as defined by the
             * firewall.
             *
             * When updating this property on a currently activated connection,
             * the change takes effect immediately.
             */
            zone: string;
        }
    }
    type SettingConnection = (typeof classes.SettingConnection)['prototype'];
    const SettingConnection: typeof classes.SettingConnection &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingConnection.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingConnection.SignalSignatures> & classes.SettingConnection);
    namespace SettingDcb {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::app-fcoe-flags'(pspec: GObject.ParamSpec): void;
            'notify::app-fcoe-mode'(pspec: GObject.ParamSpec): void;
            'notify::app-fcoe-priority'(pspec: GObject.ParamSpec): void;
            'notify::app-fip-flags'(pspec: GObject.ParamSpec): void;
            'notify::app-fip-priority'(pspec: GObject.ParamSpec): void;
            'notify::app-iscsi-flags'(pspec: GObject.ParamSpec): void;
            'notify::app-iscsi-priority'(pspec: GObject.ParamSpec): void;
            'notify::priority-bandwidth'(pspec: GObject.ParamSpec): void;
            'notify::priority-flow-control'(pspec: GObject.ParamSpec): void;
            'notify::priority-flow-control-flags'(pspec: GObject.ParamSpec): void;
            'notify::priority-group-bandwidth'(pspec: GObject.ParamSpec): void;
            'notify::priority-group-flags'(pspec: GObject.ParamSpec): void;
            'notify::priority-group-id'(pspec: GObject.ParamSpec): void;
            'notify::priority-strict-bandwidth'(pspec: GObject.ParamSpec): void;
            'notify::priority-traffic-class'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
             * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            app_fcoe_flags: SettingDcbFlags;
            /**
             * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
             * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            appFcoeFlags: SettingDcbFlags;
            /**
             * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
             * or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
             *
             * Since 1.34, %NULL is the default and means %NM_SETTING_DCB_FCOE_MODE_FABRIC.
             * Before 1.34, %NULL was rejected as invalid and the default was %NM_SETTING_DCB_FCOE_MODE_FABRIC.
             */
            app_fcoe_mode: string;
            /**
             * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
             * or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
             *
             * Since 1.34, %NULL is the default and means %NM_SETTING_DCB_FCOE_MODE_FABRIC.
             * Before 1.34, %NULL was rejected as invalid and the default was %NM_SETTING_DCB_FCOE_MODE_FABRIC.
             */
            appFcoeMode: string;
            /**
             * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
             * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
             * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
             */
            app_fcoe_priority: number;
            /**
             * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
             * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
             * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
             */
            appFcoePriority: number;
            /**
             * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
             * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            app_fip_flags: SettingDcbFlags;
            /**
             * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
             * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            appFipFlags: SettingDcbFlags;
            /**
             * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
             * default priority.  Only used when the #NMSettingDcb:app-fip-flags
             * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
             */
            app_fip_priority: number;
            /**
             * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
             * default priority.  Only used when the #NMSettingDcb:app-fip-flags
             * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
             */
            appFipPriority: number;
            /**
             * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
             * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            app_iscsi_flags: SettingDcbFlags;
            /**
             * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
             * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            appIscsiFlags: SettingDcbFlags;
            /**
             * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
             * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
             * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
             */
            app_iscsi_priority: number;
            /**
             * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
             * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
             * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
             */
            appIscsiPriority: number;
            /**
             * An array of 8 uint values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates the percentage of bandwidth of
             * the priority's assigned group that the priority may use.  The sum of all
             * percentages for priorities which belong to the same group must total 100
             * percents.
             */
            priority_bandwidth: number[];
            /**
             * An array of 8 uint values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates the percentage of bandwidth of
             * the priority's assigned group that the priority may use.  The sum of all
             * percentages for priorities which belong to the same group must total 100
             * percents.
             */
            priorityBandwidth: number[];
            /**
             * An array of 8 boolean values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates whether or not the corresponding
             * priority should transmit priority pause.
             */
            priority_flow_control: boolean[];
            /**
             * An array of 8 boolean values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates whether or not the corresponding
             * priority should transmit priority pause.
             */
            priorityFlowControl: boolean[];
            /**
             * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
             * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            priority_flow_control_flags: SettingDcbFlags;
            /**
             * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
             * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            priorityFlowControlFlags: SettingDcbFlags;
            /**
             * An array of 8 uint values, where the array index corresponds to the
             * Priority Group ID (0 - 7) and the value indicates the percentage of link
             * bandwidth allocated to that group.  Allowed values are 0 - 100, and the
             * sum of all values must total 100 percents.
             */
            priority_group_bandwidth: number[];
            /**
             * An array of 8 uint values, where the array index corresponds to the
             * Priority Group ID (0 - 7) and the value indicates the percentage of link
             * bandwidth allocated to that group.  Allowed values are 0 - 100, and the
             * sum of all values must total 100 percents.
             */
            priorityGroupBandwidth: number[];
            /**
             * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
             * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            priority_group_flags: SettingDcbFlags;
            /**
             * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
             * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
             * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
             */
            priorityGroupFlags: SettingDcbFlags;
            /**
             * An array of 8 uint values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates the Priority Group ID.  Allowed
             * Priority Group ID values are 0 - 7 or 15 for the unrestricted group.
             */
            priority_group_id: number[];
            /**
             * An array of 8 uint values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates the Priority Group ID.  Allowed
             * Priority Group ID values are 0 - 7 or 15 for the unrestricted group.
             */
            priorityGroupId: number[];
            /**
             * An array of 8 boolean values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates whether or not the priority may
             * use all of the bandwidth allocated to its assigned group.
             */
            priority_strict_bandwidth: boolean[];
            /**
             * An array of 8 boolean values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates whether or not the priority may
             * use all of the bandwidth allocated to its assigned group.
             */
            priorityStrictBandwidth: boolean[];
            /**
             * An array of 8 uint values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates the traffic class (0 - 7) to
             * which the priority is mapped.
             */
            priority_traffic_class: number[];
            /**
             * An array of 8 uint values, where the array index corresponds to the User
             * Priority (0 - 7) and the value indicates the traffic class (0 - 7) to
             * which the priority is mapped.
             */
            priorityTrafficClass: number[];
        }
    }
    type SettingDcb = (typeof classes.SettingDcb)['prototype'];
    const SettingDcb: typeof classes.SettingDcb &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingDcb.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingDcb.SignalSignatures> & classes.SettingDcb);
    namespace SettingDummy {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {}
    }
    type SettingDummy = (typeof classes.SettingDummy)['prototype'];
    const SettingDummy: typeof classes.SettingDummy &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingDummy.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingDummy.SignalSignatures> & classes.SettingDummy);
    namespace SettingEthtool {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {}
    }
    type SettingEthtool = (typeof classes.SettingEthtool)['prototype'];
    const SettingEthtool: typeof classes.SettingEthtool &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingEthtool.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingEthtool.SignalSignatures> & classes.SettingEthtool);
    namespace SettingGeneric {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::device-handler'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Name of the device handler that will be invoked to add and delete
             * the device for this connection. The name can only contain ASCII
             * alphanumeric characters and '-', '_', '.'. It cannot start with '.'.
             *
             * See the NetworkManager-dispatcher(8) man page for more details
             * about how to write the device handler.
             *
             * By setting this property the generic connection becomes "virtual",
             * meaning that it can be activated without an existing device; the device
             * will be created at the time the connection is started by invoking the
             * device-handler.
             */
            device_handler: string;
            /**
             * Name of the device handler that will be invoked to add and delete
             * the device for this connection. The name can only contain ASCII
             * alphanumeric characters and '-', '_', '.'. It cannot start with '.'.
             *
             * See the NetworkManager-dispatcher(8) man page for more details
             * about how to write the device handler.
             *
             * By setting this property the generic connection becomes "virtual",
             * meaning that it can be activated without an existing device; the device
             * will be created at the time the connection is started by invoking the
             * device-handler.
             */
            deviceHandler: string;
        }
    }
    type SettingGeneric = (typeof classes.SettingGeneric)['prototype'];
    const SettingGeneric: typeof classes.SettingGeneric &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingGeneric.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingGeneric.SignalSignatures> & classes.SettingGeneric);
    namespace SettingGsm {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::apn'(pspec: GObject.ParamSpec): void;
            'notify::auto-config'(pspec: GObject.ParamSpec): void;
            'notify::device-id'(pspec: GObject.ParamSpec): void;
            'notify::home-only'(pspec: GObject.ParamSpec): void;
            'notify::initial-eps-bearer-apn'(pspec: GObject.ParamSpec): void;
            'notify::initial-eps-bearer-configure'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::network-id'(pspec: GObject.ParamSpec): void;
            'notify::number'(pspec: GObject.ParamSpec): void;
            'notify::password'(pspec: GObject.ParamSpec): void;
            'notify::password-flags'(pspec: GObject.ParamSpec): void;
            'notify::pin'(pspec: GObject.ParamSpec): void;
            'notify::pin-flags'(pspec: GObject.ParamSpec): void;
            'notify::sim-id'(pspec: GObject.ParamSpec): void;
            'notify::sim-operator-id'(pspec: GObject.ParamSpec): void;
            'notify::username'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The GPRS Access Point Name specifying the APN used when establishing a
             * data session with the GSM-based network.  The APN often determines how
             * the user will be billed for their network usage and whether the user has
             * access to the Internet or just a provider-specific walled-garden, so it
             * is important to use the correct APN for the user's mobile broadband plan.
             * The APN may only be composed of the characters a-z, 0-9, ., and - per GSM
             * 03.60 Section 14.9.
             *
             * If the APN is unset (the default) then it may be detected based on
             * "auto-config" setting. The property can be explicitly set to the
             * empty string to prevent that and use no APN.
             */
            apn: string;
            /**
             * When %TRUE, the settings such as APN, username, or password will
             * default to values that match the network the modem will register
             * to in the Mobile Broadband Provider database.
             */
            auto_config: boolean;
            /**
             * When %TRUE, the settings such as APN, username, or password will
             * default to values that match the network the modem will register
             * to in the Mobile Broadband Provider database.
             */
            autoConfig: boolean;
            /**
             * The device unique identifier (as given by the WWAN management service)
             * which this connection applies to.  If given, the connection will only
             * apply to the specified device.
             */
            device_id: string;
            /**
             * The device unique identifier (as given by the WWAN management service)
             * which this connection applies to.  If given, the connection will only
             * apply to the specified device.
             */
            deviceId: string;
            /**
             * When %TRUE, only connections to the home network will be allowed.
             * Connections to roaming networks will not be made.
             */
            home_only: boolean;
            /**
             * When %TRUE, only connections to the home network will be allowed.
             * Connections to roaming networks will not be made.
             */
            homeOnly: boolean;
            /**
             * For LTE modems, this sets the APN for the initial EPS bearer that is set
             * up when attaching to the network.  Setting this parameter implies
             * initial-eps-bearer-configure to be TRUE.
             */
            initial_eps_bearer_apn: string;
            /**
             * For LTE modems, this sets the APN for the initial EPS bearer that is set
             * up when attaching to the network.  Setting this parameter implies
             * initial-eps-bearer-configure to be TRUE.
             */
            initialEpsBearerApn: string;
            /**
             * For LTE modems, this setting determines whether the initial EPS bearer
             * shall be configured when bringing up the connection.  It is inferred TRUE
             * if initial-eps-bearer-apn is set.
             */
            initial_eps_bearer_configure: boolean;
            /**
             * For LTE modems, this setting determines whether the initial EPS bearer
             * shall be configured when bringing up the connection.  It is inferred TRUE
             * if initial-eps-bearer-apn is set.
             */
            initialEpsBearerConfigure: boolean;
            /**
             * If non-zero, only transmit packets of the specified size or smaller,
             * breaking larger packets up into multiple frames.
             */
            mtu: number;
            /**
             * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
             * registration.  If the Network ID is specified, NetworkManager will
             * attempt to force the device to register only on the specified network.
             * This can be used to ensure that the device does not roam when direct
             * roaming control of the device is not otherwise possible.
             */
            network_id: string;
            /**
             * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
             * registration.  If the Network ID is specified, NetworkManager will
             * attempt to force the device to register only on the specified network.
             * This can be used to ensure that the device does not roam when direct
             * roaming control of the device is not otherwise possible.
             */
            networkId: string;
            /**
             * Legacy setting that used to help establishing PPP data sessions for
             * GSM-based modems.
             */
            number: string;
            /**
             * The password used to authenticate with the network, if required.  Many
             * providers do not require a password, or accept any password.  But if a
             * password is required, it is specified here.
             */
            password: string;
            /**
             * Flags indicating how to handle the #NMSettingGsm:password property.
             */
            password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingGsm:password property.
             */
            passwordFlags: SettingSecretFlags;
            /**
             * If the SIM is locked with a PIN it must be unlocked before any other
             * operations are requested.  Specify the PIN here to allow operation of the
             * device.
             */
            pin: string;
            /**
             * Flags indicating how to handle the #NMSettingGsm:pin property.
             */
            pin_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingGsm:pin property.
             */
            pinFlags: SettingSecretFlags;
            /**
             * The SIM card unique identifier (as given by the WWAN management service)
             * which this connection applies to.  If given, the connection will apply
             * to any device also allowed by #NMSettingGsm:device-id which contains a
             * SIM card matching the given identifier.
             */
            sim_id: string;
            /**
             * The SIM card unique identifier (as given by the WWAN management service)
             * which this connection applies to.  If given, the connection will apply
             * to any device also allowed by #NMSettingGsm:device-id which contains a
             * SIM card matching the given identifier.
             */
            simId: string;
            /**
             * A MCC/MNC string like "310260" or "21601" identifying the specific
             * mobile network operator which this connection applies to.  If given,
             * the connection will apply to any device also allowed by
             * #NMSettingGsm:device-id and #NMSettingGsm:sim-id which contains a SIM
             * card provisioned by the given operator.
             */
            sim_operator_id: string;
            /**
             * A MCC/MNC string like "310260" or "21601" identifying the specific
             * mobile network operator which this connection applies to.  If given,
             * the connection will apply to any device also allowed by
             * #NMSettingGsm:device-id and #NMSettingGsm:sim-id which contains a SIM
             * card provisioned by the given operator.
             */
            simOperatorId: string;
            /**
             * The username used to authenticate with the network, if required.  Many
             * providers do not require a username, or accept any username.  But if a
             * username is required, it is specified here.
             */
            username: string;
        }
    }
    type SettingGsm = (typeof classes.SettingGsm)['prototype'];
    const SettingGsm: typeof classes.SettingGsm &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingGsm.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingGsm.SignalSignatures> & classes.SettingGsm);
    namespace SettingHostname {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::from-dhcp'(pspec: GObject.ParamSpec): void;
            'notify::from-dns-lookup'(pspec: GObject.ParamSpec): void;
            'notify::only-from-default'(pspec: GObject.ParamSpec): void;
            'notify::priority'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Whether the system hostname can be determined from DHCP on
             * this connection.
             *
             * When set to %NM_TERNARY_DEFAULT, the value from global configuration
             * is used. If the property doesn't have a value in the global
             * configuration, NetworkManager assumes the value to be %NM_TERNARY_TRUE.
             */
            from_dhcp: Ternary;
            /**
             * Whether the system hostname can be determined from DHCP on
             * this connection.
             *
             * When set to %NM_TERNARY_DEFAULT, the value from global configuration
             * is used. If the property doesn't have a value in the global
             * configuration, NetworkManager assumes the value to be %NM_TERNARY_TRUE.
             */
            fromDhcp: Ternary;
            /**
             * Whether the system hostname can be determined from reverse
             * DNS lookup of addresses on this device.
             *
             * When set to %NM_TERNARY_DEFAULT, the value from global configuration
             * is used. If the property doesn't have a value in the global
             * configuration, NetworkManager assumes the value to be %NM_TERNARY_TRUE.
             */
            from_dns_lookup: Ternary;
            /**
             * Whether the system hostname can be determined from reverse
             * DNS lookup of addresses on this device.
             *
             * When set to %NM_TERNARY_DEFAULT, the value from global configuration
             * is used. If the property doesn't have a value in the global
             * configuration, NetworkManager assumes the value to be %NM_TERNARY_TRUE.
             */
            fromDnsLookup: Ternary;
            /**
             * If set to %NM_TERNARY_TRUE, NetworkManager attempts to get
             * the hostname via DHCPv4/DHCPv6 or reverse DNS lookup on this
             * device only when the device has the default route for the given
             * address family (IPv4/IPv6).
             *
             * If set to %NM_TERNARY_FALSE, the hostname can be set from this
             * device even if it doesn't have the default route.
             *
             * When set to %NM_TERNARY_DEFAULT, the value from global configuration
             * is used. If the property doesn't have a value in the global
             * configuration, NetworkManager assumes the value to be %NM_TERNARY_FALSE.
             */
            only_from_default: Ternary;
            /**
             * If set to %NM_TERNARY_TRUE, NetworkManager attempts to get
             * the hostname via DHCPv4/DHCPv6 or reverse DNS lookup on this
             * device only when the device has the default route for the given
             * address family (IPv4/IPv6).
             *
             * If set to %NM_TERNARY_FALSE, the hostname can be set from this
             * device even if it doesn't have the default route.
             *
             * When set to %NM_TERNARY_DEFAULT, the value from global configuration
             * is used. If the property doesn't have a value in the global
             * configuration, NetworkManager assumes the value to be %NM_TERNARY_FALSE.
             */
            onlyFromDefault: Ternary;
            /**
             * The relative priority of this connection to determine the
             * system hostname. A lower numerical value is better (higher
             * priority).  A connection with higher priority is considered
             * before connections with lower priority.
             *
             * If the value is zero, it can be overridden by a global value
             * from NetworkManager configuration. If the property doesn't have
             * a value in the global configuration, the value is assumed to be
             * 100.
             *
             * Negative values have the special effect of excluding other
             * connections with a greater numerical priority value; so in
             * presence of at least one negative priority, only connections
             * with the lowest priority value will be used to determine the
             * hostname.
             */
            priority: number;
        }
    }
    type SettingHostname = (typeof classes.SettingHostname)['prototype'];
    const SettingHostname: typeof classes.SettingHostname &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingHostname.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingHostname.SignalSignatures> & classes.SettingHostname);
    namespace SettingHsr {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::multicast-spec'(pspec: GObject.ParamSpec): void;
            'notify::port1'(pspec: GObject.ParamSpec): void;
            'notify::port2'(pspec: GObject.ParamSpec): void;
            'notify::prp'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The last byte of supervision address.
             */
            multicast_spec: number;
            /**
             * The last byte of supervision address.
             */
            multicastSpec: number;
            /**
             * The port1 interface name of the HSR. This property is mandatory.
             */
            port1: string;
            /**
             * The port2 interface name of the HSR. This property is mandatory.
             */
            port2: string;
            /**
             * The protocol used by the interface, whether it is PRP or HSR.
             */
            prp: boolean;
        }
    }
    type SettingHsr = (typeof classes.SettingHsr)['prototype'];
    const SettingHsr: typeof classes.SettingHsr &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingHsr.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingHsr.SignalSignatures> & classes.SettingHsr);
    namespace SettingIP4Config {
        // Signal signatures
        interface SignalSignatures extends SettingIPConfig.SignalSignatures {
            'notify::dhcp-client-id'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-fqdn'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-vendor-class-identifier'(pspec: GObject.ParamSpec): void;
            'notify::link-local'(pspec: GObject.ParamSpec): void;
            'notify::addresses'(pspec: GObject.ParamSpec): void;
            'notify::auto-route-ext-gw'(pspec: GObject.ParamSpec): void;
            'notify::dad-timeout'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-dscp'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-hostname'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-hostname-flags'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-iaid'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-reject-servers'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-send-hostname'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-send-release'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-timeout'(pspec: GObject.ParamSpec): void;
            'notify::dns'(pspec: GObject.ParamSpec): void;
            'notify::dns-options'(pspec: GObject.ParamSpec): void;
            'notify::dns-priority'(pspec: GObject.ParamSpec): void;
            'notify::dns-search'(pspec: GObject.ParamSpec): void;
            'notify::gateway'(pspec: GObject.ParamSpec): void;
            'notify::ignore-auto-dns'(pspec: GObject.ParamSpec): void;
            'notify::ignore-auto-routes'(pspec: GObject.ParamSpec): void;
            'notify::may-fail'(pspec: GObject.ParamSpec): void;
            'notify::method'(pspec: GObject.ParamSpec): void;
            'notify::never-default'(pspec: GObject.ParamSpec): void;
            'notify::replace-local-rule'(pspec: GObject.ParamSpec): void;
            'notify::required-timeout'(pspec: GObject.ParamSpec): void;
            'notify::route-metric'(pspec: GObject.ParamSpec): void;
            'notify::route-table'(pspec: GObject.ParamSpec): void;
            'notify::routes'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends SettingIPConfig.ConstructorProps {
            /**
             * A string sent to the DHCP server to identify the local machine which the
             * DHCP server may use to customize the DHCP lease and options.
             * When the property is a hex string ('aa:bb:cc') it is interpreted as a
             * binary client ID, in which case the first byte is assumed to be the
             * 'type' field as per RFC 2132 section 9.14 and the remaining bytes may be
             * an hardware address (e.g. '01:xx:xx:xx:xx:xx:xx' where 1 is the Ethernet
             * ARP type and the rest is a MAC address).
             * If the property is not a hex string it is considered as a
             * non-hardware-address client ID and the 'type' field is set to 0.
             *
             * The special values "mac" and "perm-mac" are supported, which use the
             * current or permanent MAC address of the device to generate a client identifier
             * with type ethernet (01). Currently, these options only work for ethernet
             * type of links.
             *
             * The special value "ipv6-duid" uses the DUID from "ipv6.dhcp-duid" property as
             * an RFC4361-compliant client identifier. As IAID it uses "ipv4.dhcp-iaid"
             * and falls back to "ipv6.dhcp-iaid" if unset.
             *
             * The special value "duid" generates a RFC4361-compliant client identifier based
             * on "ipv4.dhcp-iaid" and uses a DUID generated by hashing /etc/machine-id.
             *
             * The special value "stable" is supported to generate a type 0 client identifier based
             * on the stable-id (see connection.stable-id) and a per-host key. If you set the
             * stable-id, you may want to include the "${DEVICE}" or "${MAC}" specifier to get a
             * per-device key.
             *
             * The special value "none" prevents any client identifier from being sent. Note that
             * this is normally not recommended.
             *
             * If unset, a globally configured default from NetworkManager.conf is
             * used. If still unset, the default depends on the DHCP plugin. The
             * internal dhcp client will default to "mac" and the dhclient plugin will
             * try to use one from its config file if present, or won't sent any
             * client-id otherwise.
             */
            dhcp_client_id: string;
            /**
             * A string sent to the DHCP server to identify the local machine which the
             * DHCP server may use to customize the DHCP lease and options.
             * When the property is a hex string ('aa:bb:cc') it is interpreted as a
             * binary client ID, in which case the first byte is assumed to be the
             * 'type' field as per RFC 2132 section 9.14 and the remaining bytes may be
             * an hardware address (e.g. '01:xx:xx:xx:xx:xx:xx' where 1 is the Ethernet
             * ARP type and the rest is a MAC address).
             * If the property is not a hex string it is considered as a
             * non-hardware-address client ID and the 'type' field is set to 0.
             *
             * The special values "mac" and "perm-mac" are supported, which use the
             * current or permanent MAC address of the device to generate a client identifier
             * with type ethernet (01). Currently, these options only work for ethernet
             * type of links.
             *
             * The special value "ipv6-duid" uses the DUID from "ipv6.dhcp-duid" property as
             * an RFC4361-compliant client identifier. As IAID it uses "ipv4.dhcp-iaid"
             * and falls back to "ipv6.dhcp-iaid" if unset.
             *
             * The special value "duid" generates a RFC4361-compliant client identifier based
             * on "ipv4.dhcp-iaid" and uses a DUID generated by hashing /etc/machine-id.
             *
             * The special value "stable" is supported to generate a type 0 client identifier based
             * on the stable-id (see connection.stable-id) and a per-host key. If you set the
             * stable-id, you may want to include the "${DEVICE}" or "${MAC}" specifier to get a
             * per-device key.
             *
             * The special value "none" prevents any client identifier from being sent. Note that
             * this is normally not recommended.
             *
             * If unset, a globally configured default from NetworkManager.conf is
             * used. If still unset, the default depends on the DHCP plugin. The
             * internal dhcp client will default to "mac" and the dhclient plugin will
             * try to use one from its config file if present, or won't sent any
             * client-id otherwise.
             */
            dhcpClientId: string;
            /**
             * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the
             * specified FQDN will be sent to the DHCP server when acquiring a lease. This
             * property and #NMSettingIPConfig:dhcp-hostname are mutually exclusive and
             * cannot be set at the same time.
             */
            dhcp_fqdn: string;
            /**
             * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the
             * specified FQDN will be sent to the DHCP server when acquiring a lease. This
             * property and #NMSettingIPConfig:dhcp-hostname are mutually exclusive and
             * cannot be set at the same time.
             */
            dhcpFqdn: string;
            /**
             * The Vendor Class Identifier DHCP option (60).
             * Special characters in the data string may be escaped using C-style escapes,
             * nevertheless this property cannot contain nul bytes.
             * If the per-profile value is unspecified (the default),
             * a global connection default gets consulted.
             * If still unspecified, the DHCP option is not sent to the server.
             */
            dhcp_vendor_class_identifier: string;
            /**
             * The Vendor Class Identifier DHCP option (60).
             * Special characters in the data string may be escaped using C-style escapes,
             * nevertheless this property cannot contain nul bytes.
             * If the per-profile value is unspecified (the default),
             * a global connection default gets consulted.
             * If still unspecified, the DHCP option is not sent to the server.
             */
            dhcpVendorClassIdentifier: string;
            /**
             * Enable and disable the IPv4 link-local configuration independently of the
             * ipv4.method configuration. This allows a link-local address (169.254.x.y/16)
             * to be obtained in addition to other addresses, such as those manually
             * configured or obtained from a DHCP server.
             *
             * When set to "auto", the value is dependent on "ipv4.method".
             * When set to "default", it honors the global connection default, before
             * falling back to "auto". Note that if "ipv4.method" is "disabled", then
             * link local addressing is always disabled too. The default is "default".
             */
            link_local: number;
            /**
             * Enable and disable the IPv4 link-local configuration independently of the
             * ipv4.method configuration. This allows a link-local address (169.254.x.y/16)
             * to be obtained in addition to other addresses, such as those manually
             * configured or obtained from a DHCP server.
             *
             * When set to "auto", the value is dependent on "ipv4.method".
             * When set to "default", it honors the global connection default, before
             * falling back to "auto". Note that if "ipv4.method" is "disabled", then
             * link local addressing is always disabled too. The default is "default".
             */
            linkLocal: number;
        }
    }
    type SettingIP4Config = (typeof classes.SettingIP4Config)['prototype'];
    const SettingIP4Config: typeof classes.SettingIP4Config &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingIP4Config.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingIP4Config.SignalSignatures> & classes.SettingIP4Config);
    namespace SettingIP6Config {
        // Signal signatures
        interface SignalSignatures extends SettingIPConfig.SignalSignatures {
            'notify::addr-gen-mode'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-duid'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-pd-hint'(pspec: GObject.ParamSpec): void;
            'notify::ip6-privacy'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::ra-timeout'(pspec: GObject.ParamSpec): void;
            'notify::temp-preferred-lifetime'(pspec: GObject.ParamSpec): void;
            'notify::temp-valid-lifetime'(pspec: GObject.ParamSpec): void;
            'notify::token'(pspec: GObject.ParamSpec): void;
            'notify::addresses'(pspec: GObject.ParamSpec): void;
            'notify::auto-route-ext-gw'(pspec: GObject.ParamSpec): void;
            'notify::dad-timeout'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-dscp'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-hostname'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-hostname-flags'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-iaid'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-reject-servers'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-send-hostname'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-send-release'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-timeout'(pspec: GObject.ParamSpec): void;
            'notify::dns'(pspec: GObject.ParamSpec): void;
            'notify::dns-options'(pspec: GObject.ParamSpec): void;
            'notify::dns-priority'(pspec: GObject.ParamSpec): void;
            'notify::dns-search'(pspec: GObject.ParamSpec): void;
            'notify::gateway'(pspec: GObject.ParamSpec): void;
            'notify::ignore-auto-dns'(pspec: GObject.ParamSpec): void;
            'notify::ignore-auto-routes'(pspec: GObject.ParamSpec): void;
            'notify::may-fail'(pspec: GObject.ParamSpec): void;
            'notify::method'(pspec: GObject.ParamSpec): void;
            'notify::never-default'(pspec: GObject.ParamSpec): void;
            'notify::replace-local-rule'(pspec: GObject.ParamSpec): void;
            'notify::required-timeout'(pspec: GObject.ParamSpec): void;
            'notify::route-metric'(pspec: GObject.ParamSpec): void;
            'notify::route-table'(pspec: GObject.ParamSpec): void;
            'notify::routes'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends SettingIPConfig.ConstructorProps {
            /**
             * Configure the method for creating the IPv6 interface identifier of
             * addresses for RFC4862 IPv6 Stateless Address Autoconfiguration and IPv6
             * Link Local.
             *
             * The permitted values are: %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_EUI64,
             * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_STABLE_PRIVACY.
             * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_DEFAULT_OR_EUI64 or
             * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_DEFAULT.
             *
             * If the property is set to "eui64", the addresses will be generated using
             * the interface token derived from the hardware address. This makes the
             * host part of the address constant, making it possible to track the
             * host's presence when it changes networks. The address changes when the
             * interface hardware is replaced. If a duplicate address is detected,
             * there is no fallback to generate another address. When configured, the
             * "ipv6.token" is used instead of the MAC address to generate addresses
             * for stateless autoconfiguration.
             *
             * If the property is set to "stable-privacy", the interface identifier is
             * generated as specified by RFC7217. This works by hashing a host specific
             * key (see NetworkManager(8) manual), the interface name, the connection's
             * "connection.stable-id" property and the address prefix.  This improves
             * privacy by making it harder to use the address to track the host's
             * presence as every prefix and network has a different identifier. Also,
             * the address is stable when the network interface hardware is replaced.
             *
             * The special values "default" and "default-or-eui64" will fallback to the
             * global connection default as documented in the NetworkManager.conf(5)
             * manual. If the global default is not specified, the fallback value is
             * "stable-privacy" or "eui64", respectively.
             *
             * For libnm, the property defaults to "default" since 1.40.  Previously it
             * used to default to "stable-privacy".  On D-Bus, the absence of an
             * addr-gen-mode setting equals "default". For keyfile plugin, the absence
             * of the setting on disk means "default-or-eui64" so that the property
             * doesn't change on upgrade from older versions.
             *
             * Note that this setting is distinct from the Privacy Extensions as
             * configured by "ip6-privacy" property and it does not affect the
             * temporary addresses configured with this option.
             */
            addr_gen_mode: number;
            /**
             * Configure the method for creating the IPv6 interface identifier of
             * addresses for RFC4862 IPv6 Stateless Address Autoconfiguration and IPv6
             * Link Local.
             *
             * The permitted values are: %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_EUI64,
             * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_STABLE_PRIVACY.
             * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_DEFAULT_OR_EUI64 or
             * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_DEFAULT.
             *
             * If the property is set to "eui64", the addresses will be generated using
             * the interface token derived from the hardware address. This makes the
             * host part of the address constant, making it possible to track the
             * host's presence when it changes networks. The address changes when the
             * interface hardware is replaced. If a duplicate address is detected,
             * there is no fallback to generate another address. When configured, the
             * "ipv6.token" is used instead of the MAC address to generate addresses
             * for stateless autoconfiguration.
             *
             * If the property is set to "stable-privacy", the interface identifier is
             * generated as specified by RFC7217. This works by hashing a host specific
             * key (see NetworkManager(8) manual), the interface name, the connection's
             * "connection.stable-id" property and the address prefix.  This improves
             * privacy by making it harder to use the address to track the host's
             * presence as every prefix and network has a different identifier. Also,
             * the address is stable when the network interface hardware is replaced.
             *
             * The special values "default" and "default-or-eui64" will fallback to the
             * global connection default as documented in the NetworkManager.conf(5)
             * manual. If the global default is not specified, the fallback value is
             * "stable-privacy" or "eui64", respectively.
             *
             * For libnm, the property defaults to "default" since 1.40.  Previously it
             * used to default to "stable-privacy".  On D-Bus, the absence of an
             * addr-gen-mode setting equals "default". For keyfile plugin, the absence
             * of the setting on disk means "default-or-eui64" so that the property
             * doesn't change on upgrade from older versions.
             *
             * Note that this setting is distinct from the Privacy Extensions as
             * configured by "ip6-privacy" property and it does not affect the
             * temporary addresses configured with this option.
             */
            addrGenMode: number;
            /**
             * A string containing the DHCPv6 Unique Identifier (DUID) used by the dhcp
             * client to identify itself to DHCPv6 servers (RFC 3315). The DUID is carried
             * in the Client Identifier option.
             * If the property is a hex string ('aa:bb:cc') it is interpreted as a binary
             * DUID and filled as an opaque value in the Client Identifier option.
             *
             * The special value "lease" will retrieve the DUID previously used from the
             * lease file belonging to the connection. If no DUID is found and "dhclient"
             * is the configured dhcp client, the DUID is searched in the system-wide
             * dhclient lease file. If still no DUID is found, or another dhcp client is
             * used, a global and permanent DUID-UUID (RFC 6355) will be generated based
             * on the machine-id.
             *
             * The special values "llt" and "ll" will generate a DUID of type LLT or LL
             * (see RFC 3315) based on the current MAC address of the device. In order to
             * try providing a stable DUID-LLT, the time field will contain a constant
             * timestamp that is used globally (for all profiles) and persisted to disk.
             *
             * The special values "stable-llt", "stable-ll" and "stable-uuid" will generate
             * a DUID of the corresponding type, derived from the connection's stable-id and
             * a per-host unique key. You may want to include the "${DEVICE}" or "${MAC}" specifier
             * in the stable-id, in case this profile gets activated on multiple devices.
             * So, the link-layer address of "stable-ll" and "stable-llt" will be a generated
             * address derived from the stable id. The DUID-LLT time value in the "stable-llt"
             * option will be picked among a static timespan of three years (the upper bound
             * of the interval is the same constant timestamp used in "llt").
             *
             * When the property is unset, the global value provided for "ipv6.dhcp-duid" is
             * used. If no global value is provided, the default "lease" value is assumed.
             */
            dhcp_duid: string;
            /**
             * A string containing the DHCPv6 Unique Identifier (DUID) used by the dhcp
             * client to identify itself to DHCPv6 servers (RFC 3315). The DUID is carried
             * in the Client Identifier option.
             * If the property is a hex string ('aa:bb:cc') it is interpreted as a binary
             * DUID and filled as an opaque value in the Client Identifier option.
             *
             * The special value "lease" will retrieve the DUID previously used from the
             * lease file belonging to the connection. If no DUID is found and "dhclient"
             * is the configured dhcp client, the DUID is searched in the system-wide
             * dhclient lease file. If still no DUID is found, or another dhcp client is
             * used, a global and permanent DUID-UUID (RFC 6355) will be generated based
             * on the machine-id.
             *
             * The special values "llt" and "ll" will generate a DUID of type LLT or LL
             * (see RFC 3315) based on the current MAC address of the device. In order to
             * try providing a stable DUID-LLT, the time field will contain a constant
             * timestamp that is used globally (for all profiles) and persisted to disk.
             *
             * The special values "stable-llt", "stable-ll" and "stable-uuid" will generate
             * a DUID of the corresponding type, derived from the connection's stable-id and
             * a per-host unique key. You may want to include the "${DEVICE}" or "${MAC}" specifier
             * in the stable-id, in case this profile gets activated on multiple devices.
             * So, the link-layer address of "stable-ll" and "stable-llt" will be a generated
             * address derived from the stable id. The DUID-LLT time value in the "stable-llt"
             * option will be picked among a static timespan of three years (the upper bound
             * of the interval is the same constant timestamp used in "llt").
             *
             * When the property is unset, the global value provided for "ipv6.dhcp-duid" is
             * used. If no global value is provided, the default "lease" value is assumed.
             */
            dhcpDuid: string;
            /**
             * A IPv6 address followed by a slash and a prefix length. If set, the value is
             * sent to the DHCPv6 server as hint indicating the prefix delegation (IA_PD) we
             * want to receive.
             * To only hint a prefix length without prefix, set the address part to the
             * zero address (for example "::/60").
             */
            dhcp_pd_hint: string;
            /**
             * A IPv6 address followed by a slash and a prefix length. If set, the value is
             * sent to the DHCPv6 server as hint indicating the prefix delegation (IA_PD) we
             * want to receive.
             * To only hint a prefix length without prefix, set the address part to the
             * zero address (for example "::/60").
             */
            dhcpPdHint: string;
            /**
             * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
             * enabled, it makes the kernel generate a temporary IPv6 address in
             * addition to the public one generated from MAC address via modified
             * EUI-64.  This enhances privacy, but could cause problems in some
             * applications, on the other hand.  The permitted values are: -1: unknown,
             * 0: disabled, 1: enabled (prefer public address), 2: enabled (prefer temporary
             * addresses).
             *
             * Having a per-connection setting set to "-1" (default) means fallback to
             * global configuration "ipv6.ip6-privacy". If it's also unspecified or set
             * to "-1", fallback to read "/proc/sys/net/ipv6/conf/default/use_tempaddr".
             *
             * Note that this setting is distinct from the Stable Privacy addresses
             * that can be enabled with the "addr-gen-mode" property's "stable-privacy"
             * setting as another way of avoiding host tracking with IPv6 addresses.
             */
            ip6_privacy: SettingIP6ConfigPrivacy;
            /**
             * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
             * enabled, it makes the kernel generate a temporary IPv6 address in
             * addition to the public one generated from MAC address via modified
             * EUI-64.  This enhances privacy, but could cause problems in some
             * applications, on the other hand.  The permitted values are: -1: unknown,
             * 0: disabled, 1: enabled (prefer public address), 2: enabled (prefer temporary
             * addresses).
             *
             * Having a per-connection setting set to "-1" (default) means fallback to
             * global configuration "ipv6.ip6-privacy". If it's also unspecified or set
             * to "-1", fallback to read "/proc/sys/net/ipv6/conf/default/use_tempaddr".
             *
             * Note that this setting is distinct from the Stable Privacy addresses
             * that can be enabled with the "addr-gen-mode" property's "stable-privacy"
             * setting as another way of avoiding host tracking with IPv6 addresses.
             */
            ip6Privacy: SettingIP6ConfigPrivacy;
            /**
             * Maximum transmission unit size, in bytes. If zero (the default), the MTU
             * is set automatically from router advertisements or is left equal to the
             * link-layer MTU. If greater than the link-layer MTU, or greater than zero
             * but less than the minimum IPv6 MTU of 1280, this value has no effect.
             */
            mtu: number;
            /**
             * A timeout for waiting Router Advertisements in seconds. If zero (the default), a
             * globally configured default is used. If still unspecified, the timeout depends on the
             * sysctl settings of the device.
             *
             * Set to 2147483647 (MAXINT32) for infinity.
             */
            ra_timeout: number;
            /**
             * A timeout for waiting Router Advertisements in seconds. If zero (the default), a
             * globally configured default is used. If still unspecified, the timeout depends on the
             * sysctl settings of the device.
             *
             * Set to 2147483647 (MAXINT32) for infinity.
             */
            raTimeout: number;
            /**
             * The preferred lifetime of autogenerated temporary addresses, in seconds.
             *
             * Having a per-connection setting set to "0" (default) means fallback to
             * global configuration "ipv6.temp-preferred-lifetime" setting". If it's also
             * unspecified or set to "0", fallback to read
             * "/proc/sys/net/ipv6/conf/default/temp_prefered_lft".
             */
            temp_preferred_lifetime: number;
            /**
             * The preferred lifetime of autogenerated temporary addresses, in seconds.
             *
             * Having a per-connection setting set to "0" (default) means fallback to
             * global configuration "ipv6.temp-preferred-lifetime" setting". If it's also
             * unspecified or set to "0", fallback to read
             * "/proc/sys/net/ipv6/conf/default/temp_prefered_lft".
             */
            tempPreferredLifetime: number;
            /**
             * The valid lifetime of autogenerated temporary addresses, in seconds.
             *
             * Having a per-connection setting set to "0" (default) means fallback to
             * global configuration "ipv6.temp-valid-lifetime" setting". If it's also
             * unspecified or set to "0", fallback to read
             * "/proc/sys/net/ipv6/conf/default/temp_valid_lft".
             */
            temp_valid_lifetime: number;
            /**
             * The valid lifetime of autogenerated temporary addresses, in seconds.
             *
             * Having a per-connection setting set to "0" (default) means fallback to
             * global configuration "ipv6.temp-valid-lifetime" setting". If it's also
             * unspecified or set to "0", fallback to read
             * "/proc/sys/net/ipv6/conf/default/temp_valid_lft".
             */
            tempValidLifetime: number;
            /**
             * Configure the token for draft-chown-6man-tokenised-ipv6-identifiers-02
             * IPv6 tokenized interface identifiers. Useful with eui64 addr-gen-mode.
             *
             * When set, the token is used as IPv6 interface identifier instead of the
             * hardware address. This only applies to addresses from stateless
             * autoconfiguration, not to IPv6 link local addresses.
             */
            token: string;
        }
    }
    type SettingIP6Config = (typeof classes.SettingIP6Config)['prototype'];
    const SettingIP6Config: typeof classes.SettingIP6Config &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingIP6Config.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingIP6Config.SignalSignatures> & classes.SettingIP6Config);
    namespace SettingIPConfig {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::addresses'(pspec: GObject.ParamSpec): void;
            'notify::auto-route-ext-gw'(pspec: GObject.ParamSpec): void;
            'notify::dad-timeout'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-dscp'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-hostname'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-hostname-flags'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-iaid'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-reject-servers'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-send-hostname'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-send-release'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-timeout'(pspec: GObject.ParamSpec): void;
            'notify::dns'(pspec: GObject.ParamSpec): void;
            'notify::dns-options'(pspec: GObject.ParamSpec): void;
            'notify::dns-priority'(pspec: GObject.ParamSpec): void;
            'notify::dns-search'(pspec: GObject.ParamSpec): void;
            'notify::gateway'(pspec: GObject.ParamSpec): void;
            'notify::ignore-auto-dns'(pspec: GObject.ParamSpec): void;
            'notify::ignore-auto-routes'(pspec: GObject.ParamSpec): void;
            'notify::may-fail'(pspec: GObject.ParamSpec): void;
            'notify::method'(pspec: GObject.ParamSpec): void;
            'notify::never-default'(pspec: GObject.ParamSpec): void;
            'notify::replace-local-rule'(pspec: GObject.ParamSpec): void;
            'notify::required-timeout'(pspec: GObject.ParamSpec): void;
            'notify::route-metric'(pspec: GObject.ParamSpec): void;
            'notify::route-table'(pspec: GObject.ParamSpec): void;
            'notify::routes'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Array of IP addresses.
             */
            addresses: IPAddress[];
            /**
             * VPN connections will default to add the route automatically unless this
             * setting is set to %FALSE.
             *
             * For other connection types, adding such an automatic route is currently
             * not supported and setting this to %TRUE has no effect.
             */
            auto_route_ext_gw: Ternary;
            /**
             * VPN connections will default to add the route automatically unless this
             * setting is set to %FALSE.
             *
             * For other connection types, adding such an automatic route is currently
             * not supported and setting this to %TRUE has no effect.
             */
            autoRouteExtGw: Ternary;
            /**
             * Maximum timeout in milliseconds used to check for the presence of duplicate
             * IP addresses on the network.  If an address conflict is detected, the
             * activation will fail. The property is currently implemented only for IPv4.
             *
             * A zero value means that no duplicate address detection is performed, -1 means
             * the default value (either the value configured globally in NetworkManger.conf
             * or 200ms).  A value greater than zero is a timeout in milliseconds.  Note that
             * the time intervals are subject to randomization as per RFC 5227 and so the
             * actual duration can be between half and the full time specified in this
             * property.
             */
            dad_timeout: number;
            /**
             * Maximum timeout in milliseconds used to check for the presence of duplicate
             * IP addresses on the network.  If an address conflict is detected, the
             * activation will fail. The property is currently implemented only for IPv4.
             *
             * A zero value means that no duplicate address detection is performed, -1 means
             * the default value (either the value configured globally in NetworkManger.conf
             * or 200ms).  A value greater than zero is a timeout in milliseconds.  Note that
             * the time intervals are subject to randomization as per RFC 5227 and so the
             * actual duration can be between half and the full time specified in this
             * property.
             */
            dadTimeout: number;
            /**
             * Specifies the value for the DSCP field (traffic class) of the IP header. When
             * empty, the global default value is used; if no global default is specified, it is
             * assumed to be "CS0". Allowed values are: "CS0", "CS4" and "CS6".
             *
             * The property is currently valid only for IPv4, and it is supported only by the
             * "internal" DHCP plugin.
             */
            dhcp_dscp: string;
            /**
             * Specifies the value for the DSCP field (traffic class) of the IP header. When
             * empty, the global default value is used; if no global default is specified, it is
             * assumed to be "CS0". Allowed values are: "CS0", "CS4" and "CS6".
             *
             * The property is currently valid only for IPv4, and it is supported only by the
             * "internal" DHCP plugin.
             */
            dhcpDscp: string;
            /**
             * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the
             * specified name will be sent to the DHCP server when acquiring a lease.
             * This property and #NMSettingIP4Config:dhcp-fqdn are mutually exclusive and
             * cannot be set at the same time.
             */
            dhcp_hostname: string;
            /**
             * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the
             * specified name will be sent to the DHCP server when acquiring a lease.
             * This property and #NMSettingIP4Config:dhcp-fqdn are mutually exclusive and
             * cannot be set at the same time.
             */
            dhcpHostname: string;
            /**
             * Flags for the DHCP hostname and FQDN.
             *
             * Currently, this property only includes flags to control the FQDN flags
             * set in the DHCP FQDN option. Supported FQDN flags are
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE,
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED and
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_NO_UPDATE.  When no FQDN flag is set and
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_CLEAR_FLAGS is set, the DHCP FQDN option will
             * contain no flag. Otherwise, if no FQDN flag is set and
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_CLEAR_FLAGS is not set, the standard FQDN flags
             * are set in the request:
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE,
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED for IPv4 and
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE for IPv6.
             *
             * When this property is set to the default value %NM_DHCP_HOSTNAME_FLAG_NONE,
             * a global default is looked up in NetworkManager configuration. If that value
             * is unset or also %NM_DHCP_HOSTNAME_FLAG_NONE, then the standard FQDN flags
             * described above are sent in the DHCP requests.
             */
            dhcp_hostname_flags: number;
            /**
             * Flags for the DHCP hostname and FQDN.
             *
             * Currently, this property only includes flags to control the FQDN flags
             * set in the DHCP FQDN option. Supported FQDN flags are
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE,
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED and
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_NO_UPDATE.  When no FQDN flag is set and
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_CLEAR_FLAGS is set, the DHCP FQDN option will
             * contain no flag. Otherwise, if no FQDN flag is set and
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_CLEAR_FLAGS is not set, the standard FQDN flags
             * are set in the request:
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE,
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED for IPv4 and
             * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE for IPv6.
             *
             * When this property is set to the default value %NM_DHCP_HOSTNAME_FLAG_NONE,
             * a global default is looked up in NetworkManager configuration. If that value
             * is unset or also %NM_DHCP_HOSTNAME_FLAG_NONE, then the standard FQDN flags
             * described above are sent in the DHCP requests.
             */
            dhcpHostnameFlags: number;
            /**
             * A string containing the "Identity Association Identifier" (IAID) used by
             * the DHCP client. The string can be a 32-bit number (either decimal,
             * hexadecimal or as colon separated hexadecimal numbers). Alternatively
             * it can be set to the special values "mac", "perm-mac", "ifname" or
             * "stable". When set to "mac" (or "perm-mac"), the last 4 bytes of the
             * current (or permanent) MAC address are used as IAID. When set to
             * "ifname", the IAID is computed by hashing the interface name. The
             * special value "stable" can be used to generate an IAID based on the
             * stable-id (see connection.stable-id), a per-host key and the interface
             * name. When the property is unset, the value from global configuration is
             * used; if no global default is set then the IAID is assumed to be
             * "ifname".
             *
             * For DHCPv4, the IAID is only used with "ipv4.dhcp-client-id"
             * values "duid" and "ipv6-duid" to generate the client-id.
             *
             * For DHCPv6, note that at the moment this property is
             * only supported by the "internal" DHCPv6 plugin. The "dhclient" DHCPv6
             * plugin always derives the IAID from the MAC address.
             *
             * The actually used DHCPv6 IAID for a currently activated interface is
             * exposed in the lease information of the device.
             */
            dhcp_iaid: string;
            /**
             * A string containing the "Identity Association Identifier" (IAID) used by
             * the DHCP client. The string can be a 32-bit number (either decimal,
             * hexadecimal or as colon separated hexadecimal numbers). Alternatively
             * it can be set to the special values "mac", "perm-mac", "ifname" or
             * "stable". When set to "mac" (or "perm-mac"), the last 4 bytes of the
             * current (or permanent) MAC address are used as IAID. When set to
             * "ifname", the IAID is computed by hashing the interface name. The
             * special value "stable" can be used to generate an IAID based on the
             * stable-id (see connection.stable-id), a per-host key and the interface
             * name. When the property is unset, the value from global configuration is
             * used; if no global default is set then the IAID is assumed to be
             * "ifname".
             *
             * For DHCPv4, the IAID is only used with "ipv4.dhcp-client-id"
             * values "duid" and "ipv6-duid" to generate the client-id.
             *
             * For DHCPv6, note that at the moment this property is
             * only supported by the "internal" DHCPv6 plugin. The "dhclient" DHCPv6
             * plugin always derives the IAID from the MAC address.
             *
             * The actually used DHCPv6 IAID for a currently activated interface is
             * exposed in the lease information of the device.
             */
            dhcpIaid: string;
            /**
             * Array of servers from which DHCP offers must be rejected. This property
             * is useful to avoid getting a lease from misconfigured or rogue servers.
             *
             * For DHCPv4, each element must be an IPv4 address, optionally
             * followed by a slash and a prefix length (e.g. "192.168.122.0/24").
             *
             * This property is currently not implemented for DHCPv6.
             */
            dhcp_reject_servers: string[];
            /**
             * Array of servers from which DHCP offers must be rejected. This property
             * is useful to avoid getting a lease from misconfigured or rogue servers.
             *
             * For DHCPv4, each element must be an IPv4 address, optionally
             * followed by a slash and a prefix length (e.g. "192.168.122.0/24").
             *
             * This property is currently not implemented for DHCPv6.
             */
            dhcpRejectServers: string[];
            /**
             * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
             * Some DHCP servers use this hostname to update DNS databases, essentially
             * providing a static hostname for the computer.  If the
             * #NMSettingIPConfig:dhcp-hostname property is %NULL and this property is
             * %TRUE, the current persistent hostname of the computer is sent.
             */
            dhcp_send_hostname: boolean;
            /**
             * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
             * Some DHCP servers use this hostname to update DNS databases, essentially
             * providing a static hostname for the computer.  If the
             * #NMSettingIPConfig:dhcp-hostname property is %NULL and this property is
             * %TRUE, the current persistent hostname of the computer is sent.
             */
            dhcpSendHostname: boolean;
            /**
             * Whether the DHCP client will send RELEASE message when
             * bringing the connection down. The default value is %NM_TERNARY_DEFAULT.
             * When the default value is specified, then the global value from NetworkManager
             * configuration is looked up, if not set, it is considered as %FALSE.
             */
            dhcp_send_release: Ternary;
            /**
             * Whether the DHCP client will send RELEASE message when
             * bringing the connection down. The default value is %NM_TERNARY_DEFAULT.
             * When the default value is specified, then the global value from NetworkManager
             * configuration is looked up, if not set, it is considered as %FALSE.
             */
            dhcpSendRelease: Ternary;
            /**
             * A timeout for a DHCP transaction in seconds. If zero (the default), a
             * globally configured default is used. If still unspecified, a device specific
             * timeout is used (usually 45 seconds).
             *
             * Set to 2147483647 (MAXINT32) for infinity.
             */
            dhcp_timeout: number;
            /**
             * A timeout for a DHCP transaction in seconds. If zero (the default), a
             * globally configured default is used. If still unspecified, a device specific
             * timeout is used (usually 45 seconds).
             *
             * Set to 2147483647 (MAXINT32) for infinity.
             */
            dhcpTimeout: number;
            /**
             * Array of IP addresses of DNS servers.
             *
             * For DoT (DNS over TLS), the SNI server name can be specified by appending
             * "#example.com" to the IP address of the DNS server. This currently only has
             * effect when using systemd-resolved.
             */
            dns: string[];
            /**
             * Array of DNS options to be added to resolv.conf.
             *
             * %NULL means that the options are unset and left at the default.
             * In this case NetworkManager will use default options. This is
             * distinct from an empty list of properties.
             *
             * The following options are directly added to resolv.conf: "attempts",
             *  "debug", "edns0",
             * "inet6", "ip6-bytestring", "ip6-dotint", "ndots", "no-aaaa",
             * "no-check-names", "no-ip6-dotint", "no-reload", "no-tld-query",
             * "rotate", "single-request", "single-request-reopen", "timeout",
             * "trust-ad", "use-vc". See the resolv.conf(5) man page for a
             * detailed description of these options.
             *
             * In addition, NetworkManager supports the special options "_no-add-edns0"
             * and "_no-add-trust-ad". They are not added to resolv.conf, and can be
             * used to prevent the automatic addition of options "edns0" and "trust-ad"
             * when using caching DNS plugins (see below).
             *
             * The "trust-ad" setting is only honored if the profile contributes
             * name servers to resolv.conf, and if all contributing profiles have
             * "trust-ad" enabled.
             *
             * When using a caching DNS plugin (dnsmasq or systemd-resolved in
             * NetworkManager.conf) then "edns0" and "trust-ad" are automatically
             * added, unless "_no-add-edns0" and "_no-add-trust-ad" are present.
             */
            dns_options: string[];
            /**
             * Array of DNS options to be added to resolv.conf.
             *
             * %NULL means that the options are unset and left at the default.
             * In this case NetworkManager will use default options. This is
             * distinct from an empty list of properties.
             *
             * The following options are directly added to resolv.conf: "attempts",
             *  "debug", "edns0",
             * "inet6", "ip6-bytestring", "ip6-dotint", "ndots", "no-aaaa",
             * "no-check-names", "no-ip6-dotint", "no-reload", "no-tld-query",
             * "rotate", "single-request", "single-request-reopen", "timeout",
             * "trust-ad", "use-vc". See the resolv.conf(5) man page for a
             * detailed description of these options.
             *
             * In addition, NetworkManager supports the special options "_no-add-edns0"
             * and "_no-add-trust-ad". They are not added to resolv.conf, and can be
             * used to prevent the automatic addition of options "edns0" and "trust-ad"
             * when using caching DNS plugins (see below).
             *
             * The "trust-ad" setting is only honored if the profile contributes
             * name servers to resolv.conf, and if all contributing profiles have
             * "trust-ad" enabled.
             *
             * When using a caching DNS plugin (dnsmasq or systemd-resolved in
             * NetworkManager.conf) then "edns0" and "trust-ad" are automatically
             * added, unless "_no-add-edns0" and "_no-add-trust-ad" are present.
             */
            dnsOptions: string[];
            /**
             * DNS servers priority.
             *
             * The relative priority for DNS servers specified by this setting.  A lower
             * numerical value is better (higher priority).
             *
             * Negative values have the special effect of excluding other configurations
             * with a greater numerical priority value; so in presence of at least one negative
             * priority, only DNS servers from connections with the lowest priority value will be used.
             * To avoid all DNS leaks, set the priority of the profile that should be used
             * to the most negative value of all active connections profiles.
             *
             * Zero selects a globally configured default value. If the latter is missing
             * or zero too, it defaults to 50 for VPNs (including WireGuard) and 100 for
             * other connections.
             *
             * Note that the priority is to order DNS settings for multiple active
             * connections.  It does not disambiguate multiple DNS servers within the
             * same connection profile.
             *
             * When multiple devices have configurations with the same priority, VPNs will be
             * considered first, then devices with the best (lowest metric) default
             * route and then all other devices.
             *
             * When using dns=default, servers with higher priority will be on top of
             * resolv.conf. To prioritize a given server over another one within the
             * same connection, just specify them in the desired order.
             * Note that commonly the resolver tries name servers in /etc/resolv.conf
             * in the order listed, proceeding with the next server in the list
             * on failure. See for example the "rotate" option of the dns-options setting.
             * If there are any negative DNS priorities, then only name servers from
             * the devices with that lowest priority will be considered.
             *
             * When using a DNS resolver that supports Conditional Forwarding or
             * Split DNS (with dns=dnsmasq or dns=systemd-resolved settings), each connection
             * is used to query domains in its search list. The search domains determine which
             * name servers to ask, and the DNS priority is used to prioritize
             * name servers based on the domain.  Queries for domains not present in any
             * search list are routed through connections having the '~.' special wildcard
             * domain, which is added automatically to connections with the default route
             * (or can be added manually).  When multiple connections specify the same domain, the
             * one with the best priority (lowest numerical value) wins.  If a sub domain
             * is configured on another interface it will be accepted regardless the priority,
             * unless parent domain on the other interface has a negative priority, which causes
             * the sub domain to be shadowed.
             * With Split DNS one can avoid undesired DNS leaks by properly configuring
             * DNS priorities and the search domains, so that only name servers of the desired
             * interface are configured.
             */
            dns_priority: number;
            /**
             * DNS servers priority.
             *
             * The relative priority for DNS servers specified by this setting.  A lower
             * numerical value is better (higher priority).
             *
             * Negative values have the special effect of excluding other configurations
             * with a greater numerical priority value; so in presence of at least one negative
             * priority, only DNS servers from connections with the lowest priority value will be used.
             * To avoid all DNS leaks, set the priority of the profile that should be used
             * to the most negative value of all active connections profiles.
             *
             * Zero selects a globally configured default value. If the latter is missing
             * or zero too, it defaults to 50 for VPNs (including WireGuard) and 100 for
             * other connections.
             *
             * Note that the priority is to order DNS settings for multiple active
             * connections.  It does not disambiguate multiple DNS servers within the
             * same connection profile.
             *
             * When multiple devices have configurations with the same priority, VPNs will be
             * considered first, then devices with the best (lowest metric) default
             * route and then all other devices.
             *
             * When using dns=default, servers with higher priority will be on top of
             * resolv.conf. To prioritize a given server over another one within the
             * same connection, just specify them in the desired order.
             * Note that commonly the resolver tries name servers in /etc/resolv.conf
             * in the order listed, proceeding with the next server in the list
             * on failure. See for example the "rotate" option of the dns-options setting.
             * If there are any negative DNS priorities, then only name servers from
             * the devices with that lowest priority will be considered.
             *
             * When using a DNS resolver that supports Conditional Forwarding or
             * Split DNS (with dns=dnsmasq or dns=systemd-resolved settings), each connection
             * is used to query domains in its search list. The search domains determine which
             * name servers to ask, and the DNS priority is used to prioritize
             * name servers based on the domain.  Queries for domains not present in any
             * search list are routed through connections having the '~.' special wildcard
             * domain, which is added automatically to connections with the default route
             * (or can be added manually).  When multiple connections specify the same domain, the
             * one with the best priority (lowest numerical value) wins.  If a sub domain
             * is configured on another interface it will be accepted regardless the priority,
             * unless parent domain on the other interface has a negative priority, which causes
             * the sub domain to be shadowed.
             * With Split DNS one can avoid undesired DNS leaks by properly configuring
             * DNS priorities and the search domains, so that only name servers of the desired
             * interface are configured.
             */
            dnsPriority: number;
            /**
             * List of DNS search domains. Domains starting with a tilde ('~')
             * are considered 'routing' domains and are used only to decide the
             * interface over which a query must be forwarded; they are not used
             * to complete unqualified host names.
             *
             * When using a DNS plugin that supports Conditional Forwarding or
             * Split DNS, then the search domains specify which name servers to
             * query. This makes the behavior different from running with plain
             * /etc/resolv.conf. For more information see also the dns-priority setting.
             *
             * When set on a profile that also enabled DHCP, the DNS search list
             * received automatically (option 119 for DHCPv4 and option 24 for DHCPv6)
             * gets merged with the manual list. This can be prevented by setting
             * "ignore-auto-dns". Note that if no DNS searches are configured, the
             * fallback will be derived from the domain from DHCP (option 15).
             */
            dns_search: string[];
            /**
             * List of DNS search domains. Domains starting with a tilde ('~')
             * are considered 'routing' domains and are used only to decide the
             * interface over which a query must be forwarded; they are not used
             * to complete unqualified host names.
             *
             * When using a DNS plugin that supports Conditional Forwarding or
             * Split DNS, then the search domains specify which name servers to
             * query. This makes the behavior different from running with plain
             * /etc/resolv.conf. For more information see also the dns-priority setting.
             *
             * When set on a profile that also enabled DHCP, the DNS search list
             * received automatically (option 119 for DHCPv4 and option 24 for DHCPv6)
             * gets merged with the manual list. This can be prevented by setting
             * "ignore-auto-dns". Note that if no DNS searches are configured, the
             * fallback will be derived from the domain from DHCP (option 15).
             */
            dnsSearch: string[];
            /**
             * The gateway associated with this configuration. This is only meaningful
             * if #NMSettingIPConfig:addresses is also set.
             *
             * Setting the gateway causes NetworkManager to configure a standard default route
             * with the gateway as next hop. This is ignored if #NMSettingIPConfig:never-default
             * is set. An alternative is to configure the default route explicitly with a manual
             * route and /0 as prefix length.
             *
             * Note that the gateway usually conflicts with routing that NetworkManager configures
             * for WireGuard interfaces, so usually it should not be set in that case. See
             * #NMSettingWireGuard:ip4-auto-default-route.
             */
            gateway: string;
            /**
             * When #NMSettingIPConfig:method is set to "auto" and this property to
             * %TRUE, automatically configured name servers and search domains are
             * ignored and only name servers and search domains specified in the
             * #NMSettingIPConfig:dns and #NMSettingIPConfig:dns-search properties, if
             * any, are used.
             */
            ignore_auto_dns: boolean;
            /**
             * When #NMSettingIPConfig:method is set to "auto" and this property to
             * %TRUE, automatically configured name servers and search domains are
             * ignored and only name servers and search domains specified in the
             * #NMSettingIPConfig:dns and #NMSettingIPConfig:dns-search properties, if
             * any, are used.
             */
            ignoreAutoDns: boolean;
            /**
             * When #NMSettingIPConfig:method is set to "auto" and this property to
             * %TRUE, automatically configured routes are ignored and only routes
             * specified in the #NMSettingIPConfig:routes property, if any, are used.
             */
            ignore_auto_routes: boolean;
            /**
             * When #NMSettingIPConfig:method is set to "auto" and this property to
             * %TRUE, automatically configured routes are ignored and only routes
             * specified in the #NMSettingIPConfig:routes property, if any, are used.
             */
            ignoreAutoRoutes: boolean;
            /**
             * If %TRUE, allow overall network configuration to proceed even if the
             * configuration specified by this property times out.  Note that at least
             * one IP configuration must succeed or overall network configuration will
             * still fail.  For example, in IPv6-only networks, setting this property to
             * %TRUE on the #NMSettingIP4Config allows the overall network configuration
             * to succeed if IPv4 configuration fails but IPv6 configuration completes
             * successfully.
             */
            may_fail: boolean;
            /**
             * If %TRUE, allow overall network configuration to proceed even if the
             * configuration specified by this property times out.  Note that at least
             * one IP configuration must succeed or overall network configuration will
             * still fail.  For example, in IPv6-only networks, setting this property to
             * %TRUE on the #NMSettingIP4Config allows the overall network configuration
             * to succeed if IPv4 configuration fails but IPv6 configuration completes
             * successfully.
             */
            mayFail: boolean;
            /**
             * IP configuration method.
             *
             * #NMSettingIP4Config and #NMSettingIP6Config both support "disabled",
             * "auto", "manual", and "link-local". See the subclass-specific
             * documentation for other values.
             *
             * In general, for the "auto" method, properties such as
             * #NMSettingIPConfig:dns and #NMSettingIPConfig:routes specify information
             * that is added on to the information returned from automatic
             * configuration.  The #NMSettingIPConfig:ignore-auto-routes and
             * #NMSettingIPConfig:ignore-auto-dns properties modify this behavior.
             *
             * For methods that imply no upstream network, such as "shared" or
             * "link-local", these properties must be empty.
             *
             * For IPv4 method "shared", the IP subnet can be configured by adding one
             * manual IPv4 address or otherwise 10.42.x.0/24 is chosen. Note that the
             * shared method must be configured on the interface which shares the internet
             * to a subnet, not on the uplink which is shared.
             */
            method: string;
            /**
             * If %TRUE, this connection will never be the default connection for this
             * IP type, meaning it will never be assigned the default route by
             * NetworkManager.
             */
            never_default: boolean;
            /**
             * If %TRUE, this connection will never be the default connection for this
             * IP type, meaning it will never be assigned the default route by
             * NetworkManager.
             */
            neverDefault: boolean;
            /**
             * Connections will default to keep the autogenerated priority 0 local rule
             * unless this setting is set to %TRUE.
             */
            replace_local_rule: Ternary;
            /**
             * Connections will default to keep the autogenerated priority 0 local rule
             * unless this setting is set to %TRUE.
             */
            replaceLocalRule: Ternary;
            /**
             * The minimum time interval in milliseconds for which dynamic IP configuration
             * should be tried before the connection succeeds.
             *
             * This property is useful for example if both IPv4 and IPv6 are enabled and
             * are allowed to fail. Normally the connection succeeds as soon as one of
             * the two address families completes; by setting a required timeout for
             * e.g. IPv4, one can ensure that even if IP6 succeeds earlier than IPv4,
             * NetworkManager waits some time for IPv4 before the connection becomes
             * active.
             *
             * Note that if #NMSettingIPConfig:may-fail is FALSE for the same address
             * family, this property has no effect as NetworkManager needs to wait for
             * the full DHCP timeout.
             *
             * A zero value means that no required timeout is present, -1 means the
             * default value (either configuration ipvx.required-timeout override or
             * zero).
             */
            required_timeout: number;
            /**
             * The minimum time interval in milliseconds for which dynamic IP configuration
             * should be tried before the connection succeeds.
             *
             * This property is useful for example if both IPv4 and IPv6 are enabled and
             * are allowed to fail. Normally the connection succeeds as soon as one of
             * the two address families completes; by setting a required timeout for
             * e.g. IPv4, one can ensure that even if IP6 succeeds earlier than IPv4,
             * NetworkManager waits some time for IPv4 before the connection becomes
             * active.
             *
             * Note that if #NMSettingIPConfig:may-fail is FALSE for the same address
             * family, this property has no effect as NetworkManager needs to wait for
             * the full DHCP timeout.
             *
             * A zero value means that no required timeout is present, -1 means the
             * default value (either configuration ipvx.required-timeout override or
             * zero).
             */
            requiredTimeout: number;
            /**
             * The default metric for routes that don't explicitly specify a metric.
             * The default value -1 means that the metric is chosen automatically
             * based on the device type.
             * The metric applies to dynamic routes, manual (static) routes that
             * don't have an explicit metric setting, address prefix routes, and
             * the default route.
             * Note that for IPv6, the kernel accepts zero (0) but coerces it to
             * 1024 (user default). Hence, setting this property to zero effectively
             * mean setting it to 1024.
             * For IPv4, zero is a regular value for the metric.
             */
            route_metric: number;
            /**
             * The default metric for routes that don't explicitly specify a metric.
             * The default value -1 means that the metric is chosen automatically
             * based on the device type.
             * The metric applies to dynamic routes, manual (static) routes that
             * don't have an explicit metric setting, address prefix routes, and
             * the default route.
             * Note that for IPv6, the kernel accepts zero (0) but coerces it to
             * 1024 (user default). Hence, setting this property to zero effectively
             * mean setting it to 1024.
             * For IPv4, zero is a regular value for the metric.
             */
            routeMetric: number;
            /**
             * Enable policy routing (source routing) and set the routing table used when adding routes.
             *
             * This affects all routes, including device-routes, IPv4LL, DHCP, SLAAC, default-routes
             * and static routes. But note that static routes can individually overwrite the setting
             * by explicitly specifying a non-zero routing table.
             *
             * If the table setting is left at zero, it is eligible to be overwritten via global
             * configuration. If the property is zero even after applying the global configuration
             * value, policy routing is disabled for the address family of this connection.
             *
             * Policy routing disabled means that NetworkManager will add all routes to the main
             * table (except static routes that explicitly configure a different table). Additionally,
             * NetworkManager will not delete any extraneous routes from tables except the main table.
             * This is to preserve backward compatibility for users who manage routing tables outside
             * of NetworkManager.
             */
            route_table: number;
            /**
             * Enable policy routing (source routing) and set the routing table used when adding routes.
             *
             * This affects all routes, including device-routes, IPv4LL, DHCP, SLAAC, default-routes
             * and static routes. But note that static routes can individually overwrite the setting
             * by explicitly specifying a non-zero routing table.
             *
             * If the table setting is left at zero, it is eligible to be overwritten via global
             * configuration. If the property is zero even after applying the global configuration
             * value, policy routing is disabled for the address family of this connection.
             *
             * Policy routing disabled means that NetworkManager will add all routes to the main
             * table (except static routes that explicitly configure a different table). Additionally,
             * NetworkManager will not delete any extraneous routes from tables except the main table.
             * This is to preserve backward compatibility for users who manage routing tables outside
             * of NetworkManager.
             */
            routeTable: number;
            /**
             * Array of IP routes.
             */
            routes: IPRoute[];
        }
    }
    type SettingIPConfig = (typeof classes.SettingIPConfig)['prototype'];
    const SettingIPConfig: typeof classes.SettingIPConfig &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingIPConfig.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingIPConfig.SignalSignatures> & classes.SettingIPConfig);
    namespace SettingIPTunnel {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::encapsulation-limit'(pspec: GObject.ParamSpec): void;
            'notify::flags'(pspec: GObject.ParamSpec): void;
            'notify::flow-label'(pspec: GObject.ParamSpec): void;
            'notify::fwmark'(pspec: GObject.ParamSpec): void;
            'notify::input-key'(pspec: GObject.ParamSpec): void;
            'notify::local'(pspec: GObject.ParamSpec): void;
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::output-key'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::path-mtu-discovery'(pspec: GObject.ParamSpec): void;
            'notify::remote'(pspec: GObject.ParamSpec): void;
            'notify::tos'(pspec: GObject.ParamSpec): void;
            'notify::ttl'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * How many additional levels of encapsulation are permitted to be prepended
             * to packets. This property applies only to IPv6 tunnels. To disable this option,
             * add %NM_IP_TUNNEL_FLAG_IP6_IGN_ENCAP_LIMIT to ip-tunnel flags.
             */
            encapsulation_limit: number;
            /**
             * How many additional levels of encapsulation are permitted to be prepended
             * to packets. This property applies only to IPv6 tunnels. To disable this option,
             * add %NM_IP_TUNNEL_FLAG_IP6_IGN_ENCAP_LIMIT to ip-tunnel flags.
             */
            encapsulationLimit: number;
            /**
             * Tunnel flags. Currently, the following values are supported:
             * %NM_IP_TUNNEL_FLAG_IP6_IGN_ENCAP_LIMIT, %NM_IP_TUNNEL_FLAG_IP6_USE_ORIG_TCLASS,
             * %NM_IP_TUNNEL_FLAG_IP6_USE_ORIG_FLOWLABEL, %NM_IP_TUNNEL_FLAG_IP6_MIP6_DEV,
             * %NM_IP_TUNNEL_FLAG_IP6_RCV_DSCP_COPY, %NM_IP_TUNNEL_FLAG_IP6_USE_ORIG_FWMARK.
             * They are valid only for IPv6 tunnels.
             */
            flags: number;
            /**
             * The flow label to assign to tunnel packets. This property applies only to
             * IPv6 tunnels.
             */
            flow_label: number;
            /**
             * The flow label to assign to tunnel packets. This property applies only to
             * IPv6 tunnels.
             */
            flowLabel: number;
            /**
             * The fwmark value to assign to tunnel packets. This property can be set
             * to a non zero value only on VTI and VTI6 tunnels.
             */
            fwmark: number;
            /**
             * The key used for tunnel input packets; the property is valid only for
             * certain tunnel modes (GRE, IP6GRE). If empty, no key is used.
             */
            input_key: string;
            /**
             * The key used for tunnel input packets; the property is valid only for
             * certain tunnel modes (GRE, IP6GRE). If empty, no key is used.
             */
            inputKey: string;
            /**
             * The local endpoint of the tunnel; the value can be empty, otherwise it
             * must contain an IPv4 or IPv6 address.
             */
            local: string;
            /**
             * The tunneling mode. Valid values: %NM_IP_TUNNEL_MODE_IPIP,
             * %NM_IP_TUNNEL_MODE_GRE, %NM_IP_TUNNEL_MODE_SIT, %NM_IP_TUNNEL_MODE_ISATAP,
             * %NM_IP_TUNNEL_MODE_VTI, %NM_IP_TUNNEL_MODE_IP6IP6, %NM_IP_TUNNEL_MODE_IPIP6,
             * %NM_IP_TUNNEL_MODE_IP6GRE, %NM_IP_TUNNEL_MODE_VTI6, %NM_IP_TUNNEL_MODE_GRETAP
             * and %NM_IP_TUNNEL_MODE_IP6GRETAP
             */
            mode: number;
            /**
             * If non-zero, only transmit packets of the specified size or smaller,
             * breaking larger packets up into multiple fragments.
             */
            mtu: number;
            /**
             * The key used for tunnel output packets; the property is valid only for
             * certain tunnel modes (GRE, IP6GRE). If empty, no key is used.
             */
            output_key: string;
            /**
             * The key used for tunnel output packets; the property is valid only for
             * certain tunnel modes (GRE, IP6GRE). If empty, no key is used.
             */
            outputKey: string;
            /**
             * If given, specifies the parent interface name or parent connection UUID
             * the new device will be bound to so that tunneled packets will only be
             * routed via that interface.
             */
            parent: string;
            /**
             * Whether to enable Path MTU Discovery on this tunnel.
             */
            path_mtu_discovery: boolean;
            /**
             * Whether to enable Path MTU Discovery on this tunnel.
             */
            pathMtuDiscovery: boolean;
            /**
             * The remote endpoint of the tunnel; the value must contain an IPv4 or IPv6
             * address.
             */
            remote: string;
            /**
             * The type of service (IPv4) or traffic class (IPv6) field to be set on
             * tunneled packets.
             */
            tos: number;
            /**
             * The TTL to assign to tunneled packets. 0 is a special value meaning that
             * packets inherit the TTL value.
             */
            ttl: number;
        }
    }
    type SettingIPTunnel = (typeof classes.SettingIPTunnel)['prototype'];
    const SettingIPTunnel: typeof classes.SettingIPTunnel &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingIPTunnel.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingIPTunnel.SignalSignatures> & classes.SettingIPTunnel);
    namespace SettingInfiniband {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::mac-address'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::p-key'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::transport-mode'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * If specified, this connection will only apply to the IPoIB device whose
             * permanent MAC address matches. This property does not change the MAC
             * address of the device (i.e. MAC spoofing).
             */
            mac_address: string;
            /**
             * If specified, this connection will only apply to the IPoIB device whose
             * permanent MAC address matches. This property does not change the MAC
             * address of the device (i.e. MAC spoofing).
             */
            macAddress: string;
            /**
             * If non-zero, only transmit packets of the specified size or smaller,
             * breaking larger packets up into multiple frames.
             */
            mtu: number;
            /**
             * The InfiniBand p-key to use for this device. A value of -1 means to use
             * the default p-key (aka "the p-key at index 0"). Otherwise, it is a
             * 16-bit unsigned integer, whose high bit 0x8000 is set if it is a "full
             * membership" p-key. The values 0 and 0x8000 are not allowed.
             *
             * With the p-key set, the interface name is always "$parent.$p_key".
             * Setting "connection.interface-name" to another name is not supported.
             *
             * Note that kernel will internally always set the full membership bit,
             * although the interface name does not reflect that. Usually the user
             * would want to configure a full membership p-key with 0x8000 flag set.
             */
            p_key: number;
            /**
             * The InfiniBand p-key to use for this device. A value of -1 means to use
             * the default p-key (aka "the p-key at index 0"). Otherwise, it is a
             * 16-bit unsigned integer, whose high bit 0x8000 is set if it is a "full
             * membership" p-key. The values 0 and 0x8000 are not allowed.
             *
             * With the p-key set, the interface name is always "$parent.$p_key".
             * Setting "connection.interface-name" to another name is not supported.
             *
             * Note that kernel will internally always set the full membership bit,
             * although the interface name does not reflect that. Usually the user
             * would want to configure a full membership p-key with 0x8000 flag set.
             */
            pKey: number;
            /**
             * The interface name of the parent device of this device. Normally %NULL,
             * but if the #NMSettingInfiniband:p_key property is set, then you must
             * specify the base device by setting either this property or
             * #NMSettingInfiniband:mac-address.
             */
            parent: string;
            /**
             * The IP-over-InfiniBand transport mode. Either "datagram" or
             * "connected".
             */
            transport_mode: string;
            /**
             * The IP-over-InfiniBand transport mode. Either "datagram" or
             * "connected".
             */
            transportMode: string;
        }
    }
    type SettingInfiniband = (typeof classes.SettingInfiniband)['prototype'];
    const SettingInfiniband: typeof classes.SettingInfiniband &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingInfiniband.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingInfiniband.SignalSignatures> & classes.SettingInfiniband);
    namespace SettingLink {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::gro-max-size'(pspec: GObject.ParamSpec): void;
            'notify::gso-max-segments'(pspec: GObject.ParamSpec): void;
            'notify::gso-max-size'(pspec: GObject.ParamSpec): void;
            'notify::tx-queue-length'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The maximum size of a packet built by the Generic Receive Offload stack for
             * this device. The value must be between 0 and 4294967295. When set to -1, the
             * existing value is preserved.
             */
            gro_max_size: number;
            /**
             * The maximum size of a packet built by the Generic Receive Offload stack for
             * this device. The value must be between 0 and 4294967295. When set to -1, the
             * existing value is preserved.
             */
            groMaxSize: number;
            /**
             * The maximum segments of a Generic Segment Offload packet the device should accept.
             * The value must be between 0 and 4294967295. When set to -1, the existing value
             * is preserved.
             */
            gso_max_segments: number;
            /**
             * The maximum segments of a Generic Segment Offload packet the device should accept.
             * The value must be between 0 and 4294967295. When set to -1, the existing value
             * is preserved.
             */
            gsoMaxSegments: number;
            /**
             * The maximum size of a Generic Segment Offload packet the device should accept.
             * The value must be between 0 and 4294967295. When set to -1, the existing value
             * is preserved.
             */
            gso_max_size: number;
            /**
             * The maximum size of a Generic Segment Offload packet the device should accept.
             * The value must be between 0 and 4294967295. When set to -1, the existing value
             * is preserved.
             */
            gsoMaxSize: number;
            /**
             * The size of the transmit queue for the device, in number of packets. The value
             * must be between 0 and 4294967295. When set to -1, the existing value is preserved.
             */
            tx_queue_length: number;
            /**
             * The size of the transmit queue for the device, in number of packets. The value
             * must be between 0 and 4294967295. When set to -1, the existing value is preserved.
             */
            txQueueLength: number;
        }
    }
    type SettingLink = (typeof classes.SettingLink)['prototype'];
    const SettingLink: typeof classes.SettingLink &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingLink.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingLink.SignalSignatures> & classes.SettingLink);
    namespace SettingLoopback {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * If non-zero, only transmit packets of the specified size or smaller,
             * breaking larger packets up into multiple Ethernet frames.
             */
            mtu: number;
        }
    }
    type SettingLoopback = (typeof classes.SettingLoopback)['prototype'];
    const SettingLoopback: typeof classes.SettingLoopback &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingLoopback.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingLoopback.SignalSignatures> & classes.SettingLoopback);
    namespace SettingMacsec {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::encrypt'(pspec: GObject.ParamSpec): void;
            'notify::mka-cak'(pspec: GObject.ParamSpec): void;
            'notify::mka-cak-flags'(pspec: GObject.ParamSpec): void;
            'notify::mka-ckn'(pspec: GObject.ParamSpec): void;
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::offload'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::port'(pspec: GObject.ParamSpec): void;
            'notify::send-sci'(pspec: GObject.ParamSpec): void;
            'notify::validation'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Whether the transmitted traffic must be encrypted.
             */
            encrypt: boolean;
            /**
             * The pre-shared CAK (Connectivity Association Key) for MACsec
             * Key Agreement. Must be a string of 32 hexadecimal characters.
             */
            mka_cak: string;
            /**
             * The pre-shared CAK (Connectivity Association Key) for MACsec
             * Key Agreement. Must be a string of 32 hexadecimal characters.
             */
            mkaCak: string;
            /**
             * Flags indicating how to handle the #NMSettingMacsec:mka-cak
             * property.
             */
            mka_cak_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingMacsec:mka-cak
             * property.
             */
            mkaCakFlags: SettingSecretFlags;
            /**
             * The pre-shared CKN (Connectivity-association Key Name) for
             * MACsec Key Agreement. Must be a string of hexadecimal characters
             * with a even length between 2 and 64.
             */
            mka_ckn: string;
            /**
             * The pre-shared CKN (Connectivity-association Key Name) for
             * MACsec Key Agreement. Must be a string of hexadecimal characters
             * with a even length between 2 and 64.
             */
            mkaCkn: string;
            /**
             * Specifies how the CAK (Connectivity Association Key) for MKA (MACsec Key
             * Agreement) is obtained.
             */
            mode: number;
            /**
             * Specifies the MACsec offload mode.
             *
             * %NM_SETTING_MACSEC_OFFLOAD_OFF disables MACsec offload.
             *
             * %NM_SETTING_MACSEC_OFFLOAD_PHY and %NM_SETTING_MACSEC_OFFLOAD_MAC request offload
             * respectively to the PHY or to the MAC; if the selected mode is not available, the
             * connection will fail.
             *
             * %NM_SETTING_MACSEC_OFFLOAD_DEFAULT uses the global default value specified in
             * NetworkManager configuration; if no global default is defined, the built-in
             * default is %NM_SETTING_MACSEC_OFFLOAD_OFF.
             */
            offload: number;
            /**
             * If given, specifies the parent interface name or parent connection UUID
             * from which this MACSEC interface should be created.  If this property is
             * not specified, the connection must contain an #NMSettingWired setting
             * with a #NMSettingWired:mac-address property.
             */
            parent: string;
            /**
             * The port component of the SCI (Secure Channel Identifier), between 1 and 65534.
             */
            port: number;
            /**
             * Specifies whether the SCI (Secure Channel Identifier) is included
             * in every packet.
             */
            send_sci: boolean;
            /**
             * Specifies whether the SCI (Secure Channel Identifier) is included
             * in every packet.
             */
            sendSci: boolean;
            /**
             * Specifies the validation mode for incoming frames.
             */
            validation: number;
        }
    }
    type SettingMacsec = (typeof classes.SettingMacsec)['prototype'];
    const SettingMacsec: typeof classes.SettingMacsec &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingMacsec.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingMacsec.SignalSignatures> & classes.SettingMacsec);
    namespace SettingMacvlan {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::promiscuous'(pspec: GObject.ParamSpec): void;
            'notify::tap'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The macvlan mode, which specifies the communication mechanism between multiple
             * macvlans on the same lower device.
             */
            mode: number;
            /**
             * If given, specifies the parent interface name or parent connection UUID
             * from which this MAC-VLAN interface should be created.  If this property is
             * not specified, the connection must contain an #NMSettingWired setting
             * with a #NMSettingWired:mac-address property.
             */
            parent: string;
            /**
             * Whether the interface should be put in promiscuous mode.
             */
            promiscuous: boolean;
            /**
             * Whether the interface should be a MACVTAP.
             */
            tap: boolean;
        }
    }
    type SettingMacvlan = (typeof classes.SettingMacvlan)['prototype'];
    const SettingMacvlan: typeof classes.SettingMacvlan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingMacvlan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingMacvlan.SignalSignatures> & classes.SettingMacvlan);
    namespace SettingMatch {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::driver'(pspec: GObject.ParamSpec): void;
            'notify::interface-name'(pspec: GObject.ParamSpec): void;
            'notify::kernel-command-line'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * A list of driver names to match. Each element is a shell wildcard pattern.
             *
             * See NMSettingMatch:interface-name for how special characters '|', '&',
             * '!' and '\\' are used for optional and mandatory matches and inverting the
             * pattern.
             */
            driver: string[];
            /**
             * A list of interface names to match. Each element is a shell wildcard
             * pattern.
             *
             * An element can be prefixed with a pipe symbol (|) or an ampersand (&).
             * The former means that the element is optional and the latter means that
             * it is mandatory. If there are any optional elements, than the match
             * evaluates to true if at least one of the optional element matches
             * (logical OR). If there are any mandatory elements, then they all
             * must match (logical AND). By default, an element is optional. This means
             * that an element "foo" behaves the same as "|foo". An element can also be inverted
             * with exclamation mark (!) between the pipe symbol (or the ampersand) and before
             * the pattern. Note that "!foo" is a shortcut for the mandatory match "&!foo". Finally,
             * a backslash can be used at the beginning of the element (after the optional special characters)
             * to escape the start of the pattern. For example, "&\\!a" is an mandatory match for literally "!a".
             */
            interface_name: string[];
            /**
             * A list of interface names to match. Each element is a shell wildcard
             * pattern.
             *
             * An element can be prefixed with a pipe symbol (|) or an ampersand (&).
             * The former means that the element is optional and the latter means that
             * it is mandatory. If there are any optional elements, than the match
             * evaluates to true if at least one of the optional element matches
             * (logical OR). If there are any mandatory elements, then they all
             * must match (logical AND). By default, an element is optional. This means
             * that an element "foo" behaves the same as "|foo". An element can also be inverted
             * with exclamation mark (!) between the pipe symbol (or the ampersand) and before
             * the pattern. Note that "!foo" is a shortcut for the mandatory match "&!foo". Finally,
             * a backslash can be used at the beginning of the element (after the optional special characters)
             * to escape the start of the pattern. For example, "&\\!a" is an mandatory match for literally "!a".
             */
            interfaceName: string[];
            /**
             * A list of kernel command line arguments to match. This may be used to check
             * whether a specific kernel command line option is set (or unset, if prefixed with
             * the exclamation mark). The argument must either be a single word, or
             * an assignment (i.e. two words, joined by "="). In the former case the kernel
             * command line is searched for the word appearing as is, or as left hand side
             * of an assignment. In the latter case, the exact assignment is looked for
             * with right and left hand side matching. Wildcard patterns are not supported.
             *
             * See NMSettingMatch:interface-name for how special characters '|', '&',
             * '!' and '\\' are used for optional and mandatory matches and inverting the
             * match.
             */
            kernel_command_line: string[];
            /**
             * A list of kernel command line arguments to match. This may be used to check
             * whether a specific kernel command line option is set (or unset, if prefixed with
             * the exclamation mark). The argument must either be a single word, or
             * an assignment (i.e. two words, joined by "="). In the former case the kernel
             * command line is searched for the word appearing as is, or as left hand side
             * of an assignment. In the latter case, the exact assignment is looked for
             * with right and left hand side matching. Wildcard patterns are not supported.
             *
             * See NMSettingMatch:interface-name for how special characters '|', '&',
             * '!' and '\\' are used for optional and mandatory matches and inverting the
             * match.
             */
            kernelCommandLine: string[];
            /**
             * A list of paths to match against the ID_PATH udev property of
             * devices. ID_PATH represents the topological persistent path of a
             * device. It typically contains a subsystem string (pci, usb, platform,
             * etc.) and a subsystem-specific identifier.
             *
             * For PCI devices the path has the form
             * "pci-$domain:$bus:$device.$function", where each variable is an
             * hexadecimal value; for example "pci-0000:0a:00.0".
             *
             * The path of a device can be obtained with "udevadm info
             * /sys/class/net/$dev | grep ID_PATH=" or by looking at the "path"
             * property exported by NetworkManager ("nmcli -f general.path device
             * show $dev").
             *
             * Each element of the list is a shell wildcard pattern.
             *
             * See NMSettingMatch:interface-name for how special characters '|', '&',
             * '!' and '\\' are used for optional and mandatory matches and inverting the
             * pattern.
             */
            path: string[];
        }
    }
    type SettingMatch = (typeof classes.SettingMatch)['prototype'];
    const SettingMatch: typeof classes.SettingMatch &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingMatch.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingMatch.SignalSignatures> & classes.SettingMatch);
    namespace SettingOlpcMesh {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::channel'(pspec: GObject.ParamSpec): void;
            'notify::dhcp-anycast-address'(pspec: GObject.ParamSpec): void;
            'notify::ssid'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Channel on which the mesh network to join is located.
             */
            channel: number;
            /**
             * Anycast DHCP MAC address used when requesting an IP address via DHCP.
             * The specific anycast address used determines which DHCP server class
             * answers the request.
             *
             * This is currently only implemented by dhclient DHCP plugin.
             */
            dhcp_anycast_address: string;
            /**
             * Anycast DHCP MAC address used when requesting an IP address via DHCP.
             * The specific anycast address used determines which DHCP server class
             * answers the request.
             *
             * This is currently only implemented by dhclient DHCP plugin.
             */
            dhcpAnycastAddress: string;
            /**
             * SSID of the mesh network to join.
             */
            ssid: GLib.Bytes;
        }
    }
    type SettingOlpcMesh = (typeof classes.SettingOlpcMesh)['prototype'];
    const SettingOlpcMesh: typeof classes.SettingOlpcMesh &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingOlpcMesh.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingOlpcMesh.SignalSignatures> & classes.SettingOlpcMesh);
    namespace SettingOvsBridge {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::datapath-type'(pspec: GObject.ParamSpec): void;
            'notify::fail-mode'(pspec: GObject.ParamSpec): void;
            'notify::mcast-snooping-enable'(pspec: GObject.ParamSpec): void;
            'notify::rstp-enable'(pspec: GObject.ParamSpec): void;
            'notify::stp-enable'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The data path type. One of "system", "netdev" or empty.
             */
            datapath_type: string;
            /**
             * The data path type. One of "system", "netdev" or empty.
             */
            datapathType: string;
            /**
             * The bridge failure mode. One of "secure", "standalone" or empty.
             */
            fail_mode: string;
            /**
             * The bridge failure mode. One of "secure", "standalone" or empty.
             */
            failMode: string;
            /**
             * Enable or disable multicast snooping.
             */
            mcast_snooping_enable: boolean;
            /**
             * Enable or disable multicast snooping.
             */
            mcastSnoopingEnable: boolean;
            /**
             * Enable or disable RSTP.
             */
            rstp_enable: boolean;
            /**
             * Enable or disable RSTP.
             */
            rstpEnable: boolean;
            /**
             * Enable or disable STP.
             */
            stp_enable: boolean;
            /**
             * Enable or disable STP.
             */
            stpEnable: boolean;
        }
    }
    type SettingOvsBridge = (typeof classes.SettingOvsBridge)['prototype'];
    const SettingOvsBridge: typeof classes.SettingOvsBridge &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingOvsBridge.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingOvsBridge.SignalSignatures> & classes.SettingOvsBridge);
    namespace SettingOvsDpdk {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::devargs'(pspec: GObject.ParamSpec): void;
            'notify::n-rxq'(pspec: GObject.ParamSpec): void;
            'notify::n-rxq-desc'(pspec: GObject.ParamSpec): void;
            'notify::n-txq-desc'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Open vSwitch DPDK device arguments.
             */
            devargs: string;
            /**
             * Open vSwitch DPDK number of rx queues.
             * Defaults to zero which means to leave the parameter in OVS unspecified
             * and effectively configures one queue.
             */
            n_rxq: number;
            /**
             * Open vSwitch DPDK number of rx queues.
             * Defaults to zero which means to leave the parameter in OVS unspecified
             * and effectively configures one queue.
             */
            nRxq: number;
            /**
             * The rx queue size (number of rx descriptors) for DPDK ports.
             * Must be zero or a power of 2 between 1 and 4096, and supported
             * by the hardware. Defaults to zero which means to leave the
             * parameter in OVS unspecified and effectively configures 2048
             * descriptors.
             */
            n_rxq_desc: number;
            /**
             * The rx queue size (number of rx descriptors) for DPDK ports.
             * Must be zero or a power of 2 between 1 and 4096, and supported
             * by the hardware. Defaults to zero which means to leave the
             * parameter in OVS unspecified and effectively configures 2048
             * descriptors.
             */
            nRxqDesc: number;
            /**
             * The tx queue size (number of tx descriptors) for DPDK ports.
             * Must be zero or a power of 2 between 1 and 4096, and supported
             * by the hardware. Defaults to zero which means to leave the
             * parameter in OVS unspecified and effectively configures 2048
             * descriptors.
             */
            n_txq_desc: number;
            /**
             * The tx queue size (number of tx descriptors) for DPDK ports.
             * Must be zero or a power of 2 between 1 and 4096, and supported
             * by the hardware. Defaults to zero which means to leave the
             * parameter in OVS unspecified and effectively configures 2048
             * descriptors.
             */
            nTxqDesc: number;
        }
    }
    type SettingOvsDpdk = (typeof classes.SettingOvsDpdk)['prototype'];
    const SettingOvsDpdk: typeof classes.SettingOvsDpdk &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingOvsDpdk.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingOvsDpdk.SignalSignatures> & classes.SettingOvsDpdk);
    namespace SettingOvsExternalIDs {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::data'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * A dictionary of key/value pairs with external-ids for OVS.
             */
            data: GLib.HashTable<string, string>;
        }
    }
    type SettingOvsExternalIDs = (typeof classes.SettingOvsExternalIDs)['prototype'];
    const SettingOvsExternalIDs: typeof classes.SettingOvsExternalIDs &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingOvsExternalIDs.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingOvsExternalIDs.SignalSignatures> & classes.SettingOvsExternalIDs);
    namespace SettingOvsInterface {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::ofport-request'(pspec: GObject.ParamSpec): void;
            'notify::type'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Open vSwitch openflow port number.
             * Defaults to zero which means that port number will not be specified
             * and it will be chosen randomly by ovs. OpenFlow ports are the network interfaces
             * for passing packets between OpenFlow processing and the rest of the network.
             * OpenFlow switches connect logically to each other via their OpenFlow ports.
             */
            ofport_request: number;
            /**
             * Open vSwitch openflow port number.
             * Defaults to zero which means that port number will not be specified
             * and it will be chosen randomly by ovs. OpenFlow ports are the network interfaces
             * for passing packets between OpenFlow processing and the rest of the network.
             * OpenFlow switches connect logically to each other via their OpenFlow ports.
             */
            ofportRequest: number;
            /**
             * The interface type. Either "internal", "system", "patch", "dpdk", or empty.
             */
            type: string;
        }
    }
    type SettingOvsInterface = (typeof classes.SettingOvsInterface)['prototype'];
    const SettingOvsInterface: typeof classes.SettingOvsInterface &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingOvsInterface.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingOvsInterface.SignalSignatures> & classes.SettingOvsInterface);
    namespace SettingOvsOtherConfig {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::data'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * A dictionary of key/value pairs with other_config settings for OVS.
             * See also "other_config" in the "ovs-vswitchd.conf.db" manual for the keys
             * that OVS supports.
             */
            data: GLib.HashTable<string, string>;
        }
    }
    type SettingOvsOtherConfig = (typeof classes.SettingOvsOtherConfig)['prototype'];
    const SettingOvsOtherConfig: typeof classes.SettingOvsOtherConfig &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingOvsOtherConfig.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingOvsOtherConfig.SignalSignatures> & classes.SettingOvsOtherConfig);
    namespace SettingOvsPatch {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::peer'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Specifies the name of the interface for the other side of the patch.
             * The patch on the other side must also set this interface as peer.
             */
            peer: string;
        }
    }
    type SettingOvsPatch = (typeof classes.SettingOvsPatch)['prototype'];
    const SettingOvsPatch: typeof classes.SettingOvsPatch &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingOvsPatch.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingOvsPatch.SignalSignatures> & classes.SettingOvsPatch);
    namespace SettingOvsPort {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::bond-downdelay'(pspec: GObject.ParamSpec): void;
            'notify::bond-mode'(pspec: GObject.ParamSpec): void;
            'notify::bond-updelay'(pspec: GObject.ParamSpec): void;
            'notify::lacp'(pspec: GObject.ParamSpec): void;
            'notify::tag'(pspec: GObject.ParamSpec): void;
            'notify::trunks'(pspec: GObject.ParamSpec): void;
            'notify::vlan-mode'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The time port must be inactive in order to be considered down.
             */
            bond_downdelay: number;
            /**
             * The time port must be inactive in order to be considered down.
             */
            bondDowndelay: number;
            /**
             * Bonding mode. One of "active-backup", "balance-slb", or "balance-tcp".
             */
            bond_mode: string;
            /**
             * Bonding mode. One of "active-backup", "balance-slb", or "balance-tcp".
             */
            bondMode: string;
            /**
             * The time port must be active before it starts forwarding traffic.
             */
            bond_updelay: number;
            /**
             * The time port must be active before it starts forwarding traffic.
             */
            bondUpdelay: number;
            /**
             * LACP mode. One of "active", "off", or "passive".
             */
            lacp: string;
            /**
             * The VLAN tag in the range 0-4095.
             */
            tag: number;
            /**
             * A list of VLAN ranges that this port trunks.
             *
             * The property is valid only for ports with mode "trunk",
             * "native-tagged", or "native-untagged port".
             * If it is empty, the port trunks all VLANs.
             */
            trunks: Range[];
            /**
             * The VLAN mode. One of "access", "native-tagged", "native-untagged",
             * "trunk", "dot1q-tunnel" or unset.
             */
            vlan_mode: string;
            /**
             * The VLAN mode. One of "access", "native-tagged", "native-untagged",
             * "trunk", "dot1q-tunnel" or unset.
             */
            vlanMode: string;
        }
    }
    type SettingOvsPort = (typeof classes.SettingOvsPort)['prototype'];
    const SettingOvsPort: typeof classes.SettingOvsPort &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingOvsPort.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingOvsPort.SignalSignatures> & classes.SettingOvsPort);
    namespace SettingPpp {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::baud'(pspec: GObject.ParamSpec): void;
            'notify::crtscts'(pspec: GObject.ParamSpec): void;
            'notify::lcp-echo-failure'(pspec: GObject.ParamSpec): void;
            'notify::lcp-echo-interval'(pspec: GObject.ParamSpec): void;
            'notify::mppe-stateful'(pspec: GObject.ParamSpec): void;
            'notify::mru'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::no-vj-comp'(pspec: GObject.ParamSpec): void;
            'notify::noauth'(pspec: GObject.ParamSpec): void;
            'notify::nobsdcomp'(pspec: GObject.ParamSpec): void;
            'notify::nodeflate'(pspec: GObject.ParamSpec): void;
            'notify::refuse-chap'(pspec: GObject.ParamSpec): void;
            'notify::refuse-eap'(pspec: GObject.ParamSpec): void;
            'notify::refuse-mschap'(pspec: GObject.ParamSpec): void;
            'notify::refuse-mschapv2'(pspec: GObject.ParamSpec): void;
            'notify::refuse-pap'(pspec: GObject.ParamSpec): void;
            'notify::require-mppe'(pspec: GObject.ParamSpec): void;
            'notify::require-mppe-128'(pspec: GObject.ParamSpec): void;
            'notify::require-mppe128'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * If non-zero, instruct pppd to set the serial port to the specified
             * baudrate.  This value should normally be left as 0 to automatically
             * choose the speed.
             */
            baud: number;
            /**
             * If %TRUE, specify that pppd should set the serial port to use hardware
             * flow control with RTS and CTS signals.  This value should normally be set
             * to %FALSE.
             */
            crtscts: boolean;
            /**
             * If non-zero, instruct pppd to presume the connection to the peer has
             * failed if the specified number of LCP echo-requests go unanswered by the
             * peer.  The "lcp-echo-interval" property must also be set to a non-zero
             * value if this property is used.
             */
            lcp_echo_failure: number;
            /**
             * If non-zero, instruct pppd to presume the connection to the peer has
             * failed if the specified number of LCP echo-requests go unanswered by the
             * peer.  The "lcp-echo-interval" property must also be set to a non-zero
             * value if this property is used.
             */
            lcpEchoFailure: number;
            /**
             * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
             * every n seconds (where n is the specified value).  Note that some PPP
             * peers will respond to echo requests and some will not, and it is not
             * possible to autodetect this.
             */
            lcp_echo_interval: number;
            /**
             * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
             * every n seconds (where n is the specified value).  Note that some PPP
             * peers will respond to echo requests and some will not, and it is not
             * possible to autodetect this.
             */
            lcpEchoInterval: number;
            /**
             * If %TRUE, stateful MPPE is used.  See pppd documentation for more
             * information on stateful MPPE.
             */
            mppe_stateful: boolean;
            /**
             * If %TRUE, stateful MPPE is used.  See pppd documentation for more
             * information on stateful MPPE.
             */
            mppeStateful: boolean;
            /**
             * If non-zero, instruct pppd to request that the peer send packets no
             * larger than the specified size.  If non-zero, the MRU should be between
             * 128 and 16384.
             */
            mru: number;
            /**
             * If non-zero, instruct pppd to send packets no larger than the specified
             * size.
             */
            mtu: number;
            /**
             * If %TRUE, Van Jacobsen TCP header compression will not be requested.
             */
            no_vj_comp: boolean;
            /**
             * If %TRUE, Van Jacobsen TCP header compression will not be requested.
             */
            noVjComp: boolean;
            /**
             * If %TRUE, do not require the other side (usually the PPP server) to
             * authenticate itself to the client.  If %FALSE, require authentication
             * from the remote side.  In almost all cases, this should be %TRUE.
             */
            noauth: boolean;
            /**
             * If %TRUE, BSD compression will not be requested.
             */
            nobsdcomp: boolean;
            /**
             * If %TRUE, "deflate" compression will not be requested.
             */
            nodeflate: boolean;
            /**
             * If %TRUE, the CHAP authentication method will not be used.
             */
            refuse_chap: boolean;
            /**
             * If %TRUE, the CHAP authentication method will not be used.
             */
            refuseChap: boolean;
            /**
             * If %TRUE, the EAP authentication method will not be used.
             */
            refuse_eap: boolean;
            /**
             * If %TRUE, the EAP authentication method will not be used.
             */
            refuseEap: boolean;
            /**
             * If %TRUE, the MSCHAP authentication method will not be used.
             */
            refuse_mschap: boolean;
            /**
             * If %TRUE, the MSCHAP authentication method will not be used.
             */
            refuseMschap: boolean;
            /**
             * If %TRUE, the MSCHAPv2 authentication method will not be used.
             */
            refuse_mschapv2: boolean;
            /**
             * If %TRUE, the MSCHAPv2 authentication method will not be used.
             */
            refuseMschapv2: boolean;
            /**
             * If %TRUE, the PAP authentication method will not be used.
             */
            refuse_pap: boolean;
            /**
             * If %TRUE, the PAP authentication method will not be used.
             */
            refusePap: boolean;
            /**
             * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
             * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
             * session will fail.  Note that MPPE is not used on mobile broadband
             * connections.
             */
            require_mppe: boolean;
            /**
             * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
             * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
             * session will fail.  Note that MPPE is not used on mobile broadband
             * connections.
             */
            requireMppe: boolean;
            /**
             * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
             * required for the PPP session, and the "require-mppe" property must also
             * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
             */
            require_mppe_128: boolean;
            /**
             * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
             * required for the PPP session, and the "require-mppe" property must also
             * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
             */
            requireMppe128: boolean;
        }
    }
    type SettingPpp = (typeof classes.SettingPpp)['prototype'];
    const SettingPpp: typeof classes.SettingPpp &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingPpp.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingPpp.SignalSignatures> & classes.SettingPpp);
    namespace SettingPppoe {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::password'(pspec: GObject.ParamSpec): void;
            'notify::password-flags'(pspec: GObject.ParamSpec): void;
            'notify::service'(pspec: GObject.ParamSpec): void;
            'notify::username'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * If given, specifies the parent interface name on which this PPPoE
             * connection should be created.  If this property is not specified,
             * the connection is activated on the interface specified in
             * #NMSettingConnection:interface-name of #NMSettingConnection.
             */
            parent: string;
            /**
             * Password used to authenticate with the PPPoE service.
             */
            password: string;
            /**
             * Flags indicating how to handle the #NMSettingPppoe:password property.
             */
            password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingPppoe:password property.
             */
            passwordFlags: SettingSecretFlags;
            /**
             * If specified, instruct PPPoE to only initiate sessions with access
             * concentrators that provide the specified service.  For most providers,
             * this should be left blank.  It is only required if there are multiple
             * access concentrators or a specific service is known to be required.
             */
            service: string;
            /**
             * Username used to authenticate with the PPPoE service.
             */
            username: string;
        }
    }
    type SettingPppoe = (typeof classes.SettingPppoe)['prototype'];
    const SettingPppoe: typeof classes.SettingPppoe &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingPppoe.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingPppoe.SignalSignatures> & classes.SettingPppoe);
    namespace SettingProxy {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::browser-only'(pspec: GObject.ParamSpec): void;
            'notify::method'(pspec: GObject.ParamSpec): void;
            'notify::pac-script'(pspec: GObject.ParamSpec): void;
            'notify::pac-url'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Whether the proxy configuration is for browser only.
             */
            browser_only: boolean;
            /**
             * Whether the proxy configuration is for browser only.
             */
            browserOnly: boolean;
            /**
             * Method for proxy configuration, Default is %NM_SETTING_PROXY_METHOD_NONE
             */
            method: number;
            /**
             * PAC script for the connection. This is an UTF-8 encoded javascript code
             * that defines a FindProxyForURL() function.
             */
            pac_script: string;
            /**
             * PAC script for the connection. This is an UTF-8 encoded javascript code
             * that defines a FindProxyForURL() function.
             */
            pacScript: string;
            /**
             * PAC URL for obtaining PAC file.
             */
            pac_url: string;
            /**
             * PAC URL for obtaining PAC file.
             */
            pacUrl: string;
        }
    }
    type SettingProxy = (typeof classes.SettingProxy)['prototype'];
    const SettingProxy: typeof classes.SettingProxy &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingProxy.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingProxy.SignalSignatures> & classes.SettingProxy);
    namespace SettingSerial {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::baud'(pspec: GObject.ParamSpec): void;
            'notify::bits'(pspec: GObject.ParamSpec): void;
            'notify::parity'(pspec: GObject.ParamSpec): void;
            'notify::send-delay'(pspec: GObject.ParamSpec): void;
            'notify::stopbits'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Speed to use for communication over the serial port.  Note that this
             * value usually has no effect for mobile broadband modems as they generally
             * ignore speed settings and use the highest available speed.
             */
            baud: number;
            /**
             * Byte-width of the serial communication. The 8 in "8n1" for example.
             */
            bits: number;
            /**
             * Parity setting of the serial port.
             */
            parity: SettingSerialParity;
            /**
             * Time to delay between each byte sent to the modem, in microseconds.
             */
            send_delay: number;
            /**
             * Time to delay between each byte sent to the modem, in microseconds.
             */
            sendDelay: number;
            /**
             * Number of stop bits for communication on the serial port.  Either 1 or 2.
             * The 1 in "8n1" for example.
             */
            stopbits: number;
        }
    }
    type SettingSerial = (typeof classes.SettingSerial)['prototype'];
    const SettingSerial: typeof classes.SettingSerial &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingSerial.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingSerial.SignalSignatures> & classes.SettingSerial);
    namespace SettingSriov {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::autoprobe-drivers'(pspec: GObject.ParamSpec): void;
            'notify::eswitch-encap-mode'(pspec: GObject.ParamSpec): void;
            'notify::eswitch-inline-mode'(pspec: GObject.ParamSpec): void;
            'notify::eswitch-mode'(pspec: GObject.ParamSpec): void;
            'notify::total-vfs'(pspec: GObject.ParamSpec): void;
            'notify::vfs'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Whether to autoprobe virtual functions by a compatible driver.
             *
             * If set to %NM_TERNARY_TRUE, the kernel will try to bind VFs to
             * a compatible driver and if this succeeds a new network
             * interface will be instantiated for each VF.
             *
             * If set to %NM_TERNARY_FALSE, VFs will not be claimed and no
             * network interfaces will be created for them.
             *
             * When set to %NM_TERNARY_DEFAULT, the global default is used; in
             * case the global default is unspecified it is assumed to be
             * %NM_TERNARY_TRUE.
             */
            autoprobe_drivers: Ternary;
            /**
             * Whether to autoprobe virtual functions by a compatible driver.
             *
             * If set to %NM_TERNARY_TRUE, the kernel will try to bind VFs to
             * a compatible driver and if this succeeds a new network
             * interface will be instantiated for each VF.
             *
             * If set to %NM_TERNARY_FALSE, VFs will not be claimed and no
             * network interfaces will be created for them.
             *
             * When set to %NM_TERNARY_DEFAULT, the global default is used; in
             * case the global default is unspecified it is assumed to be
             * %NM_TERNARY_TRUE.
             */
            autoprobeDrivers: Ternary;
            /**
             * Select the eswitch encapsulation support.
             *
             * Currently it's only supported for PCI PF devices, and only if the eswitch device
             * is managed from the same PCI address than the PF.
             *
             * If set to %NM_SRIOV_ESWITCH_ENCAP_MODE_PRESERVE (default) the eswitch encap-mode
             * won't be modified by NetworkManager.
             */
            eswitch_encap_mode: number;
            /**
             * Select the eswitch encapsulation support.
             *
             * Currently it's only supported for PCI PF devices, and only if the eswitch device
             * is managed from the same PCI address than the PF.
             *
             * If set to %NM_SRIOV_ESWITCH_ENCAP_MODE_PRESERVE (default) the eswitch encap-mode
             * won't be modified by NetworkManager.
             */
            eswitchEncapMode: number;
            /**
             * Select the eswitch inline-mode of the device. Some HWs need the VF driver to put
             * part of the packet headers on the TX descriptor so the e-switch can do proper
             * matching and steering.
             *
             * Currently it's only supported for PCI PF devices, and only if the eswitch device
             * is managed from the same PCI address than the PF.
             *
             * If set to %NM_SRIOV_ESWITCH_INLINE_MODE_PRESERVE (default) the eswitch inline-mode
             * won't be modified by NetworkManager.
             */
            eswitch_inline_mode: number;
            /**
             * Select the eswitch inline-mode of the device. Some HWs need the VF driver to put
             * part of the packet headers on the TX descriptor so the e-switch can do proper
             * matching and steering.
             *
             * Currently it's only supported for PCI PF devices, and only if the eswitch device
             * is managed from the same PCI address than the PF.
             *
             * If set to %NM_SRIOV_ESWITCH_INLINE_MODE_PRESERVE (default) the eswitch inline-mode
             * won't be modified by NetworkManager.
             */
            eswitchInlineMode: number;
            /**
             * Select the eswitch mode of the device. Currently it's only supported for
             * PCI PF devices, and only if the eswitch device is managed from the same
             * PCI address than the PF.
             *
             * If set to %NM_SRIOV_ESWITCH_MODE_PRESERVE (default) the eswitch mode won't be
             * modified by NetworkManager.
             */
            eswitch_mode: number;
            /**
             * Select the eswitch mode of the device. Currently it's only supported for
             * PCI PF devices, and only if the eswitch device is managed from the same
             * PCI address than the PF.
             *
             * If set to %NM_SRIOV_ESWITCH_MODE_PRESERVE (default) the eswitch mode won't be
             * modified by NetworkManager.
             */
            eswitchMode: number;
            /**
             * The total number of virtual functions to create.
             *
             * Note that when the sriov setting is present NetworkManager
             * enforces the number of virtual functions on the interface
             * (also when it is zero) during activation and resets it
             * upon deactivation. To prevent any changes to SR-IOV
             * parameters don't add a sriov setting to the connection.
             */
            total_vfs: number;
            /**
             * The total number of virtual functions to create.
             *
             * Note that when the sriov setting is present NetworkManager
             * enforces the number of virtual functions on the interface
             * (also when it is zero) during activation and resets it
             * upon deactivation. To prevent any changes to SR-IOV
             * parameters don't add a sriov setting to the connection.
             */
            totalVfs: number;
            /**
             * Array of virtual function descriptors.
             *
             * Each VF descriptor is a dictionary mapping attribute names
             * to GVariant values. The 'index' entry is mandatory for
             * each VF.
             *
             * When represented as string a VF is in the form:
             *
             *   "INDEX [ATTR=VALUE[ ATTR=VALUE]...]".
             *
             * for example:
             *
             *   "2 mac=00:11:22:33:44:55 spoof-check=true".
             *
             * Multiple VFs can be specified using a comma as separator.
             * Currently, the following attributes are supported: mac,
             * spoof-check, trust, min-tx-rate, max-tx-rate, vlans.
             *
             * The "vlans" attribute is represented as a semicolon-separated
             * list of VLAN descriptors, where each descriptor has the form
             *
             *   "ID[.PRIORITY[.PROTO]]".
             *
             * PROTO can be either 'q' for 802.1Q (the default) or 'ad' for
             * 802.1ad.
             */
            vfs: SriovVF[];
        }
    }
    type SettingSriov = (typeof classes.SettingSriov)['prototype'];
    const SettingSriov: typeof classes.SettingSriov &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingSriov.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingSriov.SignalSignatures> & classes.SettingSriov);
    namespace SettingTCConfig {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::qdiscs'(pspec: GObject.ParamSpec): void;
            'notify::tfilters'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Array of TC queueing disciplines.
             *
             * When the #NMSettingTCConfig setting is present, qdiscs from this
             * property are applied upon activation. If the property is empty,
             * all qdiscs are removed and the device will only
             * have the default qdisc assigned by kernel according to the
             * "net.core.default_qdisc" sysctl.
             *
             * If the #NMSettingTCConfig setting is not present, NetworkManager
             * doesn't touch the qdiscs present on the interface.
             */
            qdiscs: TCQdisc[];
            /**
             * Array of TC traffic filters.
             *
             * When the #NMSettingTCConfig setting is present, filters from this
             * property are applied upon activation. If the property is empty,
             * NetworkManager removes all the filters.
             *
             * If the #NMSettingTCConfig setting is not present, NetworkManager
             * doesn't touch the filters present on the interface.
             */
            tfilters: TCTfilter[];
        }
    }
    type SettingTCConfig = (typeof classes.SettingTCConfig)['prototype'];
    const SettingTCConfig: typeof classes.SettingTCConfig &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingTCConfig.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingTCConfig.SignalSignatures> & classes.SettingTCConfig);
    namespace SettingTeam {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::config'(pspec: GObject.ParamSpec): void;
            'notify::link-watchers'(pspec: GObject.ParamSpec): void;
            'notify::mcast-rejoin-count'(pspec: GObject.ParamSpec): void;
            'notify::mcast-rejoin-interval'(pspec: GObject.ParamSpec): void;
            'notify::notify-peers-count'(pspec: GObject.ParamSpec): void;
            'notify::notify-peers-interval'(pspec: GObject.ParamSpec): void;
            'notify::runner'(pspec: GObject.ParamSpec): void;
            'notify::runner-active'(pspec: GObject.ParamSpec): void;
            'notify::runner-agg-select-policy'(pspec: GObject.ParamSpec): void;
            'notify::runner-fast-rate'(pspec: GObject.ParamSpec): void;
            'notify::runner-hwaddr-policy'(pspec: GObject.ParamSpec): void;
            'notify::runner-min-ports'(pspec: GObject.ParamSpec): void;
            'notify::runner-sys-prio'(pspec: GObject.ParamSpec): void;
            'notify::runner-tx-balancer'(pspec: GObject.ParamSpec): void;
            'notify::runner-tx-balancer-interval'(pspec: GObject.ParamSpec): void;
            'notify::runner-tx-hash'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The JSON configuration for the team network interface.  The property
             * should contain raw JSON configuration data suitable for teamd, because
             * the value is passed directly to teamd. If not specified, the default
             * configuration is used.  See man teamd.conf for the format details.
             */
            config: string;
            /**
             * Link watchers configuration for the connection: each link watcher is
             * defined by a dictionary, whose keys depend upon the selected link
             * watcher. Available link watchers are 'ethtool', 'nsna_ping' and
             * 'arp_ping' and it is specified in the dictionary with the key 'name'.
             * Available keys are:   ethtool: 'delay-up', 'delay-down', 'init-wait';
             * nsna_ping: 'init-wait', 'interval', 'missed-max', 'target-host';
             * arp_ping: all the ones in nsna_ping and 'source-host', 'validate-active',
             * 'validate-inactive', 'send-always'. See teamd.conf man for more details.
             */
            link_watchers: TeamLinkWatcher[];
            /**
             * Link watchers configuration for the connection: each link watcher is
             * defined by a dictionary, whose keys depend upon the selected link
             * watcher. Available link watchers are 'ethtool', 'nsna_ping' and
             * 'arp_ping' and it is specified in the dictionary with the key 'name'.
             * Available keys are:   ethtool: 'delay-up', 'delay-down', 'init-wait';
             * nsna_ping: 'init-wait', 'interval', 'missed-max', 'target-host';
             * arp_ping: all the ones in nsna_ping and 'source-host', 'validate-active',
             * 'validate-inactive', 'send-always'. See teamd.conf man for more details.
             */
            linkWatchers: TeamLinkWatcher[];
            /**
             * Corresponds to the teamd mcast_rejoin.count.
             */
            mcast_rejoin_count: number;
            /**
             * Corresponds to the teamd mcast_rejoin.count.
             */
            mcastRejoinCount: number;
            /**
             * Corresponds to the teamd mcast_rejoin.interval.
             */
            mcast_rejoin_interval: number;
            /**
             * Corresponds to the teamd mcast_rejoin.interval.
             */
            mcastRejoinInterval: number;
            /**
             * Corresponds to the teamd notify_peers.count.
             */
            notify_peers_count: number;
            /**
             * Corresponds to the teamd notify_peers.count.
             */
            notifyPeersCount: number;
            /**
             * Corresponds to the teamd notify_peers.interval.
             */
            notify_peers_interval: number;
            /**
             * Corresponds to the teamd notify_peers.interval.
             */
            notifyPeersInterval: number;
            /**
             * Corresponds to the teamd runner.name.
             * Permitted values are: "roundrobin", "broadcast", "activebackup",
             * "loadbalance", "lacp", "random".
             */
            runner: string;
            /**
             * Corresponds to the teamd runner.active.
             */
            runner_active: boolean;
            /**
             * Corresponds to the teamd runner.active.
             */
            runnerActive: boolean;
            /**
             * Corresponds to the teamd runner.agg_select_policy.
             */
            runner_agg_select_policy: string;
            /**
             * Corresponds to the teamd runner.agg_select_policy.
             */
            runnerAggSelectPolicy: string;
            /**
             * Corresponds to the teamd runner.fast_rate.
             */
            runner_fast_rate: boolean;
            /**
             * Corresponds to the teamd runner.fast_rate.
             */
            runnerFastRate: boolean;
            /**
             * Corresponds to the teamd runner.hwaddr_policy.
             */
            runner_hwaddr_policy: string;
            /**
             * Corresponds to the teamd runner.hwaddr_policy.
             */
            runnerHwaddrPolicy: string;
            /**
             * Corresponds to the teamd runner.min_ports.
             */
            runner_min_ports: number;
            /**
             * Corresponds to the teamd runner.min_ports.
             */
            runnerMinPorts: number;
            /**
             * Corresponds to the teamd runner.sys_prio.
             */
            runner_sys_prio: number;
            /**
             * Corresponds to the teamd runner.sys_prio.
             */
            runnerSysPrio: number;
            /**
             * Corresponds to the teamd runner.tx_balancer.name.
             */
            runner_tx_balancer: string;
            /**
             * Corresponds to the teamd runner.tx_balancer.name.
             */
            runnerTxBalancer: string;
            /**
             * Corresponds to the teamd runner.tx_balancer.interval.
             */
            runner_tx_balancer_interval: number;
            /**
             * Corresponds to the teamd runner.tx_balancer.interval.
             */
            runnerTxBalancerInterval: number;
            /**
             * Corresponds to the teamd runner.tx_hash.
             */
            runner_tx_hash: string[];
            /**
             * Corresponds to the teamd runner.tx_hash.
             */
            runnerTxHash: string[];
        }
    }
    type SettingTeam = (typeof classes.SettingTeam)['prototype'];
    const SettingTeam: typeof classes.SettingTeam &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingTeam.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingTeam.SignalSignatures> & classes.SettingTeam);
    namespace SettingTeamPort {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::config'(pspec: GObject.ParamSpec): void;
            'notify::lacp-key'(pspec: GObject.ParamSpec): void;
            'notify::lacp-prio'(pspec: GObject.ParamSpec): void;
            'notify::link-watchers'(pspec: GObject.ParamSpec): void;
            'notify::prio'(pspec: GObject.ParamSpec): void;
            'notify::queue-id'(pspec: GObject.ParamSpec): void;
            'notify::sticky'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The JSON configuration for the team port. The property should contain raw
             * JSON configuration data suitable for teamd, because the value is passed
             * directly to teamd. If not specified, the default configuration is
             * used. See man teamd.conf for the format details.
             */
            config: string;
            /**
             * Corresponds to the teamd ports.PORTIFNAME.lacp_key.
             */
            lacp_key: number;
            /**
             * Corresponds to the teamd ports.PORTIFNAME.lacp_key.
             */
            lacpKey: number;
            /**
             * Corresponds to the teamd ports.PORTIFNAME.lacp_prio.
             */
            lacp_prio: number;
            /**
             * Corresponds to the teamd ports.PORTIFNAME.lacp_prio.
             */
            lacpPrio: number;
            /**
             * Link watchers configuration for the connection: each link watcher is
             * defined by a dictionary, whose keys depend upon the selected link
             * watcher. Available link watchers are 'ethtool', 'nsna_ping' and
             * 'arp_ping' and it is specified in the dictionary with the key 'name'.
             * Available keys are:   ethtool: 'delay-up', 'delay-down', 'init-wait';
             * nsna_ping: 'init-wait', 'interval', 'missed-max', 'target-host';
             * arp_ping: all the ones in nsna_ping and 'source-host', 'validate-active',
             * 'validate-inactive', 'send-always'. See teamd.conf man for more details.
             */
            link_watchers: TeamLinkWatcher[];
            /**
             * Link watchers configuration for the connection: each link watcher is
             * defined by a dictionary, whose keys depend upon the selected link
             * watcher. Available link watchers are 'ethtool', 'nsna_ping' and
             * 'arp_ping' and it is specified in the dictionary with the key 'name'.
             * Available keys are:   ethtool: 'delay-up', 'delay-down', 'init-wait';
             * nsna_ping: 'init-wait', 'interval', 'missed-max', 'target-host';
             * arp_ping: all the ones in nsna_ping and 'source-host', 'validate-active',
             * 'validate-inactive', 'send-always'. See teamd.conf man for more details.
             */
            linkWatchers: TeamLinkWatcher[];
            /**
             * Corresponds to the teamd ports.PORTIFNAME.prio.
             */
            prio: number;
            /**
             * Corresponds to the teamd ports.PORTIFNAME.queue_id.
             * When set to -1 means the parameter is skipped from the json config.
             */
            queue_id: number;
            /**
             * Corresponds to the teamd ports.PORTIFNAME.queue_id.
             * When set to -1 means the parameter is skipped from the json config.
             */
            queueId: number;
            /**
             * Corresponds to the teamd ports.PORTIFNAME.sticky.
             */
            sticky: boolean;
        }
    }
    type SettingTeamPort = (typeof classes.SettingTeamPort)['prototype'];
    const SettingTeamPort: typeof classes.SettingTeamPort &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingTeamPort.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingTeamPort.SignalSignatures> & classes.SettingTeamPort);
    namespace SettingTun {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::group'(pspec: GObject.ParamSpec): void;
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::multi-queue'(pspec: GObject.ParamSpec): void;
            'notify::owner'(pspec: GObject.ParamSpec): void;
            'notify::pi'(pspec: GObject.ParamSpec): void;
            'notify::vnet-hdr'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The group ID which will own the device. If set to %NULL everyone
             * will be able to use the device.
             */
            group: string;
            /**
             * The operating mode of the virtual device. Allowed values are
             * %NM_SETTING_TUN_MODE_TUN to create a layer 3 device and
             * %NM_SETTING_TUN_MODE_TAP to create an Ethernet-like layer 2
             * one.
             */
            mode: number;
            /**
             * If the property is set to %TRUE, the interface will support
             * multiple file descriptors (queues) to parallelize packet
             * sending or receiving. Otherwise, the interface will only
             * support a single queue.
             */
            multi_queue: boolean;
            /**
             * If the property is set to %TRUE, the interface will support
             * multiple file descriptors (queues) to parallelize packet
             * sending or receiving. Otherwise, the interface will only
             * support a single queue.
             */
            multiQueue: boolean;
            /**
             * The user ID which will own the device. If set to %NULL everyone
             * will be able to use the device.
             */
            owner: string;
            /**
             * If %TRUE the interface will prepend a 4 byte header describing the
             * physical interface to the packets.
             */
            pi: boolean;
            /**
             * If %TRUE the IFF_VNET_HDR the tunnel packets will include a virtio
             * network header.
             */
            vnet_hdr: boolean;
            /**
             * If %TRUE the IFF_VNET_HDR the tunnel packets will include a virtio
             * network header.
             */
            vnetHdr: boolean;
        }
    }
    type SettingTun = (typeof classes.SettingTun)['prototype'];
    const SettingTun: typeof classes.SettingTun &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingTun.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingTun.SignalSignatures> & classes.SettingTun);
    namespace SettingUser {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::data'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * A dictionary of key/value pairs with user data. This data is ignored by NetworkManager
             * and can be used at the users discretion. The keys only support a strict ascii format,
             * but the values can be arbitrary UTF8 strings up to a certain length.
             */
            data: GLib.HashTable<string, string>;
        }
    }
    type SettingUser = (typeof classes.SettingUser)['prototype'];
    const SettingUser: typeof classes.SettingUser &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingUser.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingUser.SignalSignatures> & classes.SettingUser);
    namespace SettingVeth {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::peer'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * This property specifies the peer interface name of the veth. This
             * property is mandatory.
             */
            peer: string;
        }
    }
    type SettingVeth = (typeof classes.SettingVeth)['prototype'];
    const SettingVeth: typeof classes.SettingVeth &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingVeth.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingVeth.SignalSignatures> & classes.SettingVeth);
    namespace SettingVlan {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::egress-priority-map'(pspec: GObject.ParamSpec): void;
            'notify::flags'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::ingress-priority-map'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::protocol'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * For outgoing packets, a list of mappings from Linux SKB priorities to
             * 802.1p priorities.  The mapping is given in the format "from:to" where
             * both "from" and "to" are unsigned integers, ie "7:3".
             */
            egress_priority_map: string[];
            /**
             * For outgoing packets, a list of mappings from Linux SKB priorities to
             * 802.1p priorities.  The mapping is given in the format "from:to" where
             * both "from" and "to" are unsigned integers, ie "7:3".
             */
            egressPriorityMap: string[];
            /**
             * One or more flags which control the behavior and features of the VLAN
             * interface.  Flags include %NM_VLAN_FLAG_REORDER_HEADERS (reordering of
             * output packet headers), %NM_VLAN_FLAG_GVRP (use of the GVRP protocol),
             * and %NM_VLAN_FLAG_LOOSE_BINDING (loose binding of the interface to its
             * controller device's operating state). %NM_VLAN_FLAG_MVRP (use of the MVRP
             * protocol).
             *
             * The default value of this property is NM_VLAN_FLAG_REORDER_HEADERS,
             * but it used to be 0. To preserve backward compatibility, the default-value
             * in the D-Bus API continues to be 0 and a missing property on D-Bus
             * is still considered as 0.
             */
            flags: VlanFlags;
            /**
             * The VLAN identifier that the interface created by this connection should
             * be assigned. The valid range is from 0 to 4094, without the reserved id 4095.
             */
            id: number;
            /**
             * For incoming packets, a list of mappings from 802.1p priorities to Linux
             * SKB priorities.  The mapping is given in the format "from:to" where both
             * "from" and "to" are unsigned integers, ie "7:3".
             */
            ingress_priority_map: string[];
            /**
             * For incoming packets, a list of mappings from 802.1p priorities to Linux
             * SKB priorities.  The mapping is given in the format "from:to" where both
             * "from" and "to" are unsigned integers, ie "7:3".
             */
            ingressPriorityMap: string[];
            /**
             * If given, specifies the parent interface name or parent connection UUID
             * from which this VLAN interface should be created.  If this property is
             * not specified, the connection must contain an #NMSettingWired setting
             * with a #NMSettingWired:mac-address property.
             */
            parent: string;
            /**
             * Specifies the VLAN protocol to use for encapsulation.
             *
             * Supported values are: '802.1Q', '802.1ad'. If not specified the default
             * value is '802.1Q'.
             */
            protocol: string;
        }
    }
    type SettingVlan = (typeof classes.SettingVlan)['prototype'];
    const SettingVlan: typeof classes.SettingVlan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingVlan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingVlan.SignalSignatures> & classes.SettingVlan);
    namespace SettingVpn {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::data'(pspec: GObject.ParamSpec): void;
            'notify::persistent'(pspec: GObject.ParamSpec): void;
            'notify::secrets'(pspec: GObject.ParamSpec): void;
            'notify::service-type'(pspec: GObject.ParamSpec): void;
            'notify::timeout'(pspec: GObject.ParamSpec): void;
            'notify::user-name'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Dictionary of key/value pairs of VPN plugin specific data.  Both keys and
             * values must be strings.
             */
            data: GLib.HashTable<string, string>;
            /**
             * If the VPN service supports persistence, and this property is %TRUE,
             * the VPN will attempt to stay connected across link changes and outages,
             * until explicitly disconnected.
             */
            persistent: boolean;
            /**
             * Dictionary of key/value pairs of VPN plugin specific secrets like
             * passwords or private keys.  Both keys and values must be strings.
             */
            secrets: GLib.HashTable<string, string>;
            /**
             * D-Bus service name of the VPN plugin that this setting uses to connect to
             * its network.  i.e. org.freedesktop.NetworkManager.vpnc for the vpnc
             * plugin.
             */
            service_type: string;
            /**
             * D-Bus service name of the VPN plugin that this setting uses to connect to
             * its network.  i.e. org.freedesktop.NetworkManager.vpnc for the vpnc
             * plugin.
             */
            serviceType: string;
            /**
             * Timeout for the VPN service to establish the connection. Some services
             * may take quite a long time to connect.
             * Value of 0 means a default timeout, which is 60 seconds (unless overridden
             * by vpn.timeout in configuration file). Values greater than zero mean
             * timeout in seconds.
             */
            timeout: number;
            /**
             * If the VPN connection requires a user name for authentication, that name
             * should be provided here.  If the connection is available to more than one
             * user, and the VPN requires each user to supply a different name, then
             * leave this property empty.  If this property is empty, NetworkManager
             * will automatically supply the username of the user which requested the
             * VPN connection.
             */
            user_name: string;
            /**
             * If the VPN connection requires a user name for authentication, that name
             * should be provided here.  If the connection is available to more than one
             * user, and the VPN requires each user to supply a different name, then
             * leave this property empty.  If this property is empty, NetworkManager
             * will automatically supply the username of the user which requested the
             * VPN connection.
             */
            userName: string;
        }
    }
    type SettingVpn = (typeof classes.SettingVpn)['prototype'];
    const SettingVpn: typeof classes.SettingVpn &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingVpn.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingVpn.SignalSignatures> & classes.SettingVpn);
    namespace SettingVrf {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::table'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The routing table for this VRF.
             */
            table: number;
        }
    }
    type SettingVrf = (typeof classes.SettingVrf)['prototype'];
    const SettingVrf: typeof classes.SettingVrf &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingVrf.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingVrf.SignalSignatures> & classes.SettingVrf);
    namespace SettingVxlan {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::ageing'(pspec: GObject.ParamSpec): void;
            'notify::destination-port'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::l2-miss'(pspec: GObject.ParamSpec): void;
            'notify::l3-miss'(pspec: GObject.ParamSpec): void;
            'notify::learning'(pspec: GObject.ParamSpec): void;
            'notify::limit'(pspec: GObject.ParamSpec): void;
            'notify::local'(pspec: GObject.ParamSpec): void;
            'notify::parent'(pspec: GObject.ParamSpec): void;
            'notify::proxy'(pspec: GObject.ParamSpec): void;
            'notify::remote'(pspec: GObject.ParamSpec): void;
            'notify::rsc'(pspec: GObject.ParamSpec): void;
            'notify::source-port-max'(pspec: GObject.ParamSpec): void;
            'notify::source-port-min'(pspec: GObject.ParamSpec): void;
            'notify::tos'(pspec: GObject.ParamSpec): void;
            'notify::ttl'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Specifies the lifetime in seconds of FDB entries learnt by the kernel.
             */
            ageing: number;
            /**
             * Specifies the UDP destination port to communicate to the remote VXLAN
             * tunnel endpoint.
             */
            destination_port: number;
            /**
             * Specifies the UDP destination port to communicate to the remote VXLAN
             * tunnel endpoint.
             */
            destinationPort: number;
            /**
             * Specifies the VXLAN Network Identifier (or VXLAN Segment Identifier) to
             * use.
             */
            id: number;
            /**
             * Specifies whether netlink LL ADDR miss notifications are generated.
             */
            l2_miss: boolean;
            /**
             * Specifies whether netlink LL ADDR miss notifications are generated.
             */
            l2Miss: boolean;
            /**
             * Specifies whether netlink IP ADDR miss notifications are generated.
             */
            l3_miss: boolean;
            /**
             * Specifies whether netlink IP ADDR miss notifications are generated.
             */
            l3Miss: boolean;
            /**
             * Specifies whether unknown source link layer addresses and IP addresses
             * are entered into the VXLAN device forwarding database.
             */
            learning: boolean;
            /**
             * Specifies the maximum number of FDB entries. A value of zero means that
             * the kernel will store unlimited entries.
             */
            limit: number;
            /**
             * If given, specifies the source IP address to use in outgoing packets.
             */
            local: string;
            /**
             * If given, specifies the parent interface name or parent connection UUID.
             */
            parent: string;
            /**
             * Specifies whether ARP proxy is turned on.
             */
            proxy: boolean;
            /**
             * Specifies the unicast destination IP address to use in outgoing packets
             * when the destination link layer address is not known in the VXLAN device
             * forwarding database, or the multicast IP address to join.
             */
            remote: string;
            /**
             * Specifies whether route short circuit is turned on.
             */
            rsc: boolean;
            /**
             * Specifies the maximum UDP source port to communicate to the remote VXLAN
             * tunnel endpoint.
             */
            source_port_max: number;
            /**
             * Specifies the maximum UDP source port to communicate to the remote VXLAN
             * tunnel endpoint.
             */
            sourcePortMax: number;
            /**
             * Specifies the minimum UDP source port to communicate to the remote VXLAN
             * tunnel endpoint.
             */
            source_port_min: number;
            /**
             * Specifies the minimum UDP source port to communicate to the remote VXLAN
             * tunnel endpoint.
             */
            sourcePortMin: number;
            /**
             * Specifies the TOS value to use in outgoing packets.
             */
            tos: number;
            /**
             * Specifies the time-to-live value to use in outgoing packets.
             */
            ttl: number;
        }
    }
    type SettingVxlan = (typeof classes.SettingVxlan)['prototype'];
    const SettingVxlan: typeof classes.SettingVxlan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingVxlan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingVxlan.SignalSignatures> & classes.SettingVxlan);
    namespace SettingWifiP2P {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::peer'(pspec: GObject.ParamSpec): void;
            'notify::wfd-ies'(pspec: GObject.ParamSpec): void;
            'notify::wps-method'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The P2P device that should be connected to. Currently, this is the only
             * way to create or join a group.
             */
            peer: string;
            /**
             * The Wi-Fi Display (WFD) Information Elements (IEs) to set.
             *
             * Wi-Fi Display requires a protocol specific information element to be
             * set in certain Wi-Fi frames. These can be specified here for the
             * purpose of establishing a connection.
             * This setting is only useful when implementing a Wi-Fi Display client.
             */
            wfd_ies: GLib.Bytes;
            /**
             * The Wi-Fi Display (WFD) Information Elements (IEs) to set.
             *
             * Wi-Fi Display requires a protocol specific information element to be
             * set in certain Wi-Fi frames. These can be specified here for the
             * purpose of establishing a connection.
             * This setting is only useful when implementing a Wi-Fi Display client.
             */
            wfdIes: GLib.Bytes;
            /**
             * Flags indicating which mode of WPS is to be used.
             *
             * There's little point in changing the default setting as NetworkManager will
             * automatically determine the best method to use.
             */
            wps_method: number;
            /**
             * Flags indicating which mode of WPS is to be used.
             *
             * There's little point in changing the default setting as NetworkManager will
             * automatically determine the best method to use.
             */
            wpsMethod: number;
        }
    }
    type SettingWifiP2P = (typeof classes.SettingWifiP2P)['prototype'];
    const SettingWifiP2P: typeof classes.SettingWifiP2P &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingWifiP2P.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingWifiP2P.SignalSignatures> & classes.SettingWifiP2P);
    namespace SettingWimax {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::mac-address'(pspec: GObject.ParamSpec): void;
            'notify::network-name'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * If specified, this connection will only apply to the WiMAX device whose
             * MAC address matches. This property does not change the MAC address of the
             * device (known as MAC spoofing).
             */
            mac_address: string;
            /**
             * If specified, this connection will only apply to the WiMAX device whose
             * MAC address matches. This property does not change the MAC address of the
             * device (known as MAC spoofing).
             */
            macAddress: string;
            /**
             * Network Service Provider (NSP) name of the WiMAX network this connection
             * should use.
             */
            network_name: string;
            /**
             * Network Service Provider (NSP) name of the WiMAX network this connection
             * should use.
             */
            networkName: string;
        }
    }
    type SettingWimax = (typeof classes.SettingWimax)['prototype'];
    const SettingWimax: typeof classes.SettingWimax &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingWimax.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingWimax.SignalSignatures> & classes.SettingWimax);
    namespace SettingWireGuard {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::fwmark'(pspec: GObject.ParamSpec): void;
            'notify::ip4-auto-default-route'(pspec: GObject.ParamSpec): void;
            'notify::ip6-auto-default-route'(pspec: GObject.ParamSpec): void;
            'notify::listen-port'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::peer-routes'(pspec: GObject.ParamSpec): void;
            'notify::private-key'(pspec: GObject.ParamSpec): void;
            'notify::private-key-flags'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * The use of fwmark is optional and is by default off. Setting it to 0
             * disables it. Otherwise, it is a 32-bit fwmark for outgoing packets.
             *
             * Note that "ip4-auto-default-route" or "ip6-auto-default-route" enabled,
             * implies to automatically choose a fwmark.
             */
            fwmark: number;
            /**
             * Whether to enable special handling of the IPv4 default route.
             * If enabled, the IPv4 default route from wireguard.peer-routes
             * will be placed to a dedicated routing-table and two policy routing rules
             * will be added. The fwmark number is also used as routing-table for the default-route,
             * and if fwmark is zero, an unused fwmark/table is chosen automatically.
             * This corresponds to what wg-quick does with Table=auto and what WireGuard
             * calls "Improved Rule-based Routing".
             *
             * Note that for this automatism to work, you usually don't want to set
             * ipv4.gateway, because that will result in a conflicting default route.
             *
             * Leaving this at the default will enable this option automatically
             * if ipv4.never-default is not set and there are any peers that use
             * a default-route as allowed-ips. Since this automatism only makes
             * sense if you also have a peer with an /0 allowed-ips, it is usually
             * not necessary to enable this explicitly. However, you can disable
             * it if you want to configure your own routing and rules.
             */
            ip4_auto_default_route: Ternary;
            /**
             * Whether to enable special handling of the IPv4 default route.
             * If enabled, the IPv4 default route from wireguard.peer-routes
             * will be placed to a dedicated routing-table and two policy routing rules
             * will be added. The fwmark number is also used as routing-table for the default-route,
             * and if fwmark is zero, an unused fwmark/table is chosen automatically.
             * This corresponds to what wg-quick does with Table=auto and what WireGuard
             * calls "Improved Rule-based Routing".
             *
             * Note that for this automatism to work, you usually don't want to set
             * ipv4.gateway, because that will result in a conflicting default route.
             *
             * Leaving this at the default will enable this option automatically
             * if ipv4.never-default is not set and there are any peers that use
             * a default-route as allowed-ips. Since this automatism only makes
             * sense if you also have a peer with an /0 allowed-ips, it is usually
             * not necessary to enable this explicitly. However, you can disable
             * it if you want to configure your own routing and rules.
             */
            ip4AutoDefaultRoute: Ternary;
            /**
             * Like ip4-auto-default-route, but for the IPv6 default route.
             */
            ip6_auto_default_route: Ternary;
            /**
             * Like ip4-auto-default-route, but for the IPv6 default route.
             */
            ip6AutoDefaultRoute: Ternary;
            /**
             * The listen-port. If listen-port is not specified, the port will be chosen
             * randomly when the interface comes up.
             */
            listen_port: number;
            /**
             * The listen-port. If listen-port is not specified, the port will be chosen
             * randomly when the interface comes up.
             */
            listenPort: number;
            /**
             * If non-zero, only transmit packets of the specified size or smaller,
             * breaking larger packets up into multiple fragments.
             *
             * If zero a default MTU is used. Note that contrary to wg-quick's MTU
             * setting, this does not take into account the current routes at the
             * time of activation.
             */
            mtu: number;
            /**
             * Whether to automatically add routes for the AllowedIPs ranges
             * of the peers. If %TRUE (the default), NetworkManager will automatically
             * add routes in the routing tables according to ipv4.route-table and
             * ipv6.route-table. Usually you want this automatism enabled.
             * If %FALSE, no such routes are added automatically. In this case, the
             * user may want to configure static routes in ipv4.routes and ipv6.routes,
             * respectively.
             *
             * Note that if the peer's AllowedIPs is "0.0.0.0/0" or "::/0" and the profile's
             * ipv4.never-default or ipv6.never-default setting is enabled, the peer route for
             * this peer won't be added automatically.
             */
            peer_routes: boolean;
            /**
             * Whether to automatically add routes for the AllowedIPs ranges
             * of the peers. If %TRUE (the default), NetworkManager will automatically
             * add routes in the routing tables according to ipv4.route-table and
             * ipv6.route-table. Usually you want this automatism enabled.
             * If %FALSE, no such routes are added automatically. In this case, the
             * user may want to configure static routes in ipv4.routes and ipv6.routes,
             * respectively.
             *
             * Note that if the peer's AllowedIPs is "0.0.0.0/0" or "::/0" and the profile's
             * ipv4.never-default or ipv6.never-default setting is enabled, the peer route for
             * this peer won't be added automatically.
             */
            peerRoutes: boolean;
            /**
             * The 256 bit private-key in base64 encoding.
             */
            private_key: string;
            /**
             * The 256 bit private-key in base64 encoding.
             */
            privateKey: string;
            /**
             * Flags indicating how to handle the #NMSettingWirelessSecurity:private-key
             * property.
             */
            private_key_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingWirelessSecurity:private-key
             * property.
             */
            privateKeyFlags: SettingSecretFlags;
        }
    }
    type SettingWireGuard = (typeof classes.SettingWireGuard)['prototype'];
    const SettingWireGuard: typeof classes.SettingWireGuard &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingWireGuard.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingWireGuard.SignalSignatures> & classes.SettingWireGuard);
    namespace SettingWired {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::accept-all-mac-addresses'(pspec: GObject.ParamSpec): void;
            'notify::auto-negotiate'(pspec: GObject.ParamSpec): void;
            'notify::cloned-mac-address'(pspec: GObject.ParamSpec): void;
            'notify::duplex'(pspec: GObject.ParamSpec): void;
            'notify::generate-mac-address-mask'(pspec: GObject.ParamSpec): void;
            'notify::mac-address'(pspec: GObject.ParamSpec): void;
            'notify::mac-address-blacklist'(pspec: GObject.ParamSpec): void;
            'notify::mac-address-denylist'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::port'(pspec: GObject.ParamSpec): void;
            'notify::s390-nettype'(pspec: GObject.ParamSpec): void;
            'notify::s390-options'(pspec: GObject.ParamSpec): void;
            'notify::s390-subchannels'(pspec: GObject.ParamSpec): void;
            'notify::speed'(pspec: GObject.ParamSpec): void;
            'notify::wake-on-lan'(pspec: GObject.ParamSpec): void;
            'notify::wake-on-lan-password'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * When %TRUE, setup the interface to accept packets for all MAC addresses.
             * This is enabling the kernel interface flag IFF_PROMISC.
             * When %FALSE, the interface will only accept the packets with the
             * interface destination mac address or broadcast.
             */
            accept_all_mac_addresses: Ternary;
            /**
             * When %TRUE, setup the interface to accept packets for all MAC addresses.
             * This is enabling the kernel interface flag IFF_PROMISC.
             * When %FALSE, the interface will only accept the packets with the
             * interface destination mac address or broadcast.
             */
            acceptAllMacAddresses: Ternary;
            /**
             * When %TRUE, enforce auto-negotiation of speed and duplex mode.
             * If "speed" and "duplex" properties are both specified, only that
             * single mode will be advertised and accepted during the link
             * auto-negotiation process: this works only for BASE-T 802.3 specifications
             * and is useful for enforcing gigabits modes, as in these cases link
             * negotiation is mandatory.
             * When %FALSE, "speed" and "duplex" properties should be both set or
             * link configuration will be skipped.
             */
            auto_negotiate: boolean;
            /**
             * When %TRUE, enforce auto-negotiation of speed and duplex mode.
             * If "speed" and "duplex" properties are both specified, only that
             * single mode will be advertised and accepted during the link
             * auto-negotiation process: this works only for BASE-T 802.3 specifications
             * and is useful for enforcing gigabits modes, as in these cases link
             * negotiation is mandatory.
             * When %FALSE, "speed" and "duplex" properties should be both set or
             * link configuration will be skipped.
             */
            autoNegotiate: boolean;
            /**
             * If specified, request that the device use this MAC address instead.
             * This is known as MAC cloning or spoofing.
             *
             * Beside explicitly specifying a MAC address, the special values "preserve", "permanent",
             * "random" and "stable" are supported.
             * "preserve" means not to touch the MAC address on activation.
             * "permanent" means to use the permanent hardware address if the device
             * has one (otherwise this is treated as "preserve").
             * "random" creates a random MAC address on each connect.
             * "stable" creates a hashed MAC address based on connection.stable-id and a
             * machine dependent key.
             *
             * If unspecified, the value can be overwritten via global defaults, see manual
             * of NetworkManager.conf. If still unspecified, it defaults to "preserve"
             * (older versions of NetworkManager may use a different default value).
             *
             * On D-Bus, this field is expressed as "assigned-mac-address" or the deprecated
             * "cloned-mac-address".
             */
            cloned_mac_address: string;
            /**
             * If specified, request that the device use this MAC address instead.
             * This is known as MAC cloning or spoofing.
             *
             * Beside explicitly specifying a MAC address, the special values "preserve", "permanent",
             * "random" and "stable" are supported.
             * "preserve" means not to touch the MAC address on activation.
             * "permanent" means to use the permanent hardware address if the device
             * has one (otherwise this is treated as "preserve").
             * "random" creates a random MAC address on each connect.
             * "stable" creates a hashed MAC address based on connection.stable-id and a
             * machine dependent key.
             *
             * If unspecified, the value can be overwritten via global defaults, see manual
             * of NetworkManager.conf. If still unspecified, it defaults to "preserve"
             * (older versions of NetworkManager may use a different default value).
             *
             * On D-Bus, this field is expressed as "assigned-mac-address" or the deprecated
             * "cloned-mac-address".
             */
            clonedMacAddress: string;
            /**
             * When a value is set, either "half" or "full", configures the device
             * to use the specified duplex mode. If "auto-negotiate" is "yes" the
             * specified duplex mode will be the only one advertised during link
             * negotiation: this works only for BASE-T 802.3 specifications and is
             * useful for enforcing gigabits modes, as in these cases link negotiation
             * is mandatory.
             * If the value is unset (the default), the link configuration will be
             * either skipped (if "auto-negotiate" is "no", the default) or will
             * be auto-negotiated (if "auto-negotiate" is "yes") and the local device
             * will advertise all the supported duplex modes.
             * Must be set together with the "speed" property if specified.
             * Before specifying a duplex mode be sure your device supports it.
             */
            duplex: string;
            /**
             * With #NMSettingWired:cloned-mac-address setting "random" or "stable",
             * by default all bits of the MAC address are scrambled and a locally-administered,
             * unicast MAC address is created. This property allows to specify that certain bits
             * are fixed. Note that the least significant bit of the first MAC address will
             * always be unset to create a unicast MAC address.
             *
             * If the property is %NULL, it is eligible to be overwritten by a default
             * connection setting. If the value is still %NULL or an empty string, the
             * default is to create a locally-administered, unicast MAC address.
             *
             * If the value contains one MAC address, this address is used as mask. The set
             * bits of the mask are to be filled with the current MAC address of the device,
             * while the unset bits are subject to randomization.
             * Setting "FE:FF:FF:00:00:00" means to preserve the OUI of the current MAC address
             * and only randomize the lower 3 bytes using the "random" or "stable" algorithm.
             *
             * If the value contains one additional MAC address after the mask,
             * this address is used instead of the current MAC address to fill the bits
             * that shall not be randomized. For example, a value of
             * "FE:FF:FF:00:00:00 68:F7:28:00:00:00" will set the OUI of the MAC address
             * to 68:F7:28, while the lower bits are randomized. A value of
             * "02:00:00:00:00:00 00:00:00:00:00:00" will create a fully scrambled
             * globally-administered, burned-in MAC address.
             *
             * If the value contains more than one additional MAC addresses, one of
             * them is chosen randomly. For example, "02:00:00:00:00:00 00:00:00:00:00:00 02:00:00:00:00:00"
             * will create a fully scrambled MAC address, randomly locally or globally
             * administered.
             */
            generate_mac_address_mask: string;
            /**
             * With #NMSettingWired:cloned-mac-address setting "random" or "stable",
             * by default all bits of the MAC address are scrambled and a locally-administered,
             * unicast MAC address is created. This property allows to specify that certain bits
             * are fixed. Note that the least significant bit of the first MAC address will
             * always be unset to create a unicast MAC address.
             *
             * If the property is %NULL, it is eligible to be overwritten by a default
             * connection setting. If the value is still %NULL or an empty string, the
             * default is to create a locally-administered, unicast MAC address.
             *
             * If the value contains one MAC address, this address is used as mask. The set
             * bits of the mask are to be filled with the current MAC address of the device,
             * while the unset bits are subject to randomization.
             * Setting "FE:FF:FF:00:00:00" means to preserve the OUI of the current MAC address
             * and only randomize the lower 3 bytes using the "random" or "stable" algorithm.
             *
             * If the value contains one additional MAC address after the mask,
             * this address is used instead of the current MAC address to fill the bits
             * that shall not be randomized. For example, a value of
             * "FE:FF:FF:00:00:00 68:F7:28:00:00:00" will set the OUI of the MAC address
             * to 68:F7:28, while the lower bits are randomized. A value of
             * "02:00:00:00:00:00 00:00:00:00:00:00" will create a fully scrambled
             * globally-administered, burned-in MAC address.
             *
             * If the value contains more than one additional MAC addresses, one of
             * them is chosen randomly. For example, "02:00:00:00:00:00 00:00:00:00:00:00 02:00:00:00:00:00"
             * will create a fully scrambled MAC address, randomly locally or globally
             * administered.
             */
            generateMacAddressMask: string;
            /**
             * If specified, this connection will only apply to the Ethernet device
             * whose permanent MAC address matches. This property does not change the
             * MAC address of the device (i.e. MAC spoofing).
             */
            mac_address: string;
            /**
             * If specified, this connection will only apply to the Ethernet device
             * whose permanent MAC address matches. This property does not change the
             * MAC address of the device (i.e. MAC spoofing).
             */
            macAddress: string;
            /**
             * If specified, this connection will never apply to the Ethernet device
             * whose permanent MAC address matches an address in the list.  Each MAC
             * address is in the standard hex-digits-and-colons notation
             * (00:11:22:33:44:55).
             */
            mac_address_blacklist: string[];
            /**
             * If specified, this connection will never apply to the Ethernet device
             * whose permanent MAC address matches an address in the list.  Each MAC
             * address is in the standard hex-digits-and-colons notation
             * (00:11:22:33:44:55).
             */
            macAddressBlacklist: string[];
            /**
             * If specified, this connection will never apply to the Ethernet device
             * whose permanent MAC address matches an address in the list.  Each MAC
             * address is in the standard hex-digits-and-colons notation
             * (00:11:22:33:44:55).
             */
            mac_address_denylist: string[];
            /**
             * If specified, this connection will never apply to the Ethernet device
             * whose permanent MAC address matches an address in the list.  Each MAC
             * address is in the standard hex-digits-and-colons notation
             * (00:11:22:33:44:55).
             */
            macAddressDenylist: string[];
            /**
             * If non-zero, only transmit packets of the specified size or smaller,
             * breaking larger packets up into multiple Ethernet frames.
             */
            mtu: number;
            /**
             * Specific port type to use if the device supports multiple
             * attachment methods.  One of "tp" (Twisted Pair), "aui" (Attachment Unit
             * Interface), "bnc" (Thin Ethernet) or "mii" (Media Independent Interface).
             * If the device supports only one port type, this setting is ignored.
             */
            port: string;
            /**
             * s390 network device type; one of "qeth", "lcs", or "ctc", representing
             * the different types of virtual network devices available on s390 systems.
             */
            s390_nettype: string;
            /**
             * s390 network device type; one of "qeth", "lcs", or "ctc", representing
             * the different types of virtual network devices available on s390 systems.
             */
            s390Nettype: string;
            /**
             * Dictionary of key/value pairs of s390-specific device options.  Both keys
             * and values must be strings.  Allowed keys include "portno", "layer2",
             * "portname", "protocol", among others.  Key names must contain only
             * alphanumeric characters (ie, [a-zA-Z0-9]).
             *
             * Currently, NetworkManager itself does nothing with this information.
             * However, s390utils ships a udev rule which parses this information
             * and applies it to the interface.
             */
            s390_options: GLib.HashTable<string, string>;
            /**
             * Dictionary of key/value pairs of s390-specific device options.  Both keys
             * and values must be strings.  Allowed keys include "portno", "layer2",
             * "portname", "protocol", among others.  Key names must contain only
             * alphanumeric characters (ie, [a-zA-Z0-9]).
             *
             * Currently, NetworkManager itself does nothing with this information.
             * However, s390utils ships a udev rule which parses this information
             * and applies it to the interface.
             */
            s390Options: GLib.HashTable<string, string>;
            /**
             * Identifies specific subchannels that this network device uses for
             * communication with z/VM or s390 host.  Like the
             * #NMSettingWired:mac-address property for non-z/VM devices, this property
             * can be used to ensure this connection only applies to the network device
             * that uses these subchannels.  The list should contain exactly 3 strings,
             * and each string may only be composed of hexadecimal characters and the
             * period (.) character.
             */
            s390_subchannels: string[];
            /**
             * Identifies specific subchannels that this network device uses for
             * communication with z/VM or s390 host.  Like the
             * #NMSettingWired:mac-address property for non-z/VM devices, this property
             * can be used to ensure this connection only applies to the network device
             * that uses these subchannels.  The list should contain exactly 3 strings,
             * and each string may only be composed of hexadecimal characters and the
             * period (.) character.
             */
            s390Subchannels: string[];
            /**
             * When a value greater than 0 is set, configures the device to use
             * the specified speed. If "auto-negotiate" is "yes" the specified
             * speed will be the only one advertised during link negotiation:
             * this works only for BASE-T 802.3 specifications and is useful for
             * enforcing gigabit speeds, as in this case link negotiation is
             * mandatory.
             * If the value is unset (0, the default), the link configuration will be
             * either skipped (if "auto-negotiate" is "no", the default) or will
             * be auto-negotiated (if "auto-negotiate" is "yes") and the local device
             * will advertise all the supported speeds.
             * In Mbit/s, ie 100 == 100Mbit/s.
             * Must be set together with the "duplex" property when non-zero.
             * Before specifying a speed value be sure your device supports it.
             */
            speed: number;
            /**
             * The #NMSettingWiredWakeOnLan options to enable. Not all devices support all options.
             * May be any combination of %NM_SETTING_WIRED_WAKE_ON_LAN_PHY,
             * %NM_SETTING_WIRED_WAKE_ON_LAN_UNICAST, %NM_SETTING_WIRED_WAKE_ON_LAN_MULTICAST,
             * %NM_SETTING_WIRED_WAKE_ON_LAN_BROADCAST, %NM_SETTING_WIRED_WAKE_ON_LAN_ARP,
             * %NM_SETTING_WIRED_WAKE_ON_LAN_MAGIC or the special values
             * %NM_SETTING_WIRED_WAKE_ON_LAN_DEFAULT (to use global settings) and
             * %NM_SETTING_WIRED_WAKE_ON_LAN_IGNORE (to disable management of Wake-on-LAN in
             * NetworkManager).
             */
            wake_on_lan: number;
            /**
             * The #NMSettingWiredWakeOnLan options to enable. Not all devices support all options.
             * May be any combination of %NM_SETTING_WIRED_WAKE_ON_LAN_PHY,
             * %NM_SETTING_WIRED_WAKE_ON_LAN_UNICAST, %NM_SETTING_WIRED_WAKE_ON_LAN_MULTICAST,
             * %NM_SETTING_WIRED_WAKE_ON_LAN_BROADCAST, %NM_SETTING_WIRED_WAKE_ON_LAN_ARP,
             * %NM_SETTING_WIRED_WAKE_ON_LAN_MAGIC or the special values
             * %NM_SETTING_WIRED_WAKE_ON_LAN_DEFAULT (to use global settings) and
             * %NM_SETTING_WIRED_WAKE_ON_LAN_IGNORE (to disable management of Wake-on-LAN in
             * NetworkManager).
             */
            wakeOnLan: number;
            /**
             * If specified, the password used with magic-packet-based
             * Wake-on-LAN, represented as an Ethernet MAC address.  If %NULL,
             * no password will be required.
             */
            wake_on_lan_password: string;
            /**
             * If specified, the password used with magic-packet-based
             * Wake-on-LAN, represented as an Ethernet MAC address.  If %NULL,
             * no password will be required.
             */
            wakeOnLanPassword: string;
        }
    }
    type SettingWired = (typeof classes.SettingWired)['prototype'];
    const SettingWired: typeof classes.SettingWired &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingWired.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingWired.SignalSignatures> & classes.SettingWired);
    namespace SettingWireless {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::ap-isolation'(pspec: GObject.ParamSpec): void;
            'notify::band'(pspec: GObject.ParamSpec): void;
            'notify::bssid'(pspec: GObject.ParamSpec): void;
            'notify::channel'(pspec: GObject.ParamSpec): void;
            'notify::channel-width'(pspec: GObject.ParamSpec): void;
            'notify::cloned-mac-address'(pspec: GObject.ParamSpec): void;
            'notify::generate-mac-address-mask'(pspec: GObject.ParamSpec): void;
            'notify::hidden'(pspec: GObject.ParamSpec): void;
            'notify::mac-address'(pspec: GObject.ParamSpec): void;
            'notify::mac-address-blacklist'(pspec: GObject.ParamSpec): void;
            'notify::mac-address-denylist'(pspec: GObject.ParamSpec): void;
            'notify::mac-address-randomization'(pspec: GObject.ParamSpec): void;
            'notify::mode'(pspec: GObject.ParamSpec): void;
            'notify::mtu'(pspec: GObject.ParamSpec): void;
            'notify::powersave'(pspec: GObject.ParamSpec): void;
            'notify::rate'(pspec: GObject.ParamSpec): void;
            'notify::seen-bssids'(pspec: GObject.ParamSpec): void;
            'notify::ssid'(pspec: GObject.ParamSpec): void;
            'notify::tx-power'(pspec: GObject.ParamSpec): void;
            'notify::wake-on-wlan'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * Configures AP isolation, which prevents communication between
             * wireless devices connected to this AP. This property can be set
             * to a value different from %NM_TERNARY_DEFAULT only when the
             * interface is configured in AP mode.
             *
             * If set to %NM_TERNARY_TRUE, devices are not able to communicate
             * with each other. This increases security because it protects
             * devices against attacks from other clients in the network. At
             * the same time, it prevents devices to access resources on the
             * same wireless networks as file shares, printers, etc.
             *
             * If set to %NM_TERNARY_FALSE, devices can talk to each other.
             *
             * When set to %NM_TERNARY_DEFAULT, the global default is used; in
             * case the global default is unspecified it is assumed to be
             * %NM_TERNARY_FALSE.
             */
            ap_isolation: Ternary;
            /**
             * Configures AP isolation, which prevents communication between
             * wireless devices connected to this AP. This property can be set
             * to a value different from %NM_TERNARY_DEFAULT only when the
             * interface is configured in AP mode.
             *
             * If set to %NM_TERNARY_TRUE, devices are not able to communicate
             * with each other. This increases security because it protects
             * devices against attacks from other clients in the network. At
             * the same time, it prevents devices to access resources on the
             * same wireless networks as file shares, printers, etc.
             *
             * If set to %NM_TERNARY_FALSE, devices can talk to each other.
             *
             * When set to %NM_TERNARY_DEFAULT, the global default is used; in
             * case the global default is unspecified it is assumed to be
             * %NM_TERNARY_FALSE.
             */
            apIsolation: Ternary;
            /**
             * 802.11 frequency band of the network.  One of "a" for 5GHz 802.11a or
             * "bg" for 2.4GHz 802.11.  This will lock associations to the Wi-Fi network
             * to the specific band, i.e. if "a" is specified, the device will not
             * associate with the same network in the 2.4GHz band even if the network's
             * settings are compatible.  This setting depends on specific driver
             * capability and may not work with all drivers.
             */
            band: string;
            /**
             * If specified, directs the device to only associate with the given access
             * point.  This capability is highly driver dependent and not supported by
             * all devices.  Note: this property does not control the BSSID used when
             * creating an Ad-Hoc network and is unlikely to in the future.
             *
             * Locking a client profile to a certain BSSID will prevent roaming and also
             * disable background scanning. That can be useful, if there is only one access
             * point for the SSID.
             */
            bssid: string;
            /**
             * Wireless channel to use for the Wi-Fi connection.  The device will only
             * join (or create for Ad-Hoc networks) a Wi-Fi network on the specified
             * channel.  Because channel numbers overlap between bands, this property
             * also requires the "band" property to be set.
             */
            channel: number;
            /**
             * Specifies width of the wireless channel in Access Point (AP) mode.
             *
             * When set to %NM_SETTING_WIRELESS_CHANNEL_WIDTH_AUTO (the default), the
             * channel width is automatically determined. At the moment, this means that
             * the safest (smallest) width is chosen.
             *
             * If the value is not %NM_SETTING_WIRELESS_CHANNEL_WIDTH_AUTO, then the
             * 'channel' property must also be set. When using the 2.4GHz band, the width
             * can be at most 40MHz.
             *
             * This property can be set to a value different from
             * %NM_SETTING_WIRELESS_CHANNEL_WIDTH_AUTO only when the interface is configured
             * in AP mode.
             */
            channel_width: number;
            /**
             * Specifies width of the wireless channel in Access Point (AP) mode.
             *
             * When set to %NM_SETTING_WIRELESS_CHANNEL_WIDTH_AUTO (the default), the
             * channel width is automatically determined. At the moment, this means that
             * the safest (smallest) width is chosen.
             *
             * If the value is not %NM_SETTING_WIRELESS_CHANNEL_WIDTH_AUTO, then the
             * 'channel' property must also be set. When using the 2.4GHz band, the width
             * can be at most 40MHz.
             *
             * This property can be set to a value different from
             * %NM_SETTING_WIRELESS_CHANNEL_WIDTH_AUTO only when the interface is configured
             * in AP mode.
             */
            channelWidth: number;
            /**
             * If specified, request that the device use this MAC address instead.
             * This is known as MAC cloning or spoofing.
             *
             * Beside explicitly specifying a MAC address, the special values "preserve", "permanent",
             * "random", "stable" and "stable-ssid" are supported.
             * "preserve" means not to touch the MAC address on activation.
             * "permanent" means to use the permanent hardware address of the device.
             * "random" creates a random MAC address on each connect.
             * "stable" creates a hashed MAC address based on connection.stable-id and a
             * machine dependent key.
             * "stable-ssid" creates a hashed MAC address based on the SSID, the same as setting the
             * stable-id to "${NETWORK_SSID}".
             *
             * If unspecified, the value can be overwritten via global defaults, see manual
             * of NetworkManager.conf. If still unspecified, it defaults to "preserve"
             * (older versions of NetworkManager may use a different default value).
             *
             * On D-Bus, this field is expressed as "assigned-mac-address" or the deprecated
             * "cloned-mac-address".
             */
            cloned_mac_address: string;
            /**
             * If specified, request that the device use this MAC address instead.
             * This is known as MAC cloning or spoofing.
             *
             * Beside explicitly specifying a MAC address, the special values "preserve", "permanent",
             * "random", "stable" and "stable-ssid" are supported.
             * "preserve" means not to touch the MAC address on activation.
             * "permanent" means to use the permanent hardware address of the device.
             * "random" creates a random MAC address on each connect.
             * "stable" creates a hashed MAC address based on connection.stable-id and a
             * machine dependent key.
             * "stable-ssid" creates a hashed MAC address based on the SSID, the same as setting the
             * stable-id to "${NETWORK_SSID}".
             *
             * If unspecified, the value can be overwritten via global defaults, see manual
             * of NetworkManager.conf. If still unspecified, it defaults to "preserve"
             * (older versions of NetworkManager may use a different default value).
             *
             * On D-Bus, this field is expressed as "assigned-mac-address" or the deprecated
             * "cloned-mac-address".
             */
            clonedMacAddress: string;
            /**
             * With #NMSettingWireless:cloned-mac-address setting "random" or "stable",
             * by default all bits of the MAC address are scrambled and a locally-administered,
             * unicast MAC address is created. This property allows to specify that certain bits
             * are fixed. Note that the least significant bit of the first MAC address will
             * always be unset to create a unicast MAC address.
             *
             * If the property is %NULL, it is eligible to be overwritten by a default
             * connection setting. If the value is still %NULL or an empty string, the
             * default is to create a locally-administered, unicast MAC address.
             *
             * If the value contains one MAC address, this address is used as mask. The set
             * bits of the mask are to be filled with the current MAC address of the device,
             * while the unset bits are subject to randomization.
             * Setting "FE:FF:FF:00:00:00" means to preserve the OUI of the current MAC address
             * and only randomize the lower 3 bytes using the "random" or "stable" algorithm.
             *
             * If the value contains one additional MAC address after the mask,
             * this address is used instead of the current MAC address to fill the bits
             * that shall not be randomized. For example, a value of
             * "FE:FF:FF:00:00:00 68:F7:28:00:00:00" will set the OUI of the MAC address
             * to 68:F7:28, while the lower bits are randomized. A value of
             * "02:00:00:00:00:00 00:00:00:00:00:00" will create a fully scrambled
             * globally-administered, burned-in MAC address.
             *
             * If the value contains more than one additional MAC addresses, one of
             * them is chosen randomly. For example, "02:00:00:00:00:00 00:00:00:00:00:00 02:00:00:00:00:00"
             * will create a fully scrambled MAC address, randomly locally or globally
             * administered.
             */
            generate_mac_address_mask: string;
            /**
             * With #NMSettingWireless:cloned-mac-address setting "random" or "stable",
             * by default all bits of the MAC address are scrambled and a locally-administered,
             * unicast MAC address is created. This property allows to specify that certain bits
             * are fixed. Note that the least significant bit of the first MAC address will
             * always be unset to create a unicast MAC address.
             *
             * If the property is %NULL, it is eligible to be overwritten by a default
             * connection setting. If the value is still %NULL or an empty string, the
             * default is to create a locally-administered, unicast MAC address.
             *
             * If the value contains one MAC address, this address is used as mask. The set
             * bits of the mask are to be filled with the current MAC address of the device,
             * while the unset bits are subject to randomization.
             * Setting "FE:FF:FF:00:00:00" means to preserve the OUI of the current MAC address
             * and only randomize the lower 3 bytes using the "random" or "stable" algorithm.
             *
             * If the value contains one additional MAC address after the mask,
             * this address is used instead of the current MAC address to fill the bits
             * that shall not be randomized. For example, a value of
             * "FE:FF:FF:00:00:00 68:F7:28:00:00:00" will set the OUI of the MAC address
             * to 68:F7:28, while the lower bits are randomized. A value of
             * "02:00:00:00:00:00 00:00:00:00:00:00" will create a fully scrambled
             * globally-administered, burned-in MAC address.
             *
             * If the value contains more than one additional MAC addresses, one of
             * them is chosen randomly. For example, "02:00:00:00:00:00 00:00:00:00:00:00 02:00:00:00:00:00"
             * will create a fully scrambled MAC address, randomly locally or globally
             * administered.
             */
            generateMacAddressMask: string;
            /**
             * If %TRUE, indicates that the network is a non-broadcasting network that
             * hides its SSID. This works both in infrastructure and AP mode.
             *
             * In infrastructure mode, various workarounds are used for a more reliable
             * discovery of hidden networks, such as probe-scanning the SSID.  However,
             * these workarounds expose inherent insecurities with hidden SSID networks,
             * and thus hidden SSID networks should be used with caution.
             *
             * In AP mode, the created network does not broadcast its SSID.
             *
             * Note that marking the network as hidden may be a privacy issue for you
             * (in infrastructure mode) or client stations (in AP mode), as the explicit
             * probe-scans are distinctly recognizable on the air.
             */
            hidden: boolean;
            /**
             * If specified, this connection will only apply to the Wi-Fi device whose
             * permanent MAC address matches. This property does not change the MAC
             * address of the device (i.e. MAC spoofing).
             */
            mac_address: string;
            /**
             * If specified, this connection will only apply to the Wi-Fi device whose
             * permanent MAC address matches. This property does not change the MAC
             * address of the device (i.e. MAC spoofing).
             */
            macAddress: string;
            /**
             * A list of permanent MAC addresses of Wi-Fi devices to which this
             * connection should never apply.  Each MAC address should be given in the
             * standard hex-digits-and-colons notation (eg "00:11:22:33:44:55").
             */
            mac_address_blacklist: string[];
            /**
             * A list of permanent MAC addresses of Wi-Fi devices to which this
             * connection should never apply.  Each MAC address should be given in the
             * standard hex-digits-and-colons notation (eg "00:11:22:33:44:55").
             */
            macAddressBlacklist: string[];
            /**
             * A list of permanent MAC addresses of Wi-Fi devices to which this
             * connection should never apply.  Each MAC address should be given in the
             * standard hex-digits-and-colons notation (eg "00:11:22:33:44:55").
             */
            mac_address_denylist: string[];
            /**
             * A list of permanent MAC addresses of Wi-Fi devices to which this
             * connection should never apply.  Each MAC address should be given in the
             * standard hex-digits-and-colons notation (eg "00:11:22:33:44:55").
             */
            macAddressDenylist: string[];
            /**
             * One of %NM_SETTING_MAC_RANDOMIZATION_DEFAULT (never randomize unless
             * the user has set a global default to randomize and the supplicant
             * supports randomization),  %NM_SETTING_MAC_RANDOMIZATION_NEVER (never
             * randomize the MAC address), or %NM_SETTING_MAC_RANDOMIZATION_ALWAYS
             * (always randomize the MAC address).
             */
            mac_address_randomization: number;
            /**
             * One of %NM_SETTING_MAC_RANDOMIZATION_DEFAULT (never randomize unless
             * the user has set a global default to randomize and the supplicant
             * supports randomization),  %NM_SETTING_MAC_RANDOMIZATION_NEVER (never
             * randomize the MAC address), or %NM_SETTING_MAC_RANDOMIZATION_ALWAYS
             * (always randomize the MAC address).
             */
            macAddressRandomization: number;
            /**
             * Wi-Fi network mode; one of "infrastructure", "mesh", "adhoc" or "ap".  If blank,
             * infrastructure is assumed.
             */
            mode: string;
            /**
             * If non-zero, only transmit packets of the specified size or smaller,
             * breaking larger packets up into multiple Ethernet frames.
             */
            mtu: number;
            /**
             * One of %NM_SETTING_WIRELESS_POWERSAVE_DISABLE (disable Wi-Fi power
             * saving), %NM_SETTING_WIRELESS_POWERSAVE_ENABLE (enable Wi-Fi power
             * saving), %NM_SETTING_WIRELESS_POWERSAVE_IGNORE (don't touch currently
             * configure setting) or %NM_SETTING_WIRELESS_POWERSAVE_DEFAULT (use the
             * globally configured value). All other values are reserved.
             */
            powersave: number;
            /**
             * This property is not implemented and has no effect.
             */
            rate: number;
            /**
             * A list of BSSIDs (each BSSID formatted as a MAC address like
             * "00:11:22:33:44:55") that have been detected as part of the Wi-Fi
             * network.  NetworkManager internally tracks previously seen BSSIDs. The
             * property is only meant for reading and reflects the BSSID list of
             * NetworkManager. The changes you make to this property will not be
             * preserved.
             *
             * This is not a regular property that the user would configure. Instead,
             * NetworkManager automatically sets the seen BSSIDs and tracks them internally
             * in "/var/lib/NetworkManager/seen-bssids" file.
             */
            seen_bssids: string[];
            /**
             * A list of BSSIDs (each BSSID formatted as a MAC address like
             * "00:11:22:33:44:55") that have been detected as part of the Wi-Fi
             * network.  NetworkManager internally tracks previously seen BSSIDs. The
             * property is only meant for reading and reflects the BSSID list of
             * NetworkManager. The changes you make to this property will not be
             * preserved.
             *
             * This is not a regular property that the user would configure. Instead,
             * NetworkManager automatically sets the seen BSSIDs and tracks them internally
             * in "/var/lib/NetworkManager/seen-bssids" file.
             */
            seenBssids: string[];
            /**
             * SSID of the Wi-Fi network. Must be specified.
             */
            ssid: GLib.Bytes;
            /**
             * This property is not implemented and has no effect.
             */
            tx_power: number;
            /**
             * This property is not implemented and has no effect.
             */
            txPower: number;
            /**
             * The #NMSettingWirelessWakeOnWLan options to enable. Not all devices support all options.
             * May be any combination of %NM_SETTING_WIRELESS_WAKE_ON_WLAN_ANY,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_DISCONNECT,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_MAGIC,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_GTK_REKEY_FAILURE,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_EAP_IDENTITY_REQUEST,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_4WAY_HANDSHAKE,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_RFKILL_RELEASE,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_TCP or the special values
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_DEFAULT (to use global settings) and
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_IGNORE (to disable management of Wake-on-LAN in
             * NetworkManager).
             */
            wake_on_wlan: number;
            /**
             * The #NMSettingWirelessWakeOnWLan options to enable. Not all devices support all options.
             * May be any combination of %NM_SETTING_WIRELESS_WAKE_ON_WLAN_ANY,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_DISCONNECT,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_MAGIC,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_GTK_REKEY_FAILURE,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_EAP_IDENTITY_REQUEST,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_4WAY_HANDSHAKE,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_RFKILL_RELEASE,
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_TCP or the special values
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_DEFAULT (to use global settings) and
             * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_IGNORE (to disable management of Wake-on-LAN in
             * NetworkManager).
             */
            wakeOnWlan: number;
        }
    }
    type SettingWireless = (typeof classes.SettingWireless)['prototype'];
    const SettingWireless: typeof classes.SettingWireless &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingWireless.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingWireless.SignalSignatures> & classes.SettingWireless);
    namespace SettingWirelessSecurity {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::auth-alg'(pspec: GObject.ParamSpec): void;
            'notify::fils'(pspec: GObject.ParamSpec): void;
            'notify::group'(pspec: GObject.ParamSpec): void;
            'notify::key-mgmt'(pspec: GObject.ParamSpec): void;
            'notify::leap-password'(pspec: GObject.ParamSpec): void;
            'notify::leap-password-flags'(pspec: GObject.ParamSpec): void;
            'notify::leap-username'(pspec: GObject.ParamSpec): void;
            'notify::pairwise'(pspec: GObject.ParamSpec): void;
            'notify::pmf'(pspec: GObject.ParamSpec): void;
            'notify::proto'(pspec: GObject.ParamSpec): void;
            'notify::psk'(pspec: GObject.ParamSpec): void;
            'notify::psk-flags'(pspec: GObject.ParamSpec): void;
            'notify::wep-key-flags'(pspec: GObject.ParamSpec): void;
            'notify::wep-key-type'(pspec: GObject.ParamSpec): void;
            'notify::wep-key0'(pspec: GObject.ParamSpec): void;
            'notify::wep-key1'(pspec: GObject.ParamSpec): void;
            'notify::wep-key2'(pspec: GObject.ParamSpec): void;
            'notify::wep-key3'(pspec: GObject.ParamSpec): void;
            'notify::wep-tx-keyidx'(pspec: GObject.ParamSpec): void;
            'notify::wps-method'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
             * 802.11 authentication algorithm required by the AP here.  One of "open"
             * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
             * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
             * "leap-username" and "leap-password" properties must be specified.
             */
            auth_alg: string;
            /**
             * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
             * 802.11 authentication algorithm required by the AP here.  One of "open"
             * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
             * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
             * "leap-username" and "leap-password" properties must be specified.
             */
            authAlg: string;
            /**
             * Indicates whether Fast Initial Link Setup (802.11ai) must be enabled for
             * the connection.  One of %NM_SETTING_WIRELESS_SECURITY_FILS_DEFAULT (use
             * global default value), %NM_SETTING_WIRELESS_SECURITY_FILS_DISABLE
             * (disable FILS), %NM_SETTING_WIRELESS_SECURITY_FILS_OPTIONAL (enable FILS
             * if the supplicant and the access point support it) or
             * %NM_SETTING_WIRELESS_SECURITY_FILS_REQUIRED (enable FILS and fail if not
             * supported).  When set to %NM_SETTING_WIRELESS_SECURITY_FILS_DEFAULT and
             * no global default is set, FILS will be optionally enabled.
             */
            fils: number;
            /**
             * A list of group/broadcast encryption algorithms which prevents
             * connections to Wi-Fi networks that do not utilize one of the algorithms
             * in the list.  For maximum compatibility leave this property empty.  Each
             * list element may be one of "wep40", "wep104", "tkip", or "ccmp".
             */
            group: string[];
            /**
             * Key management used for the connection. One of "none" (WEP or no
             * password protection), "ieee8021x" (Dynamic WEP), "owe" (Opportunistic
             * Wireless Encryption), "wpa-psk" (WPA2 + WPA3 personal), "sae" (WPA3
             * personal only), "wpa-eap" (WPA2 + WPA3 enterprise) or
             * "wpa-eap-suite-b-192" (WPA3 enterprise only).
             *
             * This property must be set for any Wi-Fi connection that uses security.
             */
            key_mgmt: string;
            /**
             * Key management used for the connection. One of "none" (WEP or no
             * password protection), "ieee8021x" (Dynamic WEP), "owe" (Opportunistic
             * Wireless Encryption), "wpa-psk" (WPA2 + WPA3 personal), "sae" (WPA3
             * personal only), "wpa-eap" (WPA2 + WPA3 enterprise) or
             * "wpa-eap-suite-b-192" (WPA3 enterprise only).
             *
             * This property must be set for any Wi-Fi connection that uses security.
             */
            keyMgmt: string;
            /**
             * The login password for legacy LEAP connections (ie, key-mgmt =
             * "ieee8021x" and auth-alg = "leap").
             */
            leap_password: string;
            /**
             * The login password for legacy LEAP connections (ie, key-mgmt =
             * "ieee8021x" and auth-alg = "leap").
             */
            leapPassword: string;
            /**
             * Flags indicating how to handle the
             * #NMSettingWirelessSecurity:leap-password property.
             */
            leap_password_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the
             * #NMSettingWirelessSecurity:leap-password property.
             */
            leapPasswordFlags: SettingSecretFlags;
            /**
             * The login username for legacy LEAP connections (ie, key-mgmt =
             * "ieee8021x" and auth-alg = "leap").
             */
            leap_username: string;
            /**
             * The login username for legacy LEAP connections (ie, key-mgmt =
             * "ieee8021x" and auth-alg = "leap").
             */
            leapUsername: string;
            /**
             * A list of pairwise encryption algorithms which prevents connections to
             * Wi-Fi networks that do not utilize one of the algorithms in the list.
             * For maximum compatibility leave this property empty.  Each list element
             * may be one of "tkip" or "ccmp".
             */
            pairwise: string[];
            /**
             * Indicates whether Protected Management Frames (802.11w) must be enabled
             * for the connection.  One of %NM_SETTING_WIRELESS_SECURITY_PMF_DEFAULT
             * (use global default value), %NM_SETTING_WIRELESS_SECURITY_PMF_DISABLE
             * (disable PMF), %NM_SETTING_WIRELESS_SECURITY_PMF_OPTIONAL (enable PMF if
             * the supplicant and the access point support it) or
             * %NM_SETTING_WIRELESS_SECURITY_PMF_REQUIRED (enable PMF and fail if not
             * supported).  When set to %NM_SETTING_WIRELESS_SECURITY_PMF_DEFAULT and no
             * global default is set, PMF will be optionally enabled.
             */
            pmf: number;
            /**
             * List of strings specifying the allowed WPA protocol versions to use.
             * Each element may be one "wpa" (allow WPA) or "rsn" (allow WPA2/RSN).  If
             * not specified, both WPA and RSN connections are allowed.
             */
            proto: string[];
            /**
             * Pre-Shared-Key for WPA networks. For WPA-PSK, it's either an ASCII
             * passphrase of 8 to 63 characters that is (as specified in the 802.11i
             * standard) hashed to derive the actual key, or the key in form of 64
             * hexadecimal character. The WPA3-Personal networks use a passphrase
             * of any length for SAE authentication.
             */
            psk: string;
            /**
             * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
             * property.
             */
            psk_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
             * property.
             */
            pskFlags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
             * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
             * and #NMSettingWirelessSecurity:wep-key3 properties.
             */
            wep_key_flags: SettingSecretFlags;
            /**
             * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
             * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
             * and #NMSettingWirelessSecurity:wep-key3 properties.
             */
            wepKeyFlags: SettingSecretFlags;
            /**
             * Controls the interpretation of WEP keys.  Allowed values are
             * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
             * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
             * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
             * as a string and will be hashed using the de-facto MD5 method to derive
             * the actual WEP key.
             */
            wep_key_type: WepKeyType;
            /**
             * Controls the interpretation of WEP keys.  Allowed values are
             * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
             * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
             * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
             * as a string and will be hashed using the de-facto MD5 method to derive
             * the actual WEP key.
             */
            wepKeyType: WepKeyType;
            /**
             * Index 0 WEP key.  This is the WEP key used in most networks.  See the
             * "wep-key-type" property for a description of how this key is interpreted.
             */
            wep_key0: string;
            /**
             * Index 0 WEP key.  This is the WEP key used in most networks.  See the
             * "wep-key-type" property for a description of how this key is interpreted.
             */
            wepKey0: string;
            /**
             * Index 1 WEP key.  This WEP index is not used by most networks.  See the
             * "wep-key-type" property for a description of how this key is interpreted.
             */
            wep_key1: string;
            /**
             * Index 1 WEP key.  This WEP index is not used by most networks.  See the
             * "wep-key-type" property for a description of how this key is interpreted.
             */
            wepKey1: string;
            /**
             * Index 2 WEP key.  This WEP index is not used by most networks.  See the
             * "wep-key-type" property for a description of how this key is interpreted.
             */
            wep_key2: string;
            /**
             * Index 2 WEP key.  This WEP index is not used by most networks.  See the
             * "wep-key-type" property for a description of how this key is interpreted.
             */
            wepKey2: string;
            /**
             * Index 3 WEP key.  This WEP index is not used by most networks.  See the
             * "wep-key-type" property for a description of how this key is interpreted.
             */
            wep_key3: string;
            /**
             * Index 3 WEP key.  This WEP index is not used by most networks.  See the
             * "wep-key-type" property for a description of how this key is interpreted.
             */
            wepKey3: string;
            /**
             * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
             * index is used by the AP, put that WEP key index here.  Valid values are 0
             * (default key) through 3.  Note that some consumer access points (like the
             * Linksys WRT54G) number the keys 1 - 4.
             */
            wep_tx_keyidx: number;
            /**
             * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
             * index is used by the AP, put that WEP key index here.  Valid values are 0
             * (default key) through 3.  Note that some consumer access points (like the
             * Linksys WRT54G) number the keys 1 - 4.
             */
            wepTxKeyidx: number;
            /**
             * Flags indicating which mode of WPS is to be used if any.
             *
             * There's little point in changing the default setting as NetworkManager will
             * automatically determine whether it's feasible to start WPS enrollment from
             * the Access Point capabilities.
             *
             * WPS can be disabled by setting this property to a value of 1.
             */
            wps_method: number;
            /**
             * Flags indicating which mode of WPS is to be used if any.
             *
             * There's little point in changing the default setting as NetworkManager will
             * automatically determine whether it's feasible to start WPS enrollment from
             * the Access Point capabilities.
             *
             * WPS can be disabled by setting this property to a value of 1.
             */
            wpsMethod: number;
        }
    }
    type SettingWirelessSecurity = (typeof classes.SettingWirelessSecurity)['prototype'];
    const SettingWirelessSecurity: typeof classes.SettingWirelessSecurity &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingWirelessSecurity.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingWirelessSecurity.SignalSignatures> & classes.SettingWirelessSecurity);
    namespace SettingWpan {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {
            'notify::channel'(pspec: GObject.ParamSpec): void;
            'notify::mac-address'(pspec: GObject.ParamSpec): void;
            'notify::page'(pspec: GObject.ParamSpec): void;
            'notify::pan-id'(pspec: GObject.ParamSpec): void;
            'notify::short-address'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Setting.ConstructorProps {
            /**
             * IEEE 802.15.4 channel. A positive integer or -1, meaning "do not
             * set, use whatever the device is already set to".
             */
            channel: number;
            /**
             * If specified, this connection will only apply to the IEEE 802.15.4 (WPAN)
             * MAC layer device whose permanent MAC address matches.
             */
            mac_address: string;
            /**
             * If specified, this connection will only apply to the IEEE 802.15.4 (WPAN)
             * MAC layer device whose permanent MAC address matches.
             */
            macAddress: string;
            /**
             * IEEE 802.15.4 channel page. A positive integer or -1, meaning "do not
             * set, use whatever the device is already set to".
             */
            page: number;
            /**
             * IEEE 802.15.4 Personal Area Network (PAN) identifier.
             */
            pan_id: number;
            /**
             * IEEE 802.15.4 Personal Area Network (PAN) identifier.
             */
            panId: number;
            /**
             * Short IEEE 802.15.4 address to be used within a restricted environment.
             */
            short_address: number;
            /**
             * Short IEEE 802.15.4 address to be used within a restricted environment.
             */
            shortAddress: number;
        }
    }
    type SettingWpan = (typeof classes.SettingWpan)['prototype'];
    const SettingWpan: typeof classes.SettingWpan &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SettingWpan.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SettingWpan.SignalSignatures> & classes.SettingWpan);
    namespace SimpleConnection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Connection.ConstructorProps {}
    }
    type SimpleConnection = (typeof classes.SimpleConnection)['prototype'];
    const SimpleConnection: typeof classes.SimpleConnection &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.SimpleConnection.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SimpleConnection.SignalSignatures> & classes.SimpleConnection);
    namespace VpnConnection {
        // Signal signatures
        interface SignalSignatures extends ActiveConnection.SignalSignatures {
            'vpn-state-changed'(arg0: number, arg1: number): void;
            'notify::banner'(pspec: GObject.ParamSpec): void;
            'notify::vpn-state'(pspec: GObject.ParamSpec): void;
            'notify::connection'(pspec: GObject.ParamSpec): void;
            'notify::controller'(pspec: GObject.ParamSpec): void;
            'notify::default'(pspec: GObject.ParamSpec): void;
            'notify::default6'(pspec: GObject.ParamSpec): void;
            'notify::devices'(pspec: GObject.ParamSpec): void;
            'notify::dhcp4-config'(pspec: GObject.ParamSpec): void;
            'notify::dhcp6-config'(pspec: GObject.ParamSpec): void;
            'notify::id'(pspec: GObject.ParamSpec): void;
            'notify::ip4-config'(pspec: GObject.ParamSpec): void;
            'notify::ip6-config'(pspec: GObject.ParamSpec): void;
            'notify::master'(pspec: GObject.ParamSpec): void;
            'notify::specific-object-path'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::state-flags'(pspec: GObject.ParamSpec): void;
            'notify::type'(pspec: GObject.ParamSpec): void;
            'notify::uuid'(pspec: GObject.ParamSpec): void;
            'notify::vpn'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends ActiveConnection.ConstructorProps {
            /**
             * The VPN login banner of the active VPN connection.
             */
            banner: string;
            /**
             * The VPN state of the active VPN connection.
             */
            vpn_state: VpnConnectionState;
            /**
             * The VPN state of the active VPN connection.
             */
            vpnState: VpnConnectionState;
        }
    }
    type VpnConnection = (typeof classes.VpnConnection)['prototype'];
    const VpnConnection: typeof classes.VpnConnection &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.VpnConnection.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, VpnConnection.SignalSignatures> & classes.VpnConnection);
    namespace VpnPluginInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::filename'(pspec: GObject.ParamSpec): void;
            'notify::keyfile'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            /**
             * The filename from which the info was loaded.
             * Can be %NULL if the instance was not loaded from
             * a file (i.e. the keyfile instance was passed to the
             * constructor).
             */
            filename: string;
            /**
             * Initialize the instance with a different keyfile instance.
             * When passing a keyfile instance, the constructor will not
             * try to read from filename.
             */
            keyfile: GLib.KeyFile;
            /**
             * The name of the VPN plugin.
             */
            name: string;
        }
    }
    type VpnPluginInfo = (typeof classes.VpnPluginInfo)['prototype'];
    const VpnPluginInfo: typeof classes.VpnPluginInfo &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.VpnPluginInfo.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, VpnPluginInfo.SignalSignatures> & classes.VpnPluginInfo);
    namespace VpnPluginOld {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            config(arg0: GLib.Variant): void;
            failure(arg0: number): void;
            'ip4-config'(arg0: GLib.Variant): void;
            'ip6-config'(arg0: GLib.Variant): void;
            'login-banner'(arg0: string): void;
            quit(): void;
            'secrets-required'(arg0: string, arg1: string[]): void;
            'state-changed'(arg0: number): void;
            'notify::service-name'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            /**
             * The D-Bus service name of this plugin.
             */
            service_name: string;
            /**
             * The D-Bus service name of this plugin.
             */
            serviceName: string;
            /**
             * The state of the plugin.
             */
            state: VpnServiceState;
        }
    }
    type VpnPluginOld = (typeof classes.VpnPluginOld)['prototype'];
    const VpnPluginOld: typeof classes.VpnPluginOld &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.VpnPluginOld.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, VpnPluginOld.SignalSignatures> & classes.VpnPluginOld);
    namespace VpnServicePlugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            config(arg0: GLib.Variant): void;
            failure(arg0: number): void;
            'ip4-config'(arg0: GLib.Variant): void;
            'ip6-config'(arg0: GLib.Variant): void;
            'login-banner'(arg0: string): void;
            quit(): void;
            'secrets-required'(arg0: string, arg1: string[]): void;
            'state-changed'(arg0: number): void;
            'notify::service-name'(pspec: GObject.ParamSpec): void;
            'notify::state'(pspec: GObject.ParamSpec): void;
            'notify::watch-peer'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            /**
             * The D-Bus service name of this plugin.
             */
            service_name: string;
            /**
             * The D-Bus service name of this plugin.
             */
            serviceName: string;
            /**
             * The state of the plugin.
             */
            state: VpnServiceState;
            /**
             * Whether to watch for D-Bus peer's changes.
             */
            watch_peer: boolean;
            /**
             * Whether to watch for D-Bus peer's changes.
             */
            watchPeer: boolean;
        }
    }
    type VpnServicePlugin = (typeof classes.VpnServicePlugin)['prototype'];
    const VpnServicePlugin: typeof classes.VpnServicePlugin &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.VpnServicePlugin.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, VpnServicePlugin.SignalSignatures> & classes.VpnServicePlugin);
    namespace WifiP2PPeer {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::flags'(pspec: GObject.ParamSpec): void;
            'notify::hw-address'(pspec: GObject.ParamSpec): void;
            'notify::last-seen'(pspec: GObject.ParamSpec): void;
            'notify::manufacturer'(pspec: GObject.ParamSpec): void;
            'notify::model'(pspec: GObject.ParamSpec): void;
            'notify::model-number'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::serial'(pspec: GObject.ParamSpec): void;
            'notify::strength'(pspec: GObject.ParamSpec): void;
            'notify::wfd-ies'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The flags of the P2P peer.
             */
            flags: __80211ApFlags;
            /**
             * The hardware address of the P2P peer.
             */
            hw_address: string;
            /**
             * The hardware address of the P2P peer.
             */
            hwAddress: string;
            /**
             * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
             * P2P peer was found.  A value of -1 means the peer has never been seen.
             */
            last_seen: number;
            /**
             * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
             * P2P peer was found.  A value of -1 means the peer has never been seen.
             */
            lastSeen: number;
            /**
             * The manufacturer of the P2P peer.
             */
            manufacturer: string;
            /**
             * The model of the P2P peer.
             */
            model: string;
            /**
             * The hardware address of the P2P peer.
             */
            model_number: string;
            /**
             * The hardware address of the P2P peer.
             */
            modelNumber: string;
            /**
             * The name of the P2P peer.
             */
            name: string;
            /**
             * The serial number of the P2P peer.
             */
            serial: string;
            /**
             * The current signal strength of the P2P peer.
             */
            strength: number;
            /**
             * The WFD information elements of the P2P peer.
             */
            wfd_ies: GLib.Bytes;
            /**
             * The WFD information elements of the P2P peer.
             */
            wfdIes: GLib.Bytes;
        }
    }
    type WifiP2PPeer = (typeof classes.WifiP2PPeer)['prototype'];
    const WifiP2PPeer: typeof classes.WifiP2PPeer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.WifiP2PPeer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WifiP2PPeer.SignalSignatures> & classes.WifiP2PPeer);
    namespace WimaxNsp {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::name'(pspec: GObject.ParamSpec): void;
            'notify::network-type'(pspec: GObject.ParamSpec): void;
            'notify::signal-quality'(pspec: GObject.ParamSpec): void;
            'notify::client'(pspec: GObject.ParamSpec): void;
            'notify::path'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The name of the WiMAX NSP.
             */
            name: string;
            /**
             * The network type of the WiMAX NSP.
             */
            network_type: WimaxNspNetworkType;
            /**
             * The network type of the WiMAX NSP.
             */
            networkType: WimaxNspNetworkType;
            /**
             * The signal quality of the WiMAX NSP.
             */
            signal_quality: number;
            /**
             * The signal quality of the WiMAX NSP.
             */
            signalQuality: number;
        }
    }
    type WimaxNsp = (typeof classes.WimaxNsp)['prototype'];
    const WimaxNsp: typeof classes.WimaxNsp &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<NM.WimaxNsp.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, WimaxNsp.SignalSignatures> & classes.WimaxNsp);
    export type AccessPointClass = typeof AccessPoint;
    export type ActiveConnectionClass = typeof ActiveConnection;
    class BridgeVlan {
        static '$gtype': GObject.GType<BridgeVlan>;
        // Constructors
        constructor(vid_start: number, vid_end: number);
        _init(...args: any[]): void;
        static new(vid_start: number, vid_end: number): BridgeVlan;
        // Static methods
        /**
         * Parses the string representation of the queueing
         * discipline to a %NMBridgeVlan instance.
         *
         * @param str the string representation of a bridge VLAN
         */
        static from_str(str: string): BridgeVlan;
        // Methods
        /**
         * Compare two bridge VLAN objects.
         *
         * @returns zero of the two instances are equivalent or
         *   a non-zero integer otherwise. This defines a total ordering
         *   over the VLANs. Whether a VLAN is sealed or not does not
         *   affect the comparison.
         * @param b another #NMBridgeVlan
         */
        cmp(b: BridgeVlan): number;
        /**
         * Gets the VLAN id range.
         *
         * @returns %TRUE is the VLAN specifies a range, %FALSE if it is
         * a single-id VLAN.
         */
        get_vid_range(): [boolean, number, number];
        /**
         * Returns whether the VLAN is the PVID for the port.
         *
         * @returns %TRUE if the VLAN is the PVID
         */
        is_pvid(): boolean;
        is_sealed(): boolean;
        /**
         * Returns whether the VLAN is untagged.
         *
         * @returns %TRUE if the VLAN is untagged, %FALSE otherwise
         */
        is_untagged(): boolean;
        new_clone(): BridgeVlan;
        /**
         * Increases the reference count of the object.
         *
         * @returns the input argument `vlan` object.
         *
         * Since 1.42, ref-counting of #NMBridgeVlan is thread-safe.
         */
        ref(): BridgeVlan;
        /**
         * Seal the #NMBridgeVlan instance. Afterwards, it is a bug
         * to call all functions that modify the instance (except ref/unref).
         * A sealed instance cannot be unsealed again, but you can create
         * an unsealed copy with nm_bridge_vlan_new_clone().
         */
        seal(): void;
        /**
         * Change the value of the PVID property of the VLAN. It
         * is invalid to set the value to %TRUE for non-single-id
         * VLANs.
         *
         * @param value the new value
         */
        set_pvid(value: boolean): void;
        /**
         * Change the value of the untagged property of the VLAN.
         *
         * @param value the new value
         */
        set_untagged(value: boolean): void;
        /**
         * Convert a %NMBridgeVlan to a string.
         *
         * @returns formatted string or %NULL
         */
        to_str(): string;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero the object will be destroyed.
         *
         * Since 1.42, ref-counting of #NMBridgeVlan is thread-safe.
         */
        unref(): void;
    }
    export type CheckpointClass = typeof Checkpoint;
    export type ClientClass = typeof Client;
    export type ConnectionInterface = typeof Connection;
    export type Device6LowpanClass = typeof Device6Lowpan;
    export type DeviceAdslClass = typeof DeviceAdsl;
    export type DeviceBondClass = typeof DeviceBond;
    export type DeviceBridgeClass = typeof DeviceBridge;
    export type DeviceBtClass = typeof DeviceBt;
    export type DeviceClass = typeof Device;
    export type DeviceDummyClass = typeof DeviceDummy;
    export type DeviceEthernetClass = typeof DeviceEthernet;
    export type DeviceGenericClass = typeof DeviceGeneric;
    export type DeviceHsrClass = typeof DeviceHsr;
    export type DeviceIPTunnelClass = typeof DeviceIPTunnel;
    export type DeviceInfinibandClass = typeof DeviceInfiniband;
    export type DeviceLoopbackClass = typeof DeviceLoopback;
    export type DeviceMacsecClass = typeof DeviceMacsec;
    export type DeviceMacvlanClass = typeof DeviceMacvlan;
    export type DeviceModemClass = typeof DeviceModem;
    export type DeviceOlpcMeshClass = typeof DeviceOlpcMesh;
    export type DeviceOvsBridgeClass = typeof DeviceOvsBridge;
    export type DeviceOvsInterfaceClass = typeof DeviceOvsInterface;
    export type DeviceOvsPortClass = typeof DeviceOvsPort;
    export type DevicePppClass = typeof DevicePpp;
    export type DeviceTeamClass = typeof DeviceTeam;
    export type DeviceTunClass = typeof DeviceTun;
    export type DeviceVethClass = typeof DeviceVeth;
    export type DeviceVlanClass = typeof DeviceVlan;
    export type DeviceVrfClass = typeof DeviceVrf;
    export type DeviceVxlanClass = typeof DeviceVxlan;
    export type DeviceWifiClass = typeof DeviceWifi;
    export type DeviceWifiP2PClass = typeof DeviceWifiP2P;
    export type DeviceWimaxClass = typeof DeviceWimax;
    export type DeviceWireGuardClass = typeof DeviceWireGuard;
    export type DeviceWpanClass = typeof DeviceWpan;
    export type DhcpConfigClass = typeof DhcpConfig;
    abstract class DnsEntry {
        static '$gtype': GObject.GType<DnsEntry>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Gets the list of DNS domains.
         *
         * @returns the list of DNS domains
         */
        get_domains(): string[];
        /**
         * Gets the interface on which name servers are contacted.
         *
         * @returns the interface name
         */
        get_interface(): string;
        /**
         * Gets the list of name servers for this entry.
         *
         * @returns the list of name servers
         */
        get_nameservers(): string[];
        /**
         * Gets the priority of the entry
         *
         * @returns the priority of the entry
         */
        get_priority(): number;
        /**
         * Gets whether the entry refers to VPN name servers.
         *
         * @returns %TRUE if the entry refers to VPN name servers
         */
        get_vpn(): boolean;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }
    class IPAddress {
        static '$gtype': GObject.GType<IPAddress>;
        // Constructors
        constructor(family: number, addr: string, prefix: number);
        _init(...args: any[]): void;
        static new(family: number, addr: string, prefix: number): IPAddress;
        static new_binary(family: number, addr: any | null, prefix: number): IPAddress;
        // Methods
        /**
         * Note that with `cmp_flags` #NM_IP_ADDRESS_CMP_FLAGS_WITH_ATTRS, there
         * is no total order for comparing GVariant. That means, if the two addresses
         * only differ by their attributes, the sort order is undefined and the return
         * value only indicates equality.
         *
         * @returns 0 if the two objects have the same values (according to their flags)
         *   or a integer indicating the compare order.
         * @param b the #NMIPAddress to compare `address` to.
         * @param cmp_flags the #NMIPAddressCmpFlags that indicate what to compare.
         */
        cmp_full(b: IPAddress, cmp_flags: IPAddressCmpFlags | null): number;
        /**
         * Creates a copy of `address`
         *
         * @returns a copy of `address`
         *
         * This API was part of public headers before 1.32.0 but
         * was erroneously not exported in the ABI. It is thus only
         * usable since 1.32.0.
         */
        dup(): IPAddress;
        /**
         * Determines if two #NMIPAddress objects contain the same address and prefix
         * (attributes are not compared).
         *
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         * @param other the #NMIPAddress to compare `address` to.
         */
        equal(other: IPAddress): boolean;
        /**
         * Gets the IP address property of this address object.
         *
         * @returns the IP address
         */
        get_address(): string;
        /**
         * Gets the value of the attribute with name `name` on `address`
         *
         * @returns the value of the attribute with name `name` on
         *   `address,` or %NULL if `address` has no such attribute.
         * @param name the name of an address attribute
         */
        get_attribute(name: string): GLib.Variant;
        /**
         * Gets an array of attribute names defined on `address`.
         *
         * @returns a %NULL-terminated array of attribute names,
         */
        get_attribute_names(): string[];
        /**
         * Gets the IP address family (eg, AF_INET) property of this address
         * object.
         *
         * @returns the IP address family
         */
        get_family(): number;
        /**
         * Gets the IP address prefix (ie "24" or "30" etc) property of this address
         * object.
         *
         * @returns the IP address prefix
         */
        get_prefix(): number;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Sets the IP address property of this address object.
         *
         * `addr` must be a valid address of `address'`s family. If you aren't sure you
         * have a valid address, use nm_utils_ipaddr_valid() to check it.
         *
         * @param addr the IP address, as a string
         */
        set_address(addr: string): void;
        /**
         * Sets or clears the named attribute on `address` to the given value.
         *
         * @param name the name of an address attribute
         * @param value the value
         */
        set_attribute(name: string, value?: GLib.Variant | null): void;
        /**
         * Sets the IP address prefix property of this address object.
         *
         * @param prefix the IP address prefix
         */
        set_prefix(prefix: number): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }
    export type IPConfigClass = typeof IPConfig;
    class IPRoute {
        static '$gtype': GObject.GType<IPRoute>;
        // Constructors
        constructor(family: number, dest: string, prefix: number, next_hop: string | null, metric: number);
        _init(...args: any[]): void;
        static new(family: number, dest: string, prefix: number, next_hop: string | null, metric: number): IPRoute;
        static new_binary(
            family: number,
            dest: any | null,
            prefix: number,
            next_hop: any | null,
            metric: number,
        ): IPRoute;
        // Static methods
        /**
         * Validates a route attribute, i.e. checks that the attribute is a known one
         * and the value is of the correct type and well-formed.
         *
         * @param name the attribute name
         * @param value the attribute value
         * @param family IP address family of the route
         */
        static attribute_validate(name: string, value: GLib.Variant, family: number): [boolean, boolean];
        static get_variant_attribute_spec(): VariantAttributeSpec;
        // Methods
        /**
         * Creates a copy of `route`
         *
         * @returns a copy of `route`
         *
         * This API was part of public headers before 1.32.0 but
         * was erroneously not exported in the ABI. It is thus only
         * usable since 1.32.0.
         */
        dup(): IPRoute;
        /**
         * Determines if two #NMIPRoute objects contain the same destination, prefix,
         * next hop, and metric. (Attributes are not compared.)
         *
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         * @param other the #NMIPRoute to compare `route` to.
         */
        equal(other: IPRoute): boolean;
        /**
         * Determines if two #NMIPRoute objects contain the same destination, prefix,
         * next hop, and metric.
         *
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         * @param other the #NMIPRoute to compare `route` to.
         * @param cmp_flags tune how to compare attributes. Currently, only
         *   NM_IP_ROUTE_EQUAL_CMP_FLAGS_NONE (0) and NM_IP_ROUTE_EQUAL_CMP_FLAGS_WITH_ATTRS (1)
         *   is supported.
         */
        equal_full(other: IPRoute, cmp_flags: number): boolean;
        /**
         * Gets the value of the attribute with name `name` on `route`
         *
         * @returns the value of the attribute with name `name` on
         *   `route,` or %NULL if `route` has no such attribute.
         * @param name the name of an route attribute
         */
        get_attribute(name: string): GLib.Variant;
        /**
         * Gets an array of attribute names defined on `route`.
         *
         * @returns a %NULL-terminated array of attribute names
         */
        get_attribute_names(): string[];
        /**
         * Gets the IP destination address property of this route object.
         *
         * @returns the IP address of the route's destination
         */
        get_dest(): string;
        /**
         * Gets the IP address family (eg, AF_INET) property of this route
         * object.
         *
         * @returns the IP address family
         */
        get_family(): number;
        /**
         * Gets the route metric property of this route object; lower values
         * indicate "better" or more preferred routes; -1 indicates "default"
         * (meaning NetworkManager will set it appropriately).
         *
         * @returns the route metric
         */
        get_metric(): number;
        /**
         * Gets the IP address of the next hop of this route; this will be %NULL if the
         * route has no next hop.
         *
         * @returns the IP address of the next hop, or %NULL if this is a device route.
         */
        get_next_hop(): string;
        /**
         * Gets the IP prefix (ie "24" or "30" etc) of this route.
         *
         * @returns the IP prefix
         */
        get_prefix(): number;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Sets the named attribute on `route` to the given value.
         *
         * @param name the name of a route attribute
         * @param value the value
         */
        set_attribute(name: string, value?: GLib.Variant | null): void;
        /**
         * Sets the destination property of this route object.
         *
         * `dest` must be a valid address of `route'`s family. If you aren't sure you
         * have a valid address, use nm_inet_is_valid() to check it.
         *
         * @param dest the route's destination, as a string
         */
        set_dest(dest: string): void;
        /**
         * Sets the metric property of this route object.
         *
         * @param metric the route metric (or -1 for "default")
         */
        set_metric(metric: number): void;
        /**
         * Sets the next-hop property of this route object.
         *
         * `next_hop` (if non-%NULL) must be a valid address of `route'`s family. If you
         * aren't sure you have a valid address, use nm_utils_ipaddr_valid() to check
         * it.
         *
         * @param next_hop the route's next hop, as a string
         */
        set_next_hop(next_hop?: string | null): void;
        /**
         * Sets the prefix property of this route object.
         *
         * @param prefix the route prefix
         */
        set_prefix(prefix: number): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }
    class IPRoutingRule {
        static '$gtype': GObject.GType<IPRoutingRule>;
        // Constructors
        constructor(addr_family: number);
        _init(...args: any[]): void;
        static new(addr_family: number): IPRoutingRule;
        // Static methods
        static from_string(
            str: string,
            to_string_flags: IPRoutingRuleAsStringFlags,
            extra_args?: GLib.HashTable<any, any> | null,
        ): IPRoutingRule;
        // Methods
        cmp(other?: IPRoutingRule | null): number;
        get_action(): number;
        get_addr_family(): number;
        get_destination_port_end(): number;
        get_destination_port_start(): number;
        get_from(): string;
        get_from_len(): number;
        get_fwmark(): number;
        get_fwmask(): number;
        get_iifname(): string;
        get_invert(): boolean;
        get_ipproto(): number;
        get_oifname(): string;
        get_priority(): number;
        get_source_port_end(): number;
        get_source_port_start(): number;
        get_suppress_prefixlength(): number;
        get_table(): number;
        get_to(): string;
        get_to_len(): number;
        get_tos(): number;
        get_uid_range(): [boolean, number, number];
        is_sealed(): boolean;
        /**
         * Since 1.42, ref-counting of #NMIPRoutingRule is thread-safe.
         *
         * @returns a newly created rule instance with
         *   the same settings as `rule`. Note that the instance will
         *   always be unsealed.
         */
        new_clone(): IPRoutingRule;
        /**
         * Increases the reference count of the instance.
         *
         * @returns the `self` argument with incremented
         *  reference count.
         *
         * Since 1.42, ref-counting of #NMIPRoutingRule is thread-safe.
         */
        ref(): IPRoutingRule;
        /**
         * Seals the routing rule. Afterwards, the instance can no longer be
         * modified, and it is a bug to call any of the accessors that would
         * modify the rule. If `self` was already sealed, this has no effect.
         */
        seal(): void;
        /**
         * Note that currently only certain actions are allowed. nm_ip_routing_rule_validate()
         * will reject unsupported actions as invalid.
         *
         * @param action the action to set
         */
        set_action(action: number): void;
        set_destination_port(start: number, end: number): void;
        /**
         * Setting invalid values is accepted, but will later fail
         * during nm_ip_routing_rule_validate().
         *
         * @param from the from/src address to set.
         *   The address family must match.
         * @param len the corresponding prefix length of the address.
         */
        set_from(from: string | null, len: number): void;
        set_fwmark(fwmark: number, fwmask: number): void;
        /**
         * The name supports C backslash escaping for non-UTF-8 characters.
         * Note that nm_ip_routing_rule_from_string() too uses backslash
         * escaping when tokenizing the words by whitespace. So, in string
         * representation you'd get double backslashes.
         *
         * @param iifname the iifname to set or %NULL to unset.
         */
        set_iifname(iifname?: string | null): void;
        set_invert(invert: boolean): void;
        set_ipproto(ipproto: number): void;
        /**
         * The name supports C backslash escaping for non-UTF-8 characters.
         * Note that nm_ip_routing_rule_from_string() too uses backslash
         * escaping when tokenizing the words by whitespace. So, in string
         * representation you'd get double backslashes.
         *
         * @param oifname the oifname to set or %NULL to unset.
         */
        set_oifname(oifname?: string | null): void;
        /**
         * A valid priority ranges from 0 to %G_MAXUINT32. "-1" is also allowed
         * to reset the priority. It is a bug calling this function with any
         * other value.
         *
         * @param priority the priority to set
         */
        set_priority(priority: number): void;
        set_source_port(start: number, end: number): void;
        set_suppress_prefixlength(suppress_prefixlength: number): void;
        set_table(table: number): void;
        /**
         * Setting invalid values is accepted, but will later fail
         * during nm_ip_routing_rule_validate().
         *
         * @param to the to/dst address to set.
         *   The address family must match.
         * @param len the corresponding prefix length of the address.
         *   If `to` is %NULL, this valid is ignored.
         */
        set_to(to: string | null, len: number): void;
        set_tos(tos: number): void;
        /**
         * For a valid range, start must be less or equal to end.
         * If set to an invalid range, the range gets unset.
         *
         * This API was wrongly introduced in the header files for 1.32, but the
         * symbols were not exported. The API only works since 1.34 and newer.
         *
         * @param uid_range_start the uid_range start to set.
         * @param uid_range_end the uid_range start to set.
         */
        set_uid_range(uid_range_start: number, uid_range_end: number): void;
        to_string(
            to_string_flags: IPRoutingRuleAsStringFlags | null,
            extra_args?: GLib.HashTable<any, any> | null,
        ): string;
        /**
         * Decreases the reference count of the instance and destroys
         * the instance if the reference count reaches zero.
         *
         * Since 1.42, ref-counting of #NMIPRoutingRule is thread-safe.
         */
        unref(): void;
        validate(): boolean;
    }
    /**
     * Opaque type with parameters for the callback. The actual content
     * depends on the %NMKeyfileHandlerType.
     */
    abstract class KeyfileHandlerData {
        static '$gtype': GObject.GType<KeyfileHandlerData>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Set the error for the handler. This lets the operation fail
         * with the provided error. You may only set the error once.
         *
         * `src` must be non-%NULL.
         *
         * Note that `src` is no longer valid after this call. If you want
         * to keep using the same GError*, you need to set it to %NULL
         * after calling this function on it.
         *
         * @param src error to move into the return location
         */
        fail_with_error(src: GLib.Error): void;
        /**
         * Get context information of the current event. This function can be called
         * on all events, but the context information may be unset.
         */
        get_context(): [string, string, Setting | null, string];
        warn_get(): [string, KeyfileWarnSeverity | null];
    }
    /**
     * Supported attributes are:
     *
     * - #NM_LLDP_ATTR_CHASSIS_ID_TYPE (type: 'u')
     * - #NM_LLDP_ATTR_CHASSIS_ID (type: 's')
     * - #NM_LLDP_ATTR_DESTINATION (type: 's')
     * - #NM_LLDP_ATTR_IEEE_802_1_PPVID (type: 'u'). This attribute only reports the first PPVID
     *   and therefore it is deprecated in favor of NM_LLDP_ATTR_IEEE_802_1_PPVIDS which reports
     *   all the PPVID.
     * - #NM_LLDP_ATTR_IEEE_802_1_PPVID_FLAGS (type: 'u'). This attribute only reports the first PPVID
     *   and therefore it is deprecated in favor of NM_LLDP_ATTR_IEEE_802_1_PPVIDS which reports
     *   all the PPVID.
     * - #NM_LLDP_ATTR_IEEE_802_1_PPVIDS (type: 'aa{sv}')
     *
     *   An array of dictionaries where each element has keys:
     *   - flags (type: 'u')
     *   - ppvid (type: 'u')
     * - #NM_LLDP_ATTR_IEEE_802_1_PVID (type: 'u')
     * - #NM_LLDP_ATTR_IEEE_802_1_VID (type: 'u'). This attribute only reports the first VLAN
     *   and therefore it is deprecated in favor of NM_LLDP_ATTR_IEEE_802_1_VLANS which reports
     *   all the VLANs.
     * - #NM_LLDP_ATTR_IEEE_802_1_VLAN_NAME (type: 's'). This attribute only reports the first VLAN
     *   and therefore it is deprecated in favor of NM_LLDP_ATTR_IEEE_802_1_VLANS which reports
     *   all the VLANs.
     * - #NM_LLDP_ATTR_IEEE_802_1_VLANS (type: 'aa{sv}')
     *
     *   An array of dictionaries where each element has keys:
     *   - name (type: 's')
     *   - vid (type: 'u')
     * - #NM_LLDP_ATTR_IEEE_802_3_MAC_PHY_CONF (type: 'a{sv}')
     *
     *   Dictionary where each element has keys:
     *   - autoneg (type: 'u')
     *   - operational-mau-type (type: 'u')
     *   - pmd-autoneg-cap (type: 'u')
     * - #NM_LLDP_ATTR_IEEE_802_3_MAX_FRAME_SIZE (type: 'u')
     * - #NM_LLDP_ATTR_IEEE_802_3_POWER_VIA_MDI (type: 'a{sv}')
     *
     *   Dictionary where each element has keys:
     *   - mdi-power-support (type: 'u')
     *   - power-class (type: 'u')
     *   - pse-power-pair (type: 'u')
     * - #NM_LLDP_ATTR_MANAGEMENT_ADDRESSES (type: 'aa{sv}')
     *
     *   An array of dictionaries where each element has keys:
     *   - address (type: 'ay')
     *   - address-subtype (type: 'u')
     *   - interface-number (type: 'u')
     *   - interface-number-subtype (type: 'u')
     *   - object-id (type: 'ay')
     * - #NM_LLDP_ATTR_PORT_DESCRIPTION (type: 's')
     * - #NM_LLDP_ATTR_PORT_ID_TYPE (type: 'u')
     * - #NM_LLDP_ATTR_PORT_ID (type: 's')
     * - #NM_LLDP_ATTR_RAW (type: 'ay')
     * - #NM_LLDP_ATTR_SYSTEM_CAPABILITIES (type: 'u')
     * - #NM_LLDP_ATTR_SYSTEM_DESCRIPTION (type: 's')
     * - #NM_LLDP_ATTR_SYSTEM_NAME (type: 's')
     */
    class LldpNeighbor {
        static '$gtype': GObject.GType<LldpNeighbor>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(): LldpNeighbor;
        // Methods
        /**
         * Gets an array of attribute names available for `neighbor`.
         *
         * @returns a %NULL-terminated array of attribute names.
         */
        get_attr_names(): string[];
        /**
         * Gets the string value of attribute with name `name` on `neighbor`
         *
         * @returns %TRUE if a string attribute with name `name` was found, %FALSE otherwise
         * @param name the attribute name
         */
        get_attr_string_value(name: string): [boolean, string];
        /**
         * Get the type of an attribute.
         *
         * @returns the #GVariantType of the attribute with name `name`
         * @param name the attribute name
         */
        get_attr_type(name: string): GLib.VariantType;
        /**
         * Gets the uint32 value of attribute with name `name` on `neighbor`
         *
         * @returns %TRUE if a uint32 attribute with name `name` was found, %FALSE otherwise
         * @param name the attribute name
         */
        get_attr_uint_value(name: string): [boolean, number];
        /**
         * Gets the value (as a GVariant) of attribute with name `name` on `neighbor`
         *
         * @returns the value or %NULL if the attribute with `name` was
         * not found.
         * @param name the attribute name
         */
        get_attr_value(name: string): GLib.Variant;
        /**
         * Increases the reference count of the object.
         *
         * Since 1.32, ref-counting of #NMLldpNeighbor is thread-safe.
         */
        ref(): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         *
         * Since 1.32, ref-counting of #NMLldpNeighbor is thread-safe.
         */
        unref(): void;
    }
    export type ObjectClass = typeof Object;
    class Range {
        static '$gtype': GObject.GType<Range>;
        // Constructors
        constructor(start: number, end: number);
        _init(...args: any[]): void;
        static new(start: number, end: number): Range;
        // Static methods
        /**
         * Parses the string representation of the range to create a %NMRange
         * instance.
         *
         * @param str the string representation of a range
         */
        static from_str(str: string): Range;
        // Methods
        /**
         * Compare two ranges.
         *
         * @returns zero if the two instances are equivalent or
         *   a non-zero integer otherwise. This defines a total ordering
         *   over the ranges.
         * @param b another #NMRange
         */
        cmp(b: Range): number;
        /**
         * Gets the start and end values for the range.
         *
         * @returns %TRUE if the range contains more than one
         * element, %FALSE otherwise.
         */
        get_range(): [boolean, number, number];
        /**
         * Increases the reference count of the object.
         * This is thread-safe.
         *
         * @returns the input argument `range` object.
         */
        ref(): Range;
        /**
         * Convert a %NMRange to a string.
         *
         * @returns a string representing the range.
         */
        to_str(): string;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero the object will be destroyed.
         * This is thread-safe.
         */
        unref(): void;
    }
    export type RemoteConnectionClass = typeof RemoteConnection;
    export type SecretAgentOldClass = typeof SecretAgentOld;
    export type Setting6LowpanClass = typeof Setting6Lowpan;
    export type Setting8021xClass = typeof Setting8021x;
    export type SettingAdslClass = typeof SettingAdsl;
    export type SettingBluetoothClass = typeof SettingBluetooth;
    export type SettingBondClass = typeof SettingBond;
    export type SettingBondPortClass = typeof SettingBondPort;
    export type SettingBridgeClass = typeof SettingBridge;
    export type SettingBridgePortClass = typeof SettingBridgePort;
    export type SettingCdmaClass = typeof SettingCdma;
    export type SettingClass = typeof Setting;
    export type SettingConnectionClass = typeof SettingConnection;
    export type SettingDcbClass = typeof SettingDcb;
    export type SettingDummyClass = typeof SettingDummy;
    export type SettingEthtoolClass = typeof SettingEthtool;
    export type SettingGenericClass = typeof SettingGeneric;
    export type SettingGsmClass = typeof SettingGsm;
    export type SettingHostnameClass = typeof SettingHostname;
    export type SettingHsrClass = typeof SettingHsr;
    export type SettingIP4ConfigClass = typeof SettingIP4Config;
    export type SettingIP6ConfigClass = typeof SettingIP6Config;
    export type SettingIPConfigClass = typeof SettingIPConfig;
    export type SettingIPTunnelClass = typeof SettingIPTunnel;
    export type SettingInfinibandClass = typeof SettingInfiniband;
    export type SettingLinkClass = typeof SettingLink;
    export type SettingLoopbackClass = typeof SettingLoopback;
    export type SettingMacsecClass = typeof SettingMacsec;
    export type SettingMacvlanClass = typeof SettingMacvlan;
    export type SettingMatchClass = typeof SettingMatch;
    export type SettingOlpcMeshClass = typeof SettingOlpcMesh;
    export type SettingOvsBridgeClass = typeof SettingOvsBridge;
    export type SettingOvsDpdkClass = typeof SettingOvsDpdk;
    export type SettingOvsExternalIDsClass = typeof SettingOvsExternalIDs;
    export type SettingOvsInterfaceClass = typeof SettingOvsInterface;
    export type SettingOvsOtherConfigClass = typeof SettingOvsOtherConfig;
    export type SettingOvsPatchClass = typeof SettingOvsPatch;
    export type SettingOvsPortClass = typeof SettingOvsPort;
    export type SettingPppClass = typeof SettingPpp;
    export type SettingPppoeClass = typeof SettingPppoe;
    export type SettingProxyClass = typeof SettingProxy;
    export type SettingSerialClass = typeof SettingSerial;
    export type SettingSriovClass = typeof SettingSriov;
    export type SettingTCConfigClass = typeof SettingTCConfig;
    export type SettingTeamClass = typeof SettingTeam;
    export type SettingTeamPortClass = typeof SettingTeamPort;
    export type SettingTunClass = typeof SettingTun;
    export type SettingUserClass = typeof SettingUser;
    export type SettingVethClass = typeof SettingVeth;
    export type SettingVlanClass = typeof SettingVlan;
    export type SettingVpnClass = typeof SettingVpn;
    export type SettingVrfClass = typeof SettingVrf;
    export type SettingVxlanClass = typeof SettingVxlan;
    export type SettingWifiP2PClass = typeof SettingWifiP2P;
    export type SettingWimaxClass = typeof SettingWimax;
    export type SettingWireGuardClass = typeof SettingWireGuard;
    export type SettingWiredClass = typeof SettingWired;
    export type SettingWirelessClass = typeof SettingWireless;
    export type SettingWirelessSecurityClass = typeof SettingWirelessSecurity;
    export type SettingWpanClass = typeof SettingWpan;
    export type SimpleConnectionClass = typeof SimpleConnection;
    class SriovVF {
        static '$gtype': GObject.GType<SriovVF>;
        // Constructors
        constructor(index: number);
        _init(...args: any[]): void;
        static new(index: number): SriovVF;
        // Static methods
        /**
         * Validates a VF attribute, i.e. checks that the attribute is a known one,
         * the value is of the correct type and well-formed.
         *
         * @param name the attribute name
         * @param value the attribute value
         */
        static attribute_validate(name: string, value: GLib.Variant): [boolean, boolean];
        // Methods
        /**
         * Adds a VLAN to the VF. Currently kernel only supports one VLAN per VF.
         *
         * @returns %TRUE if the VLAN was added; %FALSE if it already existed
         * @param vlan_id the VLAN id
         */
        add_vlan(vlan_id: number): boolean;
        /**
         * Creates a copy of `vf`.
         *
         * @returns a copy of `vf`
         */
        dup(): SriovVF;
        /**
         * Determines if two #NMSriovVF objects have the same index,
         * attributes and VLANs.
         *
         * @returns %TRUE if the objects contain the same values, %FALSE
         *    if they do not.
         * @param other the #NMSriovVF to compare `vf` to.
         */
        equal(other: SriovVF): boolean;
        /**
         * Gets the value of the attribute with name `name` on `vf`
         *
         * @returns the value of the attribute with name `name` on
         *   `vf,` or %NULL if `vf` has no such attribute.
         * @param name the name of a VF attribute
         */
        get_attribute(name: string): GLib.Variant;
        /**
         * Gets an array of attribute names defined on `vf`.
         *
         * @returns a %NULL-terminated array of attribute names
         */
        get_attribute_names(): string[];
        /**
         * Gets the index property of this VF object.
         *
         * @returns the VF index
         */
        get_index(): number;
        /**
         * Returns the VLANs currently configured on the VF. Currently kernel only
         * supports one VLAN per VF.
         *
         * @returns a list of VLAN ids configured on the VF.
         */
        get_vlan_ids(): number[];
        /**
         * Returns the configured protocol for the given VLAN.
         *
         * @returns the configured protocol
         * @param vlan_id the VLAN id
         */
        get_vlan_protocol(vlan_id: number): SriovVFVlanProtocol;
        /**
         * Returns the QoS value for the given VLAN.
         *
         * @returns the QoS value
         * @param vlan_id the VLAN id
         */
        get_vlan_qos(vlan_id: number): number;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Removes a VLAN from a VF.
         *
         * @returns %TRUE if the VLAN was removed, %FALSE if the VLAN `vlan_id`
         *     did not belong to the VF.
         * @param vlan_id the VLAN id
         */
        remove_vlan(vlan_id: number): boolean;
        /**
         * Sets the named attribute on `vf` to the given value.
         *
         * @param name the name of a route attribute
         * @param value the value
         */
        set_attribute(name: string, value?: GLib.Variant | null): void;
        /**
         * Sets the protocol for the given VLAN.
         *
         * @param vlan_id the VLAN id
         * @param protocol the VLAN protocol
         */
        set_vlan_protocol(vlan_id: number, protocol: SriovVFVlanProtocol | null): void;
        /**
         * Sets a QoS value for the given VLAN.
         *
         * @param vlan_id the VLAN id
         * @param qos a QoS (priority) value
         */
        set_vlan_qos(vlan_id: number, qos: number): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }
    class TCAction {
        static '$gtype': GObject.GType<TCAction>;
        // Constructors
        constructor(kind: string);
        _init(...args: any[]): void;
        static new(kind: string): TCAction;
        // Methods
        /**
         * Creates a copy of `action`
         *
         * @returns a copy of `action`
         */
        dup(): TCAction;
        /**
         * Determines if two #NMTCAction objects contain the same kind, family,
         * handle, parent and info.
         *
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         * @param other the #NMTCAction to compare `action` to.
         */
        equal(other: TCAction): boolean;
        /**
         * Gets the value of the attribute with name `name` on `action`
         *
         * @returns the value of the attribute with name `name` on
         *   `action,` or %NULL if `action` has no such attribute.
         * @param name the name of an action attribute
         */
        get_attribute(name: string): GLib.Variant;
        /**
         * Gets an array of attribute names defined on `action`.
         *
         * @returns a %NULL-terminated array of attribute names,
         */
        get_attribute_names(): string[];
        get_kind(): string;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Sets or clears the named attribute on `action` to the given value.
         *
         * @param name the name of an action attribute
         * @param value the value
         */
        set_attribute(name: string, value?: GLib.Variant | null): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }
    class TCQdisc {
        static '$gtype': GObject.GType<TCQdisc>;
        // Constructors
        constructor(kind: string, parent: number);
        _init(...args: any[]): void;
        static new(kind: string, parent: number): TCQdisc;
        // Methods
        /**
         * Creates a copy of `qdisc`
         *
         * @returns a copy of `qdisc`
         */
        dup(): TCQdisc;
        /**
         * Determines if two #NMTCQdisc objects contain the same kind, * handle
         * and parent.
         *
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         * @param other the #NMTCQdisc to compare `qdisc` to.
         */
        equal(other: TCQdisc): boolean;
        /**
         * Gets the value of the attribute with name `name` on `qdisc`
         *
         * @returns the value of the attribute with name `name` on
         *   `qdisc,` or %NULL if `qdisc` has no such attribute.
         * @param name the name of an qdisc attribute
         */
        get_attribute(name: string): GLib.Variant;
        /**
         * Gets an array of attribute names defined on `qdisc`.
         *
         * @returns a %NULL-terminated array of attribute names
         *   or %NULL if no attributes are set.
         */
        get_attribute_names(): string[];
        get_handle(): number;
        get_kind(): string;
        get_parent(): number;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Sets or clears the named attribute on `qdisc` to the given value.
         *
         * @param name the name of an qdisc attribute
         * @param value the value
         */
        set_attribute(name: string, value?: GLib.Variant | null): void;
        /**
         * Sets the queueing discipline handle.
         *
         * @param handle the queueing discipline handle
         */
        set_handle(handle: number): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }
    class TCTfilter {
        static '$gtype': GObject.GType<TCTfilter>;
        // Constructors
        constructor(kind: string, parent: number);
        _init(...args: any[]): void;
        static new(kind: string, parent: number): TCTfilter;
        // Methods
        /**
         * Creates a copy of `tfilter`
         *
         * @returns a copy of `tfilter`
         */
        dup(): TCTfilter;
        /**
         * Determines if two #NMTCTfilter objects contain the same kind, family,
         * handle, parent and info.
         *
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         * @param other the #NMTCTfilter to compare `tfilter` to.
         */
        equal(other: TCTfilter): boolean;
        get_action(): TCAction;
        get_handle(): number;
        get_kind(): string;
        get_parent(): number;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Sets the action associated with a traffic filter.
         *
         * @param action the action object
         */
        set_action(action: TCAction): void;
        /**
         * Sets the queueing discipline handle.
         *
         * @param handle the queueing discipline handle
         */
        set_handle(handle: number): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }
    class TeamLinkWatcher {
        static '$gtype': GObject.GType<TeamLinkWatcher>;
        // Constructors
        constructor(
            init_wait: number,
            interval: number,
            missed_max: number,
            target_host: string,
            source_host: string,
            flags: TeamLinkWatcherArpPingFlags,
        );
        _init(...args: any[]): void;
        static new_arp_ping(
            init_wait: number,
            interval: number,
            missed_max: number,
            target_host: string,
            source_host: string,
            flags: TeamLinkWatcherArpPingFlags,
        ): TeamLinkWatcher;
        static new_arp_ping2(
            init_wait: number,
            interval: number,
            missed_max: number,
            vlanid: number,
            target_host: string,
            source_host: string,
            flags: TeamLinkWatcherArpPingFlags,
        ): TeamLinkWatcher;
        static new_ethtool(delay_up: number, delay_down: number): TeamLinkWatcher;
        static new_nsna_ping(
            init_wait: number,
            interval: number,
            missed_max: number,
            target_host: string,
        ): TeamLinkWatcher;
        // Methods
        /**
         * Creates a copy of `watcher`
         *
         * @returns a copy of `watcher`
         */
        dup(): TeamLinkWatcher;
        /**
         * Determines if two #NMTeamLinkWatcher objects contain the same values
         * in all the properties.
         *
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         * @param other the #NMTeamLinkWatcher to compare `watcher` to.
         */
        equal(other: TeamLinkWatcher): boolean;
        /**
         * Gets the delay_down interval (in milliseconds) that elapses between the link
         * going down and the runner being notified about it.
         */
        get_delay_down(): number;
        /**
         * Gets the delay_up interval (in milliseconds) that elapses between the link
         * coming up and the runner being notified about it.
         */
        get_delay_up(): number;
        /**
         * Gets the arp ping watcher flags.
         */
        get_flags(): TeamLinkWatcherArpPingFlags;
        /**
         * Gets the init_wait interval (in milliseconds) that the team port should
         * wait before sending the first packet to the target host.
         */
        get_init_wait(): number;
        /**
         * Gets the interval (in milliseconds) that the team port should wait between
         * sending two check packets to the target host.
         */
        get_interval(): number;
        /**
         * Gets the number of missed replies after which the link is considered down.
         */
        get_missed_max(): number;
        /**
         * Gets the name of the link watcher to be used.
         */
        get_name(): string;
        /**
         * Gets the ip address to be used as source for the link probing packets.
         */
        get_source_host(): string;
        /**
         * Gets the host name/ip address to be used as destination for the link probing
         * packets.
         */
        get_target_host(): string;
        /**
         * Gets the VLAN tag ID to be used to outgoing link probes
         */
        get_vlanid(): number;
        /**
         * Increases the reference count of the object.
         *
         * Since 1.20, ref-counting of #NMTeamLinkWatcher is thread-safe.
         */
        ref(): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         *
         * Since 1.20, ref-counting of #NMTeamLinkWatcher is thread-safe.
         */
        unref(): void;
    }
    abstract class VariantAttributeSpec {
        static '$gtype': GObject.GType<VariantAttributeSpec>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type VpnConnectionClass = typeof VpnConnection;
    export type VpnEditorInterface = typeof VpnEditor;
    export type VpnEditorPluginInterface = typeof VpnEditorPlugin;
    abstract class VpnEditorPluginVT {
        static '$gtype': GObject.GType<VpnEditorPluginVT>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type VpnPluginInfoClass = typeof VpnPluginInfo;
    export type VpnPluginOldClass = typeof VpnPluginOld;
    export type VpnServicePluginClass = typeof VpnServicePlugin;
    export type WifiP2PPeerClass = typeof WifiP2PPeer;
    export type WimaxNspClass = typeof WimaxNsp;
    /**
     * The settings of one WireGuard peer.
     */
    class WireGuardPeer {
        static '$gtype': GObject.GType<WireGuardPeer>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(): WireGuardPeer;
        // Methods
        /**
         * Appends `allowed_ip` setting to the list. This does not check
         * for duplicates and always appends `allowed_ip` to the end of the
         * list. If `allowed_ip` is valid, it will be normalized and a modified
         * for might be appended. If `allowed_ip` is invalid, it will still be
         * appended, but later verification will fail.
         *
         * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
         *
         * @returns %TRUE if the value is a valid allowed-ips value, %FALSE otherwise.
         *   Depending on `accept_invalid,` also invalid values are added.
         * @param allowed_ip the allowed-ip entry to set.
         * @param accept_invalid if %TRUE, also invalid `allowed_ip` value
         *   will be appended. Otherwise, the function does nothing
         *   in face of invalid values and returns %FALSE.
         */
        append_allowed_ip(allowed_ip: string, accept_invalid: boolean): boolean;
        /**
         * Removes all allowed-ip entries.
         *
         * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
         */
        clear_allowed_ips(): void;
        cmp(b: WireGuardPeer | null, compare_flags: SettingCompareFlags | null): number;
        get_allowed_ip(idx: number, out_is_valid?: boolean | null): string | null;
        get_allowed_ips_len(): number;
        get_endpoint(): string;
        get_persistent_keepalive(): number;
        get_preshared_key(): string;
        get_preshared_key_flags(): SettingSecretFlags;
        get_public_key(): string;
        is_sealed(): boolean;
        is_valid(check_non_secrets: boolean, check_secrets: boolean): boolean;
        new_clone(with_secrets: boolean): WireGuardPeer;
        ref(): WireGuardPeer;
        /**
         * Removes the allowed-ip at the given `idx`. This shifts all
         * following entries one index down.
         *
         * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
         *
         * @returns %TRUE if `idx` was valid and the allowed-ip was removed.
         *   %FALSE otherwise, and the peer will not be changed.
         * @param idx the index from zero to (allowed-ips-len - 1) to
         *   retrieve. If the index is out of range, %FALSE is returned
         *   and nothing is done.
         */
        remove_allowed_ip(idx: number): boolean;
        /**
         * Seal the #NMWireGuardPeer instance. Afterwards, it is a bug
         * to call all functions that modify the instance (except ref/unref).
         * A sealed instance cannot be unsealed again, but you can create
         * an unsealed copy with nm_wireguard_peer_new_clone().
         */
        seal(): void;
        /**
         * Sets or clears the endpoint of `self`.
         *
         * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
         *
         * @returns %TRUE if the endpoint is %NULL or valid. For an
         *   invalid `endpoint` argument, %FALSE is returned. Depending
         *   on `allow_invalid,` the instance will be modified.
         * @param endpoint the socket address endpoint to set or %NULL.
         * @param allow_invalid if %TRUE, also invalid values are set.
         *   If %FALSE, the function does nothing for invalid `endpoint`
         *   arguments.
         */
        set_endpoint(endpoint: string, allow_invalid: boolean): boolean;
        /**
         * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
         *
         * @param persistent_keepalive the keep-alive value to set.
         */
        set_persistent_keepalive(persistent_keepalive: number): void;
        /**
         * Reset the preshared key. Note that if the preshared key is valid, it
         * will be normalized (which may or may not modify the set value).
         *
         * Note that the preshared-key is a secret and consequently has corresponding
         * preshared-key-flags property. This is so that secrets can be optional
         * and requested on demand from a secret-agent. Also, an invalid  preshared-key
         * may optionally cause nm_wireguard_peer_is_valid() to fail or it may
         * be accepted.
         *
         * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
         *
         * @returns %TRUE if the preshared-key is valid, otherwise %FALSE.
         *   %NULL is considered a valid value.
         *   If the key is invalid, it depends on `accept_invalid` whether the
         *   previous value was reset.
         * @param preshared_key the new preshared
         *   key or %NULL to clear the preshared key.
         * @param accept_invalid whether to allow setting the key to an invalid
         *   value. If %FALSE, `self` is unchanged if the key is invalid
         *   and if %FALSE is returned.
         */
        set_preshared_key(preshared_key: string | null, accept_invalid: boolean): boolean;
        /**
         * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
         *
         * @param preshared_key_flags the secret flags to set.
         */
        set_preshared_key_flags(preshared_key_flags: SettingSecretFlags | null): void;
        /**
         * Reset the public key. Note that if the public key is valid, it
         * will be normalized (which may or may not modify the set value).
         *
         * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
         *
         * @returns %TRUE if the key was valid or %NULL. Returns
         *   %FALSE for invalid keys. Depending on `accept_invalid`
         *   will an invalid key be set or not.
         * @param public_key the new public
         *   key or %NULL to clear the public key.
         * @param accept_invalid if %TRUE and `public_key` is not %NULL and
         *   invalid, then do not modify the instance.
         */
        set_public_key(public_key: string | null, accept_invalid: boolean): boolean;
        /**
         * Drop a reference to `self`. If the last reference is dropped,
         * the instance is freed and all associate data released.
         *
         * Since 1.42, ref-counting of #NMWireGuardPeer is thread-safe.
         */
        unref(): void;
    }
    namespace Connection {
        /**
         * Interface for implementing Connection.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * emitted when any change to the connection's settings occurs
             */
            vfunc_changed(): void;
            /**
             * emitted when the connection's secrets are cleared
             */
            vfunc_secrets_cleared(): void;
            /**
             * emitted when the connection's secrets are updated
             *
             * @param setting
             */
            vfunc_secrets_updated(setting: string): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ConnectionNamespace {
        $gtype: GObject.GType<Connection>;
        prototype: Connection;
    }
    interface Connection extends GObject.Object, Connection.Interface {
        // Methods
        /**
         * Adds a #NMSetting to the connection, replacing any previous #NMSetting of the
         * same name which has previously been added to the #NMConnection.  The
         * connection takes ownership of the #NMSetting object and does not increase
         * the setting object's reference count.
         *
         * @param setting the #NMSetting to add to the connection object
         */
        add_setting(setting: Setting): void;
        /**
         * Clears and frees any secrets that may be stored in the connection, to avoid
         * keeping secret data in memory when not needed.
         */
        clear_secrets(): void;
        /**
         * Clears and frees secrets determined by `func`.
         *
         * @param func function to be called to determine whether a
         *     specific secret should be cleared or not. If %NULL, all secrets are cleared.
         */
        clear_secrets_with_flags(func?: SettingClearSecretsWithFlagsFn | null): void;
        /**
         * Deletes all of `connection'`s settings.
         */
        clear_settings(): void;
        /**
         * Compares two #NMConnection objects for similarity, with comparison behavior
         * modified by a set of flags.  See nm_setting_compare() for a description of
         * each flag's behavior.
         *
         * @returns %TRUE if the comparison succeeds, %FALSE if it does not
         * @param b a second #NMConnection to compare with the first
         * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
         */
        compare(b: Connection, flags: SettingCompareFlags | null): boolean;
        /**
         * Print the connection (including secrets!) to stdout. For debugging
         * purposes ONLY, should NOT be used for serialization of the setting,
         * or machine-parsed in any way. The output format is not guaranteed to
         * be stable and may change at any time.
         */
        dump(): void;
        /**
         * Iterates over the properties of each #NMSetting object in the #NMConnection,
         * calling the supplied user function for each property.
         *
         * @param func user-supplied function called for each setting's property
         */
        for_each_setting_value(func: SettingValueIterFn): void;
        /**
         * A shortcut to return the type from the connection's #NMSettingConnection.
         *
         * @returns the type from the connection's 'connection' setting
         */
        get_connection_type(): string;
        /**
         * A shortcut to return the ID from the connection's #NMSettingConnection.
         *
         * @returns the ID from the connection's 'connection' setting
         */
        get_id(): string;
        /**
         * Returns the interface name as stored in NMSettingConnection:interface_name.
         * If the connection contains no NMSettingConnection, it will return %NULL.
         *
         * For hardware devices and software devices created outside of NetworkManager,
         * this name is used to match the device. for software devices created by
         * NetworkManager, this is the name of the created interface.
         *
         * @returns Name of the kernel interface or %NULL
         */
        get_interface_name(): string;
        /**
         * Returns the connection's D-Bus path.
         *
         * @returns the D-Bus path of the connection, previously set by a call to
         * nm_connection_set_path().
         */
        get_path(): string;
        /**
         * Gets the #NMSetting with the given #GType, if one has been previously added
         * to the #NMConnection.
         *
         * @returns the #NMSetting, or %NULL if no setting of that type was previously
         * added to the #NMConnection
         * @param setting_type the #GType of the setting object to return
         */
        get_setting(setting_type: GObject.GType): Setting;
        /**
         * A shortcut to return any #NMSetting8021x the connection might contain.
         *
         * @returns an #NMSetting8021x if the connection contains one, otherwise %NULL
         */
        'get_setting_802_1x'(): Setting8021x;
        /**
         * A shortcut to return any #NMSettingAdsl the connection might contain.
         *
         * @returns an #NMSettingAdsl if the connection contains one, otherwise %NULL
         */
        get_setting_adsl(): SettingAdsl;
        /**
         * A shortcut to return any #NMSettingBluetooth the connection might contain.
         *
         * @returns an #NMSettingBluetooth if the connection contains one, otherwise %NULL
         */
        get_setting_bluetooth(): SettingBluetooth;
        /**
         * A shortcut to return any #NMSettingBond the connection might contain.
         *
         * @returns an #NMSettingBond if the connection contains one, otherwise %NULL
         */
        get_setting_bond(): SettingBond;
        /**
         * A shortcut to return any #NMSettingBridge the connection might contain.
         *
         * @returns an #NMSettingBridge if the connection contains one, otherwise %NULL
         */
        get_setting_bridge(): SettingBridge;
        /**
         * A shortcut to return any #NMSettingBridgePort the connection might contain.
         *
         * @returns an #NMSettingBridgePort if the connection contains one, otherwise %NULL
         */
        get_setting_bridge_port(): SettingBridgePort;
        /**
         * Gets the #NMSetting with the given name, if one has been previously added
         * the #NMConnection.
         *
         * @returns the #NMSetting, or %NULL if no setting with that name was previously
         * added to the #NMConnection
         * @param name a setting name
         */
        get_setting_by_name(name: string): Setting;
        /**
         * A shortcut to return any #NMSettingCdma the connection might contain.
         *
         * @returns an #NMSettingCdma if the connection contains one, otherwise %NULL
         */
        get_setting_cdma(): SettingCdma;
        /**
         * A shortcut to return any #NMSettingConnection the connection might contain.
         *
         * @returns an #NMSettingConnection if the connection contains one, otherwise %NULL
         */
        get_setting_connection(): SettingConnection;
        /**
         * A shortcut to return any #NMSettingDcb the connection might contain.
         *
         * @returns an #NMSettingDcb if the connection contains one, otherwise NULL
         */
        get_setting_dcb(): SettingDcb;
        /**
         * A shortcut to return any #NMSettingDummy the connection might contain.
         *
         * @returns an #NMSettingDummy if the connection contains one, otherwise %NULL
         */
        get_setting_dummy(): SettingDummy;
        /**
         * A shortcut to return any #NMSettingGeneric the connection might contain.
         *
         * @returns an #NMSettingGeneric if the connection contains one, otherwise NULL
         */
        get_setting_generic(): SettingGeneric;
        /**
         * A shortcut to return any #NMSettingGsm the connection might contain.
         *
         * @returns an #NMSettingGsm if the connection contains one, otherwise %NULL
         */
        get_setting_gsm(): SettingGsm;
        /**
         * A shortcut to return any #NMSettingInfiniband the connection might contain.
         *
         * @returns an #NMSettingInfiniband if the connection contains one, otherwise %NULL
         */
        get_setting_infiniband(): SettingInfiniband;
        /**
         * A shortcut to return any #NMSettingIP4Config the connection might contain.
         *
         * Note that it returns the value as type #NMSettingIPConfig, since the vast
         * majority of IPv4-setting-related methods are on that type, not
         * #NMSettingIP4Config.
         *
         * @returns an #NMSettingIP4Config if the
         * connection contains one, otherwise %NULL
         */
        'get_setting_ip4_config'(): SettingIP4Config;
        /**
         * A shortcut to return any #NMSettingIP6Config the connection might contain.
         *
         * Note that it returns the value as type #NMSettingIPConfig, since the vast
         * majority of IPv6-setting-related methods are on that type, not
         * #NMSettingIP6Config.
         *
         * @returns an #NMSettingIP6Config if the
         * connection contains one, otherwise %NULL
         */
        'get_setting_ip6_config'(): SettingIP6Config;
        /**
         * A shortcut to return any #NMSettingIPTunnel the connection might contain.
         *
         * @returns an #NMSettingIPTunnel if the connection contains one, otherwise %NULL
         */
        get_setting_ip_tunnel(): SettingIPTunnel;
        /**
         * A shortcut to return any #NMSettingMacsec the connection might contain.
         *
         * @returns an #NMSettingMacsec if the connection contains one, otherwise %NULL
         */
        get_setting_macsec(): SettingMacsec;
        /**
         * A shortcut to return any #NMSettingMacvlan the connection might contain.
         *
         * @returns an #NMSettingMacvlan if the connection contains one, otherwise %NULL
         */
        get_setting_macvlan(): SettingMacvlan;
        /**
         * A shortcut to return any #NMSettingOlpcMesh the connection might contain.
         *
         * @returns an #NMSettingOlpcMesh if the connection contains one, otherwise %NULL
         */
        get_setting_olpc_mesh(): SettingOlpcMesh;
        /**
         * A shortcut to return any #NMSettingOvsBridge the connection might contain.
         *
         * @returns an #NMSettingOvsBridge if the connection contains one, otherwise %NULL
         */
        get_setting_ovs_bridge(): SettingOvsBridge;
        /**
         * A shortcut to return any #NMSettingOvsInterface the connection might contain.
         *
         * @returns an #NMSettingOvsInterface if the connection contains one, otherwise %NULL
         */
        get_setting_ovs_interface(): SettingOvsInterface;
        /**
         * A shortcut to return any #NMSettingOvsPatch the connection might contain.
         *
         * @returns an #NMSettingOvsPatch if the connection contains one, otherwise %NULL
         */
        get_setting_ovs_patch(): SettingOvsPatch;
        /**
         * A shortcut to return any #NMSettingOvsPort the connection might contain.
         *
         * @returns an #NMSettingOvsPort if the connection contains one, otherwise %NULL
         */
        get_setting_ovs_port(): SettingOvsPort;
        /**
         * A shortcut to return any #NMSettingPpp the connection might contain.
         *
         * @returns an #NMSettingPpp if the connection contains one, otherwise %NULL
         */
        get_setting_ppp(): SettingPpp;
        /**
         * A shortcut to return any #NMSettingPppoe the connection might contain.
         *
         * @returns an #NMSettingPppoe if the connection contains one, otherwise %NULL
         */
        get_setting_pppoe(): SettingPppoe;
        /**
         * A shortcut to return any #NMSettingProxy the connection might contain.
         *
         * @returns an #NMSettingProxy if the connection contains one, otherwise %NULL
         */
        get_setting_proxy(): SettingProxy;
        /**
         * A shortcut to return any #NMSettingSerial the connection might contain.
         *
         * @returns an #NMSettingSerial if the connection contains one, otherwise %NULL
         */
        get_setting_serial(): SettingSerial;
        /**
         * A shortcut to return any #NMSettingTCConfig the connection might contain.
         *
         * @returns an #NMSettingTCConfig if the connection contains one, otherwise %NULL
         */
        get_setting_tc_config(): SettingTCConfig;
        /**
         * A shortcut to return any #NMSettingTeam the connection might contain.
         *
         * @returns an #NMSettingTeam if the connection contains one, otherwise %NULL
         */
        get_setting_team(): SettingTeam;
        /**
         * A shortcut to return any #NMSettingTeamPort the connection might contain.
         *
         * @returns an #NMSettingTeamPort if the connection contains one, otherwise %NULL
         */
        get_setting_team_port(): SettingTeamPort;
        /**
         * A shortcut to return any #NMSettingTun the connection might contain.
         *
         * @returns an #NMSettingTun if the connection contains one, otherwise %NULL
         */
        get_setting_tun(): SettingTun;
        /**
         * A shortcut to return any #NMSettingVlan the connection might contain.
         *
         * @returns an #NMSettingVlan if the connection contains one, otherwise %NULL
         */
        get_setting_vlan(): SettingVlan;
        /**
         * A shortcut to return any #NMSettingVpn the connection might contain.
         *
         * @returns an #NMSettingVpn if the connection contains one, otherwise %NULL
         */
        get_setting_vpn(): SettingVpn;
        /**
         * A shortcut to return any #NMSettingVxlan the connection might contain.
         *
         * @returns an #NMSettingVxlan if the connection contains one, otherwise %NULL
         */
        get_setting_vxlan(): SettingVxlan;
        /**
         * A shortcut to return any #NMSettingWimax the connection might contain.
         *
         * @returns an #NMSettingWimax if the connection contains one, otherwise %NULL
         */
        get_setting_wimax(): SettingWimax;
        /**
         * A shortcut to return any #NMSettingWired the connection might contain.
         *
         * @returns an #NMSettingWired if the connection contains one, otherwise %NULL
         */
        get_setting_wired(): SettingWired;
        /**
         * A shortcut to return any #NMSettingWireless the connection might contain.
         *
         * @returns an #NMSettingWireless if the connection contains one, otherwise %NULL
         */
        get_setting_wireless(): SettingWireless;
        /**
         * A shortcut to return any #NMSettingWirelessSecurity the connection might contain.
         *
         * @returns an #NMSettingWirelessSecurity if the connection contains one, otherwise %NULL
         */
        get_setting_wireless_security(): SettingWirelessSecurity;
        /**
         * Retrieves the settings in `connection`.
         *
         * The returned array is %NULL-terminated.
         *
         * @returns a
         *   %NULL-terminated array containing every setting of `connection`.
         *   If the connection has no settings, %NULL is returned.
         */
        get_settings(): Setting[] | null;
        /**
         * A shortcut to return the UUID from the connection's #NMSettingConnection.
         *
         * @returns the UUID from the connection's 'connection' setting
         */
        get_uuid(): string;
        /**
         * Returns the name that nm_device_disambiguate_names() would
         * return for the virtual device that would be created for `connection`.
         * Eg, "VLAN (eth1.1)".
         *
         * @returns the name of `connection'`s device,
         *   or %NULL if `connection` is not a virtual connection type
         */
        get_virtual_device_description(): string;
        /**
         * A convenience function to check if the given `connection` is a particular
         * type (ie wired, Wi-Fi, ppp, etc). Checks the #NMSettingConnection:type
         * property of the connection and matches that against `type`.
         *
         * @returns %TRUE if the connection is of the given `type,` %FALSE if not
         * @param type a setting name to check the connection's type against (like
         * %NM_SETTING_WIRELESS_SETTING_NAME or %NM_SETTING_WIRED_SETTING_NAME)
         */
        is_type(type: string): boolean;
        /**
         * Checks if `connection` refers to a virtual device (and thus can potentially be
         * activated even if the device it refers to doesn't exist).
         *
         * @returns whether `connection` refers to a virtual device
         */
        is_virtual(): boolean;
        /**
         * Returns the name of the first setting object in the connection which would
         * need secrets to make a successful connection.  The returned hints are only
         * intended as a guide to what secrets may be required, because in some
         * circumstances, there is no way to conclusively determine exactly which
         * secrets are needed.
         *
         * @returns the setting name of the #NMSetting object which has
         *   invalid or missing secrets
         */
        need_secrets(): [string | null, string[] | null];
        /**
         * Does some basic normalization and fixup of well known inconsistencies
         * and deprecated fields. If the connection was modified in any way,
         * the output parameter `modified` is set %TRUE.
         *
         * Finally the connection will be verified and %TRUE returns if the connection
         * is valid. As this function only performs some specific normalization steps
         * it cannot repair all connections. If the connection has errors that
         * cannot be normalized, the connection will not be modified.
         *
         * @returns %TRUE if the connection is valid, %FALSE if it is not
         * @param parameters a #GHashTable with
         * normalization parameters to allow customization of the normalization by providing
         * specific arguments. Unknown arguments will be ignored and the default will be
         * used. The keys must be strings compared with g_str_equal() function.
         * The values are opaque and depend on the parameter name.
         */
        normalize(parameters: GLib.HashTable<string, any> | null): [boolean, boolean];
        /**
         * Removes the #NMSetting with the given #GType from the #NMConnection.  This
         * operation dereferences the #NMSetting object.
         *
         * @param setting_type the #GType of the setting object to remove
         */
        remove_setting(setting_type: GObject.GType): void;
        /**
         * Replaces `connection'`s settings with `new_settings` (which must be
         * syntactically valid, and describe a known type of connection, but does not
         * need to result in a connection that passes nm_connection_verify()).
         *
         * @returns %TRUE if connection was updated, %FALSE if `new_settings` could not
         *   be deserialized (in which case `connection` will be unchanged).
         * @param new_settings a #GVariant of type %NM_VARIANT_TYPE_CONNECTION, with the new settings
         */
        replace_settings(new_settings: GLib.Variant): boolean;
        /**
         * Deep-copies the settings of `new_connection` and replaces the settings of `connection`
         * with the copied settings.
         *
         * @param new_connection a #NMConnection to replace the settings of `connection` with
         */
        replace_settings_from_connection(new_connection: Connection): void;
        /**
         * Sets the D-Bus path of the connection.  This property is not serialized, and
         * is only for the reference of the caller.  Sets the #NMConnection:path
         * property.
         *
         * @param path the D-Bus path of the connection as given by the settings service
         * which provides the connection
         */
        set_path(path: string): void;
        /**
         * Converts the #NMConnection into a #GVariant of type
         * %NM_VARIANT_TYPE_CONNECTION describing the connection, suitable for
         * marshalling over D-Bus or otherwise serializing.
         *
         * @returns a new floating #GVariant describing the connection,
         * its settings, and each setting's properties.
         * @param flags serialization flags, e.g. %NM_CONNECTION_SERIALIZE_ALL
         */
        to_dbus(flags: ConnectionSerializationFlags | null): GLib.Variant;
        /**
         * Update the specified setting's secrets, given a dictionary of secrets
         * intended for that setting (deserialized from D-Bus for example).  Will also
         * extract the given setting's secrets hash if given a connection dictionary.
         * If `setting_name` is %NULL, expects a fully serialized #NMConnection as
         * returned by nm_connection_to_dbus() and will update all secrets from all
         * settings contained in `secrets`.
         *
         * @returns %TRUE if the secrets were successfully updated, %FALSE if the update
         * failed (tried to update secrets for a setting that doesn't exist, etc)
         * @param setting_name the setting object name to which the secrets apply
         * @param secrets a #GVariant of secrets, of type %NM_VARIANT_TYPE_CONNECTION
         *   or %NM_VARIANT_TYPE_SETTING
         */
        update_secrets(setting_name: string, secrets: GLib.Variant): boolean;
        /**
         * Validates the connection and all its settings.  Each setting's properties
         * have allowed values, and some values are dependent on other values.  For
         * example, if a Wi-Fi connection is security enabled, the #NMSettingWireless
         * setting object's 'security' property must contain the setting name of the
         * #NMSettingWirelessSecurity object, which must also be present in the
         * connection for the connection to be valid.  As another example, the
         * #NMSettingWired object's 'mac-address' property must be a validly formatted
         * MAC address.  The returned #GError contains information about which
         * setting and which property failed validation, and how it failed validation.
         *
         * @returns %TRUE if the connection is valid, %FALSE if it is not
         */
        verify(): boolean;
        /**
         * Verifies the secrets in the connection.
         *
         * @returns %TRUE if the secrets are valid, %FALSE if they are not
         */
        verify_secrets(): boolean;
    }
    export const Connection: ConnectionNamespace & (new () => Connection);
    namespace VpnEditor {
        /**
         * Interface for implementing VpnEditor.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * emitted when the value of a UI widget changes.  May trigger a
             *   validity check via `update_connection` to write values to the connection.
             */
            vfunc_changed(): void;
            /**
             * return the #GtkWidget for the VPN editor's UI
             */
            vfunc_get_widget<T = GObject.Object>(): T;
            /**
             * called to save the user-entered options to the connection
             *   object.  Should return %FALSE and set `error` if the current options are
             *   invalid.  `error` should contain enough information for the plugin to
             *   determine which UI widget is invalid at a later point in time.  For
             *   example, creating unique error codes for what error occurred and populating
             *   the message field of `error` with the name of the invalid property.
             *
             * @param connection
             */
            vfunc_update_connection(connection: Connection): boolean;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface VpnEditorNamespace {
        $gtype: GObject.GType<VpnEditor>;
        prototype: VpnEditor;
    }
    interface VpnEditor extends GObject.Object, VpnEditor.Interface {
        // Methods
        get_widget<T = GObject.Object>(): T;
        update_connection(connection: Connection): boolean;
    }
    export const VpnEditor: VpnEditorNamespace & (new () => VpnEditor);
    namespace VpnEditorPlugin {
        /**
         * Interface for implementing VpnEditorPlugin.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            /**
             * Export the given connection to the specified path.  Return
             *   %TRUE on success.  On error, return %FALSE and set `error` with additional
             *   error information.  Note that `error` can be %NULL, in which case no
             *   additional error information should be provided.
             *
             * @param path
             * @param connection
             */
            vfunc_export_to_file(path: string, connection: Connection): boolean;
            /**
             * returns a bitmask of capabilities.
             */
            vfunc_get_capabilities(): VpnEditorPluginCapability;
            /**
             * returns an #NMVpnEditor, pre-filled with values from `connection`
             *   if non-%NULL.
             *
             * @param connection the #NMConnection to be edited
             */
            vfunc_get_editor(connection: Connection): VpnEditor;
            /**
             * For a given connection, return a suggested file
             *   name.  Returned value will be %NULL or a suggested file name to be freed by
             *   the caller.
             *
             * @param connection
             */
            vfunc_get_suggested_filename(connection: Connection): string;
            /**
             * return a virtual function table to implement further functions in
             *   the plugin, without requiring to update libnm. Used by nm_vpn_editor_plugin_get_vt().
             *
             * @param out_vt_size
             */
            vfunc_get_vt(out_vt_size: number): VpnEditorPluginVT;
            /**
             * A callback to be called when the plugin info is set.
             *
             * @param plugin_info
             */
            vfunc_notify_plugin_info_set(plugin_info: VpnPluginInfo): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * Longer description of the VPN plugin.
             */
            description: string;
            /**
             * Short display name of the VPN plugin.
             */
            name: string;
            /**
             * D-Bus service name of the plugin's VPN service.
             */
            service: string;
        }
    }
    export interface VpnEditorPluginNamespace {
        $gtype: GObject.GType<VpnEditorPlugin>;
        prototype: VpnEditorPlugin;
        /**
         * Load the shared library `plugin_name` and create a new
         * #NMVpnEditorPlugin instance via the #NMVpnEditorPluginFactory
         * function.
         *
         * This is similar to nm_vpn_editor_plugin_load_from_file(), but
         * it does no validation of the plugin name, instead passes it directly
         * to dlopen(). If you have the full path to a plugin file,
         * nm_vpn_editor_plugin_load_from_file() is preferred.
         *
         * @param plugin_name The name of the shared library to load.
         *  This path will be directly passed to dlopen() without
         *  further checks.
         * @param check_service if not-null, check that the loaded plugin advertises
         *  the given service.
         */
        load(plugin_name: string, check_service: string): VpnEditorPlugin;
        /**
         * Load the shared library `plugin_name` and create a new
         * #NMVpnEditorPlugin instance via the #NMVpnEditorPluginFactory
         * function.
         *
         * If `plugin_name` is not an absolute path name, it assumes the file
         * is in the plugin directory of NetworkManager. In any case, the call
         * will do certain checks on the file before passing it to dlopen.
         * A consequence for that is, that you cannot omit the ".so" suffix
         * as you could for nm_vpn_editor_plugin_load().
         *
         * @param plugin_name The path or name of the shared library to load.
         *  The path must either be an absolute filename to an existing file.
         *  Alternatively, it can be the name (without path) of a library in the
         *  plugin directory of NetworkManager.
         * @param check_service if not-null, check that the loaded plugin advertises
         *  the given service.
         * @param check_owner if non-negative, check whether the file is owned
         *  by UID `check_owner` or by root. In this case also check that
         *  the file is not writable by anybody else.
         * @param check_file optional callback to validate the file prior to
         *   loading the shared library.
         */
        load_from_file(
            plugin_name: string,
            check_service: string,
            check_owner: number,
            check_file: UtilsCheckFilePredicate,
        ): VpnEditorPlugin;
    }
    interface VpnEditorPlugin extends GObject.Object, VpnEditorPlugin.Interface {
        // Properties
        /**
         * Longer description of the VPN plugin.
         */
        description: string;
        /**
         * Short display name of the VPN plugin.
         */
        name: string;
        /**
         * D-Bus service name of the plugin's VPN service.
         */
        service: string;
        // Methods
        'export'(path: string, connection: Connection): boolean;
        get_capabilities(): VpnEditorPluginCapability;
        get_editor(connection: Connection): VpnEditor;
        get_plugin_info(): VpnPluginInfo;
        get_suggested_filename(connection: Connection): string;
        /**
         * Returns an opaque VT function table for the plugin to extend
         * functionality. The actual meaning of NMVpnEditorPluginVT is not
         * defined in public API of libnm, instead it must be agreed by
         * both the plugin and the caller. See the header-only file
         * 'nm-vpn-editor-plugin-call.h' which defines the meaning.
         *
         * @returns the actual size of the `plugin'`s virtual function table.
         * @param vt_size the size of the buffer. Can be 0 to only query the
         *   size of plugin's VT.
         */
        get_vt(vt_size: number): [number, VpnEditorPluginVT];
        'import'(path: string): Connection;
        /**
         * Set or clear the plugin-info instance.
         * This takes a weak reference on `plugin_info,` to avoid circular
         * reference as the plugin-info might also reference the editor-plugin.
         *
         * @param plugin_info a #NMVpnPluginInfo instance or %NULL
         */
        set_plugin_info(plugin_info?: VpnPluginInfo | null): void;
    }
    export const VpnEditorPlugin: VpnEditorPluginNamespace & (new () => VpnEditorPlugin);
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
export default NM;
