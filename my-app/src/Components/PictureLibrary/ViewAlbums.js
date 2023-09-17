import React from 'react'
import SideNavbar from '../SideNavbar';

export default function ViewAlbums() {
    const albumData = [
        { sno: 1, title: 'Fruits' },
        { sno: 2, title: 'Animals' },
        { sno: 3, title: 'Furniture' },
        { sno: 4, title: 'Nature' },
        { sno: 5, title: 'Landscapes' },
        { sno: 6, title: 'Cities' },
        { sno: 7, title: 'Sports' },
        { sno: 8, title: 'Food' },
        { sno: 9, title: 'Travel' },
        { sno: 10, title: 'Music' },
    ];
    return (
        <>
            <div style={{ display: 'flex', height: '100vh' }}>
                <SideNavbar />

                <section style={{ flex: 1 }}>
                    <div className='m-4 '>
                        <h1 className="text-center"><mark>View Albums</mark></h1>
                        <h3 className='my-4'><u>Exisiting Album List</u></h3>
                        <div className='text-center'>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Sno</th>
                                        <th scope="col">Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {albumData.map((album, index) => (
                                        <tr key={index}>
                                            <th scope="row">{album.sno}</th>
                                            <td>{album.title}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
