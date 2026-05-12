// KREW landing — main composition

const { useState, useEffect, useRef } = React;

// ============ NAV ============
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="container nav-inner">
        <a className="logo" href="#top">
          <span className="logo-mark"><KrewLogo size={24} /></span>
          <span className="logo-word">KREW</span>
        </a>
        <div className="nav-links">
          <a className="nav-link" href="#mineras">Para Mineras</a>
          <a className="nav-link" href="#trabajadores">Para Trabajadores</a>
          <a className="nav-link" href="#como-funciona">Cómo funciona</a>
        </div>
        <a className="btn btn-dark" href="#contacto">Contáctanos</a>
      </div>
    </nav>
  );
};

// ============ HERO ============
const Hero = () => (
  <section className="hero" id="top">
    <div className="container hero-grid">
      <div className="reveal in">
        <div className="pill dot" style={{ marginBottom: 22 }}>Activo en Chile · Región de Antofagasta y O'Higgins</div>
        <h1>
          La forma más rápida de conectar faenas <span className="accent">con el trabajador correcto</span>
        </h1>
        <p className="hero-sub">
          Krew digitaliza el proceso de contratación de trabajadores mineros. Lo que hoy toma días, con Krew toma horas — con certificaciones verificadas y cumplimiento normativo resuelto.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-dark" href="#contacto">Contáctanos</a>
          <a className="btn btn-ghost" href="#trabajadores">Soy trabajador <span className="btn-arrow">→</span></a>
        </div>
        <div className="hero-trust">
          <div className="avatars">
            <span style={{ background: '#1A6FFF' }}>MG</span>
            <span style={{ background: '#0B2A6B' }}>JP</span>
            <span style={{ background: '#222' }}>CS</span>
            <span style={{ background: '#B45309' }}>+</span>
          </div>
          <span>Más de 2.400 trabajadores verificados en el pool</span>
        </div>
      </div>
      <div className="hero-stage reveal in">
        <div className="phone tilt">
          <div className="phone-notch"></div>
          <PassportPhone />
        </div>
      </div>
    </div>
  </section>
);

