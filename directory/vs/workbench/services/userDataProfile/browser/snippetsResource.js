import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/buffer.js';
import '../../../../base/common/map.js';
import '../../../../nls.js';
import '../../../../platform/files/common/files.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../browser/parts/editor/editorCommands.js';
import '../../../common/views.js';
import '../common/userDataProfile.js';
define(
			de[1923],
			he([1, 0, 76, 59, 4, 22, 5, 68, 129, 247, 60, 133]),
			function (ce /*require*/,
 e /*exports*/,
 t /*buffer*/,
 i /*map*/,
 w /*nls*/,
 E /*files*/,
 C /*instantiation*/,
 d /*uriIdentity*/,
 m /*userDataProfile*/,
 r /*editorCommands*/,
 u /*views*/,
 a /*userDataProfile*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Zwc = e.$Ywc = e.$Xwc = void 0);
				let h = class {
					constructor(p, o, f) {
						(this.a = p), (this.b = o), (this.c = f);
					}
					async initialize(p) {
						const o = JSON.parse(p);
						for (const f in o.snippets) {
							const b = this.c.extUri.joinPath(
								this.a.currentProfile.snippetsHome,
								f,
							);
							await this.b.writeFile(b, t.$Te.fromString(o.snippets[f]));
						}
					}
				};
				(e.$Xwc = h),
					(e.$Xwc = h = Ne([j(0, a.$P8), j(1, E.$ll), j(2, d.$Vl)], h));
				let c = class {
					constructor(p, o) {
						(this.a = p), (this.b = o);
					}
					async getContent(p, o) {
						const f = await this.c(p, o);
						return JSON.stringify({ snippets: f });
					}
					async apply(p, o) {
						const f = JSON.parse(p);
						for (const b in f.snippets) {
							const s = this.b.extUri.joinPath(o.snippetsHome, b);
							await this.a.writeFile(s, t.$Te.fromString(f.snippets[b]));
						}
					}
					async c(p, o) {
						const f = {},
							b = await this.getSnippetsResources(p, o);
						for (const s of b) {
							const l = this.b.extUri.relativePath(p.snippetsHome, s),
								y = await this.a.readFile(s);
							f[l] = y.value.toString();
						}
						return f;
					}
					async getSnippetsResources(p, o) {
						const f = [];
						let b;
						try {
							b = await this.a.resolve(p.snippetsHome);
						} catch (s) {
							if (
								s instanceof E.$Gl &&
								s.fileOperationResult === E.FileOperationResult.FILE_NOT_FOUND
							)
								return f;
							throw s;
						}
						for (const { resource: s } of b.children || []) {
							if (o?.has(s)) continue;
							const l = this.b.extUri.extname(s);
							(l === ".json" || l === ".code-snippets") && f.push(s);
						}
						return f;
					}
				};
				(e.$Ywc = c), (e.$Ywc = c = Ne([j(0, E.$ll), j(1, d.$Vl)], c));
				let n = class {
					constructor(p, o, f) {
						(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.type = m.ProfileResourceType.Snippets),
							(this.handle = this.b.snippetsHome.toString()),
							(this.label = { label: (0, w.localize)(12910, null) }),
							(this.collapsibleState = u.TreeItemCollapsibleState.Collapsed),
							(this.a = new i.$Hc());
					}
					async getChildren() {
						const p = await this.c
								.createInstance(c)
								.getSnippetsResources(this.b),
							o = this;
						return p.map((f) => ({
							handle: f.toString(),
							parent: o,
							resourceUri: f,
							collapsibleState: u.TreeItemCollapsibleState.None,
							accessibilityInformation: { label: this.d.extUri.basename(f) },
							checkbox: o.checkbox
								? {
										get isChecked() {
											return !o.a.has(f);
										},
										set isChecked(b) {
											b ? o.a.delete(f) : o.a.add(f);
										},
										accessibilityInformation: {
											label: (0, w.localize)(
												12911,
												null,
												this.d.extUri.basename(f),
											),
										},
									}
								: void 0,
							command: {
								id: r.$zWb,
								title: "",
								arguments: [f, void 0, void 0],
							},
						}));
					}
					async hasContent() {
						return (
							(await this.c.createInstance(c).getSnippetsResources(this.b))
								.length > 0
						);
					}
					async getContent() {
						return this.c.createInstance(c).getContent(this.b, this.a);
					}
					isFromDefaultProfile() {
						return !this.b.isDefault && !!this.b.useDefaultFlags?.snippets;
					}
				};
				(e.$Zwc = n), (e.$Zwc = n = Ne([j(1, C.$Li), j(2, d.$Vl)], n));
			},
		)
