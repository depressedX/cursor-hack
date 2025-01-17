import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/event.js';
import '../../../../base/common/network.js';
import '../../../../base/common/errorMessage.js';
import '../../../../base/common/cancellation.js';
import '../../../services/workingCopy/common/workingCopyHistory.js';
import '../../../browser/parts/editor/editorCommands.js';
import './localHistoryFileSystemProvider.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../base/common/resources.js';
import '../../../../platform/commands/common/commands.js';
import '../../../common/editor.js';
import '../../../../platform/files/common/files.js';
import '../../../services/workingCopy/common/workingCopyService.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../services/editor/common/editorService.js';
import '../../../common/contextkeys.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../editor/common/services/getIconClasses.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/label/common/label.js';
import '../../../../base/common/arrays.js';
import './localHistory.js';
import '../../../services/path/common/pathService.js';
import '../../../../base/common/map.js';
import '../../../services/history/common/history.js';
import '../../../../base/common/lifecycle.js';
define(
			de[1341],
			he([
				1, 0, 4, 9, 6, 23, 163, 33, 717, 247, 1737, 8, 11, 19, 31, 44, 22, 227,
				57, 18, 100, 63, 252, 67, 61, 73, 24, 1246, 165, 59, 245, 3,
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
				D,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$i2c = void 0),
					(e.$j2c = x),
					(e.$k2c = H);
				const M = (0, t.localize2)(7378, "Local History"),
					N = a.$Kj.has("config.workbench.localHistory.enabled");
				(e.$i2c = (0, t.localize2)(7379, "Compare with File")),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.compareWithFile",
									title: e.$i2c,
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "1_compare",
										order: 1,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(n.$ek),
									W = G.get(m.$a2c),
									{ entry: X } = await H(W, K);
								if (X)
									return J.executeCommand(
										r.$AWb,
										...x(X, X.workingCopy.resource),
									);
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.compareWithPrevious",
									title: (0, t.localize2)(7380, "Compare with Previous"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "1_compare",
										order: 2,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(n.$ek),
									W = G.get(m.$a2c),
									X = G.get(b.$IY),
									{ entry: Y, previous: ie } = await H(W, K);
								if (Y)
									return ie ? J.executeCommand(r.$AWb, ...x(ie, Y)) : z(Y, X);
							}
						},
					);
				let A;
				const R = new a.$5j("localHistoryItemSelectedForCompare", !1, !0);
				(0, h.$4X)(
					class extends h.$3X {
						constructor() {
							super({
								id: "workbench.action.localHistory.selectForCompare",
								title: (0, t.localize2)(7381, "Select for Compare"),
								menu: {
									id: h.$XX.TimelineItemContext,
									group: "2_compare_with",
									order: 2,
									when: T.$f2c,
								},
							});
						}
						async run(G, K) {
							const J = G.get(m.$a2c),
								W = G.get(a.$6j),
								{ entry: X } = await H(J, K);
							X && ((A = K), R.bindTo(W).set(!0));
						}
					},
				),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.compareWithSelected",
									title: (0, t.localize2)(7382, "Compare with Selected"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "2_compare_with",
										order: 1,
										when: a.$Kj.and(T.$f2c, R),
									},
								});
							}
							async run(G, K) {
								const J = G.get(m.$a2c),
									W = G.get(n.$ek);
								if (!A) return;
								const X = (await H(J, A)).entry;
								if (!X) return;
								const { entry: Y } = await H(J, K);
								if (Y) return W.executeCommand(r.$AWb, ...x(X, Y));
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.open",
									title: (0, t.localize2)(7383, "Show Contents"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "3_contents",
										order: 1,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(m.$a2c),
									W = G.get(b.$IY),
									{ entry: X } = await H(J, K);
								if (X) return z(X, W);
							}
						},
					);
				const O = (0, t.localize2)(7384, "Restore Contents");
				(0, h.$4X)(
					class extends h.$3X {
						constructor() {
							super({
								id: "workbench.action.localHistory.restoreViaEditor",
								title: O,
								menu: {
									id: h.$XX.EditorTitle,
									group: "navigation",
									order: -10,
									when: s.$BQb.Scheme.isEqualTo(u.$c2c.SCHEMA),
								},
								icon: T.$h2c,
							});
						}
						async run(G, K) {
							const { associatedResource: J, location: W } =
								u.$c2c.fromLocalHistoryFileSystem(K);
							return U(G, { uri: J, handle: (0, c.$jh)(W) });
						}
					},
				),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.restore",
									title: O,
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "3_contents",
										order: 2,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								return U(G, K);
							}
						},
					);
				const B = g.$p1.registerSource(
					"localHistoryRestore.source",
					(0, t.localize)(7358, null),
				);
				async function U(G, K) {
					const J = G.get(p.$ll),
						W = G.get(f.$GO),
						X = G.get(o.$gY),
						Y = G.get(m.$a2c),
						ie = G.get(b.$IY),
						{ entry: ne } = await H(Y, K);
					if (ne) {
						const { confirmed: ee } = await W.confirm({
							type: "warning",
							message: (0, t.localize)(
								7359,
								null,
								(0, c.$kh)(ne.workingCopy.resource),
							),
							detail: (0, t.localize)(7360, null),
							primaryButton: (0, t.localize)(7361, null),
						});
						if (!ee) return;
						const _ = X.getAll(ne.workingCopy.resource);
						if (_)
							for (const te of _)
								te.isDirty() && (await te.revert({ soft: !0 }));
						try {
							await J.cloneFile(ne.location, ne.workingCopy.resource);
						} catch (te) {
							await W.error(
								(0, t.localize)(
									7362,
									null,
									(0, c.$kh)(ne.workingCopy.resource),
								),
								(0, C.$xj)(te),
							);
							return;
						}
						if (_) for (const te of _) await te.revert({ force: !0 });
						await ie.openEditor({ resource: ne.workingCopy.resource }),
							await Y.addEntry(
								{ resource: ne.workingCopy.resource, source: B },
								d.CancellationToken.None,
							),
							await F(ne, ie);
					}
				}
				(0, h.$4X)(
					class extends h.$3X {
						constructor() {
							super({
								id: "workbench.action.localHistory.restoreViaPicker",
								title: (0, t.localize2)(7385, "Find Entry to Restore"),
								f1: !0,
								category: M,
								precondition: N,
							});
						}
						async run(G) {
							const K = G.get(m.$a2c),
								J = G.get(l.$DJ),
								W = G.get($.$QO),
								X = G.get(v.$nM),
								Y = G.get(S.$3N),
								ie = G.get(b.$IY),
								ne = G.get(p.$ll),
								ee = G.get(n.$ek),
								_ = G.get(L.$Feb),
								te = new D.$Zc(),
								Q = te.add(J.createQuickPick());
							let Z = new d.$Ce();
							te.add(Q.onDidHide(() => Z.dispose(!0))), (Q.busy = !0), Q.show();
							const se = new k.$Hc(await K.getAll(Z.token)),
								re = new k.$Hc(
									(0, I.$Lb)(_.getHistory().map(({ resource: ye }) => ye)),
								),
								le = [];
							for (const ye of re) se.has(ye) && (le.push(ye), se.delete(ye));
							le.push(
								...[...se].sort((ye, ue) => (ye.fsPath < ue.fsPath ? -1 : 1)),
							),
								(Q.busy = !1),
								(Q.placeholder = (0, t.localize)(7363, null)),
								(Q.matchOnLabel = !0),
								(Q.matchOnDescription = !0),
								(Q.items = [...le].map((ye) => ({
									resource: ye,
									label: (0, c.$jh)(ye),
									description: Y.getUriLabel((0, c.$mh)(ye), { relative: !0 }),
									iconClasses: (0, y.$BDb)(W, X, ye),
								}))),
								await w.Event.toPromise(Q.onDidAccept),
								te.dispose();
							const oe = (0, I.$Sb)(Q.selectedItems)?.resource;
							if (!oe) return;
							const ae = new D.$Zc(),
								pe = ae.add(J.createQuickPick());
							(Z = new d.$Ce()),
								ae.add(pe.onDidHide(() => Z.dispose(!0))),
								(pe.busy = !0),
								pe.show();
							const $e = await K.getEntries(oe, Z.token);
							(pe.busy = !1),
								(pe.canAcceptInBackground = !0),
								(pe.placeholder = (0, t.localize)(7364, null)),
								(pe.matchOnLabel = !0),
								(pe.matchOnDescription = !0),
								(pe.items = Array.from($e)
									.reverse()
									.map((ye) => ({
										entry: ye,
										label: `$(circle-outline) ${g.$p1.getSourceLabel(ye.source)}`,
										description: V(ye.timestamp),
									}))),
								ae.add(
									pe.onDidAccept(async (ye) => {
										ye.inBackground || ae.dispose();
										const ue = (0, I.$Sb)(pe.selectedItems);
										return ue
											? (await ne.exists(ue.entry.workingCopy.resource))
												? ee.executeCommand(
														r.$AWb,
														...x(ue.entry, ue.entry.workingCopy.resource, {
															preserveFocus: ye.inBackground,
														}),
													)
												: z(ue.entry, ie, { preserveFocus: ye.inBackground })
											: void 0;
									}),
								);
						}
					},
				),
					h.$ZX.appendMenuItem(h.$XX.TimelineTitle, {
						command: {
							id: "workbench.action.localHistory.restoreViaPicker",
							title: (0, t.localize2)(
								7386,
								"Local History: Find Entry to Restore...",
							),
						},
						group: "submenu",
						order: 1,
						when: N,
					}),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.rename",
									title: (0, t.localize2)(7387, "Rename"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "5_edit",
										order: 1,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(m.$a2c),
									W = G.get(l.$DJ),
									{ entry: X } = await H(J, K);
								if (X) {
									const Y = new D.$Zc(),
										ie = Y.add(W.createInputBox());
									(ie.title = (0, t.localize)(7365, null)),
										(ie.ignoreFocusOut = !0),
										(ie.placeholder = (0, t.localize)(7366, null)),
										(ie.value = g.$p1.getSourceLabel(X.source)),
										ie.show(),
										Y.add(
											ie.onDidAccept(() => {
												ie.value &&
													J.updateEntry(
														X,
														{ source: ie.value },
														d.CancellationToken.None,
													),
													Y.dispose();
											}),
										);
								}
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.delete",
									title: (0, t.localize2)(7388, "Delete"),
									menu: {
										id: h.$XX.TimelineItemContext,
										group: "5_edit",
										order: 2,
										when: T.$f2c,
									},
								});
							}
							async run(G, K) {
								const J = G.get(m.$a2c),
									W = G.get(b.$IY),
									X = G.get(f.$GO),
									{ entry: Y } = await H(J, K);
								if (Y) {
									const { confirmed: ie } = await X.confirm({
										type: "warning",
										message: (0, t.localize)(
											7367,
											null,
											Y.workingCopy.name,
											V(Y.timestamp),
										),
										detail: (0, t.localize)(7368, null),
										primaryButton: (0, t.localize)(7369, null),
									});
									if (!ie) return;
									await J.removeEntry(Y, d.CancellationToken.None),
										await F(Y, W);
								}
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.deleteAll",
									title: (0, t.localize2)(7389, "Delete All"),
									f1: !0,
									category: M,
									precondition: N,
								});
							}
							async run(G) {
								const K = G.get(f.$GO),
									J = G.get(m.$a2c),
									{ confirmed: W } = await K.confirm({
										type: "warning",
										message: (0, t.localize)(7370, null),
										detail: (0, t.localize)(7371, null),
										primaryButton: (0, t.localize)(7372, null),
									});
								W && (await J.removeAll(d.CancellationToken.None));
							}
						},
					),
					(0, h.$4X)(
						class extends h.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.create",
									title: (0, t.localize2)(7390, "Create Entry"),
									f1: !0,
									category: M,
									precondition: a.$Kj.and(N, s.$TPb),
								});
							}
							async run(G) {
								const K = G.get(m.$a2c),
									J = G.get(l.$DJ),
									W = G.get(b.$IY),
									X = G.get(S.$3N),
									Y = G.get(P.$I8),
									ie = g.$A1.getOriginalUri(W.activeEditor, {
										supportSideBySide: g.SideBySideEditor.PRIMARY,
									});
								if (
									ie?.scheme !== Y.defaultUriScheme &&
									ie?.scheme !== E.Schemas.vscodeUserData
								)
									return;
								const ne = new D.$Zc(),
									ee = ne.add(J.createInputBox());
								(ee.title = (0, t.localize)(7373, null)),
									(ee.ignoreFocusOut = !0),
									(ee.placeholder = (0, t.localize)(
										7374,
										null,
										X.getUriBasenameLabel(ie),
									)),
									ee.show(),
									ne.add(
										ee.onDidAccept(async () => {
											const _ = ee.value;
											ne.dispose(),
												_ &&
													(await K.addEntry(
														{ resource: ie, source: ee.value },
														d.CancellationToken.None,
													));
										}),
									);
							}
						},
					);
				async function z(G, K, J) {
					const W = u.$c2c.toLocalHistoryFileSystem({
						location: G.location,
						associatedResource: G.workingCopy.resource,
					});
					await K.openEditor({
						resource: W,
						label: (0, t.localize)(
							7375,
							null,
							G.workingCopy.name,
							g.$p1.getSourceLabel(G.source),
							V(G.timestamp),
						),
						options: J,
					});
				}
				async function F(G, K) {
					const J = u.$c2c.toLocalHistoryFileSystem({
							location: G.location,
							associatedResource: G.workingCopy.resource,
						}),
						W = K.findEditors(J, { supportSideBySide: g.SideBySideEditor.ANY });
					await K.closeEditors(W, { preserveFocus: !0 });
				}
				function x(G, K, J) {
					const W = u.$c2c.toLocalHistoryFileSystem({
						location: G.location,
						associatedResource: G.workingCopy.resource,
					});
					let X, Y;
					if (i.URI.isUri(K))
						(Y = K),
							(X = (0, t.localize)(
								7376,
								null,
								G.workingCopy.name,
								g.$p1.getSourceLabel(G.source),
								V(G.timestamp),
								G.workingCopy.name,
							));
					else {
						const ie = K;
						(Y = u.$c2c.toLocalHistoryFileSystem({
							location: ie.location,
							associatedResource: ie.workingCopy.resource,
						})),
							(X = (0, t.localize)(
								7377,
								null,
								G.workingCopy.name,
								g.$p1.getSourceLabel(G.source),
								V(G.timestamp),
								ie.workingCopy.name,
								g.$p1.getSourceLabel(ie.source),
								V(ie.timestamp),
							));
					}
					return [W, Y, X, J ? [void 0, J] : void 0];
				}
				async function H(G, K) {
					const J = await G.getEntries(K.uri, d.CancellationToken.None);
					let W, X;
					for (let Y = 0; Y < J.length; Y++) {
						const ie = J[Y];
						if (ie.id === K.handle) {
							(W = ie), (X = J[Y - 1]);
							break;
						}
					}
					return { entry: W, previous: X };
				}
				const q = /\//g;
				function V(G) {
					return `${(0, T.$d2c)().format(G).replace(q, "-")}`;
				}
			},
		),
		