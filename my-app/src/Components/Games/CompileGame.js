import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import SideNavbar from '../SideNavbar';
import Nav from './Nav';

export default function CompileGame() {

  const [numLevels, setNumLevels] = useState(1);

  const handleNumLevelsChange = (e) => {
    setNumLevels(parseInt(e.target.value));
  }
  const sectionStyle = {
    flex: 1,
    overflowX: 'auto',
    backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/512/865/desktop-wallpaper-grey-background-vectors-stock-psd-light-gray-thumbnail.jpg")', // Replace with the path to your image
    backgroundSize: 'cover', // Adjust background size as needed
    backgroundRepeat: 'no-repeat', // Adjust background repeat as needed
  };

  const tdcStyle = {
    border: 'solid 1px #203b89',
    padding: '10px',
  };

  const classNames = [
    "Nursery-A",
    "Prep 1 - A",
    "Prep 2 - A",
    "Prep 1 - B",
    "Class 1A",
    "Class 1B",
    "Class 2A",
    "Class 2B",
    "Prep 2B",
    "Class 3A",
    "Class 4 A",
    "Class 5A",
    "Class 3B",
    "Class 6",
    "Class 4B",
    "CLASS 7",
    "Class 7B",
    "Class 5B",
    // Add more class names here...
  ];

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideNavbar />
      <section style={sectionStyle} >
        <Nav title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games" />
        <h2 className="container p-4 " >
          𝓒𝓸𝓶𝓹𝓲𝓵𝓮 𝓖𝓪𝓶𝓮𝓼🎮                </h2>

        <div className='container ' style={{ border: 'solid 4px #203b89', width: '90%', borderRadius: '25px', padding: '50px 50px 0px 50px', marginBottom: '40px' }}
        >
          <table style={{ width: '100%', borderCollapse: 'separate' }} >
            <tbody>
              <tr>
                <td height="24" colSpan="4" style={tdcStyle}>
                  <strong><i> Instructions: </i></strong>
                </td>
              </tr>
              <tr>
                <td height="24" colSpan="4" style={tdcStyle}>
                  <p>1. Select Number of Levels.
                    <br />2. Add Game Language.
                    <br />3. Add Game Title.
                    <br />4. Select Game set for different levels.
                    <br />5. Select Game Background Image [Size 800 by 600], if not selected default background will be used
                  </p>
                </td>
              </tr>
              <tr>
                <td className='col-3' style={tdcStyle}>Number of Levels</td>
                <td style={tdcStyle}>
                  <span  >
                    <select onChange={handleNumLevelsChange} className="form-select form-select-md" style={{ width: '30%', border: '1px solid grey' }} >
                      <option>Select Language</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                      <option value="5">Five</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td style={tdcStyle}>Game Language</td>
                <td style={tdcStyle}>
                  <span >
                    <select className="form-select form-select-md " style={{ width: '30%', border: '1px solid grey' }} >
                      <option>Select Language</option>
                      <option value="Arabic">العربية</option>
                      <option value="English">English</option>
                      <option value="Urdu">اردو</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td style={tdcStyle}> Game Title</td>
                <td style={tdcStyle}>
                  <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                </td>
              </tr>
              <tr>
                <td style={tdcStyle}> Game Chapter</td>
                <td style={tdcStyle}>
                  <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                </td>
              </tr>
              <tr>
                <td style={tdcStyle}>Subject</td>
                <td style={tdcStyle}>
                  <span >
                    <select className="form-select form-select-md " style={{ width: '30%', border: '1px solid grey' }} >
                      <option>Select Language</option>
                      <option value="Arabic">Maths</option>
                      <option value="English">English</option>
                      <option value="Urdu">اردو</option>
                      <option value="...">...</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <td style={tdcStyle}>Book</td>
                <td style={tdcStyle}>
                  <span >
                    <select className="form-select form-select-md " style={{ width: '30%', border: '1px solid grey' }} >
                      <option>Select Book ID</option>
                      <option value="Arabic">Language Book</option>
                      <option value="English">Drawing Book</option>
                      <option value="Urdu">اردو</option>
                      <option value="...">...</option>
                    </select>
                  </span>
                </td>
              </tr>

              {Array.from({ length: numLevels }).map((_, index) => (
                <tr key={index}>
                  <td style={tdcStyle}>Select Game for Level {index + 1}</td>
                  <td style={tdcStyle}>
                    <span>
                      <div className="d-flex justify-content-between">
                        <select
                          className="form-select form-select-md"
                          style={{ width: '30%', border: '1px solid grey' }}
                        >
                          <option>Select Game</option>
                          {/* Add your game options here */}
                          <option value="1">Learning Animal Names</option>
                          <option value="2">Learning Names of Animals 2</option>
                          <option value="3">Fruit Fun</option>
                          <option value="4">Fruit Fun 2</option>
                        </select>
                      </div>
                    </span>
                  </td>
                </tr>

              ))}

              <tr>
                <td style={tdcStyle}> Game Background Image</td>
                <td style={tdcStyle}>
                  <a className=" btn btn-success w-25" >Select Image</a>
                </td>
              </tr>

              <tr>
                <td style={tdcStyle}> Select Class</td>
                <td style={tdcStyle}>
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      {classNames.map((className, index) => (
                        <FormControlLabel
                          key={index}
                          value={className}
                          control={<Checkbox />}
                          label={className}
                          labelPlacement="end"
                          className='p-2'
                        />
                      ))}

                    </FormGroup>
                  </FormControl>                </td>
              </tr>




            </tbody>
          </table>
          <div className="p-4 d-grid gap-2 d-flex justify-content-end">
            <button className="btn btn-primary" type="submit">Submit Now</button>
          </div>
        </div>
      </section>
    </div >
  )
}
