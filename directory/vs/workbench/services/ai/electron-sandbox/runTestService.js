import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../editor/common/languages/language.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../editor/common/services/resolverService.js';
import '../../textfile/common/textfiles.js';
import '../../../../platform/native/common/native.js';
import '../common/simpleTestService.js';
import './testProviders/vitestProvider.js';
import './testProviders/mochaProvider.js';
define(
			de[1887],
			he([1, 0, 20, 5, 10, 61, 25, 42, 85, 110, 697, 3703, 3702]),
			function (ce /*require*/,
 e /*exports*/,
 t /*extensions*/,
 i /*instantiation*/,
 w /*configuration*/,
 E /*language*/,
 C /*workspace*/,
 d /*resolverService*/,
 m /*textfiles*/,
 r /*native*/,
 u /*simpleTestService*/,
 a /*vitestProvider*/,
 h /*mochaProvider*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9dd = e.$8dd = void 0),
					(e.$8dd = (0, i.$Mi)("runTestService"));
				let c = class {
					constructor(g, p, o, f, b, s, l, y) {
						(this.a = g),
							(this.b = p),
							(this.c = o),
							(this.d = f),
							(this.e = b),
							(this.f = s),
							(this.g = l),
							(this.h = y),
							this.g.registerSimpleTestProvider(y.createInstance(a.$6dd)),
							this.g.registerSimpleTestProvider(y.createInstance(h.$7dd));
					}
					runTest({ testFileURI: g, testName: p, abortController: o }) {
						const f = this.g.getTestConfig(g);
						if (f === void 0)
							throw new Error(
								`Could not find test configuration for file ${g}. Please configure in your settings.json for the language and directory.`,
							);
						if (
							f.testingFramework !== "vitest" &&
							f.testingFramework !== "mocha"
						)
							throw new Error(
								`Testing framework ${f.testingFramework} not supported.`,
							);
						const b = this.g.getProvider(g);
						if (b === void 0)
							throw new Error(
								`Could not find provider for testing framework ${f.testingFramework}.`,
							);
						return b.runTest({
							testFileURI: g,
							testName: p,
							abortController: o,
							config: f,
						});
					}
				};
				(e.$9dd = c),
					(e.$9dd = c =
						Ne(
							[
								j(0, w.$gj),
								j(1, E.$nM),
								j(2, C.$Vi),
								j(3, d.$MO),
								j(4, m.$kZ),
								j(5, r.$y7c),
								j(6, u.$19b),
								j(7, i.$Li),
							],
							c,
						)),
					(0, t.$lK)(e.$8dd, c, t.InstantiationType.Delayed);
			},
		)
