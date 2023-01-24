import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/237/184/139">Macaroni and Cheese</NavLink>
          </li>
          <li>
            <NavLink to="/191/255/188">Granny Smith Apple</NavLink>
          </li>
          <li>
            <NavLink to="/108/70/78">Eggplant</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
