import React, { useState } from 'react';
import "./registeration.css";
import Header from '../common/pageHeader/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Registeration() {
  const [employee, setEmployee] = useState("Studied");
  const [Privacy, setPrivacy] = useState(false);
  const [success,setSuccess]= useState(false);
  const [loading,setLoading] =useState(false);
const [showSubmitProcess,setShowSubmitProcess] =useState(false)
const [response,setResponse] =useState("")


  // Input Variables
  const [formno, setFormno] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [cnic, setCnic] = useState("");
  const [cast, setCast] = useState("");
  const [religion, setReligion] = useState("");
  const [contact, setContact] = useState("");
  const [photo, setPhoto] = useState("");
  const [cnicPhoto, setCnicPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [work, setWork] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [address, setAddress] = useState("");


  // Validation Functions  
  const CNICValidation = (cnicInput) => {
    let cleanedCnic = cnicInput.replace(/\D/g, "");
    let formattedCnic = cleanedCnic;

    if (cleanedCnic.length > 5 && cleanedCnic.length <= 12) {
      formattedCnic = cleanedCnic.slice(0, 5) + '-' + cleanedCnic.slice(5, 12);
    } else if (cleanedCnic.length > 12) {
      formattedCnic = cleanedCnic.slice(0, 5) + '-' + cleanedCnic.slice(5, 12) + '-' + cleanedCnic.slice(12, 13);
    }

    setCnic(formattedCnic);
  };

  const ContactValidation = (c) => {
    if (c.length <= 11) {
      setContact(c);
    } else {
      alert("Contact number should be 11 digits.");
    }
  };

  const ContactValidation2 = (c) => {
    if (c.length <= 11) {
      setEmergencyContact(c);
    } else {
      alert("Contact number should be 11 digits.");
    }
  };

  const isFormValid = () => {
    return formno && date && name && fname && cnic && cast && religion && contact && photo && cnicPhoto && email && emergencyContact && address;
  };

  const Submit = async (e) => {
    

    e.preventDefault();

    setPrivacy(false);
    setShowSubmitProcess(true)
    // if (!isFormValid()) {
    //   alert("Please fill out all required fields.");
    //   return;
    // }

    const formData = new FormData();

    formData.append("formno", formno);

    formData.append("date", date);
    formData.append("name", name);

    formData.append("fname", fname);
    formData.append("cnic", cnic);
    formData.append("cast", cast);
    formData.append("religion", religion);
    formData.append("contact", contact);
    formData.append("photo", photo);
    formData.append("cnicphoto", cnicPhoto);
    formData.append("email", email);
    formData.append("work", "I am a Student Studied at NOVA Academy Sachal Colony Larkana");
    formData.append("emergencycontact", emergencyContact);
    formData.append("address", address);

    try {
      console.log("Posting............");
      setLoading(true)
      const response = await axios.post(`/user/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      const data = await response.data.data
      console.log(data);
      // console.log("Name"+response.data.name);
      console.log("Member Registered!!!");
      setSuccess(true)
      setResponse(data)
    } catch (error) {
      console.log("Member Not Registered :)", error);
      setShowSubmitProcess(false)
    }
    finally{
      setLoading(false)
    }
  };


  
  const ShowTerms = (e) => {
    e.preventDefault();
  
    const formElement = document.querySelector(".ref-form"); // Select the form
    if (!formElement.reportValidity()) {
      // If form is not valid, show validation messages
      return;
    }
  
    setPrivacy(true);
  };
  




  return (
    <>
      <div className="registeration-body">
        <Header headerFor="Hostel Registration Form" />
        <form className="ref-form" onSubmit={Submit}>


          <div className="form-date">
            <div>
              <label htmlFor="form-no">Form No.</label>
              <input value={formno} onChange={(e) => setFormno(e.target.value)} id="form-no" type="number" required />
            </div>
            <div>
              <label htmlFor="date">Date</label>
              <input value={date} onChange={(e) => setDate(e.target.value)} id="date" type="date" required />
            </div>
          </div>

          <div className="applicatnt-data"><h1 className="form-dta-h1">APPLICANT DATA</h1></div>

          <div className="name-of-applicant">
            <label htmlFor="name-of-applicant">Name Of Applicant.</label>
            <input value={name} onChange={(e) => setName(e.target.value)} id="name-of-applicant" type="text" required />
          </div>

          <div className="name-of-applicant">
            <label htmlFor="name-of-father">Father/Guardian Name.</label>
            <input value={fname} onChange={(e) => setFname(e.target.value)} id="name-of-father" type="text" required />
          </div>

          <div className="cnic-cast">
            <div>
              <label htmlFor="">CNIC/B.Form.</label>
              <input value={cnic} onChange={(e) => CNICValidation(e.target.value)} type="text" required />
            </div>
            <div>
              <label htmlFor="">Caste.</label>
              <input value={cast} onChange={(e) => setCast(e.target.value)} type="text" required />
            </div>
          </div>

          <div className="cnic-cast">
            <div>
              <label htmlFor="">Religion.</label>
              <input value={religion} onChange={(e) => setReligion(e.target.value)} type="text" required />
            </div>
            <div>
              <label htmlFor="">Contact No.</label>
              <input value={contact} onChange={(e) => ContactValidation(e.target.value)} type="number" required />
            </div>
          </div>

          <div className="cnic-cast">
            <div>
              <label htmlFor="Upload Photo" className="uploadphoto">Upload Photo.</label>
              <input onChange={(e) => setPhoto(e.target.files[0])} type="file" required />
            </div>
            <div>
              <label htmlFor="" className="uploadphoto">Upload CNIC.</label>
              <input onChange={(e) => setCnicPhoto(e.target.files[0])} type="file" required />
            </div>
          </div>

          <div className="name-of-applicant">
            <label htmlFor="name-of-applicant">Em@il.</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} id="name-of-applicant" type="email" required />
          </div>

          <div className="applicatnt-data"><h1 className="form-dta-h1">Institute/Employment Data</h1></div>

          <div className="instituteoremployment">
            <p>I am</p>
            <select value={employee} onChange={(e) => setEmployee(e.target.value)} required>
              <option value="studied">Student</option>
              <option value="Worked ">Employee</option>
            </select>
            <p>{employee} at</p>
            <input type="text" required />
          </div>

          <div className="applicatnt-data"><h1 className="form-dta-h1">Visitor/Relatives</h1></div>

          <p className="visitor-text">✨ Authories does not allow any visitor  in the premises of the hostels.
            For the students, the parents may nominate two names below, who after verification at the hostel main receptions may meet the student outside Hostel.
          </p>

          <div className="name-of-applicant">
            <label htmlFor="name-of-applicant">Emergency Contact ( Father ).</label>
            <input value={emergencyContact} onChange={(e) => ContactValidation2(e.target.value)} type="number" required />
            </div>

          <div className="name-of-applicant">
            <label htmlFor="name-of-applicant">Address.</label>
            <input value={address} onChange={(e) => setAddress(e.target.value)} id="name-of-applicant" type="text" required />
          </div>

          <div className="terms-conditions">
            <button onClick={ShowTerms} type="submit">Read Terms & Conditions</button>
          </div>
        </form>

        <Link to={"/"} className="goback">Go Back</Link>

        {Privacy  && 
          <div className="privcy-layer">
<div className="terms-and-conditions">
<div className="conditions">

<ul>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam minus sapiente nulla eaque possimus!</li>
</ul>
  
</div>
<div className="agree">
  <button onClick={Submit} style={{backgroundColor:"#edb64a", color:"black"}}> I'm Agree</button>
  <button  style={{pointerEvents:"none"}}>I'm not Agree</button>
</div>
</div>
          </div>
        }



{
showSubmitProcess && 

<div className="show-submit-process">


  


{
  loading && (<>
  
  
  
  <div className="terms-and-conditions success-card">
  <div style={{textAlign:"center"}}>
<img src="https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"  />

</div>
<div className='success-content'>
<p>Hello Dear,</p>


<h2 >............................</h2>
<p>............</p>
<h2>...............</h2>
<p>.....................</p>
<p>.................... </p>
<p>.........................</p>
<p>..........................</p>


</div>

<div className="success-done">
  <Link className='success-to-home' to={"/"}>_-_-_-_</Link>
</div>

</div>
  
  
  
  
  
  
  </>)
}

{
  success && (<>
  

<div className="terms-and-conditions success-card">

  <div style={{textAlign:"center"}}>
<img src={response.photo}  alt={`Photo Of ${response.name} ${response.cast}`} />

</div>
<div className='success-content'>
<p>Hello Dear,</p>


<h2 >{response.name}</h2>
<p>Welcom to the</p>
<h2>Al-Masroor-Royal-Hostel</h2>
<p>Your Registeration Form  Submitted Success Fully !</p>
<p>Further Query : </p>
<p>+92 3193291955</p>
<p>almasroorhtsl@gmial.com</p>


</div>

<div className="success-done">
  <Link className='success-to-home' to={"/"}>ok thanks</Link>
</div>

</div>
  
  
  
  
  
  </>)
}



</div>





}







      </div>
    </>
  );
}
