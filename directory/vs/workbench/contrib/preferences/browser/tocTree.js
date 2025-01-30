import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/list/listWidget.js';
import '../../../../base/browser/ui/tree/abstractTree.js';
import '../../../../base/common/iterator.js';
import '../../../../base/common/lifecycle.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../platform/theme/common/colorRegistry.js';
import './settingsTree.js';
import './settingsTreeModels.js';
import '../common/settingsEditorColorRegistry.js';
import '../../../services/environment/common/environmentService.js';
define(
			de[4354],
			he([
				1, 0, 7, 95, 278, 411, 103, 3, 4, 10, 8, 72, 5, 93, 106, 51, 1999, 1042,
				613, 78,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*hoverDelegateFactory*/,
 w /*listWidget*/,
 E /*abstractTree*/,
 C /*iterator*/,
 d /*lifecycle*/,
 m /*nls*/,
 r /*configuration*/,
 u /*contextkey*/,
 a /*hover*/,
 h /*instantiation*/,
 c /*listService*/,
 n /*defaultStyles*/,
 g /*colorRegistry*/,
 p /*settingsTree*/,
 o /*settingsTreeModels*/,
 f /*settingsEditorColorRegistry*/,
 b /*environmentService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0Dc = e.$8Dc = e.$7Dc = void 0),
					(e.$9Dc = S),
					(t = mt(t));
				const s = t.$;
				let l = class {
					constructor(k, L) {
						(this.d = k), (this.f = L), (this.a = null);
					}
					get settingsTreeRoot() {
						return this.b;
					}
					set settingsTreeRoot(k) {
						(this.b = k), this.update();
					}
					get currentSearchModel() {
						return this.a;
					}
					set currentSearchModel(k) {
						(this.a = k), this.update();
					}
					get children() {
						return this.b.children;
					}
					update() {
						this.b && this.h(this.b);
					}
					h(k) {
						k.children.forEach((D) => {
							D instanceof o.$zCc && this.h(D);
						});
						const L = k.children
							.filter((D) => D instanceof o.$zCc)
							.reduce((D, M) => D + M.count, 0);
						k.count = L + this.j(k);
					}
					j(k) {
						return k.children.filter((L) => {
							if (
								!(L instanceof o.$BCc) ||
								(this.a && !this.a.root.containsSetting(L.setting.key))
							)
								return !1;
							const D = !!this.f.remoteAuthority;
							return (
								L.matchesScope(this.d.settingsTarget, D) &&
								L.matchesAllTags(this.d.tagFilters) &&
								L.matchesAnyFeature(this.d.featureFilters) &&
								L.matchesAnyExtension(this.d.extensionFilters) &&
								L.matchesAnyId(this.d.idFilters)
							);
						}).length;
					}
				};
				(e.$7Dc = l), (e.$7Dc = l = Ne([j(1, b.$r8)], l));
				const y = "settings.toc.entry";
				class $ {
					constructor(k) {
						(this.a = k), (this.templateId = y);
					}
					renderTemplate(k) {
						return {
							labelElement: t.$fhb(k, s(".settings-toc-entry")),
							countElement: t.$fhb(k, s(".settings-toc-count")),
							elementDisposables: new d.$Zc(),
						};
					}
					renderElement(k, L, D) {
						D.elementDisposables.clear();
						const M = k.element,
							N = M.count,
							A = M.label;
						(D.labelElement.textContent = A),
							D.elementDisposables.add(
								this.a.setupManagedHover(
									(0, i.$cib)("mouse"),
									D.labelElement,
									A,
								),
							),
							N
								? (D.countElement.textContent = ` (${N})`)
								: (D.countElement.textContent = "");
					}
					disposeTemplate(k) {
						k.elementDisposables.dispose();
					}
				}
				e.$8Dc = $;
				class v {
					getTemplateId(k) {
						return y;
					}
					getHeight(k) {
						return 22;
					}
				}
				function S(P, k) {
					const L = P.children.filter((D) => D instanceof o.$zCc);
					return C.Iterable.map(L, (D) => {
						const M = D.children.some((N) => N instanceof o.$zCc);
						return {
							element: D,
							collapsed: void 0,
							collapsible: M,
							children: D instanceof o.$zCc ? S(D, k) : void 0,
						};
					});
				}
				class I {
					getWidgetAriaLabel() {
						return (0, m.localize)(8658, null);
					}
					getAriaLabel(k) {
						return k && k instanceof o.$zCc
							? (0, m.localize)(8659, null, k.label)
							: "";
					}
					getAriaLevel(k) {
						let L = 1;
						for (; k instanceof o.$zCc && k.parent; ) L++, (k = k.parent);
						return L;
					}
				}
				let T = class extends c.$CMb {
					constructor(k, L, D, M, N, A, R) {
						const B = {
							filter: R.createInstance(p.$4Dc, L),
							multipleSelectionSupport: !1,
							identityProvider: {
								getId(U) {
									return U.id;
								},
							},
							styleController: (U) => new w.$Pib(t.$Rgb(k), U),
							accessibilityProvider: R.createInstance(I),
							collapseByDefault: !0,
							horizontalScrolling: !1,
							hideTwistiesOfChildlessElements: !0,
							renderIndentGuides: E.RenderIndentGuides.None,
						};
						super("SettingsTOC", k, new v(), [new $(A)], B, R, D, M, N),
							this.style(
								(0, n.$Eyb)({
									listBackground: g.$8P,
									listFocusOutline: g.$NP,
									listActiveSelectionBackground: g.$8P,
									listActiveSelectionForeground: f.$6Bc,
									listFocusAndSelectionBackground: g.$8P,
									listFocusAndSelectionForeground: f.$6Bc,
									listFocusBackground: g.$8P,
									listFocusForeground: f.$7Bc,
									listHoverForeground: f.$7Bc,
									listHoverBackground: g.$8P,
									listInactiveSelectionBackground: g.$8P,
									listInactiveSelectionForeground: f.$6Bc,
									listInactiveFocusBackground: g.$8P,
									listInactiveFocusOutline: g.$8P,
									treeIndentGuidesStroke: void 0,
									treeInactiveIndentGuidesStroke: void 0,
								}),
							);
					}
				};
				(e.$0Dc = T),
					(e.$0Dc = T =
						Ne(
							[
								j(2, u.$6j),
								j(3, c.$fMb),
								j(4, r.$gj),
								j(5, a.$Uyb),
								j(6, h.$Li),
							],
							T,
						));
			},
		),
		