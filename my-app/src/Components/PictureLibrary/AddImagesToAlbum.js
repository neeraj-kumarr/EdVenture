import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import SideNavbar from '../SideNavbar';

export default function AddImagesToAlbum() {

    const [albumData, setAlbumData] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(''); // Initialize with an empty string

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



    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <>
            <div style={{ display: 'flex', height: '100vh' }}>
                <SideNavbar />

                <section style={{ flex: 1 }}>
                    <div className='container'>
                        <h1 className="my-4 text-center"><mark>Add Image to Existing Albums</mark></h1>
                        <div className='m-4 p-4 border border-dark'>
                            <h3><u>Instructions:</u></h3>
                            <p>
                                1. Select Album from drop-down menu<br />
                                2. Insert Image name in Text box in English<br />
                                3. In the image box upload an image from your system. (The ideal size of the image is 95px X 135px and not greater than 300kb)<br />
                                4. You may upload up to 5 images at a time.</p>
                            <div style={{ color: 'red' }}>
                                <p><i>Best Policy would be not to upload images bigger than 300px X 300px<br />
                                    You can only upload images saved on your system</i></p>
                            </div>
                        </div>

                        <div class="d-flex justify-content-evenly m-4 ">

                            <h6 className='mt-2'>Choose Picture Album: </h6>
                            <div className="col-2">
                                <select className="border border-dark form-select" aria-label="Default select example" value={selectedAlbum} // Use selectedAlbum here
                                    onChange={(event) => setSelectedAlbum(event.target.value)}>

                                    <option selected="selected" >Select </option>
                                    {albumData.map((album, index) => (
                                        <option key={index} value={album.id}>
                                            {album.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Include the Ant Design Upload component */}
                            <Upload {...props}>
                                <Button style={{ height: '40px' }} className='border border-dark' icon={<UploadOutlined />}>Click to Upload Images</Button>
                            </Upload>

                            <div className="">
                                <input className="form-control border border-dark me-2 col-3" type="text" placeholder="Write Title/Keyword" />
                            </div>

                            <div className="">
                                <button type="submit" className="btn btn-primary mb-3">Submit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
