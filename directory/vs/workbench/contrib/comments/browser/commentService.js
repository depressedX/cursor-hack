import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/core/range.js';
import '../../../../base/common/cancellation.js';
import './commentMenus.js';
import '../../../services/layout/browser/layoutService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../common/commentsConfiguration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/storage/common/storage.js';
import '../common/commentContextKeys.js';
import '../../../../platform/log/common/log.js';
import './commentsModel.js';
import '../../../../editor/common/services/model.js';
define(
			de[447],
			he([1, 0, 5, 6, 3, 17, 33, 3028, 96, 10, 791, 8, 21, 505, 34, 983, 67]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$72b = e.$62b = void 0),
					(e.$62b = (0, t.$Mi)("commentService"));
				const o = "comments.continueOnComments";
				let f = class extends w.$1c {
					constructor(s, l, y, $, v, S, I) {
						super(),
							(this.H = s),
							(this.I = l),
							(this.J = y),
							(this.L = v),
							(this.M = S),
							(this.N = I),
							(this.a = this.D(new i.$re())),
							(this.onDidSetDataProvider = this.a.event),
							(this.b = this.D(new i.$re())),
							(this.onDidDeleteDataProvider = this.b.event),
							(this.c = this.D(new i.$re())),
							(this.onDidSetResourceCommentInfos = this.c.event),
							(this.f = this.D(new i.$re())),
							(this.onDidSetAllCommentThreads = this.f.event),
							(this.g = this.D(new i.$re())),
							(this.onDidUpdateCommentThreads = this.g.event),
							(this.h = this.D(new i.$re())),
							(this.onDidUpdateNotebookCommentThreads = this.h.event),
							(this.j = this.D(new i.$re())),
							(this.onDidUpdateCommentingRanges = this.j.event),
							(this.m = this.D(new i.$re())),
							(this.onDidChangeActiveEditingCommentThread = this.m.event),
							(this.n = this.D(new i.$re())),
							(this.onDidChangeCurrentCommentThread = this.n.event),
							(this.q = this.D(new i.$re())),
							(this.onDidChangeCommentingEnabled = this.q.event),
							(this.r = this.D(new i.$re())),
							(this.onDidChangeActiveCommentingRange = this.r.event),
							(this.s = new Map()),
							(this.t = new Map()),
							(this.u = !0),
							(this.y = new Map()),
							(this.z = new Set()),
							(this.C = this.D(new g.$52b())),
							(this.commentsModel = this.C),
							(this.F = new Set()),
							(this.G = new Set()),
							this.P(),
							this.Q(),
							(this.w = c.CommentContextKeys.WorkspaceHasCommenting.bindTo($));
						const T = this.D(new w.$Zc()),
							P = i.Event.debounce(
								this.L.onDidChangeValue(h.StorageScope.WORKSPACE, o, T),
								(k, L) => (k?.external ? k : L),
								500,
							);
						T.add(
							P((k) => {
								if (!k.external) return;
								const L = this.L.getObject(o, h.StorageScope.WORKSPACE);
								if (!L) return;
								this.M.debug(
									`Comments: URIs of continue on comments from storage ${L.map((M) => M.uri.toString()).join(", ")}.`,
								);
								const D = this.Y(L, this.y);
								for (const M of D) {
									const N = this.s.get(M);
									if (!N) continue;
									const A = {
										uniqueOwner: M,
										owner: N.owner,
										ownerLabel: N.label,
										pending: this.y.get(M) || [],
										added: [],
										removed: [],
										changed: [],
									};
									this.W(A);
								}
							}),
						),
							this.D(
								v.onWillSaveState(() => {
									const k = new Map();
									for (const L of this.z) {
										const D = L.provideContinueOnComments();
										this.Y(D, k);
									}
									this.X(k);
								}),
							),
							this.D(
								this.N.onModelAdded((k) => {
									this.F.has(k.uri.toString()) ||
										this.getDocumentComments(k.uri);
								}),
							);
					}
					O(s, l) {
						for (const y of l)
							y &&
								(y.commentingRanges.ranges.length > 0 ||
									y.threads.length > 0) &&
								this.F.add(s.toString());
					}
					P() {
						(this.u = this.R),
							this.D(
								this.J.onDidChangeConfiguration((s) => {
									s.affectsConfiguration("comments.visible") &&
										this.enableCommenting(this.R);
								}),
							);
					}
					Q() {
						let s = this.u;
						this.D(
							this.I.onDidChangeZenMode((l) => {
								l
									? ((s = this.u), this.enableCommenting(!1))
									: this.enableCommenting(s);
							}),
						);
					}
					get R() {
						return !!this.J.getValue(u.$32b)?.visible;
					}
					get isCommentingEnabled() {
						return this.u;
					}
					enableCommenting(s) {
						s !== this.u && ((this.u = s), this.q.fire(s));
					}
					setCurrentCommentThread(s) {
						this.n.fire(s);
					}
					setActiveEditingCommentThread(s) {
						this.m.fire(s);
					}
					async setActiveCommentAndThread(s, l) {
						const y = this.s.get(s);
						if (y)
							return (
								y !== this.S &&
									(await this.S?.setActiveCommentAndThread(void 0)),
								(this.S = y),
								y.setActiveCommentAndThread(l)
							);
					}
					setDocumentComments(s, l) {
						this.c.fire({ resource: s, commentInfos: l });
					}
					U(s, l, y, $) {
						this.C.setCommentThreads(s, l, y, $),
							this.f.fire({ ownerId: s, ownerLabel: y, commentThreads: $ });
					}
					W(s) {
						this.C.updateCommentThreads(s), this.g.fire(s);
					}
					setWorkspaceComments(s, l) {
						l.length && this.w.set(!0);
						const y = this.s.get(s);
						y && this.U(s, y.owner, y.label, l);
					}
					removeWorkspaceComments(s) {
						const l = this.s.get(s);
						l && this.U(s, l.owner, l.label, []);
					}
					registerCommentController(s, l) {
						this.s.set(s, l), this.a.fire();
					}
					unregisterCommentController(s) {
						s ? this.s.delete(s) : this.s.clear(),
							this.C.deleteCommentsByOwner(s),
							this.b.fire(s);
					}
					getCommentController(s) {
						return this.s.get(s);
					}
					async createCommentThreadTemplate(s, l, y, $) {
						const v = this.s.get(s);
						if (v) return v.createCommentThreadTemplate(l, y, $);
					}
					async updateCommentThreadTemplate(s, l, y) {
						const $ = this.s.get(s);
						$ && (await $.updateCommentThreadTemplate(l, y));
					}
					disposeCommentThread(s, l) {
						this.getCommentController(s)?.deleteCommentThreadMain(l);
					}
					getCommentMenus(s) {
						if (this.t.get(s)) return this.t.get(s);
						const l = this.H.createInstance(d.$22b);
						return this.t.set(s, l), l;
					}
					updateComments(s, l) {
						const y = this.s.get(s);
						if (y) {
							const $ = Object.assign({}, l, {
								uniqueOwner: s,
								ownerLabel: y.label,
								owner: y.owner,
							});
							this.W($);
						}
					}
					updateNotebookComments(s, l) {
						const y = Object.assign({}, l, { uniqueOwner: s });
						this.h.fire(y);
					}
					updateCommentingRanges(s, l) {
						if (l?.schemes && l.schemes.length > 0)
							for (const y of l.schemes) this.G.add(y);
						this.w.set(!0), this.j.fire({ uniqueOwner: s });
					}
					async toggleReaction(s, l, y, $, v) {
						const S = this.s.get(s);
						if (S)
							return S.toggleReaction(l, y, $, v, C.CancellationToken.None);
						throw new Error("Not supported");
					}
					hasReactionHandler(s) {
						const l = this.s.get(s);
						return l ? !!l.features.reactionHandler : !1;
					}
					async getDocumentComments(s) {
						const l = [];
						for (const $ of this.s.values())
							l.push(
								$.getDocumentComments(s, C.CancellationToken.None)
									.then((v) => {
										for (const I of v.threads)
											I.comments?.length === 0 &&
												I.range &&
												this.removeContinueOnComment({
													range: I.range,
													uri: s,
													uniqueOwner: v.uniqueOwner,
												});
										const S = this.y.get(v.uniqueOwner);
										return (
											(v.pendingCommentThreads = S?.filter(
												(I) => I.uri.toString() === s.toString(),
											)),
											v
										);
									})
									.catch((v) => null),
							);
						const y = await Promise.all(l);
						return this.O(s, y), y;
					}
					async getNotebookComments(s) {
						const l = [];
						return (
							this.s.forEach((y) => {
								l.push(
									y
										.getNotebookComments(s, C.CancellationToken.None)
										.catch(($) => null),
								);
							}),
							Promise.all(l)
						);
					}
					registerContinueOnCommentProvider(s) {
						return (
							this.z.add(s),
							{
								dispose: () => {
									this.z.delete(s);
								},
							}
						);
					}
					X(s) {
						const l = [];
						for (const y of s.values()) l.push(...y);
						this.M.debug(
							`Comments: URIs of continue on comments to add to storage ${l.map((y) => y.uri.toString()).join(", ")}.`,
						),
							this.L.store(
								o,
								l,
								h.StorageScope.WORKSPACE,
								h.StorageTarget.USER,
							);
					}
					removeContinueOnComment(s) {
						const l = this.y.get(s.uniqueOwner);
						if (l) {
							const y = l.findIndex(
								($) =>
									$.uri.toString() === s.uri.toString() &&
									E.$iL.equalsRange($.range, s.range) &&
									(s.isReply === void 0 || $.isReply === s.isReply),
							);
							if (y > -1) return l.splice(y, 1)[0];
						}
					}
					Y(s, l) {
						const y = new Set();
						for (const $ of s)
							if (!l.has($.uniqueOwner))
								l.set($.uniqueOwner, [$]), y.add($.uniqueOwner);
							else {
								const v = l.get($.uniqueOwner);
								v.every(
									(S) =>
										S.uri.toString() !== $.uri.toString() ||
										!E.$iL.equalsRange(S.range, $.range),
								) && (v.push($), y.add($.uniqueOwner));
							}
						return y;
					}
					resourceHasCommentingRanges(s) {
						return this.G.has(s.scheme) || this.F.has(s.toString());
					}
				};
				(e.$72b = f),
					(e.$72b = f =
						Ne(
							[
								j(0, t.$Li),
								j(1, m.$mEb),
								j(2, r.$gj),
								j(3, a.$6j),
								j(4, h.$lq),
								j(5, n.$ik),
								j(6, p.$QO),
							],
							f,
						));
			},
		),
		