import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
/*This component renders the navbar for the app and will be displayed on all pages through the layout component
I added  next useRouter() to get the current pathname to help switch the listItem active className using a turnery statement */

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="container">
      <Link href="/" legacyBehavior>GIFT | LEHOBYE</Link>
      <ul className="list">
        <li className={router.pathname == "/" ? "listItem active" : "listItem"}>
          <Link href="/" legacyBehavior>HOME</Link>
        </li>
        <li
          className={
            router.pathname == "/about" ? "listItem active" : "listItem"
          }
        >
          <Link href="/about" legacyBehavior>ABOUT</Link>
        </li>
        <li
          className={
            router.pathname == "/skills" ? "listItem active" : "listItem"
          }
        >
          <Link href="/skills" legacyBehavior>SKILLS</Link>
        </li>
        <li
          className={
            router.pathname == "/projects" ? "listItem active" : "listItem"
          }
        >
          <Link href="/projects" legacyBehavior>PROJECTS</Link>
        </li>
        <li
          className={
            router.pathname == "/contact" ? "listItem active" : "listItem"
          }
        >
          <Link href="/contact" legacyBehavior>CONTACT</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className="menu"
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <li className="menuItem">
          <Link href="/" legacyBehavior>HOME</Link>
        </li>
        <li className="menuItem">
          <Link href="/about" legacyBehavior>ABOUT</Link>
        </li>
        <li className="menuItem">
          <Link href="/skills" legacyBehavior>SKILLS</Link>
        </li>
        <li className="menuItem">
          <Link href="/projects" legacyBehavior>PROJECTS</Link>
        </li>
        <li className="menuItem">
          <Link href="/contact" legacyBehavior>CONTACT</Link>
        </li>
      </ul>

      <style jsx>{`
        .active {
          color: #f65e06 !important;
          border-bottom: 2px solid #f65e06;
          padding: 2.5px;
        }
        .container {
          height: 50px;
          background-color: var(--darker--color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 18px;
          padding: 0px 100px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99;
          /* position: relative; */
          overflow: hidden;
        }

        .listItem {
          display: inline;
          margin-right: 30px;
          font-size: 14px;
          /* font-weight: 300; */
          color: lightgray;
          cursor: pointer;
        }

        .listItem:hover {
          color: #f65e06;
          border-bottom: 2px solid #f65e06;
        }

        .hamburger {
          display: none;
          width: 25px;
          height: 20px;
          cursor: pointer;
        }

        .line {
          width: 100%;
          height: 3px;
          background-color: #f65e06;
        }

        .menu {
          display: none;
          position: fixed;
          width: 50vw;
          height: calc(100vh - 50px);
          background-color: #fff;
          top: 50px;
          /* right: 0px; */
          z-index: 9999;
          margin: 0;
          padding: 0;
          font-weight: bold;
          color: #f65e06;
          list-style: none;
          transition: all 1s ease;
          font-size: 16px;
        }

        @media screen and (max-width: 900px) {
          .container {
            padding: 0px 20px;
          }

          .listItem {
            display: none;
          }

          .hamburger {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
          .menu {
            display: flex;
            flex-direction: column;
            align-items: center;
            /* justify-content: center; */
            padding-top: 5rem;
            gap: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
