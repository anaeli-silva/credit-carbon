import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
// import { Link } from "react-router-dom"
import GithubLogo from "@/assets/github.svg?react";


export function Footer() {
    const { theme, toggleTheme } = useTheme();
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col flex-1 bg-[#232225] border-t-1 border-[#3E3C41] text-white p-4">
            <div className="max-w-7xl mx-auto w-full">
                <nav className="">
                    <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-5">
                            <a href="/">
                                <img src="/logo.svg" alt="logo" width={48} height={48}/>
                            </a>
                            <p>
                                © {year} Carbono Neutro.
                            </p>
                    </div>

                    <div>
                            <button onClick={toggleTheme}>
                                {theme == "light" ? <Moon size={23} /> : <Sun size={23} />}
                            </button>
                    </div>
                    </div>
                </nav>

                <div>
                    <ul className="flex items-center justify-center gap-8 mt-7">
                        <li>
                            <a href="https://github.com/anaeli-silva/credit-carbon" target="_blank">
                                {/* <img src="/github.svg" alt="Icone do Github" width={32} height={32} className="" /> */}
                                <GithubLogo width={28} fill="white"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">INÍCIO</a>
                        </li>
                        <li>
                            <a href="/#calculator">CALCULADORA</a>
                        </li>
                        <li>
                            <a href="/about">SOBRE NÓS</a>
                        </li>
                        <li>
                            <a href="https://www.unip.br/" target="_blank">UNIP</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/anaeli-ferreira/" target="_blank">Anaeli Ferreira</a>
                        </li>
                        <li>
                            <a href="#" target="_blank">Thayna Spadari</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/victor-rinaldi-7985162a7/" target="_blank">Victor Rinaldi</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/vinicius-scosta/" target="_blank">Vinicius Costa</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}