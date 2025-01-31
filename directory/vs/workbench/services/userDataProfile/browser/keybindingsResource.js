import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/log/common/log.js';
import '../common/userDataProfile.js';
import '../../../../base/common/platform.js';
import '../../../common/views.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../nls.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
define(
			de[1921],
			he([1, 0, 76, 22, 34, 133, 12, 60, 129, 247, 5, 4, 68]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*files*/,
 w /*log*/,
 E /*userDataProfile*/,
 C /*platform*/,
 d /*views*/,
 m /*userDataProfile*/,
 r /*editorCommands*/,
 u /*instantiation*/,
 a /*nls*/,
 h /*uriIdentity*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wwc = e.$Vwc = e.$Uwc = void 0);
				let c = class {
					constructor(o, f, b) {
						(this.a = o), (this.b = f), (this.c = b);
					}
					async initialize(o) {
						const f = JSON.parse(o);
						if (f.keybindings === null) {
							this.c.info("Initializing Profile: No keybindings to apply...");
							return;
						}
						await this.b.writeFile(
							this.a.currentProfile.keybindingsResource,
							t.$Te.fromString(f.keybindings),
						);
					}
				};
				(e.$Uwc = c),
					(e.$Uwc = c = Ne([j(0, E.$P8), j(1, i.$ll), j(2, w.$ik)], c));
				let n = class {
					constructor(o, f) {
						(this.a = o), (this.b = f);
					}
					async getContent(o) {
						const f = await this.getKeybindingsResourceContent(o);
						return JSON.stringify(f);
					}
					async getKeybindingsResourceContent(o) {
						return { keybindings: await this.c(o), platform: C.$x };
					}
					async apply(o, f) {
						const b = JSON.parse(o);
						if (b.keybindings === null) {
							this.b.info(
								`Importing Profile (${f.name}): No keybindings to apply...`,
							);
							return;
						}
						await this.a.writeFile(
							f.keybindingsResource,
							t.$Te.fromString(b.keybindings),
						);
					}
					async c(o) {
						try {
							return (
								await this.a.readFile(o.keybindingsResource)
							).value.toString();
						} catch (f) {
							if (
								f instanceof i.$Gl &&
								f.fileOperationResult === i.FileOperationResult.FILE_NOT_FOUND
							)
								return null;
							throw f;
						}
					}
				};
				(e.$Vwc = n), (e.$Vwc = n = Ne([j(0, i.$ll), j(1, w.$ik)], n));
				let g = class {
					constructor(o, f, b) {
						(this.a = o),
							(this.b = f),
							(this.c = b),
							(this.type = m.ProfileResourceType.Keybindings),
							(this.handle = m.ProfileResourceType.Keybindings),
							(this.label = { label: (0, a.localize)(12908, null) }),
							(this.collapsibleState = d.TreeItemCollapsibleState.Expanded);
					}
					isFromDefaultProfile() {
						return !this.a.isDefault && !!this.a.useDefaultFlags?.keybindings;
					}
					async getChildren() {
						return [
							{
								handle: this.a.keybindingsResource.toString(),
								resourceUri: this.a.keybindingsResource,
								collapsibleState: d.TreeItemCollapsibleState.None,
								parent: this,
								accessibilityInformation: {
									label: this.b.extUri.basename(this.a.settingsResource),
								},
								command: {
									id: r.$zWb,
									title: "",
									arguments: [this.a.keybindingsResource, void 0, void 0],
								},
							},
						];
					}
					async hasContent() {
						return (
							(
								await this.c
									.createInstance(n)
									.getKeybindingsResourceContent(this.a)
							).keybindings !== null
						);
					}
					async getContent() {
						return this.c.createInstance(n).getContent(this.a);
					}
				};
				(e.$Wwc = g), (e.$Wwc = g = Ne([j(1, h.$Vl), j(2, u.$Li)], g));
			},
		)
