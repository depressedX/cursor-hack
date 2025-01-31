import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/utils.js';
import '../../../../base/common/types.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/cursorEvents.js';
import '../../../../editor/contrib/folding/browser/folding.js';
import '../../../../platform/accessibilitySignal/browser/accessibilitySignalService.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/markers/common/markers.js';
import '../../debug/common/debug.js';
import '../../../services/editor/common/editorService.js';
define(
			de[3258],
			he([1, 0, 15, 3, 77, 457, 28, 56, 248, 350, 184, 5, 90, 112, 18]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*lifecycle*/,
 w /*observable*/,
 E /*utils*/,
 C /*types*/,
 d /*editorBrowser*/,
 m /*cursorEvents*/,
 r /*folding*/,
 u /*accessibilitySignalService*/,
 a /*instantiation*/,
 h /*markers*/,
 c /*debug*/,
 n /*editorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$z2c = void 0);
				let g = class extends i.$1c {
					constructor(l, y, $) {
						super(),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.a = [
								this.g.createInstance(
									o,
									u.$Twb.errorAtPosition,
									u.$Twb.errorOnLine,
									h.MarkerSeverity.Error,
								),
								this.g.createInstance(
									o,
									u.$Twb.warningAtPosition,
									u.$Twb.warningOnLine,
									h.MarkerSeverity.Warning,
								),
								this.g.createInstance(f),
								this.g.createInstance(b),
							]),
							(this.b = (0, w.derived)(this, (v) =>
								this.a
									.flatMap((S) => [S.lineSignal, S.positionSignal])
									.filter(C.$tg)
									.some((S) =>
										(0, E.$Nd)(this, this.h.getEnabledState(S, !1)).read(v),
									),
							)),
							(this.c = (0, w.observableFromEvent)(
								this,
								this.f.onDidActiveEditorChange,
								(v) => {
									const S = this.f.activeTextEditorControl,
										I = (0, d.$$sb)(S)
											? S.getOriginalEditor()
											: (0, d.$0sb)(S)
												? S
												: void 0;
									return I && I.hasModel()
										? { editor: I, model: I.getModel() }
										: void 0;
								},
							)),
							this.D(
								(0, w.autorunWithStore)((v, S) => {
									if (!this.b.read(v)) return;
									const I = this.c.read(v);
									I && this.j(I.editor, I.model, S);
								}),
							);
					}
					j(l, y, $) {
						let v = -1;
						const S = new Set(),
							I = $.add(new i.$Zc()),
							T = this.a.map((k) => ({
								source: k.createSource(l, y),
								property: k,
							})),
							P = (0, E.$Fd)(l.onDidChangeModelContent, 100, $);
						$.add(
							l.onDidChangeCursorPosition((k) => {
								if (
									(I.clear(),
									k &&
										k.reason !== m.CursorChangeReason.Explicit &&
										k.reason !== m.CursorChangeReason.NotSet)
								) {
									S.clear();
									return;
								}
								const L = (N, A, R) => {
										const O = R === "line" ? N.lineSignal : N.positionSignal;
										if (
											!(
												!O ||
												!this.h.getEnabledState(O, !1).value ||
												!A.isPresent(D, R, void 0)
											)
										) {
											for (const B of ["sound", "announcement"])
												if (this.h.getEnabledState(O, !1, B).value) {
													const U =
														this.h.getDelayMs(O, B, R) + (P.get() ? 1e3 : 0);
													I.add(
														(0, t.$Oh)(() => {
															A.isPresent(D, R, void 0) &&
																((R !== "line" || !S.has(N)) &&
																	this.h.playSignal(O, { modality: B }),
																S.add(N));
														}, U),
													);
												}
										}
									},
									D = k.position,
									M = D.lineNumber;
								if (M !== v) {
									S.clear(), (v = M);
									for (const N of T) L(N.property, N.source, "line");
								}
								for (const N of T) L(N.property, N.source, "positional");
								for (const N of T) {
									if (
										![N.property.lineSignal, N.property.positionSignal].some(
											(O) => O && this.h.getEnabledState(O, !1).value,
										)
									)
										return;
									let A, R;
									I.add(
										(0, w.autorun)((O) => {
											const B = N.source.isPresentAtPosition(k.position, O),
												U = N.source.isPresentOnLine(k.position.lineNumber, O);
											A !== void 0 &&
												A !== void 0 &&
												(!A && B && L(N.property, N.source, "positional"),
												!R && U && L(N.property, N.source, "line")),
												(A = B),
												(R = U);
										}),
									);
								}
							}),
						);
					}
				};
				(e.$z2c = g),
					(e.$z2c = g = Ne([j(0, n.$IY), j(1, a.$Li), j(2, u.$Owb)], g));
				class p {
					static {
						this.notPresent = new p({
							isPresentAtPosition: () => !1,
							isPresentOnLine: () => !1,
						});
					}
					constructor(l) {
						(this.isPresentOnLine = l.isPresentOnLine),
							(this.isPresentAtPosition = l.isPresentAtPosition ?? (() => !1));
					}
					isPresent(l, y, $) {
						return y === "line"
							? this.isPresentOnLine(l.lineNumber, $)
							: this.isPresentAtPosition(l, $);
					}
				}
				let o = class {
					constructor(l, y, $, v) {
						(this.positionSignal = l),
							(this.lineSignal = y),
							(this.a = $),
							(this.b = v),
							(this.debounceWhileTyping = !0);
					}
					createSource(l, y) {
						const $ = (0, E.$Bd)("onMarkerChanged", this.b.onMarkerChanged);
						return new p({
							isPresentAtPosition: (v, S) => (
								$.read(S),
								this.b
									.read({ resource: y.uri })
									.some(
										(T) =>
											T.severity === this.a &&
											T.startLineNumber <= v.lineNumber &&
											v.lineNumber <= T.endLineNumber &&
											T.startColumn <= v.column &&
											v.column <= T.endColumn,
									)
							),
							isPresentOnLine: (v, S) => (
								$.read(S),
								this.b
									.read({ resource: y.uri })
									.some(
										(T) =>
											T.severity === this.a &&
											T.startLineNumber <= v &&
											v <= T.endLineNumber,
									)
							),
						});
					}
				};
				o = Ne([j(3, h.$aM)], o);
				class f {
					constructor() {
						this.lineSignal = u.$Twb.foldedArea;
					}
					createSource(l, y) {
						const $ = r.$ZNb.get(l);
						if (!$) return p.notPresent;
						const v = (0, w.observableFromPromise)(
							$.getFoldingModel() ?? Promise.resolve(void 0),
						);
						return new p({
							isPresentOnLine(S, I) {
								const P = v.read(I).value?.getRegionAtLine(S);
								return P ? P.isCollapsed && P.startLineNumber === S : !1;
							},
						});
					}
				}
				let b = class {
					constructor(l) {
						(this.a = l), (this.lineSignal = u.$Twb.break);
					}
					createSource(l, y) {
						const $ = (0, E.$Bd)(
								"onDidChangeBreakpoints",
								this.a.getModel().onDidChangeBreakpoints,
							),
							v = this.a;
						return new p({
							isPresentOnLine(S, I) {
								return (
									$.read(I),
									v.getModel().getBreakpoints({ uri: y.uri, lineNumber: S })
										.length > 0
								);
							},
						});
					}
				};
				b = Ne([j(0, c.$75)], b);
			},
		)
