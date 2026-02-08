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
import type classes from './giounix-2.0-classes.d.ts';
export { classes as GioUnixClasses };
export namespace GioUnix {
    /**
     * GioUnix-2.0
     */
    /**
     * Extension point for default handler to URI association. See
     * [Extending GIO](overview.html#extending-gio).
     */
    const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string;
    /**
     * Gets the default application for launching applications
     * using this URI scheme for a particular [iface`Gio`.DesktopAppInfoLookup]
     * implementation.
     *
     * The [iface`Gio`.DesktopAppInfoLookup] interface and this function is used
     * to implement [func`Gio`.AppInfo.get_default_for_uri_scheme] backends
     * in a GIO module. There is no reason for applications to use it
     * directly. Applications should use
     * [func`Gio`.AppInfo.get_default_for_uri_scheme].
     *
     * @returns [iface`Gio`.AppInfo] for given
     *   `uri_scheme` or `NULL` on error.
     * @param lookup a [iface`Gio`.DesktopAppInfoLookup]
     * @param uri_scheme a string containing a URI scheme.
     */
    function desktop_app_info_lookup_get_default_for_uri_scheme(
        lookup: Gio.DesktopAppInfoLookup,
        uri_scheme: string,
    ): Gio.AppInfo | null;
    /**
     * Gets the underlying file descriptor.
     *
     * @returns The file descriptor
     * @param fd_based a #GFileDescriptorBased.
     */
    function file_descriptor_based_get_fd(fd_based: Gio.FileDescriptorBased): number;
    /**
     * Determines if `mount_path` is considered an implementation of the
     * OS.
     *
     * This is primarily used for hiding mountable and mounted volumes
     * that only are used in the OS and has little to no relevance to the
     * casual user.
     *
     * @returns true if `mount_path` is considered an implementation detail
     *    of the OS; false otherwise
     * @param mount_path a mount path, e.g. `/media/disk` or `/usr`
     */
    function is_mount_path_system_internal(mount_path: string): boolean;
    /**
     * Determines if `device_path` is considered a block device path which is only
     * used in implementation of the OS.
     *
     * This is primarily used for hiding mounted volumes that are intended as APIs
     * for programs to read, and system administrators at a shell; rather than
     * something that should, for example, appear in a GUI. For example, the Linux
     * `/proc` filesystem.
     *
     * The list of device paths considered ‘system’ ones may change over time.
     *
     * @returns true if `device_path` is considered an implementation detail of
     *    the OS; false otherwise
     * @param device_path a device path, e.g. `/dev/loop0` or `nfsd`
     */
    function is_system_device_path(device_path: string): boolean;
    /**
     * Determines if `fs_type` is considered a type of file system which is only
     * used in implementation of the OS.
     *
     * This is primarily used for hiding mounted volumes that are intended as APIs
     * for programs to read, and system administrators at a shell; rather than
     * something that should, for example, appear in a GUI. For example, the Linux
     * `/proc` filesystem.
     *
     * The list of file system types considered ‘system’ ones may change over time.
     *
     * @returns true if `fs_type` is considered an implementation detail of the OS;
     *    false otherwise
     * @param fs_type a file system type, e.g. `procfs` or `tmpfs`
     */
    function is_system_fs_type(fs_type: string): boolean;
    /**
     * Gets a [struct`GioUnix`.MountEntry] for a given mount path.
     *
     * If `time_read` is set, it will be filled with a Unix timestamp for checking
     * if the mounts have changed since with
     * [func`GioUnix`.mount_entries_changed_since].
     *
     * If more mounts have the same mount path, the last matching mount
     * is returned.
     *
     * This will return `NULL` if there is no mount point at `mount_path`.
     *
     * @returns a [struct`GioUnix`.MountEntry]
     * @param mount_path path for a possible Unix mount
     */
    function mount_at(mount_path: string): [Gio.UnixMountEntry | null, number];
    /**
     * Compares two Unix mounts.
     *
     * @returns `1`, `0` or `-1` if `mount1` is greater than, equal to,
     *    or less than `mount2`, respectively
     * @param _mount1 first [struct`GioUnix`.MountEntry] to compare
     * @param _mount2 second [struct`GioUnix`.MountEntry] to compare
     */
    function mount_compare(_mount1: Gio.UnixMountEntry, _mount2: Gio.UnixMountEntry): number;
    /**
     * Makes a copy of `mount_entry`.
     *
     * @returns a new [struct`GioUnix`.MountEntry]
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_copy(mount_entry: Gio.UnixMountEntry): Gio.UnixMountEntry;
    /**
     * Checks if the Unix mounts have changed since a given Unix time.
     *
     * This can only work reliably if a [class`GioUnix`.MountMonitor] is running in
     * the process, otherwise changes in the mount entries file (such as
     * `/proc/self/mountinfo` on Linux) cannot be detected and, as a result, this
     * function has to conservatively always return `TRUE`.
     *
     * It is more efficient to use [signal`GioUnix`.MountMonitor::mounts-changed] to
     * be signalled of changes to the mount entries, rather than polling using this
     * function. This function is more appropriate for infrequently determining
     * cache validity.
     *
     * @returns true if the mounts have changed since `time;` false otherwise
     * Since 2.84
     * @param time a timestamp
     */
    function mount_entries_changed_since(time: number): boolean;
    /**
     * Gets a list of [struct`GioUnix`.MountEntry] instances representing the Unix
     * mounts.
     *
     * If `time_read` is set, it will be filled with the mount timestamp, allowing
     * for checking if the mounts have changed with
     * [func`GioUnix`.mount_entries_changed_since].
     *
     * @returns a list of the
     *    Unix mounts
     */
    function mount_entries_get(): [Gio.UnixMountEntry[], number];
    /**
     * Gets an array of [struct`Gio`.UnixMountEntry]s containing the Unix mounts
     * listed in `table_path`.
     *
     * This is a generalized version of [func`GioUnix`.mount_entries_get], mainly
     * intended for internal testing use. Note that [func`GioUnix`.mount_entries_get]
     * may parse multiple hierarchical table files, so this function is not a direct
     * superset of its functionality.
     *
     * If there is an error reading or parsing the file, `NULL` will be returned
     * and both out parameters will be set to `0`.
     *
     * @returns mount
     *   entries, or `NULL` if there was an error loading them
     * @param table_path path to the mounts table file (for example `/proc/self/mountinfo`)
     */
    function mount_entries_get_from_file(table_path: string): [Gio.UnixMountEntry[] | null, number];
    /**
     * Gets a [struct`GioUnix`.MountEntry] for a given mount path.
     *
     * If `time_read` is set, it will be filled with a Unix timestamp for checking
     * if the mounts have changed since with
     * [func`GioUnix`.mount_entries_changed_since].
     *
     * If more mounts have the same mount path, the last matching mount
     * is returned.
     *
     * This will return `NULL` if there is no mount point at `mount_path`.
     *
     * @returns a [struct`GioUnix`.MountEntry]
     * @param mount_path path for a possible Unix mount
     */
    function mount_entry_at(mount_path: string): [Gio.UnixMountEntry | null, number];
    /**
     * Compares two Unix mounts.
     *
     * @returns `1`, `0` or `-1` if `mount1` is greater than, equal to,
     *    or less than `mount2`, respectively
     * @param _mount1 first [struct`GioUnix`.MountEntry] to compare
     * @param _mount2 second [struct`GioUnix`.MountEntry] to compare
     */
    function mount_entry_compare(_mount1: Gio.UnixMountEntry, _mount2: Gio.UnixMountEntry): number;
    /**
     * Makes a copy of `mount_entry`.
     *
     * @returns a new [struct`GioUnix`.MountEntry]
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_copy(mount_entry: Gio.UnixMountEntry): Gio.UnixMountEntry;
    /**
     * Gets a [struct`GioUnix`.MountEntry] for a given file path.
     *
     * If `time_read` is set, it will be filled with a Unix timestamp for checking
     * if the mounts have changed since with
     * [func`GioUnix`.mount_entries_changed_since].
     *
     * If more mounts have the same mount path, the last matching mount
     * is returned.
     *
     * This will return `NULL` if looking up the mount entry fails, if
     * `file_path` doesn’t exist or there is an I/O error.
     *
     * @returns a [struct`GioUnix`.MountEntry]
     * @param file_path file path on some Unix mount
     */
    function mount_entry_for(file_path: string): [Gio.UnixMountEntry | null, number];
    /**
     * Frees a Unix mount.
     *
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_free(mount_entry: Gio.UnixMountEntry): void;
    /**
     * Gets the device path for a Unix mount.
     *
     * @returns a string containing the device path
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_get_device_path(mount_entry: Gio.UnixMountEntry): string;
    /**
     * Gets the filesystem type for the Unix mount.
     *
     * @returns a string containing the file system type
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_get_fs_type(mount_entry: Gio.UnixMountEntry): string;
    /**
     * Gets the mount path for a Unix mount.
     *
     * @returns the mount path for `mount_entry`
     * @param mount_entry a [struct`GioUnix`.MountEntry] to get the mount path for
     */
    function mount_entry_get_mount_path(mount_entry: Gio.UnixMountEntry): string;
    /**
     * Gets a comma separated list of mount options for the Unix mount.
     *
     * For example: `rw,relatime,seclabel,data=ordered`.
     *
     * This is similar to [func`GioUnix`.MountPoint.get_options], but it takes
     * a [struct`GioUnix`.MountEntry] as an argument.
     *
     * @returns a string containing the options, or `NULL` if not
     *    available.
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_get_options(mount_entry: Gio.UnixMountEntry): string | null;
    /**
     * Gets the root of the mount within the filesystem. This is useful e.g. for
     * mounts created by bind operation, or btrfs subvolumes.
     *
     * For example, the root path is equal to `/` for a mount created by
     * `mount /dev/sda1 /mnt/foo` and `/bar` for
     * `mount --bind /mnt/foo/bar /mnt/bar`.
     *
     * @returns a string containing the root, or `NULL` if not supported
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_get_root_path(mount_entry: Gio.UnixMountEntry): string | null;
    /**
     * Guesses whether a Unix mount entry can be ejected.
     *
     * @returns true if `mount_entry` is deemed to be ejectable; false otherwise
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_guess_can_eject(mount_entry: Gio.UnixMountEntry): boolean;
    /**
     * Guesses the icon of a Unix mount entry.
     *
     * @returns a [iface`Gio`.Icon]
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_guess_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
    /**
     * Guesses the name of a Unix mount entry.
     *
     * The result is a translated string.
     *
     * @returns a newly allocated translated string
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_guess_name(mount_entry: Gio.UnixMountEntry): string;
    /**
     * Guesses whether a Unix mount entry should be displayed in the UI.
     *
     * @returns true if `mount_entry` is deemed to be displayable; false otherwise
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_guess_should_display(mount_entry: Gio.UnixMountEntry): boolean;
    /**
     * Guesses the symbolic icon of a Unix mount entry.
     *
     * @returns a [iface`Gio`.Icon]
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_guess_symbolic_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
    /**
     * Checks if a Unix mount is mounted read only.
     *
     * @returns true if `mount_entry` is read only; false otherwise
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_is_readonly(mount_entry: Gio.UnixMountEntry): boolean;
    /**
     * Checks if a Unix mount is a system mount.
     *
     * This is the Boolean OR of
     * [func`GioUnix`.is_system_fs_type], [func`GioUnix`.is_system_device_path] and
     * [func`GioUnix`.is_mount_path_system_internal] on `mount_entry’`s properties.
     *
     * The definition of what a ‘system’ mount entry is may change over time as new
     * file system types and device paths are ignored.
     *
     * @returns true if the Unix mount is for a system path; false otherwise
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_entry_is_system_internal(mount_entry: Gio.UnixMountEntry): boolean;
    /**
     * Gets a [struct`GioUnix`.MountEntry] for a given file path.
     *
     * If `time_read` is set, it will be filled with a Unix timestamp for checking
     * if the mounts have changed since with
     * [func`GioUnix`.mount_entries_changed_since].
     *
     * If more mounts have the same mount path, the last matching mount
     * is returned.
     *
     * This will return `NULL` if looking up the mount entry fails, if
     * `file_path` doesn’t exist or there is an I/O error.
     *
     * @returns a [struct`GioUnix`.MountEntry]
     * @param file_path file path on some Unix mount
     */
    function mount_for(file_path: string): [Gio.UnixMountEntry | null, number];
    /**
     * Frees a Unix mount.
     *
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_free(mount_entry: Gio.UnixMountEntry): void;
    /**
     * Gets the device path for a Unix mount.
     *
     * @returns a string containing the device path
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_get_device_path(mount_entry: Gio.UnixMountEntry): string;
    /**
     * Gets the filesystem type for the Unix mount.
     *
     * @returns a string containing the file system type
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_get_fs_type(mount_entry: Gio.UnixMountEntry): string;
    /**
     * Gets the mount path for a Unix mount.
     *
     * @returns the mount path for `mount_entry`
     * @param mount_entry a [struct`GioUnix`.MountEntry] to get the mount path for
     */
    function mount_get_mount_path(mount_entry: Gio.UnixMountEntry): string;
    /**
     * Gets a comma separated list of mount options for the Unix mount.
     *
     * For example: `rw,relatime,seclabel,data=ordered`.
     *
     * This is similar to [func`GioUnix`.MountPoint.get_options], but it takes
     * a [struct`GioUnix`.MountEntry] as an argument.
     *
     * @returns a string containing the options, or `NULL` if not
     *    available.
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_get_options(mount_entry: Gio.UnixMountEntry): string | null;
    /**
     * Gets the root of the mount within the filesystem. This is useful e.g. for
     * mounts created by bind operation, or btrfs subvolumes.
     *
     * For example, the root path is equal to `/` for a mount created by
     * `mount /dev/sda1 /mnt/foo` and `/bar` for
     * `mount --bind /mnt/foo/bar /mnt/bar`.
     *
     * @returns a string containing the root, or `NULL` if not supported
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_get_root_path(mount_entry: Gio.UnixMountEntry): string | null;
    /**
     * Guesses whether a Unix mount entry can be ejected.
     *
     * @returns true if `mount_entry` is deemed to be ejectable; false otherwise
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_guess_can_eject(mount_entry: Gio.UnixMountEntry): boolean;
    /**
     * Guesses the icon of a Unix mount entry.
     *
     * @returns a [iface`Gio`.Icon]
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_guess_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
    /**
     * Guesses the name of a Unix mount entry.
     *
     * The result is a translated string.
     *
     * @returns a newly allocated translated string
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_guess_name(mount_entry: Gio.UnixMountEntry): string;
    /**
     * Guesses whether a Unix mount entry should be displayed in the UI.
     *
     * @returns true if `mount_entry` is deemed to be displayable; false otherwise
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_guess_should_display(mount_entry: Gio.UnixMountEntry): boolean;
    /**
     * Guesses the symbolic icon of a Unix mount entry.
     *
     * @returns a [iface`Gio`.Icon]
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_guess_symbolic_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
    /**
     * Checks if a Unix mount is mounted read only.
     *
     * @returns true if `mount_entry` is read only; false otherwise
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_is_readonly(mount_entry: Gio.UnixMountEntry): boolean;
    /**
     * Checks if a Unix mount is a system mount.
     *
     * This is the Boolean OR of
     * [func`GioUnix`.is_system_fs_type], [func`GioUnix`.is_system_device_path] and
     * [func`GioUnix`.is_mount_path_system_internal] on `mount_entry’`s properties.
     *
     * The definition of what a ‘system’ mount entry is may change over time as new
     * file system types and device paths are ignored.
     *
     * @returns true if the Unix mount is for a system path; false otherwise
     * @param mount_entry a [struct`GioUnix`.MountEntry]
     */
    function mount_is_system_internal(mount_entry: Gio.UnixMountEntry): boolean;
    /**
     * Gets a [struct`GioUnix`.MountPoint] for a given mount path.
     *
     * If `time_read` is set, it will be filled with a Unix timestamp for checking if
     * the mount points have changed since with
     * [func`GioUnix`.mount_points_changed_since].
     *
     * If more mount points have the same mount path, the last matching mount point
     * is returned.
     *
     * @returns a [struct`GioUnix`.MountPoint], or `NULL`
     *    if no match is found
     * @param mount_path path for a possible Unix mount point
     */
    function mount_point_at(mount_path: string): [Gio.UnixMountPoint | null, number];
    /**
     * Compares two Unix mount points.
     *
     * @returns `1`, `0` or `-1` if `mount1` is greater than, equal to,
     *    or less than `mount2`, respectively
     * @param _mount1 a [struct`GioUnix`.MountPoint]
     * @param _mount2 a [struct`GioUnix`.MountPoint]
     */
    function mount_point_compare(_mount1: Gio.UnixMountPoint, _mount2: Gio.UnixMountPoint): number;
    /**
     * Makes a copy of `mount_point`.
     *
     * @returns a new [struct`GioUnix`.MountPoint]
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_copy(mount_point: Gio.UnixMountPoint): Gio.UnixMountPoint;
    /**
     * Frees a Unix mount point.
     *
     * @param mount_point Unix mount point to free.
     */
    function mount_point_free(mount_point: Gio.UnixMountPoint): void;
    /**
     * Gets the device path for a Unix mount point.
     *
     * @returns a string containing the device path
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_get_device_path(mount_point: Gio.UnixMountPoint): string;
    /**
     * Gets the file system type for the mount point.
     *
     * @returns a string containing the file system type
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_get_fs_type(mount_point: Gio.UnixMountPoint): string;
    /**
     * Gets the mount path for a Unix mount point.
     *
     * @returns a string containing the mount path
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_get_mount_path(mount_point: Gio.UnixMountPoint): string;
    /**
     * Gets the options for the mount point.
     *
     * @returns a string containing the options
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_get_options(mount_point: Gio.UnixMountPoint): string | null;
    /**
     * Guesses whether a Unix mount point can be ejected.
     *
     * @returns true if `mount_point` is deemed to be ejectable; false otherwise
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_guess_can_eject(mount_point: Gio.UnixMountPoint): boolean;
    /**
     * Guesses the icon of a Unix mount point.
     *
     * @returns a [iface`Gio`.Icon]
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_guess_icon(mount_point: Gio.UnixMountPoint): Gio.Icon;
    /**
     * Guesses the name of a Unix mount point.
     *
     * The result is a translated string.
     *
     * @returns a newly allocated translated string
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_guess_name(mount_point: Gio.UnixMountPoint): string;
    /**
     * Guesses the symbolic icon of a Unix mount point.
     *
     * @returns a [iface`Gio`.Icon]
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_guess_symbolic_icon(mount_point: Gio.UnixMountPoint): Gio.Icon;
    /**
     * Checks if a Unix mount point is a loopback device.
     *
     * @returns true if the mount point is a loopback device; false otherwise
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_is_loopback(mount_point: Gio.UnixMountPoint): boolean;
    /**
     * Checks if a Unix mount point is read only.
     *
     * @returns true if a mount point is read only; false otherwise
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_is_readonly(mount_point: Gio.UnixMountPoint): boolean;
    /**
     * Checks if a Unix mount point is mountable by the user.
     *
     * @returns true if the mount point is user mountable; false otherwise
     * @param mount_point a [struct`GioUnix`.MountPoint]
     */
    function mount_point_is_user_mountable(mount_point: Gio.UnixMountPoint): boolean;
    /**
     * Checks if the Unix mount points have changed since a given Unix time.
     *
     * Unlike [func`GioUnix`.mount_entries_changed_since], this function can work
     * reliably without a [class`GioUnix`.MountMonitor] running, as it accesses the
     * static mount point information (such as `/etc/fstab` on Linux), which has a
     * valid modification time.
     *
     * It is more efficient to use [signal`GioUnix`.MountMonitor::mountpoints-changed]
     * to be signalled of changes to the mount points, rather than polling using
     * this function. This function is more appropriate for infrequently determining
     * cache validity.
     *
     * @returns true if the mount points have changed since `time;` false otherwise
     * @param time a timestamp
     */
    function mount_points_changed_since(time: number): boolean;
    /**
     * Gets a list of [struct`GioUnix`.MountPoint] instances representing the Unix
     * mount points.
     *
     * If `time_read` is set, it will be filled with the mount timestamp, allowing
     * for checking if the mounts have changed with
     * [func`GioUnix`.mount_points_changed_since].
     *
     * @returns a list of the Unix
     *    mount points
     */
    function mount_points_get(): [Gio.UnixMountPoint[], number];
    /**
     * Gets an array of [struct`Gio`.UnixMountPoint]s containing the Unix mount
     * points listed in `table_path`.
     *
     * This is a generalized version of [func`GioUnix`.mount_points_get], mainly
     * intended for internal testing use. Note that [func`GioUnix`.mount_points_get]
     * may parse multiple hierarchical table files, so this function is not a direct
     * superset of its functionality.
     *
     * If there is an error reading or parsing the file, `NULL` will be returned
     * and both out parameters will be set to `0`.
     *
     * @returns mount
     *   points, or `NULL` if there was an error loading them
     * @param table_path path to the mount points table file (for example `/etc/fstab`)
     */
    function mount_points_get_from_file(table_path: string): [Gio.UnixMountPoint[] | null, number];
    /**
     * Checks if the Unix mounts have changed since a given Unix time.
     *
     * @returns true if the mounts have changed since `time;` false otherwise
     * @param time a timestamp
     */
    function mounts_changed_since(time: number): boolean;
    /**
     * Gets a list of [struct`GioUnix`.MountEntry] instances representing the Unix
     * mounts.
     *
     * If `time_read` is set, it will be filled with the mount timestamp, allowing
     * for checking if the mounts have changed with
     * [func`GioUnix`.mount_entries_changed_since].
     *
     * @returns a list of the
     *    Unix mounts
     */
    function mounts_get(): [Gio.UnixMountEntry[], number];
    /**
     * Gets an array of [struct`Gio`.UnixMountEntry]s containing the Unix mounts
     * listed in `table_path`.
     *
     * This is a generalized version of [func`GioUnix`.mount_entries_get], mainly
     * intended for internal testing use. Note that [func`GioUnix`.mount_entries_get]
     * may parse multiple hierarchical table files, so this function is not a direct
     * superset of its functionality.
     *
     * If there is an error reading or parsing the file, `NULL` will be returned
     * and both out parameters will be set to `0`.
     *
     * @returns mount
     *   entries, or `NULL` if there was an error loading them
     * @param table_path path to the mounts table file (for example `/proc/self/mountinfo`)
     */
    function mounts_get_from_file(table_path: string): [Gio.UnixMountEntry[] | null, number];
    interface DesktopAppLaunchCallback {
        (appinfo: Gio.DesktopAppInfo, pid: GLib.Pid): void;
    }
    namespace DesktopAppInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::filename'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AppInfo.ConstructorProps {
            /**
             * The origin filename of this [class`Gio`.DesktopAppInfo]
             */
            filename: string;
        }
    }
    type DesktopAppInfo = (typeof classes.DesktopAppInfo)['prototype'];
    const DesktopAppInfo: typeof classes.DesktopAppInfo &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<GioUnix.DesktopAppInfo.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DesktopAppInfo.SignalSignatures> & classes.DesktopAppInfo);
    namespace FDMessage {
        // Signal signatures
        interface SignalSignatures extends Gio.SocketControlMessage.SignalSignatures {
            'notify::fd-list'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Gio.SocketControlMessage.ConstructorProps {
            /**
             * The [class`Gio`.UnixFDList] object to send with the message.
             */
            fd_list: Gio.UnixFDList;
            /**
             * The [class`Gio`.UnixFDList] object to send with the message.
             */
            fdList: Gio.UnixFDList;
        }
    }
    type FDMessage = (typeof classes.FDMessage)['prototype'];
    const FDMessage: typeof classes.FDMessage &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<GioUnix.FDMessage.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FDMessage.SignalSignatures> & classes.FDMessage);
    namespace InputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.InputStream.SignalSignatures {
            'notify::close-fd'(pspec: GObject.ParamSpec): void;
            'notify::fd'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Gio.InputStream.ConstructorProps,
                Gio.PollableInputStream.ConstructorProps,
                FileDescriptorBased.ConstructorProps {
            /**
             * Whether to close the file descriptor when the stream is closed.
             */
            close_fd: boolean;
            /**
             * Whether to close the file descriptor when the stream is closed.
             */
            closeFd: boolean;
            /**
             * The file descriptor that the stream reads from.
             */
            fd: number;
        }
    }
    type InputStream = (typeof classes.InputStream)['prototype'];
    const InputStream: typeof classes.InputStream &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<GioUnix.InputStream.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, InputStream.SignalSignatures> & classes.InputStream);
    namespace MountMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'mountpoints-changed'(): void;
            'mounts-changed'(): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type MountMonitor = (typeof classes.MountMonitor)['prototype'];
    const MountMonitor: typeof classes.MountMonitor &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<GioUnix.MountMonitor.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MountMonitor.SignalSignatures> & classes.MountMonitor);
    namespace OutputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.OutputStream.SignalSignatures {
            'notify::close-fd'(pspec: GObject.ParamSpec): void;
            'notify::fd'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Gio.OutputStream.ConstructorProps,
                Gio.PollableOutputStream.ConstructorProps,
                FileDescriptorBased.ConstructorProps {
            /**
             * Whether to close the file descriptor when the stream is closed.
             */
            close_fd: boolean;
            /**
             * Whether to close the file descriptor when the stream is closed.
             */
            closeFd: boolean;
            /**
             * The file descriptor that the stream writes to.
             */
            fd: number;
        }
    }
    type OutputStream = (typeof classes.OutputStream)['prototype'];
    const OutputStream: typeof classes.OutputStream &
        (new <Opts extends GObject.MetaInfo = {}>(
            properties?: Partial<GioUnix.OutputStream.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, OutputStream.SignalSignatures> & classes.OutputStream);
    export type DesktopAppInfoClass = typeof DesktopAppInfo;
    export type DesktopAppInfoLookupIface = typeof DesktopAppInfoLookup;
    export type FDMessageClass = typeof FDMessage;
    abstract class FDMessagePrivate {
        static '$gtype': GObject.GType<FDMessagePrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type FileDescriptorBasedIface = typeof FileDescriptorBased;
    export type InputStreamClass = typeof InputStream;
    abstract class InputStreamPrivate {
        static '$gtype': GObject.GType<InputStreamPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * Defines a Unix mount entry (e.g. `/media/cdrom`).
     * This corresponds roughly to a mtab entry.
     */
    abstract class MountEntry {
        static '$gtype': GObject.GType<MountEntry>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Gets a [struct`GioUnix`.MountEntry] for a given mount path.
         *
         * If `time_read` is set, it will be filled with a Unix timestamp for checking
         * if the mounts have changed since with
         * [func`GioUnix`.mount_entries_changed_since].
         *
         * If more mounts have the same mount path, the last matching mount
         * is returned.
         *
         * This will return `NULL` if there is no mount point at `mount_path`.
         *
         * @param mount_path path for a possible Unix mount
         */
        static at(mount_path: string): [Gio.UnixMountEntry | null, number];
        /**
         * Compares two Unix mounts.
         *
         * @param _mount1 first [struct`GioUnix`.MountEntry] to compare
         * @param _mount2 second [struct`GioUnix`.MountEntry] to compare
         */
        static compare(_mount1: Gio.UnixMountEntry, _mount2: Gio.UnixMountEntry): number;
        /**
         * Makes a copy of `mount_entry`.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static copy(mount_entry: Gio.UnixMountEntry): Gio.UnixMountEntry;
        /**
         * Gets a [struct`GioUnix`.MountEntry] for a given file path.
         *
         * If `time_read` is set, it will be filled with a Unix timestamp for checking
         * if the mounts have changed since with
         * [func`GioUnix`.mount_entries_changed_since].
         *
         * If more mounts have the same mount path, the last matching mount
         * is returned.
         *
         * This will return `NULL` if looking up the mount entry fails, if
         * `file_path` doesn’t exist or there is an I/O error.
         *
         * @param file_path file path on some Unix mount
         */
        static for(file_path: string): [Gio.UnixMountEntry | null, number];
        /**
         * Frees a Unix mount.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static free(mount_entry: Gio.UnixMountEntry): void;
        /**
         * Gets the device path for a Unix mount.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static get_device_path(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Gets the filesystem type for the Unix mount.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static get_fs_type(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Gets the mount path for a Unix mount.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry] to get the mount path for
         */
        static get_mount_path(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Gets a comma separated list of mount options for the Unix mount.
         *
         * For example: `rw,relatime,seclabel,data=ordered`.
         *
         * This is similar to [func`GioUnix`.MountPoint.get_options], but it takes
         * a [struct`GioUnix`.MountEntry] as an argument.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static get_options(mount_entry: Gio.UnixMountEntry): string | null;
        /**
         * Gets the root of the mount within the filesystem. This is useful e.g. for
         * mounts created by bind operation, or btrfs subvolumes.
         *
         * For example, the root path is equal to `/` for a mount created by
         * `mount /dev/sda1 /mnt/foo` and `/bar` for
         * `mount --bind /mnt/foo/bar /mnt/bar`.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static get_root_path(mount_entry: Gio.UnixMountEntry): string | null;
        /**
         * Guesses whether a Unix mount entry can be ejected.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static guess_can_eject(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Guesses the icon of a Unix mount entry.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static guess_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
        /**
         * Guesses the name of a Unix mount entry.
         *
         * The result is a translated string.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static guess_name(mount_entry: Gio.UnixMountEntry): string;
        /**
         * Guesses whether a Unix mount entry should be displayed in the UI.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static guess_should_display(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Guesses the symbolic icon of a Unix mount entry.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static guess_symbolic_icon(mount_entry: Gio.UnixMountEntry): Gio.Icon;
        /**
         * Checks if a Unix mount is mounted read only.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static is_readonly(mount_entry: Gio.UnixMountEntry): boolean;
        /**
         * Checks if a Unix mount is a system mount.
         *
         * This is the Boolean OR of
         * [func`GioUnix`.is_system_fs_type], [func`GioUnix`.is_system_device_path] and
         * [func`GioUnix`.is_mount_path_system_internal] on `mount_entry’`s properties.
         *
         * The definition of what a ‘system’ mount entry is may change over time as new
         * file system types and device paths are ignored.
         *
         * @param mount_entry a [struct`GioUnix`.MountEntry]
         */
        static is_system_internal(mount_entry: Gio.UnixMountEntry): boolean;
    }
    export type MountMonitorClass = typeof MountMonitor;
    /**
     * Defines a Unix mount point (e.g. `/dev`).
     * This corresponds roughly to a fstab entry.
     */
    abstract class MountPoint {
        static '$gtype': GObject.GType<MountPoint>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Gets a [struct`GioUnix`.MountPoint] for a given mount path.
         *
         * If `time_read` is set, it will be filled with a Unix timestamp for checking if
         * the mount points have changed since with
         * [func`GioUnix`.mount_points_changed_since].
         *
         * If more mount points have the same mount path, the last matching mount point
         * is returned.
         *
         * @param mount_path path for a possible Unix mount point
         */
        static at(mount_path: string): [Gio.UnixMountPoint | null, number];
        /**
         * Compares two Unix mount points.
         *
         * @param _mount1 a [struct`GioUnix`.MountPoint]
         * @param _mount2 a [struct`GioUnix`.MountPoint]
         */
        static compare(_mount1: Gio.UnixMountPoint, _mount2: Gio.UnixMountPoint): number;
        /**
         * Makes a copy of `mount_point`.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static copy(mount_point: Gio.UnixMountPoint): Gio.UnixMountPoint;
        /**
         * Frees a Unix mount point.
         *
         * @param mount_point Unix mount point to free.
         */
        static free(mount_point: Gio.UnixMountPoint): void;
        /**
         * Gets the device path for a Unix mount point.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static get_device_path(mount_point: Gio.UnixMountPoint): string;
        /**
         * Gets the file system type for the mount point.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static get_fs_type(mount_point: Gio.UnixMountPoint): string;
        /**
         * Gets the mount path for a Unix mount point.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static get_mount_path(mount_point: Gio.UnixMountPoint): string;
        /**
         * Gets the options for the mount point.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static get_options(mount_point: Gio.UnixMountPoint): string | null;
        /**
         * Guesses whether a Unix mount point can be ejected.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static guess_can_eject(mount_point: Gio.UnixMountPoint): boolean;
        /**
         * Guesses the icon of a Unix mount point.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static guess_icon(mount_point: Gio.UnixMountPoint): Gio.Icon;
        /**
         * Guesses the name of a Unix mount point.
         *
         * The result is a translated string.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static guess_name(mount_point: Gio.UnixMountPoint): string;
        /**
         * Guesses the symbolic icon of a Unix mount point.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static guess_symbolic_icon(mount_point: Gio.UnixMountPoint): Gio.Icon;
        /**
         * Checks if a Unix mount point is a loopback device.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static is_loopback(mount_point: Gio.UnixMountPoint): boolean;
        /**
         * Checks if a Unix mount point is read only.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static is_readonly(mount_point: Gio.UnixMountPoint): boolean;
        /**
         * Checks if a Unix mount point is mountable by the user.
         *
         * @param mount_point a [struct`GioUnix`.MountPoint]
         */
        static is_user_mountable(mount_point: Gio.UnixMountPoint): boolean;
    }
    export type OutputStreamClass = typeof OutputStream;
    abstract class OutputStreamPrivate {
        static '$gtype': GObject.GType<OutputStreamPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    namespace DesktopAppInfoLookup {
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface DesktopAppInfoLookupNamespace {
        $gtype: GObject.GType<DesktopAppInfoLookup>;
        prototype: DesktopAppInfoLookup;
        /**
         * Gets the default application for launching applications
         * using this URI scheme for a particular [iface`Gio`.DesktopAppInfoLookup]
         * implementation.
         *
         * The [iface`Gio`.DesktopAppInfoLookup] interface and this function is used
         * to implement [func`Gio`.AppInfo.get_default_for_uri_scheme] backends
         * in a GIO module. There is no reason for applications to use it
         * directly. Applications should use
         * [func`Gio`.AppInfo.get_default_for_uri_scheme].
         *
         * @param lookup a [iface`Gio`.DesktopAppInfoLookup]
         * @param uri_scheme a string containing a URI scheme.
         */
        get_default_for_uri_scheme(lookup: Gio.DesktopAppInfoLookup, uri_scheme: string): Gio.AppInfo | null;
    }
    interface DesktopAppInfoLookup extends GObject.Object {}
    export const DesktopAppInfoLookup: DesktopAppInfoLookupNamespace & (new () => DesktopAppInfoLookup);
    namespace FileDescriptorBased {
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface FileDescriptorBasedNamespace {
        $gtype: GObject.GType<FileDescriptorBased>;
        prototype: FileDescriptorBased;
        /**
         * Gets the underlying file descriptor.
         *
         * @param fd_based a #GFileDescriptorBased.
         */
        get_fd(fd_based: Gio.FileDescriptorBased): number;
    }
    interface FileDescriptorBased extends GObject.Object {}
    export const FileDescriptorBased: FileDescriptorBasedNamespace & (new () => FileDescriptorBased);
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
export default GioUnix;
