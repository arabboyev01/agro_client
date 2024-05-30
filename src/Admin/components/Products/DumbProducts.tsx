import { FC } from "react";
import ComponentHeader from "../ComponentHeader";
import * as S from "./style.products";
import TableComponent from "../Table";
import { PlantTypeProp, ProductsType } from "@/Admin/types";
import { dataSet, plantsTypeColumns } from "./data";

const DumbProducts: FC<PlantTypeProp<ProductsType>> = ({
  navigate,
  navigateTo,
  data,
  lang,
}) => (
  <S.StyledProducts>
    <ComponentHeader
      title={lang("add")}
      onClick={() => navigate && navigate("/admin/products/add")}
    />
    <TableComponent
      user={dataSet(data)}
      navigateTo={navigateTo}
      column={plantsTypeColumns}
    />
  </S.StyledProducts>
);
export default DumbProducts;
