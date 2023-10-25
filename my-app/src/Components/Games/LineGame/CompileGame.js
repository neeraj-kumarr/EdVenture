import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Nav from '../Nav';
import axios from 'axios';

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
  const [subjects, setSubjects] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectLevel, setSelectLevel] = useState([]);
  const [className, setClassName] = useState([]);


  const [objects, setObjects] = useState([]);

  const handleNumLevelsChange = (e) => {
    setNumLevels(parseInt(e.target.value));
  }

  useEffect(() => {

    axios.get('http://localhost:3000/identify-object/view-objects')
      .then((response) => {
        setObjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    // Fetch album data from the API
    axios.get('http://localhost:3000/compile-game/subjects')
      .then((response) => {
        setSubjects(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });


    // Fetch album data from the API
    axios.get('http://localhost:3000/compile-game/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    axios.get('http://localhost:3000/compile-game')
      .then((response) => {
        setClassName(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });


    if (props.navlink3 === '/line-game/image-to-image-compile') {
      // Fetch album data from the API for image-to-image-compile
      axios.get('http://localhost:3000/line-game/image-to-image-compile')
        .then((response) => {
          setSelectLevel(response.data);
        })
        .catch((error) => {
          console.error('Error fetching image-to-image-compile data:', error);
        });

    } else if (props.navlink3 === '/line-game/text-to-text-compile') {
      // Fetch album data from the API for text-to-text-compile
      axios.get('http://localhost:3000/line-game/text-to-text-compile')
        .then((response) => {
          setSelectLevel(response.data);
        })
        .catch((error) => {
          console.error('Error fetching text-to-text-compile data:', error);
        });
    }
  }, [props.navlink3]);


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
                      <option>Select Levels</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </span>
                  <span style={{ fontSize: '12px', color: 'red' }}>{props.descriptionforobject}</span>
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
                <TableCell>Subject</TableCell>
                <TableCell>
                  <span >
                    <select className="form-select form-select-md " style={{ width: '30%', border: '1px solid grey' }}>
                      <option>Select Language</option>
                      {subjects.map((row) => (
                        <>
                          <option value={row.id}>{row.name}</option>
                        </>
                      ))}
                    </select>
                  </span>
                </TableCell>
              </tr>


              <tr >
                <TableCell>Book</TableCell>
                <TableCell>
                  <span >
                    <select className="form-select form-select-md " style={{ width: '30%', border: '1px solid grey' }}>
                      <option>Select Book ID</option>
                      {books.map((row) => (
                        <>
                          <option value={row.id}>{row.title}</option>
                        </>
                      ))}
                    </select>
                  </span>
                </TableCell>
              </tr>

              {props.navlink3 !== "/identify-game/compile-object-game" ? (
                <>
                  {Array.from({ length: numLevels }).map((_, index) => (
                    <tr key={index}>
                      <TableCell>Select Game for Level {index + 1}</TableCell>
                      <TableCell>
                        <span >
                          <div className="d-flex justify-content-between">
                            <select className="form-select form-select-md" style={{ width: '30%', border: '1px solid grey' }}>
                              <option>Select Game</option>
                              {selectLevel.map((row) => (
                                <>
                                  <option value={row.id}>{row.title}</option>
                                </>
                              ))}
                            </select>
                          </div>
                        </span>
                      </TableCell>
                    </tr>
                  ))}
                </>
              ) : props.navlink3 === '/identify-game/compile-object-game' ? (
                <>
                  {Array.from({ length: numLevels }).map((_, index) => (
                    <tr key={index}>
                      <TableCell>Select Object {index + 1} Game</TableCell>
                      <TableCell>
                        <span>
                          <div className="d-flex justify-content-between">
                            <select className="form-select form-select-md" style={{ width: '30%', border: '1px solid grey' }}>
                              <option>Select Game</option>
                              {objects.map((row) => (
                                <option key={row.id} value={row.id}>{row.title}</option>
                              ))}
                            </select>
                          </div>
                        </span>
                      </TableCell>
                    </tr>
                  ))}
                </>
              ) : null}


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
                      {className.map((row) => (
                        <FormControlLabel
                          key={row.id}
                          value={row.lib_name}
                          control={<Checkbox />}
                          label={row.lib_name}
                          labelPlacement="end"
                          className='p-2'
                        />
                      ))}

                    </FormGroup>
                  </FormControl>
                </TableCell>
              </tr>
            </tbody>
          </table>
          <div className="p-4 d-grid gap-2 d-flex justify-content-end">
            <button className="btn btn-primary" type="submit">Submit Now</button>
          </div>
        </div>
      </div >

    </>
  )
}
