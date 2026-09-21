document.addEventListener('DOMContentLoaded', () => {
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();

  const btn=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  if(btn && nav){
    btn.addEventListener('click',()=>nav.classList.toggle('open'));
  }

  const target=document.getElementById('typed-text');
  if(target){
    const phrases=[
      'enterprise-scale systems',
      'resilient cloud platforms',
      'real-time data architectures',
      'AI-native solutions'
    ];
    let phrase=0, char=0, deleting=false;
    const tick=()=>{
      const word=phrases[phrase];
      target.textContent=word.slice(0,char);
      if(!deleting){
        char++;
        if(char>word.length){deleting=true;setTimeout(tick,1250);return;}
      }else{
        char--;
        if(char<0){deleting=false;phrase=(phrase+1)%phrases.length;char=0;}
      }
      setTimeout(tick,deleting?35:70);
    };
    tick();
  }
});