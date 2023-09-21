import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavbar from '../SideNavbar';

export default function ViewAlbums() {
    const [albumData, setAlbumData] = useState([]);

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
            <div style={{ display: 'flex', height: '100vh' }}>
                <SideNavbar />

                <section style={{ flex: 1 }}>
                    <div className='m-4 '>
                        <h1 className="text-center"><mark>View Albums</mark></h1>
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
                </section>
            </div>
        </>
    )
}
