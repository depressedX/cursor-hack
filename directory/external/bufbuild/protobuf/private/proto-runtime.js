import '../../../../require.js';
import '../../../../exports.js';
import './enum.js';
import './message-type.js';
import './extensions.js';
import './json-format.js';
import './binary-format.js';
import './util-common.js';
define(
			de[1400],
			he([1, 0, 1083, 2028, 1087, 2035, 2034, 2037]),
			function (ce /*require*/,
 e /*exports*/,
 t /*enum*/,
 i /*message-type*/,
 w /*extensions*/,
 E /*json-format*/,
 C /*binary-format*/,
 d /*util-common*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.makeProtoRuntime = m);
				function m(r, u, a) {
					return {
						syntax: r,
						json: (0, E.makeJsonFormat)(),
						bin: (0, C.makeBinaryFormat)(),
						util: {
							...(0, d.makeUtilCommon)(),
							newFieldList: u,
							initFields: a,
						},
						makeMessageType(h, c, n) {
							return (0, i.makeMessageType)(this, h, c, n);
						},
						makeEnum: t.makeEnum,
						makeEnumType: t.makeEnumType,
						getEnumType: t.getEnumType,
						makeExtension(h, c, n) {
							return (0, w.makeExtension)(this, h, c, n);
						},
					};
				}
			},
		)
