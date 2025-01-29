// import { ModeToggle } from '@/components/theme-toggle';

import { ModeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
    return (
        <>
            <ModeToggle />
            <div className="bg-card text-muted-foreground p-4 border border-border rounded-lg m-4 ">
                <div>
                    <h1 className="text-4xl font-extrabold">Hello, world!</h1>
                    <Button variant="secondary">Click me</Button>
                    <Input type="email" placeholder="Email" />
                </div>
            </div>
        </>
    );
}
