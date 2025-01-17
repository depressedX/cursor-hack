import '../../../require.js';
import '../../../exports.js';
define(de[2069], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.LRUMap = void 0);
			class t {
				constructor(w) {
					(this._maxSize = w), (this._cache = new Map());
				}
				get size() {
					return this._cache.size;
				}
				get(w) {
					const E = this._cache.get(w);
					if (E !== void 0)
						return this._cache.delete(w), this._cache.set(w, E), E;
				}
				set(w, E) {
					this._cache.size >= this._maxSize &&
						this._cache.delete(this._cache.keys().next().value),
						this._cache.set(w, E);
				}
				remove(w) {
					const E = this._cache.get(w);
					return E && this._cache.delete(w), E;
				}
				clear() {
					this._cache.clear();
				}
				keys() {
					return Array.from(this._cache.keys());
				}
				values() {
					const w = [];
					return this._cache.forEach((E) => w.push(E)), w;
				}
			}
			e.LRUMap = t;
		}),
		