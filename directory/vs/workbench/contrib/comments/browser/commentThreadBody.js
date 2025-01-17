import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../nls.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/languages.js';
import '../../../../base/common/event.js';
import './commentService.js';
import '../../../../base/browser/keyboardEvent.js';
import '../../../../base/common/keyCodes.js';
import './commentNode.js';
import '../../../../editor/browser/widget/markdownRenderer/browser/markdownRenderer.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../editor/common/languages/language.js';
define(
			de[3764],
			he([1, 0, 7, 4, 3, 74, 6, 447, 114, 27, 3763, 251, 41, 61]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$t3b = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(E = mt(E));
				let n = class extends w.$1c {
					get length() {
						return this.r.comments ? this.r.comments.length : 0;
					}
					get activeComment() {
						return this.b.filter((p) => p.isEditing)[0];
					}
					constructor(p, o, f, b, s, l, y, $, v, S, I, T) {
						super(),
							(this.n = p),
							(this.owner = o),
							(this.parentResourceUri = f),
							(this.container = b),
							(this.q = s),
							(this.r = l),
							(this.s = y),
							(this.t = $),
							(this.u = v),
							(this.w = S),
							(this.y = I),
							(this.z = T),
							(this.b = []),
							(this.g = void 0),
							(this.h = new C.$re()),
							(this.onDidResize = this.h.event),
							(this.j = new w.$0c()),
							this.D(
								t.$0fb(b, t.$$gb.FOCUS_IN, (P) => {
									this.w.setActiveEditingCommentThread(this.r);
								}),
							),
							(this.m = this.D(new a.$Qzb(this.q, this.z, this.y)));
					}
					focus() {
						this.a.focus();
					}
					ensureFocusIntoNewEditingComment() {
						this.b.length === 1 &&
							this.b[0].isEditing &&
							this.b[0].setFocus(!0);
					}
					async display() {
						if (
							((this.a = t.$fhb(this.container, t.$("div.comments-container"))),
							this.a.setAttribute("role", "presentation"),
							(this.a.tabIndex = 0),
							this.F(),
							this.D(
								t.$0fb(this.a, t.$$gb.KEY_DOWN, (p) => {
									const o = new m.$7fb(p);
									if (
										(o.equals(r.KeyCode.UpArrow) ||
											o.equals(r.KeyCode.DownArrow)) &&
										(!this.g || !this.b[this.g].isEditing)
									) {
										const f = (b) => {
											if (this.g === void 0 && b >= 0) return 0;
											if (this.g === void 0 && b < 0) return this.b.length - 1;
											const s = this.g + b;
											return Math.min(Math.max(0, s), this.b.length - 1);
										};
										this.G(o.equals(r.KeyCode.UpArrow) ? f(-1) : f(1));
									}
								}),
							),
							this.j.clearAndDisposeAll(),
							(this.b = []),
							this.r.comments)
						)
							for (const p of this.r.comments) {
								const o = this.H(p);
								this.b.push(o),
									this.a.appendChild(o.domNode),
									p.mode === E.CommentMode.Editing &&
										(await o.switchToEditMode());
							}
						(this.f = new MutationObserver(this.C.bind(this))),
							this.f.observe(this.container, {
								attributes: !0,
								childList: !0,
								characterData: !0,
								subtree: !0,
							});
					}
					C() {
						const p = t.$ogb(this.container);
						this.h.fire(p);
					}
					getDimensions() {
						return t.$ogb(this.container);
					}
					layout(p) {
						this.b.forEach((o) => {
							o.layout(p);
						});
					}
					getPendingEdits() {
						const p = {};
						return (
							this.b.forEach((o) => {
								if (o.isEditing) {
									const f = o.getPendingEdit();
									f && (p[o.comment.uniqueIdInThread] = f);
								}
							}),
							p
						);
					}
					getCommentCoords(p) {
						const o = this.b.filter((f) => f.comment.uniqueIdInThread === p);
						if (o && o.length) {
							const f = t.$tgb(this.b[0].domNode),
								b = t.$tgb(o[0].domNode);
							return { thread: f, comment: b };
						}
					}
					async updateCommentThread(p, o) {
						const f = this.b.length,
							b = p.comments ? p.comments.length : 0,
							s = [],
							l = [];
						for (let S = 0; S < f; S++) {
							const I = this.b[S].comment,
								T = p.comments
									? p.comments.filter(
											(P) => P.uniqueIdInThread === I.uniqueIdInThread,
										)
									: [];
							T.length
								? this.b[S].update(T[0])
								: (l.push(S), s.push(this.b[S]));
						}
						for (let S = s.length - 1; S >= 0; S--) {
							const I = s[S];
							this.j.deleteAndDispose(I),
								this.b.splice(l[S], 1),
								I.domNode.remove();
						}
						let y = null;
						const $ = [],
							v = [];
						for (let S = b - 1; S >= 0; S--) {
							const I = p.comments[S],
								T = this.b.filter(
									(P) => P.comment.uniqueIdInThread === I.uniqueIdInThread,
								);
							if (T.length) (y = T[0].domNode), $.unshift(T[0]);
							else {
								const P = this.H(I);
								$.unshift(P),
									y
										? (this.a.insertBefore(P.domNode, y), (y = P.domNode))
										: (this.a.appendChild(P.domNode), (y = P.domNode)),
									I.mode === E.CommentMode.Editing &&
										(await P.switchToEditMode(), v.push(P));
							}
						}
						if (((this.r = p), (this.b = $), v.length)) {
							const S = this.b.indexOf(v[v.length - 1]);
							this.g = S;
						}
						this.F(), o || this.G(this.g);
					}
					F() {
						this.r.isDocumentCommentThread()
							? this.r.range
								? (this.a.ariaLabel = i.localize(
										5093,
										null,
										this.r.comments?.length,
										this.r.range.startLineNumber,
										this.r.range.endLineNumber,
										this.r.label,
									))
								: (this.a.ariaLabel = i.localize(
										5094,
										null,
										this.r.comments?.length,
										this.r.label,
									))
							: (this.a.ariaLabel = i.localize(
									5095,
									null,
									this.r.comments?.length,
									this.r.label,
								));
					}
					G(p) {
						this.g !== void 0 && this.b[this.g]?.setFocus(!1),
							this.b.length === 0 || p === void 0
								? (this.g = void 0)
								: ((this.g = Math.min(p, this.b.length - 1)),
									this.b[this.g].setFocus(!0));
					}
					H(p) {
						const o = this.t.createInstance(
								u.$s3b,
								this.n,
								this.r,
								p,
								this.s ? this.s[p.uniqueIdInThread] : void 0,
								this.owner,
								this.parentResourceUri,
								this.u,
								this.m,
							),
							f = new w.$Zc();
						return (
							f.add(
								o.onDidClick((b) =>
									this.G(
										this.b.findIndex(
											(s) =>
												s.comment.uniqueIdInThread ===
												b.comment.uniqueIdInThread,
										),
									),
								),
							),
							f.add(o),
							this.j.set(o, f),
							o
						);
					}
					dispose() {
						super.dispose(),
							this.f && (this.f.disconnect(), (this.f = null)),
							this.j.dispose();
					}
				};
				(e.$t3b = n),
					(e.$t3b = n = Ne([j(9, d.$62b), j(10, h.$7rb), j(11, c.$nM)], n));
			},
		),
		