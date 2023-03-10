import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <h1 className="header-title">
        Studio
        <br />
        Narido.
      </h1>
      <nav className="header-nav">
        <ul className="header-menu">
          <li className="header-item">About</li>
          <li className="header-item">Services</li>
          <li className="header-item">Blog</li>
          <li className="header-item">FAQ</li>
          <li className="header-item">Contact</li>
        </ul>
      </nav>

      <div className="header-slogan">
        <p className="available">Available Now</p>
        <p className="header-book">Book for April Appointments Here.</p>
      </div>
    </header>
  );
};

export default Header;
