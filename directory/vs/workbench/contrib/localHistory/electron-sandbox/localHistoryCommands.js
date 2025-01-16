define(
			de[3882],
			he([1, 0, 4, 717, 11, 1246, 1341, 12, 110, 8, 23, 100]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
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
		),
		