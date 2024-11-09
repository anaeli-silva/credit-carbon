import { CardTeam } from "@/components/CardTeam"
import Florest from "@/assets/floresta.svg?react"
import { Button } from "@/components/button"


export function About() {
    return (
        <div className="max-w-7xl mx-auto px-5 py-8">
            <div className="flex h-[90vh] pt-24">
                <div className="flex flex-col mb-44">
                    <h1 className="text-3xl font-semibold mb-5">Sobre nós</h1>
                    <p className="text-lg">
                        Conheça a equipe responsável pelo desenvolvimento do projeto.
                        <br />
                        Sempre trabalhando para um mundo melhor e mais acessível.
                    </p>


                    <div className="mt-[25%]">
                        <p className="text-lg mt-8">Você pode conhecer cada um mais</p>
                        <Button
                            className="w-full mt-6"
                            label="Baixe nossa APS"
                        />
                    </div>
                </div>

                <Florest className="h-3/4" />
            </div>

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
                    imgSource="thayna.jpeg"
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

            <div className="mt-12">
    <h2 className="text-3xl font-semibold my-5 text-center">Referências</h2>

    <p>
        Câmera dos deputados, 2002. Legislação. Disponível em: <a href="https://www2.camara.leg.br/legin/fed/decleg/2002/decretolegislativo-144-20-junho-2002-458772-norma-pl.html" target="_blank" className="text-blue-600 underline">https://www2.camara.leg.br/legin/fed/decleg/2002/decretolegislativo-144-20-junho-2002-458772-norma-pl.html</a> Acesso em: 18 out.2024
    </p>
    <p>
        Caroline Soares, 2021. Análise do mercado de carbono no Brasil: histórico e desenvolvimento. Disponível em: <a href="https://lume.ufrgs.br/handle/10183/238112" target="_blank" className="text-blue-600 underline">https://lume.ufrgs.br/handle/10183/238112</a> Acesso em: 06 set.2024
    </p>
    <p>
        Caroline Soares; Letícia de Oliveira, 2021. Análise do mercado de carbono no Brasil: histórico e desenvolvimento. Disponível em: <a href="https://lume.ufrgs.br/handle/10183/238112" target="_blank" className="text-blue-600 underline">https://lume.ufrgs.br/handle/10183/238112</a> Acesso em: 4 out.2024
    </p>
    <p>
        César Roberto; Mariano Rua, 2009. O Mercado de Carbono como Instrumento de Conservação da Floresta Amazônica. Disponível em: <a href="https://editorarevistas.mackenzie.br/index.php/rem/article/view/512/329" target="_blank" className="text-blue-600 underline">https://editorarevistas.mackenzie.br/index.php/rem/article/view/512/329</a> Acesso em: 18 out.2024
    </p>
    <p>
        Diana Maria; Nelson Luís, 2014. Brevê: uma metodologia objetiva de cálculo de emissões para a frota brasileira de veículos. Disponível em: <a href="https://www.scielo.br/j/esa/a/WgHZ6hgHfprk7YLY8nVnVZz/?format=pdf&lang=pt" target="_blank" className="text-blue-600 underline">https://www.scielo.br/j/esa/a/WgHZ6hgHfprk7YLY8nVnVZz/?format=pdf&lang=pt</a> Acesso em: 26 out.2024
    </p>
    <p>
        Fabíola Sinimbú, 2024. Brasil precisa recuperar 25 milhões de hectares de vegetação nativa. Disponível em: <a href="https://agenciabrasil.ebc.com.br/Brasil-precisa-recuperar-25-milh%C3%B5es-de-hectares-de-vegeta%C3%A7%C3%A3o-nativa" target="_blank" className="text-blue-600 underline">https://agenciabrasil.ebc.com.br/Brasil-precisa-recuperar-25-milh%C3%B5es-de-hectares-de-vegeta%C3%A7%C3%A3o-nativa</a> Acesso em: 11 out.2024
    </p>
    <p>
        Instituto de Energia e Meio Ambiente, 2023. COP 28: Brasil emitiu 2,3 bilhões de toneladas brutas de gases de efeito estufa em 2022. Disponível em: <a href="https://energiaeambiente.org.br/cop-28-brasil-emitiu-23-bilhoes-de-toneladas-brutas-de-gases-de-efeito-estufa-em-2022-20231209#:~:text=O%20pa%C3%ADs%20emitiu%202%2C3,destaque%20para%20Cerrado%20e%20Amaz%C3%B4nia." target="_blank" className="text-blue-600 underline">https://energiaeambiente.org.br/cop-28-brasil-emitiu-23-bilhoes-de-toneladas-brutas-de-gases-de-efeito-estufa-em-2022-20231209#:~:text=O%20pa%C3%ADs%20emitiu%202%2C3,destaque%20para%20Cerrado%20e%20Amaz%C3%B4nia.</a> Acesso em: 11 out.2024
    </p>
    <p>
        Ipam Amazônia. O que é e como funciona o mercado de carbono? Disponível em: <a href="https://ipam.org.br/cartilhas-ipam/o-que-e-e-como-funciona-o-mercado-de-carbono/" target="_blank" className="text-blue-600 underline">https://ipam.org.br/cartilhas-ipam/o-que-e-e-como-funciona-o-mercado-de-carbono/</a> Acesso em: 13 out.2024
    </p>
    <p>
        José Célio; Paulo Costa, 2008. Mudança climática, protocolo de Kyoto e mercado de créditos de carbono: desafios à governança ambiental global. Disponível em: <a href="https://www.scielo.br/j/osoc/a/DWXT3BmCyyXRtk7yDwdrPpG/?lang=pt&format=html" target="_blank" className="text-blue-600 underline">https://www.scielo.br/j/osoc/a/DWXT3BmCyyXRtk7yDwdrPpG/?lang=pt&format=html</a> Acesso em: 18 out.2024
    </p>
    <p>
        Louise Antunes; Paloma de Lavor; Raíza Silva, 2013. CRÉDITO DE CARBONO: O mercado de crédito de carbono no Brasil. Disponível em: <a href="https://www.aedb.br/seget/arquivos/artigos13/2018412.pdf" target="_blank" className="text-blue-600 underline">https://www.aedb.br/seget/arquivos/artigos13/2018412.pdf</a> Acesso em: 25 out.2024
    </p>
    <p>
        Mario Sergio, 2003. Os mecanismos de cooperação internacional para redução de emissões sob o protocolo de Quioto Disponível em: <a href="https://escola.mpu.mp.br/publicacoescientificas/index.php/boletim/issue/view/16/18" target="_blank" className="text-blue-600 underline">https://escola.mpu.mp.br/publicacoescientificas/index.php/boletim/issue/view/16/18</a> Acesso em: 25 out.2024
    </p>
    <p>
        Ministério da Ciência, Tecnologia e Inovação, 2021. Mecanismo de Desenvolvimento Limpo. Disponível em: <a href="https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/cgcl/paginas/teste2" target="_blank" className="text-blue-600 underline">https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/cgcl/paginas/teste2</a> Acesso em: 13 set.2024
    </p>
    <p>
        Ministério do Meio Ambiente e Mudança Climática, 2021. Recuperação da vegetação nativa. Disponível em: <a href="https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas/biomas-e-ecossistemas/projetos/recuperacao-da-vegetacao-nativa" target="_blank" className="text-blue-600 underline">https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas/biomas-e-ecossistemas/projetos/recuperacao-da-vegetacao-nativa</a> Acesso em: 11 out.2024
    </p>
    <p>
        Ministério do Meio Ambiente. Protocolo de Quioto. Disponível em: <a href="https://antigo.mma.gov.br/clima/convencao-das-nacoes-unidas/protocolo-de-quioto.html#:~:text=O%20Brasil%20ratificou%20o%20documento,Unidos%20n%C3%A3o%20ratificaram%20o%20Protocolo." target="_blank" className="text-blue-600 underline">https://antigo.mma.gov.br/clima/convencao-das-nacoes-unidas/protocolo-de-quioto.html#:~:text=O%20Brasil%20ratificou%20o%20documento,Unidos%20n%C3%A3o%20ratificaram%20o%20Protocolo.</a> Acesso em: 25 out.2024
    </p>
    <p>
        Ministério Público Do Estado de Goiânia. Mecanismos de Desenvolvimento Limpo – MDL. Disponível em: <a href="https://www.mpgo.mp.br/portal/noticia/mecanismos-de-desenvolvimento-limpo-mdl#:~:text=O%20que%20%C3%A9%20Mecanismo%20de,dos%20pa%C3%ADses%20do%20Anexo%20I" target="_blank" className="text-blue-600 underline">https://www.mpgo.mp.br/portal/noticia/mecanismos-de-desenvolvimento-limpo-mdl#:~:text=O%20que%20%C3%A9%20Mecanismo%20de,dos%20pa%C3%ADses%20do%20Anexo%20I</a> Acesso em: 26 out.2024
    </p>
    <p>
        Portal de Educação Ambiental, 2024. O que foi o Protocolo de Quioto é o Acordo de Paris? Disponível em: <a href="https://semil.sp.gov.br/educacaoambiental/prateleira-ambiental/o-que-foi-o-protocolo-de-quioto-e-o-que-e-o-acordo-de-paris/" target="_blank" className="text-blue-600 underline">https://semil.sp.gov.br/educacaoambiental/prateleira-ambiental/o-que-foi-o-protocolo-de-quioto-e-o-que-e-o-acordo-de-paris/</a> Acesso em: 25 out.2024
    </p>
    <p>
        Sara Gurfinke, 2013. Projetos de redução de emissões de gases de efeito estufa: desempenho e custos de transação. Disponível em: <a href="https://www.sciencedirect.com/science/article/pii/S0080210716304393" target="_blank" className="text-blue-600 underline">https://www.sciencedirect.com/science/article/pii/S0080210716304393</a> Acesso em: 11 out.2024
    </p>
    <p>
        United Nations Climate Change. O que é o Protocolo de Kyoto? Disponível em: <a href="https://unfccc.int/kyoto_protocol?gad_source=1&gclid=EAIaIQobChMInKfe0c-piQMVyACtBh1QGz3lEAAYASAAEgILbPD_BwE" target="_blank" className="text-blue-600 underline">https://unfccc.int/kyoto_protocol?gad_source=1&gclid=EAIaIQobChMInKfe0c-piQMVyACtBh1QGz3lEAAYASAAEgILbPD_BwE</a> Acesso em: 6 out.2024
    </p>
</div>
            </div>
    )
}
        // <WavyBackground className="max-w-4xl mx-auto pb-40 overflow-x-hidden">
        //     <p>Conheça mais sobre nosso projeto</p>
        // </WavyBackground>