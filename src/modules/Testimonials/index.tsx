import { Container } from "@components/Container";
import { Icon } from "@static/icons";
import { type FC } from "react";

export type TestimonialsProps = {
    data: {
        authorName: string;
        authorRole: string;
        content: string;
    }[];
};

export const Testimonials: FC<TestimonialsProps> = ({ data }) => {
    // Do not render if there are no elements
    if (!data.length) {
        return null;
    }

    return (
        <section className="mt-20 mb-40" data-animate>
            <Container>
                <div className="grid gap-8 lg:grid-cols-3 items-start">
                    {data.map((testimonial, index) => (
                        <div
                            className="flex flex-col h-full p-10 bg-tertiary bg-opacity-10 relative"
                            key={index}
                        >
                            <div className="absolute top-4 left-5 inline-flex flex-col mb-4">
                                <Icon
                                    iconData="testimonial"
                                    alt="author text"
                                />
                            </div>
                            <blockquote className="text-lg text-primary opacity-50 grow pt-5">
                                {testimonial.content}
                            </blockquote>
                            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-tertiary border-opacity-40">
                                <cite className="text-gray-200 not-italic">
                                    {testimonial.authorName} -
                                </cite>{" "}
                                <a
                                    className="text-tertiary hover:text-primary transition duration-150 ease-in-out"
                                    href="#"
                                >
                                    {testimonial.authorRole}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
