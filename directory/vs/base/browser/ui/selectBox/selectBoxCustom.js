import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../event.js';
import '../../keyboardEvent.js';
import '../../markdownRenderer.js';
import '../contextview/contextview.js';
import '../hover/hoverDelegate2.js';
import '../hover/hoverDelegateFactory.js';
import '../list/listWidget.js';
import '../../../common/arrays.js';
import '../../../common/event.js';
import '../../../common/keyCodes.js';
import '../../../common/lifecycle.js';
import '../../../common/platform.js';
import '../../../common/scrollable.js';
import '../../../../nls.js';
import '../../../../css!vs/base/browser/ui/selectBox/selectBoxCustom.js';
define(
			de[2684],
			he([
				1, 0, 7, 265, 114, 267, 276, 317, 95, 278, 24, 6, 27, 3, 12, 195, 4,
				2253,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*event*/,
 w /*keyboardEvent*/,
 E /*markdownRenderer*/,
 C /*contextview*/,
 d /*hoverDelegate2*/,
 m /*hoverDelegateFactory*/,
 r /*listWidget*/,
 u /*arrays*/,
 a /*event*/,
 h /*keyCodes*/,
 c /*lifecycle*/,
 n /*platform*/,
 g /*scrollable*/,
 p /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$2ib = void 0),
					(t = mt(t)),
					(u = mt(u));
				const o = t.$,
					f = "selectOption.entry.template";
				class b {
					get templateId() {
						return f;
					}
					renderTemplate(y) {
						const $ = Object.create(null);
						return (
							($.root = y),
							($.text = t.$fhb(y, o(".option-text"))),
							($.detail = t.$fhb(y, o(".option-detail"))),
							($.decoratorRight = t.$fhb(y, o(".option-decorator-right"))),
							$
						);
					}
					renderElement(y, $, v) {
						const S = v,
							I = y.text,
							T = y.detail,
							P = y.decoratorRight,
							k = y.isDisabled;
						(S.text.textContent = I),
							(S.detail.textContent = T || ""),
							(S.decoratorRight.innerText = P || ""),
							k
								? S.root.classList.add("option-disabled")
								: S.root.classList.remove("option-disabled");
					}
					disposeTemplate(y) {}
				}
				class s extends c.$1c {
					static {
						this.a = 32;
					}
					static {
						this.b = 2;
					}
					static {
						this.c = 3;
					}
					constructor(y, $, v, S, I) {
						super(),
							(this.m = []),
							(this.F = 0),
							(this.H = !1),
							(this.J = !1),
							(this.N = !1),
							(this.f = !1),
							(this.r = S),
							(this.g = I || Object.create(null)),
							typeof this.g.minBottomMargin != "number"
								? (this.g.minBottomMargin = s.a)
								: this.g.minBottomMargin < 0 && (this.g.minBottomMargin = 0),
							(this.h = document.createElement("select")),
							(this.h.className =
								"monaco-select-box monaco-select-box-dropdown-padding"),
							typeof this.g.ariaLabel == "string" &&
								this.h.setAttribute("aria-label", this.g.ariaLabel),
							typeof this.g.ariaDescription == "string" &&
								this.h.setAttribute("aria-description", this.g.ariaDescription),
							(this.q = new a.$re()),
							this.D(this.q),
							this.Q(),
							this.P(v),
							(this.n = $ || 0),
							y && this.setOptions(y, $),
							this.S();
					}
					O(y) {
						!this.M && y
							? (this.M = this.D(
									(0, d.$1ib)().setupManagedHover(
										(0, m.$cib)("mouse"),
										this.h,
										y,
									),
								))
							: this.M && this.M.update(y);
					}
					getHeight() {
						return 22;
					}
					getTemplateId() {
						return f;
					}
					P(y) {
						(this.t = y),
							(this.u = t.$(".monaco-select-box-dropdown-container")),
							this.u.classList.add("monaco-select-box-dropdown-padding"),
							(this.I = t.$fhb(this.u, o(".select-box-details-pane")));
						const $ = t.$fhb(
								this.u,
								o(".select-box-dropdown-container-width-control"),
							),
							v = t.$fhb($, o(".width-control-div"));
						(this.C = document.createElement("span")),
							(this.C.className = "option-text-width-control"),
							t.$fhb(v, this.C),
							(this.G = C.AnchorPosition.BELOW),
							(this.w = t.$Rgb(this.u)),
							this.u.setAttribute("draggable", "true"),
							this.D(
								t.$0fb(this.u, t.$$gb.DRAG_START, (S) => {
									t.$ahb.stop(S, !0);
								}),
							);
					}
					Q() {
						this.D(
							t.$$fb(this.h, "change", ($) => {
								(this.n = $.target.selectedIndex),
									this.q.fire({
										index: $.target.selectedIndex,
										selected: $.target.value,
									}),
									this.m[this.n] &&
										this.m[this.n].text &&
										this.O(this.m[this.n].text);
							}),
						),
							this.D(
								t.$0fb(this.h, t.$$gb.CLICK, ($) => {
									t.$ahb.stop($), this.f ? this.Z(!0) : this.Y();
								}),
							),
							this.D(
								t.$0fb(this.h, t.$$gb.MOUSE_DOWN, ($) => {
									t.$ahb.stop($);
								}),
							);
						let y;
						this.D(
							t.$0fb(this.h, "touchstart", ($) => {
								y = this.f;
							}),
						),
							this.D(
								t.$0fb(this.h, "touchend", ($) => {
									t.$ahb.stop($), y ? this.Z(!0) : this.Y();
								}),
							),
							this.D(
								t.$0fb(this.h, t.$$gb.KEY_DOWN, ($) => {
									const v = new w.$7fb($);
									let S = !1;
									n.$m
										? (v.keyCode === h.KeyCode.DownArrow ||
												v.keyCode === h.KeyCode.UpArrow ||
												v.keyCode === h.KeyCode.Space ||
												v.keyCode === h.KeyCode.Enter) &&
											(S = !0)
										: ((v.keyCode === h.KeyCode.DownArrow && v.altKey) ||
												(v.keyCode === h.KeyCode.UpArrow && v.altKey) ||
												v.keyCode === h.KeyCode.Space ||
												v.keyCode === h.KeyCode.Enter) &&
											(S = !0),
										S && (this.Y(), t.$ahb.stop($, !0));
								}),
							);
					}
					get onDidSelect() {
						return this.q.event;
					}
					setOptions(y, $) {
						u.$yb(this.m, y) ||
							((this.m = y),
							(this.h.options.length = 0),
							(this.H = !1),
							(this.L = void 0),
							this.m.forEach((v, S) => {
								this.h.add(this.X(v.text, S, v.isDisabled)),
									typeof v.description == "string" && (this.H = !0);
							})),
							$ !== void 0 && (this.select($), (this.F = this.n));
					}
					setEnabled(y) {
						this.h.disabled = !y;
					}
					R() {
						this.y?.splice(0, this.y.length, this.m);
					}
					select(y) {
						y >= 0 && y < this.m.length
							? (this.n = y)
							: y > this.m.length - 1
								? this.select(this.m.length - 1)
								: this.n < 0 && (this.n = 0),
							(this.h.selectedIndex = this.n),
							this.m[this.n] &&
								this.m[this.n].text &&
								this.O(this.m[this.n].text);
					}
					setAriaLabel(y) {
						(this.g.ariaLabel = y),
							this.h.setAttribute("aria-label", this.g.ariaLabel);
					}
					focus() {
						this.h && ((this.h.tabIndex = 0), this.h.focus());
					}
					blur() {
						this.h && ((this.h.tabIndex = -1), this.h.blur());
					}
					setFocusable(y) {
						this.h.tabIndex = y ? 0 : -1;
					}
					render(y) {
						(this.j = y),
							y.classList.add("select-container"),
							y.appendChild(this.h),
							this.U();
					}
					S() {
						const y = [];
						this.r.listFocusBackground &&
							y.push(
								`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { background-color: ${this.r.listFocusBackground} !important; }`,
							),
							this.r.listFocusForeground &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { color: ${this.r.listFocusForeground} !important; }`,
								),
							this.r.decoratorRightForeground &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.focused) .option-decorator-right { color: ${this.r.decoratorRightForeground}; }`,
								),
							this.r.selectBackground &&
							this.r.selectBorder &&
							this.r.selectBorder !== this.r.selectBackground
								? (y.push(
										`.monaco-select-box-dropdown-container { border: 1px solid ${this.r.selectBorder} } `,
									),
									y.push(
										`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.r.selectBorder} } `,
									),
									y.push(
										`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.r.selectBorder} } `,
									))
								: this.r.selectListBorder &&
									(y.push(
										`.monaco-select-box-dropdown-container > .select-box-details-pane.border-top { border-top: 1px solid ${this.r.selectListBorder} } `,
									),
									y.push(
										`.monaco-select-box-dropdown-container > .select-box-details-pane.border-bottom { border-bottom: 1px solid ${this.r.selectListBorder} } `,
									)),
							this.r.listHoverForeground &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { color: ${this.r.listHoverForeground} !important; }`,
								),
							this.r.listHoverBackground &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { background-color: ${this.r.listHoverBackground} !important; }`,
								),
							this.r.listFocusOutline &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.focused { outline: 1.6px dotted ${this.r.listFocusOutline} !important; outline-offset: -1.6px !important; }`,
								),
							this.r.listHoverOutline &&
								y.push(
									`.monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row:not(.option-disabled):not(.focused):hover { outline: 1.6px dashed ${this.r.listHoverOutline} !important; outline-offset: -1.6px !important; }`,
								),
							y.push(
								".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled.focused { background-color: transparent !important; color: inherit !important; outline: none !important; }",
							),
							y.push(
								".monaco-select-box-dropdown-container > .select-box-dropdown-list-container .monaco-list .monaco-list-row.option-disabled:hover { background-color: transparent !important; color: inherit !important; outline: none !important; }",
							),
							(this.w.textContent = y.join(`
`));
					}
					U() {
						const y = this.r.selectBackground ?? "",
							$ = this.r.selectForeground ?? "",
							v = this.r.selectBorder ?? "";
						(this.h.style.backgroundColor = y),
							(this.h.style.color = $),
							(this.h.style.borderColor = v);
					}
					W() {
						const y = this.r.selectBackground ?? "",
							$ = t.$xhb(this.r.selectListBackground, y);
						(this.z.style.backgroundColor = $),
							(this.I.style.backgroundColor = $);
						const v = this.r.focusBorder ?? "";
						(this.u.style.outlineColor = v),
							(this.u.style.outlineOffset = "-1px"),
							this.y.style(this.r);
					}
					X(y, $, v) {
						const S = document.createElement("option");
						return (S.value = y), (S.text = y), (S.disabled = !!v), S;
					}
					Y() {
						(this.I.innerText = ""),
							!(!this.t || this.f) &&
								(this.eb(this.u),
								this.R(),
								this.t.showContextView(
									{
										getAnchor: () => this.h,
										render: (y) => this.ab(y, !0),
										layout: () => {
											this.cb();
										},
										onHide: () => {
											this.u.classList.remove("visible"),
												this.h.classList.remove("synthetic-focus");
										},
										anchorPosition: this.G,
									},
									this.g.optionsAsChildren ? this.j : void 0,
								),
								(this.f = !0),
								this.Z(!1),
								this.t.showContextView(
									{
										getAnchor: () => this.h,
										render: (y) => this.ab(y),
										layout: () => this.cb(),
										onHide: () => {
											this.u.classList.remove("visible"),
												this.h.classList.remove("synthetic-focus");
										},
										anchorPosition: this.G,
									},
									this.g.optionsAsChildren ? this.j : void 0,
								),
								(this.F = this.n),
								(this.f = !0),
								this.h.setAttribute("aria-expanded", "true"));
					}
					Z(y) {
						!this.t ||
							!this.f ||
							((this.f = !1),
							this.h.setAttribute("aria-expanded", "false"),
							y && this.h.focus(),
							this.t.hideContextView());
					}
					ab(y, $) {
						return (
							y.appendChild(this.u),
							this.cb($),
							{
								dispose: () => {
									this.u.remove();
								},
							}
						);
					}
					bb() {
						let y = 0;
						return (
							this.m.forEach(($, v) => {
								this.jb(v),
									this.I.offsetHeight > y && (y = this.I.offsetHeight);
							}),
							y
						);
					}
					cb(y) {
						if (this.J) return !1;
						if (this.y) {
							this.u.classList.add("visible");
							const $ = t.getWindow(this.h),
								v = t.$tgb(this.h),
								S = t.getWindow(this.h).getComputedStyle(this.h),
								I =
									parseFloat(S.getPropertyValue("--dropdown-padding-top")) +
									parseFloat(S.getPropertyValue("--dropdown-padding-bottom")),
								T =
									$.innerHeight -
									v.top -
									v.height -
									(this.g.minBottomMargin || 0),
								P = v.top - s.b,
								k = this.h.offsetWidth,
								L = this.db(this.C),
								D = Math.max(L, Math.round(k)).toString() + "px";
							(this.u.style.width = D),
								(this.y.getHTMLElement().style.height = ""),
								this.y.layout();
							let M = this.y.contentHeight;
							this.H && this.L === void 0 && (this.L = this.bb());
							const N = this.H ? this.L : 0,
								A = M + I + N,
								R = Math.floor((T - I - N) / this.getHeight()),
								O = Math.floor((P - I - N) / this.getHeight());
							if (y)
								return v.top + v.height > $.innerHeight - 22 ||
									v.top < s.b ||
									(R < 1 && O < 1)
									? !1
									: (R < s.c && O > R && this.m.length > R
											? ((this.G = C.AnchorPosition.ABOVE),
												this.z.remove(),
												this.I.remove(),
												this.u.appendChild(this.I),
												this.u.appendChild(this.z),
												this.I.classList.remove("border-top"),
												this.I.classList.add("border-bottom"))
											: ((this.G = C.AnchorPosition.BELOW),
												this.z.remove(),
												this.I.remove(),
												this.u.appendChild(this.z),
												this.u.appendChild(this.I),
												this.I.classList.remove("border-bottom"),
												this.I.classList.add("border-top")),
										!0);
							if (
								v.top + v.height > $.innerHeight - 22 ||
								v.top < s.b ||
								(this.G === C.AnchorPosition.BELOW && R < 1) ||
								(this.G === C.AnchorPosition.ABOVE && O < 1)
							)
								return this.Z(!0), !1;
							if (this.G === C.AnchorPosition.BELOW) {
								if (this.f && R + O < 1) return this.Z(!0), !1;
								A > T && (M = R * this.getHeight());
							} else A > P && (M = O * this.getHeight());
							return (
								this.y.layout(M),
								this.y.domFocus(),
								this.y.length > 0 &&
									(this.y.setFocus([this.n || 0]),
									this.y.reveal(this.y.getFocus()[0] || 0)),
								this.H
									? ((this.y.getHTMLElement().style.height = M + I + "px"),
										(this.u.style.height = ""))
									: (this.u.style.height = M + I + "px"),
								this.jb(this.n),
								(this.u.style.width = D),
								this.z.setAttribute("tabindex", "0"),
								this.h.classList.add("synthetic-focus"),
								this.u.classList.add("synthetic-focus"),
								!0
							);
						} else return !1;
					}
					db(y) {
						let $ = 0;
						if (y) {
							let v = 0,
								S = 0;
							this.m.forEach((I, T) => {
								const P = I.detail ? I.detail.length : 0,
									k = I.decoratorRight ? I.decoratorRight.length : 0,
									L = I.text.length + P + k;
								L > S && ((v = T), (S = L));
							}),
								(y.textContent =
									this.m[v].text +
									(this.m[v].decoratorRight
										? this.m[v].decoratorRight + " "
										: "")),
								($ = t.$vgb(y));
						}
						return $;
					}
					eb(y) {
						if (this.y) return;
						(this.z = t.$fhb(y, o(".select-box-dropdown-list-container"))),
							(this.s = new b()),
							(this.y = this.D(
								new r.List("SelectBoxCustom", this.z, this, [this.s], {
									useShadows: !1,
									verticalScrollMode: g.ScrollbarVisibility.Visible,
									keyboardSupport: !1,
									mouseSupport: !1,
									accessibilityProvider: {
										getAriaLabel: (S) => {
											let I = S.text;
											return (
												S.detail && (I += `. ${S.detail}`),
												S.decoratorRight && (I += `. ${S.decoratorRight}`),
												S.description && (I += `. ${S.description}`),
												I
											);
										},
										getWidgetAriaLabel: () => (0, p.localize)(28, null),
										getRole: () => (n.$m ? "" : "option"),
										getWidgetRole: () => "listbox",
									},
								}),
							)),
							this.g.ariaLabel && (this.y.ariaLabel = this.g.ariaLabel);
						const $ = this.D(new i.$mib(this.z, "keydown")),
							v = a.Event.chain($.event, (S) =>
								S.filter(() => this.y.length > 0).map((I) => new w.$7fb(I)),
							);
						this.D(
							a.Event.chain(v, (S) =>
								S.filter((I) => I.keyCode === h.KeyCode.Enter),
							)(this.lb, this),
						),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.Tab),
								)(this.lb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.Escape),
								)(this.kb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.UpArrow),
								)(this.nb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.DownArrow),
								)(this.mb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.PageDown),
								)(this.pb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.PageUp),
								)(this.ob, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.Home),
								)(this.qb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter((I) => I.keyCode === h.KeyCode.End),
								)(this.rb, this),
							),
							this.D(
								a.Event.chain(v, (S) =>
									S.filter(
										(I) =>
											(I.keyCode >= h.KeyCode.Digit0 &&
												I.keyCode <= h.KeyCode.KeyZ) ||
											(I.keyCode >= h.KeyCode.Semicolon &&
												I.keyCode <= h.KeyCode.NumpadDivide),
									),
								)(this.sb, this),
							),
							this.D(
								t.$0fb(this.y.getHTMLElement(), t.$$gb.POINTER_UP, (S) =>
									this.fb(S),
								),
							),
							this.D(
								this.y.onMouseOver(
									(S) => typeof S.index < "u" && this.y.setFocus([S.index]),
								),
							),
							this.D(this.y.onDidChangeFocus((S) => this.ib(S))),
							this.D(
								t.$0fb(this.u, t.$$gb.FOCUS_OUT, (S) => {
									!this.f || t.$Bgb(S.relatedTarget, this.u) || this.gb();
								}),
							),
							this.y
								.getHTMLElement()
								.setAttribute("aria-label", this.g.ariaLabel || ""),
							this.y.getHTMLElement().setAttribute("aria-expanded", "true"),
							this.W();
					}
					fb(y) {
						if (!this.y.length) return;
						t.$ahb.stop(y);
						const $ = y.target;
						if (!$ || $.classList.contains("slider")) return;
						const v = $.closest(".monaco-list-row");
						if (!v) return;
						const S = Number(v.getAttribute("data-index")),
							I = v.classList.contains("option-disabled");
						S >= 0 &&
							S < this.m.length &&
							!I &&
							((this.n = S),
							this.select(this.n),
							this.y.setFocus([this.n]),
							this.y.reveal(this.y.getFocus()[0]),
							this.n !== this.F &&
								((this.F = this.n),
								this.q.fire({
									index: this.h.selectedIndex,
									selected: this.m[this.n].text,
								}),
								this.m[this.n] &&
									this.m[this.n].text &&
									this.O(this.m[this.n].text)),
							this.Z(!0));
					}
					gb() {
						this.N || (this.n !== this.F && this.select(this.F), this.Z(!1));
					}
					hb(y, $) {
						const v = (I) => {
								for (let T = 0; T < I.childNodes.length; T++) {
									const P = I.childNodes.item(T);
									(P.tagName && P.tagName.toLowerCase()) === "img"
										? P.remove()
										: v(P);
								}
							},
							S = (0, E.$Uib)(
								{ value: y, supportThemeIcons: !0 },
								{ actionHandler: $ },
							);
						return (
							S.element.classList.add("select-box-description-markdown"),
							v(S.element),
							S.element
						);
					}
					ib(y) {
						!this.f || !this.H || this.jb(y.indexes[0]);
					}
					jb(y) {
						this.I.innerText = "";
						const $ = this.m[y],
							v = $?.description ?? "",
							S = $?.descriptionIsMarkdown ?? !1;
						if (v) {
							if (S) {
								const I = $.descriptionMarkdownActionHandler;
								this.I.appendChild(this.hb(v, I));
							} else this.I.innerText = v;
							this.I.style.display = "block";
						} else this.I.style.display = "none";
						(this.J = !0), this.t.layout(), (this.J = !1);
					}
					kb(y) {
						t.$ahb.stop(y), this.select(this.F), this.Z(!0);
					}
					lb(y) {
						t.$ahb.stop(y),
							this.n !== this.F &&
								((this.F = this.n),
								this.q.fire({
									index: this.h.selectedIndex,
									selected: this.m[this.n].text,
								}),
								this.m[this.n] &&
									this.m[this.n].text &&
									this.O(this.m[this.n].text)),
							this.Z(!0);
					}
					mb(y) {
						if (this.n < this.m.length - 1) {
							t.$ahb.stop(y, !0);
							const $ = this.m[this.n + 1].isDisabled;
							if ($ && this.m.length > this.n + 2) this.n += 2;
							else {
								if ($) return;
								this.n++;
							}
							this.select(this.n),
								this.y.setFocus([this.n]),
								this.y.reveal(this.y.getFocus()[0]);
						}
					}
					nb(y) {
						this.n > 0 &&
							(t.$ahb.stop(y, !0),
							this.m[this.n - 1].isDisabled && this.n > 1
								? (this.n -= 2)
								: this.n--,
							this.select(this.n),
							this.y.setFocus([this.n]),
							this.y.reveal(this.y.getFocus()[0]));
					}
					ob(y) {
						t.$ahb.stop(y),
							this.y.focusPreviousPage(),
							setTimeout(() => {
								(this.n = this.y.getFocus()[0]),
									this.m[this.n].isDisabled &&
										this.n < this.m.length - 1 &&
										(this.n++, this.y.setFocus([this.n])),
									this.y.reveal(this.n),
									this.select(this.n);
							}, 1);
					}
					pb(y) {
						t.$ahb.stop(y),
							this.y.focusNextPage(),
							setTimeout(() => {
								(this.n = this.y.getFocus()[0]),
									this.m[this.n].isDisabled &&
										this.n > 0 &&
										(this.n--, this.y.setFocus([this.n])),
									this.y.reveal(this.n),
									this.select(this.n);
							}, 1);
					}
					qb(y) {
						t.$ahb.stop(y),
							!(this.m.length < 2) &&
								((this.n = 0),
								this.m[this.n].isDisabled && this.n > 1 && this.n++,
								this.y.setFocus([this.n]),
								this.y.reveal(this.n),
								this.select(this.n));
					}
					rb(y) {
						t.$ahb.stop(y),
							!(this.m.length < 2) &&
								((this.n = this.m.length - 1),
								this.m[this.n].isDisabled && this.n > 1 && this.n--,
								this.y.setFocus([this.n]),
								this.y.reveal(this.n),
								this.select(this.n));
					}
					sb(y) {
						const $ = h.KeyCodeUtils.toString(y.keyCode);
						let v = -1;
						for (let S = 0; S < this.m.length - 1; S++)
							if (
								((v = (S + this.n + 1) % this.m.length),
								this.m[v].text.charAt(0).toUpperCase() === $ &&
									!this.m[v].isDisabled)
							) {
								this.select(v),
									this.y.setFocus([v]),
									this.y.reveal(this.y.getFocus()[0]),
									t.$ahb.stop(y);
								break;
							}
					}
					dispose() {
						this.Z(!1), super.dispose();
					}
				}
				e.$2ib = s;
			},
		),
		