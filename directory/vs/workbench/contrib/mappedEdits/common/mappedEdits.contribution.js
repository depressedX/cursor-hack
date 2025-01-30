import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/cancellation.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../platform/commands/common/commands.js';
define(de[3074], he([1, 0, 33, 69, 42, 31]), function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*languageFeatures*/,
 w /*resolverService*/,
 E /*commands*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				E.$fk.registerCommand(
					"_executeMappedEditsProvider",
					async (C, d, m, r) => {
						const u = C.get(w.$MO),
							a = C.get(i.$k3),
							h = await u.createModelReference(d);
						let c = null;
						try {
							const n = a.mappedEditsProvider.ordered(h.object.textEditorModel);
							if (n.length > 0) {
								const g = n[0],
									p = new t.$Ce();
								c = await g.provideMappedEdits(
									h.object.textEditorModel,
									m,
									r,
									p.token,
								);
							}
						} finally {
							h.dispose();
						}
						return c;
					},
				);
		}),
		