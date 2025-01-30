import '../../../../../require.js';
import '../../../../../exports.js';
define(de[431], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Cib =
					e.$Bib =
					e.$Aib =
					e.ListDragOverEffectPosition =
					e.ListDragOverEffectType =
						void 0);
			var t;
			(function (C) {
				(C[(C.Copy = 0)] = "Copy"), (C[(C.Move = 1)] = "Move");
			})(t || (e.ListDragOverEffectType = t = {}));
			var i;
			(function (C) {
				(C.Over = "drop-target"),
					(C.Before = "drop-target-before"),
					(C.After = "drop-target-after");
			})(i || (e.ListDragOverEffectPosition = i = {})),
				(e.$Aib = {
					reject() {
						return { accept: !1 };
					},
					accept() {
						return { accept: !0 };
					},
				});
			class w extends Error {
				constructor(d, m) {
					super(`ListError [${d}] ${m}`);
				}
			}
			e.$Bib = w;
			class E {
				constructor() {
					this.c = new WeakMap();
				}
				getHeight(d) {
					return this.c.get(d) ?? this.d(d);
				}
				setDynamicHeight(d, m) {
					m > 0 && this.c.set(d, m);
				}
			}
			e.$Cib = E;
		}),
		