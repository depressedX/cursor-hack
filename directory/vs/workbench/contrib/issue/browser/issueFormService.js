import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/severity.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/product/common/product.js';
import './issueReporterPage.js';
import './issueReporterService.js';
import '../../../services/auxiliaryWindow/browser/auxiliaryWindowService.js';
import '../../../services/host/browser/host.js';
import '../../../../css!vs/workbench/contrib/issue/browser/media/issueReporter.js';
define(
		de[3448],
		he([
			1, 0, 7, 3, 111, 4, 11, 8, 57, 109, 5, 34, 372, 3064, 3069, 703, 87, 2446,
		]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g, p) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$u6c = void 0),
				(w = xi(w)),
				(h = xi(h)),
				(c = xi(c));
			let o = class {
				constructor(b, s, l, y, $, v, S) {
					(this.g = b),
						(this.h = s),
						(this.i = l),
						(this.j = y),
						(this.k = $),
						(this.l = v),
						(this.m = S),
						(this.b = null),
						(this.c = new r.$Hn()),
						(this.d = ""),
						(this.e = ""),
						(this.f = "");
				}
				async openReporter(b) {
					this.hasToReload(b) ||
						(await this.openAuxIssueReporter(b),
						this.b &&
							this.g
								.createInstance(
									n.$t6c,
									!1,
									b,
									{ type: this.f, arch: this.d, release: this.e },
									h.default,
									this.b,
								)
								.render());
				}
				async openAuxIssueReporter(b, s) {
					let l = { width: 700, height: 800 };
					if (s && s.x && s.y) {
						const v = s.x + s.width / 2,
							S = s.y + s.height / 2;
						l = { ...l, x: v - 350, y: S - 400 };
					}
					const $ = new i.$Zc().add(
						await this.h.open({
							mode: g.AuxiliaryWindowMode.Normal,
							bounds: l,
							nativeTitlebar: !0,
							disableFullscreen: !0,
						}),
					);
					if ($) {
						await $.whenStylesHaveLoaded,
							($.window.document.title = "Issue Reporter"),
							$.window.document.body.classList.add("issue-reporter-body");
						const v = document.createElement("div");
						v.classList.add("monaco-workbench"),
							$.container.remove(),
							$.window.document.body.appendChild(v),
							(0, t.$Dhb)(v, (0, c.default)()),
							(this.b = $.window);
					} else console.error("Failed to open auxiliary window");
					this.b?.addEventListener("beforeunload", () => {
						$.window.close(), (this.b = null);
					});
				}
				async sendReporterMenu(b) {
					const s = this.i.createMenu(C.$XX.IssueReporter, this.j),
						l = s.getActions({ renderShortTitle: !0 }).flatMap(($) => $[1]);
					for (const $ of l)
						try {
							$.item &&
								"source" in $.item &&
								$.item.source?.id === b &&
								(this.c.add(b), await $.run());
						} catch (v) {
							console.error(v);
						}
					if (!this.c.has(b)) return;
					this.c.delete(new r.$Gn(b)), s.dispose();
					const y = this.a;
					return (this.a = void 0), y ?? void 0;
				}
				async closeReporter() {
					this.b?.close();
				}
				async reloadWithExtensionsDisabled() {
					if (this.b)
						try {
							await this.m.reload({ disableExtensions: !0 });
						} catch (b) {
							this.k.error(b);
						}
				}
				async showConfirmCloseDialog() {
					await this.l.prompt({
						type: w.default.Warning,
						message: (0, E.localize)(7209, null),
						buttons: [
							{
								label: (0, E.localize)(7210, null),
								run: () => {
									this.closeReporter(), (this.b = null);
								},
							},
							{ label: (0, E.localize)(7211, null), run: () => {} },
						],
					});
				}
				async showClipboardDialog() {
					let b = !1;
					return (
						await this.l.prompt({
							type: w.default.Warning,
							message: (0, E.localize)(7212, null),
							buttons: [
								{
									label: (0, E.localize)(7213, null),
									run: () => {
										b = !0;
									},
								},
								{
									label: (0, E.localize)(7214, null),
									run: () => {
										b = !1;
									},
								},
							],
						}),
						b
					);
				}
				hasToReload(b) {
					return b.extensionId && this.c.has(b.extensionId)
						? ((this.a = b), this.b?.focus(), !0)
						: this.b
							? (this.b.focus(), !0)
							: !1;
				}
			};
			(e.$u6c = o),
				(e.$u6c = o =
					Ne(
						[
							j(0, u.$Li),
							j(1, g.$AEb),
							j(2, C.$YX),
							j(3, d.$6j),
							j(4, a.$ik),
							j(5, m.$GO),
							j(6, p.$asb),
						],
						o,
					));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	