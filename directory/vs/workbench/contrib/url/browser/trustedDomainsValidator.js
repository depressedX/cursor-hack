import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/network.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/clipboard/common/clipboardService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import './trustedDomainService.js';
import './trustedDomains.js';
import '../../../services/editor/common/editorService.js';
define(
		de[3279],
		he([
			1, 0, 23, 111, 9, 4, 121, 10, 57, 5, 41, 62, 63, 21, 32, 174, 1292, 1018,
			18,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p, o, f) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$tSc = void 0),
				(i = xi(i));
			let b = class {
				constructor(l, y, $, v, S, I, T, P, k, L, D, M) {
					(this.a = l),
						(this.b = y),
						(this.c = $),
						(this.d = v),
						(this.e = S),
						(this.f = I),
						(this.g = T),
						(this.h = P),
						(this.i = k),
						(this.j = L),
						(this.k = D),
						(this.l = M),
						this.a.registerValidator({
							shouldOpen: (N, A) => this.validateLink(N, A),
						});
				}
				async validateLink(l, y) {
					if (
						(!(0, t.$Vg)(l, t.Schemas.http) &&
							!(0, t.$Vg)(l, t.Schemas.https)) ||
						(y?.fromWorkspace &&
							this.k.isWorkspaceTrusted() &&
							!this.j.getValue(
								"workbench.trustedDomains.promptInTrustedWorkspace",
							))
					)
						return !0;
					const $ = l;
					let v;
					if (
						(typeof l == "string" ? (v = w.URI.parse(l)) : (v = l),
						await this.l.isValid(v))
					)
						return !0;
					{
						const {
							scheme: S,
							authority: I,
							path: T,
							query: P,
							fragment: k,
						} = v;
						let L = `${S}://${I}${T}`;
						const D = `${P ? "?" + P : ""}${k ? "#" + k : ""}`,
							M = Math.max(0, 60 - L.length),
							N = Math.min(Math.max(5, M), D.length);
						N === D.length
							? (L += D)
							: (L += D.charAt(0) + "..." + D.substring(D.length - N + 1));
						const { result: A } = await this.c.prompt({
							type: i.default.Info,
							message: (0, E.localize)(11120, null, this.d.nameShort),
							detail: typeof $ == "string" ? $ : L,
							buttons: [
								{ label: (0, E.localize)(11121, null), run: () => !0 },
								{
									label: (0, E.localize)(11122, null),
									run: () => (
										this.g.writeText(typeof $ == "string" ? $ : v.toString(!0)),
										!1
									),
								},
								{
									label: (0, E.localize)(11123, null),
									run: async () => {
										const { trustedDomains: R } = this.i.invokeFunction(o.$XXb),
											O = `${S}://${I}`,
											B = await (0, o.$VXb)(
												R,
												O,
												v,
												this.e,
												this.b,
												this.f,
												this.h,
											);
										return !!(B.indexOf("*") !== -1 || (0, p.$2Xb)(v, B));
									},
								},
							],
							cancelButton: { run: () => !1 },
						});
						return A;
					}
				}
			};
			(e.$tSc = b),
				(e.$tSc = b =
					Ne(
						[
							j(0, u.$7rb),
							j(1, c.$lq),
							j(2, m.$GO),
							j(3, a.$Bk),
							j(4, h.$DJ),
							j(5, f.$IY),
							j(6, C.$Vxb),
							j(7, n.$km),
							j(8, r.$Li),
							j(9, d.$gj),
							j(10, g.$pO),
							j(11, p.$ZXb),
						],
						b,
					));
		},
	),
		