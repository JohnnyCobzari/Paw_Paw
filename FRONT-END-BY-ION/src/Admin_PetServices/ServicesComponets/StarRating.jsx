import React from 'react';

const StarRating = ({ rating }) => {
  const fullStar = process.env.PUBLIC_URL + '/Admin_services_foto/FullStar.png';
  const emptyStar = process.env.PUBLIC_URL + '/Admin_services_foto/EmptyStar.png';
  const halfStar = process.env.PUBLIC_URL + '/Admin_services_foto/HalfStar.png';

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img key={i} src={fullStar} alt="Full star" style={{ width: '20px' }} />);
    } else if (i - rating < 1 && i - rating > 0) { // For half stars
      stars.push(<img key={i} src={halfStar} alt="Half star" style={{ width: '20px' }} />);
    } else {
      stars.push(<img key={i} src={emptyStar} alt="Empty star" style={{ width: '20px' }} />);
    }
  }

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {stars}
    </div>
  );
};

export default StarRating;
