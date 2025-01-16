define(de[108], he([1, 0, 70, 360, 442]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.CellFoldingState =
					e.CursorAtLineBoundary =
					e.CursorAtBoundary =
					e.CellFocusMode =
					e.CellEditState =
					e.CellRevealRangeType =
					e.CellRevealType =
					e.NotebookOverviewRulerLane =
					e.CellLayoutContext =
					e.CellLayoutState =
					e.ScrollToRevealBehavior =
					e.RenderOutputType =
					e.$dJb =
					e.$cJb =
					e.$bJb =
					e.$aJb =
					e.$_Ib =
					e.$$Ib =
					e.$0Ib =
					e.$9Ib =
					e.$8Ib =
					e.$7Ib =
						void 0),
				(e.$eJb = p),
				(e.$fJb = o),
				(e.$gJb = f),
				(e.$7Ib = "notebook.cell.expandCellInput"),
				(e.$8Ib = "notebook.cell.execute"),
				(e.$9Ib = "notebook.cell.detectLanguage"),
				(e.$0Ib = "notebook.cell.changeLanguage"),
				(e.$$Ib = "notebook.cell.quitEdit"),
				(e.$_Ib = "notebook.cell.expandCellOutput"),
				(e.$aJb = "jupyter-notebook"),
				(e.$bJb = "ms-toolsai.jupyter"),
				(e.$cJb = new Map([[e.$aJb, e.$bJb]])),
				(e.$dJb = new Map()),
				e.$dJb.set(e.$aJb, new Map()),
				e.$dJb
					.get(e.$aJb)
					?.set("python", {
						extensionIds: ["ms-python.python", e.$bJb],
						displayName: "Python + Jupyter",
					});
			var E;
			(function (s) {
				(s[(s.Html = 0)] = "Html"), (s[(s.Extension = 1)] = "Extension");
			})(E || (e.RenderOutputType = E = {}));
			var C;
			(function (s) {
				(s[(s.fullCell = 0)] = "fullCell"),
					(s[(s.firstLine = 1)] = "firstLine");
			})(C || (e.ScrollToRevealBehavior = C = {}));
			var d;
			(function (s) {
				(s[(s.Uninitialized = 0)] = "Uninitialized"),
					(s[(s.Estimated = 1)] = "Estimated"),
					(s[(s.FromCache = 2)] = "FromCache"),
					(s[(s.Measured = 3)] = "Measured");
			})(d || (e.CellLayoutState = d = {}));
			var m;
			(function (s) {
				s[(s.Fold = 0)] = "Fold";
			})(m || (e.CellLayoutContext = m = {}));
			var r;
			(function (s) {
				(s[(s.Left = 1)] = "Left"),
					(s[(s.Center = 2)] = "Center"),
					(s[(s.Right = 4)] = "Right"),
					(s[(s.Full = 7)] = "Full");
			})(r || (e.NotebookOverviewRulerLane = r = {}));
			var u;
			(function (s) {
				(s[(s.Default = 1)] = "Default"),
					(s[(s.Top = 2)] = "Top"),
					(s[(s.Center = 3)] = "Center"),
					(s[(s.CenterIfOutsideViewport = 4)] = "CenterIfOutsideViewport"),
					(s[(s.NearTopIfOutsideViewport = 5)] = "NearTopIfOutsideViewport"),
					(s[(s.FirstLineIfOutsideViewport = 6)] =
						"FirstLineIfOutsideViewport");
			})(u || (e.CellRevealType = u = {}));
			var a;
			(function (s) {
				(s[(s.Default = 1)] = "Default"),
					(s[(s.Center = 2)] = "Center"),
					(s[(s.CenterIfOutsideViewport = 3)] = "CenterIfOutsideViewport");
			})(a || (e.CellRevealRangeType = a = {}));
			var h;
			(function (s) {
				(s[(s.Preview = 0)] = "Preview"), (s[(s.Editing = 1)] = "Editing");
			})(h || (e.CellEditState = h = {}));
			var c;
			(function (s) {
				(s[(s.Container = 0)] = "Container"),
					(s[(s.Editor = 1)] = "Editor"),
					(s[(s.Output = 2)] = "Output"),
					(s[(s.ChatInput = 3)] = "ChatInput");
			})(c || (e.CellFocusMode = c = {}));
			var n;
			(function (s) {
				(s[(s.None = 0)] = "None"),
					(s[(s.Top = 1)] = "Top"),
					(s[(s.Bottom = 2)] = "Bottom"),
					(s[(s.Both = 3)] = "Both");
			})(n || (e.CursorAtBoundary = n = {}));
			var g;
			(function (s) {
				(s[(s.None = 0)] = "None"),
					(s[(s.Start = 1)] = "Start"),
					(s[(s.End = 2)] = "End"),
					(s[(s.Both = 3)] = "Both");
			})(g || (e.CursorAtLineBoundary = g = {}));
			function p(s) {
				if (!s) return;
				if (s.getId() === t.$O6) return s.getControl();
				const l = s.input;
				if (l && (0, i.$UIb)(l)) return s.getControl()?.notebookEditor;
			}
			function o(s, l) {
				const y = (0, w.$j6)(l),
					$ = [];
				return (
					y.forEach((v) => {
						if (!s.cellAt(v)) return;
						const I = s.getViewIndexByModelIndex(v);
						if (I < 0) return;
						const T = I + 1,
							P = s.getCellRangeFromViewRange(I, T);
						P && $.push(P);
					}),
					(0, w.$k6)($)
				);
			}
			function f(s, l) {
				const y = [];
				return (
					(0, w.$k6)(l).forEach(($) => {
						y.push(...s.getCellsInRange($));
					}),
					y
				);
			}
			var b;
			(function (s) {
				(s[(s.None = 0)] = "None"),
					(s[(s.Expanded = 1)] = "Expanded"),
					(s[(s.Collapsed = 2)] = "Collapsed");
			})(b || (e.CellFoldingState = b = {}));
		}),
		