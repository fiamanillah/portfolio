import ContactForm from '@/components/Contact/ContactForm';
import Section from '@/components/global/Section';
import HugeiconsMailOpen from '@/assets/icons/HugeiconsMailOpen';
import SiPhoneDuotone from '@/assets/icons/SiPhoneDuotone';
import AkarIconsLocation from '@/assets/icons/AkarIconsLocation';
import MingcuteFacebookLine from '@/assets/icons/MingcuteFacebookLine';
import JamLinkedinCircle from '@/assets/icons/JamLinkedinCircle';
import RaphaelGithubalt from '@/assets/icons/RaphaelGithubalt';
import contact from '@/assets/elements/contact.gif';
import Image from 'next/image';
const ContactSection = () => {
    return (
        <Section className={'relative z-20 min-h-screen flex items-center '}>
            <div className="text-center py-10">
                <h1>Contact</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat perferendis
                    nesciunt eaque labore aliquid. Architecto ex dolor rerum repellendus maiores.
                </p>
            </div>
            <div className="flex gap-4 tablet-lg:flex-col">
                <div className="basis-1/3 bg-card p-4 border border-border rounded-xl">
                    <h1></h1>
                    <Image src={contact} alt="Contact" className="w-[50%] mx-auto" />
                    <div className="flex flex-col gap-3">
                        <span className="flex items-center text-primary text-xl gap-2 font-bold">
                            <HugeiconsMailOpen />
                            <a
                                href="mailto:fi@amanillah.com"
                                target="blank"
                                className="no-underline font-bold hover:text-primary/90 translate-y-1"
                            >
                                fi@amanillah.com
                            </a>
                        </span>
                        <span className="flex items-center text-primary text-xl gap-2 font-bold">
                            <SiPhoneDuotone />
                            <a
                                href="https://wa.link/tghi4g"
                                target="blank"
                                className="no-underline font-bold hover:text-primary/90 translate-y-1"
                            >
                                +8801608505647
                            </a>
                        </span>
                        <span className="flex items-center text-primary text-xl gap-2 font-bold">
                            <AkarIconsLocation />
                            <a
                                href=""
                                target="blank"
                                className="no-underline font-bold hover:text-primary/90 translate-y-1"
                            >
                                Mirpur 1, Dhaka, Bangladesh
                            </a>
                        </span>
                    </div>
                    <div className="flex gap-3 text-4xl mt-4">
                        <a href="https://www.facebook.com/fiamanillah.b2/" target="blank">
                            <MingcuteFacebookLine />
                        </a>
                        <a href="https://www.linkedin.com/in/fi-amanillah/" target="blank">
                            <JamLinkedinCircle />
                        </a>
                        <a href="https://github.com/fiamanillah" target="blank">
                            <RaphaelGithubalt />
                        </a>
                    </div>
                </div>
                <div className="basis-2/3">
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
};

export default ContactSection;
