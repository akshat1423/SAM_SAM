import React from 'react';
import './Testimonials.css';
import amit from './amit.jpg'
import aadit from './aadit.jpg'
import krish from './krish.png'
import darsh from './darsh.jpg'
import ani from './ani.jpg'

import testimonial from '../../assets/testimonial.png'

const TestimonialsData = [
    {
        name: 'AADIT SULE',
        image: aadit,
        message:' Student Alumni Meet (SAM) organised in Pune by the Student Alumni Relations Cell (SARC), was truly  a memorable experience for me. I got a chance to meet the alumni of IITB even before I stepped on our campus. The alums shared stories from their time at IITB and gave us tips on making friends and balancing studies with fun activities.The alumni talked about how important it is to make friends and build memories during our time at IITB. They also encouraged us to explore our interests beyond academics. The event ended with alumni sharing their career journeys, offering us advice, and reminding us of the strong IITB network. It was an inspiring and motivating day, making me feel proud and excited to be part of the IITB community'
    },
    {
        name: 'AMIT BHARTIYA',
        image: amit,
        message: "The Student Alumni Meet was my first event connecting me to IIT Bombay and introducing me to SARC. It was an enriching experience interacting with numerous alumni from different batches and branches, who shared their diverse and extensive experiences. Engaging with alumni working in various career fields provided me with valuable insights. Additionally, learning about the upcoming campus life and culture was truly exciting. Watching alumni interact like old friends and share their college memories was incredibly inspiring."

    },
    {
        name: 'KRISH GUPTA',
        image: krish,
        message:"I had the pleasure of attending a student-alumni meetup in Jaipur a year ago, held at an alumnus's house. The event was a wonderful opportunity for upcoming freshers to meet and interact with the alumni of IIT Bombay.The atmosphere was warm and welcoming, with a cozy setting that made it easy for everyone to mingle and have meaningful conversations. The host was gracious and ensured that everyone felt at home.The meetup itself was incredibly beneficial. It allowed the freshers to gain valuable insights and advice from the alumni, who shared their experiences and offered guidance on how to navigate the academic and social aspects of life at IIT Bombay. The alumni were approachable and eager to help, making the freshers feel supported and motivated."
    },
    {
        name: 'DARSH PATEL',
        image: darsh,

        message:"I arrived at the 'Ideas to Impact Hub' in Pune for the IITB Student Alumni Meet (SAM). Surprisingly early, I met alumni from the 1980s. They welcomed me warmly, reminiscing about their IITB days. Over breakfast, we shared stories—alumni pride, hostel memories, and the changing times at IITB. They emphasized lifelong friendships, the evolving campus, and the importance of non-academic experiences. Discussions ranged from ragging to career advice, highlighting IITB's strong alumni network and global reputation. It was an inspiring start to my IITB journey! "
    },
    {
        name: 'ANIRUDDH SHARMA',
        image: ani,
        message: "I attended sam in 2023 mid August , it was a great experience meeting people even before coming to insti , and most importantly meeting the alums . To my surprise I did find some amazing people there I didn't expect them to attend . Definitely it was a good experience."

    }
];

const TestimonialsCard = ({ name, image, message}) => (
    <div className="testimonials-card">
        
        <div className="testimonials-content">
            <img src={image} alt={name} className="testimonials-image" />
            <h3>{name}</h3>
            <p style={{textAlign:'justify',padding:'2%'}}>{message}</p>
            </div>
        </div>
);

const Testimonials = () => (
    <div className="testimonials-container">
        <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
            <div className="testimonial-image">
                <img src={testimonial} alt="Testimonial Image" style={{height:'100px'}} />
            </div>
            <h2 className="testimonials-heading">TESTIMONIALS</h2>
        </div>
        <div className="testimonials">
            {TestimonialsData.map((sponsor, index) => (
                <TestimonialsCard key={index} {...sponsor} />
            ))}
        </div>
    </div>
);

export default Testimonials;

