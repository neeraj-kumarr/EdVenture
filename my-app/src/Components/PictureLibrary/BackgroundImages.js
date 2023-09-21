
import React, { useEffect, useState } from 'react';
import SideNavbar from '../SideNavbar';
import axios from 'axios';

export default function BackgroundImages() {
    const [file, setFile] = useState(null); // Initialize file state as null

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        axios.post('http://localhost:3000/')
            .then(res => console.log(res))
            .then(err => console.log(err));

    }, [])

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image', file);
        axios.post('http://localhost:3000/upload', formdata)
            .then(res => {
                if (res.data.Status === 'Success') {
                    console.log('Successed')
                } else {
                    console.log('Failed')
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div style={{ display: 'flex', height: '100vh' }}>
                <SideNavbar />

                <section style={{ flex: 1 }}>
                    <div className="m-4">
                        <h1 className="text-center">Welcome to Background Images</h1>
                        <div class="col-4 mb-3">
                            <label for="formFile" class="form-label">Default file input example</label>
                            <input class="form-control" type="file" id="formFile" onChange={handleFile} />
                        </div>
                        <button className='btn btn-dark' onClick={handleUpload}>Upload</button>
                    </div>

                    <div className="m-4">
                    </div>
                </section>
            </div>
        </>
    );
}