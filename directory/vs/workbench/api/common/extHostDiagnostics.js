import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../platform/markers/common/markers.js';
import '../../../base/common/uri.js';
import './extHost.protocol.js';
import './extHostTypes.js';
import './extHostTypeConverters.js';
import '../../../base/common/event.js';
import '../../../platform/log/common/log.js';
import '../../../base/common/map.js';
import './extHostFileSystemInfo.js';
define(
			Pe[566],
			Ne([1, 0, 10, 276, 2, 6, 11, 17, 4, 14, 33, 92]),
			function (we, t, e, r, S, N, P, I, l, n, p, y) {
				"use strict";
				var d;
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$ahd = t.$_gd = void 0),
					(I = tt(I));
				class k {
					#e;
					#t;
					#n;
					constructor(h, $, T, a, u, s, f, o) {
						(this.d = h),
							(this.e = $),
							(this.f = T),
							(this.g = a),
							(this.h = u),
							(this.c = !1),
							(this.f = Math.max(a, T)),
							(this.#n = new p.$Gc((w) => s.getComparisonKey(w))),
							(this.#e = f),
							(this.#t = o);
					}
					dispose() {
						this.c ||
							(this.#t.fire([...this.#n.keys()]),
							this.#e?.$clear(this.e),
							this.#n.clear(),
							(this.c = !0));
					}
					get name() {
						return this.j(), this.d;
					}
					set(h, $) {
						if (!h) {
							this.clear();
							return;
						}
						this.j();
						let T = [];
						if (S.URI.isUri(h)) {
							if (!$) {
								this.delete(h);
								return;
							}
							this.#n.set(h, $.slice()), (T = [h]);
						} else if (Array.isArray(h)) {
							T = [];
							let s;
							h = [...h].sort(k.k);
							for (const f of h) {
								const [o, w] = f;
								if (
									((!s || o.toString() !== s.toString()) &&
										(s && this.#n.get(s).length === 0 && this.#n.delete(s),
										(s = o),
										T.push(o),
										this.#n.set(o, [])),
									w)
								)
									this.#n.get(o)?.push(...w);
								else {
									const m = this.#n.get(o);
									m && (m.length = 0);
								}
							}
						}
						if ((this.#t.fire(T), !this.#e)) return;
						const a = [];
						let u = 0;
						for (const s of T) {
							let f = [];
							const o = this.#n.get(s);
							if (o)
								if (o.length > this.g) {
									f = [];
									const w = [
										P.DiagnosticSeverity.Error,
										P.DiagnosticSeverity.Warning,
										P.DiagnosticSeverity.Information,
										P.DiagnosticSeverity.Hint,
									];
									e: for (let m = 0; m < 4; m++)
										for (const E of o)
											if (
												E.severity === w[m] &&
												f.push({
													...I.Diagnostic.from(E),
													modelVersionId: this.h(s),
												}) === this.g
											)
												break e;
									f.push({
										severity: r.MarkerSeverity.Info,
										message: (0, e.localize)(2707, null, o.length - this.g),
										startLineNumber: f[f.length - 1].startLineNumber,
										startColumn: f[f.length - 1].startColumn,
										endLineNumber: f[f.length - 1].endLineNumber,
										endColumn: f[f.length - 1].endColumn,
									});
								} else
									f = o.map((w) => ({
										...I.Diagnostic.from(w),
										modelVersionId: this.h(s),
									}));
							if ((a.push([s, f]), (u += f.length), u > this.f)) break;
						}
						this.#e.$changeMany(this.e, a);
					}
					delete(h) {
						this.j(),
							this.#t.fire([h]),
							this.#n.delete(h),
							this.#e?.$changeMany(this.e, [[h, void 0]]);
					}
					clear() {
						this.j(),
							this.#t.fire([...this.#n.keys()]),
							this.#n.clear(),
							this.#e?.$clear(this.e);
					}
					forEach(h, $) {
						this.j();
						for (const [T, a] of this) h.call($, T, a, this);
					}
					*[Symbol.iterator]() {
						this.j();
						for (const h of this.#n.keys()) yield [h, this.get(h)];
					}
					get(h) {
						this.j();
						const $ = this.#n.get(h);
						return Array.isArray($) ? Object.freeze($.slice(0)) : [];
					}
					has(h) {
						return this.j(), Array.isArray(this.#n.get(h));
					}
					j() {
						if (this.c) throw new Error("illegal state - object is disposed");
					}
					static k(h, $) {
						return h[0].toString() < $[0].toString()
							? -1
							: h[0].toString() > $[0].toString()
								? 1
								: 0;
					}
				}
				t.$_gd = k;
				let g = class {
					static {
						d = this;
					}
					static {
						this.c = 0;
					}
					static {
						this.d = 1e3;
					}
					static {
						this.e = 1.1 * this.d;
					}
					static _mapper(h) {
						const $ = new p.$Gc();
						for (const T of h) $.set(T, T);
						return { uris: Object.freeze(Array.from($.values())) };
					}
					constructor(h, $, T, a) {
						(this.j = $),
							(this.k = T),
							(this.l = a),
							(this.g = new Map()),
							(this.h = new l.$ve({ merge: (u) => u.flat(), delay: 50 })),
							(this.onDidChangeDiagnostics = l.Event.map(
								this.h.event,
								d._mapper,
							)),
							(this.f = h.getProxy(N.$lbb.MainThreadDiagnostics));
					}
					createDiagnosticCollection(h, $) {
						const { g: T, f: a, h: u, j: s, k: f, l: o } = this,
							w = new (class {
								$changeMany(R, C) {
									a.$changeMany(R, C),
										s.trace(
											"[DiagnosticCollection] change many (extension, owner, uris)",
											h.value,
											R,
											C.length === 0 ? "CLEARING" : C,
										);
								}
								$clear(R) {
									a.$clear(R),
										s.trace(
											"[DiagnosticCollection] remove all (extension, owner)",
											h.value,
											R,
										);
								}
								dispose() {
									a.dispose();
								}
							})();
						let m;
						if (!$)
							($ = "_generated_diagnostic_collection_name_#" + d.c++), (m = $);
						else if (!T.has($)) m = $;
						else {
							this.j.warn(
								`DiagnosticCollection with name '${$}' does already exist.`,
							);
							do m = $ + d.c++;
							while (T.has(m));
						}
						return new (class extends k {
							constructor() {
								super(
									$,
									m,
									d.e,
									d.d,
									(R) => o.getDocument(R)?.version,
									f.extUri,
									w,
									u,
								),
									T.set(m, this);
							}
							dispose() {
								super.dispose(), T.delete(m);
							}
						})();
					}
					getDiagnostics(h) {
						if (h) return this.m(h);
						{
							const $ = new Map(),
								T = [];
							for (const a of this.g.values())
								a.forEach((u, s) => {
									let f = $.get(u.toString());
									typeof f > "u" &&
										((f = T.length), $.set(u.toString(), f), T.push([u, []])),
										(T[f][1] = T[f][1].concat(...s));
								});
							return T;
						}
					}
					m(h) {
						let $ = [];
						for (const T of this.g.values())
							T.has(h) && ($ = $.concat(T.get(h)));
						return $;
					}
					$acceptMarkersChange(h) {
						if (!this.n) {
							const $ = "_generated_mirror",
								T = new k(
									$,
									$,
									Number.MAX_SAFE_INTEGER,
									Number.MAX_SAFE_INTEGER,
									(a) => {},
									this.k.extUri,
									void 0,
									this.h,
								);
							this.g.set($, T), (this.n = T);
						}
						for (const [$, T] of h)
							this.n.set(S.URI.revive($), T.map(I.Diagnostic.to));
					}
				};
				(t.$ahd = g), (t.$ahd = g = d = wt([rt(1, n.$ik), rt(2, y.$88)], g));
			},
		),
		