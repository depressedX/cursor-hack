import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/highlightedlabel/highlightedLabel.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/inputbox/inputBox.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/filters.js';
import '../../../../base/common/functional.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/themables.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import './debugCommands.js';
import './linkDetector.js';
import '../common/debug.js';
import '../common/debugModel.js';
import '../common/debugVisualizers.js';
import '../common/replModel.js';
define(
			de[629],
			he([
				1, 0, 7, 105, 410, 95, 292, 14, 132, 288, 27, 3, 26, 4, 31, 49, 72, 106,
				425, 709, 112, 300, 1039, 843,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actionbar*/,
				w /*highlightedLabel*/,
				E /*hoverDelegateFactory*/,
				C /*inputBox*/,
				d /*codicons*/,
				m /*filters*/,
				r /*functional*/,
				u /*keyCodes*/,
				a /*lifecycle*/,
				h /*themables*/,
				c /*nls*/,
				n /*commands*/,
				g /*contextView*/,
				p /*hover*/,
				o /*defaultStyles*/,
				f /*debugCommands*/,
				b /*linkDetector*/,
				s /*debug*/,
				l /*debugModel*/,
				y /*debugVisualizers*/,
				$ /*replModel*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gIc = e.$fIc = void 0),
					(e.$cIc = P),
					(e.$dIc = k),
					(e.$eIc = L),
					(t = mt(t));
				const v = 1024,
					S = /^(true|false)$/i,
					I = /^(['"]).*\1$/,
					T = t.$;
				function P(N) {
					const A = T(".");
					return A.classList.add("debug-view-content"), N.appendChild(A), A;
				}
				function k(N, A, R, O, B) {
					let U = typeof A == "string" ? A : A.value;
					(R.className = "value"),
						U === null ||
						((A instanceof l.$J3 ||
							A instanceof l.$K3 ||
							A instanceof $.$_Hc) &&
							!A.available)
							? (R.classList.add("unavailable"),
								U !== l.$J3.DEFAULT_VALUE && R.classList.add("error"))
							: (typeof A != "string" &&
									O.showChanged &&
									A.valueChanged &&
									U !== l.$J3.DEFAULT_VALUE &&
									((R.className = "value changed"), (A.valueChanged = !1)),
								O.colorize &&
									typeof A != "string" &&
									(A.type === "number" ||
									A.type === "boolean" ||
									A.type === "string"
										? R.classList.add(A.type)
										: isNaN(+U)
											? S.test(U)
												? R.classList.add("boolean")
												: I.test(U) && R.classList.add("string")
											: R.classList.add("number"))),
						O.maxValueLength &&
							U &&
							U.length > O.maxValueLength &&
							(U = U.substring(0, O.maxValueLength) + "..."),
						U || (U = "");
					const z = l.$H3.allValuesWithHistory;
					if (A instanceof l.$J3 && z.has(A.getId())) {
						const H = z.get(A.getId());
						H &&
							H.length > 0 &&
							((U += " (history: "),
							H.forEach((q, V) => {
								(U += `${q.value}`),
									q.source &&
										(U += ` [${q.source.uri.path}:${q.source.line}:${q.source.column}]`),
									V < H.length - 1 && (U += ", ");
							}),
							(U += ")"));
					}
					const F = A instanceof l.$H3 ? A.getSession() : void 0,
						x =
							O.hover === !1
								? { type: b.DebugLinkHoverBehavior.Rich, store: N }
								: { type: b.DebugLinkHoverBehavior.None };
					if (
						(A instanceof l.$H3 &&
						A.valueLocationReference !== void 0 &&
						F &&
						O.linkDetector
							? ((R.textContent = ""),
								R.appendChild(
									O.linkDetector.linkifyLocation(
										U,
										A.valueLocationReference,
										F,
										x,
									),
								))
							: O.linkDetector
								? ((R.textContent = ""),
									R.appendChild(
										O.linkDetector.linkify(U, !1, F ? F.root : void 0, !0, x),
									))
								: (R.textContent = U),
						O.hover !== !1)
					) {
						const { commands: H = [], commandService: q } = O.hover || {};
						N.add(
							B.setupManagedHover(
								(0, E.$cib)("mouse"),
								R,
								() => {
									const V = t.$("div"),
										G = t.$("div.hover-row"),
										K = t.$fhb(G, t.$("div.hover-contents")),
										J = t.$fhb(K, t.$("pre.debug-var-hover-pre"));
									return (J.textContent = U), V.appendChild(G), V;
								},
								{
									actions: H.map(({ id: V, args: G }) => {
										const K = n.$fk.getCommand(V)?.metadata?.description;
										return {
											label: typeof K == "string" ? K : K ? K.value : V,
											commandId: V,
											run: () => q.executeCommand(V, ...G),
										};
									}),
								},
							),
						);
					}
				}
				function L(N, A, R, O, B, U, z, F, x) {
					if (O.available) {
						B.type.textContent = "";
						let q = O.name;
						O.value &&
							typeof O.name == "string" &&
							(O.type && x
								? ((q += ": "), (B.type.textContent = O.type + " ="))
								: (q += " =")),
							B.label.set(q, z, O.type && !x ? O.type : O.name),
							B.name.classList.toggle(
								"virtual",
								O.presentationHint?.kind === "virtual",
							),
							B.name.classList.toggle(
								"internal",
								O.presentationHint?.visibility === "internal",
							);
					} else
						O.value && typeof O.name == "string" && O.name && B.label.set(":");
					B.expression.classList.toggle("lazy", !!O.presentationHint?.lazy);
					const H = [{ id: f.$zHc, args: [O, [O]] }];
					O.evaluateName && H.push({ id: f.$yHc, args: [{ variable: O }] }),
						k(
							N,
							O,
							B.value,
							{
								showChanged: U,
								maxValueLength: v,
								hover: { commands: H, commandService: A },
								colorize: !0,
								linkDetector: F,
							},
							R,
						);
				}
				let D = class {
					constructor(A, R) {
						(this.a = A), (this.b = R);
					}
					async getChildren(A) {
						const R = this.a.getViewModel(),
							O = await this.c(A);
						return Promise.all(
							O.map(async (B) => {
								const U = R.getVisualizedExpression(B);
								if (typeof U == "string") {
									const z = await this.b.getVisualizedNodeFor(U, B);
									if (z) return R.setVisualizedExpression(B, z), z;
								} else if (U) return U;
								return B;
							}),
						);
					}
				};
				(e.$fIc = D), (e.$fIc = D = Ne([j(0, s.$75), j(1, y.$D3)], D));
				let M = class {
					constructor(A, R, O) {
						(this.a = A), (this.b = R), (this.c = O);
					}
					renderTemplate(A) {
						const R = new a.$Zc(),
							O = t.$fhb(A, T(".expression")),
							B = t.$fhb(O, T("span.name")),
							U = t.$fhb(O, T("span.lazy-button"));
						U.classList.add(...h.ThemeIcon.asClassNameArray(d.$ak.eye)),
							R.add(
								this.c.setupManagedHover(
									(0, E.$cib)("mouse"),
									U,
									(0, c.localize)(5139, null),
								),
							);
						const z = t.$fhb(O, T("span.type")),
							F = t.$fhb(O, T("span.value")),
							x = R.add(new w.$Wob(B)),
							H = t.$fhb(O, T(".inputBoxContainer"));
						let q;
						this.h &&
							(t.$fhb(O, T(".span.actionbar-spacer")),
							(q = R.add(new i.$eib(O))));
						const V = {
							expression: O,
							name: B,
							type: z,
							value: F,
							label: x,
							inputBoxContainer: H,
							actionBar: q,
							elementDisposable: new a.$Zc(),
							templateDisposable: R,
							lazyButton: U,
							currentElement: void 0,
						};
						return (
							R.add(
								t.$0fb(U, t.$$gb.CLICK, () => {
									V.currentElement &&
										this.a
											.getViewModel()
											.evaluateLazyExpression(V.currentElement);
								}),
							),
							V
						);
					}
					d(A, R, O) {
						(O.currentElement = A),
							this.f(R.element, O, (0, m.$3k)(R.filterData)),
							O.actionBar && this.h(O.actionBar, A, O);
						const B = this.a.getViewModel().getSelectedExpression();
						if (A === B?.expression || (A instanceof l.$K3 && A.errorMessage)) {
							const U = this.g(A, !!B?.settingWatch);
							U &&
								O.elementDisposable.add(
									this.renderInputBox(O.name, O.value, O.inputBoxContainer, U),
								);
						}
					}
					renderInputBox(A, R, O, B) {
						(A.style.display = "none"),
							(R.style.display = "none"),
							(O.style.display = "initial"),
							t.$9fb(O);
						const U = new C.$Mob(O, this.b, { ...B, inputBoxStyles: o.$wyb });
						(U.value = B.initialValue), U.focus(), U.select();
						const z = (0, r.$hb)((x, H) => {
								(A.style.display = ""),
									(R.style.display = ""),
									(O.style.display = "none");
								const q = U.value;
								(0, a.$Vc)(F),
									H &&
										(this.a.getViewModel().setSelectedExpression(void 0, !1),
										B.onFinish(q, x));
							}),
							F = [
								U,
								t.$$fb(U.inputElement, t.$$gb.KEY_DOWN, (x) => {
									const H = x.equals(u.KeyCode.Escape),
										q = x.equals(u.KeyCode.Enter);
									(H || q) &&
										(x.preventDefault(), x.stopPropagation(), z(q, !0));
								}),
								t.$0fb(U.inputElement, t.$$gb.BLUR, () => {
									z(!0, !0);
								}),
								t.$0fb(U.inputElement, t.$$gb.CLICK, (x) => {
									x.preventDefault(), x.stopPropagation();
								}),
							];
						return (0, a.$Yc)(() => {
							z(!1, !1);
						});
					}
					disposeElement(A, R, O) {
						O.elementDisposable.clear();
					}
					disposeTemplate(A) {
						A.elementDisposable.dispose(), A.templateDisposable.dispose();
					}
				};
				(e.$gIc = M),
					(e.$gIc = M = Ne([j(0, s.$75), j(1, g.$Wxb), j(2, p.$Uyb)], M));
			},
		),
		