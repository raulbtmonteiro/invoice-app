import { Invoice, Item } from "../../../views/types";
import { useEffect, useRef, useState } from "react";
import { GridLocator } from "../GridLocator";
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
  const [itemPrice, setItemPrice] = useState<number>(item.price);
  const [itemQty, setItemQty] = useState<number>(item.quantity);
  const [itemTotal, setItemTotal] = useState<number>(
    item.quantity * item.price
  );

  const handleDelete = () => {
    gridRef.current?.childNodes.forEach((child) =>
      child.childNodes[1]?.remove()
    );
  };

  useEffect(() => {
    if (Number.isNaN(itemPrice) || Number.isNaN(itemQty)) {
      setItemTotal(0);
    } else {
      setItemTotal((prevState) => itemPrice * itemQty);
    }
  }, [itemPrice, itemQty]);

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
        <InputForm
          id="itemQty"
          type="number"
          inicialValue={item.quantity}
          onChange={(e) => setItemQty(parseInt(e.target.value))}
        />
      </GridLocator>
      <GridLocator gridArea="itemPrice">
        <LabelForm htmlFor="itemPrice" isVisible={isVisible}>
          Price
        </LabelForm>
        <InputForm
          id="itemPrice"
          type="number"
          inicialValue={item.price}
          onChange={(e) => setItemPrice(parseFloat(e.target.value))}
        />
      </GridLocator>
      <GridLocator gridArea="itemTotal">
        <LabelForm htmlFor="itemTotal" isVisible={isVisible}>
          Total
        </LabelForm>
        <S.Total>{Number(itemTotal.toFixed(2)).toString()}</S.Total>
      </GridLocator>
      <GridLocator gridArea="itemDelete" onClick={() => handleDelete()}>
        <span style={{ fontSize: "0px" }}>Delete</span>
        <S.ImgWrapper isFirst={isFirst}>
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.47225 0L9.36117 0.888875H12.4722V2.66667H0.027832V0.888875H3.13892L4.02783 0H8.47225ZM2.6945 16C1.71225 16 0.916707 15.2045 0.916707 14.2222V3.55554H11.5834V14.2222C11.5834 15.2045 10.7878 16 9.80562 16H2.6945Z"
              fill="#888EB0"
            />
          </svg>
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
