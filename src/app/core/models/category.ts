export interface ICategory {
  id                : number;
  name              : string | null;
  description       : string | null;
  image             : string | null;
  parent_category_id: number | null;
  created_at        : Date | string | null;
  updated_at        : Date | string | null;
  deleted_at        : Date | string | null;
  group_id          : null;
}
