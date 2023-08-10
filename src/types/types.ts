type IReviewResponse = {
  reviewerName: string;
  reviewerEmail: string;
  review: string;
} & Document;

export type IBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  imageURL: string;
  owner: string;
  reviews?: [IReviewResponse];
};
