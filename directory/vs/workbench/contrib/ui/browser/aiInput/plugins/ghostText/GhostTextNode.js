define(de[1775], he([1, 0, 164, 47]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Dac = e.$Cac = void 0),
				(e.$createGhostTextNode = E),
				(e.$Cac = (0, i.$9g)());
			class w extends t.DecoratorNode {
				static clone(d) {
					return new w(d.__uuid, d.__key);
				}
				static getType() {
					return "ghosttext";
				}
				static importJSON(d) {
					return E(d.uuid, d.text);
				}
				exportJSON() {
					return {
						type: "ghosttext",
						uuid: this.__uuid,
						version: 1,
						text: this.__text,
					};
				}
				constructor(d, m, r) {
					super(r), (this.__uuid = d), (this.__text = m);
				}
				updateDOM(d, m, r) {
					return !1;
				}
				createDOM(d) {
					const m = document.createElement("span");
					return (
						(m.style.color = "var(--vscode-editorGhostText-foreground)"),
						(m.textContent = this.__text),
						m
					);
				}
				decorate(d, m) {
					return null;
				}
			}
			e.$Dac = w;
			function E(C, d) {
				return new w(C, d);
			}
		}),
		