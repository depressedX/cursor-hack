import '../../../require.js';
import '../../../exports.js';
define(de[273], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$$c = void 0);
			class t {
				static {
					this.Undefined = new t(void 0);
				}
				constructor(E) {
					(this.element = E),
						(this.next = t.Undefined),
						(this.prev = t.Undefined);
				}
			}
			class i {
				constructor() {
					(this.a = t.Undefined), (this.b = t.Undefined), (this.c = 0);
				}
				get size() {
					return this.c;
				}
				get first() {
					return this.a;
				}
				isEmpty() {
					return this.a === t.Undefined;
				}
				clear() {
					let E = this.a;
					for (; E !== t.Undefined; ) {
						const C = E.next;
						(E.prev = t.Undefined), (E.next = t.Undefined), (E = C);
					}
					(this.a = t.Undefined), (this.b = t.Undefined), (this.c = 0);
				}
				unshift(E) {
					return this.d(E, !1);
				}
				push(E) {
					return this.d(E, !0);
				}
				d(E, C) {
					const d = new t(E);
					if (this.a === t.Undefined) (this.a = d), (this.b = d);
					else if (C) {
						const r = this.b;
						(this.b = d), (d.prev = r), (r.next = d);
					} else {
						const r = this.a;
						(this.a = d), (d.next = r), (r.prev = d);
					}
					this.c += 1;
					let m = !1;
					return () => {
						m || ((m = !0), this.e(d));
					};
				}
				shift() {
					if (this.a !== t.Undefined) {
						const E = this.a.element;
						return this.e(this.a), E;
					}
				}
				pop() {
					if (this.b !== t.Undefined) {
						const E = this.b.element;
						return this.e(this.b), E;
					}
				}
				remove(E) {
					this.e(E);
				}
				e(E) {
					if (E.prev !== t.Undefined && E.next !== t.Undefined) {
						const C = E.prev;
						(C.next = E.next), (E.next.prev = C);
					} else
						E.prev === t.Undefined && E.next === t.Undefined
							? ((this.a = t.Undefined), (this.b = t.Undefined))
							: E.next === t.Undefined
								? ((this.b = this.b.prev), (this.b.next = t.Undefined))
								: E.prev === t.Undefined &&
									((this.a = this.a.next), (this.a.prev = t.Undefined));
					this.c -= 1;
				}
				*[Symbol.iterator]() {
					let E = this.a;
					for (; E !== t.Undefined; ) yield E.element, (E = E.next);
				}
			}
			e.$$c = i;
		});
	var Ne =
		(this && this.__decorate) ||
		function (ce, e, t, i) {
			var w = arguments.length,
				E =
					w < 3
						? e
						: i === null
							? (i = Object.getOwnPropertyDescriptor(e, t))
							: i,
				C;
			if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
				E = Reflect.decorate(ce, e, t, i);
			else
				for (var d = ce.length - 1; d >= 0; d--)
					(C = ce[d]) &&
						(E = (w < 3 ? C(E) : w > 3 ? C(e, t, E) : C(e, t)) || E);
			return w > 3 && E && Object.defineProperty(e, t, E), E;
		};
	