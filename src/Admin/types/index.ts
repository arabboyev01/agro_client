import { FieldInputProps } from "formik";
import { FieldMetaState } from "react-final-form";

export interface TableProps<T> {
  column: TableColumn;
  data: T;
}

interface TableColumn {
  key: string;
  label?: string;
  filter?: boolean;
  sorter?: boolean;
  _style?: React.CSSProperties;
}

export interface UserTypes {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface ProductsProp<T> {
  user: T[];
  navigate?: (value: string) => void;
  column: any;
  navigateTo?: (value: number) => void;
}
export interface PlantProps {
  id: number;
  image: string;
  name_uz: string;
  name_ru: string;
  name_en: string;
  plantType: string;
  plantTypes: string[];
}
export interface PlantTypeProp<T> {
  navigate: (route: string) => void;
  data: T[];
  navigateTo: (id: number) => void;
  lang?: any;
}

export interface ProductsType {
  id: number;
  name_uz: string;
  name_ru: string;
  name_en: string;
  plantTypeId: number;
  plantType: OrderType[];
  price: number;
  image: string;
}

export interface OrderType {
  id: number;
  customerName: string;
  customerPhone: string;
  productId: number;
  product: ProductsType;
}

export interface PlantsType {
  id: number;
  name_uz: string;
  name_ru: string;
  name_en: string;
  describtion_uz: string;
  describtion_ru: string;
  describtion_en: string;
  image: string;
  plantTypeId: number;
  plantsCategoryId: number;
}
export interface PlantType {
  id: number;
  name_uz: string;
  name_ru: string;
  name_en: string;
  image: string;
  categoryId: number;
}
export interface MyContentProps {
  lat?: number;
  lng?: number;
  isSelected: boolean;
  searchValue?: string;
  onClick?: (id: number) => void;
  id?: number;
}

export type fieldType = {
  field: FieldInputProps<any>;
  meta: FieldMetaState<any>;
};

interface SoilContent {
  id: number;
  key: string;
  value: string;
}

export interface DistrictType {
  id: number;
  name_en: string;
  name_ru: string;
  name_uz: string;
}

export interface RegionType {
  id: number;
  name_en: string;
  name_ru: string;
  name_uz: string;
}

export interface LocationType {
  address: string;
  crops: number[] | PlantType[] | any;
  district: DistrictType;
  districtId: number;
  id: number;
  lat: string;
  long: string;
  region: RegionType;
  regionId: number;
  soilsContent: SoilContent[];
}
