type ProductType = {
  _id: string;
  name: string;
  thumb: string;
  description: string;
  slug: string;
  price: number;
  quantity: number;
  shop: object;
  type: "Electronics" | "Clothing" | "Furniture";
  attributes: object;
  ratings_avg: number;
  variations: Array;
  isDraft: boolean;
  isPublished: boolean;
};
