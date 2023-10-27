export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <div className="circle-container">
          <img src="./img/angga_rapi.jpg" alt="About Me" className="circle-image" />
        </div>
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            Fresh graduates of Ahmad Dahlan University with a GPA of 3.03 S1 Industrial Engineering, have an interest in Product Planning and Inventory Control, Talent Acquisition, Warehouse,
            Purchasing, Supply Chain, Manufacturing, K3 Ergonomics, Quality Control, 2D & 3D Design, HR Training Development and Business Development.
          </p>
          <p className="hero--section-description">Muhammadiyah Student Association FTI Commissariat (2019 - 2020) Head of Tabligh Study and Islamic Studies Division</p>
          <p className="hero--section-description">Muhammadiyah Student Association FTI Commissariat (2020-2021) Head of Arts, Culture and Sports Division</p>
          <p className="hero--section-description">Real Work Lecture of Anak Bangsa Mengabdi UAD (2022) Head of Unit 3 KKN AB</p>
        </div>
      </div>
    </section>
  );
}
