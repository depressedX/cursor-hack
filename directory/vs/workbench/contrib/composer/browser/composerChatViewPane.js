define(
			de[4414],
			he([
				1, 0, 10, 8, 49, 72, 5, 39, 41, 32, 35, 146, 60, 219, 209, 506, 169,
				1075, 45, 66,
			]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f, b) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerChatViewPane = void 0);
				let s = class extends a.$TMb {
					static {
						this.TITLE = p.COMPOSER_CHAT_VIEW_PANE_TITLE;
					}
					constructor(y, $, v, S, I, T, P, k, L, D, M, N, A, R, O, B) {
						super(y, $, v, S, I, T, P, k, L, D, M),
							(this.composerService = N),
							(this.composerDataService = A),
							(this.composerViewsService = R),
							(this.editorGroupsService = O),
							(this.reactiveStorageService = B),
							(this._solidDisposable = void 0);
					}
					W(y) {
						super.W(y), this.rerender(y);
					}
					dispose() {
						super.dispose(), this._solidDisposable?.dispose();
					}
					focus() {
						super.focus(),
							this.composerService.focus(
								this.composerDataService.selectedChatId,
							),
							setTimeout(() => {
								this.composerViewsService.triggerShouldRecomputeCodeBlock(
									this.composerDataService.selectedChatId,
								),
									this.composerViewsService.triggerScrollToBottom(
										this.composerDataService.selectedChatId,
									);
							});
					}
					rerender(y) {
						this._solidDisposable &&
							(this._solidDisposable.dispose(),
							(this._solidDisposable = void 0)),
							(this._solidDisposable = (0, o.renderComposerPane)(
								y,
								this.Db,
								"pane",
								"chat",
							));
					}
				};
				(e.ComposerChatViewPane = s),
					(e.ComposerChatViewPane = s =
						Ne(
							[
								j(1, d.$uZ),
								j(2, w.$Xxb),
								j(3, t.$gj),
								j(4, i.$6j),
								j(5, h.$K1),
								j(6, C.$Li),
								j(7, m.$7rb),
								j(8, u.$iP),
								j(9, r.$km),
								j(10, E.$Uyb),
								j(11, c.IComposerService),
								j(12, n.IComposerDataService),
								j(13, g.IComposerViewsService),
								j(14, b.$EY),
								j(15, f.$0zb),
							],
							s,
						));
			},
		),
		