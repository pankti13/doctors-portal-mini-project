import { useState } from "react";
import doctor_image_url from "../assets/images/doctor-img.jpg";

const SymptomSelection = () => {
  const options = [
    { name: 'Berlin', description: 'Berlin is the capital of Germany.' },
    { name: 'Madrid', description: 'Madrid is the capital of Spain.' },
    { name: 'Paris', description: 'Paris is the capital of France.' }
  ];
  const question = 'Choose the symptom you are affected with:';
  const [selectedOption, setSelectedOption] = useState('');
  const [severity, setSeverity] = useState(1);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSliderChange = (event) => {
    setSeverity(Number(event.target.value));
  };

  const handleSubmit = () => {
    console.log("Selected option:", selectedOption);
    console.log("Severity level:", severity);
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-full md:w-3/6 flex flex-col justify-center" style={{ overflow: 'hidden' }}>
          <div
            className="bg-white rounded-[20px] px-10 py-10 mt-5 max-h-screen"
            style={{
              overflowY: 'auto',
              /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
              scrollbarWidth: 'none', /* Hide scrollbar for Firefox */
              '-ms-overflow-style': 'none', /* Hide scrollbar for Internet Explorer and Edge */
            }}
          >
            <p className="mt-0 break-words font-montserrat text-large leading-normal text-slate-700 p-4">
              {question}
            </p>
            <div className="answer-section">
              {options.map((option, index) => (
                <div key={index} className="mb-4">
                  <label
                    htmlFor={`option-${index}`}
                    className={`flex flex-col p-4 rounded-lg cursor-pointer`}
                    style={{
                      borderColor: selectedOption === option.name ? '#4157FF' : '#D1D5DB',
                      borderWidth: '1px',
                    }}
                    onClick={() => handleOptionChange(option.name)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center mr-2`}
                        style={{
                          borderColor: selectedOption === option.name ? '#4157FF' : '#D1D5DB',
                          backgroundColor: selectedOption === option.name ? '#4157FF' : 'transparent',
                          borderWidth: '1px',
                        }}
                        onClick={() => handleOptionChange(option.name)}
                      >
                        {selectedOption === option.name && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <div className='flex flex-col text-slate-700'>
                        <span
                          style={{ color: selectedOption === option.name ? '#4157FF' : '#6B7280' }}
                          className="font-bold"
                        >
                          {option.name}
                        </span>
                        <p>{option.description}</p>
                      </div>
                    </div>
                    {selectedOption === option.name && (
                      <div className="mt-4">
                        <p className="text-slate-700 mb-2">Select Severity Level:</p>
                        <input 
                          type="range" 
                          min="1" 
                          max="3" 
                          value={severity} 
                          onChange={handleSliderChange}
                          className="w-full"
                        />
                        <div className="flex justify-between text-slate-700 mt-2">
                          <span>Low</span>
                          <span>Medium</span>
                          <span>High</span>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <button 
                onClick={handleSubmit} 
                className="bg-blue-500 text-white font-bold py-2 px-8 rounded-full focus:outline-none w-64"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-3/6 justify-center items-center">
          <img src={doctor_image_url} alt="Doctor" className="max-h-[400px] w-auto h-auto rounded-lg mx-auto" />
        </div>
      </div>
    </>
  );    
};

export default SymptomSelection;
