import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../nls.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './chatConfirmationWidget.js';
import '../../common/chatService.js';
import '../../common/chatViewModel.js';
define(
			de[3015],
			he([1, 0, 6, 3, 4, 5, 3007, 218, 283]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*nls*/,
 E /*instantiation*/,
 C /*chatConfirmationWidget*/,
 d /*chatService*/,
 m /*chatViewModel*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$gUb = void 0);
				let r = class extends i.$1c {
					constructor(a, h, c, n) {
						super(),
							(this.b = c),
							(this.c = n),
							(this.a = this.D(new t.$re())),
							(this.onDidChangeHeight = this.a.event);
						const g = h.element,
							p = a.buttons
								? a.buttons.map((f) => ({ label: f, data: a.data }))
								: [
										{ label: (0, w.localize)(4656, null), data: a.data },
										{
											label: (0, w.localize)(4657, null),
											data: a.data,
											isSecondary: !0,
										},
									],
							o = this.D(this.b.createInstance(C.$fUb, a.title, a.message, p));
						o.setShowButtons(!a.isUsed),
							this.D(
								o.onDidClick(async (f) => {
									if ((0, m.$$Tb)(g)) {
										const b = `${f.label}: "${a.title}"`,
											s = f.isSecondary
												? { rejectedConfirmationData: [f.data] }
												: { acceptedConfirmationData: [f.data] };
										(s.agentId = g.agent?.id),
											(s.slashCommand = g.slashCommand?.name),
											(s.confirmation = f.label),
											(await this.c.sendRequest(g.sessionId, b, s)) &&
												((a.isUsed = !0), o.setShowButtons(!1), this.a.fire());
									}
								}),
							),
							(this.domNode = o.domNode);
					}
					hasSameContent(a) {
						return a.kind === "confirmation";
					}
					addDisposable(a) {
						this.D(a);
					}
				};
				(e.$gUb = r), (e.$gUb = r = Ne([j(2, E.$Li), j(3, d.$J2)], r));
			},
		),
		