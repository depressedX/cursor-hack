import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/severity.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../common/dialogs.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../environment/common/environmentService.js';
import '../../../../platform/log/common/log.js';
define(
		de[3284],
		he([1, 0, 111, 3, 57, 2948, 20, 78, 34]),
		function (ce /*require*/,
 e /*exports*/,
 t /*severity*/,
 i /*lifecycle*/,
 w /*dialogs*/,
 E /*dialogs*/,
 C /*extensions*/,
 d /*environmentService*/,
 m /*log*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ivc = void 0),
				(t = xi(t));
			let r = class extends i.$1c {
				constructor(a, h) {
					super(),
						(this.a = a),
						(this.b = h),
						(this.model = this.D(new E.$hvc())),
						(this.onWillShowDialog = this.model.onWillShowDialog),
						(this.onDidShowDialog = this.model.onDidShowDialog);
				}
				c() {
					return this.a.isExtensionDevelopment &&
						this.a.extensionTestsLocationURI
						? !0
						: !!this.a.enableSmokeTestDriver;
				}
				async confirm(a) {
					return this.c()
						? (this.b.trace(
								"DialogService: refused to show confirmation dialog in tests.",
							),
							{ confirmed: !0 })
						: await this.model.show({ confirmArgs: { confirmation: a } })
								.result;
				}
				async prompt(a) {
					if (this.c())
						throw new Error(
							`DialogService: refused to show dialog in tests. Contents: ${a.message}`,
						);
					const c = await this.model.show({ promptArgs: { prompt: a } }).result;
					return { result: await c.result, checkboxChecked: c.checkboxChecked };
				}
				async input(a) {
					if (this.c())
						throw new Error(
							"DialogService: refused to show input dialog in tests.",
						);
					return await this.model.show({ inputArgs: { input: a } }).result;
				}
				async info(a, h) {
					await this.prompt({ type: t.default.Info, message: a, detail: h });
				}
				async warn(a, h) {
					await this.prompt({ type: t.default.Warning, message: a, detail: h });
				}
				async error(a, h) {
					await this.prompt({ type: t.default.Error, message: a, detail: h });
				}
				async customError(a, h) {
					await this.prompt({
						type: t.default.Error,
						message: a,
						detail: h,
						custom: !0,
					});
				}
				async about() {
					if (this.c())
						throw new Error(
							"DialogService: refused to show about dialog in tests.",
						);
					await this.model.show({}).result;
				}
			};
			(e.$ivc = r),
				(e.$ivc = r = Ne([j(0, d.$r8), j(1, m.$ik)], r)),
				(0, C.$lK)(w.$GO, r, C.InstantiationType.Delayed);
		},
	)
