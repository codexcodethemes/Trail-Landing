import { Button } from "@components/Button";
import { Container } from "@components/Container";
import { Image } from "@static/images";
import { type FC } from "react";

export type CenterTextProps = {
    title: string;
    description: string;
    buttons: {
        text: string;
        link: string;
        variant: "primary" | "secondary" | "tertiary";
    }[];
    image?: string;
};

export const CenterText: FC<CenterTextProps> = ({
    title,
    description,
    buttons,
}) => {
    // do not render if there are no elements
    if (!buttons || buttons.length === 0) {
        return null;
    }

    return (
        <div className="relative mt-32  md:mt-40 md:mb-16">
            <Container>
                <div className="text-center flex justify-center flex-col items-center gap-5">
                    <h1 className="text-h1 md:text-h1-md lg:text-h1-lg font-bold opacity-90">
                        {title}
                    </h1>
                    <p className="text-p-md sm:text-p-leading max-w-lg opacity-50 margin-p last:margin-p-last">
                        {description}
                    </p>
                    <div className="max-w-xs mx-auto gap-5 sm:max-w-none flex justify-center flex-col sm:flex-row ">
                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                variant={button.variant}
                                link={button.link}
                            >
                                {button.text}
                            </Button>
                        ))}
                    </div>
                    <figure>
                        <Image srcLocal="heroImg" alt="hero image"></Image>
                    </figure>
                </div>
            </Container>
        </div>
    );
};
