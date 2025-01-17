import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
define(de[1715], he([1, 0, 7]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tfd = e.$sfd = void 0),
				(t = mt(t));
			class i {
				constructor() {
					this.a = new Map();
				}
				addListener(C, d) {
					this.a.has(C) || this.a.set(C, []), this.a.get(C).push(d);
				}
				removeListener(C, d) {
					this.a.has(C) &&
						this.a.set(
							C,
							this.a.get(C).filter((m) => m !== d),
						);
				}
				onFocus() {
					this.a.get("onFocus")?.forEach((C) => C());
				}
				focusFollowup() {
					this.a.get("focusFollowup")?.forEach((C) => C());
				}
			}
			e.$sfd = i;
			class w {
				constructor() {
					(this.a = void 0), (this.b = () => {});
				}
				associate(C, d) {
					(this.a = C), (this.b = d);
				}
				getText() {
					return this.b();
				}
				getRef() {
					return this.a;
				}
				focus() {
					console.log("focusing", this.a),
						this.a?.focus(),
						console.log("FOCUSED");
				}
				hasFocus() {
					return this.a !== void 0 && this.a === t.$Ngb().activeElement;
				}
			}
			e.$tfd = w;
		}),
		