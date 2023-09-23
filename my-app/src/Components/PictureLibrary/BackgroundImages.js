import React, { useEffect, useState } from 'react';
import SideNavbar from '../SideNavbar';
import axios from 'axios';
import { Gallery } from "react-grid-gallery";
import Spinner from '../Spinner';

export default function BackgroundImages() {
    const [file, setFile] = useState(null);
    const [data, setData] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);
    const [loading, setLoading] = useState(false);
    const [hasMoreResults, setHasMoreResults] = useState(true); // Track if there are more results

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/background-images', {
            params: {
                keyword: searchKeyword,
                page,
                pageSize,
            }
        })
            .then((res) => {
                setData(res.data);
                const galleryData = res.data.map((image) => ({
                    src: `http://localhost:3000/PictureGallery/${image.image}`,
                    width: 320,
                    height: 212,
                }));
                setGalleryImages(galleryData);
                setHasMoreResults(res.data.length === pageSize); // Check if there are more results
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [searchKeyword, page, pageSize]);

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    };

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

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (hasMoreResults) { // Only increment page if there are more results
            setPage(page + 1);
        }
    };

    // Function to reset state when search keyword is erased
    const handleSearchKeywordReset = () => {
        setSearchKeyword('');
        setPage(1);
        setHasMoreResults(true);
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
                        <div className="input-group m-4">
                            <label htmlFor="exampleFormControlInput1" className='m-2'>Search By Keyword: </label>
                            <div className="col-4 p-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Title here."
                                    value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                />
                            </div>
                            {searchKeyword && (
                                <button
                                    type="button"
                                    className="btn btn-danger mx-4 "
                                    onClick={handleSearchKeywordReset}
                                >
                                    Clear Search
                                </button>
                            )}
                        </div>
                    </div>
                    {loading ? (
                        <Spinner />
                    ) : (
                        <div className="m-4">
                            <Gallery images={galleryImages} />
                        </div>
                    )}
                    <div className="m-4 d-flex justify-content-between">
                        <button
                            type="button"
                            disabled={page <= 1}
                            className="btn btn-dark"
                            onClick={handlePrevPage}
                        >
                            &larr; Previous Page
                        </button>
                        <button
                            type="button"
                            disabled={!hasMoreResults}
                            className="btn btn-dark"
                            onClick={handleNextPage}
                        >
                            Next Page &rarr;
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
