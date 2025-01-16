define(de[553], he([1, 0, 3]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$DTc = void 0);
			class i extends t.$1c {
				constructor() {
					super(...arguments), (this.f = null);
				}
				get activated() {
					return this.f !== null;
				}
				activate() {
					return this.f || (this.f = this.c()), this.f;
				}
			}
			e.$DTc = i;
		}),
		define(
			de[3061],
			he([1, 0, 4, 187, 3, 74, 119, 17, 69]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$YTc = void 0);
				let r = class extends w.$1c {
					constructor(a, h) {
						super(),
							(this.a = a),
							this.D(
								h.completionProvider.register(
									{ language: "jsonc", pattern: "**/settings.json" },
									{
										_debugDisplayName: "extensionsCompletionProvider",
										provideCompletionItems: async (c, n, g, p) => {
											const o = (s, l) => {
													const y = s.getWordAtPosition(l);
													return y
														? new d.$iL(
																l.lineNumber,
																y.startColumn,
																l.lineNumber,
																y.endColumn,
															)
														: null;
												},
												f = (0, i.$co)(c.getValue(), c.getOffsetAt(n)),
												b = o(c, n) ?? d.$iL.fromPositions(n, n);
											if (
												f.path[0] === "extensions.supportUntrustedWorkspaces" &&
												f.path.length === 2 &&
												f.isAtPropertyKey
											) {
												let s = [];
												try {
													s = Object.keys(
														(0, i.$do)(c.getValue())[
															"extensions.supportUntrustedWorkspaces"
														],
													);
												} catch {}
												return { suggestions: await this.b(s, b) };
											}
											return { suggestions: [] };
										},
									},
								),
							);
					}
					async b(a, h) {
						const c = [],
							g = (await this.a.getInstalled())
								.filter((p) => p.manifest.main)
								.filter((p) => a.indexOf(p.identifier.id) === -1);
						if (g.length)
							c.push(
								...g.map((p) => {
									const o = `"${p.identifier.id}": {
	"supported": true,
	"version": "${p.manifest.version}"
},`;
									return {
										label: p.identifier.id,
										kind: E.CompletionItemKind.Value,
										insertText: o,
										filterText: o,
										range: h,
									};
								}),
							);
						else {
							const p = `"vscode.csharp": {
	"supported": true,
	"version": "0.0.0"
},`;
							c.push({
								label: (0, t.localize)(6412, null),
								kind: E.CompletionItemKind.Value,
								insertText: p,
								filterText: p,
								range: h,
							});
						}
						return c;
					}
				};
				(e.$YTc = r), (e.$YTc = r = Ne([j(0, C.$Hp), j(1, m.$k3)], r));
			},
		),
		