import{an as L,ao as F,ap as K,aq as w,ar as D,as as B,at as j,au as z,av as P,aw as N,ax as V,N as W,a2 as G,ay as H,A,H as J,D as g,az as k,G as X,aA as Y,ae as Z,a7 as _,B as E,aB as $,aC as ee}from"./index-9b4a819b.js";class te extends L{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),x(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return T(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return T(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const s=this.options,l=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),F(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const n=this.hasListeners();n&&M(this.currentQuery,l,this.options,s)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==l||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const u=this.computeRefetchInterval();n&&(this.currentQuery!==l||this.options.enabled!==s.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e),s=this.createResult(t,e);return re(this,s,e)&&(this.currentResult=s,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),s}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(s=>{Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,t);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(K)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),w||this.currentResult.isStale||!D(this.options.staleTime))return;const t=B(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(w||this.options.enabled===!1||!D(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||j.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const s=this.currentQuery,l=this.options,n=this.currentResult,u=this.currentResultState,i=this.currentResultOptions,h=e!==s,o=h?e.state:this.currentQueryInitialState,d=h?this.currentResult:this.previousQueryResult,{state:c}=e;let{dataUpdatedAt:m,error:Q,errorUpdatedAt:v,fetchStatus:a,status:f}=c,R=!1,b=!1,p;if(t._optimisticResults){const y=this.hasListeners(),S=!y&&x(e,t),q=y&&M(e,s,t,l);(S||q)&&(a=z(e.options.networkMode)?"fetching":"paused",m||(f="loading")),t._optimisticResults==="isRestoring"&&(a="idle")}if(t.keepPreviousData&&!c.dataUpdatedAt&&d!=null&&d.isSuccess&&f!=="error")p=d.data,m=d.dataUpdatedAt,f=d.status,R=!0;else if(t.select&&typeof c.data<"u")if(n&&c.data===(u==null?void 0:u.data)&&t.select===this.selectFn)p=this.selectResult;else try{this.selectFn=t.select,p=t.select(c.data),p=P(n==null?void 0:n.data,p,t),this.selectResult=p,this.selectError=null}catch(y){this.selectError=y}else p=c.data;if(typeof t.placeholderData<"u"&&typeof p>"u"&&f==="loading"){let y;if(n!=null&&n.isPlaceholderData&&t.placeholderData===(i==null?void 0:i.placeholderData))y=n.data;else if(y=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof y<"u")try{y=t.select(y),this.selectError=null}catch(S){this.selectError=S}typeof y<"u"&&(f="success",p=P(n==null?void 0:n.data,y,t),b=!0)}this.selectError&&(Q=this.selectError,p=this.selectResult,v=Date.now(),f="error");const O=a==="fetching",I=f==="loading",C=f==="error";return{status:f,fetchStatus:a,isLoading:I,isSuccess:f==="success",isError:C,isInitialLoading:I&&O,data:p,dataUpdatedAt:m,error:Q,errorUpdatedAt:v,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>o.dataUpdateCount||c.errorUpdateCount>o.errorUpdateCount,isFetching:O,isRefetching:O&&!I,isLoadingError:C&&c.dataUpdatedAt===0,isPaused:a==="paused",isPlaceholderData:b,isPreviousData:R,isRefetchError:C&&c.dataUpdatedAt!==0,isStale:U(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,F(s,t))return;this.currentResult=s;const l={cache:!0},n=()=>{if(!t)return!0;const{notifyOnChangeProps:u}=this.options,i=typeof u=="function"?u():u;if(i==="all"||!i&&!this.trackedProps.size)return!0;const h=new Set(i??this.trackedProps);return this.options.useErrorBoundary&&h.add("error"),Object.keys(this.currentResult).some(o=>{const d=o;return this.currentResult[d]!==t[d]&&h.has(d)})};(e==null?void 0:e.listeners)!==!1&&n()&&(l.listeners=!0),this.notify({...l,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!N(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){V.batch(()=>{if(e.onSuccess){var t,s,l,n;(t=(s=this.options).onSuccess)==null||t.call(s,this.currentResult.data),(l=(n=this.options).onSettled)==null||l.call(n,this.currentResult.data,null)}else if(e.onError){var u,i,h,o;(u=(i=this.options).onError)==null||u.call(i,this.currentResult.error),(h=(o=this.options).onSettled)==null||h.call(o,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function se(r,e){return e.enabled!==!1&&!r.state.dataUpdatedAt&&!(r.state.status==="error"&&e.retryOnMount===!1)}function x(r,e){return se(r,e)||r.state.dataUpdatedAt>0&&T(r,e,e.refetchOnMount)}function T(r,e,t){if(e.enabled!==!1){const s=typeof t=="function"?t(r):t;return s==="always"||s!==!1&&U(r,e)}return!1}function M(r,e,t,s){return t.enabled!==!1&&(r!==e||s.enabled===!1)&&(!t.suspense||r.state.status!=="error")&&U(r,t)}function U(r,e){return r.isStaleByTime(e.staleTime)}function re(r,e,t){return t.keepPreviousData?!1:t.placeholderData!==void 0?e.isPlaceholderData:!F(r.getCurrentResult(),e)}function ie(r=""){const e=H(r),t=W(e,null);if(!t){var s;throw((s=G())==null?void 0:s.proxy)?new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library."):new Error("vue-query hooks can only be used inside setup() function.")}return t}function ne(r,e,t={},s={}){var l;const n=A(()=>ue(e,t,s)),u=(l=n.value.queryClient)!=null?l:ie(n.value.queryClientKey),i=A(()=>{const a=u.defaultQueryOptions(n.value);return a._optimisticResults=u.isRestoring.value?"isRestoring":"optimistic",a}),h=new r(u,i.value),o=J(h.getCurrentResult());let d=()=>{};g(u.isRestoring,a=>{a||(d(),d=h.subscribe(f=>{k(o,f)}))},{immediate:!0});const c=()=>{h.setOptions(i.value),k(o,h.getCurrentResult())};g(i,c),X(()=>{d()});const m=(...a)=>(c(),o.refetch(...a)),Q=()=>new Promise((a,f)=>{let R=()=>{};const b=()=>{if(i.value.enabled!==!1){const p=h.getOptimisticResult(i.value);p.isStale?(R(),h.fetchOptimistic(i.value).then(a,f)):(R(),a(p))}};b(),R=g(i,b)});g(()=>o.error,a=>{if(o.isError&&!o.isFetching&&Y(i.value.useErrorBoundary,[a,h.getCurrentQuery()]))throw a});const v=Z(_(o));for(const a in o)typeof o[a]=="function"&&(v[a]=o[a]);return v.suspense=Q,v.refetch=m,v}function ue(r,e={},t={}){const s=E(r),l=E(e),n=E(t);let u=s;$(s)?typeof l=="function"?u={...n,queryKey:s,queryFn:l}:u={...l,queryKey:s}:u=s;const i=ee(u);return typeof i.enabled=="function"&&(i.enabled=i.enabled()),i}function ce(r,e,t){return ne(te,r,e,t)}export{ce as u};
