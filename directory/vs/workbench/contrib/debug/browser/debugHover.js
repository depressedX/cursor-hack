import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/numbers.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/scrollable.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/theme/common/colorRegistry.js';
import './baseDebugView.js';
import './linkDetector.js';
import './variablesView.js';
import '../common/debug.js';
import '../common/debugModel.js';
import '../common/debugUtils.js';
define(
			de[3828],
			he([
				1, 0, 7, 203, 24, 33, 27, 3, 201, 12, 195, 56, 38, 17, 122, 69, 4, 11,
				8, 49, 72, 5, 93, 34, 51, 629, 709, 1334, 112, 300, 396,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*scrollableElement*/,
				w /*arrays*/,
				E /*cancellation*/,
				C /*keyCodes*/,
				d /*lifecycle*/,
				m /*numbers*/,
				r /*platform*/,
				u /*scrollable*/,
				a /*editorBrowser*/,
				h /*editorOptions*/,
				c /*range*/,
				n /*textModel*/,
				g /*languageFeatures*/,
				p /*nls*/,
				o /*actions*/,
				f /*contextkey*/,
				b /*contextView*/,
				s /*hover*/,
				l /*instantiation*/,
				y /*listService*/,
				$ /*log*/,
				v /*colorRegistry*/,
				S /*baseDebugView*/,
				I /*linkDetector*/,
				T /*variablesView*/,
				P /*debug*/,
				k /*debugModel*/,
				L /*debugUtils*/,
) {
				"use strict";
				var D;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$EQc = e.ShowDebugHoverResult = void 0),
					(e.$DQc = R),
					(t = mt(t)),
					(d = mt(d)),
					(p = mt(p));
				const M = t.$;
				var N;
				(function (x) {
					(x[(x.NOT_CHANGED = 0)] = "NOT_CHANGED"),
						(x[(x.NOT_AVAILABLE = 1)] = "NOT_AVAILABLE"),
						(x[(x.CANCELLED = 2)] = "CANCELLED");
				})(N || (e.ShowDebugHoverResult = N = {}));
				async function A(x, H) {
					if (!x) return null;
					const V = (await x.getChildren()).filter((G) => H[0] === G.name);
					return V.length !== 1
						? null
						: H.length === 1
							? V[0]
							: A(V[0], H.slice(1));
				}
				async function R(x, H) {
					const V = (await x.getScopes()).filter((K) => !K.expensive),
						G = (0, w.$Lb)(await Promise.all(V.map((K) => A(K, H))));
					return G.length > 0 && G.every((K) => K.value === G[0].value)
						? G[0]
						: void 0;
				}
				let O = class {
					static {
						D = this;
					}
					static {
						this.ID = "debug.hoverWidget";
					}
					get isShowingComplexValue() {
						return this.j?.hidden === !1;
					}
					constructor(H, q, V, G, K, J, W) {
						(this.t = H),
							(this.u = q),
							(this.w = V),
							(this.z = G),
							(this.A = K),
							(this.B = J),
							(this.C = W),
							(this.allowEditorOverflow = !0),
							(this.i = this.t.createDecorationsCollection()),
							(this.r = !1),
							(this.n = []),
							(this.g = null),
							(this.h = [
								a.ContentWidgetPositionPreference.ABOVE,
								a.ContentWidgetPositionPreference.BELOW,
							]),
							(this.p = this.w.createInstance(F, this.t));
					}
					D() {
						(this.d = M(".debug-hover-widget")),
							(this.j = t.$fhb(this.d, M(".complex-value"))),
							(this.k = t.$fhb(this.j, M(".title"))),
							(this.m = t.$fhb(this.j, M(".debug-hover-tree"))),
							this.m.setAttribute("role", "tree");
						const H = t.$fhb(this.j, M(".tip"));
						H.textContent = p.localize(5497, null, r.$m ? "Option" : "Alt");
						const q = this.w.createInstance(U),
							V = this.w.createInstance(I.$7Hc);
						(this.f = this.w.createInstance(
							y.$FMb,
							"DebugHover",
							this.m,
							new z(),
							[
								this.w.createInstance(T.$xQc, V),
								this.w.createInstance(T.$wQc, V),
							],
							q,
							{
								accessibilityProvider: new B(),
								mouseSupport: !1,
								horizontalScrolling: !0,
								useShadows: !1,
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: (G) => G.name,
								},
								overrideStyles: { listBackground: v.$FQ },
							},
						)),
							this.n.push(
								T.$wQc.rendererOnVisualizationRange(
									this.u.getViewModel(),
									this.f,
								),
							),
							(this.l = M(".value")),
							(this.l.tabIndex = 0),
							this.l.setAttribute("role", "tooltip"),
							(this.o = new i.$8hb(this.l, {
								horizontal: u.ScrollbarVisibility.Hidden,
							})),
							this.d.appendChild(this.o.getDomNode()),
							this.n.push(this.o),
							this.t.applyFontInfo(this.d),
							(this.d.style.backgroundColor = (0, v.$rP)(v.$FQ)),
							(this.d.style.border = `1px solid ${(0, v.$rP)(v.$HQ)}`),
							(this.d.style.color = (0, v.$rP)(v.$GQ)),
							this.n.push(this.f.onContextMenu(async (G) => await this.E(G))),
							this.n.push(
								this.f.onDidChangeContentHeight(() => {
									this.r || this.I();
								}),
							),
							this.n.push(
								this.f.onDidChangeContentWidth(() => {
									this.r || this.I();
								}),
							),
							this.F(),
							this.t.addContentWidget(this);
					}
					async E(H) {
						const q = H.element;
						if (!(!(q instanceof k.$K3) || !q.value))
							return (0, T.$vQc)(
								this.A,
								this.z,
								this.B,
								o.$XX.DebugHoverContext,
								H,
							);
					}
					F() {
						this.n.push(
							t.$$fb(this.d, "keydown", (H) => {
								H.equals(C.KeyCode.Escape) && this.hide();
							}),
						),
							this.n.push(
								this.t.onDidChangeConfiguration((H) => {
									H.hasChanged(h.EditorOption.fontInfo) &&
										this.t.applyFontInfo(this.d);
								}),
							),
							this.n.push(
								this.u.getViewModel().onDidEvaluateLazyExpression(async (H) => {
									H instanceof k.$K3 &&
										this.f.hasNode(H) &&
										(await this.f.updateChildren(H, !1, !0),
										await this.f.expand(H));
								}),
							);
					}
					isHovered() {
						return !!this.d?.matches(":hover");
					}
					isVisible() {
						return !!this.a;
					}
					willBeVisible() {
						return !!this.c;
					}
					getId() {
						return D.ID;
					}
					getDomNode() {
						return this.d;
					}
					isInSafeTriangle(H, q) {
						return this.a && !!this.b?.contains(H, q);
					}
					async showAt(H, q, V) {
						this.c?.dispose(!0);
						const G = (this.c = new E.$Ce()),
							K = this.u.getViewModel().focusedSession;
						if (!K || !this.t.hasModel()) return this.hide(), N.NOT_AVAILABLE;
						const J = await this.p.compute(H, G.token);
						if (G.token.isCancellationRequested)
							return this.hide(), N.CANCELLED;
						if (!J.range) return this.hide(), N.NOT_AVAILABLE;
						if (this.isVisible() && !J.rangeChanged) return N.NOT_CHANGED;
						const W = await this.p.evaluate(K);
						return G.token.isCancellationRequested
							? (this.hide(), N.CANCELLED)
							: !W || (W instanceof k.$J3 && !W.available)
								? (this.hide(), N.NOT_AVAILABLE)
								: (this.i.set([{ range: J.range, options: D.G }]),
									this.H(J.range.getStartPosition(), W, q, V));
					}
					static {
						this.G = n.$eY.register({
							description: "bdebug-hover-highlight",
							className: "hoverHighlight",
						});
					}
					async H(H, q, V, G) {
						this.d || this.D(), (this.g = H);
						const K = new d.$Zc();
						if (((this.a = { store: K }), !q.hasChildren)) {
							(this.j.hidden = !0),
								(this.l.hidden = !1),
								(0, S.$dIc)(
									K,
									q,
									this.l,
									{ showChanged: !1, colorize: !0, hover: !1 },
									this.C,
								),
								(this.l.title = ""),
								this.t.layoutContentWidget(this),
								this.o.scanDomNode(),
								V && (this.t.render(), this.l.focus());
							return;
						}
						(this.l.hidden = !0),
							(this.q = q),
							(this.k.textContent = q.value),
							(this.k.title = q.value),
							this.t.layoutContentWidget(this),
							(this.f.scrollTop = 0),
							(this.f.scrollLeft = 0),
							(this.j.hidden = !1),
							(this.b = G && new t.$Mhb(G.posx, G.posy, this.d)),
							V && (this.t.render(), this.f.domFocus());
					}
					I() {
						this.J(), this.t.layoutContentWidget(this);
					}
					J() {
						let q = 1 / 0;
						if (this.g) {
							const J = this.t.getDomNode()?.offsetTop || 0,
								W = this.m.offsetTop + J,
								X =
									this.t.getTopForLineNumber(this.g.lineNumber, !0) -
									this.t.getScrollTop();
							W < X && (q = X + J - 22);
						}
						const V = Math.min(
								Math.max(266, this.t.getLayoutInfo().height * 0.55),
								this.f.contentHeight + 10,
								q,
							),
							G = this.f.contentWidth,
							K = (0, m.$Zm)(G, 400, 550);
						this.f.layout(V, K),
							(this.m.style.height = `${V}px`),
							this.o.scanDomNode();
					}
					beforeRender() {
						if (this.q) {
							const H = this.q;
							(this.q = void 0),
								(this.r = !0),
								this.f.setInput(H).finally(() => {
									this.r = !1;
								});
						}
						return null;
					}
					afterRender(H) {
						H && (this.h = [H]);
					}
					hide() {
						this.c && (this.c.dispose(!0), (this.c = void 0)),
							this.a &&
								(t.$Lgb(this.d) && this.t.focus(),
								this.a.store.dispose(),
								(this.a = void 0),
								this.i.clear(),
								this.t.layoutContentWidget(this),
								(this.h = [
									a.ContentWidgetPositionPreference.ABOVE,
									a.ContentWidgetPositionPreference.BELOW,
								]));
					}
					getPosition() {
						return this.a ? { position: this.g, preference: this.h } : null;
					}
					dispose() {
						this.n = d.$Vc(this.n);
					}
				};
				(e.$EQc = O),
					(e.$EQc =
						O =
						D =
							Ne(
								[
									j(1, P.$75),
									j(2, l.$Li),
									j(3, o.$YX),
									j(4, f.$6j),
									j(5, b.$Xxb),
									j(6, s.$Uyb),
								],
								O,
							));
				class B {
					getWidgetAriaLabel() {
						return p.localize(5498, null);
					}
					getAriaLabel(H) {
						return p.localize(5499, null, H.name, H.value);
					}
				}
				class U extends S.$fIc {
					hasChildren(H) {
						return H.hasChildren;
					}
					c(H) {
						return H.getChildren();
					}
				}
				class z {
					getHeight(H) {
						return 18;
					}
					getTemplateId(H) {
						return H instanceof k.$I3 ? T.$wQc.ID : T.$xQc.ID;
					}
				}
				let F = class {
					constructor(H, q, V, G) {
						(this.b = H), (this.c = q), (this.d = V), (this.f = G);
					}
					async compute(H, q) {
						if (!this.c.getViewModel().focusedSession || !this.b.hasModel())
							return { rangeChanged: !1 };
						const G = this.b.getModel(),
							K = await (0, L.$r3)(this.d, G, H, q);
						if (!K) return { rangeChanged: !1 };
						const { range: J, matchingExpression: W } = K,
							X = !this.a?.range.equalsRange(J);
						return (
							(this.a = { expression: W, range: c.$iL.lift(J) }),
							{ rangeChanged: X, range: this.a.range }
						);
					}
					async evaluate(H) {
						if (!this.a) {
							this.f.error("No expression to evaluate");
							return;
						}
						const q = this.b.getModel(),
							V = q && H.getSourceForUri(q?.uri);
						if (H.capabilities.supportsEvaluateForHovers) {
							const G = new k.$J3(this.a.expression);
							return (
								await G.evaluate(
									H,
									this.c.getViewModel().focusedStackFrame,
									"hover",
									void 0,
									V
										? {
												line: this.a.range.startLineNumber,
												column: this.a.range.startColumn,
												source: V.raw,
											}
										: void 0,
								),
								G
							);
						} else {
							const G = this.c.getViewModel().focusedStackFrame;
							if (G)
								return await R(
									G,
									(0, w.$Lb)(this.a.expression.split(".").map((K) => K.trim())),
								);
						}
					}
				};
				F = Ne([j(1, P.$75), j(2, g.$k3), j(3, $.$ik)], F);
			},
		)
