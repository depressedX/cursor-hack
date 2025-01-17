import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/ui/actionbar/actionbar.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/event.js';
import '../common/extensions.js';
import './extensionsActions.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import './extensionsWidgets.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../common/theme.js';
import '../../../../platform/contextview/browser/contextView.js';
import './extensionsIcons.js';
import '../../../../css!vs/workbench/contrib/extensions/browser/media/extension.js';
define(
			de[1356],
			he([
				1, 0, 7, 3, 105, 5, 6, 141, 404, 154, 1955, 53, 157, 40, 35, 26, 123,
				49, 466, 2434,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YSc = e.$XSc = void 0);
				const b = 72;
				class s {
					getHeight() {
						return b;
					}
					getTemplateId() {
						return "extension";
					}
				}
				e.$XSc = s;
				let l = class {
					constructor($, v, S, I, T, P, k, L) {
						(this.a = $),
							(this.b = v),
							(this.c = S),
							(this.d = I),
							(this.f = T),
							(this.g = P),
							(this.h = k),
							(this.i = L);
					}
					get templateId() {
						return "extension";
					}
					renderTemplate($) {
						const v = this.c.createInstance(
								u.$KSc,
								(0, t.$fhb)($, (0, t.$)(".extension-bookmark-container")),
							),
							S = this.c.createInstance(
								u.$LSc,
								(0, t.$fhb)($, (0, t.$)(".extension-bookmark-container")),
							),
							I = (0, t.$fhb)($, (0, t.$)(".extension-list-item")),
							T = (0, t.$fhb)(I, (0, t.$)(".icon-container")),
							P = (0, t.$fhb)(T, (0, t.$)("img.icon", { alt: "" })),
							k = this.c.createInstance(u.$MSc, T, !1),
							L = this.c.createInstance(u.$NSc, T),
							D = (0, t.$fhb)(I, (0, t.$)(".details")),
							M = (0, t.$fhb)(D, (0, t.$)(".header-container")),
							N = (0, t.$fhb)(M, (0, t.$)(".header")),
							A = (0, t.$fhb)(N, (0, t.$)("span.name")),
							R = (0, t.$fhb)(N, (0, t.$)("span.install-count")),
							O = (0, t.$fhb)(N, (0, t.$)("span.ratings")),
							B = (0, t.$fhb)(N, (0, t.$)("span.sync-ignored")),
							U = (0, t.$fhb)(N, (0, t.$)("span.activation-status")),
							z = this.c.createInstance(u.$MSc, N, !1),
							F = (0, t.$fhb)(D, (0, t.$)(".description.ellipsis")),
							x = (0, t.$fhb)(D, (0, t.$)(".footer")),
							H = (0, t.$fhb)(x, (0, t.$)(".author.ellipsis")),
							q = this.c.createInstance(
								u.$ISc,
								(0, t.$fhb)(H, (0, t.$)(".verified-publisher")),
								!0,
							),
							V = (0, t.$fhb)(H, (0, t.$)(".publisher-name.ellipsis")),
							G = new w.$eib(x, {
								actionViewItemProvider: (ne, ee) => {
									if (ne instanceof m.$bTb)
										return new m.$cTb(
											ne,
											{
												...ee,
												icon: !0,
												label: !0,
												menuActionsOrProvider: {
													getActions: () => ne.menuActions,
												},
												menuActionClassNames: ne.menuActionClassNames,
											},
											this.i,
										);
									if (ne instanceof m.$pTb) return ne.createActionViewItem(ee);
								},
								focusOnlyEnabledItems: !0,
							});
						G.setFocusable(!1),
							G.onDidRun(({ error: ne }) => ne && this.d.error(ne));
						const K = this.c.createInstance(m.$TTb),
							J = [
								this.c.createInstance(m.$RTb),
								this.c.createInstance(m.$oTb, !0),
								this.c.createInstance(m.$DTb),
								this.c.createInstance(m.$lTb, !1),
								this.c.createInstance(m.$eTb),
								this.c.createInstance(m.$fTb),
								this.c.createInstance(m.$HTb),
								this.c.createInstance(m.$ITb),
								this.c.createInstance(m.$hTb, !1),
								this.c.createInstance(m.$iTb),
								this.c.createInstance(m.$jTb),
								K,
								this.c.createInstance(m.$sTb),
							],
							W = this.c.createInstance(
								u.$QSc,
								{ target: $, position: this.b.hoverOptions.position },
								K,
							),
							X = [
								v,
								S,
								k,
								L,
								z,
								q,
								W,
								this.c.createInstance(u.$OSc, B),
								this.c.createInstance(u.$PSc, U, !0),
								this.c.createInstance(u.$GSc, R, !0),
								this.c.createInstance(u.$HSc, O, !0),
							],
							Y = this.c.createInstance(d.$SQb, [...J, ...X]);
						G.push(J, { icon: !0, label: !0 });
						const ie = (0, i.$Xc)(...J, ...X, G, Y);
						return {
							root: $,
							element: I,
							icon: P,
							name: A,
							installCount: R,
							ratings: O,
							description: F,
							publisherDisplayName: V,
							disposables: [ie],
							actionbar: G,
							extensionDisposables: [],
							set extension(ne) {
								Y.extension = ne;
							},
						};
					}
					renderPlaceholder($, v) {
						v.element.classList.add("loading"),
							v.root.removeAttribute("aria-label"),
							v.root.removeAttribute("data-extension-id"),
							(v.extensionDisposables = (0, i.$Vc)(v.extensionDisposables)),
							(v.icon.src = ""),
							(v.name.textContent = ""),
							(v.description.textContent = ""),
							(v.publisherDisplayName.textContent = ""),
							(v.installCount.style.display = "none"),
							(v.ratings.style.display = "none"),
							(v.extension = null);
					}
					renderElement($, v, S) {
						S.element.classList.remove("loading"),
							S.root.setAttribute("data-extension-id", $.identifier.id),
							$.state !== d.ExtensionState.Uninstalled &&
								!$.server &&
								($ =
									this.g.local.filter(
										(P) =>
											P.server === $.server &&
											(0, r.$7p)(P.identifier, $.identifier),
									)[0] || $),
							(S.extensionDisposables = (0, i.$Vc)(S.extensionDisposables));
						const I = () => {
							const P =
									$.state === d.ExtensionState.Installed &&
									$.local &&
									!this.h.isEnabled($.local),
								k = !!$.deprecationInfo;
							S.element.classList.toggle("deprecated", k),
								S.root.classList.toggle("disabled", P);
						};
						I(),
							this.f.onDidChangeExtensions(
								() => I(),
								this,
								S.extensionDisposables,
							),
							S.extensionDisposables.push(
								(0, t.$0fb)(
									S.icon,
									"error",
									() => (S.icon.src = $.iconUrlFallback),
									{ once: !0 },
								),
							),
							(S.icon.src = $.iconUrl),
							S.icon.complete
								? (S.icon.style.visibility = "inherit")
								: ((S.icon.style.visibility = "hidden"),
									(S.icon.onload = () =>
										(S.icon.style.visibility = "inherit"))),
							(S.name.textContent = $.displayName),
							(S.description.textContent = $.description);
						const T = () => {
							S.publisherDisplayName.textContent =
								!$.resourceExtension && $.local?.source !== "resource"
									? $.publisherDisplayName
									: "";
						};
						T(),
							C.Event.filter(
								this.g.onChange,
								(P) => !!P && (0, r.$7p)(P.identifier, $.identifier),
							)(() => T(), this, S.extensionDisposables),
							(S.installCount.style.display = ""),
							(S.ratings.style.display = ""),
							(S.extension = $),
							$.gallery &&
								$.gallery.properties &&
								$.gallery.properties.localizedLanguages &&
								$.gallery.properties.localizedLanguages.length &&
								(S.description.textContent =
									$.gallery.properties.localizedLanguages
										.map((P) => P[0].toLocaleUpperCase() + P.slice(1))
										.join(", ")),
							this.a.onFocus(
								(P) => {
									(0, r.$7p)($.identifier, P.identifier) &&
										S.actionbar.setFocusable(!0);
								},
								this,
								S.extensionDisposables,
							),
							this.a.onBlur(
								(P) => {
									(0, r.$7p)($.identifier, P.identifier) &&
										S.actionbar.setFocusable(!1);
								},
								this,
								S.extensionDisposables,
							);
					}
					disposeElement($, v, S) {
						S.extensionDisposables = (0, i.$Vc)(S.extensionDisposables);
					}
					disposeTemplate($) {
						($.extensionDisposables = (0, i.$Vc)($.extensionDisposables)),
							($.disposables = (0, i.$Vc)($.disposables));
					}
				};
				(e.$YSc = l),
					(e.$YSc = l =
						Ne(
							[
								j(2, E.$Li),
								j(3, c.$4N),
								j(4, a.$q2),
								j(5, d.$MQb),
								j(6, h.$IQb),
								j(7, o.$Xxb),
							],
							l,
						)),
					(0, n.$oP)((y, $) => {
						const v = y.getColor(u.$USc);
						if (v) {
							const S = v.transparent(0.5).makeOpaque((0, p.$LEb)(y));
							$.addRule(
								`.extensions-list .monaco-list .monaco-list-row.disabled:not(.selected) .author .verified-publisher ${g.ThemeIcon.asCSSSelector(f.$nSb)} { color: ${S}; }`,
							);
						}
					});
			},
		),
		