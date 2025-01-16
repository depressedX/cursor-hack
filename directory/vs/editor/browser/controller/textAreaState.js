define(de[1627], he([1, 0, 37, 17, 64]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$4ub = e.$3ub = e.$2ub = void 0),
				(t = mt(t)),
				(e.$2ub = !1);
			class E {
				static {
					this.EMPTY = new E("", 0, 0, null, void 0);
				}
				constructor(m, r, u, a, h) {
					(this.value = m),
						(this.selectionStart = r),
						(this.selectionEnd = u),
						(this.selection = a),
						(this.newlineCountBeforeSelection = h);
				}
				toString() {
					return `[ <${this.value}>, selectionStart: ${this.selectionStart}, selectionEnd: ${this.selectionEnd}]`;
				}
				static readFromTextArea(m, r) {
					const u = m.getValue(),
						a = m.getSelectionStart(),
						h = m.getSelectionEnd();
					let c;
					if (r) {
						const n = u.substring(0, a),
							g = r.value.substring(0, r.selectionStart);
						n === g && (c = r.newlineCountBeforeSelection);
					}
					return new E(u, a, h, null, c);
				}
				collapseSelection() {
					return this.selectionStart === this.value.length
						? this
						: new E(
								this.value,
								this.value.length,
								this.value.length,
								null,
								void 0,
							);
				}
				writeToTextArea(m, r, u) {
					e.$2ub && console.log(`writeToTextArea ${m}: ${this.toString()}`),
						r.setValue(m, this.value),
						u && r.setSelectionRange(m, this.selectionStart, this.selectionEnd);
				}
				deduceEditorPosition(m) {
					if (m <= this.selectionStart) {
						const a = this.value.substring(m, this.selectionStart);
						return this.a(this.selection?.getStartPosition() ?? null, a, -1);
					}
					if (m >= this.selectionEnd) {
						const a = this.value.substring(this.selectionEnd, m);
						return this.a(this.selection?.getEndPosition() ?? null, a, 1);
					}
					const r = this.value.substring(this.selectionStart, m);
					if (r.indexOf("\u2026") === -1)
						return this.a(this.selection?.getStartPosition() ?? null, r, 1);
					const u = this.value.substring(m, this.selectionEnd);
					return this.a(this.selection?.getEndPosition() ?? null, u, -1);
				}
				a(m, r, u) {
					let a = 0,
						h = -1;
					for (
						;
						(h = r.indexOf(
							`
`,
							h + 1,
						)) !== -1;
					)
						a++;
					return [m, u * r.length, a];
				}
				static deduceInput(m, r, u) {
					if (!m)
						return {
							text: "",
							replacePrevCharCnt: 0,
							replaceNextCharCnt: 0,
							positionDelta: 0,
						};
					e.$2ub &&
						(console.log("------------------------deduceInput"),
						console.log(`PREVIOUS STATE: ${m.toString()}`),
						console.log(`CURRENT STATE: ${r.toString()}`));
					const a = Math.min(
							t.$Of(m.value, r.value),
							m.selectionStart,
							r.selectionStart,
						),
						h = Math.min(
							t.$Pf(m.value, r.value),
							m.value.length - m.selectionEnd,
							r.value.length - r.selectionEnd,
						),
						c = m.value.substring(a, m.value.length - h),
						n = r.value.substring(a, r.value.length - h),
						g = m.selectionStart - a,
						p = m.selectionEnd - a,
						o = r.selectionStart - a,
						f = r.selectionEnd - a;
					if (
						(e.$2ub &&
							(console.log(
								`AFTER DIFFING PREVIOUS STATE: <${c}>, selectionStart: ${g}, selectionEnd: ${p}`,
							),
							console.log(
								`AFTER DIFFING CURRENT STATE: <${n}>, selectionStart: ${o}, selectionEnd: ${f}`,
							)),
						o === f)
					) {
						const s = m.selectionStart - a;
						return (
							e.$2ub && console.log(`REMOVE PREVIOUS: ${s} chars`),
							{
								text: n,
								replacePrevCharCnt: s,
								replaceNextCharCnt: 0,
								positionDelta: 0,
							}
						);
					}
					const b = p - g;
					return {
						text: n,
						replacePrevCharCnt: b,
						replaceNextCharCnt: 0,
						positionDelta: 0,
					};
				}
				static deduceAndroidCompositionInput(m, r) {
					if (!m)
						return {
							text: "",
							replacePrevCharCnt: 0,
							replaceNextCharCnt: 0,
							positionDelta: 0,
						};
					if (
						(e.$2ub &&
							(console.log(
								"------------------------deduceAndroidCompositionInput",
							),
							console.log(`PREVIOUS STATE: ${m.toString()}`),
							console.log(`CURRENT STATE: ${r.toString()}`)),
						m.value === r.value)
					)
						return {
							text: "",
							replacePrevCharCnt: 0,
							replaceNextCharCnt: 0,
							positionDelta: r.selectionEnd - m.selectionEnd,
						};
					const u = Math.min(t.$Of(m.value, r.value), m.selectionEnd),
						a = Math.min(
							t.$Pf(m.value, r.value),
							m.value.length - m.selectionEnd,
						),
						h = m.value.substring(u, m.value.length - a),
						c = r.value.substring(u, r.value.length - a),
						n = m.selectionStart - u,
						g = m.selectionEnd - u,
						p = r.selectionStart - u,
						o = r.selectionEnd - u;
					return (
						e.$2ub &&
							(console.log(
								`AFTER DIFFING PREVIOUS STATE: <${h}>, selectionStart: ${n}, selectionEnd: ${g}`,
							),
							console.log(
								`AFTER DIFFING CURRENT STATE: <${c}>, selectionStart: ${p}, selectionEnd: ${o}`,
							)),
						{
							text: c,
							replacePrevCharCnt: g,
							replaceNextCharCnt: h.length - g,
							positionDelta: o - c.length,
						}
					);
				}
			}
			e.$3ub = E;
			class C {
				static a(m, r) {
					return Math.floor((m - 1) / r);
				}
				static b(m, r) {
					const u = m * r,
						a = u + 1,
						h = u + r;
					return new i.$iL(a, 1, h + 1, 1);
				}
				static fromEditorSelection(m, r, u, a) {
					const c = C.a(r.startLineNumber, u),
						n = C.b(c, u),
						g = C.a(r.endLineNumber, u),
						p = C.b(g, u);
					let o = n.intersectRanges(
						new i.$iL(1, 1, r.startLineNumber, r.startColumn),
					);
					if (a && m.getValueLengthInRange(o, w.EndOfLinePreference.LF) > 500) {
						const v = m.modifyPosition(o.getEndPosition(), -500);
						o = i.$iL.fromPositions(v, o.getEndPosition());
					}
					const f = m.getValueInRange(o, w.EndOfLinePreference.LF),
						b = m.getLineCount(),
						s = m.getLineMaxColumn(b);
					let l = p.intersectRanges(
						new i.$iL(r.endLineNumber, r.endColumn, b, s),
					);
					if (a && m.getValueLengthInRange(l, w.EndOfLinePreference.LF) > 500) {
						const v = m.modifyPosition(l.getStartPosition(), 500);
						l = i.$iL.fromPositions(l.getStartPosition(), v);
					}
					const y = m.getValueInRange(l, w.EndOfLinePreference.LF);
					let $;
					if (c === g || c + 1 === g)
						$ = m.getValueInRange(r, w.EndOfLinePreference.LF);
					else {
						const v = n.intersectRanges(r),
							S = p.intersectRanges(r);
						$ =
							m.getValueInRange(v, w.EndOfLinePreference.LF) +
							"\u2026" +
							m.getValueInRange(S, w.EndOfLinePreference.LF);
					}
					return (
						a &&
							$.length > 2 * 500 &&
							($ =
								$.substring(0, 500) +
								"\u2026" +
								$.substring($.length - 500, $.length)),
						new E(
							f + $ + y,
							f.length,
							f.length + $.length,
							r,
							o.endLineNumber - o.startLineNumber,
						)
					);
				}
			}
			e.$4ub = C;
		}),
		