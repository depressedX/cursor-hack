import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './simpleCommentEditor.js';
import '../common/commentContextKeys.js';
import '../../../../nls.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../common/commentCommandIds.js';
import '../../../../editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../base/common/lifecycle.js';
define(
			de[1900],
			he([1, 0, 8, 5, 846, 505, 4, 130, 1238, 1635, 178, 3]),
			function (ce /*require*/,
 e /*exports*/,
 t /*contextkey*/,
 i /*instantiation*/,
 w /*simpleCommentEditor*/,
 E /*commentContextKeys*/,
 C /*nls*/,
 d /*accessibilityConfiguration*/,
 m /*commentCommandIds*/,
 r /*toggleTabFocusMode*/,
 u /*accessibleView*/,
 a /*lifecycle*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$qSc = e.$pSc = e.CommentAccessibilityHelpNLS = void 0),
					(C = mt(C));
				var h;
				(function (g) {
					(g.intro = C.localize(5029, null)),
						(g.tabFocus = C.localize(5030, null, `<keybinding:${r.$xkc.ID}>`)),
						(g.commentCommands = C.localize(5031, null)),
						(g.escape = C.localize(5032, null)),
						(g.nextRange = C.localize(
							5033,
							null,
							`<keybinding:${m.CommentCommandId.NextRange}>`,
						)),
						(g.previousRange = C.localize(
							5034,
							null,
							`<keybinding:${m.CommentCommandId.PreviousRange}>`,
						)),
						(g.nextCommentThread = C.localize(
							5035,
							null,
							`<keybinding:${m.CommentCommandId.NextThread}>`,
						)),
						(g.previousCommentThread = C.localize(
							5036,
							null,
							`<keybinding:${m.CommentCommandId.PreviousThread}>`,
						)),
						(g.addComment = C.localize(
							5037,
							null,
							`<keybinding:${m.CommentCommandId.Add}>`,
						)),
						(g.submitComment = C.localize(
							5038,
							null,
							`<keybinding:${m.CommentCommandId.Submit}>`,
						));
				})(h || (e.CommentAccessibilityHelpNLS = h = {}));
				class c extends a.$1c {
					constructor() {
						super(...arguments),
							(this.id = u.AccessibleViewProviderId.Comments),
							(this.verbositySettingKey =
								d.AccessibilityVerbositySettingId.Comments),
							(this.options = { type: u.AccessibleViewType.Help });
					}
					provideContent() {
						return [
							h.tabFocus,
							h.commentCommands,
							h.escape,
							h.addComment,
							h.submitComment,
							h.nextRange,
							h.previousRange,
						].join(`
`);
					}
					onClose() {
						this.a?.focus();
					}
				}
				e.$pSc = c;
				class n {
					constructor() {
						(this.priority = 110),
							(this.name = "comments"),
							(this.type = u.AccessibleViewType.Help),
							(this.when = t.$Kj.or(
								w.$h3b,
								E.CommentContextKeys.commentFocused,
							));
					}
					getProvider(p) {
						return p.get(i.$Li).createInstance(c);
					}
				}
				e.$qSc = n;
			},
		),
		