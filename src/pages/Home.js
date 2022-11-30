import { Blog } from "../components/Blog";
import { Livros } from "../components/Livros";
import { Servicos } from "../components/Servicos";
import { Sobre } from "../components/Sobre";
import { Inicio } from "../components/Inicio"

export function Home() {
    return (
        <main>
            <Inicio></Inicio>
            <Sobre></Sobre>
            <Servicos></Servicos>
            <Livros></Livros>
            <Blog></Blog>
            
        </main>
    )
}