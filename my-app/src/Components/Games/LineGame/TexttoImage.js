import React from 'react'
import PrepareNewSlide from '../PrepareNewSlide';

export default function TexttoImage() {
    const tdcStyle = {
        border: 'solid 1px #203b89',
        padding: '10px',
    };
    const inputStyle = {
        width: '60%', border: '1px solid grey'
    };
    return (
        <div>
            <PrepareNewSlide>
                <tr>
                    <td style={tdcStyle}> Text 1</td>
                    <td style={tdcStyle}>
                        <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                    </td>
                    <td style={tdcStyle}>Position</td>
                    <td style={tdcStyle}>
                        <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                    </td>
                </tr>
                <tr>
                    <td style={tdcStyle}>Image 1</td>
                    <td style={tdcStyle}>
                        <button className="btn btn-success">Select Image</button>
                    </td>
                    <td style={tdcStyle}>Position</td>
                    <td style={tdcStyle}>
                        <input type="text" autoComplete="off" className="form-control" style={inputStyle} />
                    </td>
                </tr>
                <tr>
                    <td style={tdcStyle}> Sound 1</td>
                    <td colSpan="3" style={tdcStyle}>

                        <button className="btn btn-success" >Select Sound</button >
                    </td>
                </tr>
                <tr>
                    <td style={tdcStyle}> Text 2</td>
                    <td style={tdcStyle}>
                        <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                    </td>
                    <td style={tdcStyle}>Position</td>
                    <td style={tdcStyle}>
                        <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                    </td>
                </tr>
                <tr>
                    <td style={tdcStyle}>Image 2</td>
                    <td style={tdcStyle}>
                        <button className="btn btn-success">Select Image</button>
                    </td>
                    <td style={tdcStyle}>Position</td>
                    <td style={tdcStyle}>
                        <input type="text" autoComplete="off" className="form-control" style={inputStyle} />
                    </td>
                </tr>
                <tr>
                    <td style={tdcStyle}>Sound 2</td>
                    <td colSpan="3" style={tdcStyle}>
                        <div>
                            <button className="btn btn-success">Select Sound</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style={tdcStyle}>Text 3</td>
                    <td style={tdcStyle}>
                        <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                    </td>
                    <td style={tdcStyle}>Position</td>
                    <td style={tdcStyle}>
                        <input type="text" className="form-control" style={inputStyle} autoComplete="off" />
                    </td>
                </tr>

                <tr>
                    <td style={tdcStyle}>Image 3</td>
                    <td style={tdcStyle}>
                        <button className="btn btn-success">Select Image</button>
                    </td>
                    <td style={tdcStyle}>Position</td>
                    <td style={tdcStyle}>
                        <input type="text" autoComplete="off" className="form-control" style={inputStyle} />
                    </td>
                </tr>

                <tr>
                    <td style={tdcStyle}>Sound 3</td>
                    <td colSpan="3" style={tdcStyle}>
                        <div>
                            <button className="btn btn-success">Select Sound</button>
                        </div>
                    </td>
                </tr>

            </PrepareNewSlide>
        </div>
    )
}
