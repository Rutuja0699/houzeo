import React from 'react';
import Slider from 'react-slick';
import './styles.css'

const DateSlider = () => {
    const mode = {
        infinte: true,
        slidesToShow: 3,
        slidestoScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        arrows: false,
    };

    const generateDates = () => {
        const dates = [];
        const startDate = new Date();
        for (let i = 0; i < 2; i++) {
            const date = new Date();
            date.setDate(startDate.getDate() + i);
            dates.push(date);

        }
        return dates;
    };
    return (
        <div className='date-slider'>
            <Slider {...mode}>
                {...generateDates().map((date, index) => (
                    <div key={index} className='date-item'>
                        {date.toLocaleDateString()}
                    </div>
                ))}
            </Slider>
        </div>

    )
};    )
};


export default DateSlider;