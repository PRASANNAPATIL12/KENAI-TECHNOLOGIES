import React from 'react';
import './style.css'; // Link the CSS file where you've added the provided styles

const Navbar = () => {
  return (
    <div className="container">
      <h1>Student Information</h1>
      <form>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input type="text" id="studentName" name="studentName" required />
        </div>

        {/* Rest of the form fields */}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Navbar;
