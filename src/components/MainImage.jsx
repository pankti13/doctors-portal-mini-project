import collegeMain from '../assets/images/collegeMain.png';

const MainImage = () => {
  return (
    <div className="w-full h-screen">
      <img
        src={collegeMain}
        alt="Logo"
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default MainImage