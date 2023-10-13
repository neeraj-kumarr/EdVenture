import React from 'react';
import Nav from '../../Nav';

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

export default function TexttoText() {


    const inputStyle = {
        width: '30%', border: '1px solid grey'
    };

    return (

        <>
            < Nav maintitle="[Text to Text]" title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
                navlink1="/line-game/text-to-text-newslide" navlink2="/" navlink3="/line-game/text-to-text-compile" navlink4="/"
            />
            <h2 className=" p-4 " >
                𝓟𝓻𝓮𝓹𝓪𝓻𝓮 𝓝𝓮𝔀 𝓢𝓵𝓲𝓭𝓮𝓼 📖                </h2>
            <div style={{ padding: '0 60px' }}>

                <div className=' ' style={{ border: 'solid 4px #203b89', borderRadius: '25px', padding: '50px 50px 0px 50px', marginBottom: '20px' }}>
                    <table style={{ width: '100%', borderCollapse: 'separate' }} >
                        <tbody>
                            <tr>
                                <TableCell height="24" colSpan='4'>
                                    <strong><i> Instructions: </i></strong>
                                </TableCell>
                                <TableCell height="24" colSpan="4" >
                                    <p>1. Select Game Language [Arabic English Urdu]
                                        <br />2. In text box paste text in the selected language
                                        <br />3. Click on the colored text box to select a color for text
                                        <br /> 4. In the sound file uploader, upload a .mp3 sound file</p>
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell >Game Language</TableCell>
                                <TableCell colSpan="6" >
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
                                <TableCell  >
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '60%', height: '50px', border: '1px solid grey' }} />
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell > Text 1a</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Text 1b</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>

                            <tr>
                                <TableCell > Sound 1</TableCell>
                                <TableCell colSpan="3" >

                                    <button className="btn btn-success" >Select Sound</button >
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell > Text 2a</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell > Text 2b</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>

                            <tr>
                                <TableCell >Sound 2</TableCell>
                                <TableCell colSpan="3" >
                                    <div>
                                        <button className="btn btn-success">Select Sound</button>
                                    </div>
                                </TableCell>
                            </tr>
                            <tr>
                                <TableCell >Text 3a</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell >Text 3b</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell>
                                {/* <TableCell >Position</TableCell>
                                <TableCell >
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </TableCell> */}
                            </tr>
                            <tr>
                                <TableCell >Sound 3</TableCell>
                                <TableCell colSpan="3" >
                                    <div>
                                        <button className="btn btn-success">Select Sound</button>
                                    </div>
                                </TableCell>
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
        </>
    );
}
