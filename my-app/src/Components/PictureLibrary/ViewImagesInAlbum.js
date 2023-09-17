import React from 'react';
export default function ViewImagesInAlbum() {
    return (
        <div className='p-4'>
            <h1 className="text-center mb-3"><mark>View Images</mark></h1>
            <div className="p-3 border border-dark">
                <h3>Instructions:</h3>
                <p>1. Select Album Name to View Images in selected Album</p>
                <p>2. Enter Keyword to search a particular image within an Album</p>

                <div className="row g-3 mt-4">
                    <div className="col-auto">
                        <h6 className='mt-2'>Enter Album Name: </h6>
                    </div>
                    <div className="col-auto">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">Fruits</option>
                            <option value="2">Animals</option>
                            <option value="3">Flowers</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <input className="form-control me-2 col-3" type="text" placeholder="Write here" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
