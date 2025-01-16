define(de[997], he([1, 0, 149, 12]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Coc = void 0),
				(e.$woc = d),
				(e.$xoc = m),
				(e.$yoc = r),
				(e.$zoc = u),
				(e.$Aoc = a),
				(e.$Boc = n);
			const w = new t.$Y(() => C(!0)),
				E = new t.$Y(() => C(!1));
			function C(y) {
				let $ = 0,
					v = 0,
					S = 0,
					I = 0;
				function T() {
					return `(?<row${$++}>\\d+)`;
				}
				function P() {
					return `(?<col${v++}>\\d+)`;
				}
				function k() {
					return `(?<rowEnd${S++}>\\d+)`;
				}
				function L() {
					return `(?<colEnd${I++}>\\d+)`;
				}
				const D = y ? "$" : "",
					N = [
						`(?::|#| |['"],)${T()}([:.]${P()}(?:-(?:${k()}\\.)?${L()})?)?` + D,
						`['"]?(?:,? |: ?| on )lines? ${T()}(?:-${k()})?(?:,? (?:col(?:umn)?|characters?) ${P()}(?:-${L()})?)?` +
							D,
						`:? ?[\\[\\(]${T()}(?:, ?${P()})?[\\]\\)]` + D,
					]
						.join("|")
						.replace(/ /g, "[\xA0 ]");
				return new RegExp(`(${N})`, y ? void 0 : "g");
			}
			function d(y) {
				const $ = u(y)?.suffix;
				return $ ? y.substring(0, $.index) : y;
			}
			function m(y) {
				const $ = y.startsWith("\\\\?\\") ? 4 : 0,
					v = y.indexOf("?", $);
				return v === -1 ? y : y.substring(0, v);
			}
			function r(y) {
				let $;
				const v = [];
				for (E.value.lastIndex = 0; ($ = E.value.exec(y)) !== null; ) {
					const S = a($);
					if (S === null) break;
					v.push(S);
				}
				return v;
			}
			function u(y) {
				return a(w.value.exec(y));
			}
			function a(y) {
				const $ = y?.groups;
				return !$ || y.length < 1
					? null
					: {
							row: h($.row0 || $.row1 || $.row2),
							col: h($.col0 || $.col1 || $.col2),
							rowEnd: h($.rowEnd0 || $.rowEnd1 || $.rowEnd2),
							colEnd: h($.colEnd0 || $.colEnd1 || $.colEnd2),
							suffix: { index: y.index, text: y[0] },
						};
			}
			function h(y) {
				return y === void 0 ? y : parseInt(y);
			}
			const c = /(?<path>(?:file:\/\/\/)?[^\s\|<>\[\({][^\s\|<>]*)$/;
			function n(y, $) {
				const v = o(y),
					S = l(y, $);
				return g(v, S), v;
			}
			function g(y, $) {
				y.length === 0 && y.push(...$);
				for (const v of $) p(y, v, 0, y.length);
			}
			function p(y, $, v, S) {
				if (y.length === 0) {
					y.push($);
					return;
				}
				if (v > S) return;
				const I = Math.floor((v + S) / 2);
				if (
					I >= y.length ||
					($.path.index < y[I].path.index &&
						(I === 0 || $.path.index > y[I - 1].path.index))
				) {
					(I >= y.length ||
						($.path.index + $.path.text.length < y[I].path.index &&
							(I === 0 ||
								$.path.index >
									y[I - 1].path.index + y[I - 1].path.text.length))) &&
						y.splice(I, 0, $);
					return;
				}
				$.path.index > y[I].path.index ? p(y, $, I + 1, S) : p(y, $, v, I - 1);
			}
			function o(y) {
				const $ = [],
					v = r(y);
				for (const S of v) {
					const T = y.substring(0, S.suffix.index).match(c);
					if (T && T.index !== void 0 && T.groups?.path) {
						let P = T.index,
							k = T.groups.path,
							L;
						const D = k.match(/^(?<prefix>['"]+)/);
						if (D?.groups?.prefix) {
							if (
								((L = { index: P, text: D.groups.prefix }),
								(k = k.substring(L.text.length)),
								k.trim().length === 0)
							)
								continue;
							if (
								D.groups.prefix.length > 1 &&
								S.suffix.text[0].match(/['"]/) &&
								D.groups.prefix[D.groups.prefix.length - 1] === S.suffix.text[0]
							) {
								const M = D.groups.prefix.length - 1;
								(L.index += M),
									(L.text = D.groups.prefix[D.groups.prefix.length - 1]),
									(P += M);
							}
						}
						$.push({
							path: { index: P + (L?.text.length || 0), text: k },
							prefix: L,
							suffix: S,
						});
					}
				}
				return $;
			}
			var f;
			(function (y) {
				(y.PathPrefix = "(?:\\.\\.?|\\~|file://)"),
					(y.PathSeparatorClause = "\\/"),
					(y.ExcludedPathCharactersClause = "[^\\0<>\\?\\s!`&*()'\":;\\\\]"),
					(y.ExcludedStartPathCharactersClause =
						"[^\\0<>\\?\\s!`&*()\\[\\]'\":;\\\\]"),
					(y.WinOtherPathPrefix = "\\.\\.?|\\~"),
					(y.WinPathSeparatorClause = "(?:\\\\|\\/)"),
					(y.WinExcludedPathCharactersClause =
						"[^\\0<>\\?\\|\\/\\s!`&*()'\":;]"),
					(y.WinExcludedStartPathCharactersClause =
						"[^\\0<>\\?\\|\\/\\s!`&*()\\[\\]'\":;]");
			})(f || (f = {}));
			const b =
				"(?:(?:" +
				f.PathPrefix +
				"|(?:" +
				f.ExcludedStartPathCharactersClause +
				f.ExcludedPathCharactersClause +
				"*))?(?:" +
				f.PathSeparatorClause +
				"(?:" +
				f.ExcludedPathCharactersClause +
				")+)+)";
			e.$Coc = "(?:\\\\\\\\\\?\\\\|file:\\/\\/\\/)?[a-zA-Z]:";
			const s =
				`(?:(?:(?:${e.$Coc}|${f.WinOtherPathPrefix})|(?:` +
				f.WinExcludedStartPathCharactersClause +
				f.WinExcludedPathCharactersClause +
				"*))?(?:" +
				f.WinPathSeparatorClause +
				"(?:" +
				f.WinExcludedPathCharactersClause +
				")+)+)";
			function l(y, $) {
				const v = [],
					S = new RegExp($ === i.OperatingSystem.Windows ? s : b, "g");
				let I;
				for (; (I = S.exec(y)) !== null; ) {
					let T = I[0],
						P = I.index;
					if (!T) break;
					(((y.startsWith("--- a/") || y.startsWith("+++ b/")) && P === 4) ||
						(y.startsWith("diff --git") &&
							(T.startsWith("a/") || T.startsWith("b/")))) &&
						((T = T.substring(2)), (P += 2)),
						v.push({
							path: { index: P, text: T },
							prefix: void 0,
							suffix: void 0,
						});
				}
				return v;
			}
		}),
		