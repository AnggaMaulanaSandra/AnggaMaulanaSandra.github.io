export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Angga Maulana Sandra</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Bachelor</span> <br />
            Industrial Engineer
          </h1>
          <p className="hero--section-description">Fresh graduates of Ahmad Dahlan University with a GPA of 3.03 S1 Industrial Engineering.</p>
        </div>
      </div>
      <div className="hero--section--img ">
        <div className="circle-container">
          <img src="./img/angga-depan.jpg" alt="Hero Section" className="circle-image" />
        </div>
      </div>
    </section>
  );
}
