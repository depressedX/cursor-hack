import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../common/views.js';
import './composer.js';
import './composerDataService.js';
import './composerViews.js';
import './constants.js';
import './renderComposerPane.js';
define(
			de[4416],
			he([
				1, 0, 10, 8, 49, 72, 5, 39, 41, 32, 35, 146, 60, 219, 209, 506, 169,
				1075,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*configuration*/,
 i /*contextkey*/,
 w /*contextView*/,
 E /*hover*/,
 C /*instantiation*/,
 d /*keybinding*/,
 m /*opener*/,
 r /*telemetry*/,
 u /*themeService*/,
 a /*viewPane*/,
 h /*views*/,
 c /*composer*/,
 n /*composerDataService*/,
 g /*composerViews*/,
 p /*constants*/,
 o /*renderComposerPane*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.ComposerViewPane = void 0);
				let f = class extends a.$TMb {
					static {
						this.ID = p.COMPOSER_VIEW_PANE_ID;
					}
					static {
						this.TITLE = p.COMPOSER_VIEW_PANE_TITLE;
					}
					constructor(s, l, y, $, v, S, I, T, P, k, L, D, M, N) {
						super(s, l, y, $, v, S, I, T, P, k, L),
							(this.composerService = D),
							(this.composerDataService = M),
							(this.composerViewsService = N),
							(this._solidDisposable = void 0);
					}
					W(s) {
						super.W(s), this.rerender(s);
					}
					dispose() {
						super.dispose(), this._solidDisposable?.dispose();
					}
					focus() {
						super.focus(),
							this.composerService.focus(
								this.composerDataService.selectedComposerId,
							),
							setTimeout(() => {
								this.composerViewsService.triggerShouldRecomputeCodeBlock(
									this.composerDataService.selectedComposerId,
								),
									this.composerViewsService.triggerScrollToBottom(
										this.composerDataService.selectedComposerId,
									);
							});
					}
					rerender(s) {
						this._solidDisposable &&
							(this._solidDisposable.dispose(),
							(this._solidDisposable = void 0)),
							(this._solidDisposable = (0, o.renderComposerPane)(
								s,
								this.Db,
								"pane",
								"edit",
							));
					}
				};
				(e.ComposerViewPane = f),
					(e.ComposerViewPane = f =
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
							],
							f,
						));
			},
		)
