import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../base/common/platform.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../browser/actions/windowActions.js';
import '../../keybinding/common/keybindingEditing.js';
import '../../extensions/common/extensions.js';
import '../../../../platform/files/common/files.js';
import '../../shadowWorkspace/electron-sandbox/nativeShadowWorkspaceManager.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/notification/common/notification.js';
import './extensionPatches/rewriteExtension.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/reactivestorage/browser/reactiveStorageService.js';
import '../../ai/browser/clientLoggerService.js';
define(
			de[4054],
			he([
				1, 0, 20, 5, 10, 21, 21, 12, 39, 571, 1324, 53, 22, 1950, 31, 40, 3516,
				113, 45, 3642,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*instantiation*/,
 w /*configuration*/,
 E /*storage*/,
 C /*storage*/,
 d /*platform*/,
 m /*keybinding*/,
 r /*windowActions*/,
 u /*keybindingEditing*/,
 a /*extensions*/,
 h /*files*/,
 c /*nativeShadowWorkspaceManager*/,
 n /*commands*/,
 g /*notification*/,
 p /*rewriteExtension*/,
 o /*environment*/,
 f /*reactiveStorageService*/,
 b /*clientLoggerService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Mcd = e.$Lcd = void 0),
					(e.$Lcd = (0, i.$Mi)("onFirstStartupService"));
				let s = class {
					constructor(y, $, v, S, I, T, P, k, L, D, M, N, A) {
						(this.b = y),
							(this.c = $),
							(this.d = v),
							(this.f = S),
							(this.g = D),
							(this.h = M),
							(this.i = N),
							(this.j = A);
						const R = async (z) => {
								const F = z
									.map((x) => ({
										extensionId: x,
										hotfix: p.$Icd.find((H) => H.extensionId === x),
									}))
									.filter((x) => x.hotfix !== void 0);
								await Promise.all(
									F.map(async ({ extensionId: x, hotfix: H }) => {
										const q = await I.getExtension(x);
										q &&
											(await (0, p.$Jcd)(
												H,
												x,
												q.version,
												q.extensionLocation,
												T,
											));
									}),
								);
							},
							O = (z) => R(z.map((F) => F.identifier.value));
						I.registerHotfixExtensionsProvider(O),
							I.onDidChangeExtensionsStatus((z) => R(z.map((F) => F.value)));
						const B = !this.h.isBuilt || this.h.isExtensionDevelopment;
						this.g.createScoped(this).onChangeEffect({
							deps: [() => this.g.applicationUserPersistentStorage.cppEnabled],
							onChange: ({ deps: [z] }) => {
								if (!z)
									try {
										const F = {};
										Error.captureStackTrace(F),
											B &&
												(console.log("stackTrace", F.stack),
												L.error(
													"Cpp somehow disabled. Please ping Aman in slack and open console logs to see the stack trace",
												)),
											A.logWhenTabTurnsOff({
												stackTrace: F.stack?.toString(),
											}).catch((x) => {
												console.error(x);
											});
									} catch {}
							},
						}),
							(this.a = this.d.lookupKeybinding(r.$1qc.ID)),
							this.d.onDidUpdateKeybindings(() => {
								const z = this.d
									.getKeybindings()
									.filter(
										(F) => F.command === r.$1qc.ID,
									)[0]?.resolvedKeybinding;
								try {
									if (
										!this.a ||
										!z ||
										z.getUserSettingsLabel() ===
											this.a.getUserSettingsLabel() ||
										!z.getUserSettingsLabel() ||
										!this.a.getUserSettingsLabel()
									)
										return;
									const x = [];
									for (const H of this.d.getKeybindings())
										if (
											H.resolvedKeybinding &&
											this.a.isProperPrefixOf(H.resolvedKeybinding) &&
											H.command !== r.$1qc.ID
										) {
											const q =
												H.resolvedKeybinding.replacePrefixAndGetUserSettingsLabel(
													this.a,
													z,
												);
											q &&
												x.push(
													this.f.editKeybinding(H, q, H.when?.serialize()),
												);
										}
									Promise.all(x)
										.then(() => {
											console.log("updated keybindings");
										})
										.catch((H) => {
											console.error(H);
										});
								} catch (F) {
									console.error(F, "error updating keybindings");
								} finally {
									this.a = z;
								}
							});
					}
					activate() {
						if (
							this.b.getBoolean(
								"workbench.services.onFirstStartupService.hasNotResetJetBrainsMonoFont",
								C.StorageScope.APPLICATION,
								!0,
							) &&
							d.$l
						) {
							this.b.store(
								"workbench.services.onFirstStartupService.hasNotResetJetBrainsMonoFont",
								!1,
								C.StorageScope.APPLICATION,
								C.StorageTarget.MACHINE,
							);
							const v = this.c.getValue("editor.fontFamily");
							v &&
								v.includes("JetBrains Mono") &&
								this.c.updateValue("editor.fontFamily", void 0);
						}
						if (
							this.b.getBoolean(
								"workbench.services.onFirstStartupService.isVeryFirstTime",
								C.StorageScope.APPLICATION,
								!0,
							) &&
							(this.b.store(
								"workbench.services.onFirstStartupService.isVeryFirstTime",
								!1,
								C.StorageScope.APPLICATION,
								C.StorageTarget.MACHINE,
							),
							d.$m)
						)
							try {
							} catch {}
					}
				};
				(e.$Mcd = s),
					(e.$Mcd = s =
						Ne(
							[
								j(0, E.$lq),
								j(1, w.$gj),
								j(2, m.$uZ),
								j(3, u.$evc),
								j(4, a.$q2),
								j(5, h.$ll),
								j(6, n.$ek),
								j(7, c.$ycd),
								j(8, g.$4N),
								j(9, f.$0zb),
								j(10, o.$Ti),
								j(11, i.$Li),
								j(12, b.$Kcd),
							],
							s,
						)),
					(0, t.$lK)(e.$Lcd, s, t.InstantiationType.Eager);
			},
		),
		