define(
			de[1003],
			he([1, 0, 17, 33, 945, 9, 48, 24, 29, 3, 31, 28, 67, 42]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$77 = e.$67 = e.TypeHierarchyDirection = void 0);
				var n;
				(function (f) {
					(f.Subtypes = "subtypes"), (f.Supertypes = "supertypes");
				})(n || (e.TypeHierarchyDirection = n = {})),
					(e.$67 = new w.$N1());
				class g {
					static async create(b, s, l) {
						const [y] = e.$67.ordered(b);
						if (!y) return;
						const $ = await y.prepareTypeHierarchy(b, s, l);
						if ($)
							return new g(
								$.roots.reduce((v, S) => v + S._sessionId, ""),
								y,
								$.roots,
								new r.$4c($),
							);
					}
					constructor(b, s, l, y) {
						(this.id = b),
							(this.provider = s),
							(this.roots = l),
							(this.ref = y),
							(this.root = l[0]);
					}
					dispose() {
						this.ref.release();
					}
					fork(b) {
						const s = this;
						return new (class extends g {
							constructor() {
								super(s.id, s.provider, [b], s.ref.acquire());
							}
						})();
					}
					async provideSupertypes(b, s) {
						try {
							const l = await this.provider.provideSupertypes(b, s);
							if ((0, d.$Pb)(l)) return l;
						} catch (l) {
							(0, m.$5)(l);
						}
						return [];
					}
					async provideSubtypes(b, s) {
						try {
							const l = await this.provider.provideSubtypes(b, s);
							if ((0, d.$Pb)(l)) return l;
						} catch (l) {
							(0, m.$5)(l);
						}
						return [];
					}
				}
				e.$77 = g;
				const p = new Map();
				u.$fk.registerCommand(
					"_executePrepareTypeHierarchy",
					async (f, ...b) => {
						const [s, l] = b;
						(0, a.$vg)(E.URI.isUri(s)), (0, a.$vg)(C.$hL.isIPosition(l));
						let $ = f.get(h.$QO).getModel(s),
							v;
						if (!$) {
							const I = await f.get(c.$MO).createModelReference(s);
							($ = I.object.textEditorModel), (v = I);
						}
						try {
							const S = await g.create($, l, i.CancellationToken.None);
							return S
								? (p.set(S.id, S),
									p.forEach((I, T, P) => {
										P.size > 10 && (I.dispose(), p.delete(T));
									}),
									[S.root])
								: [];
						} finally {
							v?.dispose();
						}
					},
				);
				function o(f) {
					const b = f;
					return (
						typeof f == "object" &&
						typeof b.name == "string" &&
						typeof b.kind == "number" &&
						E.URI.isUri(b.uri) &&
						t.$iL.isIRange(b.range) &&
						t.$iL.isIRange(b.selectionRange)
					);
				}
				u.$fk.registerCommand("_executeProvideSupertypes", async (f, ...b) => {
					const [s] = b;
					(0, a.$vg)(o(s));
					const l = p.get(s._sessionId);
					if (l) return l.provideSupertypes(s, i.CancellationToken.None);
				}),
					u.$fk.registerCommand("_executeProvideSubtypes", async (f, ...b) => {
						const [s] = b;
						(0, a.$vg)(o(s));
						const l = p.get(s._sessionId);
						if (l) return l.provideSubtypes(s, i.CancellationToken.None);
					});
			},
		),
		