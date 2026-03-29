import{a as te}from"./chunk-KGQPDGUI.js";import{a as ne}from"./chunk-32YKNKYH.js";import{d as J,e as X}from"./chunk-GMLDNOYM.js";import{d as ee}from"./chunk-GNFUSXFQ.js";import{$ as U,Aa as b,Ba as y,Ca as k,Eb as Y,F as C,Ga as L,I as u,Ia as A,Ja as D,Jb as G,Mb as K,O as P,P as x,Sa as S,Ta as B,Ua as _,Xb as Z,Yb as q,cb as z,ea as h,hb as O,ib as E,ja as v,k as g,la as F,nb as H,pa as j,sa as R,sb as V,tb as W,zc as Q}from"./chunk-EU24G6N6.js";import{j as s}from"./chunk-K4ALXBGI.js";function ie(a,e,n,r){let t=n,o=(i,l,f)=>r.formatNumber(Number(i)||0,l,f,"-",e),c=()=>NepaliFunctions.BS.GetFullDate(NepaliFunctions.BS.GetCurrentDate(),e==="np"),p=i=>e==="en"?NepaliFunctions.NumberToWords(i,!0):NepaliFunctions.NumberToWordsUnicode(i,!0),d=i=>{let l=a.zones.get(i);return l?e==="en"?l.name:l.nameNp:""},w=i=>{let l=a.wards.get(i);return l?e==="en"?l.name:l.nameNp:""},m=()=>e==="en"?a.companyProfile.company.name??"":a.companyProfile.company.nameNp??"",oe=()=>e==="en"?a.companyProfile.company.contactAddress??"":a.companyProfile.company.contactAddressNp??"",ae=i=>(console.log(i),`<style>
    @page {
      size: ${i}mm auto;
       margin: 2mm; 
    }

    @viewport { width: device-width; }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: #000;
      background: #fff;
    }

    html, body {
      width: ${i}mm;
      font-family: monospace, 'Courier New', Courier;
      font-size: 16px;
      line-height: 1.4;
      overflow-x: hidden;
      background: #fff;
    }

    .receipt {
      width: 100%;
      padding: 3mm 2mm;
      page-break-after: always;
      position: relative;
      background: #fff;
    }

    .logo {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      image-rendering: crisp-edges;
    }

    img { display: block; }

    .title {
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 2mm;
      padding-bottom: 1.5mm;
      border-bottom: 1px dashed #000;
    }

    .logo-container {
      text-align: center;
      margin-bottom: 3mm;
    }

    .logo {
      width: 28mm;
      height: auto;
      max-height: 15mm;
      object-fit: contain;
      margin: 0 auto;
    }

    .company-name {
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 1mm;
      text-align: center;
    }

    .company-address {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 4mm;
      text-align: center;
    }

    .info p {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.8mm;
      font-size: 13px;
    }

    .info p b {
      min-width: 45%;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 2mm 0 1.5mm;
      font-size: 12px;
    }

    th, td {
      border: 1px solid #000;
      padding: 1mm 1.2mm;
      text-align: left;
    }

    th {
      font-weight: bold;
    }

    .sn  { width: 12%; text-align: center; }
    .desc{ width: 58%; }
    .amt { width: 30%; text-align: right; }

    .total {
      font-weight: bold;
    }

    .units {
      font-size: 10px;
      display: inline-block;
      margin-left: 2px;
    }

    .footer {
      margin-top: 2mm;
      padding-top: 1.5mm;
      border-top: 1px solid #000;
      font-size: 13px;
    }

    .footer p {
      margin-bottom: 0.8mm;
    }

    .words {
      margin-top: 1.5mm;
      padding-top: 1.5mm;
      border-top: 1px dashed #000;
      font-style: italic;
      font-size: 12px;
    }
    /* ONLY page break you need (between copies) */
    .separator {
      page-break-before: always;
      margin: 0;
      border: none;
    }
/*
     .separator {
      page-break-after: always;
      border-top: 2px dashed #000;
      margin: 3mm 0;
      height: 1mm;
    }
*/
    @media print {
      body, .receipt {
        background: #fff !important;
      }

      .separator {
        page-break-before: always;
        border: none;
        margin: 0;
      }
    }
  </style>`),se=(i,l)=>{let f=e==="en"?i.particulars||i.particularNp||"":i.particularNp||i.particulars||"",I=i.units?`<span class="units">(${t.UNITS}: ${o(i.units,2,!0)})</span>`:"";return`<tr>
      <td class="sn">${o(l+1,0,!1)}</td>
      <td>${f} ${I}</td>
      <td class="amt">${o(i.amount,2,!0)}</td>
    </tr>`},ce=()=>{let i=a.receiptData;return`
<div class="footer">
  <p><b>${t.TOTAL_AMOUNT}:</b> ${o(i.paymentTransaction.billAmount,2,!0)}</p>
  <p><b>${t.RETURNED_AMOUNT}:</b> ${o(i.paymentTransaction.returnAmount,2,!0)}</p>
  <p class="words"><b>${t.AMOUNT_IN_WORDS}:</b><br>${p(i.paymentTransaction.paidAmount)} ${t.ONLY}</p>
</div>`},le=()=>{let l=a.receiptData.masikBills.map((f,I)=>se(f,I)).join("");return`
<table>
  <thead><tr>
    <th class="sn">${t.SN}</th>
    <th class="desc">${t.PARTICULARS}</th>
    <th class="amt">${t.AMOUNT}</th>
  </tr></thead>
  <tbody>
    ${l}
  </tbody>
</table>`},me=()=>{let i=a.receiptData.customerDetails;return`
<div class="info">
  <p><b>${t.CUSTOMER_NO}:</b> ${o(i.customerId,0,!1)}</p>
  <p><b>${t.CUSTOMER}:</b> ${e==="en"?i.customerName:i.customerNameNp}</p>
  <p><b>${t.RECEIPT_NO}:</b> ${o(i.receiptIndex,0,!1)}</p>
  <p><b>${t.DATE}:</b> ${c()}</p>
  <p><b>${t.ZONE_WARD}:</b> ${d(i.appDataZone)} / ${w(i.ward)}</p>
</div>`},M=i=>`
<div class="receipt">
  ${i==="CUSTOMER_COPY"&&!!a.logoBase64?`
    <div class="logo-container">
      <img src="${a.logoBase64}" alt="Logo" class="logo" />
    </div>`:""}
  <h2 class="company-name">${m()}</h2>
  <h4 class="company-address">${oe()}</h4>
  <h3 class="title">${t[i]}</h3>
  ${me()}
  ${le()}
  ${ce()}
</div>`,pe=()=>{let i=M("CUSTOMER_COPY");return a.companyProfile?.systemSettings.printDoubleReceipt?`${M("OFFICE_COPY")}<div class="separator"></div>${i}`:i};return{generateDocument:()=>s(this,null,function*(){let i=pe();return`<!DOCTYPE html>
      <html lang="${e}">
      <head>
        <meta charset="UTF-8">
        <title>Receipt</title>
        ${ae(80)}
      </head>
      <body>${i}</body>
      </html>
      `})}}var fe=(a,e)=>({"btn-secondary":a,"btn-outline-secondary":e});function ge(a,e){if(a&1){let n=L();b(0,"button",12),A("click",function(){let t=P(n).$implicit,o=D();return x(o.onLangChange(t.code))}),S(1),y()}if(a&2){let n=e.$implicit,r=D();R("ngClass",z(2,fe,r.currentLang===n.code,r.currentLang!==n.code)),h(),_(" ",n.label," ")}}var T=class a{constructor(e,n,r,t){this.receiptService=e;this.cdr=n;this.sanitizer=r;this.bsModalRef=t}receiptData=null;currentLang="np";receiptPreview="";isLoading=!1;langs=[{code:"en",label:"English"},{code:"np",label:"Nepali"}];ngOnInit(){return s(this,null,function*(){let e=this.receiptService.getContext();e?.companyProfile?.systemSettings?.receiptLang&&(this.currentLang=e.companyProfile.systemSettings.receiptLang==="en"?"en":"np"),yield this.renderPreview()})}renderPreview(){return s(this,null,function*(){try{this.isLoading=!0;let e=yield this.receiptService.generateHtml(this.currentLang);this.receiptPreview=this.sanitizer.bypassSecurityTrustHtml(e)}catch(e){console.error("Preview error:",e)}finally{this.isLoading=!1,this.cdr.detectChanges()}})}onLangChange(e){return s(this,null,function*(){this.currentLang!==e&&(this.currentLang=e,yield this.renderPreview())})}print(){return s(this,null,function*(){try{yield this.receiptService.printWithLang(this.currentLang)}catch(e){console.error("Print error:",e),alert("Failed to print receipt. Please try again.")}})}download(){return s(this,null,function*(){try{let n=`receipt_${Date.now()}.html`;yield this.receiptService.download(this.currentLang,n)}catch(e){console.error("Download error:",e),alert("Failed to download receipt. Please try again.")}})}static \u0275fac=function(n){return new(n||a)(v(N),v(H),v(K),v(J))};static \u0275cmp=F({type:a,selectors:[["app-receipt"]],decls:18,vars:8,consts:[["previewWrapper",""],["receiptIframe",""],[1,"p-4"],[1,"my-4","d-flex","justify-content-center"],[1,""],["sandbox","allow-same-origin allow-scripts",1,"rounded","shadow-2","iframe-styling",3,"srcdoc"],[1,"mt-4","d-flex","justify-content-between"],["type","button",1,"btn","link","text-secondary",3,"click"],["role","group","aria-label","Language selection",1,"btn-group"],["type","button","class","btn",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"btn","btn-primary","me-2",3,"click"],[1,"bi","bi-printer-fill","me-1"],["type","button",1,"btn",3,"click","ngClass"]],template:function(n,r){if(n&1){let t=L();b(0,"div",2)(1,"div",3)(2,"div",4,0),k(4,"iframe",5,1),y()(),b(6,"div",6)(7,"div")(8,"button",7),A("click",function(){return P(t),x(r.bsModalRef.hide())}),S(9),O(10,"translate"),y()(),b(11,"div",8),j(12,ge,2,5,"button",9),y(),b(13,"div")(14,"button",10),A("click",function(){return P(t),x(r.print())}),k(15,"i",11),S(16),O(17,"translate"),y()()()()}n&2&&(h(4),R("srcdoc",r.receiptPreview,U),h(5),B(E(10,4,"CLOSE")),h(3),R("ngForOf",r.langs),h(4),_(" ",E(17,6,"PRINT")," "))},dependencies:[Y,V,W,Q,q,Z],styles:[".iframe-styling[_ngcontent-%COMP%]{border:none;display:block;min-height:512px;overflow:hidden}"]})};var $=class a{constructor(e){this.http=e;let n=localStorage.getItem(this.storageKey);n&&(this.cache=JSON.parse(n))}cache={};storageKey="receiptTranslations";getTranslations(e){return s(this,null,function*(){if(this.cache[e])return this.cache[e];let n=`assets/i18n/receipts/receipt-${e}.json`,r=yield g(this.http.get(n));return this.cache[e]=r,r})}static \u0275fac=function(n){return new(n||a)(u(G))};static \u0275prov=C({token:a,factory:a.\u0275fac,providedIn:"root"})};var N=class a{constructor(e,n,r,t,o){this.companySrv=e;this.dropdownSrv=n;this.numberUtils=r;this.receiptTranslationStore=t;this.modalService=o}context=null;initPromise=null;modalRef;ensureInitialized(){return s(this,null,function*(){this.context||(this.initPromise||(this.initPromise=this.loadContext()),yield this.initPromise)})}loadContext(){return s(this,null,function*(){let[e,n,r]=yield Promise.all([g(this.companySrv.GetCompanyProfile()),g(this.dropdownSrv.getZones()),g(this.dropdownSrv.getWards())]),t;e?.company?.hasLogo&&e.company.logoPath&&(t=yield this.urlToBase64(e.company.logoPath)),this.context={receiptData:null,companyProfile:e,zones:new Map(n.map(o=>[o.id,o])),wards:new Map(r.map(o=>[o.id,o])),logoBase64:t}})}urlToBase64(e){return s(this,null,function*(){try{let n=yield fetch(e,{mode:"cors"});if(!n.ok)throw new Error("Network error");let r=yield n.blob();return new Promise((t,o)=>{let c=new FileReader;c.onloadend=()=>t(c.result),c.onerror=o,c.readAsDataURL(r)})}catch(n){return console.warn("Logo failed to load:",n),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="}})}getContext(){return this.context}getDefaultLang(){return this.context?.companyProfile?.systemSettings?.receiptLang==="en"?"en":"np"}printReceipt(e){return s(this,null,function*(){if(yield this.ensureInitialized(),!this.context)throw new Error("Failed to initialize receipt context");this.context.receiptData=e,(yield this.printWithLangAndDetect(this.getDefaultLang()))||this.showModal(e)})}showModal(e){this.modalRef&&this.modalRef.hide(),this.modalRef=this.modalService.show(T,{class:"modal-lg",backdrop:"static",keyboard:!1,initialState:{receiptData:e}})}generateHtml(e){return s(this,null,function*(){if(yield this.ensureInitialized(),!this.context)throw new Error("Context not initialized");let n=yield this.receiptTranslationStore.getTranslations(e);return yield ie(this.context,e,n,this.numberUtils).generateDocument()})}printWithLangAndDetect(e){return s(this,null,function*(){return new Promise(n=>s(this,null,function*(){let r=yield this.generateHtml(e),t=window.open("","_blank","width=800,height=600");if(!t){console.warn("Popup blocked"),n(!1);return}t.document.write(r),t.document.close();let o=!1;t.addEventListener("beforeprint",()=>{o=!0}),t.addEventListener("afterprint",()=>{t.close(),n(!0)}),t.onload=()=>{let c=t.document.querySelectorAll("img"),p=0,d=c.length,w=()=>{p++,p>=d&&(t.print(),setTimeout(()=>{if(!t.closed){let m=setInterval(()=>{t.closed&&(clearInterval(m),n(o))},100)}},500))};if(d===0){t.print(),setTimeout(()=>{if(!t.closed){let m=setInterval(()=>{t.closed&&(clearInterval(m),n(o))},100)}},500);return}c.forEach(m=>{m.complete?w():(m.onload=w,m.onerror=w)}),setTimeout(()=>t.print(),1500)},setTimeout(()=>{t.closed||t.close(),n(o)},3e4)}))})}printWithLang(e){return s(this,null,function*(){let n=yield this.generateHtml(e),r=window.open("","_blank","width=800,height=600");if(!r)throw new Error("Popup blocked - please allow popups for this site");r.document.write(n),r.document.close(),r.onload=()=>{let t=r.document.querySelectorAll("img"),o=0,c=t.length,p=()=>{o++,o>=c&&r.print()};if(c===0){r.print();return}t.forEach(d=>{d.complete?p():(d.onload=p,d.onerror=p)}),setTimeout(()=>r.print(),1500)}})}download(e,n="receipt.html"){return s(this,null,function*(){let r=yield this.generateHtml(e),t=new Blob([r],{type:"text/html;charset=utf-8"}),o=URL.createObjectURL(t),c=document.createElement("a");c.href=o,c.download=n,c.click(),URL.revokeObjectURL(o)})}static \u0275fac=function(n){return new(n||a)(u(ne),u(te),u(ee),u($),u(X))};static \u0275prov=C({token:a,factory:a.\u0275fac,providedIn:"root"})};export{N as a,T as b};
