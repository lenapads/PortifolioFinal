import "../src/styles/app.css";

function App() {
  let currentIndex = 0;

  function changeSlide(direction: number) {
    const slide = document.getElementById("carouselSlide") as HTMLElement;
    const totalSlides = slide.children.length;
    currentIndex += direction;
  
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    if (currentIndex >= totalSlides) currentIndex = 0;
  
    const offset = -currentIndex * 100;
    slide.style.transform = `translateX(${offset}%)`;
  }
  
  return (
    <>
      <header>
        <div className="logo">
          <img src="src/assets/imgs/logo.png" alt="Logo da Helena muito bonito" />
        </div>

        <div className="links">
  <a href="#habilidades">Habilidades</a>
  <a href="#quemSou">Quem sou?</a>
  <a href="#projetos">Meus projetos</a>
  <a href="#certificados">Certificados</a>
  <a href="#contato">Contato</a>
</div>
      </header>

      <main></main>

      <section  id="projetos" className="projetos">
      <div className="card">
      <img src="src\assets\imgs\calculadora.jpg" alt="" />
      <h3>Calculadora</h3>
       <button><a href="https://github.com/lenapads/prjCalculadora">Veja Mais</a></button>
         </div>
         <div className="card">
           <img src="src\assets\imgs\petshop.avif" alt="" />
           <h3> Pet Shop</h3>
           <button ><a href="https://github.com/An4ju/Petshop_Au_dorable_2">Veja Mais</a></button>
         </div>        
         <div className="card">
           <img src="src\assets\imgs\spring.png" alt="" />
           <h3>Aulo e curso</h3>
           <button><a href="https://github.com/lenapads/prjSondagem">Veja Mais</a></button>
         </div>
       </section>

       <section  id="quemSou"className="quemSou">

       </section>

       <section id="algunsDeles"className="algunsDeles">
         <div className="umDeles">
           <img src="src\assets\imgs\WhatsApp Image 2025-04-29 at 06.43.33.jpeg" alt="" />
           <p>Projeto Social</p>
           <p>Pé no chão</p>
         </div>
         <div className="umDeles">
           <img src="src\assets\imgs\WhatsApp Image 2025-04-29 at 06.41.16.jpeg" alt="" />
           <p>Viagem Missionária</p>
           <p>Ariri-Cananéia</p>
         </div>
         <div className="umDeles">
           <img src="src\assets\imgs\WhatsApp Image 2025-04-29 at 06.43.47.jpeg" alt="" />
           <p>Evangelismo</p>
           <p>Carnaval</p>
         </div>
         <div className="umDeles">
           <img src="src\assets\imgs\WhatsApp Image 2025-04-29 at 06.43.32.jpeg" alt="" />
           <p>Trabalho servindo</p>
           <p>em acampamentos</p>
         </div>
       </section>

       <section id="habilidades" className="habilidades">
       <h2 className="titulo-habilidades">
   <span className="onda-esquerda">~~~~~</span>
   Habilidades
   <span className="onda-direita">~~~~~</span>
 </h2>
   <div className="botoes-habilidades">
     <button>HTML</button>
     <button>CSS</button>
     <button>JavaScript</button>
     <button>React</button>
     <button>Spring</button>
     <button>Design</button>
   </div>
 </section>
 <section id="certificados" className="certificados">
   <h2 className="titulo-certificados">Meus Certificados</h2>
   <div className="carousel">
     <button className="carousel-btn prev" onClick={() => changeSlide(-1)}>‹</button>
     <div className="carousel-wrapper">
       <div className="carousel-slide" id="carouselSlide">
         <div className="certificado-item">
           <img src="src\assets\imgs\certificado.png" alt="Certificado 1" />
           <p>Formação Design Responsivo - FreeCode Camp</p>
         </div>
         <div className="certificado-item">
           <img src="src\assets\imgs\imagem_2025-03-30_183835938.png" alt="Certificado 2" />
           <p>JavaScript - FreeCode Camp</p>
         </div>
         <div className="certificado-item">
           <img src="src\assets\imgs\certifiHist.png" alt="Certificado 3" />
           <p>Medalha de prata - ONHB</p>
         </div>
       </div>
     </div>
     <button className="carousel-btn next" onClick={() => changeSlide(1)}>›</button>
   </div>
 </section>

 <footer id="contato" className="footer">
   <p>Entre em contato: <a href="mailto:seuemail@example.com">helena.padilha.dev2024@gmail.com</a></p>
   <a href="https://github.com/lenapads" target="_blank" rel="noopener noreferrer">
     <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="github-icon" />
   </a>
 </footer>

    </>

  )
}

export default App
