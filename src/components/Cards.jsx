import {cardsData} from '../constants'
import IndividualCard from './IndividualCard'
import Button from './Button'
import arrowRight from '../assets/icons/arrowRight.svg'

const Cards = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <p className="font-palanquin text-center capitalize text-4xl lg:max-w-full font-semibold">
        Elevate our project with your expertise
      </p>
      <section className="max-container flex justify-center flex-wrap gap-9 mb-8">
        {cardsData.map((entry) => (
          <IndividualCard key={entry.label} {...entry} />
        ))}
      </section>
      <Button label="Get Started" iconUrl={arrowRight}/>
    </div>
  );
}

export default Cards