import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/observable.js';
import '../../../../base/common/observableInternal/utils.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import './multiDiffSourceResolverService.js';
import '../../scm/common/scm.js';
import '../../../services/editor/common/editorService.js';
define(
			de[1801],
			he([1, 0, 3, 77, 457, 9, 4, 11, 5, 800, 258, 18]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				var h;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$XPc = e.$WPc = e.$VPc = void 0);
				let c = class {
					static {
						h = this;
					}
					static {
						this.a = "scm-multi-diff-source";
					}
					static getMultiDiffSourceUri(f, b) {
						return E.URI.from({
							scheme: h.a,
							query: JSON.stringify({ repositoryUri: f, groupId: b }),
						});
					}
					static b(f) {
						if (f.scheme !== h.a) return;
						let b;
						try {
							b = JSON.parse(f.query);
						} catch {
							return;
						}
						if (typeof b != "object" || b === null) return;
						const { repositoryUri: s, groupId: l } = b;
						if (!(typeof s != "string" || typeof l != "string"))
							return { repositoryUri: E.URI.parse(s), groupId: l };
					}
					constructor(f) {
						this.c = f;
					}
					canHandleUri(f) {
						return h.b(f) !== void 0;
					}
					async resolveDiffSource(f) {
						const { repositoryUri: b, groupId: s } = h.b(f),
							l = await (0, i.waitForState)(
								(0, i.observableFromEvent)(
									this,
									this.c.onDidAddRepository,
									() =>
										[...this.c.repositories].find(
											($) => $.provider.rootUri?.toString() === b.toString(),
										),
								),
							),
							y = await (0, i.waitForState)(
								(0, i.observableFromEvent)(
									this,
									l.provider.onDidChangeResourceGroups,
									() => l.provider.groups.find(($) => $.id === s),
								),
							);
						return new n(y, l);
					}
				};
				(e.$VPc = c), (e.$VPc = c = h = Ne([j(0, u.$c7)], c));
				class n {
					constructor(f, b) {
						(this.b = f),
							(this.c = b),
							(this.a = (0, i.observableFromEvent)(
								this.b.onDidChangeResources,
								() =>
									this.b.resources.map(
										(s) =>
											new r.$Jnc(
												s.multiDiffEditorOriginalUri,
												s.multiDiffEditorModifiedUri,
												s.sourceUri,
											),
									),
							)),
							(this.resources = new w.$Md(this.a)),
							(this.contextKeys = {
								scmResourceGroup: this.b.id,
								scmProvider: this.c.provider.contextValue,
							});
					}
				}
				let g = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.scmMultiDiffSourceResolver";
					}
					constructor(f, b) {
						super(), this.D(b.registerResolver(f.createInstance(c)));
					}
				};
				(e.$WPc = g), (e.$WPc = g = Ne([j(0, m.$Li), j(1, r.$Inc)], g));
				class p extends d.$3X {
					static async openMultiFileDiffEditor(f, b, s, l, y) {
						if (!s) return;
						const $ = c.getMultiDiffSourceUri(s.toString(), l);
						return await f.openEditor({
							label: b,
							multiDiffSource: $,
							options: y,
						});
					}
					constructor() {
						super({
							id: "_workbench.openScmMultiDiffEditor",
							title: (0, C.localize2)(7700, "View Changes"),
							f1: !1,
						});
					}
					async run(f, b) {
						const s = f.get(a.$IY);
						await p.openMultiFileDiffEditor(
							s,
							b.title,
							E.URI.revive(b.repositoryUri),
							b.resourceGroupId,
						);
					}
				}
				e.$XPc = p;
			},
		),
		