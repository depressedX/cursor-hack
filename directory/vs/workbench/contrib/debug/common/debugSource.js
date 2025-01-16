define(
			de[826],
			he([1, 0, 4, 9, 54, 19, 112, 18, 23, 396, 116]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$z3 = e.$y3 = void 0),
					(e.$A3 = h),
					(t = mt(t)),
					(E = mt(E)),
					(e.$y3 = t.localize(5901, null));
				class a {
					constructor(n, g, p, o) {
						let f;
						n
							? ((this.raw = n),
								(f = this.raw.path || this.raw.name || ""),
								(this.available = !0))
							: ((this.raw = { name: e.$y3 }),
								(this.available = !1),
								(f = `${C.$25}:${e.$y3}`)),
							(this.uri = h(this.raw, f, g, p, o));
					}
					get name() {
						return this.raw.name || E.$jh(this.uri);
					}
					get origin() {
						return this.raw.origin;
					}
					get presentationHint() {
						return this.raw.presentationHint;
					}
					get reference() {
						return this.raw.sourceReference;
					}
					get inMemory() {
						return this.uri.scheme === C.$25;
					}
					openInEditor(n, g, p, o, f) {
						return this.available
							? n.openEditor(
									{
										resource: this.uri,
										description: this.origin,
										options: {
											preserveFocus: p,
											selection: g,
											revealIfOpened: !0,
											selectionRevealType:
												u.TextEditorSelectionRevealType.CenterIfOutsideViewport,
											pinned: f,
										},
									},
									o ? d.$KY : d.$JY,
								)
							: Promise.resolve(void 0);
					}
					static getEncodedDebugData(n) {
						let g, p, o;
						switch (n.scheme) {
							case m.Schemas.file:
								g = (0, w.$mc)(n.fsPath);
								break;
							case C.$25:
								if (((g = n.path), n.query)) {
									const f = n.query.split("&");
									for (const b of f) {
										const s = b.split("=");
										if (s.length === 2)
											switch (s[0]) {
												case "session":
													o = s[1];
													break;
												case "ref":
													p = parseInt(s[1]);
													break;
											}
									}
								}
								break;
							default:
								g = n.toString();
								break;
						}
						return {
							name: E.$jh(n),
							path: g,
							sourceReference: p,
							sessionId: o,
						};
					}
				}
				e.$z3 = a;
				function h(c, n, g, p, o) {
					const f = (b) =>
						typeof c.sourceReference == "number" && c.sourceReference > 0
							? i.URI.from({
									scheme: C.$25,
									path: b?.replace(/^\/+/g, "/"),
									query: `session=${g}&ref=${c.sourceReference}`,
								})
							: b && (0, r.$s3)(b)
								? p.asCanonicalUri(i.URI.parse(b))
								: b && (0, w.$nc)(b)
									? p.asCanonicalUri(i.URI.file(b))
									: p.asCanonicalUri(
											i.URI.from({
												scheme: C.$25,
												path: b,
												query: `session=${g}`,
											}),
										);
					try {
						return f(n);
					} catch {
						return (
							o.error("Invalid path from debug adapter: " + n),
							f("/invalidDebugSource")
						);
					}
				}
			},
		),
		