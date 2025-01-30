import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/marked/marked.js';
import '../../../../nls.js';
import '../../accessibility/browser/accessibilityConfiguration.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../common/chatViewModel.js';
define(
			de[3548],
			he([1, 0, 434, 4, 130, 178, 283]),
			function (ce /*require*/,
 e /*exports*/,
 t /*marked*/,
 i /*nls*/,
 w /*accessibilityConfiguration*/,
 E /*accessibleView*/,
 C /*chatViewModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NYb = void 0);
				let d = class {
					constructor(r) {
						this.a = r;
					}
					getWidgetRole() {
						return "list";
					}
					getRole(r) {
						return "listitem";
					}
					getWidgetAriaLabel() {
						return (0, i.localize)(4636, null);
					}
					getAriaLabel(r) {
						return (0, C.$0Tb)(r)
							? r.messageText
							: (0, C.$$Tb)(r)
								? this.b(r)
								: (0, C.$_Tb)(r)
									? r.content
											.map((u) =>
												"value" in u
													? u.value
													: u
															.map((a) => a.message)
															.join(`
`),
											)
											.join(`
`)
									: "";
					}
					b(r) {
						const u = this.a.getOpenAriaHint(
							w.AccessibilityVerbositySettingId.Chat,
						);
						let a = "";
						const h =
							r.response.value.filter((g) => !("value" in g))?.length ?? 0;
						let c = "";
						switch (h) {
							case 0:
								break;
							case 1:
								c = (0, i.localize)(4637, null);
								break;
							default:
								c = (0, i.localize)(4638, null, h);
								break;
						}
						const n =
							t.marked
								.lexer(r.response.toString())
								.filter((g) => g.type === "code")?.length ?? 0;
						switch (n) {
							case 0:
								a = u
									? (0, i.localize)(4639, null, c, r.response.toString(), u)
									: (0, i.localize)(4640, null, c, r.response.toString());
								break;
							case 1:
								a = u
									? (0, i.localize)(4641, null, c, r.response.toString(), u)
									: (0, i.localize)(4642, null, c, r.response.toString());
								break;
							default:
								a = u
									? (0, i.localize)(4643, null, c, n, r.response.toString(), u)
									: (0, i.localize)(4644, null, c, n, r.response.toString());
								break;
						}
						return a;
					}
				};
				(e.$NYb = d), (e.$NYb = d = Ne([j(0, E.$HLb)], d));
			},
		),
		