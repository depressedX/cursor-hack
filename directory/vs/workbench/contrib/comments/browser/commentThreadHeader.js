define(
			de[3029],
			he([1, 0, 7, 105, 50, 14, 3, 37, 4, 92, 79, 26, 221, 168]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$u3b = void 0),
					(t = mt(t)),
					(d = mt(d)),
					(m = mt(m));
				const n = (0, u.$$O)(
						"review-comment-collapse",
						E.$ak.chevronUp,
						m.localize(5096, null),
					),
					g = "expand-review-action " + a.ThemeIcon.asClassName(n),
					p = "expand-review-action " + a.ThemeIcon.asClassName(E.$ak.trashcan);
				function o(b) {
					return !!b && b.length > 0;
				}
				class f extends C.$1c {
					constructor(s, l, y, $, v, S, I) {
						super(),
							(this.g = l),
							(this.h = y),
							(this.j = $),
							(this.m = v),
							(this.n = S),
							(this.q = I),
							(this.a = t.$(".head")),
							s.appendChild(this.a),
							this.D((0, C.$Yc)(() => this.a.remove())),
							this.s();
					}
					s() {
						const s = t.$fhb(this.a, t.$(".review-title"));
						(this.b = t.$fhb(s, t.$("span.filename"))),
							this.createThreadLabel();
						const l = t.$fhb(this.a, t.$(".review-actions"));
						(this.c = new i.$eib(l, {
							actionViewItemProvider: r.$Pyb.bind(void 0, this.n),
						})),
							this.D(this.c);
						const y = o(this.j.comments) ? g : p;
						if (
							((this.f = new w.$rj(
								"review.expand",
								m.localize(5097, null),
								y,
								!0,
								() => this.g.collapse(),
							)),
							!o(this.j.comments))
						) {
							const v = this.D(new C.$2c());
							v.value = this.j.onDidChangeComments(() => {
								o(this.j.comments) && ((this.f.class = g), v.clear());
							});
						}
						const $ = this.h.getCommentThreadTitleActions(this.m);
						this.D($),
							this.t($),
							this.D($),
							this.D(
								$.onDidChange((v) => {
									this.t($);
								}),
							),
							this.D(t.$0fb(this.a, t.$$gb.CONTEXT_MENU, (v) => this.u(v))),
							(this.c.context = this.j);
					}
					t(s) {
						const l = s
							.getActions({ shouldForwardArgs: !0 })
							.reduce((y, [, $]) => [...y, ...$], []);
						this.c.clear(),
							this.c.push([...l, this.f], { label: !1, icon: !0 });
					}
					updateCommentThread(s) {
						(this.j = s), (this.c.context = this.j), this.createThreadLabel();
					}
					createThreadLabel() {
						let s;
						(s = this.j.label),
							s === void 0 &&
								((this.j.comments && this.j.comments.length) ||
									(s = m.localize(5098, null))),
							s &&
								((this.b.textContent = d.$nf(s)),
								this.b.setAttribute("aria-label", s));
					}
					updateHeight(s) {
						(this.a.style.height = `${s}px`),
							(this.a.style.lineHeight = this.a.style.height);
					}
					u(s) {
						const l = this.h
							.getCommentThreadTitleContextActions(this.m)
							.getActions({ shouldForwardArgs: !0 })
							.map(($) => $[1])
							.flat();
						if (!l.length) return;
						const y = new c.$2fb(t.getWindow(this.a), s);
						this.q.showContextMenu({
							getAnchor: () => y,
							getActions: () => l,
							actionRunner: new w.$sj(),
							getActionsContext: () => ({
								commentControlHandle: this.j.controllerHandle,
								commentThreadHandle: this.j.commentThreadHandle,
								$mid: h.MarshalledId.CommentThread,
							}),
						});
					}
				}
				e.$u3b = f;
			},
		),
		