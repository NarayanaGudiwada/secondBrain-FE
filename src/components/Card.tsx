import ShareIcon from "./Icons/ShareIcon"

interface cardProps {
    title: string,
    link: string,
    type: "youtube" | "tweet"
}

export const Card = ({ title, link, type }: cardProps) => {
    const contentMap = {
        youtube: (
            <iframe
                className="w-full"
                src={link.replace("watch", "embed").replace("?v=", "/")}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        ),
        tweet: (
            <blockquote className="twitter-tweet w-full">
                <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
        )
    };

    return (
        <div className="bg-white rounded-md border-grey-100 p-4 shadow-md border max-w-72">
            <div className="flex justify-between ">
                <div className="flex gap-2 text-gray-500 items-center text-basex">
                    <ShareIcon size="md" />
                    {title}
                </div>
                <div className="flex gap-2 text-gray-500 items-center">
                    <a href={link} target="_blank" className="cursor-pointer">
                        <ShareIcon size="md" />
                    </a>
                    <ShareIcon size="md" />
                </div>
            </div>
            <div className="pt-4">
                {contentMap[type]}
            </div>
        </div>
    );
}