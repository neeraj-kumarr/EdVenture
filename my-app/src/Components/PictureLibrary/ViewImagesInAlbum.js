import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideNavbar from '../SideNavbar';

export default function ViewImagesInAlbum() {
    const [albumData, setAlbumData] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState('');
    const [images, setImages] = useState([]);

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

    const fetchImagesForAlbum = async () => {
        try {
            // Fetch images for the selected album
            const response = await axios.get(`/view-images-in-album?album=${selectedAlbum}`);
            setImages(response.data);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    return (
        <>
            <div style={{ display: 'flex', height: '100vh' }}>
                <SideNavbar />
                <section style={{ flex: 1 }}>
                    <div className='p-4'>
                        <h1 className="text-center mb-3"><mark>View Images</mark></h1>
                        <div className="p-3 border border-dark">
                            <h3>Instructions:</h3>
                            <p>1. Select Album Name to View Images in the selected Album</p>
                            <p>2. Enter a Keyword to search for a particular image within an Album</p>

                            <div className="row g-3 mt-4">
                                <div className="col-auto">
                                    <h6 className='mt-2'>Select Album Name: </h6>
                                </div>
                                <div className="col-auto">
                                    <select className="form-select" aria-label="Default select example"
                                        value={selectedAlbum}
                                        onChange={(e) => setSelectedAlbum(e.target.value)}
                                    >
                                        <option value=''>Select</option>
                                        {albumData.map((album) => (
                                            <option key={album.id} value={album.id}>
                                                {album.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-auto">
                                    <input className="form-control me-2 col-3" type="text" placeholder="Write here" />
                                </div>
                                <div className="col-auto">
                                    <button type="button" className="btn btn-primary mb-3"
                                        onClick={fetchImagesForAlbum}
                                    >Submit</button>
                                </div>
                                <div className="image-container">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={`/images/${image}`} // Path to the images served by Express
                                            alt={`Image ${index}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}
