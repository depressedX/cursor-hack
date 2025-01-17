import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/constants.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/notification/common/notification.js';
import '../../../../platform/opener/common/opener.js';
define(
			de[3619],
			he([1, 0, 58, 11, 10, 57, 40, 41]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Lyc = void 0);
				class m extends i.$3X {
					static {
						this.ID = "cursorai.action.askToEnableShadowWorkspace";
					}
					static {
						this.LABEL = "Ask to Enable Shadow Workspace";
					}
					constructor() {
						super({
							id: m.ID,
							title: { value: m.LABEL, original: m.LABEL },
							f1: !1,
						});
					}
					async run(u, a, ...h) {
						const c = u.get(E.$GO),
							n = u.get(w.$gj),
							g = u.get(d.$7rb);
						return (
							await c.prompt({
								type: C.Severity.Info,
								message: "Enable the Shadow Workspace?",
								detail: `${a} The shadow workspace is a hidden window where Cursor can locally refine your code in the background. This will increase the memory usage of Cursor.`,
								buttons: [
									{
										label: "Enable",
										run: () => (n.updateValue(t.$KW, !0), !0),
									},
									{
										label: "Learn More...",
										run: () => (
											g.open(
												"https://docs.cursor.com/advanced/shadow-workspace",
											),
											!1
										),
									},
								],
								cancelButton: { label: "Cancel", run: () => !1 },
							})
						).result;
					}
				}
				(e.$Lyc = m), (0, i.$4X)(m);
			},
		),
		