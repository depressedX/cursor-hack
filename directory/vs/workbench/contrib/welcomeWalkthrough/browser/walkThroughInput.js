define(
			de[1277],
			he([1, 0, 223, 416, 42, 434, 19, 1276, 44, 5, 23]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				var a;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$oYc = void 0);
				class h extends i.$PO {
					constructor(g, p) {
						super(), (this.a = g), (this.b = p);
					}
					get main() {
						return this.a;
					}
					get snippets() {
						return this.b.map((g) => g.object);
					}
					dispose() {
						this.b.forEach((g) => g.dispose()), super.dispose();
					}
				}
				let c = (a = class extends t.$LO {
					get capabilities() {
						return m.EditorInputCapabilities.Singleton | super.capabilities;
					}
					get resource() {
						return this.m.resource;
					}
					constructor(g, p, o) {
						super(),
							(this.m = g),
							(this.n = p),
							(this.q = o),
							(this.a = null),
							(this.c = 0),
							(this.h = 0);
					}
					get typeId() {
						return this.m.typeId;
					}
					getName() {
						return this.m.name;
					}
					getDescription() {
						return this.m.description || "";
					}
					getTelemetryFrom() {
						return this.m.telemetryFrom;
					}
					getTelemetryDescriptor() {
						const g = super.getTelemetryDescriptor();
						return (g.target = this.getTelemetryFrom()), g;
					}
					get onReady() {
						return this.m.onReady;
					}
					get layout() {
						return this.m.layout;
					}
					resolve() {
						return (
							this.a ||
								(this.a = (0, d.$mYc)(this.n, this.m.resource).then((g) => {
									if (this.resource.path.endsWith(".html")) return new h(g, []);
									const p = [];
									let o = 0;
									const f = new E.marked.Renderer();
									return (
										(f.code = ({ lang: b }) => {
											o++;
											const s = this.m.resource.with({
												scheme: u.Schemas.walkThroughSnippet,
												fragment: `${o}.${b}`,
											});
											return (
												p.push(this.q.createModelReference(s)),
												`<div id="snippet-${s.fragment}" class="walkThroughEditorContainer" ></div>`
											);
										}),
										(g = (0, E.marked)(g, { async: !1, renderer: f })),
										Promise.all(p).then((b) => new h(g, b))
									);
								})),
							this.a
						);
					}
					matches(g) {
						return super.matches(g)
							? !0
							: g instanceof a
								? (0, C.$gh)(g.m.resource, this.m.resource)
								: !1;
					}
					dispose() {
						this.a && (this.a.then((g) => g.dispose()), (this.a = null)),
							super.dispose();
					}
					relativeScrollPosition(g, p) {
						(this.c = Math.max(this.c, g)), (this.h = Math.max(this.h, p));
					}
				});
				(e.$oYc = c), (e.$oYc = c = a = Ne([j(1, r.$Li), j(2, w.$MO)], c));
			},
		),
		