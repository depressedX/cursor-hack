import '../../../../../require.js';
import '../../../../../exports.js';
import '../actionbar/actionbar.js';
import '../dropdown/dropdownActionViewItem.js';
import '../../../common/actions.js';
import '../../../common/codicons.js';
import '../../../common/themables.js';
import '../../../common/event.js';
import '../../../common/lifecycle.js';
import '../../../../nls.js';
import '../hover/hoverDelegateFactory.js';
import '../../../../css!vs/base/browser/ui/toolbar/toolbar.js';
define(
			de[461],
			he([1, 0, 105, 437, 50, 14, 26, 6, 3, 4, 95, 2258]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$kpb = e.$jpb = void 0),
					(r = mt(r));
				class a extends m.$1c {
					constructor(
						n,
						g,
						p = { orientation: t.ActionsOrientation.HORIZONTAL },
					) {
						super(),
							(this.t = []),
							(this.u = !1),
							(this.y = this.D(new d.$xe())),
							(this.onDidChangeDropdownVisibility = this.y.event),
							(this.z = this.D(new m.$Zc())),
							(p.hoverDelegate = p.hoverDelegate ?? this.D((0, u.$dib)())),
							(this.f = p),
							(this.n = this.D(new h(() => this.q?.show(), p.toggleMenuTitle))),
							(this.w = document.createElement("div")),
							(this.w.className = "monaco-toolbar"),
							n.appendChild(this.w),
							(this.m = this.D(
								new t.$eib(this.w, {
									orientation: p.orientation,
									ariaLabel: p.ariaLabel,
									actionRunner: p.actionRunner,
									allowContextMenu: p.allowContextMenu,
									highlightToggledItems: p.highlightToggledItems,
									hoverDelegate: p.hoverDelegate,
									actionViewItemProvider: (o, f) => {
										if (o.id === h.ID)
											return (
												(this.q = new i.$Pob(o, o.menuActions, g, {
													actionViewItemProvider: this.f.actionViewItemProvider,
													actionRunner: this.actionRunner,
													keybindingProvider: this.f.getKeyBinding,
													classNames: C.ThemeIcon.asClassNameArray(
														p.moreIcon ?? E.$ak.toolBarMore,
													),
													anchorAlignmentProvider:
														this.f.anchorAlignmentProvider,
													menuAsChild: !!this.f.renderDropdownAsChildElement,
													skipTelemetry: this.f.skipTelemetry,
													isMenu: !0,
													hoverDelegate: this.f.hoverDelegate,
												})),
												this.q.setActionContext(this.m.context),
												this.z.add(this.y.add(this.q.onDidChangeVisibility)),
												this.q
											);
										if (p.actionViewItemProvider) {
											const b = p.actionViewItemProvider(o, f);
											if (b) return b;
										}
										if (o instanceof w.$uj) {
											const b = new i.$Pob(o, o.actions, g, {
												actionViewItemProvider: this.f.actionViewItemProvider,
												actionRunner: this.actionRunner,
												keybindingProvider: this.f.getKeyBinding,
												classNames: o.class,
												anchorAlignmentProvider: this.f.anchorAlignmentProvider,
												menuAsChild: !!this.f.renderDropdownAsChildElement,
												skipTelemetry: this.f.skipTelemetry,
												hoverDelegate: this.f.hoverDelegate,
											});
											return (
												b.setActionContext(this.m.context),
												this.t.push(b),
												this.z.add(this.y.add(b.onDidChangeVisibility)),
												b
											);
										}
									},
								}),
							));
					}
					set actionRunner(n) {
						this.m.actionRunner = n;
					}
					get actionRunner() {
						return this.m.actionRunner;
					}
					set context(n) {
						(this.m.context = n), this.q?.setActionContext(n);
						for (const g of this.t) g.setActionContext(n);
					}
					getElement() {
						return this.w;
					}
					focus() {
						this.m.focus();
					}
					getItemsWidth() {
						let n = 0;
						for (let g = 0; g < this.m.length(); g++) n += this.m.getWidth(g);
						return n;
					}
					getItemAction(n) {
						return this.m.getAction(n);
					}
					getItemWidth(n) {
						return this.m.getWidth(n);
					}
					getItemsLength() {
						return this.m.length();
					}
					setAriaLabel(n) {
						this.m.setAriaLabel(n);
					}
					setActions(n, g) {
						this.F();
						const p = n ? n.slice(0) : [];
						(this.u = !!(g && g.length > 0)),
							this.u &&
								g &&
								((this.n.menuActions = g.slice(0)), p.push(this.n)),
							p.forEach((o) => {
								this.m.push(o, {
									icon: this.f.icon ?? !0,
									label: this.f.label ?? !1,
									keybinding: this.C(o),
								});
							});
					}
					isEmpty() {
						return this.m.isEmpty();
					}
					C(n) {
						return this.f.getKeyBinding?.(n)?.getLabel() ?? void 0;
					}
					F() {
						(this.t = []), this.z.clear(), this.m.clear();
					}
					dispose() {
						this.F(), this.z.dispose(), super.dispose();
					}
				}
				e.$jpb = a;
				class h extends w.$rj {
					static {
						this.ID = "toolbar.toggle.more";
					}
					constructor(n, g) {
						(g = g || r.localize(30, null)),
							super(h.ID, g, void 0, !0),
							(this.a = []),
							(this.b = n);
					}
					async run() {
						this.b();
					}
					get menuActions() {
						return this.a;
					}
					set menuActions(n) {
						this.a = n;
					}
				}
				e.$kpb = h;
			},
		),
		