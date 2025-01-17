import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/amd.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/network.js';
import '../../../../../base/common/platform.js';
import '../../../../../base/common/uri.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/environment/common/environment.js';
import '../../../../../platform/extensionResourceLoader/common/extensionResourceLoader.js';
import '../../../../../platform/notification/common/notification.js';
import '../../../../../platform/telemetry/common/telemetry.js';
import './worker/textMateWorkerHost.js';
import './textMateWorkerTokenizerController.js';
import '../../../../../base/browser/defaultWorkerFactory.js';
define(
			de[3662],
			he([1, 0, 455, 3, 23, 12, 9, 61, 10, 113, 546, 40, 32, 3661, 3660, 540]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				var p;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Iyc = void 0);
				let o = class {
					static {
						p = this;
					}
					static {
						this.a = !1;
					}
					constructor(s, l, y, $, v, S, I, T) {
						(this.i = s),
							(this.j = l),
							(this.k = y),
							(this.l = $),
							(this.m = v),
							(this.n = S),
							(this.o = I),
							(this.p = T),
							(this.b = null),
							(this.c = null),
							(this.d = null),
							(this.e = new Map()),
							(this.f = null),
							(this.g = null),
							(this.h = []);
					}
					dispose() {
						this.s();
					}
					createBackgroundTokenizer(s, l, y) {
						if (!this.j() || s.isTooLargeForSyncing()) return;
						const $ = new i.$Zc(),
							v = this.q().then((S) => {
								if ($.isDisposed || !S) return;
								const I = { controller: void 0, worker: this.c };
								return (
									$.add(
										f(s, () => {
											const T = new n.$Hyc(
												s,
												S,
												this.m.languageIdCodec,
												l,
												this.l,
												y,
											);
											return (
												(I.controller = T),
												this.e.set(T.controllerId, T),
												(0, i.$Yc)(() => {
													(I.controller = void 0),
														this.e.delete(T.controllerId),
														T.dispose();
												})
											);
										}),
									),
									I
								);
							});
						return {
							dispose() {
								$.dispose();
							},
							requestTokens: async (S, I) => {
								const T = await v;
								T?.controller &&
									T.worker === this.c &&
									T.controller.requestTokens(S, I);
							},
							reportMismatchingTokens: (S) => {
								p.a ||
									((p.a = !0),
									this.o.error({
										message: "Async Tokenization Token Mismatch in line " + S,
										name: "Async Tokenization Token Mismatch",
									}),
									this.p.publicLog2("asyncTokenizationMismatchingTokens", {}));
							},
						};
					}
					setGrammarDefinitions(s) {
						(this.h = s), this.s();
					}
					acceptTheme(s, l) {
						(this.f = s),
							(this.g = l),
							this.f && this.g && this.d && this.d.$acceptTheme(this.f, this.g);
					}
					q() {
						return this.b || (this.b = this.r()), this.b;
					}
					async r() {
						const s = `${w.$3g}/vscode-oniguruma`,
							l = `${w.$4g}/vscode-oniguruma`,
							v = `${t.$W && this.n.isBuilt && !E.$r ? l : s}/release/onig.wasm`,
							S = {
								grammarDefinitions: this.h,
								onigurumaWASMUri: w.$7g.asBrowserUri(v).toString(!0),
							},
							I = (this.c = (0, g.$ijb)(
								"vs/workbench/services/textMate/browser/backgroundTokenization/worker/textMateTokenizationWorker.worker",
								"TextMateWorker",
							));
						return (
							c.$Ayc.setChannel(I, {
								$readFile: async (T) => {
									const P = C.URI.revive(T);
									return this.k.readExtensionResource(P);
								},
								$setTokensAndStates: async (T, P, k, L) => {
									const D = this.e.get(T);
									D && D.setTokensAndStates(T, P, k, L);
								},
								$reportTokenizationTime: (T, P, k, L, D) => {
									this.i(T, P, k, L, D);
								},
							}),
							await I.proxy.$init(S),
							this.c !== I
								? null
								: ((this.d = I.proxy),
									this.f && this.g && this.d.$acceptTheme(this.f, this.g),
									I.proxy)
						);
					}
					s() {
						for (const s of this.e.values()) s.dispose();
						this.e.clear(),
							this.c && (this.c.dispose(), (this.c = null)),
							(this.d = null),
							(this.b = null);
					}
				};
				(e.$Iyc = o),
					(e.$Iyc =
						o =
						p =
							Ne(
								[
									j(2, u.$bYb),
									j(3, m.$gj),
									j(4, d.$nM),
									j(5, r.$Ti),
									j(6, a.$4N),
									j(7, h.$km),
								],
								o,
							));
				function f(b, s) {
					const l = new i.$Zc(),
						y = l.add(new i.$Zc());
					function $() {
						b.isAttachedToEditor() ? y.add(s()) : y.clear();
					}
					return (
						$(),
						l.add(
							b.onDidChangeAttached(() => {
								$();
							}),
						),
						l
					);
				}
			},
		),
		