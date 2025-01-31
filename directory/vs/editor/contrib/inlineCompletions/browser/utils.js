import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../common/core/position.js';
import '../../../common/core/range.js';
define(
			de[753],
			he([1, 0, 29, 3, 77, 48, 17]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*lifecycle*/,
 w /*observable*/,
 E /*position*/,
 C /*range*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xCb = void 0),
					(e.$wCb = m),
					(e.$yCb = u),
					(e.$zCb = a),
					(e.$ACb = h);
				const d = [];
				function m() {
					return d;
				}
				class r {
					constructor(n, g) {
						if (((this.startColumn = n), (this.endColumnExclusive = g), n > g))
							throw new t.$gb(
								`startColumn ${n} cannot be after endColumnExclusive ${g}`,
							);
					}
					toRange(n) {
						return new C.$iL(n, this.startColumn, n, this.endColumnExclusive);
					}
					equals(n) {
						return (
							this.startColumn === n.startColumn &&
							this.endColumnExclusive === n.endColumnExclusive
						);
					}
				}
				e.$xCb = r;
				function u(c, n) {
					const g = new i.$Zc(),
						p = c.createDecorationsCollection();
					return (
						g.add(
							(0, w.autorunOpts)(
								{ debugName: () => `Apply decorations from ${n.debugName}` },
								(o) => {
									const f = n.read(o);
									p.set(f);
								},
							),
						),
						g.add({
							dispose: () => {
								p.clear();
							},
						}),
						g
					);
				}
				function a(c, n) {
					return new E.$hL(
						c.lineNumber + n.lineNumber - 1,
						n.lineNumber === 1 ? c.column + n.column - 1 : n.column,
					);
				}
				function h(c, n) {
					return new E.$hL(
						c.lineNumber - n.lineNumber + 1,
						c.lineNumber - n.lineNumber === 0
							? c.column - n.column + 1
							: c.column,
					);
				}
			},
		)
