import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/network.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/uri.js';
import '../../textfile/common/textEditorService.js';
import '../../../../base/common/resources.js';
import '../../../../editor/common/languages/modesRegistry.js';
import '../../environment/common/environmentService.js';
import '../../filesConfiguration/common/filesConfigurationService.js';
import '../../path/common/pathService.js';
import './untitledTextEditorInput.js';
import '../../workingCopy/common/workingCopy.js';
import '../../workingCopy/common/workingCopyEditorService.js';
import './untitledTextEditorService.js';
define(
			de[3888],
			he([1, 0, 23, 3, 9, 719, 19, 172, 78, 170, 165, 628, 334, 403, 631]),
			function (ce /*require*/,
 e /*exports*/,
 t /*network*/,
 i /*lifecycle*/,
 w /*uri*/,
 E /*textEditorService*/,
 C /*resources*/,
 d /*modesRegistry*/,
 m /*environmentService*/,
 r /*filesConfigurationService*/,
 u /*pathService*/,
 a /*untitledTextEditorInput*/,
 h /*workingCopy*/,
 c /*workingCopyEditorService*/,
 n /*untitledTextEditorService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$yuc = e.$xuc = void 0);
				let g = class {
					constructor(f, b, s) {
						(this.a = f), (this.b = b), (this.c = s);
					}
					canSerialize(f) {
						return this.a.isHotExitEnabled && !f.isDisposed();
					}
					serialize(f) {
						if (!this.canSerialize(f)) return;
						const b = f;
						let s = b.resource;
						b.hasAssociatedFilePath &&
							(s = (0, C.$xh)(
								s,
								this.b.remoteAuthority,
								this.c.defaultUriScheme,
							));
						let l;
						const y = b.getLanguageId();
						(y !== d.$0M || b.hasLanguageSetExplicitly) && (l = y);
						const $ = {
							resourceJSON: s.toJSON(),
							modeId: l,
							encoding: b.getEncoding(),
						};
						return JSON.stringify($);
					}
					deserialize(f, b) {
						return f.invokeFunction((s) => {
							const l = JSON.parse(b),
								y = w.URI.revive(l.resourceJSON),
								$ = l.modeId,
								v = l.encoding;
							return s
								.get(E.$zdc)
								.createTextEditor({
									resource: y,
									languageId: $,
									encoding: v,
									forceUntitled: !0,
								});
						});
					}
				};
				(e.$xuc = g),
					(e.$xuc = g = Ne([j(0, r.$_Y), j(1, m.$r8), j(2, u.$I8)], g));
				let p = class extends i.$1c {
					static {
						this.ID =
							"workbench.contrib.untitledTextEditorWorkingCopyEditorHandler";
					}
					constructor(f, b, s, l, y) {
						super(),
							(this.a = b),
							(this.b = s),
							(this.c = l),
							(this.f = y),
							this.D(f.registerHandler(this));
					}
					handles(f) {
						return (
							f.resource.scheme === t.Schemas.untitled && f.typeId === h.$OO
						);
					}
					isOpen(f, b) {
						return this.handles(f)
							? b instanceof a.$T1b && (0, C.$gh)(f.resource, b.resource)
							: !1;
					}
					createEditor(f) {
						let b;
						return (
							this.f.isUntitledWithAssociatedResource(f.resource)
								? (b = (0, C.$xh)(
										f.resource,
										this.a.remoteAuthority,
										this.b.defaultUriScheme,
									))
								: (b = f.resource),
							this.c.createTextEditor({ resource: b, forceUntitled: !0 })
						);
					}
				};
				(e.$yuc = p),
					(e.$yuc = p =
						Ne(
							[
								j(0, c.$bZ),
								j(1, m.$r8),
								j(2, u.$I8),
								j(3, E.$zdc),
								j(4, n.$7Y),
							],
							p,
						));
			},
		),
		