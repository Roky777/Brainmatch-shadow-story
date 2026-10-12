import {mkdir,readFile,writeFile} from 'node:fs/promises';
const base=new URL('../',import.meta.url);
await mkdir(new URL('assets/cards/',base),{recursive:true});
const silhouettes={cube:'<path d="M120 24 205 70V170L120 216 35 170V70Z"/>',cone:'<path d="M120 25 205 183Q205 213 120 213Q35 213 35 183Z"/>',cylinder:'<path d="M45 58C45 20 195 20 195 58V182C195 220 45 220 45 182Z"/>',ball:'<circle cx="120" cy="120" r="91"/>'};
const colour={
 cube:'<path d="M120 24 205 70 120 118 35 70Z" fill="#a8e6ff"/><path d="M35 70 120 118V216L35 170Z" fill="#46b2ed"/><path d="M120 118 205 70V170L120 216Z" fill="#2871c2"/>',
 cone:'<path d="M120 25 205 183Q205 213 120 213Q35 213 35 183Z" fill="url(#cone)"/><ellipse cx="120" cy="183" rx="85" ry="30" fill="#c7782d"/>',
 cylinder:'<path d="M45 58C45 20 195 20 195 58V182C195 220 45 220 45 182Z" fill="url(#cylinder)"/><ellipse cx="120" cy="58" rx="75" ry="29" fill="#c3f4db"/>',
 ball:'<circle cx="120" cy="120" r="91" fill="url(#ball)"/>'
};
const defs='<defs><linearGradient id="cone"><stop stop-color="#ffdf8e"/><stop offset="1" stop-color="#f19935"/></linearGradient><linearGradient id="cylinder"><stop stop-color="#9aebbd"/><stop offset="1" stop-color="#309c76"/></linearGradient><radialGradient id="ball" cx=".32" cy=".28" r=".7"><stop stop-color="#ffc1da"/><stop offset=".5" stop-color="#f074a2"/><stop offset="1" stop-color="#ba3c75"/></radialGradient></defs>';
for(const [name,outline]of Object.entries(silhouettes)){
  for(const shadow of [false,true]){
    const art=shadow?`<g fill="#283042">${outline}</g>`:defs+colour[name];
    await writeFile(new URL(`assets/cards/${shadow?'shadow-':''}${name}.svg`,base),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">${art}</svg>`);
  }
}
// Render the unchanged PNG alpha as a silhouette; preserve contour and pose.
for(const name of ['rabbit','dog','bird','deer']){
  const data=(await readFile(new URL(`assets/cards/${name}.png`,base))).toString('base64');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><defs><filter id="silhouette" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 .157 0 0 0 0 .188 0 0 0 0 .259 0 0 0 1 0"/></filter></defs><image href="data:image/png;base64,${data}" width="240" height="240" filter="url(#silhouette)"/></svg>`;
  await writeFile(new URL(`assets/cards/shadow-${name}.svg`,base),svg);
}
console.log('Created eight picture-only source/shadow pairs.');
