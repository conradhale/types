/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import Gio from '@girs/gio-2.0';
import GObject from '@girs/gobject-2.0';
import GLib from '@girs/glib-2.0';
import GModule from '@girs/gmodule-2.0';
import '@girs/gjs';
import type classes from './gjsprivate-1.0-classes.d.ts';
export { classes as GjsPrivateClasses };
export namespace GjsPrivate {
    /**
     * GjsPrivate-1.0
     */
    export namespace LocaleCategory {
        export const $gtype: GObject.GType<LocaleCategory>;
    }
    enum LocaleCategory {
        ALL = 6,
        COLLATE = 3,
        CTYPE,
        MESSAGES = 5,
        MONETARY = 4,
        NUMERIC = 1,
        TIME = 2,
    }
    function bindtextdomain(domain: string, location: string): void;
    /**
     * Clears the terminal, if possible.
     */
    function clear_terminal(): void;
    function g_binding_group_bind_full(
        source: GObject.BindingGroup,
        source_property: string,
        target: GObject.Object,
        target_property: string,
        flags: GObject.BindingFlags | null,
        to_callback?: BindingTransformFunc | null,
        from_callback?: BindingTransformFunc | null,
    ): void;
    function g_object_bind_property_full(
        source: GObject.Object,
        source_property: string,
        target: GObject.Object,
        target_property: string,
        flags: GObject.BindingFlags | null,
        to_callback?: BindingTransformFunc | null,
        from_callback?: BindingTransformFunc | null,
    ): GObject.Binding;
    function gtk_container_child_set_property(
        container: GObject.Object,
        child: GObject.Object,
        property: string,
        value: GObject.Value | any,
    ): void;
    /**
     * Creates a new `GtkSorter` that works by calling `sort_func` to compare items.
     *
     * If `sort_func` is %NULL, all items are considered equal.
     *
     * @returns a new `GtkCustomSorter`
     * @param sort_func function to sort items
     */
    function gtk_custom_sorter_new<T = GObject.Object>(sort_func?: CompareDataFunc | null): T;
    /**
     * Sets (or unsets) the function used for sorting items.
     *
     * If `sort_func` is %NULL, all items are considered equal.
     *
     * If the sort func changes its sorting behavior, gtk_sorter_changed() needs to
     * be called.
     *
     * If a previous function was set, its `user_destroy` will be called now.
     *
     * @param sorter a `GtkCustomSorter`
     * @param sort_func function to sort items
     */
    function gtk_custom_sorter_set_sort_func(sorter: GObject.Object, sort_func?: CompareDataFunc | null): void;
    /**
     * Inserts `item` into `store` at a position to be determined by the
     * `compare_func`.
     *
     * The list must already be sorted before calling this function or the
     * result is undefined.  Usually you would approach this by only ever
     * inserting items by way of this function.
     *
     * This function takes a ref on `item`.
     *
     * @returns the position at which `item` was inserted
     * @param store a #GListStore
     * @param item the new item
     * @param compare_func pairwise comparison function for sorting
     */
    function list_store_insert_sorted(
        store: Gio.ListStore,
        item: GObject.Object,
        compare_func: CompareDataFunc,
    ): number;
    /**
     * Sort the items in `store` according to `compare_func`.
     *
     * @param store a #GListStore
     * @param compare_func pairwise comparison function for sorting
     */
    function list_store_sort(store: Gio.ListStore, compare_func: CompareDataFunc): void;
    /**
     * Sets the structured logging writer function back to the platform default.
     */
    function log_set_writer_default(): void;
    /**
     * Sets a given function as the writer function for structured logging,
     * passing log fields as a variant. If called from JavaScript the application
     * must call gjs_log_set_writer_default prior to exiting.
     *
     * @param func callback with log data
     */
    function log_set_writer_func(func: GLogWriterFunc): void;
    function param_spec_get_flags(pspec: GObject.ParamSpec): GObject.ParamFlags;
    function param_spec_get_owner_type(pspec: GObject.ParamSpec): GObject.GType;
    function param_spec_get_value_type(pspec: GObject.ParamSpec): GObject.GType;
    /**
     * Wrapper for g_regex_match() that doesn't require the string to be kept alive.
     *
     * @returns %TRUE or %FALSE
     * @param regex a #GRegex
     * @param s the string to scan for matches
     * @param match_options match options
     */
    function regex_match(
        regex: GLib.Regex,
        s: string,
        match_options: GLib.RegexMatchFlags | null,
    ): [boolean, MatchInfo | null];
    /**
     * Wrapper for g_regex_match_all() that doesn't require the string to be kept
     * alive.
     *
     * @returns %TRUE or %FALSE
     * @param regex a #GRegex
     * @param s the string to scan for matches
     * @param match_options match options
     */
    function regex_match_all(
        regex: GLib.Regex,
        s: string,
        match_options: GLib.RegexMatchFlags | null,
    ): [boolean, MatchInfo | null];
    /**
     * Wrapper for g_regex_match_all_full() that doesn't require the string to be
     * kept alive.
     *
     * @returns %TRUE or %FALSE
     * @param regex a #GRegex
     * @param bytes the string to scan for matches
     * @param start_position starting index of the string to match, in bytes
     * @param match_options match options
     */
    function regex_match_all_full(
        regex: GLib.Regex,
        bytes: Uint8Array[] | string,
        start_position: number,
        match_options: GLib.RegexMatchFlags | null,
    ): [boolean, MatchInfo | null];
    /**
     * Wrapper for g_regex_match_full() that doesn't require the string to be kept
     * alive.
     *
     * @returns %TRUE or %FALSE
     * @param regex a #GRegex
     * @param bytes the string to scan for matches
     * @param start_position starting index of the string to match, in bytes
     * @param match_options match options
     */
    function regex_match_full(
        regex: GLib.Regex,
        bytes: Uint8Array[] | string,
        start_position: number,
        match_options: GLib.RegexMatchFlags | null,
    ): [boolean, MatchInfo | null];
    function set_thread_locale(category: LocaleCategory | null, locale?: string | null): string;
    function textdomain(domain: string): void;
    interface BindingTransformFunc {
        (binding: GObject.Binding, from_value: GObject.Value | any): boolean;
    }
    interface CompareDataFunc<A = GObject.Object, B = GObject.Object> {
        (a: A, b: B): number;
    }
    interface GLogWriterFunc {
        (level: GLib.LogLevelFlags, fields: GLib.Variant): GLib.LogWriterOutput;
    }
    namespace DBusImplementation {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'handle-method-call'(arg0: string, arg1: Gio.DBusMethodInvocation, arg2: GLib.Variant): void;
            'handle-property-get'(arg0: string): GLib.Variant;
            'handle-property-set'(arg0: string, arg1: GLib.Variant): void;
            'notify::g-interface-info'(pspec: GObject.ParamSpec): void;
            'notify::g-flags'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps,
                Gio.DBusInterface.ConstructorProps {
            g_interface_info: Gio.DBusInterfaceInfo;
            gInterfaceInfo: Gio.DBusInterfaceInfo;
        }
    }
    type DBusImplementation = (typeof classes.DBusImplementation)['prototype'];
    const DBusImplementation: typeof classes.DBusImplementation &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<GjsPrivate.DBusImplementation.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, DBusImplementation.SignalSignatures> & classes.DBusImplementation);
    export type DBusImplementationClass = typeof DBusImplementation;
    /**
     * A GjsMatchInfo is an opaque struct used to return information about
     * matches.
     */
    abstract class MatchInfo {
        static '$gtype': GObject.GType<MatchInfo>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Wrapper for g_match_info_expand_references().
         *
         * @returns the expanded string, or %NULL if an error occurred
         * @param string_to_expand the string to expand
         */
        expand_references(string_to_expand: string): string | null;
        /**
         * Wrapper for g_match_info_fetch().
         *
         * @returns The matched substring, or %NULL if an error occurred.
         * @param match_num number of the sub expression
         */
        fetch(match_num: number): string | null;
        /**
         * Wrapper for g_match_info_fetch_all().
         *
         * @returns a %NULL-terminated array of strings. If the
         *     previous match failed %NULL is returned
         */
        fetch_all(): string[];
        /**
         * Wrapper for g_match_info_fetch_named().
         *
         * @returns The matched substring, or %NULL if an error occurred.
         * @param name name of the subexpression
         */
        fetch_named(name: string): string | null;
        /**
         * Wrapper for g_match_info_fetch_named_pos().
         *
         * @returns %TRUE or %FALSE
         * @param name name of the subexpression
         */
        fetch_named_pos(name: string): [boolean, number, number];
        /**
         * Wrapper for g_match_info_fetch_pos().
         *
         * @returns %TRUE or %FALSE
         * @param match_num number of the sub expression
         */
        fetch_pos(match_num: number): [boolean, number, number];
        /**
         * Replacement for g_match_info_free().
         */
        free(): void;
        /**
         * Wrapper for g_match_info_get_match_count().
         *
         * @returns Number of matched substrings, or -1 if an error occurred
         */
        get_match_count(): number;
        /**
         * Wrapper for g_match_info_get_regex().
         *
         * @returns #GRegex object
         */
        get_regex(): GLib.Regex;
        /**
         * Replacement for g_match_info_get_string(), but the string is owned by `self`.
         *
         * @returns the string searched with `match_info`
         */
        get_string(): string;
        /**
         * Wrapper for g_match_info_is_partial_match().
         *
         * @returns %TRUE or %FALSE
         */
        is_partial_match(): boolean;
        /**
         * Wrapper for g_match_info_matches().
         *
         * @returns %TRUE or %FALSE
         */
        matches(): boolean;
        /**
         * Wrapper for g_match_info_next().
         *
         * @returns %TRUE or %FALSE
         */
        next(): boolean;
        /**
         * Replacement for g_match_info_ref().
         *
         * @returns `self`
         */
        ref(): MatchInfo;
        /**
         * Replacement for g_match_info_unref().
         */
        unref(): void;
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
export default GjsPrivate;
