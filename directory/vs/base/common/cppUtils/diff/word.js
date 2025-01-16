define(de[1130], he([1, 0, 1129, 1499]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$oqb = void 0),
				(e.$pqb = C),
				(e.$qqb = d);
			const w =
					/^[a-zA-Z\u{C0}-\u{FF}\u{D8}-\u{F6}\u{F8}-\u{2C6}\u{2C8}-\u{2D7}\u{2DE}-\u{2FF}\u{1E00}-\u{1EFF}]+$/u,
				E = /\S/;
			(e.$oqb = new t.Diff()),
				(e.$oqb.equals = function (m, r) {
					return (
						this.options.ignoreCase &&
							((m = m.toLowerCase()), (r = r.toLowerCase())),
						m === r ||
							(this.options.ignoreWhitespace && !E.test(m) && !E.test(r))
					);
				}),
				(e.$oqb.tokenize = function (m) {
					let r = m.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/);
					for (let u = 0; u < r.length - 1; u++)
						!r[u + 1] &&
							r[u + 2] &&
							w.test(r[u]) &&
							w.test(r[u + 2]) &&
							((r[u] += r[u + 2]), r.splice(u + 1, 2), u--);
					return r;
				});
			function C(m, r, u = {}, a = !0) {
				return m.length > 2e4 ||
					r.length > 2e4 ||
					e.$oqb.tokenize(m).length > 2e3 ||
					e.$oqb.tokenize(r).length > 2e3
					? (console.error(
							"BAD BAD BAD BAD BAD. THIS SHOULD NOT HAPPEN. PLEASE FIX THE CPP BUG. diffWords received strings that were too long. Returning the trivial diff.",
							m.length,
							r.length,
						),
						[
							{ value: m, removed: !0 },
							{ value: r, added: !0 },
						])
					: ((u = (0, i.$eqb)(u, { ignoreWhitespace: a })),
						e.$oqb.diff(m, r, u));
			}
			function d(m, r, u) {
				return e.$oqb.diff(m, r, u);
			}
		}),
		