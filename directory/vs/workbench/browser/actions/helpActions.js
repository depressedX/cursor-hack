import '../../../../require.js';
import '../../../../exports.js';
import '../../../nls.js';
import '../../../platform/product/common/product.js';
import '../../../base/common/platform.js';
import '../../../platform/telemetry/common/telemetry.js';
import '../../../platform/opener/common/opener.js';
import '../../../base/common/uri.js';
import '../../../platform/actions/common/actions.js';
import '../../../base/common/keyCodes.js';
import '../../../platform/product/common/productService.js';
import '../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../platform/action/common/actionCommonCategories.js';
define(
		de[2943],
		he([1, 0, 4, 372, 12, 32, 41, 9, 11, 27, 62, 43, 99]),
		function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*product*/,
 w /*platform*/,
 E /*telemetry*/,
 C /*opener*/,
 d /*uri*/,
 m /*actions*/,
 r /*keyCodes*/,
 u /*productService*/,
 a /*keybindingsRegistry*/,
 h /*actionCommonCategories*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (i = xi(i));
			class c extends m.$3X {
				static {
					this.ID = "workbench.action.keybindingsReference";
				}
				static {
					this.AVAILABLE = !!(w.$n
						? i.default.keyboardShortcutsUrlLinux
						: w.$m
							? i.default.keyboardShortcutsUrlMac
							: i.default.keyboardShortcutsUrlWin);
				}
				constructor() {
					super({
						id: c.ID,
						title: {
							...(0, t.localize2)(2783, "Keyboard Shortcuts Reference"),
							mnemonicTitle: (0, t.localize)(2775, null),
						},
						category: h.$ck.Help,
						f1: !0,
						keybinding: {
							weight: a.KeybindingWeight.WorkbenchContrib,
							when: null,
							primary: (0, r.$os)(r.$ps, r.KeyMod.CtrlCmd | r.KeyCode.KeyR),
							mac: {
								primary: (0, r.$os)(r.$qs, r.KeyMod.CtrlCmd | r.KeyCode.KeyR),
							},
						},
						menu: { id: m.$XX.MenubarHelpMenu, group: "2_reference", order: 1 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb),
						I = w.$n
							? v.keyboardShortcutsUrlLinux
							: w.$m
								? v.keyboardShortcutsUrlMac
								: v.keyboardShortcutsUrlWin;
					I && S.open(d.URI.parse(I));
				}
			}
			class n extends m.$3X {
				static {
					this.ID = "workbench.action.openVideoTutorialsUrl";
				}
				static {
					this.AVAILABLE = !!i.default.introductoryVideosUrl;
				}
				constructor() {
					super({
						id: n.ID,
						title: {
							...(0, t.localize2)(2784, "Video Tutorials"),
							mnemonicTitle: (0, t.localize)(2776, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "2_reference", order: 2 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.introductoryVideosUrl &&
						S.open(d.URI.parse(v.introductoryVideosUrl));
				}
			}
			class g extends m.$3X {
				static {
					this.ID = "workbench.action.openTipsAndTricksUrl";
				}
				static {
					this.AVAILABLE = !!i.default.tipsAndTricksUrl;
				}
				constructor() {
					super({
						id: g.ID,
						title: {
							...(0, t.localize2)(2785, "Tips and Tricks"),
							mnemonicTitle: (0, t.localize)(2777, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "2_reference", order: 3 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.tipsAndTricksUrl && S.open(d.URI.parse(v.tipsAndTricksUrl));
				}
			}
			class p extends m.$3X {
				static {
					this.ID = "workbench.action.openDocumentationUrl";
				}
				static {
					this.AVAILABLE = !!(w.$r
						? i.default.serverDocumentationUrl
						: i.default.documentationUrl);
				}
				constructor() {
					super({
						id: p.ID,
						title: {
							...(0, t.localize2)(2786, "Documentation"),
							mnemonicTitle: (0, t.localize)(2778, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "1_welcome", order: 3 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb),
						I = w.$r ? v.serverDocumentationUrl : v.documentationUrl;
					I && S.open(d.URI.parse(I));
				}
			}
			class o extends m.$3X {
				static {
					this.ID = "workbench.action.openNewsletterSignupUrl";
				}
				static {
					this.AVAILABLE = !!i.default.newsletterSignupUrl;
				}
				constructor() {
					super({
						id: o.ID,
						title: (0, t.localize2)(2787, "Signup for the VS Code Newsletter"),
						category: h.$ck.Help,
						f1: !0,
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb),
						I = $.get(E.$km);
					S.open(
						d.URI.parse(
							`${v.newsletterSignupUrl}?machineId=${encodeURIComponent(I.machineId)}`,
						),
					);
				}
			}
			class f extends m.$3X {
				static {
					this.ID = "workbench.action.openYouTubeUrl";
				}
				static {
					this.AVAILABLE = !!i.default.youTubeUrl;
				}
				constructor() {
					super({
						id: f.ID,
						title: {
							...(0, t.localize2)(2788, "Join Us on YouTube"),
							mnemonicTitle: (0, t.localize)(2779, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "3_feedback", order: 1 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.youTubeUrl && S.open(d.URI.parse(v.youTubeUrl));
				}
			}
			class b extends m.$3X {
				static {
					this.ID = "workbench.action.openRequestFeatureUrl";
				}
				static {
					this.AVAILABLE = !!i.default.requestFeatureUrl;
				}
				constructor() {
					super({
						id: b.ID,
						title: {
							...(0, t.localize2)(2789, "Search Feature Requests"),
							mnemonicTitle: (0, t.localize)(2780, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "3_feedback", order: 2 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.requestFeatureUrl && S.open(d.URI.parse(v.requestFeatureUrl));
				}
			}
			class s extends m.$3X {
				static {
					this.ID = "workbench.action.openLicenseUrl";
				}
				static {
					this.AVAILABLE = !!(w.$r
						? i.default.serverLicense
						: i.default.licenseUrl);
				}
				constructor() {
					super({
						id: s.ID,
						title: {
							...(0, t.localize2)(2790, "View License"),
							mnemonicTitle: (0, t.localize)(2781, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "4_legal", order: 1 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb),
						I = w.$r ? v.serverLicenseUrl : v.licenseUrl;
					if (I)
						if (w.$z) {
							const T = I.indexOf("?") > 0 ? "&" : "?";
							S.open(d.URI.parse(`${I}${T}lang=${w.$z}`));
						} else S.open(d.URI.parse(I));
				}
			}
			class l extends m.$3X {
				static {
					this.ID = "workbench.action.openPrivacyStatementUrl";
				}
				static {
					this.AVAILABE = !!i.default.privacyStatementUrl;
				}
				constructor() {
					super({
						id: l.ID,
						title: {
							...(0, t.localize2)(2791, "Privacy Statement"),
							mnemonicTitle: (0, t.localize)(2782, null),
						},
						category: h.$ck.Help,
						f1: !0,
						menu: { id: m.$XX.MenubarHelpMenu, group: "4_legal", order: 2 },
					});
				}
				run($) {
					const v = $.get(u.$Bk),
						S = $.get(C.$7rb);
					v.privacyStatementUrl && S.open(d.URI.parse(v.privacyStatementUrl));
				}
			}
			c.AVAILABLE && (0, m.$4X)(c),
				n.AVAILABLE && (0, m.$4X)(n),
				g.AVAILABLE && (0, m.$4X)(g),
				p.AVAILABLE && (0, m.$4X)(p),
				o.AVAILABLE && (0, m.$4X)(o),
				f.AVAILABLE && (0, m.$4X)(f),
				b.AVAILABLE && (0, m.$4X)(b),
				s.AVAILABLE && (0, m.$4X)(s),
				l.AVAILABE && (0, m.$4X)(l);
		},
	)
