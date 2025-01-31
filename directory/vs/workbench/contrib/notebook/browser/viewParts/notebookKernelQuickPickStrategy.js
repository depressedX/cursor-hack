import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/async.js';
import '../../../../../base/common/cancellation.js';
import '../../../../../base/common/codicons.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/marshallingIds.js';
import '../../../../../base/common/strings.js';
import '../../../../../nls.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/label/common/label.js';
import '../../../../../platform/log/common/log.js';
import '../../../../../platform/product/common/productService.js';
import '../../../../../platform/progress/common/progress.js';
import '../../../../../platform/quickinput/common/quickInput.js';
import '../../../../../base/common/themables.js';
import '../../../../common/views.js';
import '../../../extensions/common/extensions.js';
import '../notebookBrowser.js';
import '../notebookIcons.js';
import '../../common/notebookKernelService.js';
import '../../../../services/extensions/common/extensions.js';
import '../../../../services/panecomposite/browser/panecomposite.js';
import '../../../../../base/common/uri.js';
import '../../../../../platform/opener/common/opener.js';
import '../controller/coreActions.js';
import '../../../../services/extensionManagement/common/extensionManagement.js';
define(
			de[1308],
			he([
				1, 0, 24, 15, 33, 14, 6, 3, 221, 37, 4, 31, 73, 34, 62, 84, 63, 26, 60,
				141, 108, 284, 243, 53, 142, 9, 41, 238, 157,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*arrays*/,
				i /*async*/,
				w /*cancellation*/,
				E /*codicons*/,
				C /*event*/,
				d /*lifecycle*/,
				m /*marshallingIds*/,
				r /*strings*/,
				u /*nls*/,
				a /*commands*/,
				h /*label*/,
				c /*log*/,
				n /*productService*/,
				g /*progress*/,
				p /*quickInput*/,
				o /*themables*/,
				f /*views*/,
				b /*extensions*/,
				s /*notebookBrowser*/,
				l /*notebookIcons*/,
				y /*notebookKernelService*/,
				$ /*extensions*/,
				v /*panecomposite*/,
				S /*uri*/,
				I /*opener*/,
				T /*coreActions*/,
				P /*extensionManagement*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$b4b = void 0);
				function k(F) {
					return "kernel" in F;
				}
				function L(F) {
					return "kernels" in F;
				}
				function D(F) {
					return "action" in F;
				}
				function M(F) {
					return F.id === "installSuggested" && "extensionIds" in F;
				}
				function N(F) {
					return F.id === "install";
				}
				function A(F) {
					return "command" in F;
				}
				function R(F) {
					return "autoRun" in F && !!F.autoRun;
				}
				const O = 200;
				function B(F, x) {
					const H = {
						kernel: F,
						picked: F.id === x?.id,
						label: F.label,
						description: F.description,
						detail: F.detail,
					};
					return (
						F.id === x?.id &&
							(H.description
								? (H.description = (0, u.localize)(8217, null, H.description))
								: (H.description = (0, u.localize)(8216, null))),
						H
					);
				}
				class U {
					constructor(x, H, q, V, G, K, J, W, X) {
						(this.c = x),
							(this.d = H),
							(this.f = q),
							(this.g = V),
							(this.h = G),
							(this.i = K),
							(this.j = J),
							(this.l = W),
							(this.m = X);
					}
					async showQuickPick(x, H, q) {
						const V = x.textModel,
							G = x.scopedContextKeyService,
							K = this.n(V),
							{ selected: J, all: W } = K;
						let X;
						if (H) {
							for (const Z of W)
								if (Z.id === H) {
									X = Z;
									break;
								}
							if (!X)
								return (
									this.h.warn(
										`wanted kernel DOES NOT EXIST, wanted: ${H}, all: ${W.map((Z) => Z.id)}`,
									),
									!1
								);
						}
						if (X) return this.q(V, X), !0;
						const Y = new d.$Zc(),
							ie = Y.add(this.f.createQuickPick({ useSeparators: !0 })),
							ne = this.o(V, K, this.c, G);
						if (ne.length === 1 && R(ne[0]) && !q) {
							const Z = await this.p(x, ne[0], ne);
							return Y.dispose(), Z;
						}
						(ie.items = ne),
							(ie.canSelectMany = !1),
							(ie.placeholder = J
								? (0, u.localize)(
										8218,
										null,
										this.g.getUriLabel(V.uri, { relative: !0 }),
									)
								: (0, u.localize)(
										8219,
										null,
										this.g.getUriLabel(V.uri, { relative: !0 }),
									)),
							(ie.busy = this.c.getKernelDetectionTasks(V).length > 0);
						const ee = this.c.onDidChangeKernelDetectionTasks(() => {
								ie.busy = this.c.getKernelDetectionTasks(V).length > 0;
							}),
							_ =
								ne.length === 0
									? (0, i.$zh)((Z) => this.s(V, ie, this.j, Z))
									: void 0,
							te = C.Event.debounce(
								C.Event.any(
									this.c.onDidChangeSourceActions,
									this.c.onDidAddKernel,
									this.c.onDidRemoveKernel,
									this.c.onDidChangeNotebookAffinity,
								),
								(Z, se) => Z,
								O,
							)(async () => {
								(ie.busy = !1), _?.cancel();
								const Z = ie.activeItems,
									se = this.n(V),
									re = this.o(V, se, this.c, G);
								ie.keepScrollPosition = !0;
								const le = [];
								for (const oe of Z)
									if (k(oe)) {
										const ae = oe.kernel.id,
											pe = re.find(($e) => k($e) && $e.kernel.id === ae);
										pe && le.push(pe);
									} else if (D(oe)) {
										const ae = re.find(
											(pe) =>
												D(pe) && pe.action.action.id === oe.action.action.id,
										);
										ae && le.push(ae);
									}
								(ie.items = re), (ie.activeItems = le);
							}, this),
							Q = await new Promise((Z, se) => {
								Y.add(
									ie.onDidAccept(() => {
										const re = ie.selectedItems[0];
										Z(
											re
												? { selected: re, items: ie.items }
												: { selected: void 0, items: ie.items },
										),
											ie.hide();
									}),
								),
									Y.add(
										ie.onDidHide(() => {
											ee.dispose(),
												te.dispose(),
												ie.dispose(),
												Z({ selected: void 0, items: ie.items });
										}),
									),
									ie.show();
							});
						return (
							Y.dispose(),
							Q.selected ? await this.p(x, Q.selected, Q.items) : !1
						);
					}
					n(x) {
						return this.c.getMatchingKernel(x);
					}
					async p(x, H, q) {
						if (k(H)) {
							const V = H.kernel;
							return this.q(x.textModel, V), !0;
						}
						return (
							N(H)
								? await this.r(this.i, this.j, this.l, x.textModel.viewType, [])
								: M(H)
									? await this.r(
											this.i,
											this.j,
											this.l,
											x.textModel.viewType,
											H.extensionIds,
											this.d.quality !== "stable",
										)
									: D(H) && H.action.runAction(),
							!0
						);
					}
					q(x, H) {
						this.c.selectKernelForNotebook(H, x);
					}
					async r(x, H, q, V, G, K) {
						const J = [],
							W = [];
						for (const ne of G) {
							const ee = (
								await H.getExtensions([{ id: ne }], w.CancellationToken.None)
							)[0];
							ee.enablementState === P.EnablementState.DisabledGlobally ||
							ee.enablementState === P.EnablementState.DisabledWorkspace ||
							ee.enablementState === P.EnablementState.DisabledByEnvironment
								? W.push(ee)
								: (await H.canInstall(ee)) && J.push(ee);
						}
						if (J.length || W.length) {
							await Promise.all([
								...J.map(async (ne) => {
									await H.install(
										ne,
										{
											installPreReleaseVersion: K ?? !1,
											context: { skipWalkthrough: !0 },
										},
										g.ProgressLocation.Notification,
									);
								}),
								...W.map(async (ne) => {
									switch (ne.enablementState) {
										case P.EnablementState.DisabledWorkspace:
											await H.setEnablement(
												[ne],
												P.EnablementState.EnabledWorkspace,
											);
											return;
										case P.EnablementState.DisabledGlobally:
											await H.setEnablement(
												[ne],
												P.EnablementState.EnabledGlobally,
											);
											return;
										case P.EnablementState.DisabledByEnvironment:
											await H.setEnablement(
												[ne],
												P.EnablementState.EnabledByEnvironment,
											);
											return;
										default:
											break;
									}
								}),
							]),
								await q.activateByEvent(`onNotebook:${V}`);
							return;
						}
						const Y = (
								await x.openPaneComposite(
									b.$LQb,
									f.ViewContainerLocation.Sidebar,
									!0,
								)
							)?.getViewPaneContainer(),
							ie = V.split(/[^a-z0-9]/gi)
								.map(r.$dg)
								.join("");
						Y?.search(`@tag:notebookKernel${ie}`);
					}
					async s(x, H, q, V) {
						H.busy = !0;
						const G = await this.t(x, q);
						(H.busy = !1),
							!V.isCancellationRequested &&
								G &&
								H.items.length === 0 &&
								(H.items = G);
					}
					async t(x, H) {
						const q = [],
							V = this.u(x),
							G = V ? this.v(x.viewType, V) : void 0;
						if (G) {
							if (
								(await H.queryLocal(),
								H.installed.filter(
									(J) =>
										(J.enablementState ===
											P.EnablementState.EnabledByEnvironment ||
											J.enablementState === P.EnablementState.EnabledGlobally ||
											J.enablementState ===
												P.EnablementState.EnabledWorkspace) &&
										G.extensionIds.includes(J.identifier.id),
								).length === G.extensionIds.length)
							)
								return;
							q.push({
								id: "installSuggested",
								description: G.displayName ?? G.extensionIds.join(", "),
								label:
									`$(${E.$ak.lightbulb.id}) ` + (0, u.localize)(8220, null),
								extensionIds: G.extensionIds,
							});
						}
						return (
							q.push({ id: "install", label: (0, u.localize)(8221, null) }), q
						);
					}
					u(x) {
						let q = x.metadata?.metadata?.language_info?.name;
						if (!q) {
							const V = x.cells
								.map((G) => G.language)
								.filter((G) => G !== "markdown");
							if (V.length > 1) {
								const G = V[0];
								V.every((K) => K === G) && (q = G);
							}
						}
						return q;
					}
					v(x, H) {
						return s.$dJb.get(x)?.get(H);
					}
				}
				let z = class extends U {
					constructor(x, H, q, V, G, K, J, W, X, Y, ie) {
						super(x, H, q, V, G, K, J, W, X), (this.w = Y), (this.x = ie);
					}
					o(x, H, q, V) {
						const G = [];
						if (H.selected) {
							const J = B(H.selected, H.selected);
							G.push(J);
						}
						H.suggestions
							.filter((J) => J.id !== H.selected?.id)
							.map((J) => B(J, H.selected))
							.forEach((J) => {
								G.push(J);
							});
						const K = G.length === 0;
						return (
							G.length > 0 && G.push({ type: "separator" }),
							G.push({
								id: "selectAnother",
								label: (0, u.localize)(8222, null),
								autoRun: K,
							}),
							G
						);
					}
					q(x, H) {
						const q = this.c.getMatchingKernel(x);
						q.selected && this.w.addMostRecentKernel(q.selected),
							super.q(x, H),
							this.w.addMostRecentKernel(H);
					}
					n(x) {
						const { selected: H, all: q } = this.w.getKernels(x),
							V = this.c.getMatchingKernel(x);
						return { selected: H, all: V.all, suggestions: q, hidden: [] };
					}
					async p(x, H, q) {
						return H.id === "selectAnother"
							? this.C(x, q.length === 1 && q[0] === H)
							: super.p(x, H, q);
					}
					async C(x, H) {
						const q = x.textModel,
							V = new d.$Zc(),
							G = V.add(this.f.createQuickPick({ useSeparators: !0 })),
							K = await new Promise((J) => {
								(G.title = H
									? (0, u.localize)(8223, null)
									: (0, u.localize)(8224, null)),
									(G.placeholder = (0, u.localize)(8225, null)),
									(G.busy = !0),
									(G.buttons = [this.f.backButton]),
									G.show(),
									V.add(
										G.onDidTriggerButton((W) => {
											W === this.f.backButton && J(W);
										}),
									),
									V.add(
										G.onDidTriggerItemButton(async (W) => {
											if (A(W.item) && W.item.documentation !== void 0) {
												const X = S.URI.isUri(W.item.documentation)
													? S.URI.parse(W.item.documentation)
													: await this.m.executeCommand(W.item.documentation);
												this.x.open(X, { openExternal: !0 });
											}
										}),
									),
									V.add(
										G.onDidAccept(async () => {
											J(G.selectedItems[0]);
										}),
									),
									V.add(
										G.onDidHide(() => {
											J(void 0);
										}),
									),
									this.D(x).then((W) => {
										(G.items = W), G.items.length > 0 && (G.busy = !1);
									}),
									V.add(
										C.Event.debounce(
											C.Event.any(
												this.c.onDidChangeSourceActions,
												this.c.onDidAddKernel,
												this.c.onDidRemoveKernel,
											),
											(W, X) => W,
											O,
										)(async () => {
											G.busy = !0;
											const W = await this.D(x);
											(G.items = W), (G.busy = !1);
										}),
									);
							});
						if ((G.hide(), V.dispose(), K === this.f.backButton))
							return this.showQuickPick(x, void 0, !0);
						if (K) {
							const J = K;
							if (A(J))
								try {
									const W = await this.F(q, J.command);
									if (W) {
										const { all: X } = await this.n(q),
											Y = X.find((ie) => ie.id === `ms-toolsai.jupyter/${W}`);
										return Y && (await this.q(q, Y)), !0;
									} else return this.C(x, !1);
								} catch {
									return !1;
								}
							else {
								if (k(J)) return await this.q(q, J.kernel), !0;
								if (L(J)) return await this.E(q, J.label, J.kernels), !0;
								if (D(J))
									try {
										return await J.action.runAction(), !0;
									} catch {
										return !1;
									}
								else {
									if (N(J))
										return (
											await this.r(
												this.i,
												this.j,
												this.l,
												x.textModel.viewType,
												[],
											),
											!0
										);
									if (M(J))
										return (
											await this.r(
												this.i,
												this.j,
												this.l,
												x.textModel.viewType,
												J.extensionIds,
												this.d.quality !== "stable",
											),
											this.C(x, !1)
										);
								}
							}
						}
						return !1;
					}
					async D(x) {
						const H = x.textModel,
							q = this.c.getSourceActions(H, x.scopedContextKeyService),
							V = await this.c.getKernelSourceActions2(H),
							G = this.n(H);
						if (q.length === 0 && G.all.length === 0 && V.length === 0)
							return (await this.t(H, this.j)) ?? [];
						const K = G.all.filter((X) => X.extension.value !== s.$bJb),
							J = [];
						for (const X of (0, t.$Db)(K, (Y, ie) =>
							Y.extension.value === ie.extension.value ? 0 : 1,
						)) {
							const Y = this.l.extensions.find(
									(ne) => ne.identifier.value === X[0].extension.value,
								),
								ie = Y?.displayName ?? Y?.description ?? X[0].extension.value;
							X.length > 1
								? J.push({ label: ie, kernels: X })
								: J.push({ label: X[0].label, kernel: X[0] });
						}
						const W = V.filter((X) => X.command);
						J.push(
							...W.map((X) => {
								const Y = X.documentation
									? [
											{
												iconClass: o.ThemeIcon.asClassName(E.$ak.info),
												tooltip: (0, u.localize)(8226, null),
											},
										]
									: [];
								return {
									id: typeof X.command == "string" ? X.command : X.command.id,
									label: X.label,
									description: X.description,
									command: X.command,
									documentation: X.documentation,
									buttons: Y,
								};
							}),
						);
						for (const X of q) {
							const Y = {
								action: X,
								picked: !1,
								label: X.action.label,
								tooltip: X.action.tooltip,
							};
							J.push(Y);
						}
						return J;
					}
					async E(x, H, q) {
						const V = q.map((J) => B(J, void 0)),
							G = new d.$Zc(),
							K = G.add(this.f.createQuickPick({ useSeparators: !0 }));
						(K.items = V),
							(K.canSelectMany = !1),
							(K.title = (0, u.localize)(8227, null, H)),
							G.add(
								K.onDidAccept(async () => {
									K.selectedItems &&
										K.selectedItems.length > 0 &&
										k(K.selectedItems[0]) &&
										(await this.q(x, K.selectedItems[0].kernel)),
										K.hide(),
										K.dispose();
								}),
							),
							G.add(
								K.onDidHide(() => {
									G.dispose();
								}),
							),
							K.show();
					}
					async F(x, H) {
						const q = typeof H == "string" ? H : H.id,
							V = typeof H == "string" ? [] : (H.arguments ?? []);
						return (
							(typeof H == "string" ||
								!H.arguments ||
								!Array.isArray(H.arguments) ||
								H.arguments.length === 0) &&
								V.unshift({
									uri: x.uri,
									$mid: m.MarshalledId.NotebookActionContext,
								}),
							typeof H == "string"
								? this.m.executeCommand(q)
								: this.m.executeCommand(q, ...V)
						);
					}
					static updateKernelStatusAction(x, H, q, V) {
						if (q.getKernelDetectionTasks(x).length) {
							const X = q.getMatchingKernel(x);
							if (
								((H.enabled = !0),
								(H.class = o.ThemeIcon.asClassName(
									o.ThemeIcon.modify(l.$jOb, "spin"),
								)),
								X.selected)
							) {
								H.label = X.selected.label;
								const Y = X.selected.description ?? X.selected.detail;
								H.tooltip = Y
									? (0, u.localize)(8228, null, Y)
									: (0, u.localize)(8229, null);
							} else H.label = (0, u.localize)(8230, null);
							return;
						}
						const K = q.getRunningSourceActions(x),
							J = (X, Y) => {
								const ie = X.action;
								(H.class = Y
									? o.ThemeIcon.asClassName(o.ThemeIcon.modify(l.$jOb, "spin"))
									: o.ThemeIcon.asClassName(l.$6Nb)),
									(H.label = ie.label),
									(H.enabled = !0);
							};
						if (K.length) return J(K[0], !0);
						const { selected: W } = V.getKernels(x);
						W
							? ((H.label = W.label),
								(H.class = o.ThemeIcon.asClassName(l.$6Nb)),
								(H.tooltip = W.description ?? W.detail ?? ""))
							: ((H.label = (0, u.localize)(8231, null)),
								(H.class = o.ThemeIcon.asClassName(l.$6Nb)),
								(H.tooltip = ""));
					}
					static async resolveKernel(x, H, q, V) {
						const G = q.getKernels(x);
						if (G.selected) return G.selected;
						await V.executeCommand(T.$o5b);
						const { selected: K } = q.getKernels(x);
						return K;
					}
				};
				(e.$b4b = z),
					(e.$b4b = z =
						Ne(
							[
								j(0, y.$f6),
								j(1, n.$Bk),
								j(2, p.$DJ),
								j(3, h.$3N),
								j(4, c.$ik),
								j(5, v.$6Sb),
								j(6, b.$MQb),
								j(7, $.$q2),
								j(8, a.$ek),
								j(9, y.$g6),
								j(10, I.$7rb),
							],
							z,
						));
			},
		)
