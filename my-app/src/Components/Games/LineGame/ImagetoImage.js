import React from 'react';
import Nav from '../Nav'

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

export default function ImagetoImage() {


    return (
        <>
            {/* <section style={sectionStyle} > */}
            < Nav maintitle="[Image to Image]" title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
                navlink1="/line-game/image-to-image-newslide" navlink2="/line-game/image-to-image-viewslide" navlink3="/line-game/image-to-image-compile" navlink4="/line-game/image-to-image-viewgame"
            />
            <h2 className=" p-4 " >
                𝓟𝓻𝓮𝓹𝓪𝓻𝓮 𝓝𝓮𝔀 𝓢𝓵𝓲𝓭𝓮𝓼 📖                </h2>
            <div style={{ padding: '0 60px' }}>
                <div style={{ border: 'solid 4px #203b89', borderRadius: '25px', padding: '50px 50px 0px 50px', marginBottom: '20px' }}>
                    <table style={{ width: '100%', borderCollapse: 'separate' }} >
                        <tbody>
                            <tr>
                                <TableCell height="24" colSpan="4" >
                                    <strong><i> Instructions: </i></strong>
                                </TableCell>
                                <TableCell height="24" colSpan="4" >
                                    <p>1. Select Game Language [Arabic English Urdu]
                                        <br />2. In text box paste text in the selected language
                                        <br />3. Click on the colored text box to select a color for text
                                        <br /> 4. In the sound file uploader, upload a .mp3 sound file
                                        <br /><mark>5. The (a) objects are in left position and (b) onject are on right position</mark>
                                    </p>
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell >Game Language</TableCell>
                                <TableCell colSpan="3" >
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
                                <TableCell colSpan="3" >
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell > Game Instruction</TableCell>
                                <TableCell colSpan="3" >
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '60%', height: '50px', border: '1px solid grey' }} />
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell > Object 1a</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Object 1b</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Object 2a</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Object 2b</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Object 3a</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Object 3b</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Object 4a</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Object 4b</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Object 5a</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Object 5b</TableCell>
                                <TableCell >
                                    <button className="btn btn-success">Select Image</button>
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>

                            <tr>
                                <TableCell className='p-3'>
                                    <button type="submit" className="btn btn-primary">Submit Now</button>
                                </TableCell>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            {/* </section > */}
            {/* </div > */}
        </>
    );
}
