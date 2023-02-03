  !function(){'use strict';var n='initCookieConsent';'undefined'!=typeof window&&'function'!=typeof window[n]&&(window[n]=function(n){var t,e,o,i,r,c,a,u,f,d,v,s,l,b,p,m,y,w,g,h,_,k,x,O,j,S,T,J,N,D,C,I,E={mode:'opt-in',current_lang:'en',auto_language:null,autorun:!0,page_scripts:!0,hide_from_bots:!0,cookie_name:'cc_cookie',cookie_expiration:182,cookie_domain:window.location.hostname,cookie_path:'/',cookie_same_site:'Lax',use_rfc_cookie:!1,autoclear_cookies:!0,revision:0,script_selector:'data-cookiecategory'},U={},z={},R=null,A=!0,G=!1,L=!1,M=!1,P=!1,q=!1,B=!0,F=[],H=!1,K=[],Q=[],V=[],W=!1,X=[],Y=[],Z=[],$=[],nn=[],tn=document.documentElement,en=function(n){'number'==typeof(t=n).cookie_expiration&&(E.cookie_expiration=t.cookie_expiration),'number'==typeof t.cookie_necessary_only_expiration&&(E.cookie_necessary_only_expiration=t.cookie_necessary_only_expiration),'boolean'==typeof t.autorun&&(E.autorun=t.autorun),'string'==typeof t.cookie_domain&&(E.cookie_domain=t.cookie_domain),'string'==typeof t.cookie_same_site&&(E.cookie_same_site=t.cookie_same_site),'string'==typeof t.cookie_path&&(E.cookie_path=t.cookie_path),'string'==typeof t.cookie_name&&(E.cookie_name=t.cookie_name),'function'==typeof t.onAccept&&(u=t.onAccept),'function'==typeof t.onFirstAction&&(d=t.onFirstAction),'function'==typeof t.onChange&&(f=t.onChange),'opt-out'===t.mode&&(E.mode='opt-out'),'number'==typeof t.revision&&(t.revision>-1&&(E.revision=t.revision),q=!0),'boolean'==typeof t.autoclear_cookies&&(E.autoclear_cookies=t.autoclear_cookies),!0===t.use_rfc_cookie&&(E.use_rfc_cookie=!0),'boolean'==typeof t.hide_from_bots&&(E.hide_from_bots=t.hide_from_bots),E.hide_from_bots&&(W=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),E.page_scripts=!0===t.page_scripts,'browser'===t.auto_language||!0===t.auto_language?E.auto_language='browser':'document'===t.auto_language&&(E.auto_language='document'),E.auto_language,E.current_lang=vn(t.languages,t.current_lang)},on=function(n){for(var t='accept-',e=a('c-settings'),o=a(t+'all'),i=a(t+'necessary'),r=a(t+'custom'),c=0;c<e.length;c++)e[c].setAttribute('aria-haspopup','dialog'),gn(e[c],'click',(function(n){n.preventDefault(),U.showSettings(0)}));for(c=0;c<o.length;c++)gn(o[c],'click',(function(n){u(n,'all')}));for(c=0;c<r.length;c++)gn(r[c],'click',(function(n){u(n)}));for(c=0;c<i.length;c++)gn(i[c],'click',(function(n){u(n,[])}));function a(t){return(n||document).querySelectorAll('a[data-cc="'+t+'"], button[data-cc="'+t+'"]')}function u(n,t){n.preventDefault(),U.accept(t),U.hideSettings(),U.hide()}},rn=function(n,t){return Object.prototype.hasOwnProperty.call(t,n)?n:hn(t).length>0?Object.prototype.hasOwnProperty.call(t,E.current_lang)?E.current_lang:hn(t)[0]:void 0},cn=function(n){if(!0===t.force_consent&&_n(tn,'force--consent'),!m){m=dn('div');var e=dn('div'),o=dn('div');m.id='cm',e.id='c-inr-i',o.id='cm-ov',m.setAttribute('role','dialog'),m.setAttribute('aria-modal','true'),m.setAttribute('aria-hidden','false'),m.setAttribute('aria-labelledby','c-ttl'),m.setAttribute('aria-describedby','c-txt'),p.appendChild(m),p.appendChild(o),m.style.visibility=o.style.visibility='hidden',o.style.opacity=0}var i=t.languages[n].consent_modal.title;i&&(y||((y=dn('div')).id='c-ttl',y.setAttribute('role','heading'),y.setAttribute('aria-level','2'),e.appendChild(y)),y.innerHTML=i);var r=t.languages[n].consent_modal.description;q&&(r=B?r.replace('{{revision_message}}',''):r.replace('{{revision_message}}',t.languages[n].consent_modal.revision_message||'')),w||((w=dn('div')).id='c-txt',e.appendChild(w)),w.innerHTML=r;var c,a=t.languages[n].consent_modal.primary_btn,u=t.languages[n].consent_modal.secondary_btn;a&&(g||((g=dn('button')).id='c-p-bn',g.className='c-bn','accept_all'===a.role&&(c='all'),gn(g,'click',(function(){U.hide(),U.accept(c)}))),g.innerHTML=t.languages[n].consent_modal.primary_btn.text),u&&(h||((h=dn('button')).id='c-s-bn',h.className='c-bn c_link','accept_necessary'===u.role?gn(h,'click',(function(){U.hide(),U.accept([])})):gn(h,'click',(function(){U.showSettings(0)}))),h.innerHTML=t.languages[n].consent_modal.secondary_btn.text);var f=t.gui_options;k||((k=dn('div')).id='c-inr',k.appendChild(e)),_||((_=dn('div')).id='c-bns',f&&f.consent_modal&&!0===f.consent_modal.swap_buttons?(u&&_.appendChild(h),a&&_.appendChild(g),_.className='swap'):(a&&_.appendChild(g),u&&_.appendChild(h)),(a||u)&&k.appendChild(_),m.appendChild(k)),G=!0},an=function(n){if(x)(J=dn('div')).id='s-bl';else{x=dn('div');var e=dn('div'),o=dn('div'),i=dn('div');O=dn('div'),j=dn('div');var r=dn('div');S=dn('button');var u=dn('div');T=dn('div');var f=dn('div');x.id='s-cnt',e.id='c-vln',i.id='c-s-in',o.id='cs',j.id='s-ttl',O.id='s-inr',r.id='s-hdr',T.id='s-bl',S.id='s-c-bn',f.id='cs-ov',u.id='s-c-bnc',S.className='c-bn',x.setAttribute('role','dialog'),x.setAttribute('aria-modal','true'),x.setAttribute('aria-hidden','true'),x.setAttribute('aria-labelledby','s-ttl'),j.setAttribute('role','heading'),x.style.visibility=f.style.visibility='hidden',f.style.opacity=0,u.appendChild(S),gn(e,'keydown',(function(n){27===(n=n||window.event).keyCode&&U.hideSettings(0)}),!0),gn(S,'click',(function(){U.hideSettings(0)}))}S.setAttribute('aria-label',t.languages[n].settings_modal.close_btn_label||'Close'),a=t.languages[n].settings_modal.blocks,c=t.languages[n].settings_modal.cookie_table_headers;var d=a.length;j.innerHTML=t.languages[n].settings_modal.title;for(var v=0;v<d;++v){var s=a[v].title,l=a[v].description,b=a[v].toggle,m=a[v].cookie_table,y=!0===t.remove_cookie_tables,w=(l||!y&&m)&&'truthy',g=dn('div'),h=dn('div');if(l){var _=dn('div');_.className='p',_.insertAdjacentHTML('beforeend',l)}var k=dn('div');if(k.className='title',g.className='c-bl',h.className='desc',void 0!==b){var E='c-ac-'+v,R=dn(w?'button':'div'),G=dn('label'),L=dn('input'),M=dn('span'),P=dn('span'),q=dn('span'),B=dn('span');R.className=w?'b-tl exp':'b-tl',G.className='b-tg',L.className='c-tgl',q.className='on-i',B.className='off-i',M.className='c-tg',P.className='t-lb',w&&(R.setAttribute('aria-expanded','false'),R.setAttribute('aria-controls',E)),L.type='checkbox',M.setAttribute('aria-hidden','true');var F=b.value;L.value=F,P.textContent=s,R.insertAdjacentHTML('beforeend',s),k.appendChild(R),M.appendChild(q),M.appendChild(B),A?b.enabled?(L.checked=!0,!J&&Z.push(!0),b.enabled&&!J&&V.push(F)):!J&&Z.push(!1):fn(z.categories,F)>-1?(L.checked=!0,!J&&Z.push(!0)):!J&&Z.push(!1),!J&&$.push(F),b.readonly?(L.disabled=!0,_n(M,'c-ro'),!J&&nn.push(!0)):!J&&nn.push(!1),_n(h,'b-acc'),_n(k,'b-bn'),_n(g,'b-ex'),h.id=E,h.setAttribute('aria-hidden','true'),G.appendChild(L),G.appendChild(M),G.appendChild(P),k.appendChild(G),w&&function(n,t,e){gn(R,'click',(function(){xn(t,'act')?(kn(t,'act'),e.setAttribute('aria-expanded','false'),n.setAttribute('aria-hidden','true')):(_n(t,'act'),e.setAttribute('aria-expanded','true'),n.setAttribute('aria-hidden','false'))}),!1)}(h,g,R)}else if(s){var H=dn('div');H.className='b-tl',H.setAttribute('role','heading'),H.setAttribute('aria-level','3'),H.insertAdjacentHTML('beforeend',s),k.appendChild(H)}if(s&&g.appendChild(k),l&&h.appendChild(_),!y&&void 0!==m){for(var K=document.createDocumentFragment(),Q=0;Q<c.length;++Q){var W=dn('th'),X=c[Q];if(W.setAttribute('scope','col'),X){var Y=X&&hn(X)[0];W.textContent=c[Q][Y],K.appendChild(W)}}var tn=dn('tr');tn.appendChild(K);var en=dn('thead');en.appendChild(tn);var on=dn('table');on.appendChild(en);for(var rn=document.createDocumentFragment(),cn=0;cn<m.length;cn++){for(var an=dn('tr'),un=0;un<c.length;++un)if(X=c[un]){Y=hn(X)[0];var vn=dn('td');vn.insertAdjacentHTML('beforeend',m[cn][Y]),vn.setAttribute('data-column',X[Y]),an.appendChild(vn)}rn.appendChild(an)}var sn=dn('tbody');sn.appendChild(rn),on.appendChild(sn),h.appendChild(on)}(b&&s||!b&&(s||l))&&(g.appendChild(h),J?J.appendChild(g):T.appendChild(g))}N||((N=dn('div')).id='s-bns'),C||((C=dn('button')).id='s-all-bn',C.className='c-bn',N.appendChild(C),gn(C,'click',(function(){U.hideSettings(),U.hide(),U.accept('all')}))),C.innerHTML=t.languages[n].settings_modal.accept_all_btn;var ln=t.languages[n].settings_modal.reject_all_btn;if(ln&&(I||((I=dn('button')).id='s-rall-bn',I.className='c-bn',gn(I,'click',(function(){U.hideSettings(),U.hide(),U.accept([])})),O.className='bns-t',N.appendChild(I)),I.innerHTML=ln),D||((D=dn('button')).id='s-sv-bn',D.className='c-bn',N.appendChild(D),gn(D,'click',(function(){U.hideSettings(),U.hide(),U.accept()}))),D.innerHTML=t.languages[n].settings_modal.save_settings_btn,J)return O.replaceChild(J,T),void(T=J);r.appendChild(j),r.appendChild(u),O.appendChild(r),O.appendChild(T),O.appendChild(N),i.appendChild(O),o.appendChild(i),e.appendChild(o),x.appendChild(e),p.appendChild(x),p.appendChild(f)};U.updateLanguage=function(n,e){if('string'==typeof n){var o=rn(n,t.languages);return(o!==E.current_lang||!0===e)&&(E.current_lang=o,G&&(cn(o),on(k)),an(o),!0)}};var un=function(n){var t=a.length,e=-1;H=!1;var o=yn('','all'),i=[E.cookie_domain,'.'+E.cookie_domain];if('www.'===E.cookie_domain.slice(0,4)){var r=E.cookie_domain.substr(4);i.push(r),i.push('.'+r)}for(var u=0;u<t;u++){var f=a[u];if(Object.prototype.hasOwnProperty.call(f,'toggle')){var d=fn(F,f.toggle.value)>-1;if(!Z[++e]&&Object.prototype.hasOwnProperty.call(f,'cookie_table')&&(n||d)){var v=f.cookie_table,s=hn(c[0])[0],l=v.length;'on_disable'===f.toggle.reload&&d&&(H=!0);for(var b=0;b<l;b++){var p=v[b],m=[],y=p[s],w=p.is_regex||!1,g=p.domain||null,h=p.path||!1;if(g&&(i=[g,'.'+g]),w)for(var _=0;_<o.length;_++)o[_].match(y)&&m.push(o[_]);else{var k=fn(o,y);k>-1&&m.push(o[k])}m.length>0&&(wn(m,h,i),'on_clear'===f.toggle.reload&&(H=!0))}}}}},fn=function(n,t){return n.indexOf(t)},dn=function(n){var t=document.createElement(n);return'button'===n&&t.setAttribute('type',n),t},vn=function(n,t){return'browser'===E.auto_language?rn(sn(),n):'document'===E.auto_language?rn(document.documentElement.lang,n):'string'==typeof t?E.current_lang=rn(t,n):(E.current_lang,E.current_lang)},sn=function(){var n=navigator.language||navigator.browserLanguage;return n.length>2&&(n=n[0]+n[1]),n.toLowerCase()};U.allowedCategory=function(n){if(A&&'opt-in'!==E.mode)t=V;else var t=JSON.parse(yn(E.cookie_name,'one',!0)||'{}').categories||[];return fn(t,n)>-1},U.run=function(t){if(!document.getElementById('cc_div')){if(en(t),W)return;z=JSON.parse(yn(E.cookie_name,'one',!0)||'{}');var c=void 0!==(i=z.consent_uuid);if((e=z.consent_date)&&(e=new Date(e)),(o=z.last_consent_update)&&(o=new Date(o)),R=void 0!==z.data?z.data:null,q&&z.revision!==E.revision&&(B=!1),G=A=!(c&&B&&e&&o&&i),function(){(b=dn('div')).id='cc--main',b.style.position='fixed',b.style.zIndex='1000000',b.innerHTML='\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e',p=b.children[0];var t=E.current_lang;G&&cn(t),an(t),(n||document.body).appendChild(b)}(),function(){var n=['[href]','button','input','details','[tabindex="0"]'];function t(t,e){var o=!1,i=!1;try{for(var r,c=t.querySelectorAll(n.join(':not([tabindex="-1"]), ')),a=c.length,u=0;u<a;)r=c[u].getAttribute('data-focus'),i||'1'!==r?'0'===r&&(o=c[u],i||'0'===c[u+1].getAttribute('data-focus')||(i=c[u+1])):i=c[u],u++}catch(e){return t.querySelectorAll(n.join(', '))}e[0]=c[0],e[1]=c[c.length-1],e[2]=o,e[3]=i}t(O,Y),G&&t(m,X)}(),function(n,t){if('object'==typeof n){var e=n.consent_modal,o=n.settings_modal;G&&e&&i(m,['box','bar','cloud'],['top','middle','bottom'],['zoom','slide'],e.layout,e.position,e.transition),o&&i(x,['bar'],['left','right'],['zoom','slide'],o.layout,o.position,o.transition)}function i(n,t,e,o,i,r,c){if(r=r&&r.split(' ')||[],fn(t,i)>-1&&(_n(n,i),('bar'!==i||'middle'!==r[0])&&fn(e,r[0])>-1))for(var a=0;a<r.length;a++)_n(n,r[a]);fn(o,c)>-1&&_n(n,c)}}(t.gui_options),on(),E.autorun&&G&&U.show(t.delay||0),setTimeout((function(){_n(b,'c--anim')}),30),setTimeout((function(){var n,t;n=!1,t=!1,gn(document,'keydown',(function(e){'Tab'===(e=e||window.event).key&&(r&&(e.shiftKey?document.activeElement===r[0]&&(r[1].focus(),e.preventDefault()):document.activeElement===r[1]&&(r[0].focus(),e.preventDefault()),t||P||(t=!0,!n&&e.preventDefault(),e.shiftKey?r[3]?r[2]?r[2].focus():r[0].focus():r[1].focus():r[3]?r[3].focus():r[0].focus())),!t&&(n=!0))})),document.contains&&gn(b,'click',(function(n){n=n||window.event,M?O.contains(n.target)?P=!0:(U.hideSettings(0),P=!1):L&&m.contains(n.target)&&(P=!0)}),!0)}),100),A)'opt-out'===E.mode&&(E.mode,ln(V));else{var a='boolean'==typeof z.rfc_cookie;(!a||a&&z.rfc_cookie!==E.use_rfc_cookie)&&(z.rfc_cookie=E.use_rfc_cookie,mn(E.cookie_name,JSON.stringify(z))),v=pn(bn()),ln(),'function'==typeof u&&u(z)}}},U.showSettings=function(n){setTimeout((function(){_n(tn,'show--settings'),x.setAttribute('aria-hidden','false'),M=!0,setTimeout((function(){L?l=document.activeElement:s=document.activeElement,0!==Y.length&&(Y[3]?Y[3].focus():Y[0].focus(),r=Y)}),200)}),n>0?n:0)};var ln=function(n){if(E.page_scripts){var t=document.querySelectorAll('script['+E.script_selector+']'),e=n||z.categories||[],o=function(n,t){if(t<n.length){var i=n[t],r=i.getAttribute(E.script_selector);if(fn(e,r)>-1){i.type='text/javascript',i.removeAttribute(E.script_selector);var c=i.getAttribute('data-src');c&&i.removeAttribute('data-src');var a=dn('script');if(a.textContent=i.innerHTML,function(n,t){for(var e=t.attributes,o=e.length,i=0;i<o;i++){var r=e[i].nodeName;n.setAttribute(r,t[r]||t.getAttribute(r))}}(a,i),c?a.src=c:c=i.src,c&&(a.readyState?a.onreadystatechange=function(){'loaded'!==a.readyState&&'complete'!==a.readyState||(a.onreadystatechange=null,o(n,++t))}:a.onload=function(){a.onload=null,o(n,++t)}),i.parentNode.replaceChild(a,i),c)return}o(n,++t)}};o(t,0)}};U.set=function(n,t){return'data'===n&&function(n,t){var e=!1;if('update'===t){var o=typeof(R=U.get('data'))==typeof n;if(o&&'object'==typeof R)for(var i in!R&&(R={}),n)R[i]!==n[i]&&(R[i]=n[i],e=!0);else!o&&R||R===n||(R=n,e=!0)}else R=n,e=!0;return e&&(z.data=R,mn(E.cookie_name,JSON.stringify(z))),e}(t.value,t.mode)},U.get=function(n,t){return JSON.parse(yn(t||E.cookie_name,'one',!0)||'{}')[n]},U.getConfig=function(n){return E[n]||t[n]};var bn=function(){return K=z.categories||[],Q=$.filter((function(n){return-1===fn(K,n)})),{accepted:K,rejected:Q}},pn=function(n){var t='custom',e=nn.filter((function(n){return!0===n})).length;return n.accepted.length===$.length?t='all':n.accepted.length===e&&(t='necessary'),t};U.getUserPreferences=function(){var n=bn();return{accept_type:pn(n),accepted_categories:n.accepted,rejected_categories:n.rejected}},U.loadScript=function(n,t,e){var o='function'==typeof t;if(document.querySelector('script[src="'+n+'"]'))o&&t();else{var i=dn('script');if(e&&e.length>0)for(var r=0;r<e.length;++r)e[r]&&i.setAttribute(e[r].name,e[r].value);o&&(i.onload=t),i.src=n,document.head.appendChild(i)}},U.updateScripts=function(){ln()},U.show=function(n,t){!0===t&&cn(E.current_lang),G&&setTimeout((function(){_n(tn,'show--consent'),m.setAttribute('aria-hidden','false'),L=!0,setTimeout((function(){s=document.activeElement,r=X}),200)}),n>0?n:t?30:0)},U.hide=function(){G&&(kn(tn,'show--consent'),m.setAttribute('aria-hidden','true'),L=!1,setTimeout((function(){s.focus(),r=null}),200))},U.hideSettings=function(){kn(tn,'show--settings'),M=!1,x.setAttribute('aria-hidden','true'),setTimeout((function(){L?(l&&l.focus(),r=X):(s&&s.focus(),r=null),P=!1}),200)},U.accept=function(n,t){var r=n||void 0,c=t||[],a=[];if(r)if('object'==typeof r&&'number'==typeof r.length)for(var s=0;s<r.length;s++)-1!==fn($,r[s])&&a.push(r[s]);else'string'==typeof r&&('all'===r?a=$.slice():-1!==fn($,r)&&a.push(r));else a=function(){for(var n=document.querySelectorAll('.c-tgl')||[],t=[],e=0;e<n.length;e++)n[e].checked&&t.push(n[e].value);return t}();if(c.length>=1)for(s=0;s<c.length;s++)a=a.filter((function(n){return n!==c[s]}));for(s=0;s<$.length;s++)!0===nn[s]&&-1===fn(a,$[s])&&a.push($[s]);!function(n){F=[];var t=document.querySelectorAll('.c-tgl')||[];if(t.length>0)for(var r=0;r<t.length;r++)-1!==fn(n,$[r])?(t[r].checked=!0,Z[r]||(F.push($[r]),Z[r]=!0)):(t[r].checked=!1,Z[r]&&(F.push($[r]),Z[r]=!1));!A&&E.autoclear_cookies&&F.length>0&&un(),e||(e=new Date),i||(i=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(n){try{return(n^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>n/4).toString(16)}catch(n){return''}}))),z={categories:n,level:n,revision:E.revision,data:R,rfc_cookie:E.use_rfc_cookie,consent_date:e.toISOString(),consent_uuid:i},(A||F.length>0)&&(B=!0,o=o?new Date:e,z.last_consent_update=o.toISOString(),v=pn(bn()),mn(E.cookie_name,JSON.stringify(z)),ln()),A&&(E.autoclear_cookies&&un(!0),'function'==typeof d&&d(U.getUserPreferences(),z),'function'==typeof u&&u(z),A=!1,'opt-in'===E.mode)||('function'==typeof f&&F.length>0&&f(z,F),H&&window.location.reload())}(a)},U.eraseCookies=function(n,t,e){var o=[],i=e?[e,'.'+e]:[E.cookie_domain,'.'+E.cookie_domain];if('object'==typeof n&&n.length>0)for(var r=0;r<n.length;r++)this.validCookie(n[r])&&o.push(n[r]);else this.validCookie(n)&&o.push(n);wn(o,t,i)};var mn=function(n,t){var e=E.cookie_expiration;'number'==typeof E.cookie_necessary_only_expiration&&'necessary'===v&&(e=E.cookie_necessary_only_expiration),t=E.use_rfc_cookie?encodeURIComponent(t):t;var o=new Date;o.setTime(o.getTime()+24*e*60*60*1e3);var i=n+'='+(t||'')+'; expires='+o.toUTCString()+'; Path='+E.cookie_path+';';i+=' SameSite='+E.cookie_same_site+';',window.location.hostname.indexOf('.')>-1&&(i+=' Domain='+E.cookie_domain+';'),'https:'===window.location.protocol&&(i+=' Secure;'),document.cookie=i},yn=function(n,t,e){var o;if('one'===t){if((o=(o=document.cookie.match('(^|;)\\s*'+n+'\\s*=\\s*([^;]+)'))?e?o.pop():n:'')&&n===E.cookie_name){try{o=JSON.parse(o)}catch(n){try{o=JSON.parse(decodeURIComponent(o))}catch(n){o={}}}o=JSON.stringify(o)}}else if('all'===t){var i=document.cookie.split(/;\s*/);o=[];for(var r=0;r<i.length;r++)o.push(i[r].split('=')[0])}return o},wn=function(n,t,e){for(var o=t||'/',i=0;i<n.length;i++){for(var r=0;r<e.length;r++)document.cookie=n[i]+'=; path='+o+(0==e[r].indexOf('.')?'; domain='+e[r]:'')+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';n[i]}};U.validCookie=function(n){return''!==yn(n,'one',!0)};var gn=function(n,t,e,o){n.addEventListener(t,e,!0===o&&{passive:!0})},hn=function(n){if('object'==typeof n)return Object.keys(n)},_n=function(n,t){n.classList.add(t)},kn=function(n,t){n.classList.remove(t)},xn=function(n,t){return n.classList.contains(t)};return U})}();
 
  
 var adBlockActive = false;
 var inEU;
 
 const fetches = [
    fetch('https://ipwho.is/'),
    fetch('https://ipapi.co/json/'),
    fetch('https://find-ip.openjavascript.info')
];

// Now get fatest fetch...

async function loader() {
    const res = await Promise.any(fetches);
    const obj = await res.json();
    let api = res.url;
    if (api.endsWith("/")) {
        api = api.slice(0, -1);
    }
    console.log(api);
    if (api === 'https://ipapi.co/json') {
        return [obj.ip, obj.country_code];
    } else if (api === 'https://ipwho.is') {
        return [obj.ip, obj.country_code];
    } else if (api === 'https://find-ip.openjavascript.info') {
        return [obj.iso.traits.ipAddress, obj.iso.country.isoCode];
    } 
}

(async function main() {
     const res = await loader();

     const EUCodes = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE"];
     console.log(res);
     const hasISO = res[1];
     if (hasISO) {
       inEU = (EUCodes.includes(res[1]));
       console.log("inEU="+inEU);  
   
     } else {
       if (document.readyState !== 'loading') {
           loadLimited();
       } else {
           document.addEventListener('DOMContentLoaded', function () {
           loadLimited();
       });
       }
     }
     
          if (inEU === true) {

           // obtain plugin
           var cc = initCookieConsent();

           // run plugin with your configuration
           cc.run({
               gui_options: {
               consent_modal: {
                   layout: 'bar',               // box/cloud/bar
                   position: 'top center',     // bottom/middle/top + left/right/center
                   transition: 'slide',           // zoom/slide
                   swap_buttons: false            // enable to invert buttons
                   },
                   settings_modal: {
                       layout: 'box',                 // box/bar
                       position: 'left',           // left/right
                       transition: 'slide'            // zoom/slide
                   }
               },
               current_lang: 'en',
               autoclear_cookies: true,                   // default: false
               page_scripts: true,                        // default: false

               // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
               // delay: 0,                               // default: 0
               // auto_language: '',                      // default: null; could also be 'browser' or 'document'
               // autorun: true,                          // default: true
               // force_consent: false,                   // default: false
               // hide_from_bots: false,                  // default: false
               // remove_cookie_tables: false             // default: false
               // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
               // cookie_expiration: 182,                 // default: 182 (days)
               // cookie_necessary_only_expiration: 182   // default: disabled
               // cookie_domain: location.hostname,       // default: current domain
               // cookie_path: '/',                       // default: root
               // cookie_same_site: 'Lax',                // default: 'Lax'
               // use_rfc_cookie: false,                  // default: false
               // revision: 0,                            // default: 0

               onFirstAction: function(user_preferences, cookie){
                   // callback triggered only once on the first accept/reject action
               },

               onAccept: function (cookie) {
                   if (cookie.level.includes("targeting")) {
                       if (document.readyState !== 'loading') {
                           loadComplete();
                           loadAnalytics();
                       } else {
                           document.addEventListener('DOMContentLoaded', function () {
                           loadComplete();
                           loadAnalytics();
                       });
                       }
                   }
                   else {
                       if (document.readyState !== 'loading') {
                           loadLimited();
                       } else {
                           document.addEventListener('DOMContentLoaded', function () {
                           loadLimited();
                       });
                       }
                   }
               },

               onChange: function (cookie, changed_categories) {
                   // callback triggered when user changes preferences after consent has already been given
               },

               languages: {
                   'en': {
                       consent_modal: {
                           title: 'We use cookies!',
                           description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
                           primary_btn: {
                               text: 'Accept all',
                               role: 'accept_all'              // 'accept_selected' or 'accept_all'
                           },
                           secondary_btn: {
                               text: 'Reject all',
                               role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                           }
                       },
                       settings_modal: {
                           title: 'Cookie preferences',
                           save_settings_btn: 'Save settings',
                           accept_all_btn: 'Accept all',
                           reject_all_btn: 'Reject all',
                           close_btn_label: 'Close',
                           cookie_table_headers: [
                               {col1: 'Name'},
                               {col2: 'Domain'},
                               {col3: 'Expiration'},
                               {col4: 'Description'}
                           ],
                           blocks: [
                               {
                                   title: 'Cookie usage ðŸ“¢',
                                   description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
                               }, {
                                   title: 'Strictly necessary cookies',
                                   description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                                   toggle: {
                                       value: 'necessary',
                                       enabled: true,
                                       readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                                   }
                               }, {
                                   title: 'Performance and Analytics cookies',
                                   description: 'These cookies allow the website to remember the choices you have made in the past',
                                   toggle: {
                                       value: 'analytics',     // your cookie category
                                       enabled: false,
                                       readonly: false
                                   },
                                   cookie_table: [             // list of all expected cookies
                                       {
                                           col1: '^_ga',       // match all cookies starting with "_ga"
                                           col2: 'google.com',
                                           col3: '2 years',
                                           col4: 'description ...',
                                           is_regex: true
                                       },
                                       {
                                           col1: '_gid',
                                           col2: 'google.com',
                                           col3: '1 day',
                                           col4: 'description ...',
                                       }
                                   ]
                               }, {
                                   title: 'Advertisement and Targeting cookies',
                                   description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                                   toggle: {
                                       value: 'targeting',
                                       enabled: false,
                                       readonly: false
                                   }
                               }, {
                                   title: 'More information',
                                   description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
                               }
                           ]
                       }
                   }
               }
           });
         
     }
     if (inEU === false) { 
       if (document.readyState !== 'loading') {
           loadComplete();
           loadAnalytics();
       } else {
           document.addEventListener('DOMContentLoaded', function () {
           loadComplete();
           loadAnalytics();
       });
       }
     }

})();
   

   function loadComplete() {
       
       console.log("Load complete...");
       sessionStorage.setItem('inEU', 'false');
       
       let script = document.createElement('script');
       script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7737139499802016";
       script.crossorigin = "anonymous";
       document.body.appendChild(script);
       
       if (document.querySelector('.flex-top')) {
            
            const ins = `
            <ins class="adsbygoogle"
             style="display:block; text-align:center;"
             data-ad-layout="in-article"
             data-ad-format="fluid"
             data-ad-client="ca-pub-7737139499802016"
             data-ad-slot="1438408165"></ins>
            `;
            
            document.querySelector('.flex-top').innerHTML = ins;
           
            const pushScript = document.createElement('script');
            pushScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
           
            document.body.appendChild(pushScript);
           
         }
     
            if (document.querySelector('#bottom')) {
            
            const ins = `
            <ins class="adsbygoogle"
             style="display:block; text-align:center;"
             data-ad-layout="in-article"
             data-ad-format="auto"
             data-ad-client="ca-pub-7737139499802016"
             data-ad-slot="7224289835"></ins>
            `;
            
            document.querySelector('#bottom').innerHTML = ins;
           
            const pushScript = document.createElement('script');
            pushScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
           
            document.body.appendChild(pushScript);
           
         }

       
       // if (document.querySelector('.toc_list')) {
       //     
       //     const ins = `
       //     <ins class="adsbygoogle"
       //      style="display:block; text-align:center;"
       //      data-ad-layout="in-article"
       //      data-ad-format="fluid"
       //      data-ad-client="ca-pub-7737139499802016"
       //      data-ad-slot="3052253026"></ins>
       //     `;
       //     
       //     document.querySelector('.toc_list').parentElement.parentElement.insertAdjacentHTML('beforebegin', ins);
           
       //     const pushScript = document.createElement('script');
       //     pushScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
           
       //     document.body.appendChild(pushScript);
           
       //  }
       
       if (document.querySelectorAll('.the-content h2').length > 2) {
           const array = [`
               <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7737139499802016"
               data-ad-slot="8667581050"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
               `,
               `
               <ins class="adsbygoogle"
                style="display:block; text-align:center;"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-7737139499802016"
                data-ad-slot="5058974421"></ins>
               `,
               `
               <ins class="adsbygoogle"
                style="display:block; text-align:center;"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-7737139499802016"
                data-ad-slot="9130877539"></ins>
               `,
               `
               <ins class="adsbygoogle"
                style="display:block; text-align:center;"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-7737139499802016"
                data-ad-slot="4412941315"></ins>
               `];
           
           const h2s = document.querySelectorAll('.the-content h2');
           const ps = document.querySelectorAll('.the-content p')
           
           for (let i=10, j=0; i<ps.length; i+=10, j++) {
               ps[i].insertAdjacentHTML('beforebegin', array[j]);
               
               let pushScript = document.createElement('script');
           pushScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
           
               document.body.appendChild(pushScript);
               
           }
           
           
       } else {
           const ps = document.querySelectorAll('.the-content p');
           const midContent = Math.round(ps.length/2);
           ps[midContent].insertAdjacentHTML('beforebegin', `<ins class="adsbygoogle"
                style="display:block; text-align:center;"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-7737139499802016"
                data-ad-slot="3052253026"></ins>`);
                
               ps[ps.length-1].insertAdjacentHTML('beforebegin',                 `
               <ins class="adsbygoogle"
                style="display:block; text-align:center;"
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-7737139499802016"
                data-ad-slot="5058974421"></ins>
               `);
               
           let pushScript = document.createElement('script');
           pushScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
           
               document.body.appendChild(pushScript);
           
       }
       
       // if (document.querySelector('.crp_related')) {
           
           // const ins = `
           // <ins class="adsbygoogle"
           // style="display:block"
           // data-ad-client="ca-pub-7737139499802016"
           // data-ad-slot="5046645950"
           // data-ad-format="auto"
           // data-full-width-responsive="true"
           // id="after-article"
           // insert="true"></ins>
           // `;
           
           // document.querySelector('.crp_related').insertAdjacentHTML('beforebegin', ins);
           
           // const pushScript = document.createElement('script');
           // pushScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
           
           // document.body.appendChild(pushScript);
           
       // }
       
       if (document.querySelector('.sidebar-display')) {
           
           const ins = `
               <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7737139499802016"
               data-ad-slot="1546343083"
               data-ad-format="auto"
               data-full-width-responsive="true"
               id="sidebar-display"
               insert="true"></ins>`;
           
           document.querySelector('.sidebar-display').innerHTML=ins;
           
           const pushScript = document.createElement('script');
           pushScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
           
           document.body.appendChild(pushScript);
           
       }
       
       if (document.querySelector('.sidebar-display2')) {
           
           const ins = `
               <ins class="adsbygoogle"
                style="display:block"
                data-ad-client="ca-pub-7737139499802016"
                data-ad-slot="6296692951"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>`;
           
           document.querySelector('.sidebar-display2').innerHTML=ins;
           
           const pushScript = document.createElement('script');
           pushScript.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
           
           document.body.appendChild(pushScript);
           
       }
       

       
   }
   
   function loadLimited() {
       

          sessionStorage.setItem('inEU', 'true');
       
           if (document.querySelector('.toc_list')) {
           
           const ins = `
           <div id="above-toc">
             <a href="https://imp.i384100.net/c/3494753/1242836/14726?prodsku=spzn%3AKPSzVL9AEeyfhAreTccY9Q&u=https%3A%2F%2Fwww.coursera.org%2Fspecializations%2Fmeta-front-end-developer&intsrc=PUI2_9419" rel="nofollow"><img style="display: block; margin: 0px auto; max-width: 450px !important;" src="https://openjavascript.info/misc/meta-frontend-square.jfif"/></a>
           </div>
           `;
           
           document.querySelector('.toc_list').parentElement.parentElement.insertAdjacentHTML('beforebegin', ins);
           
          }
          
          
       if (document.querySelectorAll('.the-content h2').length > 2) {
           const array = [`
               <div class="card" style="margin-top: 1rem; margin-bottom: 1rem;">
                   <a href="https://clients.hostwithlove.com/aff.php?aff=282" style="display: flex; flex-direction: column; justify-content: center; align-items: center;" >
                   <span style="margin-bottom: 1.5rem;">Looking for afforable, high-performance web hosting? We use HostWithLove!
                   </span>
                   <img src="https://openjavascript.info/misc/hostwithlove-wide.webp"></img>
                   </a>
               <div>
               `];
           
           const h2s = document.querySelectorAll('.the-content h2');
           
           for (let i=1; i<h2s.length; i++) {
               h2s[i].insertAdjacentHTML('beforebegin', array[i-1]);
           }
       
       }
       

   }
   
   function loadAnalytics() {
     const script = document.createElement('script');
     script.src = "https://www.googletagmanager.com/gtag/js?id=G-XTF7WMKGET";
     script.async = true;
   
     const script2 = document.createElement('script');
     script2.innerHTML = `
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XTF7WMKGET');
     `;

     document.body.append(script);
     document.body.append(script2);
         
   }
   
let codeEditorCounter = 0;

function insertCodeEditor (code) {
   
codeEditorCounter++;

// Create code block
const codeBlock = `
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
</head>
<body>
${code}  
</body>
</html>
`;

console.log(codeBlock);

// Create button to go to live editor
const btn = document.createElement('btn');
btn.className = "btn btn-success btn-code-live";
btn.innerHTML = '<i class="fas fa-code"></i> Run code in live editor';

btn.addEventListener('click', () => {
   const payload = encodeURIComponent(codeBlock);
   localStorage.setItem('code', payload);
   window.location.href = "https://openjavascript.info/code-lives/index.html";
});

const currentScript = document.scripts[document.scripts.length - 1];

currentScript.insertAdjacentElement('beforebegin', btn);

}

/* Place ToC generator function in page footer */

       
   function makeToC(article, depth) {
   /* Necessary arguments: (element to make ToC for, heading depth) /*
   /* Determine ToC depth by selecting elements based upon user input */
   let search;
   if (depth === 'h2') {
       search = 'h2';
   } if (depth === 'h2') {
       search = 'h2';
   } else if (depth === 'h3') {
       search = 'h2, h3';
   } else if (depth === 'h4') {
       search = 'h2, h3, h4';
   } else if (depth === 'h5') {
       search = 'h2, h3, h4, h5';
   } else if (depth === 'h6') {
       search = 'h2, h3, h4, h5, h6';
   } else {
       throw new Error("Non-valid depth argument. Examples: 'h2', 'h4'");
   }

   const headings = article.querySelectorAll(search);
   const toc = document.createElement('ol');
    toc.setAttribute('class', "toc_list");

   /* Cycle through each heading, conditionally appending to ToC */
   for (i=0; i<headings.length; i++) {
       
       headings[i].id = headings[i].textContent;

       if (headings[i].id === "Related Posts:") {
           break;
       }
       
       /* H2 is a simple case: always appended to ToC */
       if (headings[i].tagName === 'H2') {
            
           const li = document.createElement('li');
           li.innerHTML = `<a href="#${headings[i].id}">${headings[i].textContent}</a>`
           toc.append(li);

       }

       /* For H3, H4, H5 and H6 */
       if (headings[i].tagName === 'H3' || headings[i].tagName === 'H4' ||
           headings[i].tagName === 'H5' || headings[i].tagName === 'H6') {
            
           /* If one heading deeper (than previous), create new ul with li inside */
           const previousHeading = headings[i-1];

           if (headings[i].tagName !== previousHeading.tagName) {
               const newUl = document.createElement('ul'); 
               const li = document.createElement('li');
               li.innerHTML = `<a href="#${headings[i].id}">${headings[i].textContent}</a>`
               newUl.append(li);
               if (headings[i].tagName === 'H3') {
                   toc.append(newUl); // If H3, append ul directly to ToC
               } else if (headings[i].tagName === 'H4') {
                   toc.lastChild.append(newUl); // H4 +1 deeper
               } else if (headings[i].tagName === 'H5') {
                   toc.lastChild.lastChild.append(newUl);  // H5 +2 deeper
               } else if (headings[i].tagName === 'H6') {
                   toc.lastChild.lastChild.lastChild.append(newUl); // H6 +3 deeper
               }
           /* If heading the same as the previous one, create an li and append */
           } else {
               const li = document.createElement('li');
               li.innerHTML = `<a href="#${headings[i].id}">${headings[i].textContent}</a>`
               if (headings[i].tagName === 'H3') { // If H3, append li in last child
                   toc.lastChild.append(li);
               } else if (headings[i].tagName === 'H4') { // H4 +1 deeper
                   toc.lastChild.lastChild.append(li);
               } else if (headings[i].tagName === 'H5') { // H5 +1 deeper
                   toc.lastChild.lastChild.lastChild.append(li);
               } else if (headings[i].tagName === 'H6') { // H6 +1 deeper
                   toc.lastChild.lastChild.lastChild.lastChild.append(li);
               }
           }
       }
   }
   // Inserts ToC where script tag is placed on page
   currentScript.parentElement.insertBefore(toc, currentScript)
}
  

if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', doSomething);
  } else {  // `DOMContentLoaded` has already fired
    doSomething();
  }

function doSomething() {

 console.log("ran");
      
  const ytEmbed = document.querySelector('#yt-video-embed')
  
  if (ytEmbed) {
      
   ytEmbed.remove();

   const headings = document.querySelectorAll('.the-content h2,h3');
   
   let test = false;
   for (let header of headings) {
       const text = header.innerText.toLowerCase();
       if (text === "related posts" || text === "related links") {
           test = true;
       }
   }
   
   if (test) {
       headings[headings.length-2].insertAdjacentElement('beforebegin', ytEmbed);  
   } else {
       document.querySelector('.tags').insertAdjacentElement('beforebegin', ytEmbed);
   }

    const ytId = document.querySelector('#yt-video-embed').getAttribute('yt-src');
       const srcdoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href='https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1'><img src='https://img.youtube.com/vi/${ytId}/default.jpg'><span>▶</span></a>`

       const iframe = document.createElement('iframe');   
       iframe.width = '560';
       iframe.height = '315';
       iframe.src = "https://www.youtube-nocookie.com/embed/"+ytId+"?controls=0"; 
       iframe.srcdoc = srcdoc;
       iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
       iframe.setAttribute('title', 'YouTube video player');
       iframe.setAttribute('frameborder', '0');
       iframe.setAttribute('allowfullscreen', '');
    document.querySelector('#yt-video-embed').appendChild(iframe);
      
  }
    
}
