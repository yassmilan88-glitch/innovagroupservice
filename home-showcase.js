(()=>{if(!document.body.classList.contains('home-page'))return;
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const pieces=document.querySelectorAll('.project-hub .hub-head,.project-hub .premium-hub>.hub-card,.why-innova .why-head,.why-innova .why-card,.hub-about-inner,.contact-content');
    const io=new IntersectionObserver((entries)=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}}},{threshold:0.09,rootMargin:'0px 0px 50px 0px'});
    pieces.forEach((node)=>{node.classList.add('innova-reveal');io.observe(node)});
  }
})();