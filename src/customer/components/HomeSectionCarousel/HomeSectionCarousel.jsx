import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@headlessui/react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        486: {items: 2 },
        700: { items: 3 },
        893: { items: 4 },
        1024: { items: 5 },
    };

    const items = [1, 1, 1, 1, 1, 1].map((item, index) => {
        return <HomeSectionCard />
    })

    return (
        <div className='relative px-4 lg:px-8'>
            <div className='relative flex justify-center p-5'>
                <AliceCarousel
                    items={items}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                />
                <Button variant="contained"  color="white" className='z-50 bg-white shadow-md py-5 absolute top-[40%] left-0 rounded-sm'><KeyboardArrowLeftIcon/></Button>
                <Button variant="contained"  color="white" className='z-50 bg-white shadow-md py-5 absolute top-[40%] right-0 rounded-sm'><KeyboardArrowRightIcon/></Button>
            </div>
        </div>
    )
}

export default HomeSectionCarousel