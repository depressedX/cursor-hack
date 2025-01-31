import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/async.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/themables.js';
import '../../../browser/editorBrowser.js';
import '../../../common/config/editorOptions.js';
import '../../../common/core/range.js';
import '../../../common/model.js';
import '../../../common/model/textModel.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../css!vs/editor/contrib/inlineProgress/browser/inlineProgressWidget.js';
define(
			de[1220],
			he([1, 0, 7, 15, 14, 3, 37, 26, 56, 38, 17, 64, 122, 5, 2311]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*async*/,
 w /*codicons*/,
 E /*lifecycle*/,
 C /*strings*/,
 d /*themables*/,
 m /*editorBrowser*/,
 r /*editorOptions*/,
 u /*range*/,
 a /*model*/,
 h /*textModel*/,
 c /*instantiation*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pzb = void 0),
					(t = mt(t));
				const n = h.$eY.register({
					description: "inline-progress-widget",
					stickiness: a.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
					showIfCollapsed: !0,
					after: {
						content: C.$ig,
						inlineClassName: "inline-editor-progress-decoration",
						inlineClassNameAffectsLetterSpacing: !0,
					},
				});
				class g extends E.$1c {
					static {
						this.a = "editor.widget.inlineProgressWidget";
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.f = f),
							(this.g = b),
							(this.h = s),
							(this.j = y),
							(this.allowEditorOverflow = !1),
							(this.suppressMouseDown = !0),
							this.m(l),
							this.g.addContentWidget(this),
							this.g.layoutContentWidget(this);
					}
					m(f) {
						(this.b = t.$(".inline-progress-widget")),
							(this.b.role = "button"),
							(this.b.title = f);
						const b = t.$("span.icon");
						this.b.append(b),
							b.classList.add(
								...d.ThemeIcon.asClassNameArray(w.$ak.loading),
								"codicon-modifier-spin",
							);
						const s = () => {
							const l = this.g.getOption(r.EditorOption.lineHeight);
							(this.b.style.height = `${l}px`),
								(this.b.style.width = `${Math.ceil(0.8 * l)}px`);
						};
						s(),
							this.D(
								this.g.onDidChangeConfiguration((l) => {
									(l.hasChanged(r.EditorOption.fontSize) ||
										l.hasChanged(r.EditorOption.lineHeight)) &&
										s();
								}),
							),
							this.D(
								t.$0fb(this.b, t.$$gb.CLICK, (l) => {
									this.j.cancel();
								}),
							);
					}
					getId() {
						return g.a + "." + this.f;
					}
					getDomNode() {
						return this.b;
					}
					getPosition() {
						return {
							position: {
								lineNumber: this.h.startLineNumber,
								column: this.h.startColumn,
							},
							preference: [m.ContentWidgetPositionPreference.EXACT],
						};
					}
					dispose() {
						super.dispose(), this.g.removeContentWidget(this);
					}
				}
				let p = class extends E.$1c {
					constructor(f, b, s) {
						super(),
							(this.m = f),
							(this.n = b),
							(this.q = s),
							(this.a = 500),
							(this.b = this.D(new E.$2c())),
							(this.g = this.D(new E.$2c())),
							(this.h = 0),
							(this.f = b.createDecorationsCollection());
					}
					dispose() {
						super.dispose(), this.f.clear();
					}
					async showWhile(f, b, s, l, y) {
						const $ = this.h++;
						(this.j = $),
							this.r(),
							(this.b.value = (0, i.$Oh)(() => {
								const v = u.$iL.fromPositions(f);
								this.f.set([{ range: v, options: n }]).length > 0 &&
									(this.g.value = this.q.createInstance(
										g,
										this.m,
										this.n,
										v,
										b,
										l,
									));
							}, y ?? this.a));
						try {
							return await s;
						} finally {
							this.j === $ && (this.r(), (this.j = void 0));
						}
					}
					r() {
						this.b.clear(), this.f.clear(), this.g.clear();
					}
				};
				(e.$Pzb = p), (e.$Pzb = p = Ne([j(2, c.$Li)], p));
			},
		)
