function Header({ theme }) {
  return (
    <div className='padT4 padB4'>
      <div className='container mobile-container'>
        <div className='d-flex justify-content-between'>
          <img src='/images/SVCClogo.png' alt='SVCC Home Page'></img>
          <div className='light'>
            <h4 className='header-title'>Silicon Valley Code Camp</h4>
          </div>
          <div className={theme === "light" ? "text-dark" : "text-info"}>
            Hello Mr. Smith &nbsp;&nbsp;
            <span>
              <a href='#'>sign-out</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
