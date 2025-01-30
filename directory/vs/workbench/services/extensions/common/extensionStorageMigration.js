import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/errors.js';
import '../../../../platform/environment/common/environment.js';
import '../../../../platform/extensionManagement/common/extensionStorage.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/workspace/common/workspace.js';
define(
			de[3304],
			he([1, 0, 29, 113, 677, 22, 34, 21, 68, 129, 25]),
			function (ce /*require*/,
 e /*exports*/,
 t /*errors*/,
 i /*environment*/,
 w /*extensionStorage*/,
 E /*files*/,
 C /*log*/,
 d /*storage*/,
 m /*uriIdentity*/,
 r /*userDataProfile*/,
 u /*workspace*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$roc = a);
				async function a(h, c, n, g) {
					return g.invokeFunction(async (p) => {
						const o = p.get(i.$Ti),
							f = p.get(r.$Xl),
							b = p.get(w.$1N),
							s = p.get(d.$lq),
							l = p.get(m.$Vl),
							y = p.get(E.$ll),
							$ = p.get(u.$Vi),
							v = p.get(C.$ik),
							S = `extensionStorage.migrate.${h}-${c}`,
							I =
								h.toLowerCase() === c.toLowerCase()
									? `extension.storage.migrateFromLowerCaseKey.${h.toLowerCase()}`
									: void 0;
						if (h === c) return;
						const T = (k, L) =>
								L
									? l.extUri.joinPath(
											f.defaultProfile.globalStorageHome,
											k.toLowerCase(),
										)
									: l.extUri.joinPath(
											o.workspaceStorageHome,
											$.getWorkspace().id,
											k,
										),
							P = n ? d.StorageScope.PROFILE : d.StorageScope.WORKSPACE;
						if (!s.getBoolean(S, P, !1) && !(I && s.getBoolean(I, P, !1))) {
							v.info(
								`Migrating ${n ? "global" : "workspace"} extension storage from ${h} to ${c}...`,
							);
							const k = b.getExtensionState(h, n);
							k &&
								(b.setExtensionState(c, k, n),
								b.setExtensionState(h, void 0, n));
							const L = T(h, n),
								D = T(c, n);
							if (!l.extUri.isEqual(L, D))
								try {
									await y.move(L, D, !0);
								} catch (M) {
									M.code !== E.FileSystemProviderErrorCode.FileNotFound &&
										v.info(
											`Error while migrating ${n ? "global" : "workspace"} file storage from '${h}' to '${c}'`,
											(0, t.$bb)(M),
										);
								}
							v.info(
								`Migrated ${n ? "global" : "workspace"} extension storage from ${h} to ${c}`,
							),
								s.store(S, !0, P, d.StorageTarget.MACHINE);
						}
					});
				}
			},
		),
		