import GithubLogo from "@/assets/github.svg?react";
import LinkedinLogo from "@/assets/linkedin.svg?react";
import { twMerge } from "tailwind-merge";
import { Card } from "./Card";
import { useTheme } from "@/hooks/useTheme";

interface CardTeamProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    imgSource: string;
    linkedinUrl: string;
    githubUrl: string;
    description: string;
}

export function CardTeam({ name, imgSource, linkedinUrl, githubUrl, description, className, ...rest }: CardTeamProps) {
    const { theme } = useTheme();
    return (
        <div {...rest} className={twMerge("flex items-center gap-4 group", className)}>
            <Card
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="min-w-60 min-h-60"
            >
                <img
                    src={imgSource}
                    alt={`Foto de ${name}`}
                    width={232}
                    height={232}
                    className="rounded-full w-full h-full ml-4 group-[:not(.flex-row-reverse)]:ml-0"
                />
            </Card>

            <Card 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group-[:not(.flex-row-reverse)]:ml-4"
            >
                <h3 className="font-medium text-2xl mb-4">{name}</h3>
                <div className="flex items-center gap-4 mb-4">
                    {
                        linkedinUrl && (
                            <a href={linkedinUrl} target="_blank">
                                <LinkedinLogo width={28} height={28}/>
                            </a>
                        )
                    }
                    {
                        githubUrl && (
                            <a href={githubUrl} target="_blank">
                                <GithubLogo width={28} hanging={28} fill={theme == "light" ? "black" : "white"} />
                            </a>
                        )
                    }
                </div>

                <p className="text-justify text-lg">{description}</p>
            </Card>
        </div>
    )
}