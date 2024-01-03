import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setOrder: (setOrder: string) => void;
  currentSort: string;
}
const SortSelector = ({ setOrder, currentSort }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

    const tempSortOrder = sortOrder.find(order => order.value === currentSort)
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
         {tempSortOrder ? tempSortOrder?.label: <Text>Relevence</Text>}
          
        </MenuButton>
        <MenuList>
          {sortOrder.map((order) => (
            <MenuItem
              onClick={() => setOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {" "}
              {order.label}{" "}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
