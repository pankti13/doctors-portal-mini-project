import {Navbar, MainImage, About, Cards, Footer} from "./components";

const App = () => (
  <main className="relative">
    <Navbar />
    <div className="sm:px-16 px-8 sm:py-24 py-12">
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
