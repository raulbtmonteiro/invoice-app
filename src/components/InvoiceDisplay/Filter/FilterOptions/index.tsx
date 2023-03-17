import * as S from "./styles";
import iconCheck from "../../../../assets/icon-check.svg";

interface FilterOptions {
  status: string;
  activeFilter: string[];
  setActiveFilter: (status: string[]) => void;
}

export const FilterOptions = ({ status, activeFilter, setActiveFilter }: FilterOptions) => {

  const handleClick = () => {
    if(activeFilter.includes(status)){
      setActiveFilter(activeFilter.filter(item => item !== status))
    } else {
      setActiveFilter([...activeFilter, status])
    }
  };

  return (
    <>
      <S.OptionGroup onClick={() => handleClick()}>
        <S.SelectionBox isSelected={activeFilter.includes(status)}>
          <img src={iconCheck} />
        </S.SelectionBox>
        {status}
      </S.OptionGroup>
    </>
  );
};
