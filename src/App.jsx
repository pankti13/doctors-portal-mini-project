import {Navbar, MainImage, About, Cards, Footer} from '/components';

const App = () => (
  <main className="relative">
    <div className="xl:sm:pl-16 pl-8 wide:sm:pr-16 pr-8 sm:pb-24 pb-12">
      <Navbar />
    </div>
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
