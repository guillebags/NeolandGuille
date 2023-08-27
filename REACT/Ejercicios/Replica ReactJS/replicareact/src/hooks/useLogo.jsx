import useWidth from "./useWidth";

const useLogo = () => {
  const { width } = useWidth();
  const logoSrc =
    width < 1000
      ? "https://res.cloudinary.com/dluwybogp/image/upload/v1693052609/Wallapop/mobile-logo-wallapop-home-v2_gvocwa.svg"
      : "https://res.cloudinary.com/dluwybogp/image/upload/v1693052609/Wallapop/logo-wallapop-home-v2_d4ccv2.svg";
  return logoSrc;
};

export default useLogo;
