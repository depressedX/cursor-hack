import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../base/common/types.js';
import '../../../../base/common/uri.js';
import '../../../common/services/resolverService.js';
import './outlineModel.js';
import '../../../../platform/commands/common/commands.js';
define(
			de[2740],
			he([1, 0, 33, 28, 9, 42, 204, 31]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*types*/,
 w /*uri*/,
 E /*resolverService*/,
 C /*outlineModel*/,
 d /*commands*/) {
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
		)
