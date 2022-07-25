import { Program } from "./Program.js";
import { AttributeState } from "./AttributeState.js";
import { Buffer } from "./Buffer.js";
import { BufferTarget, Primitive } from "./WebGLConstant.js";
import { Framebuffer } from "./Framebuffer.js";

/** A collection of attribute state; a vertex attribute array. */
export class VAO {
	/**
	 * Creates a vertex array object.
	 * @param program The program that the VAO is used with.
	 * @param attributes The attributes associated with the VAO.
	 * @param indices The indices to supply to the element array buffer of this VAO if the data should be indexed.
	 */
	public constructor(program: Program, attributes: Array<AttributeState> = [], indices?: Uint8Array) {
		this.program = program;
		this.gl = program.gl;

		const vao: WebGLVertexArrayObject | null = this.gl.createVertexArray();
		if (!vao) { throw new Error("Failed to create VAO."); }
		this.vao = vao;

		this.attributesPrivate = [];
		for (const attribute of attributes) { this.addAttribute(attribute); }

		this.indices = indices;
	}

	/** The rendering context of this VAO. */
	public readonly gl: WebGL2RenderingContext;

	/** The program that this VAO is used with. */
	public readonly program: Program;

	/** The WebGL API interface of this VAO. */
	public readonly vao: WebGLVertexArrayObject;

	/** The attributes associated with this VAO. */
	private attributesPrivate: Array<AttributeState>;

	/** The attributes associated with this VAO. */
	public get attributes(): ReadonlyArray<AttributeState> {
		return this.attributesPrivate;
	}

	/** The element array buffer of this VAO if its data is indexed. */
	private elementArrayBuffer: Buffer | undefined;

	/** The indices in the element array buffer of this VAO if the data is indexed. */
	public get indices(): Uint8Array | undefined {
		return this.elementArrayBuffer?.data as Uint8Array;
	}

	public set indices(value: Uint8Array | undefined) {
		this.bind();
		if (value) {
			this.elementArrayBuffer = new Buffer(this.gl, value, BufferTarget.ELEMENT_ARRAY_BUFFER);
		} else {
			this.elementArrayBuffer = undefined;
		}
	}

	/** Makes this the active VAO. */
	public bind(): void {
		this.gl.bindVertexArray(this.vao);
	}

	/**
	 * Adds an attribute to this VAO.
	 * @param attribute The attribute to add.
	 */
	public addAttribute(attribute: AttributeState): void {
		this.bind();
		attribute.use(this.program);
		this.attributesPrivate.push(attribute);
	}

	/**
	 * Draws the vertex data stored in this VAO.
	 * @param primitive The type of primitive to draw.
	 * @param offset The number of elements to skip when drawing arrays.
	 * @param framebuffer The framebuffer to draw to, if any. Draws to the canvas if not set.
	 * @param updateViewport Whether to automatically update the viewport.
	 */
	public draw(primitive: Primitive = Primitive.TRIANGLES, offset = 0, framebuffer: Framebuffer, updateViewport = true): void {
		this.program.use();
		this.bind();

		if (framebuffer) {
			framebuffer.bind();
			if (updateViewport) { this.gl.viewport(0, 0, framebuffer.width, framebuffer.height); }
		} else {
			Framebuffer.unbind(this.gl);
			if (updateViewport) { this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height); }
		}

		if (this.elementArrayBuffer) {
			this.gl.drawElements(primitive, this.elementArrayBuffer.data.length, this.elementArrayBuffer.type, 0);
		} else {
			const firstAttribute: AttributeState | undefined = this.attributes[0];
			if (!firstAttribute) { return; }
			const dataLength: number = firstAttribute.buffer.data.length;
			const dataSize: number = firstAttribute.size;

			this.gl.drawArrays(primitive, offset, dataLength / dataSize);
		}
	}
}
