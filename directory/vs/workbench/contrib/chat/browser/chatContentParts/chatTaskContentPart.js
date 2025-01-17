import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/browser/dom.js';
import '../../../../../base/common/event.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import './chatProgressContentPart.js';
import './chatReferencesContentPart.js';
define(
			de[4023],
			he([1, 0, 7, 6, 3, 5, 1721, 1946]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$LXb = void 0),
					(t = mt(t));
				let m = class extends w.$1c {
					constructor(u, a, h, c, n) {
						if ((super(), (this.a = u), u.progress.length)) {
							const g = this.D(
								n.createInstance(
									d.$JXb,
									u.progress,
									u.content.value,
									c.element,
									a,
								),
							);
							(this.domNode = t.$(".chat-progress-task")),
								this.domNode.appendChild(g.domNode),
								(this.onDidChangeHeight = g.onDidChangeHeight);
						} else {
							const g = u.isSettled?.() ?? !0,
								p = this.D(n.createInstance(C.$uUb, u, h, c, !g, !0));
							(this.domNode = p.domNode),
								(this.onDidChangeHeight = i.Event.None);
						}
					}
					hasSameContent(u) {
						return (
							u.kind === "progressTask" &&
							u.progress.length === this.a.progress.length &&
							u.isSettled() === this.a.isSettled()
						);
					}
					addDisposable(u) {
						this.D(u);
					}
				};
				(e.$LXb = m), (e.$LXb = m = Ne([j(4, E.$Li)], m));
			},
		),
		