import type GdkPixbuf from './gdkpixbuf-2.0.d.ts';
import Gio from '@girs/gio-2.0';
import GObject from '@girs/gobject-2.0';
import { type GObjectClasses } from '@girs/gobject-2.0/gobject-2.0';
import GLib from '@girs/glib-2.0';
import GModule from '@girs/gmodule-2.0';
declare namespace classes {
    class Pixbuf extends GObjectClasses.Object implements Gio.Icon, Gio.LoadableIcon {
        static '$gtype': GObject.GType<Pixbuf>;
        // Properties
        /**
         * The number of bits per sample.
         *
         * Currently only 8 bit per sample are supported.
         */
        get bits_per_sample(): number;
        /**
         * The number of bits per sample.
         *
         * Currently only 8 bit per sample are supported.
         */
        get bitsPerSample(): number;
        /**
         * The color space of the pixbuf.
         *
         * Currently, only `GDK_COLORSPACE_RGB` is supported.
         */
        get colorspace(): GdkPixbuf.Colorspace;
        /**
         * Whether the pixbuf has an alpha channel.
         */
        get has_alpha(): boolean;
        /**
         * Whether the pixbuf has an alpha channel.
         */
        get hasAlpha(): boolean;
        /**
         * The number of rows of the pixbuf.
         */
        get height(): number;
        /**
         * The number of samples per pixel.
         *
         * Currently, only 3 or 4 samples per pixel are supported.
         */
        get n_channels(): number;
        /**
         * The number of samples per pixel.
         *
         * Currently, only 3 or 4 samples per pixel are supported.
         */
        get nChannels(): number;
        get pixel_bytes(): GLib.Bytes;
        get pixelBytes(): GLib.Bytes;
        /**
         * A pointer to the pixel data of the pixbuf.
         */
        get pixels(): any;
        /**
         * The number of bytes between the start of a row and
         * the start of the next row.
         *
         * This number must (obviously) be at least as large as the
         * width of the pixbuf.
         */
        get rowstride(): number;
        /**
         * The number of columns of the pixbuf.
         */
        get width(): number;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GdkPixbuf.Pixbuf.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GdkPixbuf.Pixbuf.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(
            colorspace: GdkPixbuf.Colorspace,
            has_alpha: boolean,
            bits_per_sample: number,
            width: number,
            height: number,
        ): GdkPixbuf.Pixbuf;
        static new_from_bytes(
            data: GLib.Bytes | Uint8Array,
            colorspace: GdkPixbuf.Colorspace,
            has_alpha: boolean,
            bits_per_sample: number,
            width: number,
            height: number,
            rowstride: number,
        ): GdkPixbuf.Pixbuf;
        static new_from_data(
            data: Uint8Array[] | string,
            colorspace: GdkPixbuf.Colorspace,
            has_alpha: boolean,
            bits_per_sample: number,
            width: number,
            height: number,
            rowstride: number,
            destroy_fn?: GdkPixbuf.PixbufDestroyNotify | null,
        ): GdkPixbuf.Pixbuf;
        static new_from_file(filename: string): GdkPixbuf.Pixbuf;
        static new_from_file_at_scale(
            filename: string,
            width: number,
            height: number,
            preserve_aspect_ratio: boolean,
        ): GdkPixbuf.Pixbuf;
        static new_from_file_at_size(filename: string, width: number, height: number): GdkPixbuf.Pixbuf;
        static new_from_inline(data: Uint8Array[] | string, copy_pixels: boolean): GdkPixbuf.Pixbuf;
        static new_from_resource(resource_path: string): GdkPixbuf.Pixbuf;
        static new_from_resource_at_scale(
            resource_path: string,
            width: number,
            height: number,
            preserve_aspect_ratio: boolean,
        ): GdkPixbuf.Pixbuf;
        static new_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): GdkPixbuf.Pixbuf;
        static new_from_stream_at_scale(
            stream: Gio.InputStream,
            width: number,
            height: number,
            preserve_aspect_ratio: boolean,
            cancellable?: Gio.Cancellable | null,
        ): GdkPixbuf.Pixbuf;
        static new_from_stream_finish(async_result: Gio.AsyncResult): GdkPixbuf.Pixbuf;
        static new_from_xpm_data(data: string[]): GdkPixbuf.Pixbuf;
        // Signals
        connect<K extends keyof GdkPixbuf.Pixbuf.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.Pixbuf.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GdkPixbuf.Pixbuf.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.Pixbuf.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GdkPixbuf.Pixbuf.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GdkPixbuf.Pixbuf.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Calculates the rowstride that an image created with those values would
         * have.
         *
         * This function is useful for front-ends and backends that want to check
         * image values without needing to create a `GdkPixbuf`.
         *
         * @param colorspace Color space for image
         * @param has_alpha Whether the image should have transparency information
         * @param bits_per_sample Number of bits per color sample
         * @param width Width of image in pixels, must be > 0
         * @param height Height of image in pixels, must be > 0
         */
        static calculate_rowstride(
            colorspace: GdkPixbuf.Colorspace,
            has_alpha: boolean,
            bits_per_sample: number,
            width: number,
            height: number,
        ): number;
        /**
         * Parses an image file far enough to determine its format and size.
         *
         * @param filename The name of the file to identify.
         */
        static get_file_info(filename: string): [GdkPixbuf.PixbufFormat | null, number, number];
        /**
         * Asynchronously parses an image file far enough to determine its
         * format and size.
         *
         * For more details see gdk_pixbuf_get_file_info(), which is the synchronous
         * version of this function.
         *
         * When the operation is finished, `callback` will be called in the
         * main thread. You can then call gdk_pixbuf_get_file_info_finish() to
         * get the result of the operation.
         *
         * @param filename The name of the file to identify
         * @param cancellable optional `GCancellable` object, `NULL` to ignore
         * @param callback a `GAsyncReadyCallback` to call when the file info is available
         */
        static get_file_info_async(
            filename: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<GdkPixbuf.Pixbuf> | null,
        ): void;
        /**
         * Finishes an asynchronous pixbuf parsing operation started with
         * gdk_pixbuf_get_file_info_async().
         *
         * @param async_result a `GAsyncResult`
         */
        static get_file_info_finish(async_result: Gio.AsyncResult): [GdkPixbuf.PixbufFormat | null, number, number];
        /**
         * Obtains the available information about the image formats supported
         * by GdkPixbuf.
         */
        static get_formats(): GdkPixbuf.PixbufFormat[];
        /**
         * Initalizes the gdk-pixbuf loader modules referenced by the `loaders.cache`
         * file present inside that directory.
         *
         * This is to be used by applications that want to ship certain loaders
         * in a different location from the system ones.
         *
         * This is needed when the OS or runtime ships a minimal number of loaders
         * so as to reduce the potential attack surface of carefully crafted image
         * files, especially for uncommon file types. Applications that require
         * broader image file types coverage, such as image viewers, would be
         * expected to ship the gdk-pixbuf modules in a separate location, bundled
         * with the application in a separate directory from the OS or runtime-
         * provided modules.
         *
         * @param path Path to directory where the `loaders.cache` is installed
         */
        static init_modules(path: string): boolean;
        /**
         * Creates a new pixbuf by asynchronously loading an image from an input stream.
         *
         * For more details see gdk_pixbuf_new_from_stream(), which is the synchronous
         * version of this function.
         *
         * When the operation is finished, `callback` will be called in the main thread.
         * You can then call gdk_pixbuf_new_from_stream_finish() to get the result of
         * the operation.
         *
         * @param stream a `GInputStream` from which to load the pixbuf
         * @param cancellable optional `GCancellable` object, `NULL` to ignore
         * @param callback a `GAsyncReadyCallback` to call when the pixbuf is loaded
         */
        static new_from_stream_async(
            stream: Gio.InputStream,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<GdkPixbuf.Pixbuf> | null,
        ): void;
        /**
         * Creates a new pixbuf by asynchronously loading an image from an input stream.
         *
         * For more details see gdk_pixbuf_new_from_stream_at_scale(), which is the synchronous
         * version of this function.
         *
         * When the operation is finished, `callback` will be called in the main thread.
         * You can then call gdk_pixbuf_new_from_stream_finish() to get the result of the operation.
         *
         * @param stream a `GInputStream` from which to load the pixbuf
         * @param width the width the image should have or -1 to not constrain the width
         * @param height the height the image should have or -1 to not constrain the height
         * @param preserve_aspect_ratio `TRUE` to preserve the image's aspect ratio
         * @param cancellable optional `GCancellable` object, `NULL` to ignore
         * @param callback a `GAsyncReadyCallback` to call when the pixbuf is loaded
         */
        static new_from_stream_at_scale_async(
            stream: Gio.InputStream,
            width: number,
            height: number,
            preserve_aspect_ratio: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<GdkPixbuf.Pixbuf> | null,
        ): void;
        /**
         * Finishes an asynchronous pixbuf save operation started with
         * gdk_pixbuf_save_to_stream_async().
         *
         * @param async_result a `GAsyncResult`
         */
        static save_to_stream_finish(async_result: Gio.AsyncResult): boolean;
        // Methods
        /**
         * Takes an existing pixbuf and adds an alpha channel to it.
         *
         * If the existing pixbuf already had an alpha channel, the channel
         * values are copied from the original; otherwise, the alpha channel
         * is initialized to 255 (full opacity).
         *
         * If `substitute_color` is `TRUE`, then the color specified by the
         * (`r`, `g`, `b`) arguments will be assigned zero opacity. That is,
         * if you pass `(255, 255, 255)` for the substitute color, all white
         * pixels will become fully transparent.
         *
         * If `substitute_color` is `FALSE`, then the (`r`, `g`, `b`) arguments
         * will be ignored.
         *
         * @returns A newly-created pixbuf
         * @param substitute_color Whether to set a color to zero opacity.
         * @param r Red value to substitute.
         * @param g Green value to substitute.
         * @param b Blue value to substitute.
         */
        add_alpha(substitute_color: boolean, r: number, g: number, b: number): GdkPixbuf.Pixbuf | null;
        /**
         * Takes an existing pixbuf and checks for the presence of an
         * associated "orientation" option.
         *
         * The orientation option may be provided by the JPEG loader (which
         * reads the exif orientation tag) or the TIFF loader (which reads
         * the TIFF orientation tag, and compensates it for the partial
         * transforms performed by libtiff).
         *
         * If an orientation option/tag is present, the appropriate transform
         * will be performed so that the pixbuf is oriented correctly.
         *
         * @returns A newly-created pixbuf
         */
        apply_embedded_orientation(): GdkPixbuf.Pixbuf | null;
        /**
         * Creates a transformation of the source image `src` by scaling by
         * `scale_x` and `scale_y` then translating by `offset_x` and `offset_y`.
         *
         * This gives an image in the coordinates of the destination pixbuf.
         * The rectangle (`dest_x,` `dest_y,` `dest_width,` `dest_height)`
         * is then alpha blended onto the corresponding rectangle of the
         * original destination image.
         *
         * When the destination rectangle contains parts not in the source
         * image, the data at the edges of the source image is replicated
         * to infinity.
         *
         * ![](composite.png)
         *
         * @param dest the #GdkPixbuf into which to render the results
         * @param dest_x the left coordinate for region to render
         * @param dest_y the top coordinate for region to render
         * @param dest_width the width of the region to render
         * @param dest_height the height of the region to render
         * @param offset_x the offset in the X direction (currently rounded to an integer)
         * @param offset_y the offset in the Y direction (currently rounded to an integer)
         * @param scale_x the scale factor in the X direction
         * @param scale_y the scale factor in the Y direction
         * @param interp_type the interpolation type for the transformation.
         * @param overall_alpha overall alpha for source image (0..255)
         */
        composite(
            dest: GdkPixbuf.Pixbuf,
            dest_x: number,
            dest_y: number,
            dest_width: number,
            dest_height: number,
            offset_x: number,
            offset_y: number,
            scale_x: number,
            scale_y: number,
            interp_type: GdkPixbuf.InterpType | null,
            overall_alpha: number,
        ): void;
        /**
         * Creates a transformation of the source image `src` by scaling by
         * `scale_x` and `scale_y` then translating by `offset_x` and `offset_y,`
         * then alpha blends the rectangle (`dest_x` ,`dest_y,` `dest_width,`
         * `dest_height)` of the resulting image with a checkboard of the
         * colors `color1` and `color2` and renders it onto the destination
         * image.
         *
         * If the source image has no alpha channel, and `overall_alpha` is 255, a fast
         * path is used which omits the alpha blending and just performs the scaling.
         *
         * See gdk_pixbuf_composite_color_simple() for a simpler variant of this
         * function suitable for many tasks.
         *
         * @param dest the #GdkPixbuf into which to render the results
         * @param dest_x the left coordinate for region to render
         * @param dest_y the top coordinate for region to render
         * @param dest_width the width of the region to render
         * @param dest_height the height of the region to render
         * @param offset_x the offset in the X direction (currently rounded to an integer)
         * @param offset_y the offset in the Y direction (currently rounded to an integer)
         * @param scale_x the scale factor in the X direction
         * @param scale_y the scale factor in the Y direction
         * @param interp_type the interpolation type for the transformation.
         * @param overall_alpha overall alpha for source image (0..255)
         * @param check_x the X offset for the checkboard (origin of checkboard is at -`check_x,` -`check_y)`
         * @param check_y the Y offset for the checkboard
         * @param check_size the size of checks in the checkboard (must be a power of two)
         * @param _color1 the color of check at upper left
         * @param _color2 the color of the other check
         */
        composite_color(
            dest: GdkPixbuf.Pixbuf,
            dest_x: number,
            dest_y: number,
            dest_width: number,
            dest_height: number,
            offset_x: number,
            offset_y: number,
            scale_x: number,
            scale_y: number,
            interp_type: GdkPixbuf.InterpType | null,
            overall_alpha: number,
            check_x: number,
            check_y: number,
            check_size: number,
            _color1: number,
            _color2: number,
        ): void;
        /**
         * Creates a new pixbuf by scaling `src` to `dest_width` x `dest_height`
         * and alpha blending the result with a checkboard of colors `color1`
         * and `color2`.
         *
         * @returns the new pixbuf
         * @param dest_width the width of destination image
         * @param dest_height the height of destination image
         * @param interp_type the interpolation type for the transformation.
         * @param overall_alpha overall alpha for source image (0..255)
         * @param check_size the size of checks in the checkboard (must be a power of two)
         * @param _color1 the color of check at upper left
         * @param _color2 the color of the other check
         */
        composite_color_simple(
            dest_width: number,
            dest_height: number,
            interp_type: GdkPixbuf.InterpType | null,
            overall_alpha: number,
            check_size: number,
            _color1: number,
            _color2: number,
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Creates a new `GdkPixbuf` with a copy of the information in the specified
         * `pixbuf`.
         *
         * Note that this does not copy the options set on the original `GdkPixbuf`,
         * use gdk_pixbuf_copy_options() for this.
         *
         * @returns A newly-created pixbuf
         */
        copy(): GdkPixbuf.Pixbuf | null;
        /**
         * Copies a rectangular area from `src_pixbuf` to `dest_pixbuf`.
         *
         * Conversion of pixbuf formats is done automatically.
         *
         * If the source rectangle overlaps the destination rectangle on the
         * same pixbuf, it will be overwritten during the copy operation.
         * Therefore, you can not use this function to scroll a pixbuf.
         *
         * @param src_x Source X coordinate within `src_pixbuf`.
         * @param src_y Source Y coordinate within `src_pixbuf`.
         * @param width Width of the area to copy.
         * @param height Height of the area to copy.
         * @param dest_pixbuf Destination pixbuf.
         * @param dest_x X coordinate within `dest_pixbuf`.
         * @param dest_y Y coordinate within `dest_pixbuf`.
         */
        copy_area(
            src_x: number,
            src_y: number,
            width: number,
            height: number,
            dest_pixbuf: GdkPixbuf.Pixbuf,
            dest_x: number,
            dest_y: number,
        ): void;
        /**
         * Copies the key/value pair options attached to a `GdkPixbuf` to another
         * `GdkPixbuf`.
         *
         * This is useful to keep original metadata after having manipulated
         * a file. However be careful to remove metadata which you've already
         * applied, such as the "orientation" option after rotating the image.
         *
         * @returns `TRUE` on success.
         * @param dest_pixbuf the destination pixbuf
         */
        copy_options(dest_pixbuf: GdkPixbuf.Pixbuf): boolean;
        /**
         * Clears a pixbuf to the given RGBA value, converting the RGBA value into
         * the pixbuf's pixel format.
         *
         * The alpha component will be ignored if the pixbuf doesn't have an alpha
         * channel.
         *
         * @param pixel RGBA pixel to used to clear (`0xffffffff` is opaque white,
         *   `0x00000000` transparent black)
         */
        fill(pixel: number): void;
        /**
         * Flips a pixbuf horizontally or vertically and returns the
         * result in a new pixbuf.
         *
         * @returns the new pixbuf
         * @param horizontal `TRUE` to flip horizontally, `FALSE` to flip vertically
         */
        flip(horizontal: boolean): GdkPixbuf.Pixbuf | null;
        /**
         * Queries the number of bits per color sample in a pixbuf.
         *
         * @returns Number of bits per color sample.
         */
        get_bits_per_sample(): number;
        /**
         * Returns the length of the pixel data, in bytes.
         *
         * @returns The length of the pixel data.
         */
        get_byte_length(): number;
        /**
         * Queries the color space of a pixbuf.
         *
         * @returns Color space.
         */
        get_colorspace(): GdkPixbuf.Colorspace;
        /**
         * Queries whether a pixbuf has an alpha channel (opacity information).
         *
         * @returns `TRUE` if it has an alpha channel, `FALSE` otherwise.
         */
        get_has_alpha(): boolean;
        /**
         * Queries the height of a pixbuf.
         *
         * @returns Height in pixels.
         */
        get_height(): number;
        /**
         * Queries the number of channels of a pixbuf.
         *
         * @returns Number of channels.
         */
        get_n_channels(): number;
        /**
         * Looks up `key` in the list of options that may have been attached to the
         * `pixbuf` when it was loaded, or that may have been attached by another
         * function using gdk_pixbuf_set_option().
         *
         * For instance, the ANI loader provides "Title" and "Artist" options.
         * The ICO, XBM, and XPM loaders provide "x_hot" and "y_hot" hot-spot
         * options for cursor definitions. The PNG loader provides the tEXt ancillary
         * chunk key/value pairs as options. Since 2.12, the TIFF and JPEG loaders
         * return an "orientation" option string that corresponds to the embedded
         * TIFF/Exif orientation tag (if present). Since 2.32, the TIFF loader sets
         * the "multipage" option string to "yes" when a multi-page TIFF is loaded.
         * Since 2.32 the JPEG and PNG loaders set "x-dpi" and "y-dpi" if the file
         * contains image density information in dots per inch.
         * Since 2.36.6, the JPEG loader sets the "comment" option with the comment
         * EXIF tag.
         *
         * @returns the value associated with `key`
         * @param key a nul-terminated string.
         */
        get_option(key: string): string | null;
        /**
         * Returns a `GHashTable` with a list of all the options that may have been
         * attached to the `pixbuf` when it was loaded, or that may have been
         * attached by another function using [method`GdkPixbuf`.Pixbuf.set_option].
         *
         * @returns a #GHashTable
         *   of key/values pairs
         */
        get_options(): GLib.HashTable<string, string>;
        /**
         * Queries a pointer to the pixel data of a pixbuf.
         *
         * This function will cause an implicit copy of the pixbuf data if the
         * pixbuf was created from read-only data.
         *
         * Please see the section on [image data](class.Pixbuf.html#image-data) for information
         * about how the pixel data is stored in memory.
         *
         * @returns A pointer to the pixbuf's pixel data.
         */
        get_pixels(): Uint8Array[];
        /**
         * Queries a pointer to the pixel data of a pixbuf.
         *
         * This function will cause an implicit copy of the pixbuf data if the
         * pixbuf was created from read-only data.
         *
         * Please see the section on [image data](class.Pixbuf.html#image-data) for information
         * about how the pixel data is stored in memory.
         *
         * @returns A pointer to the pixbuf's
         * pixel data.
         */
        get_pixels(): Uint8Array[];
        /**
         * Queries the rowstride of a pixbuf, which is the number of bytes between
         * the start of a row and the start of the next row.
         *
         * @returns Distance between row starts.
         */
        get_rowstride(): number;
        /**
         * Queries the width of a pixbuf.
         *
         * @returns Width in pixels.
         */
        get_width(): number;
        /**
         * Creates a new pixbuf which represents a sub-region of `src_pixbuf`.
         *
         * The new pixbuf shares its pixels with the original pixbuf, so
         * writing to one affects both.  The new pixbuf holds a reference to
         * `src_pixbuf`, so `src_pixbuf` will not be finalized until the new
         * pixbuf is finalized.
         *
         * Note that if `src_pixbuf` is read-only, this function will force it
         * to be mutable.
         *
         * @returns a new pixbuf
         * @param src_x X coord in `src_pixbuf`
         * @param src_y Y coord in `src_pixbuf`
         * @param width width of region in `src_pixbuf`
         * @param height height of region in `src_pixbuf`
         */
        new_subpixbuf(src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf;
        /**
         * Provides a #GBytes buffer containing the raw pixel data; the data
         * must not be modified.
         *
         * This function allows skipping the implicit copy that must be made
         * if gdk_pixbuf_get_pixels() is called on a read-only pixbuf.
         *
         * @returns A new reference to a read-only copy of
         *   the pixel data.  Note that for mutable pixbufs, this function will
         *   incur a one-time copy of the pixel data for conversion into the
         *   returned #GBytes.
         */
        read_pixel_bytes(): GLib.Bytes;
        /**
         * Provides a read-only pointer to the raw pixel data.
         *
         * This function allows skipping the implicit copy that must be made
         * if gdk_pixbuf_get_pixels() is called on a read-only pixbuf.
         *
         * @returns a read-only pointer to the raw pixel data
         */
        read_pixels(): number;
        /**
         * Removes the key/value pair option attached to a `GdkPixbuf`.
         *
         * @returns `TRUE` if an option was removed, `FALSE` if not.
         * @param key a nul-terminated string representing the key to remove.
         */
        remove_option(key: string): boolean;
        /**
         * Rotates a pixbuf by a multiple of 90 degrees, and returns the
         * result in a new pixbuf.
         *
         * If `angle` is 0, this function will return a copy of `src`.
         *
         * @returns the new pixbuf
         * @param angle the angle to rotate by
         */
        rotate_simple(angle: GdkPixbuf.PixbufRotation | null): GdkPixbuf.Pixbuf | null;
        /**
         * Modifies saturation and optionally pixelates `src`, placing the result in
         * `dest`.
         *
         * The `src` and `dest` pixbufs must have the same image format, size, and
         * rowstride.
         *
         * The `src` and `dest` arguments may be the same pixbuf with no ill effects.
         *
         * If `saturation` is 1.0 then saturation is not changed. If it's less than 1.0,
         * saturation is reduced (the image turns toward grayscale); if greater than
         * 1.0, saturation is increased (the image gets more vivid colors).
         *
         * If `pixelate` is `TRUE`, then pixels are faded in a checkerboard pattern to
         * create a pixelated image.
         *
         * @param dest place to write modified version of `src`
         * @param saturation saturation factor
         * @param pixelate whether to pixelate
         */
        saturate_and_pixelate(dest: GdkPixbuf.Pixbuf, saturation: number, pixelate: boolean): void;
        /**
         * Vector version of `gdk_pixbuf_save_to_buffer()`.
         *
         * Saves pixbuf to a new buffer in format `type,` which is currently "jpeg",
         * "tiff", "png", "ico" or "bmp".
         *
         * See [method`GdkPixbuf`.Pixbuf.save_to_buffer] for more details.
         *
         * @returns whether an error was set
         * @param type name of file format.
         * @param option_keys name of options to set
         * @param option_values values for named options
         */
        save_to_bufferv(
            type: string,
            option_keys?: string[] | null,
            option_values?: string[] | null,
        ): [boolean, Uint8Array[]];
        /**
         * Vector version of `gdk_pixbuf_save_to_callback()`.
         *
         * Saves pixbuf to a callback in format `type,` which is currently "jpeg",
         * "png", "tiff", "ico" or "bmp".
         *
         * If `error` is set, `FALSE` will be returned.
         *
         * See [method`GdkPixbuf`.Pixbuf.save_to_callback] for more details.
         *
         * @returns whether an error was set
         * @param save_func a function that is called to
         *   save each block of data that the save routine generates
         * @param type name of file format
         * @param option_keys name of options to set
         * @param option_values values for named options
         */
        save_to_callbackv(
            save_func: GdkPixbuf.PixbufSaveFunc,
            type: string,
            option_keys?: string[] | null,
            option_values?: string[] | null,
        ): boolean;
        /**
         * Saves `pixbuf` to an output stream.
         *
         * Supported file formats are currently "jpeg", "tiff", "png", "ico" or
         * "bmp".
         *
         * See [method`GdkPixbuf`.Pixbuf.save_to_stream] for more details.
         *
         * @returns `TRUE` if the pixbuf was saved successfully, `FALSE` if an
         *   error was set.
         * @param stream a `GOutputStream` to save the pixbuf to
         * @param type name of file format
         * @param option_keys name of options to set
         * @param option_values values for named options
         * @param cancellable optional `GCancellable` object, `NULL` to ignore
         */
        save_to_streamv(
            stream: Gio.OutputStream,
            type: string,
            option_keys?: string[] | null,
            option_values?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Saves `pixbuf` to an output stream asynchronously.
         *
         * For more details see gdk_pixbuf_save_to_streamv(), which is the synchronous
         * version of this function.
         *
         * When the operation is finished, `callback` will be called in the main thread.
         *
         * You can then call gdk_pixbuf_save_to_stream_finish() to get the result of
         * the operation.
         *
         * @param stream a `GOutputStream` to which to save the pixbuf
         * @param type name of file format
         * @param option_keys name of options to set
         * @param option_values values for named options
         * @param cancellable optional `GCancellable` object, `NULL` to ignore
         * @param callback a `GAsyncReadyCallback` to call when the pixbuf is saved
         */
        save_to_streamv_async(
            stream: Gio.OutputStream,
            type: string,
            option_keys?: string[] | null,
            option_values?: string[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Vector version of `gdk_pixbuf_save()`.
         *
         * Saves pixbuf to a file in `type`, which is currently "jpeg", "png", "tiff", "ico" or "bmp".
         *
         * If `error` is set, `FALSE` will be returned.
         *
         * See [method`GdkPixbuf`.Pixbuf.save] for more details.
         *
         * @returns whether an error was set
         * @param filename name of file to save.
         * @param type name of file format.
         * @param option_keys name of options to set
         * @param option_values values for named options
         */
        savev(filename: string, type: string, option_keys?: string[] | null, option_values?: string[] | null): boolean;
        /**
         * Creates a transformation of the source image `src` by scaling by
         * `scale_x` and `scale_y` then translating by `offset_x` and `offset_y,`
         * then renders the rectangle (`dest_x,` `dest_y,` `dest_width,`
         * `dest_height)` of the resulting image onto the destination image
         * replacing the previous contents.
         *
         * Try to use gdk_pixbuf_scale_simple() first; this function is
         * the industrial-strength power tool you can fall back to, if
         * gdk_pixbuf_scale_simple() isn't powerful enough.
         *
         * If the source rectangle overlaps the destination rectangle on the
         * same pixbuf, it will be overwritten during the scaling which
         * results in rendering artifacts.
         *
         * @param dest the #GdkPixbuf into which to render the results
         * @param dest_x the left coordinate for region to render
         * @param dest_y the top coordinate for region to render
         * @param dest_width the width of the region to render
         * @param dest_height the height of the region to render
         * @param offset_x the offset in the X direction (currently rounded to an integer)
         * @param offset_y the offset in the Y direction (currently rounded to an integer)
         * @param scale_x the scale factor in the X direction
         * @param scale_y the scale factor in the Y direction
         * @param interp_type the interpolation type for the transformation.
         */
        scale(
            dest: GdkPixbuf.Pixbuf,
            dest_x: number,
            dest_y: number,
            dest_width: number,
            dest_height: number,
            offset_x: number,
            offset_y: number,
            scale_x: number,
            scale_y: number,
            interp_type: GdkPixbuf.InterpType | null,
        ): void;
        /**
         * Create a new pixbuf containing a copy of `src` scaled to
         * `dest_width` x `dest_height`.
         *
         * This function leaves `src` unaffected.
         *
         * The `interp_type` should be `GDK_INTERP_NEAREST` if you want maximum
         * speed (but when scaling down `GDK_INTERP_NEAREST` is usually unusably
         * ugly). The default `interp_type` should be `GDK_INTERP_BILINEAR` which
         * offers reasonable quality and speed.
         *
         * You can scale a sub-portion of `src` by creating a sub-pixbuf
         * pointing into `src`; see [method`GdkPixbuf`.Pixbuf.new_subpixbuf].
         *
         * If `dest_width` and `dest_height` are equal to the width and height of
         * `src`, this function will return an unscaled copy of `src`.
         *
         * For more complicated scaling/alpha blending see [method`GdkPixbuf`.Pixbuf.scale]
         * and [method`GdkPixbuf`.Pixbuf.composite].
         *
         * @returns the new pixbuf
         * @param dest_width the width of destination image
         * @param dest_height the height of destination image
         * @param interp_type the interpolation type for the transformation.
         */
        scale_simple(
            dest_width: number,
            dest_height: number,
            interp_type: GdkPixbuf.InterpType | null,
        ): GdkPixbuf.Pixbuf | null;
        /**
         * Attaches a key/value pair as an option to a `GdkPixbuf`.
         *
         * If `key` already exists in the list of options attached to the `pixbuf`,
         * the new value is ignored and `FALSE` is returned.
         *
         * @returns `TRUE` on success
         * @param key a nul-terminated string.
         * @param value a nul-terminated string.
         */
        set_option(key: string, value: string): boolean;
        // Inherited methods
        /**
         * Checks if two icons are equal.
         *
         * @returns %TRUE if `icon1` is equal to `icon2`. %FALSE otherwise.
         * @param _icon2 pointer to the second #GIcon.
         */
        equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         *
         * @returns a #guint containing a hash for the `icon,` suitable for
         *   use in a #GHashTable or similar data structure.
         */
        hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         *
         * @returns a #GVariant, or %NULL when serialization fails. The #GVariant will not be floating.
         */
        serialize(): GLib.Variant | null;
        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use g_icon_new_for_string() to
         * get `icon` back from the returned string.
         *
         * The encoding of the returned string is proprietary to #GIcon except
         * in the following two cases
         *
         * - If `icon` is a #GFileIcon, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the #GFile for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of g_file_get_uri()
         *   (such as `sftp://path/to/my%20icon.png`).
         *
         * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         *
         * @returns An allocated NUL-terminated UTF8 string or
         * %NULL if `icon` can't be serialized. Use g_free() to free.
         */
        to_string(): string | null;
        /**
         * Checks if two icons are equal.
         *
         * @param _icon2 pointer to the second #GIcon.
         */
        vfunc_equal(_icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         */
        vfunc_hash(): number;
        /**
         * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
         * back by calling g_icon_deserialize() on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the #GVariant between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         */
        vfunc_serialize(): GLib.Variant | null;
        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when g_icon_new_for_string() is called.
         */
        vfunc_to_tokens(): [boolean, string[], number];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        load_async(size: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream, string]> | void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @returns a #GInputStream to read the icon from.
         * @param res a #GAsyncResult.
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see g_loadable_icon_load_async().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to
         * ignore.
         */
        vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * g_loadable_icon_load_finish(). For the synchronous, blocking
         * version of this function, see g_loadable_icon_load().
         *
         * @param size an integer.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback
         *   to call when the request is satisfied
         */
        vfunc_load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
         *
         * @param res a #GAsyncResult.
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
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
    class PixbufAnimation extends GObjectClasses.Object {
        static '$gtype': GObject.GType<PixbufAnimation>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GdkPixbuf.PixbufAnimation.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GdkPixbuf.PixbufAnimation.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new_from_file(filename: string): GdkPixbuf.PixbufAnimation;
        static new_from_resource(resource_path: string): GdkPixbuf.PixbufAnimation;
        static new_from_stream(
            stream: Gio.InputStream,
            cancellable?: Gio.Cancellable | null,
        ): GdkPixbuf.PixbufAnimation;
        static new_from_stream_finish(async_result: Gio.AsyncResult): GdkPixbuf.PixbufAnimation;
        // Signals
        connect<K extends keyof GdkPixbuf.PixbufAnimation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufAnimation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GdkPixbuf.PixbufAnimation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufAnimation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GdkPixbuf.PixbufAnimation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GdkPixbuf.PixbufAnimation.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Static methods
        /**
         * Creates a new animation by asynchronously loading an image from an input stream.
         *
         * For more details see gdk_pixbuf_new_from_stream(), which is the synchronous
         * version of this function.
         *
         * When the operation is finished, `callback` will be called in the main thread.
         * You can then call gdk_pixbuf_animation_new_from_stream_finish() to get the
         * result of the operation.
         *
         * @param stream a #GInputStream from which to load the animation
         * @param cancellable optional #GCancellable object
         * @param callback a `GAsyncReadyCallback` to call when the pixbuf is loaded
         */
        static new_from_stream_async(
            stream: Gio.InputStream,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<GdkPixbuf.PixbufAnimation> | null,
        ): void;
        // Virtual methods
        /**
         * Get an iterator for displaying an animation.
         *
         * The iterator provides the frames that should be displayed at a
         * given time.
         *
         * `start_time` would normally come from g_get_current_time(), and marks
         * the beginning of animation playback. After creating an iterator, you
         * should immediately display the pixbuf returned by
         * gdk_pixbuf_animation_iter_get_pixbuf(). Then, you should install
         * a timeout (with g_timeout_add()) or by some other mechanism ensure
         * that you'll update the image after
         * gdk_pixbuf_animation_iter_get_delay_time() milliseconds. Each time
         * the image is updated, you should reinstall the timeout with the new,
         * possibly-changed delay time.
         *
         * As a shortcut, if `start_time` is `NULL`, the result of
         * g_get_current_time() will be used automatically.
         *
         * To update the image (i.e. possibly change the result of
         * gdk_pixbuf_animation_iter_get_pixbuf() to a new frame of the animation),
         * call gdk_pixbuf_animation_iter_advance().
         *
         * If you're using #GdkPixbufLoader, in addition to updating the image
         * after the delay time, you should also update it whenever you
         * receive the area_updated signal and
         * gdk_pixbuf_animation_iter_on_currently_loading_frame() returns
         * `TRUE`. In this case, the frame currently being fed into the loader
         * has received new data, so needs to be refreshed. The delay time for
         * a frame may also be modified after an area_updated signal, for
         * example if the delay time for a frame is encoded in the data after
         * the frame itself. So your timeout should be reinstalled after any
         * area_updated signal.
         *
         * A delay time of -1 is possible, indicating "infinite".
         *
         * @param start_time time when the animation starts playing
         */
        vfunc_get_iter(start_time?: GLib.TimeVal | null): GdkPixbuf.PixbufAnimationIter;
        /**
         * fills `width` and `height` with the frame size of the animation.
         *
         * @param width
         * @param height
         */
        vfunc_get_size(width: number, height: number): void;
        /**
         * Retrieves a static image for the animation.
         *
         * If an animation is really just a plain image (has only one frame),
         * this function returns that image.
         *
         * If the animation is an animation, this function returns a reasonable
         * image to use as a static unanimated image, which might be the first
         * frame, or something more sophisticated depending on the file format.
         *
         * If an animation hasn't loaded any frames yet, this function will
         * return `NULL`.
         */
        vfunc_get_static_image(): GdkPixbuf.Pixbuf;
        /**
         * Checks whether the animation is a static image.
         *
         * If you load a file with gdk_pixbuf_animation_new_from_file() and it
         * turns out to be a plain, unanimated image, then this function will
         * return `TRUE`. Use gdk_pixbuf_animation_get_static_image() to retrieve
         * the image.
         */
        vfunc_is_static_image(): boolean;
        // Methods
        /**
         * Queries the height of the bounding box of a pixbuf animation.
         *
         * @returns Height of the bounding box of the animation.
         */
        get_height(): number;
        /**
         * Get an iterator for displaying an animation.
         *
         * The iterator provides the frames that should be displayed at a
         * given time.
         *
         * `start_time` would normally come from g_get_current_time(), and marks
         * the beginning of animation playback. After creating an iterator, you
         * should immediately display the pixbuf returned by
         * gdk_pixbuf_animation_iter_get_pixbuf(). Then, you should install
         * a timeout (with g_timeout_add()) or by some other mechanism ensure
         * that you'll update the image after
         * gdk_pixbuf_animation_iter_get_delay_time() milliseconds. Each time
         * the image is updated, you should reinstall the timeout with the new,
         * possibly-changed delay time.
         *
         * As a shortcut, if `start_time` is `NULL`, the result of
         * g_get_current_time() will be used automatically.
         *
         * To update the image (i.e. possibly change the result of
         * gdk_pixbuf_animation_iter_get_pixbuf() to a new frame of the animation),
         * call gdk_pixbuf_animation_iter_advance().
         *
         * If you're using #GdkPixbufLoader, in addition to updating the image
         * after the delay time, you should also update it whenever you
         * receive the area_updated signal and
         * gdk_pixbuf_animation_iter_on_currently_loading_frame() returns
         * `TRUE`. In this case, the frame currently being fed into the loader
         * has received new data, so needs to be refreshed. The delay time for
         * a frame may also be modified after an area_updated signal, for
         * example if the delay time for a frame is encoded in the data after
         * the frame itself. So your timeout should be reinstalled after any
         * area_updated signal.
         *
         * A delay time of -1 is possible, indicating "infinite".
         *
         * @returns an iterator to move over the animation
         * @param start_time time when the animation starts playing
         */
        get_iter(start_time?: GLib.TimeVal | null): GdkPixbuf.PixbufAnimationIter;
        /**
         * Retrieves a static image for the animation.
         *
         * If an animation is really just a plain image (has only one frame),
         * this function returns that image.
         *
         * If the animation is an animation, this function returns a reasonable
         * image to use as a static unanimated image, which might be the first
         * frame, or something more sophisticated depending on the file format.
         *
         * If an animation hasn't loaded any frames yet, this function will
         * return `NULL`.
         *
         * @returns unanimated image representing the animation
         */
        get_static_image(): GdkPixbuf.Pixbuf;
        /**
         * Queries the width of the bounding box of a pixbuf animation.
         *
         * @returns Width of the bounding box of the animation.
         */
        get_width(): number;
        /**
         * Checks whether the animation is a static image.
         *
         * If you load a file with gdk_pixbuf_animation_new_from_file() and it
         * turns out to be a plain, unanimated image, then this function will
         * return `TRUE`. Use gdk_pixbuf_animation_get_static_image() to retrieve
         * the image.
         *
         * @returns `TRUE` if the "animation" was really just an image
         */
        is_static_image(): boolean;
    }
    class PixbufAnimationIter extends GObjectClasses.Object {
        static '$gtype': GObject.GType<PixbufAnimationIter>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GdkPixbuf.PixbufAnimationIter.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GdkPixbuf.PixbufAnimationIter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof GdkPixbuf.PixbufAnimationIter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufAnimationIter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GdkPixbuf.PixbufAnimationIter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufAnimationIter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GdkPixbuf.PixbufAnimationIter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GdkPixbuf.PixbufAnimationIter.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        /**
         * Possibly advances an animation to a new frame.
         *
         * Chooses the frame based on the start time passed to
         * gdk_pixbuf_animation_get_iter().
         *
         * `current_time` would normally come from g_get_current_time(), and
         * must be greater than or equal to the time passed to
         * gdk_pixbuf_animation_get_iter(), and must increase or remain
         * unchanged each time gdk_pixbuf_animation_iter_get_pixbuf() is
         * called. That is, you can't go backward in time; animations only
         * play forward.
         *
         * As a shortcut, pass `NULL` for the current time and g_get_current_time()
         * will be invoked on your behalf. So you only need to explicitly pass
         * `current_time` if you're doing something odd like playing the animation
         * at double speed.
         *
         * If this function returns `FALSE`, there's no need to update the animation
         * display, assuming the display had been rendered prior to advancing;
         * if `TRUE`, you need to call gdk_pixbuf_animation_iter_get_pixbuf()
         * and update the display with the new pixbuf.
         *
         * @param current_time current time
         */
        vfunc_advance(current_time?: GLib.TimeVal | null): boolean;
        /**
         * Gets the number of milliseconds the current pixbuf should be displayed,
         * or -1 if the current pixbuf should be displayed forever.
         *
         * The `g_timeout_add()` function conveniently takes a timeout in milliseconds,
         * so you can use a timeout to schedule the next update.
         *
         * Note that some formats, like GIF, might clamp the timeout values in the
         * image file to avoid updates that are just too quick. The minimum timeout
         * for GIF images is currently 20 milliseconds.
         */
        vfunc_get_delay_time(): number;
        /**
         * Gets the current pixbuf which should be displayed.
         *
         * The pixbuf might not be the same size as the animation itself
         * (gdk_pixbuf_animation_get_width(), gdk_pixbuf_animation_get_height()).
         *
         * This pixbuf should be displayed for gdk_pixbuf_animation_iter_get_delay_time()
         * milliseconds.
         *
         * The caller of this function does not own a reference to the returned
         * pixbuf; the returned pixbuf will become invalid when the iterator
         * advances to the next frame, which may happen anytime you call
         * gdk_pixbuf_animation_iter_advance().
         *
         * Copy the pixbuf to keep it (don't just add a reference), as it may get
         * recycled as you advance the iterator.
         */
        vfunc_get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Used to determine how to respond to the area_updated signal on
         * #GdkPixbufLoader when loading an animation.
         *
         * The `::area_updated` signal is emitted for an area of the frame currently
         * streaming in to the loader. So if you're on the currently loading frame,
         * you will need to redraw the screen for the updated area.
         */
        vfunc_on_currently_loading_frame(): boolean;
        // Methods
        /**
         * Possibly advances an animation to a new frame.
         *
         * Chooses the frame based on the start time passed to
         * gdk_pixbuf_animation_get_iter().
         *
         * `current_time` would normally come from g_get_current_time(), and
         * must be greater than or equal to the time passed to
         * gdk_pixbuf_animation_get_iter(), and must increase or remain
         * unchanged each time gdk_pixbuf_animation_iter_get_pixbuf() is
         * called. That is, you can't go backward in time; animations only
         * play forward.
         *
         * As a shortcut, pass `NULL` for the current time and g_get_current_time()
         * will be invoked on your behalf. So you only need to explicitly pass
         * `current_time` if you're doing something odd like playing the animation
         * at double speed.
         *
         * If this function returns `FALSE`, there's no need to update the animation
         * display, assuming the display had been rendered prior to advancing;
         * if `TRUE`, you need to call gdk_pixbuf_animation_iter_get_pixbuf()
         * and update the display with the new pixbuf.
         *
         * @returns `TRUE` if the image may need updating
         * @param current_time current time
         */
        advance(current_time?: GLib.TimeVal | null): boolean;
        /**
         * Gets the number of milliseconds the current pixbuf should be displayed,
         * or -1 if the current pixbuf should be displayed forever.
         *
         * The `g_timeout_add()` function conveniently takes a timeout in milliseconds,
         * so you can use a timeout to schedule the next update.
         *
         * Note that some formats, like GIF, might clamp the timeout values in the
         * image file to avoid updates that are just too quick. The minimum timeout
         * for GIF images is currently 20 milliseconds.
         *
         * @returns delay time in milliseconds (thousandths of a second)
         */
        get_delay_time(): number;
        /**
         * Gets the current pixbuf which should be displayed.
         *
         * The pixbuf might not be the same size as the animation itself
         * (gdk_pixbuf_animation_get_width(), gdk_pixbuf_animation_get_height()).
         *
         * This pixbuf should be displayed for gdk_pixbuf_animation_iter_get_delay_time()
         * milliseconds.
         *
         * The caller of this function does not own a reference to the returned
         * pixbuf; the returned pixbuf will become invalid when the iterator
         * advances to the next frame, which may happen anytime you call
         * gdk_pixbuf_animation_iter_advance().
         *
         * Copy the pixbuf to keep it (don't just add a reference), as it may get
         * recycled as you advance the iterator.
         *
         * @returns the pixbuf to be displayed
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        /**
         * Used to determine how to respond to the area_updated signal on
         * #GdkPixbufLoader when loading an animation.
         *
         * The `::area_updated` signal is emitted for an area of the frame currently
         * streaming in to the loader. So if you're on the currently loading frame,
         * you will need to redraw the screen for the updated area.
         *
         * @returns `TRUE` if the frame we're on is partially loaded, or the last frame
         */
        on_currently_loading_frame(): boolean;
    }
    class PixbufLoader extends GObjectClasses.Object {
        static '$gtype': GObject.GType<PixbufLoader>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GdkPixbuf.PixbufLoader.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GdkPixbuf.PixbufLoader.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(): GdkPixbuf.PixbufLoader;
        static new_with_mime_type(mime_type: string): GdkPixbuf.PixbufLoader;
        static new_with_type(image_type: string): GdkPixbuf.PixbufLoader;
        // Signals
        connect<K extends keyof GdkPixbuf.PixbufLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GdkPixbuf.PixbufLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GdkPixbuf.PixbufLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GdkPixbuf.PixbufLoader.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Virtual methods
        vfunc_area_prepared(): void;
        vfunc_area_updated(x: number, y: number, width: number, height: number): void;
        vfunc_closed(): void;
        vfunc_size_prepared(width: number, height: number): void;
        // Methods
        /**
         * Informs a pixbuf loader that no further writes with
         * gdk_pixbuf_loader_write() will occur, so that it can free its
         * internal loading structures.
         *
         * This function also tries to parse any data that hasn't yet been parsed;
         * if the remaining data is partial or corrupt, an error will be returned.
         *
         * If `FALSE` is returned, `error` will be set to an error from the
         * `GDK_PIXBUF_ERROR` or `G_FILE_ERROR` domains.
         *
         * If you're just cancelling a load rather than expecting it to be finished,
         * passing `NULL` for `error` to ignore it is reasonable.
         *
         * Remember that this function does not release a reference on the loader, so
         * you will need to explicitly release any reference you hold.
         *
         * @returns `TRUE` if all image data written so far was successfully
         *   passed out via the update_area signal
         */
        close(): boolean;
        /**
         * Queries the #GdkPixbufAnimation that a pixbuf loader is currently creating.
         *
         * In general it only makes sense to call this function after the
         * [signal`GdkPixbuf`.PixbufLoader::area-prepared] signal has been emitted by
         * the loader.
         *
         * If the loader doesn't have enough bytes yet, and hasn't emitted the `area-prepared`
         * signal, this function will return `NULL`.
         *
         * @returns The animation that the loader is
         *   currently loading
         */
        get_animation(): GdkPixbuf.PixbufAnimation | null;
        /**
         * Obtains the available information about the format of the
         * currently loading image file.
         *
         * @returns A #GdkPixbufFormat
         */
        get_format(): GdkPixbuf.PixbufFormat | null;
        /**
         * Queries the #GdkPixbuf that a pixbuf loader is currently creating.
         *
         * In general it only makes sense to call this function after the
         * [signal`GdkPixbuf`.PixbufLoader::area-prepared] signal has been
         * emitted by the loader; this means that enough data has been read
         * to know the size of the image that will be allocated.
         *
         * If the loader has not received enough data via gdk_pixbuf_loader_write(),
         * then this function returns `NULL`.
         *
         * The returned pixbuf will be the same in all future calls to the loader,
         * so if you want to keep using it, you should acquire a reference to it.
         *
         * Additionally, if the loader is an animation, it will return the "static
         * image" of the animation (see gdk_pixbuf_animation_get_static_image()).
         *
         * @returns The pixbuf that the loader is
         *   creating
         */
        get_pixbuf(): GdkPixbuf.Pixbuf | null;
        /**
         * Causes the image to be scaled while it is loaded.
         *
         * The desired image size can be determined relative to the original
         * size of the image by calling gdk_pixbuf_loader_set_size() from a
         * signal handler for the ::size-prepared signal.
         *
         * Attempts to set the desired image size  are ignored after the
         * emission of the ::size-prepared signal.
         *
         * @param width The desired width of the image being loaded.
         * @param height The desired height of the image being loaded.
         */
        set_size(width: number, height: number): void;
        /**
         * Parses the next `count` bytes in the given image buffer.
         *
         * @returns `TRUE` if the write was successful, or
         *   `FALSE` if the loader cannot parse the buffer
         * @param buf Pointer to image data.
         */
        write(buf: Uint8Array[] | string): boolean;
        /**
         * Parses the next contents of the given image buffer.
         *
         * @returns `TRUE` if the write was successful, or `FALSE` if
         *   the loader cannot parse the buffer
         * @param buffer The image data as a `GBytes` buffer.
         */
        write_bytes(buffer: GLib.Bytes | Uint8Array): boolean;
    }
    class PixbufNonAnim extends PixbufAnimation {
        static '$gtype': GObject.GType<PixbufNonAnim>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GdkPixbuf.PixbufNonAnim.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GdkPixbuf.PixbufNonAnim.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(pixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.PixbufNonAnim;
        // Signals
        connect<K extends keyof GdkPixbuf.PixbufNonAnim.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufNonAnim.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GdkPixbuf.PixbufNonAnim.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufNonAnim.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GdkPixbuf.PixbufNonAnim.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GdkPixbuf.PixbufNonAnim.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
    class PixbufSimpleAnim extends PixbufAnimation {
        static '$gtype': GObject.GType<PixbufSimpleAnim>;
        // Properties
        /**
         * Whether the animation should loop when it reaches the end.
         */
        get loop(): boolean;
        set loop(val: boolean);
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GdkPixbuf.PixbufSimpleAnim.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GdkPixbuf.PixbufSimpleAnim.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        static new(width: number, height: number, rate: number): GdkPixbuf.PixbufSimpleAnim;
        // Signals
        connect<K extends keyof GdkPixbuf.PixbufSimpleAnim.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufSimpleAnim.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GdkPixbuf.PixbufSimpleAnim.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufSimpleAnim.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GdkPixbuf.PixbufSimpleAnim.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GdkPixbuf.PixbufSimpleAnim.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
        // Methods
        /**
         * Adds a new frame to `animation`. The `pixbuf` must
         * have the dimensions specified when the animation
         * was constructed.
         *
         * @param pixbuf the pixbuf to add
         */
        add_frame(pixbuf: GdkPixbuf.Pixbuf): void;
        /**
         * Gets whether `animation` should loop indefinitely when it reaches the end.
         *
         * @returns %TRUE if the animation loops forever, %FALSE otherwise
         */
        get_loop(): boolean;
        /**
         * Sets whether `animation` should loop indefinitely when it reaches the end.
         *
         * @param loop whether to loop the animation
         */
        set_loop(loop: boolean): void;
    }
    class PixbufSimpleAnimIter extends PixbufAnimationIter {
        static '$gtype': GObject.GType<PixbufSimpleAnimIter>;
        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         */
        '$signals': GdkPixbuf.PixbufSimpleAnimIter.SignalSignatures;
        // Constructors
        constructor(properties?: Partial<GdkPixbuf.PixbufSimpleAnimIter.ConstructorProps>, ...args: any[]);
        _init(...args: any[]): void;
        // Signals
        connect<K extends keyof GdkPixbuf.PixbufSimpleAnimIter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufSimpleAnimIter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: any): number;
        connect_after<K extends keyof GdkPixbuf.PixbufSimpleAnimIter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GdkPixbuf.PixbufSimpleAnimIter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: any): number;
        emit<K extends keyof GdkPixbuf.PixbufSimpleAnimIter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GdkPixbuf.PixbufSimpleAnimIter.SignalSignatures[K]>
        ): void;
        emit(signal: string, ...args: any[]): void;
    }
}
export default classes;
