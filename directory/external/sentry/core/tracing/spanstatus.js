import '../../../../require.js';
import '../../../../exports.js';
define(de[636], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.SPAN_STATUS_ERROR = e.SPAN_STATUS_OK = e.SPAN_STATUS_UNSET = void 0),
				(e.getSpanStatusFromHttpCode = t),
				(e.setHttpStatus = i),
				(e.SPAN_STATUS_UNSET = 0),
				(e.SPAN_STATUS_OK = 1),
				(e.SPAN_STATUS_ERROR = 2);
			function t(w) {
				if (w < 400 && w >= 100) return { code: e.SPAN_STATUS_OK };
				if (w >= 400 && w < 500)
					switch (w) {
						case 401:
							return { code: e.SPAN_STATUS_ERROR, message: "unauthenticated" };
						case 403:
							return {
								code: e.SPAN_STATUS_ERROR,
								message: "permission_denied",
							};
						case 404:
							return { code: e.SPAN_STATUS_ERROR, message: "not_found" };
						case 409:
							return { code: e.SPAN_STATUS_ERROR, message: "already_exists" };
						case 413:
							return {
								code: e.SPAN_STATUS_ERROR,
								message: "failed_precondition",
							};
						case 429:
							return {
								code: e.SPAN_STATUS_ERROR,
								message: "resource_exhausted",
							};
						case 499:
							return { code: e.SPAN_STATUS_ERROR, message: "cancelled" };
						default:
							return { code: e.SPAN_STATUS_ERROR, message: "invalid_argument" };
					}
				if (w >= 500 && w < 600)
					switch (w) {
						case 501:
							return { code: e.SPAN_STATUS_ERROR, message: "unimplemented" };
						case 503:
							return { code: e.SPAN_STATUS_ERROR, message: "unavailable" };
						case 504:
							return {
								code: e.SPAN_STATUS_ERROR,
								message: "deadline_exceeded",
							};
						default:
							return { code: e.SPAN_STATUS_ERROR, message: "internal_error" };
					}
				return { code: e.SPAN_STATUS_ERROR, message: "unknown_error" };
			}
			function i(w, E) {
				w.setAttribute("http.response.status_code", E);
				const C = t(E);
				C.message !== "unknown_error" && w.setStatus(C);
			}
		}),
		