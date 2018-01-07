(function(doc,win){
  var docEl=doc.documentElement,//html
     _body=doc.querySelector('body'),//html
     resizeEvt='orientationchange' in win?'orientationchange':'resize',
       recal=function(){
         var clientWidth=docEl.clientWidth;
         if(!clientWidth) return;
         //不理解
        // docEl.style.fontSize=20*(clientWith/320)+'px';
         var ratio=clientWidth/360;
         if(ratio>2.5) ratio=2.5;
         if(ratio<2.0) ratio=2.0;
         //10px的基准，1rem就是10px;
         docEl.style.fontSize=10*ratio+'px';

         if(clientWidth>756){
            _body.style.fontSize='.8rem';
          /* setTimeout(function(){
             const _paddingConWrap=doc.querySelectorAll('.paddingConWrap');
             console.log(_paddingConWrap)
             if(!_paddingConWrap.length) return;
             for(var i=0;i<_paddingConWrap.length;i++){
               const item=_paddingConWrap[i];
               item.style.paddingLeft='3rem'
               item.style.paddingRight='3rem'
             }
           },17)*/
         }else{
           _body.style.fontSize='.65rem';
         }
       }
  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt,recal,false);
  doc.addEventListener('DOMContentLoaded',recal,false);
})(document,window)
