import '../../../require.js';
import '../../../exports.js';
define(de[318], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$1L = void 0);
			class t {
				static {
					this.sep = ".";
				}
				static {
					this.None = new t("@@none@@");
				}
				static {
					this.Empty = new t("");
				}
				constructor(w) {
					this.value = w;
				}
				equals(w) {
					return this.value === w.value;
				}
				contains(w) {
					return (
						this.equals(w) ||
						this.value === "" ||
						w.value.startsWith(this.value + t.sep)
					);
				}
				intersects(w) {
					return this.contains(w) || w.contains(this);
				}
				append(...w) {
					return new t((this.value ? [this.value, ...w] : w).join(t.sep));
				}
			}
			e.$1L = t;
		}),
		