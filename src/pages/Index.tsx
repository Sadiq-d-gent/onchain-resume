import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowDown, ArrowRight, Code2, ChartNoAxesCombined, Layers3, Menu, X, Plus, Minus, Mail, Github } from 'lucide-react';
import './personal.css';

const email = 'sadiqahmadelif01@gmail.com';
const navigation = ['About', 'Projects', 'Contact'];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const page = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elements = page.current?.querySelectorAll('.reveal');
    if (!elements || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return <div className="personal-site" ref={page}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Sadiq Ahmad home">sa<span>.</span></a>
      <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      <a className="header-contact" href={`mailto:${email}`}>Let’s talk <ArrowUpRight size={16} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}<ArrowUpRight size={18}/></a>)}</nav>}
    </header>
    <main id="main">
      <section id="home" className="hero section-shell">
        <div className="hero-light" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> SADIQ AHMAD · BASED IN NIGERIA</p>
          <h1>Curious by nature.<br />A builder<br /><span className="serif-accent">by choice.</span></h1>
          <p className="hero-description">I’m Sadiq. A software developer, forex trader, and the person behind Gigabyte. I’m building useful products and a business of my own.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects">Explore my projects <ArrowUpRight size={19}/></a><a className="text-link" href="#about">A little about me <ArrowRight size={17}/></a></div>
          <div className="hero-footnote"><span>TECHNOLOGY</span><i /> <span>MARKETS</span><i /><span>ENTREPRENEURSHIP</span></div>
        </div>
        <div className="portrait-composition">
          <div className="portrait-frame"><img src="/sadiq-portrait.jpeg" alt="Sadiq Ahmad wearing a traditional cap and embroidered kaftan" width="865" height="1585" fetchPriority="high" /><div className="portrait-shade"/><div className="portrait-caption"><span>THE PERSON BEHIND THE WORK</span><strong>Sadiq Ahmad<span>Known online as Gigabyte</span></strong></div></div>
          <div className="portrait-tag glass-panel"><span className="status-dot"/><span>Currently building <strong>Ziep</strong></span><ArrowUpRight size={17}/></div>
          <span className="portrait-index" aria-hidden="true">01 / AN INTRODUCTION</span>
        </div>
        <a className="scroll-cue" href="#about"><ArrowDown size={16}/> More to the story</a>
      </section>
      <section id="about" className="about section-shell section-space reveal">
        <div className="section-label"><span>01 — ABOUT</span><span>A LITTLE CONTEXT</span></div>
        <div className="about-grid"><h2>Different interests.<br/><span className="muted">One curious mind.</span></h2><div className="about-copy"><p>Technology is where I build. Markets are where I study decisions, uncertainty, and discipline. Creating content is how I share what I’m learning along the way.</p><p>I’m bringing those interests into the ventures I’m establishing under Mariana Technology, starting with Ziep and Mariana Tech. This is a place to explore the work as it takes shape.</p></div></div>
        <div className="interest-grid">
          <article><Code2/><span className="small-index">01</span><h3>Build with intention.</h3><p>Software that makes everyday tasks feel simpler. Thoughtful interfaces, clear purpose, and attention to the details.</p></article>
          <article><ChartNoAxesCombined/><span className="small-index">02</span><h3>Stay a student.</h3><p>Forex trading is part of my journey. I value discipline, curiosity, and a clear understanding of uncertainty.</p></article>
          <article><Layers3/><span className="small-index">03</span><h3>Think long term.</h3><p>I’m establishing ventures one step at a time, with a focus on useful products and honest progress.</p></article>
        </div>
      </section>
      <section id="projects" className="projects section-shell section-space reveal">
        <div className="section-label"><span>02 — SELECTED VENTURES</span><span>IDEAS TAKING SHAPE</span></div>
        <div className="section-heading"><h2>What I’m <span className="serif-accent">building.</span></h2><p>Early chapters. Clear intentions.<br/>Here’s where my focus is today.</p></div>
        <article className="ziep-project">
          <div className="project-copy"><span className="project-status"><span className="status-dot"/> IN DEVELOPMENT</span><h3>Ziep<span>Simply faster.</span></h3><p>A financial utility app being built for everyday needs in Nigeria. The ambition is simple: make the experience feel fast, clear, and effortless.</p><div className="project-tags"><span>Financial utility</span><span>Product development</span></div><button className="project-expand" aria-expanded={projectOpen} aria-controls="ziep-details" onClick={() => setProjectOpen(!projectOpen)}>Behind the project {projectOpen ? <Minus size={20}/> : <Plus size={20}/>}</button></div>
          <div className="ziep-art" aria-label="Ziep brand concept artwork"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="ziep-glass glass-panel"><span className="concept-label">A SIMPLER EVERYDAY</span><span className="ziep-word">ziep<span>↗</span></span><div className="ziep-art-bottom"><span>Simply faster.</span><ArrowUpRight size={23}/></div></div><span className="art-caption">BRAND CONCEPT · PRODUCT IN DEVELOPMENT</span></div>
          {projectOpen && <div id="ziep-details" className="project-details"><div><h4>The idea</h4><p>A calmer way to handle everyday financial utilities, with an experience designed around clarity and speed.</p></div><div><h4>My role</h4><p>Founder and developer, shaping the product direction and building the application.</p></div><div><h4>Where it stands</h4><p>Currently in development. Ziep is not yet available to the public; launch details will be shared when ready.</p></div></div>}
        </article>
        <div className="venture-grid"><article className="venture-card"><div className="venture-top"><span className="venture-symbol">m<span>↗</span></span><span className="quiet-status">IN PREPARATION</span></div><h3>Mariana Tech</h3><p>A phones and accessories venture I’m preparing. Product details and availability will be shared as the business takes shape.</p><span className="venture-category">PHONES & ACCESSORIES</span></article><article className="venture-card umbrella"><div className="venture-top"><Layers3 size={30}/><span className="quiet-status">BEING ESTABLISHED</span></div><h3>Mariana Technology</h3><p>The umbrella brand I’m developing for my technology ventures, including Ziep and Mariana Tech.</p><span className="venture-category">THE BIGGER PICTURE</span></article></div>
      </section>
      <section id="contact" className="contact section-shell section-space reveal"><div className="contact-surface"><span className="eyebrow">03 — START A CONVERSATION</span><h2>Good things start<br/>with <span className="serif-accent">a hello.</span></h2><p>Have a project in mind, a thoughtful question,<br className="desktop-break"/> or an opportunity to collaborate? Let’s talk.</p><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight/></a><div className="contact-links"><a href="https://github.com/Sadiq-d-gent" target="_blank" rel="noopener noreferrer"><Github size={17}/>GitHub<ArrowUpRight size={15}/></a><a href="https://www.tiktok.com/@gigabyte724" target="_blank" rel="noopener noreferrer">TikTok<ArrowUpRight size={15}/></a><a href={`mailto:${email}`}><Mail size={17}/>Email<ArrowUpRight size={15}/></a></div></div></section>
    </main>
    <footer className="site-footer section-shell"><a className="footer-name" href="#home">Sadiq Ahmad<span>Developer. Trader. Builder.</span></a><span>© {new Date().getFullYear()} Sadiq Ahmad</span><a href="#home">Back to top <ArrowUpRight size={15}/></a></footer>
  </div>;
}
