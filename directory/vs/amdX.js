import '../require.js';
import '../exports.js';
import './base/common/amd.js';
import './base/common/network.js';
import './base/common/platform.js';
import './base/common/types.js';
import './base/common/uri.js';
define(
			de[536],
			he([1, 0, 455, 23, 12, 28, 9]),
			function (ce /*require*/,
 e /*exports*/,
 t /*amd*/,
 i /*network*/,
 w /*platform*/,
 E /*types*/,
 C /*uri*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Tq = u),
					(e.$Uq = a),
					(w = mt(w));
				class d {
					constructor(c, n, g) {
						(this.id = c), (this.dependencies = n), (this.callback = g);
					}
				}
				class m {
					static {
						this.INSTANCE = new m();
					}
					constructor() {
						(this.a =
							typeof self == "object" &&
							self.constructor &&
							self.constructor.name === "DedicatedWorkerGlobalScope"),
							(this.b = typeof document == "object"),
							(this.c = []),
							(this.d = !1);
					}
					g() {
						this.d ||
							((this.d = !0),
							(globalThis.define = (c, n, g) => {
								typeof c != "string" && ((g = n), (n = c), (c = null)),
									(typeof n != "object" || !Array.isArray(n)) &&
										((g = n), (n = null)),
									this.c.push(new d(c, n, g));
							}),
							(globalThis.define.amd = !0),
							this.b
								? (this.f =
										globalThis._VSCODE_WEB_PACKAGE_TTP ??
										window.trustedTypes?.createPolicy("amdLoader", {
											createScriptURL(c) {
												if (
													c.startsWith(window.location.origin) ||
													c.startsWith(
														`${i.Schemas.vscodeFileResource}://${i.$6g}`,
													)
												)
													return c;
												throw new Error(
													`[trusted_script_src] Invalid script url: ${c}`,
												);
											},
										}))
								: this.a &&
									(this.f =
										globalThis._VSCODE_WEB_PACKAGE_TTP ??
										globalThis.trustedTypes?.createPolicy("amdLoader", {
											createScriptURL(c) {
												return c;
											},
										})));
					}
					async load(c) {
						this.g();
						const n = await (this.a
							? this.i(c)
							: this.b
								? this.h(c)
								: this.j(c));
						if (!n) {
							console.warn(`Did not receive a define call from script ${c}`);
							return;
						}
						const g = {},
							p = [],
							o = [];
						if (Array.isArray(n.dependencies))
							for (const f of n.dependencies)
								f === "exports" ? p.push(g) : o.push(f);
						if (o.length > 0)
							throw new Error(
								`Cannot resolve dependencies for script ${c}. The dependencies are: ${o.join(", ")}`,
							);
						return typeof n.callback == "function"
							? (n.callback(...p) ?? g)
							: n.callback;
					}
					h(c) {
						return new Promise((n, g) => {
							const p = document.createElement("script");
							p.setAttribute("async", "async"),
								p.setAttribute("type", "text/javascript");
							const o = () => {
									p.removeEventListener("load", f),
										p.removeEventListener("error", b);
								},
								f = (s) => {
									o(), n(this.c.pop());
								},
								b = (s) => {
									o(), g(s);
								};
							p.addEventListener("load", f),
								p.addEventListener("error", b),
								this.f && (c = this.f.createScriptURL(c)),
								p.setAttribute("src", c),
								window.document.getElementsByTagName("head")[0].appendChild(p);
						});
					}
					async i(c) {
						return (
							this.f && (c = this.f.createScriptURL(c)),
							t.$V
								? await new Promise((n, g) => {
										ce([c], n, g);
									}).then(mt)
								: importScripts(c),
							this.c.pop()
						);
					}
					async j(c) {
						try {
							const n = globalThis._VSCODE_NODE_MODULES.fs,
								g = globalThis._VSCODE_NODE_MODULES.vm,
								p = globalThis._VSCODE_NODE_MODULES.module,
								o = C.URI.parse(c).fsPath,
								f = n.readFileSync(o).toString(),
								b = p.wrap(f.replace(/^#!.*/, ""));
							return new g.Script(b).runInThisContext().apply(), this.c.pop();
						} catch (n) {
							throw n;
						}
					}
				}
				const r = new Map();
				async function u(h, c, n) {
					if (t.$V) {
						n === void 0 &&
							(n = !!(
								globalThis._VSCODE_PRODUCT_JSON ??
								globalThis.vscode?.context?.configuration()?.product
							)?.commit);
						const g = c ? `${h}/${c}` : h;
						if (r.has(g)) return r.get(g);
						let p;
						if (/^\w[\w\d+.-]*:\/\//.test(g)) p = g;
						else {
							const s = `${t.$W && n && !w.$r ? i.$4g : i.$3g}/${g}`;
							p = i.$7g.asBrowserUri(s).toString(!0);
						}
						const o = m.INSTANCE.load(p);
						return r.set(g, o), o;
					} else
						return await new Promise((g, p) => {
							ce([h], g, p);
						}).then(mt);
				}
				function a(h, c) {
					(0, E.$vg)(t.$V);
					const g = !!(
							globalThis._VSCODE_PRODUCT_JSON ??
							globalThis.vscode?.context?.configuration()?.product
						)?.commit,
						p = t.$W && g && !w.$r,
						o = `${h}/${c}`,
						b = `${p ? i.$4g : i.$3g}/${o}`;
					return i.$7g.asBrowserUri(b).toString(!0);
				}
			},
		),
		