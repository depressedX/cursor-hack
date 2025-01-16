define(de[585], he([1, 0, 187]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$mo = i),
				(e.$no = w),
				(e.$oo = d),
				(e.$po = m);
			function i(r, u, a) {
				let h, c, n, g, p;
				if (u) {
					for (g = u.offset, p = g + u.length, n = g; n > 0 && !m(r, n - 1); )
						n--;
					let P = p;
					for (; P < r.length && !m(r, P); ) P++;
					(c = r.substring(n, P)), (h = C(c, a));
				} else (c = r), (h = 0), (n = 0), (g = 0), (p = r.length);
				const o = d(a, r);
				let f = !1,
					b = 0,
					s;
				a.insertSpaces ? (s = E(" ", a.tabSize || 4)) : (s = "	");
				const l = (0, t.$bo)(c, !1);
				let y = !1;
				function $() {
					return o + E(s, h + b);
				}
				function v() {
					let P = l.scan();
					for (
						f = !1;
						P === t.SyntaxKind.Trivia || P === t.SyntaxKind.LineBreakTrivia;
					)
						(f = f || P === t.SyntaxKind.LineBreakTrivia), (P = l.scan());
					return (
						(y =
							P === t.SyntaxKind.Unknown ||
							l.getTokenError() !== t.ScanError.None),
						P
					);
				}
				const S = [];
				function I(P, k, L) {
					!y &&
						k < p &&
						L > g &&
						r.substring(k, L) !== P &&
						S.push({ offset: k, length: L - k, content: P });
				}
				let T = v();
				if (T !== t.SyntaxKind.EOF) {
					const P = l.getTokenOffset() + n,
						k = E(s, h);
					I(k, n, P);
				}
				for (; T !== t.SyntaxKind.EOF; ) {
					let P = l.getTokenOffset() + l.getTokenLength() + n,
						k = v(),
						L = "";
					for (
						;
						!f &&
						(k === t.SyntaxKind.LineCommentTrivia ||
							k === t.SyntaxKind.BlockCommentTrivia);
					) {
						const M = l.getTokenOffset() + n;
						I(" ", P, M),
							(P = l.getTokenOffset() + l.getTokenLength() + n),
							(L = k === t.SyntaxKind.LineCommentTrivia ? $() : ""),
							(k = v());
					}
					if (k === t.SyntaxKind.CloseBraceToken)
						T !== t.SyntaxKind.OpenBraceToken && (b--, (L = $()));
					else if (k === t.SyntaxKind.CloseBracketToken)
						T !== t.SyntaxKind.OpenBracketToken && (b--, (L = $()));
					else {
						switch (T) {
							case t.SyntaxKind.OpenBracketToken:
							case t.SyntaxKind.OpenBraceToken:
								b++, (L = $());
								break;
							case t.SyntaxKind.CommaToken:
							case t.SyntaxKind.LineCommentTrivia:
								L = $();
								break;
							case t.SyntaxKind.BlockCommentTrivia:
								f ? (L = $()) : (L = " ");
								break;
							case t.SyntaxKind.ColonToken:
								L = " ";
								break;
							case t.SyntaxKind.StringLiteral:
								if (k === t.SyntaxKind.ColonToken) {
									L = "";
									break;
								}
							case t.SyntaxKind.NullKeyword:
							case t.SyntaxKind.TrueKeyword:
							case t.SyntaxKind.FalseKeyword:
							case t.SyntaxKind.NumericLiteral:
							case t.SyntaxKind.CloseBraceToken:
							case t.SyntaxKind.CloseBracketToken:
								k === t.SyntaxKind.LineCommentTrivia ||
								k === t.SyntaxKind.BlockCommentTrivia
									? (L = " ")
									: k !== t.SyntaxKind.CommaToken &&
										k !== t.SyntaxKind.EOF &&
										(y = !0);
								break;
							case t.SyntaxKind.Unknown:
								y = !0;
								break;
						}
						f &&
							(k === t.SyntaxKind.LineCommentTrivia ||
								k === t.SyntaxKind.BlockCommentTrivia) &&
							(L = $());
					}
					const D = l.getTokenOffset() + n;
					I(L, P, D), (T = k);
				}
				return S;
			}
			function w(r, u) {
				const a = JSON.stringify(
					r,
					void 0,
					u.insertSpaces ? u.tabSize || 4 : "	",
				);
				return u.eol !== void 0 ? a.replace(/\r\n|\r|\n/g, u.eol) : a;
			}
			function E(r, u) {
				let a = "";
				for (let h = 0; h < u; h++) a += r;
				return a;
			}
			function C(r, u) {
				let a = 0,
					h = 0;
				const c = u.tabSize || 4;
				for (; a < r.length; ) {
					const n = r.charAt(a);
					if (n === " ") h++;
					else if (n === "	") h += c;
					else break;
					a++;
				}
				return Math.floor(h / c);
			}
			function d(r, u) {
				for (let a = 0; a < u.length; a++) {
					const h = u.charAt(a);
					if (h === "\r")
						return a + 1 < u.length &&
							u.charAt(a + 1) ===
								`
`
							? `\r
`
							: "\r";
					if (
						h ===
						`
`
					)
						return `
`;
				}
				return (
					(r && r.eol) ||
					`
`
				);
			}
			function m(r, u) {
				return (
					`\r
`.indexOf(r.charAt(u)) !== -1
				);
			}
		}),
		