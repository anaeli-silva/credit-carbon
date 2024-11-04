import { CardTeam } from "@/components/CardTeam"



export function About() {
    return (
        <div className="max-w-7xl mx-auto px-5 py-8">
            <div className="flex flex-col gap-16 px-24">
                <CardTeam 
                    name="Anaeli Ferreira"
                    imgSource="/anaeli.png"
                    linkedinUrl="https://linkedin.com/in/anaeli-ferreira"
                    githubUrl="https://github.com/anaeli-silva"
                    description="Sou uma pessoa apaixonada pela área de tecnologia e música, em meus tempos livres toco violão e desenvolvo sites e aplicativos, e gosto de estar sempre buscando novas formas de criar soluções e compartilhar e ideias."
                />
                <CardTeam 
                    name="Thayná Spadari"
                    imgSource="/"
                    linkedinUrl=""
                    githubUrl=""
                    description="Sou a Thayná Spadari e minhas coisas favoritas no mundo e praia, música e esporte. Todo dia arranjo um horário para cuidar da minha saúde, como jogando bola ou fazendo academia. Sou uma pessoa que ama procurar coisas novas para aprender, maioria das vezes tô aprendendo línguas novas, e meu foco de vida é estudar e aprender, para poder ajudar minha família e todos que precisarem de mim. Enfim sou um ser humano que estou sempre aberta para desafios e aprendizados."
                    className="flex-row-reverse"
                />

                <CardTeam 
                    name="Victor Rinaldi"
                    imgSource="/victor.jpg"
                    linkedinUrl="https://www.linkedin.com/in/victor-rinaldi-7985162a7"
                    githubUrl="https://github.com/VictorRinaldi09"
                    description="Atualmente focado em me desenvolver como programador, estou constantemente estudando linguagens de programação que acho ter mais a ver comigo (Python, SQL, Java). Nos tempos livres gosto de jogar videogame, assistir futebol, filmes e também achar coisas novas que possam me ajudar futuramente na parte profissional e pessoal."
                />

                <CardTeam 
                    name="Vinicius Costa"
                    imgSource="/vinicius.jpeg"
                    linkedinUrl="https://www.linkedin.com/in/vinicius-scosta/"
                    githubUrl="https://github.com/Skinzin"
                    description="Uma pessoa apaixonado por videogames, música e códigos. Nos tempos livres estou a aprender a desenhar e tocar algum instrumento (Violão), além disto, estou sempre procurando (estudando) maneiras de como se tornar um dev melhor, como uma pessoa autodidata, e tornar a tecnologia mais acessível e de fácil compreensão."
                    className="flex-row-reverse"
                />
            </div>
        </div>
    )
}
        // <WavyBackground className="max-w-4xl mx-auto pb-40 overflow-x-hidden">
        //     <p>Conheça mais sobre nosso projeto</p>
        // </WavyBackground>