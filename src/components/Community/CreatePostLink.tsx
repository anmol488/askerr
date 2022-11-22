import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import useDirectory from "../../hooks/useDirectory";

type CreatePostProps = {};

const CreatePostLink: React.FC<CreatePostProps> = () => {
  const router = useRouter();
  const { toggleMenuOpen } = useDirectory();
  const onClick = () => {
    // Could check for user to open auth modal before redirecting to submit
    const { community } = router.query;
    if (community) {
      router.push(`/a/${router.query.community}/submit`);
      return;
    }
    // Open directory menu to select community to post to
    toggleMenuOpen();
  };
  return (
    <Flex
      justify="space-evenly"
      align="center"
      bg="white"
      height="56px"
      borderRadius={4}
      border="1px solid"
      borderColor="gray.300"
      p={2}
      mb={4}
    >
      <Icon as={MdOutlinePostAdd} fontSize={36} color="gray.300" mr={4} />
      <Input
        placeholder="Have a question? Ask 'em here!"
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        borderColor="gray.200"
        height="36px"
        borderRadius={4}
        mr={4}
        onClick={onClick}
      />
    </Flex>
  );
};
export default CreatePostLink;
