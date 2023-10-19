import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Gallery } from "react-grid-gallery";
import Spinner from '../Spinner';

export default function ViewImagesInAlbum() {
    // eslint-disable-next-line
    const [albumData, setAlbumData] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState('');
    // eslint-disable-next-line
    const [data, setData] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [page, setPage] = useState(1);
    // eslint-disable-next-line
    const [pageSize, setPageSize] = useState(8);
    const [loading, setLoading] = useState(false);
    const [hasMoreResults, setHasMoreResults] = useState(true);

    // Function to fetch images for the selected album
    // const fetchImages = async () => {
    //     setLoading(true);
    //     try {
    //         // Fetch album data from the API
    //         const albumResponse = await axios.get('http://localhost:3000/view-albums');
    //         setAlbumData(albumResponse.data);

    //         // Fetch images for the selected album
    //         const imagesResponse = await axios.get('http://localhost:3000/view-images-in-album', {
    //             params: {
    //                 keyword: searchKeyword,
    //                 page,
    //                 pageSize,
    //             }
    //         });

    //         setData(imagesResponse.data);

    //         // Process image data
    //         const galleryData = imagesResponse.data.map((image) => ({
    //             src: `http://localhost:3000/PictureGallery/${image.image}`,
    //             width: 320,
    //             height: 212,
    //         }));

    //         setGalleryImages(galleryData);
    //         setHasMoreResults(imagesResponse.data.length === pageSize);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     fetchImages(); // Call the fetchImages function to fetch data
    // }, [searchKeyword, page, pageSize]);


    useEffect(() => {
        setLoading(true);
        // FIND BELOW SOLUTION
        axios.get('http://localhost:3000/view-images-in-album', {
            params: {
                keyword: searchKeyword,
                page,
                pageSize,
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
                setHasMoreResults(res.data.length === pageSize); // Check if there are more results
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [searchKeyword, page, pageSize]);

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

                        <select className="form-select h-25 w-25" aria-label="Default select example"
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