

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();

    return (
        <footer className='bg-amber-200 flex flex-col items-center justify-center gap-1 p-4 sm:flex-row'>
            <p>&#169; {currentYear} - HAPPY DOG -</p>
            <p>Tous droits réservés.</p>
            <a
                className="hover:text-sky-600 transition-colors"
                href="https://benji-belfort-portfolio.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Dev by Benji Belfort.
            </a>
        </footer>
    );
};

export default Footer;