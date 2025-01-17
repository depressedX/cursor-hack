import '../../../../require.js';
import '../../../../exports.js';
import '../protocol-grpc/headers.js';
define(de[1391], he([1, 0, 868]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.headerXGrpcWeb =
					e.headerXUserAgent =
					e.headerUserAgent =
					e.headerStatusDetailsBin =
					e.headerGrpcMessage =
					e.headerGrpcStatus =
					e.headerTimeout =
					e.headerAcceptEncoding =
					e.headerEncoding =
					e.headerContentType =
						void 0),
				Object.defineProperty(e, "headerContentType", {
					enumerable: !0,
					get: function () {
						return t.headerContentType;
					},
				}),
				Object.defineProperty(e, "headerEncoding", {
					enumerable: !0,
					get: function () {
						return t.headerEncoding;
					},
				}),
				Object.defineProperty(e, "headerAcceptEncoding", {
					enumerable: !0,
					get: function () {
						return t.headerAcceptEncoding;
					},
				}),
				Object.defineProperty(e, "headerTimeout", {
					enumerable: !0,
					get: function () {
						return t.headerTimeout;
					},
				}),
				Object.defineProperty(e, "headerGrpcStatus", {
					enumerable: !0,
					get: function () {
						return t.headerGrpcStatus;
					},
				}),
				Object.defineProperty(e, "headerGrpcMessage", {
					enumerable: !0,
					get: function () {
						return t.headerGrpcMessage;
					},
				}),
				Object.defineProperty(e, "headerStatusDetailsBin", {
					enumerable: !0,
					get: function () {
						return t.headerStatusDetailsBin;
					},
				}),
				Object.defineProperty(e, "headerUserAgent", {
					enumerable: !0,
					get: function () {
						return t.headerUserAgent;
					},
				}),
				(e.headerXUserAgent = "X-User-Agent"),
				(e.headerXGrpcWeb = "X-Grpc-Web");
		});
	var Ns =
			(this && this.__createBinding) ||
			(Object.create
				? function (ce, e, t, i) {
						i === void 0 && (i = t);
						var w = Object.getOwnPropertyDescriptor(e, t);
						(!w ||
							("get" in w ? !e.__esModule : w.writable || w.configurable)) &&
							(w = {
								enumerable: !0,
								get: function () {
									return e[t];
								},
							}),
							Object.defineProperty(ce, i, w);
					}
				: function (ce, e, t, i) {
						i === void 0 && (i = t), (ce[i] = e[t]);
					}),
		xa =
			(this && this.__setModuleDefault) ||
			(Object.create
				? function (ce, e) {
						Object.defineProperty(ce, "default", { enumerable: !0, value: e });
					}
				: function (ce, e) {
						ce.default = e;
					}),
		mt =
			(this && this.__importStar) ||
			function (ce) {
				if (ce && ce.__esModule) return ce;
				var e = {};
				if (ce != null)
					for (var t in ce)
						t !== "default" &&
							Object.prototype.hasOwnProperty.call(ce, t) &&
							Ns(e, ce, t);
				return xa(e, ce), e;
			};
	