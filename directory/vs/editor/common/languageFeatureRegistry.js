import '../../../require.js';
import '../../../exports.js';
import '../../base/common/event.js';
import '../../base/common/lifecycle.js';
import './model.js';
import './languageSelector.js';
define(de[945], he([1, 0, 6, 3, 64, 933]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$N1 = void 0);
			function C(u) {
				return typeof u == "string"
					? !1
					: Array.isArray(u)
						? u.every(C)
						: !!u.exclusive;
			}
			class d {
				constructor(a, h, c, n, g) {
					(this.uri = a),
						(this.languageId = h),
						(this.notebookUri = c),
						(this.notebookType = n),
						(this.recursive = g);
				}
				equals(a) {
					return (
						this.notebookType === a.notebookType &&
						this.languageId === a.languageId &&
						this.uri.toString() === a.uri.toString() &&
						this.notebookUri?.toString() === a.notebookUri?.toString() &&
						this.recursive === a.recursive
					);
				}
			}
			class m {
				constructor(a) {
					(this.f = a),
						(this.c = 0),
						(this.d = []),
						(this.e = new t.$re()),
						(this.onDidChange = this.e.event);
				}
				register(a, h) {
					let c = { selector: a, provider: h, _score: -1, _time: this.c++ };
					return (
						this.d.push(c),
						(this.h = void 0),
						this.e.fire(this.d.length),
						(0, i.$Yc)(() => {
							if (c) {
								const n = this.d.indexOf(c);
								n >= 0 &&
									(this.d.splice(n, 1),
									(this.h = void 0),
									this.e.fire(this.d.length),
									(c = void 0));
							}
						})
					);
				}
				has(a) {
					return this.all(a).length > 0;
				}
				all(a) {
					if (!a) return [];
					this.i(a, !1);
					const h = [];
					for (const c of this.d) c._score > 0 && h.push(c.provider);
					return h;
				}
				allNoModel() {
					return this.d.map((a) => a.provider);
				}
				ordered(a, h = !1) {
					const c = [];
					return this.g(a, h, (n) => c.push(n.provider)), c;
				}
				orderedGroups(a) {
					const h = [];
					let c, n;
					return (
						this.g(a, !1, (g) => {
							c && n === g._score
								? c.push(g.provider)
								: ((n = g._score), (c = [g.provider]), h.push(c));
						}),
						h
					);
				}
				g(a, h, c) {
					this.i(a, h);
					for (const n of this.d) n._score > 0 && c(n);
				}
				i(a, h) {
					const c = this.f?.(a.uri),
						n = c
							? new d(a.uri, a.getLanguageId(), c.uri, c.type, h)
							: new d(a.uri, a.getLanguageId(), void 0, void 0, h);
					if (!this.h?.equals(n)) {
						this.h = n;
						for (const g of this.d)
							if (
								((g._score = (0, E.$3L)(
									g.selector,
									n.uri,
									n.languageId,
									(0, w.$TN)(a),
									n.notebookUri,
									n.notebookType,
								)),
								C(g.selector) && g._score > 0)
							)
								if (h) g._score = 0;
								else {
									for (const p of this.d) p._score = 0;
									g._score = 1e3;
									break;
								}
						this.d.sort(m.j);
					}
				}
				static j(a, h) {
					return a._score < h._score
						? 1
						: a._score > h._score
							? -1
							: r(a.selector) && !r(h.selector)
								? 1
								: !r(a.selector) && r(h.selector)
									? -1
									: a._time < h._time
										? 1
										: a._time > h._time
											? -1
											: 0;
				}
			}
			e.$N1 = m;
			function r(u) {
				return typeof u == "string"
					? !1
					: Array.isArray(u)
						? u.some(r)
						: !!u.isBuiltin;
			}
		}),
		