import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/network.js';
import '../../../../base/common/uri.js';
import '../../../../nls.js';
import '../../../../platform/theme/common/iconRegistry.js';
import '../../../common/editor.js';
import '../../../common/editor/editorInput.js';
define(
			de[4002],
			he([1, 0, 14, 23, 9, 4, 79, 44, 223]),
			function (ce /*require*/,
 e /*exports*/,
 t /*codicons*/,
 i /*network*/,
 w /*uri*/,
 E /*nls*/,
 C /*iconRegistry*/,
 d /*editor*/,
 m /*editorInput*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$m2c = void 0);
				const r = (0, C.$$O)(
					"workspace-trust-editor-label-icon",
					t.$ak.shield,
					(0, E.localize)(13171, null),
				);
				class u extends m.$LO {
					constructor() {
						super(...arguments),
							(this.resource = w.URI.from({
								scheme: i.Schemas.vscodeWorkspaceTrust,
								path: "workspaceTrustEditor",
							}));
					}
					static {
						this.ID = "workbench.input.workspaceTrust";
					}
					get capabilities() {
						return (
							d.EditorInputCapabilities.Readonly |
							d.EditorInputCapabilities.Singleton
						);
					}
					get typeId() {
						return u.ID;
					}
					matches(h) {
						return super.matches(h) || h instanceof u;
					}
					getName() {
						return (0, E.localize)(13172, null);
					}
					getIcon() {
						return r;
					}
				}
				e.$m2c = u;
			},
		)
