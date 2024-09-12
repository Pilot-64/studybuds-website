import logo from "./assets/logo-text.svg";
import construction from "./assets/construction.png";

function App() {
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center bg-primary">
        <div className="flex flex-col md:flex-row items-center space-x-10">
          <img
            className="w-48 h-48"
            src={construction}
            alt="construction crane emoji"
          />
          <div className="flex flex-col items-center justify-center space-y-5">
            <img src={logo} alt="StudyBuds logo" loading="lazy" />
            <h1 className="text-black text-4xl font-primary">
              Under Maintenance
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
