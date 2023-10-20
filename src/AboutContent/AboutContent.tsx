import React, { useEffect, useState } from 'react';

const AboutContent: React.FC = () => {
    const [villageText, setVillageText] = useState("");
    const [youtubeText, setYoutubeText] = useState("");

    useEffect(() => {
        // You can fetch the content using axios or any other method
        // For this example, I'll assign sample text
        setVillageText("Bachannapet, a tranquil village located in the heart of rural India, is a place where time seems to stand still amidst the beauty of tradition and nature. With its lush fields, vibrant culture, and close-knit community, Bachannapet offers a peaceful escape from the hustle and bustle of urban life. Explore the rich agricultural heritage, visit the quaint temples that grace the landscape, and immerse yourself in the traditions and festivities that have been passed down through generations. Bachannapet is a testament to the simple yet extraordinary life of rural India, where every day is a celebration of community, culture, and the beauty of nature.");
        setYoutubeText("చెనేత చీరలు అనే వెబ్‌సైటు భారత సంస్కృతిని సంవిధానం చేసే హెల్తీ విద్యలని ప్రాధాన్యం ఇచ్చింది. మా చెనేత చీరలు వాటికి వస్త్రాలు నిర్మించడం కంటే భారతీయ రచయితలను మరియు అభినయకర్తలను సృష్టించే మౌల్యము కంటే పెద్దది. మా వెబ్‌సైట్ ద్వారా, ఈ అమూల్య వస్త్రాలు మరియు అమూల్య సాంగ్రహాలను పరిచయం చేయడం ద్వారా, చెనేత చీరలోని మౌల్యాలను చూస్తుంది, సంక్షిప్తంగా మరియు ఆకర్షణీయంగా చేయడంతో, మనము ప్రాచీన కాలంలో ఉన్న ఆత్మ గౌరవాలు సృష్టించడానికి దృఢ ప్రతిష్ఠించడంతో సహకరిస్తుంది. మన వాక్యం సానుగ్రహించని సంవిదానాలను కానివారికి సలహాను అందింది.");

        // You can also make an axios request to fetch the content
        // axios.get('your-api-endpoint')
        //   .then(response => {
        //     setVillageText(response.data.villageText);
        //     setYoutubeText(response.data.youtubeText);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
    }, []);
    const textStyleHeader = {
        color: '#007BFF', // Text color
        fontWeight: 'bold', // Font weight (bold)
        fontSize: '20px', // Font size
        fontFamily: 'Arial, sans-serif', // Font family
    };
    const textStyle = {
        color: '#46967B ', // Text color
        fontSize: '15px', // Font size
        fontFamily: 'Arial, sans-serif', // Font family
    };


    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div className="about-village">
                <h1 style={textStyleHeader}>About Bachannapet Village</h1>
                <p style={textStyle}>{villageText}</p>
            </div>
            <div className="about-youtube">
                <h1 style={textStyleHeader}>About HamaraVillages YouTube Channel</h1>
                <p style={textStyle}>{youtubeText}</p>
            </div>
        </div>
    );
};

export default AboutContent;

