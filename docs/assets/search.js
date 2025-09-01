<!-- ===============================
File: docs/assets/search.js
=============================== -->
<script>
// Lightweight client-side search over a tiny hand-authored index
const DOC_INDEX = [
{title:'Docs Home', path:'index.html', section:'Overview', text:'Start here to explore Bobrix docs.'},
{title:'Getting Started', path:'guide-getting-started.html', section:'Guides', text:'Install Studio, create place, run a simple script.'},
{title:'Scripting Basics (Luau)', path:'guide-scripting-basics.html', section:'Guides', text:'Variables, types, functions, events, RBXScriptSignal.'},
{title:'Script Types & Locations', path:'guide-scripts-and-locations.html', section:'Guides', text:'Server Script, LocalScript, ModuleScript and where they run.'},
{title:'Luau Overview', path:'guide-luau.html', section:'Language', text:'What is Luau and how it differs from Lua 5.1.'},
{title:'Data Stores', path:'guide-data-stores.html', section:'Cloud Services', text:'Persist player data with DataStoreService.'},
{title:'Data Store Best Practices', path:'guide-data-stores-best-practices.html', section:'Cloud Services', text:'Throttling, budgets, retries and versioning guidance.'},
{title:'Open Cloud — Data Stores', path:'guide-open-cloud-ds.html', section:'Open Cloud', text:'Access DataStores via REST endpoints.'},
{title:'Engine Reference — Overview', path:'reference-engine.html', section:'Reference', text:'Browse core classes, datatypes and enums.'},
{title:'Class — Script', path:'reference-script.html', section:'Reference', text:'Server-side LuaSourceContainer with events and methods.'},
{title:'Class — LocalScript', path:'reference-localscript.html', section:'Reference', text:'Client-only LuaSourceContainer; UI/input access.'}
];


function attachSearch(el){
const input = el.querySelector('input');
const results = el.querySelector('.results');
const open = ()=> results.style.display='block';
const close = ()=> results.style.display='none';
input.addEventListener('focus', open);
input.addEventListener('blur', ()=> setTimeout(close, 120));
input.addEventListener('input', ()=>{
const q = input.value.trim().toLowerCase();
results.innerHTML='';
if(!q){close();return}
const found = DOC_INDEX.filter(i=> (i.title+i.text+i.section).toLowerCase().includes(q)).slice(0,8);
found.forEach(i=>{
const a = document.createElement('a');
a.href = i.path; a.className='result';
a.innerHTML = `<strong>${i.title}</strong><small>${i.section}</small>`;
results.appendChild(a);
});
results.style.display = found.length? 'block':'none';
});
}


function initLocalNavActive(){
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a=>{
const href = a.getAttribute('href');
if(href && href.endsWith(path)) a.classList.add('active');
})
}
</script>
