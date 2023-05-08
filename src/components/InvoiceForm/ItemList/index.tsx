import { useRef, useState } from "react";
import * as S from "./styles";
import { InputForm } from "../InputForm";
import { LabelForm } from "../LabelForm";
import { GridLocator } from "../GridLocator";
//import delete from "../../../assets/images/icon-delete.svg";

interface IRowItem {
  id: number;
}

const RowItem = ({ id }: IRowItem) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isVisible = id === 0 ? true : false;

  const handleDelete = () => {
    gridRef.current?.remove();
  };

  return (
    <S.Grid id={`item-${id}`} ref={gridRef}>
      <GridLocator gridArea="itemName">
        <LabelForm htmlFor="itemName" isVisible={isVisible}>
          Item Name
        </LabelForm>
        <InputForm id="itemName" type="text" />
      </GridLocator>
      <GridLocator gridArea="itemQty">
        <LabelForm htmlFor="itemQty" isVisible={isVisible}>
          QTY.
        </LabelForm>
        <InputForm id="itemQty" type="number" />
      </GridLocator>
      <GridLocator gridArea="itemPrice">
        <LabelForm htmlFor="itemPrice" isVisible={isVisible}>
          Price
        </LabelForm>
        <InputForm id="itemPrice" type="number" />
      </GridLocator>
      <GridLocator gridArea="itemTotal">
        <LabelForm htmlFor="itemTotal" isVisible={isVisible}>
          Total
        </LabelForm>
      </GridLocator>
      <GridLocator gridArea="itemDelete" onClick={() => handleDelete()}>
        <img alt="delete" />
      </GridLocator>
    </S.Grid>
  );
};

export const ItemList = () => {
  const [linhas, setLinhas] = useState([{ valor: "" }]);
  console.log(linhas);

  const addNewIem = (e: any) => {
    e.preventDefault();
    setLinhas([...linhas, { valor: "" }]);
  };

  return (
    <div>
      <div>Item List</div>
      {linhas.map((item, index) => (
        <RowItem id={index} />
      ))}
      <S.Button onClick={(e) => addNewIem(e)}>+ Add New Item</S.Button>
    </div>
  );
};
