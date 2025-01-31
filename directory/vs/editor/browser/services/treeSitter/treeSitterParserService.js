import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/network.js';
import '../../../common/services/treeSitterParserService.js';
import '../../../common/services/model.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/platform.js';
import '../../../../amdX.js';
import '../../../../base/common/event.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../base/common/amd.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/observableInternal/promise.js';
define(
			de[2797],
			he([
				1, 0, 23, 763, 67, 3, 22, 32, 34, 10, 12, 536, 6, 33, 113, 455, 29,
				1503,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*network*/,
 i /*treeSitterParserService*/,
 w /*model*/,
 E /*lifecycle*/,
 C /*files*/,
 d /*telemetry*/,
 m /*log*/,
 r /*configuration*/,
 u /*platform*/,
 a /*amdX*/,
 h /*event*/,
 c /*cancellation*/,
 n /*environment*/,
 g /*amd*/,
 p /*errors*/,
 o /*promise*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$MAc = e.$LAc = e.$KAc = e.$JAc = e.$IAc = void 0);
				const f = "editor.experimental.treeSitterTelemetry",
					b = "@vscode/tree-sitter-wasm/wasm",
					s = "tree-sitter.wasm";
				function l(L) {
					return `${g.$W && L.isBuilt ? t.$5g : t.$3g}/${b}`;
				}
				class y extends E.$1c {
					get parseResult() {
						return this.a;
					}
					constructor(D, M, N, A, R) {
						super(),
							(this.model = D),
							(this.b = M),
							(this.c = N),
							(this.f = A),
							(this.g = R),
							(this.h = this.D(new E.$Zc())),
							this.D(
								h.Event.runAndSubscribe(this.model.onDidChangeLanguage, (O) =>
									this.j(O ? O.newLanguage : this.model.getLanguageId()),
								),
							);
					}
					async j(D) {
						this.h.clear(), (this.a = void 0);
						const M = (0, c.$De)(this.h);
						let N;
						try {
							N = await this.m(D, M);
						} catch (O) {
							if ((0, p.$8)(O)) return;
							throw O;
						}
						const A = await this.c.getParserClass();
						if (M.isCancellationRequested) return;
						const R = this.h.add(new v(new A(), N, this.f, this.g));
						this.h.add(
							this.model.onDidChangeContent((O) => this.n(R, O.changes)),
						),
							await this.n(R, []),
							!M.isCancellationRequested && (this.a = R);
					}
					m(D, M) {
						const N = this.b.getOrInitLanguage(D);
						if (N) return Promise.resolve(N);
						const A = [];
						return new Promise((R, O) => {
							A.push(
								this.b.onDidAddLanguage((B) => {
									B.id === D && ((0, E.$Vc)(A), R(B.language));
								}),
							),
								M.onCancellationRequested(
									() => {
										(0, E.$Vc)(A), O(new p.$9());
									},
									void 0,
									A,
								);
						});
					}
					async n(D, M) {
						return D.onDidChangeContent(this.model, M);
					}
				}
				e.$IAc = y;
				var $;
				(function (L) {
					(L.Full = "fullParse"), (L.Incremental = "incrementalParse");
				})($ || ($ = {}));
				class v {
					constructor(D, M, N, A) {
						(this.parser = D),
							(this.language = M),
							(this.c = N),
							(this.d = A),
							(this.b = !1),
							(this.g = Promise.resolve()),
							(this.h = !0),
							this.parser.setTimeoutMicros(50 * 1e3),
							this.parser.setLanguage(M);
					}
					dispose() {
						(this.b = !0), this.a?.delete(), this.parser?.delete();
					}
					get f() {
						return this.a;
					}
					set f(D) {
						this.a?.delete(), (this.a = D);
					}
					get isDisposed() {
						return this.b;
					}
					async onDidChangeContent(D, M) {
						return (
							this.i(D, M),
							(this.g = this.g
								.then(() => {
									if (!this.isDisposed) return this.j(D);
								})
								.catch((N) => {
									this.c.error("Error parsing tree-sitter tree", N);
								})),
							this.g
						);
					}
					i(D, M) {
						for (const N of M) {
							const A = N.rangeOffset + N.text.length,
								R = D.getPositionAt(A);
							this.f?.edit({
								startIndex: N.rangeOffset,
								oldEndIndex: N.rangeOffset + N.rangeLength,
								newEndIndex: N.rangeOffset + N.text.length,
								startPosition: {
									row: N.range.startLineNumber - 1,
									column: N.range.startColumn - 1,
								},
								oldEndPosition: {
									row: N.range.endLineNumber - 1,
									column: N.range.endColumn - 1,
								},
								newEndPosition: { row: R.lineNumber - 1, column: R.column - 1 },
							}),
								(this.h = !0);
						}
					}
					async j(D) {
						const M = await this.k(D);
						this.h || (this.f = M);
					}
					k(D) {
						let M = $.Full;
						return this.f && (M = $.Incremental), this.l(D, M);
					}
					async l(D, M) {
						const N = D.getLanguageId();
						let A,
							R = 0,
							O = 0;
						this.h = !1;
						do {
							const B = performance.now();
							try {
								A = this.parser.parse((U, z) => this.m(D, U), this.f);
							} catch {
							} finally {
								(R += performance.now() - B), O++;
							}
							if (
								(await new Promise((U) => (0, u.$E)(U)),
								D.isDisposed() || this.isDisposed)
							)
								return;
						} while (!A && !this.h);
						return this.n(M, N, R, O), A;
					}
					m(D, M) {
						return D.getTextBuffer().getNearestChunk(M);
					}
					n(D, M, N, A) {
						this.c.debug(`Tree parsing (${D}) took ${N} ms and ${A} passes.`),
							D === $.Full
								? this.d.publicLog2("treeSitter.fullParse", {
										languageId: M,
										time: N,
										passes: A,
									})
								: this.d.publicLog2("treeSitter.incrementalParse", {
										languageId: M,
										time: N,
										passes: A,
									});
					}
				}
				e.$JAc = v;
				class S extends E.$1c {
					constructor(D, M, N, A) {
						super(),
							(this.b = D),
							(this.c = M),
							(this.f = N),
							(this.g = A),
							(this.a = new k()),
							(this._onDidAddLanguage = this.D(new h.$re())),
							(this.onDidAddLanguage = this._onDidAddLanguage.event);
					}
					getOrInitLanguage(D) {
						if (this.a.isCached(D)) return this.a.getSyncIfCached(D);
						this.h(D);
					}
					async h(D) {
						if (!this.a.get(D)) {
							this.a.set(D, this.j(D));
							const N = await this.a.get(D);
							if (!N) return;
							this._onDidAddLanguage.fire({ id: D, language: N });
						}
					}
					async j(D) {
						const M = this.g.get(D),
							N = this.m(D);
						if (!M || !N) return;
						const A = `${N}/${M}.wasm`,
							R = await this.c.readFile(t.$7g.asFileUri(A));
						return (await this.b.getParserClass()).Language.load(
							R.value.buffer,
						);
					}
					m(D) {
						if (this.g.get(D)) return l(this.f);
					}
				}
				e.$KAc = S;
				class I {
					async b() {
						return (
							this.a ||
								(this.a = await (0, a.$Tq)(
									"@vscode/tree-sitter-wasm",
									"wasm/tree-sitter.js",
								)),
							this.a
						);
					}
					async getParserClass() {
						return this.c || (this.c = (await this.b()).Parser), this.c;
					}
				}
				e.$LAc = I;
				let T = class extends E.$1c {
					constructor(D, M, N, A, R, O) {
						super(),
							(this.h = D),
							(this.j = N),
							(this.m = A),
							(this.n = R),
							(this.q = O),
							(this.b = this.D(new E.$0c())),
							(this.c = new Map()),
							(this.f = new I()),
							(this.s = !1),
							(this.g = this.D(new S(this.f, M, this.q, this.c))),
							(this.onDidAddLanguage = this.g.onDidAddLanguage),
							this.D(
								this.n.onDidChangeConfiguration((B) => {
									B.affectsConfiguration(i.$mV) && this.u();
								}),
							),
							this.u();
					}
					getOrInitLanguage(D) {
						return this.g.getOrInitLanguage(D);
					}
					getParseResult(D) {
						return this.b.get(D)?.parseResult;
					}
					async r() {
						const D = await this.f.getParserClass(),
							M = this.q;
						return (
							await D.init({
								locateFile(N, A) {
									return t.$7g.asBrowserUri(`${l(M)}/${s}`).toString(!0);
								},
							}),
							!0
						);
					}
					async t(D) {
						return this.s
							? this.a
							: (D
									? ((this.s = !0),
										(this.a = this.r()),
										this.a.then(() => this.y()))
									: (this.a = Promise.resolve(!1)),
								this.a);
					}
					async u() {
						const D = this.w();
						let M = !0;
						D.length === 0 && (M = !1),
							(await this.t(M)) &&
								(D.includes("typescript")
									? this.C("typescript", "tree-sitter-typescript")
									: this.F("typescript"));
					}
					w() {
						const D = this.n.getValue(i.$mV);
						return D && D.length > 0
							? D
							: this.n.getValue(f)
								? ["typescript"]
								: [];
					}
					async y() {
						this.D(
							this.h.onModelAdded((D) => {
								this.z(D);
							}),
						),
							this.D(
								this.h.onModelRemoved((D) => {
									this.b.deleteAndDispose(D);
								}),
							),
							this.h.getModels().forEach((D) => this.z(D));
					}
					z(D) {
						const M = new y(D, this.g, this.f, this.m, this.j);
						this.b.set(D, M);
					}
					C(D, M) {
						this.c.has(D) || this.c.set(D, M);
					}
					F(D) {
						this.c.has(D) && this.c.delete("typescript");
					}
				};
				(e.$MAc = T),
					(e.$MAc = T =
						Ne(
							[
								j(0, w.$QO),
								j(1, C.$ll),
								j(2, d.$km),
								j(3, m.$ik),
								j(4, r.$gj),
								j(5, n.$Ti),
							],
							T,
						));
				class P {
					get result() {
						return this.a;
					}
					constructor(D) {
						(this.promise = D),
							D.then((M) => {
								this.a = new o.$fe(M, void 0);
							}).catch((M) => {
								this.a = new o.$fe(void 0, M);
							});
					}
				}
				class k {
					constructor() {
						this.a = new Map();
					}
					set(D, M) {
						this.a.set(D, new P(M));
					}
					get(D) {
						return this.a.get(D)?.promise;
					}
					getSyncIfCached(D) {
						return this.a.get(D)?.result?.data;
					}
					isCached(D) {
						return this.a.get(D)?.result !== void 0;
					}
				}
			},
		)
