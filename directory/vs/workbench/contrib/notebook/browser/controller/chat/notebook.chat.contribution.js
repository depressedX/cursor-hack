import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../base/common/lifecycle.js';
import '../../../../../../platform/contextkey/common/contextkey.js';
import '../../../../../common/contributions.js';
import '../../../../chat/common/chatAgents.js';
import './notebookChatContext.js';
import './cellChatActions.js';
define(
			de[4087],
			he([1, 0, 3, 8, 55, 153, 688, 4086]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 });
				let d = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.notebookChatContribution";
					}
					constructor(r, u) {
						super(), (this.a = C.$x1b.bindTo(r));
						const a = () => {
							const h = !!u.getDefaultAgent(E.ChatAgentLocation.Notebook);
							this.a.set(h);
						};
						a(), this.D(u.onDidChangeAgents(a));
					}
				};
				(d = Ne([j(0, i.$6j), j(1, E.$c3)], d)),
					(0, w.$s6)(d.ID, d, w.WorkbenchPhase.BlockRestore);
			},
		),
		