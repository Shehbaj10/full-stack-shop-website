import React from 'react';
import './AboutPage.css';
import abouta from '../images/abouta.png';
import aboutb from '../images/aboutb.png';
import aboutc from '../images/aboutc.png';
import aboutd from '../images/aboutd.png';
import aboute from '../images/aboute.png';

const aboutData = [
  {
    image: abouta,
    title: 'About Us',
    text: 'At SOIL, we\'re deeply committed to promoting healthy living and supporting our local community. For years, we\'ve been dedicated to bringing the freshest organic produce to Melbourne. But we\'re more than just a grocery store, we\'re a hub where you can learn, connect, and embrace sustainable living.'
  },
  {
    image: aboutb,
    title: 'Our Services',
    text: 'SOIL is more than just a place to buy groceries, it\'s a lifestyle destination. We regularly host informative seminars on topics like nutrition and organic farming because we believe that knowledge is the cornerstone of making informed, healthy choices.'
  },
  {
    image: aboutc,
    title: 'Our Mission',
    text: 'our mission is straightforward: to contribute to a healthier world through organic living. We\'re truly passionate about sustainable farming practices, championing local farmers, and providing our community with the finest organic products available.'
  },
  {
    image: aboutd,
    title: 'Our Understanding',
    text: 'Recognizing the fast-paced nature of modern life, we\'ve recently launched our new website to enhance your shopping experience. Now, you can easily browse our selection online, engage in discussions, read reviews, and find exactly what you\'re looking for.'
  },
  {
    image: aboute,
    title: 'Our Community',
    text: 'Whether you\'re a seasoned organic enthusiast or just beginning your journey towards healthier living, we extend a warm invitation to join us at SOIL. Explore our range of products, attend our enlightening seminars, or connect with like-minded individuals who share your passion for a greener, healthier planet. Welcome to SOIL, where great food and great people come together.'
  }
];

function AboutPage() {
  return (
    <div>
      <style>
        {`
          body {
            background-image: linear-gradient(white, green);
            background-size: cover;
            background-position: center; 
          }
        `}
      </style>
      {aboutData.map((item, index) => (
        <div key={index} className={`box${index % 2 === 0 ? '1' : '2'}`}>
          <div className={`container${index + 1}`}>
            <div className="row">
              <div className="col-md-6">
                <img src={item.image} alt={`About${index + 1}`} className="img-fluid col" />
              </div>
              <div className="col-md-6">
                <div className={`text${index + 1}`}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="box0">
        <div className="text-center">
          <h2>We make our own safe and green future, for us and our community</h2>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
