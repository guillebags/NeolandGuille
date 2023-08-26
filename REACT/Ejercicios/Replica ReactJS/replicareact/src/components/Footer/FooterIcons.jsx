import { Flex, Image, Link, Stack, Text } from "@chakra-ui/react";

const FooterIcons = () => {
  return (
    <Flex
      direction={["column", "column", "column", "row"]}
      justifyContent="space-between"
    >
      <Stack flexDir="row" p="2em">
        <Link>
          <Image src="https://res.cloudinary.com/dluwybogp/image/upload/v1693074720/Wallapop/apple.53d286d5_mlvwft.svg" />
          <Text>Apple Store</Text>
        </Link>
        <Link>
          <Image src="https://res.cloudinary.com/dluwybogp/image/upload/v1693074720/Wallapop/huawei.befe6592_yd9kg9.svg" />
          <Text>AppGallery</Text>
        </Link>
        <Link>
          <Image src="https://res.cloudinary.com/dluwybogp/image/upload/v1693074720/Wallapop/android.2f1aa3f9_k9g08v.svg" />
          <Text>Google Play</Text>
        </Link>
      </Stack>
      <Stack flexDir="row" p="2em" gap="2em">
        <Link>
          <Image src="https://res.cloudinary.com/dluwybogp/image/upload/v1693075528/Wallapop/1654602_yrmrys.png" />
        </Link>
        <Link>
          <Image src="https://res.cloudinary.com/dluwybogp/image/upload/v1693075528/Wallapop/1654624_wbvi7d.png" />
        </Link>
        <Link>
          <Image src="https://res.cloudinary.com/dluwybogp/image/upload/v1693075528/Wallapop/1654635_cvcqig.png" />
        </Link>
      </Stack>
    </Flex>
  );
};

export default FooterIcons;
