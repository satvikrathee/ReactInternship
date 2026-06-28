import React, { useState } from "react";

const FormValidation = () => {
  // 1. Input States
  const [email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [Age, setAge] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [course, setcourse] = useState("");
  const [skills, setskills] = useState([]);
  const [address, setaddress] = useState("");
  const [terms, setterms] = useState(false);

  // 2. Error States
  const [errors, setErrors] = useState({});

  // Helper: Checks if a string contains ONLY alphabets
  const isOnlyAlphabets = (str) => {
    if (str === "") return false;
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (char < "a" || char > "z") {
        return false;
      }
    }
    return true;
  };

  // Helper: Checks if a string contains ONLY numbers
  const isOnlyNumbers = (str) => {
    if (str === "") return false;
    for (let i = 0; i < str.length; i++) {
      if (str[i] < "0" || str[i] > "9") {
        return false;
      }
    }
    return true;
  };

  // Handle skill checkbox additions and removals
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setskills([...skills, value]);
    } else {
      setskills(skills.filter((skill) => skill !== value));
    }
  };

  // 3. Validation Logic Function
  function handleSubmit(e) {
    e.preventDefault();
    let validationErrors = {};

    // rule 1: First Name
    if (!FirstName) {
      validationErrors.FirstName = "First name is required.";
    } else if (FirstName.length < 3) {
      validationErrors.FirstName = "Minimum 3 characters required.";
    } else if (!isOnlyAlphabets(FirstName)) {
      validationErrors.FirstName = "Only alphabets are allowed.";
    }

    // rule 2: Last Name
    if (!LastName) {
      validationErrors.LastName = "Last name is required.";
    } else if (LastName.length < 2) {
      validationErrors.LastName = "Minimum 2 characters required.";
    } else if (!isOnlyAlphabets(LastName)) {
      validationErrors.LastName =
        "Numbers or special characters are not allowed.";
    }

    // rule 3: Email
    if (!email) {
      validationErrors.email = "Email is required.";
    } else {
      const hasAt = email.includes("@");
      const endsWithCom = email.endsWith(".com");
      const endsWithIn = email.endsWith(".in");
      if (!hasAt || (!endsWithCom && !endsWithIn)) {
        validationErrors.email = "Must contain @ and end with .com or .in.";
      }
    }

    // rule 4: Password
    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 8) {
      validationErrors.password = "Minimum 8 characters required.";
    } else {
      let hasUppercase = false;
      let hasLowercase = false;
      let hasNumber = false;
      let hasSpecial = false;
      const specialCharacters = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

      for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= "A" && char <= "Z") hasUppercase = true;
        else if (char >= "a" && char <= "z") hasLowercase = true;
        else if (char >= "0" && char <= "9") hasNumber = true;
        else if (specialCharacters.includes(char)) hasSpecial = true;
      }

      if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecial) {
        validationErrors.password =
          "Must include 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
      }
    }

    // rule 5: Confirm Password
    if (!Confirmpassword) {
      validationErrors.Confirmpassword = "Confirm password is required.";
    } else if (Confirmpassword.includes(" ")) {
      validationErrors.Confirmpassword = "Spaces are not allowed.";
    } else if (password !== Confirmpassword) {
      validationErrors.Confirmpassword = "Passwords do not match.";
    }

    // rule 6: Age
    const ageNum = Number(Age);
    if (!Age) {
      validationErrors.Age = "Age is required.";
    } else if (isNaN(ageNum) || ageNum <= 18 || ageNum >= 60) {
      validationErrors.Age = "Age must be greater than 18 and less than 60.";
    }

    // rule 7: Mobile Number
    if (!MobileNumber) {
      validationErrors.MobileNumber = "Mobile number is required.";
    } else if (MobileNumber.length !== 10) {
      validationErrors.MobileNumber = "Must be exactly 10 digits.";
    } else if (!isOnlyNumbers(MobileNumber)) {
      validationErrors.MobileNumber = "Only numbers are allowed.";
    } else {
      const firstDigit = MobileNumber;
      if (
        firstDigit !== "6" &&
        firstDigit !== "7" &&
        firstDigit !== "8" &&
        firstDigit !== "9"
      ) {
        validationErrors.MobileNumber = "Must start with 6, 7, 8, or 9.";
      }
    }

    // rule 8: Gender
    if (!gender) {
      validationErrors.gender = "Please select your gender.";
    }

    // rule 9: Course
    const validCourses = ["course1", "course2", "course3", "course4"];
    if (!course || !validCourses.includes(course)) {
      validationErrors.course = "Selecting a course is compulsory.";
    }

    // rule 10: Skills
    if (skills.length === 0) {
      validationErrors.skills = "Skills cannot be empty.";
    } else if (skills.length < 2 || skills.length > 4) {
      validationErrors.skills = "Please select between 2 and 4 skills.";
    }

    // rule 11: Address
    if (!address) {
      validationErrors.address = "Address is required.";
    } else if (address.length < 20 || address.length > 150) {
      validationErrors.address =
        "Address must be between 20 and 150 characters.";
    }

    // rule 12: Terms
    if (!terms) {
      validationErrors.terms = "You must agree to the terms and conditions.";
    }

    // Save identified validation problems
    setErrors(validationErrors);

    // If the error object is entirely empty, form passes!
    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful!");
    }
  }

  // Inline CSS for error messaging
  const errorStyle = {
    color: "red",
    fontSize: "13px",
    display: "block",
    marginTop: "2px",
    marginBottom: "8px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello guys ...</h1>
      <form onSubmit={handleSubmit}>
        <h4 style={{ margin: "0" }}>Enter Name </h4>
        <input
          type="text"
          placeholder="Enter your First Name"
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.FirstName && <span style={errorStyle}>{errors.FirstName}</span>}

        <input
          type="text"
          placeholder="Enter your Last Name"
          value={LastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.LastName && <span style={errorStyle}>{errors.LastName}</span>}

        <h4 style={{ margin: "0" }}>Enter Email </h4>
        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span style={errorStyle}>{errors.email}</span>}

        <h4 style={{ margin: "0" }}>Enter Password</h4>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span style={errorStyle}>{errors.password}</span>}

        <input
          type="password"
          placeholder="Confirm your Password"
          value={Confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.Confirmpassword && (
          <span style={errorStyle}>{errors.Confirmpassword}</span>
        )}

        <h4 style={{ margin: "0" }}>Enter Age</h4>
        <input
          type="number"
          placeholder="Enter your Age"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.Age && <span style={errorStyle}>{errors.Age}</span>}

        <h4 style={{ margin: "0" }}>Enter Your Mobile Number</h4>
        <input
          type="text"
          placeholder="Enter your Mobile Number"
          value={MobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        {errors.MobileNumber && (
          <span style={errorStyle}>{errors.MobileNumber}</span>
        )}

        <h4 style={{ margin: "0" }}>Select Gender</h4>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Female</label>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>Other</label>
        {errors.gender && <span style={errorStyle}>{errors.gender}</span>}

        <h4 style={{ margin: "0" }}>Select Course </h4>
        <select value={course} onChange={(e) => setcourse(e.target.value)}>
          <option value="" disabled>
            select course
          </option>
          <option value="course1">React</option>
          <option value="course2">Node</option>
          <option value="course3">Mern</option>
          <option value="course4">Java</option>
        </select>
        {errors.course && <span style={errorStyle}>{errors.course}</span>}

        <h4 style={{ margin: "0" }}>Select Skills</h4>
        <input
          type="checkbox"
          value="HTML"
          checked={skills.includes("HTML")}
          onChange={handleSkillChange}
        />
        <label>HTML</label>
        <input
          type="checkbox"
          value="CSS"
          checked={skills.includes("CSS")}
          onChange={handleSkillChange}
        />
        <label>CSS</label>
        <input
          type="checkbox"
          value="JavaScript"
          checked={skills.includes("JavaScript")}
          onChange={handleSkillChange}
        />
        <label>JavaScript</label>
        <input
          type="checkbox"
          value="React"
          checked={skills.includes("React")}
          onChange={handleSkillChange}
        />
        <label>React</label>
        {errors.skills && <span style={errorStyle}>{errors.skills}</span>}
        <h4 style={{ margin: "0" }}>Enter Your Address</h4>

        <input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />

        {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}

        <br />

        <input
          type="checkbox"
          checked={terms}
          onChange={(e) => setterms(e.target.checked)}
        />

        <label>I agree to the terms and conditions</label>

        {errors.terms && <p style={{ color: "red" }}>{errors.terms}</p>}

        <br />

        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default FormValidation;
