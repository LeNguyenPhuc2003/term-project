import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link
          className="btn btn-ghost text-xl"
          to="/"
          style={{ color: "white" }}
        >
          Nguyen Phuc Le
        </Link>
      </div>

      <div class="flex-none">
        <ul class="menu menu-horizontal px-2">
          <li>
            <details>
              <summary className="text-white">Navigation</summary>
              <ul class="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link
                    className="btn btn-ghost text-xl"
                    to="/"
                    style={{ color: "white" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-ghost text-xl"
                    to="/about"
                    style={{ color: "white" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="btn btn-ghost text-xl"
                    to="/projects"
                    style={{ color: "white" }}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
