import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../dom.js';
import '../../keyboardEvent.js';
import '../actionbar/actionViewItems.js';
import './dropdown.js';
import '../../../common/actions.js';
import '../../../common/codicons.js';
import '../../../common/themables.js';
import '../../../common/event.js';
import '../../../common/keyCodes.js';
import '../hover/hoverDelegateFactory.js';
import '../hover/hoverDelegate2.js';
import '../../../../css!vs/base/browser/ui/dropdown/dropdown.js';
define(
			de[437],
			he([1, 0, 4, 7, 114, 198, 2674, 50, 14, 26, 6, 27, 95, 317, 1509]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*dom*/,
 w /*keyboardEvent*/,
 E /*actionViewItems*/,
 C /*dropdown*/,
 d /*actions*/,
 m /*codicons*/,
 r /*themables*/,
 u /*event*/,
 a /*keyCodes*/,
 h /*hoverDelegateFactory*/,
 c /*hoverDelegate2*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Qob = e.$Pob = void 0),
					(t = mt(t));
				class n extends E.$$ib {
					constructor(o, f, b, s = Object.create(null)) {
						super(null, o, s),
							(this.I = null),
							(this.J = this.D(new u.$re())),
							(this.onDidChangeVisibility = this.J.event),
							(this.b = f),
							(this.y = b),
							(this.m = s),
							this.m.actionRunner && (this.actionRunner = this.m.actionRunner);
					}
					render(o) {
						this.I = o;
						const f = (l) => {
								this.element = (0, i.$fhb)(l, (0, i.$)("a.action-label"));
								let y = [];
								return (
									typeof this.m.classNames == "string"
										? (y = this.m.classNames.split(/\s+/g).filter(($) => !!$))
										: this.m.classNames && (y = this.m.classNames),
									y.find(($) => $ === "icon") || y.push("codicon"),
									this.element.classList.add(...y),
									this.element.setAttribute("role", "button"),
									this.element.setAttribute("aria-haspopup", "true"),
									this.element.setAttribute("aria-expanded", "false"),
									this._action.label &&
										this.D(
											(0, c.$1ib)().setupManagedHover(
												this.m.hoverDelegate ?? (0, h.$cib)("mouse"),
												this.element,
												this._action.label,
											),
										),
									(this.element.ariaLabel = this._action.label || ""),
									null
								);
							},
							b = Array.isArray(this.b),
							s = {
								contextMenuProvider: this.y,
								labelRenderer: f,
								menuAsChild: this.m.menuAsChild,
								actions: b ? this.b : void 0,
								actionProvider: b ? void 0 : this.b,
								skipTelemetry: this.m.skipTelemetry,
							};
						if (
							((this.n = this.D(new C.$mob(o, s))),
							this.D(
								this.n.onDidChangeVisibility((l) => {
									this.element?.setAttribute("aria-expanded", `${l}`),
										this.J.fire(l);
								}),
							),
							(this.n.menuOptions = {
								actionViewItemProvider: this.m.actionViewItemProvider,
								actionRunner: this.actionRunner,
								getKeyBinding: this.m.keybindingProvider,
								context: this._context,
							}),
							this.m.anchorAlignmentProvider)
						) {
							const l = this;
							this.n.menuOptions = {
								...this.n.menuOptions,
								get anchorAlignment() {
									return l.m.anchorAlignmentProvider();
								},
							};
						}
						this.C(), this.t();
					}
					z() {
						let o = null;
						return (
							this.action.tooltip
								? (o = this.action.tooltip)
								: this.action.label && (o = this.action.label),
							o ?? void 0
						);
					}
					setActionContext(o) {
						super.setActionContext(o),
							this.n &&
								(this.n.menuOptions
									? (this.n.menuOptions.context = o)
									: (this.n.menuOptions = { context: o }));
					}
					show() {
						this.n?.show();
					}
					t() {
						const o = !this.action.enabled;
						this.I?.classList.toggle("disabled", o),
							this.element?.classList.toggle("disabled", o);
					}
				}
				e.$Pob = n;
				class g extends E.$_ib {
					constructor(o, f, b, s) {
						super(o, f, b), (this.n = s);
					}
					render(o) {
						if ((super.render(o), this.element)) {
							this.element.classList.add("action-dropdown-item");
							const f = {
									getActions: () => {
										const l = this.m.menuActionsOrProvider;
										return Array.isArray(l) ? l : l.getActions();
									},
								},
								b = this.m.menuActionClassNames || [],
								s = (0, i.h)("div.action-dropdown-item-separator", [
									(0, i.h)("div", {}),
								]).root;
							s.classList.toggle("prominent", b.includes("prominent")),
								(0, i.$fhb)(this.element, s),
								(this.g = this.D(
									new n(
										this.D(new d.$rj("dropdownAction", t.localize(8, null))),
										f,
										this.n,
										{
											classNames: [
												"dropdown",
												...r.ThemeIcon.asClassNameArray(m.$ak.dropDownButton),
												...b,
											],
											hoverDelegate: this.m.hoverDelegate,
										},
									),
								)),
								this.g.render(this.element),
								this.D(
									(0, i.$0fb)(this.element, i.$$gb.KEY_DOWN, (l) => {
										if (f.getActions().length === 0) return;
										const y = new w.$7fb(l);
										let $ = !1;
										this.g?.isFocused() && y.equals(a.KeyCode.LeftArrow)
											? (($ = !0), this.g?.blur(), this.focus())
											: this.isFocused() &&
												y.equals(a.KeyCode.RightArrow) &&
												(($ = !0), this.blur(), this.g?.focus()),
											$ && (y.preventDefault(), y.stopPropagation());
									}),
								);
						}
					}
					blur() {
						super.blur(), this.g?.blur();
					}
					setFocusable(o) {
						super.setFocusable(o), this.g?.setFocusable(o);
					}
				}
				e.$Qob = g;
			},
		)
