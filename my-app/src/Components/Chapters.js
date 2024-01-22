import Navbar from './Navbar';
import { Card } from 'antd';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Chapters() {

  return (
    <>
      <Navbar />
      <div className="container">
        <section className='m-4  bg-light '>
          <div className='border rounded border-1 '>
            <div className='m-4 d-flex flex-wrap justify-content-start'>
              <h2 className='text-center m-3'>English (Grade-2A) </h2>
              <div className='w-100' style={{ marginLeft: 'inherit' }}>
                <Stack spacing={1} direction="row">
                  <Button variant="outlined">Dashboard</Button>
                  <Button variant="contained" >My Courses</Button>
                </Stack>

              </div>
            </div>

          </div>
        </section>
        <section className='p-4'>
          <div className=' p-0 bg-light '>
            <div className='p-4' style={{ borderTop: '2px solid #811a1c', borderRadius: 10 }} >
              <div className='p-3 d-flex flex-wrap  justify-content-around'>

                <div className="p-3">
                  <Card
                    className='shadow  rounded'
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" height={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvT6iQ9A07jazyx_ERSHxlb9i-SKDoIMQsA&usqp=CAU" />}
                  >
                    <div className='text-center'>
                      <Button variant="outlined" color='success'>Chapter</Button>
                    </div>
                  </Card>
                </div>
                <div className="p-3">
                  <Card
                    className='shadow  rounded'
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" height={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvT6iQ9A07jazyx_ERSHxlb9i-SKDoIMQsA&usqp=CAU" />}
                  >
                    <div className='text-center'>
                      <Button variant="outlined" color='success'>Chapter</Button>
                    </div>
                  </Card>
                </div>
                <div className="p-3">
                  <Card
                    className='shadow  rounded'
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" height={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvT6iQ9A07jazyx_ERSHxlb9i-SKDoIMQsA&usqp=CAU" />}
                  >
                    <div className='text-center'>
                      <Button variant="outlined" color='success'>Chapter</Button>
                    </div>
                  </Card>
                </div>
                <div className="p-3">
                  <Card
                    className='shadow  rounded'
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" height={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvT6iQ9A07jazyx_ERSHxlb9i-SKDoIMQsA&usqp=CAU" />}
                  >
                    <div className='text-center'>
                      <Button variant="outlined" color='success'>Chapter</Button>
                    </div>
                  </Card>
                </div>
                <div className="p-3">

                  <Card
                    className='shadow  rounded'
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" height={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvT6iQ9A07jazyx_ERSHxlb9i-SKDoIMQsA&usqp=CAU" />}
                  >
                    <div className='text-center'>
                      <Button variant="outlined" color='success'>Chapter</Button>
                    </div>
                  </Card>
                </div>
                <div className="p-3">
                  <Card
                    className='shadow  rounded'
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" height={180} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvT6iQ9A07jazyx_ERSHxlb9i-SKDoIMQsA&usqp=CAU" />}
                  >
                    <div className='text-center'>
                      <Button variant="outlined" color='success'>Chapter</Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Chapters;


