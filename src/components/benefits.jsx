export const Benefits = (props) => {
    return (
      <div id='benefits' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Benefits of working with us</h2>
            {/* <p>
              Our team of professionals will give you a personalized treatment from start to finish in all the procedures and contracted services.
            </p> */}
          </div>
          <div className='row benefits-wrap'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-lg-3 col-md-4 col-sm-6 col-sx-12">
                  {' '}
                  {/* <i className={d.icon}></i> */}
                  <img src={d.img} className="img-responsive benefits-img" alt={d.name} />
                  <div className='benefits-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }
  