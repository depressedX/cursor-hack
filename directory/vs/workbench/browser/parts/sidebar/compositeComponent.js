import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import '../../../../base/browser/dom.js';
import './types.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../services/progress/browser/progressIndicator.js';
import '../../../../base/browser/ui/progressbar/progressbar.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/progress/common/progress.js';
define(
			de[3595],
			he([1, 0, 2, 2, 2, 2, 2, 13, 7, 1035, 128, 105, 707, 436, 106, 84]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1uc = f);
				const p = (0, t.template)("<div>"),
					o = (0, t.template)('<div class="sidebar2-compositeComponent">');
				function f(b) {
					const s = (0, r.$Zuc)();
					let l;
					const [y, $] = (0, d.createSignal)(void 0);
					let v;
					(0, d.createEffect)(() => {
						l !== void 0 &&
							((v = new c.$bpb(l, n.$nyb)),
							v.hide(),
							(0, d.onCleanup)(() => {
								v?.dispose();
							}));
					});
					const S = new Map(),
						I = new Map();
					return (
						(0, d.onCleanup)(() => {
							for (const T of S.values())
								T.composite.dispose(), T.progress?.dispose();
						}),
						(0, d.createEffect)(() => {
							if (!s.sidebarData.showComposite) {
								v?.stop().hide();
								return;
							}
							if (!s.sidebarData.activeViewContainerID) return;
							let T = S.get(s.sidebarData.activeViewContainerID);
							if (!T) {
								const D = s.compositeRegistry.getComposite(
									s.sidebarData.activeViewContainerID,
								);
								if (!D) {
									console.error(
										`no composite descriptor found for ${s.sidebarData.activeViewContainerID}`,
									);
									return;
								}
								const M = new (class extends h.$LMb {
										constructor() {
											super(s.sidebarData.activeViewContainerID, !0);
										}
									})(),
									N = v ? new h.$KMb(v, M) : void 0,
									A = s.instantiationService.createChild(
										N ? new u.$Ki([g.$bO, N]) : new u.$Ki(),
									),
									R = D.instantiate(A);
								(T = { composite: R, progress: N, progressScope: M }),
									S.set(R.getId(), T);
							}
							const P = T.composite;
							s.setSidebarData("activeComposite", {
								composite: P,
								progress: T.progress,
							}),
								S.forEach((D, M) => {
									M === s.sidebarData.activeViewContainerID
										? D.progressScope.PUBLIC_BE_CAREFUL_onScopeOpened(M)
										: D.progressScope.PUBLIC_BE_CAREFUL_onScopeClosed(M);
								});
							let k = I.get(P.getId());
							k ||
								((k = (0, m.$)(".composite")),
								k.classList.add(...b.compositeCSSClass.split(" ")),
								(k.style.height = "100%"),
								(k.style.width = "100%"),
								(k.id = P.getId()),
								P.create(k),
								P.updateStyles(),
								I.set(P.getId(), k));
							function L(D) {
								const M = D?.getMenuIds(),
									N = D?.getActions().slice(0) || [],
									A = D?.getSecondaryActions().slice(0) || [];
								(b.toolbar.context =
									s?.sidebarData.activeComposite?.composite.getActionsContext() ??
									null),
									b.toolbar.setActions((0, a.$fib)(N), (0, a.$fib)(A), M);
							}
							(b.toolbar.actionRunner = P.getActionRunner()), L(P), $(k);
						}),
						(0, d.createEffect)(() => {
							const T = s.sidebarData.activeComposite?.composite;
							T &&
								(T.setVisible(!0),
								(0, d.onCleanup)(() => {
									T.setVisible(!1);
								}));
						}),
						(0, d.createEffect)(() => {
							const T = s.sidebarData.activeComposite?.composite;
							T &&
								T.layout(
									new m.$pgb(
										s.sidebarData.dimensionOfEntireSidebar.width,
										s.sidebarData.dimensionOfEntireSidebar.height -
											s.sidebarData.heightOfTitle -
											b.sideBarMenuHeight,
									),
								);
						}),
						(() => {
							const T = o(),
								P = l;
							return (
								typeof P == "function" ? (0, C.use)(P, T) : (l = T),
								T.style.setProperty("position", "absolute"),
								(0, E.insert)(
									T,
									(0, i.createComponent)(d.Show, {
										get when() {
											return b.show;
										},
										get children() {
											const k = p();
											return (
												(0, E.insert)(k, y),
												(0, w.effect)(
													(L) => {
														const D = `${s.sidebarData.dimensionOfEntireSidebar.width}px`,
															M = `${s.sidebarData.dimensionOfEntireSidebar.height - s.sidebarData.heightOfTitle}px`;
														return (
															D !== L._v$ &&
																((L._v$ = D) != null
																	? k.style.setProperty("width", D)
																	: k.style.removeProperty("width")),
															M !== L._v$2 &&
																((L._v$2 = M) != null
																	? k.style.setProperty("height", M)
																	: k.style.removeProperty("height")),
															L
														);
													},
													{ _v$: void 0, _v$2: void 0 },
												),
												k
											);
										},
									}),
								),
								T
							);
						})()
					);
				}
			},
		),
		