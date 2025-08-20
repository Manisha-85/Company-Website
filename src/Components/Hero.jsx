import officeimage from "../assets/office.png"
const Hero = () => {
  return (
    <div >
      <section className="hero-section text-center py-5 text-right">
      <div className="container justify-content-lg-start">
        <h1 className="display-5 fw-bold text-secondary">
          Strategize & Suceed<br />
          <span className="text-secondary">Driving Success Through Strategic Guidance.</span>
        </h1>
        <p className="mt-3 text-muted text-black-50">
        These services can be tailored to meet the specific needs and<br />
          challenges of each client, providing valuable expertise and support to<br />
          drive business success.
        </p>
        
        <button className="btn btn-dark rounded-pill px-4 mt-4">Get Started Now</button>
        
      </div>
   
   <div className='office-image'>
          <img src={officeimage} alt='office' />
        </div>
        
    </section>

    </div>
    
  );
};

export default Hero;