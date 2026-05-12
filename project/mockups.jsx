// Visual mockups for KREW landing — Krew Passport phone, dashboards, etc.

const KrewLogo = ({ size = 24, color = '#0A0A0A' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* vertical bar */}
    <rect x="2" y="2" width="4" height="20" fill={color} />
    {/* upper diagonal */}
    <path d="M22 2 L18 2 L6 11 L6 13.2 Z" fill={color} />
    {/* lower diagonal */}
    <path d="M6 10.8 L6 13 L18 22 L22 22 Z" fill={color} />
  </svg>
);

// =================== PHONE: KREW PASSPORT ===================
const PassportPhone = () => {
  const certs = [
    { name: 'ACHS — Curso Alturas', state: 'ok', exp: 'Vence 03/2027' },
    { name: 'Sence — Op. Cargador Frontal', state: 'ok', exp: 'Vence 11/2026' },
    { name: 'Inducción Minera General', state: 'ok', exp: 'Vence 08/2026' },
    { name: 'Licencia D — Conducción', state: 'warn', exp: 'Vence en 14 días' },
  ];
  return (
    <div className="phone-screen" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* status bar */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'14px 22px 6px', fontSize: 11, fontWeight: 600, color: '#0A0A0A', fontFamily: 'Inter' }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span style={{ fontSize: 10 }}>•••</span>
          <svg width="14" height="10" viewBox="0 0 14 10"><path d="M1 9 L3 7 M5 9 L7 5 M9 9 L11 3" stroke="#0A0A0A" strokeWidth="1.4" strokeLinecap="round" fill="none"/></svg>
          <svg width="18" height="10" viewBox="0 0 18 10"><rect x="0.5" y="1.5" width="14" height="7" rx="2" stroke="#0A0A0A" fill="none"/><rect x="2" y="3" width="11" height="4" fill="#0A0A0A"/><rect x="15" y="3.5" width="1.5" height="3" fill="#0A0A0A"/></svg>
        </span>
      </div>

      {/* dark header */}
      <div style={{ background: 'linear-gradient(140deg, #0B2A6B, #143E9E)', color: 'white', padding: '20px 22px 56px', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <KrewLogo size={16} color="#ffffff" />
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 13, letterSpacing: '-0.02em' }}>KREW</span>
            <span style={{ fontSize: 10, opacity: 0.6, fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Passport</span>
          </div>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>
          </div>
        </div>
      </div>

      {/* card */}
      <div style={{ padding: '0 16px', marginTop: -40 }}>
        <div style={{ background: 'white', borderRadius: 18, padding: 18, boxShadow: '0 12px 30px -12px rgba(11,42,107,0.25)' }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #1A6FFF, #0B2A6B)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' }}>PC</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 16, color: '#0A0A0A', letterSpacing: '-0.01em' }}>Pedro Contreras</div>
              <div style={{ fontSize: 12, color: '#555' }}>Supervisor · Turno A</div>
              <div style={{ fontSize: 10, color: '#8a8a8a', fontFamily: 'JetBrains Mono', marginTop: 4, letterSpacing: '0.04em' }}>RUT 14.892.341-K</div>
            </div>
          </div>

          {/* faena pill */}
          <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 10, padding: '4px 8px', borderRadius: 999, background: '#EAF1FF', color: '#1A6FFF', fontWeight: 500, fontFamily: 'JetBrains Mono' }}>FAENA EL TENIENTE</span>
            <span style={{ fontSize: 10, padding: '4px 8px', borderRadius: 999, background: '#F0F0F2', color: '#555', fontWeight: 500, fontFamily: 'JetBrains Mono' }}>7×7</span>
          </div>
        </div>

        {/* certifications */}
        <div style={{ marginTop: 16, fontSize: 11, fontWeight: 600, color: '#8a8a8a', fontFamily: 'JetBrains Mono', letterSpacing: '0.08em', padding: '0 4px' }}>
          CERTIFICACIONES
        </div>
        <div style={{ marginTop: 8, background: 'white', borderRadius: 14, overflow: 'hidden', boxShadow: '0 1px 0 #E8E8EA' }}>
          {certs.map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: i < certs.length-1 ? '1px solid #F0F0F2' : 'none' }}>
              <div style={{
                width: 22, height: 22, borderRadius: 7, flexShrink: 0,
                display:'flex', alignItems:'center', justifyContent:'center',
                background: c.state === 'ok' ? '#DCFCE7' : '#FEF3C7',
                color: c.state === 'ok' ? '#16A34A' : '#B45309'
              }}>
                {c.state === 'ok'
                  ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="4 12 10 18 20 6"/></svg>
                  : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="16" x2="12" y2="16.5"/><path d="M12 3 L22 20 L2 20 Z"/></svg>}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#0A0A0A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                <div style={{ fontSize: 10, color: c.state === 'ok' ? '#8a8a8a' : '#B45309', fontFamily: 'JetBrains Mono', marginTop: 1 }}>{c.exp}</div>
              </div>
            </div>
          ))}
        </div>

        {/* QR */}
        <div style={{ marginTop: 14, background: 'white', borderRadius: 14, padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 60, height: 60, background: 'white', borderRadius: 8, padding: 4, border: '1px solid #E8E8EA' }}>
            <QRPattern />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0A0A0A', fontFamily: 'Space Grotesk' }}>Escanear en portería</div>
            <div style={{ fontSize: 10, color: '#8a8a8a', marginTop: 2 }}>Válido hasta 23:59 hoy</div>
            <div style={{ fontSize: 9, color: '#1A6FFF', fontFamily: 'JetBrains Mono', marginTop: 4, letterSpacing: '0.04em' }}>● ACTIVO</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Procedural QR-like pattern
const QRPattern = () => {
  const cells = React.useMemo(() => {
    const arr = [];
    const seed = 17;
    for (let r = 0; r < 12; r++) {
      for (let c = 0; c < 12; c++) {
        // 3 corner finder squares
        const corner =
          (r < 3 && c < 3) || (r < 3 && c > 8) || (r > 8 && c < 3);
        const cornerInner = (r === 1 && c >= 1 && c <= 1) || false;
        if (corner) {
          const onEdge = r === 0 || c === 0 || r === 2 || c === 2 ||
            (r === 0 || c === 0 || r === 2 || c === 11 || c === 8) && false;
          const isEdge =
            ((r < 3 && c < 3) && (r === 0 || c === 0 || r === 2 || c === 2)) ||
            ((r < 3 && c > 8) && (r === 0 || c === 9 || r === 2 || c === 11)) ||
            ((r > 8 && c < 3) && (r === 9 || c === 0 || r === 11 || c === 2));
          const isCenter =
            ((r < 3 && c < 3) && r === 1 && c === 1) ||
            ((r < 3 && c > 8) && r === 1 && c === 10) ||
            ((r > 8 && c < 3) && r === 10 && c === 1);
          arr.push(isEdge || isCenter ? 1 : 0);
        } else {
          const v = Math.sin(r * 7.3 + c * 3.1 + seed) * 1000;
          arr.push(Math.floor(Math.abs(v)) % 2);
        }
      }
    }
    return arr;
  }, []);
  return (
    <svg viewBox="0 0 12 12" width="100%" height="100%" shapeRendering="crispEdges">
      {cells.map((v, i) => v ? <rect key={i} x={i%12} y={Math.floor(i/12)} width="1" height="1" fill="#0A0A0A" /> : null)}
    </svg>
  );
};

// =================== TAB MOCKUPS ===================

// Tab 1 — passport on phone (compact, centered)
const TabPassport = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, width: '100%' }}>
    <div style={{ flex: 1, maxWidth: 280 }}>
      <div className="pill dot" style={{ marginBottom: 12 }}>Verificado</div>
      <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.01em' }}>Identidad y certificaciones, en el bolsillo del trabajador.</div>
      <div style={{ marginTop: 12, fontSize: 14, color: '#555', lineHeight: 1.55 }}>
        Verificación cruzada con organismos. QR firmado, expira diariamente. Sin papel impreso.
      </div>
      <div style={{ marginTop: 20, fontFamily: 'JetBrains Mono', fontSize: 11, color: '#8a8a8a', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div>↳ ACHS · OS-10 · Sence · DT</div>
        <div>↳ QR con expiración 24h</div>
        <div>↳ Auditoría firmada</div>
      </div>
    </div>
    <div className="phone" style={{ width: 240, height: 490, padding: 10, borderRadius: 34 }}>
      <div className="phone-screen" style={{ borderRadius: 26 }}>
        <PassportMini />
      </div>
    </div>
  </div>
);

const PassportMini = () => (
  <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <div style={{ background: 'linear-gradient(140deg, #0B2A6B, #143E9E)', padding: '20px 16px 36px', color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <KrewLogo size={12} color="white" />
        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 11 }}>KREW</span>
      </div>
    </div>
    <div style={{ padding: '0 12px', marginTop: -24 }}>
      <div style={{ background: 'white', borderRadius: 14, padding: 12, boxShadow: '0 12px 24px -12px rgba(11,42,107,0.3)' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #1A6FFF, #0B2A6B)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14 }}>PC</div>
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 13 }}>Pedro Contreras</div>
            <div style={{ fontSize: 10, color: '#555' }}>Supervisor · Turno A</div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 10, background: 'white', borderRadius: 12, overflow: 'hidden' }}>
        {['ACHS', 'Sence', 'Inducción Minera', 'Licencia D'].map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderBottom: i < 3 ? '1px solid #F0F0F2' : 'none' }}>
            <div style={{ width: 16, height: 16, borderRadius: 5, background: i === 3 ? '#FEF3C7' : '#DCFCE7', color: i === 3 ? '#B45309' : '#16A34A', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="4 12 10 18 20 6"/></svg>
            </div>
            <div style={{ fontSize: 11, fontWeight: 500 }}>{c}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, background: 'white', borderRadius: 12, padding: 10, display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ width: 44, height: 44, padding: 3, border: '1px solid #E8E8EA', borderRadius: 6 }}>
          <QRPattern />
        </div>
        <div>
          <div style={{ fontSize: 10, fontWeight: 600 }}>Portería</div>
          <div style={{ fontSize: 9, color: '#1A6FFF', fontFamily: 'JetBrains Mono' }}>● ACTIVO</div>
        </div>
      </div>
    </div>
  </div>
);

// Tab 2 — matching dashboard
const TabMatching = () => {
  const candidates = [
    { name: 'María González', rol: 'Op. Camión 793F', match: 98, dist: '12 km', avail: 'Disponible hoy', avatar: 'MG' },
    { name: 'Juan Pérez', rol: 'Op. Camión 793F', match: 94, dist: '38 km', avail: 'Disponible mañana', avatar: 'JP' },
    { name: 'Carlos Soto', rol: 'Op. Camión 793F', match: 89, dist: '54 km', avail: 'Disponible hoy', avatar: 'CS' },
    { name: 'Diego Ramírez', rol: 'Op. Camión 793F', match: 86, dist: '21 km', avail: 'Disponible 14/05', avatar: 'DR' },
  ];
  return (
    <div className="laptop">
      <div className="laptop-screen">
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{ width: 56, background: '#0A0A0A', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '14px 0', gap: 14 }}>
            <KrewLogo size={20} color="white" />
            {['•', '•', '•', '•'].map((_, i) => (
              <div key={i} style={{ width: 28, height: 28, borderRadius: 8, background: i === 1 ? '#1A6FFF' : 'transparent', opacity: i === 1 ? 1 : 0.4 }} />
            ))}
          </div>
          <div style={{ flex: 1, padding: '18px 22px', minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, color: '#8a8a8a', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Pedido #4821 · El Teniente</div>
                <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 18, marginTop: 2, letterSpacing: '-0.01em' }}>Operador Camión 793F — Turno 7×7</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <span className="pill dot" style={{ fontSize: 10, padding: '4px 10px' }}>4 matches</span>
                <button style={{ background: '#1A6FFF', color: 'white', fontSize: 11, padding: '6px 12px', borderRadius: 999, fontWeight: 600 }}>Activar pool</button>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
              {['ACHS vigente', 'Sence Op. Camión', 'Lic. D', '< 60 km', 'Hist. faena'].map(f => (
                <span key={f} style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: '#EAF1FF', color: '#1A6FFF', fontFamily: 'JetBrains Mono' }}>{f}</span>
              ))}
            </div>
            <div style={{ marginTop: 14, border: '1px solid #E8E8EA', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.4fr 0.9fr 1.2fr 0.7fr', gap: 0, padding: '8px 14px', background: '#FAFBFD', fontSize: 9, color: '#8a8a8a', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #E8E8EA' }}>
                <div>Trabajador</div><div>Match</div><div>Distancia</div><div>Disponibilidad</div><div></div>
              </div>
              {candidates.map((c, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.4fr 0.9fr 1.2fr 0.7fr', alignItems: 'center', gap: 0, padding: '10px 14px', borderBottom: i < candidates.length-1 ? '1px solid #F0F0F2' : 'none', fontSize: 11 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#0A0A0A', color: 'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize: 10, fontWeight: 600, fontFamily: 'Space Grotesk' }}>{c.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 600 }}>{c.name}</div>
                      <div style={{ color: '#8a8a8a', fontSize: 10 }}>{c.rol}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 80, height: 5, background: '#F0F0F2', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: c.match + '%', height: '100%', background: '#1A6FFF' }} />
                    </div>
                    <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 600, color: '#1A6FFF' }}>{c.match}%</div>
                  </div>
                  <div style={{ color: '#555' }}>{c.dist}</div>
                  <div style={{ color: '#16A34A', fontSize: 11 }}>{c.avail}</div>
                  <div style={{ textAlign: 'right' }}>
                    <button style={{ background: i === 0 ? '#0A0A0A' : 'white', color: i === 0 ? 'white' : '#0A0A0A', border: i === 0 ? 'none' : '1px solid #E8E8EA', fontSize: 10, padding: '5px 10px', borderRadius: 999, fontWeight: 600 }}>{i === 0 ? 'Confirmar' : 'Ver'}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="laptop-base"></div>
    </div>
  );
};

// Tab 3 — Compliance with traffic light
const TabCompliance = () => {
  const rows = [
    { trab: 'María González', cert: 'ACHS — Alturas', state: 'green', days: 'Vence 03/2027', label: 'Vigente' },
    { trab: 'Juan Pérez', cert: 'Inducción Minera', state: 'amber', days: 'Vence en 18 días', label: 'Atención' },
    { trab: 'Carlos Soto', cert: 'Licencia D', state: 'green', days: 'Vence 11/2026', label: 'Vigente' },
    { trab: 'Diego Ramírez', cert: 'Sence Op. Camión', state: 'amber', days: 'Vence en 9 días', label: 'Atención' },
    { trab: 'Luis Vargas', cert: 'OS-10', state: 'red', days: 'Vencido hace 2 días', label: 'Bloqueado' },
  ];
  const colors = {
    green: { bg: '#DCFCE7', fg: '#16A34A' },
    amber: { bg: '#FEF3C7', fg: '#B45309' },
    red: { bg: '#FEE2E2', fg: '#DC2626' },
  };
  return (
    <div style={{ width: '100%', maxWidth: 640 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: '#8a8a8a', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Cumplimiento · Dotación activa</div>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 22, marginTop: 4 }}>148 trabajadores monitoreados</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
        <div style={{ flex: 1, padding: 12, border: '1px solid #E8E8EA', borderRadius: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#16A34A' }} /><span style={{ fontSize: 11, color: '#8a8a8a' }}>Vigentes</span></div>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 26, marginTop: 6 }}>132</div>
        </div>
        <div style={{ flex: 1, padding: 12, border: '1px solid #E8E8EA', borderRadius: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFB800' }} /><span style={{ fontSize: 11, color: '#8a8a8a' }}>Por vencer 30d</span></div>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 26, marginTop: 6 }}>15</div>
        </div>
        <div style={{ flex: 1, padding: 12, border: '1px solid #E8E8EA', borderRadius: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#DC2626' }} /><span style={{ fontSize: 11, color: '#8a8a8a' }}>Bloqueados</span></div>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 26, marginTop: 6, color: '#DC2626' }}>1</div>
        </div>
      </div>
      <div style={{ border: '1px solid #E8E8EA', borderRadius: 12, overflow: 'hidden', background: 'white' }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr auto', gap: 12, padding: '12px 16px', alignItems: 'center', borderBottom: i < rows.length-1 ? '1px solid #F0F0F2' : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: colors[r.state].fg, boxShadow: '0 0 0 3px ' + colors[r.state].bg }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{r.trab}</div>
                <div style={{ fontSize: 11, color: '#8a8a8a' }}>{r.cert}</div>
              </div>
            </div>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#555' }}>{r.days}</div>
            <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: colors[r.state].bg, color: colors[r.state].fg, fontWeight: 600 }}>{r.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Tab 4 — Dashboard de dotación
const TabDotacion = () => {
  const rows = [
    { t: 'María González', f: 'El Teniente', tu: '7×7 · A', certs: 'OK', e: 'En faena' },
    { t: 'Juan Pérez', f: 'Los Bronces', tu: '14×14 · B', certs: 'OK', e: 'En faena' },
    { t: 'Carlos Soto', f: 'El Teniente', tu: '7×7 · A', certs: 'OK', e: 'En tránsito' },
    { t: 'Diego Ramírez', f: 'Chuquicamata', tu: '4×3 · C', certs: 'Vence 9d', e: 'En faena' },
    { t: 'Luis Vargas', f: 'Andina', tu: '7×7 · A', certs: 'OK', e: 'Descanso' },
    { t: 'Sofía Núñez', f: 'El Teniente', tu: '7×7 · B', certs: 'OK', e: 'En faena' },
  ];
  return (
    <div className="laptop">
      <div className="laptop-screen">
        <div style={{ padding: '14px 18px', borderBottom: '1px solid #F0F0F2', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <KrewLogo size={16} />
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 14 }}>KREW</span>
            <span style={{ fontSize: 10, color: '#8a8a8a', fontFamily: 'JetBrains Mono', marginLeft: 6 }}>/ dotación</span>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['Hoy', 'Semana', 'Mes'].map((b, i) => (
              <span key={b} style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: i === 0 ? '#0A0A0A' : '#F5F5F5', color: i === 0 ? 'white' : '#555', fontWeight: 500 }}>{b}</span>
            ))}
          </div>
        </div>
        <div style={{ padding: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 1fr 1fr 1fr', padding: '8px 14px', fontSize: 9, color: '#8a8a8a', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <div>Trabajador</div><div>Faena</div><div>Turno</div><div>Certs</div><div>Estado</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 1fr 1fr 1fr', alignItems: 'center', padding: '10px 14px', borderTop: '1px solid #F0F0F2', fontSize: 11 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#EAF1FF', color: '#1A6FFF', fontSize: 9, fontWeight: 600, display:'flex', alignItems:'center', justifyContent:'center', fontFamily: 'Space Grotesk' }}>{r.t.split(' ').map(p=>p[0]).join('')}</div>
                <span style={{ fontWeight: 500 }}>{r.t}</span>
              </div>
              <div style={{ color: '#555' }}>{r.f}</div>
              <div style={{ color: '#555' }}>{r.tu}</div>
              <div>
                <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 999, background: r.certs === 'OK' ? '#DCFCE7' : '#FEF3C7', color: r.certs === 'OK' ? '#16A34A' : '#B45309', fontWeight: 600 }}>{r.certs}</span>
              </div>
              <div>
                <span style={{ fontSize: 10, color: r.e === 'En faena' ? '#16A34A' : r.e === 'En tránsito' ? '#1A6FFF' : '#8a8a8a', fontWeight: 600 }}>● {r.e}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="laptop-base"></div>
    </div>
  );
};

// Tab 5 — Payments mobile app
const TabPagos = () => {
  const pagos = [
    { f: 'El Teniente', d: '14 días · turno A', m: '$1.480.000', e: 'Pagado' },
    { f: 'Los Bronces', d: '7 días · turno B', m: '$740.000', e: 'Pagado' },
    { f: 'Chuquicamata', d: '21 días · turno A', m: '$2.205.000', e: 'En proceso' },
    { f: 'Andina', d: '7 días · turno A', m: '$740.000', e: 'Pagado' },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32, justifyContent: 'center' }}>
      <div style={{ flex: 1, maxWidth: 280 }}>
        <div className="pill dot" style={{ marginBottom: 12 }}>Cotizaciones al día</div>
        <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.01em' }}>El trabajador cobra a tiempo. Siempre.</div>
        <div style={{ marginTop: 12, fontSize: 14, color: '#555', lineHeight: 1.55 }}>
          AFP, salud y seguro de accidentes garantizados desde el primer turno. Historial verificable.
        </div>
      </div>
      <div className="phone" style={{ width: 240, height: 490, padding: 10, borderRadius: 34 }}>
        <div className="phone-screen" style={{ borderRadius: 26 }}>
          <div style={{ padding: '20px 16px 12px', background: 'linear-gradient(140deg, #0B2A6B, #143E9E)', color: 'white' }}>
            <div style={{ fontSize: 10, opacity: 0.7, fontFamily: 'JetBrains Mono' }}>SALDO PERIODO</div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: 26, marginTop: 4 }}>$5.165.000</div>
            <div style={{ fontSize: 10, opacity: 0.7, marginTop: 4 }}>Acumulado 2026 · líquido pagado</div>
          </div>
          <div style={{ padding: 12 }}>
            <div style={{ fontSize: 10, color: '#8a8a8a', fontFamily: 'JetBrains Mono', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Últimas faenas</div>
            {pagos.map((p, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: i < pagos.length-1 ? '1px solid #F0F0F2' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{p.f}</div>
                  <div style={{ fontSize: 10, color: '#8a8a8a' }}>{p.d}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, fontFamily: 'JetBrains Mono' }}>{p.m}</div>
                  <div style={{ fontSize: 9, color: p.e === 'Pagado' ? '#16A34A' : '#B45309', fontWeight: 600 }}>● {p.e}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, {
  KrewLogo, PassportPhone, QRPattern,
  TabPassport, TabMatching, TabCompliance, TabDotacion, TabPagos,
});
