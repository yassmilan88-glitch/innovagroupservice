/* Innova AI per le aziende: transparent scripted demos; no data sent or bookings made. */
(()=> {
  if(!document.body.classList.contains('home-page'))return;
  const root=document.getElementById('businessAiChat');
  const feed=document.getElementById('businessAiMessages');
  if(!root||!feed)return;
  const tabs=[...root.querySelectorAll('[data-business-case]')];
  const replay=root.querySelector('#businessAiReplay');
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
  let chosen='orari',inView=false,auto=true;
  let scheduled=[];
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const language=()=>document.documentElement.lang==='fr'?'fr':'it';
  const cancel=()=>{scheduled.forEach(window.clearTimeout);scheduled=[];};
  function append([type,who,copy]){
    const bubble=document.createElement('div');
    bubble.className='business-ai-message business-ai-message--'+type;
    if(type==='result'){
      const icon=document.createElement('span');icon.className='business-ai-result-check';icon.textContent='✓';
      const body=document.createElement('span');body.textContent=copy;bubble.append(icon,body);
    }else{
      const label=document.createElement('strong');label.textContent=who;
      const body=document.createElement('span');body.textContent=copy;bubble.append(label,body);
    }
    feed.append(bubble);
    feed.scrollTop=feed.scrollHeight;
  }
  function showStatic(){cancel();feed.replaceChildren();demos[language()][chosen].forEach(append);}
  function showAnimated(){
    cancel();feed.replaceChildren();
    const sequence=demos[language()][chosen];
    sequence.forEach((line,i)=>scheduled.push(window.setTimeout(()=>append(line),[0,950,2350,3550,5050][i])));
    if(auto){
      scheduled.push(window.setTimeout(()=>{
        if(!inView||document.hidden||!auto)return;
        const keys=['orari','preventivo','negozio'];
        chosen=keys[(keys.indexOf(chosen)+1)%keys.length];
        render();
      },11700));
    }
  }
  function render(){
    tabs.forEach(tab=>{
      const selected=tab.dataset.businessCase===chosen;
      tab.classList.toggle('is-selected',selected);
      tab.setAttribute('aria-pressed',String(selected));
    });
    if(inView&&!document.hidden&&!reduced.matches)showAnimated();else showStatic();
  }
  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    auto=false;chosen=tab.dataset.businessCase;render();
  }));
  if(replay)replay.addEventListener('click',()=>{auto=false;render();});
  document.querySelectorAll('[data-business-open-case]').forEach(link=>
    link.addEventListener('click',()=>{auto=false;chosen=link.dataset.businessOpenCase;render();})
  );
  document.querySelectorAll('[data-lang]').forEach(button=>
    button.addEventListener('click',()=>render())
  );
  document.addEventListener('visibilitychange',render);
  if(reduced.addEventListener)reduced.addEventListener('change',render);
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.target!==root)return;
      const was=inView;inView=entry.isIntersecting;
      if(was!==inView)render();
    }),{threshold:.05,rootMargin:'120px 0px 120px 0px'});
    io.observe(root);
  }else {inView=true;}
  render();
})();