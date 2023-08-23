import type Buffer from "#Buffer";
import type Context from "#Context";
import type BufferDataType from "#BufferDataType";
import type Program from "#Program";
import type Attribute from "#Attribute";
import UnknownAttributeError from "#UnknownAttributeError";

/** Information about how to access data in a buffer. */
export default class BufferInfo {
	/**
	 * Creates an attribute.
	 * @param name The name of the attribute in the WebGL program.
	 * @param buffer The buffer which supplies data to the attribute.
	 * @param size The number of components per vertex attribute.
	 * @param normalized Whether to normalize the data after getting it from
	 * the buffer.
	 * @param stride The offset in bytes between the beginning of consecutive
	 * vertex attributes. Must not exceed `0xFF`.
	 * @param offset The offset in bytes of the first component in the buffer.
	 */
	public constructor(
		name: string,
		buffer: Buffer,
		size: 1 | 2 | 3 | 4 = 3,
		normalized = false,
		stride = 0,
		offset = 0
	) {
		this.name = name;
		this.buffer = buffer;
		this.size = size;
		this.normalized = normalized;
		this.stride = stride;
		this.offset = offset;

		this.context = buffer.context;
	}

	/** The rendering context of this buffer. */
	public readonly context: Context;

	/** The name of this attribute in a shader program. */
	public readonly name: string;

	/** The buffer which supplies data to the attribute. */
	public readonly buffer: Buffer;

	/** The number of components per vertex attribute. */
	public size: 1 | 2 | 3 | 4;

	/** Whether to normalize data after getting it from this buffer. */
	public normalized: boolean;

	/**
	 * The offset in bytes between the beginning of consecutive vertex
	 * attributes. Must not exceed `0xFF`.
	 */
	public stride: number;

	/** The offset in bytes of the first component in the buffer. */
	public offset: number;

	/** The type of each component in this buffer. */
	public get type(): BufferDataType {
		return this.buffer.type;
	}

	/**
	 * Uses this attribute in a program.
	 * @param program The program to use this attribute in.
	 */
	public use(program: Program): void {
		const attribute: Attribute | undefined = program.attributes.get(this.name);
		if (!attribute) {
			throw new UnknownAttributeError();
		}
		attribute.value = this;
	}
}
