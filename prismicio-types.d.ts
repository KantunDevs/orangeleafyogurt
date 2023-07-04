// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = MainTitleSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
  Simplify<HomepageDocumentData>,
  'homepage',
  Lang
>;
/** Content for Navigation documents */
type NavigationDocumentData = Record<string, never>;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
  Simplify<NavigationDocumentData>,
  'navigation',
  Lang
>;
export type AllDocumentTypes = HomepageDocument | NavigationDocument;
/**
 * Primary content in HomeHeading → Primary
 *
 */
interface MainTitleSliceDefaultPrimary {
  /**
   * Title field in *HomeHeading → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_title.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Subtitle field in *HomeHeading → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_title.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismic.KeyTextField;
}
/**
 * Default variation for HomeHeading Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MainTitleSliceDefault = prismic.SharedSliceVariation<
  'default',
  Simplify<MainTitleSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *HomeHeading*
 *
 */
type MainTitleSliceVariation = MainTitleSliceDefault;
/**
 * HomeHeading Shared Slice
 *
 * - **API ID**: `main_title`
 * - **Description**: `MainTitle`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type MainTitleSlice = prismic.SharedSlice<'main_title', MainTitleSliceVariation>;
declare module '@prismicio/client' {
  interface CreateClient {
    (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      NavigationDocumentData,
      NavigationDocument,
      AllDocumentTypes,
      MainTitleSliceDefaultPrimary,
      MainTitleSliceDefault,
      MainTitleSliceVariation,
      MainTitleSlice,
    };
  }
}