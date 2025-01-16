define(de[2018], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.contentTypeJson = e.contentTypeProto = e.contentTypeRegExp = void 0),
				(e.parseContentType = t),
				(e.contentTypeRegExp =
					/^application\/grpc(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i),
				(e.contentTypeProto = "application/grpc+proto"),
				(e.contentTypeJson = "application/grpc+json");
			function t(i) {
				const w = i?.match(e.contentTypeRegExp);
				return w ? { binary: !w[1] } : void 0;
			}
		}),
		