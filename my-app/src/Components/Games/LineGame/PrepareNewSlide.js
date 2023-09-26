import React from 'react';
import SideNavbar from '../../SideNavbar'
import Nav from '../Nav'
import '../../../App.css';

export default function PrepareNewSlide() {

    const tdcStyle = {
        border: 'solid 1px #203b89',
        padding: '10px',
    };
    const inputStyle = {
        width: '60%', border: '1px solid grey'
    };

    return (

        <div style={{ display: 'flex', height: '100vh' }}>
            <SideNavbar />
            <section style={{ flex: 1 }} >
                <Nav title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games" />
                <h2 className="container p-4 " >
                    𝓟𝓻𝓮𝓹𝓪𝓻𝓮 𝓝𝓮𝔀 𝓢𝓵𝓲𝓭𝓮𝓼 📖                </h2>

                <div className='container ' style={{ border: 'solid 4px #203b89', width: '90%', borderRadius: '25px', padding: '50px    ' }}
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
                                <td colspan="3" style={tdcStyle}>
                                    <input type="text" className="form-control" autocomplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Text 1</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autocomplete="off" />
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autocomplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Image 1</td>
                                <td style={tdcStyle}>
                                    <table>
                                        <tbody><tr>  <td > <a className=" btn btn-success" >Select Image</a></td></tr></tbody></table>
                                </td>
                                <td style={tdcStyle}>Position </td>
                                <td style={tdcStyle}>
                                    <input type="text" autocomplete="off" className="form-control" style={inputStyle} />
                                </td>
                            </tr>

                            <tr>
                                <td style={tdcStyle}> Sound 1</td>
                                <td colspan="3" style={tdcStyle}><div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td >
                                                    <a className="btn btn-success" >Select Sound</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Text 2</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autocomplete="off" />
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autocomplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Image 2</td>
                                <td style={tdcStyle}>
                                    <table>
                                        <tbody><tr>  <td > <a className=" btn btn-success" >Select Image</a></td></tr></tbody></table>
                                </td>
                                <td style={tdcStyle}>Position </td>
                                <td style={tdcStyle}>
                                    <input type="text" autocomplete="off" className="form-control" style={inputStyle} />
                                </td>
                            </tr>

                            <tr>
                                <td style={tdcStyle}> Sound 2</td>
                                <td colspan="3" style={tdcStyle}><div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td >
                                                    <a className="btn btn-success" >Select Sound</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Text 3</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autocomplete="off" />
                                </td>
                                <td style={tdcStyle}>Position</td>
                                <td style={tdcStyle}>
                                    <input type="text" className="form-control" style={inputStyle} autocomplete="off" />
                                </td>
                            </tr>
                            <tr>
                                <td style={tdcStyle}> Image 3</td>
                                <td style={tdcStyle}>
                                    <table>
                                        <tbody><tr>  <td > <a className=" btn btn-success" >Select Image</a></td></tr></tbody></table>
                                </td>
                                <td style={tdcStyle}>Position </td>
                                <td style={tdcStyle}>
                                    <input type="text" autocomplete="off" className="form-control" style={inputStyle} />
                                </td>
                            </tr>

                            <tr>
                                <td style={tdcStyle}> Sound 3</td>
                                <td colspan="3" style={tdcStyle}><div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td >
                                                    <a className="btn btn-success" >Select Sound</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </td>
                            </tr>

                            <td style={tdcStyle} className='p-3'>
                                <button type="submit" class="btn btn-primary">Submit Now</button>
                            </td>

                        </tbody>
                    </table>
                </div>
            </section>
        </div >

    );
}
