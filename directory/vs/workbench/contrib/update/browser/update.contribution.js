import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/registry/common/platform.js';
import '../../../common/contributions.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../../platform/actions/common/actions.js';
import './update.js';
import '../../../services/lifecycle/common/lifecycle.js';
import '../../../../platform/product/common/product.js';
import '../../../../platform/update/common/update.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/platform.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../base/common/labels.js';
import '../common/update.js';
import '../../../../platform/contextkey/common/contextkeys.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../platform/product/common/productService.js';
import '../../../../base/common/uri.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/update/common/update.config.contribution.js';
define(
		de[3794],
		he([
			1, 0, 4, 30, 55, 99, 11, 3793, 52, 372, 415, 5, 12, 57, 222, 1781, 179,
			41, 62, 9, 8, 2877,
		]),
		function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*platform*/,
 w /*contributions*/,
 E /*actionCommonCategories*/,
 C /*actions*/,
 d /*update*/,
 m /*lifecycle*/,
 r /*product*/,
 u /*update*/,
 a /*instantiation*/,
 h /*platform*/,
 c /*dialogs*/,
 n /*labels*/,
 g /*update*/,
 p /*contextkeys*/,
 o /*opener*/,
 f /*productService*/,
 b /*uri*/,
 s /*contextkey*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$kYc = e.$jYc = e.$iYc = void 0),
				(r = xi(r));
			const l = i.$Io.as(w.Extensions.Workbench);
			l.registerWorkbenchContribution(d.$fYc, m.LifecyclePhase.Restored),
				l.registerWorkbenchContribution(d.$gYc, m.LifecyclePhase.Restored),
				l.registerWorkbenchContribution(d.$hYc, m.LifecyclePhase.Restored);
			class y extends C.$3X {
				constructor() {
					super({
						id: g.$PTc,
						title: {
							...(0, t.localize2)(11064, "Show Release Notes"),
							mnemonicTitle: (0, t.localize)(11058, null),
						},
						category: {
							value: r.default.nameShort,
							original: r.default.nameShort,
						},
						f1: !0,
						precondition: d.$cYc,
						menu: [
							{
								id: C.$XX.MenubarHelpMenu,
								group: "1_welcome",
								order: 5,
								when: d.$cYc,
							},
						],
					});
				}
				async run(L) {
					const D = L.get(a.$Li),
						M = L.get(f.$Bk),
						N = L.get(o.$7rb);
					try {
						await (0, d.$eYc)(D, M.version, !1);
					} catch {
						if (M.releaseNotesUrl) await N.open(b.URI.parse(M.releaseNotesUrl));
						else throw new Error((0, t.localize)(11059, null, M.nameLong));
					}
				}
			}
			e.$iYc = y;
			class $ extends C.$3X {
				constructor() {
					super({
						id: g.$QTc,
						title: {
							...(0, t.localize2)(11065, "Open Current File as Release Notes"),
							mnemonicTitle: (0, t.localize)(11060, null),
						},
						category: (0, t.localize2)(11066, "Developer"),
						f1: !0,
					});
				}
				async run(L) {
					const D = L.get(a.$Li),
						M = L.get(f.$Bk);
					try {
						await (0, d.$eYc)(D, M.version, !0);
					} catch {
						throw new Error((0, t.localize)(11061, null));
					}
				}
			}
			(e.$jYc = $), (0, C.$4X)(y), (0, C.$4X)($);
			class v extends C.$3X {
				constructor() {
					super({
						id: "update.checkForUpdate",
						title: (0, t.localize2)(11067, "Check for Updates..."),
						category: {
							value: r.default.nameShort,
							original: r.default.nameShort,
						},
						f1: !0,
						precondition: d.$aYc.isEqualTo(u.StateType.Idle),
					});
				}
				async run(L) {
					return L.get(u.$_rb).checkForUpdates(!0);
				}
			}
			e.$kYc = v;
			class S extends C.$3X {
				constructor() {
					super({
						id: "update.downloadUpdate",
						title: (0, t.localize2)(11068, "Download Update"),
						category: {
							value: r.default.nameShort,
							original: r.default.nameShort,
						},
						f1: !0,
						precondition: d.$aYc.isEqualTo(u.StateType.AvailableForDownload),
					});
				}
				async run(L) {
					await L.get(u.$_rb).downloadUpdate();
				}
			}
			class I extends C.$3X {
				constructor() {
					super({
						id: "update.installUpdate",
						title: (0, t.localize2)(11069, "Install Update"),
						category: {
							value: r.default.nameShort,
							original: r.default.nameShort,
						},
						f1: !0,
						precondition: d.$aYc.isEqualTo(u.StateType.Downloaded),
					});
				}
				async run(L) {
					await L.get(u.$_rb).applyUpdate();
				}
			}
			class T extends C.$3X {
				constructor() {
					super({
						id: "update.restartToUpdate",
						title: (0, t.localize2)(11070, "Restart to Update"),
						category: {
							value: r.default.nameShort,
							original: r.default.nameShort,
						},
						f1: !0,
						precondition: d.$aYc.isEqualTo(u.StateType.Ready),
					});
				}
				async run(L) {
					await L.get(u.$_rb).quitAndInstall();
				}
			}
			class P extends C.$3X {
				static {
					this.ID = "workbench.action.download";
				}
				constructor() {
					super({
						id: P.ID,
						title: (0, t.localize2)(11071, "Download {0}", r.default.nameLong),
						precondition: s.$Kj.and(p.$7Lb, d.$dYc),
						f1: !0,
						menu: [
							{
								id: C.$XX.StatusBarWindowIndicatorMenu,
								when: s.$Kj.and(p.$7Lb, d.$dYc),
							},
						],
					});
				}
				run(L) {
					const D = L.get(f.$Bk),
						M = L.get(o.$7rb);
					D.downloadUrl && M.open(b.URI.parse(D.downloadUrl));
				}
			}
			if (
				((0, C.$4X)(P),
				(0, C.$4X)(v),
				(0, C.$4X)(S),
				(0, C.$4X)(I),
				(0, C.$4X)(T),
				h.$l)
			) {
				class k extends C.$3X {
					constructor() {
						super({
							id: "_update.applyupdate",
							title: (0, t.localize2)(11072, "Apply Update..."),
							category: E.$ck.Developer,
							f1: !0,
							precondition: d.$aYc.isEqualTo(u.StateType.Idle),
						});
					}
					async run(D) {
						const M = D.get(u.$_rb),
							A = await D.get(c.$IO).showOpenDialog({
								title: (0, t.localize)(11062, null),
								filters: [{ name: "Setup", extensions: ["exe"] }],
								canSelectFiles: !0,
								openLabel: (0, n.$DO)((0, t.localize)(11063, null)),
							});
						!A || !A[0] || (await M._applySpecificUpdate(A[0].fsPath));
					}
				}
				(0, C.$4X)(k);
			}
		},
	)
