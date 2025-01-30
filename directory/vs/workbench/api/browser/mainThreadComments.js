import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/uri.js';
import '../../../editor/common/core/range.js';
import '../../../editor/common/languages.js';
import '../../../platform/registry/common/platform.js';
import '../../services/extensions/common/extHostCustomers.js';
import '../../contrib/comments/browser/commentService.js';
import '../../contrib/comments/browser/commentsView.js';
import '../common/extHost.protocol.js';
import '../../contrib/comments/browser/commentsTreeViewer.js';
import '../../common/views.js';
import '../../../platform/instantiation/common/descriptors.js';
import '../../browser/parts/views/viewPaneContainer.js';
import '../../../base/common/codicons.js';
import '../../../platform/theme/common/iconRegistry.js';
import '../../../nls.js';
import '../../../base/common/marshallingIds.js';
import '../../../base/common/network.js';
import '../../services/views/common/viewsService.js';
import '../../contrib/comments/browser/commentsController.js';
import '../../services/editor/common/editorService.js';
import '../../../platform/uriIdentity/common/uriIdentity.js';
define(
			de[4015],
			he([
				1, 0, 6, 3, 9, 17, 74, 30, 101, 447, 1330, 88, 683, 60, 102, 239, 14,
				79, 4, 221, 23, 89, 1048, 18, 68,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*event*/,
				i /*lifecycle*/,
				w /*uri*/,
				E /*range*/,
				C /*languages*/,
				d /*platform*/,
				m /*extHostCustomers*/,
				r /*commentService*/,
				u /*commentsView*/,
				a /*extHost.protocol*/,
				h /*commentsTreeViewer*/,
				c /*views*/,
				n /*descriptors*/,
				g /*viewPaneContainer*/,
				p /*codicons*/,
				o /*iconRegistry*/,
				f /*nls*/,
				b /*marshallingIds*/,
				s /*network*/,
				l /*viewsService*/,
				y /*commentsController*/,
				$ /*editorService*/,
				v /*uriIdentity*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Apc = e.$zpc = e.$ypc = void 0),
					(C = mt(C));
				class S {
					get input() {
						return this.a;
					}
					set input(L) {
						(this.a = L), this.b.fire(L);
					}
					get onDidChangeInput() {
						return this.b.event;
					}
					get label() {
						return this.c;
					}
					set label(L) {
						(this.c = L), this.f.fire(this.c);
					}
					get contextValue() {
						return this.d;
					}
					set contextValue(L) {
						this.d = L;
					}
					get comments() {
						return this.g;
					}
					set comments(L) {
						(this.g = L), this.h.fire(this.g);
					}
					get onDidChangeComments() {
						return this.h.event;
					}
					set range(L) {
						(this.u = L), this.j.fire(this.u);
					}
					get range() {
						return this.u;
					}
					get onDidChangeCanReply() {
						return this.i.event;
					}
					set canReply(L) {
						(this.v = L), this.i.fire(this.v);
					}
					get canReply() {
						return this.v;
					}
					get collapsibleState() {
						return this.k;
					}
					set collapsibleState(L) {
						L !== this.k && ((this.k = L), this.n.fire(this.k));
					}
					get m() {
						return this.l;
					}
					set m(L) {
						(this.l = L),
							this.collapsibleState === void 0 &&
								(this.collapsibleState = this.m),
							this.o.fire(L);
					}
					get isDisposed() {
						return this.p;
					}
					isDocumentCommentThread() {
						return this.u === void 0 || E.$iL.isIRange(this.u);
					}
					get state() {
						return this.q;
					}
					set state(L) {
						(this.q = L), this.t.fire(this.q);
					}
					get applicability() {
						return this.r;
					}
					set applicability(L) {
						(this.r = L), this.s.fire(L);
					}
					get isTemplate() {
						return this.w;
					}
					constructor(L, D, M, N, A, R, O, B, U, z) {
						(this.commentThreadHandle = L),
							(this.controllerHandle = D),
							(this.extensionId = M),
							(this.threadId = N),
							(this.resource = A),
							(this.u = R),
							(this.v = B),
							(this.w = U),
							(this.editorId = z),
							(this.b = new t.$re()),
							(this.f = new t.$re()),
							(this.onDidChangeLabel = this.f.event),
							(this.h = new t.$re()),
							(this.i = new t.$re()),
							(this.j = new t.$re()),
							(this.onDidChangeRange = this.j.event),
							(this.n = new t.$re()),
							(this.onDidChangeCollapsibleState = this.n.event),
							(this.o = new t.$re()),
							(this.onDidChangeInitialCollapsibleState = this.o.event),
							(this.s = new t.$re()),
							(this.onDidChangeApplicability = this.s.event),
							(this.t = new t.$re()),
							(this.onDidChangeState = this.t.event),
							(this.p = !1),
							U ? (this.comments = []) : O && (this.g = O);
					}
					batchUpdate(L) {
						const D = (M) => Object.prototype.hasOwnProperty.call(L, M);
						D("range") && (this.u = L.range),
							D("label") && (this.c = L.label),
							D("contextValue") &&
								(this.d = L.contextValue === null ? void 0 : L.contextValue),
							D("comments") && (this.comments = L.comments),
							D("collapseState") && (this.m = L.collapseState),
							D("canReply") && (this.canReply = L.canReply),
							D("state") && (this.state = L.state),
							D("applicability") && (this.applicability = L.applicability),
							D("isTemplate") && (this.w = L.isTemplate);
					}
					hasComments() {
						return !!this.comments && this.comments.length > 0;
					}
					dispose() {
						(this.p = !0),
							this.n.dispose(),
							this.h.dispose(),
							this.b.dispose(),
							this.f.dispose(),
							this.j.dispose(),
							this.t.dispose();
					}
					toJSON() {
						return {
							$mid: b.MarshalledId.CommentThread,
							commentControlHandle: this.controllerHandle,
							commentThreadHandle: this.commentThreadHandle,
						};
					}
				}
				e.$ypc = S;
				class I {
					get handle() {
						return this.f;
					}
					get id() {
						return this.h;
					}
					get contextValue() {
						return this.h;
					}
					get proxy() {
						return this.c;
					}
					get label() {
						return this.i;
					}
					get reactions() {
						return this.a;
					}
					set reactions(L) {
						this.a = L;
					}
					get options() {
						return this.j.options;
					}
					get features() {
						return this.j;
					}
					get owner() {
						return this.h;
					}
					constructor(L, D, M, N, A, R, O) {
						(this.c = L),
							(this.d = D),
							(this.f = M),
							(this.g = N),
							(this.h = A),
							(this.i = R),
							(this.j = O),
							(this.b = new Map());
					}
					async setActiveCommentAndThread(L) {
						return this.c.$setActiveComment(
							this.f,
							L
								? {
										commentThreadHandle: L.thread.commentThreadHandle,
										uniqueIdInThread: L.comment?.uniqueIdInThread,
									}
								: void 0,
						);
					}
					updateFeatures(L) {
						this.j = L;
					}
					createCommentThread(L, D, M, N, A, R, O, B) {
						const U = new S(
							D,
							this.handle,
							L,
							M,
							w.URI.revive(N).toString(),
							A,
							R,
							!0,
							O,
							B,
						);
						return (
							this.b.set(D, U),
							U.isDocumentCommentThread()
								? this.d.updateComments(this.g, {
										added: [U],
										removed: [],
										changed: [],
										pending: [],
									})
								: this.d.updateNotebookComments(this.g, {
										added: [U],
										removed: [],
										changed: [],
										pending: [],
									}),
							U
						);
					}
					updateCommentThread(L, D, M, N) {
						const A = this.k(L);
						A.batchUpdate(N),
							A.isDocumentCommentThread()
								? this.d.updateComments(this.g, {
										added: [],
										removed: [],
										changed: [A],
										pending: [],
									})
								: this.d.updateNotebookComments(this.g, {
										added: [],
										removed: [],
										changed: [A],
										pending: [],
									});
					}
					deleteCommentThread(L) {
						const D = this.k(L);
						this.b.delete(L),
							D.dispose(),
							D.isDocumentCommentThread()
								? this.d.updateComments(this.g, {
										added: [],
										removed: [D],
										changed: [],
										pending: [],
									})
								: this.d.updateNotebookComments(this.g, {
										added: [],
										removed: [D],
										changed: [],
										pending: [],
									});
					}
					deleteCommentThreadMain(L) {
						this.b.forEach((D) => {
							D.threadId === L &&
								this.c.$deleteCommentThread(this.f, D.commentThreadHandle);
						});
					}
					updateInput(L) {
						const D = this.activeEditingCommentThread;
						if (D && D.input) {
							const M = D.input;
							(M.value = L), (D.input = M);
						}
					}
					updateCommentingRanges(L) {
						this.d.updateCommentingRanges(this.g, L);
					}
					k(L) {
						const D = this.b.get(L);
						if (!D) throw new Error("unknown thread");
						return D;
					}
					async getDocumentComments(L, D) {
						if (L.scheme === s.Schemas.vscodeNotebookCell)
							return {
								uniqueOwner: this.g,
								label: this.label,
								threads: [],
								commentingRanges: { resource: L, ranges: [], fileComments: !1 },
							};
						const M = [];
						for (const A of [...this.b.keys()]) {
							const R = this.b.get(A);
							R.resource === L.toString() &&
								R.isDocumentCommentThread() &&
								M.push(R);
						}
						const N = await this.c.$provideCommentingRanges(this.handle, L, D);
						return {
							uniqueOwner: this.g,
							label: this.label,
							threads: M,
							commentingRanges: {
								resource: L,
								ranges: N?.ranges || [],
								fileComments: !!N?.fileComments,
							},
						};
					}
					async getNotebookComments(L, D) {
						if (L.scheme !== s.Schemas.vscodeNotebookCell)
							return { uniqueOwner: this.g, label: this.label, threads: [] };
						const M = [];
						for (const N of [...this.b.keys()]) {
							const A = this.b.get(N);
							A.resource === L.toString() &&
								(A.isDocumentCommentThread() || M.push(A));
						}
						return { uniqueOwner: this.g, label: this.label, threads: M };
					}
					async toggleReaction(L, D, M, N, A) {
						return this.c.$toggleReaction(
							this.f,
							D.commentThreadHandle,
							L,
							M,
							N,
						);
					}
					getAllComments() {
						const L = [];
						for (const D of [...this.b.keys()]) L.push(this.b.get(D));
						return L;
					}
					createCommentThreadTemplate(L, D, M) {
						return this.c.$createCommentThreadTemplate(this.handle, L, D, M);
					}
					async updateCommentThreadTemplate(L, D) {
						await this.c.$updateCommentThreadTemplate(this.handle, L, D);
					}
					toJSON() {
						return {
							$mid: b.MarshalledId.CommentController,
							handle: this.handle,
						};
					}
				}
				e.$zpc = I;
				const T = (0, o.$$O)(
					"comments-view-icon",
					p.$ak.commentDiscussion,
					(0, f.localize)(2536, null),
				);
				let P = class extends i.$1c {
					constructor(L, D, M, N, A, R) {
						super(),
							(this.j = D),
							(this.m = M),
							(this.n = N),
							(this.q = A),
							(this.r = R),
							(this.b = new Map()),
							(this.c = new Map()),
							(this.g = this.D(new i.$Zc())),
							(this.h = null),
							(this.a = L.getProxy(a.$mbb.ExtHostComments)),
							this.j.unregisterCommentController(),
							this.D(
								this.j.onDidChangeActiveEditingCommentThread(async (O) => {
									const B = O.controllerHandle,
										U = this.c.get(B);
									U &&
										(this.g.clear(),
										(this.f = O),
										(U.activeEditingCommentThread = this.f));
								}),
							);
					}
					$registerCommentController(L, D, M, N) {
						const A = `${D}-${N}`;
						this.b.set(L, A);
						const R = new I(this.a, this.j, L, A, D, M, {});
						this.j.registerCommentController(A, R), this.c.set(L, R);
						const O = !!this.n.getViewDescriptorById(h.$$oc);
						O || this.s(O),
							this.w(O),
							this.j.setWorkspaceComments(String(L), []);
					}
					$unregisterCommentController(L) {
						const D = this.b.get(L);
						this.b.delete(L),
							this.c.delete(L),
							typeof D == "string" && this.j.unregisterCommentController(D);
					}
					$updateCommentControllerFeatures(L, D) {
						const M = this.c.get(L);
						M && M.updateFeatures(D);
					}
					$createCommentThread(L, D, M, N, A, R, O, B, U) {
						const z = this.c.get(L);
						if (z) return z.createCommentThread(O.value, D, M, N, A, R, B, U);
					}
					$updateCommentThread(L, D, M, N, A) {
						const R = this.c.get(L);
						if (R) return R.updateCommentThread(D, M, N, A);
					}
					$deleteCommentThread(L, D) {
						const M = this.c.get(L);
						if (M) return M.deleteCommentThread(D);
					}
					$updateCommentingRanges(L, D) {
						const M = this.c.get(L);
						M && M.updateCommentingRanges(D);
					}
					async $revealCommentThread(L, D, M, N) {
						const A = this.c.get(L);
						if (!A) return Promise.resolve();
						const R = A.getAllComments().find(
							(B) => B.commentThreadHandle === D,
						);
						if (!R || !R.isDocumentCommentThread()) return Promise.resolve();
						const O = R.comments?.find((B) => B.uniqueIdInThread === M);
						(0, y.$qpc)(
							this.j,
							this.r,
							this.q,
							R,
							O,
							N.focusReply,
							void 0,
							N.preserveFocus,
						);
					}
					async $hideCommentThread(L, D) {
						const M = this.c.get(L);
						if (!M) return Promise.resolve();
						const N = M.getAllComments().find(
							(A) => A.commentThreadHandle === D,
						);
						if (!N || !N.isDocumentCommentThread()) return Promise.resolve();
						N.collapsibleState = C.CommentThreadCollapsibleState.Collapsed;
					}
					s(L) {
						if (!L) {
							const D = d.$Io
								.as(c.Extensions.ViewContainersRegistry)
								.registerViewContainer(
									{
										id: h.$$oc,
										title: h.$apc,
										ctorDescriptor: new n.$Ji(g.$ZSb, [
											h.$$oc,
											{ mergeViewWithContainerWhenSingleView: !0 },
										]),
										storageId: h.$_oc,
										hideIfEmpty: !0,
										icon: T,
										order: 10,
									},
									c.ViewContainerLocation.Panel,
								);
							d.$Io
								.as(c.Extensions.ViewsRegistry)
								.registerViews(
									[
										{
											id: h.$$oc,
											name: h.$apc,
											canToggleVisibility: !1,
											ctorDescriptor: new n.$Ji(u.$xpc),
											canMoveView: !0,
											containerIcon: T,
											focusCommand: {
												id: "workbench.action.focusCommentsPanel",
											},
										},
									],
									D,
								);
						}
					}
					t() {
						[...this.c.keys()].forEach((L) => {
							const D = this.c.get(L).getAllComments();
							if (D.length) {
								const M = this.y(L);
								this.j.setWorkspaceComments(M, D);
							}
						});
					}
					u() {
						this.h ||
							(this.h = this.m.onDidChangeViewVisibility((L) => {
								L.id === h.$$oc &&
									L.visible &&
									(this.t(), this.h && (this.h.dispose(), (this.h = null)));
							}));
					}
					w(L) {
						L || this.u(),
							this.D(
								this.n.onDidChangeContainer((D) => {
									D.views.find((M) => M.id === h.$$oc) && (this.t(), this.u());
								}),
							),
							this.D(
								this.n.onDidChangeContainerLocation((D) => {
									const M = this.n.getViewContainerByViewId(h.$$oc);
									D.viewContainer.id === M?.id && (this.t(), this.u());
								}),
							);
					}
					y(L) {
						if (!this.b.has(L)) throw new Error("Unknown handler");
						return this.b.get(L);
					}
				};
				(e.$Apc = P),
					(e.$Apc = P =
						Ne(
							[
								(0, m.$tmc)(a.$lbb.MainThreadComments),
								j(1, r.$62b),
								j(2, l.$HMb),
								j(3, c.$K1),
								j(4, v.$Vl),
								j(5, $.$IY),
							],
							P,
						));
			},
		),
		