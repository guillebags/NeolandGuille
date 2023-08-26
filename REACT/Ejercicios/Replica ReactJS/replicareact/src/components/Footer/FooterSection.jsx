import { Heading, ListItem, List, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FooterSection = ({ title, links = [] }) => {
  return (
    <section>
      <Heading size="4xs">{title}</Heading>
      <List>
        {links.map((link) => (
          <ListItem key={link}>
            <Link>
              <Text fontSize="sm" fontWeight={300}>
                {link}
              </Text>
            </Link>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default FooterSection;
