export const Services = (props) => {
  return (
    <div id='service' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our services</h2>
          <p>
            Our team of professionals will give you a personalized treatment from start to finish in all the procedures and contracted services.
          </p>
        </div>
        <div className='row service-wrap'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 col-12">
                {' '}
                {/* <i className={d.icon}></i> */}
                <img src={d.img} className="img-responsive service-img" alt={d.name} />
                <div className='service-desc'>
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



