(function(){"use strict";var e="/img/Random_hentai_gif",r="/img/pussy",o="/img/nsfw_neko_gif",m="/img/lewd",g="/img/les",s="/img/kuni",n="/img/cum",t="/img/classic",v="/img/boobs",l="/img/bj",f="/img/anal",k="/img/nsfw_avatar",u="/img/yuri",p="/img/trap",d="/img/tits",w="/img/solog",c="/img/solo",b="/img/pwankg",h="/img/pussy_jpg",y="/img/lewdkemo",j="/img/lewdk",_="/img/keta",x="/img/holo",z="/img/holoero",C="/img/hentai",q="/img/futanari",L="/img/femdom",N="/img/feetg",R="/img/erofeet",S="/img/feet",T="/img/ero",U="/img/erok",A="/img/erokemo",B="/img/eron",D="/img/eroyuri",E="/img/cum_jpg",F="/img/blowjob",G="/img/spank",H="/img/gasm",I="/img/tickle",J="/img/slap",K="/img/poke",M="/img/pat",O="/img/neko",P="/img/meow",Q="/img/lizard",V="/img/kiss",W="/img/hug",X="/img/fox_girl",Y="/img/feed",Z="/img/cuddle",$="/img/ngif",aa="/img/kemonomimi",ia="/img/smug",ea="/img/baka",ra="/img/woof",oa="/img/wallpaper",ma="/img/goose",ga="/img/gecg",sa="/img/avatar",na="/img/waifu",ta={hentaigif:e,pussy:r,nsfwnekogif:o,nsfwneko:m,lesbian:g,kuni:s,cumsluts:n,classic:t,boobs:v,bj:l,anal:f,nsfwavatar:k,yuri:u,trap:p,tits:d,girlsologif:w,girlsolo:c,pussywankgif:b,pussyart:h,lewdkemonomimi:y,lewdkitsune:j,keta:_,holo:x,holoero:z,hentai:C,futanari:q,femdom:L,feetgif:N,erofeet:R,feet:S,ero:T,erokitsune:U,erokemonomimi:A,eroneko:B,eroyuri:D,cumarts:E,blowjob:F,spank:G,gasm:H,tickle:I,slap:J,poke:K,pat:M,neko:O,meow:P,lizard:Q,kiss:V,hug:W,foxgirl:X,feed:Y,cuddle:Z,nekogif:$,kemonomimi:aa,smug:ia,baka:ea,woof:ra,wallpaper:oa,goose:ma,gecg:ga,avatar:sa,waifu:na};async function va(a){return(await(await fetch("https://nekos.life/api/v2"+ta[a])).json()).url}var la=()=>{let a;return{onLoad(){a=cumcord.commands.addCommand({name:"neko",description:"Send images from nekos.life",args:[{name:"endpoint",description:"The type of image to get",type:"string",required:!0}],handler:i=>va(i.args.endpoint)})},onUnload(){a()}}};return la})();