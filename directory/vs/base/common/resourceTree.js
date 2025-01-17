import '../../../require.js';
import '../../../exports.js';
import './decorators.js';
import './ternarySearchTree.js';
import './path.js';
import './resources.js';
import './uri.js';
define(
			de[1171],
			he([1, 0, 138, 387, 54, 19, 9]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$06 = void 0),
					(w = mt(w));
				class d {
					get childrenCount() {
						return this.a.size;
					}
					get children() {
						return this.a.values();
					}
					get name() {
						return w.$lc.basename(this.relativePath);
					}
					constructor(a, h, c, n = void 0, g = void 0) {
						(this.uri = a),
							(this.relativePath = h),
							(this.context = c),
							(this.element = n),
							(this.parent = g),
							(this.a = new Map());
					}
					get(a) {
						return this.a.get(a);
					}
					set(a, h) {
						this.a.set(a, h);
					}
					delete(a) {
						this.a.delete(a);
					}
					clear() {
						this.a.clear();
					}
				}
				Ne([t.$ei], d.prototype, "name", null);
				function m(u, a) {
					typeof u.element < "u" && a.push(u.element);
					for (const h of u.children) m(h, a);
					return a;
				}
				class r {
					static getRoot(a) {
						for (; a.parent; ) a = a.parent;
						return a;
					}
					static collect(a) {
						return m(a, []);
					}
					static isResourceNode(a) {
						return a instanceof d;
					}
					constructor(a, h = C.URI.file("/"), c = E.$dh) {
						(this.a = c), (this.root = new d(h, "", a));
					}
					add(a, h) {
						const c = this.a.relativePath(this.root.uri, a) || a.path,
							n = new i.$Qi(!1).reset(c);
						let g = this.root,
							p = "";
						for (;;) {
							const o = n.value();
							p = p + "/" + o;
							let f = g.get(o);
							if (
								(f
									? n.hasNext() || (f.element = h)
									: ((f = new d(
											this.a.joinPath(this.root.uri, p),
											p,
											this.root.context,
											n.hasNext() ? void 0 : h,
											g,
										)),
										g.set(o, f)),
								(g = f),
								!n.hasNext())
							)
								return;
							n.next();
						}
					}
					delete(a) {
						const h = this.a.relativePath(this.root.uri, a) || a.path,
							c = new i.$Qi(!1).reset(h);
						return this.b(this.root, c);
					}
					b(a, h) {
						const c = h.value(),
							n = a.get(c);
						if (n) {
							if (h.hasNext()) {
								const g = this.b(n, h.next());
								return (
									typeof g < "u" && n.childrenCount === 0 && a.delete(c), g
								);
							}
							return a.delete(c), n.element;
						}
					}
					clear() {
						this.root.clear();
					}
					getNode(a) {
						const h = this.a.relativePath(this.root.uri, a) || a.path,
							c = new i.$Qi(!1).reset(h);
						let n = this.root;
						for (;;) {
							const g = c.value(),
								p = n.get(g);
							if (!p || !c.hasNext()) return p;
							(n = p), c.next();
						}
					}
				}
				e.$06 = r;
			},
		),
		