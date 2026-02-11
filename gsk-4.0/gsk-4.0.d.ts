/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import Graphene from '@girs/graphene-1.0';
import GObject from '@girs/gobject-2.0';
import GLib from '@girs/glib-2.0';
import Gdk from '@girs/gdk-4.0';
import cairo from '@girs/cairo-1.0';
import PangoCairo from '@girs/pangocairo-1.0';
import Pango from '@girs/pango-1.0';
import HarfBuzz from '@girs/harfbuzz-0.0';
import freetype2 from '@girs/freetype2-2.0';
import Gio from '@girs/gio-2.0';
import GModule from '@girs/gmodule-2.0';
import GdkPixbuf from '@girs/gdkpixbuf-2.0';
import '@girs/gjs';
import type classes from './gsk-4.0-classes.d.ts';
export { classes as GskClasses };
export namespace Gsk {
    /**
     * Gsk-4.0
     */
    /**
     * The blend modes available for render nodes.
     *
     * The implementation of each blend mode is deferred to the
     * rendering pipeline.
     *
     * See <https://www.w3.org/TR/compositing-1/#blending> for more information
     * on blending and blend modes.
     */
    export namespace BlendMode {
        export const $gtype: GObject.GType<BlendMode>;
    }
    enum BlendMode {
        /**
         * The default blend mode, which specifies no blending
         */
        DEFAULT,
        /**
         * The source color is multiplied by the destination
         *   and replaces the destination
         */
        MULTIPLY = 1,
        /**
         * Multiplies the complements of the destination and source
         *   color values, then complements the result.
         */
        SCREEN = 2,
        /**
         * Multiplies or screens the colors, depending on the
         *   destination color value. This is the inverse of hard-list
         */
        OVERLAY = 3,
        /**
         * Selects the darker of the destination and source colors
         */
        DARKEN = 4,
        /**
         * Selects the lighter of the destination and source colors
         */
        LIGHTEN = 5,
        /**
         * Brightens the destination color to reflect the source color
         */
        COLOR_DODGE = 6,
        /**
         * Darkens the destination color to reflect the source color
         */
        COLOR_BURN = 7,
        /**
         * Multiplies or screens the colors, depending on the source color value
         */
        HARD_LIGHT = 8,
        /**
         * Darkens or lightens the colors, depending on the source color value
         */
        SOFT_LIGHT = 9,
        /**
         * Subtracts the darker of the two constituent colors from the lighter color
         */
        DIFFERENCE = 10,
        /**
         * Produces an effect similar to that of the difference mode but lower in contrast
         */
        EXCLUSION = 11,
        /**
         * Creates a color with the hue and saturation of the source color and the luminosity of the destination color
         */
        COLOR = 12,
        /**
         * Creates a color with the hue of the source color and the saturation and luminosity of the destination color
         */
        HUE = 13,
        /**
         * Creates a color with the saturation of the source color and the hue and luminosity of the destination color
         */
        SATURATION = 14,
        /**
         * Creates a color with the luminosity of the source color and the hue and saturation of the destination color
         */
        LUMINOSITY = 15,
    }
    /**
     * The corner indices used by `GskRoundedRect`.
     */
    export namespace Corner {
        export const $gtype: GObject.GType<Corner>;
    }
    enum Corner {
        /**
         * The top left corner
         */
        TOP_LEFT,
        /**
         * The top right corner
         */
        TOP_RIGHT = 1,
        /**
         * The bottom right corner
         */
        BOTTOM_RIGHT = 2,
        /**
         * The bottom left corner
         */
        BOTTOM_LEFT = 3,
    }
    /**
     * Specifies how paths are filled.
     *
     * Whether or not a point is included in the fill is determined by taking
     * a ray from that point to infinity and looking at intersections with the
     * path. The ray can be in any direction, as long as it doesn't pass through
     * the end point of a segment or have a tricky intersection such as
     * intersecting tangent to the path.
     *
     * (Note that filling is not actually implemented in this way. This
     * is just a description of the rule that is applied.)
     *
     * New entries may be added in future versions.
     */
    export namespace FillRule {
        export const $gtype: GObject.GType<FillRule>;
    }
    enum FillRule {
        /**
         * If the path crosses the ray from
         *   left-to-right, counts +1. If the path crosses the ray
         *   from right to left, counts -1. (Left and right are determined
         *   from the perspective of looking along the ray from the starting
         *   point.) If the total count is non-zero, the point will be filled.
         */
        WINDING,
        /**
         * Counts the total number of
         *   intersections, without regard to the orientation of the contour. If
         *   the total number of intersections is odd, the point will be
         *   filled.
         */
        EVEN_ODD = 1,
    }
    /**
     * Defines the types of the uniforms that `GskGLShaders` declare.
     *
     * It defines both what the type is called in the GLSL shader
     * code, and what the corresponding C type is on the Gtk side.
     */
    export namespace GLUniformType {
        export const $gtype: GObject.GType<GLUniformType>;
    }
    enum GLUniformType {
        /**
         * No type, used for uninitialized or unspecified values.
         */
        NONE,
        /**
         * A float uniform
         */
        FLOAT = 1,
        /**
         * A GLSL int / gint32 uniform
         */
        INT = 2,
        /**
         * A GLSL uint / guint32 uniform
         */
        UINT = 3,
        /**
         * A GLSL bool / gboolean uniform
         */
        BOOL = 4,
        /**
         * A GLSL vec2 / graphene_vec2_t uniform
         */
        'VEC2' = 5,
        /**
         * A GLSL vec3 / graphene_vec3_t uniform
         */
        'VEC3' = 6,
        /**
         * A GLSL vec4 / graphene_vec4_t uniform
         */
        'VEC4' = 7,
    }
    /**
     * Specifies how to render the start and end points of contours or
     * dashes when stroking.
     *
     * The default line cap style is `GSK_LINE_CAP_BUTT`.
     *
     * New entries may be added in future versions.
     *
     * <figure>
     *   <picture>
     *     <source srcset="caps-dark.png" media="(prefers-color-scheme: dark)">
     *     <img alt="Line Cap Styles" src="caps-light.png">
     *   </picture>
     *   <figcaption>GSK_LINE_CAP_BUTT, GSK_LINE_CAP_ROUND, GSK_LINE_CAP_SQUARE</figcaption>
     * </figure>
     */
    export namespace LineCap {
        export const $gtype: GObject.GType<LineCap>;
    }
    enum LineCap {
        /**
         * Start and stop the line exactly at the start
         *   and end point
         */
        BUTT,
        /**
         * Use a round ending, the center of the circle
         *   is the start or end point
         */
        ROUND = 1,
        /**
         * use squared ending, the center of the square
         *   is the start or end point
         */
        SQUARE = 2,
    }
    /**
     * Specifies how to render the junction of two lines when stroking.
     *
     * The default line join style is `GSK_LINE_JOIN_MITER`.
     *
     * New entries may be added in future versions.
     *
     * <figure>
     *   <picture>
     *     <source srcset="join-dark.png" media="(prefers-color-scheme: dark)">
     *     <img alt="Line Join Styles" src="join-light.png">
     *   </picture>
     *   <figcaption>GSK_LINE_JOINT_MITER, GSK_LINE_JOINT_ROUND, GSK_LINE_JOIN_BEVEL</figcaption>
     * </figure>
     */
    export namespace LineJoin {
        export const $gtype: GObject.GType<LineJoin>;
    }
    enum LineJoin {
        /**
         * Use a sharp angled corner
         */
        MITER,
        /**
         * Use a round join, the center of the circle is
         *   the join point
         */
        ROUND = 1,
        /**
         * use a cut-off join, the join is cut off at half
         *   the line width from the joint point
         */
        BEVEL = 2,
    }
    /**
     * The mask modes available for mask nodes.
     */
    export namespace MaskMode {
        export const $gtype: GObject.GType<MaskMode>;
    }
    enum MaskMode {
        /**
         * Use the alpha channel of the mask
         */
        ALPHA,
        /**
         * Use the inverted alpha channel of the mask
         */
        INVERTED_ALPHA = 1,
        /**
         * Use the luminance of the mask,
         *     multiplied by mask alpha
         */
        LUMINANCE = 2,
        /**
         * Use the inverted luminance of the mask,
         *     multiplied by mask alpha
         */
        INVERTED_LUMINANCE = 3,
    }
    /**
     * Used to pick one of the four tangents at a given point on the path.
     *
     * Note that the directions for `GSK_PATH_FROM_START/``GSK_PATH_TO_END` and
     * `GSK_PATH_TO_START/``GSK_PATH_FROM_END` will coincide for smooth points.
     * Only sharp turns will exhibit four different directions.
     *
     * <picture>
     *   <source srcset="directions-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Path Tangents" src="directions-light.png">
     * </picture>
     */
    export namespace PathDirection {
        export const $gtype: GObject.GType<PathDirection>;
    }
    enum PathDirection {
        /**
         * The tangent in path direction of the incoming side
         *   of the path
         */
        FROM_START,
        /**
         * The tangent against path direction of the incoming side
         *   of the path
         */
        TO_START = 1,
        /**
         * The tangent in path direction of the outgoing side
         *   of the path
         */
        TO_END = 2,
        /**
         * The tangent against path direction of the outgoing
         *   side of the path
         */
        FROM_END = 3,
    }
    /**
     * The values of this enumeration classify intersections
     * between paths.
     */
    export namespace PathIntersection {
        export const $gtype: GObject.GType<PathIntersection>;
    }
    enum PathIntersection {
        /**
         * No intersection
         */
        NONE,
        /**
         * A normal intersection, where the two paths
         *   cross each other
         */
        NORMAL = 1,
        /**
         * The start of a segment where the two paths coincide
         */
        START = 2,
        /**
         * The end of a segment where the two paths coincide
         */
        END = 3,
    }
    /**
     * Describes the segments of a `GskPath`.
     *
     * More values may be added in the future.
     */
    export namespace PathOperation {
        export const $gtype: GObject.GType<PathOperation>;
    }
    enum PathOperation {
        /**
         * A move-to operation, with 1 point describing the target point.
         */
        MOVE,
        /**
         * A close operation ending the current contour with a line back
         *   to the starting point. Two points describe the start and end of the line.
         */
        CLOSE = 1,
        /**
         * A line-to operation, with 2 points describing the start and
         *   end point of a straight line.
         */
        LINE = 2,
        /**
         * A curve-to operation describing a quadratic Bézier curve
         *   with 3 points describing the start point, the control point and the end
         *   point of the curve.
         */
        QUAD = 3,
        /**
         * A curve-to operation describing a cubic Bézier curve with 4
         *   points describing the start point, the two control points and the end point
         *   of the curve.
         */
        CUBIC = 4,
        /**
         * A rational quadratic Bézier curve with 3 points describing
         *   the start point, control point and end point of the curve. A weight for the
         *   curve will be passed, too.
         */
        CONIC = 5,
    }
    /**
     * The type of a node determines what the node is rendering.
     */
    export namespace RenderNodeType {
        export const $gtype: GObject.GType<RenderNodeType>;
    }
    enum RenderNodeType {
        /**
         * Error type. No node will ever have this type.
         */
        NOT_A_RENDER_NODE,
        /**
         * A node containing a stack of children
         */
        CONTAINER_NODE = 1,
        /**
         * A node drawing a `cairo_surface_t`
         */
        CAIRO_NODE = 2,
        /**
         * A node drawing a single color rectangle
         */
        COLOR_NODE = 3,
        /**
         * A node drawing a linear gradient
         */
        LINEAR_GRADIENT_NODE = 4,
        /**
         * A node drawing a repeating linear gradient
         */
        REPEATING_LINEAR_GRADIENT_NODE = 5,
        /**
         * A node drawing a radial gradient
         */
        RADIAL_GRADIENT_NODE = 6,
        /**
         * A node drawing a repeating radial gradient
         */
        REPEATING_RADIAL_GRADIENT_NODE = 7,
        /**
         * A node drawing a conic gradient
         */
        CONIC_GRADIENT_NODE = 8,
        /**
         * A node stroking a border around an area
         */
        BORDER_NODE = 9,
        /**
         * A node drawing a `GdkTexture`
         */
        TEXTURE_NODE = 10,
        /**
         * A node drawing an inset shadow
         */
        INSET_SHADOW_NODE = 11,
        /**
         * A node drawing an outset shadow
         */
        OUTSET_SHADOW_NODE = 12,
        /**
         * A node that renders its child after applying a matrix transform
         */
        TRANSFORM_NODE = 13,
        /**
         * A node that changes the opacity of its child
         */
        OPACITY_NODE = 14,
        /**
         * A node that applies a color matrix to every pixel
         */
        COLOR_MATRIX_NODE = 15,
        /**
         * A node that repeats the child's contents
         */
        REPEAT_NODE = 16,
        /**
         * A node that clips its child to a rectangular area
         */
        CLIP_NODE = 17,
        /**
         * A node that clips its child to a rounded rectangle
         */
        ROUNDED_CLIP_NODE = 18,
        /**
         * A node that draws a shadow below its child
         */
        SHADOW_NODE = 19,
        /**
         * A node that blends two children together
         */
        BLEND_NODE = 20,
        /**
         * A node that cross-fades between two children
         */
        CROSS_FADE_NODE = 21,
        /**
         * A node containing a glyph string
         */
        TEXT_NODE = 22,
        /**
         * A node that applies a blur
         */
        BLUR_NODE = 23,
        /**
         * Debug information that does not affect the rendering
         */
        DEBUG_NODE = 24,
        /**
         * A node that uses OpenGL fragment shaders to render
         */
        GL_SHADER_NODE = 25,
        /**
         * A node drawing a `GdkTexture` scaled and filtered.
         */
        TEXTURE_SCALE_NODE = 26,
        /**
         * A node that masks one child with another.
         */
        MASK_NODE = 27,
        /**
         * A node that fills a path.
         */
        FILL_NODE = 28,
        /**
         * A node that strokes a path.
         */
        STROKE_NODE = 29,
        /**
         * A node that possibly redirects part of the scene graph to a subsurface.
         */
        SUBSURFACE_NODE = 30,
        /**
         * A node that applies some function to each color component.
         */
        COMPONENT_TRANSFER_NODE = 31,
    }
    /**
     * The filters used when scaling texture data.
     *
     * The actual implementation of each filter is deferred to the
     * rendering pipeline.
     */
    export namespace ScalingFilter {
        export const $gtype: GObject.GType<ScalingFilter>;
    }
    enum ScalingFilter {
        /**
         * linear interpolation filter
         */
        LINEAR,
        /**
         * nearest neighbor interpolation filter
         */
        NEAREST = 1,
        /**
         * linear interpolation along each axis,
         *   plus mipmap generation, with linear interpolation along the mipmap
         *   levels
         */
        TRILINEAR = 2,
    }
    /**
     * Errors that can happen during (de)serialization.
     */
    class SerializationError extends GLib.Error {
        static '$gtype': GObject.GType<SerializationError>;
        // Static Fields
        /**
         * The format can not be identified
         */
        static UNSUPPORTED_FORMAT: number;
        /**
         * The version of the data is not
         *   understood
         */
        static UNSUPPORTED_VERSION: number;
        /**
         * The given data may not exist in
         *   a proper serialization
         */
        static INVALID_DATA: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        /**
         * Registers an error quark for [class`Gsk`.RenderNode] errors.
         */
        static quark(): GLib.Quark;
    }
    /**
     * The categories of matrices relevant for GSK and GTK.
     *
     * Note that any category includes matrices of all later categories.
     * So if you want to for example check if a matrix is a 2D matrix,
     * `category >= GSK_TRANSFORM_CATEGORY_2D` is the way to do this.
     *
     * Also keep in mind that rounding errors may cause matrices to not
     * conform to their categories. Otherwise, matrix operations done via
     * multiplication will not worsen categories. So for the matrix
     * multiplication `C = A * B`, `category(C) = MIN (category(A), category(B))`.
     */
    export namespace TransformCategory {
        export const $gtype: GObject.GType<TransformCategory>;
    }
    enum TransformCategory {
        /**
         * The category of the matrix has not been
         *   determined.
         */
        UNKNOWN,
        /**
         * Analyzing the matrix concluded that it does
         *   not fit in any other category.
         */
        ANY = 1,
        /**
         * The matrix is a 3D matrix. This means that
         *   the w column (the last column) has the values (0, 0, 0, 1).
         */
        '3D' = 2,
        /**
         * The matrix is a 2D matrix. This is equivalent
         *   to graphene_matrix_is_2d() returning %TRUE. In particular, this
         *   means that Cairo can deal with the matrix.
         */
        '2D' = 3,
        /**
         * The matrix is a combination of 2D scale
         *   and 2D translation operations. In particular, this means that any
         *   rectangle can be transformed exactly using this matrix.
         */
        '2D_AFFINE' = 4,
        /**
         * The matrix is a 2D translation.
         */
        '2D_TRANSLATE' = 5,
        /**
         * The matrix is the identity matrix.
         */
        IDENTITY = 6,
    }
    /**
     * Compares two component transfers for equality.
     *
     * @returns true if `self` and `other` are equal
     * @param self a component transfer
     * @param other another component transfer
     */
    function component_transfer_equal(self: any, other: any): boolean;
    /**
     * Constructs a path from a serialized form.
     *
     * The string is expected to be in (a superset of)
     * [SVG path syntax](https://www.w3.org/TR/SVG11/paths.html#PathData),
     * as e.g. produced by [method`Gsk`.Path.to_string].
     *
     * A high-level summary of the syntax:
     *
     * - `M x y` Move to `(x, y)`
     * - `L x y` Add a line from the current point to `(x, y)`
     * - `Q x1 y1 x2 y2` Add a quadratic Bézier from the current point to `(x2, y2)`, with control point `(x1, y1)`
     * - `C x1 y1 x2 y2 x3 y3` Add a cubic Bézier from the current point to `(x3, y3)`, with control points `(x1, y1)` and `(x2, y2)`
     * - `Z` Close the contour by drawing a line back to the start point
     * - `H x` Add a horizontal line from the current point to the given x value
     * - `V y` Add a vertical line from the current point to the given y value
     * - `T x2 y2` Add a quadratic Bézier, using the reflection of the previous segments' control point as control point
     * - `S x2 y2 x3 y3` Add a cubic Bézier, using the reflection of the previous segments' second control point as first control point
     * - `A rx ry r l s x y` Add an elliptical arc from the current point to `(x, y)` with radii rx and ry. See the SVG documentation for how the other parameters influence the arc.
     * - `O x1 y1 x2 y2 w` Add a rational quadratic Bézier from the current point to `(x2, y2)` with control point `(x1, y1)` and weight `w`.
     *
     * All the commands have lowercase variants that interpret coordinates
     * relative to the current point.
     *
     * The `O` command is an extension that is not supported in SVG.
     *
     * @returns a new `GskPath`, or `NULL` if `string` could not be parsed
     * @param string a string
     */
    function path_parse(string: string): Path | null;
    /**
     * Registers an error quark for [class`Gsk`.RenderNode] errors.
     *
     * @returns the error quark
     */
    function serialization_error_quark(): GLib.Quark;
    /**
     * Checks if two strokes are identical.
     *
     * @returns true if the two strokes are equal, false otherwise
     * @param _stroke1 the first stroke
     * @param _stroke2 the second stroke
     */
    function stroke_equal(_stroke1?: any | null, _stroke2?: any | null): boolean;
    /**
     * Parses a given into a transform.
     *
     * Strings printed via [method`Gsk`.Transform.to_string]
     * can be read in again successfully using this function.
     *
     * If `string` does not describe a valid transform, false
     * is returned and `NULL` is put in `out_transform`.
     *
     * @returns true if `string` described a valid transform
     * @param string the string to parse
     */
    function transform_parse(string: string): [boolean, Transform];
    /**
     * Retrieves the render node stored inside a `GValue`,
     * and acquires a reference to it.
     *
     * @returns the render node
     * @param value a [struct`GObject`.Value] initialized with type `GSK_TYPE_RENDER_NODE`
     */
    function value_dup_render_node(value: GObject.Value | any): RenderNode | null;
    /**
     * Retrieves the render node stored inside a `GValue`.
     *
     * @returns the render node
     * @param value a `GValue` initialized with type `GSK_TYPE_RENDER_NODE`
     */
    function value_get_render_node(value: GObject.Value | any): RenderNode | null;
    /**
     * Stores the given render node inside a `GValue`.
     *
     * The [struct`GObject`.Value] will acquire a reference
     * to the render node.
     *
     * @param value a [struct`GObject`.Value] initialized with type `GSK_TYPE_RENDER_NODE`
     * @param node a render node
     */
    function value_set_render_node(value: GObject.Value | any, node: RenderNode): void;
    /**
     * Stores the given render node inside a `GValue`.
     *
     * This function transfers the ownership of the
     * render node to the `GValue`.
     *
     * @param value a [struct`GObject`.Value] initialized with type `GSK_TYPE_RENDER_NODE`
     * @param node a render node
     */
    function value_take_render_node(value: GObject.Value | any, node?: RenderNode | null): void;
    interface ParseErrorFunc {
        (start: ParseLocation, end: ParseLocation, error: GLib.Error): void;
    }
    interface PathForeachFunc {
        (op: PathOperation, pts: Graphene.Point[], weight: number): boolean;
    }
    interface PathIntersectionFunc {
        (_path1: Path, _point1: PathPoint, _path2: Path, _point2: PathPoint, kind: PathIntersection): boolean;
    }
    /**
     * Flags that can be passed to gsk_path_foreach() to influence what
     * kinds of operations the path is decomposed into.
     *
     * By default, [method`Gsk`.Path.foreach] will only emit a path with all
     * operations flattened to straight lines to allow for maximum compatibility.
     * The only operations emitted will be `GSK_PATH_MOVE`, `GSK_PATH_LINE` and
     * `GSK_PATH_CLOSE`.
     */
    export namespace PathForeachFlags {
        export const $gtype: GObject.GType<PathForeachFlags>;
    }
    enum PathForeachFlags {
        /**
         * The default behavior, only allow lines.
         */
        ONLY_LINES,
        /**
         * Allow emission of `GSK_PATH_QUAD` operations
         */
        QUAD = 1,
        /**
         * Allow emission of `GSK_PATH_CUBIC` operations.
         */
        CUBIC = 2,
        /**
         * Allow emission of `GSK_PATH_CONIC` operations.
         */
        CONIC = 4,
    }
    namespace BlendNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node applying a blending function between its two child nodes.
     */
    class BlendNode extends RenderNode {
        static '$gtype': GObject.GType<BlendNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(bottom: RenderNode, top: RenderNode, blend_mode: BlendMode): BlendNode;
        // Signals
        connect<K extends keyof Gsk.BlendNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.BlendNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.BlendNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.BlendNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.BlendNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.BlendNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the blend mode used by `node`.
         *
         * @returns the blend mode
         */
        get_blend_mode(): BlendMode;
        /**
         * Retrieves the bottom `GskRenderNode` child of the `node`.
         *
         * @returns the bottom child node
         */
        get_bottom_child(): RenderNode;
        /**
         * Retrieves the top `GskRenderNode` child of the `node`.
         *
         * @returns the top child node
         */
        get_top_child(): RenderNode;
    }
    namespace BlurNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node applying a blur effect to its single child.
     */
    class BlurNode extends RenderNode {
        static '$gtype': GObject.GType<BlurNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, radius: number): BlurNode;
        // Signals
        connect<K extends keyof Gsk.BlurNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.BlurNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.BlurNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.BlurNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.BlurNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.BlurNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the child `GskRenderNode` of the blur `node`.
         *
         * @returns the blurred child node
         */
        get_child(): RenderNode;
        /**
         * Retrieves the blur radius of the `node`.
         *
         * @returns the blur radius
         */
        get_radius(): number;
    }
    namespace BorderNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a border.
     */
    class BorderNode extends RenderNode {
        static '$gtype': GObject.GType<BorderNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(outline: RoundedRect, border_width: number[], border_color: Gdk.RGBA[]): BorderNode;
        // Signals
        connect<K extends keyof Gsk.BorderNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.BorderNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.BorderNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.BorderNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.BorderNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.BorderNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the colors of the border.
         *
         * @returns an array of 4 `GdkRGBA`
         *   structs for the top, right, bottom and left color of the border
         */
        get_colors(): Gdk.RGBA[];
        /**
         * Retrieves the outline of the border.
         *
         * @returns the outline of the border
         */
        get_outline(): RoundedRect;
        /**
         * Retrieves the stroke widths of the border.
         *
         * @returns an array of 4 floats
         *   for the top, right, bottom and left stroke width of the border,
         *   respectively
         */
        get_widths(): number[];
    }
    namespace BroadwayRenderer {
        // Signal signatures
        interface SignalSignatures extends Renderer.SignalSignatures {
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    type BroadwayRenderer = (typeof classes.BroadwayRenderer)['prototype'];
    const BroadwayRenderer: typeof classes.BroadwayRenderer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gsk.BroadwayRenderer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, BroadwayRenderer.SignalSignatures> & classes.BroadwayRenderer);
    namespace CairoNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a Cairo surface.
     */
    class CairoNode extends RenderNode {
        static '$gtype': GObject.GType<CairoNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(bounds: Graphene.Rect): CairoNode;
        // Signals
        connect<K extends keyof Gsk.CairoNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.CairoNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.CairoNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.CairoNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.CairoNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.CairoNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Creates a Cairo context for drawing using the surface associated
         * to the render node.
         *
         * If no surface exists yet, a surface will be created optimized for
         * rendering to `renderer`.
         *
         * @returns a Cairo context used for drawing; use
         *   cairo_destroy() when done drawing
         */
        get_draw_context(): cairo.Context;
        /**
         * Retrieves the Cairo surface used by the render node.
         *
         * @returns a Cairo surface
         */
        get_surface(): cairo.Surface;
    }
    namespace CairoRenderer {
        // Signal signatures
        interface SignalSignatures extends Renderer.SignalSignatures {
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    type CairoRenderer = (typeof classes.CairoRenderer)['prototype'];
    const CairoRenderer: typeof classes.CairoRenderer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gsk.CairoRenderer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, CairoRenderer.SignalSignatures> & classes.CairoRenderer);
    namespace ClipNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node applying a rectangular clip to its single child node.
     */
    class ClipNode extends RenderNode {
        static '$gtype': GObject.GType<ClipNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, clip: Graphene.Rect): ClipNode;
        // Signals
        connect<K extends keyof Gsk.ClipNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ClipNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.ClipNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ClipNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.ClipNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.ClipNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting clipped by the given `node`.
         *
         * @returns The child that is getting clipped
         */
        get_child(): RenderNode;
        /**
         * Retrieves the clip rectangle for `node`.
         *
         * @returns a clip rectangle
         */
        get_clip(): Graphene.Rect;
    }
    namespace ColorMatrixNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node controlling the color matrix of its single child node.
     */
    class ColorMatrixNode extends RenderNode {
        static '$gtype': GObject.GType<ColorMatrixNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, color_matrix: Graphene.Matrix, color_offset: Graphene.Vec4): ColorMatrixNode;
        // Signals
        connect<K extends keyof Gsk.ColorMatrixNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ColorMatrixNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.ColorMatrixNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ColorMatrixNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.ColorMatrixNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.ColorMatrixNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting its colors modified by the given `node`.
         *
         * @returns The child that is getting its colors modified
         */
        get_child(): RenderNode;
        /**
         * Retrieves the color matrix used by the `node`.
         *
         * @returns a 4x4 color matrix
         */
        get_color_matrix(): Graphene.Matrix;
        /**
         * Retrieves the color offset used by the `node`.
         *
         * @returns a color vector
         */
        get_color_offset(): Graphene.Vec4;
    }
    namespace ColorNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a solid color.
     */
    class ColorNode extends RenderNode {
        static '$gtype': GObject.GType<ColorNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(rgba: Gdk.RGBA, bounds: Graphene.Rect): ColorNode;
        // Signals
        connect<K extends keyof Gsk.ColorNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ColorNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.ColorNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ColorNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.ColorNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.ColorNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the color of the given `node`.
         *
         * The value returned by this function will not be correct
         * if the render node was created for a non-sRGB color.
         *
         * @returns the color of the node
         */
        get_color(): Gdk.RGBA;
    }
    namespace ComponentTransferNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    class ComponentTransferNode extends RenderNode {
        static '$gtype': GObject.GType<ComponentTransferNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            child: RenderNode,
            r: ComponentTransfer,
            g: ComponentTransfer,
            b: ComponentTransfer,
            a: ComponentTransfer,
        ): ComponentTransferNode;
        // Signals
        connect<K extends keyof Gsk.ComponentTransferNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ComponentTransferNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.ComponentTransferNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ComponentTransferNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.ComponentTransferNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.ComponentTransferNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting drawn by the given `node`.
         *
         * @returns the child `GskRenderNode`
         */
        get_child(): RenderNode;
        /**
         * Gets the component transfer for one of the components.
         *
         * @returns the `GskComponentTransfer`
         * @param component a value between 0 and 3 to indicate the red, green, blue
         *   or alpha component
         */
        get_transfer(component: number): ComponentTransfer;
    }
    namespace ConicGradientNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a conic gradient.
     */
    class ConicGradientNode extends RenderNode {
        static '$gtype': GObject.GType<ConicGradientNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            bounds: Graphene.Rect,
            center: Graphene.Point,
            rotation: number,
            color_stops: ColorStop[],
        ): ConicGradientNode;
        // Signals
        connect<K extends keyof Gsk.ConicGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ConicGradientNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.ConicGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ConicGradientNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.ConicGradientNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.ConicGradientNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the angle for the gradient in radians, normalized in [0, 2 * PI].
         *
         * The angle is starting at the top and going clockwise, as expressed
         * in the css specification:
         *
         *     angle = 90 - gsk_conic_gradient_node_get_rotation()
         *
         * @returns the angle for the gradient
         */
        get_angle(): number;
        /**
         * Retrieves the center pointer for the gradient.
         *
         * @returns the center point for the gradient
         */
        get_center(): Graphene.Point;
        /**
         * Retrieves the color stops in the gradient.
         *
         * @returns the color stops in the gradient
         */
        get_color_stops(): ColorStop[];
        /**
         * Retrieves the number of color stops in the gradient.
         *
         * @returns the number of color stops
         */
        get_n_color_stops(): number;
        /**
         * Retrieves the rotation for the gradient in degrees.
         *
         * @returns the rotation for the gradient
         */
        get_rotation(): number;
    }
    namespace ContainerNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node that can contain other render nodes.
     */
    class ContainerNode extends RenderNode {
        static '$gtype': GObject.GType<ContainerNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(children: RenderNode[]): ContainerNode;
        // Signals
        connect<K extends keyof Gsk.ContainerNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ContainerNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.ContainerNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ContainerNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.ContainerNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.ContainerNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets one of the children of `container`.
         *
         * @returns the `idx'`th child of `container`
         * @param idx the position of the child to get
         */
        get_child(idx: number): RenderNode;
        /**
         * Retrieves the number of direct children of `node`.
         *
         * @returns the number of children of the `GskRenderNode`
         */
        get_n_children(): number;
    }
    namespace CrossFadeNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node cross fading between two child nodes.
     */
    class CrossFadeNode extends RenderNode {
        static '$gtype': GObject.GType<CrossFadeNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(start: RenderNode, end: RenderNode, progress: number): CrossFadeNode;
        // Signals
        connect<K extends keyof Gsk.CrossFadeNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.CrossFadeNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.CrossFadeNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.CrossFadeNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.CrossFadeNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.CrossFadeNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the child `GskRenderNode` at the end of the cross-fade.
         *
         * @returns a `GskRenderNode`
         */
        get_end_child(): RenderNode;
        /**
         * Retrieves the progress value of the cross fade.
         *
         * @returns the progress value, between 0 and 1
         */
        get_progress(): number;
        /**
         * Retrieves the child `GskRenderNode` at the beginning of the cross-fade.
         *
         * @returns a `GskRenderNode`
         */
        get_start_child(): RenderNode;
    }
    namespace DebugNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node that emits a debugging message when drawing its
     * child node.
     */
    class DebugNode extends RenderNode {
        static '$gtype': GObject.GType<DebugNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, message: string): DebugNode;
        // Signals
        connect<K extends keyof Gsk.DebugNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.DebugNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.DebugNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.DebugNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.DebugNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.DebugNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting drawn by the given `node`.
         *
         * @returns the child `GskRenderNode`
         */
        get_child(): RenderNode;
        /**
         * Gets the debug message that was set on this node
         *
         * @returns The debug message
         */
        get_message(): string;
    }
    namespace FillNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node filling the area given by [struct`Gsk`.Path]
     * and [enum`Gsk`.FillRule] with the child node.
     */
    class FillNode extends RenderNode {
        static '$gtype': GObject.GType<FillNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, path: Path, fill_rule: FillRule): FillNode;
        // Signals
        connect<K extends keyof Gsk.FillNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.FillNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.FillNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.FillNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.FillNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.FillNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting drawn by the given `node`.
         *
         * @returns The child that is getting drawn
         */
        get_child(): RenderNode;
        /**
         * Retrieves the fill rule used to determine how the path is filled.
         *
         * @returns a `GskFillRule`
         */
        get_fill_rule(): FillRule;
        /**
         * Retrieves the path used to describe the area filled with the contents of
         * the `node`.
         *
         * @returns a `GskPath`
         */
        get_path(): Path;
    }
    namespace GLRenderer {
        // Signal signatures
        interface SignalSignatures extends Renderer.SignalSignatures {
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    type GLRenderer = (typeof classes.GLRenderer)['prototype'];
    const GLRenderer: typeof classes.GLRenderer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gsk.GLRenderer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, GLRenderer.SignalSignatures> & classes.GLRenderer);
    namespace GLShader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::resource'(pspec: GObject.ParamSpec): void;
            'notify::source'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * Resource containing the source code for the shader.
             *
             * If the shader source is not coming from a resource, this
             * will be %NULL.
             */
            resource: string;
            /**
             * The source code for the shader, as a `GBytes`.
             */
            source: GLib.Bytes;
        }
    }
    type GLShader = (typeof classes.GLShader)['prototype'];
    const GLShader: typeof classes.GLShader &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gsk.GLShader.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, GLShader.SignalSignatures> & classes.GLShader);
    namespace GLShaderNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node using a GL shader when drawing its children nodes.
     */
    class GLShaderNode extends RenderNode {
        static '$gtype': GObject.GType<GLShaderNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            shader: GLShader,
            bounds: Graphene.Rect,
            args: GLib.Bytes | Uint8Array,
            children?: RenderNode[] | null,
        ): GLShaderNode;
        // Signals
        connect<K extends keyof Gsk.GLShaderNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.GLShaderNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.GLShaderNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.GLShaderNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.GLShaderNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.GLShaderNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets args for the node.
         *
         * @returns A `GBytes` with the uniform arguments
         */
        get_args(): GLib.Bytes;
        /**
         * Gets one of the children.
         *
         * @returns the `idx'`th child of `node`
         * @param idx the position of the child to get
         */
        get_child(idx: number): RenderNode;
        /**
         * Returns the number of children
         *
         * @returns The number of children
         */
        get_n_children(): number;
        /**
         * Gets shader code for the node.
         *
         * @returns the `GskGLShader` shader
         */
        get_shader(): GLShader;
    }
    namespace InsetShadowNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for an inset shadow.
     */
    class InsetShadowNode extends RenderNode {
        static '$gtype': GObject.GType<InsetShadowNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            outline: RoundedRect,
            color: Gdk.RGBA,
            dx: number,
            dy: number,
            spread: number,
            blur_radius: number,
        ): InsetShadowNode;
        // Signals
        connect<K extends keyof Gsk.InsetShadowNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.InsetShadowNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.InsetShadowNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.InsetShadowNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.InsetShadowNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.InsetShadowNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the blur radius to apply to the shadow.
         *
         * @returns the blur radius, in pixels
         */
        get_blur_radius(): number;
        /**
         * Retrieves the color of the inset shadow.
         *
         * The value returned by this function will not be correct
         * if the render node was created for a non-sRGB color.
         *
         * @returns the color of the shadow
         */
        get_color(): Gdk.RGBA;
        /**
         * Retrieves the horizontal offset of the inset shadow.
         *
         * @returns an offset, in pixels
         */
        get_dx(): number;
        /**
         * Retrieves the vertical offset of the inset shadow.
         *
         * @returns an offset, in pixels
         */
        get_dy(): number;
        /**
         * Retrieves the outline rectangle of the inset shadow.
         *
         * @returns a rounded rectangle
         */
        get_outline(): RoundedRect;
        /**
         * Retrieves how much the shadow spreads inwards.
         *
         * @returns the size of the shadow, in pixels
         */
        get_spread(): number;
    }
    namespace LinearGradientNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a linear gradient.
     */
    class LinearGradientNode extends RenderNode {
        static '$gtype': GObject.GType<LinearGradientNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            bounds: Graphene.Rect,
            start: Graphene.Point,
            end: Graphene.Point,
            color_stops: ColorStop[],
        ): LinearGradientNode;
        // Signals
        connect<K extends keyof Gsk.LinearGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.LinearGradientNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.LinearGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.LinearGradientNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.LinearGradientNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.LinearGradientNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the color stops in the gradient.
         *
         * @returns the color stops in the gradient
         */
        get_color_stops(): ColorStop[];
        /**
         * Retrieves the final point of the linear gradient.
         *
         * @returns the final point
         */
        get_end(): Graphene.Point;
        /**
         * Retrieves the number of color stops in the gradient.
         *
         * @returns the number of color stops
         */
        get_n_color_stops(): number;
        /**
         * Retrieves the initial point of the linear gradient.
         *
         * @returns the initial point
         */
        get_start(): Graphene.Point;
    }
    namespace MaskNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node masking one child node with another.
     */
    class MaskNode extends RenderNode {
        static '$gtype': GObject.GType<MaskNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(source: RenderNode, mask: RenderNode, mask_mode: MaskMode): MaskNode;
        // Signals
        connect<K extends keyof Gsk.MaskNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.MaskNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.MaskNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.MaskNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.MaskNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.MaskNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the mask `GskRenderNode` child of the `node`.
         *
         * @returns the mask child node
         */
        get_mask(): RenderNode;
        /**
         * Retrieves the mask mode used by `node`.
         *
         * @returns the mask mode
         */
        get_mask_mode(): MaskMode;
        /**
         * Retrieves the source `GskRenderNode` child of the `node`.
         *
         * @returns the source child node
         */
        get_source(): RenderNode;
    }
    namespace NglRenderer {
        // Signal signatures
        interface SignalSignatures extends Renderer.SignalSignatures {
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    type NglRenderer = (typeof classes.NglRenderer)['prototype'];
    const NglRenderer: typeof classes.NglRenderer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gsk.NglRenderer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, NglRenderer.SignalSignatures> & classes.NglRenderer);
    namespace OpacityNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node controlling the opacity of its single child node.
     */
    class OpacityNode extends RenderNode {
        static '$gtype': GObject.GType<OpacityNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, opacity: number): OpacityNode;
        // Signals
        connect<K extends keyof Gsk.OpacityNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.OpacityNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.OpacityNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.OpacityNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.OpacityNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.OpacityNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting opacityed by the given `node`.
         *
         * @returns The child that is getting opacityed
         */
        get_child(): RenderNode;
        /**
         * Gets the transparency factor for an opacity node.
         *
         * @returns the opacity factor
         */
        get_opacity(): number;
    }
    namespace OutsetShadowNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for an outset shadow.
     */
    class OutsetShadowNode extends RenderNode {
        static '$gtype': GObject.GType<OutsetShadowNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            outline: RoundedRect,
            color: Gdk.RGBA,
            dx: number,
            dy: number,
            spread: number,
            blur_radius: number,
        ): OutsetShadowNode;
        // Signals
        connect<K extends keyof Gsk.OutsetShadowNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.OutsetShadowNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.OutsetShadowNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.OutsetShadowNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.OutsetShadowNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.OutsetShadowNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the blur radius of the shadow.
         *
         * @returns the blur radius, in pixels
         */
        get_blur_radius(): number;
        /**
         * Retrieves the color of the outset shadow.
         *
         * The value returned by this function will not be correct
         * if the render node was created for a non-sRGB color.
         *
         * @returns a color
         */
        get_color(): Gdk.RGBA;
        /**
         * Retrieves the horizontal offset of the outset shadow.
         *
         * @returns an offset, in pixels
         */
        get_dx(): number;
        /**
         * Retrieves the vertical offset of the outset shadow.
         *
         * @returns an offset, in pixels
         */
        get_dy(): number;
        /**
         * Retrieves the outline rectangle of the outset shadow.
         *
         * @returns a rounded rectangle
         */
        get_outline(): RoundedRect;
        /**
         * Retrieves how much the shadow spreads outwards.
         *
         * @returns the size of the shadow, in pixels
         */
        get_spread(): number;
    }
    namespace RadialGradientNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a radial gradient.
     */
    class RadialGradientNode extends RenderNode {
        static '$gtype': GObject.GType<RadialGradientNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            bounds: Graphene.Rect,
            center: Graphene.Point,
            hradius: number,
            vradius: number,
            start: number,
            end: number,
            color_stops: ColorStop[],
        ): RadialGradientNode;
        // Signals
        connect<K extends keyof Gsk.RadialGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RadialGradientNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.RadialGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RadialGradientNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.RadialGradientNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.RadialGradientNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the center pointer for the gradient.
         *
         * @returns the center point for the gradient
         */
        get_center(): Graphene.Point;
        /**
         * Retrieves the color stops in the gradient.
         *
         * @returns the color stops in the gradient
         */
        get_color_stops(): ColorStop[];
        /**
         * Retrieves the end value for the gradient.
         *
         * @returns the end value for the gradient
         */
        get_end(): number;
        /**
         * Retrieves the horizontal radius for the gradient.
         *
         * @returns the horizontal radius for the gradient
         */
        get_hradius(): number;
        /**
         * Retrieves the number of color stops in the gradient.
         *
         * @returns the number of color stops
         */
        get_n_color_stops(): number;
        /**
         * Retrieves the start value for the gradient.
         *
         * @returns the start value for the gradient
         */
        get_start(): number;
        /**
         * Retrieves the vertical radius for the gradient.
         *
         * @returns the vertical radius for the gradient
         */
        get_vradius(): number;
    }
    namespace RenderNode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }
    /**
     * The basic block in a scene graph to be rendered using [class`Gsk`.Renderer].
     *
     * Each node has a parent, except the top-level node; each node may have
     * children nodes.
     *
     * Each node has an associated drawing surface, which has the size of
     * the rectangle set when creating it.
     *
     * Render nodes are meant to be transient; once they have been associated
     * to a [class`Gsk`.Renderer] it's safe to release any reference you have on
     * them. All [class`Gsk`.RenderNode]s are immutable, you can only specify their
     * properties during construction.
     */
    abstract class RenderNode {
        static '$gtype': GObject.GType<RenderNode>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gsk.RenderNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RenderNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.RenderNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RenderNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.RenderNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.RenderNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Loads data previously created via [method`Gsk`.RenderNode.serialize].
         *
         * For a discussion of the supported format, see that function.
         *
         * @param bytes the bytes containing the data
         * @param error_func callback on parsing errors
         */
        static deserialize(bytes: GLib.Bytes | Uint8Array, error_func?: ParseErrorFunc | null): RenderNode | null;
        // Methods
        /**
         * Draws the contents of a render node on a cairo context.
         *
         * Typically, you'll use this function to implement fallback rendering
         * of render nodes on an intermediate Cairo context, instead of using
         * the drawing context associated to a [class`Gdk`.Surface]'s rendering buffer.
         *
         * For advanced nodes that cannot be supported using Cairo, in particular
         * for nodes doing 3D operations, this function may fail.
         *
         * @param cr cairo context to draw to
         */
        draw(cr: cairo.Context): void;
        /**
         * Retrieves the boundaries of the `node`.
         *
         * The node will not draw outside of its boundaries.
         */
        get_bounds(): [Graphene.Rect];
        /**
         * Returns the type of the render node.
         *
         * @returns the type of `node`
         */
        get_node_type(): RenderNodeType;
        /**
         * Gets an opaque rectangle inside the node that GTK can determine to
         * be fully opaque.
         *
         * There is no guarantee that this is indeed the largest opaque rectangle or
         * that regions outside the rectangle are not opaque. This function is a best
         * effort with that goal.
         *
         * The rectangle will be fully contained in the bounds of the node.
         *
         * @returns true if part or all of the rendernode is opaque, false if no
         *   opaque region could be found.
         */
        get_opaque_rect(): [boolean, Graphene.Rect];
        /**
         * Acquires a reference on the given `GskRenderNode`.
         *
         * @returns the render node with an additional reference
         */
        ref(): RenderNode;
        /**
         * Serializes the `node` for later deserialization via
         * gsk_render_node_deserialize(). No guarantees are made about the format
         * used other than that the same version of GTK will be able to deserialize
         * the result of a call to gsk_render_node_serialize() and
         * gsk_render_node_deserialize() will correctly reject files it cannot open
         * that were created with previous versions of GTK.
         *
         * The intended use of this functions is testing, benchmarking and debugging.
         * The format is not meant as a permanent storage format.
         *
         * @returns a `GBytes` representing the node.
         */
        serialize(): GLib.Bytes;
        /**
         * Releases a reference on the given `GskRenderNode`.
         *
         * If the reference was the last, the resources associated to the `node` are
         * freed.
         */
        unref(): void;
        /**
         * This function is equivalent to calling [method`Gsk`.RenderNode.serialize]
         * followed by [func`GLib`.file_set_contents].
         *
         * See those two functions for details on the arguments.
         *
         * It is mostly intended for use inside a debugger to quickly dump a render
         * node to a file for later inspection.
         *
         * @returns true if saving was successful
         * @param filename the file to save it to
         */
        write_to_file(filename: string): boolean;
    }
    namespace Renderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            /**
             * Whether the renderer has been associated with a surface or draw context.
             */
            realized: boolean;
            /**
             * The surface associated with renderer.
             */
            surface: Gdk.Surface;
        }
    }
    type Renderer = (typeof classes.Renderer)['prototype'];
    const Renderer: typeof classes.Renderer &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gsk.Renderer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Renderer.SignalSignatures> & classes.Renderer);
    namespace RepeatNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node repeating its single child node.
     */
    class RepeatNode extends RenderNode {
        static '$gtype': GObject.GType<RepeatNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(bounds: Graphene.Rect, child: RenderNode, child_bounds?: Graphene.Rect | null): RepeatNode;
        // Signals
        connect<K extends keyof Gsk.RepeatNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RepeatNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.RepeatNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RepeatNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.RepeatNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.RepeatNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the child of `node`.
         *
         * @returns a `GskRenderNode`
         */
        get_child(): RenderNode;
        /**
         * Retrieves the bounding rectangle of the child of `node`.
         *
         * @returns a bounding rectangle
         */
        get_child_bounds(): Graphene.Rect;
    }
    namespace RepeatingLinearGradientNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a repeating linear gradient.
     */
    class RepeatingLinearGradientNode extends RenderNode {
        static '$gtype': GObject.GType<RepeatingLinearGradientNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            bounds: Graphene.Rect,
            start: Graphene.Point,
            end: Graphene.Point,
            color_stops: ColorStop[],
        ): RepeatingLinearGradientNode;
        // Signals
        connect<K extends keyof Gsk.RepeatingLinearGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RepeatingLinearGradientNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.RepeatingLinearGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RepeatingLinearGradientNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.RepeatingLinearGradientNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.RepeatingLinearGradientNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace RepeatingRadialGradientNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a repeating radial gradient.
     */
    class RepeatingRadialGradientNode extends RenderNode {
        static '$gtype': GObject.GType<RepeatingRadialGradientNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(
            bounds: Graphene.Rect,
            center: Graphene.Point,
            hradius: number,
            vradius: number,
            start: number,
            end: number,
            color_stops: ColorStop[],
        ): RepeatingRadialGradientNode;
        // Signals
        connect<K extends keyof Gsk.RepeatingRadialGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RepeatingRadialGradientNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.RepeatingRadialGradientNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RepeatingRadialGradientNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.RepeatingRadialGradientNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.RepeatingRadialGradientNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    namespace RoundedClipNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node applying a rounded rectangle clip to its single child.
     */
    class RoundedClipNode extends RenderNode {
        static '$gtype': GObject.GType<RoundedClipNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, clip: RoundedRect): RoundedClipNode;
        // Signals
        connect<K extends keyof Gsk.RoundedClipNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RoundedClipNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.RoundedClipNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.RoundedClipNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.RoundedClipNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.RoundedClipNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting clipped by the given `node`.
         *
         * @returns The child that is getting clipped
         */
        get_child(): RenderNode;
        /**
         * Retrieves the rounded rectangle used to clip the contents of the `node`.
         *
         * @returns a rounded rectangle
         */
        get_clip(): RoundedRect;
    }
    namespace ShadowNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node drawing one or more shadows behind its single child node.
     */
    class ShadowNode extends RenderNode {
        static '$gtype': GObject.GType<ShadowNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, shadows: Shadow[]): ShadowNode;
        // Signals
        connect<K extends keyof Gsk.ShadowNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ShadowNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.ShadowNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.ShadowNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.ShadowNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.ShadowNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the child `GskRenderNode` of the shadow `node`.
         *
         * @returns the child render node
         */
        get_child(): RenderNode;
        /**
         * Retrieves the number of shadows in the `node`.
         *
         * @returns the number of shadows.
         */
        get_n_shadows(): number;
        /**
         * Retrieves the shadow data at the given index `i`.
         *
         * @returns the shadow data
         * @param i the given index
         */
        get_shadow(i: number): Shadow;
    }
    namespace StrokeNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node that will fill the area determined by stroking the the given
     * [struct`Gsk`.Path] using the [struct`Gsk`.Stroke] attributes.
     */
    class StrokeNode extends RenderNode {
        static '$gtype': GObject.GType<StrokeNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, path: Path, stroke: Stroke): StrokeNode;
        // Signals
        connect<K extends keyof Gsk.StrokeNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.StrokeNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.StrokeNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.StrokeNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.StrokeNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.StrokeNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting drawn by the given `node`.
         *
         * @returns The child that is getting drawn
         */
        get_child(): RenderNode;
        /**
         * Retrieves the path that will be stroked with the contents of
         * the `node`.
         *
         * @returns a #GskPath
         */
        get_path(): Path;
        /**
         * Retrieves the stroke attributes used in this `node`.
         *
         * @returns a #GskStroke
         */
        get_stroke(): Stroke;
    }
    namespace SubsurfaceNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node that potentially diverts a part of the scene graph to a subsurface.
     */
    class SubsurfaceNode extends RenderNode {
        static '$gtype': GObject.GType<SubsurfaceNode>;
        // Constructors
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Gsk.SubsurfaceNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.SubsurfaceNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.SubsurfaceNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.SubsurfaceNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.SubsurfaceNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.SubsurfaceNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting drawn by the given `node`.
         *
         * @returns the child `GskRenderNode`
         */
        get_child(): RenderNode;
    }
    namespace TextNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node drawing a set of glyphs.
     */
    class TextNode extends RenderNode {
        static '$gtype': GObject.GType<TextNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(font: Pango.Font, glyphs: Pango.GlyphString, color: Gdk.RGBA, offset: Graphene.Point): TextNode;
        // Signals
        connect<K extends keyof Gsk.TextNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.TextNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.TextNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.TextNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.TextNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.TextNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the color used by the text `node`.
         *
         * The value returned by this function will not be correct
         * if the render node was created for a non-sRGB color.
         *
         * @returns the text color
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the font used by the text `node`.
         *
         * @returns the font
         */
        get_font(): Pango.Font;
        /**
         * Retrieves the glyph information in the `node`.
         *
         * @returns the glyph information
         */
        get_glyphs(): Pango.GlyphInfo[];
        /**
         * Retrieves the number of glyphs in the text node.
         *
         * @returns the number of glyphs
         */
        get_num_glyphs(): number;
        /**
         * Retrieves the offset applied to the text.
         *
         * @returns a point with the horizontal and vertical offsets
         */
        get_offset(): Graphene.Point;
        /**
         * Checks whether the text `node` has color glyphs.
         *
         * @returns %TRUE if the text node has color glyphs
         */
        has_color_glyphs(): boolean;
    }
    namespace TextureNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a `GdkTexture`.
     */
    class TextureNode extends RenderNode {
        static '$gtype': GObject.GType<TextureNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(texture: Gdk.Texture, bounds: Graphene.Rect): TextureNode;
        // Signals
        connect<K extends keyof Gsk.TextureNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.TextureNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.TextureNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.TextureNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.TextureNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.TextureNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the `GdkTexture` used when creating this `GskRenderNode`.
         *
         * @returns the `GdkTexture`
         */
        get_texture(): Gdk.Texture;
    }
    namespace TextureScaleNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node for a `GdkTexture`, with control over scaling.
     */
    class TextureScaleNode extends RenderNode {
        static '$gtype': GObject.GType<TextureScaleNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(texture: Gdk.Texture, bounds: Graphene.Rect, filter: ScalingFilter): TextureScaleNode;
        // Signals
        connect<K extends keyof Gsk.TextureScaleNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.TextureScaleNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.TextureScaleNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.TextureScaleNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.TextureScaleNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.TextureScaleNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the `GskScalingFilter` used when creating this `GskRenderNode`.
         *
         * @returns the `GskScalingFilter`
         */
        get_filter(): ScalingFilter;
        /**
         * Retrieves the `GdkTexture` used when creating this `GskRenderNode`.
         *
         * @returns the `GdkTexture`
         */
        get_texture(): Gdk.Texture;
    }
    namespace TransformNode {
        // Signal signatures
        interface SignalSignatures extends RenderNode.SignalSignatures {}
    }
    /**
     * A render node applying a `GskTransform` to its single child node.
     */
    class TransformNode extends RenderNode {
        static '$gtype': GObject.GType<TransformNode>;
        // Constructors
        _init(...args: any[]): void;
        static new(child: RenderNode, transform: Transform): TransformNode;
        // Signals
        connect<K extends keyof Gsk.TransformNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.TransformNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.TransformNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.TransformNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.TransformNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.TransformNode.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the child node that is getting transformed by the given `node`.
         *
         * @returns The child that is getting transformed
         */
        get_child(): RenderNode;
        /**
         * Retrieves the `GskTransform` used by the `node`.
         *
         * @returns a `GskTransform`
         */
        get_transform(): Transform;
    }
    namespace VulkanRenderer {
        // Signal signatures
        interface SignalSignatures extends Renderer.SignalSignatures {
            'notify::realized'(pspec: GObject.ParamSpec): void;
            'notify::surface'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Renderer.ConstructorProps {}
    }
    type VulkanRenderer = (typeof classes.VulkanRenderer)['prototype'];
    const VulkanRenderer: typeof classes.VulkanRenderer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Gsk.VulkanRenderer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, VulkanRenderer.SignalSignatures> & classes.VulkanRenderer);
    export type BroadwayRendererClass = typeof BroadwayRenderer;
    export type CairoRendererClass = typeof CairoRenderer;
    /**
     * A color stop in a gradient node.
     */
    class ColorStop {
        static '$gtype': GObject.GType<ColorStop>;
        // Fields
        offset: number;
        color: Gdk.RGBA;
        // Constructors
        constructor(
            properties?: Partial<{
                offset: number;
                color: Gdk.RGBA;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * Specifies a transfer function for a color component to be applied
     * while rendering.
     *
     * The available functions include linear, piecewise-linear,
     * gamma and step functions.
     *
     * Note that the transfer function is applied to un-premultiplied
     * values, and all results are clamped to the [0, 1] range.
     */
    class ComponentTransfer {
        static '$gtype': GObject.GType<ComponentTransfer>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new_discrete(values: number[]): ComponentTransfer;
        static new_gamma(amp: number, exp: number, ofs: number): ComponentTransfer;
        static new_identity(): ComponentTransfer;
        static new_levels(n: number): ComponentTransfer;
        static new_linear(m: number, b: number): ComponentTransfer;
        static new_table(values: number[]): ComponentTransfer;
        // Static methods
        /**
         * Compares two component transfers for equality.
         *
         * @param self a component transfer
         * @param other another component transfer
         */
        static equal(self: any, other: any): boolean;
        // Methods
        /**
         * Creates a copy of `other`.
         *
         * @returns a newly allocated copy of `other`
         */
        copy(): ComponentTransfer;
        /**
         * Frees a component transfer.
         */
        free(): void;
    }
    export type GLRendererClass = typeof GLRenderer;
    export type GLShaderClass = typeof GLShader;
    /**
     * A location in a parse buffer.
     */
    class ParseLocation {
        static '$gtype': GObject.GType<ParseLocation>;
        // Fields
        bytes: number;
        chars: number;
        lines: number;
        line_bytes: number;
        line_chars: number;
        // Constructors
        constructor(
            properties?: Partial<{
                bytes: number;
                chars: number;
                lines: number;
                line_bytes: number;
                line_chars: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * Describes lines and curves that are more complex than simple rectangles.
     *
     * Paths can used for rendering (filling or stroking) and for animations
     * (e.g. as trajectories).
     *
     * `GskPath` is an immutable, opaque, reference-counted struct.
     * After creation, you cannot change the types it represents. Instead,
     * new `GskPath` objects have to be created. The [struct`Gsk`.PathBuilder]
     * structure is meant to help in this endeavor.
     *
     * Conceptually, a path consists of zero or more contours (continuous, connected
     * curves), each of which may or may not be closed. Contours are typically
     * constructed from Bézier segments.
     *
     * <picture>
     *   <source srcset="path-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="A Path" src="path-light.png">
     * </picture>
     */
    abstract class Path {
        static '$gtype': GObject.GType<Path>;
        // Constructors
        _init(...args: any[]): void;
        // Static methods
        /**
         * Constructs a path from a serialized form.
         *
         * The string is expected to be in (a superset of)
         * [SVG path syntax](https://www.w3.org/TR/SVG11/paths.html#PathData),
         * as e.g. produced by [method`Gsk`.Path.to_string].
         *
         * A high-level summary of the syntax:
         *
         * - `M x y` Move to `(x, y)`
         * - `L x y` Add a line from the current point to `(x, y)`
         * - `Q x1 y1 x2 y2` Add a quadratic Bézier from the current point to `(x2, y2)`, with control point `(x1, y1)`
         * - `C x1 y1 x2 y2 x3 y3` Add a cubic Bézier from the current point to `(x3, y3)`, with control points `(x1, y1)` and `(x2, y2)`
         * - `Z` Close the contour by drawing a line back to the start point
         * - `H x` Add a horizontal line from the current point to the given x value
         * - `V y` Add a vertical line from the current point to the given y value
         * - `T x2 y2` Add a quadratic Bézier, using the reflection of the previous segments' control point as control point
         * - `S x2 y2 x3 y3` Add a cubic Bézier, using the reflection of the previous segments' second control point as first control point
         * - `A rx ry r l s x y` Add an elliptical arc from the current point to `(x, y)` with radii rx and ry. See the SVG documentation for how the other parameters influence the arc.
         * - `O x1 y1 x2 y2 w` Add a rational quadratic Bézier from the current point to `(x2, y2)` with control point `(x1, y1)` and weight `w`.
         *
         * All the commands have lowercase variants that interpret coordinates
         * relative to the current point.
         *
         * The `O` command is an extension that is not supported in SVG.
         *
         * @param string a string
         */
        static parse(string: string): Path | null;
        // Methods
        /**
         * Calls `func` for every operation of the path.
         *
         * Note that this may only approximate `self,` because paths can contain
         * optimizations for various specialized contours, and depending on the
         * `flags,` the path may be decomposed into simpler curves than the ones
         * that it contained originally.
         *
         * This function serves two purposes:
         *
         * - When the `flags` allow everything, it provides access to the raw,
         *   unmodified data of the path.
         * - When the `flags` disallow certain operations, it provides
         *   an approximation of the path using just the allowed operations.
         *
         * @returns false if `func` returned false, true otherwise.
         * @param flags flags to pass to the foreach function
         * @param func the function to call for operations
         */
        foreach(flags: PathForeachFlags | null, func: PathForeachFunc): boolean;
        /**
         * Finds intersections between two paths.
         *
         * This function finds intersections between `path1` and `path2`,
         * and calls `func` for each of them, in increasing order for `path1`.
         *
         * If `path2` is not provided or equal to `path1`, the function finds
         * non-trivial self-intersections of `path1`.
         *
         * When segments of the paths coincide, the callback is called once
         * for the start of the segment, with `GSK_PATH_INTERSECTION_START,` and
         * once for the end of the segment, with `GSK_PATH_INTERSECTION_END`.
         * Note that other intersections may occur between the start and end
         * of such a segment.
         *
         * If `func` returns `FALSE`, the iteration is stopped.
         *
         * @returns `FALSE` if `func` returned FALSE`, `TRUE` otherwise.
         * @param _path2 the second path
         * @param func the function to call for intersections
         */
        foreach_intersection(_path2: Path | null, func: PathIntersectionFunc): boolean;
        /**
         * Computes the bounds of the given path.
         *
         * The returned bounds may be larger than necessary, because this
         * function aims to be fast, not accurate. The bounds are guaranteed
         * to contain the path.
         *
         * It is possible that the returned rectangle has 0 width and/or height.
         * This can happen when the path only describes a point or an
         * axis-aligned line.
         *
         * If the path is empty, false is returned and `bounds` are set to
         * graphene_rect_zero(). This is different from the case where the path
         * is a single point at the origin, where the `bounds` will also be set to
         * the zero rectangle but true will be returned.
         *
         * @returns true if the path has bounds, false if the path is known
         *   to be empty and have no bounds
         */
        get_bounds(): [boolean, Graphene.Rect];
        /**
         * Computes the closest point on the path to the given point.
         *
         * If there is no point closer than the given threshold,
         * false is returned.
         *
         * @returns true if `point` was set to the closest point
         *   on `self,` false if no point is closer than `threshold`
         * @param point the point
         * @param threshold maximum allowed distance
         */
        get_closest_point(point: Graphene.Point, threshold: number): [boolean, PathPoint, number];
        /**
         * Gets the end point of the path.
         *
         * An empty path has no points, so false
         * is returned in this case.
         *
         * @returns true if `result` was filled
         */
        get_end_point(): [boolean, PathPoint];
        /**
         * Gets the start point of the path.
         *
         * An empty path has no points, so false
         * is returned in this case.
         *
         * @returns true if `result` was filled
         */
        get_start_point(): [boolean, PathPoint];
        /**
         * Computes the bounds for stroking the given path with the
         * given parameters.
         *
         * The returned bounds may be larger than necessary, because this
         * function aims to be fast, not accurate. The bounds are guaranteed
         * to contain the area affected by the stroke, including protrusions
         * like miters.
         *
         * @returns true if the path has bounds, false if the path is known
         *   to be empty and have no bounds.
         * @param stroke stroke parameters
         */
        get_stroke_bounds(stroke: Stroke): [boolean, Graphene.Rect];
        /**
         * Returns whether a point is inside the fill area of a path.
         *
         * Note that this function assumes that filling a contour
         * implicitly closes it.
         *
         * @returns true if `point` is inside
         * @param point the point to test
         * @param fill_rule the fill rule to follow
         */
        in_fill(point: Graphene.Point, fill_rule: FillRule | null): boolean;
        /**
         * Returns if the path represents a single closed contour.
         *
         * @returns true if the path is closed
         */
        is_closed(): boolean;
        /**
         * Checks if the path is empty, i.e. contains no lines or curves.
         *
         * @returns true if the path is empty
         */
        is_empty(): boolean;
        /**
         * Converts the path into a human-readable representation.
         *
         * The string is compatible with (a superset of)
         * [SVG path syntax](https://www.w3.org/TR/SVG11/paths.html#PathData),
         * see [func`Gsk`.Path.parse] for a summary of the syntax.
         *
         * @param string the string to print into
         */
        print(string: GLib.String): void;
        /**
         * Increases the reference count of a path by one.
         *
         * @returns the passed in `GskPath`
         */
        ref(): Path;
        /**
         * Appends the path to a cairo context for drawing with Cairo.
         *
         * This may cause some suboptimal conversions to be performed as
         * Cairo does not support all features of `GskPath`.
         *
         * This function does not clear the existing Cairo path. Call
         * cairo_new_path() if you want this.
         *
         * @param cr a cairo context
         */
        to_cairo(cr: cairo.Context): void;
        /**
         * Converts the path into a human-readable string.
         *
         * You can use this function in a debugger to get a quick overview
         * of the path.
         *
         * This is a wrapper around [method`Gsk`.Path.print], see that function
         * for details.
         *
         * @returns a new string for `self`
         */
        to_string(): string;
        /**
         * Decreases the reference count of a path by one.
         *
         * If the resulting reference count is zero, frees the path.
         */
        unref(): void;
    }
    /**
     * Constructs `GskPath` objects.
     *
     * A path is constructed like this:
     *
     * ```c
     * GskPath *
     * construct_path (void)
     * {
     *   GskPathBuilder *builder;
     *
     *   builder = gsk_path_builder_new ();
     *
     *   // add contours to the path here
     *
     *   return gsk_path_builder_free_to_path (builder);
     * ```
     *
     * Adding contours to the path can be done in two ways.
     * The easiest option is to use the `gsk_path_builder_add_*` group
     * of functions that add predefined contours to the current path,
     * either common shapes like [method`Gsk`.PathBuilder.add_circle]
     * or by adding from other paths like [method`Gsk`.PathBuilder.add_path].
     *
     * The `gsk_path_builder_add_*` methods always add complete contours,
     * and do not use or modify the current point.
     *
     * The other option is to define each line and curve manually with
     * the `gsk_path_builder_*_to` group of functions. You start with
     * a call to [method`Gsk`.PathBuilder.move_to] to set the starting point
     * and then use multiple calls to any of the drawing functions to
     * move the pen along the plane. Once you are done, you can call
     * [method`Gsk`.PathBuilder.close] to close the path by connecting it
     * back with a line to the starting point.
     *
     * This is similar to how paths are drawn in Cairo.
     *
     * Note that `GskPathBuilder` will reduce the degree of added Bézier
     * curves as much as possible, to simplify rendering.
     */
    class PathBuilder {
        static '$gtype': GObject.GType<PathBuilder>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(): PathBuilder;
        // Methods
        /**
         * Adds a Cairo path to the builder.
         *
         * You can use cairo_copy_path() to access the path
         * from a Cairo context.
         *
         * @param path a path
         */
        add_cairo_path(path: cairo.Path): void;
        /**
         * Adds a circle as a new contour.
         *
         * The path is going around the circle in clockwise direction.
         *
         * If `radius` is zero, the contour will be a closed point.
         *
         * @param center the center of the circle
         * @param radius the radius of the circle
         */
        add_circle(center: Graphene.Point, radius: number): void;
        /**
         * Adds the outlines for the glyphs in `layout` to the builder.
         *
         * @param layout the pango layout to add
         */
        add_layout(layout: Pango.Layout): void;
        /**
         * Appends all of `path` to the builder.
         *
         * @param path the path to append
         */
        add_path(path: Path): void;
        /**
         * Adds a rectangle as a new contour.
         *
         * The path is going around the rectangle in clockwise direction.
         *
         * If the the width or height are 0, the path will be a closed
         * horizontal or vertical line. If both are 0, it'll be a closed dot.
         *
         * @param rect the rectangle to create a path for
         */
        add_rect(rect: Graphene.Rect): void;
        /**
         * Appends all of `path` to the builder, in reverse order.
         *
         * @param path the path to append
         */
        add_reverse_path(path: Path): void;
        /**
         * Adds a rounded rectangle as a new contour.
         *
         * The path is going around the rectangle in clockwise direction.
         *
         * @param rect the rounded rect
         */
        add_rounded_rect(rect: RoundedRect): void;
        /**
         * Adds a segment of a path to the builder.
         *
         * If `start` is equal to or after `end,` the path will first add the
         * segment from `start` to the end of the path, and then add the segment
         * from the beginning to `end`. If the path is closed, these segments
         * will be connected.
         *
         * Note that this method always adds a path with the given start point
         * and end point. To add a closed path, use [method`Gsk`.PathBuilder.add_path].
         *
         * @param path the path to take the segment to
         * @param start the point on `path` to start at
         * @param end the point on `path` to end at
         */
        add_segment(path: Path, start: PathPoint, end: PathPoint): void;
        /**
         * Adds an elliptical arc from the current point to `x2`, `y2`
         * with `x1`, `y1` determining the tangent directions.
         *
         * After this, `x2`, `y2` will be the new current point.
         *
         * Note: Two points and their tangents do not determine
         * a unique ellipse, so GSK just picks one. If you need more
         * precise control, use [method`Gsk`.PathBuilder.conic_to]
         * or [method`Gsk`.PathBuilder.svg_arc_to].
         *
         * <picture>
         *   <source srcset="arc-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Arc To" src="arc-light.png">
         * </picture>
         *
         * @param _x1 x coordinate of first control point
         * @param _y1 y coordinate of first control point
         * @param _x2 x coordinate of second control point
         * @param _y2 y coordinate of second control point
         */
        arc_to(_x1: number, _y1: number, _x2: number, _y2: number): void;
        /**
         * Ends the current contour with a line back to the start point.
         *
         * Note that this is different from calling [method`Gsk`.PathBuilder.line_to]
         * with the start point in that the contour will be closed. A closed
         * contour behaves differently from an open one. When stroking, its
         * start and end point are considered connected, so they will be
         * joined via the line join, and not ended with line caps.
         */
        close(): void;
        /**
         * Adds a [conic curve](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline)
         * from the current point to `x2`, `y2` with the given `weight` and `x1`, `y1` as the
         * control point.
         *
         * The weight determines how strongly the curve is pulled towards the control point.
         * A conic with weight 1 is identical to a quadratic Bézier curve with the same points.
         *
         * Conic curves can be used to draw ellipses and circles. They are also known as
         * rational quadratic Bézier curves.
         *
         * After this, `x2`, `y2` will be the new current point.
         *
         * <picture>
         *   <source srcset="conic-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Conic To" src="conic-light.png">
         * </picture>
         *
         * @param _x1 x coordinate of control point
         * @param _y1 y coordinate of control point
         * @param _x2 x coordinate of the end of the curve
         * @param _y2 y coordinate of the end of the curve
         * @param weight weight of the control point, must be greater than zero
         */
        conic_to(_x1: number, _y1: number, _x2: number, _y2: number, weight: number): void;
        /**
         * Adds a [cubic Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
         * from the current point to `x3`, `y3` with `x1`, `y1` and `x2`, `y2` as the control
         * points.
         *
         * After this, `x3`, `y3` will be the new current point.
         *
         * <picture>
         *   <source srcset="cubic-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Cubic To" src="cubic-light.png">
         * </picture>
         *
         * @param _x1 x coordinate of first control point
         * @param _y1 y coordinate of first control point
         * @param _x2 x coordinate of second control point
         * @param _y2 y coordinate of second control point
         * @param _x3 x coordinate of the end of the curve
         * @param _y3 y coordinate of the end of the curve
         */
        cubic_to(_x1: number, _y1: number, _x2: number, _y2: number, _x3: number, _y3: number): void;
        /**
         * Gets the current point.
         *
         * The current point is used for relative drawing commands and
         * updated after every operation.
         *
         * When the builder is created, the default current point is set
         * to `0, 0`. Note that this is different from cairo, which starts
         * out without a current point.
         *
         * @returns the current point
         */
        get_current_point(): Graphene.Point;
        /**
         * Implements arc-to according to the HTML Canvas spec.
         *
         * A convenience function that implements the
         * [HTML arc_to](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-arcto-dev)
         * functionality.
         *
         * After this, the current point will be the point where
         * the circle with the given radius touches the line from
         * `x1`, `y1` to `x2`, `y2`.
         *
         * @param _x1 x coordinate of first control point
         * @param _y1 y coordinate of first control point
         * @param _x2 x coordinate of second control point
         * @param _y2 y coordinate of second control point
         * @param radius radius of the circle
         */
        html_arc_to(_x1: number, _y1: number, _x2: number, _y2: number, radius: number): void;
        /**
         * Draws a line from the current point to `x,` `y` and makes it
         * the new current point.
         *
         * <picture>
         *   <source srcset="line-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Line To" src="line-light.png">
         * </picture>
         *
         * @param x x coordinate
         * @param y y coordinate
         */
        line_to(x: number, y: number): void;
        /**
         * Starts a new contour by placing the pen at `x,` `y`.
         *
         * If this function is called twice in succession, the first
         * call will result in a contour made up of a single point.
         * The second call will start a new contour.
         *
         * @param x x coordinate
         * @param y y coordinate
         */
        move_to(x: number, y: number): void;
        /**
         * Adds a [quadratic Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
         * from the current point to `x2`, `y2` with `x1`, `y1` as the control point.
         *
         * After this, `x2`, `y2` will be the new current point.
         *
         * <picture>
         *   <source srcset="quad-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Quad To" src="quad-light.png">
         * </picture>
         *
         * @param _x1 x coordinate of control point
         * @param _y1 y coordinate of control point
         * @param _x2 x coordinate of the end of the curve
         * @param _y2 y coordinate of the end of the curve
         */
        quad_to(_x1: number, _y1: number, _x2: number, _y2: number): void;
        /**
         * Acquires a reference on the given builder.
         *
         * This function is intended primarily for language bindings.
         * `GskPathBuilder` objects should not be kept around.
         *
         * @returns the given path builder with
         *   its reference count increased
         */
        ref(): PathBuilder;
        /**
         * Adds an elliptical arc from the current point to `x2`, `y2`
         * with `x1`, `y1` determining the tangent directions.
         *
         * All coordinates are given relative to the current point.
         *
         * This is the relative version of [method`Gsk`.PathBuilder.arc_to].
         *
         * @param _x1 x coordinate of first control point
         * @param _y1 y coordinate of first control point
         * @param _x2 x coordinate of second control point
         * @param _y2 y coordinate of second control point
         */
        rel_arc_to(_x1: number, _y1: number, _x2: number, _y2: number): void;
        /**
         * Adds a [conic curve](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline)
         * from the current point to `x2`, `y2` with the given `weight` and `x1`, `y1` as the
         * control point.
         *
         * All coordinates are given relative to the current point.
         *
         * This is the relative version of [method`Gsk`.PathBuilder.conic_to].
         *
         * @param _x1 x offset of control point
         * @param _y1 y offset of control point
         * @param _x2 x offset of the end of the curve
         * @param _y2 y offset of the end of the curve
         * @param weight weight of the curve, must be greater than zero
         */
        rel_conic_to(_x1: number, _y1: number, _x2: number, _y2: number, weight: number): void;
        /**
         * Adds a [cubic Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
         * from the current point to `x3`, `y3` with `x1`, `y1` and `x2`, `y2` as the control
         * points.
         *
         * All coordinates are given relative to the current point.
         *
         * This is the relative version of [method`Gsk`.PathBuilder.cubic_to].
         *
         * @param _x1 x offset of first control point
         * @param _y1 y offset of first control point
         * @param _x2 x offset of second control point
         * @param _y2 y offset of second control point
         * @param _x3 x offset of the end of the curve
         * @param _y3 y offset of the end of the curve
         */
        rel_cubic_to(_x1: number, _y1: number, _x2: number, _y2: number, _x3: number, _y3: number): void;
        /**
         * Implements arc-to according to the HTML Canvas spec.
         *
         * All coordinates are given relative to the current point.
         *
         * This is the relative version of [method`Gsk`.PathBuilder.html_arc_to].
         *
         * @param _x1 x coordinate of first control point
         * @param _y1 y coordinate of first control point
         * @param _x2 x coordinate of second control point
         * @param _y2 y coordinate of second control point
         * @param radius radius of the circle
         */
        rel_html_arc_to(_x1: number, _y1: number, _x2: number, _y2: number, radius: number): void;
        /**
         * Draws a line from the current point to a point offset from it
         * by `x,` `y` and makes it the new current point.
         *
         * This is the relative version of [method`Gsk`.PathBuilder.line_to].
         *
         * @param x x offset
         * @param y y offset
         */
        rel_line_to(x: number, y: number): void;
        /**
         * Starts a new contour by placing the pen at `x,` `y`
         * relative to the current point.
         *
         * This is the relative version of [method`Gsk`.PathBuilder.move_to].
         *
         * @param x x offset
         * @param y y offset
         */
        rel_move_to(x: number, y: number): void;
        /**
         * Adds a [quadratic Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
         * from the current point to `x2`, `y2` with `x1`, `y1` the control point.
         *
         * All coordinates are given relative to the current point.
         *
         * This is the relative version of [method`Gsk`.PathBuilder.quad_to].
         *
         * @param _x1 x offset of control point
         * @param _y1 y offset of control point
         * @param _x2 x offset of the end of the curve
         * @param _y2 y offset of the end of the curve
         */
        rel_quad_to(_x1: number, _y1: number, _x2: number, _y2: number): void;
        /**
         * Implements arc-to according to the SVG spec.
         *
         * All coordinates are given relative to the current point.
         *
         * This is the relative version of [method`Gsk`.PathBuilder.svg_arc_to].
         *
         * @param rx x radius
         * @param ry y radius
         * @param x_axis_rotation the rotation of the ellipsis
         * @param large_arc whether to add the large arc
         * @param positive_sweep whether to sweep in the positive direction
         * @param x x coordinate of the endpoint
         * @param y y coordinate of the endpoint
         */
        rel_svg_arc_to(
            rx: number,
            ry: number,
            x_axis_rotation: number,
            large_arc: boolean,
            positive_sweep: boolean,
            x: number,
            y: number,
        ): void;
        /**
         * Implements arc-to according to the SVG spec.
         *
         * A convenience function that implements the
         * [SVG arc_to](https://www.w3.org/TR/SVG11/paths.html#PathDataEllipticalArcCommands)
         * functionality.
         *
         * After this, `x,` `y` will be the new current point.
         *
         * @param rx x radius
         * @param ry y radius
         * @param x_axis_rotation the rotation of the ellipsis
         * @param large_arc whether to add the large arc
         * @param positive_sweep whether to sweep in the positive direction
         * @param x x coordinate of the endpoint
         * @param y y coordinate of the endpoint
         */
        svg_arc_to(
            rx: number,
            ry: number,
            x_axis_rotation: number,
            large_arc: boolean,
            positive_sweep: boolean,
            x: number,
            y: number,
        ): void;
        /**
         * Creates a new path from the given builder.
         *
         * The given `GskPathBuilder` is reset to the initial state once this
         * function returns. Calling this function again on the same builder
         * instance will therefore produce an empty path, not a copy of the same
         * path.
         *
         * This function is intended primarily for language bindings.
         * C code should use [method`Gsk`.PathBuilder.free_to_path].
         *
         * @returns the newly created path
         *   with all the contours added to the builder
         */
        to_path(): Path;
        /**
         * Releases a reference on the given builder.
         */
        unref(): void;
    }
    /**
     * Performs measurements on paths such as determining the length of the path.
     *
     * Many measuring operations require sampling the path length
     * at intermediate points. Therefore, a `GskPathMeasure` has
     * a tolerance that determines what precision is required
     * for such approximations.
     *
     * A `GskPathMeasure` struct is a reference counted struct
     * and should be treated as opaque.
     */
    class PathMeasure {
        static '$gtype': GObject.GType<PathMeasure>;
        // Constructors
        constructor(path: Path);
        _init(...args: any[]): void;
        static new(path: Path): PathMeasure;
        static new_with_tolerance(path: Path, tolerance: number): PathMeasure;
        // Methods
        /**
         * Gets the length of the path being measured.
         *
         * The length is cached, so this function does not do any work.
         *
         * @returns the length of the path measured by `self`
         */
        get_length(): number;
        /**
         * Returns the path that the measure was created for.
         *
         * @returns the path of `self`
         */
        get_path(): Path;
        /**
         * Gets the point at the given distance into the path.
         *
         * An empty path has no points, so false is returned in that case.
         *
         * @returns true if `result` was set
         * @param distance the distance
         */
        get_point(distance: number): [boolean, PathPoint];
        /**
         * Returns the tolerance that the measure was created with.
         *
         * @returns the tolerance of `self`
         */
        get_tolerance(): number;
        /**
         * Increases the reference count of a `GskPathMeasure` by one.
         *
         * @returns the passed in `GskPathMeasure`.
         */
        ref(): PathMeasure;
        /**
         * Decreases the reference count of a `GskPathMeasure` by one.
         *
         * If the resulting reference count is zero, frees the object.
         */
        unref(): void;
    }
    /**
     * Represents a point on a path.
     *
     * It can be queried for properties of the path at that point,
     * such as its tangent or its curvature.
     *
     * To obtain a `GskPathPoint`, use [method`Gsk`.Path.get_closest_point],
     * [method`Gsk`.Path.get_start_point], [method`Gsk`.Path.get_end_point]
     * or [method`Gsk`.PathMeasure.get_point].
     *
     * Note that `GskPathPoint` structs are meant to be stack-allocated,
     * and don't hold a reference to the path object they are obtained from.
     * It is the callers responsibility to keep a reference to the path
     * as long as the `GskPathPoint` is used.
     */
    class PathPoint {
        static '$gtype': GObject.GType<PathPoint>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Returns whether `point1` is before or after `point2`.
         *
         * @returns -1 if `point1` is before `point2`,
         *   1 if `point1` is after `point2`,
         *   0 if they are equal
         * @param _point2 another path point
         */
        compare(_point2: PathPoint): number;
        /**
         * Copies a path point.
         *
         * @returns the copied point
         */
        copy(): PathPoint;
        /**
         * Returns whether the two path points refer to the same
         * location on all paths.
         *
         * Note that the start- and endpoint of a closed contour
         * will compare nonequal according to this definition.
         * Use [method`Gsk`.Path.is_closed] to find out if the
         * start- and endpoint of a concrete path refer to the
         * same location.
         *
         * @returns true if `point1` and `point2` are equal
         * @param _point2 another path point
         */
        equal(_point2: PathPoint): boolean;
        /**
         * Frees a path point copied by [method`Gsk`.PathPoint.copy].
         */
        free(): void;
        /**
         * Calculates the curvature of the path at the point.
         *
         * Optionally, returns the center of the osculating circle as well.
         * The curvature is the inverse of the radius of the osculating circle.
         *
         * Lines have a curvature of zero (indicating an osculating circle of
         * infinite radius). In this case, the `center` is not modified.
         *
         * Circles with a radius of zero have `INFINITY` as curvature
         *
         * Note that certain points on a path may not have a single curvature,
         * such as sharp turns. At such points, there are two curvatures — the
         * (limit of) the curvature of the path going into the point, and the
         * (limit of) the curvature of the path coming out of it. The `direction`
         * argument lets you choose which one to get.
         *
         * <picture>
         *   <source srcset="curvature-dark.png" media="(prefers-color-scheme: dark)">
         *   <img alt="Osculating circle" src="curvature-light.png">
         * </picture>
         *
         * @returns the curvature of the path at the given point
         * @param path the path that `point` is on
         * @param direction the direction for which to return the curvature
         */
        get_curvature(path: Path, direction: PathDirection | null): [number, Graphene.Point | null];
        /**
         * Returns the distance from the beginning of the path
         * to the point.
         *
         * @returns the distance of `point`
         * @param measure a path measure for the path
         */
        get_distance(measure: PathMeasure): number;
        /**
         * Gets the position of the point.
         *
         * @param path the path that `point` is on
         */
        get_position(path: Path): [Graphene.Point];
        /**
         * Gets the direction of the tangent at a given point.
         *
         * This is a convenience variant of [method`Gsk`.PathPoint.get_tangent]
         * that returns the angle between the tangent and the X axis. The angle
         * can e.g. be used in
         * [gtk_snapshot_rotate()](../gtk4/method.Snapshot.rotate.html).
         *
         * @returns the angle between the tangent and the X axis, in degrees
         * @param path the path that `point` is on
         * @param direction the direction for which to return the rotation
         */
        get_rotation(path: Path, direction: PathDirection | null): number;
        /**
         * Gets the tangent of the path at the point.
         *
         * Note that certain points on a path may not have a single
         * tangent, such as sharp turns. At such points, there are
         * two tangents — the direction of the path going into the
         * point, and the direction coming out of it. The `direction`
         * argument lets you choose which one to get.
         *
         * If the path is just a single point (e.g. a circle with
         * radius zero), then the tangent is set to `0, 0`.
         *
         * If you want to orient something in the direction of the
         * path, [method`Gsk`.PathPoint.get_rotation] may be more
         * convenient to use.
         *
         * @param path the path that `point` is on
         * @param direction the direction for which to return the tangent
         */
        get_tangent(path: Path, direction: PathDirection | null): [Graphene.Vec2];
    }
    export type RendererClass = typeof Renderer;
    /**
     * A rectangular region with rounded corners.
     *
     * Application code should normalize rectangles using
     * [method`Gsk`.RoundedRect.normalize]; this function will ensure that
     * the bounds of the rectangle are normalized and ensure that the corner
     * values are positive and the corners do not overlap.
     *
     * All functions taking a `GskRoundedRect` as an argument will internally
     * operate on a normalized copy; all functions returning a `GskRoundedRect`
     * will always return a normalized one.
     *
     * The algorithm used for normalizing corner sizes is described in
     * [the CSS specification](https://drafts.csswg.org/css-backgrounds-3/#border-radius).
     */
    class RoundedRect {
        static '$gtype': GObject.GType<RoundedRect>;
        // Fields
        bounds: Graphene.Rect;
        corner: Graphene.Size[];
        // Constructors
        constructor(
            properties?: Partial<{
                bounds: Graphene.Rect;
                corner: Graphene.Size[];
            }>,
        );
        _init(...args: any[]): void;
        // Methods
        /**
         * Checks if the given point is inside the rounded rectangle.
         *
         * @returns true if the point is inside the rounded rectangle
         * @param point the point to check
         */
        contains_point(point: Graphene.Point): boolean;
        /**
         * Checks if the given rectangle is contained inside the rounded rectangle.
         *
         * @returns true if the `rect` is fully contained inside the rounded rectangle
         * @param rect the rectangle to check
         */
        contains_rect(rect: Graphene.Rect): boolean;
        /**
         * Initializes a rounded rectangle with the given values.
         *
         * This function will implicitly normalize the rounded rectangle
         * before returning.
         *
         * @returns the initialized rounded rectangle
         * @param bounds a `graphene_rect_t` describing the bounds
         * @param top_left the rounding radius of the top left corner
         * @param top_right the rounding radius of the top right corner
         * @param bottom_right the rounding radius of the bottom right corner
         * @param bottom_left the rounding radius of the bottom left corner
         */
        init(
            bounds: Graphene.Rect,
            top_left: Graphene.Size,
            top_right: Graphene.Size,
            bottom_right: Graphene.Size,
            bottom_left: Graphene.Size,
        ): RoundedRect;
        /**
         * Initializes a rounded rectangle with a copy.
         *
         * This function will not normalize the rounded rectangle,
         * so make sure the source is normalized.
         *
         * @returns the initialized rounded rectangle
         * @param src another rounded rectangle
         */
        init_copy(src: RoundedRect): RoundedRect;
        /**
         * Initializes a rounded rectangle to the given bounds
         * and sets the radius of all four corners equally.
         *
         * @returns the initialized rounded rectangle
         * @param bounds a `graphene_rect_t`
         * @param radius the border radius
         */
        init_from_rect(bounds: Graphene.Rect, radius: number): RoundedRect;
        /**
         * Checks if part a rectangle is contained
         * inside the rounded rectangle.
         *
         * @returns true if the `rect` intersects with the rounded rectangle
         * @param rect the rectangle to check
         */
        intersects_rect(rect: Graphene.Rect): boolean;
        /**
         * Checks if all corners of a rounded rectangle are right angles
         * and the rectangle covers all of its bounds.
         *
         * This information can be used to decide if [ctor`Gsk`.ClipNode.new]
         * or [ctor`Gsk`.RoundedClipNode.new] should be called.
         *
         * @returns true if the rounded rectangle is rectilinear
         */
        is_rectilinear(): boolean;
        /**
         * Normalizes a rounded rectangle.
         *
         * This function will ensure that the bounds of the rounded rectangle
         * are normalized and ensure that the corner values are positive
         * and the corners do not overlap.
         *
         * @returns the normalized rounded rectangle
         */
        normalize(): RoundedRect;
        /**
         * Offsets the rounded rectangle's origin by `dx` and `dy`.
         *
         * The size and corners of the rounded rectangle are unchanged.
         *
         * @returns the offset rounded rectangle
         * @param dx the horizontal offset
         * @param dy the vertical offset
         */
        offset(dx: number, dy: number): RoundedRect;
        /**
         * Shrinks (or grows) a rounded rectangle by moving the 4 sides
         * according to the offsets given.
         *
         * The corner radii will be changed in a way that tries to keep
         * the center of the corner circle intact. This emulates CSS behavior.
         *
         * This function also works for growing rounded rectangles
         * if you pass negative values for the `top,` `right,` `bottom` or `left`.
         *
         * @returns the resized rounded rectangle
         * @param top how far to move the top side downwards
         * @param right how far to move the right side to the left
         * @param bottom how far to move the bottom side upwards
         * @param left how far to move the left side to the right
         */
        shrink(top: number, right: number, bottom: number, left: number): RoundedRect;
    }
    /**
     * Builds the uniforms data for a `GskGLShader`.
     */
    class ShaderArgsBuilder {
        static '$gtype': GObject.GType<ShaderArgsBuilder>;
        // Constructors
        constructor(shader: GLShader, initial_values?: GLib.Bytes | null);
        _init(...args: any[]): void;
        static new(shader: GLShader, initial_values?: GLib.Bytes | null): ShaderArgsBuilder;
        // Methods
        /**
         * Increases the reference count of a `GskShaderArgsBuilder` by one.
         *
         * @returns the passed in `GskShaderArgsBuilder`
         */
        ref(): ShaderArgsBuilder;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of bool type.
         *
         * @param idx index of the uniform
         * @param value value to set the uniform to
         */
        set_bool(idx: number, value: boolean): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of float type.
         *
         * @param idx index of the uniform
         * @param value value to set the uniform to
         */
        set_float(idx: number, value: number): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of int type.
         *
         * @param idx index of the uniform
         * @param value value to set the uniform to
         */
        set_int(idx: number, value: number): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of uint type.
         *
         * @param idx index of the uniform
         * @param value value to set the uniform to
         */
        set_uint(idx: number, value: number): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of vec2 type.
         *
         * @param idx index of the uniform
         * @param value value to set the uniform too
         */
        set_vec2(idx: number, value: Graphene.Vec2): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of vec3 type.
         *
         * @param idx index of the uniform
         * @param value value to set the uniform too
         */
        set_vec3(idx: number, value: Graphene.Vec3): void;
        /**
         * Sets the value of the uniform `idx`.
         *
         * The uniform must be of vec4 type.
         *
         * @param idx index of the uniform
         * @param value value to set the uniform too
         */
        set_vec4(idx: number, value: Graphene.Vec4): void;
        /**
         * Creates a new `GBytes` args from the current state of the
         * given `builder`.
         *
         * Any uniforms of the shader that have not been explicitly set on
         * the `builder` are zero-initialized.
         *
         * The given `GskShaderArgsBuilder` is reset once this function returns;
         * you cannot call this function multiple times on the same `builder` instance.
         *
         * This function is intended primarily for bindings. C code should use
         * [method`Gsk`.ShaderArgsBuilder.free_to_args].
         *
         * @returns the newly allocated buffer with
         *   all the args added to `builder`
         */
        to_args(): GLib.Bytes;
        /**
         * Decreases the reference count of a `GskShaderArgBuilder` by one.
         *
         * If the resulting reference count is zero, frees the builder.
         */
        unref(): void;
    }
    /**
     * The shadow parameters in a shadow node.
     */
    class Shadow {
        static '$gtype': GObject.GType<Shadow>;
        // Fields
        color: Gdk.RGBA;
        dx: number;
        dy: number;
        radius: number;
        // Constructors
        constructor(
            properties?: Partial<{
                color: Gdk.RGBA;
                dx: number;
                dy: number;
                radius: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * Collects the parameters that are needed when stroking a path.
     */
    class Stroke {
        static '$gtype': GObject.GType<Stroke>;
        // Constructors
        constructor(line_width: number);
        _init(...args: any[]): void;
        static new(line_width: number): Stroke;
        // Static methods
        /**
         * Checks if two strokes are identical.
         *
         * @param _stroke1 the first stroke
         * @param _stroke2 the second stroke
         */
        static equal(_stroke1?: any | null, _stroke2?: any | null): boolean;
        // Methods
        /**
         * Creates a copy of a `GskStroke`.
         *
         * @returns a new `GskStroke`. Use [method`Gsk`.Stroke.free] to free it
         */
        copy(): Stroke;
        /**
         * Frees a `GskStroke`.
         */
        free(): void;
        /**
         * Gets the dash array in use.
         *
         * @returns the dash array or `NULL` if the dash array is empty
         */
        get_dash(): number[] | null;
        /**
         * Gets the dash offset.
         *
         * @returns the dash offset
         */
        get_dash_offset(): number;
        /**
         * Gets the line cap used.
         *
         * See [enum`Gsk`.LineCap] for details.
         *
         * @returns the line cap
         */
        get_line_cap(): LineCap;
        /**
         * Gets the line join used.
         *
         * See [enum`Gsk`.LineJoin] for details.
         *
         * @returns the line join
         */
        get_line_join(): LineJoin;
        /**
         * Gets the line width used.
         *
         * @returns the line width
         */
        get_line_width(): number;
        /**
         * Gets the miter limit.
         *
         * @returns the miter limit
         */
        get_miter_limit(): number;
        /**
         * Sets the dash pattern to use.
         *
         * A dash pattern is specified by an array of alternating non-negative
         * values. Each value provides the length of alternate "on" and "off"
         * portions of the stroke.
         *
         * Each "on" segment will have caps applied as if the segment were a
         * separate contour. In particular, it is valid to use an "on" length
         * of 0 with [enum`Gsk`.LineCap.round] or [enum`Gsk`.LineCap.square]
         * to draw dots or squares along a path.
         *
         * If `n_dash` is 0, if all elements in `dash` are 0, or if there are
         * negative values in `dash,` then dashing is disabled.
         *
         * If `n_dash` is 1, an alternating "on" and "off" pattern with the
         * single dash length provided is assumed.
         *
         * If `n_dash` is uneven, the dash array will be used with the first
         * element in `dash` defining an "on" or "off" in alternating passes
         * through the array.
         *
         * You can specify a starting offset into the dash with
         * [method`Gsk`.Stroke.set_dash_offset].
         *
         * @param dash the array of dashes
         */
        set_dash(dash?: number[] | null): void;
        /**
         * Sets the offset into the dash pattern where dashing should begin.
         *
         * This is an offset into the length of the path, not an index into
         * the array values of the dash array.
         *
         * See [method`Gsk`.Stroke.set_dash] for more details on dashing.
         *
         * @param offset offset into the dash pattern
         */
        set_dash_offset(offset: number): void;
        /**
         * Sets the line cap to be used when stroking.
         *
         * See [enum`Gsk`.LineCap] for details.
         *
         * @param line_cap the line cap
         */
        set_line_cap(line_cap: LineCap | null): void;
        /**
         * Sets the line join to be used when stroking.
         *
         * See [enum`Gsk`.LineJoin] for details.
         *
         * @param line_join the line join to use
         */
        set_line_join(line_join: LineJoin | null): void;
        /**
         * Sets the line width to be used when stroking.
         *
         * The line width must be >= 0.
         *
         * @param line_width width of the line in pixels
         */
        set_line_width(line_width: number): void;
        /**
         * Sets the miter limit to be used when stroking.
         *
         * The miter limit is the distance from the corner where sharp
         * turns of joins get cut off.
         *
         * The limit is specfied in units of line width and must be non-negative.
         *
         * For joins of type [enum`Gsk`.LineJoin.miter] that exceed the miter limit,
         * the join gets rendered as if it was of type [enum`Gsk`.LineJoin.bevel].
         *
         * @param limit the miter limit
         */
        set_miter_limit(limit: number): void;
        /**
         * A helper function that sets the stroke parameters
         * of a cairo context from a `GskStroke`.
         *
         * @param cr the cairo context to configure
         */
        to_cairo(cr: cairo.Context): void;
    }
    /**
     * Describes a 3D transform.
     *
     * Unlike `graphene_matrix_t`, `GskTransform` retains the steps in how
     * a transform was constructed, and allows inspecting them. It is modeled
     * after the way CSS describes transforms.
     *
     * `GskTransform` objects are immutable and cannot be changed after creation.
     * This means code can safely expose them as properties of objects without
     * having to worry about others changing them.
     */
    class Transform {
        static '$gtype': GObject.GType<Transform>;
        // Constructors
        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
        static new(): Transform;
        // Static methods
        /**
         * Parses a given into a transform.
         *
         * Strings printed via [method`Gsk`.Transform.to_string]
         * can be read in again successfully using this function.
         *
         * If `string` does not describe a valid transform, false
         * is returned and `NULL` is put in `out_transform`.
         *
         * @param string the string to parse
         */
        static parse(string: string): [boolean, Transform];
        // Methods
        /**
         * Checks two transforms for equality.
         *
         * @returns true if the two transforms perform the same operation
         * @param second the second transform
         */
        equal(second?: Transform | null): boolean;
        /**
         * Returns the category this transform belongs to.
         *
         * @returns The category of the transform
         */
        get_category(): TransformCategory;
        /**
         * Inverts the given transform.
         *
         * If `self` is not invertible, `NULL` is returned.
         * Note that inverting `NULL` also returns `NULL`, which is
         * the correct inverse of `NULL`. If you need to differentiate
         * between those cases, you should check `self` is not `NULL`
         * before calling this function.
         *
         * This function consumes `self`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The inverted transform
         */
        invert(): Transform | null;
        /**
         * Multiplies `next` with the given `matrix`.
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param matrix the matrix to multiply `next` with
         */
        matrix(matrix: Graphene.Matrix): Transform;
        /**
         * Multiplies `next` with the matrix [ xx yx x0; xy yy y0; 0 0 1 ].
         *
         * The result of calling [method`Gsk`.Transform.to_2d] on the returned
         * [struct`Gsk`.Transform] should match the input passed to this
         * function.
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param xx the xx member
         * @param yx the yx member
         * @param xy the xy member
         * @param yy the yy member
         * @param dx the x0 member
         * @param dy the y0 member
         */
        matrix_2d(xx: number, yx: number, xy: number, yy: number, dx: number, dy: number): Transform | null;
        /**
         * Applies a perspective projection transform.
         *
         * This transform scales points in X and Y based on their Z value,
         * scaling points with positive Z values away from the origin, and
         * those with negative Z values towards the origin. Points
         * on the z=0 plane are unchanged.
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param depth distance of the z=0 plane. Lower values give a more
         *   flattened pyramid and therefore a more pronounced
         *   perspective effect.
         */
        perspective(depth: number): Transform;
        /**
         * Converts the transform into a human-readable representation.
         *
         * The result of this function can later be parsed with
         * [func`Gsk`.Transform.parse].
         *
         * @param string The string to print into
         */
        print(string: GLib.String): void;
        /**
         * Acquires a reference on the given transform.
         *
         * @returns the transform with an additional reference
         */
        ref(): Transform | null;
        /**
         * Rotates `next` by an angle around the Z axis.
         *
         * The rotation happens around the origin point of (0, 0).
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param angle the rotation angle, in degrees (clockwise)
         */
        rotate(angle: number): Transform | null;
        /**
         * Rotates `next` `angle` degrees around `axis`.
         *
         * For a rotation in 2D space, use [method`Gsk`.Transform.rotate]
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param angle the rotation angle, in degrees (clockwise)
         * @param axis The rotation axis
         */
        rotate_3d(angle: number, axis: Graphene.Vec3): Transform | null;
        /**
         * Scales `next` in 2-dimensional space by the given factors.
         *
         * Use [method`Gsk`.Transform.scale_3d] to scale in all 3 dimensions.
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param factor_x scaling factor on the X axis
         * @param factor_y scaling factor on the Y axis
         */
        scale(factor_x: number, factor_y: number): Transform | null;
        /**
         * Scales `next` by the given factors.
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param factor_x scaling factor on the X axis
         * @param factor_y scaling factor on the Y axis
         * @param factor_z scaling factor on the Z axis
         */
        scale_3d(factor_x: number, factor_y: number, factor_z: number): Transform | null;
        /**
         * Applies a skew transform.
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param skew_x skew factor, in degrees, on the X axis
         * @param skew_y skew factor, in degrees, on the Y axis
         */
        skew(skew_x: number, skew_y: number): Transform | null;
        /**
         * Converts a transform to a 2D transformation matrix.
         *
         * `self` must be a 2D transformation. If you are not
         * sure, use
         *
         *     gsk_transform_get_category() >= GSK_TRANSFORM_CATEGORY_2D
         *
         * to check.
         *
         * The returned values are a subset of the full 4x4 matrix that
         * is computed by [method`Gsk`.Transform.to_matrix] and have the
         * following layout:
         *
         * ```
         *   | xx yx |   |  a  b  0 |
         *   | xy yy | = |  c  d  0 |
         *   | dx dy |   | tx ty  1 |
         * ```
         *
         * This function can be used to convert between a `GskTransform`
         * and a matrix type from other 2D drawing libraries, in particular
         * Cairo.
         */
        to_2d(): [number, number, number, number, number, number];
        /**
         * Converts a transform to 2D transformation factors.
         *
         * To recreate an equivalent transform from the factors returned
         * by this function, use
         *
         *     gsk_transform_skew (
         *         gsk_transform_scale (
         *             gsk_transform_rotate (
         *                 gsk_transform_translate (NULL, &GRAPHENE_POINT_INIT (dx, dy)),
         *                 angle),
         *             scale_x, scale_y),
         *         skew_x, skew_y)
         *
         * `self` must be a 2D transformation. If you are not sure, use
         *
         *     gsk_transform_get_category() >= GSK_TRANSFORM_CATEGORY_2D
         *
         * to check.
         */
        to_2d_components(): [number, number, number, number, number, number, number];
        /**
         * Converts a transform to 2D affine transformation factors.
         *
         * To recreate an equivalent transform from the factors returned
         * by this function, use
         *
         *     gsk_transform_scale (
         *         gsk_transform_translate (
         *             NULL,
         *             &GRAPHENE_POINT_T (dx, dy)),
         *         sx, sy)
         *
         * `self` must be a 2D affine transformation. If you are not
         * sure, use
         *
         *     gsk_transform_get_category() >= GSK_TRANSFORM_CATEGORY_2D_AFFINE
         *
         * to check.
         */
        to_affine(): [number, number, number, number];
        /**
         * Computes the 4x4 matrix for the transform.
         *
         * The previous value of `out_matrix` will be ignored.
         */
        to_matrix(): [Graphene.Matrix];
        /**
         * Converts the transform into a human-readable string.
         *
         * The resulting string can be parsed with [func`Gsk`.Transform.parse].
         *
         * This is a wrapper around [method`Gsk`.Transform.print].
         *
         * @returns A new string for `self`
         */
        to_string(): string;
        /**
         * Converts a transform to a translation operation.
         *
         * `self` must be a 2D transformation. If you are not
         * sure, use
         *
         *     gsk_transform_get_category() >= GSK_TRANSFORM_CATEGORY_2D_TRANSLATE
         *
         * to check.
         */
        to_translate(): [number, number];
        /**
         * Applies all the operations from `other` to `next`.
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param other transform to apply
         */
        transform(other?: Transform | null): Transform | null;
        /**
         * Transforms a rectangle using the given transform.
         *
         * The result is the bounding box containing the coplanar quad.
         *
         * @param rect the rectangle to transform
         */
        transform_bounds(rect: Graphene.Rect): [Graphene.Rect];
        /**
         * Transforms a point using the given transform.
         *
         * @param point the point to transform
         */
        transform_point(point: Graphene.Point): [Graphene.Point];
        /**
         * Translates `next` in 2-dimensional space by `point`.
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param point the point to translate the transform by
         */
        translate(point: Graphene.Point): Transform | null;
        /**
         * Translates `next` by `point`.
         *
         * This function consumes `next`. Use [method`Gsk`.Transform.ref] first
         * if you want to keep it around.
         *
         * @returns The new transform
         * @param point the point to translate the transform by
         */
        translate_3d(point: Graphene.Point3D): Transform | null;
        /**
         * Releases a reference on the given transform.
         *
         * If the reference was the last, the resources associated to the `self` are
         * freed.
         */
        unref(): void;
    }
    export type VulkanRendererClass = typeof VulkanRenderer;
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
export default Gsk;
