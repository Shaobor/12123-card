import{LitElement,html,css}from"\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0063\u0064\u006E\u002E\u006A\u0073\u0064\u0065\u006C\u0069\u0076\u0072\u002E\u006E\u0065\u0074\u002F\u0067\u0068\u002F\u006C\u0069\u0074\u002F\u0064\u0069\u0073\u0074\u0040\u0032\u002F\u0063\u006F\u0072\u0065\u002F\u006C\u0069\u0074\u002D\u0063\u006F\u0072\u0065\u002E\u006D\u0069\u006E\u002E\u006A\u0073";class Shaobor12123CardEditor extends LitElement{static get properties(){return{"hass":{'\u0074\u0079\u0070\u0065':Object},'\u0063\u006F\u006E\u0066\u0069\u0067':{"type":Object}};}constructor(){super();this['\u0063\u006F\u006E\u0066\u0069\u0067']={};this['\u005F\u0068\u0061\u0073\u0073']=null;this['\u005F\u0073\u0063\u0068\u0065\u006D\u0061']=[{"name":"\u006A\u0069\u0061\u007A\u0068\u0065\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079",'\u0073\u0065\u006C\u0065\u0063\u0074\u006F\u0072':{'\u0065\u006E\u0074\u0069\u0074\u0079':{}}},{"name":"\u0063\u0068\u0065\u006C\u0069\u0061\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079","selector":{"entity":{}}},{'\u006E\u0061\u006D\u0065':'weizhang_entity','\u0073\u0065\u006C\u0065\u0063\u0074\u006F\u0072':{'\u0065\u006E\u0074\u0069\u0074\u0079':{}}}];}set hass(value){this['\u005F\u0068\u0061\u0073\u0073']=value;this['\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0055\u0070\u0064\u0061\u0074\u0065']();}get hass(){return this['\u005F\u0068\u0061\u0073\u0073'];}setConfig(config){console['\u006C\u006F\u0067']("\u0073\u0065\u0074\u0043\u006F\u006E\u0066\u0069\u0067\u0020\u0063\u0061\u006C\u006C\u0065\u0064",config);this['\u0063\u006F\u006E\u0066\u0069\u0067']=config?{...config}:{};this['\u0072\u0065\u0071\u0075\u0065\u0073\u0074\u0055\u0070\u0064\u0061\u0074\u0065']();}firstUpdated(){console['\u006C\u006F\u0067']("\u0053\u0068\u0061\u006F\u0062\u006F\u0072\u0031\u0032\u0031\u0032\u0033\u0043\u0061\u0072\u0064\u0045\u0064\u0069\u0074\u006F\u0072\u0020\u0066\u0069\u0072\u0073\u0074\u0055\u0070\u0064\u0061\u0074\u0065\u0064",{'\u0068\u0061\u0073\u0073':!!this['\u0068\u0061\u0073\u0073'],'\u0063\u006F\u006E\u0066\u0069\u0067':this['\u0063\u006F\u006E\u0066\u0069\u0067']});}updated(changedProperties){if(changedProperties['\u0068\u0061\u0073']("gifnoc".split("").reverse().join(""))){console['\u006C\u006F\u0067']("detadpu gifnoc".split("").reverse().join(""),this['\u0063\u006F\u006E\u0066\u0069\u0067']);}}static get styles(){return css`
      .card-config {
        padding: 16px;
      }
      .config-row {
        margin-bottom: 16px;
      }
      .config-label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: var(--primary-text-color);
      }
    `;}_handleFormValueChanged(ev){ev['\u0073\u0074\u006F\u0070\u0050\u0072\u006F\u0070\u0061\u0067\u0061\u0074\u0069\u006F\u006E']();var _0xf9b43a;const value=ev['\u0064\u0065\u0074\u0061\u0069\u006C']['\u0076\u0061\u006C\u0075\u0065'];_0xf9b43a=(168063^168063)+(573730^573738);if(!value){return;}this['\u0063\u006F\u006E\u0066\u0069\u0067']=value;this['\u005F\u0066\u0069\u0072\u0065']("\u0063\u006F\u006E\u0066\u0069\u0067\u002D\u0063\u0068\u0061\u006E\u0067\u0065\u0064",{'\u0063\u006F\u006E\u0066\u0069\u0067':value});}_fire(type,detail){const event=new Event(type,{'\u0062\u0075\u0062\u0062\u006C\u0065\u0073':!![],"cancelable":false,'\u0063\u006F\u006D\u0070\u006F\u0073\u0065\u0064':!![]});event['\u0064\u0065\u0074\u0061\u0069\u006C']=detail||{};this['\u0064\u0069\u0073\u0070\u0061\u0074\u0063\u0068\u0045\u0076\u0065\u006E\u0074'](event);}render(){if(!this['\u0068\u0061\u0073\u0073']){return html`<div>Loading...</div>`;}var _0xed_0x9e4=(189071^189070)+(788354^788362);const config=this['\u0063\u006F\u006E\u0066\u0069\u0067']||{};_0xed_0x9e4=(396295^396289)+(221287^221283);return html`
      <div class="card-config">
        <ha-form
          .hass=${this['\u0068\u0061\u0073\u0073']}
          .data=${config}
          .schema=${this['\u005F\u0073\u0063\u0068\u0065\u006D\u0061']}
          .computeLabel=${this['\u005F\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u004C\u0061\u0062\u0065\u006C']}
          .computeHelper=${this['\u005F\u0063\u006F\u006D\u0070\u0075\u0074\u0065\u0048\u0065\u006C\u0070\u0065\u0072']}
          @value-changed=${this['\u005F\u0068\u0061\u006E\u0064\u006C\u0065\u0046\u006F\u0072\u006D\u0056\u0061\u006C\u0075\u0065\u0043\u0068\u0061\u006E\u0067\u0065\u0064']}
        ></ha-form>
      </div>
    `;}_computeLabel(schema){switch(schema['\u006E\u0061\u006D\u0065']){case"\u006A\u0069\u0061\u007A\u0068\u0065\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079":return"\u9A7E\u9A76\u8BC1\u4FE1\u606F\u5B9E\u4F53";case"ytitne_gnailehc".split("").reverse().join(""):return"\u4F53\u5B9E\u606F\u4FE1\u8F86\u8F66".split("").reverse().join("");case"\u0077\u0065\u0069\u007A\u0068\u0061\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079":return"\u8FDD\u7AE0\u4FE1\u606F\u5B9E\u4F53";default:return schema['\u006E\u0061\u006D\u0065']||'';}}}customElements['\u0064\u0065\u0066\u0069\u006E\u0065']("\u0073\u0068\u0061\u006F\u0062\u006F\u0072\u002D\u0031\u0032\u0031\u0032\u0033\u002D\u0063\u0061\u0072\u0064\u002D\u0065\u0064\u0069\u0074\u006F\u0072",Shaobor12123CardEditor);class Shaobor12123Card extends LitElement{static get properties(){return{'\u0068\u0061\u0073\u0073':{'\u0074\u0079\u0070\u0065':Object},"config":{'\u0074\u0079\u0070\u0065':Object},'\u005F\u0063\u0061\u0072\u0064\u0043\u006F\u006E\u0066\u0069\u0067':{"state":!![]}};}static getConfigElement(){return document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0073\u0068\u0061\u006F\u0062\u006F\u0072\u002D\u0031\u0032\u0031\u0032\u0033\u002D\u0063\u0061\u0072\u0064\u002D\u0065\u0064\u0069\u0074\u006F\u0072");}static getStubConfig(){return{"type":"\u0063\u0075\u0073\u0074\u006F\u006D\u003A\u0073\u0068\u0061\u006F\u0062\u006F\u0072\u002D\u0031\u0032\u0031\u0032\u0033\u002D\u0063\u0061\u0072\u0064",'\u006A\u0069\u0061\u007A\u0068\u0065\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079':'','\u0063\u0068\u0065\u006C\u0069\u0061\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079':'','\u0077\u0065\u0069\u007A\u0068\u0061\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079':''};}static getCardSize(){return 829199^829195;}setConfig(config){this['\u005F\u0063\u0061\u0072\u0064\u0043\u006F\u006E\u0066\u0069\u0067']=config;}set hass(hass){this['\u005F\u0068\u0061\u0073\u0073']=hass;}get hass(){return this['\u005F\u0068\u0061\u0073\u0073'];}_getEntityState(entityId){if(!this['\u005F\u0068\u0061\u0073\u0073']||!entityId)return null;return this['\u005F\u0068\u0061\u0073\u0073']['\u0073\u0074\u0061\u0074\u0065\u0073'][entityId];}_getUpdateTime(){const vehicleEntity=this['\u005F\u0067\u0065\u0074\u0045\u006E\u0074\u0069\u0074\u0079\u0053\u0074\u0061\u0074\u0065'](this['\u005F\u0063\u0061\u0072\u0064\u0043\u006F\u006E\u0066\u0069\u0067']?.cheliang_entity);const licenseEntity=this['\u005F\u0067\u0065\u0074\u0045\u006E\u0074\u0069\u0074\u0079\u0053\u0074\u0061\u0074\u0065'](this['\u005F\u0063\u0061\u0072\u0064\u0043\u006F\u006E\u0066\u0069\u0067']?.jiazheng_entity);var _0x10afb=(236178^236181)+(147091^147092);const vehicleUpdate=this['\u005F\u0065\u0078\u0074\u0072\u0061\u0063\u0074\u0055\u0070\u0064\u0061\u0074\u0065\u0056\u0061\u006C\u0075\u0065'](vehicleEntity);_0x10afb=(813928^813920)+(726498^726496);if(vehicleUpdate)return vehicleUpdate;const licenseUpdate=this['\u005F\u0065\u0078\u0074\u0072\u0061\u0063\u0074\u0055\u0070\u0064\u0061\u0074\u0065\u0056\u0061\u006C\u0075\u0065'](licenseEntity);if(licenseUpdate)return licenseUpdate;return"\u83B7\u53D6\u5931\u8D25";}_extractUpdateValue(entity){if(!entity)return null;const candidateKeys=["\u8F66\u8F86\u66F4\u65B0\u65F6\u95F4","\u66F4\u65B0\u65F6\u95F4","\u66F4\u65B0","\u6570\u636E\u66F4\u65B0\u65F6\u95F4","emit_etadpu".split("").reverse().join(""),"\u0075\u0070\u0064\u0061\u0074\u0065","\u671F\u65E5\u65B0\u66F4".split("").reverse().join("")];for(const key of candidateKeys){if(entity['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073']?.[key]){return entity['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073'][key];}}return entity['\u006C\u0061\u0073\u0074\u005F\u0075\u0070\u0064\u0061\u0074\u0065\u0064']||null;}_formatUpdateTime(raw){if(!raw)return"\u83B7\u53D6\u5931\u8D25";var _0x1e_0xf17;const date=new Date(raw);_0x1e_0xf17=(959264^959273)+(677345^677348);if(!isNaN(date['\u0067\u0065\u0074\u0054\u0069\u006D\u0065']())){var _0xb1e;const hours=date['\u0067\u0065\u0074\u0048\u006F\u0075\u0072\u0073']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](963918^963916,"\u0030");_0xb1e=(353072^353076)+(525957^525958);var _0x1c3f7b;const minutes=date['\u0067\u0065\u0074\u004D\u0069\u006E\u0075\u0074\u0065\u0073']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](843713^843715,"\u0030");_0x1c3f7b=(296832^296837)+(265815^265812);return`${hours}:${minutes}`;}const timeMatch=raw['\u006D\u0061\u0074\u0063\u0068'](new RegExp("?))}2,1{d\\(::?()}2,1{d\\(:)}2,1{d\\(".split("").reverse().join(""),""));if(timeMatch){const hours=timeMatch[223024^223025]['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](757256^757258,"\u0030");var _0x73d;const minutes=timeMatch[133804^133806]['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](887296^887298,"\u0030");_0x73d=(809001^809004)+(621977^621981);return`${hours}:${minutes}`;}return raw;}_getAttrValue(entity,keys,fallback="\u002D\u002D"){if(!entity||!entity['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073'])return fallback;for(const key of keys){if(key in entity['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073']){const value=entity['\u0061\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065\u0073'][key];if(value!==undefined&&value!==null&&value!==''){return value;}}}return fallback;}static get styles(){return css`
      :host {
        display: block;
      }
      .card-container {
        padding: 6px;
      }
      .card-grid {
        display: grid;
        grid-template-areas:
          "n n n n n"
          "a a b b b"
          "c c d d d"
          "gap1 gap1 gap1 gap1 gap1"
          "e f g h i"
          "j k l m o"
          "gap2 gap2 gap2 gap2 gap2"
          "p p p p p"
          "r r r r r";
        grid-template-columns: auto auto auto auto auto;
        grid-template-rows: auto auto auto 24px auto auto 30px auto auto;
      }
      .card-name {
        grid-area: n;
        font-weight: bold;
        font-size: 20px;
        align-self: start;
        justify-self: start;
        margin: 3%;
        margin-top: 10px;
        margin-left: 10px;
      }
      .field-a {
        grid-area: a;
        margin-top: 6px;
      }
      .field-b {
        grid-area: b;
        margin-top: 6px;
      }
      .field-c {
        grid-area: c;
        margin-top: 6px;
      }
      .field-d {
        grid-area: d;
        margin-top: 6px;
      }
      .field-e {
        grid-area: e;
      }
      .field-f {
        grid-area: f;
      }
      .field-g {
        grid-area: g;
      }
      .field-h {
        grid-area: h;
      }
      .field-i {
        grid-area: i;
      }
      .field-j {
        grid-area: j;
      }
      .field-k {
        grid-area: k;
      }
      .field-l {
        grid-area: l;
      }
      .field-m {
        grid-area: m;
      }
      .field-o {
        grid-area: o;
      }
      .field-p {
        grid-area: p;
      }
      .field-r {
        grid-area: r;
      }
      .gap1 {
        grid-area: gap1;
      }
      .gap2 {
        grid-area: gap2;
      }
      .field-item {
        background: none;
        border: none;
        box-shadow: none;
        padding: 0;
        margin-left: 10px;
      }
      .field-label {
        font-size: 14px;
        font-weight: bold;
        color: var(--primary-text-color, #212121);
        margin-bottom: 4px;
        text-align: center;
      }
      .field-value {
        font-size: 14px;
        color: var(--primary-text-color, #212121);
        white-space: normal;
        word-break: break-word;
        text-align: left;
      }
      .field-j .field-value {
        text-align: center;
      }
      .field-k .field-value {
        text-align: center;
      }
      .field-l .field-value {
        text-align: center;
      }
      .field-m .field-value {
        text-align: center;
      }
      .field-o .field-value {
        text-align: center;
      }
      .field-value-bold {
        font-size: 14px;
        font-weight: bold;
        color: var(--primary-text-color, #212121);
        white-space: normal;
        word-break: break-word;
        text-align: left;
      }
      .name-content {
        display: flex;
        align-items: center;
      }
      .name-icon {
        width: 25px;
        height: 25px;
        margin-right: 8px;
        vertical-align: text-bottom;
        position: relative;
        top: -2px;
      }
      .update-info {
        margin-left: 10px;
        font-size: 14px;
        position: relative;
        top: 1px;
      }
      .update-icon {
        width: 16px;
        height: 16px;
        margin-left: 4px;
        transform: rotate(-45deg);
        vertical-align: text-bottom;
        position: relative;
      }
      .field-inline-gap {
        display: inline-block;
        padding-bottom: 16px;
      }
      .vehicle-value {
        margin-bottom: 15px;
      }
      .vehicle-value:last-child {
        margin-bottom: 0;
      }
      .violation-entry {
        margin-top: 14px;
      }
      .violation-entry:first-child {
        margin-top: 0;
      }
      .violation-highlight {
        color: #ff9800;
        font-weight: bold;
      }
    `;}render(){if(!this['\u005F\u0063\u0061\u0072\u0064\u0043\u006F\u006E\u0066\u0069\u0067']||!this['\u005F\u0068\u0061\u0073\u0073']){return html``;}var _0x9g3e;const jiazhengEntity=this['\u005F\u0067\u0065\u0074\u0045\u006E\u0074\u0069\u0074\u0079\u0053\u0074\u0061\u0074\u0065'](this['\u005F\u0063\u0061\u0072\u0064\u0043\u006F\u006E\u0066\u0069\u0067']['\u006A\u0069\u0061\u007A\u0068\u0065\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079']);_0x9g3e='\u0069\u0068\u0065\u0066\u0066\u006C';var _0xb39e;const cheliangEntity=this['\u005F\u0067\u0065\u0074\u0045\u006E\u0074\u0069\u0074\u0079\u0053\u0074\u0061\u0074\u0065'](this['\u005F\u0063\u0061\u0072\u0064\u0043\u006F\u006E\u0066\u0069\u0067']['\u0063\u0068\u0065\u006C\u0069\u0061\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079']);_0xb39e=(805247^805240)+(935427^935429);var _0x4a1efg;const weizhangEntity=this['\u005F\u0067\u0065\u0074\u0045\u006E\u0074\u0069\u0074\u0079\u0053\u0074\u0061\u0074\u0065'](this['\u005F\u0063\u0061\u0072\u0064\u0043\u006F\u006E\u0066\u0069\u0067']['\u0077\u0065\u0069\u007A\u0068\u0061\u006E\u0067\u005F\u0065\u006E\u0074\u0069\u0074\u0079']);_0x4a1efg=(106764^106767)+(301707^301710);var _0x929cf;const updateTime=this['\u005F\u0066\u006F\u0072\u006D\u0061\u0074\u0055\u0070\u0064\u0061\u0074\u0065\u0054\u0069\u006D\u0065'](this['\u005F\u0067\u0065\u0074\u0055\u0070\u0064\u0061\u0074\u0065\u0054\u0069\u006D\u0065']());_0x929cf='\u0069\u0068\u006A\u0064\u0066\u006D';var _0x450d1e;const vehicleCount=parseInt(cheliangEntity?.attributes?.车辆总数||cheliangEntity?.attributes?.clzs||cheliangEntity?.attributes?.总数||143221^143221);_0x450d1e=(794073^794075)+(720373^720374);var _0xc8eeca;const vehicles=[];_0xc8eeca=570055^570054;for(let i=849001^849000;i<=vehicleCount;i++){var _0xcff5f=(511683^511685)+(656213^656208);const vehicle={'\u0069\u006E\u0064\u0065\u0078':i,'\u0063\u0070\u0068':cheliangEntity?.attributes?.[`车辆${i}_车牌号`]||cheliangEntity?.attributes?.[`车辆${i}_车牌号码`]||cheliangEntity?.attributes?.[`车辆${i}_cph`]||cheliangEntity?.attributes?.[`车辆${i}车牌号`]||"--".split("").reverse().join(""),"cllx":cheliangEntity?.attributes?.[`车辆${i}_类型`]||cheliangEntity?.attributes?.[`车辆${i}_cllx`]||cheliangEntity?.attributes?.[`车辆${i}类型`]||"--".split("").reverse().join(""),'\u0079\u0078\u0071':cheliangEntity?.attributes?.[`车辆${i}_检验有效期至`]||cheliangEntity?.attributes?.[`车辆${i}_检验有效期`]||cheliangEntity?.attributes?.[`车辆${i}_yxq`]||cheliangEntity?.attributes?.[`车辆${i}检验有效期至`]||"--".split("").reverse().join(""),"dzjk":cheliangEntity?.attributes?.[`车辆${i}_电子监控`]||cheliangEntity?.attributes?.[`车辆${i}_dzjk`]||cheliangEntity?.attributes?.[`车辆${i}电子监控`]||"--".split("").reverse().join(""),'\u007A\u0074':cheliangEntity?.attributes?.[`车辆${i}_状态`]||cheliangEntity?.attributes?.[`车辆${i}_zt`]||cheliangEntity?.attributes?.[`车辆${i}状态`]||"\u002D\u002D"};_0xcff5f=(627448^627453)+(524438^524439);vehicles['\u0070\u0075\u0073\u0068'](vehicle);}const violationCount=parseInt(weizhangEntity?.attributes?.监控记录总数||weizhangEntity?.attributes?.wzts||weizhangEntity?.attributes?.总数||184509^184509);var _0x9e34c=(989888^989891)+(200826^200828);const violations=[];_0x9e34c="gpoblg".split("").reverse().join("");for(let i=369712^369713;i<=violationCount;i++){var _0xf58a2a=(681341^681339)+(852833^852837);const violation={'\u0069\u006E\u0064\u0065\u0078':i,"cph":this['\u005F\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0056\u0061\u006C\u0075\u0065'](weizhangEntity,[`记录${i}_车牌号`,`记录${i}车牌号`]),"time":this['\u005F\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0056\u0061\u006C\u0075\u0065'](weizhangEntity,[`记录${i}_时间`,`记录${i}时间`]),'\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E':this['\u005F\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0056\u0061\u006C\u0075\u0065'](weizhangEntity,[`记录${i}_地点`,`记录${i}地点`]),"behavior":this['\u005F\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0056\u0061\u006C\u0075\u0065'](weizhangEntity,[`记录${i}_行为`,`记录${i}行为`]),'\u0066\u0069\u006E\u0065':this['\u005F\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0056\u0061\u006C\u0075\u0065'](weizhangEntity,[`记录${i}_罚款`,`记录${i}罚款`],"\u0030"),'\u0070\u006F\u0069\u006E\u0074\u0073':this['\u005F\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0056\u0061\u006C\u0075\u0065'](weizhangEntity,[`记录${i}_记分`,`记录${i}记分`,`记录${i}_扣分`,`记录${i}扣分`,`记录${i}_jf`,`记录${i}jf`],"\u0030")};_0xf58a2a=(602920^602924)+(271595^271594);violations['\u0070\u0075\u0073\u0068'](violation);}return html`
      <ha-card>
        <div class="card-container">
          <div class="card-grid">
            <!-- 标题区域 -->
            <div class="card-name">
              <div class="name-content">
                <img src="/local/community/shaobor-12123-card/交管12123.png" class="name-icon" alt="交管12123">
                <span>交管12123</span>
                <span class="update-info">
                  ${updateTime}更新
                  <img src="/local/community/shaobor-12123-card/update.png" class="update-icon" alt="更新">
                </span>
              </div>
            </div>

            <!-- 驾驶证信息 -->
            <div class="field-a field-item">
              <div class="field-value-bold">
                累计积分: ${jiazhengEntity?.attributes?.ljjf||jiazhengEntity?.attributes?.累积记分||"\u002D\u002D"} 分
              </div>
            </div>
            <div class="field-b field-item">
              <div class="field-value-bold field-inline-gap">
                驾驶证有效期: ${jiazhengEntity?.attributes?.yxq||jiazhengEntity?.attributes?.使用有效期至||"--".split("").reverse().join("")}
              </div>
            </div>
            <div class="field-c field-item">
              <div class="field-value-bold">
                证件状态: ${jiazhengEntity?.attributes?.zt||jiazhengEntity?.attributes?.驾驶证状态||"\u002D\u002D"}
              </div>
            </div>
            <div class="field-d field-item">
              <div class="field-value-bold">
                下次清分日期: ${jiazhengEntity?.attributes?.qfrq||jiazhengEntity?.attributes?.清分日期||"--".split("").reverse().join("")}
              </div>
            </div>

            <div class="gap1"></div>

            <!-- 车辆信息标题 -->
            <div class="field-e field-item">
              <div class="field-label">车牌号码</div>
            </div>
            <div class="field-f field-item">
              <div class="field-label">车牌类型</div>
            </div>
            <div class="field-g field-item">
              <div class="field-label">检验有效期</div>
            </div>
            <div class="field-h field-item">
              <div class="field-label">电子监控</div>
            </div>
            <div class="field-i field-item">
              <div class="field-label">机动车状态</div>
            </div>

            <!-- 车辆信息值 - 展示所有车辆 -->
            ${vehicles['\u006C\u0065\u006E\u0067\u0074\u0068']>(869345^869345)?html`
              <div class="field-j field-item">
                <div class="field-value">
                  ${vehicles['\u006D\u0061\u0070'](vehicle=>html`<div class="vehicle-value">${vehicle['\u0063\u0070\u0068']}</div>`)}
                </div>
              </div>
              <div class="field-k field-item">
                <div class="field-value">
                  ${vehicles['\u006D\u0061\u0070'](vehicle=>html`<div class="vehicle-value">${vehicle['\u0063\u006C\u006C\u0078']}</div>`)}
                </div>
              </div>
              <div class="field-l field-item">
                <div class="field-value">
                  ${vehicles['\u006D\u0061\u0070'](vehicle=>html`<div class="vehicle-value">${vehicle['\u0079\u0078\u0071']}</div>`)}
                </div>
              </div>
              <div class="field-m field-item">
                <div class="field-value">
                  ${vehicles['\u006D\u0061\u0070'](vehicle=>html`<div class="vehicle-value">${vehicle['\u0064\u007A\u006A\u006B']}</div>`)}
                </div>
              </div>
              <div class="field-o field-item">
                <div class="field-value">
                  ${vehicles['\u006D\u0061\u0070'](vehicle=>html`<div class="vehicle-value">${vehicle['\u007A\u0074']}</div>`)}
                </div>
              </div>
            `:html`
              <div class="field-j field-item">
                <div class="field-value">--</div>
              </div>
              <div class="field-k field-item">
                <div class="field-value">--</div>
              </div>
              <div class="field-l field-item">
                <div class="field-value">--</div>
              </div>
              <div class="field-m field-item">
                <div class="field-value">--</div>
              </div>
              <div class="field-o field-item">
                <div class="field-value">--</div>
              </div>
            `}

            <div class="gap2"></div>

            <!-- 违章信息 -->
            <div class="field-p field-item">
              <div class="field-value-bold">
                共计${violationCount}条违章信息
              </div>
            </div>
            <div class="field-r field-item">
              <div class="field-value" style="overflow-wrap: break-word; word-break: break-word; max-width: 450px; display: block;">
                ${violations['\u006C\u0065\u006E\u0067\u0074\u0068']>(993100^993100)?violations['\u006D\u0061\u0070']((v,idx)=>html`
                  <div class="violation-entry">
                    <div>
                      <strong>${v['\u0069\u006E\u0064\u0065\u0078']}.${v['\u0062\u0065\u0068\u0061\u0076\u0069\u006F\u0072']}</strong>&nbsp;&nbsp;
                      ${v['\u0074\u0069\u006D\u0065']||"--".split("").reverse().join("")}&nbsp;
                      <span class="violation-highlight">罚款${v['\u0066\u0069\u006E\u0065']??"\u0030"}元</span>&nbsp;
                      <span class="violation-highlight">${v['\u0070\u006F\u0069\u006E\u0074\u0073']??"\u0030"}分</span>
                    </div>
                    <div>地点: ${v['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']||"--".split("").reverse().join("")}</div>
                    <div>车牌号: ${v['\u0063\u0070\u0068']||"\u002D\u002D"}</div>
                  </div>
                `):"\u6682\u65E0\u8FDD\u7AE0\u4FE1\u606F"}
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `;}}customElements['\u0064\u0065\u0066\u0069\u006E\u0065']("drac-32121-roboahs".split("").reverse().join(""),Shaobor12123Card);if(!window['\u0063\u0075\u0073\u0074\u006F\u006D\u0043\u0061\u0072\u0064\u0073']){window['\u0063\u0075\u0073\u0074\u006F\u006D\u0043\u0061\u0072\u0064\u0073']=[];}window['\u0063\u0075\u0073\u0074\u006F\u006D\u0043\u0061\u0072\u0064\u0073']['\u0070\u0075\u0073\u0068']({"type":"\u0073\u0068\u0061\u006F\u0062\u006F\u0072\u002D\u0031\u0032\u0031\u0032\u0033\u002D\u0063\u0061\u0072\u0064","name":"\u0053\u0068\u0061\u006F\u0062\u006F\u0072\u0020\u0031\u0032\u0031\u0032\u0033\u0020\u0043\u0061\u0072\u0064",'\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006F\u006E':"\u4EA4\u7BA1\u0031\u0032\u0031\u0032\u0033\u4FE1\u606F\u5361\u7247\uFF0C\u663E\u793A\u9A7E\u9A76\u8BC1\u3001\u8F66\u8F86\u548C\u8FDD\u7AE0\u4FE1\u606F",'\u0070\u0072\u0065\u0076\u0069\u0065\u0077':!![],'\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0061\u0074\u0069\u006F\u006E\u0055\u0052\u004C':''});if(window['\u0063\u0075\u0073\u0074\u006F\u006D\u0043\u0061\u0072\u0064\u0073']&&window['\u0063\u0075\u0073\u0074\u006F\u006D\u0043\u0061\u0072\u0064\u0073']['\u0067\u0065\u0074\u0043\u0061\u0072\u0064\u0043\u006F\u006E\u0066\u0069\u0067']){const cardConfig=Shaobor12123Card['\u0067\u0065\u0074\u0053\u0074\u0075\u0062\u0043\u006F\u006E\u0066\u0069\u0067']();if(cardConfig){}}