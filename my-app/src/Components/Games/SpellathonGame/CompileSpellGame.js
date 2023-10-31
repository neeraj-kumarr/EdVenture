import React, { useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Nav from '../Nav';
import axios from 'axios';

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

export default function CompileSpellGame(props) {


    const [subjects, setSubjects] = useState([]);
    const [books, setBooks] = useState([]);
    const [className, setClassName] = useState([]);
    const [selectedImages, setSelectedImages] = useState([null]);

    const handleImageUpload = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const updatedImages = [...selectedImages];
                updatedImages[index] = event.target.result;
                setSelectedImages(updatedImages);
            };
            reader.readAsDataURL(file);
        }
    };




    useEffect(() => {
        const fetchData = async () => {
            try {
                const [subjectsResponse, booksResponse, classNameResponse] = await Promise.all([
                    axios.get('http://localhost:3000/compile-game/subjects'),
                    axios.get('http://localhost:3000/spell-game/view-slides'),//for book fetching in spellgame
                    axios.get('http://localhost:3000/compile-game'),
                ]);

                setSubjects(subjectsResponse.data);
                setBooks(booksResponse.data);
                setClassName(classNameResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [props.navlink3]);


    return (
        <>

            <Nav maintitle={props.maintitle} title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
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
                                <TableCell > Game Instruction</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '50%', border: '1px solid grey' }} />
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

                            <tr>
                                <TableCell > Game Background Image</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 0)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[0] && (
                                        <img
                                            src={selectedImages[0]}
                                            alt="Selected_Image"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
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
