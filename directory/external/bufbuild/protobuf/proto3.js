import '../../../require.js';
import '../../../exports.js';
import './private/proto-runtime.js';
import './private/field-list.js';
import './private/scalars.js';
import './private/field-normalize.js';
define(
			de[406],
			he([1, 0, 1400, 1396, 526, 1397]),
			function (ce /*require*/,
 e /*exports*/,
 t /*proto-runtime*/,
 i /*field-list*/,
 w /*scalars*/,
 E /*field-normalize*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.proto3 = void 0),
					(e.proto3 = (0, t.makeProtoRuntime)(
						"proto3",
						(C) =>
							new i.InternalFieldList(C, (d) =>
								(0, E.normalizeFieldInfos)(d, !0),
							),
						(C) => {
							for (const d of C.getType().fields.byMember()) {
								if (d.opt) continue;
								const m = d.localName,
									r = C;
								if (d.repeated) {
									r[m] = [];
									continue;
								}
								switch (d.kind) {
									case "oneof":
										r[m] = { case: void 0 };
										break;
									case "enum":
										r[m] = 0;
										break;
									case "map":
										r[m] = {};
										break;
									case "scalar":
										r[m] = (0, w.scalarZeroValue)(d.T, d.L);
										break;
									case "message":
										break;
								}
							}
						},
					));
			},
		)
