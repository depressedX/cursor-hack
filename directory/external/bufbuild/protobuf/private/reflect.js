import '../../../../require.js';
import '../../../../exports.js';
import './scalars.js';
define(de[1399], he([1, 0, 526]), function (ce /*require*/,
 e /*exports*/,
 t /*scalars*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.isFieldSet = i),
				(e.clearField = w);
			function i(E, C) {
				const d = E.localName;
				if (E.repeated) return C[d].length > 0;
				if (E.oneof) return C[E.oneof.localName].case === d;
				switch (E.kind) {
					case "enum":
					case "scalar":
						return E.opt || E.req
							? C[d] !== void 0
							: E.kind == "enum"
								? C[d] !== E.T.values[0].no
								: !(0, t.isScalarZeroValue)(E.T, C[d]);
					case "message":
						return C[d] !== void 0;
					case "map":
						return Object.keys(C[d]).length > 0;
				}
			}
			function w(E, C) {
				const d = E.localName,
					m = !E.opt && !E.req;
				if (E.repeated) C[d] = [];
				else if (E.oneof) C[E.oneof.localName] = { case: void 0 };
				else
					switch (E.kind) {
						case "map":
							C[d] = {};
							break;
						case "enum":
							C[d] = m ? E.T.values[0].no : void 0;
							break;
						case "scalar":
							C[d] = m ? (0, t.scalarZeroValue)(E.T, E.L) : void 0;
							break;
						case "message":
							C[d] = void 0;
							break;
					}
			}
		}),
		