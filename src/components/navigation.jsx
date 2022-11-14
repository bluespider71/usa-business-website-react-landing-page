export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='./'>
            <img src="img/logo.png" className="img-responsive" alt="" />{" "}
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#home' className='page-scroll'>
                home
              </a>
            </li>
            <li>
              <a href='#service' className='page-scroll'>
                Our services
              </a>
            </li>
            <li>
              <a href='#benefits' className='page-scroll'>
                Benefits
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About us
              </a>
            </li>
            {/* <li>
              <a href='#ourclients' className='page-scroll'>
                Our Clients
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
