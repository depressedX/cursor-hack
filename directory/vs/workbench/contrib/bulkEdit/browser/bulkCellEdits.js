define(
			de[572],
			he([1, 0, 24, 37, 28, 9, 199, 108, 70, 509, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$iJb = e.$hJb = void 0);
				class a extends C.$szb {
					static is(n) {
						return n instanceof a
							? !0
							: E.URI.isUri(n.resource) && (0, w.$ng)(n.cellEdit);
					}
					static lift(n) {
						return n instanceof a
							? n
							: new a(n.resource, n.cellEdit, n.notebookVersionId, n.metadata);
					}
					constructor(n, g, p = void 0, o) {
						super(o),
							(this.resource = n),
							(this.cellEdit = g),
							(this.notebookVersionId = p);
					}
				}
				e.$hJb = a;
				let h = class {
					constructor(n, g, p, o, f, b, s) {
						(this.c = n),
							(this.d = p),
							(this.f = o),
							(this.g = f),
							(this.h = b),
							(this.i = s),
							(this.g = this.g.map((l) => {
								if (l.resource.scheme === m.CellUri.scheme) {
									const y = m.CellUri.parse(l.resource)?.notebook;
									if (!y)
										throw new Error(`Invalid notebook URI: ${l.resource}`);
									return new a(y, l.cellEdit, l.notebookVersionId, l.metadata);
								} else return l;
							}));
					}
					async apply() {
						const n = [],
							g = (0, t.$Db)(this.g, (p, o) =>
								(0, i.$Ff)(p.resource.toString(), o.resource.toString()),
							);
						for (const p of g) {
							if (this.f.isCancellationRequested) break;
							const [o] = p,
								f = await this.i.resolve(o.resource);
							if (
								typeof o.notebookVersionId == "number" &&
								f.object.notebook.versionId !== o.notebookVersionId
							)
								throw (
									(f.dispose(),
									new Error(
										`Notebook '${o.resource}' has changed in the meantime`,
									))
								);
							const b = p.map(($) => $.cellEdit),
								s = !f.object.isReadonly(),
								l = (0, d.$eJb)(this.h.activeEditorPane),
								y =
									l?.textModel?.uri.toString() ===
									f.object.notebook.uri.toString()
										? {
												kind: m.SelectionStateType.Index,
												focus: l.getFocus(),
												selections: l.getSelections(),
											}
										: void 0;
							f.object.notebook.applyEdits(b, !0, y, () => {}, this.c, s),
								f.dispose(),
								this.d.report(void 0),
								n.push(o.resource);
						}
						return n;
					}
				};
				(e.$iJb = h), (e.$iJb = h = Ne([j(5, u.$IY), j(6, r.$OIb)], h));
			},
		),
		