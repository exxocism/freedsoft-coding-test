export interface User {
  id: string;
  name: string;
}

export interface Album {
  id: Number;
  title: string;
  userId: Number;
  text?: string;
  price?: Number;
}
