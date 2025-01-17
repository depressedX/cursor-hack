import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../services/editor/common/editorResolverService.js';
define(
			de[625],
			he([1, 0, 24, 4, 8, 5, 231]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$nnc =
						e.$mnc =
						e.CustomEditorPriority =
						e.$lnc =
						e.$knc =
						e.$jnc =
							void 0),
					(i = mt(i)),
					(e.$jnc = (0, E.$Mi)("customEditorService")),
					(e.$knc = new w.$5j("activeCustomEditorId", "", {
						type: "string",
						description: i.localize(5126, null),
					})),
					(e.$lnc = new w.$5j("focusedCustomEditorIsEditable", !1));
				var d;
				(function (a) {
					(a.default = "default"),
						(a.builtin = "builtin"),
						(a.option = "option");
				})(d || (e.CustomEditorPriority = d = {}));
				class m {
					constructor(h) {
						(this.id = h.id),
							(this.displayName = h.displayName),
							(this.providerDisplayName = h.providerDisplayName),
							(this.priority = h.priority),
							(this.selector = h.selector);
					}
					matches(h) {
						return this.selector.some(
							(c) => c.filenamePattern && (0, C.$H6)(c.filenamePattern, h),
						);
					}
				}
				e.$mnc = m;
				class r {
					constructor(h) {
						this.allEditors = (0, t.$Qb)(h, (c) => c.id);
					}
					get length() {
						return this.allEditors.length;
					}
					get defaultEditor() {
						return this.allEditors.find((h) => {
							switch (h.priority) {
								case C.RegisteredEditorPriority.default:
								case C.RegisteredEditorPriority.builtin:
									return this.allEditors.every((c) => c === h || u(c, h));
								default:
									return !1;
							}
						});
					}
					get bestAvailableEditor() {
						return Array.from(this.allEditors).sort(
							(c, n) => (0, C.$G6)(c.priority) - (0, C.$G6)(n.priority),
						)[0];
					}
				}
				e.$nnc = r;
				function u(a, h) {
					return (0, C.$G6)(a.priority) < (0, C.$G6)(h.priority);
				}
			},
		),
		