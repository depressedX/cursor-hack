import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/arrays.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../editor/common/config/editorOptions.js';
import '../../../../../../platform/configuration/common/configuration.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../../platform/theme/common/themeService.js';
import '../../../../comments/browser/commentService.js';
import '../../../../comments/browser/commentThreadWidget.js';
import '../cellPart.js';
define(
			de[3773],
			he([1, 0, 24, 3, 38, 10, 8, 5, 35, 447, 1899, 294]),
			function (ce /*require*/,
 e /*exports*/,
 t /*arrays*/,
 i /*lifecycle*/,
 w /*editorOptions*/,
 E /*configuration*/,
 C /*contextkey*/,
 d /*instantiation*/,
 m /*themeService*/,
 r /*commentService*/,
 u /*commentThreadWidget*/,
 a /*cellPart*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$G3b = void 0);
				let h = class extends a.$A1b {
					constructor(n, g, p, o, f, b, s) {
						super(),
							(this.h = n),
							(this.j = g),
							(this.m = p),
							(this.n = o),
							(this.q = f),
							(this.r = b),
							(this.s = s),
							(this.g = this.D(new i.$Zc())),
							this.j.classList.add("review-widget"),
							this.D((this.a = new i.$2c())),
							this.D(this.n.onDidColorThemeChange(this.F, this)),
							this.F();
					}
					async t(n) {
						this.b !== n && ((this.b = n), await this.y());
					}
					async u(n, g) {
						this.g.clear(),
							(this.a.value = this.s.createInstance(
								u.$F3b,
								this.j,
								this.h,
								n,
								this.h.textModel.uri,
								this.m,
								this.s,
								g,
								void 0,
								void 0,
								{
									codeBlockFontFamily:
										this.r.getValue("editor").fontFamily ||
										w.EDITOR_FONT_DEFAULTS.fontFamily,
								},
								void 0,
								{ actionRunner: () => {}, collapse: () => {} },
							));
						const p = this.h.getLayoutInfo();
						await this.a.value.display(p.fontInfo.lineHeight, !0),
							this.F(),
							this.g.add(
								this.a.value.onDidResize(() => {
									this.b &&
										this.a.value &&
										(this.b.commentHeight = this.z(
											this.a.value.getDimensions().height,
										));
								}),
							);
					}
					w() {
						this.f.add(this.q.onDidUpdateCommentThreads(async () => this.y()));
					}
					async y() {
						if (!this.b) return;
						const n = await this.C(this.b);
						if (!this.a.value && n) {
							await this.u(n.owner, n.thread),
								(this.j.style.top = `${this.b.layoutInfo.commentOffset}px`),
								(this.b.commentHeight = this.z(
									this.a.value.getDimensions().height,
								));
							return;
						}
						if (this.a.value) {
							if (!n) {
								this.g.clear(),
									(this.a.value = void 0),
									(this.b.commentHeight = 0);
								return;
							}
							await this.a.value.updateCommentThread(n.thread),
								(this.b.commentHeight = this.z(
									this.a.value.getDimensions().height,
								));
						}
					}
					z(n) {
						const g = this.h.getLayoutInfo(),
							p = Math.ceil(g.fontInfo.lineHeight * 1.2),
							o = g.fontInfo.lineHeight,
							f = Math.round(o / 3),
							b = Math.round(o / 9) * 2;
						return p + n + f + b + 8;
					}
					async C(n) {
						if (this.h.hasModel()) {
							const g = (0, t.$Lb)(await this.q.getNotebookComments(n.uri));
							for (const p of g)
								for (const o of p.threads)
									return { owner: p.uniqueOwner, thread: o };
						}
						return null;
					}
					F() {
						const n = this.n.getColorTheme(),
							g = this.h.getLayoutInfo().fontInfo;
						this.a.value?.applyTheme(n, g);
					}
					didRenderCell(n) {
						this.t(n), this.w();
					}
					prepareLayout() {
						this.b &&
							this.a.value &&
							(this.b.commentHeight = this.z(
								this.a.value.getDimensions().height,
							));
					}
					updateInternalLayoutNow(n) {
						this.b &&
							this.a.value &&
							(this.j.style.top = `${n.layoutInfo.commentOffset}px`);
					}
				};
				(e.$G3b = h),
					(e.$G3b = h =
						Ne(
							[
								j(2, C.$6j),
								j(3, m.$iP),
								j(4, r.$62b),
								j(5, E.$gj),
								j(6, d.$Li),
							],
							h,
						));
			},
		)
