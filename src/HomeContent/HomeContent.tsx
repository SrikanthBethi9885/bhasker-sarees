import React, { useState, useEffect } from 'react';
import img from './img.jpg' // Import local image
import img1 from './img1.jpg' // Import local image
import img3 from './img3.jpg' // Import local image
import img4 from './img4.jpg' // Import local image
import { Grid, Typography } from '@mui/material';


const HomeContent = () => {
    const imageUrls = [img, img1, img3, img4];  // Array of locally imported images

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000); // Change image every 3 seconds (adjust the interval as needed)

        return () => clearInterval(intervalId);
    }, [currentImageIndex, imageUrls.length]);

    return (
        <div>
            <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: '75%', height: '500px' }} />
            <p>Messages are communications provided on the screen to the screen viewer.
                Screen messages fall into two broad categories: system and instructional.
                System messages are generated by the <b>system to keep the user informed of the system’s</b> state and activities.
                Instructional messages, sometimes referred to as prompting messages, are messages that tell the user how to work with, or complete, the screen displayed.</p>
        </div>
    );
};

export default HomeContent;