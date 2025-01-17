import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/errors.js';
import '../../../common/services/model.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/services/semanticTokensProviderStyling.js';
import '../common/getSemanticTokens.js';
import '../../../common/services/languageFeatureDebounce.js';
import '../../../../base/common/stopwatch.js';
import '../../../common/services/languageFeatures.js';
import '../../../common/services/semanticTokensStyling.js';
import '../../../common/editorFeatures.js';
import '../common/semanticTokensConfig.js';
define(
			de[2864],
			he([
				1, 0, 3, 29, 67, 10, 15, 33, 35, 1209, 1602, 391, 162, 69, 1180, 588,
				1156,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				var o;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gkc = void 0),
					(i = mt(i));
				let f = class extends t.$1c {
					constructor(y, $, v, S, I, T) {
						super(), (this.a = Object.create(null));
						const P = (D) => {
								this.a[D.uri.toString()] = new b(D, y, v, I, T);
							},
							k = (D, M) => {
								M.dispose(), delete this.a[D.uri.toString()];
							},
							L = () => {
								for (const D of $.getModels()) {
									const M = this.a[D.uri.toString()];
									(0, p.$ePb)(D, v, S) ? M || P(D) : M && k(D, M);
								}
							};
						$.getModels().forEach((D) => {
							(0, p.$ePb)(D, v, S) && P(D);
						}),
							this.D(
								$.onModelAdded((D) => {
									(0, p.$ePb)(D, v, S) && P(D);
								}),
							),
							this.D(
								$.onModelRemoved((D) => {
									const M = this.a[D.uri.toString()];
									M && k(D, M);
								}),
							),
							this.D(
								S.onDidChangeConfiguration((D) => {
									D.affectsConfiguration(p.$dPb) && L();
								}),
							),
							this.D(v.onDidColorThemeChange(L));
					}
					dispose() {
						for (const y of Object.values(this.a)) y.dispose();
						super.dispose();
					}
				};
				(e.$gkc = f),
					(e.$gkc = f =
						Ne(
							[
								j(0, n.$hPb),
								j(1, w.$QO),
								j(2, m.$iP),
								j(3, E.$gj),
								j(4, a.$PBb),
								j(5, c.$k3),
							],
							f,
						));
				let b = class extends t.$1c {
					static {
						o = this;
					}
					static {
						this.REQUEST_MIN_DELAY = 300;
					}
					static {
						this.REQUEST_MAX_DELAY = 2e3;
					}
					constructor(y, $, v, S, I) {
						super(),
							(this.q = $),
							(this.a = !1),
							(this.b = y),
							(this.c = I.documentSemanticTokensProvider),
							(this.f = S.for(this.c, "DocumentSemanticTokens", {
								min: o.REQUEST_MIN_DELAY,
								max: o.REQUEST_MAX_DELAY,
							})),
							(this.g = this.D(new C.$Yh(() => this.r(), o.REQUEST_MIN_DELAY))),
							(this.h = null),
							(this.j = null),
							(this.m = []),
							(this.n = !1),
							this.D(
								this.b.onDidChangeContent(() => {
									this.g.isScheduled() || this.g.schedule(this.f.get(this.b));
								}),
							),
							this.D(
								this.b.onDidChangeAttached(() => {
									this.g.isScheduled() || this.g.schedule(this.f.get(this.b));
								}),
							),
							this.D(
								this.b.onDidChangeLanguage(() => {
									this.h && (this.h.dispose(), (this.h = null)),
										this.j && (this.j.cancel(), (this.j = null)),
										this.t(null, null, null, []),
										this.g.schedule(0);
								}),
							);
						const T = () => {
							(0, t.$Vc)(this.m), (this.m = []);
							for (const P of this.c.all(y))
								typeof P.onDidChange == "function" &&
									this.m.push(
										P.onDidChange(() => {
											if (this.j) {
												this.n = !0;
												return;
											}
											this.g.schedule(0);
										}),
									);
						};
						T(),
							this.D(
								this.c.onDidChange(() => {
									T(), this.g.schedule(this.f.get(this.b));
								}),
							),
							this.D(
								v.onDidColorThemeChange((P) => {
									this.t(null, null, null, []),
										this.g.schedule(this.f.get(this.b));
								}),
							),
							this.g.schedule(0);
					}
					dispose() {
						this.h && (this.h.dispose(), (this.h = null)),
							this.j && (this.j.cancel(), (this.j = null)),
							(0, t.$Vc)(this.m),
							(this.m = []),
							this.t(null, null, null, []),
							(this.a = !0),
							super.dispose();
					}
					r() {
						if (this.j) return;
						if (!(0, u.$_Ob)(this.c, this.b)) {
							this.h && this.b.tokenization.setSemanticTokens(null, !1);
							return;
						}
						if (!this.b.isAttachedToEditor()) return;
						const y = new d.$Ce(),
							$ = this.h ? this.h.provider : null,
							v = (this.h && this.h.resultId) || null,
							S = (0, u.$aPb)(this.c, this.b, $, v, y.token);
						(this.j = y), (this.n = !1);
						const I = [],
							T = this.b.onDidChangeContent((k) => {
								I.push(k);
							}),
							P = new h.$le(!1);
						S.then(
							(k) => {
								if (
									(this.f.update(this.b, P.elapsed()),
									(this.j = null),
									T.dispose(),
									!k)
								)
									this.t(null, null, null, I);
								else {
									const { provider: L, tokens: D } = k,
										M = this.q.getStyling(L);
									this.t(L, D || null, M, I);
								}
							},
							(k) => {
								(k &&
									(i.$8(k) ||
										(typeof k.message == "string" &&
											k.message.indexOf("busy") !== -1))) ||
									i.$4(k),
									(this.j = null),
									T.dispose(),
									(I.length > 0 || this.n) &&
										(this.g.isScheduled() ||
											this.g.schedule(this.f.get(this.b)));
							},
						);
					}
					static s(y, $, v, S, I) {
						I = Math.min(I, v.length - S, y.length - $);
						for (let T = 0; T < I; T++) v[S + T] = y[$ + T];
					}
					t(y, $, v, S) {
						const I = this.h,
							T = () => {
								(S.length > 0 || this.n) &&
									!this.g.isScheduled() &&
									this.g.schedule(this.f.get(this.b));
							};
						if ((this.h && (this.h.dispose(), (this.h = null)), this.a)) {
							y && $ && y.releaseDocumentSemanticTokens($.resultId);
							return;
						}
						if (!y || !v) {
							this.b.tokenization.setSemanticTokens(null, !1);
							return;
						}
						if (!$) {
							this.b.tokenization.setSemanticTokens(null, !0), T();
							return;
						}
						if ((0, u.$0Ob)($)) {
							if (!I) {
								this.b.tokenization.setSemanticTokens(null, !0);
								return;
							}
							if ($.edits.length === 0)
								$ = { resultId: $.resultId, data: I.data };
							else {
								let P = 0;
								for (const N of $.edits)
									P += (N.data ? N.data.length : 0) - N.deleteCount;
								const k = I.data,
									L = new Uint32Array(k.length + P);
								let D = k.length,
									M = L.length;
								for (let N = $.edits.length - 1; N >= 0; N--) {
									const A = $.edits[N];
									if (A.start > k.length) {
										v.warnInvalidEditStart(
											I.resultId,
											$.resultId,
											N,
											A.start,
											k.length,
										),
											this.b.tokenization.setSemanticTokens(null, !0);
										return;
									}
									const R = D - (A.start + A.deleteCount);
									R > 0 && (o.s(k, D - R, L, M - R, R), (M -= R)),
										A.data &&
											(o.s(A.data, 0, L, M - A.data.length, A.data.length),
											(M -= A.data.length)),
										(D = A.start);
								}
								D > 0 && o.s(k, 0, L, 0, D),
									($ = { resultId: $.resultId, data: L });
							}
						}
						if ((0, u.$9Ob)($)) {
							this.h = new s(y, $.resultId, $.data);
							const P = (0, r.$gPb)($, v, this.b.getLanguageId());
							if (S.length > 0)
								for (const k of S)
									for (const L of P)
										for (const D of k.changes) L.applyEdit(D.range, D.text);
							this.b.tokenization.setSemanticTokens(P, !0);
						} else this.b.tokenization.setSemanticTokens(null, !0);
						T();
					}
				};
				b = o = Ne([j(1, n.$hPb), j(2, m.$iP), j(3, a.$PBb), j(4, c.$k3)], b);
				class s {
					constructor(y, $, v) {
						(this.provider = y), (this.resultId = $), (this.data = v);
					}
					dispose() {
						this.provider.releaseDocumentSemanticTokens(this.resultId);
					}
				}
				(0, g.$SBb)(f);
			},
		),
		