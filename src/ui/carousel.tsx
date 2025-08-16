import Image from "next/image";
import { twMerge } from "tailwind-merge";

function Carousel({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={twMerge("carousel w-full", className)}>{children}</div>
    );
}

interface SlideProps {
    id: string;
    src: string;
    alt: string;
    prev: string;
    next: string;
    className?: string;
}

function Slide({ src, id, alt, prev, next, className }: SlideProps) {
    return (
        <div
            id={id}
            className={twMerge("carousel-item relative w-full", className)}
        >
            <Image
                src={src}
                alt={alt}
                layout="responsive"
                width={1920}
                height={1080}
                className="w-full"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={prev} className="btn btn-circle">
                    ❮
                </a>
                <a href={next} className="btn btn-circle">
                    ❯
                </a>
            </div>
        </div>
    );
}

Carousel.Slide = Slide;

interface SectionProps {
    children: React.ReactNode;
    id: string;
    prev: string;
    next: string;
}

function Section({ children, id, prev, next }: SectionProps) {
    return (
        <div id={id} className="carousel-item relative w-full">
            {children}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={prev} className="btn btn-circle">
                    ❮
                </a>
                <a href={next} className="btn btn-circle">
                    ❯
                </a>
            </div>
        </div>
    );
}

Carousel.Section = Section;

export { Carousel };
