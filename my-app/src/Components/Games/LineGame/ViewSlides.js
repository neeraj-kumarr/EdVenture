import React from 'react';
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

    return (
        <>
            <Nav maintitle={props.maintitle} title1="Prepare New Slide" title2="View Slides" title3="Compile Games" title4="View Games"
                // navlink1="/line-game/text-to-image-newslide" navlink2="/" navlink3="/line-game/text-to-image-compile" navlink4="/"
                navlink1={props.navlink1} navlink2={props.navlink2} navlink3={props.navlink3} navlink4={props.navlink4}
            />
            <div className="py-4 px-5 d-flex justify-content-between">
                <h2 >
                    View Slides
                </h2>

                <select style={{ border: '1px solid black', borderRadius: '10px', borderColor: 'green', padding: '5px' }}>
                    <option>Select Language</option>
                    <option value="Arabic">العربية</option>
                    <option value="English">English</option>
                    <option value="Urdu">اردو</option>
                </select>
            </div>
            <div style={{ padding: '0 60px' }} >

                <div style={{ border: 'solid 4px #203b89', borderRadius: '25px', padding: '50px 50px ', marginBottom: '20px' }} >
                    <table style={{ width: '100%', borderCollapse: 'separate' }} >
                        <tbody >

                            <tr >
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg"> &nbsp;<strong>Title</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 1</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 2</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item3</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 4</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 5</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Item 6</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Instructions</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg">&nbsp;<strong>Active</strong></TableCell>
                                <TableCell backgroundImage="https://crossbones.org.uk/wp-content/uploads/2016/08/grey-background.jpg"><div ><strong>Action</strong></div></TableCell>
                            </tr>
                            {/* <tr >
                                <TableCell >
                                    <h5>Records Not Found</h5>
                                </TableCell>
                            </tr> */}


                            {/* <tr>
                                <TableCell colspan="8">
                                    <div style={{ align: "center" }}>
                                    </div>
                                </TableCell>
                            </tr> */}


                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
