import React, { useState } from 'react'

const ServiceContent = () => {
    const names = ["బేతి శ్రీకాంత్", "మంగళపల్లి రవి చరణ్", "మంగళపల్లి భాస్కర్", "మంగళపల్లి నర్సింహులు", "మంగళపల్లి అభిలాష్"];
    const [showList, setShowList] = useState(false);
    return (
        <div>
            <p style={{ color: '#b107b0', fontWeight: 'bold', justifyContent: 'center' }}>ప్రస్తుతం మ కార్మికుల వివరాలు.</p>
            <button
                onClick={() => setShowList(!showList)}
                style={{
                    backgroundColor: '#008080',
                    color: 'white', // Text color
                    padding: '8px 16px', // Padding for the button
                    border: 'none', // Remove the button border
                    cursor: 'pointer', // Change cursor to pointer on hover
                    borderRadius: '5px'
                }}
            >
                {showList ? 'Hide Names' : 'Show Names'}
            </button>

            {showList && (
                <ul style={{ color: '#008080', fontWeight: 'bold', justifyContent: 'center' }}>
                    {names.map((name, index) => (
                        <p key={index}>{name}</p>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ServiceContent
