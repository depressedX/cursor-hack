import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../services/workingCopy/common/workingCopyHistory.js';
import '../../../../platform/actions/common/actions.js';
import '../browser/localHistory.js';
import '../browser/localHistoryCommands.js';
import '../../../../base/common/platform.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/network.js';
import '../../../common/contextkeys.js';
define(
			de[3882],
			he([1, 0, 4, 717, 11, 1246, 1341, 12, 110, 8, 23, 100]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*workingCopyHistory*/,
 w /*actions*/,
 E /*localHistory*/,
 C /*localHistoryCommands*/,
 d /*platform*/,
 m /*native*/,
 r /*contextkey*/,
 u /*network*/,
 a /*contextkeys*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, w.$4X)(
						class extends w.$3X {
							constructor() {
								super({
									id: "workbench.action.localHistory.revealInOS",
									title: d.$l
										? (0, t.localize2)(7392, "Reveal in File Explorer")
										: d.$m
											? (0, t.localize2)(7393, "Reveal in Finder")
											: (0, t.localize2)(7394, "Open Containing Folder"),
									menu: {
										id: w.$XX.TimelineItemContext,
										group: "4_reveal",
										order: 1,
										when: r.$Kj.and(
											E.$f2c,
											a.$BQb.Scheme.isEqualTo(u.Schemas.file),
										),
									},
								});
							}
							async run(h, c) {
								const n = h.get(i.$a2c),
									g = h.get(m.$y7c),
									{ entry: p } = await (0, C.$k2c)(n, c);
								p &&
									(await g.showItemInFolder(
										p.location.with({ scheme: u.Schemas.file }).fsPath,
									));
							}
						},
					);
			},
		)
