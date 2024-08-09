import React from 'react';
import './FormOne.css';

const FormOne = () => {
    return (
        <div className='container'>
            <h2>Form in React</h2>
            <form className='form-container'>
                <div className='label-group'>
                    <label htmlFor='firstname'>First Name*</label>
                    <input type='text' id='firstname' name='firstname' placeholder='Enter First Name' required />
                </div>
                <div className='label-group'>
                    <label htmlFor='lastname'>Last Name*</label>
                    <input type='text' id='lastname' name='lastname' placeholder='Enter Last Name' required />
                </div>
                <div className='label-group'>
                    <label htmlFor='email'>Enter Email*</label>
                    <input type='email' id='email' name='email' placeholder='Enter Email' required />
                </div>
                <div className='label-group'>
                    <label htmlFor='contact'>Contact*</label>
                    <input type='tel' id='contact' name='contact' placeholder='Enter Mobile No.' required />
                </div>
                <div className='label-group'>
                    <label>Gender*</label>
                    <div className='radio-group'>
                        <label>
                            <input type="radio" name="gender" value="Male" />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Female" />
                            Female
                        </label>
                        <label>
                            <input type="radio" name="gender" value="Other" />
                            Other
                        </label>
                    </div>
                </div>
                <div className='label-group'>
                    <label>Your Best Subject</label>
                    <div className='checkbox-group'>
                        <label>
                            <input type="checkbox" name="subject" value="English" />
                            English
                        </label>
                        <label>
                            <input type="checkbox" name="subject" value="Math" />
                            Math
                        </label>
                        <label>
                            <input type="checkbox" name="subject" value="Physics" />
                            Physics
                        </label>
                    </div>
                </div>
                <div className='label-group'>
                    <label htmlFor='resume'>Upload Resume*</label>
                    <input type="file" id="resume" name="resume" required />
                </div>
                <div className='label-group'>
                    <label htmlFor='url'>Enter URL</label>
                    <input type="url" id="url" name="url" placeholder="https://example.com" />
                </div>
                <div className='label-group'>
                    <label htmlFor='options'>Choose an option:</label>
                    <select id="options" name="options">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4" defaultValue>Option 4</option>
                    </select>
                </div>
                <div className='label-group'>
                    <label htmlFor='about'>About</label>
                    <textarea id="about" name="about" placeholder="About Yourself" rows="4"></textarea>
                </div>
                <div className='button-group'>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default FormOne;
