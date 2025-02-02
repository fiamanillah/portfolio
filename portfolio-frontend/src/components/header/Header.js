import Link from 'next/link';
import Section from '../global/Section';
import { ModeToggle } from '../theme/theme-toggle';
import { Button } from '../ui/button';
const Header = () => {
    return (
        <Section
            className={
                'bg-background/60 backdrop-blur-lg py-4 border-b border-border  sticky top-0 z-50'
            }
        >
            <div className="flex justify-between items-center ">
                <h1 className="flex justify-center items-center ">
                    <Link
                        href="/"
                        className="text-primary text-3xl font-bold hover:text-primary no-underline text-nowrap select-none"
                    >
                        Fi Amanillah
                    </Link>
                </h1>
                <div className="flex items-center gap-2">
                    <Button className="font-bold" size="">
                        Resume
                    </Button>
                    <ModeToggle />
                </div>
            </div>
        </Section>
    );
};

export default Header;
