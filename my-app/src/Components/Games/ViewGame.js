import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';

function TableCell({ children, backgroundImage }) {
    const cellStyle = {
        border: 'solid 1px #203b89',
        padding: '10px',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
    };

    return (
        <td style={cellStyle}>
            {children}
        </td>
    );
}

export default function ViewGame(props) {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let endpoint = '';

                if (props.navlink4 === '/line-game/image-to-image-viewgame') {
                    endpoint = 'http://localhost:3000/line-game/image-to-image-viewgame';

                } else if (props.navlink4 === '/line-game/text-to-image-viewgame') {
                    endpoint = 'http://localhost:3000/line-game/text-to-image-viewgame';

                } else if (props.navlink4 === '/line-game/text-to-text-viewgame') {
                    endpoint = 'http://localhost:3000/line-game/text-to-text-viewgame';

                } else if (props.navlink4 === '/identify-game/view-object-game') {
                    endpoint = 'http://localhost:3000/identify-game/view-object-game';
                }

                const response = await axios.get(endpoint);
                setTableData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }


        };

        fetchData();

    }, [props.navlink4]);

    const isIdentifyGame = props.navlink4 === '/identify-game/view-object-game';


    return (
        <>
            <Nav maintitle={props.maintitle} title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
                navlink1={props.navlink1} navlink2={props.navlink2} navlink3={props.navlink3} navlink4={props.navlink4}
            />
            <div className="p-4">
                <h2>𝓥𝓲𝓮𝔀 Game</h2>
            </div>
            <div style={{ padding: '0 60px' }}>
                <div style={{ border: 'solid 4px #203b89', borderRadius: '25px', padding: '50px 50px', marginBottom: '20px' }}>
                    <table style={{ width: '100%', borderCollapse: 'separate' }}>
                        <tbody>
                            <tr>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Title</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Levels</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Image</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Class</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Version</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Chapter</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">
                                    &nbsp;<strong>{isIdentifyGame ? 'Instructions' : 'Test'}</strong>
                                </TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">
                                    <div><strong>Action</strong></div>
                                </TableCell>
                            </tr>
                            {tableData.map((row) => (

                                <tr key={row.id}>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell>{row.levels}</TableCell>
                                    <TableCell>
                                        {/*  eslint-disable-next-line */}
                                        <img src={row.image ? `http://localhost:3000/PictureGallery/gamebg/${row.image}` : 'https://previews.123rf.com/images/roxanabalint/roxanabalint1701/roxanabalint170100147/69079016-not-available-grunge-rubber-stamp-on-white-background-vector-illustration.jpg'}
                                            style={{ width: '100px', height: '50px' }} />
                                    </TableCell>
                                    <TableCell>{row.class}</TableCell>
                                    <TableCell>{row.version}</TableCell>
                                    <TableCell>{row.chapter ? row.chapter : <i style={{ color: 'red' }}>'No Chapter'</i>}</TableCell>
                                    <TableCell>{isIdentifyGame ? row.instruction : row.test}</TableCell>
                                    <TableCell>{row.action}</TableCell>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
