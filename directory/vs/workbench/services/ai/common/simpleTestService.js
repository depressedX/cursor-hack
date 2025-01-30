import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/uri.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/path.js';
define(
			de[697],
			he([1, 0, 9, 20, 81, 5, 30, 10, 61, 25, 54]),
			function (ce /*require*/,
 e /*exports*/,
 t /*uri*/,
 i /*extensions*/,
 w /*configurationRegistry*/,
 E /*instantiation*/,
 C /*platform*/,
 d /*configuration*/,
 m /*language*/,
 r /*workspace*/,
 u /*path*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$19b = void 0),
					(e.$19b = (0, E.$Mi)("simpleTestService"));
				let a = class {
					registerSimpleTestProvider(n) {
						this.simpleTestProviders.push(n);
					}
					constructor(n, g, p) {
						(this.c = n),
							(this.d = g),
							(this.e = p),
							(this.simpleTestProviders = []);
					}
					hasTestConfig(n) {
						return this.getTestConfig(n) !== void 0;
					}
					get f() {
						return this.c.getValue(h)?.config ?? [];
					}
					insertDummyTestConfig(n) {
						const g = this.d.createByFilepathOrFirstLine(n),
							p = t.URI.file((0, u.$rc)(n.fsPath)),
							f = {
								directory: this.e.asRelativePath(p, !1),
								language: g.languageId,
								testingFramework: "vitest",
								command:
									'echo "Configure your test command here. The variable $TEST_FILE_NAME will have the file name of the test that should be executed."',
							};
						this.c.updateValue(
							"testRunner.config",
							[...this.f, f],
							d.ConfigurationTarget.WORKSPACE,
						);
					}
					getTestBoilerplate(n, g, p) {
						const o = this.getProvider(n);
						if (o === void 0) return;
						const f = (0, u.$sc)(p.fsPath);
						return o.createTestBoilerplate({
							interfaceName: g,
							interfacePath: f,
						});
					}
					getProvider(n) {
						const g = this.getTestConfig(n);
						if (g !== void 0)
							return this.simpleTestProviders.find(
								(p) =>
									p.language === g.language &&
									p.testingFramework === g.testingFramework,
							);
					}
					getTestConfig(n) {
						const g = this.d.createByFilepathOrFirstLine(n),
							p = this.e.asRelativePath(n, !1);
						return this.f
							.sort((o, f) => f.directory.length - o.directory.length)
							.find((o) => {
								if (o.language !== g.languageId) return !1;
								let f = o.directory;
								return (
									f.startsWith("./") && (f = f.substring(2)),
									!(f !== "." && !p.startsWith(f))
								);
							});
					}
				};
				a = Ne([j(0, d.$gj), j(1, m.$nM), j(2, r.$Vi)], a);
				const h = "testRunner";
				C.$Io
					.as(w.$No.Configuration)
					.registerConfiguration({
						id: h,
						order: 15,
						title: "Test Runner",
						type: "object",
						properties: {
							"testRunner.config": {
								type: "array",
								markdownDescription:
									"Configure how to run tests from the command-line. This is a light-weight way to let Cursor run tests for you.",
								items: {
									type: "object",
									properties: {
										directory: {
											type: "string",
											description:
												"The directory that should be matched against.",
										},
										language: {
											type: "string",
											description:
												"The language that should be matched against.",
										},
										testingFramework: {
											enum: ["vitest", "mocha"],
											description:
												"The testing framework used by the language in the directory.",
										},
										command: {
											type: "string",
											description:
												"The command to run to run the tests. This should be a command that can be run from the command-line, from the root of the workspace.",
										},
									},
								},
								scope: w.ConfigurationScope.RESOURCE,
							},
						},
					}),
					(0, i.$lK)(e.$19b, a, i.InstantiationType.Delayed);
			},
		),
		