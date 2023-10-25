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



export default function ViewGame(props) {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // Fetch album data from the API
        if (props.navlink4 === '/line-game/image-to-image-viewgame') {
            axios.get('http://localhost:3000/line-game/image-to-image-viewgame')
                .then((response) => {
                    setTableData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });

        } else if (props.navlink4 === '/identify-game/view-object-game') {

            axios.get('http://localhost:3000/identify-game/view-object-game')
                .then((response) => {
                    setTableData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [props.navlink4]);


    return (
        <>
            <Nav maintitle={props.maintitle} title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
                navlink1={props.navlink1} navlink2={props.navlink2} navlink3={props.navlink3} navlink4={props.navlink4}
            />
            <div className="p-4 ">
                <h2 >
                    𝓥𝓲𝓮𝔀 Game
                </h2>
            </div>

            <div style={{ padding: '0 60px' }} >

                <div style={{ border: 'solid 4px #203b89', borderRadius: '25px', padding: '50px 50px', marginBottom: '20px' }} >
                    <table style={{ width: '100%', borderCollapse: 'separate' }} >
                        <tbody >



                            {props.navlink4 !== "/identify-game/view-object-game" ? (
                                <>
                                    <tr >
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Title</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Levels</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Image</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Class</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Version</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Test</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg"><div ><strong>Action</strong></div></TableCell>
                                    </tr>

                                    {tableData.map((row) => (
                                        <tr key={row.id}>
                                            <TableCell> {row.title}</TableCell>
                                            <TableCell> {row.levels}</TableCell>
                                            <TableCell>
                                                <img src={`../PictureGallery/gamebg/${row.image}`} alt="Background Not Available" style={{ width: '50px', height: '50px' }} />
                                            </TableCell>
                                            <TableCell> {row.class}</TableCell>
                                            <TableCell> {row.version}</TableCell>
                                            <TableCell> {row.test}</TableCell>
                                            <TableCell> {row.action}</TableCell>
                                        </tr>
                                    ))}
                                </>
                            ) : props.navlink4 === '/identify-game/view-object-game' ? (
                                <>
                                    <tr >
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Title</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Levels</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Image</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Class</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Version</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Instructions</strong></TableCell>
                                        <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg"><div ><strong>Action</strong></div></TableCell>
                                    </tr>

                                    {tableData.map((row) => (
                                        <tr key={row.id}>
                                            <TableCell> {row.title}</TableCell>
                                            <TableCell> {row.levels}</TableCell>
                                            <TableCell>
                                                <img src={`../PictureGallery/gamebg/${row.image}`} alt="Background Not Available" style={{ width: '50px', height: '50px' }} />
                                            </TableCell>
                                            <TableCell> {row.class}</TableCell>
                                            <TableCell> {row.version}</TableCell>
                                            <TableCell> {row.instruction}</TableCell>
                                            <TableCell> {row.action}</TableCell>
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
