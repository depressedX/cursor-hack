import '../../../../require.js';
import '../../../../exports.js';
define(de[873], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.uResponseVersionNotSupported =
					e.uResponseMethodNotAllowed =
					e.uResponseUnsupportedMediaType =
					e.uResponseNotFound =
					e.uResponseOk =
						void 0),
				(e.assertByteStreamRequest = t);
			function t(i) {
				if (
					!(
						typeof i.body == "object" &&
						i.body !== null &&
						Symbol.asyncIterator in i.body
					)
				)
					throw new Error("byte stream required, but received JSON");
			}
			(e.uResponseOk = { status: 200 }),
				(e.uResponseNotFound = { status: 404 }),
				(e.uResponseUnsupportedMediaType = { status: 415 }),
				(e.uResponseMethodNotAllowed = { status: 405 }),
				(e.uResponseVersionNotSupported = { status: 505 });
		}),
		