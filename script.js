<<<<<<< HEAD
/* ─────────────────────────────────────────────────
   EMAILJS CONFIG
───────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = 'RmM228z-NvcK9grqf';
const EMAILJS_SERVICE_ID  = 'service_mdw85pe';
const EMAILJS_TEMPLATE_ID = 'template_lnhsakv';

emailjs.init({publicKey: EMAILJS_PUBLIC_KEY});

function sendEmail(){
  const name    = document.getElementById('from_name').value.trim();
  const email   = document.getElementById('from_email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgEl   = document.getElementById('form-msg');

  if(!name||!email||!message){
    msgEl.className='form-msg error';
    msgEl.textContent='Please fill in all fields.';return;
  }

  const btn = document.querySelector('.btn-send');
  btn.textContent='Sending…';btn.disabled=true;

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
    {name:name,email:email,message:message}, {publicKey: EMAILJS_PUBLIC_KEY})
  .then(()=>{
    msgEl.className='form-msg success';
    msgEl.textContent='Message sent! I\'ll get back to you soon 🎉';
    document.getElementById('from_name').value='';
    document.getElementById('from_email').value='';
    document.getElementById('message').value='';
    btn.textContent='Send Message →';btn.disabled=false;
  }).catch((err)=>{
    console.log('EmailJS error:', JSON.stringify(err));
    msgEl.className='form-msg error';
    msgEl.textContent='Oops! Something went wrong. Please email me directly.';
    btn.textContent='Send Message →';btn.disabled=false;
  });
}

/* ── CURSOR ── */
const cur=document.getElementById('cur'),ring=document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function animCur(){
  cur.style.left=mx+'px';cur.style.top=my+'px';
  rx+=(mx-rx)*.1;ry+=(my-ry)*.1;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(animCur);
})();
document.querySelectorAll('a,button,[data-tilt]').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.classList.add('big'));
  el.addEventListener('mouseleave',()=>cur.classList.remove('big'));
});

/* ── PARTICLES ── */
(function spawnParticles(){
  const container=document.getElementById('particles');
  for(let i=0;i<28;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size=Math.random()*4+1;
    p.style.cssText=`
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      bottom:${Math.random()*-20}%;
      --drift:${(Math.random()-0.5)*120}px;
      animation-duration:${Math.random()*20+12}s;
      animation-delay:${Math.random()*15}s;
      opacity:${Math.random()*.6+.1};
    `;
    container.appendChild(p);
  }
})();

/* ── SCROLL REVEAL ── */
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revObs.unobserve(e.target);}});
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));

/* ── ACTIVE NAV ── */
const sections=document.querySelectorAll('section[id],div[id]');
const navLinks=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur2='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-120)cur2=s.id;});
  navLinks.forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+cur2);
  });
},{ passive:true });

