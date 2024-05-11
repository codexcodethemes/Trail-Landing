import { Container } from "@components/Container";
import { Icon, type IconName } from "@static/icons";
import { type FC } from "react";

export type FeaturesProps = {
    data: {
        features: {
            icon: IconName["iconData"];
            text: string;
            description: string;
        }[];
    };
};

export const Features: FC<FeaturesProps> = ({ data: { features } }) => {
    // do not render if there are no elements
    if (!features || features.length === 0) {
        return null;
    }

    return (
        <section className="mt-10 mb-40">
            <Container>
                <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center "
                            data-animate
                        >
                            <figure className="bg-tertiary py-6  px-5 rounded-full mb-3">
                                <Icon
                                    iconData={item.icon}
                                    alt="icon"
                                    className="h-10 object-contain"
                                />
                            </figure>
                            <h3 className="text-h4 mb-2">{item.text}</h3>
                            <p className="text-p text-primary opacity-50 text-center">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
