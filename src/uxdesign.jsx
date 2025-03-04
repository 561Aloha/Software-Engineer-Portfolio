import React, { useState } from 'react';
import leftArrow from './assets/arrow.svg'; // Make sure to add the arrow images in your project
import rightArrow from './assets/arrow.svg';
import './uxdesign.css';
import chipotleImage from './assets/chipotle.jpg';
import starbooksImage from './assets/starbucks.jpg';
import lightening from './assets/lightning.svg';
import star from './assets/star.svg';
import smile from './assets/smile.svg';
import Carousel from './Carousel.jsx';
import slide1 from './assets/feature1.png';
import slide2 from './assets/feature2.png';
import slide3 from './assets/beforeafter.jpg';
import slide4 from './assets/beforeafter1.jpg';
import slide5 from './assets/beforeafter2.png';
import { NavBar } from './App.jsx';


  
const Persona = ({ image, callout, personsname, shortbio, listItems = [] }) => {
  return (
    <div>
      <div>
        <img src={image} alt={`${personsname} Image`} />
      </div>
      <div><h6>{callout}</h6></div>
      <div><h6>{personsname}</h6></div>
      <div><p>{shortbio}</p></div>
      <div>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const SecondaryResearch = ({ image, title, subheading, listItems, arrowdown, arrowup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='secondary-research-container' onClick={toggleOpen}>
      <img
        src={image}
        className={`research-img ${isOpen ? 'open' : 'closed'}`}
        alt={`${title} Image`}
      />
      <div className='research-text'>
        <h2>{title}</h2>
        {isOpen ? (
          <>
            <h3>Key Insights</h3>
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>{subheading}</p>
        )}
        <div>
          {isOpen ? (
            <button> Read the full UX Design Report</button>
          ) : (
            <> </>
          )}
        </div>
      </div>
      <img
        src={isOpen ? leftArrow : rightArrow}
        alt="Toggle"
        className="toggle-image"
        style={{ width: '48px', height: '48px', transform: isOpen ? 'rotate(-45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
      />
    </div>
  );
};

const UXDesign = () => {
  const starbucksData = {
    image: starbooksImage,
    title: 'Starbucks',
    subheading: 'I chose this company because of their high success in mobile ordering application usage and better understand how they are able to design features to build more digital engagement.',
    listItems: [
      'It has a 4.9/5 rating from 5.1M ratings in the Apple Store.',
      '48% of mobile users that use restaurant apps have Starbucks downloaded.',
      'Users are motivated to use the app because of their reward/stars program.'
    ]
  };
  const otherCompanyData = {
    image: chipotleImage,
    title: 'Other Company',
    subheading: 'Subheading for other company',
    listItems: [
      'Key insight 1 for other company.',
      'Key insight 2 for other company.',
      'Key insight 3 for other company.'
    ]
  };
  const personaData = {
    title: 'User Personas',
    subheading: 'Understanding our core audience',
    personas: [
      {
        image: './assets/persona1.jpg',
        callout: 'The Busy Professional',
        personsname: 'Needs quick service',
        shortbio: 'This persona represents professionals who value efficiency and speed in service.',
        listItems: ['Fast checkout', 'Mobile ordering', 'Loyalty rewards']
      },
      {
        image: './assets/persona2.jpg',
        callout: 'The Health Enthusiast',
        personsname: 'Seeks nutritious options',
        shortbio: 'Health-focused individuals who prioritize dietary needs and quality of ingredients.',
        listItems: ['Nutritional information', 'Customizable menu options', 'Allergy-friendly']
      }
    ]
  };
  return (
    <div>
      <NavBar />
      <div className="main-container">
        <header>
          <h1>Natures Way Cafe</h1>
          <h2> A mobile application </h2>
          <h4>This application is made for a hypothetical cafe that brings a mobile ordering experience to their customers. This was a solo project done in a Google UX Design course of 15 weeks.</h4>
        </header>
        <div className="carousel-parent">
          <h2> The Final Mockups</h2>
          <Carousel />
        </div>
        <div className='introduction'>
          <div className='intro-box'>
            <h2>Introduction</h2>
            <p>Nature’s Way Café offers a blend of healthy living with delicious meals, from smoothies to soups.</p>
          </div>
          <div className='intro-box2'>
            <h2>The Challenge</h2>
            <p>As a UI/UX Designer, modernizing the outdated website to improve customer engagement was key.</p>
          </div>
          <div className='intro-box3'>
            <h2>The Goal</h2>
            <p>The redesign aimed at clean visuals and intuitive navigation to ease online orders and visits.</p>
          </div>
        </div>
        <div className='painpoints'>
          <h2>Pain Points</h2>
          <div className='introduction'>
            <div className='painpoints-li'>
              <h3>Menu Unfamiliarity</h3>
              <p>Intimidation from trying new items without knowing what to expect.</p>
            </div>
            <div className='painpoints-li'>
              <h3>Lack of Personalization</h3>
              <p>Customers feel limited in customizing orders to fit personal preferences.</p>
            </div>
            <div className='painpoints-li'>
              <h3>Lacking Menu Information</h3>
              <p>Not enough details for those with dietary restrictions.</p>
            </div>
          </div>
        </div>
        <div className='research'>
          <h2>Secondary Research</h2>
          <SecondaryResearch {...starbucksData} />
          <SecondaryResearch {...otherCompanyData} />
          {/* <Persona {...personaData}/> */}
        </div>
        <div className='image-container-solution'>
          <h2>Coming up with a solution</h2>
          <img src={slide1} />
          <img src={slide2} />
        </div>
        <div className='three-boxes'>
          <h2>My Initial Designs: Usability Studies</h2>
          <h3 className='h'> This was the first working prototype, which I tested with my participants. This is where I found that my design had several issues</h3>
          <div className='usability'>
            <div className='header-content'>
              <h3>1</h3>
              <p>They liked being able to select/deselect ingredients. However when they wanted to revert their changes they were not able to do so.</p></div>
            <div className='header-content'>
              <h3>2</h3>
              <p>All of them had issues with the payment method. Once they are ready to check out and put their order information. All of them did not understand that they needed to swipe up to</p>
            </div>
            <div className='header-content'>
              <h3>3</h3>
              <p>Most found the expanded menu items on the menu page to be confusing. They thought the full length menu items represented specific food categories. (Salads, Sandwiches, Smoothies</p>
            </div>
          </div>
          <div className='image-container'>
            <h2>Revisions</h2>
            <img src={slide3} />
            <img src={slide4} />
            <img src={slide5} />
          </div>
        </div>
        <div className='review-container'>
          <div className="impact-container">
            <img src={smile} alt="Lightening" class="impact-image" />
            <div className="text-content">
              <h2>Impact</h2>
              <p>After showing the designs again to several new users among my previous ones. All of them were impressed with the mobile ordering app.</p>
              <p>They were able to navigate through the design with ease, and can see themselves using an application like this in the future.</p>
            </div>
          </div>
          <div className="impact-container">
          <img src={star} />
            <div className="text-content">
              <h2>Key Learnings</h2>
              <p>I learned a lot about designing with Figma, and experiencing the 5 stages design thinking.</p>
            </div>
          </div>
          <div className="impact-container">
          <img src="/assets/alarm.svg" alt="Alarm Icon" />
            <div className="text-content">
              <h2>What I would do if I had more time:</h2>
              <p>For users like Alex, I would want to build more functionalities that would make it easier for him. One example of this, is a feature to order ahead of time. To contribute to the users who are not familiar with using mobile ordering applications, I would also like to provide more animations and popups that help guide them through the mobile ordering proces</p>
                </div></div>
                <div className="impact-container">
            <img src={lightening} />
            <div className="text-content">
            <h2>Some of the Tech I used</h2>
                <ul>
                <li> TypeForm for surveys</li>
                <li>Google Docs for documentation of progress</li>
                <li>Figma for UX design and prototyping</li>
                <li>UnSplash for royalty free images.</li></ul>
                </div></div>
            </div>
        </div>
        </div>
    );
};




export default UXDesign;