import React from 'react';

import './MainBtn.scss';

function MainBtn({
  text,
  href,
}) {
  return (
    <button
      type="button"
      className="mainBtn"
    >
      <a
        href={href}
      >
        {text}
      </a>
    </button>
  );
}

export default MainBtn;
