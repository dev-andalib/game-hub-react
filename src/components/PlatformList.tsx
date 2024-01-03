import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hook/usePlatform";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
  
}

const PlatformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, err } = usePlatforms();
  if (err) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
          {selectedPlatform ? selectedPlatform.name : <Text>Platform List</Text>}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}> {platform.name} </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformList;
