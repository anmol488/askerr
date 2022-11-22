import React from "react";
import { Flex, Icon } from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import { SiDiscord } from "react-icons/si"
import useDirectory from "../../../hooks/useDirectory";
import Link from "next/link";

type ActionIconsProps = {};

const ActionIcons: React.FC<ActionIconsProps> = () => {
  const { toggleMenuOpen } = useDirectory();
  return (
    <Flex alignItems="center" flexGrow={1}>
      <>
        <Link href="https://discord.gg/qSWaXngkGe">
        <Flex
          display={{ base: "none", md: "flex" }}
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Icon as={SiDiscord} fontSize={20} />
        </Flex>
        </Link>
        <Flex
          mr={3}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
          onClick={toggleMenuOpen}
        >
          <Icon as={GrAdd} fontSize={20} />
        </Flex>
      </>
    </Flex>
  );
};
export default ActionIcons;
