import '../../../../../require.js';
import '../../../../../exports.js';
import '../browser/utils.js';
import '../../../../editor/contrib/lightweightModel/common/lightweightTextModel.js';
define(de[2962], he([1, 0, 1228, 1155]), function (ce /*require*/,
 e /*exports*/,
 t /*utils*/,
 i /*lightweightTextModel*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$Ved = e.$Ued = void 0),
				(e.$Wed = C),
				(e.$Xed = d),
				(e.$Yed = m);
			class w {
				constructor(h) {
					(this.b = h), (this.a = []);
				}
				addSuggestion(h) {
					this.a.push(h), this.a.length > this.b && this.a.shift();
				}
				replaceSuggestion(h, c) {
					this.a = this.a.map((n) => (n.uniqueId === h ? c : n));
				}
				getAndEvictMatchingSuggestion(h) {
					const c = this.a.find((n) => n.uniqueId === h);
					return c && (this.a = this.a.filter((n) => n !== c)), c;
				}
				getMatchingSuggestion(h) {
					return this.a.find((c) => c.uniqueId === h);
				}
			}
			e.$Ued = w;
			class E {
				constructor(h, c) {
					(this.e = h),
						(this.f = c),
						(this.a = []),
						(this.b = []),
						(this.c = ""),
						(this.d = []);
				}
				addListener(h) {
					this.d.push(h);
				}
				removeSuggestion(h) {
					this.a = this.a.filter((c) => c.uniqueId !== h.uniqueId);
				}
				addSuggestion(h, c, n) {
					const g = {
							...h,
							trackedRange: {
								startLineNumber: h.startingSuggestionRange.startLineNumber,
								startColumn: h.startingSuggestionRange.startColumn,
								endLineNumber: h.startingSuggestionRange.endLineNumberInclusive,
								endColumn: h.startingSuggestionRange.endColumn,
							},
							trackedText: h.fullOriginalText,
						},
						p = () => {
							const b = this.b.filter(
								(s) => s.versionId > g.modelVersionWhenInvoked,
							);
							if (
								!b.every((s, l) =>
									l === 0
										? s.versionId - 1 === g.modelVersionWhenInvoked
										: s.versionId - 1 === b[l - 1].versionId,
								) ||
								g.uri !== c.uri ||
								b.some((s) => C(g, s))
							)
								return !1;
							for (const s of b) if (d(g, s, c)) return !1;
							this.a.push(g), this.a.length > this.e && this.a.shift();
							for (const s of this.d) s(g, c, n);
							return !0;
						},
						o = performance.now(),
						f = p();
					console.log(
						`[CPP INFO] Adding suggestion took ${performance.now() - o}ms`,
					),
						f
							? console.log(`[CPP INFO] accepted suggestion ${g.requestId}`)
							: (console.log(`[CPP INFO] rejected suggestion ${g.requestId}`),
								g.abortController?.abort());
				}
				getSuggestions() {
					return this.a;
				}
				replaceSuggestionOnChunkedFollowup(h, c) {
					const n = {
						...c,
						trackedRange: {
							startLineNumber: c.startingSuggestionRange.startLineNumber,
							startColumn: c.startingSuggestionRange.startColumn,
							endLineNumber: c.startingSuggestionRange.endLineNumberInclusive,
							endColumn: c.startingSuggestionRange.endColumn,
						},
						trackedText: c.fullOriginalText,
					};
					this.a = this.a.map((g) => (g.uniqueId === h ? n : g));
				}
				getAndEvictMatchingSuggestion(h, c) {
					if (c.getVersionId() !== this.b.at(-1)?.versionId) {
						this.a = [];
						return;
					}
					const n = this.a.find((g) => g.uniqueId === h);
					return (
						n &&
							((this.a = this.a.filter((g) => g !== n)),
							n.abortController?.abort()),
						n
					);
				}
				getMatchingSuggestion(h) {
					return this.a.find((c) => c.uniqueId === h);
				}
				addEditAndUpdateCachedSuggestions(h, c) {
					const n = performance.now();
					this.c !== c.id && ((this.b = []), (this.c = c.id)), this.b.push(h);
					const g = this.a;
					(this.a = this.a.filter((o) => o.uri === c.uri)),
						(this.a = this.a.filter((o) => !d(o, h, c))),
						g
							.filter((o) => !this.a.includes(o))
							.forEach((o) => o.abortController?.abort()),
						this.b.length > this.f && this.b.shift();
				}
				popCacheHit(h) {
					this.a = this.a.filter((n) => n.uri === h.uri);
					const c = this.a.pop();
					if (c !== void 0) {
						const { trackedText: n, trackedRange: g, ...p } = c;
						return p;
					}
				}
			}
			e.$Ved = E;
			function C(a, h) {
				return h.changes.some((c) =>
					c.rangeLength > 1 ||
					c.range.startLineNumber < a.startingSuggestionRange.startLineNumber ||
					c.range.endLineNumber >
						a.startingSuggestionRange.endLineNumberInclusive
						? !0
						: c.text.includes(`
`),
				);
			}
			function d(a, h, c) {
				if (C(a, h)) return !0;
				const n = `
`.repeat(a.trackedRange.startLineNumber - 1),
					g = (0, i.$bfc)(n + a.trackedText, a.uri),
					p = (0, i.$dfc)(g, h.changes),
					o = (0, t.$Ged)(h.changes, g),
					f = u(a.trackedRange, o),
					b = p.getValueInRange(f),
					s = m(a.trackedText, b, a.diffText);
				if (s) {
					const l = p.getLineCount(),
						y =
							(p
								.getValue()
								.split(`
`)
								.at(-1)?.length ?? 0) + 1,
						$ = {
							startLineNumber: a.trackedRange.startLineNumber,
							startColumn: a.trackedRange.startColumn,
							endLineNumber: l,
							endColumn: y,
						},
						v = p.getValueInRange($);
					(a.trackedText = v), (a.trackedRange = $);
				}
				return !s;
			}
			function m(a, h, c) {
				const n = r(a, h),
					g = r(h, c);
				if (g.length === n.length) return !1;
				const p = c.slice(n.length),
					o = h.slice(n.length, g.length);
				return p.startsWith(o) && g.startsWith(n) && o.length < 4;
			}
			const r = (a, h) => {
				let c = 0;
				for (let n = 0; n < a.length && n < h.length && a[n] === h[n]; n++)
					c = n + 1;
				return a.slice(0, c);
			};
			function u(a, h) {
				return h.range.startLineNumber === h.range.endLineNumber &&
					h.range.startColumn === h.range.endColumn &&
					h.range.startColumn == a.endColumn &&
					h.range.startLineNumber == a.endLineNumber
					? {
							...a,
							endLineNumber: h.range.endLineNumber,
							endColumn: h.range.endColumn + h.text.length,
						}
					: a;
			}
		}),
		