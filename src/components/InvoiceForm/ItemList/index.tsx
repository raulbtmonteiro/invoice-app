import garbage from "../../../assets/images/icon-delete.svg";
import { Invoice, Item } from "../../../views/types";
import { GridLocator } from "../GridLocator";
import { useRef, useState } from "react";
import { InputForm } from "../InputForm";
import { LabelForm } from "../LabelForm";
import * as S from "./styles";

interface IRowItem {
  id: number;
  item: Item;
}

const RowItem = ({ id, item }: IRowItem) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isVisible = id === 0 ? true : false;
  const isFirst = id === 0 ? true : false;

  const handleDelete = () => {
    gridRef.current?.childNodes.forEach((child) =>
      child.childNodes[1]?.remove()
    );
  };

  return (
    <S.Grid id={`item-${id}`} ref={gridRef}>
      <GridLocator gridArea="itemName">
        <LabelForm htmlFor="itemName" isVisible={isVisible}>
          Item Name
        </LabelForm>
        <InputForm id="itemName" type="text" inicialValue={item.name} />
      </GridLocator>
      <GridLocator gridArea="itemQty">
        <LabelForm htmlFor="itemQty" isVisible={isVisible}>
          QTY.
        </LabelForm>
        <InputForm id="itemQty" type="number" inicialValue={item.quantity} />
      </GridLocator>
      <GridLocator gridArea="itemPrice">
        <LabelForm htmlFor="itemPrice" isVisible={isVisible}>
          Price
        </LabelForm>
        <InputForm id="itemPrice" type="number" inicialValue={item.price} />
      </GridLocator>
      <GridLocator gridArea="itemTotal">
        <LabelForm htmlFor="itemTotal" isVisible={isVisible}>
          Total
        </LabelForm>
      </GridLocator>
      <GridLocator gridArea="itemDelete" onClick={() => handleDelete()}>
        <span style={{ fontSize: "0px" }}>Delete</span>
        <S.ImgWrapper isFirst={isFirst}>
          <img src={garbage} alt="delete" />
        </S.ImgWrapper>
      </GridLocator>
    </S.Grid>
  );
};

interface IItemList {
  invoice: Invoice | null;
}

export const ItemList = ({ invoice }: IItemList) => {
  const INITIAL_STATE = invoice?.items
    ? invoice.items
    : [{ name: "", quantity: 0, price: 0, total: 0 }];
  const [items, setItems] = useState(INITIAL_STATE);

  const addNewItem = (e: any) => {
    e.preventDefault();
    setItems([...items, { name: "", quantity: 0, price: 0, total: 0 }]);
  };

  return (
    <>
      <S.Title>Item List</S.Title>
      {items.map((item, index) => (
        <RowItem id={index} key={Math.random()} item={item} />
      ))}
      <S.Button onClick={(e) => addNewItem(e)}>+ Add New Item</S.Button>
    </>
  );
};
