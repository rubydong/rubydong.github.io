import { ReactElement } from 'react';

const IndexPage = (): ReactElement => (
  <div className="landing">
    <div id="about">
      <h1>Ruby Dong</h1> <hr />
      <div className="bio">
        <div className="bio-img">
          <img src="img/blossom.jpg" alt="blossom" />
        </div>
        <div className="bio-desc">
          <div className="text">
            <h2>Hello, I'm Ruby!</h2>
            When I'm not coding, you might find me exploring new cities, playing
            pickleball, strumming my ukulele, skateboarding, or stuffing my face
            with delicious food.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
