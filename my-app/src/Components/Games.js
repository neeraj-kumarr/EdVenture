 import Card from 'react-bootstrap/Card';


 function Sub() {
     const containerStyle = {
         margin: '10px',
         padding: '80px',
         display: 'flex',
         flexDirection: 'row',
         flex: '5',
         justifyContent: 'center',
         width: '100%', 
         
         height: '100%', 
         gap: '40px',
     };


   return (
     <>
  

<div className="component-with-background">
<div style={containerStyle}>
   <Card border="dark" style={{ width: '15rem' , height: '20rem' }}>
         <Card.Header>Line Game</Card.Header>
         <Card.Body>
         <Card.Img variant="top" src="https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymxhbmt8ZW58MHx8MHx8fDA%3D" />
           
         </Card.Body>
       </Card>
       <br />

       <Card border="dark" style={{ width: '15rem', height: '20rem' }}>
         <Card.Header>Spellathon</Card.Header>
         <Card.Body>
         <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymxhbmt8ZW58MHx8MHx8fDA%3D" />
          
         </Card.Body>
       </Card>
       <br />

       <Card border="dark" style={{ width: '15rem', height: '20rem'}}>
        
         <Card.Header>Object identify</Card.Header>
         <Card.Body>
         <Card.Img variant="top" src="https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymxhbmt8ZW58MHx8MHx8fDA%3D" />
           
         </Card.Body>
       </Card>
      <br />
      </div>
      </div>
</>
  );
}


export default Sub;

