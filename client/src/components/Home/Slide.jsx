

import  Carousel from 'react-multi-carousel';



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slide =({products2})=>{
        return(
            <Carousel responsive={responsive}>
            {
                products2.map(products => (
                    <img src={products.url} alt='product' />
                ))
            }

            </Carousel>
        )
}

export default Slide
