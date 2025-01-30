import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/workspace/common/workspace.js';
import './bugbotData.js';
import '../../../../../external/solid/store.js';
import '../../../../base/common/uuid.js';
import './constants.js';
define(
			de[3004],
			he([1, 0, 21, 25, 1718, 193, 47, 789]),
			function (ce /*require*/,
 e /*exports*/,
 t /*storage*/,
 i /*workspace*/,
 w /*bugbotData*/,
 E /*store*/,
 C /*uuid*/,
 d /*constants*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bdc = m),
					(e.$cdc = u);
				function m(a) {
					return a.getWorkbenchState() === i.WorkbenchState.EMPTY
						? t.StorageScope.APPLICATION
						: t.StorageScope.WORKSPACE;
				}
				function r(a) {
					let h = a.allBugBots.filter((c) => c.status.type === "completed");
					return (
						(h = h.map((c) => ({ ...(0, w.$_cc)(c.bugbotId), ...c }))),
						(h = h.sort((c, n) => {
							const g = c.lastUpdatedAt ?? c.createdAt;
							return (n.lastUpdatedAt ?? n.createdAt) - g;
						})),
						{ allBugBots: h, bugbotDataVersion: d.$9cc }
					);
				}
				function u(a, h, c, n) {
					const g = m(c);
					let p = a.get(n, g),
						o = { allBugBots: [], bugbotDataVersion: d.$9cc };
					if (p)
						try {
							let l = JSON.parse(p);
							l && (o = r(l));
						} catch (l) {
							console.error("[bugbot] Error parsing stored bugbots data:", l),
								(o = { allBugBots: [], bugbotDataVersion: d.$9cc });
						}
					console.log("[bugbot] allBugBotsInit", JSON.parse(JSON.stringify(o)));
					const [f, b] = (0, E.createStore)(o);
					return [
						f,
						b,
						() => {
							const l = (0, C.$9g)(),
								y = (0, w.$_cc)(l);
							return b("allBugBots", [y]), y;
						},
					];
				}
			},
		),
		