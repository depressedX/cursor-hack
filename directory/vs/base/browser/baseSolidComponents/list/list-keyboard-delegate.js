import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1491], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Xmb = void 0);
		class t {
			constructor(w, E, C) {
				(this.a = w), (this.b = E), (this.c = C);
			}
			getKeyBelow(w) {
				let E = this.a().getKeyAfter(w);
				for (; E != null; ) {
					const C = this.a().getItem(E);
					if (C && C.type === "item" && !C.disabled) return E;
					E = this.a().getKeyAfter(E);
				}
				return E;
			}
			getKeyAbove(w) {
				let E = this.a().getKeyBefore(w);
				for (; E != null; ) {
					const C = this.a().getItem(E);
					if (C && C.type === "item" && !C.disabled) return E;
					E = this.a().getKeyBefore(E);
				}
				return E;
			}
			getFirstKey() {
				let w = this.a().getFirstKey();
				for (; w != null; ) {
					const E = this.a().getItem(w);
					if (E && E.type === "item" && !E.disabled) return w;
					w = this.a().getKeyAfter(w);
				}
				return w;
			}
			getLastKey() {
				let w = this.a().getLastKey();
				for (; w != null; ) {
					const E = this.a().getItem(w);
					if (E && E.type === "item" && !E.disabled) return w;
					w = this.a().getKeyBefore(w);
				}
				return w;
			}
			d(w) {
				return this.b?.()?.querySelector(`[data-key="${w}"]`) ?? null;
			}
			getKeyPageAbove(w) {
				const E = this.b?.();
				let C = this.d(w);
				if (!E || !C) return;
				const d = Math.max(0, C.offsetTop + C.offsetHeight - E.offsetHeight);
				let m = w;
				for (; m && C && C.offsetTop > d; )
					(m = this.getKeyAbove(m)), (C = m != null ? this.d(m) : null);
				return m;
			}
			getKeyPageBelow(w) {
				const E = this.b?.();
				let C = this.d(w);
				if (!E || !C) return;
				const d = Math.min(
					E.scrollHeight,
					C.offsetTop - C.offsetHeight + E.offsetHeight,
				);
				let m = w;
				for (; m && C && C.offsetTop < d; )
					(m = this.getKeyBelow(m)), (C = m != null ? this.d(m) : null);
				return m;
			}
			getKeyForSearch(w, E) {
				const C = this.c?.();
				if (!C) return;
				let d = E != null ? this.getKeyBelow(E) : this.getFirstKey();
				for (; d != null; ) {
					const m = this.a().getItem(d);
					if (m) {
						const r = m.textValue.slice(0, w.length);
						if (m.textValue && C.compare(r, w) === 0) return d;
					}
					d = this.getKeyBelow(d);
				}
				return d;
			}
		}
		e.$Xmb = t;
	}),
		