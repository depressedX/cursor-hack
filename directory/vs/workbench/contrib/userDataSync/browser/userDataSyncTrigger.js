import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/resources.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/userDataSync/common/userDataSync.js';
import '../../../services/views/common/viewsService.js';
import '../../extensions/common/extensions.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/host/browser/host.js';
import '../../../services/preferences/browser/keybindingsEditorInput.js';
import '../../../services/preferences/common/preferencesEditorInput.js';
define(
			de[3848],
			he([1, 0, 6, 3, 12, 19, 129, 150, 89, 141, 18, 87, 1310, 1312]),
			function (ce /*require*/,
 e /*exports*/,
 t /*event*/,
 i /*lifecycle*/,
 w /*platform*/,
 E /*resources*/,
 C /*userDataProfile*/,
 d /*userDataSync*/,
 m /*viewsService*/,
 r /*extensions*/,
 u /*editorService*/,
 a /*host*/,
 h /*keybindingsEditorInput*/,
 c /*preferencesEditorInput*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$f1c = void 0);
				let n = class extends i.$1c {
					constructor(p, o, f, b, s) {
						super(), (this.a = o);
						const l = t.Event.filter(
							t.Event.any(
								t.Event.map(p.onDidActiveEditorChange, () =>
									this.b(p.activeEditor),
								),
								t.Event.map(
									t.Event.filter(
										f.onDidChangeViewContainerVisibility,
										(y) => y.id === r.$LQb && y.visible,
									),
									(y) => y.id,
								),
							),
							(y) => y !== void 0,
						);
						w.$r
							? this.D(
									t.Event.debounce(
										t.Event.any(
											t.Event.map(s.onDidChangeFocus, () => "windowFocus"),
											t.Event.map(l, (y) => y),
										),
										(y, $) => (y ? [...y, $] : [$]),
										1e3,
									)((y) => b.triggerSync(y, !0, !1)),
								)
							: this.D(l((y) => b.triggerSync([y], !0, !1)));
					}
					b(p) {
						if (!p) return;
						if (p instanceof c.$uvc) return "settingsEditor";
						if (p instanceof h.$tvc) return "keybindingsEditor";
						const o = p.resource;
						if ((0, E.$gh)(o, this.a.defaultProfile.settingsResource))
							return "settingsEditor";
						if ((0, E.$gh)(o, this.a.defaultProfile.keybindingsResource))
							return "keybindingsEditor";
					}
				};
				(e.$f1c = n),
					(e.$f1c = n =
						Ne(
							[
								j(0, u.$IY),
								j(1, C.$Xl),
								j(2, m.$HMb),
								j(3, d.$7Rb),
								j(4, a.$asb),
							],
							n,
						));
			},
		),
		