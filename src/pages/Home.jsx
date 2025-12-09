import Slider from "../components/Slider";
import homeImg from "../assets/home2.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slider />

      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontWeight: 700,
          letterSpacing: "0.6px",
          color: "#ffd85a",
          textShadow: "0 2px 6px rgba(0,0,0,0.45)"
        }}
      >
         
      </h1>

      <div className="home-container">
        <header className="hero-section">
          <h1>
            
            <span className="highlight">Welcome to Chaitanya Gurukula School, Santebennur</span>
          </h1>

          <h3 className="tagline">
            Interface Friendly Learning At{" "}
            <span className="highlight2">Gurukula International School</span>
          </h3>

          <p className="description">
            Nestled in Bangalore South, Gurukula International School, Magadi
            Road is a highly progressive and enterprising International School
            committed to providing quality education with great emphasis on
            traditional values. Here at GIS we are reinventing education by
            breaking old moulds of thought.
          </p>
        </header>

        <section className="content-section">
          <div className="text-block">
            <h2>Courses :</h2>
            <ul>
              <li>Nursery: Montessori Methodology of teaching (PN, LKG, UKG)</li>
              <li>Grades 1 to 3 follow NCERT Curriculum</li>
              <li>Grades 4 to 10 follow CBSE Curriculum</li>
              <li>Grades 8 to 10 English Medium follow Karnataka State Board Syllabus</li>
        <li>Nursery to 10th Kannada Medium follow Karnataka State Board Syllabus  </li>
            </ul>
          </div>

          <div className="image-block">
            <img src={homeImg} alt="Principal" />
          </div>

          
          

          
        </section>
        ///////////////

        //////////////

        /////////////
        <h1 class="Map">Our Directions</h1>
        <iframe
        src="https://www.google.com/maps?q=52/4,+9th+cross,+Magadi+Road,+Bangalore+23&output=embed"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
  >      </iframe>
      </div>

      
    </div>
  );
};

export default Home;
