import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Nav from './Nav';

function TableCell({ children, backgroundImage }) {
    const tdcStyle = {
        border: 'solid 1px #203b89',
        padding: '10px',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover', // You can adjust the background properties as needed
    };

    return (
        <td style={tdcStyle}>
            {children}
        </td>
    );
}



export default function ViewSlides(props) {
    const [imgToImgTableData, setImgToImgTableData] = useState([]);
    const [textToImgTableData, setTextToImgTableData] = useState([]);
    const [textToTextTableData, setTextToTextTableData] = useState([]);

    useEffect(() => {
        // Fetch album data from the API
        axios.get('http://localhost:3000/line-game/image-to-image-viewslide')
            .then((response) => {
                setImgToImgTableData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        // Fetch album data from the API
        axios.get('http://localhost:3000/line-game/text-to-text-viewslide')
            .then((response) => {
                setTextToTextTableData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        // Fetch album data from the API
        axios.get('http://localhost:3000/line-game/text-to-image-viewslide')
            .then((response) => {
                setTextToImgTableData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <>
            <Nav maintitle={props.maintitle} title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
                navlink1={props.navlink1} navlink2={props.navlink2} navlink3={props.navlink3} navlink4={props.navlink4}
            />
            <div className="p-4 ">
                <h2 >
                    𝓥𝓲𝓮𝔀 𝓢𝓵𝓲𝓭𝓮𝓼
                </h2>
            </div>

            <div style={{ padding: '0 60px' }} >

                <div style={{ border: 'solid 4px #203b89', borderRadius: '25px', padding: '50px 50px', marginBottom: '20px' }} >
                    <table style={{ width: '100%', borderCollapse: 'separate' }} >
                        <tbody >

                            {props.navlink2 === "/line-game/image-to-image-viewslide" ? (
                                <>
                                    <tr >
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Title</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 1</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 2</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 3</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 4</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 5</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 6</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Instructions</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Active</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg"><div ><strong>Action</strong></div></TableCell>
                                    </tr>

                                    {imgToImgTableData.map((row, index) => (
                                        <tr key={index}>
                                            <TableCell> {row.title}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.object1a}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    <img src={`../PictureGallery/picture_album/${row.object1b}`} alt="Image2" style={{ width: '50px', height: '50px' }} />
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.object2a}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    <img src={`../PictureGallery/picture_album/${row.object2b}`} alt="Image2" style={{ width: '50px', height: '50px' }} />
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.object3a}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    <img src={`../PictureGallery/picture_album/${row.object3b}`} alt="Image2" style={{ width: '50px', height: '50px' }} />
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.object4a}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    <img src={`../PictureGallery/picture_album/${row.object4b}`} alt="Image2" style={{ width: '50px', height: '50px' }} />
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.object5a}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    <img src={`../PictureGallery/picture_album/${row.object5b}`} alt="Image2" style={{ width: '50px', height: '50px' }} />
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.object6a}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    <img src={`../PictureGallery/picture_album/${row.object6b}`} alt="Image2" style={{ width: '50px', height: '50px' }} />
                                                </div>
                                            </TableCell>
                                            <TableCell> {row.instruction}</TableCell>
                                            <TableCell> {row.active}</TableCell>
                                            <TableCell> Edit</TableCell>

                                        </tr>
                                    ))}
                                </>
                            ) : props.navlink2 === "/line-game/text-to-image-viewslide" ? (
                                <>
                                    <tr >
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Title</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 1</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 2</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 3</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 4</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Instructions</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Active</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg"><div ><strong>Action</strong></div></TableCell>
                                    </tr>
                                    {textToImgTableData.map((row, index) => (
                                        <tr key={index}>
                                            <TableCell> {row.title}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.image1}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    {row.TEXT1}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.image2}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    {row.TEXT2}

                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.image3}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    {row.TEXT3}

                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div>
                                                    <img src={`../PictureGallery/picture_album/${row.image4}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                                    {row.TEXT4}

                                                </div>
                                            </TableCell>
                                            <TableCell> {row.instruction}</TableCell>
                                            <TableCell> {row.active}</TableCell>
                                            <TableCell> Edit</TableCell>
                                        </tr>
                                    ))}
                                </>
                            ) : props.navlink2 === "/line-game/text-to-text-viewslide" ? (
                                <>
                                    <tr >
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Title</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 1</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 2</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 3</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 4</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 5</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 6</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Instructions</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Active</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg"><div ><strong>Action</strong></div></TableCell>
                                    </tr>
                                    {textToTextTableData.map((row, index) => (

                                        <tr key={index}>
                                            <TableCell> {row.title}</TableCell>
                                            <TableCell>
                                                <div >
                                                    {row.TEXT1a}
                                                </div>
                                                <div style={{ margin: '5px' }} >
                                                    {row.TEXT1b}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div >
                                                    {row.TEXT2a}
                                                </div><div style={{ margin: '5px' }}>
                                                    {row.TEXT2b}

                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div >
                                                    {row.TEXT3a}
                                                </div><div style={{ margin: '5px' }}>
                                                    {row.TEXT3b}

                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div >
                                                    {row.TEXT4a}
                                                </div><div style={{ margin: '5px' }}>
                                                    {row.TEXT4b}

                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div >
                                                    {row.TEXT5a}
                                                </div><div style={{ margin: '5px' }}>
                                                    {row.TEXT5b}

                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div >
                                                    {row.TEXT6a}
                                                </div><div style={{ margin: '5px' }}>
                                                    {row.TEXT6b}

                                                </div>
                                            </TableCell>
                                            <TableCell> {row.instruction}</TableCell>
                                            <TableCell> {row.active}</TableCell>
                                            <TableCell> Edit</TableCell>
                                        </tr>
                                    ))}
                                </>
                            ) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