/* ── TILT ON PROJECT CARDS ── */
document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width-.5)*12;
    const y=((e.clientY-r.top)/r.height-.5)*-12;
    card.style.transform=`perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='perspective(800px) rotateX(0) rotateY(0) translateY(0)';
  });
});

/* ── FLOATING CERTIFICATES ── */
const CERTS = [
  {
    emoji:'🎓', name:'Foundation in Programming and Data Science',
    issuer:'IIT Madras',
    desc:'Covered foundational programming concepts and data science fundamentals through IIT Madras\'s online program.',
    img:'iitm.jpg',
    link:'https://drive.google.com/file/d/1Y0dxl3m7i0XyeOs-VNLMCT-mbQACF-ax/view?usp=sharing'
  },
  {
    emoji:'☁️', name:'Salesforce Certified Agentforce Specialist',
    issuer:'Salesforce',
    desc:'Earned Salesforce\'s Agentforce Specialist certification covering AI-powered CRM and automation workflows.',
    img:'salesforce.png', link:'https://drive.google.com/file/d/1bUXuLp2Sz00ahxtznMfA7pbccb2bAEVQ/view?usp=sharing'
  },
  {
    emoji:'💻', name:'Smart Coder Certificate',
    issuer:'Smart Interviews',
    desc:'Recognized for strong problem-solving skills and coding proficiency through Smart Interviews\' assessment program.',
    img:'smartinterviews.png', link:'https://smartinterviews.in/certificate/c6667e80'
  },
  {
    emoji:'📊', name:'Python for Data Science',
    issuer:'NPTEL',
    desc:'Completed NPTEL Python for Data Science course covering data manipulation, visualization, and analysis.',
    img:'nptel-pds.jpg', link:'https://drive.google.com/file/d/1dFn1UFN2AS2yCDkz9K528JsfBQ9982ga/view?usp=sharing'
  },
  {
    emoji:'🔢', name:'Data Structures and Algorithms in Python',
    issuer:'NPTEL',
    desc:'Mastered DSA concepts including arrays, trees, graphs, sorting and searching algorithms using Python.',
    img:'nptel-pydsa.jpg', link:'https://drive.google.com/file/d/1x70qYKetUYQJC-lU2dywe6gx1V3ONECA/view?usp=sharing'
  },
  {
    emoji:'☕', name:'Programming in Java',
    issuer:'NPTEL',
    desc:'Completed NPTEL\'s Java programming course covering OOP, collections, exception handling, and more.',
    img:'nptel-java.jpg', link:'https://drive.google.com/file/d/1u_TtGirfim-4jYtacGtUY3k2qNurmd48/view?usp=sharing'
  },
  {
    emoji:'⚙️', name:'Programming Essentials in C',
    issuer:'Cisco',
    desc:'Learned core C programming concepts including pointers, memory management, and structured programming through Cisco.',
    img:'cisco-c.jpg', link:'https://drive.google.com/file/d/10LJZavqUiHtsdRr0S1GAJGwwAYGTrCQd/view?usp=sharing'
  },
  {
    emoji:'🐍', name:'Python (Basic)',
    issuer:'HackerRank',
    desc:'Verified Python fundamentals including data types, control flow, functions, and basic OOP on HackerRank.',
    img:'hackerrank-python.jpg', link:'https://drive.google.com/file/d/1dAcIAIkWbflmkkgo0K0WWTd51bWi769A/view?usp=sharing'
  },
  {
    emoji:'🗄️', name:'SQL (Basic)',
    issuer:'HackerRank',
    desc:'Demonstrated SQL skills including SELECT queries, JOINs, aggregations, and filtering on HackerRank.',
    img:'sql.jpg', link:'https://drive.google.com/file/d/1Mvsf2HwgD6YMVnKIADHcwSVcUkibIAaR/view?usp=sharing'
  }
];

(function initFloatingCerts(){
  const arena = document.getElementById('certArena');
  if(!arena) return;

  const W = () => arena.clientWidth;
  const H = () => arena.clientHeight;
  const CARD_W = 160, CARD_H = 110;
  const PADDING = 20;


  const state = CERTS.map(()=>({
    x: PADDING + Math.random() * (W() - CARD_W - PADDING*2),
    y: PADDING + Math.random() * (H() - CARD_H - PADDING*2),
    vx: (Math.random()-0.5) * 0.5,
    vy: (Math.random()-0.5) * 0.5,
    paused: false
  }));

  const nodes = CERTS.map((c,i)=>{
    const el = document.createElement('div');
    el.className = 'fcert';
    el.innerHTML = `
      <span class="fcert-emoji">${c.emoji}</span>
      <div class="fcert-info">
        <div class="fcert-name">${c.name}</div>
        <div class="fcert-issuer">${c.issuer}</div>
      </div>`;
    el.addEventListener('click',()=>openPanel(i, el));
    el.addEventListener('mouseenter',()=>{ state[i].paused=true; el.style.transform='scale(1.05)'; });
    el.addEventListener('mouseleave',()=>{ state[i].paused=false; el.style.transform=''; });
    arena.appendChild(el);
    return el;
  });

  const panel    = document.getElementById('certPanel');
  const closeBtn = document.getElementById('certPanelClose');
  let activeIdx  = -1;

  function openPanel(i, el){
    if(activeIdx !== -1){
      nodes[activeIdx].classList.remove('active');
    }
    activeIdx = i;
    el.classList.add('active');
    el.style.transform = `scale(1.05)`;

    const c = CERTS[i];
    document.getElementById('panelIssuer').textContent = c.issuer;
    document.getElementById('panelName').textContent   = c.name;
    document.getElementById('panelDesc').textContent   = c.desc;
    document.getElementById('panelEmoji').textContent  = c.emoji;

    const link = document.getElementById('panelLink');
    link.href  = c.link;
    link.style.opacity      = c.link === '#' ? '0.4' : '1';
    link.style.pointerEvents= c.link === '#' ? 'none' : 'auto';
    link.textContent        = c.link === '#' ? 'Drive Link Not Set Yet' : 'View Certificate ↗';

    const img = document.getElementById('panelImg');
    const ph  = document.getElementById('panelPlaceholder');
    if(c.img){ img.src=c.img; img.style.display='block'; ph.style.display='none'; }
    else      { img.style.display='none'; ph.style.display='flex'; }

    panel.classList.add('open');
    setTimeout(()=>panel.scrollIntoView({behavior:'smooth',block:'nearest'}),50);
  }

  closeBtn.addEventListener('click',()=>{
    panel.classList.remove('open');
    if(activeIdx !== -1){ nodes[activeIdx].classList.remove('active'); nodes[activeIdx].style.transform=''; activeIdx=-1; }
  });

  let rafId;
  function animate(){
    const aw=W(), ah=H();
    state.forEach((s,i)=>{
      if(s.paused) return;
      s.x += s.vx; s.y += s.vy;
      if(s.x < PADDING)            { s.x=PADDING;            s.vx*=-1; }
      if(s.y < PADDING)            { s.y=PADDING;            s.vy*=-1; }
      if(s.x > aw-CARD_W-PADDING)  { s.x=aw-CARD_W-PADDING; s.vx*=-1; }
      if(s.y > ah-CARD_H-PADDING)  { s.y=ah-CARD_H-PADDING; s.vy*=-1; }
      nodes[i].style.left = s.x+'px';
      nodes[i].style.top  = s.y+'px';
    });
    rafId = requestAnimationFrame(animate);
  }

  const certSection = document.getElementById('certifications');
  const visObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) animate();
      else cancelAnimationFrame(rafId);
    });
  },{threshold:0.1});
  visObs.observe(certSection);
=======
/* ─────────────────────────────────────────────────
   EMAILJS CONFIG
───────────────────────────────────────────────── */
const EMAILJS_PUBLIC_KEY  = 'RmM228z-NvcK9grqf';
const EMAILJS_SERVICE_ID  = 'service_mdw85pe';
const EMAILJS_TEMPLATE_ID = 'template_lnhsakv';

emailjs.init({publicKey: EMAILJS_PUBLIC_KEY});

function sendEmail(){
  const name    = document.getElementById('from_name').value.trim();
  const email   = document.getElementById('from_email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msgEl   = document.getElementById('form-msg');

  if(!name||!email||!message){
    msgEl.className='form-msg error';
    msgEl.textContent='Please fill in all fields.';return;
  }

  const btn = document.querySelector('.btn-send');
  btn.textContent='Sending…';btn.disabled=true;

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
    {name:name,email:email,message:message}, {publicKey: EMAILJS_PUBLIC_KEY})
  .then(()=>{
    msgEl.className='form-msg success';
    msgEl.textContent='Message sent! I\'ll get back to you soon 🎉';
    document.getElementById('from_name').value='';
    document.getElementById('from_email').value='';
    document.getElementById('message').value='';
    btn.textContent='Send Message →';btn.disabled=false;
  }).catch((err)=>{
    console.log('EmailJS error:', JSON.stringify(err));
    msgEl.className='form-msg error';
    msgEl.textContent='Oops! Something went wrong. Please email me directly.';
    btn.textContent='Send Message →';btn.disabled=false;
  });
}

/* ── CURSOR ── */
const cur=document.getElementById('cur'),ring=document.getElementById('curRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function animCur(){
  cur.style.left=mx+'px';cur.style.top=my+'px';
  rx+=(mx-rx)*.1;ry+=(my-ry)*.1;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(animCur);
})();
document.querySelectorAll('a,button,[data-tilt]').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.classList.add('big'));
  el.addEventListener('mouseleave',()=>cur.classList.remove('big'));
});

/* ── PARTICLES ── */
(function spawnParticles(){
  const container=document.getElementById('particles');
  for(let i=0;i<28;i++){
    const p=document.createElement('div');
    p.className='particle';
    const size=Math.random()*4+1;
    p.style.cssText=`
      width:${size}px;height:${size}px;
      left:${Math.random()*100}%;
      bottom:${Math.random()*-20}%;
      --drift:${(Math.random()-0.5)*120}px;
      animation-duration:${Math.random()*20+12}s;
      animation-delay:${Math.random()*15}s;
      opacity:${Math.random()*.6+.1};
    `;
    container.appendChild(p);
  }
})();

/* ── SCROLL REVEAL ── */
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revObs.unobserve(e.target);}});
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>revObs.observe(el));

/* ── ACTIVE NAV ── */
const sections=document.querySelectorAll('section[id],div[id]');
const navLinks=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur2='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-120)cur2=s.id;});
  navLinks.forEach(a=>{
    a.classList.toggle('active',a.getAttribute('href')==='#'+cur2);
  });
},{ passive:true });

/* ── TILT ON PROJECT CARDS ── */
document.querySelectorAll('[data-tilt]').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width-.5)*12;
    const y=((e.clientY-r.top)/r.height-.5)*-12;
    card.style.transform=`perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform='perspective(800px) rotateX(0) rotateY(0) translateY(0)';
  });
});

