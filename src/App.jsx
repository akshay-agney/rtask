import './App.css'

function App() {
  return (
    <div id='root' className="bg-black h-full w-full">
        <div className="nav">
            <div className="left"><h6>PORTFOLIO.</h6></div>
            <div className="right">
                <a  href="">Home</a>
                <a href="">About</a>
                <a href="">Works</a>
                <a href="">Block</a>
                <a href="">Contact</a>
            </div>
        </div>
        <div className="center">
            <div className="center-left">
                <div className="center-left-container">
                    <h1>MY NAME IS</h1>
                    <h1>Akshay Agney</h1>
                    <button> I am A UI/UX DEVELOPER</button>
                </div>
            </div>
            <div className="center-right"></div>
        </div>
      
    </div>
  );
}

export default App;