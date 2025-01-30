import '../../../require.js';
import '../../../exports.js';
import '../lexical/api.js';
define(de[2593], he([1, 0, 164]), function (ce /*require*/,
 e /*exports*/,
 t /*api*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.OverflowNode = void 0),
				(e.$createOverflowNode = w),
				(e.$isOverflowNode = E);
			class i extends t.ElementNode {
				static getType() {
					return "overflow";
				}
				static clone(d) {
					return new i(d.__key);
				}
				static importJSON(d) {
					return w();
				}
				static importDOM() {
					return null;
				}
				constructor(d) {
					super(d), (this.__type = "overflow");
				}
				exportJSON() {
					return { ...super.exportJSON(), type: "overflow" };
				}
				createDOM(d) {
					const m = document.createElement("span"),
						r = d.theme.characterLimit;
					return typeof r == "string" && (m.className = r), m;
				}
				updateDOM(d, m) {
					return !1;
				}
				insertNewAfter(d, m = !0) {
					return this.getParentOrThrow().insertNewAfter(d, m);
				}
				excludeFromCopy() {
					return !0;
				}
			}
			e.OverflowNode = i;
			function w() {
				return (0, t.$applyNodeReplacement)(new i());
			}
			function E(C) {
				return C instanceof i;
			}
		}),
		