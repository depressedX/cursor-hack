import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/uri.js';
import '../../../../services/textfile/common/textEditorService.js';
import '../../../../../base/common/resources.js';
import '../../../../services/workingCopy/common/workingCopy.js';
import '../../../../services/workingCopy/common/workingCopyEditorService.js';
import '../../../../../platform/files/common/files.js';
define(
			de[3885],
			he([1, 0, 3, 9, 719, 19, 334, 403, 22]),
			function (ce /*require*/,
 e /*exports*/,
 t /*lifecycle*/,
 i /*uri*/,
 w /*textEditorService*/,
 E /*resources*/,
 C /*workingCopy*/,
 d /*workingCopyEditorService*/,
 m /*files*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8Mc = e.$7Mc = void 0);
				class r {
					canSerialize(h) {
						return !0;
					}
					serialize(h) {
						const c = h,
							n = c.resource,
							g = c.preferredResource,
							p = {
								resourceJSON: n.toJSON(),
								preferredResourceJSON: (0, E.$gh)(n, g) ? void 0 : g,
								name: c.getPreferredName(),
								description: c.getPreferredDescription(),
								encoding: c.getEncoding(),
								modeId: c.getPreferredLanguageId(),
							};
						return JSON.stringify(p);
					}
					deserialize(h, c) {
						return h.invokeFunction((n) => {
							const g = JSON.parse(c),
								p = i.URI.revive(g.resourceJSON),
								o = i.URI.revive(g.preferredResourceJSON),
								f = g.name,
								b = g.description,
								s = g.encoding,
								l = g.modeId,
								y = n
									.get(w.$zdc)
									.createTextEditor({
										resource: p,
										label: f,
										description: b,
										encoding: s,
										languageId: l,
										forceFile: !0,
									});
							return o && y.setPreferredResource(o), y;
						});
					}
				}
				e.$7Mc = r;
				let u = class extends t.$1c {
					static {
						this.ID = "workbench.contrib.fileEditorWorkingCopyEditorHandler";
					}
					constructor(h, c, n) {
						super(),
							(this.a = c),
							(this.b = n),
							this.D(h.registerHandler(this));
					}
					handles(h) {
						return h.typeId === C.$OO && this.b.canHandleResource(h.resource);
					}
					c(h) {
						return h.typeId === C.$OO && this.b.hasProvider(h.resource);
					}
					isOpen(h, c) {
						return this.c(h) ? (0, E.$gh)(h.resource, c.resource) : !1;
					}
					createEditor(h) {
						return this.a.createTextEditor({
							resource: h.resource,
							forceFile: !0,
						});
					}
				};
				(e.$8Mc = u),
					(e.$8Mc = u = Ne([j(0, d.$bZ), j(1, w.$zdc), j(2, m.$ll)], u));
			},
		)
