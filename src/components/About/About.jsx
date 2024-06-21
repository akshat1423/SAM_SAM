import React, { useEffect, useState } from 'react';
import './about.css';
import Aos from 'aos'; // Import aos library for animations
import 'aos/dist/aos.css'; // Aos styles

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000 }); // Initialize aos with duration 1000ms
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`about ${isVisible ? 'fade-in' : ''}`} id="about" data-aos="fade-up">
            <div className="aboutHeading">
                <p>ABOUT SAM</p>
            </div>
            <div className="aboutContent">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam dolorem quaerat cupiditate,
                    assumenda distinctio architecto iure, placeat, impedit sed expedita fugit a accusantium labore
                    minus repellat optio perferendis asperiores amet? Temporibus assumenda, ipsum molestias ratione
                    possimus aut, perferendis ullam ipsam delectus sapiente dolore beatae earum rerum voluptas?
                    Explicabo ad, minus, laborum quas sunt odio, quod rerum aut ex iste dicta? Neque corrupti modi
                    perspiciatis nostrum dolorem aut laborum in dolorum omnis maxime laboriosam, doloremque, quis
                    voluptatem fugiat. Consequatur facilis et, rem modi neque adipisci eaque, rerum saepe maiores non
                    quis. Exercitationem deserunt voluptatem, eius cumque similique mollitia ut placeat sed libero
                    eligendi id facere natus maiores voluptatum vel odit quod earum recusandae nobis non? Qui quod
                    commodi atque minima dicta? Nesciunt aliquid unde ipsam omnis quo, dolorum vel odio inventore sunt
                    asperiores, maiores quasi facere nemo ut culpa placeat autem officiis eligendi, dolor dolore
                    facilis corrupti voluptas similique! Ex, accusamus. Optio, molestiae ipsa quasi esse, quidem ad
                    eveniet dolorem odit odio officia deserunt porro nostrum maiores assumenda. Quidem officiis
                    eligendi obcaecati autem itaque voluptatum dignissimos, et, nam, incidunt ex dolorem. Itaque
                    deserunt est quibusdam mollitia dicta saepe, sit dolorum velit magni doloremque perspiciatis alias
                    incidunt architecto autem illo vel dolores! Fugit saepe sit quis quos placeat error aliquam hic
                    unde! Quidem labore ipsa qui fugit veniam adipisci vel praesentium ullam, fugiat error, odit
                    dolorem repudiandae tempora consequuntur ad doloribus omnis neque dolor dolorum perspiciatis eum.
                </p>
            </div>
        </div>
    );
}
