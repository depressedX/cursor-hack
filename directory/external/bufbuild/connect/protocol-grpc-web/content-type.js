import '../../../../require.js';
import '../../../../exports.js';
define(de[2016], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.contentTypeJson = e.contentTypeProto = e.contentTypeRegExp = void 0),
				(e.parseContentType = t),
				(e.contentTypeRegExp =
					/^application\/grpc-web(-text)?(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i),
				(e.contentTypeProto = "application/grpc-web+proto"),
				(e.contentTypeJson = "application/grpc-web+json");
			function t(i) {
				const w = i?.match(e.contentTypeRegExp);
				if (!w) return;
				const E = !!w[1],
					C = !w[2];
				return { text: E, binary: C };
			}
		}),
		