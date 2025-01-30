import '../../../../../../../../require.js';
import '../../../../../../../../exports.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import '../../../../../../../../external/solid/web.js';
import './types.js';
import '../../../../../../../base/common/themables.js';
import '../../../../../../../base/common/codicons.js';
define(
			de[3195],
			he([1, 0, 2, 2, 2, 1005, 26, 14]),
			function (ce /*require*/,
 e /*exports*/,
 t /*web*/,
 i /*web*/,
 w /*web*/,
 E /*types*/,
 C /*themables*/,
 d /*codicons*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yac = e.$xac = void 0);
				const m = (0, t.template)("<i>");
				(e.$xac = new E.$o_b(
					"Edit",
					(() => {
						const r = m();
						return (
							(0, w.effect)(() =>
								(0, i.className)(r, C.ThemeIcon.asClassName(d.$ak.flame)),
							),
							r
						);
					})(),
					{ case: "base_command", command: "edit" },
					9.7,
				)),
					(e.$yac = { edit: { typeaheadOption: e.$xac } });
			},
		),
		