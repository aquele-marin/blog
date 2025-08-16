import { Carousel, Card, Alert } from "@/ui";

export default function Page() {
    return (
        <div className="h-full bg-base-200 items-center justify-around flex flex-col px-12 border-l-1 border-t-1">
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="bg-amber-700 w-fit flex flex-col h-108 justify-between">
                <Carousel className="h-3/7">
                    <Carousel.Slide
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        id="slide1"
                        alt="A scenic view of nature"
                        prev="#slide4"
                        next="#slide2"
                    />
                    <Carousel.Slide
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        id="slide2"
                        alt="A serene landscape with mountains and a lake"
                        prev="#slide1"
                        next="#slide3"
                    />
                    <Carousel.Slide
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        id="slide3"
                        alt="A beautiful sunset over the ocean"
                        prev="#slide2"
                        next="#slide4"
                    />
                    <Carousel.Section id="slide4" prev="#slide3" next="#slide1">
                        <Card>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Paragraph>
                                A card component has a figure, a body part, and
                                inside body there are title and actions parts
                            </Card.Paragraph>
                            <Card.Action>Buy Now</Card.Action>
                        </Card>
                    </Carousel.Section>
                </Carousel>
                <Card>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Paragraph>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                    </Card.Paragraph>
                    <Card.Action>Buy Now</Card.Action>
                </Card>
                {/* <Carousel className="h-3/7">
                    <Carousel.Slide
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        id="slide1"
                        alt="A scenic view of nature"
                        prev="#slide4"
                        next="#slide2"
                    />
                    <Carousel.Slide
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        id="slide2"
                        alt="A serene landscape with mountains and a lake"
                        prev="#slide1"
                        next="#slide3"
                    />
                    <Carousel.Slide
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        id="slide3"
                        alt="A beautiful sunset over the ocean"
                        prev="#slide2"
                        next="#slide1"
                    />
                </Carousel> */}
            </div>
        </div>
    );
}
