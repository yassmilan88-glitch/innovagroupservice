/* Innova AI per le aziende: transparent scripted demos; no data sent or bookings made. */
(()=> {
  if(!document.body.classList.contains('home-page'))return;
  const demos={
    it:{
      orari:[
        ['customer','Cliente','Buongiorno! L’officina è aperta sabato?'],
        ['assistant','Assistente AI','Nell’officina dimostrativa il sabato siamo aperti dalle 8 alle 12.'],
        ['customer','Cliente','Per cambiare le gomme devo telefonare?'],
        ['assistant','Assistente AI','Puoi inviare modello dell’auto e recapito. Il team ti confermerà la disponibilità.'],
        ['result','','Due informazioni gestite senza una telefonata.']
      ],
      preventivo:[
        ['customer','Cliente','Ho una perdita d’acqua. Potete intervenire?'],
        ['assistant','Assistente AI','Posso raccogliere i dettagli per il tecnico. In quale comune si trova l’immobile?'],
        ['customer','Cliente','A Cuneo, sotto il lavandino.'],
        ['assistant','Assistente AI','Ho preparato problema e zona per il ricontatto. In questa demo non è stato prenotato alcun intervento.'],
        ['result','','Richiesta organizzata senza interrompere il tecnico.']
      ],
      negozio:[
        ['customer','Cliente','Che orari fate? Accettate le carte?'],
        ['assistant','Assistente AI','Nel negozio dimostrativo siamo aperti da lunedì a sabato, dalle 9 alle 19. Accettiamo carte.'],
        ['customer','Cliente','Devo telefonare per saperlo?'],
        ['assistant','Assistente AI','No. Se l’azienda mantiene aggiornate queste informazioni, posso rispondere qui sul sito.'],
        ['result','','Domande risolte senza chiamare.']
      ]
    },
    fr:{
      orari:[
        ['customer','Client','Bonjour ! Le garage est ouvert samedi ?'],
        ['assistant','Assistante IA','Dans ce garage fictif, le samedi nous ouvrons de 8 h à 12 h.'],
        ['customer','Client','Pour changer les pneus, je dois appeler ?'],
        ['assistant','Assistante IA','Vous pouvez transmettre le modèle du véhicule et vos coordonnées. L’équipe confirmera la disponibilité.'],
        ['result','','Deux questions réglées sans appel.']
      ],
      preventivo:[
        ['customer','Client',"J’ai une fuite d’eau. Pouvez-vous intervenir ?"],
        ['assistant','Assistante IA',"Je peux recueillir les détails pour le technicien. Dans quelle ville êtes-vous ?"],
        ['customer','Client','À Coni, sous l’évier.'],
        ['assistant','Assistante IA',"J’ai préparé le problème et la zone pour un rappel. Aucune intervention n’est réservée dans cette démo."],
        ['result','','Demande préparée sans interrompre le technicien.']
      ],
      negozio:[
        ['customer','Client','Quels sont vos horaires ? Acceptez-vous la carte ?'],
        ['assistant','Assistante IA','Dans cette boutique fictive : lundi–samedi, 9 h–19 h. Le paiement par carte est accepté.'],
        ['customer','Client','Je dois téléphoner pour savoir ?'],
        ['assistant','Assistante IA',"Non. Si ces informations sont à jour, je peux répondre directement sur le site."],
        ['result','','Questions réglées sans appel.']
      ]
    }
  };

  // The project card shares the existing scripted chat examples.
  (function initProjectCarousel(){
    const card=document.querySelector('.feature-ai');
    const voice=card?.querySelector('.hub-voice-art');
    if(!voice)return;
    const viewport=document.createElement('div');
    viewport.className='hub-visual ai-preview-carousel';
    viewport.setAttribute('aria-label','Demo chiamate e chat AI');
    const track=document.createElement('div');track.className='ai-preview-track';
    voice.before(viewport);voice.classList.remove('hub-visual');
    voice.classList.add('ai-preview-slide');
    const chat=document.createElement('div');chat.className='ai-preview-slide ai-preview-chat';
    chat.innerHTML='<div class="ai-mini-head"><b>INNOVA / CHAT AI</b><span>Demo</span></div><div class="ai-mini-feed"></div>';
    track.append(voice,chat);
    const controls=document.createElement('div');controls.className='ai-preview-controls';
    const buttons=['Chiamate','Chat AI'].map((label,i)=>{
      const b=document.createElement('button');b.type='button';b.textContent=label;
      b.addEventListener('click',()=>{paused=true;show(i);});controls.append(b);return b;
    });
    const pause=document.createElement('button');pause.type='button';controls.append(pause);
    viewport.append(track,controls);
    let active=0,paused=false,visible=false,timer=null,messageTimers=[];
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
    const lang=()=>document.documentElement.lang==='fr'?'fr':'it';
    function clear(){clearTimeout(timer);messageTimers.forEach(clearTimeout);messageTimers=[];}
    function renderChat(){
      const feed=chat.querySelector('.ai-mini-feed');feed.replaceChildren();
      demos[lang()].orari.forEach(([type,who,copy],i)=>{
        const append=()=>{
          const row=document.createElement('div');row.className='ai-mini-message '+type;
          row.textContent=copy;feed.append(row);feed.scrollTop=feed.scrollHeight;
        };
        if(reduce.matches)append();
        else messageTimers.push(setTimeout(append,i*1250));
      });
    }
    function show(index){
      clear();active=index;track.style.transform='translateX(-'+index*50+'%)';
      [voice,chat].forEach((node,i)=>node.setAttribute('aria-hidden',String(i!==index)));
      buttons.forEach((b,i)=>{b.setAttribute('aria-pressed',String(i===index));b.textContent=i?'Chat AI':(lang()==='fr'?'Appels':'Chiamate');});
      pause.textContent=paused?'▶':'Ⅱ';
      pause.setAttribute('aria-label',paused?(lang()==='fr'?'Reprendre':'Riprendi scorrimento'):(lang()==='fr'?'Pause':'Pausa scorrimento'));
      if(index===1)renderChat();
      if(visible&&!document.hidden&&!paused&&!reduce.matches)timer=setTimeout(()=>show(1-active),10000);
    }
    pause.addEventListener('click',()=>{paused=!paused;show(active);});
    let touch=null;
    viewport.addEventListener('touchstart',e=>{touch=[e.touches[0].clientX,e.touches[0].clientY];},{passive:true});
    viewport.addEventListener('touchend',e=>{
      if(!touch)return;
      const dx=e.changedTouches[0].clientX-touch[0],dy=e.changedTouches[0].clientY-touch[1];touch=null;
      if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){paused=true;show(dx<0?1:0);}
    },{passive:true});
    viewport.addEventListener('focusin',()=>{paused=true;clear();});
    document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>show(active)));
    document.addEventListener('visibilitychange',()=>{if(document.hidden)clear();else show(active);});
    if(reduce.addEventListener)reduce.addEventListener('change',()=>show(active));
    if('IntersectionObserver' in window)new IntersectionObserver(entries=>{
      visible=entries[0].isIntersecting;if(visible)show(active);else clear();
    },{threshold:.1}).observe(viewport);
    else visible=true;
    show(0);
  })();

})();
