import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1240], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$12b = e.$Z2b = void 0);
			class t {
				constructor(E, C, d, m, r) {
					(this.uniqueOwner = E),
						(this.owner = C),
						(this.resource = d),
						(this.comment = m),
						(this.thread = r),
						(this.isRoot = !1),
						(this.replies = []),
						(this.threadId = r.threadId),
						(this.range = r.range),
						(this.threadState = r.state),
						(this.threadRelevance = r.applicability),
						(this.contextValue = r.contextValue),
						(this.controllerHandle = r.controllerHandle),
						(this.threadHandle = r.commentThreadHandle);
				}
				hasReply() {
					return this.replies && this.replies.length !== 0;
				}
				get lastUpdatedAt() {
					if (this.a === void 0) {
						let E = this.comment.timestamp || "";
						if (this.replies.length) {
							const d = this.replies[this.replies.length - 1].lastUpdatedAt;
							d > E && (E = d);
						}
						this.a = E;
					}
					return this.a;
				}
			}
			e.$Z2b = t;
			class i {
				constructor(E, C, d, m) {
					(this.uniqueOwner = E),
						(this.owner = C),
						(this.id = d.toString()),
						(this.resource = d),
						(this.commentThreads = m
							.filter((r) => r.comments && r.comments.length)
							.map((r) => i.createCommentNode(E, C, d, r)));
				}
				static createCommentNode(E, C, d, m) {
					const { comments: r } = m,
						u = r.map((a) => new t(E, C, d, a, m));
					return (
						u.length > 1 && (u[0].replies = u.slice(1, u.length)),
						(u[0].isRoot = !0),
						u[0]
					);
				}
				get lastUpdatedAt() {
					if (this.a === void 0) {
						let E = "";
						if (!this.commentThreads.length) return E;
						for (const C of this.commentThreads) {
							const d = C.lastUpdatedAt;
							d && d > E && (E = d);
						}
						this.a = E;
					}
					return this.a;
				}
			}
			e.$12b = i;
		}),
		