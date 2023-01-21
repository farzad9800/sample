export type ImageThumbnailType = {
  url: string;
  width: number;
  height: number;
};

export type ThumbnailType = "small" | "large" | "full";

export type Thumbnail = Record<ThumbnailType, ImageThumbnailType>;

export type ImageType = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: Thumbnail;
};

export type ProductFields = {
  id: number;
  brand: string;
  rating: number;
  image: ImageType[];
  price: number;
  discount: number;
  name: string;
  reviews: string;
  priceWithDiscount: number;
};

export type ProductType = {
  id: string;
  createdTime: string;
  fields: ProductFields;
};
