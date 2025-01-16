define(de[2215], he([1, 0, 83, 1131]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			class w {
				constructor(C, d, m) {
					(this.relativePath = C), (this.content = d), (this.hash = m);
				}
				getLines() {
					return this.content.split(`
`);
				}
				numberOfLines() {
					return this.getLines().length;
				}
				a(C) {
					this.content = C.join(`
`);
				}
				applyChange(C) {
					let d = this.getLines(),
						m = C.range.start.lineNumber,
						r = C.range.end.lineNumber;
					m < 0 && (m = 0),
						r < 0 && (r = 0),
						m > d.length - 1 && (m = d.length - 1),
						r > d.length - 1 && (r = d.length - 1);
					try {
						const u = d[m].slice(0, C.range.start.column),
							a = d[r].slice(C.range.end.column);
						d.splice(m, r - m + 1, u + C.text + a), this.a(d);
					} catch (u) {
						throw (console.log(u), u);
					}
				}
				setCursorPositionAndSelectionFromOutgoingChange(C) {
					(this.cursorPosition = C.range.start), (this.selection = C.range);
				}
				static withCursorAndSelection(C, d, m) {
					const r = new w(C.relativePath, C.content);
					return r.setCursorPosition(d), r.setSelection(m), r;
				}
				setCursorPosition(C) {
					this.cursorPosition = C;
				}
				setSelection(C) {
					this.selection = C;
				}
				static applyChange(C, d) {
					const m = new w(C.relativePath, C.content);
					return m.applyChange(d), m;
				}
				diff(C) {
					const d = this.getLines(),
						m = C.getLines();
					return [];
				}
				getTextInRange(C) {
					const d = this.getLines();
					let m = "";
					for (
						let r = C.start.lineNumber;
						r <= C.end.lineNumber &&
						!(r === d.length && r === C.end.lineNumber && C.end.column === 0);
						r++
					) {
						const u = d[r];
						r === C.start.lineNumber
							? (m += u.slice(C.start.column))
							: r === C.end.lineNumber
								? (m += u.slice(0, C.end.column))
								: (m += u),
							r !== C.end.lineNumber &&
								(m += `
`);
					}
					return m;
				}
				getTextInLines(C, d) {
					return this.getLines()
						.slice(C, d + 1)
						.join(`
`);
				}
				getRangeBetweenLines(C, d) {
					const m = this.getLines(),
						r = new i.$jqb(C, 0);
					if (d >= C) {
						const u = new i.$jqb(d, m[d].length);
						return new i.$kqb(r, u);
					} else {
						const u = new i.$jqb(d + 1, 0);
						return new i.$kqb(r, u);
					}
				}
				asCurrentFileInfo() {
					return new t.$Ws({
						relativeWorkspacePath: this.relativePath,
						contents: this.content,
						cursorPosition: this.cursorPosition
							? {
									line: this.cursorPosition?.lineNumber,
									column: this.cursorPosition?.column,
								}
							: void 0,
						selection: this.selection
							? {
									startPosition: {
										line: this.selection.start.lineNumber,
										column: this.selection.start.column,
									},
									endPosition: {
										line: this.selection.end.lineNumber,
										column: this.selection.end.column,
									},
								}
							: void 0,
					});
				}
				static getNumCommonLinesAtBeginningOfSnapshots(C, d) {
					const m = C.getLines(),
						r = d.getLines();
					let u = 0;
					for (; u < m.length && u < r.length && m[u] === r[u]; ) u++;
					return (
						u > 0 &&
							(m[u - 1] === void 0 ||
								r[u - 1] === void 0 ||
								m[u - 1] !== r[u - 1]) &&
							u--,
						u
					);
				}
				static getNumCommonLinesAtEndOfSnapshots(C, d) {
					const m = C.getLines().reverse(),
						r = d.getLines().reverse();
					let u = 0;
					for (; u < m.length && u < r.length && m[u] === r[u]; ) u++;
					return (
						u > 0 &&
							(m[u - 1] === void 0 ||
								r[u - 1] === void 0 ||
								m[u - 1] !== r[u - 1]) &&
							u--,
						u
					);
				}
				static getSemiAccurateChangeBetweenModelSnapshots(C, d) {
					const m = this.getNumCommonLinesAtBeginningOfSnapshots(C, d),
						r = this.getNumCommonLinesAtEndOfSnapshots(C, d);
					return {
						content1: C.getTextInLines(m, C.numberOfLines() - r - 1),
						content2: d.getTextInLines(m, d.numberOfLines() - r - 1),
						content1Extended: C.getTextInLines(
							Math.max(m - 5, 0),
							Math.min(C.numberOfLines() - r - 1 + 5, C.numberOfLines() - 1),
						),
						content2Extended: d.getTextInLines(
							Math.max(m - 5, 0),
							Math.min(d.numberOfLines() - r - 1 + 5, d.numberOfLines() - 1),
						),
						numCommonLinesAtBeginning: m,
						numCommonLinesAtEnd: r,
					};
				}
				static getCommonPrefixAndSuffix(C, d) {
					const m = this.getNumCommonLinesAtBeginningOfSnapshots(C, d),
						r = this.getNumCommonLinesAtEndOfSnapshots(C, d);
					return {
						prefix: C.getTextInLines(0, m - 1),
						suffix: C.getTextInLines(
							C.numberOfLines() - r,
							C.numberOfLines() - 1,
						),
						changedInitialText: C.getTextInLines(m, C.numberOfLines() - r - 1),
						changedFinalText: d.getTextInLines(m, d.numberOfLines() - r - 1),
					};
				}
			}
			e.default = w;
		}),
		