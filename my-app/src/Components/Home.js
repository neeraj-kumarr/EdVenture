import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Home() {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/')
        }
    }, [])

    return (
        <div className='m-4' >
            <h1 className="text-center">Welcome to EdVenture</h1>
            <h3>Bank of the free</h3>
            <p>Lorem ipsum dolor sit amet...</p>
        </div>
    )
}
