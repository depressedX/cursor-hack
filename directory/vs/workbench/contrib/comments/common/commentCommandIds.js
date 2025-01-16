define(de[1238], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.CommentCommandId = void 0);
			var t;
			(function (i) {
				(i.Add = "workbench.action.addComment"),
					(i.NextThread = "editor.action.nextCommentThreadAction"),
					(i.PreviousThread = "editor.action.previousCommentThreadAction"),
					(i.NextRange = "editor.action.nextCommentingRange"),
					(i.PreviousRange = "editor.action.previousCommentingRange"),
					(i.ToggleCommenting = "workbench.action.toggleCommenting"),
					(i.Submit = "editor.action.submitComment"),
					(i.Hide = "workbench.action.hideComment"),
					(i.CollapseAll = "workbench.action.collapseAllComments"),
					(i.ExpandAll = "workbench.action.expandAllComments"),
					(i.ExpandUnresolved = "workbench.action.expandUnresolvedComments");
			})(t || (e.CommentCommandId = t = {}));
		}),
		define(
			de[1239],
			he([1, 0, 183, 3, 106, 1238]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$82b = void 0);
				class C {
					constructor(m, r, u, a, h) {
						(this.e = m),
							(this.f = r),
							(this.g = u),
							(this.h = a),
							(this.i = h),
							(this.a = []),
							(this.c = new i.$Zc()),
							(this.d = []);
					}
					setActions(m, r = !1) {
						this.c.clear(), this.a.forEach((h) => h.remove()), (this.a = []);
						const u = m.getActions({ shouldForwardArgs: !0 });
						let a = !r;
						for (const h of u) {
							const [, c] = h;
							this.d = c;
							for (const n of c) {
								let g = this.e.lookupKeybinding(n.id, this.f)?.getLabel();
								!g &&
									a &&
									(g = this.e
										.lookupKeybinding(E.CommentCommandId.Submit, this.f)
										?.getLabel());
								const p = g ? `${n.label} (${g})` : n.label,
									o = new t.$oob(this.g, {
										secondary: !a,
										title: p,
										...w.$lyb,
									});
								if (
									((a = !1),
									this.a.push(o.element),
									this.c.add(o),
									this.c.add(o.onDidClick(() => this.h(n))),
									(o.enabled = n.enabled),
									(o.label = n.label),
									this.i !== void 0 && this.a.length >= this.i)
								) {
									console.warn(
										"An extension has contributed more than the allowable number of actions to a comments menu.",
									);
									return;
								}
							}
						}
					}
					triggerDefaultAction() {
						if (this.d.length) {
							const m = this.d[0];
							if (m.enabled) return this.h(m);
						}
					}
					dispose() {
						this.c.dispose();
					}
				}
				e.$82b = C;
			},
		),
		define(
			de[3032],
			he([1, 0, 7, 3, 221, 1239, 39]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$v3b = void 0),
					(t = mt(t));
				let d = class extends i.$1c {
					constructor(r, u, a, h, c, n) {
						super(),
							(this.f = u),
							(this.g = a),
							(this.h = h),
							(this.j = c),
							(this.m = n),
							(this.a = t.$fhb(r, t.$(".comment-additional-actions"))),
							t.$fhb(this.a, t.$(".section-separator")),
							(this.b = t.$fhb(this.a, t.$(".button-bar"))),
							this.s(this.b);
					}
					n() {
						this.a?.classList.remove("hidden");
					}
					q() {
						this.a?.classList.add("hidden");
					}
					r(r) {
						const u = r.getActions({ shouldForwardArgs: !0 });
						for (const a of u) {
							const [, h] = a;
							for (const c of h) {
								if (c.enabled) {
									this.n();
									return;
								}
								for (const n of c.actions ?? [])
									if (n.enabled) {
										this.n();
										return;
									}
							}
						}
						this.q();
					}
					s(r) {
						const u = this.h.getCommentThreadAdditionalActions(this.g);
						this.D(u),
							this.D(
								u.onDidChange(() => {
									this.c.setActions(u, !0), this.r(u);
								}),
							),
							(this.c = new E.$82b(
								this.m,
								this.g,
								r,
								async (a) => {
									this.j?.(),
										a.run({
											thread: this.f,
											$mid: w.MarshalledId.CommentThreadInstance,
										});
								},
								4,
							)),
							this.D(this.c),
							this.c.setActions(u, !0),
							this.r(u);
					}
				};
				(e.$v3b = d), (e.$v3b = d = Ne([j(5, C.$uZ)], d));
			},
		),
		