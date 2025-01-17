import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/color.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/scrollable.js';
import '../../../../base/common/strings.js';
import '../../../browser/config/domFontInfo.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/editorCommon.js';
import '../../../common/languages/language.js';
import '../../hover/browser/renderMarkerHover.js';
import '../../peekView/browser/peekView.js';
import '../../../../nls.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/label/common/label.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/severityIcon/browser/severityIcon.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../css!vs/editor/contrib/gotoError/browser/media/gotoErrorWidget.js';
define(
			de[4113],
			he([
				1, 0, 7, 203, 24, 97, 6, 3, 19, 195, 37, 321, 38, 17, 98, 61, 1965, 255,
				4, 92, 11, 8, 5, 73, 90, 41, 673, 51, 35, 2298,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
			) {
				"use strict";
				var k;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6hc = void 0),
					(t = mt(t)),
					(f = mt(f));
				class L {
					constructor(q, V, G, K, J, W, X, Y) {
						(this.k = K),
							(this.l = J),
							(this.m = W),
							(this.n = X),
							(this.o = Y),
							(this.a = 0),
							(this.b = 0),
							(this.h = new WeakMap()),
							(this.i = new d.$Zc()),
							(this.c = V);
						const ie = document.createElement("div");
						(ie.className = "descriptioncontainer"),
							(this.d = document.createElement("div")),
							this.d.classList.add("message"),
							this.d.setAttribute("aria-live", "assertive"),
							this.d.setAttribute("role", "alert"),
							ie.appendChild(this.d),
							(this.f = document.createElement("div")),
							ie.appendChild(this.f),
							this.i.add(
								t.$$fb(this.f, "click", (ne) => {
									ne.preventDefault();
									const ee = this.h.get(ne.target);
									ee && G(ee);
								}),
							),
							(this.g = new i.$5hb(ie, {
								horizontal: r.ScrollbarVisibility.Auto,
								vertical: r.ScrollbarVisibility.Auto,
								useShadows: !1,
								horizontalScrollbarSize: 6,
								verticalScrollbarSize: 6,
							})),
							q.appendChild(this.g.getDomNode()),
							this.i.add(
								this.g.onScroll((ne) => {
									(ie.style.left = `-${ne.scrollLeft}px`),
										(ie.style.top = `-${ne.scrollTop}px`);
								}),
							),
							this.i.add(this.g);
					}
					dispose() {
						this.solidDisposable?.dispose(), (0, d.$Vc)(this.i);
					}
					update(q) {
						if (
							(this.solidDisposable?.dispose(),
							(this.aiBugHeightInLines = void 0),
							q.aiLintBugData)
						) {
							t.$9fb(this.d),
								t.$9fb(this.f),
								(0, a.$ksb)(this.d),
								(this.aiBugHeightInLines = 15);
							const _ = this.n.createByFilepathOrFirstLine(q.resource);
							this.solidDisposable = (0, p.$5hc)(
								this.d,
								q,
								this.o,
								_,
								({ width: te, height: Q }) => {
									const Z = this.d.parentElement
											? t
													.getWindow(this.d.parentElement)
													.getComputedStyle(this.d.parentElement)
											: null,
										se = Z ? parseInt(Z.paddingTop, 10) : 0,
										re = Z ? parseInt(Z.paddingBottom, 10) : 0,
										le = Z ? parseInt(Z.paddingLeft, 10) : 0,
										oe = Z ? parseInt(Z.paddingRight, 10) : 0;
									this.g.setScrollDimensions({
										scrollWidth: te + le + oe,
										scrollHeight: Q + se + re,
									}),
										(this.aiBugHeightInLines = Math.min(
											Math.ceil(
												(Q + se + re) /
													this.c.getOption(h.EditorOption.lineHeight),
											) + 2,
											25,
										)),
										this.k();
								},
							);
							return;
						}
						const { source: V, message: G, relatedInformation: K, code: J } = q;
						let W = (V?.length || 0) + 2;
						J &&
							(typeof J == "string" ? (W += J.length) : (W += J.value.length));
						const X = (0, u.$zf)(G);
						(this.a = X.length), (this.b = 0);
						for (const _ of X) this.b = Math.max(_.length + W, this.b);
						t.$9fb(this.d),
							this.d.setAttribute("aria-label", this.p(q)),
							this.c.applyFontInfo(this.d);
						let Y = this.d;
						for (const _ of X)
							(Y = document.createElement("div")),
								(Y.innerText = _),
								_ === "" && (Y.style.height = this.d.style.lineHeight),
								this.d.appendChild(Y);
						if (V || J) {
							const _ = document.createElement("span");
							if ((_.classList.add("details"), Y.appendChild(_), V)) {
								const te = document.createElement("span");
								(te.innerText = V),
									te.classList.add("source"),
									_.appendChild(te);
							}
							if (J)
								if (typeof J == "string") {
									const te = document.createElement("span");
									(te.innerText = `(${J})`),
										te.classList.add("code"),
										_.appendChild(te);
								} else {
									(this.j = t.$("a.code-link")),
										this.j.setAttribute("href", `${J.target.toString()}`),
										(this.j.onclick = (Q) => {
											this.l.open(J.target, { allowCommands: !0 }),
												Q.preventDefault(),
												Q.stopPropagation();
										});
									const te = t.$fhb(this.j, t.$("span"));
									(te.innerText = J.value), _.appendChild(this.j);
								}
						}
						if ((t.$9fb(this.f), this.c.applyFontInfo(this.f), (0, w.$Pb)(K))) {
							const _ = this.f.appendChild(document.createElement("div"));
							(_.style.paddingTop = `${Math.floor(this.c.getOption(h.EditorOption.lineHeight) * 0.66)}px`),
								(this.a += 1);
							for (const te of K) {
								const Q = document.createElement("div"),
									Z = document.createElement("a");
								Z.classList.add("filename"),
									(Z.innerText = `${this.m.getUriBasenameLabel(te.resource)}(${te.startLineNumber}, ${te.startColumn}): `),
									(Z.title = this.m.getUriLabel(te.resource)),
									this.h.set(Z, te);
								const se = document.createElement("span");
								(se.innerText = te.message),
									Q.appendChild(Z),
									Q.appendChild(se),
									(this.a += 1),
									_.appendChild(Q);
							}
						}
						const ie = this.c.getOption(h.EditorOption.fontInfo),
							ne = Math.ceil(ie.typicalFullwidthCharacterWidth * this.b * 0.75),
							ee = ie.lineHeight * this.a;
						this.g.setScrollDimensions({ scrollWidth: ne, scrollHeight: ee });
					}
					layout(q, V) {
						(this.g.getDomNode().style.height = `${q}px`),
							(this.g.getDomNode().style.width = `${V}px`),
							this.g.setScrollDimensions({ width: V, height: q });
					}
					getHeightInLines() {
						return Math.min(17, this.a);
					}
					p(q) {
						let V = "";
						switch (q.severity) {
							case v.MarkerSeverity.Error:
								V = f.localize(1089, null);
								break;
							case v.MarkerSeverity.Warning:
								V = f.localize(1090, null);
								break;
							case v.MarkerSeverity.Info:
								V = f.localize(1091, null);
								break;
							case v.MarkerSeverity.Hint:
								V = f.localize(1092, null);
								break;
						}
						let G = f.localize(
							1093,
							null,
							V,
							q.startLineNumber + ":" + q.startColumn,
						);
						const K = this.c.getModel();
						return (
							K &&
								q.startLineNumber <= K.getLineCount() &&
								q.startLineNumber >= 1 &&
								(G = `${K.getLineContent(q.startLineNumber)}, ${G}`),
							G
						);
					}
				}
				let D = class extends o.$9Mb {
					static {
						k = this;
					}
					static {
						this.TitleMenu = new s.$XX("gotoErrorTitleMenu");
					}
					constructor(q, V, G, K, J, W, X, Y) {
						super(
							q,
							{ showArrow: !0, showFrame: !0, isAccessible: !0, frameWidth: 1 },
							J,
						),
							(this.Z = V),
							(this.ab = G),
							(this.bb = K),
							(this.cb = W),
							(this.db = X),
							(this.eb = Y),
							(this.i = new d.$Zc()),
							(this.X = new C.$re()),
							(this.onDidSelectRelatedInformation = this.X.event),
							(this.m = v.MarkerSeverity.Warning),
							(this.r = E.$UL.white),
							this.fb(V.getColorTheme()),
							this.i.add(V.onDidColorThemeChange(this.fb.bind(this))),
							this.create();
					}
					fb(q) {
						this.r = q.getColor(x);
						let V = R,
							G = O;
						this.m === v.MarkerSeverity.Warning
							? ((V = B), (G = U))
							: this.m === v.MarkerSeverity.Info && ((V = z), (G = F));
						const K = q.getColor(V),
							J = q.getColor(G);
						this.style({
							arrowColor: K,
							frameColor: K,
							headerBackgroundColor: J,
							primaryHeadingColor: q.getColor(o.$$Mb),
							secondaryHeadingColor: q.getColor(o.$_Mb),
						});
					}
					q() {
						this.a &&
							(this.a.style.backgroundColor = this.r ? this.r.toString() : ""),
							super.q();
					}
					dispose() {
						this.i.dispose(), super.dispose();
					}
					focus() {
						this.a.focus();
					}
					P(q) {
						super.P(q),
							this.o.add(
								this.K.actionRunner.onWillRun((K) => this.editor.focus()),
							);
						const V = [],
							G = this.bb.getMenuActions(k.TitleMenu, this.cb);
						(0, b.$Kyb)(G, V),
							this.K.push(V, { label: !1, icon: !0, index: 0 });
					}
					Q(q) {
						this.c = t.$fhb(q, t.$(""));
					}
					T(q) {
						(this.a = q),
							q.classList.add("marker-widget"),
							(this.a.tabIndex = 0),
							this.a.setAttribute("role", "tooltip"),
							(this.b = document.createElement("div")),
							q.appendChild(this.b),
							(this.d = new L(
								this.b,
								this.editor,
								(V) => this.X.fire(V),
								() => this.F(),
								this.ab,
								this.db,
								this.eb,
								this.M,
							)),
							this.o.add(this.d);
					}
					show() {
						throw new Error("call showAtMarker");
					}
					showAtMarker(q, V, G, K = !1) {
						this.b.classList.remove("stale"),
							this.d.update(q),
							(this.m = q.severity),
							this.fb(this.Z.getColorTheme());
						const J = c.$iL.lift(q),
							W = this.editor.getPosition(),
							X = W && J.containsPosition(W) ? W : J.getStartPosition();
						super.show(X, this.nb());
						const Y = this.editor.getModel();
						if (Y) {
							const ie =
								G > 1
									? f.localize(1094, null, V, G)
									: f.localize(1095, null, V, G);
							this.setTitle((0, m.$kh)(Y.uri), ie);
						}
						(this.c.className = `codicon ${I.SeverityIcon.className(v.MarkerSeverity.toSeverity(this.m))}`),
							K
								? this.editor.revealPositionInCenterIfOutsideViewport(
										X,
										n.ScrollType.Smooth,
									)
								: this.editor.revealPositionNearTop(X, n.ScrollType.Smooth),
							this.editor.focus();
					}
					updateMarker(q) {
						this.b.classList.remove("stale"), this.d.update(q);
					}
					showStale() {
						this.b.classList.add("stale"), this.F();
					}
					W(q, V) {
						super.W(q, V),
							(this.Y = q),
							this.d.layout(q, V),
							(this.b.style.height = `${q}px`);
					}
					D(q) {
						this.d.layout(this.Y, q);
					}
					F() {
						super.F(this.nb());
					}
					nb() {
						return this.d.aiBugHeightInLines
							? this.d.aiBugHeightInLines
							: 3 + this.d.getHeightInLines();
					}
				};
				(e.$6hc = D),
					(e.$6hc =
						D =
						k =
							Ne(
								[
									j(1, P.$iP),
									j(2, S.$7rb),
									j(3, s.$YX),
									j(4, y.$Li),
									j(5, l.$6j),
									j(6, $.$3N),
									j(7, g.$nM),
								],
								D,
							));
				const M = (0, T.$DP)(T.$gQ, T.$hQ),
					N = (0, T.$DP)(T.$jQ, T.$kQ),
					A = (0, T.$DP)(T.$mQ, T.$nQ),
					R = (0, T.$wP)(
						"editorMarkerNavigationError.background",
						{ dark: M, light: M, hcDark: T.$OP, hcLight: T.$OP },
						f.localize(1096, null),
					),
					O = (0, T.$wP)(
						"editorMarkerNavigationError.headerBackground",
						{
							dark: (0, T.$BP)(R, 0.1),
							light: (0, T.$BP)(R, 0.1),
							hcDark: null,
							hcLight: null,
						},
						f.localize(1097, null),
					),
					B = (0, T.$wP)(
						"editorMarkerNavigationWarning.background",
						{ dark: N, light: N, hcDark: T.$OP, hcLight: T.$OP },
						f.localize(1098, null),
					),
					U = (0, T.$wP)(
						"editorMarkerNavigationWarning.headerBackground",
						{
							dark: (0, T.$BP)(B, 0.1),
							light: (0, T.$BP)(B, 0.1),
							hcDark: "#0C141F",
							hcLight: (0, T.$BP)(B, 0.2),
						},
						f.localize(1099, null),
					),
					z = (0, T.$wP)(
						"editorMarkerNavigationInfo.background",
						{ dark: A, light: A, hcDark: T.$OP, hcLight: T.$OP },
						f.localize(1100, null),
					),
					F = (0, T.$wP)(
						"editorMarkerNavigationInfo.headerBackground",
						{
							dark: (0, T.$BP)(z, 0.1),
							light: (0, T.$BP)(z, 0.1),
							hcDark: null,
							hcLight: null,
						},
						f.localize(1101, null),
					),
					x = (0, T.$wP)(
						"editorMarkerNavigation.background",
						T.$8P,
						f.localize(1102, null),
					);
			},
		),
		