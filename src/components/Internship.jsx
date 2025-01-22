import React from 'react';
import '../css/internship.css';

const Card = ({ title, price, icon, videoUrl, description, buttonText }) => {
  return (
    <section className="card-section">
      <div className="card">
        <div className="flip-card">
          <div className="flip-card__container">
            <div className="card-front">
              <div className={`card-front__tp card-front__tp--${icon}`}>
                {/* You can replace the SVG with an icon from react-icons or a more reusable method */}
                <svg className="card-front__icon">
                  {/* Your SVG path goes here */}
                </svg>
                <h2 className="card-front__heading">{title}</h2>
                <p className="card-front__text-price">From {price}</p>
              </div>
              <div className="card-front__bt">
                <p className="card-front__text-view card-front__text-view--city">
                  View me
                </p>
              </div>
            </div>
            <div className="card-back">
              <video className="video__container" autoPlay muted loop>
                <source className="video__media" src={videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div className="inside-page">
          <div className="inside-page__container">
            <h3 className="inside-page__heading inside-page__heading--city">{description}</h3>
            <p className="inside-page__text">
              As cities never sleep, there is always something going on, no matter what time!
            </p>
            <a href="#" className="inside-page__btn inside-page__btn--city">
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Internship = () => {
  return (
    <main className="main">
      <section className="card-area">
        <Card 
          title="City break" 
          price="£29" 
          icon="city" 
          videoUrl="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
          description="For urban lovers"
          buttonText="View deals"
        />
                <Card 
          title="City break" 
          price="£29" 
          icon="city" 
          videoUrl="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
          description="For urban lovers"
          buttonText="View deals"
        />
                <Card 
          title="City break" 
          price="£29" 
          icon="city" 
          videoUrl="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
          description="For urban lovers"
          buttonText="View deals"
        />
                <Card 
          title="City break" 
          price="£29" 
          icon="city" 
          videoUrl="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
          description="For urban lovers"
          buttonText="View deals"
        />
        <Card 
          title="Ski Adventure" 
          price="£49"
          icon="ski"
          videoUrl="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
          description="For winter thrill seekers"
          buttonText="View deals"
        />
      </section>
    </main>
  );
};

export default Internship;
