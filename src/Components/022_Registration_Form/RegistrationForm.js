import React from 'react'
import './RegistrationForm.css'

function RegistrationForm() {
  return (
    <div className='container'>
        <div className='registraion'>
            <h3 className='heading'>Form in React</h3>
            <form>
            <div className='input-box'>
                <label>First Name*</label>
                <input type='text' placeholder='Enter First Name' />
            </div>
            <div className='input-box'>
                <label>Last Name*</label>
                <input type='text' placeholder='Enter Last Name' />
            </div>
            <div className='input-box'>
                <label>Enter Email*</label>
                <input type='text' placeholder='Enter Email' />
            </div>
            <div className='input-box'>
                <label>Contact*</label>
                <input type='text' placeholder='Enter Mobile number' />
            </div>
            <div className='input-box'>
                <label>Gender</label>
            </div>
            <div className='radio-button input-box'>
                <label>
                    <input type="radio" name="gender" value="male" />
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" className='radio'/>
                    Female
                </label>
                <label>
                    <input type="radio" name="gender" value="other" />
                    Other
                </label>
            </div>
            <div className='subject'>
                <label>Your best Subject</label>
            </div>
            <div className='checkbox-group'>
                <label>
                    <input type='checkbox' name='subject' value='english' />
                    English
                </label>
                <label>
                    <input type='checkbox' name='subject' value='maths' />
                    Maths
                </label>
                <label>
                    <input type='checkbox' name='subject' value='pysics' />
                    Physics
                </label>
            </div>
            <div className='input-box'>
                <label>Upload Resume</label>
                <input type='file'  />
            </div>
            <div className='input-box'>
                <label>About</label>
                <textarea id='comments' name='comments' placeholder='Enter your comments here' rows='12' cols='50'/>
            </div>
            <div className='input-box'>
                <label>Submit Or Reset</label>
            </div>
            <div className='buttons'>
                <button>Reset</button>
                <button>Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default RegistrationForm
