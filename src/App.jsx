import "./App.css";
import logo from "./assets/Base_Network_Logo.svg";

function App() {
  return (
    <>
     <div className="scroll min-h-screen">
       {/* Background Section */}
       <div className="bg flex flex-col justify-between items-center min-h-screen w-full">
        {/* Navigation Bar */}
        <nav className="bg-black/25 fixed top-0 left-0 w-full flex justify-between items-center backdrop-blur-lg shadow-lg p-2 lg:rounded-full lg:max-w-[70%] lg:ml-56 lg:mt-5">
          {/* Logo */}
          <img src={logo} className="h-10" alt="Base Network Logo" />
          {/* Navigation Links */}
          <div className="flex space-x-3 text-light text-sm lg:text-base font-semibold">
            <a className="hover:text-main transition" href="#founder">
              Founder
            </a>
            <a className="hover:text-main transition" href="#builders">
              Builders
            </a>
          </div>
          {/* Call-to-Action Button */}
          <button className="bg-gradient-to-r from-main to-main/50 py-2 px-5 text-sm lg:text-lg font-semibold text-light rounded-full">
            See More
          </button>
        </nav>

        {/* Hero Section */}
        <section className="text-light text-center flex flex-col items-center justify-center flex-grow px-6 lg:px-32">
          <h2 className="text-2xl w-[22rem] lg:w-[33rem] lg:text-4xl font-semibold">
            Meet the Innovators Powering the Base Ecosystem
          </h2>
          <p className="text-sm lg:text-md leading-6 px-6 max-w-screen-md mt-4">
            Discover the visionary builders behind Base, the Layer 2 blockchain
            designed for scalability and accessibility. From decentralized finance
            pioneers to creative NFT developers, explore the projects and minds
            shaping the future of Web3. Connect, collaborate, and innovate with the
            people bringing the Base vision to life.
          </p>
          <button className="bg-gradient-to-r w-72 backdrop-blur-sm lg:w-96 from-main to-main/50 py-2 px-8 text-sm lg:text-lg font-semibold text-light rounded-full mt-6">
            See More
          </button>
        </section>
      </div>

      {/* Secondary Plain Background Section */}
      <div className="bg-plain flex items-center justify-center h-screen w-full">
        <p className="text-light text-lg text-center">
          More content goes here. Add details about the builders or other sections.
        </p>
      </div>
     </div>
    </>
  );
}

export default App;
