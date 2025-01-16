define(de[1408], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.MethodIdempotency = e.MethodKind = void 0);
			var t;
			(function (w) {
				(w[(w.Unary = 0)] = "Unary"),
					(w[(w.ServerStreaming = 1)] = "ServerStreaming"),
					(w[(w.ClientStreaming = 2)] = "ClientStreaming"),
					(w[(w.BiDiStreaming = 3)] = "BiDiStreaming");
			})(t || (e.MethodKind = t = {}));
			var i;
			(function (w) {
				(w[(w.NoSideEffects = 1)] = "NoSideEffects"),
					(w[(w.Idempotent = 2)] = "Idempotent");
			})(i || (e.MethodIdempotency = i = {}));
		}),
		