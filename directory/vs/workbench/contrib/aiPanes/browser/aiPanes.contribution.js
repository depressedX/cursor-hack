import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../common/views.js';
import '../../../browser/parts/views/viewPaneContainer.js';
import '../../../common/contributions.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../services/ai/browser/aiMiscServices.js';
import './panes/semanticSearchView.js';
import '../../../services/views/common/viewsService.js';
import '../../aiHyperMode/browser/renderAiHyperModePane.js';
import './panes/aiBackgroundCmdKEval.js';
import '../../../../platform/hover/browser/hover.js';
import '../../bugbot/browser/renderBugbotPane.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/extensions.js';
import './panes/aiWatcherBugActions.js';
define(
			de[1988],
			he([
				1, 0, 30, 102, 14, 79, 60, 239, 55, 7, 3, 10, 8, 49, 5, 39, 35, 146, 60,
				41, 32, 45, 137, 4198, 89, 4197, 4130, 72, 4264, 20, 20, 2993,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Xzc = e.$Wzc = e.$Uzc = e.$Tzc = void 0),
					(e.$Vzc = O),
					(r = mt(r));
				const D = (0, E.$$O)(
					"outline-view-icon",
					w.$ak.symbolClass,
					"View icon of the AI chat view.",
				);
				let M = class extends o.$TMb {
					constructor(z, F, x, H, q, V, G, K, J, W, X, Y, ie, ne) {
						super(x, G, J, V, K, q, H, W, X, Y, ne),
							(this.f = z),
							(this.Id = F),
							(this.g = H),
							(this.h = ie),
							(this.a = new u.$Zc()),
							(this.c = this.D(this.h.createScoped(this)));
					}
					dispose() {
						this.a.dispose(), this.b?.dispose(), super.dispose();
					}
					W(z) {
						super.W(z),
							z.classList.add("aitasks-pane"),
							(this.j = r.$(".aitasks-container")),
							(this.j.tabIndex = 0),
							(this.j.style.outline = "none"),
							this.j.setAttribute("role", "list"),
							z.appendChild(this.j),
							this.b && this.b.dispose(),
							(this.b = this.f(this.j, this.g));
					}
					X(z, F) {
						super.X(z, F),
							this.j &&
								((this.j.style.height = `${z}px`),
								(this.j.style.width = `${F}px`));
					}
				};
				M = Ne(
					[
						j(3, n.$Li),
						j(4, f.$K1),
						j(5, a.$gj),
						j(6, g.$uZ),
						j(7, h.$6j),
						j(8, c.$Xxb),
						j(9, b.$7rb),
						j(10, p.$iP),
						j(11, s.$km),
						j(12, l.$0zb),
						j(13, T.$Uyb),
					],
					M,
				);
				const N = {
					name: { value: "Hyper", original: "Hyper" },
					id: "aaaihypermode",
					renderMethod: S.$Jzc,
					onBar: !0,
					order: 6,
				};
				e.$Tzc = {
					name: { value: "Bug Finder", original: "Bug Finder" },
					id: "aaaiBugFinder",
					renderMethod: P.$Szc,
					onBar: !0,
					order: 3,
					icon: w.$ak.bug,
				};
				const A = {
					name: { value: "Search", original: "Search" },
					id: "aaaisemanticsearch",
					renderMethod: $.$tzc,
					onBar: !0,
					order: 9,
				};
				e.$Uzc = {
					name: {
						value: "Background CmdK Eval",
						original: "Background CmdK Eval",
					},
					id: "aaaaiBackgroundCmdK",
					renderMethod: I.$Mzc,
					onBar: !0,
					order: 11,
				};
				const R = [];
				function O(U) {
					const z = "workbench.panel.aipane" + U.id,
						F = "workbench.panel.aipane.view" + U.id,
						x = "workbench.panel.aipane" + U.id,
						H = "aipane." + U.id;
					return { CONTAINER_ID: z, VIEW_ID: F, STORAGE_ID: x, Id: H };
				}
				e.$Wzc = (0, n.$Mi)("aiPanesContribution");
				let B = class {
					static {
						this.ID = "cursor.workbench.contrib.aiPanesContribution";
					}
					deregisterTab(z) {
						const { CONTAINER_ID: F } = O(z),
							x = t.$Io.as(C.Extensions.ViewContainersRegistry).get(F);
						if (x) {
							t.$Io
								.as(C.Extensions.ViewContainersRegistry)
								.deregisterViewContainer(x);
							const H = t.$Io.as(C.Extensions.ViewsRegistry).getViews(x);
							t.$Io.as(C.Extensions.ViewsRegistry).deregisterViews(H, x);
						}
					}
					registerTab(z) {
						const { CONTAINER_ID: F, VIEW_ID: x, STORAGE_ID: H, Id: q } = O(z);
						if (t.$Io.as(C.Extensions.ViewContainersRegistry).get(F)) return;
						const G = t.$Io
							.as(C.Extensions.ViewContainersRegistry)
							.registerViewContainer(
								{
									id: F,
									title: z.name,
									icon: z.icon ?? D,
									hideIfEmpty: !0,
									order: z.order,
									ctorDescriptor: new i.$Ji(d.$ZSb, [
										F,
										{ mergeViewWithContainerWhenSingleView: !0 },
									]),
									storageId: H,
								},
								C.ViewContainerLocation.AuxiliaryBar,
								{ doNotRegisterOpenCommand: !0 },
							);
						t.$Io
							.as(C.Extensions.ViewsRegistry)
							.registerViews(
								[
									{
										id: x,
										name: z.name,
										containerIcon: z.icon ?? D,
										ctorDescriptor: new i.$Ji(M, [z.renderMethod, q]),
										canMoveView: !1,
										when: h.$Kj.and(h.$Pj.INSTANCE),
										hideByDefault: !1,
										collapsed: !1,
										order: z.order,
										weight: 30,
										focusCommand: { id: q + ".focus" },
										...(z.onBar
											? { canToggleVisibility: !1 }
											: {
													canToggleVisibility: !0,
													when: h.$Kj.equals("selectedTab", z.id),
												}),
									},
								],
								G,
							);
					}
					constructor(z, F, x) {
						(this.a = z), (this.b = F), (this.c = x);
						const H = this.a.getKey("selectedTab"),
							q = (G) => {
								this.registerTab(G);
							};
						let V = R;
						!V.some((G) => G.id === A.id) &&
							this.b.applicationUserPersistentStorage
								.explicitlyEnableSemanticSearch === !0 &&
							(V = [A].concat(V)),
							!V.some((G) => G.id === e.$Tzc.id) &&
								this.b.applicationUserPersistentStorage.bugbotState
									.isEnabled === !0 &&
								(V = [e.$Tzc].concat(V));
						for (const G of V) q(G);
						this.c.onDidChangeViewContainerVisibility((G) => {
							const K = this.c.getVisibleViewContainer(
								C.ViewContainerLocation.AuxiliaryBar,
							);
							K != null && this.b.setNonPersistentStorage("selectedTab", K.id);
						});
					}
				};
				(e.$Xzc = B),
					(e.$Xzc = B = Ne([j(0, y.$mfc), j(1, l.$0zb), j(2, v.$HMb)], B)),
					(0, m.$s6)(B.ID, B, m.WorkbenchPhase.BlockStartup),
					(0, L.$lK)(e.$Wzc, B, k.InstantiationType.Delayed);
			},
		),
		