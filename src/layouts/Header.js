import { useRouter } from "next/router";

import Image from "next/image";

import Instagram from "../../src/assets/instagram.svg";
import GridView from "../../src/assets/grid.svg";
import GoBack from "../assets/go-back.svg";

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

      <div
        className="titleWrapper"
        onClick={() => (window.location.href = "/")}
      >
        <h1 className="title">Nicola Narido</h1>
      </div>

      <div
        className="headerBtn gv"
        onClick={() => router.push("/grid-view", null, { shallow: true })}
      >
        <h3 className="gridView">Grid View</h3>
        <Image src={GridView} className="headerIcons" alt="Grid View logo." />
      </div>
    </header>
  );
};

export default Header;

// {displayGrid ? (
//   <>
//     <h3
//       className="gridView"
//       onClick={() => {
//         setDisplayGrid(false);
//         router.back();
//       }}
//     >
//       Back
//     </h3>
//     <Image src={GoBack} className="headerIcons" alt="Back logo." />
//   </>
// ) : (
//   <>
//     <h3 className="gridView">Grid View</h3>
//     <Image
//       src={GridView}
//       className="headerIcons"
//       alt="Grid View logo."
//     />
//   </>
// )}
