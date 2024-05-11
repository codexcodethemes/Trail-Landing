import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";

export const Footer: FC = () => {
    return (
        <footer
            className="py-12 md:py-16 border-t border-tertiary border-opacity-50"
            data-animate
        >
            <Container>
                <S.FooterCols>
                    <div className="max-w-md">
                        <div className="mb-3">
                            <Logo />
                        </div>
                        <p className="text-primary opacity-50">
                            Footer text goes here lorem ipsum dolor sit amet
                            risus, consectetur adipiscing elit Footer text goes
                            here lorem ipsum dolor sit amet risus, consect
                        </p>
                    </div>
                    <div>
                        <h6 className="text-white font-medium mb-1">Policy</h6>
                        <ul>
                            <li className="mb-1">
                                <a
                                    href="/"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="/"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="/"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white font-medium mb-1">
                            Product Links
                        </h6>
                        <ul>
                            <li className="mb-1">
                                <a
                                    href="/"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Link 1
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="/"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Link 2
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    href="/"
                                    className="text-primary opacity-50 hover:opacity-100 transition duration-150 ease-in-out"
                                >
                                    Link 3
                                </a>
                            </li>
                        </ul>
                    </div>
                </S.FooterCols>
                <div className="md:flex md:items-center md:justify-between">
                    <div className="text-primary opacity-50 text-sm mr-4">
                        &copy; trail-landing.com. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
};
