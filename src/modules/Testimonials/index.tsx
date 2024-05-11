import { Container } from "@components/Container";
import { Image } from "@static/images";
import { type FC } from "react";

export type TestimonialsProps = {
    data: {
        authorName: string;
        authorRole: string;
        content: string;
    }[];
};

export const Testimonials: FC<TestimonialsProps> = ({ data }) => {
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
                                <svg
                                    className=" -mr-3 w-6 h-5 fill-current text-primary"
                                    viewBox="0 0 24 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                                </svg>
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
