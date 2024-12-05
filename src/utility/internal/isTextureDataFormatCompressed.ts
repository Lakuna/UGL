import TextureDataFormat from "../../constants/TextureDataFormat.js";

/**
 * Determine whether or not the given texture format is compressed.
 * @param format - The texture format.
 * @returns Whether or not the given texture format is compressed.
 * @internal
 */
export default function isTextureDataFormatCompressed(
	format: TextureDataFormat
): boolean {
	switch (format) {
		case TextureDataFormat.COMPRESSED_R11_EAC:
		case TextureDataFormat.COMPRESSED_RED_GREEN_RGTC2_EXT:
		case TextureDataFormat.COMPRESSED_RED_RGTC1_EXT:
		case TextureDataFormat.COMPRESSED_RG11_EAC:
		case TextureDataFormat.COMPRESSED_RGB8_ETC2:
		case TextureDataFormat.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
		case TextureDataFormat.COMPRESSED_RGBA8_ETC2_EAC:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_10x10_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_10x5_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_10x6_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_10x8_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_12x10_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_12x12_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_4x4_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_5x4_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_5x5_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_6x5_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_6x6_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_8x5_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_8x6_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_ASTC_8x8_KHR:
		case TextureDataFormat.COMPRESSED_RGBA_BPTC_UNORM_EXT:
		case TextureDataFormat.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:
		case TextureDataFormat.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:
		case TextureDataFormat.COMPRESSED_RGBA_S3TC_DXT1_EXT:
		case TextureDataFormat.COMPRESSED_RGBA_S3TC_DXT3_EXT:
		case TextureDataFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT:
		case TextureDataFormat.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT:
		case TextureDataFormat.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT:
		case TextureDataFormat.COMPRESSED_RGB_PVRTC_2BPPV1_IMG:
		case TextureDataFormat.COMPRESSED_RGB_PVRTC_4BPPV1_IMG:
		case TextureDataFormat.COMPRESSED_RGB_S3TC_DXT1_EXT:
		case TextureDataFormat.COMPRESSED_SIGNED_R11_EAC:
		case TextureDataFormat.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT:
		case TextureDataFormat.COMPRESSED_SIGNED_RED_RGTC1_EXT:
		case TextureDataFormat.COMPRESSED_SIGNED_RG11_EAC:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:
		case TextureDataFormat.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
		case TextureDataFormat.COMPRESSED_SRGB8_ETC2:
		case TextureDataFormat.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
		case TextureDataFormat.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:
		case TextureDataFormat.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT:
		case TextureDataFormat.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT:
		case TextureDataFormat.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT:
		case TextureDataFormat.COMPRESSED_SRGB_S3TC_DXT1_EXT:
			return true;
		default:
			return false;
	}
}
