import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/async.js';
import '../../../../base/common/color.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/stopwatch.js';
import '../../../../base/common/strings.js';
import '../../../browser/editorDom.js';
import '../../../browser/editorExtensions.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/model/textModel.js';
import '../../../common/services/languageFeatureDebounce.js';
import '../../../common/services/languageFeatures.js';
import './color.js';
import '../../../../platform/configuration/common/configuration.js';
define(
			de[785],
			he([
				1, 0, 15, 97, 29, 6, 3, 162, 37, 777, 46, 38, 17, 122, 391, 69, 1603,
				10,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*async*/,
 i /*color*/,
 w /*errors*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*stopwatch*/,
 m /*strings*/,
 r /*editorDom*/,
 u /*editorExtensions*/,
 a /*editorOptions*/,
 h /*range*/,
 c /*textModel*/,
 n /*languageFeatureDebounce*/,
 g /*languageFeatures*/,
 p /*color*/,
 o /*configuration*/) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ZBb = e.$YBb = e.$XBb = void 0),
					(e.$XBb = Object.create({}));
				let b = class extends C.$1c {
					static {
						f = this;
					}
					static {
						this.ID = "editor.contrib.colorDetector";
					}
					static {
						this.RECOMPUTE_TIME = 1e3;
					}
					constructor(y, $, v, S) {
						super(),
							(this.z = y),
							(this.C = $),
							(this.F = v),
							(this.f = this.D(new C.$Zc())),
							(this.n = []),
							(this.q = new Map()),
							(this.s = this.z.createDecorationsCollection()),
							(this.w = new r.$oub(this.z)),
							(this.y = new s()),
							(this.L = this.D(new C.$Zc())),
							(this.m = S.for(v.colorProvider, "Document Colors", {
								min: f.RECOMPUTE_TIME,
							})),
							this.D(
								y.onDidChangeModel(() => {
									(this.t = this.isEnabled()), this.G();
								}),
							),
							this.D(y.onDidChangeModelLanguage(() => this.G())),
							this.D(v.colorProvider.onDidChange(() => this.G())),
							this.D(
								y.onDidChangeConfiguration((I) => {
									const T = this.t;
									(this.t = this.isEnabled()),
										(this.u = this.z.getOption(
											a.EditorOption.defaultColorDecorators,
										));
									const P =
											T !== this.t ||
											I.hasChanged(a.EditorOption.colorDecoratorsLimit),
										k = I.hasChanged(a.EditorOption.defaultColorDecorators);
									(P || k) && (this.t ? this.G() : this.N());
								}),
							),
							(this.j = null),
							(this.h = null),
							(this.t = this.isEnabled()),
							(this.u = this.z.getOption(
								a.EditorOption.defaultColorDecorators,
							)),
							this.G();
					}
					isEnabled() {
						const y = this.z.getModel();
						if (!y) return !1;
						const $ = y.getLanguageId(),
							v = this.C.getValue($);
						if (v && typeof v == "object") {
							const S = v.colorDecorators;
							if (S && S.enable !== void 0 && !S.enable) return S.enable;
						}
						return this.z.getOption(a.EditorOption.colorDecorators);
					}
					get limitReporter() {
						return this.y;
					}
					static get(y) {
						return y.getContribution(this.ID);
					}
					dispose() {
						this.I(), this.N(), super.dispose();
					}
					G() {
						if ((this.I(), !this.t)) return;
						const y = this.z.getModel();
						!y ||
							!this.F.colorProvider.has(y) ||
							(this.f.add(
								this.z.onDidChangeModelContent(() => {
									this.j ||
										((this.j = new t.$Wh()),
										this.j.cancelAndSet(() => {
											(this.j = null), this.H();
										}, this.m.get(y)));
								}),
							),
							this.H());
					}
					async H() {
						this.h = (0, t.$zh)(async (y) => {
							const $ = this.z.getModel();
							if (!$) return [];
							const v = new d.$le(!1),
								S = await (0, p.$VBb)(this.F.colorProvider, $, y, this.u);
							return this.m.update($, v.elapsed()), S;
						});
						try {
							const y = await this.h;
							this.J(y), this.M(y), (this.h = null);
						} catch (y) {
							(0, w.$4)(y);
						}
					}
					I() {
						this.j && (this.j.cancel(), (this.j = null)),
							this.h && (this.h.cancel(), (this.h = null)),
							this.f.clear();
					}
					J(y) {
						const $ = y.map((v) => ({
							range: {
								startLineNumber: v.colorInfo.range.startLineNumber,
								startColumn: v.colorInfo.range.startColumn,
								endLineNumber: v.colorInfo.range.endLineNumber,
								endColumn: v.colorInfo.range.endColumn,
							},
							options: c.$eY.EMPTY,
						}));
						this.z.changeDecorations((v) => {
							(this.n = v.deltaDecorations(this.n, $)),
								(this.q = new Map()),
								this.n.forEach((S, I) => this.q.set(S, y[I]));
						});
					}
					M(y) {
						this.L.clear();
						const $ = [],
							v = this.z.getOption(a.EditorOption.colorDecoratorsLimit);
						for (let I = 0; I < y.length && $.length < v; I++) {
							const {
									red: T,
									green: P,
									blue: k,
									alpha: L,
								} = y[I].colorInfo.color,
								D = new i.$RL(
									Math.round(T * 255),
									Math.round(P * 255),
									Math.round(k * 255),
									L,
								),
								M = `rgba(${D.r}, ${D.g}, ${D.b}, ${D.a})`,
								N = this.L.add(
									this.w.createClassNameRef({ backgroundColor: M }),
								);
							$.push({
								range: {
									startLineNumber: y[I].colorInfo.range.startLineNumber,
									startColumn: y[I].colorInfo.range.startColumn,
									endLineNumber: y[I].colorInfo.range.endLineNumber,
									endColumn: y[I].colorInfo.range.endColumn,
								},
								options: {
									description: "colorDetector",
									before: {
										content: m.$ig,
										inlineClassName: `${N.className} colorpicker-color-decoration`,
										inlineClassNameAffectsLetterSpacing: !0,
										attachedData: e.$XBb,
									},
								},
							});
						}
						const S = v < y.length ? v : !1;
						this.y.update(y.length, S), this.s.set($);
					}
					N() {
						this.z.removeDecorations(this.n),
							(this.n = []),
							this.s.clear(),
							this.L.clear();
					}
					getColorData(y) {
						const $ = this.z.getModel();
						if (!$) return null;
						const v = $.getDecorationsInRange(h.$iL.fromPositions(y, y)).filter(
							(S) => this.q.has(S.id),
						);
						return v.length === 0 ? null : this.q.get(v[0].id);
					}
					isColorDecoration(y) {
						return this.s.has(y);
					}
				};
				(e.$YBb = b),
					(e.$YBb = b = f = Ne([j(1, o.$gj), j(2, g.$k3), j(3, n.$PBb)], b));
				class s {
					constructor() {
						(this.f = new E.$re()),
							(this.onDidChange = this.f.event),
							(this.h = 0),
							(this.j = !1);
					}
					get computed() {
						return this.h;
					}
					get limited() {
						return this.j;
					}
					update(y, $) {
						(y !== this.h || $ !== this.j) &&
							((this.h = y), (this.j = $), this.f.fire());
					}
				}
				(e.$ZBb = s),
					(0, u.$qtb)(
						b.ID,
						b,
						u.EditorContributionInstantiation.AfterFirstRender,
					);
			},
		)
