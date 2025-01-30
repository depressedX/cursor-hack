import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../event.js';
import '../../formattedTextRenderer.js';
import '../actionbar/actionbar.js';
import '../aria/aria.js';
import '../contextview/contextview.js';
import '../hover/hoverDelegate2.js';
import '../hover/hoverDelegateFactory.js';
import '../scrollbar/scrollableElement.js';
import '../widget.js';
import '../../../common/event.js';
import '../../../common/history.js';
import '../../../common/objects.js';
import '../../../common/scrollable.js';
import '../../../../nls.js';
import '../../../../css!vs/base/browser/ui/inputbox/inputBox.js';
define(
			de[292],
			he([
				1, 0, 7, 265, 595, 105, 127, 276, 317, 95, 203, 235, 6, 647, 82, 195, 4,
				2242,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*event*/,
 w /*formattedTextRenderer*/,
 E /*actionbar*/,
 C /*aria*/,
 d /*contextview*/,
 m /*hoverDelegate2*/,
 r /*hoverDelegateFactory*/,
 u /*scrollableElement*/,
 a /*widget*/,
 h /*event*/,
 c /*history*/,
 n /*objects*/,
 g /*scrollable*/,
 p /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Nob = e.$Mob = e.$Lob = e.MessageType = void 0),
					(t = mt(t)),
					(C = mt(C)),
					(p = mt(p));
				const o = t.$;
				var f;
				(function (l) {
					(l[(l.INFO = 1)] = "INFO"),
						(l[(l.WARNING = 2)] = "WARNING"),
						(l[(l.ERROR = 3)] = "ERROR");
				})(f || (e.MessageType = f = {})),
					(e.$Lob = {
						inputBackground: "#3C3C3C",
						inputForeground: "#CCCCCC",
						inputValidationInfoBorder: "#55AAFF",
						inputValidationInfoBackground: "#063B49",
						inputValidationWarningBorder: "#B89500",
						inputValidationWarningBackground: "#352A05",
						inputValidationErrorBorder: "#BE1100",
						inputValidationErrorBackground: "#5A1D1D",
						inputBorder: void 0,
						inputValidationErrorForeground: void 0,
						inputValidationInfoForeground: void 0,
						inputValidationWarningForeground: void 0,
					});
				class b extends a.$Uhb {
					constructor(y, $, v) {
						super(),
							(this.w = "idle"),
							(this.M = Number.POSITIVE_INFINITY),
							(this.P = this.D(new h.$re())),
							(this.onDidChange = this.P.event),
							(this.Q = this.D(new h.$re())),
							(this.onDidHeightChange = this.Q.event),
							(this.a = $),
							(this.g = v),
							(this.h = null),
							(this.n = this.g.placeholder || ""),
							(this.r = this.g.tooltip ?? (this.n || "")),
							(this.s = this.g.ariaLabel || ""),
							this.g.validationOptions &&
								(this.t = this.g.validationOptions.validation),
							(this.element = t.$fhb(y, o(".monaco-inputbox.idle")));
						const S = this.g.flexibleHeight ? "textarea" : "input",
							I = t.$fhb(this.element, o(".ibwrapper"));
						if (
							((this.b = t.$fhb(I, o(S + ".input.empty"))),
							this.b.setAttribute("autocorrect", "off"),
							this.b.setAttribute("autocapitalize", "off"),
							this.b.setAttribute("spellcheck", "false"),
							this.G(this.b, () =>
								this.element.classList.add("synthetic-focus"),
							),
							this.F(this.b, () =>
								this.element.classList.remove("synthetic-focus"),
							),
							this.g.flexibleHeight)
						) {
							(this.M =
								typeof this.g.flexibleMaxHeight == "number"
									? this.g.flexibleMaxHeight
									: Number.POSITIVE_INFINITY),
								(this.y = t.$fhb(I, o("div.mirror"))),
								(this.y.innerText = "\xA0"),
								(this.N = new u.$5hb(this.element, {
									vertical: g.ScrollbarVisibility.Auto,
								})),
								this.g.flexibleWidth &&
									(this.b.setAttribute("wrap", "off"),
									(this.y.style.whiteSpace = "pre"),
									(this.y.style.wordWrap = "initial")),
								t.$fhb(y, this.N.getDomNode()),
								this.D(this.N),
								this.D(
									this.N.onScroll((k) => (this.b.scrollTop = k.scrollTop)),
								);
							const T = this.D(new i.$mib(y.ownerDocument, "selectionchange")),
								P = h.Event.filter(
									T.event,
									() => y.ownerDocument.getSelection()?.anchorNode === I,
								);
							this.D(P(this.U, this)),
								this.D(this.onDidHeightChange(this.U, this));
						} else
							(this.b.type = this.g.type || "text"),
								this.b.setAttribute("wrap", "off");
						this.s && this.b.setAttribute("aria-label", this.s),
							this.n &&
								!this.g.showPlaceholderOnFocus &&
								this.setPlaceHolder(this.n),
							this.r && this.setTooltip(this.r),
							this.C(this.b, () => this.Z()),
							this.F(this.b, () => this.R()),
							this.G(this.b, () => this.S()),
							this.D(this.I(this.b)),
							setTimeout(() => this.ab(), 0),
							this.g.actions &&
								((this.c = this.D(new E.$eib(this.element))),
								this.c.push(this.g.actions, { icon: !0, label: !1 })),
							this.bb();
					}
					R() {
						this.Y(),
							this.g.showPlaceholderOnFocus &&
								this.b.setAttribute("placeholder", "");
					}
					S() {
						this.X(),
							this.g.showPlaceholderOnFocus &&
								this.b.setAttribute("placeholder", this.n || "");
					}
					setPlaceHolder(y) {
						(this.n = y), this.b.setAttribute("placeholder", y);
					}
					setTooltip(y) {
						(this.r = y),
							this.O
								? this.O.update(y)
								: (this.O = this.D(
										(0, m.$1ib)().setupManagedHover(
											(0, r.$cib)("mouse"),
											this.b,
											y,
										),
									));
					}
					setAriaLabel(y) {
						(this.s = y),
							y
								? this.b.setAttribute("aria-label", this.s)
								: this.b.removeAttribute("aria-label");
					}
					getAriaLabel() {
						return this.s;
					}
					get mirrorElement() {
						return this.y;
					}
					get inputElement() {
						return this.b;
					}
					get value() {
						return this.b.value;
					}
					set value(y) {
						this.b.value !== y && ((this.b.value = y), this.Z());
					}
					get step() {
						return this.b.step;
					}
					set step(y) {
						this.b.step = y;
					}
					get height() {
						return typeof this.J == "number" ? this.J : t.$zgb(this.element);
					}
					focus() {
						this.b.focus();
					}
					blur() {
						this.b.blur();
					}
					hasFocus() {
						return t.$Kgb(this.b);
					}
					select(y = null) {
						this.b.select(),
							y &&
								(this.b.setSelectionRange(y.start, y.end),
								y.end === this.b.value.length &&
									(this.b.scrollLeft = this.b.scrollWidth));
					}
					isSelectionAtEnd() {
						return (
							this.b.selectionEnd === this.b.value.length &&
							this.b.selectionStart === this.b.selectionEnd
						);
					}
					getSelection() {
						const y = this.b.selectionStart;
						if (y === null) return null;
						const $ = this.b.selectionEnd ?? y;
						return { start: y, end: $ };
					}
					enable() {
						this.b.removeAttribute("disabled");
					}
					disable() {
						this.blur(), (this.b.disabled = !0), this.Y();
					}
					setEnabled(y) {
						y ? this.enable() : this.disable();
					}
					get width() {
						return t.$vgb(this.b);
					}
					set width(y) {
						if (this.g.flexibleHeight && this.g.flexibleWidth) {
							let $ = 0;
							if (this.y) {
								const v = parseFloat(this.y.style.paddingLeft || "") || 0,
									S = parseFloat(this.y.style.paddingRight || "") || 0;
								$ = v + S;
							}
							this.b.style.width = y - $ + "px";
						} else this.b.style.width = y + "px";
						this.y && (this.y.style.width = y + "px");
					}
					set paddingRight(y) {
						(this.b.style.width = `calc(100% - ${y}px)`),
							this.y && (this.y.style.paddingRight = y + "px");
					}
					U() {
						if (
							typeof this.L != "number" ||
							typeof this.J != "number" ||
							!this.N
						)
							return;
						const y = this.L,
							$ = this.J,
							v = this.b.scrollTop;
						this.N.setScrollDimensions({ scrollHeight: y, height: $ }),
							this.N.setScrollPosition({ scrollTop: v });
					}
					showMessage(y, $) {
						if (this.w === "open" && (0, n.$zo)(this.h, y)) return;
						(this.h = y),
							this.element.classList.remove("idle"),
							this.element.classList.remove("info"),
							this.element.classList.remove("warning"),
							this.element.classList.remove("error"),
							this.element.classList.add(this.W(y.type));
						const v = this.stylesForType(this.h.type);
						(this.element.style.border = `1px solid ${t.$xhb(v.border, "transparent")}`),
							this.h.content && (this.hasFocus() || $) && this.X();
					}
					hideMessage() {
						(this.h = null),
							this.element.classList.remove("info"),
							this.element.classList.remove("warning"),
							this.element.classList.remove("error"),
							this.element.classList.add("idle"),
							this.Y(),
							this.bb();
					}
					isInputValid() {
						return !!this.t && !this.t(this.value);
					}
					validate() {
						let y = null;
						return (
							this.t &&
								((y = this.t(this.value)),
								y
									? (this.inputElement.setAttribute("aria-invalid", "true"),
										this.showMessage(y))
									: this.inputElement.hasAttribute("aria-invalid") &&
										(this.inputElement.removeAttribute("aria-invalid"),
										this.hideMessage())),
							y?.type
						);
					}
					stylesForType(y) {
						const $ = this.g.inputBoxStyles;
						switch (y) {
							case f.INFO:
								return {
									border: $.inputValidationInfoBorder,
									background: $.inputValidationInfoBackground,
									foreground: $.inputValidationInfoForeground,
								};
							case f.WARNING:
								return {
									border: $.inputValidationWarningBorder,
									background: $.inputValidationWarningBackground,
									foreground: $.inputValidationWarningForeground,
								};
							default:
								return {
									border: $.inputValidationErrorBorder,
									background: $.inputValidationErrorBackground,
									foreground: $.inputValidationErrorForeground,
								};
						}
					}
					W(y) {
						switch (y) {
							case f.INFO:
								return "info";
							case f.WARNING:
								return "warning";
							default:
								return "error";
						}
					}
					X() {
						if (!this.a || !this.h) return;
						let y;
						const $ = () => (y.style.width = t.$vgb(this.element) + "px");
						this.a.showContextView({
							getAnchor: () => this.element,
							anchorAlignment: d.AnchorAlignment.RIGHT,
							render: (S) => {
								if (!this.h) return null;
								(y = t.$fhb(S, o(".monaco-inputbox-container"))), $();
								const I = { inline: !0, className: "monaco-inputbox-message" },
									T = this.h.formatContent
										? (0, w.$kib)(this.h.content, I)
										: (0, w.$jib)(this.h.content, I);
								T.classList.add(this.W(this.h.type));
								const P = this.stylesForType(this.h.type);
								return (
									(T.style.backgroundColor = P.background ?? ""),
									(T.style.color = P.foreground ?? ""),
									(T.style.border = P.border ? `1px solid ${P.border}` : ""),
									t.$fhb(y, T),
									null
								);
							},
							onHide: () => {
								this.w = "closed";
							},
							layout: $,
						});
						let v;
						this.h.type === f.ERROR
							? (v = p.localize(19, null, this.h.content))
							: this.h.type === f.WARNING
								? (v = p.localize(20, null, this.h.content))
								: (v = p.localize(21, null, this.h.content)),
							C.$oib(v),
							(this.w = "open");
					}
					Y() {
						this.a &&
							(this.w === "open" && this.a.hideContextView(),
							(this.w = "idle"));
					}
					Z() {
						this.P.fire(this.value),
							this.validate(),
							this.ab(),
							this.b.classList.toggle("empty", !this.value),
							this.w === "open" && this.a && this.a.layout();
					}
					ab() {
						if (!this.y) return;
						const y = this.value,
							v = y.charCodeAt(y.length - 1) === 10 ? " " : "";
						(y + v).replace(/\u000c/g, "")
							? (this.y.textContent = y + v)
							: (this.y.innerText = "\xA0"),
							this.layout();
					}
					bb() {
						const y = this.g.inputBoxStyles,
							$ = y.inputBackground ?? "",
							v = y.inputForeground ?? "",
							S = y.inputBorder ?? "";
						(this.element.style.backgroundColor = $),
							(this.element.style.color = v),
							(this.b.style.backgroundColor = "inherit"),
							(this.b.style.color = v),
							(this.element.style.border = `1px solid ${t.$xhb(S, "transparent")}`);
					}
					layout() {
						if (!this.y) return;
						const y = this.L;
						(this.L = t.$zgb(this.y)),
							y !== this.L &&
								((this.J = Math.min(this.L, this.M)),
								(this.b.style.height = this.J + "px"),
								this.Q.fire(this.L));
					}
					insertAtCursor(y) {
						const $ = this.inputElement,
							v = $.selectionStart,
							S = $.selectionEnd,
							I = $.value;
						v !== null &&
							S !== null &&
							((this.value = I.substr(0, v) + y + I.substr(S)),
							$.setSelectionRange(v + 1, v + 1),
							this.layout());
					}
					dispose() {
						this.Y(), (this.h = null), this.c?.dispose(), super.dispose();
					}
				}
				e.$Mob = b;
				class s extends b {
					constructor(y, $, v) {
						const S = p.localize(22, null, "\u21C5"),
							I = p.localize(23, null, "\u21C5");
						super(y, $, v),
							(this.eb = this.D(new h.$re())),
							(this.onDidFocus = this.eb.event),
							(this.fb = this.D(new h.$re())),
							(this.onDidBlur = this.fb.event),
							(this.cb = new c.$Job(v.history, 100));
						const T = () => {
							if (
								v.showHistoryHint &&
								v.showHistoryHint() &&
								!this.n.endsWith(S) &&
								!this.n.endsWith(I) &&
								this.cb.getHistory().length
							) {
								const P = this.n.endsWith(")") ? S : I,
									k = this.n + P;
								v.showPlaceholderOnFocus && !t.$Kgb(this.b)
									? (this.n = k)
									: this.setPlaceHolder(k);
							}
						};
						(this.db = new MutationObserver((P, k) => {
							P.forEach((L) => {
								L.target.textContent || T();
							});
						})),
							this.db.observe(this.b, { attributeFilter: ["class"] }),
							this.G(this.b, () => T()),
							this.F(this.b, () => {
								const P = (k) => {
									if (this.n.endsWith(k)) {
										const L = this.n.slice(0, this.n.length - k.length);
										return (
											v.showPlaceholderOnFocus
												? (this.n = L)
												: this.setPlaceHolder(L),
											!0
										);
									} else return !1;
								};
								P(I) || P(S);
							});
					}
					dispose() {
						super.dispose(),
							this.db && (this.db.disconnect(), (this.db = void 0));
					}
					addToHistory(y) {
						this.value &&
							(y || this.value !== this.ib()) &&
							this.cb.add(this.value);
					}
					prependHistory(y) {
						const $ = this.getHistory();
						this.clearHistory(),
							y.forEach((v) => {
								this.cb.add(v);
							}),
							$.forEach((v) => {
								this.cb.add(v);
							});
					}
					getHistory() {
						return this.cb.getHistory();
					}
					isAtFirstInHistory() {
						return this.cb.isFirst();
					}
					isAtLastInHistory() {
						return this.cb.isLast();
					}
					isNowhereInHistory() {
						return this.cb.isNowhere();
					}
					showNextValue() {
						this.cb.has(this.value) || this.addToHistory();
						let y = this.kb();
						y && (y = y === this.value ? this.kb() : y),
							(this.value = y ?? ""),
							C.$pib(this.value ? this.value : p.localize(24, null));
					}
					showPreviousValue() {
						this.cb.has(this.value) || this.addToHistory();
						let y = this.jb();
						y && (y = y === this.value ? this.jb() : y),
							y && ((this.value = y), C.$pib(this.value));
					}
					clearHistory() {
						this.cb.clear();
					}
					setPlaceHolder(y) {
						super.setPlaceHolder(y), this.setTooltip(y);
					}
					R() {
						super.R(), this.fb.fire();
					}
					S() {
						super.S(), this.eb.fire();
					}
					ib() {
						let y = this.cb.current();
						return y || ((y = this.cb.last()), this.cb.next()), y;
					}
					jb() {
						return this.cb.previous() || this.cb.first();
					}
					kb() {
						return this.cb.next();
					}
				}
				e.$Nob = s;
			},
		),
		