// LOADING
document.addEventListener('DOMContentLoaded',()=>{setTimeout(()=>{
  document.getElementById('loading').classList.add('hide');
  setTimeout(()=>document.getElementById('loading').remove(),600);
  animCounters();
},1900);});

// NEURAL CANVAS
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
let W,H,nodes=[];
function resize(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;}
resize();window.addEventListener('resize',resize);
for(let i=0;i<55;i++) nodes.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25,r:Math.random()*1.2+.4});
function draw(){
  ctx.clearRect(0,0,W,H);
  nodes.forEach(n=>{n.x+=n.vx;n.y+=n.vy;if(n.x<0)n.x=W;if(n.x>W)n.x=0;if(n.y<0)n.y=H;if(n.y>H)n.y=0;
    ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle='rgba(22,163,74,.55)';ctx.fill();});
  for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++){
    const a=nodes[i],b=nodes[j],d=Math.hypot(a.x-b.x,a.y-b.y);
    if(d<110){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.strokeStyle=`rgba(22,163,74,${.11*(1-d/110)})`;ctx.lineWidth=.5;ctx.stroke();}
  }
  requestAnimationFrame(draw);
}
draw();

// TYPED
const phrases=['AI Engineer','ML Developer','Data Scientist','Generative AI Dev','GATE DA 2026 Qualified'];
let pi=0,ci=0,del=false;
function type(){
  const t=document.getElementById('typed');if(!t)return;
  const p=phrases[pi];
  if(!del){t.textContent=p.slice(0,ci+1);ci++;if(ci===p.length){setTimeout(()=>{del=true;},1800);setTimeout(type,100);return;}}
  else{t.textContent=p.slice(0,ci-1);ci--;if(ci===0){del=false;pi=(pi+1)%phrases.length;}}
  setTimeout(type,del?45:75);
}
setTimeout(type,2200);

// SCROLL REVEAL
const obs=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');}),{threshold:.08});
document.querySelectorAll('.fade-up,.exp-item').forEach(el=>obs.observe(el));

// COUNTERS
function animCounters(){
  document.querySelectorAll('[data-count]').forEach(el=>{
    const t=+el.dataset.count,d=1600;let s=null;
    function step(ts){if(!s)s=ts;const p=Math.min((ts-s)/d,1);el.textContent=Math.floor(p*t);if(p<1)requestAnimationFrame(step);else el.textContent=t;}
    requestAnimationFrame(step);
  });
}

// PROJECT FILTER
function fp(cat,btn){
  document.querySelectorAll('.pf-btn').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
  document.querySelectorAll('.proj-card').forEach(c=>{c.style.display=cat==='all'||c.dataset.cat===cat?'':'none';});
}

// CONTACT
function sendMsg(){
  const n=document.getElementById('fn').value.trim(),e=document.getElementById('fe').value.trim(),m=document.getElementById('fm').value.trim();
  if(!n||!e||!m){showToast('Please fill all fields.');return;}
  if(!/[^\s]+@[^\s]+\.[^\s]+/.test(e)){showToast('Please enter a valid email.');return;}
  window.location.href='mailto:ayushavdhesh98@gmail.com?subject=Portfolio+Contact+from+'+encodeURIComponent(n)+'&body='+encodeURIComponent(m+'\n\nFrom: '+n+'\nEmail: '+e);
  showToast('Opening mail client...');
}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}

// BACK TOP
window.addEventListener('scroll',()=>document.getElementById('btt').classList.toggle('show',window.scrollY>400));

// NAV HIDE
let last=0;
window.addEventListener('scroll',()=>{
  const s=window.scrollY;
  document.getElementById('nb').style.transform=s>last&&s>100?'translateY(-100%)':'translateY(0)';
  document.getElementById('nb').style.transition='transform .3s';
  last=s;
});

// HAMBURGER
let navOpen=false;
function toggleNav(){
  navOpen=!navOpen;
  const l=document.querySelector('.nav-links');
  if(navOpen){l.style.cssText='display:flex;flex-direction:column;position:absolute;top:60px;left:0;right:0;background:var(--bg);padding:1.5rem 2rem;border-bottom:1px solid var(--border);gap:1.2rem;z-index:99;';}
  else{l.style.display='none';}
}

// CMD PALETTE
const CMD=[
  {l:'About Me',s:'about',k:'Section'},{l:'Skills',s:'skills',k:'Section'},{l:'Experience',s:'experience',k:'Section'},
  {l:'Projects',s:'projects',k:'Section'},{l:'Certifications',s:'certifications',k:'Section'},
  {l:'Achievements',s:'achievements',k:'Section'},{l:'Contact',s:'contact',k:'Section'},
  {l:'Multi-Agent AI Research Assistant',s:'projects',k:'Project'},{l:'RAG Knowledge Assistant',s:'projects',k:'Project'},
  {l:'Brain Tumor Detection',s:'projects',k:'Project'},{l:'AI Resume Analyzer',s:'projects',k:'Project'},
  {l:'GATE DA 2026 - Score 526',s:'achievements',k:'Achievement'},
  {l:'Python / TensorFlow / LangChain',s:'skills',k:'Skill'},{l:'Generative AI / RAG',s:'skills',k:'Skill'},
];
let ca=0;
function openCmd(){document.getElementById('cmd-ov').classList.add('open');document.getElementById('cmd-in').focus();renderCmd(CMD);}
function closeCmd(e){if(e.target===document.getElementById('cmd-ov'))document.getElementById('cmd-ov').classList.remove('open');}
function filterCmd(v){renderCmd(v?CMD.filter(d=>d.l.toLowerCase().includes(v.toLowerCase())):CMD);}
function renderCmd(data){ca=0;document.getElementById('cmd-res').innerHTML=data.map((d,i)=>`<div class="cmd-row${i===0?' active':''}" onclick="gotoS('${d.s}')"><span class="cmd-k">${d.k}</span>${d.l}</div>`).join('');}
function cmdKey(e){
  const items=document.querySelectorAll('.cmd-row');
  if(e.key==='ArrowDown'){items[ca]?.classList.remove('active');ca=Math.min(ca+1,items.length-1);items[ca]?.classList.add('active');items[ca]?.scrollIntoView({block:'nearest'});}
  else if(e.key==='ArrowUp'){items[ca]?.classList.remove('active');ca=Math.max(ca-1,0);items[ca]?.classList.add('active');items[ca]?.scrollIntoView({block:'nearest'});}
  else if(e.key==='Enter'){items[ca]?.click();document.getElementById('cmd-ov').classList.remove('open');}
  else if(e.key==='Escape'){document.getElementById('cmd-ov').classList.remove('open');}
}
function gotoS(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'});document.getElementById('cmd-ov').classList.remove('open');}
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key==='k'){e.preventDefault();openCmd();}});

// KONAMI
let ks=[],kc=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
document.addEventListener('keydown',e=>{ks.push(e.key);if(ks.length>10)ks.shift();if(JSON.stringify(ks)===JSON.stringify(kc))showToast('Easter egg! GATE AIR 2096 - You found it!');});