// ============ PROBLEM ============
const Problem = () => (
  <section id="problema">
    <div className="container">
      <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
        <div className="eyebrow" style={{ justifyContent:'center' }}>El status quo</div>
        <h2 className="h2" style={{ margin: '0 auto' }}>El trabajo transitorio minero se gestiona igual que hace 20 años</h2>
        <p className="lead" style={{ marginTop: 22, marginLeft: 'auto', marginRight: 'auto', textWrap: 'pretty' }}>
          Cuando una minera necesita cubrir un turno: el coordinador llama candidatos uno a uno, revisa certificaciones en PDFs adjuntos a correos, genera el contrato en Word, lo imprime, lo firma escaneado. Todo toma entre 3 y 5 días y consume entre 6 y 8 horas de trabajo manual.
        </p>
      </div>
      <div className="problem-grid">
        {[
          { icon: 'clock', t: 'Días de espera', d: 'Turnos sin cobertura mientras se coordinan candidatos por teléfono y WhatsApp.', meta: ['Llamadas + WhatsApp', '3–5 días'] },
          { icon: 'doc', t: 'Certificaciones invisibles', d: 'Un trabajador con cert vencida no entra a portería. El coordinador lo descubre el mismo día.', meta: ['PDFs por correo', 'Sin alertas'] },
          { icon: 'coin', t: 'Overhead silencioso', d: 'Cada contratación consume 6–8 horas de coordinador. A escala, es un costo que nadie mide pero todos absorben.', meta: ['Horas/contratación', '6–8 h'] },
        ].map((c, i) => (
          <div className="card problem-card reveal" key={i} style={{ transitionDelay: (i*80) + 'ms' }}>
            <div className="problem-icon">
              {c.icon === 'clock' && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><polyline points="12 6 12 12 16 14"/></svg>}
              {c.icon === 'doc'   && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="13" x2="12" y2="16"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>}
              {c.icon === 'coin'  && <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>}
            </div>
            <h3>{c.t}</h3>
            <p>{c.d}</p>
            <div className="problem-meta"><span>{c.meta[0]}</span><strong>{c.meta[1]}</strong></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============ PLATFORM TABS ============
const tabs = [
  { id: 'passport', t: 'Krew Passport', d: 'Cada trabajador tiene un perfil digital con todas sus certificaciones verificadas, historial de faenas y QR para portería. Cero papeles.', view: () => <TabPassport /> },
  { id: 'matching', t: 'Matching en horas', d: 'La empresa publica lo que necesita. Krew activa el pool de trabajadores disponibles y certificados. La propuesta llega en horas.', view: () => <TabMatching /> },
  { id: 'compliance', t: 'Cumplimiento automático', d: 'El sistema alerta 30 días antes del vencimiento. Nada llega a portería sin estar vigente.', view: () => <TabCompliance /> },
  { id: 'dotacion', t: 'Dashboard de dotación', d: 'Vista en tiempo real de todos los trabajadores activos — faena, turno, certs, contrato. Sin Excel.', view: () => <TabDotacion /> },
  { id: 'pagos', t: 'Pagos y beneficios', d: 'El trabajador cobra a tiempo. Cotizaciones previsionales garantizadas desde el primer día.', view: () => <TabPagos /> },
];

const Platform = () => {
  const [active, setActive] = useState(0);
  // auto-rotate
  const pauseRef = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!pauseRef.current) setActive(a => (a + 1) % tabs.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="platform" id="plataforma">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <div className="eyebrow">La plataforma</div>
          <h2 className="h2">Una plataforma construida para la operación minera</h2>
        </div>
        <div className="platform-grid"
             onMouseEnter={() => { pauseRef.current = true; }}
             onMouseLeave={() => { pauseRef.current = false; }}>
          <div className="tab-list">
            {tabs.map((t, i) => (
              <button key={t.id} className={'tab' + (active === i ? ' active' : '')} onClick={() => setActive(i)}>
                <div className="tab-num">0{i+1}</div>
                <div className="tab-body">
                  <div className="tab-title">{t.t}</div>
                  <div className="tab-desc">{t.d}</div>
                </div>
              </button>
            ))}
          </div>
          <div className="platform-canvas">
            <div style={{ position: 'relative', zIndex: 1, width: '100%', display:'flex', justifyContent:'center' }}>
              {tabs[active].view()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ STEPPER ============
const HowItWorks = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 3), 3000);
    return () => clearInterval(id);
  }, []);
  const steps = [
    { t: 'Publicás la necesidad', d: 'La empresa carga perfil, certificaciones, turno y faena. Menos de 3 minutos.', meta: 'POST /pedidos' },
    { t: 'Krew activa el match', d: 'El sistema identifica trabajadores disponibles y certificados. Confirmás con un click.', meta: '4 candidatos · 12 min' },
    { t: 'El trabajador entra listo', d: 'Passport verificado. Contrato digital. Cotizaciones activas. En portería: QR, ingresa.', meta: 'QR escaneado · 06:42' },
  ];
  return (
    <section id="como-funciona">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <div className="eyebrow">Cómo funciona</div>
          <h2 className="h2">Tres pasos. Sin integraciones complejas.</h2>
        </div>
        <div className="stepper">
          {steps.map((s, i) => (
            <div key={i} className={'step' + (active === i ? ' active' : '') + (active > i ? ' done' : '')} onMouseEnter={() => setActive(i)}>
              <div className="step-num">{['①','②','③'][i]}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="step-mockup">
                <span style={{ color: '#8a8a8a' }}>→ </span>
                <span style={{ color: '#1A6FFF' }}>{s.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ AUDIENCE ============
const Audience = () => (
  <section id="audiencia">
    <div className="container">
      <div style={{ maxWidth: 760 }}>
        <div className="eyebrow">Para quién es</div>
        <h2 className="h2">Diseñado para los dos lados de la operación</h2>
      </div>
      <div className="audience">
        <div className="audience-col" id="mineras">
          <div className="audience-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 21V7l5-4 5 4v14"/><path d="M13 21V11h8v10"/><line x1="6" y1="10" x2="6" y2="10.01"/><line x1="6" y1="14" x2="6" y2="14.01"/><line x1="6" y1="18" x2="6" y2="18.01"/><line x1="17" y1="15" x2="17" y2="15.01"/><line x1="17" y1="19" x2="17" y2="19.01"/></svg>
          </div>
          <div className="audience-tag">B2B · MINERAS Y CONTRATISTAS</div>
          <h3>Para mineras y contratistas</h3>
          <ul className="check-list">
            {['Colocación en horas, no días','Cumplimiento ante DT y Seremi sin trabajo manual','Visibilidad de dotación transitoria en tiempo real','Menos overhead de coordinación'].map((c, i) => (
              <li key={i}><span className="check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="4 12 10 18 20 6"/></svg></span>{c}</li>
            ))}
          </ul>
          <a className="btn btn-dark" href="#contacto">Conoce la plataforma</a>
        </div>
        <div className="audience-col b" id="trabajadores">
          <div className="audience-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>
          </div>
          <div className="audience-tag">B2C · TRABAJADORES MINEROS</div>
          <h3>Para trabajadores</h3>
          <ul className="check-list">
            {['Tus certificaciones siempre ordenadas','Alertas antes de que venza cualquier documento','Más oportunidades de faena','Pagás en tiempo con cotizaciones garantizadas'].map((c, i) => (
              <li key={i}><span className="check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="4 12 10 18 20 6"/></svg></span>{c}</li>
            ))}
          </ul>
          <a className="btn btn-blue" href="#contacto">Únete al pool</a>
        </div>
      </div>
    </div>
  </section>
);

// ============ METRICS ============
const Metrics = () => {
  const items = [
    { n: '3', unit: 'h', d: 'Tiempo promedio de colocación (vs. 3–5 días)' },
    { n: '30', unit: 'días', d: 'Anticipación de alertas de vencimiento' },
    { n: '100', unit: '%', d: 'Contratos firmados digitalmente' },
    { n: '0', unit: '', d: 'Trabajadores con certificaciones vencidas en portería' },
  ];
  return (
    <section className="metrics" id="metricas">
      <div className="container">
        <div style={{ maxWidth: 760 }}>
          <div className="eyebrow">Resultados</div>
          <h2 className="h2">Lo que cambia cuando el proceso es digital</h2>
        </div>
        <div className="metrics-grid">
          {items.map((m, i) => (
            <div className="metric" key={i}>
              <div className="metric-num">{m.n}<span className="unit">{m.unit}</span></div>
              <div className="metric-label">{m.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ CONTACT ============
const Contact = () => {
  const [form, setForm] = useState({ nombre: '', empresa: '', rol: '', email: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = k => e => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: null });
  };

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = 'Requerido';
    if (!form.empresa.trim()) e.empresa = 'Requerido';
    if (!form.rol.trim()) e.rol = 'Requerido';
    if (!form.email.trim()) e.email = 'Requerido';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email inválido';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setDone(true); }, 700);
  };

  return (
    <section id="contacto">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Contacto</div>
        <h2 className="h2" style={{ margin: '0 auto' }}>¿Listo para dejar atrás el Excel y el WhatsApp?</h2>
        <p className="lead" style={{ marginTop: 22, marginLeft: 'auto', marginRight: 'auto' }}>
          Contanos cómo operás hoy y te mostramos cómo Krew lo simplifica.
        </p>
        <div className="contact-wrap">
          {done ? (
            <div className="form-success">
              <div className="form-success-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="4 12 10 18 20 6"/></svg>
              </div>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 20, letterSpacing: '-0.01em' }}>Gracias, {form.nombre.split(' ')[0]}.</div>
              <div style={{ marginTop: 8, color: '#555', fontSize: 14 }}>Nos contactamos en menos de 24 horas.</div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              {[
                { k: 'nombre',  l: 'Nombre completo',  p: 'María González' },
                { k: 'empresa', l: 'Empresa',          p: 'Minera o contratista' },
                { k: 'rol',     l: 'Rol / Cargo',      p: 'Gerente RRHH, Coordinador, etc.' },
                { k: 'email',   l: 'Email corporativo', p: 'maria@minera.cl' },
              ].map(f => (
                <div key={f.k} className="form-row" style={{ textAlign: 'left' }}>
                  <label htmlFor={f.k}>{f.l}</label>
                  <input id={f.k} type={f.k === 'email' ? 'email' : 'text'} placeholder={f.p}
                         value={form[f.k]} onChange={update(f.k)}
                         className={errors[f.k] ? 'error' : ''} />
                  {errors[f.k] && <span className="err-msg">{errors[f.k]}</span>}
                </div>
              ))}
              <button className="submit" type="submit" disabled={submitting}>
                {submitting ? 'Enviando…' : 'Enviar'}
                {!submitting && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 5 19 12 13 19"/></svg>}
              </button>
              <div className="form-note">Nos contactamos en menos de 24 horas.</div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

// ============ FOOTER ============
const Footer = () => (
  <footer>
    <div className="container footer-inner">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <a className="logo" href="#top">
          <span className="logo-mark"><KrewLogo size={20} /></span>
          <span className="logo-word" style={{ fontSize: 18 }}>KREW</span>
        </a>
        <span style={{ width: 1, height: 16, background: '#E8E8EA' }}></span>
        <span className="footer-tag">La plataforma de contratación minera</span>
      </div>
      <div className="footer-right">
        <a href="#" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93s-1.62.62-1.62 2v4.67h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.4.86 3.4 3.66z"/></svg>
          LinkedIn
        </a>
        <span>© Krew 2026</span>
      </div>
    </div>
  </footer>
);

// ============ APP ============
const App = () => {
  // Scroll-reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => {
      if (!el.classList.contains('in')) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <div className="divider container" style={{ height: 0, borderTop: '1px solid var(--line)' }}></div>
      <Problem />
      <Platform />
      <HowItWorks />
      <Audience />
      <Metrics />
      <Contact />
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
