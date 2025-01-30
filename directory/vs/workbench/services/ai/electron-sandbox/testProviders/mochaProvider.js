import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../platform/configuration/common/configuration.js';
import '../../../../../editor/common/languages/language.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../textfile/common/textfiles.js';
import '../../../../../editor/common/core/range.js';
import '../../../../../platform/native/common/native.js';
import '../../common/simpleTestService.js';
define(
			de[3702],
			he([1, 0, 10, 61, 25, 42, 85, 17, 110, 697]),
			function (ce /*require*/,
 e /*exports*/,
 t /*configuration*/,
 i /*language*/,
 w /*workspace*/,
 E /*resolverService*/,
 C /*textfiles*/,
 d /*range*/,
 m /*native*/,
 r /*simpleTestService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$7dd = void 0);
				let u = class {
					constructor(h, c, n, g, p, o, f) {
						(this.a = h),
							(this.b = c),
							(this.c = n),
							(this.d = g),
							(this.e = p),
							(this.f = o),
							(this.g = f),
							(this.language = "typescript"),
							(this.testingFramework = "mocha");
					}
					async runTest({
						testFileURI: h,
						testName: c,
						abortController: n,
						config: g,
					}) {
						const p = g.command,
							o = this.c.asRelativePath(h, !1);
						console.log("Running vitest test", p);
						let f = () => {},
							b;
						try {
							if (c !== void 0) {
								b = await this.d.createModelReference(h);
								const S = b.object.textEditorModel
									.getValue()
									.split(b.object.textEditorModel.getEOL());
								let I,
									T,
									P = S.findIndex((L) =>
										L.includes(`@cursor-agent:test-begin:${c}`),
									);
								if (P !== -1) {
									for (; P < S.length && S[P].includes("@cursor-agent"); ) P++;
									(T = S[P]), (I = P + 1);
								} else
									throw new Error(`Could not find test ${c} in file ${o}.`);
								const k =
									T.replace("test(", "test.only(").replace("it(", "it.only(") +
									`
`;
								b.object.textEditorModel.pushStackElement(),
									b.object.textEditorModel.pushEditOperations(
										null,
										[{ range: new d.$iL(I, 1, I + 1, 1), text: k }],
										() => null,
									),
									await this.e.save(h),
									await new Promise((L) => {
										setTimeout(L, 1e3), n.signal.addEventListener("abort", L);
									}),
									(f = () => {
										b?.object.textEditorModel.undo(), this.e.save(h);
									});
							}
							if (this.c.getWorkspace().folders.length === 0)
								throw new Error(
									"No workspace folder open; not able to run tests.",
								);
							const s = p.replace("$TEST_FILE_NAME", o);
							console.log("RUNTEST EXECUTING COMMAND", s);
							const l = this.c.getWorkspace().folders[0].uri,
								y = await this.f.exec2(s, {
									cwd: l.fsPath,
									maxBuffer: 1024 * 1024,
									timeout: 4e4,
								}),
								$ = y.error
									? `STDOUT:
${y.stdout}

STDERR:
${y.stderr}

ERROR:

Name: ${y.error.name}
Message: ${y.error.message}
Stack: ${y.error.stack}
Code: ${y.error.code}
Killed: ${y.error.killed}${y.error.killed ? " (could be because of a timeout)" : ""}`
									: `STDERR:
${y.stderr}

STDOUT:
${y.stdout}`;
							return console.log("RUNTEST RESULT", $), $;
						} finally {
							f(), b?.dispose();
						}
					}
					createTestBoilerplate({ interfaceName: h, interfacePath: c }) {
						return `
import { ${h}, New${h} } from "./${c.replace(/\.ts$/, "")}";
import * as assert from 'assert';
import * as sinon from 'sinon';


suite("${h}", () => {

  // @cursor-agent:add-tests-here

})
`;
					}
				};
				(e.$7dd = u),
					(e.$7dd = u =
						Ne(
							[
								j(0, t.$gj),
								j(1, i.$nM),
								j(2, w.$Vi),
								j(3, E.$MO),
								j(4, C.$kZ),
								j(5, m.$y7c),
								j(6, r.$19b),
							],
							u,
						));
			},
		),
		