// Import the useState hook from React
import { useState } from 'react';

// Contact component
function Contact () {
// Regular expression to validate email format
const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

// State variables to store form input values and error messages
const [contactName, setConctactName] = useState('');
const [contactEmail, setConctactEmail] = useState('');
const [contactMessage, setConctactMessage] = useState('');
const [emptyNameMessage, setEmptyNameMessage] = useState('');
const [emptyEmailMessage, setEmptyEmailMessage] = useState('');
const [emptyMessage, setEmptyMessage] = useState('');
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

// Function to handle input validation
const checkInput= (e) => { 
    if(e.target.name === 'name'){  
      if(e.target.value === ''){ 
        setEmptyNameMessage('Please enter your name.'); 
      } else { 
        setConctactName(e.target.value); 
        setEmptyNameMessage(''); 
      }
    }
    else if(e.target.name === 'email'){ 
        if(e.target.value === ''){ 
          setEmptyEmailMessage('Please enter your email.'); 
        } else {
          if(emailRegex.test(e.target.value)){ 
            setConctactEmail(e.target.value); 
            setEmptyEmailMessage(''); 
          } else { 
            setEmptyEmailMessage('Please enter a valid email address.'); 
            e.target.value = ''; 
          }
        }
      }
      else { 
  
        if(e.target.value === ''){  
          setEmptyMessage('Message field can not be blank.'); 
        } else { 
          setConctactMessage(e.target.value); 
          setEmptyMessage('');
        }
      }
    }
  // Function to handle form submission
    const handleFormSubmit = (e) => { 
      e.preventDefault();
  
      if(contactName != '' && contactEmail != '' && contactMessage != ''){ 
  // If all fields are filled, display success message and clear the form
        setSuccessMessage("Thanks for your submission. Feel free to email me at alysae2017@gmail.com.");
        setErrorMessage('');
        setConctactName('');
        setConctactEmail('');
        setConctactMessage('');
        e.target[0].value = ''; 
        e.target[1].value = ''; 
        e.target[2].value = ''; 
      } else { // If any field is empty, display error message
        setSuccessMessage('');
        setErrorMessage("Not a valid input.");
      }
  
    }
  // Return JSX for the Contact section
    return (
      
        <section>
          <h1>Contact Me</h1>
          <div class="formDiv">
            <form onSubmit={handleFormSubmit}>
              <label for="name">Name: <label style={{color: 'blue', fontSize: '20px'}}>{emptyNameMessage}</label></label>
              <input type="text" id="name" name="name" placeholder="Enter your name" onBlur={checkInput}/>
  
              <label for="email">Email: <label style={{color: 'blue', fontSize: '20px'}}>{emptyEmailMessage}</label></label>
              <input type="text" id="email" name="email" placeholder="example@email.com" onBlur={checkInput}/>
  
              <label for="message">Message: <label style={{color: 'blue', fontSize: '20px'}}>{emptyMessage}</label></label>
              <textarea type="text" id="message" name="message" placeholder="Please type your message" onBlur={checkInput}/>
  
              <input type="submit" value="Submit"/>
            </form>
            <h1 style={{color: 'green'}}>{successMessage}</h1>
            <h1 style={{color: 'red'}}>{errorMessage}</h1>
          </div>
        </section>
      );
}

// Export the Contact component as default
export default Contact;