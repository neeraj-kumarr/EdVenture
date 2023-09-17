import React from 'react';
import SideNavbar from '../SideNavbar';

function CreateNewAlbum() {

    const handleOnSubmit = () => {
        alert('Album Successfully Created')
    }

    return (
        <>
            <div style={{ display: 'flex', height: '100vh' }}>
                <SideNavbar />

                <section style={{ flex: 1 }}>
                    <div className=' p-4'>
                        <h1 className="text-center mb-3"><mark> Create New Album</mark></h1>
                        <div className="p-3 border border-dark ">
                            <h3>Instructions: </h3>

                            <p>1. In text box write Album name such as Fruits, Animals, Furniture etc </p>
                            <p>2. Spell the name of album correctly</p>

                            <div className="row g-3 mt-4" >
                                <div class="col-auto">
                                    <h6 className='mt-2'>Enter Album Name: </h6>
                                </div>
                                <div className="col-auto">
                                    <input className="form-control me-2 col-3" type="text" placeholder="Write here" />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-3" onClick={handleOnSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default CreateNewAlbum;
