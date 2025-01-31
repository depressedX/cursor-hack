import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../base/browser/ui/splitview/splitview.js';
import '../../../services/extensionManagement/common/extensionFeatures.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../nls.js';
import '../../../../platform/list/browser/listService.js';
import '../../../../platform/extensionManagement/common/extensionManagementUtil.js';
import '../../../../base/browser/ui/button/button.js';
import '../../../../platform/theme/browser/defaultStyles.js';
import '../../../../base/browser/markdownRenderer.js';
import '../../../../base/common/errors.js';
import '../../../../platform/opener/common/opener.js';
import '../../../common/theme.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/browser/ui/scrollbar/scrollableElement.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/severity.js';
import './extensionsIcons.js';
import '../../../../platform/severityIcon/browser/severityIcon.js';
import '../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/color.js';
import '../../../services/extensions/common/extensions.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../base/common/keybindings.js';
import '../../../../base/common/date.js';
define(
		de[3308],
		he([
			1, 0, 3, 7, 6, 109, 279, 244, 30, 5, 4, 93, 154, 183, 106, 267, 29, 41,
			123, 35, 203, 57, 26, 111, 466, 673, 460, 12, 94, 97, 53, 14, 102, 343,
			275,
		]),
		function (			ce /*require*/,
			e /*exports*/,
			t /*lifecycle*/,
			i /*dom*/,
			w /*event*/,
			E /*extensions*/,
			C /*splitview*/,
			d /*extensionFeatures*/,
			m /*platform*/,
			r /*instantiation*/,
			u /*nls*/,
			a /*listService*/,
			h /*extensionManagementUtil*/,
			c /*button*/,
			n /*defaultStyles*/,
			g /*markdownRenderer*/,
			p /*errors*/,
			o /*opener*/,
			f /*theme*/,
			b /*themeService*/,
			s /*scrollableElement*/,
			l /*dialogs*/,
			y /*themables*/,
			$ /*severity*/,
			v /*extensionsIcons*/,
			S /*severityIcon*/,
			I /*keybindingLabel*/,
			T /*platform*/,
			P /*htmlContent*/,
			k /*color*/,
			L /*extensions*/,
			D /*codicons*/,
			M /*descriptors*/,
			N /*keybindings*/,
			A /*date*/,
) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$DSc = void 0),
				($ = xi($));
			let R = class extends t.$1c {
				static {
					this.ID = "runtimeStatus";
				}
				constructor(H, q) {
					super(), (this.c = H), (this.g = q), (this.type = "markdown");
				}
				shouldRender(H) {
					const q = new E.$Gn((0, h.$0p)(H.publisher, H.name));
					return this.c.extensions.some((V) => E.$Gn.equals(V.identifier, q))
						? !!H.main || !!H.browser
						: !1;
				}
				render(H) {
					const q = new t.$Zc(),
						V = new E.$Gn((0, h.$0p)(H.publisher, H.name)),
						G = q.add(new w.$re());
					return (
						q.add(
							this.c.onDidChangeExtensionsStatus((K) => {
								K.some((J) => E.$Gn.equals(J, V)) && G.fire(this.h(H));
							}),
						),
						q.add(this.g.onDidChangeAccessData((K) => G.fire(this.h(H)))),
						{
							onDidChange: G.event,
							data: this.h(H),
							dispose: () => q.dispose(),
						}
					);
				}
				h(H) {
					const q = new P.$cl(),
						V = new E.$Gn((0, h.$0p)(H.publisher, H.name)),
						G = this.c.getExtensionsStatus()[V.value];
					if (this.c.extensions.some((J) => E.$Gn.equals(J.identifier, V))) {
						if (
							(q.appendMarkdown(`### ${(0, u.localize)(6063, null)}

`),
							G.activationTimes
								? G.activationTimes.activationReason.startup
									? q.appendMarkdown(
											`Activated on Startup: \`${G.activationTimes.activateCallTime}ms\``,
										)
									: q.appendMarkdown(
											`Activated by \`${G.activationTimes.activationReason.activationEvent}\` event: \`${G.activationTimes.activateCallTime}ms\``,
										)
								: q.appendMarkdown("Not yet activated"),
							G.runtimeErrors.length)
						) {
							q.appendMarkdown(`
 ### ${(0, u.localize)(6064, null, G.runtimeErrors.length)}
`);
							for (const J of G.runtimeErrors)
								q.appendMarkdown(`$(${D.$ak.error.id})&nbsp;${(0, p.$bb)(J)}

`);
						}
						if (G.messages.length) {
							q.appendMarkdown(`
 ### ${(0, u.localize)(6065, null, G.messages.length)}
`);
							for (const J of G.messages)
								q.appendMarkdown(`$(${(J.type === $.default.Error ? D.$ak.error : J.type === $.default.Warning ? D.$ak.warning : D.$ak.info).id})&nbsp;${J.message}

`);
						}
					}
					const K = m.$Io
						.as(d.Extensions.ExtensionFeaturesRegistry)
						.getExtensionFeatures();
					for (const J of K) {
						const W = this.g.getAccessData(V, J.id);
						if (W) {
							q.appendMarkdown(`
 ### ${J.label}

`);
							const X = W?.current?.status;
							X &&
								(X?.severity === $.default.Error &&
									q.appendMarkdown(`$(${v.$tSb.id}) ${X.message}

`),
								X?.severity === $.default.Warning &&
									q.appendMarkdown(`$(${v.$uSb.id}) ${X.message}

`)),
								W?.totalCount &&
									(W.current &&
										(q.appendMarkdown(`${(0, u.localize)(6066, null, (0, A.$dn)(W.current.lastAccessed, !0, !0))}

`),
										q.appendMarkdown(`${(0, u.localize)(6067, null, W.current.count)}

`)),
									q.appendMarkdown(`${(0, u.localize)(6068, null, W.totalCount)}

`));
						}
					}
					return q;
				}
			};
			R = Ne([j(0, L.$q2), j(1, d.$$Sb)], R);
			const O = {
				id: R.ID,
				label: (0, u.localize)(6069, null),
				access: { canToggle: !1 },
				renderer: new M.$Ji(R),
			};
			let B = class extends b.$pP {
				constructor(H, q, V, G) {
					super(V),
						(this.r = H),
						(this.s = q),
						(this.t = G),
						(this.c = this.D(new t.$2c())),
						(this.j = []),
						(this.m = new E.$Gn((0, h.$0p)(H.publisher, H.name))),
						(this.domNode = (0, i.$)("div.subcontent.feature-contributions")),
						this.u();
				}
				layout(H, q) {
					this.j.forEach((V) => V.layout(H, q));
				}
				u() {
					const H = this.F();
					if (H.length === 0) {
						(0, i.$fhb)((0, i.$)(".no-features"), this.domNode).textContent =
							(0, u.localize)(6070, null);
						return;
					}
					const q = this.D(
						new C.$vob(this.domNode, {
							orientation: C.Orientation.HORIZONTAL,
							proportionalLayout: !0,
						}),
					);
					this.j.push({
						layout: (W, X) => {
							(q.el.style.height = `${W - 14}px`), q.layout(X);
						},
					});
					const V = (0, i.$)(".features-list-container"),
						G = this.D(this.y(V));
					G.splice(0, G.length, H);
					const K = (0, i.$)(".feature-view-container");
					this.D(
						G.onDidChangeSelection((W) => {
							const X = W.elements[0];
							X && this.C(X, K);
						}),
					);
					const J = this.s ? H.findIndex((W) => W.id === this.s) : 0;
					G.setSelection([J === -1 ? 0 : J]),
						q.addView(
							{
								onDidChange: w.Event.None,
								element: V,
								minimumSize: 100,
								maximumSize: Number.POSITIVE_INFINITY,
								layout: (W, X, Y) => {
									(V.style.width = `${W}px`), G.layout(Y, W);
								},
							},
							200,
							void 0,
							!0,
						),
						q.addView(
							{
								onDidChange: w.Event.None,
								element: K,
								minimumSize: 500,
								maximumSize: Number.POSITIVE_INFINITY,
								layout: (W, X, Y) => {
									(K.style.width = `${W}px`),
										(this.g = { height: Y, width: W }),
										this.z();
								},
							},
							C.Sizing.Distribute,
							void 0,
							!0,
						),
						q.style({ separatorBorder: this.h.getColor(f.$BFb) });
				}
				y(H) {
					const q = this.t.createInstance(z, this.m),
						V = new U();
					return this.t.createInstance(
						a.$yMb,
						"ExtensionFeaturesList",
						(0, i.$fhb)(H, (0, i.$)(".features-list-wrapper")),
						V,
						[q],
						{
							multipleSelectionSupport: !1,
							setRowLineHeight: !1,
							horizontalScrolling: !1,
							accessibilityProvider: {
								getAriaLabel(K) {
									return K?.label ?? "";
								},
								getWidgetAriaLabel() {
									return (0, u.localize)(6071, null);
								},
							},
							openOnSingleClick: !0,
						},
					);
				}
				z() {
					this.c.value?.layout(this.g?.height, this.g?.width);
				}
				C(H, q) {
					this.c.value?.feature.id !== H.id &&
						((0, i.$9fb)(q),
						(this.c.value = this.t.createInstance(F, this.m, this.r, H)),
						q.appendChild(this.c.value.domNode),
						this.z());
				}
				F() {
					const H = m.$Io
							.as(d.Extensions.ExtensionFeaturesRegistry)
							.getExtensionFeatures()
							.filter((V) => {
								const G = this.G(V),
									K = G?.shouldRender(this.r);
								return G?.dispose(), K;
							})
							.sort((V, G) => V.label.localeCompare(G.label)),
						q = this.G(O);
					return q?.shouldRender(this.r) && H.splice(0, 0, O), q?.dispose(), H;
				}
				G(H) {
					return H.renderer ? this.t.createInstance(H.renderer) : void 0;
				}
			};
			(e.$DSc = B), (e.$DSc = B = Ne([j(2, b.$iP), j(3, r.$Li)], B));
			class U {
				getHeight() {
					return 22;
				}
				getTemplateId() {
					return "extensionFeatureDescriptor";
				}
			}
			let z = class {
				constructor(H, q) {
					(this.c = H),
						(this.d = q),
						(this.templateId = "extensionFeatureDescriptor");
				}
				renderTemplate(H) {
					H.classList.add("extension-feature-list-item");
					const q = (0, i.$fhb)(H, (0, i.$)(".extension-feature-label")),
						V = (0, i.$fhb)(H, (0, i.$)(".extension-feature-disabled-label"));
					V.textContent = (0, u.localize)(6072, null);
					const G = (0, i.$fhb)(H, (0, i.$)(".extension-feature-status"));
					return {
						label: q,
						disabledElement: V,
						statusElement: G,
						disposables: new t.$Zc(),
					};
				}
				renderElement(H, q, V) {
					V.disposables.clear(),
						(V.label.textContent = H.label),
						(V.disabledElement.style.display =
							H.id === O.id || this.d.isEnabled(this.c, H.id)
								? "none"
								: "inherit"),
						V.disposables.add(
							this.d.onDidChangeEnablement(
								({ extension: J, featureId: W, enabled: X }) => {
									E.$Gn.equals(J, this.c) &&
										W === H.id &&
										(V.disabledElement.style.display = X ? "none" : "inherit");
								},
							),
						);
					const G = V.statusElement.className,
						K = () => {
							const J = this.d.getAccessData(this.c, H.id);
							J?.current?.status
								? ((V.statusElement.style.display = "inherit"),
									(V.statusElement.className = `${G} ${S.SeverityIcon.className(J.current.status.severity)}`))
								: (V.statusElement.style.display = "none");
						};
					K(),
						V.disposables.add(
							this.d.onDidChangeAccessData(({ extension: J, featureId: W }) => {
								E.$Gn.equals(J, this.c) && W === H.id && K();
							}),
						);
				}
				disposeElement(H, q, V, G) {
					V.disposables.dispose();
				}
				disposeTemplate(H) {
					H.disposables.dispose();
				}
			};
			z = Ne([j(1, d.$$Sb)], z);
			let F = class extends t.$1c {
				constructor(H, q, V, G, K, J, W) {
					super(),
						(this.g = H),
						(this.h = q),
						(this.feature = V),
						(this.j = G),
						(this.m = K),
						(this.n = J),
						(this.q = W),
						(this.c = []),
						(this.domNode = (0, i.$)(".extension-feature-content")),
						this.r(this.domNode);
				}
				r(H) {
					const q = (0, i.$fhb)(H, (0, i.$)(".feature-header")),
						V = (0, i.$fhb)(q, (0, i.$)(".feature-title"));
					if (
						((V.textContent = this.feature.label),
						this.feature.access.canToggle)
					) {
						const Y = (0, i.$fhb)(q, (0, i.$)(".feature-actions")),
							ie = new c.$oob(Y, n.$lyb);
						this.s(ie),
							this.D(
								this.n.onDidChangeEnablement(
									({ extension: ne, featureId: ee }) => {
										E.$Gn.equals(ne, this.g) &&
											ee === this.feature.id &&
											this.s(ie);
									},
								),
							),
							this.D(
								ie.onDidClick(async () => {
									const ne = this.n.isEnabled(this.g, this.feature.id);
									(
										await this.q.confirm({
											title: (0, u.localize)(6073, null, this.feature.label),
											message: ne
												? (0, u.localize)(
														6074,
														null,
														this.h.displayName ?? this.g.value,
														this.feature.label,
													)
												: (0, u.localize)(
														6075,
														null,
														this.h.displayName ?? this.g.value,
														this.feature.label,
													),
											custom: !0,
											primaryButton: ne
												? (0, u.localize)(6076, null)
												: (0, u.localize)(6077, null),
											cancelButton: (0, u.localize)(6078, null),
										})
									).confirmed &&
										this.n.setEnablement(this.g, this.feature.id, !ne);
								}),
							);
					}
					const G = (0, i.$fhb)(H, (0, i.$)(".feature-body")),
						K = (0, i.$)(".feature-body-content"),
						J = this.D(new s.$8hb(K, {}));
					if (
						((0, i.$fhb)(G, J.getDomNode()),
						this.c.push({ layout: () => J.scanDomNode() }),
						J.scanDomNode(),
						this.feature.description)
					) {
						const Y = (0, i.$fhb)(K, (0, i.$)(".feature-description"));
						Y.textContent = this.feature.description;
					}
					const W = this.n.getAccessData(this.g, this.feature.id);
					W?.current?.status &&
						(0, i.$fhb)(
							K,
							(0, i.$)(
								".feature-status",
								void 0,
								(0, i.$)(
									`span${y.ThemeIcon.asCSSSelector(W.current.status.severity === $.default.Error ? v.$tSb : W.current.status.severity === $.default.Warning ? v.$uSb : v.$vSb)}`,
									void 0,
								),
								(0, i.$)("span", void 0, W.current.status.message),
							),
						);
					const X = (0, i.$fhb)(K, (0, i.$)(".feature-content"));
					if (this.feature.renderer) {
						const Y = this.m.createInstance(this.feature.renderer);
						Y.type === "table"
							? this.t(X, Y)
							: Y.type === "markdown"
								? this.y(X, Y)
								: Y.type === "markdown+table" && this.w(X, Y);
					}
				}
				s(H) {
					H.label = this.n.isEnabled(this.g, this.feature.id)
						? (0, u.localize)(6079, null)
						: (0, u.localize)(6080, null);
				}
				t(H, q) {
					const V = this.D(q.render(this.h)),
						G = this.D(new t.$2c());
					V.onDidChange &&
						this.D(
							V.onDidChange((K) => {
								(0, i.$9fb)(H), (G.value = this.u(K, H));
							}),
						),
						(G.value = this.u(V.data, H));
				}
				u(H, q) {
					const V = new t.$Zc();
					return (
						(0, i.$fhb)(
							q,
							(0, i.$)(
								"table",
								void 0,
								(0, i.$)(
									"tr",
									void 0,
									...H.headers.map((G) => (0, i.$)("th", void 0, G)),
								),
								...H.rows.map((G) =>
									(0, i.$)(
										"tr",
										void 0,
										...G.map((K) => {
											if (typeof K == "string")
												return (0, i.$)("td", void 0, K);
											const J = Array.isArray(K) ? K : [K];
											return (0, i.$)(
												"td",
												void 0,
												...J.map((W) => {
													const X = [];
													if ((0, P.$el)(K)) {
														const Y = (0, i.$)("", void 0);
														this.z(K, Y), X.push(Y);
													} else if (W instanceof N.$xs) {
														const Y = (0, i.$)("");
														V.add(new I.$7ob(Y, T.OS, n.$jyb)).set(W),
															X.push(Y);
													} else
														W instanceof k.$UL &&
															(X.push(
																(0, i.$)(
																	"span",
																	{
																		class: "colorBox",
																		style:
																			"background-color: " +
																			k.$UL.Format.CSS.format(W),
																	},
																	"",
																),
															),
															X.push(
																(0, i.$)(
																	"code",
																	void 0,
																	k.$UL.Format.CSS.formatHex(W),
																),
															));
													return X;
												}).flat(),
											);
										}),
									),
								),
							),
						),
						V
					);
				}
				w(H, q) {
					const V = this.D(q.render(this.h));
					V.onDidChange &&
						this.D(
							V.onDidChange((G) => {
								(0, i.$9fb)(H), this.C(G, H);
							}),
						),
						this.C(V.data, H);
				}
				y(H, q) {
					H.classList.add("markdown");
					const V = this.D(q.render(this.h));
					V.onDidChange &&
						this.D(
							V.onDidChange((G) => {
								(0, i.$9fb)(H), this.z(G, H);
							}),
						),
						this.z(V.data, H);
				}
				z(H, q) {
					const { element: V, dispose: G } = (0, g.$Uib)(
						{ value: H.value, isTrusted: H.isTrusted, supportThemeIcons: !0 },
						{
							actionHandler: {
								callback: (K) =>
									this.j.open(K, { allowCommands: !!H.isTrusted }).catch(p.$4),
								disposables: this.B,
							},
						},
					);
					this.D((0, t.$Yc)(G)), (0, i.$fhb)(q, V);
				}
				C(H, q) {
					for (const V of H)
						if ((0, P.$el)(V)) {
							const G = (0, i.$)("", void 0);
							this.z(V, G), (0, i.$fhb)(q, G);
						} else {
							const G = (0, i.$fhb)(q, (0, i.$)("table"));
							this.u(V, G);
						}
				}
				layout(H, q) {
					this.c.forEach((V) => V.layout(H, q));
				}
			};
			F = Ne([j(3, o.$7rb), j(4, r.$Li), j(5, d.$$Sb), j(6, l.$GO)], F);
		},
	)
