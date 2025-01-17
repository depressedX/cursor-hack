import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observable.js';
import '../../../../../editor/common/editorCommon.js';
import '../model/mapping.js';
import '../../../../../base/common/controlFlow.js';
define(
			de[3085],
			he([1, 0, 3, 77, 98, 686, 1132]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$ORc = void 0);
				class d extends t.$1c {
					get a() {
						return this.h.get()?.model;
					}
					get f() {
						return this.r.get().kind === "columns";
					}
					get g() {
						return this.r.get().kind === "mixed" && !this.r.get().showBaseAtTop;
					}
					constructor(r, u, a, h, c, n) {
						super(),
							(this.h = r),
							(this.j = u),
							(this.m = a),
							(this.n = h),
							(this.q = c),
							(this.r = n),
							(this.b = new C.$Lpb());
						const g = (this.updateScrolling = () => {
							if (!this.a) return;
							if (
								(this.m.editor.setScrollTop(
									this.j.editor.getScrollTop(),
									w.ScrollType.Immediate,
								),
								this.f)
							)
								this.q.editor.setScrollTop(
									this.j.editor.getScrollTop(),
									w.ScrollType.Immediate,
								);
							else {
								const o = this.a.input1ResultMapping.get();
								this.s(this.j.editor, this.q.editor, o);
							}
							const p = this.n.get();
							if (p)
								if (this.g)
									this.n
										.get()
										?.editor.setScrollTop(
											this.j.editor.getScrollTop(),
											w.ScrollType.Immediate,
										);
								else {
									const o = new E.$vZb(
										this.a.baseInput1Diffs.get(),
										-1,
									).reverse();
									this.s(this.j.editor, p.editor, o);
								}
						});
						this.B.add(
							this.j.editor.onDidScrollChange(
								this.b.makeExclusiveOrSkip((p) => {
									p.scrollTopChanged && g(),
										p.scrollLeftChanged &&
											(this.n
												.get()
												?.editor.setScrollLeft(
													p.scrollLeft,
													w.ScrollType.Immediate,
												),
											this.m.editor.setScrollLeft(
												p.scrollLeft,
												w.ScrollType.Immediate,
											),
											this.q.editor.setScrollLeft(
												p.scrollLeft,
												w.ScrollType.Immediate,
											));
								}),
							),
						),
							this.B.add(
								this.m.editor.onDidScrollChange(
									this.b.makeExclusiveOrSkip((p) => {
										if (this.a) {
											if (p.scrollTopChanged) {
												if (
													(this.j.editor.setScrollTop(
														p.scrollTop,
														w.ScrollType.Immediate,
													),
													this.f)
												)
													this.q.editor.setScrollTop(
														this.m.editor.getScrollTop(),
														w.ScrollType.Immediate,
													);
												else {
													const f = this.a.input2ResultMapping.get();
													this.s(this.m.editor, this.q.editor, f);
												}
												const o = this.n.get();
												if (o && this.a)
													if (this.g)
														this.n
															.get()
															?.editor.setScrollTop(
																p.scrollTop,
																w.ScrollType.Immediate,
															);
													else {
														const f = new E.$vZb(
															this.a.baseInput2Diffs.get(),
															-1,
														).reverse();
														this.s(this.m.editor, o.editor, f);
													}
											}
											p.scrollLeftChanged &&
												(this.n
													.get()
													?.editor.setScrollLeft(
														p.scrollLeft,
														w.ScrollType.Immediate,
													),
												this.j.editor.setScrollLeft(
													p.scrollLeft,
													w.ScrollType.Immediate,
												),
												this.q.editor.setScrollLeft(
													p.scrollLeft,
													w.ScrollType.Immediate,
												));
										}
									}),
								),
							),
							this.B.add(
								this.q.editor.onDidScrollChange(
									this.b.makeExclusiveOrSkip((p) => {
										if (p.scrollTopChanged) {
											if (this.f)
												this.j.editor.setScrollTop(
													p.scrollTop,
													w.ScrollType.Immediate,
												),
													this.m.editor.setScrollTop(
														p.scrollTop,
														w.ScrollType.Immediate,
													);
											else {
												const b = this.a?.resultInput1Mapping.get();
												this.s(this.q.editor, this.j.editor, b);
												const s = this.a?.resultInput2Mapping.get();
												this.s(this.q.editor, this.m.editor, s);
											}
											const o = this.a?.resultBaseMapping.get(),
												f = this.n.get();
											f && this.a && this.s(this.q.editor, f.editor, o);
										}
										p.scrollLeftChanged &&
											(this.n
												.get()
												?.editor?.setScrollLeft(
													p.scrollLeft,
													w.ScrollType.Immediate,
												),
											this.j.editor.setScrollLeft(
												p.scrollLeft,
												w.ScrollType.Immediate,
											),
											this.m.editor.setScrollLeft(
												p.scrollLeft,
												w.ScrollType.Immediate,
											));
									}),
								),
							),
							this.B.add(
								(0, i.autorunWithStore)((p, o) => {
									const f = this.n.read(p);
									f &&
										o.add(
											f.editor.onDidScrollChange(
												this.b.makeExclusiveOrSkip((b) => {
													if (b.scrollTopChanged) {
														if (!this.a) return;
														if (this.g)
															this.j.editor.setScrollTop(
																b.scrollTop,
																w.ScrollType.Immediate,
															),
																this.m.editor.setScrollTop(
																	b.scrollTop,
																	w.ScrollType.Immediate,
																);
														else {
															const l = new E.$vZb(
																this.a.baseInput1Diffs.get(),
																-1,
															);
															this.s(f.editor, this.j.editor, l);
															const y = new E.$vZb(
																this.a.baseInput2Diffs.get(),
																-1,
															);
															this.s(f.editor, this.m.editor, y);
														}
														const s = this.a?.baseResultMapping.get();
														this.s(f.editor, this.q.editor, s);
													}
													b.scrollLeftChanged &&
														(this.q.editor.setScrollLeft(
															b.scrollLeft,
															w.ScrollType.Immediate,
														),
														this.j.editor.setScrollLeft(
															b.scrollLeft,
															w.ScrollType.Immediate,
														),
														this.m.editor.setScrollLeft(
															b.scrollLeft,
															w.ScrollType.Immediate,
														));
												}),
											),
										);
								}),
							);
					}
					s(r, u, a) {
						if (!a) return;
						const h = r.getVisibleRanges();
						if (h.length === 0) return;
						const c = h[0].startLineNumber - 1,
							n = a.project(c),
							g = n.inputRange,
							p = n.outputRange,
							o = u.getTopForLineNumber(p.startLineNumber),
							f = u.getTopForLineNumber(p.endLineNumberExclusive),
							b = r.getTopForLineNumber(g.startLineNumber),
							s = r.getTopForLineNumber(g.endLineNumberExclusive),
							l = Math.min((r.getScrollTop() - b) / (s - b), 1),
							y = o + (f - o) * l;
						u.setScrollTop(y, w.ScrollType.Immediate);
					}
				}
				e.$ORc = d;
			},
		),
		