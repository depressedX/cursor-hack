import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/ui/hover/hoverDelegateFactory.js';
import '../../../../base/browser/ui/mouseCursor/mouseCursor.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/marshallingIds.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/keybinding/common/keybinding.js';
import './commentFormActions.js';
import './commentService.js';
import '../common/commentContextKeys.js';
import './simpleCommentEditor.js';
import '../../../../platform/hover/browser/hover.js';
define(
			de[1323],
			he([
				1, 0, 7, 95, 651, 3, 221, 23, 9, 47, 42, 4, 10, 39, 1239, 447, 505, 846,
				72,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*hoverDelegateFactory*/,
 w /*mouseCursor*/,
 E /*lifecycle*/,
 C /*marshallingIds*/,
 d /*network*/,
 m /*uri*/,
 r /*uuid*/,
 u /*resolverService*/,
 a /*nls*/,
 h /*configuration*/,
 c /*keybinding*/,
 n /*commentFormActions*/,
 g /*commentService*/,
 p /*commentContextKeys*/,
 o /*simpleCommentEditor*/,
 f /*hover*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$n3b = e.$m3b = void 0),
					(t = mt(t)),
					(a = mt(a));
				let b = 0;
				e.$m3b = "commenteditordecoration";
				let s = class extends E.$1c {
					constructor(y, $, v, S, I, T, P, k, L, D, M, N, A, R, O, B, U) {
						super(),
							(this.owner = y),
							(this.n = v),
							(this.q = S),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.y = D),
							(this.z = N),
							(this.C = A),
							(this.F = O),
							(this.G = B),
							(this.H = U),
							(this.f = []),
							(this.m = o.$i3b),
							(this.form = t.$fhb($, t.$(".comment-form"))),
							(this.commentEditor = this.D(
								this.r.createInstance(
									o.$k3b,
									this.form,
									o.$k3b.getEditorOptions(R),
									T,
									this.y,
								),
							)),
							(this.commentEditorIsEmpty =
								p.CommentContextKeys.commentIsEmpty.bindTo(this.s)),
							this.commentEditorIsEmpty.set(!this.w),
							this.initialize(M);
					}
					async initialize(y) {
						const $ = this.q.comments && this.q.comments.length > 0,
							v = (0, r.$9g)() + "-" + ($ ? this.q.threadId : ++b),
							S = JSON.stringify({
								extensionId: this.q.extensionId,
								commentThreadId: this.q.threadId,
							});
						let I = m.URI.from({
							scheme: d.Schemas.commentsInput,
							path: `/${this.q.extensionId}/commentinput-${v}.md?${S}`,
						});
						const T = this.C.getCommentController(this.owner);
						T && (I = I.with({ authority: T.id }));
						const P = await this.H.createModelReference(I);
						P.object.textEditorModel.setValue(this.w || ""),
							this.D(P),
							this.commentEditor.setModel(P.object.textEditorModel),
							this.I(),
							this.D(
								P.object.textEditorModel.onDidChangeContent(() => {
									this.setCommentEditorDecorations(),
										this.commentEditorIsEmpty?.set(
											!this.commentEditor.getValue(),
										),
										this.I() &&
											(this.commentEditor.layout({
												height: this.m,
												width: this.commentEditor.getLayoutInfo().width,
											}),
											this.commentEditor.render(!0));
								}),
							),
							this.J(this.commentEditor, this.form),
							this.setCommentEditorDecorations(),
							this.w
								? this.O()
								: $
									? this.R(this.commentEditor, this.form)
									: y &&
										this.q.comments &&
										this.q.comments.length === 0 &&
										this.O(),
							(this.a = t.$fhb(this.form, t.$(".validation-error.hidden")));
						const k = t.$fhb(this.form, t.$(".form-actions"));
						(this.b = t.$fhb(k, t.$(".other-actions"))),
							this.L(this.b, P.object.textEditorModel),
							(this.c = t.$fhb(k, t.$(".editor-actions"))),
							this.M(this.c, P.object.textEditorModel);
					}
					I() {
						const y = (0, o.$l3b)(this.n, this.commentEditor, this.m);
						return y !== this.m ? ((this.m = y), !0) : !1;
					}
					updateCommentThread(y) {
						const $ = this.commentEditor.hasTextFocus(),
							v = !this.q.comments?.length && !y.comments?.length;
						this.j || this.R(this.commentEditor, this.form),
							this.q.comments && this.q.comments.length === 0 && !v && this.O(),
							$ && this.commentEditor.focus();
					}
					getPendingComment() {
						const y = this.commentEditor.getModel();
						if (y && y.getValueLength() > 0) return y.getValue();
					}
					setPendingComment(y) {
						(this.w = y), this.O(), this.commentEditor.setValue(y);
					}
					layout(y) {
						this.commentEditor.layout({ height: this.m, width: y - 54 });
					}
					focusIfNeeded() {
						!this.q.comments || !this.q.comments.length
							? this.commentEditor.focus()
							: (this.commentEditor.getModel()?.getValueLength() ?? 0) > 0 &&
								this.O();
					}
					focusCommentEditor() {
						this.commentEditor.focus();
					}
					expandReplyAreaAndFocusCommentEditor() {
						this.O(), this.commentEditor.focus();
					}
					isCommentEditorFocused() {
						return this.commentEditor.hasWidgetFocus();
					}
					updateCanReply() {
						this.q.canReply
							? (this.form.style.display = "block")
							: (this.form.style.display = "none");
					}
					async submitComment() {
						await this.g?.triggerDefaultAction(), (this.w = void 0);
					}
					setCommentEditorDecorations() {
						const $ =
							this.q.comments && this.q.comments.length > 0
								? this.u?.placeHolder || a.localize(5009, null)
								: this.u?.placeHolder || a.localize(5010, null);
						this.commentEditor.updateOptions({ placeholder: $ });
					}
					J(y, $) {
						this.f.push(
							y.onDidFocusEditorWidget(() => {
								(this.q.input = { uri: y.getModel().uri, value: y.getValue() }),
									this.C.setActiveEditingCommentThread(this.q),
									this.C.setActiveCommentAndThread(this.owner, {
										thread: this.q,
									});
							}),
						),
							this.f.push(
								y.getModel().onDidChangeContent(() => {
									const v = y.getValue();
									if (
										this.q.input &&
										this.q.input.uri === y.getModel().uri &&
										this.q.input.value !== v
									) {
										const S = this.q.input;
										(S.value = v), (this.q.input = S);
									}
									this.C.setActiveEditingCommentThread(this.q);
								}),
							),
							this.f.push(
								this.q.onDidChangeInput((v) => {
									const S = this.q,
										I = y.getModel();
									(S.input && I && S.input.uri !== I.uri) ||
										(v &&
											y.getValue() !== v.value &&
											(y.setValue(v.value),
											v.value === "" &&
												((this.w = ""),
												$.classList.remove("expand"),
												(y.getDomNode().style.outline = ""),
												(this.a.textContent = ""),
												this.a.classList.add("hidden"))));
								}),
							);
					}
					L(y, $) {
						const v = this.t.getCommentThreadActions(this.s);
						this.D(v),
							this.D(
								v.onDidChange(() => {
									this.g.setActions(v);
								}),
							),
							(this.g = new n.$82b(this.F, this.s, y, async (S) => {
								await this.z?.(),
									await S.run({
										thread: this.q,
										text: this.commentEditor.getValue(),
										$mid: C.MarshalledId.CommentThreadReply,
									}),
									this.Q();
							})),
							this.D(this.g),
							this.g.setActions(v);
					}
					M(y, $) {
						const v = this.t.getCommentEditorActions(this.s);
						this.D(v),
							this.D(
								v.onDidChange(() => {
									this.h.setActions(v);
								}),
							),
							(this.h = new n.$82b(this.F, this.s, y, async (S) => {
								this.z?.(),
									S.run({
										thread: this.q,
										text: this.commentEditor.getValue(),
										$mid: C.MarshalledId.CommentThreadReply,
									}),
									this.focusCommentEditor();
							})),
							this.D(this.h),
							this.h.setActions(v, !0);
					}
					get N() {
						return this.form.classList.contains("expand");
					}
					O() {
						this.N ||
							(this.form.classList.add("expand"),
							this.commentEditor.focus(),
							this.commentEditor.layout());
					}
					P() {
						this.N || (this.commentEditor.setValue(""), this.O());
					}
					Q() {
						const y = this.commentEditor.getDomNode();
						y && (y.style.outline = ""),
							this.commentEditor.setValue(""),
							(this.w = ""),
							this.form.classList.remove("expand"),
							(this.a.textContent = ""),
							this.a.classList.add("hidden");
					}
					R(y, $) {
						(this.j = t.$fhb(
							$,
							t.$(`button.review-thread-reply-button.${w.$0ob}`),
						)),
							this.D(
								this.G.setupManagedHover(
									(0, i.$cib)("mouse"),
									this.j,
									this.u?.prompt || a.localize(5011, null),
								),
							),
							(this.j.textContent = this.u?.prompt || a.localize(5012, null)),
							this.D(t.$0fb(this.j, "click", (v) => this.P())),
							this.D(t.$0fb(this.j, "focus", (v) => this.P())),
							y.onDidBlurEditorWidget(() => {
								y.getModel().getValueLength() === 0 &&
									$.classList.contains("expand") &&
									$.classList.remove("expand");
							});
					}
					dispose() {
						super.dispose(), (0, E.$Vc)(this.f);
					}
				};
				(e.$n3b = s),
					(e.$n3b = s =
						Ne(
							[
								j(12, g.$62b),
								j(13, h.$gj),
								j(14, c.$uZ),
								j(15, f.$Uyb),
								j(16, u.$MO),
							],
							s,
						));
			},
		),
		