import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/lifecycle.js';
import './repl.js';
import '../../../services/views/common/viewsService.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../nls.js';
define(
			de[3825],
			he([1, 0, 178, 8, 3, 847, 89, 130, 4]),
			function (ce /*require*/,
 e /*exports*/,
 t /*accessibleView*/,
 i /*contextkey*/,
 w /*lifecycle*/,
 E /*repl*/,
 C /*viewsService*/,
 d /*accessibilityConfiguration*/,
 m /*nls*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nRc = void 0);
				class r {
					constructor() {
						(this.priority = 120),
							(this.name = "replHelp"),
							(this.when = i.$Kj.equals(
								"focusedView",
								"workbench.panel.repl.view",
							)),
							(this.type = t.AccessibleViewType.Help);
					}
					getProvider(h) {
						const c = h.get(C.$HMb),
							n = (0, E.$OJc)(c);
						if (n) return new u(n);
					}
				}
				e.$nRc = r;
				class u extends w.$1c {
					constructor(h) {
						super(),
							(this.b = h),
							(this.id = t.AccessibleViewProviderId.ReplHelp),
							(this.verbositySettingKey =
								d.AccessibilityVerbositySettingId.Debug),
							(this.options = { type: t.AccessibleViewType.Help }),
							(this.a = !1),
							(this.a = !!h.getFocusedElement());
					}
					onClose() {
						if (this.a) return this.b.focusTree();
						this.b.getReplInput().focus();
					}
					provideContent() {
						return [
							(0, m.localize)(
								5710,
								null,
								"<keybinding:workbench.panel.repl.view.focus>",
							),
							(0, m.localize)(
								5711,
								null,
								"<keybinding:widgetNavigation.focusPrevious>",
							),
							(0, m.localize)(
								5712,
								null,
								"<keybinding:widgetNavigation.focusNext>",
							),
							(0, m.localize)(5713, null),
							(0, m.localize)(
								5714,
								null,
								"<keybinding:editor.action.accessibleView>",
							),
							(0, m.localize)(5715, null, "<keybinding:workbench.view.debug>"),
							(0, m.localize)(
								5716,
								null,
								"<keybinding:workbench.debug.panel.action.clearReplAction>",
							),
							(0, m.localize)(5717, null),
						].join(`
`);
					}
				}
			},
		),
		