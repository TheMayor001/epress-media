/**
 * Image Pipeline Configuration
 * Directives for processing and compressing image assets in the CMS.
 */
const imagePipelineConfig = {
  /**
   * Automatically convert and compress uploaded images into lightweight WebP format.
   */
  format: "webp",

  /**
   * Default compression quality for WebP images (0-100, where 100 is best quality).
   */
  quality: 80,

  /**
   * Generate multiple sizes for responsive design (e.g., 'thumbnail', 'small', 'medium', 'large').
   */
  responsiveSizes: ["150", "300", "768", "1200"],

  /**
   * Enable lazy loading for all images by default.
   */
  lazyLoad: true,

  /**
   * Strip metadata (EXIF, XMP, etc.) from images to reduce file size.
   */
  stripMetadata: true,
};

export default imagePipelineConfig;