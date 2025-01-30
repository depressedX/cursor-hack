import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/color.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/contrib/zoneWidget/browser/zoneWidget.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/theme/common/themeService.js';
import './commentGlyphWidget.js';
import './commentService.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import './commentThreadWidget.js';
import './commentColors.js';
import '../../../../editor/contrib/peekView/browser/peekView.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../editor/browser/stableEditorScroll.js';
define(
			de[3765],
			he([
				1, 0, 97, 6, 3, 56, 17, 74, 680, 8, 5, 35, 1723, 447, 38, 128, 1899,
				1237, 255, 10, 491,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*color*/,
				i /*event*/,
				w /*lifecycle*/,
				E /*editorBrowser*/,
				C /*range*/,
				d /*languages*/,
				m /*zoneWidget*/,
				r /*contextkey*/,
				u /*instantiation*/,
				a /*themeService*/,
				h /*commentGlyphWidget*/,
				c /*commentService*/,
				n /*editorOptions*/,
				g /*serviceCollection*/,
				p /*commentThreadWidget*/,
				o /*commentColors*/,
				f /*peekView*/,
				b /*configuration*/,
				s /*stableEditorScroll*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$npc = e.CommentWidgetFocus = void 0),
					(e.$kpc = $),
					(e.$lpc = v),
					(e.$mpc = S),
					(d = mt(d));
				function l(T, P) {
					return (0, o.$B3b)(T, P) ?? P.getColor(f.$aNb);
				}
				var y;
				(function (T) {
					(T[(T.None = 0)] = "None"),
						(T[(T.Widget = 1)] = "Widget"),
						(T[(T.Editor = 2)] = "Editor");
				})(y || (e.CommentWidgetFocus = y = {}));
				function $(T) {
					const P = T.target.range;
					if (
						!P ||
						!T.event.leftButton ||
						T.target.type !== E.MouseTargetType.GUTTER_LINE_DECORATIONS
					)
						return null;
					const k = T.target.detail;
					return k.offsetX -
						k.glyphMarginWidth -
						k.lineNumbersWidth -
						k.glyphMarginLeft >
						20
						? null
						: { lineNumber: P.startLineNumber };
				}
				function v(T, P) {
					if (!T) return null;
					const { lineNumber: k } = T;
					return P.target.range ? k : null;
				}
				function S(T, P) {
					if (!T) return null;
					const { lineNumber: k } = T,
						L = P.target.range;
					return !L ||
						L.startLineNumber !== k ||
						P.target.type !== E.MouseTargetType.GUTTER_LINE_DECORATIONS
						? null
						: k;
				}
				let I = class extends m.$FLb {
					get uniqueOwner() {
						return this.H;
					}
					get commentThread() {
						return this.I;
					}
					get expanded() {
						return this.d;
					}
					constructor(P, k, L, D, M, N, A, R, O, B) {
						super(P, { keepEditorSelection: !0, isAccessible: !0 }),
							(this.H = k),
							(this.I = L),
							(this.J = D),
							(this.K = M),
							(this.L = A),
							(this.M = R),
							(this.N = B),
							(this.b = new i.$re()),
							(this.c = new i.$re()),
							(this.k = new w.$Zc()),
							(this.m = []),
							(this.p = O.createScoped(this.domNode)),
							(this.r = this.k.add(N.createChild(new g.$Ki([r.$6j, this.p]))));
						const U = this.M.getCommentController(this.H);
						U && (this.s = U.options),
							(this.i = D ? d.CommentThreadCollapsibleState.Expanded : L.m),
							(L.m = this.i),
							(this.m = []),
							this.create(),
							this.k.add(this.L.onDidColorThemeChange(this.Z, this)),
							this.k.add(
								this.editor.onDidChangeConfiguration((z) => {
									z.hasChanged(n.EditorOption.fontInfo) &&
										this.Z(this.L.getColorTheme());
								}),
							),
							this.Z(this.L.getColorTheme());
					}
					get onDidClose() {
						return this.b.event;
					}
					get onDidCreateThread() {
						return this.c.event;
					}
					getPosition() {
						if (this.position) return this.position;
						if (this.j) return this.j.getPosition().position ?? void 0;
					}
					A() {}
					reveal(P, k = y.None) {
						this.makeVisible(P, k);
						const L = this.I.comments?.find((D) => D.uniqueIdInThread === P);
						this.M.setActiveCommentAndThread(this.uniqueOwner, {
							thread: this.I,
							comment: L,
						});
					}
					P() {
						this.d || this.show(this.U(this.I.range), 2);
					}
					Q(P) {
						P === y.Widget
							? this.a.focus()
							: P === y.Editor && this.a.focusCommentEditor();
					}
					R(P, k) {
						const L = this.editor.getLayoutInfo().height,
							D = this.a.getCommentCoords(P);
						if (D) {
							let M = 1;
							if (this.I.range) {
								const N = D.thread,
									A = D.comment;
								M =
									this.editor.getTopForLineNumber(
										this.I.range.startLineNumber,
									) -
									L / 2 +
									A.top -
									N.top;
							}
							this.editor.setScrollTop(M), this.Q(k);
						} else this.S(k);
					}
					S(P) {
						const k = this.I.range
							? new C.$iL(
									this.I.range.startLineNumber,
									this.I.range.startColumn,
									this.I.range.endLineNumber + 1,
									1,
								)
							: new C.$iL(1, 1, 1, 1);
						this.editor.revealRangeInCenter(k), this.Q(P);
					}
					makeVisible(P, k = y.None) {
						this.P(), P !== void 0 && this.R(P, k), this.S(k);
					}
					getPendingComments() {
						return {
							newComment: this.a.getPendingComment(),
							edits: this.a.getPendingEdits(),
						};
					}
					setPendingComment(P) {
						(this.J = P), this.expand(), this.a.setPendingComment(P);
					}
					C(P) {
						this.B("review-widget"),
							(this.a = this.r.createInstance(
								p.$F3b,
								P,
								this.editor,
								this.H,
								this.editor.getModel().uri,
								this.p,
								this.r,
								this.I,
								this.J,
								this.K,
								{
									editor: this.editor,
									codeBlockFontSize: "",
									codeBlockFontFamily:
										this.N.getValue("editor").fontFamily ||
										n.EDITOR_FONT_DEFAULTS.fontFamily,
								},
								this.s,
								{
									actionRunner: async () => {
										if (!this.I.comments || !this.I.comments.length) {
											const k = this.getPosition();
											if (k) {
												const L = this.I.range;
												if (!L) return;
												let D;
												if (k.lineNumber !== L.endLineNumber) {
													const M = k.lineNumber - L.endLineNumber;
													D = new C.$iL(
														L.startLineNumber + M,
														L.startColumn,
														L.endLineNumber + M,
														L.endColumn,
													);
												} else
													D = new C.$iL(
														L.startLineNumber,
														L.startColumn,
														L.endLineNumber,
														L.endColumn,
													);
												await this.M.updateCommentThreadTemplate(
													this.uniqueOwner,
													this.I.commentThreadHandle,
													D,
												);
											}
										}
									},
									collapse: () => {
										this.collapse();
									},
								},
							)),
							this.o.add(this.a);
					}
					U(P) {
						if (P)
							return {
								lineNumber: P.endLineNumber,
								column:
									P.endLineNumber === P.startLineNumber
										? (P.startColumn + P.endColumn + 1) / 2
										: 1,
							};
					}
					V() {
						this.dispose(),
							this.M.disposeCommentThread(this.uniqueOwner, this.I.threadId);
					}
					collapse() {
						this.I.collapsibleState = d.CommentThreadCollapsibleState.Collapsed;
					}
					expand(P) {
						(this.I.collapsibleState =
							d.CommentThreadCollapsibleState.Expanded),
							P &&
								this.M.setActiveCommentAndThread(this.uniqueOwner, {
									thread: this.I,
								});
					}
					getGlyphPosition() {
						return this.j ? this.j.getPosition().position.lineNumber : 0;
					}
					async update(P) {
						this.I !== P &&
							(this.m.forEach((D) => D.dispose()),
							(this.I = P),
							(this.m = []),
							this.Y()),
							await this.a.updateCommentThread(P);
						const k = this.I.range?.endLineNumber ?? 1;
						let L = !1;
						this.j &&
							(this.j.setThreadState(P.state),
							this.j.getPosition().position.lineNumber !== k &&
								((L = !0), this.j.setLineNumber(k))),
							(L && this.d) ||
							(this.I.collapsibleState ===
								d.CommentThreadCollapsibleState.Expanded &&
								!this.d)
								? this.show(this.U(this.I.range), 2)
								: this.I.collapsibleState !==
										d.CommentThreadCollapsibleState.Expanded && this.hide();
					}
					D(P) {
						this.a.layout(P);
					}
					E(P, k) {
						this.a.layout(k);
					}
					async display(P, k) {
						P &&
							((this.j = new h.$jpc(this.editor, P?.endLineNumber ?? -1)),
							this.j.setThreadState(this.I.state)),
							await this.a.display(
								this.editor.getOption(n.EditorOption.lineHeight),
								k,
							),
							this.o.add(
								this.a.onDidResize((L) => {
									this._refresh(L);
								}),
							),
							(this.I.collapsibleState ===
								d.CommentThreadCollapsibleState.Expanded ||
								P === void 0) &&
								this.show(this.U(P), 2),
							k && this.makeVisible(),
							this.Y();
					}
					Y() {
						if (
							(this.m.push(
								this.I.onDidChangeComments(async (P) => {
									await this.update(this.I);
								}),
							),
							this.m.push(
								this.I.onDidChangeRange((P) => {
									const k = this.I.range?.startLineNumber ?? 1;
									let L = !1;
									this.j &&
										this.j.getPosition().position.lineNumber !== k &&
										((L = !0), this.j.setLineNumber(k)),
										L && this.d && this.show(this.U(this.I.range), 2);
								}),
							),
							this.m.push(
								this.I.onDidChangeCollapsibleState((P) => {
									if (
										P === d.CommentThreadCollapsibleState.Expanded &&
										!this.d
									) {
										this.show(this.U(this.I.range), 2),
											this.a.ensureFocusIntoNewEditingComment();
										return;
									}
									if (
										P === d.CommentThreadCollapsibleState.Collapsed &&
										this.d
									) {
										this.hide();
										return;
									}
								}),
							),
							this.i === void 0)
						) {
							const P = this.I.onDidChangeInitialCollapsibleState((k) => {
								(this.i = k), (this.I.collapsibleState = this.i), P.dispose();
							});
							this.m.push(P);
						}
						this.m.push(
							this.I.onDidChangeState(() => {
								const P =
									l(this.I.state, this.L.getColorTheme()) || t.$UL.transparent;
								this.style({ frameColor: P, arrowColor: P }),
									this.container?.style.setProperty(o.$y3b, `${P}`),
									this.container?.style.setProperty(
										o.$A3b,
										`${P.transparent(0.1)}`,
									);
							}),
						);
					}
					async submitComment() {
						return this.a.submitComment();
					}
					_refresh(P) {
						if (this.d === void 0 && P.height === 0 && P.width === 0) {
							this.commentThread.collapsibleState =
								d.CommentThreadCollapsibleState.Collapsed;
							return;
						}
						if (this.d) {
							this.a.layout();
							const k = Math.ceil(
									this.editor.getOption(n.EditorOption.lineHeight) * 1.2,
								),
								L = this.editor.getOption(n.EditorOption.lineHeight),
								D = Math.round(L / 3),
								M = Math.round(L / 9) * 2,
								N = Math.ceil((k + P.height + D + M + 8) / L);
							if (this.n?.heightInLines === N) return;
							const A = this.getPosition();
							this.n &&
								A &&
								A.lineNumber !== this.n.afterLineNumber &&
								this.n.afterLineNumber !== 0 &&
								(this.n.afterLineNumber = A.lineNumber);
							const R = s.$uwb.capture(this.editor);
							this.F(N), R.restore(this.editor);
						}
					}
					Z(P) {
						const k =
							l(this.I.state, this.L.getColorTheme()) || t.$UL.transparent;
						this.style({ arrowColor: k, frameColor: k });
						const L = this.editor.getOption(n.EditorOption.fontInfo);
						this.a.applyTheme(P, L);
					}
					show(P, k) {
						const L = this.j?.getPosition();
						let D = C.$iL.isIRange(P) ? P : P ? C.$iL.fromPositions(P) : void 0;
						if (L?.position && D && L.position.lineNumber !== D.endLineNumber) {
							const M = L.position.lineNumber - D.endLineNumber;
							D = new C.$iL(
								D.startLineNumber + M,
								D.startColumn,
								D.endLineNumber + M,
								D.endColumn,
							);
						}
						(this.d = !0),
							super.show(D ?? new C.$iL(0, 0, 0, 0), k),
							(this.I.collapsibleState =
								d.CommentThreadCollapsibleState.Expanded),
							this._refresh(this.a.getDimensions());
					}
					hide() {
						this.d &&
							((this.d = !1),
							this.editor.hasWidgetFocus() && this.editor.focus(),
							(!this.I.comments || !this.I.comments.length) && this.V()),
							super.hide();
					}
					dispose() {
						super.dispose(),
							this.j && (this.j.dispose(), (this.j = void 0)),
							this.k.dispose(),
							this.m.forEach((P) => P.dispose()),
							this.b.fire(void 0);
					}
				};
				(e.$npc = I),
					(e.$npc = I =
						Ne(
							[
								j(5, u.$Li),
								j(6, a.$iP),
								j(7, c.$62b),
								j(8, r.$6j),
								j(9, b.$gj),
							],
							I,
						));
			},
		),
		