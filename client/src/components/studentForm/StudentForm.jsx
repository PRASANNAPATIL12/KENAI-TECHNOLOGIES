import React from 'react';
import './StudentForm.css'; // Link the CSS file where you've added the provided styles

const StudentForm = () => {
  return (
    <div className="container">
      <h1>Student Information</h1>
      <form>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input type="text" id="studentName" name="studentName" required />
        </div>

        <div className="form-group">
          <label htmlFor="rollNo">Registration Number:</label>
          <input type="text" id="rollNo" name="rollNo" required />
        </div>

        <div className="form-group">
          <label htmlFor="fatherName">Father's Name:</label>
          <input type="text" id="fatherName" name="fatherName" required />
        </div>

        <div className="form-group">
          <label htmlFor="motherName">Mother's Name:</label>
          <input type="text" id="motherName" name="motherName" required />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" required />
        </div>

        <div className="form-group">
          <label htmlFor="timeOfBirth">Time of Birth:</label>
          <input type="time" id="timeOfBirth" name="timeOfBirth" required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />
        </div>

        <div className="form-group">
          <label htmlFor="town">Town/City:</label>
          <input type="text" id="town" name="town" required />
        </div>

        <div className="form-group">
          <label htmlFor="religion">Religion:</label>
          <input type="text" id="religion" name="religion" required />
        </div>

        <div className="form-group">
          <label htmlFor="caste">Caste:</label>
          <input type="text" id="caste" name="caste" required />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input type="file" id="photo" name="photo" accept="image/*" required />
        </div>

        <button type="submit">Submit</button>

        <p style={{textAlign:"center"}}>&copy;Prasanna Patil 2023</p>
      </form>
    </div>
    
  );
}

export default StudentForm;
