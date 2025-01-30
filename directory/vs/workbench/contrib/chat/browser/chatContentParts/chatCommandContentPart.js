import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/browser/ui/button/button.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/commands/common/commands.js';
import '../../../../../platform/theme/browser/defaultStyles.js';
import '../../common/chatViewModel.js';
define(
			de[3014],
			he([1, 0, 7, 183, 3, 4, 31, 106, 283]),
			function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*button*/,
 w /*lifecycle*/,
 E /*nls*/,
 C /*commands*/,
 d /*defaultStyles*/,
 m /*chatViewModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$eUb = void 0),
					(t = mt(t));
				const r = t.$;
				let u = class extends w.$1c {
					constructor(h, c, n) {
						super(), (this.a = n), (this.domNode = r(".chat-command-button"));
						const g = !(0, m.$$Tb)(c.element) || !c.element.isStale,
							p = g ? h.command.tooltip : (0, E.localize)(4655, null),
							o = this.D(
								new i.$oob(this.domNode, {
									...d.$lyb,
									supportIcons: !0,
									title: p,
								}),
							);
						(o.label = h.command.title),
							(o.enabled = g),
							this.D(
								o.onDidClick(() =>
									this.a.executeCommand(
										h.command.id,
										...(h.command.arguments ?? []),
									),
								),
							);
					}
					hasSameContent(h) {
						return h.kind === "command";
					}
				};
				(e.$eUb = u), (e.$eUb = u = Ne([j(2, C.$ek)], u));
			},
		),
		