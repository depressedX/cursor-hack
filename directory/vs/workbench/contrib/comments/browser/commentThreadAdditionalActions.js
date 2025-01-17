import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/marshallingIds.js';
import './commentFormActions.js';
import '../../../../platform/keybinding/common/keybinding.js';
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
		