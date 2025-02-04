import TextParalaxEffect from '@/components/global/TextParalaxEffect';
import HeroSection from './sections/HeroSection';
import LogoSlideSection from './sections/LogoSlideSection';
import ProjectSection from './sections/ProjectSection';
import Scroll from '@/components/global/Scroll';
import Section from '@/components/global/Section';
import Paragraph from '@/components/global/ScrollFadeParagraph';
import AboutSection from './sections/AboutSection';
import SkillSection from './sections/SkillSection';
import SectionBackgrpound1 from '@/components/global/SectionBackgrpound1';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function Home() {
    return (
        <>
            <div id="home">
                <HeroSection />
            </div>
            <div className="relative">
                <SectionBackgrpound1 />

                <LogoSlideSection />
                <div id="about">
                    <AboutSection />
                </div>
                <div id="skills">
                    <SkillSection />
                </div>
                <TextParalaxEffect />
                <div id="projects">
                    <ProjectSection />
                </div>
                <div id="contact">
                    <ContactSection />
                </div>
            </div>
            <FooterSection />
        </>
    );
}
