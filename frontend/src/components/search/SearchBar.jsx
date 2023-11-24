import React from "react";
import {
  BarContainer,
  FilterDiv,
  IconButton,
  Options,
  Search,
  SearchBarDiv,
  Select,
  SelectDiv,
  ViewDiv,
} from "./style";
import { FaTh, FaList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeView } from "../../store/slice/filterSlice";
function SearchBar() {
  const dispatch = useDispatch();
  const view = useSelector((state) => {
    return state.filter.view;
  });

  console.log(view);
  const options = [
    {
      name: "Select Order",
      value: "order",
      id: 0,
    },
    {
      name: "a-z",
      value: "a-z",
      id: 1,
    },

    {
      name: "z-a",
      value: "z-a",
      id: 2,
    },
  ];

  return (
    <BarContainer>
      <SearchBarDiv>
        <Search
          type='text'
          placeholder='Enter name...'
        />
      </SearchBarDiv>

      <FilterDiv>
        <ViewDiv>
          <IconButton
            onClick={() => {
              dispatch(changeView("list"));
            }}
            highlight={view === "list" ? "yes" : "no"}
          >
            <FaList />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(changeView("grid"));
            }}
            highlight={view !== "list" ? "yes" : "no"}
          >
            <FaTh />
          </IconButton>
        </ViewDiv>
        <SelectDiv>
          <Select>
            {options.map((option) => {
              return (
                <Options
                  key={option.id}
                  value={option.value}
                >
                  {option.name}
                </Options>
              );
            })}
          </Select>
        </SelectDiv>
      </FilterDiv>
    </BarContainer>
  );
}

export default SearchBar;
