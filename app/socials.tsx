
import Image from 'next/image';
import white_github from '../public/github-mark-white.svg';
import linkeden from '../public/linkedin.svg';


const Socials = () =>{
    return(
        <div>
            <a href="https://www.linkedin.com/in/sreyasrajasekharuni" target="_blank" rel="noopener noreferrer">
                <div className='social-icon'>
                    <Image
                        priority
                        src={linkeden}
                        height={24}
                        width={24}
                        alt="linkedin"
                    />
                </div>
            </a>
            <a href='https://www.github.com/Sreyas2401' target='_blank' rel='noopener noreferrer'>
                <div className="social-icon">
                    <Image
                        priority
                        src={white_github}
                        height={24}
                        width={24}
                        alt="github"
                    />
                    </div>
            </a>
            <a href='mailto:srajasekharu@umass.edu'>
                <button className='social-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M3 7v12a2 2 0 002 2h14a2 2 0 002-2V7M3 5l9 7 9-7" />
                    </svg>
                </button>
            </a>
        </div>
    );
};

export default Socials;