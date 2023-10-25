import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

export default function AddImagesToAlbum() {

    const [albumData, setAlbumData] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(''); // Initialize with an empty string
    const [file, setFile] = useState(null);

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

    const handleFile = (info) => {


        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const handleUpload = () => {
        if (!file) {
            message.error('Please select a file to upload.');
            return;
        }
        const formData = new FormData();
        formData.append('image', file);

        axios.post('http://localhost:3000/upload', formData)
            .then((res) => {
                if (res.data.Status === 'Success') {
                    console.log('Uploaded Successfully');
                    message.success('Please select a file to upload.');

                } else {
                    console.log('Upload Failed');

                }
            })
            .catch((err) => {
                console.error('Error uploading image:', err);
                message.error('Image upload failed. Check your Network');
            });
    };

    return (
        <>

            {/* <div className='container'> */}
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
                        {albumData.map((album) => (
                            <option key={album.id} value={album.id}>
                                {album.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Include the Ant Design Upload component */}
                <Upload
                    name="image"

                    showUploadList={true}
                    beforeUpload={(file) => {
                        setFile(file);
                        return false; // Prevent automatic upload
                    }}

                    onChange={handleFile}
                >
                    <Button
                        style={{ height: '40px' }}
                        className='border border-dark'
                        icon={<UploadOutlined />}
                    >
                        Click to Upload Image
                    </Button>
                </Upload>

                <div className="">
                    <input className="form-control border border-dark me-2 col-3" type="text" placeholder="Write Title/Keyword" />
                </div>

                <div className="">
                    <button
                        type="button"
                        className="btn btn-primary mb-3"
                        onClick={handleUpload}
                    >
                        Upload Image
                    </button>                            </div>
            </div>
            {/* </div> */}
        </>
    );
}
