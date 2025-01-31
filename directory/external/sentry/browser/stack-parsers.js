import '../../../require.js';
import '../../../exports.js';
import '../utils/index.js';
define(de[1434], he([1, 0, 80]), function (ce /*require*/,
 e /*exports*/,
 t /*index*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.defaultStackParser =
					e.defaultStackLineParsers =
					e.opera11StackLineParser =
					e.opera10StackLineParser =
					e.winjsStackLineParser =
					e.geckoStackLineParser =
					e.chromeStackLineParser =
						void 0);
			const i = 10,
				w = 20,
				E = 30,
				C = 40,
				d = 50;
			function m($, v, S, I) {
				const T = {
					filename: $,
					function: v === "<anonymous>" ? t.UNKNOWN_FUNCTION : v,
					in_app: !0,
				};
				return S !== void 0 && (T.lineno = S), I !== void 0 && (T.colno = I), T;
			}
			const r = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
				u =
					/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
				a = /\((\S*)(?::(\d+))(?::(\d+))\)/,
				h = ($) => {
					const v = r.exec($);
					if (v) {
						const [, I, T, P] = v;
						return m(I, t.UNKNOWN_FUNCTION, +T, +P);
					}
					const S = u.exec($);
					if (S) {
						if (S[2] && S[2].indexOf("eval") === 0) {
							const k = a.exec(S[2]);
							k && ((S[2] = k[1]), (S[3] = k[2]), (S[4] = k[3]));
						}
						const [T, P] = y(S[1] || t.UNKNOWN_FUNCTION, S[2]);
						return m(P, T, S[3] ? +S[3] : void 0, S[4] ? +S[4] : void 0);
					}
				};
			e.chromeStackLineParser = [E, h];
			const c =
					/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
				n = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
				g = ($) => {
					const v = c.exec($);
					if (v) {
						if (v[3] && v[3].indexOf(" > eval") > -1) {
							const P = n.exec(v[3]);
							P &&
								((v[1] = v[1] || "eval"),
								(v[3] = P[1]),
								(v[4] = P[2]),
								(v[5] = ""));
						}
						let I = v[3],
							T = v[1] || t.UNKNOWN_FUNCTION;
						return (
							([T, I] = y(T, I)),
							m(I, T, v[4] ? +v[4] : void 0, v[5] ? +v[5] : void 0)
						);
					}
				};
			e.geckoStackLineParser = [d, g];
			const p =
					/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
				o = ($) => {
					const v = p.exec($);
					return v
						? m(v[2], v[1] || t.UNKNOWN_FUNCTION, +v[3], v[4] ? +v[4] : void 0)
						: void 0;
				};
			e.winjsStackLineParser = [C, o];
			const f = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
				b = ($) => {
					const v = f.exec($);
					return v ? m(v[2], v[3] || t.UNKNOWN_FUNCTION, +v[1]) : void 0;
				};
			e.opera10StackLineParser = [i, b];
			const s =
					/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
				l = ($) => {
					const v = s.exec($);
					return v
						? m(v[5], v[3] || v[4] || t.UNKNOWN_FUNCTION, +v[1], +v[2])
						: void 0;
				};
			(e.opera11StackLineParser = [w, l]),
				(e.defaultStackLineParsers = [
					e.chromeStackLineParser,
					e.geckoStackLineParser,
				]),
				(e.defaultStackParser = (0, t.createStackParser)(
					...e.defaultStackLineParsers,
				));
			const y = ($, v) => {
				const S = $.indexOf("safari-extension") !== -1,
					I = $.indexOf("safari-web-extension") !== -1;
				return S || I
					? [
							$.indexOf("@") !== -1 ? $.split("@")[0] : t.UNKNOWN_FUNCTION,
							S ? `safari-extension:${v}` : `safari-web-extension:${v}`,
						]
					: [$, v];
			};
		})
