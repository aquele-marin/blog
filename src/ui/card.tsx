import Image from "next/image";

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="card bg-base-100 image-full w-96 shadow-sm">
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

function Action({ children }: { children: string }) {
    return (
        <div className="card-actions justify-end">
            <button className="btn btn-primary">{children}</button>
        </div>
    );
}

Card.Action = Action;

export { Card };
