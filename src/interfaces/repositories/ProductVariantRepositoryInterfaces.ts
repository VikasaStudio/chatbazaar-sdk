export enum VariantState {
  New = "new",
  Refurbished = "refurbished",
  Used = "used",
}
export interface ProductVariantSchema {
  _id?: string; //variant id, unique across db.
  vendorId: string;
  productCode?: string; //Unique code for a product (Unique within a store)

  title: string; // required by facebook catalog
  description: string; // required by facebook catalog
  condition: VariantState; // required by facebook catalog
  price: number; // required by facebook catalog
  sale_price: number; // required by facebook catalog
  sale_price_effective_date: string; // required by facebook catalog
  link: string; // required by facebook catalog

  image_data: { url: string; key: string }[];

  brand: string; // required by facebook catalog
  item_group_id: string; // required by facebook catalog

  item_category: string;
  quantity: number;

  syncedToGoogleSheet?: boolean; //whether item is synced to google-sheet. (i.e both g-sheet & db are consistent)
  addedToGoogleSheet?: boolean; //whether item is available in google-sheet.

  lastModifiedAt?: Date;
  createdAt?: Date;
  isActive?: boolean;
}

export interface ProductVariantFindFilter {
  vendorId?: string;

  title?: string; // required by facebook catalog
  condition?: "new" | "refurbished" | "used"; // required by facebook catalog
  price?: number; // required by facebook catalog
  sale_price?: number; // required by facebook catalog
  sale_price_effective_date?: string; // required by facebook catalog
  brand?: string; // required by facebook catalog
  item_group_id?: string; // required by facebook catalog

  item_category?: string;
  quantity?: number;

  lastModifiedAt?: Date;
  createdAt?: Date;
  isActive?: boolean;
}
