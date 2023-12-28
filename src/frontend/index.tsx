import { NavLink, Outlet } from "react-router-dom";
import styles from "./frontend.module.css";

export const Frontend: React.FC = () => {
  return (
    <>
      <nav className={styles.navSection}>
        <div>
          <p className="font-bold text-2xl">
            <span className="text-blue-700">S</span>killo.
          </p>
        </div>
        <ul className={styles.navbar}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "font-bold" : "font-light"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${isActive ? "font-bold" : "font-light"}`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <p className="font-light cursor-pointer">Pricing</p>
          </li>
        </ul>

        <div>
          <button type="button" className=" bg-black text-white px-6 py-2 text-sm rounded-full">
            <NavLink to="/backend/login">Login</NavLink>
          </button>
        </div>
      </nav>

      <main className={styles.mainSection}>
        <Outlet />
      </main>
    </>
  );
};
