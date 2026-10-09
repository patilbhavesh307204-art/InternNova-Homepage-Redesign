const menuBtn=document.getElementById('menuBtn'); const top=document.getElementById('top');
menuBtn.addEventListener('click',()=>{top.classList.toggle('mobile-open'); menuBtn.textContent=top.classList.contains('mobile-open')?'✕':'☰'});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{top.classList.remove('mobile-open');menuBtn.textContent='☰'}));
document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>q.parentElement.classList.toggle('open')));
const toast=document.getElementById('toast'); document.getElementById('applyBtn').addEventListener('click',()=>{toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3500)});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform='translateY(0)'}}),{threshold:.08});
document.querySelectorAll('.card,.benefit,.quote,.panel,.point').forEach(el=>{el.style.opacity=.0;el.style.transform='translateY(12px)';el.style.transition='opacity .55s ease, transform .55s ease';observer.observe(el)});