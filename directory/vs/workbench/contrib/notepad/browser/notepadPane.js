import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../common/views.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../browser/parts/views/viewPane.js';
import './notepad.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import './constants.js';
import '../../../browser/parts/views/treeView.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/dialogs/common/dialogs.js';
import './notepadActions.js';
import '../../../../platform/quickinput/common/quickInput.js';
define(
			de[4027],
			he([
				1, 0, 4, 10, 8, 49, 39, 35, 60, 5, 41, 32, 72, 31, 8, 146, 467, 11, 3,
				45, 558, 854, 14, 57, 1743, 63,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*configuration*/,
				w /*contextkey*/,
				E /*contextView*/,
				C /*keybinding*/,
				d /*themeService*/,
				m /*views*/,
				r /*instantiation*/,
				u /*opener*/,
				a /*telemetry*/,
				h /*hover*/,
				c /*commands*/,
				n /*contextkey*/,
				g /*viewPane*/,
				p /*notepad*/,
				o /*actions*/,
				f /*lifecycle*/,
				b /*reactiveStorageService*/,
				s /*constants*/,
				l /*treeView*/,
				y /*codicons*/,
				$ /*dialogs*/,
				v /*notepadActions*/,
				S /*quickInput*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xAc = void 0);
				let I = class extends g.$TMb {
					static {
						this.ID = s.$B9b;
					}
					static {
						this.TITLE = (0, t.localize2)(8245, "Notepad");
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V) {
						super(
							{
								...P,
								titleMenuId: s.$C9b,
								showActions: g.ViewPaneShowActions.Default,
							},
							k,
							L,
							D,
							M,
							N,
							A,
							R,
							O,
							B,
							U,
						),
							(this.c = z),
							(this.f = F),
							(this.g = x),
							(this.h = H),
							(this.j = q),
							(this.m = V),
							(this.a = !1),
							this.onDidChangeBodyVisibility(() => {
								this.n();
							}),
							(this.b = this.D(A.createInstance(l.$Stc, P.id, P.title)));
						const G = {
							isTreeEmpty: Object.keys(z.notepadsData.notepads).length === 0,
							getChildren: async () => {
								const K = z.notepadsData,
									J = Object.values(K.notepads).map((W) => ({
										label: { label: W.name },
										handle: W.id,
										collapsibleState: m.TreeItemCollapsibleState.None,
										themeIcon: { id: "book" },
									}));
								return J.length === 0
									? [
											{
												label: { label: (0, t.localize)(8237, null) },
												handle: "create-new-notepad",
												collapsibleState: m.TreeItemCollapsibleState.None,
												themeIcon: { id: "add" },
												contextValue: "create-new-notepad",
											},
										]
									: J;
							},
						};
						(this.b.dataProvider = G),
							this.b.setVisibility(!0),
							this.D(
								this.g.onChangeEffectManuallyDisposed({
									deps: [
										() => {
											const K = this.c.notepadsData;
											return Object.values(K.notepads).map((J) => ({
												name: J.name,
												handle: J.id,
											}));
										},
									],
									onChange: () => {
										this.n();
									},
								}),
							),
							this.D(
								this.g.onChangeEffectManuallyDisposed({
									deps: [() => this.c.notepadsData],
									onChange: () => {
										this.n();
									},
								}),
							),
							this.b.getTree().onDidOpen(({ element: K }) => {
								K &&
									(K.handle === "create-new-notepad"
										? this.j.executeCommand(v.$wAc.ID)
										: this.f.openNotepad(K.handle));
							});
					}
					focus() {
						this.n();
					}
					render() {
						super.render(), this.n();
					}
					n() {
						this.b.refresh(),
							this.container &&
								(this.b.show(this.container),
								setTimeout(() => {
									if (!this.container) return;
									const P = this.container.clientWidth,
										k = this.container.clientHeight;
									P > 0 && k > 0 && this.b.layout(k, P);
								}));
					}
					W(P) {
						(this.container = P), super.W(P), this.b.show(P);
						const k = new ResizeObserver(() => {
							this.n();
						});
						if (
							(k.observe(P), this.D((0, f.$Yc)(() => k.disconnect())), !this.a)
						) {
							(this.a = !0),
								this.b.getTree().onDidOpen(({ element: M }) => {
									M &&
										(M.handle === "create-new-notepad"
											? this.j.executeCommand("notepad.new")
											: this.f.openNotepad(M.handle));
								});
							const L = this.b;
							if (!L) return;
							const D = this;
							this.D(
								(0, o.$4X)(
									class extends o.$3X {
										constructor() {
											super({
												id: "notepad.rename",
												title: (0, t.localize)(8238, null),
												icon: y.$ak.edit,
												menu: [
													{
														id: o.$XX.ViewItemContext,
														group: "inline",
														order: 1,
														when: n.$Kj.notEquals(
															"viewItem",
															"create-new-notepad",
														),
													},
												],
											});
										}
										async run(M, N) {
											const A = M.get(S.$DJ),
												R = M.get(p.$y9b);
											if (!L) return;
											const O = L.getNodeByHandle(N.$treeItemHandle);
											if (O && O.handle) {
												const B = O.label?.label ?? s.$F9b,
													U = await A.input({
														title: (0, t.localize)(8239, null),
														placeHolder: (0, t.localize)(8240, null),
														value: B,
														validateInput: async (z) =>
															z.trim().length === 0
																? {
																		content: (0, t.localize)(8241, null),
																		severity: 3,
																	}
																: null,
													});
												U !== void 0 &&
													(await R.updateNotepadData(O.handle, { name: U }),
													D.n());
											}
										}
									},
								),
							),
								this.D(
									(0, o.$4X)(
										class extends o.$3X {
											constructor() {
												super({
													id: "notepad.delete",
													title: (0, t.localize)(8242, null),
													icon: y.$ak.trash,
													menu: [
														{
															id: o.$XX.ViewItemContext,
															group: "inline",
															order: 2,
															when: n.$Kj.notEquals(
																"viewItem",
																"create-new-notepad",
															),
														},
													],
												});
											}
											async run(M, N) {
												const A = M.get($.$GO),
													R = M.get(p.$z9b);
												if (!L) return;
												const O = L.getNodeByHandle(N.$treeItemHandle);
												O &&
													O.handle &&
													(
														await A.confirm({
															message: (0, t.localize)(
																8243,
																null,
																O.label?.label ?? s.$F9b,
															),
															primaryButton: (0, t.localize)(8244, null),
															type: "warning",
														})
													).confirmed &&
													(await R.deleteNotepad(O.handle), D.n());
											}
										},
									),
								);
						}
					}
					dispose() {
						super.dispose();
					}
				};
				(e.$xAc = I),
					(e.$xAc = I =
						Ne(
							[
								j(1, C.$uZ),
								j(2, E.$Xxb),
								j(3, i.$gj),
								j(4, w.$6j),
								j(5, m.$K1),
								j(6, r.$Li),
								j(7, u.$7rb),
								j(8, d.$iP),
								j(9, a.$km),
								j(10, h.$Uyb),
								j(11, p.$y9b),
								j(12, p.$z9b),
								j(13, b.$0zb),
								j(14, $.$GO),
								j(15, c.$ek),
								j(16, S.$DJ),
							],
							I,
						));
			},
		),
		