/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 *
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated.d.ts file of each GIR module like Gtk - 4.0, GObject - 2.0, ...
 */
import type Mtk from '@girs/mtk-17';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GL from '@girs/gl-1.0';
import '@girs/gjs';
import type classes from './cogl-17-classes.d.ts';
export { classes as CoglClasses };
export namespace Cogl {
    /**
     * Cogl-17
     */
    /**
     * Data types for the components of a vertex attribute.
     */
    export namespace AttributeType {
        export const $gtype: GObject.GType<AttributeType>;
    }
    enum AttributeType {
        /**
         * Data is the same size of a byte
         */
        BYTE = 5120,
        /**
         * Data is the same size of an
         *   unsigned byte
         */
        UNSIGNED_BYTE = 5121,
        /**
         * Data is the same size of a short integer
         */
        SHORT = 5122,
        /**
         * Data is the same size of
         *   an unsigned short integer
         */
        UNSIGNED_SHORT = 5123,
        /**
         * Data is the same size of a float
         */
        FLOAT = 5126,
    }
    export namespace BufferBindTarget {
        export const $gtype: GObject.GType<BufferBindTarget>;
    }
    enum BufferBindTarget {
        PIXEL_PACK,
        PIXEL_UNPACK = 1,
        ATTRIBUTE_BUFFER = 2,
        INDEX_BUFFER = 3,
        COUNT = 4,
    }
    /**
     * The update hint on a buffer allows the user to give some detail on how often
     * the buffer data is going to be updated.
     */
    export namespace BufferUpdateHint {
        export const $gtype: GObject.GType<BufferUpdateHint>;
    }
    enum BufferUpdateHint {
        /**
         * the buffer will not change over time
         */
        STATIC,
        /**
         * the buffer will change from time to time
         */
        DYNAMIC = 1,
        /**
         * the buffer will be used once or a couple of
         *   times
         */
        STREAM = 2,
    }
    /**
     * When using depth testing one of these functions is used to compare
     * the depth of an incoming fragment against the depth value currently
     * stored in the depth buffer. The function is changed using
     * cogl_depth_state_set_test_function().
     *
     * The test is only done when depth testing is explicitly enabled. (See
     * cogl_depth_state_set_test_enabled())
     */
    export namespace DepthTestFunction {
        export const $gtype: GObject.GType<DepthTestFunction>;
    }
    enum DepthTestFunction {
        /**
         * Never passes.
         */
        NEVER = 512,
        /**
         * Passes if the fragment's depth
         * value is less than the value currently in the depth buffer.
         */
        LESS = 513,
        /**
         * Passes if the fragment's depth
         * value is equal to the value currently in the depth buffer.
         */
        EQUAL = 514,
        /**
         * Passes if the fragment's depth
         * value is less or equal to the value currently in the depth buffer.
         */
        LEQUAL = 515,
        /**
         * Passes if the fragment's depth
         * value is greater than the value currently in the depth buffer.
         */
        GREATER = 516,
        /**
         * Passes if the fragment's depth
         * value is not equal to the value currently in the depth buffer.
         */
        NOTEQUAL = 517,
        /**
         * Passes if the fragment's depth
         * value greater than or equal to the value currently in the depth buffer.
         */
        GEQUAL = 518,
        /**
         * Always passes.
         */
        ALWAYS = 519,
    }
    /**
     * Identifiers for underlying hardware drivers that may be used by
     * Cogl for rendering.
     */
    export namespace DriverId {
        export const $gtype: GObject.GType<DriverId>;
    }
    enum DriverId {
        /**
         * Implies no preference for which driver is used
         */
        ANY,
        /**
         * A No-Op driver.
         */
        NOP = 1,
        /**
         * An OpenGL driver using the core GL 3.1 profile
         */
        'GL3' = 2,
        /**
         * An OpenGL ES 2.0 driver.
         */
        'GLES2' = 3,
    }
    /**
     * All the capabilities that can vary between different GPUs supported
     * by Cogl. Applications that depend on any of these features should explicitly
     * check for them using [method`Cogl`.Context.has_feature].
     */
    export namespace FeatureID {
        export const $gtype: GObject.GType<FeatureID>;
    }
    enum FeatureID {
        /**
         * Set if
         *     %COGL_INDICES_TYPE_UNSIGNED_INT is supported in
         *     cogl_indices_new().
         */
        OGL_FEATURE_ID_UNSIGNED_INT_INDICES,
        /**
         * Whether cogl_buffer_map() is
         *     supported with CoglBufferAccess including read support.
         */
        OGL_FEATURE_ID_MAP_BUFFER_FOR_READ = 1,
        /**
         * Whether cogl_buffer_map() is
         *     supported with CoglBufferAccess including write support.
         */
        OGL_FEATURE_ID_MAP_BUFFER_FOR_WRITE = 2,
        OGL_FEATURE_ID_FENCE = 3,
        /**
         * Support for
         *    %COGL_TEXTURE_COMPONENTS_RG as the internal components of a
         *    texture.
         */
        OGL_FEATURE_ID_TEXTURE_RG = 4,
        /**
         * Support for 10bpc RGBA formats
         */
        'OGL_FEATURE_ID_TEXTURE_RGBA1010102' = 5,
        /**
         * Support for half float formats
         */
        OGL_FEATURE_ID_TEXTURE_HALF_FLOAT = 6,
        /**
         * Support for 16bpc formats
         */
        'OGL_FEATURE_ID_TEXTURE_NORM16' = 7,
        /**
         * Available if the age of #CoglOnscreen back
         *    buffers are tracked and so cogl_onscreen_get_buffer_age() can be
         *    expected to return age values other than 0.
         */
        OGL_FEATURE_ID_BUFFER_AGE = 8,
        OGL_FEATURE_ID_TEXTURE_EGL_IMAGE_EXTERNAL = 9,
        /**
         * Whether blitting using
         *    [method`Cogl`.Framebuffer.blit] is supported.
         * `COGL_FEATURE_ID_SYNC_FD`
         *    cogl_context_get_latest_sync_fd() is supported.
         */
        OGL_FEATURE_ID_BLIT_FRAMEBUFFER = 10,
        OGL_FEATURE_ID_TIMESTAMP_QUERY = 11,
        OGL_FEATURE_ID_SYNC_FD = 12,
    }
    /**
     * Return values for the #CoglXlibFilterFunc and #CoglWin32FilterFunc functions.
     */
    export namespace FilterReturn {
        export const $gtype: GObject.GType<FilterReturn>;
    }
    enum FilterReturn {
        /**
         * The event was not handled, continues the
         *                        processing
         */
        CONTINUE,
        /**
         * Remove the event, stops the processing
         */
        REMOVE = 1,
    }
    /**
     * Identifiers that are passed to #CoglFrameCallback functions
     * (registered using cogl_onscreen_add_frame_callback()) that
     * mark the progression of a frame in some way which usually
     * means that new information will have been accumulated in the
     * frame's corresponding #CoglFrameInfo object.
     *
     * The last event that will be sent for a frame will be a
     * `COGL_FRAME_EVENT_COMPLETE` event and so these are a good
     * opportunity to collect statistics about a frame since the
     * #CoglFrameInfo should hold the most data at this point.
     *
     * A frame may not be completed before the next frame can start
     * so applications should avoid needing to collect all statistics for
     * a particular frame before they can start a new frame.
     */
    export namespace FrameEvent {
        export const $gtype: GObject.GType<FrameEvent>;
    }
    enum FrameEvent {
        /**
         * Notifies that the system compositor has
         *                         acknowledged a frame and is ready for a
         *                         new frame to be created.
         */
        SYNC = 1,
        /**
         * Notifies that a frame has ended. This
         *                             is a good time for applications to
         *                             collect statistics about the frame
         *                             since the #CoglFrameInfo should hold
         *                             the most data at this point. No other
         *                             events should be expected after a
         *                             `COGL_FRAME_EVENT_COMPLETE` event.
         */
        COMPLETE = 2,
    }
    export namespace FramebufferError {
        export const $gtype: GObject.GType<FramebufferError>;
    }
    enum FramebufferError {
        FRAMEBUFFER_ERROR_ALLOCATE,
    }
    /**
     * All the error values that might be returned by
     * cogl_context_get_graphics_reset_status(). Each value's meaning corresponds
     * to the similarly named value defined in the ARB_robustness and
     * NV_robustness_video_memory_purge extensions.
     */
    export namespace GraphicsResetStatus {
        export const $gtype: GObject.GType<GraphicsResetStatus>;
    }
    enum GraphicsResetStatus {
        NO_ERROR,
        GUILTY_CONTEXT_RESET = 1,
        INNOCENT_CONTEXT_RESET = 2,
        UNKNOWN_CONTEXT_RESET = 3,
        PURGED_CONTEXT_RESET = 4,
    }
    /**
     * You should aim to use the smallest data type that gives you enough
     * range, since it reduces the size of your index array and can help
     * reduce the demand on memory bandwidth.
     *
     * Note that %COGL_INDICES_TYPE_UNSIGNED_INT is only supported if the
     * %COGL_FEATURE_ID_UNSIGNED_INT_INDICES feature is available. This
     * should always be available on OpenGL but on OpenGL ES it will only
     * be available if the GL_OES_element_index_uint extension is
     * advertized.
     */
    export namespace IndicesType {
        export const $gtype: GObject.GType<IndicesType>;
    }
    enum IndicesType {
        /**
         * Your indices are unsigned bytes
         */
        BYTE,
        /**
         * Your indices are unsigned shorts
         */
        SHORT = 1,
        /**
         * Your indices are unsigned ints
         */
        INT = 2,
    }
    /**
     * Alpha testing happens before blending primitives with the framebuffer and
     * gives an opportunity to discard fragments based on a comparison with the
     * incoming alpha value and a reference alpha value. The #CoglPipelineAlphaFunc
     * determines how the comparison is done.
     */
    export namespace PipelineAlphaFunc {
        export const $gtype: GObject.GType<PipelineAlphaFunc>;
    }
    enum PipelineAlphaFunc {
        /**
         * Never let the fragment through.
         */
        NEVER = 512,
        /**
         * Let the fragment through if the incoming
         *   alpha value is less than the reference alpha value
         */
        LESS = 513,
        /**
         * Let the fragment through if the incoming
         *   alpha value equals the reference alpha value
         */
        EQUAL = 514,
        /**
         * Let the fragment through if the incoming
         *   alpha value is less than or equal to the reference alpha value
         */
        LEQUAL = 515,
        /**
         * Let the fragment through if the incoming
         *   alpha value is greater than the reference alpha value
         */
        GREATER = 516,
        /**
         * Let the fragment through if the incoming
         *   alpha value does not equal the reference alpha value
         */
        NOTEQUAL = 517,
        /**
         * Let the fragment through if the incoming
         *   alpha value is greater than or equal to the reference alpha value.
         */
        GEQUAL = 518,
        /**
         * Always let the fragment through.
         */
        ALWAYS = 519,
    }
    /**
     * Specifies which faces should be culled. This can be set on a
     * pipeline using cogl_pipeline_set_cull_face_mode().
     */
    export namespace PipelineCullFaceMode {
        export const $gtype: GObject.GType<PipelineCullFaceMode>;
    }
    enum PipelineCullFaceMode {
        /**
         * Neither face will be
         *  culled. This is the default.
         */
        NONE,
        /**
         * Front faces will be culled.
         */
        FRONT = 1,
        /**
         * Back faces will be culled.
         */
        BACK = 2,
        /**
         * All faces will be culled.
         */
        BOTH = 3,
    }
    /**
     * Texture filtering is used whenever the current pixel maps either to more
     * than one texture element (texel) or less than one. These filter enums
     * correspond to different strategies used to come up with a pixel color, by
     * possibly referring to multiple neighbouring texels and taking a weighted
     * average or simply using the nearest texel.
     */
    export namespace PipelineFilter {
        export const $gtype: GObject.GType<PipelineFilter>;
    }
    enum PipelineFilter {
        /**
         * Measuring in manhatten distance from the,
         *   current pixel center, use the nearest texture texel
         */
        NEAREST = 9728,
        /**
         * Use the weighted average of the 4 texels
         *   nearest the current pixel center
         */
        LINEAR = 9729,
        /**
         * Select the mimap level whose
         *   texel size most closely matches the current pixel, and use the
         *   %COGL_PIPELINE_FILTER_NEAREST criterion
         */
        NEAREST_MIPMAP_NEAREST = 9984,
        /**
         * Select the mimap level whose
         *   texel size most closely matches the current pixel, and use the
         *   %COGL_PIPELINE_FILTER_LINEAR criterion
         */
        LINEAR_MIPMAP_NEAREST = 9985,
        /**
         * Select the two mimap levels
         *   whose texel size most closely matches the current pixel, use
         *   the %COGL_PIPELINE_FILTER_NEAREST criterion on each one and take
         *   their weighted average
         */
        NEAREST_MIPMAP_LINEAR = 9986,
        /**
         * Select the two mimap levels
         *   whose texel size most closely matches the current pixel, use
         *   the %COGL_PIPELINE_FILTER_LINEAR criterion on each one and take
         *   their weighted average
         */
        LINEAR_MIPMAP_LINEAR = 9987,
    }
    /**
     * The wrap mode specifies what happens when texture coordinates
     * outside the range 0→1 are used. Note that if the filter mode is
     * anything but %COGL_PIPELINE_FILTER_NEAREST then texels outside the
     * range 0→1 might be used even when the coordinate is exactly 0 or 1
     * because OpenGL will try to sample neighbouring pixels. For example
     * if you are trying to render the full texture then you may get
     * artifacts around the edges when the pixels from the other side are
     * merged in if the wrap mode is set to repeat.
     */
    export namespace PipelineWrapMode {
        export const $gtype: GObject.GType<PipelineWrapMode>;
    }
    enum PipelineWrapMode {
        /**
         * The texture will be repeated. This
         *   is useful for example to draw a tiled background.
         */
        REPEAT = 10497,
        MIRRORED_REPEAT = 33648,
        /**
         * The coordinates outside the
         *   range 0→1 will sample copies of the edge pixels of the
         *   texture. This is useful to avoid artifacts if only one copy of
         *   the texture is being rendered.
         */
        CLAMP_TO_EDGE = 33071,
        /**
         * Cogl will try to automatically
         *   decide which of the above two to use. For cogl_rectangle(), it
         *   will use repeat mode if any of the texture coordinates are
         *   outside the range 0→1, otherwise it will use clamp to edge. For
         *   cogl_polygon() it will always use repeat mode. For
         *   cogl_vertex_buffer_draw() it will use repeat mode except for
         *   layers that have point sprite coordinate generation enabled. This
         *   is the default value.
         */
        AUTOMATIC = 519,
    }
    /**
     * Pixel formats used by Cogl. For the formats with a byte per
     * component, the order of the components specify the order in
     * increasing memory addresses. So for example
     * %COGL_PIXEL_FORMAT_RGB_888 would have the red component in the
     * lowest address, green in the next address and blue after that
     * regardless of the endianness of the system.
     *
     * For the formats with non byte aligned components the component
     * order specifies the order within a 16-bit or 32-bit number from
     * most significant bit to least significant. So for
     * %COGL_PIXEL_FORMAT_RGB_565, the red component would be in bits
     * 11-15, the green component would be in 6-11 and the blue component
     * would be in 1-5. Therefore the order in memory depends on the
     * endianness of the system.
     *
     * When uploading a texture %COGL_PIXEL_FORMAT_ANY can be used as the
     * internal format. Cogl will try to pick the best format to use
     * internally and convert the texture data if necessary.
     */
    export namespace PixelFormat {
        export const $gtype: GObject.GType<PixelFormat>;
    }
    enum PixelFormat {
        /**
         * Any format
         */
        ANY,
        /**
         * 8 bits alpha mask
         */
        'A_8' = 17,
        /**
         * RGB, 16 bits
         */
        'RGB_565' = 4,
        /**
         * RGBA, 16 bits
         */
        'RGBA_4444' = 21,
        /**
         * RGBA, 16 bits
         */
        'RGBA_5551' = 22,
        /**
         * Not currently supported
         */
        YUV = 7,
        /**
         * Single luminance component
         */
        'R_8' = 8,
        /**
         * RG, 16 bits. Note that red-green textures
         *   are only available if %COGL_FEATURE_ID_TEXTURE_RG is advertised.
         *   See cogl_texture_set_components() for details.
         */
        'RG_88' = 9,
        /**
         * RGB, 24 bits
         */
        'RGB_888' = 2,
        /**
         * BGR, 24 bits
         */
        'BGR_888' = 34,
        /**
         * RGBX, 32 bits
         */
        'RGBX_8888' = 3,
        /**
         * RGBA, 32 bits
         */
        'RGBA_8888' = 19,
        /**
         * BGRX, 32 bits
         */
        'BGRX_8888' = 35,
        /**
         * BGRA, 32 bits
         */
        'BGRA_8888' = 51,
        /**
         * XRGB, 32 bits
         */
        'XRGB_8888' = 67,
        /**
         * ARGB, 32 bits
         */
        'ARGB_8888' = 83,
        /**
         * XBGR, 32 bits
         */
        'XBGR_8888' = 99,
        /**
         * ABGR, 32 bits
         */
        'ABGR_8888' = 115,
        /**
         * Premultiplied RGBA, 32 bits
         */
        'RGBA_8888_PRE' = 147,
        /**
         * Premultiplied BGRA, 32 bits
         */
        'BGRA_8888_PRE' = 179,
        /**
         * Premultiplied ARGB, 32 bits
         */
        'ARGB_8888_PRE' = 211,
        /**
         * Premultiplied ABGR, 32 bits
         */
        'ABGR_8888_PRE' = 243,
        /**
         * Premultiplied RGBA, 16 bits
         */
        'RGBA_4444_PRE' = 149,
        /**
         * Premultiplied RGBA, 16 bits
         */
        'RGBA_5551_PRE' = 150,
        /**
         * RGBA, 32 bits, 10 bpc
         */
        'RGBA_1010102' = 29,
        /**
         * BGRA, 32 bits, 10 bpc
         */
        'BGRA_1010102' = 61,
        /**
         * XRGB, 32 bits, 10 bpc
         */
        'XRGB_2101010' = 77,
        /**
         * ARGB, 32 bits, 10 bpc
         */
        'ARGB_2101010' = 93,
        /**
         * XBGR, 32 bits, 10 bpc
         */
        'XBGR_2101010' = 109,
        /**
         * ABGR, 32 bits, 10 bpc
         */
        'ABGR_2101010' = 125,
        /**
         * Premultiplied RGBA, 32 bits, 10 bpc
         */
        'RGBA_1010102_PRE' = 157,
        /**
         * Premultiplied BGRA, 32 bits, 10 bpc
         */
        'BGRA_1010102_PRE' = 189,
        /**
         * Premultiplied ARGB, 32 bits, 10 bpc
         */
        'ARGB_2101010_PRE' = 221,
        /**
         * Premultiplied ABGR, 32 bits, 10 bpc
         */
        'ABGR_2101010_PRE' = 253,
        /**
         * RGBX half floating point, 64 bit
         */
        'RGBX_FP_16161616' = 11,
        /**
         * RGBA half floating point, 64 bit
         */
        'RGBA_FP_16161616' = 27,
        /**
         * BGRX half floating point, 64 bit
         */
        'BGRX_FP_16161616' = 43,
        /**
         * BGRA half floating point, 64 bit
         */
        'BGRA_FP_16161616' = 59,
        'XRGB_FP_16161616' = 75,
        /**
         * ARGB half floating point, 64 bit
         */
        'ARGB_FP_16161616' = 91,
        'XBGR_FP_16161616' = 107,
        /**
         * ABGR half floating point, 64 bit
         */
        'ABGR_FP_16161616' = 123,
        /**
         * Premultiplied RGBA half floating point, 64 bit
         */
        'RGBA_FP_16161616_PRE' = 155,
        /**
         * Premultiplied BGRA half floating point, 64 bit
         */
        'BGRA_FP_16161616_PRE' = 187,
        /**
         * Premultiplied ARGB half floating point, 64 bit
         */
        'ARGB_FP_16161616_PRE' = 219,
        /**
         * Premultiplied ABGR half floating point, 64 bit
         */
        'ABGR_FP_16161616_PRE' = 251,
        /**
         * RGBA floating point, 128 bit
         */
        'RGBA_FP_32323232' = 28,
        /**
         * Premultiplied RGBA floating point, 128 bit
         */
        'RGBA_FP_32323232_PRE' = 156,
        /**
         * Single luminance component, 16 bits
         */
        'R_16' = 14,
        /**
         * RG, 32 bits
         */
        'RG_1616' = 15,
        /**
         * RGBA, 64 bits, 16bpc
         */
        'RGBA_16161616' = 26,
        'RGBA_16161616_PRE' = 154,
        'DEPTH_16' = 265,
        'DEPTH_24_STENCIL_8' = 771,
    }
    export namespace RendererError {
        export const $gtype: GObject.GType<RendererError>;
    }
    enum RendererError {
        XLIB_DISPLAY_OPEN,
        BAD_CONSTRAINT = 1,
    }
    class ScanoutError extends GLib.Error {
        static '$gtype': GObject.GType<ScanoutError>;
        // Static Fields
        /**
         * Scanout inhibited
         */
        static INHIBITED: number;
        // Constructors
        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
        // Static methods
        static quark(): GLib.Quark;
    }
    /**
     * Types of shaders
     */
    export namespace ShaderType {
        export const $gtype: GObject.GType<ShaderType>;
    }
    enum ShaderType {
        /**
         * A program for processing vertices
         */
        VERTEX,
        /**
         * A program for processing fragments
         */
        FRAGMENT = 1,
    }
    /**
     * #CoglSnippetHook is used to specify a location within a
     * #CoglPipeline where the code of the snippet should be used when it
     * is attached to a pipeline.
     *
     * - `COGL_SNIPPET_HOOK_VERTEX_GLOBALS`
     *
     * Adds a shader snippet at the beginning of the global section of the
     * shader for the vertex processing. Any declarations here can be
     * shared with all other snippets that are attached to a vertex hook.
     * Only the ‘declarations’ string is used and the other strings are
     * ignored.
     *
     * - `COGL_SNIPPET_HOOK_FRAGMENT_GLOBALS`
     *
     * Adds a shader snippet at the beginning of the global section of the
     * shader for the fragment processing. Any declarations here can be
     * shared with all other snippets that are attached to a fragment
     * hook. Only the ‘declarations’ string is used and the other strings
     * are ignored.
     *
     * - `COGL_SNIPPET_HOOK_VERTEX`
     *
     * Adds a shader snippet that will hook on to the vertex processing
     * stage of the pipeline. This gives a chance for the application to
     * modify the vertex attributes generated by the shader. Typically the
     * snippet will modify cogl_color_out or cogl_position_out builtins.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any vertex processing is done.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated vertex processing if it is present. This can be used if
     * the application wants to provide a complete vertex shader and
     * doesn't need the generated output from Cogl.
     *
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard vertex processing is done. This can be used to modify the
     * outputs.
     *
     * - `COGL_SNIPPET_HOOK_VERTEX_TRANSFORM`
     *
     * Adds a shader snippet that will hook on to the vertex transform stage.
     * Typically the snippet will use the cogl_modelview_matrix,
     * cogl_projection_matrix and cogl_modelview_projection_matrix matrices and the
     * cogl_position_in attribute. The hook must write to cogl_position_out.
     * The default processing for this hook will multiply cogl_position_in by
     * the combined modelview-projection matrix and store it on cogl_position_out.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before the vertex transform is done.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated vertex transform if it is present.
     *
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard vertex transformation is done. This can be used to modify the
     * cogl_position_out in addition to the default processing.
     *
     * - `COGL_SNIPPET_HOOK_POINT_SIZE`
     *
     * Adds a shader snippet that will hook on to the point size
     * calculation step within the vertex shader stage. The snippet should
     * write to the builtin cogl_point_size_out with the new point size.
     * The snippet can either read cogl_point_size_in directly and write a
     * new value or first read an existing value in cogl_point_size_out
     * that would be set by a previous snippet. Note that this hook is
     * only used if cogl_pipeline_set_per_vertex_point_size() is enabled
     * on the pipeline.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted just before
     * calculating the point size.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated point size calculation if it is present.
     *
     * The ‘post’ string in `snippet` will be inserted after the
     * standard point size calculation is done. This can be used to modify
     * cogl_point_size_out in addition to the default processing.
     *
     * - `COGL_SNIPPET_HOOK_FRAGMENT`
     *
     * Adds a shader snippet that will hook on to the fragment processing
     * stage of the pipeline. This gives a chance for the application to
     * modify the fragment color generated by the shader. Typically the
     * snippet will modify cogl_color_out.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any fragment processing is done.
     *
     * The ‘replace’ string in `snippet` will be used instead of the
     * generated fragment processing if it is present. This can be used if
     * the application wants to provide a complete fragment shader and
     * doesn't need the generated output from Cogl.
     *
     * The ‘post’ string in `snippet` will be inserted after all of the
     * standard fragment processing is done. At this point the generated
     * value for the rest of the pipeline state will already be in
     * cogl_color_out so the application can modify the result by altering
     * this variable.
     *
     * - `COGL_SNIPPET_HOOK_TEXTURE_COORD_TRANSFORM`
     *
     * Adds a shader snippet that will hook on to the texture coordinate
     * transformation of a particular layer. This can be used to replace
     * the processing for a layer or to modify the results.
     *
     * Within the snippet code for this hook there are two extra
     * variables. The first is a mat4 called cogl_matrix which represents
     * the user matrix for this layer. The second is called cogl_tex_coord
     * and represents the incoming and outgoing texture coordinate. On
     * entry to the hook, cogl_tex_coord contains the value of the
     * corresponding texture coordinate attribute for this layer. The hook
     * is expected to modify this variable. The output will be passed as a
     * varying to the fragment processing stage. The default code will
     * just multiply cogl_matrix by cogl_tex_coord and store the result in
     * cogl_tex_coord.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted just before the
     * fragment processing for this layer. At this point cogl_tex_coord
     * still contains the value of the texture coordinate attribute.
     * If a ‘replace’ string is given then this will be used instead of
     * the default fragment processing for this layer. The snippet can
     * modify cogl_tex_coord or leave it as is to apply no transformation.
     *
     * The ‘post’ string in `snippet` will be inserted just after the
     * transformation. At this point cogl_tex_coord will contain the
     * results of the transformation but it can be further modified by the
     * snippet.
     *
     * - `COGL_SNIPPET_HOOK_LAYER_FRAGMENT`
     *
     * Adds a shader snippet that will hook on to the fragment processing
     * of a particular layer. This can be used to replace the processing
     * for a layer or to modify the results.
     *
     * Within the snippet code for this hook there is an extra vec4
     * variable called ‘cogl_layer’. This contains the resulting color
     * that will be used for the layer. This can be modified in the ‘post’
     * section or it the default processing can be replaced entirely using
     * the ‘replace’ section.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted just before the
     * fragment processing for this layer.
     *
     * If a ‘replace’ string is given then this will be used instead of
     * the default fragment processing for this layer. The snippet must write to
     * the ‘cogl_layer’ variable in that case.
     *
     * The ‘post’ string in `snippet` will be inserted just after the
     * fragment processing for the layer. The results can be modified by changing
     * the value of the ‘cogl_layer’ variable.
     *
     * - `COGL_SNIPPET_HOOK_TEXTURE_LOOKUP`
     *
     * Adds a shader snippet that will hook on to the texture lookup part
     * of a given layer. This gives a chance for the application to modify
     * the coordinates that will be used for the texture lookup or to
     * alter the returned texel.
     *
     * Within the snippet code for this hook there are three extra
     * variables available. ‘cogl_sampler’ is a sampler object
     * representing the sampler for the layer where the snippet is
     * attached. ‘cogl_tex_coord’ is a vec4 which contains the texture
     * coordinates that will be used for the texture lookup. This can be
     * modified. ‘cogl_texel’ will contain the result of the texture
     * lookup. This can also be modified.
     *
     * The ‘declarations’ string in `snippet` will be inserted in the
     * global scope of the shader. Use this to declare any uniforms,
     * attributes or functions that the snippet requires.
     *
     * The ‘pre’ string in `snippet` will be inserted at the top of the
     * main() function before any fragment processing is done. This is a
     * good place to modify the cogl_tex_coord variable.
     *
     * If a ‘replace’ string is given then this will be used instead of a
     * the default texture lookup. The snippet would typically use its own
     * sampler in this case.
     *
     * The ‘post’ string in `snippet` will be inserted after texture lookup
     * has been performed. Here the snippet can modify the cogl_texel
     * variable to alter the returned texel.
     */
    export namespace SnippetHook {
        export const $gtype: GObject.GType<SnippetHook>;
    }
    enum SnippetHook {
        /**
         * A hook for the entire vertex processing
         *   stage of the pipeline.
         */
        VERTEX,
        /**
         * A hook for the vertex transformation.
         */
        VERTEX_TRANSFORM = 1,
        /**
         * A hook for declaring global data
         *   that can be shared with all other snippets that are on a vertex
         *   hook.
         */
        VERTEX_GLOBALS = 2,
        /**
         * A hook for manipulating the point
         *   size of a vertex. This is only used if
         *   cogl_pipeline_set_per_vertex_point_size() is enabled on the
         *   pipeline.
         */
        POINT_SIZE = 3,
        /**
         * A hook for the entire fragment
         *   processing stage of the pipeline.
         */
        FRAGMENT = 2048,
        /**
         * A hook for declaring global
         *   data wthat can be shared with all other snippets that are on a
         *   fragment hook.
         */
        FRAGMENT_GLOBALS = 2049,
        /**
         * A hook for applying the
         *   layer matrix to a texture coordinate for a layer.
         */
        TEXTURE_COORD_TRANSFORM = 4096,
        /**
         * A hook for the fragment
         *   processing of a particular layer.
         */
        LAYER_FRAGMENT = 6144,
        /**
         * A hook for the texture lookup
         *   stage of a given layer in a pipeline.
         */
        TEXTURE_LOOKUP = 6145,
    }
    /**
     * Error enumeration for Cogl
     *
     * The `COGL_SYSTEM_ERROR_UNSUPPORTED` error can be thrown for a
     * variety of reasons. For example:
     *
     * - You've tried to use a feature that is not advertised by
     *   [method`Cogl`.Context.has_feature].
     * - The GPU can not handle the configuration you have requested.
     *   An example might be if you try to use too many texture
     *   layers in a single #CoglPipeline
     * - The driver does not support some configuration.
     *
     * Currently this is only used by Cogl API marked as experimental so
     * this enum should also be considered experimental.
     */
    export namespace SystemError {
        export const $gtype: GObject.GType<SystemError>;
    }
    enum SystemError {
        /**
         * You tried to use a feature or
         *    configuration not currently available.
         */
        COGL_SYSTEM_ERROR_UNSUPPORTED,
        /**
         * You tried to allocate a resource
         *    such as a texture and there wasn't enough memory.
         */
        COGL_SYSTEM_ERROR_NO_MEMORY = 1,
    }
    /**
     * See cogl_texture_set_components().
     */
    export namespace TextureComponents {
        export const $gtype: GObject.GType<TextureComponents>;
    }
    enum TextureComponents {
        /**
         * Only the alpha component
         */
        A = 1,
        /**
         * Red and green components. Note that
         *   this can only be used if the %COGL_FEATURE_ID_TEXTURE_RG feature
         *   is advertised.
         */
        RG = 2,
        /**
         * Red, green and blue components
         */
        RGB = 3,
        /**
         * Red, green, blue and alpha components
         */
        RGBA = 4,
        /**
         * Only a depth component
         */
        DEPTH = 5,
    }
    /**
     * Error codes that can be thrown when allocating textures.
     */
    export namespace TextureError {
        export const $gtype: GObject.GType<TextureError>;
    }
    enum TextureError {
        /**
         * Unsupported size
         */
        SIZE,
        /**
         * Unsupported format
         */
        FORMAT = 1,
        BAD_PARAMETER = 2,
        /**
         * A primitive texture type that is
         *   unsupported by the driver was used
         */
        TYPE = 3,
    }
    /**
     * Different ways of interpreting vertices when drawing.
     */
    export namespace VerticesMode {
        export const $gtype: GObject.GType<VerticesMode>;
    }
    enum VerticesMode {
        /**
         * FIXME, equivalent to `GL_POINTS`
         */
        POINTS,
        /**
         * FIXME, equivalent to `GL_LINES`
         */
        LINES = 1,
        /**
         * FIXME, equivalent to `GL_LINE_LOOP`
         */
        LINE_LOOP = 2,
        /**
         * FIXME, equivalent to `GL_LINE_STRIP`
         */
        LINE_STRIP = 3,
        /**
         * FIXME, equivalent to `GL_TRIANGLES`
         */
        TRIANGLES = 4,
        /**
         * FIXME, equivalent to `GL_TRIANGLE_STRIP`
         */
        TRIANGLE_STRIP = 5,
        /**
         * FIXME, equivalent to `GL_TRIANGLE_FAN`
         */
        TRIANGLE_FAN = 6,
    }
    /**
     * Enum used to represent the two directions of rotation. This can be
     * used to set the front face for culling by calling
     * cogl_pipeline_set_front_face_winding().
     */
    export namespace Winding {
        export const $gtype: GObject.GType<Winding>;
    }
    enum Winding {
        /**
         * Vertices are in a clockwise order
         */
        CLOCKWISE,
        /**
         * Vertices are in a counter-clockwise order
         */
        COUNTER_CLOCKWISE = 1,
    }
    export namespace WinsysFeature {
        export const $gtype: GObject.GType<WinsysFeature>;
    }
    enum WinsysFeature {
        VBLANK_COUNTER,
        VBLANK_WAIT = 1,
        TEXTURE_FROM_PIXMAP = 2,
        SWAP_BUFFERS_EVENT = 3,
        SWAP_REGION = 4,
        SWAP_REGION_THROTTLE = 5,
        SWAP_REGION_SYNCHRONIZED = 6,
        BUFFER_AGE = 7,
        SYNC_AND_COMPLETE_EVENT = 8,
        N_FEATURES = 9,
    }
    /**
     * Identifies specific window system backends that Cogl supports.
     *
     * These can be used to query what backend Cogl is using or to try and
     * explicitly select a backend to use.
     */
    export namespace WinsysID {
        export const $gtype: GObject.GType<WinsysID>;
    }
    enum WinsysID {
        /**
         * Implies no preference for which backend is used
         */
        ANY,
        /**
         * Use the no-op stub backend
         */
        STUB = 1,
        /**
         * Use the GLX window system binding API
         */
        GLX = 2,
        /**
         * Use EGL with the X window system via XLib
         */
        EGL_XLIB = 3,
        CUSTOM = 4,
    }
    const AFIRST_BIT: number;
    const A_BIT: number;
    const BGR_BIT: number;
    const DEPTH_BIT: number;
    /**
     * The maximum number of planes of a pixel format (see also
     * cogl_pixel_format_get_planes()).
     */
    const PIXEL_FORMAT_MAX_PLANES: number;
    const PREMULT_BIT: number;
    const STENCIL_BIT: number;
    const TEXTURE_MAX_WASTE: number;
    /**
     * Parses a string definition of a color, filling the #CoglColor.red,
     * #CoglColor.green, #CoglColor.blue and #CoglColor.alpha fields
     * of `color`.
     *
     * The `color` is not allocated.
     *
     * The format of `str` can be either one of:
     *
     *   - an hexadecimal value in the form: `#rgb`, `#rrggbb`, `#rgba`, or `#rrggbbaa`
     *   - a RGB color in the form: `rgb(r, g, b)`
     *   - a RGB color in the form: `rgba(r, g, b, a)`
     *   - a HSL color in the form: `hsl(h, s, l)`
     *    -a HSL color in the form: `hsla(h, s, l, a)`
     *
     * where 'r', 'g', 'b' and 'a' are (respectively) the red, green, blue color
     * intensities and the opacity. The 'h', 's' and 'l' are (respectively) the
     * hue, saturation and luminance values.
     *
     * In the rgb() and rgba() formats, the 'r', 'g', and 'b' values are either
     * integers between 0 and 255, or percentage values in the range between 0%
     * and 100%; the percentages require the '%' character. The 'a' value, if
     * specified, can only be a floating point value between 0.0 and 1.0.
     *
     * In the hls() and hlsa() formats, the 'h' value (hue) is an angle between
     * 0 and 360.0 degrees; the 'l' and 's' values (luminance and saturation) are
     * percentage values in the range between 0% and 100%. The 'a' value, if specified,
     * can only be a floating point value between 0.0 and 1.0.
     *
     * Whitespace inside the definitions is ignored; no leading whitespace
     * is allowed.
     *
     * If the alpha component is not specified then it is assumed to be set to
     * be fully opaque.
     *
     * @returns %TRUE if parsing succeeded, and %FALSE otherwise
     * @param str a string specifying a color
     */
    function color_from_string(str: string): [boolean, Color];
    /**
     * Converts a color expressed in HLS (hue, luminance and saturation)
     * values into a #CoglColor.
     *
     * @param hue hue value, in the 0 .. 360 range
     * @param saturation saturation value, in the 0 .. 1 range
     * @param luminance luminance value, in the 0 .. 1 range
     */
    function color_init_from_hsl(hue: number, saturation: number, luminance: number): [Color];
    /**
     * Creates a #GSource which handles Cogl's internal system event
     * processing.
     *
     * @returns a new #GSource
     * @param renderer A #CoglRenderer
     * @param priority The priority of the #GSource
     */
    function glib_source_new(renderer: Renderer, priority: number): GLib.Source;
    /**
     * Transforms a point whose position is given and returned as four float
     * components.
     *
     * @param matrix A 4x4 transformation matrix
     * @param x The X component of your points position
     * @param y The Y component of your points position
     * @param z The Z component of your points position
     * @param w The W component of your points position
     */
    function graphene_matrix_project_point(
        matrix: Graphene.Matrix,
        x: number,
        y: number,
        z: number,
        w: number,
    ): [number, number, number, number];
    /**
     * Projects an array of input points and writes the result to another
     * array of output points. The output points always have 4 components (known
     * as homogeneous coordinates). The output array can simply point to
     * the input array to do the transform in-place.
     *
     * Here's an example with differing input/output strides:
     * ```c
     * typedef struct {
     *   float x,y, z;
     *   uint8_t r,g,b,a;
     *   float s,t,p;
     * } MyInVertex;
     * typedef struct {
     *   uint8_t r,g,b,a;
     *   float x,y,z;
     * } MyOutVertex;
     * MyInVertex vertices[N_VERTICES];
     * MyOutVertex results[N_VERTICES];
     * graphene_matrix_t matrix;
     *
     * my_load_vertices (vertices);
     * my_get_matrix (&matrix);
     *
     * cogl_graphene_matrix_project_points_f3 (&matrix,
     *                                         sizeof (MyInVertex),
     *                                         &vertices[0].x,
     *                                         sizeof (MyOutVertex),
     *                                         &results[0].x,
     *                                         N_VERTICES);
     * ```
     *
     * @param matrix A projection matrix
     * @param stride_in The stride in bytes between input points.
     * @param points_in A pointer to the first component of the first input point.
     * @param stride_out The stride in bytes between output points.
     * @param points_out A pointer to the first component of the first output point.
     * @param n_points The number of points to transform.
     */
    function graphene_matrix_project_points_f3(
        matrix: Graphene.Matrix,
        stride_in: number,
        points_in: any | null,
        stride_out: number,
        points_out: any | null,
        n_points: number,
    ): void;
    /**
     * Transforms an array of input points and writes the result to
     * another array of output points. The input points can either have 2
     * or 3 components each. The output points always have 3 components.
     * The output array can simply point to the input array to do the
     * transform in-place.
     *
     * Here's an example with differing input/output strides:
     * ```c
     * typedef struct {
     *   float x,y;
     *   uint8_t r,g,b,a;
     *   float s,t,p;
     * } MyInVertex;
     * typedef struct {
     *   uint8_t r,g,b,a;
     *   float x,y,z;
     * } MyOutVertex;
     * MyInVertex vertices[N_VERTICES];
     * MyOutVertex results[N_VERTICES];
     * graphene_matrix_t matrix;
     *
     * my_load_vertices (vertices);
     * my_get_matrix (&matrix);
     *
     * cogl_graphene_matrix_transform_points (&matrix,
     *                               2,
     *                               sizeof (MyInVertex),
     *                               &vertices[0].x,
     *                               sizeof (MyOutVertex),
     *                               &results[0].x,
     *                               N_VERTICES);
     * ```
     *
     * @param matrix A transformation matrix
     * @param n_components The number of position components for each input point.
     *                (either 2 or 3)
     * @param stride_in The stride in bytes between input points.
     * @param points_in A pointer to the first component of the first input point.
     * @param stride_out The stride in bytes between output points.
     * @param points_out A pointer to the first component of the first output point.
     * @param n_points The number of points to transform.
     */
    function graphene_matrix_transform_points(
        matrix: Graphene.Matrix,
        n_components: number,
        stride_in: number,
        points_in: any | null,
        stride_out: number,
        points_out: any | null,
        n_points: number,
    ): void;
    /**
     * Queries the number of bytes per pixel for a given format in the given plane.
     *
     * @returns The number of bytes per pixel in the given format's given plane.
     * @param format The pixel format
     * @param plane The index of the plane (should not be more than the number of planes
     *         in the given format).
     */
    function pixel_format_get_bytes_per_pixel(format: PixelFormat | null, plane: number): number;
    /**
     * Returns the number of planes the given CoglPixelFormat specifies.
     *
     * @returns The no. of planes of `format` (at most %COGL_PIXEL_FORMAT_MAX_PLANES)
     * @param format The format for which to get the number of planes
     */
    function pixel_format_get_n_planes(format: PixelFormat | null): number;
    /**
     * Returns a string representation of `format,` useful for debugging purposes.
     *
     * @returns A string representation of `format`.
     * @param format a #CoglPixelFormat
     */
    function pixel_format_to_string(format: PixelFormat | null): string;
    function renderer_error_quark(): number;
    function scanout_error_quark(): GLib.Quark;
    function set_tracing_disabled_on_thread(data?: any | null): void;
    function set_tracing_enabled_on_thread(data: any | null, group: string): void;
    function start_tracing_with_fd(fd: number): boolean;
    function start_tracing_with_path(filename: string): boolean;
    function stop_tracing(): void;
    function value_get_color(value: GObject.Value | any): Color;
    function value_set_color(value: GObject.Value | any, color: Color): void;
    interface AtlasUpdatePositionCallback {
        (user_data: any | null, new_texture: Texture, rect: Mtk.Rectangle): void;
    }
    interface FrameCallback {
        (onscreen: Onscreen, event: FrameEvent, info: FrameInfo): void;
    }
    interface PipelineLayerCallback {
        (pipeline: Pipeline, layer_index: number): boolean;
    }
    interface TextureForeachCallback {
        (sub_texture: Texture, sub_texture_coords: number, meta_coords: number): void;
    }
    export namespace AtlasFlags {
        export const $gtype: GObject.GType<AtlasFlags>;
    }
    enum AtlasFlags {
        CLEAR_TEXTURE = 1,
        DISABLE_MIGRATION = 2,
    }
    /**
     * The access hints for [method`Cogl`.Buffer.set_update_hint]
     */
    export namespace BufferAccess {
        export const $gtype: GObject.GType<BufferAccess>;
    }
    enum BufferAccess {
        /**
         * the buffer will be read
         */
        READ = 1,
        /**
         * the buffer will written to
         */
        WRITE = 2,
        /**
         * the buffer will be used for both reading and
         *   writing
         */
        READ_WRITE = 3,
    }
    /**
     * Types of auxiliary buffers
     */
    export namespace BufferBit {
        export const $gtype: GObject.GType<BufferBit>;
    }
    enum BufferBit {
        /**
         * Selects the primary color buffer
         */
        COLOR = 1,
        /**
         * Selects the depth buffer
         */
        DEPTH = 2,
        /**
         * Selects the stencil buffer
         */
        STENCIL = 4,
    }
    /**
     * Hints to Cogl about how you are planning to modify the data once it
     * is mapped.
     */
    export namespace BufferMapHint {
        export const $gtype: GObject.GType<BufferMapHint>;
    }
    enum BufferMapHint {
        /**
         * Tells Cogl that you plan to replace
         *    all the buffer's contents. When this flag is used to map a
         *    buffer, the entire contents of the buffer become undefined, even
         *    if only a subregion of the buffer is mapped.
         */
        DISCARD = 1,
        /**
         * Tells Cogl that you plan to
         *    replace all the contents of the mapped region. The contents of
         *    the region specified are undefined after this flag is used to
         *    map a buffer.
         */
        DISCARD_RANGE = 2,
    }
    export namespace DrmModifierFilter {
        export const $gtype: GObject.GType<DrmModifierFilter>;
    }
    enum DrmModifierFilter {
        NONE,
        SINGLE_PLANE = 1,
        NOT_EXTERNAL_ONLY = 2,
    }
    export namespace EglImageFlags {
        export const $gtype: GObject.GType<EglImageFlags>;
    }
    enum EglImageFlags {
        NONE,
        NO_GET_DATA = 1,
    }
    /**
     * Flags for cogl_framebuffer_read_pixels_into_bitmap()
     */
    export namespace ReadPixelsFlags {
        export const $gtype: GObject.GType<ReadPixelsFlags>;
    }
    enum ReadPixelsFlags {
        /**
         * Read from the color buffer
         */
        COLOR_BUFFER = 1,
    }
    namespace Atlas {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Atlas = (typeof classes.Atlas)['prototype'];
    const Atlas: typeof classes.Atlas &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Atlas.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Atlas.SignalSignatures> & classes.Atlas);
    namespace AtlasTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::format'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::loader'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Texture.ConstructorProps {}
    }
    type AtlasTexture = (typeof classes.AtlasTexture)['prototype'];
    const AtlasTexture: typeof classes.AtlasTexture &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.AtlasTexture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, AtlasTexture.SignalSignatures> & classes.AtlasTexture);
    namespace Attribute {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Attribute = (typeof classes.Attribute)['prototype'];
    const Attribute: typeof classes.Attribute &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Attribute.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Attribute.SignalSignatures> & classes.Attribute);
    namespace AttributeBuffer {
        // Signal signatures
        interface SignalSignatures extends Buffer.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::default-target'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::update-hint'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Buffer.ConstructorProps {}
    }
    type AttributeBuffer = (typeof classes.AttributeBuffer)['prototype'];
    const AttributeBuffer: typeof classes.AttributeBuffer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.AttributeBuffer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, AttributeBuffer.SignalSignatures> & classes.AttributeBuffer);
    namespace Bitmap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Bitmap = (typeof classes.Bitmap)['prototype'];
    const Bitmap: typeof classes.Bitmap &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Bitmap.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Bitmap.SignalSignatures> & classes.Bitmap);
    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::default-target'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::update-hint'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            default_target: BufferBindTarget;
            defaultTarget: BufferBindTarget;
            size: number;
            update_hint: BufferUpdateHint;
            updateHint: BufferUpdateHint;
        }
    }
    type Buffer = (typeof classes.Buffer)['prototype'];
    const Buffer: typeof classes.Buffer &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Buffer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Buffer.SignalSignatures> & classes.Buffer);
    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Context = (typeof classes.Context)['prototype'];
    const Context: typeof classes.Context &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Context.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Context.SignalSignatures> & classes.Context);
    namespace Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Display = (typeof classes.Display)['prototype'];
    const Display: typeof classes.Display &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Display.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Display.SignalSignatures> & classes.Display);
    namespace FrameInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type FrameInfo = (typeof classes.FrameInfo)['prototype'];
    const FrameInfo: typeof classes.FrameInfo &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.FrameInfo.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, FrameInfo.SignalSignatures> & classes.FrameInfo);
    namespace Framebuffer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            destroy(): void;
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::driver-config'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            driver_config: any;
            driverConfig: any;
            height: number;
            width: number;
        }
    }
    type Framebuffer = (typeof classes.Framebuffer)['prototype'];
    const Framebuffer: typeof classes.Framebuffer &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Framebuffer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Framebuffer.SignalSignatures> & classes.Framebuffer);
    namespace IndexBuffer {
        // Signal signatures
        interface SignalSignatures extends Buffer.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::default-target'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::update-hint'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Buffer.ConstructorProps {}
    }
    type IndexBuffer = (typeof classes.IndexBuffer)['prototype'];
    const IndexBuffer: typeof classes.IndexBuffer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.IndexBuffer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, IndexBuffer.SignalSignatures> & classes.IndexBuffer);
    namespace Indices {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Indices = (typeof classes.Indices)['prototype'];
    const Indices: typeof classes.Indices &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Indices.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Indices.SignalSignatures> & classes.Indices);
    namespace MatrixStack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type MatrixStack = (typeof classes.MatrixStack)['prototype'];
    const MatrixStack: typeof classes.MatrixStack &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.MatrixStack.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, MatrixStack.SignalSignatures> & classes.MatrixStack);
    namespace Offscreen {
        // Signal signatures
        interface SignalSignatures extends Framebuffer.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::driver-config'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Framebuffer.ConstructorProps {}
    }
    type Offscreen = (typeof classes.Offscreen)['prototype'];
    const Offscreen: typeof classes.Offscreen &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Offscreen.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Offscreen.SignalSignatures> & classes.Offscreen);
    namespace Onscreen {
        // Signal signatures
        interface SignalSignatures extends Framebuffer.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::driver-config'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Framebuffer.ConstructorProps {}
    }
    type Onscreen = (typeof classes.Onscreen)['prototype'];
    const Onscreen: typeof classes.Onscreen &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Onscreen.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Onscreen.SignalSignatures> & classes.Onscreen);
    namespace Pipeline {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Pipeline = (typeof classes.Pipeline)['prototype'];
    const Pipeline: typeof classes.Pipeline &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Pipeline.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Pipeline.SignalSignatures> & classes.Pipeline);
    namespace PixelBuffer {
        // Signal signatures
        interface SignalSignatures extends Buffer.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::default-target'(pspec: GObject.ParamSpec): void;
            'notify::size'(pspec: GObject.ParamSpec): void;
            'notify::update-hint'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Buffer.ConstructorProps {}
    }
    type PixelBuffer = (typeof classes.PixelBuffer)['prototype'];
    const PixelBuffer: typeof classes.PixelBuffer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.PixelBuffer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, PixelBuffer.SignalSignatures> & classes.PixelBuffer);
    namespace Primitive {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Primitive = (typeof classes.Primitive)['prototype'];
    const Primitive: typeof classes.Primitive &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Primitive.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Primitive.SignalSignatures> & classes.Primitive);
    namespace Program {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Program = (typeof classes.Program)['prototype'];
    const Program: typeof classes.Program &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Program.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Program.SignalSignatures> & classes.Program);
    namespace Renderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Renderer = (typeof classes.Renderer)['prototype'];
    const Renderer: typeof classes.Renderer &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Renderer.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Renderer.SignalSignatures> & classes.Renderer);
    namespace Scanout {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'scanout-failed'(arg0: Onscreen): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Scanout = (typeof classes.Scanout)['prototype'];
    const Scanout: typeof classes.Scanout &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Scanout.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Scanout.SignalSignatures> & classes.Scanout);
    namespace Shader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Shader = (typeof classes.Shader)['prototype'];
    const Shader: typeof classes.Shader &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Shader.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Shader.SignalSignatures> & classes.Shader);
    namespace Snippet {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    type Snippet = (typeof classes.Snippet)['prototype'];
    const Snippet: typeof classes.Snippet &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Snippet.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Snippet.SignalSignatures> & classes.Snippet);
    namespace SubTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::format'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::loader'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Texture.ConstructorProps {}
    }
    type SubTexture = (typeof classes.SubTexture)['prototype'];
    const SubTexture: typeof classes.SubTexture &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.SubTexture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, SubTexture.SignalSignatures> & classes.SubTexture);
    namespace Texture {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::format'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::loader'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            format: PixelFormat;
            height: number;
            loader: any;
            width: number;
        }
    }
    type Texture = (typeof classes.Texture)['prototype'];
    const Texture: typeof classes.Texture &
        (abstract new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Texture.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Texture.SignalSignatures> & classes.Texture);
    namespace Texture2D {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::format'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::loader'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Texture.ConstructorProps {}
    }
    type Texture2D = (typeof classes.Texture2D)['prototype'];
    const Texture2D: typeof classes.Texture2D &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Texture2D.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Texture2D.SignalSignatures> & classes.Texture2D);
    namespace Texture2DSliced {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures {
            'notify::context'(pspec: GObject.ParamSpec): void;
            'notify::format'(pspec: GObject.ParamSpec): void;
            'notify::height'(pspec: GObject.ParamSpec): void;
            'notify::loader'(pspec: GObject.ParamSpec): void;
            'notify::width'(pspec: GObject.ParamSpec): void;
        }
        // Constructor properties interface
        interface ConstructorProps extends Texture.ConstructorProps {}
    }
    type Texture2DSliced = (typeof classes.Texture2DSliced)['prototype'];
    const Texture2DSliced: typeof classes.Texture2DSliced &
        (new <Opts extends GObject.MetaInfo>(
            properties?: Partial<Cogl.Texture2DSliced.ConstructorProps>,
            ...args: any[]
        ) => GObject.RegisteredClass<Opts, Texture2DSliced.SignalSignatures> & classes.Texture2DSliced);
    export type AtlasClass = typeof Atlas;
    export type AtlasTextureClass = typeof AtlasTexture;
    export type AttributeBufferClass = typeof AttributeBuffer;
    export type AttributeClass = typeof Attribute;
    export type BitmapClass = typeof Bitmap;
    export type BufferClass = typeof Buffer;
    /**
     * A generic color definition
     *
     * #CoglColor is a simple structure holding the definition of a color such
     * that it can be efficiently used by GL
     */
    class Color {
        static '$gtype': GObject.GType<Color>;
        // Fields
        red: number;
        green: number;
        blue: number;
        alpha: number;
        // Constructors
        constructor(
            properties?: Partial<{
                red: number;
                green: number;
                blue: number;
                alpha: number;
            }>,
        );
        _init(...args: any[]): void;
        // Static methods
        /**
         * Parses a string definition of a color, filling the #CoglColor.red,
         * #CoglColor.green, #CoglColor.blue and #CoglColor.alpha fields
         * of `color`.
         *
         * The `color` is not allocated.
         *
         * The format of `str` can be either one of:
         *
         *   - an hexadecimal value in the form: `#rgb`, `#rrggbb`, `#rgba`, or `#rrggbbaa`
         *   - a RGB color in the form: `rgb(r, g, b)`
         *   - a RGB color in the form: `rgba(r, g, b, a)`
         *   - a HSL color in the form: `hsl(h, s, l)`
         *    -a HSL color in the form: `hsla(h, s, l, a)`
         *
         * where 'r', 'g', 'b' and 'a' are (respectively) the red, green, blue color
         * intensities and the opacity. The 'h', 's' and 'l' are (respectively) the
         * hue, saturation and luminance values.
         *
         * In the rgb() and rgba() formats, the 'r', 'g', and 'b' values are either
         * integers between 0 and 255, or percentage values in the range between 0%
         * and 100%; the percentages require the '%' character. The 'a' value, if
         * specified, can only be a floating point value between 0.0 and 1.0.
         *
         * In the hls() and hlsa() formats, the 'h' value (hue) is an angle between
         * 0 and 360.0 degrees; the 'l' and 's' values (luminance and saturation) are
         * percentage values in the range between 0% and 100%. The 'a' value, if specified,
         * can only be a floating point value between 0.0 and 1.0.
         *
         * Whitespace inside the definitions is ignored; no leading whitespace
         * is allowed.
         *
         * If the alpha component is not specified then it is assumed to be set to
         * be fully opaque.
         *
         * @param str a string specifying a color
         */
        static from_string(str: string): [boolean, Color];
        /**
         * Converts a color expressed in HLS (hue, luminance and saturation)
         * values into a #CoglColor.
         *
         * @param hue hue value, in the 0 .. 360 range
         * @param saturation saturation value, in the 0 .. 1 range
         * @param luminance luminance value, in the 0 .. 1 range
         */
        static init_from_hsl(hue: number, saturation: number, luminance: number): [Color];
        // Methods
        /**
         * Creates a copy of `color`
         *
         * @returns a newly-allocated #CoglColor. Use cogl_color_free()
         *   to free the allocate resources
         */
        copy(): Color;
        /**
         * Compares two `CoglColor`s and checks if they are the same.
         *
         * This function can be passed to g_hash_table_new() as the `key_equal_func`
         * parameter, when using `CoglColor`s as keys in a #GHashTable.
         *
         * @returns %TRUE if the two colors are the same.
         * @param _v2 a #CoglColor
         */
        equal(_v2: Color): boolean;
        /**
         * Retrieves the alpha channel of `color` as a fixed point
         * value between 0 and 1.0.
         *
         * @returns the alpha channel of the passed color
         */
        get_alpha(): number;
        /**
         * Retrieves the blue channel of `color` as a fixed point
         * value between 0 and 1.0.
         *
         * @returns the blue channel of the passed color
         */
        get_blue(): number;
        /**
         * Retrieves the green channel of `color` as a fixed point
         * value between 0 and 1.0.
         *
         * @returns the green channel of the passed color
         */
        get_green(): number;
        /**
         * Retrieves the red channel of `color` as a fixed point
         * value between 0 and 1.0.
         *
         * @returns the red channel of the passed color
         */
        get_red(): number;
        /**
         * Converts a #CoglColor to a hash value.
         *
         * This function can be passed to g_hash_table_new() as the `hash_func`
         * parameter, when using `CoglColor`s as keys in a #GHashTable.
         *
         * @returns a hash value corresponding to the color
         */
        hash(): number;
        /**
         * Sets the values of the passed channels into a #CoglColor
         *
         * @param red value of the red channel, between 0 and 1.0
         * @param green value of the green channel, between 0 and 1.0
         * @param blue value of the blue channel, between 0 and 1.0
         * @param alpha value of the alpha channel, between 0 and 1.0
         */
        init_from_4f(red: number, green: number, blue: number, alpha: number): void;
        /**
         * Converts a non-premultiplied color to a pre-multiplied color. For
         * example, semi-transparent red is (1.0, 0, 0, 0.5) when non-premultiplied
         * and (0.5, 0, 0, 0.5) when premultiplied.
         */
        premultiply(): void;
        /**
         * Converts `color` to the HLS format.
         *
         * The `hue` value is in the 0 .. 360 range. The `luminance` and
         * `saturation` values are in the 0 .. 1 range.
         */
        to_hsl(): [number, number, number];
        /**
         * Returns a textual specification of `color` in the hexadecimal form
         * `&num;rrggbbaa`, where `r`, `g`, `b` and `a` are
         * hexadecimal digits representing the red, green, blue and alpha components
         * respectively.
         *
         * @returns a newly-allocated text string
         */
        to_string(): string;
    }
    export type ContextClass = typeof Context;
    /**
     * Functions for describing the depth testing state of your GPU.
     */
    class DepthState {
        static '$gtype': GObject.GType<DepthState>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Initializes the members of `state` to their default values.
         *
         * You should never pass an un initialized #CoglDepthState structure
         * to cogl_pipeline_set_depth_state().
         */
        init(): void;
        /**
         * Sets the range to map depth values in normalized device coordinates
         * to before writing out to a depth buffer.
         *
         * After your geometry has be transformed, clipped and had perspective
         * division applied placing it in normalized device
         * coordinates all depth values between the near and far z clipping
         * planes are in the range -1 to 1. Before writing any depth value to
         * the depth buffer though the value is mapped into the range [0, 1].
         *
         * With this function you can change the range which depth values are
         * mapped too although the range must still lye within the range [0,
         * 1].
         *
         * By default normalized device coordinate depth values are mapped to
         * the full range of depth buffer values, [0, 1].
         *
         * NB: this won't directly affect the state of the GPU. You have
         * to then set the state on a #CoglPipeline using
         * cogl_pipeline_set_depth_state().
         *
         * @param near_val The near component of the desired depth range which will be
         * clamped to the range [0, 1]
         * @param far_val The far component of the desired depth range which will be
         * clamped to the range [0, 1]
         */
        set_range(near_val: number, far_val: number): void;
        /**
         * Enables or disables depth testing according to the value of
         * `enable`.
         *
         * If depth testing is enable then the #CoglDepthTestFunction set
         * using cogl_depth_state_set_test_function() us used to evaluate
         * the depth value of incoming fragments against the corresponding
         * value stored in the current depth buffer, and if the test passes
         * then the fragments depth value is used to update the depth buffer.
         * (unless you have disabled depth writing via
         * cogl_depth_state_set_write_enabled())
         *
         * By default depth testing is disabled.
         *
         * NB: this won't directly affect the state of the GPU. You have
         * to then set the state on a #CoglPipeline using
         * cogl_pipeline_set_depth_state()
         *
         * @param enable The enable state you want
         */
        set_test_enabled(enable: boolean): void;
        /**
         * Sets the #CoglDepthTestFunction used to compare the depth value of
         * an incoming fragment against the corresponding value in the current
         * depth buffer.
         *
         * By default the depth test function is %COGL_DEPTH_TEST_FUNCTION_LESS
         *
         * NB: this won't directly affect the state of the GPU. You have
         * to then set the state on a #CoglPipeline using
         * cogl_pipeline_set_depth_state()
         *
         * @param _function The #CoglDepthTestFunction to set
         */
        set_test_function(_function: DepthTestFunction | null): void;
        /**
         * Enables or disables depth buffer writing according to the value of
         * `enable`. Normally when depth testing is enabled and the comparison
         * between a fragment's depth value and the corresponding depth buffer
         * value passes then the fragment's depth is written to the depth
         * buffer unless writing is disabled here.
         *
         * By default depth writing is enabled
         *
         * NB: this won't directly affect the state of the GPU. You have
         * to then set the state on a #CoglPipeline using
         * cogl_pipeline_set_depth_state()
         *
         * @param enable The enable state you want
         */
        set_write_enabled(enable: boolean): void;
    }
    export type DisplayClass = typeof Display;
    /**
     * An opaque type that tracks the lifetime of a DMA buffer fd. Release
     * with cogl_dma_buf_handle_free().
     */
    abstract class DmaBufHandle {
        static '$gtype': GObject.GType<DmaBufHandle>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Releases `dmabuf_handle;` it is a programming error to release
         * an already released handle.
         */
        free(): void;
        get_bpp(): number;
        /**
         * Retrieves the file descriptor of `dmabuf_handle`.
         *
         * @returns a valid file descriptor
         * @param plane
         */
        get_fd(plane: number): number;
        /**
         * Retrieves the #CoglFramebuffer, backed by an exported DMABuf buffer,
         * of `dmabuf_handle`.
         *
         * @returns a #CoglFramebuffer
         */
        get_framebuffer(): Framebuffer;
        get_height(): number;
        get_modifier(): number;
        get_n_planes(): number;
        get_offset(plane: number): number;
        get_stride(plane: number): number;
        get_width(): number;
        mmap(): any | null;
        munmap(data?: any | null): boolean;
        sync_read_end(): boolean;
        sync_read_start(): boolean;
    }
    /**
     * An opaque type that tracks a #CoglFrameCallback and associated user
     * data. A #CoglFrameClosure pointer will be returned from
     * cogl_onscreen_add_frame_callback() and it allows you to remove a
     * callback later using cogl_onscreen_remove_frame_callback().
     */
    abstract class FrameClosure {
        static '$gtype': GObject.GType<FrameClosure>;
        // Constructors
        _init(...args: any[]): void;
    }
    export type FrameInfoClass = typeof FrameInfo;
    export type FramebufferClass = typeof Framebuffer;
    export type IndexBufferClass = typeof IndexBuffer;
    export type IndicesClass = typeof Indices;
    /**
     * Represents a single immutable transformation that was retrieved
     * from a #CoglMatrixStack using cogl_matrix_stack_get_entry().
     *
     * Internally a #CoglMatrixEntry represents a single matrix
     * operation (such as "rotate", "scale", "translate") which is applied
     * to the transform of a single parent entry.
     *
     * Using the #CoglMatrixStack api effectively builds up a graph of
     * these immutable #CoglMatrixEntry structures whereby operations
     * that can be shared between multiple transformations will result
     * in shared #CoglMatrixEntry nodes in the graph.
     *
     * When a #CoglMatrixStack is first created it references one
     * #CoglMatrixEntry that represents a single "load identity"
     * operation. This serves as the root entry and all operations
     * that are then applied to the stack will extend the graph
     * starting from this root "load identity" entry.
     *
     * Given the typical usage model for a #CoglMatrixStack and the way
     * the entries are built up while traversing a scenegraph then in most
     * cases where an application is interested in comparing two
     * transformations for equality then it is enough to simply compare
     * two #CoglMatrixEntry pointers directly. Technically this can lead
     * to false negatives that could be identified with a deeper
     * comparison but often these false negatives are unlikely and
     * don't matter anyway so this enables extremely cheap comparisons.
     *
     * `CoglMatrixEntry`s are reference counted using
     * cogl_matrix_entry_ref() and cogl_matrix_entry_unref() not with
     * g_object_ref() and g_object_unref().
     */
    abstract class MatrixEntry {
        static '$gtype': GObject.GType<MatrixEntry>;
        // Constructors
        _init(...args: any[]): void;
        // Methods
        /**
         * Determines if the only difference between two transforms is a
         * translation and if so returns what the `x,` `y,` and `z` components of
         * the translation are.
         *
         * If the difference between the two translations involves anything
         * other than a translation then the function returns %FALSE.
         *
         * @returns %TRUE if the only difference between the transform of
         *                `entry0` and the transform of `entry1` is a translation,
         *                otherwise %FALSE.
         * @param _entry1 A second reference transform
         */
        calculate_translation(_entry1: MatrixEntry): [boolean, number, number, number];
        /**
         * Resolves the current `entry` transform into a #graphene_matrix_t by
         * combining the sequence of operations that have been applied to
         * build up the current transform.
         *
         * There are two possible ways that this function may return its
         * result depending on whether it's possible to directly point
         * to an internal #graphene_matrix_t or whether the result needs to be
         * composed of multiple operations.
         *
         * If an internal matrix contains the required result then this
         * function will directly return a pointer to that matrix, otherwise
         * if the function returns %NULL then `matrix` will be initialized
         * to match the transform of `entry`.
         *
         * `matrix` will be left untouched if a direct pointer is
         * returned.
         *
         * @returns A direct pointer to a #graphene_matrix_t transform or %NULL
         *               and in that case `matrix` will be initialized with
         *               the effective transform represented by `entry`.
         */
        get(): [Graphene.Matrix, Graphene.Matrix];
        /**
         * Determines whether `entry` is known to represent an identity
         * transform.
         *
         * If this returns %TRUE then the entry is definitely the identity
         * matrix. If it returns %FALSE it may or may not be the identity
         * matrix but no expensive comparison is performed to verify it.
         *
         * @returns %TRUE if `entry` is definitely an identity transform,
         *               otherwise %FALSE.
         */
        is_identity(): boolean;
        /**
         * Takes a reference on the given `entry` to ensure the `entry` stays
         * alive and remains valid. When you are finished with the `entry` then
         * you should call cogl_matrix_entry_unref().
         */
        ref(): MatrixEntry;
        /**
         * Releases a reference on `entry` either taken by calling
         * cogl_matrix_entry_unref() or to release the reference given when
         * calling cogl_matrix_stack_get_entry().
         */
        unref(): void;
    }
    export type MatrixStackClass = typeof MatrixStack;
    export type OffscreenClass = typeof Offscreen;
    export type OnscreenClass = typeof Onscreen;
    export type PipelineClass = typeof Pipeline;
    export type PixelBufferClass = typeof PixelBuffer;
    export type PrimitiveClass = typeof Primitive;
    export type ProgramClass = typeof Program;
    export type RendererClass = typeof Renderer;
    export type ScanoutBufferInterface = typeof ScanoutBuffer;
    export type ScanoutClass = typeof Scanout;
    export type ShaderClass = typeof Shader;
    export type SnippetClass = typeof Snippet;
    export type SubTextureClass = typeof SubTexture;
    export type Texture2DClass = typeof Texture2D;
    export type Texture2DSlicedClass = typeof Texture2DSliced;
    export type TextureClass = typeof Texture;
    abstract class TimestampQuery {
        static '$gtype': GObject.GType<TimestampQuery>;
        // Constructors
        _init(...args: any[]): void;
    }
    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p2().
     */
    class VertexP2 {
        static '$gtype': GObject.GType<VertexP2>;
        // Fields
        x: number;
        y: number;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p2c4().
     */
    class VertexP2C4 {
        static '$gtype': GObject.GType<VertexP2C4>;
        // Fields
        x: number;
        y: number;
        r: number;
        g: number;
        b: number;
        a: number;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                r: number;
                g: number;
                b: number;
                a: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p2t2().
     */
    class VertexP2T2 {
        static '$gtype': GObject.GType<VertexP2T2>;
        // Fields
        x: number;
        y: number;
        s: number;
        t: number;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                s: number;
                t: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p3().
     */
    class VertexP3 {
        static '$gtype': GObject.GType<VertexP3>;
        // Fields
        x: number;
        y: number;
        z: number;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                z: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    /**
     * A convenience vertex definition that can be used with
     * cogl_primitive_new_p3t2().
     */
    class VertexP3T2 {
        static '$gtype': GObject.GType<VertexP3T2>;
        // Fields
        x: number;
        y: number;
        z: number;
        s: number;
        t: number;
        // Constructors
        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                z: number;
                s: number;
                t: number;
            }>,
        );
        _init(...args: any[]): void;
    }
    namespace ScanoutBuffer {
        /**
         * Interface for implementing ScanoutBuffer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods
            vfunc_get_height(): number;
            vfunc_get_width(): number;
        }
        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }
    export interface ScanoutBufferNamespace {
        $gtype: GObject.GType<ScanoutBuffer>;
        prototype: ScanoutBuffer;
    }
    interface ScanoutBuffer extends GObject.Object, ScanoutBuffer.Interface {
        // Methods
        get_height(): number;
        get_width(): number;
    }
    export const ScanoutBuffer: ScanoutBufferNamespace & (new () => ScanoutBuffer);
    export type PipelineKey = string;
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
export default Cogl;
