(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{KOkz:function(e,a,i){"use strict";var t=i("q1tI"),r=i.n(t),s=i("Cs6D"),n=i("Bl7J"),o=i("vrFN"),l=i("Wbzz"),d=function(e){var a=e.book,i=a.readings.length>0;return r.a.createElement("li",{key:a.title,className:"book-item"},r.a.createElement("section",{className:"image"},r.a.createElement(l.Link,{to:a.link,itemProp:"url"},r.a.createElement("img",{src:a.image,alt:a.title}))),r.a.createElement("section",null,r.a.createElement("h4",null,a.title),r.a.createElement("span",null,"De"," ",r.a.createElement(l.Link,{to:a.author.link,itemProp:"url"},a.author.name)),i&&r.a.createElement("div",null,r.a.createElement("span",null,"Lecturas:"),r.a.createElement("ul",null,a.readings.map((function(e){return e.end_date&&""!==e.end_date?r.a.createElement("li",{key:e.start_date},r.a.createElement("span",null,"Del ",r.a.createElement("time",null,e.start_date)," al"," ",r.a.createElement("time",null,e.end_date))):r.a.createElement("li",{key:e.start_date},r.a.createElement("span",null,"Empezado el ",r.a.createElement("time",null,e.start_date)," ",e.not_ended&&r.a.createElement("span",null,"~"," ",r.a.createElement("em",{style:{color:"var(--color-hover)"}},"abandonado"))))}))))))},m=function(e){var a=e.readed,i=e.reading,s=e.wantToRead,n=e.isFiltering,o="book-list-container",l=Object(t.useState)(!1),m=l[0],c=l[1],g=Object(t.useState)(!0),_=g[0],p=g[1],u=Object(t.useState)(!0),k=u[0],h=u[1];return r.a.createElement("div",{key:o,className:o},(null==s?void 0:s.length)>0&&!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return c(!m)}},r.a.createElement("h2",null,r.a.createElement("span",{className:m?"text-shadow":"text-shadow-disabled"},"Quiero leer"))),m&&r.a.createElement("ol",{className:"book-list"},s.map((function(e){return r.a.createElement(d,{key:e.title,book:e})})))),i.length>0&&!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return p(!_)}},r.a.createElement("h2",null,r.a.createElement("span",{className:_?"text-shadow":"text-shadow-disabled"},"Leyendo"))),_&&r.a.createElement("ol",{className:"book-list"},i.map((function(e){return r.a.createElement(d,{key:e.title,book:e})})))),r.a.createElement("button",{onClick:function(){return h(!k)}},r.a.createElement("h2",null,r.a.createElement("span",{className:k?"text-shadow":"text-shadow-disabled"},"Lecturas"))),k&&r.a.createElement("ol",{className:"book-list"},a.map((function(e){return r.a.createElement(d,{key:e.title,book:e})}))))},c=i("JM3L");function g(e,a){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,a){if(!e)return;if("string"==typeof e)return _(e,a);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return _(e,a)}(e))||a&&e&&"number"==typeof e.length){i&&(e=i);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=e[Symbol.iterator]()).next.bind(i)}function _(e,a){(null==a||a>e.length)&&(a=e.length);for(var i=0,t=new Array(a);i<a;i++)t[i]=e[i];return t}var p="year",u="title",k="author",h="genre",w=function(e){return Object.assign({},e,{borderRadius:"var(--radius-1)",colors:Object.assign({},e.colors,{primary25:"var(--color-folders)",primary:"var(--color-text-light)"})})},C=function(e){var a=[],i=[],t=[],r=[],s={};return e.books.forEach((function(e){for(var n,o=!1,l=g(e.readings);!(n=l()).done;){var d=n.value;(d.not_ended||d.end_date)&&(o=!0)}o?(i.push(e),t.push({value:e.author.name,label:e.author.name}),r.push({value:e.title,label:e.title}),e.genre&&!s[e.genre]&&(s[e.genre]=e.genre)):a.push(e)})),{readingBooks:a,readedBooks:i,authorSelect:t,titleSelect:r,genreSelect:A(s)}},A=function(e){var a=[];for(var i in e){var t=f(i);a.push({value:i,label:t})}return a.sort((function(e,a){return a.value<e.value}))},f=function(e){switch(e){case"fiction":return"Novela";case"thriller":return"Novela negra";case"historical-fiction":return"Novela historica";case"science-fiction":return"Ciencia ficción";case"fantasy":return"Fantasía";case"epistle":return"Epistolar";case"mithology":return"Mitología";case"classic":return"Clásica";case"philosophy":return"Filosofía";case"essay":return"Ensayo";case"biography":return"Biografía";case"historical":return"Historia";default:return e}},S=function(e){var a=e.books,i=e.filters,t=i.year,r=t?new Date(i.year.value+"").getFullYear():null,s=a.filter((function(e){if(t){for(var a,s=g(e.readings);!(a=s()).done;){var n=a.value;if(new Date(n.start_date).getFullYear()===r||new Date(n.end_date).getFullYear()===r)return!0}return!1}if(i.title)return i.title.value===e.title;for(var o in i){var l;if(o===k){if(i.author.value!==(null===(l=e[o])||void 0===l?void 0:l.name))return!1}else if(i[o].value!==e[o])return!1}return!0}));return t?y(s,r):s},y=function(e,a){return e.sort((function(e,i){for(var t,r=g(e.readings);!(t=r()).done;){var s=t.value;if(new Date(s.start_date).getFullYear()===a||new Date(s.end_date).getFullYear()===a)for(var n,o=g(i.readings);!(n=o()).done;){var l=n.value;if(new Date(l.start_date).getFullYear()===a||new Date(l.end_date).getFullYear()===a)return new Date(l.end_date)-new Date(s.end_date)}}return!1}))};a.a=function(e){var a=e.location,i=e.library,l=i.name,d=C(i),g=d.readingBooks,_=d.readedBooks,A=d.authorSelect,f=d.titleSelect,y=d.genreSelect,b=_.sort((function(e,a){var i=e.readings[0].not_ended?new Date(e.readings[0].start_date):new Date(e.readings[0].end_date);return(a.readings[0].not_ended?new Date(a.readings[0].start_date):new Date(a.readings[0].end_date))-i})),E=b[b.length-1].readings[0],B=E.end_date?new Date(E.end_date).getFullYear():new Date(E.start_date).getFullYear(),z=new Date,v=Array.from({length:z.getFullYear()-B+1},(function(e,a){var i=z.getFullYear()-a;return{value:i,label:i}})),L=Object(t.useState)({year:v[0]}),j=L[0],q=L[1],O=Object(t.useState)(b.filter((function(e){var a=e.readings[0];return(a.end_date?new Date(a.end_date).getFullYear():new Date(a.start_date).getFullYear())===z.getFullYear()}))),D=O[0],M=O[1],I=r.a.createElement("div",{className:"select-year"},v.length>1&&r.a.createElement(s.a,{value:j.year,onChange:function(e){var a=Object.assign({},j,{year:e});q(a),M(S({books:_,filters:a}))},options:v,theme:w}));return r.a.createElement(n.a,{location:a,title:l},r.a.createElement(o.a,{title:l}),r.a.createElement("h1",null,l),r.a.createElement(c.a,{location:a,title:"Librerías",path:"/wiki/library",select:I,triggerFiltersExpanded:function(e){if(!e){var a={year:v[0]};q(a),M(S({books:_,filters:a}))}}},r.a.createElement("div",{className:"select select-title"},j.title&&r.a.createElement("span",{className:"filter-name"},"Título:"),r.a.createElement(s.a,{isClearable:!0,placeholder:"Título",options:f,onChange:function(e,a){var i=a.action,t=Object.assign({},j);"select-option"===i?(delete t[p],t.title=e):(delete t[u],0===Object.keys(t).length&&(t.year=v[0])),q(t),M(S({books:_,filters:t}))},theme:w})),r.a.createElement("div",{className:"select select-author"},j.author&&r.a.createElement("span",{className:"filter-name"},"Autor:"),r.a.createElement(s.a,{isClearable:!0,placeholder:"Autor",isDisabled:j.title,options:A,onChange:function(e,a){var i=a.action,t=Object.assign({},j);"select-option"===i?(delete t[p],t.author=e):(delete t[k],0===Object.keys(t).length&&(t.year=v[0])),q(t),M(S({books:_,filters:t}))},theme:w})),r.a.createElement("div",{className:"select select-genre"},j.genre&&r.a.createElement("span",{className:"filter-name"},"Género:"),r.a.createElement(s.a,{isClearable:!0,placeholder:"Género",isDisabled:j.title,options:y,onChange:function(e,a){var i=a.action,t=Object.assign({},j);"select-option"===i?(delete t[p],t.genre=e):(delete t[h],0===Object.keys(t).length&&(t.year=v[0])),q(t),M(S({books:_,filters:t}))},theme:w}))),r.a.createElement(m,{readed:D,reading:g,wantToRead:i.want_to_read,isFiltering:j.title||j.author||j.genre}))}},trGd:function(e){e.exports=JSON.parse('{"name":"Librería Charlie","want_to_read":[{"title":"Iberia vaciada: Despoblación, decrecimiento, colapso","author":{"name":"Carlos Taibó","link":"https://es.wikipedia.org/wiki/Carlos_Taibo"},"genre":"essay","link":"https://www.amazon.es/Iberia-vaciada-Despoblaci%C3%B3n-decrecimiento-colapso/dp/8413521270/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=iberia+vaciada&qid=1613391527&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/31k5swdYCML._SX316_BO1,204,203,200_.jpg","readings":[]},{"title":"Colapso","author":{"name":"Carlos Taibó","link":"https://es.wikipedia.org/wiki/Carlos_Taibo"},"genre":"essay","link":"https://www.amazon.es/Colapso-Capitalismo-transici%C3%B3n-ecofascismo-Relecturas/dp/8490978913/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=colapso&qid=1613391578&sr=8-3","image":"https://images-na.ssl-images-amazon.com/images/I/41UiobmEYpL._SX319_BO1,204,203,200_.jpg","readings":[]},{"title":"Yo seré la última","author":{"name":"Nadia Murad","link":"https://es.wikipedia.org/wiki/Nadia_Murad"},"genre":"biography","link":"https://www.amazon.es/Yo-ser%C3%A9-%C3%BAltima-Historia-cautiverio/dp/8401019907/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1WN4OJVRZ0WU8&dchild=1&keywords=yo+ser%C3%A9+la+%C3%BAltima&qid=1614672780&sprefix=yo+ser%C3%A9+la+%2Caps%2C166&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/418LdoW+OhL._SX325_BO1,204,203,200_.jpg","readings":[]},{"title":"Los viejos creyentes: Perdidos en la taiga","author":{"name":"Vasili Peskov","link":"https://es.wikipedia.org/wiki/Vasili_Peskov"},"genre":"biography","link":"https://www.amazon.es/Los-viejos-creyentes-Perdidos-Impedimenta/dp/8417553738/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=los+viejos+creyentes&qid=1614018924&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41WoJq5qpSL._SX323_BO1,204,203,200_.jpg","readings":[]},{"title":"Hamnet","author":{"name":"Maggie O\'Farrel","link":"https://en.wikipedia.org/wiki/Maggie_O%27Farrell"},"genre":"historical-fiction","link":"https://www.amazon.es/Hamnet-250-Libros-del-Asteroide/dp/8417977589/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=hamnet&qid=1614668303&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/31u8cTka9gL._SX323_BO1,204,203,200_.jpg","readings":[]},{"title":"Mi familia y otros animales","author":{"name":"Gerald Durrell","link":"https://es.wikipedia.org/wiki/Gerald_Durrell"},"genre":"biography","link":"https://www.amazon.es/familia-otros-animales-Libro-Bolsillo/dp/842067415X/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=trilogia+de+corfu&qid=1613041084&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51u7ELPHQ4L._SX331_BO1,204,203,200_.jpg","readings":[]},{"title":"El árbol de la lengua","author":{"name":"Lola Pons Rodríguez","link":"https://es.wikipedia.org/wiki/Lola_Pons_Rodr%C3%ADguez"},"genre":"essay","link":"https://www.amazon.es/%C3%A1rbol-lengua-Lola-Pons-Rodr%C3%ADguez/dp/8417623434/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=el+arbol+de+la+lengua&qid=1613043698&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41jtFydzf0L._SX335_BO1,204,203,200_.jpg","readings":[]},{"title":"March: Una crónica de la lucha por los derechos civiles de los afroamericanos","author":{"name":"John Lewis","link":"https://es.wikipedia.org/wiki/John_Lewis_(pol%C3%ADtico)"},"genre":"biography","link":"https://www.amazon.es/March-Cr%C3%B3nica-Lucha-Derechos-Afroamericanos/dp/8467930497/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1J7WMJ8LEJ7Z8&dchild=1&keywords=march+una+cronica&qid=1613044233&sprefix=march+una+c%2Caps%2C169&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51JGzjNMmaL._SX350_BO1,204,203,200_.jpg","readings":[]},{"title":"Seis de cuervos","author":{"name":"Leigh Bardugo","link":"https://es.wikipedia.org/wiki/Leigh_Bardugo"},"genre":"fiction","link":"https://www.amazon.es/Seis-cuervos-Grisha-Leigh-Bardugo/dp/8416387583/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=seis+de+cuervos&qid=1613044707&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51t57MlHr8L._SX312_BO1,204,203,200_.jpg","readings":[]},{"title":"El fatal destino de Roma: Cambio climático y enfermedad en el fin de un imperio","author":{"name":"Kyle Harper","link":""},"genre":"essay","link":"https://www.amazon.es/fatal-destino-Roma-clim%C3%A1tico-enfermedad/dp/8491990631/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=El+fatal+destino+de+Roma%3A+Cambio+clim%C3%A1tico+y+enfermedad+en+el+fin+de+un+imperio&qid=1613056988&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41oEmXSYbzL._SX329_BO1,204,203,200_.jpg","readings":[]},{"title":"Facha","author":{"name":"Jason Stanley","link":"https://es.wikipedia.org/wiki/Jason_Stanley"},"genre":"essay","link":"https://www.amazon.es/Facha-C%C3%B3mo-funciona-fascismo-entrado/dp/8417552251/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=facha&qid=1613057171&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41KuKqXxcxL._SX336_BO1,204,203,200_.jpg","readings":[]},{"title":"El infinito en un junco: La invención de los libros en el mundo antiguo","author":{"name":"Irene Vallejo","link":"https://es.wikipedia.org/wiki/Irene_Vallejo_Moreu"},"genre":"essay","link":"https://www.amazon.es/El-infinito-junco-invenci%C3%B3n-Biblioteca/dp/8417860797/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=39O752PBS6ZQE&dchild=1&keywords=el+infinito+en+un+junco&qid=1613057268&sprefix=el+infinito+en+%2Caps%2C190&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51qZJqyLTFL._SX335_BO1,204,203,200_.jpg","readings":[]}],"books":[{"title":"Los chicos de la Nickel","author":{"name":"Colson Whitehead","link":"https://es.wikipedia.org/wiki/Colson_Whitehead"},"genre":"historical-fiction","link":"https://www.amazon.es/chicos-Nickel-Literatura-Random-House/dp/8439735898/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=313PMQTZ3FIH0&dchild=1&keywords=los+chicos+de+la+nickel&qid=1613042102&sprefix=los+chicos+de%2Caps%2C177&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/31hJ5+rCXwL._SX291_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-03-02"}]},{"title":"La insólita pasión del vendedor de lencería","author":{"name":"Asako Hiruta","link":"https://es.wikipedia.org/wiki/Asako_Hiruta"},"genre":"fiction","link":"https://www.amazon.es/ins%C3%B3lita-pasi%C3%B3n-del-vendedor-lencer%C3%ADa/dp/8416195870/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1JIK8D6ZL8Y9Y&dchild=1&keywords=la+insolita+pasion+del+vendedor+de+lenceria&qid=1614197380&sprefix=la+insolita+pas%2Caps%2C170&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51LdzN6e8iL._SX345_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-28","end_date":"2021-03-02"}]},{"title":"Una educación","author":{"name":"Tara Westover","link":"https://en.wikipedia.org/wiki/Tara_Westover"},"genre":"biography","link":"https://www.amazon.es/Una-educaci%C3%B3n-NARRATIVA-Tara-Westover/dp/8426405169/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=la+educaci%C3%B3n&qid=1614197183&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41VvTxZNdVL._SX324_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-24","end_date":"2021-02-27"}]},{"title":"Los asquerosos","author":{"name":"Santiago Lorenzo","link":"https://es.wikipedia.org/wiki/Santiago_Lorenzo"},"genre":"fiction","link":"https://www.amazon.es/Los-asquerosos-Santiago-Lorenzo/dp/8417059997/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=los+asquerosos&qid=1613843700&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41QVVRS+3ZL._SX333_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-22","end_date":"2021-02-24"}]},{"title":"Marx y la muñeca","author":{"name":"Maryam Madjidi","link":"https://en.wikipedia.org/wiki/Maryam_Madjidi"},"genre":"biography","link":"https://www.amazon.es/Marx-y-mu%C3%B1eca-Tour-force/dp/8494836609/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=marx+y+la+mu%C3%B1eca&qid=1613298364&s=books&sr=1-1","image":"https://images-na.ssl-images-amazon.com/images/I/51mQjsg9S6L._SX332_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-21","end_date":"2021-02-22"}]},{"title":"Contra el odio","author":{"name":"Carolin Emcke","link":"https://es.wikipedia.org/wiki/Carolin_Emcke"},"genre":"philosophy","link":"https://www.amazon.es/Contra-odio-pluralidad-pensamiento-tolerancia-ebook/dp/B01N9W9AGM/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=contra+el+odio&qid=1613843348&sr=8-1","image":"https://m.media-amazon.com/images/I/51v3D9f0Y-L.jpg","readings":[{"start_date":"2021-02-20","not_ended":true}]},{"title":"Odisea","author":{"name":"Homero","link":"https://es.wikipedia.org/wiki/Homero"},"genre":"classic","link":"https://www.amazon.es/ODISEA-Liberada-Homero/dp/8418187247/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=33R6HWPE240YC&dchild=1&keywords=la+odisea+blackie+books&qid=1613043104&sprefix=la+odisea+black%2Caps%2C170&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/4126NcUeu1L._SX367_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-16","end_date":"2021-02-20"}]},{"title":"El último verano","author":{"name":"Ricarda Huch","link":"https://es.wikipedia.org/wiki/Ricarda_Huch"},"genre":"epistle","link":"https://www.amazon.es/El-%C3%BAltimo-verano-Ricarda-Huch-ebook/dp/B07TWJFG47/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=el+ultimo+verano&qid=1613044133&sr=8-2","image":"https://m.media-amazon.com/images/I/51yXqlVbZAL.jpg","readings":[{"start_date":"2021-02-14","end_date":"2021-02-15"}]},{"title":"Biografía del silencio","author":{"name":"Pablo d\'Ors","link":"https://es.wikipedia.org/wiki/Pablo_d%27Ors"},"genre":"essay","link":"https://www.amazon.es/Biograf%C3%ADa-Silencio-Biblioteca-Ensayo-Serie/dp/8498418380/ref=sr_1_4?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3LLRDTY5FWL2R&dchild=1&keywords=biograf%C3%ADa+del+silencio+pablo+d%27ors&qid=1613141854&sprefix=biograf%C3%ADa+del+silen%2Caps%2C196&sr=8-4","image":"https://images-na.ssl-images-amazon.com/images/I/31jjvPPtWJL._SX355_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-12","end_date":"2021-02-14"}]},{"title":"La vida secreta de los árboles","author":{"name":"Peter Wohlleben","link":"https://en.wikipedia.org/wiki/Peter_Wohlleben"},"genre":"essay","link":"https://www.amazon.es/Vida-Secreta-%C3%A1rboles-ESPIRITUALIDAD-INTERIOR/dp/8491110836/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=la+vida+secreta+de+los+arboles&qid=1611917092&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/61CQU0mqYdL._SX330_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-09","end_date":"2021-02-12"}]},{"title":"La uruguaya","author":{"name":"Pedro Mairal","link":"https://es.wikipedia.org/wiki/Pedro_Mairal"},"genre":"fiction","link":"https://www.amazon.es/uruguaya-Libros-del-Asteroide/dp/8416213992/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=26DUK9VR4KI2I&dchild=1&keywords=la+uruguaya+pedro+mairal&qid=1612610231&sprefix=la+urug%2Caps%2C181&sr=8-1","image":"data:image/jpeg;base64,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","readings":[{"start_date":"2021-02-04","end_date":"2021-02-08"}]},{"title":"Hôzuki, la librería de Mitsuko","author":{"name":"Aki Shimazaki","link":"https://es.wikipedia.org/wiki/Aki_Shimazaki"},"genre":"fiction","link":"https://www.amazon.es/H%C3%B4zuki-librer%C3%ADa-Mitsuko-Otras-Latitudes/dp/8416830738/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=hozuki+la+librer%C3%ADa+de+mitsuko&qid=1611916753&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/515MN+e7KlL._SX326_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-02-01","end_date":"2021-02-02"}]},{"title":"Viento del este, viento del oeste","author":{"name":"Pearl S. Buck","link":"https://es.wikipedia.org/wiki/Pearl_S._Buck"},"genre":"fiction","link":"https://www.amazon.es/Viento-este-viento-oeste-SELLER/dp/8497598555/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1611859831&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51Fn8L+FI6L._SX329_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-01-28","end_date":"2021-01-30"}]},{"title":"El zapatero y su hija: Una memoria familiar de gente común en tiempos extraordinarios","author":{"name":"Conor O\'Clery","link":"https://en.wikipedia.org/wiki/Conor_O%27Clery"},"genre":"biography","link":"https://www.amazon.es/El-zapatero-hija-familiar-extraordinarios/dp/8491992448/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=la+hija+del+zapatero&qid=1610627136&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41lYxvP7n5L._SX316_BO1,204,203,200_.jpg","readings":[{"start_date":"2021-01-14","end_date":"2021-01-27"}]},{"title":"Una historia de la mentira","author":{"name":"Juan Jacinto Muñoz Rengel","link":"https://en.wikipedia.org/wiki/Juan_Jacinto_Mu%C3%B1oz_Rengel"},"genre":"philosophy","link":"https://www.amazon.es/Una-historia-mentira-775-Ensayo/dp/8491818898/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=una+historia+de+la+mentira&qid=1603800677&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/41k3MS9lZTL._SX335_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-10-25","end_date":"2020-10-28"}]},{"title":"Palabras radiantes (El Archivo de las Tormentas 2)","author":{"name":"Brandon Sanderson","link":"https://es.wikipedia.org/wiki/Brandon_Sanderson"},"genre":"fantasy","link":"https://www.amazon.es/Palabras-radiantes-Archivo-Tormentas-NOVA/dp/8466657541/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3I67GTYCJCVGB&dchild=1&keywords=el+archivo+de+las+tormentas+2&qid=1601653543&quartzVehicle=72-1783&replacementKeywords=el+archivo+de+las+tormentas&sprefix=el+archivo+de+las%2Caps%2C170&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51DslBidWuL._SX323_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-10-05","end_date":"2021-01-02"}]},{"title":"El camino de los reyes (El Archivo de las Tormentas 1)","author":{"name":"Brandon Sanderson","link":"https://es.wikipedia.org/wiki/Brandon_Sanderson"},"genre":"fantasy","link":"https://www.amazon.es/camino-reyes-Archivo-Tormentas-NOVA/dp/8466657665/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=el+archivo+de+las+tormentas&qid=1601477665&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51vkMGnYMQL._SX323_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-09-06","end_date":"2020-10-01"}]},{"title":"La espada rota","author":{"name":"Poul Anderson","link":"https://es.wikipedia.org/wiki/Poul_Anderson"},"genre":"fantasy","link":"https://www.amazon.es/espada-rota-Runas-Poul-Anderson/dp/8420683132/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=la+espada+rota&qid=1601478290&quartzVehicle=701-763&replacementKeywords=la+rota&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/514WFA7oAUL._SX328_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-08-31","end_date":"2020-09-05"}]},{"title":"Mejor la ausencia","author":{"name":"Edurne Portela","link":"https://es.wikipedia.org/wiki/Edurne_Portela_Camino"},"genre":"fiction","link":"https://www.amazon.es/Mejor-ausencia-Edurne-Portela-ebook/dp/B074913198/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=mejor+la+ausencia&qid=1601839271&sr=8-2","image":"https://m.media-amazon.com/images/I/41m4YBAf3iL.jpg","readings":[{"start_date":"2020-08-23","end_date":"2020-08-29"}]},{"title":"Mitos nórdicos","author":{"name":"Neil Gaiman","link":"https://es.wikipedia.org/wiki/Neil_Gaiman"},"genre":"mithology","link":"https://www.amazon.es/Mitos-n%C3%B3rdicos-%C3%81ncora-Delf%C3%ADn-Gaiman/dp/8423352838/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=mitos+n%C3%B3rdicos&qid=1601838798&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51L6imgV8xL._SX291_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-08-17","end_date":"2020-08-22"}]},{"title":"La casa del padre","author":{"name":"Karmele Jaio","link":"https://es.wikipedia.org/wiki/Karmele_Jaio"},"genre":"fiction","link":"https://www.amazon.es/casa-del-padre-Karmele-Jaio-ebook/dp/B0825CZG6D/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=la+casa+del+padre&qid=1601839110&sr=8-1","image":"https://m.media-amazon.com/images/I/41i+YCPLNvL.jpg","readings":[{"start_date":"2020-08-15","end_date":"2020-08-16"}]},{"title":"El ojo del mundo","author":{"name":"Robert Jordan","link":"https://es.wikipedia.org/wiki/Robert_Jordan"},"genre":"fantasy","link":"https://www.amazon.es/El-ojo-del-mundo-Biblioteca/dp/8445007009/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=el+ojo+del+mundo&qid=1601897924&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51KYxhY4zcL._SX308_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-08-02","end_date":"2020-08-14"}]},{"title":"Los hijos de Húrin","author":{"name":"J. R. R. Tolkien","link":"https://es.wikipedia.org/wiki/J._R._R._Tolkien"},"genre":"fantasy","link":"https://www.amazon.es/Los-hijos-H%C3%BArin-Biblioteca-Tolkien/dp/8445077279/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=los+hijos+de+hurin&qid=1601897458&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51i-cz28MZL._SX329_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-07-25","end_date":"2020-07-31"}]},{"title":"Sostiene Pereira","author":{"name":"Antonio Tabucchi","link":"https://es.wikipedia.org/wiki/Antonio_Tabucchi"},"genre":"fiction","link":"https://www.amazon.es/Sostiene-Pereira-Otra-vuelta-tuerca-ebook/dp/B01M0X0500/ref=sr_1_2?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=sostiene+pereira&qid=1601899656&sr=8-2","image":"https://m.media-amazon.com/images/I/41hTVewaNFL.jpg","readings":[{"start_date":"2020-07-18","end_date":"2020-07-23"}]},{"title":"Estación de tormentas","author":{"name":"Andrzej Sapkowski","link":"https://es.wikipedia.org/wiki/Andrzej_Sapkowski"},"genre":"fantasy","link":"https://www.amazon.es/Estacion-tormentas-Geralt-Alamut-Fant%C3%A1stica/dp/8498891027/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=estacion+de+tormentas&qid=1601899765&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/511PFWBiDcL._SX334_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-07-10","end_date":"2020-07-17"}]},{"title":"El cuento de la criada","author":{"name":"Margaret Atwood","link":"https://es.wikipedia.org/wiki/Margaret_Atwood"},"genre":"fiction","link":"https://www.amazon.es/cuento-criada-Narrativa-Margaret-Atwood/dp/8498389070/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1601900323&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/2124BKYSeRL._SX308_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-07-04","end_date":"2020-07-08"}]},{"title":"Aporofobia","author":{"name":"Adela Cortina","link":"https://es.wikipedia.org/wiki/Adela_Cortina"},"genre":"philosophy","link":"https://www.amazon.es/Aporofobia-rechazo-pobre-democracia-Sociedad/dp/8449333385/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=aporofobia&qid=1601899218&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51L6GnPWFJL._SX335_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-06-28","end_date":"2020-07-01"}]},{"title":"Patria","author":{"name":"Fernando Aramburu","link":"https://es.wikipedia.org/wiki/Fernando_Aramburu"},"genre":"historical-fiction","link":"https://www.amazon.es/Patria-Andanzas-Fernando-Aramburu/dp/849066319X/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=patria&qid=1601899149&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51tuw7drN6L._SX327_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-06-15","end_date":"2020-06-25"}]},{"title":"A sangre y fuego: Héroes, bestias y mártires de España","author":{"name":"Manuel Chaves Nogales","link":"https://es.wikipedia.org/wiki/Manuel_Chaves_Nogales"},"genre":"historical-fiction","link":"https://www.amazon.es/sangre-fuego-He%CC%81roes-bestias-ma%CC%81rtires/dp/841562557X/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=a+sangre+y+fuego&qid=1601898797&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51wWezmfgyL._SX312_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-06-10","end_date":"2020-06-14"}]},{"title":"La invención de la naturaleza","author":{"name":"Andrea Wulf","link":"https://en.wikipedia.org/wiki/Andrea_Wulf"},"genre":"historical","link":"https://www.amazon.es/invenci%C3%B3n-naturaleza-Alexander-Humboldt-Biograf%C3%ADas/dp/8430618082/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=la+invencion+de+la+naturaleza&qid=1601899493&sr=8-1","image":"https://images-na.ssl-images-amazon.com/images/I/51RGXioYJ3L._SX311_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-05-20","end_date":"2020-06-07"}]},{"title":"Ordesa","author":{"name":"Manuel Vilas","link":"https://es.wikipedia.org/wiki/Manuel_Vilas"},"genre":"biography","link":"https://www.amazon.es/Ordesa-Manuel-Vilas-ebook/dp/B077BJ77C1/ref=sr_1_1?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=ordesa&qid=1601899385&sr=8-1","image":"https://m.media-amazon.com/images/I/41Rm1k7ARML.jpg","readings":[{"start_date":"2020-05-10","end_date":"2020-05-19"}]},{"title":"Sidi","author":{"name":"Árturo Pérez Reverte","link":"https://es.wikipedia.org/wiki/Arturo_P%C3%A9rez-Reverte"},"genre":"historical-fiction","link":"https://www.amazon.es/Sidi-HISPANICA-Arturo-P%C3%A9rez-Reverte/dp/8420435473/ref=sr_1_3?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=sidi&qid=1601899990&sr=8-3","image":"http://www.aldialibros.com/wp-content/uploads/2019/09/Sidi.jpg","readings":[{"start_date":"2020-05-05","end_date":"2020-05-09"}]},{"title":"Novela de ajedrez","author":{"name":"Stefan Zweig","link":"https://es.wikipedia.org/wiki/Stefan_Zweig"},"genre":"fiction","link":"https://www.amazon.es/Novela-Ajedrez-Narrativa-del-Acantilado/dp/8495359456/ref=sr_1_11?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=37HONDUTOPJRV&dchild=1&keywords=una+partida+de+ajedrez&qid=1613319817&sprefix=una+partida+de+aj%2Caps%2C171&sr=8-11","image":"https://images-na.ssl-images-amazon.com/images/I/41vwKWZOT3L._SX315_BO1,204,203,200_.jpg","readings":[{"start_date":"2020-05-02","end_date":"2020-05-04"}]}]}')},wEUz:function(e,a,i){"use strict";i.r(a);var t=i("q1tI"),r=i.n(t),s=i("KOkz"),n=i("trGd");a.default=function(e){var a=e.location;return r.a.createElement(s.a,{location:a,library:n})}}}]);
//# sourceMappingURL=component---src-pages-wiki-library-charlie-js-736b61c1e8b81aa7d26f.js.map