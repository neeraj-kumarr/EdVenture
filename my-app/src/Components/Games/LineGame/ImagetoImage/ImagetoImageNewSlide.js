import React from 'react';
import SideNavbar from '../../../SideNavbar';
import Nav from '../../Nav'

export default function ImagetoImageNewSlide() {

    const tdcStyle = {
        border: 'solid 1px #203b89',
        padding: '10px',
    };
    const inputStyle = {
        width: '60%', border: '1px solid grey'
    };
    const sectionStyle = {
        flex: 1,
        overflowX: 'auto',
        backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/512/865/desktop-wallpaper-grey-background-vectors-stock-psd-light-gray-thumbnail.jpg")', // Replace with the path to your image
        backgroundSize: 'cover', // Adjust background size as needed
        backgroundRepeat: 'no-repeat', // Adjust background repeat as needed
    };
    return (

        <div style={{ display: 'flex', height: '100vh' }}>
            <SideNavbar />
            <section style={sectionStyle} >
                < Nav maintitle="[Image to Image]" title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
                    navlink1="/image-to-image-newslide" navlink2="/" navlink3="/image-to-image-compile" navlink4="/"
                />
                <h2 className="container p-4 " >
                    𝓟𝓻𝓮𝓹𝓪𝓻𝓮 𝓝𝓮𝔀 𝓢𝓵𝓲𝓭𝓮𝓼 📖                </h2>

                <div className='container ' style={{ border: 'solid 4px #203b89', width: '90%', borderRadius: '25px', padding: '50px 50px 0px 50px', marginBottom: '20px' }}>
                    <table style={{ width: '100%', borderCollapse: 'separate' }} >
                        <tbody>
                            <tr>
                                <td height="24" colSpan="4" style={tdcStyle}>
                                    <strong><i> Instructions: </i></strong>
                                </td>
                            </tr>
                            <tr>
                                <td height="24" colSpan="4" style={tdcStyle}>
                                    <p>1. Select Game Language [Arabic English Urdu]
                                        <br />2. In text box paste text in the selected language
                                        <br />3. Click on the colored text box to select a color for text
                                        <br /> 4. In the sound file uploader, upload a .mp3 sound file</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}>Game Language</td>
                                <td colSpan="3" style={tdcStyle}>
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
                                <td colSpan="3" style={tdcStyle}>
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Game Instruction</td>
                                <td colSpan="3" style={tdcStyle}>
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 1a</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 1b</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 2a</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 2b</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 3a</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 3b</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 4a</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 4b</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 5a</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Object 5b</td>
                                <td style={tdcStyle}>
                                    <button className="btn btn-success">Select Image</button>
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                                </td>
                            </tr>

                            <tr>
                                <td style={tdcStyle} className='p-3'>
                                    <button type="submit" className="btn btn-primary">Submit Now</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </section >
        </div >

    );
}
