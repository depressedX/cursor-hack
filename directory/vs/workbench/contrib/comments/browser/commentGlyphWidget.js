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
		