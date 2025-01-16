define(
			de[597],
			he([1, 0, 120, 37, 388, 74, 171, 1175]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$bwb = r),
					(e.$cwb = u),
					(e.$dwb = a),
					(e.$ewb = h),
					(i = mt(i));
				const m = {
					getInitialState: () => d.$$U,
					tokenizeEncoded: (c, n, g) => (0, d.$aV)(C.LanguageId.Null, g),
				};
				function r(c, n, g) {
					return h(n, c.languageIdCodec, E.$lM.get(g) || m);
				}
				async function u(c, n, g) {
					if (!g) return h(n, c.languageIdCodec, m);
					const p = await E.$lM.getOrCreate(g);
					return h(n, c.languageIdCodec, p || m);
				}
				function a(c, n, g, p, o, f, b) {
					let s = "<div>",
						l = p,
						y = 0,
						$ = !0;
					for (let v = 0, S = n.getCount(); v < S; v++) {
						const I = n.getEndOffset(v);
						if (I <= p) continue;
						let T = "";
						for (; l < I && l < o; l++) {
							const P = c.charCodeAt(l);
							switch (P) {
								case t.CharCode.Tab: {
									let k = f - ((l + y) % f);
									for (y += k - 1; k > 0; )
										b && $
											? ((T += "&#160;"), ($ = !1))
											: ((T += " "), ($ = !0)),
											k--;
									break;
								}
								case t.CharCode.LessThan:
									(T += "&lt;"), ($ = !1);
									break;
								case t.CharCode.GreaterThan:
									(T += "&gt;"), ($ = !1);
									break;
								case t.CharCode.Ampersand:
									(T += "&amp;"), ($ = !1);
									break;
								case t.CharCode.Null:
									(T += "&#00;"), ($ = !1);
									break;
								case t.CharCode.UTF8_BOM:
								case t.CharCode.LINE_SEPARATOR:
								case t.CharCode.PARAGRAPH_SEPARATOR:
								case t.CharCode.NEXT_LINE:
									(T += "\uFFFD"), ($ = !1);
									break;
								case t.CharCode.CarriageReturn:
									(T += "&#8203"), ($ = !1);
									break;
								case t.CharCode.Space:
									b && $ ? ((T += "&#160;"), ($ = !1)) : ((T += " "), ($ = !0));
									break;
								default:
									(T += String.fromCharCode(P)), ($ = !1);
							}
						}
						if (
							((s += `<span style="${n.getInlineStyle(v, g)}">${T}</span>`),
							I > o || l >= o)
						)
							break;
					}
					return (s += "</div>"), s;
				}
				function h(c, n, g) {
					let p = '<div class="monaco-tokenized-source">';
					const o = i.$zf(c);
					let f = g.getInitialState();
					for (let b = 0, s = o.length; b < s; b++) {
						const l = o[b];
						b > 0 && (p += "<br/>");
						const y = g.tokenizeEncoded(l, !0, f);
						w.$7L.convertToEndOffset(y.tokens, l.length);
						const v = new w.$7L(y.tokens, l, n).inflate();
						let S = 0;
						for (let I = 0, T = v.getCount(); I < T; I++) {
							const P = v.getClassName(I),
								k = v.getEndOffset(I);
							(p += `<span class="${P}">${i.$nf(l.substring(S, k))}</span>`),
								(S = k);
						}
						f = y.endState;
					}
					return (p += "</div>"), p;
				}
			},
		),
		