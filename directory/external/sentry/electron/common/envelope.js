import '../../../../require.js';
import '../../../../exports.js';
import '../../utils/index.js';
define(de[2146], he([1, 0, 80]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.eventFromEnvelope = i);
			function i(w) {
				let E;
				const C = [];
				let d;
				return (
					(0, t.forEachEnvelopeItem)(w, (m, r) => {
						if (r === "event" || r === "transaction" || r === "feedback")
							E = Array.isArray(m) ? m[1] : void 0;
						else if (r === "attachment") {
							const [u, a] = m;
							C.push({
								filename: u.filename,
								attachmentType: u.attachment_type,
								contentType: u.content_type,
								data: a,
							});
						} else r === "profile" && (d = m[1]);
					}),
					E ? [E, C, d] : void 0
				);
			}
		}),
		