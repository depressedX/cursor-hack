import '../../../../../require.js';
import '../../../../../exports.js';
import '../../dom.js';
import '../../event.js';
import '../../keyboardEvent.js';
import '../../touch.js';
import '../aria/aria.js';
import './splice.js';
import '../../../common/arrays.js';
import '../../../common/async.js';
import '../../../common/color.js';
import '../../../common/decorators.js';
import '../../../common/event.js';
import '../../../common/filters.js';
import '../../../common/keyCodes.js';
import '../../../common/lifecycle.js';
import '../../../common/numbers.js';
import '../../../common/platform.js';
import '../../../common/types.js';
import './list.js';
import './listView.js';
import '../../mouseEvent.js';
import '../../../common/observable.js';
import '../../../../css!vs/base/browser/ui/list/list.js';
define(
			de[278],
			he([
				1, 0, 7, 265, 114, 159, 127, 2210, 24, 15, 97, 138, 6, 132, 27, 3, 201,
				12, 28, 431, 539, 168, 77, 1512,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*event*/,
				w /*keyboardEvent*/,
				E /*touch*/,
				C /*aria*/,
				d /*splice*/,
				m /*arrays*/,
				r /*async*/,
				u /*color*/,
				a /*decorators*/,
				h /*event*/,
				c /*filters*/,
				n /*keyCodes*/,
				g /*lifecycle*/,
				p /*numbers*/,
				o /*platform*/,
				f /*types*/,
				b /*list*/,
				s /*listView*/,
				l /*mouseEvent*/,
				y /*observable*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.List =
						e.$Qib =
						e.$Pib =
						e.$Oib =
						e.$Lib =
						e.TypeNavigationMode =
							void 0),
					(e.$Dib = T),
					(e.$Eib = k),
					(e.$Fib = L),
					(e.$Gib = D),
					(e.$Hib = M),
					(e.$Iib = N),
					(e.$Jib = A),
					(e.$Kib = R),
					(e.$Mib = x),
					(e.$Nib = H),
					(o = mt(o));
				class $ {
					constructor(Z) {
						(this.d = Z), (this.c = []);
					}
					get templateId() {
						return `template:${this.d.name}`;
					}
					renderTemplate(Z) {
						return Z;
					}
					renderElement(Z, se, re) {
						const le = this.c.findIndex((oe) => oe.templateData === re);
						if (le >= 0) {
							const oe = this.c[le];
							this.d.unrender(re), (oe.index = se);
						} else {
							const oe = { index: se, templateData: re };
							this.c.push(oe);
						}
						this.d.renderIndex(se, re);
					}
					splice(Z, se, re) {
						const le = [];
						for (const oe of this.c)
							oe.index < Z
								? le.push(oe)
								: oe.index >= Z + se &&
									le.push({
										index: oe.index + re - se,
										templateData: oe.templateData,
									});
						this.c = le;
					}
					renderIndexes(Z) {
						for (const { index: se, templateData: re } of this.c)
							Z.indexOf(se) > -1 && this.d.renderIndex(se, re);
					}
					disposeTemplate(Z) {
						const se = this.c.findIndex((re) => re.templateData === Z);
						se < 0 || this.c.splice(se, 1);
					}
				}
				class v {
					get name() {
						return this.g;
					}
					get renderer() {
						return new $(this);
					}
					constructor(Z) {
						(this.g = Z),
							(this.c = []),
							(this.d = []),
							(this.f = new h.$re()),
							(this.onChange = this.f.event);
					}
					splice(Z, se, re) {
						const le = re.length - se,
							oe = Z + se,
							ae = [];
						let pe = 0;
						for (; pe < this.d.length && this.d[pe] < Z; )
							ae.push(this.d[pe++]);
						for (let $e = 0; $e < re.length; $e++) re[$e] && ae.push($e + Z);
						for (; pe < this.d.length && this.d[pe] >= oe; )
							ae.push(this.d[pe++] + le);
						this.renderer.splice(Z, se, re.length), this.h(ae, ae);
					}
					renderIndex(Z, se) {
						se.classList.toggle(this.g, this.contains(Z));
					}
					unrender(Z) {
						Z.classList.remove(this.g);
					}
					set(Z, se) {
						return this.h(Z, [...Z].sort(ie), se);
					}
					h(Z, se, re) {
						const le = this.c,
							oe = this.d;
						(this.c = Z), (this.d = se);
						const ae = X(oe, Z);
						return (
							this.renderer.renderIndexes(ae),
							this.f.fire({ indexes: Z, browserEvent: re }),
							le
						);
					}
					get() {
						return this.c;
					}
					contains(Z) {
						return (0, m.$Ab)(this.d, Z, ie) >= 0;
					}
					dispose() {
						(0, g.$Vc)(this.f);
					}
				}
				Ne([a.$ei], v.prototype, "renderer", null);
				class S extends v {
					constructor(Z) {
						super("selected"), (this.k = Z);
					}
					renderIndex(Z, se) {
						super.renderIndex(Z, se),
							this.k &&
								(this.contains(Z)
									? se.setAttribute("aria-selected", "true")
									: se.setAttribute("aria-selected", "false"));
					}
				}
				class I {
					constructor(Z, se, re) {
						(this.c = Z), (this.d = se), (this.f = re);
					}
					splice(Z, se, re) {
						if (!this.f)
							return this.c.splice(Z, se, new Array(re.length).fill(!1));
						const le = this.c
							.get()
							.map((pe) => this.f.getId(this.d.element(pe)).toString());
						if (le.length === 0)
							return this.c.splice(Z, se, new Array(re.length).fill(!1));
						const oe = new Set(le),
							ae = re.map((pe) => oe.has(this.f.getId(pe).toString()));
						this.c.splice(Z, se, ae);
					}
				}
				function T(Q) {
					return Q.tagName === "INPUT" || Q.tagName === "TEXTAREA";
				}
				function P(Q, Z) {
					return Q.classList.contains(Z)
						? !0
						: Q.classList.contains("monaco-list") || !Q.parentElement
							? !1
							: P(Q.parentElement, Z);
				}
				function k(Q) {
					return P(Q, "monaco-editor");
				}
				function L(Q) {
					return P(Q, "monaco-custom-toggle");
				}
				function D(Q) {
					return P(Q, "action-item");
				}
				function M(Q) {
					return P(Q, "monaco-tl-twistie");
				}
				function N(Q) {
					return P(Q, "monaco-tree-sticky-row");
				}
				function A(Q) {
					return Q.classList.contains("monaco-tree-sticky-container");
				}
				function R(Q) {
					return (Q.tagName === "A" && Q.classList.contains("monaco-button")) ||
						(Q.tagName === "DIV" &&
							Q.classList.contains("monaco-button-dropdown"))
						? !0
						: Q.classList.contains("monaco-list") || !Q.parentElement
							? !1
							: R(Q.parentElement);
				}
				class O {
					get g() {
						return h.Event.chain(
							this.c.add(new i.$mib(this.k.domNode, "keydown")).event,
							(Z) =>
								Z.filter((se) => !T(se.target)).map((se) => new w.$7fb(se)),
						);
					}
					constructor(Z, se, re) {
						(this.h = Z),
							(this.k = se),
							(this.c = new g.$Zc()),
							(this.d = new g.$Zc()),
							(this.f = re.multipleSelectionSupport),
							this.c.add(
								this.g((le) => {
									switch (le.keyCode) {
										case n.KeyCode.Enter:
											return this.l(le);
										case n.KeyCode.UpArrow:
											return this.o(le);
										case n.KeyCode.DownArrow:
											return this.p(le);
										case n.KeyCode.PageUp:
											return this.q(le);
										case n.KeyCode.PageDown:
											return this.s(le);
										case n.KeyCode.Escape:
											return this.u(le);
										case n.KeyCode.KeyA:
											this.f && (o.$m ? le.metaKey : le.ctrlKey) && this.t(le);
									}
								}),
							);
					}
					updateOptions(Z) {
						Z.multipleSelectionSupport !== void 0 &&
							(this.f = Z.multipleSelectionSupport);
					}
					l(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.setSelection(this.h.getFocus(), Z.browserEvent);
					}
					o(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.focusPrevious(1, !1, Z.browserEvent);
						const se = this.h.getFocus()[0];
						this.h.setAnchor(se), this.h.reveal(se), this.k.domNode.focus();
					}
					p(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.focusNext(1, !1, Z.browserEvent);
						const se = this.h.getFocus()[0];
						this.h.setAnchor(se), this.h.reveal(se), this.k.domNode.focus();
					}
					q(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.focusPreviousPage(Z.browserEvent);
						const se = this.h.getFocus()[0];
						this.h.setAnchor(se), this.h.reveal(se), this.k.domNode.focus();
					}
					s(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.focusNextPage(Z.browserEvent);
						const se = this.h.getFocus()[0];
						this.h.setAnchor(se), this.h.reveal(se), this.k.domNode.focus();
					}
					t(Z) {
						Z.preventDefault(),
							Z.stopPropagation(),
							this.h.setSelection((0, m.$Vb)(this.h.length), Z.browserEvent),
							this.h.setAnchor(void 0),
							this.k.domNode.focus();
					}
					u(Z) {
						this.h.getSelection().length &&
							(Z.preventDefault(),
							Z.stopPropagation(),
							this.h.setSelection([], Z.browserEvent),
							this.h.setAnchor(void 0),
							this.k.domNode.focus());
					}
					dispose() {
						this.c.dispose(), this.d.dispose();
					}
				}
				Ne([a.$ei], O.prototype, "g", null);
				var B;
				(function (Q) {
					(Q[(Q.Automatic = 0)] = "Automatic"),
						(Q[(Q.Trigger = 1)] = "Trigger");
				})(B || (e.TypeNavigationMode = B = {}));
				var U;
				(function (Q) {
					(Q[(Q.Idle = 0)] = "Idle"), (Q[(Q.Typing = 1)] = "Typing");
				})(U || (U = {})),
					(e.$Lib = new (class {
						mightProducePrintableCharacter(Q) {
							return Q.ctrlKey || Q.metaKey || Q.altKey
								? !1
								: (Q.keyCode >= n.KeyCode.KeyA &&
										Q.keyCode <= n.KeyCode.KeyZ) ||
										(Q.keyCode >= n.KeyCode.Digit0 &&
											Q.keyCode <= n.KeyCode.Digit9) ||
										(Q.keyCode >= n.KeyCode.Numpad0 &&
											Q.keyCode <= n.KeyCode.Numpad9) ||
										(Q.keyCode >= n.KeyCode.Semicolon &&
											Q.keyCode <= n.KeyCode.Quote);
						}
					})());
				class z {
					constructor(Z, se, re, le, oe) {
						(this.o = Z),
							(this.p = se),
							(this.q = re),
							(this.s = le),
							(this.t = oe),
							(this.c = !1),
							(this.d = U.Idle),
							(this.f = B.Automatic),
							(this.g = !1),
							(this.h = -1),
							(this.k = new g.$Zc()),
							(this.l = new g.$Zc()),
							this.updateOptions(Z.options);
					}
					updateOptions(Z) {
						(Z.typeNavigationEnabled ?? !0) ? this.u() : this.v(),
							(this.f = Z.typeNavigationMode ?? B.Automatic);
					}
					trigger() {
						this.g = !this.g;
					}
					u() {
						if (this.c) return;
						let Z = !1;
						const se = h.Event.chain(
								this.k.add(new i.$mib(this.p.domNode, "keydown")).event,
								(oe) =>
									oe
										.filter((ae) => !T(ae.target))
										.filter(() => this.f === B.Automatic || this.g)
										.map((ae) => new w.$7fb(ae))
										.filter((ae) => Z || this.s(ae))
										.filter((ae) => this.t.mightProducePrintableCharacter(ae))
										.forEach((ae) => t.$ahb.stop(ae, !0))
										.map((ae) => ae.browserEvent.key),
							),
							re = h.Event.debounce(
								se,
								() => null,
								800,
								void 0,
								void 0,
								void 0,
								this.k,
							);
						h.Event.reduce(
							h.Event.any(se, re),
							(oe, ae) => (ae === null ? null : (oe || "") + ae),
							void 0,
							this.k,
						)(this.x, this, this.k),
							re(this.w, this, this.k),
							se(() => (Z = !0), void 0, this.k),
							re(() => (Z = !1), void 0, this.k),
							(this.c = !0),
							(this.g = !1);
					}
					v() {
						this.c && (this.k.clear(), (this.c = !1), (this.g = !1));
					}
					w() {
						const Z = this.o.getFocus();
						if (Z.length > 0 && Z[0] === this.h) {
							const se = this.o.options.accessibilityProvider?.getAriaLabel(
								this.o.element(Z[0]),
							);
							typeof se == "string"
								? (0, C.$oib)(se)
								: se && (0, C.$oib)(se.get());
						}
						this.h = -1;
					}
					x(Z) {
						if (!Z) {
							(this.d = U.Idle), (this.g = !1);
							return;
						}
						const se = this.o.getFocus(),
							re = se.length > 0 ? se[0] : 0,
							le = this.d === U.Idle ? 1 : 0;
						this.d = U.Typing;
						for (let oe = 0; oe < this.o.length; oe++) {
							const ae = (re + oe + le) % this.o.length,
								pe = this.q.getKeyboardNavigationLabel(this.p.element(ae)),
								$e = pe && pe.toString();
							if (this.o.options.typeNavigationEnabled) {
								if (typeof $e < "u") {
									if ((0, c.$Tk)(Z, $e)) {
										(this.h = re), this.o.setFocus([ae]), this.o.reveal(ae);
										return;
									}
									const ye = (0, c.$1k)(Z, $e);
									if (ye && ye[0].end - ye[0].start > 1 && ye.length === 1) {
										(this.h = re), this.o.setFocus([ae]), this.o.reveal(ae);
										return;
									}
								}
							} else if (typeof $e > "u" || (0, c.$Tk)(Z, $e)) {
								(this.h = re), this.o.setFocus([ae]), this.o.reveal(ae);
								return;
							}
						}
					}
					dispose() {
						this.v(), this.k.dispose(), this.l.dispose();
					}
				}
				class F {
					constructor(Z, se) {
						(this.d = Z), (this.f = se), (this.c = new g.$Zc());
						const re = h.Event.chain(
							this.c.add(new i.$mib(se.domNode, "keydown")).event,
							(oe) =>
								oe.filter((ae) => !T(ae.target)).map((ae) => new w.$7fb(ae)),
						);
						h.Event.chain(re, (oe) =>
							oe.filter(
								(ae) =>
									ae.keyCode === n.KeyCode.Tab &&
									!ae.ctrlKey &&
									!ae.metaKey &&
									!ae.shiftKey &&
									!ae.altKey,
							),
						)(this.g, this, this.c);
					}
					g(Z) {
						if (Z.target !== this.f.domNode) return;
						const se = this.d.getFocus();
						if (se.length === 0) return;
						const re = this.f.domElement(se[0]);
						if (!re) return;
						const le = re.querySelector("[tabIndex]");
						if (!le || !(0, t.$Ygb)(le) || le.tabIndex === -1) return;
						const oe = (0, t.getWindow)(le).getComputedStyle(le);
						oe.visibility === "hidden" ||
							oe.display === "none" ||
							(Z.preventDefault(), Z.stopPropagation(), le.focus());
					}
					dispose() {
						this.c.dispose();
					}
				}
				function x(Q) {
					return o.$m ? Q.browserEvent.metaKey : Q.browserEvent.ctrlKey;
				}
				function H(Q) {
					return Q.browserEvent.shiftKey;
				}
				function q(Q) {
					return (0, t.$7gb)(Q) && Q.button === 2;
				}
				const V = {
					isSelectionSingleChangeEvent: x,
					isSelectionRangeChangeEvent: H,
				};
				class G {
					constructor(Z) {
						(this.k = Z),
							(this.f = new g.$Zc()),
							(this.g = new h.$re()),
							(this.onPointer = this.g.event),
							Z.options.multipleSelectionSupport !== !1 &&
								(this.c = this.k.options.multipleSelectionController || V),
							(this.d =
								typeof Z.options.mouseSupport > "u" ||
								!!Z.options.mouseSupport),
							this.d &&
								(Z.onMouseDown(this.s, this, this.f),
								Z.onContextMenu(this.t, this, this.f),
								Z.onMouseDblClick(this.v, this, this.f),
								Z.onTouchStart(this.s, this, this.f),
								this.f.add(E.$Qhb.addTarget(Z.getHTMLElement()))),
							h.Event.any(Z.onMouseClick, Z.onMouseMiddleClick, Z.onTap)(
								this.u,
								this,
								this.f,
							);
					}
					updateOptions(Z) {
						Z.multipleSelectionSupport !== void 0 &&
							((this.c = void 0),
							Z.multipleSelectionSupport &&
								(this.c = this.k.options.multipleSelectionController || V));
					}
					o(Z) {
						return this.c ? this.c.isSelectionSingleChangeEvent(Z) : !1;
					}
					p(Z) {
						return this.c ? this.c.isSelectionRangeChangeEvent(Z) : !1;
					}
					q(Z) {
						return this.o(Z) || this.p(Z);
					}
					s(Z) {
						k(Z.browserEvent.target) ||
							((0, t.$Jgb)() !== Z.browserEvent.target && this.k.domFocus());
					}
					t(Z) {
						if (T(Z.browserEvent.target) || k(Z.browserEvent.target)) return;
						const se = typeof Z.index > "u" ? [] : [Z.index];
						this.k.setFocus(se, Z.browserEvent);
					}
					u(Z) {
						if (
							!this.d ||
							T(Z.browserEvent.target) ||
							k(Z.browserEvent.target) ||
							Z.browserEvent.isHandledByList
						)
							return;
						Z.browserEvent.isHandledByList = !0;
						const se = Z.index;
						if (typeof se > "u") {
							this.k.setFocus([], Z.browserEvent),
								this.k.setSelection([], Z.browserEvent),
								this.k.setAnchor(void 0);
							return;
						}
						if (this.q(Z)) return this.w(Z);
						this.k.setFocus([se], Z.browserEvent),
							this.k.setAnchor(se),
							q(Z.browserEvent) || this.k.setSelection([se], Z.browserEvent),
							this.g.fire(Z);
					}
					v(Z) {
						if (
							T(Z.browserEvent.target) ||
							k(Z.browserEvent.target) ||
							this.q(Z) ||
							Z.browserEvent.isHandledByList
						)
							return;
						Z.browserEvent.isHandledByList = !0;
						const se = this.k.getFocus();
						this.k.setSelection(se, Z.browserEvent);
					}
					w(Z) {
						const se = Z.index;
						let re = this.k.getAnchor();
						if (this.p(Z)) {
							typeof re > "u" &&
								((re = this.k.getFocus()[0] ?? se), this.k.setAnchor(re));
							const le = Math.min(re, se),
								oe = Math.max(re, se),
								ae = (0, m.$Vb)(le, oe + 1),
								pe = this.k.getSelection(),
								$e = W(X(pe, [re]), re);
							if ($e.length === 0) return;
							const ye = X(ae, Y(pe, $e));
							this.k.setSelection(ye, Z.browserEvent),
								this.k.setFocus([se], Z.browserEvent);
						} else if (this.o(Z)) {
							const le = this.k.getSelection(),
								oe = le.filter((ae) => ae !== se);
							this.k.setFocus([se]),
								this.k.setAnchor(se),
								le.length === oe.length
									? this.k.setSelection([...oe, se], Z.browserEvent)
									: this.k.setSelection(oe, Z.browserEvent);
						}
					}
					dispose() {
						this.f.dispose();
					}
				}
				e.$Oib = G;
				class K {
					constructor(Z, se) {
						(this.c = Z), (this.d = se);
					}
					style(Z) {
						const se = this.d && `.${this.d}`,
							re = [];
						Z.listBackground &&
							re.push(
								`.monaco-list${se} .monaco-list-rows { background: ${Z.listBackground}; }`,
							),
							Z.listFocusBackground &&
								(re.push(
									`.monaco-list${se}:focus .monaco-list-row.focused { background-color: ${Z.listFocusBackground}; }`,
								),
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.focused:hover { background-color: ${Z.listFocusBackground}; }`,
								)),
							Z.listFocusForeground &&
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.focused { color: ${Z.listFocusForeground}; }`,
								),
							Z.listActiveSelectionBackground &&
								(re.push(
									`.monaco-list${se}:focus .monaco-list-row.selected { background-color: ${Z.listActiveSelectionBackground}; }`,
								),
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.selected:hover { background-color: ${Z.listActiveSelectionBackground}; }`,
								)),
							Z.listActiveSelectionForeground &&
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.selected { color: ${Z.listActiveSelectionForeground}; }`,
								),
							Z.listActiveSelectionIconForeground &&
								re.push(
									`.monaco-list${se}:focus .monaco-list-row.selected .codicon { color: ${Z.listActiveSelectionIconForeground}; }`,
								),
							Z.listFocusAndSelectionBackground &&
								re.push(`
				.monaco-drag-image,
				.monaco-list${se}:focus .monaco-list-row.selected.focused { background-color: ${Z.listFocusAndSelectionBackground}; }
			`),
							Z.listFocusAndSelectionForeground &&
								re.push(`
				.monaco-drag-image,
				.monaco-list${se}:focus .monaco-list-row.selected.focused { color: ${Z.listFocusAndSelectionForeground}; }
			`),
							Z.listInactiveFocusForeground &&
								(re.push(
									`.monaco-list${se} .monaco-list-row.focused { color:  ${Z.listInactiveFocusForeground}; }`,
								),
								re.push(
									`.monaco-list${se} .monaco-list-row.focused:hover { color:  ${Z.listInactiveFocusForeground}; }`,
								)),
							Z.listInactiveSelectionIconForeground &&
								re.push(
									`.monaco-list${se} .monaco-list-row.focused .codicon { color:  ${Z.listInactiveSelectionIconForeground}; }`,
								),
							Z.listInactiveFocusBackground &&
								(re.push(
									`.monaco-list${se} .monaco-list-row.focused { background-color:  ${Z.listInactiveFocusBackground}; }`,
								),
								re.push(
									`.monaco-list${se} .monaco-list-row.focused:hover { background-color:  ${Z.listInactiveFocusBackground}; }`,
								)),
							Z.listInactiveSelectionBackground &&
								(re.push(
									`.monaco-list${se} .monaco-list-row.selected { background-color:  ${Z.listInactiveSelectionBackground}; }`,
								),
								re.push(
									`.monaco-list${se} .monaco-list-row.selected:hover { background-color:  ${Z.listInactiveSelectionBackground}; }`,
								)),
							Z.listInactiveSelectionForeground &&
								re.push(
									`.monaco-list${se} .monaco-list-row.selected { color: ${Z.listInactiveSelectionForeground}; }`,
								),
							Z.listHoverBackground &&
								re.push(
									`.monaco-list${se}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${Z.listHoverBackground}; }`,
								),
							Z.listHoverForeground &&
								re.push(
									`.monaco-list${se}:not(.drop-target):not(.dragging) .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${Z.listHoverForeground}; }`,
								);
						const le = (0, t.$xhb)(
							Z.listFocusAndSelectionOutline,
							(0, t.$xhb)(Z.listSelectionOutline, Z.listFocusOutline ?? ""),
						);
						le &&
							re.push(
								`.monaco-list${se}:focus .monaco-list-row.focused.selected { outline: 1px solid ${le}; outline-offset: -1px;}`,
							),
							Z.listFocusOutline &&
								re.push(`
				.monaco-drag-image,
				.monaco-list${se}:focus .monaco-list-row.focused { outline: 1px solid ${Z.listFocusOutline}; outline-offset: -1px; }
				.monaco-workbench.context-menu-visible .monaco-list${se}.last-focused .monaco-list-row.focused { outline: 1px solid ${Z.listFocusOutline}; outline-offset: -1px; }
			`);
						const oe = (0, t.$xhb)(
							Z.listSelectionOutline,
							Z.listInactiveFocusOutline ?? "",
						);
						oe &&
							re.push(
								`.monaco-list${se} .monaco-list-row.focused.selected { outline: 1px dotted ${oe}; outline-offset: -1px; }`,
							),
							Z.listSelectionOutline &&
								re.push(
									`.monaco-list${se} .monaco-list-row.selected { outline: 1px dotted ${Z.listSelectionOutline}; outline-offset: -1px; }`,
								),
							Z.listInactiveFocusOutline &&
								re.push(
									`.monaco-list${se} .monaco-list-row.focused { outline: 1px dotted ${Z.listInactiveFocusOutline}; outline-offset: -1px; }`,
								),
							Z.listHoverOutline &&
								re.push(
									`.monaco-list${se} .monaco-list-row:hover { outline: 1px dashed ${Z.listHoverOutline}; outline-offset: -1px; }`,
								),
							Z.listDropOverBackground &&
								re.push(`
				.monaco-list${se}.drop-target,
				.monaco-list${se} .monaco-list-rows.drop-target,
				.monaco-list${se} .monaco-list-row.drop-target { background-color: ${Z.listDropOverBackground} !important; color: inherit !important; }
			`),
							Z.listDropBetweenBackground &&
								(re.push(`
			.monaco-list${se} .monaco-list-rows.drop-target-before .monaco-list-row:first-child::before,
			.monaco-list${se} .monaco-list-row.drop-target-before::before {
				content: ""; position: absolute; top: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${Z.listDropBetweenBackground};
			}`),
								re.push(`
			.monaco-list${se} .monaco-list-rows.drop-target-after .monaco-list-row:last-child::after,
			.monaco-list${se} .monaco-list-row.drop-target-after::after {
				content: ""; position: absolute; bottom: 0px; left: 0px; width: 100%; height: 1px;
				background-color: ${Z.listDropBetweenBackground};
			}`)),
							Z.tableColumnsBorder &&
								re.push(`
				.monaco-table > .monaco-split-view2,
				.monaco-table > .monaco-split-view2 .monaco-sash.vertical::before,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: ${Z.tableColumnsBorder};
				}

				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2,
				.monaco-workbench:not(.reduce-motion) .monaco-table > .monaco-split-view2 .monaco-sash.vertical::before {
					border-color: transparent;
				}
			`),
							Z.tableOddRowsBackgroundColor &&
								re.push(`
				.monaco-table .monaco-list-row[data-parity=odd]:not(.focused):not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(:focus) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr,
				.monaco-table .monaco-list:not(.focused) .monaco-list-row[data-parity=odd].focused:not(.selected):not(:hover) .monaco-table-tr {
					background-color: ${Z.tableOddRowsBackgroundColor};
				}
			`),
							(this.c.textContent = re.join(`
`));
					}
				}
				(e.$Pib = K),
					(e.$Qib = {
						listFocusBackground: "#7FB0D0",
						listActiveSelectionBackground: "#0E639C",
						listActiveSelectionForeground: "#FFFFFF",
						listActiveSelectionIconForeground: "#FFFFFF",
						listFocusAndSelectionOutline: "#90C2F9",
						listFocusAndSelectionBackground: "#094771",
						listFocusAndSelectionForeground: "#FFFFFF",
						listInactiveSelectionBackground: "#3F3F46",
						listInactiveSelectionIconForeground: "#FFFFFF",
						listHoverBackground: "#2A2D2E",
						listDropOverBackground: "#383B3D",
						listDropBetweenBackground: "#EEEEEE",
						treeIndentGuidesStroke: "#a9a9a9",
						treeInactiveIndentGuidesStroke: u.$UL
							.fromHex("#a9a9a9")
							.transparent(0.4)
							.toString(),
						tableColumnsBorder: u.$UL
							.fromHex("#cccccc")
							.transparent(0.2)
							.toString(),
						tableOddRowsBackgroundColor: u.$UL
							.fromHex("#cccccc")
							.transparent(0.04)
							.toString(),
						listBackground: void 0,
						listFocusForeground: void 0,
						listInactiveSelectionForeground: void 0,
						listInactiveFocusForeground: void 0,
						listInactiveFocusBackground: void 0,
						listHoverForeground: void 0,
						listFocusOutline: void 0,
						listInactiveFocusOutline: void 0,
						listSelectionOutline: void 0,
						listHoverOutline: void 0,
						treeStickyScrollBackground: void 0,
						treeStickyScrollBorder: void 0,
						treeStickyScrollShadow: void 0,
					});
				const J = {
					keyboardSupport: !0,
					mouseSupport: !0,
					multipleSelectionSupport: !0,
					dnd: {
						getDragURI() {
							return null;
						},
						onDragStart() {},
						onDragOver() {
							return !1;
						},
						drop() {},
						dispose() {},
					},
				};
				function W(Q, Z) {
					const se = Q.indexOf(Z);
					if (se === -1) return [];
					const re = [];
					let le = se - 1;
					for (; le >= 0 && Q[le] === Z - (se - le); ) re.push(Q[le--]);
					for (
						re.reverse(), le = se;
						le < Q.length && Q[le] === Z + (le - se);
					)
						re.push(Q[le++]);
					return re;
				}
				function X(Q, Z) {
					const se = [];
					let re = 0,
						le = 0;
					for (; re < Q.length || le < Z.length; )
						if (re >= Q.length) se.push(Z[le++]);
						else if (le >= Z.length) se.push(Q[re++]);
						else if (Q[re] === Z[le]) {
							se.push(Q[re]), re++, le++;
							continue;
						} else Q[re] < Z[le] ? se.push(Q[re++]) : se.push(Z[le++]);
					return se;
				}
				function Y(Q, Z) {
					const se = [];
					let re = 0,
						le = 0;
					for (; re < Q.length || le < Z.length; )
						if (re >= Q.length) se.push(Z[le++]);
						else if (le >= Z.length) se.push(Q[re++]);
						else if (Q[re] === Z[le]) {
							re++, le++;
							continue;
						} else Q[re] < Z[le] ? se.push(Q[re++]) : le++;
					return se;
				}
				const ie = (Q, Z) => Q - Z;
				class ne {
					constructor(Z, se) {
						(this.c = Z), (this.d = se);
					}
					get templateId() {
						return this.c;
					}
					renderTemplate(Z) {
						return this.d.map((se) => se.renderTemplate(Z));
					}
					renderElement(Z, se, re, le) {
						let oe = 0;
						for (const ae of this.d) ae.renderElement(Z, se, re[oe++], le);
					}
					disposeElement(Z, se, re, le) {
						let oe = 0;
						for (const ae of this.d)
							ae.disposeElement?.(Z, se, re[oe], le), (oe += 1);
					}
					disposeTemplate(Z) {
						let se = 0;
						for (const re of this.d) re.disposeTemplate(Z[se++]);
					}
				}
				class ee {
					constructor(Z) {
						(this.c = Z), (this.templateId = "a18n");
					}
					renderTemplate(Z) {
						return { container: Z, disposables: new g.$Zc() };
					}
					renderElement(Z, se, re) {
						const le = this.c.getAriaLabel(Z),
							oe =
								le && typeof le != "string" ? le : (0, y.constObservable)(le);
						re.disposables.add(
							(0, y.autorun)((pe) => {
								this.d(pe.readObservable(oe), re.container);
							}),
						);
						const ae = this.c.getAriaLevel && this.c.getAriaLevel(Z);
						typeof ae == "number"
							? re.container.setAttribute("aria-level", `${ae}`)
							: re.container.removeAttribute("aria-level");
					}
					d(Z, se) {
						Z
							? se.setAttribute("aria-label", Z)
							: se.removeAttribute("aria-label");
					}
					disposeElement(Z, se, re, le) {
						re.disposables.clear();
					}
					disposeTemplate(Z) {
						Z.disposables.dispose();
					}
				}
				class _ {
					constructor(Z, se) {
						(this.c = Z), (this.d = se);
					}
					getDragElements(Z) {
						const se = this.c.getSelectedElements();
						return se.indexOf(Z) > -1 ? se : [Z];
					}
					getDragURI(Z) {
						return this.d.getDragURI(Z);
					}
					getDragLabel(Z, se) {
						if (this.d.getDragLabel) return this.d.getDragLabel(Z, se);
					}
					onDragStart(Z, se) {
						this.d.onDragStart?.(Z, se);
					}
					onDragOver(Z, se, re, le, oe) {
						return this.d.onDragOver(Z, se, re, le, oe);
					}
					onDragLeave(Z, se, re, le) {
						this.d.onDragLeave?.(Z, se, re, le);
					}
					onDragEnd(Z) {
						this.d.onDragEnd?.(Z);
					}
					drop(Z, se, re, le, oe) {
						this.d.drop(Z, se, re, le, oe);
					}
					dispose() {
						this.d.dispose();
					}
				}
				class te {
					get onDidChangeFocus() {
						return h.Event.map(
							this.g.wrapEvent(this.c.onChange),
							(Z) => this.G(Z),
							this.y,
						);
					}
					get onDidChangeSelection() {
						return h.Event.map(
							this.g.wrapEvent(this.d.onChange),
							(Z) => this.G(Z),
							this.y,
						);
					}
					get domId() {
						return this.k.domId;
					}
					get onDidScroll() {
						return this.k.onDidScroll;
					}
					get onMouseClick() {
						return this.k.onMouseClick;
					}
					get onMouseDblClick() {
						return this.k.onMouseDblClick;
					}
					get onMouseMiddleClick() {
						return this.k.onMouseMiddleClick;
					}
					get onPointer() {
						return this.w.onPointer;
					}
					get onMouseUp() {
						return this.k.onMouseUp;
					}
					get onMouseDown() {
						return this.k.onMouseDown;
					}
					get onMouseOver() {
						return this.k.onMouseOver;
					}
					get onMouseMove() {
						return this.k.onMouseMove;
					}
					get onMouseOut() {
						return this.k.onMouseOut;
					}
					get onTouchStart() {
						return this.k.onTouchStart;
					}
					get onTap() {
						return this.k.onTap;
					}
					get onContextMenu() {
						let Z = !1;
						const se = h.Event.chain(
								this.y.add(new i.$mib(this.k.domNode, "keydown")).event,
								(oe) =>
									oe
										.map((ae) => new w.$7fb(ae))
										.filter(
											(ae) =>
												(Z =
													ae.keyCode === n.KeyCode.ContextMenu ||
													(ae.shiftKey && ae.keyCode === n.KeyCode.F10)),
										)
										.map((ae) => t.$ahb.stop(ae, !0))
										.filter(() => !1),
							),
							re = h.Event.chain(
								this.y.add(new i.$mib(this.k.domNode, "keyup")).event,
								(oe) =>
									oe
										.forEach(() => (Z = !1))
										.map((ae) => new w.$7fb(ae))
										.filter(
											(ae) =>
												ae.keyCode === n.KeyCode.ContextMenu ||
												(ae.shiftKey && ae.keyCode === n.KeyCode.F10),
										)
										.map((ae) => t.$ahb.stop(ae, !0))
										.map(({ browserEvent: ae }) => {
											const pe = this.getFocus(),
												$e = pe.length ? pe[0] : void 0,
												ye = typeof $e < "u" ? this.k.element($e) : void 0,
												ue =
													typeof $e < "u"
														? this.k.domElement($e)
														: this.k.domNode;
											return {
												index: $e,
												element: ye,
												anchor: ue,
												browserEvent: ae,
											};
										}),
							),
							le = h.Event.chain(this.k.onContextMenu, (oe) =>
								oe
									.filter((ae) => !Z)
									.map(({ element: ae, index: pe, browserEvent: $e }) => ({
										element: ae,
										index: pe,
										anchor: new l.$2fb((0, t.getWindow)(this.k.domNode), $e),
										browserEvent: $e,
									})),
							);
						return h.Event.any(se, re, le);
					}
					get onKeyDown() {
						return this.y.add(new i.$mib(this.k.domNode, "keydown")).event;
					}
					get onKeyUp() {
						return this.y.add(new i.$mib(this.k.domNode, "keyup")).event;
					}
					get onKeyPress() {
						return this.y.add(new i.$mib(this.k.domNode, "keypress")).event;
					}
					get onDidFocus() {
						return h.Event.signal(
							this.y.add(new i.$mib(this.k.domNode, "focus", !0)).event,
						);
					}
					get onDidBlur() {
						return h.Event.signal(
							this.y.add(new i.$mib(this.k.domNode, "blur", !0)).event,
						);
					}
					constructor(Z, se, re, le, oe = J) {
						(this.A = Z),
							(this.B = oe),
							(this.c = new v("focused")),
							(this.f = new v("anchor")),
							(this.g = new h.$ze()),
							(this.x = ""),
							(this.y = new g.$Zc()),
							(this.z = new h.$re()),
							(this.onDidDispose = this.z.event);
						const ae =
							this.B.accessibilityProvider &&
							this.B.accessibilityProvider.getWidgetRole
								? this.B.accessibilityProvider?.getWidgetRole()
								: "list";
						this.d = new S(ae !== "listbox");
						const pe = [this.c.renderer, this.d.renderer];
						(this.u = oe.accessibilityProvider),
							this.u &&
								(pe.push(new ee(this.u)),
								this.u.onDidChangeActiveDescendant?.(this.I, this, this.y)),
							(le = le.map((ye) => new ne(ye.templateId, [...pe, ye])));
						const $e = { ...oe, dnd: oe.dnd && new _(this, oe.dnd) };
						if (
							((this.k = this.C(se, re, le, $e)),
							this.k.domNode.setAttribute("role", ae),
							oe.styleController)
						)
							this.q = oe.styleController(this.k.domId);
						else {
							const ye = (0, t.$Rgb)(this.k.domNode);
							this.q = new K(ye, this.k.domId);
						}
						if (
							((this.o = new d.$qib([
								new I(this.c, this.k, oe.identityProvider),
								new I(this.d, this.k, oe.identityProvider),
								new I(this.f, this.k, oe.identityProvider),
								this.k,
							])),
							this.y.add(this.c),
							this.y.add(this.d),
							this.y.add(this.f),
							this.y.add(this.k),
							this.y.add(this.z),
							this.y.add(new F(this, this.k)),
							(typeof oe.keyboardSupport != "boolean" || oe.keyboardSupport) &&
								((this.v = new O(this, this.k, oe)), this.y.add(this.v)),
							oe.keyboardNavigationLabelProvider)
						) {
							const ye = oe.keyboardNavigationDelegate || e.$Lib;
							(this.t = new z(
								this,
								this.k,
								oe.keyboardNavigationLabelProvider,
								oe.keyboardNavigationEventFilter ?? (() => !0),
								ye,
							)),
								this.y.add(this.t);
						}
						(this.w = this.D(oe)),
							this.y.add(this.w),
							this.onDidChangeFocus(this.H, this, this.y),
							this.onDidChangeSelection(this.J, this, this.y),
							this.u && (this.ariaLabel = this.u.getWidgetAriaLabel()),
							this.B.multipleSelectionSupport !== !1 &&
								this.k.domNode.setAttribute("aria-multiselectable", "true");
					}
					C(Z, se, re, le) {
						return new s.$zib(Z, se, re, le);
					}
					D(Z) {
						return new G(this);
					}
					updateOptions(Z = {}) {
						(this.B = { ...this.B, ...Z }),
							this.t?.updateOptions(this.B),
							this.B.multipleSelectionController !== void 0 &&
								(this.B.multipleSelectionSupport
									? this.k.domNode.setAttribute("aria-multiselectable", "true")
									: this.k.domNode.removeAttribute("aria-multiselectable")),
							this.w.updateOptions(Z),
							this.v?.updateOptions(Z),
							this.k.updateOptions(Z);
					}
					get options() {
						return this.B;
					}
					splice(Z, se, re = []) {
						if (Z < 0 || Z > this.k.length)
							throw new b.$Bib(this.A, `Invalid start index: ${Z}`);
						if (se < 0) throw new b.$Bib(this.A, `Invalid delete count: ${se}`);
						(se === 0 && re.length === 0) ||
							this.g.bufferEvents(() => this.o.splice(Z, se, re));
					}
					updateWidth(Z) {
						this.k.updateWidth(Z);
					}
					updateElementHeight(Z, se) {
						this.k.updateElementHeight(Z, se, null);
					}
					rerender() {
						this.k.rerender();
					}
					element(Z) {
						return this.k.element(Z);
					}
					indexOf(Z) {
						return this.k.indexOf(Z);
					}
					indexAt(Z) {
						return this.k.indexAt(Z);
					}
					get length() {
						return this.k.length;
					}
					get contentHeight() {
						return this.k.contentHeight;
					}
					get contentWidth() {
						return this.k.contentWidth;
					}
					get onDidChangeContentHeight() {
						return this.k.onDidChangeContentHeight;
					}
					get onDidChangeContentWidth() {
						return this.k.onDidChangeContentWidth;
					}
					get scrollTop() {
						return this.k.getScrollTop();
					}
					set scrollTop(Z) {
						this.k.setScrollTop(Z);
					}
					get scrollLeft() {
						return this.k.getScrollLeft();
					}
					set scrollLeft(Z) {
						this.k.setScrollLeft(Z);
					}
					get scrollHeight() {
						return this.k.scrollHeight;
					}
					get renderHeight() {
						return this.k.renderHeight;
					}
					get firstVisibleIndex() {
						return this.k.firstVisibleIndex;
					}
					get firstMostlyVisibleIndex() {
						return this.k.firstMostlyVisibleIndex;
					}
					get lastVisibleIndex() {
						return this.k.lastVisibleIndex;
					}
					get ariaLabel() {
						return this.x;
					}
					set ariaLabel(Z) {
						(this.x = Z), this.k.domNode.setAttribute("aria-label", Z);
					}
					domFocus() {
						this.k.domNode.focus({ preventScroll: !0 });
					}
					layout(Z, se) {
						this.k.layout(Z, se);
					}
					triggerTypeNavigation() {
						this.t?.trigger();
					}
					setSelection(Z, se) {
						for (const re of Z)
							if (re < 0 || re >= this.length)
								throw new b.$Bib(this.A, `Invalid index ${re}`);
						this.d.set(Z, se);
					}
					getSelection() {
						return this.d.get();
					}
					getSelectedElements() {
						return this.getSelection().map((Z) => this.k.element(Z));
					}
					setAnchor(Z) {
						if (typeof Z > "u") {
							this.f.set([]);
							return;
						}
						if (Z < 0 || Z >= this.length)
							throw new b.$Bib(this.A, `Invalid index ${Z}`);
						this.f.set([Z]);
					}
					getAnchor() {
						return (0, m.$Sb)(this.f.get(), void 0);
					}
					getAnchorElement() {
						const Z = this.getAnchor();
						return typeof Z > "u" ? void 0 : this.element(Z);
					}
					setFocus(Z, se) {
						for (const re of Z)
							if (re < 0 || re >= this.length)
								throw new b.$Bib(this.A, `Invalid index ${re}`);
						this.c.set(Z, se);
					}
					focusNext(Z = 1, se = !1, re, le) {
						if (this.length === 0) return;
						const oe = this.c.get(),
							ae = this.E(oe.length > 0 ? oe[0] + Z : 0, se, le);
						ae > -1 && this.setFocus([ae], re);
					}
					focusPrevious(Z = 1, se = !1, re, le) {
						if (this.length === 0) return;
						const oe = this.c.get(),
							ae = this.F(oe.length > 0 ? oe[0] - Z : 0, se, le);
						ae > -1 && this.setFocus([ae], re);
					}
					async focusNextPage(Z, se) {
						let re = this.k.indexAt(
							this.k.getScrollTop() + this.k.renderHeight,
						);
						re = re === 0 ? 0 : re - 1;
						const le = this.getFocus()[0];
						if (le !== re && (le === void 0 || re > le)) {
							const oe = this.F(re, !1, se);
							oe > -1 && le !== oe
								? this.setFocus([oe], Z)
								: this.setFocus([re], Z);
						} else {
							const oe = this.k.getScrollTop();
							let ae = oe + this.k.renderHeight;
							re > le && (ae -= this.k.elementHeight(re)),
								this.k.setScrollTop(ae),
								this.k.getScrollTop() !== oe &&
									(this.setFocus([]),
									await (0, r.$Nh)(0),
									await this.focusNextPage(Z, se));
						}
					}
					async focusPreviousPage(Z, se, re = () => 0) {
						let le;
						const oe = re(),
							ae = this.k.getScrollTop() + oe;
						ae === 0
							? (le = this.k.indexAt(ae))
							: (le = this.k.indexAfter(ae - 1));
						const pe = this.getFocus()[0];
						if (pe !== le && (pe === void 0 || pe >= le)) {
							const $e = this.E(le, !1, se);
							$e > -1 && pe !== $e
								? this.setFocus([$e], Z)
								: this.setFocus([le], Z);
						} else {
							const $e = ae;
							this.k.setScrollTop(ae - this.k.renderHeight - oe),
								this.k.getScrollTop() + re() !== $e &&
									(this.setFocus([]),
									await (0, r.$Nh)(0),
									await this.focusPreviousPage(Z, se, re));
						}
					}
					focusLast(Z, se) {
						if (this.length === 0) return;
						const re = this.F(this.length - 1, !1, se);
						re > -1 && this.setFocus([re], Z);
					}
					focusFirst(Z, se) {
						this.focusNth(0, Z, se);
					}
					focusNth(Z, se, re) {
						if (this.length === 0) return;
						const le = this.E(Z, !1, re);
						le > -1 && this.setFocus([le], se);
					}
					E(Z, se = !1, re) {
						for (let le = 0; le < this.length; le++) {
							if (Z >= this.length && !se) return -1;
							if (((Z = Z % this.length), !re || re(this.element(Z)))) return Z;
							Z++;
						}
						return -1;
					}
					F(Z, se = !1, re) {
						for (let le = 0; le < this.length; le++) {
							if (Z < 0 && !se) return -1;
							if (
								((Z = (this.length + (Z % this.length)) % this.length),
								!re || re(this.element(Z)))
							)
								return Z;
							Z--;
						}
						return -1;
					}
					getFocus() {
						return this.c.get();
					}
					getFocusedElements() {
						return this.getFocus().map((Z) => this.k.element(Z));
					}
					reveal(Z, se, re = 0) {
						if (Z < 0 || Z >= this.length)
							throw new b.$Bib(this.A, `Invalid index ${Z}`);
						const le = this.k.getScrollTop(),
							oe = this.k.elementTop(Z),
							ae = this.k.elementHeight(Z);
						if ((0, f.$pg)(se)) {
							const pe = ae - this.k.renderHeight + re;
							this.k.setScrollTop(pe * (0, p.$Zm)(se, 0, 1) + oe - re);
						} else {
							const pe = oe + ae,
								$e = le + this.k.renderHeight;
							(oe < le + re && pe >= $e) ||
								(oe < le + re || (pe >= $e && ae >= this.k.renderHeight)
									? this.k.setScrollTop(oe - re)
									: pe >= $e && this.k.setScrollTop(pe - this.k.renderHeight));
						}
					}
					getRelativeTop(Z, se = 0) {
						if (Z < 0 || Z >= this.length)
							throw new b.$Bib(this.A, `Invalid index ${Z}`);
						const re = this.k.getScrollTop(),
							le = this.k.elementTop(Z),
							oe = this.k.elementHeight(Z);
						if (le < re + se || le + oe > re + this.k.renderHeight) return null;
						const ae = oe - this.k.renderHeight + se;
						return Math.abs((re + se - le) / ae);
					}
					isDOMFocused() {
						return (0, t.$Kgb)(this.k.domNode);
					}
					getHTMLElement() {
						return this.k.domNode;
					}
					getScrollableElement() {
						return this.k.scrollableElementDomNode;
					}
					getElementID(Z) {
						return this.k.getElementDomId(Z);
					}
					getElementTop(Z) {
						return this.k.elementTop(Z);
					}
					style(Z) {
						this.q.style(Z);
					}
					G({ indexes: Z, browserEvent: se }) {
						return {
							indexes: Z,
							elements: Z.map((re) => this.k.element(re)),
							browserEvent: se,
						};
					}
					H() {
						const Z = this.c.get();
						this.k.domNode.classList.toggle("element-focused", Z.length > 0),
							this.I();
					}
					I() {
						const Z = this.c.get();
						if (Z.length > 0) {
							let se;
							this.u?.getActiveDescendantId &&
								(se = this.u.getActiveDescendantId(this.k.element(Z[0]))),
								this.k.domNode.setAttribute(
									"aria-activedescendant",
									se || this.k.getElementDomId(Z[0]),
								);
						} else this.k.domNode.removeAttribute("aria-activedescendant");
					}
					J() {
						const Z = this.d.get();
						this.k.domNode.classList.toggle("selection-none", Z.length === 0),
							this.k.domNode.classList.toggle(
								"selection-single",
								Z.length === 1,
							),
							this.k.domNode.classList.toggle(
								"selection-multiple",
								Z.length > 1,
							);
					}
					dispose() {
						this.z.fire(), this.y.dispose(), this.z.dispose();
					}
				}
				(e.List = te),
					Ne([a.$ei], te.prototype, "onDidChangeFocus", null),
					Ne([a.$ei], te.prototype, "onDidChangeSelection", null),
					Ne([a.$ei], te.prototype, "onContextMenu", null),
					Ne([a.$ei], te.prototype, "onKeyDown", null),
					Ne([a.$ei], te.prototype, "onKeyUp", null),
					Ne([a.$ei], te.prototype, "onKeyPress", null),
					Ne([a.$ei], te.prototype, "onDidFocus", null),
					Ne([a.$ei], te.prototype, "onDidBlur", null);
			},
		)
