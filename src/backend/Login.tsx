import { Link } from "react-router-dom";
import styles from "./backend.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.loginWrapper}>
        <div className={styles.loginFrom}>
          <h3 className="text-center mt-1 mb-4">
            <span className="text-blue-700">S</span>killo.
          </h3>
          <div className="mb-3 mt-3">
            <input
              type="email"
              className="p-2 border focus:border rounded"
              id="email"
              placeholder="User name"
              name="email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="p-2 border focus:border rounded"
              id="pwd"
              placeholder="Password"
              name="pswd"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-black rounded px-2 py-1">
              <Link to="/dashboard" className="text-white">
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
