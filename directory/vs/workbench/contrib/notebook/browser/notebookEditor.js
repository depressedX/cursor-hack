import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/editor/editorPane.js';
import '../../../common/editor.js';
import './controller/coreActions.js';
import './services/notebookEditorService.js';
import './viewParts/notebookKernelView.js';
import '../common/notebookCommon.js';
import '../common/notebookEditorInput.js';
import '../common/notebookPerformance.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/progress/common/progress.js';
import '../../extensions/browser/extensionsActions.js';
import '../common/notebookService.js';
import '../../extensions/common/extensions.js';
import '../../../services/extensionManagement/common/extensionManagement.js';
import '../../../services/workingCopy/common/workingCopyBackup.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/log/common/log.js';
import '../common/services/notebookWorkerService.js';
import '../../../services/preferences/common/preferences.js';
import '../../../../base/common/stopwatch.js';
define(
			de[1360],
			he([
				1, 0, 7, 50, 15, 6, 3, 19, 47, 125, 4, 8, 22, 5, 21, 32, 35, 217, 44,
				238, 293, 1855, 70, 360, 3116, 66, 18, 84, 404, 161, 141, 157, 335, 76,
				34, 992, 131, 162,
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
				M,
				N,
				A,
				R,
				O,
				B,
			) {
				"use strict";
				var U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$B4b = void 0),
					(t = mt(t));
				const z = "NotebookEditorViewState";
				let F = class extends o.$JEb {
					static {
						U = this;
					}
					static {
						this.ID = y.$O6;
					}
					get onDidFocus() {
						return this.r.event;
					}
					get onDidBlur() {
						return this.s.event;
					}
					constructor(
						q,
						V,
						G,
						K,
						J,
						W,
						X,
						Y,
						ie,
						ne,
						ee,
						_,
						te,
						Q,
						Z,
						se,
						re,
						le,
					) {
						super(U.ID, q, V, G, J),
							(this.eb = K),
							(this.fb = W),
							(this.gb = X),
							(this.hb = Y),
							(this.ib = ie),
							(this.jb = ne),
							(this.kb = _),
							(this.lb = te),
							(this.mb = Q),
							(this.nb = Z),
							(this.ob = se),
							(this.pb = re),
							(this.qb = le),
							(this.b = this.D(new C.$Zc())),
							(this.c = this.D(new C.$Zc())),
							(this.f = { value: void 0 }),
							(this.m = this.D(new C.$2c())),
							(this.r = this.D(new E.$re())),
							(this.s = this.D(new E.$re())),
							(this.u = this.D(new E.$re())),
							(this.onDidChangeModel = this.u.event),
							(this.cb = this.D(new E.$re())),
							(this.onDidChangeSelection = this.cb.event),
							(this.db = this.D(new E.$re())),
							(this.onDidChangeScroll = this.db.event),
							(this.a = this.ab(X, ee, z)),
							this.D(
								this.jb.onDidChangeFileSystemProviderCapabilities((oe) =>
									this.rb(oe.scheme),
								),
							),
							this.D(
								this.jb.onDidChangeFileSystemProviderRegistrations((oe) =>
									this.rb(oe.scheme),
								),
							);
					}
					rb(q) {
						this.input instanceof $.$TIb &&
							this.input.resource?.scheme === q &&
							this.tb(this.input);
					}
					sb(q) {
						this.input === q && this.tb(q);
					}
					tb(q) {
						this.f.value?.setOptions({ isReadOnly: !!q.isReadonly() });
					}
					get textModel() {
						return this.f.value?.textModel;
					}
					get minimumWidth() {
						return 220;
					}
					get maximumWidth() {
						return Number.POSITIVE_INFINITY;
					}
					set minimumWidth(q) {}
					set maximumWidth(q) {}
					get scopedContextKeyService() {
						return this.f.value?.scopedContextKeyService;
					}
					Y(q) {
						(this.g = t.$fhb(q, t.$(".notebook-editor"))),
							(this.g.id = `notebook-editor-element-${(0, m.$9g)()}`);
					}
					getActionViewItem(q, V) {
						if (q.id === b.$o5b)
							return this.eb.createInstance(l.$c4b, q, this, V);
					}
					getControl() {
						return this.f.value;
					}
					setVisible(q) {
						super.setVisible(q), q || this.f.value?.onWillHide();
					}
					Z(q) {
						super.Z(q),
							this.b.clear(),
							this.b.add(
								this.group.onWillCloseEditor((V) => this.zb(V.editor)),
							),
							this.b.add(
								this.group.onDidModelChange(() => {
									this.gb.activeGroup !== this.group &&
										this.f?.value?.updateEditorFocus();
								}),
							),
							q ||
								(this.zb(this.input),
								this.input && this.f.value && this.f.value.onWillHide());
					}
					focus() {
						super.focus(), this.f.value?.focus();
					}
					hasFocus() {
						const q = this.f.value;
						return q
							? !!q &&
									t.$Lgb(
										q.getDomNode() || t.$Lgb(q.getOverflowContainerDomNode()),
									)
							: !1;
					}
					async setInput(q, V, G, K, J) {
						try {
							let W = !1;
							const X = (0, w.$Nh)(1e4);
							X.then(() => {
								(W = !0), this.wb(Y, q);
							});
							const Y = new v.$SIb();
							Y.mark("startTime"),
								(this.m.value = q.onDidChangeCapabilities(() => this.sb(q))),
								this.c.clear(),
								this.f.value?.onWillHide(),
								(this.f = this.eb.invokeFunction(
									this.hb.retrieveWidget,
									this.group.id,
									q,
									void 0,
									this.j?.dimension,
									this.window,
								)),
								this.g &&
									this.f.value.getDomNode() &&
									(this.g.setAttribute(
										"aria-flowto",
										this.f.value.getDomNode().id || "",
									),
									t.$Cgb(this.f.value.getDomNode(), this.g)),
								this.c.add(this.f.value.onDidChangeModel(() => this.u.fire())),
								this.c.add(
									this.f.value.onDidChangeActiveCell(() =>
										this.cb.fire({
											reason: f.EditorPaneSelectionChangeReason.USER,
										}),
									),
								),
								this.j &&
									this.f.value.layout(
										this.j.dimension,
										this.g,
										this.j.position,
									),
								await super.setInput(q, V, G, K);
							const ie = await q.resolve(V, Y);
							if ((Y.mark("inputLoaded"), K.isCancellationRequested)) return;
							if (!this.f.value)
								return J ? void 0 : this.setInput(q, V, G, K, !0);
							if (ie === null) {
								const _ = this.lb.getViewTypeProvider(q.viewType);
								if (!_)
									throw new Error((0, u.localize)(8084, null, q.viewType));
								await this.mb.whenInitialized;
								const te = this.mb.local.find((Q) => Q.identifier.id === _);
								throw (0, f.$E1)(
									new Error((0, u.localize)(8085, null, q.viewType)),
									[
										(0, i.$wj)({
											id: "workbench.notebook.action.installOrEnableMissing",
											label: te
												? (0, u.localize)(8086, null, q.viewType)
												: (0, u.localize)(8087, null, q.viewType),
											run: async () => {
												const Q = this.lb.onAddViewType((se) => {
														se === q.viewType &&
															(this.fb.openEditor({ resource: q.resource }),
															Q.dispose());
													}),
													Z = this.mb.local.find(
														(se) => se.identifier.id === _,
													);
												try {
													Z
														? await this.mb.setEnablement(
																Z,
																Z.enablementState ===
																	D.EnablementState.DisabledWorkspace
																	? D.EnablementState.EnabledWorkspace
																	: D.EnablementState.EnabledGlobally,
															)
														: await this.eb.createInstance(P.$KTb, _).run();
												} catch (se) {
													this.ob.error(
														`Failed to install or enable extension ${_}`,
														se,
													),
														Q.dispose();
												}
											},
										}),
										(0, i.$wj)({
											id: "workbench.notebook.action.openAsText",
											label: (0, u.localize)(8088, null),
											run: async () => {
												const Q = await this.nb.resolve({
													resource: q.resource,
													typeId: y.$66.create(q.viewType),
												});
												if (Q) {
													const Z = await (0, N.$6e)(Q.value);
													this.fb.openEditor({
														resource: void 0,
														contents: Z.toString(),
													});
												} else
													this.fb.openEditor({
														resource: q.resource,
														options: { override: f.$b1.id, pinned: !0 },
													});
											},
										}),
									],
									{ allowDialog: !0 },
								);
							}
							this.c.add(
								ie.notebook.onDidChangeContent(() =>
									this.cb.fire({
										reason: f.EditorPaneSelectionChangeReason.EDIT,
									}),
								),
							);
							const ne = V?.viewState ?? this.Ab(q);
							this.f.value.setParentContextKeyService(this.ib),
								this.f.value.setEditorProgressService(this.kb),
								await this.f.value.setModel(ie.notebook, ne, Y);
							const ee = !!q.isReadonly();
							if (
								(await this.f.value.setOptions({ ...V, isReadOnly: ee }),
								this.c.add(this.f.value.onDidFocusWidget(() => this.r.fire())),
								this.c.add(this.f.value.onDidBlurWidget(() => this.s.fire())),
								this.c.add(
									this.gb.createEditorDropTarget(this.f.value.getDomNode(), {
										containsGroup: (_) => this.group.id === _.id,
									}),
								),
								this.c.add(
									this.f.value.onDidScroll(() => {
										this.db.fire();
									}),
								),
								Y.mark("editorLoaded"),
								X.cancel(),
								W)
							)
								return;
							this.wb(Y, q, ie.notebook), this.xb(ie.notebook);
						} catch (W) {
							if (
								(this.ob.warn("NotebookEditorWidget#setInput failed", W),
								(0, f.$D1)(W))
							)
								throw W;
							if (
								W.fileOperationResult === h.FileOperationResult.FILE_TOO_LARGE
							) {
								let Y;
								throw (
									(W instanceof h.$Hl
										? (Y = (0, u.localize)(
												8089,
												null,
												h.$Tl.formatSize(W.size),
											))
										: (Y = (0, u.localize)(8090, null)),
									(0, f.$u1)(this.group, q, V, Y, this.qb))
								);
							}
							throw (0, f.$E1)(
								W instanceof Error ? W : new Error(W ? W.message : ""),
								[
									(0, i.$wj)({
										id: "workbench.notebook.action.openInTextEditor",
										label: (0, u.localize)(8091, null),
										run: async () => {
											const Y = this.fb.activeEditorPane;
											if (!Y) return;
											const ie = f.$A1.getCanonicalUri(Y.input);
											if (ie && ie.toString() === q.resource?.toString())
												return this.fb.openEditor({
													resource: ie,
													options: { override: f.$b1.id, pinned: !0 },
												});
										},
									}),
								],
								{ allowDialog: !0 },
							);
						}
					}
					wb(q, V, G) {
						const K = q.value,
							J = K.startTime,
							W = K.extensionActivated,
							X = K.inputLoaded,
							Y = K.webviewCommLoaded,
							ie = K.customMarkdownLoaded,
							ne = K.editorLoaded;
						let ee = -1,
							_ = -1,
							te = -1,
							Q = -1,
							Z = -1;
						J !== void 0 &&
							W !== void 0 &&
							((ee = W - J),
							X !== void 0 && (_ = X - W),
							Y !== void 0 && (te = Y - W),
							ie !== void 0 && (Q = ie - J),
							ne !== void 0 && (Z = ne - J));
						let se, re, le, oe, ae, pe, $e;
						if (G) {
							const ye = new B.$le();
							for (const ue of G.cells)
								ue.cellKind === y.CellKind.Code
									? ((se = (se || 0) + 1),
										(ae = (ae || 0) + ue.getTextLength()),
										(le = (le || 0) + ue.outputs.length),
										(oe =
											(oe || 0) +
											ue.outputs.reduce(
												(fe, me) =>
													fe +
													me.outputs.reduce(
														(ve, ge) => ve + ge.data.byteLength,
														0,
													),
												0,
											)))
									: ((re = (re || 0) + 1),
										(pe = (ae || 0) + ue.getTextLength()));
							$e = ye.elapsed();
						}
						this.ob.trace(
							`[NotebookEditor] open notebook perf ${G?.uri.toString() ?? ""} - extensionActivation: ${ee}, inputLoad: ${_}, webviewComm: ${te}, customMarkdown: ${Q}, editorLoad: ${Z}`,
						),
							this.Q.publicLog2("notebook/editorOpenPerf", {
								scheme: V.resource.scheme,
								ext: (0, d.$lh)(V.resource),
								viewType: V.viewType,
								extensionActivated: ee,
								inputLoaded: _,
								webviewCommLoaded: te,
								customMarkdownLoaded: Q,
								editorLoaded: Z,
								codeCellCount: se,
								mdCellCount: re,
								outputCount: le,
								outputBytes: oe,
								codeLength: ae,
								markdownLength: pe,
								notebookStatsLoaded: $e,
							});
					}
					xb(q) {
						this.pb.canPromptRecommendation(q.uri).then((V) => {
							this.Q.publicLog2("notebook/shouldPromptRecommendation", {
								shouldPrompt: V,
							});
						});
					}
					clearInput() {
						this.m.clear(),
							this.f.value && (this.zb(this.input), this.f.value.onWillHide()),
							super.clearInput();
					}
					setOptions(q) {
						this.f.value?.setOptions(q), super.setOptions(q);
					}
					I() {
						this.zb(this.input), super.I();
					}
					getViewState() {
						const q = this.input;
						if (q instanceof $.$TIb) return this.zb(q), this.Ab(q);
					}
					getSelection() {
						if (this.f.value) {
							const q = this.f.value.getActiveCell();
							if (q) {
								const V = q.uri;
								return new x(V, q.getSelections());
							}
						}
					}
					getScrollPosition() {
						const q = this.getControl();
						if (!q)
							throw new Error("Notebook widget has not yet been initialized");
						return { scrollTop: q.scrollTop, scrollLeft: 0 };
					}
					setScrollPosition(q) {
						const V = this.getControl();
						if (!V) throw new Error("Control has not yet been initialized");
						V.setScrollTop(q.scrollTop);
					}
					zb(q) {
						if (this.f.value && q instanceof $.$TIb) {
							if (this.f.value.isDisposed) return;
							const V = this.f.value.getEditorViewState();
							this.a.saveEditorState(this.group, q.resource, V);
						}
					}
					Ab(q) {
						const V = this.a.loadEditorState(this.group, q.resource);
						if (V) return V;
						for (const G of this.gb.getGroups(
							S.GroupsOrder.MOST_RECENTLY_ACTIVE,
						))
							if (
								G.activeEditorPane !== this &&
								G.activeEditorPane instanceof U &&
								G.activeEditor?.matches(q)
							)
								return G.activeEditorPane.f.value?.getEditorViewState();
					}
					layout(q, V) {
						this.g.classList.toggle(
							"mid-width",
							q.width < 1e3 && q.width >= 600,
						),
							this.g.classList.toggle("narrow-width", q.width < 600),
							(this.j = { dimension: q, position: V }),
							!(!this.f.value || !(this.input instanceof $.$TIb)) &&
								((this.input.resource.toString() !==
									this.textModel?.uri.toString() &&
									this.f.value?.hasModel()) ||
									(this.isVisible() && this.f.value.layout(q, this.g, V)));
					}
				};
				(e.$B4b = F),
					(e.$B4b =
						F =
						U =
							Ne(
								[
									j(1, g.$km),
									j(2, p.$iP),
									j(3, c.$Li),
									j(4, n.$lq),
									j(5, I.$IY),
									j(6, S.$EY),
									j(7, s.$n5b),
									j(8, a.$6j),
									j(9, h.$ll),
									j(10, r.$XO),
									j(11, T.$bO),
									j(12, k.$MIb),
									j(13, L.$MQb),
									j(14, M.$WO),
									j(15, A.$ik),
									j(16, R.$A4b),
									j(17, O.$7Z),
								],
								F,
							));
				class x {
					constructor(q, V) {
						(this.a = q), (this.b = V);
					}
					compare(q) {
						return q instanceof x && (0, d.$gh)(this.a, q.a)
							? f.EditorPaneSelectionCompareResult.IDENTICAL
							: f.EditorPaneSelectionCompareResult.DIFFERENT;
					}
					restore(q) {
						const V = {
							cellOptions: {
								resource: this.a,
								options: { selection: this.b[0] },
							},
						};
						return Object.assign(V, q), V;
					}
					log() {
						return this.a.fragment;
					}
				}
			},
		),
		