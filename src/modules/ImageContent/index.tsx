import { Container } from "@components/Container";
import { Image } from "@static/images";
import { type FC } from "react";

export type ImageContentProps = {
    data: {
        imagePosition: "left" | "right";
        aboveTitle: string;
        title: string;
        description: string;
        image: string;
        features?: {
            text: string;
        }[];
    };
};

export const ImageContent: FC<ImageContentProps> = ({
    data: { aboveTitle, title, description, features, imagePosition, image },
}) => {
    /**
     * Do not render if there are no elements
     */
    if (!image && !title) {
        return null;
    }

    return (
        <section className="mt-20 mb-40">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div
                        className={`${
                            imagePosition === "left"
                                ? "md:order-1"
                                : "md:order-2"
                        }`}
                    >
                        <Image srcLocal="heroImg" alt="hero image" />
                    </div>

                    <div
                        className={`${
                            imagePosition === "left"
                                ? "md:order-2"
                                : "md:order-1"
                        } `}
                    >
                        <div>
                            <div className="text-xl text-tertiary mb-2">
                                {aboveTitle}
                            </div>
                            <h3 className="text-h3 mb-3">{title}</h3>
                            <p className="text-xl text-primary opacity-50 mb-4 max-w-lg">
                                {description}
                            </p>
                            <ul className="text-lg text-primary">
                                {features?.map((feature, index) => (
                                    <li
                                        className="flex items-center mb-2"
                                        key={index}
                                    >
                                        <svg
                                            className="w-3 h-3 fill-current text-tertiary mr-2 shrink-0"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                        </svg>
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
