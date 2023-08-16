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

export type IGenres =
  | "Self-Help"
  | "Detective"
  | "Programming"
  | "Thriller"
  | "Science Fiction"
  | "Novel";

export type IDecoded = {
  userEmail: string;
  userId: string;
};
