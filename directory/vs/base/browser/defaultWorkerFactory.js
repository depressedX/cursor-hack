import '../../../require.js';
import '../../../exports.js';
import './trustedTypes.js';
import '../common/errors.js';
import '../common/network.js';
import '../common/worker/simpleWorker.js';
import '../common/lifecycle.js';
import '../common/arrays.js';
import '../../nls.js';
define(
			de[540],
			he([1, 0, 432, 29, 23, 1584, 3, 24, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*trustedTypes*/,
 i /*errors*/,
 w /*network*/,
 E /*simpleWorker*/,
 C /*lifecycle*/,
 d /*arrays*/,
 m /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hjb = void 0),
					(e.$gjb = a),
					(e.$ijb = b);
				const r = !1;
				let u;
				typeof self == "object" &&
				self.constructor &&
				self.constructor.name === "DedicatedWorkerGlobalScope" &&
				globalThis.workerttPolicy !== void 0
					? (u = globalThis.workerttPolicy)
					: (u = (0, t.$bjb)("defaultWorkerFactory", {
							createScriptURL: (s) => s,
						}));
				function a(s, l) {
					if (!s.startsWith("blob:"))
						throw new URIError("Not a blob-url: " + s);
					return new Worker(u ? u.createScriptURL(s) : s, {
						...l,
						type: r ? "module" : void 0,
					});
				}
				function h(s, l) {
					const y = globalThis.MonacoEnvironment;
					if (y) {
						if (typeof y.getWorker == "function")
							return y.getWorker("workerMain.js", l);
						if (typeof y.getWorkerUrl == "function") {
							const $ = y.getWorkerUrl("workerMain.js", l);
							return new Worker(u ? u.createScriptURL($) : $, {
								name: l,
								type: r ? "module" : void 0,
							});
						}
					}
					if (typeof ce == "function") {
						const $ = ce.toUrl("vs/base/worker/workerMain.js"),
							v = "vs/base/worker/defaultWorkerFactory.js",
							S = ce.toUrl(v).slice(0, -v.length),
							I = c(l, $, S);
						return new Worker(u ? u.createScriptURL(I) : I, {
							name: l,
							type: r ? "module" : void 0,
						});
					}
					if (s) {
						const $ = c(l, s.toString(!0)),
							v = new Worker(u ? u.createScriptURL($) : $, {
								name: l,
								type: r ? "module" : void 0,
							});
						return r ? n(v) : v;
					}
					throw new Error(
						"You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker",
					);
				}
				function c(s, l, y) {
					if (
						!(
							/^((http:)|(https:)|(file:))/.test(l) &&
							l.substring(0, globalThis.origin.length) !== globalThis.origin
						)
					) {
						const v = l.lastIndexOf("?"),
							S = l.lastIndexOf("#", v),
							I =
								v > 0
									? new URLSearchParams(l.substring(v + 1, ~S ? S : void 0))
									: new URLSearchParams();
						w.COI.addSearchParam(I, !0, !0),
							I.toString()
								? (l = `${l}?${I.toString()}#${s}`)
								: (l = `${l}#${s}`);
					}
					const $ = new Blob(
						[
							(0, d.$Lb)([
								`/*${s}*/`,
								y
									? `globalThis.MonacoEnvironment = { baseUrl: ${JSON.stringify(y)} };`
									: void 0,
								`globalThis._VSCODE_NLS_MESSAGES = ${JSON.stringify((0, m.getNLSMessages)())};`,
								`globalThis._VSCODE_NLS_LANGUAGE = ${JSON.stringify((0, m.getNLSLanguage)())};`,
								`globalThis._VSCODE_FILE_ROOT = ${JSON.stringify(globalThis._VSCODE_FILE_ROOT)};`,
								"const ttPolicy = globalThis.trustedTypes?.createPolicy('defaultWorkerFactory', { createScriptURL: value => value });",
								"globalThis.workerttPolicy = ttPolicy;",
								r
									? `await import(ttPolicy?.createScriptURL(${JSON.stringify(l)}) ?? ${JSON.stringify(l)});`
									: `importScripts(ttPolicy?.createScriptURL(${JSON.stringify(l)}) ?? ${JSON.stringify(l)});`,
								r
									? "globalThis.postMessage({ type: 'vscode-worker-ready' });"
									: void 0,
								`/*${s}*/`,
							]).join(""),
						],
						{ type: "application/javascript" },
					);
					return URL.createObjectURL($);
				}
				function n(s) {
					return new Promise((l, y) => {
						(s.onmessage = function ($) {
							$.data.type === "vscode-worker-ready" &&
								((s.onmessage = null), l(s));
						}),
							(s.onerror = y);
					});
				}
				function g(s) {
					return typeof s.then == "function";
				}
				class p extends C.$1c {
					constructor(l, y, $, v, S, I) {
						super(), (this.a = $), (this.b = v);
						const T = h(l, v);
						g(T) ? (this.c = T) : (this.c = Promise.resolve(T)),
							this.postMessage(y, []),
							this.c.then((P) => {
								(P.onmessage = function (k) {
									S(k.data);
								}),
									(P.onmessageerror = I),
									typeof P.addEventListener == "function" &&
										P.addEventListener("error", I);
							}),
							this.D(
								(0, C.$Yc)(() => {
									this.c?.then((P) => {
										(P.onmessage = null),
											(P.onmessageerror = null),
											P.removeEventListener("error", I),
											P.terminate();
									}),
										(this.c = null);
								}),
							);
					}
					getId() {
						return this.a;
					}
					postMessage(l, y) {
						this.c?.then(($) => {
							try {
								$.postMessage(l, y);
							} catch (v) {
								(0, i.$4)(v),
									(0, i.$4)(
										new Error(`FAILED to post message to '${this.b}'-worker`, {
											cause: v,
										}),
									);
							}
						});
					}
				}
				class o {
					constructor(l, y) {
						(this.amdModuleId = l),
							(this.label = y),
							(this.esmModuleLocation = r
								? w.$7g.asBrowserUri(`${l}.esm.js`)
								: void 0);
					}
				}
				e.$hjb = o;
				class f {
					static {
						this.a = 0;
					}
					constructor() {
						this.b = !1;
					}
					create(l, y, $) {
						const v = ++f.a;
						if (this.b) throw this.b;
						return new p(
							l.esmModuleLocation,
							l.amdModuleId,
							v,
							l.label || "anonymous" + v,
							y,
							(S) => {
								(0, E.logOnceWebWorkerWarning)(S), (this.b = S), $(S);
							},
						);
					}
				}
				function b(s, l) {
					const y = typeof s == "string" ? new o(s, l) : s;
					return new E.SimpleWorkerClient(new f(), y);
				}
			},
		),
		