import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/browser/dom.js';
import '../../../../../../base/common/async.js';
import '../../../../../../base/common/cancellation.js';
import '../../../../../../base/common/event.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/map.js';
import '../../../../../../base/common/network.js';
import '../../../../../../base/common/numbers.js';
import '../../../../../../base/common/resources.js';
import '../../../../../../base/common/stopwatch.js';
import '../../../../../../base/common/types.js';
import '../../../../../../base/common/uri.js';
import '../../../../../../editor/browser/widget/codeEditor/codeEditorWidget.js';
import '../../../../../../editor/common/core/selection.js';
import '../../../../../../editor/common/languages.js';
import '../../../../../../editor/common/languages/language.js';
import '../../../../../../editor/common/services/editorWorker.js';
import '../../../../../../editor/common/services/model.js';
import '../../../../../../nls.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/storage/common/storage.js';
import '../../../../chat/common/chatAgents.js';
import '../../../../chat/common/chatService.js';
import '../../../../chat/common/chatWordCounter.js';
import '../../../../inlineChat/browser/inlineChatWidget.js';
import '../../../../inlineChat/browser/utils.js';
import '../cellOperations.js';
import './notebookChatContext.js';
import '../../notebookEditorExtensions.js';
import '../../../common/notebookCommon.js';
import '../../../common/notebookExecutionStateService.js';
define(
			de[1359],
			he([
				1, 0, 7, 15, 33, 6, 3, 59, 23, 201, 19, 162, 28, 9, 206, 104, 74, 61,
				200, 67, 4, 8, 5, 21, 153, 218, 790, 1357, 1734, 624, 688, 330, 70, 190,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*async*/,
				w /*cancellation*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*map*/,
				m /*network*/,
				r /*numbers*/,
				u /*resources*/,
				a /*stopwatch*/,
				h /*types*/,
				c /*uri*/,
				n /*codeEditorWidget*/,
				g /*selection*/,
				p /*languages*/,
				o /*language*/,
				f /*editorWorker*/,
				b /*model*/,
				s /*nls*/,
				l /*contextkey*/,
				y /*instantiation*/,
				$ /*storage*/,
				v /*chatAgents*/,
				S /*chatService*/,
				I /*chatWordCounter*/,
				T /*inlineChatWidget*/,
				P /*utils*/,
				k /*cellOperations*/,
				L /*notebookChatContext*/,
				D /*notebookEditorExtensions*/,
				M /*notebookCommon*/,
				N /*notebookExecutionStateService*/,
) {
				"use strict";
				var A;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$z1b = e.$y1b = void 0);
				class R extends C.$1c {
					set afterModelPosition(F) {
						this.notebookViewZone.afterModelPosition = F;
					}
					get afterModelPosition() {
						return this.notebookViewZone.afterModelPosition;
					}
					set heightInPx(F) {
						this.notebookViewZone.heightInPx = F;
					}
					get heightInPx() {
						return this.notebookViewZone.heightInPx;
					}
					get editingCell() {
						return this.a;
					}
					constructor(F, x, H, q, V, G, K, J) {
						super(),
							(this.b = F),
							(this.id = x),
							(this.notebookViewZone = H),
							(this.domNode = q),
							(this.widgetContainer = V),
							(this.inlineChatWidget = G),
							(this.parentEditor = K),
							(this.c = J),
							(this.a = null);
						const W = () => {
							this.heightInPx !== G.contentHeight &&
								((this.heightInPx = G.contentHeight),
								this.b.changeViewZones((X) => {
									X.layoutZone(x);
								}),
								this.f(G, V));
						};
						this.D(
							G.onDidChangeHeight(() => {
								W();
							}),
						),
							this.D(
								G.chatWidget.onDidChangeHeight(() => {
									W();
								}),
							),
							(this.heightInPx = G.contentHeight),
							this.f(G, V);
					}
					layout() {
						this.f(this.inlineChatWidget, this.widgetContainer);
					}
					restoreEditingCell(F) {
						this.a = F;
						const x = this.b.deltaCellDecorations(
							[],
							[
								{
									handle: this.a.handle,
									options: {
										className: "nb-chatGenerationHighlight",
										outputClassName: "nb-chatGenerationHighlight",
									},
								},
							],
						);
						this.D(
							(0, C.$Yc)(() => {
								this.b.deltaCellDecorations(x, []);
							}),
						);
					}
					hasFocus() {
						return this.inlineChatWidget.hasFocus();
					}
					focus() {
						this.updateNotebookEditorFocusNSelections(),
							this.inlineChatWidget.focus();
					}
					updateNotebookEditorFocusNSelections() {
						this.b.focusContainer(!0),
							this.b.setFocus({
								start: this.afterModelPosition,
								end: this.afterModelPosition,
							}),
							this.b.setSelections([
								{
									start: this.afterModelPosition,
									end: this.afterModelPosition,
								},
							]);
					}
					getEditingCell() {
						return this.a;
					}
					async getOrCreateEditingCell() {
						if (this.a) {
							const q = this.b.codeEditors.find((V) => V[0] === this.a)?.[1];
							return q?.hasModel() ? { cell: this.a, editor: q } : void 0;
						}
						if (!this.b.hasModel()) return;
						const F = this.inlineChatWidget.hasFocus();
						if (
							((this.a = (0, k.$M5b)(
								this.c,
								this.b,
								this.afterModelPosition,
								M.CellKind.Code,
								"above",
							)),
							!this.a)
						)
							return;
						await this.b.revealFirstLineIfOutsideViewport(this.a);
						const x = this.b.deltaCellDecorations(
							[],
							[
								{
									handle: this.a.handle,
									options: {
										className: "nb-chatGenerationHighlight",
										outputClassName: "nb-chatGenerationHighlight",
									},
								},
							],
						);
						this.D(
							(0, C.$Yc)(() => {
								this.b.deltaCellDecorations(x, []);
							}),
						),
							F && this.focus();
						const H = this.b.codeEditors.find((q) => q[0] === this.a)?.[1];
						if (H?.hasModel()) return { cell: this.a, editor: H };
					}
					async discardChange() {
						this.b.hasModel() && this.a && (0, k.$F5b)(this.b, this.a);
					}
					f(F, x) {
						const q =
								this.b.notebookOptions.getLayoutConfiguration().cellRightMargin,
							V = this.b.notebookOptions.getCellEditorContainerLeftMargin(),
							K = Math.min(640, this.b.getLayoutInfo().width - V - q);
						F.layout(new t.$pgb(K, this.heightInPx)),
							(F.domNode.style.width = `${K}px`),
							(x.style.left = `${V}px`);
					}
					dispose() {
						this.b.changeViewZones((F) => {
							F.removeZone(this.id);
						}),
							this.domNode.remove(),
							super.dispose();
					}
				}
				class O {
					static str(F) {
						return `${F.viewType}/${F.uri.toString()}`;
					}
					static obj(F) {
						const x = F.indexOf("/");
						return {
							viewType: F.substring(0, x),
							uri: c.URI.parse(F.substring(x + 1)),
						};
					}
				}
				let B = class extends C.$1c {
					static {
						A = this;
					}
					static {
						this.id = "workbench.notebook.chatController";
					}
					static {
						this.counter = 0;
					}
					static get(F) {
						return F.getContribution(A.id);
					}
					static {
						this.a = "inline-chat-history";
					}
					static {
						this.b = [];
					}
					constructor(F, x, H, q, V, G, K, J, W) {
						super(),
							(this.I = F),
							(this.J = x),
							(this.L = H),
							(this.M = q),
							(this.N = V),
							(this.O = G),
							(this.P = K),
							(this.Q = J),
							(this.R = W),
							(this.c = -1),
							(this.f = ""),
							(this.h = new d.$Jc(1e3, 0.7)),
							(this.j = this.D(new E.$re())),
							(this.onDidChangePromptCache = this.j.event),
							(this.z = this.D(new C.$Zc())),
							(this.C = this.D(new C.$Zc())),
							(this.H = this.D(new C.$2c())),
							(this.t = L.$p1b.bindTo(this.L)),
							(this.u = L.$o1b.bindTo(this.L)),
							(this.w = L.$q1b.bindTo(this.L)),
							(this.y = L.$r1b.bindTo(this.L)),
							this.S(),
							(A.b = JSON.parse(this.Q.get(A.a, $.StorageScope.PROFILE, "[]"))),
							(this.g = (X) => {
								const Y = A.b.indexOf(X);
								Y >= 0 && A.b.splice(Y, 1),
									A.b.unshift(X),
									(this.c = -1),
									(this.f = ""),
									this.Q.store(
										A.a,
										JSON.stringify(A.b),
										$.StorageScope.PROFILE,
										$.StorageTarget.USER,
									);
							});
					}
					S() {
						this.D(
							this.I.onDidChangeFocus(() => {
								if (!this.G) {
									this.y.set("");
									return;
								}
								const F = this.G.afterModelPosition,
									x = this.I.getFocus().start;
								x + 1 === F
									? this.y.set("above")
									: x === F
										? this.y.set("below")
										: this.y.set("");
							}),
						);
					}
					run(F, x, H) {
						if (this.G) {
							if (this.G.afterModelPosition !== F) {
								const q = (0, t.getWindow)(this.G.domNode);
								this.U(),
									(0, t.$hgb)(q, () => {
										this.W(F, x, H, void 0);
									});
							}
							return;
						}
						this.W(F, x, H, void 0);
					}
					restore(F, x) {
						if (!this.I.hasModel()) return;
						const H = this.I.textModel.cells.indexOf(F.model);
						if (!(H < 0)) {
							if (this.G) {
								if (this.G.afterModelPosition !== H) {
									this.U();
									const q = (0, t.getWindow)(this.G.domNode);
									(0, t.$hgb)(q, () => {
										this.W(H, x, !1, F);
									});
								}
								return;
							}
							this.W(H, x, !1, F);
						}
					}
					U() {
						this.G?.dispose(),
							(this.G = void 0),
							this.C.clear(),
							(this.c = -1),
							(this.f = "");
					}
					W(F, x, H, q) {
						if (!this.I.hasModel()) return;
						this.C.clear();
						const V = document.createElement("div");
						V.classList.add("monaco-editor");
						const G = document.createElement("div");
						(G.style.position = "absolute"),
							V.appendChild(G),
							(this.F = this.C.add((0, t.$dhb)(V))),
							this.C.add(
								this.F.onDidFocus(() => {
									this.$();
								}),
							);
						const K = document.createElement("div"),
							J = this.C.add(
								this.J.createInstance(n.$rwb, K, {}, { isSimpleWidget: !0 }),
							),
							W = `notebook-chat-input-${A.counter++}`,
							Y = this.I.textModel.uri.with({
								scheme: m.Schemas.untitled,
								fragment: W,
							}),
							ie = this.N.createModel("", null, Y, !1);
						J.setModel(ie);
						const ne = this.C.add(
							this.J.createInstance(
								T.$9Yb,
								{
									location: v.ChatAgentLocation.Notebook,
									resolveData: () => {
										const ee = this.getSessionInputUri();
										if (ee)
											return {
												type: v.ChatAgentLocation.Notebook,
												sessionInputUri: ee,
											};
									},
								},
								{
									statusMenuId: L.$u1b,
									chatWidgetViewOptions: {
										rendererOptions: {
											renderTextEditsAsSummary: (ee) =>
												(0, u.$gh)(ee, this.G?.parentEditor.getModel()?.uri) ||
												(0, u.$gh)(ee, this.I.textModel?.uri),
										},
										menus: { telemetrySource: "notebook-generate-cell" },
									},
								},
							),
						);
						(ne.placeholder = (0, s.localize)(7860, null)),
							ne.updateInfo((0, s.localize)(7861, null)),
							G.appendChild(ne.domNode),
							this.C.add(
								ne.onDidChangeInput(() => {
									this.q?.dispose(!0), (this.q = void 0);
								}),
							),
							this.I.changeViewZones((ee) => {
								const _ = { afterModelPosition: F, heightInPx: 80, domNode: V },
									te = ee.addZone(_);
								this.Y(F),
									(this.G = new R(this.I, te, _, V, G, ne, J, this.O)),
									q && (this.G.restoreEditingCell(q), this.bb()),
									this.u.set(!0),
									(0, i.$Oh)(
										() => {
											this.Z();
										},
										0,
										this.B,
									),
									(this.n = (0, i.$zh)(async (Q) => {
										await this.X(Q), (0, h.$vg)(this.H.value);
										const Z = this.H.value;
										this.G?.inlineChatWidget.setChatModel(Z),
											J.hasModel() &&
												(this.G && this.Z(),
												this.G &&
													x &&
													((this.G.inlineChatWidget.value = x),
													H && this.acceptInput()));
									}));
							});
					}
					async X(F) {
						if (
							!this.H.value &&
							((this.H.value = this.R.startSession(
								v.ChatAgentLocation.Editor,
								F,
							)),
							!this.H.value)
						)
							throw new Error("Failed to start chat session");
						this.m = new U();
					}
					Y(F) {
						if (F === 0 || this.I.getLength() === 0)
							this.I.revealOffsetInCenterIfOutsideViewport(0);
						else {
							const x = this.I.cellAt(Math.min(F - 1, this.I.getLength() - 1));
							if (x) {
								const H = this.I.getAbsoluteTopOfElement(x),
									q = this.I.getHeightOfElement(x);
								this.I.revealOffsetInCenterIfOutsideViewport(H + q + 48);
							}
						}
					}
					Z() {
						this.G && (this.$(), this.G.focus());
					}
					$() {
						this.G && this.G.updateNotebookEditorFocusNSelections();
					}
					hasSession(F) {
						return this.H.value === F;
					}
					getSessionInputUri() {
						return this.G?.parentEditor.getModel()?.uri;
					}
					async acceptInput() {
						(0, h.$vg)(this.G),
							await this.n,
							(0, h.$vg)(this.H.value),
							(0, h.$vg)(this.m);
						const F = this.G.inlineChatWidget.value;
						this.g(F);
						const x = this.G.parentEditor,
							H = x.getModel();
						if (!x.hasModel() || !H) return;
						this.G.editingCell &&
							this.G.editingCell.textBuffer.getLength() > 0 &&
							(await this.G.editingCell.resolveTextModel()).setValue("");
						const q = this.G.editingCell
							? this.I.getCellIndex(this.G.editingCell)
							: void 0;
						q !== void 0
							? this.I.setSelections([{ start: q, end: q + 1 }])
							: this.I.setSelections([
									{
										start: this.G.afterModelPosition,
										end: this.G.afterModelPosition,
									},
								]),
							this.t.set(!0),
							this.r?.cancel(),
							(this.r = new w.$Ce());
						const V = new C.$Zc();
						try {
							this.t.set(!0);
							const G = new i.$Th(),
								K = a.$le.create(),
								J = new r.$3m(),
								W = new w.$Ce(this.r.token),
								X = new i.$0h(),
								Y = await this.G.inlineChatWidget.chatWidget.acceptInput();
							if (Y) {
								let ne = 0;
								V.add(
									Y.onDidChange((ee) => {
										if (Y.isCanceled) {
											W.cancel(), X.complete();
											return;
										}
										if (Y.isComplete) {
											X.complete();
											return;
										}
										const _ = Y.response.value
												.map((Q) => (Q.kind === "textEditGroup" ? Q.edits : []))
												.flat(),
											te = _.slice(ne);
										te.length !== 0 &&
											((ne = _.length),
											J.update(K.elapsed()),
											K.reset(),
											G.queue(async () => {
												for (const Q of te)
													await this.ab(Q, {
														duration: J.value,
														token: W.token,
													});
											}));
									}),
								);
							}
							await X.p, await G.whenIdle(), this.z.clear();
							const ie = this.G.getEditingCell();
							ie &&
								(this.z.add(ie.model.onDidChangeContent(() => this.bb())),
								this.z.add(ie.model.onDidChangeLanguage(() => this.bb())),
								this.z.add(ie.model.onDidChangeMetadata(() => this.bb())),
								this.z.add(
									ie.model.onDidChangeInternalMetadata(() => this.bb()),
								),
								this.z.add(ie.model.onDidChangeOutputs(() => this.bb())),
								this.z.add(
									this.P.onDidChangeExecution((ne) => {
										ne.type === N.NotebookExecutionType.cell &&
											ne.affectsCell(ie.uri) &&
											this.bb();
									}),
								));
						} catch {
						} finally {
							V.dispose(),
								this.t.set(!1),
								this.G.inlineChatWidget.updateInfo(""),
								this.G.inlineChatWidget.updateToolbar(!0);
						}
					}
					async ab(F, x) {
						(0, h.$vg)(this.m), (0, h.$vg)(this.G);
						const H = await this.G.getOrCreateEditingCell();
						if (!H) return;
						const q = H.editor,
							V = await this.M.computeMoreMinimalEdits(q.getModel().uri, F);
						if (V?.length === 0) return;
						const K = (!x && V ? V : F).map(p.$iM.asEditOperation);
						try {
							x
								? await this.m.makeProgressiveChanges(q, K, x)
								: await this.m.makeChanges(q, K);
						} finally {
						}
					}
					bb() {
						this.w.set(!0);
					}
					async acceptSession() {
						if (
							((0, h.$vg)(this.H),
							(0, h.$vg)(this.m),
							!this.G?.parentEditor?.hasModel())
						)
							return;
						const x = this.G?.getEditingCell();
						if (x && this.I.hasModel()) {
							const H = O.str({
								uri: x.uri,
								viewType: this.I.textModel.viewType,
							});
							this.G?.inlineChatWidget.value &&
								this.h.set(H, this.G.inlineChatWidget.value),
								this.j.fire({ cell: x.uri });
						}
						try {
							this.H.clear();
						} catch {}
						this.dismiss(!1);
					}
					async focusAbove() {
						if (!this.G) return;
						const x = this.G.afterModelPosition - 1;
						if (x < 0) return;
						const H = this.I.cellAt(x);
						H && (await this.I.focusNotebookCell(H, "editor"));
					}
					async focusNext() {
						if (!this.G) return;
						const F = this.G.afterModelPosition,
							x = this.I.cellAt(F);
						x && (await this.I.focusNotebookCell(x, "editor"));
					}
					hasFocus() {
						return this.G?.hasFocus() ?? !1;
					}
					focus() {
						this.Z();
					}
					focusNearestWidget(F, x) {
						switch (x) {
							case "above":
								this.G?.afterModelPosition === F && this.Z();
								break;
							case "below":
								this.G?.afterModelPosition === F + 1 && this.Z();
								break;
							default:
								break;
						}
					}
					populateHistory(F) {
						if (!this.G) return;
						const x = A.b.length;
						if (x === 0) return;
						this.c === -1 && (this.f = this.G.inlineChatWidget.value);
						const H = this.c + (F ? 1 : -1);
						if (H >= x) return;
						let q;
						H < 0
							? ((q = this.f), (this.c = -1))
							: ((q = A.b[H]), (this.c = H)),
							(this.G.inlineChatWidget.value = q),
							this.G.inlineChatWidget.selectAll();
					}
					async cancelCurrentRequest(F) {
						this.r?.cancel();
					}
					getEditingCell() {
						return this.G?.getEditingCell();
					}
					discard() {
						this.r?.cancel(), this.G?.discardChange(), this.dismiss(!0);
					}
					dismiss(F) {
						const x = this.G,
							H = x?.afterModelPosition,
							q = this.I.getFocus(),
							V = q.start === H && q.end === H;
						if (x && V) {
							const G = x.getEditingCell(),
								K = G && !F,
								J = H === 0 && this.I.getLength() > 0,
								W = H !== 0 && this.I.cellAt(H - 1);
							K
								? this.I.focusNotebookCell(G, "container")
								: J
									? this.I.focusNotebookCell(this.I.cellAt(0), "container")
									: W &&
										this.I.focusNotebookCell(this.I.cellAt(H - 1), "container");
						}
						this.u.set(!1),
							this.w.set(!1),
							this.n?.cancel(),
							(this.n = void 0),
							this.H.clear(),
							this.G?.dispose(),
							(this.G = void 0),
							this.C.clear();
					}
					isCellGeneratedByChat(F) {
						if (!this.I.hasModel()) return !1;
						const x = O.str({
							uri: F.uri,
							viewType: this.I.textModel.viewType,
						});
						return this.h.has(x);
					}
					getPromptFromCache(F) {
						if (!this.I.hasModel()) return;
						const x = O.str({
							uri: F.uri,
							viewType: this.I.textModel.viewType,
						});
						return this.h.get(x);
					}
					dispose() {
						this.dismiss(!1), super.dispose();
					}
				};
				(e.$y1b = B),
					(e.$y1b =
						B =
						A =
							Ne(
								[
									j(1, y.$Li),
									j(2, l.$6j),
									j(3, f.$Cxb),
									j(4, b.$QO),
									j(5, o.$nM),
									j(6, N.$d6),
									j(7, $.$lq),
									j(8, S.$J2),
								],
								B,
							));
				class U {
					constructor() {
						this.a = 0;
					}
					async makeProgressiveChanges(F, x, H) {
						++this.a === 1 && F.pushUndoStop();
						const q = H.duration / 1e3;
						for (const V of x) {
							const K = (0, I.$SKb)(V.text ?? "") / q;
							await (0, P.$_Yb)(
								F.getModel(),
								(0, P.$aZb)(new t.$jgb(), V, K, H.token),
							);
						}
					}
					async makeChanges(F, x) {
						const H = (q) => {
							let V = null;
							for (const G of q)
								V =
									!V || V.isBefore(G.range.getEndPosition())
										? G.range.getEndPosition()
										: V;
							return V && [g.$kL.fromPositions(V)];
						};
						++this.a === 1 && F.pushUndoStop(),
							F.executeEdits("inline-chat-live", x, H);
					}
				}
				(e.$z1b = U), (0, D.$PKb)(B.id, B);
			},
		)
