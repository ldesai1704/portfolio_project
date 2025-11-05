import React,{useState} from 'react'
import './contact.css';
const Contact = () => {


  const [formData, setFormData]= useState({
    name: "",
    email: "",
    message:""    
  });
  const[status, setStatus] =useState();

  function handleChange(e){
      setFormData({...formData, [e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    setStatus ("");

    console.log(formData);
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }
    if (!emailPattern.test(email)) {
    setStatus("Please enter a valid email address.");
    return;
  }


    setTimeout(() => {
      setStatus("Thanks! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" });
    }, 400);

  }
  return (
    <>
    <div className='form-container'>
      <h1>Contact </h1>
      <p>Have a Question or wants to work together?Send a Message.
      </p>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
      
            <label htmlFor= "name">Name</label>
             <input 
             id ="name" 
             type='text'
             placeholder='Enter Your Name' 
              name = "name"
               onChange= {(e) => handleChange(e)}
                value={formData.name}  
  required minLength={"5"} />
             <br/>

              <label htmlFor ="email">Email</label>
            <input 
            id ="email" 
            type='text' 
            placeholder='Enter Your Email' 
            name = "email"
              onChange={(e) => handleChange(e)}
              value={formData.email}
              required pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'  />
            <br/>
                <label htmlFor = "message">Message</label>
                <textarea
                 id ="message"
                  placeholder='Write Your message here...' 
                  name='message'
                   rows="4"
                    colums="4" 
                    onChange={(e) => handleChange(e)}
                    value={formData.message}
                    required
                    ></textarea>
               <br/>
               {status && <p className="status-message">{status}</p>}
            <button  type='submit'>Send</button>
        </form>
      </div>






 </div>     
</>
)
}
    
export default Contact
