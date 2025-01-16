define(de[1154], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$vCb = e.$uCb = e.$tCb = void 0),
				(e.$tCb = "editor.action.inlineSuggest.commit"),
				(e.$uCb = "editor.action.inlineSuggest.showPrevious"),
				(e.$vCb = "editor.action.inlineSuggest.showNext");
		}),
		define(
			de[917],
			he([1, 0, 24, 37, 48, 17, 490]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$DCb = e.$CCb = e.$BCb = void 0),
					(e.$ECb = u),
					(e.$FCb = a);
				class d {
					constructor(c, n) {
						(this.lineNumber = c), (this.parts = n);
					}
					equals(c) {
						return (
							this.lineNumber === c.lineNumber &&
							this.parts.length === c.parts.length &&
							this.parts.every((n, g) => n.equals(c.parts[g]))
						);
					}
					render(c, n = !1) {
						return new C.$vL([
							...this.parts.map(
								(g) =>
									new C.$wL(
										E.$iL.fromPositions(new w.$hL(this.lineNumber, g.column)),
										n
											? `[${g.lines.join(`
`)}]`
											: g.lines.join(`
`),
									),
							),
						]).applyToString(c);
					}
					renderForScreenReader(c) {
						if (this.parts.length === 0) return "";
						const n = this.parts[this.parts.length - 1],
							g = c.substr(0, n.column - 1);
						return new C.$vL([
							...this.parts.map(
								(o) =>
									new C.$wL(
										E.$iL.fromPositions(new w.$hL(1, o.column)),
										o.lines.join(`
`),
									),
							),
						])
							.applyToString(g)
							.substring(this.parts[0].column - 1);
					}
					isEmpty() {
						return this.parts.every((c) => c.lines.length === 0);
					}
					get lineCount() {
						return 1 + this.parts.reduce((c, n) => c + n.lines.length - 1, 0);
					}
				}
				e.$BCb = d;
				class m {
					constructor(c, n, g) {
						(this.column = c),
							(this.text = n),
							(this.preview = g),
							(this.lines = (0, i.$zf)(this.text));
					}
					equals(c) {
						return (
							this.column === c.column &&
							this.lines.length === c.lines.length &&
							this.lines.every((n, g) => n === c.lines[g])
						);
					}
				}
				e.$CCb = m;
				class r {
					constructor(c, n, g, p = 0) {
						(this.lineNumber = c),
							(this.columnRange = n),
							(this.text = g),
							(this.additionalReservedLineCount = p),
							(this.parts = [
								new m(this.columnRange.endColumnExclusive, this.text, !1),
							]),
							(this.newLines = (0, i.$zf)(this.text));
					}
					renderForScreenReader(c) {
						return this.newLines.join(`
`);
					}
					render(c, n = !1) {
						const g = this.columnRange.toRange(this.lineNumber);
						return n
							? new C.$vL([
									new C.$wL(E.$iL.fromPositions(g.getStartPosition()), "("),
									new C.$wL(
										E.$iL.fromPositions(g.getEndPosition()),
										`)[${this.newLines.join(`
`)}]`,
									),
								]).applyToString(c)
							: new C.$vL([
									new C.$wL(
										g,
										this.newLines.join(`
`),
									),
								]).applyToString(c);
					}
					get lineCount() {
						return this.newLines.length;
					}
					isEmpty() {
						return this.parts.every((c) => c.lines.length === 0);
					}
					equals(c) {
						return (
							this.lineNumber === c.lineNumber &&
							this.columnRange.equals(c.columnRange) &&
							this.newLines.length === c.newLines.length &&
							this.newLines.every((n, g) => n === c.newLines[g]) &&
							this.additionalReservedLineCount === c.additionalReservedLineCount
						);
					}
				}
				e.$DCb = r;
				function u(h, c) {
					return (0, t.$yb)(h, c, a);
				}
				function a(h, c) {
					return h === c
						? !0
						: !h || !c
							? !1
							: (h instanceof d && c instanceof d) ||
									(h instanceof r && c instanceof r)
								? h.equals(c)
								: !1;
				}
			},
		),
		define(
			de[753],
			he([1, 0, 29, 3, 77, 48, 17]),
			function (ce, e, t, i, w, E, C) {
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
		),
		