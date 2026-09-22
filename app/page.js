import Image from 'next/image';

export default function Home() {
  const whatsappLink = "https://wa.me/5511999999999"; // Insira seu número

  return (
    <main>
      {/* Cabeçalho */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <h1>Guilherme Martins</h1>
            <p>Psicólogo Clínico - CRP: 06/195462</p>
          </div>
          <nav className="nav-menu">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre Mim</a>
            <a href="#especialidades">Atendimentos</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Agendar Consulta
            </a>
          </nav>
        </div>
      </header>

      {/* Seção: Você já passou por isso? */}
      <section id="inicio" className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="title-dark">Você já passou por isso?</h2>
            <p className="subtitle">Se alguma dessas situações faz parte da sua vida, a psicoterapia pode ajudar.</p>
          </div>
          
          <div className="split-layout">
            <div className="image-box">
              <img src="/image.png" alt="Ilustração Terapêutica" className="responsive-img" />
            </div>
            <div className="cards-grid-small">
              {['Depressão: Quando tudo parece perder o sentido', 
                'Ansiedade: Pensamentos que não desligam', 
                'Burnout: Exaustão que vai além do cansaço', 
                'Problemas Familiares: Conflitos que machucam em silêncio', 
                'Ciclos Repetitivos: Você sente que vive sempre o mesmo roteiro?', 
                'Autoestima: Dificuldade em se reconhecer'].map((item, i) => {
                  const [title, desc] = item.split(': ');
                  return (
                    <div key={i} className="card-small">
                      <h3>{title}</h3>
                      <p>{desc}</p>
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Especialidades */}
      <section id="especialidades" className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="title-brown">Especialidades</h2>
            <p className="subtitle">Áreas de atuação com cuidado e expertise</p>
          </div>
          
          <div className="cards-grid-large">
            {[
              { icon: '❁', title: 'Ansiedade e Estresse', desc: 'Acolhimento para lidar com preocupações do cotidiano' },
              { icon: '♡', title: 'Depressão', desc: 'Espaço seguro para cuidar de sentimentos profundos' },
              { icon: '✧', title: 'TEA', desc: 'Acompanhamento especializado para crianças e adolescentes' },
              { icon: '⚇', title: 'Orientação para Pais e Famílias', desc: 'Suporte para compreender e apoiar o desenvolvimento' },
              { icon: '⌂', title: 'Desenvolvimento Emocional', desc: 'Promoção do autoconhecimento em todas as fases da vida' }
            ].map((spec, i) => (
              <div key={i} className="card-large">
                <div className="icon">{spec.icon}</div>
                <h3>{spec.title}</h3>
                <p>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Sobre Mim */}
      <section id="sobre" className="section bg-beige">
        <div className="container about-layout">
          <div className="about-image-frame">
            <img src="/image_6.png" alt="Guilherme Martins" className="responsive-img" />
          </div>
          <div className="about-text">
            <h2 className="title-brown text-left">Sobre Mim</h2>
            <p>Sou psicólogo e psicanalista clínico, com ampla experiência no atendimento de diferentes demandas emocionais ao longo do desenvolvimento humano. Atuo no acompanhamento de pessoas que enfrentam ansiedade, depressão, burnout, dificuldades nos relacionamentos, conflitos emocionais, processos de luto, crises existenciais e outras formas de sofrimento psíquico. Acredito que o gesto de buscar ajuda carrega, em si, uma dimensão profundamente humana, marcada pela coragem de entrar em contato com o próprio sofrimento e com o desejo de transformação.</p>
            <p>Busco, em cada encontro, construir um espaço terapêutico suficientemente seguro, no qual os afetos possam ser reconhecidos, as dores acolhidas e as potencialidades gradualmente elaboradas. Acredito em processos terapêuticos que respeitam o tempo psíquico de cada pessoa e valorizam os caminhos singulares do amadurecimento emocional.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-20">Saiba Mais</a>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer id="contato" className="footer">
        <div className="container footer-content">
          <div>
            <h3>Guilherme Martins</h3>
            <p>Psicólogo Clínico e Psicanalista | CRP: 06/195462</p>
          </div>
          <div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">Agendar Consulta</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
