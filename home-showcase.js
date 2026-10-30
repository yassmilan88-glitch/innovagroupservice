(()=>{if(!document.body.classList.contains('home-page'))return;
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const pieces=document.querySelectorAll('.project-hub .hub-head,.project-hub .premium-hub>.hub-card,.why-innova .why-head,.why-innova .why-card,.hub-about-inner,.contact-content');
    const io=new IntersectionObserver((entries)=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target)}}},{threshold:0.09,rootMargin:'0px 0px 50px 0px'});
    pieces.forEach((node)=>{node.classList.add('innova-reveal');io.observe(node)});
  }
})();

/* Innova Voice home preview: only animate when visible, respect language and motion preferences. */
(function initVoicePreview(){
  const card=document.querySelector('.home-page .premium-hub .feature-ai');
  if(!card)return;
  const bubble=card.querySelector('.ai-console-bubble');
  if(!bubble)return;
  const motionQuery=window.matchMedia('(prefers-reduced-motion: reduce)');
  const phrases={
    it:[
      'Buongiorno! Come posso aiutarla?',
      'Mi descrive il problema?',
      'Si tratta di un\'urgenza?',
      'Preparo il riepilogo per il ricontatto.'
    ],
    fr:[
      'Bonjour ! Comment puis-je vous aider ?',
      'Pouvez-vous décrire le problème ?',
      'Est-ce une urgence ?',
      'Je prépare un résumé pour vous rappeler.'
    ]
  };
  let index=0;
  let visible=false;
  let changeTimer=null;
  let finishTimer=null;
  let lastLang=document.documentElement.lang==='fr'?'fr':'it';

  function activeLang(){
    return document.documentElement.lang==='fr'?'fr':'it';
  }
  function clearPending(){
    if(changeTimer!==null){window.clearInterval(changeTimer);changeTimer=null;}
    if(finishTimer!==null){window.clearTimeout(finishTimer);finishTimer=null;}
  }
  function syncPhrase(){
    const lang=activeLang();
    if(lang!==lastLang){lastLang=lang;index=0;}
    bubble.classList.remove('is-changing');
    bubble.textContent=phrases[lang][index];
  }
  function shouldPlay(){
    return visible && !document.hidden && !motionQuery.matches;
  }
  function advance(){
    if(!shouldPlay())return;
    const lang=activeLang();
    if(lang!==lastLang){index=0;lastLang=lang;}else{index=(index+1)%phrases[lang].length;}
    bubble.classList.add('is-changing');
    finishTimer=window.setTimeout(()=>{
      bubble.textContent=phrases[lang][index];
      bubble.classList.remove('is-changing');
      finishTimer=null;
    },195);
  }
  function updateMotion(){
    const playing=shouldPlay();
    card.classList.toggle('ai-is-visible',playing);
    clearPending();
    if(playing){
      changeTimer=window.setInterval(advance,3900);
    }else{
      syncPhrase();
    }
  }
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.target===card){
          visible=entry.isIntersecting;
          updateMotion();
        }
      }
    },{threshold:0.06,rootMargin:'80px 0px 80px 0px'});
    observer.observe(card);
  }else{
    visible=true;
    updateMotion();
  }
  document.addEventListener('visibilitychange',updateMotion);
  if(motionQuery.addEventListener)motionQuery.addEventListener('change',updateMotion);
  else if(motionQuery.addListener)motionQuery.addListener(updateMotion);
  document.querySelectorAll('[data-lang]').forEach(button=>{
    button.addEventListener('click',()=>{
      index=0;
      lastLang=activeLang();
      syncPhrase();
    });
  });
  syncPhrase();
})();
