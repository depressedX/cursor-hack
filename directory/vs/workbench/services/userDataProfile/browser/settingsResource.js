import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/registry/common/platform.js';
import '../common/userDataProfile.js';
import '../../../../platform/userDataSync/common/settingsMerge.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../common/views.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../nls.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
define(
			de[1922],
			he([1, 0, 76, 81, 22, 34, 30, 133, 1670, 150, 60, 129, 247, 5, 4, 68]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Twc = e.$Swc = e.$Rwc = void 0);
				let p = class {
					constructor(s, l, y) {
						(this.a = s), (this.b = l), (this.c = y);
					}
					async initialize(s) {
						const l = JSON.parse(s);
						if (l.settings === null) {
							this.c.info("Initializing Profile: No settings to apply...");
							return;
						}
						await this.b.writeFile(
							this.a.currentProfile.settingsResource,
							t.$Te.fromString(l.settings),
						);
					}
				};
				(e.$Rwc = p),
					(e.$Rwc = p = Ne([j(0, d.$P8), j(1, w.$ll), j(2, E.$ik)], p));
				let o = class {
					constructor(s, l, y) {
						(this.a = s), (this.b = l), (this.c = y);
					}
					async getContent(s) {
						const l = await this.getSettingsContent(s);
						return JSON.stringify(l);
					}
					async getSettingsContent(s) {
						const l = await this.e(s);
						if (l === null) return { settings: null };
						{
							const y = this.d(),
								$ = await this.b.resolveFormattingOptions(s.settingsResource);
							return { settings: (0, m.$Nwc)(l || "{}", "{}", y, $) };
						}
					}
					async apply(s, l) {
						const y = JSON.parse(s);
						if (y.settings === null) {
							this.c.info(
								`Importing Profile (${l.name}): No settings to apply...`,
							);
							return;
						}
						const $ = await this.e(l),
							v = await this.b.resolveFormattingOptions(l.settingsResource),
							S = (0, m.$Nwc)(y.settings, $ || "{}", this.d(), v);
						await this.a.writeFile(l.settingsResource, t.$Te.fromString(S));
					}
					d() {
						const s = C.$Io
							.as(i.$No.Configuration)
							.getConfigurationProperties();
						return Object.keys(s).filter(
							(y) =>
								s[y]?.scope === i.ConfigurationScope.MACHINE ||
								s[y]?.scope === i.ConfigurationScope.MACHINE_OVERRIDABLE,
						);
					}
					async e(s) {
						try {
							return (
								await this.a.readFile(s.settingsResource)
							).value.toString();
						} catch (l) {
							if (
								l instanceof w.$Gl &&
								l.fileOperationResult === w.FileOperationResult.FILE_NOT_FOUND
							)
								return null;
							throw l;
						}
					}
				};
				(e.$Swc = o),
					(e.$Swc = o = Ne([j(0, w.$ll), j(1, r.$8Rb), j(2, E.$ik)], o));
				let f = class {
					constructor(s, l, y) {
						(this.a = s),
							(this.b = l),
							(this.c = y),
							(this.type = a.ProfileResourceType.Settings),
							(this.handle = a.ProfileResourceType.Settings),
							(this.label = { label: (0, n.localize)(12909, null) }),
							(this.collapsibleState = u.TreeItemCollapsibleState.Expanded);
					}
					async getChildren() {
						return [
							{
								handle: this.a.settingsResource.toString(),
								resourceUri: this.a.settingsResource,
								collapsibleState: u.TreeItemCollapsibleState.None,
								parent: this,
								accessibilityInformation: {
									label: this.b.extUri.basename(this.a.settingsResource),
								},
								command: {
									id: h.$zWb,
									title: "",
									arguments: [this.a.settingsResource, void 0, void 0],
								},
							},
						];
					}
					async hasContent() {
						return (
							(await this.c.createInstance(o).getSettingsContent(this.a))
								.settings !== null
						);
					}
					async getContent() {
						return this.c.createInstance(o).getContent(this.a);
					}
					isFromDefaultProfile() {
						return !this.a.isDefault && !!this.a.useDefaultFlags?.settings;
					}
				};
				(e.$Twc = f), (e.$Twc = f = Ne([j(1, g.$Vl), j(2, c.$Li)], f));
			},
		),
		