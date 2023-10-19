import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function TableCell({ children }) {
  const tdcStyle = {
    border: 'solid 1px #203b89',
    padding: '10px',
  };

  return (
    <td style={tdcStyle}>
      {children}
    </td>
  );
}

export default function CompileGame(props) {

  const [numLevels, setNumLevels] = useState(1);

  const handleNumLevelsChange = (e) => {
    setNumLevels(parseInt(e.target.value));
  }
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
    <>

      <Nav maintitle={props.maintitle} title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
        // navlink1="/line-game/text-to-image-newslide" navlink2="/" navlink3="/line-game/text-to-image-compile" navlink4="/"
        navlink1={props.navlink1} navlink2={props.navlink2} navlink3={props.navlink3} navlink4={props.navlink4}
      />
      <h2 className=" p-4 " >
        𝓒𝓸𝓶𝓹𝓲𝓵𝓮 𝓖𝓪𝓶𝓮𝓼🎮                </h2>
      <div style={{ padding: '0 60px' }}>

        <div className=' ' style={{ border: 'solid 4px #203b89', borderRadius: '25px', padding: '50px 50px 0px 50px', marginBottom: '40px' }}
        >
          <table style={{ width: '100%', borderCollapse: 'separate' }} >
            <tbody>
              <tr>
                <TableCell height="24"  >
                  <strong><i> Instructions: </i></strong>
                </TableCell>
                <TableCell height="24"  >
                  <p>1. Select Number of Levels.
                    <br />2. Add Game Language.
                    <br />3. Add Game Title.
                    <br />4. Select Game set for different levels.
                    <br />5. Select Game Background Image [Size 800 by 600], if not selected default background will be used
                  </p>
                </TableCell>
              </tr>
              {/* <tr>
              </tr> */}
              <tr>
                <TableCell className='col-3' >Number of Levels</TableCell>
                <TableCell >
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
                </TableCell>
              </tr>
              <tr>
                <TableCell >Game Language</TableCell>
                <TableCell >
                  <span >
                    <select className="form-select form-select-md " style={{ width: '30%', border: '1px solid grey' }} >
                      <option>Select Language</option>
                      <option value="Arabic">العربية</option>
                      <option value="English">English</option>
                      <option value="Urdu">اردو</option>
                    </select>
                  </span>
                </TableCell>
              </tr>
              <tr>
                <TableCell > Game Title</TableCell>
                <TableCell >
                  <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                </TableCell>
              </tr>
              <tr>
                <TableCell > Game Chapter</TableCell>
                <TableCell >
                  <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                </TableCell>
              </tr>
              <tr>
                <TableCell >Subject</TableCell>
                <TableCell >
                  <span >
                    <select className="form-select form-select-md " style={{ width: '30%', border: '1px solid grey' }} >
                      <option>Select Language</option>
                      <option value="Arabic">Maths</option>
                      <option value="English">English</option>
                      <option value="Urdu">اردو</option>
                      <option value="...">...</option>
                    </select>
                  </span>
                </TableCell>
              </tr>
              <tr>
                <TableCell >Book</TableCell>
                <TableCell >
                  <span >
                    <select className="form-select form-select-md " style={{ width: '30%', border: '1px solid grey' }} >
                      <option>Select Book ID</option>
                      <option value="Arabic">Language Book</option>
                      <option value="English">Drawing Book</option>
                      <option value="Urdu">اردو</option>
                      <option value="...">...</option>
                    </select>
                  </span>
                </TableCell>
              </tr>

              {Array.from({ length: numLevels }).map((_, index) => (
                <tr key={index}>
                  <TableCell >Select Game for Level {index + 1}</TableCell>
                  <TableCell >
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
                  </TableCell>
                </tr>

              ))}

              <tr>
                <TableCell > Game Background Image</TableCell>
                <TableCell >
                  <Link className=" btn btn-success w-25" >Select Image</Link>
                </TableCell>
              </tr>

              <tr>
                <TableCell > Select Class</TableCell>
                <TableCell >
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
                  </FormControl>                </TableCell>
              </tr>
            </tbody>
          </table>
          <div className="p-4 d-grid gap-2 d-flex justify-content-end">
            <button className="btn btn-primary" type="submit">Submit Now</button>
          </div>
        </div>
      </div>

    </>
  )
}
