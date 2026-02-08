/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import '@girs/gjs';
import type classes from './pango-1.0-classes.d.ts';
export { classes as PangoClasses };
export namespace Pango {
    /**
     * Pango-1.0
     */
    /**
     * `PangoAlignment` describes how to align the lines of a `PangoLayout`
     * within the available space.
     *
     * If the `PangoLayout` is set to justify using [method`Pango`.Layout.set_justify],
     * this only affects partial lines.
     *
     * See [method`Pango`.Layout.set_auto_dir] for how text direction affects
     * the interpretation of `PangoAlignment` values.
     */
    export namespace Alignment {
        export const $gtype: GObject.GType<Alignment>;
    }
    enum Alignment {
        /**
         * Put all available space on the right
         */
        LEFT,
        /**
         * Center the line within the available space
         */
        CENTER = 1,
        /**
         * Put all available space on the left
         */
        RIGHT = 2,
    }
    /**
     * The `PangoAttrType` distinguishes between different types of attributes.
     *
     * Along with the predefined values, it is possible to allocate additional
     * values for custom attributes using [func`AttrType`.register]. The predefined
     * values are given below. The type of structure used to store the attribute is
     * listed in parentheses after the description.
     */
    export namespace AttrType {
        export const $gtype: GObject.GType<AttrType>;
    }
    enum AttrType {
        /**
         * does not happen
         */
        INVALID,
        /**
         * language ([struct`Pango`.AttrLanguage])
         */
        LANGUAGE = 1,
        /**
         * font family name list ([struct`Pango`.AttrString])
         */
        FAMILY = 2,
        /**
         * font slant style ([struct`Pango`.AttrInt])
         */
        STYLE = 3,
        /**
         * font weight ([struct`Pango`.AttrInt])
         */
        WEIGHT = 4,
        /**
         * font variant (normal or small caps) ([struct`Pango`.AttrInt])
         */
        VARIANT = 5,
        /**
         * font stretch ([struct`Pango`.AttrInt])
         */
        STRETCH = 6,
        /**
         * font size in points scaled by %PANGO_SCALE ([struct`Pango`.AttrInt])
         */
        SIZE = 7,
        /**
         * font description ([struct`Pango`.AttrFontDesc])
         */
        FONT_DESC = 8,
        /**
         * foreground color ([struct`Pango`.AttrColor])
         */
        FOREGROUND = 9,
        /**
         * background color ([struct`Pango`.AttrColor])
         */
        BACKGROUND = 10,
        /**
         * whether the text has an underline ([struct`Pango`.AttrInt])
         */
        UNDERLINE = 11,
        /**
         * whether the text is struck-through ([struct`Pango`.AttrInt])
         */
        STRIKETHROUGH = 12,
        /**
         * baseline displacement ([struct`Pango`.AttrInt])
         */
        RISE = 13,
        /**
         * shape ([struct`Pango`.AttrShape])
         */
        SHAPE = 14,
        /**
         * font size scale factor ([struct`Pango`.AttrFloat])
         */
        SCALE = 15,
        /**
         * whether fallback is enabled ([struct`Pango`.AttrInt])
         */
        FALLBACK = 16,
        /**
         * letter spacing ([struct`PangoAttrInt]`)
         */
        LETTER_SPACING = 17,
        /**
         * underline color ([struct`Pango`.AttrColor])
         */
        UNDERLINE_COLOR = 18,
        /**
         * strikethrough color ([struct`Pango`.AttrColor])
         */
        STRIKETHROUGH_COLOR = 19,
        /**
         * font size in pixels scaled by %PANGO_SCALE ([struct`Pango`.AttrInt])
         */
        ABSOLUTE_SIZE = 20,
        /**
         * base text gravity ([struct`Pango`.AttrInt])
         */
        GRAVITY = 21,
        /**
         * gravity hint ([struct`Pango`.AttrInt])
         */
        GRAVITY_HINT = 22,
        /**
         * OpenType font features ([struct`Pango`.AttrFontFeatures]). Since 1.38
         */
        FONT_FEATURES = 23,
        /**
         * foreground alpha ([struct`Pango`.AttrInt]). Since 1.38
         */
        FOREGROUND_ALPHA = 24,
        /**
         * background alpha ([struct`Pango`.AttrInt]). Since 1.38
         */
        BACKGROUND_ALPHA = 25,
        /**
         * whether breaks are allowed ([struct`Pango`.AttrInt]). Since 1.44
         */
        ALLOW_BREAKS = 26,
        /**
         * how to render invisible characters ([struct`Pango`.AttrInt]). Since 1.44
         */
        SHOW = 27,
        /**
         * whether to insert hyphens at intra-word line breaks ([struct`Pango`.AttrInt]). Since 1.44
         */
        INSERT_HYPHENS = 28,
        /**
         * whether the text has an overline ([struct`Pango`.AttrInt]). Since 1.46
         */
        OVERLINE = 29,
        /**
         * overline color ([struct`Pango`.AttrColor]). Since 1.46
         */
        OVERLINE_COLOR = 30,
        /**
         * line height factor ([struct`Pango`.AttrFloat]). Since: 1.50
         */
        LINE_HEIGHT = 31,
        /**
         * line height ([struct`Pango`.AttrInt]). Since: 1.50
         */
        ABSOLUTE_LINE_HEIGHT = 32,
        TEXT_TRANSFORM = 33,
        /**
         * override segmentation to classify the range of the attribute as a single word ([struct`Pango`.AttrInt]). Since 1.50
         */
        WORD = 34,
        /**
         * override segmentation to classify the range of the attribute as a single sentence ([struct`Pango`.AttrInt]). Since 1.50
         */
        SENTENCE = 35,
        /**
         * baseline displacement ([struct`Pango`.AttrInt]). Since 1.50
         */
        BASELINE_SHIFT = 36,
        /**
         * font-relative size change ([struct`Pango`.AttrInt]). Since 1.50
         */
        FONT_SCALE = 37,
    }
    /**
     * An enumeration that affects baseline shifts between runs.
     */
    export namespace BaselineShift {
        export const $gtype: GObject.GType<BaselineShift>;
    }
    enum BaselineShift {
        /**
         * Leave the baseline unchanged
         */
        NONE,
        /**
         * Shift the baseline to the superscript position,
         *   relative to the previous run
         */
        SUPERSCRIPT = 1,
        /**
         * Shift the baseline to the subscript position,
         *   relative to the previous run
         */
        SUBSCRIPT = 2,
    }
    /**
     * `PangoBidiType` represents the bidirectional character
     * type of a Unicode character.
     *
     * The values in this enumeration are specified by the
     * [Unicode bidirectional algorithm](http://www.unicode.org/reports/tr9/).
     */
    export namespace BidiType {
        export const $gtype: GObject.GType<BidiType>;
    }
    enum BidiType {
        /**
         * Left-to-Right
         */
        L,
        /**
         * Left-to-Right Embedding
         */
        LRE = 1,
        /**
         * Left-to-Right Override
         */
        LRO = 2,
        /**
         * Right-to-Left
         */
        R = 3,
        /**
         * Right-to-Left Arabic
         */
        AL = 4,
        /**
         * Right-to-Left Embedding
         */
        RLE = 5,
        /**
         * Right-to-Left Override
         */
        RLO = 6,
        /**
         * Pop Directional Format
         */
        PDF = 7,
        /**
         * European Number
         */
        EN = 8,
        /**
         * European Number Separator
         */
        ES = 9,
        /**
         * European Number Terminator
         */
        ET = 10,
        /**
         * Arabic Number
         */
        AN = 11,
        /**
         * Common Number Separator
         */
        CS = 12,
        /**
         * Nonspacing Mark
         */
        NSM = 13,
        /**
         * Boundary Neutral
         */
        BN = 14,
        /**
         * Paragraph Separator
         */
        B = 15,
        /**
         * Segment Separator
         */
        S = 16,
        /**
         * Whitespace
         */
        WS = 17,
        /**
         * Other Neutrals
         */
        ON = 18,
        /**
         * Left-to-Right isolate. Since 1.48.6
         */
        LRI = 19,
        /**
         * Right-to-Left isolate. Since 1.48.6
         */
        RLI = 20,
        /**
         * First strong isolate. Since 1.48.6
         */
        FSI = 21,
        /**
         * Pop directional isolate. Since 1.48.6
         */
        PDI = 22,
    }
    /**
     * `PangoCoverageLevel` is used to indicate how well a font can
     * represent a particular Unicode character for a particular script.
     *
     * Since 1.44, only %PANGO_COVERAGE_NONE and %PANGO_COVERAGE_EXACT
     * will be returned.
     */
    export namespace CoverageLevel {
        export const $gtype: GObject.GType<CoverageLevel>;
    }
    enum CoverageLevel {
        /**
         * The character is not representable with
         *   the font.
         */
        NONE,
        /**
         * The character is represented in a
         *   way that may be comprehensible but is not the correct
         *   graphical form. For instance, a Hangul character represented
         *   as a a sequence of Jamos, or a Latin transliteration of a
         *   Cyrillic word.
         */
        FALLBACK = 1,
        /**
         * The character is represented as
         *   basically the correct graphical form, but with a stylistic
         *   variant inappropriate for the current script.
         */
        APPROXIMATE = 2,
        /**
         * The character is represented as the
         *   correct graphical form.
         */
        EXACT = 3,
    }
    /**
     * `PangoDirection` represents a direction in the Unicode bidirectional
     * algorithm.
     *
     * Not every value in this enumeration makes sense for every usage of
     * `PangoDirection`; for example, the return value of [func`unichar_direction]`
     * and [func`find_base_dir]` cannot be `PANGO_DIRECTION_WEAK_LTR` or
     * `PANGO_DIRECTION_WEAK_RTL`, since every character is either neutral
     * or has a strong direction; on the other hand `PANGO_DIRECTION_NEUTRAL`
     * doesn't make sense to pass to [func`itemize_with_base_dir]`.
     *
     * The `PANGO_DIRECTION_TTB_LTR`, `PANGO_DIRECTION_TTB_RTL` values come from
     * an earlier interpretation of this enumeration as the writing direction
     * of a block of text and are no longer used. See `PangoGravity` for how
     * vertical text is handled in Pango.
     *
     * If you are interested in text direction, you should really use fribidi
     * directly. `PangoDirection` is only retained because it is used in some
     * public apis.
     */
    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }
    enum Direction {
        /**
         * A strong left-to-right direction
         */
        LTR,
        /**
         * A strong right-to-left direction
         */
        RTL = 1,
        /**
         * Deprecated value; treated the
         *   same as `PANGO_DIRECTION_RTL`.
         */
        TTB_LTR = 2,
        /**
         * Deprecated value; treated the
         *   same as `PANGO_DIRECTION_LTR`
         */
        TTB_RTL = 3,
        /**
         * A weak left-to-right direction
         */
        WEAK_LTR = 4,
        /**
         * A weak right-to-left direction
         */
        WEAK_RTL = 5,
        /**
         * No direction specified
         */
        NEUTRAL = 6,
    }
    /**
     * `PangoEllipsizeMode` describes what sort of ellipsization
     * should be applied to text.
     *
     * In the ellipsization process characters are removed from the
     * text in order to make it fit to a given width and replaced
     * with an ellipsis.
     */
    export namespace EllipsizeMode {
        export const $gtype: GObject.GType<EllipsizeMode>;
    }
    enum EllipsizeMode {
        /**
         * No ellipsization
         */
        NONE,
        /**
         * Omit characters at the start of the text
         */
        START = 1,
        /**
         * Omit characters in the middle of the text
         */
        MIDDLE = 2,
        /**
         * Omit characters at the end of the text
         */
        END = 3,
    }
    /**
     * Specifies whether a font should or should not have color glyphs.
     */
    export namespace FontColor {
        export const $gtype: GObject.GType<FontColor>;
    }
    enum FontColor {
        /**
         * The font should not have color glyphs
         */
        FORBIDDEN,
        /**
         * The font should have color glyphs
         */
        REQUIRED = 1,
        /**
         * The font may or may not use color
         */
        DONT_CARE = 2,
    }
    /**
     * An enumeration that affects font sizes for superscript
     * and subscript positioning and for (emulated) Small Caps.
     */
    export namespace FontScale {
        export const $gtype: GObject.GType<FontScale>;
    }
    enum FontScale {
        /**
         * Leave the font size unchanged
         */
        NONE,
        /**
         * Change the font to a size suitable for superscripts
         */
        SUPERSCRIPT = 1,
        /**
         * Change the font to a size suitable for subscripts
         */
        SUBSCRIPT = 2,
        /**
         * Change the font to a size suitable for Small Caps
         */
        SMALL_CAPS = 3,
    }
    /**
     * `PangoGravity` represents the orientation of glyphs in a segment
     * of text.
     *
     * This is useful when rendering vertical text layouts. In those situations,
     * the layout is rotated using a non-identity [struct`Pango`.Matrix], and then
     * glyph orientation is controlled using `PangoGravity`.
     *
     * Not every value in this enumeration makes sense for every usage of
     * `PangoGravity`; for example, %PANGO_GRAVITY_AUTO only can be passed to
     * [method`Pango`.Context.set_base_gravity] and can only be returned by
     * [method`Pango`.Context.get_base_gravity].
     *
     * See also: [enum`Pango`.GravityHint]
     */
    export namespace Gravity {
        export const $gtype: GObject.GType<Gravity>;
    }
    enum Gravity {
        /**
         * Glyphs stand upright (default) <img align="right" valign="center" src="m-south.png">
         */
        SOUTH,
        /**
         * Glyphs are rotated 90 degrees counter-clockwise. <img align="right" valign="center" src="m-east.png">
         */
        EAST = 1,
        /**
         * Glyphs are upside-down. <img align="right" valign="cener" src="m-north.png">
         */
        NORTH = 2,
        /**
         * Glyphs are rotated 90 degrees clockwise. <img align="right" valign="center" src="m-west.png">
         */
        WEST = 3,
        /**
         * Gravity is resolved from the context matrix
         */
        AUTO = 4,
    }
    /**
     * `PangoGravityHint` defines how horizontal scripts should behave in a
     * vertical context.
     *
     * That is, English excerpts in a vertical paragraph for example.
     *
     * See also [enum`Pango`.Gravity]
     */
    export namespace GravityHint {
        export const $gtype: GObject.GType<GravityHint>;
    }
    enum GravityHint {
        /**
         * scripts will take their natural gravity based
         *   on the base gravity and the script.  This is the default.
         */
        NATURAL,
        /**
         * always use the base gravity set, regardless of
         *   the script.
         */
        STRONG = 1,
        /**
         * for scripts not in their natural direction (eg.
         *   Latin in East gravity), choose per-script gravity such that every script
         *   respects the line progression. This means, Latin and Arabic will take
         *   opposite gravities and both flow top-to-bottom for example.
         */
        LINE = 2,
    }
    /**
     * Errors that can be returned by [func`Pango`.Layout.deserialize].
     */
    class LayoutDeserializeError extends GLib.Error {
        static '$gtype': GObject.GType<LayoutDeserializeError>;
        // Static Fields
        /**
         * Unspecified error
         */
        static INVALID: number;
        /**
         * A JSon value could not be
         *   interpreted
         */
        static INVALID_VALUE: number;
        /**
         * A required JSon member was
         *   not found
         */
        static MISSING_VALUE: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * The `PangoOverline` enumeration is used to specify whether text
     * should be overlined, and if so, the type of line.
     */
    export namespace Overline {
        export const $gtype: GObject.GType<Overline>;
    }
    enum Overline {
        /**
         * no overline should be drawn
         */
        NONE,
        /**
         * Draw a single line above the ink
         *   extents of the text being underlined.
         */
        SINGLE = 1,
    }
    /**
     * `PangoRenderPart` defines different items to render for such
     * purposes as setting colors.
     */
    export namespace RenderPart {
        export const $gtype: GObject.GType<RenderPart>;
    }
    enum RenderPart {
        /**
         * the text itself
         */
        FOREGROUND,
        /**
         * the area behind the text
         */
        BACKGROUND = 1,
        /**
         * underlines
         */
        UNDERLINE = 2,
        /**
         * strikethrough lines
         */
        STRIKETHROUGH = 3,
        /**
         * overlines
         */
        OVERLINE = 4,
    }
    /**
     * The `PangoScript` enumeration identifies different writing
     * systems.
     *
     * The values correspond to the names as defined in the Unicode standard. See
     * [Unicode Standard Annex 24: Script names](http://www.unicode.org/reports/tr24/)
     *
     * Note that this enumeration is deprecated and will not be updated to include values
     * in newer versions of the Unicode standard. Applications should use the
     * [enum`GLib`.UnicodeScript] enumeration instead,
     * whose values are interchangeable with `PangoScript`.
     */
    export namespace Script {
        export const $gtype: GObject.GType<Script>;
    }
    enum Script {
        /**
         * a value never returned from pango_script_for_unichar()
         */
        INVALID_CODE = -1,
        /**
         * a character used by multiple different scripts
         */
        COMMON,
        /**
         * a mark glyph that takes its script from the
         * base glyph to which it is attached
         */
        INHERITED = 1,
        /**
         * Arabic
         */
        ARABIC = 2,
        /**
         * Armenian
         */
        ARMENIAN = 3,
        /**
         * Bengali
         */
        BENGALI = 4,
        /**
         * Bopomofo
         */
        BOPOMOFO = 5,
        /**
         * Cherokee
         */
        CHEROKEE = 6,
        /**
         * Coptic
         */
        COPTIC = 7,
        /**
         * Cyrillic
         */
        CYRILLIC = 8,
        /**
         * Deseret
         */
        DESERET = 9,
        /**
         * Devanagari
         */
        DEVANAGARI = 10,
        /**
         * Ethiopic
         */
        ETHIOPIC = 11,
        /**
         * Georgian
         */
        GEORGIAN = 12,
        /**
         * Gothic
         */
        GOTHIC = 13,
        /**
         * Greek
         */
        GREEK = 14,
        /**
         * Gujarati
         */
        GUJARATI = 15,
        /**
         * Gurmukhi
         */
        GURMUKHI = 16,
        /**
         * Han
         */
        HAN = 17,
        /**
         * Hangul
         */
        HANGUL = 18,
        /**
         * Hebrew
         */
        HEBREW = 19,
        /**
         * Hiragana
         */
        HIRAGANA = 20,
        /**
         * Kannada
         */
        KANNADA = 21,
        /**
         * Katakana
         */
        KATAKANA = 22,
        /**
         * Khmer
         */
        KHMER = 23,
        /**
         * Lao
         */
        LAO = 24,
        /**
         * Latin
         */
        LATIN = 25,
        /**
         * Malayalam
         */
        MALAYALAM = 26,
        /**
         * Mongolian
         */
        MONGOLIAN = 27,
        /**
         * Myanmar
         */
        MYANMAR = 28,
        /**
         * Ogham
         */
        OGHAM = 29,
        /**
         * Old Italic
         */
        OLD_ITALIC = 30,
        /**
         * Oriya
         */
        ORIYA = 31,
        /**
         * Runic
         */
        RUNIC = 32,
        /**
         * Sinhala
         */
        SINHALA = 33,
        /**
         * Syriac
         */
        SYRIAC = 34,
        /**
         * Tamil
         */
        TAMIL = 35,
        /**
         * Telugu
         */
        TELUGU = 36,
        /**
         * Thaana
         */
        THAANA = 37,
        /**
         * Thai
         */
        THAI = 38,
        /**
         * Tibetan
         */
        TIBETAN = 39,
        /**
         * Canadian Aboriginal
         */
        CANADIAN_ABORIGINAL = 40,
        /**
         * Yi
         */
        YI = 41,
        /**
         * Tagalog
         */
        TAGALOG = 42,
        /**
         * Hanunoo
         */
        HANUNOO = 43,
        /**
         * Buhid
         */
        BUHID = 44,
        /**
         * Tagbanwa
         */
        TAGBANWA = 45,
        /**
         * Braille
         */
        BRAILLE = 46,
        /**
         * Cypriot
         */
        CYPRIOT = 47,
        /**
         * Limbu
         */
        LIMBU = 48,
        /**
         * Osmanya
         */
        OSMANYA = 49,
        /**
         * Shavian
         */
        SHAVIAN = 50,
        /**
         * Linear B
         */
        LINEAR_B = 51,
        /**
         * Tai Le
         */
        TAI_LE = 52,
        /**
         * Ugaritic
         */
        UGARITIC = 53,
        /**
         * New Tai Lue. Since 1.10
         */
        NEW_TAI_LUE = 54,
        /**
         * Buginese. Since 1.10
         */
        BUGINESE = 55,
        /**
         * Glagolitic. Since 1.10
         */
        GLAGOLITIC = 56,
        /**
         * Tifinagh. Since 1.10
         */
        TIFINAGH = 57,
        /**
         * Syloti Nagri. Since 1.10
         */
        SYLOTI_NAGRI = 58,
        /**
         * Old Persian. Since 1.10
         */
        OLD_PERSIAN = 59,
        /**
         * Kharoshthi. Since 1.10
         */
        KHAROSHTHI = 60,
        /**
         * an unassigned code point. Since 1.14
         */
        UNKNOWN = 61,
        /**
         * Balinese. Since 1.14
         */
        BALINESE = 62,
        /**
         * Cuneiform. Since 1.14
         */
        CUNEIFORM = 63,
        /**
         * Phoenician. Since 1.14
         */
        PHOENICIAN = 64,
        /**
         * Phags-pa. Since 1.14
         */
        PHAGS_PA = 65,
        /**
         * N'Ko. Since 1.14
         */
        NKO = 66,
        /**
         * Kayah Li. Since 1.20.1
         */
        KAYAH_LI = 67,
        /**
         * Lepcha. Since 1.20.1
         */
        LEPCHA = 68,
        /**
         * Rejang. Since 1.20.1
         */
        REJANG = 69,
        /**
         * Sundanese. Since 1.20.1
         */
        SUNDANESE = 70,
        /**
         * Saurashtra. Since 1.20.1
         */
        SAURASHTRA = 71,
        /**
         * Cham. Since 1.20.1
         */
        CHAM = 72,
        /**
         * Ol Chiki. Since 1.20.1
         */
        OL_CHIKI = 73,
        /**
         * Vai. Since 1.20.1
         */
        VAI = 74,
        /**
         * Carian. Since 1.20.1
         */
        CARIAN = 75,
        /**
         * Lycian. Since 1.20.1
         */
        LYCIAN = 76,
        /**
         * Lydian. Since 1.20.1
         */
        LYDIAN = 77,
        /**
         * Batak. Since 1.32
         */
        BATAK = 78,
        /**
         * Brahmi. Since 1.32
         */
        BRAHMI = 79,
        /**
         * Mandaic. Since 1.32
         */
        MANDAIC = 80,
        /**
         * Chakma. Since: 1.32
         */
        CHAKMA = 81,
        /**
         * Meroitic Cursive. Since: 1.32
         */
        MEROITIC_CURSIVE = 82,
        /**
         * Meroitic Hieroglyphs. Since: 1.32
         */
        MEROITIC_HIEROGLYPHS = 83,
        /**
         * Miao. Since: 1.32
         */
        MIAO = 84,
        /**
         * Sharada. Since: 1.32
         */
        SHARADA = 85,
        /**
         * Sora Sompeng. Since: 1.32
         */
        SORA_SOMPENG = 86,
        /**
         * Takri. Since: 1.32
         */
        TAKRI = 87,
        /**
         * Bassa. Since: 1.40
         */
        BASSA_VAH = 88,
        /**
         * Caucasian Albanian. Since: 1.40
         */
        CAUCASIAN_ALBANIAN = 89,
        /**
         * Duployan. Since: 1.40
         */
        DUPLOYAN = 90,
        /**
         * Elbasan. Since: 1.40
         */
        ELBASAN = 91,
        /**
         * Grantha. Since: 1.40
         */
        GRANTHA = 92,
        /**
         * Kjohki. Since: 1.40
         */
        KHOJKI = 93,
        /**
         * Khudawadi, Sindhi. Since: 1.40
         */
        KHUDAWADI = 94,
        /**
         * Linear A. Since: 1.40
         */
        LINEAR_A = 95,
        /**
         * Mahajani. Since: 1.40
         */
        MAHAJANI = 96,
        /**
         * Manichaean. Since: 1.40
         */
        MANICHAEAN = 97,
        /**
         * Mende Kikakui. Since: 1.40
         */
        MENDE_KIKAKUI = 98,
        /**
         * Modi. Since: 1.40
         */
        MODI = 99,
        /**
         * Mro. Since: 1.40
         */
        MRO = 100,
        /**
         * Nabataean. Since: 1.40
         */
        NABATAEAN = 101,
        /**
         * Old North Arabian. Since: 1.40
         */
        OLD_NORTH_ARABIAN = 102,
        /**
         * Old Permic. Since: 1.40
         */
        OLD_PERMIC = 103,
        /**
         * Pahawh Hmong. Since: 1.40
         */
        PAHAWH_HMONG = 104,
        /**
         * Palmyrene. Since: 1.40
         */
        PALMYRENE = 105,
        /**
         * Pau Cin Hau. Since: 1.40
         */
        PAU_CIN_HAU = 106,
        /**
         * Psalter Pahlavi. Since: 1.40
         */
        PSALTER_PAHLAVI = 107,
        /**
         * Siddham. Since: 1.40
         */
        SIDDHAM = 108,
        /**
         * Tirhuta. Since: 1.40
         */
        TIRHUTA = 109,
        /**
         * Warang Citi. Since: 1.40
         */
        WARANG_CITI = 110,
        /**
         * Ahom. Since: 1.40
         */
        AHOM = 111,
        /**
         * Anatolian Hieroglyphs. Since: 1.40
         */
        ANATOLIAN_HIEROGLYPHS = 112,
        /**
         * Hatran. Since: 1.40
         */
        HATRAN = 113,
        /**
         * Multani. Since: 1.40
         */
        MULTANI = 114,
        /**
         * Old Hungarian. Since: 1.40
         */
        OLD_HUNGARIAN = 115,
        /**
         * Signwriting. Since: 1.40
         */
        SIGNWRITING = 116,
    }
    /**
     * An enumeration specifying the width of the font relative to other designs
     * within a family.
     */
    export namespace Stretch {
        export const $gtype: GObject.GType<Stretch>;
    }
    enum Stretch {
        /**
         * ultra condensed width
         */
        ULTRA_CONDENSED,
        /**
         * extra condensed width
         */
        EXTRA_CONDENSED = 1,
        /**
         * condensed width
         */
        CONDENSED = 2,
        /**
         * semi condensed width
         */
        SEMI_CONDENSED = 3,
        /**
         * the normal width
         */
        NORMAL = 4,
        /**
         * semi expanded width
         */
        SEMI_EXPANDED = 5,
        /**
         * expanded width
         */
        EXPANDED = 6,
        /**
         * extra expanded width
         */
        EXTRA_EXPANDED = 7,
        /**
         * ultra expanded width
         */
        ULTRA_EXPANDED = 8,
    }
    /**
     * An enumeration specifying the various slant styles possible for a font.
     */
    export namespace Style {
        export const $gtype: GObject.GType<Style>;
    }
    enum Style {
        /**
         * the font is upright.
         */
        NORMAL,
        /**
         * the font is slanted, but in a roman style.
         */
        OBLIQUE = 1,
        /**
         * the font is slanted in an italic style.
         */
        ITALIC = 2,
    }
    /**
     * `PangoTabAlign` specifies where the text appears relative to the tab stop
     * position.
     */
    export namespace TabAlign {
        export const $gtype: GObject.GType<TabAlign>;
    }
    enum TabAlign {
        /**
         * the text appears to the right of the tab stop position
         */
        LEFT,
        /**
         * the text appears to the left of the tab stop position
         *   until the available space is filled. Since: 1.50
         */
        RIGHT = 1,
        /**
         * the text is centered at the tab stop position
         *   until the available space is filled. Since: 1.50
         */
        CENTER = 2,
        /**
         * text before the first occurrence of the decimal point
         *   character appears to the left of the tab stop position (until the available
         *   space is filled), the rest to the right. Since: 1.50
         */
        DECIMAL = 3,
    }
    /**
     * An enumeration that affects how Pango treats characters during shaping.
     */
    export namespace TextTransform {
        export const $gtype: GObject.GType<TextTransform>;
    }
    enum TextTransform {
        /**
         * Leave text unchanged
         */
        NONE,
        /**
         * Display letters and numbers as lowercase
         */
        LOWERCASE = 1,
        /**
         * Display letters and numbers as uppercase
         */
        UPPERCASE = 2,
        /**
         * Display the first character of a word
         *   in titlecase
         */
        CAPITALIZE = 3,
    }
    /**
     * The `PangoUnderline` enumeration is used to specify whether text
     * should be underlined, and if so, the type of underlining.
     */
    export namespace Underline {
        export const $gtype: GObject.GType<Underline>;
    }
    enum Underline {
        /**
         * no underline should be drawn
         */
        NONE,
        /**
         * a single underline should be drawn
         */
        SINGLE = 1,
        /**
         * a double underline should be drawn
         */
        DOUBLE = 2,
        /**
         * a single underline should be drawn at a
         *   position beneath the ink extents of the text being
         *   underlined. This should be used only for underlining
         *   single characters, such as for keyboard accelerators.
         *   %PANGO_UNDERLINE_SINGLE should be used for extended
         *   portions of text.
         */
        LOW = 3,
        /**
         * an underline indicating an error should
         *   be drawn below. The exact style of rendering is up to the
         *   `PangoRenderer` in use, but typical styles include wavy
         *   or dotted lines.
         *   This underline is typically used to indicate an error such
         *   as a possible mispelling; in some cases a contrasting color
         *   may automatically be used. This type of underlining is
         *   available since Pango 1.4.
         */
        ERROR = 4,
        /**
         * Like `PANGO_UNDERLINE_SINGLE,` but
         *   drawn continuously across multiple runs. This type
         *   of underlining is available since Pango 1.46.
         */
        SINGLE_LINE = 5,
        /**
         * Like `PANGO_UNDERLINE_DOUBLE,` but
         *   drawn continuously across multiple runs. This type
         *   of underlining is available since Pango 1.46.
         */
        DOUBLE_LINE = 6,
        /**
         * Like `PANGO_UNDERLINE_ERROR,` but
         *   drawn continuously across multiple runs. This type
         *   of underlining is available since Pango 1.46.
         */
        ERROR_LINE = 7,
    }
    /**
     * An enumeration specifying capitalization variant of the font.
     */
    export namespace Variant {
        export const $gtype: GObject.GType<Variant>;
    }
    enum Variant {
        /**
         * A normal font.
         */
        NORMAL,
        /**
         * A font with the lower case characters
         *   replaced by smaller variants of the capital characters.
         */
        SMALL_CAPS = 1,
        /**
         * A font with all characters
         *   replaced by smaller variants of the capital characters. Since: 1.50
         */
        ALL_SMALL_CAPS = 2,
        /**
         * A font with the lower case characters
         *   replaced by smaller variants of the capital characters.
         *   Petite Caps can be even smaller than Small Caps. Since: 1.50
         */
        PETITE_CAPS = 3,
        /**
         * A font with all characters
         *   replaced by smaller variants of the capital characters.
         *   Petite Caps can be even smaller than Small Caps. Since: 1.50
         */
        ALL_PETITE_CAPS = 4,
        /**
         * A font with the upper case characters
         *   replaced by smaller variants of the capital letters. Since: 1.50
         */
        UNICASE = 5,
        /**
         * A font with capital letters that
         *   are more suitable for all-uppercase titles. Since: 1.50
         */
        TITLE_CAPS = 6,
    }
    /**
     * An enumeration specifying the weight (boldness) of a font.
     *
     * Weight is specified as a numeric value ranging from 100 to 1000.
     * This enumeration simply provides some common, predefined values.
     */
    export namespace Weight {
        export const $gtype: GObject.GType<Weight>;
    }
    enum Weight {
        /**
         * the thin weight (= 100) Since: 1.24
         */
        THIN = 100,
        /**
         * the ultralight weight (= 200)
         */
        ULTRALIGHT = 200,
        /**
         * the light weight (= 300)
         */
        LIGHT = 300,
        /**
         * the semilight weight (= 350) Since: 1.36.7
         */
        SEMILIGHT = 350,
        /**
         * the book weight (= 380) Since: 1.24)
         */
        BOOK = 380,
        /**
         * the default weight (= 400)
         */
        NORMAL = 400,
        /**
         * the medium weight (= 500) Since: 1.24
         */
        MEDIUM = 500,
        /**
         * the semibold weight (= 600)
         */
        SEMIBOLD = 600,
        /**
         * the bold weight (= 700)
         */
        BOLD = 700,
        /**
         * the ultrabold weight (= 800)
         */
        ULTRABOLD = 800,
        /**
         * the heavy weight (= 900)
         */
        HEAVY = 900,
        /**
         * the ultraheavy weight (= 1000) Since: 1.24
         */
        ULTRAHEAVY = 1000,
    }
    /**
     * `PangoWrapMode` describes how to wrap the lines of a `PangoLayout`
     * to the desired width.
     *
     * For `PANGO_WRAP_WORD,` Pango uses break opportunities that are determined
     * by the Unicode line breaking algorithm. For `PANGO_WRAP_CHAR,` Pango allows
     * breaking at grapheme boundaries that are determined by the Unicode text
     * segmentation algorithm.
     */
    export namespace WrapMode {
        export const $gtype: GObject.GType<WrapMode>;
    }
    enum WrapMode {
        /**
         * wrap lines at word boundaries.
         */
        WORD,
        /**
         * wrap lines at character boundaries.
         */
        CHAR = 1,
        /**
         * wrap lines at word boundaries, but fall back to
         *   character boundaries if there is not enough space for a full word.
         */
        WORD_CHAR = 2,
        /**
         * do not wrap.
         */
        NONE = 3,
    }
    /**
     * Whether the segment should be shifted to center around the baseline.
     *
     * This is mainly used in vertical writing directions.
     */
    const ANALYSIS_FLAG_CENTERED_BASELINE: number;
    /**
     * Whether this run holds ellipsized text.
     */
    const ANALYSIS_FLAG_IS_ELLIPSIS: number;
    /**
     * Whether to add a hyphen at the end of the run during shaping.
     */
    const ANALYSIS_FLAG_NEED_HYPHEN: number;
    /**
     * Value for `start_index` in `PangoAttribute` that indicates
     * the beginning of the text.
     */
    const ATTR_INDEX_FROM_TEXT_BEGINNING: number;
    /**
     * Value for `end_index` in `PangoAttribute` that indicates
     * the end of the text.
     */
    const ATTR_INDEX_TO_TEXT_END: number;
    /**
     * A `PangoGlyph` value that indicates a zero-width empty glpyh.
     *
     * This is useful for example in shaper modules, to use as the glyph for
     * various zero-width Unicode characters (those passing [func`is_zero_width]`).
     */
    const GLYPH_EMPTY: Glyph;
    /**
     * A `PangoGlyph` value for invalid input.
     *
     * `PangoLayout` produces one such glyph per invalid input UTF-8 byte and such
     * a glyph is rendered as a crossed box.
     *
     * Note that this value is defined such that it has the %PANGO_GLYPH_UNKNOWN_FLAG
     * set.
     */
    const GLYPH_INVALID_INPUT: Glyph;
    /**
     * Flag used in `PangoGlyph` to turn a `gunichar` value of a valid Unicode
     * character into an unknown-character glyph for that `gunichar`.
     *
     * Such unknown-character glyphs may be rendered as a 'hex box'.
     */
    const GLYPH_UNKNOWN_FLAG: Glyph;
    /**
     * The scale between dimensions used for Pango distances and device units.
     *
     * The definition of device units is dependent on the output device; it will
     * typically be pixels for a screen, and points for a printer. %PANGO_SCALE is
     * currently 1024, but this may be changed in the future.
     *
     * When setting font sizes, device units are always considered to be
     * points (as in "12 point font"), rather than pixels.
     */
    const SCALE: number;
    /**
     * The major component of the version of Pango available at compile-time.
     */
    const VERSION_MAJOR: number;
    /**
     * The micro component of the version of Pango available at compile-time.
     */
    const VERSION_MICRO: number;
    /**
     * The minor component of the version of Pango available at compile-time.
     */
    const VERSION_MINOR: number;
    /**
     * A string literal containing the version of Pango available at compile-time.
     */
    const VERSION_STRING: string;
    /**
     * Create a new allow-breaks attribute.
     *
     * If breaks are disabled, the range will be kept in a
     * single run, as far as possible.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param allow_breaks %TRUE if we line breaks are allowed
     */
    function attr_allow_breaks_new(allow_breaks: boolean): Attribute;
    /**
     * Create a new background alpha attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param alpha the alpha value, between 1 and 65536
     */
    function attr_background_alpha_new(alpha: number): Attribute;
    /**
     * Create a new background color attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param red the red value (ranging from 0 to 65535)
     * @param green the green value
     * @param blue the blue value
     */
    function attr_background_new(red: number, green: number, blue: number): Attribute;
    /**
     * Create a new baseline displacement attribute.
     *
     * The effect of this attribute is to shift the baseline of a run,
     * relative to the run of preceding run.
     *
     * <picture>
     *   <source srcset="baseline-shift-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Baseline Shift" src="baseline-shift-light.png">
     * </picture>
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param shift either a `PangoBaselineShift` enumeration value or an absolute value (> 1024)
     *   in Pango units, relative to the baseline of the previous run.
     *   Positive values displace the text upwards.
     */
    function attr_baseline_shift_new(shift: number): Attribute;
    /**
     * Apply customization from attributes to the breaks in `attrs`.
     *
     * The line breaks are assumed to have been produced
     * by [func`Pango`.default_break] and [func`Pango`.tailor_break].
     *
     * @param text text to break. Must be valid UTF-8
     * @param length length of text in bytes (may be -1 if `text` is nul-terminated)
     * @param attr_list `PangoAttrList` to apply
     * @param offset Byte offset of `text` from the beginning of the paragraph
     */
    function attr_break(text: string, length: number, attr_list: AttrList, offset: number): [LogAttr[]];
    /**
     * Create a new font fallback attribute.
     *
     * If fallback is disabled, characters will only be
     * used from the closest matching font on the system.
     * No fallback will be done to other fonts on the system
     * that might contain the characters in the text.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param enable_fallback %TRUE if we should fall back on other fonts
     *   for characters the active font is missing
     */
    function attr_fallback_new(enable_fallback: boolean): Attribute;
    /**
     * Create a new font family attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param family the family or comma-separated list of families
     */
    function attr_family_new(family: string): Attribute;
    /**
     * Create a new font description attribute.
     *
     * This attribute allows setting family, style, weight, variant,
     * stretch, and size simultaneously.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param desc the font description
     */
    function attr_font_desc_new(desc: FontDescription): Attribute;
    /**
     * Create a new font features tag attribute.
     *
     * You can use this attribute to select OpenType font features like small-caps,
     * alternative glyphs, ligatures, etc. for fonts that support them.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param features a string with OpenType font features, with the syntax of the [CSS
     * font-feature-settings property](https://www.w3.org/TR/css-fonts-4/#font-rend-desc)
     */
    function attr_font_features_new(features: string): Attribute;
    /**
     * Create a new font scale attribute.
     *
     * The effect of this attribute is to change the font size of a run,
     * relative to the size of preceding run.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param scale a `PangoFontScale` value, which indicates font size change relative
     *   to the size of the previous run.
     */
    function attr_font_scale_new(scale: FontScale | null): Attribute;
    /**
     * Create a new foreground alpha attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param alpha the alpha value, between 1 and 65536
     */
    function attr_foreground_alpha_new(alpha: number): Attribute;
    /**
     * Create a new foreground color attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param red the red value (ranging from 0 to 65535)
     * @param green the green value
     * @param blue the blue value
     */
    function attr_foreground_new(red: number, green: number, blue: number): Attribute;
    /**
     * Create a new gravity hint attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param hint the gravity hint value
     */
    function attr_gravity_hint_new(hint: GravityHint | null): Attribute;
    /**
     * Create a new gravity attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param gravity the gravity value; should not be %PANGO_GRAVITY_AUTO
     */
    function attr_gravity_new(gravity: Gravity | null): Attribute;
    /**
     * Create a new insert-hyphens attribute.
     *
     * Pango will insert hyphens when breaking lines in
     * the middle of a word. This attribute can be used
     * to suppress the hyphen.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param insert_hyphens %TRUE if hyphens should be inserted
     */
    function attr_insert_hyphens_new(insert_hyphens: boolean): Attribute;
    /**
     * Create a new language tag attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param language language tag
     */
    function attr_language_new(language: Language): Attribute;
    /**
     * Create a new letter-spacing attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param letter_spacing amount of extra space to add between
     *   graphemes of the text, in Pango units
     */
    function attr_letter_spacing_new(letter_spacing: number): Attribute;
    /**
     * Modify the height of logical line extents by a factor.
     *
     * This affects the values returned by
     * [method`Pango`.LayoutLine.get_extents],
     * [method`Pango`.LayoutLine.get_pixel_extents] and
     * [method`Pango`.LayoutIter.get_line_extents].
     *
     * @param factor the scaling factor to apply to the logical height
     */
    function attr_line_height_new(factor: number): Attribute;
    /**
     * Override the height of logical line extents to be `height`.
     *
     * This affects the values returned by
     * [method`Pango`.LayoutLine.get_extents],
     * [method`Pango`.LayoutLine.get_pixel_extents] and
     * [method`Pango`.LayoutIter.get_line_extents].
     *
     * @param height the line height, in %PANGO_SCALE-ths of a point
     */
    function attr_line_height_new_absolute(height: number): Attribute;
    /**
     * Deserializes a `PangoAttrList` from a string.
     *
     * This is the counterpart to [method`Pango`.AttrList.to_string].
     * See that functions for details about the format.
     *
     * @returns a new `PangoAttrList`
     * @param text a string
     */
    function attr_list_from_string(text: string): AttrList | null;
    /**
     * Create a new overline color attribute.
     *
     * This attribute modifies the color of overlines.
     * If not set, overlines will use the foreground color.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param red the red value (ranging from 0 to 65535)
     * @param green the green value
     * @param blue the blue value
     */
    function attr_overline_color_new(red: number, green: number, blue: number): Attribute;
    /**
     * Create a new overline-style attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param overline the overline style
     */
    function attr_overline_new(overline: Overline | null): Attribute;
    /**
     * Create a new baseline displacement attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param rise the amount that the text should be displaced vertically,
     *   in Pango units. Positive values displace the text upwards.
     */
    function attr_rise_new(rise: number): Attribute;
    /**
     * Create a new font size scale attribute.
     *
     * The base font for the affected text will have
     * its size multiplied by `scale_factor`.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param scale_factor factor to scale the font
     */
    function attr_scale_new(scale_factor: number): Attribute;
    /**
     * Marks the range of the attribute as a single sentence.
     *
     * Note that this may require adjustments to word and
     * sentence classification around the range.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     */
    function attr_sentence_new(): Attribute;
    /**
     * Create a new shape attribute.
     *
     * A shape is used to impose a particular ink and logical
     * rectangle on the result of shaping a particular glyph.
     * This might be used, for instance, for embedding a picture
     * or a widget inside a `PangoLayout`.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param ink_rect ink rectangle to assign to each character
     * @param logical_rect logical rectangle to assign to each character
     */
    function attr_shape_new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute;
    /**
     * Creates a new shape attribute.
     *
     * Like [func`Pango`.AttrShape.new], but a user data pointer
     * is also provided; this pointer can be accessed when later
     * rendering the glyph.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param ink_rect ink rectangle to assign to each character
     * @param logical_rect logical rectangle to assign to each character
     * @param data user data pointer
     * @param copy_func function to copy `data` when the
     *   attribute is copied. If %NULL, `data` is simply copied
     *   as a pointer
     * @param destroy_func function to free `data` when the
     *   attribute is freed
     */
    function attr_shape_new_with_data(
        ink_rect: Rectangle,
        logical_rect: Rectangle,
        data?: any | null,
        copy_func?: AttrDataCopyFunc | null,
        destroy_func?: GLib.DestroyNotify | null,
    ): Attribute;
    /**
     * Create a new attribute that influences how invisible
     * characters are rendered.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param flags `PangoShowFlags` to apply
     */
    function attr_show_new(flags: ShowFlags | null): Attribute;
    /**
     * Create a new font-size attribute in fractional points.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param size the font size, in %PANGO_SCALE-ths of a point
     */
    function attr_size_new(size: number): Attribute;
    /**
     * Create a new font-size attribute in device units.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param size the font size, in %PANGO_SCALE-ths of a device unit
     */
    function attr_size_new_absolute(size: number): Attribute;
    /**
     * Create a new font stretch attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param stretch the stretch
     */
    function attr_stretch_new(stretch: Stretch | null): Attribute;
    /**
     * Create a new strikethrough color attribute.
     *
     * This attribute modifies the color of strikethrough lines.
     * If not set, strikethrough lines will use the foreground color.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param red the red value (ranging from 0 to 65535)
     * @param green the green value
     * @param blue the blue value
     */
    function attr_strikethrough_color_new(red: number, green: number, blue: number): Attribute;
    /**
     * Create a new strike-through attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param strikethrough %TRUE if the text should be struck-through
     */
    function attr_strikethrough_new(strikethrough: boolean): Attribute;
    /**
     * Create a new font slant style attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param style the slant style
     */
    function attr_style_new(style: Style | null): Attribute;
    /**
     * Create a new attribute that influences how characters
     * are transformed during shaping.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param transform `PangoTextTransform` to apply
     */
    function attr_text_transform_new(transform: TextTransform | null): Attribute;
    /**
     * Fetches the attribute type name.
     *
     * The attribute type name is the string passed in
     * when registering the type using
     * [func`Pango`.AttrType.register].
     *
     * The returned value is an interned string (see
     * g_intern_string() for what that means) that should
     * not be modified or freed.
     *
     * @returns the type ID name (which
     *   may be %NULL), or %NULL if `type` is a built-in Pango
     *   attribute type or invalid.
     * @param type an attribute type ID to fetch the name for
     */
    function attr_type_get_name(type: AttrType | null): string | null;
    /**
     * Allocate a new attribute type ID.
     *
     * The attribute type name can be accessed later
     * by using [func`Pango`.AttrType.get_name].
     *
     * @returns the new type ID.
     * @param name an identifier for the type
     */
    function attr_type_register(name: string): AttrType;
    /**
     * Create a new underline color attribute.
     *
     * This attribute modifies the color of underlines.
     * If not set, underlines will use the foreground color.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param red the red value (ranging from 0 to 65535)
     * @param green the green value
     * @param blue the blue value
     */
    function attr_underline_color_new(red: number, green: number, blue: number): Attribute;
    /**
     * Create a new underline-style attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param underline the underline style
     */
    function attr_underline_new(underline: Underline | null): Attribute;
    /**
     * Create a new font variant attribute (normal or small caps).
     *
     * @returns the newly allocated `PangoAttribute`,
     *   which should be freed with [method`Pango`.Attribute.destroy].
     * @param variant the variant
     */
    function attr_variant_new(variant: Variant | null): Attribute;
    /**
     * Create a new font weight attribute.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     * @param weight the weight
     */
    function attr_weight_new(weight: Weight | null): Attribute;
    /**
     * Marks the range of the attribute as a single word.
     *
     * Note that this may require adjustments to word and
     * sentence classification around the range.
     *
     * @returns the newly allocated
     *   `PangoAttribute`, which should be freed with
     *   [method`Pango`.Attribute.destroy]
     */
    function attr_word_new(): Attribute;
    /**
     * Determines the bidirectional type of a character.
     *
     * The bidirectional type is specified in the Unicode Character Database.
     *
     * A simplified version of this function is available as [func`unichar_direction]`.
     *
     * @returns the bidirectional character type, as used in the
     * Unicode bidirectional algorithm.
     * @param ch a Unicode character
     */
    function bidi_type_for_unichar(ch: string): BidiType;
    /**
     * Determines possible line, word, and character breaks
     * for a string of Unicode text with a single analysis.
     *
     * For most purposes you may want to use [func`Pango`.get_log_attrs].
     *
     * @param text the text to process. Must be valid UTF-8
     * @param length length of `text` in bytes (may be -1 if `text` is nul-terminated)
     * @param analysis `PangoAnalysis` structure for `text`
     */
    function __break(text: string, length: number, analysis: Analysis): [LogAttr[]];
    /**
     * This is the default break algorithm.
     *
     * It applies rules from the [Unicode Line Breaking Algorithm](http://www.unicode.org/unicode/reports/tr14/)
     * without language-specific tailoring, therefore the `analyis` argument is unused
     * and can be %NULL.
     *
     * See [func`Pango`.tailor_break] for language-specific breaks.
     *
     * See [func`Pango`.attr_break] for attribute-based customization.
     *
     * @param text text to break. Must be valid UTF-8
     * @param length length of text in bytes (may be -1 if `text` is nul-terminated)
     * @param analysis a `PangoAnalysis` structure for the `text`
     */
    function default_break(text: string, length: number, analysis: Analysis | null): [LogAttr[]];
    /**
     * Converts extents from Pango units to device units.
     *
     * The conversion is done by dividing by the %PANGO_SCALE factor and
     * performing rounding.
     *
     * The `inclusive` rectangle is converted by flooring the x/y coordinates
     * and extending width/height, such that the final rectangle completely
     * includes the original rectangle.
     *
     * The `nearest` rectangle is converted by rounding the coordinates
     * of the rectangle to the nearest device unit (pixel).
     *
     * The rule to which argument to use is: if you want the resulting device-space
     * rectangle to completely contain the original rectangle, pass it in as
     * `inclusive`. If you want two touching-but-not-overlapping rectangles stay
     * touching-but-not-overlapping after rounding to device units, pass them in
     * as `nearest`.
     *
     * @param inclusive rectangle to round to pixels inclusively
     * @param nearest rectangle to round to nearest pixels
     */
    function extents_to_pixels(inclusive?: Rectangle, nearest?: Rectangle): [Rectangle, Rectangle];
    /**
     * Searches a string the first character that has a strong
     * direction, according to the Unicode bidirectional algorithm.
     *
     * @returns The direction corresponding to the first strong character.
     *   If no such character is found, then %PANGO_DIRECTION_NEUTRAL is returned.
     * @param text the text to process. Must be valid UTF-8
     * @param length length of `text` in bytes (may be -1 if `text` is nul-terminated)
     */
    function find_base_dir(text: string, length: number): Direction;
    /**
     * Locates a paragraph boundary in `text`.
     *
     * A boundary is caused by delimiter characters, such as
     * a newline, carriage return, carriage return-newline pair,
     * or Unicode paragraph separator character.
     *
     * The index of the run of delimiters is returned in
     * `paragraph_delimiter_index`. The index of the start of the
     * next paragraph (index after all delimiters) is stored n
     * `next_paragraph_start`.
     *
     * If no delimiters are found, both `paragraph_delimiter_index`
     * and `next_paragraph_start` are filled with the length of `text`
     * (an index one off the end).
     *
     * @param text UTF-8 text
     * @param length length of `text` in bytes, or -1 if nul-terminated
     */
    function find_paragraph_boundary(text: string, length: number): [number, number];
    /**
     * Creates a new font description from a string representation.
     *
     * The string must have the form
     *
     *     [FAMILY-LIST] [STYLE-OPTIONS] [SIZE] [VARIATIONS] [FEATURES]
     *
     * where FAMILY-LIST is a comma-separated list of families optionally
     * terminated by a comma, STYLE_OPTIONS is a whitespace-separated list
     * of words where each word describes one of style, variant, weight,
     * stretch, or gravity, and SIZE is a decimal number (size in points)
     * or optionally followed by the unit modifier "px" for absolute size.
     *
     * The following words are understood as styles:
     * "Normal", "Roman", "Oblique", "Italic".
     *
     * The following words are understood as variants:
     * "Small-Caps", "All-Small-Caps", "Petite-Caps", "All-Petite-Caps",
     * "Unicase", "Title-Caps".
     *
     * The following words are understood as weights:
     * "Thin", "Ultra-Light", "Extra-Light", "Light", "Semi-Light",
     * "Demi-Light", "Book", "Regular", "Medium", "Semi-Bold", "Demi-Bold",
     * "Bold", "Ultra-Bold", "Extra-Bold", "Heavy", "Black", "Ultra-Black",
     * "Extra-Black".
     *
     * The following words are understood as stretch values:
     * "Ultra-Condensed", "Extra-Condensed", "Condensed", "Semi-Condensed",
     * "Semi-Expanded", "Expanded", "Extra-Expanded", "Ultra-Expanded".
     *
     * The following words are understood as gravity values:
     * "Not-Rotated", "South", "Upside-Down", "North", "Rotated-Left",
     * "East", "Rotated-Right", "West".
     *
     * The following words are understood as color values:
     * "With-Color", "Without-Color".
     *
     * VARIATIONS is a comma-separated list of font variations
     * of the form `‍`axis1=value,axis2=value,...
     *
     * FEATURES is a comma-separated list of font features of the form
     * \#‍feature1=value,feature2=value,...
     * The =value part can be ommitted if the value is 1.
     *
     * Any one of the options may be absent. If FAMILY-LIST is absent, then
     * the family_name field of the resulting font description will be
     * initialized to %NULL. If STYLE-OPTIONS is missing, then all style
     * options will be set to the default values. If SIZE is missing, the
     * size in the resulting font description will be set to 0.
     *
     * A typical example:
     *
     *     Cantarell Italic Light 15 `‍`wght=200 #‍tnum=1
     *
     * @returns a new `PangoFontDescription`.
     * @param str string representation of a font description.
     */
    function font_description_from_string(str: string): FontDescription;
    /**
     * Computes a `PangoLogAttr` for each character in `text`.
     *
     * The `attrs` array must have one `PangoLogAttr` for
     * each position in `text;` if `text` contains N characters,
     * it has N+1 positions, including the last position at the
     * end of the text. `text` should be an entire paragraph;
     * logical attributes can't be computed without context
     * (for example you need to see spaces on either side of
     * a word to know the word is a word).
     *
     * @param text text to process. Must be valid UTF-8
     * @param length length in bytes of `text`
     * @param level embedding level, or -1 if unknown
     * @param language language tag
     */
    function get_log_attrs(text: string, length: number, level: number, language: Language): [LogAttr[]];
    /**
     * Returns the mirrored character of a Unicode character.
     *
     * Mirror characters are determined by the Unicode mirrored property.
     *
     * @returns %TRUE if `ch` has a mirrored character and `mirrored_ch` is
     * filled in, %FALSE otherwise
     * @param ch a Unicode character
     */
    function get_mirror_char(ch: string): [boolean, string];
    /**
     * Finds the gravity that best matches the rotation component
     * in a `PangoMatrix`.
     *
     * @returns the gravity of `matrix,` which will never be
     * %PANGO_GRAVITY_AUTO, or %PANGO_GRAVITY_SOUTH if `matrix` is %NULL
     * @param matrix a `PangoMatrix`
     */
    function gravity_get_for_matrix(matrix?: Matrix | null): Gravity;
    /**
     * Returns the gravity to use in laying out a `PangoItem`.
     *
     * The gravity is determined based on the script, base gravity, and hint.
     *
     * If `base_gravity` is %PANGO_GRAVITY_AUTO, it is first replaced with the
     * preferred gravity of `script`.  To get the preferred gravity of a script,
     * pass %PANGO_GRAVITY_AUTO and %PANGO_GRAVITY_HINT_STRONG in.
     *
     * @returns resolved gravity suitable to use for a run of text
     * with `script`
     * @param script `PangoScript` to query
     * @param base_gravity base gravity of the paragraph
     * @param hint orientation hint
     */
    function gravity_get_for_script(
        script: Script | null,
        base_gravity: Gravity | null,
        hint: GravityHint | null,
    ): Gravity;
    /**
     * Returns the gravity to use in laying out a single character
     * or `PangoItem`.
     *
     * The gravity is determined based on the script, East Asian width,
     * base gravity, and hint,
     *
     * This function is similar to [func`Pango`.Gravity.get_for_script] except
     * that this function makes a distinction between narrow/half-width and
     * wide/full-width characters also. Wide/full-width characters always
     * stand *upright*, that is, they always take the base gravity,
     * whereas narrow/full-width characters are always rotated in vertical
     * context.
     *
     * If `base_gravity` is %PANGO_GRAVITY_AUTO, it is first replaced with the
     * preferred gravity of `script`.
     *
     * @returns resolved gravity suitable to use for a run of text
     * with `script` and `wide`.
     * @param script `PangoScript` to query
     * @param wide %TRUE for wide characters as returned by g_unichar_iswide()
     * @param base_gravity base gravity of the paragraph
     * @param hint orientation hint
     */
    function gravity_get_for_script_and_width(
        script: Script | null,
        wide: boolean,
        base_gravity: Gravity | null,
        hint: GravityHint | null,
    ): Gravity;
    /**
     * Converts a `PangoGravity` value to its natural rotation in radians.
     *
     * Note that [method`Pango`.Matrix.rotate] takes angle in degrees, not radians.
     * So, to call [method`Pango`.Matrix,rotate] with the output of this function
     * you should multiply it by (180. / G_PI).
     *
     * @returns the rotation value corresponding to `gravity`.
     * @param gravity gravity to query, should not be %PANGO_GRAVITY_AUTO
     */
    function gravity_to_rotation(gravity: Gravity | null): number;
    /**
     * Checks if a character that should not be normally rendered.
     *
     * This includes all Unicode characters with "ZERO WIDTH" in their name,
     * as well as *bidi* formatting characters, and a few other ones.
     *
     * This is totally different from [func`GLib`.unichar_iszerowidth] and is at best misnamed.
     *
     * @returns %TRUE if `ch` is a zero-width character, %FALSE otherwise
     * @param ch a Unicode character
     */
    function is_zero_width(ch: string): boolean;
    /**
     * Breaks a piece of text into segments with consistent directional
     * level and font.
     *
     * Each byte of `text` will be contained in exactly one of the items in the
     * returned list; the generated list of items will be in logical order (the
     * start offsets of the items are ascending).
     *
     * `cached_iter` should be an iterator over `attrs` currently positioned
     * at a range before or containing `start_index;` `cached_iter` will be
     * advanced to the range covering the position just after
     * `start_index` + `length`. (i.e. if itemizing in a loop, just keep passing
     * in the same `cached_iter)`.
     *
     * @returns a `GList` of
     *   [struct`Pango`.Item] structures. The items should be freed using
     *   [method`Pango`.Item.free] in combination with [func`GLib`.List.free_full].
     * @param context a structure holding information that affects
     *   the itemization process.
     * @param text the text to itemize. Must be valid UTF-8
     * @param start_index first byte in `text` to process
     * @param length the number of bytes (not characters) to process
     *   after `start_index`. This must be >= 0.
     * @param attrs the set of attributes that apply to `text`.
     * @param cached_iter Cached attribute iterator
     */
    function itemize(
        context: Context,
        text: string,
        start_index: number,
        length: number,
        attrs: AttrList,
        cached_iter?: AttrIterator | null,
    ): Item[];
    /**
     * Like `pango_itemize()`, but with an explicitly specified base direction.
     *
     * The base direction is used when computing bidirectional levels.
     * [func`itemize]` gets the base direction from the `PangoContext`
     * (see [method`Pango`.Context.set_base_dir]).
     *
     * @returns a `GList` of
     *   [struct`Pango`.Item] structures. The items should be freed using
     *   [method`Pango`.Item.free] probably in combination with [func`GLib`.List.free_full].
     * @param context a structure holding information that affects
     *   the itemization process.
     * @param base_dir base direction to use for bidirectional processing
     * @param text the text to itemize.
     * @param start_index first byte in `text` to process
     * @param length the number of bytes (not characters) to process
     *   after `start_index`. This must be >= 0.
     * @param attrs the set of attributes that apply to `text`.
     * @param cached_iter Cached attribute iterator
     */
    function itemize_with_base_dir(
        context: Context,
        base_dir: Direction | null,
        text: string,
        start_index: number,
        length: number,
        attrs: AttrList,
        cached_iter?: AttrIterator | null,
    ): Item[];
    /**
     * Convert a language tag to a `PangoLanguage`.
     *
     * The language tag must be in a RFC-3066 format. `PangoLanguage` pointers
     * can be efficiently copied (copy the pointer) and compared with other
     * language tags (compare the pointer.)
     *
     * This function first canonicalizes the string by converting it to
     * lowercase, mapping '_' to '-', and stripping all characters other
     * than letters and '-'.
     *
     * Use [func`Pango`.Language.get_default] if you want to get the
     * `PangoLanguage` for the current locale of the process.
     *
     * @returns a `PangoLanguage`
     * @param language a string representing a language tag
     */
    function language_from_string(language?: string | null): Language | null;
    /**
     * Returns the `PangoLanguage` for the current locale of the process.
     *
     * On Unix systems, this is the return value is derived from
     * `setlocale (LC_CTYPE, NULL)`, and the user can
     * affect this through the environment variables LC_ALL, LC_CTYPE or
     * LANG (checked in that order). The locale string typically is in
     * the form lang_COUNTRY, where lang is an ISO-639 language code, and
     * COUNTRY is an ISO-3166 country code. For instance, sv_FI for
     * Swedish as written in Finland or pt_BR for Portuguese as written in
     * Brazil.
     *
     * On Windows, the C library does not use any such environment
     * variables, and setting them won't affect the behavior of functions
     * like ctime(). The user sets the locale through the Regional Options
     * in the Control Panel. The C library (in the setlocale() function)
     * does not use country and language codes, but country and language
     * names spelled out in English.
     * However, this function does check the above environment
     * variables, and does return a Unix-style locale string based on
     * either said environment variables or the thread's current locale.
     *
     * Your application should call `setlocale(LC_ALL, "")` for the user
     * settings to take effect. GTK does this in its initialization
     * functions automatically (by calling gtk_set_locale()).
     * See the setlocale() manpage for more details.
     *
     * Note that the default language can change over the life of an application.
     *
     * Also note that this function will not do the right thing if you
     * use per-thread locales with uselocale(). In that case, you should
     * just call pango_language_from_string() yourself.
     *
     * @returns the default language as a `PangoLanguage`
     */
    function language_get_default(): Language;
    /**
     * Returns the list of languages that the user prefers.
     *
     * The list is specified by the `PANGO_LANGUAGE` or `LANGUAGE`
     * environment variables, in order of preference. Note that this
     * list does not necessarily include the language returned by
     * [func`Pango`.Language.get_default].
     *
     * When choosing language-specific resources, such as the sample
     * text returned by [method`Pango`.Language.get_sample_string],
     * you should first try the default language, followed by the
     * languages returned by this function.
     *
     * @returns a %NULL-terminated array
     *   of `PangoLanguage`*
     */
    function language_get_preferred(): Language[] | null;
    function layout_deserialize_error_quark(): GLib.Quark;
    /**
     * Return the bidirectional embedding levels of the input paragraph.
     *
     * The bidirectional embedding levels are defined by the [Unicode Bidirectional
     * Algorithm](http://www.unicode.org/reports/tr9/).
     *
     * If the input base direction is a weak direction, the direction of the
     * characters in the text will determine the final resolved direction.
     *
     * @returns a newly allocated array of embedding
     *   levels, one item per character (not byte), that should be freed using
     *   [func`GLib`.free].
     * @param text the text to itemize.
     * @param length the number of bytes (not characters) to process, or -1
     *   if `text` is nul-terminated and the length should be calculated.
     * @param pbase_dir input base direction, and output resolved direction.
     */
    function log2vis_get_embedding_levels(
        text: string,
        length: number,
        pbase_dir: Direction | null,
    ): [Uint8Array[], Direction];
    /**
     * Finishes parsing markup.
     *
     * After feeding a Pango markup parser some data with [method`GLib`.MarkupParseContext.parse],
     * use this function to get the list of attributes and text out of the
     * markup. This function will not free `context,` use [method`GLib`.MarkupParseContext.free]
     * to do so.
     *
     * @returns %FALSE if `error` is set, otherwise %TRUE
     * @param context A valid parse context that was returned from [func`markup_parser_new]`
     */
    function markup_parser_finish(context: GLib.MarkupParseContext): [boolean, AttrList | null, string, string];
    /**
     * Incrementally parses marked-up text to create a plain-text string
     * and an attribute list.
     *
     * See the [Pango Markup](pango_markup.html) docs for details about the
     * supported markup.
     *
     * If `accel_marker` is nonzero, the given character will mark the
     * character following it as an accelerator. For example, `accel_marker`
     * might be an ampersand or underscore. All characters marked
     * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
     * and the first character so marked will be returned in `accel_char,`
     * when calling [func`markup_parser_finish]`. Two `accel_marker` characters
     * following each other produce a single literal `accel_marker` character.
     *
     * To feed markup to the parser, use [method`GLib`.MarkupParseContext.parse]
     * on the returned [struct`GLib`.MarkupParseContext]. When done with feeding markup
     * to the parser, use [func`markup_parser_finish]` to get the data out
     * of it, and then use [method`GLib`.MarkupParseContext.free] to free it.
     *
     * This function is designed for applications that read Pango markup
     * from streams. To simply parse a string containing Pango markup,
     * the [func`Pango`.parse_markup] API is recommended instead.
     *
     * @returns a `GMarkupParseContext` that should be
     * destroyed with [method`GLib`.MarkupParseContext.free].
     * @param accel_marker character that precedes an accelerator, or 0 for none
     */
    function markup_parser_new(accel_marker: string): GLib.MarkupParseContext;
    /**
     * Parses an enum type and stores the result in `value`.
     *
     * If `str` does not match the nick name of any of the possible values
     * for the enum and is not an integer, %FALSE is returned, a warning
     * is issued if `warn` is %TRUE, and a string representing the list of
     * possible values is stored in `possible_values`. The list is
     * slash-separated, eg. "none/start/middle/end".
     *
     * If failed and `possible_values` is not %NULL, returned string should
     * be freed using g_free().
     *
     * @returns %TRUE if `str` was successfully parsed
     * @param type enum type to parse, eg. %PANGO_TYPE_ELLIPSIZE_MODE
     * @param str string to parse
     * @param warn if %TRUE, issue a g_warning() on bad input
     */
    function parse_enum(type: GObject.GType, str: string | null, warn: boolean): [boolean, number, string];
    /**
     * Parses marked-up text to create a plain-text string and an attribute list.
     *
     * See the [Pango Markup](pango_markup.html) docs for details about the
     * supported markup.
     *
     * If `accel_marker` is nonzero, the given character will mark the
     * character following it as an accelerator. For example, `accel_marker`
     * might be an ampersand or underscore. All characters marked
     * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
     * and the first character so marked will be returned in `accel_char`.
     * Two `accel_marker` characters following each other produce a single
     * literal `accel_marker` character.
     *
     * To parse a stream of pango markup incrementally, use [func`markup_parser_new]`.
     *
     * If any error happens, none of the output arguments are touched except
     * for `error`.
     *
     * @returns %FALSE if `error` is set, otherwise %TRUE
     * @param markup_text markup to parse (see the [Pango Markup](pango_markup.html) docs)
     * @param length length of `markup_text,` or -1 if nul-terminated
     * @param accel_marker character that precedes an accelerator, or 0 for none
     */
    function parse_markup(
        markup_text: string,
        length: number,
        accel_marker: string,
    ): [boolean, AttrList | null, string, string];
    /**
     * Parses a font stretch.
     *
     * The allowed values are
     * "ultra_condensed", "extra_condensed", "condensed",
     * "semi_condensed", "normal", "semi_expanded", "expanded",
     * "extra_expanded" and "ultra_expanded". Case variations are
     * ignored and the '_' characters may be omitted.
     *
     * @returns %TRUE if `str` was successfully parsed.
     * @param str a string to parse.
     * @param warn if %TRUE, issue a g_warning() on bad input.
     */
    function parse_stretch(str: string, warn: boolean): [boolean, Stretch];
    /**
     * Parses a font style.
     *
     * The allowed values are "normal", "italic" and "oblique", case
     * variations being
     * ignored.
     *
     * @returns %TRUE if `str` was successfully parsed.
     * @param str a string to parse.
     * @param warn if %TRUE, issue a g_warning() on bad input.
     */
    function parse_style(str: string, warn: boolean): [boolean, Style];
    /**
     * Parses a font variant.
     *
     * The allowed values are "normal", "small-caps", "all-small-caps",
     * "petite-caps", "all-petite-caps", "unicase" and "title-caps",
     * case variations being ignored.
     *
     * @returns %TRUE if `str` was successfully parsed.
     * @param str a string to parse.
     * @param warn if %TRUE, issue a g_warning() on bad input.
     */
    function parse_variant(str: string, warn: boolean): [boolean, Variant];
    /**
     * Parses a font weight.
     *
     * The allowed values are "heavy",
     * "ultrabold", "bold", "normal", "light", "ultraleight"
     * and integers. Case variations are ignored.
     *
     * @returns %TRUE if `str` was successfully parsed.
     * @param str a string to parse.
     * @param warn if %TRUE, issue a g_warning() on bad input.
     */
    function parse_weight(str: string, warn: boolean): [boolean, Weight];
    /**
     * Quantizes the thickness and position of a line to whole device pixels.
     *
     * This is typically used for underline or strikethrough. The purpose of
     * this function is to avoid such lines looking blurry.
     *
     * Care is taken to make sure `thickness` is at least one pixel when this
     * function returns, but returned `position` may become zero as a result
     * of rounding.
     *
     * @param thickness pointer to the thickness of a line, in Pango units
     * @param position corresponding position
     */
    function quantize_line_geometry(thickness: number, position: number): [number, number];
    /**
     * Reads an entire line from a file into a buffer.
     *
     * Lines may be delimited with '\n', '\r', '\n\r', or '\r\n'. The delimiter
     * is not written into the buffer. Text after a '#' character is treated as
     * a comment and skipped. '\' can be used to escape a # character.
     * '\' proceeding a line delimiter combines adjacent lines. A '\' proceeding
     * any other character is ignored and written into the output buffer
     * unmodified.
     *
     * @returns 0 if the stream was already at an %EOF character,
     *   otherwise the number of lines read (this is useful for maintaining
     *   a line number counter which doesn't combine lines with '\')
     * @param stream a stdio stream
     * @param str `GString` buffer into which to write the result
     */
    function read_line(stream: any | null, str: GLib.String): number;
    /**
     * Reorder items from logical order to visual order.
     *
     * The visual order is determined from the associated directional
     * levels of the items. The original list is unmodified.
     *
     * (Please open a bug if you use this function.
     *  It is not a particularly convenient interface, and the code
     *  is duplicated elsewhere in Pango for that reason.)
     *
     * @returns a `GList`
     *   of `PangoItem` structures in visual order.
     * @param items a `GList` of `PangoItem`
     *   in logical order.
     */
    function reorder_items(items: Item[]): Item[];
    /**
     * Scans an integer.
     *
     * Leading white space is skipped.
     *
     * @returns %FALSE if a parse error occurred
     * @param pos in/out string position
     */
    function scan_int(pos: string): [boolean, string, number];
    /**
     * Scans a string into a `GString` buffer.
     *
     * The string may either be a sequence of non-white-space characters,
     * or a quoted string with '"'. Instead a quoted string, '\"' represents
     * a literal quote. Leading white space outside of quotes is skipped.
     *
     * @returns %FALSE if a parse error occurred
     * @param pos in/out string position
     * @param out a `GString` into which to write the result
     */
    function scan_string(pos: string, out: GLib.String): [boolean, string];
    /**
     * Scans a word into a `GString` buffer.
     *
     * A word consists of [A-Za-z_] followed by zero or more
     * [A-Za-z_0-9]. Leading white space is skipped.
     *
     * @returns %FALSE if a parse error occurred
     * @param pos in/out string position
     * @param out a `GString` into which to write the result
     */
    function scan_word(pos: string, out: GLib.String): [boolean, string];
    /**
     * Looks up the script for a particular character.
     *
     * The script of a character is defined by
     * [Unicode Standard Annex 24: Script names](http://www.unicode.org/reports/tr24/).
     *
     * No check is made for `ch` being a valid Unicode character; if you pass
     * in invalid character, the result is undefined.
     *
     * Note that while the return type of this function is declared
     * as `PangoScript`, as of Pango 1.18, this function simply returns
     * the return value of [func`GLib`.unichar_get_script]. Callers must be
     * prepared to handle unknown values.
     *
     * @returns the `PangoScript` for the character.
     * @param ch a Unicode character
     */
    function script_for_unichar(ch: string): Script;
    /**
     * Finds a language tag that is reasonably representative of `script`.
     *
     * The language will usually be the most widely spoken or used language
     * written in that script: for instance, the sample language for
     * %PANGO_SCRIPT_CYRILLIC is ru (Russian), the sample language for
     * %PANGO_SCRIPT_ARABIC is ar.
     *
     * For some scripts, no sample language will be returned because
     * there is no language that is sufficiently representative. The
     * best example of this is %PANGO_SCRIPT_HAN, where various different
     * variants of written Chinese, Japanese, and Korean all use
     * significantly different sets of Han characters and forms
     * of shared characters. No sample language can be provided
     * for many historical scripts as well.
     *
     * As of 1.18, this function checks the environment variables
     * `PANGO_LANGUAGE` and `LANGUAGE` (checked in that order) first.
     * If one of them is set, it is parsed as a list of language tags
     * separated by colons or other separators. This function
     * will return the first language in the parsed list that Pango
     * believes may use `script` for writing. This last predicate
     * is tested using [method`Pango`.Language.includes_script]. This can
     * be used to control Pango's font selection for non-primary
     * languages. For example, a `PANGO_LANGUAGE` enviroment variable
     * set to "en:fa" makes Pango choose fonts suitable for Persian (fa)
     * instead of Arabic (ar) when a segment of Arabic text is found
     * in an otherwise non-Arabic text. The same trick can be used to
     * choose a default language for %PANGO_SCRIPT_HAN when setting
     * context language is not feasible.
     *
     * @returns a `PangoLanguage` that is representative
     *   of the script
     * @param script a `PangoScript`
     */
    function script_get_sample_language(script: Script | null): Language | null;
    /**
     * Convert the characters in `text` into glyphs.
     *
     * Given a segment of text and the corresponding `PangoAnalysis` structure
     * returned from [func`Pango`.itemize], convert the characters into glyphs. You
     * may also pass in only a substring of the item from [func`Pango`.itemize].
     *
     * It is recommended that you use [func`Pango`.shape_full] instead, since
     * that API allows for shaping interaction happening across text item
     * boundaries.
     *
     * Some aspects of hyphen insertion and text transformation (in particular,
     * capitalization) require log attrs, and thus can only be handled by
     * [func`Pango`.shape_item].
     *
     * Note that the extra attributes in the `analyis` that is returned from
     * [func`Pango`.itemize] have indices that are relative to the entire paragraph,
     * so you need to subtract the item offset from their indices before
     * calling [func`Pango`.shape].
     *
     * @param text the text to process
     * @param length the length (in bytes) of `text`
     * @param analysis `PangoAnalysis` structure from [func`Pango`.itemize]
     */
    function shape(text: string, length: number, analysis: Analysis): [GlyphString];
    /**
     * Convert the characters in `text` into glyphs.
     *
     * Given a segment of text and the corresponding `PangoAnalysis` structure
     * returned from [func`Pango`.itemize], convert the characters into glyphs.
     * You may also pass in only a substring of the item from [func`Pango`.itemize].
     *
     * This is similar to [func`Pango`.shape], except it also can optionally take
     * the full paragraph text as input, which will then be used to perform
     * certain cross-item shaping interactions. If you have access to the broader
     * text of which `item_text` is part of, provide the broader text as
     * `paragraph_text`. If `paragraph_text` is %NULL, item text is used instead.
     *
     * Some aspects of hyphen insertion and text transformation (in particular,
     * capitalization) require log attrs, and thus can only be handled by
     * [func`Pango`.shape_item].
     *
     * Note that the extra attributes in the `analyis` that is returned from
     * [func`Pango`.itemize] have indices that are relative to the entire paragraph,
     * so you do not pass the full paragraph text as `paragraph_text,` you need
     * to subtract the item offset from their indices before calling
     * [func`Pango`.shape_full].
     *
     * @param item_text valid UTF-8 text to shape.
     * @param item_length the length (in bytes) of `item_text`. -1 means nul-terminated text.
     * @param paragraph_text text of the paragraph (see details).
     * @param paragraph_length the length (in bytes) of `paragraph_text`. -1 means nul-terminated text.
     * @param analysis `PangoAnalysis` structure from [func`Pango`.itemize].
     */
    function shape_full(
        item_text: string,
        item_length: number,
        paragraph_text: string | null,
        paragraph_length: number,
        analysis: Analysis,
    ): [GlyphString];
    /**
     * Convert the characters in `item` into glyphs.
     *
     * This is similar to [func`Pango`.shape_with_flags], except it takes a
     * `PangoItem` instead of separate `item_text` and `analysis` arguments.
     *
     * It also takes `log_attrs,` which are needed for implementing some aspects
     * of hyphen insertion and text transforms (in particular, capitalization).
     *
     * Note that the extra attributes in the `analyis` that is returned from
     * [func`Pango`.itemize] have indices that are relative to the entire paragraph,
     * so you do not pass the full paragraph text as `paragraph_text,` you need
     * to subtract the item offset from their indices before calling
     * [func`Pango`.shape_with_flags].
     *
     * @param item `PangoItem` to shape
     * @param paragraph_text text of the paragraph (see details).
     * @param paragraph_length the length (in bytes) of `paragraph_text`.
     *     -1 means nul-terminated text.
     * @param log_attrs array of `PangoLogAttr` for `item`
     * @param flags flags influencing the shaping process
     */
    function shape_item(
        item: Item,
        paragraph_text: string | null,
        paragraph_length: number,
        log_attrs: LogAttr | null,
        flags: ShapeFlags | null,
    ): [GlyphString];
    /**
     * Convert the characters in `text` into glyphs.
     *
     * Given a segment of text and the corresponding `PangoAnalysis` structure
     * returned from [func`Pango`.itemize], convert the characters into glyphs.
     * You may also pass in only a substring of the item from [func`Pango`.itemize].
     *
     * This is similar to [func`Pango`.shape_full], except it also takes flags
     * that can influence the shaping process.
     *
     * Some aspects of hyphen insertion and text transformation (in particular,
     * capitalization) require log attrs, and thus can only be handled by
     * [func`Pango`.shape_item].
     *
     * Note that the extra attributes in the `analyis` that is returned from
     * [func`Pango`.itemize] have indices that are relative to the entire paragraph,
     * so you do not pass the full paragraph text as `paragraph_text,` you need
     * to subtract the item offset from their indices before calling
     * [func`Pango`.shape_with_flags].
     *
     * @param item_text valid UTF-8 text to shape
     * @param item_length the length (in bytes) of `item_text`.
     *     -1 means nul-terminated text.
     * @param paragraph_text text of the paragraph (see details).
     * @param paragraph_length the length (in bytes) of `paragraph_text`.
     *     -1 means nul-terminated text.
     * @param analysis `PangoAnalysis` structure from [func`Pango`.itemize]
     * @param flags flags influencing the shaping process
     */
    function shape_with_flags(
        item_text: string,
        item_length: number,
        paragraph_text: string | null,
        paragraph_length: number,
        analysis: Analysis,
        flags: ShapeFlags | null,
    ): [GlyphString];
    /**
     * Skips 0 or more characters of white space.
     *
     * @returns %FALSE if skipping the white space leaves
     *   the position at a '\0' character.
     * @param pos in/out string position
     */
    function skip_space(pos: string): [boolean, string];
    /**
     * Splits a %G_SEARCHPATH_SEPARATOR-separated list of files, stripping
     * white space and substituting ~/ with $HOME/.
     *
     * @returns a list of
     *   strings to be freed with g_strfreev()
     * @param str a %G_SEARCHPATH_SEPARATOR separated list of filenames
     */
    function split_file_list(str: string): string[];
    /**
     * Deserializes a `PangoTabArray` from a string.
     *
     * This is the counterpart to [method`Pango`.TabArray.to_string].
     * See that functions for details about the format.
     *
     * @returns a new `PangoTabArray`
     * @param text a string
     */
    function tab_array_from_string(text: string): TabArray | null;
    /**
     * Apply language-specific tailoring to the breaks in `attrs`.
     *
     * The line breaks are assumed to have been produced by [func`Pango`.default_break].
     *
     * If `offset` is not -1, it is used to apply attributes from `analysis` that are
     * relevant to line breaking.
     *
     * Note that it is better to pass -1 for `offset` and use [func`Pango`.attr_break]
     * to apply attributes to the whole paragraph.
     *
     * @param text text to process. Must be valid UTF-8
     * @param length length in bytes of `text`
     * @param analysis `PangoAnalysis` for `text`
     * @param offset Byte offset of `text` from the beginning of the
     *   paragraph, or -1 to ignore attributes from `analysis`
     */
    function tailor_break(text: string, length: number, analysis: Analysis, offset: number): [LogAttr[]];
    /**
     * Trims leading and trailing whitespace from a string.
     *
     * @returns A newly-allocated string that must be freed with g_free()
     * @param str a string
     */
    function trim_string(str: string): string;
    /**
     * Determines the inherent direction of a character.
     *
     * The inherent direction is either `PANGO_DIRECTION_LTR`, `PANGO_DIRECTION_RTL`,
     * or `PANGO_DIRECTION_NEUTRAL`.
     *
     * This function is useful to categorize characters into left-to-right
     * letters, right-to-left letters, and everything else. If full Unicode
     * bidirectional type of a character is needed, [func`Pango`.BidiType.for_unichar]
     * can be used instead.
     *
     * @returns the direction of the character.
     * @param ch a Unicode character
     */
    function unichar_direction(ch: string): Direction;
    /**
     * Converts a floating-point number to Pango units.
     *
     * The conversion is done by multiplying `d` by %PANGO_SCALE and
     * rounding the result to nearest integer.
     *
     * @returns the value in Pango units.
     * @param d double floating-point value
     */
    function units_from_double(d: number): number;
    /**
     * Converts a number in Pango units to floating-point.
     *
     * The conversion is done by dividing `i` by %PANGO_SCALE.
     *
     * @returns the double value.
     * @param i value in Pango units
     */
    function units_to_double(i: number): number;
    /**
     * Returns the encoded version of Pango available at run-time.
     *
     * This is similar to the macro %PANGO_VERSION except that the macro
     * returns the encoded version available at compile-time. A version
     * number can be encoded into an integer using PANGO_VERSION_ENCODE().
     *
     * @returns The encoded version of Pango library available at run time.
     */
    function version(): number;
    /**
     * Checks that the Pango library in use is compatible with the
     * given version.
     *
     * Generally you would pass in the constants %PANGO_VERSION_MAJOR,
     * %PANGO_VERSION_MINOR, %PANGO_VERSION_MICRO as the three arguments
     * to this function; that produces a check that the library in use at
     * run-time is compatible with the version of Pango the application or
     * module was compiled against.
     *
     * Compatibility is defined by two things: first the version
     * of the running library is newer than the version
     * `required_major`.required_minor.`required_micro`. Second
     * the running library must be binary compatible with the
     * version `required_major`.required_minor.`required_micro`
     * (same major version.)
     *
     * For compile-time version checking use PANGO_VERSION_CHECK().
     *
     * @returns %NULL if the Pango library is compatible
     *   with the given version, or a string describing the version
     *   mismatch.  The returned string is owned by Pango and should not
     *   be modified or freed.
     * @param required_major the required major version
     * @param required_minor the required minor version
     * @param required_micro the required major version
     */
    function version_check(required_major: number, required_minor: number, required_micro: number): string | null;
    /**
     * Returns the version of Pango available at run-time.
     *
     * This is similar to the macro %PANGO_VERSION_STRING except that the
     * macro returns the version available at compile-time.
     *
     * @returns A string containing the version of Pango library available
     *   at run time. The returned string is owned by Pango and should not
     *   be modified or freed.
     */
    function version_string(): string;
    interface AttrDataCopyFunc {
        (user_data?: any | null): any | null;
    }
    interface AttrFilterFunc {
        (attribute: Attribute): boolean;
    }
    interface FontsetForeachFunc {
        (fontset: Fontset, font: Font): boolean;
    }
    /**
     * The bits in a `PangoFontMask` correspond to the set fields in a
     * `PangoFontDescription`.
     */
    export namespace FontMask {
        export const $gtype: GObject.GType<FontMask>;
    }
    enum FontMask {
        /**
         * the font family is specified.
         */
        FAMILY = 1,
        /**
         * the font style is specified.
         */
        STYLE = 2,
        /**
         * the font variant is specified.
         */
        VARIANT = 4,
        /**
         * the font weight is specified.
         */
        WEIGHT = 8,
        /**
         * the font stretch is specified.
         */
        STRETCH = 16,
        /**
         * the font size is specified.
         */
        SIZE = 32,
        /**
         * The font gravity is specified.
         */
        GRAVITY = 64,
        /**
         * OpenType font variations are specified.
         */
        VARIATIONS = 128,
        /**
         * OpenType font features are specified.
         */
        FEATURES = 256,
        /**
         * Font color is specified.
         */
        COLOR = 512,
    }
    /**
     * Flags that influence the behavior of [func`Pango`.Layout.deserialize].
     *
     * New members may be added to this enumeration over time.
     */
    export namespace LayoutDeserializeFlags {
        export const $gtype: GObject.GType<LayoutDeserializeFlags>;
    }
    enum LayoutDeserializeFlags {
        /**
         * Default behavior
         */
        DEFAULT,
        /**
         * Apply context information
         *   from the serialization to the `PangoContext`
         */
        CONTEXT = 1,
    }
    /**
     * Flags that influence the behavior of [method`Pango`.Layout.serialize].
     *
     * New members may be added to this enumeration over time.
     */
    export namespace LayoutSerializeFlags {
        export const $gtype: GObject.GType<LayoutSerializeFlags>;
    }
    enum LayoutSerializeFlags {
        /**
         * Default behavior
         */
        DEFAULT,
        /**
         * Include context information
         */
        CONTEXT = 1,
        /**
         * Include information about the formatted output
         */
        OUTPUT = 2,
    }
    /**
     * Flags influencing the shaping process.
     *
     * `PangoShapeFlags` can be passed to [func`Pango`.shape_with_flags].
     */
    export namespace ShapeFlags {
        export const $gtype: GObject.GType<ShapeFlags>;
    }
    enum ShapeFlags {
        /**
         * Default value
         */
        NONE,
        /**
         * Round glyph positions and widths to whole device units
         *   This option should be set if the target renderer can't do subpixel positioning of glyphs
         */
        ROUND_POSITIONS = 1,
    }
    /**
     * These flags affect how Pango treats characters that are normally
     * not visible in the output.
     */
    export namespace ShowFlags {
        export const $gtype: GObject.GType<ShowFlags>;
    }
    enum ShowFlags {
        /**
         * No special treatment for invisible characters
         */
        NONE,
        /**
         * Render spaces, tabs and newlines visibly
         */
        SPACES = 1,
        /**
         * Render line breaks visibly
         */
        LINE_BREAKS = 2,
        /**
         * Render default-ignorable Unicode
         *   characters visibly
         */
        IGNORABLES = 4,
    }
    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Context = (typeof classes.Context)['prototype'];
    const Context: typeof classes.Context &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.Context.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Context.SignalSignatures> & classes.Context);
    namespace Coverage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Coverage = (typeof classes.Coverage)['prototype'];
    const Coverage: typeof classes.Coverage &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.Coverage.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Coverage.SignalSignatures> & classes.Coverage);
    namespace Font {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Font = (typeof classes.Font)['prototype'];
    const Font: typeof classes.Font &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.Font.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Font.SignalSignatures> & classes.Font);
    namespace FontFace {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type FontFace = (typeof classes.FontFace)['prototype'];
    const FontFace: typeof classes.FontFace &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.FontFace.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FontFace.SignalSignatures> & classes.FontFace);
    namespace FontFamily {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::is-monospace'(pspec: GObject.ParamSpec): void;
            'notify::is-variable'(pspec: GObject.ParamSpec): void;
            'notify::item-type'(pspec: GObject.ParamSpec): void;
            'notify::n-items'(pspec: GObject.ParamSpec): void;
            'notify::name'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps,
                Gio.ListModel.ConstructorProps {
            /**
             * Is this a monospace font
             */
            is_monospace: boolean;
            /**
             * Is this a monospace font
             */
            isMonospace: boolean;
            /**
             * Is this a variable font
             */
            is_variable: boolean;
            /**
             * Is this a variable font
             */
            isVariable: boolean;
            /**
             * The type of items contained in this list.
             */
            item_type: GObject.GType;
            /**
             * The type of items contained in this list.
             */
            itemType: GObject.GType;
            /**
             * The number of items contained in this list.
             */
            n_items: number;
            /**
             * The number of items contained in this list.
             */
            nItems: number;
            /**
             * The name of the family
             */
            name: string;
        }
    }
    type FontFamily<A extends GObject.Object = GObject.Object> = (typeof classes.FontFamily<A>)['prototype'];
    const FontFamily: typeof classes.FontFamily &
        (abstract new <A extends GObject.Object = GObject.Object, Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.FontFamily.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FontFamily.SignalSignatures> & classes.FontFamily<A>);
    namespace FontMap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::item-type'(pspec: GObject.ParamSpec): void;
            'notify::n-items'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps,
                Gio.ListModel.ConstructorProps {
            /**
             * The type of items contained in this list.
             */
            item_type: GObject.GType;
            /**
             * The type of items contained in this list.
             */
            itemType: GObject.GType;
            /**
             * The number of items contained in this list.
             */
            n_items: number;
            /**
             * The number of items contained in this list.
             */
            nItems: number;
        }
    }
    type FontMap<A extends GObject.Object = GObject.Object> = (typeof classes.FontMap<A>)['prototype'];
    const FontMap: typeof classes.FontMap &
        (abstract new <A extends GObject.Object = GObject.Object, Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.FontMap.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FontMap.SignalSignatures> & classes.FontMap<A>);
    namespace Fontset {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Fontset = (typeof classes.Fontset)['prototype'];
    const Fontset: typeof classes.Fontset &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.Fontset.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Fontset.SignalSignatures> & classes.Fontset);
    namespace FontsetSimple {
        // Signal signatures
        interface SignalSignatures extends Fontset.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends Fontset.ConstructorProps {}
    }
    type FontsetSimple = (typeof classes.FontsetSimple)['prototype'];
    const FontsetSimple: typeof classes.FontsetSimple &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.FontsetSimple.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FontsetSimple.SignalSignatures> & classes.FontsetSimple);
    namespace Layout {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Layout = (typeof classes.Layout)['prototype'];
    const Layout: typeof classes.Layout &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.Layout.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Layout.SignalSignatures> & classes.Layout);
    namespace Renderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Renderer = (typeof classes.Renderer)['prototype'];
    const Renderer: typeof classes.Renderer &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Pango.Renderer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Renderer.SignalSignatures> & classes.Renderer);
    /**
     * The `PangoAnalysis` structure stores information about
     * the properties of a segment of text.
     */
    class Analysis {
        static '$gtype': GObject.GType<Analysis>;
        // Fields
        shape_engine: any;
        lang_engine: any;
        font: Font;
        level: number;
        gravity: number;
        flags: number;
        script: number;
        extra_attrs: any[];
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * The `PangoAttrClass` structure stores the type and operations for
     * a particular type of attribute.
     *
     * The functions in this structure should not be called directly. Instead,
     * one should use the wrapper functions provided for `PangoAttribute`.
     */
    class AttrClass {
        static '$gtype': GObject.GType<AttrClass>;
        // Fields
        type: AttrType;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * The `PangoAttrColor` structure is used to represent attributes that
     * are colors.
     */
    class AttrColor {
        static '$gtype': GObject.GType<AttrColor>;
        // Fields
        color: Color;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * The `PangoAttrFloat` structure is used to represent attributes with
     * a float or double value.
     */
    class AttrFloat {
        static '$gtype': GObject.GType<AttrFloat>;
        // Fields
        value: number;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * The `PangoAttrFontDesc` structure is used to store an attribute that
     * sets all aspects of the font description at once.
     */
    class AttrFontDesc {
        static '$gtype': GObject.GType<AttrFontDesc>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Create a new font description attribute.
         *
         * This attribute allows setting family, style, weight, variant,
         * stretch, and size simultaneously.
         *
         * @param desc the font description
         */
        static new(desc: FontDescription): Attribute;
    }
    /**
     * The `PangoAttrFontFeatures` structure is used to represent OpenType
     * font features as an attribute.
     */
    class AttrFontFeatures {
        static '$gtype': GObject.GType<AttrFontFeatures>;
        // Fields
        features: string;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Create a new font features tag attribute.
         *
         * You can use this attribute to select OpenType font features like small-caps,
         * alternative glyphs, ligatures, etc. for fonts that support them.
         *
         * @param features a string with OpenType font features, with the syntax of the [CSS
         * font-feature-settings property](https://www.w3.org/TR/css-fonts-4/#font-rend-desc)
         */
        static new(features: string): Attribute;
    }
    /**
     * The `PangoAttrInt` structure is used to represent attributes with
     * an integer or enumeration value.
     */
    class AttrInt {
        static '$gtype': GObject.GType<AttrInt>;
        // Fields
        value: number;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A `PangoAttrIterator` is used to iterate through a `PangoAttrList`.
     *
     * A new iterator is created with [method`Pango`.AttrList.get_iterator].
     * Once the iterator is created, it can be advanced through the style
     * changes in the text using [method`Pango`.AttrIterator.next]. At each
     * style change, the range of the current style segment and the attributes
     * currently in effect can be queried.
     */
    abstract class AttrIterator {
        static '$gtype': GObject.GType<AttrIterator>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Copy a `PangoAttrIterator`.
         *
         * @returns the newly allocated
         *   `PangoAttrIterator`, which should be freed with
         *   [method`Pango`.AttrIterator.destroy]
         */
        copy(): AttrIterator;
        /**
         * Destroy a `PangoAttrIterator` and free all associated memory.
         */
        destroy(): void;
        /**
         * Find the current attribute of a particular type
         * at the iterator location.
         *
         * When multiple attributes of the same type overlap,
         * the attribute whose range starts closest to the
         * current location is used.
         *
         * @returns the current
         *   attribute of the given type, or %NULL if no attribute
         *   of that type applies to the current location.
         * @param type the type of attribute to find
         */
        get(type: AttrType | null): Attribute | null;
        /**
         * Gets a list of all attributes at the current position of the
         * iterator.
         *
         * @returns a list of all attributes for the current range. To free
         *   this value, call [method`Pango`.Attribute.destroy] on each
         *   value and g_slist_free() on the list.
         */
        get_attrs(): Attribute[];
        /**
         * Get the font and other attributes at the current
         * iterator position.
         *
         * @param desc a `PangoFontDescription` to fill in with the current
         *   values. The family name in this structure will be set using
         *   [method`Pango`.FontDescription.set_family_static] using
         *   values from an attribute in the `PangoAttrList` associated
         *   with the iterator, so if you plan to keep it around, you
         *   must call:
         *   `pango_font_description_set_family (desc, pango_font_description_get_family (desc))`.
         */
        get_font(desc: FontDescription): [Language | null, Attribute[] | null];
        /**
         * Advance the iterator until the next change of style.
         *
         * @returns %FALSE if the iterator is at the end
         *   of the list, otherwise %TRUE
         */
        next(): boolean;
        /**
         * Get the range of the current segment.
         *
         * Note that the stored return values are signed, not unsigned
         * like the values in `PangoAttribute`. To deal with this API
         * oversight, stored return values that wouldn't fit into
         * a signed integer are clamped to %G_MAXINT.
         */
        range(): [number, number];
    }
    /**
     * The `PangoAttrLanguage` structure is used to represent attributes that
     * are languages.
     */
    class AttrLanguage {
        static '$gtype': GObject.GType<AttrLanguage>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Create a new language tag attribute.
         *
         * @param language language tag
         */
        static new(language: Language): Attribute;
    }
    /**
     * A `PangoAttrList` represents a list of attributes that apply to a section
     * of text.
     *
     * The attributes in a `PangoAttrList` are, in general, allowed to overlap in
     * an arbitrary fashion. However, if the attributes are manipulated only through
     * [method`Pango`.AttrList.change], the overlap between properties will meet
     * stricter criteria.
     *
     * Since the `PangoAttrList` structure is stored as a linear list, it is not
     * suitable for storing attributes for large amounts of text. In general, you
     * should not use a single `PangoAttrList` for more than one paragraph of text.
     */
    class AttrList {
        static '$gtype': GObject.GType<AttrList>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(): AttrList;
        // Static methods
        /**
         * Deserializes a `PangoAttrList` from a string.
         *
         * This is the counterpart to [method`Pango`.AttrList.to_string].
         * See that functions for details about the format.
         *
         * @param text a string
         */
        static from_string(text: string): AttrList | null;
        // Methods
        /**
         * Insert the given attribute into the `PangoAttrList`.
         *
         * It will replace any attributes of the same type
         * on that segment and be merged with any adjoining
         * attributes that are identical.
         *
         * This function is slower than [method`Pango`.AttrList.insert]
         * for creating an attribute list in order (potentially
         * much slower for large lists). However,
         * [method`Pango`.AttrList.insert] is not suitable for
         * continually changing a set of attributes since it
         * never removes or combines existing attributes.
         *
         * @param attr the attribute to insert
         */
        change(attr: Attribute): void;
        /**
         * Copy `list` and return an identical new list.
         *
         * @returns the newly allocated
         *   `PangoAttrList`, with a reference count of one,
         *   which should be freed with [method`Pango`.AttrList.unref].
         *   Returns %NULL if `list` was %NULL.
         */
        copy(): AttrList | null;
        /**
         * Checks whether `list` and `other_list` contain the same
         * attributes and whether those attributes apply to the
         * same ranges.
         *
         * Beware that this will return wrong values if any list
         * contains duplicates.
         *
         * @returns %TRUE if the lists are equal, %FALSE if
         *   they aren't
         * @param other_list the other `PangoAttrList`
         */
        equal(other_list: AttrList): boolean;
        /**
         * Given a `PangoAttrList` and callback function, removes
         * any elements of `list` for which `func` returns %TRUE and
         * inserts them into a new list.
         *
         * @returns the new
         *   `PangoAttrList` or %NULL if no attributes of the
         *   given types were found
         * @param func callback function;
         *   returns %TRUE if an attribute should be filtered out
         */
        filter(func: AttrFilterFunc): AttrList | null;
        /**
         * Gets a list of all attributes in `list`.
         *
         * @returns a list of all attributes in `list`. To free this value,
         *   call [method`Pango`.Attribute.destroy] on each value and
         *   g_slist_free() on the list.
         */
        get_attributes(): Attribute[];
        /**
         * Create a iterator initialized to the beginning of the list.
         *
         * `list` must not be modified until this iterator is freed.
         *
         * @returns the newly allocated
         *   `PangoAttrIterator`, which should be freed with
         *   [method`Pango`.AttrIterator.destroy]
         */
        get_iterator(): AttrIterator;
        /**
         * Insert the given attribute into the `PangoAttrList`.
         *
         * It will be inserted after all other attributes with a
         * matching `start_index`.
         *
         * @param attr the attribute to insert
         */
        insert(attr: Attribute): void;
        /**
         * Insert the given attribute into the `PangoAttrList`.
         *
         * It will be inserted before all other attributes with a
         * matching `start_index`.
         *
         * @param attr the attribute to insert
         */
        insert_before(attr: Attribute): void;
        /**
         * Increase the reference count of the given attribute
         * list by one.
         *
         * @returns The attribute list passed in
         */
        ref(): AttrList;
        /**
         * This function opens up a hole in `list,` fills it
         * in with attributes from the left, and then merges
         * `other` on top of the hole.
         *
         * This operation is equivalent to stretching every attribute
         * that applies at position `pos` in `list` by an amount `len,`
         * and then calling [method`Pango`.AttrList.change] with a copy
         * of each attribute in `other` in sequence (offset in position
         * by `pos,` and limited in length to `len)`.
         *
         * This operation proves useful for, for instance, inserting
         * a pre-edit string in the middle of an edit buffer.
         *
         * For backwards compatibility, the function behaves differently
         * when `len` is 0. In this case, the attributes from `other` are
         * not imited to `len,` and are just overlayed on top of `list`.
         *
         * This mode is useful for merging two lists of attributes together.
         *
         * @param other another `PangoAttrList`
         * @param pos the position in `list` at which to insert `other`
         * @param len the length of the spliced segment. (Note that this
         *   must be specified since the attributes in `other` may only
         *   be present at some subsection of this range)
         */
        splice(other: AttrList, pos: number, len: number): void;
        /**
         * Serializes a `PangoAttrList` to a string.
         *
         * In the resulting string, serialized attributes are separated by newlines or commas.
         * Individual attributes are serialized to a string of the form
         *
         *     [START END] TYPE VALUE
         *
         * Where START and END are the indices (with -1 being accepted in place
         * of MAXUINT), TYPE is the nickname of the attribute value type, e.g.
         * _weight_ or _stretch_, and the value is serialized according to its type:
         *
         * Optionally, START and END can be omitted to indicate unlimited extent.
         *
         * - enum values as nick or numeric value
         * - boolean values as _true_ or _false_
         * - integers and floats as numbers
         * - strings as string, optionally quoted
         * - font features as quoted string
         * - PangoLanguage as string
         * - PangoFontDescription as serialized by [method`Pango`.FontDescription.to_string], quoted
         * - PangoColor as serialized by [method`Pango`.Color.to_string]
         *
         * Examples:
         *
         *     0 10 foreground red, 5 15 weight bold, 0 200 font-desc "Sans 10"
         *
         *     0 -1 weight 700
         *     0 100 family Times
         *
         *     weight bold
         *
         * To parse the returned value, use [func`Pango`.AttrList.from_string].
         *
         * Note that shape attributes can not be serialized.
         *
         * @returns a newly allocated string
         */
        to_string(): string;
        /**
         * Decrease the reference count of the given attribute
         * list by one.
         *
         * If the result is zero, free the attribute list
         * and the attributes it contains.
         */
        unref(): void;
        /**
         * Update indices of attributes in `list` for a change in the
         * text they refer to.
         *
         * The change that this function applies is removing `remove`
         * bytes at position `pos` and inserting `add` bytes instead.
         *
         * Attributes that fall entirely in the (`pos,` `pos` + `remove)`
         * range are removed.
         *
         * Attributes that start or end inside the (`pos,` `pos` + `remove)`
         * range are shortened to reflect the removal.
         *
         * Attributes start and end positions are updated if they are
         * behind `pos` + `remove`.
         *
         * @param pos the position of the change
         * @param remove the number of removed bytes
         * @param add the number of added bytes
         */
        update(pos: number, remove: number, add: number): void;
    }
    /**
     * The `PangoAttrShape` structure is used to represent attributes which
     * impose shape restrictions.
     */
    class AttrShape {
        static '$gtype': GObject.GType<AttrShape>;
        // Fields
        ink_rect: Rectangle;
        logical_rect: Rectangle;
        data: any;
        copy_func: AttrDataCopyFunc;
        destroy_func: GLib.DestroyNotify;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Create a new shape attribute.
         *
         * A shape is used to impose a particular ink and logical
         * rectangle on the result of shaping a particular glyph.
         * This might be used, for instance, for embedding a picture
         * or a widget inside a `PangoLayout`.
         *
         * @param ink_rect ink rectangle to assign to each character
         * @param logical_rect logical rectangle to assign to each character
         */
        static new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute;
        /**
         * Creates a new shape attribute.
         *
         * Like [func`Pango`.AttrShape.new], but a user data pointer
         * is also provided; this pointer can be accessed when later
         * rendering the glyph.
         *
         * @param ink_rect ink rectangle to assign to each character
         * @param logical_rect logical rectangle to assign to each character
         * @param data user data pointer
         * @param copy_func function to copy `data` when the
         *   attribute is copied. If %NULL, `data` is simply copied
         *   as a pointer
         * @param destroy_func function to free `data` when the
         *   attribute is freed
         */
        static new_with_data(
            ink_rect: Rectangle,
            logical_rect: Rectangle,
            data?: any | null,
            copy_func?: AttrDataCopyFunc | null,
            destroy_func?: GLib.DestroyNotify | null,
        ): Attribute;
    }
    /**
     * The `PangoAttrSize` structure is used to represent attributes which
     * set font size.
     */
    class AttrSize {
        static '$gtype': GObject.GType<AttrSize>;
        // Fields
        size: number;
        absolute: number;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Create a new font-size attribute in fractional points.
         *
         * @param size the font size, in %PANGO_SCALE-ths of a point
         */
        static new(size: number): Attribute;
        /**
         * Create a new font-size attribute in device units.
         *
         * @param size the font size, in %PANGO_SCALE-ths of a device unit
         */
        static new_absolute(size: number): Attribute;
    }
    /**
     * The `PangoAttrString` structure is used to represent attributes with
     * a string value.
     */
    class AttrString {
        static '$gtype': GObject.GType<AttrString>;
        // Fields
        value: string;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * The `PangoAttribute` structure represents the common portions of all
     * attributes.
     *
     * Particular types of attributes include this structure as their initial
     * portion. The common portion of the attribute holds the range to which
     * the value in the type-specific part of the attribute applies and should
     * be initialized using [method`Pango`.Attribute.init]. By default, an attribute
     * will have an all-inclusive range of [0,%G_MAXUINT].
     */
    class Attribute {
        static '$gtype': GObject.GType<Attribute>;
        // Fields
        start_index: number;
        end_index: number;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Returns the attribute cast to `PangoAttrColor`.
         *
         * This is mainly useful for language bindings.
         *
         * @returns The attribute as `PangoAttrColor`,
         *   or %NULL if it's not a color attribute
         */
        as_color(): AttrColor | null;
        /**
         * Returns the attribute cast to `PangoAttrFloat`.
         *
         * This is mainly useful for language bindings.
         *
         * @returns The attribute as `PangoAttrFloat`,
         *   or %NULL if it's not a floating point attribute
         */
        as_float(): AttrFloat | null;
        /**
         * Returns the attribute cast to `PangoAttrFontDesc`.
         *
         * This is mainly useful for language bindings.
         *
         * @returns The attribute as `PangoAttrFontDesc`,
         *   or %NULL if it's not a font description attribute
         */
        as_font_desc(): AttrFontDesc | null;
        /**
         * Returns the attribute cast to `PangoAttrFontFeatures`.
         *
         * This is mainly useful for language bindings.
         *
         * @returns The attribute as `PangoAttrFontFeatures`,
         *   or %NULL if it's not a font features attribute
         */
        as_font_features(): AttrFontFeatures | null;
        /**
         * Returns the attribute cast to `PangoAttrInt`.
         *
         * This is mainly useful for language bindings.
         *
         * @returns The attribute as `PangoAttrInt`,
         *   or %NULL if it's not an integer attribute
         */
        as_int(): AttrInt | null;
        /**
         * Returns the attribute cast to `PangoAttrLanguage`.
         *
         * This is mainly useful for language bindings.
         *
         * @returns The attribute as `PangoAttrLanguage`,
         *   or %NULL if it's not a language attribute
         */
        as_language(): AttrLanguage | null;
        /**
         * Returns the attribute cast to `PangoAttrShape`.
         *
         * This is mainly useful for language bindings.
         *
         * @returns The attribute as `PangoAttrShape`,
         *   or %NULL if it's not a shape attribute
         */
        as_shape(): AttrShape | null;
        /**
         * Returns the attribute cast to `PangoAttrSize`.
         *
         * This is mainly useful for language bindings.
         *
         * @returns The attribute as `PangoAttrSize`,
         *   or NULL if it's not a size attribute
         */
        as_size(): AttrSize | null;
        /**
         * Returns the attribute cast to `PangoAttrString`.
         *
         * This is mainly useful for language bindings.
         *
         * @returns The attribute as `PangoAttrString`,
         *   or %NULL if it's not a string attribute
         */
        as_string(): AttrString | null;
        /**
         * Make a copy of an attribute.
         *
         * @returns the newly allocated
         *   `PangoAttribute`, which should be freed with
         *   [method`Pango`.Attribute.destroy].
         */
        copy(): Attribute;
        /**
         * Destroy a `PangoAttribute` and free all associated memory.
         */
        destroy(): void;
        /**
         * Compare two attributes for equality.
         *
         * This compares only the actual value of the two
         * attributes and not the ranges that the attributes
         * apply to.
         *
         * @returns %TRUE if the two attributes have the same value
         * @param _attr2 another `PangoAttribute`
         */
        equal(_attr2: Attribute): boolean;
        /**
         * Initializes `attr'`s klass to `klass,` it's start_index to
         * %PANGO_ATTR_INDEX_FROM_TEXT_BEGINNING and end_index to
         * %PANGO_ATTR_INDEX_TO_TEXT_END such that the attribute applies
         * to the entire text by default.
         *
         * @param klass a `PangoAttrClass`
         */
        init(klass: AttrClass): void;
    }
    /**
     * The `PangoColor` structure is used to
     * represent a color in an uncalibrated RGB color-space.
     */
    class Color {
        static '$gtype': GObject.GType<Color>;
        // Fields
        red: number;
        green: number;
        blue: number;
        // Constructors
        constructor(
            properties?: Partial<{
                red: number;
                green: number;
                blue: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Creates a copy of `src`.
         *
         * The copy should be freed with [method`Pango`.Color.free].
         * Primarily used by language bindings, not that useful
         * otherwise (since colors can just be copied by assignment
         * in C).
         *
         * @returns the newly allocated `PangoColor`,
         *   which should be freed with [method`Pango`.Color.free]
         */
        copy(): Color | null;
        /**
         * Frees a color allocated by [method`Pango`.Color.copy].
         */
        free(): void;
        /**
         * Fill in the fields of a color from a string specification.
         *
         * The string can either one of a large set of standard names.
         * (Taken from the CSS Color [specification](https://www.w3.org/TR/css-color-4/#named-colors),
         * or it can be a value in the form `#rgb`, `#rrggbb`,
         * `#rrrgggbbb` or `#rrrrggggbbbb`, where `r`, `g` and `b`
         * are hex digits of the red, green, and blue components
         * of the color, respectively. (White in the four forms is
         * `#fff`, `#ffffff`, `#fffffffff` and `#ffffffffffff`.)
         *
         * @returns %TRUE if parsing of the specifier succeeded,
         *   otherwise %FALSE
         * @param spec a string specifying the new color
         */
        parse(spec: string): boolean;
        /**
         * Fill in the fields of a color from a string specification.
         *
         * The string can either one of a large set of standard names.
         * (Taken from the CSS Color [specification](https://www.w3.org/TR/css-color-4/#named-colors),
         * or it can be a hexadecimal value in the form `#rgb`,
         * `#rrggbb`, `#rrrgggbbb` or `#rrrrggggbbbb` where `r`, `g`
         * and `b` are hex digits of the red, green, and blue components
         * of the color, respectively. (White in the four forms is
         * `#fff`, `#ffffff`, `#fffffffff` and `#ffffffffffff`.)
         *
         * Additionally, parse strings of the form `#rgba`, `#rrggbbaa`,
         * `#rrrrggggbbbbaaaa`, if `alpha` is not %NULL, and set `alpha`
         * to the value specified by the hex digits for `a`. If no alpha
         * component is found in `spec,` `alpha` is set to 0xffff (for a
         * solid color).
         *
         * @returns %TRUE if parsing of the specifier succeeded,
         *   otherwise %FALSE
         * @param spec a string specifying the new color
         */
        parse_with_alpha(spec: string): [boolean, number];
        /**
         * Returns a textual specification of `color`.
         *
         * The string is in the hexadecimal form `#rrrrggggbbbb`,
         * where `r`, `g` and `b` are hex digits representing the
         * red, green, and blue components respectively.
         *
         * @returns a newly-allocated text string that must
         *   be freed with g_free().
         */
        to_string(): string;
    }
    export type ContextClass = typeof Context;
    export type FontClass = typeof Font;
    /**
     * A `PangoFontDescription` describes a font in an implementation-independent
     * manner.
     *
     * `PangoFontDescription` structures are used both to list what fonts are
     * available on the system and also for specifying the characteristics of
     * a font to load.
     */
    class FontDescription {
        static '$gtype': GObject.GType<FontDescription>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(): FontDescription;
        // Static methods
        /**
         * Creates a new font description from a string representation.
         *
         * The string must have the form
         *
         *     [FAMILY-LIST] [STYLE-OPTIONS] [SIZE] [VARIATIONS] [FEATURES]
         *
         * where FAMILY-LIST is a comma-separated list of families optionally
         * terminated by a comma, STYLE_OPTIONS is a whitespace-separated list
         * of words where each word describes one of style, variant, weight,
         * stretch, or gravity, and SIZE is a decimal number (size in points)
         * or optionally followed by the unit modifier "px" for absolute size.
         *
         * The following words are understood as styles:
         * "Normal", "Roman", "Oblique", "Italic".
         *
         * The following words are understood as variants:
         * "Small-Caps", "All-Small-Caps", "Petite-Caps", "All-Petite-Caps",
         * "Unicase", "Title-Caps".
         *
         * The following words are understood as weights:
         * "Thin", "Ultra-Light", "Extra-Light", "Light", "Semi-Light",
         * "Demi-Light", "Book", "Regular", "Medium", "Semi-Bold", "Demi-Bold",
         * "Bold", "Ultra-Bold", "Extra-Bold", "Heavy", "Black", "Ultra-Black",
         * "Extra-Black".
         *
         * The following words are understood as stretch values:
         * "Ultra-Condensed", "Extra-Condensed", "Condensed", "Semi-Condensed",
         * "Semi-Expanded", "Expanded", "Extra-Expanded", "Ultra-Expanded".
         *
         * The following words are understood as gravity values:
         * "Not-Rotated", "South", "Upside-Down", "North", "Rotated-Left",
         * "East", "Rotated-Right", "West".
         *
         * The following words are understood as color values:
         * "With-Color", "Without-Color".
         *
         * VARIATIONS is a comma-separated list of font variations
         * of the form `‍`axis1=value,axis2=value,...
         *
         * FEATURES is a comma-separated list of font features of the form
         * \#‍feature1=value,feature2=value,...
         * The =value part can be ommitted if the value is 1.
         *
         * Any one of the options may be absent. If FAMILY-LIST is absent, then
         * the family_name field of the resulting font description will be
         * initialized to %NULL. If STYLE-OPTIONS is missing, then all style
         * options will be set to the default values. If SIZE is missing, the
         * size in the resulting font description will be set to 0.
         *
         * A typical example:
         *
         *     Cantarell Italic Light 15 `‍`wght=200 #‍tnum=1
         *
         * @param str string representation of a font description.
         */
        static from_string(str: string): FontDescription;
        // Methods
        /**
         * Determines if the style attributes of `new_match` are a closer match
         * for `desc` than those of `old_match` are, or if `old_match` is %NULL,
         * determines if `new_match` is a match at all.
         *
         * Approximate matching is done for weight and style; other style attributes
         * must match exactly. Style attributes are all attributes other than family
         * and size-related attributes. Approximate matching for style considers
         * %PANGO_STYLE_OBLIQUE and %PANGO_STYLE_ITALIC as matches, but not as good
         * a match as when the styles are equal.
         *
         * Note that `old_match` must match `desc`.
         *
         * @returns %TRUE if `new_match` is a better match
         * @param old_match a `PangoFontDescription`, or %NULL
         * @param new_match a `PangoFontDescription`
         */
        better_match(old_match: FontDescription | null, new_match: FontDescription): boolean;
        /**
         * Make a copy of a `PangoFontDescription`.
         *
         * @returns the newly allocated `PangoFontDescription`,
         *   which should be freed with [method`Pango`.FontDescription.free],
         *   or %NULL if `desc` was %NULL.
         */
        copy(): FontDescription | null;
        /**
         * Make a copy of a `PangoFontDescription`, but don't duplicate
         * allocated fields.
         *
         * This is like [method`Pango`.FontDescription.copy], but only a shallow
         * copy is made of the family name and other allocated fields. The result
         * can only be used until `desc` is modified or freed. This is meant
         * to be used when the copy is only needed temporarily.
         *
         * @returns the newly allocated `PangoFontDescription`,
         *   which should be freed with [method`Pango`.FontDescription.free],
         *   or %NULL if `desc` was %NULL.
         */
        copy_static(): FontDescription | null;
        /**
         * Compares two font descriptions for equality.
         *
         * Two font descriptions are considered equal if the fonts they describe
         * are provably identical. This means that their masks do not have to match,
         * as long as other fields are all the same. (Two font descriptions may
         * result in identical fonts being loaded, but still compare %FALSE.)
         *
         * @returns %TRUE if the two font descriptions are identical,
         *   %FALSE otherwise.
         * @param _desc2 another `PangoFontDescription`
         */
        equal(_desc2: FontDescription): boolean;
        /**
         * Frees a font description.
         */
        free(): void;
        /**
         * Returns the color field of the font description.
         *
         * This field determines whether the font description should
         * match fonts that have color glyphs, or fonts that don't.
         */
        get_color(): FontColor;
        /**
         * Gets the family name field of a font description.
         *
         * See [method`Pango`.FontDescription.set_family].
         *
         * @returns the family name field for the
         *   font description, or %NULL if not previously set. This has the same
         *   life-time as the font description itself and should not be freed.
         */
        get_family(): string | null;
        /**
         * Gets the features field of a font description.
         *
         * See [method`Pango`.FontDescription.set_features].
         *
         * @returns the features field for the font
         *   description, or %NULL if not previously set. This has the same
         *   life-time as the font description itself and should not be freed.
         */
        get_features(): string | null;
        /**
         * Gets the gravity field of a font description.
         *
         * See [method`Pango`.FontDescription.set_gravity].
         *
         * @returns the gravity field for the font description.
         *   Use [method`Pango`.FontDescription.get_set_fields] to find out
         *   if the field was explicitly set or not.
         */
        get_gravity(): Gravity;
        /**
         * Determines which fields in a font description have been set.
         *
         * @returns a bitmask with bits set corresponding to the
         *   fields in `desc` that have been set.
         */
        get_set_fields(): FontMask;
        /**
         * Gets the size field of a font description.
         *
         * See [method`Pango`.FontDescription.set_size].
         *
         * @returns the size field for the font description in points
         *   or device units. You must call
         *   [method`Pango`.FontDescription.get_size_is_absolute] to find out
         *   which is the case. Returns 0 if the size field has not previously
         *   been set or it has been set to 0 explicitly.
         *   Use [method`Pango`.FontDescription.get_set_fields] to find out
         *   if the field was explicitly set or not.
         */
        get_size(): number;
        /**
         * Determines whether the size of the font is in points (not absolute)
         * or device units (absolute).
         *
         * See [method`Pango`.FontDescription.set_size]
         * and [method`Pango`.FontDescription.set_absolute_size].
         *
         * @returns whether the size for the font description is in
         *   points or device units. Use [method`Pango`.FontDescription.get_set_fields]
         *   to find out if the size field of the font description was explicitly
         *   set or not.
         */
        get_size_is_absolute(): boolean;
        /**
         * Gets the stretch field of a font description.
         *
         * See [method`Pango`.FontDescription.set_stretch].
         *
         * @returns the stretch field for the font description.
         *   Use [method`Pango`.FontDescription.get_set_fields] to find
         *   out if the field was explicitly set or not.
         */
        get_stretch(): Stretch;
        /**
         * Gets the style field of a `PangoFontDescription`.
         *
         * See [method`Pango`.FontDescription.set_style].
         *
         * @returns the style field for the font description.
         *   Use [method`Pango`.FontDescription.get_set_fields] to
         *   find out if the field was explicitly set or not.
         */
        get_style(): Style;
        /**
         * Gets the variant field of a `PangoFontDescription`.
         *
         * See [method`Pango`.FontDescription.set_variant].
         *
         * @returns the variant field for the font description.
         *   Use [method`Pango`.FontDescription.get_set_fields] to find
         *   out if the field was explicitly set or not.
         */
        get_variant(): Variant;
        /**
         * Gets the variations field of a font description.
         *
         * See [method`Pango`.FontDescription.set_variations].
         *
         * @returns the variations field for the font
         *   description, or %NULL if not previously set. This has the same
         *   life-time as the font description itself and should not be freed.
         */
        get_variations(): string | null;
        /**
         * Gets the weight field of a font description.
         *
         * See [method`Pango`.FontDescription.set_weight].
         *
         * @returns the weight field for the font description.
         *   Use [method`Pango`.FontDescription.get_set_fields] to find
         *   out if the field was explicitly set or not.
         */
        get_weight(): Weight;
        /**
         * Computes a hash of a `PangoFontDescription` structure.
         *
         * This is suitable to be used, for example, as an argument
         * to g_hash_table_new(). The hash value is independent of `desc->`mask.
         *
         * @returns the hash value.
         */
        hash(): number;
        /**
         * Merges the fields that are set in `desc_to_merge` into the fields in
         * `desc`.
         *
         * If `replace_existing` is %FALSE, only fields in `desc` that
         * are not already set are affected. If %TRUE, then fields that are
         * already set will be replaced as well.
         *
         * If `desc_to_merge` is %NULL, this function performs nothing.
         *
         * @param desc_to_merge the `PangoFontDescription` to merge from,
         *   or %NULL
         * @param replace_existing if %TRUE, replace fields in `desc` with the
         *   corresponding values from `desc_to_merge,` even if they
         *   are already exist.
         */
        merge(desc_to_merge: FontDescription | null, replace_existing: boolean): void;
        /**
         * Merges the fields that are set in `desc_to_merge` into the fields in
         * `desc,` without copying allocated fields.
         *
         * This is like [method`Pango`.FontDescription.merge], but only a shallow copy
         * is made of the family name and other allocated fields. `desc` can only
         * be used until `desc_to_merge` is modified or freed. This is meant to
         * be used when the merged font description is only needed temporarily.
         *
         * @param desc_to_merge the `PangoFontDescription` to merge from
         * @param replace_existing if %TRUE, replace fields in `desc` with the
         *   corresponding values from `desc_to_merge,` even if they
         *   are already exist.
         */
        merge_static(desc_to_merge: FontDescription, replace_existing: boolean): void;
        /**
         * Sets the size field of a font description, in device units.
         *
         * This is mutually exclusive with [method`Pango`.FontDescription.set_size]
         * which sets the font size in points.
         *
         * @param size the new size, in Pango units. There are %PANGO_SCALE Pango units
         *   in one device unit. For an output backend where a device unit is a pixel,
         *   a `size` value of 10 * PANGO_SCALE gives a 10 pixel font.
         */
        set_absolute_size(size: number): void;
        /**
         * Sets the color field of a font description.
         *
         * This field determines whether the font description should
         * match fonts that have color glyphs, or fonts that don't.
         *
         * @param color the `PangoFontColor` value
         */
        set_color(color: FontColor | null): void;
        /**
         * Sets the family name field of a font description.
         *
         * The family
         * name represents a family of related font styles, and will
         * resolve to a particular `PangoFontFamily`. In some uses of
         * `PangoFontDescription`, it is also possible to use a comma
         * separated list of family names for this field.
         *
         * @param family a string representing the family name.
         */
        set_family(family: string): void;
        /**
         * Sets the family name field of a font description, without copying the string.
         *
         * This is like [method`Pango`.FontDescription.set_family], except that no
         * copy of `family` is made. The caller must make sure that the
         * string passed in stays around until `desc` has been freed or the
         * name is set again. This function can be used if `family` is a static
         * string such as a C string literal, or if `desc` is only needed temporarily.
         *
         * @param family a string representing the family name
         */
        set_family_static(family: string): void;
        /**
         * Sets the features field of a font description.
         *
         * OpenType font features allow to enable or disable certain optional
         * features of a font, such as tabular numbers.
         *
         * The format of the features string is comma-separated list of
         * feature assignments, with each assignment being one of these forms:
         *
         *     FEATURE=n
         *
         * where FEATURE must be a 4 character tag that identifies and OpenType
         * feature, and n an integer (depending on the feature, the allowed
         * values may be 0, 1 or bigger numbers). Unknown features are ignored.
         *
         * Note that font features set in this way are enabled for the entire text
         * that is using the font, which is not appropriate for all OpenType features.
         * The intended use case is to select character variations (features cv01 - c99),
         * style sets (ss01 - ss20) and the like.
         *
         * Pango does not currently have a way to find supported OpenType features
         * of a font. Both harfbuzz and freetype have API for this. See for example
         * [hb_ot_layout_table_get_feature_tags](https://harfbuzz.github.io/harfbuzz-hb-ot-layout.html#hb-ot-layout-table-get-feature-tags).
         *
         * Features that are not supported by the font are silently ignored.
         *
         * @param features a string representing the features
         */
        set_features(features?: string | null): void;
        /**
         * Sets the features field of a font description.
         *
         * This is like [method`Pango`.FontDescription.set_features], except
         * that no copy of `featuresis` made. The caller must make sure that
         * the string passed in stays around until `desc` has been freed
         * or the name is set again. This function can be used if
         * `features` is a static string such as a C string literal,
         * or if `desc` is only needed temporarily.
         *
         * @param features a string representing the features
         */
        set_features_static(features: string): void;
        /**
         * Sets the gravity field of a font description.
         *
         * The gravity field
         * specifies how the glyphs should be rotated. If `gravity` is
         * %PANGO_GRAVITY_AUTO, this actually unsets the gravity mask on
         * the font description.
         *
         * This function is seldom useful to the user. Gravity should normally
         * be set on a `PangoContext`.
         *
         * @param gravity the gravity for the font description.
         */
        set_gravity(gravity: Gravity | null): void;
        /**
         * Sets the size field of a font description in fractional points.
         *
         * This is mutually exclusive with
         * [method`Pango`.FontDescription.set_absolute_size].
         *
         * @param size the size of the font in points, scaled by %PANGO_SCALE.
         *   (That is, a `size` value of 10 * PANGO_SCALE is a 10 point font.
         *   The conversion factor between points and device units depends on
         *   system configuration and the output device. For screen display, a
         *   logical DPI of 96 is common, in which case a 10 point font corresponds
         *   to a 10 * (96 / 72) = 13.3 pixel font.
         *   Use [method`Pango`.FontDescription.set_absolute_size] if you need
         *   a particular size in device units.
         */
        set_size(size: number): void;
        /**
         * Sets the stretch field of a font description.
         *
         * The [enum`Pango`.Stretch] field specifies how narrow or
         * wide the font should be.
         *
         * @param stretch the stretch for the font description
         */
        set_stretch(stretch: Stretch | null): void;
        /**
         * Sets the style field of a `PangoFontDescription`.
         *
         * The [enum`Pango`.Style] enumeration describes whether the font is
         * slanted and the manner in which it is slanted; it can be either
         * %PANGO_STYLE_NORMAL, %PANGO_STYLE_ITALIC, or %PANGO_STYLE_OBLIQUE.
         *
         * Most fonts will either have a italic style or an oblique style,
         * but not both, and font matching in Pango will match italic
         * specifications with oblique fonts and vice-versa if an exact
         * match is not found.
         *
         * @param style the style for the font description
         */
        set_style(style: Style | null): void;
        /**
         * Sets the variant field of a font description.
         *
         * The [enum`Pango`.Variant] can either be %PANGO_VARIANT_NORMAL
         * or %PANGO_VARIANT_SMALL_CAPS.
         *
         * @param variant the variant type for the font description.
         */
        set_variant(variant: Variant | null): void;
        /**
         * Sets the variations field of a font description.
         *
         * OpenType font variations allow to select a font instance by
         * specifying values for a number of axes, such as width or weight.
         *
         * The format of the variations string is
         *
         *     AXIS1=VALUE,AXIS2=VALUE...
         *
         * with each AXIS a 4 character tag that identifies a font axis,
         * and each VALUE a floating point number. Unknown axes are ignored,
         * and values are clamped to their allowed range.
         *
         * Pango does not currently have a way to find supported axes of
         * a font. Both harfbuzz and freetype have API for this. See
         * for example [hb_ot_var_get_axis_infos](https://harfbuzz.github.io/harfbuzz-hb-ot-var.html#hb-ot-var-get-axis-infos).
         *
         * @param variations a string representing the variations
         */
        set_variations(variations?: string | null): void;
        /**
         * Sets the variations field of a font description.
         *
         * This is like [method`Pango`.FontDescription.set_variations], except
         * that no copy of `variations` is made. The caller must make sure that
         * the string passed in stays around until `desc` has been freed
         * or the name is set again. This function can be used if
         * `variations` is a static string such as a C string literal,
         * or if `desc` is only needed temporarily.
         *
         * @param variations a string representing the variations
         */
        set_variations_static(variations: string): void;
        /**
         * Sets the weight field of a font description.
         *
         * The weight field
         * specifies how bold or light the font should be. In addition
         * to the values of the [enum`Pango`.Weight] enumeration, other
         * intermediate numeric values are possible.
         *
         * @param weight the weight for the font description.
         */
        set_weight(weight: Weight | null): void;
        /**
         * Creates a filename representation of a font description.
         *
         * The filename is identical to the result from calling
         * [method`Pango`.FontDescription.to_string], but with underscores
         * instead of characters that are untypical in filenames, and in
         * lower case only.
         *
         * @returns a new string that must be freed with g_free().
         */
        to_filename(): string | null;
        /**
         * Creates a string representation of a font description.
         *
         * See [func`Pango`.FontDescription.from_string] for a description
         * of the format of the string representation. The family list in
         * the string description will only have a terminating comma if
         * the last word of the list is a valid style option.
         *
         * @returns a new string that must be freed with g_free().
         */
        to_string(): string;
        /**
         * Unsets some of the fields in a `PangoFontDescription`.
         *
         * The unset fields will get back to their default values.
         *
         * @param to_unset bitmask of fields in the `desc` to unset.
         */
        unset_fields(to_unset: FontMask | null): void;
    }
    export type FontFaceClass = typeof FontFace;
    export type FontFamilyClass = typeof FontFamily;
    export type FontMapClass = typeof FontMap;
    /**
     * A `PangoFontMetrics` structure holds the overall metric information
     * for a font.
     *
     * The information in a `PangoFontMetrics` structure may be restricted
     * to a script. The fields of this structure are private to implementations
     * of a font backend. See the documentation of the corresponding getters
     * for documentation of their meaning.
     *
     * For an overview of the most important metrics, see:
     *
     * <picture>
     *   <source srcset="fontmetrics-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Font metrics" src="fontmetrics-light.png">
     * </picture>
     */
    class FontMetrics {
        static '$gtype': GObject.GType<FontMetrics>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        // Methods
        /**
         * Gets the approximate character width for a font metrics structure.
         *
         * This is merely a representative value useful, for example, for
         * determining the initial size for a window. Actual characters in
         * text will be wider and narrower than this.
         *
         * @returns the character width, in Pango units.
         */
        get_approximate_char_width(): number;
        /**
         * Gets the approximate digit width for a font metrics structure.
         *
         * This is merely a representative value useful, for example, for
         * determining the initial size for a window. Actual digits in
         * text can be wider or narrower than this, though this value
         * is generally somewhat more accurate than the result of
         * pango_font_metrics_get_approximate_char_width() for digits.
         *
         * @returns the digit width, in Pango units.
         */
        get_approximate_digit_width(): number;
        /**
         * Gets the ascent from a font metrics structure.
         *
         * The ascent is the distance from the baseline to the logical top
         * of a line of text. (The logical top may be above or below the top
         * of the actual drawn ink. It is necessary to lay out the text to
         * figure where the ink will be.)
         *
         * @returns the ascent, in Pango units.
         */
        get_ascent(): number;
        /**
         * Gets the descent from a font metrics structure.
         *
         * The descent is the distance from the baseline to the logical bottom
         * of a line of text. (The logical bottom may be above or below the
         * bottom of the actual drawn ink. It is necessary to lay out the text
         * to figure where the ink will be.)
         *
         * @returns the descent, in Pango units.
         */
        get_descent(): number;
        /**
         * Gets the line height from a font metrics structure.
         *
         * The line height is the recommended distance between successive
         * baselines in wrapped text using this font.
         *
         * If the line height is not available, 0 is returned.
         *
         * @returns the height, in Pango units
         */
        get_height(): number;
        /**
         * Gets the suggested position to draw the strikethrough.
         *
         * The value returned is the distance *above* the
         * baseline of the top of the strikethrough.
         *
         * @returns the suggested strikethrough position, in Pango units.
         */
        get_strikethrough_position(): number;
        /**
         * Gets the suggested thickness to draw for the strikethrough.
         *
         * @returns the suggested strikethrough thickness, in Pango units.
         */
        get_strikethrough_thickness(): number;
        /**
         * Gets the suggested position to draw the underline.
         *
         * The value returned is the distance *above* the baseline of the top
         * of the underline. Since most fonts have underline positions beneath
         * the baseline, this value is typically negative.
         *
         * @returns the suggested underline position, in Pango units.
         */
        get_underline_position(): number;
        /**
         * Gets the suggested thickness to draw for the underline.
         *
         * @returns the suggested underline thickness, in Pango units.
         */
        get_underline_thickness(): number;
        /**
         * Increase the reference count of a font metrics structure by one.
         *
         * @returns `metrics`
         */
        ref(): FontMetrics | null;
        /**
         * Decrease the reference count of a font metrics structure by one.
         *
         * If the result is zero, frees the structure and any associated memory.
         */
        unref(): void;
    }
    export type FontsetClass = typeof Fontset;
    export type FontsetSimpleClass = typeof FontsetSimple;
    /**
     * The `PangoGlyphGeometry` structure contains width and positioning
     * information for a single glyph.
     *
     * Note that `width` is not guaranteed to be the same as the glyph
     * extents. Kerning and other positioning applied during shaping will
     * affect both the `width` and the `x_offset` for the glyphs in the
     * glyph string that results from shaping.
     *
     * The information in this struct is intended for rendering the glyphs,
     * as follows:
     *
     * 1. Assume the current point is (x, y)
     * 2. Render the current glyph at (x + x_offset, y + y_offset),
     * 3. Advance the current point to (x + width, y)
     * 4. Render the next glyph
     */
    class GlyphGeometry {
        static '$gtype': GObject.GType<GlyphGeometry>;
        // Fields
        width: GlyphUnit;
        x_offset: GlyphUnit;
        y_offset: GlyphUnit;
        // Constructors
        constructor(
            properties?: Partial<{
                width: GlyphUnit;
                x_offset: GlyphUnit;
                y_offset: GlyphUnit;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * A `PangoGlyphInfo` structure represents a single glyph with
     * positioning information and visual attributes.
     */
    class GlyphInfo {
        static '$gtype': GObject.GType<GlyphInfo>;
        // Fields
        glyph: Glyph;
        geometry: GlyphGeometry;
        attr: GlyphVisAttr;
        // Constructors
        constructor(
            properties?: Partial<{
                glyph: Glyph;
                geometry: GlyphGeometry;
                attr: GlyphVisAttr;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * A `PangoGlyphItem` is a pair of a `PangoItem` and the glyphs
     * resulting from shaping the items text.
     *
     * As an example of the usage of `PangoGlyphItem`, the results
     * of shaping text with `PangoLayout` is a list of `PangoLayoutLine`,
     * each of which contains a list of `PangoGlyphItem`.
     */
    class GlyphItem {
        static '$gtype': GObject.GType<GlyphItem>;
        // Fields
        glyphs: GlyphString;
        y_offset: number;
        start_x_offset: number;
        end_x_offset: number;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Splits a shaped item (`PangoGlyphItem`) into multiple items based
         * on an attribute list.
         *
         * The idea is that if you have attributes that don't affect shaping,
         * such as color or underline, to avoid affecting shaping, you filter
         * them out ([method`Pango`.AttrList.filter]), apply the shaping process
         * and then reapply them to the result using this function.
         *
         * All attributes that start or end inside a cluster are applied
         * to that cluster; for instance, if half of a cluster is underlined
         * and the other-half strikethrough, then the cluster will end
         * up with both underline and strikethrough attributes. In these
         * cases, it may happen that `item->`extra_attrs for some of the
         * result items can have multiple attributes of the same type.
         *
         * This function takes ownership of `glyph_item;` it will be reused
         * as one of the elements in the list.
         *
         * @returns a
         *   list of glyph items resulting from splitting `glyph_item`. Free
         *   the elements using [method`Pango`.GlyphItem.free], the list using
         *   g_slist_free().
         * @param text text that `list` applies to
         * @param list a `PangoAttrList`
         */
        apply_attrs(text: string, list: AttrList): GlyphItem[];
        /**
         * Make a deep copy of an existing `PangoGlyphItem` structure.
         *
         * @returns the newly allocated `PangoGlyphItem`
         */
        copy(): GlyphItem | null;
        /**
         * Frees a `PangoGlyphItem` and resources to which it points.
         */
        free(): void;
        /**
         * Given a `PangoGlyphItem` and the corresponding text, determine the
         * width corresponding to each character.
         *
         * When multiple characters compose a single cluster, the width of the
         * entire cluster is divided equally among the characters.
         *
         * See also [method`Pango`.GlyphString.get_logical_widths].
         *
         * @param text text that `glyph_item` corresponds to
         *   (glyph_item->item->offset is an offset from the
         *   start of `text)`
         */
        get_logical_widths(text: string): [number[]];
        /**
         * Adds spacing between the graphemes of `glyph_item` to
         * give the effect of typographic letter spacing.
         *
         * @param text text that `glyph_item` corresponds to
         *   (glyph_item->item->offset is an offset from the
         *   start of `text)`
         * @param log_attrs logical attributes for the item
         *   (the first logical attribute refers to the position
         *   before the first character in the item)
         * @param letter_spacing amount of letter spacing to add
         *   in Pango units. May be negative, though too large
         *   negative values will give ugly results.
         */
        letter_space(text: string, log_attrs: LogAttr[], letter_spacing: number): void;
        /**
         * Modifies `orig` to cover only the text after `split_index,` and
         * returns a new item that covers the text before `split_index` that
         * used to be in `orig`.
         *
         * You can think of `split_index` as the length of the returned item.
         * `split_index` may not be 0, and it may not be greater than or equal
         * to the length of `orig` (that is, there must be at least one byte
         * assigned to each item, you can't create a zero-length item).
         *
         * This function is similar in function to pango_item_split() (and uses
         * it internally.)
         *
         * @returns the newly allocated item
         *   representing text before `split_index,` which should be freed
         *   with pango_glyph_item_free().
         * @param text text to which positions in `orig` apply
         * @param split_index byte index of position to split item, relative to the
         *   start of the item
         */
        split(text: string, split_index: number): GlyphItem | null;
    }
    /**
     * A `PangoGlyphItemIter` is an iterator over the clusters in a
     * `PangoGlyphItem`.
     *
     * The *forward direction* of the iterator is the logical direction of text.
     * That is, with increasing `start_index` and `start_char` values. If `glyph_item`
     * is right-to-left (that is, if `glyph_item->item->analysis.level` is odd),
     * then `start_glyph` decreases as the iterator moves forward.  Moreover,
     * in right-to-left cases, `start_glyph` is greater than `end_glyph`.
     *
     * An iterator should be initialized using either
     * pango_glyph_item_iter_init_start() or
     * pango_glyph_item_iter_init_end(), for forward and backward iteration
     * respectively, and walked over using any desired mixture of
     * pango_glyph_item_iter_next_cluster() and
     * pango_glyph_item_iter_prev_cluster().
     *
     * A common idiom for doing a forward iteration over the clusters is:
     *
     * ```
     * PangoGlyphItemIter cluster_iter;
     * gboolean have_cluster;
     *
     * for (have_cluster = pango_glyph_item_iter_init_start (&cluster_iter,
     *                                                       glyph_item, text);
     *      have_cluster;
     *      have_cluster = pango_glyph_item_iter_next_cluster (&cluster_iter))
     * {
     *   ...
     * }
     * ```
     *
     * Note that `text` is the start of the text for layout, which is then
     * indexed by `glyph_item->item->offset` to get to the text of `glyph_item`.
     * The `start_index` and `end_index` values can directly index into `text`. The
     * `start_glyph,` `end_glyph,` `start_char,` and `end_char` values however are
     * zero-based for the `glyph_item`.  For each cluster, the item pointed at by
     * the start variables is included in the cluster while the one pointed at by
     * end variables is not.
     *
     * None of the members of a `PangoGlyphItemIter` should be modified manually.
     */
    class GlyphItemIter {
        static '$gtype': GObject.GType<GlyphItemIter>;
        // Fields
        text: string;
        start_glyph: number;
        start_index: number;
        start_char: number;
        end_glyph: number;
        end_index: number;
        end_char: number;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Make a shallow copy of an existing `PangoGlyphItemIter` structure.
         *
         * @returns the newly allocated `PangoGlyphItemIter`
         */
        copy(): GlyphItemIter | null;
        /**
         * Frees a `PangoGlyphItem`Iter.
         */
        free(): void;
        /**
         * Initializes a `PangoGlyphItemIter` structure to point to the
         * last cluster in a glyph item.
         *
         * See `PangoGlyphItemIter` for details of cluster orders.
         *
         * @returns %FALSE if there are no clusters in the glyph item
         * @param glyph_item the glyph item to iterate over
         * @param text text corresponding to the glyph item
         */
        init_end(glyph_item: GlyphItem, text: string): boolean;
        /**
         * Initializes a `PangoGlyphItemIter` structure to point to the
         * first cluster in a glyph item.
         *
         * See `PangoGlyphItemIter` for details of cluster orders.
         *
         * @returns %FALSE if there are no clusters in the glyph item
         * @param glyph_item the glyph item to iterate over
         * @param text text corresponding to the glyph item
         */
        init_start(glyph_item: GlyphItem, text: string): boolean;
        /**
         * Advances the iterator to the next cluster in the glyph item.
         *
         * See `PangoGlyphItemIter` for details of cluster orders.
         *
         * @returns %TRUE if the iterator was advanced,
         *   %FALSE if we were already on the  last cluster.
         */
        next_cluster(): boolean;
        /**
         * Moves the iterator to the preceding cluster in the glyph item.
         * See `PangoGlyphItemIter` for details of cluster orders.
         *
         * @returns %TRUE if the iterator was moved,
         *   %FALSE if we were already on the first cluster.
         */
        prev_cluster(): boolean;
    }
    /**
     * A `PangoGlyphString` is used to store strings of glyphs with geometry
     * and visual attribute information.
     *
     * The storage for the glyph information is owned by the structure
     * which simplifies memory management.
     */
    class GlyphString {
        static '$gtype': GObject.GType<GlyphString>;
        // Fields
        num_glyphs: number;
        glyphs: GlyphInfo[];
        log_clusters: number;
        // Constructors
        constructor(
            properties?: Partial<{
                num_glyphs: number;
                glyphs: GlyphInfo[];
                log_clusters: number;
            }>,
        );
        _init(...args: any[]): void;
        static new(): GlyphString;
        // Methods
        /**
         * Copy a glyph string and associated storage.
         *
         * @returns the newly allocated `PangoGlyphString`
         */
        copy(): GlyphString | null;
        /**
         * Compute the logical and ink extents of a glyph string.
         *
         * See the documentation for [method`Pango`.Font.get_glyph_extents] for details
         * about the interpretation of the rectangles.
         *
         * Examples of logical (red) and ink (green) rects:
         *
         * ![](rects1.png) ![](rects2.png)
         *
         * @param font a `PangoFont`
         */
        extents(font: Font): [Rectangle | null, Rectangle | null];
        /**
         * Computes the extents of a sub-portion of a glyph string.
         *
         * The extents are relative to the start of the glyph string range
         * (the origin of their coordinate system is at the start of the range,
         * not at the start of the entire glyph string).
         *
         * @param start start index
         * @param end end index (the range is the set of bytes with
         *   indices such that start <= index < end)
         * @param font a `PangoFont`
         */
        extents_range(start: number, end: number, font: Font): [Rectangle | null, Rectangle | null];
        /**
         * Free a glyph string and associated storage.
         */
        free(): void;
        /**
         * Given a `PangoGlyphString` and corresponding text, determine the width
         * corresponding to each character.
         *
         * When multiple characters compose a single cluster, the width of the
         * entire cluster is divided equally among the characters.
         *
         * See also [method`Pango`.GlyphItem.get_logical_widths].
         *
         * @param text the text corresponding to the glyphs
         * @param length the length of `text,` in bytes
         * @param embedding_level the embedding level of the string
         */
        get_logical_widths(text: string, length: number, embedding_level: number): [number[]];
        /**
         * Computes the logical width of the glyph string.
         *
         * This can also be computed using [method`Pango`.GlyphString.extents].
         * However, since this only computes the width, it's much faster. This
         * is in fact only a convenience function that computes the sum of
         * `geometry`.width for each glyph in the `glyphs`.
         *
         * @returns the logical width of the glyph string.
         */
        get_width(): number;
        /**
         * Converts from character position to x position.
         *
         * The X position is measured from the left edge of the run.
         * Character positions are obtained using font metrics for ligatures
         * where available, and computed by dividing up each cluster
         * into equal portions, otherwise.
         *
         * <picture>
         *   <source srcset="glyphstring-positions-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Glyph positions" src="glyphstring-positions-light.png">
         * </picture>
         *
         * @param text the text for the run
         * @param length the number of bytes (not characters) in `text`.
         * @param analysis the analysis information return from [func`itemize]`
         * @param index_ the byte index within `text`
         * @param trailing whether we should compute the result for the beginning (%FALSE)
         *   or end (%TRUE) of the character.
         */
        index_to_x(text: string, length: number, analysis: Analysis, index_: number, trailing: boolean): [number];
        /**
         * Converts from character position to x position.
         *
         * This variant of [method`Pango`.GlyphString.index_to_x] additionally
         * accepts a `PangoLogAttr` array. The grapheme boundary information
         * in it can be used to disambiguate positioning inside some complex
         * clusters.
         *
         * @param text the text for the run
         * @param length the number of bytes (not characters) in `text`.
         * @param analysis the analysis information return from [func`itemize]`
         * @param attrs `PangoLogAttr` array for `text`
         * @param index_ the byte index within `text`
         * @param trailing whether we should compute the result for the beginning (%FALSE)
         *   or end (%TRUE) of the character.
         */
        index_to_x_full(
            text: string,
            length: number,
            analysis: Analysis,
            attrs: LogAttr | null,
            index_: number,
            trailing: boolean,
        ): [number];
        /**
         * Resize a glyph string to the given length.
         *
         * @param new_len the new length of the string
         */
        set_size(new_len: number): void;
        /**
         * Convert from x offset to character position.
         *
         * Character positions are computed by dividing up each cluster into
         * equal portions. In scripts where positioning within a cluster is
         * not allowed (such as Thai), the returned value may not be a valid
         * cursor position; the caller must combine the result with the logical
         * attributes for the text to compute the valid cursor position.
         *
         * @param text the text for the run
         * @param length the number of bytes (not characters) in text.
         * @param analysis the analysis information return from [func`itemize]`
         * @param x_pos the x offset (in Pango units)
         */
        x_to_index(text: string, length: number, analysis: Analysis, x_pos: number): [number, number];
    }
    /**
     * A `PangoGlyphVisAttr` structure communicates information between
     * the shaping and rendering phases.
     *
     * Currently, it contains cluster start and color information.
     * More attributes may be added in the future.
     *
     * Clusters are stored in visual order, within the cluster, glyphs
     * are always ordered in logical order, since visual order is meaningless;
     * that is, in Arabic text, accent glyphs follow the glyphs for the
     * base character.
     */
    class GlyphVisAttr {
        static '$gtype': GObject.GType<GlyphVisAttr>;
        // Fields
        is_cluster_start: number;
        is_color: number;
        // Constructors
        constructor(
            properties?: Partial<{
                is_cluster_start: number;
                is_color: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * The `PangoItem` structure stores information about a segment of text.
     *
     * You typically obtain `PangoItems` by itemizing a piece of text
     * with [func`itemize]`.
     */
    class Item {
        static '$gtype': GObject.GType<Item>;
        // Fields
        offset: number;
        length: number;
        num_chars: number;
        // Constructors
        constructor(
            properties?: Partial<{
                offset: number;
                length: number;
                num_chars: number;
                analysis: Analysis;
            }>,
        );
        _init(...args: any[]): void;
        static new(): Item;
        // Methods
        /**
         * Add attributes to a `PangoItem`.
         *
         * The idea is that you have attributes that don't affect itemization,
         * such as font features, so you filter them out using
         * [method`Pango`.AttrList.filter], itemize your text, then reapply the
         * attributes to the resulting items using this function.
         *
         * The `iter` should be positioned before the range of the item,
         * and will be advanced past it. This function is meant to be called
         * in a loop over the items resulting from itemization, while passing
         * the iter to each call.
         *
         * @param iter a `PangoAttrIterator`
         */
        apply_attrs(iter: AttrIterator): void;
        /**
         * Copy an existing `PangoItem` structure.
         *
         * @returns the newly allocated `PangoItem`
         */
        copy(): Item | null;
        /**
         * Free a `PangoItem` and all associated memory.
         */
        free(): void;
        /**
         * Returns the character offset of the item from the beginning
         * of the itemized text.
         *
         * If the item has not been obtained from Pango's itemization
         * machinery, then the character offset is not available. In
         * that case, this function returns -1.
         *
         * @returns the character offset of the item from the beginning
         *   of the itemized text, or -1
         */
        get_char_offset(): number;
        /**
         * Modifies `orig` to cover only the text after `split_index,` and
         * returns a new item that covers the text before `split_index` that
         * used to be in `orig`.
         *
         * You can think of `split_index` as the length of the returned item.
         * `split_index` may not be 0, and it may not be greater than or equal
         * to the length of `orig` (that is, there must be at least one byte
         * assigned to each item, you can't create a zero-length item).
         * `split_offset` is the length of the first item in chars, and must be
         * provided because the text used to generate the item isn't available,
         * so `pango_item_split()` can't count the char length of the split items
         * itself.
         *
         * @returns new item representing text before `split_index,` which
         *   should be freed with [method`Pango`.Item.free].
         * @param split_index byte index of position to split item, relative to the
         *   start of the item
         * @param split_offset number of chars between start of `orig` and `split_index`
         */
        split(split_index: number, split_offset: number): Item;
    }
    /**
     * The `PangoLanguage` structure is used to
     * represent a language.
     *
     * `PangoLanguage` pointers can be efficiently
     * copied and compared with each other.
     */
    abstract class Language {
        static '$gtype': GObject.GType<Language>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Convert a language tag to a `PangoLanguage`.
         *
         * The language tag must be in a RFC-3066 format. `PangoLanguage` pointers
         * can be efficiently copied (copy the pointer) and compared with other
         * language tags (compare the pointer.)
         *
         * This function first canonicalizes the string by converting it to
         * lowercase, mapping '_' to '-', and stripping all characters other
         * than letters and '-'.
         *
         * Use [func`Pango`.Language.get_default] if you want to get the
         * `PangoLanguage` for the current locale of the process.
         *
         * @param language a string representing a language tag
         */
        static from_string(language?: string | null): Language | null;
        /**
         * Returns the `PangoLanguage` for the current locale of the process.
         *
         * On Unix systems, this is the return value is derived from
         * `setlocale (LC_CTYPE, NULL)`, and the user can
         * affect this through the environment variables LC_ALL, LC_CTYPE or
         * LANG (checked in that order). The locale string typically is in
         * the form lang_COUNTRY, where lang is an ISO-639 language code, and
         * COUNTRY is an ISO-3166 country code. For instance, sv_FI for
         * Swedish as written in Finland or pt_BR for Portuguese as written in
         * Brazil.
         *
         * On Windows, the C library does not use any such environment
         * variables, and setting them won't affect the behavior of functions
         * like ctime(). The user sets the locale through the Regional Options
         * in the Control Panel. The C library (in the setlocale() function)
         * does not use country and language codes, but country and language
         * names spelled out in English.
         * However, this function does check the above environment
         * variables, and does return a Unix-style locale string based on
         * either said environment variables or the thread's current locale.
         *
         * Your application should call `setlocale(LC_ALL, "")` for the user
         * settings to take effect. GTK does this in its initialization
         * functions automatically (by calling gtk_set_locale()).
         * See the setlocale() manpage for more details.
         *
         * Note that the default language can change over the life of an application.
         *
         * Also note that this function will not do the right thing if you
         * use per-thread locales with uselocale(). In that case, you should
         * just call pango_language_from_string() yourself.
         */
        static get_default(): Language;
        /**
         * Returns the list of languages that the user prefers.
         *
         * The list is specified by the `PANGO_LANGUAGE` or `LANGUAGE`
         * environment variables, in order of preference. Note that this
         * list does not necessarily include the language returned by
         * [func`Pango`.Language.get_default].
         *
         * When choosing language-specific resources, such as the sample
         * text returned by [method`Pango`.Language.get_sample_string],
         * you should first try the default language, followed by the
         * languages returned by this function.
         */
        static get_preferred(): Language[] | null;
        // Methods
        /**
         * Get a string that is representative of the characters needed to
         * render a particular language.
         *
         * The sample text may be a pangram, but is not necessarily. It is chosen
         * to be demonstrative of normal text in the language, as well as exposing
         * font feature requirements unique to the language. It is suitable for use
         * as sample text in a font selection dialog.
         *
         * If `language` is %NULL, the default language as found by
         * [func`Pango`.Language.get_default] is used.
         *
         * If Pango does not have a sample string for `language,` the classic
         * "The quick brown fox..." is returned.  This can be detected by
         * comparing the returned pointer value to that returned for (non-existent)
         * language code "xx".  That is, compare to:
         *
         * ```
         * pango_language_get_sample_string (pango_language_from_string ("xx"))
         * ```
         *
         * @returns the sample string
         */
        get_sample_string(): string;
        /**
         * Determines the scripts used to to write `language`.
         *
         * If nothing is known about the language tag `language,`
         * or if `language` is %NULL, then %NULL is returned.
         * The list of scripts returned starts with the script that the
         * language uses most and continues to the one it uses least.
         *
         * The value `num_script` points at will be set to the number
         * of scripts in the returned array (or zero if %NULL is returned).
         *
         * Most languages use only one script for writing, but there are
         * some that use two (Latin and Cyrillic for example), and a few
         * use three (Japanese for example). Applications should not make
         * any assumptions on the maximum number of scripts returned
         * though, except that it is positive if the return value is not
         * %NULL, and it is a small number.
         *
         * The [method`Pango`.Language.includes_script] function uses this
         * function internally.
         *
         * Note: while the return value is declared as `PangoScript`, the
         * returned values are from the `GUnicodeScript` enumeration, which
         * may have more values. Callers need to handle unknown values.
         *
         * @returns An array of `PangoScript` values, with the number of entries in
         *   the array stored in `num_scripts,` or %NULL if Pango does not have
         *   any information about this particular language tag (also the case
         *   if `language` is %NULL).
         */
        get_scripts(): Script[] | null;
        /**
         * Determines if `script` is one of the scripts used to
         * write `language`.
         *
         * The returned value is conservative; if nothing is known about
         * the language tag `language,` %TRUE will be returned, since, as
         * far as Pango knows, `script` might be used to write `language`.
         *
         * This routine is used in Pango's itemization process when
         * determining if a supplied language tag is relevant to
         * a particular section of text. It probably is not useful
         * for applications in most circumstances.
         *
         * This function uses [method`Pango`.Language.get_scripts] internally.
         *
         * @returns %TRUE if `script` is one of the scripts used
         *   to write `language` or if nothing is known about `language`
         *   (including the case that `language` is %NULL), %FALSE otherwise.
         * @param script a `PangoScript`
         */
        includes_script(script: Script | null): boolean;
        /**
         * Checks if a language tag matches one of the elements in a list of
         * language ranges.
         *
         * A language tag is considered to match a range in the list if the
         * range is '*', the range is exactly the tag, or the range is a prefix
         * of the tag, and the character after it in the tag is '-'.
         *
         * @returns %TRUE if a match was found
         * @param range_list a list of language ranges, separated by ';', ':',
         *   ',', or space characters.
         *   Each element must either be '*', or a RFC 3066 language range
         *   canonicalized as by [func`Pango`.Language.from_string]
         */
        matches(range_list: string): boolean;
        /**
         * Gets the RFC-3066 format string representing the given language tag.
         *
         * Returns (transfer none): a string representing the language tag
         */
        to_string(): string;
    }
    export type LayoutClass = typeof Layout;
    /**
     * A `PangoLayoutIter` can be used to iterate over the visual
     * extents of a `PangoLayout`.
     *
     * To obtain a `PangoLayoutIter`, use [method`Pango`.Layout.get_iter].
     *
     * The `PangoLayoutIter` structure is opaque, and has no user-visible fields.
     */
    abstract class LayoutIter {
        static '$gtype': GObject.GType<LayoutIter>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Determines whether `iter` is on the last line of the layout.
         *
         * @returns %TRUE if `iter` is on the last line
         */
        at_last_line(): boolean;
        /**
         * Copies a `PangoLayoutIter`.
         *
         * @returns the newly allocated `PangoLayoutIter`
         */
        copy(): LayoutIter | null;
        /**
         * Frees an iterator that's no longer in use.
         */
        free(): void;
        /**
         * Gets the Y position of the current line's baseline, in layout
         * coordinates.
         *
         * Layout coordinates have the origin at the top left of the entire layout.
         *
         * @returns baseline of current line
         */
        get_baseline(): number;
        /**
         * Gets the extents of the current character, in layout coordinates.
         *
         * Layout coordinates have the origin at the top left of the entire layout.
         *
         * Only logical extents can sensibly be obtained for characters;
         * ink extents make sense only down to the level of clusters.
         */
        get_char_extents(): [Rectangle];
        /**
         * Gets the extents of the current cluster, in layout coordinates.
         *
         * Layout coordinates have the origin at the top left of the entire layout.
         */
        get_cluster_extents(): [Rectangle | null, Rectangle | null];
        /**
         * Gets the current byte index.
         *
         * Note that iterating forward by char moves in visual order,
         * not logical order, so indexes may not be sequential. Also,
         * the index may be equal to the length of the text in the
         * layout, if on the %NULL run (see [method`Pango`.LayoutIter.get_run]).
         *
         * @returns current byte index
         */
        get_index(): number;
        /**
         * Gets the layout associated with a `PangoLayoutIter`.
         *
         * @returns the layout associated with `iter`
         */
        get_layout(): Layout | null;
        /**
         * Obtains the extents of the `PangoLayout` being iterated over.
         */
        get_layout_extents(): [Rectangle | null, Rectangle | null];
        /**
         * Gets the current line.
         *
         * Use the faster [method`Pango`.LayoutIter.get_line_readonly] if
         * you do not plan to modify the contents of the line (glyphs,
         * glyph widths, etc.).
         *
         * @returns the current line
         */
        get_line(): LayoutLine | null;
        /**
         * Obtains the extents of the current line.
         *
         * Extents are in layout coordinates (origin is the top-left corner
         * of the entire `PangoLayout`). Thus the extents returned by this
         * function will be the same width/height but not at the same x/y
         * as the extents returned from [method`Pango`.LayoutLine.get_extents].
         */
        get_line_extents(): [Rectangle | null, Rectangle | null];
        /**
         * Gets the current line for read-only access.
         *
         * This is a faster alternative to [method`Pango`.LayoutIter.get_line],
         * but the user is not expected to modify the contents of the line
         * (glyphs, glyph widths, etc.).
         *
         * @returns the current line, that should not be
         *   modified
         */
        get_line_readonly(): LayoutLine | null;
        /**
         * Divides the vertical space in the `PangoLayout` being iterated over
         * between the lines in the layout, and returns the space belonging to
         * the current line.
         *
         * A line's range includes the line's logical extents. plus half of the
         * spacing above and below the line, if [method`Pango`.Layout.set_spacing]
         * has been called to set layout spacing. The Y positions are in layout
         * coordinates (origin at top left of the entire layout).
         *
         * Note: Since 1.44, Pango uses line heights for placing lines, and there
         * may be gaps between the ranges returned by this function.
         */
        get_line_yrange(): [number, number];
        /**
         * Gets the current run.
         *
         * When iterating by run, at the end of each line, there's a position
         * with a %NULL run, so this function can return %NULL. The %NULL run
         * at the end of each line ensures that all lines have at least one run,
         * even lines consisting of only a newline.
         *
         * Use the faster [method`Pango`.LayoutIter.get_run_readonly] if you do not
         * plan to modify the contents of the run (glyphs, glyph widths, etc.).
         *
         * @returns the current run
         */
        get_run(): LayoutRun | null;
        /**
         * Gets the Y position of the current run's baseline, in layout
         * coordinates.
         *
         * Layout coordinates have the origin at the top left of the entire layout.
         *
         * The run baseline can be different from the line baseline, for
         * example due to superscript or subscript positioning.
         */
        get_run_baseline(): number;
        /**
         * Gets the extents of the current run in layout coordinates.
         *
         * Layout coordinates have the origin at the top left of the entire layout.
         */
        get_run_extents(): [Rectangle | null, Rectangle | null];
        /**
         * Gets the current run for read-only access.
         *
         * When iterating by run, at the end of each line, there's a position
         * with a %NULL run, so this function can return %NULL. The %NULL run
         * at the end of each line ensures that all lines have at least one run,
         * even lines consisting of only a newline.
         *
         * This is a faster alternative to [method`Pango`.LayoutIter.get_run],
         * but the user is not expected to modify the contents of the run (glyphs,
         * glyph widths, etc.).
         *
         * @returns the current run, that
         *   should not be modified
         */
        get_run_readonly(): LayoutRun | null;
        /**
         * Moves `iter` forward to the next character in visual order.
         *
         * If `iter` was already at the end of the layout, returns %FALSE.
         *
         * @returns whether motion was possible
         */
        next_char(): boolean;
        /**
         * Moves `iter` forward to the next cluster in visual order.
         *
         * If `iter` was already at the end of the layout, returns %FALSE.
         *
         * @returns whether motion was possible
         */
        next_cluster(): boolean;
        /**
         * Moves `iter` forward to the start of the next line.
         *
         * If `iter` is already on the last line, returns %FALSE.
         *
         * @returns whether motion was possible
         */
        next_line(): boolean;
        /**
         * Moves `iter` forward to the next run in visual order.
         *
         * If `iter` was already at the end of the layout, returns %FALSE.
         *
         * @returns whether motion was possible
         */
        next_run(): boolean;
    }
    /**
     * A `PangoLayoutLine` represents one of the lines resulting from laying
     * out a paragraph via `PangoLayout`.
     *
     * `PangoLayoutLine` structures are obtained by calling
     * [method`Pango`.Layout.get_line] and are only valid until the text,
     * attributes, or settings of the parent `PangoLayout` are modified.
     */
    class LayoutLine {
        static '$gtype': GObject.GType<LayoutLine>;
        // Fields
        layout: Layout;
        start_index: number;
        length: number;
        runs: LayoutRun[];
        resolved_dir: number;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Computes the logical and ink extents of a layout line.
         *
         * See [method`Pango`.Font.get_glyph_extents] for details
         * about the interpretation of the rectangles.
         */
        get_extents(): [Rectangle | null, Rectangle | null];
        /**
         * Computes the height of the line, as the maximum of the heights
         * of fonts used in this line.
         *
         * Note that the actual baseline-to-baseline distance between lines
         * of text is influenced by other factors, such as
         * [method`Pango`.Layout.set_spacing] and
         * [method`Pango`.Layout.set_line_spacing].
         */
        get_height(): [number];
        /**
         * Returns the length of the line, in bytes.
         *
         * @returns the length of the line
         */
        get_length(): number;
        /**
         * Computes the logical and ink extents of `layout_line` in device units.
         *
         * This function just calls [method`Pango`.LayoutLine.get_extents] followed by
         * two [func`extents_to_pixels]` calls, rounding `ink_rect` and `logical_rect`
         * such that the rounded rectangles fully contain the unrounded one (that is,
         * passes them as first argument to [func`extents_to_pixels]`).
         */
        get_pixel_extents(): [Rectangle | null, Rectangle | null];
        /**
         * Returns the resolved direction of the line.
         *
         * @returns the resolved direction of the line
         */
        get_resolved_direction(): Direction;
        /**
         * Returns the start index of the line, as byte index
         * into the text of the layout.
         *
         * @returns the start index of the line
         */
        get_start_index(): number;
        /**
         * Gets a list of visual ranges corresponding to a given logical range.
         *
         * This list is not necessarily minimal - there may be consecutive
         * ranges which are adjacent. The ranges will be sorted from left to
         * right. The ranges are with respect to the left edge of the entire
         * layout, not with respect to the line.
         *
         * @param start_index Start byte index of the logical range. If this value
         *   is less than the start index for the line, then the first range
         *   will extend all the way to the leading edge of the layout. Otherwise,
         *   it will start at the leading edge of the first character.
         * @param end_index Ending byte index of the logical range. If this value is
         *   greater than the end index for the line, then the last range will
         *   extend all the way to the trailing edge of the layout. Otherwise,
         *   it will end at the trailing edge of the last character.
         */
        get_x_ranges(start_index: number, end_index: number): [number[]];
        /**
         * Converts an index within a line to a X position.
         *
         * @param index_ byte offset of a grapheme within the layout
         * @param trailing an integer indicating the edge of the grapheme to retrieve
         *   the position of. If > 0, the trailing edge of the grapheme,
         *   if 0, the leading of the grapheme
         */
        index_to_x(index_: number, trailing: boolean): [number];
        /**
         * Returns whether this is the first line of the paragraph.
         *
         * @returns %TRUE if this is the first line
         */
        is_paragraph_start(): boolean;
        /**
         * Increase the reference count of a `PangoLayoutLine` by one.
         *
         * @returns the line passed in.
         */
        ref(): LayoutLine | null;
        /**
         * Decrease the reference count of a `PangoLayoutLine` by one.
         *
         * If the result is zero, the line and all associated memory
         * will be freed.
         */
        unref(): void;
        /**
         * Converts from x offset to the byte index of the corresponding character
         * within the text of the layout.
         *
         * If `x_pos` is outside the line, `index_` and `trailing` will point to the very
         * first or very last position in the line. This determination is based on the
         * resolved direction of the paragraph; for example, if the resolved direction
         * is right-to-left, then an X position to the right of the line (after it)
         * results in 0 being stored in `index_` and `trailing`. An X position to the
         * left of the line results in `index_` pointing to the (logical) last grapheme
         * in the line and `trailing` being set to the number of characters in that
         * grapheme. The reverse is true for a left-to-right line.
         *
         * @returns %FALSE if `x_pos` was outside the line, %TRUE if inside
         * @param x_pos the X offset (in Pango units) from the left edge of the line.
         */
        x_to_index(x_pos: number): [boolean, number, number];
    }
    /**
     * The `PangoLogAttr` structure stores information about the attributes of a
     * single character.
     */
    class LogAttr {
        static '$gtype': GObject.GType<LogAttr>;
        // Fields
        is_line_break: number;
        is_mandatory_break: number;
        is_char_break: number;
        is_white: number;
        is_cursor_position: number;
        is_word_start: number;
        is_word_end: number;
        is_sentence_boundary: number;
        is_sentence_start: number;
        is_sentence_end: number;
        backspace_deletes_character: number;
        is_expandable_space: number;
        is_word_boundary: number;
        break_inserts_hyphen: number;
        break_removes_preceding: number;
        reserved: number;
        // Constructors
        constructor(
            properties?: Partial<{
                is_line_break: number;
                is_mandatory_break: number;
                is_char_break: number;
                is_white: number;
                is_cursor_position: number;
                is_word_start: number;
                is_word_end: number;
                is_sentence_boundary: number;
                is_sentence_start: number;
                is_sentence_end: number;
                backspace_deletes_character: number;
                is_expandable_space: number;
                is_word_boundary: number;
                break_inserts_hyphen: number;
                break_removes_preceding: number;
                reserved: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * A `PangoMatrix` specifies a transformation between user-space
     * and device coordinates.
     *
     * The transformation is given by
     *
     * ```
     * x_device = x_user * matrix->xx + y_user * matrix->xy + matrix->x0;
     * y_device = x_user * matrix->yx + y_user * matrix->yy + matrix->y0;
     * ```
     */
    class Matrix {
        static '$gtype': GObject.GType<Matrix>;
        // Fields
        xx: number;
        xy: number;
        yx: number;
        yy: number;
        'x0': number;
        'y0': number;
        // Constructors
        constructor(
            properties?: Partial<{
                xx: number;
                xy: number;
                yx: number;
                yy: number;
                x0: number;
                y0: number;
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Changes the transformation represented by `matrix` to be the
         * transformation given by first applying transformation
         * given by `new_matrix` then applying the original transformation.
         *
         * @param new_matrix a `PangoMatrix`
         */
        concat(new_matrix: Matrix): void;
        /**
         * Copies a `PangoMatrix`.
         *
         * @returns the newly allocated `PangoMatrix`
         */
        copy(): Matrix | null;
        /**
         * Free a `PangoMatrix`.
         */
        free(): void;
        /**
         * Returns the scale factor of a matrix on the height of the font.
         *
         * That is, the scale factor in the direction perpendicular to the
         * vector that the X coordinate is mapped to.  If the scale in the X
         * coordinate is needed as well, use [method`Pango`.Matrix.get_font_scale_factors].
         *
         * @returns the scale factor of `matrix` on the height of the font,
         *   or 1.0 if `matrix` is %NULL.
         */
        get_font_scale_factor(): number;
        /**
         * Calculates the scale factor of a matrix on the width and height of the font.
         *
         * That is, `xscale` is the scale factor in the direction of the X coordinate,
         * and `yscale` is the scale factor in the direction perpendicular to the
         * vector that the X coordinate is mapped to.
         *
         * Note that output numbers will always be non-negative.
         */
        get_font_scale_factors(): [number, number];
        /**
         * Gets the slant ratio of a matrix.
         *
         * For a simple shear matrix in the form:
         *
         *     1 λ
         *     0 1
         *
         * this is simply λ.
         *
         * @returns the slant ratio of `matrix`
         */
        get_slant_ratio(): number;
        /**
         * Changes the transformation represented by `matrix` to be the
         * transformation given by first rotating by `degrees` degrees
         * counter-clockwise then applying the original transformation.
         *
         * @param degrees degrees to rotate counter-clockwise
         */
        rotate(degrees: number): void;
        /**
         * Changes the transformation represented by `matrix` to be the
         * transformation given by first scaling by `sx` in the X direction
         * and `sy` in the Y direction then applying the original
         * transformation.
         *
         * @param scale_x amount to scale by in X direction
         * @param scale_y amount to scale by in Y direction
         */
        scale(scale_x: number, scale_y: number): void;
        /**
         * Transforms the distance vector (`dx,``dy)` by `matrix`.
         *
         * This is similar to [method`Pango`.Matrix.transform_point],
         * except that the translation components of the transformation
         * are ignored. The calculation of the returned vector is as follows:
         *
         * ```
         * dx2 = dx1 * xx + dy1 * xy;
         * dy2 = dx1 * yx + dy1 * yy;
         * ```
         *
         * Affine transformations are position invariant, so the same vector
         * always transforms to the same vector. If (`x1`,`y1`) transforms
         * to (`x2`,`y2`) then (`x1`+`dx1`,`y1`+`dy1`) will transform to
         * (`x1`+`dx2`,`y1`+`dy2`) for all values of `x1` and `x2`.
         *
         * @param dx in/out X component of a distance vector
         * @param dy in/out Y component of a distance vector
         */
        transform_distance(dx: number, dy: number): [number, number];
        /**
         * First transforms the `rect` using `matrix,` then calculates the bounding box
         * of the transformed rectangle.
         *
         * This function is useful for example when you want to draw a rotated
         * `PangoLayout` to an image buffer, and want to know how large the image
         * should be and how much you should shift the layout when rendering.
         *
         * For better accuracy, you should use [method`Pango`.Matrix.transform_rectangle]
         * on original rectangle in Pango units and convert to pixels afterward
         * using [func`extents_to_pixels]`'s first argument.
         *
         * @param rect in/out bounding box in device units
         */
        transform_pixel_rectangle(rect?: Rectangle): [Rectangle];
        /**
         * Transforms the point (`x,` `y)` by `matrix`.
         *
         * @param x in/out X position
         * @param y in/out Y position
         */
        transform_point(x: number, y: number): [number, number];
        /**
         * First transforms `rect` using `matrix,` then calculates the bounding box
         * of the transformed rectangle.
         *
         * This function is useful for example when you want to draw a rotated
         * `PangoLayout` to an image buffer, and want to know how large the image
         * should be and how much you should shift the layout when rendering.
         *
         * If you have a rectangle in device units (pixels), use
         * [method`Pango`.Matrix.transform_pixel_rectangle].
         *
         * If you have the rectangle in Pango units and want to convert to
         * transformed pixel bounding box, it is more accurate to transform it first
         * (using this function) and pass the result to pango_extents_to_pixels(),
         * first argument, for an inclusive rounded rectangle.
         * However, there are valid reasons that you may want to convert
         * to pixels first and then transform, for example when the transformed
         * coordinates may overflow in Pango units (large matrix translation for
         * example).
         *
         * @param rect in/out bounding box in Pango units
         */
        transform_rectangle(rect?: Rectangle): [Rectangle];
        /**
         * Changes the transformation represented by `matrix` to be the
         * transformation given by first translating by (`tx,` `ty)`
         * then applying the original transformation.
         *
         * @param tx amount to translate in the X direction
         * @param ty amount to translate in the Y direction
         */
        translate(tx: number, ty: number): void;
    }
    /**
     * The `PangoRectangle` structure represents a rectangle.
     *
     * `PangoRectangle` is frequently used to represent the logical or ink
     * extents of a single glyph or section of text. (See, for instance,
     * [method`Pango`.Font.get_glyph_extents].)
     */
    class Rectangle {
        static '$gtype': GObject.GType<Rectangle>;
        // Fields
        x: number;
        y: number;
        width: number;
        height: number;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    export type RendererClass = typeof Renderer;
    abstract class RendererPrivate {
        static '$gtype': GObject.GType<RendererPrivate>;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A `PangoScriptIter` is used to iterate through a string
     * and identify ranges in different scripts.
     */
    class ScriptIter {
        static '$gtype': GObject.GType<ScriptIter>;
        // Constructors
        constructor(text: string, length: number);
        _init(...args: any[]): void;
        static new(text: string, length: number): ScriptIter;
        // Methods
        /**
         * Frees a `PangoScriptIter`.
         */
        free(): void;
        /**
         * Gets information about the range to which `iter` currently points.
         *
         * The range is the set of locations p where *start <= p < *end.
         * (That is, it doesn't include the character stored at *end)
         *
         * Note that while the type of the `script` argument is declared
         * as `PangoScript`, as of Pango 1.18, this function simply returns
         * `GUnicodeScript` values. Callers must be prepared to handle unknown
         * values.
         */
        get_range(): [string, string, Script | null];
        /**
         * Advances a `PangoScriptIter` to the next range.
         *
         * If `iter` is already at the end, it is left unchanged
         * and %FALSE is returned.
         *
         * @returns %TRUE if `iter` was successfully advanced
         */
        next(): boolean;
    }
    /**
     * A `PangoTabArray` contains an array of tab stops.
     *
     * `PangoTabArray` can be used to set tab stops in a `PangoLayout`.
     * Each tab stop has an alignment, a position, and optionally
     * a character to use as decimal point.
     */
    class TabArray {
        static '$gtype': GObject.GType<TabArray>;
        // Constructors
        constructor(initial_size: number, positions_in_pixels: boolean);
        _init(...args: any[]): void;
        static new(initial_size: number, positions_in_pixels: boolean): TabArray;
        // Static methods
        /**
         * Deserializes a `PangoTabArray` from a string.
         *
         * This is the counterpart to [method`Pango`.TabArray.to_string].
         * See that functions for details about the format.
         *
         * @param text a string
         */
        static from_string(text: string): TabArray | null;
        // Methods
        /**
         * Copies a `PangoTabArray`.
         *
         * @returns the newly allocated `PangoTabArray`, which should
         *   be freed with [method`Pango`.TabArray.free].
         */
        copy(): TabArray;
        /**
         * Frees a tab array and associated resources.
         */
        free(): void;
        /**
         * Gets the Unicode character to use as decimal point.
         *
         * This is only relevant for tabs with %PANGO_TAB_DECIMAL alignment,
         * which align content at the first occurrence of the decimal point
         * character.
         *
         * The default value of 0 means that Pango will use the
         * decimal point according to the current locale.
         *
         * @param tab_index the index of a tab stop
         */
        get_decimal_point(tab_index: number): string;
        /**
         * Returns %TRUE if the tab positions are in pixels,
         * %FALSE if they are in Pango units.
         *
         * @returns whether positions are in pixels.
         */
        get_positions_in_pixels(): boolean;
        /**
         * Gets the number of tab stops in `tab_array`.
         *
         * @returns the number of tab stops in the array.
         */
        get_size(): number;
        /**
         * Gets the alignment and position of a tab stop.
         *
         * @param tab_index tab stop index
         */
        get_tab(tab_index: number): [TabAlign | null, number];
        /**
         * If non-%NULL, `alignments` and `locations` are filled with allocated
         * arrays.
         *
         * The arrays are of length [method`Pango`.TabArray.get_size].
         * You must free the returned array.
         */
        get_tabs(): [TabAlign | null, number[] | null];
        /**
         * Resizes a tab array.
         *
         * You must subsequently initialize any tabs
         * that were added as a result of growing the array.
         *
         * @param new_size new size of the array
         */
        resize(new_size: number): void;
        /**
         * Sets the Unicode character to use as decimal point.
         *
         * This is only relevant for tabs with %PANGO_TAB_DECIMAL alignment,
         * which align content at the first occurrence of the decimal point
         * character.
         *
         * By default, Pango uses the decimal point according
         * to the current locale.
         *
         * @param tab_index the index of a tab stop
         * @param decimal_point the decimal point to use
         */
        set_decimal_point(tab_index: number, decimal_point: string): void;
        /**
         * Sets whether positions in this array are specified in
         * pixels.
         *
         * @param positions_in_pixels whether positions are in pixels
         */
        set_positions_in_pixels(positions_in_pixels: boolean): void;
        /**
         * Sets the alignment and location of a tab stop.
         *
         * @param tab_index the index of a tab stop
         * @param alignment tab alignment
         * @param location tab location in Pango units
         */
        set_tab(tab_index: number, alignment: TabAlign | null, location: number): void;
        /**
         * Utility function to ensure that the tab stops are in increasing order.
         */
        sort(): void;
        /**
         * Serializes a `PangoTabArray` to a string.
         *
         * In the resulting string, serialized tabs are separated by newlines or commas.
         *
         * Individual tabs are serialized to a string of the form
         *
         *     [ALIGNMENT:]POSITION[:DECIMAL_POINT]
         *
         * Where ALIGNMENT is one of _left_, _right_, _center_ or _decimal_, and
         * POSITION is the position of the tab, optionally followed by the unit _px_.
         * If ALIGNMENT is omitted, it defaults to _left_. If ALIGNMENT is _decimal_,
         * the DECIMAL_POINT character may be specified as a Unicode codepoint.
         *
         * Note that all tabs in the array must use the same unit.
         *
         * A typical example:
         *
         *     100px 200px center:300px right:400px
         *
         * @returns a newly allocated string
         */
        to_string(): string;
    }
    export type Glyph = number;
    export type GlyphUnit = number;
    export type LayoutRun = GlyphItem;
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
export default Pango;
