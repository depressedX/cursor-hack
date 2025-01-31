import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../browser/labels.js';
import '../../../browser/parts/editor/editorWithViewState.js';
import '../../../common/editor.js';
import '../../../common/editor/editorInput.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/uri.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/contrib/inlineDiffs/browser/widgets/inlineMultiDiffEditorWidget.js';
define(
			de[4212],
			he([
				1, 0, 125, 5, 21, 32, 35, 233, 1016, 44, 223, 66, 18, 9, 42, 67, 4194,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*textResourceConfiguration*/,
 i /*instantiation*/,
 w /*storage*/,
 E /*telemetry*/,
 C /*themeService*/,
 d /*labels*/,
 m /*editorWithViewState*/,
 r /*editor*/,
 u /*editorInput*/,
 a /*editorGroupsService*/,
 h /*editorService*/,
 c /*uri*/,
 n /*resolverService*/,
 g /*model*/,
 p /*inlineMultiDiffEditorWidget*/) {
				"use strict";
				var o, f;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Zc = e.$0Zc = void 0);
				let b = class extends m.$zVb {
					static {
						o = this;
					}
					static {
						this.ID = "inlineMultiDiffEditor";
					}
					constructor($, v, S, I, T, P, k, L) {
						super(o.ID, $, "inlineMultiDiffEditor", S, v, T, L, I, P, k),
							(this.a = void 0);
					}
					Y($) {
						this.a = this.D(new p.$7Zc($, this.m));
					}
					async setInput($, v, S, I) {
						await super.setInput($, v, S, I);
						const T = [...$.uris];
						this.a?.setURIs(T);
					}
					async clearInput() {
						await super.clearInput(), this.a?.setURIs([]);
					}
					layout($) {
						this.a?.layout($);
					}
					getControl() {
						return this.a?.getActiveControl();
					}
					mb($) {
						return { scrollState: { top: 0, left: 0 } };
					}
					nb($) {
						return $ instanceof l;
					}
					pb($) {
						return $.resource;
					}
				};
				(e.$0Zc = b),
					(e.$0Zc =
						b =
						o =
							Ne(
								[
									j(1, i.$Li),
									j(2, E.$km),
									j(3, C.$iP),
									j(4, w.$lq),
									j(5, h.$IY),
									j(6, a.$EY),
									j(7, t.$XO),
								],
								b,
							));
				let s = class {
					constructor($) {
						this.a = $;
					}
					createResourceLabel($) {
						const v = this.a.createInstance(d.$vPb, $, {});
						return {
							setUri(S) {
								S !== void 0 && v.element.setFile(S, {});
							},
							dispose() {
								v.dispose();
							},
						};
					}
				};
				s = Ne([j(0, i.$Li)], s);
				let l = class extends u.$LO {
					static {
						f = this;
					}
					static {
						this.ID = "workbench.input.inlineMultiDiffEditor";
					}
					get resource() {
						return c.URI.parse(`inline-multi-diff-editor:${this.id}`);
					}
					get capabilities() {
						return r.EditorInputCapabilities.Readonly;
					}
					get typeId() {
						return f.ID;
					}
					getName() {
						return this.label ?? "Multi File Edits";
					}
					get editorId() {
						return r.$b1.id;
					}
					constructor($, v, S, I, T, P, k) {
						super(),
							(this.label = $),
							(this.uris = v),
							(this.a = I),
							(this.c = T),
							(this.h = P),
							(this.m = k),
							(this.id =
								S ||
								new Date().getMilliseconds().toString() +
									Math.random().toString());
					}
					setLanguageId($, v) {}
				};
				(e.$$Zc = l),
					(e.$$Zc =
						l =
						f =
							Ne([j(3, n.$MO), j(4, t.$XO), j(5, i.$Li), j(6, g.$QO)], l));
			},
		)
