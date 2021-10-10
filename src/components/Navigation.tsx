import Link from 'next/link';
import React, { ReactElement, useState } from 'react';

import navigation from '../utils/navigation.json';

const Navigation = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  const mobileNav: ReactElement[] = [];
  const desktopNav: ReactElement[] = [];
  navigation.forEach((n) => {
    mobileNav.push(
      <li onClick={() => setIsVisible(false)} key={n.text}>
        <Link href={n.link}>
          <a target={n.target} rel="noopener noreferrer">
            <span className="nav-text"> {n.text} </span>
            <img src={n.img} alt={n.text} />
          </a>
        </Link>
      </li>,
    );
    desktopNav.push(
      <li key={n.text}>
        <Link href={n.link}>
          <a target={n.target} rel="noopener noreferrer">
            {n.text}
          </a>
        </Link>
      </li>,
    );
  });

  return (
    <div>
      <div className="menu" onClick={() => setIsVisible(!isVisible)}>
        <img src="img/icons/menu.png" alt="menu" />
      </div>

      {isVisible && (
        <div id="navbar">
          <ul>{mobileNav}</ul>
        </div>
      )}

      <div id="full-navbar">
        <ul>{desktopNav}</ul>
      </div>
    </div>
  );
};

export default Navigation;
