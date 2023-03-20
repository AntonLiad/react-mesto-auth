import { useState } from 'react';

function Header({ isOpen, title, email, onClick, onSingOut }) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <>
      {show && (
        <div className={`${show ? 'header__bar-active' : ''} header__bar`}>
          <h4 className="header__bar-email">{email}</h4>
          <div className="header__bar-button" onClick={onSingOut}>
            {title}
          </div>
        </div>
      )}
      {isOpen ? (
        <header className="header">
          <div className="header__logo"></div>
          <div className="header__nav">
            <li className="header__email">{email}</li>
            <button className="header__btn-dectop" onClick={onSingOut}>
              {title}
            </button>
          </div>
          {isOpen ? (
            <div
              className={`header__burger ${show ? 'active' : ''}`}
              onClick={handleShow}
            >
              <span></span>
            </div>
          ) : (
            ''
          )}
        </header>
      ) : (
        <header className="header">
          <div className="header__logo"></div>
          <div className="header__nav">
            <button className="header__included" onClick={onClick}>
              {title}
            </button>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;

// function HeaderOne() {

// return (
// <>
// {show && (
//   <div className={`${show ? 'header__bar-active' : ''} header__bar`}>
//     <li className="header__email">{email}</li>
//     <li className="header__included" onClick={onClick}>
//       {title}
//     </li>
//   </div>
// )}

// <header className="header">
//   <div className="header__logo"></div>
//   <nav className="header__nav">
//     <ul className="header__box">
//       <li className="header__email">{email}</li>
//       <button className="header__included" onClick={onClick}>
//         {title}
//       </button>
//     </ul>
//   </nav>
//   {isOpen ? (
//     <div
//       className={`header__burger ${show ? 'active' : ''}`}
//       onClick={handleeShow}
//     >
//       <span></span>
//     </div>
//   ) : (
//     ''
//   )}
// </header>
// </>
// );
// }