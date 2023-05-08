import { MouseEvent, useState } from "react";
import * as S from "./styles";
import { InputForm } from "../InputForm";

interface IRowItem {
  id: number;
}

const RowItem = ({ id }: IRowItem) => {
  return (
    <S.Flex id={`item-${id}`}>
      <InputForm id="itemName" type="text" />
      <InputForm id="itemQty" type="number" />
      <InputForm id="itemPrice" type="number" />
    </S.Flex>
  );
};

export const ItemList = () => {
  const [linhas, setLinhas] = useState([{ valor: "" }]);
  console.log(linhas);

  const addNewIem = (e: any) => {
    e.preventDefault();
    setLinhas([...linhas, { valor: "" }]);
    console.log(linhas);
  };

  return (
    <div>
      <div>Item List</div>
      <S.Flex>
        <h4>Item Name</h4>
        <h4>QTY.</h4>
        <h4>Price</h4>
        <h4>Total</h4>
      </S.Flex>
      {linhas.map((item, index) => (
        <RowItem id={index} />
      ))}
      <S.Button onClick={(e) => addNewIem(e)}>+ Add New Item</S.Button>
    </div>
  );
};
