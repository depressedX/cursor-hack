define(
			de[2905],
			he([1, 0, 14, 1217, 71, 4, 11, 31, 8, 608]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, C.$4X)(i.$4yb),
					(0, C.$4X)(i.$5yb),
					(0, C.$4X)(i.$6yb),
					C.$ZX.appendMenuItem(C.$XX.EditorTitle, {
						command: {
							id: new i.$6yb().desc.id,
							title: (0, E.localize)(225, null),
							toggled: m.$Kj.has(
								"config.diffEditor.useInlineViewWhenSpaceIsLimited",
							),
							precondition: m.$Kj.has("isInDiffEditor"),
						},
						order: 11,
						group: "1_diff",
						when: m.$Kj.and(
							w.EditorContextKeys
								.diffEditorRenderSideBySideInlineBreakpointReached,
							m.$Kj.has("isInDiffEditor"),
						),
					}),
					C.$ZX.appendMenuItem(C.$XX.EditorTitle, {
						command: {
							id: new i.$5yb().desc.id,
							title: (0, E.localize)(226, null),
							icon: t.$ak.move,
							toggled: m.$Rj.create(
								"config.diffEditor.experimental.showMoves",
								!0,
							),
							precondition: m.$Kj.has("isInDiffEditor"),
						},
						order: 10,
						group: "1_diff",
						when: m.$Kj.has("isInDiffEditor"),
					}),
					(0, C.$4X)(i.$$yb);
				for (const r of [
					{
						icon: t.$ak.arrowRight,
						key: w.EditorContextKeys.diffEditorInlineMode.toNegated(),
					},
					{
						icon: t.$ak.discard,
						key: w.EditorContextKeys.diffEditorInlineMode,
					},
				])
					C.$ZX.appendMenuItem(C.$XX.DiffEditorHunkToolbar, {
						command: {
							id: new i.$$yb().desc.id,
							title: (0, E.localize)(227, null),
							icon: r.icon,
						},
						when: m.$Kj.and(
							w.EditorContextKeys.diffEditorModifiedWritable,
							r.key,
						),
						order: 5,
						group: "primary",
					}),
						C.$ZX.appendMenuItem(C.$XX.DiffEditorSelectionToolbar, {
							command: {
								id: new i.$$yb().desc.id,
								title: (0, E.localize)(228, null),
								icon: r.icon,
							},
							when: m.$Kj.and(
								w.EditorContextKeys.diffEditorModifiedWritable,
								r.key,
							),
							order: 5,
							group: "primary",
						});
				(0, C.$4X)(i.$7yb),
					(0, C.$4X)(i.$8yb),
					(0, C.$4X)(i.$9yb),
					(0, C.$4X)(i.$0yb),
					C.$ZX.appendMenuItem(C.$XX.EditorTitle, {
						command: {
							id: i.$_yb.id,
							title: (0, E.localize)(229, null),
							precondition: m.$Kj.has("isInDiffEditor"),
						},
						order: 10,
						group: "2_diff",
						when: m.$Kj.and(
							w.EditorContextKeys.accessibleDiffViewerVisible.negate(),
							m.$Kj.has("isInDiffEditor"),
						),
					}),
					d.$fk.registerCommandAlias(
						"editor.action.diffReview.next",
						i.$_yb.id,
					),
					(0, C.$4X)(i.$_yb),
					d.$fk.registerCommandAlias(
						"editor.action.diffReview.prev",
						i.$azb.id,
					),
					(0, C.$4X)(i.$azb);
			},
		),
		