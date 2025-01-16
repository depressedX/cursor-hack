define(de[1240], he([1, 0]), function (ce, e) {
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
		define(
			de[983],
			he([1, 0, 24, 9, 4, 1240, 3, 94]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$52b = void 0),
					(e.$42b = m);
				function m(u) {
					return (
						!!u.comments &&
						!!u.comments.length &&
						u.comments.some((a) =>
							(0, d.$el)(a.body) ? a.body.value.length > 0 : a.body.length > 0,
						)
					);
				}
				class r extends C.$1c {
					get resourceCommentThreads() {
						return this.c;
					}
					constructor() {
						super(), (this.c = []), (this.commentThreadsMap = new Map());
					}
					f() {
						const a = this.commentThreadsMap.size > 1;
						this.c = [...this.commentThreadsMap.values()]
							.map((h) =>
								h.resourceWithCommentThreads
									.map((c) => ((c.ownerLabel = a ? h.ownerLabel : void 0), c))
									.flat(),
							)
							.flat();
					}
					setCommentThreads(a, h, c, n) {
						this.commentThreadsMap.set(a, {
							ownerLabel: c,
							resourceWithCommentThreads: this.g(a, h, n),
						}),
							this.f();
					}
					deleteCommentsByOwner(a) {
						if (a) {
							const h = this.commentThreadsMap.get(a);
							this.commentThreadsMap.set(a, {
								ownerLabel: h?.ownerLabel,
								resourceWithCommentThreads: [],
							});
						} else this.commentThreadsMap.clear();
						this.f();
					}
					updateCommentThreads(a) {
						const {
								uniqueOwner: h,
								owner: c,
								ownerLabel: n,
								removed: g,
								changed: p,
								added: o,
							} = a,
							f =
								this.commentThreadsMap.get(h)?.resourceWithCommentThreads || [];
						return (
							g.forEach((b) => {
								const s = f.findIndex(($) => $.id === b.resource),
									l = s >= 0 ? f[s] : void 0,
									y =
										l?.commentThreads.findIndex(
											($) => $.threadId === b.threadId,
										) ?? 0;
								y >= 0 && l?.commentThreads.splice(y, 1),
									l?.commentThreads.length === 0 && f.splice(s, 1);
							}),
							p.forEach((b) => {
								const s = f.findIndex(($) => $.id === b.resource),
									l = s >= 0 ? f[s] : void 0;
								if (!l) return;
								const y = l.commentThreads.findIndex(
									($) => $.threadId === b.threadId,
								);
								y >= 0
									? (l.commentThreads[y] = E.$12b.createCommentNode(
											h,
											c,
											i.URI.parse(l.id),
											b,
										))
									: b.comments &&
										b.comments.length &&
										l.commentThreads.push(
											E.$12b.createCommentNode(h, c, i.URI.parse(l.id), b),
										);
							}),
							o.forEach((b) => {
								const s = f.filter((l) => l.resource.toString() === b.resource);
								if (s.length) {
									const l = s[0];
									b.comments &&
										b.comments.length &&
										l.commentThreads.push(
											E.$12b.createCommentNode(h, c, l.resource, b),
										);
								} else f.push(new E.$12b(h, c, i.URI.parse(b.resource), [b]));
							}),
							this.commentThreadsMap.set(h, {
								ownerLabel: n,
								resourceWithCommentThreads: f,
							}),
							this.f(),
							g.length > 0 || p.length > 0 || o.length > 0
						);
					}
					hasCommentThreads() {
						return (
							!!this.c.length &&
							this.c.some(
								(a) =>
									a.commentThreads.length > 0 &&
									a.commentThreads.some((h) => m(h.thread)),
							)
						);
					}
					getMessage() {
						return this.c.length ? "" : (0, w.localize)(5053, null);
					}
					g(a, h, c) {
						const n = [],
							g = new Map();
						for (const p of (0, t.$Db)(c, r.h))
							g.set(
								p[0].resource,
								new E.$12b(a, h, i.URI.parse(p[0].resource), p),
							);
						return (
							g.forEach((p, o, f) => {
								n.push(p);
							}),
							n
						);
					}
					static h(a, h) {
						const c = a.resource.toString(),
							n = h.resource.toString();
						return c < n ? -1 : c > n ? 1 : 0;
					}
				}
				e.$52b = r;
			},
		),
		