import { Logo } from "@components/Logo";
import { Navigation } from "@components/Navigation";
import { type FC } from "react";

export const Header: FC = () => {
    return (
        <header className="fixed w-full top-0 left-0 z-30 bg-opacity-50 bg-secondary backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 sm:px-6" data-animate>
                <div className="flex items-center justify-between h-20">
                    <Logo />

                    <Navigation />
                </div>
            </div>
        </header>
    );
};
