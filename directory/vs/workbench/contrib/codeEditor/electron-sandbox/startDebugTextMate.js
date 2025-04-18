import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../editor/common/core/range.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/action/common/actionCommonCategories.js';
import '../../../services/textMate/browser/textMateTokenizationFeature.js';
import '../../../../editor/common/services/model.js';
import '../../../services/editor/common/editorService.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/uuid.js';
import '../../../../editor/browser/services/codeEditorService.js';
import '../../../../base/common/uint.js';
import '../../../services/host/browser/host.js';
import '../../../services/environment/electron-sandbox/environmentService.js';
import '../../../../platform/log/common/log.js';
import '../../../../base/common/resources.js';
import '../../../../platform/files/common/files.js';
define(
			de[3663],
			he([
				1, 0, 4, 17, 11, 99, 841, 67, 18, 9, 47, 65, 210, 87, 151, 34, 19, 22,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*range*/,
 w /*actions*/,
 E /*actionCommonCategories*/,
 C /*textMateTokenizationFeature*/,
 d /*model*/,
 m /*editorService*/,
 r /*uri*/,
 u /*uuid*/,
 a /*codeEditorService*/,
 h /*uint*/,
 c /*host*/,
 n /*environmentService*/,
 g /*log*/,
 p /*resources*/,
 o /*files*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (t = mt(t));
				class f extends w.$3X {
					static {
						this.a = r.URI.parse("inmemory:///tm-log.txt");
					}
					constructor() {
						super({
							id: "editor.action.startDebugTextMate",
							title: t.localize2(4984, "Start TextMate Syntax Grammar Logging"),
							category: E.$ck.Developer,
							f1: !0,
						});
					}
					b(s) {
						const l = s.getModel(f.a);
						return l || s.createModel("", null, f.a);
					}
					c(s, l) {
						const y = s.getLineCount();
						s.applyEdits([
							{
								range: new i.$iL(
									y,
									h.Constants.MAX_SAFE_SMALL_INTEGER,
									y,
									h.Constants.MAX_SAFE_SMALL_INTEGER,
								),
								text: l,
							},
						]);
					}
					async run(s) {
						const l = s.get(C.$N6b),
							y = s.get(d.$QO),
							$ = s.get(m.$IY),
							v = s.get(a.$dtb),
							S = s.get(c.$asb),
							I = s.get(n.$ucd),
							T = s.get(g.$jk),
							P = s.get(o.$ll),
							k = (0, p.$nh)(I.tmpDir, `vcode-tm-log-${(0, u.$9g)()}.txt`);
						await P.createFile(k);
						const L = T.createLogger(k, { name: "debug textmate" }),
							D = this.b(y),
							M = (R) => {
								this.c(
									D,
									R +
										`
`,
								),
									A(),
									L.info(R),
									L.flush();
							};
						if (
							(await S.openWindow([{ fileUri: k }], { forceNewWindow: !0 }),
							!(await $.openEditor({
								resource: D.uri,
								options: { pinned: !0 },
							})))
						)
							return;
						const A = () => {
							const R = v.listCodeEditors();
							for (const O of R)
								O.hasModel() &&
									O.getModel().uri.toString() === f.a.toString() &&
									O.revealLine(O.getModel().getLineCount());
						};
						M("// Open the file you want to test to the side and watch here"),
							M(`// Output mirrored at ${k}`),
							l.startDebugMode(
								(R) => {
									this.c(
										D,
										R +
											`
`,
									),
										A(),
										L.info(R),
										L.flush();
								},
								() => {},
							);
					}
				}
				(0, w.$4X)(f);
			},
		)
