import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../../base/browser/ui/toolbar/toolbar.js';
import '../../../../../base/common/actions.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/scrollable.js';
import '../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../../platform/actions/common/actions.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../platform/contextview/browser/contextView.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../platform/keybinding/common/keybinding.js';
import '../controller/coreActions.js';
import '../../common/notebookCommon.js';
import './notebookKernelView.js';
import '../view/cellParts/cellActionView.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../services/assignment/common/assignmentService.js';
import '../../../../../base/common/async.js';
import '../../../../../platform/actions/browser/toolbar.js';
import '../../../../../platform/hover/browser/hover.js';
define(
			de[3574],
			he([
				1, 0, 7, 203, 461, 50, 6, 3, 195, 92, 11, 10, 49, 5, 39, 238, 70, 1855,
				801, 18, 708, 15, 173, 72,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*scrollableElement*/,
				w /*toolbar*/,
				E /*actions*/,
				C /*event*/,
				d /*lifecycle*/,
				m /*scrollable*/,
				r /*menuEntryActionViewItem*/,
				u /*actions*/,
				a /*configuration*/,
				h /*contextView*/,
				c /*instantiation*/,
				n /*keybinding*/,
				g /*coreActions*/,
				p /*notebookCommon*/,
				o /*notebookKernelView*/,
				f /*cellActionView*/,
				b /*editorService*/,
				s /*assignmentService*/,
				l /*async*/,
				y /*toolbar*/,
				$ /*hover*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$k4b = e.RenderLabel = void 0),
					(e.$j4b = S),
					(e.$l4b = N),
					(e.$m4b = A),
					(t = mt(t));
				var v;
				(function (O) {
					(O[(O.Always = 0)] = "Always"),
						(O[(O.Never = 1)] = "Never"),
						(O[(O.Dynamic = 2)] = "Dynamic");
				})(v || (e.RenderLabel = v = {}));
				function S(O) {
					switch (O) {
						case !0:
							return v.Always;
						case !1:
							return v.Never;
						case "always":
							return v.Always;
						case "never":
							return v.Never;
						case "dynamic":
							return v.Dynamic;
					}
				}
				const I = 21,
					T = 21,
					P = 8;
				class k {
					constructor(B, U, z, F) {
						(this.notebookEditor = B),
							(this.editorToolbar = U),
							(this.goToMenu = z),
							(this.instantiationService = F);
					}
					actionProvider(B, U) {
						if (B.id === g.$o5b)
							return this.instantiationService.createInstance(
								o.$c4b,
								B,
								this.notebookEditor,
								U,
							);
						if (B instanceof u.$2X)
							return this.instantiationService.createInstance(f.$N3b, B, {
								hoverDelegate: U.hoverDelegate,
							});
						if (
							B instanceof u.$1X &&
							B.item.submenu.id === u.$XX.NotebookCellExecuteGoTo.id
						)
							return this.instantiationService.createInstance(
								f.$O3b,
								B,
								{ hoverDelegate: U.hoverDelegate },
								!0,
								{
									getActions: () =>
										this.goToMenu
											.getActions()
											.find(([z]) => z === "navigation/execute")?.[1] ?? [],
								},
								this.actionProvider.bind(this),
							);
					}
					calculateActions(B) {
						const U = this.editorToolbar.primaryActions,
							z = this.editorToolbar.secondaryActions,
							F = N(U, z, B);
						return {
							primaryActions: F.primaryActions.map((x) => x.action),
							secondaryActions: F.secondaryActions,
						};
					}
				}
				class L {
					constructor(B, U, z, F) {
						(this.notebookEditor = B),
							(this.editorToolbar = U),
							(this.goToMenu = z),
							(this.instantiationService = F);
					}
					actionProvider(B, U) {
						if (B.id === g.$o5b)
							return this.instantiationService.createInstance(
								o.$c4b,
								B,
								this.notebookEditor,
								U,
							);
						if (B instanceof u.$2X)
							return this.instantiationService.createInstance(r.$Lyb, B, {
								hoverDelegate: U.hoverDelegate,
							});
						if (B instanceof u.$1X)
							return B.item.submenu.id === u.$XX.NotebookCellExecuteGoTo.id
								? this.instantiationService.createInstance(
										f.$O3b,
										B,
										{ hoverDelegate: U.hoverDelegate },
										!1,
										{
											getActions: () =>
												this.goToMenu
													.getActions()
													.find(([z]) => z === "navigation/execute")?.[1] ?? [],
										},
										this.actionProvider.bind(this),
									)
								: this.instantiationService.createInstance(r.$Nyb, B, {
										hoverDelegate: U.hoverDelegate,
									});
					}
					calculateActions(B) {
						const U = this.editorToolbar.primaryActions,
							z = this.editorToolbar.secondaryActions,
							F = N(U, z, B);
						return {
							primaryActions: F.primaryActions.map((x) => x.action),
							secondaryActions: F.secondaryActions,
						};
					}
				}
				class D {
					constructor(B, U, z, F) {
						(this.notebookEditor = B),
							(this.editorToolbar = U),
							(this.goToMenu = z),
							(this.instantiationService = F);
					}
					actionProvider(B, U) {
						if (B.id === g.$o5b)
							return this.instantiationService.createInstance(
								o.$c4b,
								B,
								this.notebookEditor,
								U,
							);
						const z = this.editorToolbar.primaryActions.find(
							(F) => F.action.id === B.id,
						);
						return !z || z.renderLabel
							? B instanceof u.$2X
								? this.instantiationService.createInstance(f.$N3b, B, {
										hoverDelegate: U.hoverDelegate,
									})
								: B instanceof u.$1X &&
										B.item.submenu.id === u.$XX.NotebookCellExecuteGoTo.id
									? this.instantiationService.createInstance(
											f.$O3b,
											B,
											{ hoverDelegate: U.hoverDelegate },
											!0,
											{
												getActions: () =>
													this.goToMenu
														.getActions()
														.find(([F]) => F === "navigation/execute")?.[1] ??
													[],
											},
											this.actionProvider.bind(this),
										)
									: void 0
							: (B instanceof u.$2X &&
									this.instantiationService.createInstance(r.$Lyb, B, {
										hoverDelegate: U.hoverDelegate,
									}),
								B instanceof u.$1X
									? B.item.submenu.id === u.$XX.NotebookCellExecuteGoTo.id
										? this.instantiationService.createInstance(
												f.$O3b,
												B,
												{ hoverDelegate: U.hoverDelegate },
												!1,
												{
													getActions: () =>
														this.goToMenu
															.getActions()
															.find(([F]) => F === "navigation/execute")?.[1] ??
														[],
												},
												this.actionProvider.bind(this),
											)
										: this.instantiationService.createInstance(r.$Nyb, B, {
												hoverDelegate: U.hoverDelegate,
											})
									: void 0);
					}
					calculateActions(B) {
						const U = this.editorToolbar.primaryActions,
							z = this.editorToolbar.secondaryActions,
							F = A(U, z, B);
						return {
							primaryActions: F.primaryActions.map((x) => x.action),
							secondaryActions: F.secondaryActions,
						};
					}
				}
				let M = class extends d.$1c {
					get primaryActions() {
						return this.n;
					}
					get secondaryActions() {
						return this.q;
					}
					set visible(B) {
						this.w !== B && ((this.w = B), this.y.fire(B));
					}
					get useGlobalToolbar() {
						return this.s;
					}
					constructor(B, U, z, F, x, H, q, V, G, K, J) {
						super(),
							(this.notebookEditor = B),
							(this.contextKeyService = U),
							(this.notebookOptions = z),
							(this.domNode = F),
							(this.F = x),
							(this.G = H),
							(this.H = q),
							(this.I = V),
							(this.J = G),
							(this.L = K),
							(this.M = J),
							(this.s = !1),
							(this.u = v.Always),
							(this.w = !1),
							(this.y = this.D(new C.$re())),
							(this.onDidChangeVisibility = this.y.event),
							(this.z = null),
							(this.n = []),
							(this.q = []),
							this.N(),
							this.D(
								C.Event.debounce(
									this.J.onDidActiveEditorChange,
									(W, X) => W,
									200,
								)(this.O, this),
							),
							this.P();
					}
					N() {
						(this.f = document.createElement("div")),
							this.f.classList.add("notebook-toolbar-left"),
							(this.c = new i.$8hb(this.f, {
								vertical: m.ScrollbarVisibility.Hidden,
								horizontal: m.ScrollbarVisibility.Visible,
								horizontalScrollbarSize: 3,
								useShadows: !1,
								scrollYToX: !0,
							})),
							this.D(this.c),
							t.$fhb(this.domNode, this.c.getDomNode()),
							(this.g = document.createElement("div")),
							this.g.classList.add("notebook-toolbar-right"),
							t.$fhb(this.domNode, this.g);
					}
					O() {
						if (
							this.J.activeEditorPane?.getId() === p.$O6 &&
							this.J.activeEditorPane.getControl() === this.notebookEditor
						) {
							this.S();
							return;
						}
					}
					P() {
						(this.h = this.D(
							this.I.createMenu(
								this.notebookEditor.creationOptions.menuIds.notebookToolbar,
								this.contextKeyService,
							),
						)),
							(this.j = this.D(
								this.I.createMenu(
									u.$XX.NotebookCellExecuteGoTo,
									this.contextKeyService,
								),
							)),
							(this.s = this.notebookOptions.getDisplayOptions().globalToolbar),
							(this.u = this.R(this.G.getValue(p.$56.globalToolbarShowLabel))),
							this.Q();
						const B = {
								ui: !0,
								notebookEditor: this.notebookEditor,
								source: "notebookToolbar",
							},
							U = (q, V) => {
								if (q.id === g.$o5b)
									return this.F.createInstance(
										o.$c4b,
										q,
										this.notebookEditor,
										V,
									);
								if (this.u !== v.Never) {
									const G = this.n.find((K) => K.action.id === q.id);
									return G && G.renderLabel
										? q instanceof u.$2X
											? this.F.createInstance(f.$N3b, q, {
													hoverDelegate: V.hoverDelegate,
												})
											: void 0
										: q instanceof u.$2X
											? this.F.createInstance(r.$Lyb, q, {
													hoverDelegate: V.hoverDelegate,
												})
											: void 0;
								} else
									return q instanceof u.$2X
										? this.F.createInstance(r.$Lyb, q, {
												hoverDelegate: V.hoverDelegate,
											})
										: void 0;
							},
							z = this.D(this.F.createInstance($.$Vyb, "element", !0, {}));
						z.setInstantHoverTimeLimit(600);
						const F = {
							hiddenItemStrategy: y.HiddenItemStrategy.RenderInSecondaryGroup,
							resetMenu: u.$XX.NotebookToolbar,
							actionViewItemProvider: (q, V) => this.t.actionProvider(q, V),
							getKeyBinding: (q) => this.L.lookupKeybinding(q.id),
							renderDropdownAsChildElement: !0,
							hoverDelegate: z,
						};
						(this.m = this.F.createInstance(y.$Syb, this.f, F)),
							this.D(this.m),
							(this.m.context = B),
							(this.r = new w.$jpb(this.g, this.H, {
								getKeyBinding: (q) => this.L.lookupKeybinding(q.id),
								actionViewItemProvider: U,
								renderDropdownAsChildElement: !0,
								hoverDelegate: z,
							})),
							this.D(this.r),
							(this.r.context = B),
							this.S();
						let x = !1,
							H;
						this.D(
							this.h.onDidChange(() => {
								if (x) {
									H = () => this.S();
									return;
								}
								this.notebookEditor.isVisible && this.S();
							}),
						),
							this.D(
								this.m.onDidChangeDropdownVisibility((q) => {
									(x = q),
										H &&
											!q &&
											(setTimeout(() => {
												H?.();
											}, 0),
											(H = void 0));
								}),
							),
							this.D(
								this.notebookOptions.onDidChangeOptions((q) => {
									q.globalToolbar !== void 0 &&
										((this.s =
											this.notebookOptions.getDisplayOptions().globalToolbar),
										this.S());
								}),
							),
							this.D(
								this.G.onDidChangeConfiguration((q) => {
									if (q.affectsConfiguration(p.$56.globalToolbarShowLabel)) {
										(this.u = this.R(
											this.G.getValue(p.$56.globalToolbarShowLabel),
										)),
											this.Q(),
											this.m.getElement().remove(),
											this.m.dispose(),
											(this.m = this.F.createInstance(y.$Syb, this.f, F)),
											this.D(this.m),
											(this.m.context = B),
											this.S();
										return;
									}
								}),
							),
							this.M &&
								this.M.getTreatment("nbtoolbarineditor").then((q) => {
									q !== void 0 && this.s !== q && ((this.s = q), this.S());
								});
					}
					Q() {
						switch (this.u) {
							case v.Always:
								this.t = new k(this.notebookEditor, this, this.j, this.F);
								break;
							case v.Never:
								this.t = new L(this.notebookEditor, this, this.j, this.F);
								break;
							case v.Dynamic:
								this.t = new D(this.notebookEditor, this, this.j, this.F);
								break;
						}
					}
					R(B) {
						switch (B) {
							case !0:
								return v.Always;
							case !1:
								return v.Never;
							case "always":
								return v.Always;
							case "never":
								return v.Never;
							case "dynamic":
								return v.Dynamic;
						}
					}
					S() {
						if (!this.notebookEditor.hasModel()) {
							this.C?.dispose(), (this.C = void 0), (this.visible = !1);
							return;
						}
						this.C ||
							(this.s
								? (this.C = (0, l.$Oh)(async () => {
										await this.U(), (this.visible = !0), (this.C = void 0);
									}, 50))
								: ((this.domNode.style.display = "none"),
									(this.C = void 0),
									(this.visible = !1)));
					}
					async U() {
						const B = this.h.getActions({
							shouldForwardArgs: !0,
							renderShortTitle: !0,
						});
						this.domNode.style.display = "flex";
						const U = B.filter((q) => /^navigation/.test(q[0])),
							z = [];
						U.sort((q, V) =>
							q[0] === "navigation" ? 1 : V[0] === "navigation" ? -1 : 0,
						).forEach((q, V) => {
							z.push(...q[1]), V < U.length - 1 && z.push(new E.$tj());
						});
						const F = B.find((q) => /^status/.test(q[0])),
							x = F ? F[1] : [],
							H = B.filter(
								(q) => !/^navigation/.test(q[0]) && !/^status/.test(q[0]),
							).reduce((q, V) => (q.push(...V[1]), q), []);
						this.m.setActions([], []),
							(this.n = z.map((q) => ({
								action: q,
								size: q instanceof E.$tj ? 1 : 0,
								renderLabel: !0,
								visible: !0,
							}))),
							this.m.setActions(z, H),
							(this.q = H),
							this.r.setActions(x, []),
							(this.q = H),
							this.z &&
								this.z.width >= 0 &&
								this.z.height >= 0 &&
								this.W(this.m),
							this.X();
					}
					W(B) {
						for (let U = 0; U < B.getItemsLength(); U++) {
							const z = B.getItemAction(U);
							if (z && z.id !== "toolbar.toggle.more") {
								const F = this.n.find((x) => x.action.id === z.id);
								F && (F.size = B.getItemWidth(U));
							}
						}
					}
					X() {
						const B = this.m,
							U = this.r;
						if (B && U && this.z && this.z.height >= 0 && this.z.width >= 0) {
							if (
								(this.n.length === 0 &&
									B.getItemsLength() !== this.n.length &&
									this.W(this.m),
								this.n.length === 0)
							)
								return;
							const z = (U.getItemsLength() ? U.getItemWidth(0) : 0) + P,
								F = this.z.width - z - (P + T) - P - P,
								x = this.t.calculateActions(F);
							this.m.setActions(x.primaryActions, x.secondaryActions);
						}
					}
					layout(B) {
						(this.z = B),
							this.s
								? (this.domNode.style.display = "flex")
								: (this.domNode.style.display = "none"),
							this.X();
					}
					dispose() {
						(this.m.context = void 0),
							(this.r.context = void 0),
							this.m.dispose(),
							this.r.dispose(),
							(this.m = null),
							(this.r = null),
							this.C?.dispose(),
							(this.C = void 0),
							super.dispose();
					}
				};
				(e.$k4b = M),
					(e.$k4b = M =
						Ne(
							[
								j(4, c.$Li),
								j(5, a.$gj),
								j(6, h.$Xxb),
								j(7, u.$YX),
								j(8, b.$IY),
								j(9, n.$uZ),
								j(10, s.$h4b),
							],
							M,
						));
				function N(O, B, U) {
					return R(O, B, U, !1);
				}
				function A(O, B, U) {
					if (O.length === 0)
						return { primaryActions: [], secondaryActions: B };
					const z = O.filter((q) => q.size !== 0).length;
					if (
						O.map((q) => q.size).reduce((q, V) => q + V, 0) + (z - 1) * P <=
						U
					)
						return (
							O.forEach((q) => {
								q.renderLabel = !0;
							}),
							R(O, B, U, !1)
						);
					if (z * I + (z - 1) * P > U)
						return (
							O.forEach((q) => {
								q.renderLabel = !1;
							}),
							R(O, B, U, !0)
						);
					let x = 0,
						H = -1;
					for (let q = 0; q < O.length; q++)
						if (((x += O[q].size + P), O[q].action instanceof E.$tj)) {
							const V = O.slice(q + 1).filter((K) => K.size !== 0);
							x + (V.length === 0 ? 0 : V.length * I + (V.length - 1) * P) <=
								U && (H = q);
						} else continue;
					return H < 0
						? (O.forEach((q) => {
								q.renderLabel = !1;
							}),
							R(O, B, U, !0))
						: (O.slice(0, H + 1).forEach((q) => {
								q.renderLabel = !0;
							}),
							O.slice(H + 1).forEach((q) => {
								q.renderLabel = !1;
							}),
							{ primaryActions: O, secondaryActions: B });
				}
				function R(O, B, U, z) {
					const F = [],
						x = [];
					let H = 0,
						q = !1,
						V = !1;
					if (O.length === 0)
						return { primaryActions: [], secondaryActions: B };
					for (let G = 0; G < O.length; G++) {
						const K = O[G],
							J = z ? (K.size === 0 ? 0 : I) : K.size;
						if (
							!(
								K.action instanceof E.$tj &&
								F.length > 0 &&
								F[F.length - 1].action instanceof E.$tj
							) &&
							!(K.action instanceof E.$tj && !q)
						)
							if (H + J <= U && !V)
								(H += P + J),
									F.push(K),
									J !== 0 && (q = !0),
									K.action instanceof E.$tj && (q = !1);
							else if (((V = !0), J === 0)) F.push(K);
							else {
								if (K.action instanceof E.$tj) continue;
								x.push(K.action);
							}
					}
					for (let G = F.length - 1; G > 0; G--) {
						const K = F[G];
						if (K.size !== 0) {
							K.action instanceof E.$tj && F.splice(G, 1);
							break;
						}
					}
					if (
						(F.length && F[F.length - 1].action instanceof E.$tj && F.pop(),
						x.length !== 0 && x.push(new E.$tj()),
						z)
					) {
						const G = F.findIndex(
							(K) => K.action.id === "notebook.cell.insertMarkdownCellBelow",
						);
						G !== -1 && F.splice(G, 1);
					}
					return { primaryActions: F, secondaryActions: [...x, ...B] };
				}
			},
		),
		