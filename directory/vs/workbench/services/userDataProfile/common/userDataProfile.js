import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/types.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../base/common/uri.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../../base/common/codicons.js';
define(
			de[133],
			he([1, 0, 28, 4, 5, 8, 9, 79, 14]),
			function (ce /*require*/,
 e /*exports*/,
 t /*types*/,
 i /*nls*/,
 w /*instantiation*/,
 E /*contextkey*/,
 C /*uri*/,
 d /*iconRegistry*/,
 m /*codicons*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$68 =
						e.$58 =
						e.$48 =
						e.$38 =
						e.$28 =
						e.$18 =
						e.$Z8 =
						e.$Y8 =
						e.$X8 =
						e.$W8 =
						e.$U8 =
						e.$S8 =
						e.$Q8 =
						e.$P8 =
							void 0),
					(e.$R8 = r),
					(e.$T8 = u),
					(e.$V8 = a),
					(e.$P8 = (0, w.$Mi)("IUserDataProfileService")),
					(e.$Q8 = (0, w.$Mi)("IUserDataProfileManagementService"));
				function r(h) {
					const c = h;
					return !!(
						c &&
						typeof c == "object" &&
						((0, t.$sg)(c.settings) || typeof c.settings == "string") &&
						((0, t.$sg)(c.globalState) || typeof c.globalState == "string") &&
						((0, t.$sg)(c.extensions) || typeof c.extensions == "string")
					);
				}
				e.$S8 = "profile";
				function u(h, c) {
					return C.URI.from({
						scheme: c.urlProtocol,
						authority: e.$S8,
						path: h.startsWith("/") ? h : `/${h}`,
					});
				}
				e.$U8 = "profile-";
				function a(h) {
					return (
						h.authority === e.$S8 || new RegExp(`^${e.$U8}`).test(h.authority)
					);
				}
				(e.$W8 = (0, w.$Mi)("IUserDataProfileImportExportService")),
					(e.$X8 = (0, d.$$O)(
						"defaultProfile-icon",
						m.$ak.settings,
						(0, i.localize)(12961, null),
					)),
					(e.$Y8 = (0, i.localize2)(12963, "Profiles")),
					(e.$Z8 = { ...e.$Y8 }),
					(e.$18 = "code-profile"),
					(e.$28 = [
						{ name: (0, i.localize)(12962, null), extensions: [e.$18] },
					]),
					(e.$38 = new E.$5j("profiles.enabled", !0)),
					(e.$48 = new E.$5j("currentProfile", "")),
					(e.$58 = new E.$5j("isCurrentProfileTransient", !1)),
					(e.$68 = new E.$5j("hasProfiles", !1));
			},
		),
		