import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/descriptors.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/views.js';
import '../../files/browser/explorerViewlet.js';
import '../common/timeline.js';
import '../common/timelineService.js';
import './timelinePane.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../files/common/files.js';
import '../../../common/contextkeys.js';
import '../../../../base/common/codicons.js';
import '../../../../platform/theme/common/iconRegistry.js';
define(
			de[4307],
			he([
				1, 0, 4, 102, 20, 30, 60, 864, 814, 3847, 3884, 81, 8, 11, 31, 220, 100,
				14, 79,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*descriptors*/,
 w /*extensions*/,
 E /*platform*/,
 C /*views*/,
 d /*explorerViewlet*/,
 m /*timeline*/,
 r /*timelineService*/,
 u /*timelinePane*/,
 a /*configurationRegistry*/,
 h /*contextkey*/,
 c /*actions*/,
 n /*commands*/,
 g /*files*/,
 p /*contextkeys*/,
 o /*codicons*/,
 f /*iconRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_1c = void 0);
				const b = (0, f.$$O)(
						"timeline-view-icon",
						o.$ak.history,
						(0, t.localize)(11e3, null),
					),
					s = (0, f.$$O)(
						"timeline-open",
						o.$ak.history,
						(0, t.localize)(11001, null),
					);
				class l {
					constructor() {
						(this.id = m.$47),
							(this.name = u.$81c.TITLE),
							(this.containerIcon = b),
							(this.ctorDescriptor = new i.$Ji(u.$81c)),
							(this.order = 2),
							(this.weight = 30),
							(this.collapsed = !0),
							(this.canToggleVisibility = !0),
							(this.hideByDefault = !1),
							(this.canMoveView = !0),
							(this.when = r.$41c),
							(this.focusCommand = { id: "timeline.focus" });
					}
				}
				(e.$_1c = l),
					E.$Io
						.as(a.$No.Configuration)
						.registerConfiguration({
							id: "timeline",
							order: 1001,
							title: (0, t.localize)(11002, null),
							type: "object",
							properties: {
								"timeline.pageSize": {
									type: ["number", "null"],
									default: null,
									markdownDescription: (0, t.localize)(11003, null),
								},
								"timeline.pageOnScroll": {
									type: "boolean",
									default: !1,
									description: (0, t.localize)(11004, null),
								},
							},
						}),
					E.$Io.as(C.Extensions.ViewsRegistry).registerViews([new l()], d.$sAc);
				var $;
				(function (S) {
					(S.ID = "files.openTimeline"),
						(S.LABEL = (0, t.localize)(11005, null));
					function I() {
						return (T, P) => T.get(m.$57).setUri(P);
					}
					S.handler = I;
				})($ || ($ = {})),
					n.$fk.registerCommand($.ID, $.handler()),
					c.$ZX.appendMenuItem(c.$XX.ExplorerContext, {
						group: "4_timeline",
						order: 1,
						command: { id: $.ID, title: $.LABEL, icon: s },
						when: h.$Kj.and(g.$zUb.toNegated(), p.$BQb.HasResource, r.$41c),
					});
				const v = (0, f.$$O)(
					"timeline-filter",
					o.$ak.filter,
					(0, t.localize)(11006, null),
				);
				c.$ZX.appendMenuItem(c.$XX.TimelineTitle, {
					submenu: c.$XX.TimelineFilterSubMenu,
					title: (0, t.localize)(11007, null),
					group: "navigation",
					order: 100,
					icon: v,
				}),
					(0, w.$lK)(m.$57, r.$51c, w.InstantiationType.Delayed);
			},
		)
