import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../nls.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../common/views.js';
import '../common/userDataProfile.js';
define(
			de[1924],
			he([1, 0, 76, 4, 22, 5, 34, 68, 129, 247, 60, 133]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*nls*/,
 w /*files*/,
 E /*instantiation*/,
 C /*log*/,
 d /*uriIdentity*/,
 m /*userDataProfile*/,
 r /*editorCommands*/,
 u /*views*/,
 a /*userDataProfile*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3wc = e.$2wc = e.$1wc = void 0);
				let h = class {
					constructor(p, o, f) {
						(this.a = p), (this.b = o), (this.c = f);
					}
					async initialize(p) {
						const o = JSON.parse(p);
						if (!o.tasks) {
							this.c.info("Initializing Profile: No tasks to apply...");
							return;
						}
						await this.b.writeFile(
							this.a.currentProfile.tasksResource,
							t.$Te.fromString(o.tasks),
						);
					}
				};
				(e.$1wc = h),
					(e.$1wc = h = Ne([j(0, a.$P8), j(1, w.$ll), j(2, C.$ik)], h));
				let c = class {
					constructor(p, o) {
						(this.a = p), (this.b = o);
					}
					async getContent(p) {
						const o = await this.getTasksResourceContent(p);
						return JSON.stringify(o);
					}
					async getTasksResourceContent(p) {
						return { tasks: await this.c(p) };
					}
					async apply(p, o) {
						const f = JSON.parse(p);
						if (!f.tasks) {
							this.b.info(
								`Importing Profile (${o.name}): No tasks to apply...`,
							);
							return;
						}
						await this.a.writeFile(o.tasksResource, t.$Te.fromString(f.tasks));
					}
					async c(p) {
						try {
							return (await this.a.readFile(p.tasksResource)).value.toString();
						} catch (o) {
							if (
								o instanceof w.$Gl &&
								o.fileOperationResult === w.FileOperationResult.FILE_NOT_FOUND
							)
								return null;
							throw o;
						}
					}
				};
				(e.$2wc = c), (e.$2wc = c = Ne([j(0, w.$ll), j(1, C.$ik)], c));
				let n = class {
					constructor(p, o, f) {
						(this.a = p),
							(this.b = o),
							(this.c = f),
							(this.type = m.ProfileResourceType.Tasks),
							(this.handle = m.ProfileResourceType.Tasks),
							(this.label = { label: (0, i.localize)(12912, null) }),
							(this.collapsibleState = u.TreeItemCollapsibleState.Expanded);
					}
					async getChildren() {
						return [
							{
								handle: this.a.tasksResource.toString(),
								resourceUri: this.a.tasksResource,
								collapsibleState: u.TreeItemCollapsibleState.None,
								parent: this,
								accessibilityInformation: {
									label: this.b.extUri.basename(this.a.settingsResource),
								},
								command: {
									id: r.$zWb,
									title: "",
									arguments: [this.a.tasksResource, void 0, void 0],
								},
							},
						];
					}
					async hasContent() {
						return (
							(await this.c.createInstance(c).getTasksResourceContent(this.a))
								.tasks !== null
						);
					}
					async getContent() {
						return this.c.createInstance(c).getContent(this.a);
					}
					isFromDefaultProfile() {
						return !this.a.isDefault && !!this.a.useDefaultFlags?.tasks;
					}
				};
				(e.$3wc = n), (e.$3wc = n = Ne([j(1, d.$Vl), j(2, E.$Li)], n));
			},
		),
		