import Image from "next/image";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

const CARD_VARIANTS = {
    primary: "card bg-base-100 image-full shadow-sm",
    outlined: "card bg-base-100 border border-base-200 image-full shadow-sm",
};

const CARD_SIZES = {
    small: "card-sm max-w-sm",
    medium: "card-md max-w-md",
    large: "card-lg max-w-lg",
};

interface CardProps {
    children: React.ReactNode;
    variant?: keyof typeof CARD_VARIANTS;
    size?: keyof typeof CARD_SIZES;
}

function Card({ children, variant = "primary", size = "medium" }: CardProps) {
    return (
        // <div className="card  bg-base-100 image-full w-96 shadow-sm">
        <div className={twJoin(CARD_VARIANTS[variant], CARD_SIZES[size])}>
            <figure>
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    width={384}
                    height={216}
                />
            </figure>
            <div className="card-body">{children}</div>
        </div>
    );
}

function Title({ children }: { children: string }) {
    return <h2 className="card-title">{children}</h2>;
}

Card.Title = Title;

function Paragraph({ children }: { children: string }) {
    return <p>{children}</p>;
}

Card.Paragraph = Paragraph;

interface ActionProps {
    children: string;
    href: string;
}

function Action({ children, href = "#" }: ActionProps) {
    return (
        <div className="card-actions justify-end">
            <Link href={href}>
                <button className="btn btn-primary">{children}</button>
            </Link>
        </div>
    );
}

Card.Action = Action;

export { Card };
