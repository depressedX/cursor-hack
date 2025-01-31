import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/platform.js';
import '../common/extensionsUtil.js';
import '../../../../platform/extensionManagement/common/extensionsScannerService.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/severity.js';
import '../../../../nls.js';
import '../../../../platform/notification/common/notification.js';
import '../../host/browser/host.js';
import '../../../../base/common/async.js';
import '../../userDataProfile/common/userDataProfile.js';
import '../../../../base/common/errors.js';
import '../../extensionManagement/common/extensionManagement.js';
import '../common/extensions.js';
import '../../environment/common/environmentService.js';
define(
		de[3782],
		he([1, 0, 12, 3334, 958, 34, 111, 4, 40, 87, 15, 133, 29, 157, 53, 78]),
		function (ce /*require*/,
 e /*exports*/,
 t /*platform*/,
 i /*extensionsUtil*/,
 w /*extensionsScannerService*/,
 E /*log*/,
 C /*severity*/,
 d /*nls*/,
 m /*notification*/,
 r /*host*/,
 u /*async*/,
 a /*userDataProfile*/,
 h /*errors*/,
 c /*extensionManagement*/,
 n /*extensions*/,
 g /*environmentService*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$1dd = void 0),
				(t = mt(t)),
				(C = xi(C));
			let p = class {
				constructor(f, b, s, l, y, $, v) {
					(this.c = f),
						(this.d = b),
						(this.f = s),
						(this.g = l),
						(this.h = y),
						(this.i = $),
						(this.j = v),
						(this.scannedExtensions = new Promise((S, I) => {
							(this.a = S), (this.b = I);
						}));
				}
				async startScanningExtensions() {
					try {
						const f = await this.k();
						this.a(f);
					} catch (f) {
						this.b(f);
					}
				}
				async k() {
					try {
						const f = t.$z,
							b = await Promise.allSettled([
								this.f.scanSystemExtensions({
									language: f,
									useCache: !0,
									checkControlFile: !0,
								}),
								this.f.scanUserExtensions({
									language: f,
									profileLocation: this.g.currentProfile.extensionsResource,
									useCache: !0,
								}),
								this.i.remoteAuthority
									? []
									: this.h.getInstalledWorkspaceExtensions(!1),
							]);
						let s = [],
							l = [],
							y = [],
							$ = [],
							v = !1;
						b[0].status === "fulfilled"
							? (s = b[0].value)
							: ((v = !0),
								this.j.error(
									"Error scanning system extensions:",
									(0, h.$bb)(b[0].reason),
								)),
							b[1].status === "fulfilled"
								? (l = b[1].value)
								: ((v = !0),
									this.j.error(
										"Error scanning user extensions:",
										(0, h.$bb)(b[1].reason),
									)),
							b[2].status === "fulfilled"
								? (y = b[2].value)
								: ((v = !0),
									this.j.error(
										"Error scanning workspace extensions:",
										(0, h.$bb)(b[2].reason),
									));
						try {
							$ = await this.f.scanExtensionsUnderDevelopment({ language: f }, [
								...s,
								...l,
							]);
						} catch (L) {
							this.j.error(L);
						}
						const S = s.map((L) => (0, w.$gr)(L, !1)),
							I = l.map((L) => (0, w.$gr)(L, !1)),
							T = y.map((L) => (0, n.$y2)(L, !1)),
							P = $.map((L) => (0, w.$gr)(L, !0)),
							k = (0, i.$afb)(S, I, T, P, this.j);
						if (!v) {
							const L = this.f.onDidChangeCache(() => {
								L.dispose(),
									this.c.prompt(C.default.Error, (0, d.localize)(12437, null), [
										{
											label: (0, d.localize)(12438, null),
											run: () => this.d.reload(),
										},
									]);
							});
							(0, u.$Nh)(5e3).then(() => L.dispose());
						}
						return k;
					} catch (f) {
						return (
							this.j.error("Error scanning installed extensions:"),
							this.j.error(f),
							[]
						);
					}
				}
			};
			(e.$1dd = p),
				(e.$1dd = p =
					Ne(
						[
							j(0, m.$4N),
							j(1, r.$asb),
							j(2, w.$dr),
							j(3, a.$P8),
							j(4, c.$GQb),
							j(5, g.$r8),
							j(6, E.$ik),
						],
						p,
					));
		},
	)
