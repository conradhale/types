import type Cogl from './cogl-17.d.ts';
import type Mtk from '@girs/mtk-17';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GL from '@girs/gl-1.0';
declare namespace classes {
    class Atlas extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Atlas>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Atlas.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Atlas.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Cogl.Atlas.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Atlas.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Atlas.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Atlas.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Atlas.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Atlas.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        reserve_space(width: number, height: number, user_data?: any | null): boolean;
    }
    class AtlasTexture extends Texture {
        static '$gtype': GObject.GType<AtlasTexture>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.AtlasTexture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.AtlasTexture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_bitmap(bmp: Cogl.Bitmap): Cogl.AtlasTexture;
        static new_with_size(ctx: Cogl.Context, width: number, height: number): Cogl.AtlasTexture;
        // Signals
        connect<K extends keyof Cogl.AtlasTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.AtlasTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.AtlasTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.AtlasTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.AtlasTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.AtlasTexture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class Attribute extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Attribute>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Attribute.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Attribute.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(
            attribute_buffer: Cogl.AttributeBuffer,
            name: string,
            stride: number,
            offset: number,
            components: number,
            type: Cogl.AttributeType,
        ): Cogl.Attribute;
        // Signals
        connect<K extends keyof Cogl.Attribute.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Attribute.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Attribute.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Attribute.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Attribute.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Attribute.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_buffer(): Cogl.AttributeBuffer;
        /**
         * Sets whether fixed point attribute types are mapped to the range
         * 0→1. For example when this property is TRUE and a
         * %COGL_ATTRIBUTE_TYPE_UNSIGNED_BYTE type is used then the value 255
         * will be mapped to 1.0.
         *
         * The default value of this property depends on the name of the
         * attribute. For the builtin properties cogl_color_in and
         * cogl_normal_in it will default to TRUE and for all other names it
         * will default to FALSE.
         *
         * @param normalized The new value for the normalized property.
         */
        set_normalized(normalized: boolean): void;
    }
    class AttributeBuffer extends Buffer {
        static '$gtype': GObject.GType<AttributeBuffer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.AttributeBuffer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.AttributeBuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(context: Cogl.Context, data: Uint8Array[] | string): Cogl.AttributeBuffer;
        static new_with_size(context: Cogl.Context, bytes: number): Cogl.AttributeBuffer;
        // Signals
        connect<K extends keyof Cogl.AttributeBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.AttributeBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.AttributeBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.AttributeBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.AttributeBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.AttributeBuffer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class Bitmap extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Bitmap>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Bitmap.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Bitmap.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_for_data(
            context: Cogl.Context,
            width: number,
            height: number,
            format: Cogl.PixelFormat,
            rowstride: number,
            data: Uint8Array[] | string,
        ): Cogl.Bitmap;
        static new_from_buffer(
            buffer: Cogl.Buffer,
            format: Cogl.PixelFormat,
            width: number,
            height: number,
            rowstride: number,
            offset: number,
        ): Cogl.Bitmap;
        static new_with_size(
            context: Cogl.Context,
            width: number,
            height: number,
            format: Cogl.PixelFormat,
        ): Cogl.Bitmap;
        // Signals
        connect<K extends keyof Cogl.Bitmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Bitmap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Bitmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Bitmap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Bitmap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Bitmap.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_buffer(): Cogl.PixelBuffer;
        get_format(): Cogl.PixelFormat;
        get_height(): number;
        get_rowstride(): number;
        get_width(): number;
    }
    abstract class Buffer extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Buffer>;
        // Properties
        set update_hint(val: Cogl.BufferUpdateHint);
        set updateHint(val: Cogl.BufferUpdateHint);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Buffer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Buffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Cogl.Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Buffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Buffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Buffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Buffer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the size of buffer
         *
         * @returns the size of the buffer in bytes
         */
        get_size(): number;
        /**
         * Retrieves the update hints set using [method`Cogl`.Buffer.set_update_hint]
         *
         * @returns the #CoglBufferUpdateHint currently used by the buffer
         */
        get_update_hint(): Cogl.BufferUpdateHint;
        /**
         * Maps the buffer into the application address space for direct
         * access. This is equivalent to calling [method`Cogl`.Buffer.map_range] with
         * zero as the offset and the size of the entire buffer as the size.
         *
         * It is strongly recommended that you pass
         * %COGL_BUFFER_MAP_HINT_DISCARD as a hint if you are going to replace
         * all the buffer's data. This way if the buffer is currently being
         * used by the GPU then the driver won't have to stall the CPU and
         * wait for the hardware to finish because it can instead allocate a
         * new buffer to map.
         *
         * The behaviour is undefined if you access the buffer in a way
         * conflicting with the `access` mask you pass. It is also an error to
         * release your last reference while the buffer is mapped.
         *
         * @returns A pointer to the mapped memory or
         *        %NULL is the call fails
         * @param access how the mapped buffer will be used by the application
         * @param hints A mask of `CoglBufferMapHint`s that tell Cogl how
         *   the data will be modified once mapped.
         */
        map(access: Cogl.BufferAccess | null, hints: Cogl.BufferMapHint | null): any | null;
        /**
         * Maps a sub-region of the buffer into the application's address space
         * for direct access.
         *
         * It is strongly recommended that you pass
         * %COGL_BUFFER_MAP_HINT_DISCARD as a hint if you are going to replace
         * all the buffer's data. This way if the buffer is currently being
         * used by the GPU then the driver won't have to stall the CPU and
         * wait for the hardware to finish because it can instead allocate a
         * new buffer to map. You can pass
         * %COGL_BUFFER_MAP_HINT_DISCARD_RANGE instead if you want the
         * regions outside of the mapping to be retained.
         *
         * The behaviour is undefined if you access the buffer in a way
         * conflicting with the `access` mask you pass. It is also an error to
         * release your last reference while the buffer is mapped.
         *
         * @returns A pointer to the mapped memory or
         *        %NULL is the call fails
         * @param offset Offset within the buffer to start the mapping
         * @param size The size of data to map
         * @param access how the mapped buffer will be used by the application
         * @param hints A mask of `CoglBufferMapHint`s that tell Cogl how
         *   the data will be modified once mapped.
         */
        map_range(
            offset: number,
            size: number,
            access: Cogl.BufferAccess | null,
            hints: Cogl.BufferMapHint | null,
        ): any | null;
        /**
         * Updates part of the buffer with new data from `data`. Where to put this new
         * data is controlled by `offset` and `offset` + `data` should be less than the
         * buffer size.
         *
         * @returns %TRUE is the operation succeeded, %FALSE otherwise
         * @param offset destination offset (in bytes) in the buffer
         * @param data a pointer to the data to be copied
         *   into the buffer
         * @param size number of bytes to copy
         */
        set_data(offset: number, data: Uint8Array[] | string, size: number): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Sets the update hint on a buffer. See #CoglBufferUpdateHint for a description
         * of the available hints.
         *
         * @param hint the new hint
         */
        set_update_hint(hint: Cogl.BufferUpdateHint | null): void;
        /**
         * Unmaps a buffer previously mapped by [method`Cogl`.Buffer.map].
         */
        unmap(): void;
    }
    class Context extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Context>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Context.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Context.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(display?: Cogl.Display | null): Cogl.Context;
        // Signals
        connect<K extends keyof Cogl.Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Context.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * This function should only need to be called in exceptional circumstances.
         *
         * As an optimization Cogl drawing functions may batch up primitives
         * internally, so if you are trying to use raw GL outside of Cogl you stand a
         * better chance of being successful if you ask Cogl to flush any batched
         * geometry before making your state changes.
         *
         * It only ensure that the underlying driver is issued all the commands
         * necessary to draw the batched primitives. It provides no guarantees about
         * when the driver will complete the rendering.
         *
         * This provides no guarantees about the GL state upon returning and to avoid
         * confusing Cogl you should aim to restore any changes you make before
         * resuming use of Cogl.
         *
         * If you are making state changes with the intention of affecting Cogl drawing
         * primitives you are 100% on your own since you stand a good chance of
         * conflicting with Cogl internals. For example clutter-gst which currently
         * uses direct GL calls to bind ARBfp programs will very likely break when Cogl
         * starts to use ARBfb programs itself for the pipeline API.
         */
        flush(): void;
        format_supports_upload(format: Cogl.PixelFormat | null): boolean;
        free_timestamp_query(query: Cogl.TimestampQuery): void;
        /**
         * Retrieves the #CoglDisplay that is internally associated with the
         * given `context`. This will return the same #CoglDisplay that was
         * passed to cogl_context_new() or if %NULL was passed to
         * cogl_context_new() then this function returns a pointer to the
         * display that was automatically setup internally.
         *
         * @returns The #CoglDisplay associated with the
         *               given `context`.
         */
        get_display(): Cogl.Display;
        /**
         * This function should only be called if the COGL_FEATURE_ID_TIMESTAMP_QUERY
         * feature is advertised.
         *
         * @returns Current GPU time in nanoseconds
         */
        get_gpu_time_ns(): number;
        /**
         * Returns the graphics reset status as reported by
         * GetGraphicsResetStatusARB defined in the ARB_robustness extension.
         *
         * Note that Cogl doesn't normally enable the ARB_robustness
         * extension in which case this will only ever return
         * #COGL_GRAPHICS_RESET_STATUS_NO_ERROR.
         *
         * @returns a #CoglGraphicsResetStatus
         */
        get_graphics_reset_status(): Cogl.GraphicsResetStatus;
        /**
         * This function is used to get support for waiting on previous
         * GPU work through sync fds. It will return a sync fd which will
         * signal when the previous work has completed.
         *
         * @returns sync fd for latest GPU submission if available,
         * returns -1 if not.
         */
        get_latest_sync_fd(): number;
        get_named_pipeline(key: Cogl.PipelineKey): Cogl.Pipeline;
        get_rectangle_indices(n_rectangles: number): Cogl.Indices;
        /**
         * Retrieves the #CoglRenderer that is internally associated with the
         * given `context`. This will return the same #CoglRenderer that was
         * passed to cogl_display_new() or if %NULL was passed to
         * cogl_display_new() or cogl_context_new() then this function returns
         * a pointer to the renderer that was automatically connected
         * internally.
         *
         * @returns The #CoglRenderer associated with the
         *               given `context`.
         */
        get_renderer(): Cogl.Renderer;
        /**
         * Checks if a given `feature` is currently available
         *
         * Cogl does not aim to be a lowest common denominator API, it aims to
         * expose all the interesting features of GPUs to application which
         * means applications have some responsibility to explicitly check
         * that certain features are available before depending on them.
         *
         * @returns %TRUE if the `feature` is currently supported or %FALSE if
         * not.
         * @param feature A #CoglFeatureID
         */
        has_feature(feature: Cogl.FeatureID | null): boolean;
        has_winsys_feature(feature: Cogl.WinsysFeature | null): boolean;
        is_hardware_accelerated(): boolean;
        /**
         * Associate a #CoglPipeline with a `context` and `key`. This will not take a new
         * reference to the `pipeline,` but will unref all associated pipelines when
         * the `context` gets destroyed. Similarly, if a pipeline gets overwritten,
         * it will get unreffed as well.
         *
         * @param key a #CoglPipelineKey pointer
         * @param pipeline a #CoglPipeline to associate with the `context` and
         *            `key`
         */
        set_named_pipeline(key: Cogl.PipelineKey, pipeline?: Cogl.Pipeline | null): void;
        timestamp_query_get_time_ns(query: Cogl.TimestampQuery): number;
    }
    class Display extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Display>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Display.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Display.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(renderer: Cogl.Renderer): Cogl.Display;
        // Signals
        connect<K extends keyof Cogl.Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Display.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Queries the #CoglRenderer associated with the given `display`.
         *
         * @returns The associated #CoglRenderer
         */
        get_renderer(): Cogl.Renderer;
        /**
         * Explicitly sets up the given `display` object. Use of this api is
         * optional since Cogl will internally setup the display if not done
         * explicitly.
         *
         * When a display is first allocated via cogl_display_new() it is in a
         * mutable configuration mode. This allows us to extend the apis
         * available for configuring a display without requiring huge numbers
         * of constructor arguments.
         *
         * Its possible to request a configuration that might not be
         * supportable on the current system and so this api provides a means
         * to apply the configuration explicitly but if it fails then an
         * exception will be returned so you can handle the error gracefully
         * and perhaps fall back to an alternative configuration.
         *
         * If you instead rely on Cogl implicitly calling cogl_display_setup()
         * for you then if there is an error with the configuration you won't
         * get an opportunity to handle that and the application may abort
         * with a message.  For simple applications that don't have any
         * fallback options this behaviour may be fine.
         *
         * @returns Returns %TRUE if there was no error, else it returns
         *               %FALSE and returns an exception via `error`.
         */
        setup(): boolean;
    }
    class FrameInfo extends GObjectClasses.Object {
        static '$gtype': GObject.GType<FrameInfo>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.FrameInfo.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.FrameInfo.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Cogl.FrameInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.FrameInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.FrameInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.FrameInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.FrameInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.FrameInfo.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Gets the frame counter for the #CoglOnscreen that corresponds
         * to this frame.
         *
         * @returns The frame counter value
         */
        get_frame_counter(): number;
        get_is_symbolic(): boolean;
        /**
         * Gets the presentation time for the frame. This is the time at which
         * the frame became visible to the user.
         *
         * The presentation time measured in microseconds, is based on
         * CLOCK_MONOTONIC.
         *
         * Some buggy Mesa drivers up to 9.0.1 may
         * incorrectly report non-monotonic timestamps.
         *
         * @returns the presentation time for the frame
         */
        get_presentation_time_us(): number;
        /**
         * Gets the refresh rate in Hertz for the output that the frame was on
         * at the time the frame was presented.
         *
         * Some platforms can't associate a #CoglOutput with a
         * #CoglFrameInfo object but are able to report a refresh rate via
         * this api. Therefore if you need this information then this api is
         * more reliable than using cogl_frame_info_get_output() followed by
         * cogl_output_get_refresh_rate().
         *
         * @returns the refresh rate in Hertz
         */
        get_refresh_rate(): number;
        get_rendering_duration_ns(): number;
        get_sequence(): number;
        /**
         * Gets the target presentation time for the frame. This is the time at
         * which the frame was expected to became visible to the user.
         *
         * The target presentation time measured in microseconds, is based on
         * CLOCK_MONOTONIC.
         *
         * @returns the presentation time for the frame if available, or 0
         */
        get_target_presentation_time_us(): number;
        get_time_before_buffer_swap_us(): number;
        get_view_frame_counter(): number;
        has_valid_gpu_rendering_duration(): boolean;
        is_hw_clock(): boolean;
        is_vsync(): boolean;
        is_zero_copy(): boolean;
    }
    abstract class Framebuffer extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Framebuffer>;
        // Properties
        get context(): Cogl.Context;
        get driver_config(): any;
        get driverConfig(): any;
        get height(): number;
        set height(val: number);
        get width(): number;
        set width(val: number);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Framebuffer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Framebuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Cogl.Framebuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Framebuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Framebuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Framebuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Framebuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Framebuffer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        static error_quark(): number;
        // Virtual methods
        /**
         * Explicitly allocates a configured #CoglFramebuffer allowing developers to
         * check and handle any errors that might arise from an unsupported
         * configuration so that fallback configurations may be tried.
         *
         * Many applications don't support any fallback options at least when
         * they are initially developed and in that case the don't need to use this API
         * since Cogl will automatically allocate a framebuffer when it first gets
         * used.  The disadvantage of relying on automatic allocation is that the
         * program will abort with an error message if there is an error during
         * automatic allocation.
         */
        vfunc_allocate(): boolean;
        vfunc_is_y_flipped(): boolean;
        // Methods
        /**
         * Explicitly allocates a configured #CoglFramebuffer allowing developers to
         * check and handle any errors that might arise from an unsupported
         * configuration so that fallback configurations may be tried.
         *
         * Many applications don't support any fallback options at least when
         * they are initially developed and in that case the don't need to use this API
         * since Cogl will automatically allocate a framebuffer when it first gets
         * used.  The disadvantage of relying on automatic allocation is that the
         * program will abort with an error message if there is an error during
         * automatic allocation.
         *
         * @returns %TRUE if there were no error allocating the framebuffer, else %FALSE.
         */
        allocate(): boolean;
        /**
         * `return` FALSE for an immediately detected error, TRUE otherwise.
         *
         * This blits a region of the color buffer of the source buffer
         * to the destination buffer. This function should only be
         * called if the COGL_FEATURE_ID_BLIT_FRAMEBUFFER feature is
         * advertised.
         *
         * The source and destination rectangles are defined in offscreen
         * framebuffer orientation. When copying between an offscreen and
         * onscreen framebuffers, the image is y-flipped accordingly.
         *
         * The two buffers must have the same value types (e.g. floating-point,
         * unsigned int, signed int, or fixed-point), but color formats do not
         * need to match. This limitation comes from OpenGL ES 3.0 definition
         * of glBlitFramebuffer.
         *
         * Note that this function differs a lot from the glBlitFramebuffer
         * function provided by the GL_EXT_framebuffer_blit extension. Notably
         * it doesn't support having different sizes for the source and
         * destination rectangle. This doesn't seem
         * like a particularly useful feature. If the application wanted to
         * scale the results it may make more sense to draw a primitive
         * instead.
         *
         * The GL function is documented to be affected by the scissor. This
         * function therefore ensure that an empty clip stack is flushed
         * before performing the blit which means the scissor is effectively
         * ignored.
         *
         * The function also doesn't support specifying the buffers to copy
         * and instead only the color buffer is copied. When copying the depth
         * or stencil buffers the extension on GLES2.0 only supports copying
         * the full buffer which would be awkward to document with this
         * API. If we wanted to support that feature it may be better to have
         * a separate function to copy the entire buffer for a given mask.
         *
         * The `c` error argument is optional, it can be NULL. If it is not NULL
         * and this function returns FALSE, an error object with a code from
         * COGL_SYSTEM_ERROR will be created.
         *
         * @param dst The destination #CoglFramebuffer
         * @param src_x Source x position
         * @param src_y Source y position
         * @param dst_x Destination x position
         * @param dst_y Destination y position
         * @param width Width of region to copy
         * @param height Height of region to copy
         */
        blit(
            dst: Cogl.Framebuffer,
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            width: number,
            height: number,
        ): boolean;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         *
         * @param buffers A mask of `CoglBufferBit`s identifying which auxiliary
         *   buffers to clear
         * @param color The color to clear the color buffer too if specified in
         *         `buffers`.
         */
        clear(buffers: number, color: Cogl.Color): void;
        /**
         * Clears all the auxiliary buffers identified in the `buffers` mask, and if
         * that includes the color buffer then the specified `color` is used.
         *
         * @param buffers A mask of `CoglBufferBit`s identifying which auxiliary
         *   buffers to clear
         * @param red The red component of color to clear the color buffer too if
         *       specified in `buffers`.
         * @param green The green component of color to clear the color buffer too if
         *         specified in `buffers`.
         * @param blue The blue component of color to clear the color buffer too if
         *        specified in `buffers`.
         * @param alpha The alpha component of color to clear the color buffer too if
         *         specified in `buffers`.
         */
        clear4f(buffers: number, red: number, green: number, blue: number, alpha: number): void;
        /**
         * Declares that the specified `buffers` no longer need to be referenced
         * by any further rendering commands. This can be an important
         * optimization to avoid subsequent frames of rendering depending on
         * the results of a previous frame.
         *
         * For example; some tile-based rendering GPUs are able to avoid allocating and
         * accessing system memory for the depth and stencil buffer so long as these
         * buffers are not required as input for subsequent frames and that can save a
         * significant amount of memory bandwidth used to save and restore their
         * contents to system memory between frames.
         *
         * It is currently considered an error to try and explicitly discard the color
         * buffer by passing %COGL_BUFFER_BIT_COLOR. This is because the color buffer is
         * already implicitly discard when you finish rendering to a #CoglOnscreen
         * framebuffer, and it's not meaningful to try and discard the color buffer of
         * a #CoglOffscreen framebuffer since they are single-buffered.
         *
         * @param buffers A #CoglBufferBit mask of which ancillary buffers you want
         *           to discard.
         */
        discard_buffers(buffers: number): void;
        /**
         * Draws a textured rectangle to `framebuffer` with the given `pipeline`
         * state with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`). As a pipeline may
         * contain multiple texture layers this interface lets you supply
         * texture coordinates for each layer of the pipeline.
         *
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglTexture texture for the first layer such as
         * #CoglTexture2DSliced textures which may internally be comprised of
         * multiple low-level textures.  This is unlike low-level drawing apis
         * such as cogl_primitive_draw() which only support low level texture
         * types that are directly supported by GPUs such as #CoglTexture2D.
         *
         * This api can not currently handle multiple high-level meta
         * texture layers. The first layer may be a high level meta texture
         * such as #CoglTexture2DSliced but all other layers much be low
         * level textures such as #CoglTexture2D.
         *
         * The top left texture coordinate for layer 0 of any pipeline will be
         * (tex_coords[0], tex_coords[1]) and the bottom right coordinate will
         * be (tex_coords[2], tex_coords[3]). The coordinates for layer 1
         * would be (tex_coords[4], tex_coords[5]) (tex_coords[6],
         * tex_coords[7]) and so on...
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         *
         * The first pair of coordinates are for the first layer (with the
         * smallest layer index) and if you supply less texture coordinates
         * than there are layers in the current source pipeline then default
         * texture coordinates (0.0, 0.0, 1.0, 1.0) are generated.
         *
         * @param pipeline A #CoglPipeline state object
         * @param _x_1 x coordinate upper left on screen.
         * @param _y_1 y coordinate upper left on screen.
         * @param _x_2 x coordinate lower right on screen.
         * @param _y_2 y coordinate lower right on screen.
         * @param tex_coords An array containing groups of
         *   4 float values: [s_1, t_1, s_2, t_2] that are interpreted as two texture
         *   coordinates; one for the top left texel, and one for the bottom right
         *   texel. Each value should be between 0.0 and 1.0, where the coordinate
         *   (0.0, 0.0) represents the top left of the texture, and (1.0, 1.0) the
         *   bottom right.
         * @param tex_coords_len The length of the `tex_coords` array. (For one layer
         *   and one group of texture coordinates, this would be 4)
         */
        draw_multitextured_rectangle(
            pipeline: Cogl.Pipeline,
            _x_1: number,
            _y_1: number,
            _x_2: number,
            _y_2: number,
            tex_coords: number[],
            tex_coords_len: number,
        ): void;
        /**
         * Draws a rectangle to `framebuffer` with the given `pipeline` state
         * and with the top left corner positioned at (`x_1`, `y_1`) and the
         * bottom right corner positioned at (`x_2`, `y_2`).
         *
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
         *
         * If you want to describe a rectangle with a texture mapped on
         * it then you can use
         * cogl_framebuffer_draw_textured_rectangle().
         *
         * @param pipeline A #CoglPipeline state object
         * @param _x_1 X coordinate of the top-left corner
         * @param _y_1 Y coordinate of the top-left corner
         * @param _x_2 X coordinate of the bottom-right corner
         * @param _y_2 Y coordinate of the bottom-right corner
         */
        draw_rectangle(pipeline: Cogl.Pipeline, _x_1: number, _y_1: number, _x_2: number, _y_2: number): void;
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_rectangle() does.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The positions for
         * the second rectangle are (coordinates[4], coordinates[5]) and
         * (coordinates[6], coordinates[7]) and so on...
         *
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         *
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array of coordinates
         *   containing groups of 4 float values: [x_1, y_1, x_2, y_2] that are
         *   interpreted as two position coordinates; one for the top left of
         *   the rectangle (x1, y1), and one for the bottom right of the
         *   rectangle (x2, y2).
         * @param n_rectangles number of rectangles defined in `coordinates`.
         */
        draw_rectangles(pipeline: Cogl.Pipeline, coordinates: number[], n_rectangles: number): void;
        /**
         * Draws a textured rectangle to `framebuffer` using the given
         * `pipeline` state with the top left corner positioned at (`x_1`, `y_1`)
         * and the bottom right corner positioned at (`x_2`, `y_2`). The top
         * left corner will have texture coordinates of (`s_1`, `t_1`) and the
         * bottom right corner will have texture coordinates of (`s_2`, `t_2`).
         *
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * The given texture coordinates will only be used for the first
         * texture layer of the pipeline and if your pipeline has more than
         * one layer then all other layers will have default texture
         * coordinates of `s_1`=0.0 `t_1`=0.0 `s_2`=1.0 `t_2`=1.0
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in `s_1`=0, `t_1`=0, `s_2`=1, `t_2`=1.
         *
         * @param pipeline A #CoglPipeline state object
         * @param _x_1 x coordinate upper left on screen.
         * @param _y_1 y coordinate upper left on screen.
         * @param _x_2 x coordinate lower right on screen.
         * @param _y_2 y coordinate lower right on screen.
         * @param _s_1 S texture coordinate of the top-left coorner
         * @param _t_1 T texture coordinate of the top-left coorner
         * @param _s_2 S texture coordinate of the bottom-right coorner
         * @param _t_2 T texture coordinate of the bottom-right coorner
         */
        draw_textured_rectangle(
            pipeline: Cogl.Pipeline,
            _x_1: number,
            _y_1: number,
            _x_2: number,
            _y_2: number,
            _s_1: number,
            _t_1: number,
            _s_2: number,
            _t_2: number,
        ): void;
        /**
         * Draws a series of rectangles to `framebuffer` with the given
         * `pipeline` state in the same way that
         * cogl_framebuffer_draw_textured_rectangle() does.
         *
         * The position is the position before the rectangle has been
         * transformed by the model-view matrix and the projection
         * matrix.
         *
         * This is a high level drawing api that can handle any kind of
         * #CoglTexture texture such as #CoglTexture2DSliced textures
         * which may internally be comprised of multiple low-level textures.
         * This is unlike low-level drawing apis such as cogl_primitive_draw()
         * which only support low level texture types that are directly
         * supported by GPUs such as #CoglTexture2D.
         *
         * The top left corner of the first rectangle is positioned at
         * (coordinates[0], coordinates[1]) and the bottom right corner is
         * positioned at (coordinates[2], coordinates[3]). The top left
         * texture coordinate is (coordinates[4], coordinates[5]) and the
         * bottom right texture coordinate is (coordinates[6],
         * coordinates[7]). The coordinates for subsequent rectangles
         * are defined similarly by the subsequent coordinates.
         *
         * As a general rule for better performance its recommended to use
         * this this API instead of calling
         * cogl_framebuffer_draw_textured_rectangle() separately for multiple
         * rectangles if all of the rectangles will be drawn together with the
         * same `pipeline` state.
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in tex_coords[0]=0, tex_coords[1]=0, tex_coords[2]=1,
         * tex_coords[3]=1.
         *
         * @param pipeline A #CoglPipeline state object
         * @param coordinates an array containing
         *   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]
         *   that have the same meaning as the arguments for
         *   cogl_framebuffer_draw_textured_rectangle().
         * @param n_rectangles number of rectangles to `coordinates` to draw
         */
        draw_textured_rectangles(pipeline: Cogl.Pipeline, coordinates: number[], n_rectangles: number): void;
        /**
         * This blocks the CPU until all pending rendering associated with the
         * specified framebuffer has completed. It's very rare that developers should
         * ever need this level of synchronization with the GPU and should never be
         * used unless you clearly understand why you need to explicitly force
         * synchronization.
         *
         * One example might be for benchmarking purposes to be sure timing
         * measurements reflect the time that the GPU is busy for not just the time it
         * takes to queue rendering commands.
         */
        finish(): void;
        /**
         * Flushes `framebuffer` to ensure the current batch of commands is
         * submitted to the GPU.
         *
         * Unlike cogl_framebuffer_finish(), this does not block the CPU.
         */
        flush(): void;
        /**
         * Replaces the current projection matrix with a perspective matrix
         * for a given viewing frustum defined by 4 side clip planes that
         * all cross through the origin and 2 near and far clip planes.
         *
         * @param left X position of the left clipping plane where it
         *   intersects the near clipping plane
         * @param right X position of the right clipping plane where it
         *   intersects the near clipping plane
         * @param bottom Y position of the bottom clipping plane where it
         *   intersects the near clipping plane
         * @param top Y position of the top clipping plane where it intersects
         *   the near clipping plane
         * @param z_near The distance to the near clipping plane (Must be positive)
         * @param z_far The distance to the far clipping plane (Must be positive)
         */
        frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
        /**
         * Retrieves the number of alpha bits of `framebuffer`
         *
         * @returns the number of bits
         */
        get_alpha_bits(): number;
        /**
         * Retrieves the number of blue bits of `framebuffer`
         *
         * @returns the number of bits
         */
        get_blue_bits(): number;
        /**
         * Can be used to query the #CoglContext a given `framebuffer` was
         * instantiated within. This is the #CoglContext that was passed to
         * cogl_onscreen_new() for example.
         *
         * @returns The #CoglContext that the given
         *               `framebuffer` was instantiated within.
         */
        get_context(): Cogl.Context;
        /**
         * Queries whether depth buffer writing is enabled for `framebuffer`. This
         * can be controlled via cogl_framebuffer_set_depth_write_enabled().
         *
         * @returns %TRUE if depth writing is enabled or %FALSE if not.
         */
        get_depth_write_enabled(): boolean;
        /**
         * Returns whether dithering has been requested for the given `framebuffer`.
         * See cogl_framebuffer_set_dither_enabled() for more details about dithering.
         *
         * This may return %TRUE even when the underlying `framebuffer`
         * display pipeline does not support dithering. This value only represents
         * the user's request for dithering.
         *
         * @returns %TRUE if dithering has been requested or %FALSE if not.
         */
        get_dither_enabled(): boolean;
        /**
         * Retrieves the number of green bits of `framebuffer`
         *
         * @returns the number of bits
         */
        get_green_bits(): number;
        /**
         * Queries the current height of the given `framebuffer`.
         *
         * @returns The height of `framebuffer`.
         */
        get_height(): number;
        /**
         * Stores the current model-view matrix in `matrix`.
         */
        get_modelview_matrix(): [Graphene.Matrix];
        /**
         * Stores the current projection matrix in `matrix`.
         */
        get_projection_matrix(): [Graphene.Matrix];
        /**
         * Retrieves the number of red bits of `framebuffer`
         *
         * @returns the number of bits
         */
        get_red_bits(): number;
        /**
         * Queries the x, y, width and height components of the current viewport as set
         * using cogl_framebuffer_set_viewport() or the default values which are 0, 0,
         * framebuffer_width and framebuffer_height.  The values are written into the
         * given `viewport` array.
         */
        get_viewport4fv(): [number[]];
        /**
         * Queries the height of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the height of the framebuffer.
         *
         * @returns The height of the viewport.
         */
        get_viewport_height(): number;
        /**
         * Queries the width of the viewport as set using cogl_framebuffer_set_viewport()
         * or the default value which is the width of the framebuffer.
         *
         * @returns The width of the viewport.
         */
        get_viewport_width(): number;
        /**
         * Queries the x coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         *
         * @returns The x coordinate of the viewport origin.
         */
        get_viewport_x(): number;
        /**
         * Queries the y coordinate of the viewport origin as set using cogl_framebuffer_set_viewport()
         * or the default value which is 0.
         *
         * @returns The y coordinate of the viewport origin.
         */
        get_viewport_y(): number;
        /**
         * Queries the current width of the given `framebuffer`.
         *
         * @returns The width of `framebuffer`.
         */
        get_width(): number;
        /**
         * Replaces the current projection matrix with an orthographic projection
         * matrix.
         *
         * @param _x_1 The x coordinate for the first vertical clipping plane
         * @param _y_1 The y coordinate for the first horizontal clipping plane
         * @param _x_2 The x coordinate for the second vertical clipping plane
         * @param _y_2 The y coordinate for the second horizontal clipping plane
         * @param near The *distance* to the near clipping
         *   plane (will be *negative* if the plane is
         *   behind the viewer)
         * @param far The *distance* to the far clipping
         *   plane (will be *negative* if the plane is
         *   behind the viewer)
         */
        orthographic(_x_1: number, _y_1: number, _x_2: number, _y_2: number, near: number, far: number): void;
        /**
         * Replaces the current projection matrix with a perspective matrix
         * based on the provided values.
         *
         * You should be careful not to have to great a `z_far` / `z_near`
         * ratio since that will reduce the effectiveness of depth testing
         * since there won't be enough precision to identify the depth of
         * objects near to each other.
         *
         * @param fov_y Vertical field of view angle in degrees.
         * @param aspect The (width over height) aspect ratio for display
         * @param z_near The distance to the near clipping plane (Must be positive,
         *   and must not be 0)
         * @param z_far The distance to the far clipping plane (Must be positive)
         */
        perspective(fov_y: number, aspect: number, z_near: number, z_far: number): void;
        /**
         * Reverts the clipping region to the state before the last call to
         * cogl_framebuffer_push_rectangle_clip()
         */
        pop_clip(): void;
        /**
         * Restores the model-view matrix on the top of the matrix stack.
         */
        pop_matrix(): void;
        /**
         * Copies the current model-view matrix onto the matrix stack. The matrix
         * can later be restored with cogl_framebuffer_pop_matrix().
         */
        push_matrix(): void;
        /**
         * Specifies a modelview transformed rectangular clipping area for all
         * subsequent drawing operations. Any drawing commands that extend
         * outside the rectangle will be clipped so that only the portion
         * inside the rectangle will be displayed. The rectangle dimensions
         * are transformed by the current model-view matrix.
         *
         * The rectangle is intersected with the current clip region. To undo
         * the effect of this function, call cogl_framebuffer_pop_clip().
         *
         * @param _x_1 x coordinate for top left corner of the clip rectangle
         * @param _y_1 y coordinate for top left corner of the clip rectangle
         * @param _x_2 x coordinate for bottom right corner of the clip rectangle
         * @param _y_2 y coordinate for bottom right corner of the clip rectangle
         */
        push_rectangle_clip(_x_1: number, _y_1: number, _x_2: number, _y_2: number): void;
        push_region_clip(region: Mtk.Region): void;
        /**
         * This is a convenience wrapper around
         * cogl_framebuffer_read_pixels_into_bitmap() which allocates a
         * temporary #CoglBitmap to read pixel data directly into the given
         * buffer. The rowstride of the buffer is assumed to be the width of
         * the region times the bytes per pixel of the format. The source for
         * the data is always taken from the color buffer. If you want to use
         * any other rowstride or source, please use the
         * cogl_framebuffer_read_pixels_into_bitmap() function directly.
         *
         * The implementation of the function looks like this:
         *
         * ```c
         * bitmap = cogl_bitmap_new_for_data (context,
         *                                    width, height,
         *                                    format,
         *                                    /<!-- -->* rowstride *<!-- -->/
         *                                    bpp * width,
         *                                    pixels);
         * cogl_framebuffer_read_pixels_into_bitmap (framebuffer,
         *                                           x, y,
         *                                           COGL_READ_PIXELS_COLOR_BUFFER,
         *                                           bitmap);
         * g_object_unref (bitmap);
         * ```
         *
         * @returns %TRUE if the read succeeded or %FALSE otherwise.
         * @param x The x position to read from
         * @param y The y position to read from
         * @param width The width of the region of rectangles to read
         * @param height The height of the region of rectangles to read
         * @param format The pixel format to store the data in
         * @param pixels The address of the buffer to store the data in
         */
        read_pixels(
            x: number,
            y: number,
            width: number,
            height: number,
            format: Cogl.PixelFormat | null,
            pixels: number,
        ): boolean;
        /**
         * This reads a rectangle of pixels from the given framebuffer where
         * position (0, 0) is the top left. The pixel at (x, y) is the first
         * read, and a rectangle of pixels with the same size as the bitmap is
         * read right and downwards from that point.
         *
         * Currently Cogl assumes that the framebuffer is in a premultiplied
         * format so if the format of `bitmap` is non-premultiplied it will
         * convert it. To read the pixel values without any conversion you
         * should either specify a format that doesn't use an alpha channel or
         * use one of the formats ending in PRE.
         *
         * @returns %TRUE if the read succeeded or %FALSE otherwise. The
         *  function is only likely to fail if the bitmap points to a pixel
         *  buffer and it could not be mapped.
         * @param x The x position to read from
         * @param y The y position to read from
         * @param source Identifies which auxiliary buffer you want to read
         *          (only COGL_READ_PIXELS_COLOR_BUFFER supported currently)
         * @param bitmap The bitmap to store the results in.
         */
        read_pixels_into_bitmap(
            x: number,
            y: number,
            source: Cogl.ReadPixelsFlags | null,
            bitmap: Cogl.Bitmap,
        ): boolean;
        /**
         * Multiplies the current model-view matrix by one that rotates the
         * model around the axis-vector specified by `x,` `y` and `z`. The
         * rotation follows the right-hand thumb rule so for example rotating
         * by 10 degrees about the axis-vector (0, 0, 1) causes a small
         * counter-clockwise rotation.
         *
         * @param angle Angle in degrees to rotate.
         * @param x X-component of vertex to rotate around.
         * @param y Y-component of vertex to rotate around.
         * @param z Z-component of vertex to rotate around.
         */
        rotate(angle: number, x: number, y: number, z: number): void;
        /**
         * Multiplies the current model-view matrix by one that scales the x,
         * y and z axes by the given values.
         *
         * @param x Amount to scale along the x-axis
         * @param y Amount to scale along the y-axis
         * @param z Amount to scale along the z-axis
         */
        scale(x: number, y: number, z: number): void;
        /**
         * Enables or disables depth buffer writing when rendering to `framebuffer`.
         * If depth writing is enabled for both the framebuffer and the rendering
         * pipeline, and the framebuffer has an associated depth buffer, depth
         * information will be written to this buffer during rendering.
         *
         * Depth buffer writing is enabled by default.
         *
         * @param depth_write_enabled %TRUE to enable depth writing or %FALSE to disable
         */
        set_depth_write_enabled(depth_write_enabled: boolean): void;
        /**
         * Enables or disabled dithering if supported by the hardware.
         *
         * Dithering is a hardware dependent technique to increase the visible
         * color resolution beyond what the underlying hardware supports by playing
         * tricks with the colors placed into the framebuffer to give the illusion
         * of other colors. (For example this can be compared to half-toning used
         * by some news papers to show varying levels of grey even though their may
         * only be black and white are available).
         *
         * If the current display pipeline for `framebuffer` does not support dithering
         * then this has no affect.
         *
         * Dithering is enabled by default.
         *
         * @param dither_enabled %TRUE to enable dithering or %FALSE to disable
         */
        set_dither_enabled(dither_enabled: boolean): void;
        /**
         * Sets `matrix` as the new model-view matrix.
         *
         * @param matrix the new model-view matrix
         */
        set_modelview_matrix(matrix: Graphene.Matrix): void;
        /**
         * Sets `matrix` as the new projection matrix.
         *
         * @param matrix the new projection matrix
         */
        set_projection_matrix(matrix: Graphene.Matrix): void;
        /**
         * Defines a scale and offset for everything rendered relative to the
         * top-left of the destination framebuffer.
         *
         * By default the viewport has an origin of (0,0) and width and height
         * that match the framebuffer's size. Assuming a default projection and
         * modelview matrix then you could translate the contents of a window
         * down and right by leaving the viewport size unchanged by moving the
         * offset to (10,10). The viewport coordinates are measured in pixels.
         * If you left the x and y origin as (0,0) you could scale the windows
         * contents down by specify and width and height that's half the real
         * size of the framebuffer.
         *
         * Although the function takes floating point arguments, existing
         * drivers only allow the use of integer values. In the future floating
         * point values will be exposed via a checkable feature.
         *
         * @param x The top-left x coordinate of the viewport origin (only integers
         *     supported currently)
         * @param y The top-left y coordinate of the viewport origin (only integers
         *     supported currently)
         * @param width The width of the viewport (only integers supported currently)
         * @param height The height of the viewport (only integers supported currently)
         */
        set_viewport(x: number, y: number, width: number, height: number): void;
        /**
         * Multiplies the current model-view matrix by the given matrix.
         *
         * @param matrix the matrix to multiply with the current model-view
         */
        transform(matrix: Graphene.Matrix): void;
        /**
         * Multiplies the current model-view matrix by one that translates the
         * model along all three axes according to the given values.
         *
         * @param x Distance to translate along the x-axis
         * @param y Distance to translate along the y-axis
         * @param z Distance to translate along the z-axis
         */
        translate(x: number, y: number, z: number): void;
    }
    class IndexBuffer extends Buffer {
        static '$gtype': GObject.GType<IndexBuffer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.IndexBuffer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.IndexBuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(context: Cogl.Context, bytes: number): Cogl.IndexBuffer;
        // Signals
        connect<K extends keyof Cogl.IndexBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.IndexBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.IndexBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.IndexBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.IndexBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.IndexBuffer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class Indices extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Indices>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Indices.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Indices.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(
            context: Cogl.Context,
            type: Cogl.IndicesType,
            indices_data: any | null,
            n_indices: number,
        ): Cogl.Indices;
        // Signals
        connect<K extends keyof Cogl.Indices.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Indices.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Indices.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Indices.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Indices.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Indices.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_buffer(): Cogl.IndexBuffer;
        get_indices_type(): Cogl.IndicesType;
    }
    class MatrixStack extends GObjectClasses.Object {
        static '$gtype': GObject.GType<MatrixStack>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.MatrixStack.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.MatrixStack.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(ctx: Cogl.Context): Cogl.MatrixStack;
        // Signals
        connect<K extends keyof Cogl.MatrixStack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.MatrixStack.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.MatrixStack.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.MatrixStack.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.MatrixStack.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.MatrixStack.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Replaces the current matrix with a perspective matrix for a given
         * viewing frustum defined by 4 side clip planes that all cross
         * through the origin and 2 near and far clip planes.
         *
         * @param left X position of the left clipping plane where it
         *   intersects the near clipping plane
         * @param right X position of the right clipping plane where it
         *   intersects the near clipping plane
         * @param bottom Y position of the bottom clipping plane where it
         *   intersects the near clipping plane
         * @param top Y position of the top clipping plane where it intersects
         *   the near clipping plane
         * @param z_near The distance to the near clipping plane (Must be positive)
         * @param z_far The distance to the far clipping plane (Must be positive)
         */
        frustum(left: number, right: number, bottom: number, top: number, z_near: number, z_far: number): void;
        /**
         * Resolves the current `stack` transform into a #graphene_matrix_t by
         * combining the operations that have been applied to build up the
         * current transform.
         *
         * There are two possible ways that this function may return its
         * result depending on whether the stack is able to directly point
         * to an internal #graphene_matrix_t or whether the result needs to be
         * composed of multiple operations.
         *
         * If an internal matrix contains the required result then this
         * function will directly return a pointer to that matrix, otherwise
         * if the function returns %NULL then `matrix` will be initialized
         * to match the current transform of `stack`.
         *
         * `matrix` will be left untouched if a direct pointer is
         * returned.
         *
         * @returns A direct pointer to the current transform or %NULL
         *               and in that case `matrix` will be initialized with
         *               the value of the current transform.
         */
        get(): [Graphene.Matrix, Graphene.Matrix];
        /**
         * Gets a reference to the current transform represented by a
         * #CoglMatrixEntry pointer.
         *
         * The transform represented by a #CoglMatrixEntry is
         * immutable.
         *
         * `CoglMatrixEntry`s are reference counted using
         * cogl_matrix_entry_ref() and cogl_matrix_entry_unref() and you
         * should call cogl_matrix_entry_unref() when you are finished with
         * and entry you get via cogl_matrix_stack_get_entry().
         *
         * @returns A pointer to the #CoglMatrixEntry
         *               representing the current matrix stack transform.
         */
        get_entry(): Cogl.MatrixEntry;
        /**
         * Resets the current matrix to the identity matrix.
         */
        load_identity(): void;
        /**
         * Multiplies the current matrix by the given matrix.
         *
         * @param matrix the matrix to multiply with the current model-view
         */
        multiply(matrix: Graphene.Matrix): void;
        /**
         * Restores the previous transform that was last saved by calling
         * cogl_matrix_stack_push().
         *
         * This is usually called while traversing a scenegraph whenever you
         * return up one level in the graph towards the root node.
         */
        pop(): void;
        /**
         * Saves the current transform and starts a new transform that derives
         * from the current transform.
         *
         * This is usually called while traversing a scenegraph whenever you
         * traverse one level deeper. cogl_matrix_stack_pop() can then be
         * called when going back up one layer to restore the previous
         * transform of an ancestor.
         */
        push(): void;
        /**
         * Multiplies the current matrix by one that rotates the around the
         * axis-vector specified by `x,` `y` and `z`. The rotation follows the
         * right-hand thumb rule so for example rotating by 10 degrees about
         * the axis-vector (0, 0, 1) causes a small counter-clockwise
         * rotation.
         *
         * @param angle Angle in degrees to rotate.
         * @param x X-component of vertex to rotate around.
         * @param y Y-component of vertex to rotate around.
         * @param z Z-component of vertex to rotate around.
         */
        rotate(angle: number, x: number, y: number, z: number): void;
        /**
         * Multiplies the current matrix by one that rotates according to the
         * rotation described by `euler`.
         *
         * @param euler A #graphene_euler_t
         */
        rotate_euler(euler: Graphene.Euler): void;
        /**
         * Multiplies the current matrix by one that scales the x, y and z
         * axes by the given values.
         *
         * @param x Amount to scale along the x-axis
         * @param y Amount to scale along the y-axis
         * @param z Amount to scale along the z-axis
         */
        scale(x: number, y: number, z: number): void;
        /**
         * Replaces the current `stack` matrix value with the value of `matrix`.
         * This effectively discards any other operations that were applied
         * since the last time cogl_matrix_stack_push() was called or since
         * the stack was initialized.
         *
         * @param matrix A #graphene_matrix_t replace the current matrix value with
         */
        set(matrix: Graphene.Matrix): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Multiplies the current matrix by one that translates along all
         * three axes according to the given values.
         *
         * @param x Distance to translate along the x-axis
         * @param y Distance to translate along the y-axis
         * @param z Distance to translate along the z-axis
         */
        translate(x: number, y: number, z: number): void;
    }
    class Offscreen extends Framebuffer {
        static '$gtype': GObject.GType<Offscreen>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Offscreen.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Offscreen.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_with_texture(texture: Cogl.Texture): Cogl.Offscreen;
        // Signals
        connect<K extends keyof Cogl.Offscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Offscreen.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Offscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Offscreen.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Offscreen.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Offscreen.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_texture(): Cogl.Texture;
    }
    class Onscreen extends Framebuffer {
        static '$gtype': GObject.GType<Onscreen>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Onscreen.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Onscreen.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Cogl.Onscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Onscreen.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Onscreen.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Onscreen.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Onscreen.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Onscreen.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_bind(): void;
        vfunc_direct_scanout(scanout: Cogl.Scanout, info: Cogl.FrameInfo): boolean;
        /**
         * Gets the current age of the buffer contents.
         *
         * This function allows applications to query the age of the current
         * back buffer contents for a #CoglOnscreen as the number of frames
         * elapsed since the contents were most recently defined.
         *
         * These age values exposes enough information to applications about
         * how Cogl internally manages back buffers to allow applications to
         * re-use the contents of old frames and minimize how much must be
         * redrawn for the next frame.
         *
         * The back buffer contents can either be reported as invalid (has an
         * age of 0) or it may be reported to be the same contents as from n
         * frames prior to the current frame.
         *
         * The queried value remains valid until the next buffer swap.
         *
         * One caveat is that under X11 the buffer age does not reflect
         * changes to buffer contents caused by the window systems. X11
         * applications must track Expose events to determine what buffer
         * regions need to additionally be repaired each frame.
         *
         * The recommended way to take advantage of this buffer age api is to
         * build up a circular buffer of length 3 for tracking damage regions
         * over the last 3 frames and when starting a new frame look at the
         * age of the buffer and combine the damage regions for the current
         * frame with the damage regions of previous `age` frames so you know
         * everything that must be redrawn to update the old contents for the
         * new frame.
         *
         * If the system doesn't not support being able to track the age
         * of back buffers then this function will always return 0 which
         * implies that the contents are undefined.
         *
         * The %COGL_FEATURE_ID_BUFFER_AGE feature can optionally be
         * explicitly checked to determine if Cogl is currently tracking the
         * age of #CoglOnscreen back buffer contents. If this feature is
         * missing then this function will always return 0.
         */
        vfunc_get_buffer_age(): number;
        vfunc_get_window_handles(device_out?: any | null, window_out?: any | null): boolean;
        /**
         * Implementation for https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_partial_update.txt
         * This immediately queues state to OpenGL that will be used for the
         * next swap.
         * This needs to be called every frame.
         *
         * The expected values are independent of any viewport transforms applied to
         * the framebuffer.
         *
         * @param region A region representing damage
         */
        vfunc_queue_damage_region(region: Mtk.Region): void;
        /**
         * Swaps the current back buffer being rendered too, to the front for
         * display and provides information to any system compositor about
         * what regions of the buffer have changed (damage) with respect to
         * the last swapped buffer.
         *
         * This function has the same semantics as
         * cogl_framebuffer_swap_buffers() except that it additionally allows
         * applications to pass a damage region which may be used to minimize how much
         * of the screen is redrawn.
         *
         * For example if your application is only animating a small object in
         * the corner of the screen and everything else is remaining static
         * then it can help the compositor to know that only the bottom right
         * corner of your newly swapped buffer has really changed with respect
         * to your previously swapped front buffer.
         *
         * If `region` is NULL then the whole buffer will implicitly be
         * reported as damaged as if cogl_onscreen_swap_buffers() had been
         * called.
         *
         * This function also implicitly discards the contents of the color,
         * depth and stencil buffers as if cogl_framebuffer_discard_buffers()
         * were used. The significance of the discard is that you should not
         * expect to be able to start a new frame that incrementally builds on
         * the contents of the previous frame. If you want to perform
         * incremental updates to older back buffers then please refer to the
         * cogl_onscreen_get_buffer_age() api.
         *
         * Whenever possible it is recommended that applications use this
         * function instead of cogl_onscreen_swap_buffers() to improve
         * performance when running under a compositor.
         *
         * It is highly recommended to use this API in conjunction with
         * the cogl_onscreen_get_buffer_age() api so that your application can
         * perform incremental rendering based on old back buffers.
         *
         * @param region A region representing damage
         * @param info
         */
        vfunc_swap_buffers_with_damage(region: Mtk.Region, info: Cogl.FrameInfo): void;
        /**
         * Swaps a region of the back buffer being rendered too, to the front for
         * display.
         *
         * This function also implicitly discards the contents of the color, depth and
         * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
         * significance of the discard is that you should not expect to be able to
         * start a new frame that incrementally builds on the contents of the previous
         * frame.
         *
         * @param region A region
         * @param info
         */
        vfunc_swap_region(region: Mtk.Region, info: Cogl.FrameInfo): void;
        // Methods
        /**
         * Installs a `callback` function that will be called for significant
         * events relating to the given `onscreen` framebuffer.
         *
         * The `callback` will be used to notify when the system compositor is
         * ready for this application to render a new frame. In this case
         * %COGL_FRAME_EVENT_SYNC will be passed as the event argument to the
         * given `callback` in addition to the #CoglFrameInfo corresponding to
         * the frame being acknowledged by the compositor.
         *
         * The `callback` will also be called to notify when the frame has
         * ended. In this case %COGL_FRAME_EVENT_COMPLETE will be passed as
         * the event argument to the given `callback` in addition to the
         * #CoglFrameInfo corresponding to the newly presented frame.  The
         * meaning of "ended" here simply means that no more timing
         * information will be collected within the corresponding
         * #CoglFrameInfo and so this is a good opportunity to analyse the
         * given info. It does not necessarily mean that the GPU has finished
         * rendering the corresponding frame.
         *
         * We highly recommend throttling your application according to
         * %COGL_FRAME_EVENT_SYNC events so that your application can avoid
         * wasting resources, drawing more frames than your system compositor
         * can display.
         *
         * @returns a #CoglFrameClosure pointer that can be used to
         *          remove the callback and associated `user_data` later.
         * @param callback A callback function
         *            to call for frame events
         * @param destroy An optional callback to destroy `user_data`
         *           when the `callback` is removed or `onscreen` is freed.
         */
        add_frame_callback(callback: Cogl.FrameCallback, destroy?: GLib.DestroyNotify | null): Cogl.FrameClosure;
        add_frame_info(info: Cogl.FrameInfo): void;
        direct_scanout(scanout: Cogl.Scanout, info: Cogl.FrameInfo, user_data?: any | null): boolean;
        /**
         * Gets the current age of the buffer contents.
         *
         * This function allows applications to query the age of the current
         * back buffer contents for a #CoglOnscreen as the number of frames
         * elapsed since the contents were most recently defined.
         *
         * These age values exposes enough information to applications about
         * how Cogl internally manages back buffers to allow applications to
         * re-use the contents of old frames and minimize how much must be
         * redrawn for the next frame.
         *
         * The back buffer contents can either be reported as invalid (has an
         * age of 0) or it may be reported to be the same contents as from n
         * frames prior to the current frame.
         *
         * The queried value remains valid until the next buffer swap.
         *
         * One caveat is that under X11 the buffer age does not reflect
         * changes to buffer contents caused by the window systems. X11
         * applications must track Expose events to determine what buffer
         * regions need to additionally be repaired each frame.
         *
         * The recommended way to take advantage of this buffer age api is to
         * build up a circular buffer of length 3 for tracking damage regions
         * over the last 3 frames and when starting a new frame look at the
         * age of the buffer and combine the damage regions for the current
         * frame with the damage regions of previous `age` frames so you know
         * everything that must be redrawn to update the old contents for the
         * new frame.
         *
         * If the system doesn't not support being able to track the age
         * of back buffers then this function will always return 0 which
         * implies that the contents are undefined.
         *
         * The %COGL_FEATURE_ID_BUFFER_AGE feature can optionally be
         * explicitly checked to determine if Cogl is currently tracking the
         * age of #CoglOnscreen back buffer contents. If this feature is
         * missing then this function will always return 0.
         *
         * @returns The age of the buffer contents or 0 when the buffer
         *               contents are undefined.
         */
        get_buffer_age(): number;
        /**
         * Gets the value of the framebuffers frame counter. This is
         * a counter that increases by one each time
         * cogl_onscreen_swap_buffers() or cogl_onscreen_swap_region()
         * is called.
         *
         * @returns the current frame counter value
         */
        get_frame_counter(): number;
        get_window_handles(device_out?: any | null, window_out?: any | null): boolean;
        /**
         * Implementation for https://www.khronos.org/registry/EGL/extensions/KHR/EGL_KHR_partial_update.txt
         * This immediately queues state to OpenGL that will be used for the
         * next swap.
         * This needs to be called every frame.
         *
         * The expected values are independent of any viewport transforms applied to
         * the framebuffer.
         *
         * @param region A region representing damage
         */
        queue_damage_region(region: Mtk.Region): void;
        /**
         * Removes a callback and associated user data that were previously
         * registered using cogl_onscreen_add_frame_callback().
         *
         * If a destroy callback was passed to
         * cogl_onscreen_add_frame_callback() to destroy the user data then
         * this will get called.
         *
         * @param closure A #CoglFrameClosure returned from
         *           cogl_onscreen_add_frame_callback()
         */
        remove_frame_callback(closure: Cogl.FrameClosure): void;
        /**
         * Swaps the current back buffer being rendered too, to the front for display.
         *
         * This function also implicitly discards the contents of the color, depth and
         * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
         * significance of the discard is that you should not expect to be able to
         * start a new frame that incrementally builds on the contents of the previous
         * frame.
         *
         * It is highly recommended that applications use
         * cogl_onscreen_swap_buffers_with_damage() instead whenever possible
         * and also use the cogl_onscreen_get_buffer_age() api so they can
         * perform incremental updates to older buffers instead of having to
         * render a full buffer for every frame.
         *
         * @param frame_info
         * @param user_data
         */
        swap_buffers(frame_info: Cogl.FrameInfo, user_data?: any | null): void;
        /**
         * Swaps the current back buffer being rendered too, to the front for
         * display and provides information to any system compositor about
         * what regions of the buffer have changed (damage) with respect to
         * the last swapped buffer.
         *
         * This function has the same semantics as
         * cogl_framebuffer_swap_buffers() except that it additionally allows
         * applications to pass a damage region which may be used to minimize how much
         * of the screen is redrawn.
         *
         * For example if your application is only animating a small object in
         * the corner of the screen and everything else is remaining static
         * then it can help the compositor to know that only the bottom right
         * corner of your newly swapped buffer has really changed with respect
         * to your previously swapped front buffer.
         *
         * If `region` is NULL then the whole buffer will implicitly be
         * reported as damaged as if cogl_onscreen_swap_buffers() had been
         * called.
         *
         * This function also implicitly discards the contents of the color,
         * depth and stencil buffers as if cogl_framebuffer_discard_buffers()
         * were used. The significance of the discard is that you should not
         * expect to be able to start a new frame that incrementally builds on
         * the contents of the previous frame. If you want to perform
         * incremental updates to older back buffers then please refer to the
         * cogl_onscreen_get_buffer_age() api.
         *
         * Whenever possible it is recommended that applications use this
         * function instead of cogl_onscreen_swap_buffers() to improve
         * performance when running under a compositor.
         *
         * It is highly recommended to use this API in conjunction with
         * the cogl_onscreen_get_buffer_age() api so that your application can
         * perform incremental rendering based on old back buffers.
         *
         * @param region A region representing damage
         * @param info
         * @param user_data
         */
        swap_buffers_with_damage(region: Mtk.Region, info: Cogl.FrameInfo, user_data?: any | null): void;
        /**
         * Swaps a region of the back buffer being rendered too, to the front for
         * display.
         *
         * This function also implicitly discards the contents of the color, depth and
         * stencil buffers as if cogl_framebuffer_discard_buffers() were used. The
         * significance of the discard is that you should not expect to be able to
         * start a new frame that incrementally builds on the contents of the previous
         * frame.
         *
         * @param region A region
         * @param info
         * @param user_data
         */
        swap_region(region: Mtk.Region, info: Cogl.FrameInfo, user_data?: any | null): void;
    }
    class Pipeline extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Pipeline>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Pipeline.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Pipeline.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(context: Cogl.Context): Cogl.Pipeline;
        // Signals
        connect<K extends keyof Cogl.Pipeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Pipeline.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Pipeline.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Pipeline.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Pipeline.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Pipeline.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Adds a shader snippet that will hook on to the given layer of the
         * pipeline. The exact part of the pipeline that the snippet wraps
         * around depends on the hook that is given to
         * cogl_snippet_new(). Note that some hooks can't be used with a layer
         * and need to be added with cogl_pipeline_add_snippet() instead.
         *
         * @param layer The layer to hook the snippet to
         * @param snippet A #CoglSnippet
         */
        add_layer_snippet(layer: number, snippet: Cogl.Snippet): void;
        /**
         * Adds a shader snippet to `pipeline`. The snippet will wrap around or
         * replace some part of the pipeline as defined by the hook point in
         * `snippet`. Note that some hook points are specific to a layer and
         * must be added with cogl_pipeline_add_layer_snippet() instead.
         *
         * @param snippet The #CoglSnippet to add to the vertex processing hook
         */
        add_snippet(snippet: Cogl.Snippet): void;
        /**
         * Creates a new pipeline with the configuration copied from the
         * source pipeline.
         *
         * We would strongly advise developers to always aim to use
         * cogl_pipeline_copy() instead of cogl_pipeline_new() whenever there will
         * be any similarity between two pipelines. Copying a pipeline helps Cogl
         * keep track of a pipelines ancestry which we may use to help minimize GPU
         * state changes.
         *
         * @returns a pointer to the newly allocated #CoglPipeline
         */
        copy(): Cogl.Pipeline;
        /**
         * Iterates all the layer indices of the given `pipeline`.
         *
         * @param callback A #CoglPipelineLayerCallback
         *            to be called for each layer index
         */
        foreach_layer(callback: Cogl.PipelineLayerCallback): void;
        get_alpha_test_function(): Cogl.PipelineAlphaFunc;
        get_alpha_test_reference(): number;
        /**
         * Retrieves the current pipeline color.
         */
        get_color(): [Cogl.Color];
        get_cull_face_mode(): Cogl.PipelineCullFaceMode;
        /**
         * Retrieves the current depth state configuration for the given
         * `pipeline` as previously set using cogl_pipeline_set_depth_state().
         */
        get_depth_state(): [Cogl.DepthState];
        /**
         * The order of the vertices within a primitive specifies whether it
         * is considered to be front or back facing. This function specifies
         * which order is considered to be the front
         * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
         * primitives with vertices in a counter-clockwise order and
         * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
         * %COGL_WINDING_COUNTER_CLOCKWISE.
         *
         * @returns The `pipeline` front face winding
         */
        get_front_face_winding(): Cogl.Winding;
        /**
         * Returns the decimation and interpolation filters used when a texture is
         * drawn at other scales than 100%.
         *
         * @param layer_index the layer number to change.
         */
        get_layer_filters(layer_index: number): [Cogl.PipelineFilter, Cogl.PipelineFilter];
        /**
         * Gets whether point sprite coordinate generation is enabled for this
         * texture layer.
         *
         * @returns whether the texture coordinates will be replaced with
         * point sprite coordinates.
         * @param layer_index the layer number to check.
         */
        get_layer_point_sprite_coords_enabled(layer_index: number): boolean;
        get_layer_texture(layer_index: number): Cogl.Texture;
        /**
         * Returns the wrap mode for the 's' coordinate of texture lookups on this
         * layer.
         *
         * @returns the wrap mode for the 's' coordinate of texture lookups on
         * this layer.
         * @param layer_index the layer number to change.
         */
        get_layer_wrap_mode_s(layer_index: number): Cogl.PipelineWrapMode;
        /**
         * Returns the wrap mode for the 't' coordinate of texture lookups on this
         * layer.
         *
         * @returns the wrap mode for the 't' coordinate of texture lookups on
         * this layer.
         * @param layer_index the layer number to change.
         */
        get_layer_wrap_mode_t(layer_index: number): Cogl.PipelineWrapMode;
        /**
         * Retrieves the number of layers defined for the given `pipeline`
         *
         * @returns the number of layers
         */
        get_n_layers(): number;
        get_name(): string;
        get_per_vertex_point_size(): boolean;
        /**
         * Get the size of points drawn when %COGL_VERTICES_MODE_POINTS is
         * used with the vertex buffer API.
         *
         * @returns the point size of the `pipeline`.
         */
        get_point_size(): number;
        /**
         * This is used to get an integer representing the uniform with the
         * name `uniform_name`. The integer can be passed to functions such as
         * cogl_pipeline_set_uniform_1f() to set the value of a uniform.
         *
         * This function will always return a valid integer. Ie, unlike
         * OpenGL, it does not return -1 if the uniform is not available in
         * this pipeline so it can not be used to test whether uniforms are
         * present. It is not necessary to set the program on the pipeline
         * before calling this function.
         *
         * @returns A integer representing the location of the given uniform.
         * @param uniform_name The name of a uniform
         */
        get_uniform_location(uniform_name: string): number;
        /**
         * Queries what user program has been associated with the given
         * `pipeline` using cogl_pipeline_set_user_program().
         *
         * @returns The current user program or %NULL.
         */
        get_user_program(): Cogl.Program;
        has_capability(domain: GLib.Quark, capability: number): boolean;
        /**
         * This function removes a layer from your pipeline
         *
         * @param layer_index Specifies the layer you want to remove
         */
        remove_layer(layer_index: number): void;
        /**
         * Before a primitive is blended with the framebuffer, it goes through an
         * alpha test stage which lets you discard fragments based on the current
         * alpha value. This function lets you change the function used to evaluate
         * the alpha channel, and thus determine which fragments are discarded
         * and which continue on to the blending stage.
         *
         * The default is %COGL_PIPELINE_ALPHA_FUNC_ALWAYS
         *
         * @param alpha_func A `CoglPipelineAlphaFunc` constant
         * @param alpha_reference A reference point that the chosen alpha function uses
         *   to compare incoming fragments to.
         */
        set_alpha_test_function(alpha_func: Cogl.PipelineAlphaFunc | null, alpha_reference: number): void;
        /**
         * Blending occurs after the alpha test function, and combines fragments with
         * the framebuffer.
         *
         * Currently the only blend function Cogl exposes is ADD(). So any valid
         * blend statements will be of the form:
         *
         * ```
         *   &lt;channel-mask&gt;=ADD(SRC_COLOR*(&lt;factor&gt;), DST_COLOR*(&lt;factor&gt;))
         * ```
         *
         * This is the list of source-names usable as blend factors:
         *
         * - `SRC_COLOR`: The color of the incoming fragment
         * - `DST_COLOR`: The color of the framebuffer
         * - `CONSTANT`: The constant set via cogl_pipeline_set_blend_constant()
         *
         * These can also be used as factors:
         *
         * - `0`: (0, 0, 0, 0)
         * - `1`: (1, 1, 1, 1)
         * - `SRC_ALPHA_SATURATE_FACTOR`: (f,f,f,1) where `f = MIN(SRC_COLOR[A],1-DST_COLOR[A])`
         *
         * Remember; all color components are normalized to the range [0, 1]
         * before computing the result of blending.
         *
         * - Blend Strings/1:
         * Blend a non-premultiplied source over a destination with
         * premultiplied alpha:
         *   ```
         * "RGB = ADD(SRC_COLOR*(SRC_COLOR[A]), DST_COLOR*(1-SRC_COLOR[A]))"
         * "A   = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
         *   ```
         *
         * Blend Strings/2:
         *   Blend a premultiplied source over a destination with
         *   premultiplied alpha
         *   ```
         * "RGBA = ADD(SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))"
         *   ```
         *
         * The default blend string is:
         * ```
         *    RGBA = ADD (SRC_COLOR, DST_COLOR*(1-SRC_COLOR[A]))
         * ```
         *
         * That gives normal alpha-blending when the calculated color for the pipeline
         * is in premultiplied form.
         *
         * @returns %TRUE if the blend string was successfully parsed, and the
         *   described blending is supported by the underlying driver/hardware. If
         *   there was an error, %FALSE is returned and `error` is set accordingly (if
         *   present).
         * @param blend_string A Cogl blend string
         *   describing the desired blend function.
         */
        set_blend(blend_string: string): boolean;
        /**
         * When blending is setup to reference a CONSTANT blend factor then
         * blending will depend on the constant set with this function.
         *
         * @param constant_color The constant color you want
         */
        set_blend_constant(constant_color: Cogl.Color): void;
        /**
         * Sets the basic color of the pipeline, used when no lighting is enabled.
         *
         * Note that if you don't add any layers to the pipeline then the color
         * will be blended unmodified with the destination; the default blend
         * expects premultiplied colors: for example, use (0.5, 0.0, 0.0, 0.5) for
         * semi-transparent red. See cogl_color_premultiply().
         *
         * The default value is (1.0, 1.0, 1.0, 1.0)
         *
         * @param color The components of the color
         */
        set_color(color: Cogl.Color): void;
        /**
         * Sets which faces will be culled when drawing. Face culling can be
         * used to increase efficiency by avoiding drawing faces that would
         * get overridden. For example, if a model has gaps so that it is
         * impossible to see the inside then faces which are facing away from
         * the screen will never be seen so there is no point in drawing
         * them. This can be achieved by setting the cull face mode to
         * %COGL_PIPELINE_CULL_FACE_MODE_BACK.
         *
         * Face culling relies on the primitives being drawn with a specific
         * order to represent which faces are facing inside and outside the
         * model. This order can be specified by calling
         * cogl_pipeline_set_front_face_winding().
         *
         * @param cull_face_mode The new mode to set
         */
        set_cull_face_mode(cull_face_mode: Cogl.PipelineCullFaceMode | null): void;
        /**
         * This commits all the depth state configured in `state` struct to the
         * given `pipeline`. The configuration values are copied into the
         * pipeline so there is no requirement to keep the #CoglDepthState
         * struct around if you don't need it any more.
         *
         * Note: Since some platforms do not support the depth range feature
         * it is possible for this function to fail and report an `error`.
         *
         * @returns %TRUE if the GPU supports all the given `state` else %FALSE
         *          and returns an `error`.
         * @param state A #CoglDepthState struct
         */
        set_depth_state(state: Cogl.DepthState): boolean;
        /**
         * The order of the vertices within a primitive specifies whether it
         * is considered to be front or back facing. This function specifies
         * which order is considered to be the front
         * faces. %COGL_WINDING_COUNTER_CLOCKWISE sets the front faces to
         * primitives with vertices in a counter-clockwise order and
         * %COGL_WINDING_CLOCKWISE sets them to be clockwise. The default is
         * %COGL_WINDING_COUNTER_CLOCKWISE.
         *
         * @param front_winding the winding order
         */
        set_front_face_winding(front_winding: Cogl.Winding | null): void;
        /**
         * These are all the functions available for texture combining:
         *
         * - `REPLACE(arg0) = arg0`
         * - `MODULATE(arg0, arg1) = arg0 x arg1`
         * - `ADD(arg0, arg1) = arg0 + arg1`
         * - `ADD_SIGNED(arg0, arg1) = arg0 + arg1 - 0.5`
         * - `INTERPOLATE(arg0, arg1, arg2) = arg0 x arg2 + arg1 x (1 - arg2)`
         * - `SUBTRACT(arg0, arg1) = arg0 - arg1`
         * -
         * ```
         *  DOT3_RGB(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
         *                              (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
         *                              (arg0[B] - 0.5)) * (arg1[B] - 0.5))
         * ```
         * -
         * ```
         *  DOT3_RGBA(arg0, arg1) = 4 x ((arg0[R] - 0.5)) * (arg1[R] - 0.5) +
         *                               (arg0[G] - 0.5)) * (arg1[G] - 0.5) +
         *                               (arg0[B] - 0.5)) * (arg1[B] - 0.5))
         * ```
         *
         * The valid source names for texture combining are:
         *
         * - `TEXTURE`: Use the color from the current texture layer
         * - `TEXTURE_0, TEXTURE_1, etc`: Use the color from the specified texture layer
         * - `CONSTANT`: Use the color from the constant given with
         *     [method`Cogl`.Pipeline.set_layer_combine_constant]
         * - `PRIMARY`: Use the color of the pipeline as set with
         *     [method`Cogl`.Pipeline.set_color]
         * - `PREVIOUS`: Either use the texture color from the previous layer, or
         *     if this is layer 0, use the color of the pipeline as set with
         *     [method`Cogl`.Pipeline.set_color]
         *
         * Layer Combine Examples:
         *
         * This is effectively what the default blending is:
         *
         * ```
         * RGBA = MODULATE (PREVIOUS, TEXTURE)
         * ```
         *
         * This could be used to cross-fade between two images, using
         * the alpha component of a constant as the interpolator. The constant
         * color is given by calling [method`Cogl`.Pipeline.set_layer_combine_constant].
         *
         * ```
         * RGBA = INTERPOLATE (PREVIOUS, TEXTURE, CONSTANT[A])
         * ```
         *
         * You can't give a multiplication factor for arguments as you can
         * with blending.
         *
         * @returns %TRUE if the blend string was successfully parsed, and the
         *   described texture combining is supported by the underlying driver and
         *   or hardware. On failure, %FALSE is returned and `error` is set
         * @param layer_index Specifies the layer you want define a combine function for
         * @param blend_string A Cogl blend string describing the desired
         *  texture combine function.
         */
        set_layer_combine(layer_index: number, blend_string: string): boolean;
        /**
         * When you are using the 'CONSTANT' color source in a layer combine
         * description then you can use this function to define its value.
         *
         * @param layer_index Specifies the layer you want to specify a constant used
         *               for texture combining
         * @param constant The constant color you want
         */
        set_layer_combine_constant(layer_index: number, constant: Cogl.Color): void;
        /**
         * Changes the decimation and interpolation filters used when a texture is
         * drawn at other scales than 100%.
         *
         * It is an error to pass anything other than
         * %COGL_PIPELINE_FILTER_NEAREST or %COGL_PIPELINE_FILTER_LINEAR as
         * magnification filters since magnification doesn't ever need to
         * reference values stored in the mipmap chain.
         *
         * @param layer_index the layer number to change.
         * @param min_filter the filter used when scaling a texture down.
         * @param mag_filter the filter used when magnifying a texture.
         */
        set_layer_filters(
            layer_index: number,
            min_filter: Cogl.PipelineFilter | null,
            mag_filter: Cogl.PipelineFilter | null,
        ): void;
        /**
         * This function lets you set a matrix that can be used to e.g. translate
         * and rotate a single layer of a pipeline used to fill your geometry.
         *
         * @param layer_index the index for the layer inside `pipeline`
         * @param matrix the transformation matrix for the layer
         */
        set_layer_matrix(layer_index: number, matrix: Graphene.Matrix): void;
        set_layer_max_mipmap_level(layer: number, max_level: number): void;
        /**
         * Sets the texture for this layer to be the default texture for the
         * given type. The default texture is a 1x1 pixel white texture.
         *
         * This function is mostly useful if you want to create a base
         * pipeline that you want to create multiple copies from using
         * cogl_pipeline_copy(). In that case this function can be used to
         * specify the texture type so that any pipeline copies can share the
         * internal texture type state for efficiency.
         *
         * @param layer_index The layer number to modify
         */
        set_layer_null_texture(layer_index: number): void;
        /**
         * When rendering points, if `enable` is %TRUE then the texture
         * coordinates for this layer will be replaced with coordinates that
         * vary from 0.0 to 1.0 across the primitive. The top left of the
         * point will have the coordinates 0.0,0.0 and the bottom right will
         * have 1.0,1.0. If `enable` is %FALSE then the coordinates will be
         * fixed for the entire point.
         *
         * @returns %TRUE if the function succeeds, %FALSE otherwise.
         * @param layer_index the layer number to change.
         * @param enable whether to enable point sprite coord generation.
         */
        set_layer_point_sprite_coords_enabled(layer_index: number, enable: boolean): boolean;
        set_layer_texture(layer_index: number, texture: Cogl.Texture): void;
        /**
         * Sets the wrap mode for all three coordinates of texture lookups on
         * this layer. This is equivalent to calling
         * cogl_pipeline_set_layer_wrap_mode_s() and
         * cogl_pipeline_set_layer_wrap_mode_t() separately.
         *
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode(layer_index: number, mode: Cogl.PipelineWrapMode | null): void;
        /**
         * Sets the wrap mode for the 's' coordinate of texture lookups on this layer.
         *
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_s(layer_index: number, mode: Cogl.PipelineWrapMode | null): void;
        /**
         * Sets the wrap mode for the 't' coordinate of texture lookups on this layer.
         *
         * @param layer_index the layer number to change.
         * @param mode the new wrap mode
         */
        set_layer_wrap_mode_t(layer_index: number, mode: Cogl.PipelineWrapMode | null): void;
        /**
         * Sets whether to use a per-vertex point size or to use the value set
         * by cogl_pipeline_set_point_size(). If per-vertex point size is
         * enabled then the point size can be set for an individual point
         * either by drawing with a #CoglAttribute with the name
         * ‘cogl_point_size_in’ or by writing to the GLSL builtin
         * ‘cogl_point_size_out’ from a vertex shader snippet.
         *
         * If per-vertex point size is enabled and this attribute is not used
         * and cogl_point_size_out is not written to then the results are
         * undefined.
         *
         * @returns %TRUE if the change succeeded or %FALSE otherwise
         * @param enable whether to enable per-vertex point size
         */
        set_per_vertex_point_size(enable: boolean): boolean;
        /**
         * Changes the size of points drawn when %COGL_VERTICES_MODE_POINTS is
         * used with the attribute buffer API. Note that typically the GPU
         * will only support a limited minimum and maximum range of point
         * sizes. If the chosen point size is outside that range then the
         * nearest value within that range will be used instead. The size of a
         * point is in screen space so it will be the same regardless of any
         * transformations.
         *
         * If the point size is set to 0.0 then drawing points with the
         * pipeline will have undefined results. This is the default value so
         * if an application wants to draw points it must make sure to use a
         * pipeline that has an explicit point size set on it.
         *
         * @param point_size the new point size.
         */
        set_point_size(point_size: number): void;
        /**
         * Set a pipeline name. It may be used for debugging or logging purposes. The
         * string must be a static string, and string. It will not be copied.
         *
         * @param name A descriptive name
         */
        set_static_name(name: string): void;
        /**
         * Sets a new value for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given value will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function should be used to set uniforms that are of type
         * float. It can also be used to set a single member of a float array
         * uniform.
         *
         * @param uniform_location The uniform's location identifier
         * @param value The new value for the uniform
         */
        set_uniform_1f(uniform_location: number, value: number): void;
        /**
         * Sets a new value for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given value will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function should be used to set uniforms that are of type
         * int. It can also be used to set a single member of a int array
         * uniform or a sampler uniform.
         *
         * @param uniform_location The uniform's location identifier
         * @param value The new value for the uniform
         */
        set_uniform_1i(uniform_location: number, value: number): void;
        /**
         * Sets new values for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given values will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function can be used to set any floating point type uniform,
         * including float arrays and float vectors. For example, to set a
         * single vec4 uniform you would use 4 for `n_components` and 1 for
         * `count`. To set an array of 8 float values, you could use 1 for
         * `n_components` and 8 for `count`.
         *
         * @param uniform_location The uniform's location identifier
         * @param n_components The number of components in the corresponding uniform's type
         * @param count The number of values to set
         * @param value Pointer to the new values to set
         */
        set_uniform_float(uniform_location: number, n_components: number, count: number, value: number): void;
        /**
         * Sets new values for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given values will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function can be used to set any integer type uniform,
         * including int arrays and int vectors. For example, to set a single
         * ivec4 uniform you would use 4 for `n_components` and 1 for
         * `count`. To set an array of 8 int values, you could use 1 for
         * `n_components` and 8 for `count`.
         *
         * @param uniform_location The uniform's location identifier
         * @param n_components The number of components in the corresponding uniform's type
         * @param count The number of values to set
         * @param value Pointer to the new values to set
         */
        set_uniform_int(uniform_location: number, n_components: number, count: number, value: number): void;
        /**
         * Sets new values for the uniform at `uniform_location`. If this
         * pipeline has a user program attached and is later used as a source
         * for drawing, the given values will be assigned to the uniform which
         * can be accessed from the shader's source. The value for
         * `uniform_location` should be retrieved from the string name of the
         * uniform by calling cogl_pipeline_get_uniform_location().
         *
         * This function can be used to set any matrix type uniform, including
         * matrix arrays. For example, to set a single mat4 uniform you would
         * use 4 for `dimensions` and 1 for `count`. To set an array of 8
         * mat3 values, you could use 3 for `dimensions` and 8 for `count`.
         *
         * If `transpose` is %FALSE then the matrix is expected to be in
         * column-major order or if it is %TRUE then the matrix is in
         * row-major order. You can pass a #graphene_matrix_t by calling by passing
         * the result of graphene_matrix_to_float() in `value` and setting
         * `transpose` to %FALSE.
         *
         * @param uniform_location The uniform's location identifier
         * @param dimensions The size of the matrix
         * @param count The number of values to set
         * @param transpose Whether to transpose the matrix
         * @param value Pointer to the new values to set
         */
        set_uniform_matrix(
            uniform_location: number,
            dimensions: number,
            count: number,
            transpose: boolean,
            value: number,
        ): void;
        /**
         * Associates a linked CoglProgram with the given pipeline so that the
         * program can take full control of vertex and/or fragment processing.
         *
         * This is an example of how it can be used to associate an ARBfp
         * program with a #CoglPipeline:
         * ```c
         * CoglShader *shader;
         * CoglProgram *program;
         * CoglPipeline *pipeline;
         *
         * shader = cogl_shader_new (COGL_SHADER_TYPE_FRAGMENT);
         * cogl_shader_source (shader,
         *                     "!!ARBfp1.0\n"
         *                     "MOV result.color,fragment.color;\n"
         *                     "END\n");
         *
         * program = cogl_program_new ();
         * cogl_program_attach_shader (program, shader);
         * cogl_program_link (program);
         *
         * pipeline = cogl_pipeline_new ();
         * cogl_pipeline_set_user_program (pipeline, program);
         *
         * cogl_set_source_color4ub (0xff, 0x00, 0x00, 0xff);
         * cogl_rectangle (0, 0, 100, 100);
         * ```
         *
         * It is possibly worth keeping in mind that this API is not part of
         * the long term design for how we want to expose shaders to Cogl
         * developers (We are planning on deprecating the cogl_program and
         * cogl_shader APIs in favour of a "snippet" framework) but in the
         * meantime we hope this will handle most practical GLSL and ARBfp
         * requirements.
         *
         * @param program A linked CoglProgram
         */
        set_user_program(program: Cogl.Program): void;
    }
    class PixelBuffer extends Buffer {
        static '$gtype': GObject.GType<PixelBuffer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.PixelBuffer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.PixelBuffer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(context: Cogl.Context, data: Uint8Array[] | string): Cogl.PixelBuffer;
        // Signals
        connect<K extends keyof Cogl.PixelBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.PixelBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.PixelBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.PixelBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.PixelBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.PixelBuffer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class Primitive extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Primitive>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Primitive.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Primitive.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_p2(context: Cogl.Context, mode: Cogl.VerticesMode, data: Cogl.VertexP2[]): Cogl.Primitive;
        static new_p2c4(context: Cogl.Context, mode: Cogl.VerticesMode, data: Cogl.VertexP2C4[]): Cogl.Primitive;
        static new_p2t2(context: Cogl.Context, mode: Cogl.VerticesMode, data: Cogl.VertexP2T2[]): Cogl.Primitive;
        static new_p3(context: Cogl.Context, mode: Cogl.VerticesMode, data: Cogl.VertexP3[]): Cogl.Primitive;
        static new_p3t2(context: Cogl.Context, mode: Cogl.VerticesMode, data: Cogl.VertexP3T2[]): Cogl.Primitive;
        static new_with_attributes(
            mode: Cogl.VerticesMode,
            n_vertices: number,
            attributes: Cogl.Attribute[],
        ): Cogl.Primitive;
        // Signals
        connect<K extends keyof Cogl.Primitive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Primitive.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Primitive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Primitive.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Primitive.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Primitive.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Draws the given `primitive` geometry to the specified destination
         * `framebuffer` using the graphics processing state described by `pipeline`.
         *
         * This drawing api doesn't support high-level meta texture types such
         * as #CoglTexture2DSliced so it is the user's responsibility to
         * ensure that only low-level textures that can be directly sampled by
         * a GPU such as #CoglTexture2D are associated with layers of the given
         * `pipeline`.
         *
         * @param framebuffer A destination #CoglFramebuffer
         * @param pipeline A #CoglPipeline state object
         */
        draw(framebuffer: Cogl.Framebuffer, pipeline: Cogl.Pipeline): void;
        set_first_vertex(first_vertex: number): void;
        /**
         * Associates a sequence of #CoglIndices with the given `primitive`.
         *
         * #CoglIndices provide a way to virtualize your real vertex data by
         * providing a sequence of indices that index into your real vertex
         * data. The GPU will walk though the index values to indirectly
         * lookup the data for each vertex instead of sequentially walking
         * through the data directly. This lets you save memory by indexing
         * shared data multiple times instead of duplicating the data.
         *
         * The value passed as `n_indices` will simply update the
         * #CoglPrimitive `n_vertices` property as if
         * cogl_primitive_set_n_vertices() were called. This property defines
         * the number of vertices to draw or, put another way, how many
         * indices should be read from `indices` when drawing.
         *
         * The #CoglPrimitive `first_vertex` property
         * also affects drawing with indices by defining the first entry of the
         * indices to start drawing from.
         *
         * @param indices A #CoglIndices array
         */
        set_indices(indices: Cogl.Indices[]): void;
        /**
         * Specifies how many vertices should be read when drawing the given
         * `primitive`.
         *
         * Usually this value is set implicitly when associating vertex data
         * or indices with a #CoglPrimitive.
         *
         * To be clear; it doesn't refer to the number of vertices - in
         * terms of data - associated with the primitive it's just the number
         * of vertices to read and draw.
         *
         * @param n_vertices The number of vertices to read when drawing.
         */
        set_n_vertices(n_vertices: number): void;
    }
    class Program extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Program>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Program.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Program.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Cogl.Program;
        // Signals
        connect<K extends keyof Cogl.Program.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Program.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Program.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Program.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Program.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Program.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Attaches a shader to a program object. A program can have multiple
         * vertex or fragment shaders but only one of them may provide a
         * main() function. It is allowed to use a program with only a vertex
         * shader or only a fragment shader.
         *
         * @param shader a #CoglShader for a vertex of fragment shader.
         */
        attach_shader(shader: Cogl.Shader): void;
        /**
         * Retrieve the location (offset) of a uniform variable in a shader program,
         * a uniform is a variable that is constant for all vertices/fragments for a
         * shader object and is possible to modify as an external parameter.
         *
         * @returns the offset of a uniform in a specified program.
         * @param uniform_name the name of a uniform.
         */
        get_uniform_location(uniform_name: string): number;
        /**
         * Links a program making it ready for use. Note that calling this
         * function is optional. If it is not called the program will
         * automatically be linked the first time it is used.
         */
        link(): void;
        /**
         * Changes the value of a floating point uniform for the given linked
         * `program`.
         *
         * @param uniform_location the uniform location retrieved from
         *    [method`Program`.get_uniform_location].
         * @param value the new value of the uniform.
         */
        set_uniform_1f(uniform_location: number, value: number): void;
        /**
         * Changes the value of an integer uniform for the given linked
         * `program`.
         *
         * @param uniform_location the uniform location retrieved from
         *    [method`Program`.get_uniform_location].
         * @param value the new value of the uniform.
         */
        set_uniform_1i(uniform_location: number, value: number): void;
        /**
         * Changes the value of a float vector uniform, or uniform array for
         * the given linked `program`.
         *
         * @param uniform_location the uniform location retrieved from
         *    [method`Program`.get_uniform_location].
         * @param n_components The number of components for the uniform. For
         * example with glsl you'd use 3 for a vec3 or 4 for a vec4.
         * @param value the new value of the uniform[s].
         */
        set_uniform_float(uniform_location: number, n_components: number, value: number[]): void;
        /**
         * Changes the value of a int vector uniform, or uniform array for
         * the given linked `program`.
         *
         * @param uniform_location the uniform location retrieved from
         *    [method`Program`.get_uniform_location].
         * @param n_components The number of components for the uniform. For
         * example with glsl you'd use 3 for a vec3 or 4 for a vec4.
         * @param value the new value of the uniform[s].
         */
        set_uniform_int(uniform_location: number, n_components: number, value: number[]): void;
        /**
         * Changes the value of a matrix uniform, or uniform array in the
         * given linked `program`.
         *
         * @param uniform_location the uniform location retrieved from
         *    [method`Program`.get_uniform_location].
         * @param dimensions The dimensions of the matrix. So for for example pass
         *    2 for a 2x2 matrix or 3 for 3x3.
         * @param transpose Whether to transpose the matrix when setting the uniform.
         * @param value the new value of the uniform.
         */
        set_uniform_matrix(uniform_location: number, dimensions: number, transpose: boolean, value: number[]): void;
    }
    class Renderer extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Renderer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Renderer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Renderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Cogl.Renderer;
        // Signals
        connect<K extends keyof Cogl.Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Renderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Renderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Renderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Renderer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        bind_api(): void;
        /**
         * Connects the configured `renderer`. Renderer connection isn't a
         * very active process, it basically just means validating that
         * any given constraint criteria can be satisfied and that a
         * usable driver and window system backend can be found.
         *
         * @returns %TRUE if there was no error while connecting the
         *               given `renderer`. %FALSE if there was an error.
         */
        connect(): boolean;
        connect(...args: never[]): any;
        get_custom_winsys_data(): any | null;
        /**
         * Queries what underlying driver is being used by Cogl.
         *
         * This may only be called on a connected #CoglRenderer.
         */
        get_driver_id(): Cogl.DriverId;
        get_implicit_drm_modifier(): number;
        /**
         * Gets a pointer to a given GL or GL ES extension function. This acts
         * as a wrapper around glXGetProcAddress() or whatever is the
         * appropriate function for the current backend.
         *
         * This function should not be used to query core opengl API
         * symbols since eglGetProcAddress for example doesn't allow this and
         * and may return a junk pointer if you do.
         *
         * @returns a pointer to the requested function or %NULL if the
         *   function is not available.
         * @param name the name of the function.
         */
        get_proc_address(name: string): any | null;
        get_winsys(): any | null;
        /**
         * Queries which window system backend Cogl has chosen to use.
         *
         * This may only be called on a connected #CoglRenderer.
         *
         * @returns The #CoglWinsysID corresponding to the chosen window
         *          system backend.
         */
        get_winsys_id(): Cogl.WinsysID;
        is_dma_buf_supported(): boolean;
        is_implicit_drm_modifier(modifier: number): boolean;
        /**
         * Requests that Cogl should try to use a specific underlying driver
         * for rendering.
         *
         * If you select an unsupported driver then cogl_renderer_connect()
         * will fail and report an error. Most applications should not
         * explicitly select a driver and should rely on Cogl automatically
         * choosing the driver.
         *
         * This may only be called on an un-connected #CoglRenderer.
         *
         * @param driver
         */
        set_driver(driver: Cogl.DriverId | null): void;
        set_winsys(winsys?: any | null): void;
    }
    class Scanout extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Scanout>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Scanout.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Scanout.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(scanout_buffer: Cogl.ScanoutBuffer, dst_rect: Mtk.Rectangle): Cogl.Scanout;
        // Signals
        connect<K extends keyof Cogl.Scanout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Scanout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Scanout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Scanout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Scanout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Scanout.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        blit_to_framebuffer(framebuffer: Cogl.Framebuffer, x: number, y: number): boolean;
        get_buffer(): Cogl.ScanoutBuffer;
        get_dst_rect(dst_rect: Mtk.Rectangle): void;
        get_src_rect(rect: Graphene.Rect): void;
        notify_failed(onscreen: Cogl.Onscreen): void;
        set_src_rect(rect: Graphene.Rect): void;
    }
    class Shader extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Shader>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Shader.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Shader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(shader_type: Cogl.ShaderType): Cogl.Shader;
        // Signals
        connect<K extends keyof Cogl.Shader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Shader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Shader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Shader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Shader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Shader.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the type of a shader
         *
         * @returns %COGL_SHADER_TYPE_VERTEX if the shader is a vertex processor
         *          or %COGL_SHADER_TYPE_FRAGMENT if the shader is a fragment processor
         */
        get_shader_type(): Cogl.ShaderType;
        /**
         * Replaces the current source associated with a shader with a new
         * one.
         *
         * @param source Shader source.
         */
        source(source: string): void;
    }
    class Snippet extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Snippet>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Snippet.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Snippet.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(hook: Cogl.SnippetHook, declarations?: string | null, post?: string | null): Cogl.Snippet;
        // Signals
        connect<K extends keyof Cogl.Snippet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Snippet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Snippet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Snippet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Snippet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Snippet.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        get_declarations(): string;
        get_hook(): Cogl.SnippetHook;
        get_post(): string;
        get_pre(): string;
        get_replace(): string;
        set_capability(domain: GLib.Quark, capability: number): void;
        /**
         * Sets a source string that will be inserted in the global scope of
         * the generated shader when this snippet is used on a pipeline. This
         * string is typically used to declare uniforms, attributes or
         * functions that will be used by the other parts of the snippets.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         *
         * @param declarations The new source string for the declarations section
         *   of this snippet.
         */
        set_declarations(declarations: string): void;
        /**
         * Sets a source string that will be inserted after the hook point in
         * the generated shader for the pipeline that this snippet is attached
         * to. Please see the documentation of each hook point in
         * #CoglPipeline for a description of how this string should be used.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         *
         * @param post The new source string for the post section of this snippet.
         */
        set_post(post: string): void;
        /**
         * Sets a source string that will be inserted before the hook point in
         * the generated shader for the pipeline that this snippet is attached
         * to. Please see the documentation of each hook point in
         * #CoglPipeline for a description of how this string should be used.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         *
         * @param pre The new source string for the pre section of this snippet.
         */
        set_pre(pre: string): void;
        /**
         * Sets a source string that will be used instead of any generated
         * source code or any previous snippets for this hook point. Please
         * see the documentation of each hook point in #CoglPipeline for a
         * description of how this string should be used.
         *
         * This function should only be called before the snippet is attached
         * to its first pipeline. After that the snippet should be considered
         * immutable.
         *
         * @param replace The new source string for the replace section of this snippet.
         */
        set_replace(replace: string): void;
    }
    class SubTexture extends Texture {
        static '$gtype': GObject.GType<SubTexture>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.SubTexture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.SubTexture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(
            ctx: Cogl.Context,
            parent_texture: Cogl.Texture,
            sub_x: number,
            sub_y: number,
            sub_width: number,
            sub_height: number,
        ): Cogl.SubTexture;
        // Signals
        connect<K extends keyof Cogl.SubTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.SubTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.SubTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.SubTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.SubTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.SubTexture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    abstract class Texture extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Texture>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Texture.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Texture.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof Cogl.Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Texture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Texture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Texture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Texture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Texture.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        static error_quark(): number;
        // Methods
        /**
         * Explicitly allocates the storage for the given `texture` which
         * allows you to be sure that there is enough memory for the
         * texture and if not then the error can be handled gracefully.
         *
         * Normally applications don't need to use this api directly
         * since the texture will be implicitly allocated when data is set on
         * the texture, or if the texture is attached to a #CoglOffscreen
         * framebuffer and rendered too.
         *
         * @returns %TRUE if the texture was successfully allocated,
         *               otherwise %FALSE and `error` will be updated if it
         *               wasn't %NULL.
         */
        allocate(): boolean;
        /**
         * Allows you to manually iterate the low-level textures that define a
         * given region of a high-level #CoglTexture.
         *
         * For example cogl_texture_2d_sliced_new_with_size() can be used to
         * create a meta texture that may slice a large image into multiple,
         * smaller power-of-two sized textures. These high level textures are
         * not directly understood by a GPU and so this API must be used to
         * manually resolve the underlying textures for drawing.
         *
         * All high level textures (#CoglAtlasTexture, #CoglSubTexture,
         * #CoglTexturePixmapX11, and #CoglTexture2DSliced) can be handled
         * consistently using this interface which greately simplifies
         * implementing primitives that support all texture types.
         *
         * For example if you use the cogl_rectangle() API then Cogl will
         * internally use this API to resolve the low level textures of any
         * meta textures you have associated with CoglPipeline layers.
         *
         * The low level drawing APIs such as cogl_primitive_draw()
         * don't understand the #CoglTexture interface and so it is your
         * responsibility to use this API to resolve all CoglPipeline textures
         * into low-level textures before drawing.
         *
         * For each low-level texture that makes up part of the given region
         * of the `meta_texture,` `callback` is called specifying how the
         * low-level texture maps to the original region.
         *
         * @param _tx_1 The top-left x coordinate of the region to iterate
         * @param _ty_1 The top-left y coordinate of the region to iterate
         * @param _tx_2 The bottom-right x coordinate of the region to iterate
         * @param _ty_2 The bottom-right y coordinate of the region to iterate
         * @param wrap_s The wrap mode for the x-axis
         * @param wrap_t The wrap mode for the y-axis
         * @param callback A #CoglTextureForeachCallback pointer to be called
         *            for each low-level texture within the specified region.
         */
        foreach_in_region(
            _tx_1: number,
            _ty_1: number,
            _tx_2: number,
            _ty_2: number,
            wrap_s: Cogl.PipelineWrapMode | null,
            wrap_t: Cogl.PipelineWrapMode | null,
            callback: Cogl.TextureForeachCallback,
        ): void;
        /**
         * Queries what components the given `texture` stores internally as set
         * via cogl_texture_set_components().
         *
         * For textures created by the ‘_with_size’ constructors the default
         * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
         * a %CoglBitmap or a data pointer default to the same components as
         * the pixel format of the data.
         */
        get_components(): Cogl.TextureComponents;
        get_context(): Cogl.Context;
        /**
         * Copies the pixel data from a cogl texture to system memory.
         *
         * Don't pass the value of cogl_texture_get_rowstride() as the
         * `rowstride` argument, the rowstride should be the rowstride you
         * want for the destination `data` buffer not the rowstride of the
         * source texture
         *
         * @returns the size of the texture data in bytes
         * @param format the #CoglPixelFormat to store the texture as.
         * @param rowstride the rowstride of `data` in bytes or pass 0 to calculate
         *             from the bytes-per-pixel of `format` multiplied by the
         *             `texture` width.
         * @param data memory location to write the `texture'`s contents,
         * or %NULL to only query the data size through the return value.
         */
        get_data(format: Cogl.PixelFormat | null, rowstride: number, data?: Uint8Array[] | null): number;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        get_format(): Cogl.PixelFormat;
        /**
         * Queries the GL handles for a GPU side texture through its #CoglTexture.
         *
         * If the texture is spliced the data for the first sub texture will be
         * queried.
         *
         * @returns %TRUE if the handle was successfully retrieved, %FALSE
         *   if the handle was invalid
         */
        get_gl_texture(): [boolean, number, number];
        /**
         * Queries the height of a cogl texture.
         *
         * @returns the height of the GPU side texture in pixels
         */
        get_height(): number;
        /**
         * Queries the pre-multiplied alpha status for internally stored red,
         * green and blue components for the given `texture` as set by
         * cogl_texture_set_premultiplied().
         *
         * By default the pre-multiplied state is `TRUE`.
         *
         * @returns %TRUE if red, green and blue components are
         *               internally stored pre-multiplied by the alpha
         *               value or %FALSE if not.
         */
        get_premultiplied(): boolean;
        /**
         * Queries the width of a cogl texture.
         *
         * @returns the width of the GPU side texture in pixels
         */
        get_width(): number;
        is_get_data_supported(): boolean;
        /**
         * Queries if a texture is sliced (stored as multiple GPU side tecture
         * objects).
         *
         * @returns %TRUE if the texture is sliced, %FALSE if the texture
         *   is stored as a single GPU texture
         */
        is_sliced(): boolean;
        /**
         * Affects the internal storage format for this texture by specifying
         * what components will be required for sampling later.
         *
         * This api affects how data is uploaded to the GPU since unused
         * components can potentially be discarded from source data.
         *
         * For textures created by the ‘_with_size’ constructors the default
         * is %COGL_TEXTURE_COMPONENTS_RGBA. The other constructors which take
         * a %CoglBitmap or a data pointer default to the same components as
         * the pixel format of the data.
         *
         * Note that the %COGL_TEXTURE_COMPONENTS_RG format is not available
         * on all drivers. The availability can be determined by checking for
         * the %COGL_FEATURE_ID_TEXTURE_RG feature. If this format is used on
         * a driver where it is not available then %COGL_TEXTURE_ERROR_FORMAT
         * will be raised when the texture is allocated. Even if the feature
         * is not available then %COGL_PIXEL_FORMAT_RG_88 can still be used as
         * an image format as long as %COGL_TEXTURE_COMPONENTS_RG isn't used
         * as the texture's components.
         *
         * @param components
         */
        set_components(components: Cogl.TextureComponents | null): void;
        /**
         * `texture` a #CoglTexture.
         * Sets all the pixels for a given mipmap `level` by copying the pixel
         * data pointed to by the `data` argument into the given `texture`.
         *
         * `data` should point to the first pixel to copy corresponding
         * to the top left of the mipmap `level` being set.
         *
         * If `rowstride` equals 0 then it will be automatically calculated
         * from the width of the mipmap level and the bytes-per-pixel for the
         * given `format`.
         *
         * A mipmap `level` of 0 corresponds to the largest, base image of a
         * texture and `level` 1 is half the width and height of level 0. If
         * dividing any dimension of the previous level by two results in a
         * fraction then round the number down (floor()), but clamp to 1
         * something like this:
         *
         * ```
         *  next_width = MAX (1, floor (prev_width));
         * ```
         *
         * You can determine the number of mipmap levels for a given texture
         * like this:
         *
         * ```
         *  n_levels = 1 + floor (log2 (max_dimension));
         * ```
         *
         * Where %max_dimension is the larger of cogl_texture_get_width() and
         * cogl_texture_get_height().
         *
         * It is an error to pass a `level` number >= the number of levels that
         * `texture` can have according to the above calculation.
         *
         * Since the storage for a #CoglTexture is allocated lazily then
         * if the given `texture` has not previously been allocated then this
         * api can return %FALSE and throw an exceptional `error` if there is
         * not enough memory to allocate storage for `texture`.
         *
         * @returns %TRUE if the data upload was successful, and
         *               %FALSE otherwise
         * @param format the #CoglPixelFormat used in the source `data` buffer.
         * @param rowstride rowstride of the source `data` buffer (computed from
         *             the texture width and `format` if it equals 0)
         * @param data the source data, pointing to the first top-left pixel to set
         * @param level The mipmap level to update (Normally 0 for the largest,
         *         base texture)
         */
        set_data(
            format: Cogl.PixelFormat | null,
            rowstride: number,
            data: Uint8Array[] | string,
            level: number,
        ): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        /**
         * Affects the internal storage format for this texture by specifying
         * whether red, green and blue color components should be stored as
         * pre-multiplied alpha values.
         *
         * This api affects how data is uploaded to the GPU since Cogl will
         * convert source data to have premultiplied or unpremultiplied
         * components according to this state.
         *
         * For example if you create a texture via
         * cogl_texture_2d_new_with_size() and then upload data via
         * cogl_texture_set_data() passing a source format of
         * %COGL_PIXEL_FORMAT_RGBA_8888 then Cogl will internally multiply the
         * red, green and blue components of the source data by the alpha
         * component, for each pixel so that the internally stored data has
         * pre-multiplied alpha components. If you instead upload data that
         * already has pre-multiplied components by passing
         * %COGL_PIXEL_FORMAT_RGBA_8888_PRE as the source format to
         * cogl_texture_set_data() then the data can be uploaded without being
         * converted.
         *
         * By default the `premultipled` state is `TRUE`.
         *
         * @param premultiplied Whether any internally stored red, green or blue
         *                 components are pre-multiplied by an alpha
         *                 component.
         */
        set_premultiplied(premultiplied: boolean): void;
        /**
         * Sets the pixels in a rectangular subregion of `texture` from an in-memory
         * buffer containing pixel data.
         *
         * The region set can't be larger than the source `data`
         *
         * @returns %TRUE if the subregion upload was successful, and
         *   %FALSE otherwise
         * @param src_x upper left coordinate to use from source data.
         * @param src_y upper left coordinate to use from source data.
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less
         *   than or equal to `width)`
         * @param dst_height height of destination region to write. (Must be less
         *   than or equal to `height)`
         * @param width width of source data buffer.
         * @param height height of source data buffer.
         * @param format the #CoglPixelFormat used in the source buffer.
         * @param rowstride rowstride of source buffer (computed from width if none
         * specified)
         * @param data the actual pixel data.
         */
        set_region(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            dst_width: number,
            dst_height: number,
            width: number,
            height: number,
            format: Cogl.PixelFormat | null,
            rowstride: number,
            data: Uint8Array[] | string,
        ): boolean;
        /**
         * Copies a specified source region from `bitmap` to the position
         * (`src_x,` `src_y)` of the given destination texture `handle`.
         *
         * The region updated can't be larger than the source
         * bitmap
         *
         * @returns %TRUE if the subregion upload was successful, and
         *   %FALSE otherwise
         * @param src_x upper left coordinate to use from the source bitmap.
         * @param src_y upper left coordinate to use from the source bitmap
         * @param dst_x upper left destination horizontal coordinate.
         * @param dst_y upper left destination vertical coordinate.
         * @param dst_width width of destination region to write. (Must be less
         *   than or equal to the bitmap width)
         * @param dst_height height of destination region to write. (Must be less
         *   than or equal to the bitmap height)
         * @param bitmap The source bitmap to read from
         */
        set_region_from_bitmap(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            dst_width: number,
            dst_height: number,
            bitmap: Cogl.Bitmap,
        ): boolean;
    }
    class Texture2D extends Texture {
        static '$gtype': GObject.GType<Texture2D>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Texture2D.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Texture2D.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_bitmap(bitmap: Cogl.Bitmap): Cogl.Texture2D;
        static new_from_data(
            ctx: Cogl.Context,
            width: number,
            height: number,
            format: Cogl.PixelFormat,
            rowstride: number,
            data: Uint8Array[] | string,
        ): Cogl.Texture2D;
        static new_with_format(
            ctx: Cogl.Context,
            width: number,
            height: number,
            format: Cogl.PixelFormat,
        ): Cogl.Texture2D;
        static new_with_size(ctx: Cogl.Context, width: number, height: number): Cogl.Texture2D;
        // Signals
        connect<K extends keyof Cogl.Texture2D.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Texture2D.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Texture2D.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Texture2D.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Texture2D.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Texture2D.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Sets whether the texture will automatically update the smaller
         * mipmap levels after any part of level 0 is updated. The update will
         * only occur whenever the texture is used for drawing with a texture
         * filter that requires the lower mipmap levels. An application should
         * disable this if it wants to upload its own data for the other
         * levels. By default auto mipmapping is enabled.
         *
         * @param value The new value for whether to auto mipmap
         */
        set_auto_mipmap(value: boolean): void;
    }
    class Texture2DSliced extends Texture {
        static '$gtype': GObject.GType<Texture2DSliced>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Cogl.Texture2DSliced.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Cogl.Texture2DSliced.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_bitmap(bmp: Cogl.Bitmap, max_waste: number): Cogl.Texture2DSliced;
        static new_with_size(ctx: Cogl.Context, width: number, height: number, max_waste: number): Cogl.Texture2DSliced;
        // Signals
        connect<K extends keyof Cogl.Texture2DSliced.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Texture2DSliced.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Cogl.Texture2DSliced.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cogl.Texture2DSliced.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Cogl.Texture2DSliced.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cogl.Texture2DSliced.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
}
export default classes;
