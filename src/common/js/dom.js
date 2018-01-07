export function addClass(el,className){
  if(hasClass(el,className)) return
  const oldClass=el.className;
  var newClass=oldClass+' '+className;
  el.className=newClass;
}
export function hasClass(el,className){
  var reg=new RegExp('(^|\\s)'+className+'(\\s|$)');
  return reg.test(el.className);
}
