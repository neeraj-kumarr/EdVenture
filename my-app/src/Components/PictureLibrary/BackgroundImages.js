import React, { useEffect, useState } from 'react';
import SideNavbar from '../SideNavbar';
import axios from 'axios';
import { Gallery } from "react-grid-gallery";

export default function BackgroundImages() {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {
        axios.get('http://localhost:3000/background-images', {
            params: { keyword: searchKeyword } // Send the search keyword as a query parameter
        })
            .then((res) => {
                setData(res.data);
                // Map data to the format expected by react-grid-gallery
                const galleryData = res.data.map((image) => ({
                    src: `http://localhost:3000/PictureGallery/${image.image}`,
                    // thumbnail: `http://localhost:3000/PictureGallery/${image.image}`,
                    width: 320,
                    height: 212,
                }));
                setGalleryImages(galleryData);
            })
            .catch((err) => console.log(err));
    }, [searchKeyword]);

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        axios.post('http://localhost:3000/upload', formdata)
            .then((res) => {
                if (res.data.Status === 'Success') {
                    console.log('Uploaded Successfully');
                } else {
                    console.log('Upload Failed');
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div style={{ display: 'flex', height: '100vh' }}>
                <SideNavbar />
                <section style={{ flex: 1 }}>
                    <div className="m-4">
                        <h1 className="text-center">Welcome to Background Images</h1>
                        <div className="d-flex col-6 m-4">
                            <input className="border border-dark form-control" type="file" id="formFile" onChange={handleFile} />
                            <button className="mx-4 btn btn-dark" onClick={handleUpload}>Upload</button>
                        </div>
                        <div className="input-group m-4 ">
                            <label for="exampleFormControlInput1" className='m-2'>Search By Keyword: </label>
                            <div className="col-4 p-0">
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="Enter Title here."
                                    value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                />
                            </div>
                            {/* <button
                                className="btn btn-primary"
                                onClick={() => setSearchKeyword(searchKeyword)}
                            >
                                Search
                            </button> */}
                        </div>
                    </div>
                    <div className="m-4">
                        {/* Render the Gallery component with the mapped images */}
                        <Gallery images={galleryImages} />
                    </div>
                </section>
            </div>
        </>
    );
}
