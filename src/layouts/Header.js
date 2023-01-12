import { useRouter } from "next/router";

import Image from "next/image";

import Instagram from "../../src/assets/instagram.svg";
import GridView from "../../src/assets/grid.svg";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <div
        className="headerBtn ig"
        onClick={() =>
          window.open("https://instagram.com/hairxcola/", "_blank")
        }
      >
        {/* Instagram Icon */}
        <Image src={Instagram} className="headerIcons" alt="Instagram logo." />
        <h3 className="instagram">Instagram</h3>
      </div>

      <div className="titleWrapper" onClick={() => router.push("/")}>
        <h1 className="title">Nicola Narido</h1>
      </div>

      <div className="headerBtn gv">
        <h3 className="gridView">Grid View</h3>
        <Image src={GridView} className="headerIcons" alt="Grid View logo." />
      </div>
    </header>
  );
};

export default Header;
