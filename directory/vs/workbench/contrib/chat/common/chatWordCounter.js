import '../../../../../require.js';
import '../../../../../exports.js';
define(de[790], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$RKb = w),
				(e.$SKb = E);
			const t = String.raw,
				i =
					t`(?<!\\)` +
					t`(!?\[` +
					t`(?:` +
					t`[^\[\]\\]|` +
					t`\\.|` +
					t`\[[^\[\]]*\]` +
					t`)*` +
					t`\])` +
					t`(\(\s*)` +
					t`(` +
					t`[^\s\(\)<](?:[^\s\(\)]|\([^\s\(\)]*?\))*|` +
					t`<(?:\\[<>]|[^<>])+>` +
					t`)` +
					t`\s*(?:"[^"]*"|'[^']*'|\([^\(\)]*\))?\s*` +
					t`\)`;
			function w(C, d) {
				const m = Array.from(
						C.matchAll(
							new RegExp(
								i + t`|\p{sc=Han}|=+|\++|-+|[^\s\|\p{sc=Han}|=|\+|\-]+`,
								"gu",
							),
						),
					),
					r = m.slice(0, d),
					u =
						d > m.length
							? C.length
							: r.length
								? r.at(-1).index + r.at(-1)[0].length
								: 0,
					a = C.substring(0, u);
				return {
					value: a,
					returnedWordCount: r.length === 0 ? (a.length ? 1 : 0) : r.length,
					isFullString: u >= C.length,
					totalWordCount: m.length,
				};
			}
			function E(C) {
				return w(C, Number.MAX_SAFE_INTEGER).returnedWordCount;
			}
		}),
		