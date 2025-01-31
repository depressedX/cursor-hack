import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/services/languageFeatures.js';
import '../../documentSymbols/browser/outlineModel.js';
import '../../../../base/common/async.js';
import '../../folding/browser/folding.js';
import '../../folding/browser/syntaxRangeProvider.js';
import '../../folding/browser/indentRangeProvider.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import '../../../../base/common/errors.js';
import './stickyScrollElement.js';
import '../../../../base/common/iterator.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../common/config/editorOptions.js';
define(
			de[2923],
			he([1, 0, 3, 69, 204, 15, 350, 660, 752, 152, 29, 1557, 103, 5, 38]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*languageFeatures*/,
 w /*outlineModel*/,
 E /*async*/,
 C /*folding*/,
 d /*syntaxRangeProvider*/,
 m /*indentRangeProvider*/,
 r /*languageConfigurationRegistry*/,
 u /*errors*/,
 a /*stickyScrollElement*/,
 h /*iterator*/,
 c /*instantiation*/,
 n /*editorOptions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mkc = void 0);
				var g;
				(function ($) {
					($.OUTLINE_MODEL = "outlineModel"),
						($.FOLDING_PROVIDER_MODEL = "foldingProviderModel"),
						($.INDENTATION_MODEL = "indentationModel");
				})(g || (g = {}));
				var p;
				(function ($) {
					($[($.VALID = 0)] = "VALID"),
						($[($.INVALID = 1)] = "INVALID"),
						($[($.CANCELED = 2)] = "CANCELED");
				})(p || (p = {}));
				let o = class extends t.$1c {
					constructor(v, S, I, T) {
						switch (
							(super(),
							(this.g = v),
							(this.a = []),
							(this.b = null),
							(this.c = this.D(new E.$Jh(300))),
							(this.f = this.D(new t.$Zc())),
							this.g.getOption(n.EditorOption.stickyScroll).defaultModel)
						) {
							case g.OUTLINE_MODEL:
								this.a.push(new b(this.g, T));
							case g.FOLDING_PROVIDER_MODEL:
								this.a.push(new y(this.g, S, T));
							case g.INDENTATION_MODEL:
								this.a.push(new l(this.g, I));
								break;
						}
					}
					dispose() {
						this.a.forEach((v) => v.dispose()),
							this.f.clear(),
							this.h(),
							super.dispose();
					}
					h() {
						this.b && (this.b.cancel(), (this.b = null));
					}
					async update(v) {
						return (
							this.f.clear(),
							this.f.add({
								dispose: () => {
									this.h(), this.c.cancel();
								},
							}),
							this.h(),
							await this.c
								.trigger(async () => {
									for (const S of this.a) {
										const { statusPromise: I, modelPromise: T } =
											S.computeStickyModel(v);
										this.b = T;
										const P = await I;
										if (this.b !== T) return null;
										switch (P) {
											case p.CANCELED:
												return this.f.clear(), null;
											case p.VALID:
												return S.stickyModel;
										}
									}
									return null;
								})
								.catch((S) => ((0, u.$4)(S), null))
						);
					}
				};
				(e.$mkc = o), (e.$mkc = o = Ne([j(2, c.$Li), j(3, i.$k3)], o));
				class f extends t.$1c {
					constructor(v) {
						super(), (this.b = v), (this.a = null);
					}
					get stickyModel() {
						return this.a;
					}
					c() {
						return (this.a = null), p.INVALID;
					}
					computeStickyModel(v) {
						if (v.isCancellationRequested || !this.g())
							return { statusPromise: this.c(), modelPromise: null };
						const S = (0, E.$zh)((I) => this.h(I));
						return {
							statusPromise: S.then((I) =>
								this.f(I)
									? v.isCancellationRequested
										? p.CANCELED
										: ((this.a = this.j(v, I)), p.VALID)
									: this.c(),
							).then(void 0, (I) => ((0, u.$4)(I), p.CANCELED)),
							modelPromise: S,
						};
					}
					f(v) {
						return !0;
					}
					g() {
						return !0;
					}
				}
				let b = class extends f {
					constructor(v, S) {
						super(v), (this.m = S);
					}
					h(v) {
						return w.$8Db.create(
							this.m.documentSymbolProvider,
							this.b.getModel(),
							v,
						);
					}
					j(v, S) {
						const { stickyOutlineElement: I, providerID: T } = this.s(
								S,
								this.a?.outlineProviderId,
							),
							P = this.b.getModel();
						return new a.$lkc(P.uri, P.getVersionId(), I, T);
					}
					f(v) {
						return v && v.children.size > 0;
					}
					s(v, S) {
						let I;
						if (h.Iterable.first(v.children.values()) instanceof w.$7Db) {
							const L = h.Iterable.find(v.children.values(), (D) => D.id === S);
							if (L) I = L.children;
							else {
								let D = "",
									M = -1,
									N;
								for (const [A, R] of v.children.entries()) {
									const O = this.w(R);
									O > M && ((N = R), (M = O), (D = R.id));
								}
								(S = D), (I = N.children);
							}
						} else I = v.children;
						const T = [],
							P = Array.from(I.values()).sort((L, D) => {
								const M = new a.$jkc(
										L.symbol.range.startLineNumber,
										L.symbol.range.endLineNumber,
									),
									N = new a.$jkc(
										D.symbol.range.startLineNumber,
										D.symbol.range.endLineNumber,
									);
								return this.u(M, N);
							});
						for (const L of P)
							T.push(this.t(L, L.symbol.selectionRange.startLineNumber));
						return {
							stickyOutlineElement: new a.$kkc(void 0, T, void 0),
							providerID: S,
						};
					}
					t(v, S) {
						const I = [];
						for (const P of v.children.values())
							if (
								P.symbol.selectionRange.startLineNumber !==
								P.symbol.range.endLineNumber
							)
								if (P.symbol.selectionRange.startLineNumber !== S)
									I.push(this.t(P, P.symbol.selectionRange.startLineNumber));
								else
									for (const k of P.children.values())
										I.push(this.t(k, P.symbol.selectionRange.startLineNumber));
						I.sort((P, k) => this.u(P.range, k.range));
						const T = new a.$jkc(
							v.symbol.selectionRange.startLineNumber,
							v.symbol.range.endLineNumber,
						);
						return new a.$kkc(T, I, void 0);
					}
					u(v, S) {
						return v.startLineNumber !== S.startLineNumber
							? v.startLineNumber - S.startLineNumber
							: S.endLineNumber - v.endLineNumber;
					}
					w(v) {
						let S = 0;
						for (const I of v.children.values()) S += this.w(I);
						return v instanceof w.$6Db
							? S +
									v.symbol.range.endLineNumber -
									v.symbol.selectionRange.startLineNumber
							: S;
					}
				};
				b = Ne([j(1, i.$k3)], b);
				class s extends f {
					constructor(v) {
						super(v), (this.m = new C.$1Nb(v));
					}
					j(v, S) {
						const I = this.r(S),
							T = this.b.getModel();
						return new a.$lkc(T.uri, T.getVersionId(), I, void 0);
					}
					f(v) {
						return v !== null;
					}
					r(v) {
						const S = v.length,
							I = [],
							T = new a.$kkc(void 0, [], void 0);
						for (let P = 0; P < S; P++) {
							const k = v.getParentIndex(P);
							let L;
							k !== -1 ? (L = I[k]) : (L = T);
							const D = new a.$kkc(
								new a.$jkc(v.getStartLineNumber(P), v.getEndLineNumber(P) + 1),
								[],
								L,
							);
							L.children.push(D), I.push(D);
						}
						return T;
					}
				}
				let l = class extends s {
					constructor(v, S) {
						super(v),
							(this.t = S),
							(this.s = this.D(new m.$PNb(v.getModel(), this.t, this.m)));
					}
					async h(v) {
						return this.s.compute(v);
					}
				};
				l = Ne([j(1, r.$aN)], l);
				let y = class extends s {
					constructor(v, S, I) {
						super(v), (this.t = I);
						const T = C.$ZNb.getFoldingRangeProviders(this.t, v.getModel());
						T.length > 0 &&
							(this.s = this.D(new d.$XNb(v.getModel(), T, S, this.m, void 0)));
					}
					g() {
						return this.s !== void 0;
					}
					async h(v) {
						return this.s?.compute(v) ?? null;
					}
				};
				y = Ne([j(2, i.$k3)], y);
			},
		)
