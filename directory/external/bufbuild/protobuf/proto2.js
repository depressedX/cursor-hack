import '../../../require.js';
import '../../../exports.js';
import './private/proto-runtime.js';
import './private/field-list.js';
import './private/field-normalize.js';
define(de[874], he([1, 0, 1400, 1396, 1397]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.proto2 = void 0),
				(e.proto2 = (0, t.makeProtoRuntime)(
					"proto2",
					(E) =>
						new i.InternalFieldList(E, (C) =>
							(0, w.normalizeFieldInfos)(C, !1),
						),
					(E) => {
						for (const C of E.getType().fields.byMember()) {
							const d = C.localName,
								m = E;
							if (C.repeated) {
								m[d] = [];
								continue;
							}
							switch (C.kind) {
								case "oneof":
									m[d] = { case: void 0 };
									break;
								case "map":
									m[d] = {};
									break;
								case "scalar":
								case "enum":
								case "message":
									break;
							}
						}
					},
				));
		}),
		