define(de[56], he([1, 0, 98]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.DiffEditorState =
					e.MouseTargetType =
					e.OverlayWidgetPositionPreference =
					e.ContentWidgetPositionPreference =
						void 0),
				(e.$0sb = d),
				(e.$$sb = m),
				(e.$_sb = r),
				(e.$atb = u),
				(e.$btb = a),
				(e.$ctb = h),
				(t = mt(t));
			var i;
			(function (c) {
				(c[(c.EXACT = 0)] = "EXACT"),
					(c[(c.ABOVE = 1)] = "ABOVE"),
					(c[(c.BELOW = 2)] = "BELOW");
			})(i || (e.ContentWidgetPositionPreference = i = {}));
			var w;
			(function (c) {
				(c[(c.TOP_RIGHT_CORNER = 0)] = "TOP_RIGHT_CORNER"),
					(c[(c.BOTTOM_RIGHT_CORNER = 1)] = "BOTTOM_RIGHT_CORNER"),
					(c[(c.TOP_CENTER = 2)] = "TOP_CENTER"),
					(c[(c.BOTTOM_CENTER = 3)] = "BOTTOM_CENTER");
			})(w || (e.OverlayWidgetPositionPreference = w = {}));
			var E;
			(function (c) {
				(c[(c.UNKNOWN = 0)] = "UNKNOWN"),
					(c[(c.TEXTAREA = 1)] = "TEXTAREA"),
					(c[(c.GUTTER_GLYPH_MARGIN = 2)] = "GUTTER_GLYPH_MARGIN"),
					(c[(c.GUTTER_LINE_NUMBERS = 3)] = "GUTTER_LINE_NUMBERS"),
					(c[(c.GUTTER_LINE_DECORATIONS = 4)] = "GUTTER_LINE_DECORATIONS"),
					(c[(c.GUTTER_VIEW_ZONE = 5)] = "GUTTER_VIEW_ZONE"),
					(c[(c.CONTENT_TEXT = 6)] = "CONTENT_TEXT"),
					(c[(c.CONTENT_EMPTY = 7)] = "CONTENT_EMPTY"),
					(c[(c.CONTENT_VIEW_ZONE = 8)] = "CONTENT_VIEW_ZONE"),
					(c[(c.CONTENT_WIDGET = 9)] = "CONTENT_WIDGET"),
					(c[(c.OVERVIEW_RULER = 10)] = "OVERVIEW_RULER"),
					(c[(c.SCROLLBAR = 11)] = "SCROLLBAR"),
					(c[(c.OVERLAY_WIDGET = 12)] = "OVERLAY_WIDGET"),
					(c[(c.OUTSIDE_EDITOR = 13)] = "OUTSIDE_EDITOR");
			})(E || (e.MouseTargetType = E = {}));
			var C;
			(function (c) {
				(c[(c.Idle = 0)] = "Idle"),
					(c[(c.ComputingDiff = 1)] = "ComputingDiff"),
					(c[(c.DiffComputed = 2)] = "DiffComputed");
			})(C || (e.DiffEditorState = C = {}));
			function d(c) {
				return c && typeof c.getEditorType == "function"
					? c.getEditorType() === t.EditorType.ICodeEditor
					: !1;
			}
			function m(c) {
				return c && typeof c.getEditorType == "function"
					? c.getEditorType() === t.EditorType.IDiffEditor
					: !1;
			}
			function r(c) {
				return c && typeof c.getEditorType == "function"
					? c.getEditorType() === t.EditorType.InlineMultiDiffEditor
					: !1;
			}
			function u(c) {
				return (
					!!c &&
					typeof c == "object" &&
					typeof c.onDidChangeActiveEditor == "function"
				);
			}
			function a(c) {
				return d(c)
					? c
					: m(c)
						? c.getModifiedEditor()
						: u(c) && d(c.activeCodeEditor)
							? c.activeCodeEditor
							: null;
			}
			function h(c) {
				return d(c) || m(c) ? c : null;
			}
		}),
		