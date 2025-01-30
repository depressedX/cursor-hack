import '../../../../require.js';
import '../../../../exports.js';
define(de[1079], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.contentTypeStreamJson =
					e.contentTypeStreamProto =
					e.contentTypeUnaryJson =
					e.contentTypeUnaryProto =
					e.contentTypeStreamRegExp =
					e.contentTypeUnaryRegExp =
					e.contentTypeRegExp =
						void 0),
				(e.parseContentType = w),
				(e.parseEncodingQuery = E),
				(e.contentTypeRegExp =
					/^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$/i),
				(e.contentTypeUnaryRegExp =
					/^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i),
				(e.contentTypeStreamRegExp =
					/^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$/i),
				(e.contentTypeUnaryProto = "application/proto"),
				(e.contentTypeUnaryJson = "application/json"),
				(e.contentTypeStreamProto = "application/connect+proto"),
				(e.contentTypeStreamJson = "application/connect+json");
			const t = "proto",
				i = "json";
			function w(C) {
				const d = C?.match(e.contentTypeRegExp);
				if (!d) return;
				const m = !!d[1],
					r = !!d[3];
				return { stream: m, binary: r };
			}
			function E(C) {
				switch (C) {
					case t:
						return { stream: !1, binary: !0 };
					case i:
						return { stream: !1, binary: !1 };
					default:
						return;
				}
			}
		}),
		