import { useState, type FC } from "react";
import { Button } from "@components/Button";

export const Navigation: FC = () => {
    // to update values for all components, keep the state here
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="md:flex  md:grow">
            {/* Desktop sign in links */}
            <div className="flex items-center justify-end flex-wrap grow">
                <Button link="/signin" variant="secondary">
                    Sign in
                </Button>

                <Button link="/signup" variant="primary">
                    Singup
                </Button>
            </div>
        </nav>
    );
};
