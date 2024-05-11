import { Container } from "@components/Container";
import { type FC } from "react";

export type SectionHeadingsProps = {
    data: {
        label?: string;
        title: string;
        description: string;
        showLine?: boolean;
    };
};

export const SectionHeadings: FC<SectionHeadingsProps> = ({
    data: { label, title, description, showLine },
}) => {
    // Do not render if there are no elements
    if (!title && !description) {
        return null;
    }

    return (
        <section className="mt-20 mb-20" data-animate>
            <Container>
                <div
                    className={`flex justify-center flex-col items-center text-center pt-20 ${
                        showLine
                            ? "border-t border-tertiary border-opacity-40"
                            : ""
                    } `}
                >
                    {label && (
                        <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
                            {label}
                        </div>
                    )}
                    <h2 className="text-h2-md md:text-h2  mb-4 font-bold">
                        {title}
                    </h2>
                    <p className="text-p-md sm:text-p-lg text-primary opacity-50 max-w-lg">
                        {description}
                    </p>
                </div>
            </Container>
        </section>
    );
};
