import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../part.js';
import '../../../../base/browser/touch.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/statusbar/browser/statusbar.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../base/common/actions.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/theme.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/storage/common/storage.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/browser/mouseEvent.js';
import '../../actions/layoutActions.js';
import '../../../../base/common/types.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/theme/common/theme.js';
import '../../../../base/common/hash.js';
import '../../../../platform/hover/browser/hover.js';
import './statusbarActions.js';
import './statusbarModel.js';
import './statusbarItem.js';
import '../../../common/contextkeys.js';
import '../../../../base/common/event.js';
import '../../../../css!vs/workbench/browser/parts/statusbar/media/statusbarpart.js';
define(
			de[3802],
			he([
				1, 0, 4, 3, 550, 159, 5, 166, 49, 50, 35, 123, 25, 51, 7, 21, 96, 20,
				24, 168, 716, 28, 8, 212, 136, 72, 3624, 3626, 3625, 100, 6, 2353,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*lifecycle*/,
				w /*part*/,
				E /*touch*/,
				C /*instantiation*/,
				d /*statusbar*/,
				m /*contextView*/,
				r /*actions*/,
				u /*themeService*/,
				a /*theme*/,
				h /*workspace*/,
				c /*colorRegistry*/,
				n /*dom*/,
				g /*storage*/,
				p /*layoutService*/,
				o /*extensions*/,
				f /*arrays*/,
				b /*mouseEvent*/,
				s /*layoutActions*/,
				l /*types*/,
				y /*contextkey*/,
				$ /*theme*/,
				v /*hash*/,
				S /*hover*/,
				I /*statusbarActions*/,
				T /*statusbarModel*/,
				P /*statusbarItem*/,
				k /*contextkeys*/,
				L /*event*/,
) {
				"use strict";
				var D, M;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$c6b = e.$b6b = e.$a6b = e.$_5b = void 0);
				let N = class extends w.Part {
					static {
						D = this;
					}
					static {
						this.HEIGHT = 22;
					}
					getViewModel() {
						return this.viewModel;
					}
					constructor(z, F, x, H, q, V, G, K) {
						super(z, { hasTitle: !1 }, x, q, V),
							(this.gb = F),
							(this.hb = H),
							(this.ib = q),
							(this.jb = G),
							(this.kb = K),
							(this.minimumWidth = 0),
							(this.maximumWidth = Number.POSITIVE_INFINITY),
							(this.minimumHeight = D.HEIGHT),
							(this.maximumHeight = D.HEIGHT),
							(this.y = []),
							(this.viewModel = this.D(new T.$85b(this.ib))),
							(this.onDidChangeEntryVisibility =
								this.viewModel.onDidChangeEntryVisibility),
							(this.$ = this.D(new L.$re())),
							(this.onWillDispose = this.$.event),
							(this.db = this.D(
								this.gb.createInstance(S.$Vyb, "element", !0, (J, W) => ({
									persistence: { hideOnKeyDown: !0, sticky: W },
								})),
							)),
							(this.eb = this.D(new i.$2c())),
							(this.fb = new Set()),
							this.lb();
					}
					lb() {
						this.D(this.onDidChangeEntryVisibility(() => this.ub())),
							this.D(
								this.hb.onDidChangeWorkbenchState(() => this.updateStyles()),
							);
					}
					addEntry(z, F, x, H = 0) {
						let q;
						return (
							(0, d.$f6b)(H)
								? (q = H)
								: (q = { primary: H, secondary: (0, v.$Aj)(F) }),
							this.element ? this.nb(z, F, x, q) : this.mb(z, F, x, q)
						);
					}
					mb(z, F, x, H) {
						const q = { entry: z, id: F, alignment: x, priority: H };
						return (
							this.y.push(q),
							{
								update: (G) => {
									q.accessor ? q.accessor.update(G) : (q.entry = G);
								},
								dispose: () => {
									q.accessor
										? q.accessor.dispose()
										: (this.y = this.y.filter((G) => G !== q));
								},
							}
						);
					}
					nb(z, F, x, H) {
						const q = this.ob(F, x),
							V = this.gb.createInstance(P.$$5b, q, z, this.db),
							G = new (class {
								constructor() {
									(this.id = F),
										(this.alignment = x),
										(this.priority = H),
										(this.container = q),
										(this.labelContainer = V.labelContainer);
								}
								get name() {
									return V.name;
								}
								get hasCommand() {
									return V.hasCommand;
								}
							})(),
							{ needsFullRefresh: K } = this.pb(G, !0);
						return (
							K ? this.sb() : this.tb(G),
							{
								update: (J) => {
									V.update(J);
								},
								dispose: () => {
									const { needsFullRefresh: J } = this.pb(G, !1);
									J ? this.sb() : q.remove(), (0, i.$Vc)(V);
								},
							}
						);
					}
					ob(z, F, ...x) {
						const H = document.createElement("div");
						return (
							(H.id = z),
							H.classList.add("statusbar-item"),
							x && H.classList.add(...x),
							F === d.StatusbarAlignment.RIGHT
								? H.classList.add("right")
								: H.classList.add("left"),
							H
						);
					}
					pb(z, F) {
						const x = this.viewModel.entries;
						F ? this.viewModel.add(z) : this.viewModel.remove(z);
						const H = this.viewModel.entries;
						return (
							F ? x.splice(H.indexOf(z), 0, z) : x.splice(x.indexOf(z), 1),
							{ needsFullRefresh: !(0, f.$yb)(x, H) }
						);
					}
					isEntryVisible(z) {
						return !this.viewModel.isHidden(z);
					}
					updateEntryVisibility(z, F) {
						F ? this.viewModel.show(z) : this.viewModel.hide(z);
					}
					focusNextEntry() {
						this.viewModel.focusNextEntry();
					}
					focusPreviousEntry() {
						this.viewModel.focusPreviousEntry();
					}
					isEntryFocused() {
						return this.viewModel.isEntryFocused();
					}
					focus(z = !0) {
						this.getContainer()?.focus();
						const F = this.viewModel.lastFocusedEntry;
						z && F && setTimeout(() => F.labelContainer.focus(), 0);
					}
					Q(z) {
						this.element = z;
						const F = this.D(this.kb.createScoped(this.element));
						return (
							k.$jQb.bindTo(F).set(!0),
							(this.bb = document.createElement("div")),
							this.bb.classList.add("left-items", "items-container"),
							this.element.appendChild(this.bb),
							(this.element.tabIndex = 0),
							(this.cb = document.createElement("div")),
							this.cb.classList.add("right-items", "items-container"),
							this.element.appendChild(this.cb),
							this.D((0, n.$0fb)(z, n.$$gb.CONTEXT_MENU, (x) => this.vb(x))),
							this.D(E.$Qhb.addTarget(z)),
							this.D(
								(0, n.$0fb)(z, E.EventType.Contextmenu, (x) => this.vb(x)),
							),
							this.rb(),
							this.element
						);
					}
					rb() {
						for (this.sb(); this.y.length; ) {
							const z = this.y.shift();
							z &&
								(z.accessor = this.addEntry(
									z.entry,
									z.id,
									z.alignment,
									z.priority.primary,
								));
						}
					}
					sb() {
						const z = (0, l.$wg)(this.bb),
							F = (0, l.$wg)(this.cb);
						(0, n.$9fb)(z), (0, n.$9fb)(F);
						for (const x of [
							...this.viewModel.getEntries(d.StatusbarAlignment.LEFT),
							...this.viewModel
								.getEntries(d.StatusbarAlignment.RIGHT)
								.reverse(),
						])
							(x.alignment === d.StatusbarAlignment.LEFT ? z : F).appendChild(
								x.container,
							);
						this.ub();
					}
					tb(z) {
						const F = this.viewModel.getEntries(z.alignment);
						z.alignment === d.StatusbarAlignment.RIGHT && F.reverse();
						const x = (0, l.$wg)(
								z.alignment === d.StatusbarAlignment.LEFT ? this.bb : this.cb,
							),
							H = F.indexOf(z);
						H + 1 === F.length
							? x.appendChild(z.container)
							: x.insertBefore(z.container, F[H + 1].container),
							this.ub();
					}
					ub() {
						const z = this.viewModel.entries,
							F = new Map();
						for (const V of z)
							this.viewModel.isHidden(V.id) || F.set(V.id, V),
								V.container.classList.remove("compact-left", "compact-right");
						const x = new Map();
						for (const V of F.values())
							if (
								(0, d.$e6b)(V.priority.primary) &&
								V.priority.primary.compact
							) {
								const G = V.priority.primary.id,
									K = F.get(G);
								if (!K) continue;
								let J = x.get(G);
								if (!J) {
									for (const W of x.values())
										if (W.has(G)) {
											J = W;
											break;
										}
									J || ((J = new Map()), x.set(G, J));
								}
								J.set(V.id, V),
									J.set(K.id, K),
									V.priority.primary.alignment === d.StatusbarAlignment.LEFT
										? (K.container.classList.add("compact-left"),
											V.container.classList.add("compact-right"))
										: (K.container.classList.add("compact-right"),
											V.container.classList.add("compact-left"));
							}
						const H = this.w(a.$RFb),
							q = this.w(a.$TFb);
						if (
							((this.eb.value = new i.$Zc()),
							H && q && !(0, $.$gP)(this.h.type))
						)
							for (const [, V] of x)
								for (const G of V.values())
									G.hasCommand &&
										(this.eb.value.add(
											(0, n.$0fb)(G.labelContainer, n.$$gb.MOUSE_OVER, () => {
												V.forEach(
													(K) => (K.labelContainer.style.backgroundColor = H),
												),
													(G.labelContainer.style.backgroundColor = q);
											}),
										),
										this.eb.value.add(
											(0, n.$0fb)(G.labelContainer, n.$$gb.MOUSE_OUT, () => {
												V.forEach(
													(K) => (K.labelContainer.style.backgroundColor = ""),
												);
											}),
										));
					}
					vb(z) {
						n.$ahb.stop(z, !0);
						const F = new b.$2fb((0, n.getWindow)(this.element), z);
						let x;
						this.jb.showContextMenu({
							getAnchor: () => F,
							getActions: () => ((x = this.wb(F)), x),
							onHide: () => {
								x && (0, i.$Wc)(x);
							},
						});
					}
					wb(z) {
						const F = [];
						F.push(
							(0, r.$wj)({
								id: s.$U5b.ID,
								label: (0, t.localize)(3689, null),
								run: () => this.gb.invokeFunction((q) => new s.$U5b().run(q)),
							}),
						),
							F.push(new r.$tj());
						const x = new Set();
						for (const q of this.viewModel.entries)
							x.has(q.id) ||
								(F.push(new I.$95b(q.id, q.name, this.viewModel)), x.add(q.id));
						let H;
						for (let q = z.target; q; q = q.parentElement) {
							const V = this.viewModel.findEntry(q);
							if (V) {
								H = V;
								break;
							}
						}
						return (
							H &&
								(F.push(new r.$tj()),
								F.push(new I.$05b(H.id, H.name, this.viewModel))),
							F
						);
					}
					updateStyles() {
						super.updateStyles();
						const z = (0, l.$wg)(this.getContainer()),
							F = [...this.fb].sort((K, J) => K.priority - J.priority)[0],
							x =
								this.w(
									F?.background ??
										(this.hb.getWorkbenchState() !== h.WorkbenchState.EMPTY
											? a.$KFb
											: a.$LFb),
								) || "";
						z.style.backgroundColor = x;
						const H =
							this.w(
								F?.foreground ??
									(this.hb.getWorkbenchState() !== h.WorkbenchState.EMPTY
										? a.$IFb
										: a.$JFb),
							) || "";
						z.style.color = H;
						const q = this.w(a.$QFb),
							V =
								this.w(
									F?.border ??
										(this.hb.getWorkbenchState() !== h.WorkbenchState.EMPTY
											? a.$MFb
											: a.$OFb),
								) || this.w(c.$OP);
						V
							? (z.classList.add("status-border-top"),
								z.style.setProperty("--status-border-top-color", V))
							: (z.classList.remove("status-border-top"),
								z.style.removeProperty("--status-border-top-color"));
						const G = this.w(a.$NFb);
						this.c || (this.c = (0, n.$Rgb)(z)),
							(this.c.textContent = `

				/* Status bar focus outline */
				.monaco-workbench .part.statusbar:focus {
					outline-color: ${G};
				}

				/* Status bar item focus outline */
				.monaco-workbench .part.statusbar > .items-container > .statusbar-item a:focus-visible {
					outline: 1px solid ${this.w(c.$PP) ?? q};
					outline-offset: ${V ? "-2px" : "-1px"};
				}

				/* Notification Beak */
				.monaco-workbench .part.statusbar > .items-container > .statusbar-item.has-beak > .status-bar-item-beak-container:before {
					border-bottom-color: ${x};
				}
			`);
					}
					layout(z, F, x, H) {
						super.layout(z, F, x, H), super.Z(z, F);
					}
					overrideStyle(z) {
						return (
							this.fb.add(z),
							this.updateStyles(),
							(0, i.$Yc)(() => {
								this.fb.delete(z), this.updateStyles();
							})
						);
					}
					toJSON() {
						return { type: p.Parts.STATUSBAR_PART };
					}
					dispose() {
						this.$.fire(), super.dispose();
					}
				};
				N = D = Ne(
					[
						j(1, C.$Li),
						j(2, u.$iP),
						j(3, h.$Vi),
						j(4, g.$lq),
						j(5, p.$mEb),
						j(6, m.$Xxb),
						j(7, y.$6j),
					],
					N,
				);
				let A = class extends N {
					constructor(z, F, x, H, q, V, G) {
						super(p.Parts.STATUSBAR_PART, z, F, x, H, q, V, G);
					}
				};
				(e.$_5b = A),
					(e.$_5b = A =
						Ne(
							[
								j(0, C.$Li),
								j(1, u.$iP),
								j(2, h.$Vi),
								j(3, g.$lq),
								j(4, p.$mEb),
								j(5, m.$Xxb),
								j(6, y.$6j),
							],
							A,
						));
				let R = class extends N {
					static {
						M = this;
					}
					static {
						this.xb = 1;
					}
					constructor(z, F, x, H, q, V, G, K) {
						const J = M.xb++;
						super(`workbench.parts.auxiliaryStatus.${J}`, F, x, H, q, V, G, K),
							(this.container = z),
							(this.height = N.HEIGHT);
					}
				};
				(e.$a6b = R),
					(e.$a6b =
						R =
						M =
							Ne(
								[
									j(1, C.$Li),
									j(2, u.$iP),
									j(3, h.$Vi),
									j(4, g.$lq),
									j(5, p.$mEb),
									j(6, m.$Xxb),
									j(7, y.$6j),
								],
								R,
							));
				let O = class extends w.$lEb {
					constructor(z, F, x) {
						super("workbench.statusBarService", x, F),
							(this.r = z),
							(this.mainPart = this.D(this.r.createInstance(A))),
							(this.c = this.D(new L.$re())),
							(this.m = this.c.event),
							(this.onDidChangeEntryVisibility =
								this.mainPart.onDidChangeEntryVisibility),
							this.D(this.registerPart(this.mainPart));
					}
					getViewModel() {
						return this.mainPart.getViewModel();
					}
					createAuxiliaryStatusbarPart(z) {
						const F = document.createElement("footer");
						F.classList.add("part", "statusbar"),
							F.setAttribute("role", "status"),
							(F.style.position = "relative"),
							F.setAttribute("aria-live", "off"),
							F.setAttribute("tabindex", "0"),
							z.appendChild(F);
						const x = this.r.createInstance(R, F),
							H = this.registerPart(x);
						return (
							x.create(F),
							L.Event.once(x.onWillDispose)(() => H.dispose()),
							this.c.fire(x),
							x
						);
					}
					createScoped(z, F) {
						return F.add(this.r.createInstance(B, z));
					}
					addEntry(z, F, x, H = 0) {
						return z.showInAllWindows
							? this.s(z, F, x, H)
							: this.mainPart.addEntry(z, F, x, H);
					}
					s(z, F, x, H = 0) {
						const q = new i.$Zc(),
							V = new Set();
						function G(K) {
							const J = new i.$Zc();
							J.add(K.onWillDispose(() => J.dispose()));
							const W = J.add(K.addEntry(z, F, x, H));
							V.add(W),
								J.add((0, i.$Yc)(() => V.delete(W))),
								q.add(J),
								J.add((0, i.$Yc)(() => q.delete(J)));
						}
						for (const K of this.parts) G(K);
						return (
							q.add(this.m((K) => G(K))),
							{
								update: (K) => {
									for (const J of V) J.update(K);
								},
								dispose: () => q.dispose(),
							}
						);
					}
					isEntryVisible(z) {
						return this.mainPart.isEntryVisible(z);
					}
					updateEntryVisibility(z, F) {
						for (const x of this.parts) x.updateEntryVisibility(z, F);
					}
					focus(z) {
						this.activePart.focus(z);
					}
					focusNextEntry() {
						this.activePart.focusNextEntry();
					}
					focusPreviousEntry() {
						this.activePart.focusPreviousEntry();
					}
					isEntryFocused() {
						return this.activePart.isEntryFocused();
					}
					overrideStyle(z) {
						const F = new i.$Zc();
						for (const x of this.parts) F.add(x.overrideStyle(z));
						return F;
					}
				};
				(e.$b6b = O),
					(e.$b6b = O = Ne([j(0, C.$Li), j(1, g.$lq), j(2, u.$iP)], O));
				let B = class extends i.$1c {
					constructor(z, F) {
						super(),
							(this.c = z),
							(this.f = F),
							(this.onDidChangeEntryVisibility =
								this.c.onDidChangeEntryVisibility);
					}
					getViewModel() {
						return this.f.getViewModel();
					}
					createAuxiliaryStatusbarPart(z) {
						return this.f.createAuxiliaryStatusbarPart(z);
					}
					createScoped(z, F) {
						return this.f.createScoped(z, F);
					}
					getPart() {
						return this.c;
					}
					addEntry(z, F, x, H = 0) {
						return this.c.addEntry(z, F, x, H);
					}
					isEntryVisible(z) {
						return this.c.isEntryVisible(z);
					}
					updateEntryVisibility(z, F) {
						this.c.updateEntryVisibility(z, F);
					}
					focus(z) {
						this.c.focus(z);
					}
					focusNextEntry() {
						this.c.focusNextEntry();
					}
					focusPreviousEntry() {
						this.c.focusPreviousEntry();
					}
					isEntryFocused() {
						return this.c.isEntryFocused();
					}
					overrideStyle(z) {
						return this.c.overrideStyle(z);
					}
				};
				(e.$c6b = B),
					(e.$c6b = B = Ne([j(1, d.$d6b)], B)),
					(0, o.$lK)(d.$d6b, O, o.InstantiationType.Eager);
			},
		),
		