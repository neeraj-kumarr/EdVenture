import React from 'react';
import Navbar from './Navbar';
import Avatar from '@mui/material/Avatar';
import { Card } from 'antd';
import { Progress, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;


export default function Home() {

    return (
        <>
            <Navbar />
            <div className="container ">
                <section className='m-4  bg-light '>
                    <div className='border rounded border-1 '>
                        <div className='m-4 d-flex flex-wrap justify-content-start'>
                            <Avatar
                                alt="Remy Sharp"
                                src="../logo.png"
                                sx={{ width: 80, height: 80 }}
                            />
                            <h2 className='text-center m-3'>Welcome, Neeraj Kumar</h2>
                        </div>
                    </div>
                </section>

                <section className='m-4 bg-light '>
                    <div className='p-4' style={{ borderTop: '2px solid #811a1c', borderRadius: 10 }} >
                        <p className='pb-3' style={{ fontSize: 25, fontFamily: 'Monaco ' }}>Latest  Progress</p>
                        <div className=' d-flex flex-wrap  justify-content-around'>
                            <div className="p-3">
                                <Card
                                    className='shadow  rounded'
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" height={180} src="https://t3.ftcdn.net/jpg/03/70/42/66/360_F_370426690_Pejt9KxjWTHPklsKwripaxr0iA17zupF.jpg" />}
                                >
                                    <div className='d-flex flex-wrap justify-content-between'>
                                        <Meta title="Highest Score " description="Class 2A" />
                                        <Space wrap>
                                            <Progress type="circle" percent={70} size={60} strokeColor="green" />
                                        </Space>
                                    </div>
                                </Card>
                            </div>
                            <div className="p-3">
                                <Card
                                    className='shadow  rounded'
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" height={180} src="https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=sph" />}
                                >
                                    <div className='d-flex flex-wrap justify-content-between'>
                                        <Meta title="Lowest Score " description="Class 2A" />
                                        <Space wrap>
                                            <Progress type="circle" percent={30} size={60} strokeColor="red" />
                                        </Space>
                                    </div>
                                </Card>
                            </div>
                            <div className="p-3">
                                <Card
                                    className='shadow  rounded'
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" height={180} src="https://www.stonebridge.uk.com/blog/wp-content/uploads/2021/02/What-Math-Subjects-are-required-for-Computer-Science-1.png" />}
                                >
                                    <div className='d-flex flex-wrap justify-content-between'>
                                        <Meta title="Recent Activity Score" description="Class 2A" />
                                        <Space wrap>
                                            <Progress type="circle" percent={50} size={60} />
                                        </Space>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='m-4 bg-light '>
                    <div className='p-4' style={{ borderTop: '2px solid #811a1c', borderRadius: 10 }} >
                        <p className='pb-3' style={{ fontSize: 25, fontFamily: 'Monaco ' }}> All Subject List</p>
                        <div className=' d-flex flex-wrap justify-content-around '>
                            <div className='p-3'>
                                <Link to="/english">

                                    <Card
                                        className='shadow  rounded'
                                        hoverable
                                        style={{ width: 500 }}
                                        cover={<img alt="example" height={180} src="https://t3.ftcdn.net/jpg/03/70/42/66/360_F_370426690_Pejt9KxjWTHPklsKwripaxr0iA17zupF.jpg" />}
                                    >
                                        <Meta title="English " description="Class 2A" />
                                        <Progress percent={50} status="active" />

                                    </Card>
                                </Link>

                            </div>

                            <Card
                                className='shadow  rounded'
                                hoverable
                                style={{ width: 500 }}
                                cover={<img alt="example" height={180} src="https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=sph" />}
                            >
                                <Meta title="Science " description="Class 2A" />
                                <Progress percent={70} status="active" />

                            </Card>
                            <Card
                                className='shadow  rounded'
                                hoverable
                                style={{ width: 500 }}
                                cover={<img alt="example" height={180} src="https://t3.ftcdn.net/jpg/03/70/42/66/360_F_370426690_Pejt9KxjWTHPklsKwripaxr0iA17zupF.jpg" />}
                            >
                                <Meta title="Social Study " description="Class 2A" />
                                <Progress percent={50} status="active" />

                            </Card>
                            <Card
                                className='shadow  rounded'
                                hoverable
                                style={{ width: 500 }}
                                cover={<img alt="example" height={180} src="https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=sph" />}
                            >
                                <Meta title="Urdu " description="Class 2A" />
                                <Progress percent={70} status="active" />

                            </Card>
                            <Card
                                className='shadow  rounded'
                                hoverable
                                style={{ width: 500 }}
                                cover={<img alt="example" height={180} src="https://t3.ftcdn.net/jpg/03/70/42/66/360_F_370426690_Pejt9KxjWTHPklsKwripaxr0iA17zupF.jpg" />}
                            >
                                <Meta title="Math " description="Class 2A" />
                                <Progress percent={50} status="active" />

                            </Card>
                            <Card
                                className='shadow  rounded'
                                hoverable
                                style={{ width: 500 }}
                                cover={<img alt="example" height={180} src="https://img.freepik.com/free-vector/colourful-science-work-concept_23-2148539571.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=sph" />}
                            >
                                <Meta title="Drawing " description="Class 2A" />
                                <Progress percent={70} status="active" />

                            </Card>

                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}
