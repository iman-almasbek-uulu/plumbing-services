import Core_values from '../../components/about/core-values/Core_values';
import Features from '../../components/about/features/Features';
import Hero from '../../components/about/hero/Hero';
import Masters from '../../components/about/masters/Masters';
import scss from './AboutPage.module.scss';

const AboutPage = () => {
    return (
        <div id={scss.About}>
            <Hero />
            {/* <Features/> */}
            <Core_values />
            <Masters />
        </div>
    );
};

export default AboutPage;