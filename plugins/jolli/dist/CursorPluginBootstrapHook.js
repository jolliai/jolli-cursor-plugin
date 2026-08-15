#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var Xg=Object.create;var Rn=Object.defineProperty;var Yg=Object.getOwnPropertyDescriptor;var zg=Object.getOwnPropertyNames;var Qg=Object.getPrototypeOf,Zg=Object.prototype.hasOwnProperty;var S=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var R=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},ds=(t,e)=>{for(var r in e)Rn(t,r,{get:e[r],enumerable:!0})},Rl=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of zg(e))!Zg.call(t,o)&&o!==r&&Rn(t,o,{get:()=>e[o],enumerable:!(n=Yg(e,o))||n.enumerable});return t};var Mt=(t,e,r)=>(r=t!=null?Xg(Qg(t)):{},Rl(e||!t||!t.__esModule?Rn(r,"default",{value:t,enumerable:!0}):r,t)),ey=t=>Rl(Rn({},"__esModule",{value:!0}),t);function ps(){return ny.getStore()?.traceId}var _l,lv,ny,ms=S(()=>{"use strict";_l=require("node:async_hooks"),lv="0".repeat(32),ny=new _l.AsyncLocalStorage});function k(t){return t instanceof Error?t.message:String(t)}function ft(t){return t instanceof Error&&t.code==="ENOENT"}function ht(t){xl=t}function ye(){return Pl}function uy(t,e){let r=ly[e]??ay;return vl[t]>=vl[r]}function dy(t,e,r,n,o){let s=new Date().toISOString(),i=t.toUpperCase().padEnd(5),a=r,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=n.length)return d;let u=n[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${e}]${c} ${a}`}function X(t){let e=t??xl??process.cwd();return(0,$t.join)(e,oy,sy)}function Er(t){return String(t).padStart(2,"0")}async function hy(t,e){let r=new Date,n=`${r.getUTCFullYear()}-${Er(r.getUTCMonth()+1)}-${Er(r.getUTCDate())}_${Er(r.getUTCHours())}-${Er(r.getUTCMinutes())}-${Er(r.getUTCSeconds())}`;try{let o=(0,$t.join)(t,`debug_${n}.log`);for(let s=1;await gy(o);s++)o=(0,$t.join)(t,`debug_${n}_${s}.log`);await(0,de.rename)(e,o)}catch{return}try{let o=(await(0,de.readdir)(t)).filter(s=>fy.test(s)).sort();for(let s=0;s<o.length-my;s++)await(0,de.unlink)((0,$t.join)(t,o[s])).catch(()=>{})}catch{}}async function gy(t){try{return await(0,de.stat)(t),!0}catch{return!1}}function yy(t){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Pl||(Cl=Cl.then(async()=>{try{let e=X(),r=(0,$t.join)(e,iy);await(0,de.stat)(e);try{(await(0,de.stat)(r)).size>py&&await hy(e,r)}catch{}await(0,de.appendFile)(r,`${t}
`,"utf-8")}catch{}}))}function p(t){function e(r,n,o){let s=dy(r,t,n,o,ps());cy&&(r==="info"||r==="debug")||(r==="warn"?console.warn(s):console.error(s)),uy(r,t)&&yy(s)}return{debug(r,...n){e("debug",r,n)},info(r,...n){e("info",r,n)},warn(r,...n){e("warn",r,n)},error(r,...n){e("error",r,n)}}}var de,$t,oy,sy,iy,ge,xl,Pl,vl,ay,ly,cy,Cl,py,my,fy,h=S(()=>{"use strict";de=require("node:fs/promises"),$t=require("node:path");ms();oy=".jolli",sy="jollimemory",iy="debug.log";ge="jollimemory/summaries/v3";Pl=!1;vl={debug:0,info:1,warn:2,error:3},ay="info",ly={},cy=!0;Cl=Promise.resolve(),py=2*1024*1024,my=10,fy=/^debug_.*\.log$/});function jt(t,e,r){return(0,Al.promisify)(Fe.execFile)(t,e,{...kr,...r??{}})}function _e(t,e,r){return(0,Fe.execFileSync)(t,e,{...kr,...r??{}})}function Il(t,e,r){return(0,Fe.spawnSync)(t,e,{...kr,...r??{}})}var Fe,Al,kr,Ze,we=S(()=>{"use strict";Fe=require("node:child_process"),Al=require("node:util"),kr={windowsHide:!0};Ze=((t,e,r)=>Array.isArray(e)?(0,Fe.spawn)(t,e,{...kr,...r??{}}):(0,Fe.spawn)(t,{...kr,...e??{}}))});function by(t){return Sy.some(e=>(t[e]??"")!=="")}function gt(t){try{return(0,Ft.readFileSync)(t,"utf-8")}catch{return null}}function fs(t){try{return(0,Ft.realpathSync)(t)}catch{return(0,$.resolve)(t)}}function _n(t){try{return(0,Ft.statSync)(t).isDirectory()}catch{return!1}}function Dl(t,e){let r=gt((0,$.join)(t,"HEAD"))?.trim();return!r||!(vn.test(r)||Ey.test(r))?!1:_n((0,$.join)(e,"objects"))&&_n((0,$.join)(e,"refs"))}function ky(t,e,r){let n=/^gitdir:\s*(.+)$/m.exec(e);if(!n)return null;let o=n[1].trim();if(!o)return null;let s=(0,$.isAbsolute)(o)?o:(0,$.resolve)(t,o);return _n(s)?r?fs(s):s:null}function Nl(t,e){let r=gt((0,$.join)(t,"commondir"))?.trim();if(!r)return t;let n=(0,$.isAbsolute)(r)?r:(0,$.resolve)(t,r);return e?fs(n):n}function yt(t,e={}){let{env:r=process.env,realpath:n=!1}=e;if(by(r))return null;let o=n?fs(t):(0,$.resolve)(t);for(;;){let s=(0,$.join)(o,".git");if(_n(s)){let l=Nl(s,n);return Dl(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=gt(s);if(i!==null){let l=ky(o,i,n);if(l===null)return null;let c=Nl(l,n);return Dl(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,$.dirname)(o);if(a===o)return null;o=a}}function Ol(t){let e=gt((0,$.join)(t.gitDir,"HEAD"))?.trim();if(!e)return null;let r=/^ref:\s*refs\/heads\/(.+)$/.exec(e);return r&&r[1].trim()||null}function Ty(t){return Ry.test(t)&&!t.split("/").includes("..")}function _y(t,e){let r=gt((0,$.join)(t,"packed-refs"));if(r===null)return null;for(let n of r.split(`
`)){if(!n||n.startsWith("#")||n.startsWith("^"))continue;let o=n.indexOf(" ");if(!(o<=0)&&n.slice(o+1).trim()===e){let s=n.slice(0,o).trim();return vn.test(s)?s:null}}return null}function Ll(t){let e=gt((0,$.join)(t.gitDir,"HEAD"))?.trim();if(!e)return null;if(vn.test(e))return e;let r=/^ref:\s*(.+)$/.exec(e);if(!r)return null;let n=r[1].trim();if(!Ty(n))return null;for(let o of t.gitDir===t.commonDir?[t.gitDir]:[t.gitDir,t.commonDir]){let s=gt((0,$.join)(o,n))?.trim();if(s&&vn.test(s))return s;let i=_y(o,n);if(i)return i}return null}var Ft,$,Sy,vn,Ey,Ry,Cn=S(()=>{"use strict";Ft=require("node:fs"),$=require("node:path"),Sy=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];vn=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,Ey=/^ref:\s*refs\//;Ry=/^refs\/[A-Za-z0-9._\-/]+$/});function et(t){return Rr(t,process.platform)}function Rr(t,e){let r=Tr(t.replace(/\\/g,"/"));return e==="win32"||e==="darwin"?r.toLowerCase():r}function Tr(t){let e=t.length;for(;e>0&&t[e-1]==="/";)e--;return e===t.length?t:t.slice(0,e)}function hs(t,e){let r=et(t),n=et(e);return r===n||r.startsWith(`${n}/`)}function ve(t){return t.replace(/\\/g,"/")}var ne=S(()=>{"use strict"});function Fl(t){let e=gs.get(t);if(e!==void 0)return e;let r=yt(t,{realpath:!0})?.worktreeRoot;if(r){let o=ve(r);return gs.set(t,o),o}let n=t;try{let o=_e("git",["rev-parse","--show-toplevel"],{cwd:t,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();o&&(n=o)}catch{}return gs.set(t,n),n}async function j(t,e){W.debug("git %s%s",e?`[cwd=${e}] `:"",t.join(" "));try{let{stdout:r,stderr:n}=await jt("git",t,{maxBuffer:vy,env:{...process.env,LC_ALL:"C"},...e!==void 0&&{cwd:e}});return{stdout:r.trimEnd(),stderr:n.trim(),exitCode:0}}catch(r){let n=r,o=typeof n.code=="number"?n.code:n.code==="ENOENT"?127:1,s={stdout:(n.stdout??"").trimEnd(),stderr:(n.stderr??n.message??"").trim(),exitCode:o};return W.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}async function ys(t,e){return(await j(["rev-parse","--verify",`refs/heads/${t}`],e)).exitCode===0}async function ws(t,e){if(await ys(t,e))return;W.info("Creating orphan branch '%s' using plumbing commands",t);let r=JSON.stringify({version:1,entries:[]},null,"	"),n=await Iy(r,e);W.debug("Created blob: %s",n);let o=`100644 blob ${n}	index.json
`,s=await Oy(o,e);W.debug("Created tree: %s",s);let i=await j(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],e);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();W.debug("Created commit: %s",a);let l=await j(["update-ref",`refs/heads/${t}`,a],e);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);W.info("Orphan branch '%s' created successfully",t)}function Py(t){let e=t.toLowerCase();return xy.some(r=>e.includes(r))}async function Ss(t,e,r){W.debug("Reading file from branch: %s:%s",t,e);let n=await j(["show",`${t}:${e}`],r);return n.exitCode!==0?(Py(n.stderr)?W.debug("File not found: %s:%s",t,e):W.warn("Read failed for %s:%s (git exit %d): %s",t,e,n.exitCode,n.stderr||"(no stderr)"),null):n.stdout}async function bs(t,e,r){let n=new Map;if(e.length===0)return n;let o=["cat-file","--batch"];return W.debug("git (cat-file --batch stream) %s%s for %d paths",r?`[cwd=${r}] `:"",o.join(" "),e.length),new Promise((s,i)=>{let a=Ze("git",o,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),l="",c=Buffer.alloc(0),d=!0,u=0,m=[],f=!1,g=0,b=!1,C=E=>{b||(b=!0,E?i(E):s(n))};a.stderr.on("data",E=>{l+=E.toString()}),a.stdout.on("data",E=>{for(c=Buffer.concat([c,E]);!b;){if(d){let N=c.indexOf(10);if(N<0)return;let O=c.subarray(0,N).toString("utf8");if(c=c.subarray(N+1),g>=e.length){C(new Error(`git cat-file --batch returned extra response: ${O}`));return}let B=e[g];if(g++,O.endsWith(" missing")){n.set(B,null);continue}let Qe=O.substring(O.lastIndexOf(" ")+1),V=Number.parseInt(Qe,10);if(!Number.isFinite(V)||V<0){C(new Error(`Unexpected cat-file --batch header for ${B}: ${O}`));return}u=V,m=[],d=!1,f=!0}if(u>0){if(c.length===0)return;let N=Math.min(u,c.length);if(m.push(c.subarray(0,N)),c=c.subarray(N),u-=N,u>0)return}if(f){if(c.length<1)return;c=c.subarray(1),f=!1;let N=e[g-1];n.set(N,Buffer.concat(m).toString("utf8")),m=[],d=!0}}}),a.on("close",E=>{if(E!==0){C(new Error(`git cat-file --batch failed (exit ${E}): ${l.trim()}`));return}if(g<e.length){C(new Error(`git cat-file --batch returned ${g} of ${e.length} expected responses; stderr=${l.trim()}`));return}C(null)}),a.on("error",E=>{C(E)}),a.stdin.on("error",E=>{C(E)});for(let E of e)a.stdin.write(`${t}:${E}
`);a.stdin.end()})}async function Hl(t,e,r,n){await ws(t,n);let o=await j(["rev-parse",`refs/heads/${t}`],n);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await Dy(t,s,r,e,n);let i=e.filter(l=>!l.delete).length,a=e.filter(l=>l.delete).length;W.info("Updated branch '%s': %d written, %d deleted (via fast-import)",t,i,a)}async function Es(t,e,r){W.debug("Listing files in branch %s under prefix '%s'",t,e);let n=await j(["ls-tree","-z","-r","--name-only",t,e],r);if(n.exitCode!==0)return W.debug("Failed to list files (branch may not exist): %s",n.stderr),[];let o=n.stdout.split(Cy).filter(s=>s.length>0);return W.debug("Found %d files",o.length),o}async function Ay(t){let e=await j(["rev-parse","--git-common-dir"],t);if(e.exitCode!==0)throw new Error(`Failed to get git common dir: ${e.stderr}`);let r=e.stdout.trim();return(0,Ce.resolve)(t,r)}async function ks(t){let e=await Ay(t);return(0,Ce.dirname)(e)}async function Pn(t){return yt(t)!==null?!0:(await j(["rev-parse","--git-dir"],t)).exitCode===0}async function Ht(t){let e=await j(["worktree","list","--porcelain"],t);if(e.exitCode!==0)throw new Error(`Failed to list worktrees: ${e.stderr}`);return e.stdout.split(`
`).filter(n=>n.startsWith("worktree ")).map(n=>n.slice(9).trim())}async function Ut(t){let e=(0,Ce.join)(t,".git");if((await(0,xn.stat)(e)).isDirectory())return(0,Ce.join)(e,"hooks");let n=await(0,xn.readFile)(e,"utf-8"),o=n.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${n.trim()}`);let s=o[1].trim(),i=(0,Ce.resolve)(t,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,Ce.join)(l,"hooks")}return(0,Ce.join)(i,"hooks")}function Ul(t,e,r){return W.debug("git (stdin) %s%s",r?`[cwd=${r}] `:"",t.join(" ")),new Promise((n,o)=>{let s=Ze("git",t,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${t[0]} failed (exit ${l}): ${a.trim()}`)):n(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(e),s.stdin.end()})}async function Iy(t,e){return Ul(["hash-object","-w","--stdin"],t,e)}async function Ml(t,e){let r=await j(["var",t],e);if(r.exitCode!==0)throw new Error(`Failed to read ${t}: ${r.stderr}`);return r.stdout.trim()}async function Dy(t,e,r,n,o){let s=await Ml("GIT_AUTHOR_IDENT",o),i=await Ml("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];W.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=n.filter(d=>!d.delete),c=n.filter(d=>d.delete);return new Promise((d,u)=>{let m=Ze("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),f="";m.stderr.on("data",E=>{f+=E.toString()}),m.on("close",E=>{E!==0?u(new Error(`git fast-import failed (exit ${E}): ${f.trim()}`)):d()}),m.on("error",E=>{u(E)});let g=m.stdin;g.on("error",E=>{u(E)});let b=[];l.forEach((E,N)=>{let O=N+1,B=Buffer.from(E.content,"utf8");b.push(`blob
mark :${O}
data ${B.length}
`,B,`
`)});let C=Buffer.from(r,"utf8");b.push(`commit refs/heads/${t}
`,`author ${s}
`,`committer ${i}
`,`data ${C.length}
`,C,`
`,`from ${e}
`),l.forEach((E,N)=>{b.push(`M 100644 :${N+1} ${$l(E.path)}
`)});for(let E of c)b.push(`D ${$l(E.path)}
`);b.push(`done
`),Ny(g,b).then(()=>{g.end()},E=>{u(E)})})}async function Ny(t,e){for(let r of e)t.write(r)||await(0,jl.once)(t,"drain")}function $l(t){return/["\\\n\r]/.test(t)?`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:t}async function Oy(t,e){return Ul(["mktree"],t,e)}var jl,xn,Ce,vy,Cy,W,gs,xy,oe=S(()=>{"use strict";jl=require("node:events"),xn=require("node:fs/promises"),Ce=require("node:path");h();we();Cn();ne();vy=10*1024*1024,Cy="\0",W=p("GitOps"),gs=new Map;xy=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function Ly(t){return new Promise(e=>setTimeout(e,t))}function Bl(t){let e=Number(t);if(!Number.isInteger(e)||e<=0)return!1;if(e===process.pid)return!0;try{return process.kill(e,0),!0}catch(r){return r.code!=="ESRCH"}}async function Rs(t){try{let e=await(0,xe.stat)(t),r=Date.now()-e.mtimeMs,n=await Wl(t),o=n!==null&&!Bl(n);if(!o&&r<Jl)return!1;o?_r.warn("Removing orphaned lock %s (PID %s no longer running)",t,n):_r.warn("Removing stale lock file %s (age: %dms)",t,r),await(0,xe.rm)(t,{force:!0})}catch(e){if(e.code!=="ENOENT")return _r.error("Failed to check lock file %s: %s",t,e.message),!1}try{return await(0,xe.writeFile)(t,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function Wl(t){try{let r=(await(0,xe.readFile)(t,"utf-8")).trim();return r.length>0?r:null}catch{return null}}async function Jt(t,e){let r=await Wl(t);if(r!==null&&r!==String(process.pid)){_r.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",e,r,process.pid);return}try{await(0,xe.rm)(t,{force:!0})}catch(n){_r.error("Failed to release %s: %s",e,n.message)}}async function Bt(t,e){if(e.timeoutMs<=0)return Rs(t);let r=Date.now()+e.timeoutMs;for(;;){if(await Rs(t))return!0;if(Date.now()>=r)return!1;await Ly(e.pollMs)}}var xe,_r,Jl,Ts=S(()=>{"use strict";xe=require("node:fs/promises");h();_r=p("LockPrimitives"),Jl=300*1e3});function Kl(t){return(0,ql.resolve)(t??process.cwd())}function An(t){return _s.getStore()?.has(Kl(t))===!0}function In(t,e){let r=new Set(_s.getStore()??[]);return r.add(Kl(t)),_s.run(r,e)}var Gl,ql,_s,Dn=S(()=>{"use strict";Gl=require("node:async_hooks"),ql=require("node:path"),_s=new Gl.AsyncLocalStorage});function My(t){return jt("git",["rev-parse","--git-common-dir"],{cwd:t})}async function tc(t){let e=t??process.cwd(),r=zl.get(e);if(r!==void 0)return r;let n;try{let{stdout:o}=await My(e),s=o.trim(),i=(0,ae.isAbsolute)(s)?s:(0,ae.resolve)(e,s);n=(0,ae.join)(i,"jollimemory")}catch{Zl.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",e),n=X(e)}return zl.set(e,n),n}async function vs(t){let e=await tc(t);return await(0,vr.mkdir)(e,{recursive:!0}),e}async function Cs(t,e={}){let r=e.timeoutMs??jy,n=e.pollMs??Fy,o=await vs(t);return Bt((0,ae.join)(o,ec),{timeoutMs:r,pollMs:n})}async function xs(t){let e=await tc(t);await Jt((0,ae.join)(e,ec),"orphan-write.lock")}async function Wy(t,e,r,n){let o=n.timeoutMs??Uy,s=n.pollMs??Nn;await(0,vr.mkdir)(t,{recursive:!0});let i=(0,ae.join)(t,e),a=await Bt(i,{timeoutMs:o,pollMs:s});a||Zl.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",e,o);try{return await r()}finally{a&&await Jt(i,e)}}async function Ps(t,e,r={}){return Wy(t,$y,e,r)}async function Cr(t,e={}){let r=e.timeoutMs??Jy,n=e.pollMs??Nn,o=await vs(t),s=(0,ae.join)(o,Xl);return await Bt(s,{timeoutMs:r,pollMs:n})?{release:()=>Jt(s,Xl)}:null}async function As(t,e,r={}){let n=await Cr(t,r);if(!n)return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await n.release()}}async function Is(t,e,r={}){let n=r.timeoutMs??Hy,o=r.pollMs??Nn,s=await vs(t),i=(0,ae.join)(s,Vl);if(!await Bt(i,{timeoutMs:n,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await Jt(i,Vl)}}async function Ds(t,e={}){let r=e.timeoutMs??By,n=e.pollMs??Nn,o=e.globalDir??(0,ae.join)((0,Ql.homedir)(),".jolli","jollimemory");await(0,vr.mkdir)(o,{recursive:!0});let s=(0,ae.join)(o,Yl);if(!await Bt(s,{timeoutMs:r,pollMs:n}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await Jt(s,Yl)}}var vr,Ql,ae,Zl,ec,Vl,$y,Xl,Yl,jy,Fy,Hy,Nn,Uy,Jy,By,zl,Pe=S(()=>{"use strict";vr=require("node:fs/promises"),Ql=require("node:os"),ae=require("node:path");h();we();Ts();Dn();Zl=p("Locks");ec="orphan-write.lock",Vl="profile.lock",$y="config.lock",Xl="repo-hooks.lock",Yl="runtime-registry.lock",jy=1e3,Fy=50,Hy=5e3,Nn=25,Uy=5e3,Jy=5e3,By=5e3,zl=new Map});async function Ns(t,e,r={}){await(0,tt.mkdir)((0,nc.dirname)(t),{recursive:!0});let n=`${t}.${process.pid}.tmp`;await(0,tt.writeFile)(n,e,r.mode!==void 0?{encoding:"utf-8",mode:r.mode}:"utf-8");try{await(0,tt.rename)(n,t)}catch(o){throw await(0,tt.unlink)(n).catch(()=>{}),o}}var tt,nc,Os=S(()=>{"use strict";tt=require("node:fs/promises"),nc=require("node:path")});function ic(t){return{...t,manuallyDisabled:t.userDisabled===!0||t.cutoverFence!==void 0}}async function Xy(t){let e=yt(t)?.commonDir;if(e)return e;let r=await j(["rev-parse","--git-common-dir"],t),n=r.exitCode===0?r.stdout.trim():"";return n?(0,Ae.isAbsolute)(n)?n:(0,Ae.join)(t,n):null}async function Ls(t){let e=await Xy(t);if(e===null)return{profilePath:(0,Ae.join)(X(t),oc),legacyMarkerPath:null};let r=(0,Ae.dirname)(e);return{profilePath:(0,Ae.join)(X(r),oc),legacyMarkerPath:(0,Ae.join)(e,qy,Ky)}}async function On(t){try{let e=await(0,xr.readFile)(t,"utf-8"),r=JSON.parse(e);return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}catch{return{}}}async function Yy(t){try{return await(0,xr.stat)(t),!0}catch{return!1}}async function ac(t,e){await Ns(t,`${JSON.stringify(e,null,"	")}
`)}async function zy(t){let e;try{e=await Ht(t)}catch{e=[t]}for(let r of e)if(await Yy((0,Ae.join)(X(r),Vy)))return!0;return!1}async function rt(t){let{profilePath:e}=await Ls(t),r=await On(e);if(r.userDisabled!==void 0)return r.userDisabled===!0;if(r.manuallyDisabled!==void 0)return sc(t,e,r.manuallyDisabled===!0);let n=await zy(t);return sc(t,e,n)}async function sc(t,e,r){let n=await Is(t,async()=>{let o=await On(e);return o.userDisabled!==void 0?o.userDisabled===!0:(await ac(e,ic({...o,userDisabled:r})),r)}).catch(()=>{});return n?.acquired&&n.value!==void 0?n.value:r}async function Ms(t,e){let{profilePath:r}=await Ls(t);if(!(await Is(t,async()=>{let o=await On(r);await ac(r,ic({...o,userDisabled:e}))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function Pr(t){let{profilePath:e}=await Ls(t);return(await On(e)).cutoverFence??null}var xr,Ae,oc,qy,Ky,Vy,nt=S(()=>{"use strict";xr=require("node:fs/promises"),Ae=require("node:path");h();we();Os();Cn();oe();Pe();oc="profile.json",qy="jollimemory",Ky="backfill-card-dismissed",Vy="disabled-by-user"});var $s=S(()=>{"use strict"});async function A(t,e,r){let n=`${t}.${process.pid}.${(0,lc.randomUUID)()}.tmp`;await(0,wt.writeFile)(n,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r});try{await(0,wt.rename)(n,t)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,wt.writeFile)(t,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r}),await(0,wt.rm)(n,{force:!0});else throw o}}var lc,wt,se=S(()=>{"use strict";lc=require("node:crypto"),wt=require("node:fs/promises")});function Y(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var Ar=S(()=>{"use strict"});var cc=S(()=>{"use strict"});var uc=S(()=>{"use strict"});function dc(t){return Number.isFinite(t)&&t>=0&&t<=1114111&&!(t>=55296&&t<=57343)}function pc(t){return t.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(e,r)=>{if(r.startsWith("#x")){let o=Number.parseInt(r.slice(2),16);return dc(o)?String.fromCodePoint(o):e}if(r.startsWith("#")){let o=Number.parseInt(r.slice(1),10);return dc(o)?String.fromCodePoint(o):e}let n=Qy[r];return typeof n=="string"?n:e})}var Qy,mc=S(()=>{"use strict";Qy={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var Zy,fc,hc=S(()=>{"use strict";cc();Ar();uc();mc();Zy={decodeHtmlEntities:pc,lowercase:t=>t.toLowerCase()},fc=new Set(Object.keys(Zy))});var ew,gc,yc=S(()=>{"use strict";ew="^https://app\\.asana\\.com/",gc={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:ew,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var tw,wc,Sc=S(()=>{"use strict";tw="^https://[^/]+/wiki/",wc={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:tw},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var rw,bc,Ec=S(()=>{"use strict";rw="^/[^/\\s]+/[^/\\s]+",bc={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:rw},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var js,nw,Fs,rC,kc=S(()=>{"use strict";Ar();js=["mcp__Figma__","mcp__figma__"],nw={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},Fs=Object.keys(nw),rC=new Set(Fs)});var ow,sw,Rc,Tc=S(()=>{"use strict";kc();ow="^[0-9a-zA-Z]{22,128}$",sw=js.flatMap(t=>Fs.map(e=>`${t}${e}`)),Rc={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...js],exact:sw}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:ow},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var iw,aw,_c,vc=S(()=>{"use strict";iw="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",aw="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",_c={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:iw,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:aw,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var lw,Cc,xc=S(()=>{"use strict";lw="^[A-Z][A-Z0-9_]*-\\d+$",Cc={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:lw},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Pc,Ac=S(()=>{"use strict";Pc={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var cw,Ic,Dc=S(()=>{"use strict";cw="^[A-Z][A-Z0-9_]*-\\d+$",Ic={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:cw},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Nc,Oc=S(()=>{"use strict";Nc={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var uw,dw,pw,Lc,Mc=S(()=>{"use strict";uw="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",dw="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",pw="<content\\b[^>]*>([\\s\\S]*?)</content>",Lc={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:uw,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:dw,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:pw,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Hs,mw,fw,Us,mC,$c=S(()=>{"use strict";Ar();Hs=["mcp__Sentry__","mcp__sentry__"],mw="get_sentry_resource",fw="analyze_issue_with_seer",Us=[mw,fw],mC=new Set(Us)});var hw,gw,yw,ww,jc,Fc=S(()=>{"use strict";$c();hw=Hs.flatMap(t=>Us.map(e=>`${t}${e}`)),gw="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",yw="^Issue [A-Za-z0-9_-]{1,128}$",ww="^Issue [0-9]{1,128}$",jc={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:yw,titleFallbackPoorestPattern:ww,match:{claude:{prefixes:[...Hs],exact:hw}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:gw},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Hc,Uc=S(()=>{"use strict";Hc={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var Sw,Js,Bs,Jc,Bc=S(()=>{"use strict";Sw="^dpl_[A-Za-z0-9]+$",Js=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],Bs=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],Jc={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:Sw},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:Js}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:Bs,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:Js,target:[{op:"path",path:"target"}],url:Bs}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:Js,url:Bs}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Wc,Gc=S(()=>{"use strict";Wc={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var qc,Kc=S(()=>{"use strict";qc={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var Vc,Xc=S(()=>{"use strict";yc();Sc();Ec();Tc();vc();xc();Ac();Dc();Oc();Mc();Fc();Uc();Bc();Gc();Kc();Vc=[Ic,wc,Cc,_c,Lc,Hc,qc,Wc,gc,Nc,bc,Pc,Jc,Rc,jc]});function Ew(t,e,r){if(!Y(t))return"op must be an object";if(r.opCount++,r.opCount>Yc)return`pipe exceeds ${Yc} ops`;let n=t.op;if(typeof n!="string"||!bw.has(n))return`unknown op: ${String(n)}`;switch(n){case"path":return typeof t.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof t.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof t.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof t.pattern!="string"?"regex op requires a string 'pattern'":t.extract!==void 0&&typeof t.extract!="string"?"regex.extract must be a string":t.lastMatch!==void 0&&typeof t.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof t.fn!="string"?"transform op requires a string 'fn'":fc.has(t.fn)?void 0:`unknown transform: ${t.fn}`;case"coalesce":{if(e+1>Ln)return`nesting depth exceeds ${Ln}`;if(!Array.isArray(t.of))return"coalesce op requires an array 'of'";for(let o of t.of){let s=Ws(o,e+1,r);if(s!==void 0)return s}return}case"template":{if(e+1>Ln)return`nesting depth exceeds ${Ln}`;if(typeof t.template!="string")return"template op requires a string 'template'";if(!Y(t.from))return"template op requires an object 'from'";for(let o of Object.values(t.from)){let s=Ws(o,e+1,r);if(s!==void 0)return s}return}}}function Ws(t,e,r){if(!Array.isArray(t))return"pipe must be an array";for(let n of t){let o=Ew(n,e,r);if(o!==void 0)return o}}function Ir(t,e){let r=Ws(t,0,{opCount:0});return r===void 0?void 0:`${e}: ${r}`}function kw(t){if(!Y(t))return{ok:!1,error:"definition must be an object"};if(typeof t.id!="string"||t.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof t.label!="string"||t.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof t.icon!="string"||t.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(t.titleFallbackPattern!==void 0){if(typeof t.titleFallbackPattern!="string"||t.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(t.titleFallbackPattern)}catch(r){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${r.message}`}}}if(t.titleFallbackPoorestPattern!==void 0){if(typeof t.titleFallbackPoorestPattern!="string"||t.titleFallbackPoorestPattern.length===0)return{ok:!1,error:"titleFallbackPoorestPattern must be a non-empty string"};try{new RegExp(t.titleFallbackPoorestPattern)}catch(r){return{ok:!1,error:`titleFallbackPoorestPattern is not a valid regex: ${r.message}`}}if(t.titleFallbackPattern===void 0)return{ok:!1,error:"titleFallbackPoorestPattern requires titleFallbackPattern"}}if(!Y(t.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(t.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!Y(t.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(t.fields))return{ok:!1,error:"fields must be an array"};if(!Y(t.storage))return{ok:!1,error:"storage must be an object"};if(!Y(t.render))return{ok:!1,error:"render must be an object"};let e=t.reference;for(let r of["nativeId","title"]){let n=e[r];if(!Y(n))return{ok:!1,error:`reference.${r} is required`};let o=Ir(n.pipe,`reference.${r}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(e.url!==void 0){if(!Y(e.url))return{ok:!1,error:"reference.url must be an object"};let r=Ir(e.url.pipe,"reference.url.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.description!==void 0){if(!Y(e.description))return{ok:!1,error:"reference.description must be an object"};let r=Ir(e.description.pipe,"reference.description.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.guard!==void 0){if(!Y(e.guard))return{ok:!1,error:"reference.guard must be an object"};let r=Ir(e.guard.pipe,"reference.guard.pipe");if(r!==void 0)return{ok:!1,error:r}}for(let[r,n]of t.fields.entries()){if(!Y(n))return{ok:!1,error:`fields[${r}] must be an object`};if(typeof n.key!="string"||!zc.test(n.key))return{ok:!1,error:`fields[${r}].key must match ${zc}`};if(typeof n.label!="string"||n.label.length===0)return{ok:!1,error:`fields[${r}].label must be a non-empty string`};let o=Ir(n.pipe,`fields[${r}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:t}}function $n(){if(Mn!==void 0)return Mn;let t=[];for(let e of Vc){let r=kw(e);if(!r.ok)throw new Error(`invalid built-in source definition '${e.id}': ${r.error}`);t.push(r.def)}return Mn=new Gs(t),Mn}var Yc,Ln,bw,zc,Gs,Mn,jn=S(()=>{"use strict";Ar();hc();Xc();Yc=64,Ln=8,bw=new Set(["path","coalesce","regex","template","join","const","transform"]);zc=/^[\w-]+$/;Gs=class{constructor(e){this.definitions=e}all(){return this.definitions}byId(e){return this.definitions.find(r=>r.id===e)}match(e,r,n,o){return e==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>r.startsWith(a))||i.exact!==void 0&&!i.exact.includes(r)||i.acceptSuffix!==void 0&&!r.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>r.endsWith(a)))}):n!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===n&&i.functionCallNames.includes(r)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(r)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function qs(t){return vw(t)}function Rw(t){return t.replace(/^\n+/,"").replace(/\n+$/,"")}function Tw(t){let e=t.indexOf(_w);return e===-1?t:t.slice(0,e)}function vw(t){if(typeof t!="string")return null;let e=t.split(`
`);if(e[0]?.trim()!=="---")return null;let r=-1;for(let N=1;N<e.length;N++)if(e[N].trim()==="---"){r=N;break}if(r===-1)return null;let n=e.slice(1,r),o=Rw(Tw(e.slice(r+1).join(`
`))),s={},i=[],a=!1;for(let N of n){if(a){let B=/^\s+- (.+)$/.exec(N);if(B){try{let Qe=JSON.parse(B[1]);Cw(Qe)&&i.push(Qe)}catch{}continue}a=!1}if(N.trim()==="fields:"){a=!0;continue}let O=/^([a-zA-Z]+):\s*(.+)$/.exec(N);O&&(s[O[1]]=O[2])}let l=N=>{let O=s[N];if(O!==void 0)try{let B=JSON.parse(O);return typeof B=="string"?B:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!xw(c))return null;let u=c,m=d,f=l("title"),g=l("url"),b=l("referencedAt"),C=l("sourceToolName");return!f||b===void 0||!C?null:{mapKey:`${u}:${m}`,source:u,nativeId:m,title:f,referencedAt:b,toolName:C,...g!==void 0?{url:g}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function Cw(t){if(typeof t!="object"||t===null)return!1;let e=t;return!(typeof e.key!="string"||typeof e.label!="string"||typeof e.value!="string"||!/^[\w-]+$/.test(e.key)||e.icon!==void 0&&typeof e.icon!="string")}function xw(t){return t.length>0&&/^[\w-]+$/.test(t)}var BC,_w,Dr=S(()=>{"use strict";h();jn();BC=p("ReferenceStore");_w="<!-- jolli:auto-note -->"});function Pw(t){return`${t.source}:${t.skill}`}function Aw(t,e){if(t===void 0)return e;let r=t.usage===void 0||e.usage===void 0?t.usage??e.usage:{input:t.usage.input+e.usage.input,output:t.usage.output+e.usage.output,cached:t.usage.cached+e.usage.cached,confidence:t.usage.confidence==="attributed"&&e.usage.confidence==="attributed"?"attributed":"estimated"},n=[t,e].filter(l=>l.usage!==void 0),o=Dw(n),{usageBySession:s,supersededDocIds:i,...a}=t;return{...a,invocationCount:t.invocationCount+e.invocationCount,...r!==void 0?{usage:r}:{},...o!==void 0?{usageBySession:o}:{},...t.detection==="heuristic"||e.detection==="heuristic"?{detection:"heuristic"}:{},...t.jolliDocId===void 0&&e.jolliDocId!==void 0?{jolliDocId:e.jolliDocId,jolliDocUrl:e.jolliDocUrl}:{},...Iw(t,e)}}function Iw(t,e){let r=new Set([...t.supersededDocIds??[],...e.supersededDocIds??[]]);t.jolliDocId!==void 0&&e.jolliDocId!==void 0&&r.add(e.jolliDocId);let n=t.jolliDocId??e.jolliDocId;return n!==void 0&&r.delete(n),r.size>0?{supersededDocIds:[...r]}:{}}function Qc(t){if(t.supersededDocIds===void 0)return t;let{supersededDocIds:e,...r}=t;return r}function Dw(t){if(t.length===0)return;let e=[];for(let n of t){if(n.usageBySession===void 0)return;e.push(n.usageBySession)}let r={};for(let n of e)for(let[o,s]of Object.entries(n)){let i=r[o];r[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return r}function Zc(t){let e=new Map;for(let n of t)e.has(n.archivedKey)||e.set(n.archivedKey,n);let r=new Map;for(let n of e.values()){let o=Pw(n);r.set(o,Aw(r.get(o),n))}return[...r.values()]}var Ks=S(()=>{"use strict"});var KC,eu=S(()=>{"use strict";h();KC=p("SkillStore")});async function Ys(t){let e=X(t);return await(0,He.mkdir)(e,{recursive:!0}),e}function ie(){return(0,Fn.join)((0,tu.homedir)(),".jolli","jollimemory")}async function Wt(t){let e=(0,Fn.join)(t,ru);try{let r=await(0,He.readFile)(e,"utf-8"),n=JSON.parse(r);return Nw(n)}catch{return Hn.debug("No config file found in %s, using defaults",t),{}}}function Nw(t){if(t.syncEnabled===void 0)return t;let{syncEnabled:e,...r}=t;return r.autoSyncEnabled===void 0?{...r,autoSyncEnabled:e}:r}function Ow(t,e){return!("localAgentTool"in e)||"localAgentPath"in e||(t.localAgentTool??"claude-code")===(e.localAgentTool??"claude-code")||t.localAgentPath===void 0?e:(Hn.info("Clearing localAgentPath (was set for %s, switching to %s)",t.localAgentTool??"claude-code",e.localAgentTool),{...e,localAgentPath:void 0})}async function Un(t,e){await Ps(e,async()=>{await nu(t,e)}),Hn.info("Config saved to %s",e)}async function Jn(t){return Lw(t,ie())}async function Lw(t,e){return Ps(e,async()=>{let{update:r,result:n}=t(await Wt(e));return r!==null&&(await nu(r,e),Hn.info("Config saved to %s",e)),n})}async function nu(t,e){let r=await Wt(e),n={...r,...Ow(r,t)};await A((0,Fn.join)(e,ru),JSON.stringify(n,null,"	"))}async function Se(){return Wt(ie())}async function St(t){return Un(t,ie())}function Vs(t,e){let r={...t},n=!1;for(let o of e)o in r&&(delete r[o],n=!0);return{value:r,changed:n}}function ou(t){let e=!1,r={};for(let[i,a]of Object.entries(t.plans??{})){if(a.ignored===!0){e=!0;continue}let l=Vs(a,Mw);l.changed&&(e=!0),r[i]=l.value}let n;if(t.notes!==void 0){n={};for(let[i,a]of Object.entries(t.notes)){if(a.ignored===!0){e=!0;continue}let l=Vs(a,$w);l.changed&&(e=!0),n[i]=l.value}}let o;if(t.references!==void 0){o={};for(let[i,a]of Object.entries(t.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){e=!0;continue}let c=Vs(a,jw);c.changed&&(e=!0),o[i]=c.value}}return{registry:{version:1,plans:r,...n!==void 0?{notes:n}:{},...o!==void 0?{references:o}:{},...t.skills!==void 0?{skills:t.skills}:{}},changed:e}}var Xs,He,tu,Fn,Hn,ru,ux,dx,px,mx,Mw,$w,jw,le=S(()=>{"use strict";Xs=require("node:crypto"),He=require("node:fs/promises"),tu=require("node:os"),Fn=require("node:path");h();$s();se();Pe();Dr();Ks();eu();Hn=p("SessionTracker"),ru="config.json",ux=2880*60*1e3;dx=2880*60*1e3,px=10080*60*1e3,mx=(0,Xs.randomBytes)(4).toString("hex"),Mw=["ignored","branch","editCount"],$w=["ignored","branch"],jw=["ignored","branch","commitHash","contentHashAtCommit"]});function Be(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Je.major?!0:r<Je.major?!1:n>=Je.minor}function Et(t){let e=t,r=e?.message??String(t),n=e?.code;return n==="ENOENT"?null:n==="EACCES"||n==="EPERM"?{kind:"permission",message:r}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(r)?{kind:"corrupt",message:r}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(r)?{kind:"locked",message:r}:/no such table|no such column/i.test(r)?{kind:"schema",message:r}:/SQLITE_CANTOPEN|unable to open/i.test(r)?{kind:"permission",message:r}:{kind:"unknown",message:r}}var Je,Ie=S(()=>{"use strict";Je={major:22,minor:13}});function ud(t){if((0,cd.platform)()==="win32")try{Il("attrib",["+h",t],{timeout:2e3})}catch{}}var cd,dd=S(()=>{"use strict";cd=require("node:os");we()});var pd,H,ce,Xt,ee,ao=S(()=>{"use strict";pd=require("node:crypto"),H=require("node:fs"),ce=require("node:path");h();dd();ne();Xt=p("MetadataManager"),ee=class t{constructor(e){this.jolliDir=e;this.manifestPath=(0,ce.join)(e,"manifest.json"),this.branchesPath=(0,ce.join)(e,"branches.json"),this.configPath=(0,ce.join)(e,"config.json"),this.migrationPath=(0,ce.join)(e,"migration.json"),this.indexPath=(0,ce.join)(e,"index.json")}ensure(){(0,H.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&ud(this.jolliDir),(0,H.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,H.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,H.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e.fileId);n.push(e),this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Xt.info("Manifest updated: %s (%s)",e.path,e.type)}removeFromManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e);return n.length===r.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),!0)}unregisterFilesByType(e){let r=this.readManifest(),n=r.files.filter(s=>s.type!==e),o=r.files.length-n.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Xt.info("Manifest unregistered %d entries of type=%s",o,e),o)}replaceFiles(e){let r=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:[...e]},null,"	"))}findByPath(e){return this.readManifest().files.find(r=>r.path===e)}findById(e){return this.readManifest().files.find(r=>r.fileId===e)}updatePath(e,r){let n=this.readManifest();if(!n.files.find(i=>i.fileId===e))return!1;let s=n.files.map(i=>i.fileId===e?{...i,path:r}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:s},null,"	")),!0}resolveFolderForBranch(e){let r=this.readBranches(),n=r.mappings.find(a=>a.branch===e);if(n)return n.folder;let o=t.transcodeBranchName(e),s={folder:o,branch:e,createdAt:new Date().toISOString()},i={...r,mappings:[...r.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),Xt.info("Branch mapping created: %s \u2192 %s",e,o),o}removeBranchMapping(e){let r=this.readBranches(),n=r.mappings.filter(o=>o.branch!==e);return n.length===r.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:n},null,"	")),Xt.info("Branch mapping removed: %s (no remaining head)",e),!0)}renameBranchFolder(e,r){let n=this.readBranches(),o=n.mappings.map(l=>l.folder===e?{...l,folder:r}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${e}/`)?(i++,{...l,path:l.path.replace(`${e}/`,`${r}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(e){let r=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:r.mappings.filter(i=>i.folder!==e)},null,"	"));let n=this.readManifest(),o=n.files.filter(i=>!i.path.startsWith(`${e}/`)),s=n.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:o},null,"	")),s}unregisterBranches(e){let r=new Set(e);if(r.size===0)return 0;let n=this.readBranches(),o=n.mappings.filter(i=>!r.has(i.branch)),s=n.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	")),Xt.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(e){try{return this.listBranchMappings().find(r=>r.folder===e)?.branch??e}catch{return e}}listIndexHeads(){let e=this.readJson(this.indexPath);return!e||!Array.isArray(e.entries)?[]:e.entries.filter(r=>typeof r?.commitHash=="string"&&typeof r.branch=="string"&&(r.parentCommitHash===null||typeof r.parentCommitHash=="string")&&r.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(e){this.atomicWrite(this.configPath,JSON.stringify(e,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(e){this.atomicWrite(this.migrationPath,JSON.stringify(e,null,"	"))}reconcile(e){let r=this.readManifest();if(r.files.length===0||!r.files.some(a=>!(0,H.existsSync)((0,ce.join)(e,a.path))))return 0;let o=new Map;try{this.walkDir(e,e,o)}catch{}let s=0,i=[];for(let a of r.files){let l=(0,ce.join)(e,a.path);if((0,H.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(Xt.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:i},null,"	")),s}walkDir(e,r,n){for(let o of(0,H.readdirSync)(e,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,ce.join)(e,o.name);if(o.isDirectory())this.walkDir(s,r,n);else if(o.name.endsWith(".md"))try{let i=(0,H.readFileSync)(s,"utf-8"),a=t.sha256(i);n.set(a,ve((0,ce.relative)(r,s)))}catch{}}}static transcodeBranchName(e){let r=e.replace(/[/\\:*?~^]/g,"-");return r=r.replace(/-{3,}/g,"-"),r=r.replace(/\.\./g,"--"),r=r.replace(/^[.-]+|[.-]+$/g,""),r||"default"}static sha256(e){return(0,pd.createHash)("sha256").update(e,"utf-8").digest("hex")}readJson(e){if(!(0,H.existsSync)(e))return null;try{return JSON.parse((0,H.readFileSync)(e,"utf-8"))}catch{return null}}atomicWrite(e,r){let n=(0,ce.dirname)(e);(0,H.mkdirSync)(n,{recursive:!0});let o=`${e}.tmp`;(0,H.writeFileSync)(o,r,"utf-8"),(0,H.renameSync)(o,e)}}});function RS(t){if(process.env.VITEST)return null;try{return _e("ssh",["-G",t],{encoding:"utf-8",timeout:ES,stdio:["ignore","pipe","pipe"]})}catch(e){return bS.debug("ssh -G %s failed: %s",t,e instanceof Error?e.message:String(e)),null}}function TS(t){for(let e of t.split(/\r?\n/)){let r=e.match(/^hostname\s+(\S+)/i);if(r?.[1])return r[1]}return null}function lo(t){if(!t)return t;let e=md.get(t);if(e!==void 0)return e;let r=t,n=kS(t);if(n){let o=TS(n);o&&(r=o)}return md.set(t,r),r}var bS,ES,md,kS,fd=S(()=>{"use strict";h();we();bS=p("SshAliasResolver"),ES=5e3,md=new Map,kS=RS});function hd(){return(0,G.join)((0,Sd.homedir)(),"Documents","jolli")}function vi(t){return t?bd(t)?t:(_S.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",t),hd()):hd()}function bd(t){return t?(0,G.isAbsolute)(t)&&!t.includes(".."):!0}function Ed(t,e,r){let n=vi(r),o=(0,G.join)(n,t);if(!(0,it.existsSync)(o)){let i=Pd(n,t,e).match;return i||(_i(o,t,e),o)}let s=Id(o);return s&&vd(s,e,t)?o:s&&Ad(o,s)?(_i(o,t,e),o):PS(n,t,e)}function kd(t){let e=xi(t,["config","--get","remote.origin.url"]);if(e){let n=e.match(/\/([^/]+?)(?:\.git)?$/);if(n?.[1])return n[1]}let r=Rd(t);return r?(0,G.basename)(r):(0,G.basename)(t)||"unknown"}function Rd(t){let e=xi(t,["rev-parse","--git-common-dir"]);if(!e)return null;let r=(0,G.isAbsolute)(e)?e:(0,G.join)(t,e),n=(0,G.dirname)(r);return n&&n!=="/"&&n!=="."?n:null}function vS(t,e){if(!(0,G.basename)(t))return{claimable:!1,blocker:"not-a-project"};let r=Rd(t);if(!r)return{claimable:!1,blocker:"not-a-project"};let n;try{n=vi(e)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return hs(n,r)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function Ci(t,e){return vS(t,e).claimable}function Td(){let t=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(t)&&t>0?t:3e4}function CS(){return Math.min(Td(),5e3)}function xS(t){return typeof t=="object"&&t!==null&&t.code==="ETIMEDOUT"}function gd(t,e,r=Td()){return _e("git",e,{cwd:t,encoding:"utf-8",timeout:r,stdio:["ignore","pipe","pipe"]}).trim()||null}function xi(t,e){try{return gd(t,e)}catch(r){if(!xS(r))return null;try{return gd(t,e,CS())}catch{return null}}}function _d(t){return xi(t,["remote","get-url","origin"])}function vd(t,e,r){return t.remoteUrl&&e?yd(t.remoteUrl)===yd(e):!t.remoteUrl&&!e?t.repoName==null||t.repoName===r:!1}function yd(t){return xd(t).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function xd(t){let e=t.match(/^(?:git\+)?ssh:\/\/(?:[^@/]+@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(e)return`https://${lo(e[1])}${wd(e[2],"22")}/${e[3]}`;let r=t.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(r)return`https://${lo(r[1])}${wd(r[2],"9418")}/${r[3]}`;let n=t.match(/^[^@/:]+@([^/:]+):(.+)$/);return n?`https://${lo(n[1])}/${n[2]}`:t}function wd(t,e){return t===void 0||t===e?"":`:${t}`}function Pd(t,e,r){let n=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,G.join)(t,`${e}-${i}`);if(!(0,it.existsSync)(a)){s===null&&(s=a);continue}let l=Id(a);if(l&&vd(l,r,e)){n=a;break}l&&o===null&&Ad(a,l)&&(o=a)}return{match:n,stub:o,firstUnused:s}}function PS(t,e,r){let n=Pd(t,e,r);if(n.match)return n.match;let o=n.stub??n.firstUnused??(0,G.join)(t,`${e}-${Date.now()}`);return _i(o,e,r),o}function _i(t,e,r){if(ye())return;let n=new ee((0,G.join)(t,".jolli"));n.ensure();let o=n.readConfig();n.saveConfig({...o,remoteUrl:r??void 0,repoName:e})}function Ad(t,e){return e.remoteUrl==null&&e.repoName==null}function Id(t){let e=(0,G.join)(t,".jolli","config.json");if(!(0,it.existsSync)(e))return null;try{return JSON.parse((0,it.readFileSync)(e,"utf-8"))}catch{return null}}var it,Sd,G,_S,Cd,Yt=S(()=>{"use strict";it=require("node:fs"),Sd=require("node:os"),G=require("node:path");h();we();ao();ne();fd();_S=p("KBPathResolver");Cd=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Ni(t){let e=await j(["config","--get","remote.origin.url"],t),r=e.exitCode===0?e.stdout.trim():"";return r.length===0?Hr(t):Jd(r,t)}function Jd(t,e){let r=t.trim();if(r.length===0)return Hr(e);let n=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(r);if(n&&!r.includes("://")){let i=n[2].toLowerCase(),a=Ud(i,Hd(n[3]));return`https://${i}/${a}`}let o;try{o=new URL(r)}catch{return Hr(e)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let i=o.hostname.toLowerCase(),a=Ud(i,Hd(o.pathname.replace(/^\/+/,""))),l=MS(s,o.port);return`https://${i}${l}/${a}`}return Hr(s==="file"?o.pathname:e)}function Hr(t){let e=Tr(ve(t));return e.length===0?"file:///":e.startsWith("/")?`file://${e}`:`file:///${e}`}function Hd(t){let e=Tr(t);return e.toLowerCase().endsWith(".git")&&(e=e.slice(0,-4)),Tr(e)}function Ud(t,e){return Cd.has(t)?e.toLowerCase():e}function MS(t,e){return e.length===0?"":t==="ssh"||t==="git"?e===LS[t]?"":`:${e}`:`:${e}`}var LS,fo=S(()=>{"use strict";oe();Yt();ne();LS={ssh:"22",git:"9418"}});function Oi(){return"cursor-plugin"}var zt,ho=S(()=>{"use strict";zt="cursor-plugin/1.0.0"});var Wd,Gd,qd,Kd,Vd,Xd,Yd,zd,go=S(()=>{"use strict";Wd=`
-- \u2500\u2500 Metadata \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
CREATE TABLE schema_meta (key TEXT PRIMARY KEY, value TEXT) STRICT;

-- \u2500\u2500 Repo registry \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- \`id\` is the surrogate key every other table references. repo_identity is a
-- normalized remote URL that legitimately CHANGES (a local-only repo gaining a
-- remote, a checkout moving), and it is 60-odd bytes that would otherwise ride
-- in every row and every composite index \u2014 measured, that one substitution took
-- commit_branches from 37.3 MiB to 30.2 MiB before any other change. It stays as
-- a UNIQUE natural key because that is what a worktree resolves to at startup.
--
-- Rows are NEVER deleted; disable is an UPDATE of \`disabled_at\`, so history
-- stays queryable and no single statement can wipe a repo's memories. The
-- trigger that enforces it is in DashboardDb, with the reasoning for why it is
-- the one trigger that survived.
-- Every column here is either read today or is a fact about the repo that only
-- this row records. \`bootstrap_cursor\` was neither \u2014 it was declared and never
-- written by anything \u2014 so it is the one that went.
CREATE TABLE repos (
  id                INTEGER PRIMARY KEY,
  repo_identity     TEXT NOT NULL UNIQUE,
  repo_name         TEXT NOT NULL,
  worktree_root     TEXT NOT NULL,
  remote_url        TEXT,
  enabled_at        TEXT NOT NULL,
  disabled_at       TEXT,
  last_ingested_at  TEXT,
  bootstrap_state   TEXT NOT NULL DEFAULT 'pending'
) STRICT;

-- \u2500\u2500 Sessions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- event_id embeds repo_identity + source + sessionId, so the PK IS the natural
-- key and every write can be a plain idempotent UPSERT.
-- Instants are stored ONCE, as epoch ms. The ISO twins (\`started_at\`,
-- \`updated_at\`) held the same instant a second time and were read by nothing \u2014
-- every query orders and filters on the \`_ms\` column. The instants themselves
-- stay: \`started_at_ms\` cannot be recovered from \`updated_at_ms\` and duration.
CREATE TABLE sessions (
  event_id        TEXT PRIMARY KEY,
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  source          TEXT NOT NULL,
  session_id      TEXT NOT NULL,
  title           TEXT,
  started_at_ms   INTEGER,
  updated_at_ms   INTEGER NOT NULL,
  message_count   INTEGER,
  duration_ms     INTEGER,
  model           TEXT,
  input_tokens    INTEGER NOT NULL DEFAULT 0,
  output_tokens   INTEGER NOT NULL DEFAULT 0,
  cached_tokens   INTEGER NOT NULL DEFAULT 0,
  est_cost_usd    REAL,
  token_coverage  TEXT NOT NULL DEFAULT 'sessions-only',
  prices_as_of    TEXT,
  UNIQUE (repo_id, source, session_id)
) STRICT;
CREATE INDEX ix_sessions_repo_time ON sessions(repo_id, updated_at_ms);
CREATE INDEX ix_sessions_time ON sessions(updated_at_ms);
CREATE INDEX ix_sessions_source ON sessions(source);

-- Per-session, per-model split. A session can switch models mid-stream, so
-- sessions.model is a display convenience and THIS is authoritative.
--
-- Keyed on session_event_id rather than an integer: measured at 24 and 114 rows,
-- so the key-shape work that paid for itself on the commits chain would buy
-- nothing here while touching StopHook, the VS Code tick and two projections.
CREATE TABLE session_model_usage (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  model            TEXT NOT NULL,
  -- No \`provider\` column: it was recorded per row and selected by nothing.
  -- Pricing resolves the provider from the model id (see core/Pricing.ts), so a
  -- stored copy is a second answer to a question that already has one.
  input_tokens     INTEGER NOT NULL DEFAULT 0,
  output_tokens    INTEGER NOT NULL DEFAULT 0,
  cached_tokens    INTEGER NOT NULL DEFAULT 0,
  est_cost_usd     REAL,
  PRIMARY KEY (session_event_id, model)
) STRICT;
CREATE INDEX ix_smu_model ON session_model_usage(model);

CREATE TABLE session_tool_use (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  tool_name        TEXT NOT NULL,
  kind             TEXT NOT NULL,
  server           TEXT,
  calls            INTEGER NOT NULL DEFAULT 0,
  -- This table counts CALLS, nothing more. It used to carry a metadata_json
  -- column holding each recall call's own hit/miss and served commits, parsed
  -- back out of Claude's transcript; \`recall_receipts\` replaced that (see its
  -- DDL for why), so the column has no writer and no reader and is gone from
  -- the definition. Databases created before the change still have it \u2014 an
  -- unused nullable column, harmless, and cheaper to leave than to rewrite a
  -- STRICT table for.
  -- "kind" is part of the key, not just a column: a skill and a builtin can
  -- share a name, and the parser already groups on (kind, name). Keying on the
  -- name alone would silently merge two different things into one row.
  PRIMARY KEY (session_event_id, tool_name, kind)
) STRICT;
CREATE INDEX ix_stu_kind ON session_tool_use(kind);
CREATE INDEX ix_stu_server ON session_tool_use(server);

-- \u2500\u2500 Commits \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Child tables reference \`id\`, never \`event_id\`. event_id is the producer's
-- idempotency key \u2014 'commit:<remote URL>:<40-hex sha>', measured at 80 bytes
-- average \u2014 and it is used only to dedupe at write time. Carrying it in the
-- children instead is what made commit_branches the largest object in the
-- database while holding no business data at all.
--
-- The memory projections that used to trail here (turns, tokens, est_cost_usd,
-- ticket_id, plus the commit_insights / commit_references / session_commit_link
-- child tables) are GONE (A3b): a copy falls behind whenever a memory is
-- regenerated, so the dashboard reads them from the memory tables instead \u2014
-- generated columns on \`memories\`, json_each over summary_json for insights,
-- transcript_sessions x memory_transcripts for the session link \u2014 which
-- recordCommitsFromWorker refreshes live at the same moment it emits
-- commit.summary. Do not reintroduce a stored copy; dev databases created
-- before the drop may still carry the dead columns/tables harmlessly
-- (pre-release, nothing reads or writes them).
--
-- work_category is deliberately NOT among them: it never was a summary field but
-- a mode computed over the topics' categories, and category belongs to a TOPIC.
-- Pages that aggregate by category read \`memory_topics\`; pages that want a
-- commit-level LABEL derive the mode at query time, so there is no stored copy
-- to fall behind.
-- Same instant-stored-once rule as \`sessions\`: \`committed_at\` (ISO) rode beside
-- \`committed_at_ms\` and no query read it. The author columns stay \u2014 nothing
-- displays them today, but they are the commit's own facts and re-deriving them
-- means re-walking git.
CREATE TABLE commits (
  id              INTEGER PRIMARY KEY,
  event_id        TEXT NOT NULL UNIQUE,
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  hash            TEXT NOT NULL,
  branch          TEXT,
  message         TEXT,
  author_name     TEXT,
  author_email    TEXT,
  committed_at_ms INTEGER NOT NULL,
  files_changed   INTEGER,
  insertions      INTEGER,
  deletions       INTEGER,
  UNIQUE (repo_id, hash)
) STRICT;
CREATE INDEX ix_commits_repo_time ON commits(repo_id, committed_at_ms);
CREATE INDEX ix_commits_branch ON commits(branch);





-- Branch-name dictionary. Measured: 87 distinct names referenced by 102,767
-- rows, average name length 27.4 bytes, so the names were repeating tens of
-- thousands of times \u2014 one of them 2,098 times by itself.
CREATE TABLE branches (
  id      INTEGER PRIMARY KEY,
  repo_id INTEGER NOT NULL REFERENCES repos(id),
  name    TEXT NOT NULL,
  UNIQUE (repo_id, name)
) STRICT;

-- Commit<->branch reachability. A commit is reachable from many branches, so
-- commits.branch cannot answer "group by branch" correctly \u2014 it is only a
-- heuristic "first seen on" label. Refreshed by unioning per-ref 'git rev-list',
-- never by 'git branch --contains' per commit.
--
-- The row count is correct and not worth optimizing: measured, 1,078 commits are
-- each reachable from 68 branches, because old branches all contain main's
-- history. O(commit x reachable branches) is the true answer to reachability.
-- What was wrong was 380 bytes per row for 3 bytes of information.
--
-- This is the ONE table with no repo_id: the boundary comes from
-- branches.repo_id, and "commits on branch X of repo Y" is two hops
-- (branches(repo_id,name) -> branch_id -> ix_cb_branch). One extra join, and the
-- table plus its indexes went from 30.19 MiB to 2.04 MiB on real data.
-- WITHOUT ROWID because a pure key table does not need a second rowid index.
CREATE TABLE commit_branches (
  commit_id INTEGER NOT NULL REFERENCES commits(id)  ON DELETE CASCADE,
  branch_id INTEGER NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  PRIMARY KEY (commit_id, branch_id)
) STRICT, WITHOUT ROWID;
CREATE INDEX ix_cb_branch ON commit_branches(branch_id, commit_id);

CREATE TABLE commit_files (
  commit_id  INTEGER NOT NULL REFERENCES commits(id) ON DELETE CASCADE,
  path       TEXT NOT NULL,
  insertions INTEGER,
  deletions  INTEGER,
  PRIMARY KEY (commit_id, path)
) STRICT, WITHOUT ROWID;
CREATE INDEX ix_commit_files_path ON commit_files(path);

-- \u2500\u2500 Workspace \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Transient, latest-wins. A detached HEAD has no branch name; branch_key holds
-- the '' sentinel so the PK stays usable (SQLite treats every NULL as distinct,
-- which would let detached-HEAD rows accumulate without bound).
CREATE TABLE worktree_status (
  repo_id        INTEGER NOT NULL REFERENCES repos(id),
  branch_key     TEXT NOT NULL DEFAULT '',
  branch         TEXT,
  files_changed  INTEGER,
  insertions     INTEGER,
  deletions      INTEGER,
  -- Instant stored once, as epoch ms \u2014 see \`sessions\`.
  observed_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, branch_key)
) STRICT;

-- \u2500\u2500 Write-ahead log / durable ingest queue \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- StatsWriter lands every event here as 'pending' and COMMITS before it
-- projects, so a crash mid-projection leaves something to drain. event_id is
-- deliberately NOT unique: the same event may be written repeatedly, and
-- idempotency lives in the projection tables.
--
-- This is the one table that keeps \`repo_identity\` instead of \`repo_id\`, and the
-- reason is the same one that makes it a separate transaction: the log's job is
-- to get the raw event onto disk before anything is interpreted. Resolving an id
-- would make that first commit depend on a repos row existing, which is exactly
-- the ordering assumption the log exists to avoid \u2014 producers write in any order,
-- and a session event can arrive before \`jolli enable\` has projected the
-- registry. Storing what the producer said keeps the log a log; the projection
-- resolves the id on the way out.
CREATE TABLE events_raw (
  seq               INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id          TEXT,
  repo_identity     TEXT,
  type              TEXT NOT NULL,
  schema_version    INTEGER NOT NULL,
  producer_kind     TEXT,
  producer_version  TEXT,
  occurred_at       TEXT,
  received_at       TEXT NOT NULL,
  data_json         TEXT NOT NULL,
  projection_status TEXT NOT NULL DEFAULT 'pending',
  claimed_at_ms     INTEGER,
  attempts          INTEGER NOT NULL DEFAULT 0
) STRICT;
-- Only ONE index, and it is the drain's: every events_raw query filters on
-- projection_status (+ seq, attempts, schema_version) or prunes on received_at.
-- The three that used to sit here (on type, on (repo_identity, occurred_at) and
-- on event_id) indexed columns no query has ever filtered on \u2014 they cost a write
-- per enqueue on the blocking commit path and bought nothing. Re-add one only
-- alongside the query that needs it.
CREATE INDEX ix_events_pending ON events_raw(projection_status, seq);

-- \u2500\u2500 Gap-recovery cursors \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A fast path for append-only history plus a rewrite detector \u2014 NOT the
-- correctness mechanism. Adds/changes are handled by idempotent UPSERT and
-- deletes by set reconciliation, because a high-water mark alone misses
-- out-of-order updates, history rewrites and deletions.
CREATE TABLE ingest_cursors (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  source        TEXT NOT NULL,
  cursor        TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, source)
) STRICT;

-- \u2500\u2500 Aggregates \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- There are none. agg_repo_totals lived here and was removed unused: every
-- reader that wants tokens, cost or activity spans computes them live from the
-- detail tables (see the ~20 such queries in DashboardQuery), so the aggregate
-- was maintained on the projection path and read by nothing but a single
-- session count \u2014 which the Repositories page now counts live, the same way it
-- already counted memories. Read-time aggregation over the indexed detail rows
-- is what this schema is shaped for; re-adding a stored aggregate needs a
-- measured query that is actually too slow without it, not the assumption that
-- one will be.
-- \u2500\u2500 Provider usage / quota \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- There is none. \`usage_observations\` (and the Claude-shaped \`usage_samples\`
-- before it) recorded account-level limit pressure read out of Claude Code's own
-- local cache; the whole feature \u2014 reader, sampler, model, cards \u2014 was removed.
-- A database created before that still carries the table; it is simply unused,
-- and nothing here recreates it. Bringing quota tracking back means designing it
-- against whatever provider actually exposes it, not reviving this shape.

-- \u2500\u2500 Code graph \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- PARKED, not deleted. The graph page was removed (no view token, no route, no
-- reader), which left this table written by DbBackfill and read by nothing \u2014 a few
-- hundred KB of JSON per repo per import, for no query. The writer is commented
-- out in lockstep (StatsWriter.recordRepoGraph, DbBackfill's call site); uncomment
-- all three together if the page returns. Kept as commented DDL rather than
-- dropped from history because this is the exact shape it would come back to.
--
-- CREATE TABLE repo_graphs (
--   repo_id        INTEGER PRIMARY KEY REFERENCES repos(id),
--   generated_at   TEXT NOT NULL,
--   schema_version INTEGER NOT NULL,
--   categories     INTEGER NOT NULL DEFAULT 0,
--   topics         INTEGER NOT NULL DEFAULT 0,
--   units          INTEGER NOT NULL DEFAULT 0,
--   edges          INTEGER NOT NULL DEFAULT 0,
--   graph_json     TEXT NOT NULL
-- ) STRICT;
`,Gd=`
CREATE TABLE recall_receipts (
  -- The producer's own idempotency key (statsEventId), so a re-drained event
  -- converges on one row instead of appending a duplicate call.
  receipt_id   TEXT PRIMARY KEY,
  repo_id      INTEGER NOT NULL REFERENCES repos(id),
  at_ms        INTEGER NOT NULL,
  -- 'mcp' | 'cli'. Kept because the two answer different questions about
  -- adoption, and because a surface that stops reporting is only visible here.
  surface      TEXT NOT NULL,
  session_id   TEXT,
  hit          INTEGER NOT NULL,
  commit_count INTEGER NOT NULL DEFAULT 0,
  -- JSON array of {hash, date} for a hit; NULL for a miss. Powers "distinct
  -- memories used" and the stale-memory count, neither of which a bare
  -- commit_count can answer.
  commits_json TEXT
) STRICT;
CREATE INDEX ix_recall_receipts_repo_at ON recall_receipts(repo_id, at_ms);
`,qd=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,Kd=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,Vd=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,Xd=`
CREATE TABLE schema_migrations (
  seq           INTEGER PRIMARY KEY AUTOINCREMENT,
  -- Which array position it ran at. DIAGNOSTIC ONLY \u2014 nothing decides anything
  -- from it. Kept because "slot 5" is what a bug report says out loud.
  slot          INTEGER NOT NULL,
  name          TEXT    NOT NULL,
  outcome       TEXT    NOT NULL CHECK (outcome IN ('applied','failed','skipped','baseline')),
  -- \`JOLLI_CLIENT_HEADER\` \u2014 '<kind>/<version>', e.g. 'cli/0.99.11' or
  -- 'vscode-plugin/0.99.11'. The surface identity the user would go and upgrade.
  applied_by    TEXT    NOT NULL,
  applied_at_ms INTEGER NOT NULL,
  duration_ms   INTEGER NOT NULL,
  ddl           TEXT    NOT NULL
) STRICT;
CREATE INDEX ix_schema_migrations_name ON schema_migrations(name, seq);
`,Yd=`
DROP TRIGGER IF EXISTS repos_no_delete;
`,zd=`
-- Per-repo control state (JSON values): 'orphan-import', 'cutover',
-- 'v5-migration' (the raw bytes of the orphan's schema-v5-migration.json \u2014 a
-- completed-marker whose absence would make the v5 migration re-run), ...
-- Kept out of schema_meta, which is a whole-database singleton. A key-value
-- table rather than columns on \`repos\` because \`cutover\` has to be written in
-- the same transaction as the data it certifies, and because adding a column
-- after release is a cross-surface release event while adding a marker is an
-- INSERT.
CREATE TABLE repo_state (
  repo_id INTEGER NOT NULL REFERENCES repos(id),
  key     TEXT NOT NULL,
  value   TEXT NOT NULL,
  PRIMARY KEY (repo_id, key)
) STRICT;

-- \u2500\u2500 memories: identity, topology and content in one row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- \`children[]\` is stored as edges + array position rather than nested copies of
-- the child files (measured: the nesting is 31.3% of the bytes). The key stays
-- present in \`summary_json\` with its value emptied to \`[]\` \u2014 removing it and
-- appending it back during reassembly would reorder the JSON keys, and the
-- byte-for-byte equivalence check does not allow that difference.
--
-- root_hash and depth are denormalizations the write module maintains: the tree
-- measures 17 levels deep, so without them every root read is a recursive query.
-- depth doubles as cycle detection \u2014 a cycle makes inspection query 1 return
-- rows.
CREATE TABLE memories (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  commit_hash   TEXT NOT NULL,

  parent_hash   TEXT,
  child_pos     INTEGER,
  root_hash     TEXT NOT NULL,
  depth         INTEGER NOT NULL DEFAULT 0,

  summary_json   TEXT NOT NULL,
  -- A REAL column, not a generated one: measured 313/313, summary files carry
  -- no \`treeHash\` \u2014 it exists only in index.json entries, computed from git at
  -- index-build time. It is load-bearing for alias scanning (tree-hash matching
  -- finds "same content, new sha"), so the importer copies it off the index
  -- entry and the write module stamps it via getTreeHash, exactly as
  -- flattenSummaryTree does today. NULL when git could not answer.
  tree_hash      TEXT,
  -- Same story as \`tree_hash\`, and a REAL column for the same reason: legacy
  -- (pre-v4) summaries carry their root diff stats ONLY on the index entry,
  -- never in the body. \`synthIndex\` rebuilds index.json from these rows and
  -- reads \`diffStats\` off the body, so without this the badge \`jolli view\`,
  -- the sidebar and the SessionStart briefing render is lost for every legacy
  -- root, and the rebuilt entry stops matching the file the branch carried.
  -- Not folded into \`summary_json\`: that blob has to reproduce the source file
  -- byte-for-byte for the cutover compare. NULL means the body is the only
  -- source, which is every v4-and-later memory.
  index_diff_stats_json TEXT,
  first_seen_ms  INTEGER NOT NULL,
  written_at_ms  INTEGER NOT NULL,
  -- Hand-written, not generated: date functions are barred from generated
  -- columns. It must be derived from the same field as \`commit_date\`, and no
  -- constraint can enforce that. NOT NULL plus an optional source field means a
  -- missing \`commitDate\` fails the whole row, so the write module falls back
  -- commitDate -> git commit time -> first_seen_ms before giving up.
  commit_date_ms INTEGER NOT NULL,

  -- STORED only for columns that feed an index or get read as a whole column.
  -- STORED is also restricted to TEXT (see this module's header): all three are.
  branch          TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.branch'))            STORED,
  commit_message  TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitMessage'))     STORED,
  commit_type     TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitType'))        STORED,

  commit_date     TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitDate'))        VIRTUAL,
  commit_author   TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitAuthor'))      VIRTUAL,
  generated_at    TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.generatedAt'))       VIRTUAL,
  recap           TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.recap'))             VIRTUAL,
  ticket_id       TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.ticketId'))          VIRTUAL,
  jolli_doc_id    TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.jolliDocId'))        VIRTUAL,
  -- No topics_json column: the topics are projected into \`memory_topics\` instead,
  -- for the reason spelled out on that table.
  -- Numeric columns pass through a json_type gate so an off-type value degrades
  -- to NULL \u2014 the case the pages already handle for a missing field \u2014 instead of
  -- handing a REAL back from an INTEGER column. VIRTUAL escapes STRICT's type
  -- check entirely, so nothing else would notice.
  turns           INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.conversationTurns')='integer'  THEN json_extract(summary_json,'$.conversationTurns')  END) VIRTUAL,
  tokens          INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.conversationTokens')='integer' THEN json_extract(summary_json,'$.conversationTokens') END) VIRTUAL,
  est_cost_usd    REAL    GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.estimatedCostUsd') IN ('integer','real') THEN json_extract(summary_json,'$.estimatedCostUsd') END) VIRTUAL,
  files_changed   INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.filesChanged')='integer' THEN json_extract(summary_json,'$.diffStats.filesChanged') END) VIRTUAL,
  insertions      INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.insertions')='integer'   THEN json_extract(summary_json,'$.diffStats.insertions')   END) VIRTUAL,
  deletions       INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.deletions')='integer'    THEN json_extract(summary_json,'$.diffStats.deletions')    END) VIRTUAL,

  PRIMARY KEY (repo_id, commit_hash),
  UNIQUE (repo_id, parent_hash, child_pos),
  -- Shape handed to the engine: a root has no position, a child must have one.
  -- Blocks "root with a position" and "child without one" in a single check.
  CHECK ((parent_hash IS NULL) = (child_pos IS NULL)),
  -- Non-negative, so a reorder's temporaries have to offset upward. A negative
  -- scheme would need this check relaxed for the duration of every reorder.
  CHECK (child_pos IS NULL OR child_pos >= 0),
  -- Deliberately as loose as 2x REORDER_OFFSET: it must admit the reorder's own
  -- temporaries, so it cannot be the tight bound. What it catches is a retried
  -- reorder offsetting crash residue a second time. The tight bound
  -- (final positions < REORDER_OFFSET) is an assertion in the write module,
  -- because as a CHECK it would reject the temporaries.
  CHECK (child_pos IS NULL OR child_pos < 2000000),
  -- Self-reference: deleting a root deletes the whole tree. Pruning is therefore
  -- a whole-tree decision by root_hash, never a row-by-row one by date.
  FOREIGN KEY (repo_id, parent_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_mem_root   ON memories(repo_id, root_hash);
CREATE INDEX ix_mem_branch ON memories(repo_id, branch, commit_date_ms);
CREATE INDEX ix_mem_date   ON memories(repo_id, commit_date_ms);
CREATE INDEX ix_mem_ticket ON memories(repo_id, ticket_id);

-- \u2500\u2500 memory_topics: the summary's topics[], one row per topic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A topic is "one independent problem/goal within a commit" (TopicSummary), and
-- \`category\` / \`importance\` belong to IT, not to the commit \u2014 the model is asked
-- for one category per topic, not one per commit. Measured on this repo: 727
-- memories carry 5,159 topics, 7.6 on average and up to 43.
--
-- The old read model collapsed them with a mode ("the commit's dominant
-- category") and stored one value per commit. That loses information the data
-- plainly has: by topic the split is bugfix 2,050 / feature 1,292, while by
-- commit-mode it is 39 / 36 \u2014 and \`security\` (211 topics) and \`docs\` (30) vanish
-- entirely, because neither ever wins a commit's vote. 15% of commits had a TIE
-- at the top, where "dominant" silently meant "whichever topic came first".
--
-- Why a table rather than reading them out of summary_json, all four measured on
-- the real 727 rows:
--   GROUP BY commits.work_category   0.87 ms  \u2014 fast, wrong shape
--   parse topics in JS               37 ms    \u2014 wrong shape, and ships 11.2 MiB
--   json_each over summary_json      303 ms   \u2014 right shape, unusable
--   this table                       4.88 ms  \u2014 right shape, fast
-- Same reason \`transcript_sessions\` exists: a queryable field sitting inside a
-- payload SQL has to parse per row is not queryable. summary_json stays the
-- source of truth and keeps the full topics for byte-faithful reassembly; this is
-- a projection of it, replaced as a whole group on every write.
--
-- Only the queryable fields are projected. decisions / trigger / response are
-- long prose that only ever gets displayed, and the pages already read those
-- from summary_json \u2014 a second copy would be bytes with no query behind them.
CREATE TABLE memory_topics (
  repo_id     INTEGER NOT NULL,
  commit_hash TEXT NOT NULL,
  pos         INTEGER NOT NULL,          -- topics[] index; ordering is restored from it
  category    TEXT,                      -- TopicCategory; NULL when the model omitted it
  importance  TEXT,                      -- 'major' | 'minor'
  title       TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, pos),
  CHECK (pos >= 0),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;
-- Leads with repo_id because every page query is repo-scoped; category second
-- because "group by category" is the whole point of the table.
CREATE INDEX ix_mtopic_category ON memory_topics(repo_id, category);

-- \u2500\u2500 commit aliases (index.json's third top-level key) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A rewritten SHA -> the live memory with the same tree hash. Step 2 of
-- getSummary()'s four-step lookup. Tree-hash matching costs a git subprocess
-- per candidate, so a computed alias is kept forever; in index.json every
-- rebuild path had to remember to copy them across (one of five did not), and a
-- table has no rebuild to forget.
CREATE TABLE commit_aliases (
  repo_id     INTEGER NOT NULL,
  old_hash    TEXT NOT NULL,
  target_hash TEXT NOT NULL,
  created_ms  INTEGER NOT NULL,
  PRIMARY KEY (repo_id, old_hash),
  FOREIGN KEY (repo_id, target_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;

-- \u2500\u2500 transcripts (keyed by TranscriptId \u2014 UUID or legacy commit hash) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- sessions_blob is zlib-compressed JSON: no generated columns, not indexed,
-- stored and fetched whole. It is the only compressible block in the database
-- (everywhere else has a query dependency on the text) and the second largest.
CREATE TABLE transcripts (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  transcript_id TEXT NOT NULL,
  sessions_blob BLOB NOT NULL,
  written_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, transcript_id)
) STRICT;

-- Many-to-many: one transcript is shared by several nodes of an amend chain,
-- and one memory can reference several. No array index is stored \u2014
-- \`summary.transcripts\` carries the order in summary_json and that is what
-- reassembly uses, so this table only answers queries and owes no fidelity.
CREATE TABLE memory_transcripts (
  repo_id       INTEGER NOT NULL,
  commit_hash   TEXT NOT NULL,
  transcript_id TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, transcript_id),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE,
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_mt_transcript ON memory_transcripts(repo_id, transcript_id);

-- Compression makes the sessions invisible to SQL, so the queryable fields are
-- projected out. Uncompressed it would still need this: one session lookup
-- would otherwise parse megabytes of transcript JSON.
CREATE TABLE transcript_sessions (
  repo_id       INTEGER NOT NULL,
  transcript_id TEXT NOT NULL,
  session_id    TEXT NOT NULL,
  source        TEXT,
  PRIMARY KEY (repo_id, transcript_id, session_id),
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
-- session_id leads, not source: the only reason this table exists is "which
-- commits is this session tied to", and source is legitimately NULL on older
-- data and not always known by the caller. Leading with source degrades that
-- lookup to a repo_id prefix plus a scan.
CREATE INDEX ix_ts_session ON transcript_sessions(repo_id, session_id, source);

-- \u2500\u2500 context: plans / notes / references / skills unified \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- All four are the same shape: one key, one complete file body, one version.
-- body_md is exactly what readFile() returns today (frontmatter included for a
-- reference or a skill), so the round trip is byte-faithful by construction.
-- native_id is stored separately because path escaping is irreversible \u2014
-- GitHub's \`owner/repo#number\` cannot be recovered from context_key.
--
-- A kind registry table rather than a closed CHECK: adding a kind is an INSERT.
-- 'skill' is NOT inserted here \u2014 it arrived after this entry was already on
-- disk in dev databases, so it ships as its own append-only migration (see
-- {@link SKILL_CONTEXT_KIND_DDL}); a fresh database gets it by running that
-- migration, exactly like an existing one.
CREATE TABLE context_kinds (kind TEXT PRIMARY KEY) STRICT;
INSERT INTO context_kinds (kind) VALUES ('plan'), ('note'), ('reference');
CREATE TABLE context (
  id            INTEGER PRIMARY KEY,
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  kind          TEXT NOT NULL REFERENCES context_kinds(kind),
  context_key   TEXT NOT NULL,
  source        TEXT,
  native_id     TEXT,
  tool_name     TEXT,
  referenced_at TEXT,
  original_slug TEXT,
  branch        TEXT,
  title         TEXT,
  url           TEXT,
  body_md       TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER,
  -- Non-NULL for plans only. This is plan_progress's foreign-key target, which
  -- is what replaced the three triggers that used to police that relation.
  plan_key TEXT GENERATED ALWAYS AS (CASE WHEN kind = 'plan' THEN context_key END) STORED,
  UNIQUE (repo_id, kind, context_key),
  UNIQUE (repo_id, plan_key),
  -- These three are stricter than file storage, which is a deliberate open
  -- question rather than a settled constraint: a historical reference file on
  -- orphan that lacks \`referencedAt\` is legal as a file but a CHECK violation
  -- here, and the importer's failure set has to be EMPTY before a repo may cut
  -- over. So the import phase counts how many real reference files are missing
  -- each field; if any are, the affected check degrades to the one-way form
  -- below (NULL unless reference) and the missing side is stored as NULL and
  -- logged. Until that measurement exists, keep them \u2014 do not relax them on
  -- the theory that looser is safer, because a silent NULL where the field was
  -- expected is its own class of bug.
  CHECK ((source        IS NOT NULL) = (kind = 'reference')),
  CHECK ((native_id     IS NOT NULL) = (kind = 'reference')),
  CHECK ((referenced_at IS NOT NULL) = (kind = 'reference')),
  CHECK (tool_name     IS NULL OR kind = 'reference'),
  CHECK (url           IS NULL OR kind = 'reference'),
  CHECK (original_slug IS NULL OR kind = 'plan'),
  CHECK (branch        IS NULL OR kind IN ('plan','note'))
) STRICT;
-- No indexes. Every context read is by (repo_id, kind, context_key) or
-- (repo_id, kind), both served by the UNIQUE constraint above. The three partial
-- indexes that used to sit here (on source, on (source, native_id), on branch)
-- were built for a queryable-metadata story no query ever arrived for; the
-- columns stay, the indexes do not.

-- \u2500\u2500 plan progress \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- One artifact per (plan, commit), keyed on the plan: a later commit for the
-- same plan overwrites the row. It has to be a table rather than a query
-- because rebuilding it is one LLM call per plan and the output is not
-- reproducible \u2014 the same criterion that keeps topic_pages a table.
--
-- ON UPDATE CASCADE is not optional. Plan slugs get normalized and rewritten
-- (which is why context.original_slug exists), and without the cascade an
-- in-place rename is rejected by the foreign key while a DELETE+INSERT rename
-- silently takes the progress with it.
CREATE TABLE plan_progress (
  repo_id       INTEGER NOT NULL,
  plan_slug     TEXT NOT NULL,
  artifact_json TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  -- No generated columns. \`artifact_json\` is written and read whole (see
  -- SqliteStorage), so the eight projections that used to sit here \u2014 originalSlug,
  -- commitHash, commitMessage, commitDate, summary, steps, llm.model and a CAST
  -- payload_version \u2014 answered no query. Project a field out again when something
  -- needs to filter or sort on it, not on the theory that it might.
  PRIMARY KEY (repo_id, plan_slug),
  FOREIGN KEY (repo_id, plan_slug) REFERENCES context(repo_id, plan_key)
    ON UPDATE CASCADE ON DELETE CASCADE
) STRICT;

-- \u2500\u2500 topic KB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Not the same thing as summary_json's \`topics\`, which are groupings inside one
-- commit. A topic page is what accumulated about one topic across commits, so
-- it is derived but not cheap: one LLM call per topic, output not reproducible.
-- topic_pages.summary existed only inside topics/index.json; storing it here is
-- what lets that index become a view.
CREATE TABLE topic_pages (
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  stable_slug     TEXT NOT NULL,
  title           TEXT NOT NULL,
  summary         TEXT,
  content_md      TEXT NOT NULL,
  related_branches_json TEXT NOT NULL DEFAULT '[]',
  last_updated_at TEXT NOT NULL,
  payload_version INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (repo_id, stable_slug)
) STRICT;

-- pos preserves the page's sourceRefs[] array order. The UNIQUE on it is the
-- same hazard as memories.child_pos, with a cheaper fix: this table has no
-- self-referencing foreign key, so the write module replaces a page's refs as a
-- whole group (DELETE then re-INSERT in one transaction) rather than updating
-- positions row by row. Never UPDATE pos in place.
CREATE TABLE topic_source_refs (
  repo_id     INTEGER NOT NULL,
  stable_slug TEXT NOT NULL,
  pos         INTEGER NOT NULL,
  ref_type    TEXT NOT NULL CHECK (ref_type IN ('summary','plan','note','userfile')),
  ref_id      TEXT NOT NULL,
  ts          TEXT NOT NULL,
  branch      TEXT,
  PRIMARY KEY (repo_id, stable_slug, ref_type, ref_id),
  UNIQUE (repo_id, stable_slug, pos),
  CHECK (pos >= 0),
  FOREIGN KEY (repo_id, stable_slug)
    REFERENCES topic_pages(repo_id, stable_slug) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_tsr_ref ON topic_source_refs(repo_id, ref_type, ref_id);

CREATE TABLE topic_processed_sources (
  repo_id     INTEGER NOT NULL REFERENCES repos(id),
  source_type TEXT NOT NULL CHECK (source_type IN ('summary','plan','note','userfile')),
  source_id   TEXT NOT NULL,
  PRIMARY KEY (repo_id, source_type, source_id)
) STRICT;

-- No views. \`v_topic_index\` used to live here, assembling topics/index.json's
-- array-ordered projection with ORDER BY inside json_group_array \u2014 but
-- SqliteStorage rebuilds that index directly from topic_pages + topic_source_refs
-- and never queried the view, so it was maintained by the engine on every write
-- and read by nothing.
`});function er(){return(0,yo.join)(ie(),"jollimemory.db")}function at(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>Br.major?!0:r<Br.major?!1:n>=Br.minor}function Jr(t){try{let e=t.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),r=Number.parseInt(e?.value??"",10);return Number.isFinite(r)?r:0}catch{return 0}}function US(t){try{return(t.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function Mi(t){try{return{kind:"rows",rows:t.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(e){let r=US(t);return r==="absent"?{kind:"none"}:{kind:"unreadable",reason:k(e),tableConfirmed:r==="present"}}}function Qd(t){let e=Mi(t);return e.kind==="rows"?e.rows:void 0}function Ur(t,e){t.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e.slot,e.name,e.outcome,e.appliedBy,e.atMs,e.durationMs,e.ddl)}function JS(t){let e=new Map;for(let r of t){let n=e.get(r.name);(!n||r.seq>n.seq)&&e.set(r.name,r)}return e}function BS(t){let e=new Map;for(let r of t){if(r.outcome!=="applied")continue;let n=e.get(r.name);(!n||r.seq>n.seq)&&e.set(r.name,r)}return e}function WS(t){return Zt.findIndex(e=>e.name===t)}function GS(t){let e=Mi(t);if(e.kind==="none")return;if(e.kind==="unreadable"){Qt.has(Zd)||(Qt.add(Zd),Ge.warn(e.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",e.reason));return}let r=e.rows,n=new Set(Zt.map(o=>o.name));for(let[o,s]of JS(r))n.has(o)||Qt.has(o)||(Qt.add(o),Ge.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,zt));for(let[o,s]of BS(r))n.has(o)&&(Qt.has(o)||s.ddl!==Zt[WS(o)].ddl&&(Qt.add(o),Ge.warn("migration %s (slot %d) was applied by %s on %s with DIFFERENT DDL than this build (%s) carries \u2014 run `jolli doctor --schema-log` to see the log",o,s.slot,s.applied_by,new Date(s.applied_at_ms).toISOString().slice(0,10),zt)))}function qS(t,e={}){let r=e.now??Date.now,n=e.appliedBy??zt,o=Jr(t),s=Mi(t),i=new Set,a=[];if(s.kind==="rows")for(let u of s.rows)(u.outcome==="applied"||u.outcome==="baseline")&&i.add(u.name);else{let u=Math.min(o,Zt.length),m=Zt.slice(0,u).map((f,g)=>({slot:g,name:f.name,ddl:f.ddl}));for(let f of m)i.add(f.name);s.kind==="none"?a=m:Ge.warn(s.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 migrating from the version stamp and recording nothing":"the database could not be queried for its migration log (%s) \u2014 migrating from the version stamp and recording nothing",s.reason)}let l=Zt.map((u,m)=>({m:u,slot:m})).filter(({m:u})=>!i.has(u.name));if(l.length===0)return;let c=[],d=()=>{for(let u of a)Ur(t,{...u,outcome:"baseline",appliedBy:n,atMs:r(),durationMs:0});a=[];for(let u of c)Ur(t,u);c.length=0};t.exec("PRAGMA foreign_keys = OFF");try{for(let{m:u,slot:m}of l){let f=r();t.exec("BEGIN IMMEDIATE");try{let g=Qd(t);if(g?.some(E=>E.name===u.name&&(E.outcome==="applied"||E.outcome==="baseline"))){d(),Ur(t,{slot:m,name:u.name,outcome:"skipped",appliedBy:n,atMs:r(),durationMs:0,ddl:u.ddl}),t.exec("COMMIT");continue}if(!g&&Jr(t)>m){t.exec("COMMIT");continue}t.exec(u.ddl);let b={slot:m,name:u.name,outcome:"applied",appliedBy:n,atMs:r(),durationMs:r()-f,ddl:u.ddl};Qd(t)?(d(),Ur(t,b)):c.push(b);let C=Math.max(Jr(t),m+1);KS(t,"schema_version",String(C)),t.exec("COMMIT")}catch(g){try{t.exec("ROLLBACK")}catch{}try{t.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(u.name),Ur(t,{slot:m,name:u.name,outcome:"failed",appliedBy:n,atMs:r(),durationMs:r()-f,ddl:u.ddl})}catch(b){Ge.debug("could not record the failed migration %s: %s",u.name,k(b))}throw g}}}finally{t.exec("PRAGMA foreign_keys = ON")}Ge.info("dashboard schema migrated %d \u2192 %d (%s)",o,Jr(t),l.map(({m:u})=>u.name).join(", "))}function KS(t,e,r){t.prepare(`INSERT INTO schema_meta (key, value) VALUES (?, ?)
		 ON CONFLICT(key) DO UPDATE SET value = excluded.value`).run(e,r)}function VS(t){ep!==t&&(ep=t,Ge.warn("database is at format v%d, this build (%s) reads v%d \u2014 data written by newer builds is not visible here",t,zt,tp))}function XS(t){let e=(0,yo.dirname)(t);try{(0,qe.mkdirSync)(e,{recursive:!0,mode:448}),((0,qe.statSync)(e).mode&511)!==448&&(0,qe.chmodSync)(e,448)}catch(r){Ge.warn("could not restrict %s to owner-only: %s",e,k(r))}}function YS(t){for(let e of[t,`${t}-wal`,`${t}-shm`])try{((0,qe.statSync)(e).mode&511)!==384&&(0,qe.chmodSync)(e,384)}catch(r){ft(r)||Ge.warn("could not restrict %s to 0600: %s",e,k(r))}}async function rp(t,e){if(!at())throw new Li(process.versions.node);let r=e.dbPath??er(),n=e.maxAttempts??4,o=e.baseDelayMs??50;t||XS(r);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(r,{readOnly:t});for(let l of t?FS:jS)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${e.busyTimeoutMs??HS}`),t||YS(r),a}catch(l){try{a?.close()}catch{}if(Et(l)?.kind!=="locked"||i>=n)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function $i(t,e={}){let r=await rp(!1,e);try{let n=Jr(r);return n>tp&&VS(n),GS(r),qS(r),await t(r)}finally{r.close()}}async function ji(t,e={}){let r=await rp(!0,e);try{return await t(r)}finally{r.close()}}function Fi(t,e){t.exec("BEGIN IMMEDIATE");try{let r=e();return t.exec("COMMIT"),r}catch(r){try{t.exec("ROLLBACK")}catch{}throw r}}var qe,yo,Ge,tp,Br,Li,jS,FS,HS,Zt,Qt,Zd,ep,lt=S(()=>{"use strict";qe=require("node:fs"),yo=require("node:path");ho();le();Ie();h();go();Ge=p("DashboardDb"),tp=7,Br={major:22,minor:13};Li=class extends Error{constructor(e){super(`The Jolli dashboard needs Node >= ${Br.major}.${Br.minor} for built-in SQLite (running ${e}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},jS=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],FS=["PRAGMA foreign_keys = ON"],HS=2e3,Zt=[{name:"BASELINE_DDL",ddl:Wd+`
-- Policy: repo rows are NEVER deleted \u2014 disable = set disabled_at. Every table
-- references repos(id) with default NO ACTION (not CASCADE), so a stray DELETE
-- errors instead of silently wiping a repo's memories; this trigger catches even
-- the zero-data case.
--
-- This is the ONE trigger the no-triggers rule keeps, and the reasons it does
-- not fall under that rule are worth stating: it encodes no business rule that
-- could change (repo rows stay forever by design), it has no ordering
-- relationship with any other trigger, and what it prevents is not a wrong value
-- but the irreversible loss of every memory belonging to a repo. Replacing it
-- with "the code does not write DELETE, and a test pins that" would trade an
-- engine-enforced guarantee for a convention.
CREATE TRIGGER repos_no_delete BEFORE DELETE ON repos
BEGIN SELECT RAISE(ABORT, 'repos are never deleted: set disabled_at instead'); END;
`+zd},{name:"RECALL_RECEIPTS_DDL",ddl:Gd},{name:"SKILL_CONTEXT_KIND_DDL",ddl:qd},{name:"EVENT_FAILED_KIND_DDL",ddl:Kd},{name:"TOOL_CALL_TIME_DDL",ddl:Vd},{name:"SCHEMA_MIGRATIONS_DDL",ddl:Xd},{name:"REPOS_DELETE_ALLOWED_DDL",ddl:Yd}];Qt=new Set,Zd="\0unreadable-log";ep=0});function Hi(t){let e=s=>{try{return(0,Wr.statSync)(`${t}${s}`),!0}catch{return!1}},r=e(""),n=e("-wal"),o=e("-shm");return r?n&&o?"healthy-active":n?"healthy-recoverable":"healthy-clean":n||o?"alarm-sidecars-only":"absent"}var Wr,ED,Ui=S(()=>{"use strict";Wr=require("node:fs");h();ED=p("DbDetection")});async function QS(t){try{let r=await Ni(t);if(r&&!r.startsWith("file:"))return{identity:r,remoteUrl:r}}catch(r){zS.debug("no canonical remote for %s (%s) \u2014 using path identity",t,k(r))}return{identity:`local:${(0,np.createHash)("sha256").update(ve(t)).digest("hex").slice(0,32)}`}}async function Rt(t){return QS(await ks(t))}var np,zS,Tt=S(()=>{"use strict";np=require("node:crypto");Os();oe();fo();Pe();ne();le();h();zS=p("RepoRegistry")});var sp={};ds(sp,{hasCutoverRow:()=>rb,resetCutoverRouterCaches:()=>eb,resolveCutoverRoute:()=>Gr});function eb(){Ji.clear()}async function tb(t){let e=Ji.get(t);if(e!==void 0)return e;let{identity:r}=await Rt(t);return Ji.set(t,r),r}async function op(t,e){if(!at())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let r=Hi(e);if(r==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(r==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:n}=await import("node:sqlite"),o=new n(e,{readOnly:!0});try{let s=await tb(t),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(n){return{kind:"unavailable",reason:k(n)}}}async function rb(t,e={}){return(await op(t,e.dbPath??er())).kind==="row"}async function Gr(t,e={}){let r=await Pr(t).catch(()=>null),n=await op(t,e.dbPath??er());return n.kind==="row"?{state:"cutover",record:n.record}:r!==null?n.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:n.reason}:n.kind==="unavailable"?(ZS.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",n.reason),{state:"uncutover",warning:n.reason}):{state:"uncutover"}}var ZS,Ji,wo=S(()=>{"use strict";nt();h();lt();Ui();Tt();ZS=p("CutoverRouter"),Ji=new Map});var sr=R((YL,bm)=>{"use strict";var lE="2.0.0",cE=Number.MAX_SAFE_INTEGER||9007199254740991,uE=16,dE=250,pE=["major","premajor","minor","preminor","patch","prepatch","prerelease"];bm.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:uE,MAX_SAFE_BUILD_LENGTH:dE,MAX_SAFE_INTEGER:cE,RELEASE_TYPES:pE,SEMVER_SPEC_VERSION:lE,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var rn=R((zL,Em)=>{"use strict";var mE=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};Em.exports=mE});var ir=R((De,km)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:aa,MAX_SAFE_BUILD_LENGTH:fE,MAX_LENGTH:hE}=sr(),gE=rn();De=km.exports={};var yE=De.re=[],wE=De.safeRe=[],y=De.src=[],SE=De.safeSrc=[],w=De.t={},bE=0,la="[a-zA-Z0-9-]",EE=[["\\s",1],["\\d",hE],[la,fE]],kE=t=>{for(let[e,r]of EE)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},v=(t,e,r)=>{let n=kE(e),o=bE++;gE(t,o,e),w[t]=o,y[o]=e,SE[o]=n,yE[o]=new RegExp(e,r?"g":void 0),wE[o]=new RegExp(n,r?"g":void 0)};v("NUMERICIDENTIFIER","0|[1-9]\\d*");v("NUMERICIDENTIFIERLOOSE","\\d+");v("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${la}*`);v("MAINVERSION",`(${y[w.NUMERICIDENTIFIER]})\\.(${y[w.NUMERICIDENTIFIER]})\\.(${y[w.NUMERICIDENTIFIER]})`);v("MAINVERSIONLOOSE",`(${y[w.NUMERICIDENTIFIERLOOSE]})\\.(${y[w.NUMERICIDENTIFIERLOOSE]})\\.(${y[w.NUMERICIDENTIFIERLOOSE]})`);v("PRERELEASEIDENTIFIER",`(?:${y[w.NONNUMERICIDENTIFIER]}|${y[w.NUMERICIDENTIFIER]})`);v("PRERELEASEIDENTIFIERLOOSE",`(?:${y[w.NONNUMERICIDENTIFIER]}|${y[w.NUMERICIDENTIFIERLOOSE]})`);v("PRERELEASE",`(?:-(${y[w.PRERELEASEIDENTIFIER]}(?:\\.${y[w.PRERELEASEIDENTIFIER]})*))`);v("PRERELEASELOOSE",`(?:-?(${y[w.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${y[w.PRERELEASEIDENTIFIERLOOSE]})*))`);v("BUILDIDENTIFIER",`${la}+`);v("BUILD",`(?:\\+(${y[w.BUILDIDENTIFIER]}(?:\\.${y[w.BUILDIDENTIFIER]})*))`);v("FULLPLAIN",`v?${y[w.MAINVERSION]}${y[w.PRERELEASE]}?${y[w.BUILD]}?`);v("FULL",`^${y[w.FULLPLAIN]}$`);v("LOOSEPLAIN",`[v=\\s]*${y[w.MAINVERSIONLOOSE]}${y[w.PRERELEASELOOSE]}?${y[w.BUILD]}?`);v("LOOSE",`^${y[w.LOOSEPLAIN]}$`);v("GTLT","((?:<|>)?=?)");v("XRANGEIDENTIFIERLOOSE",`${y[w.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);v("XRANGEIDENTIFIER",`${y[w.NUMERICIDENTIFIER]}|x|X|\\*`);v("XRANGEPLAIN",`[v=\\s]*(${y[w.XRANGEIDENTIFIER]})(?:\\.(${y[w.XRANGEIDENTIFIER]})(?:\\.(${y[w.XRANGEIDENTIFIER]})(?:${y[w.PRERELEASE]})?${y[w.BUILD]}?)?)?`);v("XRANGEPLAINLOOSE",`[v=\\s]*(${y[w.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y[w.XRANGEIDENTIFIERLOOSE]})(?:\\.(${y[w.XRANGEIDENTIFIERLOOSE]})(?:${y[w.PRERELEASELOOSE]})?${y[w.BUILD]}?)?)?`);v("XRANGE",`^${y[w.GTLT]}\\s*${y[w.XRANGEPLAIN]}$`);v("XRANGELOOSE",`^${y[w.GTLT]}\\s*${y[w.XRANGEPLAINLOOSE]}$`);v("COERCEPLAIN",`(^|[^\\d])(\\d{1,${aa}})(?:\\.(\\d{1,${aa}}))?(?:\\.(\\d{1,${aa}}))?`);v("COERCE",`${y[w.COERCEPLAIN]}(?:$|[^\\d])`);v("COERCEFULL",y[w.COERCEPLAIN]+`(?:${y[w.PRERELEASE]})?(?:${y[w.BUILD]})?(?:$|[^\\d])`);v("COERCERTL",y[w.COERCE],!0);v("COERCERTLFULL",y[w.COERCEFULL],!0);v("LONETILDE","(?:~>?)");v("TILDETRIM",`(\\s*)${y[w.LONETILDE]}\\s+`,!0);De.tildeTrimReplace="$1~";v("TILDE",`^${y[w.LONETILDE]}${y[w.XRANGEPLAIN]}$`);v("TILDELOOSE",`^${y[w.LONETILDE]}${y[w.XRANGEPLAINLOOSE]}$`);v("LONECARET","(?:\\^)");v("CARETTRIM",`(\\s*)${y[w.LONECARET]}\\s+`,!0);De.caretTrimReplace="$1^";v("CARET",`^${y[w.LONECARET]}${y[w.XRANGEPLAIN]}$`);v("CARETLOOSE",`^${y[w.LONECARET]}${y[w.XRANGEPLAINLOOSE]}$`);v("COMPARATORLOOSE",`^${y[w.GTLT]}\\s*(${y[w.LOOSEPLAIN]})$|^$`);v("COMPARATOR",`^${y[w.GTLT]}\\s*(${y[w.FULLPLAIN]})$|^$`);v("COMPARATORTRIM",`(\\s*)${y[w.GTLT]}\\s*(${y[w.LOOSEPLAIN]}|${y[w.XRANGEPLAIN]})`,!0);De.comparatorTrimReplace="$1$2$3";v("HYPHENRANGE",`^\\s*(${y[w.XRANGEPLAIN]})\\s+-\\s+(${y[w.XRANGEPLAIN]})\\s*$`);v("HYPHENRANGELOOSE",`^\\s*(${y[w.XRANGEPLAINLOOSE]})\\s+-\\s+(${y[w.XRANGEPLAINLOOSE]})\\s*$`);v("STAR","(<|>)?=?\\s*\\*");v("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");v("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Ao=R((QL,Rm)=>{"use strict";var RE=Object.freeze({loose:!0}),TE=Object.freeze({}),_E=t=>t?typeof t!="object"?RE:t:TE;Rm.exports=_E});var ca=R((ZL,vm)=>{"use strict";var Tm=/^[0-9]+$/,_m=(t,e)=>{if(typeof t=="number"&&typeof e=="number")return t===e?0:t<e?-1:1;let r=Tm.test(t),n=Tm.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},vE=(t,e)=>_m(e,t);vm.exports={compareIdentifiers:_m,rcompareIdentifiers:vE}});var q=R((e0,xm)=>{"use strict";var Io=rn(),{MAX_LENGTH:Cm,MAX_SAFE_INTEGER:Do}=sr(),{safeRe:No,t:Oo}=ir(),CE=Ao(),{compareIdentifiers:ua}=ca(),da=class t{constructor(e,r){if(r=CE(r),e instanceof t){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>Cm)throw new TypeError(`version is longer than ${Cm} characters`);Io("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?No[Oo.LOOSE]:No[Oo.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>Do||this.major<0)throw new TypeError("Invalid major version");if(this.minor>Do||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>Do||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<Do)return s}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(Io("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),this.major<e.major?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],o=e.prerelease[r];if(Io("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return ua(n,o)}while(++r)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let r=0;do{let n=this.build[r],o=e.build[r];if(Io("build compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return ua(n,o)}while(++r)}inc(e,r,n){if(e.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let o=`-${r}`.match(this.options.loose?No[Oo.PRERELEASELOOSE]:No[Oo.PRERELEASE]);if(!o||o[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let s=[r,o];n===!1&&(s=[r]),ua(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};xm.exports=da});var ut=R((t0,Am)=>{"use strict";var Pm=q(),xE=(t,e,r=!1)=>{if(t instanceof Pm)return t;try{return new Pm(t,e)}catch(n){if(!r)return null;throw n}};Am.exports=xE});var Dm=R((r0,Im)=>{"use strict";var PE=ut(),AE=(t,e)=>{let r=PE(t,e);return r?r.version:null};Im.exports=AE});var Om=R((n0,Nm)=>{"use strict";var IE=ut(),DE=(t,e)=>{let r=IE(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};Nm.exports=DE});var $m=R((o0,Mm)=>{"use strict";var Lm=q(),NE=(t,e,r,n,o)=>{typeof r=="string"&&(o=n,n=r,r=void 0);try{return new Lm(t instanceof Lm?t.version:t,r).inc(e,n,o).version}catch{return null}};Mm.exports=NE});var Hm=R((s0,Fm)=>{"use strict";var jm=ut(),OE=(t,e)=>{let r=jm(t,null,!0),n=jm(e,null,!0),o=r.compare(n);if(o===0)return null;let s=o>0,i=s?r:n,a=s?n:r,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return r.major!==n.major?d+"major":r.minor!==n.minor?d+"minor":r.patch!==n.patch?d+"patch":"prerelease"};Fm.exports=OE});var Jm=R((i0,Um)=>{"use strict";var LE=q(),ME=(t,e)=>new LE(t,e).major;Um.exports=ME});var Wm=R((a0,Bm)=>{"use strict";var $E=q(),jE=(t,e)=>new $E(t,e).minor;Bm.exports=jE});var qm=R((l0,Gm)=>{"use strict";var FE=q(),HE=(t,e)=>new FE(t,e).patch;Gm.exports=HE});var Vm=R((c0,Km)=>{"use strict";var UE=ut(),JE=(t,e)=>{let r=UE(t,e);return r&&r.prerelease.length?r.prerelease:null};Km.exports=JE});var me=R((u0,Ym)=>{"use strict";var Xm=q(),BE=(t,e,r)=>new Xm(t,r).compare(new Xm(e,r));Ym.exports=BE});var Qm=R((d0,zm)=>{"use strict";var WE=me(),GE=(t,e,r)=>WE(e,t,r);zm.exports=GE});var ef=R((p0,Zm)=>{"use strict";var qE=me(),KE=(t,e)=>qE(t,e,!0);Zm.exports=KE});var Lo=R((m0,rf)=>{"use strict";var tf=q(),VE=(t,e,r)=>{let n=new tf(t,r),o=new tf(e,r);return n.compare(o)||n.compareBuild(o)};rf.exports=VE});var of=R((f0,nf)=>{"use strict";var XE=Lo(),YE=(t,e)=>t.sort((r,n)=>XE(r,n,e));nf.exports=YE});var af=R((h0,sf)=>{"use strict";var zE=Lo(),QE=(t,e)=>t.sort((r,n)=>zE(n,r,e));sf.exports=QE});var nn=R((g0,lf)=>{"use strict";var ZE=me(),ek=(t,e,r)=>ZE(t,e,r)>0;lf.exports=ek});var Mo=R((y0,cf)=>{"use strict";var tk=me(),rk=(t,e,r)=>tk(t,e,r)<0;cf.exports=rk});var pa=R((w0,uf)=>{"use strict";var nk=me(),ok=(t,e,r)=>nk(t,e,r)===0;uf.exports=ok});var ma=R((S0,df)=>{"use strict";var sk=me(),ik=(t,e,r)=>sk(t,e,r)!==0;df.exports=ik});var $o=R((b0,pf)=>{"use strict";var ak=me(),lk=(t,e,r)=>ak(t,e,r)>=0;pf.exports=lk});var jo=R((E0,mf)=>{"use strict";var ck=me(),uk=(t,e,r)=>ck(t,e,r)<=0;mf.exports=uk});var fa=R((k0,ff)=>{"use strict";var dk=pa(),pk=ma(),mk=nn(),fk=$o(),hk=Mo(),gk=jo(),yk=(t,e,r,n)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return dk(t,r,n);case"!=":return pk(t,r,n);case">":return mk(t,r,n);case">=":return fk(t,r,n);case"<":return hk(t,r,n);case"<=":return gk(t,r,n);default:throw new TypeError(`Invalid operator: ${e}`)}};ff.exports=yk});var gf=R((R0,hf)=>{"use strict";var wk=q(),Sk=ut(),{safeRe:Fo,t:Ho}=ir(),bk=(t,e)=>{if(t instanceof wk)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?Fo[Ho.COERCEFULL]:Fo[Ho.COERCE]);else{let l=e.includePrerelease?Fo[Ho.COERCERTLFULL]:Fo[Ho.COERCERTL],c;for(;(c=l.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||c.index+c[0].length!==r.index+r[0].length)&&(r=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(r===null)return null;let n=r[2],o=r[3]||"0",s=r[4]||"0",i=e.includePrerelease&&r[5]?`-${r[5]}`:"",a=e.includePrerelease&&r[6]?`+${r[6]}`:"";return Sk(`${n}.${o}.${s}${i}${a}`,e)};hf.exports=bk});var wf=R((T0,yf)=>{"use strict";var Ek=ut(),kk=sr(),Rk=q(),Tk=(t,e,r)=>{if(!kk.RELEASE_TYPES.includes(e))return null;let n=_k(t,r);return n&&vk(n,e)},_k=(t,e)=>{let r=t instanceof Rk?t.version:t;return Ek(r,e)},vk=(t,e)=>{if(Ck(e))return t.version;switch(t.prerelease=[],e){case"major":t.minor=0,t.patch=0;break;case"minor":t.patch=0;break}return t.format()},Ck=t=>t.startsWith("pre");yf.exports=Tk});var bf=R((_0,Sf)=>{"use strict";var ha=class{constructor(){this.max=1e3,this.map=new Map}get(e){let r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(e,r)}return this}};Sf.exports=ha});var fe=R((v0,Tf)=>{"use strict";var xk=/\s+/g,ga=class t{constructor(e,r){if(r=Ak(r),e instanceof t)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new t(e.raw,r);if(e instanceof ya)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e.trim().replace(xk," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(o=>!kf(o[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&Fk(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let r=this.set[e];for(let n=0;n<r.length;n++)n>0&&(this.formatted+=" "),this.formatted+=r[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(jk,"");let n=((this.options.includePrerelease&&Mk)|(this.options.loose&&$k))+":"+e,o=Ef.get(n);if(o)return o;let s=this.options.loose,i=s?te[K.HYPHENRANGELOOSE]:te[K.HYPHENRANGE];e=e.replace(i,Xk(this.options.includePrerelease)),M("hyphen replace",e),e=e.replace(te[K.COMPARATORTRIM],Nk),M("comparator trim",e),e=e.replace(te[K.TILDETRIM],Ok),M("tilde trim",e),e=e.replace(te[K.CARETTRIM],Lk),M("caret trim",e);let a=e.split(" ").map(u=>Hk(u,this.options)).join(" ").split(/\s+/).map(u=>Vk(u,this.options));s&&(a=a.filter(u=>(M("loose invalid filter",u,this.options),!!u.match(te[K.COMPARATORLOOSE])))),M("range list",a);let l=new Map,c=a.map(u=>new ya(u,this.options));for(let u of c){if(kf(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return Ef.set(n,d),d}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Range is required");return this.set.some(n=>Rf(n,r)&&e.set.some(o=>Rf(o,r)&&n.every(s=>o.every(i=>s.intersects(i,r)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new Ik(e,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(Yk(this.set[r],e,this.options))return!0;return!1}};Tf.exports=ga;var Pk=bf(),Ef=new Pk,Ak=Ao(),ya=on(),M=rn(),Ik=q(),{safeRe:te,src:Dk,t:K,comparatorTrimReplace:Nk,tildeTrimReplace:Ok,caretTrimReplace:Lk}=ir(),{FLAG_INCLUDE_PRERELEASE:Mk,FLAG_LOOSE:$k}=sr(),jk=new RegExp(Dk[K.BUILD],"g"),kf=t=>t.value==="<0.0.0-0",Fk=t=>t.value==="",Rf=(t,e)=>{let r=!0,n=t.slice(),o=n.pop();for(;r&&n.length;)r=n.every(s=>o.intersects(s,e)),o=n.pop();return r},Hk=(t,e)=>(t=t.replace(te[K.BUILD],""),M("comp",t,e),t=Bk(t,e),M("caret",t),t=Uk(t,e),M("tildes",t),t=Gk(t,e),M("xrange",t),t=Kk(t,e),M("stars",t),t),re=t=>!t||t.toLowerCase()==="x"||t==="*",Uk=(t,e)=>t.trim().split(/\s+/).map(r=>Jk(r,e)).join(" "),Jk=(t,e)=>{let r=e.loose?te[K.TILDELOOSE]:te[K.TILDE];return t.replace(r,(n,o,s,i,a)=>{M("tilde",t,n,o,s,i,a);let l;return re(o)?l="":re(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:re(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?(M("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,M("tilde return",l),l})},Bk=(t,e)=>t.trim().split(/\s+/).map(r=>Wk(r,e)).join(" "),Wk=(t,e)=>{M("caret",t,e);let r=e.loose?te[K.CARETLOOSE]:te[K.CARET],n=e.includePrerelease?"-0":"";return t.replace(r,(o,s,i,a,l)=>{M("caret",t,o,s,i,a,l);let c;return re(s)?c="":re(i)?c=`>=${s}.0.0${n} <${+s+1}.0.0-0`:re(a)?s==="0"?c=`>=${s}.${i}.0${n} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${n} <${+s+1}.0.0-0`:l?(M("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):(M("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${n} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${n} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),M("caret return",c),c})},Gk=(t,e)=>(M("replaceXRanges",t,e),t.split(/\s+/).map(r=>qk(r,e)).join(" ")),qk=(t,e)=>{t=t.trim();let r=e.loose?te[K.XRANGELOOSE]:te[K.XRANGE];return t.replace(r,(n,o,s,i,a,l)=>{M("xRange",t,n,o,s,i,a,l);let c=re(s),d=c||re(i),u=d||re(a),m=u;return o==="="&&m&&(o=""),l=e.includePrerelease?"-0":"",c?o===">"||o==="<"?n="<0.0.0-0":n="*":o&&m?(d&&(i=0),a=0,o===">"?(o=">=",d?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",d?s=+s+1:i=+i+1),o==="<"&&(l="-0"),n=`${o+s}.${i}.${a}${l}`):d?n=`>=${s}.0.0${l} <${+s+1}.0.0-0`:u&&(n=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),M("xRange return",n),n})},Kk=(t,e)=>(M("replaceStars",t,e),t.trim().replace(te[K.STAR],"")),Vk=(t,e)=>(M("replaceGTE0",t,e),t.trim().replace(te[e.includePrerelease?K.GTE0PRE:K.GTE0],"")),Xk=t=>(e,r,n,o,s,i,a,l,c,d,u,m)=>(re(n)?r="":re(o)?r=`>=${n}.0.0${t?"-0":""}`:re(s)?r=`>=${n}.${o}.0${t?"-0":""}`:i?r=`>=${r}`:r=`>=${r}${t?"-0":""}`,re(c)?l="":re(d)?l=`<${+c+1}.0.0-0`:re(u)?l=`<${c}.${+d+1}.0-0`:m?l=`<=${c}.${d}.${u}-${m}`:t?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${r} ${l}`.trim()),Yk=(t,e,r)=>{for(let n=0;n<t.length;n++)if(!t[n].test(e))return!1;if(e.prerelease.length&&!r.includePrerelease){for(let n=0;n<t.length;n++)if(M(t[n].semver),t[n].semver!==ya.ANY&&t[n].semver.prerelease.length>0){let o=t[n].semver;if(o.major===e.major&&o.minor===e.minor&&o.patch===e.patch)return!0}return!1}return!0}});var on=R((C0,Af)=>{"use strict";var sn=Symbol("SemVer ANY"),ba=class t{static get ANY(){return sn}constructor(e,r){if(r=_f(r),e instanceof t){if(e.loose===!!r.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),Sa("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===sn?this.value="":this.value=this.operator+this.semver.version,Sa("comp",this)}parse(e){let r=this.options.loose?vf[Cf.COMPARATORLOOSE]:vf[Cf.COMPARATOR],n=e.match(r);if(!n)throw new TypeError(`Invalid comparator: ${e}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new xf(n[2],this.options.loose):this.semver=sn}toString(){return this.value}test(e){if(Sa("Comparator.test",e,this.options.loose),this.semver===sn||e===sn)return!0;if(typeof e=="string")try{e=new xf(e,this.options)}catch{return!1}return wa(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new Pf(e.value,r).test(this.value):e.operator===""?e.value===""?!0:new Pf(this.value,r).test(e.semver):(r=_f(r),r.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||wa(this.semver,"<",e.semver,r)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||wa(this.semver,">",e.semver,r)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};Af.exports=ba;var _f=Ao(),{safeRe:vf,t:Cf}=ir(),wa=fa(),Sa=rn(),xf=q(),Pf=fe()});var an=R((x0,If)=>{"use strict";var zk=fe(),Qk=(t,e,r)=>{try{e=new zk(e,r)}catch{return!1}return e.test(t)};If.exports=Qk});var Nf=R((P0,Df)=>{"use strict";var Zk=fe(),eR=(t,e)=>new Zk(t,e).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));Df.exports=eR});var Lf=R((A0,Of)=>{"use strict";var tR=q(),rR=fe(),nR=(t,e,r)=>{let n=null,o=null,s=null;try{s=new rR(e,r)}catch{return null}return t.forEach(i=>{s.test(i)&&(!n||o.compare(i)===-1)&&(n=i,o=new tR(n,r))}),n};Of.exports=nR});var $f=R((I0,Mf)=>{"use strict";var oR=q(),sR=fe(),iR=(t,e,r)=>{let n=null,o=null,s=null;try{s=new sR(e,r)}catch{return null}return t.forEach(i=>{s.test(i)&&(!n||o.compare(i)===1)&&(n=i,o=new oR(n,r))}),n};Mf.exports=iR});var Hf=R((D0,Ff)=>{"use strict";var Ea=q(),aR=fe(),jf=nn(),lR=(t,e)=>{t=new aR(t,e);let r=new Ea("0.0.0");if(t.test(r)||(r=new Ea("0.0.0-0"),t.test(r)))return r;r=null;for(let n=0;n<t.set.length;++n){let o=t.set[n],s=null;o.forEach(i=>{let a=new Ea(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||jf(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!r||jf(r,s))&&(r=s)}return r&&t.test(r)?r:null};Ff.exports=lR});var Jf=R((N0,Uf)=>{"use strict";var cR=fe(),uR=(t,e)=>{try{return new cR(t,e).range||"*"}catch{return null}};Uf.exports=uR});var Uo=R((O0,qf)=>{"use strict";var dR=q(),Gf=on(),{ANY:pR}=Gf,mR=fe(),fR=an(),Bf=nn(),Wf=Mo(),hR=jo(),gR=$o(),yR=(t,e,r,n)=>{t=new dR(t,n),e=new mR(e,n);let o,s,i,a,l;switch(r){case">":o=Bf,s=hR,i=Wf,a=">",l=">=";break;case"<":o=Wf,s=gR,i=Bf,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(fR(t,e,n))return!1;for(let c=0;c<e.set.length;++c){let d=e.set[c],u=null,m=null;if(d.forEach(f=>{f.semver===pR&&(f=new Gf(">=0.0.0")),u=u||f,m=m||f,o(f.semver,u.semver,n)?u=f:i(f.semver,m.semver,n)&&(m=f)}),u.operator===a||u.operator===l||(!m.operator||m.operator===a)&&s(t,m.semver))return!1;if(m.operator===l&&i(t,m.semver))return!1}return!0};qf.exports=yR});var Vf=R((L0,Kf)=>{"use strict";var wR=Uo(),SR=(t,e,r)=>wR(t,e,">",r);Kf.exports=SR});var Yf=R((M0,Xf)=>{"use strict";var bR=Uo(),ER=(t,e,r)=>bR(t,e,"<",r);Xf.exports=ER});var Zf=R(($0,Qf)=>{"use strict";var zf=fe(),kR=(t,e,r)=>(t=new zf(t,r),e=new zf(e,r),t.intersects(e,r));Qf.exports=kR});var th=R((j0,eh)=>{"use strict";var RR=an(),TR=me();eh.exports=(t,e,r)=>{let n=[],o=null,s=null,i=t.sort((d,u)=>TR(d,u,r));for(let d of i)RR(d,e,r)?(s=d,o||(o=d)):(s&&n.push([o,s]),s=null,o=null);o&&n.push([o,null]);let a=[];for(let[d,u]of n)d===u?a.push(d):!u&&d===i[0]?a.push("*"):u?d===i[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof e.raw=="string"?e.raw:String(e);return l.length<c.length?l:e}});var ah=R((F0,ih)=>{"use strict";var rh=fe(),Ta=on(),{ANY:ka}=Ta,Ra=an(),_a=me(),_R=(t,e,r={})=>{if(t===e)return!0;t=new rh(t,r),e=new rh(e,r);let n=!1;e:for(let o of t.set){for(let s of e.set){let i=CR(o,s,r);if(n=n||i!==null,i)continue e}if(n)return!1}return!0},vR=[new Ta(">=0.0.0-0")],nh=[new Ta(">=0.0.0")],CR=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===ka){if(e.length===1&&e[0].semver===ka)return!0;r.includePrerelease?t=vR:t=nh}if(e.length===1&&e[0].semver===ka){if(r.includePrerelease)return!0;e=nh}let n=new Set,o,s;for(let f of t)f.operator===">"||f.operator===">="?o=oh(o,f,r):f.operator==="<"||f.operator==="<="?s=sh(s,f,r):n.add(f.semver);if(n.size>1)return null;let i;if(o&&s){if(i=_a(o.semver,s.semver,r),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let f of n){if(o&&!Ra(f,String(o),r)||s&&!Ra(f,String(s),r))return null;for(let g of e)if(!Ra(f,String(g),r))return!1;return!0}let a,l,c,d,u=s&&!r.includePrerelease&&s.semver.prerelease.length?s.semver:!1,m=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&s.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let f of e){if(d=d||f.operator===">"||f.operator===">=",c=c||f.operator==="<"||f.operator==="<=",o){if(m&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===m.major&&f.semver.minor===m.minor&&f.semver.patch===m.patch&&(m=!1),f.operator===">"||f.operator===">="){if(a=oh(o,f,r),a===f&&a!==o)return!1}else if(o.operator===">="&&!f.test(o.semver))return!1}if(s){if(u&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===u.major&&f.semver.minor===u.minor&&f.semver.patch===u.patch&&(u=!1),f.operator==="<"||f.operator==="<="){if(l=sh(s,f,r),l===f&&l!==s)return!1}else if(s.operator==="<="&&!f.test(s.semver))return!1}if(!f.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&d&&!o&&i!==0||m||u)},oh=(t,e,r)=>{if(!t)return e;let n=_a(t.semver,e.semver,r);return n>0?t:n<0||e.operator===">"&&t.operator===">="?e:t},sh=(t,e,r)=>{if(!t)return e;let n=_a(t.semver,e.semver,r);return n<0?t:n>0||e.operator==="<"&&t.operator==="<="?e:t};ih.exports=_R});var dh=R((H0,uh)=>{"use strict";var va=ir(),lh=sr(),xR=q(),ch=ca(),PR=ut(),AR=Dm(),IR=Om(),DR=$m(),NR=Hm(),OR=Jm(),LR=Wm(),MR=qm(),$R=Vm(),jR=me(),FR=Qm(),HR=ef(),UR=Lo(),JR=of(),BR=af(),WR=nn(),GR=Mo(),qR=pa(),KR=ma(),VR=$o(),XR=jo(),YR=fa(),zR=gf(),QR=wf(),ZR=on(),eT=fe(),tT=an(),rT=Nf(),nT=Lf(),oT=$f(),sT=Hf(),iT=Jf(),aT=Uo(),lT=Vf(),cT=Yf(),uT=Zf(),dT=th(),pT=ah();uh.exports={parse:PR,valid:AR,clean:IR,inc:DR,diff:NR,major:OR,minor:LR,patch:MR,prerelease:$R,compare:jR,rcompare:FR,compareLoose:HR,compareBuild:UR,sort:JR,rsort:BR,gt:WR,lt:GR,eq:qR,neq:KR,gte:VR,lte:XR,cmp:YR,coerce:zR,truncate:QR,Comparator:ZR,Range:eT,satisfies:tT,toComparators:rT,maxSatisfying:nT,minSatisfying:oT,minVersion:sT,validRange:iT,outside:aT,gtr:lT,ltr:cT,intersects:uT,simplifyRange:dT,subset:pT,SemVer:xR,re:va.re,src:va.src,tokens:va.t,SEMVER_SPEC_VERSION:lh.SEMVER_SPEC_VERSION,RELEASE_TYPES:lh.RELEASE_TYPES,compareIdentifiers:ch.compareIdentifiers,rcompareIdentifiers:ch.rcompareIdentifiers}});function tl(){return"0.99.13"}function gg(t){return/^\d/.test(t)}function Sg(t,e){if(!gg(t)||!gg(e))return!1;let r=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),n=r(t),o=r(e);for(let s=0;s<Math.max(n.length,o.length);s++){let i=n[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function hn(t,e=b_){return new Promise(r=>{let n=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),t.removeListener("data",i),t.removeListener("close",a),t.removeListener("error",a),r(c))},i=c=>{n=Buffer.concat([n,c]);let d=n.indexOf(10);if(d===-1){n.length>E_&&s(void 0);return}s({line:n.subarray(0,d).toString("utf8"),rest:n.subarray(d+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),e);l.unref?.(),t.on("data",i),t.once("close",a),t.once("error",a)})}function bg(t,e){return(0,hr.join)((0,yg.tmpdir)(),`.jolli-${t}-${e}`)}function os(t){return`${JSON.stringify(t)}
`}var el,yg,hr,wg,Za,b_,E_,ss=S(()=>{"use strict";el=require("node:fs"),yg=require("node:os"),hr=require("node:path"),wg=require("node:url");ne();b_=1e4,E_=4096});function T_(t){let e=(0,Nt.join)((0,Nt.dirname)((0,nl.fileURLToPath)(t)),k_);return(0,rl.existsSync)(e)?e:void 0}function ol(t,e=process.argv[1],r=process.execArgv){let n=T_(t);if(n)return{entry:n,nodeArgs:[]};let o=(0,Nt.dirname)((0,nl.fileURLToPath)(t)),s=(0,Nt.join)((0,Nt.dirname)(o),R_);if(e?.endsWith(".ts")&&(0,rl.existsSync)(s))return{entry:s,nodeArgs:r}}var rl,Nt,nl,k_,R_,Eg=S(()=>{"use strict";rl=require("node:fs"),Nt=require("node:path"),nl=require("node:url"),k_="Cli.js",R_="Cli.ts"});var hj,gj,yj,kg=S(()=>{"use strict";oe();Yt();le();h();lt();Tt();hj=p("Backup"),gj=2*1024*1024*1024,yj=1440*60*1e3});function Cg(t){return bg("global",t)}function __(t=(0,Tg.homedir)()){return(0,Rg.createHash)("sha256").update(Rr(t,"win32")).digest("hex").slice(0,16)}function gn(t={}){if((t.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${__(t.home)}`;let r=t.uid??process.getuid?.()??0;return(0,_g.join)(Cg(r),"daemon.sock")}function il(t){let e;try{e=JSON.parse(t)}catch{return}if(typeof e!="object"||e===null)return;let{t:r,protocol:n,version:o,pid:s,startedAt:i}=e;if(!(r!=="hello"||n!==vg)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:n,version:o,pid:s,startedAt:i}}var Rg,Tg,_g,vg,sl,al=S(()=>{"use strict";Rg=require("node:crypto"),Tg=require("node:os"),_g=require("node:path");ss();ne();vg=1,sl=300});var Rj,xg=S(()=>{"use strict";h();Rj=p("TaskScheduler")});var Mj,ll,$j,Pg=S(()=>{"use strict";ss();kg();h();al();xg();Mj=p("GlobalDaemon"),ll="global-daemon",$j=3600*1e3});var Dg={};ds(Dg,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>ul,ensureGlobalDaemon:()=>P_,probeGlobalDaemon:()=>D_,retireGlobalDaemon:()=>I_,shouldSkipGlobalDaemon:()=>dl,triggerEnsureGlobalDaemon:()=>A_});function dl(t){return t!==null&&C_.has(t)}function pl(t){return new Promise(e=>{let r=!1,n=(0,Ig.connect)(t),o=i=>{r||(r=!0,clearTimeout(s),n.removeAllListeners("connect"),i.socket===void 0&&n.destroy(),e(i))},s=setTimeout(()=>o({socket:void 0}),v_);s.unref?.(),n.once("connect",()=>o({socket:n})),n.on("error",i=>{if(r){ke.warn("global daemon socket error after connect: %s",k(i));return}o({socket:void 0,code:i.code})})})}async function x_(t){if(!t.startsWith("\\\\.\\pipe\\"))try{await(0,Ag.unlink)(t)}catch{}}async function P_(t={}){try{if(dl(t.command??null))return"skipped-excluded-command";if(!at(t.nodeVersion??process.versions.node))return"skipped-unsupported-node";let e=t.socketPath??gn(),{socket:r,code:n}=await pl(e);if(!r)return n==="ECONNREFUSED"&&await x_(e),(t.spawnDaemon??N_)(e),"spawned";try{let o=await hn(r,t.helloTimeoutMs??sl),s=o?il(o.line):void 0;if(!s)return"already-running";let i=t.ownVersion??tl();return Sg(i,s.version)?(r.write(os({t:"retire"})),ke.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{r.end()}}catch(e){return ke.warn("could not ensure the global daemon: %s",k(e)),"failed"}}function A_(t={}){try{return dl(t.command??null)||!at(t.nodeVersion??process.versions.node)?!1:(O_(t.socketPath),!0)}catch(e){return ke.warn("could not trigger the global daemon ensure helper: %s",k(e)),!1}}async function I_(t={}){try{let{socket:e}=await pl(t.socketPath??gn());return e?(await hn(e,sl),e.write(os({t:"retire"})),e.end(),!0):!1}catch(e){return ke.warn("could not retire the global daemon: %s",k(e)),!1}}async function D_(t){try{let{socket:e}=await pl(t??gn());if(!e)return;try{let r=await hn(e,5e3);return r?il(r.line):void 0}finally{e.end()}}catch{return}}function N_(t){let e=ol(__jmImportMetaUrl);if(!e){ke.warn("Cannot locate the CLI entry to spawn the global daemon");return}let r=Ze(process.execPath,[...e.nodeArgs,e.entry,ll,"--socket",t],{detached:!0,stdio:"ignore",cwd:(0,cl.homedir)()});r.on("error",n=>ke.warn("global daemon failed to spawn: %s",k(n))),r.unref(),ke.info("spawned global daemon (pid %d)",r.pid??-1)}function O_(t){let e=ol(__jmImportMetaUrl);if(!e){ke.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let r=[...e.nodeArgs,e.entry,ul];t&&r.push("--socket",t);let n=Ze(process.execPath,r,{detached:!0,stdio:"ignore",cwd:(0,cl.homedir)()});n.on("error",o=>ke.warn("global daemon ensure helper failed to start: %s",k(o))),n.unref(),ke.info("spawned global daemon ensure helper (pid %d)",n.pid??-1)}var Ag,Ig,cl,ke,ul,v_,C_,Ng=S(()=>{"use strict";Ag=require("node:fs/promises"),Ig=require("node:net"),cl=require("node:os");ss();lt();h();Eg();we();Pg();al();ke=p("EnsureGlobalDaemon"),ul="global-daemon-ensure",v_=200,C_=new Set([ll,ul,"mcp","mcp-serve","daemon","uninstall","disable"])});var nv={};ds(nv,{buildCursorBootstrapOutput:()=>Jg,main:()=>Gg,resolveCursorProjectDir:()=>Bg,runCursorPluginBootstrap:()=>Wg});module.exports=ey(nv);var gl=require("node:os"),gr=require("node:path"),yl=require("node:url");var br=require("node:fs");var Tl=require("node:path"),ty="JOLLI_LOCAL_AGENT_CHILD",ry=".jolli-local-agent-child";function Tn(t=process.env,e){return t[ty]==="1"?!0:e!==void 0&&(0,br.existsSync)((0,Tl.join)(e,ry))}oe();Pe();ne();var Gy=["/.codex/plugins/","/.claude/plugins/","/.cursor/plugins/"];function rc(t){let e=et(t);return Gy.some(r=>e.includes(r))}nt();le();var U=require("node:fs/promises"),qt=require("node:path");se();oe();h();var Fw='"$HOME/.jolli/jollimemory/run-hook"';function Ue(t,e=""){let r=e?` ${e}`:"";return`${Fw} ${t}${r}`}var zs=["run-hook","StopHook","jollimemory-hooks.jar"],Bn=["run-hook","SessionStartHook"],Wn=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"];function Nr(t,e){let r=typeof e=="string"?[e]:e;return t.some(n=>{let o=n.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&r.some(i=>s.command.includes(i))):!1})}function bt(t,e){let r=typeof e=="string"?[e]:e,n=[];for(let o of t){let s=o.hooks;if(!Array.isArray(s)){n.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&r.some(l=>a.command.includes(l))));i.length>0&&n.push({...o,hooks:i})}return n}function Qs(t){return Nr(t,zs)}function Gn(t){return bt(t,zs)}var qn=p("GitHookInstaller"),Gt="# >>> JolliMemory post-commit hook >>>",Zs="# <<< JolliMemory post-commit hook <<<",ei="# >>> JolliMemory post-rewrite hook >>>",su="# <<< JolliMemory post-rewrite hook <<<",ti="# >>> JolliMemory prepare-commit-msg hook >>>",iu="# <<< JolliMemory prepare-commit-msg hook <<<",ri="# >>> JolliMemory post-merge hook >>>",au="# <<< JolliMemory post-merge hook <<<",Kn="# >>> JolliMemory pre-push hook >>>",lu="# <<< JolliMemory pre-push hook <<<";async function cu(t){let e=await Ut(t),r=(0,qt.join)(e,"post-commit"),n=Ue("post-commit"),o=[Gt,n,Zs].join(`
`),s,i="";try{if(i=await(0,U.readFile)(r,"utf-8"),i.includes(Gt)){let l=new RegExp(`\\n*${ot(Gt)}[\\s\\S]*?${ot(Zs)}\\n*`,"g"),d=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===d?(await Yn(r),{path:r}):(await A(r,d),await(0,U.chmod)(r,493),{path:r})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",qn.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,U.mkdir)(e,{recursive:!0}),await A(r,a);try{await(0,U.chmod)(r,493)}catch{}return qn.info("Git post-commit hook installed"),{warning:s,path:r}}async function uu(t){let e=Ue("post-rewrite",'"$1"'),r=[ei,e,su].join(`
`);return Vn(t,"post-rewrite",r,ei)}async function du(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${e} ]; then ${e} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),n=[ti,r,iu].join(`
`);return Vn(t,"prepare-commit-msg",n,ti)}async function pu(t){let e=Ue("post-merge"),r=[ri,e,au].join(`
`);return Vn(t,"post-merge",r,ri)}async function mu(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_pre_push_previous_status=$?",`if [ -x ${e} ]; then ${e} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),n=[Kn,r,lu].join(`
`);return Vn(t,"pre-push",n,Kn)}async function Vn(t,e,r,n){let o=r.slice(r.lastIndexOf(`
`)+1),s=await Ut(t),i=(0,qt.join)(s,e),a,l="";try{if(l=await(0,U.readFile)(i,"utf-8"),l.includes(n)){let d=new RegExp(`\\n*${ot(n)}[\\s\\S]*?${ot(o)}\\n*`,"g"),m=`${l.replace(d,`
`).trimEnd()}

${r}
`;return l===m?(await Yn(i),{path:i}):(await A(i,m),await(0,U.chmod)(i,493),{path:i})}a=`Existing ${e} hook found \u2014 Jolli Memory section appended`,qn.warn(a)}catch{}let c;l?c=`${l}

${r}
`:c=`#!/bin/sh

${r}
`,await(0,U.mkdir)(s,{recursive:!0}),await A(i,c);try{await(0,U.chmod)(i,493)}catch{}return qn.info("Git %s hook installed",e),{warning:a,path:i}}async function fu(t){let e;try{let s=await Ut(t);e=(0,qt.join)(s,"post-commit")}catch{return{}}let r;try{r=await(0,U.readFile)(e,"utf-8")}catch{return{}}if(!r.includes(Gt))return{};let n=new RegExp(`\\n*${ot(Gt)}[\\s\\S]*?${ot(Zs)}\\n*`,"g"),o=r.replace(n,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(e,{force:!0})}else await A(e,o),await Yn(e);return{}}async function hu(t){await Xn(t,"post-rewrite",ei,su)}async function gu(t){await Xn(t,"prepare-commit-msg",ti,iu)}async function yu(t){await Xn(t,"post-merge",ri,au)}async function wu(t){await Xn(t,"pre-push",Kn,lu)}async function Xn(t,e,r,n){let o;try{o=await Ut(t)}catch{return}let s=(0,qt.join)(o,e),i;try{i=await(0,U.readFile)(s,"utf-8")}catch{return}if(!i.includes(r))return;let a=new RegExp(`\\n*${ot(r)}[\\s\\S]*?${ot(n)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await A(s,l),await Yn(s)}async function Su(t){return bu(t,"post-commit",Gt)}async function bu(t,e,r){try{let n=await Ut(t),o=(0,qt.join)(n,e);return(await(0,U.readFile)(o,"utf-8")).includes(r)?process.platform==="win32"?!0:((await(0,U.stat)(o)).mode&73)!==0:!1}catch{return!1}}function ot(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function Yn(t){try{((await(0,U.stat)(t)).mode&73)===0&&await(0,U.chmod)(t,493)}catch{}}var rs=require("node:fs/promises"),Dt=require("node:path"),dg=require("node:url");var ni=require("node:fs"),Eu=require("node:fs/promises"),oi=require("node:os"),Or=require("node:path");h();Ie();var Tx=p("AntigravityDetector"),ku=["antigravity","antigravity-ide","antigravity-cli"];function Ru(t=(0,oi.homedir)()){let e=[];for(let r of ku){let n=(0,Or.join)(t,".gemini",r),o=(0,Or.join)(n,"conversations");(0,ni.existsSync)(o)&&e.push({variant:r,root:n,conversationsDir:o,brainDir:(0,Or.join)(n,"brain")})}return e}async function Hw(t){for(let e of Ru(t))try{if((await(0,Eu.readdir)(e.conversationsDir)).some(r=>r.endsWith(".db")))return!0}catch{}return!1}async function Tu(t=(0,oi.homedir)()){return await Hw(t)?!0:ku.some(e=>(0,ni.existsSync)((0,Or.join)(t,".gemini",e)))}h();var si=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(e){e.slots!==void 0&&(this.slots=Math.max(1,Math.floor(e.slots))),e.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(e.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(e,r){let n=await this.acquire(Math.max(0,e));try{return await r()}finally{this.slotsInUse--,this.bytesInUse-=n,this.pump()}}clamp(e){return Math.min(e,this.bytesCap)}fits(e){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(e)<=this.bytesCap}acquire(e){return this.waiting.length===0&&this.fits(e)?Promise.resolve(this.take(e)):new Promise(r=>{this.waiting.push({want:e,wake:r})})}take(e){let r=this.clamp(e);return this.slotsInUse++,this.bytesInUse+=r,r}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let e=this.waiting.shift();e.wake(this.take(e.want))}}},vx=new si;var zn="mcp__";function Lr(t){return{name:t,kind:"builtin",calls:0}}function ii(t){return{name:t,kind:"skill",calls:0}}function Kt(t,e){return{name:e?`${t}.${e}`:t,kind:"mcp",server:t,calls:0}}function Qn(t){if(!t.startsWith(zn))return Lr(t);let e=t.slice(zn.length),r=e.indexOf("__");return r===-1?Kt(e,""):Kt(e.slice(0,r),e.slice(r+2))}function _u(t,e){if(e===void 0||e.length===0)return Lr(t);if(!e.startsWith(zn))return Kt(e,t);let r=e.slice(zn.length).split("__"),n=r[r.length-1]||r[0]||e;return Kt(n,t)}function Uw(t,e){let r=Math.max(t.lastCallAtMs??Number.NEGATIVE_INFINITY,e.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(r)?{lastCallAtMs:r}:{}}var kt=class{constructor(){this.byKey=new Map;this.seen=new Set}add(e,r=1){let n=`${e.kind}:${e.name}`,o=this.byKey.get(n);if(!o){this.byKey.set(n,{...e,calls:r});return}this.byKey.set(n,{...o,calls:o.calls+r,...Uw(o,e)})}addOnce(e,r){if(e!==void 0){if(this.seen.has(e))return;this.seen.add(e)}this.add(r)}hasSeen(e){return this.seen.has(e)}values(){return[...this.byKey.values()]}};h();h();function ci(t){if(t===void 0)return;let e=Date.parse(t);return Number.isFinite(e)?e:void 0}function vu(...t){let e=t.filter(r=>r!==void 0);return e.length>0?{lastCallAtMs:Math.max(...e)}:{}}function Jw(t){let e=0;for(let r of t)r.type==="tool_result"&&e++;return e}var Au=p("TranscriptParser"),Zn=class{parseLine(e,r){return Du(e,r)}parseUsageTokens(e,r){let n=Pu(e);return n?{input:n.input,output:n.output,cached:n.cached,...n.id&&{dedupKey:n.id}}:{input:0,output:0,cached:0}}parseUsageByModel(e){let r=new Map,n=new Set;for(let o of e){let s=Pu(o);if(!s)continue;if(s.id){if(n.has(s.id))continue;n.add(s.id)}let i=r.get(s.model);i?r.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):r.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...r.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(e){let r=new kt,n=[],o=new Map;for(let s of e){let i;try{i=JSON.parse(s)}catch{continue}let a=i,l=a?.message?.content;if(!Array.isArray(l))continue;let c=a.toolUseResult?.commandName,d=typeof c=="string"&&c.length>0?c:void 0,u=Jw(l)===1,m=ci(this.parseTimestamp(s));for(let f of l){let g=f;if(g.type==="tool_result"){d!==void 0&&u&&typeof g.tool_use_id=="string"&&o.set(g.tool_use_id,d);continue}if(g.type!=="tool_use"||typeof g.name!="string")continue;let b=typeof g.id=="string"?g.id:void 0;if(g.name==="Skill"&&typeof g.input?.skill=="string"){n.push({...b!==void 0?{id:b}:{},requested:g.input.skill,...m!==void 0?{atMs:m}:{}});continue}r.addOnce(b,{...Qn(g.name),...m!==void 0&&{lastCallAtMs:m}})}}for(let s of n)r.addOnce(s.id,{...ii((s.id!==void 0?o.get(s.id):void 0)??s.requested),...s.atMs!==void 0&&{lastCallAtMs:s.atMs}});return r.values()}parseTimestamp(e,r){try{let n=JSON.parse(e);return typeof n.timestamp=="string"?n.timestamp:void 0}catch{return}}},ai=class{parseLine(e,r){try{let n=JSON.parse(e),o=typeof n.timestamp=="string"?n.timestamp:void 0;if(n.type!=="event_msg")return null;let i=n.payload;if(!i||typeof i!="object")return null;let a=i.type;return a==="user_message"?qw(i,o):a==="agent_message"?Kw(i,o):null}catch(n){return Au.debug("Failed to parse Codex transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new Map,n=[];for(let s of e){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!Bw.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",u;if(c!==void 0)u=d?Kt(d,c):Lr(c);else if(typeof l.name=="string"&&l.name.length>0)u=_u(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let m=i.timestamp,f=ci(typeof m=="string"?m:void 0),g={...u,...f!==void 0&&{lastCallAtMs:f}},b=typeof l.call_id=="string"?l.call_id:void 0;if(b===void 0){n.push(g);continue}let C=r.get(b),E=C===void 0||C.kind!=="mcp"&&g.kind==="mcp"?g:C;r.set(b,{...E,...C?vu(C.lastCallAtMs,g.lastCallAtMs):vu(g.lastCallAtMs)})}let o=new kt;for(let s of[...r.values(),...n])o.add(s);return o.values()}},Bw=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),li=class{parseLine(e,r){try{let n=JSON.parse(e),o=n.type,s=xu(n);if(o==="turn.prompt"){let a=Iu(n.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=Gw(n);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(n){return Au.debug("Failed to parse Kimi transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new kt;for(let n of e){if(!n.includes(Cu))continue;let o;try{o=JSON.parse(n)}catch{continue}if(o.type!==Cu)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=ci(this.parseTimestamp(n));r.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===Ww&&typeof s.args?.skill=="string"?ii(s.args.skill):Qn(s.name),...i!==void 0&&{lastCallAtMs:i}})}return r.values()}parseTimestamp(e,r){try{return xu(JSON.parse(e))}catch{return}}},Cu="context.append_loop_event",Ww="Skill";function Gw(t){if(t.type==="context.append_loop_event"){let e=t.event;return e?.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}return t.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}function xu(t){let e=t.time??t.timestamp;return typeof e=="number"&&Number.isFinite(e)?new Date(e).toISOString():typeof e=="string"&&e.length>0?e:void 0}function Iu(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t){let n=Iu(r);n&&e.push(n)}return e.length>0?e.join(`
`):null}if(t!==null&&typeof t=="object"){let e=t;if((e.type==="text"||e.type===void 0)&&typeof e.text=="string"&&e.text.length>0)return e.text}return null}function qw(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"human",content:r.trim(),timestamp:e}}function Kw(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"assistant",content:r.trim(),timestamp:e}}function Pu(t){try{return Xw(JSON.parse(t))}catch{return null}}function Vw(t){return t.startsWith("<")&&t.endsWith(">")}function Xw(t){let e=t,r=e?.message?.usage??e?.usage;if(!r||typeof r!="object")return null;let n=i=>typeof r[i]=="number"?r[i]:0,o=e?.message?.model??e?.model,s=e?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!Vw(o)?o:"",input:n("input_tokens"),output:n("output_tokens"),cached:n("cache_creation_input_tokens")}}var Yw=new Zn,zw=new ai,Qw=new li;function Zw(t){switch(t){case"codex":return zw;case"kimi":return Qw;case"claude":return Yw}}var eS=["claude","codex","kimi"],tS=["gemini","opencode","antigravity","cursor-cli","cline-cli","devin"],Dx=new Set([...eS.filter(t=>Zw(t).parseToolUse!==void 0),...tS]);var ui=p("TranscriptReader");var rS=["Base directory for this skill:","[Request interrupted by user"],nS=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function Du(t,e){try{let r=JSON.parse(t);if(r.isCompactSummary===!0)return ui.debug("Skipping compaction summary at line %d",e),null;if(!r.message||typeof r.message!="object")return null;let n=r.message,o=n.role,s=typeof r.timestamp=="string"?r.timestamp:void 0;if(o==="user")return oS(n,s,e);if(o==="assistant"){let i=Nu(n.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(r){return ui.debug("Failed to parse transcript line %d: %s",e,r.message),null}}function oS(t,e,r){let n=Nu(t.content);if(!n)return null;let o=sS(n);return o.length===0?null:rS.some(s=>o.startsWith(s))?(ui.debug("Skipping filtered user message at line %d",r),null):{role:"human",content:o,timestamp:e}}function sS(t){return t.replace(nS,"").trim()}function Nu(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t)if(r!==null&&typeof r=="object"){let n=r;n.type==="text"&&typeof n.text=="string"&&e.push(n.text)}return e.length>0?e.join(`
`):null}return null}oe();ne();Ie();var eP=p("AntigravityDiscoverer"),tP=2880*60*1e3;var Ou=require("node:fs/promises"),to=require("node:os"),mi=require("node:path");function iS(t=(0,to.homedir)()){return(0,mi.join)(t,".cline","data")}function Lu(t=(0,to.homedir)()){return(0,mi.join)(iS(t),"sessions")}async function Mu(t=(0,to.homedir)()){try{return await(0,Ou.access)(Lu(t)),!0}catch{return!1}}h();ne();var cP=p("ClineCliDiscoverer"),uP=2880*60*1e3;var fi=require("node:fs/promises"),jr=require("node:os"),no=require("node:path");var ro=require("node:os"),$r=require("node:path");h();var mP=p("VscodeWorkspaceLocator"),$u=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function We(t,e=(0,ro.homedir)()){switch((0,ro.platform)()){case"darwin":return(0,$r.join)(e,"Library","Application Support",t);case"win32":return(0,$r.join)(process.env.APPDATA??(0,$r.join)(e,"AppData","Roaming"),t);default:return(0,$r.join)(e,".config",t)}}var aS="saoudrizwan.claude-dev";function lS(t,e){return(0,no.join)(We(t,e),"User","globalStorage",aS)}function Fr(t=(0,jr.homedir)()){return $u.map(e=>lS(e,t))}function oo(t){return(0,no.join)(t,"settings","cline_mcp_settings.json")}async function ju(t=(0,jr.homedir)()){for(let e of Fr(t))try{return await(0,fi.access)((0,no.join)(e,"state","taskHistory.json")),!0}catch{}return!1}async function hi(t=(0,jr.homedir)()){let e=[];for(let r of Fr(t))try{await(0,fi.access)(oo(r)),e.push(r)}catch{}return e}async function Fu(t=(0,jr.homedir)()){return(await hi(t)).length>0}h();ne();var EP=p("ClineDiscoverer"),kP=2880*60*1e3;var gi=require("node:fs/promises"),Hu=require("node:os"),yi=require("node:path");h();var CP=p("CodexDiscoverer"),xP=2880*60*1e3,cS=".codex";async function wi(){let t=(0,yi.join)((0,Hu.homedir)(),cS);try{return(await(0,gi.stat)(t)).isDirectory()}catch{return!1}}var PP=1440*60*1e3;var Ju=require("node:fs/promises"),Bu=require("node:os"),Si=require("node:path");h();var uS=p("CopilotChatDetector");function dS(t){return(0,Si.join)(We("Code",t),"User","globalStorage","github.copilot-chat")}function pS(t=(0,Bu.homedir)()){return(0,Si.join)(t,".copilot","session-state")}async function Uu(t){try{return(await(0,Ju.stat)(t)).isDirectory()}catch(e){let r=e.code;return r!=="ENOENT"&&uS.warn("Copilot Chat probe stat failed for %s (%s): %s",t,r??"unknown",e.message),!1}}async function Wu(){let[t,e]=await Promise.all([Uu(dS()),Uu(pS())]);return t||e}h();var HP=p("CopilotChatDiscoverer"),UP=2880*60*1e3;var qu=require("node:fs/promises"),Ku=require("node:os"),Vu=require("node:path");h();Ie();var Xu=p("CopilotDetector");function Yu(){return(0,Vu.join)((0,Ku.homedir)(),".copilot","session-store.db")}async function zu(){return Be()?bi():(Xu.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Je.major,Je.minor),!1)}async function bi(){let t=Yu();try{return(await(0,qu.stat)(t)).isFile()}catch(e){let r=e.code;return r!=="ENOENT"&&Xu.warn("Copilot DB stat failed (%s): %s",r??"unknown",e.message),!1}}h();Ie();var zP=p("CopilotDiscoverer"),QP=2880*60*1e3;var so=require("node:fs/promises"),io=require("node:os"),Ei=require("node:path");h();ne();var nA=p("CursorCliDiscoverer"),oA=2880*60*1e3;function mS(t=(0,io.homedir)()){return(0,Ei.join)(t,".cursor")}function fS(t=(0,io.homedir)()){return(0,Ei.join)(mS(t),"chats")}async function Qu(t=(0,io.homedir)()){try{return(await(0,so.stat)(fS(t))).isDirectory()}catch{return!1}}var Zu=require("node:fs/promises"),ed=require("node:path");h();Ie();var hS=p("CursorDetector");function td(t){return(0,ed.join)(We("Cursor",t),"User","globalStorage","state.vscdb")}async function rd(){return Be()?ki():(hS.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function ki(){let t=td();try{return(await(0,Zu.stat)(t)).isFile()}catch{return!1}}h();Ie();var hA=p("CursorDiscoverer"),gA=2880*60*1e3;var Ri=require("node:fs/promises"),nd=require("node:os"),Vt=require("node:path");h();Ie();var kA=p("DevinDiscoverer"),RA=2880*60*1e3;function od(t){let e=t??(0,nd.homedir)();if(process.platform==="win32")return(0,Vt.join)(process.env.APPDATA??(0,Vt.join)(e,"AppData","Roaming"),"devin","cli");let r=process.env.XDG_DATA_HOME,n=r&&r.length>0?r:(0,Vt.join)(e,".local","share");return(0,Vt.join)(n,"devin","cli")}function gS(t){return(0,Vt.join)(od(t),"sessions.db")}async function yS(){try{return(await(0,Ri.stat)(gS())).isFile()}catch{return!1}}async function sd(){if(await yS())return!0;try{return(await(0,Ri.stat)(od())).isDirectory()}catch{return!1}}var id=require("node:fs/promises"),ad=require("node:os"),ld=require("node:path");h();var wS=p("GeminiDetector"),SS=".gemini";async function Ti(){let t=(0,ld.join)((0,ad.homedir)(),SS);try{return(await(0,id.stat)(t)).isDirectory()}catch{return wS.debug("Gemini directory not found: %s",t),!1}}oe();Yt();var co=require("node:fs/promises"),Dd=require("node:os"),Pi=require("node:path");h();var qA=p("KimiDiscoverer"),KA=2880*60*1e3,AS=".kimi-code";function uo(){return process.env.KIMI_CODE_HOME||(0,Pi.join)((0,Dd.homedir)(),AS)}async function Nd(){let t=uo();try{return(await(0,co.stat)(t)).isDirectory()}catch{return!1}}Pe();le();var po={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},YA=Object.keys(po);function mo(t){return t===void 0?void 0:po[t]?.localAgentTool}function Ai(t,e){return(t===void 0?void 0:po[t]?.skillInvocation)?.replace("<name>",e)}function Ld(t){return(t===void 0?void 0:po[t]?.host)??"claude"}function Od(t,e){return t===void 0||t===e?void 0:t}async function Md(t,e){let r=mo(t);return r===void 0?null:e.localAgentTool!==void 0&&e.aiProvider!==void 0?{tool:r,seededTool:!1,keptTool:Od(e.localAgentTool,r),seededProvider:!1}:Jn(n=>{let o=n.localAgentTool===void 0,s=n.aiProvider===void 0,i={tool:r,seededTool:o,keptTool:Od(n.localAgentTool,r),seededProvider:s};return!o&&!s?{update:null,result:i}:{update:{...s?{aiProvider:"local-agent"}:{},...o?{localAgentTool:r}:{}},result:i}})}var $d=require("node:fs/promises"),jd=require("node:os"),Ii=require("node:path");h();Ie();var IS=p("OpenCodeDiscoverer"),rI=2880*60*1e3;function DS(){return process.env.XDG_DATA_HOME||(0,Ii.join)((0,jd.homedir)(),".local","share")}function NS(){return(0,Ii.join)(DS(),"opencode","opencode.db")}async function Fd(){return Be()?Di():(IS.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Je.major,Je.minor),!1)}async function Di(){let t=NS();try{return(await(0,$d.stat)(t)).isFile()}catch{return!1}}h();se();Pe();le();var cI=p("PushPendingStore");var uI=10080*60*1e3;var OS=300*1e3,dI=Math.floor(OS/3);ms();h();we();var SI=p("PushCompensation");h();fo();h();Yt();var CI=p("KBRepoDiscoverer");h();se();fo();Pe();le();var LI=p("PushControlStore");nt();ho();h();se();var $S={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms. MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var JI=new Set(Object.keys($S));var dD=p("PushControl");nt();h();oe();Pe();Dn();wo();Tt();h();oe();nt();var Ke=class{constructor(e){this.cwd=e;this.kind="orphan-branch"}async readFile(e){return Ss(ge,e,this.cwd)}async batchReadFiles(e){return bs(ge,e,this.cwd)}async writeFiles(e,r){if(ye())return;if(await Pr(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(wo(),sp));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Hl(ge,e,r,this.cwd)}async listFiles(e){return[...await Es(ge,e,this.cwd)]}async exists(){return ys(ge,this.cwd)}async ensure(){await ws(ge,this.cwd)}};var Gp=require("node:zlib");lt();var Bp=require("node:zlib");Dr();function So(t){return t.version>=4}function nb(t){return[...t??[]].reverse()}function tr(t){let e=nb(t.children).flatMap(tr),r=(t.topics??[]).map(n=>({...n,commitDate:t.commitDate,generatedAt:t.generatedAt}));return[...e,...r]}function ip(t){let e=t.stats,r=e?.filesChanged??0,n=e?.insertions??0,o=e?.deletions??0;for(let s of t.children??[]){let i=ip(s);r+=i.filesChanged,n+=i.insertions,o+=i.deletions}return{filesChanged:r,insertions:n,deletions:o}}function qr(t){return t.diffStats?t.diffStats:(t.children?.length??0)>0?ip(t):t.stats??{filesChanged:0,insertions:0,deletions:0}}function Bi(t){let e=t.conversationTurns??0,r=(t.children??[]).reduce((n,o)=>n+Bi(o),0);return e+r}function Wi(t){let e=t.conversationTokens??0,r=(t.children??[]).reduce((n,o)=>n+Wi(o),0);return e+r}function Gi(t){let e=t.conversationTokenBreakdown,r={input:e?.input??0,output:e?.output??0,cached:e?.cached??0};return(t.children??[]).reduce((n,o)=>{let s=Gi(o);return{input:n.input+s.input,output:n.output+s.output,cached:n.cached+s.cached}},{input:r.input,output:r.output,cached:r.cached})}function bo(t){let e=[],r=n=>{if(!n.children?.length)e.push(n);else for(let o of n.children)r(o)};for(let n of t.children??[])r(n);return e}function Eo(t){return So(t)?(t.topics??[]).map(e=>({...e,commitDate:t.commitDate,generatedAt:t.generatedAt})):tr(t)}function Kr(t){let e=[t.commitHash];for(let r of t.children??[])e.push(...Kr(r));return e}function rr(t,e){return t.transcripts!==void 0?t.transcripts:Kr(t).filter(r=>e.has(r))}function ob(t){let e=bo(t);return e.length<=1?1:new Set(e.map(n=>new Date(n.generatedAt||n.commitDate).toISOString().substring(0,10))).size}function ap(t){let e=ob(t),r=e===1?"1 day":`${e} days`,n=bo(t);if(n.length<=1)return r;let o=n.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${r} (${a(s)} \u2014 ${a(i)})`}h();lt();oe();h();h();$s();oe();Pe();Dn();var lp=/-[0-9a-f]{8}$/;Dr();var sb="local-agent-auth";function cp(t){return t.summaryError===sb}var Vr={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop"},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app"},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function _t(t){return Vr[t]?.label??"Local agent"}function up(t){return Vr[t]?.loginHint??"Sign in to your local agent CLI."}function dp(t){let e=Vr[t]?.separateDesktopApp;return e===void 0?null:`(This login is SEPARATE from ${e} \u2014 ${e} stays signed in on its own.)`}jn();var ib=new Set(["linear","jira","github"]);function ab(t){return ib.has(t)}function qi(t){return ab(t.source)?`${t.nativeId} \u2014 ${t.title}`:t.title}function z(t){return t.generatedAt||t.commitDate}function mp(t){try{return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function Ki(t){try{return new Date(t).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return t}}function pp(t){return t.substring(0,10)}function lb(t){return[...t].sort((e,r)=>{let n=pp(e.generatedAt||e.commitDate||""),o=pp(r.generatedAt||r.commitDate||"");if(n!==o)return n>o?-1:1;let s=e.importance==="minor"?1:0,i=r.importance==="minor"?1:0;return s-i})}function fp(t){return String(t+1).padStart(2,"0")}var cb={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};function ub(t,e){return e==="local-agent"?t.localAgentTool?`Local agent - ${_t(t.localAgentTool)}`:"Local agent":cb[e]}function hp(t){let e=new Set,r=o=>{let s=o.llm;s?.source&&e.add(ub(s,s.source));for(let i of o.children??[])r(i)};r(t);let n=[...e];if(n.length!==0)return n.length===1?n[0]:`mixed: ${n.join(", ")}`}function gp(t){let e=bo(t),r=Eo(t);return{topics:lb(r.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:e}}Ks();var db=/^transcripts\/(.+)\.json$/;function Vi(t){return db.exec(t)?.[1]??null}var pb;async function mb(t){let e=await Ro(t);return e.ok?e.storage:(Xi.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",e.reason,t),new Ke(t))}async function fb(t,e){return t??pb??await mb(e)}var Xi=p("SummaryStore"),hb="index.json";function yp(t){let e=[];for(let r of t)r.e2eTestGuide&&e.push(...r.e2eTestGuide),r.children&&e.push(...yp(r.children));return e}function wp(t){let{e2eTestGuide:e,...r}=t;return r.children?{...r,children:r.children.map(wp)}:r}function Sp(t){let e=new Map;for(let r of t){if(r.plans)for(let n of r.plans){let o=n.slug,s=e.get(o);(!s||n.updatedAt>s.updatedAt)&&e.set(o,n)}if(r.children)for(let n of Sp(r.children)){let o=e.get(n.slug);(!o||n.updatedAt>o.updatedAt)&&e.set(n.slug,n)}}return[...e.values()]}function bp(t){let{plans:e,...r}=t;return r.children?{...r,children:r.children.map(bp)}:r}function Ep(t){let e=new Map;for(let r of t){if(r.notes)for(let n of r.notes){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}if(r.children)for(let n of Ep(r.children)){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}}return[...e.values()]}function kp(t){let{notes:e,...r}=t;return r.children?{...r,children:r.children.map(kp)}:r}function Rp(t){let{references:e,...r}=t;return r.children?{...r,children:r.children.map(Rp)}:r}function Tp(t){let e=new Map;for(let r of t){let n=r.references??[];for(let o of n){let s=e.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&e.set(o.archivedKey,o)}if(r.children)for(let o of Tp(r.children)){let s=e.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&e.set(o.archivedKey,o)}}return[...e.values()]}function _p(t){let e=[];for(let r of t)e.push(...r.skills??[]),r.children&&e.push(..._p(r.children));return Zc(e)}function vp(t){let{jolliDocId:e,jolliDocUrl:r,jolliSkillsDocId:n,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=t;return a.children?{...a,children:a.children.map(vp)}:a}function Cp(t){let e=[];for(let o of t){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&e.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=Cp(o.children);i.winner&&e.push({...i.winner})}}if(e.length===0)return{winner:null,orphanedDocIds:[]};e.sort((o,s)=>new Date(z(s)).getTime()-new Date(z(o)).getTime());let r=e[0],n=e.slice(1).map(o=>o.jolliDocId);return{winner:r,orphanedDocIds:n}}function xp(t){let e=[];for(let r of t??[])r.orphanedDocIds&&e.push(...r.orphanedDocIds),e.push(...xp(r.children));return e}function Pp(t){let e=[];for(let r of t??[])r.unresolvedOrphanHashes&&e.push(...r.unresolvedOrphanHashes),e.push(...Pp(r.children));return e}function Ap(t){if(t.version>=4)return t;let e=yp([t]),r=Sp([t]),n=Ep([t]),o=Tp([t]),s=_p([t]),i=s.map(Qc),a=Cp([t]),l=Array.from(new Set([...a.orphanedDocIds,...t.orphanedDocIds??[],...xp(t.children),...s.flatMap(b=>b.supersededDocIds??[])])),c=Array.from(new Set([...t.unresolvedOrphanHashes??[],...Pp(t.children)])),d=gb(t),u=yb(t),m=t.diffStats===void 0&&t.stats!==void 0?qr(t):void 0,{stats:f,...g}=t;return{...g,version:4,topics:d,...u!==void 0?{recap:u}:{},...m!==void 0?{diffStats:m}:{},...e.length>0?{e2eTestGuide:e}:{},...r.length>0?{plans:r}:{},...n.length>0?{notes:n}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...t.children!==void 0?{children:t.children.map(Sb)}:{}}}function Ip(t){let{topics:e,...r}=t;return r.children?{...r,children:r.children.map(Ip)}:r}function Dp(t){let{recap:e,...r}=t;return r.children?{...r,children:r.children.map(Dp)}:r}function gb(t){return So(t)?t.topics??[]:tr(t).map(({commitDate:e,generatedAt:r,treeIndex:n,...o})=>o)}function yb(t){return So(t)||t.recap?t.recap:wb(t.children)}function wb(t){if(!t||t.length===0)return;let e=[];if(Np(t,e),e.length!==0)return e.sort((r,n)=>new Date(n.date).getTime()-new Date(r.date).getTime()),e[0]?.recap}function Np(t,e){for(let r of t)r.recap&&e.push({recap:r.recap,date:z(r)}),r.children&&Np(r.children,e)}function Sb(t){return vp(Rp(kp(bp(wp(Ip(Dp(t)))))))}async function ko(t,e){return bb(t,e)}async function bb(t,e){let r=await fb(e,t),n=await r.readFile(hb);if(!n)return Xi.debug("loadIndex: no index.json in %s storage",r.kind??"unknown"),null;try{return JSON.parse(n)}catch(o){return Xi.error("Failed to parse index.json: %s",o.message),null}}function Op(t){let e=Eo(t).map(r=>({title:r.title,...r.decisions!==void 0&&{decisions:r.decisions},...r.category!==void 0&&{category:r.category},...r.importance!==void 0&&{importance:r.importance},...r.filesAffected&&r.filesAffected.length>0&&{filesAffected:r.filesAffected}}));return{commitHash:t.commitHash,...t.recap!==void 0&&{recap:t.recap},...t.ticketId!==void 0&&{ticketId:t.ticketId},...e.length>0&&{topics:e}}}var ON=p("ProcessedSourceStore");nt();Dr();h();var jN=p("TopicIndexStore");var Eb=new Set(["index","processed"]);function $p(t){if(!t.startsWith("topics/")||!t.endsWith(".json"))return!1;let e=t.slice(7,-5);return e.length>0&&!e.includes("/")&&!Eb.has(e)}var jp=[["summaries/",t=>t.endsWith(".json")],["transcripts/",t=>t.endsWith(".json")],["plans/",t=>t.endsWith(".md")],["notes/",t=>t.endsWith(".md")],["references/",t=>t.endsWith(".md")],["skills/",t=>t.endsWith(".md")],["plan-progress/",t=>t.endsWith(".json")],["topics/",$p]],HN=jp.map(([t])=>t),UN=Object.fromEntries(jp);h();var qN=p("TopicPageStore");h();lt();Ts();h();lt();Ui();Tt();var ZN=p("ImportState");var eO=10*6e4;Tt();go();var CO=p("SotImport");function Ve(t){if(t==null)return null;try{return JSON.parse(t)}catch{return null}}function Fp(t){let e=/^#\s+(.+)$/m.exec(t);return e?e[1].trim():null}var kb=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function Hp(t,e,r){for(let{path:n,accepts:o}of kb){let s=t;for(let a of n){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||r("off-type numeric",`${e}.${n.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function Up(t,e,r,n){let o=Date.parse(t.commitDate??"");return Number.isFinite(o)?o:(n("commit date",`${e} has no parsable commitDate \u2014 falling back to first-seen time`),r)}function Jp(t,e){let r=t.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(e),n=new Map,o=[];for(let l of r)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=n.get(l.parent_hash)??[];c.push(l.commit_hash),n.set(l.parent_hash,c)}let s=t.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(r.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=i.get(l);(u.root_hash!==c||u.depth!==d)&&s.run(c,d,e,l);for(let m of n.get(l)??[])o.push({hash:m,root:c,depth:d+1})}if(a!==r.length)throw new Error(`remountRepo: ${r.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}go();var vt=p("SotWrite"),Rb={plans:"plan",notes:"note",references:"reference",skills:"skill"};function Tb(t){let e=[],r=(n,o,s)=>{e.push({hash:n.commitHash,parentInFile:o,pos:s,summary:n}),(n.children??[]).forEach((i,a)=>{r(i,n.commitHash,a)})};return r(t,null,null),e}function _b(t){let e={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let r of t){let n=r.delete===!0,o=r.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(n){e.summaryDeletes.push(o[1]);continue}let c=Ve(r.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${r.path}`);e.summaryTrees.push(Tb(c));continue}if(r.path==="index.json"){if(n)continue;let c=Ve(r.content);for(let d of c?.entries??[])d.treeHash&&e.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))e.aliases.set(d,u);continue}if(r.path==="catalog.json")continue;if(r.path==="topics/index.json"){if(n)continue;let c=Ve(r.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&e.topicSummaries.set(d.stableSlug,d.summary);continue}if(r.path==="topics/processed.json"){e.processedSet=n?null:r.content;continue}if(r.path==="schema-v5-migration.json"){n||(e.v5State=r.content);continue}let s=r.path.match(/^transcripts\/(.+)\.json$/);if(s){n?e.transcriptDeletes.push(s[1]):e.transcriptWrites.push({id:s[1],content:r.content});continue}let i=r.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=Rb[i[1]];n?e.contextDeletes.push({kind:c,key:i[2]}):e.contextWrites.push({kind:c,key:i[2],body:r.content});continue}let a=r.path.match(/^plan-progress\/(.+)\.json$/);if(a){n?e.progressDeletes.push(a[1]):e.progressWrites.push({pathSlug:a[1],content:r.content});continue}let l=r.path.match(/^topics\/([^/]+)\.json$/);if(l){n?e.topicPageDeletes.push(l[1]):e.topicPageWrites.push({slug:l[1],content:r.content});continue}throw new Error(`SotWrite: no table backs path ${r.path}`)}return e}function Yr(t,e){vt.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",t,e)}function vb(t,e,r){let n=/-([0-9a-f]{8})$/.exec(r);return n?t.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(e,n[1])?.branch??null:null}function Cb(t,e,r,n){for(let d of r.summaryDeletes)t.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(e,d);if(r.summaryTrees.length===0)return;let o=new Set;for(let d of r.summaryTrees)for(let u of d)"children"in u.summary&&o.add(u.hash);let s=t.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let d of o)s.run(e,d);let i=new Map;for(let d of r.summaryTrees)for(let u of d){if(u.parentInFile===null||u.pos===null)continue;let m=i.get(u.parentInFile)??new Map;m.set(u.hash,u.pos),i.set(u.parentInFile,m)}let a=t.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),l=(d,u)=>vt.info("write degraded a value: %s %s",d,u);for(let d of r.summaryTrees)for(let u of d){let m=u.parentInFile,f=u.pos;if(u.parentInFile===null){let C=t.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,u.hash);C&&(m=C.parent_hash,f=C.child_pos,f!==null&&f>=1e6&&((m===null?void 0:i.get(m))?.has(u.hash)||(m=null,f=null)))}let g=JSON.stringify("children"in u.summary?{...u.summary,children:[]}:u.summary);a.run(e,u.hash,m,f,u.hash,0,g,r.treeHashes.get(u.hash)??null,n,n,Up(u.summary,u.hash,n,l)),Hp(u.summary,u.hash,l),t.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(e,u.hash);let b=t.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(u.summary.topics??[]).forEach((C,E)=>{if(!C.title){l("topic",`${u.hash}[${E}] has no title`);return}b.run(e,u.hash,E,C.category??null,C.importance??null,C.title)})}let c=t.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`);for(let d of o)c.run(e,d);Jp(t,e)}function xb(t,e,r,n){for(let[o,s]of r.aliases){if(!t.prepare("SELECT 1 AS ok FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,s)){vt.info("dropping alias %s -> %s (no such memory row)",o,s);continue}t.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(e,o,s,n)}}function Pb(t,e,r,n){let o=new Set;for(let s of r.transcriptDeletes)t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,s),t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,s),t.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,s);for(let{id:s,content:i}of r.transcriptWrites){let a=Ve(i);if(!a||!Array.isArray(a.sessions)){Yr("transcript",s);continue}t.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(e,s,(0,Bp.deflateSync)(Buffer.from(i,"utf8")),n),t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,s);for(let l of a.sessions)l.sessionId&&t.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(e,s,l.sessionId,l.source??null);o.add(s)}return o}function Ab(t,e,r,n){if(n.size===0)return;let o=new Set(r.summaryTrees.flat().map(c=>c.hash)),s=new Set(r.summaryTrees.flat().flatMap(c=>[...rr(c.summary,n)])),i=[...n].filter(c=>!s.has(c));if(i.length===0)return;let a=t.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=t.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let d=a.all(e,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let m=Ve(u.summary_json);m&&rr(m,n).includes(c)&&(l.run(e,u.commit_hash,c),vt.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function Ib(t,e,r){if(r.summaryTrees.length===0)return;let n=new Set(t.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(e).map(o=>o.transcript_id));for(let o of r.summaryTrees)for(let s of o){let i=[...new Set(rr(s.summary,n).filter(a=>n.has(a)))];for(let a of s.summary.transcripts??[])n.has(a)||vt.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(e,s.hash);for(let a of i)t.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(e,s.hash,a)}}function Db(t,e,r,n){for(let{kind:s,key:i}of r.contextDeletes)t.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(e,s,i);let o=t.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of r.contextWrites){if(s==="reference"){let d=qs(a);if(!d){Yr("reference frontmatter",`references/${i}.md`);continue}o.run(e,s,i,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,n,n);continue}let l=s==="plan"||s==="note"?vb(t,e,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(e,s,i,null,null,null,null,c,l,Fp(a),null,a,n,n)}}function Nb(t,e,r,n){for(let o of r.progressDeletes)t.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(e,o);for(let{pathSlug:o,content:s}of r.progressWrites){let i=Ve(s);if(!i){Yr("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!t.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(e,a)){vt.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}t.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(e,a,s,n)}}function Ob(t,e,r,n){for(let o of r.topicPageDeletes)t.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(e,o);for(let{slug:o,content:s}of r.topicPageWrites){let i=Ve(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){Yr("topic page",`topics/${o}.json`);continue}t.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(e,i.stableSlug,i.title,r.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),t.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(e,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{t.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of r.topicSummaries){let i=t.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,e,o);Number(i.changes)===0&&vt.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(r.processedSet!==null){let o=Ve(r.processedSet);if(!o?.processed)Yr("processed set","topics/processed.json");else{t.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(e);let s=t.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(e,i,l)}}r.v5State!==null&&t.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(e,r.v5State)}function Wp(t,e,r,n){let o=_b(r);Fi(t,()=>{t.exec("PRAGMA defer_foreign_keys = ON"),Cb(t,e,o,n),xb(t,e,o,n);let s=Pb(t,e,o,n);Ib(t,e,o),Ab(t,e,o,s),Db(t,e,o,n),Nb(t,e,o,n),Ob(t,e,o,n)})}h();function qp(t){let e=new Map;for(let r of t){if(r.parent_hash==null)continue;let n=e.get(r.parent_hash)??[];n.push(r),e.set(r.parent_hash,n)}for(let r of e.values())r.sort((n,o)=>Number(n.child_pos)-Number(o.child_pos));return e}function Yi(t,e){let r=JSON.parse(e.summary_json);return"children"in r&&(r.children=(t.get(e.commit_hash)??[]).map(n=>Yi(t,n))),r}function Lb(t,e,r){let n=t.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,r);if(!n)return;let o=(n.parent_hash===null?t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):t.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(e,n.parent_hash===null?n.root_hash:r),s=o.find(i=>i.commit_hash===r);return s?Yi(qp(o),s):void 0}function Mb(t){if(t===null)return{};try{return{diffStats:JSON.parse(t)}}catch{return{}}}var nr=class{constructor(e,r){this.repoIdentity=e;this.dbPath=r;this.kind="sqlite"}async withDb(e){return ji(r=>{let n=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!n)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return e(r,n.id)},{dbPath:this.dbPath})}async withDbOrAbsent(e,r){return ji(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?e(n,o.id):r},{dbPath:this.dbPath})}async readFile(e){return this.withDbOrAbsent((r,n)=>this.readOne(r,n,e),null)}async batchReadFiles(e){return this.withDbOrAbsent((r,n)=>{let o=new Map;for(let s of e)o.set(s,this.readOne(r,n,s));return o},new Map(e.map(r=>[r,null])))}readOne(e,r,n){let o=n.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=Lb(e,r,o[1]);return c?JSON.stringify(c,null,"	"):null}if(n==="index.json")return this.synthIndex(e,r);if(n==="catalog.json")return this.synthCatalog(e,r);if(n==="topics/index.json")return this.synthTopicIndex(e,r);if(n==="topics/processed.json")return this.synthProcessed(e,r);if(n==="schema-v5-migration.json")return e.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(r)?.value??null;let s=n.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(e,r,s[1]);let i=n.match(/^transcripts\/(.+)\.json$/);if(i){let c=e.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(r,i[1]);return c?(0,Gp.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=n.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return e.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(r,c,a[2])?.body_md??null}let l=n.match(/^plan-progress\/(.+)\.json$/);return l?e.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(r,l[1])?.artifact_json??null:null}allMemories(e,r){return e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r)}synthIndex(e,r){let n=e.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=new Map(e.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(r).map(a=>[a.root,a.n])),s=n.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Mb(a.diff_stats_json)}})),i=e.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(r);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(e,r){let n=this.allMemories(e,r);if(n.length===0)return null;let o=qp(n),s=n.filter(i=>i.parent_hash===null).map(i=>Op(Yi(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(e,r,n){return e.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(r,n).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(e,r,n){let o=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(r,n);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(e,r,n),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(e,r){let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=n.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(e,r,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(e,r){let n=e.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(r);if(n.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of n)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(e){return this.withDbOrAbsent((r,n)=>{let o=(i,a)=>r.prepare(i).all(n).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(e)).sort()},[])}async writeFiles(e,r){ye()||await $i(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);Wp(n,o.id,e,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(r),o=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(r);return{memoriesCount:n.n,memoriesNewestMs:n.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(e){return this.withDbOrAbsent((r,n)=>r.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(n,e)?.target_hash??null,null)}async findShallowestByTreeHash(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(n,e)?.commit_hash??null,null)}async findHashesByPrefix(e){return/^[0-9a-f]+$/.test(e)?this.withDbOrAbsent((r,n)=>r.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(n,e).map(s=>s.commit_hash),[]):[]}async listHeadEntries(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${e!==void 0?" AND branch = ?":""}`).all(...e!==void 0?[n,e]:[n]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(r),o=new Map;for(let s of n){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(r),o=e.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(r),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return n.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((e,r)=>e.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(r).map(o=>this.readOne(e,r,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var $b=3e3,Kp=new Map;async function Vp(t){let e=Date.now(),r=Kp.get(t);if(r&&e-r.at<$b)return r.route;let n=await Gr(t);return Kp.set(t,{route:n,at:e}),n}async function Xp(t,e,r){if(r.state==="legacy-fenced"||r.state==="cutover"){let{identity:n}=await Rt(e);return new nr(n)}return new Ke(t)}async function Yp(t){let e=t??process.cwd(),r=await Vp(e);if(r.state==="blocked")throw new Error(`storage unavailable: ${r.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return Xp(t,e,r)}async function Ro(t){let e=t??process.cwd(),r;try{r=await Vp(e)}catch(n){return{ok:!1,reason:n.message}}if(r.state==="blocked")return{ok:!1,reason:r.reason};try{return{ok:!0,state:r.state,storage:await Xp(t,e,r)}}catch(n){return{ok:!1,reason:n.message}}}var dm=require("node:path");wo();Tt();h();h();var ct=p("DualWriteStorage"),zr=class{constructor(e,r){this.primary=e;this.shadow=r;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(e){return this.primary.readFile(e)}async batchReadFiles(e){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await this.primary.readFile(n));return r}async writeFiles(e,r){if(!ye()){await this.primary.writeFiles(e,r);try{await this.shadow.writeFiles(e,r),this.shadow.clearDirty?.()}catch(n){ct.warn("Shadow write failed (folder storage): %s",n instanceof Error?n.message:String(n)),this.shadow.markDirty?.(r)}}}async deleteVisibleMarkdown(e){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return ct.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,k(r)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${e.branch}/${n}`),!1}}async regenerateVisibleMarkdown(e){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return ct.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,k(r)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${e.branch}/${n}`),!1}}async deletePlanVisible(e,r){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(e,r)}catch(n){ct.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",e,r,k(n)),this.shadow.markDirty?.(`deletePlanVisible ${r}/${e}`)}}async deleteNoteVisible(e,r){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(e,r)}catch(n){ct.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",e,r,k(n)),this.shadow.markDirty?.(`deleteNoteVisible ${r}/${e}`)}}async pruneBranchMappings(e){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(e)}catch(r){return ct.warn("Shadow pruneBranchMappings failed (folder storage): %s",k(r)),this.shadow.markDirty?.(`pruneBranchMappings ${e.length}`),0}}async healMissingVisibleMarkdown(e){let r=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!r)return{healed:0,skipped:0,failed:0};let n=e?.dropOrphanedManifestEntries??!0,o=r===this.shadow?"shadow":"primary";try{return await r.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:n})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${k(s)}`:k(s);return ct.warn("%s healMissingVisibleMarkdown failed: %s",o,a),r.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(e){return this.primary.listFiles(e)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(e){ct.warn("Shadow ensure failed: %s",e instanceof Error?e.message:String(e))}}async renderTopicWiki(e){await this.shadow.renderTopicWiki?.(e)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var P=require("node:fs"),cm=require("node:fs/promises"),I=require("node:path");h();var J=require("node:fs");var be=require("node:path");h();var jb=p("Sync:VaultSymlinkGuard");function Fb(t,e){if(!(0,be.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${e}`);if(!(0,be.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${t}`);let r=(0,be.relative)(t,e);if(r===""||r.startsWith("..")||(0,be.isAbsolute)(r))throw new Error(`assertNoSymlinksInPathSync: target ${e} is not inside vault ${t}`);let n=r.split(be.sep),o=t;for(let s=0;s<n.length-1;s++){let i=n[s];if(i===void 0||i.length===0)continue;o=`${o}${be.sep}${i}`;let a;try{a=(0,J.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw jb.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${e}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${e}).`)}}function zi(t,e,r){Fb(t,e),(0,J.mkdirSync)((0,be.dirname)(e),{recursive:!0});let n=`${e}.tmp`,o=J.constants.O_WRONLY|J.constants.O_CREAT|J.constants.O_TRUNC|J.constants.O_NOFOLLOW,s=(0,J.openSync)(n,o,420);try{typeof r=="string"?(0,J.writeSync)(s,r,void 0,"utf-8"):(0,J.writeSync)(s,r)}finally{(0,J.closeSync)(s)}(0,J.renameSync)(n,e)}ao();ne();function Hb(t){return`skills--${t}`}function To(t){return`${Hb(t)}.md`}function zp(t){let e=["| Skill | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|"],r=[...t].sort((o,s)=>{let i=Qi(s)-Qi(o);return i!==0?i:o.skill<s.skill?-1:o.skill>s.skill?1:0}),n=!1;for(let o of r){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(n=!0),e.push(`| ${Ub(o.skill)}${s} | ${o.invocationCount} | ${Jb(o).join(" | ")} |`)}return n&&e.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),e}function Qp(t){let e=`${t.length} skill${t.length===1?"":"s"}`,r=0,n=!1,o=!1;for(let s of t)s.usage!==void 0&&(n=!0,r+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return n?`${e} \xB7 ${em(r,o?"~":"")} tokens`:e}function Zp(t,e){let r=t.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${t.commitHash}`,`branch: ${t.branch}`,`generatedAt: ${t.generatedAt}`,"---","",`# Skills used \u2014 ${r}`,"",`_${t.commitMessage}_`,"",...zp(e),""].join(`
`)}
`}function Ub(t){return t.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function Qi(t){let e=t.usage;return e===void 0?0:e.input+e.cached+e.output}function Jb(t){let e=t.usage;if(e===void 0)return["\u2014","\u2014","\u2014","\u2014"];let r=e.confidence==="attributed"?"":"~";return[Qi(t),e.input,e.output,e.cached].map(n=>em(n,r))}function em(t,e){return t<1e3?`${e}${t}`:`${e}${(t/1e3).toFixed(1)}k`}function Xe(t){return t.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function tm(t){return t.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function _o(t){return t.replace(/[()\s<>"]/g,e=>e==="("?"%28":e===")"?"%29":encodeURIComponent(e))}jn();var rm=3/1e6,Bb=15/1e6,Wb=3.75/1e6;function Qr(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function nm(t){return t>=.01?`$${t.toFixed(2)}`:t>=5e-5?`$${t.toFixed(4)}`:t>0?"<$0.0001":"$0.00"}function om(t,e){return t?t.input*rm+t.output*Bb+t.cached*Wb:e*rm}function ta(t){let{topics:e,sourceNodes:r}=gp(t),n=[];return Gb(n,t),Xb(n,t,{withRelevance:!0}),qb(n,t),Yb(n,t.e2eTestGuide),zb(n,r),Zb(n,e,Qb),eE(n),n.join(`
`)}function Gb(t,e){let r=qr(e),n=r.filesChanged,o=Bi(e),s=`${n} file${n!==1?"s":""} changed, +${r.insertions} insertions, \u2212${r.deletions} deletions`,i=Ki(z(e));t.push(`# ${e.commitMessage}`,"",`- **Commit:** \`${e.commitHash}\``,`- **Branch:** \`${e.branch}\``,`- **Author:** ${e.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${ap(e)}`,`- **Changes:** ${s}`),o>0&&t.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=Wi(e);if(a>0){let c=Gi(e),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=nm(om(d,a)),m=d?` (${Qr(d.input)} input, ${Qr(d.output)} output, ${Qr(d.cached)} cached)`:"";t.push(`- **Task usage:** ${Qr(a)} tokens \xB7 ${u}${m}`)}let l=e.jolliDocUrl;l&&t.push(`- **Jolli Memory:** [${l}](${l})`),t.push("","---")}function qb(t,e){let r=e.recap?.trim();r&&t.push("","## Quick recap","",r,"","---")}function Kb(t){let e=new Map;for(let o of t){let s=e.get(o.source)??[];s.push(o),e.set(o.source,s)}let r=$n().all().map(o=>o.id),n=[];for(let o of r){let s=e.get(o);s&&(n.push(...s),e.delete(o))}for(let o of e.values())n.push(...o);return n}function Zi(t,e,r){return t.get(`${e}:${r}`)??t.get(`${e}:${r.replace(lp,"")}`)}var Vb={high:"High",mid:"Med",low:"Low"};function ea(t){return!t||t.reason===""?"":` \u2014 ${Vb[t.tier]} \xB7 ${Xe(t.reason)}`}function Xb(t,e,r){let n=e.plans??[],o=e.notes??[],s=r?.includeReferences?e.references??[]:[],i=r?.withRelevance?e.excludedContext??[]:[],a=new Map;if(r?.withRelevance)for(let u of e.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=e.skills??[],c=n.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let d=c>1?` (${c})`:"";t.push("",`## Context${d}`,"");for(let u of n){let m=u.jolliPlanDocUrl,f=ea(Zi(a,"plan",u.slug));t.push((m?`- [${Xe(u.title)}](${_o(m)})`:`- ${Xe(u.title)}`)+f)}for(let u of o){let m=u.jolliNoteDocUrl,f=ea(Zi(a,"note",u.id));t.push((m?`- [${Xe(u.title)}](${_o(m)})`:`- ${Xe(u.title)}`)+f)}for(let u of Kb(s)){let m=Xe(qi(u)),f=u.jolliReferenceDocUrl??u.url,g=ea(Zi(a,"reference",`${u.source}:${u.nativeId}`));t.push((f?`- [${m}](${_o(f)})`:`- ${m}`)+g)}if(l.length>0){let u=l.some(m=>m.detection==="heuristic")?" \xB7 some inferred":"";t.push(`- Skills used \u2014 ${Xe(Qp(l))}${u}`)}for(let u of i)t.push(`- ~~${tm(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${Xe(u.reason)}`:""}`)}function Yb(t,e){if(!(!e||e.length===0)){t.push("",`## E2E Test (${e.length})`);for(let r=0;r<e.length;r++){let n=e[r];t.push("",`### ${r+1}. ${n.title}`),n.preconditions&&t.push("",`**Preconditions:** ${n.preconditions}`),t.push("","**Steps:**");for(let o=0;o<n.steps.length;o++)t.push(`${o+1}. ${n.steps[o]}`);t.push("","**Expected Results:**");for(let o of n.expectedResults)t.push(`- ${o}`)}t.push("","---")}}function zb(t,e){if(!(e.length<=1)){t.push("",`## Source Commits (${e.length})`);for(let r of e){let n=qr(r),o=r.conversationTurns?` \xB7 ${r.conversationTurns} turns`:"";t.push(`- \`${r.commitHash.substring(0,8)}\` ${r.commitMessage}  _(+${n.insertions} \u2212${n.deletions}${o} \xB7 ${mp(z(r))})_`)}t.push("","---")}}function Qb(t,e){if(t.push("","**\u26A1 Why This Change**","",e.trigger),t.push("","**\u{1F4A1} Decisions Behind the Code**","",e.decisions),t.push("","**\u2705 What Was Implemented**","",e.response),e.todo&&t.push("","**\u{1F4CB} Future Enhancements**","",e.todo),e.filesAffected&&e.filesAffected.length>0){t.push("","**\u{1F4C1} FILES**");for(let r of e.filesAffected)t.push(`- \`${r}\``)}}function Zb(t,e,r,n={singular:"Summary",plural:"Summaries"}){if(e.length!==0){t.push("",`## ${e.length===1?n.singular:n.plural} (${e.length})`);for(let o=0;o<e.length;o++){let s=e[o],i=s.category?` \`${s.category}\``:"";t.push("",`### ${fp(o)} \xB7 ${s.title}${i}`),r(t,s)}}}function eE(t,e){let r=Ki(new Date().toISOString()),n=e?hp(e):void 0,o=n?` \xB7 via ${n}`:"";t.push("","---","",`*Generated by Jolli Memory \xB7 ${r}${o}*`)}var sm="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function im(t,e,r,n){let o=[];if(o.push(`# ${t.title}`),o.push(""),o.push(sm),o.push(""),o.push(`> **Source branches:** ${e.join(", ")}`),o.push(`> **Merged:** ${r}`),o.push(`> **Topic slug:** \`${t.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(t.content.trim()),o.push(""),t.keyDecisions&&t.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of t.keyDecisions)o.push(`- ${s}`);o.push("")}if(t.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of t.sourceCommits){let i=s.substring(0,8),a=n.resolveCommitVisiblePath(i),l=n.resolveCommitMessage(i);a&&l?o.push(`- ${ra(i,tE(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(t.relatedBranches&&t.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of t.relatedBranches){let i=n.resolveBranchFolder(s);i?o.push(`- ${ra(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function am(t){return{title:t.title,stableSlug:t.stableSlug,content:t.content,...t.relatedBranches.length>0&&{relatedBranches:[...t.relatedBranches]},sourceCommits:t.sourceRefs.filter(e=>e.type==="summary").map(e=>e.id)}}function lm(t,e){let r=[];if(r.push(`# ${e.repoName} \xB7 Knowledge Wiki`),r.push(""),r.push(sm),r.push(""),r.push(`> **${t.length} topics** in the knowledge base`),r.push(""),t.length>0){r.push("## Topics"),r.push("");for(let n of t)r.push(`- ${ra(n.title,`topic--${n.stableSlug}.md`)}`);r.push("")}return r.join(`
`)}function tE(t){return t.startsWith("./")?t.substring(2):t}function ra(t,e){let r=t.replace(/[\\[\]]/g,"\\$&"),n=e.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${r}](${n})`}var _=p("FolderStorage"),vo=class t{constructor(e,r){this.rootPath=e;this.metadataManager=r;this.kind="folder"}get vaultRoot(){return(0,I.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(e){let r=(0,I.join)(this.rootPath,".jolli",e);try{return(0,P.readFileSync)(r,"utf-8")}catch(n){let o=n.code;return o==="ENOENT"||o==="ENOTDIR"||_.warn("readFile failed for %s: %s",r,k(n)),null}}async writeFiles(e,r){if(ye())return;await this.ensure();let n=0,o=0;for(let s of e)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),n++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));_.info("Wrote %d files, deleted %d (%s)",n,o,r)}async listFiles(e){let r=(0,I.join)(this.rootPath,".jolli",e);if(!(0,P.existsSync)(r))return[];let n=(0,I.join)(this.rootPath,".jolli"),o=[];return this.walkDir(r,n,o),o.sort()}async exists(){return(0,P.existsSync)(this.rootPath)}async ensure(){(0,P.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(e){let r=(0,I.join)(this.rootPath,".jolli","shadow-status.json"),n={dirty:!0,lastFailedAt:new Date().toISOString(),message:e};try{zi(this.vaultRoot,r,JSON.stringify(n,null,"	"))}catch(o){_.warn("markDirty suppressed: %s",k(o))}}clearDirty(){let e=(0,I.join)(this.rootPath,".jolli","shadow-status.json");try{(0,P.existsSync)(e)&&(0,P.unlinkSync)(e)}catch{}}isDirty(){let e=(0,I.join)(this.rootPath,".jolli","shadow-status.json");return(0,P.existsSync)(e)}async deleteVisibleMarkdown(e){let r=t.slugify(e.commitMessage),n=e.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${e.commitHash}`,e.branch,To(n))}catch(o){_.warn("Failed to delete skills aggregate for %s: %s",n,String(o))}return this.deleteVisibleArtifact(e.commitHash,e.branch,`${r}-${n}.md`)}async deletePlanVisible(e,r){await this.deleteVisibleArtifact(`plan:${e}`,r,`plan--${e}.md`)}async deleteNoteVisible(e,r){await this.deleteVisibleArtifact(`note:${e}`,r,`note--${e}.md`)}async pruneBranchMappings(e){let r=new Map,n=new Set(e);for(let s of this.metadataManager.listBranchMappings())n.has(s.branch)&&r.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(e);return o===0?0:(await Promise.all([...r.values()].map(s=>this.rmdirIfEmpty((0,I.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(e){try{await(0,cm.rmdir)(e)}catch(r){let n=r.code;if(n==="ENOENT"||n==="ENOTEMPTY"||n==="EEXIST")return;_.warn("rmdir(%s) failed (non-fatal): %s",e,k(r))}}resolveBranchForFolder(e){return this.metadataManager.listBranchMappings().find(n=>n.folder===e)?.branch??null}async deleteVisibleArtifact(e,r,n){let o=this.metadataManager.findById(e),s=this.metadataManager.resolveFolderForBranch(r),i=o?.path??`${s}/${n}`,a=(0,I.join)(this.rootPath,i);if(!(0,P.existsSync)(a))return o&&this.metadataManager.removeFromManifest(e),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return _.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,P.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(e),_.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(e),!1;throw l}}async forceRegenerateVisibleMarkdown(e){let r=await this.readFile(`summaries/${e.commitHash}.json`);if(!r)return _.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",e.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(r)}catch(c){return _.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",e.commitHash.substring(0,8),k(c)),{ok:!1,reason:"malformed"}}let n=this.metadataManager.resolveFolderForBranch(e.branch),o=t.slugify(e.commitMessage),s=e.commitHash.substring(0,8),i=`${n}/${o}-${s}.md`,a=(0,I.join)(this.rootPath,i);if((0,P.existsSync)(a))try{(0,P.unlinkSync)(a)}catch(c){return _.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(e)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(e){let r=this.metadataManager.resolveFolderForBranch(e.branch),n=t.slugify(e.commitMessage),o=e.commitHash.substring(0,8),s=`${r}/${n}-${o}.md`,i=(0,I.join)(this.rootPath,s);if((0,P.existsSync)(i))return await this.healSkillsAggregate(e,r,o),!0;let a=await this.readFile(`summaries/${e.commitHash}.json`);if(!a)return _.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",e.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(g){return _.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",e.commitHash.substring(0,8),k(g)),!1}let c=this.buildYamlFrontmatter(l),d=ta(l),u=`${c}
${d}`;this.atomicWrite(i,u);let m=this.metadataManager.findById(e.commitHash),f=ee.sha256(u);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:f,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:m?.title??l.commitMessage}),this.generateSkillsAggregate(l,r,o),_.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(e){let n=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of n){let d=(0,I.join)(this.rootPath,c.path);if((0,P.existsSync)(d)){s++;continue}let u=(0,I.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),m;try{m=(0,P.readFileSync)(u,"utf-8")}catch(O){let B=O.code;if(B==="ENOENT"){i++,e?.dropOrphanedManifestEntries?(a.push(c.fileId),_.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):_.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,_.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),B??"?",k(O));continue}let f;try{f=JSON.parse(m)}catch(O){i++,_.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),k(O));continue}let g=this.metadataManager.resolveFolderForBranch(f.branch),b=t.slugify(f.commitMessage),C=f.commitHash.substring(0,8),E=`${g}/${b}-${C}.md`;if(E!==c.path){s++,_.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,E);continue}let N={commitHash:f.commitHash,parentCommitHash:null,commitMessage:f.commitMessage,commitDate:f.commitDate,branch:f.branch,generatedAt:f.generatedAt};try{await this.regenerateVisibleMarkdown(N)?o++:(i++,_.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(O){i++,_.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),k(O))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&_.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(e){if(e.length===0)return[];let r=new Set(e),n=this.metadataManager.readManifest(),o=n.files.filter(i=>r.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=n.files.filter(i=>!r.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(e,r){if(!(0,P.existsSync)(e)||!r)return!1;let n;try{n=ee.sha256((0,P.readFileSync)(e,"utf-8"))}catch(o){return _.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",e,String(o)),!0}return n!==r}generateSummaryMarkdown(e){let r;try{r=JSON.parse(e)}catch{return}let n=this.metadataManager.resolveFolderForBranch(r.branch),o=t.slugify(r.commitMessage),s=r.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${n}/${i}`,l=this.buildYamlFrontmatter(r),c=ta(r),d=`${l}
${c}`,u=(0,I.join)(this.rootPath,a),m=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,m?.fingerprint)){_.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let f=ee.sha256(d);this.metadataManager.updateManifest({path:a,fileId:r.commitHash,type:"commit",fingerprint:f,source:{commitHash:r.commitHash,branch:r.branch,generatedAt:r.generatedAt},title:r.commitMessage}),_.info("Markdown generated: %s",a),this.generateSkillsAggregate(r,n,s),r.children&&r.children.length>0&&this.cleanupSupersededDescendants(r.children,a)}async healSkillsAggregate(e,r,n){if((0,P.existsSync)((0,I.join)(this.rootPath,r,To(n))))return;let o=await this.readFile(`summaries/${e.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),r,n)}catch{}}generateSkillsAggregate(e,r,n){let o=e.skills;if(o===void 0||o.length===0)return;let s=`${r}/${To(n)}`,i=(0,I.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){_.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=Zp(e,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${e.commitHash}`,type:"skill",fingerprint:ee.sha256(l),source:{commitHash:e.commitHash,branch:e.branch,generatedAt:e.generatedAt},title:`Skills used \u2014 ${n}`}),_.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(e,r){let n=[];t.collectDescendantHashes(e,n);for(let o of n){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===r)continue;let i=(0,I.join)(this.rootPath,s.path);if(!(0,P.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){_.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){_.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,P.unlinkSync)(i),this.metadataManager.removeFromManifest(o),_.info("Cleaned up superseded MD: %s",s.path)}catch(a){_.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(e,r){for(let n of e)r.push(n.commitHash),n.children&&n.children.length>0&&t.collectDescendantHashes(n.children,r)}buildYamlFrontmatter(e){let r=["---"];return r.push(`commitHash: ${e.commitHash}`),r.push(`branch: ${e.branch}`),r.push(`author: ${e.commitAuthor}`),r.push(`date: ${e.commitDate}`),r.push("type: commit"),e.commitType&&r.push(`commitType: ${e.commitType}`),e.stats&&(r.push(`filesChanged: ${e.stats.filesChanged}`),r.push(`insertions: ${e.stats.insertions}`),r.push(`deletions: ${e.stats.deletions}`)),r.push("---"),r.join(`
`)}async regenerateVisiblePlan(e,r){let n=await this.readFile(`plans/${e}.md`);if(!n)return _.warn("regenerateVisiblePlan: hidden plans/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),s=(0,I.join)(this.rootPath,o,`plan--${e}.md`);if((0,P.existsSync)(s))try{(0,P.unlinkSync)(s)}catch(i){return _.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${e}.md`,n,r),!0}generatePlanMarkdown(e,r,n){let o=e.replace(/^plans\//,"").replace(/\.md$/,""),s=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${r}`,d=(0,I.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){_.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let m=ee.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:m,updatedAt:new Date().toISOString(),source:n?{branch:n}:{},title:this.extractTitle(r)??o}),_.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(e,r){let n=await this.readFile(`notes/${e}.md`);if(!n)return _.warn("regenerateVisibleNote: hidden notes/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),s=(0,I.join)(this.rootPath,o,`note--${e}.md`);if((0,P.existsSync)(s))try{(0,P.unlinkSync)(s)}catch(i){return _.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${e}.md`,n,r),!0}generateNoteMarkdown(e,r,n){let o=e.replace(/^notes\//,"").replace(/\.md$/,""),s=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${r}`,d=(0,I.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){_.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let m=ee.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:m,source:n?{branch:n}:{},title:this.extractTitle(r)??o,updatedAt:new Date().toISOString()}),_.info("Note markdown generated: %s",a)}resolveBranchFromSlug(e){let r=e.split("-").at(-1);if(r.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(r));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,I.join)(this.rootPath,".jolli","index.json");if((0,P.existsSync)(s))try{let a=JSON.parse((0,P.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(r));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(e){let r=e.match(/^#\s+(.+)/m);return r?r[1].trim():null}writeHiddenFile(e,r){let n=(0,I.join)(this.rootPath,".jolli",e);this.atomicWrite(n,r)}deleteHiddenFile(e){let r=(0,I.join)(this.rootPath,".jolli",e);if(!(0,P.existsSync)(r))return!1;try{return(0,P.unlinkSync)(r),!0}catch{return!1}}walkDir(e,r,n){for(let o of(0,P.readdirSync)(e,{withFileTypes:!0})){let s=(0,I.join)(e,o.name);o.isDirectory()?this.walkDir(s,r,n):n.push(ve((0,I.relative)(r,s)))}}async renderTopicWiki(e){let r=(0,I.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(r);let n=this.buildWikiRenderContext();(0,P.mkdirSync)(r,{recursive:!0});let o=[];for(let s of e)try{let i=am(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=im(i,s.relatedBranches,s.lastUpdatedAt,n);this.atomicWrite((0,I.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:ee.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){_.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,k(i))}try{let s=lm(o,n),i="_wiki/_index.md";this.atomicWrite((0,I.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:ee.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${n.repoName} Knowledge Wiki`})}catch(s){_.warn("renderTopicWiki: failed to render index: %s",k(s))}_.info("Topic-KB wiki regenerated: %d topics under %s",e.length,r)}isTopicWikiPresent(){return(0,P.existsSync)((0,I.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(e){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,P.existsSync)(e))try{for(let r of(0,P.readdirSync)(e))if(r.endsWith(".md"))try{(0,P.unlinkSync)((0,I.join)(e,r))}catch(n){_.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",r,k(n))}}catch(r){_.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",e,k(r))}}buildWikiRenderContext(){let e=this.metadataManager.readConfig(),r=this.metadataManager.listBranchMappings(),n=new Map(r.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:e.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>n.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(e,r){zi(this.vaultRoot,e,r)}static slugify(e){let r=e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return r.length>50&&(r=r.substring(0,50).replace(/-+$/,"")),r||"untitled"}};Yt();ao();le();var Co=p("StorageFactory");async function na(t,e){let r;try{r=await Se()}catch(a){Co.warn("Failed to load config, falling back to defaults: %s",a.message),r={}}r.storageMode!==void 0&&Co.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",r.storageMode);let n=r.localFolder,o=await Gr(t);if(Co.info("StorageFactory.create: route=%s, projectPath=%s",o.state,t),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await Rt(t),l=new nr(a);return Ci(t,n)?new zr(l,um(t,n)):l}if(!Ci(t,n))return Co.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",t),new Ke(e);let s=new Ke(e),i=um(t,n);return new zr(s,i)}function um(t,e){let r=kd(t),n=_d(t),o=Ed(r,n,e),s=new ee((0,dm.join)(o,".jolli"));return new vo(o,s)}var pe=p("SchemaV5Migration"),mm="schema-v5-migration.json",pm=3e4;async function oa(t,e){let n=await(e??await na(t??process.cwd(),t)).readFile(mm);if(!n)return null;try{return JSON.parse(n)}catch(o){return pe.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function rE(t,e,r){if(An(t))return await r();if(!await Cs(t,{timeoutMs:pm}))throw new Error(`${e}: could not acquire orphan-write lock within ${pm}ms`);try{return await In(t,r)}finally{await xs(t)}}async function fm(t){let e=await na(t??process.cwd(),t),r=await oa(t,e);return r?.status==="completed"?(pe.info("Schema v5 migration already completed at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0}):await e.exists()?rE(t,"migrateSchemaToV5",()=>oE(t,e)):(pe.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function nE(t,e){if(e.length===0)return new Map;if(t.batchReadFiles)return t.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await t.readFile(n));return r}async function oE(t,e){let r=await oa(t,e);if(r?.status==="completed")return pe.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0};let n=new Date().toISOString(),o=await Ro(t),s=o.ok&&o.state==="uncutover"?await j(["rev-parse",`refs/heads/${ge}`],t).then(V=>V.stdout.trim()).catch(()=>null):null,i=await e.listFiles("summaries/");pe.info("Found %d summary files to inspect",i.length);let a=await e.listFiles("transcripts/"),l=new Set;for(let V of a){let $e=Vi(V);$e&&l.add($e)}pe.info("Reading %d summaries...",i.length);let c=Date.now(),d=await nE(e,i);pe.info("Read %d summaries in %d ms",d.size,Date.now()-c);let u=[],m=[],f=0,g=0;for(let V of i){let $e=d.get(V);if($e===void 0)throw new Error(`readSummaries omitted ${V} \u2014 protocol contract violation (expected one entry per request)`);if($e===null){g++;continue}let Ot;try{Ot=JSON.parse($e)}catch(yn){pe.warn("Skipping unparseable summary %s: %s",V,yn.message),g++;continue}let yr=sE(Ot,l),wr=JSON.stringify(yr,null,"	");if(m.push({path:V,content:wr}),yr===Ot){g++;continue}u.push({path:V,content:wr}),f++}let b=i.length===0,C=f===0&&g>0,E=C?m:u,N=b?"Schema v5 migration: no pre-v5 data found":C?`Schema v5 migration: re-pushing ${g} v5 summaries to heal storage shadow`:`Schema v5 migration: ${f} upgraded, ${g} skipped`,O=Date.now();if(E.length>0&&(pe.info("Writing %d summary file(s) via active storage...",E.length),await e.writeFiles(E,N)),e.isDirty?.()??!1)return pe.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",f,g,Date.now()-O),{migrated:f,skipped:g,fresh:b,alreadyDone:!1};let Qe={version:1,status:"completed",startedAt:n,completedAt:new Date().toISOString(),migratedCount:f,skippedCount:g,fresh:b};return await e.writeFiles([{path:mm,content:JSON.stringify(Qe,null,"	")}],N),pe.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",f,g,b,C,Date.now()-O),s&&pe.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:f,skipped:g,fresh:b,alreadyDone:!1}}function sE(t,e){if(t.version>=5&&t.transcripts!==void 0)return t;let r=Ap(t);if(r.transcripts!==void 0)return{...r,version:5};let o=Kr(r).filter(i=>e.has(i));return{...r,version:5,transcripts:o}}le();h();var or=require("node:fs/promises"),Zr=require("node:path");se();async function sa(t){let e=(0,Zr.join)(t,".claude"),r=(0,Zr.join)(e,"settings.local.json"),n=Ue("stop"),o=Ue("session-start");await hm(t);let s={},i;try{i=await(0,or.readFile)(r,"utf-8"),s=JSON.parse(i)}catch(f){if(f.code!=="ENOENT")throw f}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=Gn(l);d.push({hooks:[{type:"command",command:n,async:!0}]});let u=bt(c,Bn);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,s.hooks=a;let m=JSON.stringify(s,null,"	");return i===m?{path:r}:(await(0,or.mkdir)(e,{recursive:!0}),await A(r,m),{path:r})}async function hm(t){let e=(0,Zr.join)(t,".claude","settings.json"),r;try{let i=await(0,or.readFile)(e,"utf-8");r=JSON.parse(i)}catch{return}let n=r.hooks;if(!n)return;let o=n.Stop??[];if(!Qs(o))return;let s=Gn(o);s.length===0?delete n.Stop:n.Stop=s,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await A(e,JSON.stringify(r,null,"	"))}async function ia(t){await hm(t);let e=(0,Zr.join)(t,".claude","settings.local.json"),r;try{let l=await(0,or.readFile)(e,"utf-8");r=JSON.parse(l)}catch{return{}}let n=r.hooks;if(!n)return{};let o=n.Stop??[],s=Qs(o);if(s){let l=Gn(o);l.length===0?delete n.Stop:n.Stop=l}let i=n.SessionStart??[],a=Nr(i,Bn);if(a){let l=bt(i,Bn);l.length===0?delete n.SessionStart:n.SessionStart=l}return!s&&!a?{}:(Object.keys(n).length===0?delete r.hooks:r.hooks=n,await A(e,JSON.stringify(r,null,"	")),{})}var xt=require("node:fs/promises"),yh=require("node:os"),cn=require("node:path");se();h();var ph=require("node:crypto"),lr=require("node:fs"),xa=require("node:fs/promises"),Bo=require("node:os"),Ye=require("node:path");h();var ym=require("node:fs"),Po=require("node:fs/promises"),wm=require("node:os"),Ct=require("node:path"),Sm=require("node:url");se();h();var iE=/^[a-z0-9][a-z0-9-]*$/;function en(t){return iE.test(t)}var xo=p("DistPathWriter");async function tn(t,e,r,n){if(!en(t))return xo.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(t)),!1;let o=e??(0,Ct.dirname)((0,Sm.fileURLToPath)(__jmImportMetaUrl)),s=r??"0.99.13",i=(0,Ct.join)(n??(0,Ct.join)((0,wm.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,Ct.join)(i,t);try{await(0,Po.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,Po.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&gm(u))&&!gm(o))return xo.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",t,d,o),!0}return c!==l&&await A(a,l),xo.info("Wrote dist-paths/%s (version=%s, distDir=%s)",t,s,o),!0}catch(l){return xo.warn("Failed to write dist-paths/%s: %s",t,l.message),!1}}var aE=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function gm(t){return aE.every(e=>(0,ym.existsSync)((0,Ct.join)(t,e)))}var ar=Mt(dh(),1);function Jo(t,e){if(t.includes("-")||t.includes("+")||e.includes("-")||e.includes("+")){let i=c=>{let d=(0,ar.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,ar.coerce)(c)?.version??null:null)},a=i(t),l=i(e);if(a&&l)return(0,ar.compare)(a,l);if(a)return 1;if(l)return-1}let r=/^\d+(\.\d+)*$/.test(t),n=/^\d+(\.\d+)*$/.test(e);if(!r&&!n)return 0;if(!r)return-1;if(!n)return 1;let o=t.split(".").map(Number),s=e.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var Ca=p("DistPathResolver"),mT=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function Pa(t){let e=t.replace(/\\/g,"/");for(let[n,o]of mT)if(e.includes(n))return o;let r=e.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return r?.[1]?r[1].toLowerCase():(0,ph.createHash)("sha256").update(t).digest("hex").slice(0,8)}function mh(t){try{let r=(0,lr.readFileSync)(t,"utf-8").trim().split(`
`).map(s=>s.trim());if(r.length<2)return null;let n=r[0],o=r[r.length-1];if(!o)return null;if(n.startsWith("source=")){let s=n.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:n,distDir:o}}catch{return null}}function ln(t){let e=(0,Ye.join)(t??(0,Ye.join)((0,Bo.homedir)(),".jolli","jollimemory"),"dist-paths"),r;try{r=(0,lr.readdirSync)(e).sort()}catch{return[]}let n=[];for(let o of r){let s=(0,Ye.join)(e,o),i=mh(s);i&&n.push({source:o,version:i.version,distDir:i.distDir,available:(0,lr.existsSync)(i.distDir)})}return n}async function fh(t){let e=(0,Ye.join)(t??(0,Ye.join)((0,Bo.homedir)(),".jolli","jollimemory"),"dist-paths"),r=[];for(let n of ln(t))if(!n.available)try{await(0,xa.unlink)((0,Ye.join)(e,n.source)),r.push(n.source),Ca.info("Pruned stale dist-paths/%s (dir gone: %s)",n.source,n.distDir)}catch(o){Ca.warn("Failed to prune stale dist-paths/%s: %s",n.source,o.message)}return r}var Aa=["cli","vscode","cursor"];function Wo(t){let e=t.filter(o=>o.available);if(e.length===0)return;let r=e[0];for(let o=1;o<e.length;o++)Jo(e[o].version,r.version)>0&&(r=e[o]);let n=e.filter(o=>Jo(o.version,r.version)===0);for(let o of Aa){let s=n.find(i=>i.source===o);if(s)return s}return r}async function hh(){let t=(0,Ye.join)((0,Bo.homedir)(),".jolli","jollimemory"),e=(0,Ye.join)(t,"dist-path"),r=mh(e);if(!r)return!1;let n;if(r.source==="cli")n="cli";else{let o=Pa(r.distDir);n=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return n==="vscode-extension"&&(n="vscode"),await tn(n,r.distDir,r.version),await(0,xa.unlink)(e).catch(()=>{}),Ca.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",n,r.version,r.distDir),!0}var gh=p("DispatchScripts"),fT=`#!/bin/bash
# JolliMemory dist-path resolver.
# Outputs the absolute path to the current winning dist directory: the highest
# core version across all registered sources whose path exists. Ties (same core
# version) are broken by a preference list (cli > vscode > cursor > \u2026) because
# the bundled @jolli.ai/cli core is identical at equal versions \u2014 the tie-break
# only makes the winner deterministic and favours the canonical CLI build.
#
# When JOLLI_DIST_PREFER_SOURCE is set (for example by Claude Plugin CLI
# commands), that source is SOFT-preferred: it wins a
# version TIE \u2014 selected only if present, complete, and already at the top version
# BEST_VER \u2014 but never beats a strictly-higher version from another source, and a
# missing / incomplete / older prefer silently falls through to normal cross-source
# selection below. This replaces the former hard pin (resolve-only-that-source-or-
# fail) so every install source competes on version.
#
# Optional arg $1 = a required script filename (e.g. "PrepareMsgHook.js"). When
# given, a candidate dist is eligible ONLY if it actually contains that file, so
# an INCOMPLETE source that wins on version is skipped and resolution falls
# through to the next-best complete source. Without this, a source registered
# with a partial dist (e.g. the Claude Code plugin before it bundled the git-hook
# scripts) would win, and run-hook would 'node <dist>/PrepareMsgHook.js' a
# missing file \u2014 non-zero exit that BLOCKS the commit. Callers that don't care
# (run-cli baking, external tools) omit the arg and get the legacy dir-only check.
#
# Stable public API: run-hook, run-cli, legacy hooks still on disk, and
# third-party tools all rely on this script's "output a path, exit 0/1"
# contract.
#
# EVERY command below is a bash builtin \u2014 no sed, no sort, no grep. This script
# runs on the front of every hook dispatch, including the SessionStart hook a user
# waits on before Claude Code gives them a prompt. The previous form spent two
# 'sed' processes per registered source plus a four-process 'printf | sort -V |
# tail | grep' pipeline per version comparison: ~40 processes and ~60 ms of pure
# fork/exec to read a dozen two-line files. It is now ~5 ms. Keep it fork-free \u2014
# a single innocuous-looking pipeline here is paid by every git hook and every
# session start.

DIR="$HOME/.jolli/jollimemory"
REQUIRED="$1"
PREFER="$JOLLI_DIST_PREFER_SOURCE"
BEST_PATH=""
BEST_VER="0.0.0"

# has_required <distDir> \u2014 true when no file is required, or the required file
# exists inside the candidate dist. Keeps the eligibility test in one place so
# both passes stay in lockstep.
has_required() {
  [ -z "$REQUIRED" ] && return 0
  [ -f "$1/$REQUIRED" ]
}

# read_entry <file> \u2014 sets ENTRY_VER / ENTRY_PATH from a two-line registration.
# 'read' is a builtin, so this replaces two 'sed' processes per source. A final
# line with no trailing newline (which is how these files are actually written)
# still populates the variable even though 'read' reports failure, hence the
# unconditional 'return 0'. The CR strip mirrors run-hook's node-path reader: a
# file round-tripped through a Windows-side sync would otherwise fail the -d test
# with no diagnostic anywhere.
read_entry() {
  ENTRY_VER=""
  ENTRY_PATH=""
  [ -f "$1" ] || return 1
  { IFS= read -r ENTRY_VER; IFS= read -r ENTRY_PATH; } < "$1"
  ENTRY_VER="\${ENTRY_VER%$'\\r'}"
  ENTRY_PATH="\${ENTRY_PATH%$'\\r'}"
  return 0
}

# ver_gt <a> <b> \u2014 true when version <a> sorts strictly ABOVE <b>.
#
# Replaces 'sort -V' with dotted-numeric comparison over the first three fields,
# which is the shape every version here has (dev/unknown are normalised to 0.0.0
# by the caller). It also CLOSES a documented divergence rather than adding one:
# 'sort -V' ranks 1.0.0-rc.1 above 1.0.0, while semver \u2014 and the in-process
# compareSemver in cli/src/install/DistPathResolver.ts this script must agree
# with \u2014 rank a prerelease below its own release.
#
# The prerelease tail is compared too, not stripped. Dropping it would make
# 1.0.0-rc.1 and 1.0.0-rc.2 compare EQUAL in both directions, and since an equal
# version never displaces the incumbent, the winner would fall out of readdir
# order \u2014 hooks silently routed to the older of two prereleases. Rules are
# semver's: identifier by identifier, numerically when both are numeric, and a
# longer identifier list wins when every shared one is equal.
#
# Build metadata is stripped FIRST, which is both what semver requires (it takes
# no part in precedence) and the only way the numeric scrub below stays honest:
# the third field of 1.0.0+b1 is '0+b1', and scrubbing non-digits out of that
# yields '01' \u2014 so without this the version compared EQUAL to 1.0.1 and ABOVE a
# plain 1.0.0, where compareSemver says below and equal. That is exactly the
# equal-compare shape described above, with readdir order deciding the winner.
ver_gt() {
  # LC_ALL is local so the string comparison below is byte order everywhere. It is
  # an assignment, not a subprocess: bash re-inits its collation on it and restores
  # the caller's on return.
  local av="\${1%%+*}" bv="\${2%%+*}" a b apre="" bpre="" i x y ap bp ai bi LC_ALL=C
  a="\${av%%-*}"
  b="\${bv%%-*}"
  [ "$a" != "$av" ] && apre=1
  [ "$b" != "$bv" ] && bpre=1
  for i in 1 2 3; do
    x="\${a%%.*}"
    y="\${b%%.*}"
    # Backstop for anything else non-numeric that reaches a field (a hand-edited
    # registration, a tag we do not know); build metadata is already gone by here.
    x="\${x//[!0-9]/}"
    y="\${y//[!0-9]/}"
    [ -z "$x" ] && x=0
    [ -z "$y" ] && y=0
    [ "$x" -gt "$y" ] && return 0
    [ "$x" -lt "$y" ] && return 1
    case "$a" in *.*) a="\${a#*.}" ;; *) a=0 ;; esac
    case "$b" in *.*) b="\${b#*.}" ;; *) b=0 ;; esac
  done
  # Numerically equal. A release outranks its own prerelease; two releases are
  # equal; two prereleases fall through to their identifiers.
  [ -z "$apre" ] && [ -n "$bpre" ] && return 0
  [ -n "$apre" ] && [ -z "$bpre" ] && return 1
  [ -z "$apre" ] && return 1
  ap="\${av#*-}"
  bp="\${bv#*-}"
  while [ -n "$ap" ] || [ -n "$bp" ]; do
    ai="\${ap%%.*}"
    bi="\${bp%%.*}"
    # Ran out of identifiers: the shorter list is the lower version (rc < rc.1).
    [ -z "$ai" ] && return 1
    [ -z "$bi" ] && return 0
    case "$ai$bi" in
      # Either side non-numeric: byte order, which puts digits below letters and
      # so agrees with semver's "numeric identifiers rank below alphanumeric".
      *[!0-9]*)
        [[ "$ai" > "$bi" ]] && return 0
        [[ "$ai" < "$bi" ]] && return 1
        ;;
      *)
        [ "$ai" -gt "$bi" ] && return 0
        [ "$ai" -lt "$bi" ] && return 1
        ;;
    esac
    case "$ap" in *.*) ap="\${ap#*.}" ;; *) ap="" ;; esac
    case "$bp" in *.*) bp="\${bp#*.}" ;; *) bp="" ;; esac
  done
  return 1
}

# Pass 1 \u2014 highest core version wins. The comparison is STRICT greater-than: an
# equal version does NOT overwrite, so enumeration (alphabetical) order never
# decides a tie.
if [ -d "$DIR/dist-paths" ]; then
  for f in "$DIR/dist-paths"/*; do
    read_entry "$f" || continue
    VER="$ENTRY_VER"
    CANDIDATE="$ENTRY_PATH"
    [ -z "$VER" ] && continue
    [ -d "$CANDIDATE" ] || continue
    has_required "$CANDIDATE" || continue
    case "$VER" in
      dev|unknown) VER_CMP="0.0.0" ;;
      *)           VER_CMP="$VER" ;;
    esac
    if [ -z "$BEST_PATH" ]; then
      BEST_PATH="$CANDIDATE"
      BEST_VER="$VER_CMP"
    elif ver_gt "$VER_CMP" "$BEST_VER"; then
      BEST_PATH="$CANDIDATE"
      BEST_VER="$VER_CMP"
    fi
  done
fi

# Soft prefer \u2014 when JOLLI_DIST_PREFER_SOURCE names a source (the Claude Code
# plugin sets it to "claude-plugin" for its CLI recipes), that source WINS a
# version tie ahead of the global preference order below: it is chosen only if it is
# present, complete, AND already at the top version BEST_VER. A strictly-higher
# version elsewhere has already won BEST_VER in Pass 1, so prefer never overrides it;
# a missing / incomplete / older prefer falls through to Pass 2. This is the soft
# replacement for the former hard pin \u2014 every source still competes on version.
if [ -n "$BEST_PATH" ] && [ -n "$PREFER" ]; then
  if read_entry "$DIR/dist-paths/$PREFER"; then
    PVER="$ENTRY_VER"
    PPATH="$ENTRY_PATH"
    case "$PVER" in dev|unknown) PVER="0.0.0" ;; esac
    if [ -d "$PPATH" ] && has_required "$PPATH" && [ "$PVER" = "$BEST_VER" ]; then
      echo "$PPATH"
      exit 0
    fi
  fi
fi

# Pass 2 \u2014 among sources tied at BEST_VER, prefer the order below (kept in lockstep
# with SOURCE_PREFERENCE_ORDER in DistPathResolver.ts). Only overrides when the
# preferred source carries the same top version AND is itself complete (has the
# required file, if any) \u2014 a preferred-but-incomplete source must not displace the
# complete pass-1 winner.
if [ -n "$BEST_PATH" ]; then
  for pref in ${Aa.join(" ")}; do
    read_entry "$DIR/dist-paths/$pref" || continue
    PVER="$ENTRY_VER"
    PPATH="$ENTRY_PATH"
    [ -d "$PPATH" ] || continue
    has_required "$PPATH" || continue
    case "$PVER" in dev|unknown) PVER="0.0.0" ;; esac
    if [ "$PVER" = "$BEST_VER" ]; then
      BEST_PATH="$PPATH"
      break
    fi
  done
fi

if [ -n "$BEST_PATH" ]; then
  echo "$BEST_PATH"
else
  echo "ERROR: No valid Jolli Memory dist-path found. Run 'jolli enable' to fix." >&2
  exit 1
fi
`,hT=`#!/bin/bash
# JolliMemory hook runner.
# Takes a hook-type argument; execs the corresponding node hook entry in the
# winning dist (selected by resolve-dist-path).
#
# The hook-type \u2192 script name is resolved FIRST, then passed to resolve-dist-path
# so it can skip any winning-but-incomplete dist that lacks this specific script
# and fall through to a complete source. This is what stops a partial source
# (e.g. a plugin bundle missing PrepareMsgHook.js) from turning a commit hook into
# 'node <missing file>' \u2014 a non-zero exit that would BLOCK the git operation.

HOOK_TYPE="$1"
shift

# Both failure exits below are otherwise completely silent by design (hooks must
# never block git), which means a dispatch failure \u2014 e.g. a dist mid-reinstall
# and briefly missing a required script \u2014 leaves no trace anywhere: no debug.log
# entry (Node never starts), no queue file, nothing. This breadcrumb is the one
# place such a failure becomes visible after the fact. It's overwritten on every
# invocation (last-failure only, not an append log) and cleared on the next
# successful dispatch, so its mere existence means "the most recent hook run
# failed," not "a hook failed at some point in history."
BREADCRUMB="$HOME/.jolli/jollimemory/last-hook-dispatch-failure"
write_dispatch_failure() {
  printf '%s %s %s cwd=%s\\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$1" "$2" "$PWD" > "$BREADCRUMB"
}

case "$HOOK_TYPE" in
  post-commit)        SCRIPT="PostCommitHook.js" ;;
  post-merge)         SCRIPT="PostMergeHook.js" ;;
  post-rewrite)       SCRIPT="PostRewriteHook.js" ;;
  prepare-commit-msg) SCRIPT="PrepareMsgHook.js" ;;
  pre-push)           SCRIPT="PrePushHook.js" ;;
  stop)               SCRIPT="StopHook.js" ;;
  session-start)      SCRIPT="SessionStartHook.js" ;;
  gemini-after-agent) SCRIPT="GeminiAfterAgentHook.js" ;;
  *)                  echo "ERROR: unknown hook type '$HOOK_TYPE'" >&2; exit 0 ;;
esac

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" "$SCRIPT") || {
  write_dispatch_failure "$HOOK_TYPE" "no-valid-dist"
  exit 0
}

# Resolve a usable node binary. The caller's PATH comes first so interactive
# shells keep their own version-manager choice (nvm/volta/fnm/\u2026). GUI git
# clients launch git with a minimal PATH that lacks those locations, so when
# PATH has no node, fall back to the runtime the IDE detected and recorded in
# node-path (one absolute path per line; its writer already proved the binary
# runs and meets the minimum version, so an -x check is enough here \u2014 never
# spawn 'node --version' on this path: prepare-commit-msg is blocking).
NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
else
  # tr -d '\r' strips a CR the file might have picked up from a Windows-side
  # sync (iCloud/Dropbox/OneDrive) or Notepad round-trip: without it, [ -x
  # "/abs/path\r" ] would fail and the dispatcher would silently no-op on a
  # machine that clearly has Node \u2014 a debug hazard with no user-visible error.
  RECORDED=$(sed -n '1p' "$HOME/.jolli/jollimemory/node-path" 2>/dev/null | tr -d '\r')
  if [ -n "$RECORDED" ] && [ -x "$RECORDED" ]; then
    NODE_BIN="$RECORDED"
  fi
fi

if [ -z "$NODE_BIN" ]; then
  echo "ERROR: node runtime not found. Jolli Memory hooks require Node.js." >&2
  write_dispatch_failure "$HOOK_TYPE" "no-node-runtime"
  exit 0
fi

# Guarded on existence because rm is NOT a shell builtin: unconditional, this
# costs a fork+exec on EVERY dispatch, including prepare-commit-msg, which runs
# on the blocking commit path this file is otherwise careful to keep spawn-free.
# The test operator IS a builtin, so the common case (no prior failure) now
# costs nothing, and the || : keeps a failed removal from ending the script
# non-zero. exec follows immediately, so the guard's own false exit status
# (1, when no breadcrumb exists) is never observable.
[ -e "$BREADCRUMB" ] && { rm -f "$BREADCRUMB" || :; }
exec "$NODE_BIN" "$DIST/$SCRIPT" "$@"
`,gT=`#!/bin/bash
# JolliMemory CLI runner.
# Execs node on the winning dist's Cli.js with all args passed through.
# Requires the winning dist to actually contain Cli.js (every real dist does),
# so a partial source can't win run-cli either.

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" Cli.js) || exit 1

# Node resolution mirrors run-hook: PATH first (respects the user's own
# version-manager choice), then the IDE-recorded runtime for GUI clients
# whose minimal PATH lacks node. See run-hook for the full rationale.
NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
else
  # tr -d '\r' strips a CR the file might have picked up from a Windows-side
  # sync (iCloud/Dropbox/OneDrive) or Notepad round-trip: without it, [ -x
  # "/abs/path\r" ] would fail and the dispatcher would silently no-op on a
  # machine that clearly has Node \u2014 a debug hazard with no user-visible error.
  RECORDED=$(sed -n '1p' "$HOME/.jolli/jollimemory/node-path" 2>/dev/null | tr -d '\r')
  if [ -n "$RECORDED" ] && [ -x "$RECORDED" ]; then
    NODE_BIN="$RECORDED"
  fi
fi

if [ -z "$NODE_BIN" ]; then
  echo "ERROR: node runtime not found. Jolli Memory CLI requires Node.js." >&2
  exit 1
fi

exec "$NODE_BIN" "$DIST/Cli.js" "$@"
`;async function Ia(t,e){let r=!1;try{r=await(0,xt.readFile)(t,"utf-8")===e}catch{}if(r){await(0,xt.chmod)(t,493);return}await A(t,e),await(0,xt.chmod)(t,493)}async function Da(){let t=(0,cn.join)((0,yh.homedir)(),".jolli","jollimemory");try{return await(0,xt.mkdir)(t,{recursive:!0}),await Ia((0,cn.join)(t,"resolve-dist-path"),fT),await Ia((0,cn.join)(t,"run-hook"),hT),await Ia((0,cn.join)(t,"run-cli"),gT),gh.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",t),!0}catch(e){return gh.warn("Failed to write resolve scripts: %s",e.message),!1}}var un=require("node:fs/promises"),Go=require("node:path");se();h();var wh=p("GeminiHookInstaller");async function Na(t){let e=(0,Go.join)(t,".gemini"),r=(0,Go.join)(e,"settings.json"),n=Ue("gemini-after-agent"),o={},s;try{s=await(0,un.readFile)(r,"utf-8"),o=JSON.parse(s)}catch(d){if(d.code!=="ENOENT")throw d}let i=o.hooks??{},a=i.AfterAgent??[],l=bt(a,Wn);l.push({hooks:[{type:"command",command:n,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:r}:(await(0,un.mkdir)(e,{recursive:!0}),await A(r,c),wh.info("Gemini AfterAgent hook installed"),{path:r})}async function Oa(t){let e=(0,Go.join)(t,".gemini","settings.json"),r;try{let i=await(0,un.readFile)(e,"utf-8");r=JSON.parse(i)}catch{return}let n=r.hooks;if(!n)return;let o=n.AfterAgent??[];if(!Nr(o,Wn))return;let s=bt(o,Wn);s.length===0?delete n.AfterAgent:n.AfterAgent=s,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await A(e,JSON.stringify(r,null,"	")),wh.info("Gemini AfterAgent hook removed")}var Pt=require("node:fs/promises"),ze=require("node:path");se();h();we();var he=p("GitExclude"),dn="# >>> jolli skill exclude >>>",pn="# <<< jolli skill exclude <<<";function yT(t,e){return ze.win32.isAbsolute(t)||ze.posix.isAbsolute(t)?t:(0,ze.join)(e,t)}var Sh=new Map;async function La(t){let e=Sh.get(t);if(e!==void 0)return e;try{let{stdout:r}=await jt("git",["rev-parse","--git-path","info/exclude"],{cwd:t}),n=r.trim();if(n.length===0)return null;let o=yT(n,t);return Sh.set(t,o),o}catch{return null}}async function bh(t,e){let r=await La(t);if(!r)return he.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,Pt.readFile)(r,"utf-8")}catch(i){if(i.code!=="ENOENT")return he.warn("Failed to read %s: %s \u2014 skipping update",r,i.message),!1}let o=kh(e),s=Rh(n,o);if(s===n)return!0;try{return await(0,Pt.mkdir)((0,ze.dirname)(r),{recursive:!0}),await A(r,s),he.info("Updated %s with %d Jolli skill exclude paths",r,e.length),!0}catch(i){return he.warn("Failed to write %s: %s",r,i.message),!1}}async function qo(t,e){let r=await La(t);if(!r)return he.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,Pt.readFile)(r,"utf-8")}catch(s){if(s.code!=="ENOENT")return he.warn("Failed to read %s: %s \u2014 skipping update",r,s.message),!1}let o=wT(n,e);if(o===n)return!0;try{return await(0,Pt.mkdir)((0,ze.dirname)(r),{recursive:!0}),await A(r,o),he.info("Merged %d Jolli skill exclude path(s) into %s",e.length,r),!0}catch(s){return he.warn("Failed to write %s: %s",r,s.message),!1}}async function Eh(t,e){let r=await La(t);if(!r)return he.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",t),!1;let n;try{n=await(0,Pt.readFile)(r,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(he.warn("Failed to read %s: %s \u2014 skipping cleanup",r,s.message),!1)}let o=ST(n,e);if(o===n)return!0;try{return await A(r,o),he.info("Removed %d Jolli exclude path(s) from %s",e.length,r),!0}catch(s){return he.warn("Failed to write %s: %s",r,s.message),!1}}function kh(t){return`${[dn,...t,pn].join(`
`)}
`}function Rh(t,e){let r=t.split(`
`),n=r.indexOf(dn),o=r.indexOf(pn),s=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...s,...r.slice(o+1)].join(`
`);if(t.length===0)return e;let i=t.endsWith(`
`)?"":`
`;return`${t}${i}${e}`}function wT(t,e){let r=t.split(`
`),n=r.indexOf(dn),o=r.indexOf(pn),s=n!==-1&&o!==-1&&o>n?r.slice(n+1,o):[],i=new Set(s),a=[...s];for(let l of e)i.has(l)||(i.add(l),a.push(l));return Rh(t,kh(a))}function ST(t,e){let r=t.split(`
`),n=r.indexOf(dn),o=r.indexOf(pn);if(n===-1||o===-1||o<=n)return t;let s=new Set(e),i=r.slice(n+1,o).filter(c=>!s.has(c)),a=r.slice(0,n),l=r.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,dn,...i,pn,...l].join(`
`)}var dt=require("node:fs/promises"),Ma=require("node:os"),mn=require("node:path");h();var cr=p("GlobalInstructionsInstaller"),$a="<!-- >>> jolli memory instructions >>> -->",ja="<!-- <<< jolli memory instructions <<< -->",Th="## Jolli Memory",_h=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function bT(){return`${[$a,Th,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",ja].join(`
`)}
`}function vh(t){return t==="enabled"?{write:!0}:t==="disabled"?{write:!1,remove:!0}:{write:!1}}function ET(t,e){let r=t.split(`
`),n=r.indexOf($a),o=r.indexOf(ja),s=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...s,...r.slice(o+1)].join(`
`);let i=r.indexOf(Th);if(i!==-1){let l=r.length;for(let u=i+1;u<r.length;u++)if(/^#{1,2} /.test(r[u])){l=u;break}let c=r.slice(0,i).join(`
`),d=r.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${e}${d}`}if(t.length===0)return e;let a=t.endsWith(`
`)?"":`
`;return`${t}${a}${e}`}async function kT(t,e){let r="";try{r=await(0,dt.readFile)(t,"utf-8")}catch(o){if(o.code!=="ENOENT"){cr.warn("Failed to read %s: %s \u2014 skipping",t,o.message);return}}let n=ET(r,e);if(n!==r)try{await(0,dt.mkdir)((0,mn.dirname)(t),{recursive:!0}),await(0,dt.writeFile)(t,n,"utf-8"),cr.info("Updated %s with Jolli Memory instructions",t)}catch(o){cr.warn("Failed to write %s: %s",t,o.message)}}async function Ch(t){let e=bT(),r=(0,Ma.homedir)();for(let n of _h)t[n.host]&&await kT((0,mn.join)(r,...n.relPath),e)}function RT(t){let e=t.split(`
`),r=e.indexOf($a),n=e.indexOf(ja);if(r===-1||n===-1||n<r)return t;let o=r>0&&e[r-1]===""?r-1:r;return[...e.slice(0,o),...e.slice(n+1)].join(`
`)}async function TT(t){let e;try{e=await(0,dt.readFile)(t,"utf-8")}catch(n){n.code!=="ENOENT"&&cr.warn("Failed to read %s: %s \u2014 skipping",t,n.message);return}let r=RT(e);if(r!==e)try{await(0,dt.writeFile)(t,r,"utf-8"),cr.info("Removed Jolli Memory instructions from %s",t)}catch(n){cr.warn("Failed to write %s: %s",t,n.message)}}async function xh(){let t=(0,Ma.homedir)();for(let e of _h)await TT((0,mn.join)(t,...e.relPath))}var ue=require("node:os"),F=require("node:path");le();h();var Ph=require("node:fs"),dr=require("node:fs/promises"),ur=require("node:path");le();h();var Fa=p("McpRegistration"),Ha="jollimemory";function _T(t,e,r,n){return t==="win32"&&r?{command:"node",args:[r,...n]}:{command:e,args:[...n]}}function Ua(t,e,r){return _T(t,e,r,["mcp"])}function Ja(t){let e=Wo(ln(t));return e?(0,ur.join)(e.distDir,"Cli.js"):void 0}function Ah(t){let e=Wo(ln(t));if(!e)return;let r=(0,ur.join)(e.distDir,"McpLauncher.js");return(0,Ph.existsSync)(r)?r:void 0}var Ih="/.mcp.json";async function Dh(t){let e=(0,ur.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,dr.readFile)(e,"utf-8"))}catch(l){if(l.code!=="ENOENT"){Fa.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",e,String(l));return}r={}}let n=r.mcpServers??{},o=ie(),s=(0,ur.join)(o,"run-cli"),i=process.platform==="win32"?Ja(o):void 0;n[Ha]=Ua(process.platform,s,i);let a={...r,mcpServers:n};await(0,dr.writeFile)(e,`${JSON.stringify(a,null,2)}
`,"utf-8"),Fa.info("Registered MCP server in %s",e)}async function Nh(t){let e=(0,ur.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,dr.readFile)(e,"utf-8"))}catch{return}r.mcpServers?.[Ha]&&(delete r.mcpServers[Ha],await(0,dr.writeFile)(e,`${JSON.stringify(r,null,2)}
`,"utf-8"),Fa.info("Removed MCP server from %s",e))}var At=require("node:fs/promises"),Lh=require("node:path");se();h();var Ko=p("CodexTomlWriter"),Vo="[mcp_servers.jollimemory]";async function Mh(t){try{return(await(0,At.stat)(t)).mode&511}catch{return 384}}function Oh(t){return`${Vo}
command = ${JSON.stringify(t.command)}
args = ${JSON.stringify(t.args??[])}
`}function $h(t){if(t.startsWith(Vo))return 0;let e=t.indexOf(`
${Vo}`);return e===-1?-1:e+1}function jh(t){let e=$h(t);if(e===-1)return t;let r=t.indexOf(`
[`,e+Vo.length),n=r===-1?t.length:r+1,o=t.slice(0,e),s=t.slice(n);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function Fh(t,e){let r="";try{r=await(0,At.readFile)(t,"utf-8")}catch(i){if(i.code!=="ENOENT"){Ko.warn("Skipping Codex MCP: %s unreadable (%s)",t,String(i));return}}let n=jh(r).replace(/\s*$/,""),o=n.length===0?Oh(e):`${n}

${Oh(e)}`;if(o===r){Ko.info("Codex MCP server already registered in %s \u2014 no write needed",t);return}await(0,At.mkdir)((0,Lh.dirname)(t),{recursive:!0});let s=await Mh(t);await A(t,o,s),Ko.info("Registered Codex MCP server in %s",t)}async function Hh(t){let e;try{e=await(0,At.readFile)(t,"utf-8")}catch{return}$h(e)!==-1&&(await A(t,`${jh(e).replace(/\s*$/,"")}
`,await Mh(t)),Ko.info("Removed Codex MCP server from %s",t))}var It=require("node:fs/promises"),Uh=require("node:path");se();h();var Xo=p("JsonMcpWriter"),Ba="jollimemory",Jh="mcpServers";async function Bh(t){try{return(await(0,It.stat)(t)).mode&511}catch{return}}async function Ne(t,e,r=Jh){let n,o="";try{let c=await(0,It.readFile)(t,"utf-8");o=c,n=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){Xo.warn("Skipping MCP registration: %s unreadable/invalid (%s)",t,String(c));return}n={}}let s=n[r]??{},i=()=>`${JSON.stringify({...n,[r]:s},null,2)}
`,a=i();s[Ba]=e;let l=i();if(l===o||l===a){Xo.info("MCP server already registered in %s \u2014 no write needed",t);return}await(0,It.mkdir)((0,Uh.dirname)(t),{recursive:!0}),await A(t,l,await Bh(t)),Xo.info("Registered MCP server in %s",t)}async function Oe(t,e=Jh){let r;try{r=JSON.parse(await(0,It.readFile)(t,"utf-8"))}catch{return}let n=r[e];n?.[Ba]&&(delete n[Ba],await A(t,`${JSON.stringify(r,null,2)}
`,await Bh(t)),Xo.info("Removed MCP server from %s",t))}var vT=p("HostRegistrars"),CT={host:"claude",scope:"repo",register:Dh,remove:Nh,gitExcludePaths:()=>[Ih]};function Le(){let t=ie(),e=process.platform==="win32"?Ja(t):void 0;return Ua(process.platform,(0,F.join)(t,"run-cli"),e)}function xT(){let t=Le();if(process.platform!=="win32")return t;let e=Ah(ie());return e?{command:"node",args:[e]}:t}var PT={host:"cursor",scope:"repo",register:t=>Ne((0,F.join)(t,".cursor","mcp.json"),{...Le()}),remove:t=>Oe((0,F.join)(t,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},AT={host:"gemini",scope:"global",register:()=>Ne((0,F.join)((0,ue.homedir)(),".gemini","settings.json"),{...Le()}),remove:()=>Oe((0,F.join)((0,ue.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},IT={host:"codex",scope:"global",register:()=>Fh((0,F.join)((0,ue.homedir)(),".codex","config.toml"),xT()),remove:()=>Hh((0,F.join)((0,ue.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},DT={host:"opencode",scope:"global",register:()=>{let t=Le(),e={type:"local",command:[t.command,...t.args],enabled:!0};return Ne((0,F.join)((0,ue.homedir)(),".config","opencode","opencode.json"),e,"mcp")},remove:()=>Oe((0,F.join)((0,ue.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},NT={host:"copilot",scope:"global",register:()=>Ne((0,F.join)((0,ue.homedir)(),".copilot","mcp-config.json"),{...Le()}),remove:()=>Oe((0,F.join)((0,ue.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},OT={host:"copilotChat",scope:"global",register:()=>{let t=Le(),e={type:"stdio",command:t.command,args:t.args};return Ne((0,F.join)(We("Code"),"User","mcp.json"),e,"servers")},remove:()=>Oe((0,F.join)(We("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},LT={host:"cline",scope:"global",register:async()=>{for(let t of await hi())await Ne(oo(t),{...Le()})},remove:async()=>{for(let t of Fr())await Oe(oo(t))},gitExcludePaths:()=>[]},MT={host:"devin",scope:"global",register:()=>Ne((0,F.join)((0,ue.homedir)(),".config","devin","config.json"),{...Le(),transport:"stdio"}),remove:()=>Oe((0,F.join)((0,ue.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},$T={host:"antigravity",scope:"global",register:()=>Ne((0,F.join)((0,ue.homedir)(),".gemini","config","mcp_config.json"),{...Le()}),remove:()=>Oe((0,F.join)((0,ue.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},jT={host:"kimi",scope:"global",register:()=>Ne((0,F.join)(uo(),"mcp.json"),{...Le()}),remove:()=>Oe((0,F.join)(uo(),"mcp.json")),gitExcludePaths:()=>[]};function pr(t){let e=[];return t.claude&&e.push(CT),t.cursor&&e.push(PT),t.gemini&&e.push(AT),t.codex&&e.push(IT),t.opencode&&e.push(DT),t.copilot&&e.push(NT),t.copilotChat&&e.push(OT),t.cline&&e.push(LT),t.devin&&e.push(MT),t.antigravity&&e.push($T),t.kimi&&e.push(jT),e}var FT={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0};async function Wa(t,e,r,n){for(let o of t)try{await n(o)}catch(s){vT.warn("MCP %s failed for %s in %s (non-fatal): %s",r,o.host,e,String(s))}}async function Ga(t,e){let r=pr(e).filter(n=>n.scope==="repo");await Wa(r,t,"registration",n=>n.register(t))}async function Wh(t){let e=pr(t).filter(r=>r.scope==="global");await Wa(e,"(global)","registration",r=>r.register(""))}async function qa(t){let e=pr(FT).filter(r=>r.scope==="repo");await Wa(e,t,"removal",r=>r.remove(t))}var D=require("node:fs/promises"),mr=require("node:os"),x=require("node:path");se();h();var Ee=`### Shell prerequisite

This block requires a POSIX bash shell. On Linux/macOS the system bash works.
**On Windows, use Git Bash** (the bash bundled with Git for Windows). Other
Windows "bash" options \u2014 \`C:\\Windows\\System32\\bash.exe\`, the WindowsApps
alias, or any WSL bash \u2014 see a separate Linux home directory and will not
find the Jolli entry script that lives under \`%USERPROFILE%\`.

If Git Bash is not available on Windows, STOP and tell the user:
"Jolli skill needs Git Bash on Windows. Install Git for Windows from
https://git-scm.com/download/win and retry."

Do NOT fall back to \`npm run\`, \`npx\`, \`node\` directly, PowerShell-native
commands, WSL bash, or any workspace-local script \u2014 those bypass the
security recipe and the dist resolver and will not produce valid output.`;var Me='"$HOME/.jolli/jollimemory/run-cli"',HT="1.0.0";function UT(){let t=Object.keys(Vr),r=[...t.filter(n=>n==="cursor-agent"),...t.filter(n=>n!=="cursor-agent")].map(_t);return`${r.slice(0,-1).join(", ")}, or ${r[r.length-1]}`}function Gh(){return`---
name: jolli
description: State-aware front door for Jolli Memory in Cursor \u2014 reads how Jolli is set up in this repository, guides first-time setup through jolli-init, reminds the user to sign in when memories cannot sync yet, then routes to recall, search, status, timeline, push, PR, or workflow actions. Use when the user invokes Jolli or asks what Jolli can do.
metadata:
  version: "${HT}"
  revision: 3
  vendor: "jolli.ai"
---

# Jolli Memory

The single front door for Jolli in Cursor. Rather than printing a static list, it
reads how Jolli is set up in THIS repository and guides the next step: incomplete
setup goes to \`/jolli-init\`; memories that are captured but cannot be shared yet
get a sign-in reminder; a healthy repo gets a short snapshot and a routed action.

It **never** re-implements another skill's workflow \u2014 it only reads state and
invokes an existing skill or an existing Jolli Memory tool.

${Ee}

Getting this wrong is worse here than in the other skills: Step 0 reads a failed
\`test -f\` as "Jolli is not installed on this machine" and offers to delete this
menu. Run the check in the wrong shell and that verdict is simply false.

## Step 0 \u2014 confirm this menu can route

This menu lives in \`~/.cursor/skills/jolli/\`, OUTSIDE the Jolli plugin, so that it
is reachable from Cursor's chat-first window \u2014 which starts conversations without
naming a workspace, and therefore cannot be given a per-repository copy. Being
outside the plugin, it can also linger after the plugin has been uninstalled. It can
only route to targets that exist in THIS session, so before doing anything else
confirm at least one is available. The menu can route if **either** holds:

- one or more Jolli Memory MCP tools are available this session, **or**
- the bundled CLI dispatcher exists:

  \`\`\`bash
  test -f "$HOME/.jolli/jollimemory/run-cli" && echo present
  \`\`\`

If **either** holds, proceed to Step 1.

The dispatcher alone is enough to run every step below \u2014 each one names a CLI
fallback. If ONLY the dispatcher is present, use it and mention once that the MCP
tools appear after the user enables the \`jollimemory\` server in **Customize**:
Cursor notices \`.cursor/mcp.json\` within a second of it being written, but a newly
discovered project server stays disconnected until it is switched on.
That is expected, not a fault.

If **neither** holds, do **not** build the menu and do **not** invoke any
\`/jolli-*\` skill \u2014 they share this session's plumbing and the call will fail. This
alone does NOT mean Jolli is gone: the Jolli CLI installs a memory pipeline that runs
independently of this plugin (git hooks that generate memories on every commit). The
dispatcher check above already tells the two apart:

- **dispatcher present** \u2192 Jolli still works; only this session's plumbing is
  missing. Tell the user plainly: commits still generate memories, and they can run
  \`jolli recall\` / \`jolli search\` directly. Reloading the window and starting a new
  chat re-runs the Jolli \`sessionStart\` hook, which restores it.
- **dispatcher absent** \u2192 Jolli is no longer installed on this machine, and this
  \`/jolli\` is a stale leftover from a previous plugin install. They can remove it
  with \`rm -rf ~/.cursor/skills/jolli\`, and reinstall the Jolli plugin to bring the
  menu back.

Either way, then stop \u2014 do not continue to Step 1. Do not guess at install paths.

## Step 1 \u2014 read how Jolli is set up

**Preferred (MCP):** call the Jolli Memory \`status\` tool with no arguments and
read:

- \`enabled\` \u2014 are Jolli's git hooks installed in this repository (is memory
  capture on)?
- \`account.signedIn\` \u2014 is the user signed in to Jolli?
- \`account.jolliApiKeyConfigured\` \u2014 is a stored Jolli API key present? Surfaced
  ONLY when signed OUT (a sign-in already implies a Jolli credential).
- \`account.anthropicKeyConfigured\` \u2014 surfaced ONLY when
  \`account.aiProvider === "anthropic"\`; omitted for every other provider.
- \`account.aiProvider\` \u2014 \`"local-agent"\` | \`"jolli"\` | \`"anthropic"\` | \`null\`.
- \`account.localAgentTool\` \u2014 label of the local agent CLI that generates
  summaries (e.g. "Cursor"). Surfaced ONLY when \`aiProvider\` is \`local-agent\`.
- \`account.site\` \u2014 the Jolli site host, for the snapshot line.
- \`storedMemories\` \u2014 how many memories this repository already has.
- \`space\` \u2014 the bound Jolli Space (\`{ name }\`), or \`null\` when unbound.

**Fallback (CLI):** if the \`status\` tool is unavailable, read the same facts from

\`\`\`bash
${Me} status
\`\`\`

If neither can be reached, skip the state-based guidance and go straight to
Step 3's menu, presented without a snapshot.

## Step 2 \u2014 guide by state (the front door)

Derive three things, mirroring the CLI's guided front door:

- **can generate memories** \u2014 provider-AWARE, NOT a blind OR of every credential:
  - \`local-agent\` \u2192 **yes**; summaries generate by driving the local agent CLI
    named by \`account.localAgentTool\` \u2014 the user's own login for whatever agent
    that field names, Cursor's on a fresh setup \u2014 with no API key and no Jolli
    sign-in. This is the plugin's default, so a freshly installed repo can already
    generate. Report the field, never assume Cursor: an agent tool the user had
    already configured is kept as-is.
  - \`jolli\` \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  - \`anthropic\` \u2192 yes only if \`account.anthropicKeyConfigured\`; a Jolli sign-in
    alone does NOT count.
  - \`null\` / unset \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
- **can sync memories** = \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  Provider-independent: sharing to a Jolli Space always needs a **Jolli**
  credential, so an Anthropic key never satisfies it. Orthogonal to generation \u2014
  the default \`local-agent\` repo generates fine while unable to sync.
- **enabled** = the \`enabled\` flag.

Then take exactly one branch:

- **Not fully set up** \u2014 \`enabled\` is false, OR memories can't be generated: lead
  with SETUP, not the menu. State in one line what is missing, then invoke the
  \`jolli-init\` skill, which owns enable \u2192 sign-in \u2192 bind a Space. Do not
  hand-roll those steps here. (Exception: if the user named a different specific
  action, honor that instead \u2014 see Step 3.)

- **Fully set up** \u2014 enabled AND generation possible: print a short snapshot, then
  continue to Step 3.

  \`\`\`
  \u2713 signed in \xB7 <account.site> \xB7 summaries via <account.localAgentTool>
  \u2713 enabled \xB7 <storedMemories> memories
  \u2713 syncing \xB7 Space "<space.name>"    (ONLY when \`space\` is non-null; omit the whole line otherwise)

  Jolli is listening \u2014 last memory saved.
  \`\`\`

  Pick the FIRST line by state, mirroring the CLI front door's wording exactly:

  - signed in \u2192 \`\u2713 signed in \xB7 <account.site>\`, plus \` \xB7 summaries via
    <account.localAgentTool>\` when \`aiProvider\` is \`local-agent\`. Drop the
    \`\xB7 <site>\` segment when \`account.site\` is null.
  - not signed in, \`local-agent\` \u2192 \`\u2713 local agent set (not signed in to Jolli)\`.
  - not signed in, \`jolli\` \u2192 \`\u2713 Jolli API key set (not signed in to Jolli)\`.
  - not signed in, \`anthropic\` \u2192 \`\u2713 Anthropic API key set (not signed in to Jolli)\`.

  Render the \`\u2713 syncing \xB7 Space "<space.name>"\` line **only when \`space\` is
  non-null**; it means a \`git push\` auto-publishes this branch's memories to that
  Space. When \`space\` is null, drop the line entirely \u2014 do not print a "not bound"
  line here (binding is \`jolli-init\`'s job).

  The closing \`Jolli is listening \u2014 \u2026\` line uses **"last memory saved."** when
  \`storedMemories\` > 0, or **"your next commit is your first memory"** when it
  is 0.

### Sign-in nudge \u2014 only when **can sync** is false

Generation working does not mean memories are shared. When the user can generate
but **can sync** is false (the normal state of a fresh \`local-agent\` install),
add ONE line under the snapshot, mirroring the CLI front door's optional sign-in
step:

\`\`\`
Sign in to Jolli to sync memories to a Space? (/jolli-login \u2014 memory generation keeps running locally either way)
\`\`\`

Rules for the nudge:

- It is **non-blocking**. Never withhold the Step 3 menu waiting for an answer,
  and never report "not signed in" as broken \u2014 the repository is capturing
  memories.
- Offer it **once** per invocation. If the user declines, drop it for the rest of
  the session.
- If the user accepts, invoke the \`jolli-login\` skill (or \`jolli-init\` when they
  also want to bind a Space in the same pass). Never run \`auth login\` yourself
  here, and never ask for a password, token, or callback URL.
- Skip it when **can sync** is true, and inside the "Not fully set up" branch \u2014
  there \`jolli-init\` already walks sign-in.

## Step 3 \u2014 route the request / present the menu

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one action below and invoke that
  action directly, regardless of the Step 2 state \u2014 a specific request wins over
  the setup nudge. The invoked skill handles its own preconditions (for example
  \`jolli-push\` offers to bind a Space when the repo is unbound). Ask the user to
  choose only when the request is ambiguous or matches no action.
- **Argument absent** \u2192 after the Step 2 guidance, list the actions as plain text
  and ask the user to pick one. Bias the ordering to the state: when
  \`storedMemories\` is 0, lead with \`jolli-init\` as the FIRST option and demote
  recall / search below it, since on a fresh repo both would only return empty.
  When memories exist, lead with recall / search. Keep \`jolli-init\` available
  either way for re-running setup or re-binding a Space.

### Jolli skills

- \`/jolli-init\` \u2014 finish setup, or change the bound Space.
- \`/jolli-recall\` \u2014 recall current-branch context.
- \`/jolli-search\` \u2014 search decisions across branches.
- \`/jolli-status\` \u2014 inspect installation and queue health.
- \`/jolli-timeline\` \u2014 show a decision topic's history.
- \`/jolli-push\` \u2014 publish this branch's memories to a Space.
- \`/jolli-login\` \u2014 sign in to Jolli so memories can sync to a Space. Surface this
  whenever **can sync** is false, even if the user did not pick it.
- \`/jolli-logout\` \u2014 clear the stored Jolli credentials.
- \`/jolli-local-run\` / \`/jolli-remote-run\` \u2014 run a Jolli workflow locally or on
  the Jolli backend.

Route a choice by invoking that skill; do not restate its steps here.

**If \`/jolli-recall\`, \`/jolli-search\`, \`/jolli-local-run\` or \`/jolli-remote-run\`
is not offered this session**, it is not missing \u2014 those four live in the repository
rather than in the plugin (so they appear exactly once instead of twice), and this
repository has not had them placed yet. That happens on the first session after the
plugin is installed; if the session hook did not run, \`/jolli-init\` places them.
Say so in one line and offer \`/jolli-init\`, rather than reporting the skill as
unavailable. The CLI fallback below works either way.

### Jolli Memory tools (whatever is registered this session)

Surface the Jolli Memory MCP tools actually available this session \u2014 do not assume
a fixed list. Route a choice by calling the matching tool. One combination is worth
offering explicitly:

- **PR description** \u2014 call \`queue_status\` first, then \`get_pr_description\`, so
  the description covers memories that are still being generated.

If no Jolli Memory tools are registered, present just the skills above.
`}function JT(){return`---
name: jolli-init
description: "Set up Jolli Memory for the current repository in Cursor: verify the plugin hook, enable memory generation through Cursor, sign in to Jolli when sharing is requested, and bind the repo to a Jolli Space. Use for first-time setup, repair, enablement, or Space binding."
---

# Jolli Init

Complete the steps in order. Stop when a required step fails.

${Ee}

## 1. Inspect state

Call the Jolli Memory \`status\` tool. If unavailable, run \`${Me} status\`.
If the dispatcher is missing, ask the user to run **Developer: Reload Window** and
start a new chat so the Jolli \`sessionStart\` hook runs, then retry.

## 2. Enable local memory generation

Run:

\`\`\`bash
${Me} enable --repo-hooks-only --source-tag cursor-plugin
\`\`\`

This explicit setup records \`cursor-agent\` as the local-agent tool only when none
is configured yet \u2014 an agent tool and a paid provider already on disk are both left
exactly as they are. It also writes this workspace's
\`.cursor/mcp.json\`, and places \`/jolli-recall\`, \`/jolli-search\`,
\`/jolli-local-run\` and \`/jolli-remote-run\` into this repository \u2014 those four are
not bundled with the plugin, so that they appear once in the menu rather than twice
in a repository that also ran a full \`jolli enable\`. If they were already present
this step changes nothing. Cursor notices that file within a second \u2014 no reload needed \u2014
but registers the server **disconnected**, so tell the user to open **Customize** in
the sidebar and enable \`jollimemory\` to get the MCP tools. Everything below works
without them either way. If the command reports that the repository is manually
disabled, explain that an explicit full \`jolli enable\` is required to clear the
opt-out; do not silently override it.

## 3. Decide whether Jolli sign-in is needed

Local memory generation uses the user's Cursor login and needs no Jolli account.
Jolli sign-in is required to bind and share with a Space.

If the user only wants local memory, skip to Step 5. Otherwise, when status shows
neither a Jolli sign-in nor a Jolli API key, run and wait for:

\`\`\`bash
${Me} auth login
\`\`\`

The command opens the browser and waits for a loopback callback. Never ask for a
password, token, or callback URL.

## 4. Bind a Space

Call \`list_spaces\`. Match a Space named by the user by id, slug, or exact name.
Otherwise present the available Spaces and ask them to choose, offering the default
first when one exists. Call \`bind_space\` with the selected value. Treat
\`already_bound\` as success.

If the Space tools are unavailable, run \`${Me} spaces --format json\`,
present only the returned Spaces, then bind the selected id or slug with
\`${Me} bind --space <id-or-slug> --format json\`. Never put free-typed
user text directly into this command.

## 5. Verify and report

Call \`status\` again (or \`${Me} status\` when the tool is not registered yet).
Report:

- memory generation enabled or the exact remaining problem;
- which agent generates summaries when provider is \`local-agent\` \u2014 name
  \`localAgentTool\` from \`status\` rather than assuming Cursor, since a tool that
  was already configured is left alone;
- Jolli sign-in and bound Space when sharing was configured;
- a normal commit captures memory and \`git push\` publishes to the bound Space;
- when the MCP tools were unavailable, that enabling \`jollimemory\` in **Customize**
  turns them on (a reload is not required).
`}function BT(){return`---
name: jolli-login
description: Sign in to Jolli from Cursor so the repository can bind to a Jolli Space and share memories. Use when the user asks to log in, authenticate Jolli, connect an account, or fix missing Jolli credentials.
---

# Jolli Login

${Ee}

Run and wait for the interactive browser flow:

\`\`\`bash
${Me} auth login
\`\`\`

Never ask the user for passwords, API keys, callback URLs, or browser tokens.

On success, say that Jolli credentials were saved and offer \`/jolli-init\` to bind
the repository to a Space. Clarify that local memory generation still uses the
configured local agent unless the user explicitly changes providers. On failure,
surface the command's reason and suggest retrying; if the browser did not open,
point out the login URL printed by the command. If the dispatcher does not exist,
ask the user to run **Developer: Reload Window**, start a new chat so the Jolli
\`sessionStart\` hook runs, and retry.
`}function WT(){return`---
name: jolli-logout
description: Sign out of Jolli from Cursor by clearing the stored Jolli auth token and Jolli API key while preserving other provider credentials. Use when the user asks to log out, disconnect Jolli, or remove Jolli account credentials.
---

# Jolli Logout

${Ee}

Run:

\`\`\`bash
${Me} auth logout
\`\`\`

Report the command output, then call the Jolli Memory \`status\` tool when
available. Explain the provider-aware result:

- Space binding and cloud sharing require a future Jolli sign-in.
- \`local-agent\` memory generation continues through the configured
  ${UT()} login.
- \`anthropic\` generation continues when its preserved Anthropic key exists.
- \`jolli\` generation stops unless another Jolli API key remains configured.

If the dispatcher does not exist, ask the user to run **Developer: Reload Window**,
start a new chat so the Jolli \`sessionStart\` hook runs, and retry.
`}function GT(){return`---
name: jolli-status
description: Diagnose Jolli Memory installation, provider, account, hooks, queue, integrations, stored memories, and Space binding for the current repository. Use for status, health checks, missing or stale memories, setup verification, or troubleshooting.
---

# Jolli Status

1. Call the Jolli Memory \`status\` tool.
2. Call \`queue_status\` without waiting.
3. Render a compact Markdown table containing version/enabled, hooks/runtime,
   migration, provider/local agent, account credentials, bound Space, and stored
   memories. Omit unavailable optional fields.
4. List detected AI integrations below the table using their returned status text.
5. State whether memory generation is idle or still running.
6. Give a provider-aware verdict:
   - \`local-agent\`: ready when its tool is configured; if an auth failure is
     reported, use that tool's login remedy.
   - \`jolli\`: requires Jolli sign-in or a Jolli API key.
   - \`anthropic\`: requires an Anthropic API key.
   - unset: requires a usable provider credential.

If \`status\` is unavailable, run \`${Me} status\` and summarize it. Do not
list branch memories; route those requests to \`/jolli-recall\` or \`/jolli-search\`.

${Ee}
`}function qT(){return`---
name: jolli-timeline
description: Show the chronological evolution of a Jolli Memory decision topic. Use when the user asks for a topic timeline, how a decision changed over time, or provides a Jolli topic slug.
---

# Jolli Decision Timeline

Obtain the topic slug from the request. If it is missing or ambiguous, call the
Jolli Memory \`search\` tool and let the user choose the matching topic.

Call \`get_decision_timeline\` with the selected slug. Render source events
oldest-first as a concise chronological narrative, grounding each transition in
the returned commit or source metadata. If the slug is unknown, search again
instead of inventing a timeline.
`}function KT(){return`---
name: jolli-push
description: Publish the current branch's Jolli memories to a Jolli Space. Use when the user asks to push, publish, share, or sync memories or decisions with a team.
---

# Jolli Push

1. Call \`queue_status\` with waiting enabled so newly committed memories are ready.
2. Call \`push_memory\` for the current branch.
3. If it returns \`binding_required\`, present the returned Spaces, ask the user to
   choose one, then call \`push_memory\` again with that Space. If authentication is
   missing, route to \`/jolli-login\` and stop; never request credentials in chat.
4. On success, report the Space and article links. Offer to open links when the host
   provides a browser action.
5. On partial or failed publication, report the exact result and do not claim all
   memories were shared.
`}var VT=[{name:"jolli-init",build:JT},{name:"jolli-login",build:BT},{name:"jolli-logout",build:WT},{name:"jolli-status",build:GT},{name:"jolli-timeline",build:qT},{name:"jolli-push",build:KT}],DM=VT.map(t=>t.name);var Yo=require("node:os"),pt=require("node:path");h();var XT=p("CursorSettings"),YT="cursor/thirdPartyExtensibilityEnabled";function qh(t){let e=t?.trim();return e!==void 0&&e!==""&&(0,pt.isAbsolute)(e)?e:void 0}function zT(t=process.env,e=(0,Yo.platform)()){let r=(0,Yo.homedir)();if(e==="win32"){let n=qh(t.APPDATA)??(0,pt.join)(r,"AppData","Roaming");return(0,pt.join)(n,"Cursor","User","globalStorage","state.vscdb")}return e==="darwin"?(0,pt.join)(r,"Library","Application Support","Cursor","User","globalStorage","state.vscdb"):(0,pt.join)(qh(t.XDG_CONFIG_HOME)??(0,pt.join)(r,".config"),"Cursor","User","globalStorage","state.vscdb")}async function Kh(t=process.env,e=zT(t)){try{let{DatabaseSync:r}=await import("node:sqlite"),n=new r(e,{readOnly:!0});try{let o=n.prepare("SELECT value FROM ItemTable WHERE key = ?").get(YT);if(o?.value===void 0)return!0;let s=String(o.value).trim().replace(/^"|"$/gu,"");return s!=="false"&&s!=="0"}finally{n.close()}}catch(r){return XT.info("Could not read Cursor's third-party-extensibility setting (assuming enabled): %s",r.message),!0}}var Q=p("SkillInstaller"),fr="1.0.0",Yh=["jollimemory-recall","jolli-memory-recall"],fn=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],Ka=[".claude","skills"],Qo=[{name:"jolli-recall",build:l_},{name:"jolli-search",build:c_},{name:"jolli-local-run",build:u_},{name:"jolli-remote-run",build:d_},{name:"jolli",build:p_}],zh=["jolli-pr"],Qh=fn.flatMap(t=>Qo.map(e=>`/${t.relativeDir.join("/")}/${e.name}/`)),Zo=["/.claude/skills/jolli/"],Zh=[...fn.map(t=>`/${t.relativeDir.join("/")}/jolli/`),...Zo];async function QT(t,e={}){for(let r of Yh)await es((0,x.join)(t,".claude","skills",r),"legacy");await Va(t);for(let r of fn){if(!r.enabled(e))continue;let n=(0,x.join)(t,...r.relativeDir);for(let o of Qo)await za(n,o.name,o.build())}await Ya(t)}async function Va(t){for(let e of fn){let r=(0,x.join)(t,...e.relativeDir);for(let n of zh)await es((0,x.join)(r,n),"retired")}}async function es(t,e){let r=(0,x.join)(t,"SKILL.md"),n;try{n=await(0,D.readFile)(r,"utf-8")}catch{return}if(!ts(n)){Q.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",t);return}try{await(0,D.rm)(t,{recursive:!0,force:!0}),Q.info("Removed %s Jolli skill at %s",e,t)}catch(o){Q.warn("Failed to remove %s skill at %s: %s",e,t,o.message)}}async function eg(t,e={}){return QT(t,e)}async function tg(t){let e=(0,x.join)(t,...Ka),r=(0,x.join)(e,"jolli","SKILL.md");try{if(!(await(0,D.readFile)(r,"utf-8")).includes('vendor: "jolli.ai"')){Q.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",r);return}}catch{}await za(e,"jolli",m_())}var zo=[".cursor","skills"],Xa=Qo.filter(t=>t.name!=="jolli"),rg=[".cursor","skills"],ng=[`/${zo.join("/")}/`,...Xa.map(t=>`/${zo.join("/")}/${t.name}/`)];async function Ya(t){let e=(0,x.join)(t,...zo),r=await ZT(),n=r===void 0?[]:await r_(t);r===void 0&&await n_();for(let o of Xa){let s=(0,x.join)(e,o.name);if(!await e_(s))continue;if(await o_(n,o.name)||r===void 0){await(0,D.rm)(s,{recursive:!0,force:!0});continue}await t_(s,(0,x.join)(r,o.name))}}var og="cursor-plugin-root";async function sg(t){try{let e=(0,x.join)((0,mr.homedir)(),".jolli","jollimemory");await(0,D.mkdir)(e,{recursive:!0}),await A((0,x.join)(e,og),`${t}
`)}catch(e){Q.info("Could not record the Cursor plugin root: %s",e.message)}}async function ZT(){try{let e=(await(0,D.readFile)((0,x.join)((0,mr.homedir)(),".jolli","jollimemory",og),"utf-8")).split(`
`)[0]?.trim();if(!e)return;let r=(0,x.join)(e,"mirror");return await(0,D.lstat)(r),r}catch{return}}async function e_(t){let e;try{e=await(0,D.lstat)(t)}catch{return!0}if(e.isSymbolicLink())return!0;if(!e.isDirectory())return!1;try{return ts(await(0,D.readFile)((0,x.join)(t,"SKILL.md"),"utf-8"))}catch{return!1}}async function Vh(t,e){try{if((await(0,D.lstat)(t)).isSymbolicLink())return await(0,D.readlink)(t)===e;let[n,o]=await Promise.all([(0,D.readFile)((0,x.join)(t,"SKILL.md"),"utf-8"),(0,D.readFile)((0,x.join)(e,"SKILL.md"),"utf-8")]);return n===o}catch{return!1}}async function t_(t,e){if(!await Vh(t,e)){await(0,D.rm)(t,{recursive:!0,force:!0}),await(0,D.mkdir)((0,x.dirname)(t),{recursive:!0});try{await(0,D.symlink)(e,t,"dir");return}catch(r){if(await Vh(t,e))return;Q.info("Symlink unavailable for %s (%s) \u2014 copying instead",t,r.message)}try{let r=await(0,D.readFile)((0,x.join)(e,"SKILL.md"),"utf-8");await(0,D.mkdir)(t,{recursive:!0}),await A((0,x.join)(t,"SKILL.md"),r)}catch(r){Q.warn("Could not place %s: %s",t,r.message)}}}async function r_(t){let e=(0,mr.homedir)(),r=[(0,x.join)(t,".agents","skills"),(0,x.join)(e,".agents","skills")];return await Kh()&&r.push((0,x.join)(t,".claude","skills"),(0,x.join)(e,".claude","skills"),(0,x.join)(t,".codex","skills"),(0,x.join)(e,".codex","skills")),r}async function ig(t=(0,mr.homedir)()){await za((0,x.join)(t,...rg),"jolli",Gh())}async function n_(t=(0,mr.homedir)()){await es((0,x.join)(t,...rg,"jolli"),"cursor global menu")}async function ag(t){let e=(0,x.join)(t,...zo);for(let r of Xa){let n=(0,x.join)(e,r.name),o=!1;try{o=(await(0,D.lstat)(n)).isSymbolicLink()}catch{continue}if(o){await(0,D.rm)(n,{recursive:!0,force:!0}),Q.info("Removed cursor mirror symlink at %s",n);continue}await es(n,"cursor mirror")}}async function o_(t,e){for(let r of t)try{return await(0,D.readFile)((0,x.join)(r,e,"SKILL.md"),"utf-8"),!0}catch{}return!1}async function lg(t){let e=[...fn.map(r=>r.relativeDir),Ka];for(let r of e){let n=(0,x.join)(t,...r,"jolli"),o=(0,x.join)(n,"SKILL.md"),s;try{s=await(0,D.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,D.rm)(n,{recursive:!0,force:!0}),Q.info("Removed Jolli umbrella menu at %s",n)}catch(i){Q.warn("Failed to remove umbrella at %s: %s",n,i.message)}}}var s_=[...Qo.filter(t=>t.name!=="jolli").map(t=>t.name),...zh,...Yh];async function cg(t){for(let e of s_){let r=(0,x.join)(t,...Ka,e),n=(0,x.join)(r,"SKILL.md"),o;try{o=await(0,D.readFile)(n,"utf-8")}catch{continue}if(!ts(o)){Q.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",r);continue}try{await(0,D.rm)(r,{recursive:!0,force:!0}),Q.info("Removed legacy Jolli skill at %s",r)}catch(s){Q.warn("Failed to remove legacy skill at %s: %s",r,s.message)}}}var i_=/(?:^|\n)[ \t]*revision:\s*(\d+)/,a_=-1;function Xh(t){let e=t.match(i_),r=e?Number.parseInt(e[1],10):Number.NaN;return Number.isFinite(r)?r:a_}function ts(t){return t.includes('vendor: "jolli.ai"')||t.includes("jolli-skill-version:")}async function za(t,e,r){let n=(0,x.join)(t,e),o=(0,x.join)(n,"SKILL.md"),s=Xh(r);try{let i=await(0,D.readFile)(o,"utf-8");if(!ts(i)){Q.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",e);return}if(Xh(i)>=s)return}catch{}try{await(0,D.mkdir)(n,{recursive:!0}),await A(o,r),Q.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){Q.warn("Failed to write %s SKILL.md: %s",e,i.message)}}function ug(t,e){return`${Ee}

### Invocation

Generate a fresh random 16-character hex string (the "delimiter token") for
this invocation \u2014 e.g. \`3f8a9b2c5d7e1f4a\`. Quickly scan the user's argument:
if the argument text contains a line that is exactly \`JOLLI_ARG_<delimiter
token>_END\`, regenerate the delimiter token and re-check.

Then run this Bash, replacing the two \`<DELIM>\` occurrences with your
delimiter token and replacing \`<user-arg>\` with the user's input verbatim:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" ${t} --arg-stdin${e} <<'JOLLI_ARG_<DELIM>_END'
<user-arg>
JOLLI_ARG_<DELIM>_END
\`\`\`

If you cannot follow the above structure (e.g., your environment doesn't
support here-docs), STOP and tell the user "Jolli skill cannot run safely
in this environment." DO NOT attempt to interpolate the argument into argv
or any double-quoted shell string \u2014 that path has a known shell injection
vector.`}function l_(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${fr}"
  revision: 2
  vendor: "jolli.ai"
---

# Jolli Recall

> Every commit deserves a Memory. Every memory deserves a Recall.

Load the structured development context for a branch \u2014 commits with their
distilled topics (trigger / response / decisions / files), plus any plans
and notes that the work referenced. Synthesize a grounded answer to the
user's prompt about that branch.

## Step 1: Load the recall result

\`<user-arg>\` is a branch name (exact or fragment) or empty (current branch).

### Preferred: MCP tool

If the \`recall\` tool from the \`jollimemory\` MCP server is available, call it with
\`{ "branch": "<user-arg>" }\` (omit \`branch\` when \`<user-arg>\` is empty). It
returns a \`type\`-tagged object \u2014 \`recall\` / \`catalog\` / \`error\` \u2014 identical to
the CLI fallback below.

Match that tool by what it DOES, not by one host's spelling of it: Claude Code
prefixes it as \`mcp__jollimemory__recall\`, while Codex exposes a bare \`recall\`
inside the \`mcp__jollimemory\` namespace and loads MCP tools lazily \u2014 so an empty
first look is not proof it is absent.

### Fallback: CLI here-doc

Only if the jollimemory MCP server is not registered at all \u2014 NOT merely because
one spelling of the tool name is absent from your tool list. Then use:

${ug("recall"," --format json")}

If \`~/.jolli/jollimemory/run-cli\` does not exist, tell the user:
"Jolli not installed. Please install via \`npm install -g @jolli.ai/cli && jolli enable\` or install the Jolli VS Code extension."
Do not attempt further processing.

Both the MCP tool and the CLI fallback return the same \`type\`-tagged union.
Handle the result using Step 2 regardless of which path was used.

## Step 2: Handle the result by \`type\`

The result (from either the MCP tool or the CLI) is a \`type\`-tagged object:

- \`type:"recall"\` \u2192 render Part A + Part B below.
- \`type:"catalog"\` \u2192 semantic-match \`<user-arg>\` against \`branches[].branch\` /
  \`commitMessages\` / \`topicTitles\`. One match \u2192 repeat Step 1 with that branch.
  Many \u2192 list and ask. None \u2192 show catalog, ask to clarify.
- \`type:"error"\` \u2192 surface \`message\` verbatim (translated); for "no records",
  suggest \`jolli enable\`. Never fabricate.

### type: "recall" \u2014 full payload returned

You have a \`RecallPayload\` with these fields:

- \`branch\`, \`period: { start, end }\`, \`commitCount\`, \`totalFilesChanged\`,
  \`totalInsertions\`, \`totalDeletions\` \u2014 branch-level facts.
- \`commits[]\` \u2014 per-commit projection. Each carries:
  - identity (always present): \`hash\` (8-char display), \`fullHash\`, \`branch\`,
    \`commitDate\`, \`commitAuthor\`, \`commitMessage\`; optional \`commitType?\`,
    \`ticketId?\`.
  - \`diffStats?\` \u2014 \`{ filesChanged, insertions, deletions }\`.
  - \`recap?\` \u2014 1-3 paragraphs of plain-English narrative.
  - \`topics[]\` \u2014 each with **always present**: \`title\`, **\`decisions\` (\u2605)**;
    **may be absent**: \`trigger?\`, \`response?\`, \`todo?\`, \`filesAffected?\`,
    \`category?\`, \`importance?\`. Trimming rules differ by field:
    - \`response\` is **policy-trimmed unconditionally** when the branch
      ships more than 8 kept commits \u2014 raising \`--budget\` will not bring
      it back. Additionally, on tight budgets it may be dropped
      oldest-first on shorter branches.
    - \`trigger\` is only dropped by \`--budget\` (oldest-first); raising
      \`--budget\` can restore it.
    - \`decisions\` is never dropped from a kept commit (if the budget
      can't fit it, the whole commit is omitted from \`commits[]\`).
  - \`plans?\` \u2014 \`{ slug, title }[]\` refs only; \`slug\` is the **normalized
    base slug** that always resolves to an entry in payload-level \`plans\`.
  - \`notes?\` \u2014 \`{ id, title }[]\` refs only; \`id\` always resolves to an
    entry in payload-level \`notes\`. (Notes use \`id\`, not \`slug\` \u2014 they
    have no archive-suffix mechanism.)
- \`plans[]\` \u2014 branch-deduplicated plan bodies: \`{ slug, title, content? }\`.
  \`content\` may be absent under tight budget \u2014 when absent, the entry is
  still a valid grounding anchor but you can't quote from it.
- \`notes[]\` \u2014 same shape and trimming rule as plans.
- \`stats\`, \`estimatedTokens\`, \`truncated?\`.

Render in two parts (in order):

#### Part A \u2014 Forced fact opener (no paraphrase, no interpretation)

Render the loaded confirmation as a heading + bullet block (not a prose
line). **Facts only \u2014 do not interpret what the branch is "about" here.**
The mandated shape:

\`\`\`markdown
### Loaded \`feature/auth\`

- **Period:** 2026-04-10 \u2192 2026-04-15 (5 days)
- **Commits:** 8 (+312 \u221289, 24 files)
- **Captured:** 12 topics, 5 key decisions, 2 plans, 3 notes
\`\`\`

The heading + bullet shape is required \u2014 a single prose line blends into
the synthesis below and the user loses the visual anchor for verification.
Save interpretation for Part B.

#### Part B \u2014 Free-form synthesis

Pick whatever shape best serves the user's prompt: prose narrative,
chronological timeline, decision-focused bullet list, per-theme
\`###\` sections, side-by-side comparison, mixed. When multiple
distinct themes emerge across the commits, prefer \`###\` per theme \u2014
inline-bold paragraph prefixes blend into a wall under markdown
rendering. The principles below are the only constraints.

#### Universal principles (apply regardless of shape)

1. **Lead with the answer.** No "Let me analyze..." or "Found N commits..."
   preamble.

2. **Ground every concrete claim** to a hash and/or file. Use \`(abc12345)\`
   for hashes and \`[middleware/auth.ts](middleware/auth.ts)\` for files.

3. **Synthesize, don't dump \u2014 but DO use verbatim quotes from stored
   data.** Read everything; fold into coherent prose or bullets.
   Whenever a phrase from \`decisions\` / \`recap\` / \`plans[].content\` /
   \`notes[].content\` captures the answer more compactly than your
   paraphrase, quote it verbatim in **bold** with attribution.

   Quote **complete clauses (typically 10-30 words)** \u2014 not 2-3 word
   fragments that depend on your surrounding paraphrase to mean
   anything. The reader should be able to skim the bold quote alone
   and understand its claim. Format, embedded in narrative:

   *The design chose JWT because* **"the stateless model lets us scale
   horizontally without a shared session store across regions"**
   *(decisions, abc12345)*; *per the auth-redesign plan,* **"all session
   tokens must be opaque, with no client-readable claims, so rotation
   never breaks the API"** *(plan: auth-redesign)*.

   **Bold = verbatim from stored data.** Never use bold for general
   emphasis. Quotes belong inside running prose or bullets that carry
   their own narrative \u2014 never as bare bullets stripped of context.
   Stringing bare quotes is the wall-of-fragments failure mode.

4. **Reply in the user's language.** Template is English; user-visible
   output matches the user.

5. **Don't expose machinery.** No "RecallPayload" / "commits array" /
   "JSON field" / "SearchHit" mentions.

6. **Brief by default \u2014 synthesize, don't dump every commit.** Skip
   routine commits and merge overlapping themes; aim for ~500 words
   on a typical branch, but favor section structure over compression.
   Never collapse \`###\` themes into inline-bold paragraph prefixes
   just to hit a word count \u2014 that produces a wall and defeats the
   structure's purpose. Branches with many distinct themes may
   legitimately run longer; a "deep dive" on a specific theme is
   opt-in.

#### Plan / note stubs on commits

When a commit carries \`plans?\` / \`notes?\` stubs, use the stub title as a
grounding anchor for narrative ("the auth-redesign plan guides this work").

**To quote from a plan or note body**, look up the matching entry in the
top-level \`plans\` / \`notes\` array by its \`slug\` (plans) or \`id\` (notes):

- If the entry has \`content\`: quote verbatim with \`(plan: <slug>)\` /
  \`(note: <id>)\` attribution if relevant to the user's prompt.
- If \`content\` is absent (budget trimming dropped the body): use **only**
  the title as a citation anchor \u2014 never fabricate a quote from a body
  you cannot see.

#### Empty / partial handling

- Empty \`commits\`: tell the user no records were found; suggest running
  \`jolli enable\` if they expected records.
- \`truncated: true\`: policy trims or budget enforcement dropped fields
  or commits. Policy trims drop \`importance: "minor"\` topics (and any
  commit whose every topic is minor) and drop \`topic.response\` when the
  branch ships more than 8 commits; budget trims drop oldest-first
  \`response\` / \`trigger\` / plan / note content. Mention it with a
  one-liner if the user asks for deeper detail; otherwise stay silent.

### type: "catalog" \u2014 branch lookup needed

Returned when no exact branch match was found. Has a \`branches[]\` array
with \`branch\`, \`commitCount\`, \`period\`, \`commitMessages\`, \`topicTitles?\`.
If a \`query\` field is present, semantic-match the user's input against
\`branch\`, \`commitMessages\`, and \`topicTitles\` (the highest-signal source);
support cross-language matching and time-relative queries.

- One match: re-run Step 1 with the chosen branch as the user-arg and
  continue from Step 2.
- Multiple matches: list candidates, ask user to choose.
- No matches: show the catalog, ask user to clarify.

### type: "error" \u2014 CLI returned a hard error

Has a \`message\` string. Common cases:

- Branch matched but its summaries failed to load.
- No records in the repo at all.
- Invalid argument or internal failure.

Surface the message verbatim to the user (translated into their language if
non-English). For "no records in this repo" specifically, suggest running
\`jolli enable\` if they expected records. Do NOT retry or fabricate a recall
payload from nothing.
`}function c_(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${fr}"
  revision: 2
  vendor: "jolli.ai"
---

# Jolli Search

Search structured commit memories across every branch in this repo.
Lightweight BM25 index returns relevance-ranked hits \u2014 no two-phase catalog
scan required. For full context of a known branch, use jolli-recall instead.

## When to use

- "Has anyone dealt with X before?" / "How have we handled Y previously?"
- Looking for a past decision: "why did we choose X over Y?"
- Finding the commit related to a half-remembered ticket / file / topic.

## When NOT to use

- Need full context of a known branch \u2192 run jolli-recall.
- Looking at the current code \u2192 grep / read files directly.
- Need deep rationale/decisions for a specific branch \u2192 run jolli-recall on
  that branch (search hits are lightweight; full decisions live in recall).

## Step 1: Parse the query

Extract the natural-language query (any language). Optional: \`limit\` (integer,
default 20). Note: time/budget filters (\`--since\`, \`--budget\`) are not supported
on the search path \u2014 point users at jolli-recall for a full branch when they
need depth.

## Step 2: Get hits

### Preferred: MCP tool

If the \`search\` tool from the \`jollimemory\` MCP server is available, call it with:

\`\`\`json
{ "query": "<query>", "limit": 20 }
\`\`\`

Returns \`{ "hits": [ { type, title, snippet, branch, commitDate, slug, hash, score } ] }\`,
relevance-ranked (BM25). Proceed to Step 3 with these hits.

Match that tool by what it DOES, not by one host's spelling of it: Claude Code
prefixes it as \`mcp__jollimemory__search\`, while Codex exposes a bare \`search\`
inside the \`mcp__jollimemory\` namespace and loads MCP tools lazily \u2014 so an empty
first look is not proof it is absent.

### Fallback: CLI here-doc

Only if the jollimemory MCP server is not registered at all \u2014 NOT merely because
one spelling of the tool name is absent from your tool list. Prefer the MCP tool:
in a sandboxed agent this CLI path cannot write its search index cache, so it
rebuilds the whole index on every call. Then use:

${ug("search"," --format json")}

The CLI returns the same \`{ hits }\` envelope as the MCP tool.

**Failure handling**:
- If \`~/.jolli/jollimemory/run-cli\` does not exist: tell the user
  "Jolli not installed. Please install via \`npm install -g @jolli.ai/cli && jolli enable\`
  or install the Jolli VS Code extension." Do not attempt further processing.
- If the command output starts with \`error:\` or contains \`unknown command 'search'\`:
  the installed CLI is older than this skill. Tell the user
  "Your installed Jolli CLI is older than this skill \u2014 please run
  \`npm update -g @jolli.ai/cli\` (or update your VS Code extension), then retry."
  Do not attempt further processing.

Both paths produce the same \`{ hits }\` shape. Proceed to Step 3 regardless of
which path was used.

## Step 3: Render

\`hits\` are lightweight \u2014 no full decisions/recap per hit. For each relevant
hit you have:

- \`type\` \u2014 \`"commit"\` or \`"topic"\`
- \`title\` \u2014 one-sentence label
- \`snippet\` \u2014 short excerpt from the matching content
- \`branch\` \u2014 branch the hit belongs to
- \`commitDate\` \u2014 ISO 8601 date
- \`slug\` \u2014 human-readable identifier (for topics)
- \`hash\` \u2014 8-char short SHA (for commits)
- \`score\` \u2014 BM25 relevance score (internal; do not expose to the user)

**Universal principles** (apply regardless of shape):

1. **Lead with the answer.** No "Let me analyze..." or "Found N commits..." preamble.

2. **Ground every concrete claim** to its \`hash\` (commit hits) or \`slug\` +
   \`branch\` (topic hits). Use \`(abc12345)\` for hashes.

3. **Synthesize, don't dump \u2014 but DO use verbatim quotes from stored data.**
   Read everything; fold into coherent prose or bullets. Whenever a phrase from
   \`snippet\` captures the answer more compactly than your paraphrase, quote it
   verbatim in **bold** with attribution.

   Quote **complete clauses (typically 10-30 words)** \u2014 not 2-3 word fragments
   that depend on your surrounding paraphrase to mean anything. The reader
   should be able to skim the bold quote alone and understand its claim.
   Format, embedded in narrative: *the design chose JWT because*
   **"the stateless model lets us scale horizontally without a shared session store across regions"**
   *(snippet, abc12345)*.

   **Bold = verbatim from stored data.** Never use bold for general emphasis.
   Quotes belong inside running prose or bullets that carry their own narrative
   \u2014 never as bare bullets stripped of context. Stringing bare quotes is the
   wall-of-fragments failure mode.

4. **Reply in the user's language.** Template is English; user-visible output
   matches the user.

5. **Don't expose machinery.** No "BM25" / "SearchHit" / "hits array" / "score"
   mentions. Don't expose \`slug\` or internal field names either.

6. **Output shape is entirely your call.** Prose, compact list, timeline,
   per-theme sections \u2014 pick whatever serves the query. Every concrete claim
   must be groundable to a hash or branch.

7. **If the user needs the full decisions/rationale behind a hit**, tell them
   to run jolli-recall on that hit's \`branch\`.

**Empty hits** \u2192 tell the user nothing matched; suggest broader keywords or a
different phrasing. Do NOT mention BM25 or index internals.
`}function u_(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${fr}"
  revision: 5
  vendor: "jolli.ai"
---

# Jolli Local Run

Run a Jolli **workflow** locally: *your* agent executes the workflow's recipe on
this machine (so it spends no Jolli LLM budget), Jolli supplies the recipe and
tracks the run, and the workflow's file writes are published to a git-backed
Jolli Space through an agent branch + pull request that space-cli commits and
pushes locally.

A workflow can be run locally only when its destination Space is **git-backed**
AND already **cloned** on this machine. Before starting, the user is told whether
the resulting PR will **auto-merge** or **open for team review**.

Drive the steps below in order. Prefer the Jolli MCP tools for the run lifecycle;
the eligibility check and the git operations go through the \`jolli\` CLI (via the
run-cli entry script the sibling skills also use).

${Ee}

## Step 1 \u2014 discover the runnable workflows

Run the eligibility helper and read its JSON:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" workflow local-run
\`\`\`

- \`{ "type": "workflows", "workflows": [ { "id": 7, "name": "Impact Analysis", "autoMerges": true|false }, ... ] }\`
  \u2014 the workflows runnable right now. **Offer only these.** Present each one to
  the user by its \`name\` (fall back to the \`id\` when \`name\` is absent), and tell
  them up front whether it will **auto-merge** the PR (\`autoMerges: true\`) or
  **open the PR for team review** (\`autoMerges: false\`). If the array is empty,
  tell the user there are no locally-runnable workflows (a workflow's destination
  must be a git-backed, already-cloned Space) and stop.
- \`{ "type": "workflow_cli_required", "installHint": "..." }\` \u2014 the workflow-cli
  plugin is missing. Tell the user to install it (run the \`installHint\`) and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
  \`\`\`

- \`{ "type": "space_cli_required", ... }\` \u2014 the space-cli plugin is missing. Tell
  the user to install it and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/space-cli
  \`\`\`

- \`{ "type": "error", "message": "..." }\` \u2014 report the message and stop.

Have the user pick one workflow \u2014 list them by \`name\` (use your host's
interactive single-select tool if it has one \u2014 e.g. AskUserQuestion on Claude
Code \u2014 otherwise list them as text). Keep the chosen workflow's \`id\` for Step 2.

## Step 2 \u2014 start the run

Call the \`start_local_run\` tool (on Claude Code
\`mcp__jollimemory__start_local_run\`) with the chosen workflow's id, passed
**exactly as the helper returned it** \u2014 the backend's id is a number, so it stays
an unquoted number: \`{ "id": <workflow id> }\` (a string id/slug stays quoted).
Capture from its result:

- \`runId\` \u2014 the run handle for every later call.
- \`plan\` \u2014 the recipe steps your agent will execute.
- \`writeTarget\` \u2014 carries the server-derived \`workBranch\`, the destination Space,
  and the destination folder. Refer to the destination in user-facing prose by its
  **Space name / folder** only. Do **not** announce a backing repo \`owner/name\`, and
  do **not** present the \`workBranch\` as "the write target" \u2014 those are internal
  plumbing, not the destination's identity. The \`workBranch\` is passed verbatim to
  \`docs pull --branch\` in Step 3, but keep it framed as an internal detail. Do not
  inspect the clone's git remotes to name the destination. \`writeTarget.repo\` may be
  **empty** for a private Jolli-managed destination \u2014 that is normal, never an error,
  and never something to look up or narrate.

## Step 3 \u2014 check out the agent branch

Pull the destination clone onto the server-derived work branch:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" docs pull --branch <writeTarget.workBranch>
\`\`\`

**Always \`--branch\`. NEVER \`--agent\`.** The \`--agent\` mode runs a destructive
\`git clean -fdx\` that wipes untracked files; \`--branch\` checks out the
server-derived branch without cleaning. Do not substitute \`--agent\` under any
circumstances. \`docs pull\` fetches the destination write token internally \u2014 you
do **not** fetch or handle any token yourself.

## Step 4 \u2014 write the workflow's output

Execute the workflow's \`plan\` from Step 2, writing the output files under the
destination folder from \`writeTarget\`, inside the checked-out clone.

## Step 5 \u2014 local review gate (with heartbeats)

Nothing is committed or pushed until the human explicitly approves.

1. Send a heartbeat so the run's lease stays alive while the human reviews: call
   \`report_local_run_progress\` (on Claude Code
   \`mcp__jollimemory__report_local_run_progress\`) with \`{ "runId": "<runId>" }\`.
2. Show the working-tree diff of what the workflow wrote, and ask the user to
   review, edit if needed, and **explicitly approve** (or cancel).
3. When the user answers, send \`report_local_run_progress\` again.

Send the heartbeat **immediately before** asking and **immediately after** the
answer. Your turn is blocked while you wait for the human, so you cannot
heartbeat *during* the review \u2014 bracketing the approval prompt keeps the lease
fresh across the wait.

## Step 6 \u2014 on approval: publish and complete

1. Publish the branch as a pull request and capture the machine-readable result:

   \`\`\`bash
   "$HOME/.jolli/jollimemory/run-cli" docs publish --json
   \`\`\`

   \`--json\` prints exactly one JSON object on stdout (all human-readable progress
   goes to stderr) \u2014 parse that object; never scrape the human log for a PR number.
2. Verify the pull request landed on the server-derived work branch. \`docs publish\`
   reports the branch the PR was actually opened on as \`headBranch\` (present on both
   the public and the private/withheld paths); the run's server work branch is
   \`writeTarget.workBranch\` from Step 2. **When \`pushed\` is true, cross-check them
   deterministically** \u2014 do not eyeball it yourself:

   \`\`\`bash
   "$HOME/.jolli/jollimemory/run-cli" space verify-publish-branch <writeTarget.workBranch> <headBranch>
   \`\`\`

   It prints \`{ "match": true|false, "expected": "...", "actual": "..." }\` and exits
   non-zero when the branches differ or \`headBranch\` is missing. **If \`match\` is
   false, STOP** \u2014 the PR was opened on the wrong branch (usually because \`docs pull
   --branch <workBranch>\` in Step 3 was skipped, so space-cli generated its own
   \`jolli-<hex>\` branch). The backend cannot link the run to that PR, so it will
   **not** auto-merge and the articles will **never** publish. Tell the user the
   run-to-PR link is broken (published on \`<actual>\` instead of the expected
   \`<expected>\`) and **do NOT call \`complete_local_run\` as if the run succeeded** \u2014
   release the run with \`abandon_local_run\` (Step 7) or ask the user how to proceed.
   Skip this check only when \`pushed\` is false (nothing was published).
3. Call \`complete_local_run\` (on Claude Code
   \`mcp__jollimemory__complete_local_run\`), branching on what the publish JSON
   contained:
   - **PR refs present** (the JSON has a \`prNumber\` \u2014 a user-accessible
     destination): pass them through \u2014
     \`{ "runId": "<runId>", "prNumber": <prNumber>, "prUrl": "<prUrl>" }\`.
   - **PR refs withheld** (the JSON is \`"private": true\` with no \`prNumber\` \u2014 a
     private Jolli-managed destination whose backing repo the user cannot access):
     complete WITHOUT a PR reference \u2014 \`{ "runId": "<runId>" }\`. Do not invent,
     guess, or look up a \`prNumber\`; the run already knows its destination is private.
   - **Nothing published** (\`"pushed": false\`, e.g. \`"reason": "no-changes"\`): no PR
     was opened, so there is nothing to complete \u2014 tell the user the workflow produced
     no changes and release the run with \`abandon_local_run\` (Step 7).
4. Read the outcome and its links off \`complete_local_run\`'s result and report them.
   Every URL is read **verbatim** off the result \u2014 never construct, guess, or look up
   one. The result carries \`willAutoMerge\`, \`workflowUrl\`, \`runUrl\`, and (auto-apply
   ON only) a \`writtenArticles\` list of \`{ operation, path, url, active, ... }\`.
   - **Auto-apply on** (\`willAutoMerge: true\`): the destination auto-applies, so the PR
     is **set to auto-merge** and \u2014 once it does \u2014 the created/edited **articles are the
     artifact**. Treat \`willAutoMerge: true\` as the destination's *intent*, NOT a
     confirmation that the merge already completed \u2014 so do **not** flatly tell the user
     "PR auto-merged". Report what actually published, judged by each article's own state:
     for every \`writtenArticles\` entry that is still openable (\`active: true\` **and** a
     non-null \`url\`), present its URL as a published article. If an article is
     \`active: false\` or has \`url: null\`, publishing has **not** completed yet (the
     auto-merge and reindex may still be in progress) \u2014 tell the user that article is
     **not yet available**, never invent a URL, and note they can re-check shortly via the
     run URL or by re-running \`workflow run-status <runId>\`. Then present the workflow URL
     (\`workflowUrl\`) and the run URL (\`runUrl\`).
   - **PR left open for team review** (\`willAutoMerge: false\` \u2014 auto-apply off): the
     open **PR is the artifact**. Tell the user "PR left open for team review" and
     present the PR URL (\`prUrl\`), the workflow URL (\`workflowUrl\`), and the run URL
     (\`runUrl\`).
   - **Private Jolli-managed destination** (the result carries no \`prUrl\`): present the
     **article URLs only** (same \`active: true\` + non-null \`url\` rule) plus the workflow
     URL and run URL \u2014 never surface a repo or PR link the result did not carry. As with
     any auto-apply run, an article that is not yet \`active\` / lacks a \`url\` is **not yet
     available** (publishing still completing), not an error \u2014 say it will appear once
     published and offer the run URL to re-check.
5. Offer to open any reported URL in the user's default browser. For each URL the user
   chooses, shell:

   \`\`\`bash
   "$HOME/.jolli/jollimemory/run-cli" open-url <url>
   \`\`\`

   It prints one JSON line \`{ "opened": true|false, "url": "..." }\`. When \`opened\` is
   \`false\` (headless / no browser available) the URL is printed for the user to copy
   instead \u2014 that is normal, not a failure. Only \`https\` URLs are accepted. A URL
   whose origin is off Jolli's allowlist is refused (never launched) and printed
   instead \u2014 the result carries \`"refused": true\`; surface that URL for the user to
   open manually, not as an error.

## Step 7 \u2014 on cancel: abandon

If the user cancels at the review gate (or you must abort), release the run: call
\`abandon_local_run\` (on Claude Code \`mcp__jollimemory__abandon_local_run\`) with
\`{ "runId": "<runId>" }\`.

## If space-cli is missing at any point

Any \`docs\` command that prints an install hint (or the eligibility helper's
\`space_cli_required\` result) means the space-cli plugin is not installed. Tell the
user to install it and stop:

\`\`\`bash
npm i -g @jolli.ai/cli @jolli.ai/space-cli
\`\`\`
`}function d_(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${fr}"
  revision: 4
  vendor: "jolli.ai"
---

# Jolli Remote Run

Run a Jolli **workflow** remotely: the Jolli backend executes the workflow
server-side (it spends Jolli LLM budget, unlike a local run), and this recipe
triggers the run, monitors it to a terminal state, and reports what it produced \u2014
the still-active article URLs, the pull-request URL when the destination is
git-backed, and the workflow/run deep-links \u2014 then offers to open any of them.

Drive the steps below in order. Prefer the Jolli MCP tools for the run lifecycle \u2014
the run tools (\`run_remote_workflow\`, \`cancel_remote_workflow\`) have **no CLI
mirror** \u2014 and shell the \`jolli\` CLI (via the run-cli entry script the sibling
skills also use) only for the deterministic monitor and the browser-open helper.

Every URL is read **verbatim** off the run report \u2014 never construct, guess, or
look one up. A link that is not in the report was withheld on purpose (for
example, a private Jolli-managed destination omits the PR link but keeps the
article URLs); treat its absence as normal, never an error.

${Ee}

## Step 1 \u2014 identify the workflow to run

Determine which workflow the user wants to run and keep its numeric \`id\`.

- If the \`list_workflows\` tool is registered this session (on Claude Code
  \`mcp__jollimemory__list_workflows\`), call it to list the available workflows and
  present them to the user by \`name\` (use your host's interactive single-select
  tool if it has one \u2014 e.g. AskUserQuestion on Claude Code \u2014 otherwise list them as
  text). Keep the chosen workflow's \`id\`.
- Otherwise, ask the user which workflow to run and get its numeric \`id\`.

## Step 2 \u2014 confirm the run monitor is installed (before triggering)

The run trigger (\`run_remote_workflow\`) is a Jolli **backend** tool: it creates a
real, budget-spending run **even when the deterministic monitor is not installed**.
The monitor (\`workflow run-status\`, Step 4) is provided by the
\`@jolli.ai/workflow-cli\` plugin. So confirm that plugin is present **before**
triggering \u2014 otherwise a missing monitor would leave the run you are about to
create orphaned (still running server-side, with no way for this recipe to report
its outcome).

Run the plugin's eligibility helper purely as a presence probe and read its JSON:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" workflow local-run
\`\`\`

- \`{ "type": "workflow_cli_required", "installHint": "..." }\` \u2014 the workflow-cli
  plugin is **not installed**. Do **not** trigger the run. Tell the user to install
  it (run the \`installHint\`) and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
  \`\`\`

- **any other result** (\`workflows\`, \`space_cli_required\`, or \`error\`) \u2014 the plugin
  **is** installed (only its stub ever emits \`workflow_cli_required\`), so the monitor
  is available. Ignore the rest of this probe's output \u2014 it reports *local*-run
  eligibility, which does not gate a remote run \u2014 and proceed to Step 3.

## Step 3 \u2014 trigger the remote run

Call the \`run_remote_workflow\` tool (on Claude Code
\`mcp__jollimemory__run_remote_workflow\`) with the chosen workflow's id, passed as
an **unquoted number**: \`{ "id": <workflow id> }\` (add \`templateVariables\` only if
the workflow needs them). Capture \`runId\` from its result (\`{ "runId": "..." }\`) \u2014
that handle drives the monitor in Step 4.

## Step 4 \u2014 monitor the run to completion

Shell the deterministic monitor with the captured \`runId\`:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" workflow run-status <runId>
\`\`\`

It polls the run to a terminal state (with backoff, so you do not drive the poll
loop yourself) and prints exactly one JSON line \u2014 the run report. Parse it:

- \`status\` \u2014 one of \`"succeeded"\`, \`"failed"\`, \`"cancelled"\`, \`"running"\`.
- \`openableUrls\` \u2014 an array of \`{ "kind": "workflow" | "run" | "article" | "pr", "url": "...", "label": "..." }\`.
  Only openable URLs appear here (active articles with a non-null url, a PR only
  when the payload carried one) \u2014 present exactly these, nothing more.
- \`cancel\` (cancelled runs) \u2014 \`{ "by": "...", "at": "..." }\` when known.
- \`troubleshooting\` (failed runs) \u2014 the actionable error detail.
- \`timedOut\` \u2014 \`true\` when the monitor stopped polling before the run reached a
  terminal state (see the "still running" case below).

If the command instead prints \`{ "type": "error", "message": "..." }\` (the run
could not be reached \u2014 platform tools off, or a transport failure), tell the user
the run status could not be retrieved and stop. That is a degraded outcome, not a
crash \u2014 the run may still be progressing server-side.

If instead the command exits non-zero and prints a prose install hint naming
\`@jolli.ai/workflow-cli\` (rather than a JSON report line), the workflow-cli plugin
is not installed. Tell the user to install it and stop:

\`\`\`bash
npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
\`\`\`

## Step 5 \u2014 report the outcome

Report based on \`status\`:

- **succeeded** (\`status: "succeeded"\`): the run finished. Present the \`article\`
  URLs from \`openableUrls\` (each by its \`label\`), the \`pr\` URL if one is present,
  and the \`workflow\` and \`run\` deep-links. Never surface a link that is not in
  \`openableUrls\` \u2014 a missing PR link means the destination withheld it (a private
  Jolli-managed destination), which is normal.
- **failed** (\`status: "failed"\`): the run failed. Present the \`troubleshooting\`
  detail (the actionable error) and the \`workflow\` URL.
- **cancelled** (\`status: "cancelled"\`): the run was cancelled. Report who
  (\`cancel.by\`) and when (\`cancel.at\`) when present, plus the \`workflow\` URL.
- **still running** (\`status: "running"\` with \`timedOut: true\`): the monitor
  stopped polling before the run reached a terminal state \u2014 the run is **still
  running server-side**, not failed. Tell the user it is still in progress, present
  the \`workflow\` URL so they can watch it, and note they can re-check later by
  re-running \`workflow run-status <runId>\`.

## Step 6 \u2014 offer to open any reported URL

Offer to open any URL from the report in the user's default browser. For each URL
the user chooses, shell:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" open-url <url>
\`\`\`

It prints one JSON line \`{ "opened": true|false, "url": "..." }\`. When \`opened\` is
\`false\` (headless / no browser available) the URL is printed for the user to copy
instead \u2014 that is normal, not a failure. Only \`https\` URLs are accepted. A URL whose
origin is off Jolli's allowlist is refused (never launched) and printed instead \u2014 the
result carries \`"refused": true\`; surface that URL for the user to open manually, not
as an error.

## Cancelling an in-flight run

While a remote run is still in progress, the user can stop it: call
\`cancel_remote_workflow\` (on Claude Code
\`mcp__jollimemory__cancel_remote_workflow\`) with the workflow's numeric id \u2014
\`{ "id": <workflow id> }\`. After cancelling, re-run \`workflow run-status <runId>\`
to report the cancelled outcome (who/when + workflow URL).
`}function p_(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${fr}"
  revision: 7
  vendor: "jolli.ai"
---

# Jolli

The single umbrella action menu for Jolli. It ties together the standalone Jolli
skills and whatever Jolli MCP tools are registered in this session, and routes the
user's choice to the right one. It is a friendly front door \u2014 it **never**
re-implements any action, it only invokes an existing skill or an existing MCP
tool. The standalone \`/jolli-recall\`, \`/jolli-search\` commands and
the \`/mcp__jollimemory__jolli\` prompt all keep working unchanged; this is layered
on top of them, not a replacement.

The **Workflow history** action below shells the \`jolli\` CLI (via the run-cli
entry script), so the shell prerequisite applies when that action is used.

${Ee}

## Step 1 \u2014 build the unified menu

Assemble ONE combined list of actions from two sources.

### Local Jolli skills

Offer the \`jolli-*\` skills that are ACTUALLY AVAILABLE in this session, not a
fixed list \u2014 exactly as with the MCP tools below. The four described here ship
everywhere, so they are documented in full; a host that also has a Jolli plugin
installed (Cursor, Codex, Claude Code) additionally exposes setup and account
skills such as \`jolli-init\`, \`jolli-login\`, \`jolli-logout\`, \`jolli-status\`,
\`jolli-timeline\` and \`jolli-push\`. Include whichever of those exist, named as
this host invokes them, and route by invoking the skill rather than restating its
steps. If the user asks for something one of them owns \u2014 setting Jolli up, signing
in, checking installation health, publishing this branch's memories \u2014 route there
instead of answering that the menu has no such action.

- **jolli-recall** \u2014 Recall prior development context for the current branch.
  Route by invoking the \`jolli-recall\` skill.
- **jolli-search** \u2014 Search structured commit memories across branches
  (decisions, topics, files). Route by invoking the \`jolli-search\` skill.
- **Run a workflow** \u2014 Run a Jolli workflow. When the user picks this, ask them
  **local vs remote**, defaulting to **local**:
  - **local (default)** \u2014 your agent executes the workflow's recipe on this
    machine (no Jolli LLM budget); the writes land in a git-backed Space via a
    branch + PR. Route by invoking the \`jolli-local-run\` skill.
  - **remote** \u2014 the Jolli backend executes the workflow server-side, and the run
    is monitored to completion and its result reported. Route by invoking the
    \`jolli-remote-run\` skill (which drives the \`run_remote_workflow\` tool for
    you) \u2014 not by calling the raw tool.

  A running **remote** run can be canceled with the \`cancel_remote_workflow\` MCP
  tool (\`mcp__jollimemory__cancel_remote_workflow\`) \u2014 offer this if the user
  wants to stop an in-flight remote run.
- **Workflow history** \u2014 Show a workflow's past runs. When the user picks this,
  identify the workflow's numeric id (if the \`list_workflows\` tool is registered
  this session, use it to let the user pick one by name; otherwise ask for the
  id), then shell:

  \`\`\`bash
  "$HOME/.jolli/jollimemory/run-cli" workflow runs <workflowId>
  \`\`\`

  It prints \`{ "type": "runs", "runs": [ ... ] }\` \u2014 one entry per run with its
  \`status\`, \`timestamp\`, and any \`workflowUrl\` / \`runUrl\` / \`prUrl\` /
  \`articleUrls\`. An empty \`runs\` list is the normal "no history yet" outcome, not
  an error. If instead the command exits non-zero and prints an install hint naming
  \`@jolli.ai/workflow-cli\` (rather than the JSON above), the workflow-cli plugin is
  not installed \u2014 tell the user to install it (\`npm i -g @jolli.ai/cli @jolli.ai/workflow-cli\`)
  and stop. Offer to open any listed URL via the \`open-url\` helper:

  \`\`\`bash
  "$HOME/.jolli/jollimemory/run-cli" open-url <url>
  \`\`\`

  (\`{ "opened": true|false, "url": "..." }\`; \`opened: false\` on a headless host
  just prints the URL \u2014 normal, not a failure. Only \`https\` URLs are accepted. A URL
  whose origin is off Jolli's allowlist is refused (never launched) and printed \u2014 the
  result carries \`"refused": true\`; surface it for the user to open manually.)

Route a local, remote, or history choice by invoking that skill through your
host's skill-invocation mechanism (for example, the Skill tool in Claude Code);
the Workflow history action runs its \`run-cli\` commands directly as shown above.

### Jolli MCP tools (whatever is registered this session)

Surface every jollimemory MCP tool registered in the current session \u2014 for example
\`recall\`, \`search\`, \`get_pr_description\`, \`queue_status\`, and any
manifest-driven platform tools (space, article, and the like). Route a choice by
calling the matching tool.

**How to find them depends on the host.** On Claude Code they are prefixed, so
match names starting with \`mcp__jollimemory__\`. On Codex the same tools are BARE
names inside the \`mcp__jollimemory\` namespace, so a prefix match finds nothing \u2014
look for the namespace instead, and note that Codex loads MCP tools lazily, so
search your available tools before concluding none are registered.

**Exclusions \u2014 do NOT surface these as standalone menu items:**

- \`list_workflow_definitions\` \u2014 discovery/plumbing, not a human quick-action.
- \`run_remote_workflow\` and \`cancel_remote_workflow\` \u2014 these are already covered
  by the **Run a workflow** action above (its *remote* path and its cancellation
  option); don't list them again as raw tools.

Do NOT assume a fixed list \u2014 enumerate the Jolli MCP tools that are actually
registered right now, minus the exclusions above. Do NOT try to fetch or
re-derive any backend "menu" curation; a skill cannot read the manifest, so
simply surface the Jolli MCP tools present in the session. If no Jolli MCP tools
are registered, present just the local skills above.

## Step 2 \u2014 route the request

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one menu action and invoke that
  action directly (invoke the skill, or call the MCP tool). Only ask the user to
  choose if the request is ambiguous or matches no menu action.
- **Argument absent** \u2192 present the unified menu and let the user pick one, using
  an interactive single-select tool if your host provides one (for example
  AskUserQuestion in Claude Code); otherwise list the options as plain text and
  ask the user to choose. After the user selects, invoke the corresponding skill
  or MCP tool.

Host-agnostic by design: the AskUserQuestion mention is only an example; the
text-list fallback keeps \`/jolli\` usable on every host that loads skills.
`}function m_(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${fr}"
  revision: 8
  vendor: "jolli.ai"
---

# Jolli

The single front door for Jolli. Rather than dumping a static list, it reads how
Jolli is set up in THIS repo and guides the next step: if setup is incomplete it
walks the user into \`/jolli:init\`; if memories are being captured but cannot be
shared yet it reminds the user to sign in; once everything is wired it shows a
short status snapshot and routes the user's choice to the right skill or Jolli
MCP tool. It is a friendly front door \u2014 it **never** re-implements any action, it
only reads status and invokes an existing skill or an existing MCP tool. The
standalone \`/jolli:init\`, \`/jolli:recall\`, \`/jolli:search\`, \`/jolli:push\`,
\`/jolli:login\`, \`/jolli:logout\`, \`/jolli:status\` and \`/jolli:timeline\`
entry points all keep working unchanged; this is layered on top of them, not a
replacement.

## Step 0 \u2014 confirm this menu can route

This menu is a project skill written OUTSIDE the Jolli plugin (a plugin skill
could only ever be \`/jolli:<name>\`, never a bare \`/jolli\`), so it can linger
in \`.claude/skills/jolli/\` after the plugin has been uninstalled. It can only
route to targets that exist in THIS session, so before doing anything else
confirm at least one routing target is available. The menu can route if
**either** of these holds:

- one or more MCP tools whose name contains \`jollimemory\` are registered, **or**
- the plugin's own namespaced skills (\`jolli:init\` / \`jolli:recall\` /
  \`jolli:search\` / \`jolli:push\`) are invocable this session.

If **either** holds, proceed to Step 1.

If **neither** holds, do **not** build the menu and do **not** invoke any
\`/jolli:*\` skill \u2014 it is not registered and the call will fail. But this alone
does NOT mean Jolli is gone: the Jolli CLI installs a memory pipeline that runs
independently of this plugin (git hooks that generate memories on every commit).
So distinguish the two cases \u2014 check whether the bundled CLI dispatch exists by
running \`test -f "$HOME/.jolli/jollimemory/run-cli" && echo present\`:

- **CLI present** \u2192 Jolli still works; only the plugin's interactive menu is not
  loaded in this session. Tell the user plainly: the Jolli plugin menu isn't
  loaded here, but the Jolli CLI is still installed \u2014 commits still generate
  memories, and they can run \`jolli recall\` / \`jolli search\` directly. This
  \`/jolli\` file is a leftover from a previous plugin install; they can remove
  it with \`rm -rf .claude/skills/jolli\`, and reinstall the Jolli plugin to
  bring the menu back.
- **CLI absent** \u2192 Jolli is no longer installed at all. Tell the user this
  \`/jolli\` menu is a stale leftover; they can remove it with
  \`rm -rf .claude/skills/jolli\`, and (re)install Jolli to bring it back.

Either way, then stop \u2014 do not continue to Step 1.

## Step 1 \u2014 read how Jolli is set up

Before deciding what to show, read the current state so you can guide instead of
guessing. This is the state-aware front door \u2014 not a static list.

**Preferred (MCP):** call the \`status\` tool (on Claude Code
\`mcp__jollimemory__status\`) with no arguments. From its result read:

- \`enabled\` \u2014 are Jolli's git hooks installed in this repo (is memory
  generation on)?
- \`account.signedIn\` \u2014 is the user signed in to Jolli?
- \`account.jolliApiKeyConfigured\` \u2014 is a stored Jolli API key present? Surfaced
  ONLY when signed OUT (a sign-in already implies a Jolli credential, so the field
  is omitted once \`account.signedIn\` is true).
- \`account.anthropicKeyConfigured\` \u2014 is an Anthropic key present? Surfaced ONLY
  when \`account.aiProvider === "anthropic"\`; omitted for every other provider.
- \`account.aiProvider\` \u2014 \`"local-agent"\` | \`"jolli"\` | \`"anthropic"\` | \`null\`.
  Drives the provider-aware generation check in Step 2.
- \`account.localAgentTool\` \u2014 label of the local agent CLI that generates
  summaries (e.g. "Claude Code"). Surfaced ONLY when
  \`account.aiProvider === "local-agent"\`; feeds the snapshot's engine suffix.
- \`account.site\` \u2014 the Jolli site host, for the snapshot line.
- \`storedMemories\` \u2014 how many memories this repo already has.
- \`space\` \u2014 the bound Jolli Space (\`{ name }\`) this repo's memories sync to, or
  \`null\` when the repo isn't bound yet. Drives the \`syncing \xB7 Space\` snapshot line.

**Fallback (CLI):** if the \`status\` MCP tool is unavailable (an older Jolli),
run the bundled CLI through its stable dispatch script and read the same facts
from its printed output:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" status
\`\`\`

If neither the tool nor the CLI can be reached at all, skip the state-based
guidance and go straight to Step 3's menu (present it without a snapshot).

Note: \`status.space\` is display-only \u2014 it names the bound Space for the snapshot
but does NOT confirm push health. Full binding management (picking / re-binding a
Space) stays \`/jolli:init\`'s and \`/jolli:push\`'s job; do not try to (re)bind here.

## Step 2 \u2014 guide by state (the front door)

Derive two capabilities from Step 1, mirroring the CLI's guided front door:

- **can generate memories** \u2014 provider-AWARE, NOT a blind OR of every field.
  Read \`account.aiProvider\` and decide:
  - \`local-agent\` \u2192 **yes** (memories generate through the user's local agent CLI
    named by \`account.localAgentTool\` \u2014 no API key and no Jolli sign-in required).
    This is the plugin's default, so a freshly-installed plugin repo can already
    generate.
  - \`jolli\` \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  - \`anthropic\` \u2192 yes only if \`account.anthropicKeyConfigured\`.
  - \`null\` / unset \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.

  (For the Jolli proxy a sign-in DOES carry a generation credential \u2014 signing in
  mints a Jolli API key \u2014 which is why \`jolliApiKeyConfigured\` is omitted once
  signed in. For the \`anthropic\` provider, sign-in alone does NOT count.)
- **can sync memories** = \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  Provider-independent: syncing to a Jolli Space always needs a **Jolli**
  credential, so an Anthropic key never satisfies it. This axis is orthogonal to
  generation \u2014 the default \`local-agent\` repo generates fine while unable to
  sync, which is exactly the state the Step 2 sign-in nudge below exists for.
- **enabled** = the \`enabled\` flag.

Then take exactly one branch:

- **Not fully set up** \u2014 \`enabled\` is false, OR memories can't be generated:
  memory generation isn't wired yet, so lead with SETUP, not the action menu.
  State in one line what's missing (for example "not signed in, and memory
  generation is off for this repo"), then invoke the \`jolli:init\` skill through
  the Skill tool \u2014 it walks sign-in \u2192 enable \u2192 bind a Space in one guided pass.
  Do NOT hand-roll those steps here; \`/jolli:init\` owns them. (Exception: if the
  user gave an argument in Step 3 that clearly names a different action, honor
  that instead \u2014 see Step 3.)

- **Fully set up** \u2014 enabled AND a credential present: print a short snapshot,
  then continue to Step 3 to present the action menu.

  \`\`\`
  \u2713 signed in \xB7 <account.site> \xB7 summaries via <account.localAgentTool>
  \u2713 enabled \xB7 <storedMemories> memories
  \u2713 syncing \xB7 Space "<space.name>"    (ONLY when \`space\` is non-null; omit the whole line otherwise)

  Jolli is listening \u2014 last memory saved.
  \`\`\`

  Pick the FIRST line by state, mirroring the CLI front door's wording exactly:

  - signed in \u2192 \`\u2713 signed in \xB7 <account.site>\`, plus \` \xB7 summaries via
    <account.localAgentTool>\` when \`account.aiProvider\` is \`local-agent\`. Drop
    the \`\xB7 <site>\` segment when \`account.site\` is null.
  - not signed in, \`local-agent\` \u2192 \`\u2713 local agent set (not signed in to Jolli)\`.
  - not signed in, \`jolli\` \u2192 \`\u2713 Jolli API key set (not signed in to Jolli)\`.
  - not signed in, \`anthropic\` \u2192 \`\u2713 Anthropic API key set (not signed in to Jolli)\`.

  Render the \`\u2713 syncing \xB7 Space "<space.name>"\` line **only when \`space\` is
  non-null** \u2014 it means a \`git push\` auto-publishes this branch's memories to that
  Space (the pre-push hook does it). When \`space\` is null, drop that line entirely;
  do not print a "not bound" line here (binding is \`/jolli:init\`'s job).

  The closing \`Jolli is listening \u2014 \u2026\` line mirrors the CLI front door: use
  **"last memory saved."** when \`storedMemories\` > 0, or **"your next commit is your
  first memory"** when \`storedMemories\` is 0.

  If \`storedMemories\` is 0, still show the menu, but Step 3 leads it with
  \`/jolli:init\` (on a fresh repo recall / search would only return empty, so
  they must not be the default action).

### Sign-in nudge \u2014 only when **can sync** is false

Generation working does not mean memories are shared. When the user can generate
but **can sync** is false (the normal state of a fresh \`local-agent\` install),
add ONE line under the snapshot, mirroring the CLI front door's optional
sign-in step:

\`\`\`
Sign in to Jolli to sync memories to a Space? (/jolli:login \u2014 memory generation keeps running locally either way)
\`\`\`

Rules for the nudge:

- It is **non-blocking**. Never withhold the Step 3 menu waiting for an answer,
  and never treat "not signed in" as broken \u2014 the repo is capturing memories.
- Offer it **once** per invocation. If the user declines, drop it for the rest of
  the session and do not repeat it after later actions.
- If the user accepts, hand off to the existing login flow: tell them to run
  \`/jolli:login\` (a skill cannot invoke a slash command for them), or invoke
  \`jolli:init\` when they also want to bind a Space in the same pass. Do NOT run
  \`auth login\` yourself here \u2014 \`/jolli:login\` owns that flow.
- Skip the nudge entirely when **can sync** is true, and inside the "Not fully
  set up" branch (there \`/jolli:init\` already walks sign-in).

## Step 3 \u2014 route the request / present the menu

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one action below and invoke that
  action directly (invoke the skill, or call the Jolli MCP tool), regardless of
  the Step 2 state \u2014 a specific request wins over the setup nudge. The invoked
  skill handles its own preconditions (for example \`/jolli:push\` will offer to
  bind a Space if the repo isn't bound). Only ask the user to choose if the
  request is ambiguous or matches no action.
- **Argument absent** \u2192 after the Step 2 guidance, present the action menu and
  let the user pick, using an interactive single-select tool if your host
  provides one (for example AskUserQuestion in Claude Code); otherwise list the
  options as plain text and ask. Bias the ordering to the state: when
  \`storedMemories\` is 0, lead with \`/jolli:init\` as the FIRST (default)
  option \u2014 finish setup / bind a Space, or just make the first commit \u2014 and
  demote recall / search below it, since on a fresh repo both would only
  return empty. When memories exist, lead instead with recall / search. Either
  way keep \`/jolli:init\` available for re-running setup or re-binding a Space.
  After the user selects, invoke the corresponding skill or MCP tool.

### Jolli plugin skills

List a plugin skill only if it was confirmed available in Step 0.

- **/jolli:init** \u2014 Set up Jolli for this repo: sign in if needed, enable memory
  generation, and bind the repo to a Jolli Space. Route by invoking the
  \`jolli:init\` skill.
- **/jolli:recall** \u2014 Recall prior development context for the current branch.
  Route by invoking the \`jolli:recall\` skill.
- **/jolli:search** \u2014 Search structured commit memories across branches
  (decisions, topics, files). Route by invoking the \`jolli:search\` skill.
- **/jolli:push** \u2014 Publish this branch's memories to a Jolli Space. Route by
  invoking the \`jolli:push\` skill.

Route a local choice by invoking that skill through the Skill tool.

### Jolli plugin commands

The plugin also ships these as slash **commands**, so they belong in the menu \u2014
but a skill cannot invoke a command. Route a choice by telling the user to run
it (one line, with the command spelled out), or by calling the equivalent Jolli
MCP tool when one exists.

- **/jolli:login** \u2014 Sign in to Jolli so this repo can bind a Space and share
  memories. Surface this whenever **can sync** is false, even if the user did not
  pick it. Generation is unaffected by signing in.
- **/jolli:logout** \u2014 Clear the stored Jolli credentials.
- **/jolli:status** \u2014 Full installation / queue health. Prefer the \`status\` MCP
  tool when it is registered.
- **/jolli:timeline** \u2014 How one decision topic evolved. Prefer the
  \`get_decision_timeline\` MCP tool when it is registered.

### Jolli MCP tools (whatever is registered this session)

Surface every tool whose name contains \`jollimemory\` that is available in the
current session \u2014 for example \`recall\`, \`search\`, \`get_pr_description\`,
\`queue_status\`, \`status\`, and the Jolli Space tools (\`list_spaces\`,
\`bind_space\`, \`push_memory\`). Route a choice by calling the matching Jolli
MCP tool.

Do NOT assume a fixed list \u2014 enumerate the Jolli MCP tools that are actually
registered right now. If no Jolli MCP tools are registered, present just the
plugin skills above.
`}var L=p("Installer");function h_(t,e){return process.platform==="linux"?t===e:t.toLowerCase()===e.toLowerCase()}async function g_(t){let e=await Se(),r=vh(e.globalInstructions);if(r.write){let n=t?.codexDetected??await wi(),o=t?.geminiDetected??await Ti();await Ch({claude:e.claudeEnabled!==!1,gemini:o&&e.geminiEnabled!==!1,codex:n&&e.codexEnabled!==!1})}else r.remove&&await xh()}async function Qa(t,e,r){let n=async()=>{if(!await Da())return!1;try{await hh()}catch(s){L.warn("Legacy dist-path migration failed (non-fatal): %s",s.message)}if(!await tn(t,e))return!1;try{let s=await fh();s.length>0&&L.info("Pruned stale dist-paths entries: %s",s.join(", "))}catch(s){L.warn("Pruning stale dist-paths failed (non-fatal): %s",s.message)}return!0},o=r?await Ds(n,r):await Ds(n);return o.acquired&&o.value===!0}async function pg(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0,s=e?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:n};if(!await Pn(r))return L.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",r),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${r})`,warnings:n};L.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await Se(),l=e?.automatic?[r]:await Ht(r),c=e?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,Dt.dirname)((0,dg.fileURLToPath)(__jmImportMetaUrl)),u=e?.source??"cli",m=e?.sourceTag??(u==="vscode-extension"?Pa(d):"cli");if(!en(m))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(m)}`,warnings:n};let f=Ld(m);if(!await Qa(m,e?.distDir,c))return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:n};if(!o){if(i=c?await Cr(r,c):await Cr(r),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};if(e?.respectManualDisable&&await rt(r))return{success:!0,message:"Repository remains manually disabled",warnings:n,manuallyDisabled:!0};if(!e?.automatic)try{let T=await Md(m,a);T!==null&&(T.seededTool||T.seededProvider)&&L.info("Plugin init seeded localAgentTool=%s (source %s, seededTool=%s, seededProvider=%s)",T.tool,m,T.seededTool,T.seededProvider),T?.keptTool!==void 0&&L.info("Plugin init kept localAgentTool=%s (source %s drives %s; left alone)",T.keptTool,m,T.tool)}catch(T){n.push(`Could not record the local agent tool for this host: ${T.message}`)}}let g=s?!1:await wi(),b=s?!1:await Ti(),C=s?!1:await rd(),E=s?!1:await Fd(),N=s?!1:await zu(),O=s?!1:await Wu(),B=s?!1:await ju()||await Mu(),Qe=s?!1:await ki(),V=s?!1:await Di(),$e=s?!1:await bi(),Ot=s?!1:await Fu(),yr=s?!1:await sd(),wr=s?!1:await Tu(),yn=s?!1:await Nd(),Sr={};for(let T of l){let Lt=await Ys(T),Kg=(0,Dt.join)(Lt,"sessions.json");try{await(0,rs.writeFile)(Kg,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(je){je.code!=="EEXIST"&&L.warn("Failed to bootstrap sessions.json in %s: %s",T,je.message)}if(s){if(await Va(T),f==="claude"){if(await tg(T),await cg(T),await qo(T,[...Zo]),a.claudeEnabled!==!1){let je=await sa(T);(T===r||Sr.path===void 0)&&(Sr=je)}}else if(f==="cursor"){let je={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1};await Ga(T,je),await qo(T,pr(je).flatMap(Vg=>Vg.gitExcludePaths()))}await Ya(T),await qo(T,[...ng]);continue}await eg(T,{claudeEnabled:a.claudeEnabled});let kl={claude:a.claudeEnabled!==!1,codex:g,cursor:Qe,gemini:b,opencode:V,copilot:$e,copilotChat:O,cline:Ot,devin:yr,antigravity:wr,kimi:yn};if(await bh(T,[...Qh,...Zo,...pr(kl).flatMap(je=>je.gitExcludePaths())]),await Ga(T,kl),o||a.claudeEnabled===!1)continue;let us=await sa(T);us.warning&&n.push(us.warning),(T===r||Sr.path===void 0)&&(Sr=us)}await Wh({claude:!1,cursor:!1,codex:g||s&&f==="codex",gemini:b,opencode:V,copilot:$e,copilotChat:O,cline:Ot,devin:yr,antigravity:wr,kimi:yn}),s||await g_({codexDetected:g,geminiDetected:b});let wn={},Sn={},bn={},En={},kn={};o||(wn=await cu(r),wn.warning&&n.push(wn.warning),Sn=await uu(r),Sn.warning&&n.push(Sn.warning),bn=await du(r),bn.warning&&n.push(bn.warning),En=await pu(r),En.warning&&n.push(En.warning),kn=await mu(r),kn.warning&&n.push(kn.warning)),g&&a.codexEnabled===void 0&&(await St({codexEnabled:!0}),L.info("Codex detected \u2014 enabled Codex session discovery"));let cs;if(b&&a.geminiEnabled!==!1){if(!o)for(let T of l){let Lt=await Na(T);(T===r||cs===void 0)&&(cs=Lt.path)}a.geminiEnabled===void 0&&(await St({geminiEnabled:!0}),L.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&E&&a.openCodeEnabled===void 0&&(await St({openCodeEnabled:!0}),L.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let qg=s?!1:await Qu(),wl=a.cursorEnabled!==!1&&C,Sl=a.cursorEnabled!==!1&&qg;(wl||Sl)&&a.cursorEnabled===void 0&&(await St({cursorEnabled:!0}),L.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",wl,Sl));let bl=a.copilotEnabled!==!1&&N,El=a.copilotEnabled!==!1&&O;if((bl||El)&&a.copilotEnabled===void 0&&(await St({copilotEnabled:!0}),L.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",bl,El)),B&&a.clineEnabled===void 0&&(await St({clineEnabled:!0}),L.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let T of l)await y_(T);if(e?.source==="vscode-extension")L.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)L.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let T=await fm(r);L.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",T.alreadyDone,T.fresh,T.migrated,T.skipped)}catch(T){L.warn("Schema v5 migration failed (non-fatal): %s",T.message)}if(e?.clearManualDisableOnSuccess&&!o)try{await Ms(r,!1)}catch(T){let Lt=T.message;n.push(`Enabled, but could not clear the manual-disable opt-out (${Lt}). Run enable again to clear it.`),L.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",Lt)}return L.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:n,claudeSettingsPath:Sr.path,gitHookPath:wn.path,postRewriteHookPath:Sn.path,prepareMsgHookPath:bn.path,postMergeHookPath:En.path,prePushHookPath:kn.path,geminiSettingsPath:cs}}catch(a){let l=`Installation failed: ${a.message}`;return L.error(l),{success:!1,message:l,warnings:n}}finally{i&&await i.release()}}async function y_(t){let e=X(t);try{await(0,rs.stat)(e)}catch{return}let r=ie();if(h_((0,Dt.resolve)(e),(0,Dt.resolve)(r)))return;let n=await Wt(e),o={};for(let[c,d]of Object.entries(n))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let s=await Wt(r),i={};for(let[c,d]of Object.entries(o))s[c]===void 0&&(i[c]=d);Object.keys(i).length>0&&await Un(i,r);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await Un(a,e);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)L.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",t,c,String(o[c]),String(s[c]));L.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,t)}async function mg(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0;L.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!e?.repoLockHeld&&(s=await Cr(r),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};!o&&e?.persistManualDisable&&await Ms(r,!0);let i;try{i=await Ht(r)}catch{i=[r]}if(o){for(let l of i)try{await qa(l)}catch(c){L.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return L.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:n}}for(let l of i){let c=await ia(l);c.warning&&n.push(c.warning),await Oa(l);try{await qa(l)}catch(d){L.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}e?.preserveMenu||await lg(l),await ag(l)}let a=await fu(r);return a.warning&&n.push(a.warning),await hu(r),await gu(r),await yu(r),await wu(r),e?.preserveMenu||await Eh(r,Zh),n.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),L.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:n}}catch(i){let a=`Uninstallation failed: ${i.message}`;return L.error(a),{success:!1,message:a,warnings:n}}finally{s&&await s.release()}}h();function ns(){return new Promise((t,e)=>{let r=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",n=>r.push(n)),process.stdin.on("end",()=>{process.stdin.destroy(),t(r.join(""))}),process.stdin.on("error",e)})}var Z=require("node:fs"),Te=require("node:path"),Lg=require("node:url");ho();Cn();oe();function fg(t){return t.aiProvider==="local-agent"?!0:t.aiProvider==="jolli"?!!t.jolliApiKey:t.aiProvider==="anthropic"?!!(t.apiKey||process.env.ANTHROPIC_API_KEY):!!(t.apiKey||process.env.ANTHROPIC_API_KEY||t.jolliApiKey)}nt();le();h();we();function w_(t){return[`1) Re-authenticate ${_t(t)}:  ${up(t)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function S_(t,e){let r=dp(t);return r===null?[]:[`${e}${r}`]}function hg(t){return[`[Jolli Memory] Memory generation failed for a recent commit: ${_t(t)} authentication expired or is unavailable.`,...S_(t,""),"\u2192 Fix with either:",...w_(t).map(e=>`    ${e}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var Re=p("SessionStartHook"),L_=new Set(["main","master","develop","development","staging","production"]),is=500,M_=250;function $_(t=is+M_){let e=setTimeout(()=>process.exit(0),t);return e.unref(),e}var Mg="login-reminder-dismissed";function j_(t){let e=Ai(t,"init");return e===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${e} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Mg}.)`].join(`
`)}function F_(t,e,r){return e||r?null:j_(t)}async function $g(t,e){let r=mo(t);if(r===void 0||e.aiProvider!==void 0)return!1;try{let n=await Jn(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:r}:{}},result:o.localAgentTool??r}:{update:null,result:void 0});return n===void 0?(Re.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",t),!1):(Re.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",n,t),!0)}catch(n){return Re.info("Failed to seed default local-agent provider: %s",n.message),!1}}async function H_(t,e=Oi()){let r=await Se(),n=fg(r),o=(0,Te.join)(t,".jolli","jollimemory",Mg),s=(0,Z.existsSync)(o);if(n&&s)try{(0,Z.rmSync)(o)}catch{}return F_(e,n,s)}async function jg(t,e){return(await Yp(e)).readFile(`summaries/${t}.json`)}async function U_(t,e){try{let r=await jg(t,e);return r?cp(JSON.parse(r)):!1}catch(r){return Re.info("Failed to check auth-failure state for %s: %s",t.substring(0,8),r.message),!1}}async function J_(t,e=Oi()){let r=mo(e);if(r===void 0)return null;let n=Ug(t);if(!n)return null;let o=await ko(t);if(!o)return null;let s=o.entries.filter(l=>l.branch===n&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(z(c)).getTime()-new Date(z(l)).getTime())[0];if(!await U_(i.commitHash,t))return null;let a=await Se();return hg(a.localAgentTool??r)}async function B_(){if(Tn()){Re.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await ns(),{cwd:e}=JSON.parse(t),r=Fl(e??process.cwd());if(ht(r),Re.info("SessionStartHook invoked (cwd=%s)",r),await rt(r)){Re.info("SessionStart hook skipped \u2014 repository manually disabled");return}let n=await fl(r,"shared",{includeBriefing:!0,includePluginReminders:!1});n?process.stdout.write(n):Re.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(Ng(),Dg));o()}catch(t){Re.info("SessionStartHook failed: %s",t.message)}}async function fl(t,e,r={}){let n=r.includeBriefing!==!1,o=r.includePluginReminders!==!1,[s,i,a]=await Promise.all([n?Promise.race([W_(t,e),ml(is)]):Promise.resolve(null),o?Promise.race([J_(t,e),ml(is)]):Promise.resolve(null),o?Promise.race([H_(t,e),ml(is)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(Re.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function W_(t,e){let r=as(t),n=Ug(t,r);if(!n||L_.has(n))return null;let o=z_(t,n,e,r);if(o)return o;let s=await ko(t);if(!s)return null;let i=s.entries.filter(b=>b.branch===n&&(b.parentCommitHash===null||b.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((b,C)=>new Date(z(C)).getTime()-new Date(z(b)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&Z_(z(l)))return null;let d=await G_(l.commitHash,t),u=q_(t,n),m=K_(a),f=V_(n,a,l,c,d,u,m,e),g=Hg(t,r);return Q_(t,n,g??l.commitHash,f,e),f}async function G_(t,e){try{let r=await jg(t,e);if(!r)return{lastTopicTitle:null,keyDecisions:[]};let n=JSON.parse(r),o=tr(n),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(r){return Re.info("Failed to load last summary: %s",r.message),{lastTopicTitle:null,keyDecisions:[]}}}function q_(t,e){try{let r=(0,Te.join)(t,".jolli","jollimemory","plans.json");if(!(0,Z.existsSync)(r))return[];let n=JSON.parse((0,Z.readFileSync)(r,"utf-8")),o=ou(n).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function K_(t){let e=0,r=0,n=0,o=!1;for(let s of t)s.diffStats&&(e+=s.diffStats.filesChanged,r+=s.diffStats.insertions,n+=s.diffStats.deletions,o=!0);return o?{filesChanged:e,insertions:r,deletions:n}:null}function V_(t,e,r,n,o,s,i,a){let l=e.length,c=Og(z(n)),d=Og(z(r)),u=ev(z(r),new Date().toISOString()),m=[];m.push(`[Jolli Memory \u2014 ${t}]`);let f=`${l} commits (${c} ~ ${d})`;i&&(f+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),m.push(f);let g=o.lastTopicTitle??r.commitMessage;if(m.push(`Last: ${g} (${d})`),o.keyDecisions.length>0){let C=Y_(o.keyDecisions);m.push(`Decisions: ${C}`)}s.length>0&&m.push(`Plans: ${s.join("; ")}`);let b=X_(u,a);return b&&m.push(b),m.join(`
`)}function X_(t,e){if(t<=0)return null;let r=Ai(e,"recall")??"`jolli recall`";return t>3?`Warning: ${t} days since last commit. Run ${r} for full context.`:`Tip: run ${r} for full context`}function Y_(t){let r=[],n=0;for(let o of t){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),n+s.length>200&&r.length>0)break;r.push(s),n+=s.length+2}return r.join("; ")}function Fg(t){return(0,Te.join)(t,".jolli","jollimemory","briefing-cache.json")}function z_(t,e,r,n=as(t)){let o=Fg(t);if(!(0,Z.existsSync)(o))return null;try{let s=JSON.parse((0,Z.readFileSync)(o,"utf-8"));if(s.branch!==e||s.clientKind!==r)return null;let i=Hg(t,n);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function Q_(t,e,r,n,o){let s=Fg(t),i={branch:e,lastCommitHash:r,briefingText:n,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,Te.dirname)(s);(0,Z.existsSync)(a)||(0,Z.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,Z.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,Z.renameSync)(l,s)}catch{}}function as(t){return yt(t)}function Hg(t,e=as(t)){let r=e?Ll(e):null;if(r)return r;try{return _e("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function Ug(t,e=as(t)){let r=e?Ol(e):null;if(r)return r;if(e)return null;try{return _e("git",["branch","--show-current"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function ml(t){return new Promise(e=>{setTimeout(()=>e(null),t).unref()})}function Z_(t){let e=new Date(t),r=new Date;return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}function ev(t,e){let r=new Date(t).getTime(),n=new Date(e).getTime();return Math.floor(Math.abs(n-r)/(1e3*60*60*24))}function Og(t){return t?t.split("T")[0]:"unknown"}function tv(){let t=process.argv[1];if(process.env.VITEST||!t||(0,Te.resolve)(t)!==(0,Te.resolve)((0,Lg.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,Te.basename)(t).toLowerCase();return e==="sessionstarthook.js"||e==="sessionstarthook.ts"}tv()&&($_(),B_());var mt=p("CursorPluginBootstrapHook"),ls="cursor-plugin",hl={timeoutMs:200,pollMs:25};function Jg(t){return t?{additional_context:t}:null}function Bg(t,e){let r=t.workspace_roots,n=[Array.isArray(r)?r.find(o=>typeof o=="string"&&o.trim().length>0):void 0,e.CURSOR_PROJECT_DIR,process.cwd()];for(let o of n)if(!(o===void 0||o.trim().length===0)&&!rc(o))return o;return null}async function Wg(t){if(!await Pn(t))return null;let e=await j(["rev-parse","--show-toplevel"],t);if(e.exitCode!==0||!e.stdout.trim())return null;let r=e.stdout.trim();if(!await Su(r))return ht((0,gl.homedir)()),mt.info("Cursor plugin bootstrap: %s has not opted in \u2014 leaving it untouched",r),null;ht(r);let n=!1;if(!(await As(r,async()=>{n=await rt(r),n&&await mg(r,{preserveMenu:!0,repoLockHeld:!0})},hl)).acquired)return mt.info("Cursor plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy"),null;if(n)return null;let s=await pg(r,{repoHooksOnly:!0,sourceTag:ls,respectManualDisable:!0,automatic:!0});if(!s.success)return mt.warn("Cursor plugin repo-hook reconciliation failed: %s",s.message),null;let i=null;return(await As(r,async()=>{if(await rt(r))return;let l=await Se();l.cursorEnabled!==!1&&(await $g(ls,l),i=await fl(r,ls,{includeBriefing:!0,includePluginReminders:!0}))},hl)).acquired||mt.info("Cursor plugin context deferred \u2014 repo hook lifecycle lock is busy"),Jg(i)}async function Gg(){if(Tn()){mt.info("Cursor plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await ns(),e=t.trim()?JSON.parse(t):{};ht((0,gl.homedir)()),await ig(),await sg((0,gr.resolve)((0,yl.fileURLToPath)(__jmImportMetaUrl),"..","..")),await Qa(ls,void 0,hl)||mt.info("Cursor plugin runtime registration deferred \u2014 run-cli may be unavailable this session");let r=Bg(e,process.env);if(r===null){mt.info("Cursor plugin bootstrap: no workspace named \u2014 global /jolli menu ensured, nothing repo-scoped to do");return}let n=await Wg(r);n&&process.stdout.write(JSON.stringify(n))}catch(t){mt.info("Cursor plugin bootstrap failed: %s",t.message)}}function rv(){let t=process.argv[1];if(process.env.VITEST||!t||(0,gr.resolve)(t)!==(0,gr.resolve)((0,yl.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,gr.basename)(t).toLowerCase();return e==="cursorpluginbootstraphook.js"||e==="cursorpluginbootstraphook.ts"}rv()&&Gg();0&&(module.exports={buildCursorBootstrapOutput,main,resolveCursorProjectDir,runCursorPluginBootstrap});
