import '../../../../../require.js';
import '../../../../../exports.js';
define(de[1490], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Vmb = void 0);
		class t {
			constructor(w) {
				(this.a = new Map()), (this.b = w);
				for (const d of w) this.a.set(d.key, d);
				if (this.a.size === 0) return;
				let E,
					C = 0;
				for (const [d, m] of this.a)
					E
						? ((E.nextKey = d), (m.prevKey = E.key))
						: ((this.c = d), (m.prevKey = void 0)),
						m.type === "item" && (m.index = C++),
						(E = m),
						(E.nextKey = void 0);
				this.d = E.key;
			}
			*[Symbol.iterator]() {
				yield* this.b;
			}
			getSize() {
				return this.a.size;
			}
			getKeys() {
				return this.a.keys();
			}
			getKeyBefore(w) {
				return this.a.get(w)?.prevKey;
			}
			getKeyAfter(w) {
				return this.a.get(w)?.nextKey;
			}
			getFirstKey() {
				return this.c;
			}
			getLastKey() {
				return this.d;
			}
			getItem(w) {
				return this.a.get(w);
			}
			at(w) {
				const E = [...this.getKeys()];
				return this.getItem(E[w]);
			}
		}
		e.$Vmb = t;
	}); /*!
	 * Portions of this file are based on code from react-spectrum.
	 * Apache License Version 2.0, Copyright 2020 Adobe.
	 *
	 * Credits to the React Spectrum team:
	 * https://github.com/adobe/react-spectrum/blob/8f2f2acb3d5850382ebe631f055f88c704aa7d17/packages/@react-aria/selection/src/ListKeyboardDelegate.ts
	 */
	