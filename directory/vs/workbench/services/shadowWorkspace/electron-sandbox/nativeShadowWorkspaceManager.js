import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../workspaces/common/workspaceEditing.js';
import '../../../../platform/product/common/productService.js';
import '../../environment/electron-sandbox/environmentService.js';
import '../common/shadowWorkspaceService.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/files/common/files.js';
import '../../workspaces/browser/workspaces.js';
define(
			de[1950],
			he([
				1, 0, 76, 3, 9, 20, 5, 110, 25, 256, 449, 62, 151, 626, 68, 22, 4003,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*extensions*/,
 C /*instantiation*/,
 d /*native*/,
 m /*workspace*/,
 r /*workspaces*/,
 u /*workspaceEditing*/,
 a /*productService*/,
 h /*environmentService*/,
 c /*shadowWorkspaceService*/,
 n /*uriIdentity*/,
 g /*files*/,
 p /*workspaces*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$zcd = e.$ycd = void 0),
					(e.$ycd = (0, C.$Mi)("INativeShadowWorkspaceManager"));
				let o = class extends i.$1c {
					constructor(b, s, l, y, $, v, S, I) {
						super(),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.m = S),
							(this.n = I),
							(this.a = (0, a.$Dk)(this.c, this.g)),
							(this.q = void 0),
							(this.s = void 0),
							this.j.registerShadowWorkspaceManager(this);
					}
					dispose() {
						this.closeShadowWorkspace(), super.dispose();
					}
					available() {
						return !this.c.remoteAuthority;
					}
					async cleanUpOldFiles() {
						const s = (await this.n.resolve(this.a)).children
							?.filter((l) => l.name.endsWith(`.${m.$9i}`))
							.map((l) => l.name);
						s?.sort(),
							s?.length &&
								s
									.slice(0, -5)
									.forEach((l) => this.n.del(w.URI.joinPath(this.a, l)));
					}
					async createShadowWorkspace() {
						this.s && (await this.closeShadowWorkspace());
						const b = (Date.now() + Math.round(Math.random() * 1e3)).toString();
						this.s = w.URI.joinPath(this.a, `Untitled-${b}.${m.$9i}`);
						const s = this.b.getWorkspace().folders,
							l = [];
						for (const $ of s)
							l.push((0, r.$hRb)($.uri, !0, $.name, this.a, this.m.extUri));
						const y = {
							folders: l,
							remoteAuthority: this.c.remoteAuthority,
							transient: !0,
						};
						return (
							await this.n.writeFile(
								this.s,
								t.$Te.fromString(JSON.stringify(y, null, "	")),
							),
							this.cleanUpOldFiles().catch(($) =>
								console.error("failed to clean up old shadow workspaces", $),
							),
							(0, p.$L3c)(this.s)
						);
					}
					hasOpenShadowWorkspace() {
						return this.q !== void 0;
					}
					async openShadowWorkspace() {
						this.closeShadowWorkspace();
						const b = await this.createShadowWorkspace();
						await this.f.copyWorkspaceSettings(b, {
							overrides: { "files.autoSave": "off" },
						});
						const l = (
							await this.h.openWindow([{ workspaceUri: b.configPath }], {
								forceNewWindow: !0,
								shadowWindowForWorkspaceId: this.b.getWorkspace().id,
							})
						).at(0)?.windowId;
						l === void 0 && console.error("failed to open window"),
							(this.q = l);
					}
					async closeShadowWorkspace() {
						if (this.q) {
							const b = this.h.closeWindowNoFallback({
									targetWindowId: this.q,
								}),
								s = new Promise((l) => setTimeout(() => l("timedout"), 500));
							await Promise.race([b, s]),
								await this.h.destroyWindowNoFallback({
									targetWindowId: this.q,
								}),
								(this.q = void 0);
						}
						if (this.s) {
							try {
								await this.n.del(this.s);
							} catch (b) {
								console.warn(
									"failed to delete shadow workspace (this is probably fine)",
									b,
								);
							}
							this.s = void 0;
						}
					}
				};
				(e.$zcd = o),
					(e.$zcd = o =
						Ne(
							[
								j(0, m.$Vi),
								j(1, h.$ucd),
								j(2, u.$mRb),
								j(3, a.$Bk),
								j(4, d.$y7c),
								j(5, c.$k7b),
								j(6, n.$Vl),
								j(7, g.$ll),
							],
							o,
						)),
					(0, E.$lK)(e.$ycd, o, E.InstantiationType.Delayed);
			},
		)
