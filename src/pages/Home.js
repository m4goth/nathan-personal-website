import { Blog } from "../components/Blog";
import { Livros } from "../components/Livros";
import { Servicos } from "../components/Servicos";
import { Sobre } from "../components/Sobre";

export function Home() {
    return (
        <section>
            <Sobre></Sobre>
            <Servicos></Servicos>
            <Livros></Livros>
            <Blog></Blog>
        </section>
    )
}