/* ── FLOATING CERTIFICATES ── */
const CERTS = [
  {
    emoji:'🎓', name:'Foundation in Programming and Data Science',
    issuer:'IIT Madras',
    desc:'Covered foundational programming concepts and data science fundamentals through IIT Madras\'s online program.',
    img:'iitm.jpg',
    link:'https://drive.google.com/file/d/1Y0dxl3m7i0XyeOs-VNLMCT-mbQACF-ax/view?usp=sharing'
  },
  {
    emoji:'☁️', name:'Salesforce Certified Agentforce Specialist',
    issuer:'Salesforce',
    desc:'Earned Salesforce\'s Agentforce Specialist certification covering AI-powered CRM and automation workflows.',
    img:'salesforce.png', link:'https://drive.google.com/file/d/1bUXuLp2Sz00ahxtznMfA7pbccb2bAEVQ/view?usp=sharing'
  },
  {
    emoji:'💻', name:'Smart Coder Certificate',
    issuer:'Smart Interviews',
    desc:'Recognized for strong problem-solving skills and coding proficiency through Smart Interviews\' assessment program.',
    img:'smartinterviews.png', link:'https://smartinterviews.in/certificate/c6667e80'
  },
  {
    emoji:'📊', name:'Python for Data Science',
    issuer:'NPTEL',
    desc:'Completed NPTEL\'s Python for Data Science course covering data manipulation, visualization, and analysis.',
    img:'nptel-pds.jpg', link:'https://drive.google.com/file/d/1dFn1UFN2AS2yCDkz9K528JsfBQ9982ga/view?usp=sharing'
  },
  {
    emoji:'🔢', name:'Data Structures and Algorithms in Python',
    issuer:'NPTEL',
    desc:'Mastered DSA concepts including arrays, trees, graphs, sorting and searching algorithms using Python.',
    img:'nptel-pydsa.jpg', link:'https://drive.google.com/file/d/1x70qYKetUYQJC-lU2dywe6gx1V3ONECA/view?usp=sharing'
  },
  {
    emoji:'☕', name:'Programming in Java',
    issuer:'NPTEL',
    desc:'Completed NPTEL\'s Java programming course covering OOP, collections, exception handling, and more.',
    img:'nptel-java.jpg', link:'https://drive.google.com/file/d/1u_TtGirfim-4jYtacGtUY3k2qNurmd48/view?usp=sharing'
  },
  {
    emoji:'⚙️', name:'Programming Essentials in C',
    issuer:'Cisco',
    desc:'Learned core C programming concepts including pointers, memory management, and structured programming through Cisco.',
    img:'cisco-c.jpg', link:'https://drive.google.com/file/d/10LJZavqUiHtsdRr0S1GAJGwwAYGTrCQd/view?usp=sharing'
  },
  {
    emoji:'🐍', name:'Python (Basic)',
    issuer:'HackerRank',
    desc:'Verified Python fundamentals including data types, control flow, functions, and basic OOP on HackerRank.',
    img:'hackerrank.jpg', link:'https://drive.google.com/file/d/1dAcIAIkWbflmkkgo0K0WWTd51bWi769A/view?usp=sharing'
  },
  {
    emoji:'🗄️', name:'SQL (Basic)',
    issuer:'HackerRank',
    desc:'Demonstrated SQL skills including SELECT queries, JOINs, aggregations, and filtering on HackerRank.',
    img:'sql.jpg', link:'https://drive.google.com/file/d/1Mvsf2HwgD6YMVnKIADHcwSVcUkibIAaR/view?usp=sharing'
  }
];

