import '../../../../require.js';
import '../../../../exports.js';
import '../code.js';
define(de[1388], he([1, 0, 202]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.codeFromHttpStatus = i),
				(e.codeToHttpStatus = w);
			function i(E) {
				switch (E) {
					case 400:
						return t.Code.Internal;
					case 401:
						return t.Code.Unauthenticated;
					case 403:
						return t.Code.PermissionDenied;
					case 404:
						return t.Code.Unimplemented;
					case 429:
						return t.Code.Unavailable;
					case 502:
						return t.Code.Unavailable;
					case 503:
						return t.Code.Unavailable;
					case 504:
						return t.Code.Unavailable;
					default:
						return t.Code.Unknown;
				}
			}
			function w(E) {
				switch (E) {
					case t.Code.Canceled:
						return 499;
					case t.Code.Unknown:
						return 500;
					case t.Code.InvalidArgument:
						return 400;
					case t.Code.DeadlineExceeded:
						return 504;
					case t.Code.NotFound:
						return 404;
					case t.Code.AlreadyExists:
						return 409;
					case t.Code.PermissionDenied:
						return 403;
					case t.Code.ResourceExhausted:
						return 429;
					case t.Code.FailedPrecondition:
						return 400;
					case t.Code.Aborted:
						return 409;
					case t.Code.OutOfRange:
						return 400;
					case t.Code.Unimplemented:
						return 501;
					case t.Code.Internal:
						return 500;
					case t.Code.Unavailable:
						return 503;
					case t.Code.DataLoss:
						return 500;
					case t.Code.Unauthenticated:
						return 401;
					default:
						return 500;
				}
			}
		}),
		