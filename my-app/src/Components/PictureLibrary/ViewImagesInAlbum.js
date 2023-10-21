import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Gallery } from "react-grid-gallery";
import Spinner from '../Spinner';

export default function ViewImagesInAlbum() {
    // eslint-disable-next-line
    const [albumData, setAlbumData] = useState([]);
    const [selectedAlbumTitle, setSelectedAlbumTitle] = useState(''); // Track the selected album title

    // eslint-disable-next-line
    const [data, setData] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [page, setPage] = useState(1);
    // eslint-disable-next-line
    const [pageSize, setPageSize] = useState(8);
    const [loading, setLoading] = useState(false);
    const [hasMoreResults, setHasMoreResults] = useState(true);

    useEffect(() => {
        // Fetch album data from the API
        axios.get('http://localhost:3000/view-albums')
            .then((response) => {
                setAlbumData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching album data:', error);
            });
    }, []);


    useEffect(() => {
        // if (selectedAlbumTitle) { // Only fetch images if an album title is selected
        setLoading(true);
        axios.get('http://localhost:3000/view-images-in-album', {
            params: {
                keyword: searchKeyword,
                page,
                pageSize,
                // albumTitle: selectedAlbumTitle, // Pass the selected album title
            }
        })
            .then((res) => {
                setData(res.data);
                const galleryData = res.data.map((image) => ({
                    src: `http://localhost:3000/PictureGallery/picture_album/${image.image}`,
                    width: 320,
                    height: 212,
                }));
                setGalleryImages(galleryData);
                setHasMoreResults(res.data.length === pageSize);
            })
            .catch((err) => console.log('Error fetching image data:', err))
            .finally(() => setLoading(false));
        // } else {
        //     // If no album title is selected, you can choose to show all pictures
        //     // You may fetch all pictures without filtering by album title here
        // }
    }, [searchKeyword, page, pageSize, selectedAlbumTitle]);



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

            <div className='p-4'>
                <h1 className="text-center mb-3"><mark>View Images</mark></h1>
                <div className="p-3 border border-dark">
                    <h3>Instructions:</h3>
                    <p>1. Select Album Name to View Images in the selected Album</p>
                    <p>2. Enter a Keyword to search for a particular image within an Album</p>

                    <div className="d-flex justify-content-between my-4">
                        <h6 >Select Album Name: </h6>

                        <select
                            className="form-select h-25 w-25"
                            aria-label="Default select example"
                            value={selectedAlbumTitle}
                            onChange={(e) => setSelectedAlbumTitle(e.target.value)}
                        >
                            <option value=''>Select</option>
                            {albumData.map((album) => (
                                <option key={album.id} value={album.id}>
                                    {album.title}
                                </option>
                            ))}
                        </select>
                        <div className="input-group">
                            <label htmlFor="exampleFormControlInput1" className='m-2'>Search By Keyword: </label>
                            <div >
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
        </>
    );
}