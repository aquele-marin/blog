import { Carousel, Card } from "@/ui";
import { projects, articles } from "@/constants";
import { chunkArray } from "@/utils";

export default function Page() {
    const projectSections = chunkArray(projects, 3);
    const articlesSections = chunkArray(articles, 3);

    console.log(projectSections);
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
                    <Carousel.Title>Projects</Carousel.Title>
                    {projectSections.map((section, i) => (
                        <Carousel.Section
                            id={projectSections[i][0].id}
                            prev={
                                "#" +
                                projectSections[
                                    i - 1 < 0
                                        ? projectSections.length - 1
                                        : i - 1
                                ][0].id
                            }
                            next={
                                "#" +
                                projectSections[
                                    i + 1 >= projectSections.length ? 0 : i + 1
                                ][0].id
                            }
                            className="flex justify-between gap-4 h-9/12"
                            key={i}
                        >
                            {section.map((project) => (
                                <Card size="medium" key={project.id}>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Paragraph>
                                        {project.description}
                                    </Card.Paragraph>
                                    <Card.Action href="#">
                                        View Project
                                    </Card.Action>
                                </Card>
                            ))}
                        </Carousel.Section>
                    ))}
                </Carousel>
                <Carousel className="h-3/7 flex flex-col gap-4">
                    <Carousel.Title>Articles</Carousel.Title>
                    {articlesSections.map((section, i) => (
                        <Carousel.Section
                            id={articlesSections[i][0].id}
                            prev={
                                "#" +
                                articlesSections[
                                    i - 1 < 0
                                        ? articlesSections.length - 1
                                        : i - 1
                                ][0].id
                            }
                            next={
                                "#" +
                                articlesSections[
                                    i + 1 >= articlesSections.length ? 0 : i + 1
                                ][0].id
                            }
                            className="flex justify-between gap-4 h-9/12"
                            key={i}
                        >
                            {section.map((article) => (
                                <Card size="medium" key={article.id}>
                                    <Card.Title>{article.name}</Card.Title>
                                    <Card.Paragraph>
                                        {article.description}
                                    </Card.Paragraph>
                                    <Card.Action href="#">
                                        Read Article
                                    </Card.Action>
                                </Card>
                            ))}
                        </Carousel.Section>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
