import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/common/languages.js';
import './commentReply.js';
import './commentService.js';
import './commentThreadBody.js';
import './commentThreadHeader.js';
import './commentThreadAdditionalActions.js';
import '../common/commentContextKeys.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../common/theme.js';
import '../../../../editor/common/core/range.js';
import './commentColors.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../browser/actions/widgetNavigationCommands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../common/commentsConfiguration.js';
import '../../../../nls.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../accessibility/common/accessibilityCommands.js';
import '../../../../base/browser/event.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../css!vs/workbench/contrib/comments/browser/media/review.js';
define(
			de[1899],
			he([
				1, 0, 7, 6, 3, 74, 1323, 447, 3764, 3029, 3032, 505, 51, 123, 17, 1237,
				49, 518, 10, 791, 4, 130, 39, 417, 265, 56, 1143,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
			) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$F3b = e.$E3b = void 0),
					(t = mt(t)),
					(E = mt(E)),
					(e.$E3b = "commenteditordecoration");
				let I = class extends w.$1c {
					get commentThread() {
						return this.z;
					}
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q) {
						super(),
							(this.container = P),
							(this._parentEditor = k),
							(this.t = L),
							(this.u = D),
							(this.w = M),
							(this.y = N),
							(this.z = A),
							(this.C = R),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.I = z),
							(this.J = F),
							(this.L = H),
							(this.M = q),
							(this.h = []),
							(this.r = new i.$re()),
							(this.onDidResize = this.r.event),
							(this.j = a.CommentContextKeys.commentThreadIsEmpty.bindTo(
								this.w,
							)),
							this.j.set(!A.comments || !A.comments.length),
							(this.q = a.CommentContextKeys.commentFocused.bindTo(this.w)),
							(this.g = this.J.getCommentMenus(this.t)),
							this.D(
								(this.a = new r.$u3b(
									P,
									{ collapse: this.collapse.bind(this) },
									this.g,
									this.z,
									this.w,
									this.y,
									x,
								)),
							),
							this.a.updateCommentThread(this.z);
						const V = t.$(".body");
						P.appendChild(V), this.D((0, w.$Yc)(() => V.remove()));
						const G = this.D(t.$dhb(V));
						this.D(
							(0, o.$D3b)({
								name: "commentThreadWidget",
								focusNotifiers: [G],
								focusNextWidget: () => {
									this.c?.isCommentEditorFocused() ||
										this.c?.expandReplyAreaAndFocusCommentEditor();
								},
								focusPreviousWidget: () => {
									this.c?.isCommentEditorFocused() &&
										this.z.comments?.length &&
										this.b.focus();
								},
							}),
						),
							this.D(G.onDidFocus(() => this.q.set(!0))),
							this.D(G.onDidBlur(() => this.q.reset())),
							this.D(
								this.L.onDidChangeConfiguration((W) => {
									W.affectsConfiguration(
										l.AccessibilityVerbositySettingId.Comments,
									) && this.N();
								}),
							),
							(this.b = this.y.createInstance(
								m.$t3b,
								this._parentEditor,
								this.t,
								this.u,
								V,
								this.G,
								this.z,
								this.F,
								this.y,
								this,
							)),
							this.D(this.b),
							this.N(),
							(this.m = t.$Rgb(this.container)),
							(this.n = a.CommentContextKeys.commentThreadContext.bindTo(
								this.w,
							)),
							this.n.set(A.contextValue);
						const K = a.CommentContextKeys.commentControllerContext.bindTo(
								this.w,
							),
							J = this.J.getCommentController(this.t);
						J?.contextValue && K.set(J.contextValue),
							this.P(),
							this.D(
								new v.$mib(this.container, "keydown").event((W) => {
									t.$8gb(W) &&
										W.key === "Escape" &&
										(n.$iL.isIRange(this.commentThread.range) &&
											(0, S.$0sb)(this._parentEditor) &&
											this._parentEditor.setSelection(this.commentThread.range),
										this.collapse());
								}),
							);
					}
					N() {
						let P = (0, s.localize)(5099, null),
							k;
						this.L.getValue(l.AccessibilityVerbositySettingId.Comments) &&
							(k =
								this.M.lookupKeybinding(
									$.AccessibilityCommandId.OpenAccessibilityHelp,
									this.w,
								)?.getLabel() ?? void 0),
							k
								? (P = (0, s.localize)(5100, null, P, k))
								: (P = (0, s.localize)(5101, null, P)),
							(this.b.container.ariaLabel = P);
					}
					O(P, k) {
						P || k
							? this.J.setCurrentCommentThread(this.commentThread)
							: this.J.setCurrentCommentThread(void 0);
					}
					P() {
						let P = !1,
							k = !1;
						this.D(
							t.$0fb(
								this.container,
								t.$$gb.MOUSE_ENTER,
								(L) => {
									L.toElement === this.container && ((P = !0), this.O(P, k));
								},
								!0,
							),
						),
							this.D(
								t.$0fb(
									this.container,
									t.$$gb.MOUSE_LEAVE,
									(L) => {
										L.fromElement === this.container &&
											((P = !1), this.O(P, k));
									},
									!0,
								),
							),
							this.D(
								t.$0fb(
									this.container,
									t.$$gb.FOCUS_IN,
									() => {
										(k = !0), this.O(P, k);
									},
									!0,
								),
							),
							this.D(
								t.$0fb(
									this.container,
									t.$$gb.FOCUS_OUT,
									() => {
										(k = !1), this.O(P, k);
									},
									!0,
								),
							);
					}
					async updateCommentThread(P) {
						const k =
							this.z.collapsibleState ===
								E.CommentThreadCollapsibleState.Expanded &&
							this.s === E.CommentThreadState.Unresolved &&
							P.state === E.CommentThreadState.Resolved;
						(this.s = P.state),
							(this.z = P),
							(0, w.$Vc)(this.h),
							(this.h = []),
							this.R(),
							await this.b.updateCommentThread(
								P,
								this.c?.isCommentEditorFocused() ?? !1,
							),
							this.j.set(!this.b.length),
							this.a.updateCommentThread(P),
							this.c?.updateCommentThread(P),
							this.z.contextValue
								? this.n.set(this.z.contextValue)
								: this.n.reset(),
							k && this.L.getValue(b.$32b).collapseOnResolve && this.collapse();
					}
					async display(P, k) {
						const L = Math.max(23, Math.ceil(P * 1.2));
						this.a.updateHeight(L),
							await this.b.display(),
							this.z.canReply && this.S(k),
							this.U(),
							this.D(
								this.b.onDidResize((D) => {
									this.Q(D);
								}),
							),
							this.z.canReply && this.c && this.c.focusIfNeeded(),
							this.R();
					}
					Q(P) {
						this.b.layout(), this.r.fire(P);
					}
					dispose() {
						super.dispose(), (0, w.$Vc)(this.h), this.O(!1, !1);
					}
					R() {
						this.h.push(
							this.z.onDidChangeCanReply(() => {
								this.c
									? this.c.updateCanReply()
									: this.z.canReply && this.S(!1);
							}),
						),
							this.h.push(
								this.z.onDidChangeComments(async (P) => {
									await this.updateCommentThread(this.z);
								}),
							),
							this.h.push(
								this.z.onDidChangeLabel((P) => {
									this.a.createThreadLabel();
								}),
							);
					}
					S(P) {
						(this.c = this.y.createInstance(
							C.$n3b,
							this.t,
							this.b.container,
							this._parentEditor,
							this.z,
							this.y,
							this.w,
							this.g,
							this.H,
							this.C,
							this,
							P,
							this.I.actionRunner,
						)),
							this.D(this.c);
					}
					U() {
						(this.f = this.y.createInstance(
							u.$v3b,
							this.b.container,
							this.z,
							this.w,
							this.g,
							this.I.actionRunner,
						)),
							this.D(this.f);
					}
					getCommentCoords(P) {
						return this.b.getCommentCoords(P);
					}
					getPendingEdits() {
						return this.b.getPendingEdits();
					}
					getPendingComment() {
						if (this.c) return this.c.getPendingComment();
					}
					setPendingComment(P) {
						(this.C = P), this.c?.setPendingComment(P);
					}
					getDimensions() {
						return this.b.getDimensions();
					}
					layout(P) {
						this.b.layout(P), P !== void 0 && this.c?.layout(P);
					}
					ensureFocusIntoNewEditingComment() {
						this.b.ensureFocusIntoNewEditingComment();
					}
					focusCommentEditor() {
						this.c?.expandReplyAreaAndFocusCommentEditor();
					}
					focus() {
						this.b.focus();
					}
					async submitComment() {
						const P = this.b.activeComment;
						if (P) return P.submitComment();
						if ((this.c?.getPendingComment()?.length ?? 0) > 0)
							return this.c?.submitComment();
					}
					collapse() {
						this.I.collapse();
					}
					applyTheme(P, k) {
						const L = [];
						L.push(
							`.monaco-editor .review-widget > .body { border-top: 1px solid var(${g.$y3b}) }`,
						),
							L.push(
								`.monaco-editor .review-widget > .head { background-color: var(${g.$A3b}) }`,
							);
						const D = P.getColor(h.$RP);
						D && L.push(`.review-widget .body .comment-body a { color: ${D} }`);
						const M = P.getColor(h.$SP);
						M &&
							L.push(
								`.review-widget .body .comment-body a:hover, a:active { color: ${M} }`,
							);
						const N = P.getColor(h.$NP);
						N &&
							(L.push(
								`.review-widget .body .comment-body a:focus { outline: 1px solid ${N}; }`,
							),
							L.push(
								`.review-widget .body .monaco-editor.focused { outline: 1px solid ${N}; }`,
							));
						const A = P.getColor(h.$WP);
						A &&
							L.push(
								`.review-widget .body .review-comment blockquote { background: ${A}; }`,
							);
						const R = P.getColor(h.$XP);
						R &&
							L.push(
								`.review-widget .body .review-comment blockquote { border-color: ${R}; }`,
							);
						const O = P.getColor(c.$rFb);
						O &&
							L.push(
								`.review-widget .body .review-comment .review-comment-contents .comment-reactions .action-item a.action-label { border-color: ${O}; }`,
							);
						const B = P.getColor(h.$OP);
						B &&
							(L.push(
								`.review-widget .body .comment-form .review-thread-reply-button { outline-color: ${B}; }`,
							),
							L.push(
								`.review-widget .body .monaco-editor { outline: 1px solid ${B}; }`,
							));
						const U = P.getColor(h.$0R);
						U &&
							L.push(
								`.review-widget .validation-error { border: 1px solid ${U}; }`,
							);
						const z = P.getColor(h.$8R);
						z &&
							L.push(`.review-widget .validation-error { background: ${z}; }`);
						const F = P.getColor(h.$9R);
						F &&
							L.push(
								`.review-widget .body .comment-form .validation-error { color: ${F}; }`,
							);
						const x = "--comment-thread-editor-font-family",
							H = "--comment-thread-editor-font-size",
							q = "--comment-thread-editor-font-weight";
						this.container?.style.setProperty(x, k.fontFamily),
							this.container?.style.setProperty(H, `${k.fontSize}px`),
							this.container?.style.setProperty(q, k.fontWeight),
							L.push(`.review-widget .body code {
			font-family: var(${x});
			font-weight: var(${q});
		}`),
							(this.m.textContent = L.join(`
`)),
							this.c?.setCommentEditorDecorations();
					}
				};
				(e.$F3b = I),
					(e.$F3b = I =
						Ne([j(12, d.$62b), j(13, p.$Xxb), j(14, f.$gj), j(15, y.$uZ)], I));
			},
		),
		