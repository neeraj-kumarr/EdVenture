import React, { useState } from 'react';
import Nav from '../Nav';


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
    const [selectedImages, setSelectedImages] = useState([null, null, null, null, null, null, null, null, null, null]);

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

    return (
        <>
            {/* <section style={sectionStyle} > */}
            < Nav maintitle="[Image to Image]" title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
                navlink1="/line-game/image-to-image-newslide" navlink2="/line-game/image-to-image-viewslide" navlink3="/line-game/image-to-image-compile" navlink4="/line-game/image-to-image-viewgame"
            />
            <h2 className=" p-4 " >
                𝓟𝓻𝓮𝓹𝓪𝓻𝓮 𝓝𝓮𝔀 𝓢𝓵𝓲𝓭𝓮𝓼 📖
            </h2>
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
                                </TableCell></tr>
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
                                </TableCell></tr>
                            <tr>
                                <TableCell > Game Title</TableCell>
                                <TableCell colSpan="3" >
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '30%', border: '1px solid grey' }} />
                                </TableCell></tr>
                            <tr>
                                <TableCell > Game Instruction</TableCell>
                                <TableCell colSpan="3" >
                                    <input type="text" className="form-control" autoComplete="off" style={{ width: '60%', height: '50px', border: '1px solid grey' }} />
                                </TableCell></tr>
                            <tr>
                                <TableCell>Object 1a</TableCell>
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
                                            alt="Selected"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell>Object 1b</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 1)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[1] && (
                                        <img
                                            src={selectedImages[1]}
                                            alt="Selected"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell>Object 2a</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 2)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[2] && (
                                        <img
                                            src={selectedImages[2]}
                                            alt="Selected"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell>Object 2b</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 3)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[3] && (
                                        <img
                                            src={selectedImages[3]}
                                            alt="Selected "
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell>Object 3a</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 4)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[4] && (
                                        <img
                                            src={selectedImages[4]}
                                            alt="Selected"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell>Object 3b</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 5)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[5] && (
                                        <img
                                            src={selectedImages[5]}
                                            alt="Selected"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell>Object 4a</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 6)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[6] && (
                                        <img
                                            src={selectedImages[6]}
                                            alt="Selected"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell>Object 4b</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 7)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[7] && (
                                        <img
                                            src={selectedImages[7]}
                                            alt="Selected"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell>Object 5a</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 8)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[8] && (
                                        <img
                                            src={selectedImages[8]}
                                            alt="Selected"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>

                            <tr>
                                <TableCell>Object 5b</TableCell>
                                <TableCell>
                                    <label className="btn btn-success">
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={(e) => handleImageUpload(e, 9)}
                                            accept="image/*"
                                        />
                                        Select Image
                                    </label>
                                    {selectedImages[9] && (
                                        <img
                                            src={selectedImages[9]}
                                            alt="Selected"
                                            style={{ maxWidth: '100px', padding: '5px' }}
                                        />
                                    )}
                                </TableCell>
                            </tr>


                            <tr>
                                <TableCell className='p-3'>
                                    <button type="submit" className="btn btn-primary">Submit Now</button>
                                </TableCell></tr>
                        </tbody>
                    </table>
                </div>
            </div >

        </>
    );
}
