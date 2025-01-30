import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/resources.js';
define(de[2698], he([1, 0, 19]), function (ce /*require*/,
 e /*exports*/,
 t /*resources*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$89b = i),
				(e.$99b = w);
			function i(E, C) {
				return C.nonPersistentStorage.inlineDiffs
					.filter((d) => t.$dh.isEqual(d.uri, E.uri))
					.map((d) => d.id);
			}
			function w(E, C) {
				return C.nonPersistentStorage.inprogressAIGenerations.some(
					(d) =>
						d.generationUUID ===
						E.nonPersistentReactiveStorage.topPromptBarData.lastGenerationUUID,
				);
			}
		}),
		