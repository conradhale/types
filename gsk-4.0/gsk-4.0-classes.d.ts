import type Gsk from './gsk-4.0.d.ts';
import Graphene from '@girs/graphene-1.0';
import GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
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
declare namespace classes {
    class BroadwayRenderer extends Renderer {
        static '$gtype': GObject.GType<BroadwayRenderer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gsk.BroadwayRenderer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gsk.BroadwayRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gsk.BroadwayRenderer;
        // Signals
        connect<K extends keyof Gsk.BroadwayRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.BroadwayRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.BroadwayRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.BroadwayRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.BroadwayRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.BroadwayRenderer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class CairoRenderer extends Renderer {
        static '$gtype': GObject.GType<CairoRenderer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gsk.CairoRenderer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gsk.CairoRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gsk.CairoRenderer;
        // Signals
        connect<K extends keyof Gsk.CairoRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.CairoRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.CairoRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.CairoRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.CairoRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.CairoRenderer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class GLRenderer extends Renderer {
        static '$gtype': GObject.GType<GLRenderer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gsk.GLRenderer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gsk.GLRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gsk.GLRenderer;
        // Signals
        connect<K extends keyof Gsk.GLRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.GLRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.GLRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.GLRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.GLRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.GLRenderer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class GLShader extends GObjectClasses.Object {
        static '$gtype': GObject.GType<GLShader>;
        // Properties
        /**
         * Resource containing the source code for the shader.
         *
         * If the shader source is not coming from a resource, this
         * will be %NULL.
         */
        get resource(): string;
        /**
         * The source code for the shader, as a `GBytes`.
         */
        get source(): GLib.Bytes;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gsk.GLShader.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gsk.GLShader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_bytes(sourcecode: GLib.Bytes | Uint8Array): Gsk.GLShader;
        static new_from_resource(resource_path: string): Gsk.GLShader;
        // Signals
        connect<K extends keyof Gsk.GLShader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.GLShader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.GLShader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.GLShader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.GLShader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.GLShader.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Tries to compile the `shader` for the given `renderer`.
         *
         * If there is a problem, this function returns %FALSE and reports
         * an error. You should use this function before relying on the shader
         * for rendering and use a fallback with a simpler shader or without
         * shaders if it fails.
         *
         * Note that this will modify the rendering state (for example
         * change the current GL context) and requires the renderer to be
         * set up. This means that the widget has to be realized. Commonly you
         * want to call this from the realize signal of a widget, or during
         * widget snapshot.
         *
         * @returns %TRUE on success, %FALSE if an error occurred
         * @param renderer a `GskRenderer`
         */
        compile(renderer: Gsk.Renderer): boolean;
        /**
         * Looks for a uniform by the name `name,` and returns the index
         * of the uniform, or -1 if it was not found.
         *
         * @returns The index of the uniform, or -1
         * @param name uniform name
         */
        find_uniform_by_name(name: string): number;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of bool type.
         *
         * @returns The value
         * @param args uniform arguments
         * @param idx index of the uniform
         */
        get_arg_bool(args: GLib.Bytes | Uint8Array, idx: number): boolean;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of float type.
         *
         * @returns The value
         * @param args uniform arguments
         * @param idx index of the uniform
         */
        get_arg_float(args: GLib.Bytes | Uint8Array, idx: number): number;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of int type.
         *
         * @returns The value
         * @param args uniform arguments
         * @param idx index of the uniform
         */
        get_arg_int(args: GLib.Bytes | Uint8Array, idx: number): number;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of uint type.
         *
         * @returns The value
         * @param args uniform arguments
         * @param idx index of the uniform
         */
        get_arg_uint(args: GLib.Bytes | Uint8Array, idx: number): number;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of vec2 type.
         *
         * @param args uniform arguments
         * @param idx index of the uniform
         * @param out_value location to store the uniform value in
         */
        get_arg_vec2(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec2): void;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of vec3 type.
         *
         * @param args uniform arguments
         * @param idx index of the uniform
         * @param out_value location to store the uniform value in
         */
        get_arg_vec3(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec3): void;
        /**
         * Gets the value of the uniform `idx` in the `args` block.
         *
         * The uniform must be of vec4 type.
         *
         * @param args uniform arguments
         * @param idx index of the uniform
         * @param out_value location to store set the uniform value in
         */
        get_arg_vec4(args: GLib.Bytes | Uint8Array, idx: number, out_value: Graphene.Vec4): void;
        /**
         * Get the size of the data block used to specify arguments for this shader.
         *
         * @returns The size of the data block
         */
        get_args_size(): number;
        /**
         * Returns the number of textures that the shader requires.
         *
         * This can be used to check that the a passed shader works
         * in your usecase. It is determined by looking at the highest
         * u_textureN value that the shader defines.
         *
         * @returns The number of texture inputs required by `shader`
         */
        get_n_textures(): number;
        /**
         * Get the number of declared uniforms for this shader.
         *
         * @returns The number of declared uniforms
         */
        get_n_uniforms(): number;
        /**
         * Gets the resource path for the GLSL sourcecode being used
         * to render this shader.
         *
         * @returns The resource path for the shader
         */
        get_resource(): string | null;
        /**
         * Gets the GLSL sourcecode being used to render this shader.
         *
         * @returns The source code for the shader
         */
        get_source(): GLib.Bytes;
        /**
         * Get the name of the declared uniform for this shader at index `idx`.
         *
         * @returns The name of the declared uniform
         * @param idx index of the uniform
         */
        get_uniform_name(idx: number): string;
        /**
         * Get the offset into the data block where data for this uniforms is stored.
         *
         * @returns The data offset
         * @param idx index of the uniform
         */
        get_uniform_offset(idx: number): number;
        /**
         * Get the type of the declared uniform for this shader at index `idx`.
         *
         * @returns The type of the declared uniform
         * @param idx index of the uniform
         */
        get_uniform_type(idx: number): Gsk.GLUniformType;
    }
    class NglRenderer extends Renderer {
        static '$gtype': GObject.GType<NglRenderer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gsk.NglRenderer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gsk.NglRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gsk.NglRenderer;
        // Signals
        connect<K extends keyof Gsk.NglRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.NglRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.NglRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.NglRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.NglRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.NglRenderer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    abstract class Renderer extends GObjectClasses.Object {
        static '$gtype': GObject.GType<Renderer>;
        // Properties
        /**
         * Whether the renderer has been associated with a surface or draw context.
         */
        get realized(): boolean;
        /**
         * The surface associated with renderer.
         */
        get surface(): Gdk.Surface;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gsk.Renderer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gsk.Renderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_for_surface(surface: Gdk.Surface): Gsk.Renderer;
        // Signals
        connect<K extends keyof Gsk.Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.Renderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.Renderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.Renderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.Renderer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Retrieves the surface that the renderer is associated with.
         *
         * If the renderer has not been realized yet, `NULL` will be returned.
         *
         * @returns the surface
         */
        get_surface(): Gdk.Surface | null;
        /**
         * Checks whether the renderer is realized or not.
         *
         * @returns true if the renderer was realized, false otherwise
         */
        is_realized(): boolean;
        /**
         * Creates the resources needed by the renderer.
         *
         * Since GTK 4.6, the surface may be `NULL`, which allows using
         * renderers without having to create a surface. Since GTK 4.14,
         * it is recommended to use [method`Gsk`.Renderer.realize_for_display]
         * for this case.
         *
         * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize]
         * before destroying the renderer.
         *
         * @returns whether the renderer was successfully realized
         * @param surface the surface that renderer will be used on
         */
        realize(surface?: Gdk.Surface | null): boolean;
        /**
         * Creates the resources needed by the renderer.
         *
         * Note that it is mandatory to call [method`Gsk`.Renderer.unrealize]
         * before destroying the renderer.
         *
         * @returns whether the renderer was successfully realized
         * @param display the display that the renderer will be used on
         */
        realize_for_display(display: Gdk.Display): boolean;
        /**
         * Renders the scene graph, described by a tree of `GskRenderNode` instances
         * to the renderer's surface, ensuring that the given region gets redrawn.
         *
         * If the renderer has no associated surface, this function does nothing.
         *
         * Renderers must ensure that changes of the contents given by the `root`
         * node as well as the area given by `region` are redrawn. They are however
         * free to not redraw any pixel outside of `region` if they can guarantee that
         * it didn't change.
         *
         * The renderer will acquire a reference on the `GskRenderNode` tree while
         * the rendering is in progress.
         *
         * @param root the render node to render
         * @param region the `cairo_region_t` that must be redrawn or `NULL`
         *   for the whole surface
         */
        render(root: Gsk.RenderNode, region?: cairo.Region | null): void;
        /**
         * Renders a scene graph, described by a tree of `GskRenderNode` instances,
         * to a texture.
         *
         * The renderer will acquire a reference on the `GskRenderNode` tree while
         * the rendering is in progress.
         *
         * If you want to apply any transformations to `root,` you should put it into a
         * transform node and pass that node instead.
         *
         * @returns a texture with the rendered contents of `root`
         * @param root the render node to render
         * @param viewport the section to draw or `NULL` to use `root'`s bounds
         */
        render_texture(root: Gsk.RenderNode, viewport?: Graphene.Rect | null): Gdk.Texture;
        /**
         * Releases all the resources created by [method`Gsk`.Renderer.realize].
         */
        unrealize(): void;
    }
    class VulkanRenderer extends Renderer {
        static '$gtype': GObject.GType<VulkanRenderer>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': Gsk.VulkanRenderer.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<Gsk.VulkanRenderer.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): Gsk.VulkanRenderer;
        // Signals
        connect<K extends keyof Gsk.VulkanRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.VulkanRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof Gsk.VulkanRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Gsk.VulkanRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof Gsk.VulkanRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Gsk.VulkanRenderer.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
}
export default classes;
