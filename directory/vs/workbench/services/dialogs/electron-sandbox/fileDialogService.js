import '../../../../../require.js';
import '../../../../../exports.js';
import '../../host/browser/host.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../history/common/history.js';
import '../../environment/common/environmentService.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/native/common/native.js';
import '../browser/abstractFileDialogService.js';
import '../../../../base/common/network.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/workspaces/common/workspaces.js';
import '../../../../platform/label/common/label.js';
import '../../path/common/pathService.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../editor/common/editorService.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../../../base/browser/dom.js';
define(
			de[3584],
			he([
				1, 0, 87, 57, 25, 245, 78, 9, 5, 10, 20, 22, 41, 110, 3583, 23, 61, 256,
				73, 165, 31, 65, 18, 34, 45, 7,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*host*/,
				i /*dialogs*/,
				w /*workspace*/,
				E /*history*/,
				C /*environmentService*/,
				d /*uri*/,
				m /*instantiation*/,
				r /*configuration*/,
				u /*extensions*/,
				a /*files*/,
				h /*opener*/,
				c /*native*/,
				n /*abstractFileDialogService*/,
				g /*network*/,
				p /*language*/,
				o /*workspaces*/,
				f /*label*/,
				b /*pathService*/,
				s /*commands*/,
				l /*codeEditorService*/,
				y /*editorService*/,
				$ /*log*/,
				v /*reactiveStorageService*/,
				S /*dom*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$pdd = void 0);
				let I = class extends n.$n5c {
					constructor(P, k, L, D, M, N, A, R, O, B, U, z, F, x, H, q, V, G, K) {
						super(P, k, L, D, M, N, A, R, B, U, z, F, x, H, q, V, G, K),
							(this.M = O);
					}
					N(P) {
						return {
							forceNewWindow: P.forceNewWindow,
							telemetryExtraData: P.telemetryExtraData,
							defaultPath: P.defaultUri?.fsPath,
						};
					}
					O(P) {
						const k = this.g.getValue("files.simpleDialog.enable") === !0,
							L = this.g.getValue("window.openFilesInNewWindow") === "on";
						return {
							useSimplified:
								(P !== g.Schemas.file && P !== g.Schemas.vscodeUserData) || k,
							isSetting: L,
						};
					}
					async pickFileFolderAndOpen(P) {
						const k = this.J(P);
						P.defaultUri || (P.defaultUri = await this.defaultFilePath(k));
						const L = this.O(k);
						return L.useSimplified
							? this.w(k, P, L.isSetting)
							: this.M.pickFileFolderAndOpen(this.N(P));
					}
					async pickFileAndOpen(P) {
						const k = this.J(P);
						P.defaultUri || (P.defaultUri = await this.defaultFilePath(k));
						const L = this.O(k);
						return L.useSimplified
							? this.x(k, P, L.isSetting)
							: this.M.pickFileAndOpen(this.N(P));
					}
					async pickFolderAndOpen(P) {
						const k = this.J(P);
						return (
							P.defaultUri || (P.defaultUri = await this.defaultFolderPath(k)),
							this.O(k).useSimplified
								? this.z(k, P)
								: this.M.pickFolderAndOpen(this.N(P))
						);
					}
					async pickWorkspaceAndOpen(P) {
						P.availableFileSystems = this.K(P);
						const k = this.J(P);
						return (
							P.defaultUri ||
								(P.defaultUri = await this.defaultWorkspacePath(k)),
							this.O(k).useSimplified
								? this.A(k, P)
								: this.M.pickWorkspaceAndOpen(this.N(P))
						);
					}
					async pickFileToSave(P, k) {
						const L = this.J({ defaultUri: P, availableFileSystems: k }),
							D = this.L(P, k);
						if (this.O(L).useSimplified) return this.B(L, D);
						{
							const M = await this.M.showSaveDialog(this.P(D));
							if (M && !M.canceled && M.filePath) {
								const N = d.URI.file(M.filePath);
								return this.y(N), N;
							}
						}
					}
					P(P) {
						return (
							(P.defaultUri = P.defaultUri
								? d.URI.file(P.defaultUri.path)
								: void 0),
							{
								defaultPath: P.defaultUri?.fsPath,
								buttonLabel: P.saveLabel,
								filters: P.filters,
								title: P.title,
								targetWindowId: (0, S.$Ogb)().vscodeWindowId,
							}
						);
					}
					async showSaveDialog(P) {
						const k = this.J(P);
						if (this.O(k).useSimplified) return this.C(k, P);
						const L = await this.M.showSaveDialog(this.P(P));
						if (L && !L.canceled && L.filePath) return d.URI.file(L.filePath);
					}
					async showOpenDialog(P) {
						const k = this.J(P);
						if (this.O(k).useSimplified) return this.D(k, P);
						const L = {
							title: P.title,
							defaultPath: P.defaultUri?.fsPath,
							buttonLabel: P.openLabel,
							filters: P.filters,
							properties: [],
							targetWindowId: (0, S.$Ogb)().vscodeWindowId,
						};
						L.properties.push("createDirectory"),
							P.canSelectFiles && L.properties.push("openFile"),
							P.canSelectFolders && L.properties.push("openDirectory"),
							P.canSelectMany && L.properties.push("multiSelections");
						const D = await this.M.showOpenDialog(L);
						return D && Array.isArray(D.filePaths) && D.filePaths.length > 0
							? D.filePaths.map(d.URI.file)
							: void 0;
					}
				};
				(e.$pdd = I),
					(e.$pdd = I =
						Ne(
							[
								j(0, t.$asb),
								j(1, w.$Vi),
								j(2, E.$Feb),
								j(3, C.$r8),
								j(4, m.$Li),
								j(5, r.$gj),
								j(6, a.$ll),
								j(7, h.$7rb),
								j(8, c.$y7c),
								j(9, i.$GO),
								j(10, p.$nM),
								j(11, o.$cRb),
								j(12, f.$3N),
								j(13, b.$I8),
								j(14, s.$ek),
								j(15, y.$IY),
								j(16, l.$dtb),
								j(17, $.$ik),
								j(18, v.$0zb),
							],
							I,
						)),
					(0, u.$lK)(i.$IO, I, u.InstantiationType.Delayed);
			},
		),
		