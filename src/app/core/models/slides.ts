export interface ISlide {
  id: number;
  name: string;
  description: string;
  image: string;
  order: number | null;
  user_id?: any;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
  group_id?: any;
}
