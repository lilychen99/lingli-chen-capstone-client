import React from 'react';
import ParisImage from '../../assets/images/paris.jpg';
import NYCImage from '../../assets/images/nyc.jpg';
import CapetownImage from '../../assets/images/capetown.jpg';
import KyotoImage from '../../assets/images/kyoto.jpg';
import SydneyImage from '../../assets/images/sydney.jpg';
import './Log.scss';

const exampleEntries = [
  {
    location: 'Paris, France',
    dates: '2023-06-10 to 2023-06-20',
    itinerary: 'Visit Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.',
    details: 'Staying in a hotel near the city center. Using public transportation.',
    price: 4,
    walkability: 5,
    safety: 4,
    thingsToDo: 5,
    photos: ParisImage
  },
  {
    location: 'Kyoto, Japan',
    dates: '2023-07-15 to 2023-07-25',
    itinerary: 'Tour Kinkaku-ji, Fushimi Inari Shrine, and Arashiyama Bamboo Grove.',
    details: 'Staying in a traditional ryokan. Renting bicycles for local travel.',
    price: 3,
    walkability: 5,
    safety: 5,
    thingsToDo: 5,
    photos: KyotoImage
  },
  {
    location: 'New York City, USA',
    dates: '2023-08-01 to 2023-08-10',
    itinerary: 'Explore Times Square, Central Park, and Statue of Liberty.',
    details: 'Booked an Airbnb in Manhattan. Using subway for transportation.',
    price: 5,
    walkability: 5,
    safety: 3,
    thingsToDo: 5,
    photos: NYCImage
  },
  {
    location: 'Sydney, Australia',
    dates: '2023-09-05 to 2023-09-15',
    itinerary: 'Visit Sydney Opera House, Bondi Beach, and Sydney Harbour Bridge.',
    details: 'Staying in a hotel near the harbor. Renting a car for travel.',
    price: 4,
    walkability: 4,
    safety: 5,
    thingsToDo: 4,
    photos: SydneyImage
  },
  {
    location: 'Cape Town, South Africa',
    dates: '2023-10-10 to 2023-10-20',
    itinerary: 'Tour Table Mountain, Robben Island, and V&A Waterfront.',
    details: 'Staying in a guesthouse. Using Uber for local transportation.',
    price: 3,
    walkability: 3,
    safety: 4,
    thingsToDo: 5,
    photos: CapetownImage
  }
];

const Log = () => {
  return (
    <div className="log">
      {exampleEntries.map((entry, index) => (
        <div key={index} className="log__entry">
          <h3 className="log__title">Trip to {entry.location}</h3>
          <p><strong>Dates:</strong> {entry.dates}</p>
          <p><strong>Itinerary:</strong> {entry.itinerary}</p>
          <p><strong>Details:</strong> {entry.details}</p>
          <p><strong>Price:</strong> {entry.price} stars</p>
          <p><strong>Walkability:</strong> {entry.walkability} stars</p>
          <p><strong>Safety:</strong> {entry.safety} stars</p>
          <p><strong>Things to Do:</strong> {entry.thingsToDo} stars</p>
          <p><strong>Photos:</strong> {entry.photos}</p>
        </div>
      ))}
    </div>
  );
};

export default Log;
