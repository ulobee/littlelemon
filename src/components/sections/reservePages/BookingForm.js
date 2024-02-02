import React, { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";

export default function ReservationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate();
  const validateField = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "fName":
      case "lName":
        if (!value.trim()) errorMsg = "Name is required";
        else if (value.length < 2) errorMsg = "Name must be at least 2 characters";
        break;
      case "email":
        if (!value.trim()) errorMsg = "Email is required";
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          errorMsg = "Invalid email address";
        break;
      case "tel":
        if (!value.trim()) errorMsg = "Phone number is required";
        else if (!/^(\d{3}-\d{3}-\d{4})$/.test(value))
          errorMsg = "Invalid phone format (xxx-xxx-xxxx)";
        break;
      case "people":
        if (value < 1 || value > 100) errorMsg = "Number of people must be between 1 and 100";
        break;
      default:
        break;
    }
    setErrors(prevErrors => ({ ...prevErrors, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fName":
        setFName(value);
        break;
      case "lName":
        setLName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "tel":
        setTel(value);
        break;
      case "people":
        setPeople(value);
        break;
      case "date":
        setDate(value);
        break;
      case "occasion":
        setOccasion(value);
        break;
      case "preferences":
        setPreferences(value);
        break;
      case "comments":
        setComments(value);
        break;
    }
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.entries({ fName, lName, email, tel, people }).forEach(([key, value]) => {
      validateField(key, value);
    });
    if (Object.values(errors).some(errorMsg => errorMsg !== "")) {
      alert("Please correct the errors before submitting.");
      return;
    }else {
      setIsSubmitted(true);
      
    }
  };
  if (isSubmitted) {
    
    navigate('/confirmation');
  }
  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fName">First Name</label> <br />
        <input type="text" id="fName" name="fName" placeholder="First Name" required minLength={2} maxLength={50} value={fName} onChange={handleChange} />
        {errors.fName && <p className="error">{errors.fName}</p>}
      </div>
      <div>
        <label htmlFor="lName">Last Name</label> <br />
        <input type="text" id="lName" name="lName" placeholder="Last Name" minLength={2} maxLength={50} value={lName} onChange={handleChange} />
        {errors.lName && <p className="error">{errors.lName}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" placeholder="Email" value={email} required minLength={4} maxLength={200} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phonenum">Phone Number</label> <br />
        <input type="tel" id="phonenum" name="tel" placeholder="(xxx)-xxx-xxxx" value={tel} required minLength={10} maxLength={25} onChange={handleChange} />
        {errors.tel && <p className="error">{errors.tel}</p>}
      </div>
      <div>
        <label htmlFor="people">Number of People</label> <br />
        <input type="number" id="people" name="people" placeholder="Number of People" value={people} required min={1} max={100} onChange={handleChange} />
        {errors.people && <p className="error">{errors.people}</p>}
      </div>
      <div>
        <label htmlFor="date">Select Date</label> <br />
        <input type="date" id="date" name="date" required value={date} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="time">Select Time</label> <br />
        <select id="time" name="time" required>
          {props.availableTimes.map((times, index) => <option key={index}>{times}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label> <br />
        <select id="occasion" name="occasion" value={occasion} onChange={handleChange}>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="preferences">Seating preferences</label> <br />
        <select id="preferences" name="preferences" value={preferences} onChange={handleChange}>
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>
      <div>
        <label htmlFor="comments">Additional Comments</label> <br />
        <textarea id="comments" name="comments" rows={8} cols={50} placeholder="Additional Comments" value={comments} onChange={handleChange}></textarea>
      </div>
      <div>
        <br />
        <small>
          <p>Note: You cannot edit your reservation after submission. Please double-check your answer before submitting your reservation request.</p>
        </small>
        <button type="submit" className="action-button">Book Table</button>
      </div>
    </form>
  );
}
