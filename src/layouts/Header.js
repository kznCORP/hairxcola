import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

export const Header = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const offsetTop = 50; // set the offset value here
    const targetElement = document.querySelector(e.target.hash);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offsetTop,
        behavior: "smooth",
      });
    }

    // Navigate to home page and scroll to target element using `asPath` query parameter
    router.push(`/?scrollTo=${e.target.hash.slice(1)}`, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    const { scrollTo } = router.query;
    if (scrollTo) {
      const targetElement = document.querySelector(`#${scrollTo}`);
      if (targetElement) {
        const offsetTop = 50; // set the offset value here
        window.scrollTo({
          top: targetElement.offsetTop - offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [router.query]);

  return (
    <header className="header">
      <Link href="/">
        <h1 className="header-title">
          Studio
          <br />
          Narido.
        </h1>
      </Link>
      <nav className="header-nav">
        <ul className="header-menu">
          <li className="header-item">
            <Link href="/">Home</Link>
          </li>
          <li className="header-item">
            <Link href="/about">About</Link>
          </li>
          <li className="header-item">
            <Link href="/#services" onClick={handleClick}>
              Services
            </Link>
          </li>
          <li className="header-item">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="header-item">
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>

      {router.pathname === "/" && (
        <div className="header-slogan">
          <p className="available">Available Now</p>
          <Link href="https://hairxcola.square.site">
            <p className="header-book">Book for June/July Appointments Here.</p>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
