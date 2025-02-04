import Section from '@/components/global/Section';

const FooterSection = () => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
        <Section>
            <p>Made by FiAmanillah @ All rights reserved | {currentYear}</p>
        </Section>
    );
};

export default FooterSection;
