import logo from '../logo.svg';

function Header() {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 px-2 mb-lg-0 text-white text-decoration-none">
            <img src={logo} alt="logo" className="mr-8" height={40} width={40} />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#errors" className="nav-link px-2 text-white">Errors</a></li>
            <li><a href="#portals" className="nav-link px-2 text-white">Portals</a></li>
            <li><a href="#refs" className="nav-link px-2 text-white">Refs</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
