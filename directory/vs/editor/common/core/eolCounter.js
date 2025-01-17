import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/charCode.js';
define(de[531], he([1, 0, 120]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.StringEOL = void 0),
				(e.$6L = w);
			var i;
			(function (E) {
				(E[(E.Unknown = 0)] = "Unknown"),
					(E[(E.Invalid = 3)] = "Invalid"),
					(E[(E.LF = 1)] = "LF"),
					(E[(E.CRLF = 2)] = "CRLF");
			})(i || (e.StringEOL = i = {}));
			function w(E) {
				let C = 0,
					d = 0,
					m = 0,
					r = i.Unknown;
				for (let u = 0, a = E.length; u < a; u++) {
					const h = E.charCodeAt(u);
					h === t.CharCode.CarriageReturn
						? (C === 0 && (d = u),
							C++,
							u + 1 < a && E.charCodeAt(u + 1) === t.CharCode.LineFeed
								? ((r |= i.CRLF), u++)
								: (r |= i.Invalid),
							(m = u + 1))
						: h === t.CharCode.LineFeed &&
							((r |= i.LF), C === 0 && (d = u), C++, (m = u + 1));
				}
				return C === 0 && (d = E.length), [C, d, E.length - m, r];
			}
		}),
		