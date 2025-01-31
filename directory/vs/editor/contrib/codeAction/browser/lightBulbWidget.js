import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/touch.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/themables.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/model.js';
import '../../../common/model/textModel.js';
import '../../../common/model/utils.js';
import './codeAction.js';
import '../../../../nls.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../common/core/range.js';
import '../../../../css!vs/editor/contrib/codeAction/browser/lightBulbWidget.js';
define(
			de[1685],
			he([
				1, 0, 7, 159, 14, 6, 3, 26, 56, 38, 64, 122, 1149, 393, 4, 39, 79, 17,
				2291,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*touch*/,
 w /*codicons*/,
 E /*event*/,
 C /*lifecycle*/,
 d /*themables*/,
 m /*editorBrowser*/,
 r /*editorOptions*/,
 u /*model*/,
 a /*textModel*/,
 h /*utils*/,
 c /*codeAction*/,
 n /*nls*/,
 g /*keybinding*/,
 p /*iconRegistry*/,
 o /*range*/) {
				"use strict";
				var f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$wBb = void 0),
					(t = mt(t)),
					(n = mt(n));
				const b = (0, p.$$O)(
						"gutter-lightbulb",
						w.$ak.lightBulb,
						n.localize(940, null),
					),
					s = (0, p.$$O)(
						"gutter-lightbulb-auto-fix",
						w.$ak.lightbulbAutofix,
						n.localize(941, null),
					),
					l = (0, p.$$O)(
						"gutter-lightbulb-sparkle",
						w.$ak.lightbulbSparkle,
						n.localize(942, null),
					),
					y = (0, p.$$O)(
						"gutter-lightbulb-aifix-auto-fix",
						w.$ak.lightbulbSparkleAutofix,
						n.localize(943, null),
					),
					$ = (0, p.$$O)(
						"gutter-lightbulb-sparkle-filled",
						w.$ak.sparkleFilled,
						n.localize(944, null),
					);
				var v;
				(function (I) {
					let T;
					(function (k) {
						(k[(k.Hidden = 0)] = "Hidden"), (k[(k.Showing = 1)] = "Showing");
					})((T = I.Type || (I.Type = {}))),
						(I.Hidden = { type: T.Hidden });
					class P {
						constructor(L, D, M, N) {
							(this.actions = L),
								(this.trigger = D),
								(this.editorPosition = M),
								(this.widgetPosition = N),
								(this.type = T.Showing);
						}
					}
					I.Showing = P;
				})(v || (v = {}));
				let S = class extends C.$1c {
					static {
						f = this;
					}
					static {
						this.b = a.$eY.register({
							description: "codicon-gutter-lightbulb-decoration",
							glyphMarginClassName: d.ThemeIcon.asClassName(w.$ak.lightBulb),
							glyphMargin: { position: u.GlyphMarginLane.Left },
							stickiness: u.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						});
					}
					static {
						this.ID = "editor.contrib.lightbulbWidget";
					}
					static {
						this.c = [m.ContentWidgetPositionPreference.EXACT];
					}
					constructor(T, P) {
						super(),
							(this.t = T),
							(this.u = P),
							(this.g = this.D(new E.$re())),
							(this.onClick = this.g.event),
							(this.h = v.Hidden),
							(this.j = v.Hidden),
							(this.m = []),
							(this.n = [
								"codicon-" + b.id,
								"codicon-" + y.id,
								"codicon-" + s.id,
								"codicon-" + l.id,
								"codicon-" + $.id,
							]),
							(this.s = f.b),
							(this.f = t.$("div.lightBulbWidget")),
							(this.f.role = "listbox"),
							this.D(i.$Qhb.ignoreTarget(this.f)),
							this.t.addContentWidget(this),
							this.D(
								this.t.onDidChangeModelContent((k) => {
									const L = this.t.getModel();
									(this.w.type !== v.Type.Showing ||
										!L ||
										this.w.editorPosition.lineNumber >= L.getLineCount()) &&
										this.hide(),
										(this.z.type !== v.Type.Showing ||
											!L ||
											this.z.editorPosition.lineNumber >= L.getLineCount()) &&
											this.gutterHide();
								}),
							),
							this.D(
								t.$_fb(this.f, (k) => {
									if (this.w.type !== v.Type.Showing) return;
									this.t.focus(), k.preventDefault();
									const { top: L, height: D } = t.$tgb(this.f),
										M = this.t.getOption(r.EditorOption.lineHeight);
									let N = Math.floor(M / 3);
									this.w.widgetPosition.position !== null &&
										this.w.widgetPosition.position.lineNumber <
											this.w.editorPosition.lineNumber &&
										(N += M),
										this.g.fire({
											x: k.posx,
											y: L + D + N,
											actions: this.w.actions,
											trigger: this.w.trigger,
										});
								}),
							),
							this.D(
								t.$0fb(this.f, "mouseenter", (k) => {
									(k.buttons & 1) === 1 && this.hide();
								}),
							),
							this.D(
								E.Event.runAndSubscribe(this.u.onDidUpdateKeybindings, () => {
									(this.q =
										this.u.lookupKeybinding(c.$NAb)?.getLabel() ?? void 0),
										(this.r =
											this.u.lookupKeybinding(c.$MAb)?.getLabel() ?? void 0),
										this.C();
								}),
							),
							this.D(
								this.t.onMouseDown(async (k) => {
									if (
										!k.target.element ||
										!this.n.some(
											(A) =>
												k.target.element &&
												k.target.element.classList.contains(A),
										) ||
										this.z.type !== v.Type.Showing
									)
										return;
									this.t.focus();
									const { top: L, height: D } = t.$tgb(k.target.element),
										M = this.t.getOption(r.EditorOption.lineHeight);
									let N = Math.floor(M / 3);
									this.z.widgetPosition.position !== null &&
										this.z.widgetPosition.position.lineNumber <
											this.z.editorPosition.lineNumber &&
										(N += M),
										this.g.fire({
											x: k.event.posx,
											y: L + D + N,
											actions: this.z.actions,
											trigger: this.z.trigger,
										});
								}),
							);
					}
					dispose() {
						super.dispose(),
							this.t.removeContentWidget(this),
							this.a && this.I(this.a);
					}
					getId() {
						return "LightBulbWidget";
					}
					getDomNode() {
						return this.f;
					}
					getPosition() {
						return this.h.type === v.Type.Showing
							? this.h.widgetPosition
							: null;
					}
					update(T, P, k) {
						if (T.validActions.length <= 0)
							return this.gutterHide(), this.hide();
						if (!this.t.hasTextFocus()) return this.gutterHide(), this.hide();
						if (!this.t.getOptions().get(r.EditorOption.lightbulb).enabled)
							return this.gutterHide(), this.hide();
						const M = this.t.getModel();
						if (!M) return this.gutterHide(), this.hide();
						const { lineNumber: N, column: A } = M.validatePosition(k),
							R = M.getOptions().tabSize,
							O = this.t.getOptions().get(r.EditorOption.fontInfo),
							B = M.getLineContent(N),
							U = (0, h.$BU)(B, R),
							z = O.spaceWidth * U > 22,
							F = (J) =>
								J > 2 &&
								this.t.getTopForLineNumber(J) ===
									this.t.getTopForLineNumber(J - 1),
							x = this.t.getLineDecorations(N);
						let H = !1;
						if (x)
							for (const J of x) {
								const W = J.options.glyphMarginClassName;
								if (W && !this.n.some((X) => W.includes(X))) {
									H = !0;
									break;
								}
							}
						let q = N,
							V = 1;
						if (!z) {
							const J = (W) => {
								const X = M.getLineContent(W);
								return /^\s*$|^\s+/.test(X) || X.length <= V;
							};
							if (N > 1 && !F(N - 1)) {
								const W = M.getLineCount(),
									X = N === W,
									Y = N > 1 && J(N - 1),
									ie = !X && J(N + 1),
									ne = J(N),
									ee = !ie && !Y;
								if (!ie && !Y && !H)
									return (
										(this.z = new v.Showing(T, P, k, {
											position: { lineNumber: q, column: V },
											preference: f.c,
										})),
										this.G(),
										this.hide()
									);
								Y || X || (Y && !ne)
									? (q -= 1)
									: (ie || (ee && ne)) && (q += 1);
							} else if (
								N === 1 &&
								(N === M.getLineCount() || (!J(N + 1) && !J(N)))
							)
								if (
									((this.z = new v.Showing(T, P, k, {
										position: { lineNumber: q, column: V },
										preference: f.c,
									})),
									H)
								)
									this.gutterHide();
								else return this.G(), this.hide();
							else if (N < M.getLineCount() && !F(N + 1)) q += 1;
							else if (A * O.spaceWidth < 22) return this.hide();
							V = /^\S\s*$/.test(M.getLineContent(q)) ? 2 : 1;
						}
						(this.w = new v.Showing(T, P, k, {
							position: { lineNumber: q, column: V },
							preference: f.c,
						})),
							this.a && (this.I(this.a), this.gutterHide());
						const G = T.validActions,
							K = T.validActions[0].action.kind;
						if (G.length !== 1 || !K) {
							this.t.layoutContentWidget(this);
							return;
						}
						this.t.layoutContentWidget(this);
					}
					hide() {
						this.w !== v.Hidden &&
							((this.w = v.Hidden), this.t.layoutContentWidget(this));
					}
					gutterHide() {
						this.z !== v.Hidden &&
							(this.a && this.I(this.a), (this.z = v.Hidden));
					}
					get w() {
						return this.h;
					}
					set w(T) {
						(this.h = T), this.C();
					}
					get z() {
						return this.j;
					}
					set z(T) {
						(this.j = T), this.F();
					}
					C() {
						if (
							(this.f.classList.remove(...this.m),
							(this.m = []),
							this.w.type !== v.Type.Showing)
						)
							return;
						let T,
							P = !1;
						this.w.actions.allAIFixes
							? ((T = w.$ak.sparkleFilled),
								this.w.actions.validActions.length === 1 && (P = !0))
							: this.w.actions.hasAutoFix
								? this.w.actions.hasAIFix
									? (T = w.$ak.lightbulbSparkleAutofix)
									: (T = w.$ak.lightbulbAutofix)
								: this.w.actions.hasAIFix
									? (T = w.$ak.lightbulbSparkle)
									: (T = w.$ak.lightBulb),
							this.L(this.w.actions.hasAutoFix, P),
							(this.m = d.ThemeIcon.asClassNameArray(T)),
							this.f.classList.add(...this.m);
					}
					F() {
						if (this.z.type !== v.Type.Showing) return;
						let T,
							P = !1;
						this.z.actions.allAIFixes
							? ((T = $), this.z.actions.validActions.length === 1 && (P = !0))
							: this.z.actions.hasAutoFix
								? this.z.actions.hasAIFix
									? (T = y)
									: (T = s)
								: this.z.actions.hasAIFix
									? (T = l)
									: (T = b),
							this.L(this.z.actions.hasAutoFix, P);
						const k = a.$eY.register({
							description: "codicon-gutter-lightbulb-decoration",
							glyphMarginClassName: d.ThemeIcon.asClassName(T),
							glyphMargin: { position: u.GlyphMarginLane.Left },
							stickiness: u.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
						});
						this.s = k;
					}
					G() {
						const T = this.t.getSelection();
						T &&
							(this.a === void 0
								? this.H(T.startLineNumber)
								: this.J(this.a, T.startLineNumber));
					}
					H(T) {
						this.t.changeDecorations((P) => {
							this.a = P.addDecoration(new o.$iL(T, 0, T, 0), this.s);
						});
					}
					I(T) {
						this.t.changeDecorations((P) => {
							P.removeDecoration(T), (this.a = void 0);
						});
					}
					J(T, P) {
						this.t.changeDecorations((k) => {
							k.changeDecoration(T, new o.$iL(P, 0, P, 0)),
								k.changeDecorationOptions(T, this.s);
						});
					}
					L(T, P) {
						this.w.type === v.Type.Showing &&
							(P
								? (this.M = n.localize(
										945,
										null,
										this.w.actions.validActions[0].action.title,
									))
								: T && this.q
									? (this.M = n.localize(946, null, this.q))
									: !T && this.r
										? (this.M = n.localize(947, null, this.r))
										: T || (this.M = n.localize(948, null)));
					}
					set M(T) {
						this.f.title = T;
					}
				};
				(e.$wBb = S), (e.$wBb = S = f = Ne([j(1, g.$uZ)], S));
			},
		)
