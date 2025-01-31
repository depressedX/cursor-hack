import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/resources.js';
import '../../../base/common/strings.js';
import '../../../nls.js';
import '../../../platform/contextkey/common/contextkey.js';
import '../../../platform/extensions/common/extensions.js';
import '../../../platform/instantiation/common/descriptors.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/registry/common/platform.js';
import '../../../base/common/themables.js';
import '../../browser/panecomposite.js';
import '../../browser/parts/views/treeView.js';
import '../../browser/parts/views/viewPaneContainer.js';
import '../../common/contributions.js';
import '../../common/views.js';
import '../../contrib/debug/common/debug.js';
import '../../contrib/files/common/files.js';
import '../../contrib/remote/browser/remoteExplorer.js';
import '../../contrib/scm/common/scm.js';
import '../../contrib/webviewView/browser/webviewViewPane.js';
import '../../services/extensions/common/extensions.js';
import '../../services/extensions/common/extensionsRegistry.js';
import '../../../platform/log/common/log.js';
import '../../services/extensionManagement/common/extensionFeatures.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/htmlContent.js';
define(
			de[4029],
			he([
				1, 0, 19, 37, 4, 8, 109, 102, 5, 30, 26, 1056, 854, 239, 55, 60, 112,
				220, 1058, 258, 3849, 53, 175, 34, 244, 3, 94,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*resources*/,
				i /*strings*/,
				w /*nls*/,
				E /*contextkey*/,
				C /*extensions*/,
				d /*descriptors*/,
				m /*instantiation*/,
				r /*platform*/,
				u /*themables*/,
				a /*panecomposite*/,
				h /*treeView*/,
				c /*viewPaneContainer*/,
				n /*contributions*/,
				g /*views*/,
				p /*debug*/,
				o /*files*/,
				f /*remoteExplorer*/,
				b /*scm*/,
				s /*webviewViewPane*/,
				l /*extensions*/,
				y /*extensionsRegistry*/,
				$ /*log*/,
				v /*extensionFeatures*/,
				S /*lifecycle*/,
				I /*htmlContent*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$juc = void 0),
					(t = mt(t));
				const T = {
					type: "object",
					properties: {
						id: {
							description: (0, w.localize)(2602, null),
							type: "string",
							pattern: "^[a-zA-Z0-9_-]+$",
						},
						title: { description: (0, w.localize)(2603, null), type: "string" },
						icon: { description: (0, w.localize)(2604, null), type: "string" },
					},
					required: ["id", "title", "icon"],
				};
				e.$juc = {
					description: (0, w.localize)(2605, null),
					type: "object",
					properties: {
						activitybar: {
							description: (0, w.localize)(2606, null),
							type: "array",
							items: T,
						},
						panel: {
							description: (0, w.localize)(2607, null),
							type: "array",
							items: T,
						},
					},
				};
				var P;
				(function (z) {
					(z.Tree = "tree"), (z.Webview = "webview");
				})(P || (P = {}));
				var k;
				(function (z) {
					(z.Visible = "visible"),
						(z.Hidden = "hidden"),
						(z.Collapsed = "collapsed");
				})(k || (k = {}));
				const L = {
						type: "object",
						required: ["id", "name"],
						defaultSnippets: [{ body: { id: "${1:id}", name: "${2:name}" } }],
						properties: {
							type: {
								markdownDescription: (0, w.localize)(2608, null),
								type: "string",
								enum: ["tree", "webview"],
								markdownEnumDescriptions: [
									(0, w.localize)(2609, null),
									(0, w.localize)(2610, null),
								],
							},
							id: {
								markdownDescription: (0, w.localize)(2611, null),
								type: "string",
							},
							name: {
								description: (0, w.localize)(2612, null),
								type: "string",
							},
							when: {
								description: (0, w.localize)(2613, null),
								type: "string",
							},
							icon: {
								description: (0, w.localize)(2614, null),
								type: "string",
							},
							contextualTitle: {
								description: (0, w.localize)(2615, null),
								type: "string",
							},
							visibility: {
								description: (0, w.localize)(2616, null),
								type: "string",
								enum: ["visible", "hidden", "collapsed"],
								default: "visible",
								enumDescriptions: [
									(0, w.localize)(2617, null),
									(0, w.localize)(2618, null),
									(0, w.localize)(2619, null),
								],
							},
							initialSize: {
								type: "number",
								description: (0, w.localize)(2620, null),
							},
							accessibilityHelpContent: {
								type: "string",
								markdownDescription: (0, w.localize)(2621, null),
							},
						},
					},
					D = {
						type: "object",
						required: ["id", "name"],
						properties: {
							id: { description: (0, w.localize)(2622, null), type: "string" },
							name: {
								description: (0, w.localize)(2623, null),
								type: "string",
							},
							when: {
								description: (0, w.localize)(2624, null),
								type: "string",
							},
							group: {
								description: (0, w.localize)(2625, null),
								type: "string",
							},
							remoteName: {
								description: (0, w.localize)(2626, null),
								type: ["string", "array"],
								items: { type: "string" },
							},
						},
					},
					M = {
						description: (0, w.localize)(2627, null),
						type: "object",
						properties: {
							explorer: {
								description: (0, w.localize)(2628, null),
								type: "array",
								items: L,
								default: [],
							},
							debug: {
								description: (0, w.localize)(2629, null),
								type: "array",
								items: L,
								default: [],
							},
							scm: {
								description: (0, w.localize)(2630, null),
								type: "array",
								items: L,
								default: [],
							},
							test: {
								description: (0, w.localize)(2631, null),
								type: "array",
								items: L,
								default: [],
							},
							remote: {
								description: (0, w.localize)(2632, null),
								type: "array",
								items: D,
								default: [],
							},
						},
						additionalProperties: {
							description: (0, w.localize)(2633, null),
							type: "array",
							items: L,
							default: [],
						},
					},
					N = y.$n2.registerExtensionPoint({
						extensionPoint: "viewsContainers",
						jsonSchema: e.$juc,
					}),
					A = y.$n2.registerExtensionPoint({
						extensionPoint: "views",
						deps: [N],
						jsonSchema: M,
						activationEventsGenerator: (z, F) => {
							for (const x of z)
								for (const H of Object.values(x))
									for (const q of H) q.id && F.push(`onView:${q.id}`);
						},
					}),
					R = 7;
				let O = class {
					static {
						this.ID = "workbench.contrib.viewsExtensionHandler";
					}
					constructor(F, x) {
						(this.f = F),
							(this.g = x),
							(this.c = r.$Io.as(g.Extensions.ViewContainersRegistry)),
							(this.d = r.$Io.as(g.Extensions.ViewsRegistry)),
							this.h(),
							this.o();
					}
					h() {
						N.setHandler((F, { added: x, removed: H }) => {
							H.length && this.j(H), x.length && this.i(x, this.c.all);
						});
					}
					i(F, x) {
						const H = r.$Io.as(g.Extensions.ViewContainersRegistry);
						let q =
								R +
								H.all.filter(
									(G) =>
										!!G.extensionId &&
										H.getViewContainerLocation(G) ===
											g.ViewContainerLocation.Sidebar,
								).length,
							V =
								5 +
								H.all.filter(
									(G) =>
										!!G.extensionId &&
										H.getViewContainerLocation(G) ===
											g.ViewContainerLocation.Panel,
								).length +
								1;
						for (const { value: G, collector: K, description: J } of F)
							Object.entries(G).forEach(([W, X]) => {
								if (this.k(X, K))
									switch (W) {
										case "activitybar":
											q = this.l(X, J, q, x, g.ViewContainerLocation.Sidebar);
											break;
										case "panel":
											V = this.l(X, J, V, x, g.ViewContainerLocation.Panel);
											break;
									}
							});
					}
					j(F) {
						const x = r.$Io.as(g.Extensions.ViewContainersRegistry),
							H = F.reduce(
								(q, V) => (q.add(V.description.identifier), q),
								new C.$Hn(),
							);
						for (const q of x.all)
							if (q.extensionId && H.has(q.extensionId)) {
								const V = this.d.getViews(q);
								V.length && this.d.moveViews(V, this.r()), this.n(q);
							}
					}
					k(F, x) {
						if (!Array.isArray(F))
							return x.error((0, w.localize)(2634, null)), !1;
						for (const H of F) {
							if (typeof H.id != "string" && (0, i.$jf)(H.id))
								return x.error((0, w.localize)(2635, null, "id")), !1;
							if (!/^[a-z0-9_-]+$/i.test(H.id))
								return x.error((0, w.localize)(2636, null, "id")), !1;
							if (typeof H.title != "string")
								return x.error((0, w.localize)(2637, null, "title")), !1;
							if (typeof H.icon != "string")
								return x.error((0, w.localize)(2638, null, "icon")), !1;
							if ((0, i.$jf)(H.title))
								return x.warn((0, w.localize)(2639, null, "title")), !0;
						}
						return !0;
					}
					l(F, x, H, q, V) {
						return (
							F.forEach((G) => {
								const J =
										u.ThemeIcon.fromString(G.icon) ||
										t.$nh(x.extensionLocation, G.icon),
									W = `workbench.view.extension.${G.id}`,
									X = G.title || W,
									Y = this.m(W, X, J, H++, x.identifier, V);
								if (q.length) {
									const ie = [];
									for (const ne of q)
										Y !== ne &&
											ie.push(
												...this.d
													.getViews(ne)
													.filter((ee) => ee.originalContainerId === G.id),
											);
									ie.length && this.d.moveViews(ie, Y);
								}
							}),
							H
						);
					}
					m(F, x, H, q, V, G) {
						let K = this.c.get(F);
						return (
							K ||
								(K = this.c.registerViewContainer(
									{
										id: F,
										title: { value: x, original: x },
										extensionId: V,
										ctorDescriptor: new d.$Ji(c.$ZSb, [
											F,
											{ mergeViewWithContainerWhenSingleView: !0 },
										]),
										hideIfEmpty: !0,
										order: q,
										icon: H,
									},
									G,
								)),
							K
						);
					}
					n(F) {
						this.c.deregisterViewContainer(F),
							r.$Io.as(a.$4Sb.Viewlets).deregisterPaneComposite(F.id);
					}
					o() {
						A.setHandler((F, { added: x, removed: H }) => {
							H.length && this.s(H), x.length && this.p(x);
						});
					}
					p(F) {
						const x = new Set(),
							H = [];
						for (const q of F) {
							const { value: V, collector: G } = q;
							Object.entries(V).forEach(([K, J]) => {
								if (!this.u(J, G)) return;
								if (
									K === "remote" &&
									!(0, l.$t2)(q.description, "contribViewsRemote")
								) {
									G.warn((0, w.localize)(2640, null, K));
									return;
								}
								const W = this.w(K);
								W || G.warn((0, w.localize)(2641, null, K));
								const X = W || this.r(),
									Y = [];
								for (let ie = 0; ie < J.length; ie++) {
									const ne = J[ie];
									if (x.has(ne.id)) {
										G.error((0, w.localize)(2642, null, ne.id));
										continue;
									}
									if (this.d.getView(ne.id) !== null) {
										G.error((0, w.localize)(2643, null, ne.id));
										continue;
									}
									const ee = C.$Gn.equals(
										q.description.identifier,
										X.extensionId,
									)
										? ie + 1
										: X.viewOrderDelegate
											? X.viewOrderDelegate.getOrder(ne.group)
											: void 0;
									let _;
									typeof ne.icon == "string" &&
										(_ =
											u.ThemeIcon.fromString(ne.icon) ||
											t.$nh(q.description.extensionLocation, ne.icon));
									const te = this.t(ne.visibility),
										Q = this.q(ne.type);
									if (!Q) {
										G.error((0, w.localize)(2644, null, ne.type));
										continue;
									}
									let Z;
									typeof ne.initialSize == "number" &&
										(X.extensionId?.value === q.description.identifier.value
											? (Z = ne.initialSize)
											: this.g.warn(
													`${q.description.identifier.value} tried to set the view size of ${ne.id} but it was ignored because the view container does not belong to it.`,
												));
									let se;
									(0, l.$t2)(
										q.description,
										"contribAccessibilityHelpContent",
									) &&
										ne.accessibilityHelpContent &&
										(se = new I.$cl(ne.accessibilityHelpContent));
									const re = {
										type: Q,
										ctorDescriptor:
											Q === P.Tree ? new d.$Ji(h.$Ptc) : new d.$Ji(s.$iuc),
										id: ne.id,
										name: { value: ne.name, original: ne.name },
										when: E.$Kj.deserialize(ne.when),
										containerIcon: _ || W?.icon,
										containerTitle:
											ne.contextualTitle ||
											(W &&
												(typeof W.title == "string" ? W.title : W.title.value)),
										canToggleVisibility: !0,
										canMoveView: W?.id !== f.$euc,
										treeView:
											Q === P.Tree
												? this.f.createInstance(
														h.$Rtc,
														ne.id,
														ne.name,
														q.description.identifier.value,
													)
												: void 0,
										collapsed: this.x(X) || te === k.Collapsed,
										order: ee,
										extensionId: q.description.identifier,
										originalContainerId: K,
										group: ne.group,
										remoteAuthority: ne.remoteName || ne.remoteAuthority,
										virtualWorkspace: ne.virtualWorkspace,
										hideByDefault: te === k.Hidden,
										workspace: W?.id === f.$euc ? !0 : void 0,
										weight: Z,
										accessibilityHelpContent: se,
									};
									x.add(re.id), Y.push(re);
								}
								H.push({ viewContainer: X, views: Y });
							});
						}
						this.d.registerViews2(H);
					}
					q(F) {
						if (F === P.Webview) return P.Webview;
						if (!F || F === P.Tree) return P.Tree;
					}
					r() {
						return this.c.get(o.$vUb);
					}
					s(F) {
						const x = F.reduce(
							(H, q) => (H.add(q.description.identifier), H),
							new C.$Hn(),
						);
						for (const H of this.c.all) {
							const q = this.d
								.getViews(H)
								.filter((V) => V.extensionId && x.has(V.extensionId));
							if (q.length) {
								this.d.deregisterViews(q, H);
								for (const V of q) {
									const G = V;
									G.treeView && G.treeView.dispose();
								}
							}
						}
					}
					t(F) {
						if (Object.values(k).includes(F)) return F;
					}
					u(F, x) {
						if (!Array.isArray(F))
							return x.error((0, w.localize)(2645, null)), !1;
						for (const H of F) {
							if (typeof H.id != "string")
								return x.error((0, w.localize)(2646, null, "id")), !1;
							if (typeof H.name != "string")
								return x.error((0, w.localize)(2647, null, "name")), !1;
							if (H.when && typeof H.when != "string")
								return x.error((0, w.localize)(2648, null, "when")), !1;
							if (H.icon && typeof H.icon != "string")
								return x.error((0, w.localize)(2649, null, "icon")), !1;
							if (H.contextualTitle && typeof H.contextualTitle != "string")
								return (
									x.error((0, w.localize)(2650, null, "contextualTitle")), !1
								);
							if (H.visibility && !this.t(H.visibility))
								return (
									x.error(
										(0, w.localize)(
											2651,
											null,
											"visibility",
											Object.values(k).join(", "),
										),
									),
									!1
								);
						}
						return !0;
					}
					w(F) {
						switch (F) {
							case "explorer":
								return this.c.get(o.$vUb);
							case "debug":
								return this.c.get(p.$Q4);
							case "scm":
								return this.c.get(b.$$6);
							case "remote":
								return this.c.get(f.$euc);
							default:
								return this.c.get(`workbench.view.extension.${F}`);
						}
					}
					x(F) {
						switch (F.id) {
							case o.$vUb:
							case b.$$6:
							case p.$Q4:
								return !0;
						}
						return !1;
					}
				};
				O = Ne([j(0, m.$Li), j(1, $.$ik)], O);
				class B extends S.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(F) {
						return !!F.contributes?.viewsContainers;
					}
					render(F) {
						const x = F.contributes?.viewsContainers || {},
							H = Object.keys(x).reduce((G, K) => {
								const J = x[K];
								return G.push(...J.map((W) => ({ ...W, location: K }))), G;
							}, []);
						if (!H.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const q = [
								(0, w.localize)(2652, null),
								(0, w.localize)(2653, null),
								(0, w.localize)(2654, null),
							],
							V = H.sort((G, K) => G.id.localeCompare(K.id)).map((G) => [
								G.id,
								G.title,
								G.location,
							]);
						return { data: { headers: q, rows: V }, dispose: () => {} };
					}
				}
				class U extends S.$1c {
					constructor() {
						super(...arguments), (this.type = "table");
					}
					shouldRender(F) {
						return !!F.contributes?.views;
					}
					render(F) {
						const x = F.contributes?.views || {},
							H = Object.keys(x).reduce((G, K) => {
								const J = x[K];
								return G.push(...J.map((W) => ({ ...W, location: K }))), G;
							}, []);
						if (!H.length)
							return { data: { headers: [], rows: [] }, dispose: () => {} };
						const q = [
								(0, w.localize)(2655, null),
								(0, w.localize)(2656, null),
								(0, w.localize)(2657, null),
							],
							V = H.sort((G, K) => G.id.localeCompare(K.id)).map((G) => [
								G.id,
								G.name,
								G.location,
							]);
						return { data: { headers: q, rows: V }, dispose: () => {} };
					}
				}
				r.$Io
					.as(v.Extensions.ExtensionFeaturesRegistry)
					.registerExtensionFeature({
						id: "viewsContainers",
						label: (0, w.localize)(2658, null),
						access: { canToggle: !1 },
						renderer: new d.$Ji(B),
					}),
					r.$Io
						.as(v.Extensions.ExtensionFeaturesRegistry)
						.registerExtensionFeature({
							id: "views",
							label: (0, w.localize)(2659, null),
							access: { canToggle: !1 },
							renderer: new d.$Ji(U),
						}),
					(0, n.$s6)(O.ID, O, n.WorkbenchPhase.BlockStartup);
			},
		)
