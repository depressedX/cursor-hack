import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/solid.js';
import './types.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/uri.js';
import './compositeComponent.js';
import '../../../../base/common/codicons.js';
import './sidebarMenu.js';
import '../../../../platform/actions/browser/toolbar.js';
import '../../../../base/browser/dom.js';
import '../../../../platform/actions/browser/menuEntryActionViewItem.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../base/browser/ui/contextview/contextview.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../contrib/controlCommon/browser/solid.js';
import '../../../../css!vs/workbench/browser/parts/sidebar/SidebarPart2.js';
define(
			de[4120],
			he([
				1, 0, 2, 2, 2, 2, 2, 2, 13, 1035, 26, 9, 3595, 14, 4119, 173, 7, 92,
				105, 276, 79, 36, 1139,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*web*/,
				i /*web*/,
				w /*web*/,
				E /*web*/,
				C /*web*/,
				d /*web*/,
				m /*solid*/,
				r /*types*/,
				u /*themables*/,
				a /*uri*/,
				h /*compositeComponent*/,
				c /*codicons*/,
				n /*sidebarMenu*/,
				g /*toolbar*/,
				p /*dom*/,
				o /*menuEntryActionViewItem*/,
				f /*actionbar*/,
				b /*contextview*/,
				s /*iconRegistry*/,
				l /*solid*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$6uc = void 0),
					(e.$7uc = S),
					(e.$8uc = P);
				const y = (0, t.template)("<div>"),
					$ = (0, t.template)(
						'<div><div><div><span></span><div class="updatecursor-link-container">Billing Issue</div><div class="changelog-link-container"><span>On settings portal',
					),
					v = (0, t.template)(
						'<div><div><div><span></span><div class="updatecursor-link-container">Update Cursor?</div><div class="changelog-link-container"><span>Read the changelog.',
					);
				e.$6uc = (0, s.$$O)(
					"remove-update-modal",
					c.$ak.x,
					"Icon for removing the update modal.",
				);
				function S(k) {
					const L = (0, r.$Zuc)();
					function D(O, B) {
						if (L)
							return L.sidebarData.activeComposite
								? L.sidebarData.activeComposite.composite.getActionViewItem(
										O,
										B,
									)
								: (0, o.$Pyb)(L.instantiationService, O, B);
					}
					const M = (0, p.$)(".title-actions"),
						N = L.instantiationService.createInstance(g.$Syb, M, {
							actionViewItemProvider: (O, B) => D(O, B),
							orientation: f.ActionsOrientation.HORIZONTAL,
							getKeyBinding: (O) => L.keybindingService.lookupKeybinding(O.id),
							anchorAlignmentProvider: () => b.AnchorAlignment.RIGHT,
							toggleMenuTitle: "Actions...",
						});
					(0, m.onCleanup)(() => {
						N.dispose();
					});
					const [A, R] = (0, m.createSignal)(0);
					return (() => {
						const O = y();
						return (
							O.style.setProperty("position", "relative"),
							(0, C.insert)(
								O,
								(0, d.createComponent)(n.$5uc, {
									titleActionsContainer: M,
									toolBar: N,
									setSideBarMenuHeight: R,
								}),
								null,
							),
							(0, C.insert)(
								O,
								(0, d.createComponent)(h.$1uc, {
									get show() {
										return L.sidebarData.showComposite;
									},
									compositeCSSClass: "viewlet",
									toolbar: N,
									get sideBarMenuHeight() {
										return A();
									},
								}),
								null,
							),
							(0, C.insert)(O, (0, d.createComponent)(T, {}), null),
							(0, C.insert)(O, (0, d.createComponent)(I, {}), null),
							(0, E.effect)(
								(B) => {
									const U = `${L.sidebarData.dimensionOfEntireSidebar.width}px`,
										z = `${L.sidebarData.dimensionOfEntireSidebar.height}px`;
									return (
										U !== B._v$ &&
											((B._v$ = U) != null
												? O.style.setProperty("width", U)
												: O.style.removeProperty("width")),
										z !== B._v$2 &&
											((B._v$2 = z) != null
												? O.style.setProperty("height", z)
												: O.style.removeProperty("height")),
										B
									);
								},
								{ _v$: void 0, _v$2: void 0 },
							),
							O
						);
					})();
				}
				const I = (k) => {
						const L = (0, r.$Zuc)();
						return (0, d.createComponent)(m.Show, {
							get when() {
								return (
									(0, w.memo)(
										() =>
											L.reactiveStorageService.nonPersistentStorage
												.lastPaymentWasFailed === !0,
									)() &&
									(L.reactiveStorageService.applicationUserPersistentStorage
										.lastTimeClosedPaymentFailed === void 0 ||
										Date.now() / 1e3 -
											L.reactiveStorageService.applicationUserPersistentStorage
												.lastTimeClosedPaymentFailed >
											60 * 60 * 24 * 2)
								);
							},
							get children() {
								const D = $(),
									M = D.firstChild,
									N = M.firstChild,
									A = N.firstChild,
									R = A.nextSibling,
									O = R.nextSibling;
								return (
									D.style.setProperty("position", "absolute"),
									D.style.setProperty("bottom", "0px"),
									D.style.setProperty("left", "0px"),
									D.style.setProperty("width", "100%"),
									M.style.setProperty("display", "flex"),
									M.style.setProperty("justify-content", "center"),
									M.style.setProperty("align-items", "center"),
									M.style.setProperty("padding", "8px 0px"),
									N.addEventListener("click", async (B) => {
										let U = a.URI.parse("https://cursor.com/settings");
										B.stopPropagation(), B.preventDefault();
										try {
											await L.openerService.open(U, { fromUserGesture: !0 });
										} catch (z) {
											console.log(z);
										}
									}),
									N.style.setProperty("width", "150px"),
									N.style.setProperty("text-align", "center"),
									N.style.setProperty(
										"background-color",
										"var(--vscode-inputValidation-errorBackground)",
									),
									N.style.setProperty("padding", "5px 10px"),
									N.style.setProperty("cursor", "pointer"),
									N.style.setProperty(
										"border-color",
										"var(--vscode-inputValidation-errorBorder)",
									),
									N.style.setProperty("border-radius", "5px"),
									N.style.setProperty("box-sizing", "border-box"),
									N.style.setProperty("border-width", "1px"),
									N.style.setProperty("border-style", "solid"),
									N.style.setProperty("position", "relative"),
									A.addEventListener("click", (B) => {
										B.stopPropagation(),
											L.reactiveStorageService.setNonPersistentStorage({
												...L.reactiveStorageService.nonPersistentStorage,
												lastPaymentWasFailed: !1,
											}),
											L.reactiveStorageService.setApplicationUserPersistentStorage(
												"lastTimeClosedPaymentFailed",
												Date.now() / 1e3,
											);
									}),
									A.style.setProperty("position", "absolute"),
									A.style.setProperty("top", "2px"),
									A.style.setProperty("left", "2px"),
									A.style.setProperty("cursor", "pointer"),
									A.style.setProperty("z-index", "1"),
									A.style.setProperty("border-radius", "3px"),
									A.style.setProperty("transform", "scale(0.8)"),
									O.addEventListener("click", (B) => {
										B.stopPropagation(), B.preventDefault();
									}),
									O.style.setProperty("opacity", "0.8"),
									O.style.setProperty("font-size", "10px"),
									(0, E.effect)(() =>
										(0, i.className)(A, u.ThemeIcon.asClassName(e.$6uc)),
									),
									D
								);
							},
						});
					},
					T = (k) => {
						const L = (0, r.$Zuc)(),
							D = (0, l.$pdc)();
						return (
							(0, m.createEffect)(() => {
								const M = D.window.setInterval(() => {
									L.commandService.executeCommand("cursor.checkonupdate");
								}, 3e4);
								(0, m.onCleanup)(() => {
									D.window.clearInterval(M);
								});
							}),
							(0, d.createComponent)(m.Show, {
								get when() {
									return (
										(0, w.memo)(
											() =>
												!!L.reactiveStorageService.nonPersistentStorage
													.showingUpdate,
										)() &&
										Date.now() / 1e3 -
											L.reactiveStorageService.applicationUserPersistentStorage
												.lastUpdateHiddenTimeInUnixSeconds >
											60 * 60 * 48
									);
								},
								get children() {
									const M = v(),
										N = M.firstChild,
										A = N.firstChild,
										R = A.firstChild,
										O = R.nextSibling,
										B = O.nextSibling,
										U = B.firstChild;
									return (
										M.style.setProperty("position", "absolute"),
										M.style.setProperty("bottom", "0px"),
										M.style.setProperty("left", "0px"),
										M.style.setProperty("width", "100%"),
										N.style.setProperty("display", "flex"),
										N.style.setProperty("justify-content", "center"),
										N.style.setProperty("align-items", "center"),
										N.style.setProperty("padding", "8px 0px"),
										A.addEventListener("click", () => {
											L.commandService.executeCommand("cursor.doupdate"),
												L.reactiveStorageService.setNonPersistentStorage({
													...L.reactiveStorageService.nonPersistentStorage,
													showingUpdate: !1,
												});
										}),
										A.style.setProperty("width", "150px"),
										A.style.setProperty("text-align", "center"),
										A.style.setProperty(
											"background-color",
											"var(--vscode-breadcrumbPicker-background)",
										),
										A.style.setProperty("padding", "5px 10px"),
										A.style.setProperty("cursor", "pointer"),
										A.style.setProperty(
											"border-color",
											"var(--vscode-commandCenter-inactiveBorder)",
										),
										A.style.setProperty("border-radius", "5px"),
										A.style.setProperty("box-sizing", "border-box"),
										A.style.setProperty("border-width", "1px"),
										A.style.setProperty("border-style", "solid"),
										A.style.setProperty("position", "relative"),
										R.addEventListener("click", (z) => {
											z.stopPropagation(),
												L.reactiveStorageService.setApplicationUserPersistentStorage(
													"lastUpdateHiddenTimeInUnixSeconds",
													Date.now() / 1e3,
												);
										}),
										R.style.setProperty("position", "absolute"),
										R.style.setProperty("top", "2px"),
										R.style.setProperty("left", "2px"),
										R.style.setProperty("cursor", "pointer"),
										R.style.setProperty("z-index", "1"),
										R.style.setProperty(
											"background",
											"var(--vscode-editorWidget-border)",
										),
										R.style.setProperty("border-radius", "3px"),
										R.style.setProperty("transform", "scale(0.8)"),
										B.addEventListener("click", (z) => {
											z.stopPropagation(), z.preventDefault();
										}),
										B.style.setProperty("opacity", "0.5"),
										B.style.setProperty("font-size", "10px"),
										U.addEventListener("click", async (z) => {
											let F = a.URI.parse("https://changelog.cursor.com");
											D.productService.version.includes("nightly") &&
												(F = a.URI.parse(
													"https://changelog.cursor.com/?nightly=true",
												)),
												z.stopPropagation(),
												z.preventDefault();
											try {
												await L.openerService.open(F, { fromUserGesture: !0 });
											} catch (x) {
												console.log(x);
											}
										}),
										(0, E.effect)(() =>
											(0, i.className)(R, u.ThemeIcon.asClassName(e.$6uc)),
										),
										M
									);
								},
							})
						);
					};
				function P(k, L, D, M, N, A, R, O, B, U, z, F, x, H) {
					return (0, l.$ndc)(
						() =>
							(0, d.createComponent)(r.$Yuc, {
								sidebarData: L,
								storageService: B,
								setSidebarData: D,
								instantiationService: M,
								compositeRegistry: O,
								viewDescriptorService: N,
								keybindingService: A,
								reactiveStorageService: U,
								openPaneComposite: x,
								hideActivePaneComposite: H,
								contextKeyService: R,
								commandService: z,
								openerService: F,
								get children() {
									return (0, d.createComponent)(S, {});
								},
							}),
						k,
						M,
						{ restrictToServices: ["productService"] },
					);
				}
			},
		)
