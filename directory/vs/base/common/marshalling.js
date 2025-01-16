define(de[197], he([1, 0, 76, 9, 221]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$hi = E),
				(e.$ii = C),
				(e.$ji = m);
			function E(r) {
				return JSON.stringify(r, d);
			}
			function C(r) {
				let u = JSON.parse(r);
				return (u = m(u)), u;
			}
			function d(r, u) {
				return u instanceof RegExp
					? { $mid: w.MarshalledId.Regexp, source: u.source, flags: u.flags }
					: u;
			}
			function m(r, u = 0) {
				if (!r || u > 200) return r;
				if (typeof r == "object") {
					switch (r.$mid) {
						case w.MarshalledId.Uri:
							return i.URI.revive(r);
						case w.MarshalledId.Regexp:
							return new RegExp(r.source, r.flags);
						case w.MarshalledId.Date:
							return new Date(r.source);
					}
					if (r instanceof t.$Te || r instanceof Uint8Array) return r;
					if (Array.isArray(r))
						for (let a = 0; a < r.length; ++a) r[a] = m(r[a], u + 1);
					else
						for (const a in r)
							Object.hasOwnProperty.call(r, a) && (r[a] = m(r[a], u + 1));
				}
				return r;
			}
		}),
		