import { Carousel, Card, Alert } from "@/ui";

export default function Page() {
    return (
        <div className="h-full bg-base-200 items-center pt-12 gap-4 flex flex-col px-12 border-l-1 border-t-1">
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
            <div className="w-fit flex flex-col h-164 gap-8">
                <Carousel className="h-3/7 flex flex-col gap-4">
                    <Carousel.Title>Slide 1</Carousel.Title>
                    <Carousel.Section
                        id="slide1"
                        prev="#slide1"
                        next="#slide1"
                        className="flex justify-between gap-4 h-9/12"
                    >
                        <Card size="medium">
                            <Card.Title>Resumo de livro</Card.Title>
                            <Card.Paragraph>
                                A card component has a figure, a body part, and
                                inside body there are title and actions parts
                            </Card.Paragraph>
                            <Card.Action>Ver</Card.Action>
                        </Card>
                        <Card size="medium">
                            <Card.Title>Resumo de livro</Card.Title>
                            <Card.Paragraph>
                                A card component has a figure, a body part, and
                                inside body there are title and actions parts
                            </Card.Paragraph>
                            <Card.Action>Ver</Card.Action>
                        </Card>
                        <Card size="medium">
                            <Card.Title>Resumo de livro</Card.Title>
                            <Card.Paragraph>
                                A card component has a figure, a body part, and
                                inside body there are title and actions parts
                            </Card.Paragraph>
                            <Card.Action>Ver</Card.Action>
                        </Card>
                    </Carousel.Section>
                </Carousel>
                <Carousel className="h-3/7 flex flex-col gap-4">
                    <Carousel.Title>Slide 2</Carousel.Title>

                    <Carousel.Section
                        id="slide11"
                        prev="#slide11"
                        next="#slide11"
                        className="flex justify-between gap-4 h-9/12"
                    >
                        <Card size="medium">
                            <Card.Title>Projeto: Retina</Card.Title>
                            <Card.Paragraph>
                                A card component has a figure, a body part, and
                                inside body there are title and actions parts
                            </Card.Paragraph>
                            <Card.Action>Buy Now</Card.Action>
                        </Card>
                        <Card></Card>
                        <Card></Card>
                    </Carousel.Section>
                </Carousel>
            </div>
        </div>
    );
}
