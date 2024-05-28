import { MovingBorderButton } from "./aceternity/MovingBorderButton";
import HeroImage from '../assets/hero.png';

const IncreaseSale = ()=>{
    return(
        <section className="flex flex-col md:flex-row gap-8 md:gap-48 pt-16 md:pb-20   md:pt-24 md:pb-16">
            <div className="flex-1  mt-8 md:mt-0 flex">
                <img src={HeroImage} alt="Hero Illustration" className="w-full" />
            </div>
            <div className="flex-1">
                <h1 className="text-2xl md:text-4xl font-bold">
                    If you’re ready to increase sales and get your ads viral, then this is for you!
                </h1>
                <h2 className='text-lg py-6'>We’ll help your products sell with our proven direct response video creatives</h2>
                <MovingBorderButton/>
                
            </div>

    </section>
    );
}

export default IncreaseSale;