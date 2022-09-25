import { Fragment, ReactElement } from 'react';

import photography from '../utils/photography.json';

const PhotographyPage = (): ReactElement => {
  const photographyContent = photography.map((photo, i) => {
    const styleOne = { backgroundColor: photo.color1 };
    const styleTwo = { backgroundColor: photo.color2 };

    return (
      <Fragment key={photo.place1}>
        <div className={`location ${i % 2 === 0 ? '' : 'float-right'}`}>
          <div className="place" style={styleOne}>
            <h2>{photo.place1}</h2>
          </div>
          <br />
          <div className="place place2" style={styleTwo}>
            <h2>{photo.place2}</h2>
          </div>
        </div>
        {photo.images.map((image) => (
          <img key={image} src={image} alt={photo.place1} />
        ))}
        <div style={{ marginBottom: '40px' }}></div>
      </Fragment>
    );
  });

  return (
    <div className="landing">
      <div id="photography">
        <h1> My Photos </h1>
        <hr />
        {photographyContent}
      </div>
    </div>
  );
};

export default PhotographyPage;
