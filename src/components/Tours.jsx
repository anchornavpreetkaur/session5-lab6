import logo from '../assets/images/tour-1.jpeg'
import logo2 from '../assets/images/tour-2.jpeg'
import logo3 from '../assets/images/tour-3.jpeg'
import logo4 from '../assets/images/tour-4.jpeg' 
import logo1 from '../assets/images/tour-5.jpeg'
import logo5 from '../assets/images/tour-6.jpeg'

function Tours() {
  return (
    <div>
      <section className="section" id="tours">
  <div className="section-title">
    <h2>
      featured <span>tours</span>
    </h2>
  </div>
  <div className="section-center featured-center">
    <article className="tour-card">
      <div className="tour-img-container">
        <img
          src={logo}
          className="tour-img"
          alt="Tibet Adventure"
        />
        <p className="tour-date">august 26th, 2025</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>Tibet Adventure</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            china
          </p>
          <p>from €2100</p>
          <p>6 days</p>
        </div>
      </div>
    </article>
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={logo1} className="tour-img" alt="best of java" />
        <p className="tour-date">october 1th, 2025</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>best of java</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            indonesia
          </p>
          <p>from €1400</p>
          <p>11 days</p>
        </div>
      </div>
    </article>
    <article className="tour-card">
      <div className="tour-img-container">
        <img
          src={logo2}
          className="tour-img"
          alt="explore hong kong"
        />
        <p className="tour-date">september 15th, 2025</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>explore hong kong</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            hong kong
          </p>
          <p>from €5000</p>
          <p>8 days</p>
        </div>
      </div>
    </article>
    <article className="tour-card">
      <div className="tour-img-container">
        <img
          src={logo3}
          className="tour-img"
          alt="kenya highlights"
        />
        <p className="tour-date">december 5th, 2025</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>kenya highlights</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            kenya
          </p>
          <p>from €3300</p>
          <p>20 days</p>
        </div>
      </div>
    </article>
  </div>
</section>
    </div>
  );
}

export default Tours;
