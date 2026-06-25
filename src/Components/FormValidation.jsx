import React, { useState } from 'react'

const FormValidation = () => {
    const[email,setEmail]=useState("")
    const[FirstName,setFirstName]=useState("")
    const[LastName,setLastName]=useState("")
    const[password,setPassword]=useState("")
    const[Confirmpassword,setConfirmPassword]=useState("")
    const[Age,setAge]=useState()
    const[MobileNumber,setMobileNumber]=useState()
    const [course, setcourse] = useState();
    const [skills, setskills] = useState([]);
    const [address, setaddress] = useState("");
    const [terms, setterms] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        if (FirstName==="" || FirstName.length<3  ){
            alert("First Name required")
        }
        // if (email===""){
        //     alert("Email required")
        // }
        // if(password===""){
        //     alert("Enter Password") 
        // }

    }
  return (
    <div>
        <h1>Heloo guyyss ... </h1>
      <form action="">
        <h4 style={{margin:"0"}}>Enter Name </h4>
        <input type="text" placeholder="Enter your First Name " value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
        <input type="text" placeholder="Enter your Last Name " value={LastName} onChange={(e)=>setLastName(e.target.value)}/>

        <h4 style={{margin:"0"}}>Enter Email </h4>
        <input type="text" placeholder="Enter your Email " value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        <h4 style={{margin:"0"}} >Enter Password</h4>
        <input type="text" placeholder="Enter your Password " value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br />
        <input type="text" placeholder="Confirm  your Password " value={Confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <br />
        <h4 style={{margin:"0"}}>Enter Age</h4>
        <input type="number" placeholder="Enter your Age " value={Age} onChange={(e)=>setAge(e.target.value)}/>
        <br />
        <h4 style={{margin:"0"}}>Enter You Mobile Number</h4>
        <input type="number" placeholder="Enter your Mobile Number " value={MobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
        <br />
        <h4 style={{margin:"0"}}>Select Gender</h4>
        <input type="radio" name="gender" value="male" />
            <label>Male</label>
            <input type="radio" name="gender" value="female" />
            <label>Female</label>
            <input type="radio" name="gender" value="other" />
            <label>Other</label>
            <br />
            < h4 style={{margin:"0"}}>Select Course </h4>
            <select value={course} onChange={(e)=>setcourse(e.target.value)}>
                 <option value="" disabled selected>select course</option>
                 <option value="course1">React</option>
                 <option value="course2">Node</option>
                 <option value="course3">Mern</option>
                 <option value="course4">Java</option>
            </select>
            <br />
            <h4 style={{margin:"0"}}>Select Skills</h4>
            <input type="checkbox" value={skills} onChange={(e)=>setskills(e.target.value)} /> <label>HTML</label>
            <input type="checkbox" /> <label>CSS</label>
            <input type="checkbox" /> <label>JavaScript</label>
            <input type="checkbox" /> <label>React</label>
            <br />
            <h4 style={{margin:"0"}}>Enter Your Address</h4>

            <input type="text" placeholder="Enter your address" />
            <br />

            <input type="checkbox" /> <label>I agree to the terms and conditions</label>
           <br />
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}

export default FormValidation
