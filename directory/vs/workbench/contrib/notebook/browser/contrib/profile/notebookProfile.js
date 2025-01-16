define(de[3469], he([1, 0, 4, 11, 10, 70]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.NotebookProfileType = void 0);
			var C;
			(function (u) {
				(u.default = "default"), (u.jupyter = "jupyter"), (u.colab = "colab");
			})(C || (e.NotebookProfileType = C = {}));
			const d = {
				[C.default]: {
					[E.$56.focusIndicator]: "gutter",
					[E.$56.insertToolbarLocation]: "both",
					[E.$56.globalToolbar]: !0,
					[E.$56.cellToolbarLocation]: { default: "right" },
					[E.$56.compactView]: !0,
					[E.$56.showCellStatusBar]: "visible",
					[E.$56.consolidatedRunButton]: !0,
					[E.$56.undoRedoPerCell]: !1,
				},
				[C.jupyter]: {
					[E.$56.focusIndicator]: "gutter",
					[E.$56.insertToolbarLocation]: "notebookToolbar",
					[E.$56.globalToolbar]: !0,
					[E.$56.cellToolbarLocation]: { default: "left" },
					[E.$56.compactView]: !0,
					[E.$56.showCellStatusBar]: "visible",
					[E.$56.consolidatedRunButton]: !1,
					[E.$56.undoRedoPerCell]: !0,
				},
				[C.colab]: {
					[E.$56.focusIndicator]: "border",
					[E.$56.insertToolbarLocation]: "betweenCells",
					[E.$56.globalToolbar]: !1,
					[E.$56.cellToolbarLocation]: { default: "right" },
					[E.$56.compactView]: !1,
					[E.$56.showCellStatusBar]: "hidden",
					[E.$56.consolidatedRunButton]: !0,
					[E.$56.undoRedoPerCell]: !1,
				},
			};
			async function m(u, a) {
				const h = [];
				for (const c in a) h.push(u.updateValue(c, a[c]));
				await Promise.all(h);
			}
			(0, i.$4X)(
				class extends i.$3X {
					constructor() {
						super({
							id: "notebook.setProfile",
							title: (0, t.localize)(7810, null),
						});
					}
					async run(u, a) {
						if (!r(a)) return;
						const h = u.get(w.$gj);
						return m(h, d[a.profile]);
					}
				},
			);
			function r(u) {
				const a = u;
				return (
					a.profile === C.colab ||
					a.profile === C.default ||
					a.profile === C.jupyter
				);
			}
		}),
		