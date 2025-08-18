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

function CarouselButtons({ next, prev }: { next: string; prev: string }) {
    return (
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
                href={prev}
                className="btn btn-circle opacity-35 hover:opacity-100 transition-opacity duration-200"
            >
                ❮
            </a>
            <a
                href={next}
                className="btn btn-circle opacity-35 hover:opacity-100 transition-opacity duration-200"
            >
                ❯
            </a>
        </div>
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
            <CarouselButtons next={next} prev={prev} />
        </div>
    );
}

Carousel.Slide = Slide;

interface SectionProps {
    children: React.ReactNode;
    id: string;
    prev: string;
    next: string;
    className?: string;
}

function Section({ children, id, prev, next, className }: SectionProps) {
    return (
        <div
            id={id}
            className={twMerge("carousel-item relative w-full", className)}
        >
            {children}
            <CarouselButtons next={next} prev={prev} />
        </div>
    );
}

Carousel.Section = Section;

interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

function Title({ children, className }: TitleProps) {
    return (
        <h2 className={twMerge("text-4xl font-bold", className)}>{children}</h2>
    );
}

Carousel.Title = Title;

export { Carousel };
