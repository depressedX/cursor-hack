import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import '../../../base/browser/ui/list/listWidget.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/codicons.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/platform.js';
import '../../../base/common/themables.js';
import '../../../nls.js';
import '../../contextview/browser/contextView.js';
import '../../keybinding/common/keybinding.js';
import '../../theme/browser/defaultStyles.js';
import '../../theme/common/colorRegistry.js';
import '../../../css!vs/platform/actionWidget/browser/actionWidget.js';
define(
			de[1206],
			he([1, 0, 7, 460, 278, 33, 14, 3, 12, 26, 4, 49, 39, 106, 51, 1513]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$uBb = e.ActionListItemKind = e.$tBb = e.$sBb = void 0),
					(t = mt(t)),
					(e.$sBb = "acceptSelectedCodeAction"),
					(e.$tBb = "previewSelectedCodeAction");
				var g;
				(function ($) {
					($.Action = "action"), ($.Header = "header");
				})(g || (e.ActionListItemKind = g = {}));
				class p {
					get templateId() {
						return g.Header;
					}
					renderTemplate(v) {
						v.classList.add("group-header");
						const S = document.createElement("span");
						return v.append(S), { container: v, text: S };
					}
					renderElement(v, S, I) {
						I.text.textContent = v.group?.title ?? "";
					}
					disposeTemplate(v) {}
				}
				let o = class {
					get templateId() {
						return g.Action;
					}
					constructor(v, S) {
						(this.a = v), (this.b = S);
					}
					renderTemplate(v) {
						v.classList.add(this.templateId);
						const S = document.createElement("div");
						(S.className = "icon"), v.append(S);
						const I = document.createElement("span");
						(I.className = "title"), v.append(I);
						const T = new i.$7ob(v, m.OS);
						return { container: v, icon: S, text: I, keybinding: T };
					}
					renderElement(v, S, I) {
						if (
							(v.group?.icon
								? ((I.icon.className = r.ThemeIcon.asClassName(v.group.icon)),
									v.group.icon.color &&
										(I.icon.style.color = (0, n.$rP)(v.group.icon.color.id)))
								: ((I.icon.className = r.ThemeIcon.asClassName(
										C.$ak.lightBulb,
									)),
									(I.icon.style.color =
										"var(--vscode-editorLightBulb-foreground)")),
							!v.item || !v.label)
						)
							return;
						(I.text.textContent = y(v.label)),
							I.keybinding.set(v.keybinding),
							t.$khb(!!v.keybinding, I.keybinding.element);
						const T = this.b.lookupKeybinding(e.$sBb)?.getLabel(),
							P = this.b.lookupKeybinding(e.$tBb)?.getLabel();
						I.container.classList.toggle("option-disabled", v.disabled),
							v.disabled
								? (I.container.title = v.label)
								: T && P
									? this.a && v.canPreview
										? (I.container.title = (0, u.localize)(1663, null, T, P))
										: (I.container.title = (0, u.localize)(1664, null, T))
									: (I.container.title = "");
					}
					disposeTemplate(v) {
						v.keybinding.dispose();
					}
				};
				o = Ne([j(1, h.$uZ)], o);
				class f extends UIEvent {
					constructor() {
						super("acceptSelectedAction");
					}
				}
				class b extends UIEvent {
					constructor() {
						super("previewSelectedAction");
					}
				}
				function s($) {
					if ($.kind === "action") return $.label;
				}
				let l = class extends d.$1c {
					constructor(v, S, I, T, P, k) {
						super(),
							(this.h = T),
							(this.j = P),
							(this.m = k),
							(this.b = 24),
							(this.c = 26),
							(this.g = this.D(new E.$Ce())),
							(this.domNode = document.createElement("div")),
							this.domNode.classList.add("actionList");
						const L = {
							getHeight: (D) => (D.kind === g.Header ? this.c : this.b),
							getTemplateId: (D) => D.kind,
						};
						(this.a = this.D(
							new w.List(v, this.domNode, L, [new o(S, this.m), new p()], {
								keyboardSupport: !1,
								typeNavigationEnabled: !0,
								keyboardNavigationLabelProvider: {
									getKeyboardNavigationLabel: s,
								},
								accessibilityProvider: {
									getAriaLabel: (D) => {
										if (D.kind === g.Action) {
											let M = D.label ? y(D?.label) : "";
											return (
												D.disabled &&
													(M = (0, u.localize)(1665, null, M, D.disabled)),
												M
											);
										}
										return null;
									},
									getWidgetAriaLabel: () => (0, u.localize)(1666, null),
									getRole: (D) =>
										D.kind === g.Action ? "option" : "separator",
									getWidgetRole: () => "listbox",
								},
							}),
						)),
							this.a.style(c.$Dyb),
							this.D(this.a.onMouseClick((D) => this.t(D))),
							this.D(this.a.onMouseOver((D) => this.s(D))),
							this.D(this.a.onDidChangeFocus(() => this.r())),
							this.D(this.a.onDidChangeSelection((D) => this.q(D))),
							(this.f = I),
							this.a.splice(0, this.a.length, this.f),
							this.a.length && this.focusNext();
					}
					n(v) {
						return !v.disabled && v.kind === g.Action;
					}
					hide(v) {
						this.h.onHide(v), this.g.cancel(), this.j.hideContextView();
					}
					layout(v) {
						const S = this.f.filter((D) => D.kind === "header").length,
							T = this.f.length * this.b + S * this.c - S * this.b;
						this.a.layout(T);
						let P = v;
						if (this.f.length >= 50) P = 380;
						else {
							const D = this.f.map((M, N) => {
								const A = this.domNode.ownerDocument.getElementById(
									this.a.getElementID(N),
								);
								if (A) {
									A.style.width = "auto";
									const R = A.getBoundingClientRect().width;
									return (A.style.width = ""), R;
								}
								return 0;
							});
							P = Math.max(...D, v);
						}
						const L = Math.min(
							T,
							this.domNode.ownerDocument.body.clientHeight * 0.7,
						);
						return (
							this.a.layout(L, P),
							(this.domNode.style.height = `${L}px`),
							this.a.domFocus(),
							P
						);
					}
					focusPrevious() {
						this.a.focusPrevious(1, !0, void 0, this.n);
					}
					focusNext() {
						this.a.focusNext(1, !0, void 0, this.n);
					}
					acceptSelected(v) {
						const S = this.a.getFocus();
						if (S.length === 0) return;
						const I = S[0],
							T = this.a.element(I);
						if (!this.n(T)) return;
						const P = v ? new b() : new f();
						this.a.setSelection([I], P);
					}
					q(v) {
						if (!v.elements.length) return;
						const S = v.elements[0];
						S.item && this.n(S)
							? this.h.onSelect(S.item, v.browserEvent instanceof b)
							: this.a.setSelection([]);
					}
					r() {
						const v = this.a.getFocus();
						if (v.length === 0) return;
						const S = v[0],
							I = this.a.element(S);
						this.h.onFocus?.(I.item);
					}
					async s(v) {
						const S = v.element;
						if (S && S.item && this.n(S)) {
							if (this.h.onHover && !S.disabled && S.kind === g.Action) {
								const I = await this.h.onHover(S.item, this.g.token);
								S.canPreview = I ? I.canPreview : void 0;
							}
							v.index && this.a.splice(v.index, 1, [S]);
						}
						this.a.setFocus(typeof v.index == "number" ? [v.index] : []);
					}
					t(v) {
						v.element && this.n(v.element) && this.a.setFocus([]);
					}
				};
				(e.$uBb = l), (e.$uBb = l = Ne([j(4, a.$Wxb), j(5, h.$uZ)], l));
				function y($) {
					return $.replace(/\r\n|\r|\n/g, " ");
				}
			},
		),
		