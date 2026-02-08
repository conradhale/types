import type Pango from './pango-1.0.d.ts';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
declare namespace classes {
    class Context extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Context>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.Context.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Pango.Context.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Pango.Context;
        // Signals
        connect<K extends keyof Pango.Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.Context.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Forces a change in the context, which will cause any `PangoLayout`
         * using this context to re-layout.
         *
         * This function is only useful when implementing a new backend
         * for Pango, something applications won't do. Backends should
         * call this function if they have attached extra data to the context
         * and such data is changed.
         */
        changed(): void;
        /**
         * Retrieves the base direction for the context.
         *
         * See [method`Pango`.Context.set_base_dir].
         *
         * @returns the base direction for the context.
         */
        get_base_dir(): Pango.Direction;
        /**
         * Retrieves the base gravity for the context.
         *
         * See [method`Pango`.Context.set_base_gravity].
         *
         * @returns the base gravity for the context.
         */
        get_base_gravity(): Pango.Gravity;
        /**
         * Retrieve the default font description for the context.
         *
         * @returns a pointer to the context's default font
         *   description. This value must not be modified or freed.
         */
        get_font_description(): Pango.FontDescription | null;
        /**
         * Gets the `PangoFontMap` used to look up fonts for this context.
         *
         * @returns the font map for the.
         *   `PangoContext` This value is owned by Pango and should not be
         *   unreferenced.
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Retrieves the gravity for the context.
         *
         * This is similar to [method`Pango`.Context.get_base_gravity],
         * except for when the base gravity is %PANGO_GRAVITY_AUTO for
         * which [func`Pango`.Gravity.get_for_matrix] is used to return the
         * gravity from the current context matrix.
         *
         * @returns the resolved gravity for the context.
         */
        get_gravity(): Pango.Gravity;
        /**
         * Retrieves the gravity hint for the context.
         *
         * See [method`Pango`.Context.set_gravity_hint] for details.
         *
         * @returns the gravity hint for the context.
         */
        get_gravity_hint(): Pango.GravityHint;
        /**
         * Retrieves the global language tag for the context.
         *
         * @returns the global language tag.
         */
        get_language(): Pango.Language;
        /**
         * Gets the transformation matrix that will be applied when
         * rendering with this context.
         *
         * See [method`Pango`.Context.set_matrix].
         *
         * @returns the matrix, or %NULL if no
         *   matrix has been set (which is the same as the identity matrix).
         *   The returned matrix is owned by Pango and must not be modified
         *   or freed.
         */
        get_matrix(): Pango.Matrix | null;
        /**
         * Get overall metric information for a particular font description.
         *
         * Since the metrics may be substantially different for different scripts,
         * a language tag can be provided to indicate that the metrics should be
         * retrieved that correspond to the script(s) used by that language.
         *
         * The `PangoFontDescription` is interpreted in the same way as by [func`itemize]`,
         * and the family name may be a comma separated list of names. If characters
         * from multiple of these families would be used to render the string, then
         * the returned fonts would be a composite of the metrics for the fonts loaded
         * for the individual families.
         *
         * @returns a `PangoFontMetrics` object. The caller must call
         *   [method`Pango`.FontMetrics.unref] when finished using the object.
         * @param desc a `PangoFontDescription` structure. %NULL means that the
         *   font description from the context will be used.
         * @param language language tag used to determine which script to get
         *   the metrics for. %NULL means that the language tag from the context
         *   will be used. If no language tag is set on the context, metrics
         *   for the default language (as determined by [func`Pango`.Language.get_default]
         *   will be returned.
         */
        get_metrics(desc?: Pango.FontDescription | null, language?: Pango.Language | null): Pango.FontMetrics;
        /**
         * Returns whether font rendering with this context should
         * round glyph positions and widths.
         */
        get_round_glyph_positions(): boolean;
        /**
         * Returns the current serial number of `context`.
         *
         * The serial number is initialized to an small number larger than zero
         * when a new context is created and is increased whenever the context
         * is changed using any of the setter functions, or the `PangoFontMap` it
         * uses to find fonts has changed. The serial may wrap, but will never
         * have the value 0. Since it can wrap, never compare it with "less than",
         * always use "not equals".
         *
         * This can be used to automatically detect changes to a `PangoContext`,
         * and is only useful when implementing objects that need update when their
         * `PangoContext` changes, like `PangoLayout`.
         *
         * @returns The current serial number of `context`.
         */
        get_serial(): number;
        /**
         * List all families for a context.
         */
        list_families(): [Pango.FontFamily[]];
        /**
         * Loads the font in one of the fontmaps in the context
         * that is the closest match for `desc`.
         *
         * @returns the newly allocated `PangoFont`
         *   that was loaded, or %NULL if no font matched.
         * @param desc a `PangoFontDescription` describing the font to load
         */
        load_font(desc: Pango.FontDescription): Pango.Font | null;
        /**
         * Load a set of fonts in the context that can be used to render
         * a font matching `desc`.
         *
         * @returns the newly allocated
         *   `PangoFontset` loaded, or %NULL if no font matched.
         * @param desc a `PangoFontDescription` describing the fonts to load
         * @param language a `PangoLanguage` the fonts will be used for
         */
        load_fontset(desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null;
        /**
         * Sets the base direction for the context.
         *
         * The base direction is used in applying the Unicode bidirectional
         * algorithm; if the `direction` is %PANGO_DIRECTION_LTR or
         * %PANGO_DIRECTION_RTL, then the value will be used as the paragraph
         * direction in the Unicode bidirectional algorithm. A value of
         * %PANGO_DIRECTION_WEAK_LTR or %PANGO_DIRECTION_WEAK_RTL is used only
         * for paragraphs that do not contain any strong characters themselves.
         *
         * @param direction the new base direction
         */
        set_base_dir(direction: Pango.Direction | null): void;
        /**
         * Sets the base gravity for the context.
         *
         * The base gravity is used in laying vertical text out.
         *
         * @param gravity the new base gravity
         */
        set_base_gravity(gravity: Pango.Gravity | null): void;
        /**
         * Set the default font description for the context
         *
         * @param desc the new pango font description
         */
        set_font_description(desc?: Pango.FontDescription | null): void;
        /**
         * Sets the font map to be searched when fonts are looked-up
         * in this context.
         *
         * This is only for internal use by Pango backends, a `PangoContext`
         * obtained via one of the recommended methods should already have a
         * suitable font map.
         *
         * @param font_map the `PangoFontMap` to set.
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the gravity hint for the context.
         *
         * The gravity hint is used in laying vertical text out, and
         * is only relevant if gravity of the context as returned by
         * [method`Pango`.Context.get_gravity] is set to %PANGO_GRAVITY_EAST
         * or %PANGO_GRAVITY_WEST.
         *
         * @param hint the new gravity hint
         */
        set_gravity_hint(hint: Pango.GravityHint | null): void;
        /**
         * Sets the global language tag for the context.
         *
         * The default language for the locale of the running process
         * can be found using [func`Pango`.Language.get_default].
         *
         * @param language the new language tag.
         */
        set_language(language?: Pango.Language | null): void;
        /**
         * Sets the transformation matrix that will be applied when rendering
         * with this context.
         *
         * Note that reported metrics are in the user space coordinates before
         * the application of the matrix, not device-space coordinates after the
         * application of the matrix. So, they don't scale with the matrix, though
         * they may change slightly for different matrices, depending on how the
         * text is fit to the pixel grid.
         *
         * @param matrix a `PangoMatrix`, or %NULL to unset any existing
         * matrix. (No matrix set is the same as setting the identity matrix.)
         */
        set_matrix(matrix?: Pango.Matrix | null): void;
        /**
         * Sets whether font rendering with this context should
         * round glyph positions and widths to integral positions,
         * in device units.
         *
         * This is useful when the renderer can't handle subpixel
         * positioning of glyphs.
         *
         * The default value is to round glyph positions, to remain
         * compatible with previous Pango behavior.
         *
         * @param round_positions whether to round glyph positions
         */
        set_round_glyph_positions(round_positions: boolean): void;
    }
    class Coverage extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Coverage>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.Coverage.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Pango.Coverage.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Pango.Coverage;
        // Signals
        connect<K extends keyof Pango.Coverage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Coverage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.Coverage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Coverage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.Coverage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.Coverage.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Convert data generated from [method`Pango`.Coverage.to_bytes]
         * back to a `PangoCoverage`.
         *
         * @param bytes binary data
         *   representing a `PangoCoverage`
         */
        static from_bytes(bytes: Uint8Array[] | string): Pango.Coverage | null;
        // Methods
        /**
         * Copy an existing `PangoCoverage`.
         *
         * @returns the newly allocated `PangoCoverage`,
         *   with a reference count of one, which should be freed with
         *   [method`Pango`.Coverage.unref].
         */
        copy(): Pango.Coverage;
        /**
         * Determine whether a particular index is covered by `coverage`.
         *
         * @returns the coverage level of `coverage` for character `index_`.
         * @param index_ the index to check
         */
        get(index_: number): Pango.CoverageLevel;
        /**
         * Set the coverage for each index in `coverage` to be the max (better)
         * value of the current coverage for the index and the coverage for
         * the corresponding index in `other`.
         *
         * @param other another `PangoCoverage`
         */
        max(other: Pango.Coverage): void;
        /**
         * Increase the reference count on the `PangoCoverage` by one.
         *
         * @returns `coverage`
         */
        ref(): Pango.Coverage;
        /**
         * Modify a particular index within `coverage`
         *
         * @param index_ the index to modify
         * @param level the new level for `index_`
         */
        set(index_: number, level: Pango.CoverageLevel | null): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Convert a `PangoCoverage` structure into a flat binary format.
         */
        to_bytes(): [Uint8Array[]];
        /**
         * Decrease the reference count on the `PangoCoverage` by one.
         *
         * If the result is zero, free the coverage and all associated memory.
         */
        unref(): void;
    }
    abstract class Font extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Font>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.Font.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Pango.Font.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Pango.Font.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Font.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.Font.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Font.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.Font.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.Font.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Frees an array of font descriptions.
         *
         * @param descs a pointer
         *   to an array of `PangoFontDescription`, may be %NULL
         */
        static descriptions_free(descs?: Pango.FontDescription[] | null): void;
        /**
         * Loads data previously created via [method`Pango`.Font.serialize].
         *
         * For a discussion of the supported format, see that function.
         *
         * Note: to verify that the returned font is identical to
         * the one that was serialized, you can compare `bytes` to the
         * result of serializing the font again.
         *
         * @param context a `PangoContext`
         * @param bytes the bytes containing the data
         */
        static deserialize(context: Pango.Context, bytes: GLib.Bytes | Uint8Array): Pango.Font | null;
        // Virtual methods
        vfunc_create_hb_font(): HarfBuzz.font_t;
        /**
         * Returns a description of the font, with font size set in points.
         *
         * Use [method`Pango`.Font.describe_with_absolute_size] if you want
         * the font size in device units.
         */
        vfunc_describe(): Pango.FontDescription;
        vfunc_describe_absolute(): Pango.FontDescription;
        /**
         * Computes the coverage map for a given font and language tag.
         *
         * @param language the language tag
         */
        vfunc_get_coverage(language: Pango.Language): Pango.Coverage;
        /**
         * Obtain the OpenType features that are provided by the font.
         *
         * These are passed to the rendering system, together with features
         * that have been explicitly set via attributes.
         *
         * Note that this does not include OpenType features which the
         * rendering system enables by default.
         *
         * @param num_features the number of used items in `features`
         */
        vfunc_get_features(num_features: number): [HarfBuzz.feature_t[], number];
        /**
         * Gets the font map for which the font was created.
         *
         * Note that the font maintains a *weak* reference to
         * the font map, so if all references to font map are
         * dropped, the font map will be finalized even if there
         * are fonts created with the font map that are still alive.
         * In that case this function will return %NULL.
         *
         * It is the responsibility of the user to ensure that the
         * font map is kept alive. In most uses this is not an issue
         * as a `PangoContext` holds a reference to the font map.
         */
        vfunc_get_font_map(): Pango.FontMap | null;
        /**
         * Gets the logical and ink extents of a glyph within a font.
         *
         * The coordinate system for each rectangle has its origin at the
         * base line and horizontal origin of the character with increasing
         * coordinates extending to the right and down. The macros PANGO_ASCENT(),
         * PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert
         * from the extents rectangle to more traditional font metrics. The units
         * of the rectangles are in 1/PANGO_SCALE of a device unit.
         *
         * If `font` is %NULL, this function gracefully sets some sane values in the
         * output variables and returns.
         *
         * @param glyph the glyph index
         */
        vfunc_get_glyph_extents(glyph: Pango.Glyph): [Pango.Rectangle | null, Pango.Rectangle | null];
        /**
         * Gets overall metric information for a font.
         *
         * Since the metrics may be substantially different for different scripts,
         * a language tag can be provided to indicate that the metrics should be
         * retrieved that correspond to the script(s) used by that language.
         *
         * If `font` is %NULL, this function gracefully sets some sane values in the
         * output variables and returns.
         *
         * @param language language tag used to determine which script
         *   to get the metrics for, or %NULL to indicate to get the metrics for
         *   the entire font.
         */
        vfunc_get_metrics(language?: Pango.Language | null): Pango.FontMetrics;
        // Methods
        /**
         * Returns a description of the font, with font size set in points.
         *
         * Use [method`Pango`.Font.describe_with_absolute_size] if you want
         * the font size in device units.
         *
         * @returns a newly-allocated `PangoFontDescription` object.
         */
        describe(): Pango.FontDescription;
        /**
         * Returns a description of the font, with absolute font size set
         * in device units.
         *
         * Use [method`Pango`.Font.describe] if you want the font size in points.
         *
         * @returns a newly-allocated `PangoFontDescription` object.
         */
        describe_with_absolute_size(): Pango.FontDescription;
        /**
         * Computes the coverage map for a given font and language tag.
         *
         * @returns a newly-allocated `PangoCoverage`
         *   object.
         * @param language the language tag
         */
        get_coverage(language: Pango.Language): Pango.Coverage;
        /**
         * Gets the `PangoFontFace` to which `font` belongs.
         *
         * Note that this function can return `NULL` in cases
         * where the font outlives its font map.
         *
         * @returns the `PangoFontFace`
         */
        get_face(): Pango.FontFace | null;
        /**
         * Obtain the OpenType features that are provided by the font.
         *
         * These are passed to the rendering system, together with features
         * that have been explicitly set via attributes.
         *
         * Note that this does not include OpenType features which the
         * rendering system enables by default.
         *
         * @param num_features the number of used items in `features`
         */
        get_features(num_features: number): [HarfBuzz.feature_t[], number];
        /**
         * Gets the font map for which the font was created.
         *
         * Note that the font maintains a *weak* reference to
         * the font map, so if all references to font map are
         * dropped, the font map will be finalized even if there
         * are fonts created with the font map that are still alive.
         * In that case this function will return %NULL.
         *
         * It is the responsibility of the user to ensure that the
         * font map is kept alive. In most uses this is not an issue
         * as a `PangoContext` holds a reference to the font map.
         *
         * @returns the `PangoFontMap`
         *   for the font
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Gets the logical and ink extents of a glyph within a font.
         *
         * The coordinate system for each rectangle has its origin at the
         * base line and horizontal origin of the character with increasing
         * coordinates extending to the right and down. The macros PANGO_ASCENT(),
         * PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert
         * from the extents rectangle to more traditional font metrics. The units
         * of the rectangles are in 1/PANGO_SCALE of a device unit.
         *
         * If `font` is %NULL, this function gracefully sets some sane values in the
         * output variables and returns.
         *
         * @param glyph the glyph index
         */
        get_glyph_extents(glyph: Pango.Glyph): [Pango.Rectangle | null, Pango.Rectangle | null];
        /**
         * Returns the languages that are supported by `font`.
         *
         * If the font backend does not provide this information,
         * %NULL is returned. For the fontconfig backend, this
         * corresponds to the FC_LANG member of the FcPattern.
         *
         * The returned array is only valid as long as the font
         * and its fontmap are valid.
         *
         * @returns an array of `PangoLanguage`
         */
        get_languages(): Pango.Language[] | null;
        /**
         * Gets overall metric information for a font.
         *
         * Since the metrics may be substantially different for different scripts,
         * a language tag can be provided to indicate that the metrics should be
         * retrieved that correspond to the script(s) used by that language.
         *
         * If `font` is %NULL, this function gracefully sets some sane values in the
         * output variables and returns.
         *
         * @returns a `PangoFontMetrics` object. The caller must call
         *   [method`Pango`.FontMetrics.unref] when finished using the object.
         * @param language language tag used to determine which script
         *   to get the metrics for, or %NULL to indicate to get the metrics for
         *   the entire font.
         */
        get_metrics(language?: Pango.Language | null): Pango.FontMetrics;
        /**
         * Returns whether the font provides a glyph for this character.
         *
         * @returns `TRUE` if `font` can render `wc`
         * @param wc a Unicode character
         */
        has_char(wc: string): boolean;
        /**
         * Serializes the `font` in a way that can be uniquely identified.
         *
         * There are no guarantees about the format of the output across different
         * versions of Pango.
         *
         * The intended use of this function is testing, benchmarking and debugging.
         * The format is not meant as a permanent storage format.
         *
         * To recreate a font from its serialized form, use [func`Pango`.Font.deserialize].
         *
         * @returns a `GBytes` containing the serialized form of `font`
         */
        serialize(): GLib.Bytes;
    }
    abstract class FontFace extends GObjectClasses.Object {
        static '$gtype': GObject.GType<FontFace>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.FontFace.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Pango.FontFace.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Pango.FontFace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.FontFace.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.FontFace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.FontFace.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.FontFace.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.FontFace.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Returns a font description that matches the face.
         *
         * The resulting font description will have the family, style,
         * variant, weight and stretch of the face, but its size field
         * will be unset.
         */
        vfunc_describe(): Pango.FontDescription;
        /**
         * Gets a name representing the style of this face.
         *
         * Note that a font family may contain multiple faces
         * with the same name (e.g. a variable and a non-variable
         * face for the same style).
         */
        vfunc_get_face_name(): string;
        /**
         * Gets the `PangoFontFamily` that `face` belongs to.
         */
        vfunc_get_family(): Pango.FontFamily;
        /**
         * Returns whether a `PangoFontFace` is synthesized.
         *
         * This will be the case if the underlying font rendering engine
         * creates this face from another face, by shearing, emboldening,
         * lightening or modifying it in some other way.
         */
        vfunc_is_synthesized(): boolean;
        /**
         * List the available sizes for a font.
         *
         * This is only applicable to bitmap fonts. For scalable fonts, stores
         * %NULL at the location pointed to by `sizes` and 0 at the location pointed
         * to by `n_sizes`. The sizes returned are in Pango units and are sorted
         * in ascending order.
         */
        vfunc_list_sizes(): [number[] | null];
        // Methods
        /**
         * Returns a font description that matches the face.
         *
         * The resulting font description will have the family, style,
         * variant, weight and stretch of the face, but its size field
         * will be unset.
         *
         * @returns a newly-created `PangoFontDescription` structure
         *   holding the description of the face. Use [method`Pango`.FontDescription.free]
         *   to free the result.
         */
        describe(): Pango.FontDescription;
        /**
         * Gets a name representing the style of this face.
         *
         * Note that a font family may contain multiple faces
         * with the same name (e.g. a variable and a non-variable
         * face for the same style).
         *
         * @returns the face name for the face. This string is
         *   owned by the face object and must not be modified or freed.
         */
        get_face_name(): string;
        /**
         * Gets the `PangoFontFamily` that `face` belongs to.
         *
         * @returns the `PangoFontFamily`
         */
        get_family(): Pango.FontFamily;
        /**
         * Returns whether a `PangoFontFace` is synthesized.
         *
         * This will be the case if the underlying font rendering engine
         * creates this face from another face, by shearing, emboldening,
         * lightening or modifying it in some other way.
         *
         * @returns whether `face` is synthesized
         */
        is_synthesized(): boolean;
        /**
         * List the available sizes for a font.
         *
         * This is only applicable to bitmap fonts. For scalable fonts, stores
         * %NULL at the location pointed to by `sizes` and 0 at the location pointed
         * to by `n_sizes`. The sizes returned are in Pango units and are sorted
         * in ascending order.
         */
        list_sizes(): [number[] | null];
    }
    abstract class FontFamily<A extends GObject.Object = GObject.Object>
        extends GObjectClasses.Object
        implements Gio.ListModel<A>
    {
        static '$gtype': GObject.GType<FontFamily>;
        // Properties
        /**
         * Is this a monospace font
         */
        get is_monospace(): boolean;
        /**
         * Is this a monospace font
         */
        get isMonospace(): boolean;
        /**
         * Is this a variable font
         */
        get is_variable(): boolean;
        /**
         * Is this a variable font
         */
        get isVariable(): boolean;
        /**
         * The type of items contained in this list.
         */
        get item_type(): GObject.GType;
        /**
         * The type of items contained in this list.
         */
        get itemType(): GObject.GType;
        /**
         * The number of items contained in this list.
         */
        get n_items(): number;
        /**
         * The number of items contained in this list.
         */
        get nItems(): number;
        /**
         * The name of the family
         */
        get name(): string;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.FontFamily.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Pango.FontFamily.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Pango.FontFamily.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.FontFamily.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.FontFamily.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.FontFamily.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.FontFamily.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.FontFamily.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Gets the `PangoFontFace` of `family` with the given name.
         *
         * @param name the name of a face. If the name is %NULL,
         *   the family's default face (fontconfig calls it "Regular")
         *   will be returned.
         */
        vfunc_get_face(name?: string | null): Pango.FontFace | null;
        /**
         * Gets the name of the family.
         *
         * The name is unique among all fonts for the font backend and can
         * be used in a `PangoFontDescription` to specify that a face from
         * this family is desired.
         */
        vfunc_get_name(): string;
        /**
         * A monospace font is a font designed for text display where the the
         * characters form a regular grid.
         *
         * For Western languages this would
         * mean that the advance width of all characters are the same, but
         * this categorization also includes Asian fonts which include
         * double-width characters: characters that occupy two grid cells.
         * g_unichar_iswide() returns a result that indicates whether a
         * character is typically double-width in a monospace font.
         *
         * The best way to find out the grid-cell size is to call
         * [method`Pango`.FontMetrics.get_approximate_digit_width], since the
         * results of [method`Pango`.FontMetrics.get_approximate_char_width] may
         * be affected by double-width characters.
         */
        vfunc_is_monospace(): boolean;
        /**
         * A variable font is a font which has axes that can be modified to
         * produce different faces.
         *
         * Such axes are also known as _variations_; see
         * [method`Pango`.FontDescription.set_variations] for more information.
         */
        vfunc_is_variable(): boolean;
        /**
         * Lists the different font faces that make up `family`.
         *
         * The faces in a family share a common design, but differ in slant, weight,
         * width and other aspects.
         *
         * Note that the returned faces are not in any particular order, and
         * multiple faces may have the same name or characteristics.
         *
         * `PangoFontFamily` also implemented the [iface`Gio`.ListModel] interface
         * for enumerating faces.
         */
        vfunc_list_faces(): [Pango.FontFace[] | null];
        // Methods
        /**
         * Gets the `PangoFontFace` of `family` with the given name.
         *
         * @returns the `PangoFontFace`,
         *   or %NULL if no face with the given name exists.
         * @param name the name of a face. If the name is %NULL,
         *   the family's default face (fontconfig calls it "Regular")
         *   will be returned.
         */
        get_face(name?: string | null): Pango.FontFace | null;
        /**
         * Gets the name of the family.
         *
         * The name is unique among all fonts for the font backend and can
         * be used in a `PangoFontDescription` to specify that a face from
         * this family is desired.
         *
         * @returns the name of the family. This string is owned
         *   by the family object and must not be modified or freed.
         */
        get_name(): string;
        /**
         * Lists the different font faces that make up `family`.
         *
         * The faces in a family share a common design, but differ in slant, weight,
         * width and other aspects.
         *
         * Note that the returned faces are not in any particular order, and
         * multiple faces may have the same name or characteristics.
         *
         * `PangoFontFamily` also implemented the [iface`Gio`.ListModel] interface
         * for enumerating faces.
         */
        list_faces(): [Pango.FontFace[] | null];
        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         *
         * @returns the #GType of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         *
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         *
         * @returns the object at `position`.
         * @param position the position of the item to fetch
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         *
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         *
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function
         *     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from the transformation function
         *     from the `target` to the `source,` or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free
         *     resources used by the transformation functions, or %NULL if not required
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         *
         * @returns the data if found,
         *          or %NULL if no such data exists.
         * @param key name of the key for that association
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         *
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         *
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         *
         * @returns %TRUE if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         *
         * @param pspec the #GParamSpec of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         *
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         *
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         *
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         *
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         *
         * @returns the data if found, or %NULL
         *          if no such data exists.
         * @param key name of the key
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         *
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         *
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         *
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         *
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         *
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         *
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         *
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }
    abstract class FontMap<A extends GObject.Object = GObject.Object>
        extends GObjectClasses.Object
        implements Gio.ListModel<A>
    {
        static '$gtype': GObject.GType<FontMap>;
        // Properties
        /**
         * The type of items contained in this list.
         */
        get item_type(): GObject.GType;
        /**
         * The type of items contained in this list.
         */
        get itemType(): GObject.GType;
        /**
         * The number of items contained in this list.
         */
        get n_items(): number;
        /**
         * The number of items contained in this list.
         */
        get nItems(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.FontMap.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Pango.FontMap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Pango.FontMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.FontMap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.FontMap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.FontMap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.FontMap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.FontMap.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Forces a change in the fontmap, which will cause any `PangoContext`
         * using this fontmap to change.
         *
         * This function is only useful when implementing a new backend
         * for Pango, something applications won't do. Backends should
         * call this function if they have attached extra data to the
         * fontmap and such data is changed.
         */
        vfunc_changed(): void;
        /**
         * Gets a font family by name.
         *
         * @param name a family name
         */
        vfunc_get_family(name: string): Pango.FontFamily;
        /**
         * Returns the current serial number of `fontmap`.
         *
         * The serial number is initialized to an small number larger than zero
         * when a new fontmap is created and is increased whenever the fontmap
         * is changed. It may wrap, but will never have the value 0. Since it can
         * wrap, never compare it with "less than", always use "not equals".
         *
         * The fontmap can only be changed using backend-specific API, like changing
         * fontmap resolution.
         *
         * This can be used to automatically detect changes to a `PangoFontMap`,
         * like in `PangoContext`.
         */
        vfunc_get_serial(): number;
        /**
         * List all families for a fontmap.
         *
         * Note that the returned families are not in any particular order.
         *
         * `PangoFontMap` also implemented the [iface`Gio`.ListModel] interface
         * for enumerating families.
         */
        vfunc_list_families(): [Pango.FontFamily[]];
        /**
         * Load the font in the fontmap that is the closest match for `desc`.
         *
         * @param context the `PangoContext` the font will be used with
         * @param desc a `PangoFontDescription` describing the font to load
         */
        vfunc_load_font(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null;
        /**
         * Load a set of fonts in the fontmap that can be used to render
         * a font matching `desc`.
         *
         * @param context the `PangoContext` the font will be used with
         * @param desc a `PangoFontDescription` describing the font to load
         * @param language a `PangoLanguage` the fonts will be used for
         */
        vfunc_load_fontset(
            context: Pango.Context,
            desc: Pango.FontDescription,
            language: Pango.Language,
        ): Pango.Fontset | null;
        // Methods
        /**
         * Loads a font file with one or more fonts into the `PangoFontMap`.
         *
         * The added fonts will take precedence over preexisting
         * fonts with the same name.
         *
         * @returns True if the font file is successfully loaded
         *     into the fontmap, false if an error occurred.
         * @param filename Path to the font file
         */
        add_font_file(filename: string): boolean;
        /**
         * Forces a change in the fontmap, which will cause any `PangoContext`
         * using this fontmap to change.
         *
         * This function is only useful when implementing a new backend
         * for Pango, something applications won't do. Backends should
         * call this function if they have attached extra data to the
         * fontmap and such data is changed.
         */
        changed(): void;
        /**
         * Creates a `PangoContext` connected to `fontmap`.
         *
         * This is equivalent to [ctor`Pango`.Context.new] followed by
         * [method`Pango`.Context.set_font_map].
         *
         * If you are using Pango as part of a higher-level system,
         * that system may have it's own way of create a `PangoContext`.
         * For instance, the GTK toolkit has, among others,
         * gtk_widget_get_pango_context(). Use those instead.
         *
         * @returns the newly allocated `PangoContext`,
         *   which should be freed with g_object_unref().
         */
        create_context(): Pango.Context;
        /**
         * Gets a font family by name.
         *
         * @returns the `PangoFontFamily`
         * @param name a family name
         */
        get_family(name: string): Pango.FontFamily;
        /**
         * Returns the current serial number of `fontmap`.
         *
         * The serial number is initialized to an small number larger than zero
         * when a new fontmap is created and is increased whenever the fontmap
         * is changed. It may wrap, but will never have the value 0. Since it can
         * wrap, never compare it with "less than", always use "not equals".
         *
         * The fontmap can only be changed using backend-specific API, like changing
         * fontmap resolution.
         *
         * This can be used to automatically detect changes to a `PangoFontMap`,
         * like in `PangoContext`.
         *
         * @returns The current serial number of `fontmap`.
         */
        get_serial(): number;
        /**
         * List all families for a fontmap.
         *
         * Note that the returned families are not in any particular order.
         *
         * `PangoFontMap` also implemented the [iface`Gio`.ListModel] interface
         * for enumerating families.
         */
        list_families(): [Pango.FontFamily[]];
        /**
         * Load the font in the fontmap that is the closest match for `desc`.
         *
         * @returns the newly allocated `PangoFont`
         *   loaded, or %NULL if no font matched.
         * @param context the `PangoContext` the font will be used with
         * @param desc a `PangoFontDescription` describing the font to load
         */
        load_font(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null;
        /**
         * Load a set of fonts in the fontmap that can be used to render
         * a font matching `desc`.
         *
         * @returns the newly allocated
         *   `PangoFontset` loaded, or %NULL if no font matched.
         * @param context the `PangoContext` the font will be used with
         * @param desc a `PangoFontDescription` describing the font to load
         * @param language a `PangoLanguage` the fonts will be used for
         */
        load_fontset(
            context: Pango.Context,
            desc: Pango.FontDescription,
            language: Pango.Language,
        ): Pango.Fontset | null;
        /**
         * Returns a new font that is like `font,` except that it is scaled
         * by `scale,` its backend-dependent configuration (e.g. cairo font options)
         * is replaced by the one in `context,` and its variations are replaced
         * by `variations`.
         *
         * Note that the scaling here is meant to be linear, so this
         * scaling can be used to render a font on a hi-dpi display
         * without changing its optical size.
         *
         * @returns the modified font
         * @param font a font in `fontmap`
         * @param scale the scale factor to apply
         * @param context a `PangoContext`
         * @param variations font variations to use
         */
        reload_font(
            font: Pango.Font,
            scale: number,
            context?: Pango.Context | null,
            variations?: string | null,
        ): Pango.Font;
        // Inherited methods
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         *
         * @returns the #GType of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         *
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list,` %NULL is
         * returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of g_list_model_get_item().
         *
         * See also: g_list_model_get_n_items()
         *
         * @returns the object at `position`.
         * @param position the position of the item to fetch
         */
        get_item(position: number): A | null;
        /**
         * Emits the #GListModel::items-changed signal on `list`.
         *
         * This function should only be called by classes implementing
         * #GListModel. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as #GListStore), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the #GListModel
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         *
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list,` %NULL is returned.
         *
         * %NULL is never returned for an index that is smaller than the length
         * of the list.  See g_list_model_get_n_items().
         *
         * The same #GObject instance may not appear more than once in a #GListModel.
         *
         * @param position the position of the item to fetch
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from g_list_model_get_item() are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a #GListModel can not change during the life of the
         * model.
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until g_list_model_get_item() returns %NULL.
         */
        vfunc_get_n_items(): number;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         *
         * @returns the #GBinding instance representing the
         *     binding between the two #GObject instances. The binding is released
         *     whenever the #GBinding reference count reaches zero.
         * @param source_property the property on `source` to bind
         * @param target the target #GObject
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function
         *     from the `source` to the `target,` or %NULL to use the default
         * @param transform_from the transformation function
         *     from the `target` to the `source,` or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free
         *     resources used by the transformation functions, or %NULL if not required
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         *
         * @returns the data if found,
         *          or %NULL if no such data exists.
         * @param key name of the key for that association
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         *
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         *
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         *
         * @returns %TRUE if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         *
         * @param pspec the #GParamSpec of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         *
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         *
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         *
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         *
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         *
         * @returns the data if found, or %NULL
         *          if no such data exists.
         * @param key name of the key
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         *
         * @returns The user data pointer set, or %NULL
         * @param quark A #GQuark, naming the user data pointer
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         *
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         *
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         *
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         *
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         *
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         *
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         *
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         *
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         *
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }
    abstract class Fontset extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Fontset>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.Fontset.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Pango.Fontset.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Pango.Fontset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Fontset.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.Fontset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Fontset.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.Fontset.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.Fontset.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Iterates through all the fonts in a fontset, calling `func` for
         * each one.
         *
         * If `func` returns %TRUE, that stops the iteration.
         *
         * @param func Callback function
         */
        vfunc_foreach(func: Pango.FontsetForeachFunc): void;
        /**
         * Returns the font in the fontset that contains the best
         * glyph for a Unicode character.
         *
         * @param wc a Unicode character
         */
        vfunc_get_font(wc: number): Pango.Font;
        /**
         * a function to get the language of the fontset.
         */
        vfunc_get_language(): Pango.Language;
        /**
         * Get overall metric information for the fonts in the fontset.
         */
        vfunc_get_metrics(): Pango.FontMetrics;
        // Methods
        /**
         * Iterates through all the fonts in a fontset, calling `func` for
         * each one.
         *
         * If `func` returns %TRUE, that stops the iteration.
         *
         * @param func Callback function
         */
        foreach(func: Pango.FontsetForeachFunc): void;
        /**
         * Returns the font in the fontset that contains the best
         * glyph for a Unicode character.
         *
         * @returns a `PangoFont`
         * @param wc a Unicode character
         */
        get_font(wc: number): Pango.Font;
        /**
         * Get overall metric information for the fonts in the fontset.
         *
         * @returns a `PangoFontMetrics` object
         */
        get_metrics(): Pango.FontMetrics;
    }
    class FontsetSimple extends Fontset {
        static '$gtype': GObject.GType<FontsetSimple>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.FontsetSimple.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Pango.FontsetSimple.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(language: Pango.Language): Pango.FontsetSimple;
        // Signals
        connect<K extends keyof Pango.FontsetSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.FontsetSimple.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.FontsetSimple.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.FontsetSimple.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.FontsetSimple.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.FontsetSimple.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Adds a font to the fontset.
         *
         * The fontset takes ownership of `font`.
         *
         * @param font a `PangoFont`.
         */
        append(font: Pango.Font): void;
        /**
         * Returns the number of fonts in the fontset.
         *
         * @returns the size of `fontset`
         */
        size(): number;
    }
    class Layout extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Layout>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.Layout.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Pango.Layout.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(context: Pango.Context): Pango.Layout;
        // Signals
        connect<K extends keyof Pango.Layout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Layout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.Layout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Layout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.Layout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.Layout.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Loads data previously created via [method`Pango`.Layout.serialize].
         *
         * For a discussion of the supported format, see that function.
         *
         * Note: to verify that the returned layout is identical to
         * the one that was serialized, you can compare `bytes` to the
         * result of serializing the layout again.
         *
         * @param context a `PangoContext`
         * @param bytes the bytes containing the data
         * @param flags `PangoLayoutDeserializeFlags`
         */
        static deserialize(
            context: Pango.Context,
            bytes: GLib.Bytes | Uint8Array,
            flags: Pango.LayoutDeserializeFlags,
        ): Pango.Layout | null;
        // Methods
        /**
         * Forces recomputation of any state in the `PangoLayout` that
         * might depend on the layout's context.
         *
         * This function should be called if you make changes to the context
         * subsequent to creating the layout.
         */
        context_changed(): void;
        /**
         * Creates a deep copy-by-value of the layout.
         *
         * The attribute list, tab array, and text from the original layout
         * are all copied by value.
         *
         * @returns the newly allocated `PangoLayout`
         */
        copy(): Pango.Layout;
        /**
         * Gets the alignment for the layout: how partial lines are
         * positioned within the horizontal space available.
         *
         * @returns the alignment
         */
        get_alignment(): Pango.Alignment;
        /**
         * Gets the attribute list for the layout, if any.
         *
         * @returns a `PangoAttrList`
         */
        get_attributes(): Pango.AttrList | null;
        /**
         * Gets whether to calculate the base direction for the layout
         * according to its contents.
         *
         * See [method`Pango`.Layout.set_auto_dir].
         *
         * @returns %TRUE if the bidirectional base direction
         *   is computed from the layout's contents, %FALSE otherwise
         */
        get_auto_dir(): boolean;
        /**
         * Gets the Y position of baseline of the first line in `layout`.
         *
         * @returns baseline of first line, from top of `layout`
         */
        get_baseline(): number;
        /**
         * Given an index within a layout, determines the positions that of the
         * strong and weak cursors if the insertion point is at that index.
         *
         * This is a variant of [method`Pango`.Layout.get_cursor_pos] that applies
         * font metric information about caret slope and offset to the positions
         * it returns.
         *
         * <picture>
         *   <source srcset="caret-metrics-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Caret metrics" src="caret-metrics-light.png">
         * </picture>
         *
         * @param index_ the byte index of the cursor
         */
        get_caret_pos(index_: number): [Pango.Rectangle | null, Pango.Rectangle | null];
        /**
         * Returns the number of Unicode characters in the
         * the text of `layout`.
         *
         * @returns the number of Unicode characters
         *   in the text of `layout`
         */
        get_character_count(): number;
        /**
         * Retrieves the `PangoContext` used for this layout.
         *
         * @returns the `PangoContext` for the layout
         */
        get_context(): Pango.Context;
        /**
         * Given an index within a layout, determines the positions that of the
         * strong and weak cursors if the insertion point is at that index.
         *
         * The position of each cursor is stored as a zero-width rectangle
         * with the height of the run extents.
         *
         * <picture>
         *   <source srcset="cursor-positions-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Cursor positions" src="cursor-positions-light.png">
         * </picture>
         *
         * The strong cursor location is the location where characters of the
         * directionality equal to the base direction of the layout are inserted.
         * The weak cursor location is the location where characters of the
         * directionality opposite to the base direction of the layout are inserted.
         *
         * The following example shows text with both a strong and a weak cursor.
         *
         * <picture>
         *   <source srcset="split-cursor-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Strong and weak cursors" src="split-cursor-light.png">
         * </picture>
         *
         * The strong cursor has a little arrow pointing to the right, the weak
         * cursor to the left. Typing a 'c' in this situation will insert the
         * character after the 'b', and typing another Hebrew character, like 'ג',
         * will insert it at the end.
         *
         * @param index_ the byte index of the cursor
         */
        get_cursor_pos(index_: number): [Pango.Rectangle | null, Pango.Rectangle | null];
        /**
         * Gets the text direction at the given character position in `layout`.
         *
         * @returns the text direction at `index`
         * @param index the byte index of the char
         */
        get_direction(index: number): Pango.Direction;
        /**
         * Gets the type of ellipsization being performed for `layout`.
         *
         * See [method`Pango`.Layout.set_ellipsize].
         *
         * Use [method`Pango`.Layout.is_ellipsized] to query whether any
         * paragraphs were actually ellipsized.
         *
         * @returns the current ellipsization mode for `layout`
         */
        get_ellipsize(): Pango.EllipsizeMode;
        /**
         * Computes the logical and ink extents of `layout`.
         *
         * Logical extents are usually what you want for positioning things. Note
         * that both extents may have non-zero x and y. You may want to use those
         * to offset where you render the layout. Not doing that is a very typical
         * bug that shows up as right-to-left layouts not being correctly positioned
         * in a layout with a set width.
         *
         * The extents are given in layout coordinates and in Pango units; layout
         * coordinates begin at the top left corner of the layout.
         */
        get_extents(): [Pango.Rectangle | null, Pango.Rectangle | null];
        /**
         * Gets the font description for the layout, if any.
         *
         * @returns a pointer to the
         *   layout's font description, or %NULL if the font description
         *   from the layout's context is inherited.
         */
        get_font_description(): Pango.FontDescription | null;
        /**
         * Gets the height of layout used for ellipsization.
         *
         * See [method`Pango`.Layout.set_height] for details.
         *
         * @returns the height, in Pango units if positive,
         *   or number of lines if negative.
         */
        get_height(): number;
        /**
         * Gets the paragraph indent width in Pango units.
         *
         * A negative value indicates a hanging indentation.
         *
         * @returns the indent in Pango units
         */
        get_indent(): number;
        /**
         * Returns an iterator to iterate over the visual extents of the layout.
         *
         * @returns the new `PangoLayoutIter`
         */
        get_iter(): Pango.LayoutIter;
        /**
         * Gets whether each complete line should be stretched to fill the entire
         * width of the layout.
         *
         * @returns the justify value
         */
        get_justify(): boolean;
        /**
         * Gets whether the last line should be stretched
         * to fill the entire width of the layout.
         *
         * @returns the justify value
         */
        get_justify_last_line(): boolean;
        /**
         * Retrieves a particular line from a `PangoLayout`.
         *
         * Use the faster [method`Pango`.Layout.get_line_readonly] if you do not
         * plan to modify the contents of the line (glyphs, glyph widths, etc.).
         *
         * @returns the requested `PangoLayoutLine`,
         *   or %NULL if the index is out of range. This layout line can be ref'ed
         *   and retained, but will become invalid if changes are made to the
         *   `PangoLayout`.
         * @param line the index of a line, which must be between 0 and
         *   `pango_layout_get_line_count(layout) - 1`, inclusive.
         */
        get_line(line: number): Pango.LayoutLine | null;
        /**
         * Retrieves the count of lines for the `layout`.
         *
         * @returns the line count
         */
        get_line_count(): number;
        /**
         * Retrieves a particular line from a `PangoLayout`.
         *
         * This is a faster alternative to [method`Pango`.Layout.get_line],
         * but the user is not expected to modify the contents of the line
         * (glyphs, glyph widths, etc.).
         *
         * @returns the requested `PangoLayoutLine`,
         *   or %NULL if the index is out of range. This layout line can be ref'ed
         *   and retained, but will become invalid if changes are made to the
         *   `PangoLayout`. No changes should be made to the line.
         * @param line the index of a line, which must be between 0 and
         *   `pango_layout_get_line_count(layout) - 1`, inclusive.
         */
        get_line_readonly(line: number): Pango.LayoutLine | null;
        /**
         * Gets the line spacing factor of `layout`.
         *
         * See [method`Pango`.Layout.set_line_spacing].
         */
        get_line_spacing(): number;
        /**
         * Returns the lines of the `layout` as a list.
         *
         * Use the faster [method`Pango`.Layout.get_lines_readonly] if you do not
         * plan to modify the contents of the lines (glyphs, glyph widths, etc.).
         *
         * @returns a `GSList`
         *   containing the lines in the layout. This points to internal data of the
         *   `PangoLayout` and must be used with care. It will become invalid on any
         *   change to the layout's text or properties.
         */
        get_lines(): Pango.LayoutLine[];
        /**
         * Returns the lines of the `layout` as a list.
         *
         * This is a faster alternative to [method`Pango`.Layout.get_lines],
         * but the user is not expected to modify the contents of the lines
         * (glyphs, glyph widths, etc.).
         *
         * @returns a `GSList`
         *   containing the lines in the layout. This points to internal data of the
         *   `PangoLayout` and must be used with care. It will become invalid on any
         *   change to the layout's text or properties. No changes should be made to
         *   the lines.
         */
        get_lines_readonly(): Pango.LayoutLine[];
        /**
         * Retrieves an array of logical attributes for each character in
         * the `layout`.
         */
        get_log_attrs(): [Pango.LogAttr[]];
        /**
         * Retrieves an array of logical attributes for each character in
         * the `layout`.
         *
         * This is a faster alternative to [method`Pango`.Layout.get_log_attrs].
         * The returned array is part of `layout` and must not be modified.
         * Modifying the layout will invalidate the returned array.
         *
         * The number of attributes returned in `n_attrs` will be one more
         * than the total number of characters in the layout, since there
         * need to be attributes corresponding to both the position before
         * the first character and the position after the last character.
         *
         * @returns an array of logical attributes
         */
        get_log_attrs_readonly(): Pango.LogAttr[];
        /**
         * Computes the logical and ink extents of `layout` in device units.
         *
         * This function just calls [method`Pango`.Layout.get_extents] followed by
         * two [func`extents_to_pixels]` calls, rounding `ink_rect` and `logical_rect`
         * such that the rounded rectangles fully contain the unrounded one (that is,
         * passes them as first argument to [func`Pango`.extents_to_pixels]).
         */
        get_pixel_extents(): [Pango.Rectangle | null, Pango.Rectangle | null];
        /**
         * Determines the logical width and height of a `PangoLayout` in device
         * units.
         *
         * [method`Pango`.Layout.get_size] returns the width and height
         * scaled by %PANGO_SCALE. This is simply a convenience function
         * around [method`Pango`.Layout.get_pixel_extents].
         */
        get_pixel_size(): [number, number];
        /**
         * Returns the current serial number of `layout`.
         *
         * The serial number is initialized to an small number larger than zero
         * when a new layout is created and is increased whenever the layout is
         * changed using any of the setter functions, or the `PangoContext` it
         * uses has changed. The serial may wrap, but will never have the value 0.
         * Since it can wrap, never compare it with "less than", always use "not equals".
         *
         * This can be used to automatically detect changes to a `PangoLayout`,
         * and is useful for example to decide whether a layout needs redrawing.
         * To force the serial to be increased, use
         * [method`Pango`.Layout.context_changed].
         *
         * @returns The current serial number of `layout`.
         */
        get_serial(): number;
        /**
         * Obtains whether `layout` is in single paragraph mode.
         *
         * See [method`Pango`.Layout.set_single_paragraph_mode].
         *
         * @returns %TRUE if the layout does not break paragraphs
         *   at paragraph separator characters, %FALSE otherwise
         */
        get_single_paragraph_mode(): boolean;
        /**
         * Determines the logical width and height of a `PangoLayout` in Pango
         * units.
         *
         * This is simply a convenience function around [method`Pango`.Layout.get_extents].
         */
        get_size(): [number, number];
        /**
         * Gets the amount of spacing between the lines of the layout.
         *
         * @returns the spacing in Pango units
         */
        get_spacing(): number;
        /**
         * Gets the current `PangoTabArray` used by this layout.
         *
         * If no `PangoTabArray` has been set, then the default tabs are
         * in use and %NULL is returned. Default tabs are every 8 spaces.
         *
         * The return value should be freed with [method`Pango`.TabArray.free].
         *
         * @returns a copy of the tabs for this layout
         */
        get_tabs(): Pango.TabArray | null;
        /**
         * Gets the text in the layout.
         *
         * The returned text should not be freed or modified.
         *
         * @returns the text in the `layout`
         */
        get_text(): string;
        /**
         * Counts the number of unknown glyphs in `layout`.
         *
         * This function can be used to determine if there are any fonts
         * available to render all characters in a certain string, or when
         * used in combination with %PANGO_ATTR_FALLBACK, to check if a
         * certain font supports all the characters in the string.
         *
         * @returns The number of unknown glyphs in `layout`
         */
        get_unknown_glyphs_count(): number;
        /**
         * Gets the width to which the lines of the `PangoLayout` should wrap.
         *
         * @returns the width in Pango units, or -1 if no width set.
         */
        get_width(): number;
        /**
         * Gets the wrap mode for the layout.
         *
         * Use [method`Pango`.Layout.is_wrapped] to query whether
         * any paragraphs were actually wrapped.
         *
         * @returns active wrap mode.
         */
        get_wrap(): Pango.WrapMode;
        /**
         * Converts from byte `index_` within the `layout` to line and X position.
         *
         * The X position is measured from the left edge of the line.
         *
         * @param index_ the byte index of a grapheme within the layout
         * @param trailing an integer indicating the edge of the grapheme to retrieve the
         *   position of. If > 0, the trailing edge of the grapheme, if 0,
         *   the leading of the grapheme
         */
        index_to_line_x(index_: number, trailing: boolean): [number, number];
        /**
         * Converts from an index within a `PangoLayout` to the onscreen position
         * corresponding to the grapheme at that index.
         *
         * The returns is represented as rectangle. Note that `pos->x` is
         * always the leading edge of the grapheme and `pos->x + pos->width` the
         * trailing edge of the grapheme. If the directionality of the grapheme
         * is right-to-left, then `pos->width` will be negative.
         *
         * @param index_ byte index within `layout`
         */
        index_to_pos(index_: number): [Pango.Rectangle];
        /**
         * Queries whether the layout had to ellipsize any paragraphs.
         *
         * This returns %TRUE if the ellipsization mode for `layout`
         * is not %PANGO_ELLIPSIZE_NONE, a positive width is set on `layout,`
         * and there are paragraphs exceeding that width that have to be
         * ellipsized.
         *
         * @returns %TRUE if any paragraphs had to be ellipsized,
         *   %FALSE otherwise
         */
        is_ellipsized(): boolean;
        /**
         * Queries whether the layout had to wrap any paragraphs.
         *
         * This returns %TRUE if a positive width is set on `layout,`
         * and there are paragraphs exceeding the layout width that have
         * to be wrapped.
         *
         * @returns %TRUE if any paragraphs had to be wrapped, %FALSE
         *   otherwise
         */
        is_wrapped(): boolean;
        /**
         * Computes a new cursor position from an old position and a direction.
         *
         * If `direction` is positive, then the new position will cause the strong
         * or weak cursor to be displayed one position to right of where it was
         * with the old cursor position. If `direction` is negative, it will be
         * moved to the left.
         *
         * In the presence of bidirectional text, the correspondence between
         * logical and visual order will depend on the direction of the current
         * run, and there may be jumps when the cursor is moved off of the end
         * of a run.
         *
         * Motion here is in cursor positions, not in characters, so a single
         * call to this function may move the cursor over multiple characters
         * when multiple characters combine to form a single grapheme.
         *
         * @param strong whether the moving cursor is the strong cursor or the
         *   weak cursor. The strong cursor is the cursor corresponding
         *   to text insertion in the base direction for the layout.
         * @param old_index the byte index of the current cursor position
         * @param old_trailing if 0, the cursor was at the leading edge of the
         *   grapheme indicated by `old_index,` if > 0, the cursor
         *   was at the trailing edge.
         * @param direction direction to move cursor. A negative
         *   value indicates motion to the left
         */
        move_cursor_visually(
            strong: boolean,
            old_index: number,
            old_trailing: number,
            direction: number,
        ): [number, number];
        /**
         * Serializes the `layout` for later deserialization via [func`Pango`.Layout.deserialize].
         *
         * There are no guarantees about the format of the output across different
         * versions of Pango and [func`Pango`.Layout.deserialize] will reject data
         * that it cannot parse.
         *
         * The intended use of this function is testing, benchmarking and debugging.
         * The format is not meant as a permanent storage format.
         *
         * @returns a `GBytes` containing the serialized form of `layout`
         * @param flags `PangoLayoutSerializeFlags`
         */
        serialize(flags: Pango.LayoutSerializeFlags | null): GLib.Bytes;
        /**
         * Sets the alignment for the layout: how partial lines are
         * positioned within the horizontal space available.
         *
         * The default alignment is %PANGO_ALIGN_LEFT.
         *
         * @param alignment the alignment
         */
        set_alignment(alignment: Pango.Alignment | null): void;
        /**
         * Sets the text attributes for a layout object.
         *
         * References `attrs,` so the caller can unref its reference.
         *
         * @param attrs a `PangoAttrList`
         */
        set_attributes(attrs?: Pango.AttrList | null): void;
        /**
         * Sets whether to calculate the base direction
         * for the layout according to its contents.
         *
         * When this flag is on (the default), then paragraphs in `layout` that
         * begin with strong right-to-left characters (Arabic and Hebrew principally),
         * will have right-to-left layout, paragraphs with letters from other scripts
         * will have left-to-right layout. Paragraphs with only neutral characters
         * get their direction from the surrounding paragraphs.
         *
         * When %FALSE, the choice between left-to-right and right-to-left
         * layout is done according to the base direction of the layout's
         * `PangoContext`. (See [method`Pango`.Context.set_base_dir]).
         *
         * When the auto-computed direction of a paragraph differs from the
         * base direction of the context, the interpretation of
         * %PANGO_ALIGN_LEFT and %PANGO_ALIGN_RIGHT are swapped.
         *
         * @param auto_dir if %TRUE, compute the bidirectional base direction
         *   from the layout's contents
         */
        set_auto_dir(auto_dir: boolean): void;
        /**
         * Sets the type of ellipsization being performed for `layout`.
         *
         * Depending on the ellipsization mode `ellipsize` text is
         * removed from the start, middle, or end of text so they
         * fit within the width and height of layout set with
         * [method`Pango`.Layout.set_width] and [method`Pango`.Layout.set_height].
         *
         * If the layout contains characters such as newlines that
         * force it to be layed out in multiple paragraphs, then whether
         * each paragraph is ellipsized separately or the entire layout
         * is ellipsized as a whole depends on the set height of the layout.
         *
         * The default value is %PANGO_ELLIPSIZE_NONE.
         *
         * See [method`Pango`.Layout.set_height] for details.
         *
         * @param ellipsize the new ellipsization mode for `layout`
         */
        set_ellipsize(ellipsize: Pango.EllipsizeMode | null): void;
        /**
         * Sets the default font description for the layout.
         *
         * If no font description is set on the layout, the
         * font description from the layout's context is used.
         *
         * @param desc the new `PangoFontDescription`
         *   to unset the current font description
         */
        set_font_description(desc?: Pango.FontDescription | null): void;
        /**
         * Sets the height to which the `PangoLayout` should be ellipsized at.
         *
         * There are two different behaviors, based on whether `height` is positive
         * or negative.
         *
         * If `height` is positive, it will be the maximum height of the layout. Only
         * lines would be shown that would fit, and if there is any text omitted,
         * an ellipsis added. At least one line is included in each paragraph regardless
         * of how small the height value is. A value of zero will render exactly one
         * line for the entire layout.
         *
         * If `height` is negative, it will be the (negative of) maximum number of lines
         * per paragraph. That is, the total number of lines shown may well be more than
         * this value if the layout contains multiple paragraphs of text.
         * The default value of -1 means that the first line of each paragraph is ellipsized.
         * This behavior may be changed in the future to act per layout instead of per
         * paragraph. File a bug against pango at
         * [https://gitlab.gnome.org/gnome/pango](https://gitlab.gnome.org/gnome/pango)
         * if your code relies on this behavior.
         *
         * Height setting only has effect if a positive width is set on
         * `layout` and ellipsization mode of `layout` is not %PANGO_ELLIPSIZE_NONE.
         * The behavior is undefined if a height other than -1 is set and
         * ellipsization mode is set to %PANGO_ELLIPSIZE_NONE, and may change in the
         * future.
         *
         * @param height the desired height of the layout in Pango units if positive,
         *   or desired number of lines if negative.
         */
        set_height(height: number): void;
        /**
         * Sets the width in Pango units to indent each paragraph.
         *
         * A negative value of `indent` will produce a hanging indentation.
         * That is, the first line will have the full width, and subsequent
         * lines will be indented by the absolute value of `indent`.
         *
         * The indent setting is ignored if layout alignment is set to
         * %PANGO_ALIGN_CENTER.
         *
         * The default value is 0.
         *
         * @param indent the amount by which to indent
         */
        set_indent(indent: number): void;
        /**
         * Sets whether each complete line should be stretched to fill the
         * entire width of the layout.
         *
         * Stretching is typically done by adding whitespace, but for some scripts
         * (such as Arabic), the justification may be done in more complex ways,
         * like extending the characters.
         *
         * Note that this setting is not implemented and so is ignored in
         * Pango older than 1.18.
         *
         * Note that tabs and justification conflict with each other:
         * Justification will move content away from its tab-aligned
         * positions.
         *
         * The default value is %FALSE.
         *
         * Also see [method`Pango`.Layout.set_justify_last_line].
         *
         * @param justify whether the lines in the layout should be justified
         */
        set_justify(justify: boolean): void;
        /**
         * Sets whether the last line should be stretched to fill the
         * entire width of the layout.
         *
         * This only has an effect if [method`Pango`.Layout.set_justify] has
         * been called as well.
         *
         * The default value is %FALSE.
         *
         * @param justify whether the last line in the layout should be justified
         */
        set_justify_last_line(justify: boolean): void;
        /**
         * Sets a factor for line spacing.
         *
         * Typical values are: 0, 1, 1.5, 2. The default values is 0.
         *
         * If `factor` is non-zero, lines are placed so that
         *
         *     baseline2 = baseline1 + factor * height2
         *
         * where height2 is the line height of the second line
         * (as determined by the font(s)). In this case, the spacing
         * set with [method`Pango`.Layout.set_spacing] is ignored.
         *
         * If `factor` is zero (the default), spacing is applied as before.
         *
         * Note: for semantics that are closer to the CSS line-height
         * property, see [func`Pango`.attr_line_height_new].
         *
         * @param factor the new line spacing factor
         */
        set_line_spacing(factor: number): void;
        /**
         * Sets the layout text and attribute list from marked-up text.
         *
         * See [Pango Markup](pango_markup.html)).
         *
         * Replaces the current text and attribute list.
         *
         * This is the same as [method`Pango`.Layout.set_markup_with_accel],
         * but the markup text isn't scanned for accelerators.
         *
         * @param markup marked-up text
         * @param length length of marked-up text in bytes, or -1 if `markup` is
         *   `NUL`-terminated
         */
        set_markup(markup: string, length: number): void;
        /**
         * Sets the layout text and attribute list from marked-up text.
         *
         * See [Pango Markup](pango_markup.html)).
         *
         * Replaces the current text and attribute list.
         *
         * If `accel_marker` is nonzero, the given character will mark the
         * character following it as an accelerator. For example, `accel_marker`
         * might be an ampersand or underscore. All characters marked
         * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
         * and the first character so marked will be returned in `accel_char`.
         * Two `accel_marker` characters following each other produce a single
         * literal `accel_marker` character.
         *
         * @param markup marked-up text (see [Pango Markup](pango_markup.html))
         * @param length length of marked-up text in bytes, or -1 if `markup` is
         *   `NUL`-terminated
         * @param accel_marker marker for accelerators in the text
         */
        set_markup_with_accel(markup: string, length: number, accel_marker: string): [string];
        /**
         * Sets the single paragraph mode of `layout`.
         *
         * If `setting` is %TRUE, do not treat newlines and similar characters
         * as paragraph separators; instead, keep all text in a single paragraph,
         * and display a glyph for paragraph separator characters. Used when
         * you want to allow editing of newlines on a single text line.
         *
         * The default value is %FALSE.
         *
         * @param setting new setting
         */
        set_single_paragraph_mode(setting: boolean): void;
        /**
         * Sets the amount of spacing in Pango units between
         * the lines of the layout.
         *
         * When placing lines with spacing, Pango arranges things so that
         *
         *     line2.top = line1.bottom + spacing
         *
         * The default value is 0.
         *
         * Note: Since 1.44, Pango is using the line height (as determined
         * by the font) for placing lines when the line spacing factor is set
         * to a non-zero value with [method`Pango`.Layout.set_line_spacing].
         * In that case, the `spacing` set with this function is ignored.
         *
         * Note: for semantics that are closer to the CSS line-height
         * property, see [func`Pango`.attr_line_height_new].
         *
         * @param spacing the amount of spacing
         */
        set_spacing(spacing: number): void;
        /**
         * Sets the tabs to use for `layout,` overriding the default tabs.
         *
         * `PangoLayout` will place content at the next tab position
         * whenever it meets a Tab character (U+0009).
         *
         * By default, tabs are every 8 spaces. If `tabs` is %NULL, the
         * default tabs are reinstated. `tabs` is copied into the layout;
         * you must free your copy of `tabs` yourself.
         *
         * Note that tabs and justification conflict with each other:
         * Justification will move content away from its tab-aligned
         * positions. The same is true for alignments other than
         * %PANGO_ALIGN_LEFT.
         *
         * @param tabs a `PangoTabArray`
         */
        set_tabs(tabs?: Pango.TabArray | null): void;
        /**
         * Sets the text of the layout.
         *
         * This function validates `text` and renders invalid UTF-8
         * with a placeholder glyph.
         *
         * Note that if you have used [method`Pango`.Layout.set_markup] or
         * [method`Pango`.Layout.set_markup_with_accel] on `layout` before, you
         * may want to call [method`Pango`.Layout.set_attributes] to clear the
         * attributes set on the layout from the markup as this function does
         * not clear attributes.
         *
         * @param text the text
         * @param length maximum length of `text,` in bytes. -1 indicates that
         *   the string is nul-terminated and the length should be calculated.
         *   The text will also be truncated on encountering a nul-termination
         *   even when `length` is positive.
         */
        set_text(text: string, length: number): void;
        /**
         * Sets the width to which the lines of the `PangoLayout` should wrap or
         * get ellipsized.
         *
         * The default value is -1: no width set.
         *
         * @param width the desired width in Pango units, or -1 to indicate that no
         *   wrapping or ellipsization should be performed.
         */
        set_width(width: number): void;
        /**
         * Sets the wrap mode.
         *
         * The wrap mode only has effect if a width is set on the layout
         * with [method`Pango`.Layout.set_width]. To turn off wrapping,
         * set the width to -1.
         *
         * The default value is %PANGO_WRAP_WORD.
         *
         * @param wrap the wrap mode
         */
        set_wrap(wrap: Pango.WrapMode | null): void;
        /**
         * A convenience method to serialize a layout to a file.
         *
         * It is equivalent to calling [method`Pango`.Layout.serialize]
         * followed by [func`GLib`.file_set_contents].
         *
         * See those two functions for details on the arguments.
         *
         * It is mostly intended for use inside a debugger to quickly dump
         * a layout to a file for later inspection.
         *
         * @returns %TRUE if saving was successful
         * @param flags `PangoLayoutSerializeFlags`
         * @param filename the file to save it to
         */
        write_to_file(flags: Pango.LayoutSerializeFlags | null, filename: string): boolean;
        /**
         * Converts from X and Y position within a layout to the byte index to the
         * character at that logical position.
         *
         * If the Y position is not inside the layout, the closest position is
         * chosen (the position will be clamped inside the layout). If the X position
         * is not within the layout, then the start or the end of the line is
         * chosen as described for [method`Pango`.LayoutLine.x_to_index]. If either
         * the X or Y positions were not inside the layout, then the function returns
         * %FALSE; on an exact hit, it returns %TRUE.
         *
         * @returns %TRUE if the coordinates were inside text, %FALSE otherwise
         * @param x the X offset (in Pango units) from the left edge of the layout
         * @param y the Y offset (in Pango units) from the top edge of the layout
         */
        xy_to_index(x: number, y: number): [boolean, number, number];
    }
    abstract class Renderer extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Renderer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Pango.Renderer.SignalSignatures;
        // Fields
        matrix: Pango.Matrix;
        // Constructors
        constructor(properties?: Partial<Pango.Renderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Pango.Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Renderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Pango.Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pango.Renderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Pango.Renderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pango.Renderer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Do renderer-specific initialization before drawing
         */
        vfunc_begin(): void;
        /**
         * Draw a squiggly line that approximately covers the given rectangle
         * in the style of an underline used to indicate a spelling error.
         *
         * The width of the underline is rounded to an integer number
         * of up/down segments and the resulting rectangle is centered
         * in the original rectangle.
         *
         * This should be called while `renderer` is already active.
         * Use [method`Pango`.Renderer.activate] to activate a renderer.
         *
         * @param x X coordinate of underline, in Pango units in user coordinate system
         * @param y Y coordinate of underline, in Pango units in user coordinate system
         * @param width width of underline, in Pango units in user coordinate system
         * @param height height of underline, in Pango units in user coordinate system
         */
        vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void;
        /**
         * Draws a single glyph with coordinates in device space.
         *
         * @param font a `PangoFont`
         * @param glyph the glyph index of a single glyph
         * @param x X coordinate of left edge of baseline of glyph
         * @param y Y coordinate of left edge of baseline of glyph
         */
        vfunc_draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void;
        /**
         * Draws the glyphs in `glyph_item` with the specified `PangoRenderer`,
         * embedding the text associated with the glyphs in the output if the
         * output format supports it.
         *
         * This is useful for rendering text in PDF.
         *
         * Note that this method does not handle attributes in `glyph_item`.
         * If you want colors, shapes and lines handled automatically according
         * to those attributes, you need to use pango_renderer_draw_layout_line()
         * or pango_renderer_draw_layout().
         *
         * Note that `text` is the start of the text for layout, which is then
         * indexed by `glyph_item->item->offset`.
         *
         * If `text` is %NULL, this simply calls [method`Pango`.Renderer.draw_glyphs].
         *
         * The default implementation of this method simply falls back to
         * [method`Pango`.Renderer.draw_glyphs].
         *
         * @param text the UTF-8 text that `glyph_item` refers to
         * @param glyph_item a `PangoGlyphItem`
         * @param x X position of left edge of baseline, in user space coordinates
         *   in Pango units
         * @param y Y position of left edge of baseline, in user space coordinates
         *   in Pango units
         */
        vfunc_draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void;
        /**
         * Draws the glyphs in `glyphs` with the specified `PangoRenderer`.
         *
         * @param font a `PangoFont`
         * @param glyphs a `PangoGlyphString`
         * @param x X position of left edge of baseline, in user space coordinates
         *   in Pango units.
         * @param y Y position of left edge of baseline, in user space coordinates
         *   in Pango units.
         */
        vfunc_draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
        /**
         * Draws an axis-aligned rectangle in user space coordinates with the
         * specified `PangoRenderer`.
         *
         * This should be called while `renderer` is already active.
         * Use [method`Pango`.Renderer.activate] to activate a renderer.
         *
         * @param part type of object this rectangle is part of
         * @param x X position at which to draw rectangle, in user space coordinates
         *   in Pango units
         * @param y Y position at which to draw rectangle, in user space coordinates
         *   in Pango units
         * @param width width of rectangle in Pango units
         * @param height height of rectangle in Pango units
         */
        vfunc_draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void;
        /**
         * draw content for a glyph shaped with `PangoAttrShape`
         *   `x,` `y` are the coordinates of the left edge of the baseline,
         *   in user coordinates.
         *
         * @param attr
         * @param x
         * @param y
         */
        vfunc_draw_shape(attr: Pango.AttrShape, x: number, y: number): void;
        /**
         * Draws a trapezoid with the parallel sides aligned with the X axis
         * using the given `PangoRenderer`; coordinates are in device space.
         *
         * @param part type of object this trapezoid is part of
         * @param _y1_ Y coordinate of top of trapezoid
         * @param _x11 X coordinate of left end of top of trapezoid
         * @param _x21 X coordinate of right end of top of trapezoid
         * @param _y2 Y coordinate of bottom of trapezoid
         * @param _x12 X coordinate of left end of bottom of trapezoid
         * @param _x22 X coordinate of right end of bottom of trapezoid
         */
        vfunc_draw_trapezoid(
            part: Pango.RenderPart,
            _y1_: number,
            _x11: number,
            _x21: number,
            _y2: number,
            _x12: number,
            _x22: number,
        ): void;
        /**
         * Do renderer-specific cleanup after drawing
         */
        vfunc_end(): void;
        /**
         * Informs Pango that the way that the rendering is done
         * for `part` has changed.
         *
         * This should be called if the rendering changes in a way that would
         * prevent multiple pieces being joined together into one drawing call.
         * For instance, if a subclass of `PangoRenderer` was to add a stipple
         * option for drawing underlines, it needs to call
         *
         * ```
         * pango_renderer_part_changed (render, PANGO_RENDER_PART_UNDERLINE);
         * ```
         *
         * When the stipple changes or underlines with different stipples
         * might be joined together. Pango automatically calls this for
         * changes to colors. (See [method`Pango`.Renderer.set_color])
         *
         * @param part the part for which rendering has changed.
         */
        vfunc_part_changed(part: Pango.RenderPart): void;
        /**
         * updates the renderer for a new run
         *
         * @param run
         */
        vfunc_prepare_run(run: Pango.LayoutRun): void;
        // Methods
        /**
         * Does initial setup before rendering operations on `renderer`.
         *
         * [method`Pango`.Renderer.deactivate] should be called when done drawing.
         * Calls such as [method`Pango`.Renderer.draw_layout] automatically
         * activate the layout before drawing on it.
         *
         * Calls to [method`Pango`.Renderer.activate] and
         * [method`Pango`.Renderer.deactivate] can be nested and the
         * renderer will only be initialized and deinitialized once.
         */
        activate(): void;
        /**
         * Cleans up after rendering operations on `renderer`.
         *
         * See docs for [method`Pango`.Renderer.activate].
         */
        deactivate(): void;
        /**
         * Draw a squiggly line that approximately covers the given rectangle
         * in the style of an underline used to indicate a spelling error.
         *
         * The width of the underline is rounded to an integer number
         * of up/down segments and the resulting rectangle is centered
         * in the original rectangle.
         *
         * This should be called while `renderer` is already active.
         * Use [method`Pango`.Renderer.activate] to activate a renderer.
         *
         * @param x X coordinate of underline, in Pango units in user coordinate system
         * @param y Y coordinate of underline, in Pango units in user coordinate system
         * @param width width of underline, in Pango units in user coordinate system
         * @param height height of underline, in Pango units in user coordinate system
         */
        draw_error_underline(x: number, y: number, width: number, height: number): void;
        /**
         * Draws a single glyph with coordinates in device space.
         *
         * @param font a `PangoFont`
         * @param glyph the glyph index of a single glyph
         * @param x X coordinate of left edge of baseline of glyph
         * @param y Y coordinate of left edge of baseline of glyph
         */
        draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void;
        /**
         * Draws the glyphs in `glyph_item` with the specified `PangoRenderer`,
         * embedding the text associated with the glyphs in the output if the
         * output format supports it.
         *
         * This is useful for rendering text in PDF.
         *
         * Note that this method does not handle attributes in `glyph_item`.
         * If you want colors, shapes and lines handled automatically according
         * to those attributes, you need to use pango_renderer_draw_layout_line()
         * or pango_renderer_draw_layout().
         *
         * Note that `text` is the start of the text for layout, which is then
         * indexed by `glyph_item->item->offset`.
         *
         * If `text` is %NULL, this simply calls [method`Pango`.Renderer.draw_glyphs].
         *
         * The default implementation of this method simply falls back to
         * [method`Pango`.Renderer.draw_glyphs].
         *
         * @param text the UTF-8 text that `glyph_item` refers to
         * @param glyph_item a `PangoGlyphItem`
         * @param x X position of left edge of baseline, in user space coordinates
         *   in Pango units
         * @param y Y position of left edge of baseline, in user space coordinates
         *   in Pango units
         */
        draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void;
        /**
         * Draws the glyphs in `glyphs` with the specified `PangoRenderer`.
         *
         * @param font a `PangoFont`
         * @param glyphs a `PangoGlyphString`
         * @param x X position of left edge of baseline, in user space coordinates
         *   in Pango units.
         * @param y Y position of left edge of baseline, in user space coordinates
         *   in Pango units.
         */
        draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;
        /**
         * Draws `layout` with the specified `PangoRenderer`.
         *
         * This is equivalent to drawing the lines of the layout, at their
         * respective positions relative to `x,` `y`.
         *
         * @param layout a `PangoLayout`
         * @param x X position of left edge of baseline, in user space coordinates
         *   in Pango units.
         * @param y Y position of left edge of baseline, in user space coordinates
         *   in Pango units.
         */
        draw_layout(layout: Pango.Layout, x: number, y: number): void;
        /**
         * Draws `line` with the specified `PangoRenderer`.
         *
         * This draws the glyph items that make up the line, as well as
         * shapes, backgrounds and lines that are specified by the attributes
         * of those items.
         *
         * @param line a `PangoLayoutLine`
         * @param x X position of left edge of baseline, in user space coordinates
         *   in Pango units.
         * @param y Y position of left edge of baseline, in user space coordinates
         *   in Pango units.
         */
        draw_layout_line(line: Pango.LayoutLine, x: number, y: number): void;
        /**
         * Draws an axis-aligned rectangle in user space coordinates with the
         * specified `PangoRenderer`.
         *
         * This should be called while `renderer` is already active.
         * Use [method`Pango`.Renderer.activate] to activate a renderer.
         *
         * @param part type of object this rectangle is part of
         * @param x X position at which to draw rectangle, in user space coordinates
         *   in Pango units
         * @param y Y position at which to draw rectangle, in user space coordinates
         *   in Pango units
         * @param width width of rectangle in Pango units
         * @param height height of rectangle in Pango units
         */
        draw_rectangle(part: Pango.RenderPart | null, x: number, y: number, width: number, height: number): void;
        /**
         * Draws a trapezoid with the parallel sides aligned with the X axis
         * using the given `PangoRenderer`; coordinates are in device space.
         *
         * @param part type of object this trapezoid is part of
         * @param _y1_ Y coordinate of top of trapezoid
         * @param _x11 X coordinate of left end of top of trapezoid
         * @param _x21 X coordinate of right end of top of trapezoid
         * @param _y2 Y coordinate of bottom of trapezoid
         * @param _x12 X coordinate of left end of bottom of trapezoid
         * @param _x22 X coordinate of right end of bottom of trapezoid
         */
        draw_trapezoid(
            part: Pango.RenderPart | null,
            _y1_: number,
            _x11: number,
            _x21: number,
            _y2: number,
            _x12: number,
            _x22: number,
        ): void;
        /**
         * Gets the current alpha for the specified part.
         *
         * @returns the alpha for the specified part,
         *   or 0 if it hasn't been set and should be
         *   inherited from the environment.
         * @param part the part to get the alpha for
         */
        get_alpha(part: Pango.RenderPart | null): number;
        /**
         * Gets the current rendering color for the specified part.
         *
         * @returns the color for the
         *   specified part, or %NULL if it hasn't been set and should be
         *   inherited from the environment.
         * @param part the part to get the color for
         */
        get_color(part: Pango.RenderPart | null): Pango.Color | null;
        /**
         * Gets the layout currently being rendered using `renderer`.
         *
         * Calling this function only makes sense from inside a subclass's
         * methods, like in its draw_shape vfunc, for example.
         *
         * The returned layout should not be modified while still being
         * rendered.
         *
         * @returns the layout, or %NULL if
         *   no layout is being rendered using `renderer` at this time.
         */
        get_layout(): Pango.Layout | null;
        /**
         * Gets the layout line currently being rendered using `renderer`.
         *
         * Calling this function only makes sense from inside a subclass's
         * methods, like in its draw_shape vfunc, for example.
         *
         * The returned layout line should not be modified while still being
         * rendered.
         *
         * @returns the layout line, or %NULL
         *   if no layout line is being rendered using `renderer` at this time.
         */
        get_layout_line(): Pango.LayoutLine | null;
        /**
         * Gets the transformation matrix that will be applied when
         * rendering.
         *
         * See [method`Pango`.Renderer.set_matrix].
         *
         * @returns the matrix, or %NULL if no matrix has
         *   been set (which is the same as the identity matrix). The returned
         *   matrix is owned by Pango and must not be modified or freed.
         */
        get_matrix(): Pango.Matrix | null;
        /**
         * Informs Pango that the way that the rendering is done
         * for `part` has changed.
         *
         * This should be called if the rendering changes in a way that would
         * prevent multiple pieces being joined together into one drawing call.
         * For instance, if a subclass of `PangoRenderer` was to add a stipple
         * option for drawing underlines, it needs to call
         *
         * ```
         * pango_renderer_part_changed (render, PANGO_RENDER_PART_UNDERLINE);
         * ```
         *
         * When the stipple changes or underlines with different stipples
         * might be joined together. Pango automatically calls this for
         * changes to colors. (See [method`Pango`.Renderer.set_color])
         *
         * @param part the part for which rendering has changed.
         */
        part_changed(part: Pango.RenderPart | null): void;
        /**
         * Sets the alpha for part of the rendering.
         *
         * Note that the alpha may only be used if a color is
         * specified for `part` as well.
         *
         * @param part the part to set the alpha for
         * @param alpha an alpha value between 1 and 65536, or 0 to unset the alpha
         */
        set_alpha(part: Pango.RenderPart | null, alpha: number): void;
        /**
         * Sets the color for part of the rendering.
         *
         * Also see [method`Pango`.Renderer.set_alpha].
         *
         * @param part the part to change the color of
         * @param color the new color or %NULL to unset the current color
         */
        set_color(part: Pango.RenderPart | null, color?: Pango.Color | null): void;
        /**
         * Sets the transformation matrix that will be applied when rendering.
         *
         * @param matrix a `PangoMatrix`, or %NULL to unset any existing matrix
         *  (No matrix set is the same as setting the identity matrix.)
         */
        set_matrix(matrix?: Pango.Matrix | null): void;
    }
}
export default classes;
