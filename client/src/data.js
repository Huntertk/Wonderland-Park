import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/cC1PfytV/Whats-App-Image-2024-01-09-at-13-17-41.jpg",
            "https://i.postimg.cc/L68M1fzn/Whats-App-Image-2024-01-09-at-13-14-53.jpg",
            "https://i.postimg.cc/mD3GQyXF/Whats-App-Image-2024-01-09-at-13-14-12.jpg",
            "https://i.postimg.cc/7PVkhXJF/Whats-App-Image-2024-01-09-at-13-13-33.jpg",
            "https://i.postimg.cc/zG9m6c4g/Whats-App-Image-2024-01-09-at-13-16-07.jpg",
        ],
        title:"99 Wonderland Park",
        desc:"As the inaugural recreational park in Kuala Lumpur showcasing rare animalsandbirds, it provides a unique chance to witness nature's wonders up close. Revel intheharmonious fusion of captivating wildlife and breathtaking landscapes as youexplorethe enchanting surroundings of this park.",
        type:"bookTypeOne",
        preference:[
            {
                title:"Malaysian",
                price:{
                    weekend:{

                        adult:65,
                        child:40,
                        senior:40,
                    },
                    weekday:{
                        adult:45,
                        child:25,
                        senior:25,
                    }
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    weekend:{

                        adult:90,
                        child:60,
                        senior:60,
                    },
                    weekday:{
                        adult:70,
                        child:40,
                        senior:40,
                    }
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },
    
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/xTpVyCRg/Whats-App-Image-2024-01-09-at-13-15-35.jpg",
        title:"Magical Bridge",
        desc:"Adorned with love locks, this bridge bears witness to the love shared between you and your partner. As night falls, it transforms with enchanting lights, creating a perfect ambiance for love birds to share sweet whispers."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/cJnWJSfh/water-fountain-2.jpg",
        title:"Colourful Water Fountains",
        desc:"Enhancing the park's ambiance, two vibrant water fountains grace the center of the lake, creating a pictures que scene as you stroll through."
    },   
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/kGjzc1xD/Whats-App-Image-2024-01-09-at-13-16-53.jpg",
        title:"Golden Waterfall",
        desc:"The belief in the auspiciousness of gold color is widespread, symbolizing fortune and good luck. Take a leisurely stroll through the 115-meter long golden waterfall, and the promise is that good luck and wealth will accompany you always."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/FK3t4xQn/zodiac-1.jpg",
        title:"12 Zodiac Walkway",
        desc:"Featuring a Zodiac Walkway adorned with 12 distinct animal sculptures, each representing a year in the Chinese zodiac cycle, where each year is associated with specific attributes and symbolism."
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/7PVkhXJF/Whats-App-Image-2024-01-09-at-13-13-33.jpg",
        title:"99 Jetty & 99 Cruise",
        desc:"Embark on a cruise accommodating about 26 passengers, immersing yourself in the natural habitat and enjoying a tranquil, refreshing breeze."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Experience the enchantment of wildlife up close at 99 Wonderland Park in Kuala Lumpur.",
        image: "https://i.postimg.cc/wM08rTdq/Whats-App-Image-2024-01-09-at-13-13-57.jpg"
    },
    {
        id: uuidv4(),
        desc:"Experience the captivating beauty of the Musical Dancing Fountain as it mesmerizes you with its vibrant LED lights.",
        image: "https://i.postimg.cc/cC1PfytV/Whats-App-Image-2024-01-09-at-13-17-41.jpg"
    },
    {
        id: uuidv4(),
        desc:"Embark on a delightful journey exploring the park's entertaining attractions and discover captivating photo spots for a memorable experience.",
        image: "https://i.postimg.cc/L68M1fzn/Whats-App-Image-2024-01-09-at-13-14-53.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Opens everyday", 
            "Mon - Thurs, 5pm - 11pm.",
            "Fri - Sun, 5pm - 12am"
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age is 12 to 59 years old.",
            "Child age is  3 to 11 years old.",
            "Below 90cm Free.",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Inclusion",
        ans:[
            "99 Dinosaur Park",
            "Magical Bridge",
            "Boardwalk, 99 Wild Island",
            "99 Buaya Tembaga",
            "99 Malayan Tapir",
            "99 Malayan SunBear",
            "99 Monster Fish",
            "Peacock House",
            "Duck Lagoon, Deer Yard",
            "Ostrich Farm",
            "Bird Square",
            "2 Colourful fountain",
            "2 Colourful fountain",
            "Golden waterfall",
            "Golden waterfall",
            "12 Zodiac Walkway",
            "Snake House",
            "Snake House",
            "Sky fountain with Koi Fish",
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:["You may use the tickets on the requested dates upon booking."]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Can I bring food inside 99 Wonderland Park ?",
        ans:"No. Food and drinks is prohibited inside."
    },
    {
        id: uuidv4(),
        ques:"Do I have to book a time slot to enter 99 Wonderland Park ?",
        ans:"No, you may enter anytime within the operation hours."
    },
    {
        id: uuidv4(),
        ques:"Does my 2 years old baby need to buy ticket to enter 99 Wonderland Park ?",
        ans:"No, 2 years old and below can enter for FREE."
    },
    {
        id: uuidv4(),
        ques:"Can I bring stroller / wheelchair inside 99 Wonderland Park ?",
        ans:"Yes, you may bring"
    },
    {
        id: uuidv4(),
        ques:"How long can I stay inside 99 Wonderland Park ?",
        ans:"You may stay as long as you want, no time limit."
    },
    {
        id: uuidv4(),
        ques:"Is all games included in my ticket ?",
        ans:"Yes all included except for Paid Games; Buggy Jump, G-Force X and GoKart"
    },
    {
        id: uuidv4(),
        ques:"Can I bring camera inside the 99 Wonderland Park ?",
        ans:"Yes you may bring but please love the animals and never use your Flash as it might disturb them."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]