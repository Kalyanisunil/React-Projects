function App() {
  let name = "Kalyani";
  let desc = "Java Full Stack Developer";
  const cardContainer = {
    width: "320px",
    background: "#ffffff",
    border: "4px solid #000000",
    boxShadow: "8px 8px 0 #000",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const uppercontainer = {
    height: '140px',
    background: '#ffe600',
    borderBottom: '4px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
  const lowerContainer = {
    padding: '70px 25px 30px',
    textAlign: 'center'
  };
  const img =
  {
    width: '100px',
  height: '100px',
  background: '#ffffff',
  border: '4px solid #000',
  transform: 'translateY(50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  };
  const image = {
    width: '90px',
  height: '90px',
  objectFit: 'cover',
  border: '2px solid #000'
  }
  return (
    <div>
      <div style={ cardContainer } className="justify-content-center">
        <div style={uppercontainer}>
          <div style={img}>
            <img style={image}
             src="https://api.dicebear.com/7.x/thumbs/svg?seed=Alaina"  
            />

           
          </div>
          
        </div>

        <div style={lowerContainer}>
          <div>
            <h3>{ name}</h3>
            <h4>{ desc}</h4>
          </div>
          <div>
            <p>
              Hello! I'm Kalyani  a java full stack Developer from Trivandrum. I'm now trying out the  react library. I loved it!
            </p>
            <div>
             <img src="logo192.png"/>
          </div>
          </div>
         
        </div>
      </div>
     
    </div>
  );
}

export default App;
