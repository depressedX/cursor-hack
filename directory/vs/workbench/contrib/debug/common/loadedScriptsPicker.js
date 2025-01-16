define(
			de[3265],
			he([1, 0, 4, 132, 63, 112, 18, 252, 67, 61, 3, 19, 73]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$VGc = c),
					(t = mt(t));
				async function c(o) {
					const f = o.get(w.$DJ),
						b = o.get(E.$75),
						s = o.get(C.$IY),
						l = b.getModel().getSessions(!1),
						y = o.get(m.$QO),
						$ = o.get(r.$nM),
						v = o.get(h.$3N),
						S = new u.$Zc(),
						I = f.createQuickPick({ useSeparators: !0 });
					S.add(I),
						(I.matchOnLabel =
							I.matchOnDescription =
							I.matchOnDetail =
							I.sortByLabel =
								!1),
						(I.placeholder = t.localize(5904, null)),
						(I.items = await g(I.value, l, s, y, $, v)),
						S.add(
							I.onDidChangeValue(async () => {
								I.items = await g(I.value, l, s, y, $, v);
							}),
						),
						S.add(
							I.onDidAccept(() => {
								I.selectedItems[0].accept(), I.hide(), S.dispose();
							}),
						),
						I.show();
				}
				async function n(o, f, b, s, l, y) {
					const $ = [];
					return (
						$.push({ type: "separator", label: o.name }),
						(await o.getLoadedSources()).forEach((S) => {
							const I = p(S, f, b, s, l, y);
							I && $.push(I);
						}),
						$
					);
				}
				async function g(o, f, b, s, l, y) {
					const $ = [],
						v = await Promise.all(f.map((S) => n(S, o, b, s, l, y)));
					for (const S of v) for (const I of S) $.push(I);
					return $;
				}
				function p(o, f, b, s, l, y) {
					const $ = y.getUriBasenameLabel(o.uri),
						v = y.getUriLabel((0, a.$mh)(o.uri)),
						S = (0, i.$Zk)(f, $, !0),
						I = (0, i.$Zk)(f, v, !0);
					if (S || I)
						return {
							label: $,
							description: v === "." ? void 0 : v,
							highlights: { label: S ?? void 0, description: I ?? void 0 },
							iconClasses: (0, d.$BDb)(s, l, o.uri),
							accept: () => {
								o.available &&
									o.openInEditor(b, {
										startLineNumber: 0,
										startColumn: 0,
										endLineNumber: 0,
										endColumn: 0,
									});
							},
						};
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	