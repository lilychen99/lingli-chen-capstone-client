import React, { useState } from 'react';
import './NewLog.scss';

const NewLog = () => {
  const [formData, setFormData] = useState({
    location: '',
    dates: '',
    itinerary: '',
    details: '',
    price: '',
    walkability: '',
    safety: '',
    thingsToDo: '',
    photos: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='new-trip__container'>
    <h2 className="new-log__title">
        New Trip Log
    </h2>
    <form className="new-log__form" onSubmit={handleSubmit}>
      <div className="new-log__form-group">
        <label htmlFor="location" className="new-log__label">Location</label>
        <input 
          type="text" 
          id="location" 
          name="location" 
          value={formData.location} 
          onChange={handleChange} 
          className="new-log__input"
        />
      </div>
      <div className="new-log__form-group">
        <label htmlFor="dates" className="new-log__label">Dates</label>
        <input 
          type="text" 
          id="dates" 
          name="dates" 
          value={formData.dates} 
          onChange={handleChange} 
          className="new-log__input"
        />
      </div>
      <div className="new-log__form-group">
        <label htmlFor="itinerary" className="new-log__label">Itinerary</label>
        <textarea 
          id="itinerary" 
          name="itinerary" 
          value={formData.itinerary} 
          onChange={handleChange} 
          className="new-log__textarea"
        />
      </div>
      <div className="new-log__form-group">
        <label htmlFor="details" className="new-log__label">Details</label>
        <textarea 
          id="details" 
          name="details" 
          value={formData.details} 
          onChange={handleChange} 
          className="new-log__textarea"
        />
      </div>
      <div className="new-log__form-group">
        <label htmlFor="price" className="new-log__label">Price (out of 5 stars)</label>
        <select 
          id="price" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
          className="new-log__select"
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} stars</option>
          ))}
        </select>
      </div>
      <div className="new-log__form-group">
        <label htmlFor="walkability" className="new-log__label">Walkability (out of 5 stars)</label>
        <select 
          id="walkability" 
          name="walkability" 
          value={formData.walkability} 
          onChange={handleChange} 
          className="new-log__select"
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} stars</option>
          ))}
        </select>
      </div>
      <div className="new-log__form-group">
        <label htmlFor="safety" className="new-log__label">Safety (out of 5 stars)</label>
        <select 
          id="safety" 
          name="safety" 
          value={formData.safety} 
          onChange={handleChange} 
          className="new-log__select"
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} stars</option>
          ))}
        </select>
      </div>
      <div className="new-log__form-group">
        <label htmlFor="thingsToDo" className="new-log__label">Things to Do (out of 5 stars)</label>
        <select 
          id="thingsToDo" 
          name="thingsToDo" 
          value={formData.thingsToDo} 
          onChange={handleChange} 
          className="new-log__select"
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} stars</option>
          ))}
        </select>
      </div>
      <div className="new-log__form-group">
        <label htmlFor="photos" className="new-log__label">Photos</label>
        <input 
          type="file" 
          id="photos" 
          name="photos" 
          onChange={handleChange} 
          className="new-log__input"
        />
      </div>
      <button type="submit" className="new-log__submit">Submit</button>
    </form>
    </div>
  );
};

export default NewLog;
