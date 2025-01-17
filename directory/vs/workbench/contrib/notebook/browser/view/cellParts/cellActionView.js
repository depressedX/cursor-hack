import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/types.js';
import '../../../../../../base/browser/touch.js';
import '../../../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../../../base/browser/ui/iconLabel/iconLabels.js';
import '../../../../../../base/common/themables.js';
import '../../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../../platform/actions/common/actions.js';
import '../../../../../../platform/contextview/browser/contextView.js';
import '../../../../../../platform/keybinding/common/keybinding.js';
import '../../../../../../platform/theme/common/themeService.js';
import '../../../../../../platform/hover/browser/hover.js';
define(
			de[801],
			he([1, 0, 7, 28, 159, 95, 182, 26, 92, 11, 49, 39, 35, 72]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$O3b = e.$N3b = e.$M3b = void 0),
					(t = mt(t)),
					(i = mt(i));
				class n extends m.$Lyb {
					u() {
						this.m.label &&
							this.I &&
							t.$hhb(this.I, ...(0, C.$Sib)(this.eb.label ?? ""));
					}
				}
				e.$M3b = n;
				class g extends m.$Lyb {
					render(f) {
						super.render(f),
							f.classList.add("notebook-action-view-item"),
							(this.b = document.createElement("a")),
							f.appendChild(this.b),
							this.u();
					}
					u() {
						this.b &&
							(this.b.classList.add("notebook-label"),
							(this.b.innerText = this._action.label));
					}
				}
				e.$N3b = g;
				let p = class extends m.$Nyb {
					constructor(f, b, s, l, y, $, v, S, I) {
						super(
							f,
							{
								...b,
								hoverDelegate: b?.hoverDelegate ?? (0, E.$cib)("element"),
							},
							$,
							v,
							S,
						),
							(this.renderLabel = s),
							(this.subActionProvider = l),
							(this.subActionViewItemProvider = y),
							(this.S = I);
					}
					render(f) {
						super.render(f),
							f.classList.add("notebook-action-view-item"),
							f.classList.add("notebook-action-view-item-unified"),
							(this.P = document.createElement("a")),
							f.appendChild(this.P),
							(this.Q = this.D(
								this.S.setupManagedHover(
									this.m.hoverDelegate ?? (0, E.$cib)("element"),
									this.P,
									"",
								),
							)),
							this.u();
						for (const b of [t.$$gb.CLICK, t.$$gb.MOUSE_DOWN, w.EventType.Tap])
							this.D(t.$0fb(f, b, (s) => this.onClick(s, !0)));
					}
					onClick(f, b = !1) {
						t.$ahb.stop(f, !0);
						const s = i.$ug(this._context)
							? this.m?.useEventAsContext
								? f
								: { preserveFocus: b }
							: this._context;
						this.actionRunner.run(this.R ?? this._action, s);
					}
					u() {
						const f = this.subActionProvider.getActions();
						if (this.P) {
							const b = f[0];
							if (((this.R = b), b && b instanceof r.$2X)) {
								const s = this.element;
								if (s && b.item.icon && d.ThemeIcon.isThemeIcon(b.item.icon)) {
									const l = d.ThemeIcon.asClassNameArray(b.item.icon);
									s.classList.forEach((y) => {
										y.startsWith("codicon-") && s.classList.remove(y);
									}),
										s.classList.add(...l);
								}
								this.renderLabel &&
									(this.P.classList.add("notebook-label"),
									(this.P.innerText = this._action.label),
									this.Q?.update(b.tooltip.length ? b.tooltip : b.label));
							} else
								this.renderLabel &&
									(this.P.classList.add("notebook-label"),
									(this.P.innerText = this._action.label),
									this.Q?.update(
										this._action.tooltip.length
											? this._action.tooltip
											: this._action.label,
									));
						}
					}
				};
				(e.$O3b = p),
					(e.$O3b = p =
						Ne([j(5, a.$uZ), j(6, u.$Xxb), j(7, h.$iP), j(8, c.$Uyb)], p));
			},
		),
		