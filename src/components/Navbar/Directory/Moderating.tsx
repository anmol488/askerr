import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IoInformationCircle } from "react-icons/io5";
import { CommunitySnippet } from "../../../atoms/communitiesAtom";
import MenuListItem from "./MenuListItem";

type ModeratingProps = {
  snippets: CommunitySnippet[];
};

const Moderating: React.FC<ModeratingProps> = ({ snippets }) => {
  return (
    <Box mt={3} mb={3}>
      <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
        ADMIN
      </Text>
      {snippets.map((snippet) => (
        <MenuListItem
          key={snippet.communityId}
          displayText={`a/${snippet.communityId}`}
          link={`a/${snippet.communityId}`}
          icon={IoInformationCircle}
          iconColor="brand.100"
        />
      ))}
    </Box>
  );
};
export default Moderating;
