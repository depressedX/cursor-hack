define(
			de[4241],
			he([1, 0, 97, 3, 17, 7, 98, 255, 5, 45, 35, 4240, 66, 18, 4136]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yed = p),
					(E = mt(E));
				let g = class extends d.$9Mb {
					constructor(f, b, s, l, y, $, v, S, I) {
						super(
							f,
							{
								showFrame: !0,
								showArrow: !0,
								isResizeable: !0,
								isAccessible: !0,
							},
							v,
						),
							(this.cb = b),
							(this.db = s),
							(this.eb = l),
							(this.fb = S),
							(this.gb = I),
							(this.a = new i.$Zc()),
							(this.r = []),
							(this.Z = null);
						const T = this.fb.nonPersistentStorage.reviewState.chunks[s];
						if (!T) {
							console.error("[ai review] Review chunk not found! Aborting...");
							return;
						}
						const P = T.threads.find((k) => k.id === l);
						if (!P) {
							console.error("[ai review] Bug not found! Aborting...");
							return;
						}
						(this.ab = T),
							(this.bb = P),
							(this.b = f),
							(this.c = y),
							(this.d = $),
							this.create(),
							this.hb(this.c.getColorTheme()),
							this.o.add(this.c.onDidColorThemeChange(this.hb, this)),
							this.o.add(this.a),
							this.o.add(this.gb.onDidChangeActiveGroup(() => this.dispose())),
							this.o.add(this.b.onDidDispose(() => this.dispose())),
							this.o.add(this.b.onDidChangeModel(() => this.dispose())),
							this.kb();
					}
					hb(f) {
						const b = f.getColor(d.$aNb) || t.$UL.transparent;
						this.style({
							arrowColor: b,
							frameColor: b,
							headerBackgroundColor: f.getColor(d.$0Mb) || t.$UL.transparent,
							primaryHeadingColor: f.getColor(d.$$Mb),
							secondaryHeadingColor: f.getColor(d.$_Mb),
						});
					}
					P(f) {
						const b = E.$(".ai-review-peek-view-title", {});
						f.appendChild(b),
							(f.style.zIndex = "1000"),
							(f.style.position = "relative"),
							(this.i = b),
							super.P(f);
					}
					T(f) {
						this.m = f;
					}
					dispose() {
						this.a.dispose(), this.lb(), super.dispose();
					}
					kb() {
						if (!this.x) {
							this.editor.revealLineInCenterIfOutsideViewport(
								this.cb.lineNumber,
								C.ScrollType.Smooth,
							),
								super.show(w.$iL.fromPositions(this.cb), 12),
								this.a.add(
									(0, n.$xed)(this.i, this.M, {
										reviewChunkId: this.db,
										threadId: this.eb,
										closePeekView: () => this.dispose(),
									}),
								),
								this.a.add(
									(0, a.$ved)(this.m, this.M, {
										reviewChunkId: this.db,
										threadId: this.eb,
									}),
								);
							const f = this.b.getModel();
							f &&
								this.X &&
								this.Y &&
								(this.lb(),
								(this.r = f.deltaDecorations(this.r, [
									{
										range: new w.$iL(this.X, 1, this.Y, 1e3),
										options: {
											className: "ai-review-peek-view-highlight",
											description: "AiReviewPeekViewHighlight",
											isWholeLine: !0,
										},
									},
								]))),
								(this.Z = f),
								(this.x = !0);
						}
					}
					lb() {
						this.Z &&
							(this.Z.deltaDecorations(this.r, []),
							(this.Z = null),
							(this.r.length = 0));
					}
				};
				g = Ne(
					[j(4, u.$iP), j(5, c.$IY), j(6, m.$Li), j(7, r.$0zb), j(8, h.$EY)],
					g,
				);
				function p(o, f, b, s, l) {
					return l.createInstance(g, o, s, f, b);
				}
			},
		),
		