import './section.css';
import LinkedinIcon from '../../icons/Linkedin';
import GithubIcon from '../../icons/GithubIcon'
export default function Section(){
    return(
       <main>
            <section className="intro">
                 <h2>Analista e Desenvolvedor de Sistemas</h2>
                <h4>Me chamo Matheus Arcangelli, sou graduando em Análise e Desenvolvimento de Sistemas. Atualmente no 3 período.</h4>
                <a href="https://www.linkedin.com/in/matheus-arcangelli"><LinkedinIcon/></a>
                <a href="https://github.com/Theus2005-dev"><GithubIcon/></a>
            </section>
    <section className="sobre">

        <div id="info">
            <h3 className="area">UX/UI + Desenvolvedor</h3>
            <p>Desenvolvedor Front-End em formação, com foco em React e Next.js, dedicado à criação de interfaces modernas, responsivas e de alto desempenho.
            Experiência acadêmica em:
            Desenvolvimento Front-End com React e Next.js;
            Criação de interfaces responsivas e otimizadas;
            Fundamentos de Back-End com PHP e Python;
            Lógica de programação e paradigma orientado a objetos;
            Levantamento e análise de requisitos, além de modelagem de sistemas com UML.
            Estudante de Análise e Desenvolvimento de Sistemas, em constante aprimoramento, com interesse principal em Front-End e na 
            construção de experiências digitais que unem performance e usabilidade.</p>    
        </div>

        <div id="img-container">
                <img src="public/9b5c67a0-e242-4b77-95a5-1e2dc5c951e7.jpg" alt="Imagem"/>
        </div>

    </section>

    <section className="conhecimentos">

        <div className="block">
            <h5>JavaScript</h5>
            <p>Nível: intermediário</p>
        </div>
        <div className="block">
            <h5>HTML</h5>
            <p>Nível: intermediário</p>
        </div>
        <div className="block">
            <h5>CSS</h5>
            <p>Nível: intermediário</p>
        </div>
        <div className="block">
            <h5>React</h5>
            <p>Nível: intermediário</p>
        </div>
        <div className="block">
            <h5>Nextjs</h5>
            <p>Nível: intermediário</p>
        </div>
        <div className="block">
            <h5>Tailwind</h5>
            <p>Nível: intermediário</p>
        </div>
        <div className="block">
            <h5>MySQL</h5>
            <p>Nível: intermediário</p>
        </div>
        <div className="block">
            <h5>Node js</h5>
            <p>Nível: intermediário</p>
        </div>
        <div className="block">
            <h5>Python</h5>
            <p>Nível: Básico</p>
        </div>
        <div className="block">
            <h5>PHP</h5>
            <p>Nível: Básico</p>
        </div>

    </section>
       </main>
    )
}