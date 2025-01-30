import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/store.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/browser/dom.js';
define(de[1714], he([1, 0, 193, 21, 7]), function (ce /*require*/,
 e /*exports*/,
 t /*store*/,
 i /*storage*/,
 w /*dom*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$kDc = void 0),
				(e.$lDc = C),
				(w = mt(w));
			class E {
				constructor() {
					(this.a = void 0), (this.b = () => {});
				}
				associate(m, r) {
					(this.a = m), (this.b = r);
				}
				getText() {
					return this.b();
				}
				focus() {
					this.a?.focus();
				}
				hasFocus() {
					return (
						this.a !== void 0 &&
						w.getWindow(this.a).document.activeElement === this.a
					);
				}
			}
			e.$kDc = E;
			function C(d, m) {
				const r = d.get(m, i.StorageScope.WORKSPACE),
					u = (n) => {
						const g = JSON.parse(n);
						g.files === void 0 && (g.files = []);
						for (const p of g.files) {
							p.nodes === void 0 && (p.nodes = []);
							for (let o = 0; o < p.nodes.length; o++)
								p.nodes[o] = {
									id: "",
									stage: "",
									content: "",
									summary: "",
									...p.nodes[o],
								};
						}
						return g;
					};
				let a = {
					inputBoxDelegate: new E(),
					addFileBoxDelegate: new E(),
					isVisible: !0,
					experimentalIndexId: "",
					files: [],
				};
				r && (a = { ...a, ...u(r) });
				const [h, c] = (0, t.createStore)(a);
				return [h, c];
			}
		}),
		