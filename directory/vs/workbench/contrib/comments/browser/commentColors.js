import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/languages.js';
import '../../../../editor/contrib/peekView/browser/peekView.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/colorRegistry.js';
define(de[1237], he([1, 0, 74, 255, 4, 51]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$A3b = e.$z3b = e.$y3b = e.$x3b = e.$w3b = void 0),
				(e.$B3b = c),
				(e.$C3b = n),
				(t = mt(t)),
				(w = mt(w));
			const C = (0, E.$wP)(
					"commentsView.resolvedIcon",
					{ dark: E.$JP, light: E.$JP, hcDark: E.$OP, hcLight: E.$OP },
					w.localize(4990, null),
				),
				d = (0, E.$wP)(
					"commentsView.unresolvedIcon",
					{ dark: E.$CS, light: E.$CS, hcDark: E.$OP, hcLight: E.$OP },
					w.localize(4991, null),
				);
			(0, E.$wP)(
				"editorCommentsWidget.replyInputBackground",
				i.$0Mb,
				w.localize(4992, null),
			);
			const m = (0, E.$wP)(
					"editorCommentsWidget.resolvedBorder",
					{ dark: C, light: C, hcDark: E.$OP, hcLight: E.$OP },
					w.localize(4993, null),
				),
				r = (0, E.$wP)(
					"editorCommentsWidget.unresolvedBorder",
					{ dark: d, light: d, hcDark: E.$OP, hcLight: E.$OP },
					w.localize(4994, null),
				);
			(e.$w3b = (0, E.$wP)(
				"editorCommentsWidget.rangeBackground",
				(0, E.$BP)(r, 0.1),
				w.localize(4995, null),
			)),
				(e.$x3b = (0, E.$wP)(
					"editorCommentsWidget.rangeActiveBackground",
					(0, E.$BP)(r, 0.1),
					w.localize(4996, null),
				));
			const u = new Map([
					[t.CommentThreadState.Unresolved, r],
					[t.CommentThreadState.Resolved, m],
				]),
				a = new Map([
					[t.CommentThreadState.Unresolved, d],
					[t.CommentThreadState.Resolved, C],
				]);
			(e.$y3b = "--comment-thread-state-color"),
				(e.$z3b = "--comment-view-thread-state-color"),
				(e.$A3b = "--comment-thread-state-background-color");
			function h(g, p, o) {
				const f = g !== void 0 ? o.get(g) : void 0;
				return f !== void 0 ? p.getColor(f) : void 0;
			}
			function c(g, p) {
				return h(g, p, u);
			}
			function n(g, p) {
				return h(g, p, a);
			}
		}),
		