(function initFloatingCerts(){
  const arena = document.getElementById('certArena');
  if(!arena) return;

  const W = () => arena.clientWidth;
  const H = () => arena.clientHeight;
  const CARD_W = 160, CARD_H = 110;
  const PADDING = 20;


  const state = CERTS.map(()=>({
    x: PADDING + Math.random() * (W() - CARD_W - PADDING*2),
    y: PADDING + Math.random() * (H() - CARD_H - PADDING*2),
    vx: (Math.random()-0.5) * 0.5,
    vy: (Math.random()-0.5) * 0.5,
    paused: false
  }));

  const nodes = CERTS.map((c,i)=>{
    const el = document.createElement('div');
    el.className = 'fcert';
    el.innerHTML = `
      <span class="fcert-emoji">${c.emoji}</span>
      <div class="fcert-info">
        <div class="fcert-name">${c.name}</div>
        <div class="fcert-issuer">${c.issuer}</div>
      </div>`;
    el.addEventListener('click',()=>openPanel(i, el));
    el.addEventListener('mouseenter',()=>{ state[i].paused=true; el.style.transform='scale(1.05)'; });
    el.addEventListener('mouseleave',()=>{ state[i].paused=false; el.style.transform=''; });
    arena.appendChild(el);
    return el;
  });

  const panel    = document.getElementById('certPanel');
  const closeBtn = document.getElementById('certPanelClose');
  let activeIdx  = -1;

  function openPanel(i, el){
    if(activeIdx !== -1){
      nodes[activeIdx].classList.remove('active');
    }
    activeIdx = i;
    el.classList.add('active');
    el.style.transform = `scale(1.05)`;

    const c = CERTS[i];
    document.getElementById('panelIssuer').textContent = c.issuer;
    document.getElementById('panelName').textContent   = c.name;
    document.getElementById('panelDesc').textContent   = c.desc;
    document.getElementById('panelEmoji').textContent  = c.emoji;

    const link = document.getElementById('panelLink');
    link.href  = c.link;
    link.style.opacity      = c.link === '#' ? '0.4' : '1';
    link.style.pointerEvents= c.link === '#' ? 'none' : 'auto';
    link.textContent        = c.link === '#' ? 'Drive Link Not Set Yet' : 'View Certificate ↗';

    const img = document.getElementById('panelImg');
    const ph  = document.getElementById('panelPlaceholder');
    if(c.img){ img.src=c.img; img.style.display='block'; ph.style.display='none'; }
    else      { img.style.display='none'; ph.style.display='flex'; }

    panel.classList.add('open');
    setTimeout(()=>panel.scrollIntoView({behavior:'smooth',block:'nearest'}),50);
  }

  closeBtn.addEventListener('click',()=>{
    panel.classList.remove('open');
    if(activeIdx !== -1){ nodes[activeIdx].classList.remove('active'); nodes[activeIdx].style.transform=''; activeIdx=-1; }
  });

  let rafId;
  function animate(){
    const aw=W(), ah=H();
    state.forEach((s,i)=>{
      if(s.paused) return;
      s.x += s.vx; s.y += s.vy;
      if(s.x < PADDING)            { s.x=PADDING;            s.vx*=-1; }
      if(s.y < PADDING)            { s.y=PADDING;            s.vy*=-1; }
      if(s.x > aw-CARD_W-PADDING)  { s.x=aw-CARD_W-PADDING; s.vx*=-1; }
      if(s.y > ah-CARD_H-PADDING)  { s.y=ah-CARD_H-PADDING; s.vy*=-1; }
      nodes[i].style.left = s.x+'px';
      nodes[i].style.top  = s.y+'px';
    });
    rafId = requestAnimationFrame(animate);
  }

  const certSection = document.getElementById('certifications');
  const visObs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) animate();
      else cancelAnimationFrame(rafId);
    });
  },{threshold:0.1});
  visObs.observe(certSection);
>>>>>>> 22c2adc5a30f691da54dfb9b487842f41f677033
})();