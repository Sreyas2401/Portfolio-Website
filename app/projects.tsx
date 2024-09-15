import Grid from "./grid";

const points: Record<string, string[]> = {
    'VillageLink': [
        'VillageLink is a social networking platform that forces college students to meet in person by placing impromptu meeting pins on campus', 
        'Designed and built full-stack web application using JavaScript, Express, pouchDB, integrated with maps API, enabling location-based meetups for college students.',
        'Implemented core features including location-based meetup postings, automated friend connection requests, asynchronous social networking algorithms, along with responsive Tailwind UI and real-time map rendering.'
    ],

    'Boombot': [
        'Built a robotic vaccum cleaner with a high speed vacuum, 3D printed parts, and bluetooth functionalities.', 
        'Used an ESP32 microcontroller to program motor drivers using ros_control library.', 
        'Implemented algorithms for object detection and edge detection when placed on high surfaces to prevent from falling.'
    ]

};

const Projects = () => {
    return(
        <div>
            <h2 className="Basic">Projects</h2>
            <a href="https://villagelink.fly.dev" target="_blank" rel="noopener noreferrer">
                <Grid 
                    company_name="VillageLink"
                    dates="Feb - May 2024"
                    points={points['VillageLink']}
                ></Grid>
            </a>
            <a href="https://sites.google.com/umass.edu/boombot/" target="_blank" rel="nooopener noreferrer">
                <Grid
                    company_name="Boombot"
                    dates="Nov - Dec 2023"
                    points={points['Boombot']}
                ></Grid>
            </a>

        </div>
    );
};

export default Projects;
