"use strict";(self.webpackChunkice_scaffold_simple=self.webpackChunkice_scaffold_simple||[]).push([[293],{27293:(e,t,r)=>{r.r(t),r.d(t,{Adapter:()=>j,CodeActionAdaptor:()=>ne,DefinitionAdapter:()=>J,DiagnosticsAdapter:()=>V,FormatAdapter:()=>te,FormatHelper:()=>ee,FormatOnTypeAdapter:()=>re,InlayHintsAdapter:()=>oe,Kind:()=>$,LibFiles:()=>H,OccurrencesAdapter:()=>G,OutlineAdapter:()=>q,QuickInfoAdapter:()=>z,ReferenceAdapter:()=>Q,RenameAdapter:()=>ie,SignatureHelpAdapter:()=>U,SuggestAdapter:()=>W,WorkerManager:()=>E,flattenDiagnosticMessageText:()=>K,getJavaScriptWorker:()=>ue,getTypeScriptWorker:()=>le,setupJavaScript:()=>se,setupTypeScript:()=>ae});var n=r(80949),o=r(17100);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,i)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){u(o,n,i,a,s,"next",e)}function s(e){u(o,n,i,a,s,"throw",e)}a(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function b(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function h(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function v(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?s(e):t}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function w(e){return function(e){if(Array.isArray(e))return e}(e)||b(e)||S(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e){return function(e){if(Array.isArray(e))return a(e)}(e)||b(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function S(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=p(e);if(t){var i=p(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return v(this,r)}}var O,C,A=function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},P=Object.defineProperty,D=Object.getOwnPropertyDescriptor,F=Object.getOwnPropertyNames,I=Object.prototype.hasOwnProperty,T=function(e,t,r,n){if(t&&"object"===typeof t||"function"===typeof t){var i=!0,o=!1,a=void 0;try{for(var s,u=function(){var i=s.value;I.call(e,i)||i===r||P(e,i,{get:function(){return t[i]},enumerable:!(n=D(t,i))||n.enumerable})},l=F(t)[Symbol.iterator]();!(i=(s=l.next()).done);i=!0)u()}catch(c){o=!0,a=c}finally{try{i||null==l.return||l.return()}finally{if(o)throw a}}}return e},L=function(e,t,r){return function(e,t,r){t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r}(e,"symbol"!==("undefined"===typeof t?"undefined":k(t))?t+"":t,r),r},N={};T(N,O=n,"default"),C&&T(C,O,"default");var E=function(){function e(t,r){var n=this;c(this,e),g(this,"_configChangeListener",void 0),g(this,"_updateExtraLibsToken",void 0),g(this,"_extraLibsChangeListener",void 0),g(this,"_worker",void 0),g(this,"_client",void 0),this._modeId=t,this._defaults=r,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return d(e,[{key:"dispose",value:function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}},{key:"_stopWorker",value:function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}},{key:"_updateExtraLibs",value:function(){var e=this;return l((function(){var t,r;return A(this,(function(n){switch(n.label){case 0:return e._worker?(t=++e._updateExtraLibsToken,[4,e._worker.getProxy()]):[2];case 1:return r=n.sent(),e._updateExtraLibsToken!==t?[2]:(r.updateExtraLibs(e._defaults.getExtraLibs()),[2])}}))}))()}},{key:"_getClient",value:function(){if(!this._client){var e=this;this._client=l((function(){return A(this,(function(t){switch(t.label){case 0:return e._worker=N.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:e._modeId,keepIdleModels:!0,createData:{compilerOptions:e._defaults.getCompilerOptions(),extraLibs:e._defaults.getExtraLibs(),customWorkerPath:e._defaults.workerOptions.customWorkerPath,inlayHintsOptions:e._defaults.inlayHintsOptions}}),e._defaults.getEagerModelSync()?[4,e._worker.withSyncedResources(N.editor.getModels().filter((function(t){return t.getLanguageId()===e._modeId})).map((function(e){return e.uri})))]:[3,2];case 1:case 3:return[2,t.sent()];case 2:return[4,e._worker.getProxy()]}}))}))()}return this._client}},{key:"getLanguageServiceWorker",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=this;return l((function(){var e;return A(this,(function(r){switch(r.label){case 0:return[4,n._getClient()];case 1:return e=r.sent(),n._worker?[4,n._worker.withSyncedResources(t)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2,e]}}))}))()}}]),e}(),R={};function K(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("string"===typeof e)return e;if(void 0===e)return"";var n="";if(r){n+=t;for(var i=0;i<r;i++)n+="  "}if(n+=e.messageText,r++,e.next){var o=!0,a=!1,s=void 0;try{for(var u,l=e.next[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var c=u.value;n+=K(c,t,r)}}catch(f){a=!0,s=f}finally{try{o||null==l.return||l.return()}finally{if(a)throw s}}}return n}function M(e){return e?e.map((function(e){return e.text})).join(""):""}R["lib.d.ts"]=!0,R["lib.dom.d.ts"]=!0,R["lib.dom.iterable.d.ts"]=!0,R["lib.es2015.collection.d.ts"]=!0,R["lib.es2015.core.d.ts"]=!0,R["lib.es2015.d.ts"]=!0,R["lib.es2015.generator.d.ts"]=!0,R["lib.es2015.iterable.d.ts"]=!0,R["lib.es2015.promise.d.ts"]=!0,R["lib.es2015.proxy.d.ts"]=!0,R["lib.es2015.reflect.d.ts"]=!0,R["lib.es2015.symbol.d.ts"]=!0,R["lib.es2015.symbol.wellknown.d.ts"]=!0,R["lib.es2016.array.include.d.ts"]=!0,R["lib.es2016.d.ts"]=!0,R["lib.es2016.full.d.ts"]=!0,R["lib.es2017.d.ts"]=!0,R["lib.es2017.full.d.ts"]=!0,R["lib.es2017.intl.d.ts"]=!0,R["lib.es2017.object.d.ts"]=!0,R["lib.es2017.sharedmemory.d.ts"]=!0,R["lib.es2017.string.d.ts"]=!0,R["lib.es2017.typedarrays.d.ts"]=!0,R["lib.es2018.asyncgenerator.d.ts"]=!0,R["lib.es2018.asynciterable.d.ts"]=!0,R["lib.es2018.d.ts"]=!0,R["lib.es2018.full.d.ts"]=!0,R["lib.es2018.intl.d.ts"]=!0,R["lib.es2018.promise.d.ts"]=!0,R["lib.es2018.regexp.d.ts"]=!0,R["lib.es2019.array.d.ts"]=!0,R["lib.es2019.d.ts"]=!0,R["lib.es2019.full.d.ts"]=!0,R["lib.es2019.object.d.ts"]=!0,R["lib.es2019.string.d.ts"]=!0,R["lib.es2019.symbol.d.ts"]=!0,R["lib.es2020.bigint.d.ts"]=!0,R["lib.es2020.d.ts"]=!0,R["lib.es2020.full.d.ts"]=!0,R["lib.es2020.intl.d.ts"]=!0,R["lib.es2020.promise.d.ts"]=!0,R["lib.es2020.sharedmemory.d.ts"]=!0,R["lib.es2020.string.d.ts"]=!0,R["lib.es2020.symbol.wellknown.d.ts"]=!0,R["lib.es2021.d.ts"]=!0,R["lib.es2021.full.d.ts"]=!0,R["lib.es2021.intl.d.ts"]=!0,R["lib.es2021.promise.d.ts"]=!0,R["lib.es2021.string.d.ts"]=!0,R["lib.es2021.weakref.d.ts"]=!0,R["lib.es5.d.ts"]=!0,R["lib.es6.d.ts"]=!0,R["lib.esnext.d.ts"]=!0,R["lib.esnext.full.d.ts"]=!0,R["lib.esnext.intl.d.ts"]=!0,R["lib.esnext.promise.d.ts"]=!0,R["lib.esnext.string.d.ts"]=!0,R["lib.esnext.weakref.d.ts"]=!0,R["lib.scripthost.d.ts"]=!0,R["lib.webworker.d.ts"]=!0,R["lib.webworker.importscripts.d.ts"]=!0,R["lib.webworker.iterable.d.ts"]=!0;var j=function(){function e(t){c(this,e),this._worker=t}return d(e,[{key:"_textSpanToRange",value:function(e,t){var r=e.getPositionAt(t.start),n=e.getPositionAt(t.start+t.length);return{startLineNumber:r.lineNumber,startColumn:r.column,endLineNumber:n.lineNumber,endColumn:n.column}}}]),e}(),H=function(){function e(t){c(this,e),g(this,"_libFiles",void 0),g(this,"_hasFetchedLibFiles",void 0),g(this,"_fetchLibFilesPromise",void 0),this._worker=t,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}return d(e,[{key:"isLibFile",value:function(e){return!!e&&(0===e.path.indexOf("/lib.")&&!!R[e.path.slice(1)])}},{key:"getOrCreateModel",value:function(e){var t=N.Uri.parse(e),r=N.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return N.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);var n=o.typescriptDefaults.getExtraLibs()[e];return n?N.editor.createModel(n.content,"typescript",t):null}},{key:"_containsLibFile",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;if(this.isLibFile(a))return!0}}catch(s){r=!0,n=s}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}return!1}},{key:"fetchLibFilesIfNecessary",value:function(e){var t=this;return l((function(){return A(this,(function(r){switch(r.label){case 0:return t._containsLibFile(e)?[4,t._fetchLibFiles()]:[2];case 1:return r.sent(),[2]}}))}))()}},{key:"_fetchLibFiles",value:function(){var e=this;return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((function(e){return e.getLibFiles()})).then((function(t){e._hasFetchedLibFiles=!0,e._libFiles=t}))),this._fetchLibFilesPromise}}]),e}(),V=function(e){m(r,e);var t=x(r);function r(e,n,i,o){var a;c(this,r),g(s(a=t.call(this,o)),"_disposables",[]),g(s(a),"_listener",Object.create(null)),a._libFiles=e,a._defaults=n,a._selector=i;var u=function(e){if(e.getLanguageId()===i){var t,r=function(){a._defaults.getDiagnosticsOptions().onlyVisible?e.isAttachedToEditor()&&a._doValidate(e):a._doValidate(e)},n=e.onDidChangeContent((function(){clearTimeout(t),t=window.setTimeout(r,500)})),o=e.onDidChangeAttached((function(){a._defaults.getDiagnosticsOptions().onlyVisible&&(e.isAttachedToEditor()?r():N.editor.setModelMarkers(e,a._selector,[]))}));a._listener[e.uri.toString()]={dispose:function(){n.dispose(),o.dispose(),clearTimeout(t)}},r()}},l=function(e){N.editor.setModelMarkers(e,a._selector,[]);var t=e.uri.toString();a._listener[t]&&(a._listener[t].dispose(),delete a._listener[t])};a._disposables.push(N.editor.onDidCreateModel((function(e){return u(e)}))),a._disposables.push(N.editor.onWillDisposeModel(l)),a._disposables.push(N.editor.onDidChangeModelLanguage((function(e){l(e.model),u(e.model)}))),a._disposables.push({dispose:function(){var e=!0,t=!1,r=void 0;try{for(var n,i=N.editor.getModels()[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var o=n.value;l(o)}}catch(a){t=!0,r=a}finally{try{e||null==i.return||i.return()}finally{if(t)throw r}}}});var f=function(){var e=!0,t=!1,r=void 0;try{for(var n,i=N.editor.getModels()[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var o=n.value;l(o),u(o)}}catch(a){t=!0,r=a}finally{try{e||null==i.return||i.return()}finally{if(t)throw r}}};return a._disposables.push(a._defaults.onDidChange(f)),a._disposables.push(a._defaults.onDidExtraLibsChange(f)),N.editor.getModels().forEach((function(e){return u(e)})),a}return d(r,[{key:"dispose",value:function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]}},{key:"_doValidate",value:function(e){var t=this;return l((function(){var r,n,i,o,a,s,u,l,c;return A(this,(function(f){switch(f.label){case 0:return[4,t._worker(e.uri)];case 1:return r=f.sent(),e.isDisposed()?[2]:(n=[],i=t._defaults.getDiagnosticsOptions(),o=i.noSyntaxValidation,a=i.noSemanticValidation,s=i.noSuggestionDiagnostics,o||n.push(r.getSyntacticDiagnostics(e.uri.toString())),a||n.push(r.getSemanticDiagnostics(e.uri.toString())),s||n.push(r.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return!(u=f.sent())||e.isDisposed()?[2]:(l=u.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(t._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})),c=l.map((function(e){return e.relatedInformation||[]})).reduce((function(e,t){return t.concat(e)}),[]).map((function(e){return e.file?N.Uri.parse(e.file.fileName):null})),[4,t._libFiles.fetchLibFilesIfNecessary(c)]);case 3:return f.sent(),e.isDisposed()?[2]:(N.editor.setModelMarkers(e,t._selector,l.map((function(r){return t._convertDiagnostics(e,r)}))),[2])}}))}))()}},{key:"_convertDiagnostics",value:function(e,t){var r=t.start||0,n=t.length||1,i=e.getPositionAt(r),o=i.lineNumber,a=i.column,s=e.getPositionAt(r+n),u=s.lineNumber,l=s.column,c=[];return t.reportsUnnecessary&&c.push(N.MarkerTag.Unnecessary),t.reportsDeprecated&&c.push(N.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:o,startColumn:a,endLineNumber:u,endColumn:l,message:K(t.messageText,"\n"),code:t.code.toString(),tags:c,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}},{key:"_convertRelatedInformation",value:function(e,t){var r=this;if(!t)return[];var n=[];return t.forEach((function(t){var i=e;if(t.file&&(i=r._libFiles.getOrCreateModel(t.file.fileName)),i){var o=t.start||0,a=t.length||1,s=i.getPositionAt(o),u=s.lineNumber,l=s.column,c=i.getPositionAt(o+a),f=c.lineNumber,d=c.column;n.push({resource:i.uri,startLineNumber:u,startColumn:l,endLineNumber:f,endColumn:d,message:K(t.messageText,"\n")})}})),n}},{key:"_tsDiagnosticCategoryToMarkerSeverity",value:function(e){switch(e){case 1:return N.MarkerSeverity.Error;case 3:return N.MarkerSeverity.Info;case 0:return N.MarkerSeverity.Warning;case 2:return N.MarkerSeverity.Hint}return N.MarkerSeverity.Info}}]),r}(j),W=function(e){m(r,e);var t=x(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"triggerCharacters",get:function(){return["."]}},{key:"provideCompletionItems",value:function(e,t,r,n){var i=this;return l((function(){var r,n,o,a,s,u;return A(this,(function(l){switch(l.label){case 0:return r=e.getWordUntilPosition(t),n=new N.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=e.uri,a=e.getOffsetAt(t),[4,i._worker(o)];case 1:return s=l.sent(),e.isDisposed()?[2]:[4,s.getCompletionsAtPosition(o.toString(),a)];case 2:return!(u=l.sent())||e.isDisposed()?[2]:[2,{suggestions:u.entries.map((function(r){var i,s=n;if(r.replacementSpan){var u=e.getPositionAt(r.replacementSpan.start),l=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);s=new N.Range(u.lineNumber,u.column,l.lineNumber,l.column)}var c=[];return-1!==(null===(i=r.kindModifiers)||void 0===i?void 0:i.indexOf("deprecated"))&&c.push(N.languages.CompletionItemTag.Deprecated),{uri:o,position:t,offset:a,range:s,label:r.name,insertText:r.name,sortText:r.sortText,kind:W.convertKind(r.kind),tags:c}}))}]}}))}))()}},{key:"resolveCompletionItem",value:function(e,t){var r=this;return l((function(){var t,n,i,o,a;return A(this,(function(s){switch(s.label){case 0:return n=(t=e).uri,i=t.position,o=t.offset,[4,r._worker(n)];case 1:return[4,s.sent().getCompletionEntryDetails(n.toString(),o,t.label)];case 2:return(a=s.sent())?[2,{uri:n,position:i,label:a.name,kind:W.convertKind(a.kind),detail:M(a.displayParts),documentation:{value:W.createDocumentationString(a)}}]:[2,t]}}))}))()}}],[{key:"convertKind",value:function(e){switch(e){case $.primitiveType:case $.keyword:return N.languages.CompletionItemKind.Keyword;case $.variable:case $.localVariable:return N.languages.CompletionItemKind.Variable;case $.memberVariable:case $.memberGetAccessor:case $.memberSetAccessor:return N.languages.CompletionItemKind.Field;case $.function:case $.memberFunction:case $.constructSignature:case $.callSignature:case $.indexSignature:return N.languages.CompletionItemKind.Function;case $.enum:return N.languages.CompletionItemKind.Enum;case $.module:return N.languages.CompletionItemKind.Module;case $.class:return N.languages.CompletionItemKind.Class;case $.interface:return N.languages.CompletionItemKind.Interface;case $.warning:return N.languages.CompletionItemKind.File}return N.languages.CompletionItemKind.Property}},{key:"createDocumentationString",value:function(e){var t=M(e.documentation);if(e.tags){var r=!0,n=!1,i=void 0;try{for(var o,a=e.tags[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value;t+="\n\n".concat(B(s))}}catch(u){n=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}}return t}}]),r}(j);function B(e){var t="*@".concat(e.name,"*");if("param"===e.name&&e.text){var r=w(e.text),n=r[0],i=r.slice(1);t+="`".concat(n.text,"`"),i.length>0&&(t+=" \u2014 ".concat(i.map((function(e){return e.text})).join(" ")))}else Array.isArray(e.text)?t+=" \u2014 ".concat(e.text.map((function(e){return e.text})).join(" ")):e.text&&(t+=" \u2014 ".concat(e.text));return t}var U=function(e){m(r,e);var t=x(r);function r(){var e;return c(this,r),g(s(e=t.apply(this,arguments)),"signatureHelpTriggerCharacters",["(",","]),e}return d(r,[{key:"provideSignatureHelp",value:function(e,t,r,n){var i=this;return l((function(){var r,o,a,s,u;return A(this,(function(l){switch(l.label){case 0:return r=e.uri,o=e.getOffsetAt(t),[4,i._worker(r)];case 1:return a=l.sent(),e.isDisposed()?[2]:[4,a.getSignatureHelpItems(r.toString(),o,{triggerReason:U._toSignatureHelpTriggerReason(n)})];case 2:return!(s=l.sent())||e.isDisposed()?[2]:(u={activeSignature:s.selectedItemIndex,activeParameter:s.argumentIndex,signatures:[]},s.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation={value:M(e.documentation)},t.label+=M(e.prefixDisplayParts),e.parameters.forEach((function(r,n,i){var o=M(r.displayParts),a={label:o,documentation:{value:M(r.documentation)}};t.label+=o,t.parameters.push(a),n<i.length-1&&(t.label+=M(e.separatorDisplayParts))})),t.label+=M(e.suffixDisplayParts),u.signatures.push(t)})),[2,{value:u,dispose:function(){}}])}}))}))()}}],[{key:"_toSignatureHelpTriggerReason",value:function(e){switch(e.triggerKind){case N.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case N.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case N.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}}]),r}(j),z=function(e){m(r,e);var t=x(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"provideHover",value:function(e,t,r){var n=this;return l((function(){var r,i,o,a,s,u,l;return A(this,(function(c){switch(c.label){case 0:return r=e.uri,i=e.getOffsetAt(t),[4,n._worker(r)];case 1:return o=c.sent(),e.isDisposed()?[2]:[4,o.getQuickInfoAtPosition(r.toString(),i)];case 2:return!(a=c.sent())||e.isDisposed()?[2]:(s=M(a.documentation),u=a.tags?a.tags.map((function(e){return B(e)})).join("  \n\n"):"",l=M(a.displayParts),[2,{range:n._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+l+"\n```\n"},{value:s+(u?"\n\n"+u:"")}]}])}}))}))()}}]),r}(j),G=function(e){m(r,e);var t=x(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"provideDocumentHighlights",value:function(e,t,r){var n=this;return l((function(){var r,i,o,a;return A(this,(function(s){switch(s.label){case 0:return r=e.uri,i=e.getOffsetAt(t),[4,n._worker(r)];case 1:return o=s.sent(),e.isDisposed()?[2]:[4,o.getOccurrencesAtPosition(r.toString(),i)];case 2:return!(a=s.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return{range:n._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?N.languages.DocumentHighlightKind.Write:N.languages.DocumentHighlightKind.Text}}))]}}))}))()}}]),r}(j),J=function(e){m(r,e);var t=x(r);function r(e,n){var i;return c(this,r),(i=t.call(this,n))._libFiles=e,i}return d(r,[{key:"provideDefinition",value:function(e,t,r){var n=this;return l((function(){var r,i,o,a,s,u,l,c,f,d,g,p;return A(this,(function(m){switch(m.label){case 0:return r=e.uri,i=e.getOffsetAt(t),[4,n._worker(r)];case 1:return o=m.sent(),e.isDisposed()?[2]:[4,o.getDefinitionAtPosition(r.toString(),i)];case 2:return!(a=m.sent())||e.isDisposed()?[2]:[4,n._libFiles.fetchLibFilesIfNecessary(a.map((function(e){return N.Uri.parse(e.fileName)})))];case 3:if(m.sent(),e.isDisposed())return[2];s=[],u=!0,l=!1,c=void 0;try{for(f=a[Symbol.iterator]();!(u=(d=f.next()).done);u=!0)g=d.value,(p=n._libFiles.getOrCreateModel(g.fileName))&&s.push({uri:p.uri,range:n._textSpanToRange(p,g.textSpan)})}catch(b){l=!0,c=b}finally{try{u||null==f.return||f.return()}finally{if(l)throw c}}return[2,s]}}))}))()}}]),r}(j),Q=function(e){m(r,e);var t=x(r);function r(e,n){var i;return c(this,r),(i=t.call(this,n))._libFiles=e,i}return d(r,[{key:"provideReferences",value:function(e,t,r,n){var i=this;return l((function(){var r,n,o,a,s,u,l,c,f,d,g,p;return A(this,(function(m){switch(m.label){case 0:return r=e.uri,n=e.getOffsetAt(t),[4,i._worker(r)];case 1:return o=m.sent(),e.isDisposed()?[2]:[4,o.getReferencesAtPosition(r.toString(),n)];case 2:return!(a=m.sent())||e.isDisposed()?[2]:[4,i._libFiles.fetchLibFilesIfNecessary(a.map((function(e){return N.Uri.parse(e.fileName)})))];case 3:if(m.sent(),e.isDisposed())return[2];s=[],u=!0,l=!1,c=void 0;try{for(f=a[Symbol.iterator]();!(u=(d=f.next()).done);u=!0)g=d.value,(p=i._libFiles.getOrCreateModel(g.fileName))&&s.push({uri:p.uri,range:i._textSpanToRange(p,g.textSpan)})}catch(b){l=!0,c=b}finally{try{u||null==f.return||f.return()}finally{if(l)throw c}}return[2,s]}}))}))()}}]),r}(j),q=function(e){m(r,e);var t=x(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"provideDocumentSymbols",value:function(e,t){var r=this;return l((function(){var t,n,i,o,a;return A(this,(function(s){switch(s.label){case 0:return t=e.uri,[4,r._worker(t)];case 1:return n=s.sent(),e.isDisposed()?[2]:[4,n.getNavigationBarItems(t.toString())];case 2:return!(i=s.sent())||e.isDisposed()?[2]:(o=function(t,n,i){var a={name:n.text,detail:"",kind:X[n.kind]||N.languages.SymbolKind.Variable,range:r._textSpanToRange(e,n.spans[0]),selectionRange:r._textSpanToRange(e,n.spans[0]),tags:[]};if(i&&(a.containerName=i),n.childItems&&n.childItems.length>0){var s=!0,u=!1,l=void 0;try{for(var c,f=n.childItems[Symbol.iterator]();!(s=(c=f.next()).done);s=!0){var d=c.value;o(t,d,a.name)}}catch(g){u=!0,l=g}finally{try{s||null==f.return||f.return()}finally{if(u)throw l}}}t.push(a)},a=[],i.forEach((function(e){return o(a,e)})),[2,a])}}))}))()}}]),r}(j),$=function e(){c(this,e)};L($,"unknown",""),L($,"keyword","keyword"),L($,"script","script"),L($,"module","module"),L($,"class","class"),L($,"interface","interface"),L($,"type","type"),L($,"enum","enum"),L($,"variable","var"),L($,"localVariable","local var"),L($,"function","function"),L($,"localFunction","local function"),L($,"memberFunction","method"),L($,"memberGetAccessor","getter"),L($,"memberSetAccessor","setter"),L($,"memberVariable","property"),L($,"constructorImplementation","constructor"),L($,"callSignature","call"),L($,"indexSignature","index"),L($,"constructSignature","construct"),L($,"parameter","parameter"),L($,"typeParameter","type parameter"),L($,"primitiveType","primitive type"),L($,"label","label"),L($,"alias","alias"),L($,"const","const"),L($,"let","let"),L($,"warning","warning");var X=Object.create(null);X[$.module]=N.languages.SymbolKind.Module,X[$.class]=N.languages.SymbolKind.Class,X[$.enum]=N.languages.SymbolKind.Enum,X[$.interface]=N.languages.SymbolKind.Interface,X[$.memberFunction]=N.languages.SymbolKind.Method,X[$.memberVariable]=N.languages.SymbolKind.Property,X[$.memberGetAccessor]=N.languages.SymbolKind.Property,X[$.memberSetAccessor]=N.languages.SymbolKind.Property,X[$.variable]=N.languages.SymbolKind.Variable,X[$.const]=N.languages.SymbolKind.Variable,X[$.localVariable]=N.languages.SymbolKind.Variable,X[$.variable]=N.languages.SymbolKind.Variable,X[$.function]=N.languages.SymbolKind.Function,X[$.localFunction]=N.languages.SymbolKind.Function;var Y,Z,ee=function(e){m(r,e);var t=x(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"_convertTextChanges",value:function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}}],[{key:"_convertOptions",value:function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}}]),r}(j),te=function(e){m(r,e);var t=x(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"provideDocumentRangeFormattingEdits",value:function(e,t,r,n){var i=this;return l((function(){var n,o,a,s,u;return A(this,(function(l){switch(l.label){case 0:return n=e.uri,o=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,i._worker(n)];case 1:return s=l.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsForRange(n.toString(),o,a,ee._convertOptions(r))];case 2:return!(u=l.sent())||e.isDisposed()?[2]:[2,u.map((function(t){return i._convertTextChanges(e,t)}))]}}))}))()}}]),r}(ee),re=function(e){m(r,e);var t=x(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"autoFormatTriggerCharacters",get:function(){return[";","}","\n"]}},{key:"provideOnTypeFormattingEdits",value:function(e,t,r,n,i){var o=this;return l((function(){var i,a,s,u;return A(this,(function(l){switch(l.label){case 0:return i=e.uri,a=e.getOffsetAt(t),[4,o._worker(i)];case 1:return s=l.sent(),e.isDisposed()?[2]:[4,s.getFormattingEditsAfterKeystroke(i.toString(),a,r,ee._convertOptions(n))];case 2:return!(u=l.sent())||e.isDisposed()?[2]:[2,u.map((function(t){return o._convertTextChanges(e,t)}))]}}))}))()}}]),r}(ee),ne=function(e){m(r,e);var t=x(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"provideCodeActions",value:function(e,t,r,n){var i=this;return l((function(){var n,o,a,s,u,l,c;return A(this,(function(f){switch(f.label){case 0:return n=e.uri,o=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=ee._convertOptions(e.getOptions()),u=r.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,i._worker(n)];case 1:return l=f.sent(),e.isDisposed()?[2]:[4,l.getCodeFixesAtPosition(n.toString(),o,a,u,s)];case 2:return!(c=f.sent())||e.isDisposed()?[2,{actions:[],dispose:function(){}}]:[2,{actions:c.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return i._tsCodeFixActionToMonacoCodeAction(e,r,t)})),dispose:function(){}}]}}))}))()}},{key:"_tsCodeFixActionToMonacoCodeAction",value:function(e,t,r){var n=[],i=!0,o=!1,a=void 0;try{for(var s,u=r.changes[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var l=s.value,c=!0,f=!1,d=void 0;try{for(var g,p=l.textChanges[Symbol.iterator]();!(c=(g=p.next()).done);c=!0){var m=g.value;n.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,m.span),text:m.newText}})}}catch(b){f=!0,d=b}finally{try{c||null==p.return||p.return()}finally{if(f)throw d}}}}catch(b){o=!0,a=b}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}return{title:r.description,edit:{edits:n},diagnostics:t.markers,kind:"quickfix"}}}]),r}(ee),ie=function(e){m(r,e);var t=x(r);function r(e,n){var i;return c(this,r),(i=t.call(this,n))._libFiles=e,i}return d(r,[{key:"provideRenameEdits",value:function(e,t,r,n){var i=this;return l((function(){var n,o,a,s,u,l,c,f,d,g,p,m,b,h;return A(this,(function(v){switch(v.label){case 0:return n=e.uri,o=n.toString(),a=e.getOffsetAt(t),[4,i._worker(n)];case 1:return s=v.sent(),e.isDisposed()?[2]:[4,s.getRenameInfo(o,a,{allowRenameOfImportPath:!1})];case 2:if(!1===(u=v.sent()).canRename)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(void 0!==u.fileToRename)throw new Error("Renaming files is not supported.");return[4,s.findRenameLocations(o,a,!1,!1,!1)];case 3:if(!(l=v.sent())||e.isDisposed())return[2];c=[],f=!0,d=!1,g=void 0;try{for(p=l[Symbol.iterator]();!(f=(m=p.next()).done);f=!0){if(b=m.value,!(h=i._libFiles.getOrCreateModel(b.fileName)))throw new Error("Unknown file ".concat(b.fileName,"."));c.push({resource:h.uri,versionId:void 0,textEdit:{range:i._textSpanToRange(h,b.textSpan),text:r}})}}catch(y){d=!0,g=y}finally{try{f||null==p.return||p.return()}finally{if(d)throw g}}return[2,{edits:c}]}}))}))()}}]),r}(j),oe=function(e){m(r,e);var t=x(r);function r(){return c(this,r),t.apply(this,arguments)}return d(r,[{key:"provideInlayHints",value:function(e,t,r){var n=this;return l((function(){var r,i,o,a,s,u,l;return A(this,(function(c){switch(c.label){case 0:return r=e.uri,i=r.toString(),o=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,n._worker(r)];case 1:return s=c.sent(),e.isDisposed()?[2,null]:[4,s.provideInlayHints(i,o,a)];case 2:return u=c.sent(),l=u.map((function(t){return h(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}({},t),{label:t.text,position:e.getPositionAt(t.position),kind:n._convertHintKind(t.kind)})})),[2,{hints:l,dispose:function(){}}]}}))}))()}},{key:"_convertHintKind",value:function(e){return"Parameter"===e?N.languages.InlayHintKind.Parameter:N.languages.InlayHintKind.Type}}]),r}(j);function ae(e){Z=ce(e,"typescript")}function se(e){Y=ce(e,"javascript")}function ue(){return new Promise((function(e,t){if(!Y)return t("JavaScript not registered!");e(Y)}))}function le(){return new Promise((function(e,t){if(!Z)return t("TypeScript not registered!");e(Z)}))}function ce(e,t){var r=new E(t,e),n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i;return(i=r).getLanguageServiceWorker.apply(i,_(t))},i=new H(n);return N.languages.registerCompletionItemProvider(t,new W(n)),N.languages.registerSignatureHelpProvider(t,new U(n)),N.languages.registerHoverProvider(t,new z(n)),N.languages.registerDocumentHighlightProvider(t,new G(n)),N.languages.registerDefinitionProvider(t,new J(i,n)),N.languages.registerReferenceProvider(t,new Q(i,n)),N.languages.registerDocumentSymbolProvider(t,new q(n)),N.languages.registerDocumentRangeFormattingEditProvider(t,new te(n)),N.languages.registerOnTypeFormattingEditProvider(t,new re(n)),N.languages.registerCodeActionProvider(t,new ne(n)),N.languages.registerRenameProvider(t,new ie(i,n)),N.languages.registerInlayHintsProvider(t,new oe(n)),new V(i,e,t,n),n}}}]);