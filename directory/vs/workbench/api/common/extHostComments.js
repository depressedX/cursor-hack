import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/async.js';
import '../../../base/common/decorators.js';
import '../../../base/common/event.js';
import '../../../base/common/lifecycle.js';
import '../../../base/common/marshallingIds.js';
import '../../../base/common/uri.js';
import '../../../editor/common/languages.js';
import '../../../platform/extensions/common/extensions.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
import './extHost.protocol.js';
import '../../services/extensions/common/extensions.js';
define(
			Pe[564],
			Ne([1, 0, 9, 89, 4, 3, 55, 2, 137, 25, 17, 11, 6, 29]),
			function (we, t, e, r, S, N, P, I, l, n, p, y, d, k) {
				"use strict";
				Object.defineProperty(t, "__esModule", { value: !0 }),
					(t.$mhd = g),
					(l = tt(l)),
					(p = tt(p)),
					(y = tt(y));
				function g(c, h, $) {
					const T = c.getProxy(d.$lbb.MainThreadComments);
					class a {
						static {
							this.a = 0;
						}
						constructor() {
							(this.b = new Map()),
								(this.c = new n.$In()),
								h.registerArgumentProcessor({
									processArgument: (O) => {
										if (O && O.$mid === P.MarshalledId.CommentController) {
											const A = this.b.get(O.handle);
											return A ? A.value : O;
										} else if (O && O.$mid === P.MarshalledId.CommentThread) {
											const A = O,
												J = this.b.get(A.commentControlHandle);
											if (!J) return A;
											const L = J.getCommentThread(A.commentThreadHandle);
											return L ? L.value : A;
										} else if (
											O &&
											(O.$mid === P.MarshalledId.CommentThreadReply ||
												O.$mid === P.MarshalledId.CommentThreadInstance)
										) {
											const A = this.b.get(O.thread.commentControlHandle);
											if (!A) return O;
											const J = A.getCommentThread(
												O.thread.commentThreadHandle,
											);
											return J
												? O.$mid === P.MarshalledId.CommentThreadInstance
													? J.value
													: { thread: J.value, text: O.text }
												: O;
										} else if (O && O.$mid === P.MarshalledId.CommentNode) {
											const A = this.b.get(O.thread.commentControlHandle);
											if (!A) return O;
											const J = A.getCommentThread(
												O.thread.commentThreadHandle,
											);
											if (!J) return O;
											const L = O.commentUniqueId,
												b = J.getCommentByUniqueId(L);
											return b || O;
										} else if (
											O &&
											O.$mid === P.MarshalledId.CommentThreadNode
										) {
											const A = this.b.get(O.thread.commentControlHandle);
											if (!A) return O;
											const J = A.getCommentThread(
												O.thread.commentThreadHandle,
											);
											if (!J) return O;
											const L = O.text,
												b = O.commentUniqueId,
												F = J.getCommentByUniqueId(b);
											return F
												? (typeof F.body == "string"
														? (F.body = L)
														: (F.body = new y.$Rbb(L)),
													F)
												: O;
										}
										return O;
									},
								});
						}
						createCommentController(O, A, J) {
							const L = a.a++,
								b = new s(O, L, A, J);
							this.b.set(b.handle, b);
							const F = this.c.get(O.identifier) || [];
							return F.push(b), this.c.set(O.identifier, F), b.value;
						}
						async $createCommentThreadTemplate(O, A, J, L) {
							const b = this.b.get(O);
							b && b.$createCommentThreadTemplate(A, J, L);
						}
						async $setActiveComment(O, A) {
							const J = this.b.get(O);
							J && J.$setActiveComment(A ?? void 0);
						}
						async $updateCommentThreadTemplate(O, A, J) {
							const L = this.b.get(O);
							L && L.$updateCommentThreadTemplate(A, J);
						}
						$deleteCommentThread(O, A) {
							this.b.get(O)?.$deleteCommentThread(A);
						}
						async $provideCommentingRanges(O, A, J) {
							const L = this.b.get(O);
							if (!L || !L.commentingRangeProvider)
								return Promise.resolve(void 0);
							const b = await $.ensureDocumentData(I.URI.revive(A));
							return (0, e.$Eh)(async () => {
								const F =
									await L.commentingRangeProvider.provideCommentingRanges(
										b.document,
										J,
									);
								let D;
								return (
									Array.isArray(F)
										? (D = { ranges: F, fileComments: !1 })
										: F
											? (D = {
													ranges: F.ranges || [],
													fileComments: F.enableFileComments || !1,
												})
											: (D = F ?? void 0),
									D
								);
							}).then((F) => {
								let D;
								return (
									F &&
										(D = {
											ranges: F.ranges.map((M) => p.Range.from(M)),
											fileComments: F.fileComments,
										}),
									D
								);
							});
						}
						$toggleReaction(O, A, J, L, b) {
							const F = this.b.get(O);
							return !F || !F.reactionHandler
								? Promise.resolve(void 0)
								: (0, e.$Eh)(() => {
										const D = F.getCommentThread(A);
										if (D) {
											const M = D.getCommentByUniqueId(L.uniqueIdInThread);
											if (F !== void 0 && M && F.reactionHandler)
												return F.reactionHandler(M, w(b));
										}
										return Promise.resolve(void 0);
									});
						}
					}
					class u {
						static {
							this.a = 0;
						}
						set threadId(O) {
							this.n = O;
						}
						get threadId() {
							return this.n;
						}
						get id() {
							return this.n;
						}
						get resource() {
							return this.o;
						}
						get uri() {
							return this.o;
						}
						set range(O) {
							((O === void 0) != (this.p === void 0) ||
								!O ||
								!this.p ||
								!O.isEqual(this.p)) &&
								((this.p = O), (this.b.range = O), this.c.fire());
						}
						get range() {
							return this.p;
						}
						set canReply(O) {
							this.d !== O &&
								((this.d = O), (this.b.canReply = O), this.c.fire());
						}
						get canReply() {
							return this.d;
						}
						get label() {
							return this.e;
						}
						set label(O) {
							(this.e = O), (this.b.label = O), this.c.fire();
						}
						get contextValue() {
							return this.f;
						}
						set contextValue(O) {
							(this.f = O), (this.b.contextValue = O), this.c.fire();
						}
						get comments() {
							return this.q;
						}
						set comments(O) {
							(this.q = O), (this.b.comments = O), this.c.fire();
						}
						get collapsibleState() {
							return this.g;
						}
						set collapsibleState(O) {
							(this.g = O), (this.b.collapsibleState = O), this.c.fire();
						}
						get state() {
							return this.h;
						}
						set state(O) {
							(this.h = O),
								typeof O == "object"
									? ((0, k.$u2)(
											this.extensionDescription,
											"commentThreadApplicability",
										),
										(this.b.state = O.resolved),
										(this.b.applicability = O.applicability))
									: (this.b.state = O),
								this.c.fire();
						}
						get isDisposed() {
							return this.j;
						}
						constructor(O, A, J, L, b, F, D, M, z) {
							(this.m = A),
								(this.n = J),
								(this.o = L),
								(this.p = b),
								(this.q = F),
								(this.extensionDescription = D),
								(this.r = M),
								(this.handle = u.a++),
								(this.commentHandle = 0),
								(this.b = Object.create(null)),
								(this.c = new S.$re()),
								(this.onDidUpdateCommentThread = this.c.event),
								(this.d = !0),
								(this.k = new Map()),
								(this.l = new N.$2c()),
								(this.l.value = new N.$Zc()),
								this.n === void 0 && (this.n = `${O}.${this.handle}`),
								T.$createCommentThread(
									A,
									this.handle,
									this.n,
									this.o,
									p.Range.from(this.p),
									this.q.map((H) =>
										f(this, H, this.k, this.extensionDescription),
									),
									D.identifier,
									this.r,
									z,
								),
								(this.i = []),
								(this.j = !1),
								this.i.push(
									this.onDidUpdateCommentThread(() => {
										this.eventuallyUpdateCommentThread();
									}),
								),
								this.i.push({
									dispose: () => {
										T.$deleteCommentThread(A, this.handle);
									},
								});
							const Q = this;
							this.value = {
								get uri() {
									return Q.uri;
								},
								get range() {
									return Q.range;
								},
								set range(H) {
									Q.range = H;
								},
								get comments() {
									return Q.comments;
								},
								set comments(H) {
									Q.comments = H;
								},
								get collapsibleState() {
									return Q.collapsibleState;
								},
								set collapsibleState(H) {
									Q.collapsibleState = H;
								},
								get canReply() {
									return Q.canReply;
								},
								set canReply(H) {
									Q.canReply = H;
								},
								get contextValue() {
									return Q.contextValue;
								},
								set contextValue(H) {
									Q.contextValue = H;
								},
								get label() {
									return Q.label;
								},
								set label(H) {
									Q.label = H;
								},
								get state() {
									return Q.state;
								},
								set state(H) {
									Q.state = H;
								},
								reveal: (H, B) => Q.reveal(H, B),
								hide: () => Q.hide(),
								dispose: () => {
									Q.dispose();
								},
							};
						}
						s() {
							this.r && ((this.r = !1), (this.b.isTemplate = !1));
						}
						eventuallyUpdateCommentThread() {
							if (this.j) return;
							this.s(), this.l.value || (this.l.value = new N.$Zc());
							const O = (J) => Object.prototype.hasOwnProperty.call(this.b, J),
								A = {};
							O("range") && (A.range = p.Range.from(this.p)),
								O("label") && (A.label = this.label),
								O("contextValue") &&
									(A.contextValue = this.contextValue ?? null),
								O("comments") &&
									(A.comments = this.q.map((J) =>
										f(this, J, this.k, this.extensionDescription),
									)),
								O("collapsibleState") && (A.collapseState = m(this.g)),
								O("canReply") && (A.canReply = this.canReply),
								O("state") && (A.state = E(this.h)),
								O("applicability") && (A.applicability = R(this.h)),
								O("isTemplate") && (A.isTemplate = this.r),
								(this.b = {}),
								T.$updateCommentThread(this.m, this.handle, this.n, this.o, A);
						}
						getCommentByUniqueId(O) {
							for (const A of this.k) {
								const J = A[0],
									L = A[1];
								if (O === L) return J;
							}
						}
						async reveal(O, A) {
							(0, k.$u2)(this.extensionDescription, "commentReveal");
							let J;
							O && O.body !== void 0 ? (J = O) : (A = A ?? O);
							let L = J ? this.k.get(J) : void 0;
							L ??= this.k.get(this.q[0]);
							let b = !0,
								F = !1;
							return (
								A?.focus === y.CommentThreadFocus.Reply
									? ((F = !0), (b = !1))
									: A?.focus === y.CommentThreadFocus.Comment && (b = !1),
								T.$revealCommentThread(this.m, this.handle, L, {
									preserveFocus: b,
									focusReply: F,
								})
							);
						}
						async hide() {
							return T.$hideCommentThread(this.m, this.handle);
						}
						dispose() {
							(this.j = !0),
								this.l.dispose(),
								this.i.forEach((O) => O.dispose());
						}
					}
					wt(
						[(0, r.$fi)(100)],
						u.prototype,
						"eventuallyUpdateCommentThread",
						null,
					);
					class s {
						get id() {
							return this.j;
						}
						get label() {
							return this.k;
						}
						get handle() {
							return this.i;
						}
						get commentingRangeProvider() {
							return this.b;
						}
						set commentingRangeProvider(O) {
							(this.b = O),
								O?.resourceHints && (0, k.$u2)(this.h, "commentingRangeHint"),
								T.$updateCommentingRanges(this.handle, O?.resourceHints);
						}
						get reactionHandler() {
							return this.c;
						}
						set reactionHandler(O) {
							(this.c = O),
								T.$updateCommentControllerFeatures(this.handle, {
									reactionHandler: !!O,
								});
						}
						get options() {
							return this.d;
						}
						set options(O) {
							(this.d = O),
								T.$updateCommentControllerFeatures(this.handle, {
									options: this.d,
								});
						}
						get activeComment() {
							return (0, k.$u2)(this.h, "activeComment"), this.e;
						}
						get activeCommentThread() {
							return (0, k.$u2)(this.h, "activeComment"), this.f?.value;
						}
						constructor(O, A, J, L) {
							(this.h = O),
								(this.i = A),
								(this.j = J),
								(this.k = L),
								(this.a = new Map()),
								T.$registerCommentController(
									this.handle,
									J,
									L,
									this.h.identifier.value,
								);
							const b = this;
							(this.value = Object.freeze({
								id: b.id,
								label: b.label,
								get options() {
									return b.options;
								},
								set options(F) {
									b.options = F;
								},
								get commentingRangeProvider() {
									return b.commentingRangeProvider;
								},
								set commentingRangeProvider(F) {
									b.commentingRangeProvider = F;
								},
								get reactionHandler() {
									return b.reactionHandler;
								},
								set reactionHandler(F) {
									b.reactionHandler = F;
								},
								get activeCommentThread() {
									return b.activeCommentThread;
								},
								createCommentThread(F, D, M) {
									return b.createCommentThread(F, D, M).value;
								},
								dispose: () => {
									b.dispose();
								},
							})),
								(this.g = []),
								this.g.push({
									dispose: () => {
										T.$unregisterCommentController(this.handle);
									},
								});
						}
						createCommentThread(O, A, J) {
							A === void 0 && (0, k.$u2)(this.h, "fileComments");
							const L = new u(
								this.id,
								this.handle,
								void 0,
								O,
								A,
								J,
								this.h,
								!1,
							);
							return this.a.set(L.handle, L), L;
						}
						$setActiveComment(O) {
							if (!O) {
								(this.e = void 0), (this.f = void 0);
								return;
							}
							const A = this.a.get(O.commentThreadHandle);
							A &&
								((this.e = O.uniqueIdInThread
									? A.getCommentByUniqueId(O.uniqueIdInThread)
									: void 0),
								(this.f = A));
						}
						$createCommentThreadTemplate(O, A, J) {
							const L = new u(
								this.id,
								this.handle,
								void 0,
								I.URI.revive(O),
								p.Range.to(A),
								[],
								this.h,
								!0,
								J,
							);
							return (
								(L.collapsibleState = l.CommentThreadCollapsibleState.Expanded),
								this.a.set(L.handle, L),
								L
							);
						}
						$updateCommentThreadTemplate(O, A) {
							const J = this.a.get(O);
							J && (J.range = p.Range.to(A));
						}
						$deleteCommentThread(O) {
							this.a.get(O)?.dispose(), this.a.delete(O);
						}
						getCommentThread(O) {
							return this.a.get(O);
						}
						dispose() {
							this.a.forEach((O) => {
								O.dispose();
							}),
								this.g.forEach((O) => O.dispose());
						}
					}
					function f(C, O, A, J) {
						let L = A.get(O);
						return (
							L || ((L = ++C.commentHandle), A.set(O, L)),
							O.state !== void 0 && (0, k.$u2)(J, "commentsDraftState"),
							O.reactions?.some((b) => b.reactors !== void 0) &&
								(0, k.$u2)(J, "commentReactor"),
							{
								mode: O.mode,
								contextValue: O.contextValue,
								uniqueIdInThread: L,
								body:
									typeof O.body == "string"
										? O.body
										: p.MarkdownString.from(O.body),
								userName: O.author.name,
								userIconPath: O.author.iconPath,
								label: O.label,
								commentReactions: O.reactions
									? O.reactions.map((b) => o(b))
									: void 0,
								state: O.state,
								timestamp: O.timestamp?.toJSON(),
							}
						);
					}
					function o(C) {
						return {
							label: C.label,
							iconPath: C.iconPath ? p.$i9(C.iconPath) : void 0,
							count: C.count,
							hasReacted: C.authorHasReacted,
							reactors:
								C.reactors &&
								C.reactors.length > 0 &&
								typeof C.reactors[0] != "string"
									? C.reactors.map((O) => O.name)
									: C.reactors,
						};
					}
					function w(C) {
						return {
							label: C.label || "",
							count: C.count || 0,
							iconPath: C.iconPath ? I.URI.revive(C.iconPath) : "",
							authorHasReacted: C.hasReacted || !1,
							reactors: C.reactors?.map((O) => ({ name: O })),
						};
					}
					function m(C) {
						if (C !== void 0)
							switch (C) {
								case y.CommentThreadCollapsibleState.Expanded:
									return l.CommentThreadCollapsibleState.Expanded;
								case y.CommentThreadCollapsibleState.Collapsed:
									return l.CommentThreadCollapsibleState.Collapsed;
							}
						return l.CommentThreadCollapsibleState.Collapsed;
					}
					function E(C) {
						let O;
						if (
							(typeof C == "object" ? (O = C.resolved) : (O = C), O !== void 0)
						)
							switch (O) {
								case y.CommentThreadState.Unresolved:
									return l.CommentThreadState.Unresolved;
								case y.CommentThreadState.Resolved:
									return l.CommentThreadState.Resolved;
							}
						return l.CommentThreadState.Unresolved;
					}
					function R(C) {
						let O;
						if ((typeof C == "object" && (O = C.applicability), O !== void 0))
							switch (O) {
								case y.CommentThreadApplicability.Current:
									return l.CommentThreadApplicability.Current;
								case y.CommentThreadApplicability.Outdated:
									return l.CommentThreadApplicability.Outdated;
							}
						return l.CommentThreadApplicability.Current;
					}
					return new a();
				}
			},
		),
		