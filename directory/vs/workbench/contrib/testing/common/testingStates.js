import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/objects.js';
import './testTypes.js';
define(de[563], he([1, 0, 82, 185]), function (ce /*require*/,
 e /*exports*/,
 t /*objects*/,
 i /*testTypes*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$C4 =
					e.$B4 =
					e.$A4 =
					e.$z4 =
					e.$y4 =
					e.$x4 =
					e.$w4 =
					e.$v4 =
					e.$u4 =
						void 0),
				(e.$u4 = {
					[i.TestResultState.Running]: 6,
					[i.TestResultState.Errored]: 5,
					[i.TestResultState.Failed]: 4,
					[i.TestResultState.Queued]: 3,
					[i.TestResultState.Passed]: 2,
					[i.TestResultState.Unset]: 0,
					[i.TestResultState.Skipped]: 1,
				});
			const w = (r) =>
				r === i.TestResultState.Errored || r === i.TestResultState.Failed;
			e.$v4 = w;
			const E = (r) =>
				r === i.TestResultState.Errored ||
				r === i.TestResultState.Failed ||
				r === i.TestResultState.Passed;
			(e.$w4 = E),
				(e.$x4 = (0, t.$Ho)(e.$u4, (r, u) => ({
					statusNode: !0,
					state: Number(u),
					priority: r,
				})));
			const C = (r, u) => e.$u4[u] - e.$u4[r];
			e.$y4 = C;
			const d = (...r) => {
				switch (r.length) {
					case 0:
						return i.TestResultState.Unset;
					case 1:
						return r[0];
					case 2:
						return e.$u4[r[0]] > e.$u4[r[1]] ? r[0] : r[1];
					default: {
						let u = r[0];
						for (let a = 1; a < r.length; a++)
							e.$u4[u] < e.$u4[r[a]] && (u = r[a]);
						return u;
					}
				}
			};
			(e.$z4 = d),
				(e.$A4 = Object.keys(e.$u4)
					.map((r) => Number(r))
					.sort(e.$y4)),
				(e.$B4 = {
					[i.TestResultState.Passed]: 0,
					[i.TestResultState.Skipped]: 1,
					[i.TestResultState.Failed]: 2,
					[i.TestResultState.Errored]: 3,
				});
			const m = () => new Uint32Array(e.$A4.length);
			e.$C4 = m;
		})
