import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/arraysFind.js';
import '../../../../base/common/async.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/languages.js';
import '../../../../nls.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/quickinput/common/quickInput.js';
import './commentGlyphWidget.js';
import './commentService.js';
import './commentThreadZoneWidget.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/browser/widget/codeEditor/embeddedCodeEditorWidget.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../services/views/common/viewsService.js';
import './commentsTreeViewer.js';
import '../../../../platform/configuration/common/configuration.js';
import '../common/commentsConfiguration.js';
import './commentReply.js';
import '../../../../base/common/event.js';
import '../../../../platform/contextkey/common/contextkey.js';
import './commentThreadRangeDecorator.js';
import '../../../../base/browser/ui/aria/aria.js';
import '../common/commentContextKeys.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../accessibility/common/accessibilityCommands.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/accessibility/common/accessibility.js';
import '../../../../base/common/uri.js';
import './commentsModel.js';
import '../../../../css!vs/workbench/contrib/comments/browser/media/review.js';
define(
			de[1048],
			he([
				1, 0, 50, 24, 214, 15, 29, 3, 56, 65, 17, 98, 122, 74, 4, 49, 5, 63,
				1723, 447, 3765, 18, 281, 38, 89, 683, 10, 791, 1323, 6, 8, 3030, 127,
				505, 130, 417, 39, 91, 9, 983, 1143,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*actions*/,
				i /*arrays*/,
				w /*arraysFind*/,
				E /*async*/,
				C /*errors*/,
				d /*lifecycle*/,
				m /*editorBrowser*/,
				r /*codeEditorService*/,
				u /*range*/,
				a /*editorCommon*/,
				h /*textModel*/,
				c /*languages*/,
				n /*nls*/,
				g /*contextView*/,
				p /*instantiation*/,
				o /*quickInput*/,
				f /*commentGlyphWidget*/,
				b /*commentService*/,
				s /*commentThreadZoneWidget*/,
				l /*editorService*/,
				y /*embeddedCodeEditorWidget*/,
				$ /*editorOptions*/,
				v /*viewsService*/,
				S /*commentsTreeViewer*/,
				I /*configuration*/,
				T /*commentsConfiguration*/,
				P /*commentReply*/,
				k /*event*/,
				L /*contextkey*/,
				D /*commentThreadRangeDecorator*/,
				M /*aria*/,
				N /*commentContextKeys*/,
				A /*accessibilityConfiguration*/,
				R /*accessibilityCommands*/,
				O /*keybinding*/,
				B /*accessibility*/,
				U /*uri*/,
				z /*commentsModel*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rpc = e.ID = void 0),
					(e.$qpc = H),
					(c = mt(c)),
					(n = mt(n)),
					(e.ID = "editor.contrib.review");
				class F {
					get id() {
						return this.c;
					}
					set id(G) {
						this.c = G;
					}
					get range() {
						return {
							startLineNumber: this.d,
							startColumn: 1,
							endLineNumber: this.f,
							endColumn: 1,
						};
					}
					constructor(G, K, J, W, X, Y, ie, ne = !1) {
						(this.g = G),
							(this.h = K),
							(this.j = J),
							(this.k = W),
							(this.l = X),
							(this.options = Y),
							(this.m = ie),
							(this.isHover = ne),
							(this.d = X.startLineNumber),
							(this.f = X.endLineNumber);
					}
					getCommentAction() {
						return {
							extensionId: this.j,
							label: this.k,
							ownerId: this.h,
							commentingRangesInfo: this.m,
						};
					}
					getOriginalRange() {
						return this.l;
					}
					getActiveRange() {
						return this.id
							? this.g.getModel().getDecorationRange(this.id)
							: void 0;
					}
				}
				class x {
					static {
						this.description = "commenting-range-decorator";
					}
					constructor() {
						(this.g = []),
							(this.h = []),
							(this.l = -1),
							(this.o = new k.$re()),
							(this.onDidChangeDecorationsCount = this.o.event);
						const G = {
							description: x.description,
							isWholeLine: !0,
							linesDecorationsClassName:
								"comment-range-glyph comment-diff-added",
						};
						this.c = h.$eY.createDynamic(G);
						const K = {
							description: x.description,
							isWholeLine: !0,
							linesDecorationsClassName: "comment-range-glyph line-hover",
						};
						this.d = h.$eY.createDynamic(K);
						const J = {
							description: x.description,
							isWholeLine: !0,
							linesDecorationsClassName: "comment-range-glyph multiline-add",
						};
						this.f = h.$eY.createDynamic(J);
					}
					updateHover(G) {
						this.j && this.k && G !== this.l && this.q(this.j, this.k, G),
							(this.l = G ?? -1);
					}
					updateSelection(G, K = new u.$iL(0, 0, 0, 0)) {
						(this.m = K.isEmpty() ? void 0 : K),
							(this.n = K.isEmpty() ? void 0 : G),
							this.j && this.k && this.q(this.j, this.k, G, K);
					}
					update(G, K, J, W) {
						G && ((this.j = G), (this.k = K), this.q(G, K, J, W));
					}
					p(G, K) {
						return G.getDecorationsInRange(K)?.find(
							(J) => J.options.description === f.$jpc.description,
						);
					}
					q(G, K, J = -1, W = this.m) {
						if (!G.getModel()) return;
						J = this.n ?? J;
						const Y = [];
						for (const ne of K)
							ne.commentingRanges.ranges.forEach((ee) => {
								const _ = new u.$iL(
									ee.startLineNumber,
									ee.startColumn,
									ee.endLineNumber,
									ee.endColumn,
								);
								let te = W ? _.intersectRanges(W) : void 0;
								if (
									W &&
									J >= 0 &&
									te &&
									!(
										te.startLineNumber === te.endLineNumber &&
										J === te.startLineNumber
									)
								) {
									let Q;
									J <= te.startLineNumber
										? ((Q = te.collapseToStart()),
											(te = new u.$iL(
												te.startLineNumber + 1,
												1,
												te.endLineNumber,
												1,
											)))
										: ((Q = new u.$iL(
												te.endLineNumber,
												1,
												te.endLineNumber,
												1,
											)),
											(te = new u.$iL(
												te.startLineNumber,
												1,
												te.endLineNumber - 1,
												1,
											))),
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												te,
												this.f,
												ne.commentingRanges,
												!0,
											),
										),
										this.p(G, Q) ||
											Y.push(
												new F(
													G,
													ne.uniqueOwner,
													ne.extensionId,
													ne.label,
													Q,
													this.d,
													ne.commentingRanges,
													!0,
												),
											);
									const Z = Math.min(Q.startLineNumber, te.startLineNumber) - 1,
										se = _.startLineNumber <= Z,
										re = Math.max(Q.endLineNumber, te.endLineNumber) + 1,
										le = _.endLineNumber >= re;
									if (se) {
										const oe = new u.$iL(ee.startLineNumber, 1, Z, 1);
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												oe,
												this.c,
												ne.commentingRanges,
												!0,
											),
										);
									}
									if (le) {
										const oe = new u.$iL(re, 1, ee.endLineNumber, 1);
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												oe,
												this.c,
												ne.commentingRanges,
												!0,
											),
										);
									}
								} else if (_.startLineNumber <= J && J <= _.endLineNumber) {
									if (_.startLineNumber < J) {
										const Z = new u.$iL(ee.startLineNumber, 1, J - 1, 1);
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												Z,
												this.c,
												ne.commentingRanges,
												!0,
											),
										);
									}
									const Q = new u.$iL(J, 1, J, 1);
									if (
										(this.p(G, Q) ||
											Y.push(
												new F(
													G,
													ne.uniqueOwner,
													ne.extensionId,
													ne.label,
													Q,
													this.d,
													ne.commentingRanges,
													!0,
												),
											),
										J < _.endLineNumber)
									) {
										const Z = new u.$iL(J + 1, 1, ee.endLineNumber, 1);
										Y.push(
											new F(
												G,
												ne.uniqueOwner,
												ne.extensionId,
												ne.label,
												Z,
												this.c,
												ne.commentingRanges,
												!0,
											),
										);
									}
								} else
									Y.push(
										new F(
											G,
											ne.uniqueOwner,
											ne.extensionId,
											ne.label,
											ee,
											this.c,
											ne.commentingRanges,
										),
									);
							});
						G.changeDecorations((ne) => {
							(this.h = ne.deltaDecorations(this.h, Y)),
								Y.forEach((ee, _) => (ee.id = this.h[_]));
						});
						const ie = this.g.length - Y.length;
						(this.g = Y), ie && this.o.fire(this.g.length);
					}
					r(G, K) {
						return !(
							G.endLineNumber < K.startLineNumber - 1 ||
							K.endLineNumber + 1 < G.startLineNumber
						);
					}
					getMatchedCommentAction(G) {
						if (G === void 0) {
							const W = this.k?.filter((X) => X.commentingRanges.fileComments);
							return W
								? W.map((X) => ({
										action: {
											ownerId: X.uniqueOwner,
											extensionId: X.extensionId,
											label: X.label,
											commentingRangesInfo: X.commentingRanges,
										},
									}))
								: [];
						}
						const K = new Map();
						for (const W of this.g) {
							const X = W.getActiveRange();
							if (X && this.r(X, G)) {
								const Y = W.getCommentAction(),
									ie = K.get(Y.ownerId);
								if (
									ie?.action.commentingRangesInfo === Y.commentingRangesInfo
								) {
									const ne = new u.$iL(
										X.startLineNumber < ie.range.startLineNumber
											? X.startLineNumber
											: ie.range.startLineNumber,
										X.startColumn < ie.range.startColumn
											? X.startColumn
											: ie.range.startColumn,
										X.endLineNumber > ie.range.endLineNumber
											? X.endLineNumber
											: ie.range.endLineNumber,
										X.endColumn > ie.range.endColumn
											? X.endColumn
											: ie.range.endColumn,
									);
									K.set(Y.ownerId, { range: ne, action: Y });
								} else K.set(Y.ownerId, { range: X, action: Y });
							}
						}
						const J = new Set();
						return Array.from(K.values()).filter((W) =>
							J.has(W.action.ownerId) ? !1 : (J.add(W.action.ownerId), !0),
						);
					}
					getNearestCommentingRange(G, K) {
						let J, W;
						if (K) {
							W = [];
							for (let X = this.g.length - 1; X >= 0; X--) W.push(this.g[X]);
						} else W = this.g;
						for (const X of W) {
							const Y = X.getActiveRange();
							if (Y) {
								if (J && this.r(Y, J)) {
									J = u.$iL.plusRange(J, Y);
									continue;
								}
								if (
									Y.startLineNumber <= G.lineNumber &&
									G.lineNumber <= Y.endLineNumber
								) {
									J = new u.$iL(
										Y.startLineNumber,
										Y.startColumn,
										Y.endLineNumber,
										Y.endColumn,
									);
									continue;
								}
								if (
									!(!K && Y.endLineNumber < G.lineNumber) &&
									!(K && Y.startLineNumber > G.lineNumber)
								)
									return Y;
							}
						}
						return W.length > 0 ? (W[0].getActiveRange() ?? void 0) : void 0;
					}
					dispose() {
						this.g = [];
					}
				}
				function H(V, G, K, J, W, X, Y, ie, ne) {
					if (!J.resource) return;
					V.isCommentingEnabled || V.enableCommenting(!0);
					const ee = J.range,
						_ = X
							? s.CommentWidgetFocus.Editor
							: ie
								? s.CommentWidgetFocus.None
								: s.CommentWidgetFocus.Widget,
						te = G.activeTextEditorControl,
						Q = (0, m.$$sb)(te)
							? [te.getOriginalEditor(), te.getModifiedEditor()]
							: te
								? [te]
								: [],
						Z = J.threadId,
						se = W?.uniqueIdInThread,
						re = U.URI.parse(J.resource);
					for (const le of Q) {
						const oe = le.getModel();
						if (oe instanceof h.$$X && K.extUri.isEqual(re, oe.uri)) {
							Z &&
								(0, m.$0sb)(le) &&
								q.get(le)?.revealCommentThread(Z, se, !0, _);
							return;
						}
					}
					G.openEditor(
						{
							resource: re,
							options: {
								pinned: Y,
								preserveFocus: ie,
								selection: ee ?? new u.$iL(1, 1, 1, 1),
							},
						},
						ne ? l.$KY : l.$JY,
					).then((le) => {
						if (le) {
							const oe = le.getControl();
							Z &&
								(0, m.$0sb)(oe) &&
								q.get(oe)?.revealCommentThread(Z, se, !0, _);
						}
					});
				}
				let q = class {
					constructor(G, K, J, W, X, Y, ie, ne, ee, _, te, Q) {
						(this.B = K),
							(this.C = J),
							(this.D = W),
							(this.E = X),
							(this.F = Y),
							(this.G = ie),
							(this.H = ne),
							(this.I = _),
							(this.J = te),
							(this.K = Q),
							(this.c = new d.$Zc()),
							(this.d = new d.$Zc()),
							(this.l = null),
							(this.m = !1),
							(this.n = 0),
							(this.r = []),
							(this.w = new Map()),
							(this.x = []),
							(this.A = !1),
							(this.h = []),
							(this.g = []),
							(this.u = {}),
							(this.v = {}),
							(this.o = null),
							(this.y =
								N.CommentContextKeys.activeCursorHasCommentingRange.bindTo(ee)),
							(this.z =
								N.CommentContextKeys.activeEditorHasCommentingRange.bindTo(ee)),
							!(G instanceof y.$wDb) &&
								((this.f = G),
								(this.j = new x()),
								this.c.add(
									this.j.onDidChangeDecorationsCount((Z) => {
										Z === 0 ? this.M() : this.x.length === 0 && this.L();
									}),
								),
								this.c.add((this.k = new D.$opc(this.B))),
								this.c.add(
									this.B.onDidDeleteDataProvider((Z) => {
										Z
											? (delete this.u[Z], delete this.v[Z])
											: ((this.u = {}), (this.v = {})),
											this.S();
									}),
								),
								this.c.add(this.B.onDidSetDataProvider((Z) => this.Z())),
								this.c.add(this.B.onDidUpdateCommentingRanges((Z) => this.Z())),
								this.c.add(
									this.B.onDidSetResourceCommentInfos(async (Z) => {
										const se =
											this.f && this.f.hasModel() && this.f.getModel().uri;
										se &&
											se.toString() === Z.resource.toString() &&
											(await this.ob(
												Z.commentInfos.filter((re) => re !== null),
											));
									}),
								),
								this.c.add(
									this.B.onDidChangeCommentingEnabled((Z) => {
										Z
											? (this.L(), this.S())
											: (this.nb(),
												this.M(),
												this.j.update(this.f, []),
												this.k.update(this.f, []),
												(0, d.$Vc)(this.g),
												(this.g = []));
									}),
								),
								this.c.add(this.f.onWillChangeModel((Z) => this.W(Z))),
								this.c.add(
									this.f.onDidChangeModel((Z) => this.onModelChanged()),
								),
								this.c.add(
									this.H.onDidChangeConfiguration((Z) => {
										Z.affectsConfiguration("diffEditor.renderSideBySide") &&
											this.S();
									}),
								),
								this.onModelChanged(),
								this.D.registerDecorationType("comment-controller", P.$m3b, {}),
								this.c.add(
									this.B.registerContinueOnCommentProvider({
										provideContinueOnComments: () => {
											const Z = [];
											if (this.g)
												for (const se of this.g) {
													const le = se.getPendingComments().newComment;
													if (!le) continue;
													let oe;
													if (
														se.commentThread.comments &&
														se.commentThread.comments.length
													) {
														const ae =
															se.commentThread.comments[
																se.commentThread.comments.length - 1
															];
														typeof ae.body == "string"
															? (oe = ae.body)
															: (oe = ae.body.value);
													}
													le !== oe &&
														Z.push({
															uniqueOwner: se.uniqueOwner,
															uri: se.editor.getModel().uri,
															range: se.commentThread.range,
															body: le,
															isReply:
																se.commentThread.comments !== void 0 &&
																se.commentThread.comments.length > 0,
														});
												}
											return Z;
										},
									}),
								));
					}
					L() {
						(this.x = []),
							this.f &&
								(this.x.push(this.f.onMouseMove((G) => this.O(G))),
								this.x.push(this.f.onMouseLeave(() => this.N())),
								this.x.push(
									this.f.onDidChangeCursorPosition((G) => this.Q(G.position)),
								),
								this.x.push(
									this.f.onDidFocusEditorWidget(() =>
										this.Q(this.f?.getPosition() ?? null),
									),
								),
								this.x.push(
									this.f.onDidChangeCursorSelection((G) => this.P(G)),
								),
								this.x.push(this.f.onDidBlurEditorWidget(() => this.P())));
					}
					M() {
						(0, d.$Vc)(this.x), (this.x = []);
					}
					N() {
						this.j.updateHover();
					}
					O(G) {
						const K = G.target.position?.lineNumber;
						G.event.leftButton.valueOf() && K && this.l
							? this.j.updateSelection(K, new u.$iL(this.l.lineNumber, 1, K, 1))
							: this.j.updateHover(K);
					}
					P(G) {
						const K = this.f?.getPosition()?.lineNumber;
						K && this.j.updateSelection(K, G?.selection);
					}
					Q(G) {
						const K = G
							? this.f?.getDecorationsInRange(
									u.$iL.fromPositions(G, {
										column: -1,
										lineNumber: G.lineNumber,
									}),
								)
							: void 0;
						let J = !1;
						if (K)
							for (const W of K)
								if (W.options.description === f.$jpc.description) {
									J = !1;
									break;
								} else W.options.description === x.description && (J = !0);
						this.y.set(J);
					}
					R(G) {
						return this.H.getValue("diffEditor.renderSideBySide")
							? !1
							: !!this.I.visibleTextEditorControls.find((J) =>
									J.getEditorType() === a.EditorType.IDiffEditor
										? J.getOriginalEditor() === G
										: !1,
								);
					}
					S() {
						return (
							(this.o = (0, E.$zh)((G) => {
								const K = this.f && this.f.hasModel() && this.f.getModel().uri;
								return K ? this.B.getDocumentComments(K) : Promise.resolve([]);
							})),
							(this.p = this.o.then(
								async (G) => {
									await this.ob((0, i.$Lb)(G)), (this.o = null);
								},
								(G) => console.log(G),
							)),
							this.o.then(() => (this.p = void 0)),
							this.p
						);
					}
					T() {
						this.t &&
							(this.s && (this.s.cancel(), (this.s = null)),
							this.t
								.trigger(() => {
									const G =
										this.f && this.f.hasModel() && this.f.getModel().uri;
									return G
										? this.B.getDocumentComments(G)
										: Promise.resolve([]);
								})
								.then(
									(G) => {
										if (this.B.isCommentingEnabled) {
											const K = (0, i.$Lb)(G);
											this.j.update(
												this.f,
												K,
												this.f?.getPosition()?.lineNumber,
												this.f?.getSelection() ?? void 0,
											);
										}
									},
									(G) => ((0, C.$4)(G), null),
								));
					}
					static get(G) {
						return G.getContribution(e.ID);
					}
					revealCommentThread(G, K, J, W) {
						const X = this.g.filter((Y) => Y.commentThread.threadId === G);
						X.length === 1
							? X[0].reveal(K, W)
							: J &&
								(this.p
									? this.p.then((Y) => {
											this.revealCommentThread(G, K, !1, W);
										})
									: this.S().then((Y) => {
											this.revealCommentThread(G, K, !1, W);
										}));
					}
					collapseAll() {
						for (const G of this.g) G.collapse();
					}
					expandAll() {
						for (const G of this.g) G.expand();
					}
					expandUnresolved() {
						for (const G of this.g)
							G.commentThread.state === c.CommentThreadState.Unresolved &&
								G.expand();
					}
					nextCommentThread() {
						this.U();
					}
					U(G) {
						if (!this.g.length || !this.f?.hasModel()) return;
						const K = G
								? this.f.getSelection().getStartPosition()
								: this.f.getSelection().getEndPosition(),
							J = this.g.sort((Y, ie) => {
								if (G) {
									const ne = Y;
									(Y = ie), (ie = ne);
								}
								return Y.commentThread.range === void 0
									? -1
									: ie.commentThread.range === void 0
										? 1
										: Y.commentThread.range.startLineNumber <
												ie.commentThread.range.startLineNumber
											? -1
											: Y.commentThread.range.startLineNumber >
													ie.commentThread.range.startLineNumber
												? 1
												: Y.commentThread.range.startColumn <
														ie.commentThread.range.startColumn
													? -1
													: Y.commentThread.range.startColumn >
															ie.commentThread.range.startColumn
														? 1
														: 0;
							}),
							W = (0, w.$ob)(J, (Y) => {
								const ie = G
										? K.lineNumber
										: (Y.commentThread.range?.startLineNumber ?? 0),
									ne = G
										? (Y.commentThread.range?.startLineNumber ?? 0)
										: K.lineNumber,
									ee = G ? K.column : (Y.commentThread.range?.startColumn ?? 0),
									_ = G ? (Y.commentThread.range?.startColumn ?? 0) : K.column;
								return ie > ne ? !0 : ie < ne ? !1 : ee > _;
							});
						let X;
						W === this.g.length ? (X = this.g[0]) : (X = J[W]),
							this.f.setSelection(
								X.commentThread.range ?? new u.$iL(1, 1, 1, 1),
							),
							X.reveal(void 0, s.CommentWidgetFocus.Widget);
					}
					previousCommentThread() {
						this.U(!0);
					}
					V(G) {
						if (!this.f?.hasModel()) return;
						const K = this.f.getSelection().getEndPosition(),
							J = this.j.getNearestCommentingRange(K, G);
						if (J) {
							const W = G ? J.getEndPosition() : J.getStartPosition();
							this.f.setPosition(W),
								this.f.revealLineInCenterIfOutsideViewport(W.lineNumber);
						}
						if (this.K.isScreenReaderOptimized()) {
							const W = J?.getStartPosition().lineNumber,
								X = J?.getEndPosition().lineNumber;
							W &&
								X &&
								(W === X
									? (0, M.$pib)(n.localize(5039, null, W))
									: (0, M.$pib)(n.localize(5040, null, W, X)));
						}
					}
					nextCommentingRange() {
						this.V();
					}
					previousCommentingRange() {
						this.V(!0);
					}
					dispose() {
						this.c.dispose(),
							this.d.dispose(),
							(0, d.$Vc)(this.x),
							(0, d.$Vc)(this.g),
							(this.f = null);
					}
					W(G) {
						G.newModelUrl && this.nb(G.newModelUrl);
					}
					async X(G, K, J) {
						if (
							this.g.filter(
								(te) =>
									te.uniqueOwner === K &&
									te.commentThread.threadId === J.threadId,
							).length
						)
							return;
						const X = this.g.filter(
							(te) =>
								te.uniqueOwner === K &&
								te.commentThread.commentThreadHandle === -1 &&
								u.$iL.equalsRange(te.commentThread.range, J.range),
						);
						if (X.length) {
							X[0].update(J);
							return;
						}
						const Y = this.w
							.get(K)
							?.findIndex((te) =>
								te.range === void 0
									? J.range === void 0
									: u.$iL.lift(te.range).equalsRange(J.range),
							);
						let ie;
						Y !== void 0 &&
							Y >= 0 &&
							(ie = this.w.get(K)?.splice(Y, 1)[0].body);
						const ne = (this.u[K] && this.u[K][J.threadId]) ?? ie,
							ee = this.v[K] && this.v[K][J.threadId],
							_ =
								J.canReply &&
								J.isTemplate &&
								(!J.comments || J.comments.length === 0) &&
								(!J.editorId || J.editorId === G);
						await this.ab(K, J, _, ne, ee),
							this.h.filter((te) => te.uniqueOwner === K)[0].threads.push(J),
							this.nb();
					}
					onModelChanged() {
						this.d.clear(),
							this.nb(),
							this.pb(),
							this.f &&
								((this.A = !1),
								this.d.add(this.f.onMouseDown((G) => this.bb(G))),
								this.d.add(this.f.onMouseUp((G) => this.cb(G))),
								this.x.length && (this.M(), this.L()),
								(this.t = new E.$Jh(200)),
								this.d.add({
									dispose: () => {
										this.t?.cancel(), (this.t = null);
									},
								}),
								this.d.add(
									this.f.onDidChangeModelContent(async () => {
										this.T();
									}),
								),
								this.d.add(
									this.B.onDidUpdateCommentThreads(async (G) => {
										const K =
											this.f && this.f.hasModel() && this.f.getModel().uri;
										if (!K || !this.B.isCommentingEnabled) return;
										this.o && (await this.o);
										const J = this.h.filter(
											(ee) => ee.uniqueOwner === G.uniqueOwner,
										);
										if (!J || !J.length) return;
										const W = G.added.filter(
												(ee) => ee.resource && ee.resource === K.toString(),
											),
											X = G.removed.filter(
												(ee) => ee.resource && ee.resource === K.toString(),
											),
											Y = G.changed.filter(
												(ee) => ee.resource && ee.resource === K.toString(),
											),
											ie = G.pending.filter(
												(ee) => ee.uri.toString() === K.toString(),
											);
										X.forEach((ee) => {
											const _ = this.g.filter(
												(Q) =>
													Q.uniqueOwner === G.uniqueOwner &&
													Q.commentThread.threadId === ee.threadId &&
													Q.commentThread.threadId !== "",
											);
											if (_.length) {
												const Q = _[0],
													Z = this.g.indexOf(Q);
												this.g.splice(Z, 1), Q.dispose();
											}
											const te = this.h.filter(
												(Q) => Q.uniqueOwner === G.uniqueOwner,
											)[0].threads;
											for (let Q = 0; Q < te.length; Q++)
												te[Q] === ee && (te.splice(Q, 1), Q--);
										});
										for (const ee of Y) {
											const _ = this.g.filter(
												(te) =>
													te.uniqueOwner === G.uniqueOwner &&
													te.commentThread.threadId === ee.threadId,
											);
											_.length && (_[0].update(ee), this.$(ee));
										}
										const ne = this.f?.getId();
										for (const ee of W) await this.X(ne, G.uniqueOwner, ee);
										for (const ee of ie) await this.Y(K, ee);
										this.k.update(this.f, J);
									}),
								),
								this.Z());
					}
					async Y(G, K) {
						const J = this.g.filter(
							(W) =>
								W.uniqueOwner === K.uniqueOwner &&
								u.$iL.lift(W.commentThread.range)?.equalsRange(K.range),
						);
						if (K.isReply && J.length)
							this.B.removeContinueOnComment({
								uniqueOwner: K.uniqueOwner,
								uri: G,
								range: K.range,
								isReply: !0,
							}),
								J[0].setPendingComment(K.body);
						else if (J.length) {
							this.B.removeContinueOnComment({
								uniqueOwner: K.uniqueOwner,
								uri: G,
								range: K.range,
								isReply: !1,
							});
							const W = J[0].getPendingComments().newComment;
							let X;
							!W || K.body.includes(W)
								? (X = K.body)
								: W.includes(K.body)
									? (X = W)
									: (X = `${W}
${K.body}`),
								J[0].setPendingComment(X);
						} else if (!K.isReply) {
							if (
								!this.B.removeContinueOnComment({
									uniqueOwner: K.uniqueOwner,
									uri: G,
									range: K.range,
									isReply: !1,
								})
							)
								return;
							this.w.has(K.uniqueOwner) || this.w.set(K.uniqueOwner, []),
								this.w.get(K.uniqueOwner)?.push(K),
								await this.B.createCommentThreadTemplate(
									K.uniqueOwner,
									K.uri,
									K.range ? u.$iL.lift(K.range) : void 0,
								);
						}
					}
					Z() {
						this.S().then(() => {
							if (
								!this.A &&
								this.h.some(
									(G) =>
										G.commentingRanges.ranges.length > 0 ||
										G.commentingRanges.fileComments,
								)
							)
								if (
									((this.A = !0),
									this.H.getValue(A.AccessibilityVerbositySettingId.Comments))
								) {
									const K = this.J.lookupKeybinding(
										R.AccessibilityCommandId.OpenAccessibilityHelp,
									)?.getAriaLabel();
									K
										? (0, M.$pib)(n.localize(5041, null, K))
										: (0, M.$pib)(n.localize(5042, null));
								} else (0, M.$pib)(n.localize(5043, null));
						});
					}
					async $(G) {
						if (G.comments && G.comments.length > 0 && (0, z.$42b)(G)) {
							const K = this.H.getValue(T.$32b).openView;
							if (K === "file") return this.G.openView(S.$$oc);
							if (
								(K === "firstFile" ||
									(K === "firstFileUnresolved" &&
										G.state === c.CommentThreadState.Unresolved)) &&
								!this.G.getViewWithId(S.$$oc)?.hasRendered
							)
								return this.G.openView(S.$$oc);
						}
					}
					async ab(G, K, J, W, X) {
						const Y = this.f?.getModel();
						if (!Y || !this.f || this.R(this.f)) return;
						let ie;
						K.range &&
							!W &&
							(ie = this.B.removeContinueOnComment({
								uniqueOwner: G,
								uri: Y.uri,
								range: K.range,
								isReply: !0,
							}));
						const ne = this.C.createInstance(
							s.$npc,
							this.f,
							G,
							K,
							W ?? ie?.body,
							X,
						);
						await ne.display(K.range, J), this.g.push(ne), this.$(K);
					}
					bb(G) {
						this.l = (0, s.$kpc)(G);
					}
					cb(G) {
						const K = (0, s.$lpc)(this.l, G);
						if (((this.l = null), !this.f || K === null || !G.target.element))
							return;
						const J =
								G.target.element.className.indexOf("comment-range-glyph") >= 0,
							W = G.target.position.lineNumber;
						let X, Y;
						K !== W
							? K > W
								? (Y = new u.$iL(
										K,
										this.f.getModel().getLineLength(K) + 1,
										W,
										1,
									))
								: (Y = new u.$iL(
										K,
										1,
										W,
										this.f.getModel().getLineLength(W) + 1,
									))
							: J && (Y = this.f.getSelection()),
							Y && Y.startLineNumber <= W && W <= Y.endLineNumber
								? ((X = Y),
									this.f.setSelection(
										new u.$iL(Y.endLineNumber, 1, Y.endLineNumber, 1),
									))
								: J && (X = new u.$iL(W, 1, W, 1)),
							X && this.addOrToggleCommentAtLine(X, G);
					}
					async addOrToggleCommentAtLine(G, K) {
						if (this.q) this.r.push([G, K]);
						else {
							this.q = !0;
							const J = this.g.filter(
								(W) => W.getGlyphPosition() === (G ? G.endLineNumber : 0),
							);
							if (J.length) {
								const W = J.every((X) => X.expanded);
								J.forEach(W ? (X) => X.collapse() : (X) => X.expand(!0)),
									this.db();
								return;
							} else this.addCommentAtLine(G, K);
						}
					}
					db() {
						this.q = !1;
						const G = this.r.shift();
						G && this.addOrToggleCommentAtLine(G[0], G[1]);
					}
					eb(G, K) {
						return (
							G.startLineNumber < K.startLineNumber &&
								(G = new u.$iL(
									K.startLineNumber,
									K.startColumn,
									G.endLineNumber,
									G.endColumn,
								)),
							G.endLineNumber > K.endLineNumber &&
								(G = new u.$iL(
									G.startLineNumber,
									G.startColumn,
									K.endLineNumber,
									K.endColumn,
								)),
							G
						);
					}
					addCommentAtLine(G, K) {
						const J = this.j.getMatchedCommentAction(G);
						if (!J.length || !this.f?.hasModel()) {
							if (((this.q = !1), !J.length))
								throw new Error(
									`There are no commenting ranges at the current position (${G ? "with range" : "without range"}).`,
								);
							return Promise.resolve();
						}
						if (J.length > 1) {
							if (K && G)
								return (
									this.E.showContextMenu({
										getAnchor: () => K.event,
										getActions: () => this.gb(J, G),
										getActionsContext: () => (J.length ? J[0] : void 0),
										onHide: () => {
											this.q = !1;
										},
									}),
									Promise.resolve()
								);
							{
								const W = this.fb(J);
								return this.F.pick(W, {
									placeHolder: n.localize(5044, null),
									matchOnDescription: !0,
								})
									.then((X) => {
										if (!X) return;
										const Y = J.filter((ie) => ie.action.ownerId === X.id);
										if (Y.length) {
											const { ownerId: ie } = Y[0].action,
												ne = G && Y[0].range ? this.eb(G, Y[0].range) : G;
											this.addCommentAtLine2(ne, ie);
										}
									})
									.then(() => {
										this.q = !1;
									});
							}
						} else {
							const { ownerId: W } = J[0].action,
								X = G && J[0].range ? this.eb(G, J[0].range) : G;
							this.addCommentAtLine2(X, W);
						}
						return Promise.resolve();
					}
					fb(G) {
						return G.map((J) => {
							const { ownerId: W, extensionId: X, label: Y } = J.action;
							return { label: Y ?? X ?? W, id: W };
						});
					}
					gb(G, K) {
						const J = [];
						return (
							G.forEach((W) => {
								const { ownerId: X, extensionId: Y, label: ie } = W.action;
								J.push(
									new t.$rj(
										"addCommentThread",
										`${ie || Y}`,
										void 0,
										!0,
										() => {
											const ne = W.range ? this.eb(K, W.range) : K;
											return this.addCommentAtLine2(ne, X), Promise.resolve();
										},
									),
								);
							}),
							J
						);
					}
					addCommentAtLine2(G, K) {
						this.f &&
							(this.B.createCommentThreadTemplate(
								K,
								this.f.getModel().uri,
								G,
								this.f.getId(),
							),
							this.db());
					}
					hb(G) {
						const K = G.getOption($.EditorOption.lineDecorationsWidth);
						let J = [];
						const W = G.getRawOptions().extraEditorClassName;
						return (
							W && (J = W.split(" ")),
							{ lineDecorationsWidth: K, extraEditorClassName: J }
						);
					}
					ib(G, K, J) {
						let W = J;
						const X = K.findIndex((ie) => ie === "inline-comment");
						X >= 0 && K.splice(X, 1);
						const Y = G.getOptions();
						return (
							Y.get($.EditorOption.folding) &&
								Y.get($.EditorOption.showFoldingControls) !== "never" &&
								(W += 11),
							(W -= 24),
							{ extraEditorClassName: K, lineDecorationsWidth: W }
						);
					}
					jb(G, K) {
						let J = K;
						const W = G.getOptions();
						return (
							W.get($.EditorOption.folding) &&
								W.get($.EditorOption.showFoldingControls) !== "never" &&
								(J -= 11),
							(J += 24),
							(this.n = J),
							this.n
						);
					}
					kb(G, K, J) {
						return (
							K.push("inline-comment"),
							{ lineDecorationsWidth: this.jb(G, J), extraEditorClassName: K }
						);
					}
					lb(G, K, J) {
						G.updateOptions({
							extraEditorClassName: K.join(" "),
							lineDecorationsWidth: J,
						});
					}
					mb(G) {
						const K = this.hb(G);
						K.lineDecorationsWidth !== this.n &&
							G.updateOptions({
								lineDecorationsWidth: this.jb(G, K.lineDecorationsWidth),
							});
					}
					nb(G) {
						if (!this.f) return;
						const K = this.h.some(
							(X) =>
								!!(
									X.commentingRanges &&
									(Array.isArray(X.commentingRanges)
										? X.commentingRanges
										: X.commentingRanges.ranges
									).length
								) || X.threads.length > 0,
						);
						G = G ?? this.f.getModel()?.uri;
						const J = G ? this.B.resourceHasCommentingRanges(G) : !1,
							W = K || J;
						if (W && this.B.isCommentingEnabled)
							if (this.m) this.mb(this.f);
							else {
								this.m = !0;
								const { lineDecorationsWidth: X, extraEditorClassName: Y } =
										this.hb(this.f),
									ie = this.kb(this.f, Y, X);
								this.lb(
									this.f,
									ie.extraEditorClassName,
									ie.lineDecorationsWidth,
								);
							}
						else if ((!W || !this.B.isCommentingEnabled) && this.m) {
							this.m = !1;
							const { lineDecorationsWidth: X, extraEditorClassName: Y } =
									this.hb(this.f),
								ie = this.ib(this.f, Y, X);
							this.lb(this.f, ie.extraEditorClassName, ie.lineDecorationsWidth);
						}
					}
					async ob(G) {
						if (!this.f || !this.B.isCommentingEnabled) return;
						(this.h = G), this.nb(), this.pb();
						let K = !1;
						for (const J of this.h) {
							!K &&
								(J.commentingRanges.ranges.length > 0 ||
									J.commentingRanges.fileComments) &&
								(K = !0);
							const W = this.u[J.uniqueOwner],
								X = this.v[J.uniqueOwner];
							J.threads = J.threads.filter((Y) => !Y.isDisposed);
							for (const Y of J.threads) {
								let ie;
								W && (ie = W[Y.threadId]);
								let ne;
								X && (ne = X[Y.threadId]),
									await this.ab(J.uniqueOwner, Y, !1, ie, ne);
							}
							for (const Y of J.pendingCommentThreads ?? [])
								this.Y(this.f.getModel().uri, Y);
						}
						this.j.update(this.f, this.h),
							this.k.update(this.f, this.h),
							K ? this.z.set(!0) : this.z.set(!1);
					}
					closeWidget() {
						this.g?.forEach((G) => G.hide()),
							this.f &&
								(this.f.focus(),
								this.f.revealRangeInCenter(this.f.getSelection()));
					}
					pb() {
						this.g &&
							this.g.forEach((G) => {
								const K = G.getPendingComments(),
									J = K.newComment,
									W = this.u[G.uniqueOwner];
								let X;
								if (
									G.commentThread.comments &&
									G.commentThread.comments.length
								) {
									const ne =
										G.commentThread.comments[
											G.commentThread.comments.length - 1
										];
									typeof ne.body == "string"
										? (X = ne.body)
										: (X = ne.body.value);
								}
								J && J !== X
									? (W || (this.u[G.uniqueOwner] = {}),
										(this.u[G.uniqueOwner][G.commentThread.threadId] = J))
									: W && delete W[G.commentThread.threadId];
								const Y = K.edits,
									ie = this.v[G.uniqueOwner];
								Object.keys(Y).length > 0
									? (ie || (this.v[G.uniqueOwner] = {}),
										(this.v[G.uniqueOwner][G.commentThread.threadId] = Y))
									: ie && delete ie[G.commentThread.threadId],
									G.dispose();
							}),
							(this.g = []);
					}
				};
				(e.$rpc = q),
					(e.$rpc = q =
						Ne(
							[
								j(1, b.$62b),
								j(2, p.$Li),
								j(3, r.$dtb),
								j(4, g.$Xxb),
								j(5, o.$DJ),
								j(6, v.$HMb),
								j(7, I.$gj),
								j(8, L.$6j),
								j(9, l.$IY),
								j(10, O.$uZ),
								j(11, B.$XK),
							],
							q,
						));
			},
		),
		