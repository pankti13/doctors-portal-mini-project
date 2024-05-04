import {Navbar, MainImage, About, Cards, Footer} from "./components";

const App = () => (
  <main className="relative">
    <Navbar />
    <div className="sm:px-5 px-5 sm:pt-24 pb-3 w-full">
      <MainImage />
    </div>
    <div className="sm:px-16 px-8 sm:py-24 py-12 bg-customblue">
      <About />
    </div>
    <div className="sm:px-16 px-8 sm:py-24 py-12">
      <Cards />
    </div>
    <div className="sm:px-16 px-8 sm:py-24 py-12 bg-customblue">
      <Footer />
    </div>
  </main>
);

export default App;
