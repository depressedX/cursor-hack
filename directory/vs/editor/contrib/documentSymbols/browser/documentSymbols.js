define(
			de[2740],
			he([1, 0, 33, 28, 9, 42, 204, 31]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					d.$fk.registerCommand(
						"_executeDocumentSymbolProvider",
						async function (m, ...r) {
							const [u] = r;
							(0, i.$vg)(w.URI.isUri(u));
							const a = m.get(C.$9Db),
								c = await m.get(E.$MO).createModelReference(u);
							try {
								return (
									await a.getOrCreate(
										c.object.textEditorModel,
										t.CancellationToken.None,
									)
								).getTopLevelSymbols();
							} finally {
								c.dispose();
							}
						},
					);
			},
		),
		