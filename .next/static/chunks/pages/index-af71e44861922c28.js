(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2143)}])},2143:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return x}});var l=r(5893),a=r(5059),i=r(4662),t=r(3179),u=r(6660),s=r(5432),o=(0,a.G)(function(e,n){let r=(0,i.mq)("Heading",e),{className:a,...o}=(0,t.Lr)(e);return(0,l.jsx)(u.m.h2,{ref:n,className:(0,s.cx)("chakra-heading",e.className),...o,__css:r})});o.displayName="Heading";var d=r(204),c=r(3100),m=r(8855),f=r(8129),h=r(3332);function x(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{fontFamily:"heading",children:"Vidralgar"}),(0,l.jsx)(o,{fontFamily:"medium",children:"Vidralgar"}),(0,l.jsx)(o,{fontFamily:"medium",color:"green",children:"Vidralgar"}),(0,l.jsx)(o,{fontFamily:"body",children:"Vidralgar"}),(0,l.jsxs)(d.k,{m:3,fontFamily:"body",children:[(0,l.jsx)(c.xu,{bgColor:"white",h:12,w:12}),(0,l.jsx)(c.xu,{bgColor:"gray",h:12,w:12}),(0,l.jsx)(c.xu,{bgColor:"black",h:12,w:12}),(0,l.jsx)(c.xu,{bgColor:"green",h:12,w:12}),(0,l.jsx)(c.xu,{bgColor:"darkGreen",h:12,w:12})]}),(0,l.jsx)(m.z,{variant:"vidralgarButton",m:3,children:"Button"}),(0,l.jsx)(f.I,{placeholder:"Input",variant:"vidralgarInput"}),(0,l.jsx)(h.g,{placeholder:"Input",variant:"vidralgarTextArea"})]})}},9690:function(e,n,r){"use strict";r.d(n,{Y:function(){return i}});var l=r(8267),a=r(5432);function i(e){let{isDisabled:n,isInvalid:r,isReadOnly:i,isRequired:t,...u}=function(e){var n,r,i;let t=(0,l.NJ)(),{id:u,disabled:s,readOnly:o,required:d,isRequired:c,isInvalid:m,isReadOnly:f,isDisabled:h,onFocus:x,onBlur:v,...p}=e,b=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&b.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&b.push(t.helpTextId),{...p,"aria-describedby":b.join(" ")||void 0,id:null!=u?u:null==t?void 0:t.id,isDisabled:null!=(n=null!=s?s:h)?n:null==t?void 0:t.isDisabled,isReadOnly:null!=(r=null!=o?o:f)?r:null==t?void 0:t.isReadOnly,isRequired:null!=(i=null!=d?d:c)?i:null==t?void 0:t.isRequired,isInvalid:null!=m?m:null==t?void 0:t.isInvalid,onFocus:(0,a.v0)(null==t?void 0:t.onFocus,x),onBlur:(0,a.v0)(null==t?void 0:t.onBlur,v)}}(e);return{...u,disabled:n,readOnly:i,required:t,"aria-invalid":(0,a.Qm)(r),"aria-required":(0,a.Qm)(t),"aria-readonly":(0,a.Qm)(i)}}},8267:function(e,n,r){"use strict";r.d(n,{NI:function(){return v},NJ:function(){return x}});var l=r(5227),a=r(1103),i=r(5059),t=r(4662),u=r(3179),s=r(6660),o=r(5432),d=r(7294),c=r(5893),[m,f]=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,x]=(0,l.k)({strict:!1,name:"FormControlContext"}),v=(0,i.G)(function(e,n){let r=(0,t.jC)("Form",e),l=(0,u.Lr)(e),{getRootProps:i,htmlProps:f,...x}=function(e){let{id:n,isRequired:r,isInvalid:l,isDisabled:i,isReadOnly:t,...u}=e,s=(0,d.useId)(),c=n||`field-${s}`,m=`${c}-label`,f=`${c}-feedback`,h=`${c}-helptext`,[x,v]=(0,d.useState)(!1),[p,b]=(0,d.useState)(!1),[g,j]=(0,d.useState)(!1),y=(0,d.useCallback)((e={},n=null)=>({id:h,...e,ref:(0,a.lq)(n,e=>{e&&b(!0)})}),[h]),_=(0,d.useCallback)((e={},n=null)=>{var r,a;return{...e,ref:n,"data-focus":(0,o.PB)(g),"data-disabled":(0,o.PB)(i),"data-invalid":(0,o.PB)(l),"data-readonly":(0,o.PB)(t),id:null!=(r=e.id)?r:m,htmlFor:null!=(a=e.htmlFor)?a:c}},[c,i,g,l,t,m]),k=(0,d.useCallback)((e={},n=null)=>({id:f,...e,ref:(0,a.lq)(n,e=>{e&&v(!0)}),"aria-live":"polite"}),[f]),C=(0,d.useCallback)((e={},n=null)=>({...e,...u,ref:n,role:"group"}),[u]),F=(0,d.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!t,isDisabled:!!i,isFocused:!!g,onFocus:()=>j(!0),onBlur:()=>j(!1),hasFeedbackText:x,setHasFeedbackText:v,hasHelpText:p,setHasHelpText:b,id:c,labelId:m,feedbackId:f,helpTextId:h,htmlProps:u,getHelpTextProps:y,getErrorMessageProps:k,getRootProps:C,getLabelProps:_,getRequiredIndicatorProps:F}}(l),v=(0,o.cx)("chakra-form-control",e.className);return(0,c.jsx)(h,{value:x,children:(0,c.jsx)(m,{value:r,children:(0,c.jsx)(s.m.div,{...i({},n),className:v,__css:r.container})})})});v.displayName="FormControl",(0,i.G)(function(e,n){let r=x(),l=f(),a=(0,o.cx)("chakra-form__helper-text",e.className);return(0,c.jsx)(s.m.div,{...null==r?void 0:r.getHelpTextProps(e,n),__css:l.helperText,className:a})}).displayName="FormHelperText"},8129:function(e,n,r){"use strict";r.d(n,{I:function(){return d}});var l=r(9690),a=r(5059),i=r(4662),t=r(3179),u=r(6660),s=r(5432),o=r(5893),d=(0,a.G)(function(e,n){let{htmlSize:r,...a}=e,d=(0,i.jC)("Input",a),c=(0,t.Lr)(a),m=(0,l.Y)(c),f=(0,s.cx)("chakra-input",e.className);return(0,o.jsx)(u.m.input,{size:r,...m,__css:d.field,ref:n,className:f})});d.displayName="Input",d.id="Input"},3332:function(e,n,r){"use strict";r.d(n,{g:function(){return c}});var l=r(9690),a=r(5059),i=r(4662),t=r(3179),u=r(6660),s=r(5432),o=r(5893),d=["h","minH","height","minHeight"],c=(0,a.G)((e,n)=>{let r=(0,i.mq)("Textarea",e),{className:a,rows:c,...m}=(0,t.Lr)(e),f=(0,l.Y)(m),h=c?function(e,n=[]){let r=Object.assign({},e);for(let l of n)l in r&&delete r[l];return r}(r,d):r;return(0,o.jsx)(u.m.textarea,{ref:n,rows:c,...f,className:(0,s.cx)("chakra-textarea",a),__css:h})});c.displayName="Textarea"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);