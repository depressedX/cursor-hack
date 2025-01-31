import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/trustedTypes.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../base/common/strings.js';
import '../../../../browser/config/domFontInfo.js';
import '../../../../common/config/editorOptions.js';
import '../../../../common/core/position.js';
import '../../../../common/core/range.js';
import '../../../../common/core/stringBuilder.js';
import '../../../../common/languages/language.js';
import '../../../../common/model.js';
import '../../../../common/tokens/lineTokens.js';
import '../../../../common/viewLayout/lineDecorations.js';
import '../../../../common/viewLayout/viewLineRenderer.js';
import '../../../../common/viewModel.js';
import '../model/ghostText.js';
import '../utils.js';
import '../../../../../css!vs/editor/contrib/inlineCompletions/browser/view/ghostTextView.js';
define(
			de[947],
			he([
				1, 0, 432, 6, 3, 77, 37, 321, 38, 48, 17, 462, 61, 64, 388, 533, 598,
				290, 917, 753, 2304,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*trustedTypes*/,
 i /*event*/,
 w /*lifecycle*/,
 E /*observable*/,
 C /*strings*/,
 d /*domFontInfo*/,
 m /*editorOptions*/,
 r /*position*/,
 u /*range*/,
 a /*stringBuilder*/,
 h /*language*/,
 c /*model*/,
 n /*lineTokens*/,
 g /*lineDecorations*/,
 p /*viewLineRenderer*/,
 o /*viewModel*/,
 f /*ghostText*/,
 b /*utils*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$N1b = e.$K1b = e.$J1b = e.$I1b = void 0),
					(e.$L1b = y),
					(e.$M1b = $),
					(C = mt(C)),
					(e.$I1b = "ghost-text");
				let s = class extends w.$1c {
					constructor(S, I, T) {
						super(),
							(this.c = S),
							(this.model = I),
							(this.f = T),
							(this.a = (0, E.observableValue)(this, !1)),
							(this.b = (0, E.observableFromEvent)(
								this,
								this.c.onDidChangeModel,
								() => this.c.getModel(),
							)),
							(this.g = (0, E.derived)(this, (P) => {
								if (this.a.read(P)) return;
								const k = this.b.read(P);
								if (k !== this.model.targetTextModel.read(P)) return;
								const L = this.model.ghostText.read(P);
								if (!L) return;
								const D = L instanceof f.$DCb ? L.columnRange : void 0,
									M = [],
									N = [];
								function A(z, F) {
									if (N.length > 0) {
										const x = N[N.length - 1];
										F &&
											x.decorations.push(
												new g.$Fub(
													x.content.length + 1,
													x.content.length + 1 + z[0].length,
													F,
													o.InlineDecorationType.Regular,
												),
											),
											(x.content += z[0]),
											(z = z.slice(1));
									}
									for (const x of z)
										N.push({
											content: x,
											decorations: F
												? [
														new g.$Fub(
															1,
															x.length + 1,
															F,
															o.InlineDecorationType.Regular,
														),
													]
												: [],
										});
								}
								const R = k.getLineContent(L.lineNumber);
								let O,
									B = 0;
								for (const z of L.parts) {
									let F = z.lines;
									O === void 0
										? (M.push({
												column: z.column,
												text: F[0],
												preview: z.preview,
											}),
											(F = F.slice(1)))
										: A([R.substring(B, z.column - 1)], void 0),
										F.length > 0 &&
											(A(F, e.$I1b),
											O === void 0 && z.column <= R.length && (O = z.column)),
										(B = z.column - 1);
								}
								O !== void 0 && A([R.substring(B)], void 0);
								const U = O !== void 0 ? new b.$xCb(O, R.length + 1) : void 0;
								return {
									replacedRange: D,
									inlineTexts: M,
									additionalLines: N,
									hiddenRange: U,
									lineNumber: L.lineNumber,
									additionalReservedLineCount:
										this.model.minReservedLineCount.read(P),
									targetTextModel: k,
								};
							})),
							(this.h = (0, E.derived)(this, (P) => {
								const k = this.g.read(P);
								if (!k) return [];
								const L = [];
								k.replacedRange &&
									L.push({
										range: k.replacedRange.toRange(k.lineNumber),
										options: {
											inlineClassName: "inline-completion-text-to-replace",
											description: "GhostTextReplacement",
										},
									}),
									k.hiddenRange &&
										L.push({
											range: k.hiddenRange.toRange(k.lineNumber),
											options: {
												inlineClassName: "ghost-text-hidden",
												description: "ghost-text-hidden",
											},
										});
								for (const D of k.inlineTexts)
									L.push({
										range: u.$iL.fromPositions(
											new r.$hL(k.lineNumber, D.column),
										),
										options: {
											description: e.$I1b,
											after: {
												content: D.text,
												inlineClassName: D.preview
													? "ghost-text-decoration-preview"
													: "ghost-text-decoration",
												cursorStops: c.InjectedTextCursorStops.Left,
											},
											showIfCollapsed: !0,
										},
									});
								return L;
							})),
							(this.j = this.D(
								new l(
									this.c,
									this.f.languageIdCodec,
									(0, E.derived)((P) => {
										const k = this.g.read(P);
										return k
											? {
													lineNumber: k.lineNumber,
													additionalLines: k.additionalLines,
													minReservedLineCount: k.additionalReservedLineCount,
													targetTextModel: k.targetTextModel,
												}
											: void 0;
									}),
								),
							)),
							this.D(
								(0, w.$Yc)(() => {
									this.a.set(!0, void 0);
								}),
							),
							this.D((0, b.$yCb)(this.c, this.h));
					}
					ownsViewZone(S) {
						return this.j.viewZoneId === S;
					}
				};
				(e.$J1b = s), (e.$J1b = s = Ne([j(2, h.$nM)], s));
				class l extends w.$1c {
					get viewZoneId() {
						return this.a;
					}
					constructor(S, I, T) {
						super(),
							(this.c = S),
							(this.f = I),
							(this.g = T),
							(this.a = void 0),
							(this.b = (0, E.observableSignalFromEvent)(
								"editorOptionChanged",
								i.Event.filter(
									this.c.onDidChangeConfiguration,
									(P) =>
										P.hasChanged(
											m.EditorOption.disableMonospaceOptimizations,
										) ||
										P.hasChanged(m.EditorOption.stopRenderingLineAfter) ||
										P.hasChanged(m.EditorOption.renderWhitespace) ||
										P.hasChanged(m.EditorOption.renderControlCharacters) ||
										P.hasChanged(m.EditorOption.fontLigatures) ||
										P.hasChanged(m.EditorOption.fontInfo) ||
										P.hasChanged(m.EditorOption.lineHeight),
								),
							)),
							this.D(
								(0, E.autorun)((P) => {
									const k = this.g.read(P);
									this.b.read(P),
										k
											? this.j(
													k.lineNumber,
													k.additionalLines,
													k.minReservedLineCount,
												)
											: this.h();
								}),
							);
					}
					dispose() {
						super.dispose(), this.h();
					}
					h() {
						this.c.changeViewZones((S) => {
							this.a && (S.removeZone(this.a), (this.a = void 0));
						});
					}
					j(S, I, T) {
						const P = this.c.getModel();
						if (!P) return;
						const { tabSize: k } = P.getOptions();
						this.c.changeViewZones((L) => {
							this.a && (L.removeZone(this.a), (this.a = void 0));
							const D = Math.max(I.length, T);
							if (D > 0) {
								const M = document.createElement("div");
								y(M, k, I, this.c.getOptions(), this.f),
									(this.a = L.addZone({
										afterLineNumber: S,
										heightInLines: D,
										domNode: M,
										afterColumnAffinity: c.PositionAffinity.Right,
									}));
							}
						});
					}
				}
				e.$K1b = l;
				function y(v, S, I, T, P, k = !1, L = "view-line") {
					const D = T.get(m.EditorOption.disableMonospaceOptimizations),
						M = T.get(m.EditorOption.stopRenderingLineAfter),
						N = "none",
						A = T.get(m.EditorOption.renderControlCharacters),
						R = T.get(m.EditorOption.fontLigatures),
						O = T.get(m.EditorOption.fontInfo),
						B = T.get(m.EditorOption.lineHeight),
						U = new a.$KL(1e4);
					U.appendString('<div class="suggest-preview-text">');
					for (let x = 0, H = I.length; x < H; x++) {
						const q = I[x],
							V = q.content;
						if (k && V === "") {
							U.appendString("<br>");
							continue;
						}
						U.appendString('<div class="' + L),
							U.appendString('" style="top:'),
							U.appendString(String(x * B)),
							k
								? U.appendString('px;">')
								: U.appendString('px;width:1000000px;">');
						const G = C.$2f(V),
							K = C.$1f(V),
							J = n.$7L.createEmpty(V, P);
						(0, p.$Nub)(
							new p.$Jub(
								O.isMonospace && !D,
								O.canUseHalfwidthRightwardsArrow,
								V,
								!1,
								G,
								K,
								0,
								J,
								q.decorations,
								S,
								0,
								O.spaceWidth,
								O.middotWidth,
								O.wsmiddotWidth,
								M,
								N,
								A,
								R !== m.EditorFontLigatures.OFF,
								null,
							),
							U,
						),
							U.appendString("</div>");
					}
					U.appendString("</div>"), (0, d.$jsb)(v, O);
					const z = U.build(),
						F = e.$N1b ? e.$N1b.createHTML(z) : z;
					v.innerHTML = F;
				}
				function $(v, S, I, T, P = !1, k = "view-line") {
					const L = T.get(m.EditorOption.disableMonospaceOptimizations),
						D = T.get(m.EditorOption.stopRenderingLineAfter),
						M = "none",
						N = T.get(m.EditorOption.renderControlCharacters),
						A = T.get(m.EditorOption.fontLigatures),
						R = T.get(m.EditorOption.fontInfo),
						O = T.get(m.EditorOption.lineHeight),
						B = new a.$KL(1e4);
					B.appendString('<div class="suggest-preview-text">');
					for (let F = 0, x = I.length; F < x; F++) {
						const H = I[F],
							q = H.content;
						if (P && q === "") {
							B.appendString("<br>");
							continue;
						}
						B.appendString('<div class="' + k),
							B.appendString('" style="top:'),
							B.appendString(String(F * O)),
							P
								? B.appendString('px;">')
								: B.appendString('px;width:1000000px;">');
						const V = C.$2f(q),
							G = C.$1f(q);
						(0, p.$Nub)(
							new p.$Jub(
								R.isMonospace && !L,
								R.canUseHalfwidthRightwardsArrow,
								q,
								!1,
								V,
								G,
								0,
								H.lineTokens,
								H.decorations,
								S,
								0,
								R.spaceWidth,
								R.middotWidth,
								R.wsmiddotWidth,
								D,
								M,
								N,
								A !== m.EditorFontLigatures.OFF,
								null,
							),
							B,
						),
							B.appendString("</div>");
					}
					B.appendString("</div>"), (0, d.$jsb)(v, R);
					const U = B.build(),
						z = e.$N1b ? e.$N1b.createHTML(U) : U;
					v.innerHTML = z;
				}
				e.$N1b = (0, t.$bjb)("editorGhostText", { createHTML: (v) => v });
			},
		)
