define(
			de[4064],
			he([1, 0, 7, 6, 3, 37, 17, 42, 11, 8, 5, 979, 1354, 845, 283]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$tUb = e.$sUb = void 0),
					(t = mt(t));
				const g = t.$;
				let p = class extends w.$1c {
					constructor(b, s, l, y = !1, $ = 0, v, S, I, T, P, k, L) {
						super(),
							(this.c = b),
							(this.f = l),
							(this.g = I),
							(this.h = k),
							(this.a = []),
							(this.b = this.D(new i.$re())),
							(this.onDidChangeHeight = this.b.event),
							(this.codeblocks = []);
						const D = s.element,
							M = L.createInstance(h.$qUb),
							N = [];
						let A = $;
						const R = this.D(
							v.render(b, {
								fillInIncompleteTokens: y,
								codeBlockRendererSync: (O, B) => {
									const U = A++;
									let z, F, x;
									if ((0, E.$Mf)(O, c.$AYb))
										try {
											const G = (0, c.$BYb)(B);
											(F = G.range && C.$iL.lift(G.range)),
												(z = this.h
													.createModelReference(G.uri)
													.then((K) => K.object));
										} catch {
											return g("div");
										}
									else {
										if (!(0, n.$0Tb)(D) && !(0, n.$$Tb)(D))
											return (
												console.error(
													"Trying to render code block in welcome",
													D.id,
													U,
												),
												g("div")
											);
										const G =
												(0, n.$$Tb)(D) || (0, n.$0Tb)(D) ? D.sessionId : "",
											K = this.g.getOrCreate(G, D, U);
										(x = K.vulns), (z = K.model);
									}
									const H =
											(0, n.$$Tb)(D) && D.errorDetails?.responseIsFiltered,
										q = this.j(
											{
												languageId: O,
												textModel: z,
												codeBlockIndex: U,
												element: D,
												range: F,
												hideToolbar: H,
												parentContextKeyService: P,
												vulns: x,
											},
											B,
											S,
											T.editableCodeBlock,
										);
									this.a.push(q),
										this.D(
											q.object.onDidChangeContentHeight(() => this.b.fire()),
										);
									const V = {
										codeBlockIndex: U,
										element: D,
										focus() {
											q.object.focus();
										},
										uri: q.object.uri,
									};
									return this.codeblocks.push(V), N.push(q), q.object.element;
								},
								asyncRenderCallback: () => this.b.fire(),
							}),
						);
						this.D(M.walkTreeAndAnnotateReferenceLinks(R.element)),
							N.reverse().forEach((O) => this.D(O)),
							(this.domNode = R.element);
					}
					j(b, s, l, y) {
						const $ = this.f.get(),
							v = $.object;
						return (
							(0, n.$$Tb)(b.element) &&
								this.g.update(
									b.element.sessionId,
									b.element,
									b.codeBlockIndex,
									{ text: s, languageId: b.languageId },
								),
							v.render(b, l, y),
							$
						);
					}
					hasSameContent(b) {
						return (
							b.kind === "markdownContent" && b.content.value === this.c.value
						);
					}
					layout(b) {
						this.a.forEach((s) => s.object.layout(b));
					}
					addDisposable(b) {
						this.D(b);
					}
				};
				(e.$sUb = p),
					(e.$sUb = p = Ne([j(9, r.$6j), j(10, d.$MO), j(11, u.$Li)], p));
				let o = class extends w.$1c {
					inUse() {
						return this.a.inUse;
					}
					constructor(b, s, l, y) {
						super(),
							(this.a = this.D(
								new a.$hUb(() =>
									y.createInstance(c.$CYb, b, m.$XX.ChatCodeBlock, s, l),
								),
							));
					}
					get() {
						const b = this.a.get();
						let s = !1;
						return {
							object: b,
							isStale: () => s,
							dispose: () => {
								b.reset(), (s = !0), this.a.release(b);
							},
						};
					}
				};
				(e.$tUb = o), (e.$tUb = o = Ne([j(3, u.$Li)], o));
			},
		),
		