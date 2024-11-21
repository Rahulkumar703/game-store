import { Copyright } from "lucide-react";
import { P } from "./ui/typography";

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-center w-full">
      <P className={"inline-flex gap-2 items-center"}>
        <Copyright className="w-4 h-4" /> 2024 Yono Game Store. All rights
        reserved.
      </P>
    </footer>
  );
};

export default Footer;
