import { ReactElement } from 'react';

const IndexPage = (): ReactElement => (
  <div className="landing">
    <div id="about">
      <h1>Ruby Dong</h1> <hr />
      <div className="bio">
        <div className="bio-img">
          <img src="img/wisteria.jpg" alt="wisteria" />
        </div>
        <div className="bio-desc">
          <div className="text">
            <h2>Hello, I'm Ruby</h2>
            I am a software engineer who loves coding and designing. When I am not doing either of those
            things, you might find me exploring new cities, watercolor painting,
            strumming my ukulele, playing piano, skateboarding, or capturing my
            favorite moments through photography.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
