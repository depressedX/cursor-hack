import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/browser/dom.js';
import '../../../base/common/async.js';
import '../../../base/common/cancellation.js';
import '../../../base/common/errors.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/network.js';
import '../../../base/common/path.js';
import '../../../base/common/resources.js';
import '../../../base/common/uri.js';
import '../../../base/common/uuid.js';
import '../../../nls.js';
import '../../../platform/dialogs/common/dialogs.js';
import '../../../platform/files/common/files.js';
import '../../../platform/instantiation/common/instantiation.js';
import '../../../platform/label/common/label.js';
import '../../../platform/storage/common/storage.js';
import '../../../platform/undoRedo/common/undoRedo.js';
import './mainThreadWebviews.js';
import '../common/extHost.protocol.js';
import '../../contrib/customEditor/browser/customEditorInput.js';
import '../../contrib/customEditor/common/customEditor.js';
import '../../contrib/customEditor/common/customTextEditorModel.js';
import '../../contrib/webview/browser/webview.js';
import '../../contrib/webviewPanel/browser/webviewWorkbenchService.js';
import '../../services/editor/common/editorGroupColumn.js';
import '../../services/editor/common/editorGroupsService.js';
import '../../services/editor/common/editorService.js';
import '../../services/environment/common/environmentService.js';
import '../../services/extensions/common/extensions.js';
import '../../services/path/common/pathService.js';
import '../../services/workingCopy/common/resourceWorkingCopy.js';
import '../../services/workingCopy/common/workingCopy.js';
import '../../services/workingCopy/common/workingCopyFileService.js';
import '../../services/workingCopy/common/workingCopyService.js';
define(
			de[3897],
			he([
				1, 0, 7, 15, 33, 29, 6, 3, 23, 54, 19, 9, 47, 4, 57, 22, 5, 73, 21, 155,
				831, 88, 849, 625, 3680, 355, 623, 446, 66, 18, 78, 53, 165, 1910, 334,
				336, 227,
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
			) {
				"use strict";
				var B;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1oc = void 0),
					(l = mt(l));
				var U;
				(function (H) {
					(H[(H.Custom = 0)] = "Custom"), (H[(H.Text = 1)] = "Text");
				})(U || (U = {}));
				let z = class extends d.$1c {
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _) {
						super(),
							(this.g = V),
							(this.h = G),
							(this.j = Y),
							(this.m = ie),
							(this.n = ne),
							(this.q = ee),
							(this.r = _),
							(this.b = this.D(new d.$0c())),
							(this.c = new Map()),
							(this.f = new S.$6Ib("mainThreadCustomEditors.origins", J)),
							(this.a = q.getProxy(l.$mbb.ExtHostCustomEditors)),
							this.D(
								X.registerWorkingCopyProvider((te) => {
									const Q = [];
									for (const Z of W.workingCopies)
										Z instanceof x &&
											(0, u.$hh)(te, Z.editorResource) &&
											Q.push(Z);
									return Q;
								}),
							),
							this.D(
								_.registerResolver({
									canResolve: (te) => (
										te instanceof y.$tnc &&
											K.activateByEvent(`onCustomEditor:${te.viewType}`),
										!1
									),
									resolveWebview: () => {
										throw new Error("not implemented");
									},
								}),
							),
							this.D(
								X.onWillRunWorkingCopyFileOperation(async (te) => this.w(te)),
							);
					}
					$registerTextEditorProvider(q, V, G, K, J) {
						this.s(U.Text, (0, s.$Mmc)(q), V, G, K, !0, J);
					}
					$registerCustomEditorProvider(q, V, G, K, J) {
						this.s(U.Custom, (0, s.$Mmc)(q), V, G, {}, K, J);
					}
					s(q, V, G, K, J, W, X) {
						if (this.b.has(G))
							throw new Error(`Provider for ${G} already registered`);
						const Y = new d.$Zc();
						Y.add(
							this.j.registerCustomEditorCapabilities(G, {
								supportsMultipleEditorsPerDocument: W,
							}),
						),
							Y.add(
								this.r.registerResolver({
									canResolve: (ie) => ie instanceof y.$tnc && ie.viewType === G,
									resolveWebview: async (ie, ne) => {
										const ee = (0, h.$9g)(),
											_ = ie.resource;
										(ie.webview.origin = this.f.getOrigin(G, V.id)),
											this.h.addWebviewInput(ee, ie, {
												serializeBuffersForPostMessage: X,
											}),
											(ie.webview.options = K),
											(ie.webview.extension = V);
										let te = ie.backupId;
										ie.oldResource &&
											!ie.backupId &&
											((te = this.c.get(ie.oldResource.toString())?.backupId),
											this.c.delete(ie.oldResource.toString()));
										let Q;
										try {
											Q = await this.t(q, _, G, { backupId: te }, ne);
										} catch (Z) {
											(0, E.$4)(Z),
												ie.webview.setHtml(
													this.g.getWebviewResolvedFailedContent(G),
												);
											return;
										}
										if (ne.isCancellationRequested) {
											Q.dispose();
											return;
										}
										ie.webview.onDidDispose(() => {
											if (Q.object.isDirty()) {
												const Z = Q.object.onDidChangeDirty(() => {
													Q.object.isDirty() || (Z.dispose(), Q.dispose());
												});
												return;
											}
											Q.dispose();
										}),
											J.supportsMove &&
												ie.onMove(async (Z) => {
													const se = Q;
													(Q = await this.t(
														q,
														Z,
														G,
														{},
														w.CancellationToken.None,
													)),
														this.a.$onMoveCustomEditor(ee, Z, G),
														se.dispose();
												});
										try {
											await this.a.$resolveCustomEditor(
												_,
												ee,
												G,
												{
													title: ie.getTitle(),
													contentOptions: ie.webview.contentOptions,
													options: ie.webview.options,
													active: ie === this.n.activeEditor,
												},
												(0, T.$b8)(this.m, ie.group || 0),
												ne,
											);
										} catch (Z) {
											(0, E.$4)(Z),
												ie.webview.setHtml(
													this.g.getWebviewResolvedFailedContent(G),
												),
												Q.dispose();
											return;
										}
									},
								}),
							),
							this.b.set(G, Y);
					}
					$unregisterEditorProvider(q) {
						if (!this.b.has(q))
							throw new Error(`No provider for ${q} registered`);
						this.b.deleteAndDispose(q),
							this.j.models.disposeAllModelsForView(q);
					}
					async t(q, V, G, K, J) {
						const W = this.j.models.tryRetain(V, G);
						if (W) return W;
						switch (q) {
							case U.Text: {
								const X = v.$Zoc.create(this.q, G, V);
								return this.j.models.add(V, G, X);
							}
							case U.Custom: {
								const X = x.create(
									this.q,
									this.a,
									G,
									V,
									K,
									() =>
										Array.from(this.h.webviewInputs).filter(
											(Y) => Y instanceof y.$tnc && (0, u.$gh)(Y.resource, V),
										),
									J,
								);
								return this.j.models.add(V, G, X);
							}
						}
					}
					async $onDidEdit(q, V, G, K) {
						(await this.u(q, V)).pushEdit(G, K);
					}
					async $onContentChange(q, V) {
						(await this.u(q, V)).changeContent();
					}
					async u(q, V) {
						const G = a.URI.revive(q),
							K = await this.j.models.get(G, V);
						if (!K || !(K instanceof x))
							throw new Error("Could not find model for webview editor");
						return K;
					}
					async w(q) {
						q.operation === g.FileOperation.MOVE &&
							q.waitUntil(
								(async () => {
									const V = [];
									for (const G of q.files)
										G.source &&
											V.push(...(await this.j.models.getAllModels(G.source)));
									for (const G of V)
										if (G instanceof x && G.isDirty()) {
											const K = await G.backup(w.CancellationToken.None);
											K.meta && this.c.set(G.editorResource.toString(), K.meta);
										}
								})(),
							);
					}
				};
				(e.$1oc = z),
					(e.$1oc = z =
						Ne(
							[
								j(3, D.$q2),
								j(4, f.$lq),
								j(5, O.$gY),
								j(6, R.$iZ),
								j(7, $.$jnc),
								j(8, P.$EY),
								j(9, k.$IY),
								j(10, p.$Li),
								j(11, I.$qnc),
							],
							z,
						));
				var F;
				(function (H) {
					let q;
					(function (G) {
						(G[(G.Allowed = 0)] = "Allowed"),
							(G[(G.NotAllowed = 1)] = "NotAllowed"),
							(G[(G.Pending = 2)] = "Pending");
					})((q = H.Type || (H.Type = {}))),
						(H.Allowed = Object.freeze({ type: q.Allowed })),
						(H.NotAllowed = Object.freeze({ type: q.NotAllowed }));
					class V {
						constructor(K) {
							(this.operation = K), (this.type = q.Pending);
						}
					}
					H.Pending = V;
				})(F || (F = {}));
				let x = (B = class extends N.$eZ {
					static async create(q, V, G, K, J, W, X) {
						const Y = W();
						let ie;
						Y.length !== 0 && (ie = Y[0].untitledDocumentData);
						const { editable: ne } = await V.$createCustomDocument(
							K,
							G,
							J.backupId,
							ie,
							X,
						);
						return q.createInstance(B, V, G, K, !!J.backupId, ne, !!ie, W);
					}
					constructor(q, V, G, K, J, W, X, Y, ie, ne, ee, _, te, Q, Z) {
						super(B.M(V, G), ie),
							(this.w = q),
							(this.y = V),
							(this.z = G),
							(this.C = J),
							(this.F = X),
							(this.G = Y),
							(this.H = ne),
							(this.I = ee),
							(this.J = _),
							(this.L = Q),
							(this.j = !1),
							(this.m = F.Allowed),
							(this.q = -1),
							(this.r = -1),
							(this.s = []),
							(this.t = !1),
							(this.typeId = A.$OO),
							(this.O = this.D(new C.$re())),
							(this.onDidChangeDirty = this.O.event),
							(this.P = this.D(new C.$re())),
							(this.onDidChangeContent = this.P.event),
							(this.Q = this.D(new C.$re())),
							(this.onDidSave = this.Q.event),
							(this.onDidChangeReadonly = C.Event.None),
							(this.j = K),
							J &&
								(this.D(te.registerWorkingCopy(this)),
								this.D(
									Z.onWillStop((se) => {
										this.isDirty() &&
											se.veto(
												(async () => !(await this.save()))(),
												(0, c.localize)(2537, null, this.name),
											);
									}),
								)),
							W && (this.t = !0);
					}
					get editorResource() {
						return this.z;
					}
					dispose() {
						this.C && this.I.removeElements(this.z),
							this.w.$disposeCustomDocument(this.z, this.y),
							super.dispose();
					}
					static M(q, V) {
						const G = q.replace(/[^a-z0-9\-_]/gi, "-"),
							K = `/${(0, t.$Ehb)(V.with({ query: null, fragment: null }).toString(!0))}`;
						return a.URI.from({
							scheme: m.Schemas.vscodeCustomEditor,
							authority: G,
							path: K,
							query: JSON.stringify(V.toJSON()),
						});
					}
					get name() {
						return (0, r.$sc)(this.H.getUriLabel(this.z));
					}
					get capabilities() {
						return this.N()
							? A.WorkingCopyCapabilities.Untitled
							: A.WorkingCopyCapabilities.None;
					}
					isDirty() {
						return this.t ? !0 : this.s.length > 0 ? this.r !== this.q : this.j;
					}
					N() {
						return this.z.scheme === m.Schemas.untitled;
					}
					isReadonly() {
						return !this.C;
					}
					get viewType() {
						return this.y;
					}
					get backupId() {
						return this.n;
					}
					pushEdit(q, V) {
						if (!this.C) throw new Error("Document is not editable");
						this.W(() => {
							this.U(q), (this.q = this.s.length - 1);
						}),
							this.I.pushElement({
								type: b.UndoRedoElementType.Resource,
								resource: this.z,
								label: V ?? (0, c.localize)(2538, null),
								code: "undoredo.customEditorEdit",
								undo: () => this.R(),
								redo: () => this.S(),
								rebase: () => {},
							});
					}
					changeContent() {
						this.W(() => {
							this.t = !0;
						});
					}
					async R() {
						if (!this.C || this.q < 0) return;
						const q = this.s[this.q];
						this.W(() => {
							--this.q;
						}),
							await this.w.$undo(this.z, this.viewType, q, this.isDirty());
					}
					async S() {
						if (!this.C || this.q >= this.s.length - 1) return;
						const q = this.s[this.q + 1];
						this.W(() => {
							++this.q;
						}),
							await this.w.$redo(this.z, this.viewType, q, this.isDirty());
					}
					U(q) {
						const V = this.q + 1,
							G = this.s.length - this.q,
							K =
								typeof q == "number"
									? this.s.splice(V, G, q)
									: this.s.splice(V, G);
						K.length && this.w.$disposeEdits(this.z, this.y, K);
					}
					W(q) {
						const V = this.isDirty();
						q(), this.P.fire(), this.isDirty() !== V && this.O.fire();
					}
					async revert(q) {
						this.C &&
							((this.q === this.r && !this.t && !this.j) ||
								(q?.soft ||
									this.w.$revert(
										this.z,
										this.viewType,
										w.CancellationToken.None,
									),
								this.W(() => {
									(this.t = !1), (this.j = !1), (this.q = this.r), this.U();
								})));
					}
					async save(q) {
						const V = !!(await this.saveCustomEditor(q));
						return (
							V && this.Q.fire({ reason: q?.reason, source: q?.source }), V
						);
					}
					async saveCustomEditor(q) {
						if (!this.C) return;
						if (this.N()) {
							const G = await this.X(q);
							return G
								? (await this.saveCustomEditorAs(this.z, G, q), G)
								: void 0;
						}
						const V = (0, i.$zh)((G) =>
							this.w.$onSave(this.z, this.viewType, G),
						);
						this.u?.cancel(), (this.u = V);
						try {
							await V,
								this.u === V &&
									this.W(() => {
										(this.t = !1), (this.r = this.q), (this.j = !1);
									});
						} finally {
							this.u === V && (this.u = void 0);
						}
						return this.z;
					}
					X(q) {
						if (!this.N()) throw new Error("Resource is not untitled");
						const V = this.J.remoteAuthority,
							G = (0, u.$xh)(this.z, V, this.L.defaultUriScheme);
						return this.G.pickFileToSave(G, q?.availableFileSystems);
					}
					async saveCustomEditorAs(q, V, G) {
						return this.C
							? (await (0, i.$zh)((K) =>
									this.w.$onSaveAs(this.z, this.viewType, V, K),
								),
								this.W(() => {
									this.r = this.q;
								}),
								!0)
							: (await this.a.copy(q, V, !1), !0);
					}
					get canHotExit() {
						return typeof this.n == "string" && this.m.type === F.Type.Allowed;
					}
					async backup(q) {
						const V = this.F();
						if (!V.length)
							throw new Error("No editors found for resource, cannot back up");
						const G = V[0],
							J = {
								meta: {
									viewType: this.viewType,
									editorResource: this.z,
									backupId: "",
									extension: G.extension
										? {
												id: G.extension.id.value,
												location: G.extension.location,
											}
										: void 0,
									webview: {
										origin: G.webview.origin,
										options: G.webview.options,
										state: G.webview.state,
									},
								},
							};
						if (!this.C) return J;
						this.m.type === F.Type.Pending && this.m.operation.cancel();
						const W = new F.Pending(
							(0, i.$zh)((Y) =>
								this.w.$backup(this.z.toJSON(), this.viewType, Y),
							),
						);
						(this.m = W),
							q.onCancellationRequested(() => {
								W.operation.cancel();
							});
						let X = "";
						try {
							const Y = await W.operation;
							this.m === W &&
								((this.m = F.Allowed), (J.meta.backupId = Y), (this.n = Y));
						} catch (Y) {
							if ((0, E.$8)(Y)) throw Y;
							this.m === W && (this.m = F.NotAllowed),
								Y.message && (X = Y.message);
						}
						if (this.m === F.Allowed) return J;
						throw new Error(`Cannot backup in this state: ${X}`);
					}
				});
				x = B = Ne(
					[
						j(7, n.$IO),
						j(8, g.$ll),
						j(9, o.$3N),
						j(10, b.$GN),
						j(11, L.$r8),
						j(12, O.$gY),
						j(13, M.$I8),
						j(14, D.$q2),
					],
					x,
				);
			},
		),
		