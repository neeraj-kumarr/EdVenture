import React, { useState, useEffect } from 'react';
import Nav from '../Nav';
import axios from 'axios';

function TableCell({ children }) {
    const tdcStyle = {
        border: 'solid 1px #203b89',
        padding: '10px'
    };

    return (
        <td style={tdcStyle}>
            {children}
        </td>
    );
}

export default function PrepareNewObjects(props) {

    const [subjects, setSubjects] = useState([]);
    const [numLevels, setNumLevels] = useState(1);
    const handleNumLevelsChange = (e) => {
        setNumLevels(parseInt(e.target.value));
    }
    useEffect(() => {
        // Fetch album data from the API
        axios.get('http://localhost:3000/compile-game/subjects')
            .then((response) => {
                setSubjects(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });

    }, [])

    return (

        <>
            < Nav maintitle="Spellathon Game" title1="Prepare New Slides" title2="View Slides" title3="Compile Games" title4="View Games"
                navlink1="/spell-game/prepare-spell-slide" navlink2="/spell-game/view-slides" navlink3="/spell-game/compile-game" navlink4="/spell-game/view-game"
            />
            <h2 className=" p-4 " >
                𝓟𝓻𝓮𝓹𝓪𝓻𝓮 𝓝𝓮𝔀 Objects 📖                </h2>
            <div style={{ padding: '0 60px' }}>

                <div className=' ' style={{ border: 'solid 4px #203b89', borderRadius: '25px', padding: '50px 50px 0px 50px', marginBottom: '20px' }}>
                    <table style={{ width: '100%', borderCollapse: 'separate' }} >
                        <tbody>
                            <tr>
                                <TableCell >
                                    <strong ><i> Instructions: </i></strong>
                                </TableCell>
                                <TableCell >
                                    <p>1. Select Game Language [Arabic English Urdu]
                                        <br />2. In text box paste text in the selected language
                                        <br />3. Click on the colored text box to select a color for text
                                        <br /> 4. In the sound file uploader, upload a .mp3 sound file
                                        <br /> 5. In image file uploader, upload  sound file
                                    </p>
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell > Number of Words</TableCell>
                                <TableCell  >
                                    <span  >
                                        <select onChange={handleNumLevelsChange} className="form-select form-select-md" style={{ width: '30%', border: '1px solid grey' }} >
                                            <option>Select Words</option>
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
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell >Game Language</TableCell>
                                <TableCell  >
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
                                <TableCell>Subject</TableCell>
                                <TableCell>
                                    <span >
                                        <select className="form-select form-select-md " style={{ width: '30%', border: '1px solid grey' }}>
                                            <option>Select Subject</option>
                                            {subjects.map((row) => (
                                                <>
                                                    <option value={row.id}>{row.name}</option>
                                                </>
                                            ))}
                                        </select>
                                    </span>
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell > Game Topic</TableCell>
                                <TableCell  >
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell > Game Instruction</TableCell>
                                <TableCell  >
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '60%', height: '50px', border: '1px solid grey' }} />
                                </TableCell>
                            </tr>

                            {Array.from({ length: numLevels }).map((_, index) => (
                                <tr key={index}>
                                    <TableCell >Word {index + 1} Details</TableCell>
                                    <TableCell >
                                        <span>
                                            <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', height: '50px', border: '1px solid grey' }} />
                                        </span>
                                    </TableCell>
                                </tr>
                            ))}

                            <tr>
                                <TableCell className='p-3'>
                                    <button type="submit" className="btn btn-primary">Submit Now</button>
                                </TableCell>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
