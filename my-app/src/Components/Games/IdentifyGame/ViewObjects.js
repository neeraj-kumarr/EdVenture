import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Nav from '../Nav';

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


export default function ViewObjects(props) {

    const [objects, setObjects] = useState([]);

    useEffect(() => {
        // Fetch album data from the API
        axios.get('http://localhost:3000/identify-object/view-objects')
            .then((response) => {
                setObjects(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (
        <>
            < Nav maintitle="Identify Game" title1="Prepare New Slides" title2="View Slides" title3="Compile Games" title4="View Games"
                navlink1="/identify-game/prepare-new-objects" navlink2="/identify-game/view-objects" navlink3="/identify-game/compile-object-game" navlink4="/identify-game/view-object-game" />
            <div className="p-4 ">
                <h2 >
                    𝓥𝓲𝓮𝔀 Objects
                </h2>
            </div>

            <div style={{ padding: '0 60px' }} >

                <div style={{ border: 'solid 4px #203b89', borderRadius: '25px', padding: '50px 50px', marginBottom: '20px' }} >
                    <table style={{ width: '100%', borderCollapse: 'separate' }} >
                        <tbody >
                            <tr >
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Title</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Image</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Text 1</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Text 2</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Text 3</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg"><div ><strong>Action</strong></div></TableCell>
                            </tr>
                            {objects.map((row) => (
                                <tr key={row.id}>
                                    <TableCell> {row.title}</TableCell>
                                    <TableCell>
                                        <div>
                                            <img src={`../PictureGallery/picture_album/${row.image1}`} alt="Image1" style={{ width: '50px', height: '50px' }} />
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div>
                                            {row.TEXT1}
                                            {row.ans1}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div>
                                            {row.TEXT2}
                                            {row.ans2}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div>
                                            {row.TEXT3}
                                            {row.ans3}
                                        </div>
                                    </TableCell>
                                    <TableCell> Edit</TableCell>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
