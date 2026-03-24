import{d as ae,t as u,i as n,m as M,b as R,c,P as se}from"./web-DD8sXbZF.js";import{B as v}from"./Button-Dpd35Y_r.js";import{c as G}from"./index-M33yfidE.js";import{e as z,n as J,j as le,b as i,r as ce,F as de,S as T,f as me,i as ue,q as pe,M as K,k as fe}from"./solid-m0YymNhn.js";import"./SwitchTab-CmS7uPYV.js";import{m as ge}from"./persisted-D-6jA9O8.js";import{c as he}from"./index-Bgms6XDi.js";import{g as Z}from"./window-hgj9ZaxL.js";import{a as xe}from"./index-BFV5wmEw.js";import{r as ve}from"./index-zbIK3AO9.js";import{c as be}from"./store-_yiH6NTs.js";import{M as ye}from"./ModeSelect-BgIiALKn.js";import{c as x}from"./tauri-DDRUzmQ6.js";import{s as we,I as Ce,c as _e,a as $e,b as Se}from"./tears-and-fireflies-adi-goldstein--WRLB3l0.js";import{type as k}from"./index-D3YrNrY8.js";import{C as ke}from"./CaptionControlsWindows11-C_oMkRIy.js";import{g as ee}from"./store-Co4lPmqe.js";import{I as L}from"./logo-CpEU3jrQ.js";import{I as Me}from"./volume2-BOgvvJz4.js";import"./5WXHJDCZ-C3TB6PMj.js";import"./index-NTuACfW5.js";import"./eventListener-Do7UivV7.js";import"./FLVHQV4A-MM7aOKek.js";import"./index-CSuwbsU5.js";import"./index-B9MzQzl-.js";import"./combineProps-oHjLfPsP.js";import"./event-ByEJuK8t.js";import"./queries-0RkPLikl.js";import"./index-CPGiedJt.js";import"./index-DI0hr_e0.js";import"./check-DUgMIpvx.js";import"./film-cut-BgrVV1qh.js";import"./screenshot-nxCO6T7z.js";import"./titlebar-state-Qrd5yMZJ.js";var ze=u('<div class="flex flex-col items-center"><h1 class="text-[1.2rem] font-[700] mb-1 text-[--text-primary]">Permissions Required</h1><p class=text-gray-11>Orbit needs permissions to run properly.'),Ee=u('<ul class="flex flex-col gap-4 py-8">'),Ie=u('<div class="flex flex-col items-center"><h1 class="text-[1.2rem] font-[700] mb-1 text-[--text-primary]">Select Recording Mode</h1><p class=text-gray-11>Choose how you want to record with Orbit. You can change this later.'),qe=u('<div class="w-full py-4">'),Ae=u('<div class="flex flex-col px-[2rem] text-[0.875rem] font-[400] flex-1 bg-gray-1 justify-evenly items-center">'),Oe=u('<li class="flex flex-row items-center gap-4"><div class="flex flex-col flex-[2]"><span class="font-[500] text-[0.875rem] text-[--text-primary]"> Permission</span><span class=text-[--text-secondary]>'),Pe=u(`<div class="absolute inset-0 z-40"><header class="absolute top-0 inset-x-0 h-12 z-10"data-tauri-drag-region><div data-tauri-drag-region><button></button></div></header><style>
          body {
            background: transparent !important;
          }

          .content-container {
            transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
          }

          .content-container.exiting {
            opacity: 0;
            transform: scale(1.1);
          }

          .custom-bg {
            transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
          }

          .cloud-1.exiting {
            transform: translate(-200px, -150px) !important;
            opacity: 0 !important;
          }

          .cloud-2.exiting {
            transform: translate(200px, -150px) !important;
            opacity: 0 !important;
          }

          .cloud-3.exiting {
            transform: translate(-50%, 200px) !important;
            opacity: 0 !important;
          }

          .cloud-transition {
            transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1),
                        opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) !important;
          }

          .cloud-image {
            max-width: 100vw;
            height: auto;
          }

          .grain {
            position: fixed;
            top: -150%;
            left: -50%;
            right: -50%;
            bottom: -150%;
            width: 200%;
            height: 400%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            pointer-events: none;
            opacity: 0.5;
            z-index: 200;
            mix-blend-mode: overlay;
          }

          /* Overlay for fade to black */
          .fade-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: transparent;
            opacity: 0;
            pointer-events: none;
            transition: opacity 600ms cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
          }

          .fade-overlay.exiting {
            opacity: 1;
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          .logo-bounce {
            animation: bounce 1s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
          }
        </style><div></div><div><div class=grain></div><div id=cloud-1><img class="cloud-image w-[100vw] md:w-[80vw] -mr-40"alt="Cloud One"></div><div id=cloud-2><img class="cloud-image w-[100vw] md:w-[80vw] -ml-40"alt="Cloud Two"></div><div id=cloud-3><img class="cloud-image w-[180vw] md:w-[180vw]"alt="Cloud Three"></div><div><div class="text-center mb-8"><div class="cursor-pointer inline-block"></div><h1 class="text-5xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">Welcome to Orbit</h1><p class="text-2xl opacity-80 max-w-md mx-auto drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">Beautiful screen recordings, owned by you.`);function Q(d){return d==="granted"||d==="notNeeded"}const U=[{name:"Screen Recording",key:"screenRecording",description:"Add Orbit in System Settings, then restart the app for changes to take effect.",requiresManualGrant:!0},{name:"Accessibility",key:"accessibility",description:"During recording, Orbit collects mouse activity locally to generate automatic zoom in segments.",requiresManualGrant:!1},{name:"Microphone",key:"microphone",description:"This permission is required to record audio in your recordings.",requiresManualGrant:!1},{name:"Camera",key:"camera",description:"This permission is required to record your camera in your recordings.",requiresManualGrant:!1}];function ht(){const[d,p]=z(!0),[b,s]=J(()=>x.doPermissionsCheck(d())),[y,g]=z("permissions");le(()=>{d()||he(()=>ce(()=>s.refetch()),250,setInterval)});const w=async r=>{try{await x.requestPermission(r)}catch(e){console.error(`Error occurred while requesting permission: ${e}`)}p(!1)},C=async r=>{await x.openPermissionSettings(r),r==="screenRecording"&&await xe("After adding Orbit in System Settings, you'll need to restart the app for the permission to take effect.",{title:"Restart Required",kind:"info",okLabel:"Restart, I've granted permission",cancelLabel:"No, I still need to add it"})&&await ve(),p(!1)},[_,$]=J(()=>ee.get().then(r=>r===void 0?!0:!r.hasCompletedStartup)),S=()=>{x.showWindow({Main:{init_target_mode:null}}).then(()=>{Z().close()})};return(()=>{var r=Ae();return n(r,(()=>{var e=M(()=>!!_());return()=>e()&&i(Re,{onClose:()=>{$.mutate(!1)}})})(),null),n(r,i(T,{get when(){return y()==="permissions"},get children(){return[(()=>{var e=ze(),o=e.firstChild;return n(e,i(L,{class:"size-14 mb-3"}),o),e})(),(()=>{var e=Ee();return n(e,i(de,{each:U,children:o=>{const m=()=>b()?.[o.key];return i(T,{get when(){return m()!=="notNeeded"},get children(){var a=Oe(),f=a.firstChild,l=f.firstChild,h=l.firstChild,E=l.nextSibling;return n(l,()=>o.name,h),n(E,()=>o.description),n(a,i(v,{class:"flex-1 shrink-0",onClick:()=>o.requiresManualGrant||m()==="denied"?C(o.key):w(o.key),get disabled(){return Q(m())},get children(){return M(()=>m()==="granted")()?"Granted":o.requiresManualGrant||m()==="denied"?"Open Settings":"Grant Permission"}}),null),a}})}})),e})(),i(v,{class:"px-12",size:"lg",get disabled(){return U.find(e=>!Q(b()?.[e.key]))!==void 0},onClick:()=>g("mode"),children:"Continue"})]}}),null),n(r,i(T,{get when(){return y()==="mode"},get children(){return[(()=>{var e=Ie(),o=e.firstChild;return n(e,i(L,{class:"size-14 mb-3"}),o),e})(),(()=>{var e=qe();return n(e,i(ye,{})),e})(),i(v,{class:"px-12",size:"lg",onClick:S,children:"Continue to Orbit"})]}}),null),r})()}function Re(d){const[p,b]=ge(be({isMuted:!1}),{name:"audioSettings"}),[s,y]=z(!1),g=new Audio(we);p.isMuted||g.play();let w,C,_;const[$,S]=z(!1),r=()=>{$()||(S(!0),setTimeout(()=>S(!1),1e3))},e=()=>ee.set({hasCompletedStartup:!0}),o=async()=>{y(!0),w?.cancel(),C?.cancel(),_?.cancel(),await e(),setTimeout(async()=>{d.onClose()},600)};me(()=>g.pause()),ue(()=>{const a=document.getElementById("cloud-1"),f=document.getElementById("cloud-2"),l=document.getElementById("cloud-3");w=a?.animate([{transform:"translate(0, 0)"},{transform:"translate(-20px, 10px)"},{transform:"translate(0, 0)"}],{duration:3e4,iterations:1/0,easing:"linear"}),C=f?.animate([{transform:"translate(0, 0)"},{transform:"translate(20px, 10px)"},{transform:"translate(0, 0)"}],{duration:35e3,iterations:1/0,easing:"linear"}),_=l?.animate([{transform:"translate(-50%, 20px)"},{transform:"translate(-48%, 0)"},{transform:"translate(-50%, 0)"}],{duration:6e4,iterations:1,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards"})});const m=async()=>{b("isMuted",a=>!a),g.muted=p.isMuted};return i(se,{get children(){var a=Pe(),f=a.firstChild,l=f.firstChild,h=l.firstChild,E=f.nextSibling,B=E.nextSibling,I=B.nextSibling,te=I.firstChild,q=te.nextSibling,ie=q.firstChild,A=q.nextSibling,re=A.firstChild,O=A.nextSibling,ne=O.firstChild,P=O.nextSibling,oe=P.firstChild,F=oe.firstChild;return h.$$click=m,n(h,(()=>{var t=M(()=>!!p.isMuted);return()=>t()?i(Ce,{class:"w-6 h-6"}):i(Me,{class:"w-6 h-6"})})()),n(l,(()=>{var t=M(()=>k()==="windows");return()=>t()&&i(ke,{})})(),null),I.style.setProperty("transition-duration","600ms"),R(ie,"src",_e),R(re,"src",$e),R(ne,"src",Se),F.$$click=r,n(F,i(L,{get class(){return`w-20 h-24 mx-auto drop-shadow-[0_0_100px_rgba(0,0,0,0.2)]
                  ${$()?"logo-bounce":""}`}})),n(P,i(pe,{get children(){return[i(K,{get when(){return k()!=="windows"},get children(){return i(v,{class:"px-12 text-lg shadow-[0_0_30px_rgba(0,0,0,0.1)]",variant:"gray",size:"lg",onClick:o,children:"Get Started"})}}),i(K,{get when(){return k()==="windows"},get children(){return i(v,{class:"px-12",size:"lg",onClick:async()=>{e(),await x.showWindow({Main:{init_target_mode:null}}),Z().close()},children:"Continue to Orbit"})}})]}}),null),fe(t=>{var N=G("flex justify-between items-center gap-[0.25rem] w-full h-full z-10",k()==="windows"?"flex-row":"flex-row-reverse"),W=G("mx-4 text-solid-white hover:text-[#DDD] transition-colors",s()&&"opacity-0"),j=`fade-overlay ${s()?"exiting":""}`,D=G("flex flex-col h-screen custom-bg relative overflow-hidden transition-opacity text-solid-white",s()&&"exiting opacity-0"),Y=`absolute top-0 right-0 opacity-70 pointer-events-none cloud-transition cloud-1 ${s()?"exiting":""}`,V=`absolute top-0 left-0 opacity-70 pointer-events-none cloud-transition cloud-2 ${s()?"exiting":""}`,X=`absolute -bottom-[15%] left-1/2 -translate-x-1/2 opacity-70 pointer-events-none cloud-transition cloud-3 ${s()?"exiting":""}`,H=`content-container flex flex-col items-center justify-center flex-1 relative px-4 ${s()?"exiting":""}`;return N!==t.e&&c(l,t.e=N),W!==t.t&&c(h,t.t=W),j!==t.a&&c(B,t.a=j),D!==t.o&&c(I,t.o=D),Y!==t.i&&c(q,t.i=Y),V!==t.n&&c(A,t.n=V),X!==t.s&&c(O,t.s=X),H!==t.h&&c(P,t.h=H),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),a}})}ae(["click"]);export{ht as default};
