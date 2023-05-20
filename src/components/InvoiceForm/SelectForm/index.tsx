import * as S from "./styles";

interface ISelectForm {
  id: string;
  inicialValue: number | undefined;
  options: IOption[];
}

interface IOption {
  name: string;
  value: number;
}

export const SelectForm = ({ id, inicialValue, options }: ISelectForm) => {
  return (
    <S.Select id={id} name={id}>
      {options.map((option) => (
        <option
          key={`option-${option.value}`}
          value={option.value}
          selected={
            inicialValue
              ? option.value === inicialValue
                ? true
                : false
              : false
          }
        >
          {option.name}
        </option>
      ))}
    </S.Select>
  );
};
