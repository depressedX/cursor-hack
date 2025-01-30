import '../../../require.js';
import '../../../exports.js';
import '../lexical/api.js';
define(de[1563], he([1, 0, 164]), function (ce /*require*/,
 e /*exports*/,
 t /*api*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.DecoratorBlockNode = void 0),
				(e.$isDecoratorBlockNode = w);
			class i extends t.DecoratorNode {
				constructor(C, d) {
					super(d), (this.__format = C);
				}
				exportJSON() {
					return {
						format: this.__format || "",
						type: "decorator-block",
						version: 1,
					};
				}
				createDOM() {
					return document.createElement("div");
				}
				updateDOM() {
					return !1;
				}
				setFormat(C) {
					const d = this.getWritable();
					d.__format = C;
				}
				isInline() {
					return !1;
				}
			}
			e.DecoratorBlockNode = i;
			function w(E) {
				return E instanceof i;
			}
		}),
		