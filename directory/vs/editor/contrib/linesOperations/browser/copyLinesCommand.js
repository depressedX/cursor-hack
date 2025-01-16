define(de[2588], he([1, 0, 17, 104]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Ric = void 0);
			class w {
				constructor(C, d, m) {
					(this.a = C),
						(this.b = d),
						(this.c = m || !1),
						(this.d = i.SelectionDirection.LTR),
						(this.e = null),
						(this.f = 0),
						(this.g = 0);
				}
				getEditOperations(C, d) {
					let m = this.a;
					(this.f = 0),
						(this.g = 0),
						m.startLineNumber < m.endLineNumber &&
							m.endColumn === 1 &&
							((this.g = 1),
							(m = m.setEndPosition(
								m.endLineNumber - 1,
								C.getLineMaxColumn(m.endLineNumber - 1),
							)));
					const r = [];
					for (let a = m.startLineNumber; a <= m.endLineNumber; a++)
						r.push(C.getLineContent(a));
					const u = r.join(`
`);
					u === "" && this.b && (this.f++, this.g++),
						this.c
							? d.addEditOperation(
									new t.$iL(
										m.endLineNumber,
										C.getLineMaxColumn(m.endLineNumber),
										m.endLineNumber + 1,
										1,
									),
									m.endLineNumber === C.getLineCount()
										? ""
										: `
`,
								)
							: this.b
								? d.addEditOperation(
										new t.$iL(m.startLineNumber, 1, m.startLineNumber, 1),
										u +
											`
`,
									)
								: d.addEditOperation(
										new t.$iL(
											m.endLineNumber,
											C.getLineMaxColumn(m.endLineNumber),
											m.endLineNumber,
											C.getLineMaxColumn(m.endLineNumber),
										),
										`
` + u,
									),
						(this.e = d.trackSelection(m)),
						(this.d = this.a.getDirection());
				}
				computeCursorState(C, d) {
					let m = d.getTrackedSelection(this.e);
					if (this.f !== 0 || this.g !== 0) {
						let r = m.startLineNumber,
							u = m.startColumn,
							a = m.endLineNumber,
							h = m.endColumn;
						this.f !== 0 && ((r = r + this.f), (u = 1)),
							this.g !== 0 && ((a = a + this.g), (h = 1)),
							(m = i.$kL.createWithDirection(r, u, a, h, this.d));
					}
					return m;
				}
			}
			e.$Ric = w;
		}),
		