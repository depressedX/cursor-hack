import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/color.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/model.js';
import './color.js';
import './colorDetector.js';
import './colorPickerModel.js';
import './colorPickerWidget.js';
import '../../hover/browser/hoverTypes.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/browser/dom.js';
import '../../../../nls.js';
define(
			de[1218],
			he([
				1, 0, 15, 33, 97, 3, 38, 17, 64, 1603, 785, 2581, 2836, 368, 35, 7, 4,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*cancellation*/,
 w /*color*/,
 E /*lifecycle*/,
 C /*editorOptions*/,
 d /*range*/,
 m /*model*/,
 r /*color*/,
 u /*colorDetector*/,
 a /*colorPickerModel*/,
 h /*colorPickerWidget*/,
 c /*hoverTypes*/,
 n /*themeService*/,
 g /*dom*/,
 p /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aCb = e.$_Bb = e.$$Bb = e.$0Bb = void 0),
					(p = mt(p));
				class o {
					constructor(I, T, P, k) {
						(this.owner = I),
							(this.range = T),
							(this.model = P),
							(this.provider = k),
							(this.forceShowAtRange = !0);
					}
					isValidForHoverAnchor(I) {
						return (
							I.type === c.HoverAnchorType.Range &&
							this.range.startColumn <= I.range.startColumn &&
							this.range.endColumn >= I.range.endColumn
						);
					}
				}
				e.$0Bb = o;
				let f = class {
					constructor(I, T) {
						(this.f = I), (this.h = T), (this.hoverOrdinal = 2);
					}
					computeSync(I, T) {
						return [];
					}
					computeAsync(I, T, P) {
						return t.$ai.fromPromise(this.i(I, T, P));
					}
					async i(I, T, P) {
						if (!this.f.hasModel()) return [];
						const k = u.$YBb.get(this.f);
						if (!k) return [];
						for (const L of T) {
							if (!k.isColorDecoration(L)) continue;
							const D = k.getColorData(L.range.getStartPosition());
							if (D)
								return [
									await l(this, this.f.getModel(), D.colorInfo, D.provider),
								];
						}
						return [];
					}
					renderHoverParts(I, T) {
						const P = y(this, this.f, this.h, T, I);
						if (!P) return new c.$4Bb([]);
						this.c = P.colorPicker;
						const k = {
							hoverPart: P.hoverPart,
							hoverElement: this.c.domNode,
							dispose() {
								P.disposables.dispose();
							},
						};
						return new c.$4Bb([k]);
					}
					getAccessibleContent(I) {
						return p.localize(951, null);
					}
					handleResize() {
						this.c?.layout();
					}
					isColorPickerVisible() {
						return !!this.c;
					}
				};
				(e.$$Bb = f), (e.$$Bb = f = Ne([j(1, n.$iP)], f));
				class b {
					constructor(I, T, P, k) {
						(this.owner = I),
							(this.range = T),
							(this.model = P),
							(this.provider = k);
					}
				}
				e.$_Bb = b;
				let s = class {
					constructor(I, T) {
						(this.f = I),
							(this.h = T),
							(this.hoverOrdinal = 2),
							(this.c = null);
					}
					async createColorHover(I, T, P) {
						if (!this.f.hasModel() || !u.$YBb.get(this.f)) return null;
						const L = await (0, r.$VBb)(
							P,
							this.f.getModel(),
							i.CancellationToken.None,
						);
						let D = null,
							M = null;
						for (const O of L) {
							const B = O.colorInfo;
							d.$iL.containsRange(B.range, I.range) &&
								((D = B), (M = O.provider));
						}
						const N = D ?? I,
							A = M ?? T,
							R = !!D;
						return {
							colorHover: await l(this, this.f.getModel(), N, A),
							foundInEditor: R,
						};
					}
					async updateEditorModel(I) {
						if (!this.f.hasModel()) return;
						const T = I.model;
						let P = new d.$iL(
							I.range.startLineNumber,
							I.range.startColumn,
							I.range.endLineNumber,
							I.range.endColumn,
						);
						this.c &&
							(await v(this.f.getModel(), T, this.c, P, I),
							(P = $(this.f, P, T)));
					}
					renderHoverParts(I, T) {
						return y(this, this.f, this.h, T, I);
					}
					set color(I) {
						this.c = I;
					}
					get color() {
						return this.c;
					}
				};
				(e.$aCb = s), (e.$aCb = s = Ne([j(1, n.$iP)], s));
				async function l(S, I, T, P) {
					const k = I.getValueInRange(T.range),
						{ red: L, green: D, blue: M, alpha: N } = T.color,
						A = new w.$RL(
							Math.round(L * 255),
							Math.round(D * 255),
							Math.round(M * 255),
							N,
						),
						R = new w.$UL(A),
						O = await (0, r.$WBb)(I, T, P, i.CancellationToken.None),
						B = new a.$1Bb(R, [], 0);
					return (
						(B.colorPresentations = O || []),
						B.guessColorPresentation(R, k),
						S instanceof f
							? new o(S, d.$iL.lift(T.range), B, P)
							: new b(S, d.$iL.lift(T.range), B, P)
					);
				}
				function y(S, I, T, P, k) {
					if (P.length === 0 || !I.hasModel()) return;
					if (k.setMinimumDimensions) {
						const B = I.getOption(C.EditorOption.lineHeight) + 8;
						k.setMinimumDimensions(new g.$pgb(302, B));
					}
					const L = new E.$Zc(),
						D = P[0],
						M = I.getModel(),
						N = D.model,
						A = L.add(
							new h.$9Bb(
								k.fragment,
								N,
								I.getOption(C.EditorOption.pixelRatio),
								T,
								S instanceof s,
							),
						);
					let R = !1,
						O = new d.$iL(
							D.range.startLineNumber,
							D.range.startColumn,
							D.range.endLineNumber,
							D.range.endColumn,
						);
					if (S instanceof s) {
						const B = D.model.color;
						(S.color = B),
							v(M, N, B, O, D),
							L.add(
								N.onColorFlushed((U) => {
									S.color = U;
								}),
							);
					} else
						L.add(
							N.onColorFlushed(async (B) => {
								await v(M, N, B, O, D), (R = !0), (O = $(I, O, N));
							}),
						);
					return (
						L.add(
							N.onDidChangeColor((B) => {
								v(M, N, B, O, D);
							}),
						),
						L.add(
							I.onDidChangeModelContent((B) => {
								R ? (R = !1) : (k.hide(), I.focus());
							}),
						),
						{ hoverPart: D, colorPicker: A, disposables: L }
					);
				}
				function $(S, I, T) {
					const P = [],
						k = T.presentation.textEdit ?? {
							range: I,
							text: T.presentation.label,
							forceMoveMarkers: !1,
						};
					P.push(k),
						T.presentation.additionalTextEdits &&
							P.push(...T.presentation.additionalTextEdits);
					const L = d.$iL.lift(k.range),
						D = S.getModel()._setTrackedRange(
							null,
							L,
							m.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter,
						);
					return (
						S.executeEdits("colorpicker", P),
						S.pushUndoStop(),
						S.getModel()._getTrackedRange(D) ?? L
					);
				}
				async function v(S, I, T, P, k) {
					const L = await (0, r.$WBb)(
						S,
						{
							range: P,
							color: {
								red: T.rgba.r / 255,
								green: T.rgba.g / 255,
								blue: T.rgba.b / 255,
								alpha: T.rgba.a,
							},
						},
						k.provider,
						i.CancellationToken.None,
					);
					I.colorPresentations = L || [];
				}
			},
		),
		