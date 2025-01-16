define(
			de[3833],
			he([1, 0, 4, 14, 11, 146, 8, 802]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.collapse",
									title: (0, t.localize)(8285, null),
									f1: !1,
									icon: i.$ak.collapseAll,
									menu: {
										id: w.$XX.ViewTitle,
										group: "navigation",
										when: C.$Kj.and(
											C.$Kj.equals("view", d.IOutlinePane.Id),
											d.$F4b.isEqualTo(!1),
										),
									},
								});
							}
							runInView(r, u) {
								u.collapseAll();
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.expand",
									title: (0, t.localize)(8286, null),
									f1: !1,
									icon: i.$ak.expandAll,
									menu: {
										id: w.$XX.ViewTitle,
										group: "navigation",
										when: C.$Kj.and(
											C.$Kj.equals("view", d.IOutlinePane.Id),
											d.$F4b.isEqualTo(!0),
										),
									},
								});
							}
							runInView(r, u) {
								u.expandAll();
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.followCursor",
									title: (0, t.localize)(8287, null),
									f1: !1,
									toggled: d.$C4b,
									menu: {
										id: w.$XX.ViewTitle,
										group: "config",
										order: 1,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.followCursor =
									!u.outlineViewState.followCursor;
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.filterOnType",
									title: (0, t.localize)(8288, null),
									f1: !1,
									toggled: d.$D4b,
									menu: {
										id: w.$XX.ViewTitle,
										group: "config",
										order: 2,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.filterOnType =
									!u.outlineViewState.filterOnType;
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.sortByPosition",
									title: (0, t.localize)(8289, null),
									f1: !1,
									toggled: d.$E4b.isEqualTo(d.OutlineSortOrder.ByPosition),
									menu: {
										id: w.$XX.ViewTitle,
										group: "sort",
										order: 1,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.sortBy = d.OutlineSortOrder.ByPosition;
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.sortByName",
									title: (0, t.localize)(8290, null),
									f1: !1,
									toggled: d.$E4b.isEqualTo(d.OutlineSortOrder.ByName),
									menu: {
										id: w.$XX.ViewTitle,
										group: "sort",
										order: 2,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.sortBy = d.OutlineSortOrder.ByName;
							}
						},
					),
					(0, w.$4X)(
						class extends E.$WMb {
							constructor() {
								super({
									viewId: d.IOutlinePane.Id,
									id: "outline.sortByKind",
									title: (0, t.localize)(8291, null),
									f1: !1,
									toggled: d.$E4b.isEqualTo(d.OutlineSortOrder.ByKind),
									menu: {
										id: w.$XX.ViewTitle,
										group: "sort",
										order: 3,
										when: C.$Kj.equals("view", d.IOutlinePane.Id),
									},
								});
							}
							runInView(r, u) {
								u.outlineViewState.sortBy = d.OutlineSortOrder.ByKind;
							}
						},
					);
			},
		),
		