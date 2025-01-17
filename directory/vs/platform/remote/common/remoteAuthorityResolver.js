import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import '../../instantiation/common/instantiation.js';
define(de[211], he([1, 0, 29, 5]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$6l =
					e.RemoteAuthorityResolverErrorCode =
					e.$5l =
					e.$4l =
					e.RemoteConnectionType =
					e.$3l =
						void 0),
				(e.$7l = r),
				(e.$3l = (0, i.$Mi)("remoteAuthorityResolverService"));
			var w;
			(function (u) {
				(u[(u.WebSocket = 0)] = "WebSocket"), (u[(u.Managed = 1)] = "Managed");
			})(w || (e.RemoteConnectionType = w = {}));
			class E {
				constructor(a) {
					(this.id = a), (this.type = w.Managed);
				}
				toString() {
					return `Managed(${this.id})`;
				}
			}
			e.$4l = E;
			class C {
				constructor(a, h) {
					(this.host = a), (this.port = h), (this.type = w.WebSocket);
				}
				toString() {
					return `WebSocket(${this.host}:${this.port})`;
				}
			}
			e.$5l = C;
			var d;
			(function (u) {
				(u.Unknown = "Unknown"),
					(u.NotAvailable = "NotAvailable"),
					(u.TemporarilyNotAvailable = "TemporarilyNotAvailable"),
					(u.NoResolverFound = "NoResolverFound"),
					(u.InvalidAuthority = "InvalidAuthority");
			})(d || (e.RemoteAuthorityResolverErrorCode = d = {}));
			class m extends t.$fb {
				static isNotAvailable(a) {
					return a instanceof m && a._code === d.NotAvailable;
				}
				static isTemporarilyNotAvailable(a) {
					return a instanceof m && a._code === d.TemporarilyNotAvailable;
				}
				static isNoResolverFound(a) {
					return a instanceof m && a._code === d.NoResolverFound;
				}
				static isInvalidAuthority(a) {
					return a instanceof m && a._code === d.InvalidAuthority;
				}
				static isHandled(a) {
					return a instanceof m && a.isHandled;
				}
				constructor(a, h = d.Unknown, c) {
					super(a),
						(this._message = a),
						(this._code = h),
						(this._detail = c),
						(this.isHandled = h === d.NotAvailable && c === !0),
						Object.setPrototypeOf(this, m.prototype);
				}
			}
			e.$6l = m;
			function r(u) {
				const a = u.indexOf("+");
				return a === -1 ? u : u.substring(0, a);
			}
		}),
		