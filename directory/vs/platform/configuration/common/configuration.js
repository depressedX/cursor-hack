import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/types.js';
import '../../../base/common/uri.js';
import '../../instantiation/common/instantiation.js';
define(de[10], he([1, 0, 28, 9, 5]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ConfigurationTarget = e.$gj = void 0),
				(e.$hj = E),
				(e.$ij = C),
				(e.$jj = m),
				(e.$kj = r),
				(e.$lj = u),
				(e.$mj = a),
				(e.$nj = h),
				(e.$oj = n),
				(e.$pj = g),
				(e.$qj = p),
				(t = mt(t)),
				(e.$gj = (0, w.$Mi)("configurationService"));
			function E(o) {
				return (
					o &&
					typeof o == "object" &&
					(!o.overrideIdentifier || typeof o.overrideIdentifier == "string") &&
					(!o.resource || o.resource instanceof i.URI)
				);
			}
			function C(o) {
				return (
					o &&
					typeof o == "object" &&
					(!o.overrideIdentifiers || Array.isArray(o.overrideIdentifiers)) &&
					!o.overrideIdentifier &&
					(!o.resource || o.resource instanceof i.URI)
				);
			}
			var d;
			(function (o) {
				(o[(o.APPLICATION = 1)] = "APPLICATION"),
					(o[(o.USER = 2)] = "USER"),
					(o[(o.USER_LOCAL = 3)] = "USER_LOCAL"),
					(o[(o.USER_REMOTE = 4)] = "USER_REMOTE"),
					(o[(o.WORKSPACE = 5)] = "WORKSPACE"),
					(o[(o.WORKSPACE_FOLDER = 6)] = "WORKSPACE_FOLDER"),
					(o[(o.DEFAULT = 7)] = "DEFAULT"),
					(o[(o.MEMORY = 8)] = "MEMORY");
			})(d || (e.ConfigurationTarget = d = {}));
			function m(o) {
				switch (o) {
					case d.APPLICATION:
						return "APPLICATION";
					case d.USER:
						return "USER";
					case d.USER_LOCAL:
						return "USER_LOCAL";
					case d.USER_REMOTE:
						return "USER_REMOTE";
					case d.WORKSPACE:
						return "WORKSPACE";
					case d.WORKSPACE_FOLDER:
						return "WORKSPACE_FOLDER";
					case d.DEFAULT:
						return "DEFAULT";
					case d.MEMORY:
						return "MEMORY";
				}
			}
			function r(o) {
				return (
					o.applicationValue !== void 0 ||
					o.userValue !== void 0 ||
					o.userLocalValue !== void 0 ||
					o.userRemoteValue !== void 0 ||
					o.workspaceValue !== void 0 ||
					o.workspaceFolderValue !== void 0
				);
			}
			function u(o, f) {
				const b = Object.create(null);
				for (const s in o) a(b, s, o[s], f);
				return b;
			}
			function a(o, f, b, s) {
				const l = f.split("."),
					y = l.pop();
				let $ = o;
				for (let v = 0; v < l.length; v++) {
					const S = l[v];
					let I = $[S];
					switch (typeof I) {
						case "undefined":
							I = $[S] = Object.create(null);
							break;
						case "object":
							if (I === null) {
								s(`Ignoring ${f} as ${l.slice(0, v + 1).join(".")} is null`);
								return;
							}
							break;
						default:
							s(
								`Ignoring ${f} as ${l.slice(0, v + 1).join(".")} is ${JSON.stringify(I)}`,
							);
							return;
					}
					$ = I;
				}
				if (typeof $ == "object" && $ !== null)
					try {
						$[y] = b;
					} catch {
						s(`Ignoring ${f} as ${l.join(".")} is ${JSON.stringify($)}`);
					}
				else s(`Ignoring ${f} as ${l.join(".")} is ${JSON.stringify($)}`);
			}
			function h(o, f) {
				const b = f.split(".");
				c(o, b);
			}
			function c(o, f) {
				const b = f.shift();
				if (f.length === 0) {
					delete o[b];
					return;
				}
				if (Object.keys(o).indexOf(b) !== -1) {
					const s = o[b];
					typeof s == "object" &&
						!Array.isArray(s) &&
						(c(s, f), Object.keys(s).length === 0 && delete o[b]);
				}
			}
			function n(o, f, b) {
				function s($, v) {
					let S = $;
					for (const I of v) {
						if (typeof S != "object" || S === null) return;
						S = S[I];
					}
					return S;
				}
				const l = f.split("."),
					y = s(o, l);
				return typeof y > "u" ? b : y;
			}
			function g(o, f, b) {
				Object.keys(f).forEach((s) => {
					s !== "__proto__" &&
						(s in o
							? t.$ng(o[s]) && t.$ng(f[s])
								? g(o[s], f[s], b)
								: b && (o[s] = f[s])
							: (o[s] = f[s]));
				});
			}
			function p(o) {
				return o.replace(/[\[\]]/g, "");
			}
		}),
		