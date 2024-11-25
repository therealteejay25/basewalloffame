import "./App.css";
import logo from "./assets/Base_Network_Logo.svg";

function App() {
  return (
    <>
      <div className="bg h-screen w-screen">
        <div className="bg-black/25 h-screen">
          <div className="lg:w-[900px] w-screen fixed backdrop-blur-lg shadow-lg lg:rounded-full lg:mx-60 lg:my-7 shadow-black/5 bg-gradient-to-br flex justify-between p-2 from-grey/15 to-grey/5">
            <div>
              <img src={logo} className="h-10 m-1" alt="" />
            </div>
            <div className="text-light py-[11px] font-semibold text-lg">
              <a className="p-[5px] lg:p-5 hover:text-main transition" href="#">
                Founder
              </a>
              <a className="p-[5px] lg:p-5 hover:text-main transition" href="#">
                Builders
              </a>
            </div>
            <div>
              <button className="bg-gradient-to-r from-main to-main/50 py-2 px-5 text-lg font-semibold text-light rounded-full">
                See More
              </button>
            </div>
          </div>
          <div className="py-32 lg:py-16">
            <div className="text-light text-center p-3 pt-32">
              <h2 className="text-[1.75rem] lg:text-4xl py-2 font-semibold lg:px-[26rem]">Meet the Innovators Powering the Base Ecosystem</h2>
              <p className="text-sm leading-5 lg:px-72 py-3">
                Discover the visionary builders behind Base, the Layer 2
                blockchain designed for scalability and accessibility. From
                decentralized finance pioneers to creative NFT developers,
                explore the projects and minds shaping the future of Web3.
                Connect, collaborate, and innovate with the people bringing the
                Base vision to life.
              </p>
            </div>
            <div>
              <button className="bg-gradient-to-r lg:mx-[35.2vw] md:w-[25rem] w-72 my-2 mx-[3.7rem] from-main to-main/50 py-2 px-8 text-lg font-semibold text-light rounded-full">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
