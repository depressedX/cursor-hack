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
		define(
			de[1723],
			he([1, 0, 4, 97, 56, 64, 122, 51, 35, 74]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jpc = e.$ipc = void 0),
					(t = mt(t)),
					(e.$ipc = (0, d.$wP)(
						"editorGutter.commentRangeForeground",
						{
							dark: (0, d.$CP)(d.$HS, d.$8P),
							light: (0, d.$zP)((0, d.$CP)(d.$HS, d.$8P), 0.05),
							hcDark: i.$UL.white,
							hcLight: i.$UL.black,
						},
						t.localize(4997, null),
					));
				const u = (0, d.$wP)(
						"editorOverviewRuler.commentForeground",
						e.$ipc,
						t.localize(4998, null),
					),
					a = (0, d.$wP)(
						"editorOverviewRuler.commentUnresolvedForeground",
						u,
						t.localize(4999, null),
					),
					h = (0, d.$wP)(
						"editorGutter.commentGlyphForeground",
						{
							dark: d.$9P,
							light: d.$9P,
							hcDark: i.$UL.black,
							hcLight: i.$UL.white,
						},
						t.localize(5e3, null),
					);
				(0, d.$wP)(
					"editorGutter.commentUnresolvedGlyphForeground",
					h,
					t.localize(5001, null),
				);
				class c {
					static {
						this.description = "comment-glyph-widget";
					}
					constructor(g, p) {
						(this.e = this.f()),
							(this.b = g),
							(this.d = this.b.createDecorationsCollection()),
							this.setLineNumber(p);
					}
					f() {
						const g = this.c === r.CommentThreadState.Unresolved,
							p = {
								description: c.description,
								isWholeLine: !0,
								overviewRuler: {
									color: (0, m.$jP)(g ? a : u),
									position: E.OverviewRulerLane.Center,
								},
								collapseOnReplaceEdit: !0,
								linesDecorationsClassName: `comment-range-glyph comment-thread${g ? "-unresolved" : ""}`,
							};
						return C.$eY.createDynamic(p);
					}
					setThreadState(g) {
						this.c !== g && ((this.c = g), (this.e = this.f()), this.g());
					}
					g() {
						const g = [
							{
								range: {
									startLineNumber: this.a,
									startColumn: 1,
									endLineNumber: this.a,
									endColumn: 1,
								},
								options: this.e,
							},
						];
						this.d.set(g);
					}
					setLineNumber(g) {
						(this.a = g), this.g();
					}
					getPosition() {
						const g = this.d.length > 0 ? this.d.getRange(0) : null;
						return {
							position: { lineNumber: g ? g.endLineNumber : this.a, column: 1 },
							preference: [w.ContentWidgetPositionPreference.EXACT],
						};
					}
					dispose() {
						this.d.clear();
					}
				}
				e.$jpc = c;
			},
		),
		