import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/cancellation.js';
import './extensionManagement.js';
import './extensionManagementUtil.js';
import '../../extensions/common/extensions.js';
define(
			de[2818],
			he([1, 0, 33, 119, 154, 109]),
			function (ce /*require*/,
 e /*exports*/,
 t /*cancellation*/,
 i /*extensionManagement*/,
 w /*extensionManagementUtil*/,
 E /*extensions*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ZTc = C);
				async function C(d, m, r, u, a) {
					try {
						const h = await d.getExtensionsControlManifest();
						if (!h.deprecated) return;
						const c = await d.getInstalled(E.ExtensionType.User);
						for (const [n, g] of Object.entries(h.deprecated)) {
							if (!g?.extension) continue;
							const { id: p, autoMigrate: o, preRelease: f } = g.extension;
							if (!o) continue;
							const b = c.find((l) => (0, w.$7p)(l.identifier, { id: n }));
							if (!b) continue;
							const s = (
								await m.getExtensions(
									[{ id: p, preRelease: f }],
									{
										targetPlatform: await d.getTargetPlatform(),
										compatible: !0,
									},
									t.CancellationToken.None,
								)
							)[0];
							if (!s) {
								a.info(
									`Skipping migrating '${b.identifier.id}' extension because, the comaptible target '${p}' extension is not found`,
								);
								continue;
							}
							try {
								a.info(
									`Migrating '${b.identifier.id}' extension to '${p}' extension...`,
								);
								const l = !u
									.getDisabledExtensions()
									.some(($) => (0, w.$7p)($, b.identifier));
								await d.uninstall(b),
									a.info(
										`Uninstalled the unsupported extension '${b.identifier.id}'`,
									);
								let y = c.find(($) => (0, w.$7p)($.identifier, { id: p }));
								(!y || (!y.isPreReleaseVersion && l)) &&
									((y = await d.installFromGallery(s, {
										installPreReleaseVersion: !0,
										isMachineScoped: b.isMachineScoped,
										operation: i.InstallOperation.Migrate,
									})),
									a.info(
										`Installed the pre-release extension '${y.identifier.id}'`,
									),
									l ||
										(await u.disableExtension(y.identifier),
										a.info(
											`Disabled the pre-release extension '${y.identifier.id}' because the unsupported extension '${b.identifier.id}' is disabled`,
										)),
									o.storage &&
										(r.addToMigrationList(
											(0, w.$0p)(b.manifest.publisher, b.manifest.name),
											(0, w.$0p)(y.manifest.publisher, y.manifest.name),
										),
										a.info(
											"Added pre-release extension to the storage migration list",
										))),
									a.info(
										`Migrated '${b.identifier.id}' extension to '${p}' extension.`,
									);
							} catch (l) {
								a.error(l);
							}
						}
					} catch (h) {
						a.error(h);
					}
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	