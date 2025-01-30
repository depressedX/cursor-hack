import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/lexical/lexical/lexical.js';
import './slashCommands/types.js';
define(de[817], he([1, 0, 158, 1005]), function (ce /*require*/,
 e /*exports*/,
 t /*lexical*/,
 i /*types*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hac = void 0),
				(e.$iac = s),
				(e.$jac = l),
				(e.$kac = y),
				(e.$lac = $),
				(e.$mac = v);
			const w = `,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\!%'"~=<>:;`,
				E = "\\b[A-Z][^\\s" + w + "]";
			e.$hac = { NAME: E, PUNCTUATION: w };
			const C = e.$hac.PUNCTUATION,
				d = ["@"].join(""),
				m = "[^" + d + C + "\\s]",
				r = "(?:\\.[ |$]| |[" + C + "/]|)",
				u = 120,
				a = new RegExp(
					"(^|\\s|\\()([" + d + "]((?:" + m + r + "){0," + u + "}))$",
				),
				h = 50,
				c = new RegExp("(^|\\s|\\()([" + d + "]((?:" + m + "){0," + h + "}))$"),
				n = new RegExp("(^|\\s)(#((?:" + m + r + "){0," + u + "}))$"),
				g = new RegExp("(^|\\s)(\\$((?:" + m + r + "){0," + u + "}))$");
			function p(S, I) {
				const T = n.exec(S);
				if (T !== null) {
					const P = T[1],
						k = T[3];
					if (k.length >= I)
						return {
							leadOffset: T.index + P.length,
							matchingString: k,
							replaceableString: T[2],
						};
				}
				return null;
			}
			function o(S, I) {
				const T = g.exec(S);
				if (T !== null) {
					const P = T[1],
						k = T[3];
					if (k.length >= I)
						return {
							leadOffset: T.index + P.length,
							matchingString: k,
							replaceableString: T[2],
						};
				}
				return null;
			}
			function f(S, I) {
				let T = a.exec(S);
				if ((T === null && (T = c.exec(S)), T !== null)) {
					const P = T[1],
						k = T[3];
					if (k.length >= I)
						return {
							leadOffset: T.index + P.length,
							matchingString: k,
							replaceableString: T[2],
						};
				}
				return null;
			}
			function b(S, I) {
				const T = S.trimEnd().match(/[^\s]+$/);
				return T
					? {
							leadOffset: S.length - T[0].length,
							matchingString: T[0],
							replaceableString: T[0],
						}
					: null;
			}
			function s(S) {
				return b(S, 0);
			}
			function l(S) {
				return f(S, 0);
			}
			function y(S) {
				return p(S, 0);
			}
			function $(S) {
				return o(S, 0);
			}
			function v(S, I) {
				let T = { current: !1 };
				if (
					(I.getEditorState().read(() => {
						const M = (0, t.$getRoot)().getTextContent();
						T.current = M.length > S.length + 2;
					}),
					T.current)
				)
					return null;
				const P = "[^/" + w + "\\s]",
					L = new RegExp(
						"(^|\\s)([/]((?:" +
							P +
							"){0," +
							(i.$n_b.reduce((D, M) => Math.max(D, M.length), 0) + 1) +
							"}))$",
					).exec(S);
				if (L !== null) {
					const D = L[1],
						M = L[3];
					if (M.length >= 0)
						return {
							leadOffset: L.index + D.length,
							matchingString: M,
							replaceableString: L[2],
						};
				}
				return null;
			}
		}),
		