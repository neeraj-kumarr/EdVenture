import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Chapters() {
    const containerStyle = {
        margin: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        flex: '2',
        justifyContent: 'center',
        width: '100%', 
        height: '100%', 
        gap: '10px',
    };
    

  return (
    <>
<div className="component-with-background">
<div style={containerStyle}>
<Card border="info" style={{ width: '15rem' , height: '20rem' }}>
        <Card.Header>
      <Link to="/games">
        <Button color = 'danger' border = 'dark'>Chapter 1</Button>
      </Link>

        </Card.Header>
        <Card.Body>
        <Card.Img src="https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_640.jpg" />
          
        </Card.Body>
      </Card>
      <br />

  <Card border="info" style={{ width: '15rem' , height: '20rem' }}>
  <Card.Header>
      <Link to="/games">
        <Button>Chapter 2</Button>
      </Link>

        </Card.Header>
        <Card.Body>
        <Card.Img  src="https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_640.jpg" />
          
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: '15rem' , height: '20rem' }}>
        <Card.Header>
      <Link to="/games">
        <Button>Chapter 3</Button>
      </Link>

        </Card.Header>
        <Card.Body>
        <Card.Img  src="https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_640.jpg" />
          
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: '15rem' , height: '20rem' }}>
      <Card.Header>
      <Link to="/games">
        <Button>Chapter 4</Button>
      </Link>

        </Card.Header>        <Card.Body>
        <Card.Img  src="https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_640.jpg" />
          
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: '15rem', height: '20rem' }}>
      <Card.Header>
      <Link to="/games">
        <Button>Chapter 5</Button>
      </Link>

        </Card.Header>        <Card.Body>
        <Card.Img  src="https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_640.jpg" />
         
        </Card.Body>
      </Card>
      <br />

      <Card border="info" style={{ width: '15rem', height: '20rem'}}>
       
      <Card.Header>
      <Link to="/games">
        <Button border ='dark'>Chapter 6</Button>
      </Link>

        </Card.Header>        <Card.Body>
        <Card.Img src="https://cdn.pixabay.com/photo/2022/11/08/06/05/read-7577787_640.jpg" />
          
        </Card.Body>
      </Card>
     <br />
     </div>
     </div>
</>
 );
}

export default Chapters;


