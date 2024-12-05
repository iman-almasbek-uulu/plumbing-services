import Features from '../../components/about/features/Features';
import Hero from '../../components/about/hero/Hero';
import scss from './AboutPage.module.scss';

const AboutPage = () => {
    return (
        <div id={scss.About}>
            <Hero />
            <Features/>
        </div>
    );
};

export default AboutPage;