/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import './gobject-2.0-types.d.ts';
import type GLib from '@girs/glib-2.0';
import '@girs/gjs';
import type classes from './gobject-2.0-classes.d.ts';
export { classes as GObjectClasses };
export namespace GObject {
    /**
     * GObject-2.0
     */
    /**
     * Mask containing the bits of #GParamSpec.flags which are reserved for GLib.
     */
    const PARAM_MASK: number;
    /**
     * #GParamFlags value alias for %G_PARAM_STATIC_NAME | %G_PARAM_STATIC_NICK | %G_PARAM_STATIC_BLURB.
     *
     * It is recommended to use this for all properties by default, as it allows for
     * internal performance improvements in GObject.
     *
     * It is very rare that a property would have a dynamically constructed name,
     * nickname or blurb.
     *
     * Since 2.13.0
     */
    const PARAM_STATIC_STRINGS: number;
    /**
     * Minimum shift count to be used for user defined flags, to be stored in
     * #GParamSpec.flags. The maximum allowed is 10.
     */
    const PARAM_USER_SHIFT: number;
    /**
     * A mask for all #GSignalFlags bits.
     */
    const SIGNAL_FLAGS_MASK: number;
    /**
     * A mask for all #GSignalMatchType bits.
     */
    const SIGNAL_MATCH_MASK: number;
    /**
     * A bit in the type number that's supposed to be left untouched.
     */
    const TYPE_FLAG_RESERVED_ID_BIT: Type;
    /**
     * An integer constant that represents the number of identifiers reserved
     * for types that are assigned at compile-time.
     */
    const TYPE_FUNDAMENTAL_MAX: number;
    /**
     * Shift value used in converting numbers to type IDs.
     */
    const TYPE_FUNDAMENTAL_SHIFT: number;
    /**
     * First fundamental type number to create a new fundamental type id with
     * G_TYPE_MAKE_FUNDAMENTAL() reserved for BSE.
     */
    const TYPE_RESERVED_BSE_FIRST: number;
    /**
     * Last fundamental type number reserved for BSE.
     */
    const TYPE_RESERVED_BSE_LAST: number;
    /**
     * First fundamental type number to create a new fundamental type id with
     * G_TYPE_MAKE_FUNDAMENTAL() reserved for GLib.
     */
    const TYPE_RESERVED_GLIB_FIRST: number;
    /**
     * Last fundamental type number reserved for GLib.
     */
    const TYPE_RESERVED_GLIB_LAST: number;
    /**
     * First available fundamental type number to create new fundamental
     * type id with G_TYPE_MAKE_FUNDAMENTAL().
     */
    const TYPE_RESERVED_USER_FIRST: number;
    /**
     * The maximal number of #GTypeCValues which can be collected for a
     * single #GValue.
     */
    const VALUE_COLLECT_FORMAT_MAX_LENGTH: number;
    /**
     * For string values, indicates that the string contained is canonical and will
     * exist for the duration of the process. See g_value_set_interned_string().
     */
    const VALUE_INTERNED_STRING: number;
    /**
     * If passed to G_VALUE_COLLECT(), allocated data won't be copied
     * but used verbatim. This does not affect ref-counted types like
     * objects. This does not affect usage of g_value_copy(), the data will
     * be copied if it is not ref-counted.
     */
    const VALUE_NOCOPY_CONTENTS: number;
    /**
     * Provide a copy of a boxed structure `src_boxed` which is of type `boxed_type`.
     *
     * @returns The newly created copy of the boxed
     *    structure.
     * @param boxed_type The type of `src_boxed`.
     * @param src_boxed The boxed structure to be copied.
     */
    function boxed_copy(boxed_type: GType, src_boxed: any): any;
    /**
     * Free the boxed structure `boxed` which is of type `boxed_type`.
     *
     * @param boxed_type The type of `boxed`.
     * @param boxed The boxed structure to be freed.
     */
    function boxed_free(boxed_type: GType, boxed: any): void;
    /**
     * This function creates a new %G_TYPE_BOXED derived type id for a new
     * boxed type with name `name`.
     *
     * Boxed type handling functions have to be provided to copy and free
     * opaque boxed structures of this type.
     *
     * For the general case, it is recommended to use G_DEFINE_BOXED_TYPE()
     * instead of calling g_boxed_type_register_static() directly. The macro
     * will create the appropriate `*_get_type()` function for the boxed type.
     *
     * @returns New %G_TYPE_BOXED derived type id for `name`.
     * @param name Name of the new boxed type.
     * @param boxed_copy Boxed structure copy function.
     * @param boxed_free Boxed structure free function.
     */
    function boxed_type_register_static(name: string, boxed_copy: BoxedCopyFunc, boxed_free: BoxedFreeFunc): GType;
    /**
     * A #GClosureMarshal function for use with signals with handlers that
     * take two boxed pointers as arguments and return a boolean.  If you
     * have such a signal, you will probably also need to use an
     * accumulator, such as g_signal_accumulator_true_handled().
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_BOOLEAN__BOXED_BOXED(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with handlers that
     * take a flags type as an argument and return a boolean.  If you have
     * such a signal, you will probably also need to use an accumulator,
     * such as g_signal_accumulator_true_handled().
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_BOOLEAN__FLAGS(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with handlers that
     * take a #GObject and a pointer and produce a string.  It is highly
     * unlikely that your signal handler fits this description.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_STRING__OBJECT_POINTER(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * boolean argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__BOOLEAN(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * argument which is any boxed pointer type.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__BOXED(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * character argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__CHAR(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with one
     * double-precision floating point argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__DOUBLE(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * argument with an enumerated type.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__ENUM(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * argument with a flags types.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__FLAGS(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with one
     * single-precision floating point argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__FLOAT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * integer argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__INT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with with a single
     * long integer argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__LONG(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * #GObject argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__OBJECT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * argument of type #GParamSpec.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__PARAM(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single raw
     * pointer argument type.
     *
     * If it is possible, it is better to use one of the more specific
     * functions such as g_cclosure_marshal_VOID__OBJECT() or
     * g_cclosure_marshal_VOID__OBJECT().
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__POINTER(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single string
     * argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__STRING(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * unsigned character argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__UCHAR(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with with a single
     * unsigned integer argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__UINT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with an unsigned int
     * and a pointer as arguments.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__UINT_POINTER(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * unsigned long integer argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__ULONG(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with a single
     * #GVariant argument.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__VARIANT(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A #GClosureMarshal function for use with signals with no arguments.
     *
     * @param closure A #GClosure.
     * @param return_value A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_VOID__VOID(
        closure: Closure,
        return_value: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * A generic marshaller function implemented via
     * [libffi](http://sourceware.org/libffi/).
     *
     * Normally this function is not passed explicitly to g_signal_new(),
     * but used automatically by GLib when specifying a %NULL marshaller.
     *
     * @param closure A #GClosure.
     * @param return_gvalue A #GValue to store the return value. May be %NULL
     *   if the callback of closure doesn't return a value.
     * @param n_param_values The length of the `param_values` array.
     * @param param_values An array of #GValues holding the arguments
     *   on which to invoke the callback of closure.
     * @param invocation_hint The invocation hint given as the last argument to
     *   g_closure_invoke().
     * @param marshal_data Additional data specified when registering the
     *   marshaller, see g_closure_set_marshal() and
     *   g_closure_set_meta_marshal()
     */
    function cclosure_marshal_generic(
        closure: Closure,
        return_gvalue: Value | any,
        n_param_values: number,
        param_values: Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * Disconnects a handler from `instance` so it will not be called during
     * any future or currently ongoing emissions of the signal it has been
     * connected to. The `handler_id_ptr` is then set to zero, which is never a valid handler ID value (see g_signal_connect()).
     *
     * If the handler ID is 0 then this function does nothing.
     *
     * There is also a macro version of this function so that the code
     * will be inlined.
     *
     * @param handler_id_ptr A pointer to a handler ID (of type #gulong) of the handler to be disconnected.
     * @param instance The instance to remove the signal handler from.
     *   This pointer may be %NULL or invalid, if the handler ID is zero.
     */
    function clear_signal_handler(handler_id_ptr: number, instance: Object): void;
    /**
     * This function is meant to be called from the `complete_type_info`
     * function of a #GTypePlugin implementation, as in the following
     * example:
     *
     *
     * ```c
     * static void
     * my_enum_complete_type_info (GTypePlugin     *plugin,
     *                             GType            g_type,
     *                             GTypeInfo       *info,
     *                             GTypeValueTable *value_table)
     * {
     *   static const GEnumValue values[] = {
     *     { MY_ENUM_FOO, "MY_ENUM_FOO", "foo" },
     *     { MY_ENUM_BAR, "MY_ENUM_BAR", "bar" },
     *     { 0, NULL, NULL }
     *   };
     *
     *   g_enum_complete_type_info (type, info, values);
     * }
     * ```
     *
     *
     * @param g_enum_type the type identifier of the type being completed
     * @param const_values An array of #GEnumValue structs for the possible
     *  enumeration values. The array is terminated by a struct with all
     *  members being 0.
     */
    function enum_complete_type_info(g_enum_type: GType, const_values: EnumValue): [TypeInfo];
    /**
     * Returns the #GEnumValue for a value.
     *
     * @returns the #GEnumValue for `value,` or %NULL
     *          if `value` is not a member of the enumeration
     * @param enum_class a #GEnumClass
     * @param value the value to look up
     */
    function enum_get_value(enum_class: EnumClass, value: number): EnumValue | null;
    /**
     * Looks up a #GEnumValue by name.
     *
     * @returns the #GEnumValue with name `name,`
     *          or %NULL if the enumeration doesn't have a member
     *          with that name
     * @param enum_class a #GEnumClass
     * @param name the name to look up
     */
    function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue | null;
    /**
     * Looks up a #GEnumValue by nickname.
     *
     * @returns the #GEnumValue with nickname `nick,`
     *          or %NULL if the enumeration doesn't have a member
     *          with that nickname
     * @param enum_class a #GEnumClass
     * @param nick the nickname to look up
     */
    function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue | null;
    /**
     * Registers a new static enumeration type with the name `name`.
     *
     * It is normally more convenient to let [glib-mkenums][glib-mkenums],
     * generate a my_enum_get_type() function from a usual C enumeration
     * definition  than to write one yourself using g_enum_register_static().
     *
     * @returns The new type identifier.
     * @param name A nul-terminated string used as the name of the new type.
     * @param const_static_values An array of
     *  #GEnumValue structs for the possible enumeration values. The array is
     *  terminated by a struct with all members being 0. GObject keeps a
     *  reference to the data, so it cannot be stack-allocated.
     */
    function enum_register_static(name: string, const_static_values: EnumValue[]): GType;
    /**
     * Pretty-prints `value` in the form of the enum’s name.
     *
     * This is intended to be used for debugging purposes. The format of the output
     * may change in the future.
     *
     * @returns a newly-allocated text string
     * @param g_enum_type the type identifier of a #GEnumClass type
     * @param value the value
     */
    function enum_to_string(g_enum_type: GType, value: number): string;
    /**
     * This function is meant to be called from the complete_type_info()
     * function of a #GTypePlugin implementation, see the example for
     * g_enum_complete_type_info() above.
     *
     * @param g_flags_type the type identifier of the type being completed
     * @param const_values An array of #GFlagsValue structs for the possible
     *  enumeration values. The array is terminated by a struct with all
     *  members being 0.
     */
    function flags_complete_type_info(g_flags_type: GType, const_values: FlagsValue): [TypeInfo];
    /**
     * Returns the first #GFlagsValue which is set in `value`.
     *
     * @returns the first #GFlagsValue which is set in
     *          `value,` or %NULL if none is set
     * @param flags_class a #GFlagsClass
     * @param value the value
     */
    function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue | null;
    /**
     * Looks up a #GFlagsValue by name.
     *
     * @returns the #GFlagsValue with name `name,`
     *          or %NULL if there is no flag with that name
     * @param flags_class a #GFlagsClass
     * @param name the name to look up
     */
    function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue | null;
    /**
     * Looks up a #GFlagsValue by nickname.
     *
     * @returns the #GFlagsValue with nickname `nick,`
     *          or %NULL if there is no flag with that nickname
     * @param flags_class a #GFlagsClass
     * @param nick the nickname to look up
     */
    function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue | null;
    /**
     * Registers a new static flags type with the name `name`.
     *
     * It is normally more convenient to let [glib-mkenums][glib-mkenums]
     * generate a my_flags_get_type() function from a usual C enumeration
     * definition than to write one yourself using g_flags_register_static().
     *
     * @returns The new type identifier.
     * @param name A nul-terminated string used as the name of the new type.
     * @param const_static_values An array of
     *  #GFlagsValue structs for the possible flags values. The array is
     *  terminated by a struct with all members being 0. GObject keeps a
     *  reference to the data, so it cannot be stack-allocated.
     */
    function flags_register_static(name: string, const_static_values: FlagsValue[]): GType;
    /**
     * Pretty-prints `value` in the form of the flag names separated by ` | ` and
     * sorted. Any extra bits will be shown at the end as a hexadecimal number.
     *
     * This is intended to be used for debugging purposes. The format of the output
     * may change in the future.
     *
     * @returns a newly-allocated text string
     * @param flags_type the type identifier of a #GFlagsClass type
     * @param value the value
     */
    function flags_to_string(flags_type: GType, value: number): string;
    function gtype_get_type(): GType;
    /**
     * Creates a new #GParamSpecBoolean instance specifying a %G_TYPE_BOOLEAN
     * property. In many cases, it may be more appropriate to use an enum with
     * g_param_spec_enum(), both to improve code clarity by using explicitly named
     * values, and to allow for more values to be added in future without breaking
     * API.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_boolean(
        name: string,
        nick: string | null,
        blurb: string | null,
        default_value: boolean,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_BOXED
     * derived property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param boxed_type %G_TYPE_BOXED derived type of this property
     * @param flags flags for the property specified
     */
    function param_spec_boxed(
        name: string,
        nick: string | null,
        blurb: string | null,
        boxed_type: GType,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecChar instance specifying a %G_TYPE_CHAR property.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_char(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecDouble instance specifying a %G_TYPE_DOUBLE
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_double(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecEnum instance specifying a %G_TYPE_ENUM
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param enum_type a #GType derived from %G_TYPE_ENUM
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_enum(
        name: string,
        nick: string | null,
        blurb: string | null,
        enum_type: GType,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecFlags instance specifying a %G_TYPE_FLAGS
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param flags_type a #GType derived from %G_TYPE_FLAGS
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_flags(
        name: string,
        nick: string | null,
        blurb: string | null,
        flags_type: GType,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecFloat instance specifying a %G_TYPE_FLOAT property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_float(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecGType instance specifying a
     * %G_TYPE_GTYPE property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param is_a_type a #GType whose subtypes are allowed as values
     *  of the property (use %G_TYPE_NONE for any type)
     * @param flags flags for the property specified
     */
    function param_spec_gtype(
        name: string,
        nick: string | null,
        blurb: string | null,
        is_a_type: GType,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecInt instance specifying a %G_TYPE_INT property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_int(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecInt64 instance specifying a %G_TYPE_INT64 property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_int64(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecLong instance specifying a %G_TYPE_LONG property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_long(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecBoxed instance specifying a %G_TYPE_OBJECT
     * derived property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param object_type %G_TYPE_OBJECT derived type of this property
     * @param flags flags for the property specified
     */
    function param_spec_object(
        name: string,
        nick: string | null,
        blurb: string | null,
        object_type: GType,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecParam instance specifying a %G_TYPE_PARAM
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param param_type a #GType derived from %G_TYPE_PARAM
     * @param flags flags for the property specified
     */
    function param_spec_param(
        name: string,
        nick: string | null,
        blurb: string | null,
        param_type: GType,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecPointer instance specifying a pointer property.
     * Where possible, it is better to use g_param_spec_object() or
     * g_param_spec_boxed() to expose memory management information.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param flags flags for the property specified
     */
    function param_spec_pointer(
        name: string,
        nick: string | null,
        blurb: string | null,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecString instance.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_string(
        name: string,
        nick: string | null,
        blurb: string | null,
        default_value: string | null,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecUChar instance specifying a %G_TYPE_UCHAR property.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_uchar(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecUInt instance specifying a %G_TYPE_UINT property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_uint(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecUInt64 instance specifying a %G_TYPE_UINT64
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_uint64(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecULong instance specifying a %G_TYPE_ULONG
     * property.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param minimum minimum value for the property specified
     * @param maximum maximum value for the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_ulong(
        name: string,
        nick: string | null,
        blurb: string | null,
        minimum: number,
        maximum: number,
        default_value: number,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecUnichar instance specifying a %G_TYPE_UINT
     * property. #GValue structures for this property can be accessed with
     * g_value_set_uint() and g_value_get_uint().
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns a newly created parameter specification
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param default_value default value for the property specified
     * @param flags flags for the property specified
     */
    function param_spec_unichar(
        name: string,
        nick: string | null,
        blurb: string | null,
        default_value: string,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Creates a new #GParamSpecVariant instance specifying a #GVariant
     * property.
     *
     * If `default_value` is floating, it is consumed.
     *
     * See g_param_spec_internal() for details on property names.
     *
     * @returns the newly created #GParamSpec
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param type a #GVariantType
     * @param default_value a #GVariant of type `type` to
     *                 use as the default value, or %NULL
     * @param flags flags for the property specified
     */
    function param_spec_variant(
        name: string,
        nick: string | null,
        blurb: string | null,
        type: GLib.VariantType,
        default_value: GLib.Variant | null,
        flags: ParamFlags | null,
    ): ParamSpec;
    /**
     * Registers `name` as the name of a new static type derived
     * from %G_TYPE_PARAM.
     *
     * The type system uses the information contained in the #GParamSpecTypeInfo
     * structure pointed to by `info` to manage the #GParamSpec type and its
     * instances.
     *
     * @returns The new type identifier.
     * @param name 0-terminated string used as the name of the new #GParamSpec type.
     * @param pspec_info The #GParamSpecTypeInfo for this #GParamSpec type.
     */
    function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): GType;
    /**
     * Transforms `src_value` into `dest_value` if possible, and then
     * validates `dest_value,` in order for it to conform to `pspec`.  If
     * `strict_validation` is %TRUE this function will only succeed if the
     * transformed `dest_value` complied to `pspec` without modifications.
     *
     * See also g_value_type_transformable(), g_value_transform() and
     * g_param_value_validate().
     *
     * @returns %TRUE if transformation and validation were successful,
     *  %FALSE otherwise and `dest_value` is left untouched.
     * @param pspec a valid #GParamSpec
     * @param src_value source #GValue
     * @param dest_value destination #GValue of correct type for `pspec`
     * @param strict_validation %TRUE requires `dest_value` to conform to `pspec`
     * without modifications
     */
    function param_value_convert(
        pspec: ParamSpec,
        src_value: Value | any,
        dest_value: Value | any,
        strict_validation: boolean,
    ): boolean;
    /**
     * Checks whether `value` contains the default value as specified in `pspec`.
     *
     * @returns whether `value` contains the canonical default for this `pspec`
     * @param pspec a valid #GParamSpec
     * @param value a #GValue of correct type for `pspec`
     */
    function param_value_defaults(pspec: ParamSpec, value: Value | any): boolean;
    /**
     * Return whether the contents of `value` comply with the specifications
     * set out by `pspec`.
     *
     * @returns whether the contents of `value` comply with the specifications
     *   set out by `pspec`.
     * @param pspec a valid #GParamSpec
     * @param value a #GValue of correct type for `pspec`
     */
    function param_value_is_valid(pspec: ParamSpec, value: Value | any): boolean;
    /**
     * Sets `value` to its default value as specified in `pspec`.
     *
     * @param pspec a valid #GParamSpec
     * @param value a #GValue of correct type for `pspec;` since 2.64, you
     *   can also pass an empty #GValue, initialized with %G_VALUE_INIT
     */
    function param_value_set_default(pspec: ParamSpec, value: Value | any): void;
    /**
     * Ensures that the contents of `value` comply with the specifications
     * set out by `pspec`. For example, a #GParamSpecInt might require
     * that integers stored in `value` may not be smaller than -42 and not be
     * greater than +42. If `value` contains an integer outside of this range,
     * it is modified accordingly, so the resulting value will fit into the
     * range -42 .. +42.
     *
     * @returns whether modifying `value` was necessary to ensure validity
     * @param pspec a valid #GParamSpec
     * @param value a #GValue of correct type for `pspec`
     */
    function param_value_validate(pspec: ParamSpec, value: Value | any): boolean;
    /**
     * Compares `value1` with `value2` according to `pspec,` and return -1, 0 or +1,
     * if `value1` is found to be less than, equal to or greater than `value2`,
     * respectively.
     *
     * @returns -1, 0 or +1, for a less than, equal to or greater than result
     * @param pspec a valid #GParamSpec
     * @param _value1 a #GValue of correct type for `pspec`
     * @param _value2 a #GValue of correct type for `pspec`
     */
    function param_values_cmp(pspec: ParamSpec, _value1: Value | any, _value2: Value | any): number;
    /**
     * Creates a new %G_TYPE_POINTER derived type id for a new
     * pointer type with name `name`.
     *
     * @returns a new %G_TYPE_POINTER derived type id for `name`.
     * @param name the name of the new pointer type.
     */
    function pointer_type_register_static(name: string): GType;
    /**
     * A predefined #GSignalAccumulator for signals intended to be used as a
     * hook for application code to provide a particular value.  Usually
     * only one such value is desired and multiple handlers for the same
     * signal don't make much sense (except for the case of the default
     * handler defined in the class structure, in which case you will
     * usually want the signal connection to override the class handler).
     *
     * This accumulator will use the return value from the first signal
     * handler that is run as the return value for the signal and not run
     * any further handlers (ie: the first handler "wins").
     *
     * @returns standard #GSignalAccumulator result
     * @param ihint standard #GSignalAccumulator parameter
     * @param return_accu standard #GSignalAccumulator parameter
     * @param handler_return standard #GSignalAccumulator parameter
     * @param dummy standard #GSignalAccumulator parameter
     */
    function signal_accumulator_first_wins(
        ihint: SignalInvocationHint,
        return_accu: Value | any,
        handler_return: Value | any,
        dummy?: any | null,
    ): boolean;
    /**
     * A predefined #GSignalAccumulator for signals that return a
     * boolean values. The behavior that this accumulator gives is
     * that a return of %TRUE stops the signal emission: no further
     * callbacks will be invoked, while a return of %FALSE allows
     * the emission to continue. The idea here is that a %TRUE return
     * indicates that the callback handled the signal, and no further
     * handling is needed.
     *
     * @returns standard #GSignalAccumulator result
     * @param ihint standard #GSignalAccumulator parameter
     * @param return_accu standard #GSignalAccumulator parameter
     * @param handler_return standard #GSignalAccumulator parameter
     * @param dummy standard #GSignalAccumulator parameter
     */
    function signal_accumulator_true_handled(
        ihint: SignalInvocationHint,
        return_accu: Value | any,
        handler_return: Value | any,
        dummy?: any | null,
    ): boolean;
    /**
     * Adds an emission hook for a signal, which will get called for any emission
     * of that signal, independent of the instance. This is possible only
     * for signals which don't have %G_SIGNAL_NO_HOOKS flag set.
     *
     * @returns the hook id, for later use with g_signal_remove_emission_hook().
     * @param signal_id the signal identifier, as returned by g_signal_lookup().
     * @param detail the detail on which to call the hook.
     * @param hook_func a #GSignalEmissionHook function.
     * @param data_destroy a #GDestroyNotify for `hook_data`.
     */
    function signal_add_emission_hook(
        signal_id: number,
        detail: GLib.Quark,
        hook_func: SignalEmissionHook,
        data_destroy?: GLib.DestroyNotify | null,
    ): number;
    /**
     * Calls the original class closure of a signal. This function should only
     * be called from an overridden class closure; see
     * g_signal_override_class_closure() and
     * g_signal_override_class_handler().
     *
     * @param instance_and_params the argument list of the signal emission.
     *  The first element in the array is a #GValue for the instance the signal
     *  is being emitted on. The rest are any arguments to be passed to the signal.
     * @param return_value Location for the return value.
     */
    function signal_chain_from_overridden(instance_and_params: (Value | any)[], return_value: Value | any): void;
    /**
     * Connects a closure to a signal for a particular object.
     *
     * If `closure` is a floating reference (see g_closure_sink()), this function
     * takes ownership of `closure`.
     *
     * This function cannot fail. If the given signal name doesn’t exist,
     * a critical warning is emitted. No validation is performed on the
     * ‘detail’ string when specified in `detailed_signal,` other than a
     * non-empty check.
     *
     * Refer to the [signals documentation](signals.html) for more
     * details.
     *
     * @returns the handler ID (always greater than 0)
     * @param instance the instance to connect to.
     * @param detailed_signal a string of the form "signal-name::detail".
     * @param closure the closure to connect.
     * @param after whether the handler should be called before or after the
     *  default handler of the signal.
     */
    function signal_connect_closure(
        instance: Object,
        detailed_signal: string,
        closure: Closure,
        after: boolean,
    ): number;
    /**
     * Connects a closure to a signal for a particular object.
     *
     * If `closure` is a floating reference (see g_closure_sink()), this function
     * takes ownership of `closure`.
     *
     * This function cannot fail. If the given signal name doesn’t exist,
     * a critical warning is emitted. No validation is performed on the
     * ‘detail’ string when specified in `detailed_signal,` other than a
     * non-empty check.
     *
     * Refer to the [signals documentation](signals.html) for more
     * details.
     *
     * @returns the handler ID (always greater than 0)
     * @param instance the instance to connect to.
     * @param signal_id the id of the signal.
     * @param detail the detail.
     * @param closure the closure to connect.
     * @param after whether the handler should be called before or after the
     *  default handler of the signal.
     */
    function signal_connect_closure_by_id(
        instance: Object,
        signal_id: number,
        detail: GLib.Quark,
        closure: Closure,
        after: boolean,
    ): number;
    /**
     * Emits a signal. Signal emission is done synchronously.
     * The method will only return control after all handlers are called or signal emission was stopped.
     *
     * Note that g_signal_emitv() doesn't change `return_value` if no handlers are
     * connected, in contrast to g_signal_emit() and g_signal_emit_valist().
     *
     * @param instance_and_params argument list for the signal emission.
     *  The first element in the array is a #GValue for the instance the signal
     *  is being emitted on. The rest are any arguments to be passed to the signal.
     * @param signal_id the signal id
     * @param detail the detail
     * @param return_value Location to
     * store the return value of the signal emission. This must be provided if the
     * specified signal returns a value, but may be ignored otherwise.
     */
    function signal_emitv(
        instance_and_params: (Value | any)[],
        signal_id: number,
        detail: GLib.Quark,
        return_value?: Value | any,
    ): [unknown];
    /**
     * Returns the invocation hint of the innermost signal emission of instance.
     *
     * @returns the invocation hint of the innermost
     *     signal emission, or %NULL if not found.
     * @param instance the instance to query
     */
    function signal_get_invocation_hint(instance: Object): SignalInvocationHint | null;
    /**
     * Blocks a handler of an instance so it will not be called during any
     * signal emissions unless it is unblocked again. Thus "blocking" a
     * signal handler means to temporarily deactivate it, a signal handler
     * has to be unblocked exactly the same amount of times it has been
     * blocked before to become active again.
     *
     * The `handler_id` has to be a valid signal handler id, connected to a
     * signal of `instance`.
     *
     * @param instance The instance to block the signal handler of.
     * @param handler_id Handler id of the handler to be blocked.
     */
    function signal_handler_block(instance: Object, handler_id: number): void;
    /**
     * Disconnects a handler from an instance so it will not be called during
     * any future or currently ongoing emissions of the signal it has been
     * connected to. The `handler_id` becomes invalid and may be reused.
     *
     * The `handler_id` has to be a valid signal handler id, connected to a
     * signal of `instance`.
     *
     * @param instance The instance to remove the signal handler from.
     * @param handler_id Handler id of the handler to be disconnected.
     */
    function signal_handler_disconnect(instance: Object, handler_id: number): void;
    /**
     * Returns whether `handler_id` is the ID of a handler connected to `instance`.
     *
     * @returns whether `handler_id` identifies a handler connected to `instance`.
     * @param instance The instance where a signal handler is sought.
     * @param handler_id the handler ID.
     */
    function signal_handler_is_connected(instance: Object, handler_id: number): boolean;
    /**
     * Undoes the effect of a previous g_signal_handler_block() call.  A
     * blocked handler is skipped during signal emissions and will not be
     * invoked, unblocking it (for exactly the amount of times it has been
     * blocked before) reverts its "blocked" state, so the handler will be
     * recognized by the signal system and is called upon future or
     * currently ongoing signal emissions (since the order in which
     * handlers are called during signal emissions is deterministic,
     * whether the unblocked handler in question is called as part of a
     * currently ongoing emission depends on how far that emission has
     * proceeded yet).
     *
     * The `handler_id` has to be a valid id of a signal handler that is
     * connected to a signal of `instance` and is currently blocked.
     *
     * @param instance The instance to unblock the signal handler of.
     * @param handler_id Handler id of the handler to be unblocked.
     */
    function signal_handler_unblock(instance: Object, handler_id: number): void;
    /**
     * Blocks all handlers on an instance that match a certain selection criteria.
     *
     * The criteria mask is passed as a combination of #GSignalMatchType flags, and
     * the criteria values are passed as arguments. A handler must match on all
     * flags set in `mask` to be blocked (i.e. the match is conjunctive).
     *
     * Passing at least one of the %G_SIGNAL_MATCH_ID, %G_SIGNAL_MATCH_CLOSURE,
     * %G_SIGNAL_MATCH_FUNC
     * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches.
     * If no handlers were found, 0 is returned, the number of blocked handlers
     * otherwise.
     *
     * Support for %G_SIGNAL_MATCH_ID was added in GLib 2.78.
     *
     * @returns The number of handlers that matched.
     * @param instance The instance to block handlers from.
     * @param mask Mask indicating which of `signal_id,` `detail,` `closure,` `func`
     *  and/or `data` the handlers have to match.
     * @param signal_id Signal the handlers have to be connected to.
     * @param detail Signal detail the handlers have to be connected to.
     * @param closure The closure the handlers will invoke.
     * @param func The C closure callback of the handlers (useless for non-C closures).
     * @param data The closure data of the handlers' closures.
     */
    function signal_handlers_block_matched(
        instance: Object,
        mask: SignalMatchType | null,
        signal_id: number,
        detail: GLib.Quark,
        closure?: Closure | null,
        func?: any | null,
        data?: any | null,
    ): number;
    /**
     * Destroy all signal handlers of a type instance. This function is
     * an implementation detail of the #GObject dispose implementation,
     * and should not be used outside of the type system.
     *
     * @param instance The instance whose signal handlers are destroyed
     */
    function signal_handlers_destroy(instance: Object): void;
    /**
     * Disconnects all handlers on an instance that match a certain
     * selection criteria.
     *
     * The criteria mask is passed as a combination of #GSignalMatchType flags, and
     * the criteria values are passed as arguments. A handler must match on all
     * flags set in `mask` to be disconnected (i.e. the match is conjunctive).
     *
     * Passing at least one of the %G_SIGNAL_MATCH_ID, %G_SIGNAL_MATCH_CLOSURE,
     * %G_SIGNAL_MATCH_FUNC or
     * %G_SIGNAL_MATCH_DATA match flags is required for successful
     * matches.  If no handlers were found, 0 is returned, the number of
     * disconnected handlers otherwise.
     *
     * Support for %G_SIGNAL_MATCH_ID was added in GLib 2.78.
     *
     * @returns The number of handlers that matched.
     * @param instance The instance to remove handlers from.
     * @param mask Mask indicating which of `signal_id,` `detail,` `closure,` `func`
     *  and/or `data` the handlers have to match.
     * @param signal_id Signal the handlers have to be connected to.
     * @param detail Signal detail the handlers have to be connected to.
     * @param closure The closure the handlers will invoke.
     * @param func The C closure callback of the handlers (useless for non-C closures).
     * @param data The closure data of the handlers' closures.
     */
    function signal_handlers_disconnect_matched(
        instance: Object,
        mask: SignalMatchType | null,
        signal_id: number,
        detail: GLib.Quark,
        closure?: Closure | null,
        func?: any | null,
        data?: any | null,
    ): number;
    /**
     * Unblocks all handlers on an instance that match a certain selection
     * criteria.
     *
     * The criteria mask is passed as a combination of #GSignalMatchType flags, and
     * the criteria values are passed as arguments. A handler must match on all
     * flags set in `mask` to be unblocked (i.e. the match is conjunctive).
     *
     * Passing at least one of the %G_SIGNAL_MATCH_ID, %G_SIGNAL_MATCH_CLOSURE,
     * %G_SIGNAL_MATCH_FUNC
     * or %G_SIGNAL_MATCH_DATA match flags is required for successful matches.
     * If no handlers were found, 0 is returned, the number of unblocked handlers
     * otherwise. The match criteria should not apply to any handlers that are
     * not currently blocked.
     *
     * Support for %G_SIGNAL_MATCH_ID was added in GLib 2.78.
     *
     * @returns The number of handlers that matched.
     * @param instance The instance to unblock handlers from.
     * @param mask Mask indicating which of `signal_id,` `detail,` `closure,` `func`
     *  and/or `data` the handlers have to match.
     * @param signal_id Signal the handlers have to be connected to.
     * @param detail Signal detail the handlers have to be connected to.
     * @param closure The closure the handlers will invoke.
     * @param func The C closure callback of the handlers (useless for non-C closures).
     * @param data The closure data of the handlers' closures.
     */
    function signal_handlers_unblock_matched(
        instance: Object,
        mask: SignalMatchType | null,
        signal_id: number,
        detail: GLib.Quark,
        closure?: Closure | null,
        func?: any | null,
        data?: any | null,
    ): number;
    /**
     * Returns whether there are any handlers connected to `instance` for the
     * given signal id and detail.
     *
     * If `detail` is 0 then it will only match handlers that were connected
     * without detail.  If `detail` is non-zero then it will match handlers
     * connected both without detail and with the given detail.  This is
     * consistent with how a signal emitted with `detail` would be delivered
     * to those handlers.
     *
     * Since 2.46 this also checks for a non-default class closure being
     * installed, as this is basically always what you want.
     *
     * One example of when you might use this is when the arguments to the
     * signal are difficult to compute. A class implementor may opt to not
     * emit the signal if no one is attached anyway, thus saving the cost
     * of building the arguments.
     *
     * @returns %TRUE if a handler is connected to the signal, %FALSE
     *          otherwise.
     * @param instance the object whose signal handlers are sought.
     * @param signal_id the signal id.
     * @param detail the detail.
     * @param may_be_blocked whether blocked handlers should count as match.
     */
    function signal_has_handler_pending(
        instance: Object,
        signal_id: number,
        detail: GLib.Quark,
        may_be_blocked: boolean,
    ): boolean;
    /**
     * Validate a signal name. This can be useful for dynamically-generated signals
     * which need to be validated at run-time before actually trying to create them.
     *
     * See [func`GObject`.signal_new] for details of the rules for valid names.
     * The rules for signal names are the same as those for property names.
     *
     * @returns %TRUE if `name` is a valid signal name, %FALSE otherwise.
     * @param name the canonical name of the signal
     */
    function signal_is_valid_name(name: string): boolean;
    /**
     * Lists the signals by id that a certain instance or interface type
     * created. Further information about the signals can be acquired through
     * g_signal_query().
     *
     * @returns Newly allocated array of signal IDs.
     * @param itype Instance or interface type.
     */
    function signal_list_ids(itype: GType): number[];
    /**
     * Given the name of the signal and the type of object it connects to, gets
     * the signal's identifying integer. Emitting the signal by number is
     * somewhat faster than using the name each time.
     *
     * Also tries the ancestors of the given type.
     *
     * The type class passed as `itype` must already have been instantiated (for
     * example, using g_type_class_ref()) for this function to work, as signals are
     * always installed during class initialization.
     *
     * See g_signal_new() for details on allowed signal names.
     *
     * @returns the signal's identifying number, or 0 if no signal was found.
     * @param name the signal's name.
     * @param itype the type that the signal operates on.
     */
    function signal_lookup(name: string, itype: GType): number;
    /**
     * Given the signal's identifier, finds its name.
     *
     * Two different signals may have the same name, if they have differing types.
     *
     * @returns the signal name, or %NULL if the signal number was invalid.
     * @param signal_id the signal's identifying number.
     */
    function signal_name(signal_id: number): string | null;
    /**
     * Overrides the class closure (i.e. the default handler) for the given signal
     * for emissions on instances of `instance_type`. `instance_type` must be derived
     * from the type to which the signal belongs.
     *
     * See g_signal_chain_from_overridden() and
     * g_signal_chain_from_overridden_handler() for how to chain up to the
     * parent class closure from inside the overridden one.
     *
     * @param signal_id the signal id
     * @param instance_type the instance type on which to override the class closure
     *  for the signal.
     * @param class_closure the closure.
     */
    function signal_override_class_closure(signal_id: number, instance_type: GType, class_closure: Closure): void;
    /**
     * Overrides the class closure (i.e. the default handler) for the
     * given signal for emissions on instances of `instance_type` with
     * callback `class_handler`. `instance_type` must be derived from the
     * type to which the signal belongs.
     *
     * See g_signal_chain_from_overridden() and
     * g_signal_chain_from_overridden_handler() for how to chain up to the
     * parent class closure from inside the overridden one.
     *
     * @param signal_name the name for the signal
     * @param instance_type the instance type on which to override the class handler
     *  for the signal.
     * @param class_handler the handler.
     */
    function signal_override_class_handler(signal_name: string, instance_type: GType, class_handler: Callback): void;
    /**
     * Internal function to parse a signal name into its `signal_id`
     * and `detail` quark.
     *
     * @returns Whether the signal name could successfully be parsed and `signal_id_p` and `detail_p` contain valid return values.
     * @param detailed_signal a string of the form "signal-name::detail".
     * @param itype The interface/instance type that introduced "signal-name".
     * @param force_detail_quark %TRUE forces creation of a #GQuark for the detail.
     */
    function signal_parse_name(
        detailed_signal: string,
        itype: GType,
        force_detail_quark: boolean,
    ): [boolean, number, GLib.Quark];
    /**
     * Queries the signal system for in-depth information about a
     * specific signal. This function will fill in a user-provided
     * structure to hold signal-specific information. If an invalid
     * signal id is passed in, the `signal_id` member of the #GSignalQuery
     * is 0. All members filled into the #GSignalQuery structure should
     * be considered constant and have to be left untouched.
     *
     * @param signal_id The signal id of the signal to query information for.
     */
    function signal_query(signal_id: number): [SignalQuery];
    /**
     * Deletes an emission hook.
     *
     * @param signal_id the id of the signal
     * @param hook_id the id of the emission hook, as returned by
     *  g_signal_add_emission_hook()
     */
    function signal_remove_emission_hook(signal_id: number, hook_id: number): void;
    /**
     * Stops a signal's current emission.
     *
     * This will prevent the default method from running, if the signal was
     * %G_SIGNAL_RUN_LAST and you connected normally (i.e. without the "after"
     * flag).
     *
     * Prints a warning if used on a signal which isn't being emitted.
     *
     * @param instance the object whose signal handlers you wish to stop.
     * @param signal_id the signal identifier, as returned by g_signal_lookup().
     * @param detail the detail which the signal was emitted with.
     */
    function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void;
    /**
     * Stops a signal's current emission.
     *
     * This is just like g_signal_stop_emission() except it will look up the
     * signal id for you.
     *
     * @param instance the object whose signal handlers you wish to stop.
     * @param detailed_signal a string of the form "signal-name::detail".
     */
    function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void;
    /**
     * Creates a new closure which invokes the function found at the offset
     * `struct_offset` in the class structure of the interface or classed type
     * identified by `itype`.
     *
     * @returns a floating reference to a new #GCClosure
     * @param itype the #GType identifier of an interface or classed type
     * @param struct_offset the offset of the member function of `itype'`s class
     *  structure which is to be invoked by the new closure
     */
    function signal_type_cclosure_new(itype: GType, struct_offset: number): Closure;
    /**
     * Set the callback for a source as a #GClosure.
     *
     * If the source is not one of the standard GLib types, the `closure_callback`
     * and `closure_marshal` fields of the #GSourceFuncs structure must have been
     * filled in with pointers to appropriate functions.
     *
     * @param source the source
     * @param closure a #GClosure
     */
    function source_set_closure(source: GLib.Source, closure: Closure): void;
    /**
     * Sets a dummy callback for `source`. The callback will do nothing, and
     * if the source expects a #gboolean return value, it will return %TRUE.
     * (If the source expects any other type of return value, it will return
     * a 0/%NULL value; whatever g_value_init() initializes a #GValue to for
     * that type.)
     *
     * If the source is not one of the standard GLib types, the
     * `closure_callback` and `closure_marshal` fields of the #GSourceFuncs
     * structure must have been filled in with pointers to appropriate
     * functions.
     *
     * @param source the source
     */
    function source_set_dummy_callback(source: GLib.Source): void;
    /**
     * Return a newly allocated string, which describes the contents of a
     * #GValue.  The main purpose of this function is to describe #GValue
     * contents for debugging output, the way in which the contents are
     * described may change between different GLib versions.
     *
     * @returns Newly allocated string.
     * @param value #GValue which contents are to be described.
     */
    function strdup_value_contents(value: Value | any): string;
    /**
     * Registers a private class structure for a classed type;
     * when the class is allocated, the private structures for
     * the class and all of its parent types are allocated
     * sequentially in the same memory block as the public
     * structures, and are zero-filled.
     *
     * This function should be called in the
     * type's get_type() function after the type is registered.
     * The private structure can be retrieved using the
     * G_TYPE_CLASS_GET_PRIVATE() macro.
     *
     * @param class_type GType of a classed type
     * @param private_size size of private structure
     */
    function type_add_class_private(class_type: GType, private_size: number): void;
    function type_add_instance_private(class_type: GType, private_size: number): number;
    /**
     * Adds `interface_type` to the dynamic `instance_type`. The information
     * contained in the #GTypePlugin structure pointed to by `plugin`
     * is used to manage the relationship.
     *
     * @param instance_type #GType value of an instantiatable type
     * @param interface_type #GType value of an interface type
     * @param plugin #GTypePlugin structure to retrieve the #GInterfaceInfo from
     */
    function type_add_interface_dynamic(instance_type: GType, interface_type: GType, plugin: TypePlugin): void;
    /**
     * Adds `interface_type` to the static `instance_type`.
     * The information contained in the #GInterfaceInfo structure
     * pointed to by `info` is used to manage the relationship.
     *
     * @param instance_type #GType value of an instantiatable type
     * @param interface_type #GType value of an interface type
     * @param info #GInterfaceInfo structure for this
     *        (`instance_type,` `interface_type)` combination
     */
    function type_add_interface_static(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
    function type_check_class_is_a(g_class: TypeClass, is_a_type: GType): boolean;
    /**
     * Private helper function to aid implementation of the
     * G_TYPE_CHECK_INSTANCE() macro.
     *
     * @returns %TRUE if `instance` is valid, %FALSE otherwise
     * @param instance a valid #GTypeInstance structure
     */
    function type_check_instance(instance: TypeInstance): boolean;
    function type_check_instance_is_a(instance: TypeInstance, iface_type: GType): boolean;
    function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: GType): boolean;
    function type_check_is_value_type(type: GType): boolean;
    function type_check_value(value: Value | any): boolean;
    function type_check_value_holds(value: Value | any, type: GType): boolean;
    /**
     * Return a newly allocated and 0-terminated array of type IDs, listing
     * the child types of `type`.
     *
     * @returns Newly allocated
     *     and 0-terminated array of child types, free with g_free()
     * @param type the parent type
     */
    function type_children(type: GType): GType[];
    function type_class_adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;
    /**
     * Retrieves the type class of the given `type`.
     *
     * This function will create the class on demand if it does not exist
     * already.
     *
     * If you don't want to create the class, use g_type_class_peek() instead.
     *
     * @returns the class structure
     *   for the type
     * @param type type ID of a classed type
     */
    function type_class_get(type: GType): TypeClass;
    /**
     * Retrieves the class for a give type.
     *
     * This function is essentially the same as g_type_class_get(),
     * except that the class may have not been instantiated yet.
     *
     * As a consequence, this function may return %NULL if the class
     * of the type passed in does not currently exist (hasn't been
     * referenced before).
     *
     * @returns the
     *   #GTypeClass structure for the given type ID or %NULL if the class
     *   does not currently exist
     * @param type type ID of a classed type
     */
    function type_class_peek(type: GType): TypeClass | null;
    /**
     * A more efficient version of g_type_class_peek() which works only for
     * static types.
     *
     * @returns the
     *   #GTypeClass structure for the given type ID or %NULL if the class
     *   does not currently exist or is dynamically loaded
     * @param type type ID of a classed type
     */
    function type_class_peek_static(type: GType): TypeClass | null;
    /**
     * Increments the reference count of the class structure belonging to
     * `type`.
     *
     * This function will demand-create the class if it doesn't exist already.
     *
     * @returns the #GTypeClass
     *   structure for the given type ID
     * @param type type ID of a classed type
     */
    function type_class_ref(type: GType): TypeClass;
    /**
     * Returns the default interface vtable for the given `g_type`.
     *
     * If the type is not currently in use, then the default vtable
     * for the type will be created and initialized by calling
     * the base interface init and default vtable init functions for
     * the type (the `base_init` and `class_init` members of #GTypeInfo).
     *
     * If you don't want to create the interface vtable, you should use
     * g_type_default_interface_peek() instead.
     *
     * Calling g_type_default_interface_get() is useful when you
     * want to make sure that signals and properties for an interface
     * have been installed.
     *
     * @returns the default
     *   vtable for the interface.
     * @param g_type an interface type
     */
    function type_default_interface_get(g_type: GType): TypeInterface;
    /**
     * If the interface type `g_type` is currently in use, returns its
     * default interface vtable.
     *
     * @returns the default
     *   vtable for the interface, or %NULL if the type is not currently
     *   in use
     * @param g_type an interface type
     */
    function type_default_interface_peek(g_type: GType): TypeInterface;
    /**
     * Increments the reference count for the interface type `g_type,`
     * and returns the default interface vtable for the type.
     *
     * If the type is not currently in use, then the default vtable
     * for the type will be created and initialized by calling
     * the base interface init and default vtable init functions for
     * the type (the `base_init` and `class_init` members of #GTypeInfo).
     * Calling g_type_default_interface_ref() is useful when you
     * want to make sure that signals and properties for an interface
     * have been installed.
     *
     * @returns the default
     *   vtable for the interface; call g_type_default_interface_unref()
     *   when you are done using the interface.
     * @param g_type an interface type
     */
    function type_default_interface_ref(g_type: GType): TypeInterface;
    /**
     * Decrements the reference count for the type corresponding to the
     * interface default vtable `g_iface`.
     *
     * If the type is dynamic, then when no one is using the interface and all
     * references have been released, the finalize function for the interface's
     * default vtable (the `class_finalize` member of #GTypeInfo) will be called.
     *
     * @param g_iface the default vtable
     *     structure for an interface, as returned by g_type_default_interface_ref()
     */
    function type_default_interface_unref(g_iface: TypeInterface): void;
    /**
     * Returns the length of the ancestry of the passed in type. This
     * includes the type itself, so that e.g. a fundamental type has depth 1.
     *
     * @returns the depth of `type`
     * @param type a #GType
     */
    function type_depth(type: GType): number;
    /**
     * Ensures that the indicated `type` has been registered with the
     * type system, and its _class_init() method has been run.
     *
     * In theory, simply calling the type's _get_type() method (or using
     * the corresponding macro) is supposed take care of this. However,
     * _get_type() methods are often marked %G_GNUC_CONST for performance
     * reasons, even though this is technically incorrect (since
     * %G_GNUC_CONST requires that the function not have side effects,
     * which _get_type() methods do on the first call). As a result, if
     * you write a bare call to a _get_type() macro, it may get optimized
     * out by the compiler. Using g_type_ensure() guarantees that the
     * type's _get_type() method is called.
     *
     * @param type a #GType
     */
    function type_ensure(type: GType): void;
    /**
     * Frees an instance of a type, returning it to the instance pool for
     * the type, if there is one.
     *
     * Like g_type_create_instance(), this function is reserved for
     * implementors of fundamental types.
     *
     * @param instance an instance of a type
     */
    function type_free_instance(instance: TypeInstance): void;
    /**
     * Look up the type ID from a given type name, returning 0 if no type
     * has been registered under this name (this is the preferred method
     * to find out by name whether a specific type has been registered
     * yet).
     *
     * @returns corresponding type ID or 0
     * @param name type name to look up
     */
    function type_from_name(name: string): GType;
    /**
     * Internal function, used to extract the fundamental type ID portion.
     * Use G_TYPE_FUNDAMENTAL() instead.
     *
     * @returns fundamental type ID
     * @param type_id valid type ID
     */
    function type_fundamental(type_id: GType): GType;
    /**
     * Returns the next free fundamental type id which can be used to
     * register a new fundamental type with g_type_register_fundamental().
     * The returned type ID represents the highest currently registered
     * fundamental type identifier.
     *
     * @returns the next available fundamental type ID to be registered,
     *     or 0 if the type system ran out of fundamental type IDs
     */
    function type_fundamental_next(): GType;
    /**
     * Returns the number of instances allocated of the particular type;
     * this is only available if GLib is built with debugging support and
     * the `instance-count` debug flag is set (by setting the `GOBJECT_DEBUG`
     * variable to include `instance-count`).
     *
     * @returns the number of instances allocated of the given type;
     *   if instance counts are not available, returns 0.
     * @param type a #GType
     */
    function type_get_instance_count(type: GType): number;
    /**
     * Returns the #GTypePlugin structure for `type`.
     *
     * @returns the corresponding plugin
     *     if `type` is a dynamic type, %NULL otherwise
     * @param type #GType to retrieve the plugin for
     */
    function type_get_plugin(type: GType): TypePlugin;
    /**
     * Obtains data which has previously been attached to `type`
     * with g_type_set_qdata().
     *
     * Note that this does not take subtyping into account; data
     * attached to one type with g_type_set_qdata() cannot
     * be retrieved from a subtype using g_type_get_qdata().
     *
     * @returns the data, or %NULL if no data was found
     * @param type a #GType
     * @param quark a #GQuark id to identify the data
     */
    function type_get_qdata(type: GType, quark: GLib.Quark): any | null;
    /**
     * Returns an opaque serial number that represents the state of the set
     * of registered types. Any time a type is registered this serial changes,
     * which means you can cache information based on type lookups (such as
     * g_type_from_name()) and know if the cache is still valid at a later
     * time by comparing the current serial with the one at the type lookup.
     *
     * @returns An unsigned int, representing the state of type registrations
     */
    function type_get_type_registration_serial(): number;
    /**
     * This function used to initialise the type system.  Since GLib 2.36,
     * the type system is initialised automatically and this function does
     * nothing.
     */
    function type_init(): void;
    /**
     * This function used to initialise the type system with debugging
     * flags.  Since GLib 2.36, the type system is initialised automatically
     * and this function does nothing.
     *
     * If you need to enable debugging features, use the `GOBJECT_DEBUG`
     * environment variable.
     *
     * @param debug_flags bitwise combination of #GTypeDebugFlags values for
     *     debugging purposes
     */
    function type_init_with_debug_flags(debug_flags: TypeDebugFlags | null): void;
    /**
     * Adds `prerequisite_type` to the list of prerequisites of `interface_type`.
     * This means that any type implementing `interface_type` must also implement
     * `prerequisite_type`. Prerequisites can be thought of as an alternative to
     * interface derivation (which GType doesn't support). An interface can have
     * at most one instantiatable prerequisite type.
     *
     * @param interface_type #GType value of an interface type
     * @param prerequisite_type #GType value of an interface or instantiatable type
     */
    function type_interface_add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
    /**
     * Returns the #GTypePlugin structure for the dynamic interface
     * `interface_type` which has been added to `instance_type,` or %NULL
     * if `interface_type` has not been added to `instance_type` or does
     * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
     *
     * @returns the #GTypePlugin for the dynamic
     *     interface `interface_type` of `instance_type`
     * @param instance_type #GType of an instantiatable type
     * @param interface_type #GType of an interface type
     */
    function type_interface_get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
    /**
     * Returns the most specific instantiatable prerequisite of an
     * interface type. If the interface type has no instantiatable
     * prerequisite, %G_TYPE_INVALID is returned.
     *
     * See g_type_interface_add_prerequisite() for more information
     * about prerequisites.
     *
     * @returns the instantiatable prerequisite type or %G_TYPE_INVALID if none
     * @param interface_type an interface type
     */
    function type_interface_instantiatable_prerequisite(interface_type: GType): GType;
    /**
     * Returns the #GTypeInterface structure of an interface to which the
     * passed in class conforms.
     *
     * @returns the #GTypeInterface
     *   structure of `iface_type` if implemented by `instance_class,` %NULL
     *   otherwise
     * @param instance_class a #GTypeClass structure
     * @param iface_type an interface ID which this class conforms to
     */
    function type_interface_peek(instance_class: TypeClass, iface_type: GType): TypeInterface | null;
    /**
     * Returns the prerequisites of an interfaces type.
     *
     * @returns a
     *     newly-allocated zero-terminated array of #GType containing
     *     the prerequisites of `interface_type`
     * @param interface_type an interface type
     */
    function type_interface_prerequisites(interface_type: GType): GType[];
    /**
     * Return a newly allocated and 0-terminated array of type IDs, listing
     * the interface types that `type` conforms to.
     *
     * @returns Newly allocated
     *     and 0-terminated array of interface types, free with g_free()
     * @param type the type to list interface types for
     */
    function type_interfaces(type: GType): GType[];
    /**
     * If `is_a_type` is a derivable type, check whether `type` is a
     * descendant of `is_a_type`. If `is_a_type` is an interface, check
     * whether `type` conforms to it.
     *
     * @returns %TRUE if `type` is a `is_a_type`
     * @param type type to check ancestry for
     * @param is_a_type possible ancestor of `type` or interface that `type`
     *     could conform to
     */
    function type_is_a(type: GType, is_a_type: GType): boolean;
    /**
     * Get the unique name that is assigned to a type ID.
     *
     * Note that this function (like all other GType API) cannot cope with
     * invalid type IDs. %G_TYPE_INVALID may be passed to this function, as
     * may be any other validly registered type ID, but randomized type IDs
     * should not be passed in and will most likely lead to a crash.
     *
     * @returns static type name or %NULL
     * @param type type to return name for
     */
    function type_name(type: GType): string | null;
    function type_name_from_class(g_class: TypeClass): string;
    function type_name_from_instance(instance: TypeInstance): string;
    /**
     * Given a `leaf_type` and a `root_type` which is contained in its
     * ancestry, return the type that `root_type` is the immediate parent
     * of. In other words, this function determines the type that is
     * derived directly from `root_type` which is also a base class of
     * `leaf_type`.  Given a root type and a leaf type, this function can
     * be used to determine the types and order in which the leaf type is
     * descended from the root type.
     *
     * @returns immediate child of `root_type` and ancestor of `leaf_type`
     * @param leaf_type descendant of `root_type` and the type to be returned
     * @param root_type immediate parent of the returned type
     */
    function type_next_base(leaf_type: GType, root_type: GType): GType;
    /**
     * Return the direct parent type of the passed in type. If the passed
     * in type has no parent, i.e. is a fundamental type, 0 is returned.
     *
     * @returns the parent type
     * @param type the derived type
     */
    function type_parent(type: GType): GType;
    /**
     * Get the corresponding quark of the type IDs name.
     *
     * @returns the type names quark or 0
     * @param type type to return quark of type name for
     */
    function type_qname(type: GType): GLib.Quark;
    /**
     * Queries the type system for information about a specific type.
     *
     * This function will fill in a user-provided structure to hold
     * type-specific information. If an invalid #GType is passed in, the
     * `type` member of the #GTypeQuery is 0. All members filled into the
     * #GTypeQuery structure should be considered constant and have to be
     * left untouched.
     *
     * Since GLib 2.78, this function allows queries on dynamic types. Previously
     * it only supported static types.
     *
     * @param type #GType of a static, classed type
     */
    function type_query(type: GType): [TypeQuery];
    /**
     * Registers `type_name` as the name of a new dynamic type derived from
     * `parent_type`.  The type system uses the information contained in the
     * #GTypePlugin structure pointed to by `plugin` to manage the type and its
     * instances (if not abstract).  The value of `flags` determines the nature
     * (e.g. abstract or not) of the type.
     *
     * @returns the new type identifier or %G_TYPE_INVALID if registration failed
     * @param parent_type type from which this type will be derived
     * @param type_name 0-terminated string used as the name of the new type
     * @param plugin #GTypePlugin structure to retrieve the #GTypeInfo from
     * @param flags bitwise combination of #GTypeFlags values
     */
    function type_register_dynamic(
        parent_type: GType,
        type_name: string,
        plugin: TypePlugin,
        flags: TypeFlags | null,
    ): GType;
    /**
     * Registers `type_id` as the predefined identifier and `type_name` as the
     * name of a fundamental type. If `type_id` is already registered, or a
     * type named `type_name` is already registered, the behaviour is undefined.
     * The type system uses the information contained in the #GTypeInfo structure
     * pointed to by `info` and the #GTypeFundamentalInfo structure pointed to by
     * `finfo` to manage the type and its instances. The value of `flags` determines
     * additional characteristics of the fundamental type.
     *
     * @returns the predefined type identifier
     * @param type_id a predefined type identifier
     * @param type_name 0-terminated string used as the name of the new type
     * @param info #GTypeInfo structure for this type
     * @param finfo #GTypeFundamentalInfo structure for this type
     * @param flags bitwise combination of #GTypeFlags values
     */
    function type_register_fundamental(
        type_id: GType,
        type_name: string,
        info: TypeInfo,
        finfo: TypeFundamentalInfo,
        flags: TypeFlags | null,
    ): GType;
    /**
     * Registers `type_name` as the name of a new static type derived from
     * `parent_type`. The type system uses the information contained in the
     * #GTypeInfo structure pointed to by `info` to manage the type and its
     * instances (if not abstract). The value of `flags` determines the nature
     * (e.g. abstract or not) of the type.
     *
     * @returns the new type identifier
     * @param parent_type type from which this type will be derived
     * @param type_name 0-terminated string used as the name of the new type
     * @param info #GTypeInfo structure for this type
     * @param flags bitwise combination of #GTypeFlags values
     */
    function type_register_static(
        parent_type: GType,
        type_name: string,
        info: TypeInfo,
        flags: TypeFlags | null,
    ): GType;
    /**
     * Attaches arbitrary data to a type.
     *
     * @param type a #GType
     * @param quark a #GQuark id to identify the data
     * @param data the data
     */
    function type_set_qdata(type: GType, quark: GLib.Quark, data?: any | null): void;
    function type_test_flags(type: GType, flags: number): boolean;
    /**
     * Returns whether a #GValue of type `src_type` can be copied into
     * a #GValue of type `dest_type`.
     *
     * @returns %TRUE if g_value_copy() is possible with `src_type` and `dest_type`.
     * @param src_type source type to be copied.
     * @param dest_type destination type for copying.
     */
    function value_type_compatible(src_type: GType, dest_type: GType): boolean;
    /**
     * Check whether g_value_transform() is able to transform values
     * of type `src_type` into values of type `dest_type`. Note that for
     * the types to be transformable, they must be compatible or a
     * transformation function must be registered.
     *
     * @returns %TRUE if the transformation is possible, %FALSE otherwise.
     * @param src_type Source type.
     * @param dest_type Target type.
     */
    function value_type_transformable(src_type: GType, dest_type: GType): boolean;
    function variant_get_gtype(): GType;
    interface BaseFinalizeFunc {
        (g_class: TypeClass): void;
    }
    interface BaseInitFunc {
        (g_class: TypeClass): void;
    }
    interface BindingTransformFunc {
        (binding: Binding, from_value: Value | any, to_value: Value | any): boolean;
    }
    interface BoxedCopyFunc {
        (boxed: any): any;
    }
    interface BoxedFreeFunc {
        (boxed: any): void;
    }
    interface Callback {
        (): void;
    }
    interface ClassFinalizeFunc {
        (g_class: TypeClass, class_data?: any | null): void;
    }
    interface ClassInitFunc {
        (g_class: TypeClass, class_data?: any | null): void;
    }
    interface ClosureMarshal {
        (
            closure: Closure,
            return_value: Value | null,
            param_values: (Value | any)[],
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
    }
    interface ClosureNotify {
        (data: any | null, closure: Closure): void;
    }
    interface InstanceInitFunc {
        (instance: TypeInstance, g_class: TypeClass): void;
    }
    interface InterfaceFinalizeFunc {
        (g_iface: TypeInterface, iface_data?: any | null): void;
    }
    interface InterfaceInitFunc {
        (g_iface: TypeInterface, iface_data?: any | null): void;
    }
    interface ObjectFinalizeFunc<A = Object> {
        (object: A): void;
    }
    interface ObjectGetPropertyFunc<A = Object> {
        (object: A, property_id: number, value: Value | any, pspec: ParamSpec): void;
    }
    interface ObjectSetPropertyFunc<A = Object> {
        (object: A, property_id: number, value: Value | any, pspec: ParamSpec): void;
    }
    interface SignalAccumulator {
        (
            ihint: SignalInvocationHint,
            return_accu: Value | any,
            handler_return: Value | any,
            data?: any | null,
        ): boolean;
    }
    interface SignalEmissionHook {
        (ihint: SignalInvocationHint, param_values: (Value | any)[], data?: any | null): boolean;
    }
    interface ToggleNotify<A = Object> {
        (data: any | null, object: A, is_last_ref: boolean): void;
    }
    interface TypeClassCacheFunc {
        (cache_data: any | null, g_class: TypeClass): boolean;
    }
    interface TypeInterfaceCheckFunc {
        (check_data: any | null, g_iface: TypeInterface): void;
    }
    interface TypePluginCompleteInterfaceInfo {
        (plugin: TypePlugin, instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
    }
    interface TypePluginCompleteTypeInfo {
        (plugin: TypePlugin, g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
    }
    interface TypePluginUnuse {
        (plugin: TypePlugin): void;
    }
    interface TypePluginUse {
        (plugin: TypePlugin): void;
    }
    interface TypeValueCollectFunc {
        (value: Value | any, collect_values: TypeCValue[], collect_flags: number): string | null;
    }
    interface TypeValueCopyFunc {
        (src_value: Value | any): void;
    }
    interface TypeValueFreeFunc {
        (value: Value | any): void;
    }
    interface TypeValueInitFunc {
        (value: Value | any): void;
    }
    interface TypeValueLCopyFunc {
        (value: Value | any, collect_values: TypeCValue[], collect_flags: number): string | null;
    }
    interface TypeValuePeekPointerFunc {
        (value: Value | any): any | null;
    }
    interface ValueTransform {
        (src_value: Value | any, dest_value: Value | any): void;
    }
    interface WeakNotify<A = Object> {
        (data: any | null, where_the_object_was: A): void;
    }
    export type Array = object | null;
    export type BookmarkFile = object | null;
    export type ByteArray = object | null;
    export type Bytes = object | null;
    export type Checksum = object | null;
    export type Date = object | null;
    export type DateTime = object | null;
    export type Dir = object | null;
    export type Error = object | null;
    export type HashTable = object | null;
    export type Hmac = object | null;
    export type IOChannel = object | null;
    export type KeyFile = object | null;
    export type MainContext = object | null;
    export type MainLoop = object | null;
    export type MappedFile = object | null;
    export type MarkupParseContext = object | null;
    export type MatchInfo = object | null;
    export type OptionGroup = object | null;
    export type PatternSpec = object | null;
    export type PollFD = object | null;
    export type PtrArray = object | null;
    export type Rand = object | null;
    export type Regex = object | null;
    export type Source = object | null;
    export type String = object | null;
    export type Strv = object | null;
    export type StrvBuilder = object | null;
    export type Thread = object | null;
    export type TimeZone = object | null;
    export type Tree = object | null;
    export type Uri = object | null;
    export type VariantBuilder = object | null;
    export type VariantDict = object | null;
    export type VariantType = object | null;
    /**
     * Flags to be passed to g_object_bind_property() or
     * g_object_bind_property_full().
     *
     * This enumeration can be extended at later date.
     */
    export namespace BindingFlags {
        export const $gtype: GType<BindingFlags>;
    }
    enum BindingFlags {
        /**
         * The default binding; if the source property
         *   changes, the target property is updated with its value.
         */
        DEFAULT,
        /**
         * Bidirectional binding; if either the
         *   property of the source or the property of the target changes,
         *   the other is updated.
         */
        BIDIRECTIONAL = 1,
        /**
         * Synchronize the values of the source and
         *   target properties when creating the binding; the direction of
         *   the synchronization is always from the source to the target.
         */
        SYNC_CREATE = 2,
        /**
         * If the two properties being bound are
         *   booleans, setting one to %TRUE will result in the other being
         *   set to %FALSE and vice versa. This flag will only work for
         *   boolean properties, and cannot be used when passing custom
         *   transformation functions to g_object_bind_property_full().
         */
        INVERT_BOOLEAN = 4,
    }
    /**
     * The connection flags are used to specify the behaviour of a signal's
     * connection.
     */
    export namespace ConnectFlags {
        export const $gtype: GType<ConnectFlags>;
    }
    enum ConnectFlags {
        /**
         * Default behaviour (no special flags). Since: 2.74
         */
        DEFAULT,
        /**
         * If set, the handler should be called after the
         *  default handler of the signal. Normally, the handler is called before
         *  the default handler.
         */
        AFTER = 1,
        /**
         * If set, the instance and data should be swapped when
         *  calling the handler; see g_signal_connect_swapped() for an example.
         */
        SWAPPED = 2,
    }
    export namespace IOCondition {
        export const $gtype: GType<IOCondition>;
    }
    enum IOCondition {
        IN = 1,
        OUT = 4,
        PRI = 2,
        ERR = 8,
        HUP = 16,
        NVAL = 32,
    }
    /**
     * Through the #GParamFlags flag values, certain aspects of parameters
     * can be configured.
     *
     * See also: %G_PARAM_STATIC_STRINGS
     */
    export namespace ParamFlags {
        export const $gtype: GType<ParamFlags>;
    }
    enum ParamFlags {
        /**
         * the parameter is readable
         */
        READABLE = 1,
        /**
         * the parameter is writable
         */
        WRITABLE = 2,
        /**
         * alias for %G_PARAM_READABLE | %G_PARAM_WRITABLE
         */
        READWRITE = 3,
        /**
         * the parameter will be set upon object construction.
         *   See [vfunc`Object`.constructed] for more details
         */
        CONSTRUCT = 4,
        /**
         * the parameter can only be set upon object construction.
         *   See [vfunc`Object`.constructed] for more details
         */
        CONSTRUCT_ONLY = 8,
        /**
         * upon parameter conversion (see g_param_value_convert())
         *  strict validation is not required
         */
        LAX_VALIDATION = 16,
        /**
         * the string used as name when constructing the
         *  parameter is guaranteed to remain valid and
         *  unmodified for the lifetime of the parameter.
         *  Since 2.8
         */
        STATIC_NAME = 32,
        /**
         * internal
         */
        PRIVATE = 32,
        /**
         * the string used as nick when constructing the
         *  parameter is guaranteed to remain valid and
         *  unmmodified for the lifetime of the parameter.
         *  Since 2.8
         */
        STATIC_NICK = 64,
        /**
         * the string used as blurb when constructing the
         *  parameter is guaranteed to remain valid and
         *  unmodified for the lifetime of the parameter.
         *  Since 2.8
         */
        STATIC_BLURB = 128,
        /**
         * calls to g_object_set_property() for this
         *   property will not automatically result in a "notify" signal being
         *   emitted: the implementation must call g_object_notify() themselves
         *   in case the property actually changes.  Since: 2.42.
         */
        EXPLICIT_NOTIFY = 1073741824,
        /**
         * the parameter is deprecated and will be removed
         *  in a future version. A warning will be generated if it is used
         *  while running with G_ENABLE_DIAGNOSTIC=1.
         *  Since 2.26
         */
        DEPRECATED = 2147483648,
    }
    /**
     * The signal flags are used to specify a signal's behaviour.
     */
    export namespace SignalFlags {
        export const $gtype: GType<SignalFlags>;
    }
    enum SignalFlags {
        /**
         * Invoke the object method handler in the first emission stage.
         */
        RUN_FIRST = 1,
        /**
         * Invoke the object method handler in the third emission stage.
         */
        RUN_LAST = 2,
        /**
         * Invoke the object method handler in the last emission stage.
         */
        RUN_CLEANUP = 4,
        /**
         * Signals being emitted for an object while currently being in
         *  emission for this very object will not be emitted recursively,
         *  but instead cause the first emission to be restarted.
         */
        NO_RECURSE = 8,
        /**
         * This signal supports "::detail" appendices to the signal name
         *  upon handler connections and emissions.
         */
        DETAILED = 16,
        /**
         * Action signals are signals that may freely be emitted on alive
         *  objects from user code via g_signal_emit() and friends, without
         *  the need of being embedded into extra code that performs pre or
         *  post emission adjustments on the object. They can also be thought
         *  of as object methods which can be called generically by
         *  third-party code.
         */
        ACTION = 32,
        /**
         * No emissions hooks are supported for this signal.
         */
        NO_HOOKS = 64,
        /**
         * Varargs signal emission will always collect the arguments, even if there
         * are no signal handlers connected.
         */
        MUST_COLLECT = 128,
        /**
         * The signal is deprecated and will be removed in a future version.
         *
         * A warning will be generated if it is connected while running with
         * `G_ENABLE_DIAGNOSTIC=1`.
         */
        DEPRECATED = 256,
        /**
         * The signal accumulator was invoked for the first time.
         *
         * This flag is only used in [callback`GObject`.SignalAccumulator][accumulator functions]
         * for the `run_type` field of the [struct`GObject`.SignalInvocationHint], to
         * mark the first call to the accumulator function for a signal emission.
         */
        ACCUMULATOR_FIRST_RUN = 131072,
    }
    /**
     * The match types specify what g_signal_handlers_block_matched(),
     * g_signal_handlers_unblock_matched() and g_signal_handlers_disconnect_matched()
     * match signals by.
     */
    export namespace SignalMatchType {
        export const $gtype: GType<SignalMatchType>;
    }
    enum SignalMatchType {
        /**
         * The signal id must be equal.
         */
        ID = 1,
        /**
         * The signal detail must be equal.
         */
        DETAIL = 2,
        /**
         * The closure must be the same.
         */
        CLOSURE = 4,
        /**
         * The C closure callback must be the same.
         */
        FUNC = 8,
        /**
         * The closure data must be the same.
         */
        DATA = 16,
        /**
         * Only unblocked signals may be matched.
         */
        UNBLOCKED = 32,
    }
    /**
     * These flags used to be passed to g_type_init_with_debug_flags() which
     * is now deprecated.
     *
     * If you need to enable debugging features, use the `GOBJECT_DEBUG`
     * environment variable.
     */
    export namespace TypeDebugFlags {
        export const $gtype: GType<TypeDebugFlags>;
    }
    enum TypeDebugFlags {
        /**
         * Print no messages
         */
        NONE,
        /**
         * Print messages about object bookkeeping
         */
        OBJECTS = 1,
        /**
         * Print messages about signal emissions
         */
        SIGNALS = 2,
        /**
         * Keep a count of instances of each type
         */
        INSTANCE_COUNT = 4,
        /**
         * Mask covering all debug flags
         */
        MASK = 7,
    }
    /**
     * Bit masks used to check or determine characteristics of a type.
     */
    export namespace TypeFlags {
        export const $gtype: GType<TypeFlags>;
    }
    enum TypeFlags {
        /**
         * No special flags. Since: 2.74
         */
        NONE,
        /**
         * Indicates an abstract type. No instances can be
         *  created for an abstract type
         */
        ABSTRACT = 16,
        /**
         * Indicates an abstract value type, i.e. a type
         *  that introduces a value table, but can't be used for
         *  g_value_init()
         */
        VALUE_ABSTRACT = 32,
        /**
         * Indicates a final type. A final type is a non-derivable
         *  leaf node in a deep derivable type hierarchy tree. Since: 2.70
         */
        FINAL = 64,
        /**
         * The type is deprecated and may be removed in a
         *  future version. A warning will be emitted if it is instantiated while
         *  running with `G_ENABLE_DIAGNOSTIC=1`. Since 2.76
         */
        DEPRECATED = 128,
    }
    /**
     * Bit masks used to check or determine specific characteristics of a
     * fundamental type.
     */
    export namespace TypeFundamentalFlags {
        export const $gtype: GType<TypeFundamentalFlags>;
    }
    enum TypeFundamentalFlags {
        /**
         * Indicates a classed type
         */
        CLASSED = 1,
        /**
         * Indicates an instantiatable type (implies classed)
         */
        INSTANTIATABLE = 2,
        /**
         * Indicates a flat derivable type
         */
        DERIVABLE = 4,
        /**
         * Indicates a deep derivable type (implies derivable)
         */
        DEEP_DERIVABLE = 8,
    }
    namespace Binding {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::flags'(pspec: ParamSpec): void;
            'notify::source'(pspec: ParamSpec): void;
            'notify::source-property'(pspec: ParamSpec): void;
            'notify::target'(pspec: ParamSpec): void;
            'notify::target-property'(pspec: ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * Flags to be used to control the #GBinding
             */
            flags: BindingFlags;
            /**
             * The #GObject that should be used as the source of the binding
             */
            source: Object;
            /**
             * The name of the property of #GBinding:source that should be used
             * as the source of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            source_property: string;
            /**
             * The name of the property of #GBinding:source that should be used
             * as the source of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            sourceProperty: string;
            /**
             * The #GObject that should be used as the target of the binding
             */
            target: Object;
            /**
             * The name of the property of #GBinding:target that should be used
             * as the target of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            target_property: string;
            /**
             * The name of the property of #GBinding:target that should be used
             * as the target of the binding.
             *
             * This should be in [canonical form][canonical-parameter-names] to get the
             * best performance.
             */
            targetProperty: string;
        }
    }
    type Binding = (typeof classes.Binding)['prototype'];
    const Binding: typeof classes.Binding &
        (new <Opts extends MetaInfo>(
            properties?: Partial<GObject.Binding.ConstructorProps>,
            ...args: any[]
        ) => RegisteredClass<Opts, Binding.SignalSignatures> & classes.Binding);
    namespace BindingGroup {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::source'(pspec: ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The source object used for binding properties.
             */
            source: Object;
        }
    }
    type BindingGroup = (typeof classes.BindingGroup)['prototype'];
    const BindingGroup: typeof classes.BindingGroup &
        (new <Opts extends MetaInfo>(
            properties?: Partial<GObject.BindingGroup.ConstructorProps>,
            ...args: any[]
        ) => RegisteredClass<Opts, BindingGroup.SignalSignatures> & classes.BindingGroup);
    namespace InitiallyUnowned {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    type InitiallyUnowned = (typeof classes.InitiallyUnowned)['prototype'];
    const InitiallyUnowned: typeof classes.InitiallyUnowned &
        (new <Opts extends MetaInfo>(
            properties?: Partial<GObject.InitiallyUnowned.ConstructorProps>,
            ...args: any[]
        ) => RegisteredClass<Opts, InitiallyUnowned.SignalSignatures> & classes.InitiallyUnowned);
    namespace Object {
        // Signal signatures
        interface SignalSignatures {
            notify(arg0: ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps {}
    }
    type Object = (typeof classes.Object)['prototype'];
    const Object: typeof classes.Object &
        (new <Opts extends MetaInfo>(
            properties?: Partial<GObject.Object.ConstructorProps>,
            ...args: any[]
        ) => RegisteredClass<Opts, Object.SignalSignatures> & classes.Object);
    namespace ParamSpec {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }
    /**
     * A GObject parameter specification that defines property characteristics.
     * See https://gjs.guide/guides/gobject/basics.html#properties for more details.
     */
    abstract class ParamSpec<A = unknown> {
        static '$gtype': GType<ParamSpec>;
        // Fields
        name: string;
        flags: ParamFlags;
        value_type: GType;
        owner_type: GType;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof GObject.ParamSpec.SignalSignatures>(
            signal: K,
            callback: SignalCallback<this, GObject.ParamSpec.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GObject.ParamSpec.SignalSignatures>(
            signal: K,
            callback: SignalCallback<this, GObject.ParamSpec.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GObject.ParamSpec.SignalSignatures>(
            signal: K,
            ...args: GjsParameters<GObject.ParamSpec.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Validate a property name for a #GParamSpec. This can be useful for
         * dynamically-generated properties which need to be validated at run-time
         * before actually trying to create them.
         *
         * See [canonical parameter names][class`GObject`.ParamSpec#parameter-names]
         * for details of the rules for valid names.
         *
         * @param name the canonical name of the property
         */
        static is_valid_name(name: string): boolean;
        /**
         * Creates a new GParamSpecChar instance specifying a G_TYPE_CHAR property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static char(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecUChar instance specifying a G_TYPE_UCHAR property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static uchar(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecInt instance specifying a G_TYPE_INT property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static int(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecUInt instance specifying a G_TYPE_UINT property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static uint(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecLong instance specifying a G_TYPE_LONG property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static long(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecULong instance specifying a G_TYPE_ULONG property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static ulong(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecInt64 instance specifying a G_TYPE_INT64 property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static int64(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecUInt64 instance specifying a G_TYPE_UINT64 property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static uint64(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecFloat instance specifying a G_TYPE_FLOAT property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static float(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecBoolean instance specifying a G_TYPE_BOOLEAN property. In many cases, it may be more appropriate to use an enum with g_param_spec_enum(), both to improve code clarity by using explicitly named values, and to allow for more values to be added in future without breaking API.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param defaultValue The default value for this property (optional)
         */
        static boolean(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            defaultValue?: boolean,
        ): ParamSpec<boolean>;
        /**
         * Creates a new GParamSpecEnum instance specifying a G_TYPE_ENUM property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param enumType The GType for this property
         * @param defaultValue The default value for this property (optional)
         */
        static enum<T>(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            enumType: GType<T> | { $gtype: GType<T> },
            defaultValue?: any,
        ): ParamSpec<T>;
        /**
         * Creates a new GParamSpecDouble instance specifying a G_TYPE_DOUBLE property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param minimum The minimum value for this property
         * @param maximum The maximum value for this property
         * @param defaultValue The default value for this property (optional)
         */
        static double(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            minimum: number,
            maximum: number,
            defaultValue?: number,
        ): ParamSpec<number>;
        /**
         * Creates a new GParamSpecString instance specifying a G_TYPE_STRING property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param defaultValue The default value for this property (optional, defaults to null if not provided)
         */
        static string(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            defaultValue?: string | null,
        ): ParamSpec<string>;
        /**
         * Creates a new GParamSpecBoxed instance specifying a G_TYPE_BOXED derived property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param boxedType The GType for this property
         */
        static boxed<T>(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            boxedType: GType<T> | { $gtype: GType<T> },
        ): ParamSpec<T>;
        /**
         * Creates a new GParamSpecObject instance specifying a property holding object references.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param objectType The GType of the object (optional)
         */
        static object<T>(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            objectType?: GType<T> | { $gtype: GType<T> },
        ): ParamSpec<T>;
        /**
         * Creates a new GParamSpecParam instance specifying a G_TYPE_PARAM property.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         * @param paramType The GType for this property
         */
        static param(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
            paramType: any,
        ): ParamSpec;
        /**
         * Creates a new ParamSpec instance for JavaScript object properties.
         *
         * @param name The name of the property
         * @param nick A human readable name for the property (can be null)
         * @param blurb A longer description of the property (can be null)
         * @param flags The flags for this property (e.g. READABLE, WRITABLE)
         */
        static jsobject<T>(
            name: string,
            nick: string | null,
            blurb: string | null,
            flags: ParamFlags | number,
        ): ParamSpec<T>;
        // Virtual methods
        /**
         * The instance finalization function (optional), should chain
         *  up to the finalize method of the parent class.
         */
        vfunc_finalize(): void;
        /**
         * Checks if contents of `value` comply with the specifications
         *   set out by this type, without modifying the value. This vfunc is optional.
         *   If it isn't set, GObject will use `value_validate`. Since 2.74
         *
         * @param value
         */
        vfunc_value_is_valid(value: Value | any): boolean;
        /**
         * Resets a `value` to the default value for this type
         *  (recommended, the default is g_value_reset()), see
         *  g_param_value_set_default().
         *
         * @param value
         */
        vfunc_value_set_default(value: Value | any): void;
        /**
         * Ensures that the contents of `value` comply with the
         *  specifications set out by this type (optional), see
         *  g_param_value_validate().
         *
         * @param value
         */
        vfunc_value_validate(value: Value | any): boolean;
        /**
         * Compares `value1` with `value2` according to this type
         *  (recommended, the default is memcmp()), see g_param_values_cmp().
         *
         * @param _value1
         * @param _value2
         */
        vfunc_values_cmp(_value1: Value | any, _value2: Value | any): number;
        // Methods
        /**
         * Get the short description of a #GParamSpec.
         *
         * @returns the short description of `pspec`.
         */
        get_blurb(): string | null;
        /**
         * Gets the default value of `pspec` as a pointer to a #GValue.
         *
         * The #GValue will remain valid for the life of `pspec`.
         *
         * @returns a pointer to a #GValue which must not be modified
         */
        get_default_value(): unknown;
        /**
         * Get the name of a #GParamSpec.
         *
         * The name is always an "interned" string (as per g_intern_string()).
         * This allows for pointer-value comparisons.
         *
         * @returns the name of `pspec`.
         */
        get_name(): string;
        /**
         * Gets the GQuark for the name.
         *
         * @returns the GQuark for `pspec->`name.
         */
        get_name_quark(): GLib.Quark;
        /**
         * Get the nickname of a #GParamSpec.
         *
         * @returns the nickname of `pspec`.
         */
        get_nick(): string;
        /**
         * Gets back user data pointers stored via g_param_spec_set_qdata().
         *
         * @returns the user data pointer set, or %NULL
         * @param quark a #GQuark, naming the user data pointer
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * If the paramspec redirects operations to another paramspec,
         * returns that paramspec. Redirect is used typically for
         * providing a new implementation of a property in a derived
         * type while preserving all the properties from the parent
         * type. Redirection is established by creating a property
         * of type #GParamSpecOverride. See g_object_class_override_property()
         * for an example of the use of this capability.
         *
         * @returns paramspec to which requests on this
         *          paramspec should be redirected, or %NULL if none.
         */
        get_redirect_target(): ParamSpec | null;
        /**
         * Sets an opaque, named pointer on a #GParamSpec. The name is
         * specified through a #GQuark (retrieved e.g. via
         * g_quark_from_static_string()), and the pointer can be gotten back
         * from the `pspec` with g_param_spec_get_qdata().  Setting a
         * previously set user data pointer, overrides (frees) the old pointer
         * set, using %NULL as pointer essentially removes the data stored.
         *
         * @param quark a #GQuark, naming the user data pointer
         * @param data an opaque user data pointer
         */
        set_qdata(quark: GLib.Quark, data?: any | null): void;
        /**
         * The initial reference count of a newly created #GParamSpec is 1,
         * even though no one has explicitly called g_param_spec_ref() on it
         * yet. So the initial reference count is flagged as "floating", until
         * someone calls `g_param_spec_ref (pspec); g_param_spec_sink
         * (pspec);` in sequence on it, taking over the initial
         * reference count (thus ending up with a `pspec` that has a reference
         * count of 1 still, but is not flagged "floating" anymore).
         */
        sink(): void;
        /**
         * Gets back user data pointers stored via g_param_spec_set_qdata()
         * and removes the `data` from `pspec` without invoking its destroy()
         * function (if any was set).  Usually, calling this function is only
         * required to update user data pointers with a destroy notifier.
         *
         * @returns the user data pointer set, or %NULL
         * @param quark a #GQuark, naming the user data pointer
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Registers a property override for a property introduced in a parent class or inherited interface.
         *
         * @param name The name of the property to override
         * @param oclass The object class or type that contains the property to override
         */
        override(name: string, oclass: Object | Function | GType): void;
        __type__(arg: never): A;
    }
    namespace SignalGroup {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            bind(arg0: Object): void;
            unbind(): void;
            'notify::target'(pspec: ParamSpec): void;
            'notify::target-type'(pspec: ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            /**
             * The target instance used when connecting signals.
             */
            target: Object;
            /**
             * The #GType of the target property.
             */
            target_type: GType;
            /**
             * The #GType of the target property.
             */
            targetType: GType;
        }
    }
    type SignalGroup = (typeof classes.SignalGroup)['prototype'];
    const SignalGroup: typeof classes.SignalGroup &
        (new <Opts extends MetaInfo>(
            properties?: Partial<GObject.SignalGroup.ConstructorProps>,
            ...args: any[]
        ) => RegisteredClass<Opts, SignalGroup.SignalSignatures> & classes.SignalGroup);
    namespace TypeModule {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps, TypePlugin.ConstructorProps {}
    }
    type TypeModule = (typeof classes.TypeModule)['prototype'];
    const TypeModule: typeof classes.TypeModule &
        (abstract new <Opts extends MetaInfo>(
            properties?: Partial<GObject.TypeModule.ConstructorProps>,
            ...args: any[]
        ) => RegisteredClass<Opts, TypeModule.SignalSignatures> & classes.TypeModule);
    /**
     * A #GCClosure is a specialization of #GClosure for C function callbacks.
     */
    class CClosure {
        static '$gtype': GType<CClosure>;
        // Fields
        callback: any;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * A #GClosureMarshal function for use with signals with handlers that
         * take two boxed pointers as arguments and return a boolean.  If you
         * have such a signal, you will probably also need to use an
         * accumulator, such as g_signal_accumulator_true_handled().
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_BOOLEAN__BOXED_BOXED(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with handlers that
         * take a flags type as an argument and return a boolean.  If you have
         * such a signal, you will probably also need to use an accumulator,
         * such as g_signal_accumulator_true_handled().
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_BOOLEAN__FLAGS(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with handlers that
         * take a #GObject and a pointer and produce a string.  It is highly
         * unlikely that your signal handler fits this description.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_STRING__OBJECT_POINTER(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * boolean argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__BOOLEAN(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * argument which is any boxed pointer type.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__BOXED(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * character argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__CHAR(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with one
         * double-precision floating point argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__DOUBLE(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * argument with an enumerated type.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__ENUM(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * argument with a flags types.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__FLAGS(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with one
         * single-precision floating point argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__FLOAT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * integer argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__INT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with with a single
         * long integer argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__LONG(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * #GObject argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__OBJECT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * argument of type #GParamSpec.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__PARAM(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single raw
         * pointer argument type.
         *
         * If it is possible, it is better to use one of the more specific
         * functions such as g_cclosure_marshal_VOID__OBJECT() or
         * g_cclosure_marshal_VOID__OBJECT().
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__POINTER(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single string
         * argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__STRING(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * unsigned character argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__UCHAR(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with with a single
         * unsigned integer argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__UINT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with an unsigned int
         * and a pointer as arguments.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__UINT_POINTER(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * unsigned long integer argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__ULONG(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with a single
         * #GVariant argument.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__VARIANT(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A #GClosureMarshal function for use with signals with no arguments.
         *
         * @param closure A #GClosure.
         * @param return_value A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_VOID__VOID(
            closure: Closure,
            return_value: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
        /**
         * A generic marshaller function implemented via
         * [libffi](http://sourceware.org/libffi/).
         *
         * Normally this function is not passed explicitly to g_signal_new(),
         * but used automatically by GLib when specifying a %NULL marshaller.
         *
         * @param closure A #GClosure.
         * @param return_gvalue A #GValue to store the return value. May be %NULL
         *   if the callback of closure doesn't return a value.
         * @param n_param_values The length of the `param_values` array.
         * @param param_values An array of #GValues holding the arguments
         *   on which to invoke the callback of closure.
         * @param invocation_hint The invocation hint given as the last argument to
         *   g_closure_invoke().
         * @param marshal_data Additional data specified when registering the
         *   marshaller, see g_closure_set_marshal() and
         *   g_closure_set_meta_marshal()
         */
        static marshal_generic(
            closure: Closure,
            return_gvalue: Value | any,
            n_param_values: number,
            param_values: Value | any,
            invocation_hint?: any | null,
            marshal_data?: any | null,
        ): void;
    }
    class ClosureNotifyData {
        static '$gtype': GType<ClosureNotifyData>;
        // Fields
        data: any;
        notify: ClosureNotify;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * The class of an enumeration type holds information about its
     * possible values.
     */
    class EnumClass {
        static '$gtype': GType<EnumClass>;
        // Fields
        minimum: number;
        maximum: number;
        n_values: number;
        values: EnumValue;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A structure which contains a single enum value, its name, and its
     * nickname.
     */
    class EnumValue {
        static '$gtype': GType<EnumValue>;
        // Fields
        value: number;
        value_name: string;
        value_nick: string;
        // Constructors
        constructor(
            properties?: Partial<{
                value: number;
                value_name: string;
                value_nick: string;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * The class of a flags type holds information about its
     * possible values.
     */
    class FlagsClass {
        static '$gtype': GType<FlagsClass>;
        // Fields
        mask: number;
        n_values: number;
        values: FlagsValue;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A structure which contains a single flags value, its name, and its
     * nickname.
     */
    class FlagsValue {
        static '$gtype': GType<FlagsValue>;
        // Fields
        value: number;
        value_name: string;
        value_nick: string;
        // Constructors
        constructor(
            properties?: Partial<{
                value: number;
                value_name: string;
                value_nick: string;
            }>,
        );
        _init(...args: any[]): void;
    }
    export type InitiallyUnownedClass = typeof InitiallyUnowned;
    /**
     * A structure that provides information to the type system which is
     * used specifically for managing interface types.
     */
    class InterfaceInfo {
        static '$gtype': GType<InterfaceInfo>;
        // Fields
        interface_init: InterfaceInitFunc;
        interface_finalize: InterfaceFinalizeFunc;
        interface_data: any;
        // Constructors
        _init(...args: any[]): void;
    }
    export type ObjectClass = typeof Object;
    /**
     * The GObjectConstructParam struct is an auxiliary structure used to hand
     * #GParamSpec/#GValue pairs to the `constructor` of a #GObjectClass.
     */
    class ObjectConstructParam {
        static '$gtype': GType<ObjectConstructParam>;
        // Fields
        pspec: ParamSpec;
        // Constructors
        _init(...args: any[]): void;
    }
    export type ParamSpecClass = typeof ParamSpec;
    /**
     * A #GParamSpecPool maintains a collection of #GParamSpecs which can be
     * quickly accessed by owner and name.
     *
     * The implementation of the #GObject property system uses such a pool to
     * store the #GParamSpecs of the properties all object types.
     */
    abstract class ParamSpecPool {
        static '$gtype': GType<ParamSpecPool>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Frees the resources allocated by a #GParamSpecPool.
         */
        free(): void;
        /**
         * Inserts a #GParamSpec in the pool.
         *
         * @param pspec the #GParamSpec to insert
         * @param owner_type a #GType identifying the owner of `pspec`
         */
        insert(pspec: ParamSpec, owner_type: GType): void;
        /**
         * Gets an array of all #GParamSpecs owned by `owner_type` in
         * the pool.
         *
         * @returns a newly
         *          allocated array containing pointers to all #GParamSpecs
         *          owned by `owner_type` in the pool
         * @param owner_type the owner to look for
         */
        list(owner_type: GType): ParamSpec[];
        /**
         * Gets an #GList of all #GParamSpecs owned by `owner_type` in
         * the pool.
         *
         * @returns a
         *          #GList of all #GParamSpecs owned by `owner_type` in
         *          the pool#GParamSpecs.
         * @param owner_type the owner to look for
         */
        list_owned(owner_type: GType): ParamSpec[];
        /**
         * Looks up a #GParamSpec in the pool.
         *
         * @returns The found #GParamSpec, or %NULL if no
         * matching #GParamSpec was found.
         * @param param_name the name to look for
         * @param owner_type the owner to look for
         * @param walk_ancestors If %TRUE, also try to find a #GParamSpec with `param_name`
         *  owned by an ancestor of `owner_type`.
         */
        lookup(param_name: string, owner_type: GType, walk_ancestors: boolean): ParamSpec | null;
        /**
         * Removes a #GParamSpec from the pool.
         *
         * @param pspec the #GParamSpec to remove
         */
        remove(pspec: ParamSpec): void;
    }
    /**
     * This structure is used to provide the type system with the information
     * required to initialize and destruct (finalize) a parameter's class and
     * instances thereof.
     *
     * The initialized structure is passed to the g_param_type_register_static()
     * The type system will perform a deep copy of this structure, so its memory
     * does not need to be persistent across invocation of
     * g_param_type_register_static().
     */
    class ParamSpecTypeInfo {
        static '$gtype': GType<ParamSpecTypeInfo>;
        // Fields
        instance_size: number;
        n_preallocs: number;
        value_type: GType;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * The GParameter struct is an auxiliary structure used
     * to hand parameter name/value pairs to g_object_newv().
     */
    class Parameter {
        static '$gtype': GType<Parameter>;
        // Fields
        name: string;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * The #GSignalInvocationHint structure is used to pass on additional information
     * to callbacks during a signal emission.
     */
    class SignalInvocationHint {
        static '$gtype': GType<SignalInvocationHint>;
        // Fields
        signal_id: number;
        detail: GLib.Quark;
        run_type: SignalFlags;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A structure holding in-depth information for a specific signal.
     *
     * See also: g_signal_query()
     */
    class SignalQuery {
        static '$gtype': GType<SignalQuery>;
        // Fields
        signal_id: number;
        signal_name: string;
        itype: GType;
        signal_flags: SignalFlags;
        return_type: GType;
        n_params: number;
        param_types: GType[];
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * An opaque structure used as the base of all classes.
     */
    class TypeClass {
        static '$gtype': GType<TypeClass>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        static adjust_private_offset(g_class: any | null, private_size_or_offset: number): void;
        /**
         * Retrieves the type class of the given `type`.
         *
         * This function will create the class on demand if it does not exist
         * already.
         *
         * If you don't want to create the class, use g_type_class_peek() instead.
         *
         * @param type type ID of a classed type
         */
        static get(type: GType): TypeClass;
        /**
         * Retrieves the class for a give type.
         *
         * This function is essentially the same as g_type_class_get(),
         * except that the class may have not been instantiated yet.
         *
         * As a consequence, this function may return %NULL if the class
         * of the type passed in does not currently exist (hasn't been
         * referenced before).
         *
         * @param type type ID of a classed type
         */
        static peek(type: GType): TypeClass | null;
        /**
         * A more efficient version of g_type_class_peek() which works only for
         * static types.
         *
         * @param type type ID of a classed type
         */
        static peek_static(type: GType): TypeClass | null;
        /**
         * Increments the reference count of the class structure belonging to
         * `type`.
         *
         * This function will demand-create the class if it doesn't exist already.
         *
         * @param type type ID of a classed type
         */
        static ref(type: GType): TypeClass;
        // Methods
        /**
         * Registers a private structure for an instantiatable type.
         *
         * When an object is allocated, the private structures for
         * the type and all of its parent types are allocated
         * sequentially in the same memory block as the public
         * structures, and are zero-filled.
         *
         * Note that the accumulated size of the private structures of
         * a type and all its parent types cannot exceed 64 KiB.
         *
         * This function should be called in the type's class_init() function.
         * The private structure can be retrieved using the
         * G_TYPE_INSTANCE_GET_PRIVATE() macro.
         *
         * The following example shows attaching a private structure
         * MyObjectPrivate to an object MyObject defined in the standard
         * GObject fashion in the type's class_init() function.
         *
         * Note the use of a structure member "priv" to avoid the overhead
         * of repeatedly calling MY_OBJECT_GET_PRIVATE().
         *
         *
         * ```c
         * typedef struct _MyObject        MyObject;
         * typedef struct _MyObjectPrivate MyObjectPrivate;
         *
         * struct _MyObject {
         *  GObject parent;
         *
         *  MyObjectPrivate *priv;
         * };
         *
         * struct _MyObjectPrivate {
         *   int some_field;
         * };
         *
         * static void
         * my_object_class_init (MyObjectClass *klass)
         * {
         *   g_type_class_add_private (klass, sizeof (MyObjectPrivate));
         * }
         *
         * static void
         * my_object_init (MyObject *my_object)
         * {
         *   my_object->priv = G_TYPE_INSTANCE_GET_PRIVATE (my_object,
         *                                                  MY_TYPE_OBJECT,
         *                                                  MyObjectPrivate);
         *   // my_object->priv->some_field will be automatically initialised to 0
         * }
         *
         * static int
         * my_object_get_some_field (MyObject *my_object)
         * {
         *   MyObjectPrivate *priv;
         *
         *   g_return_val_if_fail (MY_IS_OBJECT (my_object), 0);
         *
         *   priv = my_object->priv;
         *
         *   return priv->some_field;
         * }
         * ```
         *
         *
         * @param private_size size of private structure
         */
        add_private(private_size: number): void;
        get_private(private_type: GType): any | null;
        /**
         * Retrieves the class structure of the immediate parent type of the
         * class passed in.
         *
         * This is a convenience function often needed in class initializers.
         *
         * Since derived classes hold a reference on their parent classes as
         * long as they are instantiated, the returned class will always exist.
         *
         * This function is essentially equivalent to:
         * g_type_class_peek (g_type_parent (G_TYPE_FROM_CLASS (g_class)))
         *
         * @returns the parent class
         *   of `g_class`
         */
        peek_parent(): TypeClass;
        /**
         * Decrements the reference count of the class structure being passed in.
         *
         * Once the last reference count of a class has been released, classes
         * may be finalized by the type system, so further dereferencing of a
         * class pointer after g_type_class_unref() are invalid.
         */
        unref(): void;
    }
    /**
     * A structure that provides information to the type system which is
     * used specifically for managing fundamental types.
     */
    class TypeFundamentalInfo {
        static '$gtype': GType<TypeFundamentalInfo>;
        // Fields
        type_flags: TypeFundamentalFlags;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * This structure is used to provide the type system with the information
     * required to initialize and destruct (finalize) a type's class and
     * its instances.
     *
     * The initialized structure is passed to the g_type_register_static() function
     * (or is copied into the provided #GTypeInfo structure in the
     * g_type_plugin_complete_type_info()). The type system will perform a deep
     * copy of this structure, so its memory does not need to be persistent
     * across invocation of g_type_register_static().
     */
    class TypeInfo {
        static '$gtype': GType<TypeInfo>;
        // Fields
        class_size: number;
        base_init: BaseInitFunc;
        base_finalize: BaseFinalizeFunc;
        class_init: ClassInitFunc;
        class_finalize: ClassFinalizeFunc;
        class_data: any;
        instance_size: number;
        n_preallocs: number;
        instance_init: InstanceInitFunc;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * An opaque structure used as the base of all type instances.
     */
    class TypeInstance {
        static '$gtype': GType<TypeInstance>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        get_private(private_type: GType): any | null;
    }
    /**
     * An opaque structure used as the base of all interface types.
     */
    class TypeInterface {
        static '$gtype': GType<TypeInterface>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Adds `prerequisite_type` to the list of prerequisites of `interface_type`.
         * This means that any type implementing `interface_type` must also implement
         * `prerequisite_type`. Prerequisites can be thought of as an alternative to
         * interface derivation (which GType doesn't support). An interface can have
         * at most one instantiatable prerequisite type.
         *
         * @param interface_type #GType value of an interface type
         * @param prerequisite_type #GType value of an interface or instantiatable type
         */
        static add_prerequisite(interface_type: GType, prerequisite_type: GType): void;
        /**
         * Returns the #GTypePlugin structure for the dynamic interface
         * `interface_type` which has been added to `instance_type,` or %NULL
         * if `interface_type` has not been added to `instance_type` or does
         * not have a #GTypePlugin structure. See g_type_add_interface_dynamic().
         *
         * @param instance_type #GType of an instantiatable type
         * @param interface_type #GType of an interface type
         */
        static get_plugin(instance_type: GType, interface_type: GType): TypePlugin;
        /**
         * Returns the most specific instantiatable prerequisite of an
         * interface type. If the interface type has no instantiatable
         * prerequisite, %G_TYPE_INVALID is returned.
         *
         * See g_type_interface_add_prerequisite() for more information
         * about prerequisites.
         *
         * @param interface_type an interface type
         */
        static instantiatable_prerequisite(interface_type: GType): GType;
        /**
         * Returns the #GTypeInterface structure of an interface to which the
         * passed in class conforms.
         *
         * @param instance_class a #GTypeClass structure
         * @param iface_type an interface ID which this class conforms to
         */
        static peek(instance_class: TypeClass, iface_type: GType): TypeInterface | null;
        /**
         * Returns the prerequisites of an interfaces type.
         *
         * @param interface_type an interface type
         */
        static prerequisites(interface_type: GType): GType[];
        // Methods
        /**
         * Returns the corresponding #GTypeInterface structure of the parent type
         * of the instance type to which `g_iface` belongs.
         *
         * This is useful when deriving the implementation of an interface from the
         * parent type and then possibly overriding some methods.
         *
         * @returns the
         *   corresponding #GTypeInterface structure of the parent type of the
         *   instance type to which `g_iface` belongs, or %NULL if the parent
         *   type doesn't conform to the interface
         */
        peek_parent(): TypeInterface | null;
    }
    export type TypeModuleClass = typeof TypeModule;
    /**
     * The #GTypePlugin interface is used by the type system in order to handle
     * the lifecycle of dynamically loaded types.
     */
    class TypePluginClass {
        static '$gtype': GType<TypePluginClass>;
        // Fields
        use_plugin: TypePluginUse;
        unuse_plugin: TypePluginUnuse;
        complete_type_info: TypePluginCompleteTypeInfo;
        complete_interface_info: TypePluginCompleteInterfaceInfo;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A structure holding information for a specific type.
     *
     * See also: g_type_query()
     */
    class TypeQuery {
        static '$gtype': GType<TypeQuery>;
        // Fields
        type: GType;
        type_name: string;
        class_size: number;
        instance_size: number;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * - `'i'`: Integers, passed as `collect_values[].v_int`
     *   - `'l'`: Longs, passed as `collect_values[].v_long`
     *   - `'d'`: Doubles, passed as `collect_values[].v_double`
     *   - `'p'`: Pointers, passed as `collect_values[].v_pointer`
     *
     *   It should be noted that for variable argument list construction,
     *   ANSI C promotes every type smaller than an integer to an int, and
     *   floats to doubles. So for collection of short int or char, `'i'`
     *   needs to be used, and for collection of floats `'d'`.
     * The #GTypeValueTable provides the functions required by the #GValue
     * implementation, to serve as a container for values of a type.
     */
    class TypeValueTable {
        static '$gtype': GType<TypeValueTable>;
        // Fields
        value_init: TypeValueInitFunc;
        value_free: TypeValueFreeFunc;
        value_copy: TypeValueCopyFunc;
        value_peek_pointer: TypeValuePeekPointerFunc;
        collect_format: string;
        collect_value: TypeValueCollectFunc;
        lcopy_format: string;
        lcopy_value: TypeValueLCopyFunc;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * An opaque structure used to hold different types of values.
     *
     * The data within the structure has protected scope: it is accessible only
     * to functions within a #GTypeValueTable structure, or implementations of
     * the g_value_*() API. That is, code portions which implement new fundamental
     * types.
     *
     * #GValue users cannot make any assumptions about how data is stored
     * within the 2 element `data` union, and the `g_type` member should
     * only be accessed through the G_VALUE_TYPE() macro.
     */
    class Value {
        static '$gtype': GType<Value>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Returns whether a #GValue of type `src_type` can be copied into
         * a #GValue of type `dest_type`.
         *
         * @param src_type source type to be copied.
         * @param dest_type destination type for copying.
         */
        static type_compatible(src_type: GType, dest_type: GType): boolean;
        /**
         * Check whether g_value_transform() is able to transform values
         * of type `src_type` into values of type `dest_type`. Note that for
         * the types to be transformable, they must be compatible or a
         * transformation function must be registered.
         *
         * @param src_type Source type.
         * @param dest_type Target type.
         */
        static type_transformable(src_type: GType, dest_type: GType): boolean;
        // Methods
        /**
         * Copies the value of `src_value` into `dest_value`.
         *
         * @param dest_value An initialized #GValue structure of the same type as `src_value`.
         */
        copy(dest_value: Value | any): void;
        /**
         * Get the contents of a %G_TYPE_OBJECT derived #GValue, increasing
         * its reference count. If the contents of the #GValue are %NULL, then
         * %NULL will be returned.
         *
         * @returns object content of `value,`
         *          should be unreferenced when no longer needed.
         */
        dup_object<T = Object>(): T;
        /**
         * Get a copy the contents of a %G_TYPE_STRING #GValue.
         *
         * @returns a newly allocated copy of the string content of `value`
         */
        dup_string(): string | null;
        /**
         * Get the contents of a variant #GValue, increasing its refcount. The returned
         * #GVariant is never floating.
         *
         * @returns variant contents of `value` (may be %NULL);
         *    should be unreffed using g_variant_unref() when no longer needed
         */
        dup_variant(): GLib.Variant | null;
        /**
         * Determines if `value` will fit inside the size of a pointer value.
         * This is an internal function introduced mainly for C marshallers.
         *
         * @returns %TRUE if `value` will fit inside a pointer value.
         */
        fits_pointer(): boolean;
        /**
         * Get the contents of a %G_TYPE_BOOLEAN #GValue.
         *
         * @returns boolean contents of `value`
         */
        get_boolean(): boolean;
        /**
         * Get the contents of a %G_TYPE_BOXED derived #GValue.
         *
         * @returns boxed contents of `value`
         */
        get_boxed(): any | null;
        /**
         * Do not use this function; it is broken on platforms where the %char
         * type is unsigned, such as ARM and PowerPC.  See g_value_get_schar().
         *
         * Get the contents of a %G_TYPE_CHAR #GValue.
         *
         * @returns character contents of `value`
         */
        get_char(): number;
        /**
         * Get the contents of a %G_TYPE_DOUBLE #GValue.
         *
         * @returns double contents of `value`
         */
        get_double(): number;
        /**
         * Get the contents of a %G_TYPE_ENUM #GValue.
         *
         * @returns enum contents of `value`
         */
        get_enum(): number;
        /**
         * Get the contents of a %G_TYPE_FLAGS #GValue.
         *
         * @returns flags contents of `value`
         */
        get_flags(): number;
        /**
         * Get the contents of a %G_TYPE_FLOAT #GValue.
         *
         * @returns float contents of `value`
         */
        get_float(): number;
        /**
         * Get the contents of a %G_TYPE_GTYPE #GValue.
         *
         * @returns the #GType stored in `value`
         */
        get_gtype(): GType;
        /**
         * Get the contents of a %G_TYPE_INT #GValue.
         *
         * @returns integer contents of `value`
         */
        get_int(): number;
        /**
         * Get the contents of a %G_TYPE_INT64 #GValue.
         *
         * @returns 64bit integer contents of `value`
         */
        get_int64(): number;
        /**
         * Get the contents of a %G_TYPE_LONG #GValue.
         *
         * @returns long integer contents of `value`
         */
        get_long(): number;
        /**
         * Get the contents of a %G_TYPE_OBJECT derived #GValue.
         *
         * @returns object contents of `value`
         */
        get_object<T = Object>(): T;
        /**
         * Get the contents of a %G_TYPE_PARAM #GValue.
         *
         * @returns #GParamSpec content of `value`
         */
        get_param(): ParamSpec;
        /**
         * Get the contents of a pointer #GValue.
         *
         * @returns pointer contents of `value`
         */
        get_pointer(): any | null;
        /**
         * Get the contents of a %G_TYPE_CHAR #GValue.
         *
         * @returns signed 8 bit integer contents of `value`
         */
        get_schar(): number;
        /**
         * Get the contents of a %G_TYPE_STRING #GValue.
         *
         * @returns string content of `value`
         */
        get_string(): string | null;
        /**
         * Get the contents of a %G_TYPE_UCHAR #GValue.
         *
         * @returns unsigned character contents of `value`
         */
        get_uchar(): number;
        /**
         * Get the contents of a %G_TYPE_UINT #GValue.
         *
         * @returns unsigned integer contents of `value`
         */
        get_uint(): number;
        /**
         * Get the contents of a %G_TYPE_UINT64 #GValue.
         *
         * @returns unsigned 64bit integer contents of `value`
         */
        get_uint64(): number;
        /**
         * Get the contents of a %G_TYPE_ULONG #GValue.
         *
         * @returns unsigned long integer contents of `value`
         */
        get_ulong(): number;
        /**
         * Get the contents of a variant #GValue.
         *
         * @returns variant contents of `value` (may be %NULL)
         */
        get_variant(): GLib.Variant | null;
        /**
         * Initializes `value` with the default value of `type`.
         *
         * @returns the #GValue structure that has been passed in
         * @param g_type Type the #GValue should hold values of.
         */
        init(g_type: GType): unknown;
        /**
         * Initializes and sets `value` from an instantiatable type via the
         * value_table's collect_value() function.
         *
         * Note: The `value` will be initialised with the exact type of
         * `instance`.  If you wish to set the `value'`s type to a different GType
         * (such as a parent class GType), you need to manually call
         * g_value_init() and g_value_set_instance().
         *
         * @param instance the instance
         */
        init_from_instance(instance: TypeInstance): void;
        /**
         * Returns the value contents as pointer. This function asserts that
         * g_value_fits_pointer() returned %TRUE for the passed in value.
         * This is an internal function introduced mainly for C marshallers.
         *
         * @returns the value contents as pointer
         */
        peek_pointer(): any | null;
        /**
         * Clears the current value in `value` and resets it to the default value
         * (as if the value had just been initialized).
         *
         * @returns the #GValue structure that has been passed in
         */
        reset(): unknown;
        /**
         * Set the contents of a %G_TYPE_BOOLEAN #GValue to `v_boolean`.
         *
         * @param v_boolean boolean value to be set
         */
        set_boolean(v_boolean: boolean): void;
        /**
         * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
         *
         * @param v_boxed boxed value to be set
         */
        set_boxed(v_boxed?: any | null): void;
        /**
         * This is an internal function introduced mainly for C marshallers.
         *
         * @param v_boxed duplicated unowned boxed value to be set
         */
        set_boxed_take_ownership(v_boxed?: any | null): void;
        /**
         * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
         *
         * @param v_char character value to be set
         */
        set_char(v_char: number): void;
        /**
         * Set the contents of a %G_TYPE_DOUBLE #GValue to `v_double`.
         *
         * @param v_double double value to be set
         */
        set_double(v_double: number): void;
        /**
         * Set the contents of a %G_TYPE_ENUM #GValue to `v_enum`.
         *
         * @param v_enum enum value to be set
         */
        set_enum(v_enum: number): void;
        /**
         * Set the contents of a %G_TYPE_FLAGS #GValue to `v_flags`.
         *
         * @param v_flags flags value to be set
         */
        set_flags(v_flags: number): void;
        /**
         * Set the contents of a %G_TYPE_FLOAT #GValue to `v_float`.
         *
         * @param v_float float value to be set
         */
        set_float(v_float: number): void;
        /**
         * Set the contents of a %G_TYPE_GTYPE #GValue to `v_gtype`.
         *
         * @param v_gtype #GType to be set
         */
        set_gtype(v_gtype: GType): void;
        /**
         * Sets `value` from an instantiatable type via the
         * value_table's collect_value() function.
         *
         * @param instance the instance
         */
        set_instance(instance?: any | null): void;
        /**
         * Set the contents of a %G_TYPE_INT #GValue to `v_int`.
         *
         * @param v_int integer value to be set
         */
        set_int(v_int: number): void;
        /**
         * Set the contents of a %G_TYPE_INT64 #GValue to `v_int6`4.
         *
         * @param _v_int64 64bit integer value to be set
         */
        set_int64(_v_int64: number): void;
        /**
         * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.  The string is
         * assumed to be static and interned (canonical, for example from
         * g_intern_string()), and is thus not duplicated when setting the #GValue.
         *
         * @param v_string static string to be set
         */
        set_interned_string(v_string?: string | null): void;
        /**
         * Set the contents of a %G_TYPE_LONG #GValue to `v_long`.
         *
         * @param v_long long integer value to be set
         */
        set_long(v_long: number): void;
        /**
         * Set the contents of a %G_TYPE_OBJECT derived #GValue to `v_object`.
         *
         * g_value_set_object() increases the reference count of `v_object`
         * (the #GValue holds a reference to `v_object)`.  If you do not wish
         * to increase the reference count of the object (i.e. you wish to
         * pass your current reference to the #GValue because you no longer
         * need it), use g_value_take_object() instead.
         *
         * It is important that your #GValue holds a reference to `v_object` (either its
         * own, or one it has taken) to ensure that the object won't be destroyed while
         * the #GValue still exists).
         *
         * @param v_object object value to be set
         */
        set_object(v_object?: Object | null): void;
        /**
         * Set the contents of a %G_TYPE_PARAM #GValue to `param`.
         *
         * @param param the #GParamSpec to be set
         */
        set_param(param?: ParamSpec | null): void;
        /**
         * Set the contents of a pointer #GValue to `v_pointer`.
         *
         * @param v_pointer pointer value to be set
         */
        set_pointer(v_pointer?: any | null): void;
        /**
         * Set the contents of a %G_TYPE_CHAR #GValue to `v_char`.
         *
         * @param v_char signed 8 bit integer to be set
         */
        set_schar(v_char: number): void;
        /**
         * Set the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`.
         *
         * The boxed value is assumed to be static, and is thus not duplicated
         * when setting the #GValue.
         *
         * @param v_boxed static boxed value to be set
         */
        set_static_boxed(v_boxed?: any | null): void;
        /**
         * Set the contents of a %G_TYPE_STRING #GValue to `v_string`.
         * The string is assumed to be static, and is thus not duplicated
         * when setting the #GValue.
         *
         * If the the string is a canonical string, using g_value_set_interned_string()
         * is more appropriate.
         *
         * @param v_string static string to be set
         */
        set_static_string(v_string?: string | null): void;
        /**
         * Set the contents of a %G_TYPE_STRING #GValue to a copy of `v_string`.
         *
         * @param v_string caller-owned string to be duplicated for the #GValue
         */
        set_string(v_string?: string | null): void;
        /**
         * This is an internal function introduced mainly for C marshallers.
         *
         * @param v_string duplicated unowned string to be set
         */
        set_string_take_ownership(v_string?: string | null): void;
        /**
         * Set the contents of a %G_TYPE_UCHAR #GValue to `v_uchar`.
         *
         * @param v_uchar unsigned character value to be set
         */
        set_uchar(v_uchar: number): void;
        /**
         * Set the contents of a %G_TYPE_UINT #GValue to `v_uint`.
         *
         * @param v_uint unsigned integer value to be set
         */
        set_uint(v_uint: number): void;
        /**
         * Set the contents of a %G_TYPE_UINT64 #GValue to `v_uint6`4.
         *
         * @param _v_uint64 unsigned 64bit integer value to be set
         */
        set_uint64(_v_uint64: number): void;
        /**
         * Set the contents of a %G_TYPE_ULONG #GValue to `v_ulong`.
         *
         * @param v_ulong unsigned long integer value to be set
         */
        set_ulong(v_ulong: number): void;
        /**
         * Set the contents of a variant #GValue to `variant`.
         * If the variant is floating, it is consumed.
         *
         * @param variant a #GVariant, or %NULL
         */
        set_variant(variant?: GLib.Variant | null): void;
        /**
         * Steal ownership on contents of a %G_TYPE_STRING #GValue.
         * As a result of this operation the value's contents will be reset to %NULL.
         *
         * The purpose of this call is to provide a way to avoid an extra copy
         * when some object have been serialized into string through #GValue API.
         *
         * NOTE: for safety and compatibility purposes, if #GValue contains
         * static string, or an interned one, this function will return a copy
         * of the string. Otherwise the transfer notation would be ambiguous.
         *
         * @returns string content of `value;`
         *  Should be freed with g_free() when no longer needed.
         */
        steal_string(): string | null;
        /**
         * Sets the contents of a %G_TYPE_BOXED derived #GValue to `v_boxed`
         * and takes over the ownership of the caller’s reference to `v_boxed;`
         * the caller doesn’t have to unref it any more.
         *
         * @param v_boxed duplicated unowned boxed value to be set
         */
        take_boxed(v_boxed?: any | null): void;
        /**
         * Sets the contents of a %G_TYPE_STRING #GValue to `v_string`.
         *
         * @param v_string string to take ownership of
         */
        take_string(v_string?: string | null): void;
        /**
         * Set the contents of a variant #GValue to `variant,` and takes over
         * the ownership of the caller's reference to `variant;`
         * the caller doesn't have to unref it any more (i.e. the reference
         * count of the variant is not increased).
         *
         * If `variant` was floating then its floating reference is converted to
         * a hard reference.
         *
         * If you want the #GValue to hold its own reference to `variant,` use
         * g_value_set_variant() instead.
         *
         * This is an internal function introduced mainly for C marshallers.
         *
         * @param variant a #GVariant, or %NULL
         */
        take_variant(variant?: GLib.Variant | null): void;
        /**
         * Tries to cast the contents of `src_value` into a type appropriate
         * to store in `dest_value,` e.g. to transform a %G_TYPE_INT value
         * into a %G_TYPE_FLOAT value. Performing transformations between
         * value types might incur precision lossage. Especially
         * transformations into strings might reveal seemingly arbitrary
         * results and shouldn't be relied upon for production code (such
         * as rcfile value or object property serialization).
         *
         * @returns Whether a transformation rule was found and could be applied.
         *  Upon failing transformations, `dest_value` is left untouched.
         * @param dest_value Target value.
         */
        transform(dest_value: Value | any): boolean;
        /**
         * Clears the current value in `value` (if any) and "unsets" the type,
         * this releases all resources associated with this GValue. An unset
         * value is the same as an uninitialized (zero-filled) #GValue
         * structure.
         */
        unset(): void;
    }
    /**
     * A `GValueArray` is a container structure to hold an array of generic values.
     *
     * The prime purpose of a `GValueArray` is for it to be used as an
     * object property that holds an array of values. A `GValueArray` wraps
     * an array of `GValue` elements in order for it to be used as a boxed
     * type through `G_TYPE_VALUE_ARRAY`.
     *
     * `GValueArray` is deprecated in favour of `GArray` since GLib 2.32.
     * It is possible to create a `GArray` that behaves like a `GValueArray`
     * by using the size of `GValue` as the element size, and by setting
     * [method`GObject`.Value.unset] as the clear function using
     * [func`GLib`.Array.set_clear_func], for instance, the following code:
     *
     * ```c
     *   GValueArray *array = g_value_array_new (10);
     * ```
     *
     * can be replaced by:
     *
     * ```c
     *   GArray *array = g_array_sized_new (FALSE, TRUE, sizeof (GValue), 10);
     *   g_array_set_clear_func (array, (GDestroyNotify) g_value_unset);
     * ```
     */
    class ValueArray {
        static '$gtype': GType<ValueArray>;
        // Fields
        n_values: number;
        // Constructors
        constructor(n_prealloced: number);
        _init(...args: any[]): void;
        static new(n_prealloced: number): ValueArray;
        // Methods
        /**
         * Insert a copy of `value` as last element of `value_array`. If `value` is
         * %NULL, an uninitialized value is appended.
         *
         * @returns the #GValueArray passed in as `value_array`
         * @param value #GValue to copy into #GValueArray, or %NULL
         */
        append(value?: Value | null): ValueArray;
        /**
         * Construct an exact copy of a #GValueArray by duplicating all its
         * contents.
         *
         * @returns Newly allocated copy of #GValueArray
         */
        copy(): ValueArray;
        /**
         * Return a pointer to the value at `index_` contained in `value_array`.
         *
         * @returns pointer to a value at `index_` in `value_array`
         * @param index_ index of the value of interest
         */
        get_nth(index_: number): unknown;
        /**
         * Insert a copy of `value` at specified position into `value_array`. If `value`
         * is %NULL, an uninitialized value is inserted.
         *
         * @returns the #GValueArray passed in as `value_array`
         * @param index_ insertion position, must be <= value_array->;n_values
         * @param value #GValue to copy into #GValueArray, or %NULL
         */
        insert(index_: number, value?: Value | null): ValueArray;
        /**
         * Insert a copy of `value` as first element of `value_array`. If `value` is
         * %NULL, an uninitialized value is prepended.
         *
         * @returns the #GValueArray passed in as `value_array`
         * @param value #GValue to copy into #GValueArray, or %NULL
         */
        prepend(value?: Value | null): ValueArray;
        /**
         * Remove the value at position `index_` from `value_array`.
         *
         * @returns the #GValueArray passed in as `value_array`
         * @param index_ position of value to remove, which must be less than
         *     `value_array->`n_values
         */
        remove(index_: number): ValueArray;
        /**
         * Sort `value_array` using `compare_func` to compare the elements according to
         * the semantics of #GCompareFunc.
         *
         * The current implementation uses the same sorting algorithm as standard
         * C qsort() function.
         *
         * @returns the #GValueArray passed in as `value_array`
         * @param compare_func function to compare elements
         */
        sort(compare_func: GLib.CompareFunc): ValueArray;
        /**
         * Sort `value_array` using `compare_func` to compare the elements according
         * to the semantics of #GCompareDataFunc.
         *
         * The current implementation uses the same sorting algorithm as standard
         * C qsort() function.
         *
         * @returns the #GValueArray passed in as `value_array`
         * @param compare_func function to compare elements
         */
        sort(compare_func: GLib.CompareDataFunc): ValueArray;
    }
    /**
     * A structure containing a weak reference to a #GObject.
     *
     * A `GWeakRef` can either be empty (i.e. point to %NULL), or point to an
     * object for as long as at least one "strong" reference to that object
     * exists. Before the object's #GObjectClass.dispose method is called,
     * every #GWeakRef associated with becomes empty (i.e. points to %NULL).
     *
     * Like #GValue, #GWeakRef can be statically allocated, stack- or
     * heap-allocated, or embedded in larger structures.
     *
     * Unlike g_object_weak_ref() and g_object_add_weak_pointer(), this weak
     * reference is thread-safe: converting a weak pointer to a reference is
     * atomic with respect to invalidation of weak pointers to destroyed
     * objects.
     *
     * If the object's #GObjectClass.dispose method results in additional
     * references to the object being held (‘re-referencing’), any #GWeakRefs taken
     * before it was disposed will continue to point to %NULL.  Any #GWeakRefs taken
     * during disposal and after re-referencing, or after disposal has returned due
     * to the re-referencing, will continue to point to the object until its refcount
     * goes back to zero, at which point they too will be invalidated.
     *
     * It is invalid to take a #GWeakRef on an object during #GObjectClass.dispose
     * without first having or creating a strong reference to the object.
     */
    class WeakRef {
        static '$gtype': GType<WeakRef>;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A union holding one collected value.
     */
    class TypeCValue {
        static '$gtype': GType<TypeCValue>;
        // Fields
        v_int: number;
        v_long: number;
        'v_int64': number;
        v_double: number;
        v_pointer: any;
        // Constructors
        constructor(
            properties?: Partial<{
                v_int: number;
                v_long: number;
                v_int64: number;
                v_double: number;
                v_pointer: any;
            }>,
        );
        _init(...args: any[]): void;
    }
    class _Value__data__union {
        static '$gtype': GType<_Value__data__union>;
        // Fields
        v_int: number;
        v_uint: number;
        v_long: number;
        v_ulong: number;
        'v_int64': number;
        'v_uint64': number;
        v_float: number;
        v_double: number;
        v_pointer: any;
        // Constructors
        constructor(
            properties?: Partial<{
                v_int: number;
                v_uint: number;
                v_long: number;
                v_ulong: number;
                v_int64: number;
                v_uint64: number;
                v_float: number;
                v_double: number;
                v_pointer: any;
            }>,
        );
        _init(...args: any[]): void;
    }
    namespace TypePlugin {
        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }
    export interface TypePluginNamespace {
        $gtype: GType<TypePlugin>;
        prototype: TypePlugin;
    }
    interface TypePlugin extends Object {
        // Methods
        /**
         * Calls the `complete_interface_info` function from the
         * #GTypePluginClass of `plugin`. There should be no need to use this
         * function outside of the GObject type system itself.
         *
         * @param instance_type the #GType of an instantiatable type to which the interface
         *  is added
         * @param interface_type the #GType of the interface whose info is completed
         * @param info the #GInterfaceInfo to fill in
         */
        complete_interface_info(instance_type: GType, interface_type: GType, info: InterfaceInfo): void;
        /**
         * Calls the `complete_type_info` function from the #GTypePluginClass of `plugin`.
         * There should be no need to use this function outside of the GObject
         * type system itself.
         *
         * @param g_type the #GType whose info is completed
         * @param info the #GTypeInfo struct to fill in
         * @param value_table the #GTypeValueTable to fill in
         */
        complete_type_info(g_type: GType, info: TypeInfo, value_table: TypeValueTable): void;
        /**
         * Calls the `unuse_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        unuse(): void;
        /**
         * Calls the `use_plugin` function from the #GTypePluginClass of
         * `plugin`.  There should be no need to use this function outside of
         * the GObject type system itself.
         */
        use(): void;
    }
    export const TypePlugin: TypePluginNamespace & (new () => TypePlugin);
    export type SignalCMarshaller = ClosureMarshal;
    export type SignalCVaMarshaller = unknown;
    export type Type = number;
    interface SignalMatch {
        // Fields
        signalId: string;
        detail: string;
        func: any;
    }
    export type Closure<R = any, P = any> = (...args: P[]) => R;
    function signal_handlers_block_by_func(instance: Object, func: any): void;
    function signal_handlers_unblock_by_func(instance: Object, func: any): void;
    function signal_handlers_disconnect_by_func(instance: Object, func: any): void;
    function signal_handler_find(
        ...args:
            | [Object, SignalMatch]
            | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
    ): number;
    function signal_handler_find(instance: Object, match: SignalMatch): number;
    function signal_handler_find(
        instance: Object,
        match: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        closure: Closure | null,
        func: object | null,
        object: object | null,
    ): number;
    function _real_signal_handler_find(
        instance: Object,
        match: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        closure: Closure | null,
        func: object | null,
        object: object | null,
    ): number;
    function signal_handler_block_matched(
        ...args:
            | [Object, SignalMatch]
            | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
    ): number;
    function signal_handler_block_matched(instance: Object, match: SignalMatch): number;
    function signal_handler_block_matched(
        instance: Object,
        match: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        closure: Closure | null,
        func: object | null,
        object: object | null,
    ): number;
    function _real_signal_handler_block_matched(
        instance: Object,
        match: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        closure: Closure | null,
        func: object | null,
        object: object | null,
    ): number;
    function signal_handler_block_disconnect_matched(
        ...args:
            | [Object, SignalMatch]
            | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
    ): number;
    function signal_handler_block_disconnect_matched(instance: Object, match: SignalMatch): number;
    function signal_handler_block_disconnect_matched(
        instance: Object,
        match: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        closure: Closure | null,
        func: object | null,
        object: object | null,
    ): number;
    function _real_signal_handler_block_disconnect_matched(
        instance: Object,
        match: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        closure: Closure | null,
        func: object | null,
        object: object | null,
    ): number;
    function signal_handler_block_unblock_matched(
        ...args:
            | [Object, SignalMatch]
            | [Object, SignalMatchType, number, GLib.Quark, Closure | null, object | null, object | null]
    ): number;
    function signal_handler_block_unblock_matched(instance: Object, match: SignalMatch): number;
    function signal_handler_block_unblock_matched(
        instance: Object,
        match: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        closure: Closure | null,
        func: object | null,
        object: object | null,
    ): number;
    function _real_signal_handler_block_unblock_matched(
        instance: Object,
        match: SignalMatchType,
        signal_id: number,
        detail: GLib.Quark,
        closure: Closure | null,
        func: object | null,
        object: object | null,
    ): number;
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
export default GObject;
