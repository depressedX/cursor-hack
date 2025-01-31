import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/marshallingIds.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import './commentsTreeViewer.js';
import './commentsView.js';
import '../../../services/views/common/viewsService.js';
define(
			de[3813],
			he([1, 0, 3, 221, 178, 11, 8, 130, 683, 1330, 89]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*marshallingIds*/,
 w /*accessibleView*/,
 E /*actions*/,
 C /*contextkey*/,
 d /*accessibilityConfiguration*/,
 m /*commentsTreeViewer*/,
 r /*commentsView*/,
 u /*viewsService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oSc = void 0);
				class a extends t.$1c {
					getProvider(n) {
						const g = n.get(C.$6j),
							p = n.get(u.$HMb),
							o = n.get(E.$YX),
							f = p.getActiveViewWithId(m.$$oc),
							b = f?.focusedCommentNode;
						if (!f || !b) return;
						const s = this.D(new m.$cpc(o));
						return s.setContextKeyService(g), new h(f, b, s);
					}
					constructor() {
						super(),
							(this.priority = 90),
							(this.name = "comment"),
							(this.when = r.$wpc),
							(this.type = w.AccessibleViewType.View);
					}
				}
				e.$oSc = a;
				class h extends t.$1c {
					constructor(n, g, p) {
						super(),
							(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.id = w.AccessibleViewProviderId.Comments),
							(this.verbositySettingKey =
								d.AccessibilityVerbositySettingId.Comments),
							(this.options = { type: w.AccessibleViewType.View }),
							(this.actions = [...this.c.getResourceContextActions(this.b)]
								.filter((o) => o.enabled)
								.map((o) => ({
									...o,
									run: () => {
										this.a.focus(),
											o.run({
												thread: this.b.thread,
												$mid: i.MarshalledId.CommentThread,
												commentControlHandle: this.b.controllerHandle,
												commentThreadHandle: this.b.threadHandle,
											});
									},
								})));
					}
					provideContent() {
						const n = this.a.focusedCommentNode,
							g = this.a.focusedCommentInfo?.toString();
						if (!n || !g)
							throw new Error(
								"Comment tree is focused but no comment is selected",
							);
						return g;
					}
					onClose() {
						this.a.focus();
					}
					provideNextContent() {
						return this.a.focusNextNode(), this.provideContent();
					}
					providePreviousContent() {
						return this.a.focusPreviousNode(), this.provideContent();
					}
				}
			},
		)
