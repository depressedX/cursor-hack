define(de[2899], he([1, 0, 678, 32, 269]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.resolveMarketplaceHeaders = E);
			async function E(r, u, a, h, c, n) {
				const g = {
					"X-Market-Client-Id": `${C(r)} ${d(r)}`,
					"User-Agent": `${C(r)} ${d(r)} (${m(r)})`,
				};
				if ((0, w.$Xp)(r, u) && (0, w.$Zp)(a) === i.TelemetryLevel.USAGE) {
					const p = await (0, t.getServiceMachineId)(u, h, c);
					(g["X-Market-User-Id"] = p),
						(g[`${C(r)}-SessionId`] = n.machineId || p);
				}
				return g;
			}
			function C(r) {
				return r.extensionsGallery?.galleryId === "vscode" ||
					r.extensionsGallery?.galleryId === "cursor"
					? "VSCode"
					: "Cursor";
			}
			function d(r) {
				return r.vscodeVersion;
			}
			function m(r) {
				return r.extensionsGallery?.galleryId === "vscode" ||
					r.extensionsGallery?.galleryId === "cursor"
					? "Code"
					: r.nameShort;
			}
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	