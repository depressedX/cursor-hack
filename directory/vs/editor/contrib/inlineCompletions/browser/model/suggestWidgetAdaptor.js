import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/arrays.js';
import '../../../../../base/common/arraysFind.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../common/core/position.js';
import '../../../../common/core/range.js';
import '../../../../common/core/textEdit.js';
import '../../../../common/languages.js';
import './singleTextEdit.js';
import '../../../snippet/browser/snippetParser.js';
import '../../../snippet/browser/snippetSession.js';
import '../../../suggest/browser/suggestController.js';
define(
			de[2928],
			he([1, 0, 24, 214, 6, 3, 48, 17, 490, 74, 1196, 389, 1691, 328]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NDb = e.$MDb = void 0);
				class n extends E.$1c {
					get selectedItem() {
						return this.h;
					}
					constructor(f, b, s) {
						super(),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.c = !1),
							(this.f = !1),
							(this.g = !1),
							(this.h = void 0),
							(this.j = this.D(new w.$re())),
							(this.onDidSelectedItemChange = this.j.event),
							this.D(
								f.onKeyDown((y) => {
									y.shiftKey && !this.f && ((this.f = !0), this.r(this.g));
								}),
							),
							this.D(
								f.onKeyUp((y) => {
									y.shiftKey && this.f && ((this.f = !1), this.r(this.g));
								}),
							);
						const l = c.$KDb.get(this.m);
						if (l) {
							this.D(
								l.registerSelector({
									priority: 100,
									select: (v, S, I) => {
										const T = this.m.getModel();
										if (!T) return -1;
										const P = this.n(),
											k = P ? (0, u.$LCb)(P, T) : void 0;
										if (!k) return -1;
										const L = C.$hL.lift(S),
											D = I.map((N, A) => {
												const R = g.fromSuggestion(l, T, L, N, this.f),
													O = (0, u.$LCb)(R.toSingleTextEdit(), T),
													B = (0, u.$MCb)(k, O);
												return {
													index: A,
													valid: B,
													prefixLength: O.text.length,
													suggestItem: N,
												};
											}).filter((N) => N && N.valid && N.prefixLength > 0),
											M = (0, i.$rb)(
												D,
												(0, t.$0b)((N) => N.prefixLength, t.$_b),
											);
										return M ? M.index : -1;
									},
								}),
							);
							let y = !1;
							const $ = () => {
								y ||
									((y = !0),
									this.D(
										l.widget.value.onDidShow(() => {
											(this.c = !0), this.r(!0);
										}),
									),
									this.D(
										l.widget.value.onDidHide(() => {
											(this.c = !1), this.r(!1);
										}),
									),
									this.D(
										l.widget.value.onDidFocus(() => {
											(this.c = !0), this.r(!0);
										}),
									));
							};
							this.D(
								w.Event.once(l.model.onDidTrigger)((v) => {
									$();
								}),
							),
								this.D(
									l.onWillInsertSuggestItem((v) => {
										const S = this.m.getPosition(),
											I = this.m.getModel();
										if (!S || !I) return;
										const T = g.fromSuggestion(l, I, S, v.item, this.f);
										this.q(T);
									}),
								);
						}
						this.r(this.g);
					}
					r(f) {
						const b = this.t();
						(this.g !== f || !p(this.h, b)) &&
							((this.g = f), (this.h = b), this.j.fire());
					}
					t() {
						const f = c.$KDb.get(this.m);
						if (!f || !this.c) return;
						const b = f.widget.value.getFocusedItem(),
							s = this.m.getPosition(),
							l = this.m.getModel();
						if (!(!b || !s || !l))
							return g.fromSuggestion(f, l, s, b.item, this.f);
					}
					stopForceRenderingAbove() {
						c.$KDb.get(this.m)?.stopForceRenderingAbove();
					}
					forceRenderingAbove() {
						c.$KDb.get(this.m)?.forceRenderingAbove();
					}
				}
				e.$MDb = n;
				class g {
					static fromSuggestion(f, b, s, l, y) {
						let { insertText: $ } = l.completion,
							v = !1;
						if (
							l.completion.insertTextRules &
							r.CompletionItemInsertTextRule.InsertAsSnippet
						) {
							const I = new a.$Izb().parse($);
							I.children.length < 100 && h.$oDb.adjustWhitespace(b, s, !0, I),
								($ = I.toString()),
								(v = !0);
						}
						const S = f.getOverwriteInfo(l, y);
						return new g(
							d.$iL.fromPositions(
								s.delta(0, -S.overwriteBefore),
								s.delta(0, Math.max(S.overwriteAfter, 0)),
							),
							$,
							l.completion.kind,
							v,
						);
					}
					constructor(f, b, s, l) {
						(this.range = f),
							(this.insertText = b),
							(this.completionItemKind = s),
							(this.isSnippetText = l);
					}
					equals(f) {
						return (
							this.range.equalsRange(f.range) &&
							this.insertText === f.insertText &&
							this.completionItemKind === f.completionItemKind &&
							this.isSnippetText === f.isSnippetText
						);
					}
					toSelectedSuggestionInfo() {
						return new r.$eM(
							this.range,
							this.insertText,
							this.completionItemKind,
							this.isSnippetText,
						);
					}
					toSingleTextEdit() {
						return new m.$wL(this.range, this.insertText);
					}
				}
				e.$NDb = g;
				function p(o, f) {
					return o === f ? !0 : !o || !f ? !1 : o.equals(f);
				}
			},
		),
		