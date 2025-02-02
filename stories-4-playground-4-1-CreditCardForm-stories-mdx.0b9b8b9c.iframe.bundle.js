"use strict";(self.webpackChunkportfolio_v3=self.webpackChunkportfolio_v3||[]).push([[891],{"./src/stories/4-playground/4-1-CreditCardForm.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page},default:function(){return _4_1_CreditCardForm_stories}});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),classnames=__webpack_require__("./src/projects/credit-card-form/node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),credit_card_namespaceObject=__webpack_require__.p+"static/media/credit-card.b7f1d278.jpeg",chip_namespaceObject=__webpack_require__.p+"static/media/chip.f88a902d.png",visa_namespaceObject=__webpack_require__.p+"static/media/visa.d39c0cae.png",mastercard_namespaceObject=__webpack_require__.p+"static/media/mastercard.fdd172ae.png",amex_namespaceObject=__webpack_require__.p+"static/media/amex.79c8e7b5.png",SwitchTransition=__webpack_require__("./src/projects/credit-card-form/node_modules/react-transition-group/esm/SwitchTransition.js"),CSSTransition=__webpack_require__("./src/projects/credit-card-form/node_modules/react-transition-group/esm/CSSTransition.js"),TransitionGroup=__webpack_require__("./src/projects/credit-card-form/node_modules/react-transition-group/esm/TransitionGroup.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},CreditCardLogo=function(_a){var creditCardType=_a.creditCardType,props=__rest(_a,["creditCardType"]);return"mastercard"===creditCardType?react.createElement("img",__assign({className:"credit-card__logo",src:mastercard_namespaceObject,alt:"credit card logo"},props)):"amex"===creditCardType?react.createElement("img",__assign({className:"credit-card__logo",src:amex_namespaceObject,alt:"credit card logo"},props)):react.createElement("img",__assign({className:"credit-card__logo",src:visa_namespaceObject,alt:"credit card logo"},props))},CreditCard=function(props){var creditCardOutlineClass=classnames_default()({"credit-card__focus":!0,"credit-card__focus--number":props.creditCardNumberIsOnFocus,"credit-card__focus--card-holder":props.creditCardHolderIsOnFocus,"credit-card__focus--expiration":props.creditCardExpirationMonthIsOnFocus||props.creditCardExpirationYearIsOnFocus}),creditCardClass=classnames_default()({"credit-card":!0,"credit-card--flipped":!props.creditCardIsOnFrontSide}),creditCardNumber=props.creditCardNumber?props.creditCardNumber:"################",creditCardHolder=props.creditCardHolder?props.creditCardHolder:"FULL NAME",creditCardExpirationMonth=props.creditCardExpirationMonth?props.creditCardExpirationMonth:"MM",creditCardExpirationYear=props.creditCardExpirationYear?props.creditCardExpirationYear:"YY",creditCardCVV=props.creditCardCVV;return react.createElement("div",{className:"credit-card-scene"},react.createElement("div",{className:creditCardClass},react.createElement("div",{className:"credit-card-side credit-card-side--front"},react.createElement("div",{className:creditCardOutlineClass}),react.createElement("div",{className:"credit-card-side__cover"},react.createElement("img",{src:credit_card_namespaceObject,className:"credit-card__bg",alt:"credit card front side background"})),react.createElement("div",{className:"credit-card-side__content"},react.createElement("div",{className:"credit-card__top"},react.createElement("img",{className:"credit-card__chip",src:chip_namespaceObject,alt:"credit card chip"}),react.createElement(SwitchTransition.Z,null,react.createElement(CSSTransition.Z,{timeout:200,key:props.creditCardType,addEndListener:function(node,done){return node.addEventListener("transitionend",done,!1)},classNames:{enter:"animated fadeInUp faster",enterActive:"animated fadeInUp faster",enterDone:"animated fadeInUp faster",exitActive:"animated fadeOutUp faster",exitDone:"animated fadeOutUp faster"}},react.createElement("div",{className:"credit-card__logo-container"},react.createElement(CreditCardLogo,{creditCardType:props.creditCardType}))))),react.createElement("div",{className:"credit-card__number",onFocus:props.handleCreditCardNumberOnFocus,onBlur:props.handleCreditCardNumberOnBlur,role:"button",tabIndex:0},function(cardNumber,cardType){if("amex"===cardType){for(var i=cardNumber.length;i<15;i++)cardNumber+="#";cardNumber=cardNumber.substring(0,4)+cardNumber.substring(4,12).replace(/[0-9]/g,"*")+cardNumber.substring(12,15)}else{for(i=cardNumber.length;i<16;i++)cardNumber+="#";cardNumber=cardNumber.substring(0,4)+cardNumber.substring(4,12).replace(/[0-9]/g,"*")+cardNumber.substring(12,16)}return cardNumber}(creditCardNumber,props.creditCardType).split("").map((function(char,index){return"amex"===props.creditCardType?3===index||9===index?react.createElement(SwitchTransition.Z,null,react.createElement(CSSTransition.Z,{timeout:200,key:char,addEndListener:function(node,done){return node.addEventListener("transitionend",done,!1)},classNames:{enter:"animated fadeInUp faster",enterActive:"animated fadeInUp faster",enterDone:"animated fadeInUp faster",exitActive:"animated fadeOutUp faster",exitDone:"animated fadeOutUp faster"}},react.createElement("div",{key:index},char," "))):react.createElement(SwitchTransition.Z,null,react.createElement(CSSTransition.Z,{timeout:200,key:char,addEndListener:function(node,done){return node.addEventListener("transitionend",done,!1)},classNames:{enter:"animated fadeInUp faster",enterActive:"animated fadeInUp faster",enterDone:"animated fadeInUp faster",exitActive:"animated fadeOutUp faster",exitDone:"animated fadeOutUp faster"}},react.createElement("div",{key:index},char))):3===index||7===index||11===index?react.createElement(SwitchTransition.Z,null,react.createElement(CSSTransition.Z,{timeout:200,key:char,addEndListener:function(node,done){return node.addEventListener("transitionend",done,!1)},classNames:{enter:"animated fadeInUp faster",enterActive:"animated fadeInUp faster",enterDone:"animated fadeInUp faster",exitActive:"animated fadeOutUp faster",exitDone:"animated fadeOutUp faster"}},react.createElement("div",{key:index},char," "))):react.createElement(SwitchTransition.Z,null,react.createElement(CSSTransition.Z,{timeout:200,key:char,addEndListener:function(node,done){return node.addEventListener("transitionend",done,!1)},classNames:{enter:"animated fadeInUp faster",enterActive:"animated fadeInUp faster",enterDone:"animated fadeInUp faster",exitActive:"animated fadeOutUp faster",exitDone:"animated fadeOutUp faster"}},react.createElement("div",{key:index},char)))}))),react.createElement("div",{className:"credit-card__bottom"},react.createElement("div",{className:"credit-card__card-info credit-card__card-holder-info",onFocus:props.handleCreditCardHolderOnFocus,onBlur:props.handleCreditCardHolderOnBlur,role:"button",tabIndex:0},react.createElement("div",{className:"card-info__label"},"Card Holder"),react.createElement("div",{className:"card-info__description"},react.createElement(TransitionGroup.Z,{style:{display:"flex"}},creditCardHolder.split("").map((function(char,index){return react.createElement(CSSTransition.Z,{timeout:200,key:index,addEndListener:function(node,done){return node.addEventListener("transitionend",done,!1)},classNames:{enter:"animated fadeInUp faster",enterActive:"animated fadeInUp faster",enterDone:"animated fadeInUp faster",exitActive:"animated fadeOutUp faster",exitDone:"animated fadeOutUp faster"}}," "===char?react.createElement("div",{key:index}," "):react.createElement("div",{key:index},char))}))))),react.createElement("div",{className:"credit-card__card-info",onFocus:props.handleCreditCardExpirationOnFocus,onBlur:props.handleCreditCardExpirationOnBlur,role:"button",tabIndex:0},react.createElement("div",{className:"card-info__label"},"Expires"),react.createElement("div",{className:"card-info__description"},react.createElement(SwitchTransition.Z,null,react.createElement(CSSTransition.Z,{timeout:200,key:props.creditCardExpirationMonth,addEndListener:function(node,done){return node.addEventListener("transitionend",done,!1)},classNames:{enter:"animated fadeInUp faster",enterActive:"animated fadeInUp faster",enterDone:"animated fadeInUp faster",exitActive:"animated fadeOutUp faster",exitDone:"animated fadeOutUp faster"}},react.createElement("div",null,creditCardExpirationMonth))),react.createElement("div",null,"/"),react.createElement(SwitchTransition.Z,null,react.createElement(CSSTransition.Z,{timeout:200,key:props.creditCardExpirationYear,addEndListener:function(node,done){return node.addEventListener("transitionend",done,!1)},classNames:{enter:"animated fadeInUp faster",enterActive:"animated fadeInUp faster",enterDone:"animated fadeInUp faster",exitActive:"animated fadeOutUp faster",exitDone:"animated fadeOutUp faster"}},react.createElement("div",null,creditCardExpirationYear)))))))),react.createElement("div",{className:"credit-card-side credit-card-side--back"},react.createElement("div",{className:"credit-card-side__cover"},react.createElement("img",{src:credit_card_namespaceObject,className:"credit-card__bg",alt:"credit card front side background"})),react.createElement("div",{className:"credit-card__band"}),react.createElement("div",{className:"credit-card__cvv"},react.createElement("div",{className:"credit-card__cvv-title"},"CVV"),react.createElement("div",{className:"credit-card__cvv-band"},creditCardCVV.replace(/[0-9]/g,"*")),react.createElement("div",{className:"credit-card__logo-container"},react.createElement(CreditCardLogo,{creditCardType:props.creditCardType}))))))};CreditCard.__docgenInfo={description:"",methods:[],displayName:"CreditCard"};var credit_card=CreditCard,react_select_browser_esm=__webpack_require__("./src/projects/credit-card-form/node_modules/react-select/dist/react-select.browser.esm.js"),react_input_mask=__webpack_require__("./src/projects/credit-card-form/node_modules/react-input-mask/index.js"),react_input_mask_default=__webpack_require__.n(react_input_mask),form_assign=function(){return form_assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},form_assign.apply(this,arguments)},expirationMonthSelectOptions=[{value:"01",label:"01"},{value:"02",label:"02"},{value:"03",label:"03"},{value:"04",label:"04"},{value:"05",label:"05"},{value:"06",label:"06"},{value:"07",label:"07"},{value:"08",label:"08"},{value:"09",label:"09"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"}],expirationYearSelectOptions=[{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"},{value:"2023",label:"2023"},{value:"2024",label:"2024"},{value:"2025",label:"2025"},{value:"2026",label:"2026"},{value:"2027",label:"2027"},{value:"2028",label:"2028"},{value:"2029",label:"2029"},{value:"2030",label:"2030"},{value:"2031",label:"2031"}],Form=function(props){var creditCardNumberInput=(0,react.useRef)(null),creditCardHolderInput=(0,react.useRef)(null),creditCardExpirationMonthInput=(0,react.useRef)(null),_a=(0,react.useState)("9999 9999 9999 9999"),creditCardNumberMask=_a[0],setCreditCardNumberMask=_a[1],_b=(0,react.useState)("999"),creditCardCVVMask=_b[0],setCreditCardCVVMask=_b[1],_c=(0,react.useState)(""),creditCardNumber=_c[0],setCreditCardNumber=_c[1];return(0,react.useEffect)((function(){creditCardNumberInput&&creditCardNumberInput.current&&props.creditCardNumberIsOnFocus&&creditCardNumberInput.current.focus()}),[props.creditCardNumberIsOnFocus]),(0,react.useEffect)((function(){creditCardHolderInput&&creditCardHolderInput.current&&props.creditCardHolderIsOnFocus&&creditCardHolderInput.current.focus()}),[props.creditCardHolderIsOnFocus]),(0,react.useEffect)((function(){creditCardExpirationMonthInput&&creditCardExpirationMonthInput.current&&props.creditCardExpirationMonthIsOnFocus&&creditCardExpirationMonthInput.current.focus()}),[props.creditCardExpirationMonthIsOnFocus]),(0,react.useEffect)((function(){"amex"===props.creditCardType?(setCreditCardNumberMask("9999 999999 99999"),setCreditCardCVVMask("9999")):(setCreditCardNumberMask("9999 9999 9999 9999"),setCreditCardCVVMask("999"))}),[props.creditCardType]),react.createElement("div",{className:"credit-card-form-container"},react.createElement("div",{className:"form__group"},react.createElement("label",{className:"form__label",htmlFor:"form__card-number-text-input"},"Card Number"),react.createElement(react_input_mask_default(),{mask:creditCardNumberMask,id:"form__card-number-text-input",value:creditCardNumber,maskChar:"",type:"text",className:"form__text-input",onFocus:props.handleCreditCardNumberOnFocus,onBlur:props.handleCreditCardNumberOnBlur,onChange:function(event){var number=event.target.value;setCreditCardNumber(number),props.handleCreditCardNumberChange(event)}},(function(inputProps){return react.createElement("input",form_assign({ref:creditCardNumberInput},inputProps))}))),react.createElement("div",{className:"form__group"},react.createElement("label",{className:"form__label",htmlFor:"form__card-holder-text-input"},"Card Holders"),react.createElement("input",{id:"form__card-holder-text-input",type:"text",className:"form__text-input",onFocus:props.handleCreditCardHolderOnFocus,onBlur:props.handleCreditCardHolderOnBlur,onChange:props.handleCreditCardHolderChange,ref:creditCardHolderInput})),react.createElement("div",{className:"form__row"},react.createElement("div",{style:{marginRight:"2rem",display:"flex",flex:"2",alignItems:"flex-end"}},react.createElement("div",{className:"form__group--inline"},react.createElement("label",{className:"form__label",htmlFor:"form__card-expiration-select"},"Expiration Date"),react.createElement(react_select_browser_esm.ZP,{options:expirationMonthSelectOptions,styles:customSelectStyles,isSearchable:!1,placeholder:"Month",onFocus:props.handleCreditCardExpirationMonthOnFocus,onBlur:props.handleCreditCardExpirationMonthOnBlur,ref:creditCardExpirationMonthInput,onChange:props.handleCreditCardExpirationMonthChange})),react.createElement("div",{className:"form__group--inline"},react.createElement(react_select_browser_esm.ZP,{options:expirationYearSelectOptions,styles:customSelectStyles,isSearchable:!1,placeholder:"Year",onFocus:props.handleCreditCardExpirationYearOnFocus,onBlur:props.handleCreditCardExpirationYearOnBlur,onChange:props.handleCreditCardExpirationYearChange}))),react.createElement("div",{className:"form__group--inline"},react.createElement("label",{className:"form__label",htmlFor:"form__cvv-text-input"},"CVV"),react.createElement(react_input_mask_default(),{id:"form__cvv-text-input",type:"text",mask:creditCardCVVMask,maskChar:"",className:"form__text-input",onFocus:props.handleCreditCardCVVOnFocus,onBlur:props.handleCreditCardCVVOnBlur,onChange:props.handleCreditCardCVVChange}))),react.createElement("button",{type:"submit",className:"credit-card-form__button"},"Submit"))},customSelectStyles={control:function(provided,state){return form_assign(form_assign({},provided),{border:state.isFocused?"1px solid #00aedb":"1px solid #baccd4",boxShadow:"none",height:48,"&:hover":{border:"1px solid ".concat("#00aedb")}})},valueContainer:function(provided,state){return form_assign(form_assign({},provided),{fontSize:16,paddingLeft:14})},singleValue:function(provided,state){return form_assign(form_assign({},provided),{color:"#162934"})},placeholder:function(provided,state){return form_assign(form_assign({},provided),{color:"#162934"})},indicatorSeparator:function(provided,state){return form_assign(form_assign({},provided),{backgroundColor:"#ffffff"})},dropdownIndicator:function(provided,state){return form_assign(form_assign({},provided),{color:"#162934","&:hover":{color:"#162934"}})}};Form.__docgenInfo={description:"",methods:[],displayName:"Form"};var credit_card_form_form=Form,injectStylesIntoStyleTag=(__webpack_require__("./src/projects/credit-card-form/node_modules/normalize.css/normalize.css"),__webpack_require__("./src/projects/credit-card-form/node_modules/animate.css/animate.css"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),_globals=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/@storybook/addon-styling/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/projects/credit-card-form/src/styles/globals/_globals.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(_globals.Z,options),_globals.Z&&_globals.Z.locals&&_globals.Z.locals;var _form=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/@storybook/addon-styling/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/projects/credit-card-form/src/styles/globals/_form.scss"),_form_options={};_form_options.styleTagTransform=styleTagTransform_default(),_form_options.setAttributes=setAttributesWithoutAttributes_default(),_form_options.insert=insertBySelector_default().bind(null,"head"),_form_options.domAPI=styleDomAPI_default(),_form_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(_form.Z,_form_options),_form.Z&&_form.Z.locals&&_form.Z.locals,__webpack_require__("./src/projects/credit-card-form/src/styles/credit-card-form.scss");var CreditCardForm=function(){var _a=(0,react.useState)(!1),creditCardNumberIsOnFocus=_a[0],setCreditCardNumberOnFocus=_a[1],_b=(0,react.useState)(!1),creditCardHolderIsOnFocus=_b[0],setCreditCardHolderOnFocus=_b[1],_c=(0,react.useState)(!1),creditCardExpirationMonthIsOnFocus=_c[0],setCreditCardExpirationMonthOnFocus=_c[1],_d=(0,react.useState)(!1),creditCardExpirationYearIsOnFocus=_d[0],setCreditCardExpirationYearOnFocus=_d[1],_e=(0,react.useState)(!0),creditCardIsOnFrontSide=_e[0],setCreditCardOnFrontSide=_e[1],_f=(0,react.useState)(""),creditCardNumber=_f[0],setCreditCardNumber=_f[1],_g=(0,react.useState)(""),creditCardHolder=_g[0],setCreditCardHolder=_g[1],_h=(0,react.useState)(""),creditCardExpirationMonth=_h[0],setCreditCardExpirationMonth=_h[1],_j=(0,react.useState)(""),creditCardExpirationYear=_j[0],setCreditCardExpirationYear=_j[1],_k=(0,react.useState)("visa"),creditCardType=_k[0],setCreditCardType=_k[1],_l=(0,react.useState)(""),creditCardCVV=_l[0],setCreditCardCVV=_l[1];return react.createElement("div",{className:"credit-card-form"},react.createElement(credit_card,{creditCardNumber:creditCardNumber,creditCardHolder:creditCardHolder,creditCardExpirationMonth:creditCardExpirationMonth,creditCardExpirationYear:creditCardExpirationYear,creditCardCVV:creditCardCVV,creditCardType:creditCardType,creditCardNumberIsOnFocus:creditCardNumberIsOnFocus,handleCreditCardNumberOnFocus:function(){setCreditCardNumberOnFocus(!0)},handleCreditCardNumberOnBlur:function(){setCreditCardNumberOnFocus(!1)},creditCardHolderIsOnFocus:creditCardHolderIsOnFocus,handleCreditCardHolderOnFocus:function(){setCreditCardHolderOnFocus(!0)},handleCreditCardHolderOnBlur:function(){setCreditCardHolderOnFocus(!1)},creditCardExpirationMonthIsOnFocus:creditCardExpirationMonthIsOnFocus,creditCardExpirationYearIsOnFocus:creditCardExpirationYearIsOnFocus,handleCreditCardExpirationOnFocus:function(){setCreditCardExpirationMonthOnFocus(!0)},handleCreditCardExpirationOnBlur:function(){setCreditCardExpirationMonthOnFocus(!1)},creditCardIsOnFrontSide:creditCardIsOnFrontSide}),react.createElement(credit_card_form_form,{creditCardNumberIsOnFocus:creditCardNumberIsOnFocus,handleCreditCardNumberOnFocus:function(){setCreditCardNumberOnFocus(!0)},handleCreditCardNumberOnBlur:function(){setCreditCardNumberOnFocus(!1)},handleCreditCardNumberChange:function(event){var cardNumber,reVisa,reMasterCard,reAmex,creditCardNumberLocal=event.target.value;setCreditCardNumber(creditCardNumberLocal.replace(/\s/g,"")),setCreditCardType((cardNumber=creditCardNumberLocal,reVisa=new RegExp("^4"),reMasterCard=new RegExp("^5[1-5]|^222[1-9]|^22[3-9]|^2[3-6]"),reAmex=new RegExp("^3[47]"),reVisa.test(cardNumber)?"visa":reMasterCard.test(cardNumber)?"mastercard":reAmex.test(cardNumber)?"amex":"visa"))},creditCardHolderIsOnFocus:creditCardHolderIsOnFocus,handleCreditCardHolderOnFocus:function(){setCreditCardHolderOnFocus(!0)},handleCreditCardHolderOnBlur:function(){setCreditCardHolderOnFocus(!1)},handleCreditCardHolderChange:function(event){setCreditCardHolder(event.target.value)},creditCardExpirationMonthIsOnFocus:creditCardExpirationMonthIsOnFocus,handleCreditCardExpirationMonthOnFocus:function(){setCreditCardExpirationMonthOnFocus(!0)},handleCreditCardExpirationMonthOnBlur:function(){setCreditCardExpirationMonthOnFocus(!1)},handleCreditCardExpirationMonthChange:function(selectedOption){setCreditCardExpirationMonth(null==selectedOption?void 0:selectedOption.value)},creditCardExpirationYearIsOnFocus:creditCardExpirationYearIsOnFocus,handleCreditCardExpirationYearOnFocus:function(){setCreditCardExpirationYearOnFocus(!0)},handleCreditCardExpirationYearOnBlur:function(){setCreditCardExpirationYearOnFocus(!1)},handleCreditCardExpirationYearChange:function(selectedOption){setCreditCardExpirationYear(null==selectedOption?void 0:selectedOption.value.slice(-2))},handleCreditCardCVVOnFocus:function(){setCreditCardOnFrontSide(!1)},handleCreditCardCVVOnBlur:function(){setCreditCardOnFrontSide(!0)},handleCreditCardCVVChange:function(event){setCreditCardCVV(event.target.value)},creditCardType:creditCardType}))};CreditCardForm.__docgenInfo={description:"",methods:[],displayName:"CreditCardForm"};var credit_card_form_credit_card_form=CreditCardForm,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",blockquote:"blockquote"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Playground/Credit Card Form"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"credit-card-form",children:"Credit Card Form"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"I built an interesting credit card form with smooth and sweet microinteractions, which includes number formatting, validation, and automatic card-type detection."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["It's inspired by Muhammed Erdem's work ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/muhammederdem/vue-interactive-paycard",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"})," and re-implemented with React. It also comes with full keyboard support."]}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Please do not put in real credit card number when you try the form below."}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["As a general rule, Visa card number starts with 4; American Express card number starts with 34 or 37;\nMastercard number starts with 51, 55, 2221 - 2229, 223 - 229 or 23 - 26.\nYou can use this ",(0,jsx_runtime.jsx)(_components.a,{href:"https://saijogeorge.com/dummy-credit-card-generator/",target:"_blank",rel:"nofollow noopener noreferrer",children:"dummy credit card generator"})," to generate fake credit card numbers."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsx)("div",{style:{"margin-top":"3rem"},children:(0,jsx_runtime.jsx)(credit_card_form_credit_card_form,{})})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Playground/Credit Card Form",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};var _4_1_CreditCardForm_stories=componentMeta},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/@storybook/addon-styling/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/projects/credit-card-form/src/styles/globals/_form.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600;700;900&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,".form__group{margin-bottom:1rem}.form__label{font-size:.875rem;line-height:1.375rem;font-weight:400;display:block;margin-bottom:.25rem}.form__text-input{width:100%;font-size:1rem;line-height:1rem;padding:.875rem 1rem;border-radius:4px;border:1px solid #baccd4;color:#162934;font-weight:400;transition:all .35s cubic-bezier(0.71, 0.03, 0.56, 0.85)}.form__text-input:focus{outline:none;border-color:#00aedb;box-shadow:0 2px 8px 0 rgba(53, 74, 83, 0.2)}.form__text-input:hover{border-color:#00aedb}.form__row{display:flex;align-items:flex-end;justify-content:space-between}.form__row .form__group--inline{flex:1}.form__row .form__group--inline:not(:last-child){margin-right:.75rem}","",{version:3,sources:["webpack://./src/projects/credit-card-form/src/styles/globals/_form.scss","webpack://./src/projects/credit-card-form/src/styles/globals/_typography.scss","webpack://./src/projects/credit-card-form/src/styles/globals/_colors.scss","webpack://./src/projects/credit-card-form/src/styles/globals/_layers.scss"],names:[],mappings:"AAIA,aACE,kBAAA,CAGF,aC2DI,iBAAA,CAMA,oBAAA,CAMA,eAAA,CDrEF,aAAA,CACA,oBAAA,CAGF,kBACE,UAAA,CACA,cAAA,CACA,gBAAA,CACA,oBAAA,CACA,iBAAA,CACA,wBAAA,CACA,aETe,CFUf,eAAA,CACA,wDAAA,CAEA,wBACE,YAAA,CACA,oBEtBa,CCuCb,4CAAA,CHbF,wBACE,oBE3Ba,CF+BjB,WACE,YAAA,CACA,oBAAA,CACA,6BAAA,CACA,gCACE,MAAA,CACA,iDACE,mBAAA",sourcesContent:['@import "../globals/colors";\n@import "../globals/typography";\n@import "../globals/layers";\n\n.form__group {\n  margin-bottom: 1rem;\n}\n\n.form__label {\n  @include typography-scale("body-small");\n  display: block;\n  margin-bottom: 0.25rem;\n}\n\n.form__text-input {\n  width: 100%;\n  font-size: 1rem;\n  line-height: 1rem;\n  padding: 0.875rem 1rem;\n  border-radius: 4px;\n  border: 1px solid $color__border;\n  color: $color__text-primary;\n  font-weight: 400;\n  transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);\n\n  &:focus {\n    outline: none;\n    border-color: $color__primary;\n    @include layer("raised")\n  }\n\n  &:hover {\n    border-color: $color__primary;\n  }\n}\n\n.form__row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  .form__group--inline {\n    flex: 1;\n    &:not(:last-child) {\n      margin-right: 0.75rem;\n    }\n  }\n}\n','/********************************\n To apply a certain typography scale to a css class, just do\n .something {\n    @include typography-scale(\'body\');\n }\n which is equivalent to\n .something {\n    font-size: 1rem;\n    line-height: 1.5rem;\n    font-weight: 400;\n }\n after SASS compilation\n ***********************************/\n\n$typescale-map: (\n  // heading font size\n  "giga": 4.75rem,\n  "mega": 3.375rem,\n  "alpha": 2.25rem,\n  "beta": 1.5rem,\n  "gamma": 1.25rem,\n  "delta": 1.125rem,\n  "epsilon": 1rem,\n  "zeta": 0.875rem,\n  // body font size\n  "body": 1rem,\n  "body-small": 0.875rem,\n  "caption": 0.75rem,\n  "legal": 0.6875rem\n);\n\n$line-height-map: (\n  // heading font line height\n  "giga": 5rem,\n  "mega": 3.5rem,\n  "alpha": 2.5rem,\n  "beta": 2rem,\n  "gamma": 1.5rem,\n  "delta": 1.5rem,\n  "epsilon": 1.5rem,\n  "zeta": 1.375rem,\n  // body font line height\n  "body": 1.5rem,\n  "body-small": 1.375rem,\n  "caption": 1rem,\n  "legal": 1rem\n);\n\n$font-weight-map: (\n  // heading font weight\n  "giga": 300,\n  "mega": 300,\n  "alpha": 300,\n  "beta": 300,\n  "gamma": 400,\n  "delta": 600,\n  "epsilon": 600,\n  "zeta": 600,\n  // body font weight\n  "body": 400,\n  "body-small": 400,\n  "caption": 400,\n  "legal": 400\n);\n\n@mixin typography-scale($type) {\n  @if map-has-key($typescale-map, $type) {\n    font-size: map-get($typescale-map, $type);\n  } @else {\n    @warn \'This is not a step of the Type Scale!\';\n  }\n\n  @if map-has-key($line-height-map, $type) {\n    line-height: map-get($line-height-map, $type);\n  } @else {\n    @warn \'This is not a step of the Line Height!\';\n  }\n\n  @if map-has-key($font-weight-map, $type) {\n    font-weight: map-get($font-weight-map, $type);\n  } @else {\n    @warn \'This is not a step of the Font Weight!\';\n  }\n}\n\n@import url(\'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600;700;900&display=swap\');\n\n@mixin monotypeface() {\n  font-family: \'Source Code Pro\', Menlo, Monaco, Consolas, \'Courier New\',\n  monospace;\n}\n\n',"// Copyright 2016 Fort Effect, Inc. All rights reserved.\n\n// Blue\n$color__blue-60: #0192B7 !default;\n$color__blue-50: #0079A4 !default;\n$color__blue-40: #00AEDB !default; // Luum brand blue\n$color__blue-30: #63D9F7 !default;\n$color__blue-20: #A1ECFF !default;\n$color__blue-10: #C5F8FF !default;\n$color__blue-05: transparentize($color__blue-40, 0.95) !default;\n\n// Grey\n$color__grey-90: #162934 !default;\n$color__grey-80: #354A53 !default;\n$color__grey-70: #5E7B87 !default;\n$color__grey-60: #81959E !default;\n$color__grey-50: #BACCD4 !default;\n$color__grey-40: #D5E5ED !default;\n$color__grey-30: #EBEFF1 !default;\n$color__grey-20: #F5F7F8 !default;\n$color__grey-10: #FAFBFC !default;\n\n// Red\n$color__red-50: #D32D47 !default;\n$color__red-40: #E85168 !default;\n$color__red-30: #FE7489 !default;\n$color__red-20: #FFBFC9 !default;\n$color__red-10: #FFEBEE !default;\n$color__red-05: transparentize($color__red-40, 0.95) !default;\n\n// Green\n$color__green-50: #00866F !default;\n$color__green-40: #05AA8D !default;\n$color__green-30: #89C9BA !default;\n$color__green-20: #BDE2DA !default;\n$color__green-10: #E6F4F1 !default;\n\n// Orange\n$color__orange-50: #E25711 !default;\n$color__orange-40: #F67B3D !default;\n$color__orange-30: #FF9762 !default;\n$color__orange-20: #FFBA96 !default;\n$color__orange-10: #FFE4D6 !default;\n\n// Yellow\n$color__yellow-50: #ED921C !default;\n$color__yellow-40: #FCAE48 !default;\n$color__yellow-30: #FFBF6B !default;\n$color__yellow-20: #FFD196 !default;\n$color__yellow-10: #FFE1BB !default;\n\n// Purple\n$color__purple-50: #A95DA5 !default;\n$color__purple-40: #CA8CC7 !default;\n$color__purple-30: #E09FDD !default;\n$color__purple-20: #E5BDE3 !default;\n$color__purple-10: #F8E8F7 !default;\n\n// Olive\n$color__olive-50: #877F27 !default;\n$color__olive-40: #A69E45 !default;\n$color__olive-30: #C9C171 !default;\n$color__olive-20: #EEE8A9 !default;\n$color__olive-10: #FFFBD5 !default;\n$color__olive-05: transparentize($color__olive-40, 0.95) !default;\n\n// White\n$color__white: #fff !default;\n\n// Theme color\n// Accent color\n$color__primary: $color__blue-40;\n$color__success: $color__green-50;\n$color__info: $color__blue-50;\n$color__warning: $color__yellow-50;\n$color__error: $color__red-50;\n\n//Text color\n$color__text-primary: $color__grey-90;\n$color__text-secondary: $color__grey-80;\n\n//Border color\n$color__border: $color__grey-50;\n\n//Table color\n$color__table: $color__blue-60;\n","//-------------------------------------------\n// 📑 Layer\n// ------------------------------------------\n//\n//   Layer                 ||  Elevation\n//   ==========================================\n//   0 - Base              ||  0\n//   1 - Flat              ||  1\n//   2 - Raised            ||  2\n//   3 - Overlay           ||  8\n//   ==========================================\n//\n\n/********************************\n To apply a certain drop-shadow to a css class, just do\n .something {\n    @include layer('flat');\n }\n which is equivalent to\n .something {\n    box-shadow: 0 1px 2px 0 $box-shadow;\n }\n after SASS compilation\n ***********************************/\n\n// Box shadow variables\n$box-shadow: transparentize($color__grey-80, 0.8);\n$box-shadow--flat: 0 1px 2px 0 $box-shadow;\n$box-shadow--raised: 0 2px 8px 0 $box-shadow;\n$box-shadow--overlay: 0 4px 12px 0 $box-shadow;\n$box-shadow--heavy: 0 12px 24px 0 $box-shadow;\n\n// Layer box-shadow map\n$layer-shadows: (\n  base: none,\n  flat: $box-shadow--flat,\n  raised: $box-shadow--raised,\n  overlay: $box-shadow--overlay,\n  heavy: $box-shadow--heavy\n);\n\n// Layer mixin\n@mixin layer($layer) {\n  @if map-has-key($layer-shadows, $layer) {\n    box-shadow: #{map-get($layer-shadows, $layer)};\n  } @else {\n    @warn '#{$layer} is not a valid layer.';\n  }\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/@storybook/addon-styling/node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/projects/credit-card-form/src/styles/globals/_globals.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'html,body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}*{box-sizing:border-box}button{padding:0;border:none;font:inherit;color:inherit;background-color:rgba(0,0,0,0);cursor:pointer}',"",{version:3,sources:["webpack://./src/projects/credit-card-form/src/styles/globals/_globals.scss"],names:[],mappings:"AAAA,UACE,QAAA,CACA,mJAAA,CAGA,kCAAA,CACA,iCAAA,CAGF,EACE,qBAAA,CAOF,OACE,SAAA,CACA,WAAA,CACA,YAAA,CACA,aAAA,CACA,8BAAA,CAGA,cAAA",sourcesContent:["html, body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n  sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n/**\n * Reset button styles.\n * It takes a bit of work to achieve a neutral look.\n */\nbutton {\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background-color: transparent;\n  /* show a hand cursor on hover; some argue that we\n  should keep the default arrow cursor for buttons */\n  cursor: pointer;\n}\n"],sourceRoot:""}]),__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);