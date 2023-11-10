// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function Subject() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   const data = [
//     {
//       name: 'STUDENT1',
//       img: 'student4.jpeg',
//     },
//     {
//       name: 'STUDENT2',
//       img: 'student4.jpeg',
//     },
//     {
//       name: 'STUDENT3',
//       img: 'student4.jpeg',
//     },
//   ];

//   const defaultImagePath = '/students/default-image.jpg'; // Replace with your default image path

//   return (
//     <div className="p-4 d-flex flex-column align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', minHeight: '100vh' }}>
//       <h1 className="text-white mb-4">Students Profile</h1>
//       <Slider {...settings}>
//         {data.map((d, idx) => (
//           <Col key={idx} className="my-2 d-flex justify-content-center">
//             <Card className="rounded-circle shadow" style={{ width: '18rem', height: '18rem', overflow: 'hidden' }}>
//               <Card.Img src={d.img ? `/students/${d.img}` : defaultImagePath} className="h-50 w-100" />
//               <Card.Body className="d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(to bottom, #14161b 50%, transparent 50%)' }}>
//                 <div className="text-white text-center">
//                   <Card.Title>{d.name}</Card.Title>
//                   <Card.Text>School students profiles.</Card.Text>
//                 </div>
//                 <div className="d-flex justify-content-center mt-2">
//                   <Button variant="primary" style={{ color: 'white' }}>Go to</Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Subject;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Subject() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const data = [
    {
      name: 'STUDENT1',
      img: 'student4.jpeg',
    },
    {
      name: 'STUDENT2',
      img: 'student4.jpeg',
    },
    {
      name: 'STUDENT3',
      img: 'student4.jpeg',
    },
  ];

  const defaultImagePath = '/students/default-image.jpg'; // Replace with your default image path

  return (
    <div className="p-4 d-flex flex-column align-items-center" style={{ background: 'linear-gradient(to right, #14161b, #1e1f26)', minHeight: '100vh' }}>
      <h1 className="text-light mb-4">Students Profile</h1>
      <Slider {...settings}>
        {data.map((d, idx) => (
          <Col key={idx} className="my-2 d-flex justify-content-center">
            <Card className="rounded-circle shadow" style={{ width: '18rem', height: '18rem', overflow: 'hidden' }}>
              <Card.Img src={d.img ? `/students/${d.img}` : defaultImagePath} className="h-50 w-100" />
              <Card.Body className="d-flex flex-column justify-content-between" style={{ background: 'linear-gradient(to bottom, #14161b 50%, transparent 50%)' }}>
                <div className="text-light text-center">
                  <Card.Title>{d.name}</Card.Title>
                  <Card.Text>School students profiles.</Card.Text>
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <Button variant="primary" style={{ color: 'white' }}>Go to</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Slider>
    </div>
  );
}

export default Subject;
