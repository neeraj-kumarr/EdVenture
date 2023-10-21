import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateNewAlbum() {
    const [albumName, setAlbumName] = useState('');
    const [message, setMessage] = useState('');
    const [albumData, setAlbumData] = useState([]);


    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios
            .post('/create-album', { albumName })
            .then((response) => {
                setMessage(response.data.message);
                setTimeout(() => {
                    setMessage('');
                }, 2000); // 2000 milliseconds (2 seconds)
            })
            .catch((error) => {
                console.error('Error creating album:', error);
                setMessage('Error creating album');
            });
    };


    useEffect(() => {
        // Fetch album data from the API
        axios.get('http://localhost:3000/view-albums')
            .then((response) => {
                setAlbumData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return (
        <>
            {/* <div style={{ display: 'flex', height: '100vh' }}>
                <SideNavbar /> */}

            {/* <section style={sectionStyle}> */}
            <div className=' p-4'>
                <h1 className="text-center mb-3"><mark> Create New Album</mark></h1>
                <div className="p-3 border border-dark ">
                    <h3>Instructions: </h3>

                    <p>1. In text box write Album name such as Fruits, Animals, Furniture
                        etc </p>
                    <p>2. Spell the name of album correctly</p>

                    <div className="row g-3 mt-4" >
                        <div className="col-auto">
                            <h6 className='mt-2'>Enter Album Name: </h6>
                        </div>
                        <div className="col-auto">
                            <input className="form-control me-2 col-3" type="text"
                                placeholder="Write here" value={albumName}
                                onChange={(e) => setAlbumName(e.target.value)} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary mb-3"
                                onClick={handleOnSubmit}>Submit</button>
                        </div>
                        <div className="mt-3">
                            {message && <div className="alert alert-success">{message}</div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-4 '>
                <h3 className='my-4'><u>Exisiting Album List</u></h3>
                <div className='text-center'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Sno</th>
                                <th scope="col">Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {albumData.map((album, index) => (
                                <tr key={index}>
                                    <th scope="row">{album.id}</th>
                                    <td>{album.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* </section> */}
            {/* </div > */}
        </>
    );
}

export default CreateNewAlbum